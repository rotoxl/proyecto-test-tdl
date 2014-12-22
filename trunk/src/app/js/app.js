"use strict"
jQuery.noConflict()

var app, espacioDuro='\xA0', espacioDuro2='\xA0\xA0', vbCrLf='\n'
var _isPhone=null
function isPhone(){
	if (_isPhone==null){
		if (document.URL.indexOf("http://") === 0 || document.URL.indexOf("https://") === 0) 
			_isPhone=false
		else
			_isPhone=true
		}
	return _isPhone
	}
function creaObjProp(tipo, dicPropiedades){
	var subtipo
	if (tipo.indexOf(':')>-1){
		var temp=tipo.split(':')
		tipo=temp[0];subtipo=temp[1]
		}
	var obj=document.createElement(tipo)
	if (subtipo) obj.type=subtipo

	modObjProp(obj, dicPropiedades)
	return obj
	}
function modObjProp(obj, dicPropiedades){
	for (var prop in dicPropiedades){
		var valor=dicPropiedades[prop]
		if (valor==null)
				 continue
		try {
		 	if (prop=='omiteNulo')
			 	continue
		 	else if (prop=='textos') {//separados por \n
				var trozos=valor.split('\\n')
				for (var i=0; i<trozos.length; i++){
					var trozo=trozos[i]

					if (trozo.indexOf('\\t')>-1){
						var _l=trozo.split('\\t')
						for (var j=0; j<_l.length; j++){
							obj.appendChild( document.createTextNode('\u00a0') ) //tab='\u0009', espacio='\u00a0'
							obj.appendChild( document.createTextNode(_l[j]) )
							}
						}
					else
						obj.appendChild( document.createTextNode(trozo) )

					if (i<trozos.length-1) obj.appendChild(creaObjProp('BR'))
					}
				}
		 	else if (prop=='texto' )
				obj.appendChild( document.createTextNode(valor))
		 	else if (prop=='i'){
				if (dicPropiedades['omiteNulo']){
					if ( (dicPropiedades['texto']==null || dicPropiedades['texto']=='') && 
						dicPropiedades['hijo']==null && 
						(dicPropiedades['hijos']==null || dicPropiedades['hijos'].length==0) )
							continue
						}
				var xi=document.createElement('i')
				xi.className='fa '+valor

				if (obj.firstChild)
					obj.insertBefore(xi, obj.firstChild)
				else
					obj.appendChild(xi)
				}
		 	else if (prop=='stack'){
				var icon_stack=document.createElement('span')
				var lg=''
				if (valor.indexOf('fa-lg')>-1){
					lg=' fa-lg'
					valor=valor.replace('fa-lg', '')
				}
				icon_stack.className='fa-stack icon-stack'+lg


				var icon_circle=document.createElement('i')
				icon_circle.className='fa fa-circle fa-stack-2x'
				icon_stack.appendChild(icon_circle)

				var icon_myElement=document.createElement('i')
				icon_myElement.className='fa fa-stack-1x fa-inverse '+valor
				icon_stack.appendChild(icon_myElement)

				if (obj.firstChild)
						 obj.insertBefore(icon_stack, obj.firstChild)
				else
						 obj.appendChild(icon_stack)
				}
		 	else if (prop=='hijos'){
				for (var i=0; i<valor.length; i++){
					 var trozo=valor[i]
					 obj.appendChild( trozo )
					 }
				}
		 	else if (prop=='hijo')
				obj.appendChild(valor)
		 	else if (prop.indexOf('style.')==0 ) {//error setting a property that has only a getter
				prop=prop.substring(6)
				if (['left', 'top', 'width', 'height'].indexOf(prop)>-1){
				 	valor=valor.toString()
					if (valor.indexOf('px')==-1 && valor.indexOf('%')==-1)
						valor+='px'
					}
				obj.style[prop]=valor
				}
		 	//~ else if (prop=='quitaEstilo')
					//~ quitaEstilo(obj, valor)
		 	else if (prop.indexOf('attr.')==0){
				prop=prop.substring(5)
				obj.setAttribute(prop, valor)
				}
		 	else if (prop.indexOf('data-')==0){
				obj.setAttribute(prop, valor)
				}
		 	else if (prop=='html')
				obj.innerHTML=valor
		 	else
				obj[prop]=valor
				}
		catch (e) {
			console.error('ERROR '+e.message + '\nen '+e.fileName+' linea '+e.lineNumber)
			}
		}
	}
function creaT(t){return document.createTextNode(t)}
function lpad(v, carRelleno, lenTotal){
	carRelleno=carRelleno || '0'
	lenTotal=lenTotal || 2

	var ini=''
	while (ini.length<lenTotal){
		ini+=carRelleno
	}
	return (ini+v).substr(-lenTotal, lenTotal)
	}
function buscaFilas(filas, dicBuscado){
	//devuelve el array de filas que cumplen los requisitos
	if (filas==null) return []
	var fn=function(element, index){
		for (var k in dicBuscado){
			if (k.indexOf('_contains_')==0){
				var kt=k.substr( '_contains_'.length )
				var zonaBusqueda=element[kt]
				
				if (zonaBusqueda.indexOf( (dicBuscado[k]+'') )==-1)
					return false
				}
			else if (dicBuscado[k]!=element[k]){
				return false
				}
			}
		return true
		}
	return jQuery.grep(filas, fn)
	}
function getIndiceFila(filas, dicBuscado, todas){
	if (filas==null) return -1
	var _idx=0
	filas.map(function(el){el._idx=_idx; _idx++})
	var filas=buscaFilas(filas, dicBuscado)

	if (filas.length==0) 
		return -1

	if (todas!=null && todas==true){
		var ret=[]
		for (var i=0; i<filas.length;i++){
			ret.push( filas[i]._idx )
			}
		return ret
		}
	else{
		var idxBorrar=filas[0]._idx
		return idxBorrar
		}
	}
function get(s){return JSON.parse( localStorage.getItem(s) )}
function save(s,v){
	localStorage.setItem(s, JSON.stringify(v))
	console.info('localStorage: '+s)
	}
function xeval(s){return JSON.parse(s)}
//////////
var Formato=function(){
	// this.formatoFecha='dd/mm/yyyy'
	this.simbMoneda='€'
	this.numDecimales=2
	this.posMoneda='d'
	this.sepMiles='.'
	this.sepDecimal=','
	
	this.sepFecha='-'
	this.sepFechaHora=' '
	this.sepHora=':'
	}
Formato.prototype.moneda = function(dato, simbMoneda) {
	return this.formato_numero(dato, this.numDecimales, this.sepDecimal, this.sepMiles)+' '+this.simbMoneda
	}
Formato.prototype.number=function(dato){
    return this.formato_numero(dato, this.numDecimales, this.sepDecimal, this.sepMiles)
	}
Formato.prototype.integer=function(dato){
    return this.formato_numero(dato, 0, this.sepDecimal, this.sepMiles)
	}
Formato.prototype.formato_numero=function(numero, numDecimales, separador_decimal, separador_miles){
    numero=parseFloat(numero);
    if(isNaN(numero)){
        return "";
    }

    if(numDecimales!==undefined){
        // Redondeamos
        numero=numero.toFixed(numDecimales);
    }

    // Convertimos el punto en separador_decimal
    numero=numero.toString().replace(".", separador_decimal!==undefined ? separador_decimal : ",");

    if(separador_miles){
        // Añadimos los separadores de miles
        var miles=new RegExp("(-?[0-9]+)([0-9]{3})");
        while(miles.test(numero)) {
            numero=numero.replace(miles, "$1" + separador_miles + "$2");
        }
    }

    return numero;
	}
////
Formato.prototype._ddmmyyyy=function(f){
	return lpad(f.getDate(), '0', 2)+this.sepFecha+lpad(f.getMonth()+1, '0', 2)+this.sepFecha+f.getFullYear()
	}
Formato.prototype._hhmm=function(f){
	return lpad(f.getHours(), '0', 2)+this.sepHora+lpad(f.getMinutes(), '0', 2)
	}
Formato.prototype._hhmmss=function(f){
	return lpad(f.getHours(), '0', 2)+this.sepHora+lpad(f.getMinutes(), '0', 2)+this.sepHora+lpad(f.getSeconds(), '0', 2)
	}
Formato.prototype.fechaDDMMYYYY=function(t){
	var f=this.toDate(t)
	if (f==null) return '';
	return this._ddmmyyyy(f)
	}
Formato.prototype.fechaDDMMYYYYHHMMSS=function(t){
	var f=this.toDate(t)
	if (f==null) return '';

    return 	this._ddmmyyyy(f)+' '+this._hhmmss(f)
	}
Formato.prototype.fechaUHora=function(t){
	var f=this.toDate(t)
	if (f==null) return '';

	var hoy=new Date()
	if (f.getDate()==hoy.getDate() && 
		f.getMonth()==hoy.getMonth() && 
		f.getFullYear()==hoy.getFullYear()){

		return this._hhmm(f)
		}
	else 
		return this._ddmmyyyy(f)
	}
Formato.prototype.fechaComps=function(t){
	var f=this.toDate(t)
	if (f==null) return '';
	return {
		dia:f.getDate()    ,
		mes:f.getMonth()+1 ,
		mesl: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'][f.getMonth()],
		año:f.getFullYear(),
		hora:f.getHours()  ,
		min:f.getMinutes() ,
		seg:f.getSeconds()
      	}
	}
Formato.prototype.toDate=function(t){
	var fjs
	if (t==null)
        fjs=null
    else if (t instanceof Date)
    	fjs=t
    else if (typeof(t)=='number')//Long
        fjs=new Date(t)
    
    else {
    	var ret=new Date(t)
       	if (!isNaN( ret.getTime() ) )//check invalid date
         	fjs=ret
        else
        	fjs=this._fechajs(t)
    	}
    return fjs
	}
Formato.prototype._fechajs=function(fOriginal){
	var ret
    if(fOriginal==null) 
    	return null
    else if (fOriginal instanceof Date){
        return fOriginal
        }

    var trozos=(fOriginal+'').split(this.sepFechaHora)
    var ret=new Date()

    var sep= this.sepFecha
    if (trozos[0].indexOf('/')>-1) sep='/'

    var f=trozos[0].split(sep)
    var dia, mes, ano
    dia=f[0]; mes=f[1]; ano=f[2]
    if (dia>2000){
         dia=f[2]
         ano=f[0]
         }
    ano=ano.split('.')[0] // ¿viene con milisegundos?
    
    ret.setUTCFullYear(ano)
    ret.setUTCDate(dia)
    ret.setUTCMonth( (Number(mes)-1) )
    ret.setUTCDate(dia) //sí, 2 veces. Si le pones que es febrero y casualmente hoy es día 31 te lo cambia 2-marzo
    ret.setUTCMonth( (Number(mes)-1) )//¿estaba dando error al parsear 2013-02-01?
    
    if (trozos[1]) {
        var f=trozos[1].split(this.sepHora)
        var h,m,s
        h=Number(f[0])
        m=Number(f[1])
        s=Number(f[2])

        ret.setHours(h)
        ret.setMinutes(m)
        ret.setSeconds(s)
        }
    return ret
    }
var formato=new Formato()
//////////
function Controlador(){
	var self=this

	this.nav=[]
	this.cache={}
	this.config={
				pushSenderID:GCM_SENDER_ID,
				imgBase: 'https://s3-eu-west-1.amazonaws.com/octopus.recursos/',
			}
	this.init()

	if ( isPhone() )
		this.config.servidor='http://octopusapp.elasticbeanstalk.com/app/'
		// this.config.servidor='http://192.168.0.196:8888/octopus/'
	else
		this.config.servidor='./'
	this.config.url=this.config.servidor+'index_r.php'

	//////////
	var sr=document.location.search+''

	if (sr.indexOf('?token=')==0){//web
		this.cache.token=sr.substring('?token='.length).split('&')[0]
		var refresh_token=sr.substring( sr.indexOf('refresh_token=')+14 ).split('&')[0]
		if (refresh_token.length>10)
			save('tapp37_refresh_token', refresh_token)

		this.loginEnMiNube()

		this.cache.loginExpires=null
		if (sr.indexOf('expires=')>-1){
			var expires=sr.substring( sr.indexOf('expires=')+8).split('&')[0]
			this.cache.loginExpires=new Date(expires-2*60*1000)//2 minutos de margen
			}

		}
	else if (sr.indexOf('?nativo=')==0){//Teléfonos, login nativo
		this.cache.token=null
		this.cache.loginExpires=null
		
		var l=sr.split('&'), obj={}
		for (var j=0; j<l.length; j++){
			var temp=l[j].split('=')
			if (temp[0]=='?nativo')
				continue
			obj[temp[0]]=temp[1]
			}
		this.loginEnMiNubeSinToken(obj)
		this.userDataReceived(obj)
		}
	else if (sr.indexOf('?noHayDatos')==0){
		var s=get('tapp37_userdata')
		this.cache.usuario=JSON.parse(s) || {
								cd_usuario: 'desconocido',
								email:'desconocido@ejemplo.com',
								given_name: 'Desconocido', family_name: 'Desconocido',
								picture:'./images/avatar_default.png',
								}
		this.offline=true
		this.cache.usuario.loginExpires=null
		this.actualizaDomUsuario()
		setTimeout(function(){app.cargaVistaInicio()}, 300)
		}
	else {
		localStorage.removeItem('tapp37_userdata')
		document.location='login.html'
		}
	}
Controlador.prototype.init=function(){
	jQuery(document).on('click', '[data-toggle^="class"]', function(e){
			e && e.preventDefault();
			var $this = jQuery(e.target), $class , $target, $tmp, $classes, $targets;
			!$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
			$class = $this.data()['toggle'];
			$target = $this.data('target') || $this.attr('href');
			$class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
			$target && ($targets = $target.split(','));
			$targets && $targets.length && jQuery.each($targets, function( index, value ) {
					($targets[index] !='#') && jQuery($targets[index]).toggleClass($classes[index]);
					});
			$this.toggleClass('active');

			app.toggleMenuGlobal( !jQuery('.aside-md').hasClass('nav-off-screen') )
			})
	
	if (isPhone()){
		var attachFastClick = Origami.fastclick
		attachFastClick(document.body)

		document.addEventListener('backbutton', function(){app.backButton()}, false)
		document.addEventListener('offline', function(){app.setOffline(true)}, false)
		document.addEventListener('online', function(){app.setOffline(false)}, false)
		}

	window.addEventListener('resize', function(){app.resize()}, false)

	this.setCategorias(get('tapp37_categorias'))

	var self=this
	jQuery(window).bind('popstate', function(){self.backButton()} )

	if (!isPhone())
		this.includeJS('js/jwerty.js')
	}
Controlador.prototype.includeJS=function(src, fnCallBack){
    jQuery.getScript(src, function() {
        if (fnCallBack)
        	fnCallBack()
    	})
	}
Controlador.prototype.jwerty=function(t, fn, fnContext){
	if (isPhone()) return
	jwerty.key(t, fn, fnContext)
	}
Controlador.prototype.setOffline=function(v){
	this.offline=v
	console.log('setOffline:'+v)

	if (this.vistaActiva) 
		this.vistaActiva.setOffline(v)
	}
////
Controlador.prototype.registerPush=function(){
	var self=this 
	this.pushNotification = null
	try {
		this.pushNotification=window.plugins.pushNotification

		if ( device.platform.toLowerCase() == 'android'){
		    this.pushNotification.register(
		        registerPush_success,
		        registerPush_error, {
		            senderID:''+this.config.pushSenderID,
		            ecb:"onPushGCM"
		        })
			}
		else if (device.platform.toLowerCase() == 'ios') {
		    this.pushNotification.register(
		        registerPush_token,
		        registerPush_error, {
		            badge:"true",
		            sound:"true",
		            alert:"true",
		            ecb:"onPushAPN"
		        })
			}
		}
	catch (e){
		
		}	
	}
function registerPush_success(result){app.registerPush_success(result)}
function registerPush_error(result){app.registerPush_error(result)}
function registerPush_token(result){app.registerPush_token(result)}
Controlador.prototype.registerPush_success=function(result){
	console.info('Push registrado: '+result)
	}
Controlador.prototype.registerPush_error=function(result){
    console.error('error = ' + result);
	}
Controlador.prototype.registerPush_token=function(result){
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
   	app.sendPushDeviceID(result)
	}
function onPushGCM(e){
	console.log('Push: EVENT -> RECEIVED:' + JSON.stringify(e) )

    switch( e.event ){
	    case 'registered':
	        if ( e.regid.length > 0 ){
	           	app.sendPushDeviceID(e.regid)
				}
	    	break;
	    case 'message':
	    	app.pushReceived(e)
	    	break;
	    case 'error':
	        xlog('Push: ERROR -> MSG:' + e.msg);
	    	break;
	    default:
	        xlog('Push: EVENT -> Unknown, an event was received and we do not know what it is');
	    break;
	  	}
	}
var onPushAPN=function(event){
	var d={payload:event.aps}
	app.pushReceived(d)
    }
Controlador.prototype.sendPushDeviceID=function(regid){
	var self=this
	jQuery.post(app.config.url, {accion:'sendPushDeviceID', cd_gcm:regid}).success(
		function(data){
			var datos=xeval(data)
			self.hayPush= datos.retorno==1
			})
	}
Controlador.prototype.unregisterPush=function(){
	this.pushNotification.unregister(self.registerPush_success, self.registerPush_error)
	this.hayPush=false
	}
////
Controlador.prototype.setCategorias=function(lis){
	this.cache.categorias=lis
	
	if (! (this.cache.categorias instanceof Array))
		this.cache.categorias=[{}]
	
	if (this.cache.categorias[0]){
		this.cache.categorias[0].ds_categoria='Los más valorados'
		this.cache.categorias[0].i='fa-heart'
		}
	if (this.cache.categorias[1]){
		this.cache.categorias[1].ds_categoria='Nuevos y actualizados'
		this.cache.categorias[1].i='fa-clock-o'
		}

	this.cache.categoriasLocales=this.catsConTestLocales()

	save('tapp37_categorias', lis)
	}
Controlador.prototype.catsConTestLocales=function(){
	if (this.cache.testLocales==null || this.cache.testLocales.length==0)
		this.cache.testLocales=this.getTestLocales()

	return this._getCatsDeTestsORespuestasLocales(this.cache.testLocales)
	}
Controlador.prototype.catsConRespuestasLocales=function(){
	if (this.cache.respuestasLocales==null)
		this.cache.respuestasLocales=this.getRespuestasLocales()

	return this._getCatsDeTestsORespuestasLocales(this.cache.respuestasLocales)
	}
Controlador.prototype._getCatsDeTestsORespuestasLocales=function(col){
	var lisIdCat=[-1]
	for (var i=0; i<col.length; i++){
		if (col[i].liscat==null) continue
		var temp=col[i].liscat.split(',')
		for (var j=0; j<temp.length; j++){
			var idcat=temp[j]
			
			if (idcat && lisIdCat.indexOf(idcat)==-1)
				lisIdCat.push(idcat)
			}
		}
	lisIdCat.sort()

	var ret=[]
	for (var i=0; i<lisIdCat.length; i++){
		var cats=buscaFilas(this.cache.categorias, {cd_categoria:lisIdCat[i]} )
		if (cats)
			ret.push( cats[0])
		}
	return ret
	}
Controlador.prototype.getTestLocales=function(){
	var ret=get('tapp37_listaTest') //VistaTienda.prototype.testData()
	if (! (ret instanceof Array) )
		ret=[]
	return ret
	}
Controlador.prototype.getRespuestasLocales=function(){
	var ret=get('tapp37_listaTestRespuestas')//{cd_test:1, respuestas:{}}
	if (! (ret instanceof Array) )
		ret=[]
	return ret
	}
/////
Controlador.prototype.loginEnMiNubeSinToken=function(obj){
	var self=this
	
	var desfaseUTC=new Date().getTimezoneOffset()/-60
    var tz=(desfaseUTC<0?'-':'+')+lpad(desfaseUTC, '0', 2)+':00'

	jQuery.post(this.config.url, {accion:'loginNativo', datosUsu:JSON.stringify(obj), tz:tz}).success(
		function(data){
			var datos=xeval(data)
			
			if (datos.retorno==0){
				document.location='login.html'
				return
				}
			
			if (!get('tapp37_tourRealizado'))
				app.lanzaTourAplicacion()
			else
				app.cargaVistaInicio()
			
			setTimeout(function(){self.registerPush()}, 2000)
			})
	}
Controlador.prototype.loginEnMiNube=function(){
	var self=this
	
	var desfaseUTC=new Date().getTimezoneOffset()/-60
    var tz=(desfaseUTC<0?'-':'+')+lpad(desfaseUTC, '0', 2)+':00'

	jQuery.post(this.config.url, {accion:'login', token:this.cache.token, tz:tz}).success(
		function(data){
			var datos=xeval(data)
			
			if (datos.retorno==0){//sesión caducó, a login
				document.location='login.html'
				return
				}
			
			self.userDataReceived(datos.userData)
			
			if (!get('tapp37_tourRealizado'))
				app.lanzaTourAplicacion()
			else
				app.cargaVistaInicio()

			self.registerPush()
			})
	}
Controlador.prototype.userDataReceived=function(data){
	data.token=this.cache.token
	
	this.cache.usuario=data
	this.cache.usuario.cd_usuario=data.email
	this.cache.usuario.loginEnMiNube=true

	save('tapp37_userdata', JSON.stringify(data))
	save('tapp37_yanoshavisitado', 1)
	this.actualizaDomUsuario()
	}
Controlador.prototype.actualizaDomUsuario=function(){
	jQuery('.avatar .pic img').attr('src', this.cache.usuario.picture)
	jQuery('.avatar .nombre').text(this.cache.usuario.given_name)

	if (!isPhone() && ['rotoxl@gmail.com', 'emolina@tax-i.co', 'carlos.amc@gmail.com'].indexOf(this.cache.usuario.cd_usuario)>-1 )
		jQuery('.liVistaUploadTest').removeClass('hidden')
	}
