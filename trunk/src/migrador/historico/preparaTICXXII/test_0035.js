/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 34 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes gu&iacute;as no forma parte de los est&aacute;ndares EDIFACT?:";
 choices[0]= new Array();
 choices[0][0] = "Directorio de registro de datos";
 choices[0][1] = "Directorio de segmentos";
 choices[0][2] = "Directorio de mensajes";
 choices[0][3] = "Conjunto de c&oacute;digos";
 answers[0] = choices[0][0];
 units[0] = "42";
 comments[0] = "Id Pregunta: 34. ";


//  Id pregunta: 116 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  De las siguientes estructuras organizativas de un departamento de sistemas de informaci&oacute;n se&ntilde;ale la que considere m&aacute;s correcta:";
 choices[1]= new Array();
 choices[1][0] = "Establecer una estructura funcional en el departamento de sistemas y una sectorial en el de desarrollo";
 choices[1][1] = "Establecer una estructura sectorial en sistemas y una matricial en desarrollo";
 choices[1][2] = "Establecer una estructura matricial en sistemas y una matricial en desarrollo";
 choices[1][3] = "Establecer una estructura matricial en sistemas y una por proyectos en desarrollo";
 answers[1] = choices[1][0];
 units[1] = "22";
 comments[1] = "Id Pregunta: 116. ";


//  Id pregunta: 184 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En el m&eacute;todo PERT, &iquest;cu&aacute;l de las afirmaciones es falsa?";
 choices[2]= new Array();
 choices[2][0] = "La holgura libre de una actividad es el margen sobrante suponiendo que el nudo de origen se alcanza lo m&aacute;s pronto posible y que al destino se llega tambi&eacute;n lo m&aacute;s pronto posible.";
 choices[2][1] = "La oscilaci&oacute;n de un nudo es el margen de tiempo existente entre el momento m&aacute;s tarde en el que es admisible llegar al mismo (tiempo early) y el momento m&aacute;s pronto en el que es posible llegar (tiempo last).";
 choices[2][2] = "La holgura total es el margen sobrante suponiendo que a la situaci&oacute;n representada por el nudo de origen se llega lo m&aacute;s pronto posible y que a la de destino se llega lo m&aacute;s tarde admisible.";
 choices[2][3] = "La mayor&iacute;a de los software de Gesti&oacute;n de Proyectos incorporan las t&eacute;cnicas PERT.";
 answers[2] = choices[2][1];
 units[2] = "27";
 comments[2] = "Id Pregunta: 184. ";


//  Id pregunta: 241 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En un sistema de informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "La integraci&oacute;n permite mayor eficiencia conjunta e interrelaci&oacute;n m&aacute;s efectiva de actividades";
 choices[3][1] = "La integraci&oacute;n no presenta vulnerabilidades a incertidumbres por la flexibilidad que ofrece";
 choices[3][2] = "Se debe primar en todo momento la integraci&oacute;n frente a la independencia";
 choices[3][3] = "Se debe primar en todo momento la independencia frente a la integraci&oacute;n";
 answers[3] = choices[3][0];
 units[3] = "21";
 comments[3] = "Id Pregunta: 241. ";


//  Id pregunta: 351 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  La utilizaci&oacute;n de sistemas abiertos permite una serie de ventajas. Se&ntilde;ale cual de las siguientes no es una de ellas:";
 choices[4]= new Array();
 choices[4][0] = "Mejorar, en general, precio/rendimiento";
 choices[4][1] = "Simplificar el mantenimiento debido al reducido n&uacute;mero de posibles proveedores";
 choices[4][2] = "Garantizar la libertad de elecci&oacute;n";
 choices[4][3] = "Proteger la inversi&oacute;n realizada en equipo f&iacute;sico";
 answers[4] = choices[4][1];
 units[4] = "40";
 comments[4] = "Id Pregunta: 351. ";


//  Id pregunta: 387 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  No es cierto respecto a las t&eacute;cnicas PERT que:";
 choices[5]= new Array();
 choices[5][0] = "fueron desarrolladas a finales de los 50s para el programa I+D de los misiles bal&iacute;siticos Polaris";
 choices[5][1] = "permiten representar tanto las dependencias entre tareas como las escalas temporales de las mismas";
 choices[5][2] = "est&aacute;n muy orientadas al plaza de ejecuci&oacute;n, con poca consideraci&oacute;n al coste";
 choices[5][3] = "est&aacute;n orientadas a los sucesos o eventos, y normalmente trabajan con distribuciones de probabilidad para las duraciones";
 answers[5] = choices[5][1];
 units[5] = "28";
 comments[5] = "Id Pregunta: 387. ";


//  Id pregunta: 656 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[6]= new Array();
 choices[6][0] = "Impide la descarga de contenido protegido";
 choices[6][1] = "Impide la copia de contenido protegido";
 choices[6][2] = "Garantiza la no modificaci&oacute;n del contenido protegido";
 choices[6][3] = "Se asegura de que el comprador ha pagado por el contenido";
 answers[6] = choices[6][0];
 units[6] = "37";
 comments[6] = "Id Pregunta: 656. ";


//  Id pregunta: 682 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  En I+D+I, &iquest;a qu&eacute; se refiere la segunda 'I'?";
 choices[7]= new Array();
 choices[7][0] = "A implementaci&oacute;n.";
 choices[7][1] = "A instalaci&oacute;n.";
 choices[7][2] = "A innovaci&oacute;n.";
 choices[7][3] = "A internet.";
 answers[7] = choices[7][2];
 units[7] = "103";
 comments[7] = "Id Pregunta: 682. ";


//  Id pregunta: 905 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Podr&iacute;a indicarnos que componente software presente en todos los miembros de la familia Office de Microsoft es un claro ejemplo de sistema basado en el conocimiento?:";
 choices[8]= new Array();
 choices[8][0] = "El motor de base de datos JET de Access";
 choices[8][1] = "Existen unas librerias presentes sobre todo en Excel, que hacen uso de tecnicas revolucionarias de Inteligencia Emocional";
 choices[8][2] = "Word posee un sistema muy avanzado para la conversi&oacute;n en p&aacute;gina web de sus documentos.";
 choices[8][3] = "El Ayudante de Office";
 answers[8] = choices[8][3];
 units[8] = "63";
 comments[8] = "Id Pregunta: 905. ";


//  Id pregunta: 997 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  EDSAC y ENIAC son ejemplos de:";
 choices[9]= new Array();
 choices[9][0] = "comit&eacute;s reguladores de auditor&iacute;as inform&aacute;ticas";
 choices[9][1] = "algoritmos criptogr&aacute;ficos de clave sim&eacute;trica";
 choices[9][2] = "est&aacute;ndares de tecnolog&iacute;as de almacenamiento";
 choices[9][3] = "ordenadores de mediados del siglo XX";
 answers[9] = choices[9][3];
 units[9] = "47";
 comments[9] = "Id Pregunta: 997. ";


//  Id pregunta: 1024 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  El lenguaje Visual Basic, y la arquitectura DNA de Microsoft permiten arquitecturas Cliente/Servidor:";
 choices[10]= new Array();
 choices[10][0] = "De 2 niveles";
 choices[10][1] = "De N niveles";
 choices[10][2] = "Solo con clientes Microsoft";
 choices[10][3] = "B y C son ciertas";
 answers[10] = choices[10][1];
 units[10] = "50";
 comments[10] = "Id Pregunta: 1024. ";


