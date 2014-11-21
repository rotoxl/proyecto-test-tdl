/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 74 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en un recuento de en cuantos criterios ha sido la mejor?:";
 choices[0]= new Array();
 choices[0][0] = "M&eacute;todo promethee";
 choices[0][1] = "Utilidad multiatributo";
 choices[0][2] = "Permutaci&oacute;n";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][3];
 units[0] = "34";
 comments[0] = "Id Pregunta: 74. Tema 36 de 2005";


//  Id pregunta: 77 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; par&aacute;metro no interviene directamente en evaluar el rendimiento de un sistema?:";
 choices[1]= new Array();
 choices[1][0] = "Tiempo de respuesta";
 choices[1][1] = "Productividad o throughput";
 choices[1][2] = "Tipo de procesador";
 choices[1][3] = "Tasa de utilizaci&oacute;n de CPU";
 answers[1] = choices[1][2];
 units[1] = "35";
 comments[1] = "Id Pregunta: 77. ";


//  Id pregunta: 299 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La duraci&oacute;n de la protecci&oacute;n otorgada por el Texto Refundido de la Ley de Propiedad Intelectual, aprobada por Real Decreto Legislativo 1/1996, a los programas de ordenador es de:";
 choices[2]= new Array();
 choices[2][0] = "50 a&ntilde;os";
 choices[2][1] = "30 a&ntilde;os";
 choices[2][2] = "70 a&ntilde;os desde el fallecimiento del creador, si es una persona f&iacute;sica";
 choices[2][3] = "60 a&ntilde;os en todo caso";
 answers[2] = choices[2][2];
 units[2] = "37";
 comments[2] = "Id Pregunta: 299. ";


//  Id pregunta: 478 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La capacidad de un sistema es:";
 choices[3]= new Array();
 choices[3][0] = "La cantidad de trabajo &uacute;til por unidad de tiempo";
 choices[3][1] = "La cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinado";
 choices[3][2] = "La m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo";
 choices[3][3] = "La m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 answers[3] = choices[3][3];
 units[3] = "38";
 comments[3] = "Id Pregunta: 478. ";


//  Id pregunta: 582 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  Cual de las siguiente subareas no pertenece tradicionalmente a sistemas";
 choices[4]= new Array();
 choices[4][0] = "Sistemas Operativos, Software Base y Sistemas Corporativos:";
 choices[4][1] = "Microinform&aacute;tica:";
 choices[4][2] = "Desarrollo";
 choices[4][3] = "Integraci&oacute;n de Sistemas:";
 answers[4] = choices[4][2];
 units[4] = "26";
 comments[4] = "Id Pregunta: 582. ";


//  Id pregunta: 772 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  Qu&eacute; significan las siglas JNI";
 choices[5]= new Array();
 choices[5][0] = "Interfaz para llamar m&eacute;todos nativos ";
 choices[5][1] = "Sistema de directorio";
 choices[5][2] = "Sistema para datamining";
 choices[5][3] = "ninguna de las anteriores";
 answers[5] = choices[5][0];
 units[5] = "60";
 comments[5] = "Id Pregunta: 772. ";


//  Id pregunta: 779 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indique una caracter&iacute;stica del software libre:";
 choices[6]= new Array();
 choices[6][0] = "Los usuarios pueden usar el software como deseen, para lo que deseen y en tantos ordenadores como deseen";
 choices[6][1] = "Los usuarios pueden redistribuir el software a otros usuarios";
 choices[6][2] = "Los usuarios deben tener acceso al c&oacute;digo fuente, escrito generalmente en un lenguaje de alto nivel";
 choices[6][3] = "Todas las respuestas son correctas";
 answers[6] = choices[6][3];
 units[6] = "61";
 comments[6] = "Id Pregunta: 779. ";


//  Id pregunta: 791 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  Seg&uacute;n la licencia GNU GPL (General Public License), &iquest;cu&aacute;l de las siguientes sentencias no es correcta?";
 choices[7]= new Array();
 choices[7][0] = "Disponemos de la libertad de estudiar c&oacute;mo funciona el programa y adaptarlo seg&uacute;n nuestras necesidades";
 choices[7][1] = "Nuestro derecho de autor queda salvaguardado";
 choices[7][2] = "Podemos redistribuir todas las copias que queramos";
 choices[7][3] = "No se puede cobrar dinero por el software libre.";
 answers[7] = choices[7][3];
 units[7] = "61";
 comments[7] = "Id Pregunta: 791. ";


//  Id pregunta: 856 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes respuestas es verdadera respecto a X.500?:";
 choices[8]= new Array();
 choices[8][0] = "X.500 es un protocolo que especifica un modelo para conectar servicios de directorio locales para formar un directorio global distribuido, de forma que el usuario percibe el directorio completo como accesible de su servidor local";
 choices[8][1] = "X.500 fue inicialmente un sistema propietario de Novell, pero en la actualidad ha sido cedido para dominio p&uacute;blico por un procedimiento estrat&eacute;gico de la compa&ntilde;&iacute;a para acabar con sistemas incompatibles desarrollados por empresas rivales";
 choices[8][2] = "X.500 ha sido desarrollado por ANSI para su implementaci&oacute;n en el ej&eacute;rcito americano por petici&oacute;n del DoD, pero en realidad no ha sido utilizado por &eacute;ste por falta de seguridad, y en la actualidad, al ser un protocolo publicado ha sido adoptado por diverso";
 choices[8][3] = "X.500 es el protocolo de directorio m&aacute;s extendido, por lo que puede considerarse un est&aacute;ndar de facto, pero aunque se estima pr&oacute;xima su adopci&oacute;n por ISO para incorporarlo a la definici&oacute;n est&aacute;ndar de OSI, a&uacute;n no se ha dado este paso";
 answers[8] = choices[8][0];
 units[8] = "73";
 comments[8] = "Id Pregunta: 856. ";


//  Id pregunta: 1338 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Seg&uacute;n la taxonom&iacute;a de Flynn de arquitecturas con proceso en paralelo, una m&aacute;quina MISD:";
 choices[9]= new Array();
 choices[9][0] = "Es la que se corresponde con la arquitectura de Von Neumann";
 choices[9][1] = "Es la estructura de un sistema con multiprocesador";
 choices[9][2] = "Es una superestructura pipe-line formada por varios procesadores, en la que cada uno hace parte del proceso sobre el flujo de datos que circula entre ellos";
 choices[9][3] = "No se corresponde con nada de lo anterior";
 answers[9] = choices[9][2];
 units[9] = "45";
 comments[9] = "Id Pregunta: 1338. ";


//  Id pregunta: 1858 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  &iquest;Qu&eacute; elemento no forma parte de la norma X.500 de OSI?";
 choices[10]= new Array();
 choices[10][0] = "Agente de usuario del directorio (DUA)";
 choices[10][1] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[10][2] = "Dominio de nombres de directorio (DND)";
 choices[10][3] = "Base de informaci&oacute;n del directorio (DIB)";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 1858. ";


//  Id pregunta: 2202 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?:";
 choices[11]= new Array();
 choices[11][0] = "Diagramas de despliegue";
 choices[11][1] = "Diagramas de componentes";
 choices[11][2] = "Diagramas de descomposici&oacute;n";
 choices[11][3] = "Diagramas de estructura";
 answers[11] = choices[11][0];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2202. ";


