/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 128 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  El benchmark es adecuado cuando:";
 choices[0]= new Array();
 choices[0][0] = "Vamos a adquirir aplicaciones a medida";
 choices[0][1] = "Los entornos de las diversas opciones difieren";
 choices[0][2] = "Queremos desarrollar un proyecto innovador";
 choices[0][3] = "Queremos comparar el rendimiento de un sistema respecto al de otros";
 answers[0] = choices[0][3];
 units[0] = "35";
 comments[0] = "Id Pregunta: 128. ";


//  Id pregunta: 168 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El valor econ&oacute;mico del producto software en sistemas complejos es:";
 choices[1]= new Array();
 choices[1][0] = "Despreciable, ya que el proveedor suele regalarlo con el hardware";
 choices[1][1] = "Independiente del n&uacute;mero de usuarios";
 choices[1][2] = "Generalmente mayor que el del producto hardware";
 choices[1][3] = "Menor que su coste de mantenimiento anual";
 answers[1] = choices[1][2];
 units[1] = "35";
 comments[1] = "Id Pregunta: 168. ";


//  Id pregunta: 538 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  La propiedad de un proyecto y de los aplicativos resultantes del ciclo de vida del software corresponde a:";
 choices[2]= new Array();
 choices[2][0] = "Departamento de Inform&aacute;tica";
 choices[2][1] = "Direcci&oacute;n del Departamento usuario";
 choices[2][2] = "Comit&eacute; de Direcci&oacute;n del Proyecto";
 choices[2][3] = "Compartido por todos";
 answers[2] = choices[2][1];
 units[2] = "26";
 comments[2] = "Id Pregunta: 538. ";


//  Id pregunta: 702 Año de creación de pregunta: 2004-01-01
 questions[3]= "4)  Cu&aacute;l de las siguientes l&iacute;neas ser&iacute;a v&aacute;lida en XHTML:";
 choices[3]= new Array();
 choices[3][0] = "&lt;br/&gt;&lt;hr&gt;&lt;/hr&gt;";
 choices[3][1] = "&lt;br/&gt;&lt;hr/&gt;";
 choices[3][2] = "&lt;hr&gt;&lt;/hr&gt;";
 choices[3][3] = "Todas son v&aacute;lidas";
 answers[3] = choices[3][3];
 units[3] = "69";
 comments[3] = "Id Pregunta: 702. Similar a examen TIC MAP A 2004";


//  Id pregunta: 729 Año de creación de pregunta: 2004-01-01
 questions[4]= "5)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[4]= new Array();
 choices[4][0] = "DXL (Document eXtended Language)";
 choices[4][1] = "DTD (Document Type Definition)";
 choices[4][2] = "DOM (Document Object Model)";
 choices[4][3] = "DML (Document Markup Language)";
 answers[4] = choices[4][1];
 units[4] = "69";
 comments[4] = "Id Pregunta: 729. Examen TIC MAP B 2004";


//  Id pregunta: 822 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Un programa shareware:";
 choices[5]= new Array();
 choices[5][0] = "Es software que podemos utilizar libremente";
 choices[5][1] = "Es software que podemos vender libremente";
 choices[5][2] = "Es software que podemos probar libremente";
 choices[5][3] = "No existe este concepto";
 answers[5] = choices[5][2];
 units[5] = "61";
 comments[5] = "Id Pregunta: 822. ";


//  Id pregunta: 1476 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  SCSI responde a las siglas de:";
 choices[6]= new Array();
 choices[6][0] = "Smart Computer System Interface, Interfaz elegante para sistemas de computadora";
 choices[6][1] = "Small Computer System Interface, Interfaz para peque&ntilde;os sistemas de computadora";
 choices[6][2] = "Synchonized Computer Serial Interface, Interfaz serie para ordenadores sincronizados";
 choices[6][3] = "Superb Computation Scale- Integration, escala de integraci&oacute;n para computaci&oacute;n s&uacute;per";
 answers[6] = choices[6][1];
 units[6] = "48";
 comments[6] = "Id Pregunta: 1476. ";


//  Id pregunta: 1835 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  &iquest;Qu&eacute; es un DTD?";
 choices[7]= new Array();
 choices[7][0] = "Define la forma en que los documentos XML deben conectarse entre s&iacute;";
 choices[7][1] = "Descripci&oacute;n del formato en el que se desea que aparezcan las entidades definidas en un documento";
 choices[7][2] = "Definici&oacute;n de la gram&aacute;tica de un documento";
 choices[7][3] = "Permite controlar el formato de los documentos HTML con descripciones particulares";
 answers[7] = choices[7][2];
 units[7] = "69";
 comments[7] = "Id Pregunta: 1835. ";


//  Id pregunta: 1944 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  Cuando se habla de SAX en el &aacute;mbito del lenguaje XML, se hace referencia a:";
 choices[8]= new Array();
 choices[8][0] = "Una API que define un modelo basado en eventos, y que trabaja invocando las respuestas de las interfaces a medida que van apareciendo estos eventos durante el proceso de an&aacute;lisis del documento";
 choices[8][1] = "Una API que proporciona una representaci&oacute;n de los documentos XML en forma de &aacute;rbol, permitiendo el recorrido y manipulaci&oacute;n de los datos";
 choices[8][2] = "Un lenguaje para establecer restricciones en los documentos XML";
 choices[8][3] = "Un mecanismo para invocaci&oacute;n remota de procedimientos (m&eacute;todos) utilizando XML como forma de comunicaci&oacute;n";
 answers[8] = choices[8][0];
 units[8] = "69";
 comments[8] = "Id Pregunta: 1944. ";


//  Id pregunta: 2105 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  En el caso de un mantenimiento que implique un error cr&iacute;tico, siguiendo METRICA V3:";
 choices[9]= new Array();
 choices[9][0] = "Debe abordarse el cambio de forma inmediata sin profundizar en el origen del mismo";
 choices[9][1] = "Debe abordarse el cambio tras analizar el problema y determinar la soluci&oacute;n definitiva";
 choices[9][2] = "Se analizar&aacute; el alcance de los cambios valorando hasta que punto deben ser abordados en funci&oacute;n del ciclo de vida estimado para los sistemas de informaci&oacute;n afectados.";
 choices[9][3] = "Se llevar&aacute; a cabo el diagnostico y an&aacute;lisis de los cambios para determinar si es necesario derivar la petici&oacute;n hacia el proceso de Estudio de Viabilidad del Sistema o hacia el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 answers[9] = choices[9][0];
 units[9] = "86";
 comments[9] = "Id Pregunta: 2105. Pregunta Junta Andalucia - A";


//  Id pregunta: 2242 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Cuando en la etapa de mantenimiento de un sistema se realizan modificaciones para mejorar las funcionalidades del sistema o ampliar las mismas, se trata de un mantenimiento:";
 choices[10]= new Array();
 choices[10][0] = "Correctivo";
 choices[10][1] = "Perfectivo";
 choices[10][2] = "Evolutivo";
 choices[10][3] = "Adaptativo";
 answers[10] = choices[10][2];
 units[10] = "86";
 comments[10] = "Id Pregunta: 2242. ";


//  Id pregunta: 2404 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es EMACS?:";
 choices[11]= new Array();
 choices[11][0] = "Una plataforma de intercambio de ideas sobre mejoras futuras de ordenadores Apple";
 choices[11][1] = "Un editor ASCII con indentaciones autom&aacute;ticas y coloreado sint&aacute;ctico seg&uacute;n lenguaje";
 choices[11][2] = "Un est&aacute;ndar de facto de plataformas de comercio electr&oacute;nico";
 choices[11][3] = "Nada de lo anterior es correcto";
 answers[11] = choices[11][1];
 units[11] = "62";
 comments[11] = "Id Pregunta: 2404. ";


