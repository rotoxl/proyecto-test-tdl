/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 122 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  Desde el punto de vista de un auditor de seguridad indique cu&aacute;l de las siguientes premisas, sobre control interno de acceso l&oacute;gico, es inadecuada:";
 choices[0]= new Array();
 choices[0][0] = "El sistema debe obligar al usuario a cambiar de contrase&ntilde;a cada cierto tiempo";
 choices[0][1] = "El registro o log de acceso al sistema puede desactivarse a petici&oacute;n del responsable de seguridad";
 choices[0][2] = "Es conveniente que la autenticaci&oacute;n de entrada al sistema se haga una &uacute;nica vez";
 choices[0][3] = "El sistema debe rechazar el acceso a los usuarios despu&eacute;s de una serie de intentos fallidos";
 answers[0] = choices[0][1];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 122. ";


//  Id pregunta: 149 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El m&eacute;todo Promethee:";
 choices[1]= new Array();
 choices[1][0] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no";
 choices[1][1] = "Su concepto central es de comparaci&oacute;n ternaria de alternativas";
 choices[1][2] = "Exige poca informaci&oacute;n por parte del decisor: evaluaciones ordinales y pesos cardinales";
 choices[1][3] = "Generaliza el m&eacute;todo de ponderaci&oacute;n lineal incorporando al posibilidad de valorar el riesgo";
 answers[1] = choices[1][0];
 units[1] = "34";
 comments[1] = "Id Pregunta: 149. ";


//  Id pregunta: 373 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Los mecanismos de salvaguarda, de acuerdo a MAGERIT son:";
 choices[2]= new Array();
 choices[2][0] = "Un dispositivo l&oacute;gico que reduce el riesgo";
 choices[2][1] = "Un dispositivo f&iacute;sico que reduce el riesgo";
 choices[2][2] = "Aquellos que operan de forma preventiva sobre la vulnerabilidad";
 choices[2][3] = "Todas las respuestas anteriores son correctas";
 answers[2] = choices[2][3];
 units[2] = "33";
 comments[2] = "Id Pregunta: 373. ";


//  Id pregunta: 467 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Un ejemplo de infracci&oacute;n grave es:";
 choices[3]= new Array();
 choices[3][0] = "proceder a la recogida de datos de car&aacute;cter personal de los propios afectados sin proporcionarles la informaci&oacute;n que se&ntilde;ala el art&iacute;culo 5 de la presente ley";
 choices[3][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general, publicada en el Bolet&iacute;n Oficial del Estado o diario oficial correspondiente.";
 choices[3][2] = "la recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[3][3] = "no atender de forma sistem&aacute;tica el deber legal de notificaci&oacute;n de la inclusi&oacute;n de datos de car&aacute;cter personal en un fichero";
 answers[3] = choices[3][1];
 units[3] = "29";
 comments[3] = "Id Pregunta: 467. ";


//  Id pregunta: 656 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[4]= new Array();
 choices[4][0] = "Impide la descarga de contenido protegido";
 choices[4][1] = "Impide la copia de contenido protegido";
 choices[4][2] = "Garantiza la no modificaci&oacute;n del contenido protegido";
 choices[4][3] = "Se asegura de que el comprador ha pagado por el contenido";
 answers[4] = choices[4][0];
 units[4] = "37";
 comments[4] = "Id Pregunta: 656. ";


//  Id pregunta: 793 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; significado tiene el concepto &ldquo;World Wide Grid&rdquo; (WWG)?:";
 choices[5]= new Array();
 choices[5][0] = "Compartici&oacute;n de informaci&oacute;n a trav&eacute;s de internet";
 choices[5][1] = "Compartici&oacute;n de datos e infraestructuras inform&aacute;ticas entre todas las disciplinas cient&iacute;ficas y todos los campos de la industria entre equipos dispersos";
 choices[5][2] = "La extensi&oacute;n de Internet a todos los rincones del mundo";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][1];
 units[5] = "45";
 comments[5] = "Id Pregunta: 793. ";


//  Id pregunta: 832 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las alternativas siguientes no corresponde a un operador fundamental del &aacute;lgebra relacional?:";
 choices[6]= new Array();
 choices[6][0] = "Join";
 choices[6][1] = "Selecci&oacute;n";
 choices[6][2] = "Diferencia";
 choices[6][3] = "Proyecci&oacute;n";
 answers[6] = choices[6][0];
 units[6] = "57";
 comments[6] = "Id Pregunta: 832. ";


//  Id pregunta: 1071 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  En cu&aacute;l de las siguientes tecnolog&iacute;as es l&iacute;der Europa:";
 choices[7]= new Array();
 choices[7][0] = "Asimilaci&oacute;n de Internet.";
 choices[7][1] = "Hardware de comunicaciones.";
 choices[7][2] = "Comunicaciones m&oacute;viles.";
 choices[7][3] = "Software de comunicaciones.";
 answers[7] = choices[7][2];
 units[7] = "108";
 comments[7] = "Id Pregunta: 1071. ";


//  Id pregunta: 1084 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  En el lenguaje SQL una 'Transacci&oacute;n' es una secuencia de operaciones que constituye una unidad de recuperaci&oacute;n, y que puede finalizarse con una sentencia:";
 choices[8]= new Array();
 choices[8][0] = "SELECT";
 choices[8][1] = "END";
 choices[8][2] = "COMMIT";
 choices[8][3] = "CLOSE";
 answers[8] = choices[8][2];
 units[8] = "58";
 comments[8] = "Id Pregunta: 1084. ";


//  Id pregunta: 1089 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  En el Modelo de Referencia para la estandarizaci&oacute;n de los Sistemas de Gesti&oacute;n de Bases de Datos, basado en la arquitectura de tres niveles de ANSI, las funciones de insertar y borrar se realizan mediante:";
 choices[9]= new Array();
 choices[9][0] = "El esquema interno";
 choices[9][1] = "El diccionario central de datos";
 choices[9][2] = "El lenguaje de definici&oacute;n de datos";
 choices[9][3] = "El lenguaje de manipulaci&oacute;n de datos";
 answers[9] = choices[9][3];
 units[9] = "57";
 comments[9] = "Id Pregunta: 1089. ";


//  Id pregunta: 1186 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indicar la respuesta incorrecta sobre los procedimientos de inferencia asociados a los marcos en inteligencia artificial:";
 choices[10]= new Array();
 choices[10][0] = "Deducci&oacute;n de valores de ranuras";
 choices[10][1] = "Actualizaci&oacute;n de valores de ranuras";
 choices[10][2] = "Herencia de ranuras";
 choices[10][3] = "Equiparaci&oacute;n de marcos";
 answers[10] = choices[10][2];
 units[10] = "64";
 comments[10] = "Id Pregunta: 1186. ";


//  Id pregunta: 1303 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Para solucionar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos, utilizaremos la t&eacute;cnica denominada de:";
 choices[11]= new Array();
 choices[11][0] = "Bloqueo ";
 choices[11][1] = "Rollback";
 choices[11][2] = "Interbloqueo";
 choices[11][3] = "Inter-Roll";
 answers[11] = choices[11][0];
 units[11] = "57";
 comments[11] = "Id Pregunta: 1303. ";


//  Id pregunta: 1335 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Se puede entender por 'driver':";
 choices[12]= new Array();
 choices[12][0] = "Un tipo especial de programa supervisor";
 choices[12][1] = "Un programa encargado de permitir el manejo de un determinado perif&eacute;rico por parte de una unidad central";
 choices[12][2] = "Un lector/grabador de discos &oacute;pticos";
 choices[12][3] = "Un lector/grabador de discos CD-ROM";
 answers[12] = choices[12][1];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1335. ";


//  Id pregunta: 1347 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Se&ntilde;ale la respuesta correcta. El software de base comprende:";
 choices[13]= new Array();
 choices[13][0] = "El sistema operativo, el sistema de gesti&oacute;n de datos , el software de comunicaciones y las utilidades";
 choices[13][1] = "El sistema operativo,  el software de comunicaciones y las utilidades";
 choices[13][2] = "El sistema operativo, el sistema de gesti&oacute;n de datos  y las utilidades";
 choices[13][3] = "El sistema operativo y las utilidades";
 answers[13] = choices[13][0];
 units[13] = "55";
 comments[13] = "Id Pregunta: 1347. ";


//  Id pregunta: 1433 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  XQL es:";
 choices[14]= new Array();
 choices[14][0] = "Extended Query Language";
 choices[14][1] = "XML Query Language";
 choices[14][2] = "No se corresponde con ningun acr&oacute;nimo usado en inform&aacute;tica o telecomunicaciones";
 choices[14][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[14] = choices[14][1];
 units[14] = "69";
 comments[14] = "Id Pregunta: 1433. ";


//  Id pregunta: 1436 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Qu&eacute; empresa desarroll&oacute; el primer rat&oacute;n como perif&eacute;rico de los ordenadores?:";
 choices[15]= new Array();
 choices[15][0] = "LaCie";
 choices[15][1] = "Toshiba";
 choices[15][2] = "Apple";
 choices[15][3] = "Rank Xerox";
 answers[15] = choices[15][3];
 units[15] = "47";
 comments[15] = "Id Pregunta: 1436. ";


//  Id pregunta: 1710 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Un sistema multiusuario es:";
 choices[16]= new Array();
 choices[16][0] = "Un sistema que posee varias CPUs y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[16][1] = "Un sistema que posee una sola CPU y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[16][2] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero concurrente de usuarios";
 choices[16][3] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero no concurrente de usuarios";
 answers[16] = choices[16][2];
 units[16] = "52";
 comments[16] = "Id Pregunta: 1710. ";


//  Id pregunta: 2119 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de estas funciones no es propia del administrador del sistema de gesti&oacute;n de bases de datos?:";
 choices[17]= new Array();
 choices[17][0] = "Catalogar en el diccionario de datos los correspondientes al sistema de informaci&oacute;n";
 choices[17][1] = "Dise&ntilde;ar el modelo f&iacute;sico de datos";
 choices[17][2] = "Dar de alta y baja a los usuarios de las bases de datos";
 choices[17][3] = "Garantizar la ejecuci&oacute;n de los procedimientos de salvaguarda";
 answers[17] = choices[17][0];
 units[17] = "57";
 comments[17] = "Id Pregunta: 2119. ";


//  Id pregunta: 2188 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;les de las siguientes cuestiones conciernen al an&aacute;lisis de requerimientos?:";
 choices[18]= new Array();
 choices[18][0] = "Criterios de prueba y evaluaci&oacute;n del producto software obtenido";
 choices[18][1] = "Descripci&oacute;n detallada de las funciones";
 choices[18][2] = "Estructura de la base de datos";
 choices[18][3] = "Son ciertas las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo;";
 answers[18] = choices[18][0];
 units[18] = "78";
 comments[18] = "Id Pregunta: 2188. ";


//  Id pregunta: 2231 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Al esfuerzo requerido para conectar un sistema con otro se llama:";
 choices[19]= new Array();
 choices[19][0] = "Portabilidad";
 choices[19][1] = "Reusabilidad";
 choices[19][2] = "Interoperatividad";
 choices[19][3] = "Mantenibilidad";
 answers[19] = choices[19][2];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2231. ";


//  Id pregunta: 2324 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  En la medici&oacute;n de la productividad en el software orientado a objetos, &iquest;cu&aacute;l de los siguientes criterios es el m&aacute;s importante?:";
 choices[20]= new Array();
 choices[20][0] = "La cantidad de software producido por unidad de tiempo";
 choices[20][1] = "La reutilizaci&oacute;n del software producido";
 choices[20][2] = "El seguimiento estricto de una metodolog&iacute;a";
 choices[20][3] = "La calidad de software en cu&aacute;nto al cumplimiento de la funcionalidad requerida";
 answers[20] = choices[20][1];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2324. ";


//  Id pregunta: 2379 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  Hist&oacute;ricamente, el primer modelo de desarrollo de software fue:";
 choices[21]= new Array();
 choices[21][0] = "Cascada";
 choices[21][1] = "Code and Fix";
 choices[21][2] = "En espiral";
 choices[21][3] = "Desarrollo de prototipos";
 answers[21] = choices[21][1];
 units[21] = "76";
 comments[21] = "Id Pregunta: 2379. ";


//  Id pregunta: 2383 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Indicar cu&aacute;l de los siguientes componentes no pertenece al Plan General de Garant&iacute;a de Calidad elaborado por el Ministerio de Administraciones P&uacute;blicas para el Consejo Superior de Inform&aacute;tica en 1991:";
 choices[22]= new Array();
 choices[22][0] = "Esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos";
 choices[22][1] = "Procedimientos de Control de Calidad";
 choices[22][2] = "Plan de desarrollo de prototipos";
 choices[22][3] = "Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de Planes de Garant&iacute;a de Calidad";
 answers[22] = choices[22][2];
 units[22] = "87,88";
 comments[22] = "Id Pregunta: 2383. ";


//  Id pregunta: 2489 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Seg&uacute;n los estudios de calidad, &iquest;en qu&eacute; fase del desarrollo los errores son m&aacute;s costosos?:";
 choices[23]= new Array();
 choices[23][0] = "Especificaci&oacute;n";
 choices[23][1] = "Dise&ntilde;o  ";
 choices[23][2] = "Codificaci&oacute;n";
 choices[23][3] = "Otros";
 answers[23] = choices[23][0];
 units[23] = "87";
 comments[23] = "Id Pregunta: 2489. ";


//  Id pregunta: 2520 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la menos relevante a la hora de especificar un sistema de reconocimiento de voz?:";
 choices[24]= new Array();
 choices[24][0] = "La amplitud del vocabulario soportado";
 choices[24][1] = "La fluidez de la locuci&oacute;n admitida por el sistema";
 choices[24][2] = "La dependencia o independencia del orador";
 choices[24][3] = "La capacidad de interpretar el habla cuando el orador se expresa en tono bajo";
 answers[24] = choices[24][3];
 units[24] = "94";
 comments[24] = "Id Pregunta: 2520. ";


//  Id pregunta: 2547 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los sistemas de recuperaci&oacute;n de informaci&oacute;n tienen como objeto fundamental:";
 choices[25]= new Array();
 choices[25][0] = "Recuperaci&oacute;n de bases de datos codasyl  y relacionales";
 choices[25][1] = "An&aacute;lisis documental";
 choices[25][2] = "Restaurar ficheros y bases de datos pseudo relacionales";
 choices[25][3] = "Consultas y modificaciones de bases de datos a trav&eacute;s del lenguaje SQL";
 answers[25] = choices[25][1];
 units[25] = "96";
 comments[25] = "Id Pregunta: 2547. ";


//  Id pregunta: 2563 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;Qu&eacute; es el Modelo CMM (Modelo de madurez de la capacidad de proceso de software)?";
 choices[26]= new Array();
 choices[26][0] = "Metodolog&iacute;a de dise&ntilde;o de omponentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[26][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[26][2] = "Modelo organizativo para el dise&ntilde;o software de macroensamblares cruzados";
 choices[26][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[26] = choices[26][3];
 units[26] = "87,88,92";
 comments[26] = "Id Pregunta: 2563. Pregunta Junta Andalucia - A";


//  Id pregunta: 2658 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  Una de las siguientes caracter&iacute;sticas no se corresponde con las del SW";
 choices[27]= new Array();
 choices[27][0] = "fabricaci&oacute;n &uacute;nica, no en serie";
 choices[27][1] = "F&aacute;cil de modificar pero dificil de validar";
 choices[27][2] = "Proceso de desarrollo f&aacute;cil de controlar";
 choices[27][3] = "Todas los correctas";
 answers[27] = choices[27][2];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2658. ";


//  Id pregunta: 2781 Año de creación de pregunta: 2006-01-01
 questions[28]= "29)  El prototipado cl&aacute;sico, &iquest;en qu&eacute; fases del proyecto se aplica?";
 choices[28]= new Array();
 choices[28][0] = "En la fase de especificaci&oacute;n de requisitos";
 choices[28][1] = "En el dise&ntilde;o del sistema";
 choices[28][2] = "a) y b) son correctas";
 choices[28][3] = "Se aplica en todas las fases expecto implantaci&oacute;n y mantenimiento";
 answers[28] = choices[28][0];
 units[28] = "85";
 comments[28] = "Id Pregunta: 2781. ";


//  Id pregunta: 2788 Año de creación de pregunta: 2006-01-01
 questions[29]= "30)  La Normalizaci&oacute;n del modelo de datos...";
 choices[29]= new Array();
 choices[29][0] = "Se lleva a cabo en la fase de PSI.";
 choices[29][1] = "Se lleva a cabo en la fase de DSI.";
 choices[29][2] = "Se lleva a cabo en la fase de ASI.";
 choices[29][3] = "Se lleva  a cabo en la fase de CSI.";
 answers[29] = choices[29][2];
 units[29] = "86";
 comments[29] = "Id Pregunta: 2788. ";


//  Id pregunta: 2820 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  En el m&eacute;todo de Puntos de Funci&oacute;n de Albretch se consideran cinco par&aacute;metros entre los cu&aacute;les est&aacute;n";
 choices[30]= new Array();
 choices[30][0] = "Ficheros l&oacute;gicos externos";
 choices[30][1] = "Salidas internas";
 choices[30][2] = "Ficheros de interfaz externos";
 choices[30][3] = "Consultas internas";
 answers[30] = choices[30][2];
 units[30] = "89";
 comments[30] = "Id Pregunta: 2820. ";


//  Id pregunta: 2927 Año de creación de pregunta: 2004-01-01
 questions[31]= "32)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[31]= new Array();
 choices[31][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[31][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[31][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[31][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[31] = choices[31][2];
 units[31] = "113";
 comments[31] = "Id Pregunta: 2927. ";


//  Id pregunta: 2940 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[32]= new Array();
 choices[32][0] = "uSCSI";
 choices[32][1] = "FCP";
 choices[32][2] = "iSCSI";
 choices[32][3] = "FCIP";
 answers[32] = choices[32][2];
 units[32] = "48,96,97";
 comments[32] = "Id Pregunta: 2940. Similar a examen TIC SS A 2004";


//  Id pregunta: 3016 Año de creación de pregunta: 2004-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas de las redes GPRS es falsa?";
 choices[33]= new Array();
 choices[33][0] = "Alcanza velocidades de hasta 115kbps";
 choices[33][1] = "Conmutaci&oacute;n de paquetes";
 choices[33][2] = "Es orientado a conexi&oacute;n";
 choices[33][3] = "La tarificaci&oacute;n se produce por volumen de datos intercambiado";
 answers[33] = choices[33][2];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3016. ";


//  Id pregunta: 3137 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las respuestas siguientes no se aplica a los servicios de red orientados a conexi&oacute;n?:";
 choices[34]= new Array();
 choices[34][0] = "Requiere que todas las conexiones sean expl&iacute;citamente establecidas y terminadas";
 choices[34][1] = "Requiere que a cada paquete se le a&ntilde;ada toda la direcci&oacute;n de encaminamiento antes de transmitirlo";
 choices[34][2] = "Predetermina el path desde la fuente al destino antes de transmitir los datos";
 choices[34][3] = "Reserva los recursos de red antes de transmitir los datos";
 answers[34] = choices[34][1];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3137. ";


//  Id pregunta: 3491 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  En el acceso a l&iacute;neas y redes de comunicaciones, desde el bucle de abonado constituido por pares de cobre, la tecnolog&iacute;a que permite separar el flujo de datos del tr&aacute;fico telef&oacute;nico en origen, es:";
 choices[35]= new Array();
 choices[35][0] = "RDSI";
 choices[35][1] = "ADSL";
 choices[35][2] = "RTC";
 choices[35][3] = "TCP-IP";
 answers[35] = choices[35][1];
 units[35] = "107";
 comments[35] = "Id Pregunta: 3491. ";


//  Id pregunta: 3550 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  En redes MAN, protocolo DQDB, se cumple que:";
 choices[36]= new Array();
 choices[36][0] = "Las celdas tienen longitud de 53 bytes";
 choices[36][1] = "Es compatible con ATM";
 choices[36][2] = "Tienen una carga &uacute;til de 48 bytes";
 choices[36][3] = "Todas las anteriores respuestas son correctas";
 answers[36] = choices[36][3];
 units[36] = "101";
 comments[36] = "Id Pregunta: 3550. ";


//  Id pregunta: 3635 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  La recomendaci&oacute;n RFC-1006 define:";
 choices[37]= new Array();
 choices[37][0] = "Funciones de un protocolo de red";
 choices[37][1] = "El protocolo de transporte TCP";
 choices[37][2] = "El protocolo de transporte UDP";
 choices[37][3] = "Protocolo de convergencia de TCP a TP0";
 answers[37] = choices[37][3];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3635. ";


//  Id pregunta: 3657 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  Un BALUN:";
 choices[38]= new Array();
 choices[38][0] = "Es un adaptador de impedancias entre sistema asim&eacute;trico y sistema sim&eacute;trico.";
 choices[38][1] = "Adapta un conector RJ45 y BNC.";
 choices[38][2] = "Es un conector entre RJ11 y RJ45.";
 choices[38][3] = "S&oacute;lo se utiliza para fibra &oacute;ptica.";
 answers[38] = choices[38][0];
 units[38] = "99";
 comments[38] = "Id Pregunta: 3657. *: BALUN";


//  Id pregunta: 3843 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  STP proporciona:";
 choices[39]= new Array();
 choices[39][0] = "Puntos de acceso s&iacute;ncronos de transferencia de datos en RDSI";
 choices[39][1] = "Conmutaci&oacute;n de mensajes entre nodos de SS7";
 choices[39][2] = "Temporizaci&oacute;n exacta en redes WDM";
 choices[39][3] = "Nada de lo anterior es cierto";
 answers[39] = choices[39][1];
 units[39] = "103";
 comments[39] = "Id Pregunta: 3843. ";


//  Id pregunta: 3849 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Usaremos fibra &oacute;ptica, frente a cable coaxial o par trenzado, cuando:";
 choices[40]= new Array();
 choices[40][0] = "La red se instala en un entorno que exige inmunidad al ruido";
 choices[40][1] = "Es un factor determinante la facilidad de instalaci&oacute;n";
 choices[40][2] = "Se necesita construir el backbone en una WAN";
 choices[40][3] = "Se pondera muy alto el abaratamiento de costes";
 answers[40] = choices[40][2];
 units[40] = "99";
 comments[40] = "Id Pregunta: 3849. ";


//  Id pregunta: 3938 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Qu&eacute; funci&oacute;n tiene el protocolo ICMP?";
 choices[41]= new Array();
 choices[41][0] = "Control";
 choices[41][1] = "Transporte de paquetes";
 choices[41][2] = "Redirecci&oacute;n de tramas";
 choices[41][3] = "Control de congesti&oacute;n";
 answers[41] = choices[41][0];
 units[41] = "112";
 comments[41] = "Id Pregunta: 3938. ";


//  Id pregunta: 3981 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Se&ntilde;ale la respuesta correcta:";
 choices[42]= new Array();
 choices[42][0] = "Cuando se usa selecci&oacute;n, existe una estaci&oacute;n de control y una o varias estaciones tributarios.";
 choices[42][1] = "En la contienda todas las estaciones pueden acceder en cualquier momento al circuito.";
 choices[42][2] = "Se denomina ventana al n&uacute;mero m&aacute;ximo de tramas que en un determinado momento pueden estar pendientes de confirmaci&oacute;n.";
 choices[42][3] = "Todas son verdaderas.";
 answers[42] = choices[42][3];
 units[42] = "101";
 comments[42] = "Id Pregunta: 3981. ";


//  Id pregunta: 4182 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[43]= new Array();
 choices[43][0] = "RJ11 de 6 contactos";
 choices[43][1] = "RJ45 de 6 contactos";
 choices[43][2] = "RJ45 de 8 contactos";
 choices[43][3] = "RJ49 para cables STP";
 answers[43] = choices[43][2];
 units[43] = "99";
 comments[43] = "Id Pregunta: 4182. ";


//  Id pregunta: 4186 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Respecto al protocolo IP es falso que";
 choices[44]= new Array();
 choices[44][0] = "En IPv6 las direcciones anycast tienen un rango de numeraci&oacute;n diferenciado";
 choices[44][1] = "IPv4 permite priorizaci&oacute;n de tr&aacute;fico";
 choices[44][2] = "IPv6 permite la asignaci&oacute;n de direcciones multicast permanentes";
 choices[44][3] = "Se puede transmitir IPv6 sobre redes IPv4";
 answers[44] = choices[44][0];
 units[44] = "100";
 comments[44] = "Id Pregunta: 4186. ";


//  Id pregunta: 4628 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Que entidad publica empresarial tiene atribuida la autoridad de asignaci&oacute;n de nombres de dominio .es?:";
 choices[45]= new Array();
 choices[45][0] = "Red.es";
 choices[45][1] = "FNMT";
 choices[45][2] = "dominios.es";
 choices[45][3] = "Red Iris";
 answers[45] = choices[45][0];
 units[45] = "";
 comments[45] = "Id Pregunta: 4628. ";


//  Id pregunta: 4682 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;A qu&eacute; se refiere EFFORTS?";
 choices[46]= new Array();
 choices[46][0] = "Proyecto dirigido a las administraciones europeas, cuyo objetivo es la mejora de su eficiencia mediante la adopci&oacute;n de nuevas tecnolog&iacute;as.";
 choices[46][1] = "Proyecto europeo para la extensi&oacute;n de la red de banda ancha.";
 choices[46][2] = "Proyecto europeo para aunar pol&iacute;ticas de contrataci&oacute;n de personal";
 choices[46][3] = " Proyecto europeo para aumentar la eficiencia en el uso de las computadoras en el &aacute;mbito de las administraciones p&uacute;blicas europeas";
 answers[46] = choices[46][3];
 units[46] = "41";
 comments[46] = "Id Pregunta: 4682. Examen 2006 JCYL";


//  Id pregunta: 4815 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29.Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a laconfiguraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignabledentro de dicho rango?";
 choices[47]= new Array();
 choices[47][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[47][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada:192.168.20.1";
 choices[47][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[47][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248 Puerta de enlace predeterminada:192.168.20.1";
 answers[47] = choices[47][2];
 units[47] = "100";
 comments[47] = "Id Pregunta: 4815. ";


//  Id pregunta: 4821 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes infracciones est&aacute; tipificada como muy grave seg&uacute;n la Ley 34/2002, de 11 de julio, deservicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?";
 choices[48]= new Array();
 choices[48][0] = "El incumplimiento significativo de la obligaci&oacute;n de retener los datos de tr&aacute;fico generados por lascomunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n, previstaen el art&iacute;culo 12 de dicha Ley";
 choices[48][1] = "La utilizaci&oacute;n de los datos retenidos, en cumplimiento del art&iacute;culo 12 de dicha Ley, para fines distintos de losse&ntilde;alados en &eacute;l";
 choices[48][2] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red ola prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativocompetente lo ordene, en virtud de lo dispuesto en el art&iacute;culo 11 de dicha Ley";
 choices[48][3] = "El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;nelectr&oacute;nica equivalente o el env&iacute;o, en el plazo de un a&ntilde;o, de m&aacute;s de tres comunicaciones comerciales porlos medios aludidos a un mismo destinatario, cuando en dichos env&iacute;os no se cumplan los requisitosestablecidos en el art&iacute;culo 21 de dicha Ley";
 answers[48] = choices[48][2];
 units[48] = "30";
 comments[48] = "Id Pregunta: 4821. ";


//  Id pregunta: 4937 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  En el Modelo E/R de Chen del universo de discurso del departamento de RRHH de una cierta organizaci&oacute;n,existe la restricci&oacute;n, en base a un criterio fijado por la Direcci&oacute;n, de que el atributo &ldquo;mes&rdquo; de la entidad&ldquo;vacaciones&rdquo; s&oacute;lo podr&aacute; tomar los valores &lsquo;Junio&rsquo;, &lsquo;Julio&rsquo; y &lsquo;Agosto&rsquo;. Esta restricci&oacute;n o limitaci&oacute;n deintegridad es de tipo:";
 choices[49]= new Array();
 choices[49][0] = "Sint&aacute;ctica.";
 choices[49][1] = "Sem&aacute;ntica estructural.";
 choices[49][2] = "Sem&aacute;ntica de usuario sobre los valores.";
 choices[49][3] = "Sem&aacute;ntica de usuario sobre la asociaci&oacute;n.";
 answers[49] = choices[49][2];
 units[49] = "80";
 comments[49] = "Id Pregunta: 4937. Examen TIC B 2007";


//  Id pregunta: 4970 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es el componente de SNMP que define las reglas para describir los objetos gestionados y c&oacute;mo losprotocolos sometidos a la gesti&oacute;n pueden acceder a ellos?:";
 choices[50]= new Array();
 choices[50][0] = "MIB (Management Information Base).";
 choices[50][1] = "PDU (Packet Data Unit).";
 choices[50][2] = "CMIS (Common Management Information Services).";
 choices[50][3] = "SMI (Structure of Management Information).";
 answers[50] = choices[50][3];
 units[50] = "104";
 comments[50] = "Id Pregunta: 4970. Examen TIC B 2007";


//  Id pregunta: 5011 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un mediode pago?:";
 choices[51]= new Array();
 choices[51][0] = "Simultaneidad";
 choices[51][1] = "Interactividad";
 choices[51][2] = "No repudio";
 choices[51][3] = "Automatizaci&oacute;n";
 answers[51] = choices[51][2];
 units[51] = "70";
 comments[51] = "Id Pregunta: 5011. Examen TIC A 2007";


//  Id pregunta: 5017 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los sistemas de informaci&oacute;n geogr&aacute;fica basados en formato r&aacute;ster?:";
 choices[52]= new Array();
 choices[52][0] = "Utiliza puntos, l&iacute;neas y pol&iacute;gonos para almacenar la informaci&oacute;n.";
 choices[52][1] = "La precisi&oacute;n de localizaci&oacute;n es mayor que en la de otros formatos.";
 choices[52][2] = "Se construye utilizando ret&iacute;culas de tama&ntilde;o regular.";
 choices[52][3] = "No es adecuado para modelos que incluyan evoluci&oacute;n temporal.";
 answers[52] = choices[52][2];
 units[52] = "67";
 comments[52] = "Id Pregunta: 5017. Examen TIC A 2007";


//  Id pregunta: 5070 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las afirmaciones siguientes es cierta con respecto a la t&eacute;cnica de gesti&oacute;n de memoria conocida como&quot;paginaci&oacute;n&quot;?:";
 choices[53]= new Array();
 choices[53][0] = "Consiste en determinar que espacio vac&iacute;o en la memoria principal es el mas indicado para ser asignado a unproceso";
 choices[53][1] = "El espacio de memoria se divide en secciones f&iacute;sicas de igual tama&ntilde;o llamadas marcos de pagina, lascuales sirven como unidad de almacenamiento de informaci&oacute;n";
 choices[53][2] = "Es la memoria que queda desperdiciada al usar los m&eacute;todos de gesti&oacute;n de memoria tales como laasignaci&oacute;n";
 choices[53][3] = "Es un esquema de manejo de memoria mediante el cual la estructura del programa refleja su divisi&oacute;n l&oacute;gica;llev&aacute;ndose a cabo una agrupaci&oacute;n l&oacute;gica de la informaci&oacute;n en bloques de tama&ntilde;o variable denominadossegmentos";
 answers[53] = choices[53][1];
 units[53] = "52";
 comments[53] = "Id Pregunta: 5070. Examen TIC A 2007";


//  Id pregunta: 5169 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  El protocolo que contiene las especificaciones para garantizar la integridad y seguridad en mensajer&iacute;a de Servicios Web es:";
 choices[54]= new Array();
 choices[54][0] = "RSA";
 choices[54][1] = "WS-Security (WSS)";
 choices[54][2] = "X.509";
 choices[54][3] = "Kerberos";
 answers[54] = choices[54][1];
 units[54] = "111";
 comments[54] = "Id Pregunta: 5169. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5208 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  En el modelo de calidad del software de McCall, cu&aacute;l de los siguientes es un factor de explotaci&oacute;n u operaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Mantenibilidad";
 choices[55][1] = "Flexibilidad";
 choices[55][2] = "Usabilidad";
 choices[55][3] = "Reusabilidad";
 answers[55] = choices[55][2];
 units[55] = "88";
 comments[55] = "Id Pregunta: 5208. ";


//  Id pregunta: 5222 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  La actividad &quot;Asignaci&oacute;n detallada de tareas&quot; a qu&eacute; grupo de actividades pertenece";
 choices[56]= new Array();
 choices[56][0] = "Actividades de Inicio de Proyecto (GPI)";
 choices[56][1] = "Actividades de Seguimiento y Control (GPS)";
 choices[56][2] = "Actividades de Finalizaci&oacute;n de Proyecto";
 choices[56][3] = "Actividades de Planificaci&oacute;n de Proyecto (GPP)";
 answers[56] = choices[56][1];
 units[56] = "86";
 comments[56] = "Id Pregunta: 5222. ";


//  Id pregunta: 5497 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indica la afirmaci&oacute;n correcta sobre la tecnolog&iacute;a JavaServer Faces:";
 choices[57]= new Array();
 choices[57][0] = "Ha quedado obsoleta por el framework Spring";
 choices[57][1] = "Es la nueva API Java para desarrollo de transacciones distribuidas";
 choices[57][2] = "Es una novedad del Java 2";
 choices[57][3] = "Es un framework de la capa de presentaci&oacute;n para desarrollo de aplicaciones Web";
 answers[57] = choices[57][3];
 units[57] = "116";
 comments[57] = "Id Pregunta: 5497. ";


//  Id pregunta: 5587 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;les son los procedimientos de adjudicaci&oacute;n que contempla el RD legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[58]= new Array();
 choices[58][0] = "Abierto, restringido y negociado";
 choices[58][1] = "Abierto, restringido, negociado y dedicado";
 choices[58][2] = "Abierto, restringido, negociado y por di&aacute;logo competitivo";
 choices[58][3] = "Ninguno de los anteriores es correcto";
 answers[58] = choices[58][2];
 units[58] = "41";
 comments[58] = "Id Pregunta: 5587. ";


//  Id pregunta: 5651 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel b&aacute;sico, las de nivel medio, a los siguientes ficheros:";
 choices[59]= new Array();
 choices[59][0] = "Aquellos de los que sean responsables Administraciones tributaria y se relacionen con el ejercicio de sus potestades";
 choices[59][1] = "Los relativos a la comision de infracciones administrativas o penales";
 choices[59][2] = "Aquellos que contengan datos derivados de la violencia de g&eacute;nero";
 choices[59][3] = "La a) y la b) son correctas";
 answers[59] = choices[59][3];
 units[59] = "29";
 comments[59] = "Id Pregunta: 5651. ";


//  Id pregunta: 5955 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  Se&ntilde;ala la respuesta falsa. La Ley 11/2007 indica que la Reuni&oacute;n de &Oacute;rganos colegiados por medios electr&oacute;nicos en la Administraci&oacute;n General del Estado se efectuar&aacute; de acuerdo con las siguientes especialidades:";
 choices[60]= new Array();
 choices[60][0] = "Deber&aacute; garantizarse la realizaci&oacute;n efectiva de los principios que la legislaci&oacute;n establece respecto de la convocatoria, acceso a la informaci&oacute;n y comunicaci&oacute;n del orden del d&iacute;a, en donde se especificar&aacute;n los tiempos en los que se organizar&aacute;n los debates, la formulaci&oacute;n y conocimiento de las propuestas y la adopci&oacute;n de acuerdos.";
 choices[60][1] = "Deber&aacute; garantizarse de forma fehaciente el quorum requerido en los t&eacute;rminos establecidos por la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n por medios electr&oacute;nicos ";
 choices[60][2] = "El r&eacute;gimen de constituci&oacute;n y adopci&oacute;n de acuerdos garantizar&aacute; la participaci&oacute;n de los miembros de acuerdo con las disposiciones propias del &oacute;rgano.";
 choices[60][3] = "Las actas garantizar&aacute;n la constancia de las comunicaciones producidas as&iacute; como el acceso de los miembros al contenido de los acuerdos adoptados.";
 answers[60] = choices[60][1];
 units[60] = "43";
 comments[60] = "Id Pregunta: 5955. Disposici&oacute;n Adicional primera.";


//  Id pregunta: 6079 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes NO es una salida del proceso de Selecci&oacute;n de Vendedores dentro de la Gesti&oacute;n de las Adquisiciones del Proyecto?";
 choices[61]= new Array();
 choices[61][0] = "Contrato.";
 choices[61][1] = "Plan de gesti&oacute;n del contrato.";
 choices[61][2] = "Disponibilidad de recursos.";
 choices[61][3] = "Lista de vendedores calificados.";
 answers[61] = choices[61][3];
 units[61] = "27";
 comments[61] = "Id Pregunta: 6079. ";


//  Id pregunta: 6095 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes corresponde a una de las categor&iacute;as de ordenadores contempladas en la taxonom&iacute;a de Flynn?";
 choices[62]= new Array();
 choices[62][0] = "SIDI.";
 choices[62][1] = "SDSP.";
 choices[62][2] = "SIMD.";
 choices[62][3] = "MIMP.";
 answers[62] = choices[62][2];
 units[62] = "45";
 comments[62] = "Id Pregunta: 6095. TIC A 2009";


//  Id pregunta: 6113 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre &quot;grid computing&quot; es FALSA:";
 choices[63]= new Array();
 choices[63][0] = "La escalabilidad parametrizable es una caracter&iacute;stica muy importante de esta arquitectura.";
 choices[63][1] = "Son sistemas homog&eacute;neos.";
 choices[63][2] = "Los nodos no tienen que estar dedicados.";
 choices[63][3] = "Se puede conseguir cerca de un 100 % de utilizaci&oacute;n de la CPU.";
 answers[63] = choices[63][1];
 units[63] = "45";
 comments[63] = "Id Pregunta: 6113. TIC A 2009";


//  Id pregunta: 6257 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  De qu&eacute; modelo de ciclo de vida del software orientado a objetos son propios los conceptos amplitud, profundidad, madurez, alternativas y alcance";
 choices[64]= new Array();
 choices[64][0] = "Modelo de agrupamiento";
 choices[64][1] = "Modelo fuente";
 choices[64][2] = "Modelo remolino";
 choices[64][3] = "Modelo pinball";
 answers[64] = choices[64][2];
 units[64] = "76";
 comments[64] = "Id Pregunta: 6257. TICB-2009, bloque desarrollo";


//  Id pregunta: 6404 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Cuando un trabajador asalariado cree un programa de ordenador, en el ejercicio de las funciones que le han sido confiadas o siguiendo las instrucciones de su empresario, &iquest;a qui&eacute;n corresponde la titularidad de los derechos de explotaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Al empresario, salvo pacto en contrario";
 choices[65][1] = "Al trabajador, en todo caso";
 choices[65][2] = "Al empresario, en todo caso";
 choices[65][3] = "Al trabajador, salvo pacto en contrario";
 answers[65] = choices[65][0];
 units[65] = "36";
 comments[65] = "Id Pregunta: 6404. Art&iacute;culo 97 RDL 1/1996";


//  Id pregunta: 6443 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  La posibilidad de que las aplicaciones software puedan funcionar en m&aacute;quinas de distintos fabricantes y arquitecturas se denomina:";
 choices[66]= new Array();
 choices[66][0] = "Adaptabilidad";
 choices[66][1] = "Portabilidad";
 choices[66][2] = "Interoperabilidad";
 choices[66][3] = "Escalabilidad";
 answers[66] = choices[66][1];
 units[66] = "40";
 comments[66] = "Id Pregunta: 6443. Castilla La Mancha 2009";


//  Id pregunta: 6450 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  En un sistema operativo LINUX &iquest;qu&eacute; es un gestor GRUB?";
 choices[67]= new Array();
 choices[67][0] = "Un gestor de creaci&oacute;n y activaci&oacute;n de particiones swap, en el primer sector de la partici&oacute;n de arranque";
 choices[67][1] = "Un gestor que crea un &aacute;rea de swap en memoria RAM";
 choices[67][2] = "Un gestor que activa una partici&oacute;n de swap ya creada";
 choices[67][3] = "Un gestor de arranque multisistema creado por el proyecto GNU";
 answers[67] = choices[67][3];
 units[67] = "54";
 comments[67] = "Id Pregunta: 6450. Castilla La Mancha 2009";


//  Id pregunta: 6620 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Seg&uacute;n M&eacute;trica, las Interfaces son:";
 choices[68]= new Array();
 choices[68][0] = "4: Gesti&oacute;n de Proyectos; Seguridad y Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad; Gesti&oacute;n de Configuraci&oacute;n";
 choices[68][1] = "3: Gesti&oacute;n de Proyectos; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 choices[68][2] = "3: Gesti&oacute;n de Proyectos; Aseguramiento de la Calidad  y Gesti&oacute;n de Riesgos; Gesti&oacute;n de Configuraci&oacute;n";
 choices[68][3] = "4: Gesti&oacute;n de Proyectos; Seguridad; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 answers[68] = choices[68][0];
 units[68] = "86";
 comments[68] = "Id Pregunta: 6620. ";


//  Id pregunta: 7258 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  El dispositivo necesario para modular la se&ntilde;al de acceso a las redes de cable TV se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Cablemodem";
 choices[69][1] = "HBA (Host Bus Adapter)";
 choices[69][2] = "Splitter";
 choices[69][3] = "HDMI (High-Definition Multi-media interface)";
 answers[69] = choices[69][0];
 units[69] = "105";
 comments[69] = "Id Pregunta: 7258. Examen TIC B 2009";


//  Id pregunta: 8067 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   &iquest;Cu&aacute;ntos p&iacute;xeles tiene una ilustraci&oacute;n de 6x6 pulgadas con una resoluci&oacute;n de 300 ppi?";
 choices[70]= new Array();
 choices[70][0] = " 540.000 p&iacute;xeles.";
 choices[70][1] = " 3.240.000 p&iacute;xeles.";
 choices[70][2] = " 10.800 p&iacute;xeles.";
 choices[70][3] = " 1.800 p&iacute;xeles.";
 answers[70] = choices[70][1];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 8067. Map 2008";


//  Id pregunta: 8350 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)   &iquest;Para que sirve la palabra clave &quot;static&quot; en Java? ";
 choices[71]= new Array();
 choices[71][0] = "Indica que aquel rn&eacute;todo o variable que precede es constante, es decir, no puede modificarse";
 choices[71][1] = "Permite indicar que el m&eacute;todo o la variable al que precede pertenece a la clase en lugar de al objeto";
 choices[71][2] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde otras clases";
 choices[71][3] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde la dase a la que pertenece.";
 answers[71] = choices[71][1];
 units[71] = "116";
 comments[71] = "Id Pregunta: 8350. Examen TIC A2 2010";


//  Id pregunta: 8611 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  Si sobre el fichero &quot;ejemplo.txt&quot; queremos dar permisos totales al due&ntilde;o, de lectura y ejecuci&oacute;n al grupo y s&oacute;lo de lectura al resto de usuarios, usaremos la instrucci&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "chmod 766 ejemplo.txt";
 choices[72][1] = "chmod 751 ejemplo.txt";
 choices[72][2] = "chmod 761 ejemplo.txt";
 choices[72][3] = "chmod 754 ejemplo.txt";
 answers[72] = choices[72][3];
 units[72] = "53,54";
 comments[72] = "Id Pregunta: 8611. Examen TIC A2 2010 interna";


//  Id pregunta: 8629 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[73]= new Array();
 choices[73][0] = "En la especializaci&oacute;n un supertipo so descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[73][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[73][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[73][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[73] = choices[73][0];
 units[73] = "57, 58";
 comments[73] = "Id Pregunta: 8629. Examen TIC A2 2010 interna";


//  Id pregunta: 8662 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  En el protocolo SIP de voz sobre IP, &iquest;cu&aacute;l no es una entidad l&oacute;gica?";
 choices[74]= new Array();
 choices[74][0] = "Agente de usuario";
 choices[74][1] = "Servidor proxy";
 choices[74][2] = "Agente de usuario inverso";
 choices[74][3] = "Agente proxy";
 answers[74] = choices[74][3];
 units[74] = "109";
 comments[74] = "Id Pregunta: 8662. Examen UPM A2 2011";


//  Id pregunta: 8733 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  Elija la afirmaci&oacute;n correcta, en relaci&oacute;n con el contenido de la tarjeta chip del DNI electr&oacute;nico:";
 choices[75]= new Array();
 choices[75][0] = "Se incluye un certificado electr&oacute;nico &uacute;nico, personal e intransferible, con la doble funcionalidad de firma electr&oacute;nica y de autenticaci&oacute;n.";
 choices[75][1] = "Se incluyen, entre otros los datos de filiaci&oacute;n del ciudadano (los mismos que est&aacute;n impresos en el soporte f&iacute;sico del DNI), junto con una imagen de la fotograf&iacute;a";
 choices[75][2] = "Los datos contenidos, en lodo caso, s&oacute;lo son accesibles en lectura por el ciudadano, mediante la utilizaci&oacute;n de la Clave Personal de Acceso o PIN. como garant&iacute;a de confidencialidad";
 choices[75][3] = "No se incluye una imagen de la fotograf&iacute;a";
 answers[75] = choices[75][1];
 units[75] = "74";
 comments[75] = "Id Pregunta: 8733. Examen TIC A2 2010 interna";


//  Id pregunta: 8757 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  En un esquema de multiprogramaci&oacute;n en memoria real, independientemente de que est&eacute; basado en particiones de tama&ntilde;o fijas o de tama&ntilde;o variable, &iquest;en qu&eacute; consiste el algoritmo del &quot;siguiente ajuste&quot; para elegir el tama&ntilde;o de la partici&oacute;n en la que alojar un programa?";
 choices[76]= new Array();
 choices[76][0] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado";
 choices[76][1] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado, pero dejando un apuntador al lugar en donde se asigno el &uacute;ltimo hueco";
 choices[76][2] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la mayor cantidad al tama&ntilde;o deseado";
 choices[76][3] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la menor cantidad al tama&ntilde;o deseado.";
 answers[76] = choices[76][1];
 units[76] = "52";
 comments[76] = "Id Pregunta: 8757. Examen TIC A2 2010 interna";


//  Id pregunta: 8761 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Sean dos procesos: P1, con tiempo de ejecuci&oacute;n de 20ms, y P2, con 15ms. El planificador a corto plazo act&uacute;a seg&uacute;n un Round Robin con cuanto de 10ms y tiempo de conmutaci&oacute;n de tarea de 5ms Marcar el tiempo de retorno (regreso) de P2, teniendo en cuenta que se empieza ejecutando P1.";
 choices[77]= new Array();
 choices[77][0] = "35";
 choices[77][1] = "40";
 choices[77][2] = "50";
 choices[77][3] = "55";
 answers[77] = choices[77][2];
 units[77] = "52";
 comments[77] = "Id Pregunta: 8761. Examen TIC A2 2010 interna";


//  Id pregunta: 8773 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  Se ha puesto un servicio de DHCP en una subred. &iquest;Es posible que otra subred pueda usar el servicio DHCP y que este servicio asigne direcciones a los clientes de ambas?";
 choices[78]= new Array();
 choices[78][0] = "No, porque solo funciona con broadcast las peticiones.";
 choices[78][1] = "Si, porque las peticiones son unicast y llegar&aacute;n al servidor de DHCP";
 choices[78][2] = "Es posible pero hace falta un DHCP Relay.";
 choices[78][3] = "Si, con solo configurar el servidor DHCP para servir a la otra subred.";
 answers[78] = choices[78][2];
 units[78] = "100";
 comments[78] = "Id Pregunta: 8773. Examen UPM A2 2011";


//  Id pregunta: 8862 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  Al Sistema de Informaci&oacute;n Geogr&aacute;fica que basa su funcionalidad en una concepci&oacute;n impl&iacute;cita de las relaciones de vecindad entre los objetos geogr&aacute;ficos, se le llama:";
 choices[79]= new Array();
 choices[79][0] = "Sistema Vectorial.";
 choices[79][1] = "Sistema R&aacute;ster.";
 choices[79][2] = "Sistema georreferencial orientado a objetos.";
 choices[79][3] = "Sistema georreferencial basado en metadatos.";
 answers[79] = choices[79][1];
 units[79] = "67";
 comments[79] = "Id Pregunta: 8862. Analista Ayto. Madrid 2010";


//  Id pregunta: 8866 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  Un dato espacial es una variable asociada a una localizaci&oacute;n del espacio. Normalmente se utilizan datos vectoriales, los cuales pueden ser expresados mediante tres tipos de objetos espaciales:";
 choices[80]= new Array();
 choices[80][0] = "Puntos, l&iacute;neas, pol&iacute;gonos.";
 choices[80][1] = "Coordenadas, l&iacute;neas, pol&iacute;gonos.";
 choices[80][2] = "Puntos, vectores, pol&iacute;gonos.";
 choices[80][3] = "Puntos, arcos, rectas.";
 answers[80] = choices[80][0];
 units[80] = "67";
 comments[80] = "Id Pregunta: 8866. Analista Ayto. Madrid 2010";


//  Id pregunta: 8873 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  El desarrollo en Espiral es un modelo del ciclo de vida del software, que establece una serie de etapas por los que pasa el mismo, desde su concepci&oacute;n inicial hasta la finalizaci&oacute;n del producto. Se&ntilde;ale las etapas correctas";
 choices[81]= new Array();
 choices[81][0] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; y &ldquo;Desarrollo y Validaci&oacute;n&rdquo;";
 choices[81][1] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[81][2] = "&ldquo;Planificaci&oacute;n de actividades y recursos necesarios&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[81][3] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 answers[81] = choices[81][0];
 units[81] = "76";
 comments[81] = "Id Pregunta: 8873. Analista Ayto. Madrid 2010";


//  Id pregunta: 8925 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;C&oacute;mo se denominan las dos series de datos de uso civil emitidas continuamente por cada sat&eacute;lite del sistema GPS?";
 choices[82]= new Array();
 choices[82][0] = "Almanaque y efem&eacute;rides.";
 choices[82][1] = "Multipath y atenuaci&oacute;n.";
 choices[82][2] = "Triangulaci&oacute;n y correcci&oacute;n.";
 choices[82][3] = "Latitud y longitud.";
 answers[82] = choices[82][0];
 units[82] = "67";
 comments[82] = "Id Pregunta: 8925. Operador Ayto. Madrid 2010";


//  Id pregunta: 8969 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Entre las m&eacute;tricas de Calidad para sistemas orientados a objetos se encuentran MDOO &iquest;cu&aacute;l de los siguientes no es un factor que la compongan?";
 choices[83]= new Array();
 choices[83][0] = "Factor de polimorfismo";
 choices[83][1] = "Factor de acoplamiento";
 choices[83][2] = "Factor de herencia de m&eacute;todos";
 choices[83][3] = "Factor de cohesi&oacute;n";
 answers[83] = choices[83][3];
 units[83] = "88";
 comments[83] = "Id Pregunta: 8969. ";


//  Id pregunta: 9114 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Qu&eacute; se entiende como flujo de instrucciones?";
 choices[84]= new Array();
 choices[84][0] = "Conjunto de instrucciones en paralelo que son ejecutadas por varios procesadores.";
 choices[84][1] = "Conjunto de instrucciones secuenciales que son ejecutadas entre varios procesadores";
 choices[84][2] = "Flujo secuencial de instrucciones requeridas por el flujo de datos";
 choices[84][3] = "Conjunto de instrucciones secuenciales ejecutadas por un &uacute;nico procesador.";
 answers[84] = choices[84][3];
 units[84] = "45";
 comments[84] = "Id Pregunta: 9114. ";


//  Id pregunta: 9221 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[85]= new Array();
 choices[85][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[85][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric.";
 choices[85][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[85][3] = "Todas son correctas.";
 answers[85] = choices[85][3];
 units[85] = "48";
 comments[85] = "Id Pregunta: 9221. ";


//  Id pregunta: 9381 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;A qu&eacute; est&aacute;ndar se refiere WirelessMan-Advanced?";
 choices[86]= new Array();
 choices[86][0] = "802.16m";
 choices[86][1] = "802.16e";
 choices[86][2] = "802.16k";
 choices[86][3] = "802.16-2009";
 answers[86] = choices[86][0];
 units[86] = "101";
 comments[86] = "Id Pregunta: 9381. ";


//  Id pregunta: 9659 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; modelo de evaluaci&oacute;n de procesos SW es certificable?";
 choices[87]= new Array();
 choices[87][0] = "CMM";
 choices[87][1] = "CMMI Escalonado";
 choices[87][2] = "CMMI Continuo";
 choices[87][3] = "Ninguno de los anteriores";
 answers[87] = choices[87][0];
 units[87] = "87";
 comments[87] = "Id Pregunta: 9659. ";


//  Id pregunta: 9769 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[88]= new Array();
 choices[88][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[88][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[88][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[88][3] = "La ausencia de cita de la fuente.";
 answers[88] = choices[88][2];
 units[88] = "22";
 comments[88] = "Id Pregunta: 9769. ";


//  Id pregunta: 10089 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l NO es un producto de la metodolog&iacute;a SCRUM?";
 choices[89]= new Array();
 choices[89][0] = "Product backlog";
 choices[89][1] = "Sprint";
 choices[89][2] = "Burn down chart";
 choices[89][3] = "Sprint backlog";
 answers[89] = choices[89][1];
 units[89] = "79";
 comments[89] = "Id Pregunta: 10089. ";


//  Id pregunta: 10117 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  Cu&aacute;l de los siguientes equipos trabaja a nivel 1 de red:";
 choices[90]= new Array();
 choices[90][0] = "Router";
 choices[90][1] = "Switch";
 choices[90][2] = "Bridge";
 choices[90][3] = "Hub";
 answers[90] = choices[90][3];
 units[90] = "102";
 comments[90] = "Id Pregunta: 10117. ";


//  Id pregunta: 10121 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  En el encaminamiento por vector-distancia cada router:";
 choices[91]= new Array();
 choices[91][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[91][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[91][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[91][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[91] = choices[91][0];
 units[91] = "102";
 comments[91] = "Id Pregunta: 10121. ";


//  Id pregunta: 10194 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  Para el reconocimiento de las vocales se calculan";
 choices[92]= new Array();
 choices[92][0] = "los al&oacute;fonos";
 choices[92][1] = "el pitch";
 choices[92][2] = "los formantes";
 choices[92][3] = "el cepstrum";
 answers[92] = choices[92][2];
 units[92] = "94";
 comments[92] = "Id Pregunta: 10194. ";


//  Id pregunta: 10254 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  En cuanto al tratamiento de  datos personales de menores";
 choices[93]= new Array();
 choices[93][0] = "La legislaci&oacute;n no hace distinciones referentes a la edad de la persona de la que se recaban los datos";
 choices[93][1] = "Con car&aacute;cter general, s&oacute;lo pueden recabarse datos de personas mayores de edad (18 a&ntilde;os)";
 choices[93][2] = "Con car&aacute;cter general, pueden recabarse datos de menores de edad (18 a&ntilde;os) s&oacute;lo con consentimiento de sus padres o tutores";
 choices[93][3] = "Con car&aacute;cter general, pueden recabarse datos de menores de 14 a&ntilde;os s&oacute;lo con consentimiento de sus padres o tutores";
 answers[93] = choices[93][3];
 units[93] = "29";
 comments[93] = "Id Pregunta: 10254. Art&iacute;culo 13.1 del RD 1720/2007";


//  Id pregunta: 10292 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;A qu&eacute; altitud aproximada est&aacute; la &oacute;rbita de los sat&eacute;lites que forman el sistema GPS?";
 choices[94]= new Array();
 choices[94][0] = "5.200 km";
 choices[94][1] = "20.200 km";
 choices[94][2] = "36.200 km";
 choices[94][3] = "45.200 km";
 answers[94] = choices[94][1];
 units[94] = "67";
 comments[94] = "Id Pregunta: 10292. TIC A2, libre, examen 2013";


//  Id pregunta: 10306 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[95]= new Array();
 choices[95][0] = "true &gt; 2013";
 choices[95][1] = "&gt; 2013";
 choices[95][2] = "cat /dev/null &gt; 2013";
 choices[95][3] = "| &gt; 2013";
 answers[95] = choices[95][3];
 units[95] = "53";
 comments[95] = "Id Pregunta: 10306. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10344 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es la normativa que crea la Comisi&oacute;n de Propiedad Intelectual?";
 choices[96]= new Array();
 choices[96][0] = "Ley 2/2011, de Econom&iacute;a Sostenible";
 choices[96][1] = "Real Decreto 1889/2011, de regulaci&oacute;n del funcionamiento de la Comisi&oacute;n de Propiedad Intelectual";
 choices[96][2] = "Real Decreto Legislativo 1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual";
 choices[96][3] = "Real Decreto 1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual";
 answers[96] = choices[96][0];
 units[96] = "37";
 comments[96] = "Id Pregunta: 10344. La Ley 2/2011 crea la Comisi&oacute;n de Propiedad Intelectual, y el Real Decreto 1889/2011 regula su funcionamiento";


//  Id pregunta: 10448 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  El m&eacute;todo de compresi&oacute;n de archivos denominado &quot;algoritmo de deflaci&oacute;n&quot;, que fue originalmente definido por Phil Katz, se utiliza en el formato de imagen ";
 choices[97]= new Array();
 choices[97][0] = "TIFF.";
 choices[97][1] = "GIF.";
 choices[97][2] = "PNG.";
 choices[97][3] = "JPEG.";
 answers[97] = choices[97][2];
 units[97] = "93";
 comments[97] = "Id Pregunta: 10448. Examen TIC A1 2013";


//  Id pregunta: 10515 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes respuestas NO se emplea para realizar pruebas de carga?";
 choices[98]= new Array();
 choices[98][0] = "Jmeter";
 choices[98][1] = "Loadrunner";
 choices[98][2] = "Grinder";
 choices[98][3] = "Turbine";
 answers[98] = choices[98][3];
 units[98] = "86";
 comments[98] = "Id Pregunta: 10515. TIC A2, libre, examen 2013";


//  Id pregunta: 10549 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Las contrase&ntilde;as:";
 choices[99]= new Array();
 choices[99][0] = "Deben ser asignadas por el administrador de seguridad";
 choices[99][1] = "Deben cambiarse cada 30 d&iacute;as a discreci&oacute;n del usuario";
 choices[99][2] = "Deben reutilizarse muchas veces para garantizar que el usuario no olvida su contrase&ntilde;a";
 choices[99][3] = "Deben visualizarse en la pantalla para que el usuario puede asegurarse de que se ha introducido correctamente";
 answers[99] = choices[99][0];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10549. ";


