/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 109 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  Si la transmisi&oacute;n de datos de car. personal por una red tiene que cifrar los datos o utilizar  mecanismos para garantizar que dicha informaci&oacute;n no sea inteligible ni manipulable por terceros, estamos aplicando medidas de tipo:";
 choices[0]= new Array();
 choices[0][0] = "B&aacute;sico";
 choices[0][1] = "Medio";
 choices[0][2] = "Alto";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 109. ";


//  Id pregunta: 394 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  Para la determinaci&oacute;n del rendimiento de un sistema inform&aacute;tico:";
 choices[1]= new Array();
 choices[1][0] = "El tiempo de presencia es el que transcurre desde el instante en que un programa entra en el sistema hasta que la respuesta empieza a aparecer en el terminal";
 choices[1][1] = "El solapamiento (overlap) es el porcentaje de tiempo de CPU en que la CPU atiende al sistema operativo y a las funciones de supervisi&oacute;n y no a las funciones de usuario";
 choices[1][2] = "La capacidad de un recurso es el porcentaje de tiempo durante el cual est&aacute; a disposici&oacute;n de los usuarios";
 choices[1][3] = "La disponibilidad se puede cuantificar por medio de los valores del MTBF (tiempo medio entre fallos) y del MTTR (tiempo medio de reparaciones)";
 answers[1] = choices[1][3];
 units[1] = "35";
 comments[1] = "Id Pregunta: 394. ";


