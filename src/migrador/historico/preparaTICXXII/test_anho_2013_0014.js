/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 69 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas compara cada permutaci&oacute;n posible de las alternativas, con la informaci&oacute;n que aporta para cada criterio la matriz de decisi&oacute;n?:";
 choices[0]= new Array();
 choices[0][0] = "M&eacute;todo Promethee";
 choices[0][1] = "Utilidad multiatributo";
 choices[0][2] = "Permutaci&oacute;n";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][3];
 units[0] = "34";
 comments[0] = "Id Pregunta: 69. ";


//  Id pregunta: 254 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  Entre los m&eacute;todos utilizados para la selecci&oacute;n de bienes y servicios:";
 choices[1]= new Array();
 choices[1][0] = "En general se considera que a mayor entrop&iacute;a, mayor informaci&oacute;n, puesto que las puntuaciones est&aacute;n m&aacute;s ordenadas";
 choices[1][1] = "La normalizaci&oacute;n de las puntuaciones suele ser necesaria para considerarlas a todas sobre la misma escala y para simplificar los c&aacute;lculos";
 choices[1][2] = "En el m&eacute;todo de permutaci&oacute;n, se exigen solamente las evaluaciones cardinales y los pesos ordinales";
 choices[1][3] = "Todas las respuestas anteriores son correctas";
 answers[1] = choices[1][1];
 units[1] = "34";
 comments[1] = "Id Pregunta: 254. ";


