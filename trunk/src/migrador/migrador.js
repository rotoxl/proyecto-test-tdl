var app
function XApp(){
	this.txtFrom=$('#txtOrigen')
	this.txtTo=$('#txtDestino')
}
XApp.prototype.cargaArchivoRemoto=function(enlace){
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
			self.procesa(data)
			}
		)
	.error(
		function(a,b,c){
			console.error(a)
		})
	}
XApp.prototype.procesa=function(data){
	this.doProcesa(data, 110, 5)
	}
XApp.prototype.faltaIDPregunta=function(i, p){
	this.lRevisar.push ('>>'+i+'(es preg'+p+')' )
	}
XApp.prototype.revisar=function(i, m){
	this.lRevisar.push(i)
	console.warn('>> revisar Linea '+i+': '+m)
	}
XApp.prototype.empiezaPor12345=function(s){
	var l=['1', '2', '3', '4', '5', ]
	 return l.indexOf(s)>-1
}
XApp.prototype.doProcesa=function(data, numPregs, numRespsPorPreg){
	var longMinimaResp=6, desfase=0
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
			q:tpreg,
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

			p['a'+j]=tresp
			}

		
		ret.push(p)
		
		console.log(p)
		console.log('-------------------------')	
		}

	var ultimaLineaProc=fnFilaResp(i-1,j)
	if (ultimaLineaProc==t.length)
		console.info('El num de lineas parece estar bien')
	else
		console.error('El num de lineas parece estar mal')
	console.log('-------------------------')

	// console.log('Lineas <a revisar:')
	// console.log(this.lRevisar)
	}
XApp.prototype.convierteCarRaros=function(p){
	p.q=this.__convierteCarRaros(p.q)
	p.a0=this.__convierteCarRaros(p.a0)
	p.a1=this.__convierteCarRaros(p.a1)
	p.a2=this.__convierteCarRaros(p.a2)
	p.a3=this.__convierteCarRaros(p.a3)
	p.a4=this.__convierteCarRaros(p.a4)
	return s
}
XApp.prototype.__convierteCarRaros=function(s){

}