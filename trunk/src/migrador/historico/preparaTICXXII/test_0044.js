/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 17 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l no es una metodolog&iacute;a de planificaci&oacute;n de la capacidad?:";
 choices[0]= new Array();
 choices[0][0] = "Reglas basadas en el conocimiento";
 choices[0][1] = "M&eacute;todos anal&iacute;ticos";
 choices[0][2] = "Benchmark";
 choices[0][3] = "Simulaci&oacute;n";
 answers[0] = choices[0][0];
 units[0] = "25";
 comments[0] = "Id Pregunta: 17. metodolog&iacute;a de planificaci&oacute;n de sistemas";


//  Id pregunta: 22 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;C&oacute;mo se denomina al derecho o facultad que se reconoce al afectado para recabar informaci&oacute;n gratuita sobre sus datos de car&aacute;cter personal, ya est&eacute;n incluidos o vayan a ser tratados?:";
 choices[1]= new Array();
 choices[1][0] = "Derecho de informaci&oacute;n";
 choices[1][1] = "Derecho de acceso";
 choices[1][2] = "Derecho de consulta al Registro General de Protecci&oacute;n de Datos";
 choices[1][3] = "Derecho de cancelaci&oacute;n";
 answers[1] = choices[1][1];
 units[1] = "29";
 comments[1] = "Id Pregunta: 22. ";


//  Id pregunta: 105 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Andrea Zerilli realiz&oacute; estudios sobre:";
 choices[2]= new Array();
 choices[2][0] = "Teor&iacute;a de redes";
 choices[2][1] = "Investigaci&oacute;n operativa y teletr&aacute;fico";
 choices[2][2] = "Metodolog&iacute;a de desarrollo";
 choices[2][3] = "Organizaci&oacute;n de empresas";
 answers[2] = choices[2][3];
 units[2] = "22";
 comments[2] = "Id Pregunta: 105. ";


//  Id pregunta: 260 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Hay muchas organizaciones diferentes de normalizaci&oacute;n, pero una de las siguientes no est&aacute; entre ellas. &iquest;Cu&aacute;l?:";
 choices[3]= new Array();
 choices[3][0] = "ISO ";
 choices[3][1] = "ANSI  ";
 choices[3][2] = "CEPT";
 choices[3][3] = "OSI";
 answers[3] = choices[3][3];
 units[3] = "42";
 comments[3] = "Id Pregunta: 260. ";


//  Id pregunta: 296 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  La determinaci&oacute;n del nivel aceptable de seguridad corresponde a una pol&iacute;tica de:";
 choices[4]= new Array();
 choices[4][0] = "Aceptar el riesgo";
 choices[4][1] = "Evitar el riesgo";
 choices[4][2] = "Traspasar el riesgo";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][1];
 units[4] = "33";
 comments[4] = "Id Pregunta: 296. ";


//  Id pregunta: 307 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  La fidelidad con que un modelo representa la realidad depende fundamentalmente de:";
 choices[5]= new Array();
 choices[5][0] = "La precisi&oacute;n de los valores previstos de variables incontrolables";
 choices[5][1] = "La calidad de los datos";
 choices[5][2] = "El tratamiento de la incertidumbre";
 choices[5][3] = "Todas las respuestas anteriores son correctas";
 answers[5] = choices[5][3];
 units[5] = "34";
 comments[5] = "Id Pregunta: 307. ";


//  Id pregunta: 328 Año de creación de pregunta: 2009-01-01
 questions[6]= "7)  Los ficheros con datos de car&aacute;cter personal de &aacute;mbito departamental, usualmente soportados por herramientas ofim&aacute;ticas de usuario final:";
 choices[6]= new Array();
 choices[6][0] = "Precisan ser declarados por el organismo pero no inscritos en el registro de ficheros de la agencia de protecci&oacute;n de datos.";
 choices[6][1] = "No precisan ser declarados pero s&iacute; ser inscritos en el registro de la agencia de protecci&oacute;n de datos.";
 choices[6][2] = "Se caracterizan como de nivel b&aacute;sico en el RD 1720/2007 por las plataformas en las que se soportan.";
 choices[6][3] = "Se tratan a todos los efectos como el resto de ficheros de datos de car&aacute;cter personal con las consideraciones introducidas por el RD 1720/2007.";
 answers[6] = choices[6][3];
 units[6] = "29";
 comments[6] = "Id Pregunta: 328. ";


//  Id pregunta: 335 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  La posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes, se conoce como:";
 choices[7]= new Array();
 choices[7][0] = "Interoperabilidad";
 choices[7][1] = "Escalabilidad";
 choices[7][2] = "Portabilidad";
 choices[7][3] = "Integrabilidad";
 answers[7] = choices[7][2];
 units[7] = "40";
 comments[7] = "Id Pregunta: 335. ";


//  Id pregunta: 389 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  No es un instrumento b&aacute;sico de un DSS orientado a datos:";
 choices[8]= new Array();
 choices[8][0] = "Informe resumen";
 choices[8][1] = "Informe de relaci&oacute;n";
 choices[8][2] = "Informe de excepci&oacute;n";
 choices[8][3] = "Informe gr&aacute;fico";
 answers[8] = choices[8][1];
 units[8] = "21";
 comments[8] = "Id Pregunta: 389. ";


//  Id pregunta: 518 Año de creación de pregunta: 2003-01-01
 questions[9]= "10)  Una de las organizaciones que lucha internacionalmente contra la pirater&iacute;a inform&aacute;tica es";
 choices[9]= new Array();
 choices[9][0] = "BSA";
 choices[9][1] = "RSA";
 choices[9][2] = "ESA";
 choices[9][3] = "EIT";
 answers[9] = choices[9][0];
 units[9] = "36,37";
 comments[9] = "Id Pregunta: 518. ";


//  Id pregunta: 650 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  Para que la certificaci&oacute;n ofrezca garant&iacute;as de imparcialidad resulta esencial:";
 choices[10]= new Array();
 choices[10][0] = "Que est&eacute; homologada";
 choices[10][1] = "Que la expida o la controle un organismo independiente";
 choices[10][2] = "Que la controle un organismo administrativo";
 choices[10][3] = "Que la expida AENOR";
 answers[10] = choices[10][1];
 units[10] = "42";
 comments[10] = "Id Pregunta: 650. ";


