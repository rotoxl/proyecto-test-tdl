var app
function XApp(){
	this.txtFrom=$('#txtOrigen')
	this.txtTo=$('#txtDestino')
	}
XApp.prototype.init=function(){
	this.configArchivoPreguntas={
		sepPregunta:'. ',
		sepRespuesta:') ',

		preguntaContieneRetornos:true,
		respuestaContieneRetornos:true,

		respuestaEsLetra:true,
		respuestaEsMayuscula:false,

		preguntasLlevanNumeroSiempre:true,
		respuestasLlevanLetraSiempre:true,

		variasRespuestasEn1Linea:false, //cuando las respuestas van en plan a) Sí b) No c) Puede
		
		longMinimaPregResp:3, //las líneas que midan menos de 3 incluyendo el bullet se ignoran
		}

	this.configArchivoRespuestas={
		sep:'. ', // '\t',
		contieneImputadas:false
		}

	this.procesaTodo('B_ejer_1_promo_AGE_2013.txt', 
					'B_sol_1_promo_AGE_2013.txt', 
					166, 4)
	}
XApp.prototype.procesaPreguntas=function(data){
	this.preguntas=new CuadernoMSSI().procesa(data)
	if (this.respuestas!=null)
		this.juntaPreguntasYRespuestas()
	}
XApp.prototype.procesaRespuestas=function(data){
	this.respuestas=new RespuestasMSSI().procesa(data)
	
	if (this.preguntas!=null)
		this.juntaPreguntasYRespuestas()
	}
XApp.prototype.juntaPreguntasYRespuestas=function(){
	for (var i=0; i<this.numPregs;i++){		
		this.preguntas[i].cd_respuestacorrecta=this.getRespuestaCorrecta(i)
		}
	this.txtTo.val( JSON.stringify(this.preguntas) )
	}
XApp.prototype.getRespuestaCorrecta=function(i){
	return Number( this.respuestas[i+1] )-1
	}
XApp.prototype.procesaTodo=function(enlacePreguntas, enlaceRespuestas, numPregs, numResps){
	var self=this
	this.numPregs=numPregs
	this.numResps=numResps
	this.cargaArchivoRemoto(enlacePreguntas, function(data){self.procesaPreguntas(data)})
	this.cargaArchivoRemoto(enlaceRespuestas, function(data){self.procesaRespuestas(data)})
	}
XApp.prototype.cargaArchivoRemoto=function(enlace, fnProcesa){
	var self=this

	jQuery.ajax({
		type:'GET',
		dataType:'text',
		url:'./cuadernosTXT/'+enlace
		})
	.success(
		function(data){
			console.info('Archivo remoto descargado')
			fnProcesa(data)
			}
		)
	.error(
		function(a,b,c){
			console.error(a)
		})
	}