//  Id pregunta: 2249 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Dentro de las T&eacute;cnicas de Gesti&oacute;n de Proyectos que se recogen en la Guia de T&eacute;cnicas de METRICA 3, en el apartado de Planificaci&oacute;n, no se encuetra:";
 choices[12]= new Array();
 choices[12][0] = "Program Evaluation &amp; Review Technique";
 choices[12][1] = "Diagramas de Gantt";
 choices[12][2] = "Diagrama de Extrapolaci&oacute;n";
 choices[12][3] = "Diagrama de Regresi&oacute;n";
 answers[12] = choices[12][3];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2249. ";


//  Id pregunta: 2287 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  El modelo EFQM, desde el punto de vista de su &aacute;mbito, podr&iacute;a calificarse como:";
 choices[13]= new Array();
 choices[13][0] = "Certificaci&oacute;n de producto";
 choices[13][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[13][2] = "Total Quality Management";
 choices[13][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[13] = choices[13][2];
 units[13] = "92";
 comments[13] = "Id Pregunta: 2287. ";


//  Id pregunta: 2391 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  La estimaci&oacute;n de inversiones, costes de funcionamiento y resultados esperados se define en:";
 choices[14]= new Array();
 choices[14][0] = "Especificaciones funcionales del sistema";
 choices[14][1] = "Plan de sistemas";
 choices[14][2] = "Dise&ntilde;o del sistema";
 choices[14][3] = "Ninguno de los anteriores";
 answers[14] = choices[14][1];
 units[14] = "77";
 comments[14] = "Id Pregunta: 2391. ";


//  Id pregunta: 2427 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  La metodolog&iacute;a M&eacute;trica V.3 incorpora un proceso de mantenimiento de sistemas. &iquest;Podr&iacute;a determinar qu&eacute; actividad no est&aacute; incluida en el proceso?:";
 choices[15]= new Array();
 choices[15][0] = "Registro de la petici&oacute;n";
 choices[15][1] = "An&aacute;lisis de la petici&oacute;n";
 choices[15][2] = "Seguimiento y evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n";
 choices[15][3] = "Todas ellas son actividades del MSI";
 answers[15] = choices[15][3];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2427. ";


//  Id pregunta: 2448 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Las secuencias de ejecuci&oacute;n de los programas, el espacio requerido, memoria que utilizan&hellip;, son definidos en los:";
 choices[16]= new Array();
 choices[16][0] = "Manuales de procedimientos";
 choices[16][1] = "Manuales de usuarios";
 choices[16][2] = "Manuales de explotaci&oacute;n";
 choices[16][3] = "Manuales de contingencias";
 answers[16] = choices[16][2];
 units[16] = "86";
 comments[16] = "Id Pregunta: 2448. ";


//  Id pregunta: 2458 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  Los elementos que determinan o componen la calidad del software son los siguientes:";
 choices[17]= new Array();
 choices[17][0] = "Factores externos o de usuarios relativos al comportamiento actual del software, a la facilidad de cambio y a su facilidad de conversi&oacute;n";
 choices[17][1] = "Criterios internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[17][2] = "M&eacute;tricas de cuantificaci&oacute;n de criterios y factores";
 choices[17][3] = "Todos los anteriores";
 answers[17] = choices[17][3];
 units[17] = "87,88";
 comments[17] = "Id Pregunta: 2458. ";


//  Id pregunta: 2515 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Uno de los siguientes no es un problema de la fase de an&aacute;lisis de requisitos:";
 choices[18]= new Array();
 choices[18][0] = "El usuario posee el conocimiento de forma desorganizada";
 choices[18][1] = "Manejo de la complejidad del problema";
 choices[18][2] = "La adquisici&oacute;n de la informaci&oacute;n pertinente";
 choices[18][3] = "Acomodar los cambios que puedan ocurrir durante o despu&eacute;s del an&aacute;lisis";
 answers[18] = choices[18][0];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2515. ";


//  Id pregunta: 2554 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[19]= new Array();
 choices[19][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[19][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[19][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[19][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[19] = choices[19][2];
 units[19] = "87,88,92";
 comments[19] = "Id Pregunta: 2554. Pregunta Junta Andalucia - A";


//  Id pregunta: 2576 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  El PGGC define los agentes que deben de intervenir en un proyecto inform&aacute;tico.&iquest;Qui&eacute;n no participa?";
 choices[20]= new Array();
 choices[20][0] = "EXP: Experto o analista";
 choices[20][1] = "EDS: Equipo de Desarrollo";
 choices[20][2] = "EGC: Equipo de Garantia de Calidad";
 choices[20][3] = "USR: Usuario o cliente";
 answers[20] = choices[20][0];
 units[20] = "87,88,92";
 comments[20] = "Id Pregunta: 2576. ";


//  Id pregunta: 2584 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Qu&eacute; es el Modelo CMM (modelo de madurez de la capacidad de proceso de software)?:";
 choices[21]= new Array();
 choices[21][0] = "Metodolog&iacute;a de dise&ntilde;o de componentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[21][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[21][2] = " Modelo organizativo para el dise&ntilde;o software de macroensambladores cruzados.";
 choices[21][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[21] = choices[21][3];
 units[21] = "87";
 comments[21] = "Id Pregunta: 2584. Junta Andaluc&iacute;a";


//  Id pregunta: 2608 Año de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes actividades de Metrica v3 no se puede realizar en paralelo en Metrica v3?";
 choices[22]= new Array();
 choices[22][0] = "Elaboraci&oacute;n de manuales de usuario";
 choices[22][1] = "Preparaci&oacute;n del entorno  de construcci&oacute;n";
 choices[22][2] = "Definici&oacute;n de la formaci&oacute;n de usuarios finales";
 choices[22][3] = "Construcci&oacute;n de componentes y procedimientos de migraci&oacute;n y carga inicial de datos";
 answers[22] = choices[22][1];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2608. ";


//  Id pregunta: 2803 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Elementos de un modelo de calidad del SW son:";
 choices[23]= new Array();
 choices[23][0] = "Procedimientos, criterios y m&eacute;tricas de calidad";
 choices[23][1] = "Sistema de calidad, factores y m&eacute;tricas";
 choices[23][2] = "Factores y criterios de calidad";
 choices[23][3] = "Factores, criterios y m&eacute;tricas";
 answers[23] = choices[23][3];
 units[23] = "87";
 comments[23] = "Id Pregunta: 2803. ";


//  Id pregunta: 2876 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  El &quot; Desarrollo de Sistemas de Informaci&oacute;n&quot; en la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 lo constituyen";
 choices[24]= new Array();
 choices[24][0] = "Tres procesos";
 choices[24][1] = "Cuatro procesos";
 choices[24][2] = "Cinco procesos";
 choices[24][3] = "Seis procesos";
 answers[24] = choices[24][2];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2876. ";


//  Id pregunta: 2972 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  La tecnolog&iacute;a de acceso m&uacute;ltiple por divisi&oacute;n en c&oacute;digo de banda ancha denominada WCDMA, es utilizado por el sitema de telecomunicaciones m&oacute;vil?";
 choices[25]= new Array();
 choices[25][0] = "GPS";
 choices[25][1] = "ATM";
 choices[25][2] = "TNM";
 choices[25][3] = "UMTS";
 answers[25] = choices[25][3];
 units[25] = "108";
 comments[25] = "Id Pregunta: 2972. Examen Julio 2003";


//  Id pregunta: 2997 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al protocolo IPv6?";
 choices[26]= new Array();
 choices[26][0] = "Maneja direcciones de 16 bytes";
 choices[26][1] = "La cabecera del protocolo se ha ampliado respecto a la de IPv4";
 choices[26][2] = "Incluye funciones de autenticaci&oacute;n";
 choices[26][3] = "Incluye funciones de encriptaciones";
 answers[26] = choices[26][1];
 units[26] = "100";
 comments[26] = "Id Pregunta: 2997. ";


//  Id pregunta: 3000 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  LDAP ( Lightweght Directory Access Protocol):";
 choices[27]= new Array();
 choices[27][0] = "Surge como evoluci&oacute;n del protocolo DAP  (Directory Access Protocol). LDAP es un protocolo a nivel de aplicaci&oacute;n, por lo que tanto el cliente como el servidor deben implementar completamente la torre de protocolos OSI";
 choices[27][1] = "Surge como alternativa al DAP y utiliza TCP/IP en lugar de los protocolos OSI, lo cu&aacute;l es una ventaja ya que TCP/IP requiere menos recursos y est&aacute; m&aacute;s disponible, especialmente en ordenadores de sobremesa.";
 choices[27][2] = "Abandona el modelo cliente/servidor de implementaci&oacute;n, de modo que una aplicaci&oacute;n que desea acceder al directorio lo hace directamente contra la base de datos cuyo esquema est&aacute; disponible (ISO 9594)";
 choices[27][3] = "Es un servicio de directorio centralizado frente a los modelos distribuidos donde los datos podr&iacute;an estar fraccionados y/o replicados. As&iacute; pues con LDAP un &uacute;nico servidor da todo el servicio de directorio respondiendo a todas las consultas de los clientes";
 answers[27] = choices[27][1];
 units[27] = "106";
 comments[27] = "Id Pregunta: 3000. ";


//  Id pregunta: 3081 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  Las siglas ADMD y PRMD se usan dentro la norma X.400 refiri&eacute;ndose a:";
 choices[28]= new Array();
 choices[28][0] = "Estas siglas no se usan en dicha norma";
 choices[28][1] = "Dominios p&uacute;blicos o privados";
 choices[28][2] = "Administraci&oacute;n y privacidad de los datos";
 choices[28][3] = "Ninguna de las respuestas anteriores";
 answers[28] = choices[28][1];
 units[28] = "106";
 comments[28] = "Id Pregunta: 3081. ";


//  Id pregunta: 3133 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de estas afirmaciones es verdadera respecto a TCP/IP?:";
 choices[29]= new Array();
 choices[29][0] = "TCP tiene el mismo formato de mensaje que IP";
 choices[29][1] = "UDP no es un protocolo TCP/IP";
 choices[29][2] = "Para que TCP/IP funciones es necesario disponer de un interfaz Ethernet";
 choices[29][3] = "Una m&aacute;quina con varias tarjetas de red tiene varias direcciones Internet";
 answers[29] = choices[29][3];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3133. ";


//  Id pregunta: 3259 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Cu&aacute;ntos octetos usa la cabecera de la nueva versi&oacute;n de IP (Ipv6)?:";
 choices[30]= new Array();
 choices[30][0] = "32";
 choices[30][1] = "8";
 choices[30][2] = "12";
 choices[30][3] = "40";
 answers[30] = choices[30][3];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3259. ";


//  Id pregunta: 3303 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Qu&eacute; organismo se encarga directamente de asignar los puertos en Internet, que son precisos a la hora de especificar los est&aacute;ndares?:";
 choices[31]= new Array();
 choices[31][0] = "IETF";
 choices[31][1] = "IESG";
 choices[31][2] = "ITU-T";
 choices[31][3] = "ICANN";
 answers[31] = choices[31][3];
 units[31] = "100,112";
 comments[31] = "Id Pregunta: 3303. ";


//  Id pregunta: 3343 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Con voz sobre IP:";
 choices[32]= new Array();
 choices[32][0] = "Se alcanza la misma calidad que con llamadas telef&oacute;nicas convencionales";
 choices[32][1] = "Se pueden realizar llamadas internacionales al mismo precio que una llamada local, el precio de la conexi&oacute;n con el nodo de acceso a Internet";
 choices[32][2] = "Las 2 respuestas anteriores son correctas";
 choices[32][3] = "Las 2 respuestas anteriores son falsas";
 answers[32] = choices[32][2];
 units[32] = "112";
 comments[32] = "Id Pregunta: 3343. *";


//  Id pregunta: 3463 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  El protocolo utilizado para la comunicaci&oacute;n entre los nodos de una red GSM (MSC, HLR, VLR, ...) es el:";
 choices[33]= new Array();
 choices[33][0] = "ISUP";
 choices[33][1] = "MAP";
 choices[33][2] = "INAP";
 choices[33][3] = "RCP";
 answers[33] = choices[33][1];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3463. ";


//  Id pregunta: 3511 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  En el protocolo HTTP, el m&eacute;todo HEAD:";
 choices[34]= new Array();
 choices[34][0] = "Es lo mismo que GET";
 choices[34][1] = "Recupera el cuerpo o Body del mensaje";
 choices[34][2] = "Las cabeceras no aparecen en GET pero s&iacute; en HEAD";
 choices[34][3] = "Se utiliza normalmente para ver la existencia del documento o su longitud";
 answers[34] = choices[34][3];
 units[34] = "112";
 comments[34] = "Id Pregunta: 3511. ";


//  Id pregunta: 3687 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  La versi&oacute;n europea de la tecnolog&iacute;a de sat&eacute;lites GPS americana se denomina:";
 choices[35]= new Array();
 choices[35][0] = "Kepler";
 choices[35][1] = "Galileo";
 choices[35][2] = "Marconi";
 choices[35][3] = "Hawking";
 answers[35] = choices[35][1];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3687. ";


//  Id pregunta: 3719 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Los conectores que se insertan en los hubs 10 base T son del tipo:";
 choices[36]= new Array();
 choices[36][0] = "RJ11";
 choices[36][1] = "RJ45";
 choices[36][2] = "RJ37";
 choices[36][3] = "V.24";
 answers[36] = choices[36][1];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3719. ";


//  Id pregunta: 3778 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Radius permite autentificaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "S&oacute;lo mediante PAP";
 choices[37][1] = "S&oacute;lo mediante CHAP";
 choices[37][2] = "S&oacute;lo para dispositivos fijos";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][3];
 units[37] = "107";
 comments[37] = "Id Pregunta: 3778. ";


//  Id pregunta: 3862 Año de creación de pregunta: 2004-01-01
 questions[38]= "39)  Qu&eacute; servicio no ofrece DNS security";
 choices[38]= new Array();
 choices[38][0] = "Prueba del origen de datos";
 choices[38][1] = "Distribuci&oacute;n de clave p&uacute;blica";
 choices[38][2] = "Secreto del mensaje";
 choices[38][3] = "Autenticaci&oacute;n";
 answers[38] = choices[38][2];
 units[38] = "116";
 comments[38] = "Id Pregunta: 3862. Tanenbaum";


//  Id pregunta: 4005 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Con respecto al est&aacute;ndar de servicios de directorio X500 , el protocolo utilizado para intercambiar informaci&oacute;n administrativa entre dos DSA&rsquo;s (Directory Service Agent) se denomina:";
 choices[39]= new Array();
 choices[39][0] = "DMO";
 choices[39][1] = "DOP";
 choices[39][2] = "DMD";
 choices[39][3] = "DISP";
 answers[39] = choices[39][1];
 units[39] = "106";
 comments[39] = "Id Pregunta: 4005. ";


//  Id pregunta: 4008 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l es el puerto est&aacute;ndar TCP que usa el protocolo IMAP (&quot;Interactive Mail Access Protocol&quot;)?";
 choices[40]= new Array();
 choices[40][0] = "110";
 choices[40][1] = "25";
 choices[40][2] = "143";
 choices[40][3] = "21";
 answers[40] = choices[40][2];
 units[40] = "106";
 comments[40] = "Id Pregunta: 4008. ";


//  Id pregunta: 4053 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  En referencia a las amenazas que afectan a la seguridad en las redes de comunicaciones, se&ntilde;ale la respuesta incorrecta";
 choices[41]= new Array();
 choices[41][0] = "La interrupci&oacute;n puede ser tanto f&iacute;sica como l&oacute;gica";
 choices[41][1] = "El llamado sniffing es un tipo de intercepci&oacute;n";
 choices[41][2] = "Los ataques de tipo pasivo son f&aacute;ciles de detectar";
 choices[41][3] = "Los ataques pueden ser activos y pasivos";
 answers[41] = choices[41][2];
 units[41] = "111";
 comments[41] = "Id Pregunta: 4053. ";


//  Id pregunta: 4143 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  La intrusi&oacute;n basada en la habilidad del intruso en enga&ntilde;ar a la gente para que rompa los procedimientos normales de seguridad se llama";
 choices[42]= new Array();
 choices[42][0] = "surfeo sobre los hombros (shoulder surfing)";
 choices[42][1] = "huellas del cerebro (brain fingerprinting)";
 choices[42][2] = "ingenier&iacute;a social";
 choices[42][3] = "susterfugio";
 answers[42] = choices[42][2];
 units[42] = "111";
 comments[42] = "Id Pregunta: 4143. ";


//  Id pregunta: 4161 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  En seguridad, que elemento no forma parte de los servicios de AAA";
 choices[43]= new Array();
 choices[43][0] = "Registro (accounting)";
 choices[43][1] = "Autorizaci&oacute;n";
 choices[43][2] = "Adaptaci&oacute;n";
 choices[43][3] = "Autenticaci&oacute;n";
 answers[43] = choices[43][2];
 units[43] = "111";
 comments[43] = "Id Pregunta: 4161. ";


//  Id pregunta: 4210 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  El t&eacute;rmino JigSaw se refiere a:";
 choices[44]= new Array();
 choices[44][0] = "Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor";
 choices[44][1] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos";
 choices[44][2] = "Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse";
 choices[44][3] = "Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos";
 answers[44] = choices[44][0];
 units[44] = "116";
 comments[44] = "Id Pregunta: 4210. ";


//  Id pregunta: 4245 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Para que sirve XPath (XML Path language)?";
 choices[45]= new Array();
 choices[45][0] = "Para identificar(y seleccionar)elementos de un documento XML.";
 choices[45][1] = "Para gestionar claves en XML";
 choices[45][2] = "Para hacer consultas en documentos XML";
 choices[45][3] = "Para definir documentos XML";
 answers[45] = choices[45][0];
 units[45] = "69";
 comments[45] = "Id Pregunta: 4245. ";


//  Id pregunta: 4351 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Qu&eacute; se entiende por servicio universal, seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[46]= new Array();
 choices[46][0] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica.";
 choices[46][1] = "Que los usuarios finales con discapacidad tengan acceso a los mismos servicios que el resto de los usuarios finales.";
 choices[46][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[46][3] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados.";
 answers[46] = choices[46][2];
 units[46] = "110";
 comments[46] = "Id Pregunta: 4351. ";


//  Id pregunta: 4366 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  La etiqueta en HTML para indicar el comienzo de una celda con datos en una tabla es:";
 choices[47]= new Array();
 choices[47][0] = "&lt;table&gt;";
 choices[47][1] = "&lt;tr&gt;";
 choices[47][2] = "&lt;th&gt;";
 choices[47][3] = "&lt;td&gt;";
 answers[47] = choices[47][3];
 units[47] = "69";
 comments[47] = "Id Pregunta: 4366. ";


//  Id pregunta: 4450 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Una de las medidas que se utiliza para cuantificar la rentabilidad de las inversiones en los proyectos TIC, es el VAN (valor actual neto), que se podr&iacute;a definir como:";
 choices[48]= new Array();
 choices[48][0] = "Ratio ente ingreso neto y costes";
 choices[48][1] = "Tiempo necesario para que el proyecto recupere el capital invertido.";
 choices[48][2] = "Tasa de descuento necesaria para que el valor actual sea cero.";
 choices[48][3] = "El valor actual de todos los ingresos menos el valor actual de todos los desembolsos de un proyecto, supuesto un determinado tipo de inter&eacute;s.";
 answers[48] = choices[48][3];
 units[48] = "35";
 comments[48] = "Id Pregunta: 4450. ";


//  Id pregunta: 4474 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Cual de los siguientes no es un tipo de prueba contemplado en la metodolog&iacute;a Metrica V3?";
 choices[49]= new Array();
 choices[49][0] = "Pruebas unitarias.";
 choices[49][1] = "Pruebas singulares.";
 choices[49][2] = "Pruebas de integraci&oacute;n.";
 choices[49][3] = "Pruebas de regresi&oacute;n.";
 answers[49] = choices[49][1];
 units[49] = "86";
 comments[49] = "Id Pregunta: 4474. ";


//  Id pregunta: 4550 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  El Sistema de Comunicaciones Moviles Europeo de Tercera Generacion recibe el nombre de:";
 choices[50]= new Array();
 choices[50][0] = "UMTS";
 choices[50][1] = "EDGE";
 choices[50][2] = "DCS-1800.";
 choices[50][3] = "PHS";
 answers[50] = choices[50][0];
 units[50] = "108";
 comments[50] = "Id Pregunta: 4550. ";


//  Id pregunta: 4607 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  El atributo que NO forma parte de los que utiliza la t&eacute;cnica de estimaci&oacute;n del M&eacute;todo Albrecht para el An&aacute;lisis de los Puntos Funci&oacute;n es";
 choices[51]= new Array();
 choices[51][0] = "gran uso de Ia configuraci&oacute;n";
 choices[51][1] = "dise&ntilde;o para la eficacia del usuario final";
 choices[51][2] = "velocidad de las transacciones";
 choices[51][3] = "prestaciones";
 answers[51] = choices[51][1];
 units[51] = "89";
 comments[51] = "Id Pregunta: 4607. ";


//  Id pregunta: 4655 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  Un detector de intrusiones act&uacute;a a: ";
 choices[52]= new Array();
 choices[52][0] = "nivel f&iacute;sico";
 choices[52][1] = "nivel de enlace";
 choices[52][2] = "nivel de red";
 choices[52][3] = "nivel de aplicaci&oacute;n";
 answers[52] = choices[52][3];
 units[52] = "111";
 comments[52] = "Id Pregunta: 4655. ";


//  Id pregunta: 4677 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  La planificaci&oacute;n y gesti&oacute;n de un proyecto se encarga a una persona, que denominaremos &quot;Jefe de proyecto&quot;. El Plan de proyecto contendr&aacute;";
 choices[53]= new Array();
 choices[53][0] = "Un grafico de Gant para estimar el coste, otro de PERT para las restricciones y usaremos COCOMO para las etapas.";
 choices[53][1] = "Estrictamente la Metodolog&iacute;a que el Departamento especifique";
 choices[53][2] = "Un grafico de GANTT para las etapas, un gr&aacute;fico de PERT para la representaci&oacute;n de las restricciones y usaremos COCOMO para las etapas.";
 choices[53][3] = "La Metodolog&iacute;a del Departamento que se suministre v&iacute;a web";
 answers[53] = choices[53][2];
 units[53] = "77";
 comments[53] = "Id Pregunta: 4677. Examen 2006 JCYL";


//  Id pregunta: 4783 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  En cual de los siguientes casos se podr&aacute; utilizar el procedimiento negociado";
 choices[54]= new Array();
 choices[54][0] = "Cuando se trate de bienes o servicios declarados de contrataci&oacute;n centralizada.";
 choices[54][1] = "En casos de imperiosa urgencia.";
 choices[54][2] = "Cuando no se presenten proposiciones en respuesta a un procedimiento abierto o restringido o &eacute;stas sean irregulares o inaceptables.";
 choices[54][3] = "En todos los casos anteriores";
 answers[54] = choices[54][3];
 units[54] = "41";
 comments[54] = "Id Pregunta: 4783. ";


//  Id pregunta: 5028 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas quecirculan por la red?:";
 choices[55]= new Array();
 choices[55][0] = "1522 bytes";
 choices[55][1] = "1500 bytes";
 choices[55][2] = "1496 bytes";
 choices[55][3] = "1518 bytes";
 answers[55] = choices[55][0];
 units[55] = "100, 102";
 comments[55] = "Id Pregunta: 5028. Examen TIC A 2007";


//  Id pregunta: 5090 Año de creación de pregunta: 2001-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de actualizaci&oacute;n de CRLs?";
 choices[56]= new Array();
 choices[56][0] = "muestreo de CRLs";
 choices[56][1] = "env&iacute;o de CRL";
 choices[56][2] = "anuncio de CRL";
 choices[56][3] = "verificaci&oacute;n en l&iacute;nea";
 answers[56] = choices[56][1];
 units[56] = "73";
 comments[56] = "Id Pregunta: 5090. ";


//  Id pregunta: 5219 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  En qu&eacute; proceso se realiza la actividad de seguridad Selecci&oacute;n del Equipo de Seguridad";
 choices[57]= new Array();
 choices[57][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[57][1] = "Estudio de Viabilidad del Sistema";
 choices[57][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[57][3] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[57] = choices[57][1];
 units[57] = "86";
 comments[57] = "Id Pregunta: 5219. ";


//  Id pregunta: 5224 Año de creación de pregunta: 2007-01-01
 questions[58]= "59)  Cu&aacute;l de las siguientes actividades no pertenece al proceso Mantenimiento de Sistema de Informaci&oacute;n";
 choices[58]= new Array();
 choices[58][0] = "Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n";
 choices[58][1] = "An&aacute;lisis de la petici&oacute;n";
 choices[58][2] = "Registro de la petici&oacute;n";
 choices[58][3] = "Planificaci&oacute;n de la petici&oacute;n";
 answers[58] = choices[58][3];
 units[58] = "86";
 comments[58] = "Id Pregunta: 5224. ";


//  Id pregunta: 5242 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Si una vez determinadas las fortalezas y debilidades, as&iacute; como las amenazas y oportunidades, se define una estrategia defensiva:";
 choices[59]= new Array();
 choices[59][0] = "Significa que la empresa est&aacute; preparada para enfrentarse a las amenazas";
 choices[59][1] = "Significa que la empresa se enfrenta a las amenazas externas sin las fortalezas internas necesarias";
 choices[59][2] = "Significa que la empresa cuenta con las fortalezas internas y adem&aacute;s se le presentan oportunidades externas";
 choices[59][3] = "Significa que a la empresa se le presentan oportunidades pero carece de preparaci&oacute;n para afrontarlas";
 answers[59] = choices[59][0];
 units[59] = "77";
 comments[59] = "Id Pregunta: 5242. ";


//  Id pregunta: 5559 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  En base al TRLPI (RD 1/1996) y las modificaciones introducidas por la Ley 23/2006:";
 choices[60]= new Array();
 choices[60][0] = "La copia privada se entiende como un derecho de los usuarios.";
 choices[60][1] = "Este derecho de copia privada da lugar al establecimiento de una remuneraci&oacute;n compensatoria para los autores.";
 choices[60][2] = "Dicha remuneraci&oacute;n compensatoria aplica tambi&eacute;n a los programas de ordenador y bases de datos.";
 choices[60][3] = "El canon aplicado a los equipos de reproducci&oacute;n digitales deber&aacute; revisarse cada 2 a&ntilde;os.";
 answers[60] = choices[60][3];
 units[60] = "37";
 comments[60] = "Id Pregunta: 5559. ";


//  Id pregunta: 5611 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes conceptos se definen en X.500?";
 choices[61]= new Array();
 choices[61][0] = "DIB, que se comunica con el DSA utilizando el protocolo DAP. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. DMO que gestiona un dominio DMD";
 choices[61][1] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DIT, donde se almacena la informaci&oacute;n en un directorio X.500. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. ";
 choices[61][2] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DAP, que es el protocolo utilizado por un DUA para comunicarse con un DSA. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. ";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = choices[61][2];
 units[61] = "106";
 comments[61] = "Id Pregunta: 5611. ";


//  Id pregunta: 5626 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  De los siguientes ataques, cu&aacute;l se corresponde con la obtenci&oacute;n de informaci&oacute;n de una red sin modificar la informaci&oacute;n ";
 choices[62]= new Array();
 choices[62][0] = "Explot";
 choices[62][1] = "Snooping";
 choices[62][2] = "Wardriving";
 choices[62][3] = "Teardrop";
 answers[62] = choices[62][1];
 units[62] = "111";
 comments[62] = "Id Pregunta: 5626. ";


//  Id pregunta: 5720 Año de creación de pregunta: 2009-01-01
 questions[63]= "64)  En an&aacute;lisis de XML, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[63]= new Array();
 choices[63][0] = "El modelo DOM procesa el documento XML completo y lo almacena en memoria";
 choices[63][1] = "En el modelo SAX puede procesar el documento XML a trav&eacute;s de eventos";
 choices[63][2] = "El modelo SAX procesa el documento XML y genera un &aacute;rbol";
 choices[63][3] = "El modelo DOM procesa el documento XML y lo modeliza en forma de &aacute;rbol";
 answers[63] = choices[63][2];
 units[63] = "69";
 comments[63] = "Id Pregunta: 5720. MAP 2008 A1";


//  Id pregunta: 5745 Año de creación de pregunta: 2009-01-01
 questions[64]= "65)  Respecto al algoritmo DSA, &iquest;cu&aacute;l de estas afirmaciones es falsa?";
 choices[64]= new Array();
 choices[64][0] = "Sirve para firmar documentos";
 choices[64][1] = "Sirve para autenticar";
 choices[64][2] = "Sirve para cifrar";
 choices[64][3] = "Es un est&aacute;ndar de FIPS para firmas digitales";
 answers[64] = choices[64][2];
 units[64] = "73";
 comments[64] = "Id Pregunta: 5745. ";


//  Id pregunta: 5785 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  &iquest;De acuerdo al est&aacute;ndar, cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS R99 si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[65]= new Array();
 choices[65][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[65][1] = "100 kbps";
 choices[65][2] = "144 Kbps";
 choices[65][3] = "384 kbps";
 answers[65] = choices[65][3];
 units[65] = "108";
 comments[65] = "Id Pregunta: 5785. ";


//  Id pregunta: 5884 Año de creación de pregunta: 2009-01-01
 questions[66]= "67)  En relaci&oacute;n a &quot;Internet Assigned Numbers Authority&quot; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[66]= new Array();
 choices[66][0] = "IANA coordina a nivel global el &quot;DNS root&quot;";
 choices[66][1] = "IANA gestiona el dominio .int (top-level)";
 choices[66][2] = "IANA asigna las direcciones IP";
 choices[66][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board";
 answers[66] = choices[66][2];
 units[66] = "112";
 comments[66] = "Id Pregunta: 5884. MAP 2008 A1";


//  Id pregunta: 5886 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  El m&eacute;todo de Saaty &oacute; AHP:";
 choices[67]= new Array();
 choices[67][0] = "Es relativo a accesibilidad web";
 choices[67][1] = "Es relativo a la decisi&oacute;n multicriterio";
 choices[67][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n";
 choices[67][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo";
 answers[67] = choices[67][1];
 units[67] = "34";
 comments[67] = "Id Pregunta: 5886. MAP 2008 A1";


//  Id pregunta: 5994 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  NO es un m&eacute;todo din&aacute;mico de estudio de la rentabilidad de inversi&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "La tasa de rentabilidad media.";
 choices[68][1] = "La tasa de valor actual.";
 choices[68][2] = "La tasa interna de rentabilidad.";
 choices[68][3] = "El &iacute;ndice de rentabilidad.";
 answers[68] = choices[68][0];
 units[68] = "38";
 comments[68] = "Id Pregunta: 5994. TIC A 2009";


//  Id pregunta: 6157 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Qu&eacute; protocolo de la capa de transporte utiliza TFTP?";
 choices[69]= new Array();
 choices[69][0] = "TCP, al igual que FTP";
 choices[69][1] = "TCP";
 choices[69][2] = "UDP";
 choices[69][3] = "UDP, al igual que FTP.";
 answers[69] = choices[69][2];
 units[69] = "112";
 comments[69] = "Id Pregunta: 6157. ";


//  Id pregunta: 6198 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l es el framework para aplicaciones desarrolladas con Spring, asociado con el control y la gesti&oacute;n de la seguridad?";
 choices[70]= new Array();
 choices[70][0] = "Spring Security";
 choices[70][1] = "JSF";
 choices[70][2] = "Struts";
 choices[70][3] = "Jbuilder";
 answers[70] = choices[70][0];
 units[70] = "60, 116";
 comments[70] = "Id Pregunta: 6198. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6382 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Las normas t&eacute;cnicas de interoperabilidad:";
 choices[71]= new Array();
 choices[71][0] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[71][1] = "Las aprobar&aacute;  la Secretaria de Estado para la Funci&oacute;n P&uacute;blica, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; el Ministerio de la Presidencia mediante Orden Ministerial.";
 choices[71][2] = "Las aprobar&aacute; el Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[71][3] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Real Decreto.";
 answers[71] = choices[71][0];
 units[71] = "43";
 comments[71] = "Id Pregunta: 6382. Disposici&oacute;n adicional primera ENI";


//  Id pregunta: 6474 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las plataformas desarrolladas por Java es una plataforma para crear aplicaciones servidor?";
 choices[72]= new Array();
 choices[72][0] = "Plataforma Java Technique Edition (JTE)";
 choices[72][1] = "Plataforma Java  Enterprise Edition (JEE)";
 choices[72][2] = "Plataforma Java Standard Edition (JSE)";
 choices[72][3] = "Plataforma Java Micro Edition (JME)";
 answers[72] = choices[72][1];
 units[72] = "116";
 comments[72] = "Id Pregunta: 6474. Castilla La Mancha 2009";


//  Id pregunta: 6493 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  El Coste de Calidad incluye todos los costes acarreados en las actividades relacionadas en la obtenci&oacute;n de la calidad. Los Costes de Calidad se pueden dividir en 3 grupos, que son:";
 choices[73]= new Array();
 choices[73][0] = "Costes asociados con la planificaci&oacute;n, la formaci&oacute;n y las pruebas";
 choices[73][1] = "Costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos";
 choices[73][2] = "Costes asociados con la inspecci&oacute;n, la reparaci&oacute;n y el mantenimiento";
 choices[73][3] = "Costes asociados con el an&aacute;lisis, la revisi&oacute;n y las devoluciones de productos";
 answers[73] = choices[73][1];
 units[73] = "92";
 comments[73] = "Id Pregunta: 6493. Castilla La Mancha 2009";


//  Id pregunta: 6523 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  El API que permite a los desarrolladores Java generar y recoger mensajes SOAP con ficheros adjuntos es:";
 choices[74]= new Array();
 choices[74][0] = "JAXR";
 choices[74][1] = "JSXA";
 choices[74][2] = "SAAJ";
 choices[74][3] = "SWAJ";
 answers[74] = choices[74][2];
 units[74] = "116";
 comments[74] = "Id Pregunta: 6523. ";


//  Id pregunta: 6531 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  La Resoluci&oacute;n del 6 de Febrero de 2006 sobre calidad de los servicios en la Administraci&oacute;n, fija distintos programas de actuaci&oacute;n, cu&aacute;l de los siguientes no es uno de ellos?";
 choices[75]= new Array();
 choices[75][0] = "Programa de Cartas de Servicio";
 choices[75][1] = "Programa de Evaluaci&oacute;n de la calidad de las organizaciones";
 choices[75][2] = "Programa de Quejas y Sugerencias";
 choices[75][3] = "Programa de Implantaci&oacute;n de la Calidad";
 answers[75] = choices[75][3];
 units[75] = "92";
 comments[75] = "Id Pregunta: 6531. ";


//  Id pregunta: 6535 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Dentro de la gu&iacute;a de servicios ISO 9004, la orientaci&oacute;n para la direcci&oacute;n se basa en distintos principios de gesti&oacute;n";
 choices[76]= new Array();
 choices[76][0] = "Enfoque al cliente";
 choices[76][1] = "Liderazgo";
 choices[76][2] = "Participaci&oacute;n del personal";
 choices[76][3] = "Todas las respuestas anteriores son correctas";
 answers[76] = choices[76][3];
 units[76] = "92";
 comments[76] = "Id Pregunta: 6535. ";


//  Id pregunta: 6630 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  El modelo CMM de Ingenier&iacute;a de Software tiene:";
 choices[77]= new Array();
 choices[77][0] = "6 niveles de Capacidad y 5 niveles de Madurez";
 choices[77][1] = "5 niveles de Capacidad y 5 niveles de Madurez";
 choices[77][2] = "6 niveles de Capacidad y 5 niveles de Madurez";
 choices[77][3] = "6 niveles de Capacidad y 6 niveles de Madurez";
 answers[77] = choices[77][2];
 units[77] = "87";
 comments[77] = "Id Pregunta: 6630. ";


//  Id pregunta: 6636 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  Dentro del modelo de calidad EFQM, los 3 criterios de mayor peso por orden son:";
 choices[78]= new Array();
 choices[78][0] = "Satisfacci&oacute;n del Cliente; Impacto en la Sociedad; Resultados";
 choices[78][1] = "Satisfacci&oacute;n del Cliente; Resultados; Procesos";
 choices[78][2] = "Satisfacci&oacute;n del Cliente; Resultados; Liderazgo";
 choices[78][3] = "Resultados; Satisfacci&oacute;n del Cliente; Liderazgo";
 answers[78] = choices[78][1];
 units[78] = "88";
 comments[78] = "Id Pregunta: 6636. ";


//  Id pregunta: 6648 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes m&eacute;tricas NO se usa en el modelo COCOMO?";
 choices[79]= new Array();
 choices[79][0] = "KLOC (K Lines Of Code)";
 choices[79][1] = "NSLOC (New Source Lines Of Code)";
 choices[79][2] = "DSI (Delivery Source Instructions)";
 choices[79][3] = "NSDSI (New Source Delivery Source Instructions)";
 answers[79] = choices[79][3];
 units[79] = "89";
 comments[79] = "Id Pregunta: 6648. ";


//  Id pregunta: 8230 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  En lo relativo a la rentabilidad de las inversiones, &iquest;cu&aacute;l de los siguientes m&eacute;todos es un m&eacute;todo din&aacute;mico de selecci&oacute;n de inversiones?";
 choices[80]= new Array();
 choices[80][0] = "VAN (Valor Actual Neto). ";
 choices[80][1] = "El m&eacute;todo del flujo total por unidad monetaria comprometida.";
 choices[80][2] = "El m&eacute;todo de comparaci&oacute;n de costes.";
 choices[80][3] = "El m&eacute;todo del payback";
 answers[80] = choices[80][0];
 units[80] = "38";
 comments[80] = "Id Pregunta: 8230. Examen TIC A2 2010";


//  Id pregunta: 8246 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Para garantizar la protecci&oacute;n sanitaria frente a las ondas electromagn&eacute;ticas de telefon&iacute;a m&oacute;vil, los operadores de telefon&iacute;a m&oacute;vil deben:";
 choices[81]= new Array();
 choices[81][0] = "Situar las estaciones base fuera de las ciudades, de tal forma que al estar m&aacute;s alejadas, la potencia que reciban las personas debida a una comunicaci&oacute;n por telefon&iacute;a m&oacute;vil sea menor.";
 choices[81][1] = "Instalar las estaciones base de manera que el diagrama de emisi&oacute;n no incida sobre el propio edificio, terraza o &aacute;tico, si se instalan en una azotea.";
 choices[81][2] = "Fijar la potencia con la que emiten las estaciones base para que sea 1/4 de la SAR (Tasa de absorci&oacute;n espec&iacute;fica) de un tel&eacute;fono m&oacute;vil.";
 choices[81][3] = "Instalar las estaciones base en cualquier sitio, ya que la telefon&iacute;a m&oacute;vil emite ondas ionizantes que no afectan a la salud.";
 answers[81] = choices[81][1];
 units[81] = "108";
 comments[81] = "Id Pregunta: 8246. Examen TIC A1 2010";


//  Id pregunta: 8303 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  En relaci&oacute;n a IPSec se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[82]= new Array();
 choices[82][0] = "Se defini&oacute; originariamente en las RFCs 1825 y 1829.";
 choices[82][1] = "Tanto AH (Authentication Header) como ESP (Encapsulating Security Payload) proporcionan integridad y autenticaci&oacute;n en la comunicaci&oacute;n.";
 choices[82][2] = "En modo transporte con AH no es posible traducir direcciones mediante NAT transversal.";
 choices[82][3] = "ESP debe implementar obligatoriamente el algoritmo AES-CBC con claves de 128 bits";
 answers[82] = choices[82][2];
 units[82] = "111";
 comments[82] = "Id Pregunta: 8303. Examen TIC A2 2010";


//  Id pregunta: 8307 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Un documento firmado digitalmente incluye la huella digital:";
 choices[83]= new Array();
 choices[83][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[83][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[83][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[83][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[83] = choices[83][2];
 units[83] = "111";
 comments[83] = "Id Pregunta: 8307. Examen TIC A2 2010";


//  Id pregunta: 8339 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;En qu&eacute; se diferencian JRP y JAD?";
 choices[84]= new Array();
 choices[84][0] = "El JRP es una t&eacute;cnica de estimaci&oacute;n y el JAD es una t&eacute;cnica de captura de requisitos.";
 choices[84][1] = "El JRP es un modelo de cido de vida utilizado en el desarrollo de aplicaciones mientras que el JAD es una IDE (Integrated Development Environment) empleada en JAVA.";
 choices[84][2] = "Son distintas herramientas que permiten la gesti&oacute;n de la configuraci&oacute;n del software.";
 choices[84][3] = "Son sesiones de trabajos que permiten identificar los requisitos de un sistema. Se diferencian en los perfiles que act&uacute;an en ellas y en los resultados de &eacute;stas.";
 answers[84] = choices[84][3];
 units[84] = "86";
 comments[84] = "Id Pregunta: 8339. Examen TIC A2 2010";


//  Id pregunta: 8404 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Para que las im&aacute;genes electr&oacute;nicas realizadas por la Administraci&oacute;n de documentos en soporte no electr&oacute;nico tengan la naturaleza de copias electr&oacute;nicas aut&eacute;nticas, con el alcance y efectos previstos en el art. 46 de la ley 30/1992, se deben cumplir ciertos requisitos. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos? ";
 choices[85]= new Array();
 choices[85][0] = "Que la copia electr&oacute;nica incluya su car&aacute;cter de copia entre los metadatos asociados. ";
 choices[85][1] = "Que el documento copiado sea un original o una copia aut&eacute;ntica.";
 choices[85][2] = "Que las im&aacute;genes electr&oacute;nicas est&eacute;n codificadas conforme a algunos de los formatos y con los niveles de calidad y condiciones t&eacute;cnicas especificados en el Esquema Nacional de Interoperabilidad.  ";
 choices[85][3] = "Que en los metadatos se incluya el &oacute;rgano y lugar donde se custodia el original o copia autentica en soporte no electr&oacute;nico.";
 answers[85] = choices[85][3];
 units[85] = "43";
 comments[85] = "Id Pregunta: 8404. Examen TIC A2 2010";


//  Id pregunta: 8425 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Interoperabilidad, Real Decreto 4/2010 del 8 de enero?";
 choices[86]= new Array();
 choices[86][0] = "La interoperabilidad como cualidad integral";
 choices[86][1] = "La reutilizaci&oacute;n y la transferencia tecnol&oacute;gica";
 choices[86][2] = "El car&aacute;cter multidimensional de la interoperabilidad";
 choices[86][3] = "El enfoque de soluciones multilaterales";
 answers[86] = choices[86][1];
 units[86] = "43";
 comments[86] = "Id Pregunta: 8425. ";


//  Id pregunta: 8525 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Los routers para filtrado de paquetes (&quot;packet filtering&quot;):";
 choices[87]= new Array();
 choices[87][0] = "Son cortafuegos (firewalls) que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateful inspection&quot;.";
 choices[87][1] = "Son firewalls que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateless inspection&quot;.";
 choices[87][2] = "No son firewalls, sino dispositivos de encaminamiento (&quot;routing&quot;) que se pueden conectar a un cortafuegos como complemento de &eacute;ste";
 choices[87][3] = "Son firewalls que operan en el nivel de red.";
 answers[87] = choices[87][3];
 units[87] = "111";
 comments[87] = "Id Pregunta: 8525. Examen TIC A2 2010 interna";


//  Id pregunta: 8593 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  La librer&iacute;a Java API for XML Processing (JAXP):";
 choices[88]= new Array();
 choices[88][0] = "Permite tratar documentos XML tanto a trav&eacute;s de! modelo SAX como a trav&eacute;s del modelo DOM.";
 choices[88][1] = "Trabaja &uacute;nicamente con el modelo DOM.";
 choices[88][2] = "No existe tal librer&iacute;a en el lenguaje Java";
 choices[88][3] = "No tiene una Implementaci&oacute;n propia para el parser y obligatoriamente debe utilizar el parser del modelo DOM";
 answers[88] = choices[88][0];
 units[88] = "116";
 comments[88] = "Id Pregunta: 8593. Examen TIC A2 2010 interna";


//  Id pregunta: 8597 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO usa JAVA como lenguaje?";
 choices[89]= new Array();
 choices[89][0] = "JavaScript";
 choices[89][1] = "JavaBeans";
 choices[89][2] = "Servlets";
 choices[89][3] = "JSP";
 answers[89] = choices[89][0];
 units[89] = "116";
 comments[89] = "Id Pregunta: 8597. Examen TIC A2 2010 interna";


//  Id pregunta: 8600 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[90]= new Array();
 choices[90][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Presidencia";
 choices[90][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Industria Turismo y Comercio";
 choices[90][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[90][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[90] = choices[90][0];
 units[90] = "43";
 comments[90] = "Id Pregunta: 8600. Examen TIC A2 2010 interna";


//  Id pregunta: 8655 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  &iquest;En qu&eacute; recomendaci&oacute;n del ITU-T se especifican las caracter&iacute;sticas de las fibras &oacute;pticas monomodo &quot;non-zero dispersion-shifted&quot; (NZDSF) habitualmente utilizadas en DWDM?:";
 choices[91]= new Array();
 choices[91][0] = "G.653";
 choices[91][1] = "G.654";
 choices[91][2] = "G.655";
 choices[91][3] = "G.656";
 answers[91] = choices[91][2];
 units[91] = "99";
 comments[91] = "Id Pregunta: 8655. Examen UPM A2 2011";


//  Id pregunta: 8658 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[92]= new Array();
 choices[92][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[92][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[92][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[92][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[92] = choices[92][3];
 units[92] = "99";
 comments[92] = "Id Pregunta: 8658. Examen UPM A2 2011";


//  Id pregunta: 8727 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[93]= new Array();
 choices[93][0] = "iSCSI";
 choices[93][1] = "sSCSI";
 choices[93][2] = "iFCP";
 choices[93][3] = "FCIP";
 answers[93] = choices[93][3];
 units[93] = "48";
 comments[93] = "Id Pregunta: 8727. Examen UPM A2 2011";


//  Id pregunta: 8824 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)   Seg&uacute;n el Real Decreto legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, &quot;toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n o fijaci&oacute;n&quot; es:";
 choices[94]= new Array();
 choices[94][0] = " Un algoritmo";
 choices[94][1] = "Un m&eacute;todo";
 choices[94][2] = "Un programa de ordenador ";
 choices[94][3] = "Un procedimiento";
 answers[94] = choices[94][2];
 units[94] = "36,37";
 comments[94] = "Id Pregunta: 8824. Examen UC3M 2010";


//  Id pregunta: 8863 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  Seg&uacute;n M&eacute;trica v.3, la desnormalizaci&oacute;n controlada del modelo f&iacute;sico de datos se aplica para:";
 choices[95]= new Array();
 choices[95][0] = "Reducir o simplificar el n&uacute;mero de accesos a la base de datos";
 choices[95][1] = "Proporcionar flexibilidad al modelo";
 choices[95][2] = "Hacer m&aacute;s r&aacute;pidas las actualizaciones";
 choices[95][3] = "Proporcionar independencia del sistema gestor de base de datos";
 answers[95] = choices[95][0];
 units[95] = "86";
 comments[95] = "Id Pregunta: 8863. Analista Ayto. Madrid 2010";


//  Id pregunta: 8908 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  La unidad Aritm&eacute;tico-L&oacute;gica (ALU):";
 choices[96]= new Array();
 choices[96][0] = "Contiene las instrucciones del programa.";
 choices[96][1] = "Contienen los datos de la aplicaci&oacute;n.";
 choices[96][2] = "Realiza las operaciones matem&aacute;ticas.";
 choices[96][3] = "Controla los dispositivos l&oacute;gicos a los que accede la CPU";
 answers[96] = choices[96][2];
 units[96] = "47";
 comments[96] = "Id Pregunta: 8908. Operador Ayto. Madrid 2010";


//  Id pregunta: 9017 Año de creación de pregunta: 2011-01-01
 questions[97]= "98)  En un sistema de transmisi&oacute;n digital &hellip;";
 choices[97]= new Array();
 choices[97][0] = "El ruido es acumulativo.";
 choices[97][1] = "Cada repetidor puede regenerar la se&ntilde;al.";
 choices[97][2] = "No tiene influencia el ruido.";
 choices[97][3] = "Ninguna de las anteriores";
 answers[97] = choices[97][1];
 units[97] = "99";
 comments[97] = "Id Pregunta: 9017. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9090 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[98]= new Array();
 choices[98][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[98][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[98][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[98][3] = "Todas las anteriores son falsas";
 answers[98] = choices[98][3];
 units[98] = "36";
 comments[98] = "Id Pregunta: 9090. ";


//  Id pregunta: 9093 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[99]= new Array();
 choices[99][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[99][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[99][2] = "Los derechos morales pertenecen al trabajador";
 choices[99][3] = "Los derechos morales pertenecen al empresario";
 answers[99] = choices[99][2];
 units[99] = "36";
 comments[99] = "Id Pregunta: 9093. ";


