/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 20 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;les de los siguientes son objetivos importantes que persigue la pol&iacute;tica comunitaria en materia de normalizaci&oacute;n?:";
 choices[0]= new Array();
 choices[0][0] = "Crear un entorno competitivo y defender y proteger la inversi&oacute;n de los usuarios en las tecnolog&iacute;as de la informaci&oacute;n";
 choices[0][1] = "Crear un entorno de trabajo uniforme y normalizado en todas las administraciones europeas y conseguir la plena movilidad de funcionarios a trav&eacute;s de las distintas instituciones de toda la UE";
 choices[0][2] = "Suprimir las barreras de comercio en el sector de tecnolog&iacute;as de informaci&oacute;n en el mercado &uacute;nico con vistas a proteger la industria europea de la materia";
 choices[0][3] = "Las respuestas a) y b) en conjunto";
 answers[0] = choices[0][3];
 units[0] = "40";
 comments[0] = "Id Pregunta: 20. ";


//  Id pregunta: 37 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a habitual para la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "La proyecci&oacute;n lineal";
 choices[1][1] = "La teor&iacute;a de colas";
 choices[1][2] = "Los benchmarks";
 choices[1][3] = "Teor&iacute;a de redes";
 answers[1] = choices[1][3];
 units[1] = "25";
 comments[1] = "Id Pregunta: 37. planificaci&oacute;n de la capacidad de los sistemas";


//  Id pregunta: 117 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Dentro de la estructura administrativa de normalizaci&oacute;n comunitaria, el organismo responsable para las telecomunicaciones es:";
 choices[2]= new Array();
 choices[2][0] = "CEN";
 choices[2][1] = "CENELEC";
 choices[2][2] = "ETSI";
 choices[2][3] = "ECMA";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 117. ";


