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


//  Id pregunta: 71 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas ignora la cuant&iacute;a de la diferencia y s&oacute;lo se&ntilde;ala si existe o no?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo Promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "Permutaci&oacute;n";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][0];
 units[1] = "34";
 comments[1] = "Id Pregunta: 71. ";


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


//  Id pregunta: 163 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  El siguiente punto de verificaci&oacute;n de WAI (en la norma WCAG 1.0): &quot;Hasta que las aplicaciones de usuario permitan controlarlo, evite provocar parpadeo en la pantalla&quot;, &iquest;a qu&eacute; nivel de prioridad pertenece?:";
 choices[3]= new Array();
 choices[3][0] = "1";
 choices[3][1] = "2";
 choices[3][2] = "3";
 choices[3][3] = "no es ning&uacute;n punto de verificaci&oacute;n contemplado en WAI";
 answers[3] = choices[3][0];
 units[3] = "39";
 comments[3] = "Id Pregunta: 163. ";


//  Id pregunta: 395 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Para planificaci&oacute;n de la capacidad de los sistemas se usan las metodolog&iacute;as:";
 choices[4]= new Array();
 choices[4][0] = "Proyecci&oacute;n lineal y teor&iacute;a de colas";
 choices[4][1] = "Simulaci&oacute;n";
 choices[4][2] = "Benchmark";
 choices[4][3] = "Todas las anteriores";
 answers[4] = choices[4][3];
 units[4] = "35";
 comments[4] = "Id Pregunta: 395. ";


//  Id pregunta: 485 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;D&oacute;nde ubicar&iacute;a al Centro de Control y Gesti&oacute;n de Red (Network Management System)?:";
 choices[5]= new Array();
 choices[5][0] = "Dentro del staff del director de sistemas de informaci&oacute;n";
 choices[5][1] = "Dentro del departamento de an&aacute;lisis y programaci&oacute;n";
 choices[5][2] = "En el departamento de explotaci&oacute;n";
 choices[5][3] = "En el departamento de planificaci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "26";
 comments[5] = "Id Pregunta: 485. ";


//  Id pregunta: 628 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  Cu&aacute;l de las siguientes alternativas no se puede contratar a trav&eacute;s del cat&aacute;logo central de suministros.";
 choices[6]= new Array();
 choices[6][0] = "Un paquete SW de Bases de Datos.";
 choices[6][1] = "Un Servidor de aplicaciones.";
 choices[6][2] = "Un equipo externo de desarrollo Software.";
 choices[6][3] = "Un servicio de comunicaciones con un operador.";
 answers[6] = choices[6][3];
 units[6] = "35";
 comments[6] = "Id Pregunta: 628. ";


//  Id pregunta: 804 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  A Claude Shannon se le considera:";
 choices[7]= new Array();
 choices[7][0] = "el padre de la telem&aacute;tica moderna";
 choices[7][1] = "el creador del primer ordenador seg&uacute;n la m&aacute;quina de Von Neumann";
 choices[7][2] = "el pionero de los algoritmos criptogr&aacute;ficos";
 choices[7][3] = "el creador del primer sistema operativo";
 answers[7] = choices[7][0];
 units[7] = "99";
 comments[7] = "Id Pregunta: 804. ";


//  Id pregunta: 1271 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Los certificados digitales o 'digital IDs' est&aacute;n definidos en:";
 choices[8]= new Array();
 choices[8][0] = "RSA Public Key Structure";
 choices[8][1] = "X.509v3 de ITU";
 choices[8][2] = "RFC 1661 de IAB";
 choices[8][3] = "Verisign doc 1992/21";
 answers[8] = choices[8][1];
 units[8] = "73";
 comments[8] = "Id Pregunta: 1271. ";


//  Id pregunta: 1449 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes licencias no es compatible con la licencia General Public License (GPL)?:";
 choices[9]= new Array();
 choices[9][0] = "Lesser General Public License (LGPL)";
 choices[9][1] = "Modified BSD License";
 choices[9][2] = "Mozilla Public License (MPL)";
 choices[9][3] = "X11 License";
 answers[9] = choices[9][2];
 units[9] = "61,62";
 comments[9] = "Id Pregunta: 1449. ";


//  Id pregunta: 1636 Año de creación de pregunta: 2003-01-01
 questions[10]= "11)  Seg&uacute;n la metodolog&iacute;a Metrica v3 un diagrama de estructura se representa en forma de &aacute;rbol. Indicar, entre las siguientes, cu&aacute;l no corresponde a alguna de la srepresentaciones gr&aacute;ficas que permiten mostrar la secuencioa de las llamadas entre m&oacute;dulos";
 choices[10]= new Array();
 choices[10][0] = "Lineal";
 choices[10][1] = "Secuencial";
 choices[10][2] = "Repetitiva";
 choices[10][3] = "Alternativa";
 answers[10] = choices[10][0];
 units[10] = "86";
 comments[10] = "Id Pregunta: 1636. ";


//  Id pregunta: 1769 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  Los applets de JAVA:";
 choices[11]= new Array();
 choices[11][0] = "Se puede incluir en una p&aacute;gina HTML de forma mediante una etiqueta especial &lt;add_applet&gt;";
 choices[11][1] = "Un applet nunca puede hacer conexiones a la m&aacute;quina de la que se descarg&oacute;.";
 choices[11][2] = "El navegador invoca el m&eacute;todo init() sobre un applet cada vez que se va a mostrar la p&aacute;gina que contiene &eacute;ste.";
 choices[11][3] = "Para firmar un applet se tiene que crear un fichero de archivo JAR con las clases que componen el applet, un fichero de metainformaci&oacute;n y el fichero de firma.";
 answers[11] = choices[11][3];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1769. ";


//  Id pregunta: 1892 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  Tres discos duros con una direcci&oacute;n de red &uacute;nica y propia y sirviendo ficheros a usuarios de estaciones de trabajo en LAN es una";
 choices[12]= new Array();
 choices[12][0] = "SAN";
 choices[12][1] = "NAS";
 choices[12][2] = "RAID";
 choices[12][3] = "cabina de discos";
 answers[12] = choices[12][1];
 units[12] = "48";
 comments[12] = "Id Pregunta: 1892. ";


//  Id pregunta: 1903 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  Ejecuci&oacute;n continua y en parte solapada de instrucciones por parte del procesador";
 choices[13]= new Array();
 choices[13][0] = "flujo de datos";
 choices[13][1] = "multiplexado";
 choices[13][2] = "clustering";
 choices[13][3] = "pipelining";
 answers[13] = choices[13][3];
 units[13] = "46";
 comments[13] = "Id Pregunta: 1903. ";


//  Id pregunta: 2131 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[14]= new Array();
 choices[14][0] = "Para aplicar M&Eacute;TRICA Versi&oacute;n 3 es preciso realizar una adaptaci&oacute;n previa en funci&oacute;n del proyecto, la organizaci&oacute;n, etc";
 choices[14][1] = "Las interfaces de M&Eacute;TRICA 3 son: Gesti&oacute;n de Proyectos, Gesti&oacute;n de Configuraci&oacute;n, Aseguramiento de la Calidad y Seguridad";
 choices[14][2] = "En las tareas de M&Eacute;TRICA Versi&oacute;n 3 se describe su contenido, se indican los productos a obtener, las t&eacute;cnicas a utilizar y los participantes responsables de su realizaci&oacute;n";
 choices[14][3] = "La participaci&oacute;n de los usuarios en M&Eacute;TRICA Versi&oacute;n 3 se produce s&oacute;lo en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 answers[14] = choices[14][3];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2131. ";


