/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 222 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  En la planificaci&oacute;n de un proyecto no debemos realizar las siguientes tareas:";
 choices[0]= new Array();
 choices[0][0] = "Definici&oacute;n de los requerimientos";
 choices[0][1] = "Selecci&oacute;n de una metodolog&iacute;a de gesti&oacute;n de proyecto";
 choices[0][2] = "Reclutamiento de personal y asignaci&oacute;n de tareas";
 choices[0][3] = "An&aacute;lisis de riesgos y revisi&oacute;n inicial de seguridad";
 answers[0] = choices[0][2];
 units[0] = "77";
 comments[0] = "Id Pregunta: 222. ";


//  Id pregunta: 580 Año de creación de pregunta: 2006-01-01
 questions[1]= "2)  Desde el punto de vista funcional la organizaci&oacute;n reticular se caracteriza por";
 choices[1]= new Array();
 choices[1][0] = "prescindir casitotalmente de los formalismos.";
 choices[1][1] = "Lascomunicaciones son de todos con todos, sobre todo por niveles.";
 choices[1][2] = "Las comunicaciones suelen estar muy formalizadas y documentadas deacuerdo a normas estrictas.";
 choices[1][3] = "La mayor&iacute;a de las comunicaciones, por no decir todas, se producen de jefe a subordinados";
 answers[1] = choices[1][1];
 units[1] = "26";
 comments[1] = "Id Pregunta: 580. ";


//  Id pregunta: 583 Año de creación de pregunta: 2006-01-01
 questions[2]= "3)  Cual de las siguientes funciones corresponde al &aacute;rea de Sistemas Operativos, Software Base y Sistemas Corporativos";
 choices[2]= new Array();
 choices[2][0] = "Control y monitorizaci&oacute;n de la plataforma";
 choices[2][1] = "Optimizaci&oacute;n de la operativa diaria";
 choices[2][2] = "Salvaguarda de datos.";
 choices[2][3] = "Todas ellas";
 answers[2] = choices[2][3];
 units[2] = "26";
 comments[2] = "Id Pregunta: 583. ";


//  Id pregunta: 882 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es el sistema operativo propio de un IBM AS/400?:";
 choices[3]= new Array();
 choices[3][0] = "OS/400";
 choices[3][1] = "Unix";
 choices[3][2] = "AIX";
 choices[3][3] = "MVS";
 answers[3] = choices[3][0];
 units[3] = "49";
 comments[3] = "Id Pregunta: 882. ";


//  Id pregunta: 917 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; es Apache?:";
 choices[4]= new Array();
 choices[4][0] = "Una versi&oacute;n del sistema operativo Linux";
 choices[4][1] = "Un servidor web propiedad de Microsoft";
 choices[4][2] = "Una autoridad de certificaci&oacute;n ampliamente utilizada en Espa&ntilde;a";
 choices[4][3] = "Un servidor web del tipo &quot;software libre&quot;";
 answers[4] = choices[4][3];
 units[4] = "62";
 comments[4] = "Id Pregunta: 917. ";


