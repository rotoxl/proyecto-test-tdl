/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 45 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes elementos no se considera un activo de una organizaci&oacute;n?";
 choices[0]= new Array();
 choices[0][0] = "Recursos f&iacute;sicos: equipos, sistemas, cableado&hellip;";
 choices[0][1] = "Utilizaci&oacute;n de recursos: uso de CPU, de ancho de banda, de disco duro&hellip;";
 choices[0][2] = "Imagen y reputaci&oacute;n p&uacute;blica y profesional de la empresa y sus empleados";
 choices[0][3] = "Todos los anteriores son activos de una organizaci&oacute;n";
 answers[0] = choices[0][3];
 units[0] = "32";
 comments[0] = "Id Pregunta: 45. ";


//  Id pregunta: 85 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; significa la ley de Pareto del 80 / 20?:";
 choices[1]= new Array();
 choices[1][0] = "Con el 20 % del esfuerzo se resuelven el 80 % de los problemas";
 choices[1][1] = "El 80 % de los problemas son originados por el 20 % de la plantilla";
 choices[1][2] = "Con el 80 % del esfuerzo se resuelve el 20 % de los problemas, los m&aacute;s graves";
 choices[1][3] = "El 20 % de los problemas se resuelven autom&aacute;ticamente resolviendo primero el 80 % de ellos";
 answers[1] = choices[1][0];
 units[1] = "25";
 comments[1] = "Id Pregunta: 85. ";


//  Id pregunta: 152 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  El modelo modificado en 6 etapas de Nolan:";
 choices[2]= new Array();
 choices[2][0] = "Iniciaci&oacute;n, expansi&oacute;n, control, integraci&oacute;n, administraci&oacute;n de datos y madurez";
 choices[2][1] = "Iniciaci&oacute;n, contagio, control, integraci&oacute;n, almacenamiento de datos y madurez";
 choices[2][2] = "Iniciaci&oacute;n, contagio, control, integraci&oacute;n, administraci&oacute;n de datos y madurez";
 choices[2][3] = "Iniciaci&oacute;n, expansi&oacute;n, control, integraci&oacute;n, almacenamiento de datos y madurez";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 152. Nolan";