//  Id pregunta: 248 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En una organizaci&oacute;n de tipo perro vigilante:";
 choices[3]= new Array();
 choices[3][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[3][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[3][2] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 choices[3][3] = "El HW, el desarrollo y las decisiones se descentralizan";
 answers[3] = choices[3][1];
 units[3] = "22";
 comments[3] = "Id Pregunta: 248. ";


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


//  Id pregunta: 328 Año de creación de pregunta: 2009-01-01
 questions[5]= "6)  Los ficheros con datos de car&aacute;cter personal de &aacute;mbito departamental, usualmente soportados por herramientas ofim&aacute;ticas de usuario final:";
 choices[5]= new Array();
 choices[5][0] = "Precisan ser declarados por el organismo pero no inscritos en el registro de ficheros de la agencia de protecci&oacute;n de datos.";
 choices[5][1] = "No precisan ser declarados pero s&iacute; ser inscritos en el registro de la agencia de protecci&oacute;n de datos.";
 choices[5][2] = "Se caracterizan como de nivel b&aacute;sico en el RD 1720/2007 por las plataformas en las que se soportan.";
 choices[5][3] = "Se tratan a todos los efectos como el resto de ficheros de datos de car&aacute;cter personal con las consideraciones introducidas por el RD 1720/2007.";
 answers[5] = choices[5][3];
 units[5] = "29";
 comments[5] = "Id Pregunta: 328. ";


//  Id pregunta: 458 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Si se desea una estructura organizacional caracterizada por su orientaci&oacute;n a los usuarios se establecer&aacute; una organizaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Funcional";
 choices[6][1] = "Proyecto-staff";
 choices[6][2] = "Proyecto-funcional";
 choices[6][3] = "Por aplicaciones";
 answers[6] = choices[6][3];
 units[6] = "26";
 comments[6] = "Id Pregunta: 458. ";


//  Id pregunta: 565 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  A qui&eacute;n se debe la &quot;Teor&iacute;a de Recursos y Capacidades&quot;";
 choices[7]= new Array();
 choices[7][0] = "Laurence Prusak";
 choices[7][1] = "Peter Drucker";
 choices[7][2] = "Davenport";
 choices[7][3] = "Ninguno de los anteriores";
 answers[7] = choices[7][3];
 units[7] = "22";
 comments[7] = "Id Pregunta: 565. ";


//  Id pregunta: 895 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;En qu&eacute; conjunto de caracteres est&aacute; basado XML?:";
 choices[8]= new Array();
 choices[8][0] = "Unicode";
 choices[8][1] = "ITU 396-4";
 choices[8][2] = "ANSI 328";
 choices[8][3] = "Ninguno de los anteriores";
 answers[8] = choices[8][0];
 units[8] = "69";
 comments[8] = "Id Pregunta: 895. ";


//  Id pregunta: 904 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Podr&iacute;a decir cu&aacute;l de los siguientes no es un sistema Unix?:";
 choices[9]= new Array();
 choices[9][0] = "AIX";
 choices[9][1] = "OpenVMS";
 choices[9][2] = "HP-UX";
 choices[9][3] = "Solaris";
 answers[9] = choices[9][1];
 units[9] = "53";
 comments[9] = "Id Pregunta: 904. ";


//  Id pregunta: 910 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Pueden convivir marcos, reglas y restricciones en un mismo sistema basado en conocimiento?:";
 choices[10]= new Array();
 choices[10][0] = "Si";
 choices[10][1] = "No, pero reglas y restricciones si";
 choices[10][2] = "No, pero reglas y marcos si";
 choices[10][3] = "No";
 answers[10] = choices[10][0];
 units[10] = "64";
 comments[10] = "Id Pregunta: 910. ";


//  Id pregunta: 944 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; significa RACF?:";
 choices[11]= new Array();
 choices[11][0] = "Resource Access Control Facility";
 choices[11][1] = "Relationship Access Control Facility";
 choices[11][2] = "Resource Aknowledgement Control Facility";
 choices[11][3] = "Ninguna de las anteriores es cierta";
 answers[11] = choices[11][0];
 units[11] = "52";
 comments[11] = "Id Pregunta: 944. ";


//  Id pregunta: 955 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Con 3 discos SCSI de 145 Gbytes en modalidad RAID 5, se obtiene una capacidad total neta de:";
 choices[12]= new Array();
 choices[12][0] = "145 Gbytes";
 choices[12][1] = "435 Gbytes";
 choices[12][2] = "290 Gbytes";
 choices[12][3] = "217.5 Gbytes";
 answers[12] = choices[12][2];
 units[12] = "48";
 comments[12] = "Id Pregunta: 955. ";


//  Id pregunta: 1028 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Existen diversos tipos de modelos de datos convencionales:";
 choices[13]= new Array();
 choices[13][0] = "El modelo jer&aacute;rquico es m&aacute;s flexible que el de red o reticular";
 choices[13][1] = "El modelo relacional se basa en el &aacute;lgebra y c&aacute;lculo relacional";
 choices[13][2] = "Cronol&oacute;gicamente el modelo de red o reticular es anterior al jer&aacute;rquico";
 choices[13][3] = "En el modelo relacional se exige que el usuario conozca las vinculaciones entre entidades";
 answers[13] = choices[13][1];
 units[13] = "57";
 comments[13] = "Id Pregunta: 1028. ";


//  Id pregunta: 1235 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  La multiprogramaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Se basa en el concepto de tiempo compartido";
 choices[14][1] = "Aprovecha las ventajas de los canales de E/S y de las interrupciones";
 choices[14][2] = "Reduce el tiempo de espera de un programa pero no elimina los tiempos muertos producidos por operaciones de E/S";
 choices[14][3] = "La organizaci&oacute;n de los trabajos mediante colas o listas simplifica las funciones del supervisor respecto al de sistemas operativos convencionales";
 answers[14] = choices[14][1];
 units[14] = "52";
 comments[14] = "Id Pregunta: 1235. ";


//  Id pregunta: 1483 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Un monitor de 20 pulgadas efectivas y de 1600 x 1200 puntos con 256 tonos de grises produce una resoluci&oacute;n de:";
 choices[15]= new Array();
 choices[15][0] = "300 dpi";
 choices[15][1] = "30 dpi";
 choices[15][2] = "100 dpi";
 choices[15][3] = "50 dpi";
 answers[15] = choices[15][2];
 units[15] = "47";
 comments[15] = "Id Pregunta: 1483. ";


//  Id pregunta: 1527 Año de creación de pregunta: 2003-01-01
 questions[16]= "17)  El comando de SQL ' DELETE', &iquest;qu&eacute; hace?";
 choices[16]= new Array();
 choices[16][0] = "Borra una tabla determinada.";
 choices[16][1] = "Borra un &iacute;ndice de una tabla.";
 choices[16][2] = "Borra valores de una tabla.";
 choices[16][3] = "Borra tanto valores de una tabla, la tabla entera como &iacute;ndices de una tabla seg&uacute;n sea la sintaxis de la sentencia SQL.";
 answers[16] = choices[16][2];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1527. ";


//  Id pregunta: 1714 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[17]= new Array();
 choices[17][0] = "El procesamiento cooperativo es aquel en que 2 o m&aacute;s elementos l&oacute;gicos diferentes interact&uacute;an entre s&iacute; en la realizaci&oacute;n de una tarea com&uacute;n";
 choices[17][1] = "El procesamiento centralizado utiliza el host para ejecutar el 100% de la l&oacute;gica asociada a un programa";
 choices[17][2] = "Los procesamientos centralizados dan mayor flexibilidad y escalabilidad";
 choices[17][3] = "Los procesamientos cooperativos reducen los costes de inversi&oacute;n en equipamiento";
 answers[17] = choices[17][2];
 units[17] = "50";
 comments[17] = "Id Pregunta: 1714. ";


//  Id pregunta: 1769 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  Los applets de JAVA:";
 choices[18]= new Array();
 choices[18][0] = "Se puede incluir en una p&aacute;gina HTML de forma mediante una etiqueta especial &lt;add_applet&gt;";
 choices[18][1] = "Un applet nunca puede hacer conexiones a la m&aacute;quina de la que se descarg&oacute;.";
 choices[18][2] = "El navegador invoca el m&eacute;todo init() sobre un applet cada vez que se va a mostrar la p&aacute;gina que contiene &eacute;ste.";
 choices[18][3] = "Para firmar un applet se tiene que crear un fichero de archivo JAR con las clases que componen el applet, un fichero de metainformaci&oacute;n y el fichero de firma.";
 answers[18] = choices[18][3];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1769. ";


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


//  Id pregunta: 2021 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que se entiende por un &quot;objeto&quot; en programaci&oacute;n orientada a objetos?";
 choices[20]= new Array();
 choices[20][0] = "Un objeto es parte de la herencia de una clase";
 choices[20][1] = "Un objeto es una instancia de una clase";
 choices[20][2] = "Un objeto es una instancia de una metaclase";
 choices[20][3] = "Una clase es una instancia de un objeto generada por &quot;upcasting&quot;";
 answers[20] = choices[20][1];
 units[20] = "82";
 comments[20] = "Id Pregunta: 2021. Examen TIC MAP B 2004";


//  Id pregunta: 2257 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  Dentro del Plan General de Calidad para el desarrollo de aplicaciones inform&aacute;ticas se distinguen dos bloques tem&aacute;ticos, con un contenido diferente pero complementario, a saber:";
 choices[21]= new Array();
 choices[21][0] = "Bloque metodol&oacute;gico y Bloque procedimental";
 choices[21][1] = "Bloque metodol&oacute;gico y Bloque instrumental";
 choices[21][2] = "Bloque l&oacute;gico y Bloque procedimental";
 choices[21][3] = "Bloque l&oacute;gico y bloque instrumental";
 answers[21] = choices[21][1];
 units[21] = "92";
 comments[21] = "Id Pregunta: 2257. ";


//  Id pregunta: 2272 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  El diagrama que representa los componentes f&iacute;sicos de una aplicaci&oacute;n y sus relaciones con el entorno es el de:";
 choices[22]= new Array();
 choices[22][0] = "componentes";
 choices[22][1] = "despliegue";
 choices[22][2] = "interacci&oacute;n";
 choices[22][3] = "colaboraci&oacute;n";
 answers[22] = choices[22][0];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2272. ";


//  Id pregunta: 2355 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Entre las criticas que se hacen al modelo en cascada del ciclo de vida de una aplicaci&oacute;n tenemos:";
 choices[23]= new Array();
 choices[23][0] = "Los proyectos raramente siguen el flujo secuencial que propone el modelo";
 choices[23][1] = "Una aplicaci&oacute;n del modelo en sentido estricto obligar&iacute;a a la 'congelaci&oacute;n' de los requisitos de los usuarios, supuesto este completamente alejado de la realidad";
 choices[23][2] = "El modelo no dispone de resultados parciales que permitan validar si el sistema cumple con los requistos desde las primeras fases";
 choices[23][3] = "Todas las anteriores son inconvenientes del modelo en cascada";
 answers[23] = choices[23][3];
 units[23] = "76";
 comments[23] = "Id Pregunta: 2355. ";


//  Id pregunta: 2361 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Entre las t&eacute;cnicas utilizadas para la especificaci&oacute;n de m&oacute;dulos figura el pseudoc&oacute;digo. Identifique entre los siguientes tipos de lenguaje cu&aacute;l se corresponde exactamente con el pseudoc&oacute;digo:";
 choices[24]= new Array();
 choices[24][0] = "Es un lenguaje natural.";
 choices[24][1] = "Es un lenguaje estructurado.";
 choices[24][2] = "Es un lenguaje de programaci&oacute;n.";
 choices[24][3] = "Ninguna es cierta.";
 answers[24] = choices[24][1];
 units[24] = "84";
 comments[24] = "Id Pregunta: 2361. ";


//  Id pregunta: 2365 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  Entre los objetivos de los DFDs se encuentra:";
 choices[25]= new Array();
 choices[25][0] = "Hacer referencia al entorno f&iacute;sico";
 choices[25][1] = "Crear un modelo funcional del sistema";
 choices[25][2] = "Representar el &quot;c&oacute;mo se va a hacer el sistema&quot; en lugar del &quot;qu&eacute; se va a hacer en el sistema&quot; ";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][1];
 units[25] = "81";
 comments[25] = "Id Pregunta: 2365. ";


//  Id pregunta: 2426 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  El tipo de indizaci&oacute;n por descriptores consistente en utilizar t&eacute;cnicas de an&aacute;lisis morfol&oacute;gico y sem&aacute;ntico para captar la estructura del texto, se denomina:";
 choices[26]= new Array();
 choices[26][0] = "M&eacute;todo estad&iacute;stico";
 choices[26][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[26][2] = "M&eacute;todo sint&aacute;ctico";
 choices[26][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[26] = choices[26][2];
 units[26] = "96";
 comments[26] = "Id Pregunta: 2426. ";


//  Id pregunta: 2491 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  Se&ntilde;alar cual es la informaci&oacute;n correcta respecto a las pruebas:";
 choices[27]= new Array();
 choices[27][0] = "Los casos de prueba bien elegidos son los que tienen gran probabilidad de demostrar que el software funciona bien";
 choices[27][1] = "Las pruebas no tienen que documentarse porque jam&aacute;s tienen que repetirse o revisarse";
 choices[27][2] = "Debe contemplar &uacute;nicamente casos imprevistos o entradas no v&aacute;lidas";
 choices[27][3] = "Ninguna de las anteriores respuetas es correcta";
 answers[27] = choices[27][3];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2491. ";


//  Id pregunta: 2631 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Qu&eacute; formula expresa la relaci&oacute;n entre puntos de funci&oacute;n y COCOMO?";
 choices[28]= new Array();
 choices[28][0] = "FP= DSI * 320/nivel de lenguaje";
 choices[28][1] = "DSI= FP *  320 /nivel del lenguaje ";
 choices[28][2] = "FP= nivel de lenguaje / DSI * 320";
 choices[28][3] = "DSI= nivel de lenguaje / FP * 320";
 answers[28] = choices[28][1];
 units[28] = "89";
 comments[28] = "Id Pregunta: 2631. ";


//  Id pregunta: 2676 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  En un Sistema de Gesti&oacute;n Documental la recuperaci&oacute;n de la informaci&oacute;n se produce mediante:";
 choices[29]= new Array();
 choices[29][0] = "Palabras clave.";
 choices[29][1] = "Texto completo.";
 choices[29][2] = "&Iacute;ndices.";
 choices[29][3] = "Todas las anteriores.";
 answers[29] = choices[29][3];
 units[29] = "96";
 comments[29] = "Id Pregunta: 2676. ";


//  Id pregunta: 2685 Año de creación de pregunta: 2003-01-01
 questions[30]= "31)  La entrada de documentos al sistema de reconocimiento &oacute;ptico de caracteres se produce sobre soporte:";
 choices[30]= new Array();
 choices[30][0] = "Papel";
 choices[30][1] = "Fax";
 choices[30][2] = "Correo electr&oacute;nico.";
 choices[30][3] = "Todos los anteriores.";
 answers[30] = choices[30][3];
 units[30] = "94";
 comments[30] = "Id Pregunta: 2685. ";


//  Id pregunta: 2704 Año de creación de pregunta: 2003-01-01
 questions[31]= "32)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[31]= new Array();
 choices[31][0] = "Los avances m&aacute;s recientes en la s&iacute;ntesis del habla han ido por el camino de una parametrizaci&oacute;n de la se&ntilde;al original para suprimir la informaci&oacute;n redundante contenida en las ondas ac&uacute;sticas.";
 choices[31][1] = "En el nivel fon&eacute;tico distintivo se determinan los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[31][2] = "En el nivel fon&eacute;tico se analizan las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[31][3] = "El estudio en el dominio de la frecuencia ha conducido al an&aacute;lisis del habla por transformadas de Fourier y por bancos de filtros en paralelo.";
 answers[31] = choices[31][3];
 units[31] = "94";
 comments[31] = "Id Pregunta: 2704. ";


//  Id pregunta: 2838 Año de creación de pregunta: 2006-01-01
 questions[32]= "33)  ISO 9004-2 se corresponde con";
 choices[32]= new Array();
 choices[32][0] = "Gesti&oacute;n de la calidad y elementos del sistema de calidad. Reglas generales";
 choices[32][1] = "Gu&iacute;a para los servicios";
 choices[32][2] = "No existe ISO 9004-2, sino ISO 9004-2000";
 choices[32][3] = "Gu&iacute;a para la aplicaci&oacute;n de ISO 9001 para el desarrollo, suministro y mantenimiento del software";
 answers[32] = choices[32][1];
 units[32] = "92";
 comments[32] = "Id Pregunta: 2838. ";


//  Id pregunta: 2847 Año de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;El m&eacute;todo de interpolaci&oacute;n por el vecino m&aacute;s pr&oacute;ximo se emplea en?";
 choices[33]= new Array();
 choices[33][0] = "la correcci&oacute;n geom&eacute;trica";
 choices[33][1] = "la correcci&oacute;n radiom&eacute;trica";
 choices[33][2] = "el realce geom&eacute;trico";
 choices[33][3] = "el realce radiom&eacute;trico";
 answers[33] = choices[33][1];
 units[33] = "93";
 comments[33] = "Id Pregunta: 2847. ";


//  Id pregunta: 2874 Año de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes interfaces no corresponde a las establecidas por la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[34]= new Array();
 choices[34][0] = "Planificaci&oacute;n del Sistema";
 choices[34][1] = "Gesti&oacute;n de proyectos";
 choices[34][2] = "Aseguramiento de la calidad";
 choices[34][3] = "Seguridad";
 answers[34] = choices[34][0];
 units[34] = "86";
 comments[34] = "Id Pregunta: 2874. ";


//  Id pregunta: 2932 Año de creación de pregunta: 2004-01-01
 questions[35]= "36)  Respecto al est&aacute;ndar de criterios comunes Common Criteria ISO 15408-1 puede decirse que:";
 choices[35]= new Array();
 choices[35][0] = "El nivel de evaluaci&oacute;n EAL3 equivale en ITSEC al nivel de evaluaci&oacute;n E4";
 choices[35][1] = "El nivel de evaluaci&oacute;n EAL3 implica que se ha dise&ntilde;ado, probado y revisado met&oacute;dicamente";
 choices[35][2] = "El nivel de evaluaci&oacute;n EAL4 implica dise&ntilde;o y pruebas semi-formales";
 choices[35][3] = "Es un intento internacional por unificar los criterios utilizados en Estados Unidos y Europa, TCSEC e ITSEC";
 answers[35] = choices[35][3];
 units[35] = "111";
 comments[35] = "Id Pregunta: 2932. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3185 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes respuestas sobre Emulacion de LAN en ATM es cierta?:";
 choices[36]= new Array();
 choices[36][0] = "Proporciona a las estaciones enganchadas via ATM las mismas capacidades que obtienen de una LAN tipo Ethernet o Token-Ring";
 choices[36][1] = "Requiere modificaciones de los protocolos de mayor nivel (de la capa de red)  para permitir operaciones via una red ATM";
 choices[36][2] = "Intenta emular el Media Access Control (MAC) real de la LAN espec&iacute;fica";
 choices[36][3] = "Define un esquema de encapsulado para Ethernet, Token-Ring y FDDI";
 answers[36] = choices[36][0];
 units[36] = "109";
 comments[36] = "Id Pregunta: 3185. ";


//  Id pregunta: 3449 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  El protocolo en que est&aacute;n basados los niveles inferiores del modelo OSI de la ISO es:";
 choices[37]= new Array();
 choices[37][0] = "SDLC";
 choices[37][1] = "EBCDIC";
 choices[37][2] = "HDLC";
 choices[37][3] = "X.400";
 answers[37] = choices[37][2];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3449. ";


//  Id pregunta: 3502 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  En el modelo de referencia OSI, una interfaz:";
 choices[38]= new Array();
 choices[38][0] = "Define las primitivas y los servicios que una capa ofrece a todas las que est&aacute;n sobre ella";
 choices[38][1] = "Define los servicios y las primitivas que una capa ofrece a la inmediatamente superior";
 choices[38][2] = "Define la funcionalidad final que el sistema ofrece al usuario";
 choices[38][3] = "Define las reglas y convenios para que dos procesos en diferentes m&aacute;quinas comuniquen entre s&iacute;";
 answers[38] = choices[38][1];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3502. ";


//  Id pregunta: 3533 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  En las necesidades para establecer una aplicaci&oacute;n de videoconferencia, es falso que se requiera:";
 choices[39]= new Array();
 choices[39][0] = "una compresi&oacute;n / descompresi&oacute;n en tiempo real";
 choices[39][1] = "unos l&iacute;mites m&iacute;nimos y m&aacute;ximos para el retardo de comunicaci&oacute;n";
 choices[39][2] = "una sincronizaci&oacute;n de audio y de video";
 choices[39][3] = "un protocolo de se&ntilde;alizaci&oacute;n";
 answers[39] = choices[39][1];
 units[39] = "117";
 comments[39] = "Id Pregunta: 3533. ";


//  Id pregunta: 3624 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  La normativa para sistemas de cableado de edificios es:";
 choices[40]= new Array();
 choices[40][0] = "EIA/TIA 568";
 choices[40][1] = "ISO/IEC DIS 11801";
 choices[40][2] = "EPHOS 2";
 choices[40][3] = "&quot;a&quot; y &quot;b&quot;";
 answers[40] = choices[40][3];
 units[40] = "99";
 comments[40] = "Id Pregunta: 3624. ";


//  Id pregunta: 3733 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  Los prefijos de subred de longitud arbitraria en IPv4, con notaci&oacute;n a.b.c.d/x donde x es el n&uacute;mero de bits de prefijo, son introducidos seg&uacute;n:";
 choices[41]= new Array();
 choices[41][0] = "CICR";
 choices[41][1] = "CIDR";
 choices[41][2] = "DICR";
 choices[41][3] = "DIDR";
 answers[41] = choices[41][1];
 units[41] = "100";
 comments[41] = "Id Pregunta: 3733. ";


//  Id pregunta: 3848 Año de creación de pregunta: 2002-01-01
 questions[42]= "43)  Uno de los siguientes no es un inconveniente de la telefon&iacute;a sobre IP. Indicar cu&aacute;l:";
 choices[42]= new Array();
 choices[42][0] = "degradaci&oacute;n de la calidad";
 choices[42][1] = "supresi&oacute;n de silencios";
 choices[42][2] = "falta actual de infraestructuras para soportar todo el tr&aacute;fico previsto";
 choices[42][3] = "problemas de ecos con los retardos";
 answers[42] = choices[42][1];
 units[42] = "108";
 comments[42] = "Id Pregunta: 3848. ";


//  Id pregunta: 3979 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[43]= new Array();
 choices[43][0] = "Cable de Categor&iacute;a 4 (seg&uacute;n EIA/TIA)  que permite obtener velocidades de transmisi&oacute;n de 2 Mbit/s con distancias de 100 metros.";
 choices[43][1] = "Cable de Categor&iacute;a 5 (seg&uacute;n EIA/TIA) que permite obtener velocidades de transmisi&oacute;n de 10 Mbit/s con distancias de 100 metros.";
 choices[43][2] = "Las especificaciones de la EIA/TIA-569 y las del SYSTIMAX IBS establecen la necesidad de al menos dos armarios de distribuci&oacute;n por planta para hasta 1000 metros cuadrados.";
 choices[43][3] = "El cableado horizontal debe emplear una topolog&iacute;a en estrella con una longitud m&aacute;xima de 90 metros (entre armario y roseta).";
 answers[43] = choices[43][3];
 units[43] = "99";
 comments[43] = "Id Pregunta: 3979. ";


//  Id pregunta: 4027 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;Qu&eacute; modulaci&oacute;n se usa en GSM?";
 choices[44]= new Array();
 choices[44][0] = "QPSK";
 choices[44][1] = "BPSK";
 choices[44][2] = "QAM";
 choices[44][3] = "GMSK";
 answers[44] = choices[44][3];
 units[44] = "108";
 comments[44] = "Id Pregunta: 4027. ";


//  Id pregunta: 4028 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  Respecto a Frame Relay, que es verdadero respecto al CIR";
 choices[45]= new Array();
 choices[45][0] = "Todos los PVC deben tener el mismo CIR";
 choices[45][1] = "Es la velocidad que la red se compromete a  servir como minimo";
 choices[45][2] = "Es el volumen de tr&aacute;fico adicional sobre el volumen alcanzable.";
 choices[45][3] = "Es la velocidad m&aacute;xima de acceso a la red.";
 answers[45] = choices[45][1];
 units[45] = "109";
 comments[45] = "Id Pregunta: 4028. ";


//  Id pregunta: 4356 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  Los contratos de fabricaci&oacute;n, por los que la cosa o cosas que hayan de ser entregadas por el empresario deban ser elaboradas con arreglo a caracter&iacute;sticas peculiares fijadas previamente por la Administraci&oacute;n, a&uacute;n cuando &eacute;sta se obligue a aportar, total o parcialmente, los materiales precisos, tienen la consideraci&oacute;n de contratos de:";
 choices[46]= new Array();
 choices[46][0] = "Obras.";
 choices[46][1] = "Suministro";
 choices[46][2] = "Servicios";
 choices[46][3] = "Bienes y servicios.";
 answers[46] = choices[46][1];
 units[46] = "41";
 comments[46] = "Id Pregunta: 4356. ";


//  Id pregunta: 4421 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;A qu&eacute; nivel del modelo OSI se realiza el encapsulamiento Frame Relay y HDLC?";
 choices[47]= new Array();
 choices[47][0] = "Red.";
 choices[47][1] = "Sesi&oacute;n.";
 choices[47][2] = "Enlace de datos.";
 choices[47][3] = "Transporte.";
 answers[47] = choices[47][2];
 units[47] = "100";
 comments[47] = "Id Pregunta: 4421. ";


//  Id pregunta: 4592 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Cual de las siguientes no es una ventaja de WiMax respecto a WIFI:";
 choices[48]= new Array();
 choices[48][0] = "el ancho los canales radio utilizados por WiMax es menor que los de WiFi";
 choices[48][1] = "WiMax utiliza un protocolo de control de acceso al medio CSMA evolucionado respecto al de WiFi";
 choices[48][2] = "WiMax soporta mas usuarios por cada canal radio";
 choices[48][3] = "WiMax permite el control autom&aacute;tico de potencia emitida";
 answers[48] = choices[48][1];
 units[48] = "107";
 comments[48] = "Id Pregunta: 4592. ";


//  Id pregunta: 4750 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Se&ntilde;ale la opci&oacute;n verdadera en relaci&oacute;n a las infraestructura de clave p&uacute;blica&hellip;";
 choices[49]= new Array();
 choices[49][0] = "Se ha de garantizar que ning&uacute;n usuario, salvo aquel para quien se ha generado una pareja de claves de un certificado, pueda jam&aacute;s llegar a disponer de ellas.";
 choices[49][1] = "La utilizaci&oacute;n de hardware criptogr&aacute;fico (HSM) tiene sentido en las Autoridades de Certificaci&oacute;n (CA) pero no as&iacute; en las Autoridades de Registro (RA)";
 choices[49][2] = "Es importante que la CA disponga de certificaci&oacute;n FIPS 140-2";
 choices[49][3] = "EMV es un tipo de certificado que no responde al est&aacute;ndar X.509";
 answers[49] = choices[49][3];
 units[49] = "74";
 comments[49] = "Id Pregunta: 4750. ";


//  Id pregunta: 4979 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  En ADSL, las velocidades de datos dependen de diversos factores. &iquest;Cu&aacute;l no es uno de ellos?:";
 choices[50]= new Array();
 choices[50][0] = "Longitud de la l&iacute;nea de cobre.";
 choices[50][1] = "La presencia de derivaciones puenteadas.";
 choices[50][2] = "La informaci&oacute;n de se&ntilde;alizaci&oacute;n que se debe transmitir simult&aacute;neamente.";
 choices[50][3] = "La interferencia de acoplamientos cruzados.";
 answers[50] = choices[50][2];
 units[50] = "107";
 comments[50] = "Id Pregunta: 4979. Examen TIC B 2007";


//  Id pregunta: 5067 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;En cu&aacute;l de las siguientes zonas del chip del DNIe se almacenan los datos biom&eacute;tricos?:";
 choices[51]= new Array();
 choices[51][0] = "Zona p&uacute;blica";
 choices[51][1] = "Zona privada";
 choices[51][2] = "Zona de seguridad";
 choices[51][3] = "Zona compartida";
 answers[51] = choices[51][2];
 units[51] = "30";
 comments[51] = "Id Pregunta: 5067. Examen TIC A 2007";


//  Id pregunta: 5227 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  El modelo Code and Fix:";
 choices[52]= new Array();
 choices[52][0] = "Modelo b&aacute;sico usado en los primeros tiempos desarrollo de SW compuesto por 2 fases, primero codificar y despu&eacute;s resolver los problemas del c&oacute;digo";
 choices[52][1] = "Tras varios ajustes, el c&oacute;digo se vuelve poco estructurado y los siguientes ajustes son muy costosos.";
 choices[52][2] = "Con frecuencia se ajustaba poco a las necesidades de los usuarios.";
 choices[52][3] = "Todas las anteriores son correctas";
 answers[52] = choices[52][3];
 units[52] = "76";
 comments[52] = "Id Pregunta: 5227. ";


//  Id pregunta: 5495 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Los archivos EAR, seg&uacute;n la tecnolog&iacute;a Java EE:";
 choices[53]= new Array();
 choices[53][0] = "C&oacute;mprime s&oacute;lo archivos .class ";
 choices[53][1] = "Son un tipo de archivo JAR";
 choices[53][2] = "No existen tales archivos. S&oacute;lo hay archivos WAR";
 choices[53][3] = "Es un empaquetado de archivos XML";
 answers[53] = choices[53][1];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5495. ";


//  Id pregunta: 5608 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Ventajas de la versi&oacute;n SNMPv3 sobre SNMPv2";
 choices[54]= new Array();
 choices[54][0] = "SNMPv2 presentaba debilidades en la recuperaci&oacute;n de grandes cantidades de informaci&oacute;n.";
 choices[54][1] = "Introduce mecanismos de autentificaci&oacute;n, privacidad y control de accesos m&aacute;s solidos";
 choices[54][2] = "SNMPv3 introdujo nuevas operaciones: GetBulk, Inform, Report";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][1];
 units[54] = "104";
 comments[54] = "Id Pregunta: 5608. ";


//  Id pregunta: 5850 Año de creación de pregunta: 2009-01-01
 questions[55]= "56)  En el modelo Early Design de COCOMO II, el valor PM nominal se ajusta utilizando";
 choices[55]= new Array();
 choices[55][0] = "5 factores de escala";
 choices[55][1] = "7 factores de coste";
 choices[55][2] = "17 factores de coste";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][1];
 units[55] = "89";
 comments[55] = "Id Pregunta: 5850. ";


//  Id pregunta: 5891 Año de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Qu&eacute; tecnolog&iacute;a Java permite la invocaci&oacute;n de m&eacute;todos de un objeto remoto?";
 choices[56]= new Array();
 choices[56][0] = "RMI";
 choices[56][1] = "JNI";
 choices[56][2] = "JDBC";
 choices[56][3] = "JRM";
 answers[56] = choices[56][0];
 units[56] = "60";
 comments[56] = "Id Pregunta: 5891. ";


//  Id pregunta: 5953 Año de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Qu&eacute; es com&uacute;n a todas las tecnolog&iacute;as de virtualizaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "Simulaci&oacute;n del Hardware Completo";
 choices[57][1] = "Simulaci&oacute;n del Sistema Operativo";
 choices[57][2] = "Ocultaci&oacute;n de los detalles t&eacute;cnicos a trav&eacute;s de la encapsulaci&oacute;n";
 choices[57][3] = "Paravirtualizaci&oacute;n, donde se ofrece un API especial que debe usarse modificando el sistema operativo &quot;guest&quot;";
 answers[57] = choices[57][2];
 units[57] = "119";
 comments[57] = "Id Pregunta: 5953. ";


//  Id pregunta: 5978 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  La banda de 26 GHz se utiliza para:";
 choices[58]= new Array();
 choices[58][0] = "UMTS.";
 choices[58][1] = "LMDS.";
 choices[58][2] = "WiFi.";
 choices[58][3] = "Bluetooth.";
 answers[58] = choices[58][1];
 units[58] = "107";
 comments[58] = "Id Pregunta: 5978. TIC A 2009";


//  Id pregunta: 6051 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Qu&eacute; es CMOT?";
 choices[59]= new Array();
 choices[59][0] = "Significa Common Management Over TCP/IP y es una extensi&oacute;n de los est&aacute;ndares de gesti&oacute;n OSI para Internet";
 choices[59][1] = "Significa Common Mobile Online Trespassing y es un protocolo para realizar el traspaso de llamadas entre sistemas de telefon&iacute;a m&oacute;vil sobre VSAT ";
 choices[59][2] = "Significa Critical Mode Online Testing y es una herramienta para la realizaci&oacute;n de pruebas de rendimiento no intrusivas en aplicaciones de misi&oacute;n cr&iacute;tica ";
 choices[59][3] = "Ninguna de las respuestas anteriores es correcta ";
 answers[59] = choices[59][0];
 units[59] = "104";
 comments[59] = "Id Pregunta: 6051. ";


//  Id pregunta: 6140 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  Acerca del protocolo Kerberos v. 5 (IETF RFC 4120):";
 choices[60]= new Array();
 choices[60][0] = "Tiene extensiones que permiten el empleo de criptograf&iacute;a de clave p&uacute;blica y secreta.";
 choices[60][1] = "Los tickets expiran tras un tiempo predeterminado en el protocolo.";
 choices[60][2] = "El servidor de autenticaci&oacute;n cifra el ticket que remite al cliente con una clave que obtiene a partir del nombre y la contrase&ntilde;a del usuario.";
 choices[60][3] = "Utiliza los algoritmos de cifrado bajo el modo de operaci&oacute;n denominado CBC (Cipher block chaining).";
 answers[60] = choices[60][0];
 units[60] = "74";
 comments[60] = "Id Pregunta: 6140. TIC A 2009";


//  Id pregunta: 6143 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  En relaci&oacute;n con los c&oacute;decs que se utilizan en sistemas de telefon&iacute;a:";
 choices[61]= new Array();
 choices[61][0] = "G.711 utiliza el algoritmo PCM y es el c&oacute;dec que garantiza la mayor calidad de sonido por lo que se suele utilizar en entornos LAN de VoIP";
 choices[61][1] = "G.729 es el algoritmo m&aacute;s extendido en sistemas de VoIP sobre WAN, ya que aunque tiene p&eacute;rdida por compresi&oacute;n la calidad de sonido (MOS) es buena";
 choices[61][2] = "El c&oacute;dec que se utiliza en GSM (GSM 06.10) proporciona una calidad de sonido peor que G.711 y G.729";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][3];
 units[61] = "100, 109";
 comments[61] = "Id Pregunta: 6143. ";