//  Id pregunta: 304 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La estructura organizacional  proyecto-funcional de un &aacute;rea de desarrollo:";
 choices[2]= new Array();
 choices[2][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[2][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[2][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[2][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[2] = choices[2][2];
 units[2] = "26";
 comments[2] = "Id Pregunta: 304. estructura organizacional";


//  Id pregunta: 458 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Si se desea una estructura organizacional caracterizada por su orientaci&oacute;n a los usuarios se establecer&aacute; una organizaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Funcional";
 choices[3][1] = "Proyecto-staff";
 choices[3][2] = "Proyecto-funcional";
 choices[3][3] = "Por aplicaciones";
 answers[3] = choices[3][3];
 units[3] = "26";
 comments[3] = "Id Pregunta: 458. ";


//  Id pregunta: 491 Año de creación de pregunta: 2003-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes se puede decir que no es una caracter&iacute;stica de los Benchmark?";
 choices[4]= new Array();
 choices[4][0] = "Pruebas entre productos de distintas compa&ntilde;&iacute;as";
 choices[4][1] = "Suelen basarse en el tiempo necesario para la ejecuci&oacute;n de un programa";
 choices[4][2] = "Metodolog&iacute;a para comparar distintos sistemas inform&aacute;ticos";
 choices[4][3] = "Una herramienta para la mejora de rendimiento de un sistema";
 answers[4] = choices[4][3];
 units[4] = "35";
 comments[4] = "Id Pregunta: 491. ";


//  Id pregunta: 518 Año de creación de pregunta: 2003-01-01
 questions[5]= "6)  Una de las organizaciones que lucha internacionalmente contra la pirater&iacute;a inform&aacute;tica es";
 choices[5]= new Array();
 choices[5][0] = "BSA";
 choices[5][1] = "RSA";
 choices[5][2] = "ESA";
 choices[5][3] = "EIT";
 answers[5] = choices[5][0];
 units[5] = "36,37";
 comments[5] = "Id Pregunta: 518. ";


//  Id pregunta: 532 Año de creación de pregunta: 2003-01-01
 questions[6]= "7)  La interfaz de M&eacute;tica V3 denominada &ldquo;Gesti&oacute;n de proyectos&rdquo;";
 choices[6]= new Array();
 choices[6][0] = "Contempla tanto el desarrollo de nuevos proyectos, como la ampliaci&oacute;n y mejora de los ya existentes (mantenimiento de sistemas de informaci&oacute;n)";
 choices[6][1] = "Consta de cuatro tipos de actividades; de inicio del poryecto , de seguimiento y control de finalizaci&oacute;n del proyecto, y de mantenimiento.";
 choices[6][2] = "Tiene comofinalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos no materiales";
 choices[6][3] = "Se emplea en la Administraci&oacute;n P&uacute;blica en sustituci&oacute;n de Eurom&eacute;todo";
 answers[6] = choices[6][0];
 units[6] = "86";
 comments[6] = "Id Pregunta: 532. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 631 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Cu&aacute;l de las siguientes afirmaciones permite la legislaci&oacute;n espa&ntilde;ola actual respecto a los programas de ordenador:";
 choices[7]= new Array();
 choices[7][0] = "Los principios que rigen los programas de ordenador pueden ser patentables.";
 choices[7][1] = "Los derechos sobre los programas de ordenador pueden ser inscritos en el Registro de la Propiedad Intelectual.";
 choices[7][2] = "Los programas de ordenador pueden ser patentables.";
 choices[7][3] = "Los programas de ordenador pueden ser inscritos en el Registro de la Propiedad ";
 answers[7] = choices[7][1];
 units[7] = "36";
 comments[7] = "Id Pregunta: 631. ";


//  Id pregunta: 895 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;En qu&eacute; conjunto de caracteres est&aacute; basado XML?:";
 choices[8]= new Array();
 choices[8][0] = "Unicode";
 choices[8][1] = "ITU 396-4";
 choices[8][2] = "ANSI 328";
 choices[8][3] = "Ninguno de los anteriores";
 answers[8] = choices[8][0];
 units[8] = "69";
 comments[8] = "Id Pregunta: 895. ";


//  Id pregunta: 951 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  COM:";
 choices[9]= new Array();
 choices[9][0] = "Es la extensi&oacute;n del sistema MS/DOS ligada a ejecutables de menos de 64 Kb";
 choices[9][1] = "Es el TLD asociado a organizaciones comerciales de EEUU";
 choices[9][2] = "Son las siglas de Component Object Model, arquitectura de desarrollo de Microsoft, previa a .NET";
 choices[9][3] = "Todas las respuestas anteriores son ciertas";
 answers[9] = choices[9][3];
 units[9] = "116";
 comments[9] = "Id Pregunta: 951. ";


//  Id pregunta: 1006 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  El concepto de adware implica que:";
 choices[10]= new Array();
 choices[10][0] = "Normalmente no existe coste por ser un a&ntilde;adido sencillo a otro software ya existente";
 choices[10][1] = "Es un software que se vende a empresas de publicidad para que &eacute;stas puedan usarlo en sus campa&ntilde;as de lanzamiento de productos";
 choices[10][2] = "Es un parche que se puede descargar f&aacute;cilmente de la web normalmente para solucionar fallos puntuales de funcionamiento de programas de pago";
 choices[10][3] = "Es un software cuyo &uacute;nico coste de adquisici&oacute;n es 'soportar' la inclusi&oacute;n de banners y pop-ups publicitarios cada vez que se ejecute";
 answers[10] = choices[10][3];
 units[10] = "61";
 comments[10] = "Id Pregunta: 1006. ";


//  Id pregunta: 1189 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indique cu&aacute;l de las siguientes afirmaciones sobre directorios no es correcta:";
 choices[11]= new Array();
 choices[11][0] = "La arquitectura X.500 se basa en la r&eacute;plica de bases de datos distribuidas";
 choices[11][1] = "El DAP es el protocolo de acceso al directorio X.500";
 choices[11][2] = "X.500 fue dise&ntilde;ado como una versi&oacute;n simplificada de LDAP";
 choices[11][3] = "Los programas acceden al directorio usando las APIs del X/Open Directory Service";
 answers[11] = choices[11][2];
 units[11] = "73";
 comments[11] = "Id Pregunta: 1189. ";


//  Id pregunta: 1197 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Java ME es:";
 choices[12]= new Array();
 choices[12][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[12][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[12][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[12][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[12] = choices[12][1];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1197. ";


//  Id pregunta: 1208 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  La arquitectura UMA seg&uacute;n Silicon Graphics:";
 choices[13]= new Array();
 choices[13][0] = "Utiliza un bus AGP 16x";
 choices[13][1] = "Utiliza una &uacute;nica memoria para todos los dispositivos, sin que estos tengan memorias locales";
 choices[13][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[13][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[13] = choices[13][1];
 units[13] = "45";
 comments[13] = "Id Pregunta: 1208. ";


//  Id pregunta: 1455 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;ntas im&aacute;genes por segundo se emiten utilizando el est&aacute;ndar PAL?:";
 choices[14]= new Array();
 choices[14][0] = "30";
 choices[14][1] = "26";
 choices[14][2] = "15";
 choices[14][3] = "25";
 answers[14] = choices[14][3];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1455. ";


//  Id pregunta: 1474 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  PDF se corresponde con:";
 choices[15]= new Array();
 choices[15][0] = "Portable Digital Format, Formato Digital Portable";
 choices[15][1] = "Portable Data Format, Formato de Datos Portables";
 choices[15][2] = "Portable Document Format, Formato de Documento Portable";
 choices[15][3] = "Pseudo-compatibility Data Format, Formato de Datos para la Compatibilidad ";
 answers[15] = choices[15][2];
 units[15] = "93";
 comments[15] = "Id Pregunta: 1474. ";


//  Id pregunta: 1524 Año de creación de pregunta: 2003-01-01
 questions[16]= "17)  Cu&aacute;l de las siguientes afirmaciones respecto a LINUX es falsa";
 choices[16]= new Array();
 choices[16][0] = "est&aacute; constituido por un n&uacute;cleo kernel; cada usuario debe construirse las librer&iacute;as y programa para poderlo utilizar";
 choices[16][1] = "es un sistema operativo compatible con UNIX";
 choices[16][2] = "es un software libre";
 choices[16][3] = "el sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[16] = choices[16][0];
 units[16] = "61,62";
 comments[16] = "Id Pregunta: 1524. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1577 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  Respecto a SSL";
 choices[17]= new Array();
 choices[17][0] = "Es un protocolo promovido por IETF";
 choices[17][1] = "Se diferencia de TSL en las t&eacute;cnicas criptogr&aacute;ficas empleadas";
 choices[17][2] = "Cuando HTTP se usa sobre un canal SSL se denomina HTTPS";
 choices[17][3] = "Est&aacute; restringido a su uso en browsers";
 answers[17] = choices[17][2];
 units[17] = "111";
 comments[17] = "Id Pregunta: 1577. Tanenbaum";


//  Id pregunta: 2005 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  Son elementos de un DFD:";
 choices[18]= new Array();
 choices[18][0] = "eventos, nodos, entidades externas, flujos de datos";
 choices[18][1] = "eventos, entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[18][2] = "entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[18][3] = "entidades externas, nodos, flujos de datos";
 answers[18] = choices[18][2];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2005. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2014 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  La responsabilidad de los analistas, de acuerdo con M&Eacute;TRICA, es:";
 choices[19]= new Array();
 choices[19][0] = "Realizar las entrevistas al usuario";
 choices[19][1] = "Elaborar un cat&aacute;logo detallado de requisitos que permita describir con precisi&oacute;n el sistema de informaci&oacute;n";
 choices[19][2] = "Establecer la plataforma id&oacute;nea hardware/software que debe dar satisfacci&oacute;n a las necesidades";
 choices[19][3] = "Dirigir a los programadores";
 answers[19] = choices[19][1];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2014. Examen TIC MAP B 2004";


//  Id pregunta: 2043 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  &iquest;Cu&aacute;ntos criterios y subcriterios de calidad considera el Modelo de Excelencia de la EFQM?";
 choices[20]= new Array();
 choices[20][0] = "Considera 9 criterios y 32 subcriterios";
 choices[20][1] = "Considera 11 criterios y 23 subcriterios, de forma an&aacute;loga a los factores y criterios de calidad del Modelo de McCall";
 choices[20][2] = "El modelo de la EFQM solo considera criterios de calidad, en concreto ocho criterios";
 choices[20][3] = "El modelo de la EFQM no habla de criterios y subcriterios, sino de factores de calidad y criterios de calidad, y considera 8 factores y 36 criterios";
 answers[20] = choices[20][0];
 units[20] = "92";
 comments[20] = "Id Pregunta: 2043. ";


//  Id pregunta: 2056 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  En METRICA V3, &iquest;en qu&eacute; etapa del proceso de Desarrollo de Sistemas de Informaci&oacute;n se aborda el establecimiento de los requisitos de un sistema?";
 choices[21]= new Array();
 choices[21][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[21][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[21][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[21][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2056. Pregunta Junta Andalucia - A";


//  Id pregunta: 2068 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de prueba no es considerada de &quot;caja negra&quot;?";
 choices[22]= new Array();
 choices[22][0] = "Las particiones de equivalencia";
 choices[22][1] = "Prueba del camino b&aacute;sico";
 choices[22][2] = "El an&aacute;lisis de los valores l&iacute;mite";
 choices[22][3] = "Los grafos causa-efecto";
 answers[22] = choices[22][1];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2068. ";


//  Id pregunta: 2081 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Seg&uacute;n la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3, en el an&aacute;lisis coste-beneficio de un sistema de informaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Deben considerarse s&oacute;lo los aspectos tangibles";
 choices[23][1] = "Deben considerarse tanto los aspectos tangibles como los intangibles";
 choices[23][2] = "El an&aacute;lisis coste-beneficio no figura en la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3";
 choices[23][3] = "No se incluyen los gastos de comunicaciones";
 answers[23] = choices[23][1];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2081. ";


//  Id pregunta: 2128 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo EFQM?:";
 choices[24]= new Array();
 choices[24][0] = "El modelo clasifica los 9 elementos en agentes y resultados";
 choices[24][1] = "La satisfacci&oacute;n del personal es uno de los agentes";
 choices[24][2] = "Los resultados econ&oacute;micos se encuentran entre los resultados";
 choices[24][3] = "La gesti&oacute;n de personal es uno de los agentes";
 answers[24] = choices[24][1];
 units[24] = "92";
 comments[24] = "Id Pregunta: 2128. ";


//  Id pregunta: 2141 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes reglas no es una regla de construcci&oacute;n de flujos en un DFD?:";
 choices[25]= new Array();
 choices[25][0] = "Activa procesos";
 choices[25][1] = "Conecta a los dem&aacute;s elementos de un DFD";
 choices[25][2] = "El flujo no puede crear ni destruir datos";
 choices[25][3] = "Se puede asimilar el flujo de datos a una tuber&iacute;a por la que transita informaci&oacute;n";
 answers[25] = choices[25][0];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2141. ";


//  Id pregunta: 2153 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes no es un instrumento de control contemplado por el Plan General de Garant&iacute;a de Calidad?:";
 choices[26]= new Array();
 choices[26][0] = "Revisiones t&eacute;cnicas formales";
 choices[26][1] = "Guiones de recomendaciones";
 choices[26][2] = "Listas de control";
 choices[26][3] = "Las tres anteriores son instrumentos de control contemplados por el PGGC";
 answers[26] = choices[26][0];
 units[26] = "88";
 comments[26] = "Id Pregunta: 2153. ";


//  Id pregunta: 2155 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del plan de contingencias?";
 choices[27]= new Array();
 choices[27][0] = "Minimizar las interrupciones en la operaci&oacute;n normal";
 choices[27][1] = "Limitar la extensi&oacute;n de las interrupciones y de los da&ntilde;os que produzcan";
 choices[27][2] = "Analizar da&ntilde;os y estimar costes";
 choices[27][3] = "Posibilitar la vuelta al servicio r&aacute;pida y sencilla";
 answers[27] = choices[27][2];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2155. ";


//  Id pregunta: 2181 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes tipos de prueba es de caja blanca?:";
 choices[28]= new Array();
 choices[28][0] = "An&aacute;lisis de valores l&iacute;mite de entrada";
 choices[28][1] = "Prueba de bucles";
 choices[28][2] = "Pruebas de comparaci&oacute;n";
 choices[28][3] = "Pruebas basadas en grafos";
 answers[28] = choices[28][1];
 units[28] = "86";
 comments[28] = "Id Pregunta: 2181. ";


//  Id pregunta: 2299 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  El premio European Quality Award de EFQM se otorga  en las siguientes categor&iacute;as:";
 choices[29]= new Array();
 choices[29][0] = "Empresas";
 choices[29][1] = "Empresas y unidades operativas de empresas";
 choices[29][2] = "Empresas, unidades operativas de empresas y PYMES";
 choices[29][3] = "Empresas, unidades operativas de empresas, PYMES y organizaciones p&uacute;blicas";
 answers[29] = choices[29][3];
 units[29] = "92";
 comments[29] = "Id Pregunta: 2299. ";


//  Id pregunta: 2439 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Las consideraciones sobre an&aacute;lisis coste/beneficio y an&aacute;lisis de riesgos, corresponden a la siguiente &aacute;rea de un proyecto inform&aacute;tico:";
 choices[30]= new Array();
 choices[30][0] = "Planificaci&oacute;n del proyecto";
 choices[30][1] = "An&aacute;lisis de viabilidad";
 choices[30][2] = "Dise&ntilde;o de la soluci&oacute;n";
 choices[30][3] = "Seguimiento del proyecto";
 answers[30] = choices[30][1];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2439. ";


//  Id pregunta: 2498 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Se&ntilde;ale el tipo de prueba que es de caja negra:";
 choices[31]= new Array();
 choices[31][0] = "Prueba de bucles";
 choices[31][1] = "Prueba basada en grafos";
 choices[31][2] = "Prueba del camino b&aacute;sico";
 choices[31][3] = "Prueba de condici&oacute;n";
 answers[31] = choices[31][1];
 units[31] = "86";
 comments[31] = "Id Pregunta: 2498. ";


//  Id pregunta: 2552 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[32]= new Array();
 choices[32][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n";
 choices[32][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n";
 choices[32][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n";
 choices[32][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2552. Pregunta Junta Andalucia - A";


//  Id pregunta: 2563 Año de creación de pregunta: 2004-01-01
 questions[33]= "34)  &iquest;Qu&eacute; es el Modelo CMM (Modelo de madurez de la capacidad de proceso de software)?";
 choices[33]= new Array();
 choices[33][0] = "Metodolog&iacute;a de dise&ntilde;o de omponentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[33][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[33][2] = "Modelo organizativo para el dise&ntilde;o software de macroensamblares cruzados";
 choices[33][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[33] = choices[33][3];
 units[33] = "87,88,92";
 comments[33] = "Id Pregunta: 2563. Pregunta Junta Andalucia - A";


//  Id pregunta: 2607 Año de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de estas afirmaciones es falsa?";
 choices[34]= new Array();
 choices[34][0] = "Dentro del An&aacute;lisis de Requisitos, un m&eacute;todo adecuado para decidir la mejor alternativa es el retorno de la inversi&oacute;n, que permite saber en qu&eacute; a&ntilde;o se recupera el coste total inicialmente estimado.";
 choices[34][1] = "Dentro del An&aacute;lisis de Requisitos, en la selecci&oacute;n de la alternativa m&aacute;s adecuada, si se hace una estimaci&oacute;n de Costes / Beneficios no se tendr&aacute;n en cuenta los costes de mantenimiento.";
 choices[34][2] = "El An&aacute;lisis Coste / Beneficio tiene como objetivo proporcionar una medida de los costes en que se incurre en la realizaci&oacute;n de un proyecto inform&aacute;tico y compara dichos costes previstos con los beneficios esperados de la realizaci&oacute;n de dicho proyecto.";
 choices[34][3] = "Dentro de la selecci&oacute;n de alternativas en el An&aacute;lisis de Requisitos, para cada alternativa se consideran los beneficios para el usuario y los beneficios t&eacute;cnicos";
 answers[34] = choices[34][1];
 units[34] = "86,38,78";
 comments[34] = "Id Pregunta: 2607. ";


//  Id pregunta: 2729 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  Uno de los objetivos principales de los Sistemas de Informaci&oacute;n es:";
 choices[35]= new Array();
 choices[35][0] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[35][1] = "Interconectar las distintas sedes de la organizaci&oacute;n";
 choices[35][2] = "Aumentar la complejidad de los procesos de la organizaci&oacute;n";
 choices[35][3] = "Reducir el n&uacute;mero de empleados";
 answers[35] = choices[35][0];
 units[35] = "77";
 comments[35] = "Id Pregunta: 2729. ";


//  Id pregunta: 2883 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &quot;Personas&quot; en el modelo EFQM?";
 choices[36]= new Array();
 choices[36][0] = "Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos";
 choices[36][1] = "Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n";
 choices[36][2] = "Existencia de un autoliderazgo en las personas de la organizaci&oacute;n";
 choices[36][3] = "Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n";
 answers[36] = choices[36][2];
 units[36] = "92";
 comments[36] = "Id Pregunta: 2883. ";


//  Id pregunta: 2897 Año de creación de pregunta: 2004-01-01
 questions[37]= "38)  En GSM (Global System Mobile) el acceso al medio utilizado es:";
 choices[37]= new Array();
 choices[37][0] = "Acceso m&uacute;ltiple por divisi&oacute;n de tiempo.";
 choices[37][1] = "Acceso m&uacute;ltiple por divisi&oacute;n de frecuencia.";
 choices[37][2] = "Acceso m&uacute;ltiple por divisi&oacute;n de frecuencia y tiempo.";
 choices[37][3] = "Acceso m&uacute;ltiple por divisi&oacute;n en c&oacute;digo de banda ancha.";
 answers[37] = choices[37][2];
 units[37] = "108";
 comments[37] = "Id Pregunta: 2897. ";


//  Id pregunta: 2956 Año de creación de pregunta: 2004-01-01
 questions[38]= "39)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderso con su router por defecto:";
 choices[38]= new Array();
 choices[38][0] = "10.2.40.64";
 choices[38][1] = "10.2.41.45";
 choices[38][2] = "10.2.40.63";
 choices[38][3] = "10.2.40.1";
 answers[38] = choices[38][3];
 units[38] = "100";
 comments[38] = "Id Pregunta: 2956. Examen TIC MAP B 2004";


//  Id pregunta: 2993 Año de creación de pregunta: 2004-01-01
 questions[39]= "40)  Las cabeceras de extensi&oacute;n";
 choices[39]= new Array();
 choices[39][0] = "Pertenecen al protocolo ipv4";
 choices[39][1] = "Son todas obligatorias";
 choices[39][2] = "Perminten definir la ruta que siga un paquete IPv6";
 choices[39][3] = "Definen las opciones en una red Token Ring";
 answers[39] = choices[39][2];
 units[39] = "100";
 comments[39] = "Id Pregunta: 2993. ";


//  Id pregunta: 3025 Año de creación de pregunta: 2004-01-01
 questions[40]= "41)  &iquest;Qu&eacute; no puede hacer un sistema de detecci&oacute;n de intrusos?";
 choices[40]= new Array();
 choices[40][0] = "Controlar el tr&aacute;fico de red dentro y fuera de los firewall";
 choices[40][1] = "Evitar que salten alarmas falsas";
 choices[40][2] = "Detectar tiempos de acceso anormales";
 choices[40][3] = "Guardar logs de los accesos";
 answers[40] = choices[40][0];
 units[40] = "111";
 comments[40] = "Id Pregunta: 3025. SS-A 2004";


//  Id pregunta: 3095 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  Un sistema, si se desea que controle los intentos de violaci&oacute;n debe incorporar:";
 choices[41]= new Array();
 choices[41][0] = "An&aacute;lisis y validaci&oacute;n de la llamada";
 choices[41][1] = "Registro de la historia y fecha de la contrase&ntilde;a";
 choices[41][2] = "Forzar a que los usuarios cambien la contrase&ntilde;a";
 choices[41][3] = "Todas las respuestas anteriores son ciertas";
 answers[41] = choices[41][3];
 units[41] = "111";
 comments[41] = "Id Pregunta: 3095. ";


//  Id pregunta: 3110 Año de creación de pregunta: 2002-01-01
 questions[42]= "43)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar IMAP-4?:";
 choices[42]= new Array();
 choices[42][0] = "Correo electr&oacute;nico";
 choices[42][1] = "Compresi&oacute;n de datos";
 choices[42][2] = "Directorio electr&oacute;nico";
 choices[42][3] = "Protocolo de transporte OSI";
 answers[42] = choices[42][0];
 units[42] = "106";
 comments[42] = "Id Pregunta: 3110. ";


//  Id pregunta: 3602 Año de creación de pregunta: 2002-01-01
 questions[43]= "44)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10BaseT es de:";
 choices[43]= new Array();
 choices[43][0] = "100 metros";
 choices[43][1] = "185 metros";
 choices[43][2] = "200 metros";
 choices[43][3] = "500 metros";
 answers[43] = choices[43][0];
 units[43] = "99";
 comments[43] = "Id Pregunta: 3602. ";


//  Id pregunta: 3660 Año de creación de pregunta: 2002-01-01
 questions[44]= "45)  Un LED es:";
 choices[44]= new Array();
 choices[44][0] = "Un diodo emisor de luz, usado para generar luz a partir de energ&iacute;a el&eacute;ctrica, a menudo a modo de peque&ntilde;os pilotos de aviso";
 choices[44][1] = "Un tipo de vocoder que permite una generaci&oacute;n progresiva de la voz humana";
 choices[44][2] = "Un m&eacute;todo de gesti&oacute;n de proyectos espec&iacute;ficos de I+D con todas las particularidades que estos conllevan";
 choices[44][3] = "Nada de lo anterior";
 answers[44] = choices[44][0];
 units[44] = "99";
 comments[44] = "Id Pregunta: 3660. ";


//  Id pregunta: 3669 Año de creación de pregunta: 2002-01-01
 questions[45]= "46)  Una de las capas o niveles del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) no corresponde a la operaci&oacute;n de los dispositivos mencionados. &iquest;Cual?:";
 choices[45]= new Array();
 choices[45][0] = "F&iacute;sico - Repetidor (&ldquo;repeater&rdquo;), Concentrador (&ldquo;hub&rdquo;), M&oacute;dem, TR1, AT";
 choices[45][1] = "Enlace - Puente (&ldquo;bridge&rdquo;), Conmutador (&ldquo;switch&rdquo;)";
 choices[45][2] = "Enlace - Conector V.24, Conector V.35";
 choices[45][3] = "Red - Encaminador (&ldquo;router&rdquo;)";
 answers[45] = choices[45][2];
 units[45] = "100,101";
 comments[45] = "Id Pregunta: 3669. ";


//  Id pregunta: 3723 Año de creación de pregunta: 2002-01-01
 questions[46]= "47)  Los est&aacute;ndares MPT 1327 y TETRA servicios de:";
 choices[46]= new Array();
 choices[46][0] = "Radiob&uacute;squeda";
 choices[46][1] = "Radiomensajer&iacute;a";
 choices[46][2] = "Comunicaciones mar&iacute;timas";
 choices[46][3] = "Radiocomunicaciones privadas";
 answers[46] = choices[46][3];
 units[46] = "108";
 comments[46] = "Id Pregunta: 3723. ";


//  Id pregunta: 3758 Año de creación de pregunta: 2002-01-01
 questions[47]= "48)  Para conectar una intranet dispersa geogr&aacute;ficamente con aplicaciones cr&iacute;ticas, la mejor opci&oacute;n es:";
 choices[47]= new Array();
 choices[47][0] = "El acceso telef&oacute;nico conmutado";
 choices[47][1] = "Utilizar la t&eacute;cnica de Tunneling";
 choices[47][2] = "Utilizar l&iacute;neas privadas";
 choices[47][3] = "Utilizar Internet como mecanismo de interconexi&oacute;n de los equipos de la intranet";
 answers[47] = choices[47][1];
 units[47] = "113";
 comments[47] = "Id Pregunta: 3758. ";


//  Id pregunta: 3804 Año de creación de pregunta: 2002-01-01
 questions[48]= "49)  Se conoce como tiempo de vuelo a:";
 choices[48]= new Array();
 choices[48][0] = "El tiempo desde que el cabeza de un disco comienza su movimiento hasta que se posa sobre una pista concreta de la superficie del disco";
 choices[48][1] = "El tiempo desde que una se&ntilde;al (onda) sale de un emisor v&iacute;a radio (aire) hasta que llega a su destino";
 choices[48][2] = "El tiempo que transcurre desde que se pulsa una tecla hasta que el sistema responde al comando requerido";
 choices[48][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[48] = choices[48][1];
 units[48] = "108";
 comments[48] = "Id Pregunta: 3804. ";


//  Id pregunta: 3837 Año de creación de pregunta: 2002-01-01
 questions[49]= "50)  SOAP:";
 choices[49]= new Array();
 choices[49][0] = "Es una especificaci&oacute;n para el intercambio de informaci&oacute;n estructurada en entornos descentralizados-distribuidos";
 choices[49][1] = "Fue propuesta originalmente por Microsoft";
 choices[49][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[49][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[49] = choices[49][3];
 units[49] = "113";
 comments[49] = "Id Pregunta: 3837. ";


//  Id pregunta: 3867 Año de creación de pregunta: 2004-01-01
 questions[50]= "51)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el servidor";
 choices[50]= new Array();
 choices[50][0] = "JavaScript";
 choices[50][1] = "CGI";
 choices[50][2] = "JSP";
 choices[50][3] = "ASP ";
 answers[50] = choices[50][0];
 units[50] = "114";
 comments[50] = "Id Pregunta: 3867. Tanenbaum";


//  Id pregunta: 4061 Año de creación de pregunta: 2006-01-01
 questions[51]= "52)  El puerto reservado para el protocolo SMTP es";
 choices[51]= new Array();
 choices[51][0] = "80";
 choices[51][1] = "25";
 choices[51][2] = "110";
 choices[51][3] = "69";
 answers[51] = choices[51][1];
 units[51] = "112";
 comments[51] = "Id Pregunta: 4061. ";


//  Id pregunta: 4063 Año de creación de pregunta: 2006-01-01
 questions[52]= "53)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a las extensiones MIME";
 choices[52]= new Array();
 choices[52][0] = "MIME es acr&oacute;nimo de MultiProtocol Internet Mail Extension";
 choices[52][1] = "permite enviar contenido multimedia a trav&eacute;s de HTTP";
 choices[52][2] = "el est&aacute;ndar de seguridad S-MIME permite el env&iacute;o seguro de mensajes y transacciones";
 choices[52][3] = "fue creado por Ia Asociaci&oacute;n de Amigos de Internet (IFA)";
 answers[52] = choices[52][2];
 units[52] = "112";
 comments[52] = "Id Pregunta: 4063. ";


//  Id pregunta: 4599 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  Respecto al acceso a Internet, Ia Ley General de telecomunicaciones:";
 choices[53]= new Array();
 choices[53][0] = "no menciona nada";
 choices[53][1] = "obliga a todos los operadores a prestar dicho servicio en localidades de mas de 1.000 habitantes.";
 choices[53][2] = "obliga a Telefonica de Espana, S.A. a prestarlo en todo el territorio nacional";
 choices[53][3] = "lo incluye dentro del servicio universal.";
 answers[53] = choices[53][3];
 units[53] = "110";
 comments[53] = "Id Pregunta: 4599. ";


//  Id pregunta: 4601 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  La organizaci&oacute;n de la informaci&oacute;n en un servicio de directorio es:";
 choices[54]= new Array();
 choices[54][0] = "relacional";
 choices[54][1] = "indexada";
 choices[54][2] = "jer&aacute;rquica";
 choices[54][3] = "en colas";
 answers[54] = choices[54][2];
 units[54] = "73";
 comments[54] = "Id Pregunta: 4601. ";


//  Id pregunta: 4689 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en";
 choices[55]= new Array();
 choices[55][0] = "las frecuencias usadas";
 choices[55][1] = "los adaptadores usados";
 choices[55][2] = " la forma en que el haz se refleja dentro del n&uacute;cleo de la fibra";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][2];
 units[55] = "99";
 comments[55] = "Id Pregunta: 4689. Examen 2006 JCYL";


//  Id pregunta: 4820 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language ) NO escierta?";
 choices[56]= new Array();
 choices[56][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas";
 choices[56][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML";
 choices[56][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, encuyo caso pueden omitirse";
 choices[56][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM(Document Object Model) o en XML-DOM";
 answers[56] = choices[56][2];
 units[56] = "69";
 comments[56] = "Id Pregunta: 4820. ";


//  Id pregunta: 4923 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Los DTD (Document Type Definition) en tecnolog&iacute;a XML:";
 choices[57]= new Array();
 choices[57][0] = "Definen la estructura del documento XML.";
 choices[57][1] = "Sirven para dar formato a la informaci&oacute;n.";
 choices[57][2] = "Siempre han de estar incluidos en el XML.";
 choices[57][3] = "Contienen elementos y atributos.";
 answers[57] = choices[57][0];
 units[57] = "69";
 comments[57] = "Id Pregunta: 4923. Examen TIC B 2007";


//  Id pregunta: 5127 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Qu&eacute; son los servicios web?";
 choices[58]= new Array();
 choices[58][0] = "Son los servicios POST y GET de petici&oacute;n de datos mediante formlarios web bajo el protocolo de aplicaci&oacute;n de HTTP";
 choices[58][1] = "Son los servicios de petici&oacute;n de p&aacute;ginas atendidos por un servidor web";
 choices[58][2] = "Una soluci&oacute;n a los problemas de comunicaci&oacute;n entre aplicaciones en la inform&aacute;tica";
 choices[58][3] = "Son los servicios multimedia ofrecido por los nuevos portales web.";
 answers[58] = choices[58][2];
 units[58] = "113";
 comments[58] = "Id Pregunta: 5127. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5148 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3, &iquest;qu&eacute; interface tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un Sistema de Informaci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "Aseguramiento de la Calidad.";
 choices[59][1] = "Seguridad.";
 choices[59][2] = "Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[59][3] = "Gesti&oacute;n de Proyectos.";
 answers[59] = choices[59][3];
 units[59] = "86";
 comments[59] = "Id Pregunta: 5148. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5213 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  El Marco Europeo de Interoperabilidad se construye sobre la base de una serie de principios. Indicar cu&aacute;l de los siguientes no es uno de ellos:";
 choices[60]= new Array();
 choices[60][0] = "Multiling&uuml;ismo";
 choices[60][1] = "Seguridad";
 choices[60][2] = "Protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[60][3] = "Uso de soluciones unilaterales";
 answers[60] = choices[60][3];
 units[60] = "30";
 comments[60] = "Id Pregunta: 5213. ";


//  Id pregunta: 5243 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indique la pr&aacute;ctica cuyo objeto es ayudar a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n, facilitando la asignaci&oacute;n de prioridades dentro de ella:";
 choices[61]= new Array();
 choices[61][0] = "Matriz TOWS";
 choices[61][1] = "An&aacute;lisis coste/beneficio";
 choices[61][2] = "Factores cr&iacute;ticos de &eacute;xito";
 choices[61][3] = "An&aacute;lisis de impacto en la organizaci&oacute;n";
 answers[61] = choices[61][2];
 units[61] = "77";
 comments[61] = "Id Pregunta: 5243. ";


//  Id pregunta: 5248 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n a la Ingenier&iacute;a del Software";
 choices[62]= new Array();
 choices[62][0] = "El tipo de actividades que se desarrollan en Ingenier&iacute;a de Software son de desarrollo, control, gesti&oacute;n y aplicaci&oacute;n";
 choices[62][1] = "Surge como respuesta a la crisis del software con los objetivos de conseguir un producto fiable, de alta calidad y bajo coste y conducir un proceso de desarrollo de manera eficiente";
 choices[62][2] = "La ingenier&iacute;a del software es la aplicaci&oacute;n de un enfoque sistem&aacute;tico, disciplinado y cuantificable hacia el desarrollo, operaci&oacute;n y mantenimiento del software";
 choices[62][3] = "La ingenier&iacute;a del software es una tecnolog&iacute;a multicapa constituida por el proceso, los m&eacute;todos y las herramientas";
 answers[62] = choices[62][0];
 units[62] = "87";
 comments[62] = "Id Pregunta: 5248. ";


//  Id pregunta: 5435 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l es el lugar m&aacute;s conveniente para la instalaci&oacute;n de un CPD de respaldo en la ribera del Pisuerga?";
 choices[63]= new Array();
 choices[63][0] = "La planta m&aacute;s elevada del edificio de usos m&uacute;ltiples";
 choices[63][1] = "Una sala aneja al garaje subterr&aacute;neo";
 choices[63][2] = "La primera planta de un edificio de cinco plantas";
 choices[63][3] = "La planta baja";
 answers[63] = choices[63][2];
 units[63] = "26";
 comments[63] = "Id Pregunta: 5435. Castilla y Le&oacute;n";


//  Id pregunta: 5499 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  Indica cu&aacute;l no es una ventaja de la tecnolog&iacute;a JSF:";
 choices[64]= new Array();
 choices[64][0] = "Ofrece un alto nivel de abstracci&oacute;n en el dise&ntilde;o de la interfaz";
 choices[64][1] = "JSF comparada con otras tecnolog&iacute;as MVC (Spring MVC, Struts, WebWork, Tapestry,&hellip;) est&aacute; mas orientada a componetes y eventos  ";
 choices[64][2] = "Para el desarrollo de aplicaciones se basa en la implementaci&oacute;n de complejas clases Java";
 choices[64][3] = "Permite la creaci&oacute;n de nuevos componentes graficos o widgets";
 answers[64] = choices[64][2];
 units[64] = "116";
 comments[64] = "Id Pregunta: 5499. ";


//  Id pregunta: 5835 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  Las caracter&iacute;sticas del m&eacute;todo Delphi son";
 choices[65]= new Array();
 choices[65][0] = "Confidencialidad, integridad del grupo y disponibilidad";
 choices[65][1] = "Anonimato, realimentaci&oacute;n controlada y respuesta del grupo de forma estad&iacute;stica";
 choices[65][2] = "Criticidad, autenticaci&oacute;n del grupo y consistencia";
 choices[65][3] = "Convergencia, coherencia del grupo y salvaguarda";
 answers[65] = choices[65][1];
 units[65] = "34";
 comments[65] = "Id Pregunta: 5835. MAP 2008 A1";


//  Id pregunta: 5842 Año de creación de pregunta: 2009-01-01
 questions[66]= "67)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[66]= new Array();
 choices[66][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[66][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[66][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[66][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[66] = choices[66][2];
 units[66] = "30";
 comments[66] = "Id Pregunta: 5842. MAP 2008 A1";


//  Id pregunta: 5866 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  El protocolo Secure Shell, definido en la RFC (IETF Request for Comment) 4251:";
 choices[67]= new Array();
 choices[67][0] = "Permite la negociaci&oacute;n de los algoritmos criptogr&aacute;ficos a usar";
 choices[67][1] = "Proporciona, entre otros, los servicios de confidencialidad, no repudio e integridad";
 choices[67][2] = "Opcionalmente admite compresi&oacute;n, que en este caso debe aplicarse tras el cifrado del paquete";
 choices[67][3] = "Trabaja tanto sobre TCP como sobre UDP";
 answers[67] = choices[67][0];
 units[67] = "111";
 comments[67] = "Id Pregunta: 5866. MAP 2008 A1";


//  Id pregunta: 5959 Año de creación de pregunta: 2009-01-01
 questions[68]= "69)  La Ley 11/2007 establece que:";
 choices[68]= new Array();
 choices[68][0] = "Tanto el Esquema Nacional de Interoperabilidad como el Esquema Nacional de Seguridad deben elaborase con la participaci&oacute;n de todas las Administraciones y se aprobar&aacute;n por Real Decreto del Gobierno, no estableciendo esto para el Esquema de Identificaci&oacute;n y Firma Electr&oacute;nica de la Administraci&oacute;n";
 choices[68][1] = "Tanto el Esquema Nacional de Interoperabilidad como el Esquema Nacional de Seguridad y el Esquema de Identificaci&oacute;n y Firma Electr&oacute;nica de la Administraci&oacute;n deben elaborase con la participaci&oacute;n de todas las Administraciones y se aprobar&aacute;n por Real Decreto del Gobierno";
 choices[68][2] = "El Esquema Nacional de Interoperabilidad  y el Esquema de Identificaci&oacute;n y Firma Electr&oacute;nica de la Administraci&oacute;n se aprobar&aacute;n por Real Decreto del Gobierno pero esto no ser&aacute; necesario para el Esquema Nacional de Seguridad";
 choices[68][3] = "El Esquema Nacional de Seguridad y el Esquema de Identificaci&oacute;n y Firma Electr&oacute;nica de la Administraci&oacute;n se aprobar&aacute;n por Real Decreto del Gobierno pero esto no ser&aacute; necesario para el Esquema Nacional de Interoperabilidad";
 answers[68] = choices[68][0];
 units[68] = "43";
 comments[68] = "Id Pregunta: 5959. Art&iacute;culo 42";


//  Id pregunta: 5964 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Seg&uacute;n CMMI, el &aacute;rea de proceso que recopila y armoniza las necesidades de los participantes y las traduce en requisitos del producto se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Verificaci&oacute;n";
 choices[69][1] = "Validaci&oacute;n";
 choices[69][2] = "Gesti&oacute;n de requisitos";
 choices[69][3] = "Desarrollo de requisitos";
 answers[69] = choices[69][3];
 units[69] = "87";
 comments[69] = "Id Pregunta: 5964. Castilla La Mancha 2009";


//  Id pregunta: 5993 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes funciones NO es competencia del Consejo Superior de Administraci&oacute;n Electr&oacute;nica?";
 choices[70]= new Array();
 choices[70][0] = "Actuar como Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[70][1] = "La colaboraci&oacute;n con el Centro Criptol&oacute;gico Nacional del Centro Nacional de Inteligencia en la elaboraci&oacute;n de medidas de seguridad.";
 choices[70][2] = "El control, regulaci&oacute;n y supervisi&oacute;n de los proveedores de accesos a Internet de la Administraci&oacute;n General del Estado.";
 choices[70][3] = "El impulso y la coordinaci&oacute;n de la Administraci&oacute;n Electr&oacute;nica en el seno de la Administraci&oacute;n General del Estado.";
 answers[70] = choices[70][2];
 units[70] = "77";
 comments[70] = "Id Pregunta: 5993. TIC A 2009";


//  Id pregunta: 6053 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  La gesti&oacute;n del alcance de un proyecto de tecnolog&iacute;as de la informaci&oacute;n se suele dividir en 5 etapas; indicar cu&aacute;l de las siguientes NO es una de ellas:";
 choices[71]= new Array();
 choices[71][0] = "Planificaci&oacute;n del alcance.";
 choices[71][1] = "Creaci&oacute;n de la Estructura de Desglose del Trabajo (EDT).";
 choices[71][2] = "Definici&oacute;n del alcance.";
 choices[71][3] = "Estimaci&oacute;n de la duraci&oacute;n de las actividades o trabajos.";
 answers[71] = choices[71][3];
 units[71] = "86";
 comments[71] = "Id Pregunta: 6053. TIC A 2009";


//  Id pregunta: 6212 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  Se&ntilde;ale la sentencia correcta:";
 choices[72]= new Array();
 choices[72][0] = "La complejidad ciclom&aacute;tica es una m&eacute;trica del software que proporciona una medici&oacute;n cualitativa de la complejidad l&oacute;gica de un programa";
 choices[72][1] = "Si se usa la complejidad ciclom&aacute;tica en el contexto del m&eacute;todo de prueba del camino b&aacute;sico, el valor calculado como complejidad ciclom&aacute;tica define el n&uacute;mero de caminos dependientes del conjunto b&aacute;sico de un programa";
 choices[72][2] = "En las pruebas del camino b&aacute;sico, los casos de prueba obtenidos del conjunto b&aacute;sico garantizan que durante la prueba se ejecuta una sola vez cada sentencia del programa";
 choices[72][3] = "Dentro de la prueba del camino b&aacute;sico, un camino independiente est&aacute; constituido por lo menos por una arista que no haya sido recorrida anteriormente a la definici&oacute;n del camino";
 answers[72] = choices[72][3];
 units[72] = "88";
 comments[72] = "Id Pregunta: 6212. TICB-2009, bloque desarrollo";


//  Id pregunta: 6249 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta, de acuerdo con M&eacute;trica 3?";
 choices[73]= new Array();
 choices[73][0] = "El objetivo de la gesti&oacute;n de la configuraci&oacute;n es mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realicen cambios";
 choices[73][1] = "Ejecutables y c&oacute;digo fuente son elementos de configuraci&oacute;n software pero no lo son las especificaciones de requisitos";
 choices[73][2] = "La gesti&oacute;n de configuraci&oacute;n se realiza durante todas las actividades asociadas al desarrollo del sistema, y contin&uacute;a registrando los cambios hasta que &eacute;ste deja de utilizarse";
 choices[73][3] = "La gesti&oacute;n de configuraci&oacute;n aporta informaci&oacute;n precisa para valorar el impacto de los cambios en el mantenimiento correctivo. La gesti&oacute;n de configuraci&oacute;n no contempla el mantenimiento evolutivo";
 answers[73] = choices[73][2];
 units[73] = "86";
 comments[73] = "Id Pregunta: 6249. TICB-2009, bloque desarrollo";


//  Id pregunta: 6367 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Se&ntilde;ale la sentencia correcta, en relaci&oacute;n a la seguridad por defecto definida en el Esquema Nacional de Seguridad:";
 choices[74]= new Array();
 choices[74][0] = "En un sistema de explotaci&oacute;n se eliminar&aacute;n o desactivar&aacute;n, mediante el control de la configuraci&oacute;n, las funciones que no sean de inter&eacute;s, sean innecesarias e, incluso, aquellas que sean inadecuadas al fin que se persigue.";
 choices[74][1] = "El sistema proporcionar&aacute; la funcionalidad requerida para que la organizaci&oacute;n alcance sus objetivos, proveyendo toda funcionalidad adicional posible.";
 choices[74][2] = "Las funciones de operaci&oacute;n, administraci&oacute;n y registro de actividad ser&aacute;n las m&aacute;ximas posibles, y se asegurar&aacute; que s&oacute;lo son accesibles por las personas, o desde emplazamientos o equipos, autorizados, pudiendo exigirse en su caso restricciones de horario y puntos de acceso facultados.";
 choices[74][3] = "Todas las anteriores";
 answers[74] = choices[74][0];
 units[74] = "43";
 comments[74] = "Id Pregunta: 6367. Art&iacute;culo 19 ENS";


//  Id pregunta: 6394 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Es posible establecer la obligaci&oacute;n de comunicarse electr&oacute;nicamente con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes?";
 choices[75]= new Array();
 choices[75][0] = "S&iacute;, en cualquier caso";
 choices[75][1] = "No, en ning&uacute;n caso";
 choices[75][2] = "S&iacute;, en determinados casos previstos y mediante orden ministerial";
 choices[75][3] = "S&iacute;, en determinados casos previstos y mediante resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[75] = choices[75][2];
 units[75] = "43";
 comments[75] = "Id Pregunta: 6394. Art&iacute;culo 32 RD 1671/2009";


//  Id pregunta: 6426 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre sirve para la edici&oacute;n profesional de im&aacute;genes?";
 choices[76]= new Array();
 choices[76][0] = "GIMP";
 choices[76][1] = "Celtx";
 choices[76][2] = "Nvu";
 choices[76][3] = "Rhythmbox";
 answers[76] = choices[76][0];
 units[76] = "62";
 comments[76] = "Id Pregunta: 6426. ";


//  Id pregunta: 6475 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes elementos NO est&aacute; incluido en el directorio privado WEB-INF de una aplicaci&oacute;n Web?";
 choices[77]= new Array();
 choices[77][0] = "Un archivo web.xml";
 choices[77][1] = "Un subdirectorio llamado classes";
 choices[77][2] = "Documentos de Microsoft Office";
 choices[77][3] = "Un subdirectorio lib para contener los archivos JAR utilizados por la aplicaci&oacute;n Web";
 answers[77] = choices[77][2];
 units[77] = "116";
 comments[77] = "Id Pregunta: 6475. Castilla La Mancha 2009";


//  Id pregunta: 6515 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[78]= new Array();
 choices[78][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[78][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[78][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases. ";
 choices[78][3] = "No se permite herencia m&uacute;ltiple.";
 answers[78] = choices[78][2];
 units[78] = "60";
 comments[78] = "Id Pregunta: 6515. ";


//  Id pregunta: 6551 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  Revisar los logs de seguridad es un tipo de seguridad";
 choices[79]= new Array();
 choices[79][0] = "Preventiva";
 choices[79][1] = "De detecci&oacute;n";
 choices[79][2] = "Disuasoria";
 choices[79][3] = "Correctiva";
 answers[79] = choices[79][1];
 units[79] = "111";
 comments[79] = "Id Pregunta: 6551. ";


//  Id pregunta: 6580 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  IPv6";
 choices[80]= new Array();
 choices[80][0] = "Proporciona un formato de cabecera m&aacute;s complejo";
 choices[80][1] = "Proporciona la posibilidad de a&ntilde;adir extensiones pero no opciones";
 choices[80][2] = "A&ntilde;ade posibilidades para gestionar la calidad de servicios";
 choices[80][3] = "Todas las respuestas anteriores son correctas";
 answers[80] = choices[80][2];
 units[80] = "100";
 comments[80] = "Id Pregunta: 6580. ";


//  Id pregunta: 6639 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta cuando hablamos de la m&eacute;trica de Puntos de Funci&oacute;n?";
 choices[81]= new Array();
 choices[81][0] = "Se usa para estimar el tama&ntilde;o del software que se va a desarrollar";
 choices[81][1] = "Se usa para estimar la productividad del software que se va a desarrollar";
 choices[81][2] = "Ve la aplicaci&oacute;n como una caja negra";
 choices[81][3] = "Fue propuesta por Tom De Marco";
 answers[81] = choices[81][3];
 units[81] = "88";
 comments[81] = "Id Pregunta: 6639. ";


//  Id pregunta: 6644 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta en la t&eacute;cnica DELPHI?";
 choices[82]= new Array();
 choices[82][0] = "Intervienen distintos estimadores";
 choices[82][1] = "Dan su estimaci&oacute;n en una reuni&oacute;n conjunta";
 choices[82][2] = "Es un proceso repetitivo";
 choices[82][3] = "Debe existir un coordinador";
 answers[82] = choices[82][1];
 units[82] = "89";
 comments[82] = "Id Pregunta: 6644. ";


//  Id pregunta: 7145 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  En la Ley 11/2007 de 22 de Junio, se regula las condiciones de teletrabajo en la Administraci&oacute;n General del Estado. Estas condiciones deber&iacute;an estar establecidas antes del:";
 choices[83]= new Array();
 choices[83][0] = "1 de marzo de 2008";
 choices[83][1] = "1 de abril de 2008";
 choices[83][2] = "31 de diciembre de 2009";
 choices[83][3] = "31 de diciembre de 2008";
 answers[83] = choices[83][0];
 units[83] = "43";
 comments[83] = "Id Pregunta: 7145. Examen TIC B 2009";


//  Id pregunta: 7289 Año de creación de pregunta: 2010-01-01
 questions[84]= "85)  La recomendaci&oacute;n de la UIT H.323";
 choices[84]= new Array();
 choices[84][0] = "Se utiliza &uacute;nicamente en redes RDSI";
 choices[84][1] = "Permite audioconferencia pero no videoconferencia";
 choices[84][2] = "Se le puede a&ntilde;adir seguridad seg&uacute;n la recomendaci&oacute;n de la UIT H.325";
 choices[84][3] = "Fue definida para redes de conmutaci&oacute;n de circuitos";
 answers[84] = choices[84][2];
 units[84] = "117";
 comments[84] = "Id Pregunta: 7289. Examen TIC B 2009";


//  Id pregunta: 8262 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  &iquest;Qu&eacute; m&eacute;todo NO existe en la clase java HttpServlet?:";
 choices[85]= new Array();
 choices[85][0] = "doPut";
 choices[85][1] = "doTrace.";
 choices[85][2] = "doErrorC";
 choices[85][3] = "doOptions.";
 answers[85] = choices[85][2];
 units[85] = "116";
 comments[85] = "Id Pregunta: 8262. Examen TIC A1 2010";


//  Id pregunta: 8511 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  De las siguientes normas, &iquest;cu&aacute;l est&aacute; referida al c&oacute;digo de buenas pr&aacute;cticas en gesti&oacute;n de la seguridad de la Informaci&oacute;n? ";
 choices[86]= new Array();
 choices[86][0] = "ISO/lEC 13335-2. ";
 choices[86][1] = "ISO/lEC 17799:2005. ";
 choices[86][2] = "UNE 71502:2004. ";
 choices[86][3] = "ISO 10646. ";
 answers[86] = choices[86][1];
 units[86] = "111";
 comments[86] = "Id Pregunta: 8511. Examen TIC A2 2010";


//  Id pregunta: 8536 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  La tecnolog&iacute;a HSDPA presenta una capacidad m&aacute;xima de transferencia de informaci&oacute;n de:";
 choices[87]= new Array();
 choices[87][0] = "10,8 Mbps te&oacute;ricos.";
 choices[87][1] = "14 Mbps";
 choices[87][2] = "2 Mbps";
 choices[87][3] = "384 Kbps";
 answers[87] = choices[87][1];
 units[87] = "108";
 comments[87] = "Id Pregunta: 8536. Examen TIC A2 2010 interna";


//  Id pregunta: 8776 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  &iquest;Que puerto utiliza NNTP?";
 choices[88]= new Array();
 choices[88][0] = "119";
 choices[88][1] = "53";
 choices[88][2] = "137";
 choices[88][3] = "139";
 answers[88] = choices[88][0];
 units[88] = "112";
 comments[88] = "Id Pregunta: 8776. Examen UPM A2 2011";


//  Id pregunta: 8947 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  Seg&uacute;n el Esquema Nacional de Seguridad, &iquest;cu&aacute;ndo se deben registrar todas las actividades de los usuarios en el sistema?";
 choices[89]= new Array();
 choices[89][0] = "Cuando la categor&iacute;a del sistema sea alta";
 choices[89][1] = "Cuando as&iacute; lo decida el responsable de los servidores";
 choices[89][2] = "Cuando la dimensi&oacute;n de trazabilidad sea de nivel alto";
 choices[89][3] = "En todos los casos anteriores";
 answers[89] = choices[89][2];
 units[89] = "43";
 comments[89] = "Id Pregunta: 8947. ";


//  Id pregunta: 8948 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;En qu&eacute; caso ser&iacute;a suficiente una autoevaluaci&oacute;n como auditor&iacute;a al sistema de informaci&oacute;n seg&uacute;n el RD 3/2010?";
 choices[90]= new Array();
 choices[90][0] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica";
 choices[90][1] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o inferior";
 choices[90][2] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o media";
 choices[90][3] = "Cuando as&iacute; lo decida el responsable de seguridad competente";
 answers[90] = choices[90][1];
 units[90] = "43";
 comments[90] = "Id Pregunta: 8948. ";


//  Id pregunta: 8979 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de virtualizaci&oacute;n?";
 choices[91]= new Array();
 choices[91][0] = "XEN";
 choices[91][1] = "KVM";
 choices[91][2] = "UML";
 choices[91][3] = "Todas lo son";
 answers[91] = choices[91][3];
 units[91] = "119";
 comments[91] = "Id Pregunta: 8979. ";


//  Id pregunta: 8995 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  El protocolo SSL (Secure Sockets Layer)";
 choices[92]= new Array();
 choices[92][0] = "Proporciona conexiones seguras s&oacute;lo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[92][1] = "No garantiza la integridad de la informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[92][2] = "Es una capa de seguridad que opera siempre sobre protocolo UDP.";
 choices[92][3] = "Proporciona conexiones seguras sobre una red insegura garantizando la integridad de los datos transmitidos, privacidad de la conexi&oacute;n y autentificaci&oacute;n del cliente y servidor.";
 answers[92] = choices[92][3];
 units[92] = "111";
 comments[92] = "Id Pregunta: 8995. Examen UPM A2 2011";


//  Id pregunta: 9012 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  Las p&eacute;rdidas debidas a absorci&oacute;n por gases atmosf&eacute;ricos deben tenerse en cuenta en:";
 choices[93]= new Array();
 choices[93][0] = "Radioenlaces de frecuencias superiores a 30 GHz.";
 choices[93][1] = "Radioenlaces de frecuencias superiores a 3 GHz.";
 choices[93][2] = "Radioenlaces de frecuencias superiores a 300 MHz.";
 choices[93][3] = "Radioenlaces de frecuencias superiores a 300 kHz";
 answers[93] = choices[93][1];
 units[93] = "108";
 comments[93] = "Id Pregunta: 9012. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9067 Año de creación de pregunta: 2030-01-01
 questions[94]= "95)  Seg&uacute;n el RD 1671/2009 cu&aacute;l de los siguientes elementos no es un contenido obligatorio del recibo electr&oacute;nico que deber&aacute;n emitir los registros electr&oacute;nicos";
 choices[94]= new Array();
 choices[94][0] = "N&uacute;mero de entrada de registro";
 choices[94][1] = "Informaci&oacute;n del plazo m&aacute;ximo establecido para la resoluci&oacute;n del procedimiento";
 choices[94][2] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada y de los documentos adjuntos";
 choices[94][3] = "Todos las respuestas anteriores forman parte del contenido que debe tener el recibo de un registro electr&oacute;nico ";
 answers[94] = choices[94][2];
 units[94] = "43";
 comments[94] = "Id Pregunta: 9067. ";


//  Id pregunta: 9070 Año de creación de pregunta: 2013-01-01
 questions[95]= "96)  &iquest;Cu&aacute;ntas gu&iacute;as de accesibilidad del WAI existen actualmente (abril de 2013)?";
 choices[95]= new Array();
 choices[95][0] = "Tres: ATAG, WCAG y UUAG. ";
 choices[95][1] = "Seis: ATAG, WCAG, UAAG, XAG, FCAG y WAI-RIA. ";
 choices[95][2] = "Cuatro: ATAG, WCAG, UAAG y XAG. ";
 choices[95][3] = "Cinco: ATAG, WCAG, UAAG, XAG y WAI-RIA. ";
 answers[95] = choices[95][3];
 units[95] = "39";
 comments[95] = "Id Pregunta: 9070. ";


//  Id pregunta: 9083 Año de creación de pregunta: 2013-01-01
 questions[96]= "97)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale la afirmaci&oacute;n FALSA en relaci&oacute;n a la Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[96]= new Array();
 choices[96][0] = "Es fundamental que la alta direcci&oacute;n tome parte activa en la decisi&oacute;n del PSI para garantizar su &eacute;xito";
 choices[96][1] = "En cualquier caso, como paso previo para detectar aspectos importantes que puedan afectar a la organizaci&oacute;n, es necesario investigar sus puntos fuertes, &aacute;reas de mejora, riesgos y amenazas posibles y hacer un diagn&oacute;stico de los mismos.";
 choices[96][2] = "Dentro del Plan de Acci&oacute;n se incluye un calendario de proyectos, con posibles alternativas, y una estimaci&oacute;n de recursos, cuyo detalle ser&aacute; mayor para los m&aacute;s inmediatos.";
 choices[96][3] = "La elaboraci&oacute;n de un nuevo Plan de Sistemas de Informaci&oacute;n debe partir de cero, y no tener en cuenta las planificaciones estrat&eacute;gicas realizadas en periodos anteriores";
 answers[96] = choices[96][3];
 units[96] = "77";
 comments[96] = "Id Pregunta: 9083. ";


//  Id pregunta: 9089 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[97]= new Array();
 choices[97][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[97][1] = "A traves de la ley de patentes";
 choices[97][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[97][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[97] = choices[97][3];
 units[97] = "36";
 comments[97] = "Id Pregunta: 9089. ";


//  Id pregunta: 9376 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  En la Teor&iacute;a Decisi&oacute;n Multicriterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo obtiene como resultado un subconjunto de alternativas aceptables";
 choices[98]= new Array();
 choices[98][0] = "M&eacute;todos de concordancia";
 choices[98][1] = "M&eacute;todos basados en permutaciones";
 choices[98][2] = "M&eacute;todos basados en la ponderaci&oacute;n lineal";
 choices[98][3] = "M&eacute;todo T.O.P.S.I.S.";
 answers[98] = choices[98][0];
 units[98] = "34";
 comments[98] = "Id Pregunta: 9376. ";


//  Id pregunta: 9593 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  El Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, establece el contenido m&iacute;nimo de las sedes electr&oacute;nicas. Entre dicho contenido m&iacute;nimo est&aacute;:";
 choices[99]= new Array();
 choices[99][0] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas.";
 choices[99][1] = "Identificaci&oacute;n de la direcci&oacute;n electr&oacute;nica del responsable t&eacute;cnico de la sede.";
 choices[99][2] = "&Aacute;mbito de aplicaci&oacute;n de la sede, que no podr&aacute; ser la totalidad del Ministerio u organismo p&uacute;blico.";
 choices[99][3] = "Identificaci&oacute;n de los canales de acceso a los servicios disponibles en la sede, los cuales no podr&aacute;n tratarse, en ning&uacute;n caso, de tel&eacute;fonos y oficinas, sino de canales exclusivamente electr&oacute;nicos. ";
 answers[99] = choices[99][0];
 units[99] = "43";
 comments[99] = "Id Pregunta: 9593. Examen TIC A2 2011 interna";


