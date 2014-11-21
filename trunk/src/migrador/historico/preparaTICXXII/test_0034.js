/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 150 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  El modelo de Nolan de cuatro etapas si lo representamos gr&aacute;ficamente tiene forma de:";
 choices[0]= new Array();
 choices[0][0] = "s";
 choices[0][1] = "n";
 choices[0][2] = "u";
 choices[0][3] = "z";
 answers[0] = choices[0][0];
 units[0] = "22";
 comments[0] = "Id Pregunta: 150. Nolan";


//  Id pregunta: 176 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el &aacute;mbito de la normalizaci&oacute;n comunitaria, las siglas CEPT corresponden a:";
 choices[1]= new Array();
 choices[1][0] = "El Comit&eacute; europeo de normalizaci&oacute;n";
 choices[1][1] = "El Comit&eacute; europeo de electrotecnia";
 choices[1][2] = "La Confederaci&oacute;n europea de Administraciones de correos y telecomunicaciones";
 choices[1][3] = "La Confederaci&oacute;n de Asociaciones de usuariios de ordenadores";
 answers[1] = choices[1][2];
 units[1] = "42";
 comments[1] = "Id Pregunta: 176. ";


//  Id pregunta: 209 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En general, lo m&aacute;s &uacute;til en determinadas &aacute;reas de la organizaci&oacute;n altamente normalizadas (ofim&aacute;tica, contabilidad, inventarios,&hellip;) es utilizar:";
 choices[2]= new Array();
 choices[2][0] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia.";
 choices[2][1] = "Aplicaciones a medida realizadas mediante programaci&oacute;n externa.";
 choices[2][2] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia y externa.";
 choices[2][3] = "Aplicaciones est&aacute;ndar o paquetes.";
 answers[2] = choices[2][3];
 units[2] = "27";
 comments[2] = "Id Pregunta: 209. ";


//  Id pregunta: 309 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La gu&iacute;a XPG 4 de X/OPEN apareci&oacute; en:";
 choices[3]= new Array();
 choices[3][0] = "1989";
 choices[3][1] = "1990";
 choices[3][2] = "1991";
 choices[3][3] = "1992";
 answers[3] = choices[3][3];
 units[3] = "40";
 comments[3] = "Id Pregunta: 309. XPG";


//  Id pregunta: 376 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Los sistemas de ayuda a la decisi&oacute;n orientados a datos se caracterizan por:";
 choices[4]= new Array();
 choices[4][0] = "Proporcionar un medio f&aacute;cil al usuario para &quot;jugar con los datos&quot;";
 choices[4][1] = "Facilitar el conocimiento estructural del problema que permita el desarrollo de un modelo formal de decisi&oacute;n";
 choices[4][2] = "Presentar al usuario una informaci&oacute;n relacionada para la toma de decisiones";
 choices[4][3] = "Ser m&aacute;s caros que los sistemas de ayuda a la decisi&oacute;n orientados a modelos";
 answers[4] = choices[4][3];
 units[4] = "21";
 comments[4] = "Id Pregunta: 376. ";


//  Id pregunta: 448 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se&ntilde;alar la afirmaci&oacute;n incorrecta respecto al control de proyectos:";
 choices[5]= new Array();
 choices[5][0] = "El diagrama de PERT permite evaluar el retraso de un proyecto";
 choices[5][1] = "Un retraso en la fecha de finalizaci&oacute;n de una etapa provoca un retraso de la fecha final del proyecto";
 choices[5][2] = "La fecha de finalizaci&oacute;n del proyecto se ve afectada por las fechas de finalizaci&oacute;n de las etapas que constituyen el camino cr&iacute;tico";
 choices[5][3] = "La duraci&oacute;n total del proyecto viene determinada por el camino cr&iacute;tico";
 answers[5] = choices[5][1];
 units[5] = "28";
 comments[5] = "Id Pregunta: 448. ";


//  Id pregunta: 492 Año de creación de pregunta: 2003-01-01
 questions[6]= "7)  &iquest;Cuales son las t&eacute;cnicas utilizadas para la auditor&iacute;a de econom&iacute;a de los sistemas de informaci&oacute;n?";
 choices[6]= new Array();
 choices[6][0] = "Cuestionarios y entrevistas";
 choices[6][1] = "An&aacute;lisis  de inversiones e inventario de sistemas de informaci&oacute;n";
 choices[6][2] = "Informes econ&oacute;micos de inversiones en sistemas de informaci&oacute;n y an&aacute;lisis de rendimiento";
 choices[6][3] = "Informes de la organizaci&oacute;n, datos de proyectos y contratos, an&aacute;lisis costo-beneficio";
 answers[6] = choices[6][3];
 units[6] = "31, 32, 33";
 comments[6] = "Id Pregunta: 492. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en las opciones";