//  Id pregunta: 6462 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  Indique la actividad que NO forma parte del ciclo de vida del software";
 choices[62]= new Array();
 choices[62][0] = "El an&aacute;lisis del sistema de informaci&oacute;n";
 choices[62][1] = "La planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n";
 choices[62][2] = "El mantenimiento del sistema de informaci&oacute;n";
 choices[62][3] = "La gesti&oacute;n de riesgos";
 answers[62] = choices[62][1];
 units[62] = "76";
 comments[62] = "Id Pregunta: 6462. Castilla La Mancha 2009";


//  Id pregunta: 6470 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  La metodolog&iacute;a M&eacute;trica V3 plantea la t&eacute;cnica de los casos de uso en la obtenci&oacute;n de requisitos en ASI:";
 choices[63]= new Array();
 choices[63][0] = "Como obligatoria en el desarrollo estructurado y opcional en orientaci&oacute;n a objetos";
 choices[63][1] = "Como opcional en el desarrollo estructurado y obligatoria en orientaci&oacute;n a objetos";
 choices[63][2] = "Como obligatoria, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 choices[63][3] = "Como opcional, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 answers[63] = choices[63][1];
 units[63] = "86";
 comments[63] = "Id Pregunta: 6470. Castilla La Mancha 2009";


//  Id pregunta: 6494 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, el censo promocional es una fuente de acceso p&uacute;blico s&oacute;lo:";
 choices[64]= new Array();
 choices[64][0] = "Durante los cinco &uacute;ltimos a&ntilde;os de vigencia";
 choices[64][1] = "Durante el &uacute;ltimo a&ntilde;o de vigencia";
 choices[64][2] = "Nunca es fuente de acceso p&uacute;blico";
 choices[64][3] = "Siempre que no aparezca el DNI";
 answers[64] = choices[64][1];
 units[64] = "29";
 comments[64] = "Id Pregunta: 6494. Castilla La Mancha 2009";


