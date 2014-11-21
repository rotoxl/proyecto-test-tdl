/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 188 Año de creación de pregunta: 2004-01-01
 questions[0]= "1)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[0]= new Array();
 choices[0][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[0][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[0][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[0][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[0] = choices[0][2];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 188. Similar a examen TIC SS A 2003";


//  Id pregunta: 211 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  En la dimensi&oacute;n horizontal de un sistema de informaci&oacute;n, dentro de cada nivel las funciones se dividen en:";
 choices[1]= new Array();
 choices[1][0] = "Aplicaciones y procedimientos";
 choices[1][1] = "Aplicaciones y tareas";
 choices[1][2] = "Aplicaciones o procedimientos";
 choices[1][3] = "Aplicaciones o tareas";
 answers[1] = choices[1][2];
 units[1] = "21";
 comments[1] = "Id Pregunta: 211. ";


//  Id pregunta: 287 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La clasificaci&oacute;n de las tareas realizadas en la oficina en cuatro tipos b&aacute;sicos (mensajes, gesti&oacute;n de informaci&oacute;n personal y acceso a la informaci&oacute;n) fue realizada por:";
 choices[2]= new Array();
 choices[2][0] = "Carter  y Huzan";
 choices[2][1] = "Kent";
 choices[2][2] = "Price";
 choices[2][3] = "Panki";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 287. ";


//  Id pregunta: 437 Año de creación de pregunta: 2009-01-01
 questions[3]= "4)  Seg&uacute;n la LOPD, los datos de car&aacute;cter personal que revelan la ideolog&iacute;a, religi&oacute;n y creencias podr&aacute;n ser objeto de tratamiento automatizado:";
 choices[3]= new Array();
 choices[3][0] = "Con consentimiento expreso del afectado";
 choices[3][1] = "Con consentimiento expreso y por escrito del afectado";
 choices[3][2] = "Nunca podr&aacute; ser objeto de tratamiento automatizado";
 choices[3][3] = "Cuando por razones de inter&eacute;s general as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 answers[3] = choices[3][1];
 units[3] = "29";
 comments[3] = "Id Pregunta: 437. ";


//  Id pregunta: 484 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a las recomendaciones de la ITU es falsa?:";
 choices[4]= new Array();
 choices[4][0] = "La norma X.200 (ISO 7498) define el modelo de referencia para la interconexi&oacute;n de sistemas abiertos (OSI)";
 choices[4][1] = "La norma X.400 (ISO 10021) define un sistema de gesti&oacute;n de mensajes (MHS)";
 choices[4][2] = "La norma X.500 (ISO 9594) define los servicios de directorio";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][3];
 units[4] = "42";
 comments[4] = "Id Pregunta: 484. ";


//  Id pregunta: 504 Año de creación de pregunta: 2003-01-01
 questions[5]= "6)  En la planificaci&oacute;n de un  Proyecto lo cierto es";
 choices[5]= new Array();
 choices[5][0] = "El diagrama de Gantt expresa el camino cr&iacute;tico";
 choices[5][1] = "Una tarea no perteneciente al camino cr&iacute;tico puede retrasar la finalizaci&oacute;n del proyecto";
 choices[5][2] = "En el diagrama de PERT los arcos no son dirigidos";
 choices[5][3] = "El gr&aacute;fico de Gant se basa en la representaci&oacute;n de restricciones";
 answers[5] = choices[5][1];
 units[5] = "28";
 comments[5] = "Id Pregunta: 504. ";


//  Id pregunta: 578 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  La empresa Du Pont inici&oacute; un estudio sobre t&eacute;cnicas de aplicaci&oacute;n de ordenadores a la planificaci&oacute;n y programaci&oacute;n de proyectos, que recibi&oacute; el nombre de:";
 choices[6]= new Array();
 choices[6][0] = "CPM (Critical Path Method).";
 choices[6][1] = "PERT.";
 choices[6][2] = "Diagrama de Gant.";
 choices[6][3] = "PROPS.";
 answers[6] = choices[6][0];
 units[6] = "27";
 comments[6] = "Id Pregunta: 578. ";


//  Id pregunta: 643 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Cu&aacute;l de las siguientes afirmaciones sobre X/OPEN es incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "POSIX (Portable Operating System Interface), creado por X/OPEN, consite en la creaci&oacute;n de interfaces est&aacute;ndares de sistema operativo.";
 choices[7][1] = "CAE (common Application Enviroment), creado por X/OPEN, est&aacute; basado en est&aacute;ndares internacionales y de hecho.";
 choices[7][2] = "XPG es la gu&iacute;a de portabilidad de X/OPEN";
 choices[7][3] = "X/Open es una compa&ntilde;&iacute;a independiente, sin &aacute;nimo de lucro, compuesta por usuarios, vendedores independientes de software y vendedores de sistemas inform&aacute;ticos de todo el mundo.";
 answers[7] = choices[7][0];
 units[7] = "40";
 comments[7] = "Id Pregunta: 643. ";


//  Id pregunta: 789 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  Est&aacute;n excluidos del &aacute;mbito de la Ley de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[8]= new Array();
 choices[8][0] = "Notarios y registradores de la propiedad en el ejercicio de sus funciones p&uacute;blicas";
 choices[8][1] = "Servicios de venta de arte del patrimonio";
 choices[8][2] = "Servicios bancarios";
 choices[8][3] = "Servicios de la Comisi&oacute;n Nacional del Mercado de Valores";
 answers[8] = choices[8][0];
 units[8] = "30";
 comments[8] = "Id Pregunta: 789. SS-A 2004. art&iacute;culo 5";


//  Id pregunta: 827 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;C&oacute;mo son los tipos de datos en Java?:";
 choices[9]= new Array();
 choices[9][0] = "Pese a estar orientado a objetos el lenguaje, los tipos no est&aacute;n orientados a objetos";
 choices[9][1] = "Al estar orientado a objetos el lenguaje, los tipos est&aacute;n orientados a objetos";
 choices[9][2] = "Algunos de los tipos son orientados a objetos y otros no";
 choices[9][3] = "Debido a las peculiares caracteristicas de Java , los tipos de datos no pueden clasificarse en ninguna de las dos categor&iacute;as.";
 answers[9] = choices[9][2];
 units[9] = "60";
 comments[9] = "Id Pregunta: 827. ";


//  Id pregunta: 1195 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indique una caracter&iacute;stica falsa de Java:";
 choices[10]= new Array();
 choices[10][0] = "Es interpretado y portable a distintas plataformas";
 choices[10][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[10][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[10][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[10] = choices[10][3];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1195. JCED - Preparatic XVII";


//  Id pregunta: 1274 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Los lenguajes de cuarta generaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Necesitan menos recursos que los de generaciones anteriores.";
 choices[11][1] = "Necesitan m&aacute;s recursos que los de generaciones  anteriores.";
 choices[11][2] = "Tienen un tiempo de respuesta generalmente superior a los lenguajes de generaciones anteriores.";
 choices[11][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[11] = choices[11][3];
 units[11] = "91";
 comments[11] = "Id Pregunta: 1274. ";


//  Id pregunta: 1480 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Suponiendo una densidad de grabaci&oacute;n lineal d = 10000 bits/cm, un radio R = 5 cm, una velocidad de giro de 3600 rpm y utilizaci&oacute;n de bits de paridad, la velocidad de transferencia es de:";
 choices[12]= new Array();
 choices[12][0] = "0.2 Mbytes/s";
 choices[12][1] = "10 Mbytes/s";
 choices[12][2] = "2.1 Mbytes/s";
 choices[12][3] = "18.9 Mbytes/s";
 answers[12] = choices[12][2];
 units[12] = "48";
 comments[12] = "Id Pregunta: 1480. ";


//  Id pregunta: 1606 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  Indicar la afirmaci&oacute;n que no es cierta sobre Marcos";
 choices[13]= new Array();
 choices[13][0] = "Representan conceptos estereotipados o patronespredefinidos sobre ideas y situaciones, aunando las caracter&iacute;sticas que cualifican el concepto";
 choices[13][1] = "Se caracteriza por representar conceptos gr&aacute;ficamente mediante nodos y sus relaciones entre ellos mediante arcos";
 choices[13][2] = "el marco es una entidad din&aacute;mica, conprocedimientos incluidos en los slots, que se ejecutan durante un proceso de razonamiento m&aacute;s general";
 choices[13][3] = "Los procedimientos de inferencia asociados a los marcos son: deducci&oacute;n de valores de slots, actualizaci&oacute;n de valores de slots y equiparaci&oacute;n de marcos";
 answers[13] = choices[13][1];
 units[13] = "64";
 comments[13] = "Id Pregunta: 1606. Pregunta no perteneciente al test  del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de Marcos)";


//  Id pregunta: 1658 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  La gesti&oacute;n de un sistema operativo a trav&eacute;s de los sistemas distribuidos";
 choices[14]= new Array();
 choices[14][0] = "Aporta como ventajas: La compartici&oacute;n de recursos, la aceleraci&oacute;n de c&aacute;lculos, la fiabilidad y la comunicaci&oacute;n.";
 choices[14][1] = "Son sistemas altamente acoplados, los procesadores comparten tanto memoria como reloj.";
 choices[14][2] = "Son sistemas d&eacute;bilmente acoplados, compartiendo los procesadores la memoria.";
 choices[14][3] = "Son sistemas d&eacute;bilmente acoplados, los procesadores comparten reloj pero no memoria.";
 answers[14] = choices[14][0];
 units[14] = "50";
 comments[14] = "Id Pregunta: 1658. MAP-B 2003";


//  Id pregunta: 1764 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre los ficheros .jar de Java";
 choices[15]= new Array();
 choices[15][0] = "Est&aacute;ndar de empaquetado de ficheros compilados, para facilitar su distribuci&oacute;n y reutilizaci&oacute;n";
 choices[15][1] = "Utiliza para la compresi&oacute;n el algoritmo LZW";
 choices[15][2] = "Son ficheros independientes de la plataforma y cualquier JVM (Java Virtual Machine) ser&aacute; capaz de interpretarlos";
 choices[15][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[15] = choices[15][3];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1764. ";


//  Id pregunta: 1792 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Los agentes de software inteligentes pueden clasificarse en tres &aacute;reas de acuerdo a sus &aacute;reas de aplicaci&oacute;n. Indique qu&eacute; terna define dichas &aacute;reas:";
 choices[16]= new Array();
 choices[16][0] = "Agentes virtuales, de informaci&oacute;n y de heur&iacute;sticas";
 choices[16][1] = "Agentes de informaci&oacute;n, de interfaz y de heur&iacute;sticas";
 choices[16][2] = "Agentes de interfaz, de informaci&oacute;n, y virtuales";
 choices[16][3] = "Agentes virtuales, de interfaz y de heur&iacute;sticas";
 answers[16] = choices[16][2];
 units[16] = "63";
 comments[16] = "Id Pregunta: 1792. ";


//  Id pregunta: 1849 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Un sistema de Workflow seg&uacute;n la WfMC debe incluir necesariamente la funci&oacute;n de:";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de notificaciones y colas de trabajo";
 choices[17][1] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 choices[17][2] = "Facilidades de enrrutamiento";
 choices[17][3] = "Todas las anteriores";
 answers[17] = choices[17][3];
 units[17] = "71";
 comments[17] = "Id Pregunta: 1849. ";


//  Id pregunta: 1863 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes no es un sistema operativo utilizado en la arquitectura de un sistema de tarjeta inteligente?";
 choices[18]= new Array();
 choices[18][0] = "MultOS";
 choices[18][1] = "Jini";
 choices[18][2] = "Java Card";
 choices[18][3] = "SCfW";
 answers[18] = choices[18][1];
 units[18] = "74";
 comments[18] = "Id Pregunta: 1863. ";


//  Id pregunta: 2115 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Bajo qu&eacute; normas de la serie ISO-9000 puede registrarse una empresa?:";
 choices[19]= new Array();
 choices[19][0] = "9001, 9002 y 9003";
 choices[19][1] = "S&oacute;lo 9001";
 choices[19][2] = "9000, 9001, 9002, 9003 y 9004";
 choices[19][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[19] = choices[19][0];
 units[19] = "92";
 comments[19] = "Id Pregunta: 2115. ";


//  Id pregunta: 2546 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los sintetizadores de voz utilizan dos m&eacute;todos para sintetizar las palabras. Uno de ellos es:";
 choices[20]= new Array();
 choices[20][0] = "S&iacute;ntesis constructiva";
 choices[20][1] = "S&iacute;ntesis acumulativa";
 choices[20][2] = "S&iacute;ntesis simulativa";
 choices[20][3] = "S&iacute;ntesis por patrones";
 answers[20] = choices[20][0];
 units[20] = "94";
 comments[20] = "Id Pregunta: 2546. ";


//  Id pregunta: 2605 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest; Qu&eacute; diferencia fundamental existe entre el Diagrama de Estructura de Datos y el Modelo Entidad Relaci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "Ninguna, son dos nombres que definen exactamente el mismo modelo.";
 choices[21][1] = "S&oacute;lo se diferencian en la representaci&oacute;n geom&eacute;trica de las entidades, que en el de Entidad Relaci&oacute;n son rect&aacute;ngulos y en el de Estructura de Datos son elipses, el resto es igual.";
 choices[21][2] = "En el modelo Entidad Relaci&oacute;n pueden existir relaciones n-arias mientras que en el de Estructura de Datos estas relaciones se representan cre&aacute;ndose una entidad auxiliar y dos relaciones 1:m.";
 choices[21][3] = " El Diagrama de Estructura de Datos no es un modelo que sirva para la representaci&oacute;n l&oacute;gica de los datos mientras que el Entidad Relaci&oacute;n s&iacute;.";
 answers[21] = choices[21][2];
 units[21] = "58,80";
 comments[21] = "Id Pregunta: 2605. ";


//  Id pregunta: 2728 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  La funci&oacute;n principal del Comit&eacute; de Direcci&oacute;n en la planificaci&oacute;n estrat&eacute;gica es:";
 choices[22]= new Array();
 choices[22][0] = "Definir la administraci&oacute;n, procedimiento y organizaci&oacute;n del trabajo.";
 choices[22][1] = "la toma de decisiones a lo largo de las distintas etapas/fases en que se descompone el plan";
 choices[22][2] = "Colaborar en la soluci&oacute;n funcional de los problemas planteados";
 choices[22][3] = "Realizar estudios espec&iacute;ficos";
 answers[22] = choices[22][1];
 units[22] = "77";
 comments[22] = "Id Pregunta: 2728. ";


//  Id pregunta: 2846 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;Qu&eacute; formato de compresi&oacute;n no tiene p&eacute;rdidas?";
 choices[23]= new Array();
 choices[23][0] = "JPEG";
 choices[23][1] = "ECW";
 choices[23][2] = "Mrsid";
 choices[23][3] = "RLE";
 answers[23] = choices[23][3];
 units[23] = "93";
 comments[23] = "Id Pregunta: 2846. ";


//  Id pregunta: 3061 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  En ASP, &iquest;qu&eacute; objeto se utiliza para compartir informaci&oacute;n entre todos los usuarios de una aplicaci&oacute;n?:";
 choices[24]= new Array();
 choices[24][0] = "Application";
 choices[24][1] = "Request";
 choices[24][2] = "Server";
 choices[24][3] = "Session";
 answers[24] = choices[24][0];
 units[24] = "115";
 comments[24] = "Id Pregunta: 3061. ";


//  Id pregunta: 3156 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta respecto a los dispositivos a usar en la interconexi&oacute;n de redes locales?";
 choices[25]= new Array();
 choices[25][0] = "Los conmutadores se utilizan para resolver problemas de rendimiento de la red debido a anchos de banda peque&ntilde;os y embotellamientos";
 choices[25][1] = "Los encaminadores o routers son independientes del protocolo, ya que se sit&uacute;an en el nivel de red y eligen la ruta m&aacute;s eficiente de cada paquete que reciben";
 choices[25][2] = "El protocolo &quot;spanning tree&quot; tiene como misi&oacute;n evitar la formaci&oacute;n de bucles en la interconexi&oacute;n de elementos de una red";
 choices[25][3] = "Los repetidores obligan a que los 2 segmentos que interconectan tenga el mismo acceso al medio, la misma direcci&oacute;n de red y trabaje con los mismos protocolos";
 answers[25] = choices[25][1];
 units[25] = "102";
 comments[25] = "Id Pregunta: 3156. ";


//  Id pregunta: 3356 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  De los cuatro octetos que forman una direcci&oacute;n del protocolo IP indicar en qu&eacute; clase de red se utiliza un octeto para los n&uacute;meros de host:";
 choices[26]= new Array();
 choices[26][0] = "Clase B";
 choices[26][1] = "Clase D";
 choices[26][2] = "Clase A";
 choices[26][3] = "Clase C";
 answers[26] = choices[26][3];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3356. ";


//  Id pregunta: 3611 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  La interconexi&oacute;n de intranets puede llevarse a cabo mediante:";
 choices[27]= new Array();
 choices[27][0] = "repetidores y concentradores a nivel f&iacute;sico, encaminadores a nivel de enlace, puentes a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[27][1] = "repetidores, concentradores y encaminadores a nivel f&iacute;sico, puentes a nivel de enlace y pasarelas a nivel de aplicaci&oacute;n";
 choices[27][2] = "repetidores y concentradores a nivel f&iacute;sico, puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[27][3] = "repetidores a nivel f&iacute;sico, concentradores y puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 answers[27] = choices[27][2];
 units[27] = "100,103,113";
 comments[27] = "Id Pregunta: 3611. ";


//  Id pregunta: 3883 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;De qu&eacute; manera se puede balancear una granja de servidores?";
 choices[28]= new Array();
 choices[28][0] = "Se puede utilizar un balanceador hardware si hay comunicaci&oacute;n entre los nodos de la granja";
 choices[28][1] = "Se puede utilizar  un software cargado en cada nodo para repartir la carga entre los mismos";
 choices[28][2] = "Se puede hacer el balanceo con un balanceador hardware como con un balanceador software";
 choices[28][3] = "Ninguna de las respuestas es cierta";
 answers[28] = choices[28][2];
 units[28] = "113";
 comments[28] = "Id Pregunta: 3883. ";


//  Id pregunta: 4207 Año de creación de pregunta: 2006-01-01
 questions[29]= "30)  La fibra &oacute;ptica monomodo m&aacute;s popular es";
 choices[29]= new Array();
 choices[29][0] = "9/125 um";
 choices[29][1] = "62.5/125 um";
 choices[29][2] = "50/125 um";
 choices[29][3] = "100/140 um";
 answers[29] = choices[29][0];
 units[29] = "99";
 comments[29] = "Id Pregunta: 4207. ";


//  Id pregunta: 4318 Año de creación de pregunta: 2007-01-01
 questions[30]= "31)  El sistema de gesti&oacute;n de riesgos MAGERIT establece que los subestados de seguridad de un activo son";
 choices[30]= new Array();
 choices[30][0] = "Autenticaci&oacute;n, confidencialidad, inclusi&oacute;n y disponibilidad.";
 choices[30][1] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[30][2] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 choices[30][3] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 answers[30] = choices[30][1];
 units[30] = "33";
 comments[30] = "Id Pregunta: 4318. ";


//  Id pregunta: 4415 Año de creación de pregunta: 2007-01-01
 questions[31]= "32)  En el m&eacute;todo TOPSIS de decisi&oacute;n entre alternativas...";
 choices[31]= new Array();
 choices[31][0] = "La alternativa seleccionada debe ser aqu&eacute;lla que est&eacute; lo m&aacute;s cerca posible de la soluci&oacute;n ideal positiva y lo m&aacute;s lejos posible de la soluci&oacute;n ideal negativa.";
 choices[31][1] = "La idea es comparar cada permutaci&oacute;n posible de alternativas con la informaci&oacute;n ordinal de evaluaciones que aporta para cada criterio la matriz de decisi&oacute;n.";
 choices[31][2] = "En cada comparaci&oacute;n se asocia: &iacute;ndice de concordancia (mide argumentos a favor de la alternativa) e &iacute;ndice de discordancia (mide argumentos en contra).";
 choices[31][3] = "Se ignora la cuant&iacute;a de la diferencia entre alternativas para cada criterio, s&oacute;lo se&ntilde;ala si existe o no, y considera la importancia del criterio para el decisor.";
 answers[31] = choices[31][0];
 units[31] = "34";
 comments[31] = "Id Pregunta: 4415. ";


//  Id pregunta: 4420 Año de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Qu&eacute; comando se utiliza para comprobar una conexi&oacute;n f&iacute;sica entre dos hosts?";
 choices[32]= new Array();
 choices[32][0] = "TPING.";
 choices[32][1] = "WINPING.";
 choices[32][2] = "TCPING.";
 choices[32][3] = "PING.";
 answers[32] = choices[32][3];
 units[32] = "100";
 comments[32] = "Id Pregunta: 4420. ";


//  Id pregunta: 4476 Año de creación de pregunta: 2007-01-01
 questions[33]= "34)  Dentro de las m&eacute;tricas de software basadas en el texto del c&oacute;digo, &iquest;cuales son las cuatro cantidades b&aacute;sicas?";
 choices[33]= new Array();
 choices[33][0] = "El numero de tipos de operandos (datos, variables, etc.), el numero de ocurrencias de los mismos, el numero de tipos de operadores (instrucciones, funciones, etc.) y el numero de ocurrencias de los mismos.";
 choices[33][1] = "El control intramodular, el grafo de control, Ia arquitectura de m&oacute;dulos y los diagramas de estructuras.";
 choices[33][2] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo, el n&uacute;mero de sentencias o instrucciones completas, el n&uacute;mero de variables, el n&uacute;mero de operaciones aritm&eacute;ticas.";
 choices[33][3] = "El n&uacute;mero de flujos que terminan en un determinado modulo, el numero de estructuras de datos de las cuales el modulo extrae informaci&oacute;n, el numero de flujos que salen de un determinado modulo y el numero de estructuras de datos que actualiza el modulo.";
 answers[33] = choices[33][0];
 units[33] = "88";
 comments[33] = "Id Pregunta: 4476. ";


//  Id pregunta: 4573 Año de creación de pregunta: 2007-01-01
 questions[34]= "35)  Indica cual de las siguientes expresiones NO es correcta en un entorno de e-Learning:";
 choices[34]= new Array();
 choices[34][0] = "el LMS se encarga de gestionar los usuarios, los cursos y as herramientas de comunicaci&oacute;n.";
 choices[34][1] = "dos componentes fundamentales en este tipo de ense&ntilde;anza son el LMS y el courseware.";
 choices[34][2] = "se pueden establecer comunicaciones tanto s&iacute;ncronas como as&iacute;ncronas.";
 choices[34][3] = "para compatibilizar LMS y courseware de distintos fabricantes se utilizan los est&aacute;ndares ADL SCORM y UDDI.";
 answers[34] = choices[34][3];
 units[34] = "66";
 comments[34] = "Id Pregunta: 4573. ";


//  Id pregunta: 4586 Año de creación de pregunta: 2007-01-01
 questions[35]= "36)  Las siglas HSDPA corresponden a:";
 choices[35]= new Array();
 choices[35][0] = "High-Speed Dynamic Packet Access";
 choices[35][1] = "High-Speed Downlink Packet Access";
 choices[35][2] = "High-Speed Data Packet Access";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][1];
 units[35] = "108";
 comments[35] = "Id Pregunta: 4586. ";


//  Id pregunta: 4604 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  Ignorar quien accede a que dato y cuando lo hace, afecta a Ia dimensi&oacute;n de la seguridad denominada";
 choices[36]= new Array();
 choices[36][0] = "confidencialidad";
 choices[36][1] = "disponibilidad";
 choices[36][2] = "integridad";
 choices[36][3] = "trazabilidad";
 answers[36] = choices[36][3];
 units[36] = "111";
 comments[36] = "Id Pregunta: 4604. ";


//  Id pregunta: 4609 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  Indicar en cual de los siguientes niveles CMM se define como &aacute;rea clave de proceso Ia gesti&oacute;n de configuraci&oacute;n de software";
 choices[37]= new Array();
 choices[37][0] = "repetible";
 choices[37][1] = "definido";
 choices[37][2] = "gestionado";
 choices[37][3] = "optimizado";
 answers[37] = choices[37][0];
 units[37] = "98";
 comments[37] = "Id Pregunta: 4609. ";


//  Id pregunta: 4658 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l es el periodo de vigencia de los certificados contenidos en el DNI electronico?";
 choices[38]= new Array();
 choices[38][0] = "El mismo que el DNI ";
 choices[38][1] = "36 meses";
 choices[38][2] = "30 meses";
 choices[38][3] = "12 meses";
 answers[38] = choices[38][2];
 units[38] = "30";
 comments[38] = "Id Pregunta: 4658. ";


//  Id pregunta: 4861 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes secuencias de actividades NO se corresponde con una actividad del proceso de elaboraci&oacute;n de un Plan de Sistemas seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[39]= new Array();
 choices[39][0] = "Estudio de informaci&oacute;n relevante";
 choices[39][1] = "Definici&oacute;n de un Plan de acci&oacute;n";
 choices[39][2] = "Definici&oacute;n de un Plan de Riesgo";
 choices[39][3] = "Estudio de los sistemas de informaci&oacute;n actuales";
 answers[39] = choices[39][2];
 units[39] = "86";
 comments[39] = "Id Pregunta: 4861. ";


//  Id pregunta: 4969 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes redes no admite asignar niveles de prioridad en el tr&aacute;fico transmitido?:";
 choices[40]= new Array();
 choices[40][0] = "802.6.";
 choices[40][1] = "802.3.";
 choices[40][2] = "802.4.";
 choices[40][3] = "802.5.";
 answers[40] = choices[40][1];
 units[40] = "101";
 comments[40] = "Id Pregunta: 4969. Examen TIC B 2007";


//  Id pregunta: 5152 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes NO es un tipo de asociaci&oacute;n de un diagrama de clases?";
 choices[41]= new Array();
 choices[41][0] = "Interrelaciones";
 choices[41][1] = "Sometimiento";
 choices[41][2] = "Generalizaci&oacute;n";
 choices[41][3] = "Agregaci&oacute;n";
 answers[41] = choices[41][1];
 units[41] = "82";
 comments[41] = "Id Pregunta: 5152. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5301 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  Cu&aacute;l de las siguientes no es una clase de servicio ATM";
 choices[42]= new Array();
 choices[42][0] = "CBR";
 choices[42][1] = "HBR";
 choices[42][2] = "UBR";
 choices[42][3] = "NRT-VBR";
 answers[42] = choices[42][1];
 units[42] = "109";
 comments[42] = "Id Pregunta: 5301. ";


//  Id pregunta: 5455 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  Una Importante cuesti&oacute;n a considerar en la elecci&oacute;n de una sentencia SQL es";
 choices[43]= new Array();
 choices[43][0] = "N&uacute;mero de CPUs en el servidor";
 choices[43][1] = "Grado de paralelismo de las tablas";
 choices[43][2] = "Uso de &iacute;ndices de mapas de bits";
 choices[43][3] = "Calidad de las optimizaciones de las sentencias SQL";
 answers[43] = choices[43][3];
 units[43] = "58";
 comments[43] = "Id Pregunta: 5455. Castilla y Le&oacute;n";


//  Id pregunta: 5504 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  Se&ntilde;ala la caracter&iacute;sitca incorrecta respecto a AJAX:";
 choices[44]= new Array();
 choices[44][0] = "Incorpora caracter&iacute;sticas propias de aplicaciones tipo push";
 choices[44][1] = "Requiere Flash para su ejecuci&oacute;n";
 choices[44][2] = "Se basa en JavaScript y XML";
 choices[44][3] = "Actualiza los datos de la interfaz de forma espontanea";
 answers[44] = choices[44][1];
 units[44] = "69";
 comments[44] = "Id Pregunta: 5504. ";


//  Id pregunta: 5798 Año de creación de pregunta: 2009-01-01
 questions[45]= "46)  Indique cuales son las funciones fundamentales del Comit&eacute; Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[45]= new Array();
 choices[45][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones usados por las Administraciones P&uacute;blicas. Preparar planes de acci&oacute;n conjuntos y programas, para fomentar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[45][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[45][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[45][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[45] = choices[45][0];
 units[45] = "30";
 comments[45] = "Id Pregunta: 5798. MAP 2008 A2";


//  Id pregunta: 5912 Año de creación de pregunta: 2009-01-01
 questions[46]= "47)  El proyecto GNU fue concebido por:";
 choices[46]= new Array();
 choices[46][0] = "Tim O'Reilly";
 choices[46][1] = "Richard Stallman";
 choices[46][2] = "Tim Berners-Lee";
 choices[46][3] = "Robert Cailliau";
 answers[46] = choices[46][1];
 units[46] = "61";
 comments[46] = "Id Pregunta: 5912. MAP 2008 A1";


//  Id pregunta: 5941 Año de creación de pregunta: 2009-01-01
 questions[47]= "48)  Respecto a la virtualizaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[47]= new Array();
 choices[47][0] = "La virtualizaci&oacute;n se utilizaba en el entorno de los mainframes antes de que se popularizara sobre arquitecturas como ix86 &oacute; amd64";
 choices[47][1] = "Una de las virtudes de la virtualizaci&oacute;n es su bajo requerimiento de memoria RAM";
 choices[47][2] = "El ahorro de energ&iacute;a es una de las razones que impulsa el uso de la virtualizaci&oacute;n en entornos de servidor";
 choices[47][3] = "Xen es una herramienta de virtualizaci&oacute;n de software libre que naci&oacute; en el departamento de computaci&oacute;n de la Universidad de Cambridge";
 answers[47] = choices[47][1];
 units[47] = "119";
 comments[47] = "Id Pregunta: 5941. ";


//  Id pregunta: 5982 Año de creación de pregunta: 2010-01-01
 questions[48]= "49)  SIP (Session Initiation Protocol) es un protocolo que sirve para:";
 choices[48]= new Array();
 choices[48][0] = "Establecer videoconferencias sobre redes con calidad de servicio (ancho de banda garantizado).";
 choices[48][1] = "Realizar el transporte de flujos multimedia.";
 choices[48][2] = "Iniciar una sesi&oacute;n de correo web.";
 choices[48][3] = "Control y se&ntilde;alizaci&oacute;n, permite establecer y gestionar llamadas/conexiones de flujos multimedia.";
 answers[48] = choices[48][3];
 units[48] = "117";
 comments[48] = "Id Pregunta: 5982. TIC A 2009";


//  Id pregunta: 5996 Año de creación de pregunta: 2010-01-01
 questions[49]= "50)  En relaci&oacute;n con ITIL, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[49]= new Array();
 choices[49][0] = "Los m&oacute;dulos principales y m&aacute;s ampliamente implantados de ITIL versi&oacute;n 3 son Entrega del Servicio (Software Delivery) y Soporte del Servicio (Service Support).";
 choices[49][1] = "ITIL versi&oacute;n 3 es un est&aacute;ndar &quot;de iure&quot; similar a BS15000 o ISO/IEC 20000, de modo que una organizaci&oacute;n puede obtener un certificado ITIL.";
 choices[49][2] = "Seg&uacute;n ITIL versi&oacute;n 3, el ciclo de vida de un servicio consta de 5 fases: estrategia, dise&ntilde;o, transici&oacute;n, operaci&oacute;n y mejora continua del servicio.";
 choices[49][3] = "El proceso de Gesti&oacute;n del Cambio (Change Management) forma parte del m&oacute;dulo de Entrega del Servicio (Service Delivery).";
 answers[49] = choices[49][2];
 units[49] = "98";
 comments[49] = "Id Pregunta: 5996. TIC A 2009";


//  Id pregunta: 6121 Año de creación de pregunta: 2010-01-01
 questions[50]= "51)  Con respecto a la orquestaci&oacute;n y coreograf&iacute;a de servicios, se&ntilde;ale la respuesta correcta:";
 choices[50]= new Array();
 choices[50][0] = "Un proceso se puede considerar una orquestaci&oacute;n de servicios cuando es controlado totalmente por una &uacute;nica entidad.";
 choices[50][1] = "Un proceso es una coreograf&iacute;a de servicios cuando define las colaboraciones entre cualquier tipo de aplicaciones componentes, independientemente del lenguaje o plataforma en el que est&eacute;n definidas las mismas.";
 choices[50][2] = "A y B son correctas.";
 choices[50][3] = "A y B son incorrectas.";
 answers[50] = choices[50][2];
 units[50] = "51";
 comments[50] = "Id Pregunta: 6121. ";


//  Id pregunta: 6126 Año de creación de pregunta: 2010-01-01
 questions[51]= "52)  De los siguientes pares de t&eacute;rminos referidos al control de calidad, indique cu&aacute;l contiene dos conceptos equivalentes:";
 choices[51]= new Array();
 choices[51][0] = "Prevenci&oacute;n e inspecci&oacute;n.";
 choices[51][1] = "Causas comunes y causas aleatorias.";
 choices[51][2] = "Muestreo por atributos y muestreo por variables.";
 choices[51][3] = "Tolerancias y l&iacute;mites de control.";
 answers[51] = choices[51][1];
 units[51] = "87";
 comments[51] = "Id Pregunta: 6126. TIC A 2009";


//  Id pregunta: 6155 Año de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;C&oacute;mo fue renombrado el protocolo SMB por Microsoft?";
 choices[52]= new Array();
 choices[52][0] = "SAMBA";
 choices[52][1] = "CIFS";
 choices[52][2] = "MSRPC";
 choices[52][3] = "Ninguna de las anteriores.";
 answers[52] = choices[52][1];
 units[52] = "112";
 comments[52] = "Id Pregunta: 6155. ";


//  Id pregunta: 6208 Año de creación de pregunta: 2010-01-01
 questions[53]= "54)  En que forma Normal estar&iacute;a una tabla que cumpla la siguiente descripci&oacute;n: 'dados tres atributos de una tabla, si para cada valor del primer atributo existen m&uacute;ltiples valores en el segundo atributo y no hay ninguna relaci&oacute;n entre el tercer atributo y el primero, a no ser a trav&eacute;s del segundo atributo.'";
 choices[53]= new Array();
 choices[53][0] = "Forma Normal Boyce-Codd";
 choices[53][1] = "Segunda Forma Normal";
 choices[53][2] = "Tercera Forma Normal";
 choices[53][3] = "Cuarta Forma Normal";
 answers[53] = choices[53][1];
 units[53] = "58";
 comments[53] = "Id Pregunta: 6208. TICB-2009, bloque desarrollo";


//  Id pregunta: 6217 Año de creación de pregunta: 2010-01-01
 questions[54]= "55)  En el desarrollo de un sistema &iquest;En qu&eacute; casos de los siguientes es adecuado el uso de un 'modelo en espiral'?";
 choices[54]= new Array();
 choices[54][0] = "Sistemas de peque&ntilde;o tama&ntilde;o";
 choices[54][1] = "Cuando los requisitos est&eacute;n bien definidos desde un principio";
 choices[54][2] = "Proyectos donde sea importante el factor riesgo";
 choices[54][3] = "El producto a desarrollar no es novedoso";
 answers[54] = choices[54][2];
 units[54] = "76";
 comments[54] = "Id Pregunta: 6217. TICB-2009, bloque desarrollo";


//  Id pregunta: 6253 Año de creación de pregunta: 2010-01-01
 questions[55]= "56)  Un diccionario de datos proporciona un enfoque organizado para representar las caracter&iacute;sticas de cada objeto de datos y elemento de control. Adem&aacute;s:";
 choices[55]= new Array();
 choices[55][0] = "El diccionario de datos se puede tratar como una base de datos";
 choices[55][1] = "El formato de diccionario no var&iacute;a aunque se implemente en distintas herramientas ";
 choices[55][2] = "Los flujos que partes o llegan a los almacenes definen la interfaz entre el sistema y el mundo exterior";
 choices[55][3] = "Los almacenes de datos representan la informaci&oacute;n din&aacute;mica del sistema";
 answers[55] = choices[55][0];
 units[55] = "81";
 comments[55] = "Id Pregunta: 6253. TICB-2009, bloque desarrollo";


//  Id pregunta: 6254 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  Una de las tareas de los Analistas en la gesti&oacute;n del proceso de desarrollo es:";
 choices[56]= new Array();
 choices[56][0] = "Dar seguimiento al plan de trabajo y corregir las desviaciones a tiempo";
 choices[56][1] = "Construir el c&oacute;digo que dar&aacute; lugar al producto resultante";
 choices[56][2] = "Fijar el calendario de hitos y entregas";
 choices[56][3] = "Mantener entrevistas y sesiones de trabajo con los responsables de la organizaci&oacute;n y los usuarios";
 answers[56] = choices[56][3];
 units[56] = "79";
 comments[56] = "Id Pregunta: 6254. TICB-2009, bloque desarrollo";


//  Id pregunta: 6289 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Qu&eacute; informaci&oacute;n deber&aacute; describir, al menos, cada requisito en el an&aacute;lisis de un Sistema de Informaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "Una descripci&oacute;n";
 choices[57][1] = "Un nombre Descriptivo del Requisito";
 choices[57][2] = "Un c&oacute;digo &uacute;nico";
 choices[57][3] = "Todas las anteriores";
 answers[57] = choices[57][3];
 units[57] = "78";
 comments[57] = "Id Pregunta: 6289. ";


//  Id pregunta: 6317 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes sentencias es cierta respecto a las bases de datos relacionales?";
 choices[58]= new Array();
 choices[58][0] = "Soportan las interrelaciones l&oacute;gicas entre los datos.";
 choices[58][1] = "No soportan el acceso directo a un registro espec&iacute;fico.";
 choices[58][2] = "Es complicado el acceso a varios registros relacionados con un registro simple.";
 choices[58][3] = "El acceso a los datos es l&oacute;gico, dependiente de las t&eacute;cnicas de instrumentaci&oacute;n f&iacute;sica.";
 answers[58] = choices[58][0];
 units[58] = "58";
 comments[58] = "Id Pregunta: 6317. ";


//  Id pregunta: 6372 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  En relaci&oacute;n a lo dispuesto en el Esquema Nacional de Seguridad, un sistema de informaci&oacute;n ser&aacute; de categor&iacute;a MEDIA cuando:";
 choices[59]= new Array();
 choices[59][0] = "Las dimensiones de seguridad definidas como cr&iacute;ticas son, en su mayor&iacute;a, de nivel MEDIO.";
 choices[59][1] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna es de nivel inferior.";
 choices[59][2] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna alcanza un nivel superior.";
 choices[59][3] = "Las dimensiones de seguridad son, en su mayor&iacute;a, de nivel MEDIO.";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 6372. Anexo I ENS";


//  Id pregunta: 6437 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  Cuando se transforma un modelo E/R a modelo relacional las relaciones 1:n:";
 choices[60]= new Array();
 choices[60][0] = "Se transforman por el mecanismo de propagaci&oacute;n de clave ajena.";
 choices[60][1] = "Generan una tabla igual que una relaci&oacute;n n:m.";
 choices[60][2] = "Dependiendo del tipo de consultas posteriores se genera o no la tabla.";
 choices[60][3] = "Si el volumen de datos es muy grande se genera la tabla.";
 answers[60] = choices[60][0];
 units[60] = "70";
 comments[60] = "Id Pregunta: 6437. ";


//  Id pregunta: 6457 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Qu&eacute; informaci&oacute;n NO est&aacute; contenida en el chip criptogr&aacute;fico del DNI electr&oacute;nico?";
 choices[61]= new Array();
 choices[61][0] = "Certificado reconocido de autenticaci&oacute;n y de firma";
 choices[61][1] = "Imagen digitalizada de la fotograf&iacute;a";
 choices[61][2] = "Plantilla de la impresi&oacute;n dactilar";
 choices[61][3] = "N&uacute;mero de serie del soporte";
 answers[61] = choices[61][3];
 units[61] = "74";
 comments[61] = "Id Pregunta: 6457. Castilla La Mancha 2009 (Anulada)";


//  Id pregunta: 6479 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  El dispositivo que permite la interconexi&oacute;n de redes LAN y que trabaja en el nivel 2 del modelo OSI se denomina";
 choices[62]= new Array();
 choices[62][0] = "Repetidor";
 choices[62][1] = "Puente (bridge)";
 choices[62][2] = "Pasarela (gateway)";
 choices[62][3] = "Encaminador (router)";
 answers[62] = choices[62][1];
 units[62] = "102";
 comments[62] = "Id Pregunta: 6479. Castilla La Mancha 2009";


//  Id pregunta: 6531 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  La Resoluci&oacute;n del 6 de Febrero de 2006 sobre calidad de los servicios en la Administraci&oacute;n, fija distintos programas de actuaci&oacute;n, cu&aacute;l de los siguientes no es uno de ellos?";
 choices[63]= new Array();
 choices[63][0] = "Programa de Cartas de Servicio";
 choices[63][1] = "Programa de Evaluaci&oacute;n de la calidad de las organizaciones";
 choices[63][2] = "Programa de Quejas y Sugerencias";
 choices[63][3] = "Programa de Implantaci&oacute;n de la Calidad";
 answers[63] = choices[63][3];
 units[63] = "92";
 comments[63] = "Id Pregunta: 6531. ";


//  Id pregunta: 7291 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  Es un proveedor de SW de conversi&oacute;n texto-voz (TTS):";
 choices[64]= new Array();
 choices[64][0] = "Nuance";
 choices[64][1] = "Loquendo";
 choices[64][2] = "a y b son correctas";
 choices[64][3] = "a y b son incorrectas";
 answers[64] = choices[64][1];
 units[64] = "94";
 comments[64] = "Id Pregunta: 7291. ";


//  Id pregunta: 7330 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Qu&eacute; tipos de miembro tiene AENOR?";
 choices[65]= new Array();
 choices[65][0] = "Natos, Corporativos, Adheridos y de Honor";
 choices[65][1] = "Adheridos, de Pleno Derecho y Suscritos";
 choices[65][2] = "Correspondientes, Individuales, Corporativos y de Honor";
 choices[65][3] = "Corporativos, Adheridos, Individuales y de Honor";
 answers[65] = choices[65][3];
 units[65] = "42";
 comments[65] = "Id Pregunta: 7330. www.aenor.es";


//  Id pregunta: 8201 Año de creación de pregunta: 2011-01-01
 questions[66]= "67)  Indique la afirmaci&oacute;n INCORRECTA acerca de la BCL (Base Class Library) del framework .Net: ";
 choices[66]= new Array();
 choices[66][0] = "Contiene clases para la manipulaci&oacute;n de archivos gr&aacute;ficos. ";
 choices[66][1] = "Se organiza en clases de acceso a datos, de l&oacute;gica de negocio y de presentaci&oacute;n. ";
 choices[66][2] = "No dispone de clases para la gesti&oacute;n de la seguridad. ";
 choices[66][3] = "No depende del lenguaje de programaci&oacute;n utilizado por el desarrollador. ";
 answers[66] = choices[66][2];
 units[66] = "59";
 comments[66] = "Id Pregunta: 8201. Examen TIC A1 2010";


//  Id pregunta: 8248 Año de creación de pregunta: 2011-01-01
 questions[67]= "68)  Indique la afirmaci&oacute;n FALSA. De acuerdo a la ley 30/2007, el sistema de determinaci&oacute;n del precio de los contratos para el desarrollo de programas inform&aacute;ticos:";
 choices[67]= new Array();
 choices[67][0] = "Puede ser a tanto alzado.";
 choices[67][1] = "Puede resultar de la aplicaci&oacute;n de honorarios por tarifas.";
 choices[67][2] = "Se debe establecer en el Pliego de Prescripciones T&eacute;cnicas.";
 choices[67][3] = "Puede resultar de la combinaci&oacute;n de varias modalidades de c&aacute;lculo.";
 answers[67] = choices[67][2];
 units[67] = "36,37";
 comments[67] = "Id Pregunta: 8248. Examen TIC A1 2010";


//  Id pregunta: 8354 Año de creación de pregunta: 2011-01-01
 questions[68]= "69)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[68]= new Array();
 choices[68][0] = "App_Data.";
 choices[68][1] = "Bin.";
 choices[68][2] = "App_WebReferences";
 choices[68][3] = "Compilation";
 answers[68] = choices[68][1];
 units[68] = "59,115";
 comments[68] = "Id Pregunta: 8354. Examen TIC A2 2010";


//  Id pregunta: 8432 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  De los siguientes algoritmos de asignaci&oacute;n del turno de ejecuci&oacute;n de los procesos, &iquest;Cu&aacute;l de ellos consiste en asignar a cada proceso un intervalo de tiempo de ejecuci&oacute;n (llamado time-slice), y cada vez que se vence ese intervalo se copia el contexto del proceso a un lugar seguro y se le asigna su turno a otro proceso?";
 choices[69]= new Array();
 choices[69][0] = "SJF (Shortest Job First)";
 choices[69][1] = "FIFO (First In First Out";
 choices[69][2] = "Por prioridad";
 choices[69][3] = "Round Robin";
 answers[69] = choices[69][3];
 units[69] = "52";
 comments[69] = "Id Pregunta: 8432. ";


//  Id pregunta: 8445 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  Una compa&ntilde;&iacute;a va a abrir una nueva sede asumiendo la subred 255.255.248.0,&iquest;Cu&aacute;l de las siguientes direcciones IP se podr&iacute;a asignar a un ordenador de la nuevasede?:";
 choices[70]= new Array();
 choices[70][0] = "a) 172.16.20.0";
 choices[70][1] = "172.16.24.45";
 choices[70][2] = "Ambas respuestas son correctas";
 choices[70][3] = "Ninguna respuesta es correcta";
 answers[70] = choices[70][2];
 units[70] = "100";
 comments[70] = "Id Pregunta: 8445. Analista Ayto. Madrid 2010";


//  Id pregunta: 8522 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes es un tipo de algoritmo de control de la congesti&oacute;n en redes conmutadas?";
 choices[71]= new Array();
 choices[71][0] = "Estado del enlace.";
 choices[71][1] = "Vector distancia.";
 choices[71][2] = "Inundaci&oacute;n de paquetes.";
 choices[71][3] = "Cubeta con goteo.";
 answers[71] = choices[71][3];
 units[71] = "104";
 comments[71] = "Id Pregunta: 8522. Examen TIC A2 2010 interna";


//  Id pregunta: 8649 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  Seg&uacute;n M&eacute;trica v3. &iquest;cu&aacute;l de las siguientes listas esta correctamente ordenada de mayor a menor acoplamiento?";
 choices[72]= new Array();
 choices[72][0] = "De contenido, com&uacute;n, de control, externo, de datos.";
 choices[72][1] = "De datos, de marca, externo, de control, com&uacute;n, de contenido";
 choices[72][2] = "De datos, de marca, de control, externo, com&uacute;n, de contenido";
 choices[72][3] = "De contenido, com&uacute;n, externo, de marca, de datos";
 answers[72] = choices[72][3];
 units[72] = "86";
 comments[72] = "Id Pregunta: 8649. Examen TIC A2 2010 interna";


//  Id pregunta: 8662 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  En el protocolo SIP de voz sobre IP, &iquest;cu&aacute;l no es una entidad l&oacute;gica?";
 choices[73]= new Array();
 choices[73][0] = "Agente de usuario";
 choices[73][1] = "Servidor proxy";
 choices[73][2] = "Agente de usuario inverso";
 choices[73][3] = "Agente proxy";
 answers[73] = choices[73][3];
 units[73] = "109";
 comments[73] = "Id Pregunta: 8662. Examen UPM A2 2011";


//  Id pregunta: 8763 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  En el contexto de los lenguajes de programaci&oacute;n orientados a objetos, cuando un objeto recibe de otro objeto o aplicaci&oacute;n una notificaci&oacute;n, ha recibido un:";
 choices[74]= new Array();
 choices[74][0] = "Evento.";
 choices[74][1] = "Comando.";
 choices[74][2] = "Protocolo.";
 choices[74][3] = "Orden.";
 answers[74] = choices[74][0];
 units[74] = "82, 84";
 comments[74] = "Id Pregunta: 8763. Examen TIC A2 2010 interna";


//  Id pregunta: 8775 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes comandos se utilizan para crear un cd boot de una instalaci&oacute;n de Linux?";
 choices[75]= new Array();
 choices[75][0] = "mkboot disk.";
 choices[75][1] = "bootfp disk.";
 choices[75][2] = "ww and rawrite.";
 choices[75][3] = "dd and rawrite.";
 answers[75] = choices[75][3];
 units[75] = "53";
 comments[75] = "Id Pregunta: 8775. Examen UPM A2 2011";


//  Id pregunta: 8793 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l debe ser la parte local del elemento ra&iacute;z de un documento XHTML 2.0 de conformidad estricta?";
 choices[76]= new Array();
 choices[76][0] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;html&quot;.";
 choices[76][1] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xhtml&quot;. ";
 choices[76][2] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xml&quot;. ";
 choices[76][3] = "No puede existir una declaraci&oacute;n DOCTYPE.";
 answers[76] = choices[76][0];
 units[76] = "69";
 comments[76] = "Id Pregunta: 8793. Examen UPM A2 2011";


//  Id pregunta: 8801 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;como se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[77]= new Array();
 choices[77][0] = "WT (Window Toolkit)";
 choices[77][1] = "AWT (Abstract Window Toolkit)";
 choices[77][2] = "JWS (Java Window Set)";
 choices[77][3] = "WS (Windows Set)";
 answers[77] = choices[77][1];
 units[77] = "60";
 comments[77] = "Id Pregunta: 8801. Examen UPM A2 2011";


//  Id pregunta: 8991 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  En radio, &iquest;Qu&eacute; quiere decir MIMO?";
 choices[78]= new Array();
 choices[78][0] = "Maximum Input, Minimum Output";
 choices[78][1] = "Minimum Input, Maximum Output";
 choices[78][2] = "Multiple-Input Multible-Output";
 choices[78][3] = "Ninguna de las anteriores";
 answers[78] = choices[78][2];
 units[78] = "107";
 comments[78] = "Id Pregunta: 8991. ";


//  Id pregunta: 9016 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[79]= new Array();
 choices[79][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[79][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[79][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[79][3] = "Ninguna de las anteriores";
 answers[79] = choices[79][2];
 units[79] = "99";
 comments[79] = "Id Pregunta: 9016. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9025 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[80]= new Array();
 choices[80][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[80][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[80][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[80][3] = "Se pueden establecer 32 comunicaciones totales: 16 entrantes y 16 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 answers[80] = choices[80][0];
 units[80] = "103";
 comments[80] = "Id Pregunta: 9025. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9038 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Indique la pauta de accesibilidad correcta seg&uacute;n la norma WCAG 1.0";
 choices[81]= new Array();
 choices[81][0] = "Dise&ntilde;o dependiente del dispositivo";
 choices[81][1] = "Evite parpadeos en la pantalla";
 choices[81][2] = "Utilice siempre CSS";
 choices[81][3] = "No se base s&oacute;lo en el color";
 answers[81] = choices[81][3];
 units[81] = "39";
 comments[81] = "Id Pregunta: 9038. ";


//  Id pregunta: 9114 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; se entiende como flujo de instrucciones?";
 choices[82]= new Array();
 choices[82][0] = "Conjunto de instrucciones en paralelo que son ejecutadas por varios procesadores.";
 choices[82][1] = "Conjunto de instrucciones secuenciales que son ejecutadas entre varios procesadores";
 choices[82][2] = "Flujo secuencial de instrucciones requeridas por el flujo de datos";
 choices[82][3] = "Conjunto de instrucciones secuenciales ejecutadas por un &uacute;nico procesador.";
 answers[82] = choices[82][3];
 units[82] = "45";
 comments[82] = "Id Pregunta: 9114. ";


//  Id pregunta: 9146 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Qu&eacute; es FAMOS?";
 choices[83]= new Array();
 choices[83][0] = "Floating Gate Avalanche-Injection Metal Oxide Semiconductor";
 choices[83][1] = "Floating Avalanche-Injection Metal Oxide Semiconductor";
 choices[83][2] = "Floating Gate Avalanche-Injection Metal for Operating Systems";
 choices[83][3] = "FAMOS no existe";
 answers[83] = choices[83][3];
 units[83] = "47";
 comments[83] = "Id Pregunta: 9146. ";


//  Id pregunta: 9168 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  Modos de funcionamiento de la tecnolog&iacute;a NFC(near field communicator):";
 choices[84]= new Array();
 choices[84][0] = "Independiente/Infraestructura";
 choices[84][1] = "Activo/Pasivo";
 choices[84][2] = "Manual/Continuo";
 choices[84][3] = "Modo voz/Modo voz + datos";
 answers[84] = choices[84][1];
 units[84] = "70";
 comments[84] = "Id Pregunta: 9168. Examen TIC A2 2011";


//  Id pregunta: 9194 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[85]= new Array();
 choices[85][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[85][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[85][2] = "Si, en todos los casos";
 choices[85][3] = "Todas las anteriores son falsas";
 answers[85] = choices[85][2];
 units[85] = "36";
 comments[85] = "Id Pregunta: 9194. ";


//  Id pregunta: 9222 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  Identificar que protocolo no est&aacute; dise&ntilde;ado especificamente para la extensi&oacute;n de las SAN sobre protocolo IP";
 choices[86]= new Array();
 choices[86][0] = "iFTP";
 choices[86][1] = "iSCSCI";
 choices[86][2] = "FCIP";
 choices[86][3] = "iFCP";
 answers[86] = choices[86][0];
 units[86] = "48";
 comments[86] = "Id Pregunta: 9222. Examen TIC-A1 2011";


//  Id pregunta: 9285 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  En los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y sector privado, una Administraci&oacute;n encarga a una entidad de derecho privado la realizaci&oacute;n de una actuaci&oacute;n global, que no puede durar m&aacute;s de...";
 choices[87]= new Array();
 choices[87][0] = "10 a&ntilde;os.";
 choices[87][1] = "30 a&ntilde;os.";
 choices[87][2] = "20 a&ntilde;os.";
 choices[87][3] = "15 a&ntilde;os.";
 answers[87] = choices[87][2];
 units[87] = "41";
 comments[87] = "Id Pregunta: 9285. ";


//  Id pregunta: 9302 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  ISACA:";
 choices[88]= new Array();
 choices[88][0] = "Es la Information Security Audit and Control Association";
 choices[88][1] = "Posee una metodolog&iacute;a basada en COBIT, de cara a obtener los controles a aplicar durante la auditor&iacute;a y en CMMI, de cara a obtener un modelo de desarrollo sobre el que basarse para auditar el existente";
 choices[88][2] = "Posee una metodolog&iacute;a propia, que no se basa ni en COBIT ni en CMMI";
 choices[88][3] = "Ninguna de las anteriores";
 answers[88] = choices[88][3];
 units[88] = "33";
 comments[88] = "Id Pregunta: 9302. ";


//  Id pregunta: 9359 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[89]= new Array();
 choices[89][0] = "CWDM ";
 choices[89][1] = "SDH ";
 choices[89][2] = "WDM ";
 choices[89][3] = "DWDM ";
 answers[89] = choices[89][3];
 units[89] = "99";
 comments[89] = "Id Pregunta: 9359. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9369 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Ante situaciones de congesti&oacute;n, Resilient Packet Ring:";
 choices[90]= new Array();
 choices[90][0] = "Reacciona descartando paquetes.";
 choices[90][1] = "Utiliza el algoritmo Fairness, que sirve para los servicios de clase A1, B-CIR, B-EIR y C; y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo y que se puede reutilizar de las diferentes clases.";
 choices[90][2] = "Utiliza el algoritmo Fairness, que sirve para todos los tipos de tr&aacute;fico y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo.";
 choices[90][3] = "No tiene control de congesti&oacute;n.";
 answers[90] = choices[90][1];
 units[90] = "101";
 comments[90] = "Id Pregunta: 9369. ";


//  Id pregunta: 9387 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  Se&ntilde;ale la respuesta correcta acerca de LTE:";
 choices[91]= new Array();
 choices[91][0] = "El HSS (Home Subscriber Server) es una base de datos distribuida que contiene informaci&oacute;n de los usuarios, sin entrar en funciones de Autenticaci&oacute;n, funci&oacute;n que lleva a cabo el eAUC.";
 choices[91][1] = "El Serving Gateway (SGW) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[91][2] = "El PGW (PDN Gateway) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[91][3] = "El MME (Mobility Management Entity) es un elemento responsable del control de la estaci&oacute;n base, siendo el interfaz a la red conmutada de LTE";
 answers[91] = choices[91][1];
 units[91] = "108";
 comments[91] = "Id Pregunta: 9387. ";


//  Id pregunta: 9427 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  Hay dos operadores que para operar en un determinado territorio ejercen el derecho de ocupaci&oacute;n de propiedad p&uacute;blica o privada. Sin embargo, por motivos de ordenaci&oacute;n urbana, no pueden ejercer esos derechos por separado.";
 choices[92]= new Array();
 choices[92][0] = "Uno de los dos deber&aacute; renunciar a su derecho de ocupaci&oacute;n.";
 choices[92][1] = "La Administraci&oacute;n competente en ordenaci&oacute;n urbana, podr&aacute; instar de manera motivada al Ministerio de Industria, Energ&iacute;a y Turismo el inicio del procedimiento para imponer el uso compartido recogido en el Art&iacute;culo 32.2.";
 choices[92][2] = "La Administraci&oacute;n competente en ordenaci&oacute;n urbana, previo tr&aacute;mite de informaci&oacute;n p&uacute;blica, determinar&aacute; una soluci&oacute;n que permita el ejercicio de los derechos de ocupaci&oacute;n de dominio p&uacute;blico o propiedad privada por separado.";
 choices[92][3] = "No se trata de un elemento que regule la ley 9/2014, General de Telecomunicaciones";
 answers[92] = choices[92][1];
 units[92] = "110";
 comments[92] = "Id Pregunta: 9427. ";


//  Id pregunta: 9507 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  En el patr&oacute;n MVC, &iquest;d&oacute;nde situar&iacute;amos un contenedor EJB?";
 choices[93]= new Array();
 choices[93][0] = "En el modelo";
 choices[93][1] = "En la vista";
 choices[93][2] = "En el controlador";
 choices[93][3] = "En todos los anteriores";
 answers[93] = choices[93][0];
 units[93] = "116";
 comments[93] = "Id Pregunta: 9507. ";


//  Id pregunta: 9542 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  Las comunicaciones comerciales no solicitadas realizadas a trav&eacute;s de correo electr&oacute;nico o medios de comunicaci&oacute;n electr&oacute;nica equivalentes:";
 choices[94]= new Array();
 choices[94][0] = "Deben incluir al comienzo del mensaje la palabra &laquo;publicidad&raquo;.";
 choices[94][1] = "Deben indicar la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan.";
 choices[94][2] = "Deben incluir claramente las condiciones comerciales o promocionales.	";
 choices[94][3] = "Est&aacute;n prohibidas.";
 answers[94] = choices[94][3];
 units[94] = "30";
 comments[94] = "Id Pregunta: 9542. Examen TIC A1 2011";


//  Id pregunta: 9707 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[95]= new Array();
 choices[95][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[95][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[95][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[95][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[95] = choices[95][3];
 units[95] = "86";
 comments[95] = "Id Pregunta: 9707. Examen TIC-A1 2013";


//  Id pregunta: 9854 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En seguridad inform&aacute;tica, cu&aacute;l de los siguientes procesos, puede considerarse un m&eacute;todo de hardening de un sistema: ";
 choices[96]= new Array();
 choices[96][0] = "La reducci&oacute;n de software innecesario en el sistema.";
 choices[96][1] = "La instalaci&oacute;n de software para comprobar el estado de la red.";
 choices[96][2] = "La conexi&oacute;n a sistemas de almacenamiento (SAN o NAS).";
 choices[96][3] = "La aplicaci&oacute;n de bonding (agrupaci&oacute;n o trunking) en las interfaces de red.";
 answers[96] = choices[96][0];
 units[96] = "111";
 comments[96] = "Id Pregunta: 9854. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 10285 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  RMAN es:";
 choices[97]= new Array();
 choices[97][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[97][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[97][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[97][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[97] = choices[97][2];
 units[97] = "58";
 comments[97] = "Id Pregunta: 10285. TIC A2, libre, examen 2013";


//  Id pregunta: 10304 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Indicar cu&aacute;l de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):";
 choices[98]= new Array();
 choices[98][0] = "Modo de respuesta normal (NRM, Normal Response Mode).";
 choices[98][1] = "Modo balanceado as&iacute;ncrono (ABM, Asynchronous Balanced Mode).";
 choices[98][2] = "Modo de respuesta as&iacute;ncrono (ARM, Asynchronous Response Mode).";
 choices[98][3] = "Modo balanceado s&iacute;ncrono (SBM, Synchronous Balanced Mode).";
 answers[98] = choices[98][3];
 units[98] = "100";
 comments[98] = "Id Pregunta: 10304. TIC A2, libre, examen 2013";


//  Id pregunta: 10446 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  De acuerdo con la Ley Org&aacute;nica 15/1999, de protecci&oacute;n de datos de car&aacute;cter personal, los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal ";
 choices[99]= new Array();
 choices[99][0] = "est&aacute;n en su totalidad excluidos del r&eacute;gimen general de esa Ley.";
 choices[99][1] = "no pueden recoger m&aacute;s datos que los autorizados por el Juez instructor de la causa penal. ";
 choices[99][2] = "pueden recoger datos personales sin consentimiento del afectado para la represi&oacute;n de infracciones penales. ";
 choices[99][3] = "no permiten la cancelaci&oacute;n de los datos personales en ellos registrados con fines policiales. ";
 answers[99] = choices[99][2];
 units[99] = "29";
 comments[99] = "Id Pregunta: 10446. Examen TIC A1 2013";