//  Id pregunta: 744 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  Las aplicaciones Java son comprobadas:";
 choices[7]= new Array();
 choices[7][0] = "en tiempo de compilaci&oacute;n";
 choices[7][1] = "en tiempo de ejecuci&oacute;n";
 choices[7][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[7][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[7] = choices[7][2];
 units[7] = "60";
 comments[7] = "Id Pregunta: 744. Similar a examen TIC SS A 2003";


//  Id pregunta: 982 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dentro de la Inteligencia Artificial Distribuir&aacute;n indicar qu&eacute; significan las siglas KIF:";
 choices[8]= new Array();
 choices[8][0] = "Knowledge Interchange File";
 choices[8][1] = "Knowledge Intermediate Format";
 choices[8][2] = "Knowledge Intermediate File";
 choices[8][3] = "Knowledge Interchange Format";
 answers[8] = choices[8][3];
 units[8] = "63";
 comments[8] = "Id Pregunta: 982. ";


//  Id pregunta: 1472 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  MPEG es:";
 choices[9]= new Array();
 choices[9][0] = "Mobile Photographs Evolution using GPRS, tecnolog&iacute;a para transmitir fotograf&iacute;as usando un m&oacute;vil GPRS";
 choices[9][1] = "Mobile Protocols Expert Group, grupo de trabajo de ISO experto en la aplicaci&oacute;n de distintos protocolos a la tecnolog&iacute;a inal&aacute;mbrica m&oacute;vil";
 choices[9][2] = "Multimedia Protocols for Evolution of GSM: conjunto de protocolos desarrollados para dispositivos m&oacute;viles que potencian las capacidades multimedia contempladas en la actual GSM";
 choices[9][3] = "Moving Pictures Expert Group, grupo de trabajo de ISO cuya misi&oacute;n es desarrollar est&aacute;ndares de compresi&oacute;n para audio y video";
 answers[9] = choices[9][3];
 units[9] = "114";
 comments[9] = "Id Pregunta: 1472. ";


//  Id pregunta: 1475 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Respecto a los formatos de compresi&oacute;n de video de la familia H.26x, es falso que:";
 choices[10]= new Array();
 choices[10][0] = "H.261 est&aacute; orientado a caudal constante, m&aacute;s id&oacute;neo para video sobre RDSI";
 choices[10][1] = "H.263 es m&aacute;s eficiente que H.261 y est&aacute; orientado a video sobre internet, con caudal variable";
 choices[10][2] = "No ofrecen compresi&oacute;n temporal, aunque s&iacute; compresi&oacute;n espacial";
 choices[10][3] = "Todo lo anterior es falso";
 answers[10] = choices[10][3];
 units[10] = "117";
 comments[10] = "Id Pregunta: 1475. ";


//  Id pregunta: 1547 Año de creación de pregunta: 2003-01-01
 questions[11]= "12)  &iquest;C&oacute;mo se crea un &iacute;ndice para una tabla?";
 choices[11]= new Array();
 choices[11][0] = "Se crea siempre en la misma sentencia en que se crea la tabla.";
 choices[11][1] = "Se crea siempre autom&aacute;ticamente sobre la clave primaria al crear la tabla.";
 choices[11][2] = "Con CREATE INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 choices[11][3] = "Con INSERT INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 answers[11] = choices[11][2];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1547. ";


//  Id pregunta: 1567 Año de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l no es una caracter&iacute;stica esencial del Datawarehouse?";
 choices[12]= new Array();
 choices[12][0] = "Orientado por temas";
 choices[12][1] = "Independiente del tiempo";
 choices[12][2] = " No vol&aacute;til";
 choices[12][3] = "Integrado";
 answers[12] = choices[12][1];
 units[12] = "71";
 comments[12] = "Id Pregunta: 1567. ";


//  Id pregunta: 1647 Año de creación de pregunta: 2004-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes son subsistemas usuales en un sistema de e-learning?";
 choices[13]= new Array();
 choices[13][0] = "LCMS (Learning Content Management System)";
 choices[13][1] = "LOMS (Learning Objects Management System)";
 choices[13][2] = "CRM (Customer Relationship Management)";
 choices[13][3] = "Todos los anteriores";
 answers[13] = choices[13][0];
 units[13] = "66";
 comments[13] = "Id Pregunta: 1647. ";


//  Id pregunta: 1784 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  Indique aquel conjunto de programas que no guardan relaci&oacute;n en cuanto a su funcionalidad";
 choices[14]= new Array();
 choices[14][0] = "Gnumeric, kspread";
 choices[14][1] = "Firefox, Epiphany";
 choices[14][2] = "Thunderbird, Konqueror";
 choices[14][3] = "Dia, kivio";
 answers[14] = choices[14][2];
 units[14] = "61,62";
 comments[14] = "Id Pregunta: 1784. ";


//  Id pregunta: 1838 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  Indicar la respuesta falsa respecto al protocolo SET (Secure Electronic Transaction):";
 choices[15]= new Array();
 choices[15][0] = "Fue desarrollado por Visa y MasterCard";
 choices[15][1] = "Hace uso de criptograf&iacute;a mediante DES y RSA";
 choices[15][2] = "Garantiza la autenticaci&oacute;n e integridad de la comunicaci&oacute;n";
 choices[15][3] = "Fue desarrollado tras el fracso de la tecnolog&iacute;a 3D-Secure de Visa";
 answers[15] = choices[15][3];
 units[15] = "70";
 comments[15] = "Id Pregunta: 1838. ";


//  Id pregunta: 2055 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?";
 choices[16]= new Array();
 choices[16][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico";
 choices[16][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico";
 choices[16][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico; se realiza de forma conjunta";
 choices[16][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o f&iacute;sico";
 answers[16] = choices[16][0];
 units[16] = "79";
 comments[16] = "Id Pregunta: 2055. Pregunta Junta Andalucia - A";


//  Id pregunta: 2150 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es un componente de una herramienta CASE integrada?";
 choices[17]= new Array();
 choices[17][0] = "Diccionario de datos.";
 choices[17][1] = "Editor de diagramas.";
 choices[17][2] = "Editor de documentos.";
 choices[17][3] = "Editor de textos.";
 answers[17] = choices[17][3];
 units[17] = "91";
 comments[17] = "Id Pregunta: 2150. ";


//  Id pregunta: 2428 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  La orientaci&oacute;n a objetos usa com&uacute;nmente dos tipos de mecanismos de herencia: herencia simple y herencia m&uacute;ltiple. La herencia repetida:";
 choices[18]= new Array();
 choices[18][0] = "Supone que una clase, llamada subclase, hereda caracter&iacute;sticas y m&eacute;todos de una sola clase superior llamada superclase, a la que puede a&ntilde;adir o borrar alg&uacute;n comportamiento.";
 choices[18][1] = "Es un tipo de herencia m&uacute;ltiple en la que en la jerarqu&iacute;a de la herencia hay ciclos, es decir, una clase hereda directa o indirectamente de otra clase m&aacute;s de una vez.";
 choices[18][2] = "Consiste en que un objeto dado tenga m&aacute;s de un padre.";
 choices[18][3] = "No existe.";
 answers[18] = choices[18][1];
 units[18] = "82,84";
 comments[18] = "Id Pregunta: 2428. ";


//  Id pregunta: 2490 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Seg&uacute;n Roger S. Pressman, &iquest;cu&aacute;les de los siguientes principios son fundamentales en el an&aacute;lisis de requerimientos?:";
 choices[19]= new Array();
 choices[19][0] = "El dominio de la informaci&oacute;n";
 choices[19][1] = "La subdivisi&oacute;n del problema";
 choices[19][2] = "La representaci&oacute;n l&oacute;gica y f&iacute;sica del sistema";
 choices[19][3] = "Los tres anteriores";
 answers[19] = choices[19][3];
 units[19] = "78,80,81,82";
 comments[19] = "Id Pregunta: 2490. ";


//  Id pregunta: 2513 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Uno de los efectos de la falta de calidad en el desarrollo de software es la insatisfacci&oacute;n de los usuarios. &iquest;Cu&aacute;l es una de las principales causas de esta insatisfacci&oacute;n?:";
 choices[20]= new Array();
 choices[20][0] = "El dimensionamiento del hardware";
 choices[20][1] = "Las necesidades funcionales solicitadas y no contempladas por el software para &eacute;l desarrollado";
 choices[20][2] = "Las dificultades de adaptaci&oacute;n al nuevo trabajo";
 choices[20][3] = "Los usuarios no suelen estar insatisfechos nunca";
 answers[20] = choices[20][1];
 units[20] = "92";
 comments[20] = "Id Pregunta: 2513. ";


//  Id pregunta: 2681 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  Indique la afirmaci&oacute;n verdadera:";
 choices[21]= new Array();
 choices[21][0] = "La informaci&oacute;n recogida por la c&eacute;lula fotoel&eacute;ctrica del esc&aacute;ner es de tipo anal&oacute;gica.";
 choices[21][1] = "En el caso de los esc&aacute;neres de color, el sistema de detecci&oacute;n consiste en separar los componentes de color en sus valores b&aacute;sicos: rojo, verde y azul.";
 choices[21][2] = "La exploraci&oacute;n se realiza mediante c&eacute;lulas fotoel&eacute;ctricas o fotodiodos y el resultado es una informaci&oacute;n que hay que digitalizar antes de que se pueda transmitir al ordenador, que es capaz de procesarla mediante sistemas gr&aacute;ficos y software especial.";
 choices[21][3] = "Todas las anteriores.";
 answers[21] = choices[21][0];
 units[21] = "93";
 comments[21] = "Id Pregunta: 2681. ";


//  Id pregunta: 2813 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  El modelo de calidad EFQM";
 choices[22]= new Array();
 choices[22][0] = "Considera 8 criterios y 30 subcriterios";
 choices[22][1] = "Considera 9 criterios y 32 subcriterios";
 choices[22][2] = "Considera 9 criterios y 40 subcriterios";
 choices[22][3] = "El modelo de calidad EFQM no considera criterios sino factores";
 answers[22] = choices[22][1];
 units[22] = "88";
 comments[22] = "Id Pregunta: 2813. ";


//  Id pregunta: 2852 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Indicar la falsa";
 choices[23]= new Array();
 choices[23][0] = "En la comparaci&oacute;n matricial se pueden utilizar filtros digitales que aclaran la informaci&oacute;n a almacenar, para optimizar el casamiento";
 choices[23][1] = "En la comparaci&oacute;n matricial escanea la forma de los caracteres y los compara con tablas de formas";
 choices[23][2] = "En el reconocimiento por patrones escanea la forma de los caracteres y los compara con tablas de formas";
 choices[23][3] = "El reconocimiento por patrones ofrece m&aacute;s flexibilidad que la comparaci&oacute;n matricial";
 answers[23] = choices[23][1];
 units[23] = "94";
 comments[23] = "Id Pregunta: 2852. ";


//  Id pregunta: 2909 Año de creación de pregunta: 2009-01-01
 questions[24]= "25)  El impacto es, de acuerdo a MAGERIT v2:";
 choices[24]= new Array();
 choices[24][0] = "Da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza";
 choices[24][1] = "Lo que podr&iacute;a pasar";
 choices[24][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[24][3] = "Lo que probablemente pase ";
 answers[24] = choices[24][2];
 units[24] = "33";
 comments[24] = "Id Pregunta: 2909. ";


//  Id pregunta: 2943 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  Dentro de la capa OSI, la funci&oacute;n de cifrado de datos se realiza en el nivel de:";
 choices[25]= new Array();
 choices[25][0] = "Red";
 choices[25][1] = "Transporte";
 choices[25][2] = "Sesi&oacute;n";
 choices[25][3] = "Presentaci&oacute;n";
 answers[25] = choices[25][3];
 units[25] = "100";
 comments[25] = "Id Pregunta: 2943. Similar a examen TIC SS A 2003";


//  Id pregunta: 3440 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  El protocolo ARP es:";
 choices[26]= new Array();
 choices[26][0] = "Automatic Resolution Protocol, Protocolo de resoluci&oacute;n autom&aacute;tica";
 choices[26][1] = "Adress Reservation Protocol, protocolo de reserva de direcciones";
 choices[26][2] = "Address Resolution Protocol, protocolo de resoluci&oacute;n de direcciones";
 choices[26][3] = "Automatic Response Protocol, protocolo de respuesta autom&aacute;tica";
 answers[26] = choices[26][2];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3440. ";


//  Id pregunta: 3522 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  En funci&oacute;n del &aacute;rea geogr&aacute;fica que cubran y de sus caracter&iacute;sticas, se puede decir:";
 choices[27]= new Array();
 choices[27][0] = "Las redes de comunicaci&oacute;n se dividen en LAN (&aacute;rea local) y WAN (&aacute;rea extendida)";
 choices[27][1] = "Las redes WAN ofrecen bajas tasas de error";
 choices[27][2] = "En una red LAN los costes derivados del uso de la red pueden depender del tr&aacute;fico";
 choices[27][3] = "Las redes WAN pueden almacenar datos y despu&eacute;s enviarlos";
 answers[27] = choices[27][3];
 units[27] = "101";
 comments[27] = "Id Pregunta: 3522. ";


//  Id pregunta: 3531 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  En la tecnolog&iacute;a de web-services, una de las afirmaciones siguientes no es correcta:";
 choices[28]= new Array();
 choices[28][0] = "SOAP deriva de XML-RPC";
 choices[28][1] = "Se emplea WSDL (Web Service Definition Language) como lenguaje de descripci&oacute;n de web services por sus proveedores";
 choices[28][2] = "UDDI (Universal Description Discovery and Integration) permite la publicaci&oacute;n y localizaci&oacute;n de los servicios web";
 choices[28][3] = "WSSL (Web Service Specification Language) se usa como lenguaje de especificaci&oacute;n de los servicios web";
 answers[28] = choices[28][3];
 units[28] = "51,69";
 comments[28] = "Id Pregunta: 3531. ";


//  Id pregunta: 3559 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  En Token Ring , un monitor activo:";
 choices[29]= new Array();
 choices[29][0] = "Transmite mensajes de monitorizaci&oacute;n a cada servidor en el anillo para facilitar el balance de carga entre ellos";
 choices[29][1] = "Espera por los mensajes de error, entonces env&iacute;a mensajes de notificaci&oacute;n para limitar (o reordenar) el tr&aacute;fico";
 choices[29][2] = "Escucha la prioridad del testigo y cuando se detecta, reserva la prioridad para la estaci&oacute;n emisora";
 choices[29][3] = "Elimina las tramas no recogidas y es el punto central de informaci&oacute;n de 'timing' para un anillo";
 answers[29] = choices[29][3];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3559. ";


//  Id pregunta: 3612 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  La interconexi&oacute;n de redes privadas a trav&eacute;s de la red 'p&uacute;blica' Internet manteniendo sus propias direcciones IP se consigue por medio de:";
 choices[30]= new Array();
 choices[30][0] = "Firewalls";
 choices[30][1] = "Proxies a nivel de aplicaci&oacute;n";
 choices[30][2] = "Tunneling o encapsulado";
 choices[30][3] = "Cifrado de las cabeceras IP";
 answers[30] = choices[30][2];
 units[30] = "103,113";
 comments[30] = "Id Pregunta: 3612. ";


//  Id pregunta: 3668 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Una centralita telef&oacute;nica digital privada para RDSI, o un &ldquo;bridge&rdquo; &oacute; &ldquo;router&rdquo; de red de &aacute;rea local con puerto RDSI es un dispositivo:";
 choices[31]= new Array();
 choices[31][0] = "ET1";
 choices[31][1] = "ET2";
 choices[31][2] = "TR2";
 choices[31][3] = "AT";
 answers[31] = choices[31][2];
 units[31] = "103";
 comments[31] = "Id Pregunta: 3668. ";


//  Id pregunta: 3878 Año de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;C&uacute;al es la longitud por defecto del campo de informaci&oacute;n en una trama Frame-Relay?";
 choices[32]= new Array();
 choices[32][0] = "Es de 1 Byte";
 choices[32][1] = "Es de 1600 Bytes";
 choices[32][2] = "Es de 8.000 Bytes";
 choices[32][3] = "Ninguna de las anteriores es cierta";
 answers[32] = choices[32][1];
 units[32] = "109";
 comments[32] = "Id Pregunta: 3878. ";


//  Id pregunta: 3999 Año de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l fue el servicio para el que originalmente fueron dise&ntilde;adas las redes de cable?";
 choices[33]= new Array();
 choices[33][0] = "Televisi&oacute;n";
 choices[33][1] = "Telefon&iacute;a";
 choices[33][2] = "Transporte de datos";
 choices[33][3] = "Conexi&oacute;n a Internet";
 answers[33] = choices[33][0];
 units[33] = "105";
 comments[33] = "Id Pregunta: 3999. ";


//  Id pregunta: 4093 Año de creación de pregunta: 2006-01-01
 questions[34]= "35)  Que es TRAM";
 choices[34]= new Array();
 choices[34][0] = "Una arquitectura web basada en software libre";
 choices[34][1] = "Una arquitectura web basada en j2ee";
 choices[34][2] = "Una arquitectura web basada en .Net";
 choices[34][3] = "Ninguna de las anteriores";
 answers[34] = choices[34][3];
 units[34] = "114,115, 116";
 comments[34] = "Id Pregunta: 4093. ";


//  Id pregunta: 4106 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  Un GigaPop es:";
 choices[35]= new Array();
 choices[35][0] = "1000 pops.";
 choices[35][1] = "Un nodo de interconexi&oacute;n del backbone de Internet 2.";
 choices[35][2] = "Ninguna de las anteriores";
 choices[35][3] = "a) y b) son ciertas.";
 answers[35] = choices[35][1];
 units[35] = "112";
 comments[35] = "Id Pregunta: 4106. ";


//  Id pregunta: 4136 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  El mecanismo usado para garantizar que solo los usuarios autorizados pueden usar o copiar aplicaciones software espec&iacute;ficas se llama";
 choices[36]= new Array();
 choices[36][0] = "informe de an&aacute;lisis de programa autorizado";
 choices[36][1] = "clave";
 choices[36][2] = "acuerdo de nivel de servicio (SLA)";
 choices[36][3] = "dongle";
 answers[36] = choices[36][3];
 units[36] = "37";
 comments[36] = "Id Pregunta: 4136. ";


//  Id pregunta: 4149 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  M&eacute;todo seguro de autorizaci&oacute;n de acceso a un servicio en una red desarrollado en el proyecto Athena del MIT";
 choices[37]= new Array();
 choices[37][0] = "Carnivore";
 choices[37][1] = "Internet Key Exchange (IKE)";
 choices[37][2] = "Kerberos";
 choices[37][3] = "SSL";
 answers[37] = choices[37][2];
 units[37] = "111";
 comments[37] = "Id Pregunta: 4149. ";


//  Id pregunta: 4303 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  En el An&aacute;lisis estructurado moderno, la &ldquo;lista de eventos&rdquo; se utiliza para:";
 choices[38]= new Array();
 choices[38][0] = "Mejorar los requisitos de trazabilidad.";
 choices[38][1] = "Construir diagramas Entidad-Historia";
 choices[38][2] = "Documentar las transacciones de datos en el Diagrama Entidad-Relaci&oacute;n.";
 choices[38][3] = "Construir un Diagrama de Flujo de Datos preliminar del sistema.";
 answers[38] = choices[38][3];
 units[38] = "81";
 comments[38] = "Id Pregunta: 4303. ";


//  Id pregunta: 4334 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  La topolog&iacute;a de una LAN puede ser:";
 choices[39]= new Array();
 choices[39][0] = "BUS, Anillo, Estrella y Mixta.";
 choices[39][1] = "&Aacute;rbol, Anillo y Estrella";
 choices[39][2] = "BUS, Anillo, Estrella, Completa, &Aacute;rbol o Mixta.";
 choices[39][3] = "BUS, Anillo, Estrella, &Aacute;rbol y Mixta.";
 answers[39] = choices[39][2];
 units[39] = "100";
 comments[39] = "Id Pregunta: 4334. ";


//  Id pregunta: 4342 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  Seg&uacute;n la Ley 59/2003 de Firma Electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma electr&oacute;nica es aquel que al menos ofrece una serie de garant&iacute;as. &iquest;Cu&aacute;l de las siguientes no es una garant&iacute;a exigida para dichos dispositivos?:";
 choices[40]= new Array();
 choices[40][0] = "Que los datos utilizados para la generaci&oacute;n de firma pueden producirse s&oacute;lo una vez y asegura razonablemente su secreto.";
 choices[40][1] = "Que existe una seguridad razonable de que los datos utilizados para la generaci&oacute;n de firma no pueden ser derivados de los de verificaci&oacute;n de firma o de la propia firma.";
 choices[40][2] = "Que los datos de creaci&oacute;n de firma pueden ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;n por terceros";
 choices[40][3] = "Que el dispositivo de creaci&oacute;n de firma est&eacute; certificado al menos con el nivel de seguridad EAL4+.";
 answers[40] = choices[40][3];
 units[40] = "30";
 comments[40] = "Id Pregunta: 4342. ";


//  Id pregunta: 4350 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  La red G&Eacute;ANT:";
 choices[41]= new Array();
 choices[41][0] = "Es una red basada en IPv6 de &aacute;mbito mundial, que constituye el n&uacute;cleo de Internet.";
 choices[41][1] = "Es una red basada en IPv6, que sirve de desarrollo e investigaci&oacute;n para la nueva Internet 2.";
 choices[41][2] = "Es la siguiente evoluci&oacute;n l&oacute;gica de la Intranet Administrativa que une a diversos organismos de la Administraci&oacute;n General del Estado.";
 choices[41][3] = "Es una red paneuropea de investigaci&oacute;n, formada por la uni&oacute;n de las redes de investigaci&oacute;n, financiada por la Uni&oacute;n Europea";
 answers[41] = choices[41][3];
 units[41] = "103";
 comments[41] = "Id Pregunta: 4350. ";


//  Id pregunta: 4382 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en m&eacute;trica V3, en el proceso de construcci&oacute;n del sistema?";
 choices[42]= new Array();
 choices[42][0] = "Generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[42][1] = "Ejecuci&oacute;n de las pruebas unitarias.";
 choices[42][2] = "Definici&oacute;n de interfaces de usuario.";
 choices[42][3] = "Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n.";
 answers[42] = choices[42][1];
 units[42] = "86";
 comments[42] = "Id Pregunta: 4382. ";


//  Id pregunta: 4470 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cual de los siguientes modelos de ciclo de vida no es adecuado para el desarrollo de sistemas de informaci&oacute;n orientados a objetos?";
 choices[43]= new Array();
 choices[43][0] = "Modelo de agrupamiento.";
 choices[43][1] = "Modelo en cascada.";
 choices[43][2] = "Modelo remolino.";
 choices[43][3] = "Modelo pinball.";
 answers[43] = choices[43][1];
 units[43] = "76";
 comments[43] = "Id Pregunta: 4470. ";


//  Id pregunta: 4486 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[44]= new Array();
 choices[44][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[44][1] = "El algoritmo de &aacute;rbol de extensi&oacute;n (spanning tree algorithm) es utilizado par los dispositivos puentes (o &quot;bridges&quot;) para construir topolog&iacute;as de interconexi&oacute;n de LAN's libres de bucles.";
 choices[44][2] = "Los encaminadores o routers deben tener implementadas las funcionalidades de los 7 niveles del modelo de referencia OSI para descubrir las rutas de encaminamiento adecuadas.";
 choices[44][3] = "Las pasarelas o gateways permiten, entre otras funcionalidades Ia implementaci&oacute;n de servicios NAT de traducci&oacute;n de direcciones IP.";
 answers[44] = choices[44][2];
 units[44] = "102";
 comments[44] = "Id Pregunta: 4486. ";


//  Id pregunta: 4487 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  En un sistema de gesti&oacute;n de red, Ia base de datos MIB (Management Information Base):";
 choices[45]= new Array();
 choices[45][0] = "Identifica el elemento de administraci&oacute;n central de Ia red.";
 choices[45][1] = "Especifica los elementos y Ia parte de los datos que un nodo debe conservar, asi Como las operaciones que se permiten sobre cada uno de ellos";
 choices[45][2] = "Establece Ia conexi&oacute;n entre el nodo administrado y la estaci&oacute;n administradora central.";
 choices[45][3] = "Es una Unidad de Datos del Protocolo (6 PDU) de gesti&oacute;n de red.";
 answers[45] = choices[45][1];
 units[45] = "104";
 comments[45] = "Id Pregunta: 4487. ";


//  Id pregunta: 4524 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Qu&eacute; nombre recibe el enfoque recogido por la norma ISO 9001:2000 para el desarrollo, implementaci&oacute;n y mejora de la eficacia de un sistema de un gesti&oacute;n de calidad?";
 choices[46]= new Array();
 choices[46][0] = "Enfoque basado en clientes.";
 choices[46][1] = "Enfoque basado en &iacute;ndices de calidad.";
 choices[46][2] = "Enfoque basado en requisitos.";
 choices[46][3] = "Enfoque basado en procesos.";
 answers[46] = choices[46][3];
 units[46] = "92";
 comments[46] = "Id Pregunta: 4524. ";


//  Id pregunta: 4558 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Seg&uacute;n la LOPD de datos de car&aacute;cter personal, indicar cual de las siguientes infracciones es calificada como grave";
 choices[47]= new Array();
 choices[47][0] = "no atender los requerimientos o apercibimientos de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos o no proporcionar a aqu&eacute;lla cuantos documentos e informaciones sean solicitados por la misma.";
 choices[47][1] = "el impedimento del ejercicio de derechos de acceso y oposici&oacute;n y la negativa a facilitar informaci&oacute;n solicitada.";
 choices[47][2] = "no atender de forma sistem&aacute;tica el deber legal de notificaci&oacute;n de la inclusi&oacute;n de datos de car&aacute;cter personal en un fichero";
 choices[47][3] = "tratar los datos de car&aacute;cter personal de forma legitima";
 answers[47] = choices[47][1];
 units[47] = "29";
 comments[47] = "Id Pregunta: 4558. ";


//  Id pregunta: 4625 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Cuai de las siguientes caracter&iacute;stica del protocolo SOAP es falsa";
 choices[48]= new Array();
 choices[48][0] = "atraviesa firewalls y routers.";
 choices[48][1] = "depende del sistema operativo y del procesador";
 choices[48][2] = "es un est&aacute;ndar de la industria";
 choices[48][3] = "utiliza los mismos est&aacute;ndares de la Web.";
 answers[48] = choices[48][1];
 units[48] = "51";
 comments[48] = "Id Pregunta: 4625. ";


//  Id pregunta: 4762 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Indicar la afirmaci&oacute;n incorrecta:";
 choices[49]= new Array();
 choices[49][0] = "COBIT fue desarrollado por la Information Systems Audit and Control Association (ISACA) y el IT Governance Institute (ITGI)";
 choices[49][1] = "COBIT fue lanzado en 1991";
 choices[49][2] = "COBIT se aplica a los sistemas de informaci&oacute;n de toda la empresa, incluyendo las computadoras personales, mini computadoras y ambientes distribuidos";
 choices[49][3] = "COBIT esta alineado con est&aacute;ndares y regulaciones &quot;de facto&quot;";
 answers[49] = choices[49][1];
 units[49] = "98";
 comments[49] = "Id Pregunta: 4762. ";


//  Id pregunta: 4799 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Qu&eacute; tipo de documento NO es publicado por el Instituto Europeo de Normas de Telecomunicaciones (ETSI)?";
 choices[50]= new Array();
 choices[50][0] = "Gu&iacute;a ETSI";
 choices[50][1] = "Norma ETSI";
 choices[50][2] = "Recomendaci&oacute;n ETSI";
 choices[50][3] = "Especificaci&oacute;n t&eacute;cnica ETSI";
 answers[50] = choices[50][2];
 units[50] = "42";
 comments[50] = "Id Pregunta: 4799. ";


//  Id pregunta: 4816 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN(Gateway GPRS Support Node)?";
 choices[51]= new Array();
 choices[51][0] = "La gesti&oacute;n de la movilidad";
 choices[51][1] = "El cifrado y autenticaci&oacute;n";
 choices[51][2] = "La conexi&oacute;n al HLR (Home Location Register)";
 choices[51][3] = "La conexi&oacute;n a los ISP (Internet Service Provider)";
 answers[51] = choices[51][3];
 units[51] = "108";
 comments[51] = "Id Pregunta: 4816. ";


//  Id pregunta: 4883 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  Dentro de un sistema de cableado estructurado el denominado &quot;subsistema horizontal&quot; es aquel que:";
 choices[52]= new Array();
 choices[52][0] = "Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta";
 choices[52][1] = "Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta";
 choices[52][2] = "Interconecta edificios en el entorno de un campus";
 choices[52][3] = "Interconecta a todo el cableado de un edificio";
 answers[52] = choices[52][1];
 units[52] = "99";
 comments[52] = "Id Pregunta: 4883. ";


//  Id pregunta: 5024 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Cual de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSD-AAPP v.3.0";
 choices[53]= new Array();
 choices[53][0] = "Ponderaci&oacute;n Lineal";
 choices[53][1] = "Permutaci&oacute;n";
 choices[53][2] = "Prometh&eacute;e";
 choices[53][3] = "Distancia al Ideal (TOPSIS)";
 answers[53] = choices[53][1];
 units[53] = "34";
 comments[53] = "Id Pregunta: 5024. Examen TIC A 2007";


//  Id pregunta: 5105 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Cu&aacute;l de los siguientes es un modelo de estimaci&oacute;n de proyectos software:";
 choices[54]= new Array();
 choices[54][0] = "CMMI";
 choices[54][1] = "COCOMO";
 choices[54][2] = "M&eacute;todo de Cox";
 choices[54][3] = "El plan de SQA";
 answers[54] = choices[54][1];
 units[54] = "89";
 comments[54] = "Id Pregunta: 5105. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5246 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Seg&uacute;n Metrica v3, el Plan de Sistemas de Informaci&oacute;n";
 choices[55]= new Array();
 choices[55][0] = "Se compone de 9 actividades, que deben realizarse secuencialmente sin que ninguna de ellas pueda realizarse en paralelo";
 choices[55][1] = "Tiene por objeto obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que responda a los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[55][2] = "Define el programa general de actuaciones para la planificaci&oacute;n del desarrollo de los sistemas de informaci&oacute;n y su presupuestaci&oacute;n";
 choices[55][3] = "Todas las anteriores son correctas";
 answers[55] = choices[55][1];
 units[55] = "77";
 comments[55] = "Id Pregunta: 5246. ";


//  Id pregunta: 5267 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  El marco regulador del BOE en formato electr&oacute;nico esta recogido en la siguiente norma";
 choices[56]= new Array();
 choices[56][0] = "RD 181/2008";
 choices[56][1] = "RD 1495/2007";
 choices[56][2] = "a y b";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][0];
 units[56] = "30";
 comments[56] = "Id Pregunta: 5267. ";


//  Id pregunta: 5514 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indique c&oacute;mo podr&iacute;a interconectar dos ordenadores personales seg&uacute;n la tecnolog&iacute;a ethernet:";
 choices[57]= new Array();
 choices[57][0] = "Mediante un cable cruzado";
 choices[57][1] = "Mediante un cable sin cruzar o cable plano";
 choices[57][2] = "Mediante un dado de interconexi&oacute;n";
 choices[57][3] = "Mediante cualquiera de las tres opciones indicadas ";
 answers[57] = choices[57][0];
 units[57] = "99";
 comments[57] = "Id Pregunta: 5514. ";


//  Id pregunta: 5595 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  Los sistemas din&aacute;micos de contrataci&oacute;n incluidos en la ley 30/2007...";
 choices[58]= new Array();
 choices[58][0] = "Son solo para contratos de obras";
 choices[58][1] = "Se desarrollar&aacute; el sistema y la adjudicaci&oacute;n por medios telem&aacute;ticos, inform&aacute;ticos y electr&oacute;nicos, exclusivamente";
 choices[58][2] = "La duraci&oacute;n de un sistema de contrataci&oacute;n din&aacute;mico no podr&aacute; exceder, en t&eacute;rminos generales, los 2 a&ntilde;os";
 choices[58][3] = "Se podr&aacute; cargar a las empresas un 0.5% del montante total del contrato, en concepto de participaci&oacute;n";
 answers[58] = choices[58][1];
 units[58] = "41";
 comments[58] = "Id Pregunta: 5595. ";


//  Id pregunta: 5696 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Los certificados del DNI electr&oacute;nico:";
 choices[59]= new Array();
 choices[59][0] = "Se expiden voluntariamente a petici&oacute;n del ciudadano";
 choices[59][1] = " Se expiden siempre y vienen activados";
 choices[59][2] = "S&oacute;lo se expiden a quien autorice la Direcci&oacute;n General de la Polic&iacute;a";
 choices[59][3] = "Se expiden siempre, pero se activan voluntariamente con el consentimiento del ciudadano";
 answers[59] = choices[59][3];
 units[59] = "74";
 comments[59] = "Id Pregunta: 5696. ";


//  Id pregunta: 5770 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  El Titulo III de la LOPD se refiere a los &ldquo;derechos de las personas&rdquo;, sin embargo en el TITULO II se recoge otro derecho relacionado con los Principios de la Protecci&oacute;n de datos que es:";
 choices[60]= new Array();
 choices[60][0] = "Oposici&oacute;n";
 choices[60][1] = "Cancelaci&oacute;n";
 choices[60][2] = "Revisi&oacute;n";
 choices[60][3] = "Informaci&oacute;n";
 answers[60] = choices[60][3];
 units[60] = "29";
 comments[60] = "Id Pregunta: 5770. ";


//  Id pregunta: 5778 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[61]= new Array();
 choices[61][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[61][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[61][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[61][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[61] = choices[61][1];
 units[61] = "59";
 comments[61] = "Id Pregunta: 5778. MAP 2008 A1";


//  Id pregunta: 5853 Año de creación de pregunta: 2009-01-01
 questions[62]= "63)  Con respecto a ITIL, el proceso &quot;Configuration Management&quot; o Gesti&oacute;n de la Configuraci&oacute;n, &iquest;en cu&aacute;l de los m&oacute;dulos ITIL citados seguidamente est&aacute; incluido?";
 choices[62]= new Array();
 choices[62][0] = "ICT Infrastructure Management";
 choices[62][1] = "Service Delibery";
 choices[62][2] = "Service Support";
 choices[62][3] = "Software Asset Management";
 answers[62] = choices[62][2];
 units[62] = "98";
 comments[62] = "Id Pregunta: 5853. Pregunta 33";


//  Id pregunta: 5960 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  La adquisici&oacute;n de un programa de ordenador a medida se considera un contrato de:";
 choices[63]= new Array();
 choices[63][0] = "Obras";
 choices[63][1] = "Gesti&oacute;n de servicios p&uacute;blicos";
 choices[63][2] = "Servicios";
 choices[63][3] = "Suministros";
 answers[63] = choices[63][2];
 units[63] = "41";
 comments[63] = "Id Pregunta: 5960. Castilla La Mancha 2009";


//  Id pregunta: 5974 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  Dadas las siguientes relaciones: A={ax,ay,az,by,bz,cx,cy} y B={x,z} &iquest;Cu&aacute;l ser&iacute;a el resultado de la operaci&oacute;n A dividido entre B?";
 choices[64]= new Array();
 choices[64][0] = "{a,b,c}.";
 choices[64][1] = "{ax,az,bz,cx}.";
 choices[64][2] = "{ay,by,cy}.";
 choices[64][3] = "{a}.";
 answers[64] = choices[64][3];
 units[64] = "58";
 comments[64] = "Id Pregunta: 5974. TIC A 2009";


//  Id pregunta: 6097 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  El sistema operativo MSDOS es:";
 choices[65]= new Array();
 choices[65][0] = "Multiprocesador asim&eacute;trico.";
 choices[65][1] = "Multiprocesador sim&eacute;trico.";
 choices[65][2] = "Multiusuario.";
 choices[65][3] = "Monoprocesador.";
 answers[65] = choices[65][3];
 units[65] = "52";
 comments[65] = "Id Pregunta: 6097. TIC A 2009";


//  Id pregunta: 6129 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  En la arquitectura Java, &iquest;qu&eacute; se entiende por JSR?";
 choices[66]= new Array();
 choices[66][0] = "Un applet.";
 choices[66][1] = "Es una especificaci&oacute;n en la que se describe una tecnolog&iacute;a, sus partes, las relaciones entre las mismas y los roles de las personas que usar&aacute;n dicha tecnolog&iacute;a.";
 choices[66][2] = "Es una especificaci&oacute;n que describe la manera en que la parte servidora atender&aacute; las peticiones hechas por un applet o un javascript. Es el acr&oacute;nimo de Java Server Request.";
 choices[66][3] = "Un JavaBean.";
 answers[66] = choices[66][1];
 units[66] = "60";
 comments[66] = "Id Pregunta: 6129. TIC A 2009";


//  Id pregunta: 6143 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  En relaci&oacute;n con los c&oacute;decs que se utilizan en sistemas de telefon&iacute;a:";
 choices[67]= new Array();
 choices[67][0] = "G.711 utiliza el algoritmo PCM y es el c&oacute;dec que garantiza la mayor calidad de sonido por lo que se suele utilizar en entornos LAN de VoIP";
 choices[67][1] = "G.729 es el algoritmo m&aacute;s extendido en sistemas de VoIP sobre WAN, ya que aunque tiene p&eacute;rdida por compresi&oacute;n la calidad de sonido (MOS) es buena";
 choices[67][2] = "El c&oacute;dec que se utiliza en GSM (GSM 06.10) proporciona una calidad de sonido peor que G.711 y G.729";
 choices[67][3] = "Todas las respuestas anteriores son correctas";
 answers[67] = choices[67][3];
 units[67] = "100, 109";
 comments[67] = "Id Pregunta: 6143. ";


//  Id pregunta: 6178 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Se&ntilde;ale la informaci&oacute;n falsa sobre AJAX:";
 choices[68]= new Array();
 choices[68][0] = "Las aplicaciones desarrolladas con AJAX usan Javascript y XML.";
 choices[68][1] = "Las aplicaciones desarrolladas con AJAX tienen una mejor experiencia de usuario.";
 choices[68][2] = "AJAX es la base de las Rich Internet Applications.";
 choices[68][3] = "Las aplicaciones AJAX son de tipo pull.";
 answers[68] = choices[68][3];
 units[68] = "69";
 comments[68] = "Id Pregunta: 6178. ";


//  Id pregunta: 6194 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[69]= new Array();
 choices[69][0] = "La Administraci&oacute;n General del Estado";
 choices[69][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[69][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[69][3] = "Todas las Administraciones P&uacute;blicas";
 answers[69] = choices[69][1];
 units[69] = "43";
 comments[69] = "Id Pregunta: 6194. Articulo 1";


//  Id pregunta: 6281 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[70]= new Array();
 choices[70][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[70][1] = "An&aacute;lisis DAFO ";
 choices[70][2] = "Aprendizaje organizativo";
 choices[70][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[70] = choices[70][1];
 units[70] = "77";
 comments[70] = "Id Pregunta: 6281. ";


//  Id pregunta: 6288 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Seg&uacute;n Pressman, &iquest;cu&aacute;l de los siguientes no es un objetivo que deba cumplir un modelo de an&aacute;lisis (especificaci&oacute;n)?";
 choices[71]= new Array();
 choices[71][0] = "Establecer una base para la creaci&oacute;n de un dise&ntilde;o software";
 choices[71][1] = "Definir el calendario de ejecuci&oacute;n del proyecto";
 choices[71][2] = "Definir un conjunto de requisitos que una vez el sistema est&eacute; construido se puedan validar";
 choices[71][3] = "Describir lo que el cliente quiere";
 answers[71] = choices[71][1];
 units[71] = "78";
 comments[71] = "Id Pregunta: 6288. ";


//  Id pregunta: 6300 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;C&oacute;mo se denomina la clase que no tiene instancias?";
 choices[72]= new Array();
 choices[72][0] = "No existen clases sin instancias";
 choices[72][1] = "Invisible";
 choices[72][2] = "Hu&eacute;rfana";
 choices[72][3] = "Abstracta";
 answers[72] = choices[72][3];
 units[72] = "82";
 comments[72] = "Id Pregunta: 6300. ";


//  Id pregunta: 6354 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  Los interesados en la explotaci&oacute;n de una determinada red o en la prestaci&oacute;n de un determinado servicio de comunicaciones electr&oacute;nicas deber&aacute;n comunicarlo al Registro de Operadores en los t&eacute;rminos que se determinen mediante ";
 choices[73]= new Array();
 choices[73][0] = "Real Decreto";
 choices[73][1] = "Resoluci&oacute;n Motivada";
 choices[73][2] = "Orden Ministerial";
 choices[73][3] = "Acuerdo del Consejo de Ministros";
 answers[73] = choices[73][0];
 units[73] = "110";
 comments[73] = "Id Pregunta: 6354. Art&iacute;culo 6.2 Ley 32/2003";


//  Id pregunta: 6404 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Cuando un trabajador asalariado cree un programa de ordenador, en el ejercicio de las funciones que le han sido confiadas o siguiendo las instrucciones de su empresario, &iquest;a qui&eacute;n corresponde la titularidad de los derechos de explotaci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "Al empresario, salvo pacto en contrario";
 choices[74][1] = "Al trabajador, en todo caso";
 choices[74][2] = "Al empresario, en todo caso";
 choices[74][3] = "Al trabajador, salvo pacto en contrario";
 answers[74] = choices[74][0];
 units[74] = "36";
 comments[74] = "Id Pregunta: 6404. Art&iacute;culo 97 RDL 1/1996";


//  Id pregunta: 6453 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Qu&eacute; m&eacute;todo de HTTP se debe utilizar para comprobar la validez de una p&aacute;gina sin que la llamada retorne el cuerpo del mensaje?";
 choices[75]= new Array();
 choices[75][0] = "GET";
 choices[75][1] = "HEAD";
 choices[75][2] = "POST";
 choices[75][3] = "SERVICE";
 answers[75] = choices[75][1];
 units[75] = "112";
 comments[75] = "Id Pregunta: 6453. Castilla La Mancha 2009";


//  Id pregunta: 6460 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Respecto a los contratos celebrados por v&iacute;a electr&oacute;nica &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[76]= new Array();
 choices[76][0] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos";
 choices[76][1] = "Las partes podr&aacute;n pactar que un tercero archive las declaraciones de voluntad que integran los contratos electr&oacute;nicos por un per&iacute;odo inferior a tres a&ntilde;os";
 choices[76][2] = "Siempre que la Ley exija que el contrato o cualquier informaci&oacute;n relacionada con el mismo conste por escrito esta deber&aacute; enviarse por correo ordinario al contratante";
 choices[76][3] = "El soporte electr&oacute;nico en que conste un contrato celebrado por v&iacute;a electr&oacute;nica ser&aacute; admisible en juicio como prueba documental";
 answers[76] = choices[76][3];
 units[76] = "30";
 comments[76] = "Id Pregunta: 6460. Castilla La Mancha 2009";


//  Id pregunta: 6558 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  Servicios de una Autoridad de Certificaci&oacute;n esenciales son:";
 choices[77]= new Array();
 choices[77][0] = "Generaci&oacute;n y gesti&oacute;n de claves criptogr&aacute;ficas";
 choices[77][1] = "Servicios de directorio";
 choices[77][2] = "Registro de usuarios mediante el que se acredita la identidad";
 choices[77][3] = "Todas las respuestas anteriores son correctas";
 answers[77] = choices[77][3];
 units[77] = "74";
 comments[77] = "Id Pregunta: 6558. ";


//  Id pregunta: 6584 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  El documento de seguridad";
 choices[78]= new Array();
 choices[78][0] = "debe mantenerse siempre actualizado";
 choices[78][1] = "Es una obligaci&oacute;n de todos los responsables de fichero, y en su caso, para los encargados del tratamiento";
 choices[78][2] = "Debe existir con independencia del nivel de seguridad que sea necesario aplicar";
 choices[78][3] = "Todas las respuestas anteriores son correctas";
 answers[78] = choices[78][3];
 units[78] = "29";
 comments[78] = "Id Pregunta: 6584. ";


//  Id pregunta: 6623 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  ISO 8402 define la calidad del software como:";
 choices[79]= new Array();
 choices[79][0] = "La capacidad de un conjunto de caracter&iacute;sticas intr&iacute;nsecas para satisfacer requisitos";
 choices[79][1] = "Conjunto de propiedades y caracter&iacute;sticas de un producto o servicio, que le confieren aptitud para satisfacer una serie de necesidades expl&iacute;citas o impl&iacute;citas";
 choices[79][2] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que seesperan de todo software desarrollado profesionalmente";
 choices[79][3] = "La norma ISO 8402 no es una norma de calidad";
 answers[79] = choices[79][1];
 units[79] = "87";
 comments[79] = "Id Pregunta: 6623. ";


//  Id pregunta: 8195 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  La normativa vigente sobre Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) establece que:";
 choices[80]= new Array();
 choices[80][0] = "Las dimensiones m&iacute;nimas de una ICT incluyen los elementos necesarios para la captaci&oacute;n y adaptaci&oacute;n de las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales y por sat&eacute;lite.";
 choices[80][1] = "Su &aacute;mbito de aplicaci&oacute;n son todos los inmuebles de nueva construcci&oacute;n a partir de su entrada en vigor. ";
 choices[80][2] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Bolet&iacute;n de Instalaci&oacute;n. ";
 choices[80][3] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Certificado de Fin de Obra. ";
 answers[80] = choices[80][2];
 units[80] = "99";
 comments[80] = "Id Pregunta: 8195. Examen TIC A1 2010";


//  Id pregunta: 8212 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Los equipos &quot;Bluetooth&quot; emplean:";
 choices[81]= new Array();
 choices[81][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[81][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencias.";
 choices[81][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[81][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[81] = choices[81][1];
 units[81] = "107";
 comments[81] = "Id Pregunta: 8212. Examen TIC A1 2010";


//  Id pregunta: 8222 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l es el nivel m&iacute;nimo de accesibilidad que deben cumplir las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas o financiadas con fondos p&uacute;blicos?:";
 choices[82]= new Array();
 choices[82][0] = "No existe m&iacute;nimo alguno fijado por la normativa.";
 choices[82][1] = "El definido en las prioridades 1 y 2 de la norma UNE 139803: 2004.";
 choices[82][2] = "El m&aacute;s alto que permita el estado de la t&eacute;cnica en cada momento.";
 choices[82][3] = "El definido en la norma UNE 14009 :2006, apartados 2 y 3.";
 answers[82] = choices[82][1];
 units[82] = "39";
 comments[82] = "Id Pregunta: 8222. Examen TIC A1 2010";


//  Id pregunta: 8225 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[83]= new Array();
 choices[83][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[83][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[83][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[83][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[83] = choices[83][1];
 units[83] = "92";
 comments[83] = "Id Pregunta: 8225. Examen TIC A1 2010";


//  Id pregunta: 8377 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre iSCSI es FALSA?:";
 choices[84]= new Array();
 choices[84][0] = "Es un est&aacute;ndar de la IETF.";
 choices[84][1] = "Utiliza por defecto los puertos TCP 860 y TCP 3260.";
 choices[84][2] = "Necesita una arquitectura de cableado independiente.";
 choices[84][3] = "Usa CHAP como principal m&eacute;todo de autenticaci&oacute;n.";
 answers[84] = choices[84][2];
 units[84] = "48";
 comments[84] = "Id Pregunta: 8377. Examen TIC A2 2010";


//  Id pregunta: 8518 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Indicar la respuesta correcta respecto al diagrama de flujo de datos:";
 choices[85]= new Array();
 choices[85][0] = "Un proceso de control puede ser el origen de los datos pero nunca el final de los datos.";
 choices[85][1] = "El flujo de di&aacute;logo se representa por una flecha discontinua que indica la direcci&oacute;n de los datos, y que se etiqueta con un nombre representativo.";
 choices[85][2] = "Un flujo de di&aacute;logo es un flujo entre un proceso y un almac&eacute;n que representa una consulta y una actualizaci&oacute;n.";
 choices[85][3] = "Un proceso de control se encarga de coordinar y sincronizar los accesos a los almacenes de datos.";
 answers[85] = choices[85][2];
 units[85] = "86";
 comments[85] = "Id Pregunta: 8518. Examen TIC A2 2010 interna";


//  Id pregunta: 8541 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;En qu&eacute; a&ntilde;o ha concluido el apag&oacute;n anal&oacute;gico en Espa&ntilde;a?";
 choices[86]= new Array();
 choices[86][0] = "2007";
 choices[86][1] = "2008";
 choices[86][2] = "2009";
 choices[86][3] = "2010";
 answers[86] = choices[86][3];
 units[86] = "105";
 comments[86] = "Id Pregunta: 8541. Examen TIC A2 2010 interna";


//  Id pregunta: 8594 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecutan en el servidor?";
 choices[87]= new Array();
 choices[87][0] = "Javascripts";
 choices[87][1] = "Applets";
 choices[87][2] = "JSP";
 choices[87][3] = "VisualScript";
 answers[87] = choices[87][2];
 units[87] = "116";
 comments[87] = "Id Pregunta: 8594. Examen TIC A2 2010 interna";


//  Id pregunta: 8669 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  Cu&aacute;l de los siguientes elementos de seguridad opera en el nivel 3 del modelo OSI";
 choices[88]= new Array();
 choices[88][0] = "Proxy";
 choices[88][1] = "Firewall de filtrado de paquetes";
 choices[88][2] = "Antivirus";
 choices[88][3] = "Filtro anti SPAM";
 answers[88] = choices[88][1];
 units[88] = "111";
 comments[88] = "Id Pregunta: 8669. Examen UPM A2 2011";


//  Id pregunta: 8741 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  En un organismo p&uacute;blico se gestionan datos personales relativos a la comisi&oacute;n de infracciones administrativas, pero, en ning&uacute;n caso, infracciones penales, &iquest;deben cifrar las transmisiones que puedan hacer de esos datos, a trav&eacute;s de redes p&uacute;blicas?";
 choices[89]= new Array();
 choices[89][0] = "NO en todos los casos. Como no se trata de infracciones penales las medidas de seguridad requeridas son las de nivel bajo, siempre que esos datos queden en el &aacute;mbito de la Administraci&oacute;n";
 choices[89][1] = "Si, se trata de datos de infracciones, que requieren por tanto medidas de nivel alto, aunque el cifrado se puede sustituir por cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros";
 choices[89][2] = "NO se requiere tal cifrado, pues las medidas que requieren ese tipo de datos son las de nivel medio y el mencionado cifrado es una medida de seguridad de nivel alto.";
 choices[89][3] = "Si. El cifrado a trav&eacute;s de redes p&uacute;blicas, a diferencia del realizado a trav&eacute;s de redes inal&aacute;mbricas es una medida de nivel medio, requerida en el caso planteado.";
 answers[89] = choices[89][2];
 units[89] = "29";
 comments[89] = "Id Pregunta: 8741. Examen TIC A2 2010 interna";


//  Id pregunta: 8771 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Se ha comprado una c&aacute;mara IP que requiere m&aacute;s potencia de la habitual, m&aacute;s que con la normal IEEE 802.3.af. Esta c&aacute;mara funciona con la versi&oacute;n actualizada de IEEE 802.3af y requiere POE con mayor alimentaci&oacute;n. Como se llama esta norma si es que existe:";
 choices[90]= new Array();
 choices[90][0] = "IEEE 802.3at, PoE+ o PoE Plus.";
 choices[90][1] = "IEEE 802.3ag, o PoE extendido.";
 choices[90][2] = "PoE2.";
 choices[90][3] = "No existe una actualizaci&oacute;n del standard IEEE 802.3af";
 answers[90] = choices[90][0];
 units[90] = "101";
 comments[90] = "Id Pregunta: 8771. Examen UPM A2 2011";


//  Id pregunta: 8774 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  a) &iquest;Cu&aacute;l de las siguientes cabeceras de extensi&oacute;n no est&aacute; especificada en la RFC 2460 que desarrolla las especificaciones de el protocolo IPv6?";
 choices[91]= new Array();
 choices[91][0] = "Hop-By-Hop Options";
 choices[91][1] = "Routing (Type 0)";
 choices[91][2] = "Fragment";
 choices[91][3] = "Authentication Header";
 answers[91] = choices[91][3];
 units[91] = "100";
 comments[91] = "Id Pregunta: 8774. Examen UPM A2 2011";


//  Id pregunta: 8912 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  El sistema de radiocomunicaciones digitales TETRA:";
 choices[92]= new Array();
 choices[92][0] = "Tiene capacidades de transmisi&oacute;n de datos.";
 choices[92][1] = "No permite comunicaciones uno a muchos.";
 choices[92][2] = "Permite una mayor densidad de usuarios que GSM.";
 choices[92][3] = "Es exclusivamente anal&oacute;gico";
 answers[92] = choices[92][0];
 units[92] = "108";
 comments[92] = "Id Pregunta: 8912. Operador Ayto. Madrid 2010";


//  Id pregunta: 8954 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  &iquest;Para qu&eacute; se utiliza el comando fdisk?:";
 choices[93]= new Array();
 choices[93][0] = "Para formatear una partici&oacute;n";
 choices[93][1] = "Para formatear un disco completo";
 choices[93][2] = "Para crear una partici&oacute;n";
 choices[93][3] = "Para crear i-nodos";
 answers[93] = choices[93][2];
 units[93] = "53,54";
 comments[93] = "Id Pregunta: 8954. ";


//  Id pregunta: 9116 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  &iquest;Qu&eacute; es la segmentaci&oacute;n?";
 choices[94]= new Array();
 choices[94][0] = "T&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas o segmentos.";
 choices[94][1] = "Los segmentos est&aacute;n conectados entre s&iacute; y cada uno al siguiente.";
 choices[94][2] = "Todos los segmentos proceden y progresan a la vez";
 choices[94][3] = "Todas las respuestas son correctas";
 answers[94] = choices[94][3];
 units[94] = "45";
 comments[94] = "Id Pregunta: 9116. ";


//  Id pregunta: 9141 Año de creación de pregunta: 2013-01-01
 questions[95]= "96)  &iquest;De qu&eacute; tipo de registros puede disponer un procesador?";
 choices[95]= new Array();
 choices[95][0] = "Opacos";
 choices[95][1] = "Transparentes";
 choices[95][2] = "De control";
 choices[95][3] = "Ninguna respuesta es v&aacute;lida.";
 answers[95] = choices[95][1];
 units[95] = "47";
 comments[95] = "Id Pregunta: 9141. ";


//  Id pregunta: 9188 Año de creación de pregunta: 2013-01-01
 questions[96]= "97)  &iquest;En qu&eacute; proceso se llevan a cabo las pruebas de sistema?";
 choices[96]= new Array();
 choices[96][0] = "ASI";
 choices[96][1] = "DSI";
 choices[96][2] = "CSI";
 choices[96][3] = "IAS";
 answers[96] = choices[96][2];
 units[96] = "86";
 comments[96] = "Id Pregunta: 9188. ";


//  Id pregunta: 9457 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  Seg&uacute;n Codd, una entidad que no contiene grupos repetitivos est&aacute;, al menos, en:";
 choices[97]= new Array();
 choices[97][0] = "Primera Forma Normal.";
 choices[97][1] = "Segunda Forma Normal.";
 choices[97][2] = "Tercera Forma Normal.";
 choices[97][3] = "Forma Normal de Boyce-Codd.";
 answers[97] = choices[97][0];
 units[97] = "58";
 comments[97] = "Id Pregunta: 9457. ";


//  Id pregunta: 10520 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En relaci&oacute;n al Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[98]= new Array();
 choices[98][0] = "Es presidido por el Ministro de Industria, Energ&iacute;a y Turismo";
 choices[98][1] = "Es un &oacute;rgano asesor del Gobierno en materia de telecomunicaciones y sociedad de la informaci&oacute;n";
 choices[98][2] = "Su composici&oacute;n y su r&eacute;gimen se establecen mediante Orden Ministerial";
 choices[98][3] = "Sus miembros representar&aacute;n entre otros a los sindicatos";
 answers[98] = choices[98][2];
 units[98] = "110";
 comments[98] = "Id Pregunta: 10520. ";


//  Id pregunta: 10539 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Se&ntilde;ale la respuesta incorrecta respecto a MPLS y VPLS:";
 choices[99]= new Array();
 choices[99][0] = "RSVP-TE y LDP son protocolos de establecimiento de camino";
 choices[99][1] = "en MPLS el camino establecido es bidireccional";
 choices[99][2] = "VPLS permite conexiones muchos a muchos mientras que MPLS es punto a punto";
 choices[99][3] = "el campo de etiqueta en MPLS es de 20 bits";
 answers[99] = choices[99][1];
 units[99] = "100";
 comments[99] = "Id Pregunta: 10539. ";


