/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 82 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; se entiende por capacidad?:";
 choices[0]= new Array();
 choices[0][0] = "Es la m&aacute;xima cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinada";
 choices[0][1] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinada";
 choices[0][2] = "Es el porcentaje de tiempo durante el cu&aacute;l est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[0][3] = "Es el intervalo de tiempo durante el cual se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 answers[0] = choices[0][0];
 units[0] = "35";
 comments[0] = "Id Pregunta: 82. ";


//  Id pregunta: 210 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  En la Administraci&oacute;n P&uacute;blica se puede copiar un programa de ordenador para entregarlo a terceros s&oacute;lo:";
 choices[1]= new Array();
 choices[1][0] = "Cuando haya sido desarrollado a medida de las necesidades de la Administraci&oacute;n";
 choices[1][1] = "Cuando se trate de la copia de &quot;back-up&quot;";
 choices[1][2] = "Cuando los derechos de explotaci&oacute;n correspondan a la Administraci&oacute;n";
 choices[1][3] = "Cuando la Administraci&oacute;n haya adquirido una licencia de uso corporativa";
 answers[1] = choices[1][2];
 units[1] = "36";
 comments[1] = "Id Pregunta: 210. ";


//  Id pregunta: 665 Año de creación de pregunta: 2006-01-01
 questions[2]= "3)  Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute; como m&aacute;ximo";
 choices[2]= new Array();
 choices[2][0] = "70 a&ntilde;os";
 choices[2][1] = "60 a&ntilde;os";
 choices[2][2] = "100 a&ntilde;os";
 choices[2][3] = "50 a&ntilde;os";
 answers[2] = choices[2][0];
 units[2] = "36";
 comments[2] = "Id Pregunta: 665. ";


