/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 86 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; tipos de miembros forman X/OPEN (actual Open Group)?:";
 choices[0]= new Array();
 choices[0][0] = "Distintas compa&ntilde;&iacute;as que desarrollan sistemas operativos y hardware";
 choices[0][1] = "Organizaciones de estandarizaci&oacute;n";
 choices[0][2] = "Grupos de usuarios y diversos grupos de inter&eacute;s en tecnolog&iacute;as de la informaci&oacute;n";
 choices[0][3] = "Todos los anteriores";
 answers[0] = choices[0][3];
 units[0] = "42";
 comments[0] = "Id Pregunta: 86. ";


//  Id pregunta: 158 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El punto que centraliza las comunicaciones de los usuarios con Sistemas de Informaci&oacute;n suele denominarse:";
 choices[1]= new Array();
 choices[1][0] = "Centro de control de red ";
 choices[1][1] = "Help desk";
 choices[1][2] = "Centro de contingencias";
 choices[1][3] = "Soporte de teleproceso";
 answers[1] = choices[1][1];
 units[1] = "26";
 comments[1] = "Id Pregunta: 158. ";


//  Id pregunta: 221 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En la planificaci&oacute;n de sistemas, la demanda latente produce:";
 choices[2]= new Array();
 choices[2][0] = "Un crecimiento reprimido.";
 choices[2][1] = "Un crecimiento evolutivo.";
 choices[2][2] = "Un crecimiento gradual.";
 choices[2][3] = "Un crecimiento no gradual.";
 answers[2] = choices[2][3];
 units[2] = "27";
 comments[2] = "Id Pregunta: 221. ";


//  Id pregunta: 243 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En un sistema de informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "En el nivel operacional se toman decisiones a plazo relativamente corto";
 choices[3][1] = "En el nivel estrat&eacute;gico se toman decisiones a plazo relativamente corto";
 choices[3][2] = "En el nivel operacional se recogen datos del sistema real";
 choices[3][3] = "En el nivel t&aacute;ctico se toman decisiones a largo plazo";
 answers[3] = choices[3][2];
 units[3] = "21";
 comments[3] = "Id Pregunta: 243. ";