//  Id pregunta: 2144 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes elementos forma parte del 'bloque instrumental' del PGGC aplicable al desarrollo de equipos l&oacute;gicos del CSI?:";
 choices[15]= new Array();
 choices[15][0] = "Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de planes de garant&iacute;a de calidad";
 choices[15][1] = "Esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos";
 choices[15][2] = "Procedimiento de control de calidad";
 choices[15][3] = "Todos los elementos anteriores son v&aacute;lidos";
 answers[15] = choices[15][2];
 units[15] = "88";
 comments[15] = "Id Pregunta: 2144. ";


//  Id pregunta: 2167 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indique la afirmaci&oacute;n falsa, relativa al mantenimiento de las aplicaciones:";
 choices[16]= new Array();
 choices[16][0] = "Comienza cuando el sistema es entregado al usuario y contin&uacute;a mientras permanece activa su vida &uacute;til";
 choices[16][1] = "Las modificaciones que implican mejoras o ampliaciones de la funcionalidad no necesitan ser aprobados por el usuario";
 choices[16][2] = "Los cambios reflejados en la fase de mantenimiento deben quedar reflejados en la documentaci&oacute;n de todas las fases anteriores";
 choices[16][3] = "El mantenimiento puede ser correctivo, perfectivo o adaptativo";
 answers[16] = choices[16][1];
 units[16] = "86";
 comments[16] = "Id Pregunta: 2167. ";


//  Id pregunta: 2184 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l es la versi&oacute;n actual de la m&eacute;todolog&iacute;a M&eacute;trica?:";
 choices[17]= new Array();
 choices[17][0] = "v1";
 choices[17][1] = "v2";
 choices[17][2] = "v2.1";
 choices[17][3] = "v3";
 answers[17] = choices[17][3];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2184. ";


//  Id pregunta: 2186 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l no es un tipo de mantenimiento software?:";
 choices[18]= new Array();
 choices[18][0] = "Continuo";
 choices[18][1] = "Correctivo";
 choices[18][2] = "Adaptativo";
 choices[18][3] = "Perfectivo";
 answers[18] = choices[18][0];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2186. ";


//  Id pregunta: 2208 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; debe contener de forma general un Plan de Contingencia (tambi&eacute;n denominado Plan de Desastre)?:";
 choices[19]= new Array();
 choices[19][0] = "Plan de viabilidad, procedimientos de emergencia ante fallos, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[19][1] = "Procedimientos de activaci&oacute;n en caso de desastre, plan de copias de seguridad o de almacenamiento/recuperaci&oacute;n de informaci&oacute;n, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[19][2] = "An&aacute;lisis de riesgos inform&aacute;ticos, plan de viabilidad, procedimientos de activaci&oacute;n en caso de desastre, plan de almacenamiento/recuperaci&oacute;n de informaci&oacute;n, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[19][3] = "Plan de activaci&oacute;n de emergencia, procedimientos de emergencia ante fallos y procedimientos de traslado a instalaci&oacute;n alternativa";
 answers[19] = choices[19][1];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2208. ";


//  Id pregunta: 2271 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  El diagrama que representa el despliegue de los componentes sobre los dispositivos materiales o nodos es el de:";
 choices[20]= new Array();
 choices[20][0] = "componentes";
 choices[20][1] = "despliegue";
 choices[20][2] = "actividades";
 choices[20][3] = "ninguno de los anteriores";
 answers[20] = choices[20][1];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2271. ";


//  Id pregunta: 2595 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  La eliminaci&oacute;n del efecto onda que provocan los cambios introducidos por una petici&oacute;n de mantenimiento de un sistema de informaci&oacute;n se consigne:";
 choices[21]= new Array();
 choices[21][0] = "Con la definici&oacute;n de los puntos de control adecuados en el plan de mantenimiento de sistemas de informaci&oacute;n.";
 choices[21][1] = "A trav&eacute;s de las pruebas de regresi&oacute;n.";
 choices[21][2] = "Con el seguimiento de las referencias cruzadas de los elementos afectados por los cambios.";
 choices[21][3] = "Con la planificaci&oacute;n detallada del desarrollo de los cambios.";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2595. Junta Andaluc&iacute;a";


//  Id pregunta: 2615 Año de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es un resultado de la fase de an&aacute;lisis de Metrica v 3?";
 choices[22]= new Array();
 choices[22][0] = "Cat&aacute;logo de normas";
 choices[22][1] = "Cat&aacute;logo de requisitos";
 choices[22][2] = "Glosario";
 choices[22][3] = "Descripci&oacute;n de subsistemas";
 answers[22] = choices[22][0];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2615. ";


//  Id pregunta: 2804 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  El conjunto de tareas a realizar para asegurar la calidad de un producto software se conoce como:";
 choices[23]= new Array();
 choices[23][0] = "Control de Calidad";
 choices[23][1] = "Modelo de Calidad";
 choices[23][2] = "Plan General de Calidad";
 choices[23][3] = "Garant&iacute;a de Calidad";
 answers[23] = choices[23][3];
 units[23] = "87";
 comments[23] = "Id Pregunta: 2804. ";


//  Id pregunta: 2840 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;En el modelo EFQM qu&eacute; porcentaje se da al liderazgo?";
 choices[24]= new Array();
 choices[24][0] = "15";
 choices[24][1] = "10";
 choices[24][2] = "20";
 choices[24][3] = "9";
 answers[24] = choices[24][1];
 units[24] = "92";
 comments[24] = "Id Pregunta: 2840. ";


//  Id pregunta: 2862 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  &iquest;Qu&eacute; pretende la CE con los principios ONP?";
 choices[25]= new Array();
 choices[25][0] = " la definici&oacute;n de un conjunto de medidas reguladoras para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[25][1] = " la definici&oacute;n de un conjunto de medidas  t&eacute;cnicas para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[25][2] = " la definici&oacute;n de un conjunto de medidas econ&oacute;micas para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[25][3] = "Todas ellas";
 answers[25] = choices[25][3];
 units[25] = "30";
 comments[25] = "Id Pregunta: 2862. ";