//  Id pregunta: 1339 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Seg&uacute;n la WfMC, un workflow se define como:";
 choices[11]= new Array();
 choices[11][0] = "Automatizaci&oacute;n de un procedimiento de negocio, durente la cual los documentos, la informaci&oacute;n o las tareas pasan de un participante a otro de acuerdo a un conjunto de reglas de procedimiento";
 choices[11][1] = "Una descripci&oacute;n de una pieza de trabajo que forma un paso l&oacute;gico dentro de un proceso";
 choices[11][2] = "La representaci&oacute;n del trabajo que tiene que ser procesado (por un participante) en el contexto de una actividad dentro de un proceso";
 choices[11][3] = "El software que controla la ejecuci&oacute;n de programas en los mainframes, enviando mensajes a las consolas cuando se detecta alguna incidencia";
 answers[11] = choices[11][0];
 units[11] = "71";
 comments[11] = "Id Pregunta: 1339. ";


//  Id pregunta: 1433 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  XQL es:";
 choices[12]= new Array();
 choices[12][0] = "Extended Query Language";
 choices[12][1] = "XML Query Language";
 choices[12][2] = "No se corresponde con ningun acr&oacute;nimo usado en inform&aacute;tica o telecomunicaciones";
 choices[12][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[12] = choices[12][1];
 units[12] = "69";
 comments[12] = "Id Pregunta: 1433. ";


//  Id pregunta: 1496 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar cu&aacute;l de las siguientes afirmaciones no es cierta acerca del lenguaje HTML:";
 choices[13]= new Array();
 choices[13][0] = "Es un lenguaje de programaci&oacute;n";
 choices[13][1] = "Permite referencias a otros documentos o recursos de la red";
 choices[13][2] = "Permite la inclusi&oacute;n de marcas (tags) para controlar los aspectos de la presentaci&oacute;n";
 choices[13][3] = "Para escribir en HTML se necesita al menos un editor ASCII";
 answers[13] = choices[13][0];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1496. ";


//  Id pregunta: 1649 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no tienen relaci&oacute;n con el elearning?";
 choices[14]= new Array();
 choices[14][0] = "IMS";
 choices[14][1] = "SCORM";
 choices[14][2] = "Moodle";
 choices[14][3] = "ePupil";
 answers[14] = choices[14][3];
 units[14] = "66";
 comments[14] = "Id Pregunta: 1649. ";


//  Id pregunta: 1680 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es un JNI?";
 choices[15]= new Array();
 choices[15][0] = "Es una interfaz que permite el acceso a bases de datos desde programas java";
 choices[15][1] = "Es una interfaz de programaci&oacute;n para gestionar entornos de ventanas en java";
 choices[15][2] = "Es una interfaz de programaci&oacute;n que facilita el acceso, generaci&oacute;n y desarrollo de componentes o programas para acceder a ficheros XML";
 choices[15][3] = "Es una interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes, desde un programa java";
 answers[15] = choices[15][3];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1680. ";


//  Id pregunta: 1771 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Respecto a JNI";
 choices[16]= new Array();
 choices[16][0] = "Se sigue conservando la portabilidad universal";
 choices[16][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[16][2] = " permite utilizar clases java desde aplicaciones nativas.";
 choices[16][3] = "B y C son correctas";
 answers[16] = choices[16][3];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1771. ";


//  Id pregunta: 1782 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[17]= new Array();
 choices[17][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[17][1] = "Hoja de c&aacute;lculo para KDE";
 choices[17][2] = "Sistema gestor de redes empresariales extendidas";
 choices[17][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[17] = choices[17][3];
 units[17] = "61,62";
 comments[17] = "Id Pregunta: 1782. ";


//  Id pregunta: 1842 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  La directiva 2002/38/CE:";
 choices[18]= new Array();
 choices[18][0] = "Ha regulado el fen&oacute;meno del comercio electr&oacute;nico en lo que se refiere al IVA";
 choices[18][1] = "Est&aacute;  incluida en el denominado paquete Telecom";
 choices[18][2] = "Es relativa a la protecci&oacute;n de datos personales y a la protecci&oacute;n de la intimidad en el sector de las comunicaciones electr&oacute;nicas";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][0];
 units[18] = "70";
 comments[18] = "Id Pregunta: 1842. ";


//  Id pregunta: 1926 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  El est&aacute;ndar DMI";
 choices[19]= new Array();
 choices[19][0] = "Permite la monitorizaci&oacute;n de determinadas funciones del PC";
 choices[19][1] = "Permite el control de las diferentes funciones de ahorro de energ&iacute;a de un PC";
 choices[19][2] = "Es un est&aacute;ndar de gesti&oacute;n de energ&iacute;a desarrollado por Intel, Microsoft y Toshiba";
 choices[19][3] = "Es una norma dirigida a dispositivos de alta velocidad";
 answers[19] = choices[19][0];
 units[19] = "47";
 comments[19] = "Id Pregunta: 1926. ";


//  Id pregunta: 1987 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes modelos de estimaci&oacute;n es te&oacute;rico?:";
 choices[20]= new Array();
 choices[20][0] = "COCOMO";
 choices[20][1] = "Putnam";
 choices[20][2] = "Modelo del punto de funci&oacute;n";
 choices[20][3] = "Modelo de puntos de casos de uso";
 answers[20] = choices[20][3];
 units[20] = "89";
 comments[20] = "Id Pregunta: 1987. ";


//  Id pregunta: 2027 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  En s&iacute;ntesis de voz no se usan";
 choices[21]= new Array();
 choices[21][0] = "Fonemas";
 choices[21][1] = "Difonemas";
 choices[21][2] = "Sintaxis";
 choices[21][3] = "Morfemas";
 answers[21] = choices[21][2];
 units[21] = "94";
 comments[21] = "Id Pregunta: 2027. Similar a examen TIC SS A 2003";


//  Id pregunta: 2237 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Benchmarking es un concepto que indica:";
 choices[22]= new Array();
 choices[22][0] = "un mecanismo para determinar reducciones de recursos";
 choices[22][1] = "un sin&oacute;nimo de auditor&iacute;a";
 choices[22][2] = "un proceso sistem&aacute;tico y continuo para evaluar los productos, servicios y trabajos de las organizaciones que son reconocidas como representantes de las mejores pr&aacute;cticas, con el prop&oacute;sito de realizar mejoras organizacionales";
 choices[22][3] = "un programa inform&aacute;tico que al instalarse tiene como misi&oacute;n la optimizaci&oacute;n de la eficiencia de los sistemas a los que afecte su configuraci&oacute;n, tanto a nivel de espacio de disco como a nivel de rendimiento";
 answers[22] = choices[22][2];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2237. ";


//  Id pregunta: 2305 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  En el &aacute;mbito de las estructuras de datos, una relaci&oacute;n n:m es de tipo:";
 choices[23]= new Array();
 choices[23][0] = "Unitario";
 choices[23][1] = "Binario";
 choices[23][2] = "Ternario";
 choices[23][3] = "n-ario";
 answers[23] = choices[23][1];
 units[23] = "80";
 comments[23] = "Id Pregunta: 2305. ";


//  Id pregunta: 2438 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Las &quot;Collaboration Responsabilities Cards&quot; se usan en:";
 choices[24]= new Array();
 choices[24][0] = "La localizaci&oacute;n de objetos.";
 choices[24][1] = "La direcci&oacute;n de reuniones.";
 choices[24][2] = "La negociaci&oacute;n.";
 choices[24][3] = "Los diagramas generales de un sistema.";
 answers[24] = choices[24][0];
 units[24] = "82,84";
 comments[24] = "Id Pregunta: 2438. ";


//  Id pregunta: 2448 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  Las secuencias de ejecuci&oacute;n de los programas, el espacio requerido, memoria que utilizan&hellip;, son definidos en los:";
 choices[25]= new Array();
 choices[25][0] = "Manuales de procedimientos";
 choices[25][1] = "Manuales de usuarios";
 choices[25][2] = "Manuales de explotaci&oacute;n";
 choices[25][3] = "Manuales de contingencias";
 answers[25] = choices[25][2];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2448. ";


//  Id pregunta: 2805 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  En el modelo de McCall. Cu&aacute;l de los siguientes elementos no se considera un factor de calidad";
 choices[26]= new Array();
 choices[26][0] = "Reusabilidad";
 choices[26][1] = "Modularidad";
 choices[26][2] = "Flexibilidad";
 choices[26][3] = "Eficiencia";
 answers[26] = choices[26][1];
 units[26] = "88";
 comments[26] = "Id Pregunta: 2805. ";


//  Id pregunta: 2947 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  La ventaja de utilizar Frame Relay frente a X.25 es:";
 choices[27]= new Array();
 choices[27][0] = "Hace m&aacute;s eficiente el proceso de comunicaci&oacute;n";
 choices[27][1] = "Es necesaria la disponibilidad de l&iacute;nease de alta velocidad";
 choices[27][2] = "La velocidad de acceso puede alcanzar los 64 Kbps frente a los 2 Mbps de X.25";
 choices[27][3] = "Permite realizar el control de errores en cada uno de los enlaces de la red";
 answers[27] = choices[27][0];
 units[27] = "109";
 comments[27] = "Id Pregunta: 2947. Examen TIC MAP B 2004";


//  Id pregunta: 3145 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta para un sistema intermedio o encaminador (router) de una red IP?:";
 choices[28]= new Array();
 choices[28][0] = "Un encaminador o router no puede fragmentar un datagrama";
 choices[28][1] = "Puede fragmentar un datagrama si es necesario pero no puede reensamblar los fragmentos";
 choices[28][2] = "Puede tanto fragmentar un datagrama como reensamblar los fragmentos";
 choices[28][3] = "Solo puede reensamblar los paquetes TCP orientados a conexi&oacute;n";
 answers[28] = choices[28][2];
 units[28] = "102";
 comments[28] = "Id Pregunta: 3145. ";


//  Id pregunta: 3148 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a los elementos de red?:";
 choices[29]= new Array();
 choices[29][0] = "Los bridges usan la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 choices[29][1] = "Los bridges generan autom&aacute;ticamente sus propias tablas (puerto, direcci&oacute;n MAC) leyendo las direcciones MAC del remitente de cada paquete recibido";
 choices[29][2] = "Si un bridge recibe un paquete cuya direcci&oacute;n MAC de destino no tiene un puerto asociado en su tabla, lo reenv&iacute;a por todos sus puertos (flooding)";
 choices[29][3] = "Los routers, para ser compatibles con distintos protocolos de acceso al medio, utilizan tambi&eacute;n la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 answers[29] = choices[29][3];
 units[29] = "102";
 comments[29] = "Id Pregunta: 3148. ";


//  Id pregunta: 3244 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l es la funcionalidad de los multiplexores estad&iacute;sticos?:";
 choices[30]= new Array();
 choices[30][0] = "Que realizan un tipo de multiplexaci&oacute;n por divisi&oacute;n en frecuencias (FDM)";
 choices[30][1] = "Que realizan la transferencia de se&ntilde;ales anal&oacute;gicas, y la estad&iacute;stica de errores";
 choices[30][2] = "Que realizan un muestreo de l&iacute;neas seg&uacute;n el tr&aacute;fico, no asignando intervalos fijos";
 choices[30][3] = "Que dividen el ancho de banda, seg&uacute;n par&aacute;metros definibles, proporcionando informaci&oacute;n estad&iacute;stica de uso para que el usuario ajuste sus asignaciones";
 answers[30] = choices[30][2];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3244. ";


//  Id pregunta: 3361 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  De SDH y SONET podemos decir:";
 choices[31]= new Array();
 choices[31][0] = "son en realidad lo mismo pero con diferente denominaci&oacute;n en Norteam&eacute;rica y Europa";
 choices[31][1] = "son distintos en la disposici&oacute;n de los contenedores virtuales pero todas sus tasas de transmisi&oacute;n coinciden";
 choices[31][2] = "son compatibles en conjunto, adaptando las velocidades de diferentes niveles de capacidad";
 choices[31][3] = "son jerarqu&iacute;as de transmisi&oacute;n digital totalmente distintas e incompatibles entre s&iacute;";
 answers[31] = choices[31][2];
 units[31] = "109";
 comments[31] = "Id Pregunta: 3361. ";


//  Id pregunta: 3424 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de &aacute;rea metropolitana:";
 choices[32]= new Array();
 choices[32][0] = "802.6";
 choices[32][1] = "802.7";
 choices[32][2] = "802.8";
 choices[32][3] = "802.9";
 answers[32] = choices[32][0];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3424. ";


//  Id pregunta: 3649 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  La tecnolog&iacute;a PUSH permite:";
 choices[33]= new Array();
 choices[33][0] = "Proteger la informaci&oacute;n mediante cifrado de la misma";
 choices[33][1] = "Establecer una conexi&oacute;n con un ordenador remoto";
 choices[33][2] = "Encaminar los datagramas a su destino";
 choices[33][3] = "Distribuir informaci&oacute;n en el momento oportuno";
 answers[33] = choices[33][3];
 units[33] = "113";
 comments[33] = "Id Pregunta: 3649. ";


//  Id pregunta: 3770 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Para videoconferencia en LANs sin QoS (como por ejemplo Internet), se usan las recomendaciones del est&aacute;ndar:";
 choices[34]= new Array();
 choices[34][0] = "H.321";
 choices[34][1] = "H.320";
 choices[34][2] = "H.323";
 choices[34][3] = "H.324";
 answers[34] = choices[34][2];
 units[34] = "117";
 comments[34] = "Id Pregunta: 3770. ";


//  Id pregunta: 3856 Año de creación de pregunta: 2003-01-01
 questions[35]= "36)  El ataque de denegaci&oacute;n de servicio llamado Smurf consiste en:";
 choices[35]= new Array();
 choices[35][0] = "Dejar una conexi&oacute;n en estado semiabierto y no llegar a realizarse el paso final para establecer una conexi&oacute;n";
 choices[35][1] = "Se trata de mandar a un puerto abierto del servidor un paquete hecho con la direcci&oacute;n y puerto origen igual que la direcci&oacute;n y puerto destino";
 choices[35][2] = "Consiste en recolectar direcciones BroadCast para despu&eacute;s mandar una petici&oacute;n ICMP cada una de ellas, falsificando la direcci&oacute;n IP de origen";
 choices[35][3] = "Se trata de saturar la red mediante una cantidad repetitiva y enorme de peticiones de conexi&oacute;n";
 answers[35] = choices[35][2];
 units[35] = "111";
 comments[35] = "Id Pregunta: 3856. ";


//  Id pregunta: 3962 Año de creación de pregunta: 2003-01-01
 questions[36]= "37)  Ordenar los siguientes dispositivos seg&uacute;n nivel OSI a puente b gateway c router d repetidor";
 choices[36]= new Array();
 choices[36][0] = "d a c b ";
 choices[36][1] = "a b c d";
 choices[36][2] = "b c d a";
 choices[36][3] = "b a d c ";
 answers[36] = choices[36][0];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3962. ";


//  Id pregunta: 4027 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Qu&eacute; modulaci&oacute;n se usa en GSM?";
 choices[37]= new Array();
 choices[37][0] = "QPSK";
 choices[37][1] = "BPSK";
 choices[37][2] = "QAM";
 choices[37][3] = "GMSK";
 answers[37] = choices[37][3];
 units[37] = "108";
 comments[37] = "Id Pregunta: 4027. ";


//  Id pregunta: 4110 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  IRC es:";
 choices[38]= new Array();
 choices[38][0] = "Internet Random Card, un protocolo para acceder al servicio de videoconferencia a trav&eacute;s de Internet.";
 choices[38][1] = "Internet Requery Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como XChat.";
 choices[38][2] = "Internet Relay Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como mIRC.";
 choices[38][3] = "b) y c) son correctas.";
 answers[38] = choices[38][2];
 units[38] = "112";
 comments[38] = "Id Pregunta: 4110. ";


//  Id pregunta: 4170 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  La pol&iacute;tica de m&iacute;nimo privilegio trata de forzar los derechos de usuario m&aacute;s restrictivos";
 choices[39]= new Array();
 choices[39][0] = "Para ejecutar procesos de sistema";
 choices[39][1] = "En su descripci&oacute;n de puesto de trabajo";
 choices[39][2] = "Para realizar tareas autorizadas";
 choices[39][3] = "En el acceso a servicios de red";
 answers[39] = choices[39][2];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4170. ";


//  Id pregunta: 4216 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  El entorno Microsoft, WebDAV";
 choices[40]= new Array();
 choices[40][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio";
 choices[40][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e intranets";
 choices[40][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red";
 choices[40][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos";
 answers[40] = choices[40][1];
 units[40] = "115";
 comments[40] = "Id Pregunta: 4216. ";


//  Id pregunta: 4349 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  La red de investigaci&oacute;n espa&ntilde;ola encargada de dar servicio Internet a universidades y centros de investigaci&oacute;n es:";
 choices[41]= new Array();
 choices[41][0] = "La intranet del CSIC";
 choices[41][1] = "No existe una red propia de investigaci&oacute;n, utilizando los servicios que ofrece Internet.";
 choices[41][2] = "RedIRIS.";
 choices[41][3] = "La Intranet Administrativa.";
 answers[41] = choices[41][2];
 units[41] = "103";
 comments[41] = "Id Pregunta: 4349. ";


//  Id pregunta: 4424 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[42]= new Array();
 choices[42][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[42][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[42][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[42][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[42] = choices[42][2];
 units[42] = "30";
 comments[42] = "Id Pregunta: 4424. ";


//  Id pregunta: 4448 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, las medidas de &iacute;ndole t&eacute;cnica y organizativas necesarias que garanticen la seguridad de los datos de car&aacute;cter personal, deben ser adoptadas por:";
 choices[43]= new Array();
 choices[43][0] = "&Uacute;nicamente el encargado del tratamiento.";
 choices[43][1] = "El afectado de com&uacute;n acuerdo con el encargado del tratamiento.";
 choices[43][2] = "El responsable del fichero y, en su caso, el encargado del tratamiento.";
 choices[43][3] = "&Uacute;nicamente el responsable del fichero";
 answers[43] = choices[43][2];
 units[43] = "29";
 comments[43] = "Id Pregunta: 4448. ";


//  Id pregunta: 4480 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  En el dise&ntilde;o estructurado de sistemas &iquest;Cuales son los elementos principales de un diagrama de estructuras?";
 choices[44]= new Array();
 choices[44][0] = " Atributos, entidades, relaciones y flujos de caja.";
 choices[44][1] = "M&oacute;dulos, entidades y cajas operacionales.";
 choices[44][2] = "Entidades, conexiones entre entidades y flujos de m&oacute;dulos.";
 choices[44][3] = "M&oacute;dulos, conexiones entre los m&oacute;dulos y comunicaciones entre los m&oacute;dulos.";
 answers[44] = choices[44][3];
 units[44] = "86";
 comments[44] = "Id Pregunta: 4480. ";


//  Id pregunta: 4511 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  Una de las siguientes afirmaciones no es cierta respecto a Ia ISO (Organization International de Normalization).";
 choices[45]= new Array();
 choices[45][0] = "Es una red de los institutos de normas nacionales de mas de cien pa&iacute;ses,";
 choices[45][1] = "Es una organizaci&oacute;n no gubernamental.";
 choices[45][2] = "Todos sus miembros son parte de Ia estructura gubernamental de sus pa&iacute;ses, o son conferidos por mandato por su gobierno.";
 choices[45][3] = "La Secretaria Central esta en Ginebra, Suiza.";
 answers[45] = choices[45][2];
 units[45] = "42";
 comments[45] = "Id Pregunta: 4511. ";


//  Id pregunta: 4522 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  En el modelo de Ciclo de vida en cascada pura, &iquest;que sucede si Ia revisi&oacute;n del paso a Ia siguiente etapa del proyecto no es satisfactoria?";
 choices[46]= new Array();
 choices[46][0] = "Se continua con Ia etapa siguiente.";
 choices[46][1] = "Se retrocede a Ia etapa anterior.";
 choices[46][2] = "Se permanece en la etapa actual hasta que este preparada.";
 choices[46][3] = "Se comienza otra vez con Ia primera etapa.";
 answers[46] = choices[46][2];
 units[46] = "76";
 comments[46] = "Id Pregunta: 4522. ";


//  Id pregunta: 4540 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  El protocolo utilizado para gestionar un dispositivo en una red TCP/IP es:";
 choices[47]= new Array();
 choices[47][0] = "RCP";
 choices[47][1] = "SNMP";
 choices[47][2] = "SMTP";
 choices[47][3] = "ICMP";
 answers[47] = choices[47][1];
 units[47] = "100";
 comments[47] = "Id Pregunta: 4540. ";


//  Id pregunta: 4640 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Los diagramas de flujo de datos se componen de";
 choices[48]= new Array();
 choices[48][0] = "actores y casos de uso";
 choices[48][1] = "procesos y tablas";
 choices[48][2] = "entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[48][3] = "modulo, conexi&oacute;n, par&aacute;metro, almac&eacute;n de datos y dispositivos f&iacute;sicos";
 answers[48] = choices[48][2];
 units[48] = "81";
 comments[48] = "Id Pregunta: 4640. ";


//  Id pregunta: 4666 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; relacionado con procesos de negocio?";
 choices[49]= new Array();
 choices[49][0] = "BPMN";
 choices[49][1] = "BPEL";
 choices[49][2] = "XPDL";
 choices[49][3] = "WSDL";
 answers[49] = choices[49][3];
 units[49] = "51";
 comments[49] = "Id Pregunta: 4666. ";


//  Id pregunta: 4719 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[50]= new Array();
 choices[50][0] = "400 puntos sobre 1000.";
 choices[50][1] = "500 puntos sobre 1000.";
 choices[50][2] = "700 puntos sobre 1000.";
 choices[50][3] = "900 puntos sobre 1000.";
 answers[50] = choices[50][1];
 units[50] = "92";
 comments[50] = "Id Pregunta: 4719. Examen 2006 JCYL";


//  Id pregunta: 4760 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  COBIT se divide en tres niveles. Indicar cual no es uno de ellos:";
 choices[51]= new Array();
 choices[51][0] = "Dominios";
 choices[51][1] = "Procesos";
 choices[51][2] = "Elementos";
 choices[51][3] = "Actividades";
 answers[51] = choices[51][2];
 units[51] = "98";
 comments[51] = "Id Pregunta: 4760. ";


//  Id pregunta: 4874 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[52]= new Array();
 choices[52][0] = "La preferencia local";
 choices[52][1] = "El agregado at&oacute;mico";
 choices[52][2] = "El pr&oacute;ximo salto";
 choices[52][3] = "El agregador";
 answers[52] = choices[52][2];
 units[52] = "102";
 comments[52] = "Id Pregunta: 4874. ";


//  Id pregunta: 4884 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la gesti&oacute;n de redes NO es cierta?";
 choices[53]= new Array();
 choices[53][0] = "La base de informaci&oacute;n de administraci&oacute;n (MIB) tiene una estructura de base de datos y reside en laestaci&oacute;n de monitorizaci&oacute;n";
 choices[53][1] = "Uno de los modos de monitorizaci&oacute;n de SNMP (Simple Network Management Protocol) es el de sondeo, queconsiste en la interrupci&oacute;n por parte del agente SNMP a trav&eacute;s del puerto 162 de UDP (User DatagramProtocol)";
 choices[53][2] = "SNMPv3 (SNMP version 3) introduce capacidades de seguridad frente a las versiones anteriores, tales comocontrol de acceso, autenticaci&oacute;n y privacidad";
 choices[53][3] = "RMONv2 (Remote Monitoring version 2) permite la monitorizaci&oacute;n de segmentos de redes de &aacute;rea local y elchequeo de trafico a nivel de red y aplicaci&oacute;n";
 answers[53] = choices[53][0];
 units[53] = "104";
 comments[53] = "Id Pregunta: 4884. ";


//  Id pregunta: 5014 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 3.0 el umbral de saciedad m&aacute;ximo para un criterio";
 choices[54]= new Array();
 choices[54][0] = "indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[54][1] = "indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[54][2] = "indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en lapuntuaci&oacute;n obtenida";
 choices[54][3] = "indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio";
 answers[54] = choices[54][2];
 units[54] = "34";
 comments[54] = "Id Pregunta: 5014. Examen TIC A 2007";


//  Id pregunta: 5094 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[55]= new Array();
 choices[55][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[55][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[55][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[55][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[55] = choices[55][2];
 units[55] = "74";
 comments[55] = "Id Pregunta: 5094. ";


//  Id pregunta: 5128 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l es el modelo conceptual m&aacute;s extendido para los almacenes de datos?";
 choices[56]= new Array();
 choices[56][0] = "Relacional.";
 choices[56][1] = "Multidimensional.";
 choices[56][2] = "Espacial.";
 choices[56][3] = "Temporal.";
 answers[56] = choices[56][1];
 units[56] = "68";
 comments[56] = "Id Pregunta: 5128. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5139 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Qu&eacute; tipos de herramientas CASE son las que tienen las capacidades de control de versiones, trazabilidad de requisitos y an&aacute;lisis de impacto?";
 choices[57]= new Array();
 choices[57][0] = "Las herramientas de prueba.";
 choices[57][1] = "Las herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[57][2] = "Las herramientas de an&aacute;lisis y dise&ntilde;o.";
 choices[57][3] = "Las herramientas de pantallas.";
 answers[57] = choices[57][1];
 units[57] = "79";
 comments[57] = "Id Pregunta: 5139. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5239 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  Una de las siguientes caracter&iacute;sticas no es propia de la planificaci&oacute;n estrat&eacute;gica:";
 choices[58]= new Array();
 choices[58][0] = "Su alcance, afecta generalmente a toda la organizaci&oacute;n";
 choices[58][1] = "Detalla los recursos para alcanzar las formulaciones fijadas en los planes estrat&eacute;gicos";
 choices[58][2] = "La alta direcci&oacute;n est&aacute; implicada en la planificaci&oacute;n estrat&eacute;gica";
 choices[58][3] = "Proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo objetivos a largo plazo";
 answers[58] = choices[58][1];
 units[58] = "77";
 comments[58] = "Id Pregunta: 5239. ";


//  Id pregunta: 5279 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en:";
 choices[59]= new Array();
 choices[59][0] = "las frecuencias usadas";
 choices[59][1] = "los adaptadores usados";
 choices[59][2] = "la forma en que la luz entra en la fibra y se refleja dentro del n&uacute;cleo.";
 choices[59][3] = "La fibra multimodo permite por su naturaleza varios modos de instalacion";
 answers[59] = choices[59][2];
 units[59] = "99";
 comments[59] = "Id Pregunta: 5279. ";


//  Id pregunta: 5486 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en";
 choices[60]= new Array();
 choices[60][0] = "An&aacute;lisis de riesgos";
 choices[60][1] = "An&aacute;lisis de impacto";
 choices[60][2] = "Disponibilidad";
 choices[60][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[60] = choices[60][1];
 units[60] = "33";
 comments[60] = "Id Pregunta: 5486. Castilla y Le&oacute;n";


//  Id pregunta: 5488 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Un procedimiento almacenado:";
 choices[61]= new Array();
 choices[61][0] = "Es una tabla SQL especial que permite ejecutar procesos batch";
 choices[61][1] = "S&oacute;lo puede ser  usado por el DBA";
 choices[61][2] = "Se define mediante la palabra clave CREATE TRIGGER";
 choices[61][3] = "Es un conjunto de comandos SQL que pueden almacenarse en el servidor";
 answers[61] = choices[61][3];
 units[61] = "58";
 comments[61] = "Id Pregunta: 5488. ";


//  Id pregunta: 5520 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  Indicar la respuesta verdadera";
 choices[62]= new Array();
 choices[62][0] = "Las im&aacute;genes r&aacute;ster constan de matrices de p&iacute;xeles que se ordenan en una relaci&oacute;n predefinida de columnas y filas";
 choices[62][1] = "Las im&aacute;genes vectoriales se componen de formas matem&aacute;ticas codificadas como f&oacute;rmulas matem&aacute;ticas";
 choices[62][2] = "Las respuestas a) y b) son verdaderas";
 choices[62][3] = "Las respuestas a) y b) son falsas";
 answers[62] = choices[62][2];
 units[62] = "93";
 comments[62] = "Id Pregunta: 5520. ";


//  Id pregunta: 5535 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  Indique la respuesta falsa";
 choices[63]= new Array();
 choices[63][0] = "El portal Your Europe tiene que como objetivo informar a los pa&iacute;ses que no son de la UE sobre las posibilidades de adhesi&oacute;n a la UE";
 choices[63][1] = "PLOTEUS es el portal europeo de oportunidades de formaci&oacute;n";
 choices[63][2] = "TESTA es una red que interconecta las distintas redes administrativas de los estados miembros";
 choices[63][3] = "EURES es un servicio paneuropeo que pretende facilitar el libre movimiento de trabajadores en el Espacio Econ&oacute;mico Europeo";
 answers[63] = choices[63][0];
 units[63] = "30";
 comments[63] = "Id Pregunta: 5535. ";


//  Id pregunta: 5690 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  &iquest;Qui&eacute;n expide los certificados del DNI electr&oacute;nico?";
 choices[64]= new Array();
 choices[64][0] = "El Ministerio de Administraciones P&uacute;blicas";
 choices[64][1] = "La plataforma @firma";
 choices[64][2] = "La Entidad P&uacute;blica Red.es";
 choices[64][3] = "La Direcci&oacute;n General de la Polic&iacute;a";
 answers[64] = choices[64][3];
 units[64] = "74";
 comments[64] = "Id Pregunta: 5690. ";


//  Id pregunta: 5725 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  Los SGBD soportan 3 tipos de lenguajes: Lenguaje de Consulta de Datos, Lenguaje de Definici&oacute;n de Datos y Lenguaje de Manipulaci&oacute;n de Datos. Concretamente, el est&aacute;ndar SQL ISO 9075:1987 contempla en su definici&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Lenguaje de Consulta de datos.";
 choices[65][1] = "Lenguaje de Consulta y de Manipulaci&oacute;n de datos.";
 choices[65][2] = "Lenguaje de Consulta y de Definici&oacute;n de datos.";
 choices[65][3] = "Lenguaje de Consulta, de Manipulaci&oacute;n y de Definici&oacute;n de datos.";
 answers[65] = choices[65][3];
 units[65] = "58";
 comments[65] = "Id Pregunta: 5725. MAP 2008 A2";


//  Id pregunta: 5783 Año de creación de pregunta: 2009-01-01
 questions[66]= "67)  De las siguientes cuestiones de la arquitectura .NET indique cu&aacute;l es FALSA.";
 choices[66]= new Array();
 choices[66][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[66][1] = "Las clases ADO.NET permiten a los desarrolladores interaccionar con los datos, como si fueran XML, a trav&eacute;s de las interfaces de OLE DB, ODBC y SQL Server";
 choices[66][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la platafoma.";
 choices[66][3] = "En la arquitectura . NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n.";
 answers[66] = choices[66][2];
 units[66] = "59";
 comments[66] = "Id Pregunta: 5783. MAP 2008 A2";


//  Id pregunta: 5822 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  El Reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, aprobado por Rel Decreto 1720/2007 de 21 de diciembre, indica que el plazo m&aacute;ximo para dictar y notificar resoluci&oacute;n acerca de la inscripci&oacute;n, modificaci&oacute;n o cancelaci&oacute;n de ficheros ser&aacute; de:";
 choices[67]= new Array();
 choices[67][0] = "Un mes";
 choices[67][1] = "Dos meses";
 choices[67][2] = "Tres meses";
 choices[67][3] = "Seis meses";
 answers[67] = choices[67][0];
 units[67] = "29";
 comments[67] = "Id Pregunta: 5822. MAP 2008 A1";


//  Id pregunta: 5823 Año de creación de pregunta: 2009-01-01
 questions[68]= "69)  Seg&uacute;n Magerit versi&oacute;n 2 en un proyecto de an&aacute;lisis de gesti&oacute;n de riesgos qu&eacute; documento de los citados a continuaci&oacute;n NO se genera en el Proceso de Planificaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Tipolog&iacute;a de activos";
 choices[68][1] = "Dimensiones de seguridad relevantes";
 choices[68][2] = "Criterios de evaluaci&oacute;n";
 choices[68][3] = "Modelo de valor";
 answers[68] = choices[68][3];
 units[68] = "33";
 comments[68] = "Id Pregunta: 5823. MAP 2008 A1";


//  Id pregunta: 5966 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Seg&uacute;n CMMI, todos los elementos que influyen en la construcci&oacute;n del producto son:";
 choices[69]= new Array();
 choices[69][0] = "El procedimiento, la tecnolog&iacute;a, la direcci&oacute;n y las personas";
 choices[69][1] = "El proceso, la tecnolog&iacute;a y las personas";
 choices[69][2] = "El procedimiento, el proceso, la tecnolog&iacute;a y las personas";
 choices[69][3] = "El proceso y el procedimiento";
 answers[69] = choices[69][1];
 units[69] = "87";
 comments[69] = "Id Pregunta: 5966. Castilla La Mancha 2009";


//  Id pregunta: 5983 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;En cu&aacute;l de los siguientes componentes de XML se define la estructura de los datos que va a contener un formulario XML?";
 choices[70]= new Array();
 choices[70][0] = "Manifiestos (XSF).";
 choices[70][1] = "Vistas (XLS).";
 choices[70][2] = "Esquemas (XSD).";
 choices[70][3] = "Datos (XML).";
 answers[70] = choices[70][2];
 units[70] = "69";
 comments[70] = "Id Pregunta: 5983. TIC A 2009";


//  Id pregunta: 6008 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  La t&eacute;cnica JAD (Joint Application Design) para el an&aacute;lisis de requisitos:";
 choices[71]= new Array();
 choices[71][0] = "Consiste en la realizaci&oacute;n de entrevistas con diversas personas, elaborando un acta para cada entrevista que se les remitir&aacute; posteriormente para su aprobaci&oacute;n.";
 choices[71][1] = "Consiste en realizar un taller donde los trabajadores del conocimiento y especialistas de TI se re&uacute;nen en diversas sesiones, a veces por varios d&iacute;as, para definir y revisar los requerimientos del negocio para el sistema.";
 choices[71][2] = "Define seis categor&iacute;as de aspectos que el analista debe estudiar con los usuarios empleando para ello otras t&eacute;cnicas de an&aacute;lisis de requisitos.";
 choices[71][3] = "Es una t&eacute;cnica cuyo objetivo principal es realizar un control de versiones de un determinado producto software.";
 answers[71] = choices[71][1];
 units[71] = "78";
 comments[71] = "Id Pregunta: 6008. TIC A 2009";


//  Id pregunta: 6140 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  Acerca del protocolo Kerberos v. 5 (IETF RFC 4120):";
 choices[72]= new Array();
 choices[72][0] = "Tiene extensiones que permiten el empleo de criptograf&iacute;a de clave p&uacute;blica y secreta.";
 choices[72][1] = "Los tickets expiran tras un tiempo predeterminado en el protocolo.";
 choices[72][2] = "El servidor de autenticaci&oacute;n cifra el ticket que remite al cliente con una clave que obtiene a partir del nombre y la contrase&ntilde;a del usuario.";
 choices[72][3] = "Utiliza los algoritmos de cifrado bajo el modo de operaci&oacute;n denominado CBC (Cipher block chaining).";
 answers[72] = choices[72][0];
 units[72] = "74";
 comments[72] = "Id Pregunta: 6140. TIC A 2009";


//  Id pregunta: 6141 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es el MOS (Mean Opinion Score)?";
 choices[73]= new Array();
 choices[73][0] = "Es una medida subjetiva de calidad de sonido, que se suele utilizar en sistemas de VoIP";
 choices[73][1] = "Es una de la pr&aacute;cticas que propone M&eacute;trica 3 para las reuniones de trabajo, junto con las reuniones, las entrevistas y el JAD (Joint Application Design)";
 choices[73][2] = "Es una t&eacute;cnica de estimaci&oacute;n de esfuerzo software, que se utiliza, por ejemplo, cuando no hay datos suficientes para estimar puntos funci&oacute;n";
 choices[73][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[73] = choices[73][0];
 units[73] = "100, 109";
 comments[73] = "Id Pregunta: 6141. ";


//  Id pregunta: 6207 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[74]= new Array();
 choices[74][0] = "WebLogic";
 choices[74][1] = "WebSphere";
 choices[74][2] = "Apache Tomcat";
 choices[74][3] = "Jboss";
 answers[74] = choices[74][2];
 units[74] = "60";
 comments[74] = "Id Pregunta: 6207. TICB-2009, bloque desarrollo";


//  Id pregunta: 6302 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes no es una propiedad del modelo orientado a objetos?";
 choices[75]= new Array();
 choices[75][0] = "Abstracci&oacute;n";
 choices[75][1] = "Encapsulaci&oacute;n";
 choices[75][2] = "Independencia";
 choices[75][3] = "Modularidad";
 answers[75] = choices[75][2];
 units[75] = "82";
 comments[75] = "Id Pregunta: 6302. ";


//  Id pregunta: 6355 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Cuando el Regristro de Operadores constate que la notificaci&oacute;n, de un interesado en la explotaci&oacute;n de una determinada red o en la prestaci&oacute;n de un determinado serviciode comunicaciones electr&oacute;nicas, no re&uacute;ne los requisitos, dictar&aacute; resoluci&oacute;n motivada en un plazo m&aacute;ximo de:";
 choices[76]= new Array();
 choices[76][0] = "1 mes";
 choices[76][1] = "10 d&iacute;as";
 choices[76][2] = "15 d&iacute;as";
 choices[76][3] = "2 meses";
 answers[76] = choices[76][2];
 units[76] = "110";
 comments[76] = "Id Pregunta: 6355. Art&iacute;culo 7 Ley 9/2014";


//  Id pregunta: 6401 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  La red multicanal de acceso a informaci&oacute;n o tramitaci&oacute;n de los servicios p&uacute;blicos de cualquier administraci&oacute;n, es conocida como:";
 choices[77]= new Array();
 choices[77][0] = "Red 112";
 choices[77][1] = "Red 060";
 choices[77][2] = "Red Conecta";
 choices[77][3] = "Red SARA";
 answers[77] = choices[77][1];
 units[77] = "30";
 comments[77] = "Id Pregunta: 6401. ";


//  Id pregunta: 6407 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  &iquest;Puede el cesionario titular de derechos de explotaci&oacute;n realizar o autorizar la realizaci&oacute;n de versiones sucesivas de un programa o programas derivados del mismo, sin permiso del autor?";
 choices[78]= new Array();
 choices[78][0] = "No, salvo pacto en contrario";
 choices[78][1] = "S&iacute;, salvo pacto en contrario";
 choices[78][2] = "S&iacute;, en cualquier caso";
 choices[78][3] = "No, en ning&uacute;n caso";
 answers[78] = choices[78][1];
 units[78] = "36";
 comments[78] = "Id Pregunta: 6407. Art&iacute;culo 100 RDL 1/1996";


//  Id pregunta: 6420 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  &iquest;Qu&eacute; es TAW?";
 choices[79]= new Array();
 choices[79][0] = "Es una familia de herramienta para el an&aacute;lisis de la accesibilidad  de sitios web.";
 choices[79][1] = "Es un Gestor de Contenidos";
 choices[79][2] = "Es un tipo de licencia de software libre";
 choices[79][3] = "Es una herramienta de workgroup";
 answers[79] = choices[79][0];
 units[79] = "39";
 comments[79] = "Id Pregunta: 6420. ";


//  Id pregunta: 6442 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  Seg&uacute;n la normativa en materia de normalizaci&oacute;n en el campo de las tecnolog&iacute;as de la informaci&oacute;n y las telecomunicaciones, se obliga a usar normas europeas e Internacionales en la Adquisici&oacute;n de Bienes y Servicios TIC, y NO es una excepci&oacute;n:";
 choices[80]= new Array();
 choices[80][0] = "Continuidad de funcionamiento";
 choices[80][1] = "Naturaleza innovadora de algunos proyectos";
 choices[80][2] = "Soluci&oacute;n de coste excesivo. Cuando tras un estudio de mercado, existan razones relacionadas con la efectividad del coste que hacen inadecuada el uso de la norma.";
 choices[80][3] = "Compras menores o iguales a 100.000 euros.";
 answers[80] = choices[80][3];
 units[80] = "41";
 comments[80] = "Id Pregunta: 6442. Castilla La Mancha 2009";


//  Id pregunta: 6451 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes es un JFS (Journaling File System)?";
 choices[81]= new Array();
 choices[81][0] = "FAT16";
 choices[81][1] = "ReiserFS";
 choices[81][2] = "ext32";
 choices[81][3] = "Linux extended";
 answers[81] = choices[81][1];
 units[81] = "52";
 comments[81] = "Id Pregunta: 6451. Castilla La Mancha 2009";


//  Id pregunta: 6569 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  El certificado X.509 no";
 choices[82]= new Array();
 choices[82][0] = "Fue definido por el antes denominado CCITT (actualmente ITU) en la recomendaci&oacute;n X.509";
 choices[82][1] = "En esta recomendaci&oacute;n se define un modelo seguro para suministrar el servicio de autenticaci&oacute;n a los usuarios del Directorio X.500 basado en criptograf&iacute;a de clave p&uacute;blica";
 choices[82][2] = "La recomendaci&oacute;n X.509 [CCI88] define un modelo de certificado en sintaxis ASN.1";
 choices[82][3] = "Todas las respuestas anteriores son ciertas";
 answers[82] = choices[82][3];
 units[82] = "73";
 comments[82] = "Id Pregunta: 6569. ";


//  Id pregunta: 8397 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Seg&uacute;n el Real Decreto 1720/2007, la conservaci&oacute;n de una copia de respaldo de los datos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, es una medida de protecci&oacute;n de nivel";
 choices[83]= new Array();
 choices[83][0] = "B&aacute;sico";
 choices[83][1] = "Medio";
 choices[83][2] = "Alto";
 choices[83][3] = "No se contempla esta medida de protecci&oacute;n";
 answers[83] = choices[83][2];
 units[83] = "29";
 comments[83] = "Id Pregunta: 8397. Examen TIC A2 2010";


//  Id pregunta: 8462 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Entre los tipos de componentes que incluye la especificaci&oacute;n de aplicaciones basadas en J2EE 1.4 se encuentran:";
 choices[84]= new Array();
 choices[84][0] = "P&aacute;ginas Asp y VBScript";
 choices[84][1] = "Applet, Servlets, EJBs";
 choices[84][2] = "Javascript y p&aacute;ginas JSP";
 choices[84][3] = "Ninguna de las anteriores";
 answers[84] = choices[84][1];
 units[84] = "116";
 comments[84] = "Id Pregunta: 8462. Analista Ayto. Madrid 2010";


//  Id pregunta: 8466 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Las fibras monomodo:";
 choices[85]= new Array();
 choices[85][0] = "Se emplean normalmente en enlaces de de telecomunicaci&oacute;n de distancias largas";
 choices[85][1] = "Presentan la superficie de separaci&oacute;n entre el n&uacute;cleo y el revestimiento, claramente definida y diferenciada dando lugar a que los rayos luminosos se reflejen hacia el n&uacute;cleo formando diversos &aacute;ngulos";
 choices[85][2] = "Se caracterizan por una velocidad de flujo reducida";
 choices[85][3] = "Su instalaci&oacute;n es m&aacute;s sencilla que las multimodo";
 answers[85] = choices[85][0];
 units[85] = "99";
 comments[85] = "Id Pregunta: 8466. Analista Ayto. Madrid 2010";


//  Id pregunta: 8476 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  En la traslaci&oacute;n del modelo OSI para su aplicaci&oacute;n a las redes de &aacute;rea local (LAN), es cierto que:";
 choices[86]= new Array();
 choices[86][0] = "El nivel de enlace se subdivide en subnivel LLC y subnivel MAC.";
 choices[86][1] = "El nivel f&iacute;sico se subdivide en subnivel LLC y subnivel MAC.";
 choices[86][2] = "Se establecen los tres niveles siguientes: nivel f&iacute;sico (que pasa a denominarse nivel LLC), nivel MAC y nivel de enlace.";
 choices[86][3] = "Los niveles f&iacute;sico y de enlace pasan de denominarse, respectivamente, nivel LLC y nivel MAC";
 answers[86] = choices[86][0];
 units[86] = "101";
 comments[86] = "Id Pregunta: 8476. Examen TIC A2 2010 interna";


//  Id pregunta: 8527 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  En un cortafuegos en modo SPI (Stateful Packet Inspection), se&ntilde;ale la opci&oacute;n verdadera:";
 choices[87]= new Array();
 choices[87][0] = "Trabaja exclusivamente en el nivel 3 de OSI.";
 choices[87][1] = "Permitir&aacute; el paso de un paquete solo si se dirige al puerto 80 de nuestro servidor.";
 choices[87][2] = "Tiene en cuenta la negociaci&oacute;n en 3 pasos (3 way handshake) del protocolo TCP/IP.";
 choices[87][3] = "No permite la conexi&oacute;n SSH ya que est&aacute; cifrada.";
 answers[87] = choices[87][2];
 units[87] = "111";
 comments[87] = "Id Pregunta: 8527. Examen TIC A2 2010 interna";


//  Id pregunta: 8532 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  En relaci&oacute;n con la tecnolog&iacute;a ADSL, un multiplexor localizado en la central telef&oacute;nica que concentra el tr&aacute;fico de enlaces ADSL de usuario, se denomina:";
 choices[88]= new Array();
 choices[88][0] = "DSLAM";
 choices[88][1] = "DSLM";
 choices[88][2] = "ADSLM";
 choices[88][3] = "ADSLAM";
 answers[88] = choices[88][0];
 units[88] = "107";
 comments[88] = "Id Pregunta: 8532. Examen TIC A2 2010 interna";


//  Id pregunta: 8730 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  Los protocolos b&aacute;sicos usados en una red de &aacute;rea de almacenamiento son:";
 choices[89]= new Array();
 choices[89][0] = "Fibre Channel Arbitrated Loop, Fibre Channel Switched y Small Computer System Interface";
 choices[89][1] = "Fibre Channel Arbitrated Loop y Fibre Channel Small Loop";
 choices[89][2] = "Small Computer System Interface y Fibre Channel Small Loop";
 choices[89][3] = "Fibre Channel Small Loop, Address Resolution Protocol y Network File System";
 answers[89] = choices[89][0];
 units[89] = "48";
 comments[89] = "Id Pregunta: 8730. Examen UPM A2 2011";


//  Id pregunta: 8790 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es correcta?";
 choices[90]= new Array();
 choices[90][0] = "Las direcciones no son jer&aacute;rquicas y se asignan aleatoriamente";
 choices[90][1] = "Hay 2.7 billones de direcciones disponibles para asignar";
 choices[90][2] = "Las direcciones broadcast se reemplazan con direcciones multicast";
 choices[90][3] = "Un interfaz de red &uacute;nicamente podr&aacute; ser configurado con una &uacute;nica direcci&oacute;n";
 answers[90] = choices[90][2];
 units[90] = "100";
 comments[90] = "Id Pregunta: 8790. Examen UPM A2 2011";


//  Id pregunta: 8863 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  Seg&uacute;n M&eacute;trica v.3, la desnormalizaci&oacute;n controlada del modelo f&iacute;sico de datos se aplica para:";
 choices[91]= new Array();
 choices[91][0] = "Reducir o simplificar el n&uacute;mero de accesos a la base de datos";
 choices[91][1] = "Proporcionar flexibilidad al modelo";
 choices[91][2] = "Hacer m&aacute;s r&aacute;pidas las actualizaciones";
 choices[91][3] = "Proporcionar independencia del sistema gestor de base de datos";
 answers[91] = choices[91][0];
 units[91] = "86";
 comments[91] = "Id Pregunta: 8863. Analista Ayto. Madrid 2010";


//  Id pregunta: 8975 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  Seg&uacute;n el R.D. 1720/2007, &ldquo;El afectado podr&aacute; revocar su consentimiento a trav&eacute;s de un medio sencillo, gratuito y que no implique...";
 choices[92]= new Array();
 choices[92][0] = "...gasto alguno para el afectado&rdquo;";
 choices[92][1] = "...esfuerzos desproporcionados para el afectado&rdquo;";
 choices[92][2] = "...ingreso alguno para el responsable del fichero o tratamiento&rdquo;";
 choices[92][3] = "...ning&uacute;n tipo de discriminaci&oacute;n&rdquo;";
 answers[92] = choices[92][2];
 units[92] = "29";
 comments[92] = "Id Pregunta: 8975. ";


//  Id pregunta: 8998 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  En un sistema de segmentaci&oacute;n, los segmentos que necesitan los programas pueden no estar residentes en la memoria principal. Esta situaci&oacute;n se indica haciendo uso del:";
 choices[93]= new Array();
 choices[93][0] = "Bit de segmentaci&oacute;n.";
 choices[93][1] = "Bit de ausencia.";
 choices[93][2] = "Bit de presencia.";
 choices[93][3] = "Bit de petici&oacute;n.";
 answers[93] = choices[93][2];
 units[93] = "45";
 comments[93] = "Id Pregunta: 8998. Examen UPM A2 2011";


//  Id pregunta: 9015 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  &iquest;Qu&eacute; utilidad tiene en la transmisi&oacute;n por radio el pico de absorci&oacute;n del ox&iacute;geno en 60 Ghz?:";
 choices[94]= new Array();
 choices[94][0] = "Permite la propagaci&oacute;n por conductos .";
 choices[94][1] = "Permite la reutilizaci&oacute;n espacial de frecuencias en esa banda.";
 choices[94][2] = "Permite la propagaci&oacute;n por dispersi&oacute;n en esa banda.";
 choices[94][3] = "Ninguna de las anteriores";
 answers[94] = choices[94][1];
 units[94] = "108";
 comments[94] = "Id Pregunta: 9015. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9043 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  Cu&aacute;l no es una implementaci&oacute;n de Linux";
 choices[95]= new Array();
 choices[95][0] = "Debian";
 choices[95][1] = "Ubuntu";
 choices[95][2] = "Red Hat";
 choices[95][3] = "Mono";
 answers[95] = choices[95][3];
 units[95] = "53";
 comments[95] = "Id Pregunta: 9043. ";


//  Id pregunta: 9187 Año de creación de pregunta: 2013-01-01
 questions[96]= "97)  &iquest; Qu&eacute; afirmaci&oacute;n sobre M&eacute;trica 3 es falsa ?";
 choices[96]= new Array();
 choices[96][0] = "El mantenimiento Adaptativo no se adapta a las nuevas necesidades del usuario";
 choices[96][1] = "La valoraci&oacute;n de los riesgos de la soluci&oacute;n se lleva a cabo en el Estudio de Viabilidad";
 choices[96][2] = "El cat&aacute;logo de requisitos queda inamovible desde el final del An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[96][3] = "La migraci&oacute;n y carga de datos se tiene en cuenta tanto en el An&aacute;lisis como en el Dise&ntilde;o";
 answers[96] = choices[96][2];
 units[96] = "86";
 comments[96] = "Id Pregunta: 9187. ";


//  Id pregunta: 9455 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[97]= new Array();
 choices[97][0] = "Primera Forma Normal.";
 choices[97][1] = "Segunda Forma Normal.";
 choices[97][2] = "Tercera Forma Normal.";
 choices[97][3] = "Forma Normal de Boyce-Codd.";
 answers[97] = choices[97][1];
 units[97] = "58";
 comments[97] = "Id Pregunta: 9455. ";


//  Id pregunta: 9843 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l es el m&eacute;todo que se recomienda para proteger los datos en una WLAN?";
 choices[98]= new Array();
 choices[98][0] = "Utilizar el cifrado.";
 choices[98][1] = "Utilizar el SSID de no difusi&oacute;n.";
 choices[98][2] = "Establecer la energ&iacute;a transmitida al ajuste m&aacute;s s&oacute;lido.";
 choices[98][3] = "Utilizar el canal 7 en lugar de cualquier otro canal en los espectros de 2,4 GHz.";
 answers[98] = choices[98][0];
 units[98] = "111";
 comments[98] = "Id Pregunta: 9843. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 10302 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  En IPv6 (RFC 2460), &iquest;cu&aacute;nto ocupa el campo &quot;tipo de enrutamiento&quot;?";
 choices[99]= new Array();
 choices[99][0] = "15 bits.";
 choices[99][1] = "8 bits.";
 choices[99][2] = "10 bits.";
 choices[99][3] = "3 bits.";
 answers[99] = choices[99][1];
 units[99] = "100";
 comments[99] = "Id Pregunta: 10302. TIC A2, libre, examen 2013";


