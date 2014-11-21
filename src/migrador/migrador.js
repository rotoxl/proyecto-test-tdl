var app
function XApp(){
	this.txtFrom=$('#txtOrigen')
	this.txtTo=$('#txtDestino')
	}
XApp.prototype.init=function(){
	// this.cargaArchivoRemoto('Cuaderno_2009_1_M_Respuestas.txt', 235, 5)
	this.cargaArchivoRemoto('Cuaderno_2009_1_M.txt', 235, 5)
	}
XApp.prototype.procesa=function(data, numPregs, numResps){
	// var ret=new RespuestasMSSI().procesa(data, numPregs, numResps)
	var ret=new CuadernoMSSI().procesa(data, numPregs, numResps)
	this.txtTo.val( JSON.stringify(ret) )
	}
XApp.prototype.cargaArchivoRemoto=function(enlace, numPregs, numResps){
	var self=this

	jQuery.ajax({
		type:'GET',
		dataType:'text',
		url:'./cuadernosTXT/'+enlace
		})
	.success(
		function(data){
			console.info('Archivo remoto descargado')
			
			self.txtFrom.val(data)
			self.procesa(data, numPregs, numResps)
			}
		)
	.error(
		function(a,b,c){
			console.error(a)
		})
	}
//////////////////
function CuadernoMSSI(){}
CuadernoMSSI.prototype.respuestaCorrecta=function(i){
	var a=
	 	[null,"2","5","2","4","4","1","4","5","1","3","1","2","4","3","1","2","3","1","2","4","2","2","5","2","4","5","","5","1","3","3","","4","5","3","4","1","3","2","1","3","5","1","4","2","3","3","3","5","3","4","5","1","5","2","4","4","4","5","2","5","3","4","2","3","2","5","2","1","4","4","3","5","3","4","1","3","1","4","3","4","3","4","5","3","5","3","2","1","5","4","3","1","2","4","3","4","2","3","3","3","5","1","3","3","5","1","3","4","2","3","4","2","4","3","4","5","1","5","5","4","3","5","","4","2","4","4","2","4","3","4","5","2","3","2","5","3","2","4","2","3","4","5","3","3","2","2","3","4","4","5","1","5","3","2","4","4","4","1","4","5","3","4","2","2","4","2","5","1","4","","4","2","3","3","3","5","3","2","2","3","3","1","2","3","3","4","5","4","4","2","1","1","5","4","3","1","4","5","3","2","4","5","3","2","4","5","4","2","1","5","3","1","3","4","3","3","3","4","3","4","","4","3","3","2","2","1","4","1","2","4","4","2"]

	return Number(a[i+1])-1
	}
