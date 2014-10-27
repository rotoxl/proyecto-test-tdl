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
	var fn=function(element, index){
		for (var k in dicBuscado){
			if (dicBuscado[k]!=element[k]){
				return false
				}
			}
		return true
		}
	return jQuery.grep(filas, fn)
	}
function get(s){return JSON.parse( localStorage.getItem(s) )}
function save(s,v){localStorage.setItem(s, JSON.stringify(v))}
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
Formato.prototype.fechaDDMMYYYY=function(t){
	var f=this.toDate(t)
	if (f==null) return '';
	return lpad(f.getDate(), '0', 2)+this.sepFecha+lpad(f.getMonth()+1, '0', 2)+this.sepFecha+f.getFullYear()
	}
Formato.prototype.toDate=function(t){
	var fjs
	if (t==null)
        fjs=null
    else if (t instanceof Date)
    	fjs=t
    else if (typeof(t)=='number')//Long
        fjs=new Date(t)
    else
        fjs=this._fechajs(t)
    return fjs
	}
Formato.prototype._fechajs=function(fOriginal){
	var ret
    if(fOriginal==null) 
    	return null
    else if (fOriginal instanceof Date){
        return fOriginal
        }
    
    try {
       	ret=new Date(fOriginal)
       	if (!isNaN( d.getTime() ) )//check invalid date
         	return ret
    } catch (e){
       //pass
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
		this.config.servidor='http://192.168.0.196:8888/proyectotest/'
	else
		this.config.servidor='./'
	this.config.url=this.config.servidor+'index_r.php'

	//////////
	var sr=document.location.search+''
	if (sr.indexOf('?token=')==0){
		this.cache.token=sr.substring('?token='.length)

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
			getDataProfile(this.cache.token, function(data){self.userDataReceived(data)} )
			}
		}
	else if (sr.indexOf('?meacuerdo')==0){
		var s=get('tapp37_userdata')
		this.cache.usuario=JSON.parse(s)
		this.actualizaDomUsuario()
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
			});
	
	document.addEventListener('backbutton', function(){app.backButton()}, false)
	this.cache.categorias=[
			{cd_categoria:1, ds_categoria:'Diplomado Sanitario/Enfermería', i:'fa-stethoscope', numtestsporcat:-1},
			{cd_categoria:2, ds_categoria:'Carné de conducir B2', i:'fa-car', numtestsporcat:-1},
			{cd_categoria:3, ds_categoria:'Cuerpo Superior de Sistemas y Tecnologías de la Información', i:'fa-file-code-o', numtestsporcat:-1},
			]

	var self=this
	jQuery(window).bind('popstate', function(){self.backButton()} )
	}
