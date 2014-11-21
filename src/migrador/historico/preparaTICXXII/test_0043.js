/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 54 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;ndo podr&iacute;a utilizarse, en un proceso de decisi&oacute;n multicriterio discreta, el c&aacute;lculo de pesos por el m&eacute;todo de la entrop&iacute;a?:";
 choices[0]= new Array();
 choices[0][0] = "Cuando no se disponga previamente de la puntuaci&oacute;n de las alternativas para cada criterio";
 choices[0][1] = "Cuando el decisor quiera minimizar la subjetividad en la asignaci&oacute;n de pesos";
 choices[0][2] = "Cuando, tras la normalizaci&oacute;n, exista alguna puntuaci&oacute;n nula en alguno de los criterios";
 choices[0][3] = "Cuando el decisor quiera comparar los criterios de dos en dos para fijar mejor su jerarqu&iacute;a";
 answers[0] = choices[0][1];
 units[0] = "34";
 comments[0] = "Id Pregunta: 54. ";


//  Id pregunta: 97 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  A un sistema de informaci&oacute;n definido como &quot; Sistemas orientados a la ayuda en la toma de decisiones espor&aacute;dicas u ocasionales &quot; corresponde al tipo de sistema de informaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Sistemas orientados a la gesti&oacute;n de empresa o Management Information Systems (MIS)";
 choices[1][1] = "Sistemas orientados al proceso de transacciones o Transaction Processing Systems";
 choices[1][2] = "Sistemas de apoyo a la toma de decisiones o Decision Support Systems (DSS)";
 choices[1][3] = "Sistemas de apoyo a la direcci&oacute;n o Executive Support Systems (ESS)";
 answers[1] = choices[1][2];
 units[1] = "21";
 comments[1] = "Id Pregunta: 97. ";


//  Id pregunta: 212 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En la elaboraci&oacute;n de una norma se distinguen varias fases. Indique cu&aacute;les son estas:";
 choices[2]= new Array();
 choices[2][0] = "Trabajos preliminares, propuesta, informaci&oacute;n p&uacute;blica, petici&oacute;n";
 choices[2][1] = "Trabajos preliminares, proyecto, informaci&oacute;n p&uacute;blica, propuesta, petici&oacute;n";
 choices[2][2] = "Proyecto, informaci&oacute;n p&uacute;blica, certificaci&oacute;n";
 choices[2][3] = "Proyecto, propuesta, informaci&oacute;n p&uacute;blica, petici&oacute;n";
 answers[2] = choices[2][1];
 units[2] = "42";
 comments[2] = "Id Pregunta: 212. ";


