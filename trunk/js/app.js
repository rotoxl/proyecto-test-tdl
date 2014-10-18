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
//////////
function Controlador(){
  this.init()
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
    }

/////
Controlador.prototype.continuarTest=function(){
    this.cargaTest( this.testData() )
    }
Controlador.prototype.cargaTest=function(test){
  new VistaTest(test).toDOM()
  }
Controlador.prototype.cargaVistaInicio=function(){}
Controlador.prototype.cargaVistaMisTest=function(){}
Controlador.prototype.cargaVistaSocial=function(){}
Controlador.prototype.cargaVistaEstadisticas=function(){}
//////////
function Vista(test){
  if (this.id==null) return
  if (this.tipos.indexOf(this.id)==-1 )
      console.error('Tipo de vista desconocido: hay que darlo de alta en Vista.prototype.tipos')
  }
Vista.prototype.tipos=['vistaTest']
Vista.prototype.toDOM=function(){
    var xd=jQuery('#content')
    if (app) app.vistaActiva=this

    xd.append(this.getDOM())
      .removeClass(this.tipos.join(' '))
      .addClass(this.id)

    this.dom=xd
    this.resize()
    this.tareasPostCarga()
    }
Vista.prototype.getDOM=function(){}
Vista.prototype.resize=function(){
  jQuery('#content').height( jQuery(document).innerHeight()- jQuery('#navigation_bar').innerHeight() )
  }
//////////
function VistaTest(test){
    if (test==null) return

    Vista.call(this)

    this.test=test
    this.id='vistaTest'

    this.mapaInicializado=false
    this.examen=this.test.examen
    }
VistaTest.prototype=new Vista
VistaTest.prototype.tareasPostCarga=function(){
  this.cargaPregunta(0)
  this.iniciaTiempo()
  }
VistaTest.prototype.convierteSegundosAHora=function(numSegundos){
  return this.convierteMinutosAHora(numSegundos/60)
  }
VistaTest.prototype.convierteMinutosAHora=function(numMinutos){
  return Math.floor(numMinutos/60)+':'+ lpad( Math.floor(numMinutos) % 60, '0', 2)
  }
VistaTest.prototype.getDOM=function(){
  var self=this
  return [
    creaObjProp('header', {className:'marcadores' , hijos:[
        creaObjProp('div', {className:'btn-group btn-dark', hijos:[
            creaObjProp('button', {className:'btn btn-primary col-md-6 col-sm-6 col-xs-6 dropdown-toggle', 'data-toggle':'dropdown', i:'fa-th', hijos:[
              creaT(' Pregunta '),
              creaObjProp('span', {id:'numPag', texto:1}),
              creaT(' de '+this.test.examen.numPreguntas+' '), 
              creaObjProp('b', {className:'caret'})
              ]}),
            creaObjProp('ul', {id:'mapatest', className:'dropdown-menu animated fadeInRight btn-primary', role:'menu', hijos:[
              creaObjProp('span', {className:'arrow top'}),

              ]}),
            creaObjProp('button', {onclick:function(){self.pausaTiempo()}, className:'btn btn-dark col-md-6 col-sm-6 col-xs-6', i:'fa-clock-o', hijos:[
              creaT(' '),
              creaObjProp('span', {id:'tiempoConsumido', texto:this.convierteSegundosAHora(this.test.examen.segundosConsumidos)}),
              creaT(' de '+this.convierteMinutosAHora(this.test.examen.minutos)),
              creaObjProp('i', {className:'fa fa-pause'}) 
              ]}),
          ]})
        ]}),
    creaObjProp('div', {className:'pregunta'}),
    creaObjProp('footer', {className:'footer respuestas'})
    ]
  }
VistaTest.prototype.resize=function(){
  Vista.prototype.resize.call()
  // jQuery('#content').height( jQuery(document).innerHeight()- jQuery('#navigation_bar').innerHeight() )
  var p=this.dom.find('.pregunta')
  var r=this.dom.find('.respuestas')
  p.height(r.position().top-p.position().top)

  }
