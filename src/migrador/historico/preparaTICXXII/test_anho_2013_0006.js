/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 118 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  Dentro de la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de la entrop&iacute;a se utiliza para:";
 choices[0]= new Array();
 choices[0][0] = "Asignar un peso a cada alternativa";
 choices[0][1] = "Normalizar las puntuaciones brutas otorgadas";
 choices[0][2] = "Ordenar las alternativas";
 choices[0][3] = "Suavizar la subjetividad del m&eacute;todo directo de asignaci&oacute;n de pesos";
 answers[0] = choices[0][3];
 units[0] = "34";
 comments[0] = "Id Pregunta: 118. ";


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


//  Id pregunta: 239 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En un Centro de Proceso de Datos el desarrollo de una nueva aplicaci&oacute;n y su puesta en producci&oacute;n es responsabilidad de las &aacute;reas de:";
 choices[2]= new Array();
 choices[2][0] = "Desarrollo exclusivamente";
 choices[2][1] = "Desarrollo y sistemas";
 choices[2][2] = "Sistemas y producci&oacute;n";
 choices[2][3] = "Desarrollo, sistemas y producci&oacute;n";
 answers[2] = choices[2][3];
 units[2] = "26";
 comments[2] = "Id Pregunta: 239. ";


//  Id pregunta: 512 Año de creación de pregunta: 2003-01-01
 questions[3]= "4)  Respecto a la ley 1/1996 de propiedad intelectual es falso que proteja:";
 choices[3]= new Array();
 choices[3][0] = "Los derechos de explotaci&oacute;n";
 choices[3][1] = "Los programas de ordenador";
 choices[3][2] = "La documentaci&oacute;n";
 choices[3][3] = "Las ideas que subyacen en los programas de ordenador ";
 answers[3] = choices[3][3];
 units[3] = "36";
 comments[3] = "Id Pregunta: 512. ";


//  Id pregunta: 664 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  En un proceso de evaluaci&oacute;n de bienes y servicios inform&aacute;ticos,  el m&eacute;todo de ordenaci&oacute;n de alternativas PROMETHEE:";
 choices[4]= new Array();
 choices[4][0] = "Cuantifica la diferencia y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[4][1] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[4][2] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[4][3] = "Cuantifica la diferencia, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 answers[4] = choices[4][2];
 units[4] = "34";
 comments[4] = "Id Pregunta: 664. ";