//  Id pregunta: 7163 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los ficheros de Linux es cierta?";
 choices[65]= new Array();
 choices[65][0] = "/etc/passwd: s&oacute;lo es accesible para root";
 choices[65][1] = "/etc/shadow: contiene las contrase&ntilde;as encriptadas de los usuarios ";
 choices[65][2] = "/etc/ftpusers: contienes los usuarios que pueden acceder al sistema v&iacute;a ftp";
 choices[65][3] = "/etc/dhcpconfig: contiene informaci&oacute;n de configuraci&oacute;n del cliente DHCP";
 answers[65] = choices[65][1];
 units[65] = "53,54";
 comments[65] = "Id Pregunta: 7163. Examen TIC B 2009";


//  Id pregunta: 7246 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; valor tiene el primer n&uacute;mero de una red de clase C en internet?";
 choices[66]= new Array();
 choices[66][0] = "Menor o igual que 127";
 choices[66][1] = "Entre 192 y 223";
 choices[66][2] = "Mayor o igual que 224";
 choices[66][3] = "Entre 128 y 191";
 answers[66] = choices[66][1];
 units[66] = "100";
 comments[66] = "Id Pregunta: 7246. Examen TIC B 2009";


//  Id pregunta: 7276 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  La t&eacute;cnica que utiliza la paravirtualizaci&oacute;n se denomina ";
 choices[67]= new Array();
 choices[67][0] = "Ringing up";
 choices[67][1] = "Ring deprivileging";
 choices[67][2] = "Privileging";
 choices[67][3] = "Hypervisor";
 answers[67] = choices[67][1];
 units[67] = "119";
 comments[67] = "Id Pregunta: 7276. ";


