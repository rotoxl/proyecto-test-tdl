/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 204 Año de creación de pregunta: 2004-01-01
 questions[0]= "1)  La teor&iacute;a de la decisi&oacute;n multicriterio discreta";
 choices[0]= new Array();
 choices[0][0] = "tiene problemas con una incorrecta asignaci&oacute;n de pesos";
 choices[0][1] = "es usada en la elecci&oacute;n de contratos por parte de la administraci&oacute;n en ocasiones";
 choices[0][2] = "la normalizaci&oacute;n de las puntuaciones puede hacer perder la proporcionalidad";
 choices[0][3] = "todas las anteriores";
 answers[0] = choices[0][3];
 units[0] = "34";
 comments[0] = "Id Pregunta: 204. ";


//  Id pregunta: 206 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el modelo de Donovan las organizaciones se clasifican en:";
 choices[1]= new Array();
 choices[1][0] = "Dinosaurio, gran hermano, mano vigilante, network, cluster";
 choices[1][1] = "Dinosaurio, gran hermano, perro vigilante, network, cluster";
 choices[1][2] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, network";
 choices[1][3] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, cluster";
 answers[1] = choices[1][2];
 units[1] = "22";
 comments[1] = "Id Pregunta: 206. donovan - nolan";


//  Id pregunta: 213 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En la estructura de un sistema de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "En la dimensi&oacute;n vertical las funciones se subdividen en aplicaciones o procedimientos";
 choices[2][1] = "En la dimensi&oacute;n horizontal las funciones se subdividen en aplicaciones o procedimientos";
 choices[2][2] = "La dimensi&oacute;n vertical se subdivide en los niveles operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[2][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[2] = choices[2][3];
 units[2] = "21";
 comments[2] = "Id Pregunta: 213. ";