//  Id pregunta: 2620 Año de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l no es un factor de calidad seg&uacute;n Mc Call?";
 choices[12]= new Array();
 choices[12][0] = "Fiabilidad";
 choices[12][1] = "Coste ";
 choices[12][2] = "Facilidad de mantenimiento";
 choices[12][3] = "Seguridad";
 answers[12] = choices[12][1];
 units[12] = "87,88,92";
 comments[12] = "Id Pregunta: 2620. ";


//  Id pregunta: 2652 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  La actividad DSI-CAL2 se denomina";
 choices[13]= new Array();
 choices[13][0] = "Revisi&oacute;n de la especificaci&oacute;n t&eacute;cnica del plan de prueba";
 choices[13][1] = "Revisi&oacute;n de la verificaci&oacute;n de la arquitectura del sistema";
 choices[13][2] = "Revisi&oacute;n de los requisitos de implantaci&oacute;n";
 choices[13][3] = "ninguna es cirrecta";
 answers[13] = choices[13][0];
 units[13] = "87,88,92";
 comments[13] = "Id Pregunta: 2652. ";


//  Id pregunta: 2657 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  Un diagrama de contexto, utilizado como mecanismo de an&aacute;lisis estructurado, debe contener s&oacute;lo dos tipos de componentes siguientes";
 choices[14]= new Array();
 choices[14][0] = "Entidad externa y almacenes de datos";
 choices[14][1] = "Almac&eacute;n de datos y burbujas de proceso";
 choices[14][2] = "Burbujas de proceso y entidades externas";
 choices[14][3] = "Burbuja de proceso y almacenes de datos";
 answers[14] = choices[14][2];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2657. ";


//  Id pregunta: 2938 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  En telefon&iacute;a m&oacute;vil GSM, &iquest;qu&eacute; bases de datos se utilizan para almacenar datos de cliente?";
 choices[15]= new Array();
 choices[15][0] = "VLR y HLR";
 choices[15][1] = "EIR y HLR";
 choices[15][2] = "MSC y VLR";
 choices[15][3] = "EIR y MSC";
 answers[15] = choices[15][0];
 units[15] = "108";
 comments[15] = "Id Pregunta: 2938. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3007 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguiente definiciones se corresponde con la vulnerabilidad DDoS que puede producirse sobre nuestros sistemas?";
 choices[16]= new Array();
 choices[16][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[16][1] = "Escuchas en red";
 choices[16][2] = "Denegaci&oacute;n de servicio Distribuido";
 choices[16][3] = "Ataques de desbordamiento de buffer";
 answers[16] = choices[16][2];
 units[16] = "111";
 comments[16] = "Id Pregunta: 3007. ";


//  Id pregunta: 3028 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Qu&eacute; son dentro del entorno de aplicaciones basadas en arquitectura Internet los plug-ins?:";
 choices[17]= new Array();
 choices[17][0] = "Programas que desarrolla el usuario para personalizar el acceso a la informaci&oacute;n del servidor";
 choices[17][1] = "Programas que se agregan al navegador e interact&uacute;an con &eacute;l, con las p&aacute;ginas web y con los recursos locales";
 choices[17][2] = "Posibilidad de a&ntilde;adir nuevo hardware a trav&eacute;s del navegador de manera autom&aacute;tica";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][1];
 units[17] = "114";
 comments[17] = "Id Pregunta: 3028. ";


//  Id pregunta: 3054 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  De las vulnerabilidades del software respecto a la seguridad inform&aacute;tica es falso que:";
 choices[18]= new Array();
 choices[18][0] = "el ataque de buffer overflow se basa en desbordar un buffer de memoria a la pila del sistema y forzar un retorno de una funci&oacute;n al sitio deseado";
 choices[18][1] = "el ataque m&aacute;s famoso en internet (gusano de internet) se basaba en fallo del software de los servidores HTTP en la entrega de p&aacute;ginas";
 choices[18][2] = "el ataque de IP spoofing consiste en falsificar la direcci&oacute;n IP para suplantar la identidad";
 choices[18][3] = "DDOS es un m&eacute;todo de ataque de denegaci&oacute;n del servicio de forma distribuida";
 answers[18] = choices[18][1];
 units[18] = "111";
 comments[18] = "Id Pregunta: 3054. ";


//  Id pregunta: 3101 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Los sistemas de recuperaci&oacute;n de fallos hardware se basan siempre en:";
 choices[19]= new Array();
 choices[19][0] = "La redundancia del equipo o empleo de equipos fault-tolerant";
 choices[19][1] = "El establecimiento de una pol&iacute;tica de respaldo rigurosa";
 choices[19][2] = "Una pol&iacute;tica de mantenimiento de equipos adecuada";
 choices[19][3] = "Evitar manipulaciones indebidas en la instalaci&oacute;n inform&aacute;tica";
 answers[19] = choices[19][0];
 units[19] = "111";
 comments[19] = "Id Pregunta: 3101. ";


//  Id pregunta: 3139 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de IPv6 es correcta?:";
 choices[20]= new Array();
 choices[20][0] = "Existe una cabecera principal y cabeceras de extensi&oacute;n";
 choices[20][1] = "La cabecera se ha complicado y ha crecido bastante, al tener que incorporar algunos elementos como la seguridad y el esquema de direccionamiento extendido. El tama&ntilde;o ahora es de 64 bytes frente a los 20 bytes de IPv4";
 choices[20][2] = "Las nuevas direcciones tienen 20 bytes";
 choices[20][3] = "Todas son incorrectas";
 answers[20] = choices[20][0];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3139. ";


//  Id pregunta: 3199 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  EDGE responde por:";
 choices[21]= new Array();
 choices[21][0] = "Enhanced Data for GPRS Evolution";
 choices[21][1] = "Extended Data for GSM Enhancement";
 choices[21][2] = "Enhanced Data for GSM Evolution";
 choices[21][3] = "Extended Data for GPRS Enhancement";
 answers[21] = choices[21][2];
 units[21] = "108";
 comments[21] = "Id Pregunta: 3199. ";


//  Id pregunta: 3207 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  El c&oacute;digo de los mensajes HTTP de respuesta que indican &eacute;xito en la petici&oacute;n comienzan por:";
 choices[22]= new Array();
 choices[22][0] = "1";
 choices[22][1] = "2";
 choices[22][2] = "3";
 choices[22][3] = "5";
 answers[22] = choices[22][1];
 units[22] = "112";
 comments[22] = "Id Pregunta: 3207. ";


//  Id pregunta: 3332 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Al servicio que permite a un usuario transmitir una imagen est&aacute;tica de una c&aacute;mara, a trav&eacute;s de la l&iacute;nea telef&oacute;nica, a un usuario remotamente situado, se denomina:";
 choices[23]= new Array();
 choices[23][0] = "Videoconferencia";
 choices[23][1] = "Video de baja velocidad";
 choices[23][2] = "Bases de datos de im&aacute;genes";
 choices[23][3] = "No existe este servicio";
 answers[23] = choices[23][1];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3332. ";


