/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 59 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Existe en Espa&ntilde;a alg&uacute;n centro operativo para realizar Pruebas de Conformidad de acuerdo con el plan CTS de la Uni&oacute;n Europea?:";
 choices[0]= new Array();
 choices[0][0] = "S&iacute;, ya existen varios en funcionamiento en Espa&ntilde;a";
 choices[0][1] = "No, por no haberse implantado este plan en Espa&ntilde;a";
 choices[0][2] = "No, s&oacute;lo existe un centro experimental creado en Bruselas desde 1993";
 choices[0][3] = "No, el plan CTS no se ha puesto todav&iacute;a en pr&aacute;ctica";
 answers[0] = choices[0][0];
 units[0] = "42";
 comments[0] = "Id Pregunta: 59. ";


//  Id pregunta: 71 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas ignora la cuant&iacute;a de la diferencia y s&oacute;lo se&ntilde;ala si existe o no?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo Promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "Permutaci&oacute;n";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][0];
 units[1] = "34";
 comments[1] = "Id Pregunta: 71. ";


//  Id pregunta: 192 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponde con una soluci&oacute;n ERP (Enterprise Resource Planning)?";
 choices[2]= new Array();
 choices[2][0] = "Alto grado de modularidad";
 choices[2][1] = "Homogeneizaci&oacute;n de Procesos Corporativos";
 choices[2][2] = "Facilidad de implementaci&oacute;n en corto plazo";
 choices[2][3] = "Integraci&oacute;n total de &aacute;reas organizativas";
 answers[2] = choices[2][2];
 units[2] = "21";
 comments[2] = "Id Pregunta: 192. Examen TIC MAP B 2004";


