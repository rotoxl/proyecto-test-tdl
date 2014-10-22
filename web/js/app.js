"use strict"
jQuery.noConflict()

var app
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
		temp=tipo.split(':')
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
//////////
function Controlador(){
	var self=this
	this.init()
	
	var sr=document.location.search+''

	if (sr.indexOf('?token=')==0){
		this.cache.token=sr.substring('?token='.length)

		if (this.cache.token=='666'){
			this.cache.usuario={//id:"118066386467974893999",
								email:"rotoxl@gmail.com",
								verified_email:true,
								// name:"Ernesto Molina Carrón",
								given_name:"Ernesto",
								family_name:"Molina Carrón",
								// link:"https://plus.google.com/118066386467974893999",
								picture:"https://lh6.googleusercontent.com/-yLoUCNmu2qc/AAAAAAAAAAI/AAAAAAAAE3s/d8OsxGzNbeo/photo.jpg",
								// gender:"male"
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
	else{
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

	this.cache={}
	this.cache.categorias=[
			{id:1, ds:'Diplomado Sanitario/Enfermería', i:'fa-stethoscope'},
			{id:2, ds:'Carné de conducir B2', i:'fa-car'},
			{id:3, ds:'Cuerpo Superior de Sistemas y Tecnologías de la Información', i:'fa-file-code-o'},
			]
	}
Controlador.prototype.userDataReceived=function(data){
	this.cache.usuario=data
	save('tapp37_userdata', JSON.stringify(data))
	this.actualizaDomUsuario()
	}
Controlador.prototype.actualizaDomUsuario=function(){
	jQuery('.avatar .pic img').attr('src', this.cache.usuario.picture)
	jQuery('.avatar .nombre').text(this.cache.usuario.given_name)
	// this.abreNavDrawer()
	}
Controlador.prototype.logout=function(){
	disconnectUser(this.cache.token)
	localStorage.removeItem('tapp37_userdata')
	document.location='login.html'
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
	}
//
Controlador.prototype.continuarTest=function(){
	this.cargaTest( VistaTest.prototype.testData() )
	this.cierraNavDrawer()
	}
Controlador.prototype.cargaTest=function(test){
	new VistaTest(test).toDOM()
	}
Controlador.prototype.cargaVistaInicio=function(){
	this.cargaVistaTienda()
	this.abreNavDrawer()
	}
Controlador.prototype.cargaVistaTienda=function(){
	new VistaTienda().toDOM()
	this.cierraNavDrawer()
	}
Controlador.prototype.cargaVistaSocial=function(){}
Controlador.prototype.cargaVistaEstadisticas=function(){}
Controlador.prototype.backButton=function(){
	this.vistaActiva.backButton()
	}
//////////
//Todas las vistas tienen un vista-header y un vista-body
function Vista(){
	if (this.id==null) return
	if (this.tipos.indexOf(this.id)==-1 )
			console.error('Tipo de vista desconocido: hay que darlo de alta en Vista.prototype.tipos')
	}
Vista.prototype.tipos=['vistaTest', 'vistaTienda']
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
//////////
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
function VistaTest(test){
	if (test==null) return
	VistaPantallaCompleta.call(this)

	this.test=test
	this.id='vistaTest'
	this.title=test.md.titulo 

	this.mapaInicializado=false
	this.examen=this.test.examen

	//insertamos la portada y la contraportada
	this.test.preguntas.splice(0,0, null)
	this.test.preguntas.push(null)  
	}
VistaTest.prototype=new VistaPantallaCompleta
VistaTest.prototype.getHeader=function(){
	var self=this
	return creaObjProp('header', {className:'vista-header marcadores' , hijos:[
				creaObjProp('div', {className:'btn-group btn-dark', hijos:[
						creaObjProp('button', {className:'btn btn-primary col-md-6 col-sm-6 col-xs-6 dropdown-toggle', 'data-toggle':'dropdown', i:'fa-th', hijos:[
							creaT(' Pregunta '),
							creaObjProp('span', {id:'numPag', texto:1}),
							creaT(' de '+this.test.examen.numPreguntas+' '), 
							creaObjProp('b', {className:'caret'})
							]}),
						creaObjProp('ul', {id:'mapatest', className:'btn2_1 dropdown-menu XXanimated XXfadeInRight btn-primary', role:'menu', hijos:[
							creaObjProp('span', {className:'arrow top'}),

							]}),
						creaObjProp('button', {onclick:function(){self.pausaTiempo()}, className:'btn btn-dark col-md-6 col-sm-6 col-xs-6', i:'fa-clock-o', hijos:[
							creaT(' '),
							creaObjProp('span', {id:'tiempoConsumido', texto:this.convierteSegundosAHora(this.test.examen.segundosConsumidos)}),
							creaT(' de '+this.convierteMinutosAHora(this.test.examen.minutos)),
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
	var xpregActiva=(this.test.examen.preguntaActiva) || 1
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
					creaObjProp('td', {className:'valor', texto:preg.texto})
					]}) 
				]})
	}
VistaTest.prototype.generaDomRespuestas=function(preg){
	var self=this
	var xr=[], letras='ABCDE', estilos=['bg-danger', 'bg-warning', 'bg-success', 'bg-info', 'bg-primary']
	for (var i=0; i<preg.respuestas.length; i++){
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
	var md=this.test.md
	this.frmdom.find('.info .details').empty().append([
		// creaObjProp('p', {className:'header', texto:'Metadatos disponibles'}),
		creaObjProp('p', {className:'titulo', texto:md.titulo, i:'fa-bookmark fa-fw', omiteNulo:true}),
		creaObjProp('p', {className:'categoria', texto:app.cache.categorias[md.categoria], i:'fa-graduation-cap fa-fw', omiteNulo:true}),
		creaObjProp('p', {className:'fecha', texto:md.fecha, i:'fa-calendar fa-fw', omiteNulo:true}),
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
		else if (preg.respuestaUsuario==preg.respuesta)
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
//////
VistaTest.prototype.testData=function(){
	return {
		md: {
				fecha:'04/10/2014',
				titulo:'Pruebas selectivas para el acceso a la condición de Personal Estatutario Fijo (BOCM: 10-09-2012)',
				id_categoria:1, //1-enfermería, 3-tic

				region:'Comunidad de Madrid',
				organismo:'SaludMadrid/Servicio Madrileño de Salud',
				img:'http://1.bp.blogspot.com/-20rV8pKsdjQ/UJd4Ss6XSII/AAAAAAAAG0c/3Wu9Z25s4_A/s1600/SALUD_MADRID.jpg',
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
					texto:'1-¿Cuál de los siguientes estandares de directorios guarda relación con la descripción de servicios de usuario?', 
					img:null,
					respuesta:3,
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
					respuesta:1,
					respuestas:[
						{texto:'Reproducción total o parcial'},
						{texto:'La realización de una copia de seguridad'},
						{texto:'Traducción, adaptación o arreglo'},
						{texto:'Cualquier forma de distribución pública'},
						]
				},{ 
					texto:'4-Respecto a la LSSI puede decirse que:', 
					img:null,
					respuesta:3,
					respuestas:[
						{texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico'},
						{texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente'},
						{texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma'},
						{texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma'},
						]
				},{ 
					texto:'5-¿Cuál de las siguientes no es una distribución de Linux ?', 
					img:null,
					respuesta:3,
					respuestas:[
						{texto:'Debian'},
						{texto:'Gentoo'},
						{texto:'Max'},
						{texto:'FreeBSD'},
						]
				},{ 
					texto:'6-Dentro del análisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:', 
					img:null,
					respuesta:3,
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
////////////////////////

function VistaRepasoTest(test){
	VistaTest.call(this, test)
	}
VistaRepasoTest.prototype=new VistaTest
////////////////////////////////////////////////

function VistaTienda(){
	this.id='vistaTienda'
	this.cat=null
	app.muestraNodoEnNavDrawer('liVistaTienda')

	this.leeTestLocales()
	this.entornoLocal=true
	}
VistaTienda.prototype=new Vista
VistaTienda.prototype.getHeader=function(){
	var self=this
	return creaObjProp('header', {className:'btn-primary vista-header' , hijos:[
			creaObjProp('div', {className:'btn-group', hijos:[
					creaObjProp('button', {className:'btn btn-primary col-md-4 col-sm-4 col-xs-4 dropdown-toggle', 'data-toggle':'dropdown', hijos:[
						creaT(' Categorías '),
						creaObjProp('b', {className:'caret'})
						]}),
					creaObjProp('ul', {id:'categorias', className:'dropdown-menu animated fadeInRight btn3_1', role:'menu', hijos:[
						creaObjProp('span', {className:'arrow top'}),

						]}),
			//     creaObjProp('button', {onclick:function(){self.pausaTiempo()}, className:'btn btn-dark col-md-6 col-sm-6 col-xs-6', i:'fa-clock-o', hijos:[
			//       creaT(' '),
			//       creaObjProp('span', {id:'tiempoConsumido', texto:this.convierteSegundosAHora(this.test.examen.segundosConsumidos)}),
			//       creaT(' de '+this.convierteMinutosAHora(this.test.examen.minutos)),
			//       creaObjProp('i', {className:'fa fa-pause'}) 
			//       ]}),
			//   ]})
			]}),
			creaObjProp('div', {className:'btn-group', hijos:[
				creaObjProp('button', {texto:'Dispositivo', i:'fa-download', className:'btn-primary active'}),
				creaObjProp('button', {texto:'Tienda', i:'fa-cloud', className:'btn-primary active'}),
				]})
		]})
	}
VistaTienda.prototype.getBody=function(){
	return creaObjProp('div', {className:'vista-body cargando'})
	}
VistaTienda.prototype.tareasPostCarga=function(){
	this.cargaListaCategorias()
	this.cargaListaTests(this.testLocales)
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
		xl.push( creaObjProp('li', {hijo:creaObjProp('a', {texto:cat.ds, 'data-id':cat.id, onclick:fn})} ) )
		}
	jQuery('ul#categorias').append(xl)
	}
VistaTienda.prototype.navegaCat=function(idcat){
	//dejamos una pequeña lista de tests visibles por categoría, y mostramos el botón 'cargar más'
	this.backButton()

	this.cat=buscaFilas(app.cache.categorias, {id:idcat})[0]
	this.cambiaHeaderApp(this.cat.ds)

	var blSel=this.domBody.find('.bloque.cat#cat-'+this.cat.id)
	this.domBody.find('.bloque.cat').not(blSel).hide()
	this.cargarMas()
	}
VistaTienda.prototype.backButton=function(){
	if (this.cat){
		this.cat=null
		this.restauraHeaderApp() 

		//dejamos una pequeña lista de tests visibles por categoría, y mostramos el botón 'cargar más'
		var bloques=this.domBody.find('.bloque.cat').show()
		bloques.find('.card').not('.main').remove()
		bloques.find('.titulo .cargarMas').show()
		bloques.find('.cargarMas.aunMas').remove()
		}
	} 
VistaTienda.prototype.generaBtnCargarMas=function(cssAdicional){
	var self=this
	var fnNavega=function(){
			self.navegaCat(jQuery(this).closest('.bloque').data('id'))
			}
	return creaObjProp('button', {className:'cargarMas btn btn-primary '+cssAdicional, texto:'Más', onclick:fnNavega} )
	}
VistaTienda.prototype.cargaListaTests=function(lista){
	var xl=[]

	for (var i=0; i<app.cache.categorias.length; i++){
		var cat=app.cache.categorias[i]
		var sl=buscaFilas(lista, {id_categoria:cat.id}).slice(0,4)
		
		var d=creaObjProp('section', {id:'cat-'+cat.id, className:'bloque cat', 'data-id':cat.id, hijos:[
			creaObjProp('h4', {className:'titulo',texto:cat.ds, 'data-id':cat.cd, hijo:this.generaBtnCargarMas() })
			]} )

		for (var j=0;  j<sl.length; j++){
			var t=sl[j]

			d.appendChild(
				this._generaDomTest(t, j, cat)
				)
			}

		xl.push( d )
		}

	this.domBody.addClass('flowable').append(xl).removeClass('cargando')
	}
VistaTienda.prototype._generaDomTest=function(test, j, cat){
	return creaObjProp('article', {id:'test-'+test.id, 'data-id':test.id, className:'main card', hijos:[
						creaObjProp('div', {className:'body', i:cat.i}),
						creaObjProp('footer', {hijos:[
											creaObjProp('span', {className:'bl love', texto:test.favorito, i:(test.favorito>0?'fa-heart':'fa-heart-o') }),
											creaObjProp('span', {className:'bl nombre', texto:test.ds}) 
											]})
						]})
	}
VistaTienda.prototype.cargarMas=function(){
	var tanda=2
	//this.cat
	var blCat=this.domBody.find('.cat#cat-'+this.cat.id)

	blCat.find('.titulo .cargarMas').hide()//el principal lo ocultamos, el resto se eliminan
	blCat.find('.cargarMas.aunMas').remove()

	var num=blCat.find('article.card').length
	var sl=buscaFilas(this.testLocales, {id_categoria:this.cat.id})

	var aPintar=sl.slice(num,num+tanda)
	for (var j=0;  j<aPintar.length; j++){
		blCat.append( this._generaDomTest(aPintar[j], j, this.cat ) )
		}

	if (sl.length>num+tanda){
		blCat.append( this.generaBtnCargarMas('aunMas') )
		}
	}
//////
VistaTienda.prototype.leeTestTienda=function(cat, fnCallBack){
	return [
			{id:1, ds:'Test Enfermería 1', favorito:13, id_categoria:1, importe:0, url:'https://s3-sa-east-1.amazonaws.com/tax-i/include/static/style-metronic.css'},
			{id:12, ds:'Test Enfermería 2', favorito:1, id_categoria:1, importe:0, url:'https://s3-sa-east-1.amazonaws.com/tax-i/include/static/select2.css'},
			{id:19, ds:'Test Enfermería 3', favorito:0, id_categoria:1, importe:.6},
			{id:99, ds:'Test Enfermería 4', favorito:1, id_categoria:1, importe:.2},
			{id:88, ds:'Paquete 10 Tests Enfermería/legislación', favorito:10, id_categoria:1, importe:.60, contenido:[
					{ds:'Legislación 1'},
					{ds:'Legislación 2'},
					{ds:'Legislación 3'},
					{ds:'Legislación 4'},
					{ds:'Legislación 5'},
				]},
				},
			]
}
//////
VistaTienda.prototype.salvaTestLocales=function(){
	save('tapp_37_listatest', this.testLocales)
	}
VistaTienda.prototype.leeTestLocales=function(fnCallBack){
	this.testLocales=get('tapp_37_listatest') //VistaTienda.prototype.testData()
	if (! (this.testLocales instanceof Array) )
		this.testLocales=[]
	this.testLocales.sort(function(a,b){
					if (a.favorito==b.favorito)
						return 0
					else if (a.favorito>b.favorito)
						return -1
					else
						return 1
					})
	fnCallBack(this.testLocales)
	}
VistaTienda.prototype.descargaTest=function(){}
//////
VistaTienda.prototype.testData=function(){
	return [
			{id:1, ds:'Test Enfermería 1', favorito:13, id_categoria:1, nota:5.5},
			{id:12, ds:'Test Enfermería 2', favorito:1, id_categoria:1, nota:6},
			{id:19, ds:'Test Enfermería 3', favorito:0, id_categoria:1},
			{id:99, ds:'Test Enfermería 4', favorito:1, id_categoria:1},
			{id:999, ds:'Test Enfermería 99', favorito:3, id_categoria:1},
			{id:1000, ds:'Test Enfermería 100', favorito:5, id_categoria:1},
			{id:1001, ds:'Test Enfermería 101', favorito:7, id_categoria:1},

			{id:2, ds:'Test Autoescuela ABC', favorito:0,id_categoria:2},
			{id:3, ds:'Test Autoescuela DEF', favorito:0,id_categoria:2},
			{id:4, ds:'Test Autoescuela 3', favorito:0,  id_categoria:2},
			{id:5, ds:'Test Autoescuela 4', favorito:0,  id_categoria:2},
			{id:6, ds:'Test Autoescuela 5', favorito:0,  id_categoria:2},
			{id:7, ds:'Test Autoescuela 99', favorito:0, id_categoria:2},

			{id:201, ds:'Test TIC 1',  favorito:1, id_categoria:3},
			{id:301, ds:'Test TIC 11', favorito:3, id_categoria:3},
			{id:401, ds:'Test TIC 9',  favorito:2, id_categoria:3},
			{id:501, ds:'Test TIC 10', favorito:5, id_categoria:3},
			{id:601, ds:'Test TIC 11', favorito:7, id_categoria:3},
			{id:701, ds:'Test TIC 12', favorito:11,id_categoria:3},
		]
	}