//  Id pregunta: 3450 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  El protocolo FTP (File Transfer Protocol) utiliza canales diferentes para comandos y para datos:";
 choices[24]= new Array();
 choices[24][0] = "Un servidor FTP en modo activo emplea el puerto 21 para enviar datos al cliente";
 choices[24][1] = "Un servidor FTP emplea el puerto 21 para comandos, ya sea en modo activo o pasivo";
 choices[24][2] = "Un servidor FTP en modo pasivo emplea el puerto 21 para enviar datos al cliente";
 choices[24][3] = "Un servidor FTP emplea el puerto 20 para comandos, ya sea en modo activo o pasivo";
 answers[24] = choices[24][1];
 units[24] = "112";
 comments[24] = "Id Pregunta: 3450. ";


//  Id pregunta: 3510 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  En el protocolo HTTP, el m&eacute;todo de cliente TRACE:";
 choices[25]= new Array();
 choices[25][0] = "Pide al servidor que se declare a s&iacute; mismo dentro de la cabecera";
 choices[25][1] = "Pide a los proxies que se declaren a s&iacute; mismo dentro de la cabecera";
 choices[25][2] = "No existe";
 choices[25][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[25] = choices[25][1];
 units[25] = "112";
 comments[25] = "Id Pregunta: 3510. ";


//  Id pregunta: 3518 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  En Espa&ntilde;a la portabilidad del n&uacute;mero de abonado:";
 choices[26]= new Array();
 choices[26][0] = "Es obligatoria desde la Orden Ministerial de 4 de agosto de 1997";
 choices[26][1] = "Se basa en diferentes tecnolog&iacute;as: redirecci&oacute;n de llamada y red inteligente";
 choices[26][2] = "Permite a un abonado de un operador de telefon&iacute;a cambiar de operador conservando el n&uacute;mero";
 choices[26][3] = "Todas las respuestas anteriores son correctas";
 answers[26] = choices[26][3];
 units[26] = "110";
 comments[26] = "Id Pregunta: 3518. ";


//  Id pregunta: 3524 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  En Internet se encuentran a menudo las siglas FAQ. &iquest;Qu&eacute; significan?:";
 choices[27]= new Array();
 choices[27][0] = "Un curso sobre el tema";
 choices[27][1] = "Las direcciones m&aacute;s relevantes respecto al tema";
 choices[27][2] = "Las preguntas m&aacute;s frecuentes que se hacen";
 choices[27][3] = "Un descripci&oacute;n del contenido del nodo en cuesi&oacute;n";
 answers[27] = choices[27][2];
 units[27] = "112";
 comments[27] = "Id Pregunta: 3524. ";


//  Id pregunta: 3525 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  En Internet, los distintos tipos de servicios utilizan protocolos espec&iacute;ficos. De las siguientes parejas servicios-protocolos, una es incorrecta. Se&ntilde;&aacute;lela:";
 choices[28]= new Array();
 choices[28][0] = "P&aacute;ginas Web-HTTP";
 choices[28][1] = "Correo electr&oacute;nico-SNMP";
 choices[28][2] = "Grupos de noticias-NNTP";
 choices[28][3] = "Transferencia de ficheros-FTP";
 answers[28] = choices[28][1];
 units[28] = "112";
 comments[28] = "Id Pregunta: 3525. ";


//  Id pregunta: 3557 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  En telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l de los siguientes sistemas permite mayor densidad de tr&aacute;fico?:";
 choices[29]= new Array();
 choices[29][0] = "DECT";
 choices[29][1] = "DCS 1800";
 choices[29][2] = "GSM ";
 choices[29][3] = "NMT";
 answers[29] = choices[29][0];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3557. ";


//  Id pregunta: 3672 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Una de las siguientes caracter&iacute;sticas es falsa para la tecnolog&iacute;a GPS. Indicar cu&aacute;l:";
 choices[30]= new Array();
 choices[30][0] = "El sistema lo forma una constelaci&oacute;n de 32 sat&eacute;lites, que orbitan alrededor de la Tierra a 12600 millas, con 5 estaciones fijas de monitorizaci&oacute;n y seguimiento";
 choices[30][1] = "La posici&oacute;n se expresa en latitud y longitud gracias a la triangulaci&oacute;n producida por al menos 4 sat&eacute;lites trabajando simult&aacute;neamente";
 choices[30][2] = "Entre sus aplicaciones principales est&aacute; la gesti&oacute;n de flotas, la provisi&oacute;n de servicios de telefon&iacute;a m&oacute;vil basados en localizaci&oacute;n o las radios privadas y p&uacute;blicas de tipo trunking";
 choices[30][3] = "Es un sistema de origen estadounidense proveniente del campo militar, y la versi&oacute;n de la que puede disponer el gran p&uacute;blico no es tan precisa como la del campo militar";
 answers[30] = choices[30][0];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3672. ";


//  Id pregunta: 3724 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los est&aacute;ndares publicados por la IAB (Internet Activities Board) se denominan RFCs que son las siglas de:";
 choices[31]= new Array();
 choices[31][0] = "Recommendation File Contents";
 choices[31][1] = "Requisite File Coordination";
 choices[31][2] = "Request For Comments";
 choices[31][3] = "Register Full Condition";
 answers[31] = choices[31][2];
 units[31] = "112";
 comments[31] = "Id Pregunta: 3724. ";


//  Id pregunta: 3742 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Los sistemas celulares se sustentan en dos conceptos principales que son:";
 choices[32]= new Array();
 choices[32][0] = "La reutilizaci&oacute;n de frecuencias y el dimensionamiento celular";
 choices[32][1] = "La difracci&oacute;n y la propagaci&oacute;n multitrayecto";
 choices[32][2] = "La modulaci&oacute;n y la separaci&oacute;n entre canales";
 choices[32][3] = "La distribuci&oacute;n de usuarios y la localizaci&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "108";
 comments[32] = "Id Pregunta: 3742. ";


//  Id pregunta: 3790 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Respecto a los cortafuegos de filtrado de paquetes:";
 choices[33]= new Array();
 choices[33][0] = "act&uacute;an como routers inteligentes o screening routers";
 choices[33][1] = "se componen de un conjunto de aplicaciones intermedias, una por servicio";
 choices[33][2] = "desempe&ntilde;an funciones de proxy";
 choices[33][3] = "ninguna de las anteriores respuestas es correcta";
 answers[33] = choices[33][0];
 units[33] = "111";
 comments[33] = "Id Pregunta: 3790. ";


//  Id pregunta: 3802 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  SAP es:";
 choices[34]= new Array();
 choices[34][0] = "Service Access Protocol, Protocolo de Acceso al Servicio";
 choices[34][1] = "System Analysis Program, Programa de An&aacute;lisis de Sistema";
 choices[34][2] = "Service Access Point, Punto de Acceso al Servicio";
 choices[34][3] = "Sistema de Administraci&oacute;n P&uacute;blica";
 answers[34] = choices[34][2];
 units[34] = "112";
 comments[34] = "Id Pregunta: 3802. ";


//  Id pregunta: 3836 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  SOAP es:";
 choices[35]= new Array();
 choices[35][0] = "Synchronized Objects Application Protocol, protocolo de aplicaci&oacute;n sincronizada para objetos";
 choices[35][1] = "System Open Access Protocol, protocolo de acceso abierto a sistemas";
 choices[35][2] = "Simple Object Access Protocol, protocolo de acceso simple a objetos";
 choices[35][3] = "SOAP no se corresponde con ningun acr&oacute;nimo aplicable en tecnolog&iacute;a";
 answers[35] = choices[35][2];
 units[35] = "113";
 comments[35] = "Id Pregunta: 3836. ";


//  Id pregunta: 3842 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  SSL utiliza, entre otros, el siguiente algoritmo de cifrado sim&eacute;trico:";
 choices[36]= new Array();
 choices[36][0] = "RC4";
 choices[36][1] = "LUCIFER";
 choices[36][2] = "2DES";
 choices[36][3] = "Ninguno de las anteriores";
 answers[36] = choices[36][0];
 units[36] = "111";
 comments[36] = "Id Pregunta: 3842. ";


//  Id pregunta: 3914 Año de creación de pregunta: 2004-01-01
 questions[37]= "38)  En un entorno de red, un pinchado de l&iacute;nea puede causar:";
 choices[37]= new Array();
 choices[37][0] = "Uso excesivo de CPU";
 choices[37][1] = "Acceso no autorizado a datos";
 choices[37][2] = "a) y b)";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][1];
 units[37] = "111";
 comments[37] = "Id Pregunta: 3914. ";


