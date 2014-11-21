/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 191 Año de creación de pregunta: 2004-01-01
 questions[0]= "1)  En relaci&oacute;n a la protecci&oacute;n jur&iacute;dica de los programas de ordenador se&ntilde;arlar la respuesta falsa:";
 choices[0]= new Array();
 choices[0][0] = "Est&aacute; protegidos mediante los derechos de autor cualquier forma de expresi&oacute;n de un programa de ordenador, salvo aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 choices[0][1] = "Est&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se base un programa, incluidos los que sirven de fundamento a sus interfaces";
 choices[0][2] = "La primera venta de una copia de un programa por el titular de los derechos o con su consentimiento, agotar&aacute; el derecho de distribuci&oacute;n de dicha copia";
 choices[0][3] = "La duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute;: para una persona natural toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte; para una persona jur&iacute;dica 70 a&ntilde;os";
 answers[0] = choices[0][1];
 units[0] = "36";
 comments[0] = "Id Pregunta: 191. Similar a examen TIC SS A 2003";


//  Id pregunta: 703 Año de creación de pregunta: 2004-01-01
 questions[1]= "2)  Un documento XML con DTD es:";
 choices[1]= new Array();
 choices[1][0] = "v&aacute;lido";
 choices[1][1] = "inv&aacute;lido";
 choices[1][2] = "bien formado";
 choices[1][3] = "conformado";
 answers[1] = choices[1][0];
 units[1] = "69";
 comments[1] = "Id Pregunta: 703. Similar a examen TIC MAP A 2004";


//  Id pregunta: 998 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  El acr&oacute;nimo XML corresponde a:";
 choices[2]= new Array();
 choices[2][0] = "Extensible Markup Language";
 choices[2][1] = "Extended Markup Language";
 choices[2][2] = "Expressions Markup Language";
 choices[2][3] = "Extension Markup Language";
 answers[2] = choices[2][0];
 units[2] = "69";
 comments[2] = "Id Pregunta: 998. ";


