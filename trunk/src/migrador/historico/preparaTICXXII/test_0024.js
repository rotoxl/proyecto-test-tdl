/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 52 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;les son los instrumentos b&aacute;sicos de un sistema de ayuda a la decisi&oacute;n orientado a datos?:";
 choices[0]= new Array();
 choices[0][0] = "Consultas predefinidas, consultas ad hoc, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 choices[0][1] = "Informes resumen, consultas predefinidas, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 choices[0][2] = "Informes resumen, consultas ad hoc, informes de excepci&oacute;n y Consultas predefinidas";
 choices[0][3] = "Informes resumen, consultas ad hoc, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 answers[0] = choices[0][3];
 units[0] = "21";
 comments[0] = "Id Pregunta: 52. ";


//  Id pregunta: 88 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qui&eacute;n dijo que uno de los elementos necesarios en una organizaci&oacute;n es la existencia de un fin com&uacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "Richard Nolan";
 choices[1][1] = "Stephen P. Robbins";
 choices[1][2] = "Andrea Zerilli";
 choices[1][3] = "James C. Emery";
 answers[1] = choices[1][2];
 units[1] = "22";
 comments[1] = "Id Pregunta: 88. ";


//  Id pregunta: 317 Año de creación de pregunta: 2009-01-01
 questions[2]= "3)  La LOPD no es de aplicaci&oacute;n a:";
 choices[2]= new Array();
 choices[2][0] = "Los ficheros creados por las fuerzas y cuerpos de seguridad recogidos para fines administrativos";
 choices[2][1] = "Los datos recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones legalmente establecidas";
 choices[2][2] = "Los ficheros automatizados con datos personales de car&aacute;cter tributario";
 choices[2][3] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 answers[2] = choices[2][3];
 units[2] = "29";
 comments[2] = "Id Pregunta: 317. ";


//  Id pregunta: 343 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La tarea de conceder a un producto o servicio un certificado indicando que se ha comprobado que cumple unas determinadas normas o especificaciones t&eacute;cnicas se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Certificaci&oacute;n";
 choices[3][1] = "Homologaci&oacute;n";
 choices[3][2] = "Normalizaci&oacute;n";
 choices[3][3] = "Estandarizaci&oacute;n";
 answers[3] = choices[3][0];
 units[3] = "42";
 comments[3] = "Id Pregunta: 343. ";


//  Id pregunta: 457 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(3,12,21) y B( 6,15,30), la desviaci&oacute;n critica del proyecto ser&aacute;:";
 choices[4]= new Array();
 choices[4][0] = "9";
 choices[4][1] = "5";
 choices[4][2] = "7";
 choices[4][3] = "4";
 answers[4] = choices[4][1];
 units[4] = "28";
 comments[4] = "Id Pregunta: 457. ";


//  Id pregunta: 528 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  En un proyecto de desarrollo sw, en qu&eacute; fase del ciclo de vida se centrar&aacute; principalmente la revisi&oacute;n de un auditor inform&aacute;tico:";
 choices[5]= new Array();
 choices[5][0] = "Pruebas";
 choices[5][1] = "Estudio de viabilidad";
 choices[5][2] = "Dise&ntilde;o";
 choices[5][3] = "Programaci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "31, 32, 33";
 comments[5] = "Id Pregunta: 528. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 577 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[6]= new Array();
 choices[6][0] = "Desde el punto de vista cuantitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia mas &oacute;ptima de actividades.";
 choices[6][1] = "Desde el punto de vista cualitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia mas &oacute;ptima de actividades.";
 choices[6][2] = "Desde el punto de vista cuantitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia de actividades.";
 choices[6][3] = "Desde el punto de vista cualitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia  actividades.";
 answers[6] = choices[6][0];
 units[6] = "27";
 comments[6] = "Id Pregunta: 577. ";


//  Id pregunta: 657 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[7]= new Array();
 choices[7][0] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones";
 choices[7][1] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada";
 choices[7][2] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica";
 choices[7][3] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad";
 answers[7] = choices[7][2];
 units[7] = "34";
 comments[7] = "Id Pregunta: 657. ";


//  Id pregunta: 663 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments):";
 choices[8]= new Array();
 choices[8][0] = "X/OPEN";
 choices[8][1] = "ACE";
 choices[8][2] = "OSF";
 choices[8][3] = "IEEE";
 answers[8] = choices[8][3];
 units[8] = "40";
 comments[8] = "Id Pregunta: 663. ";


//  Id pregunta: 737 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  Si le notifican una multa de tr&aacute;fico mediante el Servicio de Notificaciones Telem&aacute;ticas Seguras (Direcci&oacute;n Electr&oacute;nica Unica):";
 choices[9]= new Array();
 choices[9][0] = "Puede rechazar recibir la notificaci&oacute;n";
 choices[9][1] = "No puede rechazar recibir la notificaci&oacute;n";
 choices[9][2] = "Le sirve de preaviso, pero debe esperar la notificaci&oacute;n oficial por correo ordinario, o la publicaci&oacute;n de la sanci&oacute;n en el Bolet&iacute;n Oficial de la Provincia";
 choices[9][3] = "Puede reenviarla a otro buz&oacute;n electr&oacute;nico de su elecci&oacute;n";
 answers[9] = choices[9][0];
 units[9] = "30";
 comments[9] = "Id Pregunta: 737. Examen TIC MAP B 2004";


