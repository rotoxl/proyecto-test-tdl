/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 115 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  De las siguientes afirmaciones referentes al m&eacute;todo lexicogr&aacute;fico de ordenaci&oacute;n de alternativas, indique cu&aacute;l es m&aacute;s correcta:";
 choices[0]= new Array();
 choices[0][0] = "El m&eacute;todo lexicogr&aacute;fico tiene como inconveniente que no utiliza toda la informaci&oacute;n disponible";
 choices[0][1] = "El m&eacute;todo lexicogr&aacute;fico requiere comparabilidad intercriterios";
 choices[0][2] = "El m&eacute;todo lexicogr&aacute;fico da como resultado un preorden parcial de las alternativas, pudiendo quedar alternativas declaradas como incomparables";
 choices[0][3] = "Todas las respuestas anteriores son ciertas";
 answers[0] = choices[0][0];
 units[0] = "34";
 comments[0] = "Id Pregunta: 115. ";


//  Id pregunta: 147 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El la teor&iacute;a de la decisi&oacute;n multicriterio discreta, para el problema de la asignaci&oacute;n de pesos a criterios pueden utilizarse, entre otros, los m&eacute;todos:";
 choices[1]= new Array();
 choices[1][0] = "Lexicogr&aacute;fico y Promethee";
 choices[1][1] = "El m&eacute;todo de ponderaci&oacute;n lineal";
 choices[1][2] = "El m&eacute;todo Delphi y el de la entrop&iacute;a";
 choices[1][3] = "El m&eacute;todo de ponderaci&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "34";
 comments[1] = "Id Pregunta: 147. ";


//  Id pregunta: 203 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  Organismos de normalizaci&oacute;n europeos son";
 choices[2]= new Array();
 choices[2][0] = "CEN";
 choices[2][1] = "OSI";
 choices[2][2] = "IEEE";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][0];
 units[2] = "42";
 comments[2] = "Id Pregunta: 203. ";


//  Id pregunta: 222 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En la planificaci&oacute;n de un proyecto no debemos realizar las siguientes tareas:";
 choices[3]= new Array();
 choices[3][0] = "Definici&oacute;n de los requerimientos";
 choices[3][1] = "Selecci&oacute;n de una metodolog&iacute;a de gesti&oacute;n de proyecto";
 choices[3][2] = "Reclutamiento de personal y asignaci&oacute;n de tareas";
 choices[3][3] = "An&aacute;lisis de riesgos y revisi&oacute;n inicial de seguridad";
 answers[3] = choices[3][2];
 units[3] = "77";
 comments[3] = "Id Pregunta: 222. ";