//  Id pregunta: 7789 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)   Respecto a los servicios de Directorio Electr&oacute;nico, la norma X-500 de la UIT-T define cuatro tipos de clases de objetos de acuerdo a su funcionalidad:";
 choices[68]= new Array();
 choices[68][0] = " Auxiliar, Estructural, Simplificada, Alias.";
 choices[68][1] = " Estructural, Simplificada, Auxiliar, Alias.";
 choices[68][2] = " Abstracta, Esquem&aacute;tica, Estructural, Alias.";
 choices[68][3] = " Abstracta, Estructural, Auxiliar, Alias.";
 answers[68] = choices[68][3];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 7789. Map 2005";


//  Id pregunta: 7820 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)   En un proceso de evaluaci&oacute;n de bienes y servicios inform&aacute;ticos, el m&eacute;todo de ordenaci&oacute;n de alternativas PROMETHEE:";
 choices[69]= new Array();
 choices[69][0] = " Cuantifica la diferencia y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 choices[69][1] = " Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 choices[69][2] = " Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 choices[69][3] = " Cuantifica la diferencia, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor.";
 answers[69] = choices[69][2];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 7820. Map 2005";


//  Id pregunta: 7823 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   Las SDU (Service Data Unit) son unidades de datos:";
 choices[70]= new Array();
 choices[70][0] = " Que se intercambian entre entidades hom&oacute;logas.";
 choices[70][1] = " Que proporcionan informaci&oacute;n de control entre niveles.";
 choices[70][2] = " Correspondientes a las primitivas de comunicaci&oacute;n.";
 choices[70][3] = " Que deben ser tratados por el nivel superior (N+1";
 answers[70] = choices[70][3];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7823. Map 2005";