//  Id pregunta: 3953 Año de creación de pregunta: 2003-01-01
 questions[38]= "39)  Indicar cual no es una directriz de la Ley General de Telecomunicaciones";
 choices[38]= new Array();
 choices[38][0] = "Simplificaci&oacute;n de tr&aacute;mites administrativos";
 choices[38][1] = "Menor vigilancia de la libre competencia";
 choices[38][2] = "Clarificaci&oacute;n en el reparto de competencias";
 choices[38][3] = "Creaci&oacute;n de garant&iacute;as para los operadores";
 answers[38] = choices[38][1];
 units[38] = "110";
 comments[38] = "Id Pregunta: 3953. ";


//  Id pregunta: 3977 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  En relaci&oacute;n a los cables de par trenzado UTP y STP, indique cu&aacute;l de las siguientes afirmaciones es cierta.";
 choices[39]= new Array();
 choices[39][0] = "Las categor&iacute;as 1 y 2 de UTP se emplean para transmisi&oacute;n de datos X.25";
 choices[39][1] = "La categor&iacute;a 4 de UTP especifica cables hasta 20 MHz, se utilizan para voz y datos hasta 16 Mbps";
 choices[39][2] = "El tipo 6 de cable STP emplea 4 pares trenzados de mayor calibre que los de tipo 1";
 choices[39][3] = "Los cables STP, a pesar de su menor inmunidad a las interferencias, son los de mayor implantaci&oacute;n en los cableados estructurados.";
 answers[39] = choices[39][1];
 units[39] = "99";
 comments[39] = "Id Pregunta: 3977. ";


//  Id pregunta: 3996 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  En las redes HFC (Hybrid Fiber Coaxial), la transmisi&oacute;n  de informaci&oacute;n desde el usuario hacia la cabecera se realiza dedicando una parte del espectro, en concreto utilizando el rango de frecuencias comprendido entre:";
 choices[40]= new Array();
 choices[40][0] = "50-100 Mhz (aproximadamente)";
 choices[40][1] = "200-300 Mhz (aproximadamente)";
 choices[40][2] = "5-50 Mhz (aproximadamente)";
 choices[40][3] = "100-200 Mhz (aproximadamente)";
 answers[40] = choices[40][2];
 units[40] = "105";
 comments[40] = "Id Pregunta: 3996. ";


//  Id pregunta: 4054 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  Un buen sistema de gesti&oacute;n de contrase&ntilde;as se caracteriza por";
 choices[41]= new Array();
 choices[41][0] = "El sistema, si procede, permitir&aacute; a los usuarios que seleccionen sus contrase&ntilde;as";
 choices[41][1] = "Las contrase&ntilde;as de los usuarios con m&aacute;s privilegios se cambiar&aacute;n con mayor frecuencia";
 choices[41][2] = "El sistema no mantendr&aacute; un registro de las &uacute;ltimas contrase&ntilde;as usadas, manteniendo s&oacute;lo la actual";
 choices[41][3] = "A y B son correctas";
 answers[41] = choices[41][3];
 units[41] = "111";
 comments[41] = "Id Pregunta: 4054. ";


//  Id pregunta: 4062 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  El protocolo de transporte TCP, est&aacute;ndar de internet, NO tiene entre sus caracter&iacute;sticas";
 choices[42]= new Array();
 choices[42][0] = "la entrega fiable de paquetes";
 choices[42][1] = "la detecci&oacute;n y el control de la congesti&oacute;n";
 choices[42][2] = "es orientado a conexi&oacute;n";
 choices[42][3] = "su RFC es 793";
 answers[42] = choices[42][1];
 units[42] = "112,100";
 comments[42] = "Id Pregunta: 4062. ";


//  Id pregunta: 4066 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Que elemento de los siguientes no son propios de instalaciones de VoIP";
 choices[43]= new Array();
 choices[43][0] = "gatekeeper";
 choices[43][1] = "SIP";
 choices[43][2] = "router";
 choices[43][3] = "todos los anteriores";
 answers[43] = choices[43][3];
 units[43] = "117";
 comments[43] = "Id Pregunta: 4066. ";


//  Id pregunta: 4074 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;Qu&eacute; tipo de software es m&aacute;s costoso cuando lo compramos?";
 choices[44]= new Array();
 choices[44][0] = "El libre";
 choices[44][1] = "El comercial";
 choices[44][2] = "Los dos anteriores son igual de  costosos";
 choices[44][3] = "No hay una respuesta en terminos generales y depende casi siempre del software concreto del que hablemos";
 answers[44] = choices[44][1];
 units[44] = "61";
 comments[44] = "Id Pregunta: 4074. ";


//  Id pregunta: 4078 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;Es posible distribuir en una granja de servidores la l&oacute;gica de negocio de una empresa?";
 choices[45]= new Array();
 choices[45][0] = "Si utilizando .Net";
 choices[45][1] = "Si utilizando J2EE";
 choices[45][2] = "Si usando software libre";
 choices[45][3] = "todas las anteriores son ciertas";
 answers[45] = choices[45][3];
 units[45] = "113";
 comments[45] = "Id Pregunta: 4078. ";


//  Id pregunta: 4103 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  Los no dos de interconexi&oacute;n que forman el backbone de Iternet en la actualidad, reciben el nombre de:";
 choices[46]= new Array();
 choices[46][0] = "NBA";
 choices[46][1] = "NAT";
 choices[46][2] = "NSFNet";
 choices[46][3] = "NAP";
 answers[46] = choices[46][3];
 units[46] = "112";
 comments[46] = "Id Pregunta: 4103. ";


//  Id pregunta: 4110 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  IRC es:";
 choices[47]= new Array();
 choices[47][0] = "Internet Random Card, un protocolo para acceder al servicio de videoconferencia a trav&eacute;s de Internet.";
 choices[47][1] = "Internet Requery Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como XChat.";
 choices[47][2] = "Internet Relay Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como mIRC.";
 choices[47][3] = "b) y c) son correctas.";
 answers[47] = choices[47][2];
 units[47] = "112";
 comments[47] = "Id Pregunta: 4110. ";


//  Id pregunta: 4154 Año de creación de pregunta: 2006-01-01
 questions[48]= "49)  Capacidad que permite la descarga de actualizaciones software o bien la reconfiguraci&oacute;n de ordenadores por la noche, cuando normalmente est&aacute;n apagados";
 choices[48]= new Array();
 choices[48][0] = "firmware";
 choices[48][1] = "teclado virtual";
 choices[48][2] = "despertar remoto (remote wakeup)";
 choices[48][3] = "Autocomprobaci&oacute;n de arranque (Power-On Self-Test)";
 answers[48] = choices[48][2];
 units[48] = "113";
 comments[48] = "Id Pregunta: 4154. ";