//  Id pregunta: 2927 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[26]= new Array();
 choices[26][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[26][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[26][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[26][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[26] = choices[26][2];
 units[26] = "113";
 comments[26] = "Id Pregunta: 2927. ";


//  Id pregunta: 2957 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  Dada la direcci&oacute;n IP 00001010.00000001.10000001.10000001 con m&aacute;scara de subred 11111111.11111111.11111111.11000000. Indique cu&aacute;l es, en binario, la direcci&oacute;n IP resultante de aplicar la operaci&oacute;n l&oacute;gica correspondiente entre ambas para calcular la subred ";
 choices[27]= new Array();
 choices[27][0] = "00001010.00000001.10000001.10000000";
 choices[27][1] = "00001010.00000001.10000001.00000000";
 choices[27][2] = "00001010.00000001.00000000.00000001";
 choices[27][3] = "00001010.00000001.10000001.11000000";
 answers[27] = choices[27][0];
 units[27] = "100";
 comments[27] = "Id Pregunta: 2957. Examen TIC MAP B 2004";


//  Id pregunta: 2968 Año de creación de pregunta: 2004-01-01
 questions[28]= "29)  El componente de servidor J2EE de uso m&aacute;s apropiado para mantener una conversaci&oacute;n con un cliente es un EJB del tipo ...";
 choices[28]= new Array();
 choices[28][0] = "Stateless Session Bean";
 choices[28][1] = "Message Driven Bean";
 choices[28][2] = "Entity Bean con persistencia BMP";
 choices[28][3] = "Stateful Session Bean";
 answers[28] = choices[28][3];
 units[28] = "116";
 comments[28] = "Id Pregunta: 2968. ";


//  Id pregunta: 3031 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  ASP significa:";
 choices[29]= new Array();
 choices[29][0] = "Application Service Provider";
 choices[29][1] = "Active Server Pages";
 choices[29][2] = "Las 2 respuestas anteriores son correctas";
 choices[29][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[29] = choices[29][2];
 units[29] = "114";
 comments[29] = "Id Pregunta: 3031. ";


//  Id pregunta: 3047 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Qu&eacute; diferencia hay entre un servidor de ficheros y un servidor de bases de datos?:";
 choices[30]= new Array();
 choices[30][0] = "El servidor de ficheros devuelve el fichero entero y el de bases de datos s&oacute;lo el dato solicitado";
 choices[30][1] = "El servidor de ficheros es m&aacute;s barato";
 choices[30][2] = "No hay diferencia; es lo mismo";
 choices[30][3] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[30] = choices[30][3];
 units[30] = "113";
 comments[30] = "Id Pregunta: 3047. ";


//  Id pregunta: 3073 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  La arquitectura Internet en tres capas diferencia:";
 choices[31]= new Array();
 choices[31][0] = "Nivel de presentaci&oacute;n, de aplicaci&oacute;n y de datos";
 choices[31][1] = "Nivel de navegador, de aplicaci&oacute;n y de datos";
 choices[31][2] = "Nivel de cliente, de servidor  y de navegador";
 choices[31][3] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;c&rsquo; son falsas";
 answers[31] = choices[31][0];
 units[31] = "113";
 comments[31] = "Id Pregunta: 3073. ";


//  Id pregunta: 3090 Año de creación de pregunta: 2005-01-01
 questions[32]= "33)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un &ldquo;cracker&rdquo; en un servidor web, en el peor de los casos, puede afectar a:";
 choices[32]= new Array();
 choices[32][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[32][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[32][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[32][3] = "Todas las anteriores";
 answers[32] = choices[32][3];
 units[32] = "111";
 comments[32] = "Id Pregunta: 3090. ";


//  Id pregunta: 3246 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l es la relaci&oacute;n entre IMT-2000 y UMTS?:";
 choices[33]= new Array();
 choices[33][0] = "Es el mismo sistema";
 choices[33][1] = "UMTS forma parte de la familia IMT-2000";
 choices[33][2] = "IMT-2000 forma parte de la familia UMTS";
 choices[33][3] = "Son est&aacute;ndares diferentes";
 answers[33] = choices[33][1];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3246. ";


//  Id pregunta: 3294 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;Qu&eacute; hecho no es correcto en la evoluci&oacute;n del protocolo TCP/IP?:";
 choices[34]= new Array();
 choices[34][0] = "El desarrollador inicial fue ARPANET";
 choices[34][1] = "La publicaci&oacute;n fue por IAB";
 choices[34][2] = "La financiaci&oacute;n corri&oacute; a cargo de DARPA";
 choices[34][3] = "El desarrollador final fue CERN";
 answers[34] = choices[34][3];
 units[34] = "100,112";
 comments[34] = "Id Pregunta: 3294. ";


//  Id pregunta: 3551 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  En relaci&oacute;n con la prestaci&oacute;n de servicios de telecomunicaciones en Espa&ntilde;a, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[35]= new Array();
 choices[35][0] = "Est&aacute; liberalizada la provisi&oacute;n de servicios, pero no la instalaci&oacute;n de redes de telecomunicaci&oacute;n";
 choices[35][1] = "S&oacute;lo est&aacute;n liberalizadas las comunicaciones telef&oacute;nicas y el acceso a internet";
 choices[35][2] = "S&oacute;lo Telef&oacute;nica de Espa&ntilde;a, Jazztel y Ono est&aacute;n autorizadas a alquilar circuitos punto a punto";
 choices[35][3] = "La instalaci&oacute;n y explotaci&oacute;n de redes y la provisi&oacute;n de servicios de telecomunicaciones est&aacute;n liberalizados";
 answers[35] = choices[35][3];
 units[35] = "110";
 comments[35] = "Id Pregunta: 3551. ";


//  Id pregunta: 3734 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Los prestadores de servicios de la sociedad de la informaci&oacute;n, seg&uacute;n la Ley 34/2002, tienen obligaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "De comunicar a la Agencia de Protecci&oacute;n de Datos peri&oacute;dicamente los datos de tr&aacute;fico relativos a comunicaciones electr&oacute;nicas";
 choices[36][1] = "De comunicar al Registro de la Propiedad y a la Conserjer&iacute;a de Administraciones P&uacute;blicas su nombre de dominio y direcci&oacute;n de internet";
 choices[36][2] = "De mantener datos para su utilizaci&oacute;n en el marco de una investigaci&oacute;n criminal o para la salvaguarda de la seguridad p&uacute;blica y la defensa nacional sin sujeci&oacute;n a lo dispuesto en la normativa sobre protecci&oacute;n de datos personales";
 choices[36][3] = "De almacenar los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un periodo m&aacute;ximo de 12 meses";
 answers[36] = choices[36][3];
 units[36] = "110";
 comments[36] = "Id Pregunta: 3734. ";


//  Id pregunta: 3749 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Mediante la tecnolog&iacute;a EDGE se pueden llegar a conseguir velocidades de:";
 choices[37]= new Array();
 choices[37][0] = "384 kbps";
 choices[37][1] = "2 Mbps";
 choices[37][2] = "115 kbps";
 choices[37][3] = "1544 kbps";
 answers[37] = choices[37][0];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3749. ";


//  Id pregunta: 3774 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  POP e IMAP son:";
 choices[38]= new Array();
 choices[38][0] = "protocolos de entrega de correo para servidores";
 choices[38][1] = "protocolos de acceso al correo para clientes";
 choices[38][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[38][3] = "las respuestas a) y b) son correctas";
 answers[38] = choices[38][1];
 units[38] = "106";
 comments[38] = "Id Pregunta: 3774. ";


//  Id pregunta: 3812 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Seleccione la respuesta err&oacute;nea respecto de UMTS:";
 choices[39]= new Array();
 choices[39][0] = "La velocidad est&aacute;ndar de UMTS se sit&uacute;a en 384 Kbps";
 choices[39][1] = "UMTS fue iniciativa de IEEE";
 choices[39][2] = "UMTS permite acceso a redes IP";
 choices[39][3] = "El &eacute;xito de UMTS est&aacute; supeditado a la acogida de GPRS";
 answers[39] = choices[39][1];
 units[39] = "108";
 comments[39] = "Id Pregunta: 3812. ";


//  Id pregunta: 3816 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos realiza asignaci&oacute;n din&aacute;mica de direcciones IP:";
 choices[40]= new Array();
 choices[40][0] = "TCP";
 choices[40][1] = "DNS";
 choices[40][2] = "WINS";
 choices[40][3] = "DHCP";
 answers[40] = choices[40][3];
 units[40] = "113";
 comments[40] = "Id Pregunta: 3816. ";


//  Id pregunta: 3825 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  Se&ntilde;ale la opci&oacute;n que mejor indica la utilizaci&oacute;n de los cables de cuadretes:";
 choices[41]= new Array();
 choices[41][0] = "Los cables de cuadretes son indicados en transmisiones de baja frecuencia y en largas distancias";
 choices[41][1] = "Los cables de cuadretes se deben utilizar para transmisi&oacute;n de se&ntilde;ales de baja frecuencia y en distancias medias";
 choices[41][2] = "Los cables de cuadretes son indicados en transmisi&oacute;n de se&ntilde;ales de alta frecuencia y en distancias medias";
 choices[41][3] = "Los cables de cuadretes son los adecuados para transmisi&oacute;n de se&ntilde;ales de alta frecuencia y largas distancias";
 answers[41] = choices[41][2];
 units[41] = "99";
 comments[41] = "Id Pregunta: 3825. ";


//  Id pregunta: 3870 Año de creación de pregunta: 2004-01-01
 questions[42]= "43)  Qu&eacute; es falso respecto a XHTML";
 choices[42]= new Array();
 choices[42][0] = "Obliga a anidar las etiquetas adecuadamente";
 choices[42][1] = "Se adapta mejor a los navegadores m&aacute;s avanzados";
 choices[42][2] = "Obliga a encerrar entre comillas los valores de los atributos";
 choices[42][3] = "Cada documento tiene que especificar su tipo";
 answers[42] = choices[42][1];
 units[42] = "113";
 comments[42] = "Id Pregunta: 3870. Tanenbaum";


//  Id pregunta: 3886 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Qu&eacute; es Javascript7:";
 choices[43]= new Array();
 choices[43][0] = " Un compilador de Java.";
 choices[43][1] = "Un generador de applets Java";
 choices[43][2] = " Un applet Java que se ejecuta de forma embebida desde un lenguaje de script.";
 choices[43][3] = "Un lenguaje de script basado en la sintaxis de Java.";
 answers[43] = choices[43][3];
 units[43] = "114";
 comments[43] = "Id Pregunta: 3886. Junta Andaluc&iacute;a";


//  Id pregunta: 3895 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  En un sistema de cableado estructurado IEEE 802.3 en UTP, la distancia m&aacute;xima horizontal ser&aacute; de 90 metros desde la terminaci&oacute;n mec&aacute;nica del armario repartidor de planta hasta la roseta, permiti&eacute;ndose desde &eacute;sta, hasta la estaci&oacute;n de trabajo o tel&eacute;fono";
 choices[44]= new Array();
 choices[44][0] = "1,5 metros m&aacute;s.";
 choices[44][1] = "3 metros m&aacute;s.";
 choices[44][2] = "4,5 metros m&aacute;s.";
 choices[44][3] = "Una distancia tal que la longitud total de este &uacute;ltimo latiguillo y la del armario repartidor, no supere los 10 metros.";
 answers[44] = choices[44][1];
 units[44] = "99";
 comments[44] = "Id Pregunta: 3895. Junta Andaluc&iacute;a";


//  Id pregunta: 3948 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  En la clasificaci&oacute;n de las redes de comunicaci&oacute;n por su extensi&oacute;n no se incluye:";
 choices[45]= new Array();
 choices[45][0] = "MAN (Metropolitan Area Network";
 choices[45][1] = "LAN (Local Area Network)";
 choices[45][2] = "SAN (State Areal Network)";
 choices[45][3] = "WAN (Wide Area Network)";
 answers[45] = choices[45][2];
 units[45] = "113,101";
 comments[45] = "Id Pregunta: 3948. ";


//  Id pregunta: 3978 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  Se&ntilde;ale la respuesta falsa sobre el coaxial tipo &quot;thick&quot;:";
 choices[46]= new Array();
 choices[46][0] = "Utiliza un conector BNC.";
 choices[46][1] = "Su impedancia es de 50 Ohm";
 choices[46][2] = "La longitud m&aacute;xima del segmento es de 500 m.";
 choices[46][3] = "Todas son falsas";
 answers[46] = choices[46][0];
 units[46] = "99";
 comments[46] = "Id Pregunta: 3978. ";


//  Id pregunta: 3999 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l fue el servicio para el que originalmente fueron dise&ntilde;adas las redes de cable?";
 choices[47]= new Array();
 choices[47][0] = "Televisi&oacute;n";
 choices[47][1] = "Telefon&iacute;a";
 choices[47][2] = "Transporte de datos";
 choices[47][3] = "Conexi&oacute;n a Internet";
 answers[47] = choices[47][0];
 units[47] = "105";
 comments[47] = "Id Pregunta: 3999. ";


//  Id pregunta: 4011 Año de creación de pregunta: 2006-01-01
 questions[48]= "49)  La recomendaci&oacute;n ITU-T X-500 tambi&eacute;n se conoce como:";
 choices[48]= new Array();
 choices[48][0] = "ISO/IEC 9459";
 choices[48][1] = "ISO/IEC 9549";
 choices[48][2] = "ISO/IEC 9594";
 choices[48][3] = "ISO/IEC 9495";
 answers[48] = choices[48][2];
 units[48] = "106";
 comments[48] = "Id Pregunta: 4011. ";


//  Id pregunta: 4060 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  Cual de los siguientes dispositivos es m&aacute;s barato";
 choices[49]= new Array();
 choices[49][0] = "Adaptador Ethernet";
 choices[49][1] = "Adaptador Bluetooth";
 choices[49][2] = "Adaptador Wi-Fi";
 choices[49][3] = "Adaptador Wi-Max";
 answers[49] = choices[49][1];
 units[49] = "112";
 comments[49] = "Id Pregunta: 4060. ";


//  Id pregunta: 4076 Año de creación de pregunta: 2006-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?";
 choices[50]= new Array();
 choices[50][0] = "El modelo en dos capas no permite la distribuci&oacute;n en dos capas diferentes el interfaz de usuario y la l&oacute;gica de negocio";
 choices[50][1] = "El modelo en 3 capas permite situar en una capa separada los datos";
 choices[50][2] = "El modelo en 3 capas permite una mayor seguridad que el modelo en 2 capas";
 choices[50][3] = "El modelo en 2 capas permite separar en una capa separada los datos";
 answers[50] = choices[50][0];
 units[50] = "113";
 comments[50] = "Id Pregunta: 4076. ";


//  Id pregunta: 4326 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  En el &aacute;mbito de la Administraci&oacute;n de los Sistemas de Bases de Datos &iquest;Cu&aacute;l de las siguientes afirmaciones, es verdadera?.";
 choices[51]= new Array();
 choices[51][0] = "El Administrador de Datos (AD) est&aacute; mas involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 choices[51][1] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las primeras etapas del ciclo de vida (desde la planificaci&oacute;n de la base de datos hasta el dise&ntilde;o l&oacute;gico).";
 choices[51][2] = "Las responsabilidades del Administrador de la Base de Datos (ABD) se centran en el desarrollo del procedimiento y de las pol&iacute;ticas generales del sistema.";
 choices[51][3] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 answers[51] = choices[51][3];
 units[51] = "26";
 comments[51] = "Id Pregunta: 4326. ";


//  Id pregunta: 4347 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  De entre los siguientes, indique cu&aacute;l no es un sistema criptogr&aacute;fico de clave sim&eacute;trica:";
 choices[52]= new Array();
 choices[52][0] = "DES";
 choices[52][1] = "Triple DES.";
 choices[52][2] = "RSA";
 choices[52][3] = "IDEA";
 answers[52] = choices[52][2];
 units[52] = "73";
 comments[52] = "Id Pregunta: 4347. ";


//  Id pregunta: 4472 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  Seg&uacute;n M&eacute;trica V3 &iquest;Donde comenzar&iacute;a el establecimiento del plan de aseguramiento de calidad?";
 choices[53]= new Array();
 choices[53][0] = "En el estudio de viabilidad del sistema.";
 choices[53][1] = "En el proceso de dise&ntilde;o.";
 choices[53][2] = "A la hora de la aceptaci&oacute;n del sistema.";
 choices[53][3] = "Una vez finalizado el mantenimiento del sistema de informaci&oacute;n.";
 answers[53] = choices[53][0];
 units[53] = "86";
 comments[53] = "Id Pregunta: 4472. ";


//  Id pregunta: 4634 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  En M&eacute;trica V3 NO es un tipo de las denominadas Pruebas del Sistema las:";
 choices[54]= new Array();
 choices[54][0] = "pruebas funcionales";
 choices[54][1] = "pruebas de facilidad de uso";
 choices[54][2] = "pruebas de verificaci&oacute;n";
 choices[54][3] = "pruebas de volumen";
 answers[54] = choices[54][2];
 units[54] = "86";
 comments[54] = "Id Pregunta: 4634. ";


//  Id pregunta: 4665 Año de creación de pregunta: 2009-01-01
 questions[55]= "56)  HSDPA (High Speed Download Packet Access) no cumple que:";
 choices[55]= new Array();
 choices[55][0] = "Es compatible en sentido inverso con W-CDMA.";
 choices[55][1] = "Utiliza t&eacute;cnicas de redundancia incremental en la retransmisi&oacute;n de tramas.";
 choices[55][2] = "Emplea Fast Packet Scheduling, con el cual la estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datos en el siguiente marco de 2 ms.";
 choices[55][3] = "Su velocidad pico para un usuario es de 1 Mbps.";
 answers[55] = choices[55][3];
 units[55] = "108";
 comments[55] = "Id Pregunta: 4665. ";


//  Id pregunta: 4733 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  Los registros glue de una zona DNS son aquellos que:";
 choices[56]= new Array();
 choices[56][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[56][1] = " Son los registros que mantienen el espacio de nombres de la zona.";
 choices[56][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[56][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[56] = choices[56][1];
 units[56] = "112";
 comments[56] = "Id Pregunta: 4733. Examen 2006 JCYL";


//  Id pregunta: 4773 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  De acuerdo con lo establecido en la Ley 9/2014 General de Telecomunicaciones, &iquest;a cu&aacute;l de las siguientes entidades no le corresponde la competencia sancionadora en materia de telecomunicaciones?";
 choices[57]= new Array();
 choices[57][0] = "Al Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[57][1] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[57][2] = "A la Agencia Estatal de Radiocomunicaciones";
 choices[57][3] = "Todas tienen competencia sancionadora";
 answers[57] = choices[57][2];
 units[57] = "110";
 comments[57] = "Id Pregunta: 4773. ";


//  Id pregunta: 4999 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  El protocolo DHCP (&quot;Dynamic Host Configuration Protocol&quot;) permite:";
 choices[58]= new Array();
 choices[58][0] = "Resolver la direcci&oacute;n del nombre de un host.";
 choices[58][1] = "Eliminar paquetes TCP (Transmission Control Protocol)";
 choices[58][2] = "Asignar din&aacute;micamente direcciones IP";
 choices[58][3] = "Enrutar paquetes IP";
 answers[58] = choices[58][2];
 units[58] = "112";
 comments[58] = "Id Pregunta: 4999. Examen TIC A 2007";


//  Id pregunta: 5055 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Seg&uacute;n la legislaci&oacute;n vigente sobre la Propiedad Intelectual, &iquest;cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con laduraci&oacute;n de la protecci&oacute;n en la explotaci&oacute;n de los derechos de autor de un programa de ordenador, por la personatitular del derecho, es cierta?";
 choices[59]= new Array();
 choices[59][0] = "Si el autor es una persona natural, la duraci&oacute;n de la protecci&oacute;n son 35 a&ntilde;os desde la publicaci&oacute;n delprograma.";
 choices[59][1] = "Si el autor es una persona jur&iacute;dica, la duraci&oacute;n de la protecci&oacute;n ser&aacute; de 99 a&ntilde;os computados desde el 1 deenero del a&ntilde;o siguiente al de divulgaci&oacute;n del programa";
 choices[59][2] = "La protecci&oacute;n es indefinida en el tiempo, desde la creaci&oacute;n del c&oacute;digo objeto del programa";
 choices[59][3] = "Cuando el autor sea una persona natural, durar&aacute;n toda la vida del autor y setenta a&ntilde;os despu&eacute;s de sumuerte o declaraci&oacute;n de fallecimiento";
 answers[59] = choices[59][3];
 units[59] = "36";
 comments[59] = "Id Pregunta: 5055. Examen TIC A 2007";


//  Id pregunta: 5129 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  La seguridad de los algoritmos de cifrado debe basarse en:";
 choices[60]= new Array();
 choices[60][0] = "Mantener el funcionamiento de los algoritmos en secreto.";
 choices[60][1] = "Utilizar sistemas propietarios.";
 choices[60][2] = "Demostrar su resistencia desde un punto de vista te&oacute;rico y pr&aacute;ctico.";
 choices[60][3] = "Utilizar tarjeta electr&oacute;nica";
 answers[60] = choices[60][2];
 units[60] = "111";
 comments[60] = "Id Pregunta: 5129. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5167 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  Seg&uacute;n la legislaci&oacute;n aplicable, forma parte del servicio universal:";
 choices[61]= new Array();
 choices[61][0] = "Una conexi&oacute;n que deber&aacute; permitir comunicaciones en banda ancha, en los t&eacute;rminos que se definan por la normativa vigente";
 choices[61][1] = "Una conexi&oacute;n con acceso a servicios de televisi&oacute;n sobre IP";
 choices[61][2] = "Una conexi&oacute;n a telefon&iacute;a m&oacute;vil GSM";
 choices[61][3] = "Una conexi&oacute;n que permita comunicaciones de datos a velocidad suficiente para acceder de forma fucional a Internet y a otras redes de &aacute;mbito privado";
 answers[61] = choices[61][0];
 units[61] = "110";
 comments[61] = "Id Pregunta: 5167. ";


//  Id pregunta: 5210 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  En el modelo EFQM:";
 choices[62]= new Array();
 choices[62][0] = "El subcriterio 6A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[62][1] = "El subcriterio 6B tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[62][2] = "El subcriterio 7A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[62][3] = "El subcriterio 7B tiene un peso del 75% del total de los puntos del criterio 6";
 answers[62] = choices[62][1];
 units[62] = "92";
 comments[62] = "Id Pregunta: 5210. ";


//  Id pregunta: 5245 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  Un Plan de sistemas de Informaci&oacute;n y Comunicaciones se elabora (se&ntilde;ale la falsa):";
 choices[63]= new Array();
 choices[63][0] = "Se elabora a partir de los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[63][1] = "Se recogen las necesidades y requerimientos de los usuarios, en base a procesos de negocio";
 choices[63][2] = "No implica necesariamente el liderazgo del equipo directivo para su &eacute;xito";
 choices[63][3] = "Se valoran los escenarios tecnol&oacute;gicos que aporten el menor riesgo, la mayor protecci&oacute;n de inversiones y los m&aacute;ximos beneficios";
 answers[63] = choices[63][2];
 units[63] = "77";
 comments[63] = "Id Pregunta: 5245. ";


//  Id pregunta: 5288 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  En una comparativa de UMTS frente a GSM, no es cierto que:";
 choices[64]= new Array();
 choices[64][0] = "UMTS utiliza frecuencias m&aacute;s elevadas";
 choices[64][1] = "En UMTS se producen menores p&eacute;rdidas de propagaci&oacute;n";
 choices[64][2] = "En UMTS el tama&ntilde;o de las c&eacute;lulas puede ser inferior";
 choices[64][3] = "La capacidad de una portadora de W-CDMA es mayor que la de una portadora GSM";
 answers[64] = choices[64][1];
 units[64] = "108";
 comments[64] = "Id Pregunta: 5288. ";


//  Id pregunta: 5506 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  La sindicaci&oacute;n de contenidos web:";
 choices[65]= new Array();
 choices[65][0] = "Se emplea el lenguaje RSS (Really Simple Sindication)";
 choices[65][1] = "Actualmente se emplea el estandar Atom 1.0";
 choices[65][2] = "Permite recuperar contenido de un sitio web y publicarlo en otro";
 choices[65][3] = "Todas son correctas";
 answers[65] = choices[65][3];
 units[65] = "69";
 comments[65] = "Id Pregunta: 5506. ";


//  Id pregunta: 5544 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Se&ntilde;ale la respuesta correcta respecto a la entrada en vigor de la La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos:";
 choices[66]= new Array();
 choices[66][0] = "A partir del d&iacute;a siguiente a su publicaci&oacute;n en el BOE.";
 choices[66][1] = "Los derechos reconocidos en el art 6 de la ley 11/2007, podr&aacute;n ejercerse respecto de los procedimientos y actuaciones adaptados a la misma, desde la entrada en vigor de dicha ley.";
 choices[66][2] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado y para los Organismos Publicos  vinculados o dependientes de &eacute;sta, los derechos reconocidos en el art 6 de dicha ley, podr&aacute;n ejercerse respecto a la totalidad de procedimientos y actuaciones de su competencia, a partir del 31-12-2009.";
 choices[66][3] = "Todas las anteriores son correctas.";
 answers[66] = choices[66][3];
 units[66] = "43";
 comments[66] = "Id Pregunta: 5544. ";


//  Id pregunta: 5614 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  La especificaci&oacute;n PKCS que define el formato de las claves privadas es:";
 choices[67]= new Array();
 choices[67][0] = "PKCS 1";
 choices[67][1] = "PKCS 5";
 choices[67][2] = "PKCS 8";
 choices[67][3] = "PKCS 6";
 answers[67] = choices[67][2];
 units[67] = "111";
 comments[67] = "Id Pregunta: 5614. ";


//  Id pregunta: 5668 Año de creación de pregunta: 2003-01-01
 questions[68]= "69)  &iquest;Cual de las siguientes empresas no est&aacute; entre las que desarrollaron originalmente el protocolo WS-Security?";
 choices[68]= new Array();
 choices[68][0] = "IBM";
 choices[68][1] = "Microsoft";
 choices[68][2] = "VeriSign";
 choices[68][3] = "SUN";
 answers[68] = choices[68][3];
 units[68] = "113";
 comments[68] = "Id Pregunta: 5668. ";


//  Id pregunta: 5762 Año de creación de pregunta: 2001-01-01
 questions[69]= "70)  La Tasa Interna de Retorno (TIR) de una inversi&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Seg&uacute;n el criterio del TIR, una inversi&oacute;n ser&aacute; efectuable cuando su rentabilidad esperada sea superior a la rentabilidad exigida";
 choices[69][1] = "Es el valor del tipo de descuento que hace que el Valor Actual Neto (VAN) de una inversi&oacute;n sea igual a cero.";
 choices[69][2] = "El TIR indica la rentabilidad relativa, mientras que el VAN indica la rentabilidad absoluta de la inversi&oacute;n en unidades monetarias";
 choices[69][3] = "Todas las anteriores son ciertas";
 answers[69] = choices[69][3];
 units[69] = "38";
 comments[69] = "Id Pregunta: 5762. ";


//  Id pregunta: 5793 Año de creación de pregunta: 2009-01-01
 questions[70]= "71)  De acuerdo con la Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, se&ntilde;ale cu&aacute;l de las siguientes definiciones es FALSA:";
 choices[70]= new Array();
 choices[70][0] = "Actuaci&oacute;n administrativa automatizada: Actuaci&oacute;n administrativa producida por un Sistema de informaci&oacute;n adecuadamente programado sin necesidad de intervenci&oacute;n de una persona f&iacute;sica en cada caso singular. Incluye la producci&oacute;n de actos de tr&aacute;mite o resolutorios de procedimientos, as&iacute; como de meros actos de comunicaci&oacute;n.";
 choices[70][1] = "Aplicaci&oacute;n: Programa o conjunto de programas cuyo objeto es la resoluci&oacute;n de un problema mediante el uso de inform&aacute;tica.";
 choices[70][2] = "Aplicaci&oacute;n de fuentes abiertas: Aquella que se distribuye con una licencia que permite la libertad de ejecutarla, de conocer el c&oacute;digo fuente, de modificarla o mejorarla y de redistribuir copias a otros";
 choices[70][3] = "Autenticaci&oacute;n: Capacidad de los sistemas de informaci&oacute;n, y por ende de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 answers[70] = choices[70][3];
 units[70] = "43";
 comments[70] = "Id Pregunta: 5793. MAP 2008 A2";


//  Id pregunta: 5824 Año de creación de pregunta: 2009-01-01
 questions[71]= "72)  Indique cu&aacute;l de los siguientes criterios NO es correcto de acuerdo con el Modelo EFQM de Excelencia";
 choices[71]= new Array();
 choices[71][0] = "Colaboradores y recursos";
 choices[71][1] = "Resultados";
 choices[71][2] = "Resultados en la sociedad";
 choices[71][3] = "Viabilidad econ&oacute;mica";
 answers[71] = choices[71][3];
 units[71] = "92";
 comments[71] = "Id Pregunta: 5824. MAP 2008 A1";


//  Id pregunta: 5894 Año de creación de pregunta: 2009-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no corresponde a una tecnolog&iacute;a est&aacute;ndar Java?";
 choices[72]= new Array();
 choices[72][0] = "JSTL";
 choices[72][1] = "JavaScript";
 choices[72][2] = "JNDI";
 choices[72][3] = "JavaCard";
 answers[72] = choices[72][1];
 units[72] = "60";
 comments[72] = "Id Pregunta: 5894. ";


//  Id pregunta: 5951 Año de creación de pregunta: 2009-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es SSO?";
 choices[73]= new Array();
 choices[73][0] = "Es un Sistema Operativo para proporcionar la autorizaci&oacute;n de utilizaci&oacute;n de recursos basado en certificados de usuario.";
 choices[73][1] = "Es un m&eacute;todo de control de acceso que permite a un usuario validarse una &uacute;nica vez y tener acceso a diferentes recursos sin tener que volver a introducir sus credenciales";
 choices[73][2] = "Es una plataforma que almacena todas las contrase&ntilde;as del usuario para que &eacute;ste no tenga que teclearlas cada vez que accede a las distintas aplicaciones";
 choices[73][3] = "Es la plataforma PKI que emite certificados de empleado p&uacute;blico para la AGE";
 answers[73] = choices[73][1];
 units[73] = "118";
 comments[73] = "Id Pregunta: 5951. ";


//  Id pregunta: 6094 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, pueden identificarse 4 tipos de mantenimiento de sistemas de informaci&oacute;n, entre los que NO se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "Mantenimiento adaptativo.";
 choices[74][1] = "Mantenimiento preventivo.";
 choices[74][2] = "Mantenimiento evolutivo.";
 choices[74][3] = "Mantenimiento correctivo.";
 answers[74] = choices[74][1];
 units[74] = "86";
 comments[74] = "Id Pregunta: 6094. TIC A 2009";


//  Id pregunta: 6124 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[75]= new Array();
 choices[75][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[75][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[75][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[75][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros";
 answers[75] = choices[75][3];
 units[75] = "86";
 comments[75] = "Id Pregunta: 6124. TIC A 2009";


//  Id pregunta: 6177 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Indique la afirmaci&oacute;n falsa:";
 choices[76]= new Array();
 choices[76][0] = "HTTP es un protocolo sin estado.";
 choices[76][1] = "HTTP es un protocolo estandarizado por IETF.";
 choices[76][2] = "HTTP es un protocolo estandarizado por W3C.";
 choices[76][3] = "La especificaci&oacute;n del protocolo HTTP es la RFC 2616.";
 answers[76] = choices[76][2];
 units[76] = "69";
 comments[76] = "Id Pregunta: 6177. ";


//  Id pregunta: 6179 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  Una ventaja del procesado de documentos XML usando SAX (frente a DOM) es:";
 choices[77]= new Array();
 choices[77][0] = "Es posible la modificaci&oacute;n de los datos en memoria.";
 choices[77][1] = "Procesa el documento completo.";
 choices[77][2] = "En el procesado de documentos grandes consume menos memoria.";
 choices[77][3] = "Todas las anteriores son ventajas de SAX frente a DOM.";
 answers[77] = choices[77][2];
 units[77] = "69";
 comments[77] = "Id Pregunta: 6179. ";


//  Id pregunta: 6389 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  &iquest;C&uacute;al de los siguientes no es un contenido m&iacute;nimo de una sede electr&oacute;nica?";
 choices[78]= new Array();
 choices[78][0] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[78][1] = "Identificaci&oacute;n de la sede, as&iacute; como del &oacute;rgano u &oacute;rganos titulares y de los responsables de la gesti&oacute;n y de los servicios puestos a disposici&oacute;n en la misma y, en su caso, de las subsedes de ella derivadas.";
 choices[78][2] = "Informaci&oacute;n necesaria para la correcta utilizaci&oacute;n de la sede incluyendo el mapa de la sede electr&oacute;nica o informaci&oacute;n equivalente, con especificaci&oacute;n de la estructura de navegaci&oacute;n y las distintas secciones disponibles, as&iacute; como la relacionada con propiedad intelectual.";
 choices[78][3] = "Todos son contenidos m&iacute;nimos de una sede electr&oacute;nica.";
 answers[78] = choices[78][3];
 units[78] = "43";
 comments[78] = "Id Pregunta: 6389. Art&iacute;culo 6 RD 1671/2009";


//  Id pregunta: 6406 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  En relaci&oacute;n a l&iacute;mites a los derechos exclusivos de la explotaci&oacute;n de un programa de ordenador por parte de quien sea su titular, establecidos en Ley de Propiedad Intelectual, se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[79]= new Array();
 choices[79][0] = "La realizaci&oacute;n de una copia de seguridad por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse por contrato en cuanto resulte necesaria para dicha utilizaci&oacute;n.";
 choices[79][1] = "La realizaci&oacute;n de copias privadas por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse.";
 choices[79][2] = "La realizaci&oacute;n de copias de seguridad por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse por contrato en cuanto resulten necesarias para dicha utilizaci&oacute;n.";
 choices[79][3] = "La realizaci&oacute;n de una copia privada por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse.";
 answers[79] = choices[79][0];
 units[79] = "36";
 comments[79] = "Id Pregunta: 6406. Art&iacute;culo 100 RDL 1/1996";


//  Id pregunta: 6468 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  Seg&uacute;n M&eacute;trica V3 las pruebas de seguridad, rendimiento y operaci&oacute;n se encuentran englobadas dentro del conjunto de pruebas de:";
 choices[80]= new Array();
 choices[80][0] = "Aceptaci&oacute;n";
 choices[80][1] = "Regresi&oacute;n";
 choices[80][2] = "Integraci&oacute;n";
 choices[80][3] = "Implantaci&oacute;n";
 answers[80] = choices[80][3];
 units[80] = "86";
 comments[80] = "Id Pregunta: 6468. Castilla La Mancha 2009";


//  Id pregunta: 6476 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  Indique la respuesta incorrecta sobre Java EE 5:";
 choices[81]= new Array();
 choices[81][0] = "Servlets, JavaServer Faces, JavaServer Pages y Applets son componentes web.";
 choices[81][1] = "Java EE 5 es un modelo multicapa distribuido, que contempla: capa cliente, capa web, capa de negocio y capa de sistemas de informaci&oacute;n empresarial";
 choices[81][2] = "El servidor Java EE proporciona el contenedor EJB";
 choices[81][3] = "La plataforma contempla dos tipos de clientes: el cliente basado en navegador (o cliente ligero) y el cliente de aplicaci&oacute;n (o cliente pesado)";
 answers[81] = choices[81][0];
 units[81] = "116";
 comments[81] = "Id Pregunta: 6476. Castilla La Mancha 2009";


//  Id pregunta: 6516 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  El c&oacute;digo intermedio que se ejecuta en una m&aacute;quina virtual java (JVM) se denomina:";
 choices[82]= new Array();
 choices[82][0] = "bytecode";
 choices[82][1] = "class";
 choices[82][2] = "jar";
 choices[82][3] = "applet";
 answers[82] = choices[82][0];
 units[82] = "60";
 comments[82] = "Id Pregunta: 6516. ";


//  Id pregunta: 6536 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  La gu&iacute;a de servicios ISO 9004 sigue un enfoque basado en procesos, como";
 choices[83]= new Array();
 choices[83][0] = "Responsabilidad de la direcci&oacute;n";
 choices[83][1] = "Realizaci&oacute;n del producto";
 choices[83][2] = "Medici&oacute;n, an&aacute;lisis y mejora";
 choices[83][3] = "Todas las respuestas anteriores son correctas";
 answers[83] = choices[83][3];
 units[83] = "92";
 comments[83] = "Id Pregunta: 6536. ";


//  Id pregunta: 7151 Año de creación de pregunta: 2010-01-01
 questions[84]= "85)  En la guerra de formatos sucesores del DVD, se ha impuesto el Blue-Ray, &iquest;cu&aacute;l es su capacidad de almacenamiento?";
 choices[84]= new Array();
 choices[84][0] = "40 GB para discos de una capa y 85 GB para discos de dos capas";
 choices[84][1] = "20 GB para discos de una capa y 100 GB para discos multicapas";
 choices[84][2] = "25 GB para discos de una capa y 50 GB para discos de dos capas";
 choices[84][3] = "30 GB para discos de una capa y 60 GB para discos de dos capas";
 answers[84] = choices[84][2];
 units[84] = "48";
 comments[84] = "Id Pregunta: 7151. Examen TIC B 2009";


//  Id pregunta: 7244 Año de creación de pregunta: 2010-01-01
 questions[85]= "86)  Cu&aacute;les de las siguientes afirmaciones es INCORRECTA sobre la fibra &oacute;ptica:";
 choices[85]= new Array();
 choices[85][0] = "No es posible acceder a los datos transmitidos por m&eacute;todos no destructivos";
 choices[85][1] = "Puede transmitir electricidad para alimentar repetidores intermedios";
 choices[85][2] = "Es inmune a las interferencias electromagn&eacute;ticas";
 choices[85][3] = "Las fibras son fr&aacute;giles y sus empalmes son dif&iacute;ciles";
 answers[85] = choices[85][1];
 units[85] = "99";
 comments[85] = "Id Pregunta: 7244. Examen TIC B 2009";


//  Id pregunta: 7265 Año de creación de pregunta: 2010-01-01
 questions[86]= "87)  En telefon&iacute;a m&oacute;vil, la tecnolog&iacute;a GSM utiliza las siguientes bases de datos de usuarios";
 choices[86]= new Array();
 choices[86][0] = "HLR y VLR";
 choices[86][1] = "VLR y MSC";
 choices[86][2] = "NMC y OMC";
 choices[86][3] = "AUC y NMC";
 answers[86] = choices[86][0];
 units[86] = "108";
 comments[86] = "Id Pregunta: 7265. Examen TIC B 2009";


//  Id pregunta: 8276 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  El Defensor del Usuario de la Administraci&oacute;n Electr&oacute;nica es nombrado por:";
 choices[87]= new Array();
 choices[87][0] = "El Consejo de Ministros.";
 choices[87][1] = "El Ministro de la Presidencia.";
 choices[87][2] = "El Ministro de Industria, Comercio y Turismo.";
 choices[87][3] = "El Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[87] = choices[87][0];
 units[87] = "43";
 comments[87] = "Id Pregunta: 8276. Examen TIC A1 2010";


//  Id pregunta: 8306 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  EI ataque conocido como &quot;ARP Spoofing&quot;: ";
 choices[88]= new Array();
 choices[88][0] = "Se impide con el uso de conmutadores (switches) en vez de concentradores (hubs).";
 choices[88][1] = "Se efect&uacute;a en el nivel 3 de OSI ya que falsifica direcciones IPs. ";
 choices[88][2] = "Sirve para interceptar tr&aacute;fico en una red de &aacute;rea local (LAN), pero no para modificarlo. ";
 choices[88][3] = "Puede impedirse mediante DHCP snooping.";
 answers[88] = choices[88][3];
 units[88] = "111";
 comments[88] = "Id Pregunta: 8306. Examen TIC A2 2010";


//  Id pregunta: 8337 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes tareas NO se engloba, en M&eacute;trica v3, en la actividad de Planificaci&oacute;n de la Interfaz de Gesti&oacute;n de Proyectos?";
 choices[89]= new Array();
 choices[89][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[89][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[89][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios. ";
 choices[89][3] = "Planificaci&oacute;n Detallada de las pruebas del Sistema. ";
 answers[89] = choices[89][3];
 units[89] = "86";
 comments[89] = "Id Pregunta: 8337. Examen TIC A2 2010";


//  Id pregunta: 8514 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA: ";
 choices[90]= new Array();
 choices[90][0] = "Lluirex - Valencia";
 choices[90][1] = "MAX - Madrid";
 choices[90][2] = "LinKat - Catalu&ntilde;a";
 choices[90][3] = "mEDUxa - Baleares";
 answers[90] = choices[90][3];
 units[90] = "61";
 comments[90] = "Id Pregunta: 8514. Examen TIC A2 2010";


//  Id pregunta: 8516 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[91]= new Array();
 choices[91][0] = "Diagrama de Clases.";
 choices[91][1] = "Flujograma de Sistemas.";
 choices[91][2] = "Flujograma de Programas.";
 choices[91][3] = "Diagrama de Flujo de Datos.";
 answers[91] = choices[91][2];
 units[91] = "86";
 comments[91] = "Id Pregunta: 8516. Examen TIC A2 2010 interna";


//  Id pregunta: 8654 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  Seg&uacute;n M&eacute;trica v3 &iquest;cu&aacute;l de las siguientes NO es un tipo de relaci&oacute;n del diagrama de clases?";
 choices[92]= new Array();
 choices[92][0] = "Inclusi&oacute;n";
 choices[92][1] = "Agregaci&oacute;n";
 choices[92][2] = "Herencia";
 choices[92][3] = "Composici&oacute;n";
 answers[92] = choices[92][0];
 units[92] = "86";
 comments[92] = "Id Pregunta: 8654. Examen TIC A2 2010 interna";


//  Id pregunta: 8802 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  &iquest;Qu&eacute; es un Scriptlet JSP?";
 choices[93]= new Array();
 choices[93][0] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;&mdash; y --&gt;";
 choices[93][1] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;* y *&gt;";
 choices[93][2] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;+ y +&gt;";
 choices[93][3] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;% y %&gt;";
 answers[93] = choices[93][3];
 units[93] = "116";
 comments[93] = "Id Pregunta: 8802. Examen UPM A2 2011";


//  Id pregunta: 8846 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  &iquest;Con qu&eacute; campo de la inform&aacute;tica se relaciona SHA-2?";
 choices[94]= new Array();
 choices[94][0] = "Data Mining";
 choices[94][1] = "La Criptograf&iacute;a";
 choices[94][2] = " El e-learning";
 choices[94][3] = "La gesti&oacute;n de versiones";
 answers[94] = choices[94][1];
 units[94] = "73,74";
 comments[94] = "Id Pregunta: 8846. Examen UC3M 2010";


//  Id pregunta: 8926 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  Es una caracter&iacute;stica de la fibra &oacute;ptica:";
 choices[95]= new Array();
 choices[95][0] = "Un ancho de banda de 800Mhz.";
 choices[95][1] = "Gran resistencia a interferencias y ruido.";
 choices[95][2] = "El bajo coste de su instalaci&oacute;n.";
 choices[95][3] = "La facilidad de su instalaci&oacute;n";
 answers[95] = choices[95][1];
 units[95] = "99";
 comments[95] = "Id Pregunta: 8926. Operador Ayto. Madrid 2010";


//  Id pregunta: 9013 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  A la hora de planificar las frecuencias para un radioenlace de dos vanos A-B y B-C en la banda de 13 GHz:";
 choices[96]= new Array();
 choices[96][0] = "Si en el punto intermedio B se recibe en la semibanda baja, en B se debe transmitir en la semibanda alta.";
 choices[96][1] = "Para un sentido de transmisi&oacute;n dado, se deben emplear la misma semibanda en los dos vanos A-B y B-C.";
 choices[96][2] = "Siempre se debe respetar el sentido (transmisi&oacute;n o recepci&oacute;n) asignado a cada semibanda en el CNAF para la banda de 1GHz.";
 choices[96][3] = "Ninguna de las anteriores";
 answers[96] = choices[96][0];
 units[96] = "108";
 comments[96] = "Id Pregunta: 9013. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9066 Año de creación de pregunta: 2029-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el expediente electr&oacute;nico es false seg&uacute;n el RD 1671/2009?";
 choices[97]= new Array();
 choices[97][0] = "Los expedientes electr&oacute;nicos podr&aacute;n incluir otros expedientes electr&oacute;nicos";
 choices[97][1] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico, firmado electr&oacute;nicamente mediante firma electr&oacute;nica avanzada";
 choices[97][2] = "La estructura y formato de los expedientes de los expedientes electr&oacute;nicos se ajustar&aacute;n a lo que diga el Esquema Nacional de Interoperabilidad";
 choices[97][3] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n";
 answers[97] = choices[97][1];
 units[97] = "43";
 comments[97] = "Id Pregunta: 9066. ";


//  Id pregunta: 9094 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[98]= new Array();
 choices[98][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[98][1] = "Si, como obra literaria.";
 choices[98][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[98][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[98] = choices[98][3];
 units[98] = "36";
 comments[98] = "Id Pregunta: 9094. ";


//  Id pregunta: 9577 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[99]= new Array();
 choices[99][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa";
 choices[99][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[99][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[99][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 9577. Examen TIC A1 2011";