//  Id pregunta: 370 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Los ficheros automatizados de los que sean titulares las Cortes Generales, el Defensor del Pueblo, el Tribunal de Cuentas, el Consejo General del Poder Judicial y el Tribunal Constitucional , seg&uacute;n la Ley de Protecci&oacute;n de Datos:";
 choices[3]= new Array();
 choices[3][0] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[3][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[3][2] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 choices[3][3] = "No les ser&aacute; de aplicaci&oacute;n lo dispuesto en los T&iacute;tulos VI y VII de la misma";
 answers[3] = choices[3][0];
 units[3] = "29";
 comments[3] = "Id Pregunta: 370. ";


//  Id pregunta: 581 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  Dentro del an&aacute;lisis de un sistema de informaci&oacute;n automatizado, de una aplicaci&oacute;n o de un proceso no serealiza b&aacute;sicamente, dentro de un esquema de modelo conceptual de datos, la siguiente tarea:";
 choices[4]= new Array();
 choices[4][0] = "Estudio del sistema de informaci&oacute;n preexistente";
 choices[4][1] = "Descripci&oacute;n procedural de cada unidad de tratamiento (programa).";
 choices[4][2] = "Dise&ntilde;o racional y normalizado del nuevo sistema de informaci&oacute;n";
 choices[4][3] = "Descripci&oacute;n generalizada de cada proceso.";
 answers[4] = choices[4][1];
 units[4] = "26";
 comments[4] = "Id Pregunta: 581. ";


//  Id pregunta: 669 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  El &quot;Real Decreto por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos&quot; es el:";
 choices[5]= new Array();
 choices[5][0] = "263/1996";
 choices[5][1] = "263/2003";
 choices[5][2] = "209/2003";
 choices[5][3] = "d)209/1996";
 answers[5] = choices[5][2];
 units[5] = "30";
 comments[5] = "Id Pregunta: 669. ";


//  Id pregunta: 818 Año de creación de pregunta: 2009-01-01
 questions[6]= "7)  Seg&uacute;n la Ley 34/2002,  las Administraciones P&uacute;blicas adoptar&aacute;n las medidas necesarias para que las informaci&oacute;n disponible en sus p&aacute;ginas de Internet puedan ser accesibles para discapacitados. Esto est&aacute; de acuerdo con:";
 choices[6]= new Array();
 choices[6][0] = "A partir del 31 de diciembre de 2008, las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas satisfar&aacute;n, como m&iacute;nimo, el nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos. Excepcionalmente, esta obligaci&oacute;n no ser&aacute; aplicable cuando una funcionalidad o servicio no disponga de una soluci&oacute;n tecnol&oacute;gica que permita su accesibilidad.";
 choices[6][1] = "El nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos, antes del 31 de diciembre de 2005";
 choices[6][2] = "Los criterios WAI antes del 31 de diciembre de 2008";
 choices[6][3] = "Los criterios WAI antes del 31 de diciembre de 2005";
 answers[6] = choices[6][0];
 units[6] = "30";
 comments[6] = "Id Pregunta: 818. disposici&oacute;n adicional quinta";


//  Id pregunta: 956 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Con el comando kill de Unix es posible enviar se&ntilde;ales a otros procesos. &iquest;Qu&eacute; se&ntilde;al no puede capturar ni ignorar un proceso, y provoca la terminaci&oacute;n del mismo?:";
 choices[7]= new Array();
 choices[7][0] = "8";
 choices[7][1] = "2";
 choices[7][2] = "15";
 choices[7][3] = "9";
 answers[7] = choices[7][3];
 units[7] = "53";
 comments[7] = "Id Pregunta: 956. ";


//  Id pregunta: 973 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dada una relaci&oacute;n R y dos de sus atributos X e Y, si cada valor de X tiene asociado con &eacute;l un &uacute;nico valorde Y en todo instante, se dice que:";
 choices[8]= new Array();
 choices[8][0] = "El atributo X es funcionalmente dependiente del atributo Y";
 choices[8][1] = "El atributo Y es funcionalmente dependiente del atributo X";
 choices[8][2] = "La relaci&oacute;n R no est&aacute; normalizada";
 choices[8][3] = "La relaci&oacute;n R no est&aacute; en Segunda Forma Normal";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 973. ";


//  Id pregunta: 1136 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  En un disco magn&eacute;tico,  &iquest;qu&eacute; son las pistas?:";
 choices[9]= new Array();
 choices[9][0] = "Un espacio peque&ntilde;o entre los sectores";
 choices[9][1] = "Las posiciones donde la cabeza se mueve cuando el disco se apaga";
 choices[9][2] = "El n&uacute;mero de 'platos' del disco";
 choices[9][3] = "Nada de lo anterior es correcto";
 answers[9] = choices[9][3];
 units[9] = "48";
 comments[9] = "Id Pregunta: 1136. ";


//  Id pregunta: 1140 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  En un perif&eacute;rico de la CPU se distinguen:";
 choices[10]= new Array();
 choices[10][0] = "Las se&ntilde;ales de control y el acceso directo a memoria (DMA)";
 choices[10][1] = "Se&ntilde;ales de direcci&oacute;n y de datos";
 choices[10][2] = "E/S y acceso directo a memoria (DMA)";
 choices[10][3] = "Dispositivo perif&eacute;rico y controlador del perif&eacute;rico";
 answers[10] = choices[10][3];
 units[10] = "47";
 comments[10] = "Id Pregunta: 1140. ";


//  Id pregunta: 1326 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Se define Autoridad de certificaci&oacute;n como aquella en la conf&iacute;an uno o m&aacute;s usuarios y cuya actividad principal es la certificaci&oacute;n de la autenticidad de:";
 choices[11]= new Array();
 choices[11][0] = "Los usuarios";
 choices[11][1] = "Los datos";
 choices[11][2] = "Los documentos";
 choices[11][3] = "Los mensajes";
 answers[11] = choices[11][0];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1326. ";


//  Id pregunta: 1334 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Se puede decir que una base de datos es:";
 choices[12]= new Array();
 choices[12][0] = "Un elemento f&iacute;sico (hardware)";
 choices[12][1] = "Un dispositivo de almacenamiento";
 choices[12][2] = "Un conjunto de datos interrelacionados";
 choices[12][3] = "Una colecci&oacute;n de ficheros independientes entre s&iacute;";
 answers[12] = choices[12][2];
 units[12] = "57";
 comments[12] = "Id Pregunta: 1334. ";


//  Id pregunta: 1561 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes no es un SO para tarjetas?";
 choices[13]= new Array();
 choices[13][0] = " Scfw";
 choices[13][1] = "MultOs";
 choices[13][2] = "Java Card";
 choices[13][3] = " Open Card ";
 answers[13] = choices[13][3];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1561. ";


//  Id pregunta: 1563 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes tipos de informaci&oacute;n no est&aacute; contenida obligatoriamente en un certificado digital X.509?:";
 choices[14]= new Array();
 choices[14][0] = "La clave p&uacute;blica del titular.";
 choices[14][1] = "Datos personales de identificaci&oacute;n del titular.";
 choices[14][2] = "La URL del directorio LDAP contenedor de claves p&uacute;blicas.";
 choices[14][3] = "La firma electr&oacute;nica de la Autoridad de Certificaci&oacute;n que emiti&oacute; el certificado.";
 answers[14] = choices[14][2];
 units[14] = "73";
 comments[14] = "Id Pregunta: 1563. Junta Andaluc&iacute;a";


//  Id pregunta: 1781 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  Cual de los siguientes no forma parte del paquete Open Office";
 choices[15]= new Array();
 choices[15][0] = "Impress";
 choices[15][1] = "Calc";
 choices[15][2] = "Math";
 choices[15][3] = "Text";
 answers[15] = choices[15][3];
 units[15] = "61,62";
 comments[15] = "Id Pregunta: 1781. ";


//  Id pregunta: 1837 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  El protocolo SET (Secure Electronic Transaction) se puede transportar sobre:";
 choices[16]= new Array();
 choices[16][0] = "TCP";
 choices[16][1] = "SMTP";
 choices[16][2] = "HTTP";
 choices[16][3] = "Todas las anteriores";
 answers[16] = choices[16][3];
 units[16] = "70";
 comments[16] = "Id Pregunta: 1837. ";


//  Id pregunta: 1924 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Respecto a los servicios de Directorio Electr&oacute;nico, la norma X-500 de la UIT-T define cuatro tipos de clases de objeto de acuerdo a su funcionalidad:";
 choices[17]= new Array();
 choices[17][0] = "Auxiliar, Estructural, Simplificada, Alias";
 choices[17][1] = "Estructural, Simplificada, Auxiliar, Alias";
 choices[17][2] = "Abstracta, Esquem&aacute;tica, Estructural, Alias";
 choices[17][3] = "Abstracta, Estructural, Auxiliar, Alias";
 answers[17] = choices[17][3];
 units[17] = "73";
 comments[17] = "Id Pregunta: 1924. ";


//  Id pregunta: 1993 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  La &quot;descomposicion del problema&quot; es una actividad b&aacute;sica en el an&aacute;lisis de requisitos de los sistemas de informaci&oacute;n. Esta &quot;descomposici&oacute;n&quot; se aplica sobre dos &aacute;reas:";
 choices[18]= new Array();
 choices[18][0] = "La funcionalidad a entregar y el proceso que se utilizar&aacute; para entregarla";
 choices[18][1] = "El hardware y el software previsto en el proyecto";
 choices[18][2] = "El modelado de datos y el modelado de procesos";
 choices[18][3] = "El an&aacute;lisis funcional y el an&aacute;lisis org&aacute;nico";
 answers[18] = choices[18][0];
 units[18] = "78";
 comments[18] = "Id Pregunta: 1993. Pregunta TIC-B 2004";


//  Id pregunta: 2155 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del plan de contingencias?";
 choices[19]= new Array();
 choices[19][0] = "Minimizar las interrupciones en la operaci&oacute;n normal";
 choices[19][1] = "Limitar la extensi&oacute;n de las interrupciones y de los da&ntilde;os que produzcan";
 choices[19][2] = "Analizar da&ntilde;os y estimar costes";
 choices[19][3] = "Posibilitar la vuelta al servicio r&aacute;pida y sencilla";
 answers[19] = choices[19][2];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2155. ";


//  Id pregunta: 2176 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  La diferencia entre ciclo de vida y metodolog&iacute;a  es que &hellip;:";
 choices[20]= new Array();
 choices[20][0] = "El ciclo de vida indica el qu&eacute;, mientras que la metodolog&iacute;a indica el cu&aacute;ndo";
 choices[20][1] = "El ciclo de vida indica el cu&aacute;ndo, mientras que la metodolog&iacute;a indica el c&oacute;mo";
 choices[20][2] = "El ciclo de vida indica el qu&eacute;, mientras que la metodolog&iacute;a indica el c&oacute;mo";
 choices[20][3] = "El ciclo de vida indica el modo, mientras que la metodolog&iacute;a indica el qu&eacute;";
 answers[20] = choices[20][2];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2176. ";


//  Id pregunta: 2229 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  Al aplicar COCOMO, la diferencia de usar Ensamblador o usar Pascal ser&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "Ensamblador va a resultar m&aacute;s complicado para evaluar COCOMO";
 choices[21][1] = "Pascal ser&aacute; de m&aacute;s nivel que ensamblador";
 choices[21][2] = "Pascal ser&aacute; de menos nivel que ensamblador";
 choices[21][3] = "Da lo mismo usar un lenguaje que otro";
 answers[21] = choices[21][1];
 units[21] = "89";
 comments[21] = "Id Pregunta: 2229. ";


//  Id pregunta: 2468 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  No es un &quot;resultado&quot; del modelo EFQM:";
 choices[22]= new Array();
 choices[22][0] = "El impacto en la sociedad";
 choices[22][1] = "Satisfacci&oacute;n del Personal";
 choices[22][2] = "Resultados empresariales.";
 choices[22][3] = "El manual de calidad de la empresa";
 answers[22] = choices[22][3];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2468. ";


//  Id pregunta: 2552 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[23]= new Array();
 choices[23][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n";
 choices[23][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n";
 choices[23][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n";
 choices[23][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n";
 answers[23] = choices[23][0];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2552. Pregunta Junta Andalucia - A";


//  Id pregunta: 2612 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a de desarrollo de sistemas de informaci&oacute;n?";
 choices[24]= new Array();
 choices[24][0] = "Merise";
 choices[24][1] = "Method I";
 choices[24][2] = "Eurom&eacute;todo";
 choices[24][3] = "Metrica v3";
 answers[24] = choices[24][2];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2612. ";


//  Id pregunta: 2693 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  Los servicios de informaci&oacute;n electr&oacute;nica que contienen referencias, algunas veces con extractos, de informaci&oacute;n no publicada, se denominan:";
 choices[25]= new Array();
 choices[25][0] = "Num&eacute;ricos.";
 choices[25][1] = "Directorios.";
 choices[25][2] = "Agendas.";
 choices[25][3] = "Bibliogr&aacute;ficos.";
 answers[25] = choices[25][1];
 units[25] = "94";
 comments[25] = "Id Pregunta: 2693. ";


//  Id pregunta: 2717 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  Uno de los pasos del modelo de ciclo de vida aplicado al desarrollo de software basado en componentes (DSBC) consiste en seleccionar los componentes seg&uacute;n su granularidad. &iquest;Qu&eacute; factores definen la granularidad de un componente?";
 choices[26]= new Array();
 choices[26][0] = "El tama&ntilde;o del componente.";
 choices[26][1] = "El tama&ntilde;o, la complejidad y la capacidad funcional del componente.";
 choices[26][2] = "La capacidad funcional del componente y su estructura de datos.";
 choices[26][3] = "El tama&ntilde;o, la fiabilidad, la complejidad y la mantenibilidad del componente.";
 answers[26] = choices[26][1];
 units[26] = "76";
 comments[26] = "Id Pregunta: 2717. ";


//  Id pregunta: 2761 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  DARTS es:";
 choices[27]= new Array();
 choices[27][0] = "Un entorno de desarrollo J2EE.";
 choices[27][1] = "Un entorno de desarrollo .NET.";
 choices[27][2] = "Una extensi&oacute;n del An&aacute;lisis y Dise&ntilde;o Estructurados para el dise&ntilde;o de sistemas en tiempo real.";
 choices[27][3] = "Una metodolog&iacute;a para el dise&ntilde;o de Data Marts.";
 answers[27] = choices[27][2];
 units[27] = "83";
 comments[27] = "Id Pregunta: 2761. ";


//  Id pregunta: 2878 Año de creación de pregunta: 2006-01-01
 questions[28]= "29)  &iquest; Cu&aacute;l de las siguientes normas se ha tenido en cuenta como referencia principal en M&Eacute;TRICA versi&oacute;n 3?";
 choices[28]= new Array();
 choices[28][0] = "ISO/IEC TR 16.502/SPICE";
 choices[28][1] = "ISO 12.207";
 choices[28][2] = "IEEE 600.11-1990";
 choices[28][3] = "UNE-EN-ISO 9001:2000";
 answers[28] = choices[28][1];
 units[28] = "86";
 comments[28] = "Id Pregunta: 2878. ";


//  Id pregunta: 2914 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  En una red MPLS, &iquest; qu&eacute; funci&oacute;n realiza el LER?";
 choices[29]= new Array();
 choices[29][0] = "Es el elemento que conmuta etiquetas";
 choices[29][1] = "Es el nombre de un circuito virtual MPLS";
 choices[29][2] = "Es el elemento que inicia o termina el t&uacute;nel";
 choices[29][3] = "Es el elemento que conmuta el tr&aacute;fico en funci&oacute;n de las etiquetas";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 2914. ITSEC";


//  Id pregunta: 2936 Año de creación de pregunta: 2004-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes no es uno de los estadios en la estandarizaci&oacute;n del IAB?";
 choices[30]= new Array();
 choices[30][0] = "Borrador de Internet";
 choices[30][1] = "Est&aacute;ndar propuesto";
 choices[30][2] = "Borrador de est&aacute;ndar";
 choices[30][3] = "Est&aacute;ndar temporal";
 answers[30] = choices[30][3];
 units[30] = "112,42";
 comments[30] = "Id Pregunta: 2936. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3030 Año de creación de pregunta: 2005-01-01
 questions[31]= "32)  Al instalar un cortafuegos (firewall) para la protecci&oacute;n de un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[31]= new Array();
 choices[31][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[31][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[31][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[31][3] = "Todas las anteriores";
 answers[31] = choices[31][3];
 units[31] = "111";
 comments[31] = "Id Pregunta: 3030. Magerit V2";


//  Id pregunta: 3322 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  100BaseTX, 100BaseFX, y 100BaseT4 usan los tipos de cable (o de superior calidad) , respectivamente:";
 choices[32]= new Array();
 choices[32][0] = "Categoria 5 STP, fibra &oacute;ptica, y categor&iacute;a 5 STP";
 choices[32][1] = "Fibra &oacute;ptica, Categoria 5 UTP, y categor&iacute;a 3 UTP";
 choices[32][2] = "Categor&iacute;a 5 UTP, tipo 1 STP,  y categor&iacute;a 3 UTP";
 choices[32][3] = "Categor&iacute;a 5 UTP, fibra &oacute;ptica, y categor&iacute;a 3 UTP";
 answers[32] = choices[32][3];
 units[32] = "97";
 comments[32] = "Id Pregunta: 3322. ";


//  Id pregunta: 3371 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Dentro de una celda ATM, el campo GFC:";
 choices[33]= new Array();
 choices[33][0] = "S&oacute;lo esta presente en las celdas de los interfaces usuario-red";
 choices[33][1] = "Al igual que el campo CLP, &quot;marca&quot; la celda a lo largo de todo su transito por la red";
 choices[33][2] = "Tiene una longitud de 1 bit";
 choices[33][3] = "Proporciona la sincronizaci&oacute;n entre celdas";
 answers[33] = choices[33][0];
 units[33] = "109";
 comments[33] = "Id Pregunta: 3371. ";


//  Id pregunta: 3523 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  En HDLC, si un sistema inicia el enlace con SABM  P, su estaci&oacute;n colateral, para establecer el enlace, le responder&aacute; con:";
 choices[34]= new Array();
 choices[34][0] = "SABM  F";
 choices[34][1] = "SABM  P";
 choices[34][2] = "UA F";
 choices[34][3] = "UA P";
 answers[34] = choices[34][2];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3523. ";


//  Id pregunta: 3798 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  Respecto de ADSL, puede decirse que:";
 choices[35]= new Array();
 choices[35][0] = "No requiere ning&uacute;n tipo de dispositivo conectado al PC";
 choices[35][1] = "Basta con un m&oacute;dem ADSL en casa del abonado";
 choices[35][2] = "Necesita que la central del abonado pueda dar el servicio";
 choices[35][3] = "El abonado ha de estar a como mucho 1000 m de su central";
 answers[35] = choices[35][2];
 units[35] = "107";
 comments[35] = "Id Pregunta: 3798. ";


//  Id pregunta: 4180 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  Caso de utilizar un &uacute;nico m&eacute;todo, se economiza tiempo de restauraci&oacute;n con backups de tipo";
 choices[36]= new Array();
 choices[36][0] = "Completo";
 choices[36][1] = "Diferencial";
 choices[36][2] = "Incremental";
 choices[36][3] = "Es indiferente";
 answers[36] = choices[36][0];
 units[36] = "97";
 comments[36] = "Id Pregunta: 4180. ";


//  Id pregunta: 4268 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  Indique cu&aacute;l de los siguientes no es un principio de Wasserman";
 choices[37]= new Array();
 choices[37][0] = "Identificar estructuras de datos y operaciones";
 choices[37][1] = "Las decisiones de dise&ntilde;o de datos a bajo nivel debe realizarse tan pronto como sea posible";
 choices[37][2] = "Biblioteca de estructuras de datos &uacute;tiles y sus operaciones";
 choices[37][3] = "An&aacute;lisis sistem&aacute;tico de los datos";
 answers[37] = choices[37][1];
 units[37] = "";
 comments[37] = "Id Pregunta: 4268. ";


//  Id pregunta: 4290 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  La gesti&oacute;n de la configuraci&oacute;n del software correctamente desempe&ntilde;ada implica identificar la configuraci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Antes del comienzo del ciclo de vida.";
 choices[38][1] = "Solamente al comienzo del ciclo de vida";
 choices[38][2] = "En puntos predefinidos durante el ciclo de vida.";
 choices[38][3] = "Solamente al finalizar el ciclo de vida";
 answers[38] = choices[38][2];
 units[38] = "87";
 comments[38] = "Id Pregunta: 4290. ";


//  Id pregunta: 4297 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  En M&eacute;trica Versi&oacute;n 3, el an&aacute;lisis de los hechos inesperados y an&oacute;malos que se presentan durante la realizaci&oacute;n de las actividades y tareas del proyecto:";
 choices[39]= new Array();
 choices[39][0] = "No est&aacute; contemplado";
 choices[39][1] = "Se realiza en la interfaz de Aseguramiento de la Calidad.";
 choices[39][2] = "Se realiza en la interfaz de Gesti&oacute;n de Configuraci&oacute;n.";
 choices[39][3] = "Se realiza en la interfaz de Gesti&oacute;n de Proyectos.";
 answers[39] = choices[39][3];
 units[39] = "86";
 comments[39] = "Id Pregunta: 4297. ";


//  Id pregunta: 4399 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes tipos de mantenimiento de equipos hardware tiene un car&aacute;cter peri&oacute;dico?";
 choices[40]= new Array();
 choices[40][0] = "Mantenimiento correctivo.";
 choices[40][1] = "Mantenimiento preventivo.";
 choices[40][2] = "Mantenimiento perfectivo.";
 choices[40][3] = "Mantenimiento adaptativo.";
 answers[40] = choices[40][1];
 units[40] = "26";
 comments[40] = "Id Pregunta: 4399. ";


//  Id pregunta: 4411 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Si para un sistema de acceso basado en control biom&eacute;trico, FAR = 0% y FRR=12%, puede afirmarse que...";
 choices[41]= new Array();
 choices[41][0] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido denegados.";
 choices[41][1] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 12% de los accesos autorizados han sido denegados.";
 choices[41][2] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 88% de los accesos autorizados han sido denegados.";
 choices[41][3] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido permitidos.";
 answers[41] = choices[41][1];
 units[41] = "";
 comments[41] = "Id Pregunta: 4411. ";


//  Id pregunta: 4462 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;En qu&eacute; modelo de representaci&oacute;n de datos espaciales las distintas unidades tem&aacute;ticas se definen por las coordenadas de sus bordes?";
 choices[42]= new Array();
 choices[42][0] = "R&aacute;ster.";
 choices[42][1] = "Vectorial.";
 choices[42][2] = "Sinusoidal.";
 choices[42][3] = "Vertical.";
 answers[42] = choices[42][1];
 units[42] = "67";
 comments[42] = "Id Pregunta: 4462. ";


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


//  Id pregunta: 4630 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  NO es una autoridad de certificaci&oacute;n electr&oacute;nica en Espa&ntilde;a";
 choices[44]= new Array();
 choices[44][0] = "IDCAT";
 choices[44][1] = "CAMERFIRMA";
 choices[44][2] = "CATCERT";
 choices[44][3] = "IZEMPE";
 answers[44] = choices[44][0];
 units[44] = "";
 comments[44] = "Id Pregunta: 4630. ";


//  Id pregunta: 4633 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  En M&eacute;trica V3 NO participa en Ia realizaci&oacute;n de las pruebas de regresi&oacute;n";
 choices[45]= new Array();
 choices[45][0] = "el equipo de mantenimiento";
 choices[45][1] = "el responsable de mantenimiento";
 choices[45][2] = "el jefe del proyecto";
 choices[45][3] = "los usuarios expertos";
 answers[45] = choices[45][3];
 units[45] = "86";
 comments[45] = "Id Pregunta: 4633. ";


//  Id pregunta: 4636 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  En el mantenimiento de los sistemas de informaci&oacute;n hablamos de:";
 choices[46]= new Array();
 choices[46][0] = "mantenimiento correctivo cuando se incorporan al sistema mejoras solicitadas por el usuario";
 choices[46][1] = "mantenimiento evolutivo cuando se mejora Ia calidad interna del sistema.";
 choices[46][2] = "mantenimiento adaptativo cuando los cambios afectan a los entornos en los que opera el sistema.";
 choices[46][3] = "mantenimiento perfectivo cuando se corrigen errores que previamente no se hab&iacute;an descubierto.";
 answers[46] = choices[46][2];
 units[46] = "";
 comments[46] = "Id Pregunta: 4636. ";


//  Id pregunta: 4652 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Los identificadores VPI/VCI tienen significado";
 choices[47]= new Array();
 choices[47][0] = "global para toda la red";
 choices[47][1] = "para cada conexi&oacute;n";
 choices[47][2] = "para cada enlace";
 choices[47][3] = "solo entre el terminal y el switch ATM";
 answers[47] = choices[47][2];
 units[47] = "";
 comments[47] = "Id Pregunta: 4652. ";


//  Id pregunta: 4689 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en";
 choices[48]= new Array();
 choices[48][0] = "las frecuencias usadas";
 choices[48][1] = "los adaptadores usados";
 choices[48][2] = " la forma en que el haz se refleja dentro del n&uacute;cleo de la fibra";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = choices[48][2];
 units[48] = "99";
 comments[48] = "Id Pregunta: 4689. Examen 2006 JCYL";


//  Id pregunta: 4751 Año de creación de pregunta: 2009-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes sistemas de telefon&iacute;a se dise&ntilde;o para trabajar en espacios reducidos y altas densidades de tr&aacute;fico?";
 choices[49]= new Array();
 choices[49][0] = "GSM 900";
 choices[49][1] = "TACS";
 choices[49][2] = "DECT";
 choices[49][3] = "PAS";
 answers[49] = choices[49][2];
 units[49] = "108";
 comments[49] = "Id Pregunta: 4751. ";


//  Id pregunta: 4809 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[50]= new Array();
 choices[50][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization)";
 choices[50][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation)";
 choices[50][2] = "SNA (System Network Architecture), de IBM";
 choices[50][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union - Telecommunications)";
 answers[50] = choices[50][3];
 units[50] = "102";
 comments[50] = "Id Pregunta: 4809. ";


//  Id pregunta: 4987 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498-2, indique cu&aacute;lde las siguientes afirmaciones es correcta:";
 choices[51]= new Array();
 choices[51][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad";
 choices[51][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente";
 choices[51][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos";
 choices[51][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad";
 answers[51] = choices[51][3];
 units[51] = "74";
 comments[51] = "Id Pregunta: 4987. Examen TIC A 2007";


//  Id pregunta: 5002 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en lanorma del ETSI:";
 choices[52]= new Array();
 choices[52][0] = "ET 301-192";
 choices[52][1] = "ET 202-125";
 choices[52][2] = "ET 125-100";
 choices[52][3] = "ET 100-200";
 answers[52] = choices[52][0];
 units[52] = "105";
 comments[52] = "Id Pregunta: 5002. Examen TIC A 2007";


//  Id pregunta: 5501 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[53]= new Array();
 choices[53][0] = "Utilizan t&eacute;cnicas multidimensionales para la extracci&oacute;n y el an&aacute;lisis de los datos.";
 choices[53][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[53][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[53][3] = "Est&aacute;n pensados para el an&aacute;lisis y actualizaci&oacute;n de los datos de forma r&aacute;pida y jerarquizada.";
 answers[53] = choices[53][3];
 units[53] = "68";
 comments[53] = "Id Pregunta: 5501. ";


//  Id pregunta: 5826 Año de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes opciones NO es una vista de UML?";
 choices[54]= new Array();
 choices[54][0] = "Vista de Componentes.";
 choices[54][1] = "Vista de Despliegue.";
 choices[54][2] = "Vista de Casos de Uso.";
 choices[54][3] = "Vista de Flujo de Datos.";
 answers[54] = choices[54][3];
 units[54] = "84";
 comments[54] = "Id Pregunta: 5826. MAP 2008 A1";


//  Id pregunta: 5869 Año de creación de pregunta: 2009-01-01
 questions[55]= "56)  Las p&aacute;ginas de internet de las administraciones p&uacute;blicas o con financiaci&oacute;n p&uacute;blica existentes a la entrada en vigor del RD 1494/2007 por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as de la informaci&oacute;n, deben adaptarse a la norma:";
 choices[55]= new Array();
 choices[55][0] = "Tres meses desde la entrada en vigor del RD.";
 choices[55][1] = "Seis meses desde la entrada en vigor del RD.";
 choices[55][2] = "El d&iacute;a de entrada en vigor del RD.";
 choices[55][3] = "Antes del 31 de diciembre de 2008";
 answers[55] = choices[55][1];
 units[55] = "39";
 comments[55] = "Id Pregunta: 5869. MAP 2008 A1";


//  Id pregunta: 5944 Año de creación de pregunta: 2009-01-01
 questions[56]= "57)  El concepto de Web 2.0 agrupa 3 nociones fundamentales, &iquest;cu&aacute;l de las siguientes no es una de ellas?";
 choices[56]= new Array();
 choices[56][0] = "La posibilidad de participaci&oacute;n activa y de colaboraci&oacute;n de los usuarios en la producci&oacute;n de contenidos";
 choices[56][1] = "Las nuevas interfaces se acercan progresivamente a los est&aacute;ndares de cliente pesado";
 choices[56][2] = "Empleo de contenidos multimedia en las p&aacute;ginas web";
 choices[56][3] = "La capacidad de mezcla de diferentes servicios de distintos sitios en la mismap&aacute;gina.";
 answers[56] = choices[56][2];
 units[56] = "120";
 comments[56] = "Id Pregunta: 5944. ";


//  Id pregunta: 6122 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  Un navegador web que tenga que acceder al objeto http://orga.net:5050/imagen.jpg, interrogar&aacute; al servidor local de DNS:";
 choices[57]= new Array();
 choices[57][0] = "Sobre el registro de tipo NS correspondiente al nombre orga.net.";
 choices[57][1] = "Sobre el registro de tipo A correspondiente al nombre orga.net.";
 choices[57][2] = "Sobre el registro de tipo NET correspondiente al nombre orga.net en cualquier puerto.";
 choices[57][3] = "Sobre el registro de tipo SRV correspondiente al nombre orga.net en el puerto 5050.";
 answers[57] = choices[57][1];
 units[57] = "112";
 comments[57] = "Id Pregunta: 6122. TIC A 2009";


//  Id pregunta: 6158 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  Indique la afirmaci&oacute;n correcta sobre los diferentes codecs de audio y video en videoconferencia H.323";
 choices[58]= new Array();
 choices[58][0] = "G711 y G722 son codecs de audio mientras que H261 y H263 son codecs  de video";
 choices[58][1] = "G711 y G722 son codecs de video mientras que H261 y H263 son codecs  de audio";
 choices[58][2] = "G711 y H261 son codecs de audio mientras que G722 y H263 son codecs  de video";
 choices[58][3] = "G711 y H261 son codecs de video mientras que G722 y H263 son codecs  de audio";
 answers[58] = choices[58][0];
 units[58] = "117";
 comments[58] = "Id Pregunta: 6158. ";


//  Id pregunta: 6193 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  La Orden PRE/878/2010 regula";
 choices[59]= new Array();
 choices[59][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[59][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[59][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[59][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[59] = choices[59][3];
 units[59] = "43";
 comments[59] = "Id Pregunta: 6193. Orden PRE/878/2010";


//  Id pregunta: 6201 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  De acuerdo con M&eacute;trica versi&oacute;n 3, &iquest;qui&eacute;n participa en la obtenci&oacute;n del producto &quot;Entorno de pruebas unitarias&quot;, de la tarea &quot;Preparaci&oacute;n del entorno de las pruebas unitarias&quot;?";
 choices[60]= new Array();
 choices[60][0] = "T&eacute;cnicos de sistemas";
 choices[60][1] = "T&eacute;cnicos de sistemas y programadores";
 choices[60][2] = "Programadores";
 choices[60][3] = "Analistas, Programadores y T&eacute;cnicos de sistemas";
 answers[60] = choices[60][1];
 units[60] = "86";
 comments[60] = "Id Pregunta: 6201. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6222 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica com&uacute;n a Portlets y Servlets?:";
 choices[61]= new Array();
 choices[61][0] = "Generan contenido din&aacute;micamente.";
 choices[61][1] = "Son manejados por un contenedor especializado.";
 choices[61][2] = "Est&aacute;n asociados directamente a una URL.";
 choices[61][3] = "Su ciclo de vida es controlado por el contenedor.";
 answers[61] = choices[61][2];
 units[61] = "114";
 comments[61] = "Id Pregunta: 6222. ";


//  Id pregunta: 6272 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientesa no es un objetivo b&aacute;sico que debe cubrir un ciclo de vida?";
 choices[62]= new Array();
 choices[62][0] = "Asegurar la consistencia con el resto de los sistemas de informaci&oacute;n de la organizaci&oacute;n";
 choices[62][1] = "Garantizar la satisfacci&oacute;n del cliente";
 choices[62][2] = "Proporcionar puntos de control para la gesti&oacute;n del proyecto (calendario y presupuesto)";
 choices[62][3] = "Definir las actividades a realizar y en qu&eacute; orden";
 answers[62] = choices[62][1];
 units[62] = "76";
 comments[62] = "Id Pregunta: 6272. ";


//  Id pregunta: 6303 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objtetos?";
 choices[63]= new Array();
 choices[63][0] = "DCOM";
 choices[63][1] = "IDL";
 choices[63][2] = "CORBA";
 choices[63][3] = "RMI ";
 answers[63] = choices[63][1];
 units[63] = "82";
 comments[63] = "Id Pregunta: 6303. ";


//  Id pregunta: 6339 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes nombres no est&aacute;n relaiconados con una soluci&oacute;n ERP?";
 choices[64]= new Array();
 choices[64][0] = "Oracle Financials";
 choices[64][1] = "SAP";
 choices[64][2] = "IBM Websphere";
 choices[64][3] = "META4";
 answers[64] = choices[64][2];
 units[64] = "65";
 comments[64] = "Id Pregunta: 6339. ";


//  Id pregunta: 6520 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  La versi&oacute;n 2.0 de JavaServer Faces (JSF) est&aacute; definida en la especificaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "JSR 186";
 choices[65][1] = "JSR 168";
 choices[65][2] = "JSR 175";
 choices[65][3] = "JSR 314";
 answers[65] = choices[65][3];
 units[65] = "116";
 comments[65] = "Id Pregunta: 6520. ";


//  Id pregunta: 7305 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  El est&aacute;ndar AURORA de la ETSI para reconocimiento del habla distribuido utiliza un vector de caracter&iacute;sticas de:";
 choices[66]= new Array();
 choices[66][0] = "12 componentes";
 choices[66][1] = "26 componentes";
 choices[66][2] = "38 componentes";
 choices[66][3] = "39 componentes";
 answers[66] = choices[66][3];
 units[66] = "94";
 comments[66] = "Id Pregunta: 7305. ";


//  Id pregunta: 7329 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Se&ntilde;ale la afirmaci&oacute;n VERDADERA con respecto a AENOR:";
 choices[67]= new Array();
 choices[67][0] = "Es una Entidad P&uacute;blica Empresarial";
 choices[67][1] = "No tiene &aacute;nimo de lucro";
 choices[67][2] = "Depende org&aacute;nicamente de la Secretar&iacute;a de Estado de Telecomunicaciones y para la sociedad de la Informaci&oacute;n";
 choices[67][3] = "Est&aacute; reconocida como organismo de normalizaci&oacute;n y para actuar como entidad de certificaci&oacute;n por el Real Decreto 200/1995";
 answers[67] = choices[67][1];
 units[67] = "42";
 comments[67] = "Id Pregunta: 7329. www.aenor.es";


//  Id pregunta: 8027 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)   El algoritmo de cifrado IDEA es del tipo:";
 choices[68]= new Array();
 choices[68][0] = " Asim&eacute;trico.";
 choices[68][1] = " Sim&eacute;trico por bloques.";
 choices[68][2] = " Sim&eacute;trico de flujo.";
 choices[68][3] = " Sim&eacute;trico de resumen (hash).";
 answers[68] = choices[68][3];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 8027. Map 2007";


//  Id pregunta: 8039 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)   En Java 2, el operador &gt;&gt;:";
 choices[69]= new Array();
 choices[69][0] = " Desplaza bits del operando hacia la izquierda las posiciones indicadas.";
 choices[69][1] = " Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo).";
 choices[69][2] = " Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo).";
 choices[69][3] = " Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos.";
 answers[69] = choices[69][2];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 8039. Map 2007";


//  Id pregunta: 8212 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  Los equipos &quot;Bluetooth&quot; emplean:";
 choices[70]= new Array();
 choices[70][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[70][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencias.";
 choices[70][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[70][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[70] = choices[70][1];
 units[70] = "107";
 comments[70] = "Id Pregunta: 8212. Examen TIC A1 2010";


//  Id pregunta: 8246 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  Para garantizar la protecci&oacute;n sanitaria frente a las ondas electromagn&eacute;ticas de telefon&iacute;a m&oacute;vil, los operadores de telefon&iacute;a m&oacute;vil deben:";
 choices[71]= new Array();
 choices[71][0] = "Situar las estaciones base fuera de las ciudades, de tal forma que al estar m&aacute;s alejadas, la potencia que reciban las personas debida a una comunicaci&oacute;n por telefon&iacute;a m&oacute;vil sea menor.";
 choices[71][1] = "Instalar las estaciones base de manera que el diagrama de emisi&oacute;n no incida sobre el propio edificio, terraza o &aacute;tico, si se instalan en una azotea.";
 choices[71][2] = "Fijar la potencia con la que emiten las estaciones base para que sea 1/4 de la SAR (Tasa de absorci&oacute;n espec&iacute;fica) de un tel&eacute;fono m&oacute;vil.";
 choices[71][3] = "Instalar las estaciones base en cualquier sitio, ya que la telefon&iacute;a m&oacute;vil emite ondas ionizantes que no afectan a la salud.";
 answers[71] = choices[71][1];
 units[71] = "108";
 comments[71] = "Id Pregunta: 8246. Examen TIC A1 2010";


//  Id pregunta: 8369 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  En los diagramas estructurados (Nassi-Schneiderman): ";
 choices[72]= new Array();
 choices[72][0] = "Las flechas de uni&oacute;n son verticales.";
 choices[72][1] = "No hay flechas de uni&oacute;n.";
 choices[72][2] = "Cada posible acci&oacute;n se representa con una figura diferente.";
 choices[72][3] = "Las cajas no son contiguas.";
 answers[72] = choices[72][1];
 units[72] = "81";
 comments[72] = "Id Pregunta: 8369. Examen TIC A2 2010";


//  Id pregunta: 8434 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes normativas no regula la factura electr&oacute;nica?";
 choices[73]= new Array();
 choices[73][0] = "Orden EHA/962/2007";
 choices[73][1] = "Orden PRE/2971/2007";
 choices[73][2] = "Ley 30/2007";
 choices[73][3] = "Ley 59/2003";
 answers[73] = choices[73][3];
 units[73] = "70";
 comments[73] = "Id Pregunta: 8434. ";


//  Id pregunta: 8524 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;nto overhead o sobrecarga genera cada paquete MPLS?";
 choices[74]= new Array();
 choices[74][0] = "4 bits.";
 choices[74][1] = "5 bits.";
 choices[74][2] = "32 bits.";
 choices[74][3] = "258 bits.";
 answers[74] = choices[74][2];
 units[74] = "100";
 comments[74] = "Id Pregunta: 8524. Examen TIC A2 2010 interna";


//  Id pregunta: 8792 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  El listado que resulta de ejecutar en un sistema GNU/Linux el comando &quot;cat /etc/passwd | cut -d: -f3,7&quot; contendr&aacute; los campos:";
 choices[75]= new Array();
 choices[75][0] = "Nombre de usuario y shell";
 choices[75][1] = "Contrase&ntilde;a de usuario y home";
 choices[75][2] = "uid y shell";
 choices[75][3] = "gid y home";
 answers[75] = choices[75][2];
 units[75] = "53, 54";
 comments[75] = "Id Pregunta: 8792. Examen UPM A2 2011";


//  Id pregunta: 8845 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  En el modelo EFQM (European Foundation Quality Management) se identifican una serie de elementos que son la base para la Gesti&oacute;n de Calidad Total dentro de las organizaciones y que se agrupan en dos grandes bloques:";
 choices[76]= new Array();
 choices[76][0] = " Agentes y Acciones";
 choices[76][1] = " Agentes y Niveles de Satisfacci&oacute;n";
 choices[76][2] = " Agentes y Resultados";
 choices[76][3] = " Resultados y Acciones";
 answers[76] = choices[76][2];
 units[76] = "87,88";
 comments[76] = "Id Pregunta: 8845. Examen UC3M 2010";


//  Id pregunta: 8854 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  La vulneraci&oacute;n de una restricci&oacute;n de integridad referencial es detectada por el servidor de base de datos de acuerdo a la declaraci&oacute;n de la:";
 choices[77]= new Array();
 choices[77][0] = "PRIMARY KEY";
 choices[77][1] = "FOREIGN KEY";
 choices[77][2] = "CANDIDATE KEY";
 choices[77][3] = "SUPERKEY";
 answers[77] = choices[77][1];
 units[77] = "58";
 comments[77] = "Id Pregunta: 8854. Analista Ayto. Madrid 2010";


//  Id pregunta: 8915 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con XML:";
 choices[78]= new Array();
 choices[78][0] = "Es un lenguaje de programaci&oacute;n para aplicaciones basadas en Internet.";
 choices[78][1] = "Es un lenguaje de marcado que, al igual que HTML, hace uso de etiquetas (&ldquo;tags&rdquo;).";
 choices[78][2] = "Es un lenguaje independiente de plataforma cuyo objetivo es definir c&oacute;mo un navegador est&aacute;ndar debe presentar la informaci&oacute;n definida en HTML.";
 choices[78][3] = "Es un lenguaje definido por Microsoft para implementar su arquitectura orientada a servicios";
 answers[78] = choices[78][1];
 units[78] = "69";
 comments[78] = "Id Pregunta: 8915. Operador Ayto. Madrid 2010";


//  Id pregunta: 8927 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  En la mayor&iacute;a de los sistemas Linux, el directorio /home contiene:";
 choices[79]= new Array();
 choices[79][0] = "los directorios de trabajo de los usuarios.";
 choices[79][1] = "los sistemas de archivos montados temporalmente.";
 choices[79][2] = "el c&oacute;digo fuente del kernel.";
 choices[79][3] = "los ficheros de los controladores de dispositivos";
 answers[79] = choices[79][0];
 units[79] = "53, 54";
 comments[79] = "Id Pregunta: 8927. Operador Ayto. Madrid 2010";


//  Id pregunta: 8935 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[80]= new Array();
 choices[80][0] = "A obtener copias electr&oacute;nicas de los documentos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[80][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[80][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[80][3] = "Todos los anteriores lo son";
 answers[80] = choices[80][0];
 units[80] = "43";
 comments[80] = "Id Pregunta: 8935. ";


//  Id pregunta: 9003 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Seg&uacute;n la LOPD, el &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada en el caso de que se trate, en los siguientes supuestos:";
 choices[81]= new Array();
 choices[81][0] = "Cuando pueda apreciarse que la conducta del afectado ha podido inducir a la comisi&oacute;n de la infracci&oacute;n.";
 choices[81][1] = "Cuando se haya producido un proceso de fusi&oacute;n por absorci&oacute;n y la infracci&oacute;n fuese anterior a dicho proceso, no siendo imputable a la entidad absorbente.";
 choices[81][2] = "Cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[81][3] = "Todos los anteriores";
 answers[81] = choices[81][3];
 units[81] = "29";
 comments[81] = "Id Pregunta: 9003. ";


//  Id pregunta: 9016 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[82]= new Array();
 choices[82][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[82][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[82][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[82][3] = "Ninguna de las anteriores";
 answers[82] = choices[82][2];
 units[82] = "99";
 comments[82] = "Id Pregunta: 9016. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9018 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Cuando una l&iacute;nea de transmisi&oacute;n cumple la condici&oacute;n de Heaviside:";
 choices[83]= new Array();
 choices[83][0] = "El retardo es m&iacute;nimo.";
 choices[83][1] = "El retardo es m&aacute;ximo.";
 choices[83][2] = "El retardo es constante.";
 choices[83][3] = "No existe retardo";
 answers[83] = choices[83][2];
 units[83] = "99";
 comments[83] = "Id Pregunta: 9018. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9211 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  Con relaci&oacute;n al bucle arbitrado y red conmutada en las conexiones FC, es cierto que...";
 choices[84]= new Array();
 choices[84][0] = "mediante bucle arbitrado se pueden conectar hasta 50 dispositivos en un anillo en el que se comparte el ancho de banda entre todos ellos.";
 choices[84][1] = "La red conmutada utiliza switches para construir una NAS.";
 choices[84][2] = "En la red conmutada no se comparte el ancho de banda";
 choices[84][3] = "Bucle arbitrado y red conmutada no son formas v&aacute;lidas de conexi&oacute;n FC.";
 answers[84] = choices[84][2];
 units[84] = "48";
 comments[84] = "Id Pregunta: 9211. ";


//  Id pregunta: 9218 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Qu&eacute; es WAFS?";
 choices[85]= new Array();
 choices[85][0] = "Wide Area File Service";
 choices[85][1] = "Una evoluci&oacute;n del empaquetado de audio WAV";
 choices[85][2] = "Un tipo de File System";
 choices[85][3] = "Una t&eacute;cnica de compresi&oacute;n de imagen.";
 answers[85] = choices[85][0];
 units[85] = "48";
 comments[85] = "Id Pregunta: 9218. ";


//  Id pregunta: 9231 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[86]= new Array();
 choices[86][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[86][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[86][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[86][3] = "Ninguna es correcta.";
 answers[86] = choices[86][2];
 units[86] = "52,55";
 comments[86] = "Id Pregunta: 9231. ";


//  Id pregunta: 9268 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;C&oacute;mo se llama la conexi&oacute;n que recientemente ha lanzado Intel que supera en velocidad a USB 3.0, basada en LightPeak? ";
 choices[87]= new Array();
 choices[87][0] = "Thundercat";
 choices[87][1] = "LightFire";
 choices[87][2] = "Thunderbolt";
 choices[87][3] = "USB 4.0 ";
 answers[87] = choices[87][0];
 units[87] = "47";
 comments[87] = "Id Pregunta: 9268. Examen TICA2-2011";


//  Id pregunta: 9272 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  El tama&ntilde;o m&aacute;ximo de archivos que puede manejar FAT32 es: ";
 choices[88]= new Array();
 choices[88][0] = "32MB";
 choices[88][1] = "1GB";
 choices[88][2] = "2GB";
 choices[88][3] = "4GB";
 answers[88] = choices[88][3];
 units[88] = "54";
 comments[88] = "Id Pregunta: 9272. Examen TICA2-2011";


//  Id pregunta: 9283 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes NO es una prerrogativa de la Administraci&oacute;n seg&uacute;n el Texto Refundido de la Ley de Contratos del Sector P&uacute;blico?";
 choices[89]= new Array();
 choices[89][0] = "Disminuir la cuant&iacute;a econ&oacute;mica del contrato por razones de d&eacute;ficit excesivo.";
 choices[89][1] = "Acordar la resoluci&oacute;n del contrato y determinar los efectos de &eacute;sta. ";
 choices[89][2] = "Modificar los contratos por razones de inter&eacute;s p&uacute;blico. ";
 choices[89][3] = "Interpretar los contratos.";
 answers[89] = choices[89][0];
 units[89] = "41";
 comments[89] = "Id Pregunta: 9283. Art. 210 RD Legislativo 3/2011";


//  Id pregunta: 9380 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  &iquest;De qu&eacute; est&aacute;ndar se estar&iacute;a hablando si se menciona una Interfaz aerea avanzada con velocidades de transmisi&oacute;n de 100 Mbps para dispositivos fijos y 1 Gbps para dispositivos m&oacute;viles?";
 choices[90]= new Array();
 choices[90][0] = "802.16e";
 choices[90][1] = "802.11-2012";
 choices[90][2] = "802.16m";
 choices[90][3] = "802.11ac";
 answers[90] = choices[90][2];
 units[90] = "101";
 comments[90] = "Id Pregunta: 9380. ";


//  Id pregunta: 9411 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  Cu&aacute;l de las siguientes siguientes afirmaciones relativas a las organizaciones TIC es incorrecta?";
 choices[91]= new Array();
 choices[91][0] = "El &aacute;rea de log&iacute;stica no siempre pertenece a la organizaci&oacute;n TIC";
 choices[91][1] = "Existe una tendencia en el &aacute;rea de desarrollo y mantenimiento hacia el modelo de organizaci&oacute;n proyecto-funcional";
 choices[91][2] = "El sistema de funcionamiento formal se caracteriza por un elevado n&uacute;mero de niveles jer&aacute;rquicos";
 choices[91][3] = "El CAU suministra informaci&oacute;n a los usuarios para resolver incidencias";
 answers[91] = choices[91][2];
 units[91] = "26";
 comments[91] = "Id Pregunta: 9411. ";


//  Id pregunta: 9610 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[92]= new Array();
 choices[92][0] = "SQL 2000";
 choices[92][1] = "SQL:2003";
 choices[92][2] = "SQL:2005";
 choices[92][3] = "SQL:2008";
 answers[92] = choices[92][2];
 units[92] = "58";
 comments[92] = "Id Pregunta: 9610. ";


//  Id pregunta: 9978 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  En el desarrollo de aplicaciones en .NET Framework disponemos de un Garbage Collector (recolector de basura). Indique cu&aacute;l de las siguientes afirmaciones es FALSA ";
 choices[93]= new Array();
 choices[93][0] = "La liberaci&oacute;n de un objeto en memoria es perfectamente posible sin intervenci&oacute;n expl&iacute;cita por parte del usuario ";
 choices[93][1] = "Para la liberaci&oacute;n expl&iacute;cita de memoria existen m&eacute;todos de finalizaci&oacute;n como Finalize() y Dispose()";
 choices[93][2] = "Se suele utilizar Dispose() cuando el objeto no se va a utilizar m&aacute;s definitivamente ";
 choices[93][3] = "Si se invoca expl&iacute;citamente el m&eacute;todo Dispose() de un objeto, este ser&aacute; liberado inmediatamente ";
 answers[93] = choices[93][3];
 units[93] = "59";
 comments[93] = "Id Pregunta: 9978. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10026 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  El Entity Framework es:";
 choices[94]= new Array();
 choices[94][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[94][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[94][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[94][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[94] = choices[94][0];
 units[94] = "59";
 comments[94] = "Id Pregunta: 10026. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10161 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[95]= new Array();
 choices[95][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[95][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[95][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[95][3] = "Ninguna de las anteriores";
 answers[95] = choices[95][2];
 units[95] = "58";
 comments[95] = "Id Pregunta: 10161. ";


//  Id pregunta: 10175 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Booch, Jacobson y Rumbaugh propusieron de forma conjunta PUDS como marco de trabajo gen&eacute;rico para el desarrollo de software.";
 choices[96]= new Array();
 choices[96][0] = "PUDS propone un proceso iterativo e incremental para el desarrollo de sw. La distribuci&oacute;n de la funcionalidad a implementar en distintos incrementos implica un mayor esfuerzo y dificultad en relaci&oacute;n con la gesti&oacute;n del riesgo. ";
 choices[96][1] = "Cada ciclo de desarrollo comprende varias iteraciones. Cada iteraci&oacute;n se subdivide en 4 fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n y Transici&oacute;n";
 choices[96][2] = "Cada ciclo de desarrollo se subdivide en varias fases o flujos de trabajo fundamentales: planificaci&oacute;n, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n y pruebas y finalmente, evaluaci&oacute;n del ciclo.";
 choices[96][3] = "Los casos de uso gu&iacute;an el proceso de desarrollo, centrando la atenci&oacute;n en lo que el usuario quiere / espera del sistema";
 answers[96] = choices[96][3];
 units[96] = "82";
 comments[96] = "Id Pregunta: 10175. ";


//  Id pregunta: 10196 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Cual de la siguientes t&eacute;cnicas de modulaci&oacute;n no es usada por las tecnolog&iacute;as xDSL?";
 choices[97]= new Array();
 choices[97][0] = "2B1Q";
 choices[97][1] = "CAP";
 choices[97][2] = "DMT";
 choices[97][3] = "WDM";
 answers[97] = choices[97][3];
 units[97] = "107";
 comments[97] = "Id Pregunta: 10196. La tecnolog&iacute;a usada en algunas xDSL es DWMT, no WDM";


//  Id pregunta: 10502 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Quien es considerado el creador del Lenguaje HTML?";
 choices[98]= new Array();
 choices[98][0] = "Dan Connolly";
 choices[98][1] = "Hank Thomas-Lee";
 choices[98][2] = "Conway Berners-Lee";
 choices[98][3] = "Tim Berners-Lee";
 answers[98] = choices[98][3];
 units[98] = "69";
 comments[98] = "Id Pregunta: 10502. ";


//  Id pregunta: 10550 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[99]= new Array();
 choices[99][0] = "Robo de los datos desde el cliente ";
 choices[99][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red ";
 choices[99][2] = "Un troyano en el navegador";
 choices[99][3] = "Escuchas ilegales en la red";
 answers[99] = choices[99][2];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10550. ";