//  Id pregunta: 4175 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  Un buen libro de claves podr&iacute;a ser";
 choices[49]= new Array();
 choices[49][0] = "Los n&uacute;meros primos de 128 cifras";
 choices[49][1] = "La gu&iacute;a de Paginas Blancas de Madrid 2005";
 choices[49][2] = "El CD &quot;Hung up&quot; de Madonna";
 choices[49][3] = "todas las anteriores";
 answers[49] = choices[49][3];
 units[49] = "111";
 comments[49] = "Id Pregunta: 4175. ";


//  Id pregunta: 4471 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Seg&uacute;n indica m&eacute;trica V3, a la hora de planificar el desarrollo de un sistema de informaci&oacute;n, &iquest;que acci&oacute;n no tendr&iacute;a sentido?";
 choices[50]= new Array();
 choices[50][0] = "Dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 choices[50][1] = "Definici&oacute;n de la arquitectura tecnol&oacute;gica.";
 choices[50][2] = "Dise&ntilde;o de los procedimientos de migraci&oacute;n.";
 choices[50][3] = "Identificaci&oacute;n de requisitos.";
 answers[50] = choices[50][2];
 units[50] = "86";
 comments[50] = "Id Pregunta: 4471. ";


//  Id pregunta: 4516 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  Respecto al software libre:";
 choices[51]= new Array();
 choices[51][0] = "Los usuarios de software libre deben tener Ia libertad de estudiar como funciona el programa y adaptarlo a sus necesidades.";
 choices[51][1] = "El &uacute;nico coste permitido por la distribuci&oacute;n de software libre es el coste de distribuci&oacute;n.";
 choices[51][2] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 choices[51][3] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "61";
 comments[51] = "Id Pregunta: 4516. ";


//  Id pregunta: 4621 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Como se denomina la licencia bajo la que se distribuye la mayor&iacute;a de los programas del proyecto GNU?:";
 choices[52]= new Array();
 choices[52][0] = "FDL";
 choices[52][1] = "GSL";
 choices[52][2] = "GPL";
 choices[52][3] = "GLL";
 answers[52] = choices[52][2];
 units[52] = "36";
 comments[52] = "Id Pregunta: 4621. ";


//  Id pregunta: 4633 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  En M&eacute;trica V3 NO participa en Ia realizaci&oacute;n de las pruebas de regresi&oacute;n";
 choices[53]= new Array();
 choices[53][0] = "el equipo de mantenimiento";
 choices[53][1] = "el responsable de mantenimiento";
 choices[53][2] = "el jefe del proyecto";
 choices[53][3] = "los usuarios expertos";
 answers[53] = choices[53][3];
 units[53] = "86";
 comments[53] = "Id Pregunta: 4633. ";


//  Id pregunta: 4687 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  La fibra &oacute;ptica, con respecto al par trenzado";
 choices[54]= new Array();
 choices[54][0] = "Tiene m&aacute;s radiaci&oacute;n electromagn&eacute;tica";
 choices[54][1] = "Tiene m&aacute;s ancho de banda";
 choices[54][2] = "Es m&aacute;s f&aacute;cil de instalar";
 choices[54][3] = "Tiene mayor atenuaci&oacute;n";
 answers[54] = choices[54][1];
 units[54] = "99";
 comments[54] = "Id Pregunta: 4687. Examen 2006 JCYL";


