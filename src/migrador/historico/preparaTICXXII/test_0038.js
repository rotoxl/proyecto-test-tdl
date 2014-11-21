/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 29 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las actuaciones siguientes corresponde a una auditor&iacute;a inform&aacute;tica?:";
 choices[0]= new Array();
 choices[0][0] = "Recomendar situaciones";
 choices[0][1] = "Planes estrat&eacute;gicos de seguridad";
 choices[0][2] = "Planes de aseguramiento de calidad";
 choices[0][3] = "Reorganizaci&oacute;n de los recursos humanos del departamento inform&aacute;tico";
 answers[0] = choices[0][0];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 29. ";


//  Id pregunta: 47 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes grupos de funciones corresponde a los de un sistema de informaci&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, tratamiento y distribuci&oacute;n";
 choices[1][1] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, codificaci&oacute;n y distribuci&oacute;n";
 choices[1][2] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, filtrado y distribuci&oacute;n";
 choices[1][3] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 47. ";


//  Id pregunta: 50 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes no es un organismo nacional para la formulaci&oacute;n de est&aacute;ndares?:";
 choices[2]= new Array();
 choices[2][0] = "ANSI";
 choices[2][1] = "JIS";
 choices[2][2] = "DIN";
 choices[2][3] = "CEN";
 answers[2] = choices[2][3];
 units[2] = "42";
 comments[2] = "Id Pregunta: 50. ";


//  Id pregunta: 122 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Desde el punto de vista de un auditor de seguridad indique cu&aacute;l de las siguientes premisas, sobre control interno de acceso l&oacute;gico, es inadecuada:";
 choices[3]= new Array();
 choices[3][0] = "El sistema debe obligar al usuario a cambiar de contrase&ntilde;a cada cierto tiempo";
 choices[3][1] = "El registro o log de acceso al sistema puede desactivarse a petici&oacute;n del responsable de seguridad";
 choices[3][2] = "Es conveniente que la autenticaci&oacute;n de entrada al sistema se haga una &uacute;nica vez";
 choices[3][3] = "El sistema debe rechazar el acceso a los usuarios despu&eacute;s de una serie de intentos fallidos";
 answers[3] = choices[3][1];
 units[3] = "31,32,33";
 comments[3] = "Id Pregunta: 122. ";


//  Id pregunta: 149 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  El m&eacute;todo Promethee:";
 choices[4]= new Array();
 choices[4][0] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no";
 choices[4][1] = "Su concepto central es de comparaci&oacute;n ternaria de alternativas";
 choices[4][2] = "Exige poca informaci&oacute;n por parte del decisor: evaluaciones ordinales y pesos cardinales";
 choices[4][3] = "Generaliza el m&eacute;todo de ponderaci&oacute;n lineal incorporando al posibilidad de valorar el riesgo";
 answers[4] = choices[4][0];
 units[4] = "34";
 comments[4] = "Id Pregunta: 149. ";


//  Id pregunta: 206 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  En el modelo de Donovan las organizaciones se clasifican en:";
 choices[5]= new Array();
 choices[5][0] = "Dinosaurio, gran hermano, mano vigilante, network, cluster";
 choices[5][1] = "Dinosaurio, gran hermano, perro vigilante, network, cluster";
 choices[5][2] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, network";
 choices[5][3] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, cluster";
 answers[5] = choices[5][2];
 units[5] = "22";
 comments[5] = "Id Pregunta: 206. donovan - nolan";


//  Id pregunta: 308 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  La gu&iacute;a de portabilidad de X/OPEN actualmente en vigor es:";
 choices[6]= new Array();
 choices[6][0] = "XGP3";
 choices[6][1] = "XGP4";
 choices[6][2] = "XGP5";
 choices[6][3] = "Todas las respuestas anteriores son correctas";
 answers[6] = choices[6][1];
 units[6] = "40";
 comments[6] = "Id Pregunta: 308. XPG";