VistaTest.prototype.initMapa=function(){
  this.mapaInicializado=true
  var elPorFila=5

  var preg=this.test.preguntas
  // var numfilas=Math.floor(this.test.preguntas.length/elPorFila)
  var col=0,tr=creaObjProp('tr'), trs=[], ta=creaObjProp('table')
  for (var i=0; i<preg.length; i++){
    this.test.preguntas[i].i=i
    if (col>=elPorFila){
      ta.appendChild(tr)
      tr=creaObjProp('tr')
      col=0
      }
    var pra=preg[i]

    var hijo
    if (pra.estrella){
      hijo=this.generaDomEstrella(i+1)
    }
    else 
      hijo=creaObjProp('span', {texto:i+1})

    var self=this
    tr.appendChild( creaObjProp('td', { className:(pra.respuestaUsuario!=null? 'contestada':''), 
                                        id:'mapa_preg'+i, 
                                        hijo:hijo, 
                                        onclick:function(){self.navegaPregunta( jQuery(this).text() ) } }) ) 
    col++
    }
  if (tr.childNodes.length){
    ta.appendChild(tr)
  }

  this.dom.find('#mapatest').append(ta)
  }
VistaTest.prototype.generaDomEstrella=function(i){
  return creaObjProp('span', {className:'fa-stack', i:'fa fa-star fa-stack-2x', hijos:[
        creaObjProp('span', {className:'fa-stack-1x stack-text', texto:i})
        ]})
  }
VistaTest.prototype.actualizaMapa=function(preg){
  var td=jQuery('#mapa_preg'+preg.i)
  if (preg.respuestaUsuario!=null)
    td.addClass('contestada')

  td.empty()
  if (preg.estrella)
    td.append(this.generaDomEstrella(preg.i+1))
  else 
    td.append(creaObjProp('span', {texto:preg.i+1}))
  }
VistaTest.prototype.marcaPreguntaActual=function(){
  jQuery('#mapatest td').removeClass('active')
  jQuery('#mapa_preg'+this.preg.i).addClass('active')
  }
VistaTest.prototype.cargaPregunta=function(i){
  if (!this.mapaInicializado)
    this.initMapa()

  var self=this
  if (i<0 || i>this.test.examen.numPreguntas)
    return
  this.preg=this.test.preguntas[i]

  this.dom.find('.pregunta').append(
    // creaObjProp('div', {className:'wrapper', hijos:[
      creaObjProp('table',{hijos:[
        creaObjProp('tr', {hijos:[
          creaObjProp('td', {className:'clave', onclick:function(){self.toggleEstrella(this)}, i:(this.preg.estrella?'fa-star':'fa fa-star-o')}),
          creaObjProp('td', {className:'valor', texto:this.preg.texto})
          ]}) 
        ]})
      // ]})
    )

  var xr=this.generaDomRespuestas()
  
  this.dom.find('.respuestas').append(
    creaObjProp('table',{hijos:xr})
    )

  this.marcaPreguntaActual()
  }
VistaTest.prototype.generaDomRespuestas=function(){
  var self=this
  var xr=[], letras='ABCDE', estilos=['bg-danger', 'bg-warning', 'bg-success', 'bg-primary', 'bg-info']
  for (var i=0; i<this.preg.respuestas.length; i++){
      xr.push( creaObjProp('tr', {onclick:function(){self.marcaResp(this)}, hijos:[
        creaObjProp('td', {className:'clave '+ estilos[i], texto:letras.substr(i,1) }),
        creaObjProp('td', {className:'valor', texto:this.preg.respuestas[i].texto }),
        ]}))
    }
  if (this.preg.respuestaUsuario!=null){
    jQuery(xr).addClass('atenuada')
    jQuery(xr[this.preg.respuestaUsuario]).removeClass('atenuada').addClass('active')
  }
  return xr

  }
VistaTest.prototype.navegaPregunta=function(iRestar1){
  var i=iRestar1-1
  if (i<0 || i>this.test.examen.numPreguntas)
    return
  this.preg=this.test.preguntas[i]

  var dp=this.dom.find('.pregunta')
  dp.find('.clave i').removeClass('fa-star fa-star-o').addClass(this.preg.estrella?'fa-star':'fa-star-o')
  dp.find('.valor').text(this.preg.texto)

  this.dom.find('#numPag').text(i+1)
  this.dom.find('.respuestas table').empty().append(this.generaDomRespuestas() )

  this.marcaPreguntaActual()
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
    creaObjProp('p', {className:'categoria', texto:md.categoria, i:'fa-graduation-cap fa-fw', omiteNulo:true}),
    creaObjProp('p', {className:'fecha', texto:md.fecha, i:'fa-calendar fa-fw', omiteNulo:true}),
    creaObjProp('p', {className:'organismo', texto:md.organismo, i:'fa-institution fa-fw', omiteNulo:true}),
    creaObjProp('p', {className:'region', texto:md.region, i:'fa-globe fa-fw', omiteNulo:true}),
    ])
  if (md.img)
    this.frmdom.find('.info .visual')[0].src=md.img


  this.frmdom.modal({backdrop:'static', keyboard:false})
  }