//  Id pregunta: 4701 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[55]= new Array();
 choices[55][0] = "Usando XSL";
 choices[55][1] = "Usando un DTD";
 choices[55][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[55][3] = "Usando XSLT";
 answers[55] = choices[55][1];
 units[55] = "69";
 comments[55] = "Id Pregunta: 4701. Examen 2006 JCYL";


//  Id pregunta: 4815 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29.Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a laconfiguraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignabledentro de dicho rango?";
 choices[56]= new Array();
 choices[56][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[56][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada:192.168.20.1";
 choices[56][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[56][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248 Puerta de enlace predeterminada:192.168.20.1";
 answers[56] = choices[56][2];
 units[56] = "100";
 comments[56] = "Id Pregunta: 4815. ";


//  Id pregunta: 4945 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  En el desarrollo de software, las pruebas &ldquo;alfa&rdquo; se pueden considerar:";
 choices[57]= new Array();
 choices[57][0] = "Pruebas de caja negra.";
 choices[57][1] = "Pruebas de caja transparente.";
 choices[57][2] = "Pruebas de recuperaci&oacute;n.";
 choices[57][3] = "Pruebas de seguridad.";
 answers[57] = choices[57][0];
 units[57] = "87";
 comments[57] = "Id Pregunta: 4945. Examen TIC B 2007";


//  Id pregunta: 5016 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  Indique cu&aacute;l es el puerto para la conexi&oacute;n de datos que abrir&aacute; el cliente en el modo PASV del Protocolo deTransferencia de Ficheros FTP (&quot;File Transfer Protocol&quot;):";
 choices[58]= new Array();
 choices[58][0] = "El puerto 20";
 choices[58][1] = "El puerto 21";
 choices[58][2] = "Un puerto por encima de 1023 elegido al azar por el cliente";
 choices[58][3] = "Un puerto por encima de 1023 elegido al azar por el servidor";
 answers[58] = choices[58][3];
 units[58] = "112";
 comments[58] = "Id Pregunta: 5016. Examen TIC A 2007- Anulada por el Tribunal";


//  Id pregunta: 5060 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;C&oacute;mo se denominan los servidores que se implementan en un formato de tarjeta/bandeja en la que se integranmemoria, procesadores y almacenamiento interno, que pueden ser insertados en chasis/bastidores especialessobre los que se comparten elementos comunes (habitualmente conexiones el&eacute;ctricas, conexiones de red de datosfuentes de alimentaci&oacute;n y ventiladores) y que normalmente comparten un sistema de gesti&oacute;n y administraci&oacute;ncom&uacute;n?:";
 choices[59]= new Array();
 choices[59][0] = "Clusters";
 choices[59][1] = "Servidores Grid";
 choices[59][2] = "Servidores Blades";
 choices[59][3] = "Ninguno de los anteriores";
 answers[59] = choices[59][2];
 units[59] = "48";
 comments[59] = "Id Pregunta: 5060. Examen TIC A 2007";


//  Id pregunta: 5138 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  Indique cu&aacute;l de las siguientes afirmaciones sobre el m&eacute;todo de planificaci&oacute;n PERT (Program Evaluation and Review Technique) es FALSA:";
 choices[60]= new Array();
 choices[60][0] = "El m&eacute;todo PERT parte de la descomposici&oacute;n del proyecto en una serie de obras parciales o actividades.";
 choices[60][1] = "Para representar las diferentes actividades en que se descompone un proyecto, as&iacute; como sus correspondientes sucesos, se utiliza una estructura de grafo. Los arcos del grafo representan las actividades y los v&eacute;rtices los sucesos.";
 choices[60][2] = "Es la forma habitual de presentar el plan de ejecuci&oacute;n de un proyecto, recogiendo en las filas la relaci&oacute;n de actividades a realizar y en las columnas la escala de tiempos que se est&aacute; manejando.";
 choices[60][3] = "Un suceso es un acontecimiento, un punto en el tiempo, una fecha en el calendario. El suceso no consume recursos, s&oacute;lo indica el principio o el fin de una actividad o de un conjunto de actividades.";
 answers[60] = choices[60][2];
 units[60] = "77";
 comments[60] = "Id Pregunta: 5138. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5146 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Seg&uacute;n M&eacute;trica V3, &iquest;Cu&aacute;l de los siguientes procesos NO est&aacute; incluido en el proceso de Desarrollo de Sistemas de Informaci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[61][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[61][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[61][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[61] = choices[61][2];
 units[61] = "86";
 comments[61] = "Id Pregunta: 5146. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5200 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  En el an&aacute;lisis DAFO, la definici&oacute;n &ldquo;Son eventos o circunstancias que se espera que ocurran o pueden inducirse a que ocurran en el mundo exterior y que podr&iacute;an tener un impacto positivo en el futuro de la Organizaci&oacute;n&rdquo; se corresponde con:";
 choices[62]= new Array();
 choices[62][0] = "Debilidades";
 choices[62][1] = "Amenazas";
 choices[62][2] = "Fortalezas";
 choices[62][3] = "Oportunidades";
 answers[62] = choices[62][3];
 units[62] = "77";
 comments[62] = "Id Pregunta: 5200. ";


//  Id pregunta: 5422 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[63]= new Array();
 choices[63][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[63][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[63][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[63][3] = "La citada ley no hace referencia a tal concepto";
 answers[63] = choices[63][2];
 units[63] = "36";
 comments[63] = "Id Pregunta: 5422. Castilla y Le&oacute;n";


//  Id pregunta: 5514 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  Indique c&oacute;mo podr&iacute;a interconectar dos ordenadores personales seg&uacute;n la tecnolog&iacute;a ethernet:";
 choices[64]= new Array();
 choices[64][0] = "Mediante un cable cruzado";
 choices[64][1] = "Mediante un cable sin cruzar o cable plano";
 choices[64][2] = "Mediante un dado de interconexi&oacute;n";
 choices[64][3] = "Mediante cualquiera de las tres opciones indicadas ";
 answers[64] = choices[64][0];
 units[64] = "99";
 comments[64] = "Id Pregunta: 5514. ";


//  Id pregunta: 5533 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  El Programa IDABC para el periodo 2005 a 2009, &iquest;en qu&eacute; norma europea se basa?";
 choices[65]= new Array();
 choices[65][0] = "Decisi&oacute;n 2004/387/CE";
 choices[65][1] = "Decisi&oacute;n 1719/1999/CE";
 choices[65][2] = "Decisi&oacute;n 1720/1999/CE";
 choices[65][3] = "Directiva 2004/387/CE";
 answers[65] = choices[65][0];
 units[65] = "30";
 comments[65] = "Id Pregunta: 5533. ";


//  Id pregunta: 5895 Año de creación de pregunta: 2009-01-01
 questions[66]= "67)  &iquest;C&oacute;mo se denominan los elementos que permiten insertar c&oacute;digo Java arbitrario en una p&aacute;gina JSP?";
 choices[66]= new Array();
 choices[66][0] = "Applets";
 choices[66][1] = "Codelets";
 choices[66][2] = "Scriptlets";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = choices[66][2];
 units[66] = "116";
 comments[66] = "Id Pregunta: 5895. ";


//  Id pregunta: 5903 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con M&Eacute;TRICA v.3 es FALSA?:";
 choices[67]= new Array();
 choices[67][0] = "Cubre distintos tipos de desarrollo: &quot;estructurado&quot; y &quot;orientado a objetos&quot;";
 choices[67][1] = "En su estructura se distinguen tres procesos principales";
 choices[67][2] = "Se incluyen Interfaces para aspectos de gesti&oacute;n";
 choices[67][3] = "El proceso de desarrollo de Sistemas de Informaci&oacute;n se divide en cuatro procesos: &quot;an&aacute;lisis&quot;, &quot;dise&ntilde;o&quot;, &quot;construcci&oacute;n&quot;, e &quot;implantaci&oacute;n y aceptaci&oacute;n&quot; del sistema";
 answers[67] = choices[67][3];
 units[67] = "86";
 comments[67] = "Id Pregunta: 5903. MAP 2008 A1";


//  Id pregunta: 5961 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Seg&uacute;n la Norma ISO 9000:2000, la relaci&oacute;n entre el resultado alcanzado y los recursos utilizados, se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Eficiencia";
 choices[68][1] = "Eficacia";
 choices[68][2] = "Proceso";
 choices[68][3] = "Requisito";
 answers[68] = choices[68][0];
 units[68] = "87";
 comments[68] = "Id Pregunta: 5961. Castilla La Mancha 2009";


//  Id pregunta: 6045 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  En relaci&oacute;n con el Single Sign On";
 choices[69]= new Array();
 choices[69][0] = "Los sistemas Web Single Sign On utilizan 'cookies' para reconocer a los usuarios y su estado de autenticaci&oacute;n";
 choices[69][1] = "Los usuarios de los sistemas SSO mediante Kerberos reciben un 'ticket' al registrarse que luego se presenta en las aplicaciones cliente";
 choices[69][2] = "Las dos respuestas anteriores son correctas";
 choices[69][3] = "Todas las respuestas anteriores son incorrectas";
 answers[69] = choices[69][2];
 units[69] = "118";
 comments[69] = "Id Pregunta: 6045. ";


//  Id pregunta: 6134 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  En relaci&oacute;n con el funcionamiento de un CAU (Centro de Atenci&oacute;n de Usuarios) no es correcto que:";
 choices[70]= new Array();
 choices[70][0] = "Toda llamada que se reciba en el CAU debe quedar registrada como incidencia";
 choices[70][1] = "En el caso que el CAU no pueda resolver la incidencia debe escalarla a un segundo nivel, que se corresponde a otras &aacute;reas del centro TIC";
 choices[70][2] = "Si el segundo nivel no puede resolver la incidencia, escalar&aacute; la incidencia al tercer nivel, compuesto en general por proveedores y empresas de mantenimiento";
 choices[70][3] = "Es responsabilidad de cada uno de los niveles documentar la incidencia, cerrarla y comunicarlo al usuario";
 answers[70] = choices[70][3];
 units[70] = "26";
 comments[70] = "Id Pregunta: 6134. ";


//  Id pregunta: 6187 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Seg&uacute;n el Real Decreto 3/2010, los sistemas existentes a la entrada en vigor del Real Decreto disponen de un plazo de adecuaci&oacute;n de";
 choices[71]= new Array();
 choices[71][0] = "Doce meses desde la entrada en vigor";
 choices[71][1] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses desde la entrada en vigor";
 choices[71][2] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses adicionales";
 choices[71][3] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses desde la aprobaci&oacute;n del plan de adecuaci&oacute;n";
 answers[71] = choices[71][1];
 units[71] = "43";
 comments[71] = "Id Pregunta: 6187. Disposicion transitoria";


//  Id pregunta: 6380 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  En el Esquema Nacional de Interoperabilidad, se establece que los sistemas o aplicaciones implicados en la provisi&oacute;n de un servicio p&uacute;blico por v&iacute;a electr&oacute;nica se sincronizar&aacute;n con la hora oficial de:";
 choices[72]= new Array();
 choices[72][0] = "El reloj de la Puerta del Sol";
 choices[72][1] = "El Instituto Europeo de Medici&oacute;n Horaria";
 choices[72][2] = "La Agencia Espa&ntilde;ola de Meteorologia";
 choices[72][3] = "El Real Instituto y Observatorio de la Armada";
 answers[72] = choices[72][3];
 units[72] = "43";
 comments[72] = "Id Pregunta: 6380. Art&iacute;culo 15 ENI";


//  Id pregunta: 6413 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  El Watermarking es una t&eacute;cnica para comprobar la legalidad del software, &iquest;De qu&eacute; tipo?";
 choices[73]= new Array();
 choices[73][0] = "An&oacute;nima";
 choices[73][1] = "Esteganogr&aacute;fica";
 choices[73][2] = "Asim&eacute;trica";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][1];
 units[73] = "37";
 comments[73] = "Id Pregunta: 6413. ";


//  Id pregunta: 6425 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes aplicaciones no se incluye en la suite ofim&aacute;tica OpenOffice.org ?";
 choices[74]= new Array();
 choices[74][0] = "Writer";
 choices[74][1] = "Calc";
 choices[74][2] = "Draw";
 choices[74][3] = "Spread";
 answers[74] = choices[74][3];
 units[74] = "62";
 comments[74] = "Id Pregunta: 6425. ";


//  Id pregunta: 6465 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  Seg&uacute;n el interfaz de Aseguramiento de la Calidad de M&eacute;trica v3, el establecimiento del Plan de Aseguramiento de la Calidad debe comenzar en el proceso:";
 choices[75]= new Array();
 choices[75][0] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[75][1] = "Estudio de Viabilidad del Sistema";
 choices[75][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[75][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[75] = choices[75][1];
 units[75] = "86";
 comments[75] = "Id Pregunta: 6465. Castilla La Mancha 2009";


//  Id pregunta: 6489 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Qu&eacute; comandos se usan en POP3 para descargarse y borrar los dos primeros mensajes del buz&oacute;n de correo?";
 choices[76]= new Array();
 choices[76][0] = "RETR 1 DELE 1 RETR 2 DELE 2";
 choices[76][1] = "RETE 1,2 DELE 1,2";
 choices[76][2] = "RETR 1-2 DELE 1-2";
 choices[76][3] = "RETR 1 RETR 2";
 answers[76] = choices[76][0];
 units[76] = "106";
 comments[76] = "Id Pregunta: 6489. Castilla La Mancha 2009";


//  Id pregunta: 6521 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  JME es la plataforma dirigida al desarrollo de aplicaciones para dispositivos como tel&eacute;fonos m&oacute;viles o PDAs, y es el acr&oacute;nimo de:";
 choices[77]= new Array();
 choices[77][0] = "Java Mobile Edition";
 choices[77][1] = "Java Micro Edition";
 choices[77][2] = "Java Mobility Edition";
 choices[77][3] = "Java Mobile Enterprise";
 answers[77] = choices[77][1];
 units[77] = "116";
 comments[77] = "Id Pregunta: 6521. ";


//  Id pregunta: 6614 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  De las siguientes actividades, &iquest;cu&aacute;l forma parte del proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (ASI) de M&eacute;trica?";
 choices[78]= new Array();
 choices[78][0] = "Establecimiento de Requisitos";
 choices[78][1] = "Identificaci&oacute;n de Requisitos";
 choices[78][2] = "Establecimiento de Requisitos de Implantaci&oacute;n";
 choices[78][3] = "Definici&oacute;n de Requisitos del Sistema";
 answers[78] = choices[78][0];
 units[78] = "86";
 comments[78] = "Id Pregunta: 6614. ";


//  Id pregunta: 6624 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes NO es una norma aplicable a la Calidad del Software?";
 choices[79]= new Array();
 choices[79][0] = "ISO 15.504";
 choices[79][1] = "ISO 19011";
 choices[79][2] = "ISO 9000:2000";
 choices[79][3] = "ISO 15.408";
 answers[79] = choices[79][3];
 units[79] = "87";
 comments[79] = "Id Pregunta: 6624. ";


//  Id pregunta: 7266 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  El acceso al medio utilizado por GSM (Global System Mobile) es acceso m&uacute;ltiple por divisi&oacute;n de:";
 choices[80]= new Array();
 choices[80][0] = "Frecuencia";
 choices[80][1] = "Tiempo";
 choices[80][2] = "Tiempo y frecuencia";
 choices[80][3] = "C&oacute;digo de banda ancha (WCDMA)";
 answers[80] = choices[80][2];
 units[80] = "108";
 comments[80] = "Id Pregunta: 7266. Examen TIC B 2009";


//  Id pregunta: 7349 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  Liferay est&aacute; desarrollado por:";
 choices[81]= new Array();
 choices[81][0] = "Canonical";
 choices[81][1] = "Red Hat";
 choices[81][2] = "Novell";
 choices[81][3] = "Ninguna de las anteriores";
 answers[81] = choices[81][3];
 units[81] = "95";
 comments[81] = "Id Pregunta: 7349. ";


//  Id pregunta: 8167 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  Respecto al API, Streaming API for XML (StAX), indicar la afirmaci&oacute;n correcta:";
 choices[82]= new Array();
 choices[82][0] = "Emplea &quot;push parsing&quot;.";
 choices[82][1] = "Permite vistas XML de datos no XML.";
 choices[82][2] = "Es un API unidireccional.";
 choices[82][3] = "El cliente del API no controla el thread de la aplicaci&oacute;n.";
 answers[82] = choices[82][1];
 units[82] = "116";
 comments[82] = "Id Pregunta: 8167. Examen TIC A1 2010";


//  Id pregunta: 8223 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  En un Ministerio de la Administraci&oacute;n General del Estado, &iquest;cu&aacute;l es el rango administrativo m&iacute;nimo de una sede electr&oacute;nica?:";
 choices[83]= new Array();
 choices[83][0] = "Una Secretar&iacute;a de Estado.";
 choices[83][1] = "Una Subsecretar&iacute;a.";
 choices[83][2] = "Una Subdirecci&oacute;n General.";
 choices[83][3] = "Una Direcci&oacute;n General.";
 answers[83] = choices[83][3];
 units[83] = "43";
 comments[83] = "Id Pregunta: 8223. Examen TIC A1 2010";


//  Id pregunta: 8334 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica 3?";
 choices[84]= new Array();
 choices[84][0] = "Perfil Jefe de Proyecto.";
 choices[84][1] = "Perfil Consultor. ";
 choices[84][2] = "Perfil Analista.";
 choices[84][3] = "Perfil Programador.";
 answers[84] = choices[84][0];
 units[84] = "86";
 comments[84] = "Id Pregunta: 8334. Examen TIC A2 2010";


//  Id pregunta: 8356 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  El nivel 5 del modelo de Capacidad y Madurez (CMMI), nivel optimizado, tiene como objetivo:";
 choices[85]= new Array();
 choices[85][0] = "Gestionar cuantitativamente los procesos para lograr los objetivos de calidad y ejecuci&oacute;n del proceso establecido por el proyecto.";
 choices[85][1] = "El entendimiento cuantitativo de los procesos de la organizaci&oacute;n.";
 choices[85][2] = "Mejorar la calidad de los procesos de la organizaci&oacute;n, en base a un entendimiento de las causas comunes de variaci&oacute;n.";
 choices[85][3] = "Proporcionar datos de la ejecuci&oacute;n de procesos.";
 answers[85] = choices[85][2];
 units[85] = "87";
 comments[85] = "Id Pregunta: 8356. Examen TIC A2 2010";


//  Id pregunta: 8398 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Seg&uacute;n el Real Decreto 1671/2009, las sedes electr&oacute;nicas de la Administraci&oacute;n General del Estado se crean: ";
 choices[86]= new Array();
 choices[86][0] = "Por Orden Ministerial o Resoluci&oacute;n del titular del organismo. ";
 choices[86][1] = "Por Real Decreto del Presidente del Gobierno. ";
 choices[86][2] = "Por Orden Conjunta del Ministerio de la Presidencia y del Ministerio del que se trate. ";
 choices[86][3] = "Por Acuerdo del Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[86] = choices[86][0];
 units[86] = "43";
 comments[86] = "Id Pregunta: 8398. Examen TIC A2 2010";


//  Id pregunta: 8614 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  &iquest;Cual de las siguientes soluciones comerciales de Escritorio Remoto se distribuye bajo licencia propietaria?";
 choices[87]= new Array();
 choices[87][0] = "Vinagre";
 choices[87][1] = "DameWare Mini Remote Control";
 choices[87][2] = "TightVNC";
 choices[87][3] = "RdesKtop";
 answers[87] = choices[87][1];
 units[87] = "118";
 comments[87] = "Id Pregunta: 8614. Examen TIC A2 2010 interna";


//  Id pregunta: 8620 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  El tipo de mantenimiento de equipos que se realiza en las instalaciones del prestador del servicio de mantenimiento y NO en las Instalaciones del cliente, se denomina:";
 choices[88]= new Array();
 choices[88][0] = "Out-side";
 choices[88][1] = "Off-side";
 choices[88][2] = "In-site";
 choices[88][3] = "On-site";
 answers[88] = choices[88][3];
 units[88] = "26";
 comments[88] = "Id Pregunta: 8620. Examen TIC A2 2010 interna";


//  Id pregunta: 8632 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes actividades NO pertenece a la Gesti&oacute;n del Proyecto seg&uacute;n M&eacute;trica v3?";
 choices[89]= new Array();
 choices[89][0] = "Identificaci&oacute;n de las Propiedades de Calidad.";
 choices[89][1] = "Planificaci&oacute;n.";
 choices[89][2] = "Cierre del Proyecto.";
 choices[89][3] = "Estimaci&oacute;n de Esfuerzo.";
 answers[89] = choices[89][0];
 units[89] = "86";
 comments[89] = "Id Pregunta: 8632. Examen TIC A2 2010 interna";


//  Id pregunta: 8676 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  A qu&eacute; se denomina Single sign-on (SSO):";
 choices[90]= new Array();
 choices[90][0] = "Procedimiento de cifrado para autenticar a un usuario";
 choices[90][1] = "Procedimiento asociado al cifrado en Secure Sockets Layers (SSL)";
 choices[90][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n";
 choices[90][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS";
 answers[90] = choices[90][2];
 units[90] = "118";
 comments[90] = "Id Pregunta: 8676. Examen UPM A2 2011";


//  Id pregunta: 8731 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  Se considera documento electr&oacute;nico de acuerdo a la ley 11/2007 a:";
 choices[91]= new Array();
 choices[91][0] = "La informaci&oacute;n de naturaleza administrativa, &uacute;nicamente en forma electr&oacute;nica, archivada en soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[91][1] = "La informaci&oacute;n de naturaleza administrativa, &uacute;nicamente en forma electr&oacute;nica, archivada en soporte electr&oacute;nico, o impresa en papel, siempre seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[91][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en soporte electr&oacute;nico o en formato papel, siempre que se haya firmado con un certificado electr&oacute;nico reconocido";
 choices[91][3] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 answers[91] = choices[91][3];
 units[91] = "43";
 comments[91] = "Id Pregunta: 8731. Examen TIC A2 2010 interna";


//  Id pregunta: 8801 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;como se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[92]= new Array();
 choices[92][0] = "WT (Window Toolkit)";
 choices[92][1] = "AWT (Abstract Window Toolkit)";
 choices[92][2] = "JWS (Java Window Set)";
 choices[92][3] = "WS (Windows Set)";
 answers[92] = choices[92][1];
 units[92] = "60";
 comments[92] = "Id Pregunta: 8801. Examen UPM A2 2011";


//  Id pregunta: 8861 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  El lenguaje Java Script:";
 choices[93]= new Array();
 choices[93][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[93][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[93][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[93][3] = "Solamente puede ser compilado si el servidor tiene instalada una m&aacute;quina virtual java (JVM)";
 answers[93] = choices[93][1];
 units[93] = "69";
 comments[93] = "Id Pregunta: 8861. Analista Ayto. Madrid 2010";


//  Id pregunta: 8969 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Entre las m&eacute;tricas de Calidad para sistemas orientados a objetos se encuentran MDOO &iquest;cu&aacute;l de los siguientes no es un factor que la compongan?";
 choices[94]= new Array();
 choices[94][0] = "Factor de polimorfismo";
 choices[94][1] = "Factor de acoplamiento";
 choices[94][2] = "Factor de herencia de m&eacute;todos";
 choices[94][3] = "Factor de cohesi&oacute;n";
 answers[94] = choices[94][3];
 units[94] = "88";
 comments[94] = "Id Pregunta: 8969. ";


//  Id pregunta: 9036 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  Seg&uacute;n el  RD 1671/2009, &iquest;cu&aacute;ndo se pueden destruir documentos en soporte papel?";
 choices[95]= new Array();
 choices[95][0] = "Siempre";
 choices[95][1] = "Nunca";
 choices[95][2] = "Cuando no se trate de documentos  con valor hist&oacute;rico, art&iacute;sticos o con car&aacute;cter relevante";
 choices[95][3] = "Cuando ya exista una copia en formato papel ";
 answers[95] = choices[95][2];
 units[95] = "43";
 comments[95] = "Id Pregunta: 9036. ";


//  Id pregunta: 9039 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  &iquest;Qu&eacute; es en java una inner class?";
 choices[96]= new Array();
 choices[96][0] = "Es lo mismo que una clase abstracta";
 choices[96][1] = "Una clase declarada dentro de otra";
 choices[96][2] = "Una clase que no puede ser heredada";
 choices[96][3] = "Ninguno de los anteriores";
 answers[96] = choices[96][1];
 units[96] = "60";
 comments[96] = "Id Pregunta: 9039. ";


//  Id pregunta: 9086 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  Con respecto a los Factores Cr&iacute;ticos de &Eacute;xito y los objetivos de la organizaci&oacute;n, se&ntilde;ale la opci&oacute;n INCORRECTA";
 choices[97]= new Array();
 choices[97][0] = "Los objetivos  son los &quot;fines&quot; hacia los cuales se dirige el esfuerzo y el trabajo de la organizaci&oacute;n";
 choices[97][1] = "Los factores de &eacute;xito son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[97][2] = "Para cada objetivo se debe definir, al menos, un factor de &eacute;xito";
 choices[97][3] = "Los factores de &eacute;xito deben determinarse antes que los objetivos, ya que constituyen la base para definir los mismos de manera precisa";
 answers[97] = choices[97][3];
 units[97] = "77";
 comments[97] = "Id Pregunta: 9086. ";


//  Id pregunta: 9103 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  &iquest;En que lenguaje est&aacute; basado el lenguaje de expresi&oacute;n de derechos REL?";
 choices[98]= new Array();
 choices[98][0] = "XcML";
 choices[98][1] = "XrML";
 choices[98][2] = "XMCL";
 choices[98][3] = "XsML";
 answers[98] = choices[98][1];
 units[98] = "37";
 comments[98] = "Id Pregunta: 9103. ";


//  Id pregunta: 9589 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  El Real Decreto 1671/2009 obliga a incluir unos contenidos m&iacute;nimos en los certificados de sello electr&oacute;nico, entre los que NO se incluye:";
 choices[99]= new Array();
 choices[99][0] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n sello electr&oacute;nico.";
 choices[99][1] = "Actuaciones y procedimientos en los que podr&aacute; ser utilizado. ";
 choices[99][2] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor. ";
 choices[99][3] = "Nombre del suscriptor.";
 answers[99] = choices[99][1];
 units[99] = "43";
 comments[99] = "Id Pregunta: 9589. Examen TIC A2 2011";