Controlador.prototype.logout=function(){
	//if (googleMobileApi) googleMobileApi.disconnectUser(app.cache.token)
	if (isPhone())
		window.plugins.googleplus.disconnect()
	else 
		googleWebApi.disconnectUser(this.cache.token)

	localStorage.removeItem('tapp37_userdata')
	localStorage.removeItem('tapp37_refresh_token')
	localStorage.removeItem('tapp37_yanoshavisitado')
	
	document.location='login.html'
	}
/////
Controlador.prototype.pushReceived=function(datos){
	var pl=datos.payload

	if (app.cache.usuario==null){
		return
		}
	
	if (pl.vista=='vistaSocial')
		this.vistaSocial.pushReceived(pl.accion, pl.datos)
	else if (pl.vista=='vistaTienda')
		this.vistaTienda.pushReceived(pl.accion, pl.datos)
	else if (pl.vista=='vistaTest')
		this.vistaTest.pushReceived(pl.accion, pl.datos)
	}
Controlador.prototype.sendNotification=function(titulo, texto, icono, ongoing) {
    if ( device.platform.toLowerCase() == 'ios' )
    	icon=null

	try {
		var param={
		    title:   titulo,
		    message: texto,
		    autoCancel:  !ongoing,
		    ongoing:ongoing,

		    sound: (!ongoing? 'TYPE_NOTIFICATION': null),
		    // icon:'notificacion', //NO es posible sacar la foto del usuario
		    smallIcon:'notificacion'
			}

		window.plugin.notification.local.add(param)
		}
	catch (e){
		app.vibrate()
		}
	}
Controlador.prototype.clearNotification=function(icono) {
	setTimeout(function(){
		try{ window.plugin.notification.local.cancelAll() }
		catch(e){}
		}, 1)
	}
Controlador.prototype.showToast=function(msg){
	if (isPhone()) window.plugins.toast.showShortBottom(msg)
	}
/////
Controlador.prototype.muestraNodoEnNavDrawer=function(idLi){
	var arbol=jQuery('.aside-md .nav-primary')
	arbol.find('li.active').removeClass('active')

	arbol.find('.'+idLi).addClass('active')
	
	var nodoContinuarTest=arbol.find('.continuarTest')
	nodoContinuarTest.toggleClass('hidden', idLi!='continuarTest')
	}
Controlador.prototype.abreNavDrawer=function(){
	jQuery('aside.aside-md').addClass('nav-off-screen')

	this.toggleMenuGlobal(false)
	}
Controlador.prototype.cierraNavDrawer=function(){
	jQuery('#main_container aside.nav-off-screen').removeClass('nav-off-screen')
	jQuery('.btn-navdrawer.active').removeClass('active')

	this.toggleMenuGlobal(true)
	}
/////
Controlador.prototype.continuarTest=function(desdeHistorial){
	this.lanzaTest( VistaTest.prototype.testData() )
	this.cierraNavDrawer()
	}
Controlador.prototype.lanzaTourAplicacion=function(){
	this.cierraNavDrawer()

	if (this.vistaTourAplicacion==null){
		this.vistaTourAplicacion=new VistaTourAplicacion()
		this.vistaTourAplicacion.toDOM()	
		}
	else {
		this.vistaTourAplicacion.show()
		this.vistaTourAplicacion.inicio()
		}
	}
Controlador.prototype.lanzaTest=function(test, resp, vistaOrigen){
	jQuery('.vista.vistaTest').remove()
	this.vistaTest=new VistaTest(test, resp)
	this.vistaTest.toDOM()
	}
Controlador.prototype.cargaVistaInicio=function(){
	var self=this
	if (app.cache.usuario==null){
		this.esperandoCredenciales=this.esperandoCredenciales || 0
		this.esperandoCredenciales++

		if (this.esperandoCredenciales<5){
			console.info('hay que esperar a las credenciales: inicio')
			setTimeout(function(){self.cargaVistaInicio()}, 500*this.esperandoCredenciales)
			return
			}

		document.location='login.html'
		return
		}

	var hash=(document.location.hash+'').substring(1)
	if (hash=='vistaMigraTest')
		this.cargaVistaMigraTest(true)
	else if (hash.indexOf('vistaTienda')>-1){
		this.cargaVistaTienda(true, hash)
		}
	else if (hash=='vistaTest'){
		this.cargaVistaTienda(true, true)
		// this.continuarTest(true)
		}
	else if (hash.indexOf('vistaSocial')>-1 )
		this.cargaVistaSocial(true, hash)
	else if (hash=='vistaEstadisticas')
	 	this.cargaVistaEstadisticas()
	else if (hash=='vistaAjustes')
		this.cargaVistaAjustes()

	else {
		this.cargaVistaTienda(false, this.offline)
		}

	if (this.vistaSocial==null){
		this.vistaSocial=new VistaSocial(false)
		this.vistaSocial.getData()
		}
	if (this.vistaTienda==null){
		this.vistaTienda=new VistaTienda(false)
		}
	}
Controlador.prototype.cargaVistaTienda=function(desdeHistorial, entornoLocal){
	var cd_test
	if (entornoLocal!=null && typeof(entornoLocal)=='string'){
		var temp=entornoLocal
		entornoLocal=temp.indexOf(':dispositivo')>-1
		cd_test=temp.split(':')[2]
		}

	if (this.vistaTienda==null)
		this.vistaTienda=new VistaTienda(desdeHistorial, entornoLocal, cd_test)
	else {
		this.vistaTienda.entornoLocal=entornoLocal
		this.vistaTienda.recuperarPosicion=cd_test
		}
		
	if (this.vistaTienda.domBody)
		this.vistaTienda.show(desdeHistorial)
	else
		this.vistaTienda.toDOM(desdeHistorial)

	this.cierraNavDrawer()
	}
Controlador.prototype.cargaVistaSocial=function(desdeHistorial, hash){
	if (this.vistaSocial==null)
		this.vistaSocial=new VistaSocial(desdeHistorial)

	if (hash){ 
		var gid=hash.split(':')[1]
		this.vistaSocial.recuperarPosicion=gid
		}
	
	if (this.vistaSocial.domBody){
		this.vistaSocial.show(desdeHistorial)
		this.vistaSocial.inicio()
		}
	else
		this.vistaSocial.toDOM(desdeHistorial)

	this.cierraNavDrawer()
	}
Controlador.prototype.cargaVistaEstadisticas=function(desdeHistorial){
	if (this.vistaEstadisticas==null)
		this.vistaEstadisticas=new VistaEstadisticas(desdeHistorial)

	if (this.vistaEstadisticas.domBody)
		this.vistaEstadisticas.show()
	else
		this.vistaEstadisticas.toDOM()

	this.cierraNavDrawer()
	}
Controlador.prototype.cargaVistaAjustes=function(desdeHistorial){
	if (this.vistaAjustes==null)
		this.vistaAjustes=new VistaAjustes(desdeHistorial)
	
	if (this.vistaAjustes.domBody)
		this.vistaAjustes.show()
	else
		this.vistaAjustes.toDOM()

	this.cierraNavDrawer()
	}
Controlador.prototype.pushState=function(id){
	window.history.pushState({vista:id}, id, '#'+id)
	}
Controlador.prototype.resize=function(){
	if (this.vistaActiva)
		this.vistaActiva.resize()
	}
/////
Controlador.prototype.backButton=function(){
	if (jQuery('#main_container aside').hasClass('nav-off-screen')){
		this.cierraNavDrawer()
		return
		}
	else if (jQuery('.btn-group.btn-menu').hasClass('open')){
		jQuery('.btn-group.btn-menu').removeClass('open')
		return
		}
	else if (jQuery('.vista .vista-header .btn-group').hasClass('open')){
		jQuery('.vista .vista-header .btn-group').removeClass('open')
		return
		}
	else if (jQuery('.modal#frmImgAmpliada').is(':visible')){
		jQuery('.modal#frmImgAmpliada').modal('hide')

		return
		}

	var vFrom=app.nav.pop()
	var vTo=app.nav[app.nav.length-1]

	if (vFrom==null && vTo==null && isPhone()){
		navigator.app.exitApp()
		return
		}
	else if (vTo==null) {
		//lo mandamos al inicio, que no se quede bloqueado
		if (app.vistaActiva) app.vistaActiva.inicio(true, vFrom)
		return
		}
	if (vTo.vista=='vistaSocial')
		this.vistaSocial.backButton(vTo, vFrom)
	else if (vTo.vista=='vistaTienda')
		this.vistaTienda.backButton(vTo, vFrom)
	else if (vTo.vista=='vistaTest')
		this.vistaTest.backButton(vTo, vFrom)
	}
Controlador.prototype.addToNav=function(el){
	//no metemos duplicados
	if (JSON.stringify(el) === JSON.stringify(app.nav[app.nav.length-1]) )
		return
	console.log(el)
	app.nav.push(el)

	app.vistaActiva.navActivo=el
	}
Controlador.prototype.toggleMenuGlobal=function(visible, inmediate){
	if (this.vistaActiva) this.vistaActiva.toggleMenuGlobal(visible, inmediate)
	}
////////////////////////////////////////////////

//Todas las vistas tienen un vista-header y un vista-body
function Vista(){
	if (this.id==null) return
	if (this.tipos.indexOf(this.id)==-1 )
		console.error('Tipo de vista desconocido: hay que darlo de alta en Vista.prototype.tipos')

	}
Vista.prototype.setOffline=function(v){}
Vista.prototype.calculaAnchoTarjetas=function(){
	var w=jQuery('#content').width() 
	var anchoMinCards=140
	var numtarjetas=Math.floor( (w-20)/anchoMinCards)
	
	this.numTarjetasPorAncho=numtarjetas
	this.anchoTarjetas=(w/numtarjetas)-20
	}
Vista.prototype.tipos={
	vistaTest:'vistaTest', 
	vistaTienda:'vistaTienda', 
	
	vistaSocial:'vistaSocial', // vistaGrupo:'vistaGrupo',
	vistaAjustes:'vistaAjustes', 

	vistaEstadisticas:'vistaEstadisticas', 
	vistaMigraTest:'vistaMigraTest'
	}
Vista.prototype.toDOM=function(desdeHistorial){
	app.muestraNodoEnNavDrawer('li'+this.id.slice(0,1).toUpperCase()+this.id.slice(1))

	var xd=jQuery('#content')
	if (app) app.vistaActiva=this

	this.domHeader=jQuery(this.getHeader())
	
	var tb=this.getBody()
	if (tb instanceof Array)
		this.domBody=jQuery(tb[0])
	else
		this.domBody=jQuery(tb)
	
	xd.find('.vista').hide()

	this.domCont=jQuery(creaObjProp('section', {'style.height':'100%'}))
	xd.append(this.domCont)
	
	this.domCont
		.append(this.domHeader)
		.append(tb)
		.removeClass( Object.keys(this.tipos).join(' '))
		.addClass('vista '+this.id)
		
	xd.removeClass('cargando')

	this.dom=xd
	this.resize()
	this.tareasPostCarga(desdeHistorial)
	
	if (!desdeHistorial){
		app.addToNav({vista:this.id})
		app.pushState(this.id)
		}
	}
Vista.prototype.show=function(desdeHistorial){
	app.muestraNodoEnNavDrawer('li'+this.id.slice(0,1).toUpperCase()+this.id.slice(1))

	var xd=jQuery('#content')
	xd.find('.vista').hide()
	this.domCont.show()

	app.vistaActiva=this

	this.inflateMenu()
	if (!desdeHistorial)
		app.addToNav({vista:this.id})

	}
Vista.prototype.getHeader=function(){}
Vista.prototype.getBody=function(){}
Vista.prototype.resize=function(){
	this.hVista=window.innerHeight- jQuery('#navigation_bar').innerHeight()
	jQuery('#content').height( this.hVista )
	this.domBody.height( this.hVista- (this.domHeader?this.domHeader.outerHeight():0) )
	}
Vista.prototype.tareasPostCarga=function(){}
Vista.prototype.inflateMenu=function(){}
Vista.prototype.backButton=function(){
	if (app.vistaActiva!=this)
		this.show()
	}
Vista.prototype.getUsuDeGrupo=function(cd_grupo, cd_usuario){
	var gr=buscaFilas(this.grupos, {cd_grupo:cd_grupo})[0]
	var u=buscaFilas(gr.miembros, {cd_usuario:cd_usuario})[0]
	return u
	}
Vista.prototype.pushReceived=function(accion, datos){}
Vista.prototype.cerrar=function(){}
Vista.prototype.cambiaHeaderApp=function(titulo){
	var nb=jQuery('#navigation_bar')
	nb.find('.barra.global').hide()
	nb.find('.barra.vista').show()
	nb.find('.barra.vista .navbar-brand').text(titulo)
	this.toggleMenuGlobal(false)
	}
Vista.prototype.restauraHeaderApp=function(){
	var nb=jQuery('#navigation_bar')
	this.toggleMenuGlobal(true, true)
	nb.find('.barra.global').show()

	nb.find('.barra.vista').hide()
	}
Vista.prototype.admonition=function(titulo, texto, icono, subtexto){
	if (icono!=null)
		icono+=' fa'
	return creaObjProp('div', {	className:'admonition', 
								i:icono, 
								hijos:[
									creaObjProp('div', {hijos:[
														creaObjProp('span', {className:'tit', texto:titulo}),
									   					creaObjProp('span', {className:'des', texto:texto }),
									   					creaObjProp('span', {className:'sub', texto:subtexto }),
									   					]})
									] })	
	}
Vista.prototype.concatCategoriasTest=function(test){
	var ret=''
	var t=test.liscat.split(',').reverse()
	for (var i=0; i<t.length; i++){
		// if (Number(t[i])<0) continue;

		var cat=buscaFilas(app.cache.categorias, {cd_categoria:t[i] } )[0]
		if (cat) 
			ret=ret+', '+cat.ds_categoria
		}
	return ret.substring(2)
	}
Vista.prototype.inicio=function(fromHistory){}
Vista.prototype.initSwype=function(cont, numPaginas, conPortada){
	var self=this

	// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var gallery=new SwipeView(cont, {numberOfPages:numPaginas, loop:false });

	// // Load initial data
	var page
	for (var i=0; i<3; i++) {
		// var page = i==0 ? this.preguntas.length-1 : i-1;
		
		if (conPortada)
			page = i==0 ? 0 : i-1;
		else
			page = i==0 ? numPaginas-1 : i-1

		this.creaDiapo(page, gallery.masterPages[i])
		}

	gallery.onFlip(function () {
		var el,
			upcoming,
			i;

		for (i=0; i<3; i++) {
			upcoming = gallery.masterPages[i].dataset.upcomingPageIndex;

			if (upcoming != gallery.masterPages[i].dataset.pageIndex) {
				self.cambiaDiapo(upcoming, gallery.masterPages[ i ])
				}
			}

		self.indicaPreguntaActivaEnMarcador(gallery.page)
		});

	gallery.onMoveOut(function () {
		var cmp=jQuery(gallery.masterPages[gallery.currentMasterPage])
		cmp.removeClass('swipeview-active')
		})

	gallery.onMoveIn(function () {
		var cmp=jQuery(gallery.masterPages[gallery.currentMasterPage])
		cmp.addClass('swipeview-active')
		})

	this.gallery=gallery
	}
Vista.prototype.toggleMenuGlobal=function(visible, inmediate){
	var menu=jQuery('.barra.global .btn-menu')	
	
	if (visible)
		menu.fadeIn()
	else 
		menu.fadeOut()
	}
////////////////////////////////////////////////

function VistaTourAplicacion(){
	Vista.call(this)
	this.id='vistaTourAplicacion'
	}
VistaTourAplicacion.prototype=new Vista
VistaTourAplicacion.prototype.getBody=function(){
	var self=this

	var raiz='-android'
	// 
	this.slides=[
		{html:'<b>Bienvenido a Octopus</b>. <br> Si lo deseas, ahora puedes realizar una visita guiada. <br> <small>Desliza el dedo para continuar.</small>', img:'./images/m-swipe-left.png', bgcolor:'#65C6BB', fgcolor:'white'},
		{html:'Toca en el icono de la <b>hamburguesa</b> (arriba, izquierda) para desplegar el menú', img:'./images/tour-1'+raiz+'.png', bgcolor:'#1BBC9B', fgcolor:'white'},
		{html:'Descarga algún test de la <b>tienda</b>', img:'./images/tour-2'+raiz+'.png', bgcolor:'#1BA39C', fgcolor:'white'},
		{html:'Realiza tu test, ¡cuidado con el <b>tiempo</b>!', img:'./images/tour-3'+raiz+'.png', bgcolor:'#66cc99', fgcolor:'white'},
		{html:'Comprueba tus <b>progresos</b>', img:'./images/tour-4'+raiz+'.png', bgcolor:'#36d7b7', fgcolor:'white'},
		]

	var puntos=[]
	for (var i=0; i<this.slides.length; i++){
		puntos.push( creaObjProp('li', {className:(i==0?'active':'')}) )
		}

	this.btnOmitir=jQuery( creaObjProp('button', {className:'col-xs-3', texto:'OMITIR', onclick:function(){self.clickBtnOmitir()} }) )
	this.ulLista=jQuery(creaObjProp('ul', {className:'col-xs-6 nav', hijos:puntos}))
	this.btnSiguiente= jQuery( creaObjProp('button', {className:'col-xs-3 pull-right', i:'fa-angle-right', onclick:function(){self.clickBtnSiguiente()}}) )

	return [
		creaObjProp('div', {className:'vista-body', id:'swypeWrapper'}),
		creaObjProp('footer', {hijos:[
			creaObjProp('div', {className:'btn-group row nomargin', hijos:[
				this.btnOmitir[0],
				this.ulLista[0],
				this.btnSiguiente[0]
				]})
			]})
		]
	}
VistaTourAplicacion.prototype.tareasPostCarga=function(){
	this.initSwype('#swypeWrapper', this.slides.length)
	}
VistaTourAplicacion.prototype.cambiaDiapo=function(i, cont){
	if (i>this.slides.length) return
	var slide=this.slides[i]

	var cnt=jQuery(cont)

	cnt .css('color', slide.fgcolor)
		.css('backgroundColor', slide.bgcolor)
		.css('maxWidth', slide.maxWidth)
		.find('.slide-t').html(slide.html)

	var img=cnt.find('.slide-img')[0]
	img.src=slide.img
	}
VistaTourAplicacion.prototype.creaDiapo=function(i, cont){
	if (i>this.slides.length) return

	console.log('>>generando diapo '+i)

	var slide=this.slides[i]
	jQuery(cont)
		.append( creaObjProp('div', {className:'slide-t', html:slide.html}) )
		.append( creaObjProp('img', {className:'slide-img', src:slide.img}) )
		.css('maxWidth', slide.maxWidth)
		.css('color', slide.fgcolor)
		.css('backgroundColor', slide.bgcolor)
	}
VistaTourAplicacion.prototype.indicaPreguntaActivaEnMarcador=function(i){
	if (i==this.slides.length-1){
		this.btnOmitir.css('opacity', 0)
		this.btnSiguiente.text('LISTO')
		}
	else {
		this.btnOmitir.css('opacity', 1)
		this.btnSiguiente.html(creaObjProp('i', {className:'fa fa-angle-right'}))
		}
	this.ulLista.find('li.active').removeClass('active')
	this.ulLista.find('li:eq('+i+')').addClass('active')
	}
VistaTourAplicacion.prototype.inicio=function(){
	this.gallery.goToPage(0)
	}
VistaTourAplicacion.prototype.clickBtnOmitir=function(){
	app.cargaVistaInicio()
	save('tapp37_tourRealizado', 1)
	}
VistaTourAplicacion.prototype.clickBtnSiguiente=function(){
	if (this.gallery.pageIndex==this.slides.length-1) 
		this.clickBtnOmitir()
	else
		this.gallery.next()
	}
VistaTourAplicacion.prototype.resize=function(){
	//css	
	}
VistaTourAplicacion.prototype.toggleMenuGlobal=function(visible, inmediate){
	var menu=jQuery('.barra.global .btn-menu')	
	menu.fadeOut()
	}
////////////
function VistaTest(test, respuestas, desdeHistorial){
	if (test==null) return
	Vista.call(this)

	this.test=test
	this.id='vistaTest'
	this.title=test.ds_test 
	this.cambiaHeaderApp(this.title)

	this.mapaInicializado=false

	this.preguntas=this.quitaPortadas(this.test.preguntas) //por si acaso
	this.respuestas=this.quitaPortadas(respuestas? respuestas.respuestas: this.generaObjRespuestas())

	this.examen={
		fallosrestan:this.test.fallosrestan,
		minutos:this.test.minutos,
		numpreguntas:this.test.numpreguntas,
		segundosConsumidos:(respuestas?respuestas.segundosConsumidos:0),
		}
	
	this.generaIndices()

	//insertamos la portada y la contraportada
	this.preguntas.splice(0,0, null); this.preguntas.push(null)
	this.respuestas.splice(0,0, null); this.respuestas.push(null)

	this.domMenu=jQuery('.barra.vista .btn-menu')

	if (!desdeHistorial) 
		app.pushState(this.id)
	}
VistaTest.prototype=new Vista
VistaTest.prototype.generaObjRespuestas=function(){
	var contestadas=[]
	for (var i=0; i<this.preguntas.length; i++){
		contestadas.push({estrella:false, respuestaUsuario:null})
		}
	return contestadas
	}
VistaTest.prototype.generaIndices=function(){
	for (var i=0; i<this.preguntas.length; i++){
		this.preguntas[i].i=i
		this.respuestas[i].i=i
		}
	}
VistaTest.prototype.getHeader=function(){
	var self=this
	return creaObjProp('header', {className:'vista-header marcadores' , hijos:[
				creaObjProp('div', {className:'btn-group btn-dark', hijos:[
						creaObjProp('button', {className:'btn btn-primary col-md-6 col-sm-6 col-xs-6 dropdown-toggle', 'data-toggle':'dropdown', i:'fa-th', hijos:[
							creaT(' Pregunta '),
							creaObjProp('span', {id:'numPag', texto:1}),
							creaT(' de '+this.examen.numpreguntas+' '), 
							creaObjProp('b', {className:'caret'})
							]}),
						creaObjProp('ul', {id:'mapatest', className:'btn2_1 dropdown-menu btn-primary', role:'menu', hijos:[
							creaObjProp('span', {className:'arrow top'}),

							]}),
						creaObjProp('button', {onclick:function(){self.pausaTiempo()}, className:'btn btn-dark col-md-6 col-sm-6 col-xs-6', i:'fa-clock-o', hijos:[
							creaT(' '),
							creaObjProp('span', {id:'tiempoConsumido', texto:this.convierteSegundosAHora(this.examen.segundosConsumidos)}),
							creaT(' de '+this.convierteMinutosAHora(this.examen.minutos)),
							creaObjProp('i', {className:'fa fa-pause'}) 
							]}),
					]})
				]})
	}
