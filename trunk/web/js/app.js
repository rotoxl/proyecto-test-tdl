"use strict"
jQuery.noConflict()

var app, espacioDuro='\xA0', espacioDuro2='\xA0\xA0'
function isPhone(){
	if (document.URL.indexOf("http://") === -1 && 
			document.URL.indexOf("https://") === -1) {
					return true
				}
	else
			return false 
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
				icon_stack.className='fa-stack icon-stack'

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
	return ('00'+v).substr(-lenTotal, lenTotal)
	}
function buscaFilas(filas, dicBuscado){
	//devuelve el array de filas que cumplen los requisitos
	if (filas==null) return []
	var fn=function(element, index){
		for (var k in dicBuscado){
			if (k.indexOf('_contains_')==0){
				var kt=k.substr( '_contains_'.length )

				var temp=element[kt].split(',')
				if (temp.indexOf(dicBuscado[k])==-1)
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
function getIndiceFila(filas, dicBuscado){
	if (filas==null) return -1
	var _idx=0
	filas.map(function(el){el._idx=_idx; _idx++})
	var filas=buscaFilas(filas, dicBuscado)

	if (filas.length==0) 
		return -1

	var idxBorrar=filas[0]._idx
	return idxBorrar
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

	this.cache={}
	this.config={}
	this.init()

	if ( isPhone() )
		this.config.servidor='http://rotoxl.alwaysdata.net/'
	else
		this.config.servidor='./'
	this.config.url=this.config.servidor+'index_r.php'

	//////////
	var sr=document.location.search+''
	if (sr.indexOf('code=')>-1){//web: se produce el error por Access-Control-Allow-Origin, tenemos que sacar el token en el servidor
		var code=sr.substring('?code='.length).split('&')[0]
		jQuery.post(app.config.url, {accion:'getOAuth-token', code:code})
			.success(function(data){
				console.log(data)
			}) 
		}
	else if (sr.indexOf('?token=')==0){//teléfonos: no se produce el error por Access-Control-Allow-Origin
		this.cache.token=sr.substring('?token='.length).split('&')[0]
		var refresh_token=sr.substring( sr.indexOf('refresh_token=')+14 ).split('&')[0]
		if (refresh_token.length>10)
			save('tapp37_refresh_token', refresh_token)

		if (this.cache.token=='666'){
			this.cache.usuario={//id: '118066386467974893999',
								cd_usuario: 'rotoxl@gmail.com',
								email:'rotoxl@gmail.com',
								verified_email :true,
								// name: 'Ernesto Molina Carrón',
								given_name: 'Ernesto',
								family_name: 'Molina Carrón',
								// link: 'https://plus.google.com/118066386467974893999,
								picture: 'https://lh6.googleusercontent.com/-yLoUCNmu2qc/AAAAAAAAAAI/AAAAAAAAE3s/d8OsxGzNbeo/photo.jpg',
								// gender: 'male'
								} 
			this.actualizaDomUsuario()
			}
		else {
			googleMobileApi.getDataProfile( this.cache.token, 
											function(data){self.userDataReceived(data)},
											function(error){
												console.error( JSON.stringify(error) )
											})
			}
		}
	else if (sr.indexOf('?meacuerdo')==0){
		var s=get('tapp37_userdata')
		this.cache.usuario=JSON.parse(s)
		this.actualizaDomUsuario()
		}
	else {
		localStorage.removeItem('tapp37_userdata')
		document.location='index.html'
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
			});
	
	document.addEventListener('backbutton', function(){app.backButton()}, false)
	
	this.setCategorias(get('tapp37_categorias'))

	var self=this
	jQuery(window).bind('popstate', function(){self.backButton()} )
	}
Controlador.prototype.setCategorias=function(lis){
	this.cache.categorias=lis
	
	if (! (this.cache.categorias instanceof Array))
		this.cache.categorias=[{}]
	

	// if (this.entornoLocal){
	// 	app.cache.categorias[0].ds_categoria='Últimos realizados o descargados'
	// 	}
	// else
	this.cache.categorias[0].ds_categoria='Nuevos y actualizados'
	this.cache.categorias[0].i='fa-clock-o'


	save('tapp37_categorias', lis)
	}
Controlador.prototype.userDataReceived=function(data){
	data.token=this.cache.token
	
	this.cache.usuario=data
	this.cache.usuario.cd_usuario=data.email

	save('tapp37_userdata', JSON.stringify(data))
	this.actualizaDomUsuario()
	}
Controlador.prototype.actualizaDomUsuario=function(){
	jQuery('.avatar .pic img').attr('src', this.cache.usuario.picture)
	jQuery('.avatar .nombre').text(this.cache.usuario.given_name)

	if (!isPhone() && ['rotoxl@gmail.com', 'emolina@tax-i.co', 'carlos.amc@gmail.com'].indexOf(this.cache.usuario.cd_usuario)>-1 )
		jQuery('.liVistaUploadTest').removeClass('hidden')
	}
Controlador.prototype.logout=function(){
	googleMobileApi.disconnectUser(app.cache.token)
	
	localStorage.removeItem('tapp37_userdata')
	localStorage.removeItem('tapp37_refresh_token')
	localStorage.removeItem('tapp37_yanoshavisitado')
	
	document.location='index.html'
	}
/////
Controlador.prototype.loginTienda=function(){
	if (this._loginTiendaOK==true)
		return

	var self=this
	var desfaseUTC=new Date().getTimezoneOffset()/-60
    this.cache.usuario.tz=(desfaseUTC<0?'-':'+')+lpad(desfaseUTC, '0', 2)+':00'

	jQuery.get(this.config.servidor+'login_r.php', {accion:'login', tz:this.cache.usuario.tz, cd_usuario:this.cache.usuario.cd_usuario})
		.success(function(data){
			self._loginTiendaOK=true
		})
	}
/////
Controlador.prototype.muestraNodoEnNavDrawer=function(idLi){
	var arbol=jQuery('.aside-md .nav-primary')
	arbol.find('li.active').removeClass('.active')

	arbol.find('.'+idLi).addClass('active')
	
	var nodoContinuarTest=arbol.find('.continuarTest')
	nodoContinuarTest.toggleClass('hidden', idLi!='continuarTest')
	}
Controlador.prototype.abreNavDrawer=function(){
	jQuery('aside.aside-md').addClass('nav-off-screen')
	}
Controlador.prototype.cierraNavDrawer=function(){
	jQuery('#main_container aside.nav-off-screen').removeClass('nav-off-screen')
	jQuery('.btn-navdrawer.active').removeClass('active')
	}
//
Controlador.prototype.continuarTest=function(desdeHistorial){
	this.lanzaTest( VistaTest.prototype.testData() )
	this.cierraNavDrawer()
	}
Controlador.prototype.lanzaTest=function(test, resp, vistaOrigen){
	var nv=new VistaTest(test, resp)
	nv.returnTo=vistaOrigen
	nv.toDOM()

	}
Controlador.prototype.cargaVistaInicio=function(){
	var hash=(document.location.hash+'').substring(1)
	if (hash=='vistaMigraTest')
		this.cargaVistaMigraTest(true)
	else if (hash=='vistaTienda' || hash=='vistaTienda:dispositivo' || hash=='vistaTienda:tienda')
		this.cargaVistaTienda(true, hash=='vistaTienda:dispositivo')
	else if (hash=='vistaTest'){
		this.cargaVistaTienda(true, true)
		// this.continuarTest(true)
		}
	// else if (hash=='vistaSocial')
		// this.cargaVistaSocial()
	// else if (hash=='vistaEstadisticas')
	//  this.cargaVistaEstadisticas()

	else {
		// if (get('tapp37_tourRealizado')!=1)
		// 	this.lanzaTourAplicacion()

		this.cargaVistaTienda(false, true)//ojo, sólo a local
		}

	}
Controlador.prototype.cargaVistaTienda=function(desdeHistorial, entornoLocal){
	var vt=new VistaTienda(desdeHistorial, entornoLocal)
	vt.toDOM()
	this.cierraNavDrawer()
	}
Controlador.prototype.cargaVistaSocial=function(desdeHistorial){}
Controlador.prototype.cargaVistaEstadisticas=function(desdeHistorial){}
Controlador.prototype.pushState=function(id){
	window.history.pushState({vista:id}, id, '#'+id)
	}
Controlador.prototype.backButton=function(){
	if (this.vistaActiva)
		this.vistaActiva.backButton()
	}
////////////////////////////////////////////////

//Todas las vistas tienen un vista-header y un vista-body
function Vista(){
	if (this.id==null) return
	if (this.tipos.indexOf(this.id)==-1 )
		console.error('Tipo de vista desconocido: hay que darlo de alta en Vista.prototype.tipos')

	}
Vista.prototype.calculaAnchoTarjetas=function(){
	var w=jQuery('#content').width() 
	var anchoMinCards=160
	var numtarjetas=Math.floor( (w-10)/anchoMinCards)
	return (w/numtarjetas)-10
	}
Vista.prototype.tipos={
	vistaTest:'vistaTest', 
	vistaTienda:'vistaTienda', 
	vistaSocial:'vistaSocial', 
	vistaEstadisticas:'vistaEstadisticas', 
	vistaMigraTest:'vistaMigraTest'
	}
Vista.prototype.toDOM=function(){
	var xd=jQuery('#content')
	if (app) app.vistaActiva=this

	this.domHeader=jQuery(this.getHeader())
	this.domBody=jQuery(this.getBody())
	
	xd.empty()
		.append(this.domHeader)
		.append(this.domBody)
		.removeClass( Object.keys(this.tipos).join(' '))
		.addClass('vista '+this.id)

	this.dom=xd
	this.resize()
	this.tareasPostCarga()
	}
Vista.prototype.getHeader=function(){}
Vista.prototype.getBody=function(){}
Vista.prototype.resize=function(){
	jQuery('#content').height( jQuery(document).innerHeight()- jQuery('#navigation_bar').innerHeight() )

	this.hVista=jQuery('#content').height()//-jQuery('#navigation_bar').innerHeight()
	this.domBody.height( this.hVista-this.domHeader.outerHeight() )
	}
Vista.prototype.tareasPostCarga=function(){}
Vista.prototype.backButton=function(){}
Vista.prototype.cerrar=function(){}
Vista.prototype.cambiaHeaderApp=function(titulo){
	var nb=jQuery('#navigation_bar')
	nb.find('.barra.global').hide()
	nb.find('.barra.vista').show()
	nb.find('.barra.vista .navbar-brand').text(titulo)
	}
Vista.prototype.restauraHeaderApp=function(){
	var nb=jQuery('#navigation_bar')
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
		var cat=buscaFilas(app.cache.categorias, {cd_categoria:t[i] } )[0]
		if (cat) 
			ret=ret+', '+cat.ds_categoria
		}
	return ret.substring(2)
	}
////////////////////////////////////////////////

function VistaPantallaCompleta(){}
VistaPantallaCompleta.prototype.title='Nombre de la vista'
VistaPantallaCompleta.prototype=new Vista
VistaPantallaCompleta.prototype.toDOM=function(){
	Vista.prototype.toDOM.call(this)
	this.cambiaHeaderApp(this.title)
	}
VistaPantallaCompleta.prototype.cerrar=function(){
	this.restauraHeaderApp()
	}
//////////
function VistaTest(test, respuestas, desdeHistorial){
	if (test==null) return
	VistaPantallaCompleta.call(this)

	this.test=test
	this.id='vistaTest'
	this.title=test.ds_test 

	this.mapaInicializado=false

	this.preguntas=this.test.preguntas
	this.respuestas=respuestas? respuestas.respuestas: this.generaObjRespuestas()

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

	if (!desdeHistorial) 
		app.pushState(this.id)
	}
VistaTest.prototype=new VistaPantallaCompleta
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
						creaObjProp('ul', {id:'mapatest', className:'btn2_1 dropdown-menu XXanimated XXfadeInRight btn-primary', role:'menu', hijos:[
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
	this.initMapa()
	this.iniciaTiempo()

	this.initSwype(xpregActiva)
	jQuery(this.dom).addClass('noselect')

	//ojo, la 0 es la portada y la última la contraportada
	var xpregActiva=(this.examen.preguntaActiva) || 1
	// this.goToPage(xpregActiva)
	}
//////
VistaTest.prototype.initSwype=function(xpregActiva){
	var self=this

	// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var gallery=new SwipeView('#swypeWrapper', {numberOfPages:this.preguntas.length, loop:false });

	// // Load initial data
	for (var i=0; i<3; i++) {
		// var page = i==0 ? this.preguntas.length-1 : i-1;
		var page = i==0 ? 0 : i-1;
		this.creaDiapo(page, gallery.masterPages[i])
		}

	gallery.onFlip(function () {
		var el,
			upcoming,
			i;

		for (i=0; i<3; i++) {
			upcoming = gallery.masterPages[i].dataset.upcomingPageIndex;

			if (upcoming != gallery.masterPages[i].dataset.pageIndex) {
				self.creaDiapo(upcoming, gallery.masterPages[ i ])
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
VistaTest.prototype.creaDiapo=function(i, cont){
	if (i==0 || i==this.preguntas.length-1){
		jQuery(cont).empty().addClass('portada '+(i==0?'inicio':'fin')).append( [
			creaObjProp('span', {texto:i==0?'Inicio':'Fin'}),
			creaObjProp('div', {className:'visual'})
			])

		console.info('> crea portada, cont '+cont.id)
		}
	else {
		var preg=this.preguntas[i] //la 0 es la portada
		var resp=this.respuestas[i]

		jQuery(cont).removeClass('portada inicio fin').empty()
			.append (creaObjProp('div', {'style.height':this.hFija/2, 
										className:'pregunta noselect', 
										hijo:this.generaDomPreguntas(preg, resp)}) )
			.append (creaObjProp('footer', {'style.height':this.hFija/2, 
											className:'footer respuestas noselect', 
											hijo:this.generaDomRespuestas(preg, resp)}) )
			.attr('data-cd-pregunta', i)

			console.info('> crea diapo '+i+', cont '+cont.id)

		}
	}
VistaTest.prototype.generaDomPreguntas=function(preg, resp){
	var self=this
	return creaObjProp('table',{hijos:[
				creaObjProp('tr', {hijos:[
					creaObjProp('td', {className:'clave', onclick:function(){self.toggleEstrella(this)}, i:(resp.estrella?'fa-star':'fa fa-star-o')}),
					creaObjProp('td', {className:'valor', texto:(preg.i+1)+'-'+preg.pregunta})
					]}) 
				]})
	}
VistaTest.prototype.generaDomRespuestas=function(preg, resp){
	var self=this
	var xr=[], letras='ABCDE', estilos=['bg-danger', 'bg-warning', 'bg-success', 'bg-info', 'bg-primary']
	for (var i=0; i<preg.respuestas.length; i++){
		var opcion=preg.respuestas[i]
		if (opcion.texto==null || opcion.texto=='') 
			continue
		xr.push( creaObjProp('tr', {onclick:function(){self.marcaResp(this)}, hijos:[
			creaObjProp('td', {className:'clave '+ estilos[i], texto:letras.substr(i,1) }),
			creaObjProp('td', {className:'valor', texto:opcion.texto }),
			]}))
		}
	if (resp.respuestaUsuario!=null){
		jQuery(xr).addClass('atenuada')
		jQuery(xr[resp.respuestaUsuario]).removeClass('atenuada').addClass('active')
		}
	return creaObjProp('table', {hijos:xr})
	}
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

	var preg=this.respuestas
	// var numfilas=Math.floor(this.preguntas.length/elPorFila)
	var col=0,tr=creaObjProp('tr'), trs=[], ta=creaObjProp('table')
	
	//no reflejamos portada ni contraportada
	for (var i=1; i<preg.length-1; i++){
		if (col>=elPorFila){
			ta.appendChild(tr)
			tr=creaObjProp('tr')
			col=0
			}
		var pra=preg[i]

		var hijo
		if (pra.estrella){
			hijo=this.generaDomEstrella(i)
		}
		else 
			hijo=creaObjProp('span', {texto:i})

		var self=this
		tr.appendChild( creaObjProp('td', { className:(pra.respuestaUsuario!=null? 'contestada':''), 
																				id:'mapa_preg'+pra.i, 
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
	this.guardaEstadoExamen(true)
	this.frmdom.modal('hide')
	app.cargaVistaInicio()
	}
VistaTest.prototype.guardaEstadoExamen=function(finalizado){
	if (finalizado==undefined)
		finalizado=false
	
	var respuestas=this.quitaPortadas(this.respuestas)

	this.respuestasTestLocales=get('tapp37_listaTestRespuestas')//{cd_test:1, respuestas:{}}
	this.respuestasTestLocales=this.respuestasTestLocales || []
	var idx=getIndiceFila(this.respuestasTestLocales, {cd_test:this.test.cd_test}), resp

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
		nel.aciertos= corregido.aciertos
		nel.fallos= corregido.fallos
		nel.nc= corregido.nc
		nel.nota= corregido.nota
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
		this.respuestasTestLocales.push(nel)
	else 
		this.respuestasTestLocales[idx]=nel
		
	save('tapp37_listaTestRespuestas', this.respuestasTestLocales)
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
			creaObjProp('button', {onclick:function(){self.muestraFormPausa('fin')}, className:'btn btn-sm btn-dark transparent', texto:'Finalizar'}),
			creaObjProp('button', {onclick:function(){self.pausaTiempo(); self.frmdom.modal('hide')}, className:'btn btn-sm btn-success', texto:'Continuar'}),
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

			creaObjProp('p', {className:'respondidas', texto:stats.respondidas+' de '+stats.preguntas+' preguntas respondidas ('+stats.minutosPorcentaje+'%)', i:'fa-pie-chart fa-fw'}),
			creaObjProp('p', {className:'tiempo', texto:stats.minutosConsumidos+' de '+stats.minutosTotal+' minutos consumidos ('+stats.minutosPorcentaje+'%)', i:'fa-clock-o fa-fw'}),
			creaObjProp('p', {className:'estrellas', texto:stats.estrellas+' preguntas marcadas', i:'fa-star-o fa-fw'}),
			])

		frmfooter.empty().append([
			creaObjProp('button', {onclick:function(){self.finExamen()}, className:'btn btn-sm btn-dark transparent', texto:'Cerrar test'}),
			//creaObjProp('button', {onclick:function(){self.repasarExamen(); self.frmdom.modal('hide')}, className:'btn btn-sm btn-success', texto:'Repasar'}),
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

	this.frmdom.modal({backdrop:'static', keyboard:false})
	}
VistaTest.prototype.quitaPortadas=function(arr){
	if (arr[0]==null)
	 	return arr.slice(1, this.preguntas.length-1)
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
VistaTest.prototype.backButton=function(){
	var mapa=jQuery('ul#mapatest')
	if (mapa.is(':visible')){
		mapa.closest('.open').removeClass('open')
		return
		}

	var sRestantes=(this.examen.horaFinal-new Date())/1000
	var segundosConsumidos=(this.examen.minutos*60-sRestantes)

	if (segundosConsumidos<10) {
		//salimos sin más, ha debido entrar por error
		if (this.returnTo){
			if (this.returnTo.id==this.tipos.vistaTienda){
				var nel=this.returnTo.nav[this.returnTo.nav.length-1]
			
				var nv=new VistaTienda(true, true)
				nv.toDOM()

				nv.nav=this.returnTo.nav
				nv.navegaEl(nel)
				}
			}
		}
	else 
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

function VistaRepasoTest(test){
	VistaTest.call(this, test)
	}
VistaRepasoTest.prototype=new VistaTest
////////////////////////////////////////////////

function VistaTienda(desdeHistorial, entornoLocal){
	this.id='vistaTienda'
	this.cat=null
	app.muestraNodoEnNavDrawer('liVistaTienda')

	this.leeTestLocales()
	this.entornoLocal=entornoLocal
	// this.domDetalleTest=null

	this.nav=[]

	if (!desdeHistorial) 
		app.pushState(this.id)
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
					creaObjProp('ul', {id:'categorias', className:'btn3_1 dropdown-menu animated fadeInRight', role:'menu', hijos:[
						creaObjProp('span', {className:'arrow top'}),

						]}),
					]}),

					creaObjProp('button', {onclick:function(){self.cambiaEntorno(this)}, texto:'Tienda', i:'fa-shopping-cart', className:'pull-right btn btn-warning tienda '+(this.entornoLocal?'':'active') }),
					creaObjProp('button', {onclick:function(){self.cambiaEntorno(this)}, texto:'Dispositivo'/*, i:'fa-download'*/, className:'pull-right btn btn-warning dispositivo '+(this.entornoLocal?'active':'') }),
			]}),
			
		]})
	}
VistaTienda.prototype.getBody=function(){
	return creaObjProp('div', {className:'vista-body tienda cargando'})
	}
VistaTienda.prototype.tareasPostCarga=function(){
	this.cargaListaCategorias()

	if (this.entornoLocal)
		this.pintaListaTests(this.testLocales)
	else
		this.cambiaEntorno(jQuery('button.tienda'))
		
	this.nav.push({entornoLocal:this.entornoLocal})
	}
VistaTienda.prototype.backButton=function(){
	var from=this.nav.pop()
	var nvista=this.nav[this.nav.length-1]
	this.navegaEl(nvista, from)
	}
VistaTienda.prototype.navegaEl=function(nvista, from){
	if (nvista && nvista.cd_test){
		this.testPreview(nvista.cd_test, true)
		}
	else  {
		if (this.domDetalleTest && this.domDetalleTest.is(':visible')){
			this.domBody.show()
			this.domDetalleTest.hide()
			}

		if (nvista && nvista.cd_categoria)
			this.navegaCat(nvista.cd_categoria, true)
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

			if (from && from.cd_categoria)
				this.domBody.scrollTop( this.domBody.find('#cat-'+from.cd_categoria).offset().top-100 )
			}
		}
	}
//////
VistaTienda.prototype.cambiaEntorno=function(xbtn, fromHistory){
	var pressed=jQuery(xbtn)
	
	this.domHeader.find('.btn.tienda, .btn.dispositivo').removeClass('active')
	pressed.addClass('active')

	if (this.domDetalleTest && this.domDetalleTest.is(':visible')){
		this.domBody.show()
		this.domDetalleTest.hide()
		}

	if (pressed.hasClass('dispositivo')){
		this.entornoLocal=true
		this.pintaListaTests(this.testLocales)
		}
	else {
		this.entornoLocal=false
		var self=this
		this.leeTestTienda( function(datos){self.pintaListaTests(datos)} )
		}

	if (!fromHistory) 
		app.pushState(this.entornoLocal?'vistaTienda:dispositivo':'vistaTienda:tienda')
	}
VistaTienda.prototype.cargaListaCategorias=function(){
	var self=this
	//http://www.oposiciones.de/oposiciones.htm, opción "según estudios"

	var xl=[]
	var fn=function(){
		var idcat=jQuery(this).data('id')
		self.navegaCat(idcat) 
		}

	for (var i=0; i<app.cache.categorias.length; i++){
		var cat=app.cache.categorias[i]

		if (cat.cd_categoriapadre==null)// if (cat.listarcomocategoria==1)
			xl.push( creaObjProp('li', {hijo:creaObjProp('a', {texto:cat.ds_categoria, 'data-id':cat.cd_categoria, onclick:fn})} ) )
		}
	jQuery('ul#categorias').empty().append(xl)
	}
VistaTienda.prototype.navegaCat=function(cd_categoria, fromHistory, cd_pack){
	if (!fromHistory) 
		this.nav.push({entornoLocal:this.entornoLocal, cd_categoria:cd_categoria})

	if (this.domDetalleTest && this.domDetalleTest.is(':visible')){
		this.domBody.show()
		this.domDetalleTest.hide()
		}

	//dejamos una pequeña lista de tests visibles por categoría, y mostramos el botón 'cargar más'
	var bloques=this.domBody.find('.bloque.cat').show()
	bloques.find('.card').not('.main').remove()
	bloques.find('.titulo .cargarMas').show()
	bloques.find('.cargarMas.aunMas').remove()

	this.cat=buscaFilas(app.cache.categorias, {cd_categoria: cd_categoria})[0]
	this.cambiaHeaderApp(this.cat.ds_categoria)

	var blSel=this.domBody.find('.bloque.cat#cat-'+this.cat.cd_categoria)
	if (blSel.length==0){
		blSel=jQuery(
			creaObjProp('section', {id:'cat-'+this.cat.cd_categoria, className:'bloque cat pack', 'data-id':this.cat.cd_categoria, hijos:[
				creaObjProp('h4', {className:'titulo', texto:this.cat.ds_categoria+' (colección)' })
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
VistaTienda.prototype.navegaPack=function(cd_categoria, fromHistory){
	this.navegaCat(cd_categoria, fromHistory, cd_categoria)
	}
VistaTienda.prototype.generaBtnCargarMas=function(cd_categoria, cssAdicional){
	var self=this
	return creaObjProp('button', {onclick:function(){self.cargarMas(cd_categoria)}, className:'cargarMas btn btn-warning '+cssAdicional, texto:'Más'} )
	}
VistaTienda.prototype.escogeTestsCatDinamica=function(cd_categoria, lista){
	var tests
	if (this.entornoLocal){//últimos hechos o descargados
		tests=this.ordenaPorFecha(lista).slice(0,10)
		}
	else {
		tests=this.ordenaPorFecha(lista).slice(0,10)
		}
	return tests
	}
VistaTienda.prototype.pintaListaTests=function(lista){
	var xl=[]
	
	this.anchoTarjetas=this.calculaAnchoTarjetas()
	var self=this
	var fnNavega=function(){
			self.navegaCat(jQuery(this).closest('.bloque').data('id'))
			}
	this.domBody.empty()
	if (lista.length==0){
		var titulo='No hay tests'
		var texto='Aquí se muestran los tests que tienes almacenados en tu dispositivo, pero ahora mismo no hay ninguno.'
		var sub='¿Por qué no descargas alguno de la tienda? Hay muchos gratuitos'
		this.domBody.removeClass('cargando flowable').append( this.admonition(titulo, texto, 'fa-ban fa-4x', sub ) )
		return
		}

	var xcat=app.cache.categorias
	for (var i=0; i<xcat.length; i++){
		var cat=xcat[i]
		var packs=[]

		if (cat.listarcomocategoria==0) 
			continue

		var totalPorCat, sl
		if (cat.cd_categoria<=0){
			totalPorCat=this.escogeTestsCatDinamica(cat.cd_categoria, lista)
			sl=totalPorCat.slice(0,6)
			cat.numtestsporcat=sl.length//aquí no queremos botón de más
			}
		else{
			packs=buscaFilas(app.cache.categorias, {listarcomocategoria:0, cd_categoriapadre:cat.cd_categoria})
			totalPorCat=buscaFilas(lista, {_contains_liscat:cat.cd_categoria})
			cat.numtestsporcat=totalPorCat.length
			sl=totalPorCat.slice(0,4) //Sacamos sólo unos pocos
			}

		if (sl.length==0) continue

		var d=creaObjProp('section', {id:'cat-'+cat.cd_categoria, className:'bloque cat', 'data-id':cat.cd_categoria, hijos:[
			creaObjProp('h4', {onclick:fnNavega, className:'titulo', hijos:[
				creaT(cat.ds_categoria)
				] })
			]} )

		for (var j=0;  j<packs.length; j++){
			var pack=packs[j]

			if (jQuery(d).find('#pack-'+ pack.cd_categoria).length==0){
				d.appendChild( this._generaDomPack(pack, j, cat) )
				}
			}
		for (var j=0;  j<sl.length; j++){
			var t=sl[j]
			if (packs.length && this.testEstaEnPack(t, packs)){
				continue
				}
			else if (jQuery(d).find('#test-'+ t.cd_test).length==0){
				d.appendChild( this._generaDomTest(t, j, cat) )
				}
			}

		// if (jQuery(d).find('article.card').length<sl.length)
		// 	jQuery(d).find('h4').append( this.generaBtnCargarMas(cat.cd_categoria) )
		xl.push( d )
		}

	this.domBody.addClass('flowable').append(xl).removeClass('cargando')
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
	if (precio==0) {
		domPrecio.appendChild( creaT(espacioDuro) )
		return
		}

	this.cachePrecios=this.cachePrecios|| {}
	if ( ('p'+precio) in this.cachePrecios){
		domPrecio.appendChild( creaT( this.cachePrecios['p'+precio] ) )
		}
	// else {
			// navigator.globalization.stringToNumber(
			// 			test.precio, 
			// 			function(number){
			// 				this.cachePrecios['p'+test.precio]=number.value
			// 				do,mPrecio.appendChild(creaT(number.value))
			// 				}, 
			// 			function(err){
			// 				console.error('Error globalization: '+test.precio)
			// 				},
			// 			{type:'currency'} )
			// }
	else 
		domPrecio.appendChild( creaT( formato.moneda(precio, moneda) ) )
	}
VistaTienda.prototype._generaDomTest=function(test, j, cat){
	var self=this
	var infoTienda=[], loTengo=false, domPrecio, onclick, dFecha=creaT(''), resp

	if (this.entornoLocal){
		loTengo=true
		domPrecio=creaObjProp('span', {className:'col-xs-2 loTengo', i:'fa-check-circle'})

		var notaTest=''
		var respTodas=buscaFilas(this.respuestasTestLocales, {cd_test:test.cd_test})
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

		onclick=function(){self.testPreview(test.cd_test)}

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
		loTengo=buscaFilas(this.testLocales, {cd_test:test.cd_test}).length

		if (loTengo)
			domPrecio=creaObjProp('span', {className:'col-xs-6 loTengo', i:'fa-check-circle'})
		else {
			domPrecio=creaObjProp('span', {className:'col-xs-6  bl precio'})
			this._formatoPrecio(domPrecio, test.precio, test.moneda)
			}
		
		infoTienda=[
			creaObjProp('span', {className:'col-xs-6 bl love', texto:test.likes, i:(test.likes>0?'fa-heart':'fa-heart-o') }),
			domPrecio,
			]

		onclick=function(){self.testPreview(test.cd_test)}
		}

	var self=this
	return creaObjProp('article', {'style.width':this.anchoTarjetas+'px', onclick:onclick, id:'test-'+test.cd_test, 'data-id':test.cd_test, className:'main card', hijos:[
			creaObjProp('div', {className:'body', i:cat.i}),
			creaObjProp('footer', {hijos:[
				dFecha,
				creaObjProp('div', {className:'frow', hijos:infoTienda}),
				creaObjProp('div', {className:'frow', hijos:[
					creaObjProp('span', {className:'bl nombre ellipsis col-xs-12', texto:test.ds_test}) 
					]}),
				]})
			]})
	}
VistaTienda.prototype._generaDomPack=function(pack, j, cat){
	var self=this
	return creaObjProp('article', {'style.width':this.anchoTarjetas+'px', onclick:function(){self.navegaPack(pack.cd_categoria)}, id:'pack-'+pack.cd_categoria, 'data-id':pack.cd_categoria, className:'main card pack', hijos:[
			creaObjProp('div', {className:'body', i:cat.i}),
			creaObjProp('footer', {hijos:[
				// dFecha,
				
				creaObjProp('div', {className:'frow', hijos:[
					creaObjProp('span', {className:'bl nombre ellipsis col-xs-12', texto:pack.ds_categoria}) 
					]}),
				creaObjProp('div', {className:'frow', hijos:[
					creaObjProp('small', {texto:'Colección de tests'})
					]}),
				]})
			]})
	}
VistaTienda.prototype.cargarMas=function(cd_categoria, cd_pack){
	var tanda=10, packs=[]
	//this.cat
	var blCat=this.domBody.find('.cat#cat-'+cd_categoria)

	var xcat=buscaFilas(app.cache.categorias, {cd_categoria:cd_categoria})[0]

	blCat.find('.titulo .cargarMas').hide()//el principal lo ocultamos, el resto se eliminan
	blCat.find('.cargarMas.aunMas').remove()

	var num=blCat.find('article.card').length

	var lista=(this.entornoLocal?this.testLocales:this.testTienda)

	if (cd_pack==null){
		packs=buscaFilas(app.cache.categorias, {listarcomocategoria:0, cd_categoriapadre:cd_categoria})
	
		for (var j=0; j<packs.length; j++){
			var pack=packs[j]

			if (jQuery(blCat).find('#pack-'+ pack.cd_categoria).length==0){
				jQuery(blCat).appendChild( this._generaDomPack(pack, j, cat) )
				}
			}
		}

	var sl=buscaFilas( lista, {_contains_liscat:cd_categoria})

	var aPintar=sl.slice(0)
	aPintar=aPintar.slice(num,num+tanda)
	for (var j=0;  j<aPintar.length; j++){
		if (packs.length && this.testEstaEnPack(aPintar[j], packs))
			continue
			
		blCat.append( this._generaDomTest(aPintar[j], j, xcat ) )
		}

	if (sl.length>(num+tanda) && jQuery(blCat).find('article.card').length==(num+tanda) ){
		blCat.append( this.generaBtnCargarMas(cd_categoria, 'aunMas') )
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
			fnCallBack(this.testTienda)
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
			console.info('hay que esperar a las credenciales')
			setTimeout(function(){self.leeTestTienda(fnCallBack)}, 800)
			return
			}
		else{
			self.domBody.removeClass('cargando')
			this.domBody.append(
				this.admonition('No se ha podido conectar con la tienda', 'Es una pena, realmente disponemos de un gran material allá arriba. Inténtalo más tarde, por favor.', 'fa-exclamation-triangle fa-4x')
				)
			}
		}
	jQuery.post(app.config.url, {accion:'getPreviewCategorias', cd_usuario:app.cache.usuario.cd_usuario}).success(
		function(data){
			var datos=xeval(data)
			if (datos.retorno==1){
				self.testTienda=datos.tests || []
				self.ftestTienda=new Date()
				
				app.setCategorias(datos.categorias)
				self.cargaListaCategorias()

				if (fnCallBack){
					fnCallBack(self.testTienda)
					self.domBody.removeClass('cargando')
					}
				}
			else
				console.error(data)
		})
	}
VistaTienda.prototype.testPreview=function(cd_test, fromHistory){
	if (!fromHistory) 
		this.nav.push({entornoLocal:this.entornoLocal, cd_categoria:this.cat?this.cat.cd_categoria:null, cd_test:cd_test})

	this.cambiaHeaderApp('cargando')

	if (this.domDetalleTest==null){
		this.domDetalleTest=jQuery(creaObjProp('div', {'style.height':this.domBody.innerHeight(), className:'vista-body detalle-test flowable cargando'}))
		this.dom.append(this.domDetalleTest)
		this.domBody.hide()
		}
	else {
		this.domDetalleTest.show().addClass('cargando')
		this.domBody.hide()
		}

	var loTengo=buscaFilas(this.testLocales, {cd_test:cd_test})
	var loHice=buscaFilas(this.respuestasTestLocales, {cd_test:cd_test})

	if (loTengo.length>0){ //no hace falta consultar al servidor
		this._testPreview(loTengo[0], loHice[0], true)
		}
	else {
		var self=this
		jQuery.get(app.config.url, {accion:'getPreviewTest', cd_usuario:app.cache.usuario.cd_usuario, cd_test:cd_test}).success(
			function(data){
				var test=xeval(data).test
				self._testPreview(test, null, false)
				}
			)
		}
	}
VistaTienda.prototype._testPreview=function(test, estadisticas, loTengo){
	var self=this

	var textoBotonDescargar, fnDescargar

	self.cambiaHeaderApp(test.ds_test)
	self.domDetalleTest.removeClass('cargando tengo-este-test')

	if (loTengo){
		self.domDetalleTest.addClass('tengo-este-test')
		textoBotonDescargar='Descargar'
		fnDescargar=function(){self.descargaTest(test.cd_test)}
		}
	else if (test.precio==0){
		textoBotonDescargar='Descargar'
		fnDescargar=function(){self.descargaTest(test.cd_test)}
		}
	else{
		textoBotonDescargar=formato.moneda(test.precio, test.moneda)+' - Comprar'
		fnDescargar=function(){self.descargaTest(test.cd_test)}
		}

	var visual=creaObjProp('div', {className:'col-xs-3 visual'})
	if (test.img==null || test.img=='')
		// visual.appendChild( creaObjProp('i', {className:'fa fa-file-text-o fa-8x'}) )
		visual.appendChild( creaObjProp('span', {className:'fa-stack pull-left fa-3x', hijos:[
			creaObjProp('i', {className:'fa fa-circle text-success fa-stack-2x'}),
			creaObjProp('i', {className:'fa fa-file-text-o text-white fa-stack-1x'}),
			]}) )
	else
		visual.style.backgroundImage='url('+test.img+')'

	self.domDetalleTest.empty().append([
		creaObjProp('section', {className:'cabecera row', hijos:[
			visual,
			creaObjProp('div', {className:'col-xs-9 data', hijos:[
				creaObjProp('h1', {className:'bl titulo', texto:test.ds_test}),
				creaObjProp('span', {className:'bl', hijos:[
					creaObjProp('span', {className:'small organismo', texto:test.organismo}),
					// creaObjProp('span', {texto:test.organismo==null? '': espacioDuro2}),
					creaObjProp('span', {className:'fecha', texto: formato.fechaDDMMYYYY(test.f_examen) }),
					]}),
				creaObjProp('span', {className:'bl cats', texto: self.concatCategoriasTest(test), omiteNulo:true, i:'fa-tags' }),
				creaObjProp('span', {className:'bl', texto:test.numpreguntas+' preguntas/'+test.minutos+' minutos'}),
				creaObjProp('span', {className:'bl loTengo', i:'fa-check-circle', texto:'Este test está en tu colección'}),
				]}),
			]}),
		creaObjProp('section', {className:'row botonera', hijos:[
			// creaObjProp('div', {className:'bl grupo pull-right', hijos:[
			creaObjProp('button', {className:'btnAbrir btn btn-info-t btn-sm pull-right', texto:'ABRIR', onclick:function(){self.lanzaTest(test.cd_test)} }),
			creaObjProp('button', {className:'btnLove btn btn-rounded btn-icon btn-sm btn-sm'+(test.likeit?' btn-success':' btn-default'), i:'fa-heart fa-fw', onclick:function(){self.toggleLike(test.cd_test) } }),
			creaObjProp('button', {className:'btnDesinstalar btn btn-default btn-sm', texto:'Desinstalar', onclick:function(){self.desinstalarTest(test.cd_test)} }),

			creaObjProp('button', {className:'btnDescargar btn btn-success-t pull-right btn-sm', texto:textoBotonDescargar, onclick:fnDescargar })
			// ]})
			]})
		])

	if (estadisticas){
		if (!estadisticas.finalizado){
			self.domDetalleTest.append(
				creaObjProp('section', {className:'cabecera row', hijos:[
					creaObjProp('div', {className:'col-xs-3 visual', 'style.paddingLeft':'15px', hijos:[
						creaObjProp('span', {className:'fa-stack pull-left fa-2x', hijos:[
							creaObjProp('i', {className:'fa fa-circle text-info fa-stack-2x'}),
							creaObjProp('i', {className:'fa fa-pause text-white fa-stack-1x'}),
							]})
						]}),
					creaObjProp('div', {className:'col-xs-9 data', hijos:[
						creaObjProp('h2', {texto:'Tienes este test a medias'}),
						creaObjProp('div', {hijos:[
							creaT('Preguntas respondidas: '+estadisticas.minutosPorcentaje+'%'),
							creaObjProp('div', {className:'progress progress-sm', hijos:[
								creaObjProp('div', {className:'progress-bar', 'style.width':estadisticas.minutosPorcentaje+'%', role:'progressbar'})
								]})
							]}),
						creaObjProp('div', {hijos:[
							creaT('Tiempo consumido: '+estadisticas.respondidasPorcentaje+'%'),
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
				ico='fa-ok-circle'
				texto='Aprobado ('+estadisticas.nota+')'
				}

			self.domDetalleTest.append(
				creaObjProp('section', {className:'row resultadoUltimoExamen', hijos:[
					creaObjProp('div', {className:'col-xs-3 visual', 'style.paddingLeft':'15px', hijos:[
						creaObjProp('span', {className:'fa-stack pull-left fa-2x', hijos:[
							creaObjProp('i', {className:'fa fa-circle fa-stack-2x '+cls}),
							creaObjProp('i', {className:'fa fa-pause text-white fa-stack-1x '+ico}),
							]})
						]}),
					creaObjProp('div', {className:'col-xs-9 data', hijos:[
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
					]})
				)
			}
		}
	}
VistaTienda.prototype.lanzaTest=function(cd_test){
	var test=buscaFilas(this.testLocales, {cd_test:cd_test})[0]
	var resp=buscaFilas(this.respuestasTestLocales, {cd_test:cd_test})[0]
	app.lanzaTest(test, resp, this)
	}
//////
VistaTienda.prototype.anhadeATestLocales=function(test){
	this.testLocales.push(test)
	this.salvaTestLocales()
	}
VistaTienda.prototype.desinstalarTest=function(cd_test){
	var idxBorrar=getIndiceFila(this.testLocales, {cd_test:cd_test})
	this.testLocales.splice(idxBorrar, 1)

	this.domDetalleTest.removeClass('tengo-este-test')

	if (this.entornoLocal)
		jQuery('article.main.card[data-id='+cd_test+']').remove()
	else
		jQuery('article.main.card[data-id='+cd_test+'] .loTengo').remove()

	this.salvaTestLocales()
	}
VistaTienda.prototype.salvaTestLocales=function(){
	save('tapp37_listaTest', this.testLocales)
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
VistaTienda.prototype.leeTestLocales=function(fnCallBack){
	this.respuestasTestLocales=get('tapp37_listaTestRespuestas') //VistaTienda.prototype.testData()
	this.testLocales=get('tapp37_listaTest') //VistaTienda.prototype.testData()
	if (! (this.testLocales instanceof Array) )
		this.testLocales=[]


	// this.testLocales.sort(function(a,b){
	// 				if (a.md.favorito==b.md.favorito)
	// 					return 0
	// 				else if (a.md.favorito>b.md.favorito)
	// 					return -1
	// 				else
	// 					return 1
	// 				})
	if (fnCallBack)
		fnCallBack(this.testLocales)
	}
VistaTienda.prototype.descargaTest=function(cd_test){
	var self=this
	this.domDetalleTest.find('.btnDescargar').text('Descargando...').addClass('cargando')
	console.info('Iniciamos descarga test '+cd_test)
	jQuery.post(app.config.url, {accion:'getTest', cd_test:cd_test, cd_usuario:app.cache.usuario.cd_usuario}).success(
		function(data){
			var datos=xeval(data)
			if (datos.retorno==1){
				datos.test.fu_modificacion=new Date()

				self.anhadeATestLocales(datos.test)

				if (self.entornoLocal)
					self.pintaListaTests(self.testLocales)
				else
					self.pintaListaTests(self.testTienda)

				setTimeout(function(){self.domDetalleTest.addClass('tengo-este-test')},1500)
				console.info('test '+cd_test+' descargado!, '+datos.test.numpreguntas+' preguntas')
				}
			else
				console.error(data)
		})
	}

VistaTienda.prototype.toggleLike=function(cd_test){
	var btn=this.domDetalleTest.find('.btnLove')
	
	var cls='btn-default btn-success'
	btn.toggleClass(cls)

	var param={accion:'like+', cd_usuario:app.cache.usuario.cd_usuario, cd_test:cd_test}
	if (!btn.hasClass('btn-success'))
		param.accion='like-'
	
	var idx=getIndiceFila(this.testLocales, {cd_test:cd_test})
	this.testLocales[idx].likeit=btn.hasClass('btn-success')
	this.salvaTestLocales()

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
	return creaObjProp('header', {className:'btn-primary vista-header btn-dark' , hijos:[
			creaObjProp('div', {className:'btn-group', hijos:[

				creaObjProp('div', {className:'btn-group', hijos:[
					creaObjProp('button', {className:'btn btn-dark dropdown-toggle', 'data-toggle':'dropdown', hijos:[
						creaT(' Tests '),
						creaObjProp('b', {className:'caret'})
						]}), 
					creaObjProp('ul', {id:'listatests', className:'btn3_1 dropdown-menu animated fadeInRight', role:'menu', hijos:[
						creaObjProp('span', {className:'arrow top'}),

						]}),
					]}),

			]}),
			
		]})
	}
VistaMigraTest.prototype.getBody=function(){
	this.btn=creaObjProp('button', {texto:'Procesa test y sube', 
									i:'fa-cloud-upload', 
									className:'btn btn-default btn-lg', 
									disabled:1, 
									onclick:function(){app.vistaActiva.uploadTest()} })
	return creaObjProp('div', {className:'vista-body', hijos:[
			creaObjProp('span', {className:'bl', texto:'Selecciona un test del desplegable'}),
			this.btn
		]})
	}
VistaMigraTest.prototype.tareasPostCarga=function(){
	var l=[], lista=[], self=this

	for (var i=1; i<101; i++){
		l.push('test_0'+lpad(i, '0', 3)+'.js') //'test_0001.js',
		}

	for (var i=0; i<l.length; i++){
		var f=l[i]
		lista.push( creaObjProp('li', {hijos:[
			creaObjProp('a', {texto:f, onclick:function(){self.cargaArchivoRemoto(this)} })
			]}) )
		}
	this.domHeader.find('#listatests').append(lista)
	}
//////
VistaMigraTest.prototype.cargaArchivoRemoto=function(enlace){
	var self=this

	var n=jQuery(enlace).text()
	jQuery.ajax({
		type:'GET',
		dataType:'script',
		url:'./paramigrar/'+n
		})
	.success(
		function(data){
			console.info('LISTOS')

			jQuery(self.domBody).find('span.bl').text("Archivo '"+n+"' seleccionado")
			self.procesa(n)
			jQuery(self.btn).attr('disabled', false)
			}
		)
	.error(
		function(a,b,c){
			console.error(a)
		})
	}
VistaMigraTest.prototype.quitaAcutes=function(s){
	var trans={
		'&iquest;':'¿',

		'&aacute;':'á',
		'&eacute;':'é',
		'&iacute;':'í',
		'&oacute;':'ó',
		'&uacute;':'ú',

		'&ntilde;':'ñ',

		'&lsquo;':'"',
		'&rsquo;':'"',

		'&ldquo;':'"',
		'&rdquo;':'"',

		'&quot;':'"',
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
VistaMigraTest.prototype.procesa=function(n){
	this.test={
		ds_test:'Examen '+Number(n.substring(5,9))+'/Tests de Preparatic XXII',
		organismo:'Administración General del Estado',
		numpreguntas:100,
		minutos:100,
		fallosrestan:.5,
		precio:0,
		liscat:'103,104',
		}

	var preguntas=[]
	for (var i=0; i<questions.length; i++){
		preguntas.push( this._procesa1Pregunta(i) )
		}

	this.test.preguntas=preguntas
	}
VistaMigraTest.prototype._procesa1Pregunta=function(i){
	var p={
		cd_pregunta:i,
		pregunta: this.quitaAcutes( questions[i] ),
		cd_respuestacorrecta: choices[i].indexOf(answers[i]),

		respuesta0:this.quitaAcutes(choices[i][0]),
		respuesta1:this.quitaAcutes(choices[i][1]),
		respuesta2:this.quitaAcutes(choices[i][2]),
		respuesta3:this.quitaAcutes(choices[i][3]),

		notas:'Unidad '+units[i]+', '+comments[i]
		}
	return p
	}
VistaMigraTest.prototype.uploadTest=function(){
	if (this.test){
		jQuery.post(app.config.url, {accion:'creaBorradorTest', 
									cd_usuario:app.cache.usuario.cd_usuario,
									datos:JSON.stringify(this.test) }).success(
		function(data){
			var datos=xeval(data)
			if (datos.retorno==1){
				alert('Test '+datos.cd_test+' creado')
				}
			else
				console.error(data)
			})
		}
	}