//  Id pregunta: 193 Año de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[3]= new Array();
 choices[3][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[3][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[3][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[3][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[3] = choices[3][2];
 units[3] = "27";
 comments[3] = "Id Pregunta: 193. Examen TIC MAP B 2004";


//  Id pregunta: 252 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Entre las organizaciones cuya misi&oacute;n es alertar frente a las diferentes vulnerabilidades que presenten los productos de tecnolog&iacute;as de la informaci&oacute;n, se encuentra:";
 choices[4]= new Array();
 choices[4][0] = "CNN-CERT";
 choices[4][1] = "SANS";
 choices[4][2] = "W3C";
 choices[4][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[4] = choices[4][3];
 units[4] = "42";
 comments[4] = "Id Pregunta: 252. ";


//  Id pregunta: 444 Año de creación de pregunta: 2009-01-01
 questions[5]= "6)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y el RD 1720/2007, y en relaci&oacute;n con los ficheros de titularidad privada que contengan datos de car&aacute;cter personal:";
 choices[5]= new Array();
 choices[5][0] = "Los ficheros de datos de car&aacute;cter personal de titularidad privada ser&aacute;n notificados a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos por la persona o entidad privada que pretenda crearlos, con car&aacute;cter previo a su creaci&oacute;n";
 choices[5][1] = "La notificaci&oacute;n de un fichero de datos de car&aacute;cter personal es independiente del sistema de tratamiento empleado en su organizaci&oacute;n y del soporte o soportes empleados para el tratamiento de los datos";
 choices[5][2] = "Deber&aacute; notificarse a la Agencia de Protecci&oacute;n de Datos las variaciones que se produzcan con posterioridad a la notificaci&oacute;n de inscripci&oacute;n";
 choices[5][3] = "Todas las respuestas anteriores son correctas";
 answers[5] = choices[5][3];
 units[5] = "29";
 comments[5] = "Id Pregunta: 444. ";


//  Id pregunta: 476 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Utilizando el m&eacute;todo PERT y suponiendo un proyecto con una actividad con una duraci&oacute;n estimada optimista de 8 d&iacute;as, pesimista de 16 d&iacute;as y m&aacute;s probable de 9 d&iacute;as, &iquest;cu&aacute;l es el tiempo PERT o duraci&oacute;n esperada de dicha actividad?:";
 choices[6]= new Array();
 choices[6][0] = "12";
 choices[6][1] = "11";
 choices[6][2] = "10";
 choices[6][3] = "9";
 answers[6] = choices[6][2];
 units[6] = "28";
 comments[6] = "Id Pregunta: 476. ";


//  Id pregunta: 506 Año de creación de pregunta: 2003-01-01
 questions[7]= "8)  La Decisi&oacute;n 87/95 /CEE cubre:";
 choices[7]= new Array();
 choices[7][0] = "Las especificaciones t&eacute;cnicas para equipos terminales conectados a redes p&uacute;blicas de tlecomunicaci&oacute;n";
 choices[7][1] = "Las especificaciones funcionales de los servicios ofrecidos sobre redes p&uacute;blicas de telecomunicaci&oacute;n";
 choices[7][2] = "Las especificaciones de los equipos que formen parte de las redes de telecomunicaci&oacute;n en s&iacute; mismas";
 choices[7][3] = "Ninguna de las repuestas anteriores es cierta";
 answers[7] = choices[7][1];
 units[7] = "40";
 comments[7] = "Id Pregunta: 506. ";


//  Id pregunta: 510 Año de creación de pregunta: 2003-01-01
 questions[8]= "9)  La Metodolog&iacute;a Magerit debe estar destinado a:";
 choices[8]= new Array();
 choices[8][0] = "S&oacute;lo interesa a directivos";
 choices[8][1] = "Interesa a tecn&oacute;logos y especialistas inform&aacute;ticos";
 choices[8][2] = "No est&aacute; actualizado para que los riesgos puedan contabilizarse en Euros";
 choices[8][3] = "Interesa a directivos, usuarios y desarrolladores";
 answers[8] = choices[8][3];
 units[8] = "31, 32, 33";
 comments[8] = "Id Pregunta: 510. ";


//  Id pregunta: 664 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  En un proceso de evaluaci&oacute;n de bienes y servicios inform&aacute;ticos,  el m&eacute;todo de ordenaci&oacute;n de alternativas PROMETHEE:";
 choices[9]= new Array();
 choices[9][0] = "Cuantifica la diferencia y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[9][1] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[9][2] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[9][3] = "Cuantifica la diferencia, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 answers[9] = choices[9][2];
 units[9] = "34";
 comments[9] = "Id Pregunta: 664. ";


//  Id pregunta: 731 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[10]= new Array();
 choices[10][0] = "Perceptron";
 choices[10][1] = "Adaline";
 choices[10][2] = "Art";
 choices[10][3] = "Madaline";
 answers[10] = choices[10][2];
 units[10] = "63,64";
 comments[10] = "Id Pregunta: 731. Examen TIC MAP B 2004";


//  Id pregunta: 734 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes servicios NO est&aacute; regulado por la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI?";
 choices[11]= new Array();
 choices[11][0] = "La contrataci&oacute;n de bienes y servicios por v&iacute;a electr&oacute;nica";
 choices[11][1] = "El v&iacute;deo bajo demanda";
 choices[11][2] = "El teletexto televisivo";
 choices[11][3] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos";
 answers[11] = choices[11][2];
 units[11] = "30";
 comments[11] = "Id Pregunta: 734. Examen TIC MAP B 2004. Posteriormente, tanto el teletexto televisivo como el v&iacute;deo bajo demanda se eliminaron de la ley.";


//  Id pregunta: 767 Año de creación de pregunta: 2004-01-01
 questions[12]= "13)  Los tipos de tarjetas inteligentes son ";
 choices[12]= new Array();
 choices[12][0] = "de acoplamiento";
 choices[12][1] = "de vecindad";
 choices[12][2] = "de proximidad";
 choices[12][3] = "todas las anteriores";
 answers[12] = choices[12][3];
 units[12] = "74";
 comments[12] = "Id Pregunta: 767. ";


//  Id pregunta: 1047 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  El protocolo de acceso al directorio en X.500 es:";
 choices[13]= new Array();
 choices[13][0] = "TCP/IP";
 choices[13][1] = "LDAP";
 choices[13][2] = "IMAP";
 choices[13][3] = "DAP";
 answers[13] = choices[13][3];
 units[13] = "73";
 comments[13] = "Id Pregunta: 1047. ";


//  Id pregunta: 1281 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Los programas fuente Java:";
 choices[14]= new Array();
 choices[14][0] = "Se compilan siempre";
 choices[14][1] = "Nunca se compilan, excepto para las m&aacute;quinas con procesador Java";
 choices[14][2] = "Siempre se interpretan para que puedan ejecutarse en m&aacute;quinas con diferente procesador, excepto para las m&aacute;quinas con procesador Java en que son ejecutables directamente";
 choices[14][3] = "Hay partes compiladas y partes interpretadas";
 answers[14] = choices[14][0];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1281. ";


//  Id pregunta: 1520 Año de creación de pregunta: 2003-01-01
 questions[15]= "16)  C&oacute;mo objetos de una base de datos ORACLE, &iquest;cu&aacute;l es la diferencia principal entre una funci&oacute;n y un procedimiento?:";
 choices[15]= new Array();
 choices[15][0] = "Una funci&oacute;n no puede ejecutarse de forma nativa; un procedimiento si.";
 choices[15][1] = "Una funci&oacute;n puede invocar otra funci&oacute;n; un procedimiento no.";
 choices[15][2] = "Una funci&oacute;n est&aacute; almacenada en la base de datos; un procedimiento no.";
 choices[15][3] = "Una funci&oacute;n puede devolver un valor al programa que la invoca; un procedimiento no.";
 answers[15] = choices[15][3];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1520. Junta Andaluc&iacute;a";


//  Id pregunta: 1601 Año de creación de pregunta: 2003-01-01
 questions[16]= "17)  En un sistema de workflow no es una funci&oacute;n b&aacute;sica:";
 choices[16]= new Array();
 choices[16][0] = "Monitorizaci&oacute;n y control";
 choices[16][1] = "Gesti&oacute;n de procedimientos";
 choices[16][2] = "Interoperabilidad entre aplicaciones";
 choices[16][3] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 answers[16] = choices[16][2];
 units[16] = "71";
 comments[16] = "Id Pregunta: 1601. Pregunta no perteneciente al test &nbsp;del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de Worflow)";


//  Id pregunta: 1770 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Respecto a los drivers utilizados en JDBC";
 choices[17]= new Array();
 choices[17][0] = "El driver de tipo 1 utiliza c&oacute;digo Java para hacer llamadas a una API nativa que debe estar en la m&aacute;quina que accede a la base de datos.";
 choices[17][1] = "El driver de tipo III no requiere ninguna instalaci&oacute;n adicional en la m&aacute;quina cliente, pero obliga a la existencia del middleware.";
 choices[17][2] = "La ventaja del driver tipo II es que da acceso a pr&aacute;cticamente todos los sistemas de gesti&oacute;n de base de datos del mercado";
 choices[17][3] = "todas son falsas";
 answers[17] = choices[17][1];
 units[17] = "60";
 comments[17] = "Id Pregunta: 1770. ";


//  Id pregunta: 1801 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Para que se utiliza un LMS?";
 choices[18]= new Array();
 choices[18][0] = "Para crear cursos de e-learning";
 choices[18][1] = "Para cachear los cursos de e-learning en el web server";
 choices[18][2] = "Es un Content Management System especializado en e-learning";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][3];
 units[18] = "66";
 comments[18] = "Id Pregunta: 1801. Los cursos se crean mediante un LCMS. El LMS se utiliza para administrar esos cursos/objetos de aprendizajes ya existentes.";


//  Id pregunta: 1834 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  El formato PDF/A";
 choices[19]= new Array();
 choices[19][0] = "Es la &uacute;ltima versi&oacute;n que ha publicado Adobe de su formato PDF";
 choices[19][1] = "Es una versi&oacute;n estandarizada por ISO para el almacenamiento de archivos a largo plazo";
 choices[19][2] = "Es una versi&oacute;n de PDF que se ha publicado bajo una licencia CC";
 choices[19][3] = "Es la primera versi&oacute;n PDF que public&oacute; Adobe y la m&aacute;s extendida";
 answers[19] = choices[19][1];
 units[19] = "93";
 comments[19] = "Id Pregunta: 1834. ";


//  Id pregunta: 2053 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Funciones de un sistema de informaci&oacute;n son:";
 choices[20]= new Array();
 choices[20][0] = "Entrada de datos, almacenamiento y presentaci&oacute;n de los mismos";
 choices[20][1] = "Entrada de datos, comunicaciones y c&aacute;lculo";
 choices[20][2] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;d&rsquo; son correctas";
 choices[20][3] = "Almacenamiento de datos, c&aacute;lculo y comunicaciones";
 answers[20] = choices[20][2];
 units[20] = "21";
 comments[20] = "Id Pregunta: 2053. ";


//  Id pregunta: 2150 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes no es un componente de una herramienta CASE integrada?";
 choices[21]= new Array();
 choices[21][0] = "Diccionario de datos.";
 choices[21][1] = "Editor de diagramas.";
 choices[21][2] = "Editor de documentos.";
 choices[21][3] = "Editor de textos.";
 answers[21] = choices[21][3];
 units[21] = "91";
 comments[21] = "Id Pregunta: 2150. ";


//  Id pregunta: 2257 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Dentro del Plan General de Calidad para el desarrollo de aplicaciones inform&aacute;ticas se distinguen dos bloques tem&aacute;ticos, con un contenido diferente pero complementario, a saber:";
 choices[22]= new Array();
 choices[22][0] = "Bloque metodol&oacute;gico y Bloque procedimental";
 choices[22][1] = "Bloque metodol&oacute;gico y Bloque instrumental";
 choices[22][2] = "Bloque l&oacute;gico y Bloque procedimental";
 choices[22][3] = "Bloque l&oacute;gico y bloque instrumental";
 answers[22] = choices[22][1];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2257. ";


//  Id pregunta: 2354 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Entre las causas m&aacute;s habituales que provocan el descontento de los usuarios respecto de los productos de software obtenidos tenemos:";
 choices[23]= new Array();
 choices[23][0] = "Mantenimiento permanente.";
 choices[23][1] = "Coste cerrado del producto.";
 choices[23][2] = "Necesidades no satisfechas por la dificultad del producto para adaptarse a otros requerimientos.";
 choices[23][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas.";
 answers[23] = choices[23][2];
 units[23] = "91";
 comments[23] = "Id Pregunta: 2354. ";


//  Id pregunta: 2606 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;C&oacute;mo se llama la caracter&iacute;stica que permite que dos m&eacute;todos distintos tengan el mismo nombre?";
 choices[24]= new Array();
 choices[24][0] = " Herencia";
 choices[24][1] = "Persistencia";
 choices[24][2] = "Polimorfismo";
 choices[24][3] = "Abstracci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "82";
 comments[24] = "Id Pregunta: 2606. ";


//  Id pregunta: 2880 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  En la matriz de puntuaci&oacute;n REDER, utilizada para puntuar las memorias de las organizaciones que se presentan al Premio Europeo de la Calidad, al subcriterio 7b se le asigna, del total de puntos coprrespondientes al criterio 7, el:";
 choices[25]= new Array();
 choices[25][0] = "10%";
 choices[25][1] = "15%";
 choices[25][2] = "20%";
 choices[25][3] = "25%";
 answers[25] = choices[25][3];
 units[25] = "92";
 comments[25] = "Id Pregunta: 2880. ";


//  Id pregunta: 2935 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[26]= new Array();
 choices[26][0] = "1000BaseT";
 choices[26][1] = "1000BaseSX";
 choices[26][2] = "1000BaseLx";
 choices[26][3] = "1000BaseCX";
 answers[26] = choices[26][3];
 units[26] = "99";
 comments[26] = "Id Pregunta: 2935. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3141 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos repetidores?:";
 choices[27]= new Array();
 choices[27][0] = "Operan a nivel de LLC, pudiendo usarse para la interconexi&oacute;n de LANs heterog&eacute;neas de nivel 1 y 2 de OSI";
 choices[27][1] = "Operan a nivel 1 de OSI, pudiendo usarse para conectar diferentes tipos de medio f&iacute;sico";
 choices[27][2] = "Pueden analizar direcci&oacute;n de origen y destino, efectuando funciones de filtrado, pero sobre medios f&iacute;sicos homog&eacute;neos";
 choices[27][3] = "Permiten aislar los diferentes segmentos separando el tr&aacute;fico de cada uno";
 answers[27] = choices[27][1];
 units[27] = "101, 102";
 comments[27] = "Id Pregunta: 3141. ";


//  Id pregunta: 3260 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[28]= new Array();
 choices[28][0] = "S&oacute;lo 1 canal puede estar ocupado en un momento determinado";
 choices[28][1] = "2, ya que puede haber comunicaciones simult&aacute;neas en los canales B de datos";
 choices[28][2] = "1 por cada canal B mientras que el canal D puede ser utilizado por varios terminales en modo paquete";
 choices[28][3] = "3, ya que cada canal solo puede ser utilizado por un terminal a la vez, independientemente de su tipo";
 answers[28] = choices[28][2];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3260. ";


//  Id pregunta: 3405 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  Es falso que las &quot;Etiquetas RF/ID&quot;:";
 choices[29]= new Array();
 choices[29][0] = "Permiten s&oacute;lo lectura a una distancia de 1 metro. La escritura se debe hacer con contacto.";
 choices[29][1] = "Las etiquetas RF/ID pueden contener hasta 64 bytes";
 choices[29][2] = "Son etiquetas con una espiral en su interior de 5 x 5 cm";
 choices[29][3] = "Su principal aplicaci&oacute;n es inventario o seguridad";
 answers[29] = choices[29][0];
 units[29] = "100,11";
 comments[29] = "Id Pregunta: 3405. *: RF/ID";


//  Id pregunta: 3721 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los cortafuegos a nivel de aplicaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "suelen prestar servicios de tipo proxy";
 choices[30][1] = "son generalistas, no bas&aacute;ndose en ning&uacute;n protocolo en concreto";
 choices[30][2] = "no pueden prestar en ning&uacute;n caso servicios de autenticaci&oacute;n de usuarios";
 choices[30][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[30] = choices[30][0];
 units[30] = "111";
 comments[30] = "Id Pregunta: 3721. ";


//  Id pregunta: 3887 Año de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; significa aplicaciones de tres niveles en la arquitectura Cliente/Servidor?";
 choices[31]= new Array();
 choices[31][0] = "La l&oacute;gica de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de datos se pueden distribuir entre los m&uacute;ltiples procesadores de la red.";
 choices[31][1] = "Los servicios de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y el acceso a datos se ejecutan en la estaci&oacute;n cliente mientras que la base de datos est&aacute; situada f&iacute;sicamente en el servidor.";
 choices[31][2] = "La gesti&oacute;n de datos, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de presentaci&oacute;n se encuentran en el servidor mientras que los servicios de presentaci&oacute;n se hallan en el cliente.";
 choices[31][3] = "En una arquitectura Cliente/Servidor no existen aplicaciones a tres niveles.";
 answers[31] = choices[31][0];
 units[31] = "113";
 comments[31] = "Id Pregunta: 3887. ";


//  Id pregunta: 4067 Año de creación de pregunta: 2006-01-01
 questions[32]= "33)  &iquest;Qu&eacute; se puede hacer con un telefono IP?";
 choices[32]= new Array();
 choices[32][0] = "Llamar a un telefono IP de otra red de otro edificio";
 choices[32][1] = "Llamar a otro telefono analogico";
 choices[32][2] = "Ser llamado por otro telefono analogico";
 choices[32][3] = "todos los anteriores";
 answers[32] = choices[32][3];
 units[32] = "117";
 comments[32] = "Id Pregunta: 4067. ";


//  Id pregunta: 4143 Año de creación de pregunta: 2006-01-01
 questions[33]= "34)  La intrusi&oacute;n basada en la habilidad del intruso en enga&ntilde;ar a la gente para que rompa los procedimientos normales de seguridad se llama";
 choices[33]= new Array();
 choices[33][0] = "surfeo sobre los hombros (shoulder surfing)";
 choices[33][1] = "huellas del cerebro (brain fingerprinting)";
 choices[33][2] = "ingenier&iacute;a social";
 choices[33][3] = "susterfugio";
 answers[33] = choices[33][2];
 units[33] = "111";
 comments[33] = "Id Pregunta: 4143. ";


//  Id pregunta: 4241 Año de creación de pregunta: 2007-01-01
 questions[34]= "35)  Cu&aacute;l de las siguientes no es una fase t&iacute;pica de PUDS (Proceso Unificado del Desarrollo del SW)";
 choices[34]= new Array();
 choices[34][0] = "Iniciaci&oacute;n";
 choices[34][1] = "Finalizaci&oacute;n";
 choices[34][2] = "Transici&oacute;n";
 choices[34][3] = "Elaboraci&oacute;n";
 answers[34] = choices[34][1];
 units[34] = "79";
 comments[34] = "Id Pregunta: 4241. ";


//  Id pregunta: 4247 Año de creación de pregunta: 2007-01-01
 questions[35]= "36)  Respecto a la legislaci&oacute;n en materia de administraci&oacute;n electr&oacute;nica en Espa&ntilde;a puede decirse que:";
 choices[35]= new Array();
 choices[35][0] = "Ya la Ley 30/1992 de 26 de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n dedicaba un art&iacute;culo al impulso del empleo y aplicaci&oacute;n de las t&eacute;cnicas y medios electr&oacute;nicos, inform&aacute;ticos y telem&aacute;ticos, por parte de la Administraci&oacute;n.";
 choices[35][1] = "No permite en la actualidad  que ning&uacute;n servicio electr&oacute;nico sustituya a los tr&aacute;mites presenciales, aunque se espera poder avanzar con la introducci&oacute;n del nuevo DNI electr&oacute;nico.";
 choices[35][2] = "En la actualidad no es posible la creaci&oacute;n de registros telem&aacute;ticos en las AAPP, ya que no se puede garantizar que los usuarios accedan a ellos por el bajo &iacute;ndice de penetraci&oacute;n de Internet en Espa&ntilde;a.";
 choices[35][3] = "La notificaci&oacute;n por medios telem&aacute;ticos en la actualidad debe ir acompa&ntilde;ada de una notificaci&oacute;n en papel, incluso si el interesado hubiera se&ntilde;alado el medio telem&aacute;tico como preferente o consentido expresamente";
 answers[35] = choices[35][0];
 units[35] = "30";
 comments[35] = "Id Pregunta: 4247. ";


//  Id pregunta: 4338 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  Marcos es el administrador de una LAN Ethernet que consta de 10 estaciones de trabajo, 2 servidores y 3 impresoras, todo ello conectado a trav&eacute;s de un hub central de 20 puertos. El rendimiento de la red ha ca&iacute;do en picado como consecuencia de la instalaci&oacute;n de una nueva aplicaci&oacute;n, cr&iacute;tica para la Organizaci&oacute;n, que genera muchas colisiones de paquetes, ralentizando los accesos a datos y servicios. Los usuarios presionan al Director de Sistemas de Informaci&oacute;n para que se solucione el problema. El Director pide a Marcos su opini&oacute;n sobre la soluci&oacute;n m&aacute;s econ&oacute;mica y eficiente. El consejo de Marcos deber&iacute;a ser:";
 choices[36]= new Array();
 choices[36][0] = "Sustituir el cableado UTP por fibra &oacute;ptica para aumentar el ancho de banda.";
 choices[36][1] = "Sustituir los dos servidores actuales por un servidor tetraprocesador.";
 choices[36][2] = "Desinstalar la aplicaci&oacute;n que causa los problemas.";
 choices[36][3] = "Sustituir el hub por un switch.";
 answers[36] = choices[36][3];
 units[36] = "100";
 comments[36] = "Id Pregunta: 4338. ";


//  Id pregunta: 4410 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  Los requisitos que debe cumplir un sistema para evitar que sus errores de funcionamiento tengan consecuencias en las personas o equipos, se denominan requisitos de:";
 choices[37]= new Array();
 choices[37][0] = "Fiabilidad.";
 choices[37][1] = "Operaci&oacute;n.";
 choices[37][2] = "Salvaguarda.";
 choices[37][3] = "Verificaci&oacute;n.";
 answers[37] = choices[37][0];
 units[37] = "88";
 comments[37] = "Id Pregunta: 4410. ";


//  Id pregunta: 4516 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  Respecto al software libre:";
 choices[38]= new Array();
 choices[38][0] = "Los usuarios de software libre deben tener Ia libertad de estudiar como funciona el programa y adaptarlo a sus necesidades.";
 choices[38][1] = "El &uacute;nico coste permitido por la distribuci&oacute;n de software libre es el coste de distribuci&oacute;n.";
 choices[38][2] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 choices[38][3] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 answers[38] = choices[38][0];
 units[38] = "61";
 comments[38] = "Id Pregunta: 4516. ";


//  Id pregunta: 4532 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  En el caso de un dise&ntilde;o orientado a objetos, ,se debe tener en cuenta la actividad DSI 6: DISENO FISICO DE DATOS, seg&uacute;n m&eacute;trica V3.?";
 choices[39]= new Array();
 choices[39][0] = "Si se debe tener en cuenta.";
 choices[39][1] = "No se aplica esta actividad.";
 choices[39][2] = "Se aplica esta actividad en funci&oacute;n de Ia arquitectura.";
 choices[39][3] = "Se aplica esta actividad en funci&oacute;n del gestor de base de datos.";
 answers[39] = choices[39][0];
 units[39] = "86";
 comments[39] = "Id Pregunta: 4532. ";


//  Id pregunta: 4550 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  El Sistema de Comunicaciones Moviles Europeo de Tercera Generacion recibe el nombre de:";
 choices[40]= new Array();
 choices[40][0] = "UMTS";
 choices[40][1] = "EDGE";
 choices[40][2] = "DCS-1800.";
 choices[40][3] = "PHS";
 answers[40] = choices[40][0];
 units[40] = "108";
 comments[40] = "Id Pregunta: 4550. ";


//  Id pregunta: 4721 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a .es la tiene legalmenteencomendada:";
 choices[41]= new Array();
 choices[41][0] = "Internic.es";
 choices[41][1] = "Red.es";
 choices[41][2] = "Mityc.es";
 choices[41][3] = " Netsol.es";
 answers[41] = choices[41][1];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4721. Examen 2006 JCYL";


//  Id pregunta: 4980 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  Cu&aacute;l debe ser la frecuencia m&iacute;nima de muestreo de una se&ntilde;al anal&oacute;gica de voz transmitida por un canaltelef&oacute;nico para que pueda ser reconstruida con exactitud:";
 choices[42]= new Array();
 choices[42][0] = "8 muestras/segundo.";
 choices[42][1] = "8000 muestras/segundo.";
 choices[42][2] = "16 muestras/segundo.";
 choices[42][3] = "4000 muestras/segundo.";
 answers[42] = choices[42][1];
 units[42] = "108";
 comments[42] = "Id Pregunta: 4980. Examen TIC B 2007";


//  Id pregunta: 5182 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  En el modelo E/R, las entidades d&eacute;biles:";
 choices[43]= new Array();
 choices[43][0] = "Dependen de la existencia de otro tipo de entidad";
 choices[43][1] = "S&oacute;lo pueden tener un &uacute;nico atributo de clave propio";
 choices[43][2] = "Tienen atributos de clave propios, pero coinciden con los de la entidad fuerte de la que dependen";
 choices[43][3] = "Se representan mediante un rect&aacute;ngulo de trazo discontinuo";
 answers[43] = choices[43][0];
 units[43] = "80";
 comments[43] = "Id Pregunta: 5182. ";


//  Id pregunta: 5245 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  Un Plan de sistemas de Informaci&oacute;n y Comunicaciones se elabora (se&ntilde;ale la falsa):";
 choices[44]= new Array();
 choices[44][0] = "Se elabora a partir de los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[44][1] = "Se recogen las necesidades y requerimientos de los usuarios, en base a procesos de negocio";
 choices[44][2] = "No implica necesariamente el liderazgo del equipo directivo para su &eacute;xito";
 choices[44][3] = "Se valoran los escenarios tecnol&oacute;gicos que aporten el menor riesgo, la mayor protecci&oacute;n de inversiones y los m&aacute;ximos beneficios";
 answers[44] = choices[44][2];
 units[44] = "77";
 comments[44] = "Id Pregunta: 5245. ";


//  Id pregunta: 5442 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[45]= new Array();
 choices[45][0] = "Usando XSL";
 choices[45][1] = "Usando un DTD";
 choices[45][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[45][3] = "Usando XSLT";
 answers[45] = choices[45][1];
 units[45] = "69";
 comments[45] = "Id Pregunta: 5442. Castilla y Le&oacute;n";


//  Id pregunta: 5472 Año de creación de pregunta: 2003-01-01
 questions[46]= "47)  Cual de las siguientes tecnolog&iacute;as no sirve para la implementaci&oacute;n de redes privadas virtuales";
 choices[46]= new Array();
 choices[46][0] = "SSH";
 choices[46][1] = "SLIP";
 choices[46][2] = "IPSEC";
 choices[46][3] = "SSL/TLS";
 answers[46] = choices[46][1];
 units[46] = "102";
 comments[46] = "Id Pregunta: 5472. Castilla y Le&oacute;n";


//  Id pregunta: 5567 Año de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.18 del IEEE?";
 choices[47]= new Array();
 choices[47][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[47][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[47][2] = "Resilient Packet Ring";
 choices[47][3] = "Traspaso entre redes";
 answers[47] = choices[47][0];
 units[47] = "101";
 comments[47] = "Id Pregunta: 5567. ";


//  Id pregunta: 5571 Año de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes opciones NO es necesaria para que una red ethernet pueda funcionar en modo d&uacute;plex completo?";
 choices[48]= new Array();
 choices[48][0] = "El medio f&iacute;sico permite la transmisi&oacute;n d&uacute;plex completa";
 choices[48][1] = "La distancia entre las dos estaciones es menor de 50 m";
 choices[48][2] = "Solo hay dos estaciones conectadas entre s&iacute;";
 choices[48][3] = "Las tarjetas de red de ambos equipos soportan el funcionamiento en modo d&uacute;plex completo";
 answers[48] = choices[48][1];
 units[48] = "102";
 comments[48] = "Id Pregunta: 5571. ";


//  Id pregunta: 5918 Año de creación de pregunta: 2009-01-01
 questions[49]= "50)  CobiT identific&oacute; los siguientes elementos clave, con respecto a los aspectos de seguridad:";
 choices[49]= new Array();
 choices[49][0] = "Idoneidad, continuidad de negocio y certificaci&oacute;n internacional";
 choices[49][1] = "Confidencialidad, integridad y disponibilidad";
 choices[49][2] = "Criticidad, autenticaci&oacute;n y consistencia";
 choices[49][3] = "Convergencia, coherencia y salvaguarda";
 answers[49] = choices[49][1];
 units[49] = "98";
 comments[49] = "Id Pregunta: 5918. MAP 2008 A1";


//  Id pregunta: 5945 Año de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no facilita la ergonom&iacute;a de un sitio Web 2.0?";
 choices[50]= new Array();
 choices[50][0] = "Universos Netvibes";
 choices[50][1] = "gadgets sociales";
 choices[50][2] = "widgets";
 choices[50][3] = "Mashups";
 answers[50] = choices[50][1];
 units[50] = "120";
 comments[50] = "Id Pregunta: 5945. ";


//  Id pregunta: 5953 Año de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Qu&eacute; es com&uacute;n a todas las tecnolog&iacute;as de virtualizaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "Simulaci&oacute;n del Hardware Completo";
 choices[51][1] = "Simulaci&oacute;n del Sistema Operativo";
 choices[51][2] = "Ocultaci&oacute;n de los detalles t&eacute;cnicos a trav&eacute;s de la encapsulaci&oacute;n";
 choices[51][3] = "Paravirtualizaci&oacute;n, donde se ofrece un API especial que debe usarse modificando el sistema operativo &quot;guest&quot;";
 answers[51] = choices[51][2];
 units[51] = "119";
 comments[51] = "Id Pregunta: 5953. ";


//  Id pregunta: 5977 Año de creación de pregunta: 2010-01-01
 questions[52]= "53)  El protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian tr&aacute;fico es:";
 choices[52]= new Array();
 choices[52][0] = "OSPF.";
 choices[52][1] = "No es adecuado usar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas.";
 choices[52][2] = "RIP.";
 choices[52][3] = "BGP-4.";
 answers[52] = choices[52][3];
 units[52] = "102";
 comments[52] = "Id Pregunta: 5977. TIC A 2009";


//  Id pregunta: 6118 Año de creación de pregunta: 2010-01-01
 questions[53]= "54)  Con respecto a BPEL (Business Process Execution Language):";
 choices[53]= new Array();
 choices[53][0] = "Es un lenguaje de coreogr&aacute;fico, no de orquestaci&oacute;n.";
 choices[53][1] = "Es un lenguaje de orquestaci&oacute;n, no un lenguaje coreogr&aacute;fico.";
 choices[53][2] = "Fue creado por WfMC.";
 choices[53][3] = "Es un lenguaje de orquestaci&oacute;n y coreogr&aacute;fico creado por OASIS.";
 answers[53] = choices[53][1];
 units[53] = "51";
 comments[53] = "Id Pregunta: 6118. ";


//  Id pregunta: 6210 Año de creación de pregunta: 2010-01-01
 questions[54]= "55)  Respecto a los DFD: &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera?";
 choices[54]= new Array();
 choices[54][0] = "No es necesario que los nombres en los almacenes de datos y los de las entidades coincidan";
 choices[54][1] = "Cada almac&eacute;n de los DFD debe corresponder con una entidad, o una relaci&oacute;n o una combinaci&oacute;n de ambos";
 choices[54][2] = "En el caso de utilizar un &uacute;nico diccionario de datos las entradas deber&aacute;n coincidir";
 choices[54][3] = "Deben existir procesos en el DFD para crear y eliminar ocurrencias de cada una de las entidades del modelo de datos";
 answers[54] = choices[54][3];
 units[54] = "81";
 comments[54] = "Id Pregunta: 6210. TICB-2009, bloque desarrollo";


//  Id pregunta: 6235 Año de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es el objetivo del Proyecto Mono de Ximian, actualmente impulsado por Novell?";
 choices[55]= new Array();
 choices[55][0] = "Crear una versi&oacute;n Java compatible con el Sistema Operativo GNU/Linux.";
 choices[55][1] = "Crear un Office open source, compatible con el Office de Microsoft.";
 choices[55][2] = "Crear un grupo de herramientas libres, basadas en GNU/Linux y compatibles con .NET seg&uacute;n lo especificado por el ECMA.";
 choices[55][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[55] = choices[55][2];
 units[55] = "115";
 comments[55] = "Id Pregunta: 6235. ";


//  Id pregunta: 6257 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  De qu&eacute; modelo de ciclo de vida del software orientado a objetos son propios los conceptos amplitud, profundidad, madurez, alternativas y alcance";
 choices[56]= new Array();
 choices[56][0] = "Modelo de agrupamiento";
 choices[56][1] = "Modelo fuente";
 choices[56][2] = "Modelo remolino";
 choices[56][3] = "Modelo pinball";
 answers[56] = choices[56][2];
 units[56] = "76";
 comments[56] = "Id Pregunta: 6257. TICB-2009, bloque desarrollo";


//  Id pregunta: 6290 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;C&oacute;mo pueden clasificarse los requisitos de un an&aacute;lisis de sistema de informaci&oacute;n seg&uacute;n Sommerville?";
 choices[57]= new Array();
 choices[57][0] = "Requisitos principales y requisitos secundarios";
 choices[57][1] = "Requisitos del cliente y requisitos de la empresa";
 choices[57][2] = "Requisitos a nivel de sistema y requisitos a nivel de software";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = choices[57][2];
 units[57] = "78";
 comments[57] = "Id Pregunta: 6290. ";


//  Id pregunta: 6321 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  Las reglas de integridad en una base de datos relacional son:";
 choices[58]= new Array();
 choices[58][0] = "Integridad de claves con las claves ajenas";
 choices[58][1] = "Integridad de entidad e integridad referencial";
 choices[58][2] = "Integridad referente a las claves";
 choices[58][3] = "Restricciones de usuario y claves primarias no nulas";
 answers[58] = choices[58][1];
 units[58] = "58";
 comments[58] = "Id Pregunta: 6321. ";


//  Id pregunta: 6413 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  El Watermarking es una t&eacute;cnica para comprobar la legalidad del software, &iquest;De qu&eacute; tipo?";
 choices[59]= new Array();
 choices[59][0] = "An&oacute;nima";
 choices[59][1] = "Esteganogr&aacute;fica";
 choices[59][2] = "Asim&eacute;trica";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = choices[59][1];
 units[59] = "37";
 comments[59] = "Id Pregunta: 6413. ";


//  Id pregunta: 6415 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  De los siguientes, &iquest;Cu&aacute;l no es un estandar del W3C?";
 choices[60]= new Array();
 choices[60][0] = "DOM";
 choices[60][1] = "P3P";
 choices[60][2] = "PVG";
 choices[60][3] = "HTML";
 answers[60] = choices[60][2];
 units[60] = "39";
 comments[60] = "Id Pregunta: 6415. ";


//  Id pregunta: 6493 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  El Coste de Calidad incluye todos los costes acarreados en las actividades relacionadas en la obtenci&oacute;n de la calidad. Los Costes de Calidad se pueden dividir en 3 grupos, que son:";
 choices[61]= new Array();
 choices[61][0] = "Costes asociados con la planificaci&oacute;n, la formaci&oacute;n y las pruebas";
 choices[61][1] = "Costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos";
 choices[61][2] = "Costes asociados con la inspecci&oacute;n, la reparaci&oacute;n y el mantenimiento";
 choices[61][3] = "Costes asociados con el an&aacute;lisis, la revisi&oacute;n y las devoluciones de productos";
 answers[61] = choices[61][1];
 units[61] = "92";
 comments[61] = "Id Pregunta: 6493. Castilla La Mancha 2009";


//  Id pregunta: 6629 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  El modelo CMM de Ingenier&iacute;a de Software ofrece dos representaciones que se denominan:";
 choices[62]= new Array();
 choices[62][0] = "Continua y Discontinua";
 choices[62][1] = "Continua y Por Et&aacute;pas";
 choices[62][2] = "Por &Aacute;reas Clave y Caracter&iacute;sticas";
 choices[62][3] = "Continua y Por &Aacute;reas Clave";
 answers[62] = choices[62][1];
 units[62] = "87";
 comments[62] = "Id Pregunta: 6629. ";


//  Id pregunta: 7151 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  En la guerra de formatos sucesores del DVD, se ha impuesto el Blue-Ray, &iquest;cu&aacute;l es su capacidad de almacenamiento?";
 choices[63]= new Array();
 choices[63][0] = "40 GB para discos de una capa y 85 GB para discos de dos capas";
 choices[63][1] = "20 GB para discos de una capa y 100 GB para discos multicapas";
 choices[63][2] = "25 GB para discos de una capa y 50 GB para discos de dos capas";
 choices[63][3] = "30 GB para discos de una capa y 60 GB para discos de dos capas";
 answers[63] = choices[63][2];
 units[63] = "48";
 comments[63] = "Id Pregunta: 7151. Examen TIC B 2009";


//  Id pregunta: 7178 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  En un esquema de certificaci&oacute;n y seguridad basado en clave p&uacute;blica (PKI), la 'tercera parte confiable' se denomina:";
 choices[64]= new Array();
 choices[64][0] = "Autoridad de Certificaci&oacute;n";
 choices[64][1] = "Autoridad de Registro";
 choices[64][2] = "Centro de Confianza";
 choices[64][3] = "Autoridad de Revocaci&oacute;n";
 answers[64] = choices[64][0];
 units[64] = "74";
 comments[64] = "Id Pregunta: 7178. Examen TIC B 2009";


//  Id pregunta: 7294 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Ordene de menor a mayor dificultad las siguientes tareas de reconocimiento autom&aacute;tico del habla (ASR):";
 choices[65]= new Array();
 choices[65][0] = "Palabras aisladas, word-spotting, palabras conectadas, habla espont&aacute;nea, habla continua";
 choices[65][1] = "Palabras aisladas, palabras conectadas, word-spotting, habla espont&aacute;nea, habla continua";
 choices[65][2] = "Palabras aisladas, word-spotting, palabras conectadas, habla continua, habla espont&aacute;nea";
 choices[65][3] = "Palabras aisladas, palabras conectadas, word-spotting, habla continua, habla espont&aacute;nea";
 answers[65] = choices[65][2];
 units[65] = "94";
 comments[65] = "Id Pregunta: 7294. ";


//  Id pregunta: 7316 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de acceso a datos de Microsoft:";
 choices[66]= new Array();
 choices[66][0] = "ADO.NET";
 choices[66][1] = "OLEDB";
 choices[66][2] = "DEA";
 choices[66][3] = "DAO";
 answers[66] = choices[66][2];
 units[66] = "59";
 comments[66] = "Id Pregunta: 7316. ";


//  Id pregunta: 7321 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Seg&uacute;n la ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico cu&aacute;l de los siguientes servicios se encuentra excluidos del &aacute;mbito de aplicaci&oacute;n de la Ley:";
 choices[67]= new Array();
 choices[67][0] = "Los servicios prestados por notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones p&uacute;blicas";
 choices[67][1] = "Los servicios prestados por prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a";
 choices[67][2] = "Los servicios de la sociedad de la informaci&oacute;n que los prestadores residentes o domiciliados en otro Estado ofrezcan a trav&eacute;s de un establecimiento permanente situado en Espa&ntilde;a";
 choices[67][3] = "Servicios que afecten a derechos de propiedad intelectual o industrial prestados por prestadores de servicios establecidos en otro Estado miembro de la Uni&oacute;n Europea o del Espacio Econ&oacute;mico Europeo cuando el destinatario de los servicios radique en Espa&ntilde;a";
 answers[67] = choices[67][0];
 units[67] = "70";
 comments[67] = "Id Pregunta: 7321. ";


//  Id pregunta: 7329 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Se&ntilde;ale la afirmaci&oacute;n VERDADERA con respecto a AENOR:";
 choices[68]= new Array();
 choices[68][0] = "Es una Entidad P&uacute;blica Empresarial";
 choices[68][1] = "No tiene &aacute;nimo de lucro";
 choices[68][2] = "Depende org&aacute;nicamente de la Secretar&iacute;a de Estado de Telecomunicaciones y para la sociedad de la Informaci&oacute;n";
 choices[68][3] = "Est&aacute; reconocida como organismo de normalizaci&oacute;n y para actuar como entidad de certificaci&oacute;n por el Real Decreto 200/1995";
 answers[68] = choices[68][1];
 units[68] = "42";
 comments[68] = "Id Pregunta: 7329. www.aenor.es";


//  Id pregunta: 7783 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)   La direcci&oacute;n de broadcast de una red de &aacute;rea local clase A, siendo uno de sus nodos la direcci&oacute;n IP  100.254.254.254, es:";
 choices[69]= new Array();
 choices[69][0] = " 100.255.255.255.";
 choices[69][1] = " 0.0.0.255.";
 choices[69][2] = " 100.0.0.0.";
 choices[69][3] = " 100.254.254.255.";
 answers[69] = choices[69][0];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 7783. Map 2005";


//  Id pregunta: 8174 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  La Recomendaci&oacute;n UIT-T I.411 &quot;Configuraciones de referencia de las interfaces Usuario-Red de la RDSI&quot;, define el punto de referencia T entre:";
 choices[70]= new Array();
 choices[70][0] = "La Terminaci&oacute;n de Red 1 (NT1) y la Terminaci&oacute;n de L&iacute;nea (LT).";
 choices[70][1] = "La Terminaci&oacute;n de Red 2 (NT2) y la Terminaci&oacute;n de Red 1 (NT1).";
 choices[70][2] = "El Equipo Terminal de Tipo 1 (TE1) y el Adaptador de Terminal (TA).";
 choices[70][3] = "El Equipo Terminal de Tipo 2 (TE2) y el Adaptador de Terminal (TA).";
 answers[70] = choices[70][1];
 units[70] = "103";
 comments[70] = "Id Pregunta: 8174. Examen TIC A1 2010";


//  Id pregunta: 8183 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  En un contrato de suministro de car&aacute;cter inform&aacute;tico, &iquest;es posible pagar el precio de los bienes adquiridos mediante una parte en dinero y la otra con la entrega de bienes de la misma clase?:";
 choices[71]= new Array();
 choices[71][0] = "No, en ning&uacute;n caso al estar prohibido el pago parcial en especie por las leyes.";
 choices[71][1] = "S&iacute;, siempre es posible. La ley lo admite para todo tipo de contratos.";
 choices[71][2] = "No, salvo autorizaci&oacute;n expresa de la Comisi&oacute;n Ministerial de Administraci&oacute;n Electr&oacute;nica, que el bien entregado no supere los 100.000 euros, y que el adjudicatario del contrato consienta.";
 choices[71][3] = "S&iacute;, siempre que existan razones t&eacute;cnicas o econ&oacute;micas que lo aconsejen, y que el importe de los bienes a entregar no supere el 50 % del total del contrato.";
 answers[71] = choices[71][3];
 units[71] = "41";
 comments[71] = "Id Pregunta: 8183. Examen TIC A1 2010";


//  Id pregunta: 8220 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  En CORBA la invocaci&oacute;n de un objeto para su ejecuci&oacute;n sigue el siguiente camino:";
 choices[72]= new Array();
 choices[72][0] = "Cliente - IDL Stub - ORB (Object Request Broker) - IDL Skeleton -Servidor.";
 choices[72][1] = "Cliente - ORB (Object Request Broker) - Servidor.";
 choices[72][2] = "Cliente - IDL Stub - Servidor.";
 choices[72][3] = "Cliente - IDL Skeleton - ORB (Object Request Broker) - IDL Stub - Servidor.";
 answers[72] = choices[72][0];
 units[72] = "82";
 comments[72] = "Id Pregunta: 8220. Examen TIC A1 2010";


//  Id pregunta: 8429 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes ejes de actuaci&oacute;n no forma parte de los 5 ejes de actuaci&oacute;n definidos en el Plan Avanza 2?";
 choices[73]= new Array();
 choices[73][0] = "Eje Administraci&oacute;n Electr&oacute;nica";
 choices[73][1] = "Eje Capacitaci&oacute;n";
 choices[73][2] = "Eje Infraestructuras";
 choices[73][3] = "Eje Desarrollo del sector TIC";
 answers[73] = choices[73][0];
 units[73] = "30";
 comments[73] = "Id Pregunta: 8429. ";


//  Id pregunta: 8433 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  Uno de los problemas m&aacute;s serios que se pueden presentar en un ambiente de concurrencia es el &ldquo;abrazo mortal&rdquo; (deadlock), el cu&aacute;l se produce cuando se presentan al mismo tiempo 4 condiciones necesarias. &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[74]= new Array();
 choices[74][0] = "Condici&oacute;n de no apropiaci&oacute;n";
 choices[74][1] = "Condici&oacute;n de espera circular";
 choices[74][2] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[74][3] = "Condici&oacute;n de espera ocupada";
 answers[74] = choices[74][3];
 units[74] = "52";
 comments[74] = "Id Pregunta: 8433. ";


//  Id pregunta: 8479 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes operaciones se incorpora en SNMP v2?";
 choices[75]= new Array();
 choices[75][0] = "SetRequest";
 choices[75][1] = "GetBulkRequest";
 choices[75][2] = "GetNextRequest";
 choices[75][3] = "Trap";
 answers[75] = choices[75][1];
 units[75] = "104";
 comments[75] = "Id Pregunta: 8479. Examen TIC A2 2010 interna";


//  Id pregunta: 8486 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  Los centros de proceso de datos o datacenters deben cumplir una serie de caracter&iacute;sticas de seguridad f&iacute;sica, &iquest;cu&aacute;l de las siguientes NO es una buena pol&iacute;tica de seguridad?";
 choices[76]= new Array();
 choices[76][0] = "Debe disponer de puertas de acceso grandes.";
 choices[76][1] = "Debe estar expl&iacute;citamente se&ntilde;alizado.";
 choices[76][2] = "Debe evitar tener ventanas.";
 choices[76][3] = "Dispondr&aacute; de un sistema de refrigeraci&oacute;n";
 answers[76] = choices[76][1];
 units[76] = "32,33";
 comments[76] = "Id Pregunta: 8486. Examen TIC A2 2010 interna";


//  Id pregunta: 8636 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  El proceso de desarrollo de M&eacute;trica v3 contiene todas las actividades y tareas que se deben llevar a cabo para:";
 choices[77]= new Array();
 choices[77][0] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta la instalaci&oacute;n del software.";
 choices[77][1] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis del sistema hasta la construcci&oacute;n del software.";
 choices[77][2] = "Desarrollar un sistema, cubriendo desde el dise&ntilde;o hasta la construcci&oacute;n del software.";
 choices[77][3] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta el mantenimiento del software.";
 answers[77] = choices[77][0];
 units[77] = "86";
 comments[77] = "Id Pregunta: 8636. Examen TIC A2 2010 interna";


//  Id pregunta: 8680 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  a) A que componente del protocolo SIP corresponde la funci&oacute;n de &quot;aceptar peticiones de registros de usuarios y guardar la informaci&oacute;n de estas peticiones para suministrar un servicio de localizaci&oacute;n y traducci&oacute;n de direcciones en el dominio que controla&quot;:";
 choices[78]= new Array();
 choices[78][0] = "Proxy Server.";
 choices[78][1] = "Account Server.";
 choices[78][2] = "Redirect Server.";
 choices[78][3] = "Registrar Server.";
 answers[78] = choices[78][3];
 units[78] = "109";
 comments[78] = "Id Pregunta: 8680. Examen UPM A2 2011";


//  Id pregunta: 8768 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  Identificar la descripci&oacute;n del comando IP ERR&Oacute;NEO:";
 choices[79]= new Array();
 choices[79][0] = "NETSTAT: es una herramienta de l&iacute;nea de comandos que muestra un listado de las conexiones activas de un ordenador, tanto entrantes como salientes. Permite mostrar las estad&iacute;sticas de protocolos y las conexiones TCP/IP actuales";
 choices[79][1] = "IPCONFIG: Muestra o actualiza la configuraci&oacute;n de red TCP/IP";
 choices[79][2] = "NBTSTAT: Muestra estad&iacute;sticas del protocolo y conexiones TCP/IP actuales utilizando NBT. NBTStat es una herramienta que resulta de utilidad para solucionar problemas con la resoluci&oacute;n de nombres llevada a cabo por NetBIOS.";
 choices[79][3] = "TRACERT Muestra todas las direcciones IP intermedias por las que pasa un paquete entre el equipo remoto y la direcci&oacute;n IP especificada.";
 answers[79] = choices[79][3];
 units[79] = "100";
 comments[79] = "Id Pregunta: 8768. Examen TIC A2 2010 interna";


//  Id pregunta: 8953 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  KDE puede arrancar un n&uacute;mero m&aacute;ximo de escritorios virtuales &iquest;cu&aacute;l es ese n&uacute;mero?:";
 choices[80]= new Array();
 choices[80][0] = "16";
 choices[80][1] = "8";
 choices[80][2] = "4";
 choices[80][3] = "6";
 answers[80] = choices[80][1];
 units[80] = "53,54";
 comments[80] = "Id Pregunta: 8953. ";


//  Id pregunta: 8985 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[81]= new Array();
 choices[81][0] = "Organization for the Advancement of Structured Information Services";
 choices[81][1] = "Organization for the Advancement of Service Integration Standards";
 choices[81][2] = "Organization for the Advancement of Structured Information Standards";
 choices[81][3] = "Organization for the Application of Structured Information Standards";
 answers[81] = choices[81][2];
 units[81] = "51, 69";
 comments[81] = "Id Pregunta: 8985. ";


//  Id pregunta: 8990 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  El est&aacute;ndar de telefon&iacute;a m&oacute;vil LTE (Long Term Evolution), emplea";
 choices[82]= new Array();
 choices[82][0] = "MIMO";
 choices[82][1] = "FDD";
 choices[82][2] = "TDD";
 choices[82][3] = "Todas las anteriores";
 answers[82] = choices[82][3];
 units[82] = "107";
 comments[82] = "Id Pregunta: 8990. ";


//  Id pregunta: 9006 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Entre las competencias que la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, atribuye a la Comisi&oacute;n Nacional de los Mercados y la Competencia, est&aacute; analizar la competencia efectiva en los mercados de referencia que defina y determinar los operadores que en esos mercados se consideren:";
 choices[83]= new Array();
 choices[83][0] = "Dominantes.";
 choices[83][1] = "Con poder significativo en el mercado.";
 choices[83][2] = "Anticompetitivos.";
 choices[83][3] = "Incumbentes";
 answers[83] = choices[83][1];
 units[83] = "110";
 comments[83] = "Id Pregunta: 9006. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9014 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Qu&eacute; t&eacute;cnica pueden emplearse para corregir la interferencia entre s&iacute;mbolos en un demodulador digital?";
 choices[84]= new Array();
 choices[84][0] = "el filtrado de coseno alzado de la moduladora";
 choices[84][1] = "el filtrado de pre&eacute;nfasis de la moduladora";
 choices[84][2] = "el filtrado de de retardo de grupo constante";
 choices[84][3] = "Ninguna de las anteriores";
 answers[84] = choices[84][0];
 units[84] = "99";
 comments[84] = "Id Pregunta: 9014. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9019 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  La funci&oacute;n de un repetidor en una l&iacute;nea telef&oacute;nica es &hellip;";
 choices[85]= new Array();
 choices[85][0] = "Amplificar la potencia de las se&ntilde;ales vocales.";
 choices[85][1] = "Compensar la atenuaci&oacute;n y corregir la deformaci&oacute;n de las corrientes vocales.";
 choices[85][2] = "Corregir la paradiafon&iacute;a de la l&iacute;nea.";
 choices[85][3] = "Ninguna de las anteriores";
 answers[85] = choices[85][1];
 units[85] = "99";
 comments[85] = "Id Pregunta: 9019. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9039 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Qu&eacute; es en java una inner class?";
 choices[86]= new Array();
 choices[86][0] = "Es lo mismo que una clase abstracta";
 choices[86][1] = "Una clase declarada dentro de otra";
 choices[86][2] = "Una clase que no puede ser heredada";
 choices[86][3] = "Ninguno de los anteriores";
 answers[86] = choices[86][1];
 units[86] = "60";
 comments[86] = "Id Pregunta: 9039. ";


//  Id pregunta: 9045 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Se&ntilde;ale la afirmaci&oacute;n incorrecta sobre M&eacute;trica";
 choices[87]= new Array();
 choices[87][0] = "Sirve tanto para desarrollo estructurado como para desarrollo orientado a objetos";
 choices[87][1] = "Est&aacute; prohibido su uso fuera de la administraci&oacute;n";
 choices[87][2] = "Los cuatro interfaces son aseguramiento de la calidad, seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos ";
 choices[87][3] = "La &uacute;ltima versi&oacute;n es la tercera";
 answers[87] = choices[87][1];
 units[87] = "86";
 comments[87] = "Id Pregunta: 9045. ";


//  Id pregunta: 9095 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[88]= new Array();
 choices[88][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[88][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[88][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[88][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[88] = choices[88][1];
 units[88] = "36";
 comments[88] = "Id Pregunta: 9095. ";


//  Id pregunta: 9123 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;C&oacute;mo se puede enmarcar el proyecto SETIHome de investigaci&oacute;n de vida extraterrestre?";
 choices[89]= new Array();
 choices[89][0] = "Como una soluci&oacute;n de web 2.0";
 choices[89][1] = "Como un ejemplo pr&aacute;ctico de computaci&oacute;n Grid";
 choices[89][2] = "Una soluci&oacute;n basada en tecnolog&iacute;a Oracle.";
 choices[89][3] = "Ninguna respuesta es correcta.";
 answers[89] = choices[89][1];
 units[89] = "45";
 comments[89] = "Id Pregunta: 9123. ";


//  Id pregunta: 9216 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Para extender las redes SAN qu&eacute; tipo de interconexiones se suelen utilizar:";
 choices[90]= new Array();
 choices[90][0] = "Sonet/SDH, WDM, ATM";
 choices[90][1] = "Sonet/SDH, WDM, ATM, iSCSI, FCIP, iFCP";
 choices[90][2] = "CWDM, DWDM, ATM, iSCSCI, FCIP, iFCP";
 choices[90][3] = "Sonet/SDN, WDM, ATM, iSCSI";
 answers[90] = choices[90][1];
 units[90] = "48";
 comments[90] = "Id Pregunta: 9216. ";


//  Id pregunta: 9362 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  Una red utiliza CSMA/CD. Opera a 1 Gbps con un cable de 500 metros de largo sin repetidores. La velocidad de propagaci&oacute;n en el cable es de 200.000 km/s &iquest;Cu&aacute;l es el tama&ntilde;o m&iacute;nimo de la trama?";
 choices[91]= new Array();
 choices[91][0] = "5000 bits";
 choices[91][1] = "10000 bits";
 choices[91][2] = "1250 bytes";
 choices[91][3] = "1000 bits";
 answers[91] = choices[91][0];
 units[91] = "101";
 comments[91] = "Id Pregunta: 9362. ";


//  Id pregunta: 9382 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  La ley de Cooper afirma que:";
 choices[92]= new Array();
 choices[92][0] = "El n&uacute;mero m&aacute;ximo de conversaciones de voz o su equivalente en tr&aacute;fico de datos que pueden ser llevados a cabo en todo el espectro radioel&eacute;ctrico &uacute;til en una determinada &aacute;rea, se dobla cada 30 minutos.";
 choices[92][1] = "Tijeras cortan papel, papel cubre a piedra, piedra aplasta lagarto, lagarto envenena a Spock.";
 choices[92][2] = "&Eacute;l n&uacute;mero de MFLOPS que un procesador puede realizar, aumenta siguiendo un ritmo logar&iacute;tmico.";
 choices[92][3] = "El rendimiento de un sistema aumenta linealmente con el n&uacute;mero de unidades de procesamiento que posea.";
 answers[92] = choices[92][0];
 units[92] = "108";
 comments[92] = "Id Pregunta: 9382. ";


//  Id pregunta: 9513 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a los servlets de Java:";
 choices[93]= new Array();
 choices[93][0] = "Se alojan en un contenedor web";
 choices[93][1] = "Es un elemento de la capa de presentaci&oacute;n";
 choices[93][2] = "Se pueden invocar desde una URL";
 choices[93][3] = "S&oacute;lo generan contenido est&aacute;tico";
 answers[93] = choices[93][3];
 units[93] = "116";
 comments[93] = "Id Pregunta: 9513. ";


//  Id pregunta: 9590 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  Seg&uacute;n se dispone en la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, los registros electr&oacute;nicos permitir&aacute;n la presentaci&oacute;n de solicitudes:";
 choices[94]= new Array();
 choices[94][0] = "Exclusivamente en los mismos horarios que los registros presenciales.";
 choices[94][1] = "Exclusivamente los d&iacute;as laborables del a&ntilde;o, durante las 24 horas. ";
 choices[94][2] = "Todos los d&iacute;as del a&ntilde;o, durante las 24 horas. ";
 choices[94][3] = "Exclusivamente los d&iacute;as h&aacute;biles del a&ntilde;o, durante las 24 horas.";
 answers[94] = choices[94][2];
 units[94] = "43";
 comments[94] = "Id Pregunta: 9590. Examen TIC A2 2011 interna";


//  Id pregunta: 9754 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  La tarea de especificaci&oacute;n de necesidades de Migraci&oacute;n en M&eacute;trica v3 se tiene en cuenta en la actividad:";
 choices[95]= new Array();
 choices[95][0] = "Elaboraci&oacute;n del modelo de datos en ASI";
 choices[95][1] = "Dise&ntilde;o de clases en DSI";
 choices[95][2] = "Dise&ntilde;o de la Migraci&oacute;n y carga inicial de datos en DSI";
 choices[95][3] = "A y B son correctas";
 answers[95] = choices[95][3];
 units[95] = "86";
 comments[95] = "Id Pregunta: 9754. Ambas actividades tienen una tarea llamada &quot;Especificaci&oacute;n de necesidades de Migraci&oacute;n y Carga inicial de datos&quot;";


//  Id pregunta: 9928 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En IPv4 el n&uacute;mero m&aacute;ximo de fragmentos por datagrama son:";
 choices[96]= new Array();
 choices[96][0] = "8192.";
 choices[96][1] = "1024.";
 choices[96][2] = "512.";
 choices[96][3] = "2048.";
 answers[96] = choices[96][0];
 units[96] = "100";
 comments[96] = "Id Pregunta: 9928. ";


//  Id pregunta: 10074 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Se&ntilde;ale cuales de las siguiente afirmaciones NO es una caracter&iacute;stica del protocolo EAP-TTLS:";
 choices[97]= new Array();
 choices[97][0] = "En la creaci&oacute;n del t&uacute;nel TLS el servidor se autentica mediante certificado.";
 choices[97][1] = "El cliente puede usar un m&eacute;todo de autenticaci&oacute;n distinto a EAP.";
 choices[97][2] = "Est&aacute; soportado de forma nativa en sistemas operativos Windows 7.";
 choices[97][3] = "Los mensajes de autenticaci&oacute;n del cliente son enviados cifrados al servidor.";
 answers[97] = choices[97][2];
 units[97] = "111";
 comments[97] = "Id Pregunta: 10074. TIC A2, libre, examen 2013";


//  Id pregunta: 10167 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;A qu&eacute; t&eacute;rmino corresponde la siguiente definici&oacute;n: &quot;Dada una relaci&oacute;n, un atributo o grupo de atributos B depende funcionalmente de A, pero no de ning&uacute;n subconjunto de atributos de A&quot;?";
 choices[98]= new Array();
 choices[98][0] = "Dependencia funcional";
 choices[98][1] = "Dependencia multivaluada";
 choices[98][2] = "Dependencia funcional trivial";
 choices[98][3] = "Dependencia funcional completa";
 answers[98] = choices[98][3];
 units[98] = "58";
 comments[98] = "Id Pregunta: 10167. ";


//  Id pregunta: 10265 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  	Podr&aacute;n tratarse datos personales relativos al cumplimiento o incumplimiento de obligaciones dinerarias";
 choices[99]= new Array();
 choices[99][0] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida y por tiempo indefinido";
 choices[99][1] = "Desde el momento en que se adquiere el compromiso de pago y por tiempo indefinido";
 choices[99][2] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida siempre que no hayan transcurrido seis a&ntilde;os de dicho impago";
 choices[99][3] = "Desde el momento en que se adquiere el compromiso de pago siempre que no hayan transcurrido seis a&ntilde;os de la adquisici&oacute;n de la deuda";
 answers[99] = choices[99][2];
 units[99] = "29";
 comments[99] = "Id Pregunta: 10265. Art&iacute;culo 38.1 a) y b) del RD 1720/2007";