VistaTest.prototype.getBody=function(){
	return creaObjProp('div', {className:'vista-body', id:'swypeWrapper'})
	}
VistaTest.prototype.tareasPostCarga=function(){
	this.domMenu.hide()
	this.initMapa()
	this.iniciaTiempo()

	this.initSwype('#swypeWrapper', this.preguntas.length, true)
	jQuery(this.dom).addClass('noselect')

	//ojo, la 0 es la portada y la última la contraportada
	// var xpregActiva=(this.examen.preguntaActiva) || 1
	// this.goToPage(xpregActiva)

	this.inflateMenu()

	var self=this
	app.jwerty('←', function(){self.tecladoDiapoAnterior()})
	app.jwerty('→', function(){self.tecladoDiapoSiguiente()})
	}
VistaTest.prototype.tecladoDiapoAnterior=function(){
	console.log('←')
	this.gallery.prev()
	}
VistaTest.prototype.tecladoDiapoSiguiente=function(){
	console.log('→')
	this.gallery.next()
	}
VistaTest.prototype.inflateMenu=function(){
	var self=this
	this.domMenu.show()
	
	var xul=this.domMenu.find('ul')
	for (var i=0; i<xul.length; i++){
		var xxul=jQuery(xul[i])
		xxul.empty().append(creaObjProp('li', {hijos:[
			creaObjProp('a', {texto:'Informar de error en pregunta', onclick:function(){self.informarErrorPregunta()} } )
			]}))
		}
	}
VistaTest.prototype.informarErrorPregunta=function(){
	var self=this
	if (isPhone()){
		var options = {
	        title: 'Indica el tipo de error',
	        buttonLabels: ['Ortografía', 'Redacción confusa', 'Pregunta/respuestas incorrectas', 'Faltan imágenes o recursos', 'Sin especificar']
		    }

		window.plugins.actionsheet.show(options, function(buttonIndex){	
			if (buttonIndex==buttonLabels.length)
				return
			self.domInformarErrorPregunta(self.test.cd_test, self.preg.i, options.buttonLabels[buttonIndex])
			})
		}
	else {
		self.domInformarErrorPregunta(self.test.cd_test, self.preg.i, 'Sin especificar')	
		}
	}
VistaTest.prototype.domInformarErrorPregunta=function(cd_test, cd_pregunta, msg){
	msg=msg || 'Sin especificar'
	jQuery.post(app.config.url, {accion:'informarErrorPregunta', 
								cd_test:cd_test, 
								cd_pregunta:cd_pregunta, 
								msg:msg}).success(
		function(data){
			app.showToast('Se ha informado del error para subsanarlo. Gracias por colaborar')
			})
	}
VistaTest.prototype.toggleMenuGlobal=function(visible, inmediate){
	var menu=jQuery('.barra.global .btn-menu')	
	menu.fadeOut()
	}
//////
VistaTest.prototype.cambiaDiapo=function(i, cont){
	this.creaDiapo(i,cont)
	}
VistaTest.prototype.creaDiapo=function(i, cont){
	if (i==0 || i==this.preguntas.length-1){
		jQuery(cont).empty().addClass('portada '+(i==0?'inicio':'fin')).append( [
			creaObjProp('span', {texto:i==0?'Inicio':'Fin'}),
			creaObjProp('div', {className:'visual'})
			])

		// console.info('> crea portada, cont '+cont.id)
		}
	else {
		var preg=this.preguntas[i] //la 0 es la portada
		var resp=this.respuestas[i]

		jQuery(cont).removeClass('portada inicio fin').empty()
			.append (creaObjProp('div', {'style.height':this.hFija/2, 
										className:'pregunta noselect '+this.getClassPregMapa(preg, resp), 
										hijo:this.generaDomPreguntas(preg, resp)}) )
			.append (creaObjProp('footer', {'style.height':this.hFija/2, 
											className:'footer respuestas noselect', 
											hijo:this.generaDomRespuestas(preg, resp)}) )
			.attr('data-cd-pregunta', i)

			// console.info('> crea diapo '+i+', cont '+cont.id)

		}
	}
VistaTest.prototype.generaDomPreguntas=function(preg, resp){
	var self=this
	
	var t=creaT('')
	if (preg.img){
		// t=creaObjProp('div', {className:'recurso pre', 'style.backgroundImage':'url(./res/carne-conducir/'+preg.img+')'})
		t=creaObjProp('div', {className:'recurso pre', hijos:[
				creaObjProp('span', {className:'aviso', texto:'Toca la imagen para ampliar'}),
				] })
		var temp=preg.img.split(',')	
		for (var i=0; i<temp.length; i++){

			t.appendChild( 
				creaObjProp('img', {className:'img-thumbnail', 
									src:app.config.imgBase+temp[i].trim(),
									onclick:this.fnAmpliarImg(temp[i].trim()) })
				)
			}

		}

	return creaObjProp('table',{hijos:[
				creaObjProp('tr', {hijos:[
					creaObjProp('td', {className:'clave', onclick:function(){self.toggleEstrella(this)}, i:(resp.estrella?'fa-star':'fa fa-star-o')}),
					creaObjProp('td', {className:'valor', hijos:[
						creaObjProp('span', {className:'texto pre', texto:(preg.i+1)+'-'+preg.pregunta}),
						t
						]}),
					]})
				]})
	}
VistaTest.prototype.generaDomRespuestas=function(preg, resp){
	var self=this
	var xr=[], letras='ABCDE'
	for (var i=0; i<preg.respuestas.length; i++){
		var opcion=preg.respuestas[i]
		if (opcion.texto==null || opcion.texto=='') 
			continue

		var hijos=[creaT(opcion.texto)]

		var estilos=this.getEstilosDomRespuestas(preg, resp, i)
		xr.push( creaObjProp('tr', {onclick:function(){self.marcaResp(this)}, hijos:[
			creaObjProp('td', {className:'clave '+ estilos[0], texto:letras.substr(i,1) }),
			creaObjProp('td', {className:'valor '+estilos[1], hijos:hijos }),
			]}))
		}
	if (this instanceof VistaRepasoTest){
		}
	else if (resp.respuestaUsuario!=null){
		jQuery(xr).addClass('atenuada')
		jQuery(xr[resp.respuestaUsuario]).removeClass('atenuada').addClass('active')
		}
	return creaObjProp('table', {hijos:xr})
	}
VistaTest.prototype.getEstilosDomRespuestas=function(preg, resp, i){
	var estilos=['bg-danger', 'bg-warning', 'bg-success', 'bg-info', 'bg-primary']
	return [estilos[i], '']
	}
VistaTest.prototype.fnAmpliarImg=function(ruta){
	return function(){
		var frm=jQuery('#frmImgAmpliada')
		frm.css('backgroundImage', 'url('+app.config.imgBase+ruta+')')
		frm.modal({backdrop:false, keyboard:true})
		}
	}
VistaTest.prototype.cerrarAmpliarImg=function(){
	jQuery('#frmImgAmpliada').modal('hide')
	}
VistaTest.prototype.ampliarImg=function(ruta){}
//////
VistaTest.prototype.convierteSegundosAHora=function(numSegundos){
	return this.convierteMinutosAHora(numSegundos/60)
	}
VistaTest.prototype.convierteMinutosAHora=function(numMinutos){
	return Math.floor(numMinutos/60)+':'+ lpad( Math.floor(numMinutos) % 60, '0', 2)
	}
//////
VistaTest.prototype.initMapa=function(){
	this.mapaInicializado=true
	var elPorFila=10

	// var numfilas=Math.floor(this.preguntas.length/elPorFila)
	var col=0,tr=creaObjProp('tr'), trs=[], ta=creaObjProp('table')
	
	//no reflejamos portada ni contraportada
	for (var i=1; i<this.respuestas.length-1; i++){
		if (col>=elPorFila){
			ta.appendChild(tr)
			tr=creaObjProp('tr')
			col=0
			}
		var preg=this.preguntas[i]
		var resp=this.respuestas[i]

		var hijo
		if (resp.estrella){
			hijo=this.generaDomEstrella(i)
		}
		else 
			hijo=creaObjProp('span', {texto:i})

		var self=this
		tr.appendChild( creaObjProp('td', {
							className:this.getClassPregMapa(preg, resp), 
							id:'mapa_preg'+resp.i, 
							// 'data-id':
							hijo:hijo, 
							onclick:function(){
								var n=Number(jQuery(this).text())
								self.goToPage(n)
							} }) ) 
		col++
		}
	if (tr.childNodes.length)
		ta.appendChild(tr)

	this.dom.find('#mapatest').append(ta)
	}
VistaTest.prototype.getClassPregMapa=function(preg, resp){
	return (resp.respuestaUsuario!=null? 'contestada':'')
	}
VistaTest.prototype.actualizaMapa=function(preg, resp){
	var td=jQuery('#mapa_preg'+resp.i)
	td.toggleClass('contestada', resp.respuestaUsuario!=null)

	td.empty()
	if (resp.estrella)
		td.append(this.generaDomEstrella(resp.i+1))
	else 
		td.append(creaObjProp('span', {texto:resp.i}))
	}
VistaTest.prototype.indicaPreguntaActivaEnMarcador=function(i){
	this.preg=this.preguntas[i]
	this.resp=this.respuestas[i] //aquí no se usan, pero se establecen globalmente

	jQuery('#mapatest td').removeClass('active')
	jQuery('#mapa_preg'+(i-1) ).addClass('active')
	var np=i
	if (np==0)
		np=1
	else if (np==this.preguntas.length-1)
		np=this.preguntas.length-2

	this.dom.find('#numPag').text(np)
	}
VistaTest.prototype.goToPage=function(n){
	this.indicaPreguntaActivaEnMarcador(n)
	this.gallery.goToPage(n) 
	}
VistaTest.prototype.generaDomEstrella=function(i){
	return creaObjProp('span', {className:'fa-stack', i:'fa fa-star fa-stack-2x', hijos:[
				creaObjProp('span', {className:'fa-stack-1x stack-text', texto:i})
				]})
	}
VistaTest.prototype.toggleEstrella=function(celda){
	if (this.resp.estrella==null)
		this.resp.estrella=false
	this.resp.estrella=!this.resp.estrella

	var xcelda=jQuery(celda).find('i')
	xcelda.removeClass('fa-star fa-star-o')
	if (this.resp.estrella)
		xcelda.addClass('fa-star')
	else
		xcelda.addClass('fa-star-o')

	this.actualizaMapa(this.preg, this.resp)
	}
VistaTest.prototype.marcaResp=function(fila){
	var xfila=jQuery(fila)
	var xfilas=xfila.closest('table').find('tr')

	if (xfila.hasClass('active')){
		xfilas.removeClass('active atenuada')
		this.resp.respuestaUsuario=null
		}
	else {
		xfilas.removeClass('active').addClass('atenuada')
		xfila.addClass('active').removeClass('atenuada')
		this.resp.respuestaUsuario=xfilas.index(fila)
		}

	this.actualizaMapa(this.preg, this.resp)
	}
//////
VistaTest.prototype.tiempoAcabado=function(){
	this.guardaEstadoExamen(true)
	this.muestraFormPausa('fintiempo')
	}
VistaTest.prototype.finExamen=function(){
	this.frmdom.modal('hide')
	app.cargaVistaInicio()
	}
VistaTest.prototype.guardaEstadoExamen=function(finalizado){
	if (finalizado==undefined)
		finalizado=false
	
	var respuestas=this.quitaPortadas(this.respuestas)

	app.cache.respuestasLocales=app.getRespuestasLocales()
	var idx=getIndiceFila(app.cache.respuestasLocales, {cd_test:this.test.cd_test}), resp

	var nel={cd_test:this.test.cd_test, 
			respuestas:respuestas, 
			segundosConsumidos:this.examen.segundosConsumidos,
			finalizado:finalizado,
			preguntaActual:(this.preg?this.preg.i:0),
			fecha:new Date().toGMTString(),
			sincronizado:false
			}

	if (finalizado){
		var corregido=this.corrigeTest()
		
		nel.aciertos=corregido.aciertos
		nel.fallos=corregido.fallos
		nel.nc=corregido.nc
		
		nel.nota=corregido.nota
		nel.liscat=this.test.liscat
		}
	else {
		var stats=this.generaEstadisticasPausa()
		nel.minutosPorcentaje=stats.minutosPorcentaje
		nel.respondidasPorcentaje=stats.respondidasPorcentaje

		nel.noRespondidas = stats.noRespondidas
		nel.preguntas = stats.preguntas
		nel.minutosConsumidos = stats.minutosConsumidos
		nel.minutosTotal = stats.minutosTotal
		nel.respondidas = stats.respondidas
		}

	if (idx==-1)
		app.cache.respuestasLocales.push(nel)
	else 
		app.cache.respuestasLocales[idx]=nel
		
	save('tapp37_listaTestRespuestas', app.cache.respuestasLocales)
	
	if (finalizado){//de momento no guardamos resultados parciales
		var self=this
		jQuery.post(app.config.url,{accion:'guardaResultadosTest', 
									datos:JSON.stringify(nel), 
									cd_test:this.test.cd_test}).success(
			function(data){
				var datos=xeval(data)
				if (datos.retorno==1){
					var idx=getIndiceFila(app.cache.respuestasLocales, {cd_test:self.test.cd_test})
					app.cache.respuestasLocales[idx].sincronizado=true
					}
				})
		}
	}
VistaTest.prototype.btnContinuarTest=function(){
	this.pausaTiempo()
	this.frmdom.modal('hide')
	}
VistaTest.prototype.muestraFormPausa=function(tipo){
	var self=this
	var stats=this.generaEstadisticasPausa()

	this.frmdom=jQuery('.modal#frmPausa')

	var frmfooter=this.frmdom.find('.modal-footer')

	var visual=this.frmdom.find('.main .visual')
	var tit=this.frmdom.find('.main .texto')
	var details=this.frmdom.find('.main .details')
	
	visual.removeClass().addClass('visual fa fa-stack-1x fa-inverse')
	if (tipo=='pausa'){
		visual.addClass('fa-pause')
		tit.text('Test Pausado')

		details.empty().append([
			creaObjProp('p', {className:'titulo', texto:'Estado del test actual'}),
			creaObjProp('p', {className:'respondidas', texto:stats.respondidas+' de '+stats.preguntas+' preguntas respondidas ('+stats.respondidasPorcentaje+'%)', i:'fa-pie-chart fa-fw', omiteNulo:true}),
			creaObjProp('p', {className:'tiempo', texto:stats.minutosConsumidos+' de '+stats.minutosTotal+' minutos consumidos ('+stats.minutosPorcentaje+'%)', i:'fa-clock-o fa-fw', omiteNulo:true}),
			creaObjProp('p', {className:'estrellas', texto:stats.estrellas+' preguntas marcadas', i:'fa-star-o fa-fw', omiteNulo:true}),
			])

		frmfooter.empty().append([
			creaObjProp('button', {onclick:function(){self.guardaEstadoExamen(true);self.muestraFormPausa('fin')}, className:'btn btn-sm btn-dark transparent', texto:'Finalizar'}),
			creaObjProp('button', {onclick:function(){self.frmdom.modal('hide'); app.cargaVistaInicio()}, className:'btn btn-sm btn-dark transparent', texto:'Pausar y salir'}),
			creaObjProp('button', {onclick:function(){self.btnContinuarTest()}, className:'btn btn-sm btn-success', texto:'Continuar'}),
			])
		}
	else if (tipo=='fin' || tipo=='fintiempo'){
		var corrige=this.corrigeTest()

		if (tipo=='fin'){
				visual.addClass('fa-stop')
				tit.text('Test finalizado')
				}
		else if (tipo=='fintiempo') {
				visual.addClass('fa-clock-o')
				tit.text('Tiempo finalizado')
				}

		details.empty().append([
			creaObjProp('p', {className:'titulo', texto:'Resultado de la prueba'}),
			creaObjProp('p', {className:'resp notafinal', texto:'NOTA FINAL: '+ corrige.nota, i:'fa-trophy fa-fw'}),

			creaObjProp('p', {className:'titulo', texto:'Estadísticas'}),
			creaObjProp('p', {className:'resp aciertos',texto:corrige.aciertos+' acierto(s)', i:'fa-check-circle fa-fw'}),
			creaObjProp('p', {className:'resp fallos',  texto:corrige.fallos+' fallo(s)', i:'fa-times-circle fa-fw'}),
			creaObjProp('p', {className:'resp nc',      texto:corrige.nc+' no respondida(s)', i:'fa-dot-circle-o fa-fw'}),

			creaObjProp('p', {className:'respondidas', texto:stats.respondidas+' de '+stats.preguntas+' preguntas respondidas ('+stats.respondidasPorcentaje+'%)', i:'fa-pie-chart fa-fw'}),
			creaObjProp('p', {className:'tiempo', texto:stats.minutosConsumidos+' de '+stats.minutosTotal+' minutos consumidos ('+stats.minutosPorcentaje+'%)', i:'fa-clock-o fa-fw'}),
			creaObjProp('p', {className:'estrellas', texto:stats.estrellas+' preguntas marcadas', i:'fa-star-o fa-fw'}),
			])

		frmfooter.empty().append([
			creaObjProp('button', {onclick:function(){self.finExamen()}, className:'btn btn-sm btn-dark transparent', texto:'Cerrar test'}),
			creaObjProp('button', {onclick:function(){app.vistaTienda.repasarExamen(self.test.cd_test); self.frmdom.modal('hide')}, className:'btn btn-sm btn-success', texto:'Repasar'}),
			])
		}
	else {
		console.warn('Tipo de form desconocido!'+tipo)
		return
		}

	//metadatos del test
	var md=this.test
	this.frmdom.find('.info .details').empty().append([
		// creaObjProp('p', {className:'header', texto:'Metadatos disponibles'}),
		creaObjProp('p', {className:'titulo', texto:md.ds_test, i:'fa-bookmark fa-fw', omiteNulo:true}),
		creaObjProp('p', {className:'categoria', texto:this.concatCategoriasTest(md), i:'fa-tags fa-fw', omiteNulo:true}),
		creaObjProp('p', {className:'fecha', texto:formato.fechaDDMMYYYY(md.f_examen) , i:'fa-calendar fa-fw', omiteNulo:true}),
		creaObjProp('p', {className:'organismo', texto:md.organismo, i:'fa-institution fa-fw', omiteNulo:true}),
		creaObjProp('p', {className:'region', texto:md.region, i:'fa-globe fa-fw', omiteNulo:true}),
		])
	if (md.img)
		this.frmdom.find('.info .visual')[0].src=md.img

	app.addToNav({vista:this.id, accion:'frmPausa'})

	this.frmdom.modal({backdrop:'static', keyboard:false})
	}
VistaTest.prototype.quitaPortadas=function(arr){
	if (arr[0]==null)
	 	return arr.slice(1, arr.length-1)
	return arr
	}
VistaTest.prototype.generaEstadisticasPausa=function(){
	var resp=this.quitaPortadas(this.respuestas)
	var r={
		estrellas: buscaFilas(resp, {estrella:true}).length,
		noRespondidas: buscaFilas(resp, {respuestaUsuario:null}).length,
		preguntas:resp.length,

		minutosConsumidos:Math.floor(this.examen.segundosConsumidos/60),
		minutosTotal:this.examen.minutos
		}
	r.minutosPorcentaje= Math.floor(100*this.examen.segundosConsumidos/(r.minutosTotal*60) )
	r.respondidas=r.preguntas-r.noRespondidas
	r.respondidasPorcentaje=Math.floor(100*r.respondidas/r.preguntas)
	return r
	}
VistaTest.prototype.corrigeTest=function(){
	var a=0, f=0, nc=0
	var preguntas=this.quitaPortadas(this.preguntas)
	var respuestas=this.quitaPortadas(this.respuestas)

	for (var i=0; i<preguntas.length; i++){
		var preg=preguntas[i], resp=respuestas[i]

		if (resp.respuestaUsuario==null)
			nc++
		else if (resp.respuestaUsuario==preg.cd_respuestacorrecta)
			a++
		else 
			f++
		}
	var fr=this.test.fallosrestan
	if (fr==null) fr=0

	var tn= (a-(f*fr))/preguntas.length
	if (tn<0) tn=0
	var nota=Math.floor(tn*100)/10

	return {aciertos:a, fallos:f, nc:nc, nota:nota}
	}
//////
VistaTest.prototype.refrescoCrono=1000
VistaTest.prototype.iniciaTiempo=function(){
	var self=this
	this.crono=setTimeout(function(){self.tickCrono()}, this.refrescoCrono)

	var difMinutos=(this.examen.minutos-this.examen.segundosConsumidos/60)
	this.examen.horaFinal=new Date( new Date().getTime() + difMinutos*60000)
	console.info(this.examen.horaFinal)
	}
VistaTest.prototype.pausaTiempo=function(){
	if (this.crono){ //pausamos
		clearTimeout(this.crono)
		this.crono=null

		var sRestantes=(this.examen.horaFinal-new Date())/1000

		this.examen.segundosConsumidos=(this.examen.minutos*60-sRestantes)
		// console.warn('Segundos consumidos:'+this.examen.segundosConsumidos)

		this.examen.horaFinal=null

		this.guardaEstadoExamen(false)
		this.muestraFormPausa('pausa')
		}
	else { //retomamos
		this.iniciaTiempo()
		}
	}