//  Id pregunta: 247 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  En una organizaci&oacute;n de tipo gran hermano:";
 choices[4]= new Array();
 choices[4][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[4][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[4][2] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 choices[4][3] = "El HW, el desarrollo y las decisiones se descentralizan";
 answers[4] = choices[4][0];
 units[4] = "22";
 comments[4] = "Id Pregunta: 247. ";


//  Id pregunta: 388 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  No es un elemento de MAGERIT:";
 choices[5]= new Array();
 choices[5][0] = "Amenaza";
 choices[5][1] = "Activo";
 choices[5][2] = "Riesgo";
 choices[5][3] = "Salvaguarda";
 answers[5] = choices[5][2];
 units[5] = "33";
 comments[5] = "Id Pregunta: 388. ";


//  Id pregunta: 391 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Para corregir las desviaciones de tiempo de un proyecto se utiliza:";
 choices[6]= new Array();
 choices[6][0] = "El gr&aacute;fico de Gantt";
 choices[6][1] = "El diagrama de PERT";
 choices[6][2] = "Cualquiera de los 2";
 choices[6][3] = "Ninguno de los 2";
 answers[6] = choices[6][2];
 units[6] = "28";
 comments[6] = "Id Pregunta: 391. ";


//  Id pregunta: 529 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Cual de los siguientes es un control de acceso f&iacute;sico?";
 choices[7]= new Array();
 choices[7][0] = "Etiquetado de soportes en cinta";
 choices[7][1] = "Uso de clave de por teclado para entrar al CPD";
 choices[7][2] = "Contrase&ntilde;as para uso de aplicaciones, renovadas peri&oacute;dicamente";
 choices[7][3] = "Todas";
 answers[7] = choices[7][1];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 529. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 567 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  En el modelo de Anthony de pir&aacute;mide de niveles directivos, en el nivel estrat&eacute;gico. &iquest;Qu&eacute; grado de utilizaci&oacute;n debe tener la informaci&oacute;n interna de la organizaci&oacute;n?";
 choices[8]= new Array();
 choices[8][0] = "Alto. Este tipo de informaci&oacute;n ayudar&aacute; a planificar la estrategia a largo plazo";
 choices[8][1] = "Bajo. Este tipo de informaci&oacute;n deber&iacute;a ser procesado en el nivel medio de la pir&aacute;mide";
 choices[8][2] = "Muy alto. Esta informaci&oacute;n es imprescindible para planificar la estrategia a largo plazo";
 choices[8][3] = "Medio. En funci&oacute;n del tipo de organizaci&oacute;n";
 answers[8] = choices[8][1];
 units[8] = "22";
 comments[8] = "Id Pregunta: 567. ";


//  Id pregunta: 776 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  En telecomunicaciones, EFT son las siglas de:";
 choices[9]= new Array();
 choices[9][0] = "Enhanced Fiber Transmission, Transmisi&oacute;n mejorada por fibra &oacute;ptica";
 choices[9][1] = "Electronic Funds Transfer, Transferencia electr&oacute;nica de fondos";
 choices[9][2] = "Enhanced File Transfer, Transmisi&oacute;n mejorada de ficheros";
 choices[9][3] = "Electronic Forms Transfer, Transferencia electr&oacute;nica de formularios";
 answers[9] = choices[9][1];
 units[9] = "70";
 comments[9] = "Id Pregunta: 776. ";


//  Id pregunta: 879 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[10]= new Array();
 choices[10][0] = "DOKM";
 choices[10][1] = "DOM";
 choices[10][2] = "JDOC";
 choices[10][3] = "Todas son falsas";
 answers[10] = choices[10][1];
 units[10] = "69";
 comments[10] = "Id Pregunta: 879. ";


//  Id pregunta: 937 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; paradigma de programaci&oacute;n reproduce mas fielmente el funcionamiento de un computador con arquitectura Von Neuman?:";
 choices[11]= new Array();
 choices[11][0] = "El l&oacute;gico";
 choices[11][1] = "El funcional";
 choices[11][2] = " El imperativo";
 choices[11][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[11] = choices[11][2];
 units[11] = "86";
 comments[11] = "Id Pregunta: 937. ";


//  Id pregunta: 1076 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el campo de la representaci&oacute;n del conocimiento simb&oacute;lico:";
 choices[12]= new Array();
 choices[12][0] = "La unidad b&aacute;sica funcional de una red sem&aacute;ntica es el 'objeto' que formaliza la representaci&oacute;n de un concepto";
 choices[12][1] = "Un marco es una descripci&oacute;n de un objeto, que contiene ranuras (slots) para todas las informaciones asociadas con el objeto";
 choices[12][2] = "Las reglas deductivas son una manera de representar al conocimiento de tipo procedimental";
 choices[12][3] = "Una restricci&oacute;n expresa es una relaci&oacute;n de equilibrio entre los predicados de uno o m&aacute;s objetos";
 answers[12] = choices[12][1];
 units[12] = "64";
 comments[12] = "Id Pregunta: 1076. ";


//  Id pregunta: 1131 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  En relaci&oacute;n con las caracter&iacute;sticas de una tabla de estructura relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[13]= new Array();
 choices[13][0] = "Cada columna debe estar identificada por un nombre espec&iacute;fico";
 choices[13][1] = "Un mismo dominio podr&aacute; servir para definir los valores de varias columnas diferentes";
 choices[13][2] = "Cada columna debe extraer sus valores de un dominio";
 choices[13][3] = "Todas las respuestas anteriores son ciertas";
 answers[13] = choices[13][3];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1131. ";


//  Id pregunta: 1361 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Si comparamos SSL y SET:";
 choices[14]= new Array();
 choices[14][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[14][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[14][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[14][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[14] = choices[14][0];
 units[14] = "70";
 comments[14] = "Id Pregunta: 1361. ";


//  Id pregunta: 1390 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Un pseudoc&oacute;digo:";
 choices[15]= new Array();
 choices[15][0] = "Tiene reglas fijas para la descripci&oacute;n de algoritmos.";
 choices[15][1] = "Es f&aacute;cil de escribir y traducir a un lenguaje de programaci&oacute;n.";
 choices[15][2] = "Utiliza como lenguaje el PASCAL.";
 choices[15][3] = "Sigue unas normas sint&aacute;cticas muy estrictas.";
 answers[15] = choices[15][1];
 units[15] = "";
 comments[15] = "Id Pregunta: 1390. ";


//  Id pregunta: 1446 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta al referirnos a los dos tipos de interfaces existentes?:";
 choices[16]= new Array();
 choices[16][0] = "La utilizaci&oacute;n diaria de la interfaz basada en comandos es m&aacute;s &aacute;gil que la basada en men&uacute;, pero su aprendizaje es m&aacute;s costoso";
 choices[16][1] = "A medida que el usuario va ganando destreza la interfaz basada en men&uacute; tiende a hacerse tediosa debido al elevado n&uacute;mero de opciones y funciones que proporcionan";
 choices[16][2] = "Con la interfaz basada en men&uacute; el usuario tiene la continua sensaci&oacute;n de sentirse guiado";
 choices[16][3] = "La interfaz basada en comando es m&aacute;s intuitiva que la basada en men&uacute;";
 answers[16] = choices[16][3];
 units[16] = "47";
 comments[16] = "Id Pregunta: 1446. ";


//  Id pregunta: 1466 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  La definici&oacute;n de la ofim&aacute;tica como la utilizaci&oacute;n de tecnolog&iacute;a para mejorar la realizaci&oacute;n de funciones de oficina se debe a:";
 choices[17]= new Array();
 choices[17][0] = "Hammer y Sirbu";
 choices[17][1] = "Olson y Lucas";
 choices[17][2] = "Eli y Nutt";
 choices[17][3] = "Carter y Huzan";
 answers[17] = choices[17][0];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1466. ";


//  Id pregunta: 1467 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  La extensi&oacute;n de los documentos de plantillas en MS Word es:";
 choices[18]= new Array();
 choices[18][0] = "Doc";
 choices[18][1] = "Dot";
 choices[18][2] = "Pln";
 choices[18][3] = "Std";
 answers[18] = choices[18][1];
 units[18] = "52";
 comments[18] = "Id Pregunta: 1467. ";


//  Id pregunta: 1506 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Los servicios que ofrece  el protocolo SET (Secure Electronico Transaction) son:";
 choices[19]= new Array();
 choices[19][0] = "Autenticaci&oacute;n, disponibilidad, integridad y gesti&oacute;n de pago";
 choices[19][1] = "Autenticaci&oacute;n, confidencialidad, integridad y gesti&oacute;n de pago";
 choices[19][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n y gesti&oacute;n de pago";
 choices[19][3] = "Autenticaci&oacute;n, integridad, disponibilidad y confidencialidad";
 answers[19] = choices[19][1];
 units[19] = "70";
 comments[19] = "Id Pregunta: 1506. ";


//  Id pregunta: 1806 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  Dentro del terreno del e-learning, se&ntilde;ale qu&eacute; opci&oacute;n describe el &quot;blended learning&quot; de forma m&aacute;s exacta:";
 choices[20]= new Array();
 choices[20][0] = "Aquel modo de aprender que combina la ense&ntilde;anza presencial con la tecnolog&iacute;a no presencial";
 choices[20][1] = "Aprendizaje e-learning mediante combinaci&oacute;n de informaci&oacute;n alfanum&eacute;rica, gr&aacute;fica e hipertextual";
 choices[20][2] = "Aprendizaje mediante la profusi&oacute;n de elementos multimedia";
 choices[20][3] = "Aprendizaje basado en la mezcla cultural del alumnado, con experiencias diversas";
 answers[20] = choices[20][0];
 units[20] = "66";
 comments[20] = "Id Pregunta: 1806. &quot;blended learning&quot; = aprendizaje semipresencial";


//  Id pregunta: 2037 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  En UML una variable o un m&eacute;todo con la notaci&oacute;n: '#' &iquest;qu&eacute; significa?";
 choices[21]= new Array();
 choices[21][0] = "Que es p&uacute;blica.";
 choices[21][1] = "Que es privada.";
 choices[21][2] = "Que es protegida.";
 choices[21][3] = "Ninguna de las anteriores.";
 answers[21] = choices[21][2];
 units[21] = "84";
 comments[21] = "Id Pregunta: 2037. ";


//  Id pregunta: 2067 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;En qu&eacute; fase se hace el modelo l&oacute;gico de datos?";
 choices[22]= new Array();
 choices[22][0] = "Dise&ntilde;o";
 choices[22][1] = "Estudio de viabilidad";
 choices[22][2] = "An&aacute;lisis orientado a objetos";
 choices[22][3] = "An&aacute;lisis estructurado";
 answers[22] = choices[22][3];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2067. SS-A 2004";


//  Id pregunta: 2189 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;les son las suposiciones b&aacute;sicas del modelo COCOMO cl&aacute;sico para estimar el esfuerzo necesario para el desarrollo de sistemas?:";
 choices[23]= new Array();
 choices[23][0] = "Considera que la principal variable explicativa del coste es el n&uacute;mero de instrucciones, con lo que centra sus esfuerzos en estimar este n&uacute;mero";
 choices[23][1] = "Supone que el esfuerzo necesario para el desarrollo de un sistema es el producto de dos factores: complejidad t&eacute;cnica y tama&ntilde;o del tratamiento de la informaci&oacute;n";
 choices[23][2] = "Usa como variable explicativa secundaria la complejidad t&eacute;cnica, originando tres modos de aplicaci&oacute;n del m&eacute;todo: org&aacute;nico, semiacoplado y empotrado";
 choices[23][3] = "Todas las anteriores son asunciones del modelo COCOMO";
 answers[23] = choices[23][3];
 units[23] = "89";
 comments[23] = "Id Pregunta: 2189. Preparatic XVII";


//  Id pregunta: 2259 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Diferentes t&eacute;cnicas para expresar la l&oacute;gica interna de los procesos primitivos son:";
 choices[24]= new Array();
 choices[24][0] = "Lenguaje narrativo, tablas de decisi&oacute;n y pseudoc&oacute;digo";
 choices[24][1] = "Pre/post condiciones, diagramas de flujo, lenguajes formales";
 choices[24][2] = "Todas las anteriores son t&eacute;cnicas usadas v&aacute;lidas";
 choices[24][3] = "Ninguna de las anteriores es una t&eacute;cnica usada v&aacute;lida";
 answers[24] = choices[24][2];
 units[24] = "81";
 comments[24] = "Id Pregunta: 2259. ";


//  Id pregunta: 2352 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  En una planificaci&oacute;n de un proyecto, una situaci&oacute;n que se da normalmente es que:";
 choices[25]= new Array();
 choices[25][0] = "Al inicio del proyecto se consuman m&aacute;s recursos que al final";
 choices[25][1] = "Al principio los recursos precisos van creciendo y al final decreciendo";
 choices[25][2] = "Al final del proyecto se consumen m&aacute;s recursos que en toda su vida anterior";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][1];
 units[25] = "77";
 comments[25] = "Id Pregunta: 2352. ";


//  Id pregunta: 2390 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  La documentaci&oacute;n en el modelo en cascada:";
 choices[26]= new Array();
 choices[26][0] = "Para algunos tipos de software, como compiladores o sistemas operativos, esta forma de proceder es la m&aacute;s efectiva. Sin embargo no es la m&aacute;s adecuada para otros tipos de software como, particularmente, el que se usa en las aplicaciones interactivas y de usuario final";
 choices[26][1] = "Contempla todos los productos de las fases; informes, programas, pruebas";
 choices[26][2] = "Determina la finalizaci&oacute;n de una etapa y el paso a la siguiente";
 choices[26][3] = "Todas las respuestas anteriores son ciertas";
 answers[26] = choices[26][3];
 units[26] = "76";
 comments[26] = "Id Pregunta: 2390. ";


//  Id pregunta: 3095 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  Un sistema, si se desea que controle los intentos de violaci&oacute;n debe incorporar:";
 choices[27]= new Array();
 choices[27][0] = "An&aacute;lisis y validaci&oacute;n de la llamada";
 choices[27][1] = "Registro de la historia y fecha de la contrase&ntilde;a";
 choices[27][2] = "Forzar a que los usuarios cambien la contrase&ntilde;a";
 choices[27][3] = "Todas las respuestas anteriores son ciertas";
 answers[27] = choices[27][3];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3095. ";


//  Id pregunta: 3166 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un protocolo de transmisi&oacute;n orientado a bit?:";
 choices[28]= new Array();
 choices[28][0] = "Para detectar el principio y el final de una trama se utiliza una secuencia de bits, llamada bandera";
 choices[28][1] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n mensajes constituidos por uno o varios caracteres, llamados de control de la comunicaci&oacute;n, tomados de un c&oacute;digo preestablecido";
 choices[28][2] = "La trama es de formato fijo, constituida por campos de longitud determinada, excepto el campo de informaci&oacute;n";
 choices[28][3] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n campos de control con bits (o grupos de bits) cuyo significado est&aacute; dado por su posici&oacute;n";
 answers[28] = choices[28][1];
 units[28] = "100, 101";
 comments[28] = "Id Pregunta: 3166. ";


//  Id pregunta: 3281 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es el jitter?";
 choices[29]= new Array();
 choices[29][0] = "un dispositivo similar al router pero con mayor inteligencia a la hora de enrutar los paquetes";
 choices[29][1] = "la variabilidad del retardo en la transmisi&oacute;n de informaci&oacute;n por una red";
 choices[29][2] = "un envoltorio software a modo de cortafuegos que se instala sobre protocolos conocidos como TCP o FTP";
 choices[29][3] = "un hacker que se dedica a desenmascarar en la red a otros hackers";
 answers[29] = choices[29][1];
 units[29] = "109";
 comments[29] = "Id Pregunta: 3281. ";


//  Id pregunta: 3442 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  El protocolo CSMA/CD utilizado en el subnivel MAC de las LAN es propio de las redes:";
 choices[30]= new Array();
 choices[30][0] = "Ethernet";
 choices[30][1] = "Token ring";
 choices[30][2] = "Token bus";
 choices[30][3] = "Se puede emplear en cualquiera de las anteriores";
 answers[30] = choices[30][0];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3442. ";


//  Id pregunta: 3507 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  En el nivel de enlace, respecto al protocolo HDLC puede decirse que:";
 choices[31]= new Array();
 choices[31][0] = "Es un protocolo orientado a car&aacute;cter";
 choices[31][1] = "El modo de respuesta normal se conoce como NRM";
 choices[31][2] = "El modo de respuesta asincrono se conoce como ARM";
 choices[31][3] = "Las respuestas 'b' y 'c' son correctas";
 answers[31] = choices[31][3];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3507. ";


//  Id pregunta: 3651 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  La tecnolog&iacute;a/protocolo que da soporte al tipo de conmutaci&oacute;n/transmisi&oacute;n en el que se descarta la trama err&oacute;nea y son los mecanismos de la capa de transporte los que se encargan de recobrar la informaci&oacute;n se denomina:";
 choices[32]= new Array();
 choices[32][0] = "ATM";
 choices[32][1] = "Frame Relay";
 choices[32][2] = "ADSL";
 choices[32][3] = "PCLC";
 answers[32] = choices[32][1];
 units[32] = "109";
 comments[32] = "Id Pregunta: 3651. ";


//  Id pregunta: 3745 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Los terminales dise&ntilde;ados para conectarse directamente a la RDSI, como los tel&eacute;fonos digitales RDSI, un ordenador equipado con tarjeta adaptadora a RDSI y software &ldquo;driver&rdquo; de la tarjeta adaptadora a RDSI se denominan:";
 choices[33]= new Array();
 choices[33][0] = "ET1";
 choices[33][1] = "ET2";
 choices[33][2] = "TR2";
 choices[33][3] = "AT";
 answers[33] = choices[33][0];
 units[33] = "103";
 comments[33] = "Id Pregunta: 3745. ";


//  Id pregunta: 3753 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  MPLS se encapsula en la torre de protocolos:";
 choices[34]= new Array();
 choices[34][0] = "por encima del protocolo IP y por debajo del protocolo TCP";
 choices[34][1] = "por encima del protocolo TCP y por debajo de otros protocolos de transporte";
 choices[34][2] = "por encima de los protocolos del nivel de enlace y por debajo de IP";
 choices[34][3] = "por encima de los protocolos del nivel de transporte";
 answers[34] = choices[34][2];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3753. ";


//  Id pregunta: 3763 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  Para la conmutaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "La t&eacute;cnica &quot;cut through switching&quot; tiene la ventaja de tener una latencia menor";
 choices[35][1] = "La t&eacute;cnica &quot;cut through switching&quot; tiene la desventaja de transmitir paquetes err&oacute;neos";
 choices[35][2] = "La t&eacute;cnica &quot;store and fordward&quot; tiene las caracter&iacute;sticas opuestas a &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[35][3] = "Todas las afirmaciones anteriores son correctas";
 answers[35] = choices[35][3];
 units[35] = "102";
 comments[35] = "Id Pregunta: 3763. ";


//  Id pregunta: 3807 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Seg&uacute;n el modelo internet SLIP y PPP pertenecen:";
 choices[36]= new Array();
 choices[36][0] = "Nivel de enlace";
 choices[36][1] = "Nivel de red";
 choices[36][2] = "Nivel de internet";
 choices[36][3] = "Nivel de aplicaci&oacute;n";
 answers[36] = choices[36][1];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3807. ";


//  Id pregunta: 3898 Año de creación de pregunta: 2003-01-01
 questions[37]= "38)  Indicar la afirmaci&oacute;n falsa sobre Frame Relay";
 choices[37]= new Array();
 choices[37][0] = "Las redes Frame-Relay son orientadas a conexi&oacute;n";
 choices[37][1] = "Es capaz de detectar errores pero no de corregirlos";
 choices[37][2] = "CIR es la velocidad de acceso a la red";
 choices[37][3] = "Puede ser implementado en software";
 answers[37] = choices[37][2];
 units[37] = "109";
 comments[37] = "Id Pregunta: 3898. ";


//  Id pregunta: 3952 Año de creación de pregunta: 2003-01-01
 questions[38]= "39)  Indicar cu&aacute;l no es una caracter&iacute;stica de GPRS";
 choices[38]= new Array();
 choices[38][0] = "Permite conmutaci&oacute;n de circuitos y paquetes";
 choices[38][1] = " Mayor velocidad 2 Mbps";
 choices[38][2] = " Desde Internet se la considera como otra subred cualquiera";
 choices[38][3] = "Es un servicio portador basado en conmutaci&oacute;n de paquetes sobre GSM";
 answers[38] = choices[38][1];
 units[38] = "108";
 comments[38] = "Id Pregunta: 3952. ";


//  Id pregunta: 4024 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[39]= new Array();
 choices[39][0] = "HSCSD, GSM, GPRS, UMTS";
 choices[39][1] = "GSM. HSCSD, UMTS, GPRS";
 choices[39][2] = "GSM, HSCSD, GPRS, UMTS";
 choices[39][3] = "GSM, GPRS, HSCSD, UMTS";
 answers[39] = choices[39][2];
 units[39] = "108";
 comments[39] = "Id Pregunta: 4024. ";


//  Id pregunta: 4278 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  Qu&eacute; son las restricciones de integridad?";
 choices[40]= new Array();
 choices[40][0] = "Son condiciones sobre el almacenamiento f&iacute;sico de los datos de la base de datos.";
 choices[40][1] = "Son condiciones que deben cumplir los datos almacenados en la base de datos relacional.";
 choices[40][2] = "Son las restricciones que el sistema de gesti&oacute;n de base de datos impone a los ficheros de la base de datos.";
 choices[40][3] = "Son una serie de caracter&iacute;sticas que deben cumplir las transacciones.";
 answers[40] = choices[40][1];
 units[40] = "58";
 comments[40] = "Id Pregunta: 4278. ";


//  Id pregunta: 4294 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  M&eacute;trica versi&oacute;n 3:";
 choices[41]= new Array();
 choices[41][0] = "No establece diferencias entre los desarrollos orientados a objetos y los desarrollos estructurados.";
 choices[41][1] = "Cubre desarrollos estructurados y de orientaci&oacute;n a objetos";
 choices[41][2] = "Establece en el Proceso de Desarrollo de Sistemas de informaci&oacute;n 3 Procesos (EVS, DSI y CSI).";
 choices[41][3] = "No cubre desarrollos orientados a objeto";
 answers[41] = choices[41][1];
 units[41] = "86";
 comments[41] = "Id Pregunta: 4294. ";


//  Id pregunta: 4504 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cual de las siguientes es una norma certificable?";
 choices[42]= new Array();
 choices[42][0] = "UNE 71501 IN";
 choices[42][1] = "UNE ISO/IEC 17799:2002";
 choices[42][2] = "UNE 71502:2004";
 choices[42][3] = "BS 7799-1";
 answers[42] = choices[42][2];
 units[42] = "";
 comments[42] = "Id Pregunta: 4504. ";


//  Id pregunta: 4519 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  Una herramienta inform&aacute;tica especialmente dise&ntilde;ada para ayudar a los usuarios a trabajar en colaboraci&oacute;n de la forma mas eficaz es";
 choices[43]= new Array();
 choices[43][0] = "Un Data-Warehouse";
 choices[43][1] = "Un Workflow";
 choices[43][2] = "Un Groupware";
 choices[43][3] = "Un OLAP";
 answers[43] = choices[43][2];
 units[43] = "71";
 comments[43] = "Id Pregunta: 4519. ";


//  Id pregunta: 4704 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ..";
 choices[44]= new Array();
 choices[44][0] = "el servidor tiene un built-in de JVM.";
 choices[44][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente";
 choices[44][2] = "el navegador tiene un built-in de JVM";
 choices[44][3] = "los applets no necesitan una JVM.";
 answers[44] = choices[44][2];
 units[44] = "60";
 comments[44] = "Id Pregunta: 4704. Examen 2006 JCYL";


//  Id pregunta: 4806 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y seaplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itineranciade clientes es el:";
 choices[45]= new Array();
 choices[45][0] = "802.11e";
 choices[45][1] = "802.11f";
 choices[45][2] = "802.11h";
 choices[45][3] = "802.11i";
 answers[45] = choices[45][1];
 units[45] = "107";
 comments[45] = "Id Pregunta: 4806. ";


//  Id pregunta: 4893 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;A cual de los siguientes entes no les es de aplicaci&oacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico?";
 choices[46]= new Array();
 choices[46][0] = "Al Ministerio de Defensa";
 choices[46][1] = "Al INEM";
 choices[46][2] = "A la Seguridad Social";
 choices[46][3] = "Se aplica a todos los anteriores.";
 answers[46] = choices[46][3];
 units[46] = "41";
 comments[46] = "Id Pregunta: 4893. ";


//  Id pregunta: 5047 Año de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[47]= new Array();
 choices[47][0] = "24 meses";
 choices[47][1] = "5 a&ntilde;os";
 choices[47][2] = "30 meses";
 choices[47][3] = "4 a&ntilde;os";
 answers[47] = choices[47][2];
 units[47] = "30";
 comments[47] = "Id Pregunta: 5047. Examen TIC A 2007";


//  Id pregunta: 5062 Año de creación de pregunta: 2003-01-01
 questions[48]= "49)  Se&ntilde;ale cual de los siguientes NO es un modelo de ciclo de vida del software:";
 choices[48]= new Array();
 choices[48][0] = "Cascada";
 choices[48][1] = "Espiral";
 choices[48][2] = "Prototipado";
 choices[48][3] = "Escalera";
 answers[48] = choices[48][3];
 units[48] = "76";
 comments[48] = "Id Pregunta: 5062. Examen TIC A 2007";


//  Id pregunta: 5072 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?:";
 choices[49]= new Array();
 choices[49][0] = "Entidad externa";
 choices[49][1] = "Proceso";
 choices[49][2] = "Funci&oacute;n";
 choices[49][3] = "Almac&eacute;n de datos";
 answers[49] = choices[49][2];
 units[49] = "81";
 comments[49] = "Id Pregunta: 5072. Examen TIC A 2007";


//  Id pregunta: 5148 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3, &iquest;qu&eacute; interface tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un Sistema de Informaci&oacute;n?";
 choices[50]= new Array();
 choices[50][0] = "Aseguramiento de la Calidad.";
 choices[50][1] = "Seguridad.";
 choices[50][2] = "Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[50][3] = "Gesti&oacute;n de Proyectos.";
 answers[50] = choices[50][3];
 units[50] = "86";
 comments[50] = "Id Pregunta: 5148. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5220 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  La tarea &quot;Diagn&oacute;stico del Sistema Actual&quot; a qu&eacute; actividad del procesos Planificaci&oacute;n de Sistemas de Informaci&oacute;n pertenece";
 choices[51]= new Array();
 choices[51][0] = "Estudio de la informaci&oacute;n relevante";
 choices[51][1] = "Estudio de los Sistemas de Informaci&oacute;n Actuales";
 choices[51][2] = "Identificaci&oacute;n de Requisitos";
 choices[51][3] = "Dise&ntilde;o del modelo de Sistemas de Informaci&oacute;n";
 answers[51] = choices[51][3];
 units[51] = "86";
 comments[51] = "Id Pregunta: 5220. ";


//  Id pregunta: 5226 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  En relaci&oacute;n al modelo de ciclo de vida de un sistema de informaci&oacute;n NO se puede afirmar:";
 choices[52]= new Array();
 choices[52][0] = "Es el conjunto etapas por las que atraviesa el sistema desde su concepci&oacute;n hasta su retirada del servicio";
 choices[52][1] = "Los modelos de ciclo de vida tradicionales, entre los que se engloban el modelo en cascada y los basados en prototipos, son los de m&aacute;s amplia utilizaci&oacute;n";
 choices[52][2] = "Los modelos de ciclo vida basados en transformaciones se adaptan bien a cualquier proyecto.";
 choices[52][3] = "En la pr&aacute;ctica no se suelen seguir modelos en forma pura, sino los que de acuerdo a las peculiaridades del sistema y la experiencia del jefe proyecto se pueden incorporar aspectos de otros modelos.";
 answers[52] = choices[52][2];
 units[52] = "76";
 comments[52] = "Id Pregunta: 5226. ";


//  Id pregunta: 5303 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  En Frame Relay, el par&aacute;metro que indica la velocidad media de transmisi&oacute;n, que la red se compromete a transmitir como m&iacute;nimo es:";
 choices[53]= new Array();
 choices[53][0] = "CIR";
 choices[53][1] = "Bc";
 choices[53][2] = "PIR";
 choices[53][3] = "Be";
 answers[53] = choices[53][0];
 units[53] = "109";
 comments[53] = "Id Pregunta: 5303. ";


//  Id pregunta: 5659 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Seg&uacute;n el RD 1720/2007, cual de los siguientes es un requisito del documento de seguridad, exclusivo para los niveles medio y alto:";
 choices[54]= new Array();
 choices[54][0] = "La identificacion del responsable o responsables de seguridad.";
 choices[54][1] = "Los procedimientos de realizacion de copias de repaldo y de recuperacion de los datos en los ficheros o tratamientos automatizados.";
 choices[54][2] = "Los controles periodicos que se deban realizar para verificar el cumplimiento de lo dispuesto en el propio documento.";
 choices[54][3] = "La a) y la c) lo son.";
 answers[54] = choices[54][3];
 units[54] = "29";
 comments[54] = "Id Pregunta: 5659. ";


//  Id pregunta: 5670 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Cual de los siguientes no ser&iacute;a un patr&oacute;n de dise&ntilde;o J2EE";
 choices[55]= new Array();
 choices[55][0] = "abstraction inversion";
 choices[55][1] = "session fa&Ccedil;ade";
 choices[55][2] = "model view controler";
 choices[55][3] = "Data Access Objects";
 answers[55] = choices[55][0];
 units[55] = "116";
 comments[55] = "Id Pregunta: 5670. ";


//  Id pregunta: 5677 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indique cu&aacute;l de las siguientes opciones no est&aacute; relacionada con la Web Sem&aacute;ntica:";
 choices[56]= new Array();
 choices[56][0] = "RDF (Resource Description Framework).";
 choices[56][1] = "OWL (Web Ontology Language).";
 choices[56][2] = "XML (Extensible Markup Language)";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][3];
 units[56] = "71";
 comments[56] = "Id Pregunta: 5677. ";


//  Id pregunta: 5744 Año de creación de pregunta: 2009-01-01
 questions[57]= "58)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monogr&aacute;mica?";
 choices[57]= new Array();
 choices[57][0] = "La que cifra los caracteres de uno en uno";
 choices[57][1] = "La que sustituye cada letra por varias letras";
 choices[57][2] = "Aquella en que cada letra es sustituidad siempre por la misma dentro de un mismo mensaje";
 choices[57][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[57] = choices[57][0];
 units[57] = "72";
 comments[57] = "Id Pregunta: 5744. ";


//  Id pregunta: 5901 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[58]= new Array();
 choices[58][0] = "Puntuaciones normalizadas";
 choices[58][1] = "Factor de ponderaci&oacute;n de los criterios";
 choices[58][2] = "Coeficiente de concordancia";
 choices[58][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n";
 answers[58] = choices[58][2];
 units[58] = "34";
 comments[58] = "Id Pregunta: 5901. MAP 2008 A1";


//  Id pregunta: 5921 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  En relaci&oacute;n a la ITU (International Telecommunication Union), indique cu&aacute;l de los siguientes NO se corresponde con un sector estrat&eacute;gico de la misma:";
 choices[59]= new Array();
 choices[59][0] = "Radiocomunicaciones (ITU-R)";
 choices[59][1] = "Estandarizaci&oacute;n (ITU-T)";
 choices[59][2] = "Seguridad (ITU-S)";
 choices[59][3] = "Desarrollo (ITU-D)";
 answers[59] = choices[59][2];
 units[59] = "42";
 comments[59] = "Id Pregunta: 5921. MAP 2008 A1";


//  Id pregunta: 6048 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  GEANT2 es una red promovida por la UE para:";
 choices[60]= new Array();
 choices[60][0] = "El intercambio de datos entre las Administraciones Europeas";
 choices[60][1] = "La interconexi&oacute;n de la comunidad cient&iacute;fica y universitaria";
 choices[60][2] = "Las dos respuestas anteriores son correctas";
 choices[60][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[60] = choices[60][1];
 units[60] = "103";
 comments[60] = "Id Pregunta: 6048. ";


//  Id pregunta: 6205 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  En Java, &iquest;Qu&eacute; es JSON?";
 choices[61]= new Array();
 choices[61][0] = "Un formato ligero para el intercambio de datos";
 choices[61][1] = "Tecnolog&iacute;a con la finalidad principal de facilitar la integraci&oacute;n en la misma p&aacute;gina Web de aplicaciones y servicios a priori independientes";
 choices[61][2] = "Servicios interactivos en red dando al usuario el control de los datos";
 choices[61][3] = "Componentes modulares de interfaz de usuario gestionados y visualizados en un portal web";
 answers[61] = choices[61][0];
 units[61] = "116";
 comments[61] = "Id Pregunta: 6205. TICB-2009, bloque desarrollo";


//  Id pregunta: 6241 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  De acuerdo a la terminolog&iacute;a adoptada por el IEEE, la transformaci&oacute;n de una forma de representaci&oacute;n del sistema en otra distinta, pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema, es la definici&oacute;n de:";
 choices[62]= new Array();
 choices[62][0] = "Ingenier&iacute;a hacia delante.";
 choices[62][1] = "Reestructuraci&oacute;n.";
 choices[62][2] = "Reingenier&iacute;a.";
 choices[62][3] = "Ingenier&iacute;a inversa.";
 answers[62] = choices[62][1];
 units[62] = "91";
 comments[62] = "Id Pregunta: 6241. TIC B-2009, bloque desarrollo";


//  Id pregunta: 6410 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  De acuerdo a lo dispuesto en la ley sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico, se considerar&aacute; infracci&oacute;n muy grave:";
 choices[63]= new Array();
 choices[63][0] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n";
 choices[63][1] = "La ausencia de cita de la fuente";
 choices[63][2] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida";
 choices[63][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia";
 answers[63] = choices[63][3];
 units[63] = "30";
 comments[63] = "Id Pregunta: 6410. Art&iacute;culo 11 Ley 37/2007";


//  Id pregunta: 6493 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  El Coste de Calidad incluye todos los costes acarreados en las actividades relacionadas en la obtenci&oacute;n de la calidad. Los Costes de Calidad se pueden dividir en 3 grupos, que son:";
 choices[64]= new Array();
 choices[64][0] = "Costes asociados con la planificaci&oacute;n, la formaci&oacute;n y las pruebas";
 choices[64][1] = "Costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos";
 choices[64][2] = "Costes asociados con la inspecci&oacute;n, la reparaci&oacute;n y el mantenimiento";
 choices[64][3] = "Costes asociados con el an&aacute;lisis, la revisi&oacute;n y las devoluciones de productos";
 answers[64] = choices[64][1];
 units[64] = "92";
 comments[64] = "Id Pregunta: 6493. Castilla La Mancha 2009";


//  Id pregunta: 7157 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes funciones no las realiza el Sistema Operativo?";
 choices[65]= new Array();
 choices[65][0] = "Gesti&oacute;n de memoria";
 choices[65][1] = "Administraci&oacute;n de procesos";
 choices[65][2] = "Arranque de la m&aacute;quina";
 choices[65][3] = "Administraci&oacute;n del sistema de E/S";
 answers[65] = choices[65][2];
 units[65] = "52";
 comments[65] = "Id Pregunta: 7157. Examen TIC B 2009";


//  Id pregunta: 7160 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Seleccione la afirmaci&oacute;n cierta respecto al Sistema Operativo UNIX";
 choices[66]= new Array();
 choices[66][0] = "UNIX no permite la comunicaci&oacute;n entre procesos";
 choices[66][1] = "loctl es un comando que permite crear un fichero";
 choices[66][2] = "Las normas POSIX definen la organizaci&oacute;n de la memoria";
 choices[66][3] = "Cada fichero lleva asociada una estructura llamada nodo-i (inode)";
 answers[66] = choices[66][3];
 units[66] = "53";
 comments[66] = "Id Pregunta: 7160. Examen TIC B 2009";


//  Id pregunta: 7251 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  El protocolo FTP es un protocolo:";
 choices[67]= new Array();
 choices[67][0] = "Seguro";
 choices[67][1] = "No orientado a conexi&oacute;n";
 choices[67][2] = "De nivel de aplicaci&oacute;n";
 choices[67][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red";
 answers[67] = choices[67][2];
 units[67] = "100";
 comments[67] = "Id Pregunta: 7251. Examen TIC B 2009";


//  Id pregunta: 7291 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Es un proveedor de SW de conversi&oacute;n texto-voz (TTS):";
 choices[68]= new Array();
 choices[68][0] = "Nuance";
 choices[68][1] = "Loquendo";
 choices[68][2] = "a y b son correctas";
 choices[68][3] = "a y b son incorrectas";
 answers[68] = choices[68][1];
 units[68] = "94";
 comments[68] = "Id Pregunta: 7291. ";


//  Id pregunta: 7335 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes organizaciones espa&ntilde;olas no es miembro de ETSI?";
 choices[69]= new Array();
 choices[69][0] = "AENOR";
 choices[69][1] = "TELEFONICA S.A.";
 choices[69][2] = "UNIVERSIDAD AUT&Oacute;NOMA DE MADRID";
 choices[69][3] = "MINISTERIO DE INDUSTRIA, TURISMO y COMERCIO";
 answers[69] = choices[69][0];
 units[69] = "42";
 comments[69] = "Id Pregunta: 7335. http://portal.etsi.org/Portal_IntegrateAppli/QueryResult.asp?Alone=1&amp;SortBy=&amp;SortDirection=&amp;Param=#";


//  Id pregunta: 7792 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[70]= new Array();
 choices[70][0] = " Java 2 Micro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java.";
 choices[70][1] = " Los Java 2 Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java.";
 choices[70][2] = " Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http.";
 choices[70][3] = " Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet.";
 answers[70] = choices[70][2];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7792. Map 2005";


//  Id pregunta: 7821 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para los protocolos de enlace orientados a car&aacute;cter?";
 choices[71]= new Array();
 choices[71][0] = " La sincronizaci&oacute;n se consigue gracias a que siempre hay un car&aacute;cter STX o SOH al comienzo de la trama y un car&aacute;cter ETX o ETB al final de la trama.";
 choices[71][1] = " No es necesario el control de transparencia dado que el contenido de la trama se conoce gracias a la aparici&oacute;n de los caracteres de control.";
 choices[71][2] = " El control de flujo mediante t&eacute;cnica de frenado brusco se consigue utilizando una trama de control wack.";
 choices[71][3] = " Para la detecci&oacute;n de errores se protegen todos los caracteres transmitidos excepto las cabeceras.";
 answers[71] = choices[71][2];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7821. Map 2005";


//  Id pregunta: 7826 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   Dentro del kernel de Unix, el n&uacute;cleo dependiente:";
 choices[72]= new Array();
 choices[72][0] = " Controla la ejecuci&oacute;n de procesos.";
 choices[72][1] = " Asigna memoria principal a un proceso de ejecuci&oacute;n.";
 choices[72][2] = " Permite el acceso controlado de los procesos a los perif&eacute;ricos.";
 choices[72][3] = " Se encarga de las interrupciones.";
 answers[72] = choices[72][3];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7826. Map 2005";


//  Id pregunta: 7877 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3";
 choices[73]= new Array();
 choices[73][0] = " de Quinlan:";
 choices[73][1] = " Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basados en la entrop&iacute;a.";
 choices[73][2] = " Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizando mecanismos de inducci&oacute;n.";
 choices[73][3] = " Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizando aprendizaje no supervisado.";
 answers[73] = choices[73][1];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7877. Map 2006";


//  Id pregunta: 7893 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar las especificaciones de est&aacute;ndares en Internet?";
 choices[74]= new Array();
 choices[74][0] = " IESG (Internet Engineering Steering Group).";
 choices[74][1] = " IETF (Internet Engineering Task Force).";
 choices[74][2] = " IAB (Internet Architecture Board).";
 choices[74][3] = " IANA (Internet Assigned Number Authority).";
 answers[74] = choices[74][1];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7893. Map 2006";


//  Id pregunta: 7979 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en la norma del ETSI:";
 choices[75]= new Array();
 choices[75][0] = " ET 30192.";
 choices[75][1] = " ET 20225.";
 choices[75][2] = " ET 12500.";
 choices[75][3] = " ET 10000.";
 answers[75] = choices[75][0];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 7979. Map 2007";


//  Id pregunta: 8226 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  Se&ntilde;ale la afirmaci&oacute;n NO correcta en relaci&oacute;n con el Registro Electr&oacute;nico Com&uacute;n (REC) de la Administraci&oacute;n General del Estado:";
 choices[76]= new Array();
 choices[76][0] = "REC posibilita la presentaci&oacute;n de cualesquiera solicitudes, escritos y comunicaciones dirigidas a la Administraci&oacute;n General del Estado y a sus Organismos p&uacute;blicos.";
 choices[76][1] = "La Direcci&oacute;n General de Impulso de la Administraci&oacute;n Electr&oacute;nica del Ministerio de la Presidencia, es la responsable de la custodia y manejo de los escritos presentados.";
 choices[76][2] = "Los formatos de los documentos electr&oacute;nicos y de las im&aacute;genes electr&oacute;nicas de los documentos, se establecen en el marco del Esquema Nacional de Interoperabilidad.";
 choices[76][3] = "El acuse de recibo electr&oacute;nico emitido por REC da constancia de la presentaci&oacute;n, pero no implica el inicio del c&oacute;mputo de plazos a los restantes efectos.";
 answers[76] = choices[76][1];
 units[76] = "44";
 comments[76] = "Id Pregunta: 8226. Examen TIC A1 2010";


//  Id pregunta: 8266 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  La tasa de rendimiento contable o rentabilidad media de una inversi&oacute;n es igual a:";
 choices[77]= new Array();
 choices[77][0] = "El cociente entre el beneficio medio anual y la inversi&oacute;n media anual.";
 choices[77][1] = "El cociente entre el flujo de caja medio anual y la inversi&oacute;n media anual.";
 choices[77][2] = "El valor actualizado de la diferencia entre los cobros y los pagos derivados de la inversi&oacute;n.";
 choices[77][3] = "El cociente entre el sumatorio de los flujos de caja y el desembolso inicial.";
 answers[77] = choices[77][0];
 units[77] = "38";
 comments[77] = "Id Pregunta: 8266. Examen TIC A1 2010";


//  Id pregunta: 8307 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  Un documento firmado digitalmente incluye la huella digital:";
 choices[78]= new Array();
 choices[78][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[78][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[78][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[78][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[78] = choices[78][2];
 units[78] = "111";
 comments[78] = "Id Pregunta: 8307. Examen TIC A2 2010";


//  Id pregunta: 8443 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se considera una mejora de IPv6 respecto a IPv4?";
 choices[79]= new Array();
 choices[79][0] = "Capacidad extendida del direccionamiento";
 choices[79][1] = "Seguridad de nivel de aplicaci&oacute;n obligatoria";
 choices[79][2] = "Movilidad";
 choices[79][3] = "Multicast";
 answers[79] = choices[79][1];
 units[79] = "100";
 comments[79] = "Id Pregunta: 8443. ";


//  Id pregunta: 8466 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  Las fibras monomodo:";
 choices[80]= new Array();
 choices[80][0] = "Se emplean normalmente en enlaces de de telecomunicaci&oacute;n de distancias largas";
 choices[80][1] = "Presentan la superficie de separaci&oacute;n entre el n&uacute;cleo y el revestimiento, claramente definida y diferenciada dando lugar a que los rayos luminosos se reflejen hacia el n&uacute;cleo formando diversos &aacute;ngulos";
 choices[80][2] = "Se caracterizan por una velocidad de flujo reducida";
 choices[80][3] = "Su instalaci&oacute;n es m&aacute;s sencilla que las multimodo";
 answers[80] = choices[80][0];
 units[80] = "99";
 comments[80] = "Id Pregunta: 8466. Analista Ayto. Madrid 2010";


//  Id pregunta: 8908 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  La unidad Aritm&eacute;tico-L&oacute;gica (ALU):";
 choices[81]= new Array();
 choices[81][0] = "Contiene las instrucciones del programa.";
 choices[81][1] = "Contienen los datos de la aplicaci&oacute;n.";
 choices[81][2] = "Realiza las operaciones matem&aacute;ticas.";
 choices[81][3] = "Controla los dispositivos l&oacute;gicos a los que accede la CPU";
 answers[81] = choices[81][2];
 units[81] = "47";
 comments[81] = "Id Pregunta: 8908. Operador Ayto. Madrid 2010";


//  Id pregunta: 9097 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[82]= new Array();
 choices[82][0] = "No se pueden realizar copias de seguridad.";
 choices[82][1] = "La ley premite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[82][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[82][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[82] = choices[82][1];
 units[82] = "36";
 comments[82] = "Id Pregunta: 9097. ";


//  Id pregunta: 9344 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  El programa ISA contempla una serie de grupos de acciones o &ldquo;clusters&rdquo;. Entre ellos NO se encuentra:";
 choices[83]= new Array();
 choices[83][0] = "Intercambio de Informaci&oacute;n segura";
 choices[83][1] = "Arquitectura de Interoperabilidad";
 choices[83][2] = "Evaluaci&oacute;n de las implicaciones TIC de la nueva legislaci&oacute;n europea.";
 choices[83][3] = "Despliegue de redes de nueva generaci&oacute;n";
 answers[83] = choices[83][0];
 units[83] = "103";
 comments[83] = "Id Pregunta: 9344. Fuente: http://ec.europa.eu/isa/actions/index_en.htm";


//  Id pregunta: 9365 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  Acerca de Fibre Channel, se puede decir:";
 choices[84]= new Array();
 choices[84][0] = "El protocolo sigue el model de referencia OSI.";
 choices[84][1] = "Es un protocolo con 5 capas. ";
 choices[84][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[84][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[84] = choices[84][1];
 units[84] = "101, 48";
 comments[84] = "Id Pregunta: 9365. ";


//  Id pregunta: 9377 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Qu&eacute; m&eacute;todo de asignaci&oacute;n de pesos no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[85]= new Array();
 choices[85][0] = "Asignaci&oacute;n directa";
 choices[85][1] = "Entrop&iacute;a";
 choices[85][2] = "SAATY";
 choices[85][3] = "La herramienta SSD-AAPP soporta todos los m&eacute;todos anteriores de asignaci&oacute;n de pesos";
 answers[85] = choices[85][3];
 units[85] = "34";
 comments[85] = "Id Pregunta: 9377. ";


//  Id pregunta: 9433 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  Se&ntilde;ale, de entre las siguientes, la que es una infracci&oacute;n grave seg&uacute;n la ley 32/2003";
 choices[86]= new Array();
 choices[86][0] = "La interceptaci&oacute;n, sin autorizaci&oacute;n, de telecomunicaciones no destinadas al p&uacute;blico en general.";
 choices[86][1] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 choices[86][2] = "El incumplimiento de las condiciones determinantes de la adjudicaci&oacute;n y asignaci&oacute;n de los recursos de numeraci&oacute;n incluidos en los planes de numeraci&oacute;n ";
 choices[86][3] = "La falta de notificaci&oacute;n a la Administraci&oacute;n por el titular de una red de comunicaciones electr&oacute;nicas de los servicios que se est&eacute;n prestando a trav&eacute;s de ella cuando esta informaci&oacute;n sea exigible de acuerdo con la normativa aplicable.";
 answers[86] = choices[86][1];
 units[86] = "110";
 comments[86] = "Id Pregunta: 9433. ";


//  Id pregunta: 9502 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  Cosmoplayer de Platinum:";
 choices[87]= new Array();
 choices[87][0] = "Es un plugin que reproduce sonidos";
 choices[87][1] = "Es un plugin que reproduce pel&iacute;culas";
 choices[87][2] = "Es un plugin que reproduce documentos VRML (formato de realidad virtual)";
 choices[87][3] = "Ninguna de las anteriores es correcta";
 answers[87] = choices[87][2];
 units[87] = "114";
 comments[87] = "Id Pregunta: 9502. ";


//  Id pregunta: 9541 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[88]= new Array();
 choices[88][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[88][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[88][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[88][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[88] = choices[88][3];
 units[88] = "30";
 comments[88] = "Id Pregunta: 9541. Examen TIC A1 2011	";


//  Id pregunta: 9547 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Seg&uacute;n la LSSI, la acci&oacute;n de cesaci&oacute;n, dirigida a obtener una sentencia que condene al demandado a cesar en una conducta contraria a dicha Ley, NO podr&aacute; ser interpuesta por:";
 choices[89]= new Array();
 choices[89][0] = "Grupos de consumidores o usuarios afectados";
 choices[89][1] = "El Ministerio Fiscal";
 choices[89][2] = "El Instituto Nacional de Consumo";
 choices[89][3] = "La Secretar&iacute;a de Estado para las Telecomunicaciones y la Sociedad de la Informaci&oacute;n";
 answers[89] = choices[89][3];
 units[89] = "30";
 comments[89] = "Id Pregunta: 9547. ";


//  Id pregunta: 9601 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[90]= new Array();
 choices[90][0] = "Las interrupciones";
 choices[90][1] = "El scheduler";
 choices[90][2] = "Los drivers de los dispositivos";
 choices[90][3] = "a) y c) son correctas";
 answers[90] = choices[90][3];
 units[90] = "53";
 comments[90] = "Id Pregunta: 9601. ";


//  Id pregunta: 9655 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  El sistema operativo OS X de Apple se llama:";
 choices[91]= new Array();
 choices[91][0] = "Maverick";
 choices[91][1] = "Mavericks";
 choices[91][2] = "Cocoa";
 choices[91][3] = "Kit Kat";
 answers[91] = choices[91][1];
 units[91] = "56";
 comments[91] = "Id Pregunta: 9655. Maverick es el framework de java para desarrollo web";


//  Id pregunta: 9994 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es la herramienta utilizada para organizar reuniones virtuales dentro de la Red SARA?";
 choices[92]= new Array();
 choices[92][0] = "Conect@";
 choices[92][1] = "Re&uacute;nete";
 choices[92][2] = "Acceda en Cloud";
 choices[92][3] = "TelePresence";
 answers[92] = choices[92][1];
 units[92] = "120";
 comments[92] = "Id Pregunta: 9994. ";


//  Id pregunta: 10103 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Qu&eacute; tipo de flujos de datos no existen?";
 choices[93]= new Array();
 choices[93][0] = "Flujos discretos y continuos";
 choices[93][1] = "Flujos de consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[93][2] = "Flujo de control";
 choices[93][3] = "Existen todos los tipos de flujos anteriores";
 answers[93] = choices[93][3];
 units[93] = "81";
 comments[93] = "Id Pregunta: 10103. ";


//  Id pregunta: 10169 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  En una base de datos Oracle, &iquest;qu&eacute; afirmaci&oacute;n es correcta en relaci&oacute;n con las vistas materializadas?";
 choices[94]= new Array();
 choices[94][0] = "La materializaci&oacute;n de una vista es llevada a cabo por el usuario mediante la exportaci&oacute;n a disco de los datos devueltos por la vista";
 choices[94][1] = "Oracle no utiliza el t&eacute;rmino de &quot;vista materializada&quot;, si no el de &quot;snapshot&quot;";
 choices[94][2] = "Se define de manera similar a una vista com&uacute;n pero, en lugar de almacenar s&oacute;lo la definici&oacute;n de la vista, almacena el resultado de la consulta";
 choices[94][3] = "Desde la versi&oacute;n 8i, la nueva caracter&iacute;stica &quot;QUERY REWRITE&quot; otorga mayor funcionalidad a las snapshots frente a las vistas materializadas";
 answers[94] = choices[94][2];
 units[94] = "58";
 comments[94] = "Id Pregunta: 10169. ";


//  Id pregunta: 10197 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Indique la afirmaci&oacute;n correcta con respecto a la tecnolog&iacute;a bluetooth 4.0";
 choices[95]= new Array();
 choices[95][0] = "Comercialmente se le ha dado el nombre de Zigbee";
 choices[95][1] = "Supera en velocidad a la versi&oacute;n 2.0 de bluetooth";
 choices[95][2] = "Est&aacute; pensado para transmitir pocos paquetes usando poca energ&iacute;a";
 choices[95][3] = "El alcance supera los 100 metros";
 answers[95] = choices[95][2];
 units[95] = "107";
 comments[95] = "Id Pregunta: 10197. ";


//  Id pregunta: 10351 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[96]= new Array();
 choices[96][0] = "Para cumplir nivel AA, la presentaci&oacute;n visual de texto e im&aacute;genes de texto debe tener una relaci&oacute;n de contraste de, al menos, 4.5:1";
 choices[96][1] = "Lo anterior es cierto, pero para nivel A";
 choices[96][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[96][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que no aplica a logotipos, textos grandes y textos incidentales";
 answers[96] = choices[96][3];
 units[96] = "39";
 comments[96] = "Id Pregunta: 10351. Consultar WCAG Pauta 1.4.3 Contraste (m&iacute;nimo)";


//  Id pregunta: 10492 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Cual de los siguientes no es un tipo de ataque ?";
 choices[97]= new Array();
 choices[97][0] = "Ataque por entrop&iacute;a";
 choices[97][1] = "Ataque por fuerza bruta";
 choices[97][2] = "Ataque con Tablas Arcoiris";
 choices[97][3] = "Todos son tipos de ataques";
 answers[97] = choices[97][0];
 units[97] = "111";
 comments[97] = "Id Pregunta: 10492. No hay referencias a ataques por entropia. En la guia CCN-STIC 436, por ejemplo, se pueden encontrar referencias a taques con Tablas Arcoiris, tambien en Wikipedia";


//  Id pregunta: 10510 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Cual de los siguientes no es un protocolo de correo electr&oacute;nico?";
 choices[98]= new Array();
 choices[98][0] = "SMTP";
 choices[98][1] = "MIME";
 choices[98][2] = "POP2";
 choices[98][3] = "Todos lo son";
 answers[98] = choices[98][3];
 units[98] = "106";
 comments[98] = "Id Pregunta: 10510. POP2 es una versi&oacute;n obsoleta de POP, pero se pregunta por protocolos de correo. No por su actualidad o uso.";


//  Id pregunta: 10562 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Los controles detectivos tienen como objeto:";
 choices[99]= new Array();
 choices[99][0] = "reducir el riesgo ante una debilidad existente";
 choices[99][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[99][2] = "Solucionar problemas detectados por controles detectivos";
 choices[99][3] = "Reportar errores";
 answers[99] = choices[99][3];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10562. ";


