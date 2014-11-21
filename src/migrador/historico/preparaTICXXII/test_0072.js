/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 49 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo para la ordenaci&oacute;n de alternativas en la selecci&oacute;n de bienes y servicios?:";
 choices[0]= new Array();
 choices[0][0] = "M&eacute;todo lexicogr&aacute;fico";
 choices[0][1] = "M&eacute;todo de Promethee";
 choices[0][2] = "M&eacute;todo Qualiflex";
 choices[0][3] = "M&eacute;todo heur&iacute;stico";
 answers[0] = choices[0][3];
 units[0] = "34";
 comments[0] = "Id Pregunta: 49. ";


//  Id pregunta: 69 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas compara cada permutaci&oacute;n posible de las alternativas, con la informaci&oacute;n que aporta para cada criterio la matriz de decisi&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo Promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "Permutaci&oacute;n";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 69. ";


//  Id pregunta: 81 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; se entiende por  'throughput'?:";
 choices[2]= new Array();
 choices[2][0] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 choices[2][1] = "Es la m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 choices[2][2] = "Es el tiempo transcurrido entre la entrega de un trabajo o una transacci&oacute;n al sistema y la recepci&oacute;n del resultado o la respuesta";
 choices[2][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[2] = choices[2][0];
 units[2] = "35";
 comments[2] = "Id Pregunta: 81. ";


//  Id pregunta: 196 Año de creación de pregunta: 2004-01-01
 questions[3]= "4)  El t&eacute;rmino MAGERIT es un acr&oacute;nimo que procede de los siguientes t&eacute;rminos, o significa lo siguiente:";
 choices[3]= new Array();
 choices[3][0] = "Mercado Abierto y Gratuito a la Exportaci&oacute;n de Recursos Inform&aacute;ticos y de Telecomunicaciones";
 choices[3][1] = "Sistema Inform&aacute;tico propio, financiado y desarrollado por la Comunidad Aut&oacute;noma de Madrid (de aqu&iacute; el nombre de: &quot;Magerit&quot;)";
 choices[3][2] = "Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n";
 choices[3][3] = "Methot Aid for Gradual Employ Resource of Information Technology";
 answers[3] = choices[3][2];
 units[3] = "33";
 comments[3] = "Id Pregunta: 196. Examen TIC MAP B 2004";


//  Id pregunta: 250 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Entre las alternativas al HALON 1301 no se encuentra:";
 choices[4]= new Array();
 choices[4][0] = "FM-200";
 choices[4][1] = "Argonite";
 choices[4][2] = "Antifire";
 choices[4][3] = "Argonfire";
 answers[4] = choices[4][2];
 units[4] = "33";
 comments[4] = "Id Pregunta: 250. ";


//  Id pregunta: 315 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  La Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal incluye como posibles sujetos del r&eacute;gimen sancionador:";
 choices[5]= new Array();
 choices[5][0] = "S&oacute;lo al responsable del fichero";
 choices[5][1] = "S&oacute;lo al encargado del tratamiento";
 choices[5][2] = "Al responsable del fichero y al encargado del tratamiento";
 choices[5][3] = "La Ley 15/99 no regula el r&eacute;gimen sancionador";
 answers[5] = choices[5][2];
 units[5] = "29";
 comments[5] = "Id Pregunta: 315. ";


//  Id pregunta: 497 Año de creación de pregunta: 2003-01-01
 questions[6]= "7)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/1999 del 13 de Diciembre, para ejercer los derechos de rectificaci&oacute;n y/o cancelaci&oacute;n se necesita:";
 choices[6]= new Array();
 choices[6][0] = "Nada, se ejercen gratuitamente";
 choices[6][1] = "Pagar solo los gastos ocasionados por la rectificaci&oacute;n";
 choices[6][2] = "Se necesita un notario";
 choices[6][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[6] = choices[6][0];
 units[6] = "29";
 comments[6] = "Id Pregunta: 497. ";


//  Id pregunta: 645 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Cu&aacute;l de las siguientes no es una excepci&oacute;n admitida por la Decisi&oacute;n 87/95/CEE para la utilizaci&oacute;n de especificaciones no normalizadas:";
 choices[7]= new Array();
 choices[7][0] = "Por cuestiones de continuidad de funcionamiento, pero con la existencia de un plan estrat&eacute;gico de transici&oacute;n.";
 choices[7][1] = "Por la existencia de una norma 'de facto' ampliamente aceptada.";
 choices[7][2] = "Si se demuestra que la satisfacci&oacute;n de la norma tiene un coste excesivo.";
 choices[7][3] = "Por cuestiones de Innovaci&oacute;n.";
 answers[7] = choices[7][1];
 units[7] = "40";
 comments[7] = "Id Pregunta: 645. ";


//  Id pregunta: 732 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  En un sistema de informaci&oacute;n de una universidad, en el que se almacenan las asignaturas en las que se matriculan los alumnos, &iquest;cu&aacute;l ser&iacute;a la mejor manera de almacenar las asignaturas de las matr&iacute;culas en la base de datos relacional atendiendo a criterios";
 choices[8]= new Array();
 choices[8][0] = "En la tabla ALUMNOS; con un campo para cada asignatura";
 choices[8][1] = "En la tabla MATR&Iacute;CULA, con un campo asignaturas, en el que se almacenar&iacute;an, delimitadas por separadores, las asignaturas";
 choices[8][2] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a tantos registros como asignaturas tenga la matr&iacute;cula. Cada registro constar&iacute;a del identificador de la matr&iacute;cula y el identificador de la asignatura";
 choices[8][3] = "En le tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a un registro por matr&iacute;cula, con tantos campos como asignaturas. El n&uacute;mero m&aacute;ximo de asignaturas depender&iacute;a de la universidad";
 answers[8] = choices[8][2];
 units[8] = "56,57";
 comments[8] = "Id Pregunta: 732. Examen TIC MAP B 2004";


//  Id pregunta: 782 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[9]= new Array();
 choices[9][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[9][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[9][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[9][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[9] = choices[9][3];
 units[9] = "30";
 comments[9] = "Id Pregunta: 782. ";


//  Id pregunta: 920 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es el repositorio del Designer?:";
 choices[10]= new Array();
 choices[10][0] = "Un objeto para obtener listados";
 choices[10][1] = "Una base de datos donde se guardan las estructuras que se van creando";
 choices[10][2] = "Un formulario especial de licencias del Designer";
 choices[10][3] = "Una base de datos que almacena solo los usuarios con acceso al Designer";
 answers[10] = choices[10][1];
 units[10] = "56";
 comments[10] = "Id Pregunta: 920. ";


//  Id pregunta: 923 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es falso si hablamos de SET?";
 choices[11]= new Array();
 choices[11][0] = "Es una aplicaci&oacute;n distribuida que en particular usa canales virtuales seguros y sirve para pagos con tarjetas de pl&aacute;stico";
 choices[11][1] = "Es un est&aacute;ndar privado propuesto por Visa-Microsoft y Mastercard-Netscape";
 choices[11][2] = "Es m&aacute;s sencillo de implementar y de implantar que SSL lo que contribuye a su r&aacute;pida y progresiva implantaci&oacute;n en el mercado";
 choices[11][3] = "Significa Secure Electronic Transactions, transacciones electr&oacute;nicas seguras";
 answers[11] = choices[11][2];
 units[11] = "70";
 comments[11] = "Id Pregunta: 923. ";


//  Id pregunta: 933 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; es una tarjeta PCMCIA (tambi&eacute;n conocida PC Card)?:";
 choices[12]= new Array();
 choices[12][0] = "El nombre comercial que recibe la tarjeta de comunicaciones de los m&oacute;dems as&iacute;ncronos";
 choices[12][1] = "Una tarjeta de seguridad que consta de un microchip en el que se ha almacenado informaci&oacute;n referente a la identidad personal del usuario y a las autorizaciones de acceso que tiene al sistema inform&aacute;tico";
 choices[12][2] = "El nombre comercial que reciben las placas de comunicaciones Ethernet que se conectan al puerto paralelo";
 choices[12][3] = "Un conjunto de dispositivos de peque&ntilde;o tama&ntilde;o (ancho similar al de una tarjeta de cr&eacute;dito) y diferentes alturas que pueden contener desde tarjetas de comunicaciones, modems, disco duro, etc";
 answers[12] = choices[12][3];
 units[12] = "47";
 comments[12] = "Id Pregunta: 933. ";


//  Id pregunta: 1022 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  El Kernel del sistema objetivo del proyecto GNU es:";
 choices[13]= new Array();
 choices[13][0] = "El kernel 'Linux', mantenido por Linus Torvalds";
 choices[13][1] = "El kernel de Minix, de Andrew S. Tanembaum";
 choices[13][2] = "El kernel Hurd";
 choices[13][3] = "Todas son falsas";
 answers[13] = choices[13][2];
 units[13] = "53";
 comments[13] = "Id Pregunta: 1022. ";


//  Id pregunta: 1288 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Migra:";
 choices[14]= new Array();
 choices[14][0] = "Es una norma del CSIAE, que desarrolla SICRES en detalle.";
 choices[14][1] = "Es un proyecto de AENOR para intercambio de informacion entre SIG.";
 choices[14][2] = "Es una herramienta software del los ministerios de Administraciones P&uacute;blicas e Interior que permite el control de la inmigraci&oacute;n ilegal a nuestro pais.";
 choices[14][3] = "Ninguna de las anteriores.";
 answers[14] = choices[14][1];
 units[14] = "67";
 comments[14] = "Id Pregunta: 1288. ";


//  Id pregunta: 1291 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  NAS:";
 choices[15]= new Array();
 choices[15][0] = "Es un dispositivo de almacenamiento conectado a red de alta capacidad";
 choices[15][1] = "Es un sistema de emisi&oacute;n de alarmas a trav&eacute;s de redes";
 choices[15][2] = "Es una base de datos orientada a objetos";
 choices[15][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[15] = choices[15][0];
 units[15] = "48";
 comments[15] = "Id Pregunta: 1291. ";


//  Id pregunta: 1344 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[16]= new Array();
 choices[16][0] = "Modelo de descubrimiento.";
 choices[16][1] = "Modelo de verificaci&oacute;n.";
 choices[16][2] = "Modelo predictivo.";
 choices[16][3] = "Modelo de resumen.";
 answers[16] = choices[16][1];
 units[16] = "68";
 comments[16] = "Id Pregunta: 1344. ";


//  Id pregunta: 1451 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes respuestas no est&aacute; relacionada con los interfaces de usuario?:";
 choices[17]= new Array();
 choices[17][0] = "Free Windows";
 choices[17][1] = "WYSIWYG";
 choices[17][2] = "X Windows";
 choices[17][3] = "Motif";
 answers[17] = choices[17][0];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1451. ";


//  Id pregunta: 1589 Año de creación de pregunta: 2003-01-01
 questions[18]= "19)  En el sistema operativo UNIX los estados en los que puede estar un proceso :";
 choices[18]= new Array();
 choices[18][0] = "Son dos,   donde el proceso 0 corresponde al proceso intercambiador";
 choices[18][1] = "Son 8, donde el proceso 0 se denimina init, y es el antecesor de todos los procesos";
 choices[18][2] = "Son 9, entre los que se encuentran los procesos ejecuci&oacute;n en modo de usuario y ejecuci&oacute;n en modo n&uacute;cleo";
 choices[18][3] = "Son 8, entre ellos el proceso cerrado o nonato que significa que est&aacute; aguardando un suceso y tiene que intercambiarse desde la memoria secundaria";
 answers[18] = choices[18][2];
 units[18] = "53";
 comments[18] = "Id Pregunta: 1589. ";


//  Id pregunta: 1637 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  El software que conecta dos aplicaciones heterog&eacute;neas, para compartir recursos de proceso de datos, se conoce como:";
 choices[19]= new Array();
 choices[19][0] = "Firmware";
 choices[19][1] = "Interfaz de usuario";
 choices[19][2] = "Middleware";
 choices[19][3] = "Everyware";
 answers[19] = choices[19][2];
 units[19] = "50";
 comments[19] = "Id Pregunta: 1637. ";


//  Id pregunta: 1698 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  En relaci&oacute;n a las tarjetas gr&aacute;ficas:";
 choices[20]= new Array();
 choices[20][0] = "La mayor parte ya son para bus PCI-E (PCI Express)";
 choices[20][1] = "Se pueden conectar al bus AGP, entre otros";
 choices[20][2] = "La resoluci&oacute;n m&aacute;s habitual es de 640 x 480";
 choices[20][3] = "Las respuestas a) y b) son correctas";
 answers[20] = choices[20][3];
 units[20] = "46";
 comments[20] = "Id Pregunta: 1698. ";


//  Id pregunta: 1830 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;Qu&eacute; son los Datamarts o supermercados de datos?";
 choices[21]= new Array();
 choices[21][0] = "Proporcionan informaci&oacute;n de c&oacute;mo se ha construido el almac&eacute;n de datos.";
 choices[21][1] = "Son datos muy resumidos para consultas frecuentes.";
 choices[21][2] = "Son lugares de Internet donde por una peque&ntilde;a cuota se puede obtener la  informaci&oacute;n solicitada.";
 choices[21][3] = "Son datos que est&aacute;n disponibles bajo una licencia Creative Commons.";
 answers[21] = choices[21][1];
 units[21] = "68";
 comments[21] = "Id Pregunta: 1830. ";


//  Id pregunta: 1842 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  La directiva 2002/38/CE:";
 choices[22]= new Array();
 choices[22][0] = "Ha regulado el fen&oacute;meno del comercio electr&oacute;nico en lo que se refiere al IVA";
 choices[22][1] = "Est&aacute;  incluida en el denominado paquete Telecom";
 choices[22][2] = "Es relativa a la protecci&oacute;n de datos personales y a la protecci&oacute;n de la intimidad en el sector de las comunicaciones electr&oacute;nicas";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][0];
 units[22] = "70";
 comments[22] = "Id Pregunta: 1842. ";


//  Id pregunta: 2065 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  Dentro de las m&eacute;tricas orientadas al SW no se encuetra";
 choices[23]= new Array();
 choices[23][0] = "M&eacute;tricas de productividad";
 choices[23][1] = "M&eacute;tricas de fiabilidad";
 choices[23][2] = "M&eacute;tricas de rendimiento";
 choices[23][3] = "M&eacute;tricas de Complejidad";
 answers[23] = choices[23][2];
 units[23] = "88";
 comments[23] = "Id Pregunta: 2065. ";


//  Id pregunta: 2078 Año de creación de pregunta: 2004-01-01
 questions[24]= "25)  Las actividades propuestas en METRICA V3 para el proceso de Mantenimiento de sistemas de informaci&oacute;n son:";
 choices[24]= new Array();
 choices[24][0] = "Registro de la petici&oacute;n; An&aacute;lisis de la petici&oacute;n; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n; Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n.";
 choices[24][1] = "Registro de la peticici&oacute;n; Identificaci&oacute;n del tipo y origen del mantenimiento; Construcci&oacute;n, Pruebas e Implantaci&oacute;n";
 choices[24][2] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o; Construcci&oacute;n; Pruebas de regresi&oacute;n; Aceptaci&oacute;n.";
 choices[24][3] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o, Construcci&oacute;n, Implantaci&oacute;n; Aceptaci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2078. Pregunta Junta Andalucia - A";


//  Id pregunta: 2097 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  En la actualidad existen dos est&aacute;ndares importantes sobre diccionario de recursos de la informaci&oacute;n. Entre los organismos que han participado en su elaboraci&oacute;n est&aacute;:";
 choices[25]= new Array();
 choices[25][0] = "IEEE";
 choices[25][1] = "CENELEC ";
 choices[25][2] = "DELFOS";
 choices[25][3] = "IEC";
 answers[25] = choices[25][3];
 units[25] = "96";
 comments[25] = "Id Pregunta: 2097. ";


//  Id pregunta: 2197 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;En cu&aacute;l de los siguientes grupos de m&eacute;tricas del software se debe encuadrar el modelo de An&aacute;lisis de Puntos de Funci&oacute;n?:";
 choices[26]= new Array();
 choices[26][0] = "M&eacute;tricas de complejidad";
 choices[26][1] = "M&eacute;tricas de productividad";
 choices[26][2] = "M&eacute;tricas de calidad";
 choices[26][3] = "M&eacute;tricas de riesgo";
 answers[26] = choices[26][1];
 units[26] = "89";
 comments[26] = "Id Pregunta: 2197. ";


//  Id pregunta: 2228 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  A las herramientas CASE que abarcan las &uacute;ltimas fases del ciclo de vida (dise&ntilde;o detallado y generaci&oacute;n de c&oacute;digo) se las denomina:";
 choices[27]= new Array();
 choices[27][0] = "Superiores (upper CASE).";
 choices[27][1] = "Inferiores (lower CASE).";
 choices[27][2] = "Las 2 anteriores son correctas.";
 choices[27][3] = "Todas son falsas.";
 answers[27] = choices[27][1];
 units[27] = "91";
 comments[27] = "Id Pregunta: 2228. ";


//  Id pregunta: 2273 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  El Diccionario de Datos es utilizado por:";
 choices[28]= new Array();
 choices[28][0] = "El administrador de la base de datos y los programadores";
 choices[28][1] = "Los analistas y los programadores";
 choices[28][2] = "Los usuarios finales de las aplicaciones";
 choices[28][3] = "Los usuarios remotos";
 answers[28] = choices[28][0];
 units[28] = "57,81";
 comments[28] = "Id Pregunta: 2273. ";


//  Id pregunta: 2366 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  Entre los objetivos generales que debe cumplir un plan de sistemas tenemos:";
 choices[29]= new Array();
 choices[29][0] = "Establecimiento de pol&iacute;ticas y objetivos coherentes";
 choices[29][1] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[29][2] = "Las dos anteriores respuestas son correctas";
 choices[29][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[29] = choices[29][2];
 units[29] = "77";
 comments[29] = "Id Pregunta: 2366. ";


//  Id pregunta: 2486 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Se entiende por ciclo de vida:";
 choices[30]= new Array();
 choices[30][0] = "Conjunto de fases (o etapas) por las que pasa el sistema desde que se concibe hasta que se retira del servicio";
 choices[30][1] = "El conjunto de fases de desarrollo";
 choices[30][2] = "Etapas de la ingenieria del software";
 choices[30][3] = "Las etapas de la utilizaci&oacute;n de un sistema";
 answers[30] = choices[30][0];
 units[30] = "76";
 comments[30] = "Id Pregunta: 2486. ";


//  Id pregunta: 2523 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Cu&aacute;les son los m&eacute;todos b&aacute;sicos de reconocimiento de caracteres en OCR?:";
 choices[31]= new Array();
 choices[31][0] = "Comparaci&oacute;n matricial";
 choices[31][1] = "Extracci&oacute;n de caracter&iacute;sticas";
 choices[31][2] = "Reconocimiento de patrones";
 choices[31][3] = "Son v&aacute;lidas todas las respuestas anteriores";
 answers[31] = choices[31][3];
 units[31] = "93";
 comments[31] = "Id Pregunta: 2523. ";


//  Id pregunta: 2586 Año de creación de pregunta: 2003-01-01
 questions[32]= "33)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?:";
 choices[32]= new Array();
 choices[32][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico,";
 choices[32][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico.";
 choices[32][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico: se realiza de forma conjunta.";
 choices[32][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o l&oacute;gico.";
 answers[32] = choices[32][0];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2586. Junta Andaluc&iacute;a";


//  Id pregunta: 2836 Año de creación de pregunta: 2006-01-01
 questions[33]= "34)  El concepto de Mejora Continua en el &aacute;mbito de la Calidad se debe a ";
 choices[33]= new Array();
 choices[33][0] = "Stewart";
 choices[33][1] = "Crosby";
 choices[33][2] = "Fraunhoffer";
 choices[33][3] = "Deming";
 answers[33] = choices[33][3];
 units[33] = "92";
 comments[33] = "Id Pregunta: 2836. ";


//  Id pregunta: 2889 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  En su esquema de numeraci&oacute;n para redes IP, la Administraci&oacute;n ha utilizado:";
 choices[34]= new Array();
 choices[34][0] = "A cada Ministerio se le asigna una red de tipo B con numeraciones consecutivas a partir de 110 ... 129";
 choices[34][1] = "A cada Ministerio se le asigna un rango de direcciones IP , que van desde la 10.1.0.0 para el MAP increment&aacute;ndose el segundo componente para cada Departamento Ministerial importante";
 choices[34][2] = "Ha asignado direcciones IP de cara a la pr&oacute;xima introducci&oacute;n de IPv6 en que la extensi&oacute;n de direcciones aumenta y permitir&aacute; a cada ordenador de la administraci&oacute;n tener una &uacute;nica direcci&oacute;n IP";
 choices[34][3] = "La Administraci&oacute;n no se ha pronunciado al respecto,  lo que ha hecho ha sido estructurar las direcciones de correo electr&oacute;nico, dejando libres a los responsables de cada Deparamento la elecci&oacute;n de sus direcciones";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 2889. ";


//  Id pregunta: 3020 Año de creación de pregunta: 2004-01-01
 questions[35]= "36)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "No existen";
 choices[35][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[35][2] = "Pueden ser considerados como filtros de paquetes";
 choices[35][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[35] = choices[35][3];
 units[35] = "111";
 comments[35] = "Id Pregunta: 3020. TAI 2004";


//  Id pregunta: 3058 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Dentro del objeto ASP Server el m&eacute;todo que detiene la ejecuci&oacute;n de la p&aacute;gina actual y transfiere el control a la p&aacute;gina indicada en &ldquo;url&rdquo;, llevando el entorno del usuario actual a la nueva p&aacute;gina se denomina:";
 choices[36]= new Array();
 choices[36][0] = "Transfer (&ldquo;url&rdquo;)";
 choices[36][1] = "Execute (&ldquo;url&rdquo;)";
 choices[36][2] = "GotoURL (&ldquo;url&rdquo;)";
 choices[36][3] = "GoURL (&ldquo;url&rdquo;)";
 answers[36] = choices[36][1];
 units[36] = "115";
 comments[36] = "Id Pregunta: 3058. ";


//  Id pregunta: 3064 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  En los dispositivos de red se utiliza el 'buffering' para:";
 choices[37]= new Array();
 choices[37][0] = "Almacenar temporalmente los datos recibidos hasta que puedan ser procesados";
 choices[37][1] = "Informar al origen del tr&aacute;fico de que deber&iacute;a usarse control de flujo";
 choices[37][2] = "Emitir el ACK de las tranmisiones que se han recibido";
 choices[37][3] = "Impedir que los dispositivos fuente (emisores) transmitan datos a menos que se les pida expl&iacute;citamente";
 answers[37] = choices[37][0];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3064. ";


//  Id pregunta: 3147 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a las distintas formas de codificaci&oacute;n?:";
 choices[38]= new Array();
 choices[38][0] = "La codificaci&oacute;n aritm&eacute;tica es m&aacute;s eficiente (en bits/s&iacute;mbolo) que la de Huffman";
 choices[38][1] = "La codificaci&oacute;n de Huffman utiliza los c&oacute;digos m&aacute;s largos para los s&iacute;mbolos m&aacute;s improbables";
 choices[38][2] = "La codificaci&oacute;n de Huffman codifica cada s&iacute;mbolo de forma independiente";
 choices[38][3] = "La codificaci&oacute;n de Huffman utiliza c&oacute;digos de longitud uniforme para representar los diferentes s&iacute;mbolos";
 answers[38] = choices[38][3];
 units[38] = "97";
 comments[38] = "Id Pregunta: 3147. ";


//  Id pregunta: 3195 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar puntos de chequeo que permita reiniciar la transmisi&oacute;n a partir del punto m&aacute;s cercano al posible fallo y no desde el principio', corresponde al nivel:";
 choices[39]= new Array();
 choices[39][0] = "Nivel de red";
 choices[39][1] = "Nivel de transporte";
 choices[39][2] = "Nivel de sesi&oacute;n";
 choices[39][3] = "Nivel de presentaci&oacute;n";
 answers[39] = choices[39][2];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3195. ";


//  Id pregunta: 3361 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  De SDH y SONET podemos decir:";
 choices[40]= new Array();
 choices[40][0] = "son en realidad lo mismo pero con diferente denominaci&oacute;n en Norteam&eacute;rica y Europa";
 choices[40][1] = "son distintos en la disposici&oacute;n de los contenedores virtuales pero todas sus tasas de transmisi&oacute;n coinciden";
 choices[40][2] = "son compatibles en conjunto, adaptando las velocidades de diferentes niveles de capacidad";
 choices[40][3] = "son jerarqu&iacute;as de transmisi&oacute;n digital totalmente distintas e incompatibles entre s&iacute;";
 answers[40] = choices[40][2];
 units[40] = "109";
 comments[40] = "Id Pregunta: 3361. ";


//  Id pregunta: 3555 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  En sistemas de informaci&oacute;n y comunicaciones, SOAP es acr&oacute;nimo de:";
 choices[41]= new Array();
 choices[41][0] = "Services Oriented Architecture Protocol";
 choices[41][1] = "Simple Object Access Protocol";
 choices[41][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[41][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[41] = choices[41][3];
 units[41] = "69";
 comments[41] = "Id Pregunta: 3555. ";


//  Id pregunta: 3615 Año de creación de pregunta: 2002-01-01
 questions[42]= "43)  La liberalizaci&oacute;n del sector de telecomunicaciones vino marcada por una serie de directivas comunitarias tendentes hacia un mercado en plena competencia. Marcar la directiva relativa a la competencia en los mercados de servicios de telecomunicaciones:";
 choices[42]= new Array();
 choices[42][0] = "Directiva  CE 2002/58";
 choices[42][1] = "Directiva  CE 2002/22";
 choices[42][2] = "Directiva  CE 2002/77";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][2];
 units[42] = "110";
 comments[42] = "Id Pregunta: 3615. ";


//  Id pregunta: 3670 Año de creación de pregunta: 2002-01-01
 questions[43]= "44)  Una de las funciones de la Gesti&oacute;n de Red es la Funci&oacute;n de Contabilidad Indicar cu&aacute;l de las siguientes tareas no corresponde a esta funci&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Evaluar el grado de utilizaci&oacute;n de la red";
 choices[43][1] = "Establecimiento de prioridades y fijaci&oacute;n de franjas de uso de la red";
 choices[43][2] = "Controlar el uso abusivo de determinados elementos";
 choices[43][3] = "Evaluar el rendimiento y calidad de servicio de la red";
 answers[43] = choices[43][3];
 units[43] = "104";
 comments[43] = "Id Pregunta: 3670. ";


//  Id pregunta: 3712 Año de creación de pregunta: 2002-01-01
 questions[44]= "45)  Los agentes SNMP son:";
 choices[44]= new Array();
 choices[44][0] = "M&oacute;dulos de software que se ejecutan en los dispositivos gestionados y cuya funci&oacute;n es que la informaci&oacute;n acerca del dispositivo est&eacute; disponible para los sistemas de gesti&oacute;n ";
 choices[44][1] = "Ordenadores dedicados a la tarea de preguntar a los dispositvos SNMP por la informaci&oacute;n relevante y catalogarla en una base de datos";
 choices[44][2] = "Oficiales de ISO que realizan peri&oacute;dicamente auditor&iacute;as en compa&ntilde;&iacute;as que tienen grandes redes gestionadas por SNMP";
 choices[44][3] = "Aplicaciones dise&ntilde;adas para monitorizar la actividad de sistemas gestionados SNMP y alertar al usuario en caso de alg&uacute;n problema";
 answers[44] = choices[44][0];
 units[44] = "104";
 comments[44] = "Id Pregunta: 3712. ";


//  Id pregunta: 3818 Año de creación de pregunta: 2002-01-01
 questions[45]= "46)  Se&ntilde;ale entre los siguientes, cu&aacute;l es un par&aacute;metro de calidad en redes RDSI:";
 choices[45]= new Array();
 choices[45][0] = "Grado de servicio";
 choices[45][1] = "Alerting delay";
 choices[45][2] = "Bit error";
 choices[45][3] = "Todos son par&aacute;metros de calidad";
 answers[45] = choices[45][3];
 units[45] = "103";
 comments[45] = "Id Pregunta: 3818. ";


//  Id pregunta: 3830 Año de creación de pregunta: 2002-01-01
 questions[46]= "47)  Si alguien habla de &quot;la arquitectura DNA&quot; se est&aacute; refiriendo a:";
 choices[46]= new Array();
 choices[46][0] = "Un modelo de inteligencia artificial basado en algoritmos gen&eacute;ticos";
 choices[46][1] = "Una determinada arquitectura de red registrada por una compa&ntilde;&iacute;a privada";
 choices[46][2] = "Una determinada arquitectura de red normalizada por ISO";
 choices[46][3] = "Un tipo de procesador RISC";
 answers[46] = choices[46][1];
 units[46] = "101";
 comments[46] = "Id Pregunta: 3830. ";


//  Id pregunta: 3932 Año de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;ntas clases de redes est&aacute;n definidas en Internet?";
 choices[47]= new Array();
 choices[47][0] = "Tres";
 choices[47][1] = "Cuatro";
 choices[47][2] = "Cinco";
 choices[47][3] = "Seis";
 answers[47] = choices[47][1];
 units[47] = "100";
 comments[47] = "Id Pregunta: 3932. Red Troncal, Redes de Proveedores de Tr&aacute;nsito y Acceso Internacional, Redes de Proveedores de Acceso Local, Redes Corporativas";


//  Id pregunta: 3957 Año de creación de pregunta: 2003-01-01
 questions[48]= "49)  La especificaci&oacute;n H.323:";
 choices[48]= new Array();
 choices[48][0] = "Ha sido creada por la ISO, y define un conjunto de protocolos para transmitir voz, video y datos sobre IP";
 choices[48][1] = "Emplea a su vez otras especificaciones, como H.225 y H.245";
 choices[48][2] = "Hace uso del protocolo RTP para establecer las llamadas sobre la red IP";
 choices[48][3] = "Las respuestas b) y c) son correctas";
 answers[48] = choices[48][1];
 units[48] = "107";
 comments[48] = "Id Pregunta: 3957. ";


//  Id pregunta: 3992 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  Se&ntilde;ale la respuesta correcta:";
 choices[49]= new Array();
 choices[49][0] = "IDABC tiene como objetivo la identificaci&oacute;n, promoci&oacute;n y desarrollo de servicios paneuropeos de e-administraci&oacute;n para los ciudadanos, las empresas y las administraciones, as&iacute; como de las infraestructuras y servicios necesarios para el despliegue.";
 choices[49][1] = "El comit&eacute; de gesti&oacute;n del programa se denomina Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE). ";
 choices[49][2] = "Sus antecesores son los programas IDA II (1999-2004) e IDA I (1995-1998)";
 choices[49][3] = "Todas son verdaderas";
 answers[49] = choices[49][3];
 units[49] = "103";
 comments[49] = "Id Pregunta: 3992. ";


//  Id pregunta: 4012 Año de creación de pregunta: 2006-01-01
 questions[50]= "51)  Con respecto a la tecnolog&iacute;a VDSL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[50]= new Array();
 choices[50][0] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 52 Mbit/s en sentido descendente y 6,4 Mbit/s en sentido ascendente.";
 choices[50][1] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 54 Mbit/s en sentido descendente y 8,2 Mbit/s en sentido ascendente.";
 choices[50][2] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 30 Mbit/s.";
 choices[50][3] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 25 Mbit/s.";
 answers[50] = choices[50][0];
 units[50] = "107";
 comments[50] = "Id Pregunta: 4012. ";


//  Id pregunta: 4057 Año de creación de pregunta: 2006-01-01
 questions[51]= "52)  Existen experiencias de uso real de VoIP en Espa&ntilde;a";
 choices[51]= new Array();
 choices[51][0] = "Si";
 choices[51][1] = "No";
 choices[51][2] = "Si, pero solo en las AAPP";
 choices[51][3] = "No, porque a&uacute;n no hay regulaci&oacute;n que lo permita";
 answers[51] = choices[51][0];
 units[51] = "112";
 comments[51] = "Id Pregunta: 4057. ";


//  Id pregunta: 4130 Año de creación de pregunta: 2006-01-01
 questions[52]= "53)  Los elementos XML de tipo y atributo deben tener una identidad &uacute;nica en el &aacute;mbito del";
 choices[52]= new Array();
 choices[52][0] = "servidor o sitio";
 choices[52][1] = "espacio de nombres ";
 choices[52][2] = "nombre de dominio";
 choices[52][3] = "nombre de dominio completamente cualificado (FQDM)";
 answers[52] = choices[52][1];
 units[52] = "69";
 comments[52] = "Id Pregunta: 4130. ";


//  Id pregunta: 4707 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  T&eacute;cnica de cifrado utilizada por los clientes de correo-electr&oacute;nico";
 choices[53]= new Array();
 choices[53][0] = "MD5";
 choices[53][1] = "IDEA";
 choices[53][2] = "Curva El&iacute;ptica";
 choices[53][3] = "S/MIME";
 answers[53] = choices[53][2];
 units[53] = "72";
 comments[53] = "Id Pregunta: 4707. Examen 2006 JCYL";


//  Id pregunta: 4834 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 (Internet Control Message Protocol version 4)?";
 choices[54]= new Array();
 choices[54][0] = "32";
 choices[54][1] = "64";
 choices[54][2] = "128";
 choices[54][3] = "256";
 answers[54] = choices[54][1];
 units[54] = "100";
 comments[54] = "Id Pregunta: 4834. ";


//  Id pregunta: 4938 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  La notaci&oacute;n de un diagrama Entidad-Relaci&oacute;n no permite representar:";
 choices[55]= new Array();
 choices[55][0] = "Jerarqu&iacute;as de tipos de objetos de datos.";
 choices[55][1] = "Asociaci&oacute;n de objetos de datos.";
 choices[55][2] = "Transformaciones de objetos de datos.";
 choices[55][3] = "La relaci&oacute;n entre objetos de datos.";
 answers[55] = choices[55][2];
 units[55] = "80";
 comments[55] = "Id Pregunta: 4938. Examen TIC B 2007";


//  Id pregunta: 5014 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 3.0 el umbral de saciedad m&aacute;ximo para un criterio";
 choices[56]= new Array();
 choices[56][0] = "indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[56][1] = "indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[56][2] = "indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en lapuntuaci&oacute;n obtenida";
 choices[56][3] = "indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio";
 answers[56] = choices[56][2];
 units[56] = "34";
 comments[56] = "Id Pregunta: 5014. Examen TIC A 2007";


//  Id pregunta: 5158 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[57]= new Array();
 choices[57][0] = "IEEE 802.2";
 choices[57][1] = "IEEE 802.3";
 choices[57][2] = "IEEE 802.4";
 choices[57][3] = "IEEE 802.5";
 answers[57] = choices[57][1];
 units[57] = "101";
 comments[57] = "Id Pregunta: 5158. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5184 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  Se&ntilde;ale la respuesta verdadera con respecto a los atributos en el modelo E/R:";
 choices[58]= new Array();
 choices[58][0] = "Cada atributo toma valores de un dominio diferenciado y no compartido";
 choices[58][1] = "Al atributo que identifica un&iacute;vocamente cada una de las ocurrencias de la entidad principal se le denomina atributo fuerte";
 choices[58][2] = "Existen atributos simples, mixtos y compuestos";
 choices[58][3] = "Existen atributos monovalorados y multivalorados";
 answers[58] = choices[58][3];
 units[58] = "80";
 comments[58] = "Id Pregunta: 5184. ";


//  Id pregunta: 5202 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Cu&aacute;l de las siguientes es una caracter&iacute;stica de las Especificaciones que se obtienen al realizar un An&aacute;lisis estructurado:";
 choices[59]= new Array();
 choices[59][0] = " Redundantes";
 choices[59][1] = "Ambiguas";
 choices[59][2] = "Imposibles de mantener";
 choices[59][3] = "Particionadas";
 answers[59] = choices[59][3];
 units[59] = "81";
 comments[59] = "Id Pregunta: 5202. ";


//  Id pregunta: 5287 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  Indique cu&aacute;l de las siguientes tecnolog&iacute;as JAVA puede utilizarse para invocar dentro de una aplicaci&oacute;n a un parser DOM:";
 choices[60]= new Array();
 choices[60][0] = "JAX-RPC";
 choices[60][1] = "SAAJ";
 choices[60][2] = "JAXR";
 choices[60][3] = "JAXP";
 answers[60] = choices[60][3];
 units[60] = "116";
 comments[60] = "Id Pregunta: 5287. ";


//  Id pregunta: 5555 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  La prioridad de un punto de verifiaci&oacute;n de las pautas de accesibilidad al contenido, que permite que un desarrollador pueda satisfacer dicho punto, en otro caso uno o m&aacute;s usuarios encontrar&aacute;n alguna dificultad para acceder a la informaci&oacute;n, &iquest;es Prioridad? ";
 choices[61]= new Array();
 choices[61][0] = "1";
 choices[61][1] = "2";
 choices[61][2] = "3";
 choices[61][3] = "4";
 answers[61] = choices[61][2];
 units[61] = "39";
 comments[61] = "Id Pregunta: 5555. ";


//  Id pregunta: 5662 Año de creación de pregunta: 2009-01-01
 questions[62]= "63)  Seg&uacute;n el Real Decreto 1720/2007, que se entiende por &quot;Fichero no automatizado&quot;";
 choices[62]= new Array();
 choices[62][0] = "Todo conjunto organizado de datos de car&aacute;cter personal, que permita el acceso a los datos con arreglo a criterios determinados, cualquiera que fuere la forma o modalidad de su creaci&oacute;n, almacenamiento, organizaci&oacute;n y acceso. ";
 choices[62][1] = "Todo conjunto de datos de car&aacute;cter personal organizado de forma no automatizada y estructurado conforme a criterios espec&iacute;ficos relativos a personas f&iacute;sicas, que permitan acceder sin esfuerzos desproporcionados a sus datos personales, ya sea aqu&eacute;l centralizado, descentralizado o repartido de forma funcional o geogr&aacute;fica";
 choices[62][2] = "Todo conjunto organizado de datos, que permita el acceso a los datos con arreglo a criterios determinados, cualquiera que fuere la forma o modalidad de su creaci&oacute;n, almacenamiento, organizaci&oacute;n y acceso. ";
 choices[62][3] = "No existe tal definici&oacute;n en el nombrado Real Decreto";
 answers[62] = choices[62][1];
 units[62] = "29";
 comments[62] = "Id Pregunta: 5662. ";


//  Id pregunta: 5689 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  &iquest;Es capaz el DNI electr&oacute;nico de identificar biom&eacute;tricamente al ciudadano?";
 choices[63]= new Array();
 choices[63][0] = "S&iacute;, a trav&eacute;s del iris ocular";
 choices[63][1] = "S&iacute;, a trav&eacute;s de la firma manuscrita";
 choices[63][2] = "No, no dispone de esa capacidad";
 choices[63][3] = "S&iacute;, a trav&eacute;s de la huella dactilar";
 answers[63] = choices[63][3];
 units[63] = "74";
 comments[63] = "Id Pregunta: 5689. ";


//  Id pregunta: 6115 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  Indique cu&aacute;l de las siguientes clasificaciones NO es aplicable a las etiquetas RFID (Radio Frecuency Identification):";
 choices[64]= new Array();
 choices[64][0] = "Activas.";
 choices[64][1] = "Pasivas.";
 choices[64][2] = "Hiperactivas.";
 choices[64][3] = "Semipasivas.";
 answers[64] = choices[64][2];
 units[64] = "74";
 comments[64] = "Id Pregunta: 6115. TIC A 2009";


//  Id pregunta: 6184 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Indique la afirmaci&oacute;n falsa sobre los sistemas de correo electr&oacute;nico SMTP:";
 choices[65]= new Array();
 choices[65][0] = "Es posible establecer DNS blacklist y whitelist en el cliente de correo y/o en el servidor.";
 choices[65][1] = "SMTP permite enviar mensajes codificados seg&uacute;n ASCII de 7 bits y longitud m&aacute;xima de 1000 caracteres.";
 choices[65][2] = "La cabecera MIME-Version debe contener el valor 2.0";
 choices[65][3] = "La cabecera  de un mensaje de correo  SMTP se especifica en la RFC 822.";
 answers[65] = choices[65][2];
 units[65] = "106";
 comments[65] = "Id Pregunta: 6184. ";


//  Id pregunta: 6218 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  En el modelo de estimaci&oacute;n de costes COCOMO se utiliza de base la siguiente funci&oacute;n: 'E = a(Kl)b * m(X)' &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[66]= new Array();
 choices[66][0] = "a y b son variables con valores indefinidos";
 choices[66][1] = "Kl es la cantidad de l&iacute;neas de c&oacute;digo, en millones";
 choices[66][2] = "m(X) es una variable obtenida en una tabla a partir del n&uacute;mero de trabajadores y del conocimiento de las herramientas a utilizar";
 choices[66][3] = "El resultado se da en unidades salario/mes y horas-hombre";
 answers[66] = choices[66][3];
 units[66] = "89";
 comments[66] = "Id Pregunta: 6218. TICB-2009, bloque desarrollo";


//  Id pregunta: 6358 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;A qui&eacute;n corresponde establecer las obligaciones espec&iacute;ficas para los mercados de referencia establecidas en el art&iacute;culo 13 de la Ley 9/2014?";
 choices[67]= new Array();
 choices[67][0] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[67][1] = "Al Gobierno";
 choices[67][2] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[67][3] = "Al Ministerio de Ciencia y Tecnolog&iacute;a";
 answers[67] = choices[67][2];
 units[67] = "110";
 comments[67] = "Id Pregunta: 6358. Art&iacute;culo 13.4 Ley 9/2014";


//  Id pregunta: 6477 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Qu&eacute; componentes incluye la .net framework class library?";
 choices[68]= new Array();
 choices[68][0] = "Common language runtime (CLR) and the .NET framework class library";
 choices[68][1] = "ADO.NET, ASP.NET, Windows Forms, and Windows Presentation Foundation (WPF)";
 choices[68][2] = "ASP.NET applications, Web Forms and Web Services";
 choices[68][3] = "Windows Presentation Foundation (WPF), ASP.NET Portal, Windows Form Portal";
 answers[68] = choices[68][1];
 units[68] = "115";
 comments[68] = "Id Pregunta: 6477. Castilla La Mancha 2009";


//  Id pregunta: 6532 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  El marco general para la mejora de la calidad de la AGE se establece en";
 choices[69]= new Array();
 choices[69][0] = "RD 951/2003";
 choices[69][1] = "RD 952/2003";
 choices[69][2] = "RD 951/2005";
 choices[69][3] = "RD 951/2006";
 answers[69] = choices[69][2];
 units[69] = "92";
 comments[69] = "Id Pregunta: 6532. ";


//  Id pregunta: 6540 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  En el &aacute;mbito de la biometr&iacute;a";
 choices[70]= new Array();
 choices[70][0] = "Un error Tipo I significa que el sistema ha rechazado a un individuo autorizado";
 choices[70][1] = "Un error Tipo I significa que el sistema ha autorizado a un impostor";
 choices[70][2] = "Un error Tipo II significa que el sistema ha rechazado a un individuo autorizado";
 choices[70][3] = "Un error Tipo III significa que el sistema ha rechazado a un individuo autorizado";
 answers[70] = choices[70][0];
 units[70] = "111";
 comments[70] = "Id Pregunta: 6540. ";


//  Id pregunta: 6581 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l es el Reglamento de desarrollo de la LOPD actualmente vigente?";
 choices[71]= new Array();
 choices[71][0] = "RD 994/1999";
 choices[71][1] = "RD 1720/2007";
 choices[71][2] = "A y B son correctas";
 choices[71][3] = "A y B son incorrectas";
 answers[71] = choices[71][1];
 units[71] = "29";
 comments[71] = "Id Pregunta: 6581. ";


//  Id pregunta: 6623 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  ISO 8402 define la calidad del software como:";
 choices[72]= new Array();
 choices[72][0] = "La capacidad de un conjunto de caracter&iacute;sticas intr&iacute;nsecas para satisfacer requisitos";
 choices[72][1] = "Conjunto de propiedades y caracter&iacute;sticas de un producto o servicio, que le confieren aptitud para satisfacer una serie de necesidades expl&iacute;citas o impl&iacute;citas";
 choices[72][2] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que seesperan de todo software desarrollado profesionalmente";
 choices[72][3] = "La norma ISO 8402 no es una norma de calidad";
 answers[72] = choices[72][1];
 units[72] = "87";
 comments[72] = "Id Pregunta: 6623. ";


//  Id pregunta: 7171 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al Almac&eacute;n de Datos (Data Warehouse):";
 choices[73]= new Array();
 choices[73][0] = "La estructura l&oacute;gica est&aacute; compuesta por los niveles centralizado, organizado en torno a temas e integrado.";
 choices[73][1] = "La estructura f&iacute;sica est&aacute; compuesta por los niveles de metadatos, datos detallados actuales y datos detallados hist&oacute;ricos.";
 choices[73][2] = "El almac&eacute;n de datos no es vol&aacute;til, no se pueden modificar datos almacenados, solamente se permite la consulta y la carga de nuevos datos.";
 choices[73][3] = "Entre los criterios m&aacute;s importantes a considerar para elegir el SGBD que gestionar&aacute; el almac&eacute;n, est&aacute; el esfuerzo necesario para determinar el estado de los datos disponibles en los sistemas OLTP de la organizaci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "68";
 comments[73] = "Id Pregunta: 7171. Examen TIC B 2009";


//  Id pregunta: 7334 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Las RFC (Request for Comments) son publicadas por";
 choices[74]= new Array();
 choices[74][0] = "W3C";
 choices[74][1] = "IEEE";
 choices[74][2] = "IETF";
 choices[74][3] = "IEC";
 answers[74] = choices[74][2];
 units[74] = "42";
 comments[74] = "Id Pregunta: 7334. ";


//  Id pregunta: 7770 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[75]= new Array();
 choices[75][0] = " Impide la descarga de contenido protegido.";
 choices[75][1] = " Impide la copia de contenido protegido.";
 choices[75][2] = " Garantiza la no modificaci&oacute;n del contenido protegido.";
 choices[75][3] = " Garantiza el proceso de pago entre comprador y vendedor.";
 answers[75] = choices[75][0];
 units[75] = "37";
 comments[75] = "Id Pregunta: 7770. Map 2005";


//  Id pregunta: 7816 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)   En un sistema de ficheros Unix que tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, que adem&aacute;s utiliza direcciones de bloque de 4 bytes, para representar un fichero de 2 MB:";
 choices[76]= new Array();
 choices[76][0] = " Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[76][1] = " Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[76][2] = " Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[76][3] = " Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[76] = choices[76][2];
 units[76] = "NULL";
 comments[76] = "Id Pregunta: 7816. Map 2005";


//  Id pregunta: 7833 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)   El est&aacute;ndar de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es:";
 choices[77]= new Array();
 choices[77][0] = " X.600.";
 choices[77][1] = " Open LDAP.";
 choices[77][2] = " X.400.";
 choices[77][3] = " X.500.";
 answers[77] = choices[77][3];
 units[77] = "NULL";
 comments[77] = "Id Pregunta: 7833. Map 2005";


//  Id pregunta: 7910 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)   De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &laquo;Gesti&oacute;n de la Tecnolog&iacute;a&raquo; pertenece al criterio:";
 choices[78]= new Array();
 choices[78][0] = " Alianzas y recursos.";
 choices[78][1] = " Pol&iacute;tica y estrategia.";
 choices[78][2] = " Procesos.";
 choices[78][3] = " Resultados clave.";
 answers[78] = choices[78][0];
 units[78] = "NULL";
 comments[78] = "Id Pregunta: 7910. Map 2006";


//  Id pregunta: 7955 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)   El protocolo de escritura anticipada en el fichero diario (fichero log) de una base de datos establece que:";
 choices[79]= new Array();
 choices[79][0] = " La escritura de un elemento de datos deber&iacute;a hacerse antes de cualquier operaci&oacute;n en el diario.";
 choices[79][1] = " El registro del diario de una operaci&oacute;n deber&iacute;a escribirse antes de que se escriban los datos reales.";
 choices[79][2] = " Todos los registros del diario deber&iacute;an escribirse antes de que comenzara a ejecutarse una nueva transacci&oacute;n.";
 choices[79][3] = " El diario nunca necesita escribirse en disco.";
 answers[79] = choices[79][1];
 units[79] = "NULL";
 comments[79] = "Id Pregunta: 7955. Map 2006";


//  Id pregunta: 8137 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)   &iquest;Qu&eacute; es WebDAV?";
 choices[80]= new Array();
 choices[80][0] = " Sistema seguro de compartici&oacute;n de carpetas sobre HTTP.";
 choices[80][1] = " Sistema web de creaci&oacute;n de formularios.";
 choices[80][2] = " Sistema web seguro de compartici&oacute;n de procesamiento.";
 choices[80][3] = " Sistema web de mensajer&iacute;a y alertas.";
 answers[80] = choices[80][0];
 units[80] = "NULL";
 comments[80] = "Id Pregunta: 8137. Map 2008";


//  Id pregunta: 8188 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Los &quot;mashups&quot; en Web 2.0:";
 choices[81]= new Array();
 choices[81][0] = "Son un tipo de wikis con interfaces AJAX.";
 choices[81][1] = "Son una aplicaci&oacute;n de la teor&iacute;a &quot;Long Tail&quot;.";
 choices[81][2] = "Son aplicaciones web que combinan datos o servicios de otras fuentes.";
 choices[81][3] = "Siempre se implementan con t&eacute;cnicas de &quot;screen scraping&quot;.";
 answers[81] = choices[81][2];
 units[81] = "120";
 comments[81] = "Id Pregunta: 8188. Examen TIC A1 2010";


//  Id pregunta: 8305 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[82]= new Array();
 choices[82][0] = "XAdES-X.";
 choices[82][1] = "XAdES-X-L.";
 choices[82][2] = "XAdES-C. ";
 choices[82][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[82] = choices[82][1];
 units[82] = "72, 73, 74";
 comments[82] = "Id Pregunta: 8305. Examen TIC A2 2010";


//  Id pregunta: 8427 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no es un tipo de SSO (Single Sign-On)?";
 choices[83]= new Array();
 choices[83][0] = "Enterprise SSO";
 choices[83][1] = "Web SSO";
 choices[83][2] = "Kerberos";
 choices[83][3] = "Novell";
 answers[83] = choices[83][3];
 units[83] = "118";
 comments[83] = "Id Pregunta: 8427. ";


//  Id pregunta: 8503 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  En IPv4 la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar, &iquest;Cu&aacute;l es &eacute;l rango de valores que puede tomar este campo? ";
 choices[84]= new Array();
 choices[84][0] = "0-15";
 choices[84][1] = "0-255";
 choices[84][2] = "0-5";
 choices[84][3] = "0-127";
 answers[84] = choices[84][1];
 units[84] = "100";
 comments[84] = "Id Pregunta: 8503. Examen TIC A2 2010";


//  Id pregunta: 8596 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Si queremos almacenar unas tablas de la base de datos y sus relaciones en memoria para operar con ellas, &iquest;cual de los siguientes objetos de .NET usar&iacute;a?";
 choices[85]= new Array();
 choices[85][0] = "DataTableRelation";
 choices[85][1] = "DataView";
 choices[85][2] = "DataTable";
 choices[85][3] = "DataSet";
 answers[85] = choices[85][3];
 units[85] = "115";
 comments[85] = "Id Pregunta: 8596. Examen TIC A2 2010 interna";


//  Id pregunta: 8650 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Qu&eacute; perfil es el encargado de la tarea de M&eacute;trica v3 &quot;Definici&oacute;n del Esquema de Formaci&oacute;n&quot;?";
 choices[86]= new Array();
 choices[86][0] = "Analista.";
 choices[86][1] = "Consultor.";
 choices[86][2] = "Analista-programador.";
 choices[86][3] = "Programador.";
 answers[86] = choices[86][0];
 units[86] = "86";
 comments[86] = "Id Pregunta: 8650. Examen TIC A2 2010 interna";


//  Id pregunta: 8812 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Las extensiones del Data Mining son:";
 choices[87]= new Array();
 choices[87][0] = "Web Mining y Text Mining.";
 choices[87][1] = "Web Mining, Text Mining e Hipertext Mining.";
 choices[87][2] = "Text Mining e Hipertext Mining.";
 choices[87][3] = "Web Mining e Hipertext Mining.";
 answers[87] = choices[87][0];
 units[87] = "68";
 comments[87] = "Id Pregunta: 8812. Examen UPM A2 2011";


//  Id pregunta: 8940 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[88]= new Array();
 choices[88][0] = "El &oacute;rgano titular de la sede";
 choices[88][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[88][2] = "Los dos anteriores";
 choices[88][3] = "Ninguno de los anteriores";
 answers[88] = choices[88][3];
 units[88] = "43";
 comments[88] = "Id Pregunta: 8940. ";


//  Id pregunta: 9175 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA respecto a la Ley 34/2002:";
 choices[89]= new Array();
 choices[89][0] = "Los operadores de redes y servicios de comunicaciones electr&oacute;nicas, los proveedores de acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un per&iacute;odo m&aacute;ximo de doce meses.";
 choices[89][1] = "Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en el lugar en que el prestador de servicios tenga establecido su domicilio fiscal.";
 choices[89][2] = "El Real Decreto-ley 13/2012 traspone al ordenamiento jur&iacute;dico espa&ntilde;ol la Directiva 2009/136/CE que modifica la anterior Directiva 2002/58/CE.";
 choices[89][3] = "Las comunicaciones comerciales y las ofertas promocionales se regir&aacute;n en todos sus t&eacute;rminos por la Ley 34/2002";
 answers[89] = choices[89][2];
 units[89] = "70";
 comments[89] = "Id Pregunta: 9175. ";


//  Id pregunta: 9252 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es la relaci&oacute;n entre trabajos, procesos, hilos y fibras en Windows?";
 choices[90]= new Array();
 choices[90][0] = "Los trabajos contienen procesos.";
 choices[90][1] = "Los procesos contienen hilos.";
 choices[90][2] = "Los hilos contienen fibras.";
 choices[90][3] = "Todas son correctas.";
 answers[90] = choices[90][3];
 units[90] = "56";
 comments[90] = "Id Pregunta: 9252. ";


//  Id pregunta: 9254 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  &iquest;Qu&eacute; es VAD?";
 choices[91]= new Array();
 choices[91][0] = "Virtual Address Descriptors";
 choices[91][1] = "Virtual Allocator Devices";
 choices[91][2] = "Descriptor de direcciones asignadas.";
 choices[91][3] = "No existe.";
 answers[91] = choices[91][0];
 units[91] = "56";
 comments[91] = "Id Pregunta: 9254. ";


//  Id pregunta: 9462 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes diagramas contempla UML 2.0?";
 choices[92]= new Array();
 choices[92][0] = "De actividad, DFD, de casos de uso, de secuencia, de comunicaci&oacute;n.";
 choices[92][1] = "De casos de uso, de actividad, de secuencia, de comunicaci&oacute;n, de clases.";
 choices[92][2] = "De casos de uso, entidad-relaci&oacute;n, de secuencia, de clases, de comunicaci&oacute;n.";
 choices[92][3] = "De clases, de herencia compuesta, de secuencia, de comunicaci&oacute;n, de clases.";
 answers[92] = choices[92][1];
 units[92] = "84";
 comments[92] = "Id Pregunta: 9462. ";


//  Id pregunta: 9494 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  &iquest;Cu&aacute;les de los siguientes no es un lenguaje de scripting?";
 choices[93]= new Array();
 choices[93][0] = "Javascript";
 choices[93][1] = "JEScript";
 choices[93][2] = "PerlScript";
 choices[93][3] = "VBScript";
 answers[93] = choices[93][1];
 units[93] = "114";
 comments[93] = "Id Pregunta: 9494. ";


//  Id pregunta: 9504 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  En el &aacute;mbito de los formatos de im&aacute;genes est&aacute;ticas, indique cual de las siguientes es la afirmaci&oacute;n correcta:";
 choices[94]= new Array();
 choices[94][0] = "GIF y PNG comprimen sin p&eacute;rdidas mientras que JPEG comprime con p&eacute;rdidas";
 choices[94][1] = "GIF y JPEG comprimen sin p&eacute;rdidas mientras que PNG comprime con p&eacute;rdidas";
 choices[94][2] = "JPEG y PNG comprimen sin p&eacute;rdidas mientras que GIF comprime con p&eacute;rdidas";
 choices[94][3] = "Todas las anteriores son falsas";
 answers[94] = choices[94][0];
 units[94] = "114";
 comments[94] = "Id Pregunta: 9504. ";


//  Id pregunta: 10133 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  La operaci&oacute;n TRAP de SNMP permite:";
 choices[95]= new Array();
 choices[95][0] = "Solicitar informaci&oacute;n desde el gestor";
 choices[95][1] = "Actualizar informaci&oacute;n desde el gestor al agente";
 choices[95][2] = "Enviar informaci&oacute;n desde el agente al gestor sin que la solicite";
 choices[95][3] = "Enviar informaci&oacute;n de un agente a otro";
 answers[95] = choices[95][2];
 units[95] = "104";
 comments[95] = "Id Pregunta: 10133. ";


//  Id pregunta: 10302 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En IPv6 (RFC 2460), &iquest;cu&aacute;nto ocupa el campo &quot;tipo de enrutamiento&quot;?";
 choices[96]= new Array();
 choices[96][0] = "15 bits.";
 choices[96][1] = "8 bits.";
 choices[96][2] = "10 bits.";
 choices[96][3] = "3 bits.";
 answers[96] = choices[96][1];
 units[96] = "100";
 comments[96] = "Id Pregunta: 10302. TIC A2, libre, examen 2013";


//  Id pregunta: 10430 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Indique cu&aacute;l de los siguientes es un organismo europeo de normalizaci&oacute;n. ";
 choices[97]= new Array();
 choices[97][0] = "CENELEC";
 choices[97][1] = "IEC";
 choices[97][2] = "ISO";
 choices[97][3] = "IEEE";
 answers[97] = choices[97][0];
 units[97] = "42";
 comments[97] = "Id Pregunta: 10430. Examen TIC A1 2013";


//  Id pregunta: 10475 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Si usamos el m&eacute;todo de comprobaci&oacute;n de la validez de un certificado mediante CRL en vez de OCSP puede ocurrir que (marcar la correcta respecto a CRL que no ocurrir&iacute;a usando OCSP)&hellip;";
 choices[98]= new Array();
 choices[98][0] = "El certificado que estamos validando est&eacute; malformado";
 choices[98][1] = "La autoridad de certificaci&oacute;n que emiti&oacute; el certificado sea incorrecta";
 choices[98][2] = "El certificado haya sido revocado desde la anterior emisi&oacute;n de CRL pero la consulta lo d&eacute; por v&aacute;lido";
 choices[98][3] = "El certificado haya expirado pero no se pueda verificar  la fecha de fin de validez y la comprobaci&oacute;n lo d&eacute; por v&aacute;lido cuando est&aacute; expirado.";
 answers[98] = choices[98][2];
 units[98] = "73";
 comments[98] = "Id Pregunta: 10475. ";


//  Id pregunta: 10500 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Cual de las siguientes afirmaciones es correcta con respecto al protocolo CAS, en el &aacute;mbito de los sitemas Single-Sign-On";
 choices[99]= new Array();
 choices[99][0] = "Fue concebido en la universidad de Oxford";
 choices[99][1] = "Es un protocolo SSO para todo tipo de aplicaciones, tanto web, como de escritorio.";
 choices[99][2] = "No existe el protocolo CAS, en ese &aacute;mbito";
 choices[99][3] = "CAS son las siglas de Central Authentication Service";
 answers[99] = choices[99][3];
 units[99] = "118";
 comments[99] = "Id Pregunta: 10500. ";


