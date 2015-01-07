var app
function get(s){return JSON.parse( localStorage.getItem(s) )}
function save(s,v){
	localStorage.setItem(s, JSON.stringify(v))
	console.info('localStorage: '+s)
	}
function setSelectionRange(input, selectionStart, selectionEnd) {
  	if (input.setSelectionRange) {
    	input.focus();
    	input.setSelectionRange(selectionStart, selectionEnd);
  		}
  	else if (input.createTextRange) {
	    var range = input.createTextRange();
	    range.collapse(true);
	    range.moveEnd('character', selectionEnd);
	    range.moveStart('character', selectionStart);
	    range.select();
	  	}
	}
function setCaretToPos (input, pos) {
  	setSelectionRange(input, pos, pos);
	}
/////////
function XApp(){
	this.sev=0
	this.sevLevels={info:0, warning:1, danger:2}

	this.cache=get('migrador_cache') || {
		numPregs:166, numResps:4
		}
	this.configArchivoPreguntas=get('migrador_config_preguntas') || {
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
	this.configArchivoRespuestas=get('migrador_config_respuestas') || {
		contieneImputadas:false,
		sep:'. '
		}

	this.cache.numPregs=Number(this.cache.numPregs)
	this.cache.numResps=Number(this.cache.numResps)
	}
XApp.prototype.init=function(){
	jwerty.key('F3', function(){app.btnProcesa()})

	this.edPreguntas = ace.edit('preguntas')
    this.edPreguntas.setTheme('ace/theme/textmate')
    this.edPreguntas.getSession().setMode('ace/mode/text')

    this.domAlert=$('.alert')
	
	this.edRespuestas = $('#txtRespuestas')

	this.edGen = $('#txtGenerado')

	var sr=document.location.search+''
	if (sr!=''){
		var temp=sr.substring(1).split('&')

		this.cache.fPreguntas=temp[0].substring(3)
		this.cache.fRespuestas=temp[1].substring(3)

		this.procesaTodo(
			this.cache.fPreguntas, 
			this.cache.fRespuestas
			)
		}

	
	}
///////
XApp.prototype.reinitAlert=function(){
	this.sev=0
	this.domAlert.removeClass('alert-warning alert-danger').find('p').remove()
	this.gtline=0
	this.edGen.val('')
	}
XApp.prototype.info=function(d){this.log(d, 'info')}
XApp.prototype.warning=function(d){this.log(d, 'warning')}
XApp.prototype.danger=function(d){this.log(d, 'danger')}
XApp.prototype.log=function(d,sev){

	var nsev=this.sevLevels[sev]
	if (nsev>this.sev)this.sev=nsev

	var ks=Object.keys(this.sevLevels)[nsev]
	
	this.domAlert
		.removeClass('alert-info alert-warning alert-danger')
		.addClass('alert-'+ks)
		//.find('p').remove()
	
	var msg=d
	if (d instanceof errLocalizado){
		msg=d.msg+ ' <u>(línea '+d.l+')</u>'
		this.edPreguntas.gotoLine(d.l)
		this.gtline=d.l

		if (d.obj) this.domAlert.append('<p>'+JSON.stringify(d.obj)+'</p>')	
		}
	else if (d instanceof Object)
		msg=JSON.stringify(d)
	
	this.domAlert.append('<p>'+msg+'</p>')
	
	}
///////
XApp.prototype.btnConfig=function(){
	$('.modal.frmConfig').find('#ctlNumPregs').val(this.cache.numPregs)
	$('.modal.frmConfig').find('#ctlNumResps').val(this.cache.numResps)

	$('.modal.frmConfig').find('#sepPregunta').val(this.configArchivoPreguntas.sepPregunta)
	$('.modal.frmConfig').find('#sepRespuesta').val(this.configArchivoPreguntas.sepRespuesta)

	$('.modal.frmConfig').find('#preguntaContieneRetornos').prop('checked', this.configArchivoPreguntas.preguntaContieneRetornos)
	$('.modal.frmConfig').find('#respuestaContieneRetornos').prop('checked', this.configArchivoPreguntas.respuestaContieneRetornos)

	$('.modal.frmConfig').find('#respuestaEsLetra').prop('checked', this.configArchivoPreguntas.respuestaEsLetra)
	$('.modal.frmConfig').find('#respuestaEsMayuscula').prop('checked', this.configArchivoPreguntas.respuestaEsMayuscula)

	$('.modal.frmConfig').find('#preguntasLlevanNumeroSiempre').prop('checked', this.configArchivoPreguntas.preguntasLlevanNumeroSiempre)
	$('.modal.frmConfig').find('#respuestasLlevanLetraSiempre').prop('checked', this.configArchivoPreguntas.respuestasLlevanLetraSiempre)

	$('.modal.frmConfig').find('#variasRespuestasEn1Linea').prop('checked', this.configArchivoPreguntas.variasRespuestasEn1Linea)
	$('.modal.frmConfig').find('#longMinimaPregResp').val(this.configArchivoPreguntas.longMinimaPregResp)

	$('.modal.frmConfig').find('#contieneImputadas').prop('checked', this.configArchivoRespuestas.contieneImputadas)
	$('.modal.frmConfig').find('#sepPregRespuesta').val(this.configArchivoRespuestas.sep)

	$('.modal.frmConfig .ios-ui-select').remove()
	$('.modal.frmConfig input[type=checkbox]').iosCheckbox()

	$('.modal.frmConfig').modal('show')
	}	
XApp.prototype.guardarConfig=function(){
	this.cache.numPregs = $('.modal.frmConfig').find('#ctlNumPregs').val()
	this.cache.numResps = $('.modal.frmConfig').find('#ctlNumResps').val()
	this.configArchivoPreguntas.sepPregunta = $('.modal.frmConfig').find('#sepPregunta').val()
	this.configArchivoPreguntas.sepRespuesta = $('.modal.frmConfig').find('#sepRespuesta').val()
	this.configArchivoPreguntas.preguntaContieneRetornos = $('.modal.frmConfig').find('#preguntaContieneRetornos').prop('checked')
	this.configArchivoPreguntas.respuestaContieneRetornos = $('.modal.frmConfig').find('#respuestaContieneRetornos').prop('checked')
	this.configArchivoPreguntas.respuestaEsLetra = $('.modal.frmConfig').find('#respuestaEsLetra').prop('checked')
	this.configArchivoPreguntas.respuestaEsMayuscula = $('.modal.frmConfig').find('#respuestaEsMayuscula').prop('checked')
	this.configArchivoPreguntas.preguntasLlevanNumeroSiempre = $('.modal.frmConfig').find('#preguntasLlevanNumeroSiempre').prop('checked')
	this.configArchivoPreguntas.respuestasLlevanLetraSiempre = $('.modal.frmConfig').find('#respuestasLlevanLetraSiempre').prop('checked')
	this.configArchivoPreguntas.variasRespuestasEn1Linea = $('.modal.frmConfig').find('#variasRespuestasEn1Linea').prop('checked')
	this.configArchivoPreguntas.longMinimaPregResp = $('.modal.frmConfig').find('#longMinimaPregResp').val()
	this.configArchivoRespuestas.contieneImputadas = $('.modal.frmConfig').find('#contieneImputadas').prop('checked')
	this.configArchivoRespuestas.sep = $('.modal.frmConfig').find('#sepPregRespuesta').val()

	save('migrador_cache', this.cache)
	save('migrador_config_preguntas', this.configArchivoPreguntas)
	save('migrador_config_respuestas', this.configArchivoRespuestas)

	$('.modal.frmConfig').modal('hide')
	this.btnProcesa()
	}
XApp.prototype.gotoLastError=function(){
	this.edPreguntas.gotoLine(this.gtline)
	}
XApp.prototype.btnProcesa=function(){
	this.reinitAlert()

	this.preguntas=null
	this.respuestas=null

	this.cache.numPregs=Number(this.cache.numPregs)
	this.cache.numResps=Number(this.cache.numResps)

	var data=this.edPreguntas.getValue()
	this.procesaPreguntas(data)

	var dr=this.edRespuestas.val()
	this.procesaRespuestas(dr)
	}
///////	
XApp.prototype.sacaFrmRespuesta=function(ret){
	$('.modal.frmRespuesta textarea').val( JSON.stringify(ret) )
	$('.modal.frmRespuesta').modal('show')
	}
///////	
XApp.prototype.subirArchivos=function(){
	$('.frmSubirArchivos').modal('show')
	}
XApp.prototype.procesaPreguntas=function(data){

	this.edPreguntas.setValue(data)

	try{
		this.preguntas=new CuadernoMSSI().procesa(data)
		}
	catch (e){
		app.danger(e)
		return
	}

	if (this.respuestas!=null)
		this.juntaPreguntasYRespuestas()
	}
XApp.prototype.procesaRespuestas=function(data){
	this.edRespuestas.val(data)
	try{
		this.respuestas=new RespuestasMSSI().procesa(data)
		}
	catch (e){
		app.danger(e)
		return
	}

	if (this.preguntas!=null)
		this.juntaPreguntasYRespuestas()
	}
XApp.prototype.juntaPreguntasYRespuestas=function(){
	for (var i=0; i<this.cache.numPregs;i++){		
		this.preguntas[i].cd_respuestacorrecta=this.getRespuestaCorrecta(i)
		}
	this.sacaFrmRespuesta(this.preguntas)
	}
XApp.prototype.getRespuestaCorrecta=function(i){
	return Number( this.respuestas[i+1] )-1
	}
XApp.prototype.procesaTodo=function(enlacePreguntas, enlaceRespuestas){
	var self=this
	this.cargaArchivoRemoto(enlacePreguntas, function(data){self.procesaPreguntas(data)})
	this.cargaArchivoRemoto(enlaceRespuestas, function(data){self.procesaRespuestas(data)})
	}
XApp.prototype.cargaArchivoRemoto=function(enlace, fnProcesa){
	var self=this

	jQuery.ajax({
		type:'GET',
		dataType:'text',
		url:'./'+enlace
		})
	.success(
		function(data){
			// app.info('Archivo remoto descargado')
			fnProcesa(data)
			}
		)
	.error(
		function(a,b,c){
			app.danger(a)
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
		return i*( Number(app.cache.numResps)+1)+desfase
	}
	var fnFilaResp=function(i, j){
		return i*( Number(app.cache.numResps)+1)+j+1+desfase
	}

	var ret=[]
	for (var i=0; i<app.cache.numPregs; i++){
		
		var filapreg=fnFilaPreg(i)
		var tpreg=t[ filapreg ]
		
		//las líneas que empiezan por # son comentarios
		while (tpreg!=null && tpreg.indexOf('#')==0){
			desfase++
			tpreg=t[ fnFilaPreg(i) ]
			}

		//bullet suelto, o una línea vacía?: la ignoramos
		while (tpreg!=null && tpreg.length<this.config.longMinimaPregResp ){
			desfase++
			tpreg=t[ fnFilaPreg(i) ]
			}

		if (tpreg==null)
			throw 'error en línea '+filapreg+', ¿el núm de preguntas indicado ('+app.cache.numPregs+') no es correcto? parece que hay menos ('+i+')'

		if (this.esPrincipioRespuesta(tpreg))
			throw new errLocalizado('No se puede continuar sin corregir error en pregunta '+(i+1),
										filapreg,
										'. Se encontró: '+tpreg,
										p)
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
				throw 'error en línea '+filapreg+', ¿el núm de preguntas indicado ('+app.cache.numPregs+') no es correcto? parece que hay menos ('+i+')'
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
		
		for (var j=0; j<app.cache.numResps; j++){
			var filaResp

			var tresp=t[ fnFilaResp(i,j) ]
			//bullet suelto, o una línea vacía?: la ignoramos
			while (tresp!=null && tresp.length<this.config.longMinimaPregResp){
				desfase++
				tresp=t[ fnFilaResp(i,j) ]
				}

			if (tresp==null)
				throw 'error en línea '+fnFilaResp(i,j)+', ¿el núm de preguntas indicado ('+app.cache.numPregs+') no es correcto? parece que hay menos ('+i+')'


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
			if (this.config.respuestasLlevanLetraSiempre && trozo!=this.bulletRespuesta(j) )
				throw new errLocalizado('No se puede continuar sin corregir error en respuesta '+(i+1)+':'+j,
										fnFilaResp(i,j),
										'Se esperaba: '+this.bulletRespuesta(j)+'. Se encontró: '+trozo,
										p)

			p['respuesta'+j]=tresp
			}

		ret.push( this.convierteCarRaros(p, app.cache.numResps) )
		//--------------------
		var va=app.edGen.val()
		if (va!='') va+='\n---------------\n'
		app.edGen.val( va+JSON.stringify(p, null, 2) )

		setTimeout(function(){setCaretToPos(app.edGen[0], va.length)}, 100)
		}

	var ultimaLineaProc=fnFilaResp(i-1,j)
	if (ultimaLineaProc==t.length)
		app.info('El num de lineas del archivo de preguntas parece estar bien')
	else
		throw new err('El num de lineas del archivo de preguntas parece estar mal, elimina las línas vacías al final del doc ('+app.cache.numPregs+' preguntas)')
	

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
	app.warn('>> revisar Linea '+i+': '+m)
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
			var p, r
			if (trozos.length==1){//sin número, sólo una letra en cada fila
				p=i+1
				r=this.letraANum(trozos[j])
				}
			else { //formato 1 A 2 B
				p=trozos[j]
				r=this.letraANum(trozos[j+1])
				}
			 
			assert(p>0 && p<app.cache.numPregs+1, '¿numPreguntas=='+app.cache.numPregs+'?')
			if (!this.config.contieneImputadas)
				assert(r=='' || (r>0 && r<(app.cache.numResps+1)), '¿Respuestas=='+app.cache.numResps+'?')
			else
				assert( (r>0 && r<(app.cache.numResps+1) || r==null ), '¿Respuestas=='+app.cache.numResps+'?')

			ret[p]=r
			}
		}
	return ret
	}
RespuestasMSSI.prototype.letraANum=function(i){
	if (!app.configArchivoPreguntas.respuestaEsMayuscula && ['A', 'B', 'C', 'D', 'E', 'F', 'G'].indexOf(i)>-1)
		app.configArchivoPreguntas.respuestaEsMayuscula=true

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


//////////////////
function errLocalizado(msg, l, msgExtra, obj){
	this.msg=msg+' - ' +msgExtra
	this.l=l
	this.msgExtra=msgExtra
	this.obj=obj
	}
function err(msg){
	this.msg=msg
	}
function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        	}
        throw message; // Fallback
    	}
	}
