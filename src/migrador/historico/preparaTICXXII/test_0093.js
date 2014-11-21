/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 55 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;ntos niveles de adecuaci&oacute;n hay en WAI?";
 choices[0]= new Array();
 choices[0][0] = "3";
 choices[0][1] = "4";
 choices[0][2] = "5";
 choices[0][3] = "6";
 answers[0] = choices[0][0];
 units[0] = "39";
 comments[0] = "Id Pregunta: 55. ";


//  Id pregunta: 96 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  A todos los efectos se consideraran normas europeas las producidas por los organismos:";
 choices[1]= new Array();
 choices[1][0] = "CEN, CENELEC o CEPT/ETSI";
 choices[1][1] = "CENELEC, ETSI o IEC";
 choices[1][2] = "ISO, CEPT o CENELEC";
 choices[1][3] = "AENOR, CEPT o CEN";
 answers[1] = choices[1][0];
 units[1] = "42";
 comments[1] = "Id Pregunta: 96. ";


//  Id pregunta: 587 Año de creación de pregunta: 2006-01-01
 questions[2]= "3)  Puede una incidencia pasar del nivel 1 al nivel 3 ";
 choices[2]= new Array();
 choices[2][0] = "No, siempre tiene que pasar por el nivel 2";
 choices[2][1] = "S&oacute;lo si no hay nadie disponible en el nivel 2";
 choices[2][2] = "En aquellos casos acordados en los tres niveles";
 choices[2][3] = "Siempre que as&iacute; lo consideren desde el nivel 1";
 answers[2] = choices[2][2];
 units[2] = "26";
 comments[2] = "Id Pregunta: 587. ";


//  Id pregunta: 632 Año de creación de pregunta: 2006-01-01
 questions[3]= "4)  Cu&aacute;l de las siguientes t&eacute;cnicas no persigue la comprobaci&oacute;n o el control de la legalidad del Software:";
 choices[3]= new Array();
 choices[3][0] = "DRM (Digital Rigths Management).";
 choices[3][1] = "CRM (Copyright Rights Management).";
 choices[3][2] = "Marcas de Agua.";
 choices[3][3] = "TPM (Technical Protection Measures).";
 answers[3] = choices[3][1];
 units[3] = "37";
 comments[3] = "Id Pregunta: 632. ";


//  Id pregunta: 639 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  Cu&aacute;l de las siguientes frases es cierta sobre las pautas de accesibilidad WAI en la versi&oacute;n WCAG 2.0:";
 choices[4]= new Array();
 choices[4][0] = "La Prioridad 1 es para los puntos de verificaci&oacute;n que el desarrollador debe satisfacer.";
 choices[4][1] = "Las pautas WAI son una especificaci&oacute;n de W3C, al igual que HTML, CSS, XML y SGML";
 choices[4][2] = "La Prioridad 3 el desarrollador puede satisfacerla; de lo contrario, algunas personas hallar&aacute;n dificultades para acceder a la informaci&oacute;n.";
 choices[4][3] = "El nivel de adecuaci&oacute;n &quot;Doble A&quot; (AA) incluye los puntos de verificaci&oacute;n de prioridad 1 y al menos uno de prioridad 2.";
 answers[4] = choices[4][2];
 units[4] = "39";
 comments[4] = "Id Pregunta: 639. ";


//  Id pregunta: 737 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  Si le notifican una multa de tr&aacute;fico mediante el Servicio de Notificaciones Telem&aacute;ticas Seguras (Direcci&oacute;n Electr&oacute;nica Unica):";
 choices[5]= new Array();
 choices[5][0] = "Puede rechazar recibir la notificaci&oacute;n";
 choices[5][1] = "No puede rechazar recibir la notificaci&oacute;n";
 choices[5][2] = "Le sirve de preaviso, pero debe esperar la notificaci&oacute;n oficial por correo ordinario, o la publicaci&oacute;n de la sanci&oacute;n en el Bolet&iacute;n Oficial de la Provincia";
 choices[5][3] = "Puede reenviarla a otro buz&oacute;n electr&oacute;nico de su elecci&oacute;n";
 answers[5] = choices[5][0];
 units[5] = "30";
 comments[5] = "Id Pregunta: 737. Examen TIC MAP B 2004";


//  Id pregunta: 757 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;De las siguientes API's cual no es un API de desarrollo de tarjetas inteligentes?";
 choices[6]= new Array();
 choices[6][0] = "CryptoAPI";
 choices[6][1] = "PKCS#7";
 choices[6][2] = "PKCS#11";
 choices[6][3] = "JCE/JCA";
 answers[6] = choices[6][1];
 units[6] = "74";
 comments[6] = "Id Pregunta: 757. ";