//  Id pregunta: 755 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  En Java, respecto a la herencia de clases ...";
 choices[11]= new Array();
 choices[11][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[11][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[11][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[11][3] = "Todas las anteriores son falsas";
 answers[11] = choices[11][3];
 units[11] = "60";
 comments[11] = "Id Pregunta: 755. ";


//  Id pregunta: 809 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Acerca de la memoria virtual, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[12]= new Array();
 choices[12][0] = "Se distingue el mapa de direcciones l&oacute;gicas o virtual y el mapa de direcciones f&iacute;sicas o reales. Las direcciones f&iacute;sicas y l&oacute;gicas son del mismo tama&ntilde;o";
 choices[12][1] = "Con paginaci&oacute;n se resuelven todos los problemas de fragmentaci&oacute;n de memoria";
 choices[12][2] = "Obliga a tener en memoria principal todo el contenido del programa durante la ejecuci&oacute;n";
 choices[12][3] = "Con memoria segmentada se complica la traducci&oacute;n de direcciones";
 answers[12] = choices[12][3];
 units[12] = "47";
 comments[12] = "Id Pregunta: 809. ";


//  Id pregunta: 1182 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indique la afirmaci&oacute;n falsa sobre sistemas en tiempo real.";
 choices[13]= new Array();
 choices[13][0] = "El sistema operativo de tiempo real deber&aacute; contar con gesti&oacute;n de memoria virtual.";
 choices[13][1] = "Los sistemas de tiempo real se basan en la realimentaci&oacute;n de la informaci&oacute;n.";
 choices[13][2] = "El sistema deber&aacute; permanecer pr&aacute;cticamente inactivo para poder atender con la mayor rapidez posible cualquier evento de entrada.";
 choices[13][3] = "El sistema operativo de tiempo real deber&aacute; contar con bloqueo de los procesos cuando est&eacute;n espera y, normalmente, gesti&oacute;n FIFO de las colas de procesos bloqueados.";
 answers[13] = choices[13][0];
 units[13] = "83";
 comments[13] = "Id Pregunta: 1182. ";


//  Id pregunta: 1216 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  La deducci&oacute;n por medio de los sistemas de Kleene en inteligencia artificial hace referencia a:";
 choices[14]= new Array();
 choices[14][0] = "La orientaci&oacute;n heur&iacute;stica";
 choices[14][1] = "La orientaci&oacute;n l&oacute;gica";
 choices[14][2] = "La representaci&oacute;n del conocimiento";
 choices[14][3] = "Las redes sem&aacute;nticas";
 answers[14] = choices[14][1];
 units[14] = "63";
 comments[14] = "Id Pregunta: 1216. ";


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


//  Id pregunta: 1685 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  Sobre el e-learnig";
 choices[16]= new Array();
 choices[16][0] = "Es el uso de las tecnolog&iacute;as multimedia para mejorar y desarrollar nuevas estrategias de aprendizaje";
 choices[16][1] = "Algunas de las facilidades que aporta el e-learning son la accesibilidad geogr&aacute;fica y la flexibilidad en el tiempo";
 choices[16][2] = "Las dos afirmaciones anteriores son correctas";
 choices[16][3] = "Todas las afirmaciones anteriores son falsas";
 answers[16] = choices[16][2];
 units[16] = "66";
 comments[16] = "Id Pregunta: 1685. ";


//  Id pregunta: 1721 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Cu&aacute;l es la misi&oacute;n del planificador (scheduler) de un SO";
 choices[17]= new Array();
 choices[17][0] = "Seleccionar el proceso que se va a ejecutar a continuaci&oacute;n";
 choices[17][1] = "Poner en ejecuci&oacute;n el proceso seleccionado";
 choices[17][2] = "Controlar la memoria principal";
 choices[17][3] = "Expulsar al proceso en ejecuci&oacute;n";
 answers[17] = choices[17][0];
 units[17] = "52";
 comments[17] = "Id Pregunta: 1721. ";


//  Id pregunta: 1902 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  Cada uno de los multiples elementos utilizados internamente por el procesador para el de almacenamiento de datos intermedios en la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[18]= new Array();
 choices[18][0] = "registro";
 choices[18][1] = "cache";
 choices[18][2] = "buffer";
 choices[18][3] = "pipelining";
 answers[18] = choices[18][0];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1902. ";


//  Id pregunta: 2044 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  Seg&uacute;n el PGGC, si el nivel de intensidad es 2, el procedimiento de control de calidad a utilizar ser&aacute;:";
 choices[19]= new Array();
 choices[19][0] = "Revisi&oacute;n T&eacute;cnica Formal";
 choices[19][1] = "Auditor&iacute;a de Calidad";
 choices[19][2] = "Inspecci&oacute;n Detallada";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][2];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2044. ";


//  Id pregunta: 2187 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l no es una caracter&iacute;stica com&uacute;n a todas las metodolog&iacute;as?:";
 choices[20]= new Array();
 choices[20][0] = "Diccionario de datos";
 choices[20][1] = "Prototipado";
 choices[20][2] = "Cubre todos los aspectos de un sistema de aplicaci&oacute;n: desde el organizativo , hasta el sistema t&eacute;cnico de apoyo";
 choices[20][3] = "An&aacute;lisis de riesgo";
 answers[20] = choices[20][1];
 units[20] = "79,85";
 comments[20] = "Id Pregunta: 2187. ";


//  Id pregunta: 2279 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  El m&eacute;todo de los puntos de funci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Es dependiente del lenguaje de programaci&oacute;n que se use";
 choices[21][1] = "S&oacute;lo se aplica a proyectos en los que no se pueda usar COCOMO";
 choices[21][2] = "Se basa en el uso de una relaci&oacute;n emp&iacute;rica";
 choices[21][3] = "No es subjetivo, es muy objetivo";
 answers[21] = choices[21][2];
 units[21] = "89";
 comments[21] = "Id Pregunta: 2279. ";


//  Id pregunta: 2329 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  En la programaci&oacute;n orientada a objetos, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?:";
 choices[22]= new Array();
 choices[22][0] = "La herencia define una relaci&oacute;n entre clases, donde una clase comparte la estructura o comportamiento definido en una o m&aacute;s clases";
 choices[22][1] = "La encapsulaci&oacute;n es el proceso de ocultaci&oacute;n de los detalles internos o de implementaci&oacute;n de un objeto";
 choices[22][2] = "Un objeto es una instancia de una clase y cada clase tiene cero o m&aacute;s instancias";
 choices[22][3] = "Las instancias de una metaclase no son clases";
 answers[22] = choices[22][3];
 units[22] = "82";
 comments[22] = "Id Pregunta: 2329. ";


//  Id pregunta: 2682 Año de creación de pregunta: 2003-01-01
 questions[23]= "24)  Indique la afirmaci&oacute;n verdadera:";
 choices[23]= new Array();
 choices[23][0] = "El reconocimiento de patrones se utiliza para reconocer caracteres mono-espaciados.";
 choices[23][1] = "En la comparaci&oacute;n matricial los caracteres explorados pueden entrar en un bucle de b&uacute;squeda varias veces hasta que el emparejamiento se realiza con &eacute;xito.";
 choices[23][2] = "La comparaci&oacute;n matricial escanea la forma de los caracteresm, los compara con tablas de formas y examina la organizaci&oacute;n de los bits para  componer la letra o car&aacute;cter.";
 choices[23][3] = "La comparaci&oacute;n matricial ofrece mucha m&aacute;s flexibilidad que el m&eacute;todo de reconocimiento de patrones.";
 answers[23] = choices[23][1];
 units[23] = "94";
 comments[23] = "Id Pregunta: 2682. ";


//  Id pregunta: 2739 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes elementos no es propio de un DFD (Diagrama de Flujo de Datos)?";
 choices[24]= new Array();
 choices[24][0] = "Entidades externas al sistema";
 choices[24][1] = "Bucles";
 choices[24][2] = "Almac&eacute;n de datos";
 choices[24][3] = "Procesos";
 answers[24] = choices[24][1];
 units[24] = "79,81";
 comments[24] = "Id Pregunta: 2739. ";


//  Id pregunta: 2836 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  El concepto de Mejora Continua en el &aacute;mbito de la Calidad se debe a ";
 choices[25]= new Array();
 choices[25][0] = "Stewart";
 choices[25][1] = "Crosby";
 choices[25][2] = "Fraunhoffer";
 choices[25][3] = "Deming";
 answers[25] = choices[25][3];
 units[25] = "92";
 comments[25] = "Id Pregunta: 2836. ";


//  Id pregunta: 2949 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  ActiveX s&oacute;lo puede ejecutarse en:";
 choices[26]= new Array();
 choices[26][0] = "Java";
 choices[26][1] = "UNIX";
 choices[26][2] = "Microsoft/Intel";
 choices[26][3] = "Virtual Machine";
 answers[26] = choices[26][2];
 units[26] = "114";
 comments[26] = "Id Pregunta: 2949. Similar a examen TIC SS A 2003";


//  Id pregunta: 2953 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[27]= new Array();
 choices[27][0] = "CSMA/CD";
 choices[27][1] = "Token bus";
 choices[27][2] = "Token Ring";
 choices[27][3] = "Aloha ranurado";
 answers[27] = choices[27][1];
 units[27] = "101, 102";
 comments[27] = "Id Pregunta: 2953. Similar a examen TIC SS A 2003";


//  Id pregunta: 3087 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se dice que una l&iacute;nea es 'full duplex' cuando:";
 choices[28]= new Array();
 choices[28][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea, tiene que usarla de forma alternativa en cada sentido de transmisi&oacute;n";
 choices[28][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir simult&aacute;neamente sin restricciones";
 choices[28][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[28][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 answers[28] = choices[28][1];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3087. ";


//  Id pregunta: 3307 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales no dise&ntilde;ados para conectarse directamente a la RDSI, como un terminal telef&oacute;nico convencional &oacute; m&aacute;quina de fax convencional (Grupo III), con el equipo Adaptador de Terminal?: ";
 choices[29]= new Array();
 choices[29][0] = "R";
 choices[29][1] = "S";
 choices[29][2] = "T";
 choices[29][3] = "U";
 answers[29] = choices[29][0];
 units[29] = "103";
 comments[29] = "Id Pregunta: 3307. ";


//  Id pregunta: 3328 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[30]= new Array();
 choices[30][0] = "applet";
 choices[30][1] = "cookie";
 choices[30][2] = "socket";
 choices[30][3] = "control activeX";
 answers[30] = choices[30][1];
 units[30] = "113";
 comments[30] = "Id Pregunta: 3328. ";


//  Id pregunta: 3377 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  El est&aacute;ndar X.25 usa, a nivel de enlace, el protocolo:";
 choices[31]= new Array();
 choices[31][0] = "SDLC";
 choices[31][1] = "LAP-B";
 choices[31][2] = "Ethernet";
 choices[31][3] = "SAP";
 answers[31] = choices[31][1];
 units[31] = "100, 101, 109";
 comments[31] = "Id Pregunta: 3377. ";


//  Id pregunta: 3627 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  La operaci&oacute;n de gateways se entronca en:";
 choices[32]= new Array();
 choices[32][0] = "El nivel de enlace";
 choices[32][1] = "El nivel de aplicaci&oacute;n";
 choices[32][2] = "Interconexi&oacute;n de sistemas homogeneos";
 choices[32][3] = "Encaminadores y puentes";
 answers[32] = choices[32][1];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3627. ";


//  Id pregunta: 3653 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  UDDI: ";
 choices[33]= new Array();
 choices[33][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[33][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[33][2] = "Significa User Definition Domain  Interface";
 choices[33][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[33] = choices[33][3];
 units[33] = "69";
 comments[33] = "Id Pregunta: 3653. ";


//  Id pregunta: 3957 Año de creación de pregunta: 2003-01-01
 questions[34]= "35)  La especificaci&oacute;n H.323:";
 choices[34]= new Array();
 choices[34][0] = "Ha sido creada por la ISO, y define un conjunto de protocolos para transmitir voz, video y datos sobre IP";
 choices[34][1] = "Emplea a su vez otras especificaciones, como H.225 y H.245";
 choices[34][2] = "Hace uso del protocolo RTP para establecer las llamadas sobre la red IP";
 choices[34][3] = "Las respuestas b) y c) son correctas";
 answers[34] = choices[34][1];
 units[34] = "107";
 comments[34] = "Id Pregunta: 3957. ";


//  Id pregunta: 4026 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  W-CDMA permite a UMTS trasmitir datos en un rango de velocidades que van desde los 144 Kbps a los 384 Kbps y hasta 2 Mbps en interior de edificios. Pero, &iquest;qu&eacute; t&eacute;cnica de duplexi&oacute;n usa W-CDMA?";
 choices[35]= new Array();
 choices[35][0] = "TDD";
 choices[35][1] = "FDD";
 choices[35][2] = "Las dos anteriores";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][2];
 units[35] = "108";
 comments[35] = "Id Pregunta: 4026. ";


//  Id pregunta: 4113 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre NFS:";
 choices[36]= new Array();
 choices[36][0] = "NFS es un sistema de archivos distribuido para un entorno de red de &aacute;rea local.";
 choices[36][1] = "Permite acceder a ficheros remotos como si fueran ficheros del sistema local siempre que se est&eacute; dentro de la misma red de &aacute;rea local.";
 choices[36][2] = "Originalmente fue desarrollado por Sun Microsystems.";
 choices[36][3] = "Todas las anteriores son ciertas.";
 answers[36] = choices[36][3];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4113. ";


//  Id pregunta: 4125 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  Lenguaje de marca que utiliza s&iacute;mbolos autodefinidos e ilimitados";
 choices[37]= new Array();
 choices[37][0] = "HTML";
 choices[37][1] = "XHTML";
 choices[37][2] = "XML";
 choices[37][3] = "W3C";
 answers[37] = choices[37][2];
 units[37] = "112,69";
 comments[37] = "Id Pregunta: 4125. ";


//  Id pregunta: 4152 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  Protocolo cliente/servidor que permite la autenticaci&oacute;n y control de acceso de usuarios PPP";
 choices[38]= new Array();
 choices[38][0] = "ACF2";
 choices[38][1] = "RACF";
 choices[38][2] = "RADIUS";
 choices[38][3] = "Kerberos";
 answers[38] = choices[38][2];
 units[38] = "111";
 comments[38] = "Id Pregunta: 4152. ";


//  Id pregunta: 4216 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  El entorno Microsoft, WebDAV";
 choices[39]= new Array();
 choices[39][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio";
 choices[39][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e intranets";
 choices[39][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red";
 choices[39][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos";
 answers[39] = choices[39][1];
 units[39] = "115";
 comments[39] = "Id Pregunta: 4216. ";


//  Id pregunta: 4267 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos se basa en el logaritmo discreto el&iacute;ptico";
 choices[40]= new Array();
 choices[40][0] = "RSA";
 choices[40][1] = "RW";
 choices[40][2] = "Diffie-Hellman";
 choices[40][3] = "DSAE";
 answers[40] = choices[40][3];
 units[40] = "73";
 comments[40] = "Id Pregunta: 4267. ";


//  Id pregunta: 4295 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Un diagrama de Secuencia de UML:";
 choices[41]= new Array();
 choices[41][0] = "Representa los componentes del sistema y las dependencias existentes entre ellos.";
 choices[41][1] = "Hace hincapi&eacute; en la ordenaci&oacute;n temporal de los mensajes que se intercambian.";
 choices[41][2] = "Establece las relaciones que existen entre los objetos y las clases.";
 choices[41][3] = "Establece los estados y las transiciones entre los estados de los elementos del sistema.";
 answers[41] = choices[41][1];
 units[41] = "82";
 comments[41] = "Id Pregunta: 4295. ";


//  Id pregunta: 4301 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  Un diagrama de transici&oacute;n de estados, utilizando como t&eacute;cnica en M&eacute;trica Versi&oacute;n 3:";
 choices[42]= new Array();
 choices[42][0] = "Puede tener varios estados iniciales y varios estados finales.";
 choices[42][1] = "S&oacute;lo puede tener un estado inicial y un estado final";
 choices[42][2] = "Puede tener varios estados iniciales y s&oacute;lo un estado final.";
 choices[42][3] = "S&oacute;lo puede tener un estado inicial y puede tener varios estados finales.";
 answers[42] = choices[42][3];
 units[42] = "86";
 comments[42] = "Id Pregunta: 4301. ";


//  Id pregunta: 4329 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  Un centro alternativo de tratamiento de la informaci&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Debe ser identificable desde el exterior, para que sea f&aacute;cilmente localizado en caso de emergencia.";
 choices[43][1] = "Debe tener las mismas restricciones de acceso f&iacute;sico que la instalaci&oacute;n principal.";
 choices[43][2] = "Debe estar ubicado en las proximidades de la instalaci&oacute;n principal, as&iacute; se puede poner en operaci&oacute;n inmediatamente.";
 choices[43][3] = "No necesita disponer del mismo nivel de supervisi&oacute;n ni controles ambientales que la instalaci&oacute;n principal, porque los costes ser&iacute;an prohibitivos.";
 answers[43] = choices[43][1];
 units[43] = "33";
 comments[43] = "Id Pregunta: 4329. ";


//  Id pregunta: 4339 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Una importante desventaja de emplear una topolog&iacute;a de conmutadores (switchs) jer&aacute;rquica en una LAN es";
 choices[44]= new Array();
 choices[44][0] = "El coste, pues se deben utilizar muchos conmutadores.";
 choices[44][1] = "La dependencia de un solo proveedor, ya que todos han de ser compatibles.";
 choices[44][2] = "Que una ca&iacute;da de un conmutador dejar&aacute; a dos subredes incomunicadas.";
 choices[44][3] = "Su obsolescencia, ya que es una topolog&iacute;a de los a&ntilde;os 80.";
 answers[44] = choices[44][2];
 units[44] = "100";
 comments[44] = "Id Pregunta: 4339. ";


//  Id pregunta: 4393 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, cuando estamos hablando del mantenimiento del software?";
 choices[45]= new Array();
 choices[45][0] = "Un sistema de informaci&oacute;n debe concebirse como algo est&aacute;tico, que permanece invariable desde que se crea hasta su extinci&oacute;n, pues de otro modo, nunca se pueden estabilizar los requisitos funcionales de dicho sistema.";
 choices[45][1] = "Los productos software requieren una evoluci&oacute;n continua durante todo su ciclo de vida para irse adaptando a las nuevas necesidades.";
 choices[45][2] = "La evoluci&oacute;n del sistema de informaci&oacute;n tiene como finalidad &uacute;ltima su adecuaci&oacute;n al entorno, de forma que se adapte para realizar nuevas funciones, trabajar m&aacute;s efectivamente o m&aacute;s correctamente.";
 choices[45][3] = "La necesidad de evoluci&oacute;n de los sistemas de informaci&oacute;n hace muy recomendable utilizar una metodolog&iacute;a fiable que permita gestionar los cambios y evaluar el correcto funcionamiento del sistema una vez realizados los cambios necesarios.";
 answers[45] = choices[45][0];
 units[45] = "76";
 comments[45] = "Id Pregunta: 4393. ";


//  Id pregunta: 4483 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cual de las siguientes sentencias es falsa?";
 choices[46]= new Array();
 choices[46][0] = "Una aplicaci&oacute;n ASP.NET se corresponde con un directorio virtual y todos los objetos ASP.NET incluidos en el mismo directorio virtual constituyen una aplicaci&oacute;n ASP.NET";
 choices[46][1] = "ADO.NET es el servicio de acceso a datos asociado a ASP.NET";
 choices[46][2] = "ASP.NET ofrece dos grupos de controles: controles Web y controles HTML";
 choices[46][3] = "Un formulario ASP.NET es un archivo HTML que se guarda en un fichero con extensi&oacute;n .net";
 answers[46] = choices[46][3];
 units[46] = "59";
 comments[46] = "Id Pregunta: 4483. ";


//  Id pregunta: 4514 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  En el modelo relacional se denomina dominio de un atributo a:";
 choices[47]= new Array();
 choices[47][0] = "El conjunto de valores permitidos para ese atributo.";
 choices[47][1] = "El peso del atributo, es decir si forma parte de una clave candidata o no.";
 choices[47][2] = "La clasificaci&oacute;n de los atributos de una relaci&oacute;n entre dominantes y dominados.";
 choices[47][3] = "El orden de los valores de ese atributo para todas las tuplas de la relaci&oacute;n donde se encuentra definido.";
 answers[47] = choices[47][0];
 units[47] = "58";
 comments[47] = "Id Pregunta: 4514. ";


//  Id pregunta: 4546 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  La capa de adaptaci&oacute;n de ATM (AAL o ATM Adaptation Layer) com&uacute;nmente utilizada para la transmisi&oacute;n de datagramas IP sobre redes ATM es:";
 choices[48]= new Array();
 choices[48][0] = "AAL 5.";
 choices[48][1] = "AAL 1.";
 choices[48][2] = "AAL 3/4.";
 choices[48][3] = "AAL 2.";
 answers[48] = choices[48][0];
 units[48] = "109";
 comments[48] = "Id Pregunta: 4546. ";


//  Id pregunta: 4555 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  En CMMi, Ia Process Area (PA) de Gesti&oacute;n de Riesgos (Risk Management) corresponde al Nivel";
 choices[49]= new Array();
 choices[49][0] = "Nivel 2 (Gestionado)";
 choices[49][1] = "Nivel 3 (Definido)";
 choices[49][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[49][3] = "Nivel 5 (Optimizando)";
 answers[49] = choices[49][1];
 units[49] = "87";
 comments[49] = "Id Pregunta: 4555. ";


//  Id pregunta: 4606 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cual de las siguientes t&eacute;cnicas NO es de gesti&oacute;n de proyectos?";
 choices[50]= new Array();
 choices[50][0] = "m&eacute;todo MARKII para el An&aacute;lisis de los Puntos Funci&oacute;n";
 choices[50][1] = "Diagrama de extrapolaci&oacute;n";
 choices[50][2] = "staffing size";
 choices[50][3] = "Joint Requirements Planning";
 answers[50] = choices[50][3];
 units[50] = "28";
 comments[50] = "Id Pregunta: 4606. ";


//  Id pregunta: 4610 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  El nivel de madurez que se caracteriza como est&aacute;ndar y consistente es el";
 choices[51]= new Array();
 choices[51][0] = "nivel 3";
 choices[51][1] = "nivel4";
 choices[51][2] = "nivel 5";
 choices[51][3] = "nivel 6";
 answers[51] = choices[51][0];
 units[51] = "98";
 comments[51] = "Id Pregunta: 4610. ";


//  Id pregunta: 4757 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un control de prioridad 1 de las directrices de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[52]= new Array();
 choices[52][0] = "Para cualquier presentaci&oacute;n multimedia basada en tiempo (p.ej., una pel&iacute;cula o animaci&oacute;n), sincronice alternativas equivalentes (p.ej., subt&iacute;tulos o descripciones auditivas de la pista visual) con la presentaci&oacute;n";
 choices[52][1] = "Use hojas de estilo para controlar la composici&oacute;n y la presentaci&oacute;n.";
 choices[52][2] = "Identifique claramente los cambios en el lenguaje natural del texto de un documento y de cualquier equivalente de texto (p.ej., subt&iacute;tulos).";
 choices[52][3] = "Para tablas de datos, identifique encabezados de fila y columna.";
 answers[52] = choices[52][1];
 units[52] = "39";
 comments[52] = "Id Pregunta: 4757. ";


//  Id pregunta: 4812 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[53]= new Array();
 choices[53][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[53][1] = "Las comunicaciones comerciales";
 choices[53][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[53][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[53] = choices[53][0];
 units[53] = "30";
 comments[53] = "Id Pregunta: 4812. ";


//  Id pregunta: 4857 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real DecretoLegislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, enlo referente al software, establece que son objeto de protecci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Exclusivamente los programas de ordenador, entendidos como secuencias de instrucciones o indicacionesdestinadas a ser utilizadas en un sistema inform&aacute;tico para realizar una determinada funci&oacute;n o tarea";
 choices[54][1] = "Los programas de ordenador y su documentaci&oacute;n preparatoria, comprendi&eacute;ndose en dicho concepto ladocumentaci&oacute;n t&eacute;cnica y los manuales de uso del programa";
 choices[54][2] = "Los programas de ordenador y todas las definiciones documentadas de sus interfaces que posibilitan el usocolaborativo del software";
 choices[54][3] = "&Uacute;nicamente los algoritmos y conceptos inventivos documentados en los que se basan cualquiera de loselementos de los programas de ordenador";
 answers[54] = choices[54][1];
 units[54] = "36";
 comments[54] = "Id Pregunta: 4857. ";


//  Id pregunta: 4902 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  Una vez adjudicado de forma provisional el contrato a uno de los licitadores, &iquest;qu&eacute; tanto por ciento del importe final de adjudicaci&oacute;n debe depositar el adjudicatario en concepto de fianza definitiva (art&iacute;culo 95 del RD Legislativo 3/2011)?";
 choices[55]= new Array();
 choices[55][0] = "Del 5% del importe de licitaci&oacute;n, IVA incluido";
 choices[55][1] = "Del 4% del importe de adjudicaci&oacute;n";
 choices[55][2] = "Del 5% del importe de adjudicaci&oacute;n, excluido el IVA";
 choices[55][3] = "Del 3% del importe de adjudicaci&oacute;n";
 answers[55] = choices[55][2];
 units[55] = "41";
 comments[55] = "Id Pregunta: 4902. ";


//  Id pregunta: 5008 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[56]= new Array();
 choices[56][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[56][1] = "Es independiente del sistema operativo";
 choices[56][2] = "Es independiente de la base de datos";
 choices[56][3] = "Es un tipo de API";
 answers[56] = choices[56][0];
 units[56] = "58";
 comments[56] = "Id Pregunta: 5008. Examen TIC A 2007";


//  Id pregunta: 5043 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l es la naturaleza j&uacute;ridica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos?";
 choices[57]= new Array();
 choices[57][0] = "Organismo aut&oacute;nomo";
 choices[57][1] = "Entidad P&uacute;blica Empresarial";
 choices[57][2] = "Ente de Derecho p&uacute;blico regulado por su legislaci&oacute;n espec&iacute;fica";
 choices[57][3] = "Agencia Estatal de las previstas en la Ley 28/2006, de 18 de julio. (Art. 35 LO 13/1999 y Disposici&oacute;nadicional d&eacute;cima de la LOFAGE)";
 answers[57] = choices[57][2];
 units[57] = "29";
 comments[57] = "Id Pregunta: 5043. Examen TIC A 2007";


//  Id pregunta: 5051 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes elementos no es utilizado por Java 2?:";
 choices[58]= new Array();
 choices[58][0] = "Enteros";
 choices[58][1] = "Booleanos";
 choices[58][2] = "Cadenas";
 choices[58][3] = "Tensores";
 answers[58] = choices[58][3];
 units[58] = "60";
 comments[58] = "Id Pregunta: 5051. Examen TIC A 2007";


//  Id pregunta: 5078 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public KeyInfrastructures)? :";
 choices[59]= new Array();
 choices[59][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica";
 choices[59][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido";
 choices[59][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;npermitidas para dicho certificado";
 choices[59][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet";
 answers[59] = choices[59][3];
 units[59] = "74";
 comments[59] = "Id Pregunta: 5078. Examen TIC A 2007";


//  Id pregunta: 5098 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Muy grave";
 choices[60][1] = "Grave";
 choices[60][2] = "Leve ";
 choices[60][3] = "No est&aacute; tipificado tal importe";
 answers[60] = choices[60][1];
 units[60] = "30";
 comments[60] = "Id Pregunta: 5098. ";


//  Id pregunta: 5172 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  En el protocolo IPSEC, una asociaci&oacute;n de seguridad (SA) queda un&iacute;vocamente identificada por medio de:";
 choices[61]= new Array();
 choices[61][0] = "Una direcci&oacute;n IP";
 choices[61][1] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI)";
 choices[61][2] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI) y un puerto de comunicaci&oacute;n TCP.";
 choices[61][3] = "Una direcci&oacute;n IP y un &Iacute;ndice de Par&aacute;metro de Seguridad (SPI).";
 answers[61] = choices[61][3];
 units[61] = "111";
 comments[61] = "Id Pregunta: 5172. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5178 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  La t&eacute;cnica PIECES define las categor&iacute;as que deben estudiar conjuntamente el analista y el usuario. &iquest;Cu&aacute;l no es un conjunto valido de categor&iacute;as seg&uacute;n PIECES?";
 choices[62]= new Array();
 choices[62][0] = "Rendimiento, Econom&iacute;a y Control";
 choices[62][1] = "Control, Eficiencia y Servicios";
 choices[62][2] = "Informaci&oacute;n, Eficiencia y Servicios";
 choices[62][3] = "Informaci&oacute;n, Precio y Rendimiento";
 answers[62] = choices[62][3];
 units[62] = "78";
 comments[62] = "Id Pregunta: 5178. ";


//  Id pregunta: 5477 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  Que aspecto debe considerarse a la hora de efectuar una planificaci&oacute;n estrat&eacute;gica";
 choices[63]= new Array();
 choices[63][0] = "La misi&oacute;n del negocio";
 choices[63][1] = "La situaci&oacute;n de los competidores";
 choices[63][2] = "Los hitos en el calendario de actuaci&oacute;n";
 choices[63][3] = "Deben considerarse los aspectos anteriores";
 answers[63] = choices[63][3];
 units[63] = "77";
 comments[63] = "Id Pregunta: 5477. Castilla y Le&oacute;n";


//  Id pregunta: 5507 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  Qu&eacute; formato se emplea para la emision de facturas electr&oacute;nicas por parte de la AGE?";
 choices[64]= new Array();
 choices[64][0] = "XBRL";
 choices[64][1] = "ebXML";
 choices[64][2] = "UBL";
 choices[64][3] = "Facturae";
 answers[64] = choices[64][3];
 units[64] = "70";
 comments[64] = "Id Pregunta: 5507. ";


//  Id pregunta: 5512 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  La red de conexi&oacute;n r&aacute;pida inaugurada por la Uni&oacute;n Europea en 2005 para atender la interconexi&oacute;n de investigadores europeos se denomina:";
 choices[65]= new Array();
 choices[65][0] = "TEIN2";
 choices[65][1] = "GEANT2";
 choices[65][2] = "ALICE";
 choices[65][3] = "DANTE";
 answers[65] = choices[65][1];
 units[65] = "103";
 comments[65] = "Id Pregunta: 5512. ";


//  Id pregunta: 5515 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Indique cu&aacute;l de los siguientes no es un servidor de aplicaciones para servicios web:";
 choices[66]= new Array();
 choices[66][0] = "JONAS";
 choices[66][1] = "XIMDEX";
 choices[66][2] = "WEBSPHERE";
 choices[66][3] = "WEBLOGIC";
 answers[66] = choices[66][1];
 units[66] = "115,116";
 comments[66] = "Id Pregunta: 5515. ";


//  Id pregunta: 5521 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  La fase del procedimiento de digitalizaci&oacute;n en la que se intenta mejorar el aspecto del documento digital utilizando algoritmos matem&aacute;ticos es";
 choices[67]= new Array();
 choices[67][0] = "Adquisici&oacute;n del documento digital o escaneado";
 choices[67][1] = "Procesado del documento digital";
 choices[67][2] = "Almacenamiento y gesti&oacute;n";
 choices[67][3] = "Presentaci&oacute;n del documento digital";
 answers[67] = choices[67][1];
 units[67] = "93";
 comments[67] = "Id Pregunta: 5521. ";


//  Id pregunta: 5606 Año de creación de pregunta: 2003-01-01
 questions[68]= "69)  &iquest;En qu&eacute; Real Decreto se establece la elaboraci&oacute;n de un Plan Director de Telecomunicaciones como herramienta de planificaci&oacute;n en el &aacute;mbito de cada departamento ministerial?";
 choices[68]= new Array();
 choices[68][0] = "En el RD 551/2001";
 choices[68][1] = "En el 541/2002";
 choices[68][2] = "En el 451/2002";
 choices[68][3] = "En el 541/2001";
 answers[68] = choices[68][3];
 units[68] = "104";
 comments[68] = "Id Pregunta: 5606. ";


//  Id pregunta: 5702 Año de creación de pregunta: 2003-01-01
 questions[69]= "70)  Cual de los siguientes no se encuentra entre los beneficios que puede obtener una organizaci&oacute;n que adopte SOA:";
 choices[69]= new Array();
 choices[69][0] = "Mejora en la interoperabilidad de servicios";
 choices[69][1] = "Facilidad para el desarrollo de aplicaciones fuertemente acopladas ";
 choices[69][2] = "Facilidad para abordar modelos de negocios basados en colaboraci&oacute;n con otros entes (socios, proveedores)";
 choices[69][3] = "Poder para reemplazar elementos de la capa de aplicai&oacute;n sin disrupci&oacute;n en el proceso de negocio";
 answers[69] = choices[69][1];
 units[69] = "51";
 comments[69] = "Id Pregunta: 5702. ";


//  Id pregunta: 5720 Año de creación de pregunta: 2009-01-01
 questions[70]= "71)  En an&aacute;lisis de XML, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[70]= new Array();
 choices[70][0] = "El modelo DOM procesa el documento XML completo y lo almacena en memoria";
 choices[70][1] = "En el modelo SAX puede procesar el documento XML a trav&eacute;s de eventos";
 choices[70][2] = "El modelo SAX procesa el documento XML y genera un &aacute;rbol";
 choices[70][3] = "El modelo DOM procesa el documento XML y lo modeliza en forma de &aacute;rbol";
 answers[70] = choices[70][2];
 units[70] = "69";
 comments[70] = "Id Pregunta: 5720. MAP 2008 A1";


//  Id pregunta: 5814 Año de creación de pregunta: 2009-01-01
 questions[71]= "72)  &iquest;Qu&eacute; deber&aacute; publicarse, en todo caso, en el perfil de contratante, seg&uacute;n el RD Legislativo 3/2011 de Contatos del Sector P&uacute;blico(art&iacute;culo 53.2)?";
 choices[71]= new Array();
 choices[71][0] = "Las adjudicaciones definitivas de los contratos";
 choices[71][1] = "Los anuncios de licitaci&oacute;n";
 choices[71][2] = "La adjudicaci&oacute;n provisional de los contratos";
 choices[71][3] = "Las licitaciones abiertas";
 answers[71] = choices[71][2];
 units[71] = "41";
 comments[71] = "Id Pregunta: 5814. ";


//  Id pregunta: 5859 Año de creación de pregunta: 2009-01-01
 questions[72]= "73)  Indique la ventaja de los sistemas RFID (Radio Frecuency Identification) de baja frecuencia:";
 choices[72]= new Array();
 choices[72][0] = "Soportan la lectura simult&aacute;nea de varias etiquetas";
 choices[72][1] = "El coste de las etiquetas es bajo debido al peque&ntilde;o tama&ntilde;o de su antena";
 choices[72][2] = "Poseen alta tasas de transmisi&oacute;n";
 choices[72][3] = "Su se&ntilde;al atraviesa materiales tales como el agua, la madera y el aluminio";
 answers[72] = choices[72][3];
 units[72] = "74";
 comments[72] = "Id Pregunta: 5859. Pregunta 39";


//  Id pregunta: 5893 Año de creación de pregunta: 2009-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es JNI?";
 choices[73]= new Array();
 choices[73][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[73][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[73][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][1];
 units[73] = "60";
 comments[73] = "Id Pregunta: 5893. ";


//  Id pregunta: 5910 Año de creación de pregunta: 2009-01-01
 questions[74]= "75)  &iquest;Qu&eacute; NO garantiza el Servicio Universal contemplado por la Ley 9/2014, General de Telecomunicaciones?";
 choices[74]= new Array();
 choices[74][0] = "El ciudadano podr&aacute; elegir, para la prestaci&oacute;n de este servicio, a cualquiera de los operadores registrados a nivel nacional";
 choices[74][1] = "Todos los usuarios finales podr&aacute;n obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico";
 choices[74][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica";
 choices[74][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[74] = choices[74][0];
 units[74] = "110";
 comments[74] = "Id Pregunta: 5910. MAP 2008 A1";


//  Id pregunta: 5978 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  La banda de 26 GHz se utiliza para:";
 choices[75]= new Array();
 choices[75][0] = "UMTS.";
 choices[75][1] = "LMDS.";
 choices[75][2] = "WiFi.";
 choices[75][3] = "Bluetooth.";
 answers[75] = choices[75][1];
 units[75] = "107";
 comments[75] = "Id Pregunta: 5978. TIC A 2009";


//  Id pregunta: 6001 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Los Estados Miembros est&aacute;n obligados a garantizar, a trav&eacute;s de ventanillas &uacute;nicas, a los prestadores de servicios la posibilidad de llevar a cabo las declaraciones, notificaciones o solicitudes necesarias para la autorizaci&oacute;n por parte de las autoridades competentes. &iquest;En que Directiva se regula esta obligaci&oacute;n?";
 choices[76]= new Array();
 choices[76][0] = "En la Directiva 2000/31/CE, relativa a determinados aspectos jur&iacute;dicos del comercio electr&oacute;nico en el mercado interior.";
 choices[76][1] = "No existe esta obligaci&oacute;n por parte de los Estados Miembros, y por tanto ninguna Directiva la regula.";
 choices[76][2] = "En la Directiva 2006/31/CE, relativa a la armonizaci&oacute;n de las actividades de servicios con contenido econ&oacute;mico en el mercado interior.";
 choices[76][3] = "En la Directiva 2006/123/CE, relativa a los servicios en el mercado interior.";
 answers[76] = choices[76][3];
 units[76] = "30";
 comments[76] = "Id Pregunta: 6001. TIC A 2009";


//  Id pregunta: 6113 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre &quot;grid computing&quot; es FALSA:";
 choices[77]= new Array();
 choices[77][0] = "La escalabilidad parametrizable es una caracter&iacute;stica muy importante de esta arquitectura.";
 choices[77][1] = "Son sistemas homog&eacute;neos.";
 choices[77][2] = "Los nodos no tienen que estar dedicados.";
 choices[77][3] = "Se puede conseguir cerca de un 100 % de utilizaci&oacute;n de la CPU.";
 answers[77] = choices[77][1];
 units[77] = "45";
 comments[77] = "Id Pregunta: 6113. TIC A 2009";


//  Id pregunta: 6124 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[78]= new Array();
 choices[78][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[78][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[78][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[78][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros";
 answers[78] = choices[78][3];
 units[78] = "86";
 comments[78] = "Id Pregunta: 6124. TIC A 2009";


//  Id pregunta: 6442 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  Seg&uacute;n la normativa en materia de normalizaci&oacute;n en el campo de las tecnolog&iacute;as de la informaci&oacute;n y las telecomunicaciones, se obliga a usar normas europeas e Internacionales en la Adquisici&oacute;n de Bienes y Servicios TIC, y NO es una excepci&oacute;n:";
 choices[79]= new Array();
 choices[79][0] = "Continuidad de funcionamiento";
 choices[79][1] = "Naturaleza innovadora de algunos proyectos";
 choices[79][2] = "Soluci&oacute;n de coste excesivo. Cuando tras un estudio de mercado, existan razones relacionadas con la efectividad del coste que hacen inadecuada el uso de la norma.";
 choices[79][3] = "Compras menores o iguales a 100.000 euros.";
 answers[79] = choices[79][3];
 units[79] = "41";
 comments[79] = "Id Pregunta: 6442. Castilla La Mancha 2009";


//  Id pregunta: 6508 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  En un entorno UNIX/Linux, los procesos no interactivos o de background se denominan:";
 choices[80]= new Array();
 choices[80][0] = "Zombies";
 choices[80][1] = "Swaps";
 choices[80][2] = "Pipes";
 choices[80][3] = "Daemons";
 answers[80] = choices[80][3];
 units[80] = "53";
 comments[80] = "Id Pregunta: 6508. ";


//  Id pregunta: 6541 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  Una tarjeta de memoria";
 choices[81]= new Array();
 choices[81][0] = "Puede procesar informaci&oacute;n";
 choices[81][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[81][2] = "Nunca puede procesar informaci&oacute;n";
 choices[81][3] = "Son un tipo de tarjeta inteligente";
 answers[81] = choices[81][2];
 units[81] = "111";
 comments[81] = "Id Pregunta: 6541. ";


//  Id pregunta: 6566 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  UMTS ";
 choices[82]= new Array();
 choices[82][0] = "Reutiliza el subsistema de red de GSM";
 choices[82][1] = "Reutiliza el subsistema de red de GPRS";
 choices[82][2] = "El sistema de acceso radio es nuevo";
 choices[82][3] = "Todas las respuestas anteriores son ciertas";
 answers[82] = choices[82][3];
 units[82] = "108";
 comments[82] = "Id Pregunta: 6566. ";


//  Id pregunta: 6576 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  Un protocolo de tunelado";
 choices[83]= new Array();
 choices[83][0] = "Mueve tramas de una red a otra";
 choices[83][1] = "Coloca dichas tramas en tramas encapsuladas enrutables";
 choices[83][2] = "A y B son correctas";
 choices[83][3] = "A y B son incorrectas";
 answers[83] = choices[83][2];
 units[83] = "101";
 comments[83] = "Id Pregunta: 6576. ";


//  Id pregunta: 7246 Año de creación de pregunta: 2010-01-01
 questions[84]= "85)  &iquest;Qu&eacute; valor tiene el primer n&uacute;mero de una red de clase C en internet?";
 choices[84]= new Array();
 choices[84][0] = "Menor o igual que 127";
 choices[84][1] = "Entre 192 y 223";
 choices[84][2] = "Mayor o igual que 224";
 choices[84][3] = "Entre 128 y 191";
 answers[84] = choices[84][1];
 units[84] = "100";
 comments[84] = "Id Pregunta: 7246. Examen TIC B 2009";


//  Id pregunta: 8190 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[85]= new Array();
 choices[85][0] = "Mercado &uacute;nico digital din&aacute;mico. ";
 choices[85][1] = "Acceso ultrarr&aacute;pido a Internet. ";
 choices[85][2] = "Nativos digitales. ";
 choices[85][3] = "Inclusi&oacute;n digital. ";
 answers[85] = choices[85][2];
 units[85] = "30";
 comments[85] = "Id Pregunta: 8190. Examen TIC A1 2010";


//  Id pregunta: 8339 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;En qu&eacute; se diferencian JRP y JAD?";
 choices[86]= new Array();
 choices[86][0] = "El JRP es una t&eacute;cnica de estimaci&oacute;n y el JAD es una t&eacute;cnica de captura de requisitos.";
 choices[86][1] = "El JRP es un modelo de cido de vida utilizado en el desarrollo de aplicaciones mientras que el JAD es una IDE (Integrated Development Environment) empleada en JAVA.";
 choices[86][2] = "Son distintas herramientas que permiten la gesti&oacute;n de la configuraci&oacute;n del software.";
 choices[86][3] = "Son sesiones de trabajos que permiten identificar los requisitos de un sistema. Se diferencian en los perfiles que act&uacute;an en ellas y en los resultados de &eacute;stas.";
 answers[86] = choices[86][3];
 units[86] = "86";
 comments[86] = "Id Pregunta: 8339. Examen TIC A2 2010";


//  Id pregunta: 8624 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  &iquest;Qu&eacute; es el World Wide Name (WWN)?";
 choices[87]= new Array();
 choices[87][0] = "Un identificador &uacute;nico de 8 byles en una red de almacenamiento";
 choices[87][1] = "Uno de los servidores DNS ra&iacute;z";
 choices[87][2] = "Un nuevo dominio de Internet basado en IPv6 que va a sustituir los actuales dominios basados en IPv4.";
 choices[87][3] = "Un protocolo que permite identificar un equipo y sus recursos con independencia del tipo de red y sistema operativo";
 answers[87] = choices[87][0];
 units[87] = "48";
 comments[87] = "Id Pregunta: 8624. Examen TIC A2 2010 interna";


//  Id pregunta: 8660 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  La se&ntilde;ales de banda Ku, &iquest;en que rango de frecuencias trabajan?";
 choices[88]= new Array();
 choices[88][0] = "1-8 MHz";
 choices[88][1] = "4-8 GHz";
 choices[88][2] = "12-18 GHz";
 choices[88][3] = "4-8 MHz";
 answers[88] = choices[88][2];
 units[88] = "108";
 comments[88] = "Id Pregunta: 8660. Examen UPM A2 2011";


//  Id pregunta: 8749 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[89]= new Array();
 choices[89][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[89][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[89][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[89][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[89] = choices[89][1];
 units[89] = "43";
 comments[89] = "Id Pregunta: 8749. Examen TIC A2 2010 interna";


//  Id pregunta: 8783 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes sentencias pertenece al lenguaje de definici&oacute;n de datos (LDD) de SQL?";
 choices[90]= new Array();
 choices[90][0] = "ROLLBACK";
 choices[90][1] = "UPDATE";
 choices[90][2] = "GRANT";
 choices[90][3] = "TRUNCATE";
 answers[90] = choices[90][3];
 units[90] = "57, 58";
 comments[90] = "Id Pregunta: 8783. Examen UPM A2 2011";


//  Id pregunta: 8905 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  FTP es un protocolo de la pila TCP/IP:";
 choices[91]= new Array();
 choices[91][0] = "Del nivel de Aplicaci&oacute;n.";
 choices[91][1] = "Del nivel de Transporte.";
 choices[91][2] = "Del nivel de Red.";
 choices[91][3] = "De nivel de Sesi&oacute;n";
 answers[91] = choices[91][0];
 units[91] = "100";
 comments[91] = "Id Pregunta: 8905. Operador Ayto. Madrid 2010";


//  Id pregunta: 8926 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  Es una caracter&iacute;stica de la fibra &oacute;ptica:";
 choices[92]= new Array();
 choices[92][0] = "Un ancho de banda de 800Mhz.";
 choices[92][1] = "Gran resistencia a interferencias y ruido.";
 choices[92][2] = "El bajo coste de su instalaci&oacute;n.";
 choices[92][3] = "La facilidad de su instalaci&oacute;n";
 answers[92] = choices[92][1];
 units[92] = "99";
 comments[92] = "Id Pregunta: 8926. Operador Ayto. Madrid 2010";


//  Id pregunta: 8930 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes archivos no utiliza el formato de archivo ZIP?";
 choices[93]= new Array();
 choices[93][0] = "WAR";
 choices[93][1] = "EAR";
 choices[93][2] = "JAR";
 choices[93][3] = "Todos los anteriores lo usan";
 answers[93] = choices[93][3];
 units[93] = "116";
 comments[93] = "Id Pregunta: 8930. ";


//  Id pregunta: 9002 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Seg&uacute;n la LOPD &iquest;cu&aacute;l de los siguientes no es un criterio conforme al cu&aacute;l se grad&uacute;e  la cuant&iacute;a de las sanciones?";
 choices[94]= new Array();
 choices[94][0] = "El grado de intencionalidad.";
 choices[94][1] = "El volumen de negocio o actividad del infractor.";
 choices[94][2] = "La vinculaci&oacute;n de la actividad del infractor con la realizaci&oacute;n de tratamientos de datos de car&aacute;cter personal.";
 choices[94][3] = "La acreditaci&oacute;n de que con anterioridad a los hechos constitutivos de infracci&oacute;n la entidad imputada no ten&iacute;a implantados procedimientos adecuados de actuaci&oacute;n en la recogida y tratamiento de los datos de car&aacute;cter personal.";
 answers[94] = choices[94][3];
 units[94] = "29";
 comments[94] = "Id Pregunta: 9002. ";


//  Id pregunta: 9178 Año de creación de pregunta: 2013-01-01
 questions[95]= "96)  Si hablamos de formatos para el almacenamiento de ficheros de im&aacute;genes, &iquest;cu&aacute;l de ellos puede considerarse una extensi&oacute;n de los dem&aacute;s, y permite el almacenamiento de cualquier tipo de fichero, no &uacute;nicamente gr&aacute;fico?:";
 choices[95]= new Array();
 choices[95][0] = "PAM";
 choices[95][1] = "PBM";
 choices[95][2] = "PGM";
 choices[95][3] = "PPM";
 answers[95] = choices[95][0];
 units[95] = "93";
 comments[95] = "Id Pregunta: 9178. ";


//  Id pregunta: 9244 Año de creación de pregunta: 2013-01-01
 questions[96]= "97)  &iquest;C&oacute;mo divide el software Ubuntu?";
 choices[96]= new Array();
 choices[96][0] = "En secciones llamadas componentes.";
 choices[96][1] = "Los componentes principales son main, restricted, universe, commercial y multiverse.";
 choices[96][2] = "El componente multiverse contiene los paquetes sin soporte debido a que no cumple los requisitos de Software Libre.";
 choices[96][3] = "Todas son correctas.";
 answers[96] = choices[96][3];
 units[96] = "54";
 comments[96] = "Id Pregunta: 9244. ";


//  Id pregunta: 9272 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  El tama&ntilde;o m&aacute;ximo de archivos que puede manejar FAT32 es: ";
 choices[97]= new Array();
 choices[97][0] = "32MB";
 choices[97][1] = "1GB";
 choices[97][2] = "2GB";
 choices[97][3] = "4GB";
 answers[97] = choices[97][3];
 units[97] = "54";
 comments[97] = "Id Pregunta: 9272. Examen TICA2-2011";


//  Id pregunta: 9619 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;En qu&eacute; parte del SO Windows se encuentra el Dispatcher?";
 choices[98]= new Array();
 choices[98][0] = "Ejecutivo";
 choices[98][1] = "Microkernel";
 choices[98][2] = "HAL";
 choices[98][3] = "Drivers";
 answers[98] = choices[98][1];
 units[98] = "56";
 comments[98] = "Id Pregunta: 9619. ";


//  Id pregunta: 10560 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Los controles compensatorios tienen como objetivo:";
 choices[99]= new Array();
 choices[99][0] = "reducir el riesgo ante una debilidad existente";
 choices[99][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[99][2] = "Solucionar problemas detectados por controles detectivos";
 choices[99][3] = "Reportar errores";
 answers[99] = choices[99][0];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10560. Las opciones B, C y D son caracter&iacute;sticas de  controles preventivo, correctivo y detectivo respectivamente.";