//  Id pregunta: 7891 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29. Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a la configuraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignable dentro de dicho rango?";
 choices[71]= new Array();
 choices[71][0] = " Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.25.";
 choices[71][1] = " Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada: 192.168.20.1.";
 choices[71][2] = " Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.25.";
 choices[71][3] = " Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.1.";
 answers[71] = choices[71][2];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7891. Map 2006";


//  Id pregunta: 8057 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public Key Infrastructures)?";
 choices[72]= new Array();
 choices[72][0] = " Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica.";
 choices[72][1] = " Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido.";
 choices[72][2] = " Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;n permitidas para dicho certificado.";
 choices[72][3] = " Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet.";
 answers[72] = choices[72][3];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 8057. Map 2007";


//  Id pregunta: 8080 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   La Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos:";
 choices[73]= new Array();
 choices[73][0] = " Prev&eacute; que los ciudadanos se relacionen con dichas Administraciones siempre que usen para ello los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad.";
 choices[73][1] = " Establece la creaci&oacute;n de registros electr&oacute;nicos por las Administraciones P&uacute;blicas, que admitir&aacute;n exclusivamente documentos electr&oacute;nicos normalizados y cumplimentados de acuerdo con formatos preestablecidos.";
 choices[73][2] = " Es de aplicaci&oacute;n exclusivamente a los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[73][3] = " Establece que la publicaci&oacute;n del BOE en la sede electr&oacute;nica del organismo competente tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico exclusivamente en las condiciones y con las garant&iacute;as reglamentarias.";
 answers[73] = choices[73][3];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 8080. Map 2008";


//  Id pregunta: 8125 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   &iquest;Por qu&eacute; organismo de normalizaci&oacute;n ha sido promovido el est&aacute;ndar GSM?";
 choices[74]= new Array();
 choices[74][0] = " ISO (International Standards Organization).";
 choices[74][1] = " IEEE (Institute of Electrical Engineers).";
 choices[74][2] = " ETSI (European Telecommunications Standards Institute).";
 choices[74][3] = " CEN (Comit&eacute; Europeo de Normalizaci&oacute;n).";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 8125. Map 2008";


//  Id pregunta: 8129 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &laquo;Retorno de la Inversi&oacute;n&raquo;:";
 choices[75]= new Array();
 choices[75][0] = " Beneficio Neto Anual.";
 choices[75][1] = " Inversi&oacute;n Promedio.";
 choices[75][2] = " Coste desarrollo anualizado.";
 choices[75][3] = " Per&iacute;odo de Amortizaci&oacute;n.";
 answers[75] = choices[75][3];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 8129. Map 2008";