//  Id pregunta: 924 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; es JDBC?:";
 choices[3]= new Array();
 choices[3][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[3][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[3][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[3][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[3] = choices[3][1];
 units[3] = "60";
 comments[3] = "Id Pregunta: 924. ";


//  Id pregunta: 990 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Dentro del entorno IBM VTAM el rearranque autom&aacute;tico de los recursos de las redes se puede realizar con el producto:";
 choices[4]= new Array();
 choices[4][0] = "MVS";
 choices[4][1] = "NetView";
 choices[4][2] = "JES";
 choices[4][3] = "TSO";
 answers[4] = choices[4][2];
 units[4] = "49";
 comments[4] = "Id Pregunta: 990. ";


//  Id pregunta: 1192 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Indique cu&aacute;l es una ventaja de los applets sobre los scripts:";
 choices[5]= new Array();
 choices[5][0] = "El c&oacute;digo fuente de los applets no es visible";
 choices[5][1] = "Un applet descarga en una sola conexi&oacute;n todos los componentes necesarios";
 choices[5][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 choices[5][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 answers[5] = choices[5][2];
 units[5] = "116";
 comments[5] = "Id Pregunta: 1192. ";


//  Id pregunta: 1596 Año de creación de pregunta: 2003-01-01
 questions[6]= "7)  En que tres bibliotecas esta basado GTK+";
 choices[6]= new Array();
 choices[6][0] = "Bonobo, Nautilus, ATK";
 choices[6][1] = "Gnome-db/libgda";
 choices[6][2] = "Glib, Pango, ATK";
 choices[6][3] = "BCEL, Log4j";
 answers[6] = choices[6][2];
 units[6] = "62";
 comments[6] = "Id Pregunta: 1596. ";


//  Id pregunta: 1701 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Cuando se utilizan t&eacute;cnicas de implementaci&oacute;n de elementos de procesamiento basadas enpipelining se dice que:";
 choices[7]= new Array();
 choices[7][0] = "El paralelismo sucede a nivel de procesador.";
 choices[7][1] = "El paralelismo sucede a nivel de multiprocesador.";
 choices[7][2] = "El paralelismo sucede a nivel de multicomputador.";
 choices[7][3] = "Ninguna de las anteriores.";
 answers[7] = choices[7][0];
 units[7] = "46";
 comments[7] = "Id Pregunta: 1701. ";


//  Id pregunta: 1774 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  El Software Libre es bueno para las Administraciones P&uacute;blicas porque&hellip; Se&ntilde;ale la respuesta FALSA";
 choices[8]= new Array();
 choices[8][0] = "Es gratis";
 choices[8][1] = "Permite conocer exactamente el funcionamiento de los programas";
 choices[8][2] = "Facilita la conservaci&oacute;n de la informaci&oacute;n p&uacute;blica, libre de patentes y formatos propietarios";
 choices[8][3] = "Abre la posibilidad de contratar soporte t&eacute;cnico en un mercado en competencia";
 answers[8] = choices[8][0];
 units[8] = "61,62";
 comments[8] = "Id Pregunta: 1774. ";


//  Id pregunta: 1945 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  Hay dos metalenguajes con los que definir los lenguajes que podemos obtener a partir de XML, &iquest;Cu&aacute;les son?";
 choices[9]= new Array();
 choices[9][0] = "DTD y XML Schema";
 choices[9][1] = "DTL y HTML";
 choices[9][2] = "HTML y API";
 choices[9][3] = "DTD y SGML";
 answers[9] = choices[9][0];
 units[9] = "69";
 comments[9] = "Id Pregunta: 1945. ";


//  Id pregunta: 2009 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  Las pruebas que se realizan con los componentes modificados con el fin de comprobar que no introducen ning&uacute;n error adicional en los componentes no modificados se denominan:";
 choices[10]= new Array();
 choices[10][0] = "Pruebas unitarias";
 choices[10][1] = "Pruebas de sistema";
 choices[10][2] = "Pruebas de regresi&oacute;n";
 choices[10][3] = "Pruebas de aceptaci&oacute;n";
 answers[10] = choices[10][2];
 units[10] = "86";
 comments[10] = "Id Pregunta: 2009. Similar a examen TIC SS A 2004";


//  Id pregunta: 2016 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre diagramas es cierta?";
 choices[11]= new Array();
 choices[11][0] = "Los flujogramas de sistema se utilizaban en aplicaciones batch, y en aplicaciones interactivas se emplean los DFDs";
 choices[11][1] = "En un flujograma de sistema los datos se representan a nivel de archivo, nunca menor";
 choices[11][2] = "Cada &quot;caja&quot; de un flujograma de sistema se descompone necesariamente en un flujograma de programa";
 choices[11][3] = "Un proceso de un DFD no puede generar m&aacute;s que un flujograma de programa";
 answers[11] = choices[11][2];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2016. Examen TIC MAP B 2004";


//  Id pregunta: 2042 Año de creación de pregunta: 2004-01-01
 questions[12]= "13)  Los tipos de riesgos potenciales de un proyecto que considera el PGGC del CSAE son:";
 choices[12]= new Array();
 choices[12][0] = "Cinco";
 choices[12][1] = "Siete";
 choices[12][2] = "Tres";
 choices[12][3] = "Seis";
 answers[12] = choices[12][1];
 units[12] = "88";
 comments[12] = "Id Pregunta: 2042. ";


//  Id pregunta: 2045 Año de creación de pregunta: 2004-01-01
 questions[13]= "14)  Una Organizaci&oacute;n que este en el nivel 1 (Inicial) del Modelo de Capacidad de Madurez (CMM: Computer Capability Model) en el desarrollo del software, est&aacute;:";
 choices[13]= new Array();
 choices[13][0] = "En una fase preliminar de determinaci&oacute;n de la viabilidad del proyecto";
 choices[13][1] = "En una situaci&oacute;n donde el proyecto esta conforme a sus especificaciones originales y no ha sufrido todav&iacute;a modificaciones";
 choices[13][2] = "En una situaci&oacute;n ideal, con altos estandares de gesti&oacute;n y calidad implementados";
 choices[13][3] = "En una situaci&oacute;n en la que no se hace ning&uacute;n esfuerzo en la garant&iacute;a de calidad y gesti&oacute;n de proyectos";
 answers[13] = choices[13][3];
 units[13] = "92";
 comments[13] = "Id Pregunta: 2045. Pregunta TIC-B 2003";


//  Id pregunta: 2067 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;En qu&eacute; fase se hace el modelo l&oacute;gico de datos?";
 choices[14]= new Array();
 choices[14][0] = "Dise&ntilde;o";
 choices[14][1] = "Estudio de viabilidad";
 choices[14][2] = "An&aacute;lisis orientado a objetos";
 choices[14][3] = "An&aacute;lisis estructurado";
 answers[14] = choices[14][3];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2067. SS-A 2004";


//  Id pregunta: 2204 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;En qu&eacute; procesos de M&eacute;trica V3 se contemplan la migraci&oacute;n y carga inicial de datos?:  ";
 choices[15]= new Array();
 choices[15][0] = "DSI, CSI, IAS";
 choices[15][1] = "EVS, DSI, CSI";
 choices[15][2] = "ASI, DTS, CSI";
 choices[15][3] = "EVS, CSI, MSI";
 answers[15] = choices[15][0];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2204. ";


//  Id pregunta: 2275 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  El esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos del Plan General de Garant&iacute;a de Calidad implica la realizaci&oacute;n secuencial de una serie de cuatro procesos:";
 choices[16]= new Array();
 choices[16][0] = "Diagrama caracter&iacute;stico de la aplicaci&oacute;n, perfil de riesgos potenciales, plan de contingencia y focos de riesgo";
 choices[16][1] = "Modelo de referencia b&aacute;sico, modelo de referencia detallado, perfil de riesgos potenciales y puntos de especial atenci&oacute;n";
 choices[16][2] = "Diagrama caracter&iacute;stico de la aplicaci&oacute;n, modelo de referencia para el desarrollo, perfil de riesgos potenciales y focos de inter&eacute;s";
 choices[16][3] = "Objetivos del proyecto, plan de implantaci&oacute;n, inventario de recursos y perfil de riesgos potenciales";
 answers[16] = choices[16][2];
 units[16] = "88";
 comments[16] = "Id Pregunta: 2275. ";


//  Id pregunta: 2278 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  El mantenimiento de sistemas de informaci&oacute;n, tal y como lo define METRICA V3:";
 choices[17]= new Array();
 choices[17][0] = "Es de tipo perfectivo";
 choices[17][1] = "Requiere &uacute;nicamente la participaci&oacute;n del jefe de proyecto y del equipo de mantenimiento";
 choices[17][2] = "Hace uso de la t&eacute;cnica denominada &quot;factores cr&iacute;ticos de &eacute;xito&quot;";
 choices[17][3] = "Tiene como objetivo la obtenci&oacute;n de una nueva versi&oacute;n de un sistema de informaci&oacute;n desarrollado, a partir de las peticiones de mantenimiento que los usuarios realizan con motivo de un problema detectado";
 answers[17] = choices[17][3];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2278. ";


//  Id pregunta: 2297 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  El plan de sistemas de informaci&oacute;n de METRICA V3:";
 choices[18]= new Array();
 choices[18][0] = "Debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos 5 a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[18][1] = "Incluye actividades tales como &quot;generaci&oacute;n de especificaciones de construcci&oacute;n&quot;, &quot;dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema&quot; y &quot;especificaciones t&eacute;cnicas del plan de pruebas&quot;";
 choices[18][2] = "Tiene una perspectiva estrat&eacute;gica y operativa, pero no tecnol&oacute;gica";
 choices[18][3] = "No requiere la participaci&oacute;n del responsable de mantenimiento";
 answers[18] = choices[18][2];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2297. ";


//  Id pregunta: 2471 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  No es un tipo de prueba:";
 choices[19]= new Array();
 choices[19][0] = "Pruebas individuales";
 choices[19][1] = "Pruebas unitarias";
 choices[19][2] = "Pruebas de Aceptaci&oacute;n";
 choices[19][3] = "Pruebas de Regresi&oacute;n";
 answers[19] = choices[19][0];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2471. ";


//  Id pregunta: 2562 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  &iquest;Qu&eacute; significa que una Organizaci&oacute;n esta en el Nivel 2 del CMM?";
 choices[20]= new Array();
 choices[20][0] = "En este nivel se logran establecer las pol&iacute;ticas para adminsitrar un proyecto de software y los procedimientos para lograrlo, esto se realiza en base a la experiencia obtenida en proyectos similares.";
 choices[20][1] = "En este nivel, el proceso est&aacute;ndar para el desarrollo y mantenimiento de software se documenta, tanto desde el punto de vista t&eacute;cnico como administrativo. Se explotan efectivamente pr&aacute;cticas de ingenier&iacute;a de software para estandarizar los procesos.";
 choices[20][2] = "Todas son correctas";
 choices[20][3] = "En este nivel la empresa carece de buenas pr&aacute;cticas de ingenier&iacute;a de software, ni existe una planeaci&oacute;n efectiva. Los proyectos generalmente abandonan los planes realizados en etapas de crisis.";
 answers[20] = choices[20][0];
 units[20] = "87,88,92";
 comments[20] = "Id Pregunta: 2562. ";


//  Id pregunta: 2602 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest; Cu&aacute;l de las siguientes actividades no puede realizarse en paralelo en las fase de ASI de Metrica v3?";
 choices[21]= new Array();
 choices[21][0] = "Identificaci&oacute;n de subsistemas de an&aacute;lisis";
 choices[21][1] = "An&aacute;lisis de consistencia";
 choices[21][2] = "Definici&oacute;n de interfaces de usuario";
 choices[21][3] = "An&aacute;lisis de casos de uso";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2602. ";


//  Id pregunta: 2860 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  La incicativa europea i2010 se transpone en Espa&ntilde;a en ";
 choices[22]= new Array();
 choices[22][0] = "Plan Avanza 2010";
 choices[22][1] = "Ingenio 2010";
 choices[22][2] = "Plan Avanza";
 choices[22][3] = "Avanza.es";
 answers[22] = choices[22][1];
 units[22] = "30";
 comments[22] = "Id Pregunta: 2860. ";


//  Id pregunta: 2874 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes interfaces no corresponde a las establecidas por la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[23]= new Array();
 choices[23][0] = "Planificaci&oacute;n del Sistema";
 choices[23][1] = "Gesti&oacute;n de proyectos";
 choices[23][2] = "Aseguramiento de la calidad";
 choices[23][3] = "Seguridad";
 answers[23] = choices[23][0];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2874. ";


//  Id pregunta: 2928 Año de creación de pregunta: 2004-01-01
 questions[24]= "25)  En un entorno de servidor y cliente WWW, &iquest;cu&aacute;les de los siguientes lenguajes se utilizan para escribir c&oacute;digo que se ejecuta en el cliente?";
 choices[24]= new Array();
 choices[24][0] = "Java y JSP";
 choices[24][1] = "PHP y ASP";
 choices[24][2] = "JavaScript y Perl";
 choices[24][3] = "Java y JavaScript";
 answers[24] = choices[24][3];
 units[24] = "116";
 comments[24] = "Id Pregunta: 2928. ";


//  Id pregunta: 2939 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  La plataforma Java que se utiliza para el desarrollo de aplicaciones para PDA es:";
 choices[25]= new Array();
 choices[25][0] = "Micro Edition";
 choices[25][1] = "Standard Edition";
 choices[25][2] = "Enterprise Edition";
 choices[25][3] = "Cualquiera de ellas indistintamente dada su portabilidad";
 answers[25] = choices[25][0];
 units[25] = "116";
 comments[25] = "Id Pregunta: 2939. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3042 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Para que me sirve una sonda de intrusi&oacute;n?:";
 choices[26]= new Array();
 choices[26][0] = "No existe ese concepto";
 choices[26][1] = "Para devolver el ataque";
 choices[26][2] = "Para reenviar los ataques a mis servidores, a una maquina cebo";
 choices[26][3] = "Es una clase de firewall";
 answers[26] = choices[26][2];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3042. ";


//  Id pregunta: 3049 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Qu&eacute; es GOPHER?:";
 choices[27]= new Array();
 choices[27][0] = "Un protocolo de comunicaci&oacute;n entre redes Ethernet";
 choices[27][1] = "Un sistema operativo multitarea y multipuesto desarrollado por NeXT";
 choices[27][2] = "Un sistema disponible en Internet para b&uacute;squeda y transmisi&oacute;n de ficheros";
 choices[27][3] = "Nada de lo anterior";
 answers[27] = choices[27][2];
 units[27] = "112";
 comments[27] = "Id Pregunta: 3049. ";


//  Id pregunta: 3074 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  La degradaci&oacute;n de la calidad de un sistema de transmisi&oacute;n se debe a las perturbaciones, se pueden distinguir varios tipos:";
 choices[28]= new Array();
 choices[28][0] = "La distorsi&oacute;n, se produce siempre en presencia de la se&ntilde;al y puede existir de dos tipos: directa e indirecta";
 choices[28][1] = "La intermodulaci&oacute;n consiste en la aparici&oacute;n en el receptor de nuevas componentes espectrales de primer orden debido a la mezcla de las componentes espectrales de la se&ntilde;al de informaci&oacute;n";
 choices[28][2] = "El ruido es un tipo de perturbaci&oacute;n de origen electromagn&eacute;tico, se consideran tres tipos : t&eacute;rmico, impulsivo y de cuantificaci&oacute;n";
 choices[28][3] = "La diafon&iacute;a produce en la funci&oacute;n de transferencia de extremo a extremo la aparici&oacute;n de frecuencias nuevas que no exist&iacute;an en la se&ntilde;al original";
 answers[28] = choices[28][2];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3074. ";


//  Id pregunta: 3122 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;C&oacute;mo se denominan en una red UMTS los componentes equivalentes a las BTS  de una red GSM?:";
 choices[29]= new Array();
 choices[29][0] = "UTRAN";
 choices[29][1] = "Nodos-B";
 choices[29][2] = "RNC";
 choices[29][3] = "RNS";
 answers[29] = choices[29][1];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3122. ";


//  Id pregunta: 3136 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las respuestas siguientes es verdadera sobre las direcciones disponibles en clases A, B y C en redes IP?:";
 choices[30]= new Array();
 choices[30][0] = "El n&uacute;mero de direcciones para sistemas por red decrece de redes clase A  a las de clase C";
 choices[30][1] = "El n&uacute;mero de direcciones disponibles para redes decrece de las de clases A a las de clase C";
 choices[30][2] = "Las direcciones de clase C son adecuadas para organizaciones muy grandes, mientras que las de clase B son m&aacute;s adecuadas para compa&ntilde;ias peque&ntilde;as";
 choices[30][3] = "El rango de direcciones A es num&eacute;ricamente el mayor mientras que las de clase C es numericamente el menor";
 answers[30] = choices[30][0];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3136. ";


//  Id pregunta: 3209 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  El concepto y primer desarrollo del servicio WWW se debe a:";
 choices[31]= new Array();
 choices[31][0] = "Vinton Cerf";
 choices[31][1] = "Leonard Kleinrock";
 choices[31][2] = "Robert Kahn";
 choices[31][3] = "Tim Berners-Lee";
 answers[31] = choices[31][3];
 units[31] = "112";
 comments[31] = "Id Pregunta: 3209. ";


//  Id pregunta: 3234 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes protocolos no pertenece a la capa de aplicaci&oacute;n en la arquitectura TCP/IP?:";
 choices[32]= new Array();
 choices[32][0] = "SLIP";
 choices[32][1] = "SMTP";
 choices[32][2] = "DNS";
 choices[32][3] = "RPC";
 answers[32] = choices[32][0];
 units[32] = "100, 106, 116, 112";
 comments[32] = "Id Pregunta: 3234. ";


//  Id pregunta: 3302 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Qu&eacute; &oacute;rbita es la m&aacute;s ventajosa para una operadora de telecomunicaciones en t&eacute;rminos de coste a la hora de poner un nuevo sat&eacute;lite?:";
 choices[33]= new Array();
 choices[33][0] = "La el&iacute;ptica";
 choices[33][1] = "La circular";
 choices[33][2] = "La ovoide";
 choices[33][3] = "La geoestacionaria";
 answers[33] = choices[33][3];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3302. ";


//  Id pregunta: 3319 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;Qui&eacute;nes son considerados los padres de internet?";
 choices[34]= new Array();
 choices[34][0] = "William H. Gates y Paul Allen";
 choices[34][1] = "Steve Jobs y Steve Wozniak";
 choices[34][2] = "Vinton Cerf y Robert Kahn";
 choices[34][3] = "Brian Kernighan y Dennis Ritchie";
 answers[34] = choices[34][2];
 units[34] = "112";
 comments[34] = "Id Pregunta: 3319. ";


//  Id pregunta: 3361 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  De SDH y SONET podemos decir:";
 choices[35]= new Array();
 choices[35][0] = "son en realidad lo mismo pero con diferente denominaci&oacute;n en Norteam&eacute;rica y Europa";
 choices[35][1] = "son distintos en la disposici&oacute;n de los contenedores virtuales pero todas sus tasas de transmisi&oacute;n coinciden";
 choices[35][2] = "son compatibles en conjunto, adaptando las velocidades de diferentes niveles de capacidad";
 choices[35][3] = "son jerarqu&iacute;as de transmisi&oacute;n digital totalmente distintas e incompatibles entre s&iacute;";
 answers[35] = choices[35][2];
 units[35] = "109";
 comments[35] = "Id Pregunta: 3361. ";


//  Id pregunta: 3462 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  El protocolo TFTP (sic):";
 choices[36]= new Array();
 choices[36][0] = "Significa Trivial FTP";
 choices[36][1] = "Utiliza el conocido puerto 69";
 choices[36][2] = "Deber&iacute;a ser protegido especificamente en el Firewall";
 choices[36][3] = "Todas las anteriores respuestas son correctas";
 answers[36] = choices[36][3];
 units[36] = "112";
 comments[36] = "Id Pregunta: 3462. ";


//  Id pregunta: 3471 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  El servicio para navegar usando men&uacute;s que predominaba en Internet antes de la aparici&oacute;n de WWW se denomina:";
 choices[37]= new Array();
 choices[37][0] = "WAIS";
 choices[37][1] = "Gopher";
 choices[37][2] = "Archie";
 choices[37][3] = "Teletex";
 answers[37] = choices[37][1];
 units[37] = "112";
 comments[37] = "Id Pregunta: 3471. ";


//  Id pregunta: 3478 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  El tipo de fibra &oacute;ptica que permite la transmisi&oacute;n a m&aacute;s velocidad es:";
 choices[38]= new Array();
 choices[38][0] = "&Iacute;ndice gradual";
 choices[38][1] = "Multimodo";
 choices[38][2] = "Fibra &oacute;ptica de salto de &iacute;ndice";
 choices[38][3] = "Monomodo";
 answers[38] = choices[38][3];
 units[38] = "99";
 comments[38] = "Id Pregunta: 3478. ";


//  Id pregunta: 3588 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  La autoridad de nombres y direcciones de Internet es:";
 choices[39]= new Array();
 choices[39][0] = "ICANN";
 choices[39][1] = "RIPE";
 choices[39][2] = "IETF";
 choices[39][3] = "NIC";
 answers[39] = choices[39][0];
 units[39] = "112";
 comments[39] = "Id Pregunta: 3588. ";


//  Id pregunta: 3631 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  La prestaci&oacute;n de consentimiento expreso por parte del cliente o afectado  exige:";
 choices[40]= new Array();
 choices[40][0] = "Es valido el silencio por parte del destinatario";
 choices[40][1] = "La manifestaci&oacute;n de una voluntad libre, informada, espec&iacute;fica e inequ&iacute;voca (que no deje lugar a duda)";
 choices[40][2] = "Es v&aacute;lido el consentimiento oral";
 choices[40][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[40] = choices[40][1];
 units[40] = "110";
 comments[40] = "Id Pregunta: 3631. ";


//  Id pregunta: 3761 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  Para evitar el problema que suponen las cach&eacute;s y las sesiones a la hora de estudiar los accesos a una web se usa una t&eacute;cnica para garantizar el conocimiento de todos los accesos. Esta t&eacute;cnica se conoce como:";
 choices[41]= new Array();
 choices[41][0] = "cookies";
 choices[41][1] = "logs";
 choices[41][2] = "huellas";
 choices[41][3] = "ninguna de las anteriores";
 answers[41] = choices[41][2];
 units[41] = "112";
 comments[41] = "Id Pregunta: 3761. ";


//  Id pregunta: 3797 Año de creación de pregunta: 2002-01-01
 questions[42]= "43)  Respecto al interfaz Centronics, no es cierto que:";
 choices[42]= new Array();
 choices[42][0] = "es un interfaz paralelo, unidireccional y as&iacute;ncrono";
 choices[42][1] = "es el interfaz tradicionalmente utilizado con las impresoras";
 choices[42][2] = "el cable lleva por un lado un conector DB-25 para el PC y por otro el conector de 36 pines para el perif&eacute;rico";
 choices[42][3] = "Todas las respuestas anteriores son ciertas";
 answers[42] = choices[42][3];
 units[42] = "48";
 comments[42] = "Id Pregunta: 3797. ";


//  Id pregunta: 3815 Año de creación de pregunta: 2002-01-01
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de los siguientes elementos NO es utilizado en las redes de fibra &oacute;ptica:";
 choices[43]= new Array();
 choices[43][0] = "Transceptor";
 choices[43][1] = "Repetidor";
 choices[43][2] = "Fibras &oacute;pticas";
 choices[43][3] = "Interfaces de RF";
 answers[43] = choices[43][3];
 units[43] = "105";
 comments[43] = "Id Pregunta: 3815. ";


//  Id pregunta: 3855 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  Dentro de las Frecuencias de sat&eacute;lite de uso comercial  se encuentra la banda Ku(BSS) que tiene como aplicaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Datos y TV a altas velocidades ";
 choices[44][1] = "Radiodifusi&oacute;n de televisi&oacute;n por sat&eacute;lite.";
 choices[44][2] = "VSAT, video e Internet ";
 choices[44][3] = "Datos, voz y video ";
 answers[44] = choices[44][1];
 units[44] = "108";
 comments[44] = "Id Pregunta: 3855. ";


//  Id pregunta: 4049 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;Qu&eacute; se suele encontrar en una DMZ?";
 choices[45]= new Array();
 choices[45][0] = "un proxy de  correo";
 choices[45][1] = "un cache web";
 choices[45][2] = "un server web";
 choices[45][3] = "todas las anteriores";
 answers[45] = choices[45][3];
 units[45] = "111";
 comments[45] = "Id Pregunta: 4049. ";


//  Id pregunta: 4080 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  El teletrabajo por parte de un empleado de una empresa requiere un acceso";
 choices[46]= new Array();
 choices[46][0] = "a trav&eacute;s de su extranet, con los mecanismos de seguridad adecuados";
 choices[46][1] = "a su DMZ";
 choices[46][2] = "a su intranet";
 choices[46][3] = "requiere el establecimiento de un servidor VPN en el hogar del empleado";
 answers[46] = choices[46][2];
 units[46] = "113";
 comments[46] = "Id Pregunta: 4080. ";


//  Id pregunta: 4094 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;En que se basa AJAX?";
 choices[47]= new Array();
 choices[47][0] = "En JavaScript";
 choices[47][1] = "En Java";
 choices[47][2] = "En JSP";
 choices[47][3] = "En JSF";
 answers[47] = choices[47][0];
 units[47] = "116";
 comments[47] = "Id Pregunta: 4094. ";


//  Id pregunta: 4097 Año de creación de pregunta: 2006-01-01
 questions[48]= "49)  Con que tecnolog&iacute;a no se puede implementar una arquitectura SOA";
 choices[48]= new Array();
 choices[48][0] = "J2EE";
 choices[48][1] = ".Net";
 choices[48][2] = "Software Libre";
 choices[48][3] = "Se puede con todas las anteriores";
 answers[48] = choices[48][3];
 units[48] = "116";
 comments[48] = "Id Pregunta: 4097. ";


//  Id pregunta: 4140 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  Cuando multitud de sistemas atacan un &uacute;nico sistema provocando su caida, estamos ante";
 choices[49]= new Array();
 choices[49][0] = "Un ataque de denegaci&oacute;n de servicio (DoS)";
 choices[49][1] = "Echelon, una red global de espias";
 choices[49][2] = "Un ataque distribuido de denegaci&oacute;n de servicio (DDoS)";
 choices[49][3] = "Un ataque de ingenier&iacute;a social";
 answers[49] = choices[49][2];
 units[49] = "112";
 comments[49] = "Id Pregunta: 4140. ";


//  Id pregunta: 4142 Año de creación de pregunta: 2006-01-01
 questions[50]= "51)  La principal diferencia entre S/MIME y PGP es";
 choices[50]= new Array();
 choices[50][0] = "PGP es software libre";
 choices[50][1] = "S/MIME requiere SSL";
 choices[50][2] = "PGP no se puede usar en un servicio de env&iacute;o de correo SMTP";
 choices[50][3] = "S/MIME requiere certificados digitales ";
 answers[50] = choices[50][3];
 units[50] = "106";
 comments[50] = "Id Pregunta: 4142. ";


//  Id pregunta: 4152 Año de creación de pregunta: 2006-01-01
 questions[51]= "52)  Protocolo cliente/servidor que permite la autenticaci&oacute;n y control de acceso de usuarios PPP";
 choices[51]= new Array();
 choices[51][0] = "ACF2";
 choices[51][1] = "RACF";
 choices[51][2] = "RADIUS";
 choices[51][3] = "Kerberos";
 answers[51] = choices[51][2];
 units[51] = "111";
 comments[51] = "Id Pregunta: 4152. ";


//  Id pregunta: 4341 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de comunicaciones fue originalmente concebido como el est&aacute;ndar militar MIL-STD-1778?:";
 choices[52]= new Array();
 choices[52][0] = "IEEE 802.3.";
 choices[52][1] = "IEEE 802.11b.";
 choices[52][2] = "CCITT X 25.";
 choices[52][3] = "TCP.";
 answers[52] = choices[52][3];
 units[52] = "99";
 comments[52] = "Id Pregunta: 4341. ";


//  Id pregunta: 4415 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  En el m&eacute;todo TOPSIS de decisi&oacute;n entre alternativas...";
 choices[53]= new Array();
 choices[53][0] = "La alternativa seleccionada debe ser aqu&eacute;lla que est&eacute; lo m&aacute;s cerca posible de la soluci&oacute;n ideal positiva y lo m&aacute;s lejos posible de la soluci&oacute;n ideal negativa.";
 choices[53][1] = "La idea es comparar cada permutaci&oacute;n posible de alternativas con la informaci&oacute;n ordinal de evaluaciones que aporta para cada criterio la matriz de decisi&oacute;n.";
 choices[53][2] = "En cada comparaci&oacute;n se asocia: &iacute;ndice de concordancia (mide argumentos a favor de la alternativa) e &iacute;ndice de discordancia (mide argumentos en contra).";
 choices[53][3] = "Se ignora la cuant&iacute;a de la diferencia entre alternativas para cada criterio, s&oacute;lo se&ntilde;ala si existe o no, y considera la importancia del criterio para el decisor.";
 answers[53] = choices[53][0];
 units[53] = "34";
 comments[53] = "Id Pregunta: 4415. ";


//  Id pregunta: 4460 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  Si modificamos un programa protegido por licencia GPL el resultado debemos protegerlo con una licencia";
 choices[54]= new Array();
 choices[54][0] = "EULA";
 choices[54][1] = "BSD";
 choices[54][2] = "GPL";
 choices[54][3] = "No podemos ponerlo licencia alguna";
 answers[54] = choices[54][2];
 units[54] = "36";
 comments[54] = "Id Pregunta: 4460. ";


//  Id pregunta: 4494 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  El protocolo L2TP es com&uacute;nmente utilizado por las VPN (Redes Privadas Virtuales) para:";
 choices[55]= new Array();
 choices[55][0] = "Efectuar el proceso de encriptado de los datos transmitidos a trav&eacute;s de Ia red publica.";
 choices[55][1] = "Efectuar Ia autentificaci&oacute;n de los usuarios.";
 choices[55][2] = "Crear t&uacute;neles de nivel OSI 2 que encapsulan los datagramas IP transmitidos a trav&eacute;s de Ia red publica.";
 choices[55][3] = "Filtrar los datos recibidos por cada usuario.";
 answers[55] = choices[55][2];
 units[55] = "111";
 comments[55] = "Id Pregunta: 4494. ";


//  Id pregunta: 4545 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[56]= new Array();
 choices[56][0] = "El sistema GPRS permite el env&iacute;o de paquetes de datos sobre la red GSM.";
 choices[56][1] = "El sistema GPRS utiliza los mismos recursos de la interfaz radio del sistema GSM.";
 choices[56][2] = "En una misma celda no pueden coexistir canales GPRS y GSM.";
 choices[56][3] = "Un canal GPRS solo se asigna al usuario cuando se transmiten o reciben paquetes, mientras que un canal GSM se asigna de forma permanente al usuario durante toda la llamada.";
 answers[56] = choices[56][2];
 units[56] = "108";
 comments[56] = "Id Pregunta: 4545. ";


//  Id pregunta: 4649 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  La tecnolog&iacute;a de radio LMDS (Local Multipoint Distribution System) se caracteriza entre otras cosas por ser:";
 choices[57]= new Array();
 choices[57][0] = "una tecnolog&iacute;a punto a punto";
 choices[57][1] = "no requiere de visibilidad directa entre enlaces";
 choices[57][2] = "tiene radios de cobertura t&iacute;picos mayores a 25 Km (kilometros)";
 choices[57][3] = "utilizada para entornos de alta concentraci&oacute;n de usuarios";
 answers[57] = choices[57][3];
 units[57] = "108";
 comments[57] = "Id Pregunta: 4649. ";


//  Id pregunta: 4847 Año de creación de pregunta: 2007-01-01
 questions[58]= "59)  Las aplicaciones a medida desarrolladas a petici&oacute;n de la Administraci&oacute;n General del Estado son consideradas:";
 choices[58]= new Array();
 choices[58][0] = "Software libre";
 choices[58][1] = "Software propietario";
 choices[58][2] = "Software de dominio p&uacute;blico";
 choices[58][3] = "Software de fuentes abiertas, de acuerdo con los criterios de normalizaci&oacute;n y conservaci&oacute;n de lasaplicaciones utilizadas para el ejercicio de potestades";
 answers[58] = choices[58][1];
 units[58] = "37";
 comments[58] = "Id Pregunta: 4847. ";


//  Id pregunta: 5007 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones &iquest;Cada cuanto tiempo, la Comisi&oacute;n del Mercado de las Telecomunicaciones llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos?:";
 choices[59]= new Array();
 choices[59][0] = "En un plazo m&aacute;ximo de tres a&ntilde;os contado desde la adopci&oacute;n de una medida anterior relativa a ese mercado";
 choices[59][1] = "En el plazo m&aacute;ximo de dos a&ntilde;os desde la adopci&oacute;n de una recomendaci&oacute;n sobre mercados relevantes revisada, para los mercados no notificados previamente a la Comisi&oacute;n Europea";
 choices[59][2] = "Las dos anteriores son ciertas";
 choices[59][3] = "Todas las anteriores son falsas";
 answers[59] = choices[59][2];
 units[59] = "110";
 comments[59] = "Id Pregunta: 5007. Examen TIC A 2007. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 5207 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  Los costes de calidad se pueden dividir en costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos. Entre los costes de prevenci&oacute;n se incluyen:";
 choices[60]= new Array();
 choices[60][0] = "Planificaci&oacute;n de la calidad";
 choices[60][1] = "Calibrado y mantenimiento del equipo";
 choices[60][2] = "Reparaci&oacute;n";
 choices[60][3] = "An&aacute;lisis de las modalidades de fallos";
 answers[60] = choices[60][0];
 units[60] = "87";
 comments[60] = "Id Pregunta: 5207. ";


//  Id pregunta: 5470 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[61]= new Array();
 choices[61][0] = "Estudio de Viabilidad del Sistema";
 choices[61][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[61][2] = "Definici&oacute;n del Sistema";
 choices[61][3] = "Estudio del Sistema Actual";
 answers[61] = choices[61][1];
 units[61] = "86";
 comments[61] = "Id Pregunta: 5470. Castilla y Le&oacute;n";


//  Id pregunta: 5535 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  Indique la respuesta falsa";
 choices[62]= new Array();
 choices[62][0] = "El portal Your Europe tiene que como objetivo informar a los pa&iacute;ses que no son de la UE sobre las posibilidades de adhesi&oacute;n a la UE";
 choices[62][1] = "PLOTEUS es el portal europeo de oportunidades de formaci&oacute;n";
 choices[62][2] = "TESTA es una red que interconecta las distintas redes administrativas de los estados miembros";
 choices[62][3] = "EURES es un servicio paneuropeo que pretende facilitar el libre movimiento de trabajadores en el Espacio Econ&oacute;mico Europeo";
 answers[62] = choices[62][0];
 units[62] = "30";
 comments[62] = "Id Pregunta: 5535. ";


//  Id pregunta: 5632 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  Una soluci&oacute;n CISC no se caracteriza por:";
 choices[63]= new Array();
 choices[63][0] = "Muchos modos de direccionamiento";
 choices[63][1] = "Unidad de control cableada";
 choices[63][2] = "N&uacute;mero de instrucciones muy elevado";
 choices[63][3] = "Varios formatos de instrucci&oacute;n (longitud variable)";
 answers[63] = choices[63][1];
 units[63] = "45";
 comments[63] = "Id Pregunta: 5632. ";


//  Id pregunta: 5832 Año de creación de pregunta: 2009-01-01
 questions[64]= "65)  BSA es:";
 choices[64]= new Array();
 choices[64][0] = "Una organizaci&oacute;n que mide la accesibilidad de las Web";
 choices[64][1] = "Una organizaci&oacute;n que audita las comunicaciones y el flujo de informaci&oacute;n eficiente";
 choices[64][2] = "Una organizaci&oacute;n que intenta controlar la pirater&iacute;a de software";
 choices[64][3] = "Una organizaci&oacute;n que audita la seguridad de datos de un CPD de respaldo";
 answers[64] = choices[64][2];
 units[64] = "37";
 comments[64] = "Id Pregunta: 5832. MAP 2008 A1";


//  Id pregunta: 5893 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  &iquest;Qu&eacute; es JNI?";
 choices[65]= new Array();
 choices[65][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[65][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[65][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][1];
 units[65] = "60";
 comments[65] = "Id Pregunta: 5893. ";


//  Id pregunta: 5897 Año de creación de pregunta: 2009-01-01
 questions[66]= "67)  &iquest;Qu&eacute; tecnolog&iacute;a de las siguientes es m&aacute;s adecuada para generar contenido HTML din&aacute;mico en una aplicaci&oacute;n Java EE?";
 choices[66]= new Array();
 choices[66][0] = "Servlets";
 choices[66][1] = "JSP";
 choices[66][2] = "JNI";
 choices[66][3] = "JAXP";
 answers[66] = choices[66][1];
 units[66] = "116";
 comments[66] = "Id Pregunta: 5897. ";


//  Id pregunta: 5914 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  El formato GIF (Graphic Interchange Format):";
 choices[67]= new Array();
 choices[67][0] = "Almacena 8 bits por p&iacute;xel";
 choices[67][1] = "Almacena 32 bits por p&iacute;xel";
 choices[67][2] = "Admite una paleta de hasta 512 colores";
 choices[67][3] = "No admite el algor&iacute;tmo de compresi&oacute;n LZW (Lempel- Ziv-Welch)";
 answers[67] = choices[67][0];
 units[67] = "114";
 comments[67] = "Id Pregunta: 5914. MAP 2008 A1";


//  Id pregunta: 5922 Año de creación de pregunta: 2009-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de ataque activo?";
 choices[68]= new Array();
 choices[68][0] = "Interrupci&oacute;n";
 choices[68][1] = "Interceptaci&oacute;n";
 choices[68][2] = "Modificaci&oacute;n";
 choices[68][3] = "Generaci&oacute;n";
 answers[68] = choices[68][1];
 units[68] = "111";
 comments[68] = "Id Pregunta: 5922. MAP 2008 A1";


//  Id pregunta: 5973 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Cu&aacute;l de las siguientes afirmaciones es aplicable a la reingenier&iacute;a basada en &quot;wrapping&quot;:";
 choices[69]= new Array();
 choices[69][0] = "&quot;Wrapping&quot; consiste en envolver interfaces basadas en texto con un entorno gr&aacute;fico basado en GUI o en HTML.";
 choices[69][1] = "La t&eacute;cnica &quot;wrapping&quot; es actualmente conocida como modernizaci&oacute;n de caja blanca.";
 choices[69][2] = "&quot;Wrapping&quot; es una reingenier&iacute;a en las que s&oacute;lo se analizan las interfaces (las entradas y salidas) del &quot;legacy&quot; ignorandolos detalles internos.";
 choices[69][3] = "&quot;Wrapping&quot; es una reingenier&iacute;a mediante la cual se produce documentaci&oacute;n retroactivamente desde un sistema existente.";
 answers[69] = choices[69][2];
 units[69] = "91";
 comments[69] = "Id Pregunta: 5973. TIC A 2009";


//  Id pregunta: 5976 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[70]= new Array();
 choices[70][0] = "Internet Information Server.";
 choices[70][1] = "Weblogic.";
 choices[70][2] = "Websphere.";
 choices[70][3] = "Apache.";
 answers[70] = choices[70][3];
 units[70] = "113";
 comments[70] = "Id Pregunta: 5976. TIC A 2009";


//  Id pregunta: 5995 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  El Defensor del usuario de la administraci&oacute;n electr&oacute;nica a que hace referencia el art&iacute;culo 7 de la Ley 11/2007 de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos es nombrado por:";
 choices[71]= new Array();
 choices[71][0] = "El Defensor del Pueblo.";
 choices[71][1] = "El Congreso de los Diputados, por mayor&iacute;a simple.";
 choices[71][2] = "El Consejo de Ministros.";
 choices[71][3] = "El Ministro de Industria.";
 answers[71] = choices[71][2];
 units[71] = "43";
 comments[71] = "Id Pregunta: 5995. TIC A 2009";


//  Id pregunta: 5998 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  El Plan Estrat&eacute;gico Inform&aacute;tico Departamental debe ser elaborado por:";
 choices[72]= new Array();
 choices[72][0] = "La Subsecretar&iacute;a.";
 choices[72][1] = "La Comisi&oacute;n Ministerial de Administraci&oacute;n Electr&oacute;nica.";
 choices[72][2] = "Las Unidades de Inform&aacute;tica del Ministerio.";
 choices[72][3] = "El Subdirector General de Inform&aacute;tica.";
 answers[72] = choices[72][1];
 units[72] = "77";
 comments[72] = "Id Pregunta: 5998. TIC A 2009";


//  Id pregunta: 6130 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  Cuando puntuamos criterios de diferentes alternativas y nos referimos al umbral de saciedad, entendemos por tal:";
 choices[73]= new Array();
 choices[73][0] = "El valor que debe cumplir la puntuaci&oacute;n de un criterio para ser considerado aceptable. por tanto es el m&iacute;nimo exigido.";
 choices[73][1] = "El valor de un criterio a partir del cual no se obtiene una utilidad adicional, por lo que su exceso no es tenido en cuenta.";
 choices[73][2] = "Un valor ordinal definido por el evaluador conforme a una escala subjetiva.";
 choices[73][3] = "Un m&eacute;todo de limitaci&oacute;n de la asignaci&oacute;n de puntuaciones mediante entrop&iacute;a. Se dice entonces que el criterio est&aacute; saciado.";
 answers[73] = choices[73][1];
 units[73] = "34";
 comments[73] = "Id Pregunta: 6130. TIC A 2009";


//  Id pregunta: 6164 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Se&ntilde;ale la informaci&oacute;n falsa:";
 choices[74]= new Array();
 choices[74][0] = "La telepresencia es la evoluci&oacute;n de los servicios de videoconferencia que se acerca hacia la realidad virtual.";
 choices[74][1] = "En una sesi&oacute;n de videoconferencia es posible incorporar herramientas de colaboraci&oacute;n.";
 choices[74][2] = "En soluciones de videoconferencia accesibles desde el exterior es posible tunelizar las comunicaciones por el puerto http o de lo contrario tener en cuenta las consideraciones con los Firewall.";
 choices[74][3] = "Todas las anteriores son correctas.";
 answers[74] = choices[74][3];
 units[74] = "117";
 comments[74] = "Id Pregunta: 6164. ";


//  Id pregunta: 6281 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[75]= new Array();
 choices[75][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[75][1] = "An&aacute;lisis DAFO ";
 choices[75][2] = "Aprendizaje organizativo";
 choices[75][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[75] = choices[75][1];
 units[75] = "77";
 comments[75] = "Id Pregunta: 6281. ";


//  Id pregunta: 6370 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Cada cu&aacute;nto tiempo ser&aacute;n objeto de una auditor&iacute;a regular ordinaria los sistemas de informaci&oacute;n a los que se refiere el Esquema Nacional de Seguridad?";
 choices[76]= new Array();
 choices[76][0] = "Cada dos a&ntilde;os";
 choices[76][1] = "Al menos, cada dos a&ntilde;os";
 choices[76][2] = "Cada a&ntilde;o";
 choices[76][3] = "Al menos, una vez al a&ntilde;o";
 answers[76] = choices[76][1];
 units[76] = "43";
 comments[76] = "Id Pregunta: 6370. Art&iacute;culo 34 ENS";


//  Id pregunta: 6373 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes no es un grupo de medidas de seguridad de los establecidos en el Esquema Nacional de Seguridad?";
 choices[77]= new Array();
 choices[77][0] = "Marco de gesti&oacute;n";
 choices[77][1] = "Marco organizativo";
 choices[77][2] = "Marco operacional";
 choices[77][3] = "Medidas de protecci&oacute;n";
 answers[77] = choices[77][0];
 units[77] = "43";
 comments[77] = "Id Pregunta: 6373. Anexo II ENS";


//  Id pregunta: 6375 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, un esquema abierto es aquel que cumple las siguientes condiciones:";
 choices[78]= new Array();
 choices[78][0] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[78][1] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[78][2] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial, o que este pago no suponga una dificultad de acceso.";
 choices[78][3] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial o que este pago no suponga una dificultad de acceso.";
 answers[78] = choices[78][0];
 units[78] = "43";
 comments[78] = "Id Pregunta: 6375. Anexo ENI";


//  Id pregunta: 6500 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  Seg&uacute;n Eric Raymond, los dos modelos caracter&iacute;sticos de desarrollo del Software Libre se conocen como:";
 choices[79]= new Array();
 choices[79][0] = "Catedral y Torre";
 choices[79][1] = "Catedral y Bazar";
 choices[79][2] = "Bazar y Torre";
 choices[79][3] = "Torre y Lineal";
 answers[79] = choices[79][1];
 units[79] = "61";
 comments[79] = "Id Pregunta: 6500. ";


//  Id pregunta: 6546 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  Deficiencias dentro del sistema Kerberos";
 choices[80]= new Array();
 choices[80][0] = "El centro de distribuci&oacute;n de claves es un &uacute;nico punto de fallo";
 choices[80][1] = "Privacidad";
 choices[80][2] = "Integridad";
 choices[80][3] = "Todas las respuestas anteriores son incorrectos";
 answers[80] = choices[80][0];
 units[80] = "111";
 comments[80] = "Id Pregunta: 6546. ";


//  Id pregunta: 6559 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  CSMA (Acceso M&uacute;ltiple por divisi&oacute;n de c&oacute;digo) no se caracteriza por:";
 choices[81]= new Array();
 choices[81][0] = "Ancho de banda menor a los sistemas TDMA";
 choices[81][1] = "Ancho de banda mayor a los sistemas TDMA";
 choices[81][2] = "Se puede reutilizar la misma portadora en todas las c&eacute;lulas, sean adyacentes o no";
 choices[81][3] = "M&uacute;ltiples usuarios pueden transmitir de manera concurrente sobre el mismo radiocanal";
 answers[81] = choices[81][0];
 units[81] = "108";
 comments[81] = "Id Pregunta: 6559. ";


//  Id pregunta: 7175 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  La entidad que identifica de forma inequ&iacute;voca al solicitante de un certificado electr&oacute;nico  es la:";
 choices[82]= new Array();
 choices[82][0] = "Autoridad de Registro";
 choices[82][1] = "Autoridad de Certificaci&oacute;n";
 choices[82][2] = "Autoridad de Revocaci&oacute;n";
 choices[82][3] = "Autoridad de Usurpaci&oacute;n";
 answers[82] = choices[82][0];
 units[82] = "73,74";
 comments[82] = "Id Pregunta: 7175. Examen TIC B 2009";


//  Id pregunta: 7358 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  Cu&aacute;l de los siguientes est&aacute;ndares corresponde a PDF/A";
 choices[83]= new Array();
 choices[83][0] = "ISO 23018";
 choices[83][1] = "ISO 19005";
 choices[83][2] = "ISO 13100";
 choices[83][3] = "ISO 16546";
 answers[83] = choices[83][1];
 units[83] = "95";
 comments[83] = "Id Pregunta: 7358. ";


//  Id pregunta: 8193 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Seg&uacute;n el RD 589/2005, los Planes estrat&eacute;gicos departamentales en materia de tecnolog&iacute;as de la informaci&oacute;n y Administraci&oacute;n Electr&oacute;nica:";
 choices[84]= new Array();
 choices[84][0] = "Deben tener una duraci&oacute;n de al menos 2 a&ntilde;os. ";
 choices[84][1] = "Deben tener una duraci&oacute;n de al menos 3 a&ntilde;os.";
 choices[84][2] = "Deben tener una duraci&oacute;n de al menos 4 a&ntilde;os. ";
 choices[84][3] = "Pueden tener cualquier duraci&oacute;n siempre y cuando tengan car&aacute;cter verdaderamente estrat&eacute;gico.";
 answers[84] = choices[84][0];
 units[84] = "77";
 comments[84] = "Id Pregunta: 8193. Examen TIC A1 2010";


//  Id pregunta: 8226 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Se&ntilde;ale la afirmaci&oacute;n NO correcta en relaci&oacute;n con el Registro Electr&oacute;nico Com&uacute;n (REC) de la Administraci&oacute;n General del Estado:";
 choices[85]= new Array();
 choices[85][0] = "REC posibilita la presentaci&oacute;n de cualesquiera solicitudes, escritos y comunicaciones dirigidas a la Administraci&oacute;n General del Estado y a sus Organismos p&uacute;blicos.";
 choices[85][1] = "La Direcci&oacute;n General de Impulso de la Administraci&oacute;n Electr&oacute;nica del Ministerio de la Presidencia, es la responsable de la custodia y manejo de los escritos presentados.";
 choices[85][2] = "Los formatos de los documentos electr&oacute;nicos y de las im&aacute;genes electr&oacute;nicas de los documentos, se establecen en el marco del Esquema Nacional de Interoperabilidad.";
 choices[85][3] = "El acuse de recibo electr&oacute;nico emitido por REC da constancia de la presentaci&oacute;n, pero no implica el inicio del c&oacute;mputo de plazos a los restantes efectos.";
 answers[85] = choices[85][1];
 units[85] = "44";
 comments[85] = "Id Pregunta: 8226. Examen TIC A1 2010";


//  Id pregunta: 8305 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[86]= new Array();
 choices[86][0] = "XAdES-X.";
 choices[86][1] = "XAdES-X-L.";
 choices[86][2] = "XAdES-C. ";
 choices[86][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[86] = choices[86][1];
 units[86] = "72, 73, 74";
 comments[86] = "Id Pregunta: 8305. Examen TIC A2 2010";


//  Id pregunta: 8376 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una herramienta de benchmarking de aplicaciones web: ";
 choices[87]= new Array();
 choices[87][0] = "JMeter.";
 choices[87][1] = "OpenSTA.";
 choices[87][2] = "ApacheBench.";
 choices[87][3] = "Junit.";
 answers[87] = choices[87][3];
 units[87] = "112";
 comments[87] = "Id Pregunta: 8376. Examen TIC A2 2010";


//  Id pregunta: 8469 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  La norma DECT (Digital Enhanced Cordless Telecomunications) contempla el modode acceso:";
 choices[88]= new Array();
 choices[88][0] = "TDMA/ TDD";
 choices[88][1] = "GFSK";
 choices[88][2] = "FSK";
 choices[88][3] = "CDMA";
 answers[88] = choices[88][0];
 units[88] = "107,108";
 comments[88] = "Id Pregunta: 8469. Analista Ayto. Madrid 2010";


//  Id pregunta: 8518 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  Indicar la respuesta correcta respecto al diagrama de flujo de datos:";
 choices[89]= new Array();
 choices[89][0] = "Un proceso de control puede ser el origen de los datos pero nunca el final de los datos.";
 choices[89][1] = "El flujo de di&aacute;logo se representa por una flecha discontinua que indica la direcci&oacute;n de los datos, y que se etiqueta con un nombre representativo.";
 choices[89][2] = "Un flujo de di&aacute;logo es un flujo entre un proceso y un almac&eacute;n que representa una consulta y una actualizaci&oacute;n.";
 choices[89][3] = "Un proceso de control se encarga de coordinar y sincronizar los accesos a los almacenes de datos.";
 answers[89] = choices[89][2];
 units[89] = "86";
 comments[89] = "Id Pregunta: 8518. Examen TIC A2 2010 interna";


//  Id pregunta: 8594 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecutan en el servidor?";
 choices[90]= new Array();
 choices[90][0] = "Javascripts";
 choices[90][1] = "Applets";
 choices[90][2] = "JSP";
 choices[90][3] = "VisualScript";
 answers[90] = choices[90][2];
 units[90] = "116";
 comments[90] = "Id Pregunta: 8594. Examen TIC A2 2010 interna";


//  Id pregunta: 8635 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[91]= new Array();
 choices[91][0] = "Diagrama de Extrapolaci&oacute;n";
 choices[91][1] = "PERT";
 choices[91][2] = "CPM";
 choices[91][3] = "El histograma de recursos";
 answers[91] = choices[91][0];
 units[91] = "28";
 comments[91] = "Id Pregunta: 8635. Examen TIC A2 2010 interna";


//  Id pregunta: 8753 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  Los actuales dise&ntilde;os l&oacute;gicos de los chipset para la arquitectura x86 se estructuran en dos bloques funcionales: el Northbridge y el Southbridge. Indique cu&aacute;l de los siguientes subsistemas son competencia del Northbridge.";
 choices[92]= new Array();
 choices[92][0] = "Acceso a la RAM y controlador AGP.";
 choices[92][1] = "Controladores IDE y SATA";
 choices[92][2] = "Controladores USB y FIREWIRE";
 choices[92][3] = "Super I/O (Puerto serie, paralelo), audio y LAN";
 answers[92] = choices[92][0];
 units[92] = "47";
 comments[92] = "Id Pregunta: 8753. Examen TIC A2 2010 interna";


//  Id pregunta: 8778 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[93]= new Array();
 choices[93][0] = "53 TCP";
 choices[93][1] = "453 TCP";
 choices[93][2] = "456 UDP";
 choices[93][3] = "53 UDP";
 answers[93] = choices[93][0];
 units[93] = "100, 112";
 comments[93] = "Id Pregunta: 8778. Examen UPM A2 2011";


//  Id pregunta: 8844 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)   En los sistemas de colaboraci&oacute;n s&iacute;ncronos";
 choices[94]= new Array();
 choices[94][0] = " No es posible utilizar la tecnolog&iacute;a multicast ";
 choices[94][1] = " Todos est&aacute;n basados en interfaces WWW ";
 choices[94][2] = "Se ampl&iacute;an las funcionalidades de los sistemas de videoconferencia cl&aacute;sicos.";
 choices[94][3] = " Su est&aacute;ndar viene definido por el W3C";
 answers[94] = choices[94][2];
 units[94] = "117";
 comments[94] = "Id Pregunta: 8844. Examen UC3M 2010";


//  Id pregunta: 8847 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l es la tecnolog&iacute;a que permite una mayor velocidad de transferencia de datos?";
 choices[95]= new Array();
 choices[95][0] = " EDGE";
 choices[95][1] = "HSDPA";
 choices[95][2] = " UMTS/3G";
 choices[95][3] = "GPRS";
 answers[95] = choices[95][1];
 units[95] = "108";
 comments[95] = "Id Pregunta: 8847. Examen UC3M 2010";


//  Id pregunta: 8970 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  Entre los agentes del Plan General de Garant&iacute;a de la Calidad no figura:";
 choices[96]= new Array();
 choices[96][0] = "EGC (Eq garant&iacute;a calidad)";
 choices[96][1] = "EDS (Equipo de desarrollo)";
 choices[96][2] = "DIR (Director de proyecto)";
 choices[96][3] = "CDC (Comit&eacute; directivo de calidad)";
 answers[96] = choices[96][3];
 units[96] = "87,88,92";
 comments[96] = "Id Pregunta: 8970. ";


//  Id pregunta: 9097 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[97]= new Array();
 choices[97][0] = "No se pueden realizar copias de seguridad.";
 choices[97][1] = "La ley premite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[97][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[97][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[97] = choices[97][1];
 units[97] = "36";
 comments[97] = "Id Pregunta: 9097. ";


//  Id pregunta: 9590 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  Seg&uacute;n se dispone en la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, los registros electr&oacute;nicos permitir&aacute;n la presentaci&oacute;n de solicitudes:";
 choices[98]= new Array();
 choices[98][0] = "Exclusivamente en los mismos horarios que los registros presenciales.";
 choices[98][1] = "Exclusivamente los d&iacute;as laborables del a&ntilde;o, durante las 24 horas. ";
 choices[98][2] = "Todos los d&iacute;as del a&ntilde;o, durante las 24 horas. ";
 choices[98][3] = "Exclusivamente los d&iacute;as h&aacute;biles del a&ntilde;o, durante las 24 horas.";
 answers[98] = choices[98][2];
 units[98] = "43";
 comments[98] = "Id Pregunta: 9590. Examen TIC A2 2011 interna";


//  Id pregunta: 9591 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  El Real Decreto 3/2010, en su art&iacute;culo 29, dispone que las gu&iacute;as de seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones para el mejor cumplimiento de lo establecido en el Esquema Nacional de Seguridad las elaborar&aacute; y difundir&aacute;:";
 choices[99]= new Array();
 choices[99][0] = "El Centro Criptol&oacute;gico Nacional.";
 choices[99][1] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[99][2] = "Cada organismo p&uacute;blico que implante medidas de seguridad de acuerdo con el Esquema Nacional de Seguridad.";
 choices[99][3] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[99] = choices[99][0];
 units[99] = "43";
 comments[99] = "Id Pregunta: 9591. Examen TIC A2 2011 interna";


