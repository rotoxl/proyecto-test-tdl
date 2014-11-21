/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 83 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; se entiende por outsourcing?:";
 choices[0]= new Array();
 choices[0][0] = "Cuando se ve agotada la capacidad del sistema";
 choices[0][1] = "Cuando las fuentes de informaci&oacute;n del sistema son externas al mismo";
 choices[0][2] = "Cuando la provisi&oacute;n de equipos o servicios del sistema es realizada por terceros";
 choices[0][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[0] = choices[0][2];
 units[0] = "35";
 comments[0] = "Id Pregunta: 83. ";


//  Id pregunta: 124 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El  m&eacute;todo de ordenaci&oacute;n de alternativas que incorpora la posibilidad de valorar el riesgo y la incertidumbre es:";
 choices[1]= new Array();
 choices[1][0] = "El m&eacute;todo Promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "El m&eacute;todo de permutaci&oacute;n";
 choices[1][3] = "Ninguno de los restantes";
 answers[1] = choices[1][1];
 units[1] = "34";
 comments[1] = "Id Pregunta: 124. ";


//  Id pregunta: 332 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  En la Teor&iacute;a de Decisi&oacute;n Multicriterio Discreta (DMD), la normalizaci&oacute;n de puntuaciones:";
 choices[2]= new Array();
 choices[2][0] = "Homogeiniza las puntuaciones a una escala com&uacute;n (0,1)";
 choices[2][1] = "Permite la comparaci&oacute;n de criterios no homog&eacute;neos, medidos con unidades distintas y de distinto tipo (cuantitativos y cualitativos)";
 choices[2][2] = "Permite comparar criterio de sentido diferente (m&aacute;ximo, m&iacute;nimo)";
 choices[2][3] = "Todas las respuestas son correctas";
 answers[2] = choices[2][3];
 units[2] = "34";
 comments[2] = "Id Pregunta: 332. ";


//  Id pregunta: 544 Año de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Existe el concepto de 'copia privada' en la actual legislaci&oacute;n de propiedad intelectual?";
 choices[3]= new Array();
 choices[3][0] = "Si, es un derecho por el cual no es necesaria la autorizaci&oacute;n del creador de una obra ya divulgada para proceder a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[3][1] = "Si, pero no como copia leg&iacute;tima";
 choices[3][2] = "Si, es un derecho por el cual, previa autorizaci&oacute;n del creador de una obra ya divulgada, se procede a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[3][3] = "No";
 answers[3] = choices[3][0];
 units[3] = "36,37";
 comments[3] = "Id Pregunta: 544. LPI de 1996";


//  Id pregunta: 624 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  El m&eacute;todo en el que con criterios el decisor estima una matriz (nxn) A=(a,), donde a es la medida subjetiva de la importancia relativa del criterio i frente al j en una escala normalizada de 1 (igual de importante) a 9 (absolutamente m&aacute;s importante) es:";
 choices[4]= new Array();
 choices[4][0] = "m&eacute;todo Delphi";
 choices[4][1] = "m&eacute;todo de las utilidades relativas";
 choices[4][2] = "m&eacute;todo de la entrop&iacute;a";
 choices[4][3] = "AHP (Analytic Hierarchy Process)";
 answers[4] = choices[4][3];
 units[4] = "34";
 comments[4] = "Id Pregunta: 624. ";


//  Id pregunta: 814 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Apache:";
 choices[5]= new Array();
 choices[5][0] = "Es un servidor web disponible para plataformas Windows";
 choices[5][1] = "Es una licencia para software libre";
 choices[5][2] = "Es el servidor web libre m&aacute;s utilizado en sistemas Unix/Linux";
 choices[5][3] = "Todas las respuestas anteriores son correctas";
 answers[5] = choices[5][3];
 units[5] = "62";
 comments[5] = "Id Pregunta: 814. ";


//  Id pregunta: 891 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;les son las tecnolog&iacute;as b&aacute;sicas usadas en la gesti&oacute;n de entornos distribuidos?:";
 choices[6]= new Array();
 choices[6][0] = "Agentes inteligentes";
 choices[6][1] = "Agentes propietarios, est&aacute;ndar y proxys";
 choices[6][2] = "Protocolos SNMP y CMIP";
 choices[6][3] = "Las tres respuestas anteriores son correctas";
 answers[6] = choices[6][2];
 units[6] = "62,98";
 comments[6] = "Id Pregunta: 891. ";


//  Id pregunta: 960 Año de creación de pregunta: 2005-01-01
 questions[7]= "8)  Con respecto a X.500 y LDAP, indicar la respuesta incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "X.500 utiliza ASN.1 para la formaci&oacute;n de los mensajes, y LDAP utiliza cadenas de caracteres simples para la representaci&oacute;n de Distinguished Names ";
 choices[7][1] = "LDAP no posee el servicio de modificaci&oacute;n REMOVE perteneciente a DAP";
 choices[7][2] = "X.500 y LDAP funcionan sobre la pila de protocolos OSI y TCP/IP respectivamente";
 choices[7][3] = "Un dominio de gesti&oacute;n de directorio est&aacute; formado, como m&iacute;nimo, por: 1 DSA, 1 DUA y 1 esquema (visi&oacute;n externa del dominio)";
 answers[7] = choices[7][3];
 units[7] = "73";
 comments[7] = "Id Pregunta: 960. ";


//  Id pregunta: 1432 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  XML:";
 choices[8]= new Array();
 choices[8][0] = "Es un lenguaje de presentaci&oacute;n, similar a HTML, pero m&aacute;s avanzado";
 choices[8][1] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos";
 choices[8][2] = "Es similar a HTML pero con una orientaci&oacute;n hacia el mundo del dise&ntilde;o dado que permite realizar maginas web mas vistosas y din&aacute;micas";
 choices[8][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[8] = choices[8][1];
 units[8] = "69";
 comments[8] = "Id Pregunta: 1432. ";


//  Id pregunta: 1433 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  XQL es:";
 choices[9]= new Array();
 choices[9][0] = "Extended Query Language";
 choices[9][1] = "XML Query Language";
 choices[9][2] = "No se corresponde con ningun acr&oacute;nimo usado en inform&aacute;tica o telecomunicaciones";
 choices[9][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[9] = choices[9][1];
 units[9] = "69";
 comments[9] = "Id Pregunta: 1433. ";


//  Id pregunta: 1781 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  Cual de los siguientes no forma parte del paquete Open Office";
 choices[10]= new Array();
 choices[10][0] = "Impress";
 choices[10][1] = "Calc";
 choices[10][2] = "Math";
 choices[10][3] = "Text";
 answers[10] = choices[10][3];
 units[10] = "61,62";
 comments[10] = "Id Pregunta: 1781. ";


//  Id pregunta: 2038 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  En el Modelo de Excelencia de la EFQM, &iquest;Cu&aacute;l de los siguientes no es un criterio de calidad que act&uacute;e como agente facilitador del &eacute;xito?";
 choices[11]= new Array();
 choices[11][0] = "Liderazgo";
 choices[11][1] = "Pol&iacute;ticas y Estrategias";
 choices[11][2] = "Satisfacci&oacute;n del Personal";
 choices[11][3] = "Todos son agentes facilitadores";
 answers[11] = choices[11][2];
 units[11] = "92";
 comments[11] = "Id Pregunta: 2038. ";


//  Id pregunta: 2104 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Se desea establecer un sistema de salvaguarda de informaci&oacute;n (back-up) que asegure una p&eacute;rdida potencial m&aacute;xima del trabajo realizado en 24 horas. Con el fin de facilitar el proceso se han propuesto diversas medidas. Indicar aqu&eacute;lla que sea v&aacute;lida:";
 choices[12]= new Array();
 choices[12][0] = "Copiar inmediatamente en cinta todas las modificaciones efectuadas por cualquiera de los usuarios seg&uacute;n &eacute;stas se vayan produciendo";
 choices[12][1] = "Realizar salvaguardas al final de cada d&iacute;a de toda la informaci&oacute;n contenida en los discos mediante alg&uacute;n procedimiento autom&aacute;tico lanzado por el administrador del sistema";
 choices[12][2] = "Obligar a cada usuario a realizar su copia de seguridad una vez terminado el trabajo efectuado  durante el d&iacute;a";
 choices[12][3] = "No se puede efectuar un sistema de salvaguarda basado en cinta para un sistema distribu&iacute;do en el que las estaciones de trabajo no posean cinta magn&eacute;tica";
 answers[12] = choices[12][1];
 units[12] = "96,97";
 comments[12] = "Id Pregunta: 2104. ";


//  Id pregunta: 2106 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Una de las caracter&iacute;sticas especiales de las bases de datos documentales, con respecto a otros tipos de bases de datos es que:";
 choices[13]= new Array();
 choices[13][0] = "Est&aacute;n integradas por campos";
 choices[13][1] = "Son adecuadas para una informaci&oacute;n muy estructurada";
 choices[13][2] = "Est&aacute;n basadas en sistemas de archivo y ficheros inversos";
 choices[13][3] = "Se almacenan en tablas";
 answers[13] = choices[13][2];
 units[13] = "96";
 comments[13] = "Id Pregunta: 2106. ";


//  Id pregunta: 2203 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;En qu&eacute; proceso de METRICA V3 se llevar&iacute;a a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procedimientos de migraci&oacute;n y carga inicial de datos?:";
 choices[14]= new Array();
 choices[14][0] = "CSI";
 choices[14][1] = "DSI";
 choices[14][2] = "IAS";
 choices[14][3] = "DCS";
 answers[14] = choices[14][0];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2203. ";


//  Id pregunta: 2351 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  En un diagrama de GANTT, un hito, por definici&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Dura lo mismo que la etapa que lo genera";
 choices[15][1] = "Dura una unidad temporal";
 choices[15][2] = "Su duraci&oacute;n se incluye en las etapas que desencadena";
 choices[15][3] = "No tiene duraci&oacute;n";
 answers[15] = choices[15][3];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2351. ";


//  Id pregunta: 2402 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  La necesidad b&aacute;sica de la garant&iacute;a de calidad:";
 choices[16]= new Array();
 choices[16][0] = "Est&aacute; relacionada con el potencial de errores o defectos latentes en el producto software";
 choices[16][1] = "Est&aacute; relacionada con la necesidad de abaratar costes";
 choices[16][2] = "Est&aacute; relacionada con la disfunci&oacute;n recurrente";
 choices[16][3] = "Est&aacute; relacionada con la ley de Markov";
 answers[16] = choices[16][0];
 units[16] = "87";
 comments[16] = "Id Pregunta: 2402. ";


//  Id pregunta: 2489 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  Seg&uacute;n los estudios de calidad, &iquest;en qu&eacute; fase del desarrollo los errores son m&aacute;s costosos?:";
 choices[17]= new Array();
 choices[17][0] = "Especificaci&oacute;n";
 choices[17][1] = "Dise&ntilde;o  ";
 choices[17][2] = "Codificaci&oacute;n";
 choices[17][3] = "Otros";
 answers[17] = choices[17][0];
 units[17] = "87";
 comments[17] = "Id Pregunta: 2489. ";


//  Id pregunta: 2573 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[18]= new Array();
 choices[18][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[18][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[18][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[18][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[18] = choices[18][2];
 units[18] = "87,88,92";
 comments[18] = "Id Pregunta: 2573. ";


//  Id pregunta: 2586 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?:";
 choices[19]= new Array();
 choices[19][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico,";
 choices[19][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico.";
 choices[19][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico: se realiza de forma conjunta.";
 choices[19][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o l&oacute;gico.";
 answers[19] = choices[19][0];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2586. Junta Andaluc&iacute;a";


//  Id pregunta: 2612 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a de desarrollo de sistemas de informaci&oacute;n?";
 choices[20]= new Array();
 choices[20][0] = "Merise";
 choices[20][1] = "Method I";
 choices[20][2] = "Eurom&eacute;todo";
 choices[20][3] = "Metrica v3";
 answers[20] = choices[20][2];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2612. ";


//  Id pregunta: 2617 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes no pertenece al perfil de analista seg&uacute;n Metrica v3?";
 choices[21]= new Array();
 choices[21][0] = "Administrador de base de datos";
 choices[21][1] = "T&eacute;cnico de comunicaciones";
 choices[21][2] = "Equipo de proyecto";
 choices[21][3] = "Equipo de operaci&oacute;n";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2617. ";


//  Id pregunta: 2714 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;C&oacute;mo se puede mantener la sesi&oacute;n en CGIs?";
 choices[22]= new Array();
 choices[22][0] = "Mediante campos ocultos en los formularios";
 choices[22][1] = "Mediantes cookies";
 choices[22][2] = "Mediante formularios o cookies indistintamente";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][2];
 units[22] = "114";
 comments[22] = "Id Pregunta: 2714. ";


//  Id pregunta: 2794 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Seg&uacute;n m&eacute;trica v3, cu&aacute;l de los siguientes productos, resultantes de la fase de An&aacute;lisis del sistema, es propio s&oacute;lo del an&aacute;lisis estructurado";
 choices[23]= new Array();
 choices[23][0] = "Descripci&oacute;n general del entorno tecnol&oacute;gico";
 choices[23][1] = "Especificaci&oacute;n de interfaz de usuario";
 choices[23][2] = "Plan de migraci&oacute;n y carga inicial de datos";
 choices[23][3] = "Descripci&oacute;n de subsistemas de an&aacute;lisis.";
 answers[23] = choices[23][2];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2794. ";


//  Id pregunta: 2837 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  En el modelo EFQM el atributo de calidad que recibe mayor ponderaci&oacute;n es";
 choices[24]= new Array();
 choices[24][0] = "Satisfacci&oacute;n del cliente";
 choices[24][1] = "Resultado del Negocio";
 choices[24][2] = "Liderazgo";
 choices[24][3] = "Gesti&oacute;n del Personal";
 answers[24] = choices[24][0];
 units[24] = "92";
 comments[24] = "Id Pregunta: 2837. ";


//  Id pregunta: 2929 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  La tecnolog&iacute;a DCOM toma las siglas de:";
 choices[25]= new Array();
 choices[25][0] = "Distributed Communication Model";
 choices[25][1] = "Development of Concurrent Multisystems";
 choices[25][2] = "Dynamic Component-Oriented Measure";
 choices[25][3] = "Distributed Component Object Model";
 answers[25] = choices[25][3];
 units[25] = "114";
 comments[25] = "Id Pregunta: 2929. ";


//  Id pregunta: 2974 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  X.500 se constituye como un estandar de servicios de directorio electr&oacute;nico con caracter&iacute;sticas de:";
 choices[26]= new Array();
 choices[26][0] = "Actualizaci&oacute;n";
 choices[26][1] = "Acceso y actualizaci&oacute;n";
 choices[26][2] = "Modificaci&oacute;n ";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][1];
 units[26] = "106";
 comments[26] = "Id Pregunta: 2974. Examen Julio 2003";


//  Id pregunta: 2979 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  En broadcast, &iquest;qu&eacute; protocolo traduce a direcci&oacute;n f&iacute;sica?";
 choices[27]= new Array();
 choices[27][0] = "TCP";
 choices[27][1] = "UDP";
 choices[27][2] = "RIP";
 choices[27][3] = "ARP";
 answers[27] = choices[27][3];
 units[27] = "100";
 comments[27] = "Id Pregunta: 2979. Examen Julio 2003";


//  Id pregunta: 3008 Año de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Es admisible cierto grado de inconsistencia temporal en la informaci&oacute;n dado sistemas como X.500 o LDAP?";
 choices[28]= new Array();
 choices[28][0] = "S&iacute;";
 choices[28][1] = "No";
 choices[28][2] = "S&iacute;, pero s&oacute;lo para LDAP";
 choices[28][3] = "ninguna de las anteriores";
 answers[28] = choices[28][0];
 units[28] = "106";
 comments[28] = "Id Pregunta: 3008. ";


//  Id pregunta: 3040 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes protocolos de internet relacionados con el correo electr&oacute;nico permite descargar selectivamente los mensajes de entrada del servidor de correo?:";
 choices[29]= new Array();
 choices[29][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[29][1] = "POP3 (Post Office Protocol versi&oacute;n 3)";
 choices[29][2] = "IMAP4 (Internet Message Access Protocol versi&oacute;n 4)";
 choices[29][3] = "S/MIME (Secure Multipurpose Internet Mail Extensions)";
 answers[29] = choices[29][2];
 units[29] = "106";
 comments[29] = "Id Pregunta: 3040. ";


//  Id pregunta: 3087 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Se dice que una l&iacute;nea es 'full duplex' cuando:";
 choices[30]= new Array();
 choices[30][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea, tiene que usarla de forma alternativa en cada sentido de transmisi&oacute;n";
 choices[30][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir simult&aacute;neamente sin restricciones";
 choices[30][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[30][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 answers[30] = choices[30][1];
 units[30] = "99";
 comments[30] = "Id Pregunta: 3087. ";


//  Id pregunta: 3089 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Se dice que una tarea o rutina es as&iacute;ncrona cuando:";
 choices[31]= new Array();
 choices[31][0] = "Gestiona un enlace de terminales 'tontos'";
 choices[31][1] = "Lanza una transacci&oacute;n a un terminal as&iacute;ncrono y espera su contestaci&oacute;n";
 choices[31][2] = "La tarea que la lanza no espera a su terminaci&oacute;n para continuar";
 choices[31][3] = "Son rutinas especializadas de los Sistemas de Tiempo Real dedicadas a la supervis&oacute;n de eventos en los elementos anal&oacute;gicos que controlan";
 answers[31] = choices[31][2];
 units[31] = "112";
 comments[31] = "Id Pregunta: 3089. ";


//  Id pregunta: 3123 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;C&oacute;mo se denominan en una red UMTS los componentes responsables de la decisiones de &quot;handover&quot;?:";
 choices[32]= new Array();
 choices[32][0] = "UTRAN";
 choices[32][1] = "Nodos-B";
 choices[32][2] = "RNC";
 choices[32][3] = "RNS";
 answers[32] = choices[32][2];
 units[32] = "108";
 comments[32] = "Id Pregunta: 3123. ";


//  Id pregunta: 3240 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l es el significado correcto en la actualidad de las siglas GSM?:";
 choices[33]= new Array();
 choices[33][0] = "Group System Mobile";
 choices[33][1] = "Global System Mobile";
 choices[33][2] = "Global Special Mobile";
 choices[33][3] = "Group  Special Mobile";
 answers[33] = choices[33][1];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3240. ";


//  Id pregunta: 3255 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;Cu&aacute;ntos bytes ocupa la cabecera m&iacute;nima en IPv4?";
 choices[34]= new Array();
 choices[34][0] = "16";
 choices[34][1] = "20";
 choices[34][2] = "24";
 choices[34][3] = "32";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3255. ";


//  Id pregunta: 3565 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  En un mensaje de correo electr&oacute;nico cifrado, seg&uacute;n el protocolo S-MIME,  se reciben cifrados:";
 choices[35]= new Array();
 choices[35][0] = "La direcci&oacute;n de correo electr&oacute;nico del destinatario y la direcci&oacute;n de correo electr&oacute;nico del remitente";
 choices[35][1] = "El cuerpo del mensaje y sus archivos adjuntos";
 choices[35][2] = "La &quot;traza&quot; del mensaje (servidores SMTP por los que ha sido encaminado)";
 choices[35][3] = "El asunto del mensaje, el tipo de contenido y la fecha";
 answers[35] = choices[35][1];
 units[35] = "106";
 comments[35] = "Id Pregunta: 3565. ";


//  Id pregunta: 3666 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Un sistema IVR es aquel que:";
 choices[36]= new Array();
 choices[36][0] = "Proporciona posibilidad de video interactivo (Interactive Video Response)";
 choices[36][1] = "Proporciona respuesta de voz interactiva (Interactive Voice Response)";
 choices[36][2] = "Mejora la calidad de la image de video (Immediate Video Refresh)";
 choices[36][3] = "Recuenta los votos electr&oacute;nicos aplicando confidencialidad (Immediate Vote Recounting)";
 answers[36] = choices[36][1];
 units[36] = "112";
 comments[36] = "Id Pregunta: 3666. ";


//  Id pregunta: 3691 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Las caracter&iacute;sticas: Separaci&oacute;n de portadoras = 200 KHz, Ancho de banda = 75 MHz, Distancia duplex = 95 MHz, corresponden a un sistema:";
 choices[37]= new Array();
 choices[37][0] = "GSM 900";
 choices[37][1] = "GSM 1800";
 choices[37][2] = "PCS 1900";
 choices[37][3] = "UMTS";
 answers[37] = choices[37][1];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3691. ";


//  Id pregunta: 3721 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  Los cortafuegos a nivel de aplicaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "suelen prestar servicios de tipo proxy";
 choices[38][1] = "son generalistas, no bas&aacute;ndose en ning&uacute;n protocolo en concreto";
 choices[38][2] = "no pueden prestar en ning&uacute;n caso servicios de autenticaci&oacute;n de usuarios";
 choices[38][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[38] = choices[38][0];
 units[38] = "111";
 comments[38] = "Id Pregunta: 3721. ";


//  Id pregunta: 3770 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Para videoconferencia en LANs sin QoS (como por ejemplo Internet), se usan las recomendaciones del est&aacute;ndar:";
 choices[39]= new Array();
 choices[39][0] = "H.321";
 choices[39][1] = "H.320";
 choices[39][2] = "H.323";
 choices[39][3] = "H.324";
 answers[39] = choices[39][2];
 units[39] = "117";
 comments[39] = "Id Pregunta: 3770. ";


//  Id pregunta: 3845 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?: ";
 choices[40]= new Array();
 choices[40][0] = "No me afecta para nada";
 choices[40][1] = "La LSSI es aplicable";
 choices[40][2] = "S&oacute;lo para la publicidad";
 choices[40][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[40] = choices[40][1];
 units[40] = "112,30";
 comments[40] = "Id Pregunta: 3845. ";


//  Id pregunta: 3848 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  Uno de los siguientes no es un inconveniente de la telefon&iacute;a sobre IP. Indicar cu&aacute;l:";
 choices[41]= new Array();
 choices[41][0] = "degradaci&oacute;n de la calidad";
 choices[41][1] = "supresi&oacute;n de silencios";
 choices[41][2] = "falta actual de infraestructuras para soportar todo el tr&aacute;fico previsto";
 choices[41][3] = "problemas de ecos con los retardos";
 answers[41] = choices[41][1];
 units[41] = "108";
 comments[41] = "Id Pregunta: 3848. ";


//  Id pregunta: 3856 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  El ataque de denegaci&oacute;n de servicio llamado Smurf consiste en:";
 choices[42]= new Array();
 choices[42][0] = "Dejar una conexi&oacute;n en estado semiabierto y no llegar a realizarse el paso final para establecer una conexi&oacute;n";
 choices[42][1] = "Se trata de mandar a un puerto abierto del servidor un paquete hecho con la direcci&oacute;n y puerto origen igual que la direcci&oacute;n y puerto destino";
 choices[42][2] = "Consiste en recolectar direcciones BroadCast para despu&eacute;s mandar una petici&oacute;n ICMP cada una de ellas, falsificando la direcci&oacute;n IP de origen";
 choices[42][3] = "Se trata de saturar la red mediante una cantidad repetitiva y enorme de peticiones de conexi&oacute;n";
 answers[42] = choices[42][2];
 units[42] = "111";
 comments[42] = "Id Pregunta: 3856. ";


//  Id pregunta: 3927 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes sistemas de cableado es conocido como &quot;cheapernet&quot;?";
 choices[43]= new Array();
 choices[43][0] = "El cable coaxial utilizado en el est&aacute;ndar 10Base5";
 choices[43][1] = "El cable coaxial utilizado en el est&aacute;ndar 10Base2";
 choices[43][2] = "El cable UTP de categor&iacute;a 3";
 choices[43][3] = "El cable STP de 150Ohm";
 answers[43] = choices[43][1];
 units[43] = "99";
 comments[43] = "Id Pregunta: 3927. ";


//  Id pregunta: 3952 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  Indicar cu&aacute;l no es una caracter&iacute;stica de GPRS";
 choices[44]= new Array();
 choices[44][0] = "Permite conmutaci&oacute;n de circuitos y paquetes";
 choices[44][1] = " Mayor velocidad 2 Mbps";
 choices[44][2] = " Desde Internet se la considera como otra subred cualquiera";
 choices[44][3] = "Es un servicio portador basado en conmutaci&oacute;n de paquetes sobre GSM";
 answers[44] = choices[44][1];
 units[44] = "108";
 comments[44] = "Id Pregunta: 3952. ";


//  Id pregunta: 4026 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  W-CDMA permite a UMTS trasmitir datos en un rango de velocidades que van desde los 144 Kbps a los 384 Kbps y hasta 2 Mbps en interior de edificios. Pero, &iquest;qu&eacute; t&eacute;cnica de duplexi&oacute;n usa W-CDMA?";
 choices[45]= new Array();
 choices[45][0] = "TDD";
 choices[45][1] = "FDD";
 choices[45][2] = "Las dos anteriores";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = choices[45][2];
 units[45] = "108";
 comments[45] = "Id Pregunta: 4026. ";


//  Id pregunta: 4064 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  &iquest;Qu&eacute; sentido tiene la ley de protecci&oacute;n intelectual?";
 choices[46]= new Array();
 choices[46][0] = "La defensa de los productos de las multinacionales";
 choices[46][1] = "Evitar que se pueda difundir el software libre";
 choices[46][2] = "Incentivar la inversi&oacute;n de las multinacionales del software y la musica";
 choices[46][3] = "La defensa de los derechos de los autores";
 answers[46] = choices[46][3];
 units[46] = "36";
 comments[46] = "Id Pregunta: 4064. ";


//  Id pregunta: 4099 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  Un servlet de Java tiene como principales caracter&iacute;sticas (se&ntilde;ale la falsa)";
 choices[47]= new Array();
 choices[47][0] = "su instalaci&oacute;n, gesti&oacute;n y ejecuci&oacute;n se realiza en un componente denominado contenedor";
 choices[47][1] = "requieren escaso c&oacute;digo para conseguir un nivel aceptable de presentaci&oacute;n, por lo cual han desplazado en parte a los JSPs";
 choices[47][2] = "Heredan de la clase abstracta HttpServlet";
 choices[47][3] = "Son todas correctas";
 answers[47] = choices[47][1];
 units[47] = "116";
 comments[47] = "Id Pregunta: 4099. ";


//  Id pregunta: 4172 Año de creación de pregunta: 2006-01-01
 questions[48]= "49)  Si pido a alguien su nombre le estoy pidiendo";
 choices[48]= new Array();
 choices[48][0] = "Identificaci&oacute;n";
 choices[48][1] = "Autorizaci&oacute;n";
 choices[48][2] = "Autenticaci&oacute;n";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = choices[48][0];
 units[48] = "111";
 comments[48] = "Id Pregunta: 4172. ";


//  Id pregunta: 4234 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[49]= new Array();
 choices[49][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps";
 choices[49][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos";
 choices[49][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado";
 choices[49][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos";
 answers[49] = choices[49][0];
 units[49] = "108";
 comments[49] = "Id Pregunta: 4234. ";


//  Id pregunta: 4263 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cual de las siguientes afirmaciones es falsa en relacion con las t&eacute;cnicas y pr&aacute;cticas recogidas en Metrica V3?";
 choices[50]= new Array();
 choices[50][0] = "El m&eacute;todo Albretch para el an&aacute;lisis de los puntos de funcion identifica 14 atributos de ajustes al que se le asignan valores de 0 a 5";
 choices[50][1] = "Se  recoge la t&eacute;cnica de gestion de proyectos de diagrama de extrapolaci&oacute;n";
 choices[50][2] = "La t&eacute;cnica Staffing Size se basa en el n&uacute;mero de clases clave y de clases secundarias";
 choices[50][3] = "Se consideran t&eacute;cnicas de sesiones de trabajo el JRP (Joint Requirements Planning) y JAD (Joint Application Design)";
 answers[50] = choices[50][3];
 units[50] = "86";
 comments[50] = "Id Pregunta: 4263. ";


//  Id pregunta: 4267 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos se basa en el logaritmo discreto el&iacute;ptico";
 choices[51]= new Array();
 choices[51][0] = "RSA";
 choices[51][1] = "RW";
 choices[51][2] = "Diffie-Hellman";
 choices[51][3] = "DSAE";
 answers[51] = choices[51][3];
 units[51] = "73";
 comments[51] = "Id Pregunta: 4267. ";


//  Id pregunta: 4529 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cual de los siguientes no es un perfil contemplado en Ia metodolog&iacute;a M&eacute;trica 3?";
 choices[52]= new Array();
 choices[52][0] = "Perfil Directivo.";
 choices[52][1] = "Perfil Jefe de Proyecto.";
 choices[52][2] = "Perfil Consultor.";
 choices[52][3] = "Perfil Usuario.";
 answers[52] = choices[52][3];
 units[52] = "86";
 comments[52] = "Id Pregunta: 4529. ";


//  Id pregunta: 4532 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  En el caso de un dise&ntilde;o orientado a objetos, ,se debe tener en cuenta la actividad DSI 6: DISENO FISICO DE DATOS, seg&uacute;n m&eacute;trica V3.?";
 choices[53]= new Array();
 choices[53][0] = "Si se debe tener en cuenta.";
 choices[53][1] = "No se aplica esta actividad.";
 choices[53][2] = "Se aplica esta actividad en funci&oacute;n de Ia arquitectura.";
 choices[53][3] = "Se aplica esta actividad en funci&oacute;n del gestor de base de datos.";
 answers[53] = choices[53][0];
 units[53] = "86";
 comments[53] = "Id Pregunta: 4532. ";


//  Id pregunta: 4555 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  En CMMi, Ia Process Area (PA) de Gesti&oacute;n de Riesgos (Risk Management) corresponde al Nivel";
 choices[54]= new Array();
 choices[54][0] = "Nivel 2 (Gestionado)";
 choices[54][1] = "Nivel 3 (Definido)";
 choices[54][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[54][3] = "Nivel 5 (Optimizando)";
 answers[54] = choices[54][1];
 units[54] = "87";
 comments[54] = "Id Pregunta: 4555. ";


//  Id pregunta: 4624 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  &iquest;En que lenguaje esta basado XML? ";
 choices[55]= new Array();
 choices[55][0] = "HTML";
 choices[55][1] = "XSL";
 choices[55][2] = "SGML";
 choices[55][3] = "XTML";
 answers[55] = choices[55][2];
 units[55] = "69";
 comments[55] = "Id Pregunta: 4624. ";


//  Id pregunta: 4719 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[56]= new Array();
 choices[56][0] = "400 puntos sobre 1000.";
 choices[56][1] = "500 puntos sobre 1000.";
 choices[56][2] = "700 puntos sobre 1000.";
 choices[56][3] = "900 puntos sobre 1000.";
 answers[56] = choices[56][1];
 units[56] = "92";
 comments[56] = "Id Pregunta: 4719. Examen 2006 JCYL";


//  Id pregunta: 4772 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  Se&ntilde;ale la respuesta correcta sobre la Ley 9/2014 General de Telecomunicaciones";
 choices[57]= new Array();
 choices[57][0] = "El objetivo de esta Ley es la regulaci&oacute;n de las telecomunicaciones, que comprenden la explotaci&oacute;n de las redes y la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas y los recursos asociados";
 choices[57][1] = "Se excluye del &aacute;mbito de esta Ley la regulaci&oacute;n de los servicios de telecomunicaciones para la defensa nacional y la protecci&oacute;n civil.";
 choices[57][2] = "Las telecomunicaciones tienen la consideraci&oacute;n de servicio p&uacute;blico y se prestan en r&eacute;gimen de libre competencia";
 choices[57][3] = "La Ley regula tanto el sector de las telecomunicaciones como el de los contenidos audiovisuales";
 answers[57] = choices[57][0];
 units[57] = "110";
 comments[57] = "Id Pregunta: 4772. ";


//  Id pregunta: 4925 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  En M&eacute;trica 3, entre los productos finales obtenidos del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n (PSI) NO se incluye:";
 choices[58]= new Array();
 choices[58][0] = "La arquitectura de informaci&oacute;n.";
 choices[58][1] = "La arquitectura tecnol&oacute;gica.";
 choices[58][2] = "El modelo de sistemas de informaci&oacute;n.";
 choices[58][3] = "El an&aacute;lisis del sistema de informaci&oacute;n.";
 answers[58] = choices[58][3];
 units[58] = "86";
 comments[58] = "Id Pregunta: 4925. Examen TIC B 2007";


//  Id pregunta: 5082 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Seg&uacute;n el m&eacute;todo del c&aacute;mino cr&iacute;tico, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[59]= new Array();
 choices[59][0] = "El camino cr&iacute;tico determina el tiempo m&aacute;s corto que podemos tardar en hacer el proyecto si se dispone detodos los recursos necesarios";
 choices[59][1] = "Las actividades cr&iacute;ticas no tienen holgura.";
 choices[59][2] = "Una actividad es cr&iacute;tica cuando no se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificarla duraci&oacute;n total del proyecto.";
 choices[59][3] = "La concatenaci&oacute;n de las todas las actividades de un proyecto es el camino cr&iacute;tico.";
 answers[59] = choices[59][3];
 units[59] = "77";
 comments[59] = "Id Pregunta: 5082. Examen TIC A 2007";


//  Id pregunta: 5513 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  Indique cu&aacute;l es una caracter&iacute;stica t&eacute;cnica de W-CDMA, utilizada en UMTS:";
 choices[60]= new Array();
 choices[60][0] = "Emplea radiocanales de 50MHz de ancho de banda";
 choices[60][1] = "Permite transmisiones multic&oacute;digo";
 choices[60][2] = "No admite duplexaci&oacute;n por divisi&oacute;n en frecuencia (FDD) ";
 choices[60][3] = "No admite duplexaci&oacute;n por divisi&oacute;n en el tiempo (TDD)";
 answers[60] = choices[60][1];
 units[60] = "108";
 comments[60] = "Id Pregunta: 5513. ";


//  Id pregunta: 5623 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  En el protocolo SSL, el paso &quot;Server Key Exchange&quot; o Intercambio de clave del servidor es:";
 choices[61]= new Array();
 choices[61][0] = "Obligatorio";
 choices[61][1] = "Opcional, &uacute;nicamente cuando no existe certificado";
 choices[61][2] = "Nunca es necesario";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = choices[61][1];
 units[61] = "111";
 comments[61] = "Id Pregunta: 5623. ";


//  Id pregunta: 5670 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  Cual de los siguientes no ser&iacute;a un patr&oacute;n de dise&ntilde;o J2EE";
 choices[62]= new Array();
 choices[62][0] = "abstraction inversion";
 choices[62][1] = "session fa&Ccedil;ade";
 choices[62][2] = "model view controler";
 choices[62][3] = "Data Access Objects";
 answers[62] = choices[62][0];
 units[62] = "116";
 comments[62] = "Id Pregunta: 5670. ";


//  Id pregunta: 5857 Año de creación de pregunta: 2009-01-01
 questions[63]= "64)  La Web 2.0 se refiere espec&iacute;ficamente a:";
 choices[63]= new Array();
 choices[63][0] = "Webs que generan informaci&oacute;n autom&aacute;ticamente a partir de bases de datos corporativas";
 choices[63][1] = "P&aacute;ginas implementadas con AJAX en las que s&oacute;lo existe un proveedor de contenidos";
 choices[63][2] = "Usar la inteligencia colectiva para proporcionar servicios interactivos en red dando al usuario el control de los datos";
 choices[63][3] = "Programas que procesan la avalancha de informaci&oacute;n existente en la Web";
 answers[63] = choices[63][2];
 units[63] = "69";
 comments[63] = "Id Pregunta: 5857. Pregunta 37";


//  Id pregunta: 5877 Año de creación de pregunta: 2009-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones es CIERTA para los sistemas de comunicaciones m&oacute;viles?:";
 choices[64]= new Array();
 choices[64][0] = "La implementaci&oacute;n de Clase 1 de WTLS para WAP proporciona autenticaci&oacute;n terminal-servidor";
 choices[64][1] = "Con WTLS la negociaci&oacute;n de los datagramas se hace mediante UDP";
 choices[64][2] = "WTLS no admite la utilizaci&oacute;n de algoritmos criptogr&aacute;ficos basados en curvas el&iacute;pticas";
 choices[64][3] = "WML es el lenguaje de navegaci&oacute;n para terminales m&oacute;viles WAP";
 answers[64] = choices[64][3];
 units[64] = "108";
 comments[64] = "Id Pregunta: 5877. MAP 2008 A1";


//  Id pregunta: 5956 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  Se&ntilde;ale la respuesta err&oacute;nea.";
 choices[65]= new Array();
 choices[65][0] = "El Centro de Transferencia de Tecnolog&iacute;a es la respuesta al mandato de La ley 11/2007, de 22 de Junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, en su art&iacute;culo 46 sobre la necesidad de contar con un directorio general de aplicaciones para su reutilizaci&oacute;n";
 choices[65][1] = "Los principales objetivos del CTT son: crear un repositorio com&uacute;n de software, crear una base de conocimiento, crear un espacio donde se puedan compartir experiencias y cooperar";
 choices[65][2] = "Los proyectos publicados en el portal CTT est&aacute;n dirigidos a las Administraciones P&uacute;blicas y las empresas que trabajan en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones y especialmente en Administraci&oacute;n Electr&oacute;nica";
 choices[65][3] = "El CTT es un portal que publica un directorio general de aplicaciones e informa de los proyectos, servicios, normativa y soluciones que se est&aacute;n desarrollando en materia de Administraci&oacute;n electr&oacute;nica. ";
 answers[65] = choices[65][2];
 units[65] = "44";
 comments[65] = "Id Pregunta: 5956. www.ctt.map.es";


//  Id pregunta: 6044 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de estas herramientas NO est&aacute; relacionada con la gesti&oacute;n de identidades?";
 choices[66]= new Array();
 choices[66][0] = "Oracle Identity Management";
 choices[66][1] = "BMC Remedy Action Request System";
 choices[66][2] = "IBM Tivoli Identity Manager";
 choices[66][3] = "Novell Nsure";
 answers[66] = choices[66][1];
 units[66] = "118";
 comments[66] = "Id Pregunta: 6044. ";


//  Id pregunta: 6119 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  De acuerdo con la Ley 11/2007, &iquest;es posible la destrucci&oacute;n de documentos emitidos originalmente en soporte papel y de los que se haya hecho copia electr&oacute;nica?";
 choices[67]= new Array();
 choices[67][0] = "S&iacute;, la Ley lo permite, pero antes cada Administraci&oacute;n debe regular los t&eacute;rminos y condiciones de este proceso.";
 choices[67][1] = "S&iacute;, la Ley lo permite, y no hace falta regular o establecer ninguna condici&oacute;n.";
 choices[67][2] = "No, la Ley no lo permite, porque los documentos en soporte papel est&aacute;n protegidos por ser Patrimonio Hist&oacute;rico Administrativo.";
 choices[67][3] = "S&iacute;, la Ley lo permite, pero s&oacute;lo los documentos no firmados y que no reconozcan derechos subjetivos.";
 answers[67] = choices[67][0];
 units[67] = "43";
 comments[67] = "Id Pregunta: 6119. TIC A 2009";


//  Id pregunta: 6125 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  El acr&oacute;nimo RSS responde a:";
 choices[68]= new Array();
 choices[68][0] = "Rich Site Summary.";
 choices[68][1] = "RDF Site Summary.";
 choices[68][2] = "Really Simple Syndication.";
 choices[68][3] = "Todos los anteriores.";
 answers[68] = choices[68][3];
 units[68] = "69";
 comments[68] = "Id Pregunta: 6125. TIC A 2009";


//  Id pregunta: 6152 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;C&oacute;mo se denomina el sistema global de discusi&oacute;n en internet que evoluciona de las redes UUCP?";
 choices[69]= new Array();
 choices[69][0] = "WWW";
 choices[69][1] = "FTP";
 choices[69][2] = "Usenet";
 choices[69][3] = "ICP";
 answers[69] = choices[69][2];
 units[69] = "112";
 comments[69] = "Id Pregunta: 6152. ";


//  Id pregunta: 6211 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  En M&eacute;trica versi&oacute;n 3, el proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, incluye la tarea de:";
 choices[70]= new Array();
 choices[70][0] = "Definici&oacute;n de la Arquitectura Tecnol&oacute;gica";
 choices[70][1] = "Estudio de la situaci&oacute;n actual";
 choices[70][2] = "Selecci&oacute;n de la Soluci&oacute;n";
 choices[70][3] = "Definici&oacute;n del Sistema";
 answers[70] = choices[70][0];
 units[70] = "86";
 comments[70] = "Id Pregunta: 6211. TICB-2009, bloque desarrollo";


//  Id pregunta: 6231 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Con respecto a los IFRAMEs, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[71]= new Array();
 choices[71][0] = "Se puede utilizar para extraer porciones de informaci&oacute;n de un documento HTML para mostrarlas en un portlet. De esta forma, se pueden elegir las partes importantes del documento HTML mientras que se descartan aquellos elementos que el cliente es incapaz de mostrar.";
 choices[71][1] = "Se utiliza principalmente para la generaci&oacute;n web de documentos PDF.";
 choices[71][2] = "Es un elemento HTML que permite insertar o incrustar un documento HTML dentro de un documento HTML principal.";
 choices[71][3] = "Ninguna de las afirmaciones anteriores es correcta.";
 answers[71] = choices[71][2];
 units[71] = "114";
 comments[71] = "Id Pregunta: 6231. ";


//  Id pregunta: 6242 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes APIs de JEE especifica la gesti&oacute;n de transacciones a trav&eacute;s de sistemas distribuidos?";
 choices[72]= new Array();
 choices[72][0] = "JNDE";
 choices[72][1] = "JNI";
 choices[72][2] = "JTA";
 choices[72][3] = "JAX";
 answers[72] = choices[72][2];
 units[72] = "60";
 comments[72] = "Id Pregunta: 6242. TICB-2009, bloque desarrollo";


//  Id pregunta: 6352 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes sentencias relativas al software libre es verdadera?";
 choices[73]= new Array();
 choices[73][0] = "El software libre es por definici&oacute;n gratuito";
 choices[73][1] = "Es lo mismo que el software de fuentes abiertas";
 choices[73][2] = "No existe software libre para Windows";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][3];
 units[73] = "61";
 comments[73] = "Id Pregunta: 6352. ";


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


//  Id pregunta: 6430 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes no es una suite ofim&aacute;tica de software libre?";
 choices[75]= new Array();
 choices[75][0] = "iWork";
 choices[75][1] = "Koffice";
 choices[75][2] = "OpenOffice.org";
 choices[75][3] = "Todas las anteriores son suites ofim&aacute;ticas de software libre";
 answers[75] = choices[75][0];
 units[75] = "62";
 comments[75] = "Id Pregunta: 6430. ";


//  Id pregunta: 6461 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos 'La publicaci&oacute;n de actos y comunicaciones que deban publicarse en tabl&oacute;n de anuncios o edictos':";
 choices[76]= new Array();
 choices[76][0] = "Deber&aacute; ser sustituida por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[76][1] = "No podr&aacute; ser sustituida por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[76][2] = "Podr&aacute; ser sustituida o complementada por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[76][3] = "Deber&aacute; ser complementada con su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 answers[76] = choices[76][2];
 units[76] = "43";
 comments[76] = "Id Pregunta: 6461. Castilla La Mancha 2009";


//  Id pregunta: 6537 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  La gesti&oacute;n de recursos, de acuerdo a ISO 9004, se apoya en";
 choices[77]= new Array();
 choices[77][0] = "El ciclo de vida";
 choices[77][1] = "Gesti&oacute;n de la seguridad";
 choices[77][2] = "An&aacute;lisis de la viabilidad";
 choices[77][3] = "Infraestructura";
 answers[77] = choices[77][3];
 units[77] = "92";
 comments[77] = "Id Pregunta: 6537. ";


//  Id pregunta: 7172 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  En un documento XML, la parte donde se definen los enlaces a otros documentos, a c&oacute;digo ejecutable, etc. Es:";
 choices[78]= new Array();
 choices[78][0] = "DTD";
 choices[78][1] = "XSL";
 choices[78][2] = "XLL";
 choices[78][3] = "DHTML";
 answers[78] = choices[78][2];
 units[78] = "69";
 comments[78] = "Id Pregunta: 7172. Examen TIC B 2009";


//  Id pregunta: 7359 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  Un formato de archivo de documentos electr&oacute;nicos a largo plazo debe cumplir:";
 choices[79]= new Array();
 choices[79][0] = "Debe ser un formato independiente del dispositivo";
 choices[79][1] = "Debe ser un formato autocontenido, de manera que toda la informaci&oacute;n necesaria para representar el contenido del documento se encuentre en el propio documento, y no sea preciso acceder a contenidos externos que quiz&aacute; en el futuro no est&eacute;n disponibles";
 choices[79][2] = "El formato debe estar publicado.";
 choices[79][3] = "Todas son CORRECTAS";
 answers[79] = choices[79][3];
 units[79] = "95";
 comments[79] = "Id Pregunta: 7359. ";


//  Id pregunta: 8164 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  En el marco de los servicios de Directorio, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[80]= new Array();
 choices[80][0] = "El est&aacute;ndar X.500 define cuatro clases de objetos que pueden ser representados en el directorio y que se codifican utilizando la notaci&oacute;n ASN.1.";
 choices[80][1] = "El protocolo LDAP, para el acceso a directorios X.500, es una evoluci&oacute;n de DAP, que soporta OSI y TCP/IP.";
 choices[80][2] = "En su versi&oacute;n 2, LDAP incorpora la posibilidad de acceso an&oacute;nimo y la de acceso cifrado.";
 choices[80][3] = "La operaci&oacute;n de a&ntilde;adir una entrada a un directorio, s&oacute;lo requiere que el nombre distinguido (DN) de la entrada a a&ntilde;adir,no exista previamente en &eacute;l.";
 answers[80] = choices[80][0];
 units[80] = "106";
 comments[80] = "Id Pregunta: 8164. Examen TIC A1 2010";


//  Id pregunta: 8260 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un principio b&aacute;sico del Esquema Nacional de Seguridad (ENS):";
 choices[81]= new Array();
 choices[81][0] = "Funci&oacute;n diferenciada.";
 choices[81][1] = "Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n.";
 choices[81][2] = "L&iacute;neas de defensa.";
 choices[81][3] = "Continuidad de la actividad.";
 answers[81] = choices[81][3];
 units[81] = "43";
 comments[81] = "Id Pregunta: 8260. Examen TIC A1 2010";


//  Id pregunta: 8308 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet? ";
 choices[82]= new Array();
 choices[82][0] = "IETF. ";
 choices[82][1] = "ICANN. ";
 choices[82][2] = "IAB. ";
 choices[82][3] = "IRTF.";
 answers[82] = choices[82][2];
 units[82] = "112,42";
 comments[82] = "Id Pregunta: 8308. Examen TIC A2 2010";


//  Id pregunta: 8427 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no es un tipo de SSO (Single Sign-On)?";
 choices[83]= new Array();
 choices[83][0] = "Enterprise SSO";
 choices[83][1] = "Web SSO";
 choices[83][2] = "Kerberos";
 choices[83][3] = "Novell";
 answers[83] = choices[83][3];
 units[83] = "118";
 comments[83] = "Id Pregunta: 8427. ";


//  Id pregunta: 8435 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Qu&eacute; proyecto europeo pretende establecer una plataforma de interoperabilidad y reconocimiento mutuo transfronterizo entre las identidades electr&oacute;nicas existentes en cada Estado Europeo?";
 choices[84]= new Array();
 choices[84][0] = "Conecta";
 choices[84][1] = "Robinson";
 choices[84][2] = "Stork";
 choices[84][3] = "Interoperability card";
 answers[84] = choices[84][2];
 units[84] = "118";
 comments[84] = "Id Pregunta: 8435. ";


//  Id pregunta: 8439 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  &iquest;Bajo cu&aacute;les de las siguientes circunstancias no pueden ser rechazados los documentos electr&oacute;nicos presentados en un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[85]= new Array();
 choices[85][0] = "Que se trate de documentos dirigidos a &oacute;rganos u organismos fuera del &aacute;mbito de la Administraci&oacute;n General del Estado.";
 choices[85][1] = "Que se trate de documentos que de acuerdo con lo establecido en los art&iacute;culos 14 y 32 deban presentarse en registros electr&oacute;nicos espec&iacute;ficos.";
 choices[85][2] = "Que contengan c&oacute;digo malicioso o dispositivo susceptible de afectar a la integridad o seguridad del sistema.";
 choices[85][3] = "En el caso de utilizaci&oacute;n de documentos normalizados.";
 answers[85] = choices[85][3];
 units[85] = "43";
 comments[85] = "Id Pregunta: 8439. ";


//  Id pregunta: 8465 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes NO es una etiqueta HTML?:";
 choices[86]= new Array();
 choices[86][0] = "&lt;em&gt;&lt;/em&gt;";
 choices[86][1] = "&lt;meta&gt;";
 choices[86][2] = "&lt;tc&gt;&lt;/tc&gt;";
 choices[86][3] = "&lt;body&gt;&lt;/body&gt;";
 answers[86] = choices[86][2];
 units[86] = "69";
 comments[86] = "Id Pregunta: 8465. Analista Ayto. Madrid 2010";


//  Id pregunta: 8533 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  &iquest;Qu&eacute; m&eacute;todo de codificaci&oacute;n de la voz NO realiza compresi&oacute;n?";
 choices[87]= new Array();
 choices[87][0] = "LD-CELP (Low-Delay Code-Excited Linear Prediction).";
 choices[87][1] = "CS-ACELP (Conjugate-Structured Algebraic Code-Excited Linear Prediction)";
 choices[87][2] = "PCM (Pulse-Code Modulation).";
 choices[87][3] = "ADPCM (Adaptative Differential Pulse Code Modulation)";
 answers[87] = choices[87][2];
 units[87] = "117";
 comments[87] = "Id Pregunta: 8533. Examen TIC A2 2010 interna";


//  Id pregunta: 8626 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  Un cable consistente en un n&uacute;cleo de vidrio con un alto Indice refracci&oacute;n, rodeada de una capa o revestimiento de material similar, pero con &iacute;ndice de refracci&oacute;n ligeramente menor, y, todo ello, envuelto en una cubierta do protecci&oacute;n totalmente opaca que le proporciona consistencia, es un cable:";
 choices[88]= new Array();
 choices[88][0] = "De par trenzado tipo BS/UTP (Braided ana screened unshielded twisteo pair).";
 choices[88][1] = "Coaxial de tipo thick";
 choices[88][2] = "De par trenzado tipo S/STP (Screened and shielded twisted pair)";
 choices[88][3] = "De fibra &oacute;ptica";
 answers[88] = choices[88][3];
 units[88] = "99";
 comments[88] = "Id Pregunta: 8626. Examen TIC A2 2010 interna";


//  Id pregunta: 8773 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  Se ha puesto un servicio de DHCP en una subred. &iquest;Es posible que otra subred pueda usar el servicio DHCP y que este servicio asigne direcciones a los clientes de ambas?";
 choices[89]= new Array();
 choices[89][0] = "No, porque solo funciona con broadcast las peticiones.";
 choices[89][1] = "Si, porque las peticiones son unicast y llegar&aacute;n al servidor de DHCP";
 choices[89][2] = "Es posible pero hace falta un DHCP Relay.";
 choices[89][3] = "Si, con solo configurar el servidor DHCP para servir a la otra subred.";
 answers[89] = choices[89][2];
 units[89] = "100";
 comments[89] = "Id Pregunta: 8773. Examen UPM A2 2011";


//  Id pregunta: 8793 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l debe ser la parte local del elemento ra&iacute;z de un documento XHTML 2.0 de conformidad estricta?";
 choices[90]= new Array();
 choices[90][0] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;html&quot;.";
 choices[90][1] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xhtml&quot;. ";
 choices[90][2] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xml&quot;. ";
 choices[90][3] = "No puede existir una declaraci&oacute;n DOCTYPE.";
 answers[90] = choices[90][0];
 units[90] = "69";
 comments[90] = "Id Pregunta: 8793. Examen UPM A2 2011";


//  Id pregunta: 8818 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  &iquest;Para cu&aacute;l de los siguientes supuestos no vale la calidad de software?";
 choices[91]= new Array();
 choices[91][0] = "Para dar confianza";
 choices[91][1] = "Para asegurar que el software funciona";
 choices[91][2] = "Para evaluar el proceso de desarrollo de software";
 choices[91][3] = "Para hacer los resultados del proceso m&aacute;s predecibles";
 answers[91] = choices[91][3];
 units[91] = "87, 92";
 comments[91] = "Id Pregunta: 8818. Examen UPM A2 2011";


//  Id pregunta: 8886 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  &iquest;Qu&eacute; Informaci&oacute;n contiene una SIM?";
 choices[92]= new Array();
 choices[92][0] = "IMSI";
 choices[92][1] = "PIN";
 choices[92][2] = "OMC";
 choices[92][3] = "La respuesta A y B son correctas";
 answers[92] = choices[92][3];
 units[92] = "108";
 comments[92] = "Id Pregunta: 8886. ";


//  Id pregunta: 8931 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  &iquest;Qu&eacute; formato de los siguientes no es de audio?";
 choices[93]= new Array();
 choices[93][0] = "VRML";
 choices[93][1] = "Ogg Vorbis";
 choices[93][2] = "MIDI";
 choices[93][3] = "WMA";
 answers[93] = choices[93][0];
 units[93] = "114";
 comments[93] = "Id Pregunta: 8931. ";


//  Id pregunta: 8949 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  &iquest;A qui&eacute;n corresponde aprobar la relaci&oacute;n de prestadores de servicios de certificaci&oacute;n admitidos?";
 choices[94]= new Array();
 choices[94][0] = "Al Ministerio de Industria Turismo y Comercio";
 choices[94][1] = "Al Ministerio de la Presidencia";
 choices[94][2] = "Al Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[94][3] = "Ninguna de las anteriores es cierta";
 answers[94] = choices[94][3];
 units[94] = "43";
 comments[94] = "Id Pregunta: 8949. ";


//  Id pregunta: 8971 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes definiciones corresponde a la Teor&iacute;a de la Calidad de la Productividad de Lowler?";
 choices[95]= new Array();
 choices[95][0] = "El coste de la calidad siempre es el mismo independientemente del coste";
 choices[95][1] = "Cuanta m&aacute;s calidad tiene un producto m&aacute;s caro es de producir";
 choices[95][2] = "Un producto de calidad es m&aacute;s barato de producir";
 choices[95][3] = "Es caro de producir en primera instancia, a mitad del desarrollo es independiente y al final el coste se encarece exponencialmente";
 answers[95] = choices[95][2];
 units[95] = "87,88";
 comments[95] = "Id Pregunta: 8971. ";


//  Id pregunta: 9007 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  No ser&aacute; necesario que una ICT incluya inicialmente la red de distribuci&oacute;n para los servicios de:";
 choices[96]= new Array();
 choices[96][0] = "Telecomunicaciones por cable.";
 choices[96][1] = "Radiodifusi&oacute;n.";
 choices[96][2] = "Telefon&iacute;a.";
 choices[96][3] = "Deber&aacute; incluir todas ellas.";
 answers[96] = choices[96][3];
 units[96] = "99";
 comments[96] = "Id Pregunta: 9007. Teleco Ayto. Madrid 2010- Modificaci&oacute;n de la original por MVO al quedar Derogada por RD 346/2011";


//  Id pregunta: 9045 Año de creación de pregunta: 2011-01-01
 questions[97]= "98)  Se&ntilde;ale la afirmaci&oacute;n incorrecta sobre M&eacute;trica";
 choices[97]= new Array();
 choices[97][0] = "Sirve tanto para desarrollo estructurado como para desarrollo orientado a objetos";
 choices[97][1] = "Est&aacute; prohibido su uso fuera de la administraci&oacute;n";
 choices[97][2] = "Los cuatro interfaces son aseguramiento de la calidad, seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos ";
 choices[97][3] = "La &uacute;ltima versi&oacute;n es la tercera";
 answers[97] = choices[97][1];
 units[97] = "86";
 comments[97] = "Id Pregunta: 9045. ";


//  Id pregunta: 9375 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  En la Teor&iacute;a de la Decisi&oacute;n Multicreiterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo no es de asignaci&oacute;n de pesos a los criterios:";
 choices[98]= new Array();
 choices[98][0] = "DELPHI";
 choices[98][1] = "Entrop&iacute;a";
 choices[98][2] = "SAATY";
 choices[98][3] = "PROMETHEE";
 answers[98] = choices[98][3];
 units[98] = "34";
 comments[98] = "Id Pregunta: 9375. ";


//  Id pregunta: 9578 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[99]= new Array();
 choices[99][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[99][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[99][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[99][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 9578. Examen TIC A1 2011";