//  Id pregunta: 304 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La estructura organizacional  proyecto-funcional de un &aacute;rea de desarrollo:";
 choices[3]= new Array();
 choices[3][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[3][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[3][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[3][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[3] = choices[3][2];
 units[3] = "26";
 comments[3] = "Id Pregunta: 304. estructura organizacional";


//  Id pregunta: 358 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Las medidas de protecci&oacute;n antivirus:";
 choices[4]= new Array();
 choices[4][0] = "Pueden ser de prevenci&oacute;n o de detecci&oacute;n";
 choices[4][1] = "Pueden ser de prevenci&oacute;n, de detecci&oacute;n o de contingencia";
 choices[4][2] = "S&oacute;lo son efectivas frente a ataques de virus tipo &quot;gusanos&quot;";
 choices[4][3] = "Deben minimizar los efectos ulteriores a la infecci&oacute;n de un sistema inform&aacute;tico";
 answers[4] = choices[4][1];
 units[4] = "33";
 comments[4] = "Id Pregunta: 358. ";


//  Id pregunta: 447 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Seg&uacute;n las teor&iacute;as de Alvin Toffler:";
 choices[5]= new Array();
 choices[5][0] = "Las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[5][1] = "Las organizaciones basadas en la informaci&oacute;n tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[5][2] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de S";
 choices[5][3] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de doble S";
 answers[5] = choices[5][0];
 units[5] = "22";
 comments[5] = "Id Pregunta: 447. ";


//  Id pregunta: 454 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Se&ntilde;ale la opci&oacute;n que es uno de los objetivos fundamentales de los sistemas abiertos seg&uacute;n X/Open:";
 choices[6]= new Array();
 choices[6][0] = "Portabilidad de aplicaciones en c&oacute;digo fuente";
 choices[6][1] = "Conectividad de aplicaciones a trav&eacute;s de servicios portables de red, independientes de los protocolos subyacentes y soporte de protocolos comunes";
 choices[6][2] = "Consistencia de la interfaz de usuario";
 choices[6][3] = "Todas son objetivos fundamentales";
 answers[6] = choices[6][3];
 units[6] = "40";
 comments[6] = "Id Pregunta: 454. ";


//  Id pregunta: 720 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[7]= new Array();
 choices[7][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[7][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[7][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[7][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[7] = choices[7][1];
 units[7] = "58";
 comments[7] = "Id Pregunta: 720. Examen TIC MAP B 2004";


//  Id pregunta: 781 Año de creación de pregunta: 2005-01-01
 questions[8]= "9)  La captura de los datos de una tarjeta de cr&eacute;dito por un tercero, en una transacci&oacute;n econ&oacute;mica realizada a trav&eacute;s de internet entre un comprador y una tienda de comercio electr&oacute;nico afecta a:";
 choices[8]= new Array();
 choices[8][0] = "La dimensi&oacute;n de integridad de la informaci&oacute;n en tr&aacute;nsito";
 choices[8][1] = "La dimensi&oacute;n de autenticaci&oacute;n del destinatario de la informaci&oacute;n en tr&aacute;nsito";
 choices[8][2] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n en tr&aacute;nsito";
 choices[8][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n en tr&aacute;nsito";
 answers[8] = choices[8][2];
 units[8] = "72";
 comments[8] = "Id Pregunta: 781. segurida y cifrado";


//  Id pregunta: 791 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  Seg&uacute;n la licencia GNU GPL (General Public License), &iquest;cu&aacute;l de las siguientes sentencias no es correcta?";
 choices[9]= new Array();
 choices[9][0] = "Disponemos de la libertad de estudiar c&oacute;mo funciona el programa y adaptarlo seg&uacute;n nuestras necesidades";
 choices[9][1] = "Nuestro derecho de autor queda salvaguardado";
 choices[9][2] = "Podemos redistribuir todas las copias que queramos";
 choices[9][3] = "No se puede cobrar dinero por el software libre.";
 answers[9] = choices[9][3];
 units[9] = "61";
 comments[9] = "Id Pregunta: 791. ";


//  Id pregunta: 1254 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Las arquitecturas de discos magn&eacute;ticos denominadas RAID tienen por objeto mejorar las siguientes caracter&iacute;sticas de los sistemas de almacenamiento. Se&ntilde;ale la opci&oacute;n correcta:";
 choices[10]= new Array();
 choices[10][0] = "La seguridad y la velocidad de transferencia";
 choices[10][1] = "La capacidad de almacenamiento y la segmentaci&oacute;n correcta de los datos";
 choices[10][2] = "La velocidad de transferencia y la ausencia de errores en los datos almacenados";
 choices[10][3] = "La disponibilidad de los datos y/o el rendimiento";
 answers[10] = choices[10][3];
 units[10] = "48";
 comments[10] = "Id Pregunta: 1254. ";


//  Id pregunta: 1356 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Se&ntilde;ale la sentencia correcta respecto a los m&eacute;todos de resoluci&oacute;n de problemas:";
 choices[11]= new Array();
 choices[11][0] = "El m&eacute;todo GPS (General Problem Solver) consiste en almacenar en un momento dado el camino recorrido desde la ra&iacute;z mediante el empleo de funciones recursivas";
 choices[11][1] = "El m&eacute;todo STRIPS (Stanford Research Institute Problem Solver) une la filosof&iacute;a GPS con las t&eacute;cnicas de b&uacute;squeda en profundidad";
 choices[11][2] = "El m&eacute;todo GPS consiste en descomponer un problema de manera sistem&aacute;tica en subproblemas";
 choices[11][3] = "El m&eacute;todo STRIPS no puede representar conceptos y deducir a partir de ellos nuevos hechos mediante las reglas de deducci&oacute;n";
 answers[11] = choices[11][2];
 units[11] = "63";
 comments[11] = "Id Pregunta: 1356. ";


//  Id pregunta: 1432 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  XML:";
 choices[12]= new Array();
 choices[12][0] = "Es un lenguaje de presentaci&oacute;n, similar a HTML, pero m&aacute;s avanzado";
 choices[12][1] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos";
 choices[12][2] = "Es similar a HTML pero con una orientaci&oacute;n hacia el mundo del dise&ntilde;o dado que permite realizar maginas web mas vistosas y din&aacute;micas";
 choices[12][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[12] = choices[12][1];
 units[12] = "69";
 comments[12] = "Id Pregunta: 1432. ";


//  Id pregunta: 1565 Año de creación de pregunta: 2009-01-01
 questions[13]= "14)  &iquest;C&uacute;al es la afirmaci&oacute;n falsa si hablamos de LDAP?";
 choices[13]= new Array();
 choices[13][0] = "Usa TCP/IP";
 choices[13][1] = "Reemplaza a X.500";
 choices[13][2] = "El protocolo usa ASN.1 y los mensajes se codifican y transmiten usando BER ";
 choices[13][3] = "Permite la operaci&oacute;n MODIFY";
 answers[13] = choices[13][2];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1565. RFC 4511";


//  Id pregunta: 1710 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  Un sistema multiusuario es:";
 choices[14]= new Array();
 choices[14][0] = "Un sistema que posee varias CPUs y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[14][1] = "Un sistema que posee una sola CPU y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[14][2] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero concurrente de usuarios";
 choices[14][3] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero no concurrente de usuarios";
 answers[14] = choices[14][2];
 units[14] = "52";
 comments[14] = "Id Pregunta: 1710. ";


//  Id pregunta: 1752 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  Se&ntilde;ala la falsa referente a SQL";
 choices[15]= new Array();
 choices[15][0] = "Las funciones de agregado devuelven un &uacute;nico valor ";
 choices[15][1] = "La cla&uacute;sula HAVING se utiliza para especificar las condiciones que deben reunir los registros a seleccionar";
 choices[15][2] = "SELF JOIN es una t&eacute;cnica empleada para conseguir el producto cartesiano de una tabla consigo misma";
 choices[15][3] = "La cla&uacute;sula CONSTRAINT permite crear o eliminar &iacute;ndices";
 answers[15] = choices[15][1];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1752. ";


//  Id pregunta: 1993 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  La &quot;descomposicion del problema&quot; es una actividad b&aacute;sica en el an&aacute;lisis de requisitos de los sistemas de informaci&oacute;n. Esta &quot;descomposici&oacute;n&quot; se aplica sobre dos &aacute;reas:";
 choices[16]= new Array();
 choices[16][0] = "La funcionalidad a entregar y el proceso que se utilizar&aacute; para entregarla";
 choices[16][1] = "El hardware y el software previsto en el proyecto";
 choices[16][2] = "El modelado de datos y el modelado de procesos";
 choices[16][3] = "El an&aacute;lisis funcional y el an&aacute;lisis org&aacute;nico";
 answers[16] = choices[16][0];
 units[16] = "78";
 comments[16] = "Id Pregunta: 1993. Pregunta TIC-B 2004";


//  Id pregunta: 2109 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest; De los siguientes, cu&aacute;l es un lenguaje orientado a objetos puro?:";
 choices[17]= new Array();
 choices[17][0] = "Dominum";
 choices[17][1] = "PureLisp";
 choices[17][2] = "Eiffel";
 choices[17][3] = "Domino";
 answers[17] = choices[17][2];
 units[17] = "82";
 comments[17] = "Id Pregunta: 2109. ";


//  Id pregunta: 2139 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica com&uacute;n de las metodolog&iacute;as de desarrollo de equipos l&oacute;gicos?:";
 choices[18]= new Array();
 choices[18][0] = "Uso de las t&eacute;cnicas gr&aacute;ficas";
 choices[18][1] = "Orden y coherencia";
 choices[18][2] = "Pruebas de aceptaci&oacute;n";
 choices[18][3] = "Diccionario de datos";
 answers[18] = choices[18][2];
 units[18] = "79";
 comments[18] = "Id Pregunta: 2139. ";


//  Id pregunta: 2551 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Uno de los est&aacute;ndares de representaci&oacute;n de c&oacute;digos de barras en dos dimensiones es:";
 choices[19]= new Array();
 choices[19][0] = "PDF 417";
 choices[19][1] = "EPS 417";
 choices[19][2] = "PES 417";
 choices[19][3] = "2DC 417";
 answers[19] = choices[19][0];
 units[19] = "93";
 comments[19] = "Id Pregunta: 2551. ";


//  Id pregunta: 2570 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  El despliegue detallado de recursos para alcanzar los objetivos fijados en los planes estrat&eacute;gicos es funci&oacute;n de ";
 choices[20]= new Array();
 choices[20][0] = "la planificaci&oacute;n operativa";
 choices[20][1] = "el control anal&iacute;tico del gasto";
 choices[20][2] = "la planificaci&oacute;n estrat&eacute;gica";
 choices[20][3] = "la planificaci&oacute;n t&aacute;ctica";
 answers[20] = choices[20][0];
 units[20] = "77";
 comments[20] = "Id Pregunta: 2570. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2574 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Calidad/Coste dice:";
 choices[21]= new Array();
 choices[21][0] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[21][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[21][2] = "El coste es constante e independiente de la calidad del producto";
 choices[21][3] = "Ninguna de ellas";
 answers[21] = choices[21][0];
 units[21] = "87,88,92";
 comments[21] = "Id Pregunta: 2574. ";


//  Id pregunta: 2596 Año de creación de pregunta: 2003-01-01
 questions[22]= "23)  La tecnolog&iacute;a denominada OCR (Optical Character Recognizer), se emplea para:";
 choices[22]= new Array();
 choices[22][0] = "Extraer de un documento electr&oacute;nico un conjunto de palabras o caracteres (descriptores) que sirvan para la representaci&oacute;n del mismo en bases de datos documentales.";
 choices[22][1] = "Analizar tramas de bit, en transmisiones a trav&eacute;s de dispositivos f&iacute;sicos de fibra &oacute;ptica (10/100/1000baseFX).";
 choices[22][2] = "Analizar la autenticidad e integridad de documentos firmados electr&oacute;nicamente.";
 choices[22][3] = " Interpretar digitalmente un documento en papel y generar un archivo electr&oacute;nico de texto con las palabras reconocidas.";
 answers[22] = choices[22][3];
 units[22] = "94";
 comments[22] = "Id Pregunta: 2596. Junta Andaluc&iacute;a";


//  Id pregunta: 2736 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[23]= new Array();
 choices[23][0] = "Pueden  ser permanentes o temporales";
 choices[23][1] = "No crean informaci&oacute;n";
 choices[23][2] = "Son  accesibles desde entidades externas.";
 choices[23][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[23] = choices[23][2];
 units[23] = "79,81";
 comments[23] = "Id Pregunta: 2736. ";


//  Id pregunta: 2871 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes apartados no forma parte del &quot;Sistema de Gesti&oacute;n de la Calidad&quot; de la norma ISO 9004: 2000?";
 choices[24]= new Array();
 choices[24][0] = "Gesti&oacute;n de sistemas y procesos";
 choices[24][1] = "Documentaci&oacute;n";
 choices[24][2] = "Planificaci&oacute;n";
 choices[24][3] = "Uso de los principios de gesti&oacute;n de la calidad";
 answers[24] = choices[24][2];
 units[24] = "92";
 comments[24] = "Id Pregunta: 2871. ";


//  Id pregunta: 2882 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  Indique cu&aacute;l de las siguientes reglas es cierta  con respecto al Flujo de Datos, como elemento de un DFD:";
 choices[25]= new Array();
 choices[25][0] = "No puede crear ni destruir los datos";
 choices[25][1] = "Puede transformar un dato en varios";
 choices[25][2] = "Activa Procesos";
 choices[25][3] = "Transforma los flujos de datos de entrada en flujos de salida de datos";
 answers[25] = choices[25][0];
 units[25] = "81";
 comments[25] = "Id Pregunta: 2882. ";


//  Id pregunta: 2926 Año de creación de pregunta: 2009-01-01
 questions[26]= "27)  En GPRS la velocidad m&aacute;xima te&oacute;rica de conexi&oacute;n es:";
 choices[26]= new Array();
 choices[26][0] = "128 kbps";
 choices[26][1] = "171.2 kbps";
 choices[26][2] = "64.1 kbps";
 choices[26][3] = "56.6 kbps";
 answers[26] = choices[26][1];
 units[26] = "108";
 comments[26] = "Id Pregunta: 2926. Similar a examen TIC SS A 2003";


//  Id pregunta: 2927 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[27]= new Array();
 choices[27][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[27][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[27][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[27][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[27] = choices[27][2];
 units[27] = "113";
 comments[27] = "Id Pregunta: 2927. ";


//  Id pregunta: 3073 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  La arquitectura Internet en tres capas diferencia:";
 choices[28]= new Array();
 choices[28][0] = "Nivel de presentaci&oacute;n, de aplicaci&oacute;n y de datos";
 choices[28][1] = "Nivel de navegador, de aplicaci&oacute;n y de datos";
 choices[28][2] = "Nivel de cliente, de servidor  y de navegador";
 choices[28][3] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;c&rsquo; son falsas";
 answers[28] = choices[28][0];
 units[28] = "113";
 comments[28] = "Id Pregunta: 3073. ";


//  Id pregunta: 3227 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de encaminamiento o enrutamiento?:";
 choices[29]= new Array();
 choices[29][0] = "OSPF";
 choices[29][1] = "RIP";
 choices[29][2] = "ORP";
 choices[29][3] = "IS-IS";
 answers[29] = choices[29][2];
 units[29] = "102";
 comments[29] = "Id Pregunta: 3227. ";


//  Id pregunta: 3529 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  En la Red Digital de Servicios Integrados (RDSI), un acceso b&aacute;sico permite:    ";
 choices[30]= new Array();
 choices[30][0] = "Obligatoriamente un canal de voz, otro de datos y un tercero de se&ntilde;alizaci&oacute;n";
 choices[30][1] = "Tres conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[30][2] = "Dos conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[30][3] = "Un canal de datos y dos canales de v&iacute;deo";
 answers[30] = choices[30][2];
 units[30] = "103";
 comments[30] = "Id Pregunta: 3529. ";


//  Id pregunta: 3557 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  En telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l de los siguientes sistemas permite mayor densidad de tr&aacute;fico?:";
 choices[31]= new Array();
 choices[31][0] = "DECT";
 choices[31][1] = "DCS 1800";
 choices[31][2] = "GSM ";
 choices[31][3] = "NMT";
 answers[31] = choices[31][0];
 units[31] = "108";
 comments[31] = "Id Pregunta: 3557. ";


//  Id pregunta: 3575 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  En una red de &aacute;rea local que utiliza la t&eacute;cnica de acceso al medio conocida como contienda, una de las siguientes afirmaciones es falsa. Se&ntilde;&aacute;lela:";
 choices[32]= new Array();
 choices[32][0] = "Se pueden producir colisiones";
 choices[32][1] = "Cualquier estaci&oacute;n de la Red de &Aacute;rea Local puede transmitir en cualquier momento";
 choices[32][2] = "Se pueden establecer prioridades";
 choices[32][3] = "Ofrece buen rendimiento a baja carga";
 answers[32] = choices[32][2];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3575. ";


//  Id pregunta: 3604 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  La f&oacute;rmula de Little es:";
 choices[33]= new Array();
 choices[33][0] = "El producto del n&uacute;mero de usuarios por su tiempo en el sistema";
 choices[33][1] = "El producto de tiempo medio de servicio y n&uacute;mero de usuarios que llegan al sistema";
 choices[33][2] = "El producto de tiempo medio de espera y n&uacute;mero de usuarios que llegan al sistema por unidad de tiempo";
 choices[33][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[33] = choices[33][2];
 units[33] = "26";
 comments[33] = "Id Pregunta: 3604. *: Formula de LITTLE";


//  Id pregunta: 3719 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Los conectores que se insertan en los hubs 10 base T son del tipo:";
 choices[34]= new Array();
 choices[34][0] = "RJ11";
 choices[34][1] = "RJ45";
 choices[34][2] = "RJ37";
 choices[34][3] = "V.24";
 answers[34] = choices[34][1];
 units[34] = "99";
 comments[34] = "Id Pregunta: 3719. ";


//  Id pregunta: 3908 Año de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Qu&eacute; es el realce geometrico en tratamiento de im&aacute;genes?";
 choices[35]= new Array();
 choices[35][0] = "Modificaci&oacute;n del tono de un pixel en funci&oacute;n de los de alrededor";
 choices[35][1] = "Un ajuste utilizando el m&eacute;todo polinomial";
 choices[35][2] = "La modificaci&oacute;n y ecualizaci&oacute;n del contraste de una imagen";
 choices[35][3] = "Modificaci&oacute;n del tono de gris de una imagen";
 answers[35] = choices[35][0];
 units[35] = "93";
 comments[35] = "Id Pregunta: 3908. ";


//  Id pregunta: 3973 Año de creación de pregunta: 2003-01-01
 questions[36]= "37)  Velocidades de RDSI de banda ancha en Europa";
 choices[36]= new Array();
 choices[36][0] = "1,5  2,6  155  622 Mbps";
 choices[36][1] = "2    51 155  722 Mbps";
 choices[36][2] = "2    34 155  622 Mbps";
 choices[36][3] = "2   34   155  722 Mbps";
 answers[36] = choices[36][2];
 units[36] = "103";
 comments[36] = "Id Pregunta: 3973. ";


//  Id pregunta: 4049 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Qu&eacute; se suele encontrar en una DMZ?";
 choices[37]= new Array();
 choices[37][0] = "un proxy de  correo";
 choices[37][1] = "un cache web";
 choices[37][2] = "un server web";
 choices[37][3] = "todas las anteriores";
 answers[37] = choices[37][3];
 units[37] = "111";
 comments[37] = "Id Pregunta: 4049. ";


//  Id pregunta: 4065 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  Que tendencias se observan en los servicios de telecomunicaciones";
 choices[38]= new Array();
 choices[38][0] = "La convergencia de las redes de voz y datos";
 choices[38][1] = "La convergencia de las tecnolog&iacute;as de telefonia movil y las tecnolog&iacute;as wireless como wi-fi";
 choices[38][2] = "Ninguna de las anteriores";
 choices[38][3] = "tanto la opci&oacute;n a como la b";
 answers[38] = choices[38][3];
 units[38] = "102,107,108";
 comments[38] = "Id Pregunta: 4065. ";


//  Id pregunta: 4128 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[39]= new Array();
 choices[39][0] = "XML";
 choices[39][1] = "Xerces";
 choices[39][2] = "UDDI";
 choices[39][3] = "WSDL";
 answers[39] = choices[39][3];
 units[39] = "112,51";
 comments[39] = "Id Pregunta: 4128. ";


//  Id pregunta: 4229 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes organismos de normalizaci&oacute;n ha promovido el est&aacute;ndar GSM?";
 choices[40]= new Array();
 choices[40][0] = "ISO (International Standards Organization)";
 choices[40][1] = "IEEE (Institute of Electrical Engineers)";
 choices[40][2] = "ETSI (European Telecommunications Standards Institute)";
 choices[40][3] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n)";
 answers[40] = choices[40][2];
 units[40] = "108";
 comments[40] = "Id Pregunta: 4229. ";


//  Id pregunta: 4264 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Respecto del Marco Europeo de Interoperabilidad (MEI), es falsa la afirmacion:";
 choices[41]= new Array();
 choices[41][0] = "Las dimensiones de interoperabilidad son tres: t&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[41][1] = "Define como principios  entre otros la subsidiariedad, uso de soluciones multilaterales y uso de est&aacute;ndares abiertos";
 choices[41][2] = "Se elabora dentro del programa IDABC";
 choices[41][3] = "Define un total de diez principios";
 answers[41] = choices[41][3];
 units[41] = "30";
 comments[41] = "Id Pregunta: 4264. ";


//  Id pregunta: 4371 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  El Ciclo de Vida del software es:";
 choices[42]= new Array();
 choices[42][0] = "Un patr&oacute;n del comportamiento de los dise&ntilde;adores.";
 choices[42][1] = "Un modelo del proceso de construcci&oacute;n del Software";
 choices[42][2] = "Un modelo de especificaciones establecido por el analista.";
 choices[42][3] = "Un esquema para integrar el sistema completo.";
 answers[42] = choices[42][1];
 units[42] = "76";
 comments[42] = "Id Pregunta: 4371. ";


//  Id pregunta: 4387 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad, seg&uacute;n el modelo de McCall?";
 choices[43]= new Array();
 choices[43][0] = "Integridad.";
 choices[43][1] = "Completitud.";
 choices[43][2] = "Fiabilidad.";
 choices[43][3] = "Facilidad de mantenimiento.";
 answers[43] = choices[43][2];
 units[43] = "88";
 comments[43] = "Id Pregunta: 4387. ";


//  Id pregunta: 4392 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Las pruebas alfa:";
 choices[44]= new Array();
 choices[44][0] = "Son pruebas de integraci&oacute;n.";
 choices[44][1] = "Son pruebas de caja transparente";
 choices[44][2] = "Comprueban todo el espacio de ejecuci&oacute;n de un programa.";
 choices[44][3] = "Estiman el porcentaje de errores no detectados.";
 answers[44] = choices[44][2];
 units[44] = "87";
 comments[44] = "Id Pregunta: 4392. ";


//  Id pregunta: 4398 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[45]= new Array();
 choices[45][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica.";
 choices[45][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[45][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[45][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[45] = choices[45][1];
 units[45] = "58";
 comments[45] = "Id Pregunta: 4398. ";


//  Id pregunta: 4403 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes es una de las cinco categor&iacute;as identificadas como recursos TIC por COBIT?";
 choices[46]= new Array();
 choices[46][0] = "La calidad.";
 choices[46][1] = "La planificaci&oacute;n.";
 choices[46][2] = "La tecnolog&iacute;a.";
 choices[46][3] = "Los est&aacute;ndares.";
 answers[46] = choices[46][2];
 units[46] = "98";
 comments[46] = "Id Pregunta: 4403. ";


//  Id pregunta: 4459 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  El uso de mecanismos como JDBC u ODBC:";
 choices[47]= new Array();
 choices[47][0] = "Proporciona independencia respecto al SGBD utilizado.";
 choices[47][1] = "Proporcionan generalmente un mayor rendimiento y funcionalidad que las APIs nativas de los SGBD.";
 choices[47][2] = "Tienen poca importancia en sistemas donde se acceden a SGBD heterog&eacute;neos.";
 choices[47][3] = "Se utilizan &uacute;nicamente en arquitecturas cliente-servidor, no en entornos de aplicaciones WEB.";
 answers[47] = choices[47][0];
 units[47] = "58";
 comments[47] = "Id Pregunta: 4459. ";


//  Id pregunta: 4473 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Que se entiende por el conjunto de t&eacute;cnicas para iniciar, evaluar e implementar cambios en un producto software manteniendo su integridad?";
 choices[48]= new Array();
 choices[48][0] = "Metodolog&iacute;a.";
 choices[48][1] = "Gesti&oacute;n de Configuraci&oacute;n Software.";
 choices[48][2] = "Ingenier&iacute;a Inversa.";
 choices[48][3] = "An&aacute;lisis y Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[48] = choices[48][1];
 units[48] = "76";
 comments[48] = "Id Pregunta: 4473. ";


//  Id pregunta: 4482 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Si consideramos el framework de Net &iquest;Que entender&iacute;amos por CTS( Common Type System, o Sistema de Tipos Com&uacute;n)?";
 choices[49]= new Array();
 choices[49][0] = "Es un est&aacute;ndar que establece como se representan los tipos de datos en memoria, independientemente del lenguaje que los defina.";
 choices[49][1] = "Es un sistema tipificado de Software";
 choices[49][2] = "Es un sistema com&uacute;n de tipos que permite interoperar entre distintas plataformas.";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = choices[49][0];
 units[49] = "59";
 comments[49] = "Id Pregunta: 4482. ";


//  Id pregunta: 4529 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cual de los siguientes no es un perfil contemplado en Ia metodolog&iacute;a M&eacute;trica 3?";
 choices[50]= new Array();
 choices[50][0] = "Perfil Directivo.";
 choices[50][1] = "Perfil Jefe de Proyecto.";
 choices[50][2] = "Perfil Consultor.";
 choices[50][3] = "Perfil Usuario.";
 answers[50] = choices[50][3];
 units[50] = "86";
 comments[50] = "Id Pregunta: 4529. ";


//  Id pregunta: 4535 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  El protocolo UDP (User Datagram Protocol):";
 choices[51]= new Array();
 choices[51][0] = "Es un protocolo de transporte perteneciente a Ia familia de protocolos TCP/IP no orientado a conexi&oacute;n.";
 choices[51][1] = "Es un protocolo de nivel de red perteneciente a Ia familia de protocolos TCP/IP.";
 choices[51][2] = "Es un protocolo de transporte perteneciente a la familia de protocolos TCP/IP orientado a conexi&oacute;n.";
 choices[51][3] = "Es el protocolo de transporte utilizado por el protocolo de aplicaci&oacute;n FTP.";
 answers[51] = choices[51][0];
 units[51] = "100";
 comments[51] = "Id Pregunta: 4535. ";


//  Id pregunta: 4602 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  Dentro de la ingenier&iacute;a del software orientada a objetos, &iquest;Como se denomina la relaci&oacute;n entre un componente y su interfaz?";
 choices[52]= new Array();
 choices[52][0] = "agregaci&oacute;n";
 choices[52][1] = "realizaci&oacute;n";
 choices[52][2] = "polimorfismo";
 choices[52][3] = "presentaci&oacute;n";
 answers[52] = choices[52][1];
 units[52] = "82";
 comments[52] = "Id Pregunta: 4602. ";


//  Id pregunta: 4621 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;Como se denomina la licencia bajo la que se distribuye la mayor&iacute;a de los programas del proyecto GNU?:";
 choices[53]= new Array();
 choices[53][0] = "FDL";
 choices[53][1] = "GSL";
 choices[53][2] = "GPL";
 choices[53][3] = "GLL";
 answers[53] = choices[53][2];
 units[53] = "36";
 comments[53] = "Id Pregunta: 4621. ";


//  Id pregunta: 4634 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  En M&eacute;trica V3 NO es un tipo de las denominadas Pruebas del Sistema las:";
 choices[54]= new Array();
 choices[54][0] = "pruebas funcionales";
 choices[54][1] = "pruebas de facilidad de uso";
 choices[54][2] = "pruebas de verificaci&oacute;n";
 choices[54][3] = "pruebas de volumen";
 answers[54] = choices[54][2];
 units[54] = "86";
 comments[54] = "Id Pregunta: 4634. ";


//  Id pregunta: 4771 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  El IETF (Internet Engineering Task Force) es uno de los organismos estandarizadores m&aacute;s destacados de Internet. Sus documentos oficiales son conocidos como";
 choices[55]= new Array();
 choices[55][0] = "Las series X y V (ejemplo la recomendaci&oacute;n X.25 o V.21bis)";
 choices[55][1] = "ISO (ejemplo ISO-9000)";
 choices[55][2] = "RFC (Request for Comments)";
 choices[55][3] = "Las respuestas A y C son verdaderas";
 answers[55] = choices[55][2];
 units[55] = "42";
 comments[55] = "Id Pregunta: 4771. ";


//  Id pregunta: 4825 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  Una red ATM (Asynchronous Transfer Mode):";
 choices[56]= new Array();
 choices[56][0] = "Tiene c&eacute;lulas cuyo tama&ntilde;o es de 48 bytes";
 choices[56][1] = "No es apropiada para tr&aacute;fico con requisitos de tiempo real";
 choices[56][2] = "Tiene los campos VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier), utilizados para efectuarfunciones de encaminamiento de las c&eacute;lulas";
 choices[56][3] = "No tiene ning&uacute;n mecanismo para detectar la ocurrencia de errores de transmisi&oacute;n en las c&eacute;lulas";
 answers[56] = choices[56][2];
 units[56] = "109";
 comments[56] = "Id Pregunta: 4825. ";


//  Id pregunta: 4875 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  La metodolog&iacute;a MAGERIT versi&oacute;n 2 estructura el conjunto de activos en capas. &iquest;En cu&aacute;l de las siguientes se situar&iacute;an los &quot;bienes y servicios producidos&quot;?";
 choices[57]= new Array();
 choices[57][0] = "El entorno";
 choices[57][1] = "El sistema de informaci&oacute;n";
 choices[57][2] = "La Informaci&oacute;n";
 choices[57][3] = "Las funciones de la organizaci&oacute;n";
 answers[57] = choices[57][3];
 units[57] = "33";
 comments[57] = "Id Pregunta: 4875. ";


//  Id pregunta: 4877 Año de creación de pregunta: 2007-01-01
 questions[58]= "59)  Una Directiva comunitaria que, en materia de salud en el trabajo, es aplicable directamente a los productosinform&aacute;ticos y establece disposiciones m&iacute;nimas de seguridad y salud relativas al trabajo con equipos que incluyenpantallas de visualizaci&oacute;n, es la:";
 choices[58]= new Array();
 choices[58][0] = "Directiva 90/270/CEE, de 29 de mayo";
 choices[58][1] = "Directiva 95/220/CEE, de 14 de abril";
 choices[58][2] = "Directiva 198/130/CEE, de 30 de octubre";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][0];
 units[58] = "39";
 comments[58] = "Id Pregunta: 4877. ";


//  Id pregunta: 4965 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  El &ldquo;throughput&rdquo;, como medida de rendimiento de un sistema inform&aacute;tico, se define mejor como:";
 choices[59]= new Array();
 choices[59][0] = "Tiempo transcurrido entre la realizaci&oacute;n de una petici&oacute;n al sistema y la recepci&oacute;n de la respuesta.";
 choices[59][1] = "El n&uacute;mero de usuarios simult&aacute;neos trabajando en el sistema.";
 choices[59][2] = "El porcentaje de tiempo de los dispositivos est&aacute;n trabajando en tareas del sistema, no imputables a ning&uacute;n trabajo de usuario.";
 choices[59][3] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado. Por ejemplo, transacciones por segundo.";
 answers[59] = choices[59][3];
 units[59] = "52";
 comments[59] = "Id Pregunta: 4965. Examen TIC B 2007";


//  Id pregunta: 4993 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[60]= new Array();
 choices[60][0] = "Polimorfismo";
 choices[60][1] = "Herencia";
 choices[60][2] = "Reusabilidad";
 choices[60][3] = "Encapsulaci&oacute;n";
 answers[60] = choices[60][3];
 units[60] = "82";
 comments[60] = "Id Pregunta: 4993. Examen TIC A 2007";


//  Id pregunta: 5001 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?:";
 choices[61]= new Array();
 choices[61][0] = "Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;arcampa&ntilde;as de marketing directo on-line";
 choices[61][1] = "Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas";
 choices[61][2] = "Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica";
 choices[61][3] = "Es el Catalog Resource Management, o aplicaci&oacute;n que genera un catalogo on-line de los productosdisponibles para la venta";
 answers[61] = choices[61][0];
 units[61] = "70";
 comments[61] = "Id Pregunta: 5001. Examen TIC A 2007";


//  Id pregunta: 5091 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  La informaci&oacute;n en el chip del DNI est&aacute; distribuida en tres zonas, con diferentes niveles y condiciones de acceso. &iquest;Cu&aacute;l no es una de ellas?";
 choices[62]= new Array();
 choices[62][0] = "Zona privada";
 choices[62][1] = "Zona de control";
 choices[62][2] = "Zona de seguridad";
 choices[62][3] = "Zona p&uacute;blica";
 answers[62] = choices[62][1];
 units[62] = "74";
 comments[62] = "Id Pregunta: 5091. ";


//  Id pregunta: 5102 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  Seg&uacute;n la ley 34/2002, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n grave?";
 choices[63]= new Array();
 choices[63][0] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene";
 choices[63][1] = "No facilitar la informaci&oacute;n a que se refiere el art&iacute;culo 27.1 (Obligaciones previas al inicio del procedimiento de contrataci&oacute;n), cuando las partes no hayan pactado su exclusi&oacute;n o el destinatario sea un consumidor";
 choices[63][2] = "El incumplimiento de lo previsto en el art. 12 bis.";
 choices[63][3] = "El incumplimiento habitual de la obligaci&oacute;n de confirmar la recepci&oacute;n de una aceptaci&oacute;n, cuando no se haya pactado su exclusi&oacute;n o el contrato se haya celebrado con un consumidor";
 answers[63] = choices[63][3];
 units[63] = "30";
 comments[63] = "Id Pregunta: 5102. ";


//  Id pregunta: 5154 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  &iquest;Cu&aacute;les son los componentes primordiales de .NET Framework?";
 choices[64]= new Array();
 choices[64][0] = "ASP.net y ADO.net";
 choices[64][1] = "Common Language Runtime (CLR) y Clases Framework";
 choices[64][2] = "Common Language Specification (CLS) y Polimorfismo.";
 choices[64][3] = "Hypertext Markup Language (HTML) y Unified Modeling Language (UML)";
 answers[64] = choices[64][1];
 units[64] = "115";
 comments[64] = "Id Pregunta: 5154. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5167 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  Seg&uacute;n la legislaci&oacute;n aplicable, forma parte del servicio universal:";
 choices[65]= new Array();
 choices[65][0] = "Una conexi&oacute;n que deber&aacute; permitir comunicaciones en banda ancha, en los t&eacute;rminos que se definan por la normativa vigente";
 choices[65][1] = "Una conexi&oacute;n con acceso a servicios de televisi&oacute;n sobre IP";
 choices[65][2] = "Una conexi&oacute;n a telefon&iacute;a m&oacute;vil GSM";
 choices[65][3] = "Una conexi&oacute;n que permita comunicaciones de datos a velocidad suficiente para acceder de forma fucional a Internet y a otras redes de &aacute;mbito privado";
 answers[65] = choices[65][0];
 units[65] = "110";
 comments[65] = "Id Pregunta: 5167. ";


//  Id pregunta: 5444 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque ";
 choices[66]= new Array();
 choices[66][0] = "el lenguaje Java se deriva de C++.";
 choices[66][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[66][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[66][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin";
 answers[66] = choices[66][1];
 units[66] = "60";
 comments[66] = "Id Pregunta: 5444. Castilla y Le&oacute;n";


//  Id pregunta: 5446 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes cuestiones de dise&ntilde;o es m&aacute;s importante en el rendimiento de SQL?";
 choices[67]= new Array();
 choices[67][0] = "La eliminaci&oacute;n de redundancia en los datos";
 choices[67][1] = "La introducci&oacute;n de redundancia en los datos";
 choices[67][2] = "La introducci&oacute;n de relaciones que no cumplan la 1&ordf; forma normal";
 choices[67][3] = "La introducci&oacute;n de optimizaciones tipo SQL*Plus";
 answers[67] = choices[67][1];
 units[67] = "58";
 comments[67] = "Id Pregunta: 5446. Castilla y Le&oacute;n";


//  Id pregunta: 5561 Año de creación de pregunta: 2003-01-01
 questions[68]= "69)  De las siguientes afirmaciones se&ntilde;ale aquella que supone un inconveniente para la protecci&oacute;n de derechos de autor comparado con la protecci&oacute;n por patentes:";
 choices[68]= new Array();
 choices[68][0] = "Los derechos de autor nacen en el mismo momento de la creaci&oacute;n de la obra.";
 choices[68][1] = "S&oacute;lo se exige que la obra sea de creaci&oacute;n original.";
 choices[68][2] = "Se protege la forma de expresi&oacute;n de las ideas.";
 choices[68][3] = "Todas las anteriores son ventajas.";
 answers[68] = choices[68][2];
 units[68] = "37";
 comments[68] = "Id Pregunta: 5561. ";


//  Id pregunta: 5607 Año de creación de pregunta: 2003-01-01
 questions[69]= "70)  Las areas funcionales definidas por ISO que todo sistema de gesti&oacute;n de red debe cubrir son:";
 choices[69]= new Array();
 choices[69][0] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Contabilidad, Gesti&oacute;n de Seguridad";
 choices[69][1] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[69][2] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Mantenimiento, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][0];
 units[69] = "104";
 comments[69] = "Id Pregunta: 5607. ";


//  Id pregunta: 5649 Año de creación de pregunta: 2003-01-01
 questions[70]= "71)  El RD 1720/2007 trata sobre:";
 choices[70]= new Array();
 choices[70][0] = "Reglamento de desarrollo de la Ley del Estatuto B&aacute;sico del Empleado P&uacute;blico";
 choices[70][1] = "Reglamento sobre medidas de protecci&oacute;n contra radiaciones electromagn&eacute;ticas";
 choices[70][2] = "Reglamento sobre medidas que favorezcan la ergonom&iacute;a y ecolog&iacute;a en los puestos de trabajo";
 choices[70][3] = "Reglamento de desarrollo de la Ley Org&aacute;nica de protecci&oacute;n de datos de carater personal";
 answers[70] = choices[70][3];
 units[70] = "29";
 comments[70] = "Id Pregunta: 5649. ";


//  Id pregunta: 5700 Año de creación de pregunta: 2003-01-01
 questions[71]= "72)  Las siglas UDDI corresponden a:";
 choices[71]= new Array();
 choices[71][0] = "Universal Description and Discovery Interface";
 choices[71][1] = " Universal Description, Discovery and Integration";
 choices[71][2] = "Universal Definition, Discovery and Integration";
 choices[71][3] = "Universal Definition and Discovery Interface";
 answers[71] = choices[71][1];
 units[71] = "51";
 comments[71] = "Id Pregunta: 5700. ";


//  Id pregunta: 5773 Año de creación de pregunta: 2009-01-01
 questions[72]= "73)  De acuerdo con la LOPD, se&ntilde;ale el tipo de fichero que se incluye en el alcance de la Ley";
 choices[72]= new Array();
 choices[72][0] = "Ficheros realizados o mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 choices[72][1] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[72][2] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada. No obstante el responsable del fichero comunicar&aacute; previamente la existencia del mismo, sus caracter&iacute;sticas generales y su finalidad a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[72][3] = "Ficheros de titularidad p&uacute;blica, con la publicaci&oacute;n de la disposici&oacute;n de regulaci&oacute;n correspondiente";
 answers[72] = choices[72][3];
 units[72] = "29";
 comments[72] = "Id Pregunta: 5773. MAP 2008 A2";


//  Id pregunta: 5817 Año de creación de pregunta: 2009-01-01
 questions[73]= "74)  &iquest;Qu&eacute; NO es cierto de la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico (art&iacute;culo 334 RD Legislativo 3/2011)?";
 choices[73]= new Array();
 choices[73][0] = "El acceso de los interesados se efectuar&aacute; a trav&eacute;s de un portal &uacute;nico";
 choices[73][1] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n dar publicidad a sus procedimientos de contrataci&oacute;n a trav&eacute;s de la Plataforma de Contrataci&oacute;n del Estado";
 choices[73][2] = "Es una plataforma electr&oacute;nica que permite dar publicidad a trav&eacute;s de Internet de los contratos del sector p&uacute;blico";
 choices[73][3] = "La publicaci&oacute;n de anuncios y otra informaci&oacute;n relativa a los contratos en la plataforma surtir&aacute; los efectos previstos en la ley";
 answers[73] = choices[73][1];
 units[73] = "41";
 comments[73] = "Id Pregunta: 5817. ";


//  Id pregunta: 5876 Año de creación de pregunta: 2009-01-01
 questions[74]= "75)  &iquest;Qu&eacute; es Atom?";
 choices[74]= new Array();
 choices[74][0] = "Sistema de an&aacute;lisis XML";
 choices[74][1] = "Tecnolog&iacute;a de sindicaci&oacute;n de contenidos";
 choices[74][2] = "Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[74][3] = "Sintaxis de una DTD";
 answers[74] = choices[74][1];
 units[74] = "69";
 comments[74] = "Id Pregunta: 5876. MAP 2008 A1";


//  Id pregunta: 5900 Año de creación de pregunta: 2009-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre JPA?";
 choices[75]= new Array();
 choices[75][0] = "El mapeo de los objetos al modelo relacional se puede definir mediante anotaciones en las entidades (clases)";
 choices[75][1] = "El mapeo de los objetos al modelo relacional se puede definir mediante ficheros XML";
 choices[75][2] = "Una misma unidad de persistencia permite acceder a diferentes fuentes de datos";
 choices[75][3] = "Una entidad puede estar mapeada a m&aacute;s de una tabla relacional";
 answers[75] = choices[75][2];
 units[75] = "60";
 comments[75] = "Id Pregunta: 5900. ";


//  Id pregunta: 5917 Año de creación de pregunta: 2009-01-01
 questions[76]= "77)  La Ley 9/2014, General de Telecomunicaciones, establece los derechos de los consumidores y usuarios finales. &iquest;Cu&aacute;l de entre los siguientes apartados NO es contemplado por dicha ley como un derecho del usuario individual?";
 choices[76]= new Array();
 choices[76][0] = "Introducir cl&aacute;usulas de modificaci&oacute;n de los contratos con los operadores, para evitar un trato abusivo";
 choices[76][1] = "A recibir facturas no desglosadas cuando as&iacute; lo solicitasen";
 choices[76][2] = "A detener el desv&iacute;o autom&aacute;tico de llamadas efectuado a su terminal por parte de un tercero";
 choices[76][3] = "A impedir, mediante un procedimiento sencillo y gratuito, la prestaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen en la llamadas entrantes y a rechazar las llamadas en que dicha l&iacute;nea no aparezca identificada";
 answers[76] = choices[76][0];
 units[76] = "110";
 comments[76] = "Id Pregunta: 5917. MAP 2008 A1";


//  Id pregunta: 6095 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes corresponde a una de las categor&iacute;as de ordenadores contempladas en la taxonom&iacute;a de Flynn?";
 choices[77]= new Array();
 choices[77][0] = "SIDI.";
 choices[77][1] = "SDSP.";
 choices[77][2] = "SIMD.";
 choices[77][3] = "MIMP.";
 answers[77] = choices[77][2];
 units[77] = "45";
 comments[77] = "Id Pregunta: 6095. TIC A 2009";


//  Id pregunta: 6142 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  En relaci&oacute;n con los c&oacute;decs que se utilizan para comprimir la voz en sistemas de VoIP:";
 choices[78]= new Array();
 choices[78][0] = "G.711 proporciona mejor calidad de sonido que G.729";
 choices[78][1] = "G.711 genera una tasa de transferencia menor que G.729";
 choices[78][2] = "Las dos respuestas anteriores son correctas";
 choices[78][3] = "Todas las respuestas anteriores son falsas";
 answers[78] = choices[78][0];
 units[78] = "100, 109";
 comments[78] = "Id Pregunta: 6142. ";


//  Id pregunta: 6351 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  La ley sobre reutilizaci&oacute;n de la informaci&oacute;n  del sector p&uacute;blico es la ley";
 choices[79]= new Array();
 choices[79][0] = "37/2007";
 choices[79][1] = "32/2005";
 choices[79][2] = "25/2007";
 choices[79][3] = "Ninguna de las anteriores";
 answers[79] = choices[79][0];
 units[79] = "30";
 comments[79] = "Id Pregunta: 6351. ";


//  Id pregunta: 6497 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  El kernel de Linux fue desarrollado por:";
 choices[80]= new Array();
 choices[80][0] = "Linus Torvalds";
 choices[80][1] = "Benjamin Linus";
 choices[80][2] = "Richard Stallman";
 choices[80][3] = "Steve Jobs";
 answers[80] = choices[80][0];
 units[80] = "53";
 comments[80] = "Id Pregunta: 6497. ";


//  Id pregunta: 6614 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  De las siguientes actividades, &iquest;cu&aacute;l forma parte del proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (ASI) de M&eacute;trica?";
 choices[81]= new Array();
 choices[81][0] = "Establecimiento de Requisitos";
 choices[81][1] = "Identificaci&oacute;n de Requisitos";
 choices[81][2] = "Establecimiento de Requisitos de Implantaci&oacute;n";
 choices[81][3] = "Definici&oacute;n de Requisitos del Sistema";
 answers[81] = choices[81][0];
 units[81] = "86";
 comments[81] = "Id Pregunta: 6614. ";


//  Id pregunta: 7157 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes funciones no las realiza el Sistema Operativo?";
 choices[82]= new Array();
 choices[82][0] = "Gesti&oacute;n de memoria";
 choices[82][1] = "Administraci&oacute;n de procesos";
 choices[82][2] = "Arranque de la m&aacute;quina";
 choices[82][3] = "Administraci&oacute;n del sistema de E/S";
 answers[82] = choices[82][2];
 units[82] = "52";
 comments[82] = "Id Pregunta: 7157. Examen TIC B 2009";


//  Id pregunta: 7333 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  La International Telecommunication Union (ITU)  es el organismo especializado de la Organizaci&oacute;n de las Naciones Unidas encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras. Se divide en varios sectores, el correspondiente a Telecomunicaciones se denomina:";
 choices[83]= new Array();
 choices[83][0] = "ITU-T";
 choices[83][1] = "ITU-R";
 choices[83][2] = "ITU-D";
 choices[83][3] = "ITU-C";
 answers[83] = choices[83][0];
 units[83] = "42";
 comments[83] = "Id Pregunta: 7333. ";


//  Id pregunta: 7837 Año de creación de pregunta: 2010-01-01
 questions[84]= "85)   En el entrono de desarrollo .NET, el t&eacute;rmino CLR se refiere a:";
 choices[84]= new Array();
 choices[84][0] = " El n&uacute;cleo que proporciona la base de datos del entorno .NET Framework.";
 choices[84][1] = " La biblioteca de clases del entorno .NET Framework.";
 choices[84][2] = " Un modelo de programaci&oacute;n para la creaci&oacute;n de aplicaciones Web.";
 choices[84][3] = " Un controlador para eventos de nivel de aplicaci&oacute;n.";
 answers[84] = choices[84][0];
 units[84] = "NULL";
 comments[84] = "Id Pregunta: 7837. Map 2005";


//  Id pregunta: 7883 Año de creación de pregunta: 2010-01-01
 questions[85]= "86)   &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a ADSL (Asymmetrical Digital Subscriber Line) NO es cierta?";
 choices[85]= new Array();
 choices[85][0] = " Una caracter&iacute;stica importante de ADSL, definido en la recomendaci&oacute;n G.992.1 de ITU-T (International Telecommunications Union-Telecommunications), es la compartici&oacute;n del espectro disponible en el par telef&oacute;nico con el servicio telef&oacute;nico, permitiendo el acceso simult&aacute;neo a ambos servicios. Esto se logra mediante el empleo de unos filtros denominados &laquo;splitters&raquo;.";
 choices[85][1] = " En un primer momento, las principales t&eacute;cnicas de modulaci&oacute;n utilizadas en ADSL eran CAP (Carrierless Amplitude and Phase Modulation) y DMT (Discrete Multi-Tone), aunque finalmente los organismos de estandarizaci&oacute;n se decantaron por esta &uacute;ltima.";
 choices[85][2] = " ADSL2+ es una evoluci&oacute;n del sistema ADSL y ADSL2 basado en la recomendaci&oacute;n de la ITU-T G.992.5, que posibilita adem&aacute;s el uso de modulaci&oacute;n WCDMA (Wide Code Division Multiple Access).";
 choices[85][3] = " El est&aacute;ndar ITU-T G.992.2, tambi&eacute;n denominado &laquo;G.Lite&raquo; o &laquo;ADSL Lite&raquo; es una variante de ADSL que proporciona menor caudal, pero tiene la ventaja de no requerir splitters.";
 answers[85] = choices[85][2];
 units[85] = "NULL";
 comments[85] = "Id Pregunta: 7883. Map 2006";


//  Id pregunta: 8191 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Indique cu&aacute;l de los siguientes sistemas NO permite direccionar ficheros de un Terabyte:";
 choices[86]= new Array();
 choices[86][0] = "AdvFS";
 choices[86][1] = "MFS";
 choices[86][2] = "JFS2 ";
 choices[86][3] = "XFS";
 answers[86] = choices[86][1];
 units[86] = "48, 52";
 comments[86] = "Id Pregunta: 8191. Examen TIC A1 2010";


//  Id pregunta: 8219 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  En relaci&oacute;n a la seguridad en redes inal&aacute;mbricas, cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[87]= new Array();
 choices[87][0] = "Entre los mecanismos b&aacute;sicos de seguridad aplicables en redes inal&aacute;mbricas, se encuentran: 1. Ocultaci&oacute;n del SSID (identificador de red). 2. Filtrado MAC. 3. Ajuste de potencia. 4. Uso de mecanismos de autenticaci&oacute;n y cifrado.";
 choices[87][1] = "El ataque DoS, &quot;Clear Channel Assesments&quot;, basado en falsear el mecanismo CCA, afecta a dispositivos 802.11a, 802.11b y 802.11g.";
 choices[87][2] = "Una RSN &quot;Robust Security Network&quot; es una red de seguridad en la que todas las asociaciones entre sus miembros se basan en fuertes mecanismos criptogr&aacute;ficos y de autenticaci&oacute;n.";
 choices[87][3] = "AirMagnet, Airodump, Aireplay, Kismet y Netstumbler, son herramientas inform&aacute;ticas que permiten estudiar redes inal&aacute;mbricas.";
 answers[87] = choices[87][1];
 units[87] = "107";
 comments[87] = "Id Pregunta: 8219. Examen TIC A1 2010";


//  Id pregunta: 8317 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como generaci&oacute;n 3.75 (3.75 G) es: ";
 choices[88]= new Array();
 choices[88][0] = "GPRS. ";
 choices[88][1] = "HSDPA. ";
 choices[88][2] = "HSUPA. ";
 choices[88][3] = "UMTS. ";
 answers[88] = choices[88][2];
 units[88] = "108";
 comments[88] = "Id Pregunta: 8317. Examen TIC A2 2010";


//  Id pregunta: 8390 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  Cuando un sistema se debe modificar para que contemple un cambio en las necesidades de los usuarios, se hace referencia al:";
 choices[89]= new Array();
 choices[89][0] = "Mantenimiento Correctivo.";
 choices[89][1] = "Mantenimiento Evolutivo.";
 choices[89][2] = "Mantenimiento Adaptativo.";
 choices[89][3] = "Mantenimiento Perfectivo.";
 answers[89] = choices[89][1];
 units[89] = "86";
 comments[89] = "Id Pregunta: 8390. Examen TIC A2 2010";


//  Id pregunta: 8462 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Entre los tipos de componentes que incluye la especificaci&oacute;n de aplicaciones basadas en J2EE 1.4 se encuentran:";
 choices[90]= new Array();
 choices[90][0] = "P&aacute;ginas Asp y VBScript";
 choices[90][1] = "Applet, Servlets, EJBs";
 choices[90][2] = "Javascript y p&aacute;ginas JSP";
 choices[90][3] = "Ninguna de las anteriores";
 answers[90] = choices[90][1];
 units[90] = "116";
 comments[90] = "Id Pregunta: 8462. Analista Ayto. Madrid 2010";


//  Id pregunta: 8511 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  De las siguientes normas, &iquest;cu&aacute;l est&aacute; referida al c&oacute;digo de buenas pr&aacute;cticas en gesti&oacute;n de la seguridad de la Informaci&oacute;n? ";
 choices[91]= new Array();
 choices[91][0] = "ISO/lEC 13335-2. ";
 choices[91][1] = "ISO/lEC 17799:2005. ";
 choices[91][2] = "UNE 71502:2004. ";
 choices[91][3] = "ISO 10646. ";
 answers[91] = choices[91][1];
 units[91] = "111";
 comments[91] = "Id Pregunta: 8511. Examen TIC A2 2010";


//  Id pregunta: 8655 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  &iquest;En qu&eacute; recomendaci&oacute;n del ITU-T se especifican las caracter&iacute;sticas de las fibras &oacute;pticas monomodo &quot;non-zero dispersion-shifted&quot; (NZDSF) habitualmente utilizadas en DWDM?:";
 choices[92]= new Array();
 choices[92][0] = "G.653";
 choices[92][1] = "G.654";
 choices[92][2] = "G.655";
 choices[92][3] = "G.656";
 answers[92] = choices[92][2];
 units[92] = "99";
 comments[92] = "Id Pregunta: 8655. Examen UPM A2 2011";


//  Id pregunta: 8770 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es la versi&oacute;n extendida del protocolo BOOTP?";
 choices[93]= new Array();
 choices[93][0] = "DHCP";
 choices[93][1] = "RARP";
 choices[93][2] = "RTSP";
 choices[93][3] = "DNS";
 answers[93] = choices[93][0];
 units[93] = "100";
 comments[93] = "Id Pregunta: 8770. Examen TIC A2 2010 interna";


//  Id pregunta: 8852 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Entre los tipos de componentes que pueden desarrollarse en aplicaciones basadas en J2EE 1.4 tenemos:";
 choices[94]= new Array();
 choices[94][0] = "P&aacute;ginas Asp y DLL";
 choices[94][1] = "Applet, Servlets, EJBs";
 choices[94][2] = "Javascript y p&aacute;ginas JSP";
 choices[94][3] = "Componentes COM";
 answers[94] = choices[94][1];
 units[94] = "116";
 comments[94] = "Id Pregunta: 8852. Analista Ayto. Madrid 2010";


//  Id pregunta: 8854 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  La vulneraci&oacute;n de una restricci&oacute;n de integridad referencial es detectada por el servidor de base de datos de acuerdo a la declaraci&oacute;n de la:";
 choices[95]= new Array();
 choices[95][0] = "PRIMARY KEY";
 choices[95][1] = "FOREIGN KEY";
 choices[95][2] = "CANDIDATE KEY";
 choices[95][3] = "SUPERKEY";
 answers[95] = choices[95][1];
 units[95] = "58";
 comments[95] = "Id Pregunta: 8854. Analista Ayto. Madrid 2010";


//  Id pregunta: 8897 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es la directiva europea vigente relativa al tratamiento de los datos personales?";
 choices[96]= new Array();
 choices[96][0] = "Directiva 95/46/CE";
 choices[96][1] = "Directiva 2006/24/CE";
 choices[96][2] = "Directiva 2002/58/CE";
 choices[96][3] = "Directiva 97/66/CE";
 answers[96] = choices[96][0];
 units[96] = "29";
 comments[96] = "Id Pregunta: 8897. ";


//  Id pregunta: 8996 Año de creación de pregunta: 2011-01-01
 questions[97]= "98)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet";
 choices[97]= new Array();
 choices[97][0] = "Acceden al medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[97][1] = "Acceden al medio de transmisi&oacute;n en per&iacute;odos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[97][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por lo que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones.";
 choices[97][3] = "Nunca acceden si tras un primer intento se detect&oacute; una colisi&oacute;n.";
 answers[97] = choices[97][0];
 units[97] = "101";
 comments[97] = "Id Pregunta: 8996. Examen UPM A2 2011";


//  Id pregunta: 9976 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En un sistema de gesti&oacute;n de contenidos, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA? ";
 choices[98]= new Array();
 choices[98][0] = "La arquitectura de estos sistemas es monol&iacute;tica, proporcionando un marco de desarrollo que facilita la implementaci&oacute;n de nuevas funcionalidades ";
 choices[98][1] = "Una de sus principales caracter&iacute;sticas es que permiten separar el contenido de la presentaci&oacute;n ";
 choices[98][2] = "Un aspecto clave en la gesti&oacute;n de contenidos es la categorizaci&oacute;n de la informaci&oacute;n ";
 choices[98][3] = "La capacidad de establecer mecanismos que permitan localizar la informaci&oacute;n &uacute;til, se basa en el uso de metadatos que sirven para proporcionar informaci&oacute;n a&ntilde;adida a los contenidos publicados";
 answers[98] = choices[98][0];
 units[98] = "95";
 comments[98] = "Id Pregunta: 9976. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10483 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  La ecuaci&oacute;n del software establece principalmente que&hellip;";
 choices[99]= new Array();
 choices[99][0] = "El esfuerzo necesario para realizar un proyecto es una ecuaci&oacute;n logar&iacute;tmica ";
 choices[99][1] = "El esfuerzo se mide en horas/hombre y hay 100 horas hombre por mes";
 choices[99][2] = "El tiempo para realizar un proyecto se puede medir en base a los puntos de funci&oacute;n ajustados";
 choices[99][3] = "El esfuerzo y el tiempo requerido para realizar un proyecto son inversamente proporcionales";
 answers[99] = choices[99][3];
 units[99] = "89";
 comments[99] = "Id Pregunta: 10483. ";