Controlador.prototype.userDataReceived=function(data){
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
	disconnectUser(this.cache.token)
	localStorage.removeItem('tapp37_userdata')
	document.location='login.html'
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
Controlador.prototype.lanzaTest=function(test){
	new VistaTest(test).toDOM()
	}
Controlador.prototype.cargaVistaInicio=function(){
	var hash=(document.location.hash+'').substring(1)
	if (hash=='vistaMigraTest')
		this.cargaVistaMigraTest(true)
	else if (hash=='vistaTienda')
		this.cargaVistaTienda(true)
	else if (hash=='vistaTest'){
		this.cargaVistaTienda(true)
		// this.continuarTest(true)
		}
	// else if (hash=='vistaSocial')
		// this.cargaVistaSocial()
	// else if (hash=='vistaEstadisticas')
	//  this.cargaVistaEstadisticas()

	else {
		if (isPhone())
			this.abreNavDrawer()
	
		}

	}
Controlador.prototype.cargaVistaTienda=function(desdeHistorial){
	var vt=new VistaTienda()
	vt.entornoLocal=true
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
	var numtarjetas=Math.floor(w*0.95/anchoMinCards)
	return w*0.97/numtarjetas
	}
Vista.prototype.tipos=['vistaTest', 'vistaTienda', 'vistaSocial', 'vistaEstadisticas', 'vistaMigraTest']
Vista.prototype.toDOM=function(){
	var xd=jQuery('#content')
	if (app) app.vistaActiva=this

	this.domHeader=jQuery(this.getHeader())
	this.domBody=jQuery(this.getBody())
	
	xd.empty()
		.append(this.domHeader)
		.append(this.domBody)
		.removeClass(this.tipos.join(' '))
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
	var t=test.liscat.split(',')
	for (var i=0; i<t.length; i++){
		var cat=buscaFilas(app.cache.categorias, {cd_categoria:t[i] } )[0]
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
function VistaTest(test, desdeHistorial){
	if (test==null) return
	VistaPantallaCompleta.call(this)

	this.test=test
	this.id='vistaTest'
	this.title=test.ds_test 

	this.mapaInicializado=false

	this.examen={
		fallosRestan:this.test.fallosRestan,
		minutos:this.test.minutos,
		numPreguntas:this.test.numPreguntas,
		segundosConsumidos:0,
	}

	//insertamos la portada y la contraportada
	this.test.preguntas.splice(0,0, null)
	this.test.preguntas.push(null)

	if (!desdeHistorial) 
		app.pushState(this.id)
	}
VistaTest.prototype=new VistaPantallaCompleta
VistaTest.prototype.getHeader=function(){
	var self=this
	return creaObjProp('header', {className:'vista-header marcadores' , hijos:[
				creaObjProp('div', {className:'btn-group btn-dark', hijos:[
						creaObjProp('button', {className:'btn btn-primary col-md-6 col-sm-6 col-xs-6 dropdown-toggle', 'data-toggle':'dropdown', i:'fa-th', hijos:[
							creaT(' Pregunta '),
							creaObjProp('span', {id:'numPag', texto:1}),
							creaT(' de '+this.examen.numPreguntas+' '), 
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
	var gallery=new SwipeView('#swypeWrapper', {numberOfPages:this.test.preguntas.length, loop:false });

	// // Load initial data
	for (var i=0; i<3; i++) {
		// var page = i==0 ? this.test.preguntas.length-1 : i-1;
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

		self.indicaPreguntaActivaEnMarcador(gallery.pageIndex)
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
	if (i==0 || i==this.test.preguntas.length-1){

		jQuery(cont).empty().addClass('portada '+(i==0?'inicio':'fin')).append( [
			creaObjProp('span', {texto:i==0?'Inicio':'Fin'}),
			creaObjProp('div', {className:'visual'})
			])

		console.info('> crea portada, cont '+cont.id)
		}
	else {
		var preg=this.test.preguntas[i] //la 0 es la portada

		jQuery(cont).removeClass('portada inicio fin').empty()
			.append (creaObjProp('div', {'style.height':this.hFija/2, className:'pregunta noselect', hijo:this.generaDomPreguntas(preg)}) )
			.append (creaObjProp('footer', {'style.height':this.hFija/2, className:'footer respuestas noselect', hijo:this.generaDomRespuestas(preg)}) )

			console.info('> crea diapo '+i+', cont '+cont.id)
		}
	}
VistaTest.prototype.generaDomPreguntas=function(preg){
	var self=this
	return creaObjProp('table',{hijos:[
				creaObjProp('tr', {hijos:[
					creaObjProp('td', {className:'clave', onclick:function(){self.toggleEstrella(this)}, i:(preg.estrella?'fa-star':'fa fa-star-o')}),
					creaObjProp('td', {className:'valor', texto:preg.i+'-'+preg.pregunta})
					]}) 
				]})
	}
VistaTest.prototype.generaDomRespuestas=function(preg){
	var self=this
	var xr=[], letras='ABCDE', estilos=['bg-danger', 'bg-warning', 'bg-success', 'bg-info', 'bg-primary']
	for (var i=0; i<preg.respuestas.length; i++){
		var resp=preg.respuestas[i]
		if (resp.texto==null || resp.texto=='') 
			continue
		xr.push( creaObjProp('tr', {onclick:function(){self.marcaResp(this)}, hijos:[
			creaObjProp('td', {className:'clave '+ estilos[i], texto:letras.substr(i,1) }),
			creaObjProp('td', {className:'valor', texto:preg.respuestas[i].texto }),
			]}))
		}
	if (preg.respuestaUsuario!=null){
		jQuery(xr).addClass('atenuada')
		jQuery(xr[preg.respuestaUsuario]).removeClass('atenuada').addClass('active')
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

	var preg=this.test.preguntas
	// var numfilas=Math.floor(this.test.preguntas.length/elPorFila)
	var col=0,tr=creaObjProp('tr'), trs=[], ta=creaObjProp('table')
	
	//no reflejamos portada ni contraportada
	for (var i=1; i<preg.length-1; i++){
		this.test.preguntas[i].i=i
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
																				id:'mapa_preg'+i, 
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
VistaTest.prototype.actualizaMapa=function(preg){
	var td=jQuery('#mapa_preg'+preg.i)
	td.toggleClass('contestada', preg.respuestaUsuario!=null)

	td.empty()
	if (preg.estrella)
		td.append(this.generaDomEstrella(preg.i))
	else 
		td.append(creaObjProp('span', {texto:preg.i}))
	}
VistaTest.prototype.indicaPreguntaActivaEnMarcador=function(i){
	this.preg=this.test.preguntas[i]

	jQuery('#mapatest td').removeClass('active')
	jQuery('#mapa_preg'+i).addClass('active')
	var np=i
	if (np==0)
		np=1
	else if (np==this.test.preguntas.length-1)
		np=this.test.preguntas.length-2

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
	if (this.preg.estrella==null)
		this.preg.estrella=false
	this.preg.estrella=!this.preg.estrella

	var xcelda=jQuery(celda).find('i')
	xcelda.removeClass('fa-star fa-star-o')
	if (this.preg.estrella)
		xcelda.addClass('fa-star')
	else
		xcelda.addClass('fa-star-o')

	this.actualizaMapa(this.preg)
	}
VistaTest.prototype.marcaResp=function(fila){
	var xfila=jQuery(fila)
	var xfilas=xfila.closest('table').find('tr')

	if (xfila.hasClass('active')){
		xfilas.removeClass('active atenuada')
		this.preg.respuestaUsuario=null
		}
	else {
		xfilas.removeClass('active').addClass('atenuada')
		xfila.addClass('active').removeClass('atenuada')
		this.preg.respuestaUsuario=xfilas.index(fila)
		}

	this.actualizaMapa(this.preg)
	}
//////
VistaTest.prototype.tiempoAcabado=function(){
	this.guardaEstadoExamen()
	this.muestraFormPausa('fintiempo')
	}
VistaTest.prototype.guardaEstadoExamen=function(){
	console.error('GUARDAR ESTADO DEL EXAMEN!')
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
			creaObjProp('button', {onclick:function(){self.frmdom.modal('hide'); app.cargaVistaInicio()}, className:'btn btn-sm btn-dark transparent', texto:'Cerrar test'}),
			creaObjProp('button', {onclick:function(){self.repasarExamen(); self.frmdom.modal('hide')}, className:'btn btn-sm btn-success', texto:'Repasar'}),
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
		creaObjProp('p', {className:'categoria', texto:this.concatCategoriasTest(md.liscat), i:'fa-tags fa-fw', omiteNulo:true}),
		creaObjProp('p', {className:'fecha', texto:formato.fechaDDMMYYYY(md.f_examen) , i:'fa-calendar fa-fw', omiteNulo:true}),
		creaObjProp('p', {className:'organismo', texto:md.organismo, i:'fa-institution fa-fw', omiteNulo:true}),
		creaObjProp('p', {className:'region', texto:md.region, i:'fa-globe fa-fw', omiteNulo:true}),
		])
	if (md.img)
		this.frmdom.find('.info .visual')[0].src=md.img

	this.frmdom.modal({backdrop:'static', keyboard:false})
	}
VistaTest.prototype.pregSinPortadas=function(){
	return this.test.preguntas.slice(1, this.test.preguntas.length-2)
	}
VistaTest.prototype.generaEstadisticasPausa=function(){
	var pr=this.pregSinPortadas()
	var r= {
		estrellas: buscaFilas(pr, {estrella:true}).length,
		noRespondidas: buscaFilas(pr, {respuestaUsuario:null}).length,
		preguntas:pr.length,

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
	var pr=this.pregSinPortadas()
	for (var i=0; i<pr.length; i++){
		var preg=pr[i]
		if (preg.respuestaUsuario==null)
			nc++
		else if (preg.respuestaUsuario==preg.cd_respuestacorrecta)
			a++
		else 
			f++
		}
	var fr=this.test.examen.fallosRestan
	if (fr==null) fr=0

	var tn= (a-(f*fr))/pr.length
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

		this.guardaEstadoExamen()
		this.muestraFormPausa('pausa')
		}
	else { //retomamos
		this.iniciaTiempo()
		}
	}
VistaTest.prototype.tickCrono=function(){
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
				fallosRestan:.25, //para indicar aquello de que cada 4 fallos resta 1 acierto
				minutos:20,
				numPreguntas:6, //redundante, pero vendrá bien para comprobar la integridad
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

function VistaTienda(desdeHistorial){
	this.id='vistaTienda'
	this.cat=null
	app.muestraNodoEnNavDrawer('liVistaTienda')

	this.leeTestLocales()
	this.entornoLocal=false
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
	this.nav.pop()
	var nvista=this.nav[this.nav.length-1]

	if (nvista.cd_test){
		this.testPreview(nvista.cd_test, true)
		}
	else  {
		if (this.domDetalleTest && this.domDetalleTest.is(':visible')){
			this.domBody.show()
			this.domDetalleTest.hide()
			}

		if (nvista.cd_categoria)
			this.navegaCat(nvista.cd_categoria, true)
		else { //
			this.cat=null
			this.restauraHeaderApp() 

			//dejamos una pequeña lista de tests visibles por categoría, y mostramos el botón 'cargar más'
			var bloques=this.domBody.find('.bloque.cat').show()
			bloques.find('.card').not('.main').remove()
			bloques.find('.titulo .cargarMas').show()
			bloques.find('.cargarMas.aunMas').remove()
			}
		}
	}
//////
VistaTienda.prototype.cambiaEntorno=function(xbtn){
	var pressed=jQuery(xbtn)
	
	this.domHeader.find('.btn.tienda, .btn.dispositivo').removeClass('active')
	pressed.addClass('active')

	if (pressed.hasClass('dispositivo')){
		this.entornoLocal=true

		if (this.domDetalleTest && this.domDetalleTest.is(':visible')){
			this.domBody.show()
			this.domDetalleTest.hide()
			}

		this.pintaListaTests(this.testLocales)
		}
	else {
		this.entornoLocal=false
		var self=this
		this.leeTestTienda( function(datos){self.pintaListaTests(datos)} )
		}
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
		xl.push( creaObjProp('li', {hijo:creaObjProp('a', {texto:cat.ds_categoria, 'data-id':cat.cd_categoria, onclick:fn})} ) )
		}
	jQuery('ul#categorias').empty().append(xl)
	}
VistaTienda.prototype.navegaCat=function(cd_categoria, fromHistory){
	if (!fromHistory) 
		this.nav.push({entornoLocal:this.entornoLocal, cd_categoria:cd_categoria})

	//dejamos una pequeña lista de tests visibles por categoría, y mostramos el botón 'cargar más'
	var bloques=this.domBody.find('.bloque.cat').show()
	bloques.find('.card').not('.main').remove()
	bloques.find('.titulo .cargarMas').show()
	bloques.find('.cargarMas.aunMas').remove()

	this.cat=buscaFilas(app.cache.categorias, {cd_categoria: cd_categoria})[0]
	this.cambiaHeaderApp(this.cat.ds_categoria)

	var blSel=this.domBody.find('.bloque.cat#cat-'+this.cat.cd_categoria)
	this.domBody.find('.bloque.cat').not(blSel).hide()
	this.cargarMas()

	}
VistaTienda.prototype.generaBtnCargarMas=function(cssAdicional){
	return creaObjProp('button', {className:'cargarMas btn btn-warning '+cssAdicional, texto:'Más'} )
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

	var copiaCat=app.cache.categorias.slice()
	copiaCat.splice(0, 0, {cd_categoria:-1, ds_categoria:'Nuevos y actualizados', i:'fa-fire'})

	for (var i=0; i<copiaCat.length; i++){
		var cat=copiaCat[i]

		var totalPorCat, sl
		if (cat.cd_categoria==-1){
			totalPorCat=this.ordenaPorFecha(lista)
			sl=totalPorCat.slice(0,4)
			cat.numtestsporcat=sl.length
			}
		else{
			totalPorCat=buscaFilas(lista, {cd_categoria:cat.cd_categoria})
			sl=totalPorCat.slice(0,4)
			}

		if (sl.length==0) continue

		var hijos=[this.generaBtnCargarMas()]
		if (sl.length==cat.numtestsporcat)
			hijos=[]
		hijos.push(creaT(cat.ds_categoria))

		var d=creaObjProp('section', {id:'cat-'+cat.cd_categoria, className:'bloque cat', 'data-id':cat.cd_categoria, hijos:[
			creaObjProp('h4', {onclick:fnNavega, className:'titulo', hijos:hijos })
			]} )

		for (var j=0;  j<sl.length; j++){
			var t=sl[j]

			if (jQuery(d).find('#test-'+ t.cd_test).length==0){
				d.appendChild( this._generaDomTest(t, j, cat) )
				}
			}

		xl.push( d )
		}

	this.domBody.addClass('flowable').append(xl).removeClass('cargando')
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
	var infoTienda=[], loTengo=false, domPrecio, onclick

	if (this.entornoLocal){
		loTengo=true
		domPrecio=creaObjProp('span', {className:'col-xs-6 loTengo', i:'fa-check-circle'})

		infoTienda=[
			creaObjProp('span', {className:'col-xs-6 bl'}),
			domPrecio,
			]

		onclick=function(){self.lanzaTest(test.cd_test)}
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
				creaObjProp('div', {className:'frow', hijos:infoTienda}),
				creaObjProp('div', {className:'frow', hijos:[
					creaObjProp('span', {className:'bl nombre ellipsis col-xs-12', texto:test.ds_test}) 
					]}),
				]})
			]})
	}
VistaTienda.prototype.cargarMas=function(){
	var tanda=2
	//this.cat
	var blCat=this.domBody.find('.cat#cat-'+this.cat.cd_categoria)

	blCat.find('.titulo .cargarMas').hide()//el principal lo ocultamos, el resto se eliminan
	blCat.find('.cargarMas.aunMas').remove()

	var num=blCat.find('article.card').length
	var sl=buscaFilas(this.testLocales, {cd_categoria:this.cat.cd_categoria})

	var aPintar=sl.slice(num,num+tanda)
	for (var j=0;  j<aPintar.length; j++){
		blCat.append( this._generaDomTest(aPintar[j], j, this.cat ) )
		}

	if (sl.length>num+tanda){
		blCat.append( this.generaBtnCargarMas('aunMas') )
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
	var self=this
	self.domBody.empty().addClass('cargando')
	jQuery.post(app.config.url, {accion:'getPreviewCategorias', cd_usuario:app.cache.usuario.cd_usuario}).success(
		function(data){
			var datos=xeval(data)
			if (datos.retorno==1){
				self.testTienda=datos.tests || []
				app.cache.categorias=datos.categorias
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

	var self=this
	jQuery.get(app.config.url, {accion:'getPreviewTest', cd_test:cd_test}).success(
		function(data){
			var test=xeval(data).test
			self.cambiaHeaderApp(test.ds_test)
			self.domDetalleTest.removeClass('cargando')

			var textoBoton='Gratis - Descargar', fnDescargar=function(){self.descargaTest(test.cd_test, this)}
			if (test.precio>0){
				textoBoton=formato.moneda(test.precio, test.moneda)+' - Comprar'
				fnDescargar=function(){self.comprarTest(test.cd_test)}
			}
			
			var visual=creaObjProp('div', {className:'col-xs-4 visual'})
			if (test.img==null || test.img=='')
				visual.appendChild( creaObjProp('i', {className:'fa fa-file-text-o fa-8x'}) )
			else
				visual.style.backgroundImage='url('+test.img+')'

			self.domDetalleTest.empty().append([
				creaObjProp('div', {className:'bl cabecera row', hijos:[
					visual,
					creaObjProp('div', {className:'col-xs-8 data', hijos:[
						creaObjProp('span', {className:'bl titulo', texto:test.ds_test}),
						creaObjProp('span', {className:'bl', hijos:[
							creaObjProp('span', {className:'bold organismo', texto:test.organismo}),
							creaObjProp('span', {texto:test.organismo==null? '': espacioDuro2}),
							creaObjProp('span', {className:'fecha', texto: formato.fechaDDMMYYYY(test.f_examen) }),
							]}),
						creaObjProp('span', {className:'bl bold', texto: self.concatCategoriasTest(test), omiteNulo:true, i:'fa-tags' }),
						creaObjProp('span', {className:'bl', texto:test.numpreguntas+' preguntas/'+test.minutos+' minutos'}),

						creaObjProp('div', {className:'btn-group', hijos:[
							creaObjProp('button', {className:'btn-descarga-test btn btn-primary pull-right', texto:textoBoton, onclick:fnDescargar })
							]})
						]}),
					]}),
				// creaObjProp('hr'),
				// creaObjProp('div', {className:'bl preguntas row'}),
				// creaObjProp('hr'),
				// creaObjProp('div', {className:'bl similares row'}),
				])
		})
	}
VistaTienda.prototype.lanzaTest=function(cd_test){
	var test=buscaFilas(this.testLocales, {cd_test:cd_test})[0]
	app.lanzaTest(test)
	}
//////
VistaTienda.prototype.anhadeATestLocales=function(test){
	this.testLocales.push(test)
	this.salvaTestLocales()
	}
VistaTienda.prototype.salvaTestLocales=function(){
	save('tapp37_listatest', this.testLocales)
	}
VistaTienda.prototype.ordenaPorFecha=function(lista){
	lista.sort(function(a, b){
		var fa=formato.toDate(a.f_creacion)
		var fb=formato.toDate(b.f_creacion)

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
	// this.testLocales=get('tapp_37_listatest') //VistaTienda.prototype.testData()
	this.testLocales=get('tapp37_listatest') //VistaTienda.prototype.testData()
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
VistaTienda.prototype.descargaTest=function(cd_test, xbtn){
	var self=this
	jQuery(xbtn).text('Descargando...').addClass('cargando')
	console.info('Iniciamos descarga test '+cd_test)
	jQuery.post(app.config.url, {accion:'getTest', cd_test:cd_test, cd_usuario:app.cache.usuario.cd_usuario}).success(
		function(data){
			var datos=xeval(data)
			if (datos.retorno==1){

				self.anhadeATestLocales(datos.test)

				jQuery(xbtn).text('Abrir').removeClass('cargando')
				console.info('test '+cd_test+' descargado!, '+datos.test.numpreguntas+' preguntas')
				}
			else
				console.error(data)
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
	var l=['test_0001.js'], lista=[], self=this

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
			self.procesa()
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
VistaMigraTest.prototype.procesa=function(){
	this.test={
		ds_test:'Tests de Preparatic XXII/Examenes',
		organismo:'Administración General del Estado',
		numPreguntas:100,
		minutos:100,
		fallosRestan:.5,
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