VistaTest.prototype.tickCrono=function(){
	if (this.crono==null){
		console.error('El tiempo debería estar parado')
		return
	}

	var self=this
	this.crono=setTimeout(function(){self.tickCrono()}, this.refrescoCrono)

	var sRestantes=(this.examen.horaFinal-new Date())/1000
	var minRestantes=Math.ceil(sRestantes/60)
	
	if (this.minRestantes==minRestantes){
		// console.log('No hay que actualizar el crono: segRestantes='+sRestantes)
		return
	}
	// console.warn('Actualizo crono: segRestantes='+sRestantes)
	jQuery('#tiempoConsumido').text(this.convierteMinutosAHora(this.examen.minutos-minRestantes))
	
	this.minRestantes=minRestantes

	if (sRestantes<=0){
		this.tiempoAcabado()
		clearTimeout(this.crono)
		this.crono=null
		}
	}
VistaTest.prototype.backButton=function(vTo, vFrom){
	if (app.vistaActiva!=this)
		this.show(true)

	if (jQuery('.modal#frmPausa').is(':visible')){
		this.btnContinuarTest()
		return
	}

	var mapa=jQuery('ul#mapatest')
	if (mapa.is(':visible')){
		mapa.closest('.open').removeClass('open')
		return
		}

	var sRestantes=(this.examen.horaFinal-new Date())/1000
	var segundosConsumidos=(this.examen.minutos*60-sRestantes)

	// if (segundosConsumidos<10) {
	// 	//salimos sin más, ha debido entrar por error
	// 	if (this.returnTo){
	// 		if (this.returnTo.id==this.tipos.vistaTienda){
	// 			var nel=this.returnTo.nav[this.returnTo.nav.length-1]
			
	// 			var nv=new VistaTienda(true, true)
	// 			nv.toDOM()

	// 			nv.nav=this.returnTo.nav
	// 			nv.navegaEl(nel)
	// 			}
	// 		}
	// 	}
	// else 
		this.pausaTiempo()
	}