CuadernoMSSI.prototype.procesa=function(data, numPregs, numRespsPorPreg){
	var longMinimaResp=5, desfase=0
	var preguntasLlevanNumero=true, respsLlevanNumero=true
	var sepResps='. '

	this.lRevisar=[]
	var t=data.split('\r')
	if (t.length<3)
		t=data.split('\n')

	var fnFilaPreg=function(i){
		return i*(numRespsPorPreg+1)+desfase
	}
	var fnFilaResp=function(i, j){
		return i*(numRespsPorPreg+1)+j+1+desfase
	}

	var ret=[]
	for (var i=0; i<numPregs; i++){
		
		var filapreg=fnFilaPreg(i)
		var tpreg=t[ filapreg ]
		while (tpreg.length<longMinimaResp){
			desfase++
			tpreg=t[ fnFilaPreg(i) ]
			}
		
		var p={
			filapreg:filapreg,
			id:i+1,

			cd_pregunta:i,
			pregunta:tpreg,
			}

		if ( tpreg.slice(-1)=='-' ){
			desfase++
			tpreg=tpreg+t[fnFilaPreg(i,j)]

			this.revisar(fnFilaPreg(i,j), 'acaba en guión')
			p['revisar']=true
			}

		//empieza por número pero no es el que le corresponde->fallo gordo
		var trozos=tpreg.split(sepResps)
		if (this.empiezaPor12345(trozos[0]) && trozos[0]!=i+1)
			throw 'No se puede continuar sin corregir error línea '+filapreg

		//empieza por su correspondiente núm de pregunta?
		if ( tpreg.slice(0,(i+'. ').length) != (i+1)+'. '  )
			this.faltaIDPregunta(fnFilaPreg(i,j), i+1)

		for (var j=0; j<numRespsPorPreg; j++){

			var tresp=t[ fnFilaResp(i,j) ]
			while (tresp.length<longMinimaResp){
				desfase++
				tresp=t[ fnFilaResp(i,j) ]
				}

			if ( tresp.slice(-1)=='-' ){				
				desfase++
				tresp=tresp+t[fnFilaResp(i,j)]

				this.revisar(fnFilaResp(i,j), 'acaba en guión')
				p['revisar']=true
				}
			var nfila=fnFilaResp(i,j)

			//¿viene esta respuesta cortada en 2 líneas?
			var sigFila=t[nfila+1]
			if (sigFila){
				sigFila=sigFila.split(sepResps)
			
				if (j<(numRespsPorPreg-1) && !this.empiezaPor12345(sigFila[0]) ){
					// console.error('OJO a esto')
					desfase++
					tresp=tresp+t[fnFilaResp(i,j)]
					}
				}

			var trozos=tresp.split('. ')
			if (trozos[0]!=(j+1) )
				throw 'No se puede continuar sin corregir error en respuesta '+(i+1)+':'+j+', línea '+fnFilaResp(i,j)

			p['respuesta'+j]=tresp
			}

		p.cd_respuestacorrecta=this.respuestaCorrecta(i)
		ret.push( this.convierteCarRaros(p) )
		
		console.log(p)
		console.log('-------------------------')	
		}

	var ultimaLineaProc=fnFilaResp(i-1,j)
	if (ultimaLineaProc==t.length)
		console.info('El num de lineas parece estar bien')
	else
		console.error('El num de lineas parece estar mal, elimina las línas vacías al final del doc')
	console.log('-------------------------')

	return ret
	}
CuadernoMSSI.prototype.faltaIDPregunta=function(i, p){
	this.lRevisar.push ('>>'+i+'(es preg'+p+')' )
	}
CuadernoMSSI.prototype.revisar=function(i, m){
	this.lRevisar.push(i)
	console.warn('>> revisar Linea '+i+': '+m)
	}
CuadernoMSSI.prototype.empiezaPor12345=function(s){
	var l=['1', '2', '3', '4', '5', ]
	return l.indexOf(s)>-1
	}
CuadernoMSSI.prototype.convierteCarRaros=function(p){
	p.pregunta 	=this.__convierteCarRaros(p.pregunta,   p.id)
	p.respuesta0=this.__convierteCarRaros(p.respuesta0, 1)
	p.respuesta1=this.__convierteCarRaros(p.respuesta1, 2)
	p.respuesta2=this.__convierteCarRaros(p.respuesta2, 3)
	p.respuesta3=this.__convierteCarRaros(p.respuesta3, 4)
	p.respuesta4=this.__convierteCarRaros(p.respuesta4, 5)
	return p
	}
CuadernoMSSI.prototype.__convierteCarRaros=function(s, id){
	// ñ, á, é, í, ó, ú, - 
	
	//quitamos el num de delante, si lo tiene
	var pref=id+'. '
	if (s.indexOf(pref)==0)
		s=s.substring(pref.length)
	return s
	}
//////////////////
function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        	}
        throw message; // Fallback
    	}
	}
//////////////////

function RespuestasMSSI(){}
RespuestasMSSI.prototype.procesa=function(data, numPregs, numRespsPorPreg){
	var t=data.split('\r')
	if (t.length<3)
		t=data.split('\n')

	var ret=[]
	for (var i=0; i<t.length; i++){
		var l=t[i]

		var trozos=l.split('\t')
		for (var j=0; j<trozos.length; j=j+2){
			var p=trozos[j]
			var r=trozos[j+1]

			assert(p>0 && p<numPregs+1, '¿numPreguntas=='+numPregs+'?')
			assert(r=='' || (r>0 && r<(numRespsPorPreg+1)), '¿Respuestas=='+numRespsPorPreg+'?')

			ret[p]=r
			}
		}
	return ret
}