//  Id pregunta: 540 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  Respecto a las t&eacute;cnicas de selecci&oacute;n de proyectos alternativos ...";
 choices[2]= new Array();
 choices[2][0] = "3 t&eacute;cnicas usadas de evaluaci&oacute;n de inversiones son las del Pay-back, VAN y TIR";
 choices[2][1] = "El Valor Actual Neto (VAN) compara el desembolso inicial con el valor de los flujos netos de caja originados";
 choices[2][2] = "El pay-back es el periodo de tiempo que tarda en recuperarse el desembolso inicial con los flujos de caja";
 choices[2][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[2] = choices[2][3];
 units[2] = "38";
 comments[2] = "Id Pregunta: 540. ";


//  Id pregunta: 607 Año de creación de pregunta: 2006-01-01
 questions[3]= "4)  La aprobaci&oacute;n del Estatuto de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos se realiz&oacute; a trav&eacute;s de:";
 choices[3]= new Array();
 choices[3][0] = "R.D. 156/1996 de 2 de Febrero .";
 choices[3][1] = "R.D. 428/1993 de 26 de Marzo .";
 choices[3][2] = "La LOFAGE.";
 choices[3][3] = "La Ley 30/1992 de 26 de Noviembre.";
 answers[3] = choices[3][1];
 units[3] = "29";
 comments[3] = "Id Pregunta: 607. ";


//  Id pregunta: 648 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  Cu&aacute;l de las siguientes relaciones entre Organismos internacionales y europeos es incorrecta:";
 choices[4]= new Array();
 choices[4][0] = "ITU-T - ETSI";
 choices[4][1] = "IEC - CENELEC";
 choices[4][2] = "Comit&eacute; conjunto JTC-1 (ISO - CEN/CENELEC)";
 choices[4][3] = "ISO -CEN";
 answers[4] = choices[4][2];
 units[4] = "42";
 comments[4] = "Id Pregunta: 648. ";


//  Id pregunta: 875 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes sistemas operativos son implementaciones de POSIX (IEEE 1003.1)?:";
 choices[5]= new Array();
 choices[5][0] = "Microsoft Windows para Trabajo en Grupo 3.11";
 choices[5][1] = "MVS de IBM";
 choices[5][2] = "System 7 de Apple";
 choices[5][3] = "ATT UNIX SVR4";
 answers[5] = choices[5][3];
 units[5] = "53";
 comments[5] = "Id Pregunta: 875. ";


//  Id pregunta: 996 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Disponemos de un multiplexor por divisi&oacute;n en el tiempo (TDM) al que se conectan 8 terminales utilizando enlaces de 1200 bps. &iquest;Cu&aacute;l deber&aacute; ser la velocidad de la l&iacute;nea de salida del multiplexor?:";
 choices[6]= new Array();
 choices[6][0] = "Inferior a 9.600 bps";
 choices[6][1] = "Igual o superior a 9.600 bpos";
 choices[6][2] = "Superior a 19.200 bps";
 choices[6][3] = "Igual a 1.200 bps";
 answers[6] = choices[6][1];
 units[6] = "102";
 comments[6] = "Id Pregunta: 996. ";


//  Id pregunta: 1245 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  La teor&iacute;as matem&aacute;ticas de la l&oacute;gica y la probabilidad usada en la computaci&oacute;n desde sus inicios se deben a:";
 choices[7]= new Array();
 choices[7][0] = "Isaac Newton";
 choices[7][1] = "Charles Babbage";
 choices[7][2] = "David Hilbert";
 choices[7][3] = "George Boole";
 answers[7] = choices[7][3];
 units[7] = "46";
 comments[7] = "Id Pregunta: 1245. ";


//  Id pregunta: 1350 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Se&ntilde;ale la respuesta falsa. El lenguaje C:";
 choices[8]= new Array();
 choices[8][0] = "Surgi&oacute; del lenguaje B.";
 choices[8][1] = "Es procedural.";
 choices[8][2] = "Fue dise&ntilde;ado por Dennis Ritchie.";
 choices[8][3] = "Es fuertemente tipado.";
 answers[8] = choices[8][3];
 units[8] = "";
 comments[8] = "Id Pregunta: 1350. ";


//  Id pregunta: 1623 Año de creación de pregunta: 2003-01-01
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas es incorrecta";
 choices[9]= new Array();
 choices[9][0] = "Los ordenadores de segunda generaci&oacute;n, basados en circuitos integrados y multiprogramaci&oacute;n, se programaban en FORTRAN y lenguaje ensamblador, y se usaban para c&aacute;lculos cient&iacute;ficos u de ingenier&iacute;a";
 choices[9][1] = "Los sistemas operativos de tercera generaci&oacute;n permitieron desarrollar la t&eacute;cnica del &quot;spooling&quot; reduciendo considerablemente la necesidad de transporte de cintas magn&eacute;ticas";
 choices[9][2] = "En los sistemas operativos de 4 generaci&oacute;n se desarrolla por primera vez la t&eacute;cnica de multiprogramaci&oacute;n, una variante de los sistemas de tiempo compartido";
 choices[9][3] = "La primera generaci&oacute;n de sistemas operativos surge como consecuencia de los exitosos trabajos realizados por Babbage al desarrollar su m&aacute;quina anal&iacute;tica";
 answers[9] = choices[9][0];
 units[9] = "52";
 comments[9] = "Id Pregunta: 1623. ";


//  Id pregunta: 1771 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  Respecto a JNI";
 choices[10]= new Array();
 choices[10][0] = "Se sigue conservando la portabilidad universal";
 choices[10][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[10][2] = " permite utilizar clases java desde aplicaciones nativas.";
 choices[10][3] = "B y C son correctas";
 answers[10] = choices[10][3];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1771. ";


//  Id pregunta: 1808 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  En un GIS, el modelo vectorial ";
 choices[11]= new Array();
 choices[11][0] = "Utiliza nodos, l&iacute;neas y pol&iacute;gonos para representar los datos geogr&aacute;ficos.";
 choices[11][1] = "Cada l&iacute;nea se define por todos los puntos intermedios, almacenando todos ellos.";
 choices[11][2] = "Utiliza m&aacute;s espacio de almacenamiento que el modelo r&aacute;ster.";
 choices[11][3] = "Es preferible al modelo r&aacute;ster para superposici&oacute;n de planos.";
 answers[11] = choices[11][0];
 units[11] = "67";
 comments[11] = "Id Pregunta: 1808. ";


//  Id pregunta: 1949 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de J2ME es cierta";
 choices[12]= new Array();
 choices[12][0] = "Es un subconjunto del paquete Swing de J2SE";
 choices[12][1] = "Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n";
 choices[12][2] = "Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS";
 choices[12][3] = "Proporciona clases para el desarrollo de elementos gr&aacute;ficos";
 answers[12] = choices[12][3];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1949. ";


//  Id pregunta: 2026 Año de creación de pregunta: 2004-01-01
 questions[13]= "14)  En el &aacute;mbito de las tecnolog&iacute;as multimedia, se&ntilde;ale cu&aacute;l de los siguientes formatos corresponder&iacute;a a una imagen con &quot;formato de gr&aacute;fico vectorial&quot;:";
 choices[13]= new Array();
 choices[13][0] = "Graphical Interchange Format (GIF)";
 choices[13][1] = "Windows Metafile Format (WMF)";
 choices[13][2] = "Portable Network Graphics (PNG)";
 choices[13][3] = "Windows Bitmap (BMP)";
 answers[13] = choices[13][1];
 units[13] = "93";
 comments[13] = "Id Pregunta: 2026. Examen TIC MAP B 2004";


//  Id pregunta: 2165 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indique cu&aacute;l de las respuestas no forma parte de la documentaci&oacute;n t&eacute;cnica de un sistema de informaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Relaci&oacute;n condiciones de error-acciones";
 choices[14][1] = "Descripciones narrativas de los m&oacute;dulos de los programas";
 choices[14][2] = "Listados del c&oacute;digo objeto";
 choices[14][3] = "Procedimientos de backup-recovery";
 answers[14] = choices[14][2];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2165. ";


//  Id pregunta: 2190 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;les son los elementos de la t&eacute;cnica Historia de la Vida de las Entidades (HVE)?";
 choices[15]= new Array();
 choices[15][0] = "Entidades, eventos, efectos, primitivas, cajas vac&iacute;as.";
 choices[15][1] = "Entidades, eventos, resultados, nodos, cajas llenas.";
 choices[15][2] = "Entidades, eventos, resultados, primitivas, cajas llenas.";
 choices[15][3] = "Entidades, eventos, efectos, nodos, cajas vac&iacute;as.";
 answers[15] = choices[15][3];
 units[15] = "81,84";
 comments[15] = "Id Pregunta: 2190. ";


//  Id pregunta: 2364 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Entre los factores de calidad del software que McCall identific&oacute; para la fase de explotaci&oacute;n podemos destacar:";
 choices[16]= new Array();
 choices[16][0] = "Fiabilidad, correcci&oacute;n, seguridad, eficiencia y usabilidad";
 choices[16][1] = "Fiabilidad, flexibilidad y portabilidad";
 choices[16][2] = "Mantenibilidad, seguridad, flexibilidad y eficiencia";
 choices[16][3] = "Todos los anteriores";
 answers[16] = choices[16][0];
 units[16] = "87,88";
 comments[16] = "Id Pregunta: 2364. ";


//  Id pregunta: 2428 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  La orientaci&oacute;n a objetos usa com&uacute;nmente dos tipos de mecanismos de herencia: herencia simple y herencia m&uacute;ltiple. La herencia repetida:";
 choices[17]= new Array();
 choices[17][0] = "Supone que una clase, llamada subclase, hereda caracter&iacute;sticas y m&eacute;todos de una sola clase superior llamada superclase, a la que puede a&ntilde;adir o borrar alg&uacute;n comportamiento.";
 choices[17][1] = "Es un tipo de herencia m&uacute;ltiple en la que en la jerarqu&iacute;a de la herencia hay ciclos, es decir, una clase hereda directa o indirectamente de otra clase m&aacute;s de una vez.";
 choices[17][2] = "Consiste en que un objeto dado tenga m&aacute;s de un padre.";
 choices[17][3] = "No existe.";
 answers[17] = choices[17][1];
 units[17] = "82,84";
 comments[17] = "Id Pregunta: 2428. ";


//  Id pregunta: 2476 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Para evaluar el comportamiento de un sistema inform&aacute;tico se utilizan diferentes variables. Una de las siguientes no es utilizada para este fin:";
 choices[18]= new Array();
 choices[18][0] = "Factor de cola";
 choices[18][1] = "Overhead";
 choices[18][2] = "Swapping";
 choices[18][3] = "Triggers";
 answers[18] = choices[18][3];
 units[18] = "26";
 comments[18] = "Id Pregunta: 2476. Preparatic XVII";


//  Id pregunta: 2662 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  De acuerdo con la informaci&oacute;n contenida los servicios de informaci&oacute;n electr&oacute;nica pueden clasificarse en:";
 choices[19]= new Array();
 choices[19][0] = "Servicios referenciales y servicios fuente.";
 choices[19][1] = "Servicios num&eacute;ricos y servicios textuales.";
 choices[19][2] = "Servicios de banda ancha y servicios de banda estrecha.";
 choices[19][3] = "Servicios portadores y servicios de valor a&ntilde;adido.";
 answers[19] = choices[19][0];
 units[19] = "96";
 comments[19] = "Id Pregunta: 2662. ";


//  Id pregunta: 2689 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[20]= new Array();
 choices[20][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[20][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[20][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][2];
 units[20] = "87,88,92";
 comments[20] = "Id Pregunta: 2689. ";


//  Id pregunta: 2699 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  Misi&oacute;n principal de un Sistema de Recuperaci&oacute;n de Informaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Asistir la b&uacute;squeda de textos en bases de datos relacionales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[21][1] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[21][2] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar todos los documentos o referencias que aparezcan.";
 choices[21][3] = "Asistir la b&uacute;squeda de im&aacute;genes en bases de datos relacionales para localizar todos los documentos o referencias que aparezcan.";
 answers[21] = choices[21][1];
 units[21] = "96";
 comments[21] = "Id Pregunta: 2699. ";


//  Id pregunta: 2753 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  &iquest;Cu&aacute;les son las cuatro fases del proceso unificado de desarrollo de software?";
 choices[22]= new Array();
 choices[22][0] = "Comienzo, incepci&oacute;n, transici&oacute;n y fin";
 choices[22][1] = "An&aacute;lisis, Dise&ntilde;o, Implementaci&oacute;n y pruebas";
 choices[22][2] = "An&aacute;lisis de requisitos, dise&ntilde;o, desarrollo y pruebas";
 choices[22][3] = "Inicio, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n";
 answers[22] = choices[22][3];
 units[22] = "82";
 comments[22] = "Id Pregunta: 2753. ";


//  Id pregunta: 2799 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;Qu&eacute; tipos de mantenimiento se definen en M&eacute;trica v3 (considerados o no)?";
 choices[23]= new Array();
 choices[23][0] = "Correctivo, adaptativo, preventivo y perfectivo";
 choices[23][1] = "Correctivo, adaptativo, evolutivo y perfectivo";
 choices[23][2] = "Correctivo, Adaptativo y evolutivo";
 choices[23][3] = "Correctivo, adaptativo y perfectivo";
 answers[23] = choices[23][1];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2799. ";


//  Id pregunta: 2860 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  La incicativa europea i2010 se transpone en Espa&ntilde;a en ";
 choices[24]= new Array();
 choices[24][0] = "Plan Avanza 2010";
 choices[24][1] = "Ingenio 2010";
 choices[24][2] = "Plan Avanza";
 choices[24][3] = "Avanza.es";
 answers[24] = choices[24][1];
 units[24] = "30";
 comments[24] = "Id Pregunta: 2860. ";


//  Id pregunta: 2939 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  La plataforma Java que se utiliza para el desarrollo de aplicaciones para PDA es:";
 choices[25]= new Array();
 choices[25][0] = "Micro Edition";
 choices[25][1] = "Standard Edition";
 choices[25][2] = "Enterprise Edition";
 choices[25][3] = "Cualquiera de ellas indistintamente dada su portabilidad";
 answers[25] = choices[25][0];
 units[25] = "116";
 comments[25] = "Id Pregunta: 2939. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3061 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  En ASP, &iquest;qu&eacute; objeto se utiliza para compartir informaci&oacute;n entre todos los usuarios de una aplicaci&oacute;n?:";
 choices[26]= new Array();
 choices[26][0] = "Application";
 choices[26][1] = "Request";
 choices[26][2] = "Server";
 choices[26][3] = "Session";
 answers[26] = choices[26][0];
 units[26] = "115";
 comments[26] = "Id Pregunta: 3061. ";


//  Id pregunta: 3066 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  En una arquitectura de tres capas el acceso a  los datos corresponde a la capa de:";
 choices[27]= new Array();
 choices[27][0] = "Presentaci&oacute;n";
 choices[27][1] = "Aplicaci&oacute;n";
 choices[27][2] = "Datos";
 choices[27][3] = "En realidad las tres capas manipulan los datos";
 answers[27] = choices[27][2];
 units[27] = "113";
 comments[27] = "Id Pregunta: 3066. ";


//  Id pregunta: 3075 Año de creación de pregunta: 2005-01-01
 questions[28]= "29)  La disponibilidad de un sistema se define como:";
 choices[28]= new Array();
 choices[28][0] = "La proporci&oacute;n de tiempo en la que es realmente utilizado";
 choices[28][1] = "El cociente entre el tiempo medio de reparaci&oacute;n y el tiempo medio entre casas";
 choices[28][2] = "La disposici&oacute;n de los servicios a ser usados cuando sea necesario.";
 choices[28][3] = "La probabilidad de que un sistema falle en un instante dado";
 answers[28] = choices[28][2];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3075. Definici&oacute;n dada en Magerit V2";


//  Id pregunta: 3080 Año de creación de pregunta: 2005-01-01
 questions[29]= "30)  Las fases de SSL son:";
 choices[29]= new Array();
 choices[29][0] = "Hola, autenticaci&oacute;n y fin";
 choices[29][1] = "Hola, autenticaci&oacute;n, creaci&oacute;n de clave de sesi&oacute;n, y fin";
 choices[29][2] = "Hola, autenticaci&oacute;n, creaci&oacute;n de clave de sesi&oacute;n, creaci&oacute;n de clave de trabajo y fin";
 choices[29][3] = "Hola, autenticaci&oacute;n, creaci&oacute;n de clave de sesi&oacute;n, creaci&oacute;n de clave de trabajo, consulta de datos y fin";
 answers[29] = choices[29][1];
 units[29] = "111";
 comments[29] = "Id Pregunta: 3080. ";


//  Id pregunta: 3261 Año de creación de pregunta: 2009-01-01
 questions[30]= "31)  En GPRS, es razonable facturar:";
 choices[30]= new Array();
 choices[30][0] = "por tiempo de conexi&oacute;n";
 choices[30][1] = "por n&uacute;mero de conexiones";
 choices[30][2] = "por portadoras en uso";
 choices[30][3] = "por volumen y calidad de servicio";
 answers[30] = choices[30][3];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3261. ";


//  Id pregunta: 3356 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  De los cuatro octetos que forman una direcci&oacute;n del protocolo IP indicar en qu&eacute; clase de red se utiliza un octeto para los n&uacute;meros de host:";
 choices[31]= new Array();
 choices[31][0] = "Clase B";
 choices[31][1] = "Clase D";
 choices[31][2] = "Clase A";
 choices[31][3] = "Clase C";
 answers[31] = choices[31][3];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3356. ";


//  Id pregunta: 3363 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Dentro de la especificaci&oacute;n de la Red Digital de Servicios Integrados, se definen diversos interfaces. Indique cual de las opciones siguientes es verdadera:";
 choices[32]= new Array();
 choices[32][0] = "El interfaz U es el definido entre la central p&uacute;blica y el equipo terminado de red";
 choices[32][1] = "El interfaz U utiliza un par de hilos telef&oacute;nicos como los de la RTB";
 choices[32][2] = "El interfaz U depende de las compa&ntilde;&iacute;as telef&oacute;nicas";
 choices[32][3] = "Todas las respuestas anteriores son ciertas";
 answers[32] = choices[32][3];
 units[32] = "103";
 comments[32] = "Id Pregunta: 3363. ";


//  Id pregunta: 3393 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  El nivel de transporte de modelo OSI gestiona funciones como:";
 choices[33]= new Array();
 choices[33][0] = "Direccionamiento f&iacute;sico, secuenciamiento de tramas, control de flujo y notificaci&oacute;n de errores";
 choices[33][1] = "Compresi&oacute;n y encriptaci&oacute;n de datos";
 choices[33][2] = "Control de flujo, multiplexaci&oacute;n y gesti&oacute;n de errores";
 choices[33][3] = "Identificaci&oacute;n de los corresponsales y sincronizaci&oacute;n de la comunicaci&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3393. ";


//  Id pregunta: 3440 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  El protocolo ARP es:";
 choices[34]= new Array();
 choices[34][0] = "Automatic Resolution Protocol, Protocolo de resoluci&oacute;n autom&aacute;tica";
 choices[34][1] = "Adress Reservation Protocol, protocolo de reserva de direcciones";
 choices[34][2] = "Address Resolution Protocol, protocolo de resoluci&oacute;n de direcciones";
 choices[34][3] = "Automatic Response Protocol, protocolo de respuesta autom&aacute;tica";
 answers[34] = choices[34][2];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3440. ";


//  Id pregunta: 3587 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  La aplicaci&oacute;n 'traceroute' basada en ICMP:";
 choices[35]= new Array();
 choices[35][0] = "permite conocer si un sistema est&aacute; accesible";
 choices[35][1] = "permite establecer la ruta a seguir por un conjunto de datagramas IP";
 choices[35][2] = "permite conocer la ruta seguida por un datagrama IP";
 choices[35][3] = "permite obtener un mapa de la red utilizada";
 answers[35] = choices[35][2];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3587. ";


//  Id pregunta: 3640 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  La RFC que contiene las especificaciones del protocolo IPv6 es:";
 choices[36]= new Array();
 choices[36][0] = "1945";
 choices[36][1] = "1884";
 choices[36][2] = "2460";
 choices[36][3] = "2584";
 answers[36] = choices[36][2];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3640. ";


//  Id pregunta: 3743 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Los sistemas de radio en los que los m&oacute;viles no est&aacute;n asignados a una &uacute;nica frecuencia sino que pueden usar una cualquiera de las frecuencias o canales disponibles se denomina:";
 choices[37]= new Array();
 choices[37][0] = "GSM";
 choices[37][1] = "TACS";
 choices[37][2] = "NMT";
 choices[37][3] = "Trunking";
 answers[37] = choices[37][3];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3743. ";


//  Id pregunta: 3782 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  Respecto a EDGE puede decirse que:";
 choices[38]= new Array();
 choices[38][0] = "Ha sustuido a GSM en gran parte de Europa";
 choices[38][1] = "Sustiuir&aacute; a UMTS en vista del fracaso de esta &uacute;ltima tecnolog&iacute;a";
 choices[38][2] = "Es un desarrollo paralelo a iMode con amplia implantaci&oacute;n en Jap&oacute;n y Norteam&eacute;rica";
 choices[38][3] = "Nada de lo anterior es cierto";
 answers[38] = choices[38][3];
 units[38] = "108";
 comments[38] = "Id Pregunta: 3782. ";


//  Id pregunta: 3823 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Se&ntilde;ale la norma de IEEE que se refiere a redes LAN con CSMA/CD:";
 choices[39]= new Array();
 choices[39][0] = "802.1";
 choices[39][1] = "802.2";
 choices[39][2] = "802.3";
 choices[39][3] = "802.4";
 answers[39] = choices[39][2];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3823. ";


//  Id pregunta: 3925 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Con qu&eacute; est&aacute; relacionado CSMA/CD?";
 choices[40]= new Array();
 choices[40][0] = "802.4";
 choices[40][1] = "802.3";
 choices[40][2] = " 802.5";
 choices[40][3] = " 802.6";
 answers[40] = choices[40][1];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3925. ";


//  Id pregunta: 4018 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Qu&eacute; modulaci&oacute;n usa el chip para PLC de DS2?";
 choices[41]= new Array();
 choices[41][0] = "GSMK";
 choices[41][1] = "DSSS";
 choices[41][2] = "QPSK";
 choices[41][3] = "OFDM";
 answers[41] = choices[41][3];
 units[41] = "107";
 comments[41] = "Id Pregunta: 4018. ";


//  Id pregunta: 4427 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  La firma digital de un mensaje o documento, garantiza:";
 choices[42]= new Array();
 choices[42][0] = "La autenticaci&oacute;n del emisor e integridad del mensaje.";
 choices[42][1] = "La autenticaci&oacute;n del emisor y confidencialidad del env&iacute;o.";
 choices[42][2] = "Autenticaci&oacute;n, confidencialidad e integridad.";
 choices[42][3] = "Confidencialidad del env&iacute;o e integridad del mensaje.";
 answers[42] = choices[42][0];
 units[42] = "74";
 comments[42] = "Id Pregunta: 4427. ";


//  Id pregunta: 4535 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  El protocolo UDP (User Datagram Protocol):";
 choices[43]= new Array();
 choices[43][0] = "Es un protocolo de transporte perteneciente a Ia familia de protocolos TCP/IP no orientado a conexi&oacute;n.";
 choices[43][1] = "Es un protocolo de nivel de red perteneciente a Ia familia de protocolos TCP/IP.";
 choices[43][2] = "Es un protocolo de transporte perteneciente a la familia de protocolos TCP/IP orientado a conexi&oacute;n.";
 choices[43][3] = "Es el protocolo de transporte utilizado por el protocolo de aplicaci&oacute;n FTP.";
 answers[43] = choices[43][0];
 units[43] = "100";
 comments[43] = "Id Pregunta: 4535. ";


//  Id pregunta: 4563 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Las funciones de mediaci&oacute;n y arbitraje atribuidas por la Ley de Propiedad Intelectual son ejercidas por";
 choices[44]= new Array();
 choices[44][0] = "el Comit&eacute; Mediador y Arbitral de Ia Propiedad intelectual";
 choices[44][1] = "el Comit&eacute; Nacional de la Propiedad Intelectual";
 choices[44][2] = "la Comisi&oacute;n Nacional Mediadora y Arbitral de la Propiedad Intelectual";
 choices[44][3] = "Ia Comisi&oacute;n Mediadora y Arbitral de Ia Propiedad Intelectual";
 answers[44] = choices[44][3];
 units[44] = "36";
 comments[44] = "Id Pregunta: 4563. ";


//  Id pregunta: 4691 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  En la tecnolog&iacute;a de comunicaciones RDSI, los canales se dividen en";
 choices[45]= new Array();
 choices[45][0] = "A, B y C";
 choices[45][1] = "I, II y III";
 choices[45][2] = "B1, B2 y B3";
 choices[45][3] = "B, D y H";
 answers[45] = choices[45][3];
 units[45] = "107";
 comments[45] = "Id Pregunta: 4691. Examen 2006 JCYL";


//  Id pregunta: 4776 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  La Ley Org&aacute;nica 15/1999 que regula la Protecci&oacute;n de Datos de Car&aacute;cter Personal, ser&aacute; de aplicaci&oacute;n a los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por";
 choices[46]= new Array();
 choices[46][0] = "El sector p&uacute;blico exclusivamente";
 choices[46][1] = "El sector privado exclusivamente";
 choices[46][2] = "Los sectores p&uacute;blico y privado";
 choices[46][3] = "El sector privado y, en situaciones muy limitadas, afecta tambi&eacute;n al sector p&uacute;blico";
 answers[46] = choices[46][2];
 units[46] = "29";
 comments[46] = "Id Pregunta: 4776. ";


//  Id pregunta: 4800 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  En una base de datos relacional en la cual K es una clave primaria simple de una relaci&oacute;n R1, y el atributo A, perteneciente a una clave compuesta de una relaci&oacute;n R2, est&aacute; definido en el mismo dominio que K, &iquest;cu&aacute;l de las afirmaciones NO es cierta?";
 choices[47]= new Array();
 choices[47][0] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, puede existir un valor de K en R1 cuyo valor sea igual al valor de A";
 choices[47][1] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor diferente a los posibles valores de K";
 choices[47][2] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, A no puede tener un valor nulo";
 choices[47][3] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor nulo";
 answers[47] = choices[47][1];
 units[47] = "57";
 comments[47] = "Id Pregunta: 4800. ";


//  Id pregunta: 4880 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization /International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas yprotocolos de comunicaci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "7816-2";
 choices[48][1] = "7816-3";
 choices[48][2] = "7816-4";
 choices[48][3] = "7816-5";
 answers[48] = choices[48][1];
 units[48] = "73";
 comments[48] = "Id Pregunta: 4880. ";


//  Id pregunta: 5032 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta respecto al modelo de datos relacional:";
 choices[49]= new Array();
 choices[49][0] = "Una clave candidata es el conjunto de atributos cuyos valores han de coincidir con los valores de la claveprimaria de otra relaci&oacute;n";
 choices[49][1] = "Una clave ajena es el conjunto de atributos que determinan un&iacute;voca y m&iacute;nimamente cada tupla";
 choices[49][2] = "En una relaci&oacute;n no pueden existir varias claves candidatas";
 choices[49][3] = "Para las claves ajenas, la regla de integridad referencial establece que los valores de la clave ajena puedenser nulos";
 answers[49] = choices[49][3];
 units[49] = "58";
 comments[49] = "Id Pregunta: 5032. Examen TIC A 2007";


//  Id pregunta: 5535 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indique la respuesta falsa";
 choices[50]= new Array();
 choices[50][0] = "El portal Your Europe tiene que como objetivo informar a los pa&iacute;ses que no son de la UE sobre las posibilidades de adhesi&oacute;n a la UE";
 choices[50][1] = "PLOTEUS es el portal europeo de oportunidades de formaci&oacute;n";
 choices[50][2] = "TESTA es una red que interconecta las distintas redes administrativas de los estados miembros";
 choices[50][3] = "EURES es un servicio paneuropeo que pretende facilitar el libre movimiento de trabajadores en el Espacio Econ&oacute;mico Europeo";
 answers[50] = choices[50][0];
 units[50] = "30";
 comments[50] = "Id Pregunta: 5535. ";


//  Id pregunta: 5540 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indicar la respuesta falsa sobre modelos de recuperaci&oacute;n de informaci&oacute;n";
 choices[51]= new Array();
 choices[51][0] = "En general, el modelo vectorial se comporta peor que el probabil&iacute;stico cuando se usa contra colecciones gen&eacute;ricas de documentos";
 choices[51][1] = "Las redes neuronales son muy &uacute;tiles en un sistema de recuperaci&oacute;n de informaci&oacute;n por su potencia reconociendo patrones";
 choices[51][2] = "Las redes de inferencia y las redes de confianza son modelos basados en redes bayesianas";
 choices[51][3] = "Los modelos estructurados permiten combinar la especificaci&oacute;n de consultas con la informaci&oacute;n de la estructura del documento";
 answers[51] = choices[51][0];
 units[51] = "96";
 comments[51] = "Id Pregunta: 5540. ";


//  Id pregunta: 5667 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  Cual de los siguientes sistemas est&aacute; colocado tradicionalmente en la DMZ de una red";
 choices[52]= new Array();
 choices[52][0] = "Servidor de aplicaciones";
 choices[52][1] = "Proxy";
 choices[52][2] = "Servidor LDAP";
 choices[52][3] = "Servidor de base de datos";
 answers[52] = choices[52][1];
 units[52] = "111";
 comments[52] = "Id Pregunta: 5667. ";


//  Id pregunta: 5694 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[53]= new Array();
 choices[53][0] = "Claves privadas del ciudadano";
 choices[53][1] = "Certificado de autenticaci&oacute;n";
 choices[53][2] = "Claves p&uacute;blicas del ciudadano";
 choices[53][3] = "Certificado de firma";
 answers[53] = choices[53][2];
 units[53] = "74";
 comments[53] = "Id Pregunta: 5694. ";


//  Id pregunta: 5727 Año de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos NO sirve para seleccionar la p&aacute;gina a descargar tras un fallo de p&aacute;gina?";
 choices[54]= new Array();
 choices[54][0] = "FIFO";
 choices[54][1] = "Aleatoria";
 choices[54][2] = "SJF";
 choices[54][3] = "NRU";
 answers[54] = choices[54][2];
 units[54] = "52";
 comments[54] = "Id Pregunta: 5727. ";


//  Id pregunta: 5788 Año de creación de pregunta: 2009-01-01
 questions[55]= "56)  En un radioenlace:";
 choices[55]= new Array();
 choices[55][0] = "El enlace descendente trabaja siempre a frecuencias superiores que el enlace descendente";
 choices[55][1] = "El enlace ascendente trabaja a frecuencias iguales o inferiores que el enlace descendente";
 choices[55][2] = "El enlace descendente trabaja, a veces, a frecuencias inferiores que el enlace descendente";
 choices[55][3] = "El enlace ascendente trabaja, a veces, a frecuencias iguales o superiores que el enlace descendente";
 answers[55] = choices[55][1];
 units[55] = "108";
 comments[55] = "Id Pregunta: 5788. ";


//  Id pregunta: 5984 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  El modelo de control de accesos donde es el sistema quien protege los recursos y donde todo recurso del sistema tiene unaetiqueta de seguridad se denomina:";
 choices[56]= new Array();
 choices[56][0] = "De acceso discrecional (DAC)";
 choices[56][1] = "De acceso obligatorio (MAC)";
 choices[56][2] = "Basado en roles (RBAC)";
 choices[56][3] = "De confidencialidad.";
 answers[56] = choices[56][1];
 units[56] = "73";
 comments[56] = "Id Pregunta: 5984. TIC A 2009";


//  Id pregunta: 6109 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  La competencia para la propuesta de planificaci&oacute;n, gesti&oacute;n y administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, para la comprobaci&oacute;n t&eacute;cnica de emisiones radioel&eacute;ctricas, y para el control y la inspecci&oacute;n de las telecomunicaciones, as&iacute; como la aplicaci&oacute;n del r&eacute;gimen sancionador en la materia, la tiene:";
 choices[57]= new Array();
 choices[57][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo.";
 choices[57][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[57][2] = "La Uni&oacute;n Internacional de Telecomunicaciones.";
 choices[57][3] = "Red.es.";
 answers[57] = choices[57][0];
 units[57] = "110";
 comments[57] = "Id Pregunta: 6109. TIC A 2009";


//  Id pregunta: 6163 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  Con respecto al cifrado de los datos en videoconferencia:";
 choices[58]= new Array();
 choices[58][0] = "En H.320 sobre RDSI se desarrollaron los est&aacute;ndares H.233 y H.234.";
 choices[58][1] = "Para las videoconferencias basadas en H.323, se desarrollaron los est&aacute;ndares  H.235.";
 choices[58][2] = "Los sistemas basados en SIP usan SRTP.";
 choices[58][3] = "Todas las anteriores son correctas.";
 answers[58] = choices[58][3];
 units[58] = "117";
 comments[58] = "Id Pregunta: 6163. ";


//  Id pregunta: 6263 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  El c&oacute;digo &eacute;tico definido por ISACA resultar&aacute; de aplicaci&oacute;n a:";
 choices[59]= new Array();
 choices[59][0] = "Solamente a las personas certificadas como CISA y CISM.";
 choices[59][1] = "A los profesionales certificados CISA y CISM y a los miembros de la ISACA.";
 choices[59][2] = "A los miembros de la ISACA, que obligatoriamente ser&aacute;n profesionales con las certificaciones CISA y CISM, en lo que se refiere a la aplicaci&oacute;n de las pr&aacute;cticas definidas dentro de COBIT.";
 choices[59][3] = "A todos los profesionales que trabajen realizando auditor&iacute;as de sistemas de informaci&oacute;n y que para ello empleen como referencia los manuales del COBIT.";
 answers[59] = choices[59][1];
 units[59] = "31";
 comments[59] = "Id Pregunta: 6263. ";


//  Id pregunta: 6457 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Qu&eacute; informaci&oacute;n NO est&aacute; contenida en el chip criptogr&aacute;fico del DNI electr&oacute;nico?";
 choices[60]= new Array();
 choices[60][0] = "Certificado reconocido de autenticaci&oacute;n y de firma";
 choices[60][1] = "Imagen digitalizada de la fotograf&iacute;a";
 choices[60][2] = "Plantilla de la impresi&oacute;n dactilar";
 choices[60][3] = "N&uacute;mero de serie del soporte";
 answers[60] = choices[60][3];
 units[60] = "74";
 comments[60] = "Id Pregunta: 6457. Castilla La Mancha 2009 (Anulada)";


//  Id pregunta: 6515 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[61]= new Array();
 choices[61][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[61][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[61][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases. ";
 choices[61][3] = "No se permite herencia m&uacute;ltiple.";
 answers[61] = choices[61][2];
 units[61] = "60";
 comments[61] = "Id Pregunta: 6515. ";


//  Id pregunta: 6528 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  Un elemento de configuraci&oacute;n";
 choices[62]= new Array();
 choices[62][0] = "Es un componente de una infraestructura que est&aacute; o estar&aacute; bajo el control de la Gesti&oacute;n de la Configuraci&oacute;n";
 choices[62][1] = "Un sistema completo";
 choices[62][2] = "Un componente software menor";
 choices[62][3] = "Todas las respuestas anteriores son correctas";
 answers[62] = choices[62][3];
 units[62] = "98";
 comments[62] = "Id Pregunta: 6528. ";


//  Id pregunta: 6609 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  En el An&aacute;lisis Estructurado, las entidades externas";
 choices[63]= new Array();
 choices[63][0] = "Definen el Interfaz del Usuario";
 choices[63][1] = "Son parte del sistema";
 choices[63][2] = "Aparecen primero en el Diagrama de Contexto y se van heredando en las explosiones de los DFD's";
 choices[63][3] = "Generan y consumen informaci&oacute;n del sistema";
 answers[63] = choices[63][3];
 units[63] = "81";
 comments[63] = "Id Pregunta: 6609. ";


//  Id pregunta: 7273 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  Se&ntilde;ale  la opci&oacute;n que no corresponde a un  tipo de virtualizaci&oacute;n";
 choices[64]= new Array();
 choices[64][0] = "Virtualizaci&oacute;n de Sistema Operativo";
 choices[64][1] = "Paravirtualizaci&oacute;n";
 choices[64][2] = "Virtualizaci&oacute;n de datos";
 choices[64][3] = "Virtualizaci&oacute;n de red";
 answers[64] = choices[64][2];
 units[64] = "119";
 comments[64] = "Id Pregunta: 7273. ";


//  Id pregunta: 7309 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Indique cu&aacute;l de los siguientes es un lenguaje de marcado empleado en conversi&oacute;n texto-voz (TTS):";
 choices[65]= new Array();
 choices[65][0] = "TTSXML";
 choices[65][1] = "SVML";
 choices[65][2] = "SSML";
 choices[65][3] = "Todos son lenguajes de marcado utilizados en TTS";
 answers[65] = choices[65][2];
 units[65] = "94";
 comments[65] = "Id Pregunta: 7309. ";


//  Id pregunta: 7863 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)   En el sistema de transmisi&oacute;n de datos Modo de Transferencia As&iacute;ncrono (ATM), las c&eacute;lulas ATM son paquetes de datos:";
 choices[66]= new Array();
 choices[66][0] = " De longitud variable seg&uacute;n sea el medio de transmisi&oacute;n.";
 choices[66][1] = " De 5 bytes.";
 choices[66][2] = " De 48 bytes.";
 choices[66][3] = " De 53 bytes. MAP 2006";
 answers[66] = choices[66][3];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 7863. Map 2005";


//  Id pregunta: 7864 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)   &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[67]= new Array();
 choices[67][0] = " Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministro de Industria, Turismo y Comercio.";
 choices[67][1] = " Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno.";
 choices[67][2] = " Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la v&iacute;a administrativa.";
 choices[67][3] = " Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[67] = choices[67][2];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 7864. Map 2006";


//  Id pregunta: 7957 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)   &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization/International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas y protocolos de comunicaci&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = " 7816.";
 choices[68][1] = " 7816-3.";
 choices[68][2] = " 7816-4.";
 choices[68][3] = " 7816-5.";
 answers[68] = choices[68][1];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 7957. Map 2006";


//  Id pregunta: 8081 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)   De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l se clasifica como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace:";
 choices[69]= new Array();
 choices[69][0] = " EIGRP (Enhanced Interior Gateway Routing Protocol).";
 choices[69][1] = " IGRP (Interior Gateway Routing Protocol).";
 choices[69][2] = " OSPF (Open Shortest Path First).";
 choices[69][3] = " RIPv2 (Routing Information Protocol ver. 2";
 answers[69] = choices[69][0];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 8081. Map 2008";


//  Id pregunta: 8114 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   &iquest;Qu&eacute; tipo de miembros NO existen en el Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI)?";
 choices[70]= new Array();
 choices[70][0] = " Miembros Plenos.";
 choices[70][1] = " Miembros Coordinadores.";
 choices[70][2] = " Miembros Asociados.";
 choices[70][3] = " Miembros Consejeros.";
 answers[70] = choices[70][1];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 8114. Map 2008";


//  Id pregunta: 8158 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   En referencia al direccionamiento de IPv6 definido en el RFC 1884, indique cu&aacute;l de los apartados siguientes es VERDADERO:";
 choices[71]= new Array();
 choices[71][0] = " Una direcci&oacute;n IPv6 tiene la forma x:x:x:x:x:x:x:x donde cada &laquo;x&raquo; representa un valor en hexadecimal correspondiente a 8 bits.";
 choices[71][1] = " En una direcci&oacute;n IPv6, se pueden sustituir todas las apariciones de cadenas de ceros por &laquo;::&raquo;.";
 choices[71][2] = " Una forma alternativa de representaci&oacute;n de las direcciones en un entorno mixto de IPv4 e IPv6 es d.d.d.d:x:x:x:x:x:x donde las &laquo;d&raquo; son los valores decimales de los 8 bits m&aacute;s significativos de la direcci&oacute;n IPv4, y las &laquo;x&raquo; son valores hexadecimales de los tramos menos significativos de la direcci&oacute;n IPv6.";
 choices[71][3] = " La direcci&oacute;n 0:0:0:0:0:0:0:0 es conocida como &laquo;unspecified address&raquo; y nunca debe ser asignada a un nodo.";
 answers[71] = choices[71][3];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 8158. Map 2008";


//  Id pregunta: 8206 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  En relaci&oacute;n con los perfiles de participantes, seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[72]= new Array();
 choices[72][0] = "Son 5: Directivo, Jefe de Proyecto, Consultor, Analista y Programador.";
 choices[72][1] = "Son 7: Director, Jefe de Proyecto, Equipo de Proyecto y Responsables de Arquitectura, Seguridad, Sistemas yOperaciones.";
 choices[72][2] = "Son 8: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsables de Arquitectura, Seguridad,Sistemas y Operaciones.";
 choices[72][3] = "Son 5: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsable de Calidad.";
 answers[72] = choices[72][0];
 units[72] = "86";
 comments[72] = "Id Pregunta: 8206. Examen TIC A1 2010";


//  Id pregunta: 8279 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes PDUs se a&ntilde;ade en SNMPv2 con respecto a las de SNMPv1?:";
 choices[73]= new Array();
 choices[73][0] = "Trap.";
 choices[73][1] = "GetResponse.";
 choices[73][2] = "GetBulkRequest.";
 choices[73][3] = "GetNextRequest.";
 answers[73] = choices[73][2];
 units[73] = "104";
 comments[73] = "Id Pregunta: 8279. Examen TIC A1 2010";


//  Id pregunta: 8326 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  El protocolo LAPB:";
 choices[74]= new Array();
 choices[74][0] = "Se implementa en la capa de aplicaci&oacute;n del modelo OSI";
 choices[74][1] = "Utiliza tramas con el mismo formato que HDLC";
 choices[74][2] = "Utiliza todo el juego de comandos de HDLC";
 choices[74][3] = "Se implementa en la capa de red del modelo OSI";
 answers[74] = choices[74][1];
 units[74] = "101";
 comments[74] = "Id Pregunta: 8326. Analista Ayto. Madrid 2010";


//  Id pregunta: 8334 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica 3?";
 choices[75]= new Array();
 choices[75][0] = "Perfil Jefe de Proyecto.";
 choices[75][1] = "Perfil Consultor. ";
 choices[75][2] = "Perfil Analista.";
 choices[75][3] = "Perfil Programador.";
 answers[75] = choices[75][0];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8334. Examen TIC A2 2010";


//  Id pregunta: 8390 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  Cuando un sistema se debe modificar para que contemple un cambio en las necesidades de los usuarios, se hace referencia al:";
 choices[76]= new Array();
 choices[76][0] = "Mantenimiento Correctivo.";
 choices[76][1] = "Mantenimiento Evolutivo.";
 choices[76][2] = "Mantenimiento Adaptativo.";
 choices[76][3] = "Mantenimiento Perfectivo.";
 answers[76] = choices[76][1];
 units[76] = "86";
 comments[76] = "Id Pregunta: 8390. Examen TIC A2 2010";


//  Id pregunta: 8419 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[77]= new Array();
 choices[77][0] = "Bluetooth";
 choices[77][1] = "PayPal Mobile";
 choices[77][2] = "NFC (Near Field Communication)";
 choices[77][3] = "3D Secure";
 answers[77] = choices[77][2];
 units[77] = "70, 107";
 comments[77] = "Id Pregunta: 8419. ";


//  Id pregunta: 8444 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza puertos UDP y TCP para la operaci&oacute;n delnivel de transporte?:";
 choices[78]= new Array();
 choices[78][0] = "FTP.";
 choices[78][1] = "TFTP.";
 choices[78][2] = "DNS.";
 choices[78][3] = "Ninguno de los anteriores.";
 answers[78] = choices[78][2];
 units[78] = "100";
 comments[78] = "Id Pregunta: 8444. Analista Ayto. Madrid 2010";


//  Id pregunta: 8661 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  De las siguientes, &iquest;cu&aacute;l no es una funci&oacute;n realizada por los mensajes enviados por el protocolo ICMP?";
 choices[79]= new Array();
 choices[79][0] = "Control de flujo";
 choices[79][1] = "Detecci&oacute;n de destinos inalcanzables";
 choices[79][2] = "Encapsulaci&oacute;n de datagramas";
 choices[79][3] = "Redirecci&oacute;n de rutas";
 answers[79] = choices[79][2];
 units[79] = "100";
 comments[79] = "Id Pregunta: 8661. Examen UPM A2 2011";


//  Id pregunta: 8781 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[80]= new Array();
 choices[80][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[80][1] = "En el Registro Civil.";
 choices[80][2] = "En el Registro Mercantil.";
 choices[80][3] = "En el Registro General del Ministerio de Justicia.";
 answers[80] = choices[80][0];
 units[80] = "29";
 comments[80] = "Id Pregunta: 8781. Examen UPM A2 2011";


//  Id pregunta: 8887 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes no es tipo de primitiva?";
 choices[81]= new Array();
 choices[81][0] = "Received";
 choices[81][1] = "Indication";
 choices[81][2] = "Response";
 choices[81][3] = "Request";
 answers[81] = choices[81][0];
 units[81] = "100";
 comments[81] = "Id Pregunta: 8887. ";


//  Id pregunta: 8889 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes no es un ASE?";
 choices[82]= new Array();
 choices[82][0] = "ACSE";
 choices[82][1] = "MCSE";
 choices[82][2] = "RTSE";
 choices[82][3] = "ROSE";
 answers[82] = choices[82][1];
 units[82] = "100";
 comments[82] = "Id Pregunta: 8889. ";


//  Id pregunta: 8907 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Qu&eacute; relaci&oacute;n existe entre fichero, registro y campo?:";
 choices[83]= new Array();
 choices[83][0] = "El fichero esta formado por varios campos y a cada conjunto de campos con un significado relevante se le conoce como registro.";
 choices[83][1] = "Los registros est&aacute;n compuestos por campos, pero no tienen ninguna relaci&oacute;n con un fichero.";
 choices[83][2] = "Los ficheros contienen registros y los registros est&aacute;n formados por una serie de campos cada uno de los cuales contiene un tipo de informaci&oacute;n sobre dicho registro.";
 choices[83][3] = "Ninguna de las anteriores es correcta";
 answers[83] = choices[83][2];
 units[83] = "52";
 comments[83] = "Id Pregunta: 8907. Operador Ayto. Madrid 2010";


//  Id pregunta: 8941 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[84]= new Array();
 choices[84][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[84][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[84][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[84][3] = "Ninguno de los anteriores";
 answers[84] = choices[84][2];
 units[84] = "43";
 comments[84] = "Id Pregunta: 8941. ";


//  Id pregunta: 8955 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  En el arranque en Linux &iquest;cu&aacute;l de los siguientes procesos se ejecuta en primer lugar?:";
 choices[85]= new Array();
 choices[85][0] = "page daemon";
 choices[85][1] = "swapper";
 choices[85][2] = "init";
 choices[85][3] = "sbin";
 answers[85] = choices[85][1];
 units[85] = "53";
 comments[85] = "Id Pregunta: 8955. ";


//  Id pregunta: 9012 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Las p&eacute;rdidas debidas a absorci&oacute;n por gases atmosf&eacute;ricos deben tenerse en cuenta en:";
 choices[86]= new Array();
 choices[86][0] = "Radioenlaces de frecuencias superiores a 30 GHz.";
 choices[86][1] = "Radioenlaces de frecuencias superiores a 3 GHz.";
 choices[86][2] = "Radioenlaces de frecuencias superiores a 300 MHz.";
 choices[86][3] = "Radioenlaces de frecuencias superiores a 300 kHz";
 answers[86] = choices[86][1];
 units[86] = "108";
 comments[86] = "Id Pregunta: 9012. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9229 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  &ldquo;Un sistema distribuido es una colecci&oacute;n de computadores independientes que aparece ante los usuarios del sistema como una &uacute;nica computadora&rdquo;, es una definici&oacute;n de:";
 choices[87]= new Array();
 choices[87][0] = "Tanenbaum";
 choices[87][1] = "Sloman &amp; Kramer.";
 choices[87][2] = "Shanon";
 choices[87][3] = "No se corresponde a la definici&oacute;n de un sistema distribuido.";
 answers[87] = choices[87][0];
 units[87] = "50";
 comments[87] = "Id Pregunta: 9229. ";


//  Id pregunta: 9412 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  En general, no se entiende por m&eacute;trica software";
 choices[88]= new Array();
 choices[88][0] = "Una asignaci&oacute;n de valor a un atributo de una entidad propia del software, ya sea un producto o un proceso";
 choices[88][1] = "Una caracter&iacute;stica o atributo propio del software o del proceso de construcci&oacute;n del software";
 choices[88][2] = "Una medida cuantitativa del grado en el que un sistema, un componente o un proceso posee un determinado atributo";
 choices[88][3] = "Una medida o conjunto de medidas destinadas a conocer o estimar el tama&ntilde;o u otra caracter&iacute;stica de un software o un sistema de informaci&oacute;n";
 answers[88] = choices[88][1];
 units[88] = "89";
 comments[88] = "Id Pregunta: 9412. ";


//  Id pregunta: 9670 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  La gesti&oacute;n NUMA:";
 choices[89]= new Array();
 choices[89][0] = "Significa Not Uniform Memory Access.";
 choices[89][1] = "Significa Not Unit of Memory Available.";
 choices[89][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[89][3] = "La a) y la c)";
 answers[89] = choices[89][3];
 units[89] = "45";
 comments[89] = "Id Pregunta: 9670. ";


//  Id pregunta: 9681 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  KML:";
 choices[90]= new Array();
 choices[90][0] = "Es un lenguaje de marcado basado en XML para representar datos geogr&aacute;ficos en tres dimensiones.";
 choices[90][1] = "Es un conjunto de est&aacute;ndares para representar informaci&oacute;n geogr&aacute;fica mediante el uso de capas y est&aacute; construido dentro de la familia de formatos XML.";
 choices[90][2] = "Se crea en contraposici&oacute;n a la gram&aacute;tica de GML.";
 choices[90][3] = "Fue desarrollado para ser manejado con Keyoverlay LT, precursor de Google Earth.";
 answers[90] = choices[90][0];
 units[90] = "67";
 comments[90] = "Id Pregunta: 9681. ";


//  Id pregunta: 9719 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  En Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones, CRUD";
 choices[91]= new Array();
 choices[91][0] = "es el acr&oacute;nimo de Crear, Leer/Obtener, Actualizar y Borrar (Create, Read/Retrieve, Update, Delete).";
 choices[91][1] = "es la base de arquitecturas Web RESTful (basadas en REST).";
 choices[91][2] = "tiene su origen en sentencias de base de datos relacionales.";
 choices[91][3] = "las opciones a, b y c son ciertas.";
 answers[91] = choices[91][3];
 units[91] = "58";
 comments[91] = "Id Pregunta: 9719. Examen TIC-A1 2013";


//  Id pregunta: 9723 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud Computing?";
 choices[92]= new Array();
 choices[92][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[92][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[92][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[92][3] = "Todas las respuestas anteriores son ciertas.";
 answers[92] = choices[92][3];
 units[92] = "47";
 comments[92] = "Id Pregunta: 9723. Examen TIC-A1 2013";


//  Id pregunta: 9730 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de estas aseveraciones es INCORRECTA? En programaci&oacute;n, la ofuscaci&oacute;n del c&oacute;digo fuente";
 choices[93]= new Array();
 choices[93][0] = "dificulta la legilibilidad del c&oacute;digo fuente, pudiendo usar cifrado.";
 choices[93][1] = "impide la ingenier&iacute;a inversa.";
 choices[93][2] = "es un ejemplo de seguridad a trav&eacute;s de la oscuridad.";
 choices[93][3] = "es aplicable a lenguajes compilados directamente a c&oacute;digo m&aacute;quina como C o C++.";
 answers[93] = choices[93][1];
 units[93] = "91";
 comments[93] = "Id Pregunta: 9730. Examen TIC-A1 2013";


//  Id pregunta: 9858 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Si el usuario A desea enviar un documento firmado digitalmente por &eacute;l al usuario B:";
 choices[94]= new Array();
 choices[94][0] = "El usuario A debe enviar el documento acompa&ntilde;ado del documento cifrado con la clave p&uacute;blica de B.";
 choices[94][1] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave p&uacute;blica de B.";
 choices[94][2] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave privada de A.";
 choices[94][3] = "El usuario A debe enviar el documento cifrado con la clave p&uacute;blica de B acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y todo cifrado con la clave privada de A.";
 answers[94] = choices[94][2];
 units[94] = "111";
 comments[94] = "Id Pregunta: 9858. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9977 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  En un sistema de gesti&oacute;n documental, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA? ";
 choices[95]= new Array();
 choices[95][0] = "Un sistema de gesti&oacute;n documental se define como un conjunto de elementos y relaciones entre ellos, que tiene el prop&oacute;sito de normalizar, controlar y coordinar todas las actividades y procesos que afectan en cualquiermedida a los documentos generados en el transcurso de la actividad de una organizaci&oacute;n ";
 choices[95][1] = "Un sistema de gesti&oacute;n documental tiene que conservar los atributos b&aacute;sicos de los documentos ";
 choices[95][2] = "Un sistema de gesti&oacute;n documental tiene que mantener la organizaci&oacute;n de los documentos integrados en un contexto ";
 choices[95][3] = "Las operaciones m&aacute;s habituales que se realizan sobre estos documentos, abarcan parte de su ciclo de vida, desde su almacenamiento hasta la puesta a disposici&oacute;n de los usuarios ";
 answers[95] = choices[95][3];
 units[95] = "95";
 comments[95] = "Id Pregunta: 9977. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 9982 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[96]= new Array();
 choices[96][0] = "&lt;% y %&gt;";
 choices[96][1] = "&lt;SCRIPT LANGUAGE=ASPScript&gt;&lt;/SCRIPT&gt;";
 choices[96][2] = "&lt;!-- --&gt;";
 choices[96][3] = "Los comandos ASP no se mezclan en el mismo archivo que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[96] = choices[96][2];
 units[96] = "59,115";
 comments[96] = "Id Pregunta: 9982. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10225 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[97]= new Array();
 choices[97][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[97][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[97][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[97][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[97] = choices[97][1];
 units[97] = "60";
 comments[97] = "Id Pregunta: 10225. ";


//  Id pregunta: 10250 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Recibe muchas modificaciones y Juan decide incorporarlas a una nueva versi&oacute;n de su software. Finalmente, Juan decide hacer una versi&oacute;n propietaria de su software, y declara:";
 choices[98]= new Array();
 choices[98][0] = "I) y II) son verdaderas";
 choices[98][1] = "I) es verdadera, II) es falsa";
 choices[98][2] = "I es falsa, II) es verdadera";
 choices[98][3] = "I) y II) son falsas";
 answers[98] = choices[98][3];
 units[98] = "61";
 comments[98] = "Id Pregunta: 10250. ";


//  Id pregunta: 10268 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Las infracciones leves de la Ley 15/1999:";
 choices[99]= new Array();
 choices[99][0] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben al a&ntilde;o";
 choices[99][1] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben al a&ntilde;o";
 choices[99][2] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben a los seis meses";
 choices[99][3] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben a los seis meses";
 answers[99] = choices[99][1];
 units[99] = "29";
 comments[99] = "Id Pregunta: 10268. Art&iacute;culos 45.1 y 47.1 de la Ley 15/1999";