//  Id pregunta: 840 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[7]= new Array();
 choices[7][0] = "Cada usuario posee dos claves denominadas p&uacute;blica y privada, independientes entre s&iacute;. La clave privada es la usada en el servicio de confidencialidad (cifrado)";
 choices[7][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio, prueba de entrega e integridad, entre otros";
 choices[7][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, por ejemplo RSA, para servicios de confidencialidad (cifrado) proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos como el DES";
 choices[7][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es sencilla, comparada con la existente en los sistemas convencionales sim&eacute;tricos de clave secreta";
 answers[7] = choices[7][0];
 units[7] = "72";
 comments[7] = "Id Pregunta: 840. ";


//  Id pregunta: 887 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l no es caracter&iacute;stica del puerto paralelo?:";
 choices[8]= new Array();
 choices[8][0] = "Transmite y recibe 8 bits a la vez";
 choices[8][1] = "Se define en el Nivel 2 de la ISO ";
 choices[8][2] = "Es un puerto RS-232-C de 25 pines";
 choices[8][3] = "Tambi&eacute;n se le conoce en los PC&acute;s como printer port";
 answers[8] = choices[8][1];
 units[8] = "47";
 comments[8] = "Id Pregunta: 887. ";


//  Id pregunta: 915 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.500 de OSI?:";
 choices[9]= new Array();
 choices[9][0] = "Agente de usuario del directorio (DUA)";
 choices[9][1] = "Agentes del sistema de directorio (DSA)";
 choices[9][2] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[9][3] = "Sistema de almacenamiento del directorio (DMS)";
 answers[9] = choices[9][3];
 units[9] = "73";
 comments[9] = "Id Pregunta: 915. ";


//  Id pregunta: 1010 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  El creador de HTML fue:";
 choices[10]= new Array();
 choices[10][0] = "Tim Berners-Lee";
 choices[10][1] = "Ivar Jacobson";
 choices[10][2] = "Grady Booch";
 choices[10][3] = "Todas son falsas";
 answers[10] = choices[10][0];
 units[10] = "69";
 comments[10] = "Id Pregunta: 1010. ";


//  Id pregunta: 1046 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  El programa del sistema operativo cuya misi&oacute;n es resolver las referencias externas de uno o varios m&oacute;dulos objeto y formar una unidad ejecutable se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Coordinador";
 choices[11][1] = "Montador";
 choices[11][2] = "Cargador";
 choices[11][3] = "Editor";
 answers[11] = choices[11][1];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1046. ";


//  Id pregunta: 1215 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  La considerada como primera m&aacute;quina realmente procesadora de informaci&oacute;n, llamada &quot;M&aacute;quina Diferencial&quot;, fue dise&ntilde;ada por:";
 choices[12]= new Array();
 choices[12][0] = "John Von Neumann.";
 choices[12][1] = "Blaise Pascal.";
 choices[12][2] = "Charles Babbage.";
 choices[12][3] = "Ninguno de los anteriores.";
 answers[12] = choices[12][2];
 units[12] = "45";
 comments[12] = "Id Pregunta: 1215. ";


//  Id pregunta: 1292 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  ODBC:";
 choices[13]= new Array();
 choices[13][0] = "Es un conjunto de drivers que permiten el acceso a datos heterog&eacute;neos";
 choices[13][1] = "Son drivers, exclusivos de Windows, para el acceso a base de datos";
 choices[13][2] = "Es la tecnologia empleada por Microsoft Access para gestionar los datos";
 choices[13][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[13] = choices[13][0];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1292. ";


//  Id pregunta: 1376 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Todas las respuestas son nombres de compa&ntilde;&iacute;as que han desarrollado sistemas operativos de red, excepto una. &iquest;Cu&aacute;l?:";
 choices[14]= new Array();
 choices[14][0] = "Alcatel";
 choices[14][1] = "Microsoft";
 choices[14][2] = "Novell";
 choices[14][3] = "Banyan";
 answers[14] = choices[14][0];
 units[14] = "52";
 comments[14] = "Id Pregunta: 1376. ";


//  Id pregunta: 1407 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Una asociaci&oacute;n entre entidades es reflexiva cuando:";
 choices[15]= new Array();
 choices[15][0] = "El n&uacute;mero de entidades que participan en la asociaci&oacute;n es mayor que 2";
 choices[15][1] = "La cardinalidad de la asociaci&oacute;n es l";
 choices[15][2] = "Tiene &uacute;nicamente un atributo principal como clave";
 choices[15][3] = "Una entidad se relaciona con ella misma";
 answers[15] = choices[15][3];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1407. ";


//  Id pregunta: 1459 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  En las interfaces orientadas a objetos (OOUI) es falso que:";
 choices[16]= new Array();
 choices[16][0] = "los iconos representan objetos que se pueden manipular directamente";
 choices[16][1] = "los objetos son de 3 tipos: datos, contenedores y dispositivos";
 choices[16][2] = "un ejemplo de interfaz orientada a objeto lo representan los accesos directos de Windows, donde cada objeto tiene su propia tarea asociada";
 choices[16][3] = "el estilo de interacci&oacute;n es el de acci&oacute;n-objeto y no el de objeto-acci&oacute;n";
 answers[16] = choices[16][3];
 units[16] = "52";
 comments[16] = "Id Pregunta: 1459. ";


//  Id pregunta: 1499 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  La Ley de Servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Ley 34/2002:";
 choices[17]= new Array();
 choices[17][0] = "Favorece la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica, al asegurar la equivalencia entre los documentos en soporte papel y los documentos electr&oacute;nicos";
 choices[17][1] = "Es una ley pionera, pues se adelant&oacute; en varios meses a la directiva sobre el comercio electr&oacute;nico";
 choices[17][2] = "No incluye previsiones orientadas a hacer efectiva la accesibilidad de las personas con discapacidad a la informaci&oacute;n proporcionada por medios electr&oacute;nicos, remiti&eacute;ndose al desarrollo normativo posterior";
 choices[17][3] = "Prohibe expresamente el env&iacute;o por correo u otras v&iacute;as de comunicaci&oacute;n electr&oacute;nica equivalente de comunicaciones comerciales, para evitar el spamming";
 answers[17] = choices[17][0];
 units[17] = "30";
 comments[17] = "Id Pregunta: 1499. ";


//  Id pregunta: 1555 Año de creación de pregunta: 2003-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es una propiedad que debe cumplir una funci&oacute;n resumen (hash) ?";
 choices[18]= new Array();
 choices[18][0] = "Resistencia a la preimagen";
 choices[18][1] = "Resistencia a la colisi&oacute;n Fuerte";
 choices[18][2] = "Resistencia a la colisi&oacute;n Suave";
 choices[18][3] = "Resistencia a la no colisi&oacute;n";
 answers[18] = choices[18][3];
 units[18] = "72";
 comments[18] = "Id Pregunta: 1555. ";


//  Id pregunta: 1575 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;Qu&eacute; es lo que la Firma Digital no garantiza por si sola?";
 choices[19]= new Array();
 choices[19][0] = "Autenticaci&oacute;n";
 choices[19][1] = "Integridad";
 choices[19][2] = "Disponibilidad";
 choices[19][3] = "No repudio";
 answers[19] = choices[19][2];
 units[19] = "72";
 comments[19] = "Id Pregunta: 1575. ";


//  Id pregunta: 1627 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  Si un programa se distribuye con licencia GPL, la empresa que lo modifica puede:";
 choices[20]= new Array();
 choices[20][0] = "No puede venderlo";
 choices[20][1] = "Integrarlo en otro SW y venderlo como propietario ";
 choices[20][2] = "Venderlo a otra empresa como software libre";
 choices[20][3] = "Venderlo a otra empresa como software propietario";
 answers[20] = choices[20][2];
 units[20] = "61";
 comments[20] = "Id Pregunta: 1627. ";


//  Id pregunta: 1634 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Qu&eacute; son las funciones primitivas en un Diagrama de Flujo de Datos?";
 choices[21]= new Array();
 choices[21][0] = "Son aquellas funciones que no responden a eventos del sistema, que se describen en un Diagrama de Flujo de Datos para mejorar su legibilidad.";
 choices[21][1] = "Son aquellos procesos de un Diagrama de Flujo de Datos que no se descomponen m&aacute;s.";
 choices[21][2] = "  Son los procesos que aparecen en el Diagrama de Contexto.";
 choices[21][3] = " Son las funciones que se conectan con los almacenes de datos en un Diagrama de Flujo de Datos.";
 answers[21] = choices[21][1];
 units[21] = "81";
 comments[21] = "Id Pregunta: 1634. ";


//  Id pregunta: 1674 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes comandos SQL pertenece al DDL (Lenguaje de definici&oacute;n de datos)?";
 choices[22]= new Array();
 choices[22][0] = "SELECT";
 choices[22][1] = "CREATE";
 choices[22][2] = "INSERT";
 choices[22][3] = "UPDATE";
 answers[22] = choices[22][1];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1674. ";


//  Id pregunta: 1724 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  El estandar 1003.9 especifica:";
 choices[23]= new Array();
 choices[23][0] = "Extensiones para la seguridad";
 choices[23][1] = " Administraci&oacute;n del Sistema";
 choices[23][2] = " Lenguaje Fortran.";
 choices[23][3] = "Acceso transparente a archivos.";
 answers[23] = choices[23][2];
 units[23] = "53";
 comments[23] = "Id Pregunta: 1724. ";


//  Id pregunta: 1805 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  La iniciativa ADL (Advanced Distributed Learning) public&oacute; en el a&ntilde;o 2000 un modelo que trata de estandarizar los contenidos formativos digitales y que se conoce como";
 choices[24]= new Array();
 choices[24][0] = "SCORM";
 choices[24][1] = "B-Learning";
 choices[24][2] = "DFC";
 choices[24][3] = "ADL 2000";
 answers[24] = choices[24][0];
 units[24] = "66";
 comments[24] = "Id Pregunta: 1805. ";


//  Id pregunta: 1833 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  Se&ntilde;alar la respuesta falsa";
 choices[25]= new Array();
 choices[25][0] = "HTML es un subconjunto de SGML";
 choices[25][1] = "XHTML es un subconjunto de XML";
 choices[25][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[25][3] = "RTF es un subconjunto de SGML";
 answers[25] = choices[25][2];
 units[25] = "69";
 comments[25] = "Id Pregunta: 1833. ";


//  Id pregunta: 1849 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  Un sistema de Workflow seg&uacute;n la WfMC debe incluir necesariamente la funci&oacute;n de:";
 choices[26]= new Array();
 choices[26][0] = "Gesti&oacute;n de notificaciones y colas de trabajo";
 choices[26][1] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 choices[26][2] = "Facilidades de enrrutamiento";
 choices[26][3] = "Todas las anteriores";
 answers[26] = choices[26][3];
 units[26] = "71";
 comments[26] = "Id Pregunta: 1849. ";


//  Id pregunta: 1937 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, establece como sanci&oacute;n por la comisi&oacute;n de infracciones graves:";
 choices[27]= new Array();
 choices[27][0] = "Multa de 30.001 a 150.000 euros";
 choices[27][1] = "Multa por importe m&aacute;ximo de 50.000 euros";
 choices[27][2] = "Multa de 150.001 a 600.000 euros";
 choices[27][3] = "Multa de 30.001 a 100.000 euros como m&aacute;ximo";
 answers[27] = choices[27][0];
 units[27] = "30";
 comments[27] = "Id Pregunta: 1937. ";


//  Id pregunta: 2012 Año de creación de pregunta: 2004-01-01
 questions[28]= "29)  Si la fecha l&iacute;mite para la entrega de un sistema de informaci&oacute;n est&aacute; tan cerca que no va a ser posible con los recursos asignados, entregar un sistema que satisfaga todos los requisitos, la estrategia (modelo) a seguir deber&iacute;a ser:";
 choices[28]= new Array();
 choices[28][0] = "El modelo de prototipaci&oacute;n";
 choices[28][1] = "El modelo en cascada";
 choices[28][2] = "El modelo incremental";
 choices[28][3] = "El modelo de espiral WINWIN";
 answers[28] = choices[28][2];
 units[28] = "76";
 comments[28] = "Id Pregunta: 2012. Examen TIC MAP B 2004";


//  Id pregunta: 2221 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; variable utiliza COCOMO?:";
 choices[29]= new Array();
 choices[29][0] = "El n&uacute;mero de personas que intervienen en un proyectos";
 choices[29][1] = "N&uacute;mero de instrucciones en pseudoc&oacute;digo";
 choices[29][2] = "N&uacute;mero de instrucciones de c&oacute;digo fuente";
 choices[29][3] = "No se usan  las instrucciones de c&oacute;digo fuente porque var&iacute;an de un lenguaje a otro";
 answers[29] = choices[29][2];
 units[29] = "89";
 comments[29] = "Id Pregunta: 2221. ";


//  Id pregunta: 2233 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Al esfuerzo requerido para localizar y delimitar un error en un programa en explotaci&oacute;n se llama:";
 choices[30]= new Array();
 choices[30][0] = "Usabilidad";
 choices[30][1] = "Mantenibilidad";
 choices[30][2] = "Verificabilidad";
 choices[30][3] = "Flexibilidad";
 answers[30] = choices[30][1];
 units[30] = "88";
 comments[30] = "Id Pregunta: 2233. ";


//  Id pregunta: 2249 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Dentro de las T&eacute;cnicas de Gesti&oacute;n de Proyectos que se recogen en la Guia de T&eacute;cnicas de METRICA 3, en el apartado de Planificaci&oacute;n, no se encuetra:";
 choices[31]= new Array();
 choices[31][0] = "Program Evaluation &amp; Review Technique";
 choices[31][1] = "Diagramas de Gantt";
 choices[31][2] = "Diagrama de Extrapolaci&oacute;n";
 choices[31][3] = "Diagrama de Regresi&oacute;n";
 answers[31] = choices[31][3];
 units[31] = "86";
 comments[31] = "Id Pregunta: 2249. ";


//  Id pregunta: 2281 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  El modelo de cascada&hellip;:";
 choices[32]= new Array();
 choices[32][0] = "Es una evoluci&oacute;n del modelo por etapas";
 choices[32][1] = "Se conoce como el &quot;modelo antiguo&quot;";
 choices[32][2] = "Es similar al iterativo";
 choices[32][3] = "No admite realimentaci&oacute;n entre etapas";
 answers[32] = choices[32][0];
 units[32] = "76";
 comments[32] = "Id Pregunta: 2281. ";


//  Id pregunta: 2289 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  El modelo en espiral del ciclo de vida presenta alguna dificultades como son:";
 choices[33]= new Array();
 choices[33][0] = "Depender en exceso de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[33][1] = "Ajustar su aplicabilidad para el caso del software contratado";
 choices[33][2] = "Necesidad de una elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[33][3] = "Todas las anteriores son dificultades del modelo en espiral";
 answers[33] = choices[33][3];
 units[33] = "76";
 comments[33] = "Id Pregunta: 2289. ";


//  Id pregunta: 2395 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  La ingenier&iacute;a inversa consiste en:";
 choices[34]= new Array();
 choices[34][0] = "Obtener los elementos de dise&ntilde;o de un sistema de informaci&oacute;n a partir del c&oacute;digo fuente y de las estructuras de datos que utiliza.";
 choices[34][1] = "Realizar un proceso de redise&ntilde;o de un sistema de informaci&oacute;n, bas&aacute;ndose en la utilizaci&oacute;n de las nuevas tecnolog&iacute;as de dise&ntilde;o inverso (desde el conocimiento de las posibilidades de las nuevas tecnolog&iacute;as hasta los requerimientos funcionales).";
 choices[34][2] = "Redise&ntilde;ar el c&oacute;digo y las estructuras de un sistema de informaci&oacute;n bas&aacute;ndose en los dise&ntilde;os f&iacute;sicos.";
 choices[34][3] = "Un conjunto de herramientas orientadas a facilitar las fases de an&aacute;lisis y dise&ntilde;o de los sistemas de informaci&oacute;n.";
 answers[34] = choices[34][0];
 units[34] = "91";
 comments[34] = "Id Pregunta: 2395. ";


//  Id pregunta: 2663 Año de creación de pregunta: 2003-01-01
 questions[35]= "36)  El nivel ac&uacute;stico:";
 choices[35]= new Array();
 choices[35][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamen-tal, los formantes, las transiciones, etc.";
 choices[35][1] = "Determina los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[35][2] = "Tambi&eacute;n llamado fon&eacute;tico distintivo, determina el n&uacute;mero preciso de sonidos con valor distinto.";
 choices[35][3] = "Empieza la abstracci&oacute;n y en se aplican reglas gramaticales al conjunto de sonidos a identificar.";
 answers[35] = choices[35][0];
 units[35] = "94";
 comments[35] = "Id Pregunta: 2663. ";


//  Id pregunta: 3011 Año de creación de pregunta: 2004-01-01
 questions[36]= "37)  &iquest;A qu&eacute; se corresponden las siglas 802.11f sobre redes inal&aacute;mbricas?";
 choices[36]= new Array();
 choices[36][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[36][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[36][2] = "A especificaciones de Seguridad";
 choices[36][3] = "A especificiaciones de roaming";
 answers[36] = choices[36][3];
 units[36] = "107";
 comments[36] = "Id Pregunta: 3011. ";


//  Id pregunta: 3247 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso b&aacute;sico RDSI en Europa?:";
 choices[37]= new Array();
 choices[37][0] = "8 Kbps";
 choices[37][1] = "16 Kbps";
 choices[37][2] = "32 Kbps";
 choices[37][3] = "64 Kbps";
 answers[37] = choices[37][1];
 units[37] = "103";
 comments[37] = "Id Pregunta: 3247. ";


//  Id pregunta: 3579 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  En una red TCP/IP, la conmutaci&oacute;n de nivel 4:";
 choices[38]= new Array();
 choices[38][0] = "No existe";
 choices[38][1] = "Se realiza mediante el identificador MAC del paquete IP";
 choices[38][2] = "Se realiza mediante el identificador de puerto del paquete IP";
 choices[38][3] = "Se realiza mediante el identificador de la direcci&oacute;n IP";
 answers[38] = choices[38][2];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3579. ";


//  Id pregunta: 3584 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Indique la opci&oacute;n que mejor refleje el servicio ofrecido por las compa&ntilde;&iacute;as de telecomunicaci&oacute;n, como conmutaci&oacute;n de circuitos:";
 choices[39]= new Array();
 choices[39][0] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, la entrega a la red y libera el circuito";
 choices[39][1] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda variable";
 choices[39][2] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se env&iacute;a la informaci&oacute;n en paquetes";
 choices[39][3] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda de transmisi&oacute;n fijo durante todo el tiempo que permanece establecido el cto";
 answers[39] = choices[39][3];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3584. ";


//  Id pregunta: 3604 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  La f&oacute;rmula de Little es:";
 choices[40]= new Array();
 choices[40][0] = "El producto del n&uacute;mero de usuarios por su tiempo en el sistema";
 choices[40][1] = "El producto de tiempo medio de servicio y n&uacute;mero de usuarios que llegan al sistema";
 choices[40][2] = "El producto de tiempo medio de espera y n&uacute;mero de usuarios que llegan al sistema por unidad de tiempo";
 choices[40][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[40] = choices[40][2];
 units[40] = "26";
 comments[40] = "Id Pregunta: 3604. *: Formula de LITTLE";


//  Id pregunta: 3622 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  La norma X400 de la ITU-T se refiere a:";
 choices[41]= new Array();
 choices[41][0] = "Servicios de directorio";
 choices[41][1] = "Correo electr&oacute;nico";
 choices[41][2] = "Interfaz RS-232";
 choices[41][3] = "Interfaz de comunicaci&oacute;n de paquetes";
 answers[41] = choices[41][1];
 units[41] = "106";
 comments[41] = "Id Pregunta: 3622. ";


//  Id pregunta: 3736 Año de creación de pregunta: 2002-01-01
 questions[42]= "43)  Los protocolos de control de enlace se orientan:";
 choices[42]= new Array();
 choices[42][0] = "A objeto";
 choices[42][1] = "A baudio";
 choices[42][2] = "A car&aacute;cter o a bit";
 choices[42][3] = "A una trama de tama&ntilde;o variable, hasta 256 bits";
 answers[42] = choices[42][2];
 units[42] = "100";
 comments[42] = "Id Pregunta: 3736. ";


//  Id pregunta: 3964 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  Registro basado en XML para listar servicios Web que se ponen a disposici&oacute;n de otros";
 choices[43]= new Array();
 choices[43][0] = " UDDI";
 choices[43][1] = "WSDL";
 choices[43][2] = " SOAP";
 choices[43][3] = " JAXP";
 answers[43] = choices[43][0];
 units[43] = "69";
 comments[43] = "Id Pregunta: 3964. ";


//  Id pregunta: 4010 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Indique la afirmaci&oacute;n correcta sobre los servicios de directorio:";
 choices[44]= new Array();
 choices[44][0] = "X.500 y LDAP codifican la informaci&oacute;n en ASN.1";
 choices[44][1] = "X.500 codifica la informaci&oacute;n en ASN.1 mientras que LDAP usa cadenas de caracteres";
 choices[44][2] = "LDAP codifica la informaci&oacute;n en ASN.1 mientras X.500 usa cadenas de caracteres";
 choices[44][3] = "X.500 y LDAP usan cadenas de caracteres para codificar la informaci&oacute;n";
 answers[44] = choices[44][1];
 units[44] = "106";
 comments[44] = "Id Pregunta: 4010. ";


//  Id pregunta: 4063 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a las extensiones MIME";
 choices[45]= new Array();
 choices[45][0] = "MIME es acr&oacute;nimo de MultiProtocol Internet Mail Extension";
 choices[45][1] = "permite enviar contenido multimedia a trav&eacute;s de HTTP";
 choices[45][2] = "el est&aacute;ndar de seguridad S-MIME permite el env&iacute;o seguro de mensajes y transacciones";
 choices[45][3] = "fue creado por Ia Asociaci&oacute;n de Amigos de Internet (IFA)";
 answers[45] = choices[45][2];
 units[45] = "112";
 comments[45] = "Id Pregunta: 4063. ";


//  Id pregunta: 4237 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  Indique que significan las siglas AJAX";
 choices[46]= new Array();
 choices[46][0] = "Asynchronous Java And  XML";
 choices[46][1] = "Asynchronous JavaScript And  XML";
 choices[46][2] = "Asynchronous JavaScript And  XSL";
 choices[46][3] = "Advanced JavaScript And  XML";
 answers[46] = choices[46][1];
 units[46] = "114";
 comments[46] = "Id Pregunta: 4237. ";


//  Id pregunta: 4318 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  El sistema de gesti&oacute;n de riesgos MAGERIT establece que los subestados de seguridad de un activo son";
 choices[47]= new Array();
 choices[47][0] = "Autenticaci&oacute;n, confidencialidad, inclusi&oacute;n y disponibilidad.";
 choices[47][1] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[47][2] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 choices[47][3] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 answers[47] = choices[47][1];
 units[47] = "33";
 comments[47] = "Id Pregunta: 4318. ";


//  Id pregunta: 4360 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  JDBC es:";
 choices[48]= new Array();
 choices[48][0] = "Un estandar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a una base de datos v&iacute;a ODBC.";
 choices[48][1] = "Un driver que permite el acceso a base de datos desde aplicaciones JAVA.";
 choices[48][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura internet.";
 choices[48][3] = "El estandar ODBC para bases de datos relacionales.";
 answers[48] = choices[48][1];
 units[48] = "60,116";
 comments[48] = "Id Pregunta: 4360. ";


//  Id pregunta: 4567 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cual de las siguientes afirmaciones es correcta sobre el recurso Quorum de un cluster?";
 choices[49]= new Array();
 choices[49][0] = "contiene datos del firmware del hardware del fabricante de los servidores que forman el cluster.";
 choices[49][1] = "contiene los &Uacute;ltimos datos accedidos par el usuario.";
 choices[49][2] = "ofrece una configuraci&oacute;n consistente del cluster.";
 choices[49][3] = "no existe el recurso Quorum en un cluster.";
 answers[49] = choices[49][2];
 units[49] = "45";
 comments[49] = "Id Pregunta: 4567. ";


//  Id pregunta: 4605 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  El modelo COCOMO (COnstructive COst Model):";
 choices[50]= new Array();
 choices[50][0] = "es un m&eacute;todo de medici&oacute;n de Ia funcionalidad de una aplicaci&oacute;n inform&aacute;tica.";
 choices[50][1] = "es un m&eacute;todo de evaluaci&oacute;n del interface de usuario.";
 choices[50][2] = "es un m&eacute;todo basado en estimaciones del numero de l&iacute;neas de c&oacute;digo.";
 choices[50][3] = "es un m&eacute;todo de planificaci&oacute;n del coste y esfuerzo.";
 answers[50] = choices[50][2];
 units[50] = "89";
 comments[50] = "Id Pregunta: 4605. ";


//  Id pregunta: 4721 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a .es la tiene legalmenteencomendada:";
 choices[51]= new Array();
 choices[51][0] = "Internic.es";
 choices[51][1] = "Red.es";
 choices[51][2] = "Mityc.es";
 choices[51][3] = " Netsol.es";
 answers[51] = choices[51][1];
 units[51] = "112";
 comments[51] = "Id Pregunta: 4721. Examen 2006 JCYL";


//  Id pregunta: 4931 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique cual de los siguientes t&eacute;rminos NO corresponde a una metodolog&iacute;a de desarrollo de Sistemas:";
 choices[52]= new Array();
 choices[52][0] = "Metodolog&iacute;a MERISE.";
 choices[52][1] = "Metodolog&iacute;a SSADM.";
 choices[52][2] = "Metodolog&iacute;a METRICA.";
 choices[52][3] = "Metodolog&iacute;a SVOUGH.";
 answers[52] = choices[52][3];
 units[52] = "79";
 comments[52] = "Id Pregunta: 4931. Examen TIC B 2007";


//  Id pregunta: 5107 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  La norma ISO 9001 cuando se desarrolla, implementa y mejora la eficacia de un sistema de gesti&oacute;n de calidad promueve un enfoque:";
 choices[53]= new Array();
 choices[53][0] = "Basado en procesos.";
 choices[53][1] = "Basado en tareas.";
 choices[53][2] = "Basado en el usuario.";
 choices[53][3] = "Basado en recursos.";
 answers[53] = choices[53][0];
 units[53] = "87";
 comments[53] = "Id Pregunta: 5107. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5210 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  En el modelo EFQM:";
 choices[54]= new Array();
 choices[54][0] = "El subcriterio 6A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[54][1] = "El subcriterio 6B tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[54][2] = "El subcriterio 7A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[54][3] = "El subcriterio 7B tiene un peso del 75% del total de los puntos del criterio 6";
 answers[54] = choices[54][1];
 units[54] = "92";
 comments[54] = "Id Pregunta: 5210. ";


//  Id pregunta: 5306 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n de si la prestaci&oacute;n del servicio universal supone una causa injustificada para los operadores obligados a prestarlo corresponde a:";
 choices[55]= new Array();
 choices[55][0] = "Ministerio de Industria";
 choices[55][1] = "Gobierno";
 choices[55][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[55][3] = "Ninguno de los anteriores";
 answers[55] = choices[55][2];
 units[55] = "110";
 comments[55] = "Id Pregunta: 5306. ";


//  Id pregunta: 5617 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  En UNIX, el t&eacute;rmino &ldquo;vi&rdquo; se refiere a :";
 choices[56]= new Array();
 choices[56][0] = "Un comando que lista las 20 primeras l&iacute;neas de un fichero";
 choices[56][1] = "Un comando que indica el proceso activo";
 choices[56][2] = "Un editor de texto";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][2];
 units[56] = "53";
 comments[56] = "Id Pregunta: 5617. ";


//  Id pregunta: 5619 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  En UNIX, un archivo se compone de:";
 choices[57]= new Array();
 choices[57][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos";
 choices[57][1] = "Una secuencia de bytes";
 choices[57][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos";
 choices[57][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento";
 answers[57] = choices[57][1];
 units[57] = "53";
 comments[57] = "Id Pregunta: 5619. ";


//  Id pregunta: 5623 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  En el protocolo SSL, el paso &quot;Server Key Exchange&quot; o Intercambio de clave del servidor es:";
 choices[58]= new Array();
 choices[58][0] = "Obligatorio";
 choices[58][1] = "Opcional, &uacute;nicamente cuando no existe certificado";
 choices[58][2] = "Nunca es necesario";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][1];
 units[58] = "111";
 comments[58] = "Id Pregunta: 5623. ";


//  Id pregunta: 5725 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  Los SGBD soportan 3 tipos de lenguajes: Lenguaje de Consulta de Datos, Lenguaje de Definici&oacute;n de Datos y Lenguaje de Manipulaci&oacute;n de Datos. Concretamente, el est&aacute;ndar SQL ISO 9075:1987 contempla en su definici&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Lenguaje de Consulta de datos.";
 choices[59][1] = "Lenguaje de Consulta y de Manipulaci&oacute;n de datos.";
 choices[59][2] = "Lenguaje de Consulta y de Definici&oacute;n de datos.";
 choices[59][3] = "Lenguaje de Consulta, de Manipulaci&oacute;n y de Definici&oacute;n de datos.";
 answers[59] = choices[59][3];
 units[59] = "58";
 comments[59] = "Id Pregunta: 5725. MAP 2008 A2";


//  Id pregunta: 5795 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  dentifique la opci&oacute;n que NO es correcta seg&uacute;n lo especificado en Ley 11/2007. Los ciudadanos podr&aacute;n utilizar los siguientes sistemas de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas, de acuerdo con lo que cada Administraci&oacute;n determine.";
 choices[60]= new Array();
 choices[60][0] = "Para las personas f&iacute;sicas, los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad en los t&eacute;rminos y condiciones que en cada caso se determinen.";
 choices[60][1] = "Sistemas de firma electr&oacute;nica avanzada admitidos por las Administraciones P&uacute;blicas.";
 choices[60][2] = "Utilizaci&oacute;n de claves concertadas en un registro previo como usuario en los t&eacute;rminos y condiciones que en cada caso se determinen.";
 choices[60][3] = "Aportaci&oacute;n de informaci&oacute;n conocida por ambas partes en los t&eacute;rminos y condiciones que en cada caso se terminen.";
 answers[60] = choices[60][0];
 units[60] = "43";
 comments[60] = "Id Pregunta: 5795. MAP 2008 A2";


//  Id pregunta: 5853 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  Con respecto a ITIL, el proceso &quot;Configuration Management&quot; o Gesti&oacute;n de la Configuraci&oacute;n, &iquest;en cu&aacute;l de los m&oacute;dulos ITIL citados seguidamente est&aacute; incluido?";
 choices[61]= new Array();
 choices[61][0] = "ICT Infrastructure Management";
 choices[61][1] = "Service Delibery";
 choices[61][2] = "Service Support";
 choices[61][3] = "Software Asset Management";
 answers[61] = choices[61][2];
 units[61] = "98";
 comments[61] = "Id Pregunta: 5853. Pregunta 33";


//  Id pregunta: 5857 Año de creación de pregunta: 2009-01-01
 questions[62]= "63)  La Web 2.0 se refiere espec&iacute;ficamente a:";
 choices[62]= new Array();
 choices[62][0] = "Webs que generan informaci&oacute;n autom&aacute;ticamente a partir de bases de datos corporativas";
 choices[62][1] = "P&aacute;ginas implementadas con AJAX en las que s&oacute;lo existe un proveedor de contenidos";
 choices[62][2] = "Usar la inteligencia colectiva para proporcionar servicios interactivos en red dando al usuario el control de los datos";
 choices[62][3] = "Programas que procesan la avalancha de informaci&oacute;n existente en la Web";
 answers[62] = choices[62][2];
 units[62] = "69";
 comments[62] = "Id Pregunta: 5857. Pregunta 37";


//  Id pregunta: 5915 Año de creación de pregunta: 2009-01-01
 questions[63]= "64)  En el modelo de Evoluci&oacute;n de los Sistemas de Informaci&oacute;n de Gibson y Nolan se distinguen cuatro etapas distintas en el crecimiento de todo sistema de informaci&oacute;n en una empresa. &iquest;Cu&aacute;l es el orden cronol&oacute;gico correcto de dichas etapas?";
 choices[63]= new Array();
 choices[63][0] = "Iniciaci&oacute;n, formalizaci&oacute;n, expansi&oacute;n y madurez";
 choices[63][1] = "Iniciaci&oacute;n, expansi&oacute;n, madurez y formalizaci&oacute;n";
 choices[63][2] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 choices[63][3] = "Iniciaci&oacute;n, formalizaci&oacute;n, madurez y expansi&oacute;n";
 answers[63] = choices[63][2];
 units[63] = "21";
 comments[63] = "Id Pregunta: 5915. MAP 2008 A1";


//  Id pregunta: 5936 Año de creación de pregunta: 2009-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de estas afirmaciones es cierta con respecto al hypervisor de la herramienta de virtualizaci&oacute;n Xen?";
 choices[64]= new Array();
 choices[64][0] = "Los kernels que incorporan por defecto las distribuciones populares como Debian y Red Hat pueden realizar la funci&oacute;n de hypervisor de Xen.";
 choices[64][1] = "Para que un kernel gen&eacute;rico de Debian o Red Hat puede realizar la funci&oacute;n de hypervisor debemos cargar m&oacute;dulos espec&iacute;ficos en el arranque del sistema.";
 choices[64][2] = "En funci&oacute;n del tipo que sistema operativo que vayamos a alojar como hu&eacute;sped deberemos o no cargar m&oacute;dulos espec&iacute;ficos del kernel por defecto de Debian o Red Hat para que &eacute;ste realice la funci&oacute;n de hypervisor.";
 choices[64][3] = "El hypervisor de Xen es un kernel de Linux especial que debemos instalar, puesto que el kernel por defecto de Debian o Red Hat no puede realizar esas tareas.";
 answers[64] = choices[64][3];
 units[64] = "119";
 comments[64] = "Id Pregunta: 5936. ";


//  Id pregunta: 6125 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  El acr&oacute;nimo RSS responde a:";
 choices[65]= new Array();
 choices[65][0] = "Rich Site Summary.";
 choices[65][1] = "RDF Site Summary.";
 choices[65][2] = "Really Simple Syndication.";
 choices[65][3] = "Todos los anteriores.";
 answers[65] = choices[65][3];
 units[65] = "69";
 comments[65] = "Id Pregunta: 6125. TIC A 2009";


//  Id pregunta: 6165 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[66]= new Array();
 choices[66][0] = "Los datos analizados y procesados se convierten en informaci&oacute;n, a la cual si le aporta la experiencia se obtiene el conocimiento.";
 choices[66][1] = "La informaci&oacute;n analizada y procesada se convierte en datos, a los cuales si le aporta la experiencia se obtiene el conocimiento.";
 choices[66][2] = "El conocimiento analizado y procesado se convierte en informaci&oacute;n, a la cual si se le aporta la experiencia se obtienen los datos.";
 choices[66][3] = "Todas las anteriores son correctas.";
 answers[66] = choices[66][0];
 units[66] = "21";
 comments[66] = "Id Pregunta: 6165. ";


//  Id pregunta: 6188 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  El Esquema Nacional de Seguridad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[67]= new Array();
 choices[67][0] = "Cada 6 meses";
 choices[67][1] = "Cada a&ntilde;o";
 choices[67][2] = "Cada 2 a&ntilde;os";
 choices[67][3] = "El Esquema Nacional de Seguridad no especifica nada respecto a auditor&iacute;as";
 answers[67] = choices[67][2];
 units[67] = "43";
 comments[67] = "Id Pregunta: 6188. Art&iacute;culo 34";


//  Id pregunta: 6246 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes son implementaciones de Java Persistence API?";
 choices[68]= new Array();
 choices[68][0] = "Mediator";
 choices[68][1] = "Composite";
 choices[68][2] = "Facade";
 choices[68][3] = "Kodo";
 answers[68] = choices[68][3];
 units[68] = "116";
 comments[68] = "Id Pregunta: 6246. TICB-2009, bloque desarrollo";


//  Id pregunta: 6319 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  En un modelo relacional, la regla de integridad de las entidades dice :";
 choices[69]= new Array();
 choices[69][0] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n base puede aceptar       nulos.";
 choices[69][1] = "La base de datos no debe contener valores de clave ajena sin concordancia.";
 choices[69][2] = "En una clave primaria compuesta, cada valor individual de la clave primaria puede ser nulo aunque no en su totalidad.";
 choices[69][3] = "Ning&uacute;n componente de una clave ajena de una relaci&oacute;n puede aceptar nulos.";
 answers[69] = choices[69][0];
 units[69] = "58";
 comments[69] = "Id Pregunta: 6319. ";


//  Id pregunta: 6371 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  En el Esquema Nacional de Seguridad, las dimensiones de seguridad se adscribir&aacute;n a uno de los siguientes niveles:";
 choices[70]= new Array();
 choices[70][0] = "Bajo, Medio o Alto";
 choices[70][1] = "Limitado, Grave o Muy Grave";
 choices[70][2] = "B&aacute;sico, Medio o Alto";
 choices[70][3] = "B&aacute;sico, Medio, Alto o Muy Alto";
 answers[70] = choices[70][0];
 units[70] = "43";
 comments[70] = "Id Pregunta: 6371. Anexo I ENS";


//  Id pregunta: 6394 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Es posible establecer la obligaci&oacute;n de comunicarse electr&oacute;nicamente con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes?";
 choices[71]= new Array();
 choices[71][0] = "S&iacute;, en cualquier caso";
 choices[71][1] = "No, en ning&uacute;n caso";
 choices[71][2] = "S&iacute;, en determinados casos previstos y mediante orden ministerial";
 choices[71][3] = "S&iacute;, en determinados casos previstos y mediante resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[71] = choices[71][2];
 units[71] = "43";
 comments[71] = "Id Pregunta: 6394. Art&iacute;culo 32 RD 1671/2009";


//  Id pregunta: 6418 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l es la norma que supone la base de la certificaci&oacute;n europea en Accesibilidad Web?";
 choices[72]= new Array();
 choices[72][0] = "CWA 139803:2004";
 choices[72][1] = "CWA 15554:2006";
 choices[72][2] = "CWA 4568:2007";
 choices[72][3] = "CWA 17002:2005";
 answers[72] = choices[72][1];
 units[72] = "39";
 comments[72] = "Id Pregunta: 6418. ";


//  Id pregunta: 6463 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  Indique cu&aacute;l NO es una t&eacute;cnica de planificaci&oacute;n temporal:";
 choices[73]= new Array();
 choices[73][0] = "WBS (Work Breakdown Structure)";
 choices[73][1] = "PERT (Program Evaluation and Review Technique)";
 choices[73][2] = "Diagrama de Gantt";
 choices[73][3] = "CPM (Critical Path Method)";
 answers[73] = choices[73][0];
 units[73] = "28";
 comments[73] = "Id Pregunta: 6463. Castilla La Mancha 2009";


//  Id pregunta: 6535 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Dentro de la gu&iacute;a de servicios ISO 9004, la orientaci&oacute;n para la direcci&oacute;n se basa en distintos principios de gesti&oacute;n";
 choices[74]= new Array();
 choices[74][0] = "Enfoque al cliente";
 choices[74][1] = "Liderazgo";
 choices[74][2] = "Participaci&oacute;n del personal";
 choices[74][3] = "Todas las respuestas anteriores son correctas";
 answers[74] = choices[74][3];
 units[74] = "92";
 comments[74] = "Id Pregunta: 6535. ";


//  Id pregunta: 6542 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  Un usuario de Kerberos";
 choices[75]= new Array();
 choices[75][0] = "Recibe un ticket para garantizar el acceso TGT";
 choices[75][1] = "El ticket permite al usuario pedir acceso a los distintos recursos";
 choices[75][2] = "El servicio de generaci&oacute;n de tickets TGS genera los tickets con las claves de sesi&oacute;n.";
 choices[75][3] = "Todas las respuestas anteriores son correctas";
 answers[75] = choices[75][3];
 units[75] = "111";
 comments[75] = "Id Pregunta: 6542. ";


//  Id pregunta: 7321 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Seg&uacute;n la ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico cu&aacute;l de los siguientes servicios se encuentra excluidos del &aacute;mbito de aplicaci&oacute;n de la Ley:";
 choices[76]= new Array();
 choices[76][0] = "Los servicios prestados por notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones p&uacute;blicas";
 choices[76][1] = "Los servicios prestados por prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a";
 choices[76][2] = "Los servicios de la sociedad de la informaci&oacute;n que los prestadores residentes o domiciliados en otro Estado ofrezcan a trav&eacute;s de un establecimiento permanente situado en Espa&ntilde;a";
 choices[76][3] = "Servicios que afecten a derechos de propiedad intelectual o industrial prestados por prestadores de servicios establecidos en otro Estado miembro de la Uni&oacute;n Europea o del Espacio Econ&oacute;mico Europeo cuando el destinatario de los servicios radique en Espa&ntilde;a";
 answers[76] = choices[76][0];
 units[76] = "70";
 comments[76] = "Id Pregunta: 7321. ";


//  Id pregunta: 7358 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  Cu&aacute;l de los siguientes est&aacute;ndares corresponde a PDF/A";
 choices[77]= new Array();
 choices[77][0] = "ISO 23018";
 choices[77][1] = "ISO 19005";
 choices[77][2] = "ISO 13100";
 choices[77][3] = "ISO 16546";
 answers[77] = choices[77][1];
 units[77] = "95";
 comments[77] = "Id Pregunta: 7358. ";


//  Id pregunta: 7981 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)   &iquest;Cu&aacute;l de estas afirmaciones sobre accesibilidad es cierta de acuerdo con las gu&iacute;as del W3C?";
 choices[78]= new Array();
 choices[78][0] = " Una p&aacute;gina web accesible debe tener textos equivalentes para cualquier elemento no textual.";
 choices[78][1] = " Un p&aacute;gina web accesible debe contener solo texto.";
 choices[78][2] = " Una p&aacute;gina web accesible no debe utilizar colores.";
 choices[78][3] = " Una p&aacute;gina web accesible debe utilizar un &uacute;nico tipo de letra establecido en estas gu&iacute;as.";
 answers[78] = choices[78][0];
 units[78] = "NULL";
 comments[78] = "Id Pregunta: 7981. Map 2007";


//  Id pregunta: 7997 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)   Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia de la recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que esta ha sido rechazada cuando no se haya accedido a su contenido en un plazo de:";
 choices[79]= new Array();
 choices[79][0] = " 10 d&iacute;as naturales.";
 choices[79][1] = " 10 d&iacute;as h&aacute;biles.";
 choices[79][2] = " 20 d&iacute;as naturales.";
 choices[79][3] = " En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido.";
 answers[79] = choices[79][0];
 units[79] = "NULL";
 comments[79] = "Id Pregunta: 7997. Map 2007";


//  Id pregunta: 8141 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)   Los cifrados de clave p&uacute;blica:";
 choices[80]= new Array();
 choices[80][0] = " De Diffie-Hellman basan su fortaleza en la dificultad de resolver el problema de los logaritmos discretos.";
 choices[80][1] = " A igualdad de longitud de clave los basados en curvas el&iacute;pticas son tan robustos como los basados en la aritm&eacute;tica modular.";
 choices[80][2] = " La llegada de los ordenadores cu&aacute;nticos no los har&aacute; m&aacute;s vulnerables a los m&eacute;todos criptoanal&iacute;ticos empleados ahora.";
 choices[80][3] = " Basados en el RSA requieren m&aacute;s tiempo para descifrar que para generar sus pares de claves.";
 answers[80] = choices[80][0];
 units[80] = "NULL";
 comments[80] = "Id Pregunta: 8141. Map 2008";


//  Id pregunta: 8195 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  La normativa vigente sobre Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) establece que:";
 choices[81]= new Array();
 choices[81][0] = "Las dimensiones m&iacute;nimas de una ICT incluyen los elementos necesarios para la captaci&oacute;n y adaptaci&oacute;n de las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales y por sat&eacute;lite.";
 choices[81][1] = "Su &aacute;mbito de aplicaci&oacute;n son todos los inmuebles de nueva construcci&oacute;n a partir de su entrada en vigor. ";
 choices[81][2] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Bolet&iacute;n de Instalaci&oacute;n. ";
 choices[81][3] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Certificado de Fin de Obra. ";
 answers[81] = choices[81][2];
 units[81] = "99";
 comments[81] = "Id Pregunta: 8195. Examen TIC A1 2010";


//  Id pregunta: 8299 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  Una direcci&oacute;n IP identifica:";
 choices[82]= new Array();
 choices[82][0] = "Una conexi&oacute;n. ";
 choices[82][1] = "Una interfaz de tarjeta de red.";
 choices[82][2] = "Un ordenador.";
 choices[82][3] = "Una aplicaci&oacute;n interactiva. ";
 answers[82] = choices[82][1];
 units[82] = "100";
 comments[82] = "Id Pregunta: 8299. Examen TIC A2 2010";


//  Id pregunta: 8359 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  En el proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (seg&uacute;n M&eacute;trica v3), &iquest;qu&eacute; acci&oacute;n realiza el grupo de Aseguramiento de la Calidad en relaci&oacute;n a1 Plan de Pruebas?";
 choices[83]= new Array();
 choices[83][0] = "Define su contenido.";
 choices[83][1] = "Revisa los resultados de pruebas ejecutadas en este proceso.";
 choices[83][2] = "Revisa la existencia de una normativa para la gesti&oacute;n de los resultados de las pruebas, que permita constatar que se han realizado y descubrir las diferencias entre los resultados esperados y los obtenidos.";
 choices[83][3] = "Coordina su realizaci&oacute;n para que cumplan en su definici&oacute;n los crltenos establecidos en el plan de aseguramiento de calidad.";
 answers[83] = choices[83][2];
 units[83] = "86";
 comments[83] = "Id Pregunta: 8359. Examen TIC A2 2010";


//  Id pregunta: 8476 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  En la traslaci&oacute;n del modelo OSI para su aplicaci&oacute;n a las redes de &aacute;rea local (LAN), es cierto que:";
 choices[84]= new Array();
 choices[84][0] = "El nivel de enlace se subdivide en subnivel LLC y subnivel MAC.";
 choices[84][1] = "El nivel f&iacute;sico se subdivide en subnivel LLC y subnivel MAC.";
 choices[84][2] = "Se establecen los tres niveles siguientes: nivel f&iacute;sico (que pasa a denominarse nivel LLC), nivel MAC y nivel de enlace.";
 choices[84][3] = "Los niveles f&iacute;sico y de enlace pasan de denominarse, respectivamente, nivel LLC y nivel MAC";
 answers[84] = choices[84][0];
 units[84] = "101";
 comments[84] = "Id Pregunta: 8476. Examen TIC A2 2010 interna";


//  Id pregunta: 8676 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  A qu&eacute; se denomina Single sign-on (SSO):";
 choices[85]= new Array();
 choices[85][0] = "Procedimiento de cifrado para autenticar a un usuario";
 choices[85][1] = "Procedimiento asociado al cifrado en Secure Sockets Layers (SSL)";
 choices[85][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n";
 choices[85][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS";
 answers[85] = choices[85][2];
 units[85] = "118";
 comments[85] = "Id Pregunta: 8676. Examen UPM A2 2011";


//  Id pregunta: 8949 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;A qui&eacute;n corresponde aprobar la relaci&oacute;n de prestadores de servicios de certificaci&oacute;n admitidos?";
 choices[86]= new Array();
 choices[86][0] = "Al Ministerio de Industria Turismo y Comercio";
 choices[86][1] = "Al Ministerio de la Presidencia";
 choices[86][2] = "Al Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[86][3] = "Ninguna de las anteriores es cierta";
 answers[86] = choices[86][3];
 units[86] = "43";
 comments[86] = "Id Pregunta: 8949. ";


//  Id pregunta: 9070 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;Cu&aacute;ntas gu&iacute;as de accesibilidad del WAI existen actualmente (abril de 2013)?";
 choices[87]= new Array();
 choices[87][0] = "Tres: ATAG, WCAG y UUAG. ";
 choices[87][1] = "Seis: ATAG, WCAG, UAAG, XAG, FCAG y WAI-RIA. ";
 choices[87][2] = "Cuatro: ATAG, WCAG, UAAG y XAG. ";
 choices[87][3] = "Cinco: ATAG, WCAG, UAAG, XAG y WAI-RIA. ";
 answers[87] = choices[87][3];
 units[87] = "39";
 comments[87] = "Id Pregunta: 9070. ";


//  Id pregunta: 9212 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  &iquest;C&oacute;mo se identifican los equipos pertenecientes a una red FC?";
 choices[88]= new Array();
 choices[88][0] = "Mediante la MAC";
 choices[88][1] = "Mediante su WWN";
 choices[88][2] = "Mediante una url";
 choices[88][3] = "Mediante un identificador que el administrador configure en el momento de la instalaci&oacute;n.";
 answers[88] = choices[88][1];
 units[88] = "48";
 comments[88] = "Id Pregunta: 9212. ";


//  Id pregunta: 9342 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;Qu&eacute; afirmaci&oacute;n es falsa sobre Garant&iacute;a de Calidad?";
 choices[89]= new Array();
 choices[89][0] = "Est&aacute; delineada en un documento de estructura.";
 choices[89][1] = "El objetivo es asegurarle al cliente la calidad de un producto.";
 choices[89][2] = "La estructura se presenta en un manual de garant&iacute;a de calidad";
 choices[89][3] = "La garant&iacute;a de calidad no se extiende a problemas de seguridad";
 answers[89] = choices[89][3];
 units[89] = "87";
 comments[89] = "Id Pregunta: 9342. ";


//  Id pregunta: 9346 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Acerca de RDSI y sus diferentes servicios:";
 choices[90]= new Array();
 choices[90][0] = "Los servicios portadores soportan la comunicaci&oacute;n terminal a terminal";
 choices[90][1] = "Los teleservicios proporcionan capacidades adicionales para los servicios suplementearios y los servicios portadores.";
 choices[90][2] = "Los servicios suplementarios soportan la comunicaci&oacute;n terminal a terminal y controlan los procesos de comunicaci&oacute;n entre usuarios.";
 choices[90][3] = "Los teleservicios soportan la comunicaci&oacute;n terminal a terminal";
 answers[90] = choices[90][3];
 units[90] = "103";
 comments[90] = "Id Pregunta: 9346. Pag 9 temario ASTIC 2011";


//  Id pregunta: 9375 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  En la Teor&iacute;a de la Decisi&oacute;n Multicreiterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo no es de asignaci&oacute;n de pesos a los criterios:";
 choices[91]= new Array();
 choices[91][0] = "DELPHI";
 choices[91][1] = "Entrop&iacute;a";
 choices[91][2] = "SAATY";
 choices[91][3] = "PROMETHEE";
 answers[91] = choices[91][3];
 units[91] = "34";
 comments[91] = "Id Pregunta: 9375. ";


//  Id pregunta: 9478 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo est&aacute;tico de selecci&oacute;n de inversiones?";
 choices[92]= new Array();
 choices[92][0] = "Tasa de rendimiento contable";
 choices[92][1] = "M&eacute;todo del flujo total por unidad monetaria comprometida";
 choices[92][2] = "PROMETHEE";
 choices[92][3] = "M&eacute;todo del flujo de caja medio anual por unidad monetaria comprometida";
 answers[92] = choices[92][2];
 units[92] = "38";
 comments[92] = "Id Pregunta: 9478. ";


//  Id pregunta: 9592 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  El c&oacute;mputo de plazos, imputables tanto a los interesados como a las Administraciones P&uacute;blicas, seg&uacute;n se establece en el art&iacute;culo 26 de la Ley 11/2007 se fija por:";
 choices[93]= new Array();
 choices[93][0] = "La fecha y hora oficial de la sede electr&oacute;nica de los servicios centrales, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[93][1] = "La fecha y hora oficial de la sede electr&oacute;nica de acceso, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[93][2] = "La fecha y hora oficial del Real Instituto y Observatorio de la Armada, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible.";
 choices[93][3] = "La fecha y hora oficial de la sede electr&oacute;nica del Ministerio de Pol&iacute;tica Territorial y Administraci&oacute;n P&uacute;blica, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 answers[93] = choices[93][1];
 units[93] = "43";
 comments[93] = "Id Pregunta: 9592. Examen TIC A2 2011 interna";


//  Id pregunta: 9683 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes opciones representa elementos dentro de un GIS?";
 choices[94]= new Array();
 choices[94][0] = "Hardware, software, georreferenciaci&oacute;n, equipo cient&iacute;fico y procedimientos.";
 choices[94][1] = "Hardware, software, datos geogr&aacute;ficos, equipo humano y capas tem&aacute;ticas.";
 choices[94][2] = "Proyecci&oacute;n, georreferenciaci&oacute;n, programas, datos espaciales y equipo cient&iacute;fico.";
 choices[94][3] = "Hardware, software, informaci&oacute;n geogr&aacute;fica, equipo humano y procedimientos.";
 answers[94] = choices[94][3];
 units[94] = "67";
 comments[94] = "Id Pregunta: 9683. ";


//  Id pregunta: 9799 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  En la Ley 59/2003, de firma electr&oacute;nica, se indica que la prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[95]= new Array();
 choices[95][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Ministro de Hacienda. ";
 choices[95][1] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Consejo de Ministros. ";
 choices[95][2] = "No est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[95][3] = "Es una competencia auton&oacute;mica.";
 answers[95] = choices[95][2];
 units[95] = "30";
 comments[95] = "Id Pregunta: 9799. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9855 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En lo que se refiere a las Firmas Digitales, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa? ";
 choices[96]= new Array();
 choices[96][0] = "Si una firma digital es v&aacute;lida para un documento es v&aacute;lida para otro distinto. ";
 choices[96][1] = "S&oacute;lo puede ser generada por su leg&iacute;timo titular.";
 choices[96][2] = "Es p&uacute;blicamente verificable.";
 choices[96][3] = "La forma m&aacute;s extendida de calcular firmas digitales consiste en emplear una combinaci&oacute;n de cifrado asim&eacute;trico y funciones resumen. ";
 answers[96] = choices[96][0];
 units[96] = "111";
 comments[96] = "Id Pregunta: 9855. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 10078 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[97]= new Array();
 choices[97][0] = "ATSC ";
 choices[97][1] = "ISDB-T";
 choices[97][2] = "DVB-T ";
 choices[97][3] = "EDTVB";
 answers[97] = choices[97][2];
 units[97] = "105";
 comments[97] = "Id Pregunta: 10078. TIC A2, libre, Examen 2013";


//  Id pregunta: 10184 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  El Modelo E-R Extendido es el resultado de la ampliaci&oacute;n de elementos y modificaciones introducidas en el modelo E-R de Chen a lo largo del tiempo. De entre &eacute;stas, es cierto que:";
 choices[98]= new Array();
 choices[98][0] = "Sea una entidad involucrada en varias relaciones o interrelaciones distintas. Si cada ocurrencia de dicha entidad s&oacute;lo puede participar en una interrelaci&oacute;n, se habla de interrelaciones disjuntas.";
 choices[98][1] = "El Modelo E-R extendido permite la representaci&oacute;n de relaciones jer&aacute;rquicas denominadas Categor&iacute;as.";
 choices[98][2] = "Una jerarqu&iacute;a total se representa mediante la indicaci&oacute;n de la letra &quot;t&quot; en el tri&aacute;ngulo invertido que representa las relaciones de jerarqu&iacute;a";
 choices[98][3] = "Las relaciones reflexivas, al ser relaciones unarias, suelen presentar un tipo de correspondencia 1:1";
 answers[98] = choices[98][1];
 units[98] = "80";
 comments[98] = "Id Pregunta: 10184. ";


//  Id pregunta: 10195 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Cual es la afirmaci&oacute;n falsa respecto a VDSL2 (Very-High-Bit-Rate Digital Subscriber Line 2)?";
 choices[99]= new Array();
 choices[99][0] = "Corresponde a la norma ITU-T G.993.2";
 choices[99][1] = "No permite la modalidad sim&eacute;trica";
 choices[99][2] = "Puede alcanzar velocidades de 100 Mbps a 1 Km de distancia de la central ";
 choices[99][3] = "A distancias mayores de 2 Km la velocidad equivale a un ADSL2";
 answers[99] = choices[99][1];
 units[99] = "107";
 comments[99] = "Id Pregunta: 10195. ";