VistaTest.prototype.generaEstadisticasPausa=function(){
  var r= {
      estrellas: buscaFilas(this.test.preguntas, {estrella:true}).length,
      noRespondidas: buscaFilas(this.test.preguntas, {respuestaUsuario:null}).length,
      preguntas:this.test.preguntas.length,

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
  for (var i=0; i<this.test.preguntas.length; i++){
      var preg=this.test.preguntas[i]
      if (preg.respuestaUsuario==null)
        nc++
      else if (preg.respuestaUsuario==preg.respuesta)
        a++
      else 
        f++
      }
  var fr=this.test.examen.fallosRestan
  if (fr==null) fr=0

  var tn= (a-(f*fr))/this.test.preguntas.length
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
    console.warn('Segundos consumidos:'+this.examen.segundosConsumidos)

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
    console.log('No hay que actualizar el crono: segRestantes='+sRestantes)
    return
  }
  console.warn('Actualizo crono: segRestantes='+sRestantes)
  jQuery('#tiempoConsumido').text(this.convierteMinutosAHora(this.examen.minutos-minRestantes))
  
  this.minRestantes=minRestantes

  if (sRestantes<=0){
    this.tiempoAcabado()
    clearTimeout(this.crono)
    this.crono=null
    }
  }
////////////
function VistaRepasoTest(test){
    VistaTest.call(this, test)
    }
VistaRepasoTest.prototype=new VistaTest
VistaRepasoTest.prototype
////////////
////////////
////////////
////////////
Controlador.prototype.testData=function(){
    return {
        md: {
            fecha:'04/10/2014',
            titulo:'Pruebas selectivas para el acceso a la condición de Personal Estatutario Fijo (BOCM: 10-09-2012)',
            categoria:'Diplomado Sanitario/Enfermera',

            region:'Comunidad de Madrid',
            organismo:'SaludMadrid/Servicio Madrileño de Salud. Comunidad de Madrid',
            img:'https://193.146.176.77/paginas_propias/servicios/comunicacion/memorias/h2005/Fijos/IMGS/LgSaludMadrid.gif'
            },
        examen: {
            fallosRestan:.25, //para indicar aquello de que cada 4 fallos resta 1 acierto
            minutos:2,
            numPreguntas:6, //redundante, pero vendrá bien para comprobar la integridad
            segundosConsumidos:30,
            },
        preguntas:[{ 
              texto:'¿Cuál de los siguientes estandares de directorios guarda relación con la descripción de servicios de usuario?', 
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
              texto:'Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD: Indicar cuál de las siguientes afirmaciones es cierta en el ámbito de la LOPD:', 
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
                texto:'Cuál de los siguientes derechos de explotación no precisan la realización o autorización por parte del titular de un programa de ordenador, según la ley española de propiedad intelectual:', 
                img:null,
                respuesta:1,
                respuestas:[
                  {texto:'Reproducción total o parcial'},
                  {texto:'La realización de una copia de seguridad'},
                  {texto:'Traducción, adaptación o arreglo'},
                  {texto:'Cualquier forma de distribución pública'},
                  ]
            },{ 
                texto:'especto a la LSSI puede decirse que:', 
                img:null,
                respuesta:3,
                respuestas:[
                  {texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico'},
                  {texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente'},
                  {texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma'},
                  {texto:'Queda prohibido el envío de comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma'},
                  ]
            },{ 
                texto:'¿Cuál de las siguientes no es una distribución de Linux ?', 
                img:null,
                respuesta:3,
                respuestas:[
                  {texto:'Debian'},
                  {texto:'Gentoo'},
                  {texto:'Max'},
                  {texto:'FreeBSD'},
                  ]
            },{ 
                texto:'Dentro del análisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:', 
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


