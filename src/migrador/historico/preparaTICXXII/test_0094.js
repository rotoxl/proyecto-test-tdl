/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 238 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  En un An&aacute;lisis de Criticidad los elementos cr&iacute;ticos de un Sistema se clasifican seg&uacute;n:";
 choices[0]= new Array();
 choices[0][0] = "La probabilidad de mal funcionamiento de uno de ellos";
 choices[0][1] = "La estimaci&oacute;n de los costes de los da&ntilde;os derivados de su mal funcionamiento";
 choices[0][2] = "El tiempo durante el cu&aacute;l se puede asumir su carencia o mal funcionamiento";
 choices[0][3] = "El n&uacute;mero de elementos alternativos a cada elemento cr&iacute;tico";
 answers[0] = choices[0][2];
 units[0] = "33";
 comments[0] = "Id Pregunta: 238. ";


//  Id pregunta: 519 Año de creación de pregunta: 2004-01-01
 questions[1]= "2)  Si se estima en un 20% la probabilidad de un incidente que provoca una p&eacute;rdida de 10.000 euros, se est&aacute; hablando de:";
 choices[1]= new Array();
 choices[1][0] = "Un riesgo";
 choices[1][1] = "Un impacto";
 choices[1][2] = "Ninguna de las anteriores";
 choices[1][3] = "a ) y b)";
 answers[1] = choices[1][3];
 units[1] = "31, 32, 33";
 comments[1] = "Id Pregunta: 519. Auditor&iacute;a Inform&aacute;tica ";


//  Id pregunta: 571 Año de creación de pregunta: 2006-01-01
 questions[2]= "3)   Stephen P. Robbins aport&oacute; a los sistemas de informaci&oacute;n";
 choices[2]= new Array();
 choices[2][0] = "Algoritmos de ordenaci&oacute;n num&eacute;rica";
 choices[2][1] = "Una m&eacute;todo de  de gesti&oacute;n de colas";
 choices[2][2] = "Estudios sobre planificaci&oacute;n estrat&eacute;gica";
 choices[2][3] = "Un m&eacute;todo de planificaci&oacute;n de procesos";
 answers[2] = choices[2][2];
 units[2] = "23";
 comments[2] = "Id Pregunta: 571. ";


//  Id pregunta: 595 Año de creación de pregunta: 2006-01-01
 questions[3]= "4)  Los ficheros de titularidad p&uacute;blica se encuentran regulados en:";
 choices[3]= new Array();
 choices[3][0] = "En el cap&iacute;tulo I del T&iacute;tulo IV de la LOPD";
 choices[3][1] = "En el cap&iacute;tulo II del T&iacute;tulo IV de la LOPD";
 choices[3][2] = "En el cap&iacute;tulo I del T&iacute;tulo VI de la LOPD";
 choices[3][3] = "En el cap&iacute;tulo II del T&iacute;tulo VI de la LOPD";
 answers[3] = choices[3][0];
 units[3] = "29";
 comments[3] = "Id Pregunta: 595. ";


//  Id pregunta: 636 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  Respecto a los tipos de m&eacute;todos para analizar la rentabilidad de las inversiones, la respuesta correcta es:";
 choices[4]= new Array();
 choices[4][0] = "Se clasifican en m&eacute;todos tangibles e intangibles.";
 choices[4][1] = "Se clasifican en m&eacute;todos anal&iacute;ticos y cualitativos.";
 choices[4][2] = "Los m&eacute;todos din&aacute;micos tienen en cuenta la inflaci&oacute;n, y los m&eacute;todos est&aacute;ticos no.";
 choices[4][3] = "Los m&eacute;todos din&aacute;micos son los que tienen en cuenta el cambio de valor del dinero con el tiempo.";
 answers[4] = choices[4][3];
 units[4] = "38";
 comments[4] = "Id Pregunta: 636. ";


//  Id pregunta: 663 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments):";
 choices[5]= new Array();
 choices[5][0] = "X/OPEN";
 choices[5][1] = "ACE";
 choices[5][2] = "OSF";
 choices[5][3] = "IEEE";
 answers[5] = choices[5][3];
 units[5] = "40";
 comments[5] = "Id Pregunta: 663. ";


//  Id pregunta: 844 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre un proyecto GIS es cierta?:";
 choices[6]= new Array();
 choices[6][0] = "La digitalizaci&oacute;n de una cartograf&iacute;a existente es cara por lo laborioso del proceso de digitalizaci&oacute;n ya que requiere mucho trabajo manual de depuraci&oacute;n y correcci&oacute;n.";
 choices[6][1] = "Mientras el coste del uso de los sat&eacute;lites de posici&oacute;n no baje, la obtenci&oacute;n de datos mediante itinerarios con GPS siempre presenta una relaci&oacute;n coste/calidad inaceptable.";
 choices[6][2] = "El procesado de im&aacute;genes de sat&eacute;lite es complicado puesto que la informaci&oacute;n r&aacute;ster no puede ser vectorizada.";
 choices[6][3] = "La fotogrametr&iacute;a es una opci&oacute;n viable s&oacute;lo cuando no existan otros m&eacute;todos (trazado por GPS, procesado de im&aacute;genes de sat&eacute;lite, digitalizaci&oacute;n de cartograf&iacute;as existentes) por lo elevado de su coste.";
 answers[6] = choices[6][0];
 units[6] = "67";
 comments[6] = "Id Pregunta: 844. ";


//  Id pregunta: 845 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes alternativas indica los tres tipos de informaci&oacute;n manejados por un Sistema de Informaci&oacute;n Geogr&aacute;fica (SIG) en el caso m&aacute;s general?:";
 choices[7]= new Array();
 choices[7][0] = "Topol&oacute;gica, vectorial y r&aacute;ster.";
 choices[7][1] = "Posicional, temporal y tem&aacute;tica.";
 choices[7][2] = "Topol&oacute;gica, tem&aacute;tica y posicional.";
 choices[7][3] = "Posicional, r&aacute;ster y topol&oacute;gica.";
 answers[7] = choices[7][2];
 units[7] = "67";
 comments[7] = "Id Pregunta: 845. ";


//  Id pregunta: 885 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l es la diferencia de los comandos del sistema, tales como la orden de listado de directorio (dir &oacute; ls) en MSDOS y LINUX?:";
 choices[8]= new Array();
 choices[8][0] = "En MSDOS, los programas del sistema estaban contenidos en el nucleo, y en LINUX son archivos ejecutables";
 choices[8][1] = "En LINUX, los programas del sistema estan contenidos en el nucleo, y en MSDOS eran archivos ejecutables";
 choices[8][2] = "No existe diferencia, salvo de nombre en esos programas";
 choices[8][3] = "Todas son falsas";
 answers[8] = choices[8][0];
 units[8] = "54";
 comments[8] = "Id Pregunta: 885. ";


//  Id pregunta: 978 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  De las siguientes afirmaciones, indique la correcta respecto a los lenguajes procedimentales:";
 choices[9]= new Array();
 choices[9][0] = "En un lenguaje procedimental, se indica c&oacute;mo hay que realizar la acci&oacute;n";
 choices[9][1] = "En un lenguaje procedimental, se indica que resultado se quiere obtener";
 choices[9][2] = "Los lenguajes procedimentales son lenguajes de cuarta generaci&oacute;n";
 choices[9][3] = "Es cierto &lsquo;a&rsquo; y &lsquo;c&rsquo;";
 answers[9] = choices[9][0];
 units[9] = "63";
 comments[9] = "Id Pregunta: 978. ";


