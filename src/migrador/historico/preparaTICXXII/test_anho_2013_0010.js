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


//  Id pregunta: 73 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en la comparaci&oacute;n binaria de las alternativas?:";
 choices[1]= new Array();
 choices[1][0] = "Concordancia";
 choices[1][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[1][2] = "Ponderaci&oacute;n lineal";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][0];
 units[1] = "34";
 comments[1] = "Id Pregunta: 73. ";


//  Id pregunta: 147 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  El la teor&iacute;a de la decisi&oacute;n multicriterio discreta, para el problema de la asignaci&oacute;n de pesos a criterios pueden utilizarse, entre otros, los m&eacute;todos:";
 choices[2]= new Array();
 choices[2][0] = "Lexicogr&aacute;fico y Promethee";
 choices[2][1] = "El m&eacute;todo de ponderaci&oacute;n lineal";
 choices[2][2] = "El m&eacute;todo Delphi y el de la entrop&iacute;a";
 choices[2][3] = "El m&eacute;todo de ponderaci&oacute;n";
 answers[2] = choices[2][2];
 units[2] = "34";
 comments[2] = "Id Pregunta: 147. ";


//  Id pregunta: 178 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En el contexto de la capacidad y rendimiento de los sistemas:";
 choices[3]= new Array();
 choices[3][0] = "El equipo encargado de la gesti&oacute;n de capacidad estar&aacute; formado &uacute;nica y exclusivamente por usuarios muy experimentados en el negocio de la organizaci&oacute;n";
 choices[3][1] = "Una vez obtenido el visto bueno de la direcci&oacute;n al plan de desarrollo e implantaci&oacute;n, se deber&aacute; abordar el estudio de viabilidad";
 choices[3][2] = "El equipo encargado de la gesti&oacute;n de capacidad debe ser permanente en el tiempo";
 choices[3][3] = "Como consecuencia del abaratamiento de los equipos f&iacute;sicos la gesti&oacute;n de capacidad y del rendimiento es trivial";
 answers[3] = choices[3][2];
 units[3] = "35";
 comments[3] = "Id Pregunta: 178. ";


//  Id pregunta: 183 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  En el marco de la decisi&oacute;n multicriterio, la normalizaci&oacute;n es el proceso por el que:";
 choices[4]= new Array();
 choices[4][0] = "Se eliminan las alternativas que no intervienen en el c&aacute;lculo";
 choices[4][1] = "Se desactivan aquellos criterios en los que todas las alternativas alcanzan id&eacute;ntica puntuaci&oacute;n";
 choices[4][2] = "Se ajusta la matriz de puntuaciones seg&uacute;n un modelo de referencia";
 choices[4][3] = "Se modifica el contenido de la matriz de puntuaciones para hacer &eacute;sta comparables entre s&iacute;";
 answers[4] = choices[4][3];
 units[4] = "34";
 comments[4] = "Id Pregunta: 183. ";