//  Id pregunta: 301 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  La escalabilidad es:";
 choices[4]= new Array();
 choices[4][0] = "Un caso particular de la portabilidad";
 choices[4][1] = "La capacidad de utilizar el mismo entorno de software en diferentes clases de ordenadores";
 choices[4][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[4][3] = "Una propiedad que se da &uacute;nicamente en el mundo Unix";
 answers[4] = choices[4][2];
 units[4] = "40";
 comments[4] = "Id Pregunta: 301. ";


//  Id pregunta: 326 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  Cuando utilizamos las siglas SSD-AAPP, nos estamos refiriendo a:";
 choices[5]= new Array();
 choices[5][0] = "Un sistema de informaci&oacute;n dedicado al an&aacute;lisis de redes de comunicaciones.";
 choices[5][1] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para ayudar a la elecci&oacute;n en la contrataci&oacute;n de bienes o servicios inform&aacute;ticos.";
 choices[5][2] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para decidir si debemos contratar un desarrollo a una empresa externa o hacerlo con medios propios.";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][1];
 units[5] = "34";
 comments[5] = "Id Pregunta: 326. Modificado enunciado (antes SSD-CIABSI) por JCED Preparatic XVII";


//  Id pregunta: 337 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  La realizaci&oacute;n de copias de &quot;backup&quot; peri&oacute;dicas en un centro de proceso de datos es responsabilidad del &aacute;rea de:";
 choices[6]= new Array();
 choices[6][0] = "Desarrollo";
 choices[6][1] = "Mantenimiento";
 choices[6][2] = "Producci&oacute;n";
 choices[6][3] = "En un centro de proceso de datos no es necesario hacer peri&oacute;dicamente copias de seguridad";
 answers[6] = choices[6][2];
 units[6] = "26";
 comments[6] = "Id Pregunta: 337. ";


//  Id pregunta: 362 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Le han encargado realizar una auditor&iacute;a inform&aacute;tica de un centro de proceso de datos en el que, entre otros, se procesan datos fiscales de todas las empresas espa&ntilde;olas. Indique que recomendar&iacute;a solucionar con m&aacute;s urgencia:";
 choices[7]= new Array();
 choices[7][0] = "Las aplicaciones inform&aacute;ticas est&aacute;n insuficientemente documentadas";
 choices[7][1] = "Los equipos no est&aacute;n alimentados con fuentes de alimenta ininterrumpida (U.P.S.)";
 choices[7][2] = "Las copias de seguridad en cinta se guardan junto con las cintas de datos";
 choices[7][3] = "El equipamiento utilizado no responde a la filosof&iacute;a de 'sistemas abiertos'";
 answers[7] = choices[7][2];
 units[7] = "31,32,33";
 comments[7] = "Id Pregunta: 362. ";


//  Id pregunta: 369 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Los ficheros automatizados cuyo objeto sea el almacenamiento de los datos contenidos en los informes personales de calificaci&oacute;n del personal militar profesional , seg&uacute;n la LOPD:";
 choices[8]= new Array();
 choices[8][0] = "No caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[8][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[8][2] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[8][3] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 answers[8] = choices[8][3];
 units[8] = "29";
 comments[8] = "Id Pregunta: 369. ";


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


//  Id pregunta: 541 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  Respecto a las pautas de accesibilidad de la  iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[10]= new Array();
 choices[10][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[10][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[10][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[10][3] = "Todas las anteriores afirmaciones son falsas";
 answers[10] = choices[10][1];
 units[10] = "39";
 comments[10] = "Id Pregunta: 541. ";


//  Id pregunta: 839 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, si hablamos de las ventajas derivadas del uso de vistas en una Base de datos?:";
 choices[11]= new Array();
 choices[11][0] = "Pueden verse los mismos datos por diferentes usuarios";
 choices[11][1] = "Los intercambios de campos entre tablas f&iacute;sicas son transparentes a las vistas del usuario";
 choices[11][2] = "Los intercambios de campos entre tablas f&iacute;sicas no son transparentes a las vistas del usuario";
 choices[11][3] = "Ocultar campos de datos importantes a los usuarios que no deben ser manipulados";
 answers[11] = choices[11][2];
 units[11] = "57";
 comments[11] = "Id Pregunta: 839. ";


//  Id pregunta: 849 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux?:";
 choices[12]= new Array();
 choices[12][0] = "Debian";
 choices[12][1] = "Gentoo Linux";
 choices[12][2] = "OpenBSD";
 choices[12][3] = "TurboLinux";
 answers[12] = choices[12][2];
 units[12] = "52, 53";
 comments[12] = "Id Pregunta: 849. ";


//  Id pregunta: 939 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; se entiende por autoridad de certificaci&oacute;n?:";
 choices[13]= new Array();
 choices[13][0] = "Un juez";
 choices[13][1] = "Una compa&ntilde;&iacute;a que certifica la seguridad de sus sistemas En la actualidad s&oacute;lo puede considerarse a Microsoft como tal,";
 choices[13][2] = "Son &oacute;rganos administrativos dependientes del Consejo Superior de Inform&aacute;tica que dictan las normas de certificaci&oacute;n digital, de acuerdo a las Directivas de la Uni&oacute;n Europea";
 choices[13][3] = "Son entidades que expiden certificados digitales de manera que garantizan la correspondencia entre la identidad de un usuario y su par de claves";
 answers[13] = choices[13][3];
 units[13] = "74";
 comments[13] = "Id Pregunta: 939. ";


//  Id pregunta: 1122 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  En los m&eacute;todos de b&uacute;squeda heur&iacute;stica:";
 choices[14]= new Array();
 choices[14][0] = "El proceso de soluci&oacute;n se plantea como la b&uacute;squeda de estados que contiene todas las posibles soluciones";
 choices[14][1] = "Las estrategias de b&uacute;squeda en anchura pertenecen a la heur&iacute;stica deductiva";
 choices[14][2] = "La amplitud del espacio de estados en un problema dado, dif&iacute;cilmente puede dar lugar a una explosi&oacute;n combinatoria al tratar de enumerar todas las posibilidades";
 choices[14][3] = "En un caso extremo, una b&uacute;squeda ciega (sin funci&oacute;n heur&iacute;stica), obligar&aacute; a realizar una exploraci&oacute;n exhaustiva (en anchura o en profundidad)";
 answers[14] = choices[14][3];
 units[14] = "63";
 comments[14] = "Id Pregunta: 1122. ";


//  Id pregunta: 1349 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Se&ntilde;ale la respuesta falsa respecto de Unix:";
 choices[15]= new Array();
 choices[15][0] = "Se cre&oacute; basandose en MULTICS";
 choices[15][1] = "Est&aacute; escrito en lenguaje C";
 choices[15][2] = "Se us&oacute; primero en la NASA";
 choices[15][3] = "Inicialmente era gratuito";
 answers[15] = choices[15][2];
 units[15] = "53";
 comments[15] = "Id Pregunta: 1349. ";


//  Id pregunta: 1374 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  SSL:";
 choices[16]= new Array();
 choices[16][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza (banco)";
 choices[16][1] = "Permite que un tercero cn acceso al tr&aacute;fico entre el servidor y el cliente no pueda romper la confidencialidad";
 choices[16][2] = "Es un algoritmo de cifrado, de un n&uacute;mero de bits variable";
 choices[16][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[16] = choices[16][1];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1374. ";


//  Id pregunta: 1450 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes no es una herramienta caracter&iacute;stica de un SGBDD?:";
 choices[17]= new Array();
 choices[17][0] = "Diccionario de palabras vac&iacute;as";
 choices[17][1] = "Diccionario de sin&oacute;nimos, acr&oacute;nimos, abreviaturas, etc.";
 choices[17][2] = "Tesauro";
 choices[17][3] = "Corrector sem&aacute;ntico y gramatical";
 answers[17] = choices[17][3];
 units[17] = "58";
 comments[17] = "Id Pregunta: 1450. ";


//  Id pregunta: 1492 Año de creación de pregunta: 2009-01-01
 questions[18]= "19)  &iquest;Deben los prestadores de servicios de la sociedad de la informaci&oacute;n inscribirse en alg&uacute;n registro?:";
 choices[18]= new Array();
 choices[18][0] = "Es necesaria una autorizaci&oacute;n administrativa";
 choices[18][1] = "S&iacute;, pero a&uacute;n no se ha decidido donde";
 choices[18][2] = "No, pero los datos de su inscripci&oacute;n en el Registro Mercantil en el que, en su caso, se encuentren inscritos o de aquel otro registro p&uacute;blico en el que lo estuvieran para la adquisici&oacute;n de personalidad jur&iacute;dica o a los solos efectos de publicidad forman parte de la informaci&oacute;n general considerada en el art&iacute;culo 10 de la Ley 34/2002.";
 choices[18][3] = "No, pero se debe comunicar al Registro Mercantil el nombre de dominio si es utilizado para publicidad";
 answers[18] = choices[18][2];
 units[18] = "30";
 comments[18] = "Id Pregunta: 1492. ";


//  Id pregunta: 1566 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[19]= new Array();
 choices[19][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[19][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[19][2] = " Dos mensajes parecidos producen huellas digitales diferentes";
 choices[19][3] = " La funci&oacute;n hash es reversible";
 answers[19] = choices[19][3];
 units[19] = "73";
 comments[19] = "Id Pregunta: 1566. ";


//  Id pregunta: 1617 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  Los thin clients son:";
 choices[20]= new Array();
 choices[20][0] = "Ordenadores sin disco duro que acceden a las aplicaciones a trav&eacute;s de un servidor.";
 choices[20][1] = "CD arrancable con una colecci&oacute;n de programas GNU/ LINUX.";
 choices[20][2] = "Una plataforma e-learning desarrollada por la universidad de Lovaina.";
 choices[20][3] = "Colecci&oacute;n de utilidades que permiten llevar a cabo un proceso de votaci&oacute;n electr&oacute;nica.";
 answers[20] = choices[20][0];
 units[20] = "50";
 comments[20] = "Id Pregunta: 1617. Junta Andaluc&iacute;a";


//  Id pregunta: 1639 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l no es una funci&oacute;n del Administrador de Base de Datos?";
 choices[21]= new Array();
 choices[21][0] = "Dise&ntilde;o de la base de datos";
 choices[21][1] = "Supervisi&oacute;n del funcionamiento de la base de datos";
 choices[21][2] = "Correci&oacute;n de errores de entrada de datos";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][2];
 units[21] = "57";
 comments[21] = "Id Pregunta: 1639. ";


//  Id pregunta: 1691 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  Respecto a las herramientas, t&eacute;cnicas y terminolog&iacute;a OLAP indique cu&aacute;l de las siguientes afirmaciones es falsa.";
 choices[22]= new Array();
 choices[22][0] = "Trata de la s&iacute;ntesis, el an&aacute;lisis y la consolidaci&oacute;n din&aacute;mica de grandes vol&uacute;menes de datos multidimensionales.";
 choices[22][1] = "Las herramientas OLAP m&aacute;s eficientes en tiempo de respuesta trabajan sobre base de datos relacionales.";
 choices[22][2] = "Las bases de datos multidimensionales almacenan los datos de forma parecida a como lo hace una hoja de c&aacute;lculo aunque, a diferencia de &eacute;stas, es com&uacute;n que utilicen m&aacute;s de dos dimensiones.";
 choices[22][3] = "Se puede en establecer una jerarqu&iacute;a de niveles en cada dimensi&oacute;n para representar diversos grados de detalle.";
 answers[22] = choices[22][1];
 units[22] = "68";
 comments[22] = "Id Pregunta: 1691. ";


//  Id pregunta: 1739 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  En el Directorio Activo, el conjunto de atributos de un objeto dado, se denomina";
 choices[23]= new Array();
 choices[23][0] = "Contenedor";
 choices[23][1] = "Esquema";
 choices[23][2] = "&Aacute;rbol";
 choices[23][3] = "P&aacute;gina";
 answers[23] = choices[23][1];
 units[23] = "56";
 comments[23] = "Id Pregunta: 1739. ";


//  Id pregunta: 1748 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  Identifique el t&eacute;rmino que no designa a una distribuci&oacute;n de Linux";
 choices[24]= new Array();
 choices[24][0] = "Ubuntu";
 choices[24][1] = "Debian";
 choices[24][2] = "Mandeva";
 choices[24][3] = "Red Hat";
 answers[24] = choices[24][2];
 units[24] = "52,53";
 comments[24] = "Id Pregunta: 1748. 57";


//  Id pregunta: 2142 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes tareas no pertenece a la actividad 'Ejecuci&oacute;n de las pruebas del sistema'?:";
 choices[25]= new Array();
 choices[25][0] = "Preparaci&oacute;n del entorno de las pruebas del sistema";
 choices[25][1] = "Evaluaci&oacute;n del resultado de las pruebas del sistema";
 choices[25][2] = "Preparaci&oacute;n de pruebas de aceptaci&oacute;n del sistema";
 choices[25][3] = "Realizaci&oacute;n de las pruebas del sistema";
 answers[25] = choices[25][2];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2142. ";


//  Id pregunta: 2213 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Qu&eacute; expresa la dimensi&oacute;n Radial del modelo en Espiral?:";
 choices[26]= new Array();
 choices[26][0] = "Representa el coste acumulativo de las etapas de an&aacute;lisis";
 choices[26][1] = "Representa el gasto inicial del proyecto";
 choices[26][2] = "Representa el coste acumulativo de las etapas realizadas hasta el momento actual";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][2];
 units[26] = "76";
 comments[26] = "Id Pregunta: 2213. ";


//  Id pregunta: 2236 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  Suponiendo un ciclo de vida en cascada con fases de requisitos del sistema global y sistema software, dise&ntilde;o preliminar, dise&ntilde;o detallado y codificaci&oacute;n &iquest;d&oacute;nde se realiza la implementaci&oacute;n del sistema?";
 choices[27]= new Array();
 choices[27][0] = "Dise&ntilde;o detallado";
 choices[27][1] = "Codificaci&oacute;n";
 choices[27][2] = "Requisitos del sistema software";
 choices[27][3] = "Dise&ntilde;o preliminar";
 answers[27] = choices[27][1];
 units[27] = "76";
 comments[27] = "Id Pregunta: 2236. ";


//  Id pregunta: 2545 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los m&eacute;todos vectoriales y probabil&iacute;sticos de recuperaci&oacute;n de informaci&oacute;n se basan:";
 choices[28]= new Array();
 choices[28][0] = "&Aacute;lgebra de Boole y frecuencia de t&eacute;rminos respectivamente";
 choices[28][1] = "Sistemas de retroalimentaci&oacute;n y lenguaje natural respectivamente";
 choices[28][2] = "Indexaci&oacute;n y recuperaci&oacute;n vectorial";
 choices[28][3] = "Frecuencia de aparici&oacute;n de t&eacute;rminos y teorema de Bayes";
 answers[28] = choices[28][3];
 units[28] = "96";
 comments[28] = "Id Pregunta: 2545. ";


//  Id pregunta: 2748 Año de creación de pregunta: 2006-01-01
 questions[29]= "30)  En un DFD (Diagrama de Flujos de Datos)  el diagrama que  se representa mediante las entidades externas de entrada y salida y un solo proceso principal es el:";
 choices[29]= new Array();
 choices[29][0] = "Diagrama de bloques";
 choices[29][1] = "Diagrama de contexto";
 choices[29][2] = "Diagrama de primer nivel";
 choices[29][3] = "Diagrama b&aacute;sico";
 answers[29] = choices[29][1];
 units[29] = "81";
 comments[29] = "Id Pregunta: 2748. ";


//  Id pregunta: 2871 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes apartados no forma parte del &quot;Sistema de Gesti&oacute;n de la Calidad&quot; de la norma ISO 9004: 2000?";
 choices[30]= new Array();
 choices[30][0] = "Gesti&oacute;n de sistemas y procesos";
 choices[30][1] = "Documentaci&oacute;n";
 choices[30][2] = "Planificaci&oacute;n";
 choices[30][3] = "Uso de los principios de gesti&oacute;n de la calidad";
 answers[30] = choices[30][2];
 units[30] = "92";
 comments[30] = "Id Pregunta: 2871. ";


//  Id pregunta: 3027 Año de creación de pregunta: 2004-01-01
 questions[31]= "32)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[31]= new Array();
 choices[31][0] = "Bluetooth";
 choices[31][1] = "HomeRF";
 choices[31][2] = "HiperLAN/2";
 choices[31][3] = "IrLMP";
 answers[31] = choices[31][1];
 units[31] = "107";
 comments[31] = "Id Pregunta: 3027. TAI 2004";


//  Id pregunta: 3141 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos repetidores?:";
 choices[32]= new Array();
 choices[32][0] = "Operan a nivel de LLC, pudiendo usarse para la interconexi&oacute;n de LANs heterog&eacute;neas de nivel 1 y 2 de OSI";
 choices[32][1] = "Operan a nivel 1 de OSI, pudiendo usarse para conectar diferentes tipos de medio f&iacute;sico";
 choices[32][2] = "Pueden analizar direcci&oacute;n de origen y destino, efectuando funciones de filtrado, pero sobre medios f&iacute;sicos homog&eacute;neos";
 choices[32][3] = "Permiten aislar los diferentes segmentos separando el tr&aacute;fico de cada uno";
 answers[32] = choices[32][1];
 units[32] = "101, 102";
 comments[32] = "Id Pregunta: 3141. ";


//  Id pregunta: 3232 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes protocolos de servicios de Internet corresponde al que se encarga de recoger el correo del buz&oacute;n de usuario de la m&aacute;quina servidora y lo trae a un directorio del disco duro del PC del usuario?:";
 choices[33]= new Array();
 choices[33][0] = "POP3";
 choices[33][1] = "SMTP";
 choices[33][2] = "X.400";
 choices[33][3] = "MIME";
 answers[33] = choices[33][0];
 units[33] = "106";
 comments[33] = "Id Pregunta: 3232. ";


//  Id pregunta: 3627 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  La operaci&oacute;n de gateways se entronca en:";
 choices[34]= new Array();
 choices[34][0] = "El nivel de enlace";
 choices[34][1] = "El nivel de aplicaci&oacute;n";
 choices[34][2] = "Interconexi&oacute;n de sistemas homogeneos";
 choices[34][3] = "Encaminadores y puentes";
 answers[34] = choices[34][1];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3627. ";


//  Id pregunta: 3636 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  La Red Digital de Servicios Integrados (RDSI), permite los siguientes accesos o servicios:";
 choices[35]= new Array();
 choices[35][0] = "Circuitos virtuales permanentes";
 choices[35][1] = "Accesos B&aacute;sico 2B+D";
 choices[35][2] = "Circuitos virtuales punto a punto";
 choices[35][3] = "Todas las respuestas anteriores son correctas";
 answers[35] = choices[35][1];
 units[35] = "103";
 comments[35] = "Id Pregunta: 3636. ";


//  Id pregunta: 3647 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  La tecnolog&iacute;a de red de &aacute;rea local PMD-FDDI:";
 choices[36]= new Array();
 choices[36][0] = "Trabaja a 125 Mhz";
 choices[36][1] = "Utiliza codificaci&oacute;n 4B/5B NRZI";
 choices[36][2] = "Transmite a 100 Mbps";
 choices[36][3] = "Todas las respuestas anteriores son correctas";
 answers[36] = choices[36][3];
 units[36] = "101";
 comments[36] = "Id Pregunta: 3647. ";


//  Id pregunta: 3701 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Las funciones del modelo OSI siguientes: criptograf&iacute;a, gesti&oacute;n de conversaciones, detecci&oacute;n de errores extremo a extremo, validaciones de tensiones el&eacute;ctricas, garantizar la conexi&oacute;n punto a punto; corresponden, por este orden, a los niveles OSI:";
 choices[37]= new Array();
 choices[37][0] = "Presentaci&oacute;n, aplicaci&oacute;n, transporte, f&iacute;sico, red";
 choices[37][1] = "Presentaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, enlace";
 choices[37][2] = "Aplicaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, red";
 choices[37][3] = "Aplicaci&oacute;n, sesi&oacute;n, red, enlace, transporte";
 answers[37] = choices[37][1];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3701. ";


//  Id pregunta: 3900 Año de creación de pregunta: 2003-01-01
 questions[38]= "39)  La Interfaz Aire de la norma IEEE 802.11g es:";
 choices[38]= new Array();
 choices[38][0] = "FHSS/DSSS";
 choices[38][1] = "DSSS";
 choices[38][2] = "OFDM";
 choices[38][3] = "DSSS/OFDM";
 answers[38] = choices[38][3];
 units[38] = "107";
 comments[38] = "Id Pregunta: 3900. ";


//  Id pregunta: 3987 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Se&ntilde;ale la afirmaci&oacute;n verdadera acerca de la Multiplexaci&oacute;n CWDM:";
 choices[39]= new Array();
 choices[39][0] = "El plan de longitudes de onda define 18, pero s&oacute;lo son &uacute;tiles 16.";
 choices[39][1] = "La separaci&oacute;n entre longitudes de onda es de 50 nm y la m&aacute;xima distancia alcanza los 100 km si se emplean todos los canales.";
 choices[39][2] = "Las conexiones simult&aacute;neas que pueden transmitirse en una fibra &oacute;ptica tienen que cumplir el mismo protocolo a fin de impedir la interferencia entre canales.";
 choices[39][3] = "Puede transportar ATM, pero es incompatible con Gigabit Ethernet";
 answers[39] = choices[39][0];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3987. ";


//  Id pregunta: 4039 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  Seg&uacute;n establece la Ley 9/2014, General de Telecomunicaciones, es una infracci&oacute;n muy grave:";
 choices[40]= new Array();
 choices[40][0] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[40][1] = "El establecimiento de comunicaciones utilizando estaciones no autorizadas.";
 choices[40][2] = "El incumplimiento por los operadores de las obligaciones relativas a la integridad y seguridad en la prestaci&oacute;n de servicios o la explotaci&oacute;n de redes de comunicaciones electr&oacute;nica.";
 choices[40][3] = "No atender el requerimiento de cesaci&oacute;n hecho por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n, en los supuestos de producci&oacute;n de interferencias.";
 answers[40] = choices[40][3];
 units[40] = "110";
 comments[40] = "Id Pregunta: 4039. ";


//  Id pregunta: 4100 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  A la hora de empaquetar aplicaciones J2EE utilizaremos";
 choices[41]= new Array();
 choices[41][0] = ".jar";
 choices[41][1] = ".jar y .war dependiendo del contenido y recursos que utilicemos";
 choices[41][2] = "b) es correcta y adem&aacute;s .ear, aunque fundamentalmente se restringe para los EJBs";
 choices[41][3] = "El empaquetamiento no se determina en J2EE";
 answers[41] = choices[41][2];
 units[41] = "116";
 comments[41] = "Id Pregunta: 4100. ";


//  Id pregunta: 4181 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Con el termino &quot;ventana de backup&quot; se define";
 choices[42]= new Array();
 choices[42][0] = "El espacio m&aacute;ximo disponible para un posible backup, dependiente de la capacidad de las cintas utilizadas";
 choices[42][1] = "La m&aacute;xima velocidad de transferencia de la cinta, que determina la duraci&oacute;n del mismo.";
 choices[42][2] = "El ancho de banda de la red de backup, que determina la duraci&oacute;n del mismo.";
 choices[42][3] = "El periodo de inactividad del sistema, que define el tiempo m&aacute;ximo disponible para realizar el backup.";
 answers[42] = choices[42][3];
 units[42] = "97";
 comments[42] = "Id Pregunta: 4181. ";


//  Id pregunta: 4254 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  Como parte de la legislaci&oacute;n para el impulso de la sociedad de la informaci&oacute;n se incluyen:";
 choices[43]= new Array();
 choices[43][0] = "La Ley 34/ 2002 de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico";
 choices[43][1] = "La Ley 59/2003 de 19 de diciembre de firma electr&oacute;nica";
 choices[43][2] = "La Directiva Comunitaria 2000/31/CE de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[43][3] = "Todas las anteriores";
 answers[43] = choices[43][3];
 units[43] = "30";
 comments[43] = "Id Pregunta: 4254. ";


//  Id pregunta: 4293 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Las t&eacute;cnicas de ingenier&iacute;a del software de &ldquo;sala limpia&rdquo; (cleanroom):";
 choices[44]= new Array();
 choices[44][0] = "Enfatizan la prevenci&oacute;n de defectos sobre la correcci&oacute;n de los defectos.";
 choices[44][1] = "Minimizan las pr&aacute;cticas de verificaci&oacute;n formal.";
 choices[44][2] = "No precisan un proceso de desarrollo del software bien definido.";
 choices[44][3] = "Requieren que cada miembro del equipo de desarrollo tenga una responsabilidad &uacute;nica.";
 answers[44] = choices[44][0];
 units[44] = "";
 comments[44] = "Id Pregunta: 4293. ";


//  Id pregunta: 4352 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  El dispositivo necesario para tener acceso a Internet a trav&eacute;s de la red de cable-TV que ofrecen distintos operadores, se llama:";
 choices[45]= new Array();
 choices[45][0] = "CODEC.";
 choices[45][1] = "Router.";
 choices[45][2] = "MODEM cable.";
 choices[45][3] = "Splitter.";
 answers[45] = choices[45][2];
 units[45] = "105";
 comments[45] = "Id Pregunta: 4352. ";


//  Id pregunta: 4481 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cual de los siguientes paquetes de Java contiene las clases b&aacute;sicas utilizadas habitualmente en la mayor&iacute;a de los programas Java?";
 choices[46]= new Array();
 choices[46][0] = "java.lang";
 choices[46][1] = "java.beans";
 choices[46][2] = "java.sql";
 choices[46][3] = "java.util";
 answers[46] = choices[46][0];
 units[46] = "60";
 comments[46] = "Id Pregunta: 4481. JCED - Preparatic XVII";


//  Id pregunta: 4555 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  En CMMi, Ia Process Area (PA) de Gesti&oacute;n de Riesgos (Risk Management) corresponde al Nivel";
 choices[47]= new Array();
 choices[47][0] = "Nivel 2 (Gestionado)";
 choices[47][1] = "Nivel 3 (Definido)";
 choices[47][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[47][3] = "Nivel 5 (Optimizando)";
 answers[47] = choices[47][1];
 units[47] = "87";
 comments[47] = "Id Pregunta: 4555. ";


//  Id pregunta: 4588 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Qu&eacute; extensi&oacute;n tienen en Forms 4.5 los m&oacute;dulos Men&uacute; en binario?";
 choices[48]= new Array();
 choices[48][0] = ".mmb";
 choices[48][1] = ".mxb";
 choices[48][2] = ".bmx";
 choices[48][3] = ".bll";
 answers[48] = choices[48][0];
 units[48] = "";
 comments[48] = "Id Pregunta: 4588. ";


//  Id pregunta: 4678 Año de creación de pregunta: 2009-01-01
 questions[49]= "50)  Tenemos un fichero de tratamiento automatizado que contiene datos sobre ideolog&iacute;a y afiliaci&oacute;n sindical.";
 choices[49]= new Array();
 choices[49][0] = "La LOPD obliga a informar a la Agencia Estatal de Protecci&oacute;n de Datos de su existencia y establece un nivel de seguridad clasificado como medio";
 choices[49][1] = "Solo podemos tener estos datos si existe consentimiento expreso de los afectados.";
 choices[49][2] = "Al no ser un partido pol&iacute;tico o sindicato no podemos tener este tipo de datos";
 choices[49][3] = "Solo podemos tener estos datos si existe consentimiento expreso y por escrito de los afectados o somos un partido pol&iacute;tico o sindicato";
 answers[49] = choices[49][3];
 units[49] = "29";
 comments[49] = "Id Pregunta: 4678. ";


//  Id pregunta: 4756 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes no es una directriz de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[50]= new Array();
 choices[50][0] = "Asegure el control del usuario de los cambios de contenido que dependen del tiempo";
 choices[50][1] = "Utilice soluciones provisionales";
 choices[50][2] = "Aseg&uacute;rese de que los documentos son claros y simples";
 choices[50][3] = "Todas lo son";
 answers[50] = choices[50][3];
 units[50] = "39";
 comments[50] = "Id Pregunta: 4756. ";


//  Id pregunta: 4789 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Qu&eacute; principio de los que se indican a continuaci&oacute;n NO est&aacute; recogido en el Marco Europeo de Interoperabilidad?";
 choices[51]= new Array();
 choices[51][0] = "Multiling&uuml;ismo";
 choices[51][1] = "Subsidiariedad";
 choices[51][2] = "Eficiencia";
 choices[51][3] = "Accesibilidad";
 answers[51] = choices[51][2];
 units[51] = "40";
 comments[51] = "Id Pregunta: 4789. ";


//  Id pregunta: 4822 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Qu&eacute; elementos de los siguientes pueden aparecer en un diagrama de Casos de Uso con la notaci&oacute;n de UML (Unified Modeling Language)?";
 choices[52]= new Array();
 choices[52][0] = "Objetos, casos de uso y actividades.";
 choices[52][1] = "Actores, objetos y relaciones.";
 choices[52][2] = "Casos de uso, actores y relaciones.";
 choices[52][3] = "Actores, casos de uso y actividades.";
 answers[52] = choices[52][2];
 units[52] = "84";
 comments[52] = "Id Pregunta: 4822. examen TIC 2006";


//  Id pregunta: 4922 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Sea el array [10, 3, 15, 2, 1, 18]. &iquest;Cu&aacute;ntas iteraciones deber&aacute; ejecutarse del algoritmo de ordenaci&oacute;n porselecci&oacute;n para que quede totalmente ordenado en sentido ascendente?:";
 choices[53]= new Array();
 choices[53][0] = "2.";
 choices[53][1] = "4.";
 choices[53][2] = "6.";
 choices[53][3] = "8.";
 answers[53] = choices[53][1];
 units[53] = "";
 comments[53] = "Id Pregunta: 4922. Examen TIC B 2007";


//  Id pregunta: 5049 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  El algoritmo de cifrado IDEA es del tipo:";
 choices[54]= new Array();
 choices[54][0] = "Asim&eacute;trico";
 choices[54][1] = "Sim&eacute;trico por bloques";
 choices[54][2] = "Sim&eacute;trico de flujo";
 choices[54][3] = "Sim&eacute;trico de resumen (hash)";
 answers[54] = choices[54][1];
 units[54] = "111";
 comments[54] = "Id Pregunta: 5049. Examen TIC A 2007";


//  Id pregunta: 5053 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Se&ntilde;ale de la siguiente relaci&oacute;n el miembro que NO forma parte del Consejo Consultivo de la Agencia Espa&ntilde;ola deProtecci&oacute;n de Datos";
 choices[55]= new Array();
 choices[55][0] = "Un experto en la materia";
 choices[55][1] = "Un miembro de la Real Academia de la Historia";
 choices[55][2] = "Un representante de la Asociaci&oacute;n de Ingenieros T&eacute;cnicos en Inform&aacute;tica";
 choices[55][3] = "Un representante de la Administraci&oacute;n Local";
 answers[55] = choices[55][2];
 units[55] = "29";
 comments[55] = "Id Pregunta: 5053. Examen TIC A 2007";


//  Id pregunta: 5166 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Qu&eacute; tama&ntilde;o de celda se utiliza en ATM (Asynchronous Transfer Mode)?";
 choices[56]= new Array();
 choices[56][0] = "Tiene un tama&ntilde;o variable, al tratarse de conmutaci&oacute;n de paquetes de longitud variable.";
 choices[56][1] = "53 bytes";
 choices[56][2] = "1024 bytes";
 choices[56][3] = "64 bytes";
 answers[56] = choices[56][1];
 units[56] = "109";
 comments[56] = "Id Pregunta: 5166. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5278 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indique cu&aacute;l de los siguientes formatos no se corresponde con un tipo de formato de imagen est&aacute;tica:";
 choices[57]= new Array();
 choices[57][0] = "PNG";
 choices[57][1] = "JPEG";
 choices[57][2] = "GIF";
 choices[57][3] = "MNG";
 answers[57] = choices[57][3];
 units[57] = "114";
 comments[57] = "Id Pregunta: 5278. ";


//  Id pregunta: 5536 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes no es un &aacute;mbito de interoperabilidad contemplado en el marco europeo de interoperabilidad?";
 choices[58]= new Array();
 choices[58][0] = "Organizativa";
 choices[58][1] = "T&eacute;cnica";
 choices[58][2] = "Funcional";
 choices[58][3] = "Sem&aacute;ntica";
 answers[58] = choices[58][2];
 units[58] = "30";
 comments[58] = "Id Pregunta: 5536. ";


//  Id pregunta: 5839 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA , en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[59]= new Array();
 choices[59][0] = "Se utiliza, en general, para la auto evaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora";
 choices[59][1] = "Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea";
 choices[59][2] = "Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados";
 choices[59][3] = "La l&oacute;gica REDER se encuentra en el centro del modelo";
 answers[59] = choices[59][1];
 units[59] = "92";
 comments[59] = "Id Pregunta: 5839. MAP 2008 A1";


//  Id pregunta: 5958 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  De entre las siguientes opciones, se&ntilde;ale la que no se corresponde con una metodolog&iacute;a de desarrollo &aacute;gil:";
 choices[60]= new Array();
 choices[60][0] = "Rational Rapid Development (RRD)";
 choices[60][1] = "Scrum";
 choices[60][2] = "Extreme Programming (XP)";
 choices[60][3] = "Open Unified Process (OpenUP)";
 answers[60] = choices[60][0];
 units[60] = "79";
 comments[60] = "Id Pregunta: 5958. ";


//  Id pregunta: 5967 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[61]= new Array();
 choices[61][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[61][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[61][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[61][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[61] = choices[61][2];
 units[61] = "33";
 comments[61] = "Id Pregunta: 5967. Castilla La Mancha 2009";


//  Id pregunta: 5979 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  El Organismo de Normalizaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n) desarrolla normas que deben adoptarse &iacute;ntegramente por los OrganismosNacionales de Normalizaci&oacute;n pertenecientes al CEN como normas nacionales.";
 choices[62][1] = "ISO (International Organization for Standardization) tiene la competencia exclusiva de la normalizaci&oacute;n internacional en elcampo de las Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[62][2] = "ISO desarrolla normas que, en la etapa previa a su publicaci&oacute;n como est&aacute;ndar internacional, reciben el nombre deISO/PIS (Preview Draft International Standard).";
 choices[62][3] = "CEN desarrolla en el campo de las Tecnolog&iacute;as de la Informaci&oacute;n Acuerdos de Trabajo (CWA) que tienen la categor&iacute;a deNormas Europeas (EN).";
 answers[62] = choices[62][0];
 units[62] = "42";
 comments[62] = "Id Pregunta: 5979. TIC A 2009";


//  Id pregunta: 6156 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Qu&eacute; tipo de licencia utiliza Samba?";
 choices[63]= new Array();
 choices[63][0] = "GPL";
 choices[63][1] = "GNU LGPL";
 choices[63][2] = "No utiliza ning&uacute;n tipo de licencia";
 choices[63][3] = "MGPL";
 answers[63] = choices[63][0];
 units[63] = "112";
 comments[63] = "Id Pregunta: 6156. ";


//  Id pregunta: 6175 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cual es la &uacute;ltima versi&oacute;n del protocolo SCORM?";
 choices[64]= new Array();
 choices[64][0] = "SCORM 1.0";
 choices[64][1] = "SCORM 1.1";
 choices[64][2] = "SCORM 1.2";
 choices[64][3] = "SCORM 2004";
 answers[64] = choices[64][3];
 units[64] = "66";
 comments[64] = "Id Pregunta: 6175. ";


//  Id pregunta: 6209 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  En Programaci&oacute;n y Dise&ntilde;o de Algoritmos &iquest;Cu&aacute;l de los siguientes es un nivel de acoplamiento?";
 choices[65]= new Array();
 choices[65][0] = "De marca";
 choices[65][1] = "De presentaci&oacute;n";
 choices[65][2] = "De clases";
 choices[65][3] = "De herencia";
 answers[65] = choices[65][0];
 units[65] = "79";
 comments[65] = "Id Pregunta: 6209. TICB-2009, bloque desarrollo";


//  Id pregunta: 6502 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Es una licencia compatible con GPL:";
 choices[66]= new Array();
 choices[66][0] = "NPL";
 choices[66][1] = "MPL";
 choices[66][2] = "BSD Original";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = choices[66][3];
 units[66] = "61";
 comments[66] = "Id Pregunta: 6502. ";


//  Id pregunta: 6566 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  UMTS ";
 choices[67]= new Array();
 choices[67][0] = "Reutiliza el subsistema de red de GSM";
 choices[67][1] = "Reutiliza el subsistema de red de GPRS";
 choices[67][2] = "El sistema de acceso radio es nuevo";
 choices[67][3] = "Todas las respuestas anteriores son ciertas";
 answers[67] = choices[67][3];
 units[67] = "108";
 comments[67] = "Id Pregunta: 6566. ";


//  Id pregunta: 6596 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  El RD 1720/2007 indica que deben aplicarse t&eacute;cnicas de cifrado";
 choices[68]= new Array();
 choices[68][0] = "En la distribuci&oacute;n de soportes para datos personales a los que corresponde aplicar medidas de seguridad de nivel alto";
 choices[68][1] = "Los datos personales en su transmisi&oacute;n a trav&eacute;s de las redes de telecomunicaciones";
 choices[68][2] = "A y B son correctas";
 choices[68][3] = "A y B son incorrectas";
 answers[68] = choices[68][0];
 units[68] = "75";
 comments[68] = "Id Pregunta: 6596. ";


//  Id pregunta: 7340 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  La autenticaci&oacute;n consiste en:";
 choices[69]= new Array();
 choices[69][0] = "Comprobar los permisos del usuario";
 choices[69][1] = "Comprobar que los datos no han sido alterados en una comunicaci&oacute;n";
 choices[69][2] = "Garantizar que ninguna de las partes pueda negar una operaci&oacute;n realizada";
 choices[69][3] = "Comprobar la identidad del usuario";
 answers[69] = choices[69][3];
 units[69] = "72";
 comments[69] = "Id Pregunta: 7340. ";


//  Id pregunta: 7857 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[70]= new Array();
 choices[70][0] = " Error y Exception.";
 choices[70][1] = " Error y Catch.";
 choices[70][2] = " Throw y Finally.";
 choices[70][3] = " Error y Throw.";
 answers[70] = choices[70][0];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7857. Map 2005";


//  Id pregunta: 7897 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language) NO es cierta?";
 choices[71]= new Array();
 choices[71][0] = " Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas.";
 choices[71][1] = " Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML.";
 choices[71][2] = " Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, en cuyo caso pueden omitirse.";
 choices[71][3] = " Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM (Document Object Model) o en XML-DOM.";
 answers[71] = choices[71][2];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7897. Map 2006";


//  Id pregunta: 7946 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   En un sistema basado en el conocimiento, &iquest;qu&eacute; diferencia hay entre el conocimiento inferencial y el conocimiento estrat&eacute;gico o de control?";
 choices[72]= new Array();
 choices[72][0] = " El conocimiento inferencial est&aacute; contenido en la base de hechos y el de control es el que se obtiene mediante inferencia.";
 choices[72][1] = " Los dos son equivalentes.";
 choices[72][2] = " Los sistemas basados en el conocimiento no utilizan conocimiento estrat&eacute;gico.";
 choices[72][3] = " El conocimiento inferencial procede de razonamientos y el estrat&eacute;gico permite decidir qu&eacute; regla se aplica en cada momento.";
 answers[72] = choices[72][3];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7946. Map 2006";


//  Id pregunta: 8077 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   &iquest;Cu&aacute;l de las siguientes opciones describe correctamente la estructura de una direcci&oacute;n MAC?";
 choices[73]= new Array();
 choices[73][0] = " C&oacute;digo de red de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits.";
 choices[73][1] = " C&oacute;digo del fabricante de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits.";
 choices[73][2] = " C&oacute;digo del fabricante de 24 bits m&aacute;s c&oacute;digo de serie de 24 bits.";
 choices[73][3] = " Identidad de red de 24 bits m&aacute;s identidad de host de 24 bits.";
 answers[73] = choices[73][2];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 8077. Map 2008";


//  Id pregunta: 8147 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[74]= new Array();
 choices[74][0] = " Software de gesti&oacute;n de incidencias.";
 choices[74][1] = " Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente.";
 choices[74][2] = " Datawarehouse.";
 choices[74][3] = " Call-center: software de visi&oacute;n unificada de clientes.";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 8147. Map 2008";


//  Id pregunta: 8355 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  La compa&ntilde;&iacute;a que desarroll&oacute; la tecnolog&iacute;a JSP es:";
 choices[75]= new Array();
 choices[75][0] = "Sun Microsystems.";
 choices[75][1] = "Microsoft.";
 choices[75][2] = "Google.";
 choices[75][3] = "IBM.";
 answers[75] = choices[75][0];
 units[75] = "116";
 comments[75] = "Id Pregunta: 8355. Examen TIC A2 2010";


//  Id pregunta: 8383 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  El cable UTP (Unshielded Twisted Pair):";
 choices[76]= new Array();
 choices[76][0] = "No es tan susceptible a las interferencias electromagn&eacute;ticas como el cable STP (Shielded Twisted Pair). ";
 choices[76][1] = "Es m&aacute;s barato y f&aacute;cil de manipular que el STP.";
 choices[76][2] = "Tiene una l&aacute;mina externa de aluminio o de cobre trenzado alrededor del conjunto de pares.";
 choices[76][3] = "Tiene una pantalla protectora para cada par de hilos.";
 answers[76] = choices[76][1];
 units[76] = "99";
 comments[76] = "Id Pregunta: 8383. Examen TIC A2 2010";


//  Id pregunta: 8591 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[77]= new Array();
 choices[77][0] = "Apache Tomcat";
 choices[77][1] = "JBOSS";
 choices[77][2] = "WebSphere Application Server";
 choices[77][3] = "Glassfish";
 answers[77] = choices[77][0];
 units[77] = "115,116";
 comments[77] = "Id Pregunta: 8591. Examen TIC A2 2010 interna";


//  Id pregunta: 8737 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  Una empresa crea legalmente un fichero de datos personales que utiliza para su tratamiento, pero sin llevar a cabo una correcta actualizaci&oacute;n cuando se producen cambios en los mismos. De entre los &quot;principios de protecci&oacute;n de datos&quot; incluidos en la Ley 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;cu&aacute;l se estar&iacute;a incumpliendo?";
 choices[78]= new Array();
 choices[78][0] = "Calidad de los datos";
 choices[78][1] = "Veracidad de la informaci&oacute;n.";
 choices[78][2] = "Actualizaci&oacute;n peri&oacute;dica";
 choices[78][3] = "Seguimiento de los datos.";
 answers[78] = choices[78][0];
 units[78] = "29";
 comments[78] = "Id Pregunta: 8737. Examen TIC A2 2010 interna";


//  Id pregunta: 8798 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[79]= new Array();
 choices[79][0] = "Para construir aplicaciones y servicios Web";
 choices[79][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[79][2] = "Para construir la interface del usuario";
 choices[79][3] = "Para conectar los programas";
 answers[79] = choices[79][0];
 units[79] = "59, 115";
 comments[79] = "Id Pregunta: 8798. Examen UPM A2 2011";


//  Id pregunta: 8855 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[80]= new Array();
 choices[80][0] = "Type 1 JDBC Driver";
 choices[80][1] = "Type 2 JDBC Driver";
 choices[80][2] = "Type 3 JDBC Driver";
 choices[80][3] = "Type 4 JDBC Driver";
 answers[80] = choices[80][3];
 units[80] = "58, 60";
 comments[80] = "Id Pregunta: 8855. Analista Ayto. Madrid 2010";


//  Id pregunta: 8965 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Aquel est&aacute;ndar de la W3C de XMLDSig cuya XMLSignature se encuentra envolviendo el documento firmado es:";
 choices[81]= new Array();
 choices[81][0] = "Enveloped";
 choices[81][1] = "Detached";
 choices[81][2] = "Enveloping";
 choices[81][3] = "Todos los documentos firmados con XMLDSig est&aacute;n envueltos por la XMLDSig";
 answers[81] = choices[81][2];
 units[81] = "73";
 comments[81] = "Id Pregunta: 8965. ";


//  Id pregunta: 9035 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  En qu&eacute; t&iacute;tulo de la ley 11/2007 se habla sobre los registros electr&oacute;nicos";
 choices[82]= new Array();
 choices[82][0] = "T&iacute;tulo I";
 choices[82][1] = "T&iacute;tulo II";
 choices[82][2] = "T&iacute;tulo III";
 choices[82][3] = "T&iacute;tulo IV";
 answers[82] = choices[82][1];
 units[82] = "43";
 comments[82] = "Id Pregunta: 9035. ";


//  Id pregunta: 9044 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l es la capa del modelo OSI equivalente a Ethernet";
 choices[83]= new Array();
 choices[83][0] = "Capa F&iacute;sica de Datos";
 choices[83][1] = "Capa de Red";
 choices[83][2] = "Capa de Enlace de Datos";
 choices[83][3] = "Capa de Transporte";
 answers[83] = choices[83][2];
 units[83] = "100";
 comments[83] = "Id Pregunta: 9044. ";


//  Id pregunta: 9237 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Qu&eacute; es el n&uacute;cleo denominado &ldquo;vanilla&rdquo;?";
 choices[84]= new Array();
 choices[84][0] = "Kernel sin alteraciones suministrado por Linus Torvalds";
 choices[84][1] = "S&oacute;lo se puede descargar de su sitio oficial en http://www.kernel.org";
 choices[84][2] = "Las distintas distribuciones no se basan en el n&uacute;cleo &ldquo;vanilla&rdquo;";
 choices[84][3] = "Todas las anteriores son correctas.";
 answers[84] = choices[84][0];
 units[84] = "53";
 comments[84] = "Id Pregunta: 9237. ";


//  Id pregunta: 9520 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Indique la afirmaci&oacute;n falsa:";
 choices[85]= new Array();
 choices[85][0] = "JAXP es una API de Java que permite el procesado de documentos XML";
 choices[85][1] = "JAXR es una API de Java que facilita el acceso a UDDI o ebXML";
 choices[85][2] = "SAAJ es una API de Java que permite generar y recoger mensajes SOAP";
 choices[85][3] = "JAX-RPC es una API Java que permite invocar objetos ORBA";
 answers[85] = choices[85][3];
 units[85] = "116";
 comments[85] = "Id Pregunta: 9520. ";


//  Id pregunta: 9633 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[86]= new Array();
 choices[86][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root";
 choices[86][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos";
 choices[86][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root";
 choices[86][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios";
 answers[86] = choices[86][2];
 units[86] = "53";
 comments[86] = "Id Pregunta: 9633. Examen TIC A2 2013";


//  Id pregunta: 9952 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[87]= new Array();
 choices[87][0] = "ISO/IEC 12207:2008";
 choices[87][1] = "ISO 9001:2008";
 choices[87][2] = "ISO 29393:2009";
 choices[87][3] = "ISO 31000:2009";
 answers[87] = choices[87][0];
 units[87] = "76";
 comments[87] = "Id Pregunta: 9952. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9963 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[88]= new Array();
 choices[88][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[88][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[88][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[88][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[88] = choices[88][3];
 units[88] = "68,71";
 comments[88] = "Id Pregunta: 9963. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9964 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[89]= new Array();
 choices[89][0] = "System Data Type (SDT)";
 choices[89][1] = "Common Type System (CTS)";
 choices[89][2] = "Common Data Integration (CDI)";
 choices[89][3] = "Data Type Core (DTC)";
 answers[89] = choices[89][1];
 units[89] = "59,115";
 comments[89] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9979 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  Un sistema que puede emplearse para registrar la relaci&oacute;n del ciudadano con la administraci&oacute;n, anotando todas las relaciones establecidas por &eacute;l, para configurar su personalidad administrativa digital es ";
 choices[90]= new Array();
 choices[90][0] = "Gesti&oacute;n de la Relaci&oacute;n con el Cliente (CRM) ";
 choices[90][1] = "Arquitectura Orientada a Servicios (SOA) ";
 choices[90][2] = "Planificaci&oacute;n de Recursos Empresariales (ERP) ";
 choices[90][3] = "Gesti&oacute;n de Procesos de Negocio (BPM) ";
 answers[90] = choices[90][0];
 units[90] = "65";
 comments[90] = "Id Pregunta: 9979. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10024 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[91]= new Array();
 choices[91][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[91][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[91][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[91][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[91] = choices[91][0];
 units[91] = "60";
 comments[91] = "Id Pregunta: 10024. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10299 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  En la administraci&oacute;n de un dispositivo switch &iquest;qu&eacute; es un trunk?";
 choices[92]= new Array();
 choices[92][0] = "Un puerto de velocidad GigaEthernet o 10 GigaEthernet.";
 choices[92][1] = "Un enlace que agrega tr&aacute;fico de varias VLANs.";
 choices[92][2] = "Un adaptador fibra - par trenzado.";
 choices[92][3] = "Una versi&oacute;n estable del firmware del dispositivo.";
 answers[92] = choices[92][1];
 units[92] = "102";
 comments[92] = "Id Pregunta: 10299. TIC A2, libre, examen 2013";


//  Id pregunta: 10309 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Una sentencia JCL comienza con:";
 choices[93]= new Array();
 choices[93][0] = "//";
 choices[93][1] = "*+";
 choices[93][2] = "#&gt;";
 choices[93][3] = "$&gt;";
 answers[93] = choices[93][0];
 units[93] = "55";
 comments[93] = "Id Pregunta: 10309. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10432 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012 ";
 choices[94]= new Array();
 choices[94][0] = "Business";
 choices[94][1] = "Essentials";
 choices[94][2] = "Foundation";
 choices[94][3] = "Standard";
 answers[94] = choices[94][0];
 units[94] = "56";
 comments[94] = "Id Pregunta: 10432. Examen TIC A1 2013";


//  Id pregunta: 10454 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como cr&iacute;tica:";
 choices[95]= new Array();
 choices[95][0] = "No puede ser reemplazada por una operaci&oacute;n manual.";
 choices[95][1] = "La tolerancia a la interrupci&oacute;n es muy baja.";
 choices[95][2] = "El costo de interrupci&oacute;n es muy alto.";
 choices[95][3] = "Todas las anteriores.";
 answers[95] = choices[95][3];
 units[95] = "97";
 comments[95] = "Id Pregunta: 10454. ";


//  Id pregunta: 10462 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Respecto a REST, indique qu&eacute; afirmaci&oacute;n es falsa:";
 choices[96]= new Array();
 choices[96][0] = "Permite una generalizaci&oacute;n de las interfaces entre recursos.";
 choices[96][1] = "Facilita el desarrollo de los clientes de los servicios.";
 choices[96][2] = "Su uso est&aacute; indicado para aplicaciones en las que la gesti&oacute;n del estado es compleja.";
 choices[96][3] = "La funcionalidad de las aplicaciones se representa mediante recursos.";
 answers[96] = choices[96][2];
 units[96] = "51";
 comments[96] = "Id Pregunta: 10462. ";


//  Id pregunta: 10471 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En una PKI:";
 choices[97]= new Array();
 choices[97][0] = "Un certificado se a&ntilde;ade a una CRL en cuanto se tiene conocimiento de que hay motivos para su revocaci&oacute;n.";
 choices[97][1] = "Las CRLs incluyen todos los certificados emitidos por una CA.";
 choices[97][2] = "Un certificado revocado es eliminado de una CRL en cuanto se emite un nuevo certificado de las mismas caracter&iacute;sticas para el titular del certificado revocado. ";
 choices[97][3] = "No es obligatorio que una CA emita CRLs si proporciona otro mecanismo de consulta del estado de los certificados.";
 answers[97] = choices[97][3];
 units[97] = "73";
 comments[97] = "Id Pregunta: 10471. ";


//  Id pregunta: 10499 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Cual de los siguientes es un servicio comun de reuniones virtuales para las Administraciones Publicas?";
 choices[98]= new Array();
 choices[98][0] = "Reunete";
 choices[98][1] = "Webex";
 choices[98][2] = "Meetic";
 choices[98][3] = "VirtualMeeting";
 answers[98] = choices[98][0];
 units[98] = "117";
 comments[98] = "Id Pregunta: 10499. http://administracionelectronica.gob.es/ctt/reunete";


//  Id pregunta: 10546 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[99]= new Array();
 choices[99][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[99][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[99][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[99][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[99] = choices[99][2];
 units[99] = "30";
 comments[99] = "Id Pregunta: 10546. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";


