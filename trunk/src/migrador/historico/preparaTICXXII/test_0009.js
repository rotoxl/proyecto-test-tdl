/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 187 Año de creación de pregunta: 2004-01-01
 questions[0]= "1)  Cu&aacute;l de las siguientes no es una funci&oacute;n del auditor de Sistemas de Informaci&oacute;n";
 choices[0]= new Array();
 choices[0][0] = "An&aacute;lisis de requisitos y especificaci&oacute;n funcional";
 choices[0][1] = "Evaluaci&oacute;n de los planes de implantaci&oacute;n de sistemas y mejoras de los existentes.";
 choices[0][2] = "Evaluaci&oacute;n de riesgos";
 choices[0][3] = "Evaluaci&oacute;n de controles en los sistemas de informaci&oacute;n";
 answers[0] = choices[0][0];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 187. Similar a examen TIC SS A 2003";


//  Id pregunta: 341 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  La red de comunicaci&oacute;n en rueda de una organizaci&oacute;n es:";
 choices[1]= new Array();
 choices[1][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[1][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[1][2] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;d&rsquo; son falsas";
 choices[1][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[1] = choices[1][2];
 units[1] = "23";
 comments[1] = "Id Pregunta: 341. ";


//  Id pregunta: 349 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La Uni&oacute;n Internacional de Telecomunicaciones (en ingl&eacute;s ITU) tiene tres sectores principales. &iquest; Cu&aacute;l no es uno de ellos?:";
 choices[2]= new Array();
 choices[2][0] = "Sector de Radiocomunicaciones (ITU-R)";
 choices[2][1] = "Sector de Estandarizaci&oacute;n de Telecomunicaciones (ITU-T)";
 choices[2][2] = "Sector de Desarrollo (ITU-D)";
 choices[2][3] = "Todas son secciones de la Uni&oacute;n Internacional de Comunicaciones";
 answers[2] = choices[2][3];
 units[2] = "42";
 comments[2] = "Id Pregunta: 349. ";


//  Id pregunta: 558 Año de creación de pregunta: 2006-01-01
 questions[3]= "4)  Cualquier sistema de informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "No es independiente de los objetivos de la organizaci&oacute;n.";
 choices[3][1] = "Debe estar interrelacionado con los dem&aacute;s sistemas de la organizaci&oacute;n.";
 choices[3][2] = "No es independiente de las estrategias de la organizaci&oacute;n.";
 choices[3][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[3] = choices[3][3];
 units[3] = "21";
 comments[3] = "Id Pregunta: 558. ";


//  Id pregunta: 569 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  Qu&eacute; se entiende como conocimiento t&aacute;cito";
 choices[4]= new Array();
 choices[4][0] = "Es un tipo de conocimiento formalizado, necesario para realizar una correcta &quot;gesti&oacute;n del conocimiento&quot; en las organizaciones";
 choices[4][1] = "Es el conocimiento objetivo y racional que puede ser expresado en palabras, oraciones, n&uacute;meros o f&oacute;rmulas, en general independiente de contexto alguno";
 choices[4][2] = "Es conocimiento altamente personal y f&iacute;cilmente transferible o comunicable. ";
 choices[4][3] = "Es aquel que se encuentra en la mente de las personas producto de la experiencia, la sabidur&iacute;a, la creatividad";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 569. ";


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


//  Id pregunta: 1195 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indique una caracter&iacute;stica falsa de Java:";
 choices[6]= new Array();
 choices[6][0] = "Es interpretado y portable a distintas plataformas";
 choices[6][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[6][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[6][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[6] = choices[6][3];
 units[6] = "60";
 comments[6] = "Id Pregunta: 1195. JCED - Preparatic XVII";


//  Id pregunta: 1217 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  La definici&oacute;n de PKI, seg&uacute;n IETF - PKIX es:";
 choices[7]= new Array();
 choices[7][0] = "El conjunto de hardware, software, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[7][1] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar y almacenarcertificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[7][2] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[7][3] = "El conjunto de pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 answers[7] = choices[7][2];
 units[7] = "74";
 comments[7] = "Id Pregunta: 1217. ";


//  Id pregunta: 1835 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es un DTD?";
 choices[8]= new Array();
 choices[8][0] = "Define la forma en que los documentos XML deben conectarse entre s&iacute;";
 choices[8][1] = "Descripci&oacute;n del formato en el que se desea que aparezcan las entidades definidas en un documento";
 choices[8][2] = "Definici&oacute;n de la gram&aacute;tica de un documento";
 choices[8][3] = "Permite controlar el formato de los documentos HTML con descripciones particulares";
 answers[8] = choices[8][2];
 units[8] = "69";
 comments[8] = "Id Pregunta: 1835. ";


//  Id pregunta: 2025 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  Son lenguajes que al menos en sus &uacute;ltimos est&aacute;ndares soportan la programaci&oacute;n orientada a objetos:";
 choices[9]= new Array();
 choices[9][0] = "C++, COBOL, FORTRAN, Ada.";
 choices[9][1] = "Java, Lisp, Algol, Eiffel.";
 choices[9][2] = "C++, Java, Eiffel, Smalltalk.";
 choices[9][3] = "C++, Smalltalk, Eiffel, REXX.";
 answers[9] = choices[9][2];
 units[9] = "82,84";
 comments[9] = "Id Pregunta: 2025. Examen TIC MAP B 2004";


//  Id pregunta: 2038 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  En el Modelo de Excelencia de la EFQM, &iquest;Cu&aacute;l de los siguientes no es un criterio de calidad que act&uacute;e como agente facilitador del &eacute;xito?";
 choices[10]= new Array();
 choices[10][0] = "Liderazgo";
 choices[10][1] = "Pol&iacute;ticas y Estrategias";
 choices[10][2] = "Satisfacci&oacute;n del Personal";
 choices[10][3] = "Todos son agentes facilitadores";
 answers[10] = choices[10][2];
 units[10] = "92";
 comments[10] = "Id Pregunta: 2038. ";


//  Id pregunta: 2243 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Cuando se ejecuta un programa OO (Orientado a Objetos) ocurren tres tipos de sucesos, identifique el incorrecto:";
 choices[11]= new Array();
 choices[11][0] = "Se crean objetos cuando se necesitan.";
 choices[11][1] = "Los mensajes se mueven de un objeto a otro, o desde un usuario a un objeto, seg&uacute;n se va procesando informaci&oacute;n o respondiendo a entradas de usuario.";
 choices[11][2] = "Se borran los objetos cuando ya no son necesarios.";
 choices[11][3] = "Se renombran los objetos cuando ya no son necesarios.";
 answers[11] = choices[11][3];
 units[11] = "82,84";
 comments[11] = "Id Pregunta: 2243. ";


//  Id pregunta: 2737 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  &iquest;Cuando decimos que una entidad est&aacute; en 3FN?";
 choices[12]= new Array();
 choices[12][0] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave tiene una dependencia funcional completa de la clave.";
 choices[12][1] = "Si est&aacute; en 2FN y no contiene grupos repetitivos.";
 choices[12][2] = "Si est&aacute; en 2FN y no contiene atributos multivaluados.";
 choices[12][3] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave no depende transitivamente de dicha clave.";
 answers[12] = choices[12][3];
 units[12] = "58";
 comments[12] = "Id Pregunta: 2737. ";


//  Id pregunta: 2862 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Qu&eacute; pretende la CE con los principios ONP?";
 choices[13]= new Array();
 choices[13][0] = " la definici&oacute;n de un conjunto de medidas reguladoras para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[13][1] = " la definici&oacute;n de un conjunto de medidas  t&eacute;cnicas para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[13][2] = " la definici&oacute;n de un conjunto de medidas econ&oacute;micas para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[13][3] = "Todas ellas";
 answers[13] = choices[13][3];
 units[13] = "30";
 comments[13] = "Id Pregunta: 2862. ";


//  Id pregunta: 2983 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  En la redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[14]= new Array();
 choices[14][0] = "Un ordenador se conecta al siguiente y el &uacute;ltimo al primero, formando un circulo cerrado";
 choices[14][1] = "Existe un nodo raiz del que cuelgan uno o varios nodos";
 choices[14][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[14][3] = "Cada uno de los nodos est&aacute; conectado con todos los demas";
 answers[14] = choices[14][2];
 units[14] = "101";
 comments[14] = "Id Pregunta: 2983. ";


//  Id pregunta: 3145 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta para un sistema intermedio o encaminador (router) de una red IP?:";
 choices[15]= new Array();
 choices[15][0] = "Un encaminador o router no puede fragmentar un datagrama";
 choices[15][1] = "Puede fragmentar un datagrama si es necesario pero no puede reensamblar los fragmentos";
 choices[15][2] = "Puede tanto fragmentar un datagrama como reensamblar los fragmentos";
 choices[15][3] = "Solo puede reensamblar los paquetes TCP orientados a conexi&oacute;n";
 answers[15] = choices[15][2];
 units[15] = "102";
 comments[15] = "Id Pregunta: 3145. ";


//  Id pregunta: 3342 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Con un &quot;m&oacute;dem&quot; RDSI, la llamada:";
 choices[16]= new Array();
 choices[16][0] = "Se establece cada vez que se intercambian datos";
 choices[16][1] = "Est&aacute; siempre establecida";
 choices[16][2] = "Puede ser configurable cu&aacute;ndo se quiere que se establezca la llamada";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][2];
 units[16] = "103,104,109";
 comments[16] = "Id Pregunta: 3342. ";


//  Id pregunta: 3440 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  El protocolo ARP es:";
 choices[17]= new Array();
 choices[17][0] = "Automatic Resolution Protocol, Protocolo de resoluci&oacute;n autom&aacute;tica";
 choices[17][1] = "Adress Reservation Protocol, protocolo de reserva de direcciones";
 choices[17][2] = "Address Resolution Protocol, protocolo de resoluci&oacute;n de direcciones";
 choices[17][3] = "Automatic Response Protocol, protocolo de respuesta autom&aacute;tica";
 answers[17] = choices[17][2];
 units[17] = "102";
 comments[17] = "Id Pregunta: 3440. ";


//  Id pregunta: 3670 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Una de las funciones de la Gesti&oacute;n de Red es la Funci&oacute;n de Contabilidad Indicar cu&aacute;l de las siguientes tareas no corresponde a esta funci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Evaluar el grado de utilizaci&oacute;n de la red";
 choices[18][1] = "Establecimiento de prioridades y fijaci&oacute;n de franjas de uso de la red";
 choices[18][2] = "Controlar el uso abusivo de determinados elementos";
 choices[18][3] = "Evaluar el rendimiento y calidad de servicio de la red";
 answers[18] = choices[18][3];
 units[18] = "104";
 comments[18] = "Id Pregunta: 3670. ";


//  Id pregunta: 3914 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  En un entorno de red, un pinchado de l&iacute;nea puede causar:";
 choices[19]= new Array();
 choices[19][0] = "Uso excesivo de CPU";
 choices[19][1] = "Acceso no autorizado a datos";
 choices[19][2] = "a) y b)";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][1];
 units[19] = "111";
 comments[19] = "Id Pregunta: 3914. ";


//  Id pregunta: 4082 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  El protocolo y puerto empleado para la transferencia de p&aacute;ginas web es";
 choices[20]= new Array();
 choices[20][0] = "html y 80";
 choices[20][1] = "http y 80";
 choices[20][2] = "http y 8080";
 choices[20][3] = "ftp y 80";
 answers[20] = choices[20][1];
 units[20] = "113";
 comments[20] = "Id Pregunta: 4082. ";


//  Id pregunta: 4306 Año de creación de pregunta: 2007-01-01
 questions[21]= "22)  El sistema m&aacute;s econ&oacute;mico y sencillo para proporcionar autenticaci&oacute;n y autorizaci&oacute;n es:";
 choices[21]= new Array();
 choices[21][0] = "Utilizaci&oacute;n de passwords (palabras de paso).";
 choices[21][1] = "Utilizaci&oacute;n de certificados digitales";
 choices[21][2] = "Utilizaci&oacute;n de mecanismos biom&eacute;tricos.";
 choices[21][3] = "Utilizaci&oacute;n de un cortafuego (firewall).";
 answers[21] = choices[21][0];
 units[21] = "74";
 comments[21] = "Id Pregunta: 4306. ";


//  Id pregunta: 4341 Año de creación de pregunta: 2007-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de comunicaciones fue originalmente concebido como el est&aacute;ndar militar MIL-STD-1778?:";
 choices[22]= new Array();
 choices[22][0] = "IEEE 802.3.";
 choices[22][1] = "IEEE 802.11b.";
 choices[22][2] = "CCITT X 25.";
 choices[22][3] = "TCP.";
 answers[22] = choices[22][3];
 units[22] = "99";
 comments[22] = "Id Pregunta: 4341. ";


//  Id pregunta: 4461 Año de creación de pregunta: 2007-01-01
 questions[23]= "24)  Es un est&aacute;ndar de e-learning: ";
 choices[23]= new Array();
 choices[23][0] = "IEEE";
 choices[23][1] = "ADL";
 choices[23][2] = "LMS";
 choices[23][3] = "SCORM";
 answers[23] = choices[23][3];
 units[23] = "66";
 comments[23] = "Id Pregunta: 4461. ";


//  Id pregunta: 4704 Año de creación de pregunta: 2007-01-01
 questions[24]= "25)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ..";
 choices[24]= new Array();
 choices[24][0] = "el servidor tiene un built-in de JVM.";
 choices[24][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente";
 choices[24][2] = "el navegador tiene un built-in de JVM";
 choices[24][3] = "los applets no necesitan una JVM.";
 answers[24] = choices[24][2];
 units[24] = "60";
 comments[24] = "Id Pregunta: 4704. Examen 2006 JCYL";


//  Id pregunta: 4905 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  El formato de compresi&oacute;n de video DivX est&aacute; basado en:";
 choices[25]= new Array();
 choices[25][0] = "Apple QuickTime.";
 choices[25][1] = "HDMI/Blu-Ray.";
 choices[25][2] = "MPEG-4 parte 2.";
 choices[25][3] = "MP3 eXtended Revision.";
 answers[25] = choices[25][2];
 units[25] = "114";
 comments[25] = "Id Pregunta: 4905. Examen TIC B 2007";


//  Id pregunta: 5034 Año de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes es un componente de la versi&oacute;n 2 del &quot;framework&quot; .NET de Microsoft?";
 choices[26]= new Array();
 choices[26][0] = "Visual Studio";
 choices[26][1] = "CLR (Common Language Runtime)";
 choices[26][2] = "BizTalk";
 choices[26][3] = "SQL Server";
 answers[26] = choices[26][1];
 units[26] = "59";
 comments[26] = "Id Pregunta: 5034. Examen TIC A 2007";


//  Id pregunta: 5074 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[27]= new Array();
 choices[27][0] = "El W3C tiene una sede en Espa&ntilde;a";
 choices[27][1] = "W3C es un organismo estadounidense";
 choices[27][2] = "El Ministerio de Administraciones P&uacute;blicas es miembro del W3C";
 choices[27][3] = "W3C ha desarrollado mecanismos para evaluar el nivel de accesibilidad de los sitios Web";
 answers[27] = choices[27][1];
 units[27] = "39";
 comments[27] = "Id Pregunta: 5074. Examen TIC A 2007";


//  Id pregunta: 5422 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[28]= new Array();
 choices[28][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[28][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[28][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[28][3] = "La citada ley no hace referencia a tal concepto";
 answers[28] = choices[28][2];
 units[28] = "36";
 comments[28] = "Id Pregunta: 5422. Castilla y Le&oacute;n";


//  Id pregunta: 5764 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  Seg&uacute;n Bennet, Lientz y Swanson:";
 choices[29]= new Array();
 choices[29][0] = "El mantenimiento perfectivo son las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia.";
 choices[29][1] = "El mantenimiento evolutivo son las incorporaciones, modificaciones y eliminaciones necesarias en un producto software para cubrir la expansi&oacute;n o cambio en las necesidades del usuario.";
 choices[29][2] = "El mantenimiento preventivo es la realizaci&oacute;n del mantenimiento anticip&aacute;ndose a problemas futuros.";
 choices[29][3] = "El mantenimiento adaptativo son las modificaciones que afectan a los entornos en los que el sistema opera, como por ejemplo la configuraci&oacute;n del hardware.";
 answers[29] = choices[29][2];
 units[29] = "90";
 comments[29] = "Id Pregunta: 5764. ";


//  Id pregunta: 5852 Año de creación de pregunta: 2009-01-01
 questions[30]= "31)  Se&ntilde;ale la respuesta correcta sobre la firma digital:";
 choices[30]= new Array();
 choices[30][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[30][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[30][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC";
 choices[30][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste";
 answers[30] = choices[30][1];
 units[30] = "30";
 comments[30] = "Id Pregunta: 5852. Pregunta 32";


//  Id pregunta: 5973 Año de creación de pregunta: 2010-01-01
 questions[31]= "32)  Cu&aacute;l de las siguientes afirmaciones es aplicable a la reingenier&iacute;a basada en &quot;wrapping&quot;:";
 choices[31]= new Array();
 choices[31][0] = "&quot;Wrapping&quot; consiste en envolver interfaces basadas en texto con un entorno gr&aacute;fico basado en GUI o en HTML.";
 choices[31][1] = "La t&eacute;cnica &quot;wrapping&quot; es actualmente conocida como modernizaci&oacute;n de caja blanca.";
 choices[31][2] = "&quot;Wrapping&quot; es una reingenier&iacute;a en las que s&oacute;lo se analizan las interfaces (las entradas y salidas) del &quot;legacy&quot; ignorandolos detalles internos.";
 choices[31][3] = "&quot;Wrapping&quot; es una reingenier&iacute;a mediante la cual se produce documentaci&oacute;n retroactivamente desde un sistema existente.";
 answers[31] = choices[31][2];
 units[31] = "91";
 comments[31] = "Id Pregunta: 5973. TIC A 2009";


//  Id pregunta: 6076 Año de creación de pregunta: 2010-01-01
 questions[32]= "33)  &iquest;En cu&aacute;ntos 'niveles de madurez' se agrupan las &aacute;reas de Proceso del modelo de capacidad y madurez CMM?";
 choices[32]= new Array();
 choices[32][0] = "4.";
 choices[32][1] = "5.";
 choices[32][2] = "3.";
 choices[32][3] = "No existe tal concepto.";
 answers[32] = choices[32][1];
 units[32] = "27";
 comments[32] = "Id Pregunta: 6076. ";


//  Id pregunta: 6147 Año de creación de pregunta: 2010-01-01
 questions[33]= "34)  El ADM (M&eacute;todo de diagramaci&oacute;n con flechas):";
 choices[33]= new Array();
 choices[33][0] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza casillas o rect&aacute;ngulos, denominados nodos, para representar actividades, que se conectan con flechas que muestran las dependencias.";
 choices[33][1] = "A y C son correctas.";
 choices[33][2] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza flechas para representar las actividades, que se conectan en nodos para mostrar sus dependencias.";
 choices[33][3] = "Ninguna de las anteriores es correcta";
 answers[33] = choices[33][2];
 units[33] = "28";
 comments[33] = "Id Pregunta: 6147. ";


//  Id pregunta: 6199 Año de creación de pregunta: 2010-01-01
 questions[34]= "35)  De acuerdo con M&eacute;trica v3, en la actividad &quot;Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n&quot; del Mantenimiento de Sistemas de Informaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de realizar las pruebas de regresi&oacute;n";
 choices[34][1] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de comenzar el cambio en desarrollo";
 choices[34][2] = "La aprobaci&oacute;n de la petici&oacute;n se realiza al finalizar las pruebas de regresi&oacute;n y despu&eacute;s de comprobar que todo lo que ha sido modificado, o puede verse afectado por el cambio, funciona correctamente";
 choices[34][3] = "La aprobaci&oacute;n de la petici&oacute;n no es necesaria si se ha comprobado que s&oacute;lo se han modificado los elementos que se ven afectados por el cambio y que se han realizado las pruebas de integraci&oacute;n y del sistema";
 answers[34] = choices[34][2];
 units[34] = "86";
 comments[34] = "Id Pregunta: 6199. TIC-B 2009, bloque desarrollo";


//  Id pregunta: 6284 Año de creación de pregunta: 2010-01-01
 questions[35]= "36)  &iquest;Qu&eacute; es un Plan de Sistemas?";
 choices[35]= new Array();
 choices[35][0] = "Un an&aacute;lisis de la situaci&oacute;n actual del &aacute;rea de sistemas de una organizaci&oacute;n";
 choices[35][1] = "Un manual de usuario para los clientes de aplicaciones inform&aacute;ticas de una organizaci&oacute;n";
 choices[35][2] = "Un plan de riesgos de sistemas de informaci&oacute;n";
 choices[35][3] = "Un documento que recoge el conjunto de medidas dirigidas a satisfacer las necesidades en materia de tratamiento automatizado de informaci&oacute;n de una organizaci&oacute;n";
 answers[35] = choices[35][3];
 units[35] = "77";
 comments[35] = "Id Pregunta: 6284. ";


//  Id pregunta: 6440 Año de creación de pregunta: 2010-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes m&oacute;dulos no forma parte del ERP Oracle Applications?";
 choices[36]= new Array();
 choices[36][0] = "Oracle Payables";
 choices[36][1] = "Oracle Inventory";
 choices[36][2] = "Oracle Receivables";
 choices[36][3] = "Oracle Customers.";
 answers[36] = choices[36][3];
 units[36] = "65";
 comments[36] = "Id Pregunta: 6440. ";


//  Id pregunta: 6561 Año de creación de pregunta: 2010-01-01
 questions[37]= "38)  GSM se caracteriza por";
 choices[37]= new Array();
 choices[37][0] = "Enlace ascendente 880-905 MHz";
 choices[37][1] = "Enlace ascendente 890-915 MHz";
 choices[37][2] = "Enlace descendente 890-915 MHz";
 choices[37][3] = "Todas las respuestas anteriores son incorrectos";
 answers[37] = choices[37][1];
 units[37] = "108";
 comments[37] = "Id Pregunta: 6561. ";


//  Id pregunta: 6577 Año de creación de pregunta: 2010-01-01
 questions[38]= "39)  El filtrado de paquetes no proporciona";
 choices[38]= new Array();
 choices[38][0] = "Bajo nivel de seguridad";
 choices[38][1] = "Protecci&oacute;n sobre la capa de red";
 choices[38][2] = "Alto rendimiento y escalabilidad";
 choices[38][3] = "Todas las respuestas anteriores son correctas";
 answers[38] = choices[38][1];
 units[38] = "111";
 comments[38] = "Id Pregunta: 6577. ";


//  Id pregunta: 6589 Año de creación de pregunta: 2010-01-01
 questions[39]= "40)  Para ficheros a los que aplican las medidas de seguridad de nivel medio debe llevarse a cabo una auditor&iacute;a, al menos";
 choices[39]= new Array();
 choices[39][0] = "Debe ser externa";
 choices[39][1] = "Bianual";
 choices[39][2] = "Bienal";
 choices[39][3] = "Todas las respuestas anteriores son incorrectas";
 answers[39] = choices[39][2];
 units[39] = "29";
 comments[39] = "Id Pregunta: 6589. ";


//  Id pregunta: 7248 Año de creación de pregunta: 2010-01-01
 questions[40]= "41)  En el protocolo IPv6, las direcciones constan de:";
 choices[40]= new Array();
 choices[40][0] = "6 bytes";
 choices[40][1] = "8 bytes";
 choices[40][2] = "16 bytes";
 choices[40][3] = "32 bytes";
 answers[40] = choices[40][2];
 units[40] = "100";
 comments[40] = "Id Pregunta: 7248. Examen TIC B 2009";


//  Id pregunta: 7281 Año de creación de pregunta: 2010-01-01
 questions[41]= "42)  Los dos enfoques m&aacute;s habituales de la virtuailzaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[41]= new Array();
 choices[41][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[41][1] = "Acoplada y mediante hipervisor (bare metal)";
 choices[41][2] = "Paralela y mediante hipervisor (bare metal)";
 choices[41][3] = "Acoplada y mediante CPM (Cross Platform Manager)";
 answers[41] = choices[41][0];
 units[41] = "119";
 comments[41] = "Id Pregunta: 7281. Examen TIC B 2009";


//  Id pregunta: 8165 Año de creación de pregunta: 2011-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l es la vigencia temporal de los certificados electr&oacute;nicos contenidos en el DNIe?:";
 choices[42]= new Array();
 choices[42][0] = "Ilimitada.";
 choices[42][1] = "Duran tanto como el documento f&iacute;sico ( 5 o 10 a&ntilde;os).";
 choices[42][2] = "30 meses.";
 choices[42][3] = "El certificado de autenticidad 24 meses y el de firma 18.";
 answers[42] = choices[42][2];
 units[42] = "74";
 comments[42] = "Id Pregunta: 8165. Examen TIC A1 2010";


//  Id pregunta: 8178 Año de creación de pregunta: 2011-01-01
 questions[43]= "44)  WS-BPEL (Web Service Business Process Execution Language), versi&oacute;n 2.0:";
 choices[43]= new Array();
 choices[43][0] = "Consta de una notaci&oacute;n gr&aacute;fica standard y de un lenguaje ejecutable para especificar interacciones entre servicios web.";
 choices[43][1] = "Permite la especificaci&oacute;n de procesos de negocio abstractos, pero no de procesos de negocio ejecutables.";
 choices[43][2] = "Utiliza XML Schema y WSDL 1.1 para la definici&oacute;n de tipos de datos e interfaces de servicios en la definici&oacute;n de procesos.";
 choices[43][3] = "Es una notaci&oacute;n gr&aacute;fica para la definici&oacute;n de servicios web.";
 answers[43] = choices[43][2];
 units[43] = "71";
 comments[43] = "Id Pregunta: 8178. Examen TIC A1 2010";


//  Id pregunta: 8229 Año de creación de pregunta: 2011-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; definido en el Marco Europeo de Interoperabilidad?:";
 choices[44]= new Array();
 choices[44][0] = "Seguridad.";
 choices[44][1] = "Subsidiariedad.";
 choices[44][2] = "Compatibilidad del hardware.";
 choices[44][3] = "Protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[44] = choices[44][2];
 units[44] = "40";
 comments[44] = "Id Pregunta: 8229. Examen TIC A1 2010";


//  Id pregunta: 8309 Año de creación de pregunta: 2011-01-01
 questions[45]= "46)  Respecto a la Web 2.0 se puede afirmar que: ";
 choices[45]= new Array();
 choices[45][0] = "Transforma software del web hacia la plataforma de escritorio. ";
 choices[45][1] = "Se trata de una actitud evolutiva, m&aacute;s que una tecnolog&iacute;a. ";
 choices[45][2] = "Pretende sustituir a las redes sociales, al manejar usuarios y comunidades. ";
 choices[45][3] = "Encapsula APIs o XML para impedir que las aplicaciones puedan ser manipuladas por otros.";
 answers[45] = choices[45][1];
 units[45] = "120";
 comments[45] = "Id Pregunta: 8309. Examen TIC A2 2010";


//  Id pregunta: 8336 Año de creación de pregunta: 2011-01-01
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica de la Interfaz de Gesti&oacute;n de proyectos de la metodolog&iacute;a M&eacute;trica v3:";
 choices[46]= new Array();
 choices[46][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[46][1] = "Staffing Size.";
 choices[46][2] = "Catalogaci&oacute;n.";
 choices[46][3] = "Diagrama de Gantt.";
 answers[46] = choices[46][2];
 units[46] = "86";
 comments[46] = "Id Pregunta: 8336. Examen TIC A2 2010";


//  Id pregunta: 8510 Año de creación de pregunta: 2011-01-01
 questions[47]= "48)  El IVR (lnteractive Voice Response), para brindar mejores servicios involucra otras tecnolog&iacute;as, indicar la ERR&Oacute;NEA:";
 choices[47]= new Array();
 choices[47][0] = "DTMF (Dual Tone Multi Frequency) es la tecnolog&iacute;a de tonos utilizada para el marcado. ";
 choices[47][1] = "TTS (Text To Speech) le da capacidad de transformar texto a audio que escucha el operador. ";
 choices[47][2] = " ASR (Reconocimiento de Voz) le da la capacidad de reconocer las palabras del usuario y aceptarlas como &oacute;rdenes. ";
 choices[47][3] = "MSCML (Media Server Control Markup Language): lo que le permite controlar cualquier Media Resource Function (MRF). ";
 answers[47] = choices[47][3];
 units[47] = "94";
 comments[47] = "Id Pregunta: 8510. Examen TIC A2 2010";


//  Id pregunta: 8520 Año de creación de pregunta: 2011-01-01
 questions[48]= "49)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[48]= new Array();
 choices[48][0] = "Una relaci&oacute;n N:M.";
 choices[48][1] = "Una relaci&oacute;n 1:N.";
 choices[48][2] = "Una relaci&oacute;n 1:1.";
 choices[48][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite. ";
 answers[48] = choices[48][0];
 units[48] = "57, 58";
 comments[48] = "Id Pregunta: 8520. Examen TIC A2 2010 interna";


//  Id pregunta: 8735 Año de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes ep&iacute;grafes corresponde a una de las tres prioridades de la Comisi&oacute;n Europea a la hora de establecer la estrategia i2010?";
 choices[49]= new Array();
 choices[49][0] = "La consecuci&oacute;n de una sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n basada en la inclusi&oacute;n.";
 choices[49][1] = "La consecuci&oacute;n de un espacio mundial &uacute;nico de la informaci&oacute;n.";
 choices[49][2] = "El impulso de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n y tecnolog&iacute;a sanitarias.";
 choices[49][3] = "La consecuci&oacute;n de unos medios de comunicaci&oacute;n europeos a la vanguardia tecnol&oacute;gica";
 answers[49] = choices[49][0];
 units[49] = "30";
 comments[49] = "Id Pregunta: 8735. Examen TIC A2 2010 interna. M&aacute;s info: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 8776 Año de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Que puerto utiliza NNTP?";
 choices[50]= new Array();
 choices[50][0] = "119";
 choices[50][1] = "53";
 choices[50][2] = "137";
 choices[50][3] = "139";
 answers[50] = choices[50][0];
 units[50] = "112";
 comments[50] = "Id Pregunta: 8776. Examen UPM A2 2011";


//  Id pregunta: 8778 Año de creación de pregunta: 2011-01-01
 questions[51]= "52)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[51]= new Array();
 choices[51][0] = "53 TCP";
 choices[51][1] = "453 TCP";
 choices[51][2] = "456 UDP";
 choices[51][3] = "53 UDP";
 answers[51] = choices[51][0];
 units[51] = "100, 112";
 comments[51] = "Id Pregunta: 8778. Examen UPM A2 2011";


//  Id pregunta: 8845 Año de creación de pregunta: 2011-01-01
 questions[52]= "53)  En el modelo EFQM (European Foundation Quality Management) se identifican una serie de elementos que son la base para la Gesti&oacute;n de Calidad Total dentro de las organizaciones y que se agrupan en dos grandes bloques:";
 choices[52]= new Array();
 choices[52][0] = " Agentes y Acciones";
 choices[52][1] = " Agentes y Niveles de Satisfacci&oacute;n";
 choices[52][2] = " Agentes y Resultados";
 choices[52][3] = " Resultados y Acciones";
 answers[52] = choices[52][2];
 units[52] = "87,88";
 comments[52] = "Id Pregunta: 8845. Examen UC3M 2010";


//  Id pregunta: 8958 Año de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes conceptos no aplica a la Ingenier&iacute;a del conocimiento?";
 choices[53]= new Array();
 choices[53][0] = "No utiliza enfoques algor&iacute;tmicos";
 choices[53][1] = "Utiliza una estructura eminentemente procedural";
 choices[53][2] = "Utiliza una estructura eminentemente declarativa";
 choices[53][3] = "Resuelve problemas heur&iacute;sticos";
 answers[53] = choices[53][1];
 units[53] = "63";
 comments[53] = "Id Pregunta: 8958. ";


//  Id pregunta: 8967 Año de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[54]= new Array();
 choices[54][0] = "Lisp.";
 choices[54][1] = "Perl.";
 choices[54][2] = "Php.";
 choices[54][3] = "Python.";
 answers[54] = choices[54][3];
 units[54] = "80,81,82,83,84";
 comments[54] = "Id Pregunta: 8967. ";


//  Id pregunta: 8970 Año de creación de pregunta: 2011-01-01
 questions[55]= "56)  Entre los agentes del Plan General de Garant&iacute;a de la Calidad no figura:";
 choices[55]= new Array();
 choices[55][0] = "EGC (Eq garant&iacute;a calidad)";
 choices[55][1] = "EDS (Equipo de desarrollo)";
 choices[55][2] = "DIR (Director de proyecto)";
 choices[55][3] = "CDC (Comit&eacute; directivo de calidad)";
 answers[55] = choices[55][3];
 units[55] = "87,88,92";
 comments[55] = "Id Pregunta: 8970. ";


//  Id pregunta: 9158 Año de creación de pregunta: 2013-01-01
 questions[56]= "57)  NO se encuentra entre las iniciativas de IMS:";
 choices[56]= new Array();
 choices[56][0] = "Empaquetado de metadatos";
 choices[56][1] = "Interoperabilidad de preguntas y tests";
 choices[56][2] = "Empaquetado de informaci&oacute;n del alumno";
 choices[56][3] = "Empaquetado de contenidos";
 answers[56] = choices[56][0];
 units[56] = "66";
 comments[56] = "Id Pregunta: 9158. ";


//  Id pregunta: 9173 Año de creación de pregunta: 2013-01-01
 questions[57]= "58)  Respecto a la normativa de facturaci&oacute;n, se&ntilde;ale la respuesta INCORRECTA:";
 choices[57]= new Array();
 choices[57][0] = "El Real Decreto 1619/2012 regula las obligaciones de facturaci&oacute;n desde el 1 de enero de 2014";
 choices[57][1] = "No se exigir&aacute; la obligaci&oacute;n de expedir factura en el caso de determinadas prestaciones de servicios financieros y de seguros, salvo cuando dichas operaciones se entiendan realizadas en el territorio de aplicaci&oacute;n del Impuesto, o en otro Estado miembro de la Uni&oacute;n Europea, y est&eacute;n sujetas y no exentas.";
 choices[57][2] = "Se establece un sistema de facturaci&oacute;n basado en dos tipos de facturas: la factura completa u ordinaria y la factura simplificada, que viene a sustituir a los denominados tiques.";
 choices[57][3] = "Todas son verdaderas";
 answers[57] = choices[57][0];
 units[57] = "70";
 comments[57] = "Id Pregunta: 9173. ";


//  Id pregunta: 9179 Año de creación de pregunta: 2013-01-01
 questions[58]= "59)  Indique la afirmaci&oacute;n FALSA:";
 choices[58]= new Array();
 choices[58][0] = "La luz acrom&aacute;tica es aquella cuyo &uacute;nico atributo visible es la intensidad";
 choices[58][1] = "Los colores secundarios cian, magenta y amarillo se consideran combinaci&oacute;n de los tres colores primarios ";
 choices[58][2] = "La percepci&oacute;n del color por el sistema visual humano se caracteriza por los par&aacute;metros: brillo, matiz y croma o saturaci&oacute;n.";
 choices[58][3] = "La intensidad se describe en t&eacute;rminos de radiancia, luminancia y brillo.";
 answers[58] = choices[58][1];
 units[58] = "93";
 comments[58] = "Id Pregunta: 9179. ";


//  Id pregunta: 9190 Año de creación de pregunta: 2013-01-01
 questions[59]= "60)  En relaci&oacute;n a los programas de ordenadro, indicar mediante que ley se protegen.";
 choices[59]= new Array();
 choices[59][0] = "Mediante la Ley 23/2006 por la que se modifica el texto refundido de la Ley de Propiedad Intelectual";
 choices[59][1] = "Mediante la Ley de Propiedad Intelectual";
 choices[59][2] = "Mediante la Directiva de derechos de autor 2001/29";
 choices[59][3] = "Mediante la Ley de Patentes";
 answers[59] = choices[59][1];
 units[59] = "36";
 comments[59] = "Id Pregunta: 9190. ";


//  Id pregunta: 9205 Año de creación de pregunta: 2013-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes es un tipo de huella digital?";
 choices[60]= new Array();
 choices[60][0] = "Huella sim&eacute;trica.";
 choices[60][1] = "Huella asim&eacute;trica.";
 choices[60][2] = "Huella an&oacute;nima.";
 choices[60][3] = "Todas las anteriores son verdaderas.";
 answers[60] = choices[60][3];
 units[60] = "37";
 comments[60] = "Id Pregunta: 9205. ";


//  Id pregunta: 9230 Año de creación de pregunta: 2013-01-01
 questions[61]= "62)  Desde el punto de vista interno el sistema operativo puede concebirse como:";
 choices[61]= new Array();
 choices[61][0] = "un interfaz entre los programas de aplicaci&oacute;n y la m&aacute;quina pura.";
 choices[61][1] = "gestor de recursos.";
 choices[61][2] = "coordinador del funcionamiento de los recursos de c&oacute;mputo y de entrada y salida.";
 choices[61][3] = "B) y C) son correctas.";
 answers[61] = choices[61][3];
 units[61] = "52";
 comments[61] = "Id Pregunta: 9230. ";


//  Id pregunta: 9290 Año de creación de pregunta: 2013-01-01
 questions[62]= "63)  &iquest;A qu&eacute; norma ISO corresponde el est&aacute;ndar del ITU X.200? ";
 choices[62]= new Array();
 choices[62][0] = "ISO 9945";
 choices[62][1] = "ISO 7498";
 choices[62][2] = "ISO 9126";
 choices[62][3] = "ISO 15408";
 answers[62] = choices[62][1];
 units[62] = "42";
 comments[62] = "Id Pregunta: 9290. ";


//  Id pregunta: 9341 Año de creación de pregunta: 2013-01-01
 questions[63]= "64)  &iquest; Cu&aacute;l de los siguientes no es un nivel de madurez de CMMI ?";
 choices[63]= new Array();
 choices[63][0] = "Definido";
 choices[63][1] = "Gestionado";
 choices[63][2] = "Gestionado de forma cuantitativa";
 choices[63][3] = "Repetible";
 answers[63] = choices[63][3];
 units[63] = "87";
 comments[63] = "Id Pregunta: 9341. ";


//  Id pregunta: 9347 Año de creación de pregunta: 2013-01-01
 questions[64]= "65)  La red S-TESTA ";
 choices[64]= new Array();
 choices[64][0] = "Es accesible directamente desde cada Ministerio.";
 choices[64][1] = "El EuroDomain es un Dominio Local de servicios centralizados.";
 choices[64][2] = "Algunas aplicaciones que usan sus servicios son OLAF, DG TREN o DG FISH.";
 choices[64][3] = "Da acceso y opera a trav&eacute;s de Internet.";
 answers[64] = choices[64][2];
 units[64] = "103";
 comments[64] = "Id Pregunta: 9347. http://ec.europa.eu/isa/";


//  Id pregunta: 9374 Año de creación de pregunta: 2013-01-01
 questions[65]= "66)  Indique cu&aacute;l de las siguientes afirmaciones es correcta en el &aacute;mbito de la normalizaci&oacute;n de puntuaciones de la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta:";
 choices[65]= new Array();
 choices[65][0] = "El m&eacute;todo de fracci&oacute;n del ideal y el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[65][1] = "El m&eacute;todo de fracci&oacute;n del m&aacute;ximo y el m&eacute;todo de fracci&oacute;n de la suma no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[65][2] = "El m&eacute;todo de fracci&oacute;n del ideal no mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo s&iacute; la mantiene";
 choices[65][3] = "El m&eacute;todo de fracci&oacute;n del ideal mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no la mantiene";
 answers[65] = choices[65][2];
 units[65] = "34";
 comments[65] = "Id Pregunta: 9374. ";


//  Id pregunta: 9525 Año de creación de pregunta: 2013-01-01
 questions[66]= "67)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.245:";
 choices[66]= new Array();
 choices[66][0] = "Es un protocolo para el control multimedia de las llamadas";
 choices[66][1] = "S&oacute;lo lo utiliza el protocolo H.323";
 choices[66][2] = "A parte del protocolo H.323, lo utilizan otros protocolos (como por ejemplo el protocolo H.234)";
 choices[66][3] = "Es un protocolo de gesti&oacute;n y control";
 answers[66] = choices[66][1];
 units[66] = "117";
 comments[66] = "Id Pregunta: 9525. ";


//  Id pregunta: 9598 Año de creación de pregunta: 2014-01-01
 questions[67]= "68)  La arquitectura original de Linux es de tipo:";
 choices[67]= new Array();
 choices[67][0] = "Microkernel";
 choices[67][1] = "Monol&iacute;tica";
 choices[67][2] = "Modular";
 choices[67][3] = "H&iacute;brida";
 answers[67] = choices[67][1];
 units[67] = "53";
 comments[67] = "Id Pregunta: 9598. ";


//  Id pregunta: 9610 Año de creación de pregunta: 2014-01-01
 questions[68]= "69)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[68]= new Array();
 choices[68][0] = "SQL 2000";
 choices[68][1] = "SQL:2003";
 choices[68][2] = "SQL:2005";
 choices[68][3] = "SQL:2008";
 answers[68] = choices[68][2];
 units[68] = "58";
 comments[68] = "Id Pregunta: 9610. ";


//  Id pregunta: 9639 Año de creación de pregunta: 2014-01-01
 questions[69]= "70)  El funcionamiento de la Junta de Contrataci&oacute;n Centralizada se regula en:";
 choices[69]= new Array();
 choices[69][0] = "HAP/2027/2013";
 choices[69][1] = "HAP/2028/2013";
 choices[69][2] = "RD 695/2013";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][1];
 units[69] = "41";
 comments[69] = "Id Pregunta: 9639. ";


//  Id pregunta: 9651 Año de creación de pregunta: 2014-01-01
 questions[70]= "71)  El c&oacute;digo intermedio en una compilaci&oacute;n .NET actualmente se llama:";
 choices[70]= new Array();
 choices[70][0] = "MSIL";
 choices[70][1] = "CIL";
 choices[70][2] = "CLS";
 choices[70][3] = "Bytecode";
 answers[70] = choices[70][1];
 units[70] = "115";
 comments[70] = "Id Pregunta: 9651. Antes se llamaba MSIL, ahora se llama CIL (Common Intermediate Language)";


//  Id pregunta: 9718 Año de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[71]= new Array();
 choices[71][0] = "CORBA es un tipo de middleware.";
 choices[71][1] = "Las RPCs (Remote Procedure Call) requieren Sistema Operativo UNIX/LINUX.";
 choices[71][2] = "El modelo Proxy/Cach&eacute; es precursor del modelo cliente-servidor.";
 choices[71][3] = "Los applets son un modelo de sistemas distribuidos P2P.";
 answers[71] = choices[71][0];
 units[71] = "51";
 comments[71] = "Id Pregunta: 9718. Examen TIC-A1 2013";


//  Id pregunta: 9766 Año de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;Qu&eacute; tipos de tratamiento del riesgo contempla MAGERIT v3?";
 choices[72]= new Array();
 choices[72][0] = "Eliminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[72][1] = "Eliminaci&oacute;n, Reducci&oacute;n, Compartic&oacute;n, Financiaci&oacute;n.";
 choices[72][2] = "Exterminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[72][3] = "Compartici&oacute;n, Reducci&oacute;n, Traspaso, Compartici&oacute;n.";
 answers[72] = choices[72][0];
 units[72] = "98";
 comments[72] = "Id Pregunta: 9766. ";


//  Id pregunta: 9847 Año de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;C&oacute;mo se denomina el m&oacute;dulo criptogr&aacute;fico necesario para poder operar con el DNI electr&oacute;nico en un entorno UNIX?";
 choices[73]= new Array();
 choices[73][0] = "Cryptographic Service Provider (CSP).";
 choices[73][1] = "PKCS#11.";
 choices[73][2] = "PGP.";
 choices[73][3] = "Smart Card Mini-Driver.";
 answers[73] = choices[73][1];
 units[73] = "111";
 comments[73] = "Id Pregunta: 9847. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9881 Año de creación de pregunta: 2014-01-01
 questions[74]= "75)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[74]= new Array();
 choices[74][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[74][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[74][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[74][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[74] = choices[74][1];
 units[74] = "99, 102";
 comments[74] = "Id Pregunta: 9881. TIC A1, Examen 2013";


//  Id pregunta: 9917 Año de creación de pregunta: 2014-01-01
 questions[75]= "76)  Seg&uacute;n M&eacute;trica v3 &iquest;es posible definir un evento (o interrupci&oacute;n) en un diagrama de flujo de datos?";
 choices[75]= new Array();
 choices[75][0] = "S&iacute;, mediante un flujo de datos.";
 choices[75][1] = "S&iacute;, mediante un flujo de control.";
 choices[75][2] = "Si, mediante un proceso iterativo.";
 choices[75][3] = "No, no es posible. Los DFD &uacute;nicamente representan como se transforma la informaci&oacute;n.";
 answers[75] = choices[75][1];
 units[75] = "86";
 comments[75] = "Id Pregunta: 9917. TIC A2, Examen 2013";


//  Id pregunta: 9980 Año de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[76]= new Array();
 choices[76][0] = "Para construir aplicaciones y servicios Web";
 choices[76][1] = "Para conectar las aplicaciones a la base de datos";
 choices[76][2] = "Para construir la interface de usuario";
 choices[76][3] = "Para conectar los programas";
 answers[76] = choices[76][1];
 units[76] = "59,115";
 comments[76] = "Id Pregunta: 9980. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10038 Año de creación de pregunta: 2014-01-01
 questions[77]= "78)  Un equipo con la direcci&oacute;n IP 128.0.235.56/27 &iquest;Qu&eacute; m&aacute;scara de red, direcci&oacute;n de red y direcci&oacute;n de broadcast tiene?";
 choices[77]= new Array();
 choices[77][0] = "M&aacute;scara 255.255.255.224, red 128.0.235.32, broadcast 128.0.235.63";
 choices[77][1] = "M&aacute;scara 255.255.255.0, red 128.0.235.0, broadcast 128.0.235.255";
 choices[77][2] = "M&aacute;scara 255.255.255.192, red 128.0.235.0, broadcast 128.0.235.63";
 choices[77][3] = "M&aacute;scara 255.255.255.128, red 128.0.235.0, broadcast 128.0.235.127";
 answers[77] = choices[77][0];
 units[77] = "100";
 comments[77] = "Id Pregunta: 10038. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10046 Año de creación de pregunta: 2014-01-01
 questions[78]= "79)  El algoritmo PLC (Packet Loss Concealment):";
 choices[78]= new Array();
 choices[78][0] = "Lo utiliza Frame Relay para el reenv&iacute;o de tramas p&eacute;rdidas por la congesti&oacute;n en el sentido de la transmisi&oacute;n.";
 choices[78][1] = "Algoritmo de ocultamiento de p&eacute;rdida de paquetes utilizado por VoIP.";
 choices[78][2] = "Utilizado por TCP para la retransmisi&oacute;n de paquetes despu&eacute;s de una trama NACK (negative acknowledgement).";
 choices[78][3] = "Algoritmo de descarte de paquetes en situaci&oacute;n de congesti&oacute;n en redes Frame Relay.";
 answers[78] = choices[78][1];
 units[78] = "109";
 comments[78] = "Id Pregunta: 10046. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10086 Año de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado para eliminar el problema de la indefinici&oacute;n de requisitos?";
 choices[79]= new Array();
 choices[79][0] = "R&aacute;pido";
 choices[79][1] = "Evolutivo";
 choices[79][2] = "Incremental";
 choices[79][3] = "R&aacute;pido o evolutivo, nunca el incremental";
 answers[79] = choices[79][0];
 units[79] = "76";
 comments[79] = "Id Pregunta: 10086. ";


//  Id pregunta: 10092 Año de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es el orden cronol&oacute;gico m&aacute;s acertado?";
 choices[80]= new Array();
 choices[80][0] = "BPM, SOA, EAI, ESB";
 choices[80][1] = "EAI, BPM, SOA, ESB";
 choices[80][2] = "EAI, SOA, BPM, ESB";
 choices[80][3] = "BPM, EAI, SOA, ESB";
 answers[80] = choices[80][1];
 units[80] = "79";
 comments[80] = "Id Pregunta: 10092. ";


//  Id pregunta: 10093 Año de creación de pregunta: 2014-01-01
 questions[81]= "82)  De acuerdo a las actividades de M&eacute;trica v.3, se&ntilde;ale la INCORRECTA:";
 choices[81]= new Array();
 choices[81][0] = "La actividad PSI 4 es de Idenficaci&oacute;n de Requisitos";
 choices[81][1] = "La actividad EVS 3 es de Definici&oacute;n de Requisitos";
 choices[81][2] = "La actividad ASI 2 es de Especificaci&oacute;n de Requisitos";
 choices[81][3] = "La actividad DSI 11 es de Establecimineto de Requisitos de Implantaci&oacute;n";
 answers[81] = choices[81][2];
 units[81] = "78";
 comments[81] = "Id Pregunta: 10093. ";


//  Id pregunta: 10101 Año de creación de pregunta: 2014-01-01
 questions[82]= "83)  En el an&aacute;lisis estructurado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[82]= new Array();
 choices[82][0] = "El Diccionario de Datos suele estar orientado a los desarrolladores.";
 choices[82][1] = "El Diccionario de Datos suele estar orientado a los usuarios.";
 choices[82][2] = "El Directorio de Datos suele estar orientado a los desarrolladores.";
 choices[82][3] = "La b) y la c) son correctas.";
 answers[82] = choices[82][3];
 units[82] = "81";
 comments[82] = "Id Pregunta: 10101. ";


//  Id pregunta: 10117 Año de creación de pregunta: 2014-01-01
 questions[83]= "84)  Cu&aacute;l de los siguientes equipos trabaja a nivel 1 de red:";
 choices[83]= new Array();
 choices[83][0] = "Router";
 choices[83][1] = "Switch";
 choices[83][2] = "Bridge";
 choices[83][3] = "Hub";
 answers[83] = choices[83][3];
 units[83] = "102";
 comments[83] = "Id Pregunta: 10117. ";


//  Id pregunta: 10129 Año de creación de pregunta: 2014-01-01
 questions[84]= "85)  Las siglas CMOT significan:";
 choices[84]= new Array();
 choices[84][0] = "Complex Management Over TCP";
 choices[84][1] = "Common Management Over TCP/IP";
 choices[84][2] = "Complex Management Over TCP/IP";
 choices[84][3] = "Complex Management Of Telecomucation";
 answers[84] = choices[84][1];
 units[84] = "104";
 comments[84] = "Id Pregunta: 10129. ";


//  Id pregunta: 10178 Año de creación de pregunta: 2014-01-01
 questions[85]= "86)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con los diagramas UML&hellip;";
 choices[85]= new Array();
 choices[85][0] = "El diagrama de Comunicaci&oacute;n que introdujo UML2.0, constituye una versi&oacute;n modificada del anterior diagrama de Colaboraci&oacute;n";
 choices[85][1] = "UML tipifica como diagramas de comportamiento los siguientes: diagramas de Actividad, diagramas de Estado, diagramas de Caso de Uso y los diagramas de Interacci&oacute;n.";
 choices[85][2] = "Los denominados diagramas globales de interacci&oacute;n ofrecen una visi&oacute;n de conjunto de las rutas de acceso de ejecuci&oacute;n de toda la aplicaci&oacute;n, utilizando elementos de diagramas de actividades y diagramas de secuencia.";
 choices[85][3] = "Todas las anteriores";
 answers[85] = choices[85][3];
 units[85] = "82";
 comments[85] = "Id Pregunta: 10178. ";


//  Id pregunta: 10197 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique la afirmaci&oacute;n correcta con respecto a la tecnolog&iacute;a bluetooth 4.0";
 choices[86]= new Array();
 choices[86][0] = "Comercialmente se le ha dado el nombre de Zigbee";
 choices[86][1] = "Supera en velocidad a la versi&oacute;n 2.0 de bluetooth";
 choices[86][2] = "Est&aacute; pensado para transmitir pocos paquetes usando poca energ&iacute;a";
 choices[86][3] = "El alcance supera los 100 metros";
 answers[86] = choices[86][2];
 units[86] = "107";
 comments[86] = "Id Pregunta: 10197. ";


//  Id pregunta: 10222 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  Conociendo que la variablees de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:";
 choices[87]= new Array();
 choices[87][0] = "Da un error de compilaci&oacute;n";
 choices[87][1] = "true";
 choices[87][2] = "false";
 choices[87][3] = "12";
 answers[87] = choices[87][1];
 units[87] = "60";
 comments[87] = "Id Pregunta: 10222. ";


//  Id pregunta: 10231 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  Un servlet encuentra una excepci&oacute;n mientras procesa una petici&oacute;n. &iquest;Qu&eacute; m&eacute;todo usar&aacute;s para enviar una respuesta de error al navegador?:";
 choices[88]= new Array();
 choices[88][0] = "sendError(int errorCode) de HttpServlet";
 choices[88][1] = "sendError(int errorCode) de HttpServletRequest";
 choices[88][2] = "sendError(int errorCode) de HttpServletResponse";
 choices[88][3] = "sendError(String errorMsg) de HttpServletRequest";
 answers[88] = choices[88][2];
 units[88] = "116";
 comments[88] = "Id Pregunta: 10231. ";


//  Id pregunta: 10248 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Dicho software hace uso de un servidor de mail distribu&iacute;do bajo la IBM Public License, una licencia de c&oacute;digo abierto incompatible con GPL. Aparte de este uso, Juan tiene el copyright del resto del software. &iquest;Debe indicar una excepci&oacute;n de la licencia GPL por dicho uso?";
 choices[89]= new Array();
 choices[89][0] = "No, ya que un enlace est&aacute;tico no crea un trabajo derivado";
 choices[89][1] = "No, porque GPL permite enlazar con otro software, siempre que sea Free Software";
 choices[89][2] = "S&iacute;, de la siguiente forma:";
 choices[89][3] = "S&iacute;, de la siguiente forma:";
 answers[89] = choices[89][2];
 units[89] = "61";
 comments[89] = "Id Pregunta: 10248. ";


//  Id pregunta: 10264 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  En referencia al tratamiento de datos de car&aacute;cter personal recogidos en ficheros de las Fuerzas y Cuerpos de Seguridad, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[90]= new Array();
 choices[90][0] = "Puede denegarse si afecta a la defensa del estado, no siendo posible en tal caso plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[90][1] = "Puede denegarse si afecta a la defensa del estado y el interesado plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[90][2] = "No puede denegarse si el fichero contiene datos especialmente protegidos";
 choices[90][3] = "No puede denegarse en ning&uacute;n caso";
 answers[90] = choices[90][1];
 units[90] = "29";
 comments[90] = "Id Pregunta: 10264. Art&iacute;culo 23.1 y 23.3 de la Ley 15/1999";


//  Id pregunta: 10319 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[91]= new Array();
 choices[91][0] = "255.255.255.255";
 choices[91][1] = "FF::FF";
 choices[91][2] = "FF:FF:FF:FF:FF:FF:FF:FF";
 choices[91][3] = "FF:FF:FF:FF:FF:FF";
 answers[91] = choices[91][3];
 units[91] = "101";
 comments[91] = "Id Pregunta: 10319. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10350 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[92]= new Array();
 choices[92][0] = "Para cumplir nivel A, las p&aacute;ginas no pueden contener ning&uacute;n elemento que destelle m&aacute;s de 3 veces por segundo";
 choices[92][1] = "Lo anterior es cierto, pero para nivel AA";
 choices[92][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[92][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que adem&aacute;s el destello debe estar por debajo del umbral de destello general y de rojo";
 answers[92] = choices[92][2];
 units[92] = "39";
 comments[92] = "Id Pregunta: 10350. Consultar WCAG Pauta 2.3 Convulsiones";


//  Id pregunta: 10444 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas sobre las redes GPRS es FALSA?";
 choices[93]= new Array();
 choices[93][0] = "Puede alcanzar velocidades de hasta 236 kbps de descarga. ";
 choices[93][1] = "Son redes orientadas a conexi&oacute;n.";
 choices[93][2] = "Pueden ofrecer servicios de mensajer&iacute;a instant&aacute;nea.";
 choices[93][3] = "Ofrecen servicios de transmisi&oacute;n digital de datos.";
 answers[93] = choices[93][1];
 units[93] = "108";
 comments[93] = "Id Pregunta: 10444. Examen TIC A1 2013";


//  Id pregunta: 10468 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Cu&aacute;les son los nuevos elementos de HTML5?";
 choices[94]= new Array();
 choices[94][0] = "header y footer.";
 choices[94][1] = "nav.";
 choices[94][2] = "sections y articles.";
 choices[94][3] = "Todas las anteriores.";
 answers[94] = choices[94][3];
 units[94] = "69";
 comments[94] = "Id Pregunta: 10468. ";


//  Id pregunta: 10524 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Qu&eacute; a&ntilde;o establece como objetivo la Estrategia Nacional de Redes Ultrarr&aacute;pidas para que al menos el 50% de los hogares puedan disponer de acceso a servicios de velocidades superiores a 100 Mbps.";
 choices[95]= new Array();
 choices[95][0] = "2016";
 choices[95][1] = "2017";
 choices[95][2] = "2018";
 choices[95][3] = "2020";
 answers[95] = choices[95][3];
 units[95] = "110";
 comments[95] = "Id Pregunta: 10524. ";


//  Id pregunta: 10528 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Se&ntilde;ale la respuesta correcta relacionada con las arquitecturas RISC y CISC de procesadores";
 choices[96]= new Array();
 choices[96][0] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, ejecuci&oacute;n de la instrucci&oacute;n, acceso a memoria, escritura a registro";
 choices[96][1] = "CISC es un modelo m&aacute;s moderno que RISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[96][2] = "RISC es un modelo m&aacute;s moderno que CISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[96][3] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, acceso a memoria, ejecuci&oacute;n de la instrucci&oacute;n, escritura a registro";
 answers[96] = choices[96][0];
 units[96] = "45";
 comments[96] = "Id Pregunta: 10528. ";


//  Id pregunta: 10535 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[97]= new Array();
 choices[97][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[97][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[97][2] = "La latencia de acceso a los datos es menor";
 choices[97][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[97] = choices[97][3];
 units[97] = "48";
 comments[97] = "Id Pregunta: 10535. ";


//  Id pregunta: 10546 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[98]= new Array();
 choices[98][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[98][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[98][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[98][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[98] = choices[98][2];
 units[98] = "30";
 comments[98] = "Id Pregunta: 10546. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";


//  Id pregunta: 10548 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Los auditores que han participado en el desarrollo de un sistema podr&iacute;an haber perdido su independencia si: ";
 choices[99]= new Array();
 choices[99][0] = "Realizan una revisi&oacute;n del desarrollo del sistema ";
 choices[99][1] = "Recomiendan medidas de mejora";
 choices[99][2] = "Realizan una evaluaci&oacute;n independiente de la aplicaci&oacute;n despu&eacute;s de su puesta en producci&oacute;n ";
 choices[99][3] = "Participan activamente en el dise&ntilde;o e implementaci&oacute;n del sistema de aplicaci&oacute;n";
 answers[99] = choices[99][3];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10548. La independencia puede verse afectada si el auditor se involucra activamente en el dise&ntilde;o e implementaci&oacute;n del sistema. ";