//  Id pregunta: 751 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  El lenguaje Java Script:";
 choices[5]= new Array();
 choices[5][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[5][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[5][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[5][3] = "Se ejecuta en la m&aacute;quina cliente una vez que ha sido descargado en forma de applets, ejecutables en cualquier m&aacute;quina";
 answers[5] = choices[5][1];
 units[5] = "61";
 comments[5] = "Id Pregunta: 751. Examen TIC MAP B 2004";


//  Id pregunta: 877 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l es el API de Java dedicada al procesamiento de XML?:";
 choices[6]= new Array();
 choices[6][0] = "JXML";
 choices[6][1] = "JML";
 choices[6][2] = "JAXP";
 choices[6][3] = "Todas son falsas";
 answers[6] = choices[6][2];
 units[6] = "60,116";
 comments[6] = "Id Pregunta: 877. ";


//  Id pregunta: 1472 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  MPEG es:";
 choices[7]= new Array();
 choices[7][0] = "Mobile Photographs Evolution using GPRS, tecnolog&iacute;a para transmitir fotograf&iacute;as usando un m&oacute;vil GPRS";
 choices[7][1] = "Mobile Protocols Expert Group, grupo de trabajo de ISO experto en la aplicaci&oacute;n de distintos protocolos a la tecnolog&iacute;a inal&aacute;mbrica m&oacute;vil";
 choices[7][2] = "Multimedia Protocols for Evolution of GSM: conjunto de protocolos desarrollados para dispositivos m&oacute;viles que potencian las capacidades multimedia contempladas en la actual GSM";
 choices[7][3] = "Moving Pictures Expert Group, grupo de trabajo de ISO cuya misi&oacute;n es desarrollar est&aacute;ndares de compresi&oacute;n para audio y video";
 answers[7] = choices[7][3];
 units[7] = "114";
 comments[7] = "Id Pregunta: 1472. ";


//  Id pregunta: 1682 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  Respecto al software gratuito y al software libre podemos decir que";
 choices[8]= new Array();
 choices[8][0] = "El software gratuito siempre es libre";
 choices[8][1] = "El software libre siempre es gratuito";
 choices[8][2] = "El software libre y el software gratuito son dos terminos equivalentes";
 choices[8][3] = "Ninguna de las afirmaciones anteriores es correcta";
 answers[8] = choices[8][3];
 units[8] = "61";
 comments[8] = "Id Pregunta: 1682. ";


//  Id pregunta: 2015 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos es falsa?";
 choices[9]= new Array();
 choices[9][0] = "Un proceso puede ser tanto origen como final de unos datos";
 choices[9][1] = "Una entidad externa puede aparecer varias veces en un mismo diagrama";
 choices[9][2] = "Los flujos de datos dirigidos a almacenes de datos pueden ser de consulta, de actualizaci&oacute;n y de di&aacute;logo";
 choices[9][3] = "Un almac&eacute;n de datos no puede crear, transformar ni modificar datos";
 answers[9] = choices[9][0];
 units[9] = "86";
 comments[9] = "Id Pregunta: 2015. Examen TIC MAP B 2004";


//  Id pregunta: 2048 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  En la planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n, las decisiones principales que es preciso tomar son:";
 choices[10]= new Array();
 choices[10][0] = "Establecer los objetivos y metas principales";
 choices[10][1] = "Formular programas y proyectos parqa conseguir los objetivos";
 choices[10][2] = "Definir presupuesto y &aacute;mbito de actuaci&oacute;n para llevar a cabo lo anterior";
 choices[10][3] = "Todas las anteriores respuestas son correctas";
 answers[10] = choices[10][3];
 units[10] = "77";
 comments[10] = "Id Pregunta: 2048. ";


//  Id pregunta: 2061 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  La medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios de un sistema de informaci&oacute;n se conoce como:";
 choices[11]= new Array();
 choices[11][0] = "Eficiencia";
 choices[11][1] = "Correspondencia";
 choices[11][2] = "Eficacia";
 choices[11][3] = "Capacidad";
 answers[11] = choices[11][2];
 units[11] = "77";
 comments[11] = "Id Pregunta: 2061. ";


//  Id pregunta: 2063 Año de creación de pregunta: 2004-01-01
 questions[12]= "13)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n (IAS)?";
 choices[12]= new Array();
 choices[12][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[12][1] = "Elaboraci&oacute;n de los manuales de usuario";
 choices[12][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n";
 choices[12][3] = "Paso a Producci&oacute;n";
 answers[12] = choices[12][1];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2063. Pregunta Junta Andalucia - A";


//  Id pregunta: 2099 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  En un Sistema de Gesti&oacute;n de Bases de Datos Documentales el diccionario de palabras vac&iacute;as permite:";
 choices[13]= new Array();
 choices[13][0] = "Buscar palabras o combinaciones de las mismas sin conocer con exactitud los caracteres que las componen";
 choices[13][1] = "Enlazar consultas individuales para crear rutinas de interrogaci&oacute;n complejas";
 choices[13][2] = "Definir un conjunto de palabras que no deseamos que formen parte de los &iacute;ndices";
 choices[13][3] = "Igualar caracteres para que el sistema de b&uacute;squeda los considere iguales";
 answers[13] = choices[13][2];
 units[13] = "96";
 comments[13] = "Id Pregunta: 2099. ";


//  Id pregunta: 2120 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes actividades no se engloba, en M&eacute;trica V3, en el proceso &lsquo;An&aacute;lisis del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[14]= new Array();
 choices[14][0] = "An&aacute;lisis de Casos de Uso";
 choices[14][1] = "Elaboraci&oacute;n del Modelo de Procesos";
 choices[14][2] = "Generaci&oacute;n de especificaciones de construcci&oacute;n";
 choices[14][3] = "Especificaci&oacute;n del plan de pruebas";
 answers[14] = choices[14][2];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2120. ";


//  Id pregunta: 2394 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  La garant&iacute;a de que en un determinado software bajo prueba se han ejecutado todos los bucles en sus partes internas y condiciones de retorno, y se han ejecutado todas las decisiones l&oacute;gicas en sus variantes verdadera y falsa, corresponde a:";
 choices[15]= new Array();
 choices[15][0] = "Los tests estructurales";
 choices[15][1] = "Los tests funcionales";
 choices[15][2] = "Las revisiones t&eacute;cnicas formales";
 choices[15][3] = "Las revisiones de usuario";
 answers[15] = choices[15][0];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2394. ";


//  Id pregunta: 2572 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[16]= new Array();
 choices[16][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[16][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[16][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[16][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[16] = choices[16][2];
 units[16] = "87,88,92";
 comments[16] = "Id Pregunta: 2572. ";


//  Id pregunta: 2591 Año de creación de pregunta: 2003-01-01
 questions[17]= "18)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[17]= new Array();
 choices[17][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[17][1] = "El responsable de mantenimiento y el jefe de proyecto.";
 choices[17][2] = "El equipo de mantenimiento y el jefe del proyecto.";
 choices[17][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios.";
 answers[17] = choices[17][2];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2591. Junta Andaluc&iacute;a";


//  Id pregunta: 2637 Año de creación de pregunta: 2003-01-01
 questions[18]= "19)  El plan de sistemas de informaci&oacute;n de M&eacute;trica v3 ";
 choices[18]= new Array();
 choices[18][0] = "debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los cinco a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[18][1] = "incluye actividades tales como 'generaci&oacute;n de especificaciones de construcci&oacute;n', 'dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema',y 'especificaci&oacute;n t&eacute;cnica del plan de pruebas'";
 choices[18][2] = "tiene una perspectiva estrat&eacute;gica y opertaiva, pero no tecnol&oacute;gica";
 choices[18][3] = "no requeire la participaci&oacute;n del responasble de mantenimiento";
 answers[18] = choices[18][2];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2637. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2869 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  Conjunto de planes, m&eacute;todos y herramientas dirigidas a modernizar, consolidar y coordinar las aplicaciones inform&aacute;ticas de una empresa";
 choices[19]= new Array();
 choices[19][0] = "EAI";
 choices[19][1] = "EDI";
 choices[19][2] = "Sistemas de Soporte a la Decisi&oacute;n";
 choices[19][3] = "ERP";
 answers[19] = choices[19][0];
 units[19] = "77";
 comments[19] = "Id Pregunta: 2869. ";


//  Id pregunta: 2890 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  La implantaci&oacute;n de SARA aporta:";
 choices[20]= new Array();
 choices[20][0] = "Servicios b&aacute;sicos horizontales";
 choices[20][1] = "Servicios sectoriales de los departamentos ministeriales";
 choices[20][2] = "Servicios horizontales de car&aacute;cter  avanzado";
 choices[20][3] = "Todas las respuestas anteriores son correctas";
 answers[20] = choices[20][3];
 units[20] = "113,44";
 comments[20] = "Id Pregunta: 2890. ";


//  Id pregunta: 2990 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  Indicar cu&aacute;l de las siguientes afirmaciones sobre el estandar GPRS no es correcta";
 choices[21]= new Array();
 choices[21][0] = "La tarificaci&oacute;n es por la cantidad de tr&aacute;fico transmitido y por calidades de servicio";
 choices[21][1] = "Se asigna un canal por usuario que permanecer&aacute; asignado aunque no se envien datos";
 choices[21][2] = "La voz y los datos se multiplexan, permitiendo su envio y recepci&oacute;n simultaneamente";
 choices[21][3] = "La velocidad de conexi&oacute;n puede llegar a los 50kbps";
 answers[21] = choices[21][1];
 units[21] = "108";
 comments[21] = "Id Pregunta: 2990. ";


//  Id pregunta: 3036 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes ataques afecta a la disponibilidad de la informaci&oacute;n?:";
 choices[22]= new Array();
 choices[22][0] = "e-mail Spamming";
 choices[22][1] = "DoS (Denial of Service)";
 choices[22][2] = "DDoS (Distributed Denial of Service)";
 choices[22][3] = "Todos los anteriores";
 answers[22] = choices[22][3];
 units[22] = "111";
 comments[22] = "Id Pregunta: 3036. ";


//  Id pregunta: 3050 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Qu&eacute; inconvenientes presenta la transmisi&oacute;n de informaci&oacute;n mediante rayo l&aacute;ser?:";
 choices[23]= new Array();
 choices[23][0] = "Posible causa de accidentes";
 choices[23][1] = "Coste excesivamente elevado";
 choices[23][2] = "Afectada fuertemente por condiciones climatol&oacute;gicas";
 choices[23][3] = "Genera fuertes interferencias electromagn&eacute;ticas en otros aparatos";
 answers[23] = choices[23][2];
 units[23] = "99";
 comments[23] = "Id Pregunta: 3050. ";


//  Id pregunta: 3066 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  En una arquitectura de tres capas el acceso a  los datos corresponde a la capa de:";
 choices[24]= new Array();
 choices[24][0] = "Presentaci&oacute;n";
 choices[24][1] = "Aplicaci&oacute;n";
 choices[24][2] = "Datos";
 choices[24][3] = "En realidad las tres capas manipulan los datos";
 answers[24] = choices[24][2];
 units[24] = "113";
 comments[24] = "Id Pregunta: 3066. ";


//  Id pregunta: 3079 Año de creación de pregunta: 2005-01-01
 questions[25]= "26)  La inundaci&oacute;n de un buz&oacute;n de correo electr&oacute;nico con un gran n&uacute;mero de mensajes (e-mail spamming) afecta a:";
 choices[25]= new Array();
 choices[25][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[25][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[25][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[25][3] = "Las respuestas &lsquo;c&rsquo; y &lsquo;d&rsquo; son correctas";
 answers[25] = choices[25][1];
 units[25] = "111";
 comments[25] = "Id Pregunta: 3079. ";


//  Id pregunta: 3091 Año de creación de pregunta: 2005-01-01
 questions[26]= "27)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un &ldquo;hacker&rdquo; en un servidor web afecta a:";
 choices[26]= new Array();
 choices[26][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[26][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[26][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[26][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[26] = choices[26][0];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3091. ";


//  Id pregunta: 3158 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta respecto a los nuevos dominios de primer nivel de internet introducidos en noviembre de 2000 ?";
 choices[27]= new Array();
 choices[27][0] = "Los dominios .name est&aacute;n reservados a individuos y se podr&aacute;n reservar nombres de dominio con la estructura 'MiNombre.MiApellido.name'";
 choices[27][1] = "Los dominios .pro est&aacute;n reservados a profesionales de determinadas categor&iacute;as, agrupados en subdominios, existiendo inicialmente para m&eacute;dicos (.med.pro), abogados (.law.pro) y auditores (.cpa.pro)";
 choices[27][2] = "el dominio .coop est&aacute; reservado a cooperativas y asociaciones de todo tipo (ONGs, partidos pol&iacute;ticos, asociaciones deportivas&hellip;), y el nombre del dominio deber&aacute; obligatoriamente ser el de la asociaci&oacute;n o cooperativa";
 choices[27][3] = "Los dominios .aero y .museum est&aacute;n reservados a la industria y servicios a&eacute;reos y a la comunidad de museos respectivamente";
 answers[27] = choices[27][2];
 units[27] = "112";
 comments[27] = "Id Pregunta: 3158. ";


//  Id pregunta: 3162 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes asociaciaciones protocolos OSI-protocolos TCP/IP no es correcta?:";
 choices[28]= new Array();
 choices[28][0] = "SMTP-X.400";
 choices[28][1] = "TELNET-VT";
 choices[28][2] = "FTAM-FTP";
 choices[28][3] = "X.500-SNMP";
 answers[28] = choices[28][3];
 units[28] = "100, 104, 106";
 comments[28] = "Id Pregunta: 3162. ";


//  Id pregunta: 3310 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; se entiende por 'modem de cable'?:";
 choices[29]= new Array();
 choices[29][0] = "A un cable inversor utilizado para la conexi&oacute;n entre dos dispositivos por el puerto serie";
 choices[29][1] = "A un cable utilizado para unir dos PCs por el puerto paralelo";
 choices[29][2] = "A un dispositivo que permite la transmisi&oacute;n de datos a alta velocidad a trav&eacute;s de una red de cable";
 choices[29][3] = "A un modem que no necesita fuente de alimentaci&oacute;n y que es del tama&ntilde;o de una 'caja de cerillas' que pr&aacute;cticamente que embutido en un cable";
 answers[29] = choices[29][2];
 units[29] = "105";
 comments[29] = "Id Pregunta: 3310. ";


//  Id pregunta: 3353 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  De IPSec, una de las siguientes afirmaciones no es cierta. Indicar cu&aacute;l:";
 choices[30]= new Array();
 choices[30][0] = "Para transmitir IPSec, tanto en modo transporte como en modo t&uacute;nel se ha de incluir una cabecera justo delante de la cabecera IP original y una cola detr&aacute;s de los datos";
 choices[30][1] = "En modo transporte, IPSec se tiene entre los sistemas finales, mientras en modo t&uacute;nel se tiene IPSec entre routers pero IP en los tramos routers-sistemas finales";
 choices[30][2] = "El protocolo por defecto para la gesti&oacute;n de claves en IPSec se denomina IKE (Internet Key Exchange)";
 choices[30][3] = "Entre otros, IPSec proporciona mecanismos anti-replay, autenticaci&oacute;n, control de acceso y confidencialidad de datos";
 answers[30] = choices[30][0];
 units[30] = "111";
 comments[30] = "Id Pregunta: 3353. ";


//  Id pregunta: 3420 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Indicar cu&aacute;l de las siguientes ventajas corresponde al uso de una pasarela de aplicaci&oacute;n como cortafuegos:";
 choices[31]= new Array();
 choices[31][0] = "Simplicidad";
 choices[31][1] = "Facilidad de control";
 choices[31][2] = "Rapidez";
 choices[31][3] = "Transparencia";
 answers[31] = choices[31][1];
 units[31] = "111";
 comments[31] = "Id Pregunta: 3420. ";


//  Id pregunta: 3431 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Indicar la respuesta correcta: El protocolo HTTP, utilizado al navegar por Internet:";
 choices[32]= new Array();
 choices[32][0] = "Realiza una nueva conexi&oacute;n TCP con el servidor cada vez que se solicita una nueva p&aacute;gina web";
 choices[32][1] = "Abre una conexi&oacute;n TCP con el servidor la primera vez que se solicita una p&aacute;gina y la mantiene abierta mientras no se cambia de servidor";
 choices[32][2] = "HTTP no es un protocolo de comunicaciones, sino un lenguaje para la creaci&oacute;n de p&aacute;ginas web";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][0];
 units[32] = "112";
 comments[32] = "Id Pregunta: 3431. ";


//  Id pregunta: 3468 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  El ruido t&eacute;rmico es una perturbaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Debida a las diferencias en los coeficientes de dilataci&oacute;n de los conductores";
 choices[33][1] = "Aleatoria que aparece de forma natural en los conductores por agitaci&oacute;n de los electrones";
 choices[33][2] = "Igual a la temperatura a la cual la resistencia equivalente del dispositivo producir&iacute;a el ruido total observado";
 choices[33][3] = "Introducida en el proceso de cuantificaci&oacute;n";
 answers[33] = choices[33][1];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3468. ";


//  Id pregunta: 3469 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  El servicio Archie se utiliza para:";
 choices[34]= new Array();
 choices[34][0] = "navegar usando men&uacute;s sin conocer la direcci&oacute;n de la informaci&oacute;n";
 choices[34][1] = "recibir de un servidor las direcciones de bases de datos m&aacute;s adecuadas para responder a la pregunta";
 choices[34][2] = "realizar b&uacute;squedas por los nombres de los ficheros de los servidores FTP";
 choices[34][3] = "buscar informaci&oacute;n seg&uacute;n un esquema de enlaces hipertexto";
 answers[34] = choices[34][2];
 units[34] = "112";
 comments[34] = "Id Pregunta: 3469. ";


//  Id pregunta: 3472 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  El servivio TMA, implantado por Telef&oacute;nica a principios de los a&ntilde;os 80, se basaba en tecnolog&iacute;a:";
 choices[35]= new Array();
 choices[35][0] = "TACS";
 choices[35][1] = "AMPS";
 choices[35][2] = "ETACS";
 choices[35][3] = "NMT";
 answers[35] = choices[35][3];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3472. ";


//  Id pregunta: 3474 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  El teorema del muestreo, que nos indica la frecuencia con la que debemos muestrear una se&ntilde;al para no perder informaci&oacute;n al digitalizarla, es debido a:";
 choices[36]= new Array();
 choices[36][0] = "Shannon";
 choices[36][1] = "Oppenheim";
 choices[36][2] = "Shafer";
 choices[36][3] = "Nyquist";
 answers[36] = choices[36][3];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3474. *: Teorema Nyquist";


//  Id pregunta: 3630 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  La pen&iacute;nsula ib&eacute;rica est&aacute; telem&aacute;ticamente unida a las islas Canarias:";
 choices[37]= new Array();
 choices[37][0] = "&uacute;nicamente mediante enlace por sat&eacute;lite";
 choices[37][1] = "&uacute;nicamente mediante enlace por cable submarino";
 choices[37][2] = "mediante cable submarino como enlace principal y por sat&eacute;lite como enlace de reserva";
 choices[37][3] = "mediante enlace por sat&eacute;lite como enlace principal y por cable submarino como enlace de reserva";
 answers[37] = choices[37][2];
 units[37] = "105,110";
 comments[37] = "Id Pregunta: 3630. ";


//  Id pregunta: 3641 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  La separaci&oacute;n entre diferentes canales de radio en UMTS se hace mediante:";
 choices[38]= new Array();
 choices[38][0] = "Diferentes frecuencias";
 choices[38][1] = "Distintos intervalos temporales";
 choices[38][2] = "Diferentes c&oacute;digos";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][2];
 units[38] = "108";
 comments[38] = "Id Pregunta: 3641. ";


//  Id pregunta: 3748 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Mbone es:";
 choices[39]= new Array();
 choices[39][0] = "una versi&oacute;n avanzada de Internet 2";
 choices[39][1] = "un backbone especializado en tranmisi&oacute;n de datos multimedia s&oacute;lo en tiempo real";
 choices[39][2] = "el backbone que une todas las dependencias del MIT para intercambio de informaci&oacute;n cient&iacute;fica y tecnol&oacute;gica";
 choices[39][3] = "una red virtual sobre porciones de internet con islas IP multicast";
 answers[39] = choices[39][3];
 units[39] = "112";
 comments[39] = "Id Pregunta: 3748. ";


//  Id pregunta: 3755 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  OFTP es:";
 choices[40]= new Array();
 choices[40][0] = "Una versi&oacute;n de TCP/IP para OS/2";
 choices[40][1] = "Odette FTP, una variaci&oacute;n de FTP dise&ntilde;ada para intercambiar ficheros en el mundo de las empresas de automoci&oacute;n";
 choices[40][2] = "Other FTP, una implementaci&oacute;n libre de FTP que es compatible con cualquier plataforma existente en el mercado";
 choices[40][3] = "Own FTP, FTP dise&ntilde;ado por Microsoft para optimizaci&oacute;n del rendimiento del intercambio de archivos entre sus servidores";
 answers[40] = choices[40][1];
 units[40] = "112";
 comments[40] = "Id Pregunta: 3755. ";


//  Id pregunta: 3829 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  S-HTTP:";
 choices[41]= new Array();
 choices[41][0] = "es lo mismo que HTTPS (HTTP + SSL)";
 choices[41][1] = "responde por Secure-HTTP, y est&aacute; escasamente implantado";
 choices[41][2] = "Est&aacute; dise&ntilde;ado por los creadores del protocolo HTTP";
 choices[41][3] = "Es un protocolo del nivel de transporte";
 answers[41] = choices[41][1];
 units[41] = "111";
 comments[41] = "Id Pregunta: 3829. ";


//  Id pregunta: 3942 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  Con la API de Servlet con respecto a cookies se puede:";
 choices[42]= new Array();
 choices[42][0] = "S&oacute;lo se pueden leer cookies";
 choices[42][1] = "S&oacute;lo se pueden leer y especificar atributos de cookie pero no crear cookies";
 choices[42][2] = "Se pueden crear cookies";
 choices[42][3] = "S&oacute;lo se pueden situar los Cookies en las cabeceras de respuesta al cliente";
 answers[42] = choices[42][2];
 units[42] = "116";
 comments[42] = "Id Pregunta: 3942. Pregunta no perteneciente al test  del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de API de servlet)";


//  Id pregunta: 3966 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  Respecto de Java y JavaScript se puede decir";
 choices[43]= new Array();
 choices[43][0] = "Los dos son lenguajes interpretados";
 choices[43][1] = "Java es compilado en tiempo de ejecuci&oacute;n y JavaScript interpretado                                                           ";
 choices[43][2] = "JavaScript es compilado en tiempo de ejecuci&oacute;n y Java interpretado";
 choices[43][3] = "Ambos son compilados";
 answers[43] = choices[43][1];
 units[43] = "114";
 comments[43] = "Id Pregunta: 3966. ";


//  Id pregunta: 4007 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;En qu&eacute; RFC se encuentra definido el protocolo SMTP (&quot;Simple Mail Transfer Protocol&quot;)?";
 choices[44]= new Array();
 choices[44][0] = "RFC 821";
 choices[44][1] = "RFC 820";
 choices[44][2] = "RFC 823";
 choices[44][3] = "RFC 822";
 answers[44] = choices[44][0];
 units[44] = "106";
 comments[44] = "Id Pregunta: 4007. ";


//  Id pregunta: 4027 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;Qu&eacute; modulaci&oacute;n se usa en GSM?";
 choices[45]= new Array();
 choices[45][0] = "QPSK";
 choices[45][1] = "BPSK";
 choices[45][2] = "QAM";
 choices[45][3] = "GMSK";
 answers[45] = choices[45][3];
 units[45] = "108";
 comments[45] = "Id Pregunta: 4027. ";


//  Id pregunta: 4082 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  El protocolo y puerto empleado para la transferencia de p&aacute;ginas web es";
 choices[46]= new Array();
 choices[46][0] = "html y 80";
 choices[46][1] = "http y 80";
 choices[46][2] = "http y 8080";
 choices[46][3] = "ftp y 80";
 answers[46] = choices[46][1];
 units[46] = "113";
 comments[46] = "Id Pregunta: 4082. ";


//  Id pregunta: 4269 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Indique cu&aacute;l de las siguientes no es una direcci&oacute;n IP correcta:";
 choices[47]= new Array();
 choices[47][0] = "115.26.13.4";
 choices[47][1] = "255.3.4.5";
 choices[47][2] = "10.0.0.1";
 choices[47][3] = "0.0.0.3";
 answers[47] = choices[47][1];
 units[47] = "99";
 comments[47] = "Id Pregunta: 4269. ";


//  Id pregunta: 4309 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Ernesto es un jefe de proyecto que en una nueva aplicaci&oacute;n que est&aacute; realizando en su Ministerio ha decidido emplear la tecnolog&iacute;a CORBA de objetos distribuidos. La raz&oacute;n m&aacute;s probable por la que Ernesto ha decidido utilizar CORBA es";
 choices[48]= new Array();
 choices[48][0] = "CORBA es la tecnolog&iacute;a de objetos distribuidos m&aacute;s sencilla";
 choices[48][1] = "CORBA es multilenguaje, con interfaces Fortran, Java, Lisp, Ada, etc.";
 choices[48][2] = "CORBA es ideal para sistemas cerrados Java";
 choices[48][3] = "CORBA es una tecnolog&iacute;a de Microsoft, y se adapta muy bien para desarrollos en Visual Basic y J++";
 answers[48] = choices[48][1];
 units[48] = "62";
 comments[48] = "Id Pregunta: 4309. ";


//  Id pregunta: 4324 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  En una Organizaci&oacute;n, el Administrador de Bases de Datos puede ejercer todas las funciones siguientes, excepto";
 choices[49]= new Array();
 choices[49][0] = "Determinar los criterios de acceso a la base de datos.";
 choices[49][1] = "Monitorizar la base de datos mediante herramientas de an&aacute;lisis.";
 choices[49][2] = "Seleccionar las herramientas de optimizaci&oacute;n del rendimiento de la base.";
 choices[49][3] = "Definir e iniciar los procedimientos de respaldo y recuperaci&oacute;n.";
 answers[49] = choices[49][0];
 units[49] = "26";
 comments[49] = "Id Pregunta: 4324. ";


//  Id pregunta: 4348 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  El protocolo de comunicaciones seguras en que el cliente genera aleatoriamente una clave sim&eacute;trica, y la cifra con la clave p&uacute;blica del servidor receptor de la informaci&oacute;n, envi&aacute;ndosela cifrada a &eacute;ste, y posteriormente el servidor la descifra, con lo cual ambas partes ya poseen la clave sim&eacute;trica y se pueden comunicar con confidencialidad, es:";
 choices[50]= new Array();
 choices[50][0] = "IPSec (IP Security).";
 choices[50][1] = "SSL/TSL (Secure sockets Layer/Transport Layer Security).";
 choices[50][2] = "RSA (Rivest-Shamir-Adleman).";
 choices[50][3] = "WEP (Wired Equivalent Privacy).";
 answers[50] = choices[50][1];
 units[50] = "73";
 comments[50] = "Id Pregunta: 4348. ";


//  Id pregunta: 4352 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  El dispositivo necesario para tener acceso a Internet a trav&eacute;s de la red de cable-TV que ofrecen distintos operadores, se llama:";
 choices[51]= new Array();
 choices[51][0] = "CODEC.";
 choices[51][1] = "Router.";
 choices[51][2] = "MODEM cable.";
 choices[51][3] = "Splitter.";
 answers[51] = choices[51][2];
 units[51] = "105";
 comments[51] = "Id Pregunta: 4352. ";


//  Id pregunta: 4353 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  La telefon&iacute;a m&oacute;vil celular:";
 choices[52]= new Array();
 choices[52][0] = "Permite el paso din&aacute;mico de un terminal entre las c&eacute;lulas.";
 choices[52][1] = "No permite el cambio de c&eacute;lula durante la conversaci&oacute;n.";
 choices[52][2] = "Establece un tama&ntilde;o de c&eacute;lula mayor en ciudad que en espacios abiertos a fin de soportar la mayor densidad de tr&aacute;fico.";
 choices[52][3] = "S&oacute;lo funciona con tecnolog&iacute;a digital.";
 answers[52] = choices[52][0];
 units[52] = "108";
 comments[52] = "Id Pregunta: 4353. ";


//  Id pregunta: 4383 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  Cu&aacute;les de las siguientes pruebas no responde al tipo de prueba de caja negra?";
 choices[53]= new Array();
 choices[53][0] = "Particiones de equivalencia.";
 choices[53][1] = "Pruebas de comparaci&oacute;n.";
 choices[53][2] = "Prueba del camino b&aacute;sico.";
 choices[53][3] = "Pruebas de datos imposibles.";
 answers[53] = choices[53][2];
 units[53] = "87";
 comments[53] = "Id Pregunta: 4383. ";


//  Id pregunta: 4394 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  El repositorio com&uacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Agrupa un conjunto de herramientas de desarrollo.";
 choices[54][1] = "Forma un banco de trabajo.";
 choices[54][2] = "Organiza un entorno de desarrollo.";
 choices[54][3] = "Es un manejador de versiones.";
 answers[54] = choices[54][2];
 units[54] = "87";
 comments[54] = "Id Pregunta: 4394. ";


//  Id pregunta: 4542 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  La concesi&oacute;n por un municipio de una licencia de establecimiento de instalaci&oacute;n de una antena previa a la aprobaci&oacute;n del Plan Territorial de Despliegue de Red que incluya a dicha antena, ser&aacute;:";
 choices[55]= new Array();
 choices[55][0] = "Nula de pleno derecho.";
 choices[55][1] = "Valida a todos los efectos.";
 choices[55][2] = "Valida si el Plan Territorial de Despliegue de Red que incluye a dicha antena se aprueba durante el mes siguiente a Ia concesi&oacute;n.";
 choices[55][3] = "Nula si la antena no se aprueba en el mes siguiente a contar desde Ia fecha de la concesi&oacute;n de la licencia.";
 answers[55] = choices[55][0];
 units[55] = "110";
 comments[55] = "Id Pregunta: 4542. ";


//  Id pregunta: 4595 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  Seg&uacute;n se indica en el Real Decreto 944/2005 cual es el porcentaje m&aacute;ximo del total de Ia capacidad de transmisi&oacute;n del multiple digital que se podr&aacute; utilizar para prestar servicios adicionales distintos del de difusi&oacute;n de televisi&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "20%";
 choices[56][1] = "40%";
 choices[56][2] = "50%";
 choices[56][3] = "60%";
 answers[56] = choices[56][0];
 units[56] = "110";
 comments[56] = "Id Pregunta: 4595. ";


//  Id pregunta: 4728 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[57]= new Array();
 choices[57][0] = "Estudio de Viabilidad del Sistema";
 choices[57][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[57][2] = "Concepci&oacute;n del Sistema";
 choices[57][3] = "Estudio del Sistema Actual";
 answers[57] = choices[57][1];
 units[57] = "86";
 comments[57] = "Id Pregunta: 4728. Examen 2006 JCYL";


//  Id pregunta: 4823 Año de creación de pregunta: 2007-01-01
 questions[58]= "59)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, &iquest;c&oacute;mo se punt&uacute;a el subcriterio 9b, &quot;Indicadores Clave del Rendimiento de la Organizaci&oacute;n&quot;, en el proceso de autoevaluaci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "Entre 0 y 100 y se multiplica por 0,50";
 choices[58][1] = "Entre 0 y 100 y se multiplica por 0,25";
 choices[58][2] = "Entre 0 y 50 y se multiplica por 0,50";
 choices[58][3] = "Entre 0 y 50 y se multiplica por 0,25";
 answers[58] = choices[58][0];
 units[58] = "92";
 comments[58] = "Id Pregunta: 4823. ";


//  Id pregunta: 4853 Año de creación de pregunta: 2007-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (JointPhotographic Experts Group)?";
 choices[59]= new Array();
 choices[59][0] = "B&aacute;sico/secuencial";
 choices[59][1] = "Jer&aacute;rquico";
 choices[59][2] = "Progresivo";
 choices[59][3] = "Conjugado modificado";
 answers[59] = choices[59][3];
 units[59] = "114";
 comments[59] = "Id Pregunta: 4853. ";


//  Id pregunta: 4860 Año de creación de pregunta: 2007-01-01
 questions[60]= "61)  Los certificados de clave p&uacute;blica:";
 choices[60]= new Array();
 choices[60][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones";
 choices[60][1] = "Ocupan m&aacute;s de 100 kbytes";
 choices[60][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest ShamirAdleman)";
 choices[60][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemasde clave p&uacute;blica";
 answers[60] = choices[60][0];
 units[60] = "73";
 comments[60] = "Id Pregunta: 4860. ";


//  Id pregunta: 4927 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, &iquest;en cu&aacute;l de las siguientes actividades del proceso de Planificaci&oacute;n del Sistema de Informaci&oacute;n participa el jefe del proyecto?:";
 choices[61]= new Array();
 choices[61][0] = "Definici&oacute;n y organizaci&oacute;n del plan de sistemas de informaci&oacute;n.";
 choices[61][1] = "Identificaci&oacute;n de requisitos.";
 choices[61][2] = "Estudio de los sistemas de informaci&oacute;n actuales.";
 choices[61][3] = "Definici&oacute;n de la arquitectura tecnol&oacute;gica.";
 answers[61] = choices[61][0];
 units[61] = "86";
 comments[61] = "Id Pregunta: 4927. Examen TIC B 2007";


//  Id pregunta: 4949 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  Indique el API (Application Programming Interface) de JAVA que facilita el acceso a registros UDDI(Universal Description, Discovery and Integration):";
 choices[62]= new Array();
 choices[62][0] = "SAAJ";
 choices[62][1] = "JAXR";
 choices[62][2] = "SOAP";
 choices[62][3] = "STAX";
 answers[62] = choices[62][1];
 units[62] = "116";
 comments[62] = "Id Pregunta: 4949. Examen TIC B 2007";


//  Id pregunta: 4952 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  &iquest;Qu&eacute; proporciona el proyecto MONO?:";
 choices[63]= new Array();
 choices[63][0] = "Software libre para desarrollar y ejecutar aplicaciones .NET.";
 choices[63][1] = "Un entorno de desarrollo integrado de software libre para aplicaciones J2EE 5.0.";
 choices[63][2] = "Software libre para una soluci&oacute;n integrada de movilidad para correo electr&oacute;nico y agendas.";
 choices[63][3] = "Un ESB (Entreprise Service Bus) y plataforma de integraci&oacute;n de software libre para la constituci&oacute;n de arquitectura. SOA.";
 answers[63] = choices[63][0];
 units[63] = "62";
 comments[63] = "Id Pregunta: 4952. Examen TIC B 2007";


//  Id pregunta: 5215 Año de creación de pregunta: 2007-01-01
 questions[64]= "65)  Cu&aacute;l de los siguientes productos no se obtiene en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n orientado a objetos";
 choices[64]= new Array();
 choices[64][0] = "Dise&ntilde;o de la Interfaz de usuario";
 choices[64][1] = "Modelos de Clases de Dise&ntilde;o";
 choices[64][2] = "Dise&ntilde;o de la Arquitectura Modular e Interfaz de Usuario";
 choices[64][3] = "Especificaciones de Implantaci&oacute;n";
 answers[64] = choices[64][2];
 units[64] = "86";
 comments[64] = "Id Pregunta: 5215. ";


//  Id pregunta: 5241 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  Respecto al an&aacute;lisis D.A.F.O indique la opci&oacute;n incorrecta ";
 choices[65]= new Array();
 choices[65][0] = "Herramienta estrat&eacute;gica por excelencia cuyo objetivo es conocer la situaci&oacute;n real de una organizaci&oacute;n, as&iacute; como los riesgos y oportunidades que le brinda el mercado";
 choices[65][1] = "Tambi&eacute;n llamado Matriz TOWS en terminolog&iacute;a anglosajona";
 choices[65][2] = "Las amenazas y oportunidades corresponden al entorno interno de la organizaci&oacute;n, debiendo &eacute;sta a aprovecharlas o superarlas, anticip&aacute;ndose a las mismas";
 choices[65][3] = "Las fortalezas suponen ventaja competitiva que pueden servir para explotar oportunidades";
 answers[65] = choices[65][2];
 units[65] = "77";
 comments[65] = "Id Pregunta: 5241. ";


//  Id pregunta: 5287 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Indique cu&aacute;l de las siguientes tecnolog&iacute;as JAVA puede utilizarse para invocar dentro de una aplicaci&oacute;n a un parser DOM:";
 choices[66]= new Array();
 choices[66][0] = "JAX-RPC";
 choices[66][1] = "SAAJ";
 choices[66][2] = "JAXR";
 choices[66][3] = "JAXP";
 answers[66] = choices[66][3];
 units[66] = "116";
 comments[66] = "Id Pregunta: 5287. ";


//  Id pregunta: 5289 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  Respecto a las comunicaciones m&oacute;viles, el paso de la generaci&oacute;n 2G a la generaci&oacute;n 2.5G ha requerido la realizaci&oacute;n de inversiones:";
 choices[67]= new Array();
 choices[67][0] = "En el acceso radio";
 choices[67][1] = "En la infraestructura de red, para permitir la conmutaci&oacute;n de paquetes";
 choices[67][2] = "No fue necesario modificar la infraestructura existente.";
 choices[67][3] = "Se hizo un despliegue totalmente nuevo, al basarse una en comunicaciones anal&oacute;gicas y otra en comunicadiones digitales";
 answers[67] = choices[67][1];
 units[67] = "108";
 comments[67] = "Id Pregunta: 5289. ";


//  Id pregunta: 5464 Año de creación de pregunta: 2003-01-01
 questions[68]= "69)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos y atributos del directorio activo se encuentra en el";
 choices[68]= new Array();
 choices[68][0] = "Schema Naming Context";
 choices[68][1] = "Active Directory Schema MMC";
 choices[68][2] = "Configuration Naming Context";
 choices[68][3] = "Domain Naming Context";
 answers[68] = choices[68][0];
 units[68] = "73";
 comments[68] = "Id Pregunta: 5464. Castilla y Le&oacute;n";


//  Id pregunta: 5498 Año de creación de pregunta: 2003-01-01
 questions[69]= "70)  Es posible que cada programador defina sus librer&iacute;as de etiquetas JSP mediante: ";
 choices[69]= new Array();
 choices[69][0] = "La extensi&oacute;n de  la clase Servlet";
 choices[69][1] = "La especificaci&oacute;n JSTL";
 choices[69][2] = "El uso de scriptlets";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][1];
 units[69] = "116";
 comments[69] = "Id Pregunta: 5498. ";


//  Id pregunta: 5516 Año de creación de pregunta: 2003-01-01
 questions[70]= "71)  Indique cu&aacute;l de los siguientes es un framework de c&oacute;digo abierto que se ocupa de la capa de persistencia entre la l&oacute;gica de negocio y la base de datos: ";
 choices[70]= new Array();
 choices[70][0] = "iBATIS";
 choices[70][1] = "JAVA SERVER FACES";
 choices[70][2] = "TAPESTRY";
 choices[70][3] = "STRUTS";
 answers[70] = choices[70][0];
 units[70] = "116";
 comments[70] = "Id Pregunta: 5516. ";


//  Id pregunta: 5603 Año de creación de pregunta: 2003-01-01
 questions[71]= "72)  En una red de CATV &iquest;cu&aacute;l es el rango de frecuencias que se utiliza en sentido ascendente para el envio de informaci&oacute;n de usuario a cabecera?";
 choices[71]= new Array();
 choices[71][0] = "De 55 a 150";
 choices[71][1] = "De 550 a 860";
 choices[71][2] = "De 50 a 550";
 choices[71][3] = "De 5 a 50";
 answers[71] = choices[71][3];
 units[71] = "105";
 comments[71] = "Id Pregunta: 5603. ";


//  Id pregunta: 5761 Año de creación de pregunta: 2009-01-01
 questions[72]= "73)  &iquest;Qu&eacute; versi&oacute;n de KDE introdujo los plasmoides?";
 choices[72]= new Array();
 choices[72][0] = "4.0";
 choices[72][1] = "5.3";
 choices[72][2] = "5.5";
 choices[72][3] = "6.0";
 answers[72] = choices[72][0];
 units[72] = "62";
 comments[72] = "Id Pregunta: 5761. ";


//  Id pregunta: 5765 Año de creación de pregunta: 2009-01-01
 questions[73]= "74)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos de normalizaci&oacute;n de puntuaciones no mantiene la proporcionalidad entre puntuaciones directas y normalizadas?";
 choices[73]= new Array();
 choices[73][0] = "Fracci&oacute;n del ideal";
 choices[73][1] = "Fracci&oacute;n de la suma";
 choices[73][2] = "Fracci&oacute;n del m&aacute;ximo";
 choices[73][3] = "Todas las anteriores mantienen la proporcionalidad";
 answers[73] = choices[73][0];
 units[73] = "34";
 comments[73] = "Id Pregunta: 5765. ";


//  Id pregunta: 5766 Año de creación de pregunta: 2009-01-01
 questions[74]= "75)  &iquest;A cu&aacute;l de las siguientes categor&iacute;as de m&eacute;todos de ordenaci&oacute;n de alternativas pertenece el m&eacute;todo PROMETHEE?";
 choices[74]= new Array();
 choices[74][0] = "Concordancia";
 choices[74][1] = "Permutaciones";
 choices[74][2] = "Relaciones de superaci&oacute;n";
 choices[74][3] = "Ponderaci&oacute;n lineal";
 answers[74] = choices[74][2];
 units[74] = "34";
 comments[74] = "Id Pregunta: 5766. ";


//  Id pregunta: 5792 Año de creación de pregunta: 2009-01-01
 questions[75]= "76)  Indique cu&aacute;l de los siguientes derechos de los ciudadanos al relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos NO est&aacute; reconocido por la ley 11/2007";
 choices[75]= new Array();
 choices[75][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[75][1] = "A conocer por medios electr&oacute;nicos el estado de tramitaci&oacute;n de cualquier procedimiento administrativo.";
 choices[75][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[75][3] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas de los documentos electr&oacute;nicos que formen parte de un expediente.";
 answers[75] = choices[75][1];
 units[75] = "43";
 comments[75] = "Id Pregunta: 5792. MAP 2008 A2";


//  Id pregunta: 5862 Año de creación de pregunta: 2009-01-01
 questions[76]= "77)  Con relaci&oacute;n a la especificaci&oacute;n P3P1.1, indique cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[76]= new Array();
 choices[76][0] = "Es una especificaci&oacute;n desarrollada por la W3C";
 choices[76][1] = "P3P permite que los sitios Web muestren sus pr&aacute;cticas de privacidad en un formato est&aacute;ndar";
 choices[76][2] = "P3P est&aacute; basado en CCXML";
 choices[76][3] = "El lenguaje APPEL permite describir colecciones de preferencias relacionadas con las directivas P3P";
 answers[76] = choices[76][2];
 units[76] = "111";
 comments[76] = "Id Pregunta: 5862. MAP 2008 A1";


//  Id pregunta: 5898 Año de creación de pregunta: 2009-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes corresponde a una tecnolog&iacute;a Java para acceder a bases de datos relacionales?";
 choices[77]= new Array();
 choices[77][0] = "JRDB";
 choices[77][1] = "JPA";
 choices[77][2] = "ORM";
 choices[77][3] = "Ninguna de las anteriores";
 answers[77] = choices[77][1];
 units[77] = "60";
 comments[77] = "Id Pregunta: 5898. ";


//  Id pregunta: 5950 Año de creación de pregunta: 2009-01-01
 questions[78]= "79)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[78]= new Array();
 choices[78][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[78][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[78][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[78][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[78] = choices[78][0];
 units[78] = "118";
 comments[78] = "Id Pregunta: 5950. ";


//  Id pregunta: 6126 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  De los siguientes pares de t&eacute;rminos referidos al control de calidad, indique cu&aacute;l contiene dos conceptos equivalentes:";
 choices[79]= new Array();
 choices[79][0] = "Prevenci&oacute;n e inspecci&oacute;n.";
 choices[79][1] = "Causas comunes y causas aleatorias.";
 choices[79][2] = "Muestreo por atributos y muestreo por variables.";
 choices[79][3] = "Tolerancias y l&iacute;mites de control.";
 answers[79] = choices[79][1];
 units[79] = "87";
 comments[79] = "Id Pregunta: 6126. TIC A 2009";


//  Id pregunta: 6184 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  Indique la afirmaci&oacute;n falsa sobre los sistemas de correo electr&oacute;nico SMTP:";
 choices[80]= new Array();
 choices[80][0] = "Es posible establecer DNS blacklist y whitelist en el cliente de correo y/o en el servidor.";
 choices[80][1] = "SMTP permite enviar mensajes codificados seg&uacute;n ASCII de 7 bits y longitud m&aacute;xima de 1000 caracteres.";
 choices[80][2] = "La cabecera MIME-Version debe contener el valor 2.0";
 choices[80][3] = "La cabecera  de un mensaje de correo  SMTP se especifica en la RFC 822.";
 answers[80] = choices[80][2];
 units[80] = "106";
 comments[80] = "Id Pregunta: 6184. ";


//  Id pregunta: 6218 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  En el modelo de estimaci&oacute;n de costes COCOMO se utiliza de base la siguiente funci&oacute;n: 'E = a(Kl)b * m(X)' &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[81]= new Array();
 choices[81][0] = "a y b son variables con valores indefinidos";
 choices[81][1] = "Kl es la cantidad de l&iacute;neas de c&oacute;digo, en millones";
 choices[81][2] = "m(X) es una variable obtenida en una tabla a partir del n&uacute;mero de trabajadores y del conocimiento de las herramientas a utilizar";
 choices[81][3] = "El resultado se da en unidades salario/mes y horas-hombre";
 answers[81] = choices[81][3];
 units[81] = "89";
 comments[81] = "Id Pregunta: 6218. TICB-2009, bloque desarrollo";


//  Id pregunta: 6407 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  &iquest;Puede el cesionario titular de derechos de explotaci&oacute;n realizar o autorizar la realizaci&oacute;n de versiones sucesivas de un programa o programas derivados del mismo, sin permiso del autor?";
 choices[82]= new Array();
 choices[82][0] = "No, salvo pacto en contrario";
 choices[82][1] = "S&iacute;, salvo pacto en contrario";
 choices[82][2] = "S&iacute;, en cualquier caso";
 choices[82][3] = "No, en ning&uacute;n caso";
 answers[82] = choices[82][1];
 units[82] = "36";
 comments[82] = "Id Pregunta: 6407. Art&iacute;culo 100 RDL 1/1996";


//  Id pregunta: 6409 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  &iquest;Qu&eacute; significa DRM?";
 choices[83]= new Array();
 choices[83][0] = "Digital Rights Management";
 choices[83][1] = "Direct Rights Management";
 choices[83][2] = "Direct Restriction Management";
 choices[83][3] = "Digital Restrictions Management";
 answers[83] = choices[83][0];
 units[83] = "37";
 comments[83] = "Id Pregunta: 6409. ";


//  Id pregunta: 6432 Año de creación de pregunta: 2010-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de las siguientes aplicaciones es un motor de b&uacute;squeda apoyado por el Apache Software Foundation?";
 choices[84]= new Array();
 choices[84][0] = "Apache WatchDog";
 choices[84][1] = "Apache Velocity";
 choices[84][2] = "Apache Tomcat";
 choices[84][3] = "Apache Lucene";
 answers[84] = choices[84][3];
 units[84] = "62";
 comments[84] = "Id Pregunta: 6432. ";


//  Id pregunta: 6486 Año de creación de pregunta: 2010-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de las siguientes es una desventaja de LMDS?";
 choices[85]= new Array();
 choices[85][0] = "La necesidad de desplegar fibra &oacute;ptica hasta las proximidades del cliente";
 choices[85][1] = "Requiere eliminar las bobinas de carga del bucle local";
 choices[85][2] = "Requiere licencia de uso del espectro radioel&eacute;ctrico para la operadora";
 choices[85][3] = "Es un servicio punto a punto";
 answers[85] = choices[85][2];
 units[85] = "108";
 comments[85] = "Id Pregunta: 6486. Castilla La Mancha 2009";


//  Id pregunta: 6617 Año de creación de pregunta: 2010-01-01
 questions[86]= "87)  &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[86]= new Array();
 choices[86][0] = "Las Pruebas de Aceptaci&oacute;n se definen en ASI y se ejecutan en CSI";
 choices[86][1] = "Las Pruebas de Implantaci&oacute;n se definen en DSI y se ejecutan en IAS";
 choices[86][2] = "Las Pruebas de Implantaci&oacute;n se definen en ASI y se ejecutan en CSI";
 choices[86][3] = "Las Pruebas de Aceptaci&oacute;n se definen en DSI y se ejecutan en IAS";
 answers[86] = choices[86][1];
 units[86] = "86";
 comments[86] = "Id Pregunta: 6617. ";


//  Id pregunta: 6623 Año de creación de pregunta: 2010-01-01
 questions[87]= "88)  ISO 8402 define la calidad del software como:";
 choices[87]= new Array();
 choices[87][0] = "La capacidad de un conjunto de caracter&iacute;sticas intr&iacute;nsecas para satisfacer requisitos";
 choices[87][1] = "Conjunto de propiedades y caracter&iacute;sticas de un producto o servicio, que le confieren aptitud para satisfacer una serie de necesidades expl&iacute;citas o impl&iacute;citas";
 choices[87][2] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que seesperan de todo software desarrollado profesionalmente";
 choices[87][3] = "La norma ISO 8402 no es una norma de calidad";
 answers[87] = choices[87][1];
 units[87] = "87";
 comments[87] = "Id Pregunta: 6623. ";


//  Id pregunta: 6640 Año de creación de pregunta: 2010-01-01
 questions[88]= "89)  La principal diferencia entre la t&eacute;cnica de los Puntos de Funci&oacute;n (PF's) y los PF's Mark II es:";
 choices[88]= new Array();
 choices[88][0] = "Los PF's Mark II utilizan el concepto de transacci&oacute;n l&oacute;gica";
 choices[88][1] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros)";
 choices[88][2] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros), m&aacute;s el concepto de transacci&oacute;n l&oacute;gica";
 choices[88][3] = "Los PF's Mark II utilizan 5 elementos (Entradas, Salidas, Consultas, Ficheros e Interfaces)";
 answers[88] = choices[88][0];
 units[88] = "88";
 comments[88] = "Id Pregunta: 6640. ";


//  Id pregunta: 7167 Año de creación de pregunta: 2010-01-01
 questions[89]= "90)  Se&ntilde;ale cu&aacute;l de las siguientes licencias es la &uacute;nica que puede considerarse licencia de software libre compatible con la GNU GPL:";
 choices[89]= new Array();
 choices[89][0] = "Sun Community Source License";
 choices[89][1] = "Apache License. Version 2.0";
 choices[89][2] = "Microsoft Public License (MS-OL)";
 choices[89][3] = "GNU Lesser General Public License (LGPL)";
 answers[89] = choices[89][3];
 units[89] = "61";
 comments[89] = "Id Pregunta: 7167. Examen TIC B 2009";


//  Id pregunta: 7180 Año de creación de pregunta: 2010-01-01
 questions[90]= "91)  Uno de los modelos utilizados para la estimaci&oacute;n de costes de un proyecto inform&aacute;tico es COCOMO (COnstructive COst MOdel). Se puede afirmar sobre &eacute;l que:";
 choices[90]= new Array();
 choices[90][0] = "La medici&oacute;n que realiza COCOMO por l&iacute;neas de c&oacute;digo es especialmente &uacute;til para la Orientaci&oacute;n a Objetos";
 choices[90][1] = "Incluye tres submodelos: B&aacute;sico, Intermedio y Detallado";
 choices[90][2] = "Cada submodelo se divide en tres modos: Org&aacute;nico, Inorg&aacute;nico y Directo";
 choices[90][3] = "El modo Org&aacute;nico se aplica a un tipo de proyectos complejos, en los que se tiene experiencia y con unos requisitos muy restrictivos";
 answers[90] = choices[90][1];
 units[90] = "89";
 comments[90] = "Id Pregunta: 7180. Examen TIC B 2009";


//  Id pregunta: 7260 Año de creación de pregunta: 2010-01-01
 questions[91]= "92)  La diferencia entre los protocolos POP  e IMAP es que:";
 choices[91]= new Array();
 choices[91][0] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de recepci&oacute;n";
 choices[91][1] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de env&iacute;o y recepci&oacute;n";
 choices[91][2] = "Uno establece una comunicaci&oacute;n bidireccional y el otro no";
 choices[91][3] = "La capa de ubicaci&oacute;n de cada uno de ellos en el modelo TCP/IP es distinta";
 answers[91] = choices[91][2];
 units[91] = "106";
 comments[91] = "Id Pregunta: 7260. Examen TIC B 2009";


//  Id pregunta: 8269 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  &iquest;C&uacute;al de las siguientes organizaciones realiza actuaciones para la persecuci&oacute;n legal de la pirater&iacute;a inform&aacute;tica y para evitar la violaci&oacute;n de los derechos de copyright?:";
 choices[92]= new Array();
 choices[92][0] = "BSA ( Business Software Alliance).";
 choices[92][1] = "GSC ( General Software Committee).";
 choices[92][2] = "DRG (Digital Right Group).";
 choices[92][3] = "SSC (Secure Software Commission).";
 answers[92] = choices[92][0];
 units[92] = "37";
 comments[92] = "Id Pregunta: 8269. Examen TIC A1 2010";


//  Id pregunta: 8381 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  La tecnolog&iacute;a de transmisi&oacute;n 100Base-FX:";
 choices[93]= new Array();
 choices[93][0] = "Utiliza cable UTP de categor&iacute;a 5 o superior.";
 choices[93][1] = "Tiene una longitud m&aacute;xima de 2 kil&oacute;metros para transmisiones half-duplex y 400 metros para transmisiones full-duplex.";
 choices[93][2] = "Es compatible con la tecnolog&iacute;a 10Base&bull;FL.";
 choices[93][3] = "Puede usar conectores MIC.";
 answers[93] = choices[93][3];
 units[93] = "99";
 comments[93] = "Id Pregunta: 8381. Examen TIC A2 2010";


//  Id pregunta: 8442 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Seg&uacute;n el RD 1671/2009, en caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, deber&aacute;n cumplirse una serie de requisitos. &iquest;Cu&aacute;l de los siguientes requisitos no se encuentra entre ellos?";
 choices[94]= new Array();
 choices[94][0] = "Que el documento electr&oacute;nico original, que debe conservarse en todo caso, se encuentre en poder de la Administraci&oacute;n.";
 choices[94][1] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento que en cada caso se aprueben, incluidas las de obtenci&oacute;n automatizada.";
 choices[94][2] = "Que incluya el sello electr&oacute;nico del organismo.";
 choices[94][3] = "Que sea autorizada mediante firma electr&oacute;nica conforme a los sistemas recogidos en los art&iacute;culos 18 y 19 de la Ley 11/2007, de 22 de junio.";
 answers[94] = choices[94][2];
 units[94] = "43";
 comments[94] = "Id Pregunta: 8442. ";


//  Id pregunta: 8542 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l es el est&aacute;ndar europeo de TDT?";
 choices[95]= new Array();
 choices[95][0] = "ISDB.";
 choices[95][1] = "MPEG-2";
 choices[95][2] = "DVB-T";
 choices[95][3] = "EDTV";
 answers[95] = choices[95][2];
 units[95] = "105";
 comments[95] = "Id Pregunta: 8542. Examen TIC A2 2010 interna";


//  Id pregunta: 8610 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  En el contexto de las tareas de explotaci&oacute;n de sistemas de informaci&oacute;n, se denominan tareas u operaciones &quot;lights-out&quot; a:";
 choices[96]= new Array();
 choices[96][0] = "Las tareas u operaciones automatizadas, que se llevan a cabo sin intervenci&oacute;n humana, de forma desatendida";
 choices[96][1] = "Las tareas incluidas en el plan de contingencias, a llevar a cabo en caso de corte del suminstro el&eacute;ctrico.";
 choices[96][2] = "Las tareas que no se pueden automatizar, por lo que necesariamente requieren personal para su realizaci&oacute;n.";
 choices[96][3] = "Las tareas criticas, que requieren su Inclusi&oacute;n especifica en el plan de contingencias, en una localizaci&oacute;n f&iacute;sica alternativa a la habitual.";
 answers[96] = choices[96][0];
 units[96] = "26";
 comments[96] = "Id Pregunta: 8610. Examen TIC A2 2010 interna";


//  Id pregunta: 8657 Año de creación de pregunta: 2011-01-01
 questions[97]= "98)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[97]= new Array();
 choices[97][0] = "Firma digital";
 choices[97][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[97][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[97][3] = "Seguridad Wi-Fi";
 answers[97] = choices[97][1];
 units[97] = "99, 101";
 comments[97] = "Id Pregunta: 8657. Examen UPM A2 2011";


//  Id pregunta: 8774 Año de creación de pregunta: 2011-01-01
 questions[98]= "99)  a) &iquest;Cu&aacute;l de las siguientes cabeceras de extensi&oacute;n no est&aacute; especificada en la RFC 2460 que desarrolla las especificaciones de el protocolo IPv6?";
 choices[98]= new Array();
 choices[98][0] = "Hop-By-Hop Options";
 choices[98][1] = "Routing (Type 0)";
 choices[98][2] = "Fragment";
 choices[98][3] = "Authentication Header";
 answers[98] = choices[98][3];
 units[98] = "100";
 comments[98] = "Id Pregunta: 8774. Examen UPM A2 2011";


//  Id pregunta: 9040 Año de creación de pregunta: 2011-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[99]= new Array();
 choices[99][0] = "Apache Axis2";
 choices[99][1] = "Hibernate";
 choices[99][2] = "Struts";
 choices[99][3] = "TopLink";
 answers[99] = choices[99][0];
 units[99] = "60";
 comments[99] = "Id Pregunta: 9040. ";