//  Id pregunta: 1187 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indicar la respuesta incorrecta sobre los sistemas expertos en inteligencia artificial:";
 choices[10]= new Array();
 choices[10][0] = "La caracter&iacute;stica diferencial de los sistemas expertos es la ubicaci&oacute;n externa del conocimiento necesario para resolver un problema, que aparece como estructura procesable separada de los procedimientos que la manipulan";
 choices[10][1] = "Un entorno es b&aacute;sicamente un lenguaje m&aacute;s un conjunto de procedimientos hechos como ayuda a la construcci&oacute;n de sistemas expertos";
 choices[10][2] = "Una shell es b&aacute;sicamente un sistema experto con la base de conocimiento vac&iacute;a; es decir, la arquitectura del sistema final est&aacute; preestablecida";
 choices[10][3] = "Los lenguajes utilizados en la construcci&oacute;n de sistemas expertos son principalmente lenguajes orientados a la inteligencia artificial como el LISP o el PROLOG y lenguajes convencionales de prop&oacute;sito general tales como el C, FORTRAN, PASCAL, etc";
 answers[10] = choices[10][3];
 units[10] = "64";
 comments[10] = "Id Pregunta: 1187. ";


//  Id pregunta: 1282 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Los sem&aacute;foros son una t&eacute;cnica de comunicaci&oacute;n entre procesos para:";
 choices[11]= new Array();
 choices[11][0] = "Evitar los bloqueos";
 choices[11][1] = "Ejecutar threads";
 choices[11][2] = "Permitir la exclusi&oacute;n mutua";
 choices[11][3] = "Comunicar procesos en sistemas distribuidos";
 answers[11] = choices[11][2];
 units[11] = "50";
 comments[11] = "Id Pregunta: 1282. ";


//  Id pregunta: 1468 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  La ley de Fitt, en el contexto del dise&ntilde;o de interfaces de usuario, nos dice que:";
 choices[12]= new Array();
 choices[12][0] = "si algo del interfaz puede dise&ntilde;arse mal, se dise&ntilde;ar&aacute; mal y el usuario lo rechazar&aacute;";
 choices[12][1] = "con el 20% del trabajo se realiza el 80% de la interfaz";
 choices[12][2] = "con el 80% del dise&ntilde;o se ocupa el 20% del trabajo";
 choices[12][3] = "el tiempo en localizar un objetivo visual en el interfaz es una funci&oacute;n de la distancia y el tama&ntilde;o del objetivo";
 answers[12] = choices[12][3];
 units[12] = "52";
 comments[12] = "Id Pregunta: 1468. ";


//  Id pregunta: 1477 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Se dice que el conjunto de instrucciones que ejecuta un procesador deber ser completo, es decir:";
 choices[13]= new Array();
 choices[13][0] = "Debe contener un gran n&uacute;mero de instrucciones";
 choices[13][1] = "Debe ser un conjunto de instrucciones muy potentes";
 choices[13][2] = "Debe permitir calcular cualquier tarea computable en un tiempo finito";
 choices[13][3] = "Debe realizar c&aacute;lculos a altas velocidades";
 answers[13] = choices[13][2];
 units[13] = "56";
 comments[13] = "Id Pregunta: 1477. ";


//  Id pregunta: 1502 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  La utilidad &quot;ping&quot;:";
 choices[14]= new Array();
 choices[14][0] = "Se basa en los comandos &quot;echo request&quot; y &quot;echo reply&quot; del protocolo ICMP";
 choices[14][1] = "Se basa en el protocolo PING";
 choices[14][2] = "Se basa en el protocolo UDP";
 choices[14][3] = "Se basa en el protocolo TCP";
 answers[14] = choices[14][0];
 units[14] = "52,55";
 comments[14] = "Id Pregunta: 1502. ";


//  Id pregunta: 1567 Año de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l no es una caracter&iacute;stica esencial del Datawarehouse?";
 choices[15]= new Array();
 choices[15][0] = "Orientado por temas";
 choices[15][1] = "Independiente del tiempo";
 choices[15][2] = " No vol&aacute;til";
 choices[15][3] = "Integrado";
 answers[15] = choices[15][1];
 units[15] = "71";
 comments[15] = "Id Pregunta: 1567. ";


//  Id pregunta: 1648 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes afirmaciones de proyectos java open source es correcta?";
 choices[16]= new Array();
 choices[16][0] = "JBoss es un contenedor de servlets y Tomcat es un servidor de aplicaciones";
 choices[16][1] = "Struts es un framework de programaci&oacute;n orientada a aspectos";
 choices[16][2] = "Lucene es un motor de b&uacute;squeda";
 choices[16][3] = "Ninguna de las anteriores es cierta";
 answers[16] = choices[16][2];
 units[16] = "62";
 comments[16] = "Id Pregunta: 1648. ";


//  Id pregunta: 1889 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[17]= new Array();
 choices[17][0] = "El esquema de copias de seguridad &quot;abuelo-padre-hijo&quot; requiere almacenar un m&aacute;ximo de 23 copias.";
 choices[17][1] = "RAID-5 tiene un buen rendimiento de lectura y escritura.";
 choices[17][2] = "Para vol&uacute;menes reflejados se requiere un m&iacute;nimo de 3 discos duros.";
 choices[17][3] = "Todas son correctas";
 answers[17] = choices[17][0];
 units[17] = "97";
 comments[17] = "Id Pregunta: 1889. ";


//  Id pregunta: 1907 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  El elemento del DNI que no permite por si solo autenticar a una persona es";
 choices[18]= new Array();
 choices[18][0] = "El nombre";
 choices[18][1] = "La foto";
 choices[18][2] = "La firma";
 choices[18][3] = "La huella dactilar";
 answers[18] = choices[18][0];
 units[18] = "74";
 comments[18] = "Id Pregunta: 1907. ";


//  Id pregunta: 2028 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes lenguajes no es orientado a objetos?";
 choices[19]= new Array();
 choices[19][0] = "C.";
 choices[19][1] = "Smalltalk.";
 choices[19][2] = "Eiffel.";
 choices[19][3] = "ACTOR.";
 answers[19] = choices[19][0];
 units[19] = "82,84";
 comments[19] = "Id Pregunta: 2028. Similar a examen TIC SS A 2003";


//  Id pregunta: 2132 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera respecto a las m&eacute;tricas de calidad del software?:";
 choices[20]= new Array();
 choices[20][0] = "COCOMO es un modelo de estimaci&oacute;n del software que se basa en el n&uacute;mero de instrucciones de c&oacute;digo fuente";
 choices[20][1] = "La m&eacute;trica de complejidad del software conocida como de los puntos de funci&oacute;n se obtiene utilizando una relaci&oacute;n emp&iacute;rica basada en medidas del dominio de informaci&oacute;n y en valoraciones subjetivas";
 choices[20][2] = "La t&eacute;cnica de Halstead sirve para medir la complejidad de un desarrollo bas&aacute;ndose en su 'longitud', su 'vocabulario' y su 'volumen', que se obtienen mediante ciertas ecuaciones que utilizan el n&uacute;mero de operadores y operandos del desarrollo";
 choices[20][3] = "Son ciertas todas las anteriores";
 answers[20] = choices[20][3];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2132. ";


//  Id pregunta: 2135 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la m&aacute;s importante para un buen analista?:";
 choices[21]= new Array();
 choices[21][0] = "Capacidad de comprensi&oacute;n de conceptos abstractos";
 choices[21][1] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[21][2] = "Habilidad para evitar que 'los &aacute;rboles no dejen ver el bosque'";
 choices[21][3] = "Habilidad para relacionar aplicaciones hardware/software en el entorno usuario";
 answers[21] = choices[21][2];
 units[21] = "80";
 comments[21] = "Id Pregunta: 2135. ";