//  Id pregunta: 329 Año de creación de pregunta: 2009-01-01
 questions[7]= "8)  Las medidas de seguridad b&aacute;sicas para datos automatizados de car&aacute;cter personal:";
 choices[7]= new Array();
 choices[7][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[7][1] = "La responsabilidad de los registros de acceso est&aacute; bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro est&aacute; activo y que no haya saltos temporales.";
 choices[7][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[7][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos";
 answers[7] = choices[7][2];
 units[7] = "29";
 comments[7] = "Id Pregunta: 329. ";


//  Id pregunta: 331 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  De acuerdo al RDL 1/1996, la protecci&oacute;n de los programas de ordenador:";
 choices[8]= new Array();
 choices[8][0] = "Cuando el autor sea una persona natural, para el caso m&aacute;s general, los derechos de explotaci&oacute;n durar&aacute;n toda su vida, y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[8][1] = "Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n ser&aacute; de 70 a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[8][2] = "a y b son correctas";
 choices[8][3] = "a y b son incorrectas";
 answers[8] = choices[8][2];
 units[8] = "37";
 comments[8] = "Id Pregunta: 331. ";


//  Id pregunta: 381 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  MAGERIT:";
 choices[9]= new Array();
 choices[9][0] = "Es una metodolog&iacute;a de an&aacute;lisis de riesgos";
 choices[9][1] = "Es una metodolog&iacute;a de gesti&oacute;n de riesgos";
 choices[9][2] = "Es una metodolog&iacute;a de gesti&oacute;n de proyectos";
 choices[9][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[9] = choices[9][3];
 units[9] = "33";
 comments[9] = "Id Pregunta: 381. ";


//  Id pregunta: 489 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Una de las siguientes organizaciones de estandarizaci&oacute;n no ha desarrollado el est&aacute;ndar mencionado.  &iquest;Cu&aacute;l es?:";
 choices[10]= new Array();
 choices[10][0] = "ANSI - FDDI";
 choices[10][1] = "IEEE- TCP/IP";
 choices[10][2] = "ITU-T - X.25";
 choices[10][3] = "EIA  - RS-232";
 answers[10] = choices[10][1];
 units[10] = "42";
 comments[10] = "Id Pregunta: 489. ";


//  Id pregunta: 546 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  Los tipos de dise&ntilde;o de las organizaciones m&aacute;s extendidos son los siguientes:";
 choices[11]= new Array();
 choices[11][0] = "Apuntado, plano, basado en la l&iacute;nea y de estructura mixta.";
 choices[11][1] = "Apuntado, plano, basado en la l&iacute;nea y con orientaci&oacute;n a staff.";
 choices[11][2] = "Apuntado, plano, jer&aacute;nquico y reticular";
 choices[11][3] = "Apuntado, plano, sectorial y con orientaci&oacute;n a staff.";
 answers[11] = choices[11][1];
 units[11] = "26";
 comments[11] = "Id Pregunta: 546. ";


//  Id pregunta: 740 Año de creación de pregunta: 2004-01-01
 questions[12]= "13)  En inteligencia artificial, los marcos";
 choices[12]= new Array();
 choices[12][0] = "Internamente est&aacute;n formados por ranuras, cada una de las cuales representa una caracter&iacute;stica del marco";
 choices[12][1] = "Requieren de un proceso de entrenamiento previo, al igual que las redes neuronales.";
 choices[12][2] = "Utiliza como estrategias de inferencia en el proceso deductivo las estrategias en X, Y y Z";
 choices[12][3] = "Se representan mediante nodos y arcos";
 answers[12] = choices[12][0];
 units[12] = "64";
 comments[12] = "Id Pregunta: 740. Similar a examen TIC SS A 2003";


//  Id pregunta: 753 Año de creación de pregunta: 2004-01-01
 questions[13]= "14)  Un ejemplo de herramienta Open Source de administraci&oacute;n remota de sistemas Unix/Linux es:";
 choices[13]= new Array();
 choices[13][0] = "WebMin";
 choices[13][1] = "WMI (Web Management &amp; Instrumentation)";
 choices[13][2] = "syslog";
 choices[13][3] = "Performance Monitor";
 answers[13] = choices[13][0];
 units[13] = "53,61,62";
 comments[13] = "Id Pregunta: 753. ";


//  Id pregunta: 855 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes proposiciones es falsa respecto de WML?:";
 choices[14]= new Array();
 choices[14][0] = "El significado de las siglas WML es Wireless Mask Language";
 choices[14][1] = "El lenguaje WML est&aacute; basado en el est&aacute;ndar XML";
 choices[14][2] = "La DTD puede estar en la red o puede almacenarse localmente";
 choices[14][3] = "El lenguaje WML no s&oacute;lo permite texto sino que tambi&eacute;n permite im&aacute;genes";
 answers[14] = choices[14][0];
 units[14] = "69";
 comments[14] = "Id Pregunta: 855. ";


//  Id pregunta: 954 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Comparando los conceptos de Groupware y CSCW (Computer Supported Cooperative Work):";
 choices[15]= new Array();
 choices[15][0] = "Groupware se refiere m&aacute;s a aspectos sociol&oacute;gicos y psicol&oacute;gicos";
 choices[15][1] = "CSCW aborda la tem&aacute;tica desde una perspectiva mucho m&aacute;s concreta y espec&iacute;fica";
 choices[15][2] = "Groupware se centra en las connotaciones tecnol&oacute;gicas, en aplicaciones concretas y en actividades grupales";
 choices[15][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[15] = choices[15][2];
 units[15] = "71";
 comments[15] = "Id Pregunta: 954. ";


//  Id pregunta: 961 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Considerando la orientaci&oacute;n l&oacute;gica en inteligencia artificial:";
 choices[16]= new Array();
 choices[16][0] = "La definici&oacute;n matem&aacute;tica de los mecanismos mediante los cuales ser&aacute; posible deducir f&oacute;rmulas a partir de otras es independiente de que se haya formalizado o no la estructura de las frases";
 choices[16][1] = "El sistema de Kleene, como ejemplo de sistema formal y de la teor&iacute;a de la demostraci&oacute;n, pertenece a la orientaci&oacute;n heur&iacute;stica y no a la orientaci&oacute;n l&oacute;gica";
 choices[16][2] = "La forma de representar las estructuras deductivas tiene dos l&iacute;neas principales: la de los sistemas formales y la de la sem&aacute;ntica";
 choices[16][3] = "Las soluciones de los Sistemas de Kleene est&aacute;n basadas en las formalizaciones del c&aacute;lculo proposicional y del c&aacute;lculo de predicados";
 answers[16] = choices[16][2];
 units[16] = "63";
 comments[16] = "Id Pregunta: 961. ";


//  Id pregunta: 1049 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  El registro de estados de un procesador:";
 choices[17]= new Array();
 choices[17][0] = "Se almacena en la memoria principal del procesador";
 choices[17][1] = "Almacena en cada momento el estado del procesador";
 choices[17][2] = "Sirve para almacenar las condiciones de realizaci&oacute;n de las operaciones de la ALU";
 choices[17][3] = "Los procesadores actuales no tienen registro de estados";
 answers[17] = choices[17][2];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1049. ";


//  Id pregunta: 1270 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los applets de Java se ejecutan en el:";
 choices[18]= new Array();
 choices[18][0] = "Servidor web";
 choices[18][1] = "Cliente web";
 choices[18][2] = "Servidor de base de datos";
 choices[18][3] = "Servidor de webmail";
 answers[18] = choices[18][1];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1270. ";


//  Id pregunta: 1306 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[19]= new Array();
 choices[19][0] = "Controles Java";
 choices[19][1] = "Applets";
 choices[19][2] = "Servlets";
 choices[19][3] = "Aplicaciones CGI";
 answers[19] = choices[19][1];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1306. ";


//  Id pregunta: 1531 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  El Real Decreto 209/2003:";
 choices[20]= new Array();
 choices[20][0] = "Modifica  la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[20][1] = "Modifica  la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica y regula los registros y las notificaciones telem&aacute;ticas";
 choices[20][2] = "Regula los registros y las notificaciones telem&aacute;ticas y modifica la ley 59/2003";
 choices[20][3] = "Todas las anteriores son ciertas";
 answers[20] = choices[20][1];
 units[20] = "30";
 comments[20] = "Id Pregunta: 1531. ";


//  Id pregunta: 1534 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest; Cu&aacute;l de los siguientes no es un SGBD del tipo open source ?";
 choices[21]= new Array();
 choices[21][0] = "MySql";
 choices[21][1] = "PostgreSQL";
 choices[21][2] = "SQLite";
 choices[21][3] = "Zope";
 answers[21] = choices[21][3];
 units[21] = "61,62";
 comments[21] = "Id Pregunta: 1534. ";


//  Id pregunta: 1642 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[22]= new Array();
 choices[22][0] = "Leer ficheros locales";
 choices[22][1] = "Cargar librer&iacute;as nativas";
 choices[22][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[22][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[22] = choices[22][2];
 units[22] = "60";
 comments[22] = "Id Pregunta: 1642. ";


//  Id pregunta: 1773 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;C&oacute;mo se llama la versi&oacute;n en software libre de la plataforma .Net?";
 choices[23]= new Array();
 choices[23][0] = ".DOT";
 choices[23][1] = ".free";
 choices[23][2] = "Mono";
 choices[23][3] = "Gambas";
 answers[23] = choices[23][2];
 units[23] = "61,62";
 comments[23] = "Id Pregunta: 1773. ";


//  Id pregunta: 1982 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l no es una decisi&oacute;n que deba tomar una organizaci&oacute;n para establecer su planificaci&oacute;n estrat&eacute;gica?:";
 choices[24]= new Array();
 choices[24][0] = "Determinar el personal y recursos necesarios para desarrollar los proyectos";
 choices[24][1] = "Establecimiento de los objetivos y metas principales";
 choices[24][2] = "Definici&oacute;n del marco econ&oacute;mico presupuestario y del &aacute;mbito de actuaci&oacute;n de la organizaci&oacute;n";
 choices[24][3] = "Formulaci&oacute;n de los diferentes programas y proyectos orientados a conseguir los objetivos";
 answers[24] = choices[24][0];
 units[24] = "77";
 comments[24] = "Id Pregunta: 1982. ";


//  Id pregunta: 2126 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[25]= new Array();
 choices[25][0] = "M&Eacute;TRICA Versi&oacute;n 3 contempla s&oacute;lo desarrollos orientados a objetos";
 choices[25][1] = "El grupo encargado del Aseguramiento de la calidad debe ser independiente del equipo de desarrollo";
 choices[25][2] = "En M&Eacute;TRICA Versi&oacute;n 3 el mantenimiento es s&oacute;lo correctivo y adaptativo";
 choices[25][3] = "El particionamiento f&iacute;sico del sistema de informaci&oacute;n se lleva a cabo en el An&aacute;lisis del sistema de informaci&oacute;n";
 answers[25] = choices[25][1];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2126. ";


//  Id pregunta: 2128 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo EFQM?:";
 choices[26]= new Array();
 choices[26][0] = "El modelo clasifica los 9 elementos en agentes y resultados";
 choices[26][1] = "La satisfacci&oacute;n del personal es uno de los agentes";
 choices[26][2] = "Los resultados econ&oacute;micos se encuentran entre los resultados";
 choices[26][3] = "La gesti&oacute;n de personal es uno de los agentes";
 answers[26] = choices[26][1];
 units[26] = "92";
 comments[26] = "Id Pregunta: 2128. ";


//  Id pregunta: 2338 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[27]= new Array();
 choices[27][0] = "Uno-a-muchos";
 choices[27][1] = "Binaria";
 choices[27][2] = "Muchos-a-muchos";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][0];
 units[27] = "57,58,80";
 comments[27] = "Id Pregunta: 2338. ";


//  Id pregunta: 2462 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)   En programaci&oacute;n orientada a objetos, los objetos act&uacute;an en respuesta a los mensajes que reciben. El mismo mensaje puede originar conductas completamente diferentes al ser recibido por diferentes objetos. Este fen&oacute;meno se conoce como:";
 choices[28]= new Array();
 choices[28][0] = "Herencia";
 choices[28][1] = "Encapsulaci&oacute;n";
 choices[28][2] = "Abstracci&oacute;n";
 choices[28][3] = "Polimorfismo";
 answers[28] = choices[28][3];
 units[28] = "82";
 comments[28] = "Id Pregunta: 2462. ";


//  Id pregunta: 2646 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[29]= new Array();
 choices[29][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[29][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[29][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[29][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[29] = choices[29][2];
 units[29] = "58,80";
 comments[29] = "Id Pregunta: 2646. ";


//  Id pregunta: 2664 Año de creación de pregunta: 2003-01-01
 questions[30]= "31)  El nivel l&eacute;xico-sint&aacute;ctico:";
 choices[30]= new Array();
 choices[30][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[30][1] = "Llega a la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, as&iacute; como del contexto en el que discurre el di&aacute;l";
 choices[30][2] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras.";
 choices[30][3] = "Extrae los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos.";
 answers[30] = choices[30][3];
 units[30] = "94";
 comments[30] = "Id Pregunta: 2664. ";


//  Id pregunta: 2687 Año de creación de pregunta: 2003-01-01
 questions[31]= "32)  Los procesos de tratamiento digital de imagen deber&iacute;an llevarse a cabo entre:";
 choices[31]= new Array();
 choices[31][0] = "25 &micro;m y 100 &micro;m.";
 choices[31][1] = "0,4 &micro;m y 0,7 &micro;m.";
 choices[31][2] = "0,3 &micro;m y 1 mm.";
 choices[31][3] = "Ninguna de las anteriores.";
 answers[31] = choices[31][0];
 units[31] = "93";
 comments[31] = "Id Pregunta: 2687. ";


//  Id pregunta: 2747 Año de creación de pregunta: 2006-01-01
 questions[32]= "33)  La direcci&oacute;n de los flujos entre almac&eacute;n y proceso en un DFD (Diagrama de Flujos de Datos) puede ser:";
 choices[32]= new Array();
 choices[32][0] = "De consulta";
 choices[32][1] = "De actualizaci&oacute;n";
 choices[32][2] = "De di&aacute;logo";
 choices[32][3] = "Todas las anteriores";
 answers[32] = choices[32][3];
 units[32] = "81";
 comments[32] = "Id Pregunta: 2747. ";


//  Id pregunta: 2814 Año de creación de pregunta: 2006-01-01
 questions[33]= "34)  En el modelo EFQM la suma de puntuaci&oacute;n m&aacute;xima de todos los criterios es 1000. &iquest;C&uacute;al de los siguientes criterios da m&aacute;s puntuaci&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "Impacto social";
 choices[33][1] = "Resultado global del negocio";
 choices[33][2] = "Satisfacci&oacute;n de los clientes";
 choices[33][3] = "Procesos";
 answers[33] = choices[33][2];
 units[33] = "88";
 comments[33] = "Id Pregunta: 2814. ";


//  Id pregunta: 2840 Año de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;En el modelo EFQM qu&eacute; porcentaje se da al liderazgo?";
 choices[34]= new Array();
 choices[34][0] = "15";
 choices[34][1] = "10";
 choices[34][2] = "20";
 choices[34][3] = "9";
 answers[34] = choices[34][1];
 units[34] = "92";
 comments[34] = "Id Pregunta: 2840. ";


//  Id pregunta: 3277 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;Qu&eacute; ancho de banda tiene un acceso b&aacute;sico de RDSI en Europa?:";
 choices[35]= new Array();
 choices[35][0] = "64 kbps";
 choices[35][1] = "144 kbps";
 choices[35][2] = "128 kbps";
 choices[35][3] = "2048 kbps";
 answers[35] = choices[35][1];
 units[35] = "103";
 comments[35] = "Id Pregunta: 3277. ";


//  Id pregunta: 3325 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[36]= new Array();
 choices[36][0] = "registro de incidencias";
 choices[36][1] = "fichero de log";
 choices[36][2] = "lista de errores";
 choices[36][3] = "fichero de registros";
 answers[36] = choices[36][1];
 units[36] = "113";
 comments[36] = "Id Pregunta: 3325. ";


//  Id pregunta: 3441 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  El protocolo ARP:";
 choices[37]= new Array();
 choices[37][0] = "S&oacute;lo funciona si hay un proxy configurado";
 choices[37][1] = "Permite relacionar puertos TCP y direcciones IP";
 choices[37][2] = "Permite relacionar puertos TCP  y direcciones MAC";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][3];
 units[37] = "100,102";
 comments[37] = "Id Pregunta: 3441. ";


//  Id pregunta: 3599 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  La direcci&oacute;n loopback en IPv6 es:";
 choices[38]= new Array();
 choices[38][0] = "0:0:0:0:0:0:0:1";
 choices[38][1] = "0:0:0:0:0:0:0:0";
 choices[38][2] = "FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:";
 choices[38][3] = "F:F:F:F:F:F:F:F";
 answers[38] = choices[38][0];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3599. ";


//  Id pregunta: 3768 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Para una red de conmutaci&oacute;n de circuitos, &iquest;qu&eacute; tipo de encaminamiento no utilizar&iacute;a?:";
 choices[39]= new Array();
 choices[39][0] = "Encaminamiento fijo";
 choices[39][1] = "Encaminamiento aleatorio";
 choices[39][2] = "Encaminamiento adaptativo";
 choices[39][3] = "Encaminamiento por inundaci&oacute;n";
 answers[39] = choices[39][3];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3768. ";


//  Id pregunta: 3855 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  Dentro de las Frecuencias de sat&eacute;lite de uso comercial  se encuentra la banda Ku(BSS) que tiene como aplicaci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Datos y TV a altas velocidades ";
 choices[40][1] = "Radiodifusi&oacute;n de televisi&oacute;n por sat&eacute;lite.";
 choices[40][2] = "VSAT, video e Internet ";
 choices[40][3] = "Datos, voz y video ";
 answers[40] = choices[40][1];
 units[40] = "108";
 comments[40] = "Id Pregunta: 3855. ";


//  Id pregunta: 3869 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;C&uacute;al de las siguientes afirmaciones sobre el virus Blaster es correcta?";
 choices[41]= new Array();
 choices[41][0] = "Es un gusano que inspecciona la agenda de direcciones y env&iacute;a un mensaje replicado a todas ellas";
 choices[41][1] = "Es un gusano que usa una vulnerabilidad de Windows por la que el atacante puede tener permisos de ejecuci&oacute;n locales";
 choices[41][2] = "Es un gusano que se propaga a trav&eacute;s del correo electr&oacute;nico en un mensaje escrito en ingl&eacute;s de caracter&iacute;sticas variables, as&iacute; como a trav&eacute;s de los programas de intercambio de ficheros punto a punto ";
 choices[41][3] = "Es un gusano que busca en todas las unidades de disco direcciones de correo electr&oacute;nico y se autoenv&iacute;a a ellas utilizando su propio motor SMTP";
 answers[41] = choices[41][1];
 units[41] = "111";
 comments[41] = "Id Pregunta: 3869. ";


//  Id pregunta: 3991 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Respecto a los protocolos de routing:";
 choices[42]= new Array();
 choices[42][0] = "El protocolo de vector distancia es de routing interno (Interior Gateway Protocol).";
 choices[42][1] = "El IS-IS es utilizado como est&aacute;ndar de Internet.";
 choices[42][2] = "OSPF utiliza &aacute;reas dentro de un sistema aut&oacute;nomo, creando jerarqu&iacute;as.";
 choices[42][3] = "Todas son falsas";
 answers[42] = choices[42][0];
 units[42] = "102";
 comments[42] = "Id Pregunta: 3991. ";


//  Id pregunta: 4114 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Sobre los buscadores en Internet se&ntilde;ale la respuesta correcta:";
 choices[43]= new Array();
 choices[43][0] = "Los buscadores de &iacute;ndices tem&aacute;ticos son sistemas de b&uacute;squeda que incorporan autom&aacute;ticamente p&aacute;ginas web clasificadas por temas.";
 choices[43][1] = "Los motores de b&uacute;squeda utilizan &ldquo;robots&rdquo; de b&uacute;squeda para incluir las p&aacute;ginas web.";
 choices[43][2] = "a) y b) son falsas";
 choices[43][3] = "a) y b) son verdaderas";
 answers[43] = choices[43][1];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4114. ";


//  Id pregunta: 4128 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[44]= new Array();
 choices[44][0] = "XML";
 choices[44][1] = "Xerces";
 choices[44][2] = "UDDI";
 choices[44][3] = "WSDL";
 answers[44] = choices[44][3];
 units[44] = "112,51";
 comments[44] = "Id Pregunta: 4128. ";


//  Id pregunta: 4139 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  La transmisi&oacute;n de datos a trav&eacute;s de la red p&uacute;blica de forma que los nodos de enrutado no sean conscientes de que la transmisi&oacute;n es parte de una red privada se llama";
 choices[45]= new Array();
 choices[45][0] = "Tunel";
 choices[45][1] = "Red Privada Virtual (VPN)";
 choices[45][2] = "IPSec";
 choices[45][3] = "SSL";
 answers[45] = choices[45][0];
 units[45] = "111";
 comments[45] = "Id Pregunta: 4139. ";


//  Id pregunta: 4171 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  &iquest;C&oacute;mo evita SSL un ataque de &quot;hombre en el medio&quot;?";
 choices[46]= new Array();
 choices[46][0] = "Usa certificados para autenticar la clave p&uacute;blica del servidor";
 choices[46][1] = "Usa un valor aleatorio &uacute;nico por conexi&oacute;n en el protocolo de intercambio de credenciales";
 choices[46][2] = "Usa claves de 128 bits";
 choices[46][3] = "Cada mensaje enviado incluye un n&uacute;mero de secuencia";
 answers[46] = choices[46][1];
 units[46] = "70";
 comments[46] = "Id Pregunta: 4171. ";


//  Id pregunta: 4193 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  La herramienta MRTG";
 choices[47]= new Array();
 choices[47][0] = "Puede generar gr&aacute;ficas de cantidad de tr&aacute;fico";
 choices[47][1] = "Utiliza SNMP";
 choices[47][2] = "Es una herramienta gratuita";
 choices[47][3] = "todas las anteriores";
 answers[47] = choices[47][3];
 units[47] = "104";
 comments[47] = "Id Pregunta: 4193. ";


//  Id pregunta: 4201 Año de creación de pregunta: 2006-01-01
 questions[48]= "49)  Un modem RDSI";
 choices[48]= new Array();
 choices[48][0] = "Es un dispositivo utilizado para conectar un Interfaz B&aacute;sico a otros interfaces";
 choices[48][1] = "Permite la transmisi&oacute;n de datos sobre uno o dos canales B";
 choices[48][2] = "Es un t&eacute;rmino incorrecto";
 choices[48][3] = "Tiene un SPID  (n&uacute;mero de l&iacute;nea) propio";
 answers[48] = choices[48][2];
 units[48] = "103";
 comments[48] = "Id Pregunta: 4201. ";


//  Id pregunta: 4209 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  El protocolo utilizado para acceder a Internet desde cualquier dispositivo inal&aacute;mbrico haciendo uso del lenguaje WML (Wireless Markup Language) es:";
 choices[49]= new Array();
 choices[49][0] = "WEP";
 choices[49][1] = "WPA";
 choices[49][2] = "WAP";
 choices[49][3] = "WTP";
 answers[49] = choices[49][2];
 units[49] = "108";
 comments[49] = "Id Pregunta: 4209. ";


//  Id pregunta: 4211 Año de creación de pregunta: 2006-01-01
 questions[50]= "51)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo  .NET";
 choices[50]= new Array();
 choices[50][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[50][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[50][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[50][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[50] = choices[50][1];
 units[50] = "59,115";
 comments[50] = "Id Pregunta: 4211. ";


//  Id pregunta: 4251 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  Respecto a la iniciativa i2010 de la Comisi&oacute;n Europea:";
 choices[51]= new Array();
 choices[51][0] = "La iniciativa nace en el a&ntilde;o 2005, como respuesta a la revisi&oacute;n de la estrategia de Lisboa para el crecimiento y el empleo.";
 choices[51][1] = "Una de las tres prioridades que se plantea es &ldquo;el refuerzo de la innovaci&oacute;n y la inversi&oacute;n en la investigaci&oacute;n sobre las TIC con el fin de fomentar el crecimiento y la creaci&oacute;n de m&aacute;s empleos y de m&aacute;s de calidad&rdquo;";
 choices[51][2] = "La tercera prioridad de la Comisi&oacute;n consiste en &ldquo;el logro de una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que fomenta el crecimiento y el empleo de una manera coherente con el desarrollo sostenible y que da la prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida&rdquo;.";
 choices[51][3] = "Todas las anteriores son ciertas";
 answers[51] = choices[51][3];
 units[51] = "30";
 comments[51] = "Id Pregunta: 4251. Esta pregunta es antigua, pero nunca se sabe. M&aacute;s informaci&oacute;n en: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 4298 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  La adopci&oacute;n de m&eacute;todos formales de especificaci&oacute;n de requisitos:";
 choices[52]= new Array();
 choices[52][0] = "Permite reducir el coste de desarrollo desde el inicio de su adopci&oacute;n en la organizaci&oacute;n.";
 choices[52][1] = "No debe combinarse con los m&eacute;todos convencionales de desarrollo.";
 choices[52][2] = "Aconseja adjuntar comentarios en lenguaje natural a las especificaciones formales";
 choices[52][3] = "Supone una garant&iacute;a de correcci&oacute;n del sistema final.";
 answers[52] = choices[52][2];
 units[52] = "78";
 comments[52] = "Id Pregunta: 4298. ";


//  Id pregunta: 4307 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes opciones no es una heur&iacute;stica de dise&ntilde;o aplicable a los Diagramas de Estructura preliminares?:";
 choices[53]= new Array();
 choices[53][0] = "Aislar el centro de transformaci&oacute;n especificando los l&iacute;mites del flujo de entrada y salida.";
 choices[53][1] = "No utilizar variables globales.";
 choices[53][2] = "Optimizar los grados de entrada y salida de los m&oacute;dulos.";
 choices[53][3] = "No dejar que un dato se obtenga en un m&oacute;dulo lejano al m&oacute;dulo donde se utiliza.";
 answers[53] = choices[53][0];
 units[53] = "81";
 comments[53] = "Id Pregunta: 4307. ";


//  Id pregunta: 4372 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  Una caracter&iacute;stica distintiva del modelo de ciclo de vida en espiral respecto a los modelos cl&aacute;sicos de ciclo de vida es la inclusi&oacute;n en el primero de actividades de:";
 choices[54]= new Array();
 choices[54][0] = "Codificaci&oacute;n.";
 choices[54][1] = "Mantenimiento";
 choices[54][2] = "An&aacute;lisis de riesgo.";
 choices[54][3] = "Dise&ntilde;o.";
 answers[54] = choices[54][2];
 units[54] = "76";
 comments[54] = "Id Pregunta: 4372. ";


//  Id pregunta: 4423 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  En relaci&oacute;n con la Ley 59/2003, de firma electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[55]= new Array();
 choices[55][0] = "El prestador de servicios de certificaci&oacute;n ha de ser una persona jur&iacute;dica.";
 choices[55][1] = "Por resoluci&oacute;n administrativa puede suspenderse, pero no extinguirse, la vigencia de los certificados electr&oacute;nicos.";
 choices[55][2] = "Los certificados reconocidos deben incluir necesariamente, entre otros datos, la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que expide el certificado.";
 choices[55][3] = "El DNI electr&oacute;nico acredita electr&oacute;nicamente la identidad personal de su titular, pero no permite la firma electr&oacute;nica de documentos.";
 answers[55] = choices[55][2];
 units[55] = "30";
 comments[55] = "Id Pregunta: 4423. ";


//  Id pregunta: 4446 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  Seg&uacute;n la norma 150/17799, el aseguramiento de que los usuarios autorizados tienen  acceso cuando lo requieran a la informaci&oacute;n y sus activos asociados, es el concepto de:";
 choices[56]= new Array();
 choices[56][0] = "Seguridad.";
 choices[56][1] = "Integridad.";
 choices[56][2] = "Disponibilidad.";
 choices[56][3] = "Confidencialidad.";
 answers[56] = choices[56][2];
 units[56] = "33";
 comments[56] = "Id Pregunta: 4446. ";


//  Id pregunta: 4458 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  La cl&aacute;usula select en SQL se corresponde a:";
 choices[57]= new Array();
 choices[57][0] = "La operaci&oacute;n de proyecci&oacute;n en el &aacute;lgebra relacional.";
 choices[57][1] = "La operaci&oacute;n de uni&oacute;n en el &aacute;lgebra relacional.";
 choices[57][2] = "La operaci&oacute;n de evaluaci&oacute;n en el &aacute;lgebra relacional.";
 choices[57][3] = "La operaci&oacute;n de agregaci&oacute;n en el &aacute;lgebra relacional.";
 answers[57] = choices[57][0];
 units[57] = "58";
 comments[57] = "Id Pregunta: 4458. ";


//  Id pregunta: 4562 Año de creación de pregunta: 2007-01-01
 questions[58]= "59)  En el contexto de Normas UNE, las siglas UNE significan";
 choices[58]= new Array();
 choices[58][0] = "Unidad de Normalizaci&oacute;n Espa&ntilde;ola";
 choices[58][1] = "Uni&oacute;n de Normas Espa&ntilde;olas";
 choices[58][2] = "Una Norma Espa&ntilde;ola";
 choices[58][3] = "Usuarios de Normas Espa&ntilde;olas";
 answers[58] = choices[58][2];
 units[58] = "42";
 comments[58] = "Id Pregunta: 4562. ";


//  Id pregunta: 4609 Año de creación de pregunta: 2007-01-01
 questions[59]= "60)  Indicar en cual de los siguientes niveles CMM se define como &aacute;rea clave de proceso Ia gesti&oacute;n de configuraci&oacute;n de software";
 choices[59]= new Array();
 choices[59][0] = "repetible";
 choices[59][1] = "definido";
 choices[59][2] = "gestionado";
 choices[59][3] = "optimizado";
 answers[59] = choices[59][0];
 units[59] = "98";
 comments[59] = "Id Pregunta: 4609. ";


//  Id pregunta: 4730 Año de creación de pregunta: 2007-01-01
 questions[60]= "61)   Cual de las siguientes tecnolog&iacute;as no sirve para la implementaci&oacute;n de redes privadas virtuales:";
 choices[60]= new Array();
 choices[60][0] = "SSH";
 choices[60][1] = "SLIP";
 choices[60][2] = "IPSEC";
 choices[60][3] = "SSL/TLS";
 answers[60] = choices[60][1];
 units[60] = "100";
 comments[60] = "Id Pregunta: 4730. Examen 2006 JCYL";


//  Id pregunta: 4852 Año de creación de pregunta: 2007-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes productos NO es resultado del proceso &quot;Implantaci&oacute;n y Aceptaci&oacute;n del Sistema&quot; (IAS) de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[61]= new Array();
 choices[61][0] = "Evaluaci&oacute;n del Resultado de las Pruebas de Integraci&oacute;n";
 choices[61][1] = "Evaluaci&oacute;n del Resultado de las Pruebas de Implantaci&oacute;n";
 choices[61][2] = "Acuerdo de Nivel de Servicio";
 choices[61][3] = "Plan de Mantenimiento";
 answers[61] = choices[61][0];
 units[61] = "86";
 comments[61] = "Id Pregunta: 4852. ";


//  Id pregunta: 5035 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  Indique cu&aacute;l de las siguientes recomendaciones pertenece a las realizadas por el UIT-T:";
 choices[62]= new Array();
 choices[62][0] = "Serie X &ndash; orientadas a la transmisi&oacute;n de datos en redes anal&oacute;gicas telef&oacute;nicas.";
 choices[62][1] = "Serie V &ndash; orientadas a redes de datos y comunicaciones en sistemas abiertos";
 choices[62][2] = "Serie D &ndash; orientadas a la transmisi&oacute;n de documentos";
 choices[62][3] = "Serie I &ndash; red digital de servicios integrados";
 answers[62] = choices[62][3];
 units[62] = "99";
 comments[62] = "Id Pregunta: 5035. Examen TIC A 2007";


//  Id pregunta: 5181 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes opciones no es una metodolog&iacute;a estructurada orientada a procesos?";
 choices[63]= new Array();
 choices[63][0] = "DeMarco";
 choices[63][1] = "Gane &amp; Sarson";
 choices[63][2] = "Yourdon / Constantine";
 choices[63][3] = "Warnier-Orr";
 answers[63] = choices[63][3];
 units[63] = "79";
 comments[63] = "Id Pregunta: 5181. ";


//  Id pregunta: 5241 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  Respecto al an&aacute;lisis D.A.F.O indique la opci&oacute;n incorrecta ";
 choices[64]= new Array();
 choices[64][0] = "Herramienta estrat&eacute;gica por excelencia cuyo objetivo es conocer la situaci&oacute;n real de una organizaci&oacute;n, as&iacute; como los riesgos y oportunidades que le brinda el mercado";
 choices[64][1] = "Tambi&eacute;n llamado Matriz TOWS en terminolog&iacute;a anglosajona";
 choices[64][2] = "Las amenazas y oportunidades corresponden al entorno interno de la organizaci&oacute;n, debiendo &eacute;sta a aprovecharlas o superarlas, anticip&aacute;ndose a las mismas";
 choices[64][3] = "Las fortalezas suponen ventaja competitiva que pueden servir para explotar oportunidades";
 answers[64] = choices[64][2];
 units[64] = "77";
 comments[64] = "Id Pregunta: 5241. ";


//  Id pregunta: 5274 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  Un est&aacute;ndar para tarjeta inteligente sin contacto que haya de poder comunicarse con dispositivos a una distancia mayor de 50 cm es ";
 choices[65]= new Array();
 choices[65][0] = "ISO 15693";
 choices[65][1] = "ISO 10536";
 choices[65][2] = "ISO 14443";
 choices[65][3] = "ISO 9001";
 answers[65] = choices[65][0];
 units[65] = "74";
 comments[65] = "Id Pregunta: 5274. ";


//  Id pregunta: 5580 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  &iquest;Qu&eacute; es el blended learning?";
 choices[66]= new Array();
 choices[66][0] = "Un modelo de referencia del e-learning";
 choices[66][1] = "Una modalidad de e-learning que incluye ense&ntilde;anza presencial";
 choices[66][2] = "Una inciativa para estandarizar el e-learning";
 choices[66][3] = "Una clase de ense&ntilde;anza virtual";
 answers[66] = choices[66][1];
 units[66] = "66";
 comments[66] = "Id Pregunta: 5580. ";


//  Id pregunta: 5727 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos NO sirve para seleccionar la p&aacute;gina a descargar tras un fallo de p&aacute;gina?";
 choices[67]= new Array();
 choices[67][0] = "FIFO";
 choices[67][1] = "Aleatoria";
 choices[67][2] = "SJF";
 choices[67][3] = "NRU";
 answers[67] = choices[67][2];
 units[67] = "52";
 comments[67] = "Id Pregunta: 5727. ";


//  Id pregunta: 5780 Año de creación de pregunta: 2009-01-01
 questions[68]= "69)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[68]= new Array();
 choices[68][0] = "CLS";
 choices[68][1] = "MSIL";
 choices[68][2] = "Bytecode";
 choices[68][3] = "JIT";
 answers[68] = choices[68][0];
 units[68] = "59";
 comments[68] = "Id Pregunta: 5780. MAP 2008 A2";


//  Id pregunta: 5828 Año de creación de pregunta: 2009-01-01
 questions[69]= "70)  Con respecto a la tecnolog&iacute;a conocida como &quot;SONET&quot; (terminolog&iacute;a de EEUU) &oacute; SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[69]= new Array();
 choices[69][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplos de una se&ntilde;al base de 155 Mbps denominada STM-1";
 choices[69][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia";
 choices[69][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[69][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace &oacute; nodo de la red";
 answers[69] = choices[69][1];
 units[69] = "109";
 comments[69] = "Id Pregunta: 5828. MAP 2008 A1";


//  Id pregunta: 5869 Año de creación de pregunta: 2009-01-01
 questions[70]= "71)  Las p&aacute;ginas de internet de las administraciones p&uacute;blicas o con financiaci&oacute;n p&uacute;blica existentes a la entrada en vigor del RD 1494/2007 por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as de la informaci&oacute;n, deben adaptarse a la norma:";
 choices[70]= new Array();
 choices[70][0] = "Tres meses desde la entrada en vigor del RD.";
 choices[70][1] = "Seis meses desde la entrada en vigor del RD.";
 choices[70][2] = "El d&iacute;a de entrada en vigor del RD.";
 choices[70][3] = "Antes del 31 de diciembre de 2008";
 answers[70] = choices[70][1];
 units[70] = "39";
 comments[70] = "Id Pregunta: 5869. MAP 2008 A1";


//  Id pregunta: 5904 Año de creación de pregunta: 2009-01-01
 questions[71]= "72)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[71]= new Array();
 choices[71][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n";
 choices[71][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n";
 choices[71][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n";
 choices[71][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n";
 answers[71] = choices[71][1];
 units[71] = "87";
 comments[71] = "Id Pregunta: 5904. MAP 2008 A1";


//  Id pregunta: 5987 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  De acuerdo con la normativa vigente en materia de protecci&oacute;n jur&iacute;dica de los programas de ordenador, &iquest;durante cu&aacute;nto tiempoestar&aacute;n protegidos los derechos de explotaci&oacute;n de un manual de uso de un programa obra de una persona natural?";
 choices[72]= new Array();
 choices[72][0] = "100 a&ntilde;os desde su publicaci&oacute;n, despu&eacute;s pasa a dominio p&uacute;blico.";
 choices[72][1] = "Como es una obra impresa, tiene la consideraci&oacute;n de obra literaria y se protege durante la vida del autor y 60 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[72][2] = "A estos efectos, el manual se considera parte del programa y se protege durante la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[72][3] = "Depende, si el manual est&aacute; impreso, entonces la protecci&oacute;n es la vida del autor y 50 a&ntilde;os despu&eacute;s de su muerte y si es un tutorial no impreso, entonces es la vida del autor y 40 a&ntilde;os despu&eacute;s de su muerte.";
 answers[72] = choices[72][2];
 units[72] = "36";
 comments[72] = "Id Pregunta: 5987. TIC A 2009";


//  Id pregunta: 6059 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  Los servicios web son:";
 choices[73]= new Array();
 choices[73][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[73][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[73][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[73][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[73] = choices[73][3];
 units[73] = "51,69";
 comments[73] = "Id Pregunta: 6059. TIC A 2009";


//  Id pregunta: 6101 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Por raz&oacute;n de su cuant&iacute;a, &iquest;en qu&eacute; contratos de objeto inform&aacute;tico se precisa autorizaci&oacute;n del Consejo de Ministros para poder celebrar el contrato?";
 choices[74]= new Array();
 choices[74][0] = "Cuando su cuant&iacute;a es igual o superior a 10 millones de euros.";
 choices[74][1] = "Cuando su cuant&iacute;a es igual o superior a 12 millones de euros.";
 choices[74][2] = "Cuando su cuant&iacute;a es igual o superior a 15 millones de euros.";
 choices[74][3] = "No se precisa autorizaci&oacute;n del Consejo de Ministros por motivos de cuant&iacute;a en los contratos de objeto inform&aacute;tico.";
 answers[74] = choices[74][1];
 units[74] = "41";
 comments[74] = "Id Pregunta: 6101. TIC A 2009";


//  Id pregunta: 6174 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  Indique cual de entre los cuales no es una funci&oacute;n del LMS:";
 choices[75]= new Array();
 choices[75][0] = "Seguimiento de la actividad del alumno.";
 choices[75][1] = "Publicaci&oacute;n de contenidos de formaci&oacute;n";
 choices[75][2] = "Comunicaci&oacute;n profesor-alumno.";
 choices[75][3] = "Matriculaci&oacute;n en cursos.";
 answers[75] = choices[75][2];
 units[75] = "66";
 comments[75] = "Id Pregunta: 6174. ";


//  Id pregunta: 6189 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  El Esquema Nacional de Interoperabilidad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[76]= new Array();
 choices[76][0] = "Cada 6 meses";
 choices[76][1] = "Cada a&ntilde;o";
 choices[76][2] = "Cada 2 a&ntilde;os";
 choices[76][3] = "El Esquema Nacional de Interoperabilidad no especifica nada respecto a auditor&iacute;as";
 answers[76] = choices[76][3];
 units[76] = "43";
 comments[76] = "Id Pregunta: 6189. ";


//  Id pregunta: 6200 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  Seg&uacute;n M&eacute;trica 3, el diagrama de estructura define posibles estructuras que permiten mostrar la secuencia de las llamadas entre m&oacute;dulos; &iquest;cu&aacute;l de las siguientes es una de ellas?";
 choices[77]= new Array();
 choices[77][0] = "Continua";
 choices[77][1] = "Dispersa";
 choices[77][2] = "en &Aacute;rbol";
 choices[77][3] = "Alternativa";
 answers[77] = choices[77][3];
 units[77] = "86";
 comments[77] = "Id Pregunta: 6200. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6206 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  Relacionado con el An&aacute;lisis y Dise&ntilde;o Orientado a Objetos, &iquest;Cu&aacute;l de los siguientes patrones de dise&ntilde;o corresponde a la subclasificaci&oacute;n patrones de creaci&oacute;n?";
 choices[78]= new Array();
 choices[78][0] = "Adapter";
 choices[78][1] = "Bridge";
 choices[78][2] = "Singleton";
 choices[78][3] = "Composite";
 answers[78] = choices[78][2];
 units[78] = "82";
 comments[78] = "Id Pregunta: 6206. TICB-2009, bloque desarrollo";


//  Id pregunta: 6356 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  El registro de operadores creado al amparo de la Ley 32/2003, se crea dependiente de:";
 choices[79]= new Array();
 choices[79][0] = "La Comisi&oacute;n Nacional de Competencia";
 choices[79][1] = "La Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[79][2] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[79][3] = "La Comisi&oacute;n del Mercado de las Telecomunicaciones";
 answers[79] = choices[79][3];
 units[79] = "110";
 comments[79] = "Id Pregunta: 6356. Art&iacute;culo 7 Ley 32/2003";


//  Id pregunta: 6398 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  La ley 59/2003 de firma electr&oacute;nica, regula:";
 choices[80]= new Array();
 choices[80][0] = "La firma electr&oacute;nica";
 choices[80][1] = "La prestaci&oacute;n de servicios de certificaci&oacute;n";
 choices[80][2] = "La eficacia de la firma electr&oacute;nica";
 choices[80][3] = "Todas las anteriores son correctas.";
 answers[80] = choices[80][3];
 units[80] = "30";
 comments[80] = "Id Pregunta: 6398. Art&iacute;culo 1 Ley 59/2003";


//  Id pregunta: 6458 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  Una infraestructura de clave p&uacute;blica (PKI) es ";
 choices[81]= new Array();
 choices[81][0] = "Un algoritmo de clave p&uacute;blica, cuya firma digital hace uso de funciones hash de 64 bits";
 choices[81][1] = "El conjunto de certificado de autenticaci&oacute;n y certificado de firma reconocida";
 choices[81][2] = "Una tercera parte de confianza que se encarga de la firma digital de los certificados de usuarios de entorno de clave p&uacute;blica";
 choices[81][3] = "Un conjunto de protocolos, servicios y est&aacute;ndares que soportan aplicaciones basadas en criptograf&iacute;a de clave p&uacute;blica";
 answers[81] = choices[81][3];
 units[81] = "74";
 comments[81] = "Id Pregunta: 6458. Castilla La Mancha 2009";


//  Id pregunta: 6515 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[82]= new Array();
 choices[82][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[82][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[82][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases. ";
 choices[82][3] = "No se permite herencia m&uacute;ltiple.";
 answers[82] = choices[82][2];
 units[82] = "60";
 comments[82] = "Id Pregunta: 6515. ";


//  Id pregunta: 7882 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)   El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y se aplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itinerancia de clientes es el:";
 choices[83]= new Array();
 choices[83][0] = " 802.11e.";
 choices[83][1] = " 802.11f.";
 choices[83][2] = " 802.11h.";
 choices[83][3] = " 802.11i.";
 answers[83] = choices[83][1];
 units[83] = "NULL";
 comments[83] = "Id Pregunta: 7882. Map 2006";


//  Id pregunta: 8224 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  De acuerdo con la normativa de protecci&oacute;n de datos de car&aacute;cter personal, proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o Diario oficial correspondiente, se considerar&aacute;:";
 choices[84]= new Array();
 choices[84][0] = "Infracci&oacute;n leve.";
 choices[84][1] = "Infracci&oacute;n notable.";
 choices[84][2] = "Infracci&oacute;n grave.";
 choices[84][3] = "Infracci&oacute;n muy grave.";
 answers[84] = choices[84][2];
 units[84] = "29";
 comments[84] = "Id Pregunta: 8224. Examen TIC A1 2010";


//  Id pregunta: 8251 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Con respecto a sistemas de almacenamiento, indique cu&aacute;l de las siguientes asociaciones de t&eacute;rminos es correcta:";
 choices[85]= new Array();
 choices[85][0] = "Protocolos: CIFS, NDMP, iFCP, NFS.";
 choices[85][1] = "Dispositivos &oacute;pticos: DVD, MO, LTO, UDO.";
 choices[85][2] = "Redes SAN: SCSI, ESCON, FICON, WAFS.";
 choices[85][3] = "Formatos de cintas: FATA, TRAVAN, DLT, DAT.";
 answers[85] = choices[85][0];
 units[85] = "48";
 comments[85] = "Id Pregunta: 8251. Examen TIC A1 2010";


//  Id pregunta: 8270 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  La gesti&oacute;n de memoria virtual en Unix:";
 choices[86]= new Array();
 choices[86][0] = "Mantiene siempre en memoria RAM los procesos del kernel.";
 choices[86][1] = "Utiliza siempre p&aacute;ginas de memoria de tama&ntilde;o variable.";
 choices[86][2] = "Asigna a los procesos, espacios de direcciones compartidos.";
 choices[86][3] = "No contempla la compartici&oacute;n de c&oacute;digo entre procesos.";
 answers[86] = choices[86][0];
 units[86] = "52,53";
 comments[86] = "Id Pregunta: 8270. Examen TIC A1 2010";


//  Id pregunta: 8463 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  &iquest;Qu&eacute; API proporciona un modo para que una aplicaci&oacute;n J2EE autentique y autorice a un usuario especifico o a un grupo de usuarios para su ejecuci&oacute;n?:";
 choices[87]= new Array();
 choices[87][0] = "JNDI";
 choices[87][1] = "JAAS";
 choices[87][2] = "JMS";
 choices[87][3] = "JNI";
 answers[87] = choices[87][1];
 units[87] = "116";
 comments[87] = "Id Pregunta: 8463. Analista Ayto. Madrid 2010";


//  Id pregunta: 8535 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  &iquest;Qu&eacute; tecnolog&iacute;a de acceso permite un tipo de servicio tanto sim&eacute;trico como asim&eacute;trico?";
 choices[88]= new Array();
 choices[88][0] = "SHDSL";
 choices[88][1] = "HDSL";
 choices[88][2] = "ADSL2";
 choices[88][3] = "VDSL";
 answers[88] = choices[88][3];
 units[88] = "107";
 comments[88] = "Id Pregunta: 8535. Examen TIC A2 2010 interna";


//  Id pregunta: 8627 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  En el contexto de las redes de cable, con objeto de permitir la asignaci&oacute;n din&aacute;mica de ancho de banda a los usuarios, &iquest;cu&aacute;les son las estrategias posibles de acceso a trav&eacute;s de m&oacute;dem?";
 choices[89]= new Array();
 choices[89][0] = "Por encaminamiento IP y basada en ATM";
 choices[89][1] = "A trav&eacute;s del nodo primario de la red y a trav&eacute;s del nodo secundario de la red";
 choices[89][2] = "Mediante solicitud-reserva y por contienda.";
 choices[89][3] = "En estrella y en &aacute;rbol.";
 answers[89] = choices[89][2];
 units[89] = "101, 102";
 comments[89] = "Id Pregunta: 8627. Examen TIC A2 2010 interna";


//  Id pregunta: 8648 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de ordenaci&oacute;n?";
 choices[90]= new Array();
 choices[90][0] = "Quicksort.";
 choices[90][1] = "Mergesort.";
 choices[90][2] = "Bubblesort.";
 choices[90][3] = "Middlesort.";
 answers[90] = choices[90][3];
 units[90] = "96";
 comments[90] = "Id Pregunta: 8648. Examen TIC A2 2010 interna";


//  Id pregunta: 8657 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[91]= new Array();
 choices[91][0] = "Firma digital";
 choices[91][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[91][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[91][3] = "Seguridad Wi-Fi";
 answers[91] = choices[91][1];
 units[91] = "99, 101";
 comments[91] = "Id Pregunta: 8657. Examen UPM A2 2011";


//  Id pregunta: 8683 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  En el subsistema de Operaci&oacute;n y Mantenimiento de GSM existe una Base de Datos denominada EIR (Equipment Identity Register). &iquest;Cu&aacute;l es su funci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "Guardar la informaci&oacute;n de los m&oacute;viles bajo su &aacute;rea de cobertura en ese momento.";
 choices[92][1] = "Guardar la informaci&oacute;n de los m&oacute;viles que est&aacute;n autorizado para usar a red.";
 choices[92][2] = "Guardar la informaci&oacute;n de los m&oacute;viles que tienen prohibido utilizar- la red por alg&uacute;n motivo.";
 choices[92][3] = "Base de datos con la facturaci&oacute;n del m&oacute;vil que est&aacute; haciendo uso de la red.";
 answers[92] = choices[92][2];
 units[92] = "108";
 comments[92] = "Id Pregunta: 8683. Examen UPM A2 2011";


//  Id pregunta: 8786 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  &iquest;A cu&aacute;l de las siguientes arquitecturas paralelas pertenecen las arquitecturas Pipeline?";
 choices[93]= new Array();
 choices[93][0] = "SISD";
 choices[93][1] = "SIMD";
 choices[93][2] = "MISD";
 choices[93][3] = "MIMD";
 answers[93] = choices[93][2];
 units[93] = "45";
 comments[93] = "Id Pregunta: 8786. Examen UPM A2 2011";


//  Id pregunta: 8870 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes asociaciones &ldquo;protocolos OSI - protocolos TCP/IP&rdquo; no es correcta?:";
 choices[94]= new Array();
 choices[94][0] = "X.500-SNMP";
 choices[94][1] = "SMTP-X.400";
 choices[94][2] = "FTAM-FTP";
 choices[94][3] = "SMTP-X.25";
 answers[94] = choices[94][0];
 units[94] = "100";
 comments[94] = "Id Pregunta: 8870. Analista Ayto. Madrid 2010";


//  Id pregunta: 8995 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  El protocolo SSL (Secure Sockets Layer)";
 choices[95]= new Array();
 choices[95][0] = "Proporciona conexiones seguras s&oacute;lo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[95][1] = "No garantiza la integridad de la informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[95][2] = "Es una capa de seguridad que opera siempre sobre protocolo UDP.";
 choices[95][3] = "Proporciona conexiones seguras sobre una red insegura garantizando la integridad de los datos transmitidos, privacidad de la conexi&oacute;n y autentificaci&oacute;n del cliente y servidor.";
 answers[95] = choices[95][3];
 units[95] = "111";
 comments[95] = "Id Pregunta: 8995. Examen UPM A2 2011";


//  Id pregunta: 9183 Año de creación de pregunta: 2013-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes no es interfaz de M&eacute;trica 3?";
 choices[96]= new Array();
 choices[96][0] = "Gesti&oacute;n de Configuraci&oacute;n";
 choices[96][1] = "Gesti&oacute;n de Procesos";
 choices[96][2] = "Seguridad";
 choices[96][3] = "Aseguramiento de la Calidad";
 answers[96] = choices[96][1];
 units[96] = "86";
 comments[96] = "Id Pregunta: 9183. ";


//  Id pregunta: 9454 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  Seg&uacute;n Codd, una entidad en la que todos los atributos dependen funcionalmente de la clave est&aacute;, al menos, en:";
 choices[97]= new Array();
 choices[97][0] = "Primera Forma Normal.";
 choices[97][1] = "Segunda Forma Normal.";
 choices[97][2] = "Tercera Forma Normal.";
 choices[97][3] = "Forma Normal de Boyce-Codd.";
 answers[97] = choices[97][0];
 units[97] = "58";
 comments[97] = "Id Pregunta: 9454. ";


//  Id pregunta: 9706 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  El protocolo TCP es un protocolo";
 choices[98]= new Array();
 choices[98][0] = "orientado a conexi&oacute;n, fiable y de flujo estructurado.";
 choices[98][1] = "orientado a conexi&oacute;n, fiable y de flujo no estructurado.";
 choices[98][2] = "orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 choices[98][3] = "no orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 answers[98] = choices[98][1];
 units[98] = "100";
 comments[98] = "Id Pregunta: 9706. Examen TIC-A1 2013";


//  Id pregunta: 10461 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Respecto a REST (Represantional State Transfer) indique la respuesta incorrecta:";
 choices[99]= new Array();
 choices[99][0] = "Es un est&aacute;ndar para desarrollar y proporcionar servicios en internet.";
 choices[99][1] = "La identificaci&oacute;n de recursos se realiza de forma &uacute;nica global mediante URIs (Uniform Resource Identifiers).";
 choices[99][2] = "Los recursos identificados con URIs son los objeto l&oacute;gicos a los que se mandan los mensajes.";
 choices[99][3] = "Emplea un protocolo cliente/servidor sin estado.";
 answers[99] = choices[99][0];
 units[99] = "51";
 comments[99] = "Id Pregunta: 10461. ";


