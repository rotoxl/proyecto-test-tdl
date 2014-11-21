/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 325 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  La planificaci&oacute;n de la capacidad de un sistema debe tener en cuenta los factores:";
 choices[0]= new Array();
 choices[0][0] = "Caracter&iacute;sticas de la carga de trabajo, caracter&iacute;sticas de funcionamiento de los recursos, disponibilidad del sistema y requisitos de servicio del usuario";
 choices[0][1] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad del sistema y horas de trabajo de los usuarios";
 choices[0][2] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad del sistema y requisitos de servicio de los usuarios";
 choices[0][3] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad de los recursos y requisitos de servicio de los usuarios";
 answers[0] = choices[0][2];
 units[0] = "35";
 comments[0] = "Id Pregunta: 325. ";


//  Id pregunta: 471 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  Una hip&oacute;tesis b&aacute;sica para la aplicabilidad del m&eacute;todo de ponderaci&oacute;n lineal en la selecci&oacute;n de bienes y servicios es:";
 choices[1]= new Array();
 choices[1][0] = "La linealidad de las funciones de utilidad de los factores de decisi&oacute;n usados";
 choices[1][1] = "La independencia (separabilidad) de las funciones de utilidad";
 choices[1][2] = "La continuidad (ausencia de puntos singulares)";
 choices[1][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[1] = choices[1][1];
 units[1] = "34";
 comments[1] = "Id Pregunta: 471. ";


//  Id pregunta: 632 Año de creación de pregunta: 2006-01-01
 questions[2]= "3)  Cu&aacute;l de las siguientes t&eacute;cnicas no persigue la comprobaci&oacute;n o el control de la legalidad del Software:";
 choices[2]= new Array();
 choices[2][0] = "DRM (Digital Rigths Management).";
 choices[2][1] = "CRM (Copyright Rights Management).";
 choices[2][2] = "Marcas de Agua.";
 choices[2][3] = "TPM (Technical Protection Measures).";
 answers[2] = choices[2][1];
 units[2] = "37";
 comments[2] = "Id Pregunta: 632. ";


//  Id pregunta: 866 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes es un protocolo de directorio?:";
 choices[3]= new Array();
 choices[3][0] = "MIME";
 choices[3][1] = "LDAP";
 choices[3][2] = "SMNP";
 choices[3][3] = "BGP";
 answers[3] = choices[3][1];
 units[3] = "73";
 comments[3] = "Id Pregunta: 866. ";


//  Id pregunta: 1238 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  La principal :diferencia entre HTML y XML es que:";
 choices[4]= new Array();
 choices[4][0] = "HTML es un lenguaje orientado a textos, aunque maneja gr&aacute;ficos con dificultad, XML es mucho mas versatil y suple las carencias de HTML";
 choices[4][1] = "XML es un lenguaje de descripci&oacute;n de contenidos, y HTML de presentaci&oacute;n, es posible incluso que documentos XML se transformen en HTML";
 choices[4][2] = "XML es un subconjunto de HTML";
 choices[4][3] = "B y C son ciertas";
 answers[4] = choices[4][1];
 units[4] = "69";
 comments[4] = "Id Pregunta: 1238. ";


//  Id pregunta: 1264 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Las siglas MIDI se corresponden con:";
 choices[5]= new Array();
 choices[5][0] = "Mathematical Investigation, Development &amp; Investigation";
 choices[5][1] = "Multimedia &amp; Internet Digital Interface";
 choices[5][2] = "Musical Instruments Digital Interface";
 choices[5][3] = "Las siglas MIDI no tienen correspondencia real en el mundo de la tecnolog&iacute;a";
 answers[5] = choices[5][2];
 units[5] = "47";
 comments[5] = "Id Pregunta: 1264. ";


//  Id pregunta: 1392 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[6]= new Array();
 choices[6][0] = "Al servidor DNS principal";
 choices[6][1] = "Al servidor web asociado al dominio";
 choices[6][2] = "Al servidor de correo asociado al dominio";
 choices[6][3] = "Al servidor seguro asociado al dominio";
 answers[6] = choices[6][2];
 units[6] = "73";
 comments[6] = "Id Pregunta: 1392. ";


//  Id pregunta: 1486 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera respecto a la criptograf&iacute;a?:";
 choices[7]= new Array();
 choices[7][0] = "Los algoritmos &quot;stream&quot; son los mas rapidos";
 choices[7][1] = "Los algoritmos &quot;stream&quot; y &quot;block&quot; son equiparables";
 choices[7][2] = "La  velocidad no tiene ninguna correlaci&oacute;n con la longitud de clave ";
 choices[7][3] = "3DES es m&aacute;s seguro y lento que DES";
 answers[7] = choices[7][1];
 units[7] = "73";
 comments[7] = "Id Pregunta: 1486. ";


//  Id pregunta: 1775 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es falso respecto a la licencia GPL?";
 choices[8]= new Array();
 choices[8][0] = "Los programas con licencia GPL carecen de derechos de autor";
 choices[8][1] = "Exige que los fuentes est&eacute;n a disposici&oacute;n de quien disponga de los binarios";
 choices[8][2] = "No permite su integraci&oacute;n con software propietario";
 choices[8][3] = "Permite modificaciones y redistribuci&oacute;n de estas";
 answers[8] = choices[8][0];
 units[8] = "61,62";
 comments[8] = "Id Pregunta: 1775. ";


//  Id pregunta: 1778 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  &iquest;Cual de los siguientes ser&iacute;a uno de los productos equivalentes a Excel en el software libre?";
 choices[9]= new Array();
 choices[9][0] = "Konqueror";
 choices[9][1] = "Kspread";
 choices[9][2] = "Apache";
 choices[9][3] = "Evolution";
 answers[9] = choices[9][1];
 units[9] = "61,62";
 comments[9] = "Id Pregunta: 1778. ";


//  Id pregunta: 1951 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es un &quot;Parser&quot; XML?";
 choices[10]= new Array();
 choices[10][0] = "Un m&oacute;dulo o programa que se ocupa de archivar en local los c&oacute;digos XML";
 choices[10][1] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n externa";
 choices[10][2] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n interna";
 choices[10][3] = "Un m&oacute;dulo o programa que se ocupa de archivar en la correspondiente Base de Datos los c&oacute;digos XML";
 answers[10] = choices[10][2];
 units[10] = "69";
 comments[10] = "Id Pregunta: 1951. ";


//  Id pregunta: 2114 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;A qu&eacute; se refieren las normas ISO 14000?:";
 choices[11]= new Array();
 choices[11][0] = "A la calidad en los procesos productivos";
 choices[11][1] = "A la preservaci&oacute;n del medio ambiente en los procesos productivos";
 choices[11][2] = "A la documentaci&oacute;n del SW en las distintas etapas de un modelo en cascada";
 choices[11][3] = "A la ergonom&iacute;a de los puestos de trabajo";
 answers[11] = choices[11][1];
 units[11] = "92";
 comments[11] = "Id Pregunta: 2114. ";


//  Id pregunta: 2260 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  DRM es:";
 choices[12]= new Array();
 choices[12][0] = "un sistema de modulaci&oacute;n digital basado en secuencias aleatorias";
 choices[12][1] = "un conjunto de directivas para la investigaci&oacute;n de tecnolog&iacute;as m&oacute;viles";
 choices[12][2] = "un programa de formaci&oacute;n especializado en las relaciones entre directivos";
 choices[12][3] = "una tecnolog&iacute;a para la gesti&oacute;n de los derechos de los contenidos digitales ";
 answers[12] = choices[12][3];
 units[12] = "37";
 comments[12] = "Id Pregunta: 2260. ";


//  Id pregunta: 2324 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  En la medici&oacute;n de la productividad en el software orientado a objetos, &iquest;cu&aacute;l de los siguientes criterios es el m&aacute;s importante?:";
 choices[13]= new Array();
 choices[13][0] = "La cantidad de software producido por unidad de tiempo";
 choices[13][1] = "La reutilizaci&oacute;n del software producido";
 choices[13][2] = "El seguimiento estricto de una metodolog&iacute;a";
 choices[13][3] = "La calidad de software en cu&aacute;nto al cumplimiento de la funcionalidad requerida";
 answers[13] = choices[13][1];
 units[13] = "88";
 comments[13] = "Id Pregunta: 2324. ";


//  Id pregunta: 2357 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Entre las novedades de la versi&oacute;n 3 de la metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA del Consejo Superior de Administraci&oacute;n Electr&oacute;nica, respecto de su versi&oacute;n anterior, tenemos:";
 choices[14]= new Array();
 choices[14][0] = "Se incluyen las t&eacute;cnicas propias de un desarrollo orientado a objetos y las t&eacute;cnicas de desarrollo del tipo estructurado";
 choices[14][1] = "La incorporaci&oacute;n del proceso de Mantenimiento y de los &uacute;ltimos est&aacute;ndares de ingenier&iacute;a de software y de calidad ISO 12207 e ISO 9000-3";
 choices[14][2] = "La incorporaci&oacute;n con puntos definidos de interfaz para las metodolog&iacute;as de seguridad (MAGERIT), de aseguramiento de la calidad (PGGC - Plan General de Garant&iacute;a de Calidad), Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos";
 choices[14][3] = "Todas las anteriores";
 answers[14] = choices[14][3];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2357. ";


//  Id pregunta: 2383 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indicar cu&aacute;l de los siguientes componentes no pertenece al Plan General de Garant&iacute;a de Calidad elaborado por el Ministerio de Administraciones P&uacute;blicas para el Consejo Superior de Inform&aacute;tica en 1991:";
 choices[15]= new Array();
 choices[15][0] = "Esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos";
 choices[15][1] = "Procedimientos de Control de Calidad";
 choices[15][2] = "Plan de desarrollo de prototipos";
 choices[15][3] = "Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de Planes de Garant&iacute;a de Calidad";
 answers[15] = choices[15][2];
 units[15] = "87,88";
 comments[15] = "Id Pregunta: 2383. ";


//  Id pregunta: 2397 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  La interfaz de METRICA V3 denominada &quot;Gesti&oacute;n de proyectos&quot;:";
 choices[16]= new Array();
 choices[16][0] = "Contempla tanto el desarrollo de nuevos proyectos como la ampliaci&oacute;n y mejora de los ya existentes (mantenimiento de sistemas de informaci&oacute;n)";
 choices[16][1] = "Consta de 4 tipos de actividades: de inicio de proyecto, de seguimiento y control, de finalizaci&oacute;n de proyecto, y de mantenimiento";
 choices[16][2] = "Tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos no materiales";
 choices[16][3] = "Se emplea en la Administraci&oacute;n P&uacute;blica en sustituci&oacute;n de Eurom&eacute;todo";
 answers[16] = choices[16][0];
 units[16] = "86";
 comments[16] = "Id Pregunta: 2397. ";


//  Id pregunta: 2398 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  La metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA V3 es una iniciativa promovida por:";
 choices[17]= new Array();
 choices[17][0] = "La Subdirecci&oacute;n General de Coordinaci&oacute;n Inform&aacute;tica del MAP";
 choices[17][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[17][2] = "La Direcci&oacute;n General de Inform&aacute;tica Tributaria";
 choices[17][3] = "Todas las anteriores";
 answers[17] = choices[17][1];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2398. ";


//  Id pregunta: 2565 Año de creación de pregunta: 2003-01-01
 questions[18]= "19)  El modelado de Procesos de la Organizaci&oacute;n y el Modelo entidad/relaci&oacute;n extendido se utiliza en la siguiente actividad del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n METRICA V3:";
 choices[18]= new Array();
 choices[18][0] = "Estas t&eacute;cnicas no se utilizan en el PSI.";
 choices[18][1] = "PSI6 Dise&ntilde;o de Modelos de Sistemas de Informaci&oacute;n.";
 choices[18][2] = "PSI5 Estudio de los sistemas de Informaci&oacute;n actuales.";
 choices[18][3] = "PSI4 Identificaci&oacute;n de requisitos.";
 answers[18] = choices[18][3];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2565. Junta Andaluc&iacute;a";


//  Id pregunta: 2649 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  Indicar la afirmaci&oacute;n falsa sobre Diagramas de Flujo de Datos";
 choices[19]= new Array();
 choices[19][0] = "No se puede representar flujos de datos entre almacenes y entidades externas";
 choices[19][1] = "Se pueden representar relaciones entre entidades externas ";
 choices[19][2] = "No se debe representar la clave de acceso al almac&eacute;n sino s&oacute;lo la operaci&oacute;n que se realice en el almac&eacute;n";
 choices[19][3] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es s&iacute;ncrona";
 answers[19] = choices[19][1];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2649. ";


//  Id pregunta: 2790 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  La actividad de &quot;Verificaci&oacute;n y Aceptaci&oacute;n de la Arquitectura del Sistema &quot;";
 choices[20]= new Array();
 choices[20][0] = "Es anterior a la de &quot;Dise&ntilde;o f&iacute;sico de datos&quot;.";
 choices[20][1] = "Es posterior a la de &quot;Dise&ntilde;o de la Migraci&oacute;n y Carga Inicial de Datos&quot;.";
 choices[20][2] = "Es simult&aacute;nea a la de &quot;Dise&ntilde;o f&iacute;sico de datos&quot;.";
 choices[20][3] = "Es anterior a la de &quot;Generaci&oacute;n de Especificaciones de Construcci&oacute;n&quot;.";
 answers[20] = choices[20][3];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2790. ";


//  Id pregunta: 2878 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest; Cu&aacute;l de las siguientes normas se ha tenido en cuenta como referencia principal en M&Eacute;TRICA versi&oacute;n 3?";
 choices[21]= new Array();
 choices[21][0] = "ISO/IEC TR 16.502/SPICE";
 choices[21][1] = "ISO 12.207";
 choices[21][2] = "IEEE 600.11-1990";
 choices[21][3] = "UNE-EN-ISO 9001:2000";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2878. ";


//  Id pregunta: 2933 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  ECMAscript, con cu&aacute;l de los siguientes lenguajes de script se relaciona:";
 choices[22]= new Array();
 choices[22][0] = "JavaScript";
 choices[22][1] = "VBScript";
 choices[22][2] = "Jscript";
 choices[22][3] = "Perlscript";
 answers[22] = choices[22][0];
 units[22] = "114";
 comments[22] = "Id Pregunta: 2933. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2934 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  &iquest;Qu&eacute; protocolo de correo permite acceder al correo electr&oacute;nico, manteniendo los mensajes en el servidor, de forma que pueda accederse al correo desde distintos terminales?";
 choices[23]= new Array();
 choices[23][0] = "POP-3";
 choices[23][1] = "SMTP";
 choices[23][2] = "IMAP";
 choices[23][3] = "MIME";
 answers[23] = choices[23][2];
 units[23] = "106";
 comments[23] = "Id Pregunta: 2934. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2965 Año de creación de pregunta: 2004-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l es el sistema de acceso que utiliza GPRS?";
 choices[24]= new Array();
 choices[24][0] = "OFDM/TDD";
 choices[24][1] = "CDMA/TDD";
 choices[24][2] = "CDMA/FDD";
 choices[24][3] = "Ninguno de los anteriores";
 answers[24] = choices[24][3];
 units[24] = "108";
 comments[24] = "Id Pregunta: 2965. ";


//  Id pregunta: 2975 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  El sistema de comunicaciones m&oacute;viles GSM se compone de diversos elementos tales como el HLR y VLR que son?";
 choices[25]= new Array();
 choices[25][0] = "estaciones base";
 choices[25][1] = "bases de datos de usuarios";
 choices[25][2] = "MSC";
 choices[25][3] = "ninguna de las anteriores";
 answers[25] = choices[25][1];
 units[25] = "108";
 comments[25] = "Id Pregunta: 2975. Examen Julio 2003";


//  Id pregunta: 3053 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Dado un cable coaxial de longitud 1 metro, donde se aplica una potencia de 1 mW, y se obtiene en el otro extremo una potencia de salida de 0.1 mW, se puede decir que el cable presenta unas p&eacute;rdidas de:";
 choices[26]= new Array();
 choices[26][0] = "10 dB/m";
 choices[26][1] = "20 dB/m";
 choices[26][2] = "1 dB/m";
 choices[26][3] = "5 dB/m";
 answers[26] = choices[26][0];
 units[26] = "99";
 comments[26] = "Id Pregunta: 3053. ";


//  Id pregunta: 3055 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  Dentro de la norma X.400, &iquest; qu&eacute; se entiende por Agente de Usuario (UA)?:";
 choices[27]= new Array();
 choices[27][0] = "El usuario que puede ser una persona o programa de aplicaci&oacute;n";
 choices[27][1] = "Agente que almacena y retransmite los mensajes destinados a un usuario";
 choices[27][2] = "Agente que enruta los mensajes.";
 choices[27][3] = "Proceso de aplicaci&oacute;n que interactua con el sistema de transferencia de mensajes";
 answers[27] = choices[27][3];
 units[27] = "106";
 comments[27] = "Id Pregunta: 3055. ";


//  Id pregunta: 3065 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  En un sistema de alimentaci&oacute;n ininterrumpida, a qu&eacute; se denomina 'red de reserva':";
 choices[28]= new Array();
 choices[28][0] = "A la suministrada por la compa&ntilde;ia el&eacute;ctrica";
 choices[28][1] = "A la que suministra el ondulador (inversor) a la carga";
 choices[28][2] = "A la carga remanente en las bater&iacute;as";
 choices[28][3] = "A la que entrega el rectificador";
 answers[28] = choices[28][0];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3065. ";


//  Id pregunta: 3075 Año de creación de pregunta: 2005-01-01
 questions[29]= "30)  La disponibilidad de un sistema se define como:";
 choices[29]= new Array();
 choices[29][0] = "La proporci&oacute;n de tiempo en la que es realmente utilizado";
 choices[29][1] = "El cociente entre el tiempo medio de reparaci&oacute;n y el tiempo medio entre casas";
 choices[29][2] = "La disposici&oacute;n de los servicios a ser usados cuando sea necesario.";
 choices[29][3] = "La probabilidad de que un sistema falle en un instante dado";
 answers[29] = choices[29][2];
 units[29] = "111";
 comments[29] = "Id Pregunta: 3075. Definici&oacute;n dada en Magerit V2";


//  Id pregunta: 3111 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;A qu&eacute; nivel de OSI es equivalente el protocolo IP (Internet Protocol)?:";
 choices[30]= new Array();
 choices[30][0] = "Enlace";
 choices[30][1] = "Red";
 choices[30][2] = "Transporte";
 choices[30][3] = "Comunicaci&oacute;n";
 answers[30] = choices[30][1];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3111. ";


//  Id pregunta: 3213 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  El error 404 seg&uacute;n el protocolo HTTP indica:";
 choices[31]= new Array();
 choices[31][0] = "mensaje de petici&oacute;n no reconocido";
 choices[31][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[31][2] = "versi&oacute;n HTTP no soportada";
 choices[31][3] = "el objeto pedido no se encuentra en el servidor";
 answers[31] = choices[31][3];
 units[31] = "112";
 comments[31] = "Id Pregunta: 3213. ";


//  Id pregunta: 3236 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes protocolos reporta los problemas de entrega y encaminamiento en IP?:";
 choices[32]= new Array();
 choices[32][0] = "TCP";
 choices[32][1] = "ICMP";
 choices[32][2] = "RIP";
 choices[32][3] = "UDP";
 answers[32] = choices[32][1];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3236. ";


//  Id pregunta: 3360 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  De los t&eacute;rminos 'wander' y 'jitter' podemos decir:";
 choices[33]= new Array();
 choices[33][0] = "Que son lo mismo en terminolog&iacute;a americana e inglesa";
 choices[33][1] = "Que wander se refiere a oscilaciones de frecuencia a baja frecuencia y jitter a oscilaciones de frecuencia en alta frecuencia";
 choices[33][2] = "Que wander se refiere a oscilaciones de frecuencia a alta frecuencia y jitter a oscilaciones de frecuencia en baja frecuencia";
 choices[33][3] = "No existen los t&eacute;rminos wander ni jitter en telecomunicaciones";
 answers[33] = choices[33][1];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3360. *: frecuencias";


//  Id pregunta: 3438 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  El proceso de multiplexaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Permite a dispositivos ejecutar diferentes aplicaciones software al mismo tiempo";
 choices[34][1] = "Interconecta m&uacute;ltiples redes que usan diferentes medio f&iacute;sico de enlace";
 choices[34][2] = "Permite que la informaci&oacute;n de encaminamiento (routing) de diferentes protocolos se intercambie y se use para actualizar las tablas de encaminamiento";
 choices[34][3] = "Permite que datos de fuentes diferentes sean transmitidos simult&aacute;neamente sobre un &uacute;nico enlace";
 answers[34] = choices[34][3];
 units[34] = "99, 100, 105";
 comments[34] = "Id Pregunta: 3438. *: multiplexacion";


//  Id pregunta: 3465 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  El puerto 53 es usado com&uacute;nmente en internet para el protocolo:";
 choices[35]= new Array();
 choices[35][0] = "DNS";
 choices[35][1] = "HTTP";
 choices[35][2] = "FTP ";
 choices[35][3] = "Telnet";
 answers[35] = choices[35][0];
 units[35] = "112";
 comments[35] = "Id Pregunta: 3465. ";


//  Id pregunta: 3475 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  El t&eacute;rmino VHE hace referencia a:";
 choices[36]= new Array();
 choices[36][0] = "Un componente de una red UMTS";
 choices[36][1] = "Un componente de una red GSM";
 choices[36][2] = "Un conjunto de servicios cuya apariencia es independiente de la red";
 choices[36][3] = "Un rango de frecuencias";
 answers[36] = choices[36][2];
 units[36] = "108";
 comments[36] = "Id Pregunta: 3475. ";


//  Id pregunta: 3527 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  En la arquitectura de cortafuegos &quot;screened subnet&quot; o subred apantallada:";
 choices[37]= new Array();
 choices[37][0] = "se dispone de un &uacute;nico router, estando el basti&oacute;n y los dem&aacute;s componentes en la red interna";
 choices[37][1] = "se dispone de 2 routers, interno y externo, y tanto el basti&oacute;n como los dem&aacute;s componentes est&aacute;n en la red interna";
 choices[37][2] = "se dispone de 2 routers, interno y externo, y el basti&oacute;n est&aacute; en una red intermedia desmilitarizada o DMZ";
 choices[37][3] = "no se dispone de ning&uacute;n router, sino de un basti&oacute;n con funciones de proxy que apantalla la red interna y alberga los servidores p&uacute;blicos";
 answers[37] = choices[37][2];
 units[37] = "111";
 comments[37] = "Id Pregunta: 3527. ";


//  Id pregunta: 3533 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  En las necesidades para establecer una aplicaci&oacute;n de videoconferencia, es falso que se requiera:";
 choices[38]= new Array();
 choices[38][0] = "una compresi&oacute;n / descompresi&oacute;n en tiempo real";
 choices[38][1] = "unos l&iacute;mites m&iacute;nimos y m&aacute;ximos para el retardo de comunicaci&oacute;n";
 choices[38][2] = "una sincronizaci&oacute;n de audio y de video";
 choices[38][3] = "un protocolo de se&ntilde;alizaci&oacute;n";
 answers[38] = choices[38][1];
 units[38] = "117";
 comments[38] = "Id Pregunta: 3533. ";


//  Id pregunta: 3673 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Una emisora de radiodifusi&oacute;n comercial es un ejemplo de sistemas de transmisi&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Simplex";
 choices[39][1] = "Semiduplex";
 choices[39][2] = "Duplex";
 choices[39][3] = "Half duplex";
 answers[39] = choices[39][0];
 units[39] = "99";
 comments[39] = "Id Pregunta: 3673. ";


//  Id pregunta: 4000 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;C&oacute;mo se denomina a la configuraci&oacute;n de una red de cable en la que la fibra llega hasta los derivadores (&quot;taps&quot;)?";
 choices[40]= new Array();
 choices[40][0] = "Fiber to the bridger";
 choices[40][1] = "Fiber to the curb";
 choices[40][2] = "Fiber to the home";
 choices[40][3] = "Fiber to the last amplifier";
 answers[40] = choices[40][1];
 units[40] = "105";
 comments[40] = "Id Pregunta: 4000. ";


//  Id pregunta: 4009 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Qu&eacute; recomendaci&oacute;n del mundo Internet define el formato de los mensajes de correo electr&oacute;nico?";
 choices[41]= new Array();
 choices[41][0] = "RFC 821";
 choices[41][1] = "RFC 820";
 choices[41][2] = "RFC 822";
 choices[41][3] = "RFC 823";
 answers[41] = choices[41][2];
 units[41] = "106";
 comments[41] = "Id Pregunta: 4009. ";


//  Id pregunta: 4025 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l es el ancho de banda de separaci&oacute;n entre las portadoras ascendentes y descendentes en GSM?";
 choices[42]= new Array();
 choices[42][0] = "15 MHz";
 choices[42][1] = "25 MHz";
 choices[42][2] = "35 MHz";
 choices[42][3] = "45 MHz";
 answers[42] = choices[42][3];
 units[42] = "108";
 comments[42] = "Id Pregunta: 4025. ";


//  Id pregunta: 4101 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[43]= new Array();
 choices[43][0] = "World Wide Web es un servicio b&aacute;sico de Internet";
 choices[43][1] = "World Wide Web es un servicio que utiliza el lenguaje HTML basado a su vez en  SGML.";
 choices[43][2] = "a) y b) son correctas";
 choices[43][3] = "a) y b) son incorrectas";
 answers[43] = choices[43][2];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4101. ";


//  Id pregunta: 4106 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Un GigaPop es:";
 choices[44]= new Array();
 choices[44][0] = "1000 pops.";
 choices[44][1] = "Un nodo de interconexi&oacute;n del backbone de Internet 2.";
 choices[44][2] = "Ninguna de las anteriores";
 choices[44][3] = "a) y b) son ciertas.";
 answers[44] = choices[44][1];
 units[44] = "112";
 comments[44] = "Id Pregunta: 4106. ";


//  Id pregunta: 4147 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  Cada uno de los equipos que, dentro de un servicio distribuido de detecci&oacute;n de intrusi&oacute;n, se instalan en los diferentes segmentos de red se llama";
 choices[45]= new Array();
 choices[45][0] = "cortafuegos";
 choices[45][1] = "sonda";
 choices[45][2] = "honeypot";
 choices[45][3] = "basti&oacute;n";
 answers[45] = choices[45][1];
 units[45] = "111";
 comments[45] = "Id Pregunta: 4147. ";


//  Id pregunta: 4294 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  M&eacute;trica versi&oacute;n 3:";
 choices[46]= new Array();
 choices[46][0] = "No establece diferencias entre los desarrollos orientados a objetos y los desarrollos estructurados.";
 choices[46][1] = "Cubre desarrollos estructurados y de orientaci&oacute;n a objetos";
 choices[46][2] = "Establece en el Proceso de Desarrollo de Sistemas de informaci&oacute;n 3 Procesos (EVS, DSI y CSI).";
 choices[46][3] = "No cubre desarrollos orientados a objeto";
 answers[46] = choices[46][1];
 units[46] = "86";
 comments[46] = "Id Pregunta: 4294. ";


//  Id pregunta: 4327 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Entre los objetivos a conseguir por el Administrador de una Base de Datos, no se encuentra...";
 choices[47]= new Array();
 choices[47][0] = "Mantener la disponibilidad de los datos (procedimientos de recuperaci&oacute;n de la Base de Datos da&ntilde;ada).";
 choices[47][1] = "Garantizar el mantenimiento (asegurando que no se produce ning&uacute;n tipo de cambio en el Sistema de Base de Datos).";
 choices[47][2] = "Mantener la seguridad de los datos (proteger la Base de Datos de usos mal intencionados o no autorizados).";
 choices[47][3] = "Garantizar la integridad de los datos (mantener la consistencia de la Base de Datos).";
 answers[47] = choices[47][1];
 units[47] = "26";
 comments[47] = "Id Pregunta: 4327. ";


//  Id pregunta: 4682 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;A qu&eacute; se refiere EFFORTS?";
 choices[48]= new Array();
 choices[48][0] = "Proyecto dirigido a las administraciones europeas, cuyo objetivo es la mejora de su eficiencia mediante la adopci&oacute;n de nuevas tecnolog&iacute;as.";
 choices[48][1] = "Proyecto europeo para la extensi&oacute;n de la red de banda ancha.";
 choices[48][2] = "Proyecto europeo para aunar pol&iacute;ticas de contrataci&oacute;n de personal";
 choices[48][3] = " Proyecto europeo para aumentar la eficiencia en el uso de las computadoras en el &aacute;mbito de las administraciones p&uacute;blicas europeas";
 answers[48] = choices[48][3];
 units[48] = "41";
 comments[48] = "Id Pregunta: 4682. Examen 2006 JCYL";


//  Id pregunta: 4885 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo queespecifica la forma de encapsular los datos que se van a intercambiar?";
 choices[49]= new Array();
 choices[49][0] = "SSL Handshake";
 choices[49][1] = "SSL Record";
 choices[49][2] = "Cipher Secure Layer";
 choices[49][3] = "Secure Stocker Layer";
 answers[49] = choices[49][1];
 units[49] = "73";
 comments[49] = "Id Pregunta: 4885. ";


//  Id pregunta: 4980 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Cu&aacute;l debe ser la frecuencia m&iacute;nima de muestreo de una se&ntilde;al anal&oacute;gica de voz transmitida por un canaltelef&oacute;nico para que pueda ser reconstruida con exactitud:";
 choices[50]= new Array();
 choices[50][0] = "8 muestras/segundo.";
 choices[50][1] = "8000 muestras/segundo.";
 choices[50][2] = "16 muestras/segundo.";
 choices[50][3] = "4000 muestras/segundo.";
 answers[50] = choices[50][1];
 units[50] = "108";
 comments[50] = "Id Pregunta: 4980. Examen TIC B 2007";


//  Id pregunta: 5024 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  Cual de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSD-AAPP v.3.0";
 choices[51]= new Array();
 choices[51][0] = "Ponderaci&oacute;n Lineal";
 choices[51][1] = "Permutaci&oacute;n";
 choices[51][2] = "Prometh&eacute;e";
 choices[51][3] = "Distancia al Ideal (TOPSIS)";
 answers[51] = choices[51][1];
 units[51] = "34";
 comments[51] = "Id Pregunta: 5024. Examen TIC A 2007";


//  Id pregunta: 5077 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cual de los siguientes es un est&aacute;ndar de W3C que permite referenciar partes de un documento XML?:";
 choices[52]= new Array();
 choices[52][0] = "XSL-FO";
 choices[52][1] = "Xpath";
 choices[52][2] = "XSLT";
 choices[52][3] = "Xforms";
 answers[52] = choices[52][1];
 units[52] = "69";
 comments[52] = "Id Pregunta: 5077. Examen TIC A 2007";


//  Id pregunta: 5088 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Un servicio de directorio electr&oacute;nico NO se caracteriza por ";
 choices[53]= new Array();
 choices[53][0] = "ser flexible";
 choices[53][1] = "Aceptar cierta inconsistencia temporal de la informaci&oacute;n en su replicaci&oacute;n";
 choices[53][2] = "Ser est&aacute;tico";
 choices[53][3] = "Poder ser consultado y actualizado en l&iacute;nea";
 answers[53] = choices[53][2];
 units[53] = "73";
 comments[53] = "Id Pregunta: 5088. ";


//  Id pregunta: 5147 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas se utilizan en la actividad ASI 7 (Elaboraci&oacute;n del Modelo de Procesos) seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3?";
 choices[54]= new Array();
 choices[54][0] = "Diagrama de Flujo de Datos y Matricial.";
 choices[54][1] = "Casos de Uso y Catalogaci&oacute;n.";
 choices[54][2] = "Normalizaci&oacute;n y Prototipado.";
 choices[54][3] = "C&aacute;lculo de Accesos L&oacute;gicos y Diagrama de Clases.";
 answers[54] = choices[54][0];
 units[54] = "86";
 comments[54] = "Id Pregunta: 5147. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5284 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique cu&aacute;l de las siguientes opciones no se relaciona con un desarrollo JAVA: ";
 choices[55]= new Array();
 choices[55][0] = "Hibernate";
 choices[55][1] = "Biztalk";
 choices[55][2] = "Java Server Faces";
 choices[55][3] = "Spring";
 answers[55] = choices[55][1];
 units[55] = "116";
 comments[55] = "Id Pregunta: 5284. ";


//  Id pregunta: 5624 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indique cu&aacute;l es el n&uacute;mero de protocolo ESP (Encapsulating Security Payload)";
 choices[56]= new Array();
 choices[56][0] = "51";
 choices[56][1] = "50";
 choices[56][2] = "49";
 choices[56][3] = "Ninguno de los anteriores";
 answers[56] = choices[56][1];
 units[56] = "111";
 comments[56] = "Id Pregunta: 5624. ";


//  Id pregunta: 5627 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indique cu&aacute;l de estos productos no forman parte de los que proporcionan seguridad en el correo electr&oacute;nico";
 choices[57]= new Array();
 choices[57][0] = "PGP";
 choices[57][1] = "PEM";
 choices[57][2] = "MOSS";
 choices[57][3] = "Single MIME";
 answers[57] = choices[57][3];
 units[57] = "106";
 comments[57] = "Id Pregunta: 5627. Ser&iacute;a S/MIME";


//  Id pregunta: 5757 Año de creación de pregunta: 2001-01-01
 questions[58]= "59)  Los objetivos generales que debe cumplir el Plan de Sistemas de Informaci&oacute;n y Comunicaciones son:";
 choices[58]= new Array();
 choices[58][0] = " Establecer pol&iacute;ticas y objetivos coherentes";
 choices[58][1] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n y as&iacute; como definir los requerimientos t&eacute;cnicos necesarios y suficientes ";
 choices[58][2] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resulta-dos esperados, etc";
 choices[58][3] = "Todas las anteriores";
 answers[58] = choices[58][3];
 units[58] = "77";
 comments[58] = "Id Pregunta: 5757. ";


//  Id pregunta: 5902 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[59]= new Array();
 choices[59][0] = "GPRS";
 choices[59][1] = "UMTS";
 choices[59][2] = "GSM";
 choices[59][3] = "DECT";
 answers[59] = choices[59][1];
 units[59] = "108";
 comments[59] = "Id Pregunta: 5902. MAP 2008 A1";


//  Id pregunta: 5987 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  De acuerdo con la normativa vigente en materia de protecci&oacute;n jur&iacute;dica de los programas de ordenador, &iquest;durante cu&aacute;nto tiempoestar&aacute;n protegidos los derechos de explotaci&oacute;n de un manual de uso de un programa obra de una persona natural?";
 choices[60]= new Array();
 choices[60][0] = "100 a&ntilde;os desde su publicaci&oacute;n, despu&eacute;s pasa a dominio p&uacute;blico.";
 choices[60][1] = "Como es una obra impresa, tiene la consideraci&oacute;n de obra literaria y se protege durante la vida del autor y 60 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[60][2] = "A estos efectos, el manual se considera parte del programa y se protege durante la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[60][3] = "Depende, si el manual est&aacute; impreso, entonces la protecci&oacute;n es la vida del autor y 50 a&ntilde;os despu&eacute;s de su muerte y si es un tutorial no impreso, entonces es la vida del autor y 40 a&ntilde;os despu&eacute;s de su muerte.";
 answers[60] = choices[60][2];
 units[60] = "36";
 comments[60] = "Id Pregunta: 5987. TIC A 2009";


//  Id pregunta: 5990 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  NO corresponde a los principios que deben regir un CAU:";
 choices[61]= new Array();
 choices[61][0] = "Proveer un punto de contacto &uacute;nico al usuario final.";
 choices[61][1] = "Disponer de informaci&oacute;n sobre niveles de servicio para mejorar el servicio proporcionado.";
 choices[61][2] = "Rastrear la organizaci&oacute;n para detectar posibles necesidades no cubiertas.";
 choices[61][3] = "Documentar las soluciones dadas a las incidencias.";
 answers[61] = choices[61][2];
 units[61] = "26";
 comments[61] = "Id Pregunta: 5990. TIC A 2009";


//  Id pregunta: 6042 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  En el &aacute;mbito de la Gesti&oacute;n de Identidades, &iquest;c&oacute;mo se denomina al conjunto de proveedores de servicios, identidades y atributos que disponen de acuerdos de servicio, comerciales y de negocio para que el usuario pueda realizar transacciones de forma transparente y sencilla entre todos ellos?";
 choices[62]= new Array();
 choices[62][0] = "Web Access Management";
 choices[62][1] = "WS - Security";
 choices[62][2] = "C&iacute;rculo de Confianza (CoT)";
 choices[62][3] = "SAML";
 answers[62] = choices[62][2];
 units[62] = "118";
 comments[62] = "Id Pregunta: 6042. ";


//  Id pregunta: 6092 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  En relaci&oacute;n con la gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[63]= new Array();
 choices[63][0] = "Actualmente existen 3 grandes modelos de calidad total: Deming, Malcom Baldrige y EFQM, de amplia aplicaci&oacute;n en Estados Unidos, Jap&oacute;n y Europa respectivamente.";
 choices[63][1] = "El modelo EFQM consta de 9 criterios, de los cuales 5 son agentes y 4 son resultados.";
 choices[63][2] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, pol&iacute;tica y alianzas.";
 choices[63][3] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, estrategia y recursos.";
 answers[63] = choices[63][1];
 units[63] = "92";
 comments[63] = "Id Pregunta: 6092. TIC A 2009";


//  Id pregunta: 6154 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;ntas versiones de NFS hay actualmente en uso?";
 choices[64]= new Array();
 choices[64][0] = "Tres: NFSv2, NFSv3 y NFSv4.";
 choices[64][1] = "Dos: NFSv3 y NFSv4.";
 choices[64][2] = "Tres: NFSv3, NFSv4 y NFSv5.";
 choices[64][3] = "Tres: NFSv1, NFSv2 y NFSv3.";
 answers[64] = choices[64][0];
 units[64] = "112";
 comments[64] = "Id Pregunta: 6154. ";


//  Id pregunta: 6180 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  RMI, DCOM, CORBA y RPC se consideran:";
 choices[65]= new Array();
 choices[65][0] = "Precursores de los Servicios Web.";
 choices[65][1] = "Formas de comunicar aplicaciones distribuidas.";
 choices[65][2] = "Formas de comunicar aplicaciones heterog&eacute;neas.";
 choices[65][3] = "Todas las anteriores son respuestas correctas.";
 answers[65] = choices[65][3];
 units[65] = "69";
 comments[65] = "Id Pregunta: 6180. ";


//  Id pregunta: 6193 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  La Orden PRE/878/2010 regula";
 choices[66]= new Array();
 choices[66][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[66][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[66][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[66][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[66] = choices[66][3];
 units[66] = "43";
 comments[66] = "Id Pregunta: 6193. Orden PRE/878/2010";


//  Id pregunta: 6285 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de un Plan de Sistemas?";
 choices[67]= new Array();
 choices[67][0] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[67][1] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resultados esperados, etc";
 choices[67][2] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[67][3] = "Todos lo son";
 answers[67] = choices[67][3];
 units[67] = "77";
 comments[67] = "Id Pregunta: 6285. ";


//  Id pregunta: 6377 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[68]= new Array();
 choices[68][0] = "La interoperabilidad como cualidad integral.";
 choices[68][1] = "Car&aacute;cter multidimensional de la interoperabilidad.";
 choices[68][2] = "Enfoque de soluciones multilaterales.";
 choices[68][3] = "Todos los anteriores son principios b&aacute;sicos del Esquema Nacional de Interoperabilidad.";
 answers[68] = choices[68][3];
 units[68] = "43";
 comments[68] = "Id Pregunta: 6377. Art&iacute;culo 4 ENI";


//  Id pregunta: 6383 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Las disposiciones del RD 1671/2009 ser&aacute;n de aplicaci&oacute;n a:";
 choices[69]= new Array();
 choices[69][0] = "Al sector p&uacute;blico en su conjunto.";
 choices[69][1] = "A todas las Administraciones P&uacute;blicas , as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de las mismas.";
 choices[69][2] = "A las relaciones entre las Administraciones P&uacute;blicas.";
 choices[69][3] = "A la actividad de la Administraci&oacute;n General del Estado, as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de la misma.";
 answers[69] = choices[69][3];
 units[69] = "43";
 comments[69] = "Id Pregunta: 6383. Art&iacute;culo 1 RD 1671/2009";


//  Id pregunta: 6396 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  En relaci&oacute;n a las copias electr&oacute;nicas de los documentos electr&oacute;nicos realizadas por la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos, se&ntilde;ale la opci&oacute;n incorrecta.";
 choices[70]= new Array();
 choices[70][0] = "En caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, debe incluir su car&aacute;cter de copia entre los metadatos asociados.";
 choices[70][1] = "No se podr&aacute;n generar m&aacute;s copias electr&oacute;nicas aut&eacute;nticas a partir de otras copias electr&oacute;nicas aut&eacute;nticas.";
 choices[70][2] = "Los &oacute;rganos emisores de los documentos administrativos electr&oacute;nicos o receptores de los documentos privados electr&oacute;nicos, o los archivos que reciban los mismos, est&aacute;n obligados a la conservaci&oacute;n de los documentos originales, aunque se hubiere procedido a su copiado.";
 choices[70][3] = "Las copias electr&oacute;nicas generadas que, por ser id&eacute;nticas al documento electr&oacute;nico original no comportan cambio de formato ni de contenido, tendr&aacute;n la eficacia jur&iacute;dica de documento electr&oacute;nico original.";
 answers[70] = choices[70][1];
 units[70] = "43";
 comments[70] = "Id Pregunta: 6396. Art&iacute;culo 43 RD 1671/2009";


//  Id pregunta: 6467 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;En que t&eacute;cnica  de pruebas del software se utiliza la complejidad ciclom&aacute;tica?";
 choices[71]= new Array();
 choices[71][0] = "Prueba de caja negra";
 choices[71][1] = "Prueba del camino b&aacute;sico";
 choices[71][2] = "Prueba de la partici&oacute;n equivalente";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][1];
 units[71] = "88";
 comments[71] = "Id Pregunta: 6467. Castilla La Mancha 2009";


//  Id pregunta: 6498 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  NO corresponde a una libertad del software libre, seg&uacute;n la FSF:";
 choices[72]= new Array();
 choices[72][0] = "La libertad de usar el programa, con cualquier prop&oacute;sito";
 choices[72][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y adaptarlo a sus necesidades";
 choices[72][2] = "La libertad de distribuir copias, con la autorizaci&oacute;n expl&iacute;cita del autor";
 choices[72][3] = "La libertad de mejorar el programa y hacer p&uacute;blicas las mejoras a los dem&aacute;s, de modo que toda la comunidad se beneficie";
 answers[72] = choices[72][2];
 units[72] = "61";
 comments[72] = "Id Pregunta: 6498. ";


//  Id pregunta: 6499 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  GPL es el acr&oacute;nimo de:";
 choices[73]= new Array();
 choices[73][0] = "GNU Public License";
 choices[73][1] = "Geek Public License";
 choices[73][2] = "General Propietary License";
 choices[73][3] = "General Public License";
 answers[73] = choices[73][3];
 units[73] = "61";
 comments[73] = "Id Pregunta: 6499. ";


//  Id pregunta: 6540 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  En el &aacute;mbito de la biometr&iacute;a";
 choices[74]= new Array();
 choices[74][0] = "Un error Tipo I significa que el sistema ha rechazado a un individuo autorizado";
 choices[74][1] = "Un error Tipo I significa que el sistema ha autorizado a un impostor";
 choices[74][2] = "Un error Tipo II significa que el sistema ha rechazado a un individuo autorizado";
 choices[74][3] = "Un error Tipo III significa que el sistema ha rechazado a un individuo autorizado";
 answers[74] = choices[74][0];
 units[74] = "111";
 comments[74] = "Id Pregunta: 6540. ";


//  Id pregunta: 6563 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  GPRS no se caracteriza por";
 choices[75]= new Array();
 choices[75][0] = "Los paquetes se envian a intervalos de tiempo irregulares";
 choices[75][1] = "El nodo GGSN es el nodo pasarela que realiza la interfaz con las redes de datos externas";
 choices[75][2] = "No requiere gesti&oacute;n de movilidad";
 choices[75][3] = "Todas las respuestas anteriores son correctas";
 answers[75] = choices[75][2];
 units[75] = "108";
 comments[75] = "Id Pregunta: 6563. ";


//  Id pregunta: 6569 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  El certificado X.509 no";
 choices[76]= new Array();
 choices[76][0] = "Fue definido por el antes denominado CCITT (actualmente ITU) en la recomendaci&oacute;n X.509";
 choices[76][1] = "En esta recomendaci&oacute;n se define un modelo seguro para suministrar el servicio de autenticaci&oacute;n a los usuarios del Directorio X.500 basado en criptograf&iacute;a de clave p&uacute;blica";
 choices[76][2] = "La recomendaci&oacute;n X.509 [CCI88] define un modelo de certificado en sintaxis ASN.1";
 choices[76][3] = "Todas las respuestas anteriores son ciertas";
 answers[76] = choices[76][3];
 units[76] = "73";
 comments[76] = "Id Pregunta: 6569. ";


//  Id pregunta: 6570 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  El Directorio X.500 ";
 choices[77]= new Array();
 choices[77][0] = "Es una base de datos centralizada y accesible desde cualquier punto";
 choices[77][1] = "Es una base de datos distribuida y accesible desde cualquier punto";
 choices[77][2] = "Est&aacute; dise&ntilde;ado para guardar nombres, direcciones,  pero no la informaci&oacute;n necesaria para localizar y establecer comunicaci&oacute;n con una persona o recurso";
 choices[77][3] = "B y C son ciertas";
 answers[77] = choices[77][1];
 units[77] = "73";
 comments[77] = "Id Pregunta: 6570. ";


//  Id pregunta: 6613 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  Entre los objetivos de M&eacute;trica est&aacute;n:";
 choices[78]= new Array();
 choices[78][0] = "Definir Sistemas de Informaci&oacute;n que ayuden a conseguir los fines de la Organizaci&oacute;n y Mejorar la productividad de los departamentos de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[78][1] = "Facilitar la comunicaci&oacute;n y entendimiento entre los distintos participantes y facilitar la operaci&oacute;n, mantenimiento y uso de los productos software obtenidos.";
 choices[78][2] = "a y b";
 choices[78][3] = "Ninguno ya que M&eacute;trica no entra en los fines de la Organizaci&oacute;n, en la productividad, en la comunicaci&oacute;n ni en la operaci&oacute;n de los productos.";
 answers[78] = choices[78][2];
 units[78] = "86";
 comments[78] = "Id Pregunta: 6613. ";


//  Id pregunta: 6626 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  El modelo CMM de Ingenier&iacute;a de Software consta de:";
 choices[79]= new Array();
 choices[79][0] = "5 niveles, de los cuales todos se descomponen en &aacute;reas de procesos clave";
 choices[79][1] = "5 niveles, de los cuales todos excepto el nivel 1 se descomponen en &aacute;reas de procesos clave";
 choices[79][2] = "5 niveles, de los cuales todos excepto el nivel 5 se descomponen en &aacute;reas de procesos clave";
 choices[79][3] = "6 niveles que se descomponen en &aacute;reas de procesos clave y estas a su vez se organizan seg&uacute;n caracter&iacute;sticas comunes";
 answers[79] = choices[79][1];
 units[79] = "87";
 comments[79] = "Id Pregunta: 6626. ";


//  Id pregunta: 7288 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es INCORRECTA sobre el protocolo RADIUS (Remote Authentication Dial In User Service): ";
 choices[80]= new Array();
 choices[80][0] = "Es un protocolo cliente/servidor que utiliza el protocolo de transporte fiable TCP 1813";
 choices[80][1] = "Utiliza el protocolo de nivel de enlace PPP (Point to Point Protocol) para el env&iacute;o de las credenciales de usuario";
 choices[80][2] = "El sucesor de RADIUS es el protocolo DIAMETER";
 choices[80][3] = "Es utilizado a menudo para facilitar itinerancia (roaming) entre proveedores de servicio de internet (ISP)";
 answers[80] = choices[80][0];
 units[80] = "111, 102";
 comments[80] = "Id Pregunta: 7288. Examen TIC B 2009";


//  Id pregunta: 7350 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  Alfresco es un software de c&oacute;digo abierto de:";
 choices[81]= new Array();
 choices[81][0] = "Gesti&oacute;n de contenido empresarial";
 choices[81][1] = "Dise&ntilde;o gr&aacute;fico";
 choices[81][2] = "Base de Datos";
 choices[81][3] = "Cuadro de Mando";
 answers[81] = choices[81][0];
 units[81] = "95";
 comments[81] = "Id Pregunta: 7350. ";


//  Id pregunta: 7355 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  Es un m&eacute;todo est&aacute;tico de an&aacute;lisis:";
 choices[82]= new Array();
 choices[82][0] = "Valor Actual Neto";
 choices[82][1] = "Tasa Interna de Retorno";
 choices[82][2] = "Pay-Back";
 choices[82][3] = "Delphi";
 answers[82] = choices[82][2];
 units[82] = "38";
 comments[82] = "Id Pregunta: 7355. ";


//  Id pregunta: 8287 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Cu&aacute;ndo se puede utilizar el Servicio de Verificaci&oacute;n de Datos de Identidad para consultar datos de car&aacute;cter personal?";
 choices[83]= new Array();
 choices[83][0] = "Cuando se cuente con el consentimiento del interesado y los datos sean necesarios para el tr&aacute;mite. ";
 choices[83][1] = "S&oacute;lo se puede utilizar para consultar datos que no sean de car&aacute;cter personal";
 choices[83][2] = "S&oacute;lo en caso de que sean datos de nivel de protecci&oacute;n alto. ";
 choices[83][3] = "Se contemplaba un per&iacute;odo de transici&oacute;n, pero a partir del 1 de enero de 2011, el Servicio de Verificaci&oacute;n de Datos de Identidad ser&aacute; obligatorio en todo caso";
 answers[83] = choices[83][0];
 units[83] = "44";
 comments[83] = "Id Pregunta: 8287. Examen TIC A2 2010";


//  Id pregunta: 8320 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Se&ntilde;ale cual de las siguientes caracter&iacute;sticas de seguridad est&aacute; incluida tanto en el est&aacute;ndar WPA2 como en el est&aacute;ndar WEP: ";
 choices[84]= new Array();
 choices[84][0] = "Intercambio din&aacute;mico de claves. ";
 choices[84][1] = "Autenticaci&oacute;n 802.1x ";
 choices[84][2] = "Preshared Keys (PSK). ";
 choices[84][3] = "Encriptaci&oacute;n AES. ";
 answers[84] = choices[84][2];
 units[84] = "107, 111";
 comments[84] = "Id Pregunta: 8320. Examen TIC A2 2010";


//  Id pregunta: 8423 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[85]= new Array();
 choices[85][0] = "Seguridad integral";
 choices[85][1] = "An&aacute;lisis de riesgos";
 choices[85][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[85][3] = "Funci&oacute;n diferenciada";
 answers[85] = choices[85][1];
 units[85] = "43";
 comments[85] = "Id Pregunta: 8423. ";


//  Id pregunta: 8473 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cual de las siguientes afirmaciones sobre los cables EIA/TIA/568B de categoria 6 es correcta?";
 choices[86]= new Array();
 choices[86][0] = "Tiene un ancho de banda de hasta 10 Ghz en cada par.";
 choices[86][1] = "Se suele usar para transmitir a velocidades de 1 Gbps.";
 choices[86][2] = "No permite implementar Power over Ethernet (PoE).";
 choices[86][3] = "S&oacute;lo est&aacute; disponible de forma experimental.";
 answers[86] = choices[86][1];
 units[86] = "99";
 comments[86] = "Id Pregunta: 8473. Examen TIC A2 2010 interna";


//  Id pregunta: 8474 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes modos de propagaci&oacute;n de la fibra &oacute;ptica permite un mayor alcance y capacidad?";
 choices[87]= new Array();
 choices[87][0] = "Monomodo";
 choices[87][1] = "Multimodo con salto de &iacute;ndice de refracci&oacute;n.";
 choices[87][2] = "Multimodo con &iacute;ndice de refracci&oacute;n gradual. ";
 choices[87][3] = "Ultramodo de alta dispersi&oacute;n modal.";
 answers[87] = choices[87][0];
 units[87] = "99";
 comments[87] = "Id Pregunta: 8474. Examen TIC A2 2010 interna";


//  Id pregunta: 8528 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  En IPSec, el modo de funcionamiento en el que s&oacute;lo los datos son cifrados o autenticados, y el enrutamiento permanece intacto por lo que asegura la comunicaci&oacute;n extremo a extremo, se denomina:";
 choices[88]= new Array();
 choices[88][0] = "Modo t&uacute;nel.";
 choices[88][1] = "Modo transporte.";
 choices[88][2] = "Modo encapsulado.";
 choices[88][3] = "Modo transparente.";
 answers[88] = choices[88][1];
 units[88] = "111";
 comments[88] = "Id Pregunta: 8528. Examen TIC A2 2010 interna";


//  Id pregunta: 8645 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  Indique cu&aacute;l es la respuesta correcta con respecto a los diagramas PERT:";
 choices[89]= new Array();
 choices[89][0] = "Los arcos del grafo representan los sucesos, y los v&eacute;rtices las actividades.";
 choices[89][1] = "En la matriz de encadenamientos aquellas columnas en las que no aparece ninguna X indican las actividades que no tienen ninguna actividad siguiente, es decir, aquellas actividades cuyo suceso final coincide con el suceso fin del proyecto.";
 choices[89][2] = "El cuadro de prelaciones est&eacute; formado por tres columnas En la primera columna est&aacute;n representadas todas las actividades en que se ha descompuesto el proyecto. En la segunda columna figuran las actividades precedentes de su hom&oacute;loga en la primera columna y en la &uacute;ltima columna se muestran las actividades posteriores.";
 choices[89][3] = "La matriz de encadenamientos consiste en una matriz cuadrada cuya dimensi&oacute;n es igual al n&uacute;mero de sucesos en que se ha descompuesto el proyecto.";
 answers[89] = choices[89][1];
 units[89] = "28";
 comments[89] = "Id Pregunta: 8645. Examen TIC A2 2010 interna";


//  Id pregunta: 8751 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  El Real Decreto 3/2010, de 8 de enero, regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica. En el mismo, la seguridad se entender&aacute; como:";
 choices[90]= new Array();
 choices[90][0] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, contemplando exclusivamente elementos t&eacute;cnicos";
 choices[90][1] = "Un proceso integral te&oacute;rico que comprende &uacute;nicamente tas medidas de prevenci&oacute;n y detecci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de correcci&oacute;n, a implantar particularmente en cada caso.";
 choices[90][2] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, que comprende &uacute;nicamente las medidas concretas de detecci&oacute;n y correcci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de prevenci&oacute;n, como propias de cada caso particular";
 choices[90][3] = "Un proceso integral constituido por elementos t&eacute;cnicos, humanos, materiales y organizativos";
 answers[90] = choices[90][3];
 units[90] = "43";
 comments[90] = "Id Pregunta: 8751. Examen TIC A2 2010 interna";


//  Id pregunta: 8820 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  El objetivo del Plan de Sistemas de Informaci&oacute;n es:";
 choices[91]= new Array();
 choices[91][0] = "Proporcionar un marco estrat&eacute;gico que sirva de referencia para los Sistemas de Informaci&oacute;n de un &aacute;mbito concreto de una organizaci&oacute;n.";
 choices[91][1] = "El an&aacute;lisis de un conjunto concreto de necesidades para proponer una soluci&oacute;n a corto plazo, que tenga en cuenta restricciones econ&oacute;micas, t&eacute;cnicas, legales y operativas.";
 choices[91][2] = "a y b son correctas.";
 choices[91][3] = "Ninguna de las anteriores.";
 answers[91] = choices[91][0];
 units[91] = "27, 86";
 comments[91] = "Id Pregunta: 8820. Examen UPM A2 2011";


//  Id pregunta: 8829 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)   En la arquitectura orientada a servicios, el est&aacute;ndar WSRP:";
 choices[92]= new Array();
 choices[92][0] = " Web Service for Remote Process, es utilizado para integrar servicios web con aplicaciones de las que necesiten datos para ejecutar su funcionalidad.";
 choices[92][1] = " Web Service for Remote Portlets, es utilizado para potenciar el uso de Servicios Web por la interfaz de aplicaci&oacute;n";
 choices[92][2] = " Web Service for Resource Planning, es utilizado para su integraci&oacute;n con los ERP de la organizaci&oacute;n";
 choices[92][3] = " Web Service for Redirect Processing, es utilizado para recoger cierta funcionalidad de otro Servicio Web necesaria para completar la suya";
 answers[92] = choices[92][1];
 units[92] = "114";
 comments[92] = "Id Pregunta: 8829. Examen UC3M 2010";


//  Id pregunta: 8874 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  En la tarea &ldquo;Valoraci&oacute;n de los Sistemas de Informaci&oacute;n actuales&rdquo;, encuadrado en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n, participan seg&uacute;n M&eacute;trica versi&oacute;n 3:";
 choices[93]= new Array();
 choices[93][0] = "Consultores y Consultores Inform&aacute;ticos";
 choices[93][1] = "Consultores y Jefes de Proyecto";
 choices[93][2] = "Consultores Inform&aacute;ticos y Usuarios Expertos";
 choices[93][3] = "Analistas y Jefes de Proyecto";
 answers[93] = choices[93][0];
 units[93] = "86";
 comments[93] = "Id Pregunta: 8874. Analista Ayto. Madrid 2010";


//  Id pregunta: 8941 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[94]= new Array();
 choices[94][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[94][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[94][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[94][3] = "Ninguno de los anteriores";
 answers[94] = choices[94][2];
 units[94] = "43";
 comments[94] = "Id Pregunta: 8941. ";


//  Id pregunta: 8942 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[95]= new Array();
 choices[95][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[95][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[95][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[95][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[95] = choices[95][2];
 units[95] = "43";
 comments[95] = "Id Pregunta: 8942. ";


//  Id pregunta: 8989 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  Se&ntilde;ale la respuesta falsa respecto del Plan General de Garant&iacute;a de Calidad promovido por CSAE";
 choices[96]= new Array();
 choices[96][0] = "Es un documento impreso";
 choices[96][1] = "Consta de cuatro fasc&iacute;culos";
 choices[96][2] = "Orientada a cualquier ambito de las AAPP";
 choices[96][3] = "Requiere autorizaci&oacute;n para su empleo";
 answers[96] = choices[96][3];
 units[96] = "87";
 comments[96] = "Id Pregunta: 8989. ";


//  Id pregunta: 9016 Año de creación de pregunta: 2011-01-01
 questions[97]= "98)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[97]= new Array();
 choices[97][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[97][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[97][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[97][3] = "Ninguna de las anteriores";
 answers[97] = choices[97][2];
 units[97] = "99";
 comments[97] = "Id Pregunta: 9016. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9059 Año de creación de pregunta: 2022-01-01
 questions[98]= "99)  Indica cu&aacute;l de los siguientes par&aacute;metros tiene en cuenta el algoritmo de adjudicaci&oacute;n de HSUPA.";
 choices[98]= new Array();
 choices[98][0] = "Ancho de banda disponible en cada estaci&oacute;n";
 choices[98][1] = "Consumo el&eacute;ctrico del Hardware";
 choices[98][2] = "Interferencia en el canal UPLOAD";
 choices[98][3] = "Todos los anteriores.";
 answers[98] = choices[98][3];
 units[98] = "108";
 comments[98] = "Id Pregunta: 9059. ";


//  Id pregunta: 9586 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  Seg&uacute;n la norma t&eacute;cnica de interoperabilidad de pol&iacute;tica de firma electr&oacute;nica y de certificados de la administraci&oacute;n del Esquema Nacional de Interoperabilidad:";
 choices[99]= new Array();
 choices[99][0] = "Los formatos para la firma electr&oacute;nica de contenidos ser&aacute;n XAdES, CAdES y PAdES.";
 choices[99][1] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;A.";
 choices[99][2] = "Los documentos electr&oacute;nicos a los que se aplique firma basada en certificados de cara a su intercambio no se ajustar&aacute;n a las especificaciones de formato y estructura establecidas en la NTI de Documento electr&oacute;nico.";
 choices[99][3] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;C.";
 answers[99] = choices[99][0];
 units[99] = "43";
 comments[99] = "Id Pregunta: 9586. Examen TIC A1 2011";