//  Id pregunta: 2153 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es un instrumento de control contemplado por el Plan General de Garant&iacute;a de Calidad?:";
 choices[22]= new Array();
 choices[22][0] = "Revisiones t&eacute;cnicas formales";
 choices[22][1] = "Guiones de recomendaciones";
 choices[22][2] = "Listas de control";
 choices[22][3] = "Las tres anteriores son instrumentos de control contemplados por el PGGC";
 answers[22] = choices[22][0];
 units[22] = "88";
 comments[22] = "Id Pregunta: 2153. ";


//  Id pregunta: 2286 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  El modelo de UML que describe las necesidades de los usuarios es el:";
 choices[23]= new Array();
 choices[23][0] = "modelo de casos de uso";
 choices[23][1] = "modelo de despliegue";
 choices[23][2] = "modelo de interacci&oacute;n";
 choices[23][3] = "modelo de realizaci&oacute;n";
 answers[23] = choices[23][0];
 units[23] = "82";
 comments[23] = "Id Pregunta: 2286. ";


//  Id pregunta: 2454 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los criterios, ordenados de menor a mayor, para definir el nivel de cohesi&oacute;n son:";
 choices[24]= new Array();
 choices[24][0] = "Cohesi&oacute;n coincidental, cohesi&oacute;n temporal, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n procedimental, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[24][1] = "Cohesi&oacute;n coincidental, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n temporal, cohesi&oacute;n procedimental, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[24][2] = "Cohesi&oacute;n coincidental, cohesi&oacute;n temporal, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n procedimental, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[24][3] = "Cohesi&oacute;n coincidental, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n temporal, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n procedimental, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 answers[24] = choices[24][1];
 units[24] = "84";
 comments[24] = "Id Pregunta: 2454. ";


//  Id pregunta: 2527 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  En inform&aacute;tica, el t&eacute;rmino de recuperaci&oacute;n en texto libre se utiliza para describir:";
 choices[25]= new Array();
 choices[25][0] = "La recuperaci&oacute;n en un base de datos que posee &iacute;ndices asociados";
 choices[25][1] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro, y donde cada palabra del texto es indexada";
 choices[25][2] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro y carece de &iacute;ndices";
 choices[25][3] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro, y donde cada palabra del texto es indexada, a excepci&oacute;n de las contenidas en el diccionario de palabras vac&iacute;as";
 answers[25] = choices[25][3];
 units[25] = "96";
 comments[25] = "Id Pregunta: 2527. ";


//  Id pregunta: 2544 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Los m&eacute;todos de recuperaci&oacute;n de informaci&oacute;n se basan fundamentalmente en:";
 choices[26]= new Array();
 choices[26][0] = "Manipulaci&oacute;n de vol&uacute;menes de informaci&oacute;n muy peque&ntilde;os";
 choices[26][1] = "Identificaci&oacute;n de claves (palabras, fragmentos o frases) y su b&uacute;squeda en la base de informaci&oacute;n o ficheros auxiliares";
 choices[26][2] = "Tratamiento de informaci&oacute;n mediante sistemas hipertexto";
 choices[26][3] = "Grabaci&oacute;n y recuperaci&oacute;n de im&aacute;genes";
 answers[26] = choices[26][1];
 units[26] = "96";
 comments[26] = "Id Pregunta: 2544. ";


//  Id pregunta: 2625 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;ntas variables explicativas adicionales (o drivers) existen en cocomo II?";
 choices[27]= new Array();
 choices[27][0] = "15";
 choices[27][1] = "17";
 choices[27][2] = "22";
 choices[27][3] = "10";
 answers[27] = choices[27][1];
 units[27] = "89";
 comments[27] = "Id Pregunta: 2625. ";


//  Id pregunta: 2709 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  Un sistema de gesti&oacute;n de contenidos intenta mejorar una situaci&oacute;n previa en la que:";
 choices[28]= new Array();
 choices[28][0] = "Hay un buscador no eficiente. Los &iacute;ndices no est&aacute;n suficientemente actualizados y en algunos servidores ni siquiera se dispone de la posibilidad de b&uacute;squeda.";
 choices[28][1] = "Aunque escasean los expertos inform&aacute;ticos los procesos de edici&oacute;n, validaci&oacute;n y actualizaci&oacute;n son &aacute;giles.";
 choices[28][2] = "Varios servidores web integrados dentro del portal corporativo est&aacute;n en la misma m&aacute;quina pero con URL diferentes.";
 choices[28][3] = "Contenidos personalizados en funci&oacute;n de distintos perfiles o intereses de los usuarios.";
 answers[28] = choices[28][0];
 units[28] = "95";
 comments[28] = "Id Pregunta: 2709. ";


//  Id pregunta: 2786 Año de creación de pregunta: 2006-01-01
 questions[29]= "30)  La Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n M&Eacute;TRICA 3, tiene por objeto:";
 choices[29]= new Array();
 choices[29][0] = "Obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que respondan a los objetivos estrat&eacute;gicos y operativos de la organizaci&oacute;n.";
 choices[29][1] = "Recoger el conjunto de reglas que aseguran una decisi&oacute;n &oacute;ptima en cada momento.";
 choices[29][2] = "La previsi&oacute;n en fechas de la realizaci&oacute;n del conjunto de actividades que comprende la construcci&oacute;n del sistema, teniendo en cuenta los recursos a emplear y el coste de los mismos.";
 choices[29][3] = "Todo lo anterior.";
 answers[29] = choices[29][0];
 units[29] = "86";
 comments[29] = "Id Pregunta: 2786. ";


//  Id pregunta: 2794 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  Seg&uacute;n m&eacute;trica v3, cu&aacute;l de los siguientes productos, resultantes de la fase de An&aacute;lisis del sistema, es propio s&oacute;lo del an&aacute;lisis estructurado";
 choices[30]= new Array();
 choices[30][0] = "Descripci&oacute;n general del entorno tecnol&oacute;gico";
 choices[30][1] = "Especificaci&oacute;n de interfaz de usuario";
 choices[30][2] = "Plan de migraci&oacute;n y carga inicial de datos";
 choices[30][3] = "Descripci&oacute;n de subsistemas de an&aacute;lisis.";
 answers[30] = choices[30][2];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2794. ";


//  Id pregunta: 2828 Año de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes no es un criterio para abordar un proceso de ajuste dimensional?";
 choices[31]= new Array();
 choices[31][0] = "Interconectividad.";
 choices[31][1] = "Seguridad.";
 choices[31][2] = "Grado de conocimiento de los usuarios finales.";
 choices[31][3] = "Reducci&oacute;n del presupuesto.";
 answers[31] = choices[31][3];
 units[31] = "90";
 comments[31] = "Id Pregunta: 2828. ";


//  Id pregunta: 2957 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  Dada la direcci&oacute;n IP 00001010.00000001.10000001.10000001 con m&aacute;scara de subred 11111111.11111111.11111111.11000000. Indique cu&aacute;l es, en binario, la direcci&oacute;n IP resultante de aplicar la operaci&oacute;n l&oacute;gica correspondiente entre ambas para calcular la subred ";
 choices[32]= new Array();
 choices[32][0] = "00001010.00000001.10000001.10000000";
 choices[32][1] = "00001010.00000001.10000001.00000000";
 choices[32][2] = "00001010.00000001.00000000.00000001";
 choices[32][3] = "00001010.00000001.10000001.11000000";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 2957. Examen TIC MAP B 2004";