//  Id pregunta: 8150 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)   &iquest;Cu&aacute;l de las siguientes afirmaciones es CIERTA para los sistemas de comunicaciones m&oacute;viles?";
 choices[76]= new Array();
 choices[76][0] = " La implementaci&oacute;n de Clase 1 de WTLS para WAP proporciona autenticaci&oacute;n terminal-servidor.";
 choices[76][1] = " Con WTLS la negociaci&oacute;n de los datagramas se hace mediante UDP.";
 choices[76][2] = " WTLS no admite la utilizaci&oacute;n de algoritmos criptogr&aacute;ficos basados en curvas el&iacute;pticas.";
 choices[76][3] = " WML es el lenguaje de navegaci&oacute;n para terminales m&oacute;viles WAP.";
 answers[76] = choices[76][3];
 units[76] = "NULL";
 comments[76] = "Id Pregunta: 8150. Map 2008";


//  Id pregunta: 8290 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Respecto al protocolo ligero de acceso a directorios (LDAPv3):";
 choices[77]= new Array();
 choices[77][0] = "No admite TCP/IP.";
 choices[77][1] = "No es un protocolo abierto.";
 choices[77][2] = "No requiere X.500.";
 choices[77][3] = "No requiere X.500.";
 answers[77] = choices[77][2];
 units[77] = "74";
 comments[77] = "Id Pregunta: 8290. Examen TIC A2 2010";


//  Id pregunta: 8530 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  La Web sem&aacute;ntica pretende dotar a la Web de mayor significado, gracias a una informaci&oacute;n mejor definida. Para ello se utilizan tecnolog&iacute;as como:";
 choices[78]= new Array();
 choices[78][0] = "RTF.";
 choices[78][1] = "RML.";
 choices[78][2] = "OWL.";
 choices[78][3] = "Jabsys.";
 answers[78] = choices[78][2];
 units[78] = "120";
 comments[78] = "Id Pregunta: 8530. Examen TIC A2 2010 interna";


//  Id pregunta: 8762 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  El grado de multiprogramaci&oacute;n en un sistema operativo corresponde a:";
 choices[79]= new Array();
 choices[79][0] = "El n&uacute;mero m&aacute;ximo de programas que realizan operaciones de E/S.";
 choices[79][1] = "El n&uacute;mero m&aacute;ximo de archivos en un directorio";
 choices[79][2] = "El n&uacute;mero m&aacute;ximo de procesos en memoria principal";
 choices[79][3] = "El n&uacute;mero m&aacute;ximo de programas que comparten variables";
 answers[79] = choices[79][2];
 units[79] = "52";
 comments[79] = "Id Pregunta: 8762. Examen TIC A2 2010 interna";


//  Id pregunta: 8888 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;C&oacute;mo se llama la PDU de nivel 3?";
 choices[80]= new Array();
 choices[80][0] = "Paquete";
 choices[80][1] = "SPDU";
 choices[80][2] = "Trama";
 choices[80][3] = "TPDU";
 answers[80] = choices[80][0];
 units[80] = "100";
 comments[80] = "Id Pregunta: 8888. ";


//  Id pregunta: 8917 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Cu&aacute;ndo una relaci&oacute;n est&aacute; en Tercera Forma Normal?:";
 choices[81]= new Array();
 choices[81][0] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no tiene grupos repetitivos.";
 choices[81][1] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s todos los atributos que no forman parte de la clave primaria tienen dependencia funcional completa respecto de cada una de las claves.";
 choices[81][2] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no hay dependencias funcionales transitivas respecto de la clave primaria.";
 choices[81][3] = "Cuando est&aacute; en Segunda Forma Normal y la clave primaria no est&aacute; formada por un &uacute;nico atributo";
 answers[81] = choices[81][2];
 units[81] = "58";
 comments[81] = "Id Pregunta: 8917. Operador Ayto. Madrid 2010";


//  Id pregunta: 8947 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  Seg&uacute;n el Esquema Nacional de Seguridad, &iquest;cu&aacute;ndo se deben registrar todas las actividades de los usuarios en el sistema?";
 choices[82]= new Array();
 choices[82][0] = "Cuando la categor&iacute;a del sistema sea alta";
 choices[82][1] = "Cuando as&iacute; lo decida el responsable de los servidores";
 choices[82][2] = "Cuando la dimensi&oacute;n de trazabilidad sea de nivel alto";
 choices[82][3] = "En todos los casos anteriores";
 answers[82] = choices[82][2];
 units[82] = "43";
 comments[82] = "Id Pregunta: 8947. ";


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


//  Id pregunta: 9242 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Qu&eacute; caracter&iacute;sticas tiene ubuntu tv?";
 choices[84]= new Array();
 choices[84][0] = "No existe.";
 choices[84][1] = "Usa una interfaz que es una modificaci&oacute;n del entorno de escritorio Unity.";
 choices[84][2] = "Va instalado de serie en la mayor&iacute;a de los tv comerciales.";
 choices[84][3] = "Ninguna es correcta.";
 answers[84] = choices[84][1];
 units[84] = "54";
 comments[84] = "Id Pregunta: 9242. ";


//  Id pregunta: 9486 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Indique la afirmaci&oacute;n incorrecta con respecto a una sesi&oacute;n JAD";
 choices[85]= new Array();
 choices[85][0] = "Es una t&eacute;cnica que promueve la cooperaci&oacute;n entre usuarios y desarrolladores para la obtenci&oacute;n de requisitos";
 choices[85][1] = "T&iacute;picamente duran media jornada de trabajo";
 choices[85][2] = "Se utilizan para reducir el tiempo de desarrollo";
 choices[85][3] = "Involucran a personas de m&aacute;s alto nivel que las sesiones JRP";
 answers[85] = choices[85][3];
 units[85] = "78";
 comments[85] = "Id Pregunta: 9486. ";


//  Id pregunta: 9513 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a los servlets de Java:";
 choices[86]= new Array();
 choices[86][0] = "Se alojan en un contenedor web";
 choices[86][1] = "Es un elemento de la capa de presentaci&oacute;n";
 choices[86][2] = "Se pueden invocar desde una URL";
 choices[86][3] = "S&oacute;lo generan contenido est&aacute;tico";
 answers[86] = choices[86][3];
 units[86] = "116";
 comments[86] = "Id Pregunta: 9513. ";


//  Id pregunta: 9585 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  El Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica define la interoperabilidad sem&aacute;ntica como:";
 choices[87]= new Array();
 choices[87][0] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[87][1] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[87][2] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[87][3] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 9585. Examen TIC A1 2011";


//  Id pregunta: 9673 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  En Grid Computing:";
 choices[88]= new Array();
 choices[88][0] = "Podemos conseguir cerca del 100% de uso de CPU.";
 choices[88][1] = "Los nodos no tienen que estar dedicados, puesto que su caracter&iacute;stica m&aacute;s importante es que la escalabilidad es parametrizable.";
 choices[88][2] = "Son sistemas heterog&eacute;neos.";
 choices[88][3] = "Todas las anteriores.";
 answers[88] = choices[88][3];
 units[88] = "45";
 comments[88] = "Id Pregunta: 9673. ";