//  Id pregunta: 1464 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  La compresi&oacute;n con p&eacute;rdidas no ser&iacute;a adecuada para:";
 choices[5]= new Array();
 choices[5][0] = "Un ejecutable";
 choices[5][1] = "Texto ASCII";
 choices[5][2] = "Un facs&iacute;mil";
 choices[5][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[5] = choices[5][3];
 units[5] = "93";
 comments[5] = "Id Pregunta: 1464. ";


//  Id pregunta: 1483 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Un monitor de 20 pulgadas efectivas y de 1600 x 1200 puntos con 256 tonos de grises produce una resoluci&oacute;n de:";
 choices[6]= new Array();
 choices[6][0] = "300 dpi";
 choices[6][1] = "30 dpi";
 choices[6][2] = "100 dpi";
 choices[6][3] = "50 dpi";
 answers[6] = choices[6][2];
 units[6] = "47";
 comments[6] = "Id Pregunta: 1483. ";


//  Id pregunta: 1570 Año de creación de pregunta: 2013-01-01
 questions[7]= "8)  &iquest;Cu&aacute;ntos dispositivos se pueden conectar simult&aacute;neamente a un puerto USB versi&oacute;n 3?:";
 choices[7]= new Array();
 choices[7][0] = "63.";
 choices[7][1] = "127.";
 choices[7][2] = "256.";
 choices[7][3] = " 1024.";
 answers[7] = choices[7][1];
 units[7] = "47";
 comments[7] = "Id Pregunta: 1570. Similar Junta Andaluc&iacute;a";


//  Id pregunta: 1571 Año de creación de pregunta: 2003-01-01
 questions[8]= "9)  &iquest;Cu&aacute;ntos Gigabytes tiene un Terabyte?";
 choices[8]= new Array();
 choices[8][0] = "4";
 choices[8][1] = "256";
 choices[8][2] = "512";
 choices[8][3] = "1024";
 answers[8] = choices[8][3];
 units[8] = "48";
 comments[8] = "Id Pregunta: 1571. ";


//  Id pregunta: 1782 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[9]= new Array();
 choices[9][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[9][1] = "Hoja de c&aacute;lculo para KDE";
 choices[9][2] = "Sistema gestor de redes empresariales extendidas";
 choices[9][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[9] = choices[9][3];
 units[9] = "61,62";
 comments[9] = "Id Pregunta: 1782. ";


//  Id pregunta: 1924 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  Respecto a los servicios de Directorio Electr&oacute;nico, la norma X-500 de la UIT-T define cuatro tipos de clases de objeto de acuerdo a su funcionalidad:";
 choices[10]= new Array();
 choices[10][0] = "Auxiliar, Estructural, Simplificada, Alias";
 choices[10][1] = "Estructural, Simplificada, Auxiliar, Alias";
 choices[10][2] = "Abstracta, Esquem&aacute;tica, Estructural, Alias";
 choices[10][3] = "Abstracta, Estructural, Auxiliar, Alias";
 answers[10] = choices[10][3];
 units[10] = "73";
 comments[10] = "Id Pregunta: 1924. ";


//  Id pregunta: 2058 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  En METRICA V3 y otras metodolog&iacute;as de desarrollo, &iquest;qu&eacute; se entiende por Gesti&oacute;n de la Configuraci&oacute;n?";
 choices[11]= new Array();
 choices[11][0] = "La planificaci&oacute;n, seguimiento y control de los recursos humanos y materiales que intervienen en el desarrollo del Sistema de Informaci&oacute;n.";
 choices[11][1] = "La administraci&oacute;n de los recursos f&iacute;sicos que soportan la infraestructura de construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[11][2] = "El mantenimiento de la integridad de los productos y objetos obenidos durante el desarrollo de los sistemas de informaci&oacute;n, controlando las versiones y los cambios de estos.";
 choices[11][3] = "El marco com&uacute;n de medidas orientadas al aseguramiento de la calidad aplicable al Proyecto";
 answers[11] = choices[11][2];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2058. Pregunta Junta Andalucia - A";


//  Id pregunta: 2083 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Sobre la naturaleza del software, entre las caracter&iacute;sticas que lo determinan y lo diferencian tenemos:";
 choices[12]= new Array();
 choices[12][0] = "Es de existencia inmaterial";
 choices[12][1] = "Es invisible, se manifiesta a trav&eacute;s de Hardware y tiene un proceso de desarrollo dif&iacute;cil de controlar";
 choices[12][2] = "Es una t&eacute;cnica muy madura, en la que existen datos hist&oacute;ricos importantes";
 choices[12][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son ciertas";
 answers[12] = choices[12][3];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2083. ";


//  Id pregunta: 2121 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Dise&ntilde;o del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[13]= new Array();
 choices[13][0] = "Verificaci&oacute;n y aceptaci&oacute;n de la arquitectura del sistema";
 choices[13][1] = "Especificaci&oacute;n t&eacute;cnica del plan de pruebas";
 choices[13][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[13][3] = "Todas son falsas";
 answers[13] = choices[13][2];
 units[13] = "86";
 comments[13] = "Id Pregunta: 2121. ";


//  Id pregunta: 2164 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indicar la respuesta verdadera respecto a EFQM:";
 choices[14]= new Array();
 choices[14][0] = "El Modelo Europeo de Calidad se desarroll&oacute; en 1991 bajo la iniciativa de la European Foundation for QualityManagement (EFQM), formada en 1988 por un grupo de catorce importantes empresas europeas. En la actualidad la componen m&aacute;s de 400 miembros";
 choices[14][1] = "El modelo identific&oacute; una serie de elementos que ser&aacute;n la base para la Gesti&oacute;n de Calidad Total (TQM) dentro de las organizaciones y que se pueden agrupar en dos grandes bloques que podemos denominar: el C&oacute;mo y el Qu&eacute; o tambi&eacute;n los Agentes y los Resultados";
 choices[14][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[14][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[14] = choices[14][3];
 units[14] = "92";
 comments[14] = "Id Pregunta: 2164. ";


//  Id pregunta: 2178 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  La diferencia entre t&eacute;cnicas y pr&aacute;cticas en METRICA 3 es:";
 choices[15]= new Array();
 choices[15][0] = "Las pr&aacute;cticas se apoyan en est&aacute;ndares, mientras que las t&eacute;cnicas no";
 choices[15][1] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en est&aacute;ndares, mientras que las pr&aacute;cticas no precisan cumplir criterios establecidos";
 choices[15][2] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en la experiencia, mientras que las pr&aacute;cticas pueden ser propias";
 choices[15][3] = "Tanto las t&eacute;cnicas como las pr&aacute;cticas son heur&iacute;sticas y no son esclusivas de METRICA 3";
 answers[15] = choices[15][1];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2178. ";


//  Id pregunta: 2366 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Entre los objetivos generales que debe cumplir un plan de sistemas tenemos:";
 choices[16]= new Array();
 choices[16][0] = "Establecimiento de pol&iacute;ticas y objetivos coherentes";
 choices[16][1] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[16][2] = "Las dos anteriores respuestas son correctas";
 choices[16][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[16] = choices[16][2];
 units[16] = "77";
 comments[16] = "Id Pregunta: 2366. ";


//  Id pregunta: 2492 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  Se&ntilde;alar la definici&oacute;n falsa sobre las m&eacute;tricas de calidad del software:";
 choices[17]= new Array();
 choices[17][0] = "Las m&eacute;tricas de productividad se centran fundamentalmente en el coste del proceso de la ingenier&iacute;a del software";
 choices[17][1] = "Las m&eacute;tricas de fiabilidad tratan de evaluar si el software producido se ajusta a los requerimientos del usuario";
 choices[17][2] = "Las m&eacute;tricas de los factores de calidad basan su evaluaci&oacute;n en la medida de una relaci&oacute;n de factores denominados de calidad del software";
 choices[17][3] = "La m&eacute;tricas de complejidad se orientan esencialmente a evaluar la facilidad de mantenimiento del software";
 answers[17] = choices[17][0];
 units[17] = "88";
 comments[17] = "Id Pregunta: 2492. ";


//  Id pregunta: 2513 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Uno de los efectos de la falta de calidad en el desarrollo de software es la insatisfacci&oacute;n de los usuarios. &iquest;Cu&aacute;l es una de las principales causas de esta insatisfacci&oacute;n?:";
 choices[18]= new Array();
 choices[18][0] = "El dimensionamiento del hardware";
 choices[18][1] = "Las necesidades funcionales solicitadas y no contempladas por el software para &eacute;l desarrollado";
 choices[18][2] = "Las dificultades de adaptaci&oacute;n al nuevo trabajo";
 choices[18][3] = "Los usuarios no suelen estar insatisfechos nunca";
 answers[18] = choices[18][1];
 units[18] = "92";
 comments[18] = "Id Pregunta: 2513. ";


//  Id pregunta: 2599 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de informaci&oacute;n (IAS)?:";
 choices[19]= new Array();
 choices[19][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[19][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[19][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n.";
 choices[19][3] = " Paso a Producci&oacute;n.";
 answers[19] = choices[19][1];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2599. Junta Andaluc&iacute;a";


//  Id pregunta: 2623 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l no pertenece al an&aacute;lisis DAFO?";
 choices[20]= new Array();
 choices[20][0] = "debilidades";
 choices[20][1] = "Amenazas";
 choices[20][2] = "Flexibilidad";
 choices[20][3] = "Oportunidades";
 answers[20] = choices[20][2];
 units[20] = "77";
 comments[20] = "Id Pregunta: 2623. ";


//  Id pregunta: 2653 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  La versi&oacute;n cocomo II guarda alg&uacute;n tipo de compatibilidad con la versi&oacute;n anterior";
 choices[21]= new Array();
 choices[21][0] = "No, es radicalmente diferente pues las t&eacute;cnicas de desarrollo SW han cambiado drasticamente desde la primera versi&oacute;n";
 choices[21][1] = "S&iacute; se ha guardado la compatibilidad con la versi&oacute;n anterior recogiendo los cambios actuales en desarrollo SW, por ejemplo la reutilizaci&oacute;n y el desarrollo con componentes";
 choices[21][2] = "S&iacute;, y lo &uacute;nico diferentes es la inclusi&oacute;n de nuevas variables explicativas en el modelo intermedio para reflejar los cambios en el desarrollo SW actual";
 choices[21][3] = "No existe la versi&oacute;n II de cocomo";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2653. ";


//  Id pregunta: 2690 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;Cu&aacute;les son los criterios agentes en el modelo de calidad EFQM de excelencia?";
 choices[22]= new Array();
 choices[22][0] = "Liderazgo, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[22][1] = "Liderazgo, personal, pol&iacute;tica y estrategia, innovaci&oacute;n y apredizaje, procesos";
 choices[22][2] = "Rendimiento, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][0];
 units[22] = "87,88,92";
 comments[22] = "Id Pregunta: 2690. ";


//  Id pregunta: 2725 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Una Planificaci&oacute;n Estrat&eacute;gica se caracteriza por:";
 choices[23]= new Array();
 choices[23][0] = "Fijar los objetivos generales de la organizaci&oacute;n.";
 choices[23][1] = "Llevarse a cabo por los altos directivos de la organizaci&oacute;n y por los responsables de los escalonesintermedios.";
 choices[23][2] = "Definir las pol&iacute;ticas y estrategias de la organizaci&oacute;n a corto plazo para la consecuci&oacute;n de losobjetivos concretos que se hayan fijado.";
 choices[23][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[23] = choices[23][0];
 units[23] = "77";
 comments[23] = "Id Pregunta: 2725. ";


//  Id pregunta: 2726 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  De los siguientes aspectos, &iquest;cu&aacute;les no deben considerarse a la hora de efectuar unaPlanificaci&oacute;n Estrat&eacute;gica? :";
 choices[24]= new Array();
 choices[24][0] = "La misi&oacute;n del negocio.";
 choices[24][1] = "La situaci&oacute;n de los competidores.";
 choices[24][2] = "Los hitos o puntos clave en el calendario de actuaci&oacute;n.";
 choices[24][3] = "Deben considerarse todos los aspectos anteriores.";
 answers[24] = choices[24][3];
 units[24] = "77";
 comments[24] = "Id Pregunta: 2726. ";


//  Id pregunta: 2783 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  En M&Eacute;TRICA 3, la definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales se lleva a cabo en:";
 choices[25]= new Array();
 choices[25][0] = "La Planificaci&oacute;n de Sistemas.";
 choices[25][1] = "La Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[25][2] = "El Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[25][3] = "La Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 answers[25] = choices[25][1];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2783. ";


//  Id pregunta: 2795 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  Qu&eacute; actividades componen la Interfaz de Gesti&oacute;n de proyectos en M&eacute;trica v3";
 choices[26]= new Array();
 choices[26][0] = "Inicio del proyecto, seguimiento y control, Finalizaci&oacute;n y registro del proyecto";
 choices[26][1] = "Planificaci&oacute;n de la calidad, Seguimiento y control, Finalizaci&oacute;n del proyecto";
 choices[26][2] = "Inicio del proyecto, seguimiento y supervisi&oacute;n, cierre del proyecto";
 choices[26][3] = "Inicio del proyecto, seguimiento y control y Finalizaci&oacute;n del proyecto";
 answers[26] = choices[26][3];
 units[26] = "86";
 comments[26] = "Id Pregunta: 2795. ";


//  Id pregunta: 2838 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  ISO 9004-2 se corresponde con";
 choices[27]= new Array();
 choices[27][0] = "Gesti&oacute;n de la calidad y elementos del sistema de calidad. Reglas generales";
 choices[27][1] = "Gu&iacute;a para los servicios";
 choices[27][2] = "No existe ISO 9004-2, sino ISO 9004-2000";
 choices[27][3] = "Gu&iacute;a para la aplicaci&oacute;n de ISO 9001 para el desarrollo, suministro y mantenimiento del software";
 answers[27] = choices[27][1];
 units[27] = "92";
 comments[27] = "Id Pregunta: 2838. ";


//  Id pregunta: 2981 Año de creación de pregunta: 2004-01-01
 questions[28]= "29)  El protocolo ARP se basa en la creaci&oacute;n de?";
 choices[28]= new Array();
 choices[28][0] = "Tablas din&aacute;micas";
 choices[28][1] = "Tablas est&aacute;ticas";
 choices[28][2] = "bloding";
 choices[28][3] = "ninguna de las anteriores";
 answers[28] = choices[28][0];
 units[28] = "100";
 comments[28] = "Id Pregunta: 2981. Examen Julio 2003";


//  Id pregunta: 3020 Año de creación de pregunta: 2004-01-01
 questions[29]= "30)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "No existen";
 choices[29][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[29][2] = "Pueden ser considerados como filtros de paquetes";
 choices[29][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[29] = choices[29][3];
 units[29] = "111";
 comments[29] = "Id Pregunta: 3020. TAI 2004";


//  Id pregunta: 3088 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Se dice que una l&iacute;nea es 'half duplex' cuando:";
 choices[30]= new Array();
 choices[30][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir simult&aacute;neamente sin restricciones";
 choices[30][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 choices[30][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[30][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir de forma ininterrumpida independientemente de la actividad del otro terminal";
 answers[30] = choices[30][2];
 units[30] = "99";
 comments[30] = "Id Pregunta: 3088. ";


//  Id pregunta: 3124 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;C&oacute;mo se denominan los 2 modos de utilizaci&oacute;n de IPSec?";
 choices[31]= new Array();
 choices[31][0] = "balanceado y no balanceado";
 choices[31][1] = "t&uacute;nel y abierto";
 choices[31][2] = "datagrama y transporte";
 choices[31][3] = "transporte y t&uacute;nel";
 answers[31] = choices[31][3];
 units[31] = "111";
 comments[31] = "Id Pregunta: 3124. ";


//  Id pregunta: 3179 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes proposiciones no es correcta en lo relativo a GPRS?:";
 choices[32]= new Array();
 choices[32][0] = "La conmutaci&oacute;n en GRPS se realiza a nivel de paquetes de datos";
 choices[32][1] = "La red GRPS se puede comunicar con redes TCP/IP";
 choices[32][2] = "La tarificaci&oacute;n no tiene recargo de establecimiento de llamada y es por tiempo de conexi&oacute;n";
 choices[32][3] = "El acceso radio es por paquetes de datos";
 answers[32] = choices[32][2];
 units[32] = "108";
 comments[32] = "Id Pregunta: 3179. ";


//  Id pregunta: 3198 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  DVB/DAVIC y DOCSIS son est&aacute;ndares de:";
 choices[33]= new Array();
 choices[33][0] = "tecnolog&iacute;a inal&aacute;mbrica";
 choices[33][1] = "m&oacute;dems de cable";
 choices[33][2] = "tecnolog&iacute;a xDSL";
 choices[33][3] = "grabaci&oacute;n cd CDROMs";
 answers[33] = choices[33][1];
 units[33] = "105";
 comments[33] = "Id Pregunta: 3198. ";


//  Id pregunta: 3466 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  El puerto com&uacute;nmente utilizado para aplicaciones de correo electr&oacute;nico es (SMTP) el:";
 choices[34]= new Array();
 choices[34][0] = "80";
 choices[34][1] = "25";
 choices[34][2] = "53";
 choices[34][3] = "21";
 answers[34] = choices[34][1];
 units[34] = "106";
 comments[34] = "Id Pregunta: 3466. ";


//  Id pregunta: 3615 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  La liberalizaci&oacute;n del sector de telecomunicaciones vino marcada por una serie de directivas comunitarias tendentes hacia un mercado en plena competencia. Marcar la directiva relativa a la competencia en los mercados de servicios de telecomunicaciones:";
 choices[35]= new Array();
 choices[35][0] = "Directiva  CE 2002/58";
 choices[35][1] = "Directiva  CE 2002/22";
 choices[35][2] = "Directiva  CE 2002/77";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][2];
 units[35] = "110";
 comments[35] = "Id Pregunta: 3615. ";


//  Id pregunta: 3705 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Las siglas UTP corresponden a:";
 choices[36]= new Array();
 choices[36][0] = "Cable coaxial fino";
 choices[36][1] = "Cable coaxial grueso";
 choices[36][2] = "Fibra &oacute;ptica sin apantallar";
 choices[36][3] = "Par trenzado sin apantallar";
 answers[36] = choices[36][3];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3705. ";


//  Id pregunta: 3809 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Seg&uacute;n la normativa UN-85, a cuanto asciende la m&aacute;xima potencia (PIRE) que un transmisor puede generar en redes inal&aacute;mbricas de banda 2,4 GHz?:";
 choices[37]= new Array();
 choices[37][0] = "10 mW";
 choices[37][1] = "1W";
 choices[37][2] = "100 mW";
 choices[37][3] = "1 mW";
 answers[37] = choices[37][2];
 units[37] = "99";
 comments[37] = "Id Pregunta: 3809. ";


//  Id pregunta: 3839 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  Sobre los algoritmos Hash o funci&oacute;n resumen:";
 choices[38]= new Array();
 choices[38][0] = "Todos tienen una clave de longitud de 160 bits";
 choices[38][1] = "La longitud de la clave depender&aacute; del algoritmo utilizado";
 choices[38][2] = "Es imposible que la longitud de la clave sea menos de 160";
 choices[38][3] = "Da igual la longitud de clave";
 answers[38] = choices[38][1];
 units[38] = "111";
 comments[38] = "Id Pregunta: 3839. ";


//  Id pregunta: 3880 Año de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Cu&aacute;les de las siguientes tecnolog&iacute;as de acceso al medio se utiliza en UMTS?";
 choices[39]= new Array();
 choices[39][0] = "TDMA ";
 choices[39][1] = "FDMA";
 choices[39][2] = "CDMA";
 choices[39][3] = "Puede usar aualquiera de las tres anteriores";
 answers[39] = choices[39][2];
 units[39] = "108";
 comments[39] = "Id Pregunta: 3880. ";


//  Id pregunta: 3881 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Cu&aacute;les son las capas que componen la arquitectura WAP?";
 choices[40]= new Array();
 choices[40][0] = "Aplicaci&oacute;n, Sesi&oacute;n, Transacciones y Transporte";
 choices[40][1] = "Aplicaci&oacute;n, Sesi&oacute;n,Presentaci&oacute;n, Transporte, y Red";
 choices[40][2] = "Aplicaci&oacute;n, Sesi&oacute;n, Seguridad y Transporte";
 choices[40][3] = "Ninguna de las opciones anteriores es correcta";
 answers[40] = choices[40][3];
 units[40] = "108";
 comments[40] = "Id Pregunta: 3881. ";


//  Id pregunta: 3969 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  Un &quot;proxy&quot; o apoderado de HTTP empleado para la conexi&oacute;n de usuarios de una organizaci&oacute;n a Internet:";
 choices[41]= new Array();
 choices[41][0] = "S&oacute;lo permite controlar qui&eacute;nes pueden acceder y a qu&eacute; servidores";
 choices[41][1] = "Es un elemento de seguridad";
 choices[41][2] = "Esencialmente sirve para mejorar los tiempos de acceso a Internet";
 choices[41][3] = "No es &uacute;til si ya se tiene un filtro de paquetes en el acceso a Internet";
 answers[41] = choices[41][1];
 units[41] = "106";
 comments[41] = "Id Pregunta: 3969. ";


//  Id pregunta: 4004 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  En el est&aacute;ndar de mensajer&iacute;a X400, el protocolo utilizado para la comunicaci&oacute;n entre el agente de transferencia de mensajes (MTA) y el agente de usuario (UA) se denomina:";
 choices[42]= new Array();
 choices[42][0] = "P1";
 choices[42][1] = "P2";
 choices[42][2] = "P3";
 choices[42][3] = "P7";
 answers[42] = choices[42][2];
 units[42] = "106";
 comments[42] = "Id Pregunta: 4004. ";


//  Id pregunta: 4020 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  En relaci&oacute;n a la numeraci&oacute;n del sistema de telefon&iacute;a m&oacute;vil GSM, el n&uacute;mero que identifica a un abonado de una red GSM dentro del plan de numeraci&oacute;n de la red telef&oacute;nica p&uacute;blica conmutada se denomina:";
 choices[43]= new Array();
 choices[43][0] = "MSRN";
 choices[43][1] = "IMEI";
 choices[43][2] = "MSISDN";
 choices[43][3] = "IMSI";
 answers[43] = choices[43][2];
 units[43] = "108";
 comments[43] = "Id Pregunta: 4020. ";


//  Id pregunta: 4024 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[44]= new Array();
 choices[44][0] = "HSCSD, GSM, GPRS, UMTS";
 choices[44][1] = "GSM. HSCSD, UMTS, GPRS";
 choices[44][2] = "GSM, HSCSD, GPRS, UMTS";
 choices[44][3] = "GSM, GPRS, HSCSD, UMTS";
 answers[44] = choices[44][2];
 units[44] = "108";
 comments[44] = "Id Pregunta: 4024. ";


//  Id pregunta: 4056 Año de creación de pregunta: 2004-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as no se puede utilizar actualmente para acceder a internet en Espa&ntilde;a?";
 choices[45]= new Array();
 choices[45][0] = "ADSL";
 choices[45][1] = "Cable";
 choices[45][2] = "Wi-Max";
 choices[45][3] = "Ninguna de las respuestas es correcta";
 answers[45] = choices[45][3];
 units[45] = "112";
 comments[45] = "Id Pregunta: 4056. ";


//  Id pregunta: 4092 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  Que es LAMP";
 choices[46]= new Array();
 choices[46][0] = "Una arquitectura web basada en software libre";
 choices[46][1] = "Una arquitectura web basada en j2ee";
 choices[46][2] = "Una arquitectura web basada en .Net";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = choices[46][0];
 units[46] = "62";
 comments[46] = "Id Pregunta: 4092. ";


//  Id pregunta: 4112 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  Las siglas NNTP corresponden a:";
 choices[47]= new Array();
 choices[47][0] = "Native News Transport Protocol";
 choices[47][1] = "Native Network Transport Protocol";
 choices[47][2] = "Network News Transport Protocol";
 choices[47][3] = "Todas las anteriores son falsas";
 answers[47] = choices[47][2];
 units[47] = "112";
 comments[47] = "Id Pregunta: 4112. ";


//  Id pregunta: 4118 Año de creación de pregunta: 2006-01-01
 questions[48]= "49)  Cuando dividimos la cantidad de trabajo que ejecuta un ordenador entre dos o m&aacute;s hablamos de";
 choices[48]= new Array();
 choices[48][0] = "clusters";
 choices[48][1] = "multicast";
 choices[48][2] = "balanceo de carga";
 choices[48][3] = "peering";
 answers[48] = choices[48][2];
 units[48] = "49";
 comments[48] = "Id Pregunta: 4118. ";


//  Id pregunta: 4165 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  Cuando las tareas de operaci&oacute;n y programaci&oacute;n no est&aacute;n segregadas, el responsable de seguridad debe de proveer controles";
 choices[49]= new Array();
 choices[49][0] = "compensatorios";
 choices[49][1] = "administrativos";
 choices[49][2] = "correctivos";
 choices[49][3] = "de acceso";
 answers[49] = choices[49][0];
 units[49] = "111";
 comments[49] = "Id Pregunta: 4165. ";


//  Id pregunta: 4173 Año de creación de pregunta: 2006-01-01
 questions[50]= "51)  Si quiero autenticar a un usuario";
 choices[50]= new Array();
 choices[50][0] = "Le pido su nombre";
 choices[50][1] = "Le pido su DNI";
 choices[50][2] = "Le pido su nombre y lo compruebo en una lista";
 choices[50][3] = "todas las anteriores";
 answers[50] = choices[50][1];
 units[50] = "111";
 comments[50] = "Id Pregunta: 4173. ";


//  Id pregunta: 4213 Año de creación de pregunta: 2006-01-01
 questions[51]= "52)  En el formato gr&aacute;fico JPEG &iquest;Cu&aacute;l de estas opciones no es verdadera?";
 choices[51]= new Array();
 choices[51][0] = "Permite seleccionar la mayor o menor p&eacute;rdida de calidad en la compresi&oacute;n";
 choices[51][1] = "Usa el mismo algoritmo de compresi&oacute;n que el ZIP";
 choices[51][2] = "Su nombre oficial es ISO/IEC IS 10918";
 choices[51][3] = "La &uacute;ltima versi&oacute;n es JPEG 2000";
 answers[51] = choices[51][1];
 units[51] = "114";
 comments[51] = "Id Pregunta: 4213. ";


//  Id pregunta: 4226 Año de creación de pregunta: 2006-01-01
 questions[52]= "53)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[52]= new Array();
 choices[52][0] = "De 50 a 550 Mhz";
 choices[52][1] = "De 5 a 50 MHz";
 choices[52][2] = "De 550 a 860 MHz";
 choices[52][3] = "De 5 a 860 MHz";
 answers[52] = choices[52][1];
 units[52] = "99";
 comments[52] = "Id Pregunta: 4226. ";


//  Id pregunta: 4261 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de  las siguientes afirmaciones est&aacute; recogida en la LLey 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[53]= new Array();
 choices[53][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia aprobar&aacute; los planes nacionales de numeracion y direccion";
 choices[53][1] = "El Gobierno podr&aacute; imponer  a los operadores, mediante Real Decreto, obligaciones de servicio p&uacute;blico en ciertos supuestos";
 choices[53][2] = "Tendr&aacute;n la consideraci&oacute;n de Autoridades Nacionales de Reglamentacion de Telecomunicaciones &uacute;nicamente el Gobierno y la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[53][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia analizar&aacute; los mercados de referencia al por mayor y al por menor cada tres a&ntilde;os como m&iacute;nimo";
 answers[53] = choices[53][1];
 units[53] = "110";
 comments[53] = "Id Pregunta: 4261. ";


//  Id pregunta: 4493 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  La conexi&oacute;n de una red privada a Internet por medio de una pasarela (o &quot;gateway&quot;) NAT permite:";
 choices[54]= new Array();
 choices[54][0] = "Asignar din&aacute;micamente direcciones IP publicas a un ordenador";
 choices[54][1] = "Actuar como cortafuegos filtrando los paquetes de datos recibidos.";
 choices[54][2] = "Asignar din&aacute;micamente direcciones IP privadas dentro de una red privada.";
 choices[54][3] = "Que varios ordenadores accedan a Internet al mismo tiempo por medio de una &uacute;nica direcci&oacute;n IP publica.";
 answers[54] = choices[54][3];
 units[54] = "112";
 comments[54] = "Id Pregunta: 4493. ";


//  Id pregunta: 4596 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  Cuando un m&oacute;vil se enciende y no encuentra una estaci&oacute;n base de Ia red a la que pertenece";
 choices[55]= new Array();
 choices[55][0] = "se registra en el HLR (Home Location Register) de Ia red a la que accede";
 choices[55][1] = "se registra en el VLR (Visitors Location Register) de Ia red a la que pertenece";
 choices[55][2] = "se registra en el VLR (Visitors Location Register) de Ia red a la que accede";
 choices[55][3] = "no se registra en ninguna red";
 answers[55] = choices[55][2];
 units[55] = "108";
 comments[55] = "Id Pregunta: 4596. ";


//  Id pregunta: 4715 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  El hipertexto es:";
 choices[56]= new Array();
 choices[56][0] = "El conjunto de los elementos activos de un documento, que, al seleccionarse, enlazan con otros elementos";
 choices[56][1] = "Un documento HTML.";
 choices[56][2] = "Un documento HTML, XML o SGML.";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][0];
 units[56] = "112";
 comments[56] = "Id Pregunta: 4715. Examen 2006 JCYL";


//  Id pregunta: 4727 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  Los resultados del modelo EFQM se eval&uacute;an:";
 choices[57]= new Array();
 choices[57][0] = "Respecto a los clientes";
 choices[57][1] = "Respecto a la sociedad";
 choices[57][2] = "Respecto al personal de la empresa";
 choices[57][3] = "Todas las respuestas son correctas";
 answers[57] = choices[57][3];
 units[57] = "92";
 comments[57] = "Id Pregunta: 4727. Examen 2006 JCYL";


//  Id pregunta: 4737 Año de creación de pregunta: 2007-01-01
 questions[58]= "59)   &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[58]= new Array();
 choices[58][0] = "Liderazgo";
 choices[58][1] = "Oportunidad";
 choices[58][2] = "Satisfacci&oacute;n del cliente";
 choices[58][3] = "Satisfacer los requisitos";
 answers[58] = choices[58][0];
 units[58] = "92";
 comments[58] = "Id Pregunta: 4737. Examen 2006 JCYL";


//  Id pregunta: 4972 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l es la versi&oacute;n ampliada del protocolo BOOTP?:";
 choices[59]= new Array();
 choices[59][0] = "DHCP.";
 choices[59][1] = "RARP.";
 choices[59][2] = "DNS.";
 choices[59][3] = "WINS.";
 answers[59] = choices[59][0];
 units[59] = "112";
 comments[59] = "Id Pregunta: 4972. Examen TIC B 2007";


//  Id pregunta: 4989 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativosescritos en otros lenguajes?:";
 choices[60]= new Array();
 choices[60][0] = "RMI";
 choices[60][1] = "JAXP";
 choices[60][2] = "JNDI";
 choices[60][3] = "JNI";
 answers[60] = choices[60][3];
 units[60] = "116";
 comments[60] = "Id Pregunta: 4989. Examen TIC A 2007";


//  Id pregunta: 5087 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  El est&aacute;ndar conocido como ISO/IEC 9594-1:2008 se corresponde con:";
 choices[61]= new Array();
 choices[61][0] = "LDAP";
 choices[61][1] = "UIT-T X-500";
 choices[61][2] = "HTML";
 choices[61][3] = "SQL";
 answers[61] = choices[61][1];
 units[61] = "73";
 comments[61] = "Id Pregunta: 5087. ";


//  Id pregunta: 5130 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l es la longitud equivalente a una clave RSA de 1024 bits si utiliz&aacute;ramos un algoritmo de clave sim&eacute;trica?";
 choices[62]= new Array();
 choices[62][0] = "132";
 choices[62][1] = "80";
 choices[62][2] = "64";
 choices[62][3] = "512";
 answers[62] = choices[62][1];
 units[62] = "111";
 comments[62] = "Id Pregunta: 5130. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5157 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  El protocolo SET:";
 choices[63]= new Array();
 choices[63][0] = "Es un protocolo para la realizaci&oacute;n de transacciones de pago seguras a trav&eacute;s de Internet.";
 choices[63][1] = "Es un protocolo para juegos en red.";
 choices[63][2] = "Es un protocolo para la interconexi&oacute;n de chats en Internet.";
 choices[63][3] = "Es un protocolo para la transmisi&oacute;n de voz comprimida a trav&eacute;s de Internet.";
 answers[63] = choices[63][0];
 units[63] = "111";
 comments[63] = "Id Pregunta: 5157. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5549 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  La Ley 11/2007, deroga:";
 choices[64]= new Array();
 choices[64][0] = "Los reglamentos de desarrollo de los art&iacute;culos relativos a Registros de las Administraciones P&uacute;blicas, Notificaciones Administrativas e Incorporaci&oacute;n de medios t&eacute;cnicos en la actividad administrativa (art. 38, 59, 45 respectivamente), de la Ley del R&eacute;gimen Jur&iacute;dico y del Procedimiento Administrativo Com&uacute;n (Ley 30/1992).";
 choices[64][1] = "Los art&iacute;culos 38, 59 y 45 de la Ley 30/1992 y su disposici&oacute;n adicional decimooctava.";
 choices[64][2] = "El Real Decreto 209/2003 y la Orden PRE/1551/2003.";
 choices[64][3] = "Modifica los art&iacute;culos 38, 45 y 59 de la Ley 30/1992 y deroga su disposici&oacute;n adicional 18&ordf; as&iacute; como todo aquello que contradiga la Ley 11/2007 en los Reglamentos de desarrollo de dichos art&iacute;culos.";
 answers[64] = choices[64][3];
 units[64] = "43";
 comments[64] = "Id Pregunta: 5549. ";


//  Id pregunta: 5609 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  Los mensajes MPDU en X.400 puedes ser:";
 choices[65]= new Array();
 choices[65][0] = "Sondas, Informes y los propios mensajes";
 choices[65][1] = "Sondas, Notificaciones, mensajes de control y el propio mensaje";
 choices[65][2] = "Notificaciones, Informes de entrega y los propios mensajes";
 choices[65][3] = "Solo los propios mensajes denominados IPM";
 answers[65] = choices[65][0];
 units[65] = "106";
 comments[65] = "Id Pregunta: 5609. ";


//  Id pregunta: 5625 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Indique cu&aacute;l de los siguientes no es un ataque en seguridad inform&aacute;tica";
 choices[66]= new Array();
 choices[66][0] = "Pharming";
 choices[66][1] = "Phishing ";
 choices[66][2] = "Gloofing";
 choices[66][3] = "Spoofing";
 answers[66] = choices[66][2];
 units[66] = "111";
 comments[66] = "Id Pregunta: 5625. ";


//  Id pregunta: 5820 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  Indique cu&aacute;l de los siguientes NO se corresponde con un tipo de registro de recurso del Sistema de Nombres de Dominio (DNS &quot; Domain Name System&quot;):";
 choices[67]= new Array();
 choices[67][0] = "HINFO &quot;Host Information&quot;";
 choices[67][1] = "SOA &quot; Start Of Authority&quot;";
 choices[67][2] = "TTL &quot;Time-To- Live&quot;";
 choices[67][3] = "WKS &quot;Well-Now-Services&quot;";
 answers[67] = choices[67][2];
 units[67] = "106";
 comments[67] = "Id Pregunta: 5820. MAP 2008 A1";


//  Id pregunta: 5989 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Un servidor de telnet permite:";
 choices[68]= new Array();
 choices[68][0] = "A los usuarios entrar en otro ordenador y llevar a cabo tareas como si estuviesen trabajando en el ordenador remoto.";
 choices[68][1] = "Intercambiar informaci&oacute;n ofreciendo capacidades de discusi&oacute;n en tiempo real.";
 choices[68][2] = "Gestionar listas de correo, ya sea para env&iacute;o masivo o para gestionar foros de discusi&oacute;n.";
 choices[68][3] = "Distribuir contenido multimedia a las aplicaciones cliente.";
 answers[68] = choices[68][0];
 units[68] = "112";
 comments[68] = "Id Pregunta: 5989. TIC A 2009";


//  Id pregunta: 6129 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  En la arquitectura Java, &iquest;qu&eacute; se entiende por JSR?";
 choices[69]= new Array();
 choices[69][0] = "Un applet.";
 choices[69][1] = "Es una especificaci&oacute;n en la que se describe una tecnolog&iacute;a, sus partes, las relaciones entre las mismas y los roles de las personas que usar&aacute;n dicha tecnolog&iacute;a.";
 choices[69][2] = "Es una especificaci&oacute;n que describe la manera en que la parte servidora atender&aacute; las peticiones hechas por un applet o un javascript. Es el acr&oacute;nimo de Java Server Request.";
 choices[69][3] = "Un JavaBean.";
 answers[69] = choices[69][1];
 units[69] = "60";
 comments[69] = "Id Pregunta: 6129. TIC A 2009";


//  Id pregunta: 6219 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los est&aacute;ndares de documentaci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "Ayuda al entrenamiento del nuevo personal dentro y fuera de la organizaci&oacute;n de Sistemas";
 choices[70][1] = "Es &uacute;til para cualquier que tenga la responsabilidad del mantenimiento de los sistemas";
 choices[70][2] = "Ayuda a los analistas y dise&ntilde;adores de sistemas en el trabajo de integraci&oacute;n de sistemas";
 choices[70][3] = "El tiempo empleado en la documentaci&oacute;n se ve recompensado en al menos un 75% de ahorro en b&uacute;squedas de informaci&oacute;n para el mantenimiento del producto";
 answers[70] = choices[70][3];
 units[70] = "95";
 comments[70] = "Id Pregunta: 6219. TICB-2009, bloque desarrollo";


//  Id pregunta: 6220 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Qu&eacute; subproyecto de 'Apache' basado en servlets permite a los desarrolladores crear r&aacute;pidamente aplicaciones web y permite personalizar el uso de sitios web y restringir el acceso a partes de la aplicaci&oacute;n";
 choices[71]= new Array();
 choices[71][0] = "Watchdog";
 choices[71][1] = "Turbine";
 choices[71][2] = "Lucene";
 choices[71][3] = "Avalon";
 answers[71] = choices[71][1];
 units[71] = "60";
 comments[71] = "Id Pregunta: 6220. TICB-2009, bloque desarrollo";


//  Id pregunta: 6232 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  Con respecto a MNG, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[72]= new Array();
 choices[72][0] = "Existen tres versiones de MNG de complejidad reducida: MNG-LC (baja complejidad),  MNG-VLC (complejidad muy baja) y MNG-RVLC (complejidad realmente muy baja).";
 choices[72][1] = "Es un formato de fichero, libre de derechos, para im&aacute;genes animadas, fuertemente vinculado a PNG.";
 choices[72][2] = "No est&aacute; soportado por el navegador Konqueror.";
 choices[72][3] = "Todas las anteriores respuestas son incorrectas.";
 answers[72] = choices[72][1];
 units[72] = "114";
 comments[72] = "Id Pregunta: 6232. ";


//  Id pregunta: 6376 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes sentencias corresponde con la definici&oacute;n de Interoperabilidad Sem&aacute;ntica dada por el Esquema Nacional de Interoperabilidad?";
 choices[73]= new Array();
 choices[73][0] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[73][1] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[73][2] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[73][3] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[73] = choices[73][1];
 units[73] = "43";
 comments[73] = "Id Pregunta: 6376. Anexo ENI";


//  Id pregunta: 6379 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;A qui&eacute;n corresponde aprobar el Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "Al Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[74][1] = "Al Centro Criptol&oacute;gico Nacional";
 choices[74][2] = "Al Gobierno";
 choices[74][3] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[74] = choices[74][0];
 units[74] = "43";
 comments[74] = "Id Pregunta: 6379. Art&iacute;culo 14 ENI";


//  Id pregunta: 6381 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  De acuerdo a lo establecido en el Esquema Nacional de Interoperabilidad, las administraciones utilizar&aacute;n para las aplicaciones que declaren como de fuentes abiertas aquellas licencias que aseguren que los programas, datos o informaci&oacute;n que se comparten:";
 choices[75]= new Array();
 choices[75][0] = "Se ejecuten exclusivamente para el prop&oacute;sito definido.";
 choices[75][1] = "S&oacute;lo permitan conocer su c&oacute;digo fuente a las personas autorizadas.";
 choices[75][2] = "No pueden modificarse sin permiso previo del autor.";
 choices[75][3] = "Todas las anteriores son falsas.";
 answers[75] = choices[75][3];
 units[75] = "43";
 comments[75] = "Id Pregunta: 6381. Art&iacute;culo 16 ENI";


//  Id pregunta: 6408 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes no ser&aacute; considerada una infracci&oacute;n de los derechos de autor, de acuerdo a la Ley de Propiedad Intelectual?";
 choices[76]= new Array();
 choices[76][0] = "Poner en circulaci&oacute;n una o m&aacute;s copias de un programa de ordenador conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, sin autorizaci&oacute;n del titular de los derechos.";
 choices[76][1] = "Tener con fines comerciales una o m&aacute;s copias de un programa de ordenador, conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, , sin autorizaci&oacute;n del titular de los derechos.";
 choices[76][2] = "Poner en circulaci&oacute;n o tener con fines comerciales cualquier instrumento que tenga, entre otros usos, facilitar la supresi&oacute;n o neutralizaci&oacute;n no autorizadas de cualquier dispositivo t&eacute;cnico utilizado para proteger un programa de ordenador, sin autorizaci&oacute;n del titular de los derechos.";
 choices[76][3] = "Todas las anteriores son consideradas infracciones, seg&uacute;n la Ley de Propiedad Intelectual.";
 answers[76] = choices[76][2];
 units[76] = "36";
 comments[76] = "Id Pregunta: 6408. Art&iacute;culo 102 RDL 1/1996";


//  Id pregunta: 6427 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  De las siguientes aplicaciones, &iquest;Cu&aacute;l no es un servidor de aplicaciones?";
 choices[77]= new Array();
 choices[77][0] = "Apache Geronimo";
 choices[77][1] = "Jboss";
 choices[77][2] = "eXo";
 choices[77][3] = "Resin";
 answers[77] = choices[77][2];
 units[77] = "62";
 comments[77] = "Id Pregunta: 6427. ";


//  Id pregunta: 6501 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  &iquest;Qu&eacute; navegador de Internet est&aacute; licenciado bajo la licencia MPL?";
 choices[78]= new Array();
 choices[78][0] = "Google Chrome";
 choices[78][1] = "Mozilla Firefox";
 choices[78][2] = "Mosaic";
 choices[78][3] = "Netscape Navigator";
 answers[78] = choices[78][1];
 units[78] = "61";
 comments[78] = "Id Pregunta: 6501. ";


//  Id pregunta: 6533 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  Los desajustes en los cumplimientos de las expectativas y especificaciones de los servicios determinan";
 choices[79]= new Array();
 choices[79][0] = "El grado de satisfacci&oacute;n de los usuarios";
 choices[79][1] = "Percepci&oacute;n del servicio y expectativas previas de los usuarios";
 choices[79][2] = "A y B son correctas";
 choices[79][3] = "A y B son incorrectas";
 answers[79] = choices[79][2];
 units[79] = "92";
 comments[79] = "Id Pregunta: 6533. ";


//  Id pregunta: 6641 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  Dentro de las t&eacute;cnicas para medir la complejidad del software NO se encuentra:";
 choices[80]= new Array();
 choices[80][0] = "La t&eacute;cnica de McCabe";
 choices[80][1] = "La t&eacute;cnica de McCall";
 choices[80][2] = "La t&eacute;cnica de Halstead";
 choices[80][3] = "La t&eacute;cnica de Bang";
 answers[80] = choices[80][1];
 units[80] = "88";
 comments[80] = "Id Pregunta: 6641. ";


//  Id pregunta: 7146 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  &iquest;Qu&eacute; art&iacute;culo de la Ley 11/2007 de 22 de Junio hace referencia a los Esquemas Nacionales de Interoperabilidad y Seguridad?";
 choices[81]= new Array();
 choices[81][0] = "Art&iacute;culo 52";
 choices[81][1] = "Art&iacute;culo 44";
 choices[81][2] = "Art&iacute;culo 42";
 choices[81][3] = "Art&iacute;culo 50";
 answers[81] = choices[81][2];
 units[81] = "43";
 comments[81] = "Id Pregunta: 7146. Examen TIC B 2009";


//  Id pregunta: 8182 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  El diagrama de despliegue se utiliza en M&eacute;trica versi&oacute;n 3 en:";
 choices[82]= new Array();
 choices[82][0] = "El dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema.";
 choices[82][1] = "El dise&ntilde;o f&iacute;sico de datos";
 choices[82][2] = "La generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[82][3] = "El dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 answers[82] = choices[82][2];
 units[82] = "86";
 comments[82] = "Id Pregunta: 8182. Examen TIC A1 2010";


//  Id pregunta: 8243 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de las siguientes funciones NO corresponde al Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica seg&uacute;n lo recogido en la Ley 11/2007 y modificaciones normativas posteriores?:";
 choices[83]= new Array();
 choices[83][0] = "Asegurar la cooperaci&oacute;n entre las administraciones p&uacute;blicas para proporcionar al ciudadano informaci&oacute;n clara, actualizada e inequivoca.";
 choices[83][1] = "Velar por el cumplimiento de los fines y principios establecidos en la Ley 11/2007";
 choices[83][2] = "Proponer planes programas conjuntos de actuaci&oacute;n para impulsar el desarrollo de la Administraci&oacute;n Electr&oacute;nica en Espa&ntilde;a";
 choices[83][3] = "Aprobar los Cat&aacute;logos de determinaci&oacute;n de tipo referidos a bienes y servicios electr&oacute;nicos.";
 answers[83] = choices[83][3];
 units[83] = "43";
 comments[83] = "Id Pregunta: 8243. Examen TIC A1 2010";


//  Id pregunta: 8248 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Indique la afirmaci&oacute;n FALSA. De acuerdo a la ley 30/2007, el sistema de determinaci&oacute;n del precio de los contratos para el desarrollo de programas inform&aacute;ticos:";
 choices[84]= new Array();
 choices[84][0] = "Puede ser a tanto alzado.";
 choices[84][1] = "Puede resultar de la aplicaci&oacute;n de honorarios por tarifas.";
 choices[84][2] = "Se debe establecer en el Pliego de Prescripciones T&eacute;cnicas.";
 choices[84][3] = "Puede resultar de la combinaci&oacute;n de varias modalidades de c&aacute;lculo.";
 answers[84] = choices[84][2];
 units[84] = "36,37";
 comments[84] = "Id Pregunta: 8248. Examen TIC A1 2010";


//  Id pregunta: 8338 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[85]= new Array();
 choices[85][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[85][1] = "PERT.";
 choices[85][2] = "CPM.";
 choices[85][3] = "El histograma de recursos.";
 answers[85] = choices[85][0];
 units[85] = "86";
 comments[85] = "Id Pregunta: 8338. Examen TIC A2 2010";


//  Id pregunta: 8462 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Entre los tipos de componentes que incluye la especificaci&oacute;n de aplicaciones basadas en J2EE 1.4 se encuentran:";
 choices[86]= new Array();
 choices[86][0] = "P&aacute;ginas Asp y VBScript";
 choices[86][1] = "Applet, Servlets, EJBs";
 choices[86][2] = "Javascript y p&aacute;ginas JSP";
 choices[86][3] = "Ninguna de las anteriores";
 answers[86] = choices[86][1];
 units[86] = "116";
 comments[86] = "Id Pregunta: 8462. Analista Ayto. Madrid 2010";


//  Id pregunta: 8468 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  GPRS es un servicio que soporta la transmisi&oacute;n de paquetes via radio:";
 choices[87]= new Array();
 choices[87][0] = "Utilizando el protocolo HSDPA y el mismo BSS de GSM";
 choices[87][1] = "Utilizando el protocolo IP y el mismo BSS de GSM";
 choices[87][2] = "Utilizando el protocolo IP y transmisi&oacute;n WCDMA de banda ancha";
 choices[87][3] = "Ninguna de las anteriores";
 answers[87] = choices[87][1];
 units[87] = "108";
 comments[87] = "Id Pregunta: 8468. Analista Ayto. Madrid 2010";


//  Id pregunta: 8517 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[88]= new Array();
 choices[88][0] = "El Diccionario de Datos.";
 choices[88][1] = "El Diagrama de Flujo de Datos.";
 choices[88][2] = "Las especificaciones de procesos.";
 choices[88][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[88] = choices[88][3];
 units[88] = "86";
 comments[88] = "Id Pregunta: 8517. Examen TIC A2 2010 interna";


//  Id pregunta: 8541 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;En qu&eacute; a&ntilde;o ha concluido el apag&oacute;n anal&oacute;gico en Espa&ntilde;a?";
 choices[89]= new Array();
 choices[89][0] = "2007";
 choices[89][1] = "2008";
 choices[89][2] = "2009";
 choices[89][3] = "2010";
 answers[89] = choices[89][3];
 units[89] = "105";
 comments[89] = "Id Pregunta: 8541. Examen TIC A2 2010 interna";


//  Id pregunta: 8651 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en M&eacute;trica v3. en el proceso de Construcci&oacute;n del sistema?";
 choices[90]= new Array();
 choices[90][0] = "Carga de Datos al entorno de operaci&oacute;n.";
 choices[90][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[90][2] = "Establecimiento del Acuerdo de Nivel de Servicio.";
 choices[90][3] = "Elaboraci&oacute;n del modelo de datos.";
 answers[90] = choices[90][1];
 units[90] = "86";
 comments[90] = "Id Pregunta: 8651. Examen TIC A2 2010 interna";


//  Id pregunta: 8782 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, se entiende por documento electr&oacute;nico:";
 choices[91]= new Array();
 choices[91][0] = "El conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[91][1] = "El conjunto de elementos intervinientes en la creaci&oacute;n de una firma electr&oacute;nica.";
 choices[91][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[91][3] = "El documento firmado electr&oacute;nicamente por un prestador de servicios de certificaci&oacute;n que vincula unos datos de verificaci&oacute;n de firma avanzada y confirma su identidad.";
 answers[91] = choices[91][2];
 units[91] = "43";
 comments[91] = "Id Pregunta: 8782. Examen UPM A2 2011";


//  Id pregunta: 8892 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes es uno de los programas del marco general para la mejora de la calidad en la AGE?";
 choices[92]= new Array();
 choices[92][0] = "Programa de Evaluaci&oacute;n de la Calidad de las Organizaciones";
 choices[92][1] = "Programa de Formaci&oacute;n en EFQM";
 choices[92][2] = "Programa de Mejora de la Eficiencia en la Administraci&oacute;n P&uacute;blica";
 choices[92][3] = "Programa de Aseguramiento de la Calidad";
 answers[92] = choices[92][0];
 units[92] = "92";
 comments[92] = "Id Pregunta: 8892. ";


//  Id pregunta: 8940 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[93]= new Array();
 choices[93][0] = "El &oacute;rgano titular de la sede";
 choices[93][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[93][2] = "Los dos anteriores";
 choices[93][3] = "Ninguno de los anteriores";
 answers[93] = choices[93][3];
 units[93] = "43";
 comments[93] = "Id Pregunta: 8940. ";


//  Id pregunta: 9029 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[94]= new Array();
 choices[94][0] = "Wowza Media Server";
 choices[94][1] = "Icecast";
 choices[94][2] = "Darwin Streaming Server";
 choices[94][3] = "FlowCast";
 answers[94] = choices[94][3];
 units[94] = "117";
 comments[94] = "Id Pregunta: 9029. ";


//  Id pregunta: 9068 Año de creación de pregunta: 2013-01-01
 questions[95]= "96)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a las normas WCAG 2.0:";
 choices[95]= new Array();
 choices[95][0] = "Una de las mejoras respecto a WCAG 1.0 es la posibilidad de evaluarlas de manera autom&aacute;tica. ";
 choices[95][1] = "En Espa&ntilde;a se incorporan mediante la norma UNE 139803. ";
 choices[95][2] = "Constan de 14 pautas. ";
 choices[95][3] = "La pauta Adaptable dentro del principio Perceptible se refiere a &quot;Contenido presentado de diferentes formas sin perder informaci&oacute;n o estructura&quot;. ";
 answers[95] = choices[95][2];
 units[95] = "39";
 comments[95] = "Id Pregunta: 9068. ";


//  Id pregunta: 9079 Año de creación de pregunta: 2013-01-01
 questions[96]= "97)  Para cumplir el nivel AA en la pauta &quot;Ayuda a la entrada de datos&quot;, respecto a los formularios de entrada de datos que tengan consecuencias legales, cu&aacute;l de las siguientes opciones NO se exige:";
 choices[96]= new Array();
 choices[96][0] = "Tipograf&iacute;a clara y legible. ";
 choices[96][1] = "Verificaci&oacute;n por parte del usuario.";
 choices[96][2] = "Reversibilidad. ";
 choices[96][3] = "Confirmaci&oacute;n.";
 answers[96] = choices[96][0];
 units[96] = "39";
 comments[96] = "Id Pregunta: 9079. ";


//  Id pregunta: 9574 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  Al hablar de software libre y de su uso en la Administraci&oacute;n se&ntilde;ale la frase correcta:";
 choices[97]= new Array();
 choices[97][0] = "La Ley 11/2007 obliga a las administraciones p&uacute;blicas a poner las aplicaciones de cuyos derechos de propiedad son titulares a disposici&oacute;n de cualquier otra Administraci&oacute;n Auton&oacute;mica.";
 choices[97][1] = "Una licencia de c&oacute;digo de fuente abierta seg&uacute;n la FSF obliga a hacer p&uacute;blicas todas las mejoras, poni&eacute;ndolas a disposici&oacute;n de la comunidad.";
 choices[97][2] = "Una licencia LGPL no restringe la posibilidad de incluir el software protegido por la licencia en productos protegidos por licencias no GPL.";
 choices[97][3] = "El Real Decreto 4/2010 del Esquema Nacional de Interoperabilidad prev&eacute; un cat&aacute;logo &uacute;nicamente de est&aacute;ndares abiertos de uso obligatorio por las administraciones p&uacute;blicas.";
 answers[97] = choices[97][2];
 units[97] = "43, 61, 62";
 comments[97] = "Id Pregunta: 9574. Examen TIC A1 2011";


//  Id pregunta: 9584 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  Los certificados incorporados al DNI-e:";
 choices[98]= new Array();
 choices[98][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[98][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[98][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[98][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[98] = choices[98][3];
 units[98] = "43, 74";
 comments[98] = "Id Pregunta: 9584. Examen TIC A1 2011";


//  Id pregunta: 9596 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  En una arquitectura web en J2EE, indique cu&aacute;l es la opci&oacute;n correcta que representa la capa a la que pertenece la soluci&oacute;n JCA (J2EE Connector Architecture)";
 choices[99]= new Array();
 choices[99][0] = "Capa de cliente";
 choices[99][1] = "Capa de l&oacute;gica de negocio";
 choices[99][2] = "Capa de integraci&oacute;n";
 choices[99][3] = "Capa de sistemas de informaci&oacute;n";
 answers[99] = choices[99][3];
 units[99] = "60";
 comments[99] = "Id Pregunta: 9596. Xunta Libre 2011";