//  Id pregunta: 3079 Año de creación de pregunta: 2005-01-01
 questions[33]= "34)  La inundaci&oacute;n de un buz&oacute;n de correo electr&oacute;nico con un gran n&uacute;mero de mensajes (e-mail spamming) afecta a:";
 choices[33]= new Array();
 choices[33][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[33][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[33][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[33][3] = "Las respuestas &lsquo;c&rsquo; y &lsquo;d&rsquo; son correctas";
 answers[33] = choices[33][1];
 units[33] = "111";
 comments[33] = "Id Pregunta: 3079. ";


//  Id pregunta: 3267 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;En qu&eacute; consiste el denominado MAC - Control de acceso al medio?:";
 choices[34]= new Array();
 choices[34][0] = "Es el protocolo de aplicaciones usado en redes punto a punto";
 choices[34][1] = "Es un mecanismo de seguridad en redes de comunicaciones para controlar el acceso a la informaci&oacute;n";
 choices[34][2] = "Es un subnivel del nivel de enlace de datos encargado de regular el acceso al medio de transmisi&oacute;n";
 choices[34][3] = "Es el mecanismo de transmisi&oacute;n espec&iacute;fico de las redes Ethernet";
 answers[34] = choices[34][2];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3267. ";


//  Id pregunta: 3328 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[35]= new Array();
 choices[35][0] = "applet";
 choices[35][1] = "cookie";
 choices[35][2] = "socket";
 choices[35][3] = "control activeX";
 answers[35] = choices[35][1];
 units[35] = "113";
 comments[35] = "Id Pregunta: 3328. ";


//  Id pregunta: 3343 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Con voz sobre IP:";
 choices[36]= new Array();
 choices[36][0] = "Se alcanza la misma calidad que con llamadas telef&oacute;nicas convencionales";
 choices[36][1] = "Se pueden realizar llamadas internacionales al mismo precio que una llamada local, el precio de la conexi&oacute;n con el nodo de acceso a Internet";
 choices[36][2] = "Las 2 respuestas anteriores son correctas";
 choices[36][3] = "Las 2 respuestas anteriores son falsas";
 answers[36] = choices[36][2];
 units[36] = "112";
 comments[36] = "Id Pregunta: 3343. *";


//  Id pregunta: 3399 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  El orden consecutivo de las capas definidas en OSI, es:";
 choices[37]= new Array();
 choices[37][0] = "F&iacute;sico, enlace, red, transporte, presentaci&oacute;n y aplicaci&oacute;n";
 choices[37][1] = "F&iacute;sico, enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[37][2] = "F&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[37][3] = "Enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 answers[37] = choices[37][2];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3399. ";


//  Id pregunta: 3412 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  Funciones t&iacute;picas del nivel de sesi&oacute;n son:";
 choices[38]= new Array();
 choices[38][0] = "sincronizaci&oacute;n y control del testigo de datos";
 choices[38][1] = "presentaci&oacute;n y criptograf&iacute;a";
 choices[38][2] = "control de flujo y errores";
 choices[38][3] = "todas las anteriores";
 answers[38] = choices[38][0];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3412. ";


//  Id pregunta: 3421 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Indicar cu&aacute;l de los siguientes equipos no deber&iacute;a colocarse en una DMZ:";
 choices[39]= new Array();
 choices[39][0] = "Bastion host";
 choices[39][1] = "Servidor Web";
 choices[39][2] = "Servidor FTP";
 choices[39][3] = "Servidor de aplicaciones";
 answers[39] = choices[39][3];
 units[39] = "113";
 comments[39] = "Id Pregunta: 3421. ";


//  Id pregunta: 3486 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  En ATM , &iquest;Qu&eacute; tipo de AAL (ATM Adaptation Layer) es el principal para datos, y juega un papel importante en emulaci&oacute;n de LAN?:";
 choices[40]= new Array();
 choices[40][0] = "AAL 1";
 choices[40][1] = "AAL 2";
 choices[40][2] = "AAL 3/4";
 choices[40][3] = "AAL 5";
 answers[40] = choices[40][3];
 units[40] = "109";
 comments[40] = "Id Pregunta: 3486. ";


//  Id pregunta: 3947 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  En el modelo OSI de ISO indicar cu&aacute;l de los siguientes p&aacute;rrafos describe el nivel de Sesi&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Proporciona el control de di&aacute;logo, con el fin de mantener un registro en la parte que est&aacute; hablando en cierto momento y proporciona facilidades en la sincronizaci&oacute;n";
 choices[41][1] = "Es una colecci&oacute;n de varios protocolos para actividades comunes, como el correo electr&oacute;nico, la transferencia de archivos y la conexi&oacute;n entre terminales remotos a las computadoras en una red";
 choices[41][2] = "Es la que se encarga de la elecci&oacute;n de la mejor ruta, conectando con orientaci&oacute;n a conexi&oacute;n o sin ella";
 choices[41][3] = "Es la que se encarga de los mecanismos de detecci&oacute;n y correcci&oacute;n de errores";
 answers[41] = choices[41][0];
 units[41] = "100";
 comments[41] = "Id Pregunta: 3947. ";


//  Id pregunta: 4153 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Especificaci&oacute;n industrial que describe como m&oacute;viles, ordenadores y PDAs pueden interconectarse entre s&iacute; usando una conexi&oacute;n inal&aacute;mbrica de corta distancia";
 choices[42]= new Array();
 choices[42][0] = "Bluetooth";
 choices[42][1] = "EMI";
 choices[42][2] = "Wimax";
 choices[42][3] = "IrDA";
 answers[42] = choices[42][0];
 units[42] = "107";
 comments[42] = "Id Pregunta: 4153. ";


//  Id pregunta: 4185 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Para transmitir Gigabit Ethernet";
 choices[43]= new Array();
 choices[43][0] = "Es necesario un cableado de categoria 6";
 choices[43][1] = "Es necesaria fibra &oacute;ptica";
 choices[43][2] = "Se puede usar cable coaxial";
 choices[43][3] = "ninguna de las anteriores";
 answers[43] = choices[43][3];
 units[43] = "99";
 comments[43] = "Id Pregunta: 4185. ";


//  Id pregunta: 4291 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Un Jefe de Proyecto ha elaborado un borrador del Plan de Gesti&oacute;n de un proyecto de software. &iquest;Cu&aacute;les de los siguientes elementos deben ser tratados en ese plan? I) Calendario. II) Presupuesto. III) Requisitos del software. IV) Personal.";
 choices[44]= new Array();
 choices[44][0] = "I, III y IV.";
 choices[44][1] = "I, II y III.";
 choices[44][2] = "I, II y IV.";
 choices[44][3] = "I, II, III y IV.";
 answers[44] = choices[44][2];
 units[44] = "77";
 comments[44] = "Id Pregunta: 4291. ";


//  Id pregunta: 4337 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  Ana es responsable de comunicaciones en una entidad p&uacute;blica. La entidad dispone de una LAN con conmutadores (switch) 100Base-TX, con varios puertos libres (no usados) cada uno. El pr&oacute;ximo despliegue de una nueva aplicaci&oacute;n va a incrementar considerablemente el tr&aacute;fico, superando con mucho la capacidad de la infraestructura actual. La soluci&oacute;n m&aacute;s eficiente para cubrir las demandas de la nueva aplicaci&oacute;n, de entre las que se citan a continuaci&oacute;n, ser&aacute;:";
 choices[45]= new Array();
 choices[45][0] = "Desplegar una nueva infraestructura de fibra &oacute;ptica de 1Gb 1000Base-SX.";
 choices[45][1] = "Desplegar una nueva infraestructura de fibra &oacute;ptica de 10Gb 10Gbase-SR/SW.";
 choices[45][2] = "Implantar una red WiFi 802.11.";
 choices[45][3] = "Tender nuevas l&iacute;neas 100Base-TX entre los puertos libres de los conmutadores.";
 answers[45] = choices[45][3];
 units[45] = "100";
 comments[45] = "Id Pregunta: 4337. ";


//  Id pregunta: 4388 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  Un conjunto de dispositivos o especificaciones que act&uacute;a como intermediario entre una m&aacute;quina y un ser humano para proporcionarle a este la mejor adaptaci&oacute;n posible ante los mecanismos de entrada y salida de la m&aacute;quina es:";
 choices[46]= new Array();
 choices[46][0] = "Un sistema operativo.";
 choices[46][1] = "Una pasarela o gateway.";
 choices[46][2] = "Una interfaz de usuario.";
 choices[46][3] = "El middleware.";
 answers[46] = choices[46][2];
 units[46] = "55";
 comments[46] = "Id Pregunta: 4388. ";


//  Id pregunta: 4479 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  En Ia tarea EVS 4.1: Preselecci&oacute;n de Alternativas de soluci&oacute;n, correspondiente al Estudio de Viabilidad del Sistema (Proceso EVS), definido en m&eacute;trica V3 &iquest;cual de las siguientes t&eacute;cnicas y practicas es la que se recomienda?";
 choices[47]= new Array();
 choices[47][0] = "Casos de uso";
 choices[47][1] = "Diagrama de Flujo de Datos";
 choices[47][2] = "Diagrama de Clases";
 choices[47][3] = "Diagrama de Representaci&oacute;n";
 answers[47] = choices[47][3];
 units[47] = "86";
 comments[47] = "Id Pregunta: 4479. ";


//  Id pregunta: 4566 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cual de los siguientes es el sistema de archivos de encriptaci&oacute;n para NTFS?";
 choices[48]= new Array();
 choices[48][0] = "SEE.";
 choices[48][1] = "SCF.";
 choices[48][2] = "EFS.";
 choices[48][3] = "no existe tal sistema de archivos.";
 answers[48] = choices[48][2];
 units[48] = "56";
 comments[48] = "Id Pregunta: 4566. ";


//  Id pregunta: 4611 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Seg&uacute;n la Norma UNE-ISO/IEC 17799:2000 cual de los siguientes aspectos NO esta incluido en el control de accesos";
 choices[49]= new Array();
 choices[49][0] = "seguridad de los servicios de red";
 choices[49][1] = "sincronizaci&oacute;n de relojes";
 choices[49][2] = "responsabilidades del usuario";
 choices[49][3] = "control de acceso a la librer&iacute;a de programa as fuente";
 answers[49] = choices[49][3];
 units[49] = "33";
 comments[49] = "Id Pregunta: 4611. ISO 17799 actualmente es ISO 27002";


//  Id pregunta: 4772 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Se&ntilde;ale la respuesta correcta sobre la Ley 9/2014 General de Telecomunicaciones";
 choices[50]= new Array();
 choices[50][0] = "El objetivo de esta Ley es la regulaci&oacute;n de las telecomunicaciones, que comprenden la explotaci&oacute;n de las redes y la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas y los recursos asociados";
 choices[50][1] = "Se excluye del &aacute;mbito de esta Ley la regulaci&oacute;n de los servicios de telecomunicaciones para la defensa nacional y la protecci&oacute;n civil.";
 choices[50][2] = "Las telecomunicaciones tienen la consideraci&oacute;n de servicio p&uacute;blico y se prestan en r&eacute;gimen de libre competencia";
 choices[50][3] = "La Ley regula tanto el sector de las telecomunicaciones como el de los contenidos audiovisuales";
 answers[50] = choices[50][0];
 units[50] = "110";
 comments[50] = "Id Pregunta: 4772. ";


//  Id pregunta: 4983 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  Los certificados electr&oacute;nicos reconocidos incorporados al Documento Nacional de Identidad tendr&aacute;n, deacuerdo con el Real Decreto 1533/2005, de 23 de diciembre, por la que se regula la expedici&oacute;n del DNI y suscertificados de firma electr&oacute;nica, un periodo de vigencia de:";
 choices[51]= new Array();
 choices[51][0] = "4 a&ntilde;os.";
 choices[51][1] = "24 meses.";
 choices[51][2] = "3 a&ntilde;os.";
 choices[51][3] = "30 meses.";
 answers[51] = choices[51][3];
 units[51] = "30";
 comments[51] = "Id Pregunta: 4983. Examen TIC B 2007";


//  Id pregunta: 5095 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, un certificado reconocido cumple con los siguientes requisitos, excepto:";
 choices[52]= new Array();
 choices[52][0] = "El programa inform&aacute;tico utilizado por el proveedor de servicios de certificaci&oacute;n para la prestaci&oacute;n de servicios de firma electr&oacute;nica";
 choices[52][1] = "La indicaci&oacute;n de que el certificado se expide como certificado reconocido";
 choices[52][2] = "Los datos de verificaci&oacute;n de firma que correspondan a los datos de creaci&oacute;nde firma bajo control del firmante";
 choices[52][3] = "El nombre y los apellidos del firmante o un seud&oacute;nimo que conste como tal";
 answers[52] = choices[52][0];
 units[52] = "30";
 comments[52] = "Id Pregunta: 5095. ";


//  Id pregunta: 5126 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes formatos gr&aacute;ficos soporta internamente datos de georeferenciaci&oacute;n?";
 choices[53]= new Array();
 choices[53][0] = ".jpeg.";
 choices[53][1] = ".tiff.";
 choices[53][2] = ".png.";
 choices[53][3] = ".bmp.";
 answers[53] = choices[53][1];
 units[53] = "67";
 comments[53] = "Id Pregunta: 5126. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5175 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Respecto a los organismos y procesos de normalizaci&oacute;n podemos afirmar:";
 choices[54]= new Array();
 choices[54][0] = "La adopci&oacute;n de las normas internacionales elaboradas en ISO e EIC es obligatoria para los pa&iacute;ses miembros de la UE.";
 choices[54][1] = "Los organismos europeos de normalizaci&oacute;n obligan a sus miembros a adoptar las normas europeas que ellos elaboren.";
 choices[54][2] = "AENOR es una entidad p&uacute;blica empresarial dependiente del Ministerio de Industria.";
 choices[54][3] = "Las normas publicadas por AENOR se conocen como normas IEC.";
 answers[54] = choices[54][1];
 units[54] = "42";
 comments[54] = "Id Pregunta: 5175. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5288 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  En una comparativa de UMTS frente a GSM, no es cierto que:";
 choices[55]= new Array();
 choices[55][0] = "UMTS utiliza frecuencias m&aacute;s elevadas";
 choices[55][1] = "En UMTS se producen menores p&eacute;rdidas de propagaci&oacute;n";
 choices[55][2] = "En UMTS el tama&ntilde;o de las c&eacute;lulas puede ser inferior";
 choices[55][3] = "La capacidad de una portadora de W-CDMA es mayor que la de una portadora GSM";
 answers[55] = choices[55][1];
 units[55] = "108";
 comments[55] = "Id Pregunta: 5288. ";


//  Id pregunta: 5479 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[56]= new Array();
 choices[56][0] = "Liderazgo";
 choices[56][1] = "Oportunidad";
 choices[56][2] = "Satisfacci&oacute;n del cliente";
 choices[56][3] = "Satisfacer los requisitos";
 answers[56] = choices[56][0];
 units[56] = "88";
 comments[56] = "Id Pregunta: 5479. Castilla y Le&oacute;n";


//  Id pregunta: 5534 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes no es una de las tres prioridades de i2010 (marco estrat&eacute;gico de la Comisi&oacute;n Europea para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n)? ";
 choices[57]= new Array();
 choices[57][0] = "Conseguir un espacio europeo &uacute;nico de la informaci&oacute;n, fomentando un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n";
 choices[57][1] = "El refuerzo de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n en las TIC";
 choices[57][2] = "Mejorar la prestaci&oacute;n de sevicios intraeuropeos mediante la utilizaci&oacute;n masiva de las TIC";
 choices[57][3] = "Una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que concede prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida";
 answers[57] = choices[57][2];
 units[57] = "30";
 comments[57] = "Id Pregunta: 5534. ";


//  Id pregunta: 5860 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  WSDL son las siglas de:";
 choices[58]= new Array();
 choices[58][0] = "Web Services Description Language";
 choices[58][1] = "Web Services Data Language";
 choices[58][2] = "Web SOAP Definition Language";
 choices[58][3] = "Web Services Distributed Language";
 answers[58] = choices[58][0];
 units[58] = "51";
 comments[58] = "Id Pregunta: 5860. Pregunta 40";


//  Id pregunta: 5993 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes funciones NO es competencia del Consejo Superior de Administraci&oacute;n Electr&oacute;nica?";
 choices[59]= new Array();
 choices[59][0] = "Actuar como Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[59][1] = "La colaboraci&oacute;n con el Centro Criptol&oacute;gico Nacional del Centro Nacional de Inteligencia en la elaboraci&oacute;n de medidas de seguridad.";
 choices[59][2] = "El control, regulaci&oacute;n y supervisi&oacute;n de los proveedores de accesos a Internet de la Administraci&oacute;n General del Estado.";
 choices[59][3] = "El impulso y la coordinaci&oacute;n de la Administraci&oacute;n Electr&oacute;nica en el seno de la Administraci&oacute;n General del Estado.";
 answers[59] = choices[59][2];
 units[59] = "77";
 comments[59] = "Id Pregunta: 5993. TIC A 2009";


//  Id pregunta: 6265 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  Las conclusiones que se reflejen en un informe de auditor&iacute;a deberan estar basadas en una evidencia:";
 choices[60]= new Array();
 choices[60][0] = "Suficiente.";
 choices[60][1] = "Contundente.";
 choices[60][2] = "Prudente.";
 choices[60][3] = "Demostrable.";
 answers[60] = choices[60][0];
 units[60] = "31";
 comments[60] = "Id Pregunta: 6265. ";


//  Id pregunta: 6584 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  El documento de seguridad";
 choices[61]= new Array();
 choices[61][0] = "debe mantenerse siempre actualizado";
 choices[61][1] = "Es una obligaci&oacute;n de todos los responsables de fichero, y en su caso, para los encargados del tratamiento";
 choices[61][2] = "Debe existir con independencia del nivel de seguridad que sea necesario aplicar";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][3];
 units[61] = "29";
 comments[61] = "Id Pregunta: 6584. ";


//  Id pregunta: 6602 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  Las penalidades en un contrato ";
 choices[62]= new Array();
 choices[62][0] = "Si son por demora imputable al contratista no se tendr&aacute;n que especificar";
 choices[62][1] = "Siempre deben estar previstas en los pliegos o el doumento contractual";
 choices[62][2] = "Si son por demora imputable al contratista la imposici&oacute;n diaria ser&aacute; de 0,20&euro; por cada 100&euro; del contrato";
 choices[62][3] = "La a y la c";
 answers[62] = choices[62][0];
 units[62] = "41";
 comments[62] = "Id Pregunta: 6602. ";


//  Id pregunta: 7282 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Generalmente el primer paso en un proceso de virtualizaci&oacute;n de infraestructuras TIC en una Organizaci&oacute;n suele ser un proyecto de:";
 choices[63]= new Array();
 choices[63][0] = "Consolidaci&oacute;n de servidores";
 choices[63][1] = "Virtualizaci&oacute;n de salvaguardas";
 choices[63][2] = "SaaS (Storage as a Service)";
 choices[63][3] = "Computing Mobility";
 answers[63] = choices[63][0];
 units[63] = "119";
 comments[63] = "Id Pregunta: 7282. Examen TIC B 2009";


//  Id pregunta: 7339 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  Uno de los objetivos de la seguridad es evitar que alteren los datos durante una transmisi&oacute;n, esto es conocido como:";
 choices[64]= new Array();
 choices[64][0] = "Integridad";
 choices[64][1] = "Confidencialidad";
 choices[64][2] = "No Repudio";
 choices[64][3] = "Disponibilidad";
 answers[64] = choices[64][0];
 units[64] = "72";
 comments[64] = "Id Pregunta: 7339. ";


//  Id pregunta: 7851 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)   La norma ISO 9004:2000:";
 choices[65]= new Array();
 choices[65][0] = " Es la versi&oacute;n oficial, en espa&ntilde;ol, de la la Norma Europea EN ISO 9004 de diciembre de 2000.";
 choices[65][1] = " Es la misma Norma que la UNE-EN ISO 9004 de marzo de 1995.";
 choices[65][2] = " Es una norma cuya certificaci&oacute;n de los productos que se realizan con ella la lleva a cabo AENOR.";
 choices[65][3] = " Es la versi&oacute;n actualizada en el 2000 de la Norma ISO 10011-3:1991.";
 answers[65] = choices[65][0];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 7851. Map 2005";


//  Id pregunta: 7869 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)   Dada una jerarqu&iacute;a total con solapamiento en el modelo E/R (Entidad/Relaci&oacute;n), &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[66]= new Array();
 choices[66][0] = " No es necesario que toda ocurrencia del supertipo se encuentre en alguno de los subtipos.";
 choices[66][1] = " Cuando se borra una ocurrencia de un subtipo hay que borrarla tambi&eacute;n del supertipo.";
 choices[66][2] = " Cuando se borra una ocurrencia de un subtipo se borra del supertipo si s&oacute;lo pertenece a ese subtipo.";
 choices[66][3] = " Si se borra una ocurrencia del supertipo no siempre hay que eliminarla de los subtipos a los que pertenece.";
 answers[66] = choices[66][2];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 7869. Map 2006";


//  Id pregunta: 7902 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)   Una red ATM (Asynchronous Transfer Mode):";
 choices[67]= new Array();
 choices[67][0] = " Tiene c&eacute;lulas cuyo tama&ntilde;o es de 48 bytes.";
 choices[67][1] = " No es apropiada para tr&aacute;fico con requisitos de tiempo real.";
 choices[67][2] = " Tiene los campos VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier), utilizados para efectuar funciones de encaminamiento de las c&eacute;lulas.";
 choices[67][3] = " No tiene ning&uacute;n mecanismo para detectar la ocurrencia de errores de transmisi&oacute;n en las c&eacute;lulas.";
 answers[67] = choices[67][2];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 7902. Map 2006";


//  Id pregunta: 7985 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)   Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[68]= new Array();
 choices[68][0] = " Es independiente del lenguaje de programaci&oacute;n.";
 choices[68][1] = " Es independiente del sistema operativo.";
 choices[68][2] = " Es independiente de la base de datos.";
 choices[68][3] = " Es un tipo de API.";
 answers[68] = choices[68][0];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 7985. Map 2007";


//  Id pregunta: 8030 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)   La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[69]= new Array();
 choices[69][0] = " La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n.";
 choices[69][1] = " La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n.";
 choices[69][2] = " La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realiza en tiempo de ejecuci&oacute;n.";
 choices[69][3] = " La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realiza en tiempo de compilaci&oacute;n.";
 answers[69] = choices[69][2];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 8030. Map 2007";


//  Id pregunta: 8031 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   Se&ntilde;ale de la siguiente relaci&oacute;n el miembro que NO forma parte del Consejo Consultivo de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[70]= new Array();
 choices[70][0] = " Un experto en la materia.";
 choices[70][1] = " Un miembro de la Real Academia de la Historia.";
 choices[70][2] = " Un representante de la Asociaci&oacute;n de Ingenieros T&eacute;cnicos en Inform&aacute;tica.";
 choices[70][3] = " Un representante de la Administraci&oacute;n Local.";
 answers[70] = choices[70][2];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 8031. Map 2007";


//  Id pregunta: 8373 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes niveles de aislamiento previene de los problemas de lecturas sucias y lecturas no  repetibles, pero NO evita las lecturas fantasmas?";
 choices[71]= new Array();
 choices[71][0] = "Read Commited (lectura confirmada).";
 choices[71][1] = "Serializable.";
 choices[71][2] = "Read uncornmited (lectura no confirmada),";
 choices[71][3] = "Repeatable read (lectura repetible).";
 answers[71] = choices[71][3];
 units[71] = "57,58";
 comments[71] = "Id Pregunta: 8373. Examen TIC A2 2010";


//  Id pregunta: 8421 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes responsables no aparece definido en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[72]= new Array();
 choices[72][0] = "Responsable del fichero";
 choices[72][1] = "Responsable de la informaci&oacute;n";
 choices[72][2] = "Responsable del servicio";
 choices[72][3] = "Responsable de seguridad";
 answers[72] = choices[72][0];
 units[72] = "43";
 comments[72] = "Id Pregunta: 8421. ";


//  Id pregunta: 8450 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  La T&eacute;cnica de accesos CDMA se caracteriza entre otras porque:";
 choices[73]= new Array();
 choices[73][0] = "Varios usuarios comparten una misma portadora en intervalos diferentes de tiempo";
 choices[73][1] = "Varios Usuarios comparten la misma banda";
 choices[73][2] = "Requiere filtros muy selectivos para evitar las interferencias de canal adyacente";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = choices[73][1];
 units[73] = "101";
 comments[73] = "Id Pregunta: 8450. Analista Ayto. Madrid 2010";


//  Id pregunta: 8486 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  Los centros de proceso de datos o datacenters deben cumplir una serie de caracter&iacute;sticas de seguridad f&iacute;sica, &iquest;cu&aacute;l de las siguientes NO es una buena pol&iacute;tica de seguridad?";
 choices[74]= new Array();
 choices[74][0] = "Debe disponer de puertas de acceso grandes.";
 choices[74][1] = "Debe estar expl&iacute;citamente se&ntilde;alizado.";
 choices[74][2] = "Debe evitar tener ventanas.";
 choices[74][3] = "Dispondr&aacute; de un sistema de refrigeraci&oacute;n";
 answers[74] = choices[74][1];
 units[74] = "32,33";
 comments[74] = "Id Pregunta: 8486. Examen TIC A2 2010 interna";


//  Id pregunta: 8603 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Qu&eacute; categor&iacute;a de sistema OLAP est&aacute; basado u orientado a la web?";
 choices[75]= new Array();
 choices[75][0] = "SOLAP.";
 choices[75][1] = "DOLAP.";
 choices[75][2] = "WOLAP.";
 choices[75][3] = "RTOLAP.";
 answers[75] = choices[75][2];
 units[75] = "68";
 comments[75] = "Id Pregunta: 8603. Examen TIC A2 2010 interna";


//  Id pregunta: 8767 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  En IPv4, la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar. &iquest;Cu&aacute;l es el rango de valores que puede tomar este campo?";
 choices[76]= new Array();
 choices[76][0] = "0-15.";
 choices[76][1] = "0-255";
 choices[76][2] = "0-5.";
 choices[76][3] = "0-127";
 answers[76] = choices[76][1];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8767. Examen TIC A2 2010 interna";


//  Id pregunta: 8859 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[77]= new Array();
 choices[77][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[77][1] = "Paralela y mediante hipervisor (bare metal)";
 choices[77][2] = "Balanceada y mediante SPM (Service Platform Manager)";
 choices[77][3] = "Mediante hipervisor (bare metal) y mediante supervisor (full metal)";
 answers[77] = choices[77][0];
 units[77] = "119";
 comments[77] = "Id Pregunta: 8859. Analista Ayto. Madrid 2010";


//  Id pregunta: 8932 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes leyes aplica en las relaciones de los ciudadanos con el Ministerio de Justicia?";
 choices[78]= new Array();
 choices[78][0] = "Ley 18/2011";
 choices[78][1] = "Ley 11/2007";
 choices[78][2] = "Las dos anteriores";
 choices[78][3] = "Ninguna de las anteriores";
 answers[78] = choices[78][1];
 units[78] = "43";
 comments[78] = "Id Pregunta: 8932. ";


//  Id pregunta: 8933 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  La &uacute;ltima versi&oacute;n de ISO 9004 es:";
 choices[79]= new Array();
 choices[79][0] = "ISO 9004:2005";
 choices[79][1] = "ISO 9004:2000";
 choices[79][2] = "ISO 9004:2009";
 choices[79][3] = "ISO 9004:2008";
 answers[79] = choices[79][2];
 units[79] = "92";
 comments[79] = "Id Pregunta: 8933. ";


//  Id pregunta: 8951 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Qu&eacute; situaci&oacute;n se da si la direcci&oacute;n virtual y su correspondiente f&iacute;sica coincide?";
 choices[80]= new Array();
 choices[80][0] = "El sistema carece de memoria virtual";
 choices[80][1] = "El sistema no es multiprogramado";
 choices[80][2] = "El espacio l&oacute;gico y el f&iacute;sico del proceso es el mismo";
 choices[80][3] = "Todas las anteriores son falsas";
 answers[80] = choices[80][2];
 units[80] = "53,54";
 comments[80] = "Id Pregunta: 8951. ";


//  Id pregunta: 9004 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  No es una infracci&oacute;n grave seg&uacute;n la LOPD:";
 choices[81]= new Array();
 choices[81][0] = "El incumplimiento de los restantes deberes de notificaci&oacute;n o requerimiento al afectado impuestos por esta Ley y sus disposiciones de desarrollo.";
 choices[81][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad privada o iniciar la recogida de datos de car&aacute;cter personal para los mismos con finalidades distintas de las queconstituyen el objeto leg&iacute;timo de la empresa o entidad.";
 choices[81][2] = "Mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen.";
 choices[81][3] = "Tratar datos de car&aacute;cter personal sin recabar el consentimiento de las personas afectadas, cuando el mismo sea necesario conforme a lo dispuesto en esta Ley y sus disposiciones de desarrollo.";
 answers[81] = choices[81][1];
 units[81] = "29";
 comments[81] = "Id Pregunta: 9004. ";


//  Id pregunta: 9025 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[82]= new Array();
 choices[82][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[82][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[82][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[82][3] = "Se pueden establecer 32 comunicaciones totales: 16 entrantes y 16 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 answers[82] = choices[82][0];
 units[82] = "103";
 comments[82] = "Id Pregunta: 9025. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9051 Año de creación de pregunta: 2014-01-01
 questions[83]= "84)  Con respecto a las siguientes siglas:";
 choices[83]= new Array();
 choices[83][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[83][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[83][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[83][3] = "Todas las anteriores";
 answers[83] = choices[83][3];
 units[83] = "108";
 comments[83] = "Id Pregunta: 9051. ";


//  Id pregunta: 9134 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l no se considera una arquitectura de un sistema f&iacute;sico?";
 choices[84]= new Array();
 choices[84][0] = "de bus m&uacute;ltiple";
 choices[84][1] = "paralela";
 choices[84][2] = "Pipeline";
 choices[84][3] = "Fault Tolerant";
 answers[84] = choices[84][0];
 units[84] = "47";
 comments[84] = "Id Pregunta: 9134. ";


//  Id pregunta: 9139 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Qu&eacute; suele incorporar un controlador de Entrada/Salida?";
 choices[85]= new Array();
 choices[85][0] = "Una UART";
 choices[85][1] = "El controlador de puerto paralelo";
 choices[85][2] = "Reloj de tiempo real";
 choices[85][3] = "Todas las anteriores";
 answers[85] = choices[85][3];
 units[85] = "47";
 comments[85] = "Id Pregunta: 9139. ";


//  Id pregunta: 9349 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  Sobre los canales no estructurados en Europa:";
 choices[86]= new Array();
 choices[86][0] = "El H11 trabaja a 384 kbps agrupando 6 canales de 64 kbps";
 choices[86][1] = "El H0 trabaja a 1536 kbps, agrupando 24 canales de 64 kbps";
 choices[86][2] = "El H11 trabaja a 1920 Kbps, agrupando 30 canales de 64 kbps";
 choices[86][3] = "El H0 trabaja 384 kbps, agrupando 6 canales de 64 kbps";
 answers[86] = choices[86][3];
 units[86] = "103";
 comments[86] = "Id Pregunta: 9349. Pag. 6 astic 2011";


//  Id pregunta: 9664 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  Los sistemas multiprocesador:";
 choices[87]= new Array();
 choices[87][0] = "Son sistemas d&eacute;bilmente acoplados.";
 choices[87][1] = "Sus procesadores no dependen unos de otros.";
 choices[87][2] = "Son sistemas fuertemente acoplados.";
 choices[87][3] = "Ninguna de las anteriores.";
 answers[87] = choices[87][2];
 units[87] = "45";
 comments[87] = "Id Pregunta: 9664. ";


//  Id pregunta: 9674 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  La arquitectura del Grid se compone de las siguientes capas:";
 choices[88]= new Array();
 choices[88][0] = "Capa de red, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[88][1] = "Capa de red, de &ldquo;middleware&rdquo;, de recursos y de aplicaci&oacute;n.";
 choices[88][2] = "Capa de recursos, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[88][3] = "Ninguna de las anteriores.";
 answers[88] = choices[88][1];
 units[88] = "45";
 comments[88] = "Id Pregunta: 9674. ";


//  Id pregunta: 9950 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes actividades forma parte de la Planificaci&oacute;n de los Sistemas de Informaci&oacute;n seg&uacute;n M&eacute;trica 3?";
 choices[89]= new Array();
 choices[89][0] = "Estudio de los Sistemas de Informaci&oacute;n Actuales. ";
 choices[89][1] = "Definici&oacute;n de los Requisitos del Sistema.";
 choices[89][2] = "Valoraci&oacute;n de Alternativas.";
 choices[89][3] = "Definici&oacute;n del sistema. ";
 answers[89] = choices[89][0];
 units[89] = "86";
 comments[89] = "Id Pregunta: 9950. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9980 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[90]= new Array();
 choices[90][0] = "Para construir aplicaciones y servicios Web";
 choices[90][1] = "Para conectar las aplicaciones a la base de datos";
 choices[90][2] = "Para construir la interface de usuario";
 choices[90][3] = "Para conectar los programas";
 answers[90] = choices[90][1];
 units[90] = "59,115";
 comments[90] = "Id Pregunta: 9980. TIC A2, UPM, Examen 2010";


//  Id pregunta: 9990 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes es sistemas de gesti&oacute;n de conocimiento tiene una versi&oacute;n con licencia de fuentes abiertas?";
 choices[91]= new Array();
 choices[91][0] = "Blackboard";
 choices[91][1] = "WebCT";
 choices[91][2] = "Dokeos";
 choices[91][3] = "Desire2Learn";
 answers[91] = choices[91][2];
 units[91] = "66";
 comments[91] = "Id Pregunta: 9990. ";


//  Id pregunta: 10126 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[92]= new Array();
 choices[92][0] = "GEANT";
 choices[92][1] = "IRIS";
 choices[92][2] = "TESTA";
 choices[92][3] = "SARA";
 answers[92] = choices[92][1];
 units[92] = "103";
 comments[92] = "Id Pregunta: 10126. ";


//  Id pregunta: 10158 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  El servicio que da respuesta a la implementaci&oacute;n de la medida CORA 3.00.002.8, &quot;Concentraci&oacute;n de la gesti&oacute;n, producci&oacute;n, impresi&oacute;n y distribuci&oacute;n de las notificaciones y comunicaciones postales en centros de impresi&oacute;n y ensobrado con dimensi&oacute;n &oacute;ptima&quot; se denomina:";
 choices[93]= new Array();
 choices[93][0] = "SNE";
 choices[93][1] = "NoTe";
 choices[93][2] = "Notific@";
 choices[93][3] = "GESNOTE";
 answers[93] = choices[93][2];
 units[93] = "44";
 comments[93] = "Id Pregunta: 10158. ";


//  Id pregunta: 10227 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase:";
 choices[94]= new Array();
 choices[94][0] = "sleep(long msec);";
 choices[94][1] = "start();";
 choices[94][2] = "wait();";
 choices[94][3] = "notifyAll();";
 answers[94] = choices[94][0];
 units[94] = "60";
 comments[94] = "Id Pregunta: 10227. ";


//  Id pregunta: 10263 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  La inscripci&oacute;n de ficheros de titularidad p&uacute;blica en el Registro General de Protecci&oacute;n de Datos";
 choices[95]= new Array();
 choices[95][0] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[95][1] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[95][2] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 choices[95][3] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 answers[95] = choices[95][0];
 units[95] = "29";
 comments[95] = "Id Pregunta: 10263. Art&iacute;culo 63.1 y 63.2 del RD 1720/2007";


//  Id pregunta: 10455 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como vital:";
 choices[96]= new Array();
 choices[96][0] = "Puede realizarse manualmente por un periodo breve de tiempo.";
 choices[96][1] = "Tiene mayor tolerancia a las interrupciones que una clasificada como cr&iacute;tica.";
 choices[96][2] = "Ninguna de las anteriores.";
 choices[96][3] = "A y B.";
 answers[96] = choices[96][3];
 units[96] = "97";
 comments[96] = "Id Pregunta: 10455. ";


//  Id pregunta: 10536 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Qu&eacute; es la tecnolog&iacute;a TRIM que emplean los discos duros de estado s&oacute;lido?";
 choices[97]= new Array();
 choices[97][0] = "Permite al disco SSD optimizar el almacenamiento de la informaci&oacute;n, de forma que todos los datos est&eacute;n contiguos, mejorando as&iacute; el rendimiento";
 choices[97][1] = "Permite al sistema operativo comunicarle al disco SSD qu&eacute; celdas no est&aacute;n en uso";
 choices[97][2] = "Permite que el disco SSD entre en hibernaci&oacute;n cuando no se usa, mejorando as&iacute; su vida &uacute;til";
 choices[97][3] = "Permite reducir el ruido y calor generado por el disco SSD, as&iacute; como su consumo energ&eacute;tico";
 answers[97] = choices[97][1];
 units[97] = "48";
 comments[97] = "Id Pregunta: 10536. ";


//  Id pregunta: 10551 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest; Cu&aacute;l de las siguientes opciones contribuye mejor a un plan de continuidad de negocio eficaz? ";
 choices[98]= new Array();
 choices[98][0] = "La documentaci&oacute;n se distribuye a todas las partes interesadas";
 choices[98][1] = "La planificaci&oacute;n involucra a todos los departamentos de usuarios";
 choices[98][2] = "El plan se ha aprobado por la alta direcci&oacute;n";
 choices[98][3] = "El plan se ha auditado por un auditor externo";
 answers[98] = choices[98][1];
 units[98] = "31, 32, 33";
 comments[98] = "Id Pregunta: 10551. La participaci&oacute;n de los departamentos de usuarios en el Plan de Continuidad de Negocio es crucial para la identificaci&oacute;n de las prioridades de proceso de negocio.";


//  Id pregunta: 10559 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Cual de los siguientes no es un principio de COBIT5";
 choices[99]= new Array();
 choices[99][0] = "Satisfacer las necesidades de las partes interesadas";
 choices[99][1] = "Unificar el Gobierno con la administraci&oacute;n";
 choices[99][2] = "Habilitar un enfoque hol&iacute;stico";
 choices[99][3] = "Aplicar un solo marco integrado";
 answers[99] = choices[99][1];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10559. Uno de los principios es Separar el Gobierno de la Administraci&oacute;n";