//  Id pregunta: 1116 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En las m&aacute;quinas con tecnolog&iacute;a RISC:";
 choices[3]= new Array();
 choices[3][0] = "El n&uacute;mero de instrucciones es muy elevado";
 choices[3][1] = "Se emplea la microprogramaci&oacute;n";
 choices[3][2] = "No se emplea la microprogramaci&oacute;n";
 choices[3][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[3] = choices[3][2];
 units[3] = "46";
 comments[3] = "Id Pregunta: 1116. ";


//  Id pregunta: 1200 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Javascript:";
 choices[4]= new Array();
 choices[4][0] = "Es una evoluci&oacute;n de Java, dise&ntilde;ada por Sun Microsystems, como lenguaje de script para el cliente";
 choices[4][1] = "Permite el acceso a bases de datos en el lado del cliente";
 choices[4][2] = "Es una evoluci&oacute;n de LiveScript";
 choices[4][3] = "Se utiliza para programar Applets en el cliente";
 answers[4] = choices[4][2];
 units[4] = "114,116";
 comments[4] = "Id Pregunta: 1200. ";


//  Id pregunta: 1405 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Un sistema SUN:";
 choices[5]= new Array();
 choices[5][0] = "Puede utilizar procesadores Sparc";
 choices[5][1] = "Puede utilizar procesadores MIPS";
 choices[5][2] = "Puede utilizar procesadores Intel";
 choices[5][3] = "A y C son ciertas";
 answers[5] = choices[5][3];
 units[5] = "48";
 comments[5] = "Id Pregunta: 1405. ";


//  Id pregunta: 1494 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; se entiende por audioconferencia?:";
 choices[6]= new Array();
 choices[6][0] = "Servicio que permite a m&aacute;s de dos usuarios participar simult&aacute;neamente en una &uacute;nica conversaci&oacute;n";
 choices[6][1] = "Servicio que permite a un usuario telef&oacute;nico depositar mensajes de voz en un audiobuz&oacute;n";
 choices[6][2] = "Servicio que suministra una informaci&oacute;n grabada de tipo gen&eacute;rico";
 choices[6][3] = "Servicio de telefon&iacute;a m&oacute;vil en grupo cerrado de usuarios";
 answers[6] = choices[6][0];
 units[6] = "117";
 comments[6] = "Id Pregunta: 1494. ";


//  Id pregunta: 1532 Año de creación de pregunta: 2003-01-01
 questions[7]= "8)  &iquest; Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux ?";
 choices[7]= new Array();
 choices[7][0] = "Debian";
 choices[7][1] = "Gentoo";
 choices[7][2] = "Max";
 choices[7][3] = "FreeBSD";
 answers[7] = choices[7][3];
 units[7] = "61,62";
 comments[7] = "Id Pregunta: 1532. ";


//  Id pregunta: 1554 Año de creación de pregunta: 2003-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no est&aacute; asociada al concepto de Software Libre?:";
 choices[8]= new Array();
 choices[8][0] = "Redistribuci&oacute;n libre.";
 choices[8][1] = "Acceso al c&oacute;digo fuente del programa.";
 choices[8][2] = "Derecho de modificaci&oacute;n.";
 choices[8][3] = "Distribuci&oacute;n libre del programa pero no de la licencia.";
 answers[8] = choices[8][3];
 units[8] = "61";
 comments[8] = "Id Pregunta: 1554. Junta Andaluc&iacute;a";


//  Id pregunta: 1566 Año de creación de pregunta: 2003-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[9]= new Array();
 choices[9][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[9][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[9][2] = " Dos mensajes parecidos producen huellas digitales diferentes";
 choices[9][3] = " La funci&oacute;n hash es reversible";
 answers[9] = choices[9][3];
 units[9] = "73";
 comments[9] = "Id Pregunta: 1566. ";


//  Id pregunta: 1626 Año de creación de pregunta: 2003-01-01
 questions[10]= "11)  Si estamos hablando de GNOME, nos referimos a:";
 choices[10]= new Array();
 choices[10][0] = "Proyecto para generar un nuevo sistema operativo.";
 choices[10][1] = "Un proyecto para crear un entorno de escritorio sobre GNU/ LINUX.";
 choices[10][2] = "Un proyecto ofim&aacute;tico multiplataforma.";
 choices[10][3] = "Un cliente de mensajer&iacute;a instant&aacute;nea.";
 answers[10] = choices[10][1];
 units[10] = "62";
 comments[10] = "Id Pregunta: 1626. Junta Andaluc&iacute;a";


//  Id pregunta: 1648 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones de proyectos java open source es correcta?";
 choices[11]= new Array();
 choices[11][0] = "JBoss es un contenedor de servlets y Tomcat es un servidor de aplicaciones";
 choices[11][1] = "Struts es un framework de programaci&oacute;n orientada a aspectos";
 choices[11][2] = "Lucene es un motor de b&uacute;squeda";
 choices[11][3] = "Ninguna de las anteriores es cierta";
 answers[11] = choices[11][2];
 units[11] = "62";
 comments[11] = "Id Pregunta: 1648. ";


//  Id pregunta: 1783 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  En el proyecto RHODAS del MAP, para la renovaci&oacute;n del parque ofim&aacute;tico del ministerio mediante puestos de trabajo equipados con software libre, indique qu&eacute; entorno de escritorio fue elegido en la arquitectura de referencia:";
 choices[12]= new Array();
 choices[12][0] = "KDE";
 choices[12][1] = "Wine";
 choices[12][2] = "GNOME";
 choices[12][3] = "Konkeror";
 answers[12] = choices[12][0];
 units[12] = "61,62";
 comments[12] = "Id Pregunta: 1783. ";


//  Id pregunta: 1833 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  Se&ntilde;alar la respuesta falsa";
 choices[13]= new Array();
 choices[13][0] = "HTML es un subconjunto de SGML";
 choices[13][1] = "XHTML es un subconjunto de XML";
 choices[13][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[13][3] = "RTF es un subconjunto de SGML";
 answers[13] = choices[13][2];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1833. ";


//  Id pregunta: 1861 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale la correcta:";
 choices[14]= new Array();
 choices[14][0] = "El protocolo X500 es un est&aacute;ndar de la IETF";
 choices[14][1] = "El  est&aacute;ndar de certificados digitales X509v3 introdujo el concepto de extensi&oacute;n";
 choices[14][2] = "El protocolo de la ITU LDAP dispone su informaci&oacute;n relacionada jer&aacute;rquicamente.";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][1];
 units[14] = "73";
 comments[14] = "Id Pregunta: 1861. ";


//  Id pregunta: 2039 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  Hablar de un modelo de gesti&oacute;n que basado en un sistema empresarial orientado hacia la calidad persigue la satisfacci&oacute;n de todos aquellos entes que se relacionan con la empresa u organizaci&oacute;n, supone hablar de:";
 choices[15]= new Array();
 choices[15][0] = "Las normas ISO 9000";
 choices[15][1] = "Calidad Total";
 choices[15][2] = "Plan General de Garant&iacute;a de Calidad";
 choices[15][3] = "Todos los aspectos anteriores";
 answers[15] = choices[15][1];
 units[15] = "92";
 comments[15] = "Id Pregunta: 2039. ";


//  Id pregunta: 2040 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  El conjunto de actividades que es necesario realizar para asegurar que el producto software responde a las necesidades expresadas por el usuario se denomina:";
 choices[16]= new Array();
 choices[16][0] = "Control de calidad";
 choices[16][1] = "Modelo de calidad";
 choices[16][2] = "Garant&iacute;a de calidad";
 choices[16][3] = "Plan General de Calidad";
 answers[16] = choices[16][2];
 units[16] = "92";
 comments[16] = "Id Pregunta: 2040. ";


//  Id pregunta: 2140 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes pruebas se contemplan en M&eacute;trica V3?:";
 choices[17]= new Array();
 choices[17][0] = "Pruebas de regresi&oacute;n";
 choices[17][1] = "Pruebas de integraci&oacute;n ";
 choices[17][2] = "Pruebas del sistema";
 choices[17][3] = "Todas las anteriores";
 answers[17] = choices[17][3];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2140. ";


//  Id pregunta: 2205 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Qu&eacute; actividad del an&aacute;lisis del sistema de informaci&oacute;n solo se realiza en el caso de an&aacute;lisis orientado a objetos?:";
 choices[18]= new Array();
 choices[18][0] = "ASI 6 (Elaboraci&oacute;n del modelo de datos)";
 choices[18][1] = "ASI 8 (Definici&oacute;n de interfaces de usuario)";
 choices[18][2] = "ASI 4 (An&aacute;lisis de los casos de uso)";
 choices[18][3] = "ASI 3 (Identificaci&oacute;n de subsistemas de an&aacute;lisis)";
 answers[18] = choices[18][2];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2205. ";


//  Id pregunta: 2621 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;C&uacute;al NO es un factor de McCall de revisi&oacute;n?";
 choices[19]= new Array();
 choices[19][0] = "Flexibilidad";
 choices[19][1] = "Usabilidad ";
 choices[19][2] = "Verificabilidad";
 choices[19][3] = "Mantenibilidad";
 answers[19] = choices[19][1];
 units[19] = "87,88,92";
 comments[19] = "Id Pregunta: 2621. ";


//  Id pregunta: 2628 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;En q&uacute;e proceso de M&eacute;trica V3 se llevaria a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procesamientos de migraci&oacute;n y carga inicial de datos?";
 choices[20]= new Array();
 choices[20][0] = "CSI.";
 choices[20][1] = "DSI";
 choices[20][2] = "IAS.";
 choices[20][3] = "DCS.";
 answers[20] = choices[20][0];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2628. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2730 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del Plan de Sistemas de Informaci&oacute;n en una organizaci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "Establecer pol&iacute;ticas y objetivos coherentes";
 choices[21][1] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[21][2] = "Seleccionar los suministradores de las distintos elementos";
 choices[21][3] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento y los resultados esperados";
 answers[21] = choices[21][2];
 units[21] = "77";
 comments[21] = "Id Pregunta: 2730. ";


//  Id pregunta: 2793 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  En la planificaci&oacute;n de SI, qu&eacute; producto de los siguientes no est&aacute; contemplado en M&eacute;trica V3";
 choices[22]= new Array();
 choices[22][0] = "Plan de proyectos";
 choices[22][1] = "Modelo de informaci&oacute;n";
 choices[22][2] = "Modelo de Sistemas de informaci&oacute;n";
 choices[22][3] = "Modelo de arquitectura";
 answers[22] = choices[22][3];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2793. ";


//  Id pregunta: 2796 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Qu&eacute; tipo de actividades contempla M&eacute;trica v3 en la interfaz de seguridad";
 choices[23]= new Array();
 choices[23][0] = "Seguridad intr&iacute;nseca del sistema";
 choices[23][1] = "seguridad del proceso de desarrollo";
 choices[23][2] = "Formaci&oacute;n en materia de seguridad";
 choices[23][3] = "Todas son correctas";
 answers[23] = choices[23][3];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2796. ";


//  Id pregunta: 3001 Año de creación de pregunta: 2004-01-01
 questions[24]= "25)  De los siguientes &iquest;Cu&aacute;l es un componente b&aacute;sico de un cortafuegos?";
 choices[24]= new Array();
 choices[24][0] = "El balanceados de carga (o asignador de tareas) que permite la ampliaci&oacute;n horizontal del &quot;basti&oacute;n&quot; mediante la asignaci&oacute;n de tramas IP entre varias subredes o m&aacute;quinas configuradas en forma id&eacute;ntica.";
 choices[24][1] = "Los servicios proxy, entendidos como aplicaciones SW para reenviar o bloquear conexiones a servicios como finger, telnet o ftp";
 choices[24][2] = "el sistema operativo LINUX en sus distribuciones seguras";
 choices[24][3] = "La monitorizaci&oacute;n de servicios de red tipo SMTP, POP3, HTTP, NNTP, PING,&hellip;,  a efectos de disponibilidad y rendimiento (performance)";
 answers[24] = choices[24][1];
 units[24] = "111";
 comments[24] = "Id Pregunta: 3001. ";


//  Id pregunta: 3211 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  El entorno que utiliza un teletrabajador para conectarse con su empresa a trav&eacute;s de internet se denomina:";
 choices[25]= new Array();
 choices[25][0] = "intranet";
 choices[25][1] = "collaboration-net";
 choices[25][2] = "teleworking-net";
 choices[25][3] = "extranet";
 answers[25] = choices[25][3];
 units[25] = "113";
 comments[25] = "Id Pregunta: 3211. ";


//  Id pregunta: 3278 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Qu&eacute; define la norma X.400?:";
 choices[26]= new Array();
 choices[26][0] = "Sistema de tratamiento de alarmas";
 choices[26][1] = "Sistema de tratamiento de mensajes";
 choices[26][2] = "Sistema de transferencia de ficheros";
 choices[26][3] = "Sistema de gesti&oacute;n de red";
 answers[26] = choices[26][1];
 units[26] = "106";
 comments[26] = "Id Pregunta: 3278. ";


//  Id pregunta: 3377 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  El est&aacute;ndar X.25 usa, a nivel de enlace, el protocolo:";
 choices[27]= new Array();
 choices[27][0] = "SDLC";
 choices[27][1] = "LAP-B";
 choices[27][2] = "Ethernet";
 choices[27][3] = "SAP";
 answers[27] = choices[27][1];
 units[27] = "100, 101, 109";
 comments[27] = "Id Pregunta: 3377. ";


//  Id pregunta: 3380 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  El localizador de recursos, URL, tiene como formato general:";
 choices[28]= new Array();
 choices[28][0] = "m&eacute;todo:/servidor[:puerto]//directorio/fichero";
 choices[28][1] = "servidor://m&eacute;todo[:puerto]//directorio/fichero";
 choices[28][2] = "m&eacute;todo://servidor[:puerto]/directorio/fichero";
 choices[28][3] = "m&eacute;todo://servidor[:direcci&oacute;n:puerto]/directorio/fichero";
 answers[28] = choices[28][2];
 units[28] = "112";
 comments[28] = "Id Pregunta: 3380. ";


//  Id pregunta: 3441 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  El protocolo ARP:";
 choices[29]= new Array();
 choices[29][0] = "S&oacute;lo funciona si hay un proxy configurado";
 choices[29][1] = "Permite relacionar puertos TCP y direcciones IP";
 choices[29][2] = "Permite relacionar puertos TCP  y direcciones MAC";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][3];
 units[29] = "100,102";
 comments[29] = "Id Pregunta: 3441. ";


//  Id pregunta: 3494 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  En el entorno de las comunicaciones m&oacute;viles, los t&eacute;rminos &quot;handover&quot; y &quot;handoff&quot;:";
 choices[30]= new Array();
 choices[30][0] = "Son sin&oacute;nimos";
 choices[30][1] = "&quot;Handover&quot; hace referencia a conmutaciones entre diferentes BTS y &quot;handoff&quot; a cambios de canal dentro de la misma BTS";
 choices[30][2] = "&quot;Handoff&quot; es equivalente a &quot;roaming&quot;";
 choices[30][3] = "&quot;Handoff&quot; no existe";
 answers[30] = choices[30][0];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3494. ";


//  Id pregunta: 3617 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  La linea &quot;GET / HTTP/1.1&quot;, dentro de un mensaje HTTP significa:";
 choices[31]= new Array();
 choices[31][0] = "Pide un documento localizado en / ";
 choices[31][1] = "La versi&oacute;n HTTP es 1.1";
 choices[31][2] = "No tiene indicaci&oacute;n del servidor";
 choices[31][3] = "Todas las anteriores respuestas son correctas";
 answers[31] = choices[31][3];
 units[31] = "112";
 comments[31] = "Id Pregunta: 3617. ";


//  Id pregunta: 3740 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Los sat&eacute;lites de comunicaciones utilizan frecuencias elevadas (bandas Ku y K )porque:";
 choices[32]= new Array();
 choices[32][0] = "Las ondas de mayor frecuencia permiten un mayor alcance y atravesar obst&aacute;culos";
 choices[32][1] = "Las frecuencias altas permiten enviar mayor cantidad de informaci&oacute;n por segundo";
 choices[32][2] = "En estas bandas la atenuaci&oacute;n es menor";
 choices[32][3] = "Aunque la atenuaci&oacute;n es menor en estas frecuencias su alcance es mayor";
 answers[32] = choices[32][1];
 units[32] = "108";
 comments[32] = "Id Pregunta: 3740. ";


//  Id pregunta: 3752 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  MIME responde por:";
 choices[33]= new Array();
 choices[33][0] = "Multimedia Internet Mail Extensions";
 choices[33][1] = "Multimedia Information Mail Extensions";
 choices[33][2] = "Multipurpose Internet Mail Extensions";
 choices[33][3] = "Multipurpose Information Mail Extensions";
 answers[33] = choices[33][2];
 units[33] = "106";
 comments[33] = "Id Pregunta: 3752. ";


//  Id pregunta: 3787 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Respecto a las Infraestructuras Comunes de Telecomunicaciones (ICTs):";
 choices[34]= new Array();
 choices[34][0] = "Pueden ser llevadas a cabo y firmadas por cualquier persona independientemente de su formaci&oacute;n acad&eacute;mica";
 choices[34][1] = "&Uacute;nicamente pueden ser firmadas por ingenieros de telecomunicaci&oacute;n, y deben ser visadas por el Colegio de Ingenieros de Telecomunicaci&oacute;n";
 choices[34][2] = "Tienen distinta legislaci&oacute;n en Espa&ntilde;a seg&uacute;n la comunidad aut&oacute;noma de que se trate";
 choices[34][3] = "Nada de lo anterior es cierto";
 answers[34] = choices[34][1];
 units[34] = "110";
 comments[34] = "Id Pregunta: 3787. ";


//  Id pregunta: 3801 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  Sabiendo que se dice que una fibra monomodo es aquella que transmite un &uacute;nico modo de propagaci&oacute;n de un haz monocrom&aacute;tico de luz. Indique cu&aacute;l de las afirmaciones siguientes es verdadera: ";
 choices[35]= new Array();
 choices[35][0] = "Las fibras &oacute;pticas monomodo son las m&aacute;s adecuadas para la transmisi&oacute;n de se&ntilde;ales con un ancho de banda peque&ntilde;o y a grandes distancias";
 choices[35][1] = "La fibras &oacute;pticas monomodo son las adecuadas para transmitir se&ntilde;ales de gran ancho de banda y a grandes distancias";
 choices[35][2] = "Las fibras &oacute;pticas monomodo son &uacute;nicamente adecuadas para la transmisi&oacute;n de se&ntilde;ales anal&oacute;gicas";
 choices[35][3] = "Todas las anteriores respuestas son correctas";
 answers[35] = choices[35][1];
 units[35] = "99";
 comments[35] = "Id Pregunta: 3801. ";


//  Id pregunta: 3857 Año de creación de pregunta: 2003-01-01
 questions[36]= "37)  El cortafuegos CheckPoint Firewall-1 es:";
 choices[36]= new Array();
 choices[36][0] = "Un cortafuegos de filtrado din&aacute;mico de paquetes";
 choices[36][1] = "Un cortafuegos de inspecci&oacute;n de estado";
 choices[36][2] = "Un cortafuegos h&iacute;brido que intercepta los paquetes entre las capas 3 y4 del modelo OSI";
 choices[36][3] = "No es nada de lo anterior";
 answers[36] = choices[36][1];
 units[36] = "111";
 comments[36] = "Id Pregunta: 3857. ";


//  Id pregunta: 3863 Año de creación de pregunta: 2004-01-01
 questions[37]= "38)  El protocolo HTTP";
 choices[37]= new Array();
 choices[37][0] = "Obliga a los servidores a escuchar en el puerto 80";
 choices[37][1] = "Utiliza el formato MIME para las respuestas ";
 choices[37][2] = "Utiliza DNS y TCP para establecer la conexi&oacute;n con el servidor";
 choices[37][3] = "Est&aacute; basado en los comandos de Un&iacute;x";
 answers[37] = choices[37][1];
 units[37] = "113";
 comments[37] = "Id Pregunta: 3863. Tanenbaum";


//  Id pregunta: 3865 Año de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Qu&eacute; son los IDS?";
 choices[38]= new Array();
 choices[38][0] = "Sistemas que permiten a los hackers rastrear puertos";
 choices[38][1] = "Sistemas que permiten detectar actividad inadecuada, incorrecta o an&oacute;mala en un sistema";
 choices[38][2] = "Sistemas que simulan uno o m&aacute;s sistemas f&aacute;ciles de atacar con el fin de tentar a los intrusos";
 choices[38][3] = "ningunode los anteriores";
 answers[38] = choices[38][1];
 units[38] = "111";
 comments[38] = "Id Pregunta: 3865. ";


//  Id pregunta: 3871 Año de creación de pregunta: 2004-01-01
 questions[39]= "40)  HTML";
 choices[39]= new Array();
 choices[39][0] = "Define reglas para el intercambio de mensajes";
 choices[39][1] = "Permite incorporar plantillas XSL";
 choices[39][2] = "Es un lenguaje que describe c&oacute;mo se formatean los mensajes";
 choices[39][3] = "Todas son ciertas";
 answers[39] = choices[39][2];
 units[39] = "113";
 comments[39] = "Id Pregunta: 3871. Tanenbaum";


//  Id pregunta: 3884 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;En cu&aacute;l de las siguientes especificaciones de medio del est&aacute;ndar IEEE 802.3, el cable, cuando es de tipo coaxial, tiene una impedancia caracter&iacute;stica de 50 Ohmios?:";
 choices[40]= new Array();
 choices[40][0] = "Especificaciones de medio 10BASE2 y 10BASE5.";
 choices[40][1] = "Especificaci&oacute;n de medio 10BASE-FL.";
 choices[40][2] = " Especificaci&oacute;n de medio 10BASE-T.";
 choices[40][3] = " Especificaci&oacute;n de medio 10BROAD36.";
 answers[40] = choices[40][0];
 units[40] = "99";
 comments[40] = "Id Pregunta: 3884. Junta Andaluc&iacute;a";


//  Id pregunta: 3910 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  Al ajuste hacia niveles predeterminados de los valores troceados de una se&ntilde;al anal&oacute;gica se le denomina:";
 choices[41]= new Array();
 choices[41][0] = "Cuantificaci&oacute;n.";
 choices[41][1] = "Digitalizaci&oacute;n.";
 choices[41][2] = "Discretizaci&oacute;n.";
 choices[41][3] = "Codificaci&oacute;n.";
 answers[41] = choices[41][0];
 units[41] = "108";
 comments[41] = "Id Pregunta: 3910. ";


//  Id pregunta: 3965 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  Respecto a SDH &iquest;cual de las siguientes opciones es falsa?";
 choices[42]= new Array();
 choices[42][0] = "Est&aacute; internacionalmente extendido";
 choices[42][1] = "Posee capacidad poderosa de administraci&oacute;n";
 choices[42][2] = "Brinda m&aacute;s ancho de banda que PDH";
 choices[42][3] = "Es un est&aacute;ndar norteamericano";
 answers[42] = choices[42][3];
 units[42] = "116";
 comments[42] = "Id Pregunta: 3965. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en las opciones";


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


//  Id pregunta: 4057 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Existen experiencias de uso real de VoIP en Espa&ntilde;a";
 choices[44]= new Array();
 choices[44][0] = "Si";
 choices[44][1] = "No";
 choices[44][2] = "Si, pero solo en las AAPP";
 choices[44][3] = "No, porque a&uacute;n no hay regulaci&oacute;n que lo permita";
 answers[44] = choices[44][0];
 units[44] = "112";
 comments[44] = "Id Pregunta: 4057. ";


//  Id pregunta: 4139 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  La transmisi&oacute;n de datos a trav&eacute;s de la red p&uacute;blica de forma que los nodos de enrutado no sean conscientes de que la transmisi&oacute;n es parte de una red privada se llama";
 choices[45]= new Array();
 choices[45][0] = "Tunel";
 choices[45][1] = "Red Privada Virtual (VPN)";
 choices[45][2] = "IPSec";
 choices[45][3] = "SSL";
 answers[45] = choices[45][0];
 units[45] = "111";
 comments[45] = "Id Pregunta: 4139. ";


//  Id pregunta: 4168 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  Un test de penetraci&oacute;n proporciona todo lo siguiente salvo";
 choices[46]= new Array();
 choices[46][0] = "identificaci&oacute;n de fallos de seguridad";
 choices[46][1] = "demostraci&oacute;n de los efectos de los fallos de seguridad";
 choices[46][2] = "un m&eacute;todo de correcci&oacute;n de los fallos";
 choices[46][3] = "verificaci&oacute;n de los niveles actuales de resistencia a la infiltraci&oacute;n";
 answers[46] = choices[46][1];
 units[46] = "111";
 comments[46] = "Id Pregunta: 4168. ";


//  Id pregunta: 4170 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  La pol&iacute;tica de m&iacute;nimo privilegio trata de forzar los derechos de usuario m&aacute;s restrictivos";
 choices[47]= new Array();
 choices[47][0] = "Para ejecutar procesos de sistema";
 choices[47][1] = "En su descripci&oacute;n de puesto de trabajo";
 choices[47][2] = "Para realizar tareas autorizadas";
 choices[47][3] = "En el acceso a servicios de red";
 answers[47] = choices[47][2];
 units[47] = "111";
 comments[47] = "Id Pregunta: 4170. ";


//  Id pregunta: 4288 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  La calidad del software entregado ser&aacute; alta si la EED (Eficacia de la Eliminaci&oacute;n de Defectos):";
 choices[48]= new Array();
 choices[48][0] = "Se acerca a uno";
 choices[48][1] = "Se acerca a cero.";
 choices[48][2] = "Es mayor que uno.";
 choices[48][3] = "Es negativa.";
 answers[48] = choices[48][0];
 units[48] = "87";
 comments[48] = "Id Pregunta: 4288. ";


//  Id pregunta: 4375 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Indique cu&aacute;l de los siguientes no es un proceso principal incluido en M&eacute;trica versi&oacute;n 3:";
 choices[49]= new Array();
 choices[49][0] = "Desarrollo de Sistemas de Informaci&oacute;n.";
 choices[49][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[49][2] = "Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[49][3] = "An&aacute;lisis de Requisitos del Sistema.";
 answers[49] = choices[49][3];
 units[49] = "86";
 comments[49] = "Id Pregunta: 4375. ";


//  Id pregunta: 4406 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes elementos de un centro de contacto acepta la combinaci&oacute;n de la voz humana y pulsaciones en el teclado y provee respuestas en forma de voz?";
 choices[50]= new Array();
 choices[50][0] = "Sistema de respuesta de voz interactiva (IVR).";
 choices[50][1] = "Agente Virtual Inteligente (IVA).";
 choices[50][2] = "Distribuidor Autom&aacute;tico de Llamadas (ASR).";
 choices[50][3] = "Sistema de Reconocimiento Autom&aacute;tico del Lenguaje (ASR).";
 answers[50] = choices[50][0];
 units[50] = "26";
 comments[50] = "Id Pregunta: 4406. ";


//  Id pregunta: 4479 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  En Ia tarea EVS 4.1: Preselecci&oacute;n de Alternativas de soluci&oacute;n, correspondiente al Estudio de Viabilidad del Sistema (Proceso EVS), definido en m&eacute;trica V3 &iquest;cual de las siguientes t&eacute;cnicas y practicas es la que se recomienda?";
 choices[51]= new Array();
 choices[51][0] = "Casos de uso";
 choices[51][1] = "Diagrama de Flujo de Datos";
 choices[51][2] = "Diagrama de Clases";
 choices[51][3] = "Diagrama de Representaci&oacute;n";
 answers[51] = choices[51][3];
 units[51] = "86";
 comments[51] = "Id Pregunta: 4479. ";


//  Id pregunta: 4490 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  El sistema UMTS tiene asignadas en Europa bandas de trabajo en torno a Ia frecuencia de:";
 choices[52]= new Array();
 choices[52][0] = "900 MHz.";
 choices[52][1] = "2 GHz.";
 choices[52][2] = "11 GHz.";
 choices[52][3] = "5 GHz";
 answers[52] = choices[52][1];
 units[52] = "108";
 comments[52] = "Id Pregunta: 4490. ";


//  Id pregunta: 4571 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  En HTML podemos referenciar una marca dentro de un documento con la directiva &lt;A&gt;, indicando el nombre de documento y el nombre de la marca, y separando ambos nombres con el car&aacute;cter:";
 choices[53]= new Array();
 choices[53][0] = "@";
 choices[53][1] = "$";
 choices[53][2] = "&amp;";
 choices[53][3] = "#";
 answers[53] = choices[53][3];
 units[53] = "69";
 comments[53] = "Id Pregunta: 4571. ";


//  Id pregunta: 4586 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  Las siglas HSDPA corresponden a:";
 choices[54]= new Array();
 choices[54][0] = "High-Speed Dynamic Packet Access";
 choices[54][1] = "High-Speed Downlink Packet Access";
 choices[54][2] = "High-Speed Data Packet Access";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][1];
 units[54] = "108";
 comments[54] = "Id Pregunta: 4586. ";


//  Id pregunta: 4681 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[55]= new Array();
 choices[55][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[55][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[55][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[55][3] = "La citada ley no hace referencia a tal concepto";
 answers[55] = choices[55][2];
 units[55] = "36,37";
 comments[55] = "Id Pregunta: 4681. Examen 2006 JCYL";


//  Id pregunta: 4817 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar lasespecificaciones de est&aacute;ndares en Internet?";
 choices[56]= new Array();
 choices[56][0] = "IESG (Internet Engineering Steering Group)";
 choices[56][1] = "IETF (Internet Engineering Task Force)";
 choices[56][2] = "IAB (Internet Architecture Board)";
 choices[56][3] = "IANA (Internet Assigned Number Authority)";
 answers[56] = choices[56][1];
 units[56] = "112,42";
 comments[56] = "Id Pregunta: 4817. ";


//  Id pregunta: 4839 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  En relaci&oacute;n con las licencias de software libre, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[57]= new Array();
 choices[57][0] = "La licencia GPL (General Public License) de software libre obliga a publicar las modificaciones realizadassobre el software";
 choices[57][1] = "En un producto distribuido bajo licencia GPL es obligatorio incluir un fichero que contenga &uacute;nicamente lost&eacute;rminos concretos de la licencia y un aviso de que los derechos de copia son establecidos por el autor delproducto";
 choices[57][2] = "La licencia LGPL (Lesser General Public License) permite la inclusi&oacute;n del software que ampara enprogramas distribuidos bajo licencia no GPL";
 choices[57][3] = "La licencia LGPL no es compatible con la definici&oacute;n del software distribuido bajo el tipo licencia &quot;Copyleft&quot;";
 answers[57] = choices[57][2];
 units[57] = "61";
 comments[57] = "Id Pregunta: 4839. ";


//  Id pregunta: 4994 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &quot;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&quot;?";
 choices[58]= new Array();
 choices[58][0] = "Desarrollo de sistemas de informaci&oacute;n";
 choices[58][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n";
 choices[58][2] = "An&aacute;lisis de sistema de informaci&oacute;n";
 choices[58][3] = "Mantenimiento de sistemas de informaci&oacute;n";
 answers[58] = choices[58][0];
 units[58] = "86";
 comments[58] = "Id Pregunta: 4994. Examen TIC A 2007";


//  Id pregunta: 5014 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 3.0 el umbral de saciedad m&aacute;ximo para un criterio";
 choices[59]= new Array();
 choices[59][0] = "indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[59][1] = "indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[59][2] = "indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en lapuntuaci&oacute;n obtenida";
 choices[59][3] = "indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio";
 answers[59] = choices[59][2];
 units[59] = "34";
 comments[59] = "Id Pregunta: 5014. Examen TIC A 2007";


//  Id pregunta: 5049 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  El algoritmo de cifrado IDEA es del tipo:";
 choices[60]= new Array();
 choices[60][0] = "Asim&eacute;trico";
 choices[60][1] = "Sim&eacute;trico por bloques";
 choices[60][2] = "Sim&eacute;trico de flujo";
 choices[60][3] = "Sim&eacute;trico de resumen (hash)";
 answers[60] = choices[60][1];
 units[60] = "111";
 comments[60] = "Id Pregunta: 5049. Examen TIC A 2007";


//  Id pregunta: 5149 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en tres grupos: Actividades de Inicio de Proyecto (GPI), Actividades de Seguimiento y Control (GPS) y Actividades de Finalizaci&oacute;n del Proyecto. &iquest;Qu&eacute; actividades est&aacute;n dentro del grupo GPI?";
 choices[61]= new Array();
 choices[61][0] = "Asignaci&oacute;n detallada de tareas y Comunicaci&oacute;n al equipo del proyecto.";
 choices[61][1] = "Estimaci&oacute;n del Esfuerzo y Planificaci&oacute;n del Proyecto.";
 choices[61][2] = "Petici&oacute;n de Cambios de Requisitos y Estimaci&oacute;n del Esfuerzo y Planificaci&oacute;n de la Soluci&oacute;n.";
 choices[61][3] = "Actualizaci&oacute;n de la Planificaci&oacute;n y Reuniones de Seguimiento.";
 answers[61] = choices[61][1];
 units[61] = "86";
 comments[61] = "Id Pregunta: 5149. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5206 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  En M&eacute;trica v.3 la actividad &ldquo;Revisi&oacute;n de la formaci&oacute;n a usuarios finales&rdquo;del Aseguramiento de la Calidad corresponde al proceso:";
 choices[62]= new Array();
 choices[62][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[62][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[62][2] = "Implantaci&oacute;n y aceptaci&oacute;n del Sistema";
 choices[62][3] = "Mantenimiento del Sistema de informaci&oacute;n";
 answers[62] = choices[62][1];
 units[62] = "86";
 comments[62] = "Id Pregunta: 5206. ";


//  Id pregunta: 5244 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[63]= new Array();
 choices[63][0] = "Los FCE ayudan a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n";
 choices[63][1] = "Factores de &eacute;xito son los objetivos de la organizaci&oacute;n";
 choices[63][2] = "FCE son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[63][3] = "Para definir los FCE de la organizaci&oacute;n, es necesario que los objetivos de la misma est&eacute;n claramente definidos";
 answers[63] = choices[63][1];
 units[63] = "77";
 comments[63] = "Id Pregunta: 5244. ";


//  Id pregunta: 5252 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  Entre las ventajas destacadas de ISO 9000:2000 NO se encuentra:";
 choices[64]= new Array();
 choices[64][0] = "Proporciona amplia y detallada informaci&oacute;n de c&oacute;mo aplicarlo en empresas de tama&ntilde;o reducido";
 choices[64][1] = "Incrementa oportunidades de negocio en ciertos mercados y aumenta la satisfacci&oacute;n del cliente";
 choices[64][2] = "Reconocimiento y apariencia internacional, marca de reconocido prestigio";
 choices[64][3] = "Libertad de implementaci&oacute;n e interpretaci&oacute;n de los requisitos";
 answers[64] = choices[64][0];
 units[64] = "87";
 comments[64] = "Id Pregunta: 5252. ";


//  Id pregunta: 5421 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  La API JDBC se utiliza:";
 choices[65]= new Array();
 choices[65][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n se pueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones que soporta un SGBD relacional";
 choices[65][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional.";
 choices[65][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas a procedimientos almacenados no est&aacute;n soportados.";
 choices[65][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas de las funciones que soporta un SGBD relacional.";
 answers[65] = choices[65][0];
 units[65] = "116";
 comments[65] = "Id Pregunta: 5421. Castilla y Le&oacute;n";


//  Id pregunta: 5504 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Se&ntilde;ala la caracter&iacute;sitca incorrecta respecto a AJAX:";
 choices[66]= new Array();
 choices[66][0] = "Incorpora caracter&iacute;sticas propias de aplicaciones tipo push";
 choices[66][1] = "Requiere Flash para su ejecuci&oacute;n";
 choices[66][2] = "Se basa en JavaScript y XML";
 choices[66][3] = "Actualiza los datos de la interfaz de forma espontanea";
 answers[66] = choices[66][1];
 units[66] = "69";
 comments[66] = "Id Pregunta: 5504. ";


//  Id pregunta: 5505 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  C&uacute;al es la respuesta correcta respecto a XBRL (eXtensible Business Reporting Language)?:";
 choices[67]= new Array();
 choices[67][0] = "Es un lenguaje basado en XML";
 choices[67][1] = "Permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[67][2] = "Es posible establecer taxonom&iacute;as que clasifiquen los datos seg&uacute;n etiquetas definidas";
 choices[67][3] = "Todas son correctas";
 answers[67] = choices[67][3];
 units[67] = "69";
 comments[67] = "Id Pregunta: 5505. ";


//  Id pregunta: 5560 Año de creación de pregunta: 2003-01-01
 questions[68]= "69)  Respecto a La Ley 23/2006 que modifica el TRLPI (RD 1/1996), se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[68]= new Array();
 choices[68][0] = "Transpone la Directiva 2001/29/CE.";
 choices[68][1] = "Establece medidas sancionadoras de actos de elusi&oacute;n de medidas tecnol&oacute;gicas eficaces para la protecci&oacute;n de obras.";
 choices[68][2] = "Los programas de ordenador se regir&aacute;n por su propia normativa.";
 choices[68][3] = "El can&oacute;n digital se aplicar&aacute; tanto a equipos anal&oacute;gicos como digitales, como reproductores mp3-mp4, discos duros etc.. ";
 answers[68] = choices[68][3];
 units[68] = "37";
 comments[68] = "Id Pregunta: 5560. ";


//  Id pregunta: 5724 Año de creación de pregunta: 2009-01-01
 questions[69]= "70)  Indique qui&eacute;n desarroll&oacute; el lenguaje JavaScript";
 choices[69]= new Array();
 choices[69][0] = "Microsoft";
 choices[69][1] = "SUN";
 choices[69][2] = "Netscape";
 choices[69][3] = "W3C";
 answers[69] = choices[69][2];
 units[69] = "114";
 comments[69] = "Id Pregunta: 5724. MAP 2008 A1";


//  Id pregunta: 5839 Año de creación de pregunta: 2009-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA , en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[70]= new Array();
 choices[70][0] = "Se utiliza, en general, para la auto evaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora";
 choices[70][1] = "Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea";
 choices[70][2] = "Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados";
 choices[70][3] = "La l&oacute;gica REDER se encuentra en el centro del modelo";
 answers[70] = choices[70][1];
 units[70] = "92";
 comments[70] = "Id Pregunta: 5839. MAP 2008 A1";


//  Id pregunta: 5851 Año de creación de pregunta: 2009-01-01
 questions[71]= "72)  Respecto al correo electr&oacute;nico, &iquest;Qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[71]= new Array();
 choices[71][0] = "IMAP es un protocolo de env&iacute;o de correo";
 choices[71][1] = "POP es un protocolo de acceso a correo";
 choices[71][2] = "SMTP es un protocolo de transporte de mensajes";
 choices[71][3] = "MIME permite acentos en los mensajes de correo";
 answers[71] = choices[71][0];
 units[71] = "106";
 comments[71] = "Id Pregunta: 5851. Pregunta 31";


//  Id pregunta: 5892 Año de creación de pregunta: 2009-01-01
 questions[72]= "73)  &iquest;Qu&eacute; es JNDI?";
 choices[72]= new Array();
 choices[72][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[72][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[72][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][0];
 units[72] = "60";
 comments[72] = "Id Pregunta: 5892. ";


//  Id pregunta: 5924 Año de creación de pregunta: 2009-01-01
 questions[73]= "74)  De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &quot;Retorno de la Inversi&oacute;n&quot;:";
 choices[73]= new Array();
 choices[73][0] = "Beneficio Neto Anual";
 choices[73][1] = "Inversi&oacute;n Promedio";
 choices[73][2] = "Coste desarrollo anualizado";
 choices[73][3] = "Periodo de Amortizaci&oacute;n";
 answers[73] = choices[73][3];
 units[73] = "86";
 comments[73] = "Id Pregunta: 5924. MAP 2008 A1";


//  Id pregunta: 5962 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Qu&eacute; elemento NO forma parte del modelo EFQM de excelencia?";
 choices[74]= new Array();
 choices[74][0] = "Procesos";
 choices[74][1] = "Personas";
 choices[74][2] = "Resultados en los clientes";
 choices[74][3] = "Resultados en los proveedores";
 answers[74] = choices[74][3];
 units[74] = "92";
 comments[74] = "Id Pregunta: 5962. Castilla La Mancha 2009";


//  Id pregunta: 6155 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;C&oacute;mo fue renombrado el protocolo SMB por Microsoft?";
 choices[75]= new Array();
 choices[75][0] = "SAMBA";
 choices[75][1] = "CIFS";
 choices[75][2] = "MSRPC";
 choices[75][3] = "Ninguna de las anteriores.";
 answers[75] = choices[75][1];
 units[75] = "112";
 comments[75] = "Id Pregunta: 6155. ";


//  Id pregunta: 6185 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Indique, cual de entre los siguientes elementos de un sistema de correo X.400 se corresponde con un servidor de correo:";
 choices[76]= new Array();
 choices[76][0] = "UA.";
 choices[76][1] = "MTA.";
 choices[76][2] = "GW.";
 choices[76][3] = "MS.";
 answers[76] = choices[76][1];
 units[76] = "106";
 comments[76] = "Id Pregunta: 6185. ";


//  Id pregunta: 6189 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  El Esquema Nacional de Interoperabilidad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[77]= new Array();
 choices[77][0] = "Cada 6 meses";
 choices[77][1] = "Cada a&ntilde;o";
 choices[77][2] = "Cada 2 a&ntilde;os";
 choices[77][3] = "El Esquema Nacional de Interoperabilidad no especifica nada respecto a auditor&iacute;as";
 answers[77] = choices[77][3];
 units[77] = "43";
 comments[77] = "Id Pregunta: 6189. ";


//  Id pregunta: 6225 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l se las siguientes afirmaciones es incorrecta?";
 choices[78]= new Array();
 choices[78][0] = "Polimorfismo: distintas instancias del mismo tipo interpretan un mismo mensaje de distinta forma";
 choices[78][1] = "Enlace din&aacute;mico, la llamada al m&eacute;todo se resuelve en tiempo de ejecuci&oacute;n";
 choices[78][2] = "Se pueden crear instancias de una clase abstracta";
 choices[78][3] = "Enlace est&aacute;tico se resuelve en tiempo de compilaci&oacute;n";
 answers[78] = choices[78][2];
 units[78] = "116";
 comments[78] = "Id Pregunta: 6225. TICB-2009, bloque desarrollo";


//  Id pregunta: 6386 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[79]= new Array();
 choices[79][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[79][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[79][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[79][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[79] = choices[79][1];
 units[79] = "43";
 comments[79] = "Id Pregunta: 6386. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6431 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  &iquest;Qu&eacute; es Putty?";
 choices[80]= new Array();
 choices[80][0] = "Un cliente SSH";
 choices[80][1] = "Un software de virtualizaci&oacute;n";
 choices[80][2] = "Una suite ofim&aacute;tica";
 choices[80][3] = "Ninguna de las anteriores";
 answers[80] = choices[80][0];
 units[80] = "62";
 comments[80] = "Id Pregunta: 6431. ";


//  Id pregunta: 6538 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  En relaci&oacute;n a las t&eacute;cnicas de control de acceso";
 choices[81]= new Array();
 choices[81][0] = "DAC permite a los propietarios de los datos elegir los sujetos que tienen acceso a los mismos";
 choices[81][1] = "MAC usa un sistema de etiquetado";
 choices[81][2] = "El control de acceso no discrecional usa un m&eacute;todo basado en roles para determinar los permisos";
 choices[81][3] = "Todas las respuestas anteriores son correctas";
 answers[81] = choices[81][3];
 units[81] = "111";
 comments[81] = "Id Pregunta: 6538. ";


//  Id pregunta: 6568 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  HSDPA introduce, respecto de UMTS, las siguientes mejoras:";
 choices[82]= new Array();
 choices[82][0] = "Tasas cercanas 200 Gbps";
 choices[82][1] = "Nueva portadora de 584 kbps";
 choices[82][2] = "Reducci&oacute;n del tiempo de latencia";
 choices[82][3] = "M&aacute;ximo de 10 GB de tr&aacute;fico al mes para el usuario";
 answers[82] = choices[82][2];
 units[82] = "108";
 comments[82] = "Id Pregunta: 6568. ";


//  Id pregunta: 6578 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  La telefon&iacute;a IP";
 choices[83]= new Array();
 choices[83][0] = "Combina datos, voz y video en un &uacute;nico paquete";
 choices[83][1] = "Separa la red de datos de la voz";
 choices[83][2] = "Los procesos utilizados no dependen del tiempo";
 choices[83][3] = "A y C son correctas";
 answers[83] = choices[83][0];
 units[83] = "117";
 comments[83] = "Id Pregunta: 6578. ";


//  Id pregunta: 6628 Año de creación de pregunta: 2010-01-01
 questions[84]= "85)  En el modelo CMM de Ingenier&iacute;a de Software, dentro del nivel 'Definido' est&aacute;n las &Aacute;reas Clave:";
 choices[84]= new Array();
 choices[84][0] = "Gesti&oacute;n de Cambios Tecol&oacute;gicos y Gesti&oacute;n de Cambios en los Procesos";
 choices[84][1] = "Aseguramiento de la Calidad y Planificaci&oacute;n del Proyecto";
 choices[84][2] = "Gesti&oacute;n Cuantitativa del Proyecto y Gesti&oacute;n de Calidad del Software";
 choices[84][3] = "Gesti&oacute;n Integrada del Software y Coordinaci&oacute;n Intergrupos";
 answers[84] = choices[84][3];
 units[84] = "87";
 comments[84] = "Id Pregunta: 6628. ";


//  Id pregunta: 6638 Año de creación de pregunta: 2010-01-01
 questions[85]= "86)  El modelo COCOMO II propone los modelos:";
 choices[85]= new Array();
 choices[85][0] = "Modelo de Composici&oacute;n de la Aplicci&oacute;n, Dise&ntilde;o Preliminar y Modelo Post-Arquitectura";
 choices[85][1] = "Modelo de Composici&oacute;n de la Aplicci&oacute;n y Dise&ntilde;o Preliminar";
 choices[85][2] = "Modelo Org&aacute;nico y Semiacoplado";
 choices[85][3] = "Modelo Org&aacute;nico, Semiacoplado y Empotrado";
 answers[85] = choices[85][0];
 units[85] = "88";
 comments[85] = "Id Pregunta: 6638. ";


//  Id pregunta: 8225 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[86]= new Array();
 choices[86][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[86][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[86][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[86][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[86] = choices[86][1];
 units[86] = "92";
 comments[86] = "Id Pregunta: 8225. Examen TIC A1 2010";


//  Id pregunta: 8277 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE, NO incluye entre sus programas:";
 choices[87]= new Array();
 choices[87][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios.";
 choices[87][1] = "Reconocimiento (certificaci&oacute;n de organizaciones y premios).";
 choices[87][2] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[87][3] = "Quejas y reclamaciones.";
 answers[87] = choices[87][3];
 units[87] = "92";
 comments[87] = "Id Pregunta: 8277. Examen TIC A1 2010";


//  Id pregunta: 8323 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  La normativa que establece las condiciones t&eacute;cnicas para la emisi&oacute;n del servido de televisi&oacute;n digital terrestre (TDT) en alta definici&oacute;n, es: ";
 choices[88]= new Array();
 choices[88][0] = "Ley 7/2010. ";
 choices[88][1] = "Real Decreto 691/2010. ";
 choices[88][2] = "Directiva 98/48/CE. ";
 choices[88][3] = "Real Decreto 944/2005. ";
 answers[88] = choices[88][1];
 units[88] = "105, 110";
 comments[88] = "Id Pregunta: 8323. Examen TIC A2 2010";


//  Id pregunta: 8438 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio incluir en la disposici&oacute;n de creaci&oacute;n de un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[89]= new Array();
 choices[89][0] = "&Oacute;rgano o unidad responsable de la gesti&oacute;n.";
 choices[89][1] = "Fecha y hora oficial y referencia al calendario de d&iacute;as inh&aacute;biles que sea aplicable.";
 choices[89][2] = "Medios de presentaci&oacute;n de documentaci&oacute;n complementaria a una comunicaci&oacute;n, escrito o solicitud previamente presentada en el registro electr&oacute;nico.";
 choices[89][3] = "Buzones de correo electr&oacute;nico corporativo y/o fax asignado a los empleados p&uacute;blicos o a las distintas unidades y &oacute;rganos.";
 answers[89] = choices[89][3];
 units[89] = "43";
 comments[89] = "Id Pregunta: 8438. ";


//  Id pregunta: 8463 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Qu&eacute; API proporciona un modo para que una aplicaci&oacute;n J2EE autentique y autorice a un usuario especifico o a un grupo de usuarios para su ejecuci&oacute;n?:";
 choices[90]= new Array();
 choices[90][0] = "JNDI";
 choices[90][1] = "JAAS";
 choices[90][2] = "JMS";
 choices[90][3] = "JNI";
 answers[90] = choices[90][1];
 units[90] = "116";
 comments[90] = "Id Pregunta: 8463. Analista Ayto. Madrid 2010";


//  Id pregunta: 8616 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo, se denomina:";
 choices[91]= new Array();
 choices[91][0] = "Mantenimiento adaptativo";
 choices[91][1] = "Mantenimiento preventivo";
 choices[91][2] = "Mantenimiento correctivo";
 choices[91][3] = "Mantenimiento evolutivo";
 answers[91] = choices[91][1];
 units[91] = "86";
 comments[91] = "Id Pregunta: 8616. Examen TIC A2 2010 interna";


//  Id pregunta: 8634 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes NO es un grupo de actividad de la Gesti&oacute;n de Proyectos?";
 choices[92]= new Array();
 choices[92][0] = "Actividades de Seguimiento y Control.";
 choices[92][1] = "Actividades de Planificaci&oacute;n del Proyecto.";
 choices[92][2] = "Actividades de Finalizaci&oacute;n del Proyecto.";
 choices[92][3] = "Actividades de Inicio del Proyecto.";
 answers[92] = choices[92][1];
 units[92] = "86";
 comments[92] = "Id Pregunta: 8634. Examen TIC A2 2010 interna";


//  Id pregunta: 8845 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  En el modelo EFQM (European Foundation Quality Management) se identifican una serie de elementos que son la base para la Gesti&oacute;n de Calidad Total dentro de las organizaciones y que se agrupan en dos grandes bloques:";
 choices[93]= new Array();
 choices[93][0] = " Agentes y Acciones";
 choices[93][1] = " Agentes y Niveles de Satisfacci&oacute;n";
 choices[93][2] = " Agentes y Resultados";
 choices[93][3] = " Resultados y Acciones";
 answers[93] = choices[93][2];
 units[93] = "87,88";
 comments[93] = "Id Pregunta: 8845. Examen UC3M 2010";


//  Id pregunta: 8893 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Son principios de gesti&oacute;n de la calidad seg&uacute;n la norma ISO 9004";
 choices[94]= new Array();
 choices[94][0] = "Enfoque basado en procesos";
 choices[94][1] = "Mejora continua";
 choices[94][2] = "Relaciones mutuamente beneficiosas para el proveedor";
 choices[94][3] = "Todos lo son";
 answers[94] = choices[94][3];
 units[94] = "92";
 comments[94] = "Id Pregunta: 8893. ";


//  Id pregunta: 8939 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[95]= new Array();
 choices[95][0] = "Carta de servicios electr&oacute;nicos";
 choices[95][1] = "Carta de servicios";
 choices[95][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[95][3] = "Debe disponer de todos los anteriores";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 8939. ";


//  Id pregunta: 8972 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  En la nueva ISO 9004:2000 de Sistema de Gesti&oacute;n de la Calidad basada en Procesos existen varios apartados &iquest;Cu&aacute;l no es uno de ellos?";
 choices[96]= new Array();
 choices[96][0] = "Fundamentos y vocabulario";
 choices[96][1] = "Documentaci&oacute;n";
 choices[96][2] = "Uso de los principios de gesti&oacute;n de la calidad";
 choices[96][3] = "Gesti&oacute;n de sistemas y procesos";
 answers[96] = choices[96][0];
 units[96] = "92";
 comments[96] = "Id Pregunta: 8972. ";


//  Id pregunta: 8985 Año de creación de pregunta: 2011-01-01
 questions[97]= "98)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[97]= new Array();
 choices[97][0] = "Organization for the Advancement of Structured Information Services";
 choices[97][1] = "Organization for the Advancement of Service Integration Standards";
 choices[97][2] = "Organization for the Advancement of Structured Information Standards";
 choices[97][3] = "Organization for the Application of Structured Information Standards";
 answers[97] = choices[97][2];
 units[97] = "51, 69";
 comments[97] = "Id Pregunta: 8985. ";


//  Id pregunta: 9058 Año de creación de pregunta: 2021-01-01
 questions[98]= "99)  &iquest;Qu&eacute; categor&iacute;as de HSDPA pueden alcanzar 10 Mbits/s?";
 choices[98]= new Array();
 choices[98][0] = "9 y 10";
 choices[98][1] = "9";
 choices[98][2] = "10";
 choices[98][3] = "12";
 answers[98] = choices[98][0];
 units[98] = "108";
 comments[98] = "Id Pregunta: 9058. ";


//  Id pregunta: 9078 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  &quot;Ayuda a la entrada de datos&quot; es una pauta enmarcada en el principio:";
 choices[99]= new Array();
 choices[99][0] = "Perceptible. ";
 choices[99][1] = "Operable. ";
 choices[99][2] = "Comprensible.";
 choices[99][3] = "Robusto.";
 answers[99] = choices[99][2];
 units[99] = "39";
 comments[99] = "Id Pregunta: 9078. ";