//  Id pregunta: 9760 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  La aplicaci&oacute;n para la presentaci&oacute;n telem&aacute;tica de proposiciones a los procedimientos de adopci&oacute;n de tipo de bienes y serviciosde adquisici&oacute;n centralizada, se denomina:";
 choices[89]= new Array();
 choices[89][0] = "CONECTA-PATRIMONIO";
 choices[89][1] = "PITER";
 choices[89][2] = "CONECTA-CENTRALIZACI&Oacute;N";
 choices[89][3] = "No existe tal aplicaci&oacute;n";
 answers[89] = choices[89][2];
 units[89] = "41";
 comments[89] = "Id Pregunta: 9760. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. Tramitaci&oacute;n de solicitudes a trav&eacute;s de CONECTA  CENTRALIZACI&Oacute;N.";


//  Id pregunta: 9894 Año de creación de pregunta: 2010-01-01
 questions[90]= "91)  Ordene de forma decreciente, en relaci&oacute;n al coste en hardware (puertas l&oacute;gicasequivalentes), las siguientes primitivas criptogr&aacute;ficas: funci&oacute;n resumen (ej. MD5 o SHA-1), cifrado asim&eacute;trico (ej. RSA o curvas el&iacute;pticas) y cifrado sim&eacute;trico (ej. AES o DES).";
 choices[90]= new Array();
 choices[90][0] = "Funci&oacute;n resumen, Cifrado asim&eacute;trico, Cifrado sim&eacute;trico.";
 choices[90][1] = "Funci&oacute;n resumen, Cifrado sim&eacute;trico, Cifrado asim&eacute;trico.";
 choices[90][2] = "Cifrado asim&eacute;trico, Cifrado sim&eacute;trico, Funci&oacute;n resumen.";
 choices[90][3] = "Cifrado asim&eacute;trico, Funci&oacute;n resumen, Cifrado sim&eacute;trico.";
 answers[90] = choices[90][3];
 units[90] = "111";
 comments[90] = "Id Pregunta: 9894. TIC A1, Examen 2013";


//  Id pregunta: 9897 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  En relaci&oacute;n al reconocimiento &oacute;ptico de caracteres, el proceso de Kerning consiste en eliminar el espacio excesivo entre";
 choices[91]= new Array();
 choices[91][0] = "bloques en los que se encuentra dividida una p&aacute;gina.";
 choices[91][1] = "l&iacute;neas de texto.";
 choices[91][2] = "palabras de una l&iacute;nea de texto.";
 choices[91][3] = "letras de una palabra.";
 answers[91] = choices[91][3];
 units[91] = "94";
 comments[91] = "Id Pregunta: 9897. TIC A1, Examen 2013";


//  Id pregunta: 9951 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Qu&eacute; practicas, seg&uacute;n M&eacute;trica v3, tienen como objetivo potenciar la participaci&oacute;nactiva de la alta direcci&oacute;n como medio para obtener los mejores resultados en elmenor tiempo posible y con una mayor calidad de los productos?";
 choices[92]= new Array();
 choices[92][0] = "Sesiones JAD. ";
 choices[92][1] = "Sesiones JRP.";
 choices[92][2] = "Entrevistas";
 choices[92][3] = "Reuniones";
 answers[92] = choices[92][1];
 units[92] = "86";
 comments[92] = "Id Pregunta: 9951. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10042 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[93]= new Array();
 choices[93][0] = "RSVP ";
 choices[93][1] = "ARP";
 choices[93][2] = "802.1ar ";
 choices[93][3] = "H.264";
 answers[93] = choices[93][0];
 units[93] = "100, 109";
 comments[93] = "Id Pregunta: 10042. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10178 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con los diagramas UML&hellip;";
 choices[94]= new Array();
 choices[94][0] = "El diagrama de Comunicaci&oacute;n que introdujo UML2.0, constituye una versi&oacute;n modificada del anterior diagrama de Colaboraci&oacute;n";
 choices[94][1] = "UML tipifica como diagramas de comportamiento los siguientes: diagramas de Actividad, diagramas de Estado, diagramas de Caso de Uso y los diagramas de Interacci&oacute;n.";
 choices[94][2] = "Los denominados diagramas globales de interacci&oacute;n ofrecen una visi&oacute;n de conjunto de las rutas de acceso de ejecuci&oacute;n de toda la aplicaci&oacute;n, utilizando elementos de diagramas de actividades y diagramas de secuencia.";
 choices[94][3] = "Todas las anteriores";
 answers[94] = choices[94][3];
 units[94] = "82";
 comments[94] = "Id Pregunta: 10178. ";


//  Id pregunta: 10310 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[95]= new Array();
 choices[95][0] = "300 MB/s.";
 choices[95][1] = "900 MB/s.";
 choices[95][2] = "600 MB/s.";
 choices[95][3] = "150 MB/s.";
 answers[95] = choices[95][2];
 units[95] = "48";
 comments[95] = "Id Pregunta: 10310. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10373 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  El ataque criptogr&aacute;fico llamado &quot;birthday attack&quot; est&aacute; basado en la paradoja del cumplea&ntilde;os. &iquest;Cu&aacute;l es su objetivo?";
 choices[96]= new Array();
 choices[96][0] = "Capturar pares de claves de funciones resumen (hash) con el mismo resultado, ya que es estad&iacute;sticamente m&aacute;s probable el ataque probando de dos en dos.";
 choices[96][1] = "Robar la clave privada del dni electr&oacute;nico del usuario cuando est&aacute; realizando alguna gesti&oacute;n con el mismo, ya que se extrae dicha clave conociendo parte de la informaci&oacute;n contenida, como la fecha de nacimiento del sujeto.";
 choices[96][2] = "Averiguar la clave de acceso al facebook de un usuario sabiendo cu&aacute;ndo cumple a&ntilde;os ya que la gente es muy descuidada y usa esa informaci&oacute;n como pregunta secreta.";
 choices[96][3] = "Encontrar una clave en toda las aplicaciones que usa generalmente un usuario (correo, facebook, twitter, etc.) que coincida con su fecha de cumplea&ntilde;os y a partir de ah&iacute; hacerse con el resto de contrase&ntilde;as.";
 answers[96] = choices[96][0];
 units[96] = "72";
 comments[96] = "Id Pregunta: 10373. ";


//  Id pregunta: 10433 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios? ";
 choices[97]= new Array();
 choices[97][0] = "CREATE VIEW.";
 choices[97][1] = "GRANT.";
 choices[97][2] = "CREATE PROFILE.";
 choices[97][3] = "CREATE ROLE.";
 answers[97] = choices[97][0];
 units[97] = "58";
 comments[97] = "Id Pregunta: 10433. Examen TIC A1 2013";


//  Id pregunta: 10508 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En la arquitectura X.400, &iquest;cual es el protocolo de comunicaci&oacute;n entre los Agentes de Usuario y el Repositorio de Mensajes?";
 choices[98]= new Array();
 choices[98][0] = "P2";
 choices[98][1] = "P7";
 choices[98][2] = "P3";
 choices[98][3] = "P1";
 answers[98] = choices[98][1];
 units[98] = "106";
 comments[98] = "Id Pregunta: 10508. http://www.x400.org/US/X400_Protocols.htm";


//  Id pregunta: 10564 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Para desarrollar un plan de continuidad de negocio de &eacute;xito es fundamental  la participaci&oacute;n del usuario final durante el proceso de: ";
 choices[99]= new Array();
 choices[99][0] = "Estrategias de recuperaci&oacute;n";
 choices[99][1] = "Desarrollo del plan detallado";
 choices[99][2] = "An&aacute;lisis de impacto al negocio (BIA)";
 choices[99][3] = "Mantenimiento y pruebas";
 answers[99] = choices[99][2];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10564. Durante el BIA se debe entender y conocer las necesidades del negocio, sus operaciones y el impacto en el negocio ante un desastre";