//  Id pregunta: 302 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  La estructura organizacional  funcional de un &aacute;rea de desarrollo:";
 choices[5]= new Array();
 choices[5][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[5][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[5][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[5] = choices[5][0];
 units[5] = "26";
 comments[5] = "Id Pregunta: 302. ";


//  Id pregunta: 307 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  La fidelidad con que un modelo representa la realidad depende fundamentalmente de:";
 choices[6]= new Array();
 choices[6][0] = "La precisi&oacute;n de los valores previstos de variables incontrolables";
 choices[6][1] = "La calidad de los datos";
 choices[6][2] = "El tratamiento de la incertidumbre";
 choices[6][3] = "Todas las respuestas anteriores son correctas";
 answers[6] = choices[6][3];
 units[6] = "34";
 comments[6] = "Id Pregunta: 307. ";


//  Id pregunta: 324 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  La organizaci&oacute;n t&iacute;pica de un entorno de producci&oacute;n es la:";
 choices[7]= new Array();
 choices[7][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[7][1] = "Organizaci&oacute;n funcional";
 choices[7][2] = "Organizaci&oacute;n proyecto-staff";
 choices[7][3] = "Organizaci&oacute;n por aplicaciones";
 answers[7] = choices[7][1];
 units[7] = "26";
 comments[7] = "Id Pregunta: 324. organizaci&oacute;n estructural";


//  Id pregunta: 394 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Para la determinaci&oacute;n del rendimiento de un sistema inform&aacute;tico:";
 choices[8]= new Array();
 choices[8][0] = "El tiempo de presencia es el que transcurre desde el instante en que un programa entra en el sistema hasta que la respuesta empieza a aparecer en el terminal";
 choices[8][1] = "El solapamiento (overlap) es el porcentaje de tiempo de CPU en que la CPU atiende al sistema operativo y a las funciones de supervisi&oacute;n y no a las funciones de usuario";
 choices[8][2] = "La capacidad de un recurso es el porcentaje de tiempo durante el cual est&aacute; a disposici&oacute;n de los usuarios";
 choices[8][3] = "La disponibilidad se puede cuantificar por medio de los valores del MTBF (tiempo medio entre fallos) y del MTTR (tiempo medio de reparaciones)";
 answers[8] = choices[8][3];
 units[8] = "35";
 comments[8] = "Id Pregunta: 394. ";


//  Id pregunta: 547 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  A la hora de gestionar y resolver una incidencia en un CAU, se establecen los siguientes niveles de gesti&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Tres niveles: nivel 1 (el propio CAU), nivel 2 (las dem&aacute;s &aacute;reas del Centro TIC) y nivel 3 (los proveedores externos y/o empresas de mantenimiento)";
 choices[9][1] = "Cuatro niveles: nivel 1 (las herramientas de diagn&oacute;stico y recuperaci&oacute;n del sistema o aplicaci&oacute;n), nivel 2 (el propio CAU), nivel 3 (las dem&aacute;s &aacute;reas del Centro TIC) y nivel 4 (los proveedores externos y/o empresas de mantenimiento)";
 choices[9][2] = "a y b son correctas";
 choices[9][3] = "a y b son incorrectas";
 answers[9] = choices[9][0];
 units[9] = "26";
 comments[9] = "Id Pregunta: 547. ";


//  Id pregunta: 637 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  Respecto a los m&eacute;todos del Payback, VAN y TIR, la respuesta correcta es:";
 choices[10]= new Array();
 choices[10][0] = "El m&eacute;todo del Payback sirve para determinar la rentabilidad exigida a una inversi&oacute;n.";
 choices[10][1] = "Los m&eacute;todos del VAN y el TIR siempre conducen a resultados coincidentes.";
 choices[10][2] = "Los m&eacute;todos del Payback y el VAN son similares (comparan los flujos de caja con la inversi&oacute;n inicial), pero el Payback no tiene en cuenta el cambio del valor del dinero con el tiempo y el VAN s&iacute;.";
 choices[10][3] = "El criterio de rentabilidad del TIR es: rentabilidad exigida &gt; TIR =&gt; inversi&oacute;n rentable.";
 answers[10] = choices[10][2];
 units[10] = "38";
 comments[10] = "Id Pregunta: 637. ";


//  Id pregunta: 765 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  con respecto a la seguridad";
 choices[11]= new Array();
 choices[11][0] = "PGP basa su modelo en la existencia de una entidad de certificacion ";
 choices[11][1] = "si la entidad de certificaci&oacute;n es de reconocido prestigio, no se necesita entidad de registro en PKI";
 choices[11][2] = "El certificado digital contiene s&oacute;lo la clave p&uacute;blica, no los datos del sujeto";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][3];
 units[11] = "73";
 comments[11] = "Id Pregunta: 765. ";


//  Id pregunta: 799 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; tipo de aplicaciones son Vuze, eMule, eDonkey&hellip;?:";
 choices[12]= new Array();
 choices[12][0] = "Chat";
 choices[12][1] = "Correo electr&oacute;nico";
 choices[12][2] = "Peer to Peer";
 choices[12][3] = "B2C";
 answers[12] = choices[12][2];
 units[12] = "62";
 comments[12] = "Id Pregunta: 799. ";


//  Id pregunta: 1298 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Para especificar localizadores en XML se usa:";
 choices[13]= new Array();
 choices[13][0] = "s&oacute;lo el est&aacute;ndar Xlink";
 choices[13][1] = "s&oacute;lo el est&aacute;ndar Xpointer";
 choices[13][2] = "los est&aacute;ndares Xlink y Xpointer";
 choices[13][3] = "ninguno de los anteriores";
 answers[13] = choices[13][2];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1298. ";


//  Id pregunta: 1387 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Un procesador superescalar es aqu&eacute;l que:";
 choices[14]= new Array();
 choices[14][0] = "Contiene varias unidades de ejecuci&oacute;n independientes de forma que puede ejecutar varias instrucciones simult&aacute;neamente";
 choices[14][1] = "Est&aacute; optimizado para maquinas multiprocesador, principalmente por su implementaci&oacute;n de algoritmos que aseguran la coherencia de las cach&eacute;s";
 choices[14][2] = "Contiene varias unidades de coma flotante posibilitando la paralelizaci&oacute;n de c&oacute;digo en servidores de c&aacute;lculo intensivo";
 choices[14][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[14] = choices[14][0];
 units[14] = "45";
 comments[14] = "Id Pregunta: 1387. ";


//  Id pregunta: 1452 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes no es un formato de descripci&oacute;n de p&aacute;ginas?:";
 choices[15]= new Array();
 choices[15][0] = "EPS";
 choices[15][1] = "RIP";
 choices[15][2] = "PDF";
 choices[15][3] = "PCL ";
 answers[15] = choices[15][1];
 units[15] = "93";
 comments[15] = "Id Pregunta: 1452. ";


//  Id pregunta: 1544 Año de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;Qu&eacute; es Wine?";
 choices[16]= new Array();
 choices[16][0] = "Un emulador X11 para Windows";
 choices[16][1] = "Un emulador X11 para Linux";
 choices[16][2] = "Una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[16][3] = "Nada de lo anterior";
 answers[16] = choices[16][2];
 units[16] = "62";
 comments[16] = "Id Pregunta: 1544. ";


//  Id pregunta: 1628 Año de creación de pregunta: 2003-01-01
 questions[17]= "18)  Si utilizamos los t&eacute;rminos IceWM, Fluxbox, fvwm, nos estamos refiriendo a:";
 choices[17]= new Array();
 choices[17][0] = "Sistemas de ayuda de KDE.";
 choices[17][1] = "Interfaz gr&aacute;fica del usuario.";
 choices[17][2] = "Entorno de escritorio.";
 choices[17][3] = "Administradores de ventanas en LINUX.";
 answers[17] = choices[17][3];
 units[17] = "62";
 comments[17] = "Id Pregunta: 1628. Junta Andaluc&iacute;a";


//  Id pregunta: 1744 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  Indique cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al software libre";
 choices[18]= new Array();
 choices[18][0] = "El kernel de linux es estable a pesar de sus continuas modificaciones";
 choices[18][1] = "El software libre es apto para usuarios no t&eacute;cnicos";
 choices[18][2] = "El SL puede funcionar con software propietario (interoperable)";
 choices[18][3] = "El software libre carece en la actualidad de un soporte adecuado";
 answers[18] = choices[18][3];
 units[18] = "61";
 comments[18] = "Id Pregunta: 1744. ";


//  Id pregunta: 1765 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;C&oacute;mo se denominan en Java EE los componentes de negocio en el entorno servidor?";
 choices[19]= new Array();
 choices[19][0] = "Applet.";
 choices[19][1] = "EJB.";
 choices[19][2] = "DCOM+.";
 choices[19][3] = "JSP.";
 answers[19] = choices[19][1];
 units[19] = "60,116";
 comments[19] = "Id Pregunta: 1765. JCED - Preparatic XVII";


//  Id pregunta: 1940 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  En referencia al lenguaje XML, &iquest;cu&aacute;l de las siguientes opciones es la correcta?";
 choices[20]= new Array();
 choices[20][0] = "Las hojas de estilo CSS no pueden ser utilizadas con HTML";
 choices[20][1] = "XSL puede usarse para transformar datos XML a documentos HTML/CSS en un servidor Web";
 choices[20][2] = "CSS puede ejecutar cualquier l&oacute;gica basada en los datos";
 choices[20][3] = "CSS y XSL no pueden usarse en paralelo";
 answers[20] = choices[20][1];
 units[20] = "69";
 comments[20] = "Id Pregunta: 1940. ";


//  Id pregunta: 1994 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  El estudio de Viabilidad del Sistema:";
 choices[21]= new Array();
 choices[21][0] = "Es una parte del ciclo de vida, y como tal est&aacute; comtemplado en la metodolog&iacute;a METRICA V3";
 choices[21][1] = "No est&aacute; contemplado en la METRICA, pues esta es solo una metodolog&iacute;a de desarrollo";
 choices[21][2] = "No es necesaria si se emplean t&eacute;cnicas orientadas a objetos";
 choices[21][3] = "No es necesaria si el desarrollo del sistema viene motivado por una orden superior.";
 answers[21] = choices[21][0];
 units[21] = "86";
 comments[21] = "Id Pregunta: 1994. Pregunta TIC-B 2004";


//  Id pregunta: 1998 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  En cuanto a los sistemas f&iacute;sicos, en un plan de sistemas se valorar&aacute;:";
 choices[22]= new Array();
 choices[22][0] = "Coherencia con la estructura de la organizaci&oacute;n";
 choices[22][1] = "Coherencia con el modelo de estructura inform&aacute;tica";
 choices[22][2] = "Condicionamientos financieros";
 choices[22][3] = "Todas las opciones anteriores son ciertas";
 answers[22] = choices[22][3];
 units[22] = "77";
 comments[22] = "Id Pregunta: 1998. ";


//  Id pregunta: 2072 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de estos elementos no forma parte de EFQM?";
 choices[23]= new Array();
 choices[23][0] = "Liderazgo";
 choices[23][1] = "Resultados Empresariales";
 choices[23][2] = "Pol&iacute;ticas y estrategias";
 choices[23][3] = "Valor de las acciones";
 answers[23] = choices[23][3];
 units[23] = "92";
 comments[23] = "Id Pregunta: 2072. ";


//  Id pregunta: 2122 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Estudio de Viabilidad del Sistema&rsquo;?:";
 choices[24]= new Array();
 choices[24][0] = "Estudio de la situaci&oacute;n actual";
 choices[24][1] = "Definici&oacute;n de requisitos del sistema ";
 choices[24][2] = "Estudio de alternativas de soluci&oacute;n";
 choices[24][3] = "Todas las anteriores";
 answers[24] = choices[24][3];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2122. ";


//  Id pregunta: 2165 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indique cu&aacute;l de las respuestas no forma parte de la documentaci&oacute;n t&eacute;cnica de un sistema de informaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Relaci&oacute;n condiciones de error-acciones";
 choices[25][1] = "Descripciones narrativas de los m&oacute;dulos de los programas";
 choices[25][2] = "Listados del c&oacute;digo objeto";
 choices[25][3] = "Procedimientos de backup-recovery";
 answers[25] = choices[25][2];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2165. ";


//  Id pregunta: 2237 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Benchmarking es un concepto que indica:";
 choices[26]= new Array();
 choices[26][0] = "un mecanismo para determinar reducciones de recursos";
 choices[26][1] = "un sin&oacute;nimo de auditor&iacute;a";
 choices[26][2] = "un proceso sistem&aacute;tico y continuo para evaluar los productos, servicios y trabajos de las organizaciones que son reconocidas como representantes de las mejores pr&aacute;cticas, con el prop&oacute;sito de realizar mejoras organizacionales";
 choices[26][3] = "un programa inform&aacute;tico que al instalarse tiene como misi&oacute;n la optimizaci&oacute;n de la eficiencia de los sistemas a los que afecte su configuraci&oacute;n, tanto a nivel de espacio de disco como a nivel de rendimiento";
 answers[26] = choices[26][2];
 units[26] = "92";
 comments[26] = "Id Pregunta: 2237. ";


//  Id pregunta: 2352 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  En una planificaci&oacute;n de un proyecto, una situaci&oacute;n que se da normalmente es que:";
 choices[27]= new Array();
 choices[27][0] = "Al inicio del proyecto se consuman m&aacute;s recursos que al final";
 choices[27][1] = "Al principio los recursos precisos van creciendo y al final decreciendo";
 choices[27][2] = "Al final del proyecto se consumen m&aacute;s recursos que en toda su vida anterior";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][1];
 units[27] = "77";
 comments[27] = "Id Pregunta: 2352. ";


//  Id pregunta: 2358 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  Entre las nuevas tecnolog&iacute;as incorporadas a la Versi&oacute;n 3 de la metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA del Consejo Superior de Administraci&oacute;n Electr&oacute;nica, respecto de su versi&oacute;n anterior, tenemos:";
 choices[28]= new Array();
 choices[28][0] = "Orientaci&oacute;n a objetos";
 choices[28][1] = "Entorno cliente/servidor";
 choices[28][2] = "Reutilizaci&oacute;n de m&oacute;dulos - componentes (tambi&eacute;n denominados productos) y bases de datos";
 choices[28][3] = "Todas las respuestas anteriores son correctas";
 answers[28] = choices[28][3];
 units[28] = "86";
 comments[28] = "Id Pregunta: 2358. ";


//  Id pregunta: 2403 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  La norma ISO 9000-3:";
 choices[29]= new Array();
 choices[29][0] = "Establece el certificado de conformidad del producto";
 choices[29][1] = "Asegura la calidad del certificado";
 choices[29][2] = "Es la especificaci&oacute;n de la ISO 9000 para sistemas y tecnolog&iacute;as de la informaci&oacute;n";
 choices[29][3] = "Certifica las auditor&iacute;as realizadas";
 answers[29] = choices[29][2];
 units[29] = "87";
 comments[29] = "Id Pregunta: 2403. ";


//  Id pregunta: 2479 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Por sistema de garant&iacute;a de calidad se entiende:";
 choices[30]= new Array();
 choices[30][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[30][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[30][2] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 choices[30][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior";
 answers[30] = choices[30][2];
 units[30] = "87";
 comments[30] = "Id Pregunta: 2479. ";


//  Id pregunta: 2516 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Utilizando la funcionalidad como criterio principal, las herramientas CASE pueden agruparse en: Herramientas de planificaci&oacute;n de sistemas, Herramientas de an&aacute;lisis y dise&ntilde;o, Herramientas de programaci&oacute;n, Herramientas de integraci&oacute;n y prueba, y Herramientas:";
 choices[31]= new Array();
 choices[31][0] = "Herramientas de mantenimiento";
 choices[31][1] = "Herramientas de gesti&oacute;n de prototipos";
 choices[31][2] = "Herramientas de integraci&oacute;n y prueba";
 choices[31][3] = "Herramientas de programaci&oacute;n";
 answers[31] = choices[31][0];
 units[31] = "86";
 comments[31] = "Id Pregunta: 2516. ";


//  Id pregunta: 2638 Año de creación de pregunta: 2003-01-01
 questions[32]= "33)  El UML ( Unified modeling Language) es un lenguaje que permite modelar construir y documentar los elementos que forman un sistema SW orientado a objetos. Indicar cu&aacute;l entre los siguientes no corresponde a un modelo usado en UML ";
 choices[32]= new Array();
 choices[32][0] = "Diagrama de estructura din&aacute;mica";
 choices[32][1] = "Diagrama de Casos de Uso";
 choices[32][2] = "Diagrama de Secuencia";
 choices[32][3] = "Diagrama de colaboraci&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2638. ";


//  Id pregunta: 2892 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  La soluci&oacute;n adoptada para la implantaci&oacute;n del servicio de correo electr&oacute;nico dentro del proyecto de la Intranet Administrativa se basa en:";
 choices[33]= new Array();
 choices[33][0] = "Correo SMTP , migrando las entidades que utilicen X.400  a SMTP";
 choices[33][1] = "Correo X.400, migrando las entidades que utilicen SMTP a X.400";
 choices[33][2] = "Correo SMTP con incorporaci&oacute;n de pasarelas X.400-SMTP";
 choices[33][3] = "No se ha adoptado ninguna soluci&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "113,44";
 comments[33] = "Id Pregunta: 2892. ";


//  Id pregunta: 2935 Año de creación de pregunta: 2004-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[34]= new Array();
 choices[34][0] = "1000BaseT";
 choices[34][1] = "1000BaseSX";
 choices[34][2] = "1000BaseLx";
 choices[34][3] = "1000BaseCX";
 answers[34] = choices[34][3];
 units[34] = "99";
 comments[34] = "Id Pregunta: 2935. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2999 Año de creación de pregunta: 2004-01-01
 questions[35]= "36)  En 1988, la CCITT cre&oacute; el est&aacute;ndar X.500, sobre servicios de directorio que, posteriormente, fue adoptado por la ISO. El est&aacute;ndar X.500 organiza las entradas en el directorio de manera:";
 choices[35]= new Array();
 choices[35][0] = "Asociativa";
 choices[35][1] = "Jer&aacute;rquica";
 choices[35][2] = "En estrella";
 choices[35][3] = "Como una pila FIFO";
 answers[35] = choices[35][1];
 units[35] = "106";
 comments[35] = "Id Pregunta: 2999. ";


//  Id pregunta: 3017 Año de creación de pregunta: 2004-01-01
 questions[36]= "37)  &iquest;A que se corresponden las siglas DECT?";
 choices[36]= new Array();
 choices[36][0] = "Una red de microondas para uso militar";
 choices[36][1] = "Un sistema de telefonos inhal&aacute;brico";
 choices[36][2] = "Un sistema de telefon&iacute;na movil";
 choices[36][3] = "ninguna de las anteriores";
 answers[36] = choices[36][1];
 units[36] = "108";
 comments[36] = "Id Pregunta: 3017. ";


//  Id pregunta: 3083 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Los sistemas de multiplexaci&oacute;n por divisi&oacute;n en frecuencia, respecto a los por divisi&oacute;n en el tiempo:";
 choices[37]= new Array();
 choices[37][0] = "Tienen problemas de diafon&iacute;a, por lo que se dejan espacios de guarda";
 choices[37][1] = "Utilizan el ancho de banda completo del canal con una duraci&oacute;n fija";
 choices[37][2] = "No utilizan filtros";
 choices[37][3] = "Utilizan antenas de tipo dipolo";
 answers[37] = choices[37][0];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3083. ";


//  Id pregunta: 3152 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto del correo electr&oacute;nico?:";
 choices[38]= new Array();
 choices[38][0] = "Seg&uacute;n MIME los textos se codifican en 7 bits";
 choices[38][1] = "MIME puede encapsular datos EDI";
 choices[38][2] = "SMTP no soporta servicios de seguridad";
 choices[38][3] = "MIME proporciona seguridad";
 answers[38] = choices[38][3];
 units[38] = "106";
 comments[38] = "Id Pregunta: 3152. ";


//  Id pregunta: 3350 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Cuando se emplean tablas en HTML, &iquest;cu&aacute;l es el comando que permite definir nuevas filas de una tabla?:";
 choices[39]= new Array();
 choices[39][0] = "&lt;TD&gt;&hellip;&lt;/TD&gt;";
 choices[39][1] = "&lt;TR&gt;&hellip;&lt;/TR&gt;";
 choices[39][2] = "&lt;TH&gt;&hellip;&lt;/TH&gt;";
 choices[39][3] = "&lt;TF&gt;&hellip;&lt;/TF&gt;";
 answers[39] = choices[39][1];
 units[39] = "69";
 comments[39] = "Id Pregunta: 3350. ";


//  Id pregunta: 3366 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Dentro de las normas X.400, &iquest;a qu&eacute; corresponde el protocolo P2?:";
 choices[40]= new Array();
 choices[40][0] = "Es el protocolo que se establece entre dos agentes de transferencia de mensajes";
 choices[40][1] = "Es el protocolo que se establece entre el agente de usuario y el agente de transferencia de mensajes";
 choices[40][2] = "Es el protocolo que se establece entre dos agentes de usuario";
 choices[40][3] = "Es el protocolo que se establece entre el agente de usuario y el almacen de mensajes";
 answers[40] = choices[40][2];
 units[40] = "106";
 comments[40] = "Id Pregunta: 3366. ";


//  Id pregunta: 3381 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  El m&eacute;todo de Okumura-Hata se usa para:";
 choices[41]= new Array();
 choices[41][0] = "Resoluci&oacute;n de conflictos en negociaciones cuando los contendientes no desean verse en persona";
 choices[41][1] = "Calcular el coste de aplicaci&oacute;n de una u otra estrategia de adquisici&oacute;n de bienes y servicios inform&aacute;ticos y de telecomunicaci&oacute;n";
 choices[41][2] = "C&aacute;lculo de coberturas en enlaces radioel&eacute;ctricos";
 choices[41][3] = "No existe el m&eacute;todo de Okumura-Hata";
 answers[41] = choices[41][2];
 units[41] = "108";
 comments[41] = "Id Pregunta: 3381. ";


//  Id pregunta: 3535 Año de creación de pregunta: 2002-01-01
 questions[42]= "43)  En las t&eacute;cnicas celulares aplicadas a telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l es la geometr&iacute;a m&aacute;s adecuada de una c&eacute;lula en t&eacute;rminos de m&aacute;xima cobertura y m&iacute;nima intereferencia?:";
 choices[42]= new Array();
 choices[42][0] = "La cuadrada";
 choices[42][1] = "La circular";
 choices[42][2] = "La triangular";
 choices[42][3] = "La hexagonal";
 answers[42] = choices[42][3];
 units[42] = "108";
 comments[42] = "Id Pregunta: 3535. ";


//  Id pregunta: 3560 Año de creación de pregunta: 2002-01-01
 questions[43]= "44)  En transmisi&oacute;n de datos, &iquest;qu&eacute; ventaja reporta el uso de c&eacute;lulas peque&ntilde;as de longitud fija?:";
 choices[43]= new Array();
 choices[43][0] = "Utilizaci&oacute;n m&aacute;s eficiente del enlace ya que un dispositivo puede enviar c&eacute;lulas sin necesidad de un slot 'libre' de tiempo";
 choices[43][1] = "Minimizaci&oacute;n de esperas intermitentes que pueden derivarse de la espera para que se transmita un paquete largo";
 choices[43][2] = "Una estaci&oacute;n puede enviar muchas c&eacute;lulas en fila sin tener que esperar para est&eacute; disponible su slot de tiempo";
 choices[43][3] = "Puede usarse un pol&iacute;tica de tr&aacute;fico para comparar el tr&aacute;fico real con el acordado";
 answers[43] = choices[43][1];
 units[43] = "109";
 comments[43] = "Id Pregunta: 3560. ";


//  Id pregunta: 3628 Año de creación de pregunta: 2002-01-01
 questions[44]= "45)  La orden por la que se aprueba el reglamento de desarrollo en lo relativo al uso de dominio p&uacute;blico radioel&eacute;ctrico es:";
 choices[44]= new Array();
 choices[44][0] = "Orden de 10 de marzo de 2000";
 choices[44][1] = "Orden de 10 de marzo de 2001";
 choices[44][2] = "Orden de 10 de marzo de 2002";
 choices[44][3] = "Orden de 9 de marzo de 2000. Derogada por el Real Decreto 863/2008";
 answers[44] = choices[44][3];
 units[44] = "110";
 comments[44] = "Id Pregunta: 3628. ";


//  Id pregunta: 3649 Año de creación de pregunta: 2002-01-01
 questions[45]= "46)  La tecnolog&iacute;a PUSH permite:";
 choices[45]= new Array();
 choices[45][0] = "Proteger la informaci&oacute;n mediante cifrado de la misma";
 choices[45][1] = "Establecer una conexi&oacute;n con un ordenador remoto";
 choices[45][2] = "Encaminar los datagramas a su destino";
 choices[45][3] = "Distribuir informaci&oacute;n en el momento oportuno";
 answers[45] = choices[45][3];
 units[45] = "113";
 comments[45] = "Id Pregunta: 3649. ";


//  Id pregunta: 3665 Año de creación de pregunta: 2002-01-01
 questions[46]= "47)  Un servidor &quot;proxy&quot;:";
 choices[46]= new Array();
 choices[46][0] = "Sirve para traducir direcciones IP";
 choices[46][1] = "Act&uacute;a de intermediario, para acceder a determinados servicios de forma indirecta";
 choices[46][2] = "Permite acceder a cualquier servicio de internet, actuando de intermediario";
 choices[46][3] = "Sirve para realizar pagos on-line";
 answers[46] = choices[46][1];
 units[46] = "111";
 comments[46] = "Id Pregunta: 3665. ";


//  Id pregunta: 3702 Año de creación de pregunta: 2002-01-01
 questions[47]= "48)  Las Infrestructuras Comunes de Telecomunicaciones (ICT) para el acceso a los servicios de telecomunicaciones en el interior de edificios se regulan mediante:";
 choices[47]= new Array();
 choices[47][0] = "Real Decreto 346/2011 del 11 de marzo.";
 choices[47][1] = "Real Decreto 401/2003 del 4 de abril";
 choices[47][2] = "Ordenanzas municipales";
 choices[47][3] = "Reglamentos de las comunidades aut&oacute;nomas";
 answers[47] = choices[47][0];
 units[47] = "110";
 comments[47] = "Id Pregunta: 3702. ";


//  Id pregunta: 3710 Año de creación de pregunta: 2002-01-01
 questions[48]= "49)  Las velocidades de transmisi&oacute;n y de modulaci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Son siempre iguales";
 choices[48][1] = "La de transmisi&oacute;n s&oacute;lo puede ser mayor o igual a la de modulaci&oacute;n";
 choices[48][2] = "La de modulaci&oacute;n s&oacute;lo puede ser mayor o igual que la de transmisi&oacute;n";
 choices[48][3] = "La velocidad de transmisi&oacute;n puede ser mayor, menor o igual que la de modulaci&oacute;n, seg&uacute;n el caso";
 answers[48] = choices[48][1];
 units[48] = "99";
 comments[48] = "Id Pregunta: 3710. *: transmision modulacion";


//  Id pregunta: 3718 Año de creación de pregunta: 2002-01-01
 questions[49]= "50)  Los conceptos de arquitecturas de niveles est&aacute;n especificados en la siguiente norma de la ITU-T:";
 choices[49]= new Array();
 choices[49][0] = "X.400";
 choices[49][1] = "I.200";
 choices[49][2] = "X.500";
 choices[49][3] = "X.200";
 answers[49] = choices[49][3];
 units[49] = "113";
 comments[49] = "Id Pregunta: 3718. ";


//  Id pregunta: 3781 Año de creación de pregunta: 2002-01-01
 questions[50]= "51)  Respecto a  los distintos modos de transmisi&oacute;n en una comunicaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "La telefon&iacute;a convencional es de tipo d&uacute;plex, mientras que la telefon&iacute;a m&oacute;vil es semiduplex";
 choices[50][1] = "La radiofusi&oacute;n de televisi&oacute;n es de tipo semid&uacute;plex, transmite sonido e imagen en la misma portadora";
 choices[50][2] = "La radiofusi&oacute;n de se&ntilde;al musical en frecuencia modulada es un sistema simplex";
 choices[50][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[50] = choices[50][2];
 units[50] = "99";
 comments[50] = "Id Pregunta: 3781. *: transmision modulacion";


//  Id pregunta: 3796 Año de creación de pregunta: 2002-01-01
 questions[51]= "52)  Respecto a WAP, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[51]= new Array();
 choices[51][0] = "Sustituye a GSM";
 choices[51][1] = "Es una evoluci&oacute;n de GPRS";
 choices[51][2] = "Puede implementarse sobre GPRS";
 choices[51][3] = "S&oacute;lo puede implementarse sobre GSM";
 answers[51] = choices[51][2];
 units[51] = "108";
 comments[51] = "Id Pregunta: 3796. ";


//  Id pregunta: 3805 Año de creación de pregunta: 2002-01-01
 questions[52]= "53)  Se entiende por firma electr&oacute;nica avanzada:";
 choices[52]= new Array();
 choices[52][0] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste mantiene bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 choices[52][1] = "Conjunto de datos, en forma electr&oacute;nica, anejos a otros datos electr&oacute;nicos o asociados funcionalmente a ellos, como medio para identificar formalmente al autor del documento que la recoge";
 choices[52][2] = "Certificaci&oacute;n electr&oacute;nica que vincula unos datos de verificaci&oacute;n de firma a un signatario y confirma su identidad";
 choices[52][3] = "Persona f&iacute;sica o jur&iacute;dica que expide certificados, pudiendo prestar adem&aacute;s otros servicios en relaci&oacute;n con la firma electr&oacute;nica";
 answers[52] = choices[52][0];
 units[52] = "111";
 comments[52] = "Id Pregunta: 3805. ";


//  Id pregunta: 3955 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indicar la afirmaci&oacute;n falsa";
 choices[53]= new Array();
 choices[53][0] = "Los Servicios Web son m&aacute;s simples que la arquitectura CORBA";
 choices[53][1] = "Es muy dif&iacute;cil hacer interactuar una plataforma en COMcon otra en CORBA";
 choices[53][2] = "No es posible  que un  objeto CORBA  se  comunique  con un  objeto  JavaRMI,";
 choices[53][3] = "CORBA tiene m&uacute;ltiples implementaciones";
 answers[53] = choices[53][2];
 units[53] = "116";
 comments[53] = "Id Pregunta: 3955. Hubo una pregunta sobre CORBA en el ex&aacute;men de SS del 2003, diferente de &eacute;sta";


//  Id pregunta: 4059 Año de creación de pregunta: 2006-01-01
 questions[54]= "55)  Que tipo de LAN instalarias en un edificio nuevo";
 choices[54]= new Array();
 choices[54][0] = "Usaria cables porque son m&aacute;s seguros y fiables";
 choices[54][1] = "Usaria Wi-Max porque es una tecnologia que me evita tener que instalar cables";
 choices[54][2] = "Usaria Wi-Fi porque me da la misma funcionalidad que los cables pero con una instalaci&oacute;n m&aacute;s r&aacute;pida";
 choices[54][3] = "Cualquiera de las anteriores es valida";
 answers[54] = choices[54][0];
 units[54] = "112";
 comments[54] = "Id Pregunta: 4059. ";


//  Id pregunta: 4113 Año de creación de pregunta: 2006-01-01
 questions[55]= "56)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre NFS:";
 choices[55]= new Array();
 choices[55][0] = "NFS es un sistema de archivos distribuido para un entorno de red de &aacute;rea local.";
 choices[55][1] = "Permite acceder a ficheros remotos como si fueran ficheros del sistema local siempre que se est&eacute; dentro de la misma red de &aacute;rea local.";
 choices[55][2] = "Originalmente fue desarrollado por Sun Microsystems.";
 choices[55][3] = "Todas las anteriores son ciertas.";
 answers[55] = choices[55][3];
 units[55] = "112";
 comments[55] = "Id Pregunta: 4113. ";


//  Id pregunta: 4114 Año de creación de pregunta: 2006-01-01
 questions[56]= "57)  Sobre los buscadores en Internet se&ntilde;ale la respuesta correcta:";
 choices[56]= new Array();
 choices[56][0] = "Los buscadores de &iacute;ndices tem&aacute;ticos son sistemas de b&uacute;squeda que incorporan autom&aacute;ticamente p&aacute;ginas web clasificadas por temas.";
 choices[56][1] = "Los motores de b&uacute;squeda utilizan &ldquo;robots&rdquo; de b&uacute;squeda para incluir las p&aacute;ginas web.";
 choices[56][2] = "a) y b) son falsas";
 choices[56][3] = "a) y b) son verdaderas";
 answers[56] = choices[56][1];
 units[56] = "112";
 comments[56] = "Id Pregunta: 4114. ";


//  Id pregunta: 4207 Año de creación de pregunta: 2006-01-01
 questions[57]= "58)  La fibra &oacute;ptica monomodo m&aacute;s popular es";
 choices[57]= new Array();
 choices[57][0] = "9/125 um";
 choices[57][1] = "62.5/125 um";
 choices[57][2] = "50/125 um";
 choices[57][3] = "100/140 um";
 answers[57] = choices[57][0];
 units[57] = "99";
 comments[57] = "Id Pregunta: 4207. ";


//  Id pregunta: 4214 Año de creación de pregunta: 2006-01-01
 questions[58]= "59)  En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[58]= new Array();
 choices[58][0] = "Java 2 Micro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java";
 choices[58][1] = "Los Java 2 Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java";
 choices[58][2] = "Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http";
 choices[58][3] = "Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet";
 answers[58] = choices[58][2];
 units[58] = "116";
 comments[58] = "Id Pregunta: 4214. ";


//  Id pregunta: 4297 Año de creación de pregunta: 2007-01-01
 questions[59]= "60)  En M&eacute;trica Versi&oacute;n 3, el an&aacute;lisis de los hechos inesperados y an&oacute;malos que se presentan durante la realizaci&oacute;n de las actividades y tareas del proyecto:";
 choices[59]= new Array();
 choices[59][0] = "No est&aacute; contemplado";
 choices[59][1] = "Se realiza en la interfaz de Aseguramiento de la Calidad.";
 choices[59][2] = "Se realiza en la interfaz de Gesti&oacute;n de Configuraci&oacute;n.";
 choices[59][3] = "Se realiza en la interfaz de Gesti&oacute;n de Proyectos.";
 answers[59] = choices[59][3];
 units[59] = "86";
 comments[59] = "Id Pregunta: 4297. ";


//  Id pregunta: 4319 Año de creación de pregunta: 2007-01-01
 questions[60]= "61)  Un sistema de supresi&oacute;n de incendios de &ldquo;tuber&iacute;a seca&rdquo; (dry-pipe) es un sistema que usa:";
 choices[60]= new Array();
 choices[60][0] = "Agua, pero en el cual el agua no entra a las tuber&iacute;as hasta que se haya detectado un incendio.";
 choices[60][1] = "Agua, pero en el cual las tuber&iacute;as est&aacute;n revestidas de selladores especiales a prueba de agua.";
 choices[60][2] = "Di&oacute;xido de carbono en lugar de agua.";
 choices[60][3] = "Halon en lugar de agua.";
 answers[60] = choices[60][0];
 units[60] = "32";
 comments[60] = "Id Pregunta: 4319. ";


//  Id pregunta: 4497 Año de creación de pregunta: 2007-01-01
 questions[61]= "62)  Una caracter&iacute;stica fundamental de XML signature es que:";
 choices[61]= new Array();
 choices[61][0] = " Puede firmar parte o Ia totalidad de un documento XML";
 choices[61][1] = "Puede firmar un documento RTF y convertirlo en un documento XML.";
 choices[61][2] = "Solo puede firmar un documento XML completo.";
 choices[61][3] = "Solo puede firmar documentos RTF.";
 answers[61] = choices[61][0];
 units[61] = "111";
 comments[61] = "Id Pregunta: 4497. ";


//  Id pregunta: 4712 Año de creación de pregunta: 2007-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes no es un t&eacute;rmino sobre Internet?";
 choices[62]= new Array();
 choices[62][0] = "Cookies.";
 choices[62][1] = "Spam.";
 choices[62][2] = "Netnannies.";
 choices[62][3] = "Brownies.";
 answers[62] = choices[62][3];
 units[62] = "112";
 comments[62] = "Id Pregunta: 4712. Examen 2006 JCYL";


//  Id pregunta: 4905 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  El formato de compresi&oacute;n de video DivX est&aacute; basado en:";
 choices[63]= new Array();
 choices[63][0] = "Apple QuickTime.";
 choices[63][1] = "HDMI/Blu-Ray.";
 choices[63][2] = "MPEG-4 parte 2.";
 choices[63][3] = "MP3 eXtended Revision.";
 answers[63] = choices[63][2];
 units[63] = "114";
 comments[63] = "Id Pregunta: 4905. Examen TIC B 2007";


//  Id pregunta: 5036 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&quot;Secure Socket Layer&quot;) es correcta?:";
 choices[64]= new Array();
 choices[64][0] = "S&oacute;lo proporciona servicios de seguridad para el protocolo HTTP (&quot;HyperText Transfer Protocol&quot;)";
 choices[64][1] = "Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir";
 choices[64][2] = "El protocolo se implementa entre los niveles de Transporte y de Red";
 choices[64][3] = "Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n";
 answers[64] = choices[64][3];
 units[64] = "111";
 comments[64] = "Id Pregunta: 5036. Examen TIC A 2007";


//  Id pregunta: 5171 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  Las VPN's utilizan mecanismos basados en t&uacute;neles para:";
 choices[65]= new Array();
 choices[65][0] = "Habilitar la navegaci&oacute;n por Internet.";
 choices[65][1] = "Encapsular paquetes de un protocolo dentro de otros paquetes pudiendo acomodar as&iacute; protocolos incompatibles.";
 choices[65][2] = "Efectuar una tarificaci&oacute;n a la corporaci&oacute;n que habilita acceso VPN";
 choices[65][3] = "Deshabilitar la seguridad del acceso VPN una vez autenticado el cliente VPN.";
 answers[65] = choices[65][1];
 units[65] = "111";
 comments[65] = "Id Pregunta: 5171. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5217 Año de creación de pregunta: 2007-01-01
 questions[66]= "67)  En qu&eacute; actividad de proceso An&aacute;lisis del Sistema de Informaci&oacute;n participan los &quot;Usuarios expertos&quot;";
 choices[66]= new Array();
 choices[66][0] = "Elaboraci&oacute;n del modelo de procesos";
 choices[66][1] = "Elaboraci&oacute;n del modelo de datos";
 choices[66][2] = "An&aacute;lisis de los casos de uso";
 choices[66][3] = "Definici&oacute;n del sistema";
 answers[66] = choices[66][1];
 units[66] = "86";
 comments[66] = "Id Pregunta: 5217. ";


//  Id pregunta: 5467 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  Cuando analizar&iacute;amos los recursos de la organizaci&oacute;n";
 choices[67]= new Array();
 choices[67][0] = "Cuando ejecutemos un desarrollo, para determinar el costo";
 choices[67][1] = "Al valorar los recursos que se han consumido";
 choices[67][2] = "Para ver la forma de materializar un desarrollo";
 choices[67][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica";
 answers[67] = choices[67][3];
 units[67] = "77";
 comments[67] = "Id Pregunta: 5467. Castilla y Le&oacute;n";


//  Id pregunta: 5636 Año de creación de pregunta: 2003-01-01
 questions[68]= "69)  Una soluci&oacute;n RAID 5 necesita como m&iacute;nimo:";
 choices[68]= new Array();
 choices[68][0] = "Dos discos";
 choices[68][1] = "Tres discos";
 choices[68][2] = "Un disco";
 choices[68][3] = "Cuatro discos";
 answers[68] = choices[68][1];
 units[68] = "48";
 comments[68] = "Id Pregunta: 5636. ";


//  Id pregunta: 5722 Año de creación de pregunta: 2009-01-01
 questions[69]= "70)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[69]= new Array();
 choices[69][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros.";
 choices[69][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee.";
 choices[69][2] = "Los datos van formados mediante etiquetas de lo que significan.";
 choices[69][3] = "Si las reglas sint&aacute;cticas del DTD se cumplen, el documento es v&aacute;lido.";
 answers[69] = choices[69][1];
 units[69] = "69";
 comments[69] = "Id Pregunta: 5722. MAP 2008 A2";


//  Id pregunta: 5876 Año de creación de pregunta: 2009-01-01
 questions[70]= "71)  &iquest;Qu&eacute; es Atom?";
 choices[70]= new Array();
 choices[70][0] = "Sistema de an&aacute;lisis XML";
 choices[70][1] = "Tecnolog&iacute;a de sindicaci&oacute;n de contenidos";
 choices[70][2] = "Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[70][3] = "Sintaxis de una DTD";
 answers[70] = choices[70][1];
 units[70] = "69";
 comments[70] = "Id Pregunta: 5876. MAP 2008 A1";


//  Id pregunta: 5883 Año de creación de pregunta: 2009-01-01
 questions[71]= "72)  &iquest;Qu&eacute; es WebDAV?";
 choices[71]= new Array();
 choices[71][0] = "Protocolo de acceso y edici&oacute;n de carpetas mediante HTTP";
 choices[71][1] = "Sistema web de creaci&oacute;n de formularios";
 choices[71][2] = "Sistema web seguro de compartici&oacute;n de procesamiento";
 choices[71][3] = "Sistema web de mensajer&iacute;a y alertas";
 answers[71] = choices[71][0];
 units[71] = "73";
 comments[71] = "Id Pregunta: 5883. MAP 2008 A1";


//  Id pregunta: 6043 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  El proyecto Fidelity, de gesti&oacute;n de identidad federado en &aacute;mbito europeo, est&aacute; basado en est&aacute;ndares de:";
 choices[72]= new Array();
 choices[72][0] = "W3C";
 choices[72][1] = "IEEE";
 choices[72][2] = "CEN";
 choices[72][3] = "Liberty Alliance";
 answers[72] = choices[72][3];
 units[72] = "118";
 comments[72] = "Id Pregunta: 6043. ";


//  Id pregunta: 6046 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  En el &aacute;mbito del Single Sign-On, &iquest;c&oacute;mo se denomina a la informaci&oacute;n confidencial agrupada (nombre de usuario, contrase&ntilde;a, etc) que se precisa para acceder a las aplicaciones?";
 choices[73]= new Array();
 choices[73][0] = "Credenciales";
 choices[73][1] = "Federaci&oacute;n";
 choices[73][2] = "Cookies";
 choices[73][3] = "Login";
 answers[73] = choices[73][0];
 units[73] = "118";
 comments[73] = "Id Pregunta: 6046. ";


//  Id pregunta: 6073 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  En relaci&oacute;n con la TDT (Televisi&oacute;n Digital Terrestre), &iquest;como se denominan a las especificaciones t&eacute;cnicas aprobadas a nivel europeo para la emisi&oacute;n de TDT?";
 choices[74]= new Array();
 choices[74][0] = "TDT est&aacute;ndar";
 choices[74][1] = "DVB &ndash; T";
 choices[74][2] = "DVB - TDT";
 choices[74][3] = "Ninguna de las anteriores es correcta";
 answers[74] = choices[74][1];
 units[74] = "105";
 comments[74] = "Id Pregunta: 6073. ";


//  Id pregunta: 6190 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, la interoperabilidad se entender&aacute; contemplando las dimensiones";
 choices[75]= new Array();
 choices[75][0] = "T&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[75][1] = "T&eacute;cnica, sem&aacute;ntica y funcional";
 choices[75][2] = "Funcional, sem&aacute;ntica y organizativa";
 choices[75][3] = "T&eacute;cnica, funcional y organizativa";
 answers[75] = choices[75][0];
 units[75] = "43";
 comments[75] = "Id Pregunta: 6190. Art&iacute;culo 6";


//  Id pregunta: 6191 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas no est&aacute;n contempladas en el Esquema Nacional de Interoperabilidad?";
 choices[76]= new Array();
 choices[76][0] = "Digitalizaci&oacute;n de documentos";
 choices[76][1] = "Pol&iacute;tica de gesti&oacute;n de documentos";
 choices[76][2] = "Copiado aut&eacute;ntico y conversi&oacute;n de documentos";
 choices[76][3] = "Destrucci&oacute;n de documentos en soporte papel";
 answers[76] = choices[76][3];
 units[76] = "43";
 comments[76] = "Id Pregunta: 6191. Disposici&oacute;n adicional primera";


//  Id pregunta: 6199 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  De acuerdo con M&eacute;trica v3, en la actividad &quot;Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n&quot; del Mantenimiento de Sistemas de Informaci&oacute;n:";
 choices[77]= new Array();
 choices[77][0] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de realizar las pruebas de regresi&oacute;n";
 choices[77][1] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de comenzar el cambio en desarrollo";
 choices[77][2] = "La aprobaci&oacute;n de la petici&oacute;n se realiza al finalizar las pruebas de regresi&oacute;n y despu&eacute;s de comprobar que todo lo que ha sido modificado, o puede verse afectado por el cambio, funciona correctamente";
 choices[77][3] = "La aprobaci&oacute;n de la petici&oacute;n no es necesaria si se ha comprobado que s&oacute;lo se han modificado los elementos que se ven afectados por el cambio y que se han realizado las pruebas de integraci&oacute;n y del sistema";
 answers[77] = choices[77][2];
 units[77] = "86";
 comments[77] = "Id Pregunta: 6199. TIC-B 2009, bloque desarrollo";


//  Id pregunta: 6372 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  En relaci&oacute;n a lo dispuesto en el Esquema Nacional de Seguridad, un sistema de informaci&oacute;n ser&aacute; de categor&iacute;a MEDIA cuando:";
 choices[78]= new Array();
 choices[78][0] = "Las dimensiones de seguridad definidas como cr&iacute;ticas son, en su mayor&iacute;a, de nivel MEDIO.";
 choices[78][1] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna es de nivel inferior.";
 choices[78][2] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna alcanza un nivel superior.";
 choices[78][3] = "Las dimensiones de seguridad son, en su mayor&iacute;a, de nivel MEDIO.";
 answers[78] = choices[78][2];
 units[78] = "43";
 comments[78] = "Id Pregunta: 6372. Anexo I ENS";


//  Id pregunta: 6429 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes es un servidor de aplicaciones de software libre?";
 choices[79]= new Array();
 choices[79][0] = "Websphere";
 choices[79][1] = "WebLogic";
 choices[79][2] = "GlassFish";
 choices[79][3] = "Synaptic";
 answers[79] = choices[79][2];
 units[79] = "62";
 comments[79] = "Id Pregunta: 6429. ";


//  Id pregunta: 6534 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  El modelo EFQM de excelencia ";
 choices[80]= new Array();
 choices[80][0] = "Es un modelo din&aacute;mico";
 choices[80][1] = "Sigue el esquema l&oacute;gico REDER (RADAR en ingl&eacute;s)";
 choices[80][2] = "Tiene un car&aacute;cter globalizador que cubre todos los aspectos del funcionamiento de una organizaci&oacute;n";
 choices[80][3] = "Todas las respuestas anteriores son correctas";
 answers[80] = choices[80][3];
 units[80] = "92";
 comments[80] = "Id Pregunta: 6534. ";


//  Id pregunta: 6544 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  La informaci&oacute;n puede obtenerse a trav&eacute;s de se&ntilde;ales el&eacute;ctricas en las ondas. Una forma de combatirlo es a trav&eacute;s de";
 choices[81]= new Array();
 choices[81][0] = "Tempest";
 choices[81][1] = "Ruido Blanco";
 choices[81][2] = "Zonas de control";
 choices[81][3] = "Todas las respuestas anteriores son correctas";
 answers[81] = choices[81][3];
 units[81] = "111";
 comments[81] = "Id Pregunta: 6544. ";


//  Id pregunta: 6619 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  Seg&uacute;n M&eacute;trica la Definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales:";
 choices[82]= new Array();
 choices[82][0] = "Se realiza en el proceso de An&aacute;lisis (ASI), conjuntamente con el Plan de Pruebas";
 choices[82][1] = "Se realiza en el proceso de Dise&ntilde;o (DSI), cuando se establecen los Requisitos de Implantaci&oacute;n";
 choices[82][2] = "Se realiza en el proceso de Construcci&oacute;n (CSI), en paralelo a la ejecuci&oacute;n de las Pruebas del Sistema";
 choices[82][3] = "Se realiza en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n (IAS), antes de las Pruebas de Aceptaci&oacute;n";
 answers[82] = choices[82][2];
 units[82] = "86";
 comments[82] = "Id Pregunta: 6619. ";


//  Id pregunta: 7269 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  El Centro Criptol&oacute;gico Nacional (CCN) es el organismo responsable de velar por la seguridad de las TIC en las administraciones p&uacute;blicas, y de formar en este campo a sus profesionales. El CCN depende de:";
 choices[83]= new Array();
 choices[83][0] = "El Consejo Superior para la Administraci&oacute;n Electr&oacute;nica (Ministerio de la Presidencia)";
 choices[83][1] = "La F&aacute;brica Nacional de Moneda y Timbre (Ministerio de Econom&iacute;a y Hacienda)";
 choices[83][2] = "La Direcci&oacute;n General de la Polic&iacute;a y la Guardia Civil (Ministerio del Interior)";
 choices[83][3] = "El Centro Nacional de Inteligencia (Ministerio de Defensa)";
 answers[83] = choices[83][3];
 units[83] = "111";
 comments[83] = "Id Pregunta: 7269. Examen TIC B 2009";


//  Id pregunta: 8294 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Un socket necesita, para estar correctamente definido, especificar el protocolo de nivel de: ";
 choices[84]= new Array();
 choices[84][0] = "Enlace.";
 choices[84][1] = "Red.";
 choices[84][2] = "Transporte.";
 choices[84][3] = "Aplicaci&oacute;n.";
 answers[84] = choices[84][2];
 units[84] = "111";
 comments[84] = "Id Pregunta: 8294. Examen TIC A2 2010";


//  Id pregunta: 8317 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como generaci&oacute;n 3.75 (3.75 G) es: ";
 choices[85]= new Array();
 choices[85][0] = "GPRS. ";
 choices[85][1] = "HSDPA. ";
 choices[85][2] = "HSUPA. ";
 choices[85][3] = "UMTS. ";
 answers[85] = choices[85][2];
 units[85] = "108";
 comments[85] = "Id Pregunta: 8317. Examen TIC A2 2010";


//  Id pregunta: 8378 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  La longitud de onda alrededor de la cual un medio de transmisi&oacute;n basado en fibra &oacute;ptica se dice que est&aacute; trabajando en 3&ordf; ventana es: ";
 choices[86]= new Array();
 choices[86][0] = "750 nm.";
 choices[86][1] = "820 nm.";
 choices[86][2] = "1310 nm.";
 choices[86][3] = "1550 nm.";
 answers[86] = choices[86][3];
 units[86] = "99";
 comments[86] = "Id Pregunta: 8378. Examen TIC A2 2010";


//  Id pregunta: 8466 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Las fibras monomodo:";
 choices[87]= new Array();
 choices[87][0] = "Se emplean normalmente en enlaces de de telecomunicaci&oacute;n de distancias largas";
 choices[87][1] = "Presentan la superficie de separaci&oacute;n entre el n&uacute;cleo y el revestimiento, claramente definida y diferenciada dando lugar a que los rayos luminosos se reflejen hacia el n&uacute;cleo formando diversos &aacute;ngulos";
 choices[87][2] = "Se caracterizan por una velocidad de flujo reducida";
 choices[87][3] = "Su instalaci&oacute;n es m&aacute;s sencilla que las multimodo";
 answers[87] = choices[87][0];
 units[87] = "99";
 comments[87] = "Id Pregunta: 8466. Analista Ayto. Madrid 2010";


//  Id pregunta: 8547 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[88]= new Array();
 choices[88][0] = "Al servidor DNS principal";
 choices[88][1] = "Al servidor de correo asociado al dominio";
 choices[88][2] = "Al servidor seguro asociado al dominio";
 choices[88][3] = "Ninguna de las anteriores es correcta";
 answers[88] = choices[88][1];
 units[88] = "106";
 comments[88] = "Id Pregunta: 8547. Analista Ayto. Madrid 2010";


//  Id pregunta: 8636 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  El proceso de desarrollo de M&eacute;trica v3 contiene todas las actividades y tareas que se deben llevar a cabo para:";
 choices[89]= new Array();
 choices[89][0] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta la instalaci&oacute;n del software.";
 choices[89][1] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis del sistema hasta la construcci&oacute;n del software.";
 choices[89][2] = "Desarrollar un sistema, cubriendo desde el dise&ntilde;o hasta la construcci&oacute;n del software.";
 choices[89][3] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta el mantenimiento del software.";
 answers[89] = choices[89][0];
 units[89] = "86";
 comments[89] = "Id Pregunta: 8636. Examen TIC A2 2010 interna";


//  Id pregunta: 8649 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Seg&uacute;n M&eacute;trica v3. &iquest;cu&aacute;l de las siguientes listas esta correctamente ordenada de mayor a menor acoplamiento?";
 choices[90]= new Array();
 choices[90][0] = "De contenido, com&uacute;n, de control, externo, de datos.";
 choices[90][1] = "De datos, de marca, externo, de control, com&uacute;n, de contenido";
 choices[90][2] = "De datos, de marca, de control, externo, com&uacute;n, de contenido";
 choices[90][3] = "De contenido, com&uacute;n, externo, de marca, de datos";
 answers[90] = choices[90][3];
 units[90] = "86";
 comments[90] = "Id Pregunta: 8649. Examen TIC A2 2010 interna";


//  Id pregunta: 8772 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  El protocolo PXE utiliza los siguientes protocolos:";
 choices[91]= new Array();
 choices[91][0] = "BOOTP/DHCP, FTP y TCP/IP.";
 choices[91][1] = "TFTP, TCP/IP y direccionamiento est&aacute;tico en los clientes.";
 choices[91][2] = "TCP/IP, BOOTP/DHCP y TFTP.";
 choices[91][3] = "Ninguna de las anteriores.";
 answers[91] = choices[91][2];
 units[91] = "100";
 comments[91] = "Id Pregunta: 8772. Examen UPM A2 2011";


//  Id pregunta: 8876 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  Respecto a AJAX es falso que:";
 choices[92]= new Array();
 choices[92][0] = "Reduce el volumen de informaci&oacute;n a intercambiar entre el cliente y el servidor frente al empleo del refresco de p&aacute;gina completa.";
 choices[92][1] = "No se puede emplear para desarrollar aplicaciones RIA.";
 choices[92][2] = "Existen m&uacute;ltiples liber&iacute;as para simplificar el desarrollo con AJAX.";
 choices[92][3] = "Son las siglas de Asynchronous JavaScript And XML.";
 answers[92] = choices[92][1];
 units[92] = "114";
 comments[92] = "Id Pregunta: 8876. Examen UPM A2 2011";


//  Id pregunta: 8932 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes leyes aplica en las relaciones de los ciudadanos con el Ministerio de Justicia?";
 choices[93]= new Array();
 choices[93][0] = "Ley 18/2011";
 choices[93][1] = "Ley 11/2007";
 choices[93][2] = "Las dos anteriores";
 choices[93][3] = "Ninguna de las anteriores";
 answers[93] = choices[93][1];
 units[93] = "43";
 comments[93] = "Id Pregunta: 8932. ";


//  Id pregunta: 8965 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Aquel est&aacute;ndar de la W3C de XMLDSig cuya XMLSignature se encuentra envolviendo el documento firmado es:";
 choices[94]= new Array();
 choices[94][0] = "Enveloped";
 choices[94][1] = "Detached";
 choices[94][2] = "Enveloping";
 choices[94][3] = "Todos los documentos firmados con XMLDSig est&aacute;n envueltos por la XMLDSig";
 answers[94] = choices[94][2];
 units[94] = "73";
 comments[94] = "Id Pregunta: 8965. ";


//  Id pregunta: 9033 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  Cu&aacute;l es un gestor de contenidos";
 choices[95]= new Array();
 choices[95][0] = "Microsoft Sharepoint";
 choices[95][1] = "Apache";
 choices[95][2] = "TopLink";
 choices[95][3] = "Microsoft Biztalk";
 answers[95] = choices[95][0];
 units[95] = "95";
 comments[95] = "Id Pregunta: 9033. ";


//  Id pregunta: 9091 Año de creación de pregunta: 2013-01-01
 questions[96]= "97)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[96]= new Array();
 choices[96][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[96][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[96][2] = "Si, en todos los casos";
 choices[96][3] = "Todas las anteriores son falsas";
 answers[96] = choices[96][2];
 units[96] = "36";
 comments[96] = "Id Pregunta: 9091. ";


//  Id pregunta: 9095 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[97]= new Array();
 choices[97][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[97][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[97][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[97][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[97] = choices[97][1];
 units[97] = "36";
 comments[97] = "Id Pregunta: 9095. ";


//  Id pregunta: 9098 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  El lenguaje de expresi&oacute;n de derechos REL se basa en contenedores de grants. Indica cual de los siguientes elementos no forma parte de un grant.";
 choices[98]= new Array();
 choices[98][0] = "Principal.";
 choices[98][1] = "Right.";
 choices[98][2] = "Resource.";
 choices[98][3] = "Constraints.";
 answers[98] = choices[98][3];
 units[98] = "37";
 comments[98] = "Id Pregunta: 9098. ";


//  Id pregunta: 9592 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  El c&oacute;mputo de plazos, imputables tanto a los interesados como a las Administraciones P&uacute;blicas, seg&uacute;n se establece en el art&iacute;culo 26 de la Ley 11/2007 se fija por:";
 choices[99]= new Array();
 choices[99][0] = "La fecha y hora oficial de la sede electr&oacute;nica de los servicios centrales, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[99][1] = "La fecha y hora oficial de la sede electr&oacute;nica de acceso, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[99][2] = "La fecha y hora oficial del Real Instituto y Observatorio de la Armada, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible.";
 choices[99][3] = "La fecha y hora oficial de la sede electr&oacute;nica del Ministerio de Pol&iacute;tica Territorial y Administraci&oacute;n P&uacute;blica, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 answers[99] = choices[99][1];
 units[99] = "43";
 comments[99] = "Id Pregunta: 9592. Examen TIC A2 2011 interna";