//////////////////
function CuadernoMSSI(){}
CuadernoMSSI.prototype.procesa=function(data){
	this.config=app.configArchivoPreguntas
	var desfase=0
	
	this.lRevisar=[]
	var t=data.trim().split('\r')
	if (t.length<3)
		t=data.trim().split('\n')

	var fnFilaPreg=function(i){
		return i*(app.numResps+1)+desfase
	}
	var fnFilaResp=function(i, j){
		return i*(app.numResps+1)+j+1+desfase
	}

	var ret=[]
	for (var i=0; i<app.numPregs; i++){
		
		var filapreg=fnFilaPreg(i)
		var tpreg=t[ filapreg ]
		
		//bullet suelto, o una línea vacía?: la ignoramos
		while (tpreg && tpreg.length<this.config.longMinimaPregResp ){
			desfase++
			tpreg=t[ fnFilaPreg(i) ]
			}

		if (tpreg==null)
			throw 'error en línea '+filapreg+', ¿el núm de preguntas indicado ('+app.numPregs+') no es correcto? parece que hay menos ('+i+')'

		if (this.config.preguntaContieneRetornos){
			filapreg=fnFilaPreg(i)
			tpreg=t[ filapreg ]
			var tFilaSiguiente=t[ filapreg+1 ]

			while (tFilaSiguiente && !this.esPrincipioRespuesta(tFilaSiguiente) ){
				desfase++

				filapreg=fnFilaPreg(i)
				tpreg=tpreg+t[ filapreg ]
				tFilaSiguiente=t[ filapreg+1 ]
				}

			if (tFilaSiguiente==null)
				throw 'error en línea '+filapreg+', ¿el núm de preguntas indicado ('+app.numPregs+') no es correcto? parece que hay menos ('+i+')'
			}

		var p={
			filapreg:filapreg,
			id:i+1,

			cd_pregunta:i,
			pregunta:tpreg,
			}

		if (this.config.preguntaContieneRetornos){
			if ( tpreg.slice(-1)=='-' ){
				desfase++
				tpreg=tpreg+t[fnFilaPreg(i,j)]

				this.revisar(fnFilaPreg(i,j), 'acaba en guión')
				p['revisar']=true
				}
			}

		//pregunta empieza por número pero no es el que le corresponde (a veces, al pasar el
		// 	 pdf a texto desaparece alguna pregunta, o aparece fuera de sitio)
		if ( tpreg.slice(0, 1+(this.config.sepPregunta).length) != (i+1)+this.config.sepPregunta  )
			this.faltaIDPregunta(fnFilaPreg(i,j), i+1)

		///////////////////////
		//Respuestas
		
		for (var j=0; j<app.numResps; j++){
			var filaResp

			var tresp=t[ fnFilaResp(i,j) ]
			//bullet suelto, o una línea vacía?: la ignoramos
			while (tresp && tresp.length<this.config.longMinimaPregResp){
				desfase++
				tresp=t[ fnFilaResp(i,j) ]
				}

			if (tresp==null)
				throw 'error en línea '+fnFilaResp(i,j)+', ¿el núm de preguntas indicado ('+app.numPregs+') no es correcto? parece que hay menos ('+i+')'


			if (this.config.respuestaContieneRetornos){
				if ( tresp.slice(-1)=='-' ){				
					desfase++

					filaResp=fnFilaResp(i,j)
					tresp=tresp+t[filaResp]

					this.revisar(filaResp, 'acaba en guión')
					p['revisar']=true
					}
				}

			//¿viene esta respuesta cortada en 2 líneas?
			if (this.config.respuestaContieneRetornos){
				var filaResp=fnFilaResp(i,j)
				var tResp=t[filaResp]
				var tFilaSiguiente=t[filaResp+1]

				while (tFilaSiguiente!=null && !this.esPrincipioRespuesta(tFilaSiguiente)
											&& !this.esPrincipioPregunta(tFilaSiguiente)){
					desfase++
					filaResp=fnFilaResp(i,j)

					tresp=tresp+t[filaResp]
					tFilaSiguiente=t[filaResp+1]
					}
				}

			//resp empieza por número o letra pero no es el que le corresponde (respuestas desordenadas)
			var trozo=tresp.split(this.config.sepRespuesta)[0]+this.config.sepRespuesta
			if ( trozo!=this.bulletRespuesta(j) )
				throw 'No se puede continuar sin corregir error en respuesta '+(i+1)+':'+j+', línea '+fnFilaResp(i,j)

			p['respuesta'+j]=tresp
			}

		ret.push( this.convierteCarRaros(p) )
		
		// console.log(p)
		// console.log('-------------------------')	
		}

	var ultimaLineaProc=fnFilaResp(i-1,j)
	if (ultimaLineaProc==t.length)
		console.info('El num de lineas del archivo de preguntas parece estar bien')
	else
		console.error('El num de lineas del archivo de preguntas parece estar mal, elimina las línas vacías al final del doc')
	console.log('-------------------------')

	return ret
	}
CuadernoMSSI.prototype.bulletRespuesta=function(i){
	var l=this.listaPosiblesBulletsRespuesta()
	return l[i]
	}
CuadernoMSSI.prototype.listaPosiblesBulletsRespuesta=function(){
	var self=this

	var l=[]
	if (this.config.respuestaEsLetra)
		l=['a', 'b', 'c', 'd', 'e', 'f', 'g']
	else
		l=[1,2,3,4,5,6,7]
	
	if (this.config.respuestaEsMayuscula)
		l=l.map(function(a){return a.toUpperCase()})

	l=l.map(function(a){return a+self.config.sepRespuesta})

	// //insertamos el null en la pos 0
	// l=l.splice(0, 0, null)
	return l
	}
CuadernoMSSI.prototype.faltaIDPregunta=function(i, p){
	this.lRevisar.push ('>>'+i+'(es preg'+p+')' )
	}