//  Id pregunta: 924 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es JDBC?:";
 choices[10]= new Array();
 choices[10][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[10][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[10][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[10][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[10] = choices[10][1];
 units[10] = "60";
 comments[10] = "Id Pregunta: 924. ";


//  Id pregunta: 1032 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  El mecanismo de overlay,  utilizado para poder ejecutar programas de mayor tama&ntilde;o que la memoria principal se caracteriza por:";
 choices[11]= new Array();
 choices[11][0] = "Es un mecanismo que permite al programador no preocuparse por el tama&ntilde;o de los programas";
 choices[11][1] = "El programador debe partir los programas en trozos de tama&ntilde;os similares";
 choices[11][2] = "No es necesario que los programas contengan instrucciones que gestionen el proceso de cargar en memoria el c&oacute;digo que se va a ejecutar en un momento dado";
 choices[11][3] = "Sustituy&oacute; al proceso de paginaci&oacute;n a lo largo de los a&ntilde;os 60";
 answers[11] = choices[11][1];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1032. ";


//  Id pregunta: 1035 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[12]= new Array();
 choices[12][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[12][1] = "Interfaz lenguaje de datos de usuario";
 choices[12][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[12][3] = "Interfaz lenguaje de datos interno";
 answers[12] = choices[12][2];
 units[12] = "57";
 comments[12] = "Id Pregunta: 1035. ";


//  Id pregunta: 1223 Año de creación de pregunta: 2005-01-01
 questions[13]= "14)  Los DN, en LDAP, se representan en:";
 choices[13]= new Array();
 choices[13][0] = "XML";
 choices[13][1] = "HTML";
 choices[13][2] = "Texto plano";
 choices[13][3] = "ASN.1";
 answers[13] = choices[13][2];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1223. RFC 4514";


//  Id pregunta: 1600 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  En un SGBD (Sistema Gestor de Base de Datos), &iquest;qu&eacute; tipo de bloqueos puede haber?";
 choices[14]= new Array();
 choices[14][0] = "Bloqueo de lectura, de escritura, de registro y de p&aacute;gina.";
 choices[14][1] = "Bloqueo de registro y de p&aacute;gina pero nunca de lectura ni escritura.";
 choices[14][2] = "Bloqueo de lectura y de escritura pero nunca de registro ni de p&aacute;gina.";
 choices[14][3] = "Bloqueo de escritura y de registro pero nunca de lectura ni de p&aacute;gina.";
 answers[14] = choices[14][0];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1600. ";


//  Id pregunta: 1682 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  Respecto al software gratuito y al software libre podemos decir que";
 choices[15]= new Array();
 choices[15][0] = "El software gratuito siempre es libre";
 choices[15][1] = "El software libre siempre es gratuito";
 choices[15][2] = "El software libre y el software gratuito son dos terminos equivalentes";
 choices[15][3] = "Ninguna de las afirmaciones anteriores es correcta";
 answers[15] = choices[15][3];
 units[15] = "61";
 comments[15] = "Id Pregunta: 1682. ";


//  Id pregunta: 1788 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Al realizar la b&uacute;squeda en un espacio de estados, el m&eacute;todo de backtraking &hellip;";
 choices[16]= new Array();
 choices[16][0] = "Solo se puede usar para b&uacute;squedas ciegas";
 choices[16][1] = "Permite ahorrar recursos de computaci&oacute;n";
 choices[16][2] = "Permite recorrer los &aacute;rboles solo en anchura";
 choices[16][3] = "Permite recorrer los &aacute;rboles solo en profundidad";
 answers[16] = choices[16][1];
 units[16] = "63";
 comments[16] = "Id Pregunta: 1788. ";


//  Id pregunta: 1804 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n que sea FALSA acerca de la educaci&oacute;n virtual (e-learning)";
 choices[17]= new Array();
 choices[17][0] = "La educaci&oacute;n virtual exige a los alumnos m&aacute;s esfuerzo en aprender las t&eacute;cnicas que en el contenido";
 choices[17][1] = "Lo realmente complejo en la educaci&oacute;n virtual es la instalaci&oacute;n de las herramientas necesarias";
 choices[17][2] = "La educaci&oacute;n virtual no rivaliza con la educaci&oacute;n presencial";
 choices[17][3] = "La educaci&oacute;n virtual permite la evaluaci&oacute;n de los alumnos de forma completamente fiable";
 answers[17] = choices[17][3];
 units[17] = "66";
 comments[17] = "Id Pregunta: 1804. ";


//  Id pregunta: 1845 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  Indique la respuesta falsa en relaci&oacute;n al WfMC (Workflow Management Coalition):";
 choices[18]= new Array();
 choices[18][0] = "Organizaci&oacute;n destinada a establecer est&aacute;ndares relativos a la terminolog&iacute;a del software, su interoperabilidad y conectividad";
 choices[18][1] = "Organizaci&oacute;n creada por las principales empresas del sector para el facilitar la compatibilidad de sus herramientas";
 choices[18][2] = "Ha desarrollado el denominado Modelo de Referencia de Workflow";
 choices[18][3] = "Est&aacute; dividida en tres comit&eacute;s principales: el Comit&eacute; T&eacute;cnico, el Comit&eacute; de Relaciones Externas y el Comit&eacute; Directivo";
 answers[18] = choices[18][1];
 units[18] = "71";
 comments[18] = "Id Pregunta: 1845. ";


//  Id pregunta: 1949 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de J2ME es cierta";
 choices[19]= new Array();
 choices[19][0] = "Es un subconjunto del paquete Swing de J2SE";
 choices[19][1] = "Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n";
 choices[19][2] = "Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS";
 choices[19][3] = "Proporciona clases para el desarrollo de elementos gr&aacute;ficos";
 answers[19] = choices[19][3];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1949. ";


//  Id pregunta: 1994 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  El estudio de Viabilidad del Sistema:";
 choices[20]= new Array();
 choices[20][0] = "Es una parte del ciclo de vida, y como tal est&aacute; comtemplado en la metodolog&iacute;a METRICA V3";
 choices[20][1] = "No est&aacute; contemplado en la METRICA, pues esta es solo una metodolog&iacute;a de desarrollo";
 choices[20][2] = "No es necesaria si se emplean t&eacute;cnicas orientadas a objetos";
 choices[20][3] = "No es necesaria si el desarrollo del sistema viene motivado por una orden superior.";
 answers[20] = choices[20][0];
 units[20] = "86";
 comments[20] = "Id Pregunta: 1994. Pregunta TIC-B 2004";


//  Id pregunta: 2299 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  El premio European Quality Award de EFQM se otorga  en las siguientes categor&iacute;as:";
 choices[21]= new Array();
 choices[21][0] = "Empresas";
 choices[21][1] = "Empresas y unidades operativas de empresas";
 choices[21][2] = "Empresas, unidades operativas de empresas y PYMES";
 choices[21][3] = "Empresas, unidades operativas de empresas, PYMES y organizaciones p&uacute;blicas";
 answers[21] = choices[21][3];
 units[21] = "92";
 comments[21] = "Id Pregunta: 2299. ";


//  Id pregunta: 2395 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  La ingenier&iacute;a inversa consiste en:";
 choices[22]= new Array();
 choices[22][0] = "Obtener los elementos de dise&ntilde;o de un sistema de informaci&oacute;n a partir del c&oacute;digo fuente y de las estructuras de datos que utiliza.";
 choices[22][1] = "Realizar un proceso de redise&ntilde;o de un sistema de informaci&oacute;n, bas&aacute;ndose en la utilizaci&oacute;n de las nuevas tecnolog&iacute;as de dise&ntilde;o inverso (desde el conocimiento de las posibilidades de las nuevas tecnolog&iacute;as hasta los requerimientos funcionales).";
 choices[22][2] = "Redise&ntilde;ar el c&oacute;digo y las estructuras de un sistema de informaci&oacute;n bas&aacute;ndose en los dise&ntilde;os f&iacute;sicos.";
 choices[22][3] = "Un conjunto de herramientas orientadas a facilitar las fases de an&aacute;lisis y dise&ntilde;o de los sistemas de informaci&oacute;n.";
 answers[22] = choices[22][0];
 units[22] = "91";
 comments[22] = "Id Pregunta: 2395. ";


//  Id pregunta: 2727 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes factores no es necesario tener en cuenta para guiar a una organizaci&oacute;n hacia el futuro?";
 choices[23]= new Array();
 choices[23][0] = "El mercado";
 choices[23][1] = "La misi&oacute;n";
 choices[23][2] = "Metas y objetivos";
 choices[23][3] = "Subvenciones";
 answers[23] = choices[23][3];
 units[23] = "77";
 comments[23] = "Id Pregunta: 2727. ";


//  Id pregunta: 2844 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  PDF se diferencia de Postscript en que";
 choices[24]= new Array();
 choices[24][0] = "PDF no es un lenguaje , es un formato de archivo";
 choices[24][1] = "No se diferencian; ambos son lenguajes y formatos de archivo";
 choices[24][2] = "Postscript es independiente de la plataforma";
 choices[24][3] = "Postscript permite modificaciones parciales (editabilidad)";
 answers[24] = choices[24][0];
 units[24] = "93";
 comments[24] = "Id Pregunta: 2844. ";


//  Id pregunta: 3175 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes no corresponde a una definici&oacute;n correcta de especificaci&oacute;n de la ITU-T?:";
 choices[25]= new Array();
 choices[25][0] = "X.25: interfaz entre ETD y ETCD para terminales en modo paquete en redes p&uacute;blicas de conmutaci&oacute;n de paquetes";
 choices[25][1] = "X.29: define los mecanismos y protocolos para la conexi&oacute;n de terminales as&iacute;ncronos a trav&eacute;s de la red X25, usando un PAD";
 choices[25][2] = "X.32: interfaz entre ETD y ETCD para terminales telegr&aacute;ficos accediendo a redes p&uacute;blicas de conmutaci&oacute;n de paquetes v&iacute;a red de conmutaci&oacute;n de circuitos";
 choices[25][3] = "X.75: interconexi&oacute;n de redes p&uacute;blicas de conmutaci&oacute;n de paquetes y conexi&oacute;n de nodos de las mismas";
 answers[25] = choices[25][2];
 units[25] = "109";
 comments[25] = "Id Pregunta: 3175. ";


//  Id pregunta: 3182 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes respuestas no describe las funciones de un repetidor?:";
 choices[26]= new Array();
 choices[26][0] = "Recibe, amplifica y retransmite las se&ntilde;ales recibidas";
 choices[26][1] = "Interconecta m&uacute;ltiples segmentos de LAN";
 choices[26][2] = "Previene del deterioro de la se&ntilde;al causado por las largas longitudes del cable";
 choices[26][3] = "Filtra el tr&aacute;fico basado en las direcciones MAC";
 answers[26] = choices[26][3];
 units[26] = "97";
 comments[26] = "Id Pregunta: 3182. ";


//  Id pregunta: 3562 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  En un domicilio particular abonado a un &quot;acceso b&aacute;sico&quot; de RDSI:";
 choices[27]= new Array();
 choices[27][0] = "Siempre puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica";
 choices[27][1] = "No puede estar conectado a Internet ya su vez recibir una llamada telef&oacute;nica";
 choices[27][2] = "Puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica, solo en el caso de que disponga de un &quot;m&oacute;dem&quot; ADSL";
 choices[27][3] = "Ninguna de las anteriores es correcta";
 answers[27] = choices[27][0];
 units[27] = "103";
 comments[27] = "Id Pregunta: 3562. ";


//  Id pregunta: 3658 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  Un conjunto de redes administradas por una entidad com&uacute;n y que comparten una estrategia com&uacute;n de encaminamiento se conoce en la terminolog&iacute;a ISO como:";
 choices[28]= new Array();
 choices[28][0] = "Una LAN (RAL)";
 choices[28][1] = "Un &aacute;rea";
 choices[28][2] = "Un sistema aut&oacute;nomo";
 choices[28][3] = "Un dominio";
 answers[28] = choices[28][2];
 units[28] = "102";
 comments[28] = "Id Pregunta: 3658. ";


//  Id pregunta: 3963 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  Ordenar los siguientes dispositivos seg&uacute;n nivel OSI a puente b gateway c router d repetidor";
 choices[29]= new Array();
 choices[29][0] = "d a c b ";
 choices[29][1] = "a b c d";
 choices[29][2] = "b c d a";
 choices[29][3] = "b a d c ";
 answers[29] = choices[29][0];
 units[29] = "113";
 comments[29] = "Id Pregunta: 3963. ";


//  Id pregunta: 3964 Año de creación de pregunta: 2003-01-01
 questions[30]= "31)  Registro basado en XML para listar servicios Web que se ponen a disposici&oacute;n de otros";
 choices[30]= new Array();
 choices[30][0] = " UDDI";
 choices[30][1] = "WSDL";
 choices[30][2] = " SOAP";
 choices[30][3] = " JAXP";
 answers[30] = choices[30][0];
 units[30] = "69";
 comments[30] = "Id Pregunta: 3964. ";


//  Id pregunta: 4135 Año de creación de pregunta: 2006-01-01
 questions[31]= "32)  Los mensajes enviados por alguien para saber qu&eacute; servicios de la red se encuentran activos se llaman";
 choices[31]= new Array();
 choices[31][0] = "robo de bits";
 choices[31][1] = "Lenguaje de descripci&oacute;n de servicios Web (WSDL)";
 choices[31][2] = "Identificador de Perfil de Servicio (SPI)";
 choices[31][3] = "escaneo de puertos";
 answers[31] = choices[31][3];
 units[31] = "100";
 comments[31] = "Id Pregunta: 4135. ";


//  Id pregunta: 4185 Año de creación de pregunta: 2006-01-01
 questions[32]= "33)  Para transmitir Gigabit Ethernet";
 choices[32]= new Array();
 choices[32][0] = "Es necesario un cableado de categoria 6";
 choices[32][1] = "Es necesaria fibra &oacute;ptica";
 choices[32][2] = "Se puede usar cable coaxial";
 choices[32][3] = "ninguna de las anteriores";
 answers[32] = choices[32][3];
 units[32] = "99";
 comments[32] = "Id Pregunta: 4185. ";


//  Id pregunta: 4248 Año de creación de pregunta: 2007-01-01
 questions[33]= "34)  El desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a NO se dirige hacia:";
 choices[33]= new Array();
 choices[33][0] = "Que los ciudadanos puedan elegir el canal de acceso a las AAPP (tel&eacute;fono, Internet, SMSs, TDT...).";
 choices[33][1] = "Que los ciudadanos puedan acceder a los servicios de las AAPP 24 horas al d&iacute;a, 7 d&iacute;as a la semana.";
 choices[33][2] = "Que los tr&aacute;mites por medios electr&oacute;nicos no obtengan la misma validez que los realizados por medios presenciales.";
 choices[33][3] = "Que los ciudadanos no tengan que presentar documentaci&oacute;n que obre en poder de las AAPP.";
 answers[33] = choices[33][2];
 units[33] = "30";
 comments[33] = "Id Pregunta: 4248. ";


//  Id pregunta: 4302 Año de creación de pregunta: 2007-01-01
 questions[34]= "35)  Una vez obtenido el Diagrama de Flujo de Datos y el Modelo L&oacute;gico Normalizado, se debe comprobar que:";
 choices[34]= new Array();
 choices[34][0] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una y s&oacute;lo una entidad del Modelo L&oacute;gico Normalizado";
 choices[34][1] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una o varias entidades del Modelo L&oacute;gico Normalizado";
 choices[34][2] = "Cada entidad del Modelo L&oacute;gico Normalizado se corresponde con uno o varios almacenes del Diagrama de Flujo de Datos";
 choices[34][3] = "Cada flujo del Diagrama de Flujo de Datos se almacena en una o varias entidades del Modelo L&oacute;gico Normalizado.";
 answers[34] = choices[34][1];
 units[34] = "81";
 comments[34] = "Id Pregunta: 4302. ";


//  Id pregunta: 4373 Año de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de calidad CMM (Capacity Mature Model)?";
 choices[35]= new Array();
 choices[35][0] = "Inicial";
 choices[35][1] = "Administrado";
 choices[35][2] = "Definido";
 choices[35][3] = "Ideal";
 answers[35] = choices[35][3];
 units[35] = "88";
 comments[35] = "Id Pregunta: 4373. ";


//  Id pregunta: 4494 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  El protocolo L2TP es com&uacute;nmente utilizado por las VPN (Redes Privadas Virtuales) para:";
 choices[36]= new Array();
 choices[36][0] = "Efectuar el proceso de encriptado de los datos transmitidos a trav&eacute;s de Ia red publica.";
 choices[36][1] = "Efectuar Ia autentificaci&oacute;n de los usuarios.";
 choices[36][2] = "Crear t&uacute;neles de nivel OSI 2 que encapsulan los datagramas IP transmitidos a trav&eacute;s de Ia red publica.";
 choices[36][3] = "Filtrar los datos recibidos por cada usuario.";
 answers[36] = choices[36][2];
 units[36] = "111";
 comments[36] = "Id Pregunta: 4494. ";


//  Id pregunta: 4530 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;CuaI de las siguientes interfaces no corresponde a m&eacute;trica V.3?";
 choices[37]= new Array();
 choices[37][0] = "Gesti&oacute;n de Proyectos (GP)";
 choices[37][1] = "Seguridad (SEG)";
 choices[37][2] = "Control de la planificaci&oacute;n (CP)";
 choices[37][3] = "Gesti&oacute;n de Ia configuraci&oacute;n (GC)";
 answers[37] = choices[37][2];
 units[37] = "86";
 comments[37] = "Id Pregunta: 4530. ";


//  Id pregunta: 4752 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  La interfaz entre la RNC de la UTRAN y el SGSN es:";
 choices[38]= new Array();
 choices[38][0] = "Iu";
 choices[38][1] = "Iub";
 choices[38][2] = " Gi";
 choices[38][3] = " Gb";
 answers[38] = choices[38][0];
 units[38] = "108";
 comments[38] = "Id Pregunta: 4752. ";


//  Id pregunta: 4834 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 (Internet Control Message Protocol version 4)?";
 choices[39]= new Array();
 choices[39][0] = "32";
 choices[39][1] = "64";
 choices[39][2] = "128";
 choices[39][3] = "256";
 answers[39] = choices[39][1];
 units[39] = "100";
 comments[39] = "Id Pregunta: 4834. ";


//  Id pregunta: 4937 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  En el Modelo E/R de Chen del universo de discurso del departamento de RRHH de una cierta organizaci&oacute;n,existe la restricci&oacute;n, en base a un criterio fijado por la Direcci&oacute;n, de que el atributo &ldquo;mes&rdquo; de la entidad&ldquo;vacaciones&rdquo; s&oacute;lo podr&aacute; tomar los valores &lsquo;Junio&rsquo;, &lsquo;Julio&rsquo; y &lsquo;Agosto&rsquo;. Esta restricci&oacute;n o limitaci&oacute;n deintegridad es de tipo:";
 choices[40]= new Array();
 choices[40][0] = "Sint&aacute;ctica.";
 choices[40][1] = "Sem&aacute;ntica estructural.";
 choices[40][2] = "Sem&aacute;ntica de usuario sobre los valores.";
 choices[40][3] = "Sem&aacute;ntica de usuario sobre la asociaci&oacute;n.";
 answers[40] = choices[40][2];
 units[40] = "80";
 comments[40] = "Id Pregunta: 4937. Examen TIC B 2007";


//  Id pregunta: 5413 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  La propiedad de un objeto denominada persistencia consiste en";
 choices[41]= new Array();
 choices[41][0] = "Que un objeto ocupa un determinado espacio de memoria y existe durante una cierta cantidad de tiempo. Es un concepto din&aacute;mico. La permanencia del objeto es el tiempo durante el cual se le asigna espacio y permanece accesible en la memoria del ordenador";
 choices[41][1] = "Un objeto ocupa un determinado espacio de memoria durante toda la vida de la aplicaci&oacute;n. La permanencia del objeto es que est&aacute; accesible en la memoria del ordenador";
 choices[41][2] = "Un objeto est&aacute; accesible ocupe o no memoria en el ordenador, el S.O. se encarga de cargar y descargar el objeto de la memoria RAM";
 choices[41][3] = "La persistencia de un objeto consiste en que aunque su instancia haya sido eliminada el objeto sigue accesible";
 answers[41] = choices[41][0];
 units[41] = "82";
 comments[41] = "Id Pregunta: 5413. Examen 2006 JCYL";


//  Id pregunta: 5459 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  Una de las ventajas del protocolo PPP respecto al SLIP es:";
 choices[42]= new Array();
 choices[42][0] = "Permite conexiones s&iacute;ncronas y as&iacute;ncronas";
 choices[42][1] = "Permite varios protocolos de red sobre &eacute;l";
 choices[42][2] = "Permite crear redes privadas virtuales";
 choices[42][3] = "Todas las respuestas son correctas";
 answers[42] = choices[42][3];
 units[42] = "100, 101, 107, 111";
 comments[42] = "Id Pregunta: 5459. Castilla y Le&oacute;n";


//  Id pregunta: 5759 Año de creación de pregunta: 2009-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es un sistema operativo de la familia BSD?";
 choices[43]= new Array();
 choices[43][0] = "SecureBSD";
 choices[43][1] = "NetBSD";
 choices[43][2] = "DesktopBSD";
 choices[43][3] = "DragonflyBSD";
 answers[43] = choices[43][0];
 units[43] = "61";
 comments[43] = "Id Pregunta: 5759. ";


//  Id pregunta: 5884 Año de creación de pregunta: 2009-01-01
 questions[44]= "45)  En relaci&oacute;n a &quot;Internet Assigned Numbers Authority&quot; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[44]= new Array();
 choices[44][0] = "IANA coordina a nivel global el &quot;DNS root&quot;";
 choices[44][1] = "IANA gestiona el dominio .int (top-level)";
 choices[44][2] = "IANA asigna las direcciones IP";
 choices[44][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board";
 answers[44] = choices[44][2];
 units[44] = "112";
 comments[44] = "Id Pregunta: 5884. MAP 2008 A1";


//  Id pregunta: 5938 Año de creación de pregunta: 2009-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de estos no es un producto de virtualizaci&oacute;n de VMWare?";
 choices[45]= new Array();
 choices[45][0] = "VMWare Parallels";
 choices[45][1] = "VMWare ESXi";
 choices[45][2] = "VMWare Workstation";
 choices[45][3] = "VMWare Fusion";
 answers[45] = choices[45][0];
 units[45] = "119";
 comments[45] = "Id Pregunta: 5938. ";


//  Id pregunta: 5958 Año de creación de pregunta: 2009-01-01
 questions[46]= "47)  De entre las siguientes opciones, se&ntilde;ale la que no se corresponde con una metodolog&iacute;a de desarrollo &aacute;gil:";
 choices[46]= new Array();
 choices[46][0] = "Rational Rapid Development (RRD)";
 choices[46][1] = "Scrum";
 choices[46][2] = "Extreme Programming (XP)";
 choices[46][3] = "Open Unified Process (OpenUP)";
 answers[46] = choices[46][0];
 units[46] = "79";
 comments[46] = "Id Pregunta: 5958. ";


//  Id pregunta: 5965 Año de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Qu&eacute; norma espa&ntilde;ola es la vigente de &quot;Tecnolog&iacute;as de la Informaci&oacute;n. T&eacute;cnicas de seguridad. Sistema de Gesti&oacute;n de la Seguridad de la Informaci&oacute;n (SGSI). Requisitos&quot;?";
 choices[47]= new Array();
 choices[47][0] = "UNE 71502:2004";
 choices[47][1] = "UNE-ISO/IEC 27001:2007";
 choices[47][2] = "UNE 17799:2000";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = choices[47][1];
 units[47] = "42";
 comments[47] = "Id Pregunta: 5965. Castilla La Mancha 2009";


//  Id pregunta: 5975 Año de creación de pregunta: 2010-01-01
 questions[48]= "49)  Suponga que dos sistemas A y B est&aacute;n conectados mediante un enlace transcontinental de capacidad C=64 Mbps y retardo de propagaci&oacute;n Rp=2 ms. A comienza a transmitir a B un fichero de 15 MB. &iquest;Cu&aacute;ntos octetos ha transmitido A cuando el primer bit de la transmisi&oacute;n llega a B?";
 choices[48]= new Array();
 choices[48][0] = "128.000.";
 choices[48][1] = "32.000.";
 choices[48][2] = "16.000.";
 choices[48][3] = "4.000.";
 answers[48] = choices[48][2];
 units[48] = "99";
 comments[48] = "Id Pregunta: 5975. TIC A 2009";


//  Id pregunta: 6052 Año de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos corresponde a la tecnolog&iacute;a que proporciona la infraestructura necesaria para la definici&oacute;n de servicios que puedan ser consumidos de manera uniforme sin conocer los detalles de los sistemas que los proporcionan?";
 choices[49]= new Array();
 choices[49][0] = "EAI Brokers (Enterprise Application Integration Brokers).";
 choices[49][1] = "UDDI (Universal Description, Discovery and Integration).";
 choices[49][2] = "CASE (Computer-Aided Software Engineering).";
 choices[49][3] = "ESB (Enterprise Service Bus).";
 answers[49] = choices[49][3];
 units[49] = "51";
 comments[49] = "Id Pregunta: 6052. TIC A 2009";


//  Id pregunta: 6162 Año de creación de pregunta: 2010-01-01
 questions[50]= "51)  Indique cual de las siguientes no es una funci&oacute;n de los gatekeepers:";
 choices[50]= new Array();
 choices[50][0] = "Control del Ancho de Banda.";
 choices[50][1] = "Rechazo de llamadas seg&uacute;n distintos criterios.";
 choices[50][2] = "Control de comunicaci&oacute;n con MCUs o gateways.";
 choices[50][3] = "Comunicaci&oacute;n con redes de conmutaci&oacute;n de circuitos.";
 answers[50] = choices[50][3];
 units[50] = "117";
 comments[50] = "Id Pregunta: 6162. ";


//  Id pregunta: 6204 Año de creación de pregunta: 2010-01-01
 questions[51]= "52)  Un requerimiento se define como una condici&oacute;n o necesidad de un usuario para resolver un problema o alcanzar un objetivo. Un requerimiento debe ser (se&ntilde;ale la correcta):";
 choices[51]= new Array();
 choices[51][0] = "Conciso, ambiguo, verificable";
 choices[51][1] = "Necesario, conciso, inconsistente";
 choices[51][2] = "Conciso, completo, verificable";
 choices[51][3] = "Completo, inconsistente, obvio";
 answers[51] = choices[51][2];
 units[51] = "78";
 comments[51] = "Id Pregunta: 6204. TICB-2009, bloque desarrollo";


//  Id pregunta: 6221 Año de creación de pregunta: 2010-01-01
 questions[52]= "53)  Respecto a los diagramas de flujo de datos &iquest;Cu&aacute;l de las siguientes es falsa?";
 choices[52]= new Array();
 choices[52][0] = "Un diagrama de flujo de datos se compone de los siguientes elementos: entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[52][1] = "Un proceso como origen de datos puede hacer las funciones de un almacen de datos";
 choices[52][2] = "Los flujos de datos que comunican procesos con almacenes pueden ser de los tipos: consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[52][3] = "Elementos a&ntilde;adidos al diagrama de flujo de datos para sistemas especiales: proceso de control y flujo de control";
 answers[52] = choices[52][1];
 units[52] = "81";
 comments[52] = "Id Pregunta: 6221. TICB-2009, bloque desarrollo";


//  Id pregunta: 6251 Año de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[53]= new Array();
 choices[53][0] = "Las pruebas de caja blanca se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[53][1] = "Las pruebas de caja blanca son pruebas de Sistema";
 choices[53][2] = "Las pruebas de caja negra se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[53][3] = "Las pruebas de caja negra son pruebas de Regresi&oacute;n";
 answers[53] = choices[53][0];
 units[53] = "87";
 comments[53] = "Id Pregunta: 6251. TICB-2009, bloque desarrollo";


//  Id pregunta: 6276 Año de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Cu&aacute;les son las fases por ciclo del modelo de ciclo de vida en espiral?";
 choices[54]= new Array();
 choices[54][0] = "Evaluaci&oacute;n, Planificaci&oacute;n, An&aacute;lisis de riesgos e Ingenier&iacute;a";
 choices[54][1] = "Planificaci&oacute;n, Ingenier&iacute;a, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 choices[54][2] = "Planificaci&oacute;n, An&aacute;lisis de riesgos, Ingenier&iacute;a y Evaluaci&oacute;n";
 choices[54][3] = "Ingenier&iacute;a, Planificaci&oacute;n, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 answers[54] = choices[54][2];
 units[54] = "76";
 comments[54] = "Id Pregunta: 6276. ";


//  Id pregunta: 6416 Año de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un principio del WCAG 2.0?";
 choices[55]= new Array();
 choices[55][0] = "Perceptible";
 choices[55][1] = "Operable";
 choices[55][2] = "Robusto";
 choices[55][3] = "Usable";
 answers[55] = choices[55][3];
 units[55] = "39";
 comments[55] = "Id Pregunta: 6416. ";


//  Id pregunta: 6438 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  Se&ntilde;ale una de las restricciones del modelo E/R:";
 choices[56]= new Array();
 choices[56][0] = "No se pueden realizar relaciones de unas relaciones con otras.";
 choices[56][1] = "No permite relacionar m&aacute;s de dos entidades.";
 choices[56][2] = "No permite relacines reflexivas.";
 choices[56][3] = "No se pueden representar las propiedades de las entidades.";
 answers[56] = choices[56][0];
 units[56] = "70";
 comments[56] = "Id Pregunta: 6438. ";


//  Id pregunta: 6530 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Qu&eacute; actividad es propia del BCM?";
 choices[57]= new Array();
 choices[57][0] = "An&aacute;lisis de impacto de negocio ";
 choices[57][1] = "An&aacute;lisis de riesgos";
 choices[57][2] = "Producci&oacute;n del plan de continuidad";
 choices[57][3] = "Todas";
 answers[57] = choices[57][3];
 units[57] = "98";
 comments[57] = "Id Pregunta: 6530. ";


//  Id pregunta: 6537 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  La gesti&oacute;n de recursos, de acuerdo a ISO 9004, se apoya en";
 choices[58]= new Array();
 choices[58][0] = "El ciclo de vida";
 choices[58][1] = "Gesti&oacute;n de la seguridad";
 choices[58][2] = "An&aacute;lisis de la viabilidad";
 choices[58][3] = "Infraestructura";
 answers[58] = choices[58][3];
 units[58] = "92";
 comments[58] = "Id Pregunta: 6537. ";


//  Id pregunta: 6553 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  PKCS#7 se centra en";
 choices[59]= new Array();
 choices[59][0] = "El formato del sobre digital";
 choices[59][1] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 choices[59][2] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[59][3] = "Todas las respuestas anteriores son correctas";
 answers[59] = choices[59][0];
 units[59] = "74";
 comments[59] = "Id Pregunta: 6553. ";


//  Id pregunta: 7166 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  En Oracle, un tablespace es:";
 choices[60]= new Array();
 choices[60][0] = "El espacio que ocupa un fichero en donde reside un &iacute;ndice";
 choices[60][1] = "El espacio f&iacute;sico de almacenamiento de datos";
 choices[60][2] = "El espacio que ocupa un fichero en donde reside una tabla";
 choices[60][3] = "El espacio l&oacute;gico de almacenamiento de datos";
 answers[60] = choices[60][3];
 units[60] = "58";
 comments[60] = "Id Pregunta: 7166. Examen TIC B 2009";


//  Id pregunta: 7256 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  La funci&oacute;n de un hub es ";
 choices[61]= new Array();
 choices[61][0] = "Reenviar los paquetes en funci&oacute;n de la direcci&oacute;n MAC de destino";
 choices[61][1] = "Repetir la informaci&oacute;n que llega a un puerto por el resto de puertos";
 choices[61][2] = "Dirigir correctamente tr&aacute;fico de una red a otra";
 choices[61][3] = "Asignar diferentes preferencias a los mensajes que fluyen por la red";
 answers[61] = choices[61][1];
 units[61] = "102";
 comments[61] = "Id Pregunta: 7256. Examen TIC B 2009";


//  Id pregunta: 7300 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  En reconocimiento autom&aacute;tico del habla (ASR), se utiliza el siguiente concepto:";
 choices[62]= new Array();
 choices[62][0] = "Trigrama";
 choices[62][1] = "Trifonema";
 choices[62][2] = "Al&oacute;fono";
 choices[62][3] = "Todos son conceptos utilizados en ASR";
 answers[62] = choices[62][3];
 units[62] = "94";
 comments[62] = "Id Pregunta: 7300. ";


//  Id pregunta: 7799 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)   En el &aacute;mbito de las tarjetas con chip integrado, &iquest;cu&aacute;l es el apartado de la norma ISO 7816 que recoge las especificaciones el&eacute;ctricas y los protocolos de comunicaci&oacute;n?";
 choices[63]= new Array();
 choices[63][0] = " ISO 7816.";
 choices[63][1] = " ISO 7816.";
 choices[63][2] = " ISO 7816-3.";
 choices[63][3] = " ISO 7816-4.";
 answers[63] = choices[63][2];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7799. Map 2005";


//  Id pregunta: 8190 Año de creación de pregunta: 2011-01-01
 questions[64]= "65)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[64]= new Array();
 choices[64][0] = "Mercado &uacute;nico digital din&aacute;mico. ";
 choices[64][1] = "Acceso ultrarr&aacute;pido a Internet. ";
 choices[64][2] = "Nativos digitales. ";
 choices[64][3] = "Inclusi&oacute;n digital. ";
 answers[64] = choices[64][2];
 units[64] = "30";
 comments[64] = "Id Pregunta: 8190. Examen TIC A1 2010";


//  Id pregunta: 8212 Año de creación de pregunta: 2011-01-01
 questions[65]= "66)  Los equipos &quot;Bluetooth&quot; emplean:";
 choices[65]= new Array();
 choices[65][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[65][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencias.";
 choices[65][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[65][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[65] = choices[65][1];
 units[65] = "107";
 comments[65] = "Id Pregunta: 8212. Examen TIC A1 2010";


//  Id pregunta: 8228 Año de creación de pregunta: 2011-01-01
 questions[66]= "67)  En programaci&oacute;n orientada a objetos, la capacidad de un objeto de una clase dada A de aparecer y comportarse como si fuera de la clase B se conoce como:";
 choices[66]= new Array();
 choices[66][0] = "Herencia.";
 choices[66][1] = "Extensibilidad.";
 choices[66][2] = "Sobrecarga.";
 choices[66][3] = "Polimorfismo.";
 answers[66] = choices[66][3];
 units[66] = "82";
 comments[66] = "Id Pregunta: 8228. Examen TIC A1 2010";


//  Id pregunta: 8301 Año de creación de pregunta: 2011-01-01
 questions[67]= "68)  Dentro del nivel AAL de ATM, AAL2 se caracteriza por tener: ";
 choices[67]= new Array();
 choices[67][0] = "Retardo constante y tasa de bit variable. ";
 choices[67][1] = "Retardo variable y tasa de bit constante.";
 choices[67][2] = "Retardo variable y tasa de bit variable. ";
 choices[67][3] = "Retardo constante y tasa de bit constante.";
 answers[67] = choices[67][0];
 units[67] = "109";
 comments[67] = "Id Pregunta: 8301. Examen TIC A2 2010";


//  Id pregunta: 8351 Año de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[68]= new Array();
 choices[68][0] = "Unity Application Block,";
 choices[68][1] = "Logging Application Block.";
 choices[68][2] = "Ajax Control Toolkit";
 choices[68][3] = "Cached XML Data Mapper";
 answers[68] = choices[68][0];
 units[68] = "59,115";
 comments[68] = "Id Pregunta: 8351. Examen TIC A2 2010";


//  Id pregunta: 8353 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[69]= new Array();
 choices[69][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[69][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[69][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[69][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[69] = choices[69][0];
 units[69] = "59,115";
 comments[69] = "Id Pregunta: 8353. Examen TIC A2 2010";


//  Id pregunta: 8379 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia completa, sin marcarlos individualmente como copiados, es una copia de seguridad:";
 choices[70]= new Array();
 choices[70][0] = "Acumulativa.";
 choices[70][1] = "Intermedia.";
 choices[70][2] = "Incremental.";
 choices[70][3] = "Diferencial.";
 answers[70] = choices[70][3];
 units[70] = "96";
 comments[70] = "Id Pregunta: 8379. Examen TIC A2 2010";


//  Id pregunta: 8512 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;C&oacute;mo se conoce a la disciplina en la que se estudian y aplican t&eacute;cnicas que permiten el ocultamiento de informaci&oacute;n o archivos, dentro de otros, llamados portadores, de modo que NO se perciba su existencia? ";
 choices[71]= new Array();
 choices[71][0] = "Esteganograf&iacute;a. ";
 choices[71][1] = "Criptograf&iacute;a. ";
 choices[71][2] = "Criptoan&aacute;lisis. ";
 choices[71][3] = "Estegan&aacute;lisis. ";
 answers[71] = choices[71][0];
 units[71] = "37";
 comments[71] = "Id Pregunta: 8512. Examen TIC A2 2010";


//  Id pregunta: 8611 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  Si sobre el fichero &quot;ejemplo.txt&quot; queremos dar permisos totales al due&ntilde;o, de lectura y ejecuci&oacute;n al grupo y s&oacute;lo de lectura al resto de usuarios, usaremos la instrucci&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "chmod 766 ejemplo.txt";
 choices[72][1] = "chmod 751 ejemplo.txt";
 choices[72][2] = "chmod 761 ejemplo.txt";
 choices[72][3] = "chmod 754 ejemplo.txt";
 answers[72] = choices[72][3];
 units[72] = "53,54";
 comments[72] = "Id Pregunta: 8611. Examen TIC A2 2010 interna";


//  Id pregunta: 8686 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  En el protocolo MPLS, la cabecera de las etiquetas MPLS, NO contiene el siguiente item:";
 choices[73]= new Array();
 choices[73][0] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 choices[73][1] = "Tiempo de vida (8 bits)";
 choices[73][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[73][3] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 answers[73] = choices[73][0];
 units[73] = "100";
 comments[73] = "Id Pregunta: 8686. Examen UPM A2 2011";


//  Id pregunta: 8761 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  Sean dos procesos: P1, con tiempo de ejecuci&oacute;n de 20ms, y P2, con 15ms. El planificador a corto plazo act&uacute;a seg&uacute;n un Round Robin con cuanto de 10ms y tiempo de conmutaci&oacute;n de tarea de 5ms Marcar el tiempo de retorno (regreso) de P2, teniendo en cuenta que se empieza ejecutando P1.";
 choices[74]= new Array();
 choices[74][0] = "35";
 choices[74][1] = "40";
 choices[74][2] = "50";
 choices[74][3] = "55";
 answers[74] = choices[74][2];
 units[74] = "52";
 comments[74] = "Id Pregunta: 8761. Examen TIC A2 2010 interna";


//  Id pregunta: 8874 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  En la tarea &ldquo;Valoraci&oacute;n de los Sistemas de Informaci&oacute;n actuales&rdquo;, encuadrado en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n, participan seg&uacute;n M&eacute;trica versi&oacute;n 3:";
 choices[75]= new Array();
 choices[75][0] = "Consultores y Consultores Inform&aacute;ticos";
 choices[75][1] = "Consultores y Jefes de Proyecto";
 choices[75][2] = "Consultores Inform&aacute;ticos y Usuarios Expertos";
 choices[75][3] = "Analistas y Jefes de Proyecto";
 answers[75] = choices[75][0];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8874. Analista Ayto. Madrid 2010";


//  Id pregunta: 8904 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  Un applet de Java de una p&aacute;gina Web &iquest;d&oacute;nde se ejecuta?:";
 choices[76]= new Array();
 choices[76][0] = "En el navegador del cliente.";
 choices[76][1] = "En el servidor Web.";
 choices[76][2] = "En el proxy.";
 choices[76][3] = "En el servidor de aplicaciones";
 answers[76] = choices[76][0];
 units[76] = "60";
 comments[76] = "Id Pregunta: 8904. Operador Ayto. Madrid 2010";


//  Id pregunta: 8919 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Qu&eacute; herramienta con versiones en Windows, Unix y otros sistemas, muestra informaci&oacute;n sobre el estado actual de todos los procesos IP que se est&aacute;n ejecutando, las sesiones activas y puede proporcionar estad&iacute;sticas bas&aacute;ndose en los puertos o protocolos.";
 choices[77]= new Array();
 choices[77][0] = "ROUTE";
 choices[77][1] = "NETSTAT";
 choices[77][2] = "NBTSTAT";
 choices[77][3] = "TRACERT";
 answers[77] = choices[77][1];
 units[77] = "104";
 comments[77] = "Id Pregunta: 8919. Operador Ayto. Madrid 2010";


//  Id pregunta: 8922 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  En HTML, &iquest;con qu&eacute; etiqueta indicamos el comienzo de una columna con datos en una tabla?";
 choices[78]= new Array();
 choices[78][0] = "&lt;table&gt;";
 choices[78][1] = "&lt;td&gt;";
 choices[78][2] = "&lt;th&gt;";
 choices[78][3] = "&lt;column&gt;";
 answers[78] = choices[78][1];
 units[78] = "69";
 comments[78] = "Id Pregunta: 8922. Operador Ayto. Madrid 2010";


//  Id pregunta: 8997 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  Una red bluetooth de tipo piconet tiene un m&aacute;ximo de:";
 choices[79]= new Array();
 choices[79][0] = "1 maestro y 7 esclavos";
 choices[79][1] = "1 maestro y 15 esclavos";
 choices[79][2] = "1 maestro y 16 esclavos";
 choices[79][3] = "1 maestro y 32 esclavos";
 answers[79] = choices[79][0];
 units[79] = "107";
 comments[79] = "Id Pregunta: 8997. Examen UPM A2 2011";


//  Id pregunta: 9010 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;A qu&eacute; autoridad nacional de regulaci&oacute;n de las recogidas en la Ley 9/2014,  de 9 de mayo, General de Telecomunicaciones, puede reclamar un usuario final de servicios de comunicaciones en caso de disputa con su operador?";
 choices[80]= new Array();
 choices[80][0] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[80][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[80][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[80][3] = "El Ministerio de Econom&iacute;a";
 answers[80] = choices[80][1];
 units[80] = "110";
 comments[80] = "Id Pregunta: 9010. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9026 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  A efectos de facturaci&oacute;n, en una red corporativa donde exista una salida/entrada directa a la red de m&oacute;viles (enlace desde la red corporativa a la red de m&oacute;viles directo) para todas las llamadas desde/a m&oacute;viles:";
 choices[81]= new Array();
 choices[81][0] = "Se considerar&aacute;n tres tipos de tarifas en funci&oacute;n del origen y destino de la llamada corporativa: fijo-m&oacute;vil, m&oacute;vil-fijo y m&oacute;vil-m&oacute;vil.";
 choices[81][1] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de m&oacute;vil-m&oacute;vil.";
 choices[81][2] = "Esta es un servicio que no lo dan los operadores de m&oacute;viles y es preciso salir a m&oacute;viles a trav&eacute;s de la red p&uacute;blica de conmutaci&oacute;n de circuitos.";
 choices[81][3] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de fijo-fijo.";
 answers[81] = choices[81][1];
 units[81] = "103";
 comments[81] = "Id Pregunta: 9026. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9088 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[82]= new Array();
 choices[82][0] = "Estar documentado correctamente";
 choices[82][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[82][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[82][3] = "Ser original";
 answers[82] = choices[82][3];
 units[82] = "36";
 comments[82] = "Id Pregunta: 9088. ";


//  Id pregunta: 9127 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  La taxonom&iacute;a de Flynn clasifica los ordenadores en funci&oacute;n de";
 choices[83]= new Array();
 choices[83][0] = "la relaci&oacute;n mayor o menor entre memoria principal y almacenamiento externo";
 choices[83][1] = "el flujo que siguen los datos dentro de la m&aacute;quina y de las instrucciones sobre esos datos";
 choices[83][2] = "el m&eacute;todo de acceso a los dispositivos de almacenamiento externo";
 choices[83][3] = "la relaci&oacute;n entre la velocidad de acceso a datos seg&uacute;n est&eacute;n en memoria o almacenamiento externo";
 answers[83] = choices[83][1];
 units[83] = "45";
 comments[83] = "Id Pregunta: 9127. Examen TIC-A1 2011";


//  Id pregunta: 9207 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Desde el punto de vista de la cantidad de la velocidad de acceso cu&aacute;l es la diferencia entre cintas y discos?";
 choices[84]= new Array();
 choices[84][0] = "La cinta est&aacute; orientada a almacenamiento de grandes cantidades de datos en los que el tiempo de acceso es cr&iacute;tico.";
 choices[84][1] = "Los discos son adecuados para el almacenamiento de datos con acceso &ldquo;on-line&rdquo;.";
 choices[84][2] = "Las cintas pr&aacute;cticamente ya no se utilizan.";
 choices[84][3] = "Los discos representan el soporte auxiliar de la informaci&oacute;n";
 answers[84] = choices[84][1];
 units[84] = "48";
 comments[84] = "Id Pregunta: 9207. ";


//  Id pregunta: 9286 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre el Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[85]= new Array();
 choices[85][0] = "Es un &oacute;rgano colegiado. ";
 choices[85][1] = "Supervisa la actividad del Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[85][2] = "Coordina la actuaci&oacute;n administrativa en el &aacute;mbito de las TIC y dirige las contrataciones.";
 choices[85][3] = "Difunde est&aacute;ndares, como M&eacute;trica, Sicres o Magerit. ";
 answers[85] = choices[85][1];
 units[85] = "41";
 comments[85] = "Id Pregunta: 9286. ";


//  Id pregunta: 9303 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  Cu&aacute;l de los siguientes no es un requerimiento general de la labor de un auditor";
 choices[86]= new Array();
 choices[86][0] = "Proporcionar una garant&iacute;a razonable de que se alcanzan los objetivos de control";
 choices[86][1] = "Supervisar que la Direcci&oacute;n aborda obligatoriamente las acciones recomendadas";
 choices[86][2] = "Identificar si existen debilidades significativas en los controles";
 choices[86][3] = "Sustanciar el riesgo que puede estar asociado a las debilidades identificadas";
 answers[86] = choices[86][1];
 units[86] = "33";
 comments[86] = "Id Pregunta: 9303. ";


//  Id pregunta: 9358 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l es la nomenclatura que indica la capa f&iacute;sica del est&aacute;ndar IEEE 802.3ba que permite la transmisi&oacute;n a 40 Gbps sobre fibra monomodo?";
 choices[87]= new Array();
 choices[87][0] = "40GBASE-KR4";
 choices[87][1] = "4GBASE-SR40";
 choices[87][2] = "40GBASE-SR4";
 choices[87][3] = "40GBASE-LR4";
 answers[87] = choices[87][3];
 units[87] = "99";
 comments[87] = "Id Pregunta: 9358. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9363 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Una red de anillo en contienda.";
 choices[88]= new Array();
 choices[88][0] = "Nunca se pasa un testigo";
 choices[88][1] = "Lo m&aacute;s razonable es utilizar este m&eacute;todo en situaciones de demanda baja de transmisi&oacute;n.";
 choices[88][2] = "Mejora las prestaciones de la red en situaciones alta demanda de transmisi&oacute;n.";
 choices[88][3] = "Es imposible detectar las colisiones bajo este esquema de funcionamiento.";
 answers[88] = choices[88][1];
 units[88] = "101";
 comments[88] = "Id Pregunta: 9363. ";


//  Id pregunta: 9386 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Sobre el interfaz radio de LTE, se puede afirmar";
 choices[89]= new Array();
 choices[89][0] = "Utiliza WCDMA";
 choices[89][1] = "Utiliza unicamente FDD para la duplexaci&oacute;n.";
 choices[89][2] = "Utiliza OFDM para la bajada y FDMA de portadora simple en la subida";
 choices[89][3] = "Combina TDMA y FDMA";
 answers[89] = choices[89][2];
 units[89] = "108";
 comments[89] = "Id Pregunta: 9386. ";


//  Id pregunta: 9430 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Seg&uacute;n la ley 9/2014, el derecho de uso del dominio p&uacute;blico radioel&eacute;ctrico es otorgado por:";
 choices[90]= new Array();
 choices[90][0] = "La Agencia Estatal de Radiocomunicaciones";
 choices[90][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[90][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[90][3] = "El Gobierno";
 answers[90] = choices[90][1];
 units[90] = "110";
 comments[90] = "Id Pregunta: 9430. ";


//  Id pregunta: 9510 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  El lenguaje Java es un lenguaje:";
 choices[91]= new Array();
 choices[91][0] = "De herencia simple";
 choices[91][1] = "De herencia m&uacute;ltiple";
 choices[91][2] = "Que no permite la herencia";
 choices[91][3] = "Todas las anteriores son falsas";
 answers[91] = choices[91][0];
 units[91] = "116";
 comments[91] = "Id Pregunta: 9510. ";


//  Id pregunta: 9612 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Qu&eacute; es una vista materializada?";
 choices[92]= new Array();
 choices[92][0] = "El resultado de una consulta de la base de datos almacenado en el disco duro";
 choices[92][1] = "El resultado de una consulta de la base de datos almacenado en una tabla cach&eacute;";
 choices[92][2] = "El resultado de una consulta de la base de datos realizada mediante procedimientos almacenados";
 choices[92][3] = "El resultado de una operaci&oacute;n de &ldquo;triggers&rdquo;";
 answers[92] = choices[92][1];
 units[92] = "58";
 comments[92] = "Id Pregunta: 9612. ";


//  Id pregunta: 9856 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Un programa malicioso capaz de alojarse en computadoras y permitir el acceso a usuarios externos, a trav&eacute;s de una red local o de Internet, con el fin de recabar informaci&oacute;n o controlar remotamente a la m&aacute;quina anfitriona, se denomina: ";
 choices[93]= new Array();
 choices[93][0] = "Un caballo de Troya.";
 choices[93][1] = "Un virus.";
 choices[93][2] = "Un gusano.";
 choices[93][3] = "El tal&oacute;n de Aquiles.";
 answers[93] = choices[93][0];
 units[93] = "111";
 comments[93] = "Id Pregunta: 9856. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9918 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[94]= new Array();
 choices[94][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[94][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[94][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[94][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[94] = choices[94][1];
 units[94] = "86, 58";
 comments[94] = "Id Pregunta: 9918. TIC A2, Examen 2013";


//  Id pregunta: 9935 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes no es un campo de la cabecera IPv4?";
 choices[95]= new Array();
 choices[95][0] = "IHL.";
 choices[95][1] = "NF.";
 choices[95][2] = "TOS.";
 choices[95][3] = "OPCIONES.";
 answers[95] = choices[95][1];
 units[95] = "100";
 comments[95] = "Id Pregunta: 9935. ";


//  Id pregunta: 10022 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Indique cu&aacute;l de los siguientes diagramas de descomposici&oacute;n NO se contempla como t&eacute;cnica en M&eacute;trica v3:";
 choices[96]= new Array();
 choices[96][0] = "Funcional.";
 choices[96][1] = "Organizativo.";
 choices[96][2] = "L&oacute;gico.";
 choices[96][3] = "En Di&aacute;logos.";
 answers[96] = choices[96][2];
 units[96] = "86";
 comments[96] = "Id Pregunta: 10022. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10059 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[97]= new Array();
 choices[97][0] = "TIER I ";
 choices[97][1] = "TIER II";
 choices[97][2] = "TIER III ";
 choices[97][3] = "TIER IV";
 answers[97] = choices[97][2];
 units[97] = "99";
 comments[97] = "Id Pregunta: 10059. TIC A2, libre, Examen 2013";


//  Id pregunta: 10262 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Se debe notificar al Registro General de Protecci&oacute;n de Datos";
 choices[98]= new Array();
 choices[98][0] = "Los ficheros de nueva creaci&oacute;n";
 choices[98][1] = "Las modificaciones posteriores en la informaci&oacute;n comunicada en el registro de un fichero";
 choices[98][2] = "La supresi&oacute;n de ficheros previamente registrados";
 choices[98][3] = "Todos ellos";
 answers[98] = choices[98][3];
 units[98] = "29";
 comments[98] = "Id Pregunta: 10262. Art&iacute;culos 55.1, 55.2, 58.1 y 58.2 del RD 1720/2007";


//  Id pregunta: 10566 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Seg&uacute;n ITIL un instrumento de gesti&oacute;n para el buen gobierno de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones en el dominio del soporte y el desempe&ntilde;o es:";
 choices[99]= new Array();
 choices[99][0] = "Plan de Continuidad de Negocio";
 choices[99][1] = "Plan de contingencia";
 choices[99][2] = "Plan de Recuperaci&oacute;n ante Desastres";
 choices[99][3] = "Plan de pruebas";
 answers[99] = choices[99][1];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10566. ";