//  Id pregunta: 342 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La red de comunicaci&oacute;n en Y de una organizaci&oacute;n es:";
 choices[3]= new Array();
 choices[3][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[3][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[3][2] = "Cada sujeto se comunica con todos los restantes";
 choices[3][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[3] = choices[3][0];
 units[3] = "23";
 comments[3] = "Id Pregunta: 342. ";


//  Id pregunta: 506 Año de creación de pregunta: 2003-01-01
 questions[4]= "5)  La Decisi&oacute;n 87/95 /CEE cubre:";
 choices[4]= new Array();
 choices[4][0] = "Las especificaciones t&eacute;cnicas para equipos terminales conectados a redes p&uacute;blicas de tlecomunicaci&oacute;n";
 choices[4][1] = "Las especificaciones funcionales de los servicios ofrecidos sobre redes p&uacute;blicas de telecomunicaci&oacute;n";
 choices[4][2] = "Las especificaciones de los equipos que formen parte de las redes de telecomunicaci&oacute;n en s&iacute; mismas";
 choices[4][3] = "Ninguna de las repuestas anteriores es cierta";
 answers[4] = choices[4][1];
 units[4] = "40";
 comments[4] = "Id Pregunta: 506. ";


//  Id pregunta: 756 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  Respecto a los &quot;web services&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[5]= new Array();
 choices[5][0] = "Se describen mediante el lenguaje WSDL";
 choices[5][1] = "Para usarlos han de publicarse siempre en un registro UDDI";
 choices[5][2] = "Pueden interaccionar clientes  y servicios de distintas tecnolog&iacute;as";
 choices[5][3] = "Utilizan el protocolo SOAP";
 answers[5] = choices[5][1];
 units[5] = "51";
 comments[5] = "Id Pregunta: 756. ";


//  Id pregunta: 774 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  Indique cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP(Symmetric MultiProcessing) y MPP (Massively Paralleling MultiProcessing) es falsa:";
 choices[6]= new Array();
 choices[6][0] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[6][1] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido en segmentos que se comuniquen entre s&iacute;";
 choices[6][2] = "MPP no sufre el cuello de botella que sufre SMP en el acceso a memoria";
 choices[6][3] = "Un cluster est&aacute; compuesto por dos o m&aacute;s ordenadores que se comportan coo una sola m&aacute;quina";
 answers[6] = choices[6][0];
 units[6] = "45";
 comments[6] = "Id Pregunta: 774. TAI 2004";


//  Id pregunta: 816 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Asociados a una red sem&aacute;ntica hay 2 procedimientos que permiten proporcionar respuestas navegando por su estructura. Estos procedimientos son:";
 choices[7]= new Array();
 choices[7][0] = "Herencia e inferencia";
 choices[7][1] = "Herencia y emparejamiento";
 choices[7][2] = "Emparejamiento y equiparaci&oacute;n";
 choices[7][3] = "Equiparaci&oacute;n y herencia";
 answers[7] = choices[7][1];
 units[7] = "63";
 comments[7] = "Id Pregunta: 816. ";


//  Id pregunta: 819 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Seg&uacute;n la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, los contratos celebrados por la v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[8]= new Array();
 choices[8][0] = "El lugar en que est&eacute; establecido el prestador de servicios";
 choices[8][1] = "El lugar que figure en el registro mercantil";
 choices[8][2] = "El lugar en que &eacute;ste tenga su residencia habitual";
 choices[8][3] = "El lugar que figure en la cabecera de la p&aacute;gina";
 answers[8] = choices[8][2];
 units[8] = "30";
 comments[8] = "Id Pregunta: 819. art&iacute;culo 29";


//  Id pregunta: 914 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; diferencia hay entre las arquitecturas peer-to-peer y cliente/servidor?:";
 choices[9]= new Array();
 choices[9][0] = "En una arquitectura peer-to-peer un PC puede actuar simult&aacute;neamente como servidor y cliente";
 choices[9][1] = "En una arquitectura peer-to-peer las aplicaciones residen completamente en cada ordenador";
 choices[9][2] = "En una arquitectura cliente/servidor s&oacute;lo la presentaci&oacute;n reside en el cliente";
 choices[9][3] = "No hay diferencia; son la misma arquitectura";
 answers[9] = choices[9][0];
 units[9] = "50";
 comments[9] = "Id Pregunta: 914. ";


//  Id pregunta: 994 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  DIMM y SIMM son:";
 choices[10]= new Array();
 choices[10][0] = "2 formas de paralelismo en ordenadores (Distributed y Single)";
 choices[10][1] = "2 formas de gesti&oacute;n de memoria (Memory Management)";
 choices[10][2] = "2 tipos de encapsulado de memoria (Dual y Single)";
 choices[10][3] = "2 organismos de estandarizaci&oacute;n para Internet (Internet &amp; MultiMedia)";
 answers[10] = choices[10][2];
 units[10] = "47";
 comments[10] = "Id Pregunta: 994. ";


//  Id pregunta: 1017 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  El Gartner Group:";
 choices[11]= new Array();
 choices[11][0] = "Es una organizaci&oacute;n de expertos que analiza las diferentes tendencias en base a estimaciones porcentuales.";
 choices[11][1] = "Es una organizaci&oacute;n de normalizaci&oacute;n en tecnolog&iacute;as de la informaci&oacute;n.";
 choices[11][2] = "Est&aacute; constitu&iacute;da como una organizaci&oacute;n de usuarios Unix que analiza y eval&uacute;a los productos que aparecen en el mercado sobre dicho sistema operativo.";
 choices[11][3] = "Es una organizaci&oacute;n que presenta benchmarks sobre equipos Unix.";
 answers[11] = choices[11][0];
 units[11] = "";
 comments[11] = "Id Pregunta: 1017. ";


//  Id pregunta: 1041 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  El objetivo principal de la miner&iacute;a de datos es:";
 choices[12]= new Array();
 choices[12][0] = "Descubrir el conocimiento oculto en grandes vol&uacute;menes de datos y expresarlo de forma inteligible.";
 choices[12][1] = "Reorganizar adecuadamente los grandes vol&uacute;menes de datos.";
 choices[12][2] = "Tener copias de seguridad fiables y r&aacute;pidas de todos y cada uno de los datos de que se dispone.";
 choices[12][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[12] = choices[12][0];
 units[12] = "68";
 comments[12] = "Id Pregunta: 1041. ";


//  Id pregunta: 1397 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Un sistema inform&aacute;tico SCADA es:";
 choices[13]= new Array();
 choices[13][0] = "un sistema de supervisi&oacute;n, control y adquisici&oacute;n de datos";
 choices[13][1] = "un sistema de procesamiento paralelo optimizado para c&aacute;lculo matem&aacute;tico";
 choices[13][2] = "un sistema &uacute;nico multiprocesador que experimenta el uso del plasma en la construcci&oacute;n de CPUs m&aacute;s r&aacute;pidas";
 choices[13][3] = "un sistema de realidad virtual con perif&eacute;ricos de inmersi&oacute;n en la escena y retorno de la informaci&oacute;n de los sensores";
 answers[13] = choices[13][0];
 units[13] = "49";
 comments[13] = "Id Pregunta: 1397. ";


//  Id pregunta: 1485 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[14]= new Array();
 choices[14][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[14][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[14][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[14][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[14] = choices[14][2];
 units[14] = "59";
 comments[14] = "Id Pregunta: 1485. JCED - Preparatic XVII";


//  Id pregunta: 1697 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  Indicar la respuesta falsa:";
 choices[15]= new Array();
 choices[15][0] = "La profundidad de color es el m&aacute;ximo n&uacute;mero de colores representables";
 choices[15][1] = "El n&uacute;mero de bits de un procesador gr&aacute;fico es independiente de la profundidad o resoluci&oacute;n";
 choices[15][2] = "La resoluci&oacute;n es el n&uacute;mero m&iacute;nimo de pixels que se muestran en pantalla (Pixels en horizontal x Pixels en vertical)";
 choices[15][3] = "La frecuencia de refresco es el n&uacute;mero de veces que se renueva la informaci&oacute;n en pantalla por segundo";
 answers[15] = choices[15][2];
 units[15] = "47";
 comments[15] = "Id Pregunta: 1697. ";


//  Id pregunta: 1892 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Tres discos duros con una direcci&oacute;n de red &uacute;nica y propia y sirviendo ficheros a usuarios de estaciones de trabajo en LAN es una";
 choices[16]= new Array();
 choices[16][0] = "SAN";
 choices[16][1] = "NAS";
 choices[16][2] = "RAID";
 choices[16][3] = "cabina de discos";
 answers[16] = choices[16][1];
 units[16] = "48";
 comments[16] = "Id Pregunta: 1892. ";


//  Id pregunta: 1944 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Cuando se habla de SAX en el &aacute;mbito del lenguaje XML, se hace referencia a:";
 choices[17]= new Array();
 choices[17][0] = "Una API que define un modelo basado en eventos, y que trabaja invocando las respuestas de las interfaces a medida que van apareciendo estos eventos durante el proceso de an&aacute;lisis del documento";
 choices[17][1] = "Una API que proporciona una representaci&oacute;n de los documentos XML en forma de &aacute;rbol, permitiendo el recorrido y manipulaci&oacute;n de los datos";
 choices[17][2] = "Un lenguaje para establecer restricciones en los documentos XML";
 choices[17][3] = "Un mecanismo para invocaci&oacute;n remota de procedimientos (m&eacute;todos) utilizando XML como forma de comunicaci&oacute;n";
 answers[17] = choices[17][0];
 units[17] = "69";
 comments[17] = "Id Pregunta: 1944. ";


//  Id pregunta: 1951 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Qu&eacute; es un &quot;Parser&quot; XML?";
 choices[18]= new Array();
 choices[18][0] = "Un m&oacute;dulo o programa que se ocupa de archivar en local los c&oacute;digos XML";
 choices[18][1] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n externa";
 choices[18][2] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n interna";
 choices[18][3] = "Un m&oacute;dulo o programa que se ocupa de archivar en la correspondiente Base de Datos los c&oacute;digos XML";
 answers[18] = choices[18][2];
 units[18] = "69";
 comments[18] = "Id Pregunta: 1951. ";


//  Id pregunta: 2004 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  Si una entidad reconocida como independiente, muestra la conformidad de una empresa, producto... con los requisitos definidos en normas o especificaciones t&eacute;cnicas, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Normalizaci&oacute;n";
 choices[19][1] = "Certificaci&oacute;n";
 choices[19][2] = "ISO 9001";
 choices[19][3] = "Acuerdo de nivel de servicio";
 answers[19] = choices[19][1];
 units[19] = "87";
 comments[19] = "Id Pregunta: 2004. ";


//  Id pregunta: 2017 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  Dentro de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3, &iquest;cu&aacute;l de las siguientes opciones es una extensi&oacute;n del modelo entidad/relaci&oacute;n?";
 choices[20]= new Array();
 choices[20][0] = "Definici&oacute;n de &iacute;ndices";
 choices[20][1] = "Generalizaci&oacute;n";
 choices[20][2] = "Entidades deductivas";
 choices[20][3] = "Entidades hist&oacute;ricas";
 answers[20] = choices[20][1];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2017. Examen TIC MAP B 2004";


//  Id pregunta: 2283 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  El modelo de ciclo de vida en espiral:";
 choices[21]= new Array();
 choices[21][0] = "No permite detectar errores en las primeras fases";
 choices[21][1] = "Se adapta bien a las metodolog&iacute;as orientadas a objetos";
 choices[21][2] = "Implica procedimientos separados para el desarrollo de los programas y su mantenimiento";
 choices[21][3] = "Tiende a pasar por alto los factores de riesgo";
 answers[21] = choices[21][1];
 units[21] = "76";
 comments[21] = "Id Pregunta: 2283. ";


//  Id pregunta: 2354 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Entre las causas m&aacute;s habituales que provocan el descontento de los usuarios respecto de los productos de software obtenidos tenemos:";
 choices[22]= new Array();
 choices[22][0] = "Mantenimiento permanente.";
 choices[22][1] = "Coste cerrado del producto.";
 choices[22][2] = "Necesidades no satisfechas por la dificultad del producto para adaptarse a otros requerimientos.";
 choices[22][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas.";
 answers[22] = choices[22][2];
 units[22] = "91";
 comments[22] = "Id Pregunta: 2354. ";


//  Id pregunta: 2363 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Entre los elementos de un diagrama de flujo de datos tenemos:";
 choices[23]= new Array();
 choices[23][0] = "Entidad externa, proceso, almac&eacute;n de datos y diagrama general";
 choices[23][1] = "Entidad externa, almac&eacute;n de datos y flujo de datos";
 choices[23][2] = "Entidad externa, almac&eacute;n de datos, proceso y flujo de datos";
 choices[23][3] = "Almac&eacute;n de datos, proceso, flujo de datos y diagrama general";
 answers[23] = choices[23][2];
 units[23] = "81";
 comments[23] = "Id Pregunta: 2363. ";


//  Id pregunta: 2417 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  El m&eacute;todo de recuperaci&oacute;n de la informaci&oacute;n basado en ficheros auxiliares de t&eacute;rminos (claves o &iacute;ndices  de palabras) o ficheros de apuntadores (referencias de los documentos base) es propio de:";
 choices[24]= new Array();
 choices[24][0] = "Modelo booleano";
 choices[24][1] = "Indexaci&oacute;n y recuperaci&oacute;n autom&aacute;tica vectorial";
 choices[24][2] = "&Iacute;ndices invertidos";
 choices[24][3] = "Retroalimentaci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "96";
 comments[24] = "Id Pregunta: 2417. ";


//  Id pregunta: 2443 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  Las herramientas CASE se emplean con objeto de:";
 choices[25]= new Array();
 choices[25][0] = "Aumentar la productividad";
 choices[25][1] = "Controlar riesgos";
 choices[25][2] = "Asegurar la calidad";
 choices[25][3] = "Reutilizar c&oacute;digo";
 answers[25] = choices[25][0];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2443. ";


//  Id pregunta: 2501 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Sobre la cardinalidad de un tipo entidad podemos decir:";
 choices[26]= new Array();
 choices[26][0] = "Es el n&uacute;mero de ocurrencias de un tipo de entidad que se pueden interrelacionar con cada ocurrencia de los otros tipos de entidad en un determinado tipo de interrelaci&oacute;n";
 choices[26][1] = "Se habla de una cardinalidad m&aacute;xima y m&iacute;nima";
 choices[26][2] = "En las interrelaciones binarias el tipo de correspondencia se deduce directamente a partir de los tipos de entidad involucrada";
 choices[26][3] = "Todas las respuestas anteriores son ciertas";
 answers[26] = choices[26][3];
 units[26] = "80";
 comments[26] = "Id Pregunta: 2501. ";


//  Id pregunta: 2589 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  En el Mantenimiento de sistemas de informaci&oacute;n en METRICA V3, la tarea que tiene por objeto el mantenimiento de un cat&aacute;logo que constituye un medio para la comunicaci&oacute;n entre los usuarios y el responsable de mantenimiento, es:";
 choices[27]= new Array();
 choices[27][0] = "Estad&iacute;stica e Inventario de Cambios.";
 choices[27][1] = "Registro de cambios.";
 choices[27][2] = "Registro de la petici&oacute;n.";
 choices[27][3] = "Catalogo de peticiones.";
 answers[27] = choices[27][2];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2589. Junta Andaluc&iacute;a";


//  Id pregunta: 2590 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  En la planificaci&oacute;n de Sistemas de informaci&oacute;n seg&uacute;n METRICA V3 en relaci&oacute;n con la actividad Estudio de Informaci&oacute;n Relevante, PSI3, La Definici&oacute;n de Requisitos, PSI4, y el Estudio de la situaci&oacute;n actual, PSI5:";
 choices[28]= new Array();
 choices[28][0] = "Dado que los resultados de la actividad estudio de la informaci&oacute;n relevante, PSI3, debe tenerse en cuenta para la definici&oacute;n de Requisitos, PSI4, esta &uacute;ltima s&oacute;lo puede llevarse a cabo una vez finalizada la anterior.";
 choices[28][1] = "Aunque los resultados de la actividad PSI3 debe tenerse en cuenta para la PSI4, ambas pueden realizarse en paralelo junto a PSI5.";
 choices[28][2] = "La, actividades PSI3 p PSI4 deben preceder a PSI5.";
 choices[28][3] = "El orden de realizaci&oacute;n de PSI3 y PSI4 debe preceder a PSI5.";
 answers[28] = choices[28][1];
 units[28] = "86";
 comments[28] = "Id Pregunta: 2590. Junta Andaluc&iacute;a";


//  Id pregunta: 2891 Año de creación de pregunta: 2005-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes servicios no ser&aacute; considerado un servicio b&aacute;sico a prestar dentro de la ed SARA (Intranet Administrativa)?:";
 choices[29]= new Array();
 choices[29][0] = "Servicio de DNS";
 choices[29][1] = "Servicio de Foros de discusi&oacute;n";
 choices[29][2] = "Servicio de Videoconferencia";
 choices[29][3] = "Servicio de Correo electr&oacute;nico";
 answers[29] = choices[29][2];
 units[29] = "113,44";
 comments[29] = "Id Pregunta: 2891. ";


//  Id pregunta: 2892 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  La soluci&oacute;n adoptada para la implantaci&oacute;n del servicio de correo electr&oacute;nico dentro del proyecto de la Intranet Administrativa se basa en:";
 choices[30]= new Array();
 choices[30][0] = "Correo SMTP , migrando las entidades que utilicen X.400  a SMTP";
 choices[30][1] = "Correo X.400, migrando las entidades que utilicen SMTP a X.400";
 choices[30][2] = "Correo SMTP con incorporaci&oacute;n de pasarelas X.400-SMTP";
 choices[30][3] = "No se ha adoptado ninguna soluci&oacute;n";
 answers[30] = choices[30][2];
 units[30] = "113,44";
 comments[30] = "Id Pregunta: 2892. ";


//  Id pregunta: 2923 Año de creación de pregunta: 2004-01-01
 questions[31]= "32)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[31]= new Array();
 choices[31][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[31][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[31][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[31][3] = "No";
 answers[31] = choices[31][0];
 units[31] = "100";
 comments[31] = "Id Pregunta: 2923. Similar a examen TIC SS A 2003";


//  Id pregunta: 2997 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al protocolo IPv6?";
 choices[32]= new Array();
 choices[32][0] = "Maneja direcciones de 16 bytes";
 choices[32][1] = "La cabecera del protocolo se ha ampliado respecto a la de IPv4";
 choices[32][2] = "Incluye funciones de autenticaci&oacute;n";
 choices[32][3] = "Incluye funciones de encriptaciones";
 answers[32] = choices[32][1];
 units[32] = "100";
 comments[32] = "Id Pregunta: 2997. ";


//  Id pregunta: 3059 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  El l&aacute;ser, como fuente de luz, es:";
 choices[33]= new Array();
 choices[33][0] = "Un oscilador &oacute;ptico basado en la formaci&oacute;n de una onda electromagn&eacute;tica confinada dentro de una cavidad";
 choices[33][1] = "Un rayo luminoso compuesto de ondas de diversas frecuencias";
 choices[33][2] = "Un dispositivo &oacute;ptico con ganancia interna y voltaje de ruptura ";
 choices[33][3] = "Un dispositivo utilizado para seleccionar los componentes de una se&ntilde;al de acuerdo con sus frecuencias";
 answers[33] = choices[33][0];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3059. ";


//  Id pregunta: 3086 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Podemos definir protocolo como:";
 choices[34]= new Array();
 choices[34][0] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n entre entidades heterog&eacute;neas, tanto en la transmisi&oacute;n como en el control y recuperaci&oacute;n de errores";
 choices[34][1] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n  entre entidades homog&eacute;neas";
 choices[34][2] = "Conjunto de reglas responsables de la comunicaci&oacute;n directa entre 2 sistemas a trav&eacute;s del medio f&iacute;sico que los mantiene conectados";
 choices[34][3] = "Conjunto de reglas que permiten identificar de forma &uacute;nica e inequ&iacute;voca a un nodo o host";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3086. ";


//  Id pregunta: 3150 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de la seguridad en el correo electr&oacute;nico?:";
 choices[35]= new Array();
 choices[35][0] = "Los usuarios MOSS y PEM necesitan certificados X.509";
 choices[35][1] = "PEM requiere que primero se firme el contenido del correo electr&oacute;nico y, a continuaci&oacute;n, se encripte";
 choices[35][2] = "PEM restringe su uso al entorno texto";
 choices[35][3] = "La extension de PEM con MIME se denomina MOSS";
 answers[35] = choices[35][0];
 units[35] = "106";
 comments[35] = "Id Pregunta: 3150. ";


//  Id pregunta: 3198 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  DVB/DAVIC y DOCSIS son est&aacute;ndares de:";
 choices[36]= new Array();
 choices[36][0] = "tecnolog&iacute;a inal&aacute;mbrica";
 choices[36][1] = "m&oacute;dems de cable";
 choices[36][2] = "tecnolog&iacute;a xDSL";
 choices[36][3] = "grabaci&oacute;n cd CDROMs";
 answers[36] = choices[36][1];
 units[36] = "105";
 comments[36] = "Id Pregunta: 3198. ";


//  Id pregunta: 3547 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  En notaci&oacute;n Kendall A/B/X/Y/Z: ";
 choices[37]= new Array();
 choices[37][0] = "B especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[37][1] = "A especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[37][2] = "Z especifica la disciplina de cola.";
 choices[37][3] = "Todas las anteriores son v&aacute;lidas.";
 answers[37] = choices[37][3];
 units[37] = "";
 comments[37] = "Id Pregunta: 3547. Kendall T&ordm; Colas";


//  Id pregunta: 3551 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  En relaci&oacute;n con la prestaci&oacute;n de servicios de telecomunicaciones en Espa&ntilde;a, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[38]= new Array();
 choices[38][0] = "Est&aacute; liberalizada la provisi&oacute;n de servicios, pero no la instalaci&oacute;n de redes de telecomunicaci&oacute;n";
 choices[38][1] = "S&oacute;lo est&aacute;n liberalizadas las comunicaciones telef&oacute;nicas y el acceso a internet";
 choices[38][2] = "S&oacute;lo Telef&oacute;nica de Espa&ntilde;a, Jazztel y Ono est&aacute;n autorizadas a alquilar circuitos punto a punto";
 choices[38][3] = "La instalaci&oacute;n y explotaci&oacute;n de redes y la provisi&oacute;n de servicios de telecomunicaciones est&aacute;n liberalizados";
 answers[38] = choices[38][3];
 units[38] = "110";
 comments[38] = "Id Pregunta: 3551. ";


//  Id pregunta: 3660 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Un LED es:";
 choices[39]= new Array();
 choices[39][0] = "Un diodo emisor de luz, usado para generar luz a partir de energ&iacute;a el&eacute;ctrica, a menudo a modo de peque&ntilde;os pilotos de aviso";
 choices[39][1] = "Un tipo de vocoder que permite una generaci&oacute;n progresiva de la voz humana";
 choices[39][2] = "Un m&eacute;todo de gesti&oacute;n de proyectos espec&iacute;ficos de I+D con todas las particularidades que estos conllevan";
 choices[39][3] = "Nada de lo anterior";
 answers[39] = choices[39][0];
 units[39] = "99";
 comments[39] = "Id Pregunta: 3660. ";


//  Id pregunta: 3886 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Qu&eacute; es Javascript7:";
 choices[40]= new Array();
 choices[40][0] = " Un compilador de Java.";
 choices[40][1] = "Un generador de applets Java";
 choices[40][2] = " Un applet Java que se ejecuta de forma embebida desde un lenguaje de script.";
 choices[40][3] = "Un lenguaje de script basado en la sintaxis de Java.";
 answers[40] = choices[40][3];
 units[40] = "114";
 comments[40] = "Id Pregunta: 3886. Junta Andaluc&iacute;a";


//  Id pregunta: 3934 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;En que nivel del modelo OSI se realiza el cifrado?";
 choices[41]= new Array();
 choices[41][0] = "1";
 choices[41][1] = "5";
 choices[41][2] = "7";
 choices[41][3] = "6";
 answers[41] = choices[41][3];
 units[41] = "72";
 comments[41] = "Id Pregunta: 3934. ";


//  Id pregunta: 4042 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  El art&iacute;culo 25 de la Ley 9/2014 de Telecomunicaciones define el servicio universal como &lt;&lt;el conjunto de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales &hellip; :";
 choices[42]= new Array();
 choices[42][0] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica&gt;&gt;";
 choices[42][1] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica y con una calidad determinada&gt;&gt;";
 choices[42][2] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica y a un precio asequible&gt;&gt;";
 choices[42][3] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible&gt;&gt;";
 answers[42] = choices[42][3];
 units[42] = "110";
 comments[42] = "Id Pregunta: 4042. ";


//  Id pregunta: 4156 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Metodolog&iacute;a administrativa de gesti&oacute;n de sistemas que establece procedimientos para la gesti&oacute;n de situaciones futuras probables";
 choices[43]= new Array();
 choices[43][0] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 choices[43][1] = "Gesti&oacute;n basada en pol&iacute;ticas";
 choices[43][2] = "Tecnolog&iacute;a adaptativa";
 choices[43][3] = "Acuerdo de nivel de servicio (SLA)";
 answers[43] = choices[43][1];
 units[43] = "97";
 comments[43] = "Id Pregunta: 4156. ";


//  Id pregunta: 4162 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;Qu&eacute; termino define mejor una credencial Kerberos?";
 choices[44]= new Array();
 choices[44][0] = "Un ticket de autenticaci&oacute;n";
 choices[44][1] = "Un ticket de autorizaci&oacute;n";
 choices[44][2] = "Cada uno de los servicios y aplicaciones de una red que soportan Kerberos";
 choices[44][3] = "Un dominio, formado por usuarios, equipos y servicios registrados en un servidor Kerberos";
 answers[44] = choices[44][1];
 units[44] = "111";
 comments[44] = "Id Pregunta: 4162. ";


//  Id pregunta: 4285 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Qu&eacute; s&iacute;mbolo es utilizado para direccionar el resultado de la ejecuci&oacute;n de un comando del sistema operativo Unix sustituyendo el contenido de un fichero?";
 choices[45]= new Array();
 choices[45][0] = "&lt;";
 choices[45][1] = "&gt;";
 choices[45][2] = "&lt;&lt;";
 choices[45][3] = "&gt;&gt;";
 answers[45] = choices[45][1];
 units[45] = "54";
 comments[45] = "Id Pregunta: 4285. ";


//  Id pregunta: 4365 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  Un grafo dirigido que tiene un nodo especial desde el cual se puede alcanzar a cualquier otro nodo atravesando un n&uacute;mero finito de arcos de forma &uacute;nica es";
 choices[46]= new Array();
 choices[46][0] = "Un grafo orientado a procesos.";
 choices[46][1] = "Un grafo representado.";
 choices[46][2] = "Una Pila";
 choices[46][3] = "Un &aacute;rbol.";
 answers[46] = choices[46][3];
 units[46] = "";
 comments[46] = "Id Pregunta: 4365. ";


//  Id pregunta: 4375 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Indique cu&aacute;l de los siguientes no es un proceso principal incluido en M&eacute;trica versi&oacute;n 3:";
 choices[47]= new Array();
 choices[47][0] = "Desarrollo de Sistemas de Informaci&oacute;n.";
 choices[47][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[47][2] = "Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[47][3] = "An&aacute;lisis de Requisitos del Sistema.";
 answers[47] = choices[47][3];
 units[47] = "86";
 comments[47] = "Id Pregunta: 4375. ";


//  Id pregunta: 4552 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  El articulo 60 del RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico establece que en ning&uacute;n caso podr&aacute;n contratar con la Administraci&oacute;n las personas en quienes concurra alguna de las circunstancias siguientes:";
 choices[48]= new Array();
 choices[48][0] = "haber dado lugar, por causa de la que hubiesen sido declarados culpables ,a la suspensi&oacute;n de cualquier contrato celebrado con Ia Administraci&oacute;n";
 choices[48][1] = "no hallarse al corriente en el cumplimiento de las obligaciones tributarias o de Seguridad Social impuestas por las disposiciones vigentes, en los t&eacute;rminos que reglamentariamente se determine.";
 choices[48][2] = "no hallarse debidamente clasificadas, en su caso conforme a lo dispuesto en la Ley de Contratos del Sector P&uacute;blico o no acreditar la suficiente solvencia econ&oacute;mica, practica y t&eacute;cnica.";
 choices[48][3] = "haber incurrido en falsedad al facilitar a la Administraci&oacute;n las declaraciones exigibles en el cumplimiento de las disposiciones de esta Ley y de sus normas de desarrollo.";
 answers[48] = choices[48][1];
 units[48] = "41";
 comments[48] = "Id Pregunta: 4552. ";


//  Id pregunta: 4595 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Seg&uacute;n se indica en el Real Decreto 944/2005 cual es el porcentaje m&aacute;ximo del total de Ia capacidad de transmisi&oacute;n del multiple digital que se podr&aacute; utilizar para prestar servicios adicionales distintos del de difusi&oacute;n de televisi&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "20%";
 choices[49][1] = "40%";
 choices[49][2] = "50%";
 choices[49][3] = "60%";
 answers[49] = choices[49][0];
 units[49] = "110";
 comments[49] = "Id Pregunta: 4595. ";


//  Id pregunta: 4596 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Cuando un m&oacute;vil se enciende y no encuentra una estaci&oacute;n base de Ia red a la que pertenece";
 choices[50]= new Array();
 choices[50][0] = "se registra en el HLR (Home Location Register) de Ia red a la que accede";
 choices[50][1] = "se registra en el VLR (Visitors Location Register) de Ia red a la que pertenece";
 choices[50][2] = "se registra en el VLR (Visitors Location Register) de Ia red a la que accede";
 choices[50][3] = "no se registra en ninguna red";
 answers[50] = choices[50][2];
 units[50] = "108";
 comments[50] = "Id Pregunta: 4596. ";


//  Id pregunta: 4648 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  El protocolo CMIP de OSI se puede considerar el equivalente al siguiente protocolo de la familia TCP/IP:";
 choices[51]= new Array();
 choices[51][0] = "SMTP";
 choices[51][1] = "SNMP";
 choices[51][2] = "ARP";
 choices[51][3] = "HTTP";
 answers[51] = choices[51][1];
 units[51] = "100";
 comments[51] = "Id Pregunta: 4648. ";


//  Id pregunta: 4698 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue eleconomista";
 choices[52]= new Array();
 choices[52][0] = "Fritz Machlup";
 choices[52][1] = "Charles Babbage";
 choices[52][2] = "Herman Hollerith";
 choices[52][3] = "Howard Aiken";
 answers[52] = choices[52][0];
 units[52] = "30";
 comments[52] = "Id Pregunta: 4698. Examen 2006 JCYL";


//  Id pregunta: 4797 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;Qu&eacute; tipo de diagramas de UML (Unified Modeling Language) permiten describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mediante el paso de mensajes entre los objetos del mismo?";
 choices[53]= new Array();
 choices[53][0] = "Diagramas de casos de uso.";
 choices[53][1] = "Diagramas de estados.";
 choices[53][2] = "Diagramas de interacci&oacute;n.";
 choices[53][3] = "Diagramas de flujo de datos.";
 answers[53] = choices[53][2];
 units[53] = "84";
 comments[53] = "Id Pregunta: 4797. examen TIC 2006";


//  Id pregunta: 4886 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  El impulso de las redes WLAN (Wireless Local Area Network) se ha visto rodeado de fuertes cr&iacute;ticas respecto a laseguridad que ofrecen a los usuarios, ya que las se&ntilde;ales se transportan a trav&eacute;s del aire, que es un entorno quepermite a un hacker/craker interceptar dichas se&ntilde;ales. &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a losest&aacute;ndares y protocolos de seguridad desarrollados para las redes WLAN NO es cierta?";
 choices[54]= new Array();
 choices[54][0] = "El protocolo WEP (Wired Equivalent Privacy) se dise&ntilde;&oacute; para asegurar el enlace de radio entre dispositivosen redes IEEE (Institute of Electrical and Electronics Engineers) 802.11 y utiliza el algoritmo de cifradosim&eacute;trico RC4";
 choices[54][1] = "El protocolo WEP din&aacute;mico fue creado, como soluci&oacute;n temporal para resolver los problemas de seguridaddel protocolo WEP, y est&aacute; basado en el est&aacute;ndar IEEE 802.1x";
 choices[54][2] = "El protocolo WPA (Wi-Fi Protected Access) define los modos de trabajo WPA-PERSONAL y WPAENTERPRISE";
 choices[54][3] = "IEEE 802.1i es el est&aacute;ndar que ha definido una arquitectura m&aacute;s robusta y segura para las redesinal&aacute;mbricas";
 answers[54] = choices[54][3];
 units[54] = "107";
 comments[54] = "Id Pregunta: 4886. ";


//  Id pregunta: 4996 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  El Consejo Superior de Administraci&oacute;n Electr&oacute;nica es un &oacute;rgano colegiado adscrito al Ministerio de:";
 choices[55]= new Array();
 choices[55][0] = "Industria, Energ&iacute;a y Turismo";
 choices[55][1] = "Asuntos Exteriores";
 choices[55][2] = "Hacienda y Administraciones P&uacute;blicas";
 choices[55][3] = "Interior";
 answers[55] = choices[55][2];
 units[55] = "30";
 comments[55] = "Id Pregunta: 4996. Examen TIC A 2007";


//  Id pregunta: 5133 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Seg&uacute;n la LSSI, cu&aacute;les son las p&aacute;ginas web que deben cumplir criterios de accesibilidad:";
 choices[56]= new Array();
 choices[56][0] = "Todas, independientemente de su finalidad.";
 choices[56][1] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2004";
 choices[56][2] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2005";
 choices[56][3] = "S&oacute;lo las comerciales";
 answers[56] = choices[56][2];
 units[56] = "30";
 comments[56] = "Id Pregunta: 5133. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5230 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  No es cierto respecto al prototipado evolutivo:";
 choices[57]= new Array();
 choices[57][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[57][1] = "En este modelo no se asume que los requisitos vayan a cambiar continuamente desde el principio.";
 choices[57][2] = "Se construye una implementaci&oacute;n parcial de los requisitos conocidos, para que el usuario comprenda mejor la totalidad de los requisitos deseados";
 choices[57][3] = "Est&aacute; relacionado con el concepto de Desarrollo R&aacute;pido de Aplicaciones (RAD)";
 answers[57] = choices[57][1];
 units[57] = "76";
 comments[57] = "Id Pregunta: 5230. ";


//  Id pregunta: 5262 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  Para obtener el Diagrama Caracter&iacute;stico de un proyecto, el Plan General de Garant&iacute;a de Calidad considera los siguientes atributos:";
 choices[58]= new Array();
 choices[58][0] = "Un total de 8, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[58][1] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[58][2] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 7.";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][1];
 units[58] = "88";
 comments[58] = "Id Pregunta: 5262. ";


//  Id pregunta: 5285 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Indique cu&aacute;l de los siguientes no es un objeto integrado de ASP:";
 choices[59]= new Array();
 choices[59][0] = "Client";
 choices[59][1] = "Application";
 choices[59][2] = "Server";
 choices[59][3] = "Request";
 answers[59] = choices[59][0];
 units[59] = "115";
 comments[59] = "Id Pregunta: 5285. ";


//  Id pregunta: 5487 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  En una representaci&oacute;n gr&aacute;fica del ciclo de vida de desarrollo software en espiral, indicar qu&eacute; es lo que representa la dimensi&oacute;n radial";
 choices[60]= new Array();
 choices[60][0] = "El progreso hecho en completar cada ciclo de la espiral";
 choices[60][1] = "Coste acumulativo en el que se ha incurrido en las etapas realizadas hasta el momento actual";
 choices[60][2] = "El an&aacute;lisis de riesgos";
 choices[60][3] = "Los costes de explotaci&oacute;n del proyecto";
 answers[60] = choices[60][1];
 units[60] = "76";
 comments[60] = "Id Pregunta: 5487. Castilla y Le&oacute;n";


//  Id pregunta: 5529 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indicar cu&aacute;l de las siguientes son t&eacute;cnicas basadas en la comparaci&oacute;n de patrones para el reconocimiento de la voz";
 choices[61]= new Array();
 choices[61][0] = "Programaci&oacute;n din&aacute;mica o DTW (Dynamic Time Warping)";
 choices[61][1] = "Modelos ocultos de Markov o HMM (Hidden Markov Models)";
 choices[61][2] = "Las respuestas a) y b) son verdaderas";
 choices[61][3] = "Ninguna es verdadera";
 answers[61] = choices[61][2];
 units[61] = "94";
 comments[61] = "Id Pregunta: 5529. ";


//  Id pregunta: 5547 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  Entre los derechos reconocidos por la Ley de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos NO se encuentra:";
 choices[62]= new Array();
 choices[62][0] = "El Derecho a la Igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[62][1] = "El Derecho a la Conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas, de los documentos electr&oacute;nicos que formen parte de un expediente.";
 choices[62][2] = "El Derecho a obtener los medios de identificaci&oacute;n electr&oacute;nica necesarios.";
 choices[62][3] = "El Derecho a la libre utilizaci&oacute;n de cualquier sistema de firma electr&oacute;nica.";
 answers[62] = choices[62][3];
 units[62] = "43";
 comments[62] = "Id Pregunta: 5547. ";


//  Id pregunta: 5807 Año de creación de pregunta: 2009-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l no es en general cierto a la hora de tomar una decisi&oacute;n sobre adquirir o desarrollar a medida un software?";
 choices[63]= new Array();
 choices[63][0] = "Si existe un software que satisface los requisitos aunque requiere alguna adaptaci&oacute;n deber&iacute;amos prodecer con cuidado a la hora de adquirirlo, ya que el coste de modificar el software podr&iacute;a superar el coste de desarrollarlo a medida.";
 choices[63][1] = "Si existe un software que satisface los requisitos aunque requiere alguna adaptaci&oacute;n deber&iacute;amos adquirirlo, ya que el coste de modificar el software es siempre inferior al coste de desarrollarlo a medida.";
 choices[63][2] = "Si existe un software que satisface los requisitos deber&iacute;amos adquirirlo, ya que el coste de desarrollar un software equivalente ser&aacute; en general mayor que el la adquisici&oacute;n.";
 choices[63][3] = "Si existe un software que satisface los requisitos deber&iacute;amos tener en cuenta tambi&eacute;n el coste que supone el mantenimiento del mismo para los a&ntilde;os siguientes, ya que en muchos productos comerciales el coste del mantenimiento suele ser un gasto importante.";
 answers[63] = choices[63][1];
 units[63] = "35";
 comments[63] = "Id Pregunta: 5807. ";


//  Id pregunta: 5910 Año de creación de pregunta: 2009-01-01
 questions[64]= "65)  &iquest;Qu&eacute; NO garantiza el Servicio Universal contemplado por la Ley 9/2014, General de Telecomunicaciones?";
 choices[64]= new Array();
 choices[64][0] = "El ciudadano podr&aacute; elegir, para la prestaci&oacute;n de este servicio, a cualquiera de los operadores registrados a nivel nacional";
 choices[64][1] = "Todos los usuarios finales podr&aacute;n obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico";
 choices[64][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica";
 choices[64][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[64] = choices[64][0];
 units[64] = "110";
 comments[64] = "Id Pregunta: 5910. MAP 2008 A1";


//  Id pregunta: 6114 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  La planificaci&oacute;n de las redes radioel&eacute;ctricas:";
 choices[65]= new Array();
 choices[65][0] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n a la Direcci&oacute;n General de Telecomunicaciones.";
 choices[65][1] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n al Ayuntamiento correspondiente.";
 choices[65][2] = "La realiza la Direcci&oacute;n General de Telecomunicaciones con objeto de no causar interferencias entre diferentes servicios.";
 choices[65][3] = "Se realiza en comisi&oacute;n paritaria entre el operador y la Direcci&oacute;n General de Telecomunicaciones con objeto de evitar interferencias entre diferentes servicios.";
 answers[65] = choices[65][0];
 units[65] = "110";
 comments[65] = "Id Pregunta: 6114. TIC A 2010";


//  Id pregunta: 6195 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  La habilitaci&oacute;n para la representaci&oacute;n de terceros prevista en el Real Decreto 1671/2009 permite a las personas o entidades habilitadas";
 choices[66]= new Array();
 choices[66][0] = "La presentaci&oacute;n y recogida de escritos, solicitudes y comunicaciones en cualquier procedimiento";
 choices[66][1] = "La presentaci&oacute;n y recogida de escritos, solicitudes y comunicaciones en los procedimientos expresamente autorizados";
 choices[66][2] = "La presentaci&oacute;n de escritos, solicitudes y comunicaciones en cualquier procedimiento";
 choices[66][3] = "La presentaci&oacute;n de escritos, solicitudes y comunicaciones en los procedimientos expresamente autorizados";
 answers[66] = choices[66][0];
 units[66] = "43";
 comments[66] = "Id Pregunta: 6195. Articulo 14";


//  Id pregunta: 6448 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  En un sistema de almacenamiento en RAID 5:";
 choices[67]= new Array();
 choices[67][0] = "Se guardan dos paridades para cada bloque de informaci&oacute;n, cada una de ellas alojada en un disco diferente";
 choices[67][1] = "Se asigna un bloque de paridad por cada bloque de informaci&oacute;n, asignando un bloque alternativo de cada disco para almacenar esa paridad";
 choices[67][2] = "Se usa una divisi&oacute;n de datos a nivel de bloques con un disco de paridad dedicado";
 choices[67][3] = "Los datos se dividen a nivel de bits, en lugar de a nivel de bloques";
 answers[67] = choices[67][1];
 units[67] = "48";
 comments[67] = "Id Pregunta: 6448. Castilla La Mancha 2009";


//  Id pregunta: 6522 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  En Java, se&ntilde;ale la afirmaci&oacute;n correcta con respecto a los Enterprise JavaBeans (EJB):";
 choices[68]= new Array();
 choices[68][0] = "Son componentes de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n.";
 choices[68][1] = "Existen dos tipos de Enterprise Beans: Session y entity.";
 choices[68][2] = "Est&aacute;n escritos en XML para permitir su interoperabilidad.";
 choices[68][3] = "En un contenedor EJBs solo puede residir un bean.";
 answers[68] = choices[68][0];
 units[68] = "116";
 comments[68] = "Id Pregunta: 6522. ";


//  Id pregunta: 6636 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Dentro del modelo de calidad EFQM, los 3 criterios de mayor peso por orden son:";
 choices[69]= new Array();
 choices[69][0] = "Satisfacci&oacute;n del Cliente; Impacto en la Sociedad; Resultados";
 choices[69][1] = "Satisfacci&oacute;n del Cliente; Resultados; Procesos";
 choices[69][2] = "Satisfacci&oacute;n del Cliente; Resultados; Liderazgo";
 choices[69][3] = "Resultados; Satisfacci&oacute;n del Cliente; Liderazgo";
 answers[69] = choices[69][1];
 units[69] = "88";
 comments[69] = "Id Pregunta: 6636. ";


//  Id pregunta: 7155 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia, y los marca individualmente como copiados, es una copia de seguridad:";
 choices[70]= new Array();
 choices[70][0] = "Diaria";
 choices[70][1] = "Intermedia";
 choices[70][2] = "Incremental";
 choices[70][3] = "Diferencial";
 answers[70] = choices[70][2];
 units[70] = "48";
 comments[70] = "Id Pregunta: 7155. Examen TIC B 2009";


//  Id pregunta: 7174 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  A la hora de atacar un texto cifrado, el m&eacute;todo que explota las debilidades del algoritmo de cifrado o sus puntos menos fuertes para intentar deducir un texto nativo o deducir la clave de cifrado se denomina:";
 choices[71]= new Array();
 choices[71][0] = "Ataque por Fuerza Bruta";
 choices[71][1] = "CriptoAn&aacute;lisis";
 choices[71][2] = "An&aacute;lisis Diferencia de Cifrado";
 choices[71][3] = "CriptoCifrado";
 answers[71] = choices[71][1];
 units[71] = "72";
 comments[71] = "Id Pregunta: 7174. Examen TIC B 2009";


//  Id pregunta: 7286 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes elementos se puede decir que genuinamente forma parte de la web 2.0?";
 choices[72]= new Array();
 choices[72][0] = "Sindicaci&oacute;n de contenidos";
 choices[72][1] = "Sistemas de administraci&oacute;n de contenidos (CMS)";
 choices[72][2] = "P&aacute;ginas personales";
 choices[72][3] = "Directorios (taxonom&iacute;as)";
 answers[72] = choices[72][0];
 units[72] = "120";
 comments[72] = "Id Pregunta: 7286. Examen TIC B 2009";


//  Id pregunta: 7773 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   El protocolo utilizado para acceder a Internet desde cualquier dispositivo inal&aacute;mbrico haciendo uso del lenguaje WML (Wireless Markup Language) es:";
 choices[73]= new Array();
 choices[73][0] = " WEP.";
 choices[73][1] = " WPA.";
 choices[73][2] = " WAP.";
 choices[73][3] = " WTP.";
 answers[73] = choices[73][2];
 units[73] = "107";
 comments[73] = "Id Pregunta: 7773. Map 2005";


//  Id pregunta: 7840 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   Hay dos metalenguajes con los que definir los lenguajes que podemos obtener a partir de XML, &iquest;cu&aacute;les son?";
 choices[74]= new Array();
 choices[74][0] = " DTD y XML Schema.";
 choices[74][1] = " DTL y HTML.";
 choices[74][2] = " HTML y API.";
 choices[74][3] = " DTD y SGML.";
 answers[74] = choices[74][0];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7840. Map 2005";


//  Id pregunta: 7931 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NO es cierta?";
 choices[75]= new Array();
 choices[75][0] = " Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks).";
 choices[75][1] = " Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada uno de sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas por dicha estaci&oacute;n.";
 choices[75][2] = " Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast.";
 choices[75][3] = " Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os.";
 answers[75] = choices[75][2];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 7931. Map 2006";


//  Id pregunta: 7992 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)   En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 3.0, el umbral de saciedad m&aacute;ximo para un criterio:";
 choices[76]= new Array();
 choices[76][0] = " Indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa para ese criterio para que pueda ser considerada.";
 choices[76][1] = " Indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa para ese criterio para que pueda ser considerada.";
 choices[76][2] = " Indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en la puntuaci&oacute;n obtenida.";
 choices[76][3] = " Indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio.";
 answers[76] = choices[76][2];
 units[76] = "NULL";
 comments[76] = "Id Pregunta: 7992. Map 2007";


//  Id pregunta: 8074 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)   &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &laquo;Manifiesto &Aacute;gil&raquo; (Manifiesto por el Desarrollo &Aacute;gil de Software)?";
 choices[77]= new Array();
 choices[77][0] = " Aceptamos requisitos cambiantes, excepto en etapas avanzadas.";
 choices[77][1] = " Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los per&iacute;odos m&aacute;s cortos posibles.";
 choices[77][2] = " Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se autoorganizan.";
 choices[77][3] = " El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara.";
 answers[77] = choices[77][0];
 units[77] = "NULL";
 comments[77] = "Id Pregunta: 8074. Map 2008";


//  Id pregunta: 8132 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)   &iquest;Cu&aacute;l de las siguientes NO es una pauta WAI de accesibilidad para diferentes componentes?";
 choices[78]= new Array();
 choices[78][0] = " ATAG.";
 choices[78][1] = " UAAG.";
 choices[78][2] = " WCED.";
 choices[78][3] = " WCAG.";
 answers[78] = choices[78][2];
 units[78] = "NULL";
 comments[78] = "Id Pregunta: 8132. Map 2008";


//  Id pregunta: 8166 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  AGNUBIS, aplicaci&oacute;n del entorno de escritorio de GNOME, es:";
 choices[79]= new Array();
 choices[79][0] = "Un interfaz gr&aacute;fico para el dibujo de gr&aacute;ficos y manipulaciones estad&iacute;sticas.";
 choices[79][1] = "Un programa de presentaciones similar a MS POWER POINT.";
 choices[79][2] = "Un programa de dibujo vectorial que puede trabajar con archivos 5VG.";
 choices[79][3] = "El gestor de archivos oficial de GNOME.";
 answers[79] = choices[79][1];
 units[79] = "62";
 comments[79] = "Id Pregunta: 8166. Examen TIC A1 2010";


//  Id pregunta: 8411 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  Indique la respuesta INCORRECTA sobre el protocolo SMB: ";
 choices[80]= new Array();
 choices[80][0] = "Protocolo de red que permite compartir archivos e impresoras (entre otras cosas) entre nodos de una red ";
 choices[80][1] = "Microsoft a&ntilde;adi&oacute; algunas extensiones al protocolo y lo renombr&oacute; como CIFS (Common Internet File Syslem).  ";
 choices[80][2] = "Las iniciales SMB responden a Service Message Block ";
 choices[80][3] = "SAMBA es una implementaci&oacute;n libre del protocolo para entornos GNU/Linux y Unix.";
 answers[80] = choices[80][2];
 units[80] = "52";
 comments[80] = "Id Pregunta: 8411. Examen TIC A2 2010";


//  Id pregunta: 8416 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Se dice que un SGBD cumple el ACID test si observa las propiedades de: ";
 choices[81]= new Array();
 choices[81][0] = "(A)tomicidad, (C)onsistencia, (I)ntegridad y (D)urabilidad";
 choices[81][1] = "(A)tomicidad, (C)onfidencialidad, (I)ntegridad y (D)urabilidad";
 choices[81][2] = "(A)tomicidad, (C)onfidencialidad, a(I)slamiento y (D)urabilidad";
 choices[81][3] = "(A)tomicidad, (C)onsistencia, a(I)slamiento y (D)urabilidad";
 answers[81] = choices[81][3];
 units[81] = "57";
 comments[81] = "Id Pregunta: 8416. Examen TIC A2 2010";


//  Id pregunta: 8431 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes programas es la continuaci&oacute;n del programa IDABC finalizado en diciembre de 2009?";
 choices[82]= new Array();
 choices[82][0] = "AIF";
 choices[82][1] = "IDA";
 choices[82][2] = "ISA";
 choices[82][3] = "IMA";
 answers[82] = choices[82][2];
 units[82] = "30";
 comments[82] = "Id Pregunta: 8431. ";


//  Id pregunta: 8670 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Un acceso RDSI primario consta de";
 choices[83]= new Array();
 choices[83][0] = "Dos canales B y un canal D";
 choices[83][1] = "Dos canales B y ning&uacute;n canal D";
 choices[83][2] = "Treinta canales B y un canal D";
 choices[83][3] = "Treinta canales B y dos canales D";
 answers[83] = choices[83][2];
 units[83] = "103";
 comments[83] = "Id Pregunta: 8670. Examen UPM A2 2011";


//  Id pregunta: 8685 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[84]= new Array();
 choices[84][0] = "Spread spectrum con secuencia directa";
 choices[84][1] = "Spread spectrum con salto de frecuencia";
 choices[84][2] = "Spread spectrum con secuencia indirecta";
 choices[84][3] = "Spread spectrum sobre TCP/IP";
 answers[84] = choices[84][1];
 units[84] = "107";
 comments[84] = "Id Pregunta: 8685. Examen UPM A2 2011";


//  Id pregunta: 8787 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  &iquest;Qu&eacute; protocolo puede encontrar la direcci&oacute;n MAC de un computador, dada su direcci&oacute;n IP?";
 choices[85]= new Array();
 choices[85][0] = "RARP";
 choices[85][1] = "DHCP";
 choices[85][2] = "ARP";
 choices[85][3] = "Proxy RARP";
 answers[85] = choices[85][2];
 units[85] = "100";
 comments[85] = "Id Pregunta: 8787. Examen UPM A2 2011";


//  Id pregunta: 8989 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Se&ntilde;ale la respuesta falsa respecto del Plan General de Garant&iacute;a de Calidad promovido por CSAE";
 choices[86]= new Array();
 choices[86][0] = "Es un documento impreso";
 choices[86][1] = "Consta de cuatro fasc&iacute;culos";
 choices[86][2] = "Orientada a cualquier ambito de las AAPP";
 choices[86][3] = "Requiere autorizaci&oacute;n para su empleo";
 answers[86] = choices[86][3];
 units[86] = "87";
 comments[86] = "Id Pregunta: 8989. ";


//  Id pregunta: 8991 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  En radio, &iquest;Qu&eacute; quiere decir MIMO?";
 choices[87]= new Array();
 choices[87][0] = "Maximum Input, Minimum Output";
 choices[87][1] = "Minimum Input, Maximum Output";
 choices[87][2] = "Multiple-Input Multible-Output";
 choices[87][3] = "Ninguna de las anteriores";
 answers[87] = choices[87][2];
 units[87] = "107";
 comments[87] = "Id Pregunta: 8991. ";


//  Id pregunta: 9017 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  En un sistema de transmisi&oacute;n digital &hellip;";
 choices[88]= new Array();
 choices[88][0] = "El ruido es acumulativo.";
 choices[88][1] = "Cada repetidor puede regenerar la se&ntilde;al.";
 choices[88][2] = "No tiene influencia el ruido.";
 choices[88][3] = "Ninguna de las anteriores";
 answers[88] = choices[88][1];
 units[88] = "99";
 comments[88] = "Id Pregunta: 9017. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9037 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  Cual de las firmas Xades a&ntilde;ade referencias a datos de verificaci&oacute;n (certificados y listas de revocaci&oacute;n) a los documentos firmados";
 choices[89]= new Array();
 choices[89][0] = "Xades-BES";
 choices[89][1] = "Xades-T";
 choices[89][2] = "Xades-C";
 choices[89][3] = "Xades-EPES";
 answers[89] = choices[89][2];
 units[89] = "72";
 comments[89] = "Id Pregunta: 9037. ";


//  Id pregunta: 9149 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  &iquest;C&oacute;mo se clasifican los m&eacute;todos de grabaci&oacute;n en cinta magn&eacute;tica?";
 choices[90]= new Array();
 choices[90][0] = "Lineal, circular y transversal";
 choices[90][1] = "Circular, transversal y Helical";
 choices[90][2] = "Lineal, Transversal, Helical";
 choices[90][3] = "Trasnversal y Helical";
 answers[90] = choices[90][2];
 units[90] = "47";
 comments[90] = "Id Pregunta: 9149. ";


//  Id pregunta: 9330 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  El cable de categor&iacute;a 6 seg&uacute;n la norma ANSI";
 choices[91]= new Array();
 choices[91][0] = "Equivale al cable clase E de ISO";
 choices[91][1] = "Es el cable adecuado para transmisiones de 100 mbps";
 choices[91][2] = "Su rango de funcionamiento alcanza los 100 mhz";
 choices[91][3] = "Se trata de una";
 answers[91] = choices[91][0];
 units[91] = "99";
 comments[91] = "Id Pregunta: 9330. ";


//  Id pregunta: 9507 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  En el patr&oacute;n MVC, &iquest;d&oacute;nde situar&iacute;amos un contenedor EJB?";
 choices[92]= new Array();
 choices[92][0] = "En el modelo";
 choices[92][1] = "En la vista";
 choices[92][2] = "En el controlador";
 choices[92][3] = "En todos los anteriores";
 answers[92] = choices[92][0];
 units[92] = "116";
 comments[92] = "Id Pregunta: 9507. ";


//  Id pregunta: 9693 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[93]= new Array();
 choices[93][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[93][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[93][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[93][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[93] = choices[93][1];
 units[93] = "100";
 comments[93] = "Id Pregunta: 9693. ";


//  Id pregunta: 9893 Año de creación de pregunta: 2010-01-01
 questions[94]= "95)  En el entorno de las Tecnolog&iacute;as de la Informaci&oacute;n, la Comisi&oacute;n Soto sirvi&oacute; para";
 choices[94]= new Array();
 choices[94][0] = "impulsar la creaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[94][1] = "impulsar el modelo de crecimiento aut&oacute;nomo de cada departamento ministerial en materia de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[94][2] = "Revisar, en base a la Ley 11/2007, los modelos de organizaci&oacute;n de las Tecnolog&iacute;as de la Informaci&oacute;n creados anteriormente.";
 choices[94][3] = "impulsar el desarrollo de la Sociedad de la Informaci&oacute;n.";
 answers[94] = choices[94][3];
 units[94] = "43";
 comments[94] = "Id Pregunta: 9893. TIC A1, Examen 2013";


//  Id pregunta: 9902 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Los puntos de fijaci&oacute;n (anchor points) son caracter&iacute;sticos en el modelo de desarrollo:";
 choices[95]= new Array();
 choices[95][0] = "En cascada.";
 choices[95][1] = "Basado en prototipos.";
 choices[95][2] = "En espiral WINWIN.";
 choices[95][3] = "RAD.";
 answers[95] = choices[95][2];
 units[95] = "76";
 comments[95] = "Id Pregunta: 9902. TIC A2, Examen 2013";


//  Id pregunta: 9938 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[96]= new Array();
 choices[96][0] = "Para mejorar la resistencia a las interferencias.";
 choices[96][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[96][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[96][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[96] = choices[96][0];
 units[96] = "107, 108";
 comments[96] = "Id Pregunta: 9938. TIC A1, Examen 2013";


//  Id pregunta: 10130 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  SNMPv3 est&aacute; definido en:";
 choices[97]= new Array();
 choices[97][0] = "RFC 3500";
 choices[97][1] = "RFC 3100";
 choices[97][2] = "RFC 3120-3125";
 choices[97][3] = "RFC 3410-3418";
 answers[97] = choices[97][3];
 units[97] = "104";
 comments[97] = "Id Pregunta: 10130. ";


//  Id pregunta: 10232 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Cual de las siguientes clases o interfaces es usado para recuperar informaci&oacute;n de la sesi&oacute;n asociada con el usuario?:";
 choices[98]= new Array();
 choices[98][0] = "GenericServlet";
 choices[98][1] = "ServletConfig";
 choices[98][2] = "ServletContext";
 choices[98][3] = "HttpServletRequest";
 answers[98] = choices[98][3];
 units[98] = "116";
 comments[98] = "Id Pregunta: 10232. ";


//  Id pregunta: 10568 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Una de las diferencias entre un Plan de Recuperaci&oacute;n ante desastres (PRD o DRP en ingl&eacute;s) y un Plan de Contingencia es que:";
 choices[99]= new Array();
 choices[99][0] = "El PRD debe ser realizado antes que el Plan de Contingencia";
 choices[99][1] = "El Plan de Contingencia debe ser realizado antes que el PRD";
 choices[99][2] = "El Plan de Contingencia realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el PRD, en paralelo al Plan de Contingencia, trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 choices[99][3] = "El PRD realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el Plan de Contingencia trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 answers[99] = choices[99][2];
 units[99] = "32";
 comments[99] = "Id Pregunta: 10568. ";