//////
VistaTest.prototype.testData=function(){
	return {
		md: {
				f_examen:'04/10/2014',
				ds_test:'Pruebas selectivas para el acceso a la condición de Personal Estatutario Fijo (BOCM: 10-09-2012)',
				liscat:'1,2', //1-enfermería, 3-tic

				region:'Comunidad de Madrid',
				organismo:'SaludMadrid/Servicio Madrileño de Salud',
				img:'http://1.bp.blogspot.com/-20rV8pKsdjQ/UJd4Ss6XSII/AAAAAAAAG0c/3Wu9Z25s4_A/s1600/SALUD_MADRID.jpg',
				version:1 //servirá para corregir las erratas y demás
				},
		examen: {
				fallosrestan:.25, //para indicar aquello de que cada 4 fallos resta 1 acierto
				minutos:20,
				numpreguntas:6, //redundante, pero vendrá bien para comprobar la integridad
				segundosConsumidos:30,
				// preguntaActiva:3,
				},
		preguntas:[
				{ 
					// cd_pregunta:0,
					pregunta:'1-¿Cuál de los siguientes estandares de directorios guarda relación con la descripción de servicios de usuario?', 
					img:null,
					cd_respuestacorrecta:3,
					respuestas:[
						{texto:'x.500'},
						{texto:'x.501'},
						{texto:'x.509'},
						{texto:'x.511'},
						],
					respuestaUsuario:1,
				},{ 
					texto:'2-Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD:', 
					img:null,
					respuesta:1,
					respuestas:[
						{texto:'La normativa de protección de datos es aplicable sólo a ficheros automatizados que contengan datos personales de personas físicas'},
						{texto:'La normativa de protección de datos es aplicable tanto a ficheros automatizados como no automatizados que contengan datos de carácter personal'},
						{texto:'La normativa de protección de datos no es aplicable a personas físicas ni jurídicas'},
						{texto:'B y C son ciertas'},
						],
					respuestaUsuario:1,
				},{ 
					texto:'3-Cuál de los siguientes derechos de explotación no precisan la realización o autorización por parte del titular de un programa de ordenador, según la ley española de propiedad intelectual:', 
					img:null,
					cd_respuestacorrecta:1,
					respuestas:[
						{texto:'Reproducción total o parcial'},
						{texto:'La realización de una copia de seguridad'},
						{texto:'Traducción, adaptación o arreglo'},
						{texto:'Cualquier forma de distribución pública'},
						]
				},{ 
					texto:'4-Respecto a la LSSI puede decirse que:', 
					img:null,
					cd_respuestacorrecta:3,
					respuestas:[
						{texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico'},
						{texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente'},
						{texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma'},
						{texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma'},
						]
				},{ 
					texto:'5-¿Cuál de las siguientes no es una distribución de Linux ?', 
					img:null,
					cd_respuestacorrecta:3,
					respuestas:[
						{texto:'Debian'},
						{texto:'Gentoo'},
						{texto:'Max'},
						{texto:'FreeBSD'},
						]
				},{ 
					texto:'6-Dentro del análisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:', 
					img:null,
					cd_respuestacorrecta:3,
					respuestas:[
						{texto:'Reusabilidad'},
						{texto:'Encapsulación'},
						{texto:'Abstracción'},
						{texto:'Persistencia'},
						],
					estrella:true
				}
			]
		}
	}
////////////////////////////////////////////////

function VistaRepasoTest(test, respuestas, desdeHistorial){
	VistaTest.call(this, test, respuestas, desdeHistorial)
	this.id='vistaTest vistaRepasoTest'
	}
VistaRepasoTest.prototype=new VistaTest
VistaRepasoTest.prototype.getClassPregMapa=function(preg, resp){
	if (resp.respuestaUsuario==null)
		return ''
	else if (resp.respuestaUsuario==preg.cd_respuestacorrecta)
		return 'bg-success'
	else
		return 'bg-danger'
	}
VistaRepasoTest.prototype.getEstilosDomRespuestas=function(preg, resp, i){
	console.log( [resp.respuestaUsuario, preg.cd_respuestacorrecta, i] )
	var estilos=['bg-default', 'bg-warning', 'bg-success', 'bg-info', 'bg-primary']
	
	if (preg.cd_respuestacorrecta==i)
		return ['bg-success', 'bg-success']
	else if (resp.respuestaUsuario==i)
		return ['bg-danger', 'bg-danger']
	else
		return ['bg-default', '']
	}
VistaRepasoTest.prototype.iniciaTiempo=function(){}
VistaRepasoTest.prototype.getHeader=function(){
	var self=this
	return creaObjProp('header', {className:'vista-header marcadores' , hijos:[
				creaObjProp('div', {className:'btn-group btn-dark', hijos:[
						creaObjProp('button', {className:'btn btn-primary col-md-12 col-sm-12 col-xs-12 dropdown-toggle', 'data-toggle':'dropdown', i:'fa-th', hijos:[
							creaT(' Pregunta '),
							creaObjProp('span', {id:'numPag', texto:1}),
							creaT(' de '+this.examen.numpreguntas+' '), 
							creaObjProp('b', {className:'caret'})
							]}),
						creaObjProp('ul', {id:'mapatest', className:'btn2_1 dropdown-menu btn-primary', role:'menu', hijos:[
							creaObjProp('span', {className:'arrow top'}),

							]}),
						
					]})
				]})
	}
VistaRepasoTest.prototype.guardaEstadoExamen=function(){}
VistaRepasoTest.prototype.toggleEstrella=function(){}
VistaRepasoTest.prototype.marcaResp=function(){}
VistaRepasoTest.prototype.toggleMenuGlobal=function(visible, inmediate){
	var menu=jQuery('.barra.global .btn-menu')	
	menu.fadeOut()
	}
////////////////////////////////////////////////

function VistaTienda(desdeHistorial, entornoLocal, cd_test){
	this.id='vistaTienda'
	this.cat=null
	this.recuperarPosicion=cd_test

	this.leeTestLocales()
	this.leeRespuestasLocales()

	this.entornoLocal=entornoLocal
	// this.domDetalleTest=null
	this.domMenu=jQuery('.barra.vista .btn-menu, .barra.global .btn-menu')

	// if (!desdeHistorial) 
	// 	app.pushState(this.id)
	}
VistaTienda.prototype=new Vista
VistaTienda.prototype.getHeader=function(){
	var self=this
	return creaObjProp('header', {className:'btn-warning vista-header' , hijos:[
			creaObjProp('div', {className:'btn-group', hijos:[

				creaObjProp('div', {className:'btn-group', hijos:[
					creaObjProp('button', {className:'btn btn-warning dropdown-toggle', 'data-toggle':'dropdown', hijos:[
						creaT(' Categorías '),
						creaObjProp('b', {className:'caret'})
						]}), 
					creaObjProp('ul', {id:'categorias', className:'btn3_1 dropdown-menu fadeInRight', role:'menu', hijos:[
						creaObjProp('span', {className:'arrow top'}),

						]}),
					]}),

					creaObjProp('button', {onclick:function(){self.cambiaEntorno(this)}, texto:'Tienda', i:'fa-shopping-cart', className:'pull-right btn btn-warning tienda '+(this.entornoLocal?'':'active') }),
					creaObjProp('button', {onclick:function(){self.cambiaEntorno(this)}, texto:'Mis tests'/*, i:'fa-download'*/, className:'pull-right btn btn-warning dispositivo '+(this.entornoLocal?'active':'') }),
			]}),
			
		]})
	}
VistaTienda.prototype.getBody=function(){
	return creaObjProp('div', {className:'vista-body tienda cargando'})
	}
VistaTienda.prototype.tareasPostCarga=function(fromHistory){
	if (this.entornoLocal){
		if (app.cache.catsConTestLocales==null || app.cache.catsConTestLocales.length==0)
			app.cache.catsConTestLocales=app.catsConTestLocales()

		this.cargaListaCategorias(app.cache.catsConTestLocales, true)
		this.pintaPortadaTienda(app.cache.catsConTestLocales, app.cache.testLocales)
		}
	else
		this.cambiaEntorno(jQuery('button.tienda'), fromHistory)
	
	this.inflateMenu()
	}
VistaTienda.prototype.inflateMenu=function(){
	var self=this
	this.domMenu.show()
	
	var xul=this.domMenu.find('ul')
	for (var i=0; i<xul.length; i++){
		var xxul=jQuery(xul[i])
		xxul.empty().append(creaObjProp('li', {hijos:[
			creaObjProp('a', {texto:'Buscar test', onclick:function(){self.buscarTest()} } )
			]}))
		}
	}
VistaTienda.prototype.backButton=function(vTo, vFrom){
	if (app.vistaTest && vFrom.vista==app.vistaTest.id){
		//estaba haciendo un test
		app.vistaTest.pausaTiempo()
		}
	else {
		if (app.vistaActiva!=this)
			this.show(true, true)
		this.navegaEl(vTo, vFrom)
		}
	}
VistaTienda.prototype.navegaEl=function(vTo, vFrom){
	if (vTo && vTo.cd_test){


		this.testPreview(vTo.cd_test, true)
		}
	else  {
		if (this.domDetalleTest && this.domDetalleTest.is(':visible')){
			this.domBody.show()
			this.domDetalleTest.hide()
			}
		
		if (vFrom.vista==this.id && JSON.stringify(vTo)==JSON.stringify(this.urlBody)){
			this.ajustaAlturaCard(jQuery('.card.pack'))
			//la vista de domBody se puede mantener tal cual está
			return
		}

		if (vFrom && vFrom.cd_categoria==-100 && vFrom.cd_test==null){//búsqueda
			this.inicio(fromHistory)
			}
		else if (vTo && vTo.cd_categoria && vTo.cd_pack)
			this.navegaCat(vTo.cd_categoria, true, vTo.cd_pack)
		else if (vTo && vTo.cd_categoria)
			this.navegaCat(vTo.cd_categoria, true)
		else { //
			this.cat=null
			this.restauraHeaderApp() 
			
			//dejamos una pequeña lista de tests visibles por categoría, y mostramos el botón 'cargar más'
			var bloques=this.domBody.find('.bloque.cat:not(.pack)').show()
			bloques.find('.card').not('.main').remove()
			bloques.find('.titulo .cargarMas').show()
			bloques.find('.cargarMas.aunMas').remove()

			//ocultamos los packs en su forma expandida
			this.domBody.find('.bloque.cat.pack').hide()

			if (vFrom && vFrom.cd_categoria){
				var cat=buscaFilas(app.cache.categorias, {cd_categoria:vFrom.cd_categoria})[0]

				var oldcat=this.domBody.find('#cat-'+cat.cd_categoriapadre).offset()
				if (oldcat) this.domBody.scrollTop( oldcat.top-100 )
				}
			}
		}
	}
VistaTienda.prototype.show=function(fromHistory, willReposition){
	Vista.prototype.show.call(this, fromHistory)

	if (willReposition==null){
		if (this.recuperarPosicion!=null)
			this.doBuscarTest(null, this.recuperarPosicion, true) 
		else {
			this.inicio(fromHistory)
			}
		}
	}
VistaTienda.prototype.inicio=function(fromHistory, vFrom){
	var xbtn=this.entornoLocal?jQuery('.btn.dispositivo'):jQuery('.btn.tienda')
	this.cambiaEntorno(xbtn, fromHistory)
	if (fromHistory && vFrom){
		if (vFrom.cd_categoria){
			var cat=buscaFilas(app.cache.categorias, {cd_categoria:vFrom.cd_categoria})[0]
			
			var xp=this.domBody.find('#cat-'+cat.cd_categoriapadre)
			if (xp.length)
				this.domBody.scrollTop( xp.offset().top-100 )
			}
		}
	}
VistaTienda.prototype.toggleMenuGlobal=function(visible, inmediate){
	var menu=jQuery('.barra.global .btn-menu')	
	
	if (visible){
		if (inmediate)
			menu.show()
		else 
			menu.fadeIn()
		}
	else{
		if (inmediate)
			menu.hide()
		else 
			menu.fadeOut()
		}
	}
VistaTienda.prototype.setOffline=function(v){
	var self=this
	if (!app.offline && app.cache.testTienda.length==0)
		self.leeTestTienda(function(datos){
			if (!self.entornoLocal){
				self.pintaPortadaTienda(app.cache.categorias, datos)
				}
			})
	}
//////
VistaTienda.prototype.buscarTest=function(){
	var self=this

	if (isPhone()){
		navigator.notification.prompt(
		    ' ', //'Matrícula, nombre...',
		    function( result ) { //result.buttonIndex y result.input1
		        switch ( result.buttonIndex ) {
		            case 1:
						self.strBuscar=result.input1
						self.doBuscarTest(self.strBuscar)
		                break;
		            case 2:
		                break;
		        }
		    },
		    'Buscar test',     // a title
		    [ "Buscar", "Cancelar" ], // text of the buttons
		    self.strBuscar
			)
		}
	else {
		self.strBuscar = prompt('Buscar test', self.strBuscar)
		if (self.doBuscarTest!=null)
			self.doBuscarTest(self.strBuscar)
		}
	}
VistaTienda.prototype.doBuscarTest=function(s, id, situar){
	var self=this

	// self.domBody.empty().addClass('cargando')
	if (id!=null && isNaN(id)){
		s=id
		id=null
		}

	if (app.offline){
		//ojo, no llamar a cambiaEntorno
		self.domHeader.find('.btn.tienda, .btn.dispositivo').removeClass('active')
		self.domHeader.find('.btn.tienda').addClass('active')
		self.entornoLocal=false

		var encontrados=buscaFilas(app.cache.testLocales, {_contains_ds_test:s})
		encontrados.map(function(el){el.liscat=el.liscat+',-100,'})
		self.doBuscarTest_response(encontrados, situar)
		return
		}

	jQuery.post(app.config.url, {accion:'buscaTests', search:s, cd_test:id}).success(
		function(data){
			var datos=xeval(data)
			if (datos.retorno==1){
				//ojo, no llamar a cambiaEntorno
				self.domHeader.find('.btn.tienda, .btn.dispositivo').removeClass('active')
				self.domHeader.find('.btn.tienda').addClass('active')
				self.entornoLocal=false

				self.doBuscarTest_response(datos.tests, situar)
				}
			else
				console.error(data)
		})
	}
VistaTienda.prototype.doBuscarTest_response=function(filas, situar){
	var self=this
	var resultadosBusqueda=filas || []

	self.ftestTienda=null
	
	app.cache.categorias=app.cache.categorias || []
	var xcat={cd_categoria:-100, ds_categoria:'Resultados de la búsqueda', i:'fa-search', cd_categoriapadre:-200}
	if (buscaFilas(app.cache.categorias, {cd_categoria:xcat.cd_categoria}).length==0)
		app.cache.categorias.push(xcat)

	if (situar==null){
		//si hay resultados de una búsqueda anterior, los quitamos
		var indicesBorrar=getIndiceFila(app.cache.testTienda, {_contains_liscat:','+xcat.cd_categoria+','}, true)
		for (var i=indicesBorrar.length-1; i>=0; i--){
			app.cache.testTienda.splice(indicesBorrar[i], 1)
			}
		app.cache.testTienda=(app.cache.testTienda || []).concat(resultadosBusqueda)
		self.navegaCat(xcat.cd_categoria)
		}
	else {
		//self.pintaPortadaTienda(app.cache.categorias, app.cache.testTienda)
		self.testPreview(resultadosBusqueda[0].cd_test, false)
		}

	self.domBody.removeClass('cargando')
	}
//////
VistaTienda.prototype.cambiaEntorno=function(xbtn, fromHistory){
	var self=this
	var pressed=jQuery(xbtn)
	
	//app.nav=[]//reseteamos la pila de navegación
	this.restauraHeaderApp()
	////

	this.domHeader.find('.btn.tienda, .btn.dispositivo').removeClass('active')
	pressed.addClass('active')

	if (this.domDetalleTest && this.domDetalleTest.is(':visible')){
		this.domBody.show()
		this.domDetalleTest.hide()
		}
	if (!this.domBody.is(':visible'))
		this.domBody.show()

	if (pressed.hasClass('dispositivo')){
		this.entornoLocal=true

		if (app.cache.catsConTestLocales==null || app.cache.catsConTestLocales.length==0)
			app.cache.catsConTestLocales=app.catsConTestLocales()

		this.cargaListaCategorias(app.cache.catsConTestLocales, true)
		this.pintaPortadaTienda(app.cache.catsConTestLocales, app.cache.testLocales)
		}
	else {
		this.entornoLocal=false

		this.leeTestTienda( 
			function(datos){
				self.pintaPortadaTienda(app.cache.categorias, datos)
				self.doRecuperarPosicion()
				} )
		}

	if (!fromHistory) {
		app.addToNav({vista:this.id, entornoLocal:this.entornoLocal})
		}
	app.pushState(this.entornoLocal?'vistaTienda:dispositivo':'vistaTienda:tienda')
	}
VistaTienda.prototype.doRecuperarPosicion=function(){
	if (this.recuperarPosicion){
		if (this.entornoLocal){
			var colTests=app.cache.testLocales

			var b
			if (isNaN(this.recuperarPosicion))
				b={matricula:this.recuperarPosicion}
			else
				b={cd_test:this.recuperarPosicion}

			var tst=buscaFilas(colTests, b)[0]
			this.testPreview(tst.cd_test, true)
			}
		else {
			this.doBuscarTest(null, this.recuperarPosicion, true)
			}
		this.recuperarPosicion=null
		}
	}
VistaTienda.prototype.cargaListaCategorias=function(lis, todosLosNiveles){
	var self=this
	//http://www.oposiciones.de/oposiciones.htm, opción "según estudios"

	var xl=[]
	var fn=function(){
		var idcat=jQuery(this).data('id')
		self.navegaCat(idcat) 
		}

	for (var i=0; i<lis.length; i++){
		var cat=lis[i]

		if (todosLosNiveles){
			var hijos=[]
			// var el=this.sacaPadresCategoria(cat) || []
			// var hijos=el.map(function(xel){return creaObjProp('span', {texto:xel, i:'fa-angle-right', className:'padre'})})

			hijos.push(creaT(cat.ds_categoria))
			xl.push( creaObjProp('li', {hijo:creaObjProp('a', {hijos:hijos, 
										'data-id':cat.cd_categoria, 
										onclick:fn})} ) )
			}
		else if (cat.cd_categoriapadre==null)// if (cat.listarcomocategoria==1)
			xl.push( creaObjProp('li', {hijo:creaObjProp('a', {texto:cat.ds_categoria, 'data-id':cat.cd_categoria, onclick:fn})} ) )
		}
	jQuery('ul#categorias').empty().append(xl)
	}
VistaTienda.prototype.sacaPadresCategoria=function(cat){
	// app.cache.categorias
	if (cat.cd_categoriapadre==null)
		return null

	var r=[]
	while (cat.cd_categoriapadre!=null){
		cat=buscaFilas(app.cache.categorias, {cd_categoria:cat.cd_categoriapadre})[0]
		r.push(cat.ds_categoria)
		}
	return r.reverse()
	}
VistaTienda.prototype.navegaCat=function(cd_categoria, fromHistory, cd_pack){
	if (!fromHistory) 
		app.addToNav({vista:this.id, entornoLocal:this.entornoLocal, cd_categoria:cd_categoria, cd_pack:cd_pack})
	
	if (this.domDetalleTest && this.domDetalleTest.is(':visible')){
		this.domBody.show()
		this.domDetalleTest.hide()
		}

	//dejamos una pequeña lista de tests visibles por categoría, y mostramos el botón 'cargar más'
	var bloques=this.domBody.find('.bloque.cat').show()
	bloques.find('.card').not('.main').remove()
	bloques.find('.titulo .cargarMas').show()
	bloques.find('.cargarMas.aunMas').remove()

	this.cat=buscaFilas((this.entornoLocal?app.cache.categoriasLocales:app.cache.categorias), 
						{cd_categoria: cd_categoria})[0]
	this.cambiaHeaderApp(this.cat.ds_categoria)

	this.domBody.find('.admonition').remove()
	var blSel=this.domBody.find('.bloque.cat#cat-'+this.cat.cd_categoria)
	if (blSel.length==0){
		blSel=jQuery(
			creaObjProp('section', {id:'cat-'+this.cat.cd_categoria, className:'bloque cat'+(cd_pack==null?'':' pack'), 'data-id':this.cat.cd_categoria, hijos:[
				creaObjProp('h4', {className:'titulo', texto:this.cat.ds_categoria })
				]} )
			)
		this.domBody.append(blSel[0])
		}
	this.domBody.find('.bloque.cat').not(blSel).hide()
	blSel.show()//por si acaso
	if (cd_pack==null){
		this.domBody.find('.bloque.cat.pack').hide()
		}

	this.cargarMas(this.cat.cd_categoria, cd_pack)
	}
VistaTienda.prototype.cargarMas=function(cd_categoria, cd_pack){
	this.urlBody={vista:this.id, entornoLocal:this.entornoLocal, cd_categoria:cd_categoria, cd_pack:cd_pack}

	var tanda=10, packs=[]
	//this.cat
	var blCat=this.domBody.find('.cat#cat-'+cd_categoria)

	var xcat=buscaFilas(app.cache.categorias, {cd_categoria:cd_categoria})[0]

	blCat.find('.titulo .cargarMas').hide()//el principal lo ocultamos, el resto se eliminan
	blCat.find('.cargarMas.aunMas').remove()

	var num=blCat.find('article.card').length

	var lista=(this.entornoLocal?app.cache.testLocales:app.cache.testTienda)

	packs=buscaFilas(app.cache.categorias, {cd_categoriapadre:cd_categoria})
	for (var j=0; j<packs.length; j++){
		var pack=packs[j]

		if (jQuery(blCat).find('#pack-'+ pack.cd_categoria).length==0){
			var dpack=this._generaDomPack(pack, j, pack)
			jQuery(blCat).append( dpack )
			this.ajustaAlturaCard(dpack)
			}
		}

	var sl
	if (cd_categoria<0)
		sl=this.escogeTestsCatDinamica(cd_categoria, lista)
	else
		sl=buscaFilas( lista, {_contains_liscat:','+cd_categoria+','})

	if (sl.length==0 && packs.length==0){
		if (cd_categoria==-200)//buscar
			blCat.append(this.admonition('No se han encontrado tests que cumplan con tus criterios de búsqueda', null, (xcat.i || 'fa-ban')+' fa-4x' ) )
		else
			blCat.append(this.admonition('No hay tests en esta categoría', null, (xcat.i || 'fa-ban')+' fa-4x' ) )
		}
	else{
		var aPintar=sl.slice(0)
		aPintar=aPintar.slice(num,num+tanda)
		for (var j=0;  j<aPintar.length; j++){
			if (packs.length && this.testEstaEnPack(aPintar[j], packs))
				continue
			
			if (blCat.find('article.card#test-'+aPintar[j].cd_test).length==0)
				blCat.append( this._generaDomTest(aPintar[j], j, xcat ) )
			}

		if (sl.length>(num+tanda) && jQuery(blCat).find('article.card').length==(num+tanda) ){
			blCat.append( this.generaBtnCargarMas(cd_categoria, 'aunMas') )
			}
		}
	this.ajustaAlturaCard(blCat.find('article.card.test'))

	}
VistaTienda.prototype.navegaPack=function(cd_categoria, fromHistory){
	console.log('> click pack')
	this.navegaCat(cd_categoria, fromHistory, cd_categoria)
	}
VistaTienda.prototype.generaBtnCargarMas=function(cd_categoria, cssAdicional){
	var self=this
	return creaObjProp('button', {onclick:function(){self.cargarMas(cd_categoria)}, className:'cargarMas '+cssAdicional, hijos:[
		creaObjProp('span', {className:'btn', texto:'Más'})
		]} )
	}
VistaTienda.prototype.escogeTestsCatDinamica=function(cd_categoria, lista){
	var tests
	if (this.entornoLocal){//últimos hechos o descargados
		tests=this.ordenaPorFecha(lista).slice(0,10)
		}
	else {

		// if (cd_categoria==-1)
		// 	tests=this.ordenaPorFecha(lista).slice(0,10)
		// else if (cd_categoria==-2){
		// 	tests=lista
		// 	tests.sort(function(a,b){
		// 		var na=Number(a.likes); var nb=Number(b.likes)
		// 		if (na==nb)
		// 			return 0
		// 		else if (na>nb)
		// 			return -1
		// 		else
		// 			return 1
		// 		})
		// 	}
		// else
			tests=buscaFilas(lista, {_contains_liscat:','+cd_categoria+','})
		}
	return tests
	}
VistaTienda.prototype.pintaPortadaTienda=function(xcat, lista){
	var xl=[]
	
	this.calculaAnchoTarjetas()
	var self=this
	var fnNavega=function(){
		console.log('> click cat')
		self.navegaCat(jQuery(this).closest('.bloque').data('id'))
		}
	this.domBody.empty()
	if (lista.length==0){
		var titulo, texto, sub, i
		if (this.entornoLocal){
			titulo='No hay tests'
			texto='Aquí se muestran los tests que tienes almacenados en tu dispositivo, pero ahora mismo no hay ninguno.'
			sub='¿Por qué no descargas alguno de la tienda? Hay muchos gratuitos'
			i='fa-ban fa-4x'
			}
		else if (app.offline){
			titulo='No se ha podido conectar con la tienda'
			texto='Es posible que haya problemas de conectividad, inténtalo más tarde.'
			i='fa-wifi fa-4x'
			}
		this.domBody.removeClass('cargando').addClass('flowable').append( this.admonition(titulo, texto, i, sub ) )
		return
		}

	for (var i=0; i<xcat.length; i++){
		var cat=xcat[i]

		if (cat==null) continue //puede deberse a alguna categoría que ha desaparecido
		var packs=[]

		
		if (this.entornoLocal){
			//pass
			}
		else if ( cat.listarcomocategoria==0 || cat.cd_categoriapadre!=null) 
			continue


		var totalPorCat, sl
		if (cat.cd_categoria<0){
			if (this.entornoLocal)
				cat.ds_categoria='Recientes'

			totalPorCat=this.escogeTestsCatDinamica(cat.cd_categoria, lista)
			// sl=totalPorCat.slice(0,6)
			sl=totalPorCat
			cat.numtestsporcat=sl.length//aquí no queremos botón de más
			}
		else {
			packs=buscaFilas(app.cache.categorias, {cd_categoriapadre:cat.cd_categoria})
			totalPorCat=buscaFilas(lista, {_contains_liscat:','+cat.cd_categoria+','})
			cat.numtestsporcat=totalPorCat.length
			sl=totalPorCat.slice(0,4) //Sacamos sólo unos pocos
			}

		var d=creaObjProp('section', {id:'cat-'+cat.cd_categoria, className:'bloque cat', 'data-id':cat.cd_categoria, hijos:[
			creaObjProp('h4', {onclick:fnNavega, className:'titulo', hijos:[
				creaT(cat.ds_categoria)
				] })
			]} )

		if (!this.entornoLocal){
			for (var j=0;  j<packs.length; j++){
				var pack=packs[j]

				if (jQuery(d).find('#pack-'+ pack.cd_categoria).length==0){
					var dpack=this._generaDomPack(pack, j, cat)
					d.appendChild( dpack )
					}
				}
			}

		for (var j=0;  j<Math.min(this.numTarjetasPorAncho, sl.length); j++){
			var t=sl[j]
			if (packs.length && this.testEstaEnPack(t, packs)){
				continue
				}
			else if (jQuery(d).find('#test-'+ t.cd_test).length==0){
				var xdom=jQuery(this._generaDomTest(t, j, cat))
				xdom.addClass('main')
				d.appendChild( xdom[0] )
				}
			}
		if (sl.length>this.numTarjetasPorAncho){
			var h4=jQuery(d).find('h4')
			var t=h4.text()
			h4.text('').append([
				this.generaBtnCargarMas(cat.cd_categoria),
				creaT(t)])
			
		}

		xl.push( d )
		}

	this.domBody.addClass('flowable').append(xl).removeClass('cargando')//.show()
	this.ajustaAlturaCard(jQuery('.card.pack'))
	if (this.entornoLocal) 
		this.ajustaAlturaCard(jQuery('.card.test'))
	}
VistaTienda.prototype.testEstaEnPack=function(test, packs){
	var temp=test.liscat.split(',')
	for (var i=0; i<temp.length; i++){
		var c=temp[i]
		if (c=='') 
			continue
		var f=buscaFilas(packs, {cd_categoria:c})
		if (f.length)
			return true
		}
	return false
	}
VistaTienda.prototype._formatoPrecio=function(domPrecio, precio, moneda){
	if (precio==0) 
		domPrecio.appendChild( creaT('GRATIS') )
	else 
		domPrecio.appendChild( creaT( formato.moneda(this.precioMinimo(precio), moneda) ) )
	}
VistaTienda.prototype.precioMinimo=function(p){
	if (p>0 && p<0.50)//precio mínimo Android
	 	p=0.50
	return p
	}
VistaTienda.prototype._generaDomTest=function(test, j, cat){
	var self=this
	var infoTienda=[], loTengo=false, domPrecio, onclick, dFecha=creaT(''), resp

	if (this.entornoLocal){
		loTengo=true
		domPrecio=creaObjProp('span', {className:'col-xs-2 loTengo', i:'fa-check-circle'})

		var notaTest=''
		var respTodas=buscaFilas(app.cache.respuestasLocales, {cd_test:test.cd_test})
		if (respTodas)
			resp=respTodas[0]
		if (resp){
			if (!resp.finalizado)
				notaTest='No finalizado'
			else if (resp.nota>5)
				notaTest='Aprobado ('+resp.nota+')'
			else
				notaTest='No aprobado ('+resp.nota+')'
			}

		infoTienda=[
			creaObjProp('span', {className:'col-xs-10 bl notaTest', texto:notaTest}),
			domPrecio,
			]

		onclick=function(){
			console.log('> click test')
			self.testPreview(test.cd_test)
			}

		var uo=( (resp && resp.fecha)? resp.fecha: test.fu_modificacion)

		var f=formato.fechaComps(uo)
		if (f){
			dFecha=creaObjProp('span', {className:'fecha pull-right bl', hijos:[
				creaObjProp('span', {className:'bl dia', texto:f.dia}),
				creaObjProp('span', {className:'bl mes', texto:f.mesl}),
				]})
			}

		}
	else {
		loTengo=buscaFilas(app.cache.testLocales, {cd_test:test.cd_test}).length || test.lotengo

		if (loTengo){
			if (test.precio>0 && test.lotengo)
				domPrecio=creaObjProp('span', {className:'col-xs-8  bl precio', texto:'COMPRADO'})	
			else
				domPrecio=creaObjProp('span', {className:'col-xs-8 loTengo', i:'fa-check-circle'})
			}
		else {
			domPrecio=creaObjProp('span', {className:'col-xs-8  bl precio'})
			this._formatoPrecio(domPrecio, test.precio, test.moneda)
			}
		
		infoTienda=[
			creaObjProp('span', {className:'col-xs-4 bl love', hijo:creaObjProp('span', {texto:test.likes}), i:(test.likes>0?'fa-heart':'fa-heart-o') }),
			domPrecio,
			]

		onclick=function(){self.testPreview(test.cd_test)}
		}

	var self=this
	return creaObjProp('article', {'style.width':this.anchoTarjetas+'px', onclick:onclick, id:'test-'+test.cd_test, 'data-id':test.cd_test, className:'card test', hijos:[
			creaObjProp('div', {className:'body', i:cat.i}),
			creaObjProp('footer', {hijos:[
				dFecha,
				creaObjProp('div', {className:'frow', hijos:infoTienda}),
				creaObjProp('div', {className:'frow', hijos:[
					creaObjProp('span', {className:'bl nombre ellipsis col-xs-12', texto: (test.anho?test.anho+', ':'')+test.ds_test}) 
					]}),
				]})
			]})
	}
VistaTienda.prototype._generaDomPack=function(pack, j, cat){
	if (this.anchoTarjetas<11) {
		console.log('error ancho tarjetas')
		this.calculaAnchoTarjetas()
		}

	var self=this
	var ret= creaObjProp('article', {'style.width':this.anchoTarjetas+'px', id:'pack-'+pack.cd_categoria, 'data-id':pack.cd_categoria, className:'main card pack', hijos:[
			creaObjProp('div', {className:'body', i:pack.i}),
			creaObjProp('footer', {hijos:[
				// dFecha,
				
				creaObjProp('div', {className:'frow', hijos:[
					creaObjProp('span', {className:'bl nombre NOellipsis col-xs-12', texto:pack.ds_categoria}) 
					]}),
				creaObjProp('div', {className:'frow', hijos:[
					// creaObjProp('small', {texto:'Colección de tests'})
					]}),
				]})
			]})
	var fn=function(){
		self.navegaPack(pack.cd_categoria)
		}
	jQuery(ret).on('click', fn)

	return ret
	}
VistaTienda.prototype.ajustaAlturaCard=function(ret){
	var xret=jQuery(ret)
	var h, w, esTest

	if (xret.length>1){
		var xxret=jQuery(xret[0])
		h= xxret.outerHeight()
		w= xxret.outerWidth()
		esTest= xxret.hasClass('test')
		}
	else {
		h=xret.outerHeight()
		w=xret.outerWidth()
		esTest=xret.hasClass('test')
		}

	if (h==0 || w==0) return
	var diff=h-w; var hFooter=61
	
	if (esTest){
		xret.find('footer .fecha').css('margin-top', -(h-hFooter) )
		}
	else {//packs
		if (diff>0){
			xret.css({'margin-top': diff/2, 'margin-bottom': diff/2, }).find('.body').css('height', w-hFooter)
			}
		else{
			diff=-diff
			xret.css({'margin-left':diff/2, 'margin-right':diff/2+5, 'width':h})
			}
		}
	}
//////
VistaTienda.prototype.leeTestTienda=function(fnCallBack){
	// return [
		// 		{cd_test:1, ds:'Test Enfermería 1',  likes:13, cd_categoria:1, importe:0, url:'https://s3-sa-east-1.amazonaws.com/tax-i/include/static/style-metronic.css'},
		// 		{cd_test:12, ds:'Test Enfermería 2', likes:1, cd_categoria:1, importe:0, url:'https://s3-sa-east-1.amazonaws.com/tax-i/include/static/select2.css'},
		// 		{cd_test:19, ds:'Test Enfermería 3', likes:0, cd_categoria:1, importe:.6},
		// 		{cd_test:99, ds:'Test Enfermería 4', likes:1, cd_categoria:1, importe:.2},
		// 		{cd_test:88, ds:'Paquete 10 Tests Enfermería/legislación', likes:10, cd_categoria:1, importe:.60, contenido:[
		// 				{ds:'Legislación 1'},
		// 				{ds:'Legislación 2'},
		// 				{ds:'Legislación 3'},
		// 				{ds:'Legislación 4'},
		// 				{ds:'Legislación 5'},
		// 			]},
		// 		]
	if (this.ftestTienda && (new Date()-this.ftestTienda<120000)){//120s
		console.info('leeTestTienda: la última lectura es reciente, la reaprovechamos')
		if (fnCallBack){
			this.cargaListaCategorias(app.cache.categorias)
			fnCallBack(app.cache.testTienda)
			this.domBody.removeClass('cargando')
			}
		return
		}

	var self=this
	self.domBody.empty().addClass('cargando')

	if (app.cache.usuario==null){
		var self=this
		this.esperandoCredenciales=this.esperandoCredenciales || 0
		this.esperandoCredenciales++

		if (this.esperandoCredenciales<5){
			console.info('hay que esperar a las credenciales: tienda')
			setTimeout(function(){self.leeTestTienda(fnCallBack)}, 500*this.esperandoCredenciales)
			return
			}
		else{
			self.domBody.removeClass('cargando')
			this.domBody.append(
				this.admonition('No se ha podido conectar con la tienda', 'Es una pena, realmente disponemos de un gran material allá arriba. Inténtalo más tarde, por favor.', 'fa-exclamation-triangle fa-4x')
				)
			}
		}

	if (app.offline){
		app.cache.testTienda=[]
		if (fnCallBack){
			fnCallBack(app.cache.testTienda)
			self.domBody.removeClass('cargando')
			}
		return
	}

	jQuery.post(app.config.url, {accion:'getPortadaTienda'}).success(
		function(data){
			var datos=xeval(data)
			if (datos.retorno==1){
				app.cache.testTienda=datos.tests || []
				self.ftestTienda=new Date()
				
				app.setCategorias(datos.categorias)
				self.cargaListaCategorias(datos.categorias)

				if (fnCallBack){
					fnCallBack(app.cache.testTienda)
					self.domBody.removeClass('cargando')
					}
				}
			else
				console.error(data)
		})
	}
VistaTienda.prototype.testPreview_montaDiv=function(){
	if (this.domCont==null)
		return

	if (this.domDetalleTest==null){
		this.domDetalleTest=jQuery(creaObjProp('div', {'style.height':this.domBody.innerHeight(), className:'vista-body detalle-test flowable cargando'}))
		this.domCont.append(this.domDetalleTest)
		this.domBody.hide()
		}
	else {
		this.domDetalleTest.show().empty().addClass('cargando')
		this.domBody.hide()
		}
	}
VistaTienda.prototype.testPreview=function(cd_test, fromHistory){
	if (!fromHistory) 
		app.addToNav({vista:this.id, entornoLocal:this.entornoLocal, cd_categoria:this.cat?this.cat.cd_categoria:null, cd_test:cd_test})

	this.cambiaHeaderApp('cargando')
	this.testPreview_montaDiv()

	var loTengoEnLocal=buscaFilas(app.cache.testLocales, {cd_test:cd_test})
	var loTengo=loTengoEnLocal
	if (loTengo.length==0)
		loTengo=buscaFilas(app.cache.testTienda, {cd_test:cd_test})

	var loHice=buscaFilas(app.cache.respuestasLocales, {cd_test:cd_test})

	if (loTengo.length>0){ //no hace falta consultar al servidor
		this._testPreview(loTengo[0], loHice[0], loTengoEnLocal.length>0)
		}
	else {
		var self=this
		jQuery.get(app.config.url, {accion:'getPreviewTest', cd_test:cd_test}).success(
			function(data){
				var test=xeval(data).test
				test.lotengo=test.lotengo
				self._testPreview(test, null, false)
				}
			)
		}
	}
VistaTienda.prototype._testPreview=function(test, estadisticas, loTengo){
	var self=this

	this.recuperarPosicion=null
	var textoBotonDescargar, fnDescargar

	self.cambiaHeaderApp('Detalles del test')//test.ds_test)
	self.domDetalleTest.removeClass('cargando tengo-este-test')

	if (loTengo){
		self.domDetalleTest.addClass('tengo-este-test')
		textoBotonDescargar='Descargar'
		fnDescargar=function(){self.descargaTest(test.cd_test)}
		}
	else if (test.precio==0 || test.lotengo){
		textoBotonDescargar='Descargar'
		fnDescargar=function(){self.descargaTest(test.cd_test)}
		}
	else{
		if (isPhone()){
			textoBotonDescargar=formato.moneda( this.precioMinimo(test.precio), test.moneda)+' - Comprar'
			fnDescargar=function(){self.compraTest(test)}
			}
		else {
			textoBotonDescargar=formato.moneda( this.precioMinimo(test.precio), test.moneda)+' - Compra no disponible'
			fnDescargar=function(){
				if (isPhone())
					navigator.notification.alert('La compra de tests no está disponible para tu plataforma (actualmente sólo es posible realizar compras desde nuestra app para Android)', null, 'Compra no disponible')
				else
					alert('La compra de tests no está disponible para tu plataforma (actualmente sólo es posible realizar compras desde nuestra app para Android)')
				}
			}
		}

	var tieneImagenes=Number(test.tieneImagenes)? creaObjProp('span', {className:'bl imagenes', texto:'Contiene imágenes', i:'fa-camera'}) :creaT('') 
	var visual=creaObjProp('div', {className:'col-xs-3 visual'})
	if (test.img==null || test.img=='')
		// visual.appendChild( creaObjProp('i', {className:'fa fa-file-text-o fa-8x'}) )
		visual.appendChild( creaObjProp('span', {className:'fa-stack pull-left fa-3x', hijos:[
			creaObjProp('i', {className:'fa fa-circle text-success fa-stack-2x'}),
			creaObjProp('i', {className:'fa fa-file-text-o text-white fa-stack-1x'}),
			]}) )
	else
		visual.style.backgroundImage='url('+test.img+')'

	var tags=creaObjProp('span', {className:'bl cats row', hijo:creaObjProp('span', {'style.paddingLeft':'0px', className:'col-xs-10', texto:self.concatCategoriasTest(test)}), omiteNulo:true, stack:'fa-tags' })
	jQuery(tags).find('.fa-stack').addClass('col-xs-1')

	self.domDetalleTest.empty().append([
		creaObjProp('section', {className:'cabecera row', hijos:[
			visual,
			creaObjProp('div', {className:'col-xs-9 data', hijos:[
				creaObjProp('h1', {className:'bl titulo', texto:test.ds_test}),
				creaObjProp('span', {className:'bl', hijos:[
					creaObjProp('small', {className:'organismo', texto:test.organismo}),
					// creaObjProp('span', {texto:test.organismo==null? '': espacioDuro2}),
					creaObjProp('span', {className:'fecha', texto: formato.fechaDDMMYYYY(test.f_examen) }),
					]}),
				]}),
			]}),
		creaObjProp('section', {className:'body row', hijos:[
				tags,
				(test.anho?
					creaObjProp('span', {className:'bl anho', texto:'Año '+test.anho, stack:'fa-calendar'}):
					creaT('')
				),
				(test.grupo?
					creaObjProp('span', {className:'bl grupo', texto:'Grupo '+test.grupo, stack:'fa-mortar-board'}):
					creaT('')
				),
				creaObjProp('span', {className:'bl preguntas', texto:test.numpreguntas+' preguntas/'+test.minutos+' minutos', stack:'fa-clock-o'}),
				tieneImagenes,
				
				//creaObjProp('span', {className:'bl matricula', texto:'Matrícula '+test.matricula, stack:'fa-bookmark'}),
				creaObjProp('span', {className:'bl loTengo', i:'fa-check-circle', texto:'En tu colección'}),
			]}),
		creaObjProp('section', {className:'row botonera', hijos:[
			// creaObjProp('div', {className:'bl grupo pull-right', hijos:[
			creaObjProp('button', {className:'btnAbrir btn btn-info-t btn-sm pull-right', texto:'ABRIR', onclick:function(){self.lanzaTest(test.cd_test)} }),
			creaObjProp('button', {className:'btnLove btn btn-stack btn-sm'+(test.likeit?' on':''), stack:'fa-heart fa-lg', onclick:function(){self.toggleLike(test.cd_test) } }),
			creaObjProp('button', {className:'btnDesinstalar btn btn-default btn-sm', texto:'Desinstalar', onclick:function(){self.desinstalarTest(test.cd_test)} }),
			creaObjProp('button', {className:'btnCompartir btn btn-stack btn-sm btn-default', stack:'fa-share-alt fa-lg', onclick:function(){self.compartir(test)} }),

			creaObjProp('button', {className:'btnDescargar btn btn-success-t pull-right btn-sm', texto:textoBotonDescargar, onclick:fnDescargar })
			// ]})
			]})
		])

	if (estadisticas){
		if (!estadisticas.finalizado){
			self.domDetalleTest.append(
				creaObjProp('section', {className:'cabecera row', hijos:[
					creaObjProp('div', {className:'col-xs-2 visual', hijos:[
						creaObjProp('span', {className:'fa-stack pull-left fa-2x', hijos:[
							creaObjProp('i', {className:'fa fa-circle text-info fa-stack-2x'}),
							creaObjProp('i', {className:'fa fa-pause text-white fa-stack-1x'}),
							]})
						]}),
					creaObjProp('div', {className:'col-xs-10 data', hijos:[
						creaObjProp('h2', {className:'tit', texto:'Tienes este test a medias'}),
						creaObjProp('div', {hijos:[
							creaObjProp('span', {className:'progress-text', texto:'Preguntas respondidas: '+estadisticas.minutosPorcentaje+'%'}),
							creaObjProp('div', {className:'progress progress-sm', hijos:[
								creaObjProp('div', {className:'progress-bar', 'style.width':estadisticas.minutosPorcentaje+'%', role:'progressbar'})
								]})
							]}),
						creaObjProp('div', {hijos:[
							creaObjProp('span', {className:'progress-text', texto:'Tiempo consumido: '+estadisticas.respondidasPorcentaje+'%'}),
							creaObjProp('div', {className:'progress progress-sm', hijos:[
								creaObjProp('div', {className:'progress-bar', 'style.width':estadisticas.respondidasPorcentaje+'%', role:'progressbar'})
								]})
							]}),
						]}),
					]})
				)
			}
		else {
			var cls='text-danger', ico='fa-times-circle', texto='No aprobado ('+estadisticas.nota+')'
			if (estadisticas.nota>5){
				cls='text-success'
				ico='fa-check-circle'
				texto='Aprobado ('+estadisticas.nota+')'
				}

			self.domDetalleTest.append(
				creaObjProp('section', {className:'row resultadoUltimoExamen', hijos:[
					creaObjProp('div', {className:'col-xs-2 visual', hijos:[
						creaObjProp('span', {className:'fa-stack pull-left fa-2x', hijos:[
							creaObjProp('i', {className:'fa fa-circle fa-stack-2x '+cls}),
							creaObjProp('i', {className:'fa text-white fa-stack-1x '+ico}),
							]})
						]}),
					creaObjProp('div', {className:'col-xs-10 data', hijos:[
						creaObjProp('h2', {texto:texto}),
						creaObjProp('small', {texto: formato.fechaUHora(estadisticas.fecha) }),

						creaObjProp('div', {className:'resultados', hijos:[
							creaObjProp('div', {className:'col-xs-4', hijos:[
								creaObjProp('span', {className:'bl small', texto:'Aciertos'}),
								creaObjProp('span', {className:'bl bold', texto:estadisticas.aciertos})
								]}),
							creaObjProp('div', {className:'col-xs-4', hijos:[
								creaObjProp('span', {className:'bl small', texto:'Fallos'}),
								creaObjProp('span', {className:'bl bold', texto:estadisticas.fallos})
								]}),
							creaObjProp('div', {className:'col-xs-4', hijos:[
								creaObjProp('span', {className:'bl small', texto:'NC'}),
								creaObjProp('span', {className:'bl bold', texto:estadisticas.nc})
								]}),
							]})
						]}),
					]}),
				creaObjProp('section', {className:'row botonera', hijos:[
					creaObjProp('button', {className:'btnAbrir btn btn-default btn-sm pull-right', texto:'REPASAR EXAMEN', onclick:function(){self.repasarExamen(test.cd_test)} }),
					]})
				)
			}
		}
	
	var xurl=(this.entornoLocal?'vistaTienda:dispositivo:':'vistaTienda:tienda:')+test.matricula
	app.pushState(xurl)
	}
VistaTienda.prototype.lanzaTest=function(cd_test){
	var self=this

	var test=buscaFilas(app.cache.testLocales, {cd_test:cd_test})[0]
	var resp=buscaFilas(app.cache.respuestasLocales, {cd_test:cd_test})[0]

	if (resp){
		if (isPhone()){
			var options = {
		        title: (resp.finalizado?'Test terminado ¿empezar de nuevo? Se perderán estadísticas':
		        						'Test a medias, ¿continuar o empezar de nuevo?'),
		        						
		        buttonLabels: resp.finalizado?['Empezar de nuevo', 'Cancelar']:['Continuar', 'Empezar de nuevo', 'Cancelar']
			    }
			window.plugins.actionsheet.show(options, function(buttonIndex){
				if (resp.finalizado){
					if (buttonIndex==1)
						app.lanzaTest(test, null, self)	
					}
				else {
					if (buttonIndex==1)
						app.lanzaTest(test, resp, self)
					else if (buttonIndex==2)//el botón atrás llega aquí como buttonIndex=2
						app.lanzaTest(test, null, self)	
					}
				})
			}
		else {
			//web: lanzamos respetando lo anterior
			app.lanzaTest(test, resp, self)
			}
		}
	else {
		app.lanzaTest(test, resp, self)	
		}
	}
VistaTienda.prototype.compartir=function(test){
	var gr=app.vistaSocial.grupos, hijos=[]

	if (app.vistaSocial.grupos.length==0){
		if (isPhone())
			navigator.notification.alert('No hay ningún grupo creado en la vista Social', null, 'Compartir con')
		else
			alert('No hay ningún grupo creado en la vista Social')
		return
		}

	for (var i=0; i<gr.length; i++){
		hijos.push( gr[i].ds_grupo )
		}
	if (isPhone()){
		window.plugins.actionsheet.show({
		        title:'Compartir',				
		        buttonLabels: hijos
			    }, 
		    function(buttonIndex){	
		    	console.log(buttonIndex)

		    	if (buttonIndex>app.vistaSocial.grupos.length)
		    		return //cancel
		    	else {
			    	var gr=app.vistaSocial.grupos[buttonIndex-1]
					app.vistaSocial.enviaTest(gr, test)
					app.cargaVistaSocial(true, ':'+gr.cd_grupo)
					app.addToNav({vista:app.vistaSocial.id, cd_grupo:gr.cd_grupo})
					app.vistaSocial.getNuevosMsg()
					}
				})
		}
	else {//
		console.log('Comparto con el último grupo que haya')
		var gr=gr[gr.length-1]
		app.vistaSocial.enviaTest(gr, test)	
		app.cargaVistaSocial(true, ':'+gr.cd_grupo)
		app.addToNav({vista:app.vistaSocial.id, cd_grupo:gr.cd_grupo})
		app.vistaSocial.getNuevosMsg()
		}
	}
VistaTienda.prototype.repasarExamen=function(cd_test){
	var test=buscaFilas(app.cache.testLocales, {cd_test:cd_test})[0]
	var resp=buscaFilas(app.cache.respuestasLocales, {cd_test:cd_test})[0]

	jQuery('.vista.vistaTest').remove()
	new VistaRepasoTest(test, resp, false).toDOM()
	}
//////
VistaTienda.prototype.anhadeATestLocales=function(test){
	app.cache.testLocales.push(test)
	this.salvaTestLocales()
	app.cache.catsConTestLocales=null
	}
VistaTienda.prototype.desinstalarTest=function(cd_test){
	var idxBorrar=getIndiceFila(app.cache.testLocales, {cd_test:cd_test})
	app.cache.testLocales.splice(idxBorrar, 1)
	this.salvaTestLocales()

	app.cache.catsConTestLocales=app.catsConTestLocales()

	this.domDetalleTest.removeClass('tengo-este-test')

	if (this.entornoLocal){
		this.pintaPortadaTienda(app.cache.catsConTestLocales, app.cache.testLocales)
		// jQuery('article.main.card[data-id='+cd_test+']').remove()
		}
	else
		jQuery('article.main.card[data-id='+cd_test+'] .loTengo').remove()
	}
VistaTienda.prototype.salvaTestLocales=function(){
	save('tapp37_listaTest', app.cache.testLocales)
	}
VistaTienda.prototype.ordenaPorFecha=function(lista){
	lista.sort(function(a, b){
		var fa=formato.toDate(a.fu_modificacion)
		var fb=formato.toDate(b.fu_modificacion)

		if (fa==null && fb==null)
			return 0
		else if (fa!=null && fb==null)
			return -1
		else if (fa==null && fb!=null)
			return 1

		else if (fa==fb)
			return 0
		else if (fa>fb)
			return -1
		else
			return 1
		})
	return lista
	}
VistaTienda.prototype.leeTestLocales=function(){
	if (app.cache.testLocales==null)
		app.cache.testLocales=app.getTestLocales()
	}
VistaTienda.prototype.leeRespuestasLocales=function(){
	if (app.cache.respuestasLocales==null)
		app.cache.respuestasLocales=app.getRespuestasLocales()
	}
VistaTienda.prototype.descargaTest=function(cd_test, pruebaCompra){
	var self=this

	var xbtn=this.domDetalleTest.find('.btnDescargar')
	var oldText=xbtn.text()
	xbtn.text('Descargando...').addClass('cargando')

	console.info('Iniciamos descarga test '+cd_test)
	jQuery.post(app.config.url, {accion:(pruebaCompra?'getTestComprado':'getTest'), cd_test:cd_test, pruebaCompra:pruebaCompra?JSON.stringify(pruebaCompra):null}).success(
		function(data){
			var datos=xeval(data)
			if (datos.retorno==1){
				datos.test.fu_modificacion=new Date()

				self.anhadeATestLocales(datos.test)
				app.cache.catsConTestLocales=app.catsConTestLocales()

				var idcat=datos.test.liscat.split(',')[0]
				var cat=buscaFilas(app.cache.categorias, {cd_categoria:idcat})
				jQuery('article.card[id=test-'+datos.test.cd_test+']').replaceWith(
					self._generaDomTest(datos.test, null, cat)
					)
				// if (self.entornoLocal){
				// 	self.pintaPortadaTienda(app.cache.catsConTestLocales, app.cache.testLocales)
				// 	}
				// else{
				// 	self.pintaPortadaTienda(app.cache.categorias, app.cache.testTienda)
				// 	}

				setTimeout(function(){
					self.domDetalleTest.addClass('tengo-este-test')
					xbtn.removeClass('cargando').text(oldText)
					},1500)
				console.info('test '+cd_test+' descargado!, '+datos.test.numpreguntas+' preguntas')
				}
			else {
				console.error(data)
				xbtn.removeClass('cargando').addClass('btn-danger').text('Error al descargar')
				}
			})
	}
VistaTienda.prototype.compraTest=function(test){
	var self=this

	this.procesandoOrden=null
	this.compraCancelada=null

	var xbtn=this.domDetalleTest.find('.btnDescargar')
	var oldText=xbtn.text()
	xbtn.text('Conectando...').addClass('cargando')
	
	if (!window.store) {
        navigator.notification.alert('Ha habido un problema al tratar de acceder a la tienda', null, 'Tienda no disponible')
        console.log('Store not available')
        return
    	}

    store.verbosity = store.DEBUG // Enable maximum logging level

	var prod
    if (test.precio<=.5)
    	prod='test050eur'
    else if (test.precio=.6)
    	prod='test060eur'

    // Inform the store of your products
    console.log('registerProducts');
    var xkeys=Object.keys(store.products.byAlias)
    if (xkeys.indexOf(prod)==-1){
	    store.register({
	        id:     prod,
	        alias: 	prod,
	        type:   store.CONSUMABLE
	    	})
	    }

	if ((store.get(prod).state==store.VALID || store.get(prod).state==store.REGISTERED) && this.procesandoOrden==null){
		store.order(prod)
		this.procesandoOrden=prod
	}

    // When any product gets updated, refresh the HTML.
    store.when(prod).updated(function (p) {
    	if (self.compraCancelada)
    		return

    	if (p.order)
    		xbtn.removeClass('cargando').text('Comprado')
    	else
			xbtn.addClass('cargando').text('Procesando')

        if (!p.owned){
        	self.doIAP(p)
        	}

        self.lastState=p.state
	    })

	store.when(prod).cancelled(function(p){
		self.compraCancelada=true
		self.procesandoOrden=null
		xbtn.removeClass('cargando').text(oldText)
		store.refresh()
		})

 	// When purchase of the full version is approved,
    // show some logs and finish the transaction.
    store.when(prod).approved(function (order) {
        xbtn.removeClass('cargando').text('Comprado')
        order.finish()
    	})

    store.when(prod).finished(function (order) {
        self.descargaTest(test.cd_test, order.transaction)
        setTimeout(function(){xbtn.removeClass('cargando').text('Comprado')}, 500)
    	})

    // When store is ready, activate the "refresh" button;
    store.ready(function() {
    	console.log('Store ready')
        store.refresh()
    	})

    // Log all errors
    store.error(function(error) {
    	console.log('ERROR ' + error.code + ': ' + error.message)
    	navigator.notification.alert('ERROR ' + error.code + ': ' + error.message, null, 'Error en tienda')
    	})

    store.refresh();
	}
VistaTienda.prototype.doIAP=function(p){
    if (!p.loaded) {
    	console.log('renderIAP: not loaded')
    	}
    else if (!p.valid) {
    	console.log('renderIAP: not valid')
    	}
    else if (p.valid) {
    	console.log('renderIAP: valid!!')

        if (p.canPurchase) {
        	if (this.procesandoOrden==null) {
        		store.order(p.id)
	            this.procesandoOrden=p.id
	            }
        	}
    	}
	}
VistaTienda.prototype.toggleLike=function(cd_test){
	var btn=this.domDetalleTest.find('.btnLove')
	
	var cls='on'
	btn.toggleClass(cls)

	var param={accion:'like+', cd_usuario:app.cache.usuario.cd_usuario, cd_test:cd_test}
	if (!btn.hasClass('on'))
		param.accion='like-'
	
	var res
	var idx=getIndiceFila(app.cache.testTienda, {cd_test:cd_test}, true)
	if (idx.length){
		res= Number(app.cache.testTienda[idx[0]].likes)+(btn.hasClass('on')?1:-1)
		for (var i=0; i<idx.length; i++){
			app.cache.testTienda[idx[i]].likes=res
			app.cache.testTienda[idx[i]].fu_modificacion=new Date()
			}
		}

	var idx=getIndiceFila(app.cache.testLocales, {cd_test:cd_test}, true)
	if (idx.length){
		if (res==null)
			res= Number(app.cache.testLocales[idx[0]].likes)+(btn.hasClass('on')?1:-1)

		for (var i=0; i<idx.length; i++){
			app.cache.testLocales[idx[i]].likes=res
			app.cache.testLocales[idx[i]].fu_modificacion=new Date()
			}
		}
	app.cache.testLocales[idx].likeit=btn.hasClass('on')
	this.salvaTestLocales()

	jQuery('.card.test[data-id='+cd_test+'] .love span').text( res )

	jQuery.post(app.config.url, param).success(function(data){
		var datos=xeval(data)
		})
	}
//////
VistaTienda.prototype.testData=function(){
	return [
			{cd_test:1,    ds_test:'Test Enfermería 1',  liscat:'1', nota:5.5},
			{cd_test:12,   ds_test:'Test Enfermería 2',  liscat:'1', nota:6},
			{cd_test:19,   ds_test:'Test Enfermería 3',  liscat:'1'},
			{cd_test:99,   ds_test:'Test Enfermería 4',  liscat:'1'},
			{cd_test:999,  ds_test:'Test Enfermería 99', liscat:'1'},
			{cd_test:1000, ds_test:'Test Enfermería 100',liscat:'1'},
			{cd_test:1001, ds_test:'Test Enfermería 101',liscat:'1'},

			{cd_test:2, ds_test:'Test Autoescuela ABC', liscat:'2'},
			{cd_test:3, ds_test:'Test Autoescuela DEF', liscat:'2'},
			{cd_test:4, ds_test:'Test Autoescuela 3', 	liscat:'2'},
			{cd_test:5, ds_test:'Test Autoescuela 4', 	liscat:'2'},
			{cd_test:6, ds_test:'Test Autoescuela 5', 	liscat:'2'},
			{cd_test:7, ds_test:'Test Autoescuela 99', 	liscat:'2'},

			{cd_test:201, ds_test:'Test TIC 1',  		liscat:'3'},
			{cd_test:301, ds_test:'Test TIC 11', 		liscat:'3'},
			{cd_test:401, ds_test:'Test TIC 9',  		liscat:'3'},
			{cd_test:501, ds_test:'Test TIC 10', 		liscat:'3'},
			{cd_test:601, ds_test:'Test TIC 11', 		liscat:'3'},
			{cd_test:701, ds_test:'Test TIC 12', 		liscat:'3'},
		]
	}
////////////////////////////////////////////////
function VistaSocial(desdeHistorial, gid){
	this.id='vistaSocial'

	this.recuperarPosicion=gid
	this.txtEnviarMensaje=null
	this.domMenu=jQuery('.barra.vista .btn-menu')
	this.domChatGrupo=null
	this.domEditarGrupo=null

	this.cache={}
	}
VistaSocial.prototype=new Vista
VistaSocial.prototype.getHeader=function(){
	return null //creaObjProp('header', {className:'vista-header', 'style.display':'none'})
	}
VistaSocial.prototype.getBody=function(){
	var self=this
	this.txtEnviarMensaje=jQuery( creaObjProp('input', {type:'text', className:'form-control input-sm', placeholder:'Teclea aquí'}) )
	this.txtEnviarMensaje.keydown(function(e){ 
	    var code = e.which
	    if(code==13)
	    	self.enviaMsg()
		})

	this.domChatGrupo=jQuery( creaObjProp('div', {className:'vista-detalle-grupo', 'style.display':'none', hijos:[
		creaObjProp('div', {className:'chat flowable'}),
		creaObjProp('footer', {className:'', hijos:[
			creaObjProp('div', {className:'input-group', hijos:[
				this.txtEnviarMensaje[0],
				creaObjProp('span', {className:'input-group-addon input-sm', i:'fa-comment-o', onclick:function(){self.enviaMsg()}}),
				]})
			]}),
		]}) )

	this.domEditarGrupo=jQuery( creaObjProp('div', {className:'vista-editar-grupo config flowable container', 'style.display':'none', hijos:[
		creaObjProp('div', {className:'row nombre', onclick:function(){self.btnCambiaNombreGrupo()}, hijos:[
			creaObjProp('small', {className:'bl', texto:'Nombre del grupo'}),
			creaObjProp('span',  {className:'col-xs-11 txtNombreGrupo', texto:'Nombre del grupo'}),
			creaObjProp('i', {className:'col-xs-1 pull-right btnNombreGrupo fa fa-pencil'}),
			]}),
		creaObjProp('div', {className:'row', hijos:[
			creaObjProp('small', {className:'bl', texto:'Miembros'}),
			]}),
		creaObjProp('div', {className:'row miembros', hijos:[
			creaObjProp('button', {className:'bl member fila btnMemberAdd', onclick:function(){self.btnAnhadirMiembro()}, hijos:[
				creaT('Añadir nuevo miembro'),
				creaObjProp('i', {className:'fa fa-plus-circle pull-right'})
				]})
			]}),
		creaObjProp('div', {className:'row', hijos:[
			creaObjProp('button', {className:'btn btnDeleteGroup btnDanger', texto:'Eliminar grupo', onclick:function(){self.btnDeleteGroup()}})
			]})
		]})
	)

	this.domGrupos=jQuery(creaObjProp('div', {className:'bl grupos cargando', hijos:[]}))
	return [
		creaObjProp('div', {className:'vista-body flowable', hijos:[
			creaObjProp('div', {className:'bl row head', hijos:[
				creaObjProp('span', {className:'thumb-sm avatar pull-left', hijos:[
					creaObjProp('img', {src:app.cache.usuario.picture})
					]}),
				creaObjProp('div', {className:'resultados', hijos:[
					creaObjProp('div', {className:'col-xs-4 col-xs-offset-2', hijos:[
												creaObjProp('span', {className:'small', texto:'Grupos'}), 
												creaObjProp('span', {className:'bold txtNumGrupos', texto:0 }) 
												]}),
					creaObjProp('div', {className:'col-xs-4', hijos:[
												creaObjProp('span', {className:'small', texto:'Medallas'}), 
												creaObjProp('span', {className:'bold txtNumMedallas', texto:0 }) 
												]}),
					// creaObjProp('div', {className:'col-xs-4', hijos:[
					// 							creaObjProp('span', {className:'small', texto:'Tests'}), 
					// 							creaObjProp('span', {className:'bold txtNumTests', texto:0 }) 
					// 							]}),
					]}),

				]}),
			this.domGrupos[0]
			]}),
		this.domChatGrupo[0],
		this.domEditarGrupo[0],
		]
	}
VistaSocial.prototype.resize=function(){
	jQuery('#content').height( window.innerHeight - jQuery('#navigation_bar').innerHeight() )

	var x=50
	this.hVista=jQuery('#content').height()
	this.domBody.height( this.hVista ) //-this.domHeader.outerHeight())
	
	this.domChatGrupo.height(this.hVista )
	var y=40
	this.domChatGrupo.find('.chat').height(this.hVista-y)
	}
VistaSocial.prototype.pushReceived=function(accion, datos){
	if (accion=='mensajeGrupo'){ 
		if (this.grupo && this.grupo.cd_grupo!=datos.cd_grupo){
			//estamos en otro grupo: notificación
			var u=this.getUsuDeGrupo(datos.cd_grupo, datos.cd_usuario)
			app.sendNotification('Mensaje de '+u.given_name, datos.msg, u.picture)
			}
		else if (this.domChatGrupo && this.domChatGrupo.is(':visible') ){
			var bc=this.carga1MsgGrupo(datos)

			if (bc==null){//ya existe
				}
			else {
				//en el chat: vibración y sacar el msg
				if (datos.cd_usuario!=app.cache.usuario.cd_usuario)
					navigator.notification.beep(1)

				this.domChatGrupo.find('.chat').append(bc)
				this.scrollChat()
				}
			}
		else if (this.domEditarGrupo && this.domEditarGrupo.is(':visible') ){
			//en el grupo, viendo los miembros: notificacion
			var u=this.getUsuDeGrupo(datos.cd_grupo, datos.cd_usuario)
			app.sendNotification('Mensaje de '+u.given_name, datos.msg, u.picture)
			}
		else if (this.domBody && this.domBody.is(':visible')){
			//en pantalla general de grupos
			var idfila=getIndiceFila(this.grupos, {cd_grupo:datos.cd_grupo})
			this.grupos[idfila].msg.push(datos)

			var d=this.domBody.find('.grupo[data-id='+datos.cd_grupo+']')
			d.addClass('msg-no-leido')

			var n=1
			var r=Number(d.find('.badge').text())
			if (!isNaN(r))
				n=r+1
			d.find('.badge').text(n)
			}
		else {
			app.sendNotification('Mensaje de '+datos.cd_usuario, datos.msg)
			}

		}
	}
VistaSocial.prototype.backButton=function(vTo, vFrom){
	if (app.vistaActiva!=this)
		this.show(true)
	//cd_grupo:this.grupo.cd_grupo, abrirEditaGrupo:true
	if (vFrom.abrirEditaGrupo){
		if (this.grupo && this.grupo.esModif)
			this.guardarCambiosGrupo()
		}

	if (vTo.abrirEditaGrupo){
		this.grupo=buscaFilas(this.grupos, {cd_grupo:vTo.cd_grupo} )[0]
		this.abrirEditaGrupo()
		}
	else if (vTo.cd_grupo){
		this.verGrupo(vTo.cd_grupo, true)
		}
	else {
		this.cerrarGrupo()
		}
	}
VistaSocial.prototype.tareasPostCarga=function(){
	this.getData()
	this.domMenu.hide()
	this.inflateMenu()
	}
VistaSocial.prototype.show=function(desdeHistorial){
	Vista.prototype.show.call(this, desdeHistorial)
	app.pushState('vistaSocial')
	this.domMenu.hide()

	//por si aca
	if (this.grupos.length==0) this.getData()
	}
VistaSocial.prototype.toggleMenuGlobal=function(visible){
	var menu=jQuery('.barra.global .btn-menu')	
	menu.fadeOut()
	}
VistaSocial.prototype.setOffline=function(v){
	if (!app.offline && this.grupos.length==0) this.getData()
	}
////
VistaSocial.prototype.getData=function(){
	var self=this

	if (app.offline){
		self.grupos=[]
		if (app.vistaActiva==self) self.pintaGrupos(self.grupos)
		return
		}

	jQuery.get(app.config.url, {accion:'getMisGrupos'}).success(
			function(data){
				var datos=xeval(data)
				self.grupos=datos.grupos || []
				
				for (var i=0; i<self.grupos.length; i++){
					for (var j=0; j<self.grupos[i].miembros.length; j++){
						var u=self.grupos[i].miembros[j]
						self.grupos[i].miembros[j].given_name=u.given_name || u.family_name || u.cd_usuario
						}
					}

				if (app.vistaActiva==self){
					self.pintaGrupos(self.grupos)
					if (self.recuperarPosicion)
						self.verGrupo(self.recuperarPosicion)
					}
				}
			)
	}
VistaSocial.prototype.getNuevosMsg=function(){
	var self=this

	var lastDate=new Date('1900-01-01')
	for (var i=0; i<this.grupos.length; i++){
		var f=this.grupos[i].f
		lastDate=(f>lastDate?f:lastDate)
		}
	jQuery.get(app.config.url, {accion:'getMsgMisGrupos', from:lastDate}).success(
		function(data){
			var datos=xeval(data)
			if (datos.retorno==1){
				for (var i=0; i<datos.grupos.length; i++){
					var grNuevo=datos.grupos[i]
					var grActual=buscaFilas(self.grupos, {cd_grupo: grNuevo.cd_grupo})[0]
					for (var j=0; j<grNuevo.msg.length; j++){
						var msg=grNuevo.msg[j]
						msg.cd_grupo=grNuevo.cd_grupo
						var ultimoMsgActual=grActual.msg[grActual.msg.length-1]
						if (Number(msg.cd_mensaje)> Number(ultimoMsgActual.cd_mensaje) ){
							grActual.msg.push(msg)
							self.pushReceived('mensajeGrupo', msg)
							}
						}
					}
				}
		})
	}
VistaSocial.prototype.testData=function(){
	return [
		{	cd_grupo:150, 
			ds_grupo:'Academia', 
			img:'http://aboutfoursquare.ru/wp-content/uploads/2013/03/Joggernaut.png',
			miembros:[
				{cd_usuario:'rotoxl@gmail.com', given_name:'Ernesto', family_name:'Molina Carrón', picture:'', admin:true}, 
				{cd_usuario:'palomagarcianavarro@gmail.com', given_name:'Paloma',}, 
				{cd_usuario:'dani@gmail.com', given_name:'Daniela',}, 
				{cd_usuario:'alex@gmail.com', given_name:'Alejandro',}, 
				],
			msg:[{cd_usuario:'palomagarcianavarro@gmail.com',
					msg:'Chicos, tenéis que hacer este test. Lo he creado yo con los apuntes de clase. Chicos, tenéis que hacer este test. Lo he creado yo con los apuntes de clase. Chicos, tenéis que hacer este test. Lo he creado yo con los apuntes de clase', 
					cd_test:119,
					url:null,
					badge:null,
					f:new Date()-3600000},
				{cd_usuario:'palomagarcianavarro@gmail.com',
					cd_test:120,
					f:new Date()-1720000},
				{cd_usuario:'dani@gmail.com',
					msg:'Daniela ha alcanzado el nivel 12',
					badge:'./images/logo.png'},
				{cd_usuario:'rotoxl@gmail.com',
					msg:'Wow', f:new Date()-20000},
				]
			}, 
		{	cd_grupo:200, 
			ds_grupo:'Colegas', 
			img:'http://www.badgeunlock.com/wp-content/uploads/2011/08/GOVKG23YMBWECX1F.png',
			miembros:[
				{cd_usuario:'rotoxl@gmail.com', given_name:'Ernesto', family_name:'Molina Carrón', picture:''}, 
				{cd_usuario:'xxx@gmail.com', 	given_name:'Kiri', 	  family_name:'García García', admin:true}, 
				{cd_usuario:'javivi@gmail.com', given_name:'Javivi',}, 
				],
			msg:[
				{from:'xxx@gmail.com', msg:"C'mon kids"},
				{from:'javivi@gmail.com', msg:'The magic clap'},
				]
			}, 
		]
	}
VistaSocial.prototype.pintaGrupos=function(){
	var self=this
	this.domGrupos.empty().removeClass('cargando')

	jQuery('.txtNumGrupos').text(this.grupos.length)
	jQuery('.txtNumTests').text( app.getTestLocales().length ) 

	app.pushState('vistaSocial')

	if (this.grupos.length==0){
		this.domGrupos.append( 
			this.admonition('No se ha podido conectar con el servidor', 'Es posible que haya problemas de conectividad, inténtalo más tarde.', 'fa-exclamation-triangle fa-4x')
			) 
		return
	}
	for (var i=0; i<this.grupos.length; i++){
		var g=this.grupos[i]

		var hijos=[]
		for (var j=0; j<g.miembros.length; j++){
			var m=g.miembros[j]

			// if (m.cd_usuario==app.cache.usuario.cd_usuario)
			// 	continue
			// else 
			if (hijos.length<3){
				if (j>0 && hijos.length && j==g.miembros.length-1)
					hijos.push( creaObjProp('span', {className:'persona sep', texto:' y '}))
				else if (hijos.length) 
					hijos.push(creaObjProp('span', {className:'persona sep', texto:', '}) )

				hijos.push(
					creaObjProp('span', {className:'persona', hijos:[
						creaObjProp('img', {className:'thumb-sm pic avatar pull-left', src:m.picture || './images/avatar_default.png',}),
						creaObjProp('span', {className:'nombre', texto:m.given_name}),
						]})
					)
				}
			else {
				hijos.push(creaObjProp('span', {className:'persona sep', texto:' y '+(g.miembros.length-j)+'+' }) )
				break
				}
			}
		hijos.push(creaObjProp('span', {className:'badge', texto:0}))
		this.domGrupos.append(
			creaObjProp('div', {onclick:function(){ self.verGrupo(jQuery(this).closest('.grupo').data('id') )}, className:'bl grupo row', 'data-id':g.cd_grupo, hijos:[
				creaObjProp('img', {className:'pull-left avatar grupo-img col-xs-3', src:g.picture || './images/avatar_grupo'+(g.cd_grupo%6)+'.png'}),
				creaObjProp('h5',  {className:'grupo-title pull-right col-xs-9', texto:g.ds_grupo}),
				creaObjProp('span',{className:'grupo-personas pull-right col-xs-9', hijos:hijos}),
				]})
			)
		}

	this.domGrupos.append(
		creaObjProp('div', {onclick:function(){self.crearGrupo()}, className:'bl grupo row anhadir', hijos:[
			creaObjProp('i', {className:'pull-left grupo-img col-xs-3 fa fa-plus-circle'}),
			creaObjProp('h5',  {className:'grupo-title pull-right col-xs-9', texto:'Crear nuevo grupo'}),

			]})
		)

	
	}
VistaSocial.prototype.anhadeThrobberAGrupos=function(){
	this.domGrupos.find('.anhadir').empty().addClass('cargando')
	}
////
VistaSocial.prototype.inicio=function(fromHistory){
	if (this.recuperarPosicion){
		this.verGrupo(this.recuperarPosicion, fromHistory)
		this.recuperarPosicion=null
		}
	else if (this.domChatGrupo.is(':visible'))
		this.cerrarGrupo()
	else if (this.domEditarGrupo.is(':visible')){
		this.cerrarEditaGrupo()
		this.cerrarGrupo()
		}

	}
VistaSocial.prototype.verGrupo=function(gid, fromHistory){
	var grupo=buscaFilas(this.grupos, {cd_grupo:gid})[0]
	
	if (this.grupo==null){
		}
	else if (this.grupo.cd_grupo==grupo.cd_grupo && this.domChatGrupo.is(':visible') )
		return

	this.grupo=grupo
	
	this.domChatGrupo.show()
	this.domEditarGrupo.hide()
	this.domHeader.show()
	this.domBody.hide()
	this.domMenu.show()

	this.cambiaHeaderApp(grupo.ds_grupo)
	this.cargarMsgGrupo()

	if (!fromHistory){
		app.pushState('vistaSocial:'+gid)
		app.addToNav({vista:this.id, cd_grupo:gid})
		}

	this.getNuevosMsg()
	}
VistaSocial.prototype.cambiaGrupo=function(gid){
	var grupo=buscaFilas(this.grupos, {cd_grupo:gid})[0]
	this.grupo=grupo

	this.cambiaHeaderApp(grupo.ds_grupo)
	this.cargarMsgGrupo()
	}
VistaSocial.prototype.cerrarGrupo=function(){
	this.restauraHeaderApp()

	this.domChatGrupo.hide()
	this.domEditarGrupo.hide()
	this.domHeader.hide()
	this.domBody.show()

	this.domMenu.hide()
	}
VistaSocial.prototype.cargarMsgGrupo=function(){
	var xc=this.domChatGrupo.find('.chat').empty()
	for (var i=0; i<this.grupo.msg.length; i++){
		var xmsg=this.grupo.msg[i]
		xc.append( this.carga1MsgGrupo(xmsg) )
		}
	this.scrollChat(1)

	if (this.grupo.msg.length==0){
		xc.append( creaObjProp('div', {className:'bocadillo vacio', texto:'Todavía no hay mensajes'} ) )
		}
	}
VistaSocial.prototype.inflateMenu=function(){
	var self=this
	// this.domMenu.show()
	var xul=this.domMenu.find('ul')
	xul.empty().append(creaObjProp('li', {hijos:[
		creaObjProp('a', {texto:'Información sobre el grupo', onclick:function(){self.abrirEditaGrupo()} } )
		]}))
	}
VistaSocial.prototype.scrollChat=function(t){
	if (t==null) t=600
	var bocadillo=this.domChatGrupo.find('.chat')
	this.domChatGrupo.find('.chat').animate({ scrollTop:bocadillo[0].scrollHeight }, t)
	}
VistaSocial.prototype.carga1MsgGrupo=function(xmsg){
	if (xmsg.cd_mensaje){
		var msg=this.domChatGrupo.find('.bocadillo[data-id='+xmsg.cd_mensaje+']')
		if (msg.length) return null
		}

	var yo=app.cache.usuario.cd_usuario

	this.domChatGrupo.find('.chat .bocadillo.vacio').remove()
	var cls=(xmsg.cd_usuario==yo?'msg-mio':'')+
			(xmsg.badge?' has-badge':'')+
			(xmsg.cd_test?' has-test':'')+
			(xmsg.test?' has-test':'')
	
	var f=formato.fechaUHora(xmsg.f)
	var usu=buscaFilas(this.grupo.miembros, {cd_usuario:xmsg.cd_usuario})[0]
	var hijos=[
		creaObjProp('img', {className:'thumb-xs m-r-sm img-circle', src:usu.picture || './images/avatar_default.png'}),
		creaObjProp('small', {className:'fecha text-muted', texto:f}),
		creaObjProp('div', {className:'row texto', hijos:[
			creaObjProp('span', {className:'nombre', texto:usu.nombre}),
			creaObjProp('span', {texto:xmsg.msg || espacioDuro})
			]}),
		]

	var ret=creaObjProp('div', {className:'bocadillo '+cls, 'data-id':xmsg.cd_mensaje, hijos:hijos})
	if (xmsg.cd_test){
		//tenemos los datos?
		var test=buscaFilas(app.cache.testTienda, {cd_test:xmsg.cd_test})[0] || 
				 buscaFilas(app.cache.testLocales, {cd_test:xmsg.cd_test})[0]

		if (test)
			ret.appendChild( this.generaDomTest(test) )
		else {
			ret.appendChild( creaObjProp('div', {className:'row has-test cargando', 'data-id':xmsg.cd_test}) )
			this.getDatosTest(xmsg.cd_test, ret)
			}
		}
	else if (xmsg.test){
		ret.appendChild( this.generaDomTest(xmsg.test) )
		}
	//else  if (xmsg.badge)
	// 	hijos.push(creaObjProp('div', {className:'row has-badge pull-left '+xmsg.badge}) )
	
	return ret
	}
VistaSocial.prototype.getDatosTest=function(cd_test, dom){
	var self=this
	
	this.cache.test=this.cache.test || {} //{'121':test}

	if (cd_test in this.cache.test){
		if (this.cache.test[cd_test]!=null){
			var xt=this.cache.test[cd_test]

			var d=jQuery('.row.has-test[data-id='+cd_test+']')
			if (d.length==0){
				d=jQuery(dom).find('.row.has-test[data-id='+cd_test+']')
				}

			for (var i=0; i<d.length; i++){
				var dl=jQuery(d[i])	
				dl.replaceWith(self.generaDomTest(xt) )
				}
			return
			}
		}
	else
		this.cache.test[cd_test]=null

	jQuery.post(app.config.url, {accion:'getDatosTest', cd_test:cd_test}).success(
		function(data){
			var datos=xeval(data)
			if (datos.retorno==1){
				self.cache.test[cd_test]=datos.test
				
				var d=jQuery('.row.has-test[data-id='+cd_test+']')
				for (var i=0; i<d.length; i++){
					var dl=jQuery(d[i])	
					dl.replaceWith(self.generaDomTest(datos.test) )
					}
				}
			})
	}
VistaSocial.prototype.enviaMsg=function(){
	var self=this

	var t=this.txtEnviarMensaje.val()
	if (t=='') return
	var xmsg={cd_usuario:app.cache.usuario.cd_usuario, msg:t, f:new Date()}

	this.txtEnviarMensaje.val('')
	this.txtEnviarMensaje.focus()
	
	jQuery.post(app.config.url,{accion:'nuevoMsgGrupo',
								cd_grupo:this.grupo.cd_grupo, 
								msg:t,
							}).success(
			function(data){
				var datos=xeval(data)

				if (isPhone()){
					xmsg.cd_mensaje=datos.cd_mensaje
					var xdom=self.carga1MsgGrupo(xmsg)
					self.domChatGrupo.find('.chat').append( xdom )
					self.scrollChat()	
					}
				// var yaExiste=self.domChatGrupo.find('.bocadillo[data-id='+datos.cd_mensaje+']')
				// xmsg.cd_mensaje=datos.cd_mensaje
				// if (yaExiste.length==0){
				// 	var xdom=self.carga1MsgGrupo(xmsg)
				// 	self.domChatGrupo.find('.chat').append( xdom )
				// 	self.scrollChat()
				// 	}
			}
		)
	}
VistaSocial.prototype.enviaTest=function(grupo, test){
	jQuery.post(app.config.url,{accion:'nuevoMsgGrupo',
								cd_grupo:grupo.cd_grupo, 
								msg:null,
								cd_test:test.cd_test
								// test:test.cd_test,
							}).success(
			function(data){
				var datos=xeval(data)
			}
		)
	}
////
VistaSocial.prototype.generaDomTest=function(test){
	var self=this
	this.anchoTarjetas=180

	var tprecio= (test.precio==0? 'GRATIS' : formato.moneda(VistaTienda.prototype.precioMinimo(test.precio), test.moneda))
		
	var infoTienda=[
		creaObjProp('span', {className:'col-xs-6 bl love', hijo:creaObjProp('span', {texto:test.likes}), i:(test.likes>0?'fa-heart':'fa-heart-o') }),
		creaObjProp('span', {className:'col-xs-6  bl precio', texto:tprecio}),
		]

	var cat=buscaFilas(app.cache.categorias, {cd_categoria:test.liscat.split(',')[1]} )[0]

	return creaObjProp('article', {'style.width':this.anchoTarjetas+'px', 
									// onclick:function(){self.navega(this)}, 
									onclick:this.fnNavega(test), 
									id:'test-'+test.cd_test, 
									'data-id':test.cd_test, 
									className:'card test', 
									hijos:[
			creaObjProp('div', {className:'body', i:cat.i || 'fa-share-alt'}),
			creaObjProp('footer', {hijos:[
				//dFecha,
				creaObjProp('div', {className:'frow', hijos:infoTienda}),
				creaObjProp('div', {className:'frow', hijos:[
					creaObjProp('span', {className:'bl nombre ellipsis col-xs-12', texto:(test.anho?test.anho+', ':'')+test.ds_test}) 
					]}),
				]})
			]})
	}
VistaSocial.prototype.fnNavega=function(test){
	var self=this
	console.log('>>'+test.cd_test)
	return function(){self.navega(this)}
	}
VistaSocial.prototype.navega=function(dom){
	var cd_test=jQuery(dom).data('id')
	// app.vistaTienda.show()
	app.vistaTienda.testPreview_montaDiv()
	app.cargaVistaTienda(true, 'vista:tienda:'+cd_test)
	}
////
VistaSocial.prototype.crearGrupo=function(){
	this.grupo={
		cd_grupo:null, 
		ds_grupo:'Sin nombre', 
		picture:'',
		miembros:[app.cache.usuario],
		msg:[],
		esNuevo:true,
		admin:app.cache.usuario.cd_usuario,
		}
	this.abrirEditaGrupo()
	}
VistaSocial.prototype.abrirEditaGrupo=function(){
	var self=this
	
	app.addToNav({vista:self.id, cd_grupo:this.grupo.cd_grupo, abrirEditaGrupo:true})

	this.domBody.hide()
	this.domChatGrupo.hide()
	this.domEditarGrupo.show()

	this.domHeader.show()
	this.domMenu.hide()

	this.cambiaHeaderApp('Información sobre el grupo')
	var btnMemberAdd=this.domEditarGrupo.find('.btnMemberAdd')

	if (app.cache.usuario.cd_usuario==this.grupo.admin)
		this.domEditarGrupo.addClass('admin')
	else
		this.domEditarGrupo.removeClass('admin')

	this.domEditarGrupo.find('.miembros button:not(.btnMemberAdd)').remove()
	for (var i=0; i<this.grupo.miembros.length; i++){
		var m=this.grupo.miembros[i]

		var clsAdmin=''
		if (m.cd_usuario==this.grupo.admin)
			clsAdmin=' admin'

		var d=creaObjProp('button', {'data-id':m.cd_usuario, onclick:function(){self.btnQuitarMiembro(this)}, 
									className:'bl fila member'+clsAdmin, i:'fa-minus-circle pull-right', texto:m.given_name })
		jQuery(d).insertBefore(btnMemberAdd)
		}

	this.domEditarGrupo.find('.txtNombreGrupo').text(this.grupo.ds_grupo)

	this.domEditarGrupo.show()
	}
VistaSocial.prototype.cerrarEditaGrupo=function(){
	var self=this

	this.domBody.hide()
	this.domChatGrupo.show()
	this.domEditarGrupo.hide()

	this.domHeader.show()
	this.domMenu.show()

	this.guardarCambiosGrupo()
	}
VistaSocial.prototype.guardarCambiosGrupo=function(fnCallBack){
	if (this.grupo.esModif){
		var m=[]
		for (var i=0; i<this.grupo.miembros.length; i++){
			m.push( this.grupo.miembros[i].cd_usuario )
			}
		var self=this
		if (this.grupo.esNuevo)
			self.anhadeThrobberAGrupos()
		jQuery.post(app.config.url, {accion:'guardarGrupo', 
									cd_grupo:this.grupo.cd_grupo,
									ds_grupo:this.grupo.ds_grupo,
									miembros:JSON.stringify(m),
									esNuevo:this.grupo.esNuevo?1:0,
									esModif:this.grupo.esModif?1:0,
									esBorrado:this.grupo.esBorrado?1:0,
									
									}).success(
			function(data){
				var datos=xeval(data)
				if (datos.retorno==1){
					self.grupos=datos.grupos
					self.pintaGrupos()

					if (fnCallBack)
						fnCallBack()
					}
				})
		}
	}
VistaSocial.prototype.btnCambiaNombreGrupo=function(){
	if (this.grupo.admin!=app.cache.usuario.cd_usuario)
		return

	var self=this
	if (isPhone()){
		navigator.notification.prompt(
		    'Nombre del grupo',
		    function( result ) { //result.buttonIndex y result.input1
		        switch ( result.buttonIndex ) {
		            case 1:
						self.grupo.esModif=true
						self.grupo.ds_grupo=result.input1
						self.domEditarGrupo.find('.txtNombreGrupo').text(result.input1)
		                break;
		            case 2:
		                break;
		        }
		    },
		    'Información sobre el grupo',     // a title
		    [ "Aceptar", "Cancelar" ], // text of the buttons
		    this.grupo.ds_grupo
			)
		}
	else {
		var s=prompt('Nombre del grupo',this.grupo.ds_grupo)
		self.grupo.esModif=true
		self.grupo.ds_grupo=s
		self.domEditarGrupo.find('.txtNombreGrupo').text(s)
		}
	}
VistaSocial.prototype.btnAnhadirMiembro=function(d){
	if (this.grupo.admin!=app.cache.usuario.cd_usuario)
		return

	var self=this
	navigator.contacts.pickContact(function(contact){
		if (contact.emails==null){
			navigator.notification.alert('No se pueden añadir contactos que no tengan correo electrónico', null, 'Información sobre el grupo')
			return
			}
		var nm={
			cd_usuario:contact.emails[0].value,
			nombre:contact.nickname || contact.displayName || contact.emails[0].value,
			picture:contact.photos[0].value
			}
		self.grupo.miembros.push(nm)

		var d=creaObjProp('button', {'data-id':nm.cd_usuario, onclick:function(){self.btnQuitarMiembro(this)}, className:'bl fila member', i:'fa-minus-circle pull-right', texto:nm.nombre })
		jQuery(d).insertBefore('.btnMemberAdd')

		self.grupo.esModif=true
		})
	}
VistaSocial.prototype.btnQuitarMiembro=function(d){
	if (this.grupo.admin!=app.cache.usuario.cd_usuario)
		return

	var cd_usuario=jQuery(d).data('id')
	var idxBorrar=getIndiceFila(this.grupo.miembros, {cd_usuario:cd_usuario})
	if (idxBorrar>-1){
		this.grupo.miembros.splice(idxBorrar, 1)

		jQuery('.member[data-id="'+cd_usuario+'"]').remove()
		this._hayQueGuardarGrupo=true
		}
	}
VistaSocial.prototype.btnDeleteGroup=function(d){
	if (this.grupo.admin!=app.cache.usuario.cd_usuario)
		return

	var self=this
	navigator.notification.confirm(
	    'Atención: esta acción no se puede deshacer. ¿Confirmas que deseas eliminar el grupo? Se perderá la conversación completa',
	    function( buttonIndex ) { 
	        switch ( buttonIndex ) {
	            case 1:
	            	self.grupo.esModif=true
	            	self.grupo.esBorrado=true
					self.guardarCambiosGrupo(function(){self.cerrarGrupo()})
	                break;
	        	}
	    	},
	    'Confirmar eliminación', 
	    ['Sí, eliminar','Cancelar']

		)
	}
////
VistaSocial.prototype.testPushMensajeGrupo=function(){
	this.pushReceived('mensajeGrupo', {cd_grupo:3, cd_usuario:'rotoxl@gmail.com', badge:null, cd_test:null, msg:'prueba push', f:new Date()})
	}
////////////////////////////////////////////////
function VistaEstadisticas(desdeHistorial){
	this.id='vistaEstadisticas'

	// this.domMenu=jQuery('.barra.vista .btn-menu')
	if (!desdeHistorial) 
		app.pushState(this.id)
	}
VistaEstadisticas.prototype=new Vista
VistaEstadisticas.prototype.getHeader=function(){
	return null //creaObjProp('header', {className:'vista-header', 'style.display':'none'})
	}
VistaEstadisticas.prototype.getBody=function(){
	var todos=app.getRespuestasLocales() //this.testData()
	app.cache.respuestasLocales=buscaFilas(todos, {finalizado:true})

	var paneles=[]
	if (app.cache.respuestasLocales.length>0){
		var self=this
		
		this.cats=app.catsConRespuestasLocales()
		this.resps=buscaFilas( app.cache.respuestasLocales, {finalizado:true} )

		this.resps.sort(function(a,b){return new Date(a.fecha)>new Date(b.fecha)})

		var _idx=0
		this.resps.map(function(el){el._idx=_idx; _idx++})

		for (var i=0; i<this.cats.length; i++){
			var cat=this.cats[i]
			if (cat.cd_categoria<0) continue

			var respsCat=buscaFilas(this.resps, {_contains_liscat:','+cat.cd_categoria+','})
			this.cats[i].resps=respsCat

			var fIni=formato.fechaDDMMYYYY(respsCat[0].fecha)
			var fFin=formato.fechaDDMMYYYY(respsCat[respsCat.length-1].fecha)
			if (fFin==formato.fechaDDMMYYYY(new Date()))
				fFin='hoy'

			var domgra1=creaObjProp('div', {className:'bl row-body gra gra1'})

			paneles.push(
				creaObjProp('div', {className:'row panelCat', 'data-id':cat.cd_categoria, hijos:[
					creaObjProp('h3', {className:'row-header m-b-none', texto:cat.ds_categoria}),
					creaObjProp('small', {texto:respsCat.length+' tests realizados entre '+fIni+' y '+fFin}),
					this.creaPanel('Aciertos y fallos por test', domgra1),
					]})
				)
			this.fnPintaGraficaEstadisticasPorExamen(domgra1, i)
			}
		}
	else {
		paneles.push(
			this.admonition('Sin datos', 'Hasta que no termines algún test no habrá estadísticas', 'fa-ban fa-4x')
			)
		}

	return creaObjProp('div', {className:'vista-body flowable', hijos:paneles})
	}
VistaEstadisticas.prototype.backButton=function(){
	}
VistaEstadisticas.prototype.creaPanel=function(tit, cont){
	return creaObjProp('section', {className:'panel panel-default', hijos:[
					creaObjProp('header', {className:'panel-heading', texto:tit}),
					creaObjProp('div', {className:'panel-body', hijo:cont}),
					]})
	}
VistaEstadisticas.prototype.fnPintaGraficaEstadisticasPorExamen=function(panel, i){
	var self=this
	setTimeout( function(){self.pintaGraficaEstadisticasPorExamen(panel)}, 200*i)
	}
VistaEstadisticas.prototype.pintaGraficaEstadisticasPorExamen=function(panel){
	var self=this

	var catID=jQuery(panel).closest('.panelCat').data('id')

	var col=buscaFilas(this.cats, {cd_categoria:catID})[0].resps
	var maxPuntos=8
	var p0=Math.max(col.length-maxPuntos, 0)

	var aciertos=[], fallos=[], nc=[]
	for (var i=p0; i<col.length; i++){
		var r=col[i]

		aciertos.push([i, r.aciertos])
		fallos.push([i, r.fallos])
		nc.push([i, r.nc])
		}

	var gridOptions={ 
		series: {
        	lines: {
                show: true,
                lineWidth: 2,
                fill: true,
                fillColor: { colors: [{opacity: 0.3}, {opacity: 0.1}] }
            	},
            points: {radius: 5, show: true},
            grow: {active: true, steps: 5},
            shadowSize: 2
        	},
        grid: {
            hoverable: true,
            // clickable: true,
            tickColor: "#f0f0f0",
            borderWidth: 0
        	},
        colors: ["#25313e", "#fb6b5b", "#dddddd",],
        xaxis: {ticks: 5, show:false},
        yaxis: {ticks: 5},
        tooltip: true,
        tooltipOpts: {
          	content: function(label, xval, yval, flotItem){
          		return self.graphTooltip(catID, label, xval, yval, flotItem)
          		},
          	defaultTheme: false,
          	shifts: {x: 0,y: 20}
        	}
      	}

  	jQuery.plot(panel, 
  				[{data: aciertos,label: ' % Aciertos'}, {data: fallos, label: ' % Fallos'}, {data: nc, label: ' % No contestadas'}],
      			gridOptions)
	}
VistaEstadisticas.prototype.graphTooltip=function(catID, label, xval, yval, flotItem){
	var resps=buscaFilas(this.cats, {cd_categoria:catID})[0].resps
	var r=resps[xval]

	return  'Nota: '+r.nota+
			'<small class="f">'+formato.fechaDDMMYYYY(r.fecha)+'</small>'+
			'<br/>'+
			//+'(idx '+xval+')'+
			'<small>'+r.aciertos+' aciertos, '+
			r.fallos+' fallos y '+
			r.nc+' nc </small>'
	}
VistaEstadisticas.prototype.rnd=function(n, m){
	return Math.floor((Math.random() * m) + n)
	}
VistaEstadisticas.prototype.testData=function(){
	var numpreg=100, fr=.333
	var ret=[]

	for (var i=0; i<35; i++){
		// var a=i, f=0, nc=0
		var a=this.rnd(1,numpreg)
		var f=this.rnd(0, numpreg-a)
		var nc=numpreg-a-f

		var tn= (a-(f*fr))/numpreg
		if (tn<0) tn=0
		var nota=Math.floor(tn*100)/10

		var el={
				fecha: new Date(new Date()-3600*1000*24*this.rnd(0,10)),
				aciertos:a,
				fallos:f,
				nc:nc,
				nota:nota,
				liscat:','+([201,250,104][this.rnd(0,3)])+',',
				finalizado:true,
				}
		// jQuery.extend(el, { aciertos:i, fallos:80-i, nc:5, nota:0, 
		// 					fecha:new Date(new Date().getTime()+3600*1000*24*(i-30)),
		// 					liscat:',201,'})

		ret.push(el)
		}
	return ret
	}
VistaEstadisticas.prototype.toggleMenuGlobal=function(visible){
	var menu=jQuery('.barra.global .btn-menu')	
	
	if (visible)
		menu.fadeIn()
	else
		menu.fadeOut()
	}
////////////////////////////////////////////////
function VistaAjustes(desdeHistorial){
	this.id='vistaAjustes'

	this.txtEnviarMensaje=null
	this.domMenu=jQuery('.barra.vista .btn-menu')

	if (!desdeHistorial) 
		app.pushState(this.id)

	}
VistaAjustes.prototype=new Vista
VistaAjustes.prototype.getHeader=function(){
	return null //creaObjProp('header', {className:'vista-header', 'style.display':'none'})
	}
VistaAjustes.prototype.getBody=function(){
	var self=this
	var paneles=[
		this.nfila('Códigos promocionales',
					'Toca aquí para introducir un nuevo código', 
					'txtCodPromo',
					null,
					function(){self.btnIntroducirCodigo()}),
		this.nfila(null, 
					'Información sobre promociones', 
					null, 
					'fa-external-link',
					function(){self.btnMasInfoPromociones()})
		]
	return creaObjProp('div', {className:'vista-body container config', hijos:paneles})
	}
VistaAjustes.prototype.nfila=function(literal, valor, id, i, onclick){
	var title=literal? creaObjProp('small', {className:'bl texto-sep', texto:literal}): 
						creaObjProp('span', {className:'espacio'})

	return creaObjProp('div', {className:'row '+(literal?'':'sin-titulo'), onclick:onclick, hijos:[
				title,
				creaObjProp('span', {className:(i!=null?'col-xs-10':'col-xs-12')+' valor ellipsis '+id, texto:valor}),
				creaObjProp('i', {className:'col-xs-1 pull-right fa '+i})
	 		]})
	}
VistaAjustes.prototype.btnIntroducirCodigo=function(){
	var self=this

	// if (isPhone()){
		navigator.notification.prompt(
		    'Código promocional',
		    function( result ) { //result.buttonIndex y result.input1
		        switch ( result.buttonIndex ) {
		            case 1:
		            	jQuery.post(app.config.url,{accion:'compruebaCodigoPromocional', 
		            								cod:result.input1 }).success(
							function(data){
								var datos=xeval(data)
								if (datos.retorno==1){
									var resp=datos.resp, msg

									if (resp.promocioninexistente || resp.usuyaenpromocion || resp.agotada || resp.caducada){
										if (resp.promocioninexistente=='1')
											msg='Código incorrecto'
										else if (resp.usuyaenpromocion=='1')
											msg='Ya te has beneficiado de esta promoción'
										else if (resp.agotada=='1')
											msg='Lo lamentamos, esta promoción ya está agotada'
										else if (resp.caducada=='1')
											msg='Lo lamentamos, esta promoción ya ha terminado'
										}
									else {
										msg=resp.resp_promocion
										}
									self.domBody.find('#txtCodPromo').text(result.input1)
									navigator.notification.alert(msg, null, 'Código promocional')
									}
	            				
								})
							
		                break;
		            case 2:
		                break;
		        }
		    },
		    'Octopus',     // a title
		    [ "Aceptar", "Cancelar" ], // text of the buttons
		    null //valor por defecto
			)
	// 	}
	// else {
		
	// 	}
	}
VistaAjustes.prototype.btnMasInfoPromociones=function(){
	window.open('http://www.octopusapp.es/web/faq.html#convenios', '_system')
	}
VistaAjustes.prototype.show=function(desdeHistorial){
	Vista.prototype.show.call(this, desdeHistorial)
	this.domMenu.hide()
	}
VistaAjustes.prototype.tareasPostCarga=function(){
	Vista.prototype.tareasPostCarga.call(this)
	this.domMenu.hide()
	}
VistaAjustes.prototype.toggleMenuGlobal=function(visible, inmediate){
	var menu=jQuery('.barra.global .btn-menu')		
	menu.fadeOut()
	}
////////////////////////////////////////////////
Controlador.prototype.cargaVistaMigraTest=function(desdeHistorial){
	new VistaMigraTest(desdeHistorial).toDOM()
	this.cierraNavDrawer()
	}
function VistaMigraTest(desdeHistorial){
	this.id='vistaMigraTest'
	if (!desdeHistorial) 
		app.pushState(this.id)
	}
VistaMigraTest.prototype=new Vista
VistaMigraTest.prototype.getHeader=function(){
	var self=this

	this.ulCategorias=jQuery( 
						creaObjProp('ul', {id:'listatests', className:'btn3_1 dropdown-menu animated fadeInRight', role:'menu', hijos:[
							creaObjProp('span', {className:'arrow top'}),
							]})
						)

	return creaObjProp('header', {className:'btn-primary vista-header btn-dark' , hijos:[
			creaObjProp('div', {className:'btn-group', hijos:[

				creaObjProp('div', {className:'btn-group', hijos:[
					creaObjProp('button', {className:'btn btn-dark dropdown-toggle', 'data-toggle':'dropdown', hijos:[
						creaT(' Lista de categorias '),
						creaObjProp('b', {className:'caret'})
						]}), 
					this.ulCategorias[0],
					]}),

			]}),
			
		]})
	}
VistaMigraTest.prototype.getBody=function(){
	this.btn=jQuery( creaObjProp('button', {texto:'Verifica test y sube', 
									i:'fa-cloud-upload', 
									className:'btn btn-default btn-lg',  
									'style.width':'100%',
									onclick:function(){app.vistaActiva.uploadTest()} }) 
				)
	this.txtDatos= jQuery( creaObjProp('textarea', {'style.width':'100%', 'style.height':'150px', className:'bl', id:'txtDatos'}) )
	this.txtPreguntas= jQuery( creaObjProp('textarea', {'style.width':'100%', 'style.height':'200px', className:'bl', id:'txtPreguntas'}) )
	this.spError=jQuery( creaObjProp('span', {className:'msgError label label-danger'}) )

	return creaObjProp('div', {className:'vista-body', hijos:[
			creaObjProp('span', 	{className:'bl', texto:'JSON datos generales'}),
			this.txtDatos[0],
			
			creaObjProp('span', 	{className:'bl', texto:'JSON preguntas'}),
			this.txtPreguntas[0],
			
			this.btn[0],
			this.spError[0]
		]})
	}
VistaMigraTest.prototype.tareasPostCarga=function(){
	var plantillaDG={
		ds_test:'Identificación del examen',
		organismo:'Organismo (por ej, "Administración General del Estado")',
		numpreguntas:100,
		minutos:100,
		fallosrestan:.5,
		precio:0, 
		liscat:'201',
		}
	var plantillaPreguntas={
		cd_pregunta:0,
		pregunta: "Texto pregunta",
		cd_respuestacorrecta: 0,

		respuesta0:"Respuesta1",
		respuesta1:"Respuesta2",
		respuesta2:"Respuesta3",
		respuesta3:"Respuesta4",
		respuesta4:"Respuesta5",

		notas:'Unidad u otros datos'
		}

	var plantillaDG='{'+vbCrLf+
		'  "ds_test": "Identificaci\u00f3n del examen",'+vbCrLf+
		
		'  "anho": "2018",'+vbCrLf+
		'  "grupo": "Grupo X",'+vbCrLf+

		'  "organismo": "Organismo",'+vbCrLf+
		'  "numpreguntas": 100,'+vbCrLf+
		'  "minutos": 100,'+vbCrLf+
		'  "fallosrestan": 0.5,'+vbCrLf+
		'  "precio": 0,'+vbCrLf+
		'  "liscat": "201",'+vbCrLf+
		
		'  "archivos": "2014/nombreArchivo1.pdf,"'+vbCrLf+
		'}'
	var plantillaPreguntas='{'+vbCrLf+
		'  "cd_pregunta": 0,'+vbCrLf+
		'  "pregunta": "Texto pregunta",'+vbCrLf+
		'  "cd_respuestacorrecta": 0,'+vbCrLf+
		'  "respuesta0": "Respuesta1",'+vbCrLf+
		'  "respuesta1": "Respuesta2",'+vbCrLf+
		'  "respuesta2": "Respuesta3",'+vbCrLf+
		'  "respuesta3": "Respuesta4",'+vbCrLf+
		'  "respuesta4": "Respuesta5",'+vbCrLf+
		'  "notas": "Unidad u otros datos"'+vbCrLf+
		'}'

	this.txtDatos.val( plantillaDG )
	this.txtPreguntas.val( '['+plantillaPreguntas+']' )

	this.cargaListaCategorias()
	}
VistaMigraTest.prototype.toggleMenuGlobal=function(visible, inmediate){
	var menu=jQuery('.barra.global .btn-menu')		
	menu.fadeOut()
	}
VistaMigraTest.prototype.cargaListaCategorias=function(){
	var self=this
	
	var xl=[]
	// var fn=function(){
	// 	var idcat=jQuery(this).data('id')
	// 	self.navegaCat(idcat) 
	// 	}

	for (var i=0; i<app.cache.categorias.length; i++){
		var cat=app.cache.categorias[i]

		// if (cat.cd_categoriapadre==null)// if (cat.listarcomocategoria==1)
		if (cat.cd_categoria<0) continue

		xl.push( creaObjProp('li', {hijo:creaObjProp('a', {texto:cat.cd_categoria+'-'+cat.ds_categoria})} ) )
		}
	this.ulCategorias.empty().append(xl)
	}
VistaMigraTest.prototype.quitaAcutes=function(s){
	var trans={
		'&iquest;':'¿',

		'&aacute;':'á','&Aacute;':'Á',
		'&eacute;':'é','&Eacute;':'É',
		'&iacute;':'í','&Iacute;':'Í',
		'&oacute;':'ó','&Oacute;':'Ó',
		'&uacute;':'ú','&Uacute;':'Ú',

		'&ntilde;':'ñ',

		'&lsquo;':'"', '&rsquo;':'"',
		'&ldquo;':'"', '&rdquo;':'"',
		'&laquo;':'"', '&raquo;':'"',
		'&quot;':'"',

		'&gt;':'"', '&lt;':'"',
		}
	var claves=Object.keys(trans)
	for (var i=0; i<claves.length; i++){
		var k=claves[i], v=trans[k]
		s=s.replace(new RegExp(k, 'g'), v)
		}

	var esta=s.indexOf(')  ')
	if (esta>-1 && esta<=6 )
		s=s.substring(esta+3)
	return s
	}
VistaMigraTest.prototype.xeval=function(s){
	var s=s.replace(/(\r\n|\n|\r)/gm,"")
	return JSON.parse(s)
	}
VistaMigraTest.prototype.montaTest=function(){
	this.spError.text('')

	var test=this.xeval( this.txtDatos.val() )
	var preguntas=this.xeval( this.txtPreguntas.val() )
	test.preguntas=preguntas

	this.assert(preguntas instanceof Array, 'No viene un array de preguntas')
	this.assert(preguntas.length==test.numpreguntas, 'El número de preguntas indicado en datos generales ('+test.numpreguntas+
												') no coincide con la cantidad de preguntas introducida ('+preguntas.length+')')
	return test
	}
VistaMigraTest.prototype.assert=function(condition, message){
    if (!condition) {
        message = message || "Assertion failed";
        // if (typeof Error !== "undefined") {
        //     throw new Error(message);
        // 	}
        // throw message; // Fallback
        this.spError.text(message)
        throw message;
    	}
	}
VistaMigraTest.prototype.uploadTest=function(){
	var test=this.montaTest()
	
	jQuery.post(app.config.url, {accion:'creaBorradorTest', 
								datos:JSON.stringify(test) }).success(
	function(data){
		var datos=xeval(data)
		if (datos.retorno==1){
			alert('Test '+datos.cd_test+' creado')
			}
		else
			console.error(data)
		})

	}
