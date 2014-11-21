/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 89 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qui&eacute;nes son miembros del comit&eacute; JTC-1, responsable de la elaboraci&oacute;n de normas de Tratamiento de la Informaci&oacute;n excepto de los servicios p&uacute;blicos de comunicaciones?:";
 choices[0]= new Array();
 choices[0][0] = "Los pa&iacute;ses pertenecientes a la Uni&oacute;n Europea";
 choices[0][1] = "Las instituciones nacionales de normalizaci&oacute;n y la Comisi&oacute;n de la Uni&oacute;n Europea";
 choices[0][2] = "Una representaci&oacute;n del comit&eacute; directivo de la ISO";
 choices[0][3] = "El JTC-1 es una asociaci&oacute;n abierta, no un comit&eacute; de elaboraci&oacute;n de normas";
 answers[0] = choices[0][1];
 units[0] = "42";
 comments[0] = "Id Pregunta: 89. ";


//  Id pregunta: 339 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  La red de comunicaci&oacute;n en cadena de una organizaci&oacute;n es:";
 choices[1]= new Array();
 choices[1][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[1][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[1][2] = "Cada sujeto se comunica con todos los restantes";
 choices[1][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[1] = choices[1][1];
 units[1] = "23";
 comments[1] = "Id Pregunta: 339. ";


//  Id pregunta: 578 Año de creación de pregunta: 2006-01-01
 questions[2]= "3)  La empresa Du Pont inici&oacute; un estudio sobre t&eacute;cnicas de aplicaci&oacute;n de ordenadores a la planificaci&oacute;n y programaci&oacute;n de proyectos, que recibi&oacute; el nombre de:";
 choices[2]= new Array();
 choices[2][0] = "CPM (Critical Path Method).";
 choices[2][1] = "PERT.";
 choices[2][2] = "Diagrama de Gant.";
 choices[2][3] = "PROPS.";
 answers[2] = choices[2][0];
 units[2] = "27";
 comments[2] = "Id Pregunta: 578. ";


//  Id pregunta: 647 Año de creación de pregunta: 2006-01-01
 questions[3]= "4)  Cu&aacute;l de las siguientes afirmaciones sobre AENOR es incorrecta:";
 choices[3]= new Array();
 choices[3][0] = "Mediante un Real Decreto AENOR fue reconocida como la &uacute;nica entidad aprobada para desarrollar las tareas de normalizaci&oacute;n y certificaci&oacute;n en nuestro pa&iacute;s.";
 choices[3][1] = "Las normas espa&ntilde;olas que genera AENOR se denominan Normas UNE.";
 choices[3][2] = "AENOR es miembro de pleno derecho, y representa a nuestro pa&iacute;s en los Organismos Internacionales, europeos y regionales de Normalizaci&oacute;n (ISO, IEC, CEN, CENELEC, ETSI, COPANT).";
 choices[3][3] = "AENOR est&aacute; acreditada por la Entidad Nacional de Acreditaci&oacute;n (ENAC) como la &uacute;nica entidad capaz de certificar ISO 9000 en Espa&ntilde;a.";
 answers[3] = choices[3][3];
 units[3] = "42";
 comments[3] = "Id Pregunta: 647. ";


//  Id pregunta: 878 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l es el est&aacute;ndar de seguridad creado, entre otros,  por Visa y Mastercard para realizar pagos en la red?:";
 choices[4]= new Array();
 choices[4][0] = "SSL";
 choices[4][1] = "HTTP";
 choices[4][2] = "S/MIME";
 choices[4][3] = "SET";
 answers[4] = choices[4][3];
 units[4] = "70";
 comments[4] = "Id Pregunta: 878. ";


//  Id pregunta: 898 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;En qu&eacute; generaci&oacute;n aparecen los microprocesadores?:";
 choices[5]= new Array();
 choices[5][0] = "Segunda";
 choices[5][1] = "Tercera";
 choices[5][2] = "Cuarta";
 choices[5][3] = "Las generaciones solo se aplican a los lenguajes de programaci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "47";
 comments[5] = "Id Pregunta: 898. ";


//  Id pregunta: 913 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; define la norma X.500?:";
 choices[6]= new Array();
 choices[6][0] = "Servicio de directorio";
 choices[6][1] = "Sistema de tratamiento de mensajes";
 choices[6][2] = "Servicio de transferencia de ficheros";
 choices[6][3] = "Sistema de gesti&oacute;n de red";
 answers[6] = choices[6][0];
 units[6] = "73";
 comments[6] = "Id Pregunta: 913. ";


//  Id pregunta: 1083 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  En el lenguaje Java a las variables de clase (class variables) se les denomina tambi&eacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Private o privadas";
 choices[7][1] = "Static o est&aacute;ticas";
 choices[7][2] = "Final o final";
 choices[7][3] = "System o sistema";
 answers[7] = choices[7][1];
 units[7] = "60";
 comments[7] = "Id Pregunta: 1083. ";


//  Id pregunta: 1086 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  En el modelo cliente/servidor:";
 choices[8]= new Array();
 choices[8][0] = "Pueden elegirse distintos lenguajes de programaci&oacute;n para cada una de las partes";
 choices[8][1] = "Debe utilizarse siempre SQL para los procesos de tratamiento de datos";
 choices[8][2] = "El lenguaje para la parte cliente, debe permitir caracter&iacute;sticas de orientaci&oacute;n al objeto";
 choices[8][3] = "El lenguaje en el que se programen los procesos a ejecutarse en el cliente determina el que se debe utilizar para programar los procesos de los servidores";
 answers[8] = choices[8][0];
 units[8] = "50";
 comments[8] = "Id Pregunta: 1086. ";


//  Id pregunta: 1378 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Un &quot;service pack&quot; en el entorno del sistema operativo Windows 2000:";
 choices[9]= new Array();
 choices[9][0] = "Es una aplicaci&oacute;n auxiliar que amplia las funcionalidades del sistema operativo";
 choices[9][1] = "Es un componente del servicio de paquetes";
 choices[9][2] = "Es un paquete integrado que incluye el sistema operativo y programas de aplicaci&oacute;n";
 choices[9][3] = "Es un conjunto de correcciones o partes del sistema operativo que corrige fallos o vulnerabilidades de seguridad y tambi&eacute;n puede ampliar las funcionalidades de dicho sistema";
 answers[9] = choices[9][3];
 units[9] = "56";
 comments[9] = "Id Pregunta: 1378. ";


//  Id pregunta: 1464 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  La compresi&oacute;n con p&eacute;rdidas no ser&iacute;a adecuada para:";
 choices[10]= new Array();
 choices[10][0] = "Un ejecutable";
 choices[10][1] = "Texto ASCII";
 choices[10][2] = "Un facs&iacute;mil";
 choices[10][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[10] = choices[10][3];
 units[10] = "93";
 comments[10] = "Id Pregunta: 1464. ";


//  Id pregunta: 1576 Año de creación de pregunta: 2003-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es un &lsquo;trigger&rsquo;?";
 choices[11]= new Array();
 choices[11][0] = "Es un procedimiento asociado a una acci&oacute;n (inserci&oacute;n, borrado o modificaci&oacute;n) y a una tabla que se ejecuta cada vez que se intenta realizar una determinada operaci&oacute;n sobre dicha tabla.";
 choices[11][1] = "Es un puntero interno al SGBD que apunta a las filas de las tablas sobre la que est&aacute; definido y sirve para acelerar el acceso a los datos de la base.";
 choices[11][2] = "Es un archivo privado del SGBD en el que se apuntan todas las operaciones que se realizan sobre la base de datos.";
 choices[11][3] = "Es un tipo de distribuci&oacute;n de las filas de una tabla que permite hacer accesos en paralelo a los datos de dicha tabla.";
 answers[11] = choices[11][0];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1576. ";


//  Id pregunta: 1685 Año de creación de pregunta: 2004-01-01
 questions[12]= "13)  Sobre el e-learnig";
 choices[12]= new Array();
 choices[12][0] = "Es el uso de las tecnolog&iacute;as multimedia para mejorar y desarrollar nuevas estrategias de aprendizaje";
 choices[12][1] = "Algunas de las facilidades que aporta el e-learning son la accesibilidad geogr&aacute;fica y la flexibilidad en el tiempo";
 choices[12][2] = "Las dos afirmaciones anteriores son correctas";
 choices[12][3] = "Todas las afirmaciones anteriores son falsas";
 answers[12] = choices[12][2];
 units[12] = "66";
 comments[12] = "Id Pregunta: 1685. ";


//  Id pregunta: 1811 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  Google Earth es un sistema que permite el acceso a informaci&oacute;n geogr&aacute;fica, y que emplea un modelo de datos:";
 choices[13]= new Array();
 choices[13][0] = "&Uacute;nicamente r&aacute;ster.";
 choices[13][1] = "R&aacute;ster y vectorial.";
 choices[13][2] = "&Uacute;nicamente vectorial.";
 choices[13][3] = "Representaci&oacute;n de tipo streaming.";
 answers[13] = choices[13][1];
 units[13] = "67";
 comments[13] = "Id Pregunta: 1811. ";


//  Id pregunta: 1812 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  En el campo de los sistemas de informaci&oacute;n geogr&aacute;fica, un IDE es:";
 choices[14]= new Array();
 choices[14][0] = "Un conjunto de tecnolog&iacute;as, est&aacute;ndares y recursos humanos necesarios para adquirir, procesar, almacenar, distribuir y mejorar la utilizaci&oacute;n de la informaci&oacute;n geogr&aacute;fica.";
 choices[14][1] = "Un entorno de desarrollo integrado para la elaboraci&oacute;n de aplicaciones que utilizan informaci&oacute;n geogr&aacute;fica.";
 choices[14][2] = "Una infraestructura de datos empresariales, que permite la unificaci&oacute;n de sistemas de informaci&oacute;n geogr&aacute;fica con topolog&iacute;a distribuida.";
 choices[14][3] = "Un sistema de informaci&oacute;n cartogr&aacute;fica como Arc/Info y Arc/View.";
 answers[14] = choices[14][0];
 units[14] = "67";
 comments[14] = "Id Pregunta: 1812. ";


//  Id pregunta: 1936 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  En JDBC &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[15]= new Array();
 choices[15][0] = "Driver Tipo 1";
 choices[15][1] = "Driver Tipo 2";
 choices[15][2] = "Driver Tipo 3";
 choices[15][3] = "Driver Tipo 4";
 answers[15] = choices[15][0];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1936. ";


//  Id pregunta: 2276 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  El flujo de datos de un DFD:";
 choices[16]= new Array();
 choices[16][0] = "Tiene siempre flechas";
 choices[16][1] = "No tiene por qu&eacute; existir";
 choices[16][2] = "S&oacute;lo conecta procesos";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][3];
 units[16] = "81";
 comments[16] = "Id Pregunta: 2276. ";


//  Id pregunta: 2326 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  En la t&eacute;cnica de estimaci&oacute;n COCOMO cl&aacute;sico, el modelo Intermedio:";
 choices[17]= new Array();
 choices[17][0] = "Calcula el esfuerzo y el coste de un desarrollo software en funci&oacute;n &uacute;nicamente de las l&iacute;neas fuentes estimadas de los programas";
 choices[17][1] = "A&ntilde;ade una evaluaci&oacute;n subjetiva del producto y de los atributos del proyecto y del personal";
 choices[17][2] = "Considera que el impacto de los factores de influencia depende de la fase de desarrollo";
 choices[17][3] = "Nada de lo anterior es correcto";
 answers[17] = choices[17][1];
 units[17] = "89";
 comments[17] = "Id Pregunta: 2326. Preparatic XVII";


//  Id pregunta: 2373 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Es falso que dependiendo del proyecto a que se aplique COCOMO, podemos clasificar los sistemas como:";
 choices[18]= new Array();
 choices[18][0] = "Org&aacute;nico";
 choices[18][1] = "Semi-org&aacute;nico";
 choices[18][2] = "Semi-acoplado";
 choices[18][3] = "Empotrado";
 answers[18] = choices[18][1];
 units[18] = "89";
 comments[18] = "Id Pregunta: 2373. ";


//  Id pregunta: 2729 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  Uno de los objetivos principales de los Sistemas de Informaci&oacute;n es:";
 choices[19]= new Array();
 choices[19][0] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[19][1] = "Interconectar las distintas sedes de la organizaci&oacute;n";
 choices[19][2] = "Aumentar la complejidad de los procesos de la organizaci&oacute;n";
 choices[19][3] = "Reducir el n&uacute;mero de empleados";
 answers[19] = choices[19][0];
 units[19] = "77";
 comments[19] = "Id Pregunta: 2729. ";


//  Id pregunta: 2809 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  Los criterios relacionados con la Reusabilidad son:";
 choices[20]= new Array();
 choices[20][0] = "Generalidad, Modularidad, Autodescriptivo, Independencia entornos HW y SW.";
 choices[20][1] = "Expandibilidad, Generalidad, Autodescriptivo, Modularidad.";
 choices[20][2] = "Generalidad, Modularidad, Autodescriptivo, Simplicidad.";
 choices[20][3] = "Expandibilidad, Generalidad, Autodescriptivo, Instrumentaci&oacute;n.";
 answers[20] = choices[20][0];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2809. ";


//  Id pregunta: 2873 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;C&oacute;mo se llama la norma europea que recoge las especificaciones para la gesti&oacute;n de documentos electr&oacute;nicos de archivo?";
 choices[21]= new Array();
 choices[21][0] = "MoReq";
 choices[21][1] = "IDABC";
 choices[21][2] = "ISAD(G)";
 choices[21][3] = "EDMS";
 answers[21] = choices[21][0];
 units[21] = "95";
 comments[21] = "Id Pregunta: 2873. ";


//  Id pregunta: 2985 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;Cu&aacute;s de los siguientes servicios no proporciona el nivel de aplicaci&oacute;n en el modelo OSI de ISO?";
 choices[22]= new Array();
 choices[22][0] = "Determinaci&oacute;n de la calidad de servicio aceptable";
 choices[22][1] = "Acuerdo sobre los mecanismos de privacidad";
 choices[22][2] = "Formateo y transformaci&oacute;n de los datos";
 choices[22][3] = "Selecci&oacute;n de la disciplina de di&aacute;logo, incluyendo los procedimientos de iniciaci&oacute;n y liberaci&oacute;n";
 answers[22] = choices[22][2];
 units[22] = "100";
 comments[22] = "Id Pregunta: 2985. ";


//  Id pregunta: 3060 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  El lenguaje de marcado que permite el desarrollo de servicios IVR basados en web se denomina:";
 choices[23]= new Array();
 choices[23][0] = "IVRML";
 choices[23][1] = "VML";
 choices[23][2] = "VoiceXML";
 choices[23][3] = "IVRXML";
 answers[23] = choices[23][2];
 units[23] = "94";
 comments[23] = "Id Pregunta: 3060. ";


//  Id pregunta: 3339 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Comparando las tecnolog&iacute;as ATM y Frame Relay:";
 choices[24]= new Array();
 choices[24][0] = "En ATM la informaci&oacute;n est&aacute; estructurada en celdas de tama&ntilde;o fijo de 53 octetos, de forma distinta a Frame Relay";
 choices[24][1] = "En Frame Relay no hay informaci&oacute;n de control de flujo, pero en ATM s&iacute;";
 choices[24][2] = "En ATM no hay informaci&oacute;n de control de errores, pero en Frame Relay s&iacute;";
 choices[24][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[24] = choices[24][0];
 units[24] = "109";
 comments[24] = "Id Pregunta: 3339. ";


//  Id pregunta: 3429 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indicar entre las siguientes normas del IEEE la que trata sobre seguridad LAN/MAN interoperable:";
 choices[25]= new Array();
 choices[25][0] = "802.10";
 choices[25][1] = "802.11";
 choices[25][2] = "802.12";
 choices[25][3] = "802.13";
 answers[25] = choices[25][0];
 units[25] = "101";
 comments[25] = "Id Pregunta: 3429. ";


//  Id pregunta: 3447 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  El protocolo de gesti&oacute;n y administraci&oacute;n de redes que ha sido estandarizado por OSI es:";
 choices[26]= new Array();
 choices[26][0] = "SNMP (Simple Network Management Protocol)";
 choices[26][1] = "SMIP (Structure of Management Information Protocol)";
 choices[26][2] = "CMIP (Common Management Information Protocol)";
 choices[26][3] = "RMON (Remote Network Monitoring)";
 answers[26] = choices[26][2];
 units[26] = "104";
 comments[26] = "Id Pregunta: 3447. ";


//  Id pregunta: 3553 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  En sistemas de informaci&oacute;n y comunicaciones, MAP es el acr&oacute;nimo de:";
 choices[27]= new Array();
 choices[27][0] = "Multimedia application Protocol";
 choices[27][1] = "Mediagateway Advanced Protocol";
 choices[27][2] = "Medium Access Protocol";
 choices[27][3] = "Mobile Application Part";
 answers[27] = choices[27][3];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3553. ";


//  Id pregunta: 3630 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  La pen&iacute;nsula ib&eacute;rica est&aacute; telem&aacute;ticamente unida a las islas Canarias:";
 choices[28]= new Array();
 choices[28][0] = "&uacute;nicamente mediante enlace por sat&eacute;lite";
 choices[28][1] = "&uacute;nicamente mediante enlace por cable submarino";
 choices[28][2] = "mediante cable submarino como enlace principal y por sat&eacute;lite como enlace de reserva";
 choices[28][3] = "mediante enlace por sat&eacute;lite como enlace principal y por cable submarino como enlace de reserva";
 answers[28] = choices[28][2];
 units[28] = "105,110";
 comments[28] = "Id Pregunta: 3630. ";


//  Id pregunta: 3822 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n verdadera en un sistema de transmisi&oacute;n de datos:";
 choices[29]= new Array();
 choices[29][0] = "El equipo terminal de datos dialoga con la l&iacute;nea de transmisi&oacute;n para emitir la se&ntilde;al";
 choices[29][1] = "El equipo terminal del circuito de datos es el origen o destino final de la comunicaci&oacute;n";
 choices[29][2] = "Un m&oacute;dem es un ejemplo de un equipo terminal de datos";
 choices[29][3] = "El equipo terminal de datos dialoga con el equipo terminal del circuito de datos pas&aacute;ndose la informaci&oacute;n que se quiere transmitir/recibir";
 answers[29] = choices[29][3];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3822. ";


//  Id pregunta: 3863 Año de creación de pregunta: 2004-01-01
 questions[30]= "31)  El protocolo HTTP";
 choices[30]= new Array();
 choices[30][0] = "Obliga a los servidores a escuchar en el puerto 80";
 choices[30][1] = "Utiliza el formato MIME para las respuestas ";
 choices[30][2] = "Utiliza DNS y TCP para establecer la conexi&oacute;n con el servidor";
 choices[30][3] = "Est&aacute; basado en los comandos de Un&iacute;x";
 answers[30] = choices[30][1];
 units[30] = "113";
 comments[30] = "Id Pregunta: 3863. Tanenbaum";


//  Id pregunta: 3884 Año de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;En cu&aacute;l de las siguientes especificaciones de medio del est&aacute;ndar IEEE 802.3, el cable, cuando es de tipo coaxial, tiene una impedancia caracter&iacute;stica de 50 Ohmios?:";
 choices[31]= new Array();
 choices[31][0] = "Especificaciones de medio 10BASE2 y 10BASE5.";
 choices[31][1] = "Especificaci&oacute;n de medio 10BASE-FL.";
 choices[31][2] = " Especificaci&oacute;n de medio 10BASE-T.";
 choices[31][3] = " Especificaci&oacute;n de medio 10BROAD36.";
 answers[31] = choices[31][0];
 units[31] = "99";
 comments[31] = "Id Pregunta: 3884. Junta Andaluc&iacute;a";


//  Id pregunta: 3893 Año de creación de pregunta: 2003-01-01
 questions[32]= "33)  En la arquitectura TCP/IP, &iquest;cu&aacute;l de los siguientes protocolos no tiene estrictamente TCP/UDP en una capa m&aacute;s baja?:";
 choices[32]= new Array();
 choices[32][0] = "ICMP";
 choices[32][1] = "SNMP.";
 choices[32][2] = "SMTP.";
 choices[32][3] = "MIME.";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3893. Junta Andaluc&iacute;a";


//  Id pregunta: 3904 Año de creación de pregunta: 2003-01-01
 questions[33]= "34)  Sobre el Entorno Dom&eacute;stico Virtual o VHE (Virtual Home Environment) puede decirse que:";
 choices[33]= new Array();
 choices[33][0] = "Es un nuevo est&aacute;ndar de interfaz dom&oacute;tica entre electrodom&eacute;sticos";
 choices[33][1] = "Es un concepto ligado a la tecnolog&iacute;a UMTS";
 choices[33][2] = "Es una norma de intercomunicaci&oacute;n inal&aacute;mbrica para utilizar en el hogar";
 choices[33][3] = "Ninguna de las opciones anteriores es correcta";
 answers[33] = choices[33][1];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3904. ";


//  Id pregunta: 4049 Año de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Qu&eacute; se suele encontrar en una DMZ?";
 choices[34]= new Array();
 choices[34][0] = "un proxy de  correo";
 choices[34][1] = "un cache web";
 choices[34][2] = "un server web";
 choices[34][3] = "todas las anteriores";
 answers[34] = choices[34][3];
 units[34] = "111";
 comments[34] = "Id Pregunta: 4049. ";


//  Id pregunta: 4094 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;En que se basa AJAX?";
 choices[35]= new Array();
 choices[35][0] = "En JavaScript";
 choices[35][1] = "En Java";
 choices[35][2] = "En JSP";
 choices[35][3] = "En JSF";
 answers[35] = choices[35][0];
 units[35] = "116";
 comments[35] = "Id Pregunta: 4094. ";


//  Id pregunta: 4438 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  En el an&aacute;lisis de los requisitos de un sistema de informaci&oacute;n, para representar los distintos datos y sus relaciones, la &ldquo;t&eacute;cnica&rdquo; m&aacute;s adecuada:";
 choices[36]= new Array();
 choices[36][0] = "Seudoc&oacute;digo.";
 choices[36][1] = "Modelo Entidad-Relaci&oacute;n.";
 choices[36][2] = "Diagramas de transici&oacute;n de estados.";
 choices[36][3] = "DFD (Diagrama de Flujo de Datos).";
 answers[36] = choices[36][1];
 units[36] = "78";
 comments[36] = "Id Pregunta: 4438. ";


//  Id pregunta: 4530 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;CuaI de las siguientes interfaces no corresponde a m&eacute;trica V.3?";
 choices[37]= new Array();
 choices[37][0] = "Gesti&oacute;n de Proyectos (GP)";
 choices[37][1] = "Seguridad (SEG)";
 choices[37][2] = "Control de la planificaci&oacute;n (CP)";
 choices[37][3] = "Gesti&oacute;n de Ia configuraci&oacute;n (GC)";
 answers[37] = choices[37][2];
 units[37] = "86";
 comments[37] = "Id Pregunta: 4530. ";


//  Id pregunta: 4568 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  Indique cual de los siguientes no es un lenguaje relacional:";
 choices[38]= new Array();
 choices[38][0] = "RQL";
 choices[38][1] = "QUEL";
 choices[38][2] = "QBE";
 choices[38][3] = "SQL";
 answers[38] = choices[38][0];
 units[38] = "58";
 comments[38] = "Id Pregunta: 4568. ";


//  Id pregunta: 4647 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  De que canales y en que numero esta compuesto un enlace primario RDSI silo contratamos en Europa:";
 choices[39]= new Array();
 choices[39][0] = "2B+D";
 choices[39][1] = "30B+2D (el D a 64 Kbps)";
 choices[39][2] = "30B+D (el D a 16 Kbps)";
 choices[39][3] = "30B+D (el D a 64 Kbps)";
 answers[39] = choices[39][3];
 units[39] = "107";
 comments[39] = "Id Pregunta: 4647. ";


//  Id pregunta: 4726 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  Cual de las siguientes afirmaciones es correcta cuando hablamos de XML:";
 choices[40]= new Array();
 choices[40][0] = "Cocoon es un parser XML de c&oacute;digo abierto";
 choices[40][1] = "Los parsers XML sin validaci&oacute;n necesitan el dtd asociado al documento xml";
 choices[40][2] = "Xerces es un parser XML basado en java";
 choices[40][3] = "XSLT es un esquema para XML utilizado en lugar de los DTD";
 answers[40] = choices[40][2];
 units[40] = "69";
 comments[40] = "Id Pregunta: 4726. Examen 2006 JCYL";


//  Id pregunta: 4782 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Seg&uacute;n el Real Decreto 522/2006";
 choices[41]= new Array();
 choices[41][0] = "En procedimientos administrativos de la Administraci&oacute;n General del Estado se suprome la aportaci&oacute;n de fotocopias de documentos de identidad";
 choices[41][1] = "En los procedimientos administrativos de la Administraci&oacute;n General del Estado se suprime la exigencia de aportar el certificado de empadronamiento, como documento probatorio del domicilio y residencia.";
 choices[41][2] = "Se regula la expedici&oacute;n del documento nacional de identidad electr&oacute;nico y sus certificados de firma electr&oacute;nica";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][0];
 units[41] = "30";
 comments[41] = "Id Pregunta: 4782. ";


//  Id pregunta: 4833 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &quot;Gesti&oacute;n de la Tecnolog&iacute;a&quot; pertenece al criterio:";
 choices[42]= new Array();
 choices[42][0] = "Alianzas y Recursos";
 choices[42][1] = "Pol&iacute;tica y Estrategia";
 choices[42][2] = "Procesos";
 choices[42][3] = "Resultados Clave";
 answers[42] = choices[42][0];
 units[42] = "92";
 comments[42] = "Id Pregunta: 4833. ";


//  Id pregunta: 4843 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  De entre las t&eacute;cnicas de compresi&oacute;n de im&aacute;genes digitales por codificaci&oacute;n predictiva en las que se elimina la redundancia entre p&iacute;xeles consecutivos, aquella que forma una predicci&oacute;n del p&iacute;xel a codificar en funci&oacute;n de losp&iacute;xeles ya codificados y guarda el error de predicci&oacute;n cuantificado, recibe el nombre de:";
 choices[43]= new Array();
 choices[43][0] = "Dithering";
 choices[43][1] = "RLE (Run Length Encoding)";
 choices[43][2] = "Bit Plane";
 choices[43][3] = "DPCM (Differential Pulse Code Modulation)";
 answers[43] = choices[43][3];
 units[43] = "93";
 comments[43] = "Id Pregunta: 4843. ";


//  Id pregunta: 4866 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  El atributo de posicionamiento de un applet &quot;absbottom&quot;:";
 choices[44]= new Array();
 choices[44][0] = "Coloca el applet en el margen izquierdo de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado asu derecha";
 choices[44][1] = "Coloca el applet en el margen derecho de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado a suizquierda";
 choices[44][2] = "Coloca la parte inferior del applet coincidiendo con el centro de la l&iacute;nea actual";
 choices[44][3] = "Coloca la parte superior del applet coincidiendo con la parte superior del texto en la l&iacute;nea actual";
 answers[44] = choices[44][2];
 units[44] = "116";
 comments[44] = "Id Pregunta: 4866. ";


//  Id pregunta: 4913 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Para cu&aacute;les de los siguientes sistemas se debe configurar la base de datos optimizando las inserciones, modificaciones y borrado de datos y asegurando un alto nivel de concurrencia?";
 choices[45]= new Array();
 choices[45][0] = "OLTP (sistemas transaccionales on line).";
 choices[45][1] = "DSS (sistemas de soporte a la decisi&oacute;n).";
 choices[45][2] = "Data Warehouse (almacenes de datos).";
 choices[45][3] = "ERP (sistemas de planificaci&oacute;n de recursos).";
 answers[45] = choices[45][0];
 units[45] = "68";
 comments[45] = "Id Pregunta: 4913. Examen TIC B 2007";


//  Id pregunta: 4933 Año de creación de pregunta: 2003-01-01
 questions[46]= "47)  Pelayo y Rosana est&aacute;n utilizando la &ldquo;estrategia de derivaci&oacute;n&rdquo; como mecanismo para la especificaci&oacute;n derequisitos de un sistema de informaci&oacute;n. Esta estrategia es potencialmente &uacute;til cuando:";
 choices[46]= new Array();
 choices[46][0] = "No existe alta rotaci&oacute;n de usuarios.";
 choices[46][1] = "Existe alta rotaci&oacute;n de usuarios.";
 choices[46][2] = "No existe alta rotaci&oacute;n de analistas.";
 choices[46][3] = "Existe alta rotaci&oacute;n de analistas.";
 answers[46] = choices[46][1];
 units[46] = "78";
 comments[46] = "Id Pregunta: 4933. Examen TIC B 2007";


//  Id pregunta: 4945 Año de creación de pregunta: 2003-01-01
 questions[47]= "48)  En el desarrollo de software, las pruebas &ldquo;alfa&rdquo; se pueden considerar:";
 choices[47]= new Array();
 choices[47][0] = "Pruebas de caja negra.";
 choices[47][1] = "Pruebas de caja transparente.";
 choices[47][2] = "Pruebas de recuperaci&oacute;n.";
 choices[47][3] = "Pruebas de seguridad.";
 answers[47] = choices[47][0];
 units[47] = "87";
 comments[47] = "Id Pregunta: 4945. Examen TIC B 2007";


//  Id pregunta: 4952 Año de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Qu&eacute; proporciona el proyecto MONO?:";
 choices[48]= new Array();
 choices[48][0] = "Software libre para desarrollar y ejecutar aplicaciones .NET.";
 choices[48][1] = "Un entorno de desarrollo integrado de software libre para aplicaciones J2EE 5.0.";
 choices[48][2] = "Software libre para una soluci&oacute;n integrada de movilidad para correo electr&oacute;nico y agendas.";
 choices[48][3] = "Un ESB (Entreprise Service Bus) y plataforma de integraci&oacute;n de software libre para la constituci&oacute;n de arquitectura. SOA.";
 answers[48] = choices[48][0];
 units[48] = "62";
 comments[48] = "Id Pregunta: 4952. Examen TIC B 2007";


//  Id pregunta: 4990 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?:";
 choices[49]= new Array();
 choices[49][0] = "WDSL";
 choices[49][1] = "SOAP";
 choices[49][2] = "UDDI";
 choices[49][3] = "XHTML";
 answers[49] = choices[49][2];
 units[49] = "39";
 comments[49] = "Id Pregunta: 4990. Examen TIC A 2007";


//  Id pregunta: 5005 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es undispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?:";
 choices[50]= new Array();
 choices[50][0] = "Que los datos utilizados para la generaci&oacute;n de firma puedan producirse s&oacute;lo una vez y asegurarrazonablemente su secreto.";
 choices[50][1] = "Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma ode la propia firma";
 choices[50][2] = "Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;npor terceros.";
 choices[50][3] = "Que el dispositivo utilizado no alteren los datos o el documento que deba firmarse ni impidan que &eacute;ste semuestre al firmante antes del proceso de firma.";
 answers[50] = choices[50][1];
 units[50] = "30";
 comments[50] = "Id Pregunta: 5005. Examen TIC A 2007";


//  Id pregunta: 5029 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros telem&aacute;ticos en d&iacute;as inh&aacute;biles, seg&uacute;n el RD209/2003, de 21 de febrero:";
 choices[51]= new Array();
 choices[51][0] = "Los registros telem&aacute;ticos no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles";
 choices[51][1] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 choices[51][2] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior";
 choices[51][3] = "No se permitir&aacute; la entrada de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente laentrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro telem&aacute;ticono se entender&aacute; efectuada";
 answers[51] = choices[51][1];
 units[51] = "30";
 comments[51] = "Id Pregunta: 5029. Examen TIC A 2007";


//  Id pregunta: 5130 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l es la longitud equivalente a una clave RSA de 1024 bits si utiliz&aacute;ramos un algoritmo de clave sim&eacute;trica?";
 choices[52]= new Array();
 choices[52][0] = "132";
 choices[52][1] = "80";
 choices[52][2] = "64";
 choices[52][3] = "512";
 answers[52] = choices[52][1];
 units[52] = "111";
 comments[52] = "Id Pregunta: 5130. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5151 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  En un dise&ntilde;o de Software es deseable que exista entre los distintos m&oacute;dulos que lo componen:";
 choices[53]= new Array();
 choices[53][0] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&aacute;xima.";
 choices[53][1] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&iacute;nima.";
 choices[53][2] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&aacute;xima.";
 choices[53][3] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&iacute;nima.";
 answers[53] = choices[53][2];
 units[53] = "84";
 comments[53] = "Id Pregunta: 5151. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5435 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l es el lugar m&aacute;s conveniente para la instalaci&oacute;n de un CPD de respaldo en la ribera del Pisuerga?";
 choices[54]= new Array();
 choices[54][0] = "La planta m&aacute;s elevada del edificio de usos m&uacute;ltiples";
 choices[54][1] = "Una sala aneja al garaje subterr&aacute;neo";
 choices[54][2] = "La primera planta de un edificio de cinco plantas";
 choices[54][3] = "La planta baja";
 answers[54] = choices[54][2];
 units[54] = "26";
 comments[54] = "Id Pregunta: 5435. Castilla y Le&oacute;n";


//  Id pregunta: 5649 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  El RD 1720/2007 trata sobre:";
 choices[55]= new Array();
 choices[55][0] = "Reglamento de desarrollo de la Ley del Estatuto B&aacute;sico del Empleado P&uacute;blico";
 choices[55][1] = "Reglamento sobre medidas de protecci&oacute;n contra radiaciones electromagn&eacute;ticas";
 choices[55][2] = "Reglamento sobre medidas que favorezcan la ergonom&iacute;a y ecolog&iacute;a en los puestos de trabajo";
 choices[55][3] = "Reglamento de desarrollo de la Ley Org&aacute;nica de protecci&oacute;n de datos de carater personal";
 answers[55] = choices[55][3];
 units[55] = "29";
 comments[55] = "Id Pregunta: 5649. ";


//  Id pregunta: 5665 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Seg&uacute;n el RD 1720/2007, &iquest;cual de los siguientes no es un derecho del afectado?";
 choices[56]= new Array();
 choices[56][0] = "Derecho de rectificacion";
 choices[56][1] = "Derecho de cancelacion";
 choices[56][2] = "Derecho de oposici&oacute;n";
 choices[56][3] = "Derecho de informaci&oacute;n";
 answers[56] = choices[56][3];
 units[56] = "29";
 comments[56] = "Id Pregunta: 5665. ";


//  Id pregunta: 5696 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Los certificados del DNI electr&oacute;nico:";
 choices[57]= new Array();
 choices[57][0] = "Se expiden voluntariamente a petici&oacute;n del ciudadano";
 choices[57][1] = " Se expiden siempre y vienen activados";
 choices[57][2] = "S&oacute;lo se expiden a quien autorice la Direcci&oacute;n General de la Polic&iacute;a";
 choices[57][3] = "Se expiden siempre, pero se activan voluntariamente con el consentimiento del ciudadano";
 answers[57] = choices[57][3];
 units[57] = "74";
 comments[57] = "Id Pregunta: 5696. ";


//  Id pregunta: 5707 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; ligado al desarrollo de aplicaciones basadas en servicios web:";
 choices[58]= new Array();
 choices[58][0] = "JAXB";
 choices[58][1] = "AWT";
 choices[58][2] = "AXIS";
 choices[58][3] = "WSE";
 answers[58] = choices[58][1];
 units[58] = "51";
 comments[58] = "Id Pregunta: 5707. MAP 2008 A2";


//  Id pregunta: 5746 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Qu&eacute; es el efecto avalancha en una funci&oacute;n hash?";
 choices[59]= new Array();
 choices[59][0] = "Una peque&ntilde;a variaci&oacute;n en la longitud del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[59][1] = "Una peque&ntilde;a variaci&oacute;n del contenido del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[59][2] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una peque&ntilde;a variaci&oacute;n en la longitud del resumen";
 choices[59][3] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una gran variaci&oacute;n en el contenido del resumen";
 answers[59] = choices[59][3];
 units[59] = "72";
 comments[59] = "Id Pregunta: 5746. ";


//  Id pregunta: 5787 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  UMTS en su est&aacute;ndar contempla como posibilidades para transmisi&oacute;n d&uacute;plex:";
 choices[60]= new Array();
 choices[60][0] = "CMDA o TDMA";
 choices[60][1] = "FDD o TDD";
 choices[60][2] = "FDMA u OFDMA";
 choices[60][3] = "TCDMA";
 answers[60] = choices[60][1];
 units[60] = "108";
 comments[60] = "Id Pregunta: 5787. ";


//  Id pregunta: 5814 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Qu&eacute; deber&aacute; publicarse, en todo caso, en el perfil de contratante, seg&uacute;n el RD Legislativo 3/2011 de Contatos del Sector P&uacute;blico(art&iacute;culo 53.2)?";
 choices[61]= new Array();
 choices[61][0] = "Las adjudicaciones definitivas de los contratos";
 choices[61][1] = "Los anuncios de licitaci&oacute;n";
 choices[61][2] = "La adjudicaci&oacute;n provisional de los contratos";
 choices[61][3] = "Las licitaciones abiertas";
 answers[61] = choices[61][2];
 units[61] = "41";
 comments[61] = "Id Pregunta: 5814. ";


//  Id pregunta: 5838 Año de creación de pregunta: 2009-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes NO es una herramienta TAW (Test de Accesibilidad Web)?";
 choices[62]= new Array();
 choices[62][0] = "TAW3 Online";
 choices[62][1] = "TAW3 Web Start";
 choices[62][2] = "TAW3 Onsite";
 choices[62][3] = "TAW3 en un clic";
 answers[62] = choices[62][2];
 units[62] = "39";
 comments[62] = "Id Pregunta: 5838. MAP 2008 A1";


//  Id pregunta: 5991 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Para eliminar una tabla de una base de datos relacional, se utiliza la sentencia DDL:";
 choices[63]= new Array();
 choices[63][0] = "Delete table.";
 choices[63][1] = "rm table.";
 choices[63][2] = "Delete table now.";
 choices[63][3] = "DROP TABLE.";
 answers[63] = choices[63][3];
 units[63] = "58";
 comments[63] = "Id Pregunta: 5991. TIC A 2009";


//  Id pregunta: 5997 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  El derecho moral sobre un programa de ordenador implica que:";
 choices[64]= new Array();
 choices[64][0] = "El que tiene este derecho lo puede ceder o transmitir, con o sin contraprestaci&oacute;n econ&oacute;mica.";
 choices[64][1] = "El que tiene este derecho tambi&eacute;n posee el derecho de explotaci&oacute;n, reproducci&oacute;n, distribuci&oacute;n, comunicaci&oacute;n p&uacute;blica ytransformaci&oacute;n.";
 choices[64][2] = "El que tiene este derecho no lo puede ceder, ni transmitir, ni siquiera renunciar a &eacute;l.";
 choices[64][3] = "El que tiene este derecho puede exigir el derecho de remuneraci&oacute;n por copia privada.";
 answers[64] = choices[64][2];
 units[64] = "36";
 comments[64] = "Id Pregunta: 5997. TIC A 2009";


//  Id pregunta: 6124 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[65]= new Array();
 choices[65][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[65][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[65][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[65][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros";
 answers[65] = choices[65][3];
 units[65] = "86";
 comments[65] = "Id Pregunta: 6124. TIC A 2009";


//  Id pregunta: 6382 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Las normas t&eacute;cnicas de interoperabilidad:";
 choices[66]= new Array();
 choices[66][0] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[66][1] = "Las aprobar&aacute;  la Secretaria de Estado para la Funci&oacute;n P&uacute;blica, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; el Ministerio de la Presidencia mediante Orden Ministerial.";
 choices[66][2] = "Las aprobar&aacute; el Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[66][3] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Real Decreto.";
 answers[66] = choices[66][0];
 units[66] = "43";
 comments[66] = "Id Pregunta: 6382. Disposici&oacute;n adicional primera ENI";


//  Id pregunta: 6414 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Las posibilidades de usar el mecanismo de comprobaci&oacute;n de la legalidad del software, conocido como huella digital se clasifican en diferentes grupos que han aparecido a lo largo del tiempo , &iquest;Cu&aacute;l de los siguientes no es uno de ellos?";
 choices[67]= new Array();
 choices[67][0] = "Sim&eacute;trica";
 choices[67][1] = "Asim&eacute;trica";
 choices[67][2] = "An&oacute;nima";
 choices[67][3] = "Esteganogr&aacute;fica";
 answers[67] = choices[67][3];
 units[67] = "37";
 comments[67] = "Id Pregunta: 6414. ";


//  Id pregunta: 6474 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las plataformas desarrolladas por Java es una plataforma para crear aplicaciones servidor?";
 choices[68]= new Array();
 choices[68][0] = "Plataforma Java Technique Edition (JTE)";
 choices[68][1] = "Plataforma Java  Enterprise Edition (JEE)";
 choices[68][2] = "Plataforma Java Standard Edition (JSE)";
 choices[68][3] = "Plataforma Java Micro Edition (JME)";
 answers[68] = choices[68][1];
 units[68] = "116";
 comments[68] = "Id Pregunta: 6474. Castilla La Mancha 2009";


//  Id pregunta: 6531 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  La Resoluci&oacute;n del 6 de Febrero de 2006 sobre calidad de los servicios en la Administraci&oacute;n, fija distintos programas de actuaci&oacute;n, cu&aacute;l de los siguientes no es uno de ellos?";
 choices[69]= new Array();
 choices[69][0] = "Programa de Cartas de Servicio";
 choices[69][1] = "Programa de Evaluaci&oacute;n de la calidad de las organizaciones";
 choices[69][2] = "Programa de Quejas y Sugerencias";
 choices[69][3] = "Programa de Implantaci&oacute;n de la Calidad";
 answers[69] = choices[69][3];
 units[69] = "92";
 comments[69] = "Id Pregunta: 6531. ";


//  Id pregunta: 6574 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[70]= new Array();
 choices[70][0] = "ICMP trabaja en la capa de enlace";
 choices[70][1] = "ICMP informa a los hosts, routers y otros dispositivos de problemas en la red";
 choices[70][2] = "ICMP es el principal componente de la utilidad ping";
 choices[70][3] = "Todas las respuestas anteriores son correctas";
 answers[70] = choices[70][0];
 units[70] = "100";
 comments[70] = "Id Pregunta: 6574. ";


//  Id pregunta: 7158 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Entre las funciones de un sistema operativo se encuentra la gesti&oacute;n de procesos. Seleccione cual de las siguientes afirmaciones es correcta:";
 choices[71]= new Array();
 choices[71][0] = "Cualquier proceso puede causar la terminaci&oacute;n de otro proceso realizando una llamada al sistema";
 choices[71][1] = "Si un proceso se encuentra en estado &quot;Terminado&quot; (o Finalizado) significa que se ha ejecutado en su totalidad";
 choices[71][2] = "Se dice que un proceso se encuentra en estado &quot;Zombi&quot; cuando est&aacute; esperando a que otro proceso termine de ejecutarse";
 choices[71][3] = "Cuando un nuevo usuario entra en el sistema se crea un nuevo proceso que quedar&aacute; en estado &quot;listo&quot; (preparado para se ejecutado)";
 answers[71] = choices[71][3];
 units[71] = "52";
 comments[71] = "Id Pregunta: 7158. Examen TIC B 2009";


//  Id pregunta: 7279 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  Una maqueta virtual se puede definir como ";
 choices[72]= new Array();
 choices[72][0] = "Un programa inform&aacute;tico que simula el funcionamiento de un terminal de un ordenador central ";
 choices[72][1] = "Un prototipo de aplicaci&oacute;n";
 choices[72][2] = "Un tipo de virtualizaci&oacute;n de servidor";
 choices[72][3] = "Un servidor de terminales";
 answers[72] = choices[72][0];
 units[72] = "119";
 comments[72] = "Id Pregunta: 7279. ";


//  Id pregunta: 7881 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   El protocolo IPv6 (Internet Protocol version 6";
 choices[73]= new Array();
 choices[73][0] = "Tiene direcciones de red de 64 bits de longitud.";
 choices[73][1] = "Recomienda que si el datagrama tiene varias cabeceras de extensi&oacute;n, la cabecera de encaminamiento (routing header) aparezca siempre antes que la cabecera de opciones salto a salto (hop-by-hop header).";
 choices[73][2] = "Aunque su cabecera es m&aacute;s grande que la del protocolo IPv4 (Internet Protocol version 4), tiene menos campos. Esto hace que, por lo general, los routers (encaminadores) realicen menos procesamiento sobre los datagramas, consiguiendo as&iacute; un encaminamiento m&aacute;s eficiente.";
 choices[73][3] = "El campo etiqueta de flujo (flow label) basta para identificar un&iacute;vocamente a un flujo de paquetes.";
 answers[73] = choices[73][2];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7881. Map 2006";


//  Id pregunta: 7895 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   Seg&uacute;n la norma espa&ntilde;ola UNE 66-904, que recoge los costes totales de calidad, el &laquo;coste resultante de un bien o servicio que no cumple los requisitos de calidad, y cuyo fallo se pone de manifiesto antes de su entrega&raquo;, es un:";
 choices[74]= new Array();
 choices[74][0] = "Costes de prevenci&oacute;n";
 choices[74][1] = "Coste de fallos internos";
 choices[74][2] = "Coste de evaluaci&oacute;n";
 choices[74][3] = "Coste de fallos externos";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7895. Map 2006";


//  Id pregunta: 7896 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   anulada";
 choices[75]= new Array();
 choices[75][0] = " anulada";
 choices[75][1] = " anulada";
 choices[75][2] = " anulada";
 choices[75][3] = " anulada";
 answers[75] = choices[75][1];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 7896. Map 2006";


//  Id pregunta: 7970 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)   En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[76]= new Array();
 choices[76][0] = " Polimorfismo.";
 choices[76][1] = " Herencia.";
 choices[76][2] = " Reusabilidad.";
 choices[76][3] = " Encapsulaci&oacute;n.";
 answers[76] = choices[76][3];
 units[76] = "NULL";
 comments[76] = "Id Pregunta: 7970. Map 2007";


//  Id pregunta: 8092 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)   &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA para el programa IDABC?";
 choices[77]= new Array();
 choices[77][0] = " Es gestionado por el Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE).";
 choices[77][1] = " Se configura como el instrumento clave para llevar a cabo lo previsto en el Plan de Acci&oacute;n eEurope 2005 y sucesivos sobre el desarrollo de servicios paneuropeos.";
 choices[77][2] = " Ejecuta lo previsto en la Decisi&oacute;n 2004/387/CE del Consejo UE y PE.";
 choices[77][3] = " El proyecto complementario IDABD extiende esta normativa a particulares y empresas.";
 answers[77] = choices[77][3];
 units[77] = "NULL";
 comments[77] = "Id Pregunta: 8092. Map 2008";


//  Id pregunta: 8470 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  La regla 2 de Codd es la del:";
 choices[78]= new Array();
 choices[78][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[78][1] = "Acceso garantizado";
 choices[78][2] = "Actualizaci&oacute;n de vistas";
 choices[78][3] = "Integridad referencial";
 answers[78] = choices[78][1];
 units[78] = "57,58";
 comments[78] = "Id Pregunta: 8470. Analista Ayto. Madrid 2010";


//  Id pregunta: 8471 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la velocidad del est&aacute;ndar USB 3.0?:";
 choices[79]= new Array();
 choices[79][0] = "600 MB/s";
 choices[79][1] = "480 MB/s";
 choices[79][2] = "4800 MB/s";
 choices[79][3] = "1092 MB/s";
 answers[79] = choices[79][0];
 units[79] = "47";
 comments[79] = "Id Pregunta: 8471. Analista Ayto. Madrid 2010";


//  Id pregunta: 8542 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es el est&aacute;ndar europeo de TDT?";
 choices[80]= new Array();
 choices[80][0] = "ISDB.";
 choices[80][1] = "MPEG-2";
 choices[80][2] = "DVB-T";
 choices[80][3] = "EDTV";
 answers[80] = choices[80][2];
 units[80] = "105";
 comments[80] = "Id Pregunta: 8542. Examen TIC A2 2010 interna";


//  Id pregunta: 8618 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[81]= new Array();
 choices[81][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[81][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[81][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[81][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[81] = choices[81][2];
 units[81] = "57,58";
 comments[81] = "Id Pregunta: 8618. Examen TIC A2 2010 interna";


//  Id pregunta: 8683 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  En el subsistema de Operaci&oacute;n y Mantenimiento de GSM existe una Base de Datos denominada EIR (Equipment Identity Register). &iquest;Cu&aacute;l es su funci&oacute;n?";
 choices[82]= new Array();
 choices[82][0] = "Guardar la informaci&oacute;n de los m&oacute;viles bajo su &aacute;rea de cobertura en ese momento.";
 choices[82][1] = "Guardar la informaci&oacute;n de los m&oacute;viles que est&aacute;n autorizado para usar a red.";
 choices[82][2] = "Guardar la informaci&oacute;n de los m&oacute;viles que tienen prohibido utilizar- la red por alg&uacute;n motivo.";
 choices[82][3] = "Base de datos con la facturaci&oacute;n del m&oacute;vil que est&aacute; haciendo uso de la red.";
 answers[82] = choices[82][2];
 units[82] = "108";
 comments[82] = "Id Pregunta: 8683. Examen UPM A2 2011";


//  Id pregunta: 8746 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  En el contexto de la Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, un ciudadano es:";
 choices[83]= new Array();
 choices[83][0] = "Es siempre una persona f&iacute;sica o una persona jur&iacute;dica";
 choices[83][1] = "Siempre es una persona f&iacute;sica, aunque sea representando a una persona jur&iacute;dica.";
 choices[83][2] = "Siempre son personas jur&iacute;dicas, y las personas f&iacute;sicas se entienden como entes sin personalidad.";
 choices[83][3] = "Una persona f&iacute;sica, una persona jur&iacute;dica o. incluso, un ente sin personalidad";
 answers[83] = choices[83][3];
 units[83] = "43";
 comments[83] = "Id Pregunta: 8746. Examen TIC A2 2010 interna";


//  Id pregunta: 8782 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, se entiende por documento electr&oacute;nico:";
 choices[84]= new Array();
 choices[84][0] = "El conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[84][1] = "El conjunto de elementos intervinientes en la creaci&oacute;n de una firma electr&oacute;nica.";
 choices[84][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[84][3] = "El documento firmado electr&oacute;nicamente por un prestador de servicios de certificaci&oacute;n que vincula unos datos de verificaci&oacute;n de firma avanzada y confirma su identidad.";
 answers[84] = choices[84][2];
 units[84] = "43";
 comments[84] = "Id Pregunta: 8782. Examen UPM A2 2011";


//  Id pregunta: 8892 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes es uno de los programas del marco general para la mejora de la calidad en la AGE?";
 choices[85]= new Array();
 choices[85][0] = "Programa de Evaluaci&oacute;n de la Calidad de las Organizaciones";
 choices[85][1] = "Programa de Formaci&oacute;n en EFQM";
 choices[85][2] = "Programa de Mejora de la Eficiencia en la Administraci&oacute;n P&uacute;blica";
 choices[85][3] = "Programa de Aseguramiento de la Calidad";
 answers[85] = choices[85][0];
 units[85] = "92";
 comments[85] = "Id Pregunta: 8892. ";


//  Id pregunta: 8986 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes es una recomendaci&oacute;n del formato Facturae";
 choices[86]= new Array();
 choices[86][0] = "Formato de firma XMLDSig ENVELOPED";
 choices[86][1] = "Algoritmo de canonicalizaci&oacute;n C14N";
 choices[86][2] = "Algoritmo de firma RSA sobre SHA1";
 choices[86][3] = "Todas las anteriores";
 answers[86] = choices[86][3];
 units[86] = "70";
 comments[86] = "Id Pregunta: 8986. ";


//  Id pregunta: 9042 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[87]= new Array();
 choices[87][0] = "La &uacute;nica manera de implementar SOA es con un Enterprise Service Bus";
 choices[87][1] = "La &uacute;nica manera de implementar SOA es a trav&eacute;s de servicios Web";
 choices[87][2] = "SOA es un concepto que puede ser implementado de varias formas";
 choices[87][3] = "Todas son incorrectas";
 answers[87] = choices[87][2];
 units[87] = "51";
 comments[87] = "Id Pregunta: 9042. ";


//  Id pregunta: 9062 Año de creación de pregunta: 2025-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes es una infracci&oacute;n muy grave seg&uacute;n la normativa de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[88]= new Array();
 choices[88][0] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal";
 choices[88][1] = "No atender, u obstaculizar de forma sistem&aacute;tica el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n";
 choices[88][2] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello";
 choices[88][3] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos";
 answers[88] = choices[88][2];
 units[88] = "29";
 comments[88] = "Id Pregunta: 9062. ";


//  Id pregunta: 9124 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;Cu&aacute;les son aplicaciones generales para la computaci&oacute;n GRID?";
 choices[89]= new Array();
 choices[89][0] = "S&uacute;per computaci&oacute;n distribuida.";
 choices[89][1] = "Sistemas distribuidos en tiempo real";
 choices[89][2] = "Entornos virtuales de colaboraci&oacute;n (Tele-inmersi&oacute;n)";
 choices[89][3] = "Todas las respuetas anteriores son v&aacute;lidas";
 answers[89] = choices[89][3];
 units[89] = "45";
 comments[89] = "Id Pregunta: 9124. ";


//  Id pregunta: 9152 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Respecto a los LMS, indique la respuesta FALSA: ";
 choices[90]= new Array();
 choices[90][0] = "Permite el an&aacute;lisis de los resultados de la formaci&oacute;n";
 choices[90][1] = "Incluye funciones de gesti&oacute;n de procesos de creaci&oacute;n de contenido";
 choices[90][2] = "Permite el intercambio de datos entre profesores y alumnos";
 choices[90][3] = "Est&aacute; dedicado a la difusi&oacute;n de los contenidos docentes";
 answers[90] = choices[90][1];
 units[90] = "66";
 comments[90] = "Id Pregunta: 9152. ";


//  Id pregunta: 9991 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es el formato al que se tienen que ajustar las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas, de acuerdo con la ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico?";
 choices[91]= new Array();
 choices[91][0] = "e-Factura, versi&oacute;n 2.3";
 choices[91][1] = "Facturae, versi&oacute;n 3.2, y versiones sucesivas que publique el Ministerio de Industria, Turismo y Comercio.";
 choices[91][2] = "Facturae, versi&oacute;n 3.2, hasta que se apruebe Orden Ministerial de Presidencia en que se determine el formato estructurado de la factura electr&oacute;nica";
 choices[91][3] = "ebXML, versi&oacute;n 2.0, hasta que se apruebe la Ley que transpone la Directiva 2006/123/CE sobre actividades de servicio en el mercado interior.";
 answers[91] = choices[91][2];
 units[91] = "70";
 comments[91] = "Id Pregunta: 9991. ";


//  Id pregunta: 10041 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  El est&aacute;ndar ANSI/TIA-942 establece distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). &iquest;Cu&aacute;l es el nivel m&aacute;s exigente?a) Tier 5 b) Tier 4";
 choices[92]= new Array();
 choices[92][0] = "Tier 5 ";
 choices[92][1] = "Tier 4";
 choices[92][2] = "Tier 3 ";
 choices[92][3] = "Tier 0";
 answers[92] = choices[92][1];
 units[92] = "99";
 comments[92] = "Id Pregunta: 10041. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10177 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Qu&eacute; afirmaci&oacute;n es cierta en relaci&oacute;n con la orientaci&oacute;n a objetos?";
 choices[93]= new Array();
 choices[93][0] = "La encapsulaci&oacute;n permite captar las caracter&iacute;sticas esenciales que distinguen a un objeto de otros tipos de objetos, en funci&oacute;n de la perspectiva del observador, y obtener as&iacute; una descripci&oacute;n de la clase de objetos que enfatiza unos detalles y suprimer otros";
 choices[93][1] = "Seg&uacute;n Grady Booch, un objeto o instancia de una clase tiene estado, comportamiento e identidad";
 choices[93][2] = "Los lenguajes OO son lenguajes fuertemente tipados que no soportan el enlace din&aacute;mico en tiempo de ejecuci&oacute;n, para invocar operaciones en objetos obviando el tipo actual de &eacute;stos";
 choices[93][3] = "El polimorfismo se expresa &uacute;nicamente a trav&eacute;s del uso de un mismo nombre de m&eacute;todo o funci&oacute;n con distintos argumentos o un mismo operador con distintas funcionalidades";
 answers[93] = choices[93][1];
 units[93] = "82";
 comments[93] = "Id Pregunta: 10177. ";


//  Id pregunta: 10198 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Bluetooth 2.0 incluye un mecanismo llamado EDR (Enhanced Data Rate) para incrementar la velocidad de transmisi&oacute;n. Indique cual es la m&aacute;xima velocidad que se alcanza con este mecanismo:";
 choices[94]= new Array();
 choices[94][0] = "3 Mbps";
 choices[94][1] = "2 Mbps";
 choices[94][2] = "5 Mbps";
 choices[94][3] = "1 Mbps";
 answers[94] = choices[94][0];
 units[94] = "107";
 comments[94] = "Id Pregunta: 10198. 3 Mbps se alcanza usando la modulaci&oacute;n 8DPSK, mientras que con la modulaci&oacute;n pi/4-DQPSK se alcanzan 2 Mbps";


//  Id pregunta: 10222 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Conociendo que la variablees de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:";
 choices[95]= new Array();
 choices[95][0] = "Da un error de compilaci&oacute;n";
 choices[95][1] = "true";
 choices[95][2] = "false";
 choices[95][3] = "12";
 answers[95] = choices[95][1];
 units[95] = "60";
 comments[95] = "Id Pregunta: 10222. ";


//  Id pregunta: 10343 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta correcta:";
 choices[96]= new Array();
 choices[96][0] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[96][1] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[96][2] = "La correcci&oacute;n de errores de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, cuando sea necesario para la utilizaci&oacute;n del programa por parte del usuario seg&uacute;n su finalidad prevista";
 choices[96][3] = "Todas las respuestas anteriores son falsas";
 answers[96] = choices[96][2];
 units[96] = "36";
 comments[96] = "Id Pregunta: 10343. Consultar Art. 100 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10431 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En la arquitectura SOA (Arquitectura Orientada a Servicios)";
 choices[97]= new Array();
 choices[97][0] = "se hace incompatible el uso de servicios web.";
 choices[97][1] = "los servicios encapsulan sus funcionalidades. ";
 choices[97][2] = "los servicios mantienen un fuerte acoplamiento.";
 choices[97][3] = "os servicios dependen fuertemente de la plataforma subyacente.";
 answers[97] = choices[97][1];
 units[97] = "51";
 comments[97] = "Id Pregunta: 10431. Examen TIC A1 2013";


//  Id pregunta: 10441 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En el &aacute;mbito de COBIT, el proceso de Administrar la Calidad se encuentra encuadrado en el dominio de ";
 choices[98]= new Array();
 choices[98][0] = "Planificaci&oacute;n y organizaci&oacute;n.";
 choices[98][1] = "Adquisici&oacute;n e implementaci&oacute;n.";
 choices[98][2] = "Entrega (de servicio) y Soporte. ";
 choices[98][3] = "Monitorizaci&oacute;n.";
 answers[98] = choices[98][0];
 units[98] = "98";
 comments[98] = "Id Pregunta: 10441. Examen TIC A1 2013";


//  Id pregunta: 10532 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes grupos de propiedades son caracter&iacute;sticos de Cloud Computing?";
 choices[99]= new Array();
 choices[99][0] = "tenencia m&uacute;ltiple, escalabilidad, elasticidad, independencia de la localizaci&oacute;n";
 choices[99][1] = "A) m&aacute;s reusabilidad";
 choices[99][2] = "B) m&aacute;s interoperabilidad";
 choices[99][3] = "C) m&aacute;s desacoplamiento";
 answers[99] = choices[99][0];
 units[99] = "47";
 comments[99] = "Id Pregunta: 10532. ";