CuadernoMSSI.prototype.revisar=function(i, m){
	this.lRevisar.push(i)
	console.warn('>> revisar Linea '+i+': '+m)
	}
CuadernoMSSI.prototype.esPrincipioPregunta=function(linea){
	var s=linea.split(this.config.sepPregunta)[0]
	return !isNaN(s)
	}
CuadernoMSSI.prototype.esPrincipioRespuesta=function(linea){
	var self=this

	var l=this.listaPosiblesBulletsRespuesta()
	var lng=l[0].length
	
	var trozoInicial=linea.trim().slice(0, lng)
	return l.indexOf(trozoInicial)>-1
	}
CuadernoMSSI.prototype.convierteCarRaros=function(p, numRespsPorPreg){
	p.pregunta 	=this.__convierteCarRaros(p.pregunta)
	p.respuesta0=this.__convierteCarRaros(p.respuesta0)
	p.respuesta1=this.__convierteCarRaros(p.respuesta1)
	p.respuesta2=this.__convierteCarRaros(p.respuesta2)
	if (numRespsPorPreg>3)
		p.respuesta3=this.__convierteCarRaros(p.respuesta3)
	if (numRespsPorPreg>4)
		p.respuesta4=this.__convierteCarRaros(p.respuesta4)

	p.pregunta=this.__quitaNumPregunta(p.pregunta,  p.id)
	p.respuesta0=this.__quitaNumRespuesta(p.respuesta0, 0)
	p.respuesta1=this.__quitaNumRespuesta(p.respuesta1, 1)
	p.respuesta2=this.__quitaNumRespuesta(p.respuesta2, 2)
	if (numRespsPorPreg>3)
		p.respuesta3=this.__quitaNumRespuesta(p.respuesta3, 3)
	if (numRespsPorPreg>4)
		p.respuesta4=this.__quitaNumRespuesta(p.respuesta4, 4)

	return p
	}
CuadernoMSSI.prototype.__convierteCarRaros=function(s){
	// ñ, á, é, í, ó, ú, - 

	s=s.replace(/ñ/gi, 'ñ');
	s=s.replace(/á/gi, 'á');
	s=s.replace(/é/gi, 'é');
	s=s.replace(/í/gi, 'é');
	s=s.replace(/ó/gi, 'é');
	s=s.replace(/ú/gi, 'ú');
	s=s.replace(/- /gi, '');
	return s
	}
CuadernoMSSI.prototype.__quitaNumPregunta=function(s, id){
	//quitamos el num de delante, si lo tiene
	var pref=id+this.config.sepPregunta
	if (s.indexOf(pref)==0)
		s=s.substring(pref.length)
	return s
	}
CuadernoMSSI.prototype.__quitaNumRespuesta=function(s, id){
	//quitamos el num de delante, si lo tiene
	var pref=this.bulletRespuesta(id)
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
RespuestasMSSI.prototype.procesa=function(data){
	this.config=app.configArchivoRespuestas
	this.sepPregResp=this.config.sep

	var t=data.split('\r')
	if (t.length<3)
		t=data.split('\n')

	var ret=[]
	for (var i=0; i<t.length; i++){
		var l=t[i]

		var trozos=l.trim().split(this.sepPregResp)
		for (var j=0; j<trozos.length; j=j+2){
			var p=trozos[j]
			var r=this.letraANum(trozos[j+1])

			assert(p>0 && p<app.numPregs+1, '¿numPreguntas=='+app.numPregs+'?')
			if (!this.config.contieneImputadas)
				assert(r=='' || (r>0 && r<(app.numResps+1)), '¿Respuestas=='+app.numResps+'?')
			else
				assert( (r>0 && r<(app.numResps+1) || r==null ), '¿Respuestas=='+app.numResps+'?')

			ret[p]=r
			}
		}
	return ret
	}
RespuestasMSSI.prototype.letraANum=function(i){
	var l=['a', 'b', 'c', 'd', 'e', 'f', 'g']
	if (app.configArchivoPreguntas.respuestaEsMayuscula)
		l=l.map(function(a){return a.toUpperCase()})

	//insertamos el null en la pos 0
	l.splice(0, 0, 'null')

	if (i.toUpperCase()=='X')
		return null
	else
		return l.indexOf(i) //la primera es la 1
	}
