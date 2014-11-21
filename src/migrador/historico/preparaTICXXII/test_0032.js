/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 15 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l no es un aspecto concreto por el que la tecnolog&iacute;a de la informaci&oacute;n afecta directamente a la competitividad de las empresas?:";
 choices[0]= new Array();
 choices[0][0] = "Alteraci&oacute;n o cambio de las estructuras de las industrias";
 choices[0][1] = "Simplifica las tareas realizar";
 choices[0][2] = "Afecta a los costes y a la diferenciaci&oacute;n estrat&eacute;gica";
 choices[0][3] = "Expande las actividades haciendo que se puedan crear nuevos negocios";
 answers[0] = choices[0][1];
 units[0] = "22";
 comments[0] = "Id Pregunta: 15. ";


//  Id pregunta: 153 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El modelo orientado a los tratamientos:";
 choices[1]= new Array();
 choices[1][0] = "Trata de identificar las funciones a desarrollar por el sistema de informaci&oacute;n";
 choices[1][1] = "Trata de identificar la evoluci&oacute;n de la vida de las entidades";
 choices[1][2] = "Trata de identificar las funciones a desarrollar por el sistema inform&aacute;tico";
 choices[1][3] = "Trata de identificar la evoluci&oacute;n de la vida del sistema";
 answers[1] = choices[1][0];
 units[1] = "21";
 comments[1] = "Id Pregunta: 153. ";


//  Id pregunta: 220 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En la planificaci&oacute;n de proyectos:";
 choices[2]= new Array();
 choices[2][0] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-)  presentan dependencias pero no informaci&oacute;n temporal.";
 choices[2][1] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-)  presentan dependencias e informaci&oacute;n temporal.";
 choices[2][2] = "Los gr&aacute;ficos de barras o de Gantt representan las dependencias entre tareas.";
 choices[2][3] = "El camino cr&iacute;tico en un proyecto ha de ser necesariamente &uacute;nico.";
 answers[2] = choices[2][0];
 units[2] = "27";
 comments[2] = "Id Pregunta: 220. La informaci&oacute;n temporal puede aparecer pero no siempre aparece";


//  Id pregunta: 228 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En las estrategias de negociaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "La estrategia de ganar-ganar es la que por lo general deja m&aacute;s satisfechos a las 2 partes";
 choices[3][1] = "La estrategia de perder-perder suele llevar a un equilibrio inestable que provoca que tarde o temprano tenga que volverse a retomar la negociaci&oacute;n";
 choices[3][2] = "Las 2 respuestas anteriores son correctas";
 choices[3][3] = "Ninguna de las respuestas anteriores son correctas";
 answers[3] = choices[3][2];
 units[3] = "28";
 comments[3] = "Id Pregunta: 228. negociaci&oacute;n";


//  Id pregunta: 319 Año de creación de pregunta: 2009-01-01
 questions[4]= "5)  La LOPD se aplicar&aacute; sin especialidad indicada a:";
 choices[4]= new Array();
 choices[4][0] = "Los ficheros que mantengan las personas f&iacute;sicas con fines exclusivamente dom&eacute;sticos o personales";
 choices[4][1] = "A todos aquellos datos de car&aacute;cter personal registrados en cualquier soporte que los haga susceptibles de tratamiento y cualquier modalidad de uso posterior de los mismos";
 choices[4][2] = "Los ficheros regulados por la legislaci&oacute;n electoral o sobre estad&iacute;stica p&uacute;blica";
 choices[4][3] = "Los ficheros derivados de los Registros Civiles";
 answers[4] = choices[4][1];
 units[4] = "29";
 comments[4] = "Id Pregunta: 319. ";


//  Id pregunta: 321 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  La norma 1003.1-1988 de IEEE se corresponde con la norma ISO:";
 choices[5]= new Array();
 choices[5][0] = "7498";
 choices[5][1] = "9735";
 choices[5][2] = "9075";
 choices[5][3] = "9945";
 answers[5] = choices[5][3];
 units[5] = "40";
 comments[5] = "Id Pregunta: 321. ";


//  Id pregunta: 326 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  Cuando utilizamos las siglas SSD-AAPP, nos estamos refiriendo a:";
 choices[6]= new Array();
 choices[6][0] = "Un sistema de informaci&oacute;n dedicado al an&aacute;lisis de redes de comunicaciones.";
 choices[6][1] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para ayudar a la elecci&oacute;n en la contrataci&oacute;n de bienes o servicios inform&aacute;ticos.";
 choices[6][2] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para decidir si debemos contratar un desarrollo a una empresa externa o hacerlo con medios propios.";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][1];
 units[6] = "34";
 comments[6] = "Id Pregunta: 326. Modificado enunciado (antes SSD-CIABSI) por JCED Preparatic XVII";


//  Id pregunta: 367 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Los dominios de c&oacute;digo de pa&iacute;s en Internet est&aacute;n establecidos en la norma ISO:";
 choices[7]= new Array();
 choices[7][0] = "9735";
 choices[7][1] = "9075";
 choices[7][2] = "3166";
 choices[7][3] = "8422";
 answers[7] = choices[7][2];
 units[7] = "42";
 comments[7] = "Id Pregunta: 367. ";


//  Id pregunta: 499 Año de creación de pregunta: 2003-01-01
 questions[8]= "9)  El nivel EAL4 de Criterios Comunes considera el dise&ntilde;o del producto";
 choices[8]= new Array();
 choices[8][0] = "S&iacute;";
 choices[8][1] = "No, es el EAL2 el que lo considera";
 choices[8][2] = "No, es el EAL3 el que lo considera";
 choices[8][3] = "Ninguna de las anteriores respuestas es cierta";
 answers[8] = choices[8][0];
 units[8] = "31,32,33";
 comments[8] = "Id Pregunta: 499. ";


//  Id pregunta: 772 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  Qu&eacute; significan las siglas JNI";
 choices[9]= new Array();
 choices[9][0] = "Interfaz para llamar m&eacute;todos nativos ";
 choices[9][1] = "Sistema de directorio";
 choices[9][2] = "Sistema para datamining";
 choices[9][3] = "ninguna de las anteriores";
 answers[9] = choices[9][0];
 units[9] = "60";
 comments[9] = "Id Pregunta: 772. ";


//  Id pregunta: 1009 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  El control de la ejecuci&oacute;n de un programa JCL se realiza por medio de:";
 choices[10]= new Array();
 choices[10][0] = "El subsistema del control de trabajos del sistema operativo";
 choices[10][1] = "El cortafuegos";
 choices[10][2] = "El subsistema de seguridad Kerberos";
 choices[10][3] = "El filtro de paquetes IP";
 answers[10] = choices[10][0];
 units[10] = "52";
 comments[10] = "Id Pregunta: 1009. ";


//  Id pregunta: 1010 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  El creador de HTML fue:";
 choices[11]= new Array();
 choices[11][0] = "Tim Berners-Lee";
 choices[11][1] = "Ivar Jacobson";
 choices[11][2] = "Grady Booch";
 choices[11][3] = "Todas son falsas";
 answers[11] = choices[11][0];
 units[11] = "69";
 comments[11] = "Id Pregunta: 1010. ";


//  Id pregunta: 1175 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indicar cu&aacute;l de las siguientes es una arquitectura cl&aacute;sica de la resoluci&oacute;n distribuida de problemas:";
 choices[12]= new Array();
 choices[12][0] = "Red de contratos";
 choices[12][1] = "Arquitectura de pizarra";
 choices[12][2] = "Las dos primeras son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 choices[12][3] = "Ninguna de las anteriores son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 answers[12] = choices[12][2];
 units[12] = "63";
 comments[12] = "Id Pregunta: 1175. ";


//  Id pregunta: 1553 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de un sistema de almacenamiento de datos Data-warehouse?:";
 choices[13]= new Array();
 choices[13][0] = "Almacenamiento de datos hist&oacute;ricos.";
 choices[13][1] = "Alta volatilidad de los datos.";
 choices[13][2] = "Organizaci&oacute;n tem&aacute;tica de los datos.";
 choices[13][3] = "Integraci&oacute;n del formato de los datos.";
 answers[13] = choices[13][1];
 units[13] = "71";
 comments[13] = "Id Pregunta: 1553. Junta Andaluc&iacute;a";


//  Id pregunta: 1591 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  En la creaci&oacute;n de una Base de Datos, &iquest;para qu&eacute; se utiliza el comando &lsquo;ASSERT&rsquo;?";
 choices[14]= new Array();
 choices[14][0] = "Para asignar un &iacute;ndice a una tabla de la Base de Datos.";
 choices[14][1] = "Para establecer reglas de integridad.";
 choices[14][2] = "Para asignar una vista a una o varias tablas de la Base de Datos.";
 choices[14][3] = "Para hacer copias de seguridad de la Base de Datos.";
 answers[14] = choices[14][1];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1591. ";


//  Id pregunta: 1652 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Las siglas ADL qu&eacute; significan desde la perspectiva del e-learning?";
 choices[15]= new Array();
 choices[15][0] = "Advanced Distributed Learning";
 choices[15][1] = "Advanced Distanced Learning";
 choices[15][2] = "No tienen ning&uacute;n significado desde la perspectiva del e-learning";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][0];
 units[15] = "66";
 comments[15] = "Id Pregunta: 1652. ";


//  Id pregunta: 1679 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un archivo JAR?";
 choices[16]= new Array();
 choices[16][0] = "Fichero que re&uacute;ne clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n";
 choices[16][1] = "Es dependiente de la plataforma";
 choices[16][2] = "Empaqueta ficheros y los comprime con el algoritmo LZW";
 choices[16][3] = "JAR es el acr&oacute;nimo de Java ARchive";
 answers[16] = choices[16][1];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1679. JCED - Preparatic XVII";


//  Id pregunta: 1781 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Cual de los siguientes no forma parte del paquete Open Office";
 choices[17]= new Array();
 choices[17][0] = "Impress";
 choices[17][1] = "Calc";
 choices[17][2] = "Math";
 choices[17][3] = "Text";
 answers[17] = choices[17][3];
 units[17] = "61,62";
 comments[17] = "Id Pregunta: 1781. ";


//  Id pregunta: 1840 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  Se&ntilde;ale cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con el comercio electr&oacute;nico:";
 choices[18]= new Array();
 choices[18][0] = "EDIFACT";
 choices[18][1] = "ODETTE";
 choices[18][2] = "ANSI X13";
 choices[18][3] = "XML";
 answers[18] = choices[18][2];
 units[18] = "70";
 comments[18] = "Id Pregunta: 1840. ";


//  Id pregunta: 2114 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;A qu&eacute; se refieren las normas ISO 14000?:";
 choices[19]= new Array();
 choices[19][0] = "A la calidad en los procesos productivos";
 choices[19][1] = "A la preservaci&oacute;n del medio ambiente en los procesos productivos";
 choices[19][2] = "A la documentaci&oacute;n del SW en las distintas etapas de un modelo en cascada";
 choices[19][3] = "A la ergonom&iacute;a de los puestos de trabajo";
 answers[19] = choices[19][1];
 units[19] = "92";
 comments[19] = "Id Pregunta: 2114. ";


//  Id pregunta: 2211 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Qu&eacute; es un m&eacute;todo en programaci&oacute;n orientada a objetos?:";
 choices[20]= new Array();
 choices[20][0] = "Una operaci&oacute;n sobre un objeto";
 choices[20][1] = "Un algoritmo";
 choices[20][2] = "Un conjunto de objetos";
 choices[20][3] = "Un atributo de un objeto";
 answers[20] = choices[20][0];
 units[20] = "82";
 comments[20] = "Id Pregunta: 2211. ";


//  Id pregunta: 2337 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  En los Diagramas de Estructura de Datos se representa la visi&oacute;n de los datos que tienen las aplicaciones inform&aacute;ticas y que se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Esquema Conceptual";
 choices[21][1] = "Esquema Externo";
 choices[21][2] = "Esquema Interno";
 choices[21][3] = "Esquema Funcional";
 answers[21] = choices[21][1];
 units[21] = "58,80,81";
 comments[21] = "Id Pregunta: 2337. ";


//  Id pregunta: 2433 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Indicar a qu&eacute; corresponde la siguiente definici&oacute;n propuesta por el IEEE dentro del &aacute;mbito de la reingenier&iacute;a e ingenier&iacute;a inversa: &quot;la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento&quot;";
 choices[22]= new Array();
 choices[22][0] = "Ingenier&iacute;a inversa";
 choices[22][1] = "Reestructuraci&oacute;n";
 choices[22][2] = "Reingenier&iacute;a";
 choices[22][3] = "Ingenier&iacute;a hacia delante";
 answers[22] = choices[22][1];
 units[22] = "91";
 comments[22] = "Id Pregunta: 2433. ";


//  Id pregunta: 2670 Año de creación de pregunta: 2003-01-01
 questions[23]= "24)  En im&aacute;genes multiespectrales o multitemporales se emplean las operaciones aritm&eacute;ticas para:";
 choices[23]= new Array();
 choices[23][0] = "Eliminar ruidos.";
 choices[23][1] = "Detectar cambios.";
 choices[23][2] = "Todas las anteriores.";
 choices[23][3] = "Ninguna de las anteriores.";
 answers[23] = choices[23][2];
 units[23] = "93";
 comments[23] = "Id Pregunta: 2670. ";


//  Id pregunta: 2740 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  Las pruebas de cobertura de sentencias pasando por todas ellas y probando todas las bifurcaciones programadas son las pruebas de:";
 choices[24]= new Array();
 choices[24][0] = "Caja blanca";
 choices[24][1] = "Caja negra";
 choices[24][2] = "Integraci&oacute;n";
 choices[24][3] = "Aceptaci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "79";
 comments[24] = "Id Pregunta: 2740. ";


//  Id pregunta: 2812 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  Est&aacute;dares de Calidad de M&eacute;trica v3";
 choices[25]= new Array();
 choices[25][0] = "Norma ISO 9001";
 choices[25][1] = "norma  ISO 9000-2003";
 choices[25][2] = "normas ISO 9000-2000 y norma ISO 9001-2000";
 choices[25][3] = "norma ISO 9000-2001";
 answers[25] = choices[25][2];
 units[25] = "88";
 comments[25] = "Id Pregunta: 2812. ";


//  Id pregunta: 2850 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  Entre los factores de complejidad del Habla no se encuentra";
 choices[26]= new Array();
 choices[26][0] = "el locutor";
 choices[26][1] = "el vocabulario";
 choices[26][2] = "la Gram&aacute;tica";
 choices[26][3] = "todos los anteriores son factores de complejidad del Habla";
 answers[26] = choices[26][3];
 units[26] = "94";
 comments[26] = "Id Pregunta: 2850. ";


//  Id pregunta: 3047 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Qu&eacute; diferencia hay entre un servidor de ficheros y un servidor de bases de datos?:";
 choices[27]= new Array();
 choices[27][0] = "El servidor de ficheros devuelve el fichero entero y el de bases de datos s&oacute;lo el dato solicitado";
 choices[27][1] = "El servidor de ficheros es m&aacute;s barato";
 choices[27][2] = "No hay diferencia; es lo mismo";
 choices[27][3] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[27] = choices[27][3];
 units[27] = "113";
 comments[27] = "Id Pregunta: 3047. ";


//  Id pregunta: 3066 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  En una arquitectura de tres capas el acceso a  los datos corresponde a la capa de:";
 choices[28]= new Array();
 choices[28][0] = "Presentaci&oacute;n";
 choices[28][1] = "Aplicaci&oacute;n";
 choices[28][2] = "Datos";
 choices[28][3] = "En realidad las tres capas manipulan los datos";
 answers[28] = choices[28][2];
 units[28] = "113";
 comments[28] = "Id Pregunta: 3066. ";


//  Id pregunta: 3305 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre la Terminaci&oacute;n de Red de tipo 2 y la Terminaci&oacute;n de Red de tipo 1 (punto de interfaz entre la instalaci&oacute;n de la compa&ntilde;&iacute;a telef&oacute;nica y la instalaci&oacute;n de usuario)?:";
 choices[29]= new Array();
 choices[29][0] = "R";
 choices[29][1] = "S";
 choices[29][2] = "T";
 choices[29][3] = "U";
 answers[29] = choices[29][2];
 units[29] = "103";
 comments[29] = "Id Pregunta: 3305. ";


//  Id pregunta: 3415 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  H.320 es el est&aacute;ndar para:";
 choices[30]= new Array();
 choices[30][0] = "transmisi&oacute;n de paquetes multiplexados en redes digitales";
 choices[30][1] = "m&oacute;dems de banda ancha con correcci&oacute;n de errores";
 choices[30][2] = "videoconferencia multipunto sobre RDSI";
 choices[30][3] = "videconferencia multipunto sobre internet";
 answers[30] = choices[30][2];
 units[30] = "103,117";
 comments[30] = "Id Pregunta: 3415. ";


//  Id pregunta: 3554 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  En sistemas de informaci&oacute;n y comunicaciones, RED es el acr&oacute;nimo de:";
 choices[31]= new Array();
 choices[31][0] = "Random Early Detection";
 choices[31][1] = "Rapid Early Detection";
 choices[31][2] = "Requested Evaluation datagram";
 choices[31][3] = "Response Evaluation and Detection";
 answers[31] = choices[31][0];
 units[31] = "102";
 comments[31] = "Id Pregunta: 3554. ";


//  Id pregunta: 3578 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  En una red que usa conmutaci&oacute;n de paquetes:";
 choices[32]= new Array();
 choices[32][0] = "La longitud de la unidades de datos (paquetes) que puedan presentarse a la red es ilimitada";
 choices[32][1] = "Cuanto mayor sea la longitud de los paquetes, mayor ser&aacute; el tiempo de espera hasta su retransmisi&oacute;n, por lo que se procurar&aacute; que tama&ntilde;o de los paquetes sea el menor posible";
 choices[32][2] = "Si un mensaje supera la m&aacute;xima longitud permitida, se divide en unidades de datos m&aacute;s peque&ntilde;as";
 choices[32][3] = "La ITU-T en su recomendaci&oacute;n X.25 no propone ning&uacute;n m&aacute;ximo para la longitud de los paquetes";
 answers[32] = choices[32][2];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3578. ";


//  Id pregunta: 3792 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Respecto a los elementos de red de SDH puede decirse que:";
 choices[33]= new Array();
 choices[33][0] = "Un multiplexor integra tributarios en una estructura de orden superior";
 choices[33][1] = "Un ADM integra y extrae tributarios de la se&ntilde;al de l&iacute;nea";
 choices[33][2] = "Un crossconnect interconecta tributarios entre agregados y agregados entre s&iacute;";
 choices[33][3] = "Todas las afirmaciones anteriores son correctas";
 answers[33] = choices[33][3];
 units[33] = "105";
 comments[33] = "Id Pregunta: 3792. ";


//  Id pregunta: 3813 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Se&ntilde;alar qu&eacute; afirmaci&oacute;n no es correcta. En una red de conmutaci&oacute;n de paquetes para evitar la congesti&oacute;n se puede:";
 choices[34]= new Array();
 choices[34][0] = "Reservar espacio suficiente de almacenamiento en los nodos";
 choices[34][1] = "Descartar paquetes";
 choices[34][2] = "En una red de conmutaci&oacute;n de paquetes no hay congesti&oacute;n";
 choices[34][3] = "Enviar paquetes de contenci&oacute;n";
 answers[34] = choices[34][2];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3813. ";


//  Id pregunta: 3899 Año de creación de pregunta: 2003-01-01
 questions[35]= "36)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[35]= new Array();
 choices[35][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[35][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[35][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[35][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[35] = choices[35][1];
 units[35] = "99";
 comments[35] = "Id Pregunta: 3899. ";


//  Id pregunta: 4055 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  Un mensaje se puede cifrar";
 choices[36]= new Array();
 choices[36][0] = "Mediante mecanismos de cifrado sim&eacute;trico y asim&eacute;trico";
 choices[36][1] = "S&oacute;lo mediante mecanismos de cifrado sim&eacute;trico como DES";
 choices[36][2] = "S&oacute;lo mediante mecanismos de cifrado asim&eacute;trico como RSA";
 choices[36][3] = "Se puede cifrar con mecanismos de cifrado sim&eacute;trico, aunque por velocidad es preferible cifrar con criptograf&iacute;a de clave asim&eacute;trica";
 answers[36] = choices[36][0];
 units[36] = "111";
 comments[36] = "Id Pregunta: 4055. ";


//  Id pregunta: 4250 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  Respecto a la iniciativa i2010 de la Comisi&oacute;n Europea:";
 choices[37]= new Array();
 choices[37][0] = "Con el lanzamiento de i2010 la Comisi&oacute;n Europea abandona totalmente los objetivos fijados en la estrategia de Lisboa.";
 choices[37][1] = "Aunque hubiera sido deseable, i2010 no establece como objetivo prioritario el refuerzo de la inversi&oacute;n en I+D";
 choices[37][2] = "La iniciativa i2010 se lanza a finales del a&ntilde;o 2006, tras comprobar el fracaso de los planes de acci&oacute;n eEurope";
 choices[37][3] = "Su primer objetivo es la creaci&oacute;n de &ldquo;la construcci&oacute;n de un Espacio &uacute;nico Europeo de la Informaci&oacute;n que promueva un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n&rdquo;.";
 answers[37] = choices[37][3];
 units[37] = "30";
 comments[37] = "Id Pregunta: 4250. ";


//  Id pregunta: 4302 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  Una vez obtenido el Diagrama de Flujo de Datos y el Modelo L&oacute;gico Normalizado, se debe comprobar que:";
 choices[38]= new Array();
 choices[38][0] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una y s&oacute;lo una entidad del Modelo L&oacute;gico Normalizado";
 choices[38][1] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una o varias entidades del Modelo L&oacute;gico Normalizado";
 choices[38][2] = "Cada entidad del Modelo L&oacute;gico Normalizado se corresponde con uno o varios almacenes del Diagrama de Flujo de Datos";
 choices[38][3] = "Cada flujo del Diagrama de Flujo de Datos se almacena en una o varias entidades del Modelo L&oacute;gico Normalizado.";
 answers[38] = choices[38][1];
 units[38] = "81";
 comments[38] = "Id Pregunta: 4302. ";


//  Id pregunta: 4404 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  La metodolog&iacute;a COBIT (Control Objetives for Information and related Technologies)...";
 choices[39]= new Array();
 choices[39][0] = "Sigue los principios de reingenier&iacute;a de negocios (BPR).";
 choices[39][1] = "Depende de la plataforma tecnol&oacute;gica.";
 choices[39][2] = "Presenta 4 dominios: planificaci&oacute;n, organizaci&oacute;n, adquisici&oacute;n e implementaci&oacute;n.";
 choices[39][3] = "Plantea como principal requisito de negocio de la informaci&oacute;n la modularidad.";
 answers[39] = choices[39][0];
 units[39] = "98";
 comments[39] = "Id Pregunta: 4404. ";


//  Id pregunta: 4428 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes no es una caracter&iacute;stica de la arquitectura de red de Internet?";
 choices[40]= new Array();
 choices[40][0] = "Arquitectura abierta";
 choices[40][1] = "Control centralizado";
 choices[40][2] = "Basada en TCP/IP";
 choices[40][3] = "Organizaci&oacute;n jer&aacute;rquica";
 answers[40] = choices[40][1];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4428. ";


//  Id pregunta: 4662 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Tasa M&aacute;xima de Transferencia  de Informaci&oacute;n alcanzable con la tecnolog&iacute;a HSDPA ";
 choices[41]= new Array();
 choices[41][0] = "7.2Mbps";
 choices[41][1] = "14.4Mbps";
 choices[41][2] = "4.8Mbps";
 choices[41][3] = "10.7Mbps";
 answers[41] = choices[41][1];
 units[41] = "108";
 comments[41] = "Id Pregunta: 4662. ";


//  Id pregunta: 4688 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de la siguientes afirmaciones es falsa?";
 choices[42]= new Array();
 choices[42][0] = " El protocolo IPv6 admite direcciones en IPv4";
 choices[42][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[42][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[42][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[42] = choices[42][1];
 units[42] = "100";
 comments[42] = "Id Pregunta: 4688. Examen 2006 JCYL";


//  Id pregunta: 4723 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos yatributos del directorio activo se encuentra en el:";
 choices[43]= new Array();
 choices[43][0] = "Schema Naming Context";
 choices[43][1] = " Active Directory Schema MMC";
 choices[43][2] = "Configuration Naming Context";
 choices[43][3] = "Domain Naming Context";
 answers[43] = choices[43][0];
 units[43] = "59,115";
 comments[43] = "Id Pregunta: 4723. Examen 2006 JCYL";


//  Id pregunta: 4737 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)   &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[44]= new Array();
 choices[44][0] = "Liderazgo";
 choices[44][1] = "Oportunidad";
 choices[44][2] = "Satisfacci&oacute;n del cliente";
 choices[44][3] = "Satisfacer los requisitos";
 answers[44] = choices[44][0];
 units[44] = "92";
 comments[44] = "Id Pregunta: 4737. Examen 2006 JCYL";


//  Id pregunta: 4842 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  La metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 contempla diferencias con relaci&oacute;n a los productos resultantes del proceso &quot;An&aacute;lisis del sistema de informaci&oacute;n (ASI)&quot; seg&uacute;n sea Orientado a Objetos o Estructurado. Bajo esta premisa, &iquest;cu&aacute;lde las siguientes afirmaciones NO es cierta?";
 choices[45]= new Array();
 choices[45][0] = "El Cat&aacute;logo de Requisitos y el Glosario de T&eacute;rminos son productos comunes requeridos";
 choices[45][1] = "Entre los productos se&ntilde;alados para el an&aacute;lisis estructurado est&aacute; el Modelo de Procesos";
 choices[45][2] = "Se especifica el Modelo de Negocio para el an&aacute;lisis orientado a objetos";
 choices[45][3] = "La especificaci&oacute;n de la Interfaz de Usuario s&oacute;lo se solicita para el an&aacute;lisis orientado a objetos";
 answers[45] = choices[45][3];
 units[45] = "86";
 comments[45] = "Id Pregunta: 4842. ";


//  Id pregunta: 4845 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  La Ley Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, define el Servicio Universal en su T&iacute;tulo III, como el conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible. En relaci&oacute;n a suprestaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[46]= new Array();
 choices[46][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia podr&aacute; designar uno o m&aacute;s operadores diferentes para la prestaci&oacute;n de los diversos elementos del servicio universal, de manera que quede cubierta la totalidad delterritorio nacional";
 choices[46][1] = "Corresponde su prestaci&oacute;n, en todo caso, al operador u operadores con poder significativo en aquellos mercados considerados de referencia en relaci&oacute;n al servicio considerado";
 choices[46][2] = "El sistema de designaci&oacute;n de operadores encargados de garantizar la prestaci&oacute;n de los servicios, prestaciones y ofertas del servicio universal se establecer&aacute; mediante real decreto, con sujeci&oacute;n a los principios de eficiencia, objetividad, transparencia y no discriminaci&oacute;n sin excluir a priori la designaci&oacute;n de ninguna empresa. En todo caso, contemplar&aacute; un mecanismo de licitaci&oacute;n p&uacute;blica para dichos servicios, prestaciones y ofertas.";
 choices[46][3] = "La primera designaci&oacute;n de operador responsable de la prestaci&oacute;n del servicio universal se realiz&oacute; la citadaLey, y recay&oacute; en Telef&oacute;nica de Espa&ntilde;a, hasta el 31 de diciembre de 2005, en su condici&oacute;n de operadordominante en la prestaci&oacute;n del servicio telef&oacute;nico fijo";
 answers[46] = choices[46][2];
 units[46] = "110";
 comments[46] = "Id Pregunta: 4845. ";


//  Id pregunta: 4847 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Las aplicaciones a medida desarrolladas a petici&oacute;n de la Administraci&oacute;n General del Estado son consideradas:";
 choices[47]= new Array();
 choices[47][0] = "Software libre";
 choices[47][1] = "Software propietario";
 choices[47][2] = "Software de dominio p&uacute;blico";
 choices[47][3] = "Software de fuentes abiertas, de acuerdo con los criterios de normalizaci&oacute;n y conservaci&oacute;n de lasaplicaciones utilizadas para el ejercicio de potestades";
 answers[47] = choices[47][1];
 units[47] = "37";
 comments[47] = "Id Pregunta: 4847. ";


//  Id pregunta: 4864 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a las VLAN (Virtual Local Area Networks) es cierta?";
 choices[48]= new Array();
 choices[48][0] = "Las VLAN reducen el n&uacute;mero de dominios de difusi&oacute;n de la red";
 choices[48][1] = "La segmentaci&oacute;n de redes en VLAN aumenta el tr&aacute;fico en la red, ya que ha de a&ntilde;adirse informaci&oacute;n desubred complementaria en cada paquete";
 choices[48][2] = "La definici&oacute;n de una misma VLAN puede abarcar uno o m&aacute;s switches (conmutadores)";
 choices[48][3] = "Las VLAN aumentan el tama&ntilde;o de los dominios de difusi&oacute;n de la red";
 answers[48] = choices[48][2];
 units[48] = "102";
 comments[48] = "Id Pregunta: 4864. ";


//  Id pregunta: 5001 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?:";
 choices[49]= new Array();
 choices[49][0] = "Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;arcampa&ntilde;as de marketing directo on-line";
 choices[49][1] = "Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas";
 choices[49][2] = "Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica";
 choices[49][3] = "Es el Catalog Resource Management, o aplicaci&oacute;n que genera un catalogo on-line de los productosdisponibles para la venta";
 answers[49] = choices[49][0];
 units[49] = "70";
 comments[49] = "Id Pregunta: 5001. Examen TIC A 2007";


//  Id pregunta: 5094 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[50]= new Array();
 choices[50][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[50][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[50][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[50][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[50] = choices[50][2];
 units[50] = "74";
 comments[50] = "Id Pregunta: 5094. ";


//  Id pregunta: 5118 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;C&oacute;mo se denomina cada de una de las particiones l&oacute;gicas de una Storage Area Network?";
 choices[51]= new Array();
 choices[51][0] = "LUN";
 choices[51][1] = "HBA";
 choices[51][2] = "Cluster";
 choices[51][3] = "Uscsi";
 answers[51] = choices[51][0];
 units[51] = "48";
 comments[51] = "Id Pregunta: 5118. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5434 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;En que se diferencia la firma electr&oacute;nica reconocida de la firma electr&oacute;nica avanzada?";
 choices[52]= new Array();
 choices[52][0] = "En que la segunda ha supuesto un mayor refinamiento en los niveles de seguridad";
 choices[52][1] = "En el tipo de certificado digital implicado";
 choices[52][2] = "En el tipo de dispositivo criptogr&aacute;fico utilizado para la custodia del certificado digital";
 choices[52][3] = "En que la segunda es completamente equivalente a la firma manuscrita";
 answers[52] = choices[52][2];
 units[52] = "30";
 comments[52] = "Id Pregunta: 5434. Castilla y Le&oacute;n";


//  Id pregunta: 5467 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Cuando analizar&iacute;amos los recursos de la organizaci&oacute;n";
 choices[53]= new Array();
 choices[53][0] = "Cuando ejecutemos un desarrollo, para determinar el costo";
 choices[53][1] = "Al valorar los recursos que se han consumido";
 choices[53][2] = "Para ver la forma de materializar un desarrollo";
 choices[53][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica";
 answers[53] = choices[53][3];
 units[53] = "77";
 comments[53] = "Id Pregunta: 5467. Castilla y Le&oacute;n";


//  Id pregunta: 5511 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indique cu&aacute;l de los siguientes no es un elemento de la arquitectura de la red europea TESTA-II:";
 choices[54]= new Array();
 choices[54][0] = "LocalDomain";
 choices[54][1] = "EuroDomain";
 choices[54][2] = "EuroNet";
 choices[54][3] = "EuroGate";
 answers[54] = choices[54][2];
 units[54] = "103";
 comments[54] = "Id Pregunta: 5511. ";


//  Id pregunta: 5709 Año de creación de pregunta: 2009-01-01
 questions[55]= "56)  Como se denomina al conjunto de servicios y protocolos de los servicios web:";
 choices[55]= new Array();
 choices[55][0] = "Web Service Protocol Stack.";
 choices[55][1] = "Web Service Protocol Set.";
 choices[55][2] = "UDDI (Universal Description, Discovery and Integration).";
 choices[55][3] = "SOAP (Simple Object Access Protocol).";
 answers[55] = choices[55][0];
 units[55] = "51";
 comments[55] = "Id Pregunta: 5709. MAP 2008 A2";


//  Id pregunta: 5921 Año de creación de pregunta: 2009-01-01
 questions[56]= "57)  En relaci&oacute;n a la ITU (International Telecommunication Union), indique cu&aacute;l de los siguientes NO se corresponde con un sector estrat&eacute;gico de la misma:";
 choices[56]= new Array();
 choices[56][0] = "Radiocomunicaciones (ITU-R)";
 choices[56][1] = "Estandarizaci&oacute;n (ITU-T)";
 choices[56][2] = "Seguridad (ITU-S)";
 choices[56][3] = "Desarrollo (ITU-D)";
 answers[56] = choices[56][2];
 units[56] = "42";
 comments[56] = "Id Pregunta: 5921. MAP 2008 A1";


//  Id pregunta: 5963 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  Seg&uacute;n la Norma ISO 9000:2000, la expresi&oacute;n formal por la Direcci&oacute;n de las intenciones globales y orientaci&oacute;n de una organizaci&oacute;n relativas a la calidad, se denomina:";
 choices[57]= new Array();
 choices[57][0] = "Gesti&oacute;n de la calidad";
 choices[57][1] = "Norma de la calidad";
 choices[57][2] = "Pol&iacute;tica de la calidad";
 choices[57][3] = "Direcci&oacute;n de la calidad";
 answers[57] = choices[57][2];
 units[57] = "87";
 comments[57] = "Id Pregunta: 5963. Castilla La Mancha 2009";


//  Id pregunta: 5968 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  En MAGERIT &iquest;cu&aacute;l de las siguientes opciones NO es cierta?";
 choices[58]= new Array();
 choices[58][0] = "Riesgo es la posibilidad de que suceda un da&ntilde;o o perjuicio";
 choices[58][1] = "Impacto es el evento que puede desencadenar un incidente en la organizaci&oacute;n";
 choices[58][2] = "Existen tres submodelos: elementos, eventos y procesos";
 choices[58][3] = "La informaci&oacute;n es un activo";
 answers[58] = choices[58][1];
 units[58] = "33";
 comments[58] = "Id Pregunta: 5968. Castilla La Mancha 2009";


//  Id pregunta: 6047 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  El programa marco de la UE para la innovaci&oacute;n y competitividad se denomina:";
 choices[59]= new Array();
 choices[59][0] = "eTEN";
 choices[59][1] = "IDA";
 choices[59][2] = "CIP";
 choices[59][3] = "Ninguna de las respuestas es correcta";
 answers[59] = choices[59][2];
 units[59] = "103";
 comments[59] = "Id Pregunta: 6047. ";


//  Id pregunta: 6050 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  La organizaci&oacute;n que publica los est&aacute;ndares sobre SNMP es:";
 choices[60]= new Array();
 choices[60][0] = "UIT-T";
 choices[60][1] = "IETF";
 choices[60][2] = "ISO/IEC";
 choices[60][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[60] = choices[60][1];
 units[60] = "104";
 comments[60] = "Id Pregunta: 6050. ";


//  Id pregunta: 6061 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  HTML est&aacute; estandarizado por:";
 choices[61]= new Array();
 choices[61][0] = "World Wide Web Consortium - W3C.";
 choices[61][1] = "Internet Engineering Task Force - IETF.";
 choices[61][2] = "Institute os Management Accountants - IMA.";
 choices[61][3] = "International Accounting Standard Board - IASB.";
 answers[61] = choices[61][0];
 units[61] = "69";
 comments[61] = "Id Pregunta: 6061. TIC A 2009";


//  Id pregunta: 6115 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  Indique cu&aacute;l de las siguientes clasificaciones NO es aplicable a las etiquetas RFID (Radio Frecuency Identification):";
 choices[62]= new Array();
 choices[62][0] = "Activas.";
 choices[62][1] = "Pasivas.";
 choices[62][2] = "Hiperactivas.";
 choices[62][3] = "Semipasivas.";
 answers[62] = choices[62][2];
 units[62] = "74";
 comments[62] = "Id Pregunta: 6115. TIC A 2009";


//  Id pregunta: 6234 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[63]= new Array();
 choices[63][0] = "CIL";
 choices[63][1] = "CLI";
 choices[63][2] = "JIT";
 choices[63][3] = "CLR";
 answers[63] = choices[63][0];
 units[63] = "59,115";
 comments[63] = "Id Pregunta: 6234. ";


//  Id pregunta: 6248 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[64]= new Array();
 choices[64][0] = "La clase DataRow representa una fila de datos en un DataTable";
 choices[64][1] = "La clase DataRow representa una cach&eacute; de memoria interna de datos";
 choices[64][2] = "La clase DataRow representa una tabla de datos en memoria";
 choices[64][3] = "La clase DataRow representa el esquema de una columna en una DataTable";
 answers[64] = choices[64][0];
 units[64] = "82";
 comments[64] = "Id Pregunta: 6248. TICB-2009, bloque desarrollo";


//  Id pregunta: 6271 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Qu&eacute; estandar define el ciclo de vida de un sistema de informac&oacute;n como el marco de referencia que contiene los procesos, las actividades y las tareas involucradas en el desarrollo, la explotaci&oacute;n y el mantenimiento de un producto de software, abarcando la vida del sistema desde la definici&oacute;n de los requisitos hasta la finalizaci&oacute;n de su uso.";
 choices[65]= new Array();
 choices[65][0] = "ISO-12207";
 choices[65][1] = "ISO-9800";
 choices[65][2] = "ISO-17702";
 choices[65][3] = "ISO-11200";
 answers[65] = choices[65][0];
 units[65] = "76";
 comments[65] = "Id Pregunta: 6271. ";


//  Id pregunta: 6297 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; se entiende por l&iacute;nea base en el control de versiones en el an&aacute;lisis de un sistema de informaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Punto inicial de partida de un sistema de informaci&oacute;n, en el cual no hay nada desarrollado";
 choices[66][1] = "Especificaci&oacute;n o producto que ha sido revisado formalmente. Sirve de base para un desarrollo posterior";
 choices[66][2] = "Documentaci&oacute;n del sistema de informaci&oacute;n almacenada en un dispositivo de almacenamiento seguro";
 choices[66][3] = "Ninguna de las anteriores es cierta";
 answers[66] = choices[66][1];
 units[66] = "78";
 comments[66] = "Id Pregunta: 6297. ";


//  Id pregunta: 6329 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Una actualizaci&oacute;n de los datos del Data Warehouse consistir&aacute; b&aacute;sicamente en:";
 choices[67]= new Array();
 choices[67][0] = "Modificar los valores de ciertos registros (tuplas de las relaciones subyacentes).";
 choices[67][1] = "Borrar los registros de tasa de utilizaci&oacute;n baja.";
 choices[67][2] = "Inserci&oacute;n de nuevos datos (que eventualmente diferir&aacute;n de otros ya existentes s&oacute;lo en la marca temporal).";
 choices[67][3] = "Un Data Warehouse no se actualiza pues contiene s&oacute;lo datos hist&oacute;ricos.";
 answers[67] = choices[67][2];
 units[67] = "68";
 comments[67] = "Id Pregunta: 6329. ";


//  Id pregunta: 6385 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?";
 choices[68]= new Array();
 choices[68][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[68][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[68][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[68][3] = "En dos diarios de tirada nacional";
 answers[68] = choices[68][2];
 units[68] = "43";
 comments[68] = "Id Pregunta: 6385. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6410 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  De acuerdo a lo dispuesto en la ley sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico, se considerar&aacute; infracci&oacute;n muy grave:";
 choices[69]= new Array();
 choices[69][0] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n";
 choices[69][1] = "La ausencia de cita de la fuente";
 choices[69][2] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida";
 choices[69][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia";
 answers[69] = choices[69][3];
 units[69] = "30";
 comments[69] = "Id Pregunta: 6410. Art&iacute;culo 11 Ley 37/2007";


//  Id pregunta: 6422 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  Proporcionar a los usuarios el tiempo suficiente para leer y usar el contenido es una pauta que corresponde, &iquest;a qu&eacute; principio de WCAG 2.0?";
 choices[70]= new Array();
 choices[70][0] = "Perceptible";
 choices[70][1] = "Operable";
 choices[70][2] = "Robusto";
 choices[70][3] = "Comprensible";
 answers[70] = choices[70][1];
 units[70] = "39";
 comments[70] = "Id Pregunta: 6422. ";


//  Id pregunta: 6516 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  El c&oacute;digo intermedio que se ejecuta en una m&aacute;quina virtual java (JVM) se denomina:";
 choices[71]= new Array();
 choices[71][0] = "bytecode";
 choices[71][1] = "class";
 choices[71][2] = "jar";
 choices[71][3] = "applet";
 answers[71] = choices[71][0];
 units[71] = "60";
 comments[71] = "Id Pregunta: 6516. ";


//  Id pregunta: 6603 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  Indicar cual de las siguientes opciones NO es un contrato de suministro:";
 choices[72]= new Array();
 choices[72][0] = "La compra de un ERP";
 choices[72][1] = "El mantenimiento de las licencias del SGBD";
 choices[72][2] = "El mantenimiento de la aplicaci&oacute;n que usa el SGBD";
 choices[72][3] = "El alquiler del sistema de telecomunicaciones";
 answers[72] = choices[72][2];
 units[72] = "41";
 comments[72] = "Id Pregunta: 6603. ";


//  Id pregunta: 7158 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  Entre las funciones de un sistema operativo se encuentra la gesti&oacute;n de procesos. Seleccione cual de las siguientes afirmaciones es correcta:";
 choices[73]= new Array();
 choices[73][0] = "Cualquier proceso puede causar la terminaci&oacute;n de otro proceso realizando una llamada al sistema";
 choices[73][1] = "Si un proceso se encuentra en estado &quot;Terminado&quot; (o Finalizado) significa que se ha ejecutado en su totalidad";
 choices[73][2] = "Se dice que un proceso se encuentra en estado &quot;Zombi&quot; cuando est&aacute; esperando a que otro proceso termine de ejecutarse";
 choices[73][3] = "Cuando un nuevo usuario entra en el sistema se crea un nuevo proceso que quedar&aacute; en estado &quot;listo&quot; (preparado para se ejecutado)";
 answers[73] = choices[73][3];
 units[73] = "52";
 comments[73] = "Id Pregunta: 7158. Examen TIC B 2009";


//  Id pregunta: 7165 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes es una sentencia SQL de tipo DDL (Data Definition Language)?";
 choices[74]= new Array();
 choices[74][0] = "SELECT";
 choices[74][1] = "DROP";
 choices[74][2] = "INSERT";
 choices[74][3] = "DELETE";
 answers[74] = choices[74][1];
 units[74] = "58";
 comments[74] = "Id Pregunta: 7165. Examen TIC B 2009";


//  Id pregunta: 7267 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  En el &aacute;mbito del Frame Relay, el CIR se refiere";
 choices[75]= new Array();
 choices[75][0] = "Al ratio de ocupaci&oacute;n m&aacute;xima del canal";
 choices[75][1] = "A la velocidad m&iacute;nima comprometida";
 choices[75][2] = "Al porcentaje m&aacute;ximo de tramas err&oacute;neas garantizado";
 choices[75][3] = "A la velocidad m&aacute;xima asegurada";
 answers[75] = choices[75][1];
 units[75] = "109";
 comments[75] = "Id Pregunta: 7267. Examen TIC B 2009";


//  Id pregunta: 8185 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[76]= new Array();
 choices[76][0] = "No est&aacute; en primera forma normal.";
 choices[76][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[76][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[76][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[76] = choices[76][2];
 units[76] = "58";
 comments[76] = "Id Pregunta: 8185. Examen TIC A1 2010";


//  Id pregunta: 8245 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  El Texto Refundido de la Ley de Propiedad Intelectual, modificado por la ley 23/2006, define los siguientes derechos de explotaci&oacute;n:";
 choices[77]= new Array();
 choices[77][0] = "Reproducci&oacute;n, Distribuci&oacute;n, Duplicaci&oacute;n y Transformaci&oacute;n.";
 choices[77][1] = "Distribuci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[77][2] = "Reproducci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[77][3] = "Reproducci&oacute;n, Distribuci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 answers[77] = choices[77][3];
 units[77] = "36,37";
 comments[77] = "Id Pregunta: 8245. Examen TIC A1 2010";


//  Id pregunta: 8262 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Qu&eacute; m&eacute;todo NO existe en la clase java HttpServlet?:";
 choices[78]= new Array();
 choices[78][0] = "doPut";
 choices[78][1] = "doTrace.";
 choices[78][2] = "doErrorC";
 choices[78][3] = "doOptions.";
 answers[78] = choices[78][2];
 units[78] = "116";
 comments[78] = "Id Pregunta: 8262. Examen TIC A1 2010";


//  Id pregunta: 8274 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  En relaci&oacute;n con la seguridad en UNIX y particularmente con la auditor&iacute;a del sistema, cu&aacute;l de los siguientes archivos de registro de equipos UNIX se guardan en texto claro, y pueden visualizarse con una orden como cat o similares:";
 choices[79]= new Array();
 choices[79][0] = "syslog, wtmp, lastlog, sulog. ";
 choices[79][1] = "syslogd, utmpx, faillog, loginlog. ";
 choices[79][2] = "syslog, debug, sulog, loginlog. ";
 choices[79][3] = "syslog, btmp, lastlog, loginlog. ";
 answers[79] = choices[79][2];
 units[79] = "53, 54";
 comments[79] = "Id Pregunta: 8274. Examen TIC A1 2010";


//  Id pregunta: 8311 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  Existe una variedad de tecnolog&iacute;as xDSL que se caracterizan por:";
 choices[80]= new Array();
 choices[80][0] = "La infraestructura f&iacute;sica que soporta el servicio: par de cobre, fibra &oacute;ptica u otros medios de transmisi&oacute;n.";
 choices[80][1] = "El n&uacute;mero de canales de alta velocidad disponibles. ";
 choices[80][2] = "Por la compatibilidad, o no, con la transmisi&oacute;n de voz, y la calidad de la misma.";
 choices[80][3] = "Su simetr&iacute;a/asimetr&iacute;a en los canales de subida y bajada de datos.";
 answers[80] = choices[80][3];
 units[80] = "107";
 comments[80] = "Id Pregunta: 8311. Examen TIC A2 2010";


//  Id pregunta: 8323 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  La normativa que establece las condiciones t&eacute;cnicas para la emisi&oacute;n del servido de televisi&oacute;n digital terrestre (TDT) en alta definici&oacute;n, es: ";
 choices[81]= new Array();
 choices[81][0] = "Ley 7/2010. ";
 choices[81][1] = "Real Decreto 691/2010. ";
 choices[81][2] = "Directiva 98/48/CE. ";
 choices[81][3] = "Real Decreto 944/2005. ";
 answers[81] = choices[81][1];
 units[81] = "105, 110";
 comments[81] = "Id Pregunta: 8323. Examen TIC A2 2010";


//  Id pregunta: 8337 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes tareas NO se engloba, en M&eacute;trica v3, en la actividad de Planificaci&oacute;n de la Interfaz de Gesti&oacute;n de Proyectos?";
 choices[82]= new Array();
 choices[82][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[82][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[82][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios. ";
 choices[82][3] = "Planificaci&oacute;n Detallada de las pruebas del Sistema. ";
 answers[82] = choices[82][3];
 units[82] = "86";
 comments[82] = "Id Pregunta: 8337. Examen TIC A2 2010";


//  Id pregunta: 8372 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo se denomina:";
 choices[83]= new Array();
 choices[83][0] = "Mantenimiento adaptativo.";
 choices[83][1] = "Mantenimiento preventivo.";
 choices[83][2] = "Mantenimiento correctivo.";
 choices[83][3] = "Mantenimiento evolutivo.";
 answers[83] = choices[83][1];
 units[83] = "86";
 comments[83] = "Id Pregunta: 8372. Examen TIC A2 2010";


//  Id pregunta: 8420 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Qu&eacute; tipo de conector de alta velocidad (anteriormente conocido por su nombre clave Light Peak) hace uso de la tecnolog&iacute;a &oacute;ptica llegando a ofrecer anchos de banda de hasta 10 Gbps?";
 choices[84]= new Array();
 choices[84][0] = "FireWire";
 choices[84][1] = "Thunderbolt";
 choices[84][2] = "USB";
 choices[84][3] = "HDMI";
 answers[84] = choices[84][1];
 units[84] = "47";
 comments[84] = "Id Pregunta: 8420. ";


//  Id pregunta: 8478 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  &iquest;Qu&eacute; tipo de codificaci&oacute;n se utiliza en las redes Ethernet?";
 choices[85]= new Array();
 choices[85][0] = "London";
 choices[85][1] = "Liverpool.";
 choices[85][2] = "Manchester.";
 choices[85][3] = "Boston.";
 answers[85] = choices[85][2];
 units[85] = "101";
 comments[85] = "Id Pregunta: 8478. Examen TIC A2 2010 interna";


//  Id pregunta: 8524 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cu&aacute;nto overhead o sobrecarga genera cada paquete MPLS?";
 choices[86]= new Array();
 choices[86][0] = "4 bits.";
 choices[86][1] = "5 bits.";
 choices[86][2] = "32 bits.";
 choices[86][3] = "258 bits.";
 answers[86] = choices[86][2];
 units[86] = "100";
 comments[86] = "Id Pregunta: 8524. Examen TIC A2 2010 interna";


//  Id pregunta: 8658 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[87]= new Array();
 choices[87][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[87][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[87][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[87][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[87] = choices[87][3];
 units[87] = "99";
 comments[87] = "Id Pregunta: 8658. Examen UPM A2 2011";


//  Id pregunta: 8740 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  De acuerdo con la definici&oacute;n establecida en el Real Decreto 1720/2007, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque NO lo realizase materialmente es:";
 choices[88]= new Array();
 choices[88][0] = "El encargado del fichero o del tratamiento.";
 choices[88][1] = "El responsable del fichero o del tratamiento.";
 choices[88][2] = "El destinatario o cesionario del fichero o del tratamiento";
 choices[88][3] = "El propietario del fichero o del tratamiento.";
 answers[88] = choices[88][1];
 units[88] = "29";
 comments[88] = "Id Pregunta: 8740. Examen TIC A2 2010 interna";


//  Id pregunta: 8886 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;Qu&eacute; Informaci&oacute;n contiene una SIM?";
 choices[89]= new Array();
 choices[89][0] = "IMSI";
 choices[89][1] = "PIN";
 choices[89][2] = "OMC";
 choices[89][3] = "La respuesta A y B son correctas";
 answers[89] = choices[89][3];
 units[89] = "108";
 comments[89] = "Id Pregunta: 8886. ";


//  Id pregunta: 8924 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Las siglas SSL y TLS se refieren a:";
 choices[90]= new Array();
 choices[90][0] = "Diferentes estados l&oacute;gicos del microprocesador.";
 choices[90][1] = "Protocolos criptogr&aacute;ficos para establecer conexiones seguras a trav&eacute;s de una red.";
 choices[90][2] = "Sistemas de localizaci&oacute;n geod&eacute;sica para GPS.";
 choices[90][3] = "Diferentes tipos de memoria f&iacute;sica";
 answers[90] = choices[90][1];
 units[90] = "111";
 comments[90] = "Id Pregunta: 8924. Operador Ayto. Madrid 2010";


//  Id pregunta: 9038 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  Indique la pauta de accesibilidad correcta seg&uacute;n la norma WCAG 1.0";
 choices[91]= new Array();
 choices[91][0] = "Dise&ntilde;o dependiente del dispositivo";
 choices[91][1] = "Evite parpadeos en la pantalla";
 choices[91][2] = "Utilice siempre CSS";
 choices[91][3] = "No se base s&oacute;lo en el color";
 answers[91] = choices[91][3];
 units[91] = "39";
 comments[91] = "Id Pregunta: 9038. ";


//  Id pregunta: 9115 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  &iquest;Qu&eacute; no presentan las soluciones SISD (Single Instruction stream, Single Data stream)";
 choices[92]= new Array();
 choices[92][0] = "Concurrencia y paralelizaci&oacute;n.";
 choices[92][1] = "S&oacute;lo concurrencia.";
 choices[92][2] = "&Uacute;nicamente paralelizaci&oacute;n.";
 choices[92][3] = "No existe SISD";
 answers[92] = choices[92][0];
 units[92] = "45";
 comments[92] = "Id Pregunta: 9115. ";


//  Id pregunta: 9209 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  &iquest;C&oacute;mo es el modelo de conectividad interno del almacenamiento?";
 choices[93]= new Array();
 choices[93][0] = "Bus SCSI y bus ATA/IDE de tipo serie";
 choices[93][1] = "SAS es la evoluci&oacute;n de ATA y SATA la evoluci&oacute;n de SCSI.";
 choices[93][2] = "SAS y SATA son evoluciones que modifican las capas bajas de forma que aseguran la compatibilidad a nivel de software.";
 choices[93][3] = "Ante la falta de escalabilidad, problemas de replicaci&oacute;n y redundancia del almacenamiento interno, para entornos empresariales se suele preferir el almacenamiento externo, en forma de una cabina de discos.";
 answers[93] = choices[93][3];
 units[93] = "48";
 comments[93] = "Id Pregunta: 9209. ";


//  Id pregunta: 9237 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  &iquest;Qu&eacute; es el n&uacute;cleo denominado &ldquo;vanilla&rdquo;?";
 choices[94]= new Array();
 choices[94][0] = "Kernel sin alteraciones suministrado por Linus Torvalds";
 choices[94][1] = "S&oacute;lo se puede descargar de su sitio oficial en http://www.kernel.org";
 choices[94][2] = "Las distintas distribuciones no se basan en el n&uacute;cleo &ldquo;vanilla&rdquo;";
 choices[94][3] = "Todas las anteriores son correctas.";
 answers[94] = choices[94][0];
 units[94] = "53";
 comments[94] = "Id Pregunta: 9237. ";


//  Id pregunta: 9862 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Indique la respuesta falsa:";
 choices[95]= new Array();
 choices[95][0] = "El estandar de autenticaci&oacute;n OAuth fue crado por la OATH (Initiative for Open Authentication).";
 choices[95][1] = "OAuth 2.0 no es compatible con OAuth 1.0. ";
 choices[95][2] = "Graph API de Facebook solo soporta OAuth 2.0. ";
 choices[95][3] = "Google soporta Oauth 2.0. como m&eacute;todo recomendado de autenticaci&oacute;n para todas sus APIs.";
 answers[95] = choices[95][0];
 units[95] = "118";
 comments[95] = "Id Pregunta: 9862. Oauth y OATH son conceptos diferentes. ";


//  Id pregunta: 9904 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Seg&uacute;n M&eacute;trica v3, los flujos que interconectan actividades en la t&eacute;cnica SADT (Structured Analysis and Design Technique) se pueden clasificar en 4 tipos, se&ntilde;ale cu&aacute;l de los siguientes flujos NO es correcto:";
 choices[96]= new Array();
 choices[96][0] = "Control.";
 choices[96][1] = "Transacci&oacute;n.";
 choices[96][2] = "Mecanismo.";
 choices[96][3] = "Entrada.";
 answers[96] = choices[96][1];
 units[96] = "86";
 comments[96] = "Id Pregunta: 9904. TIC A2, Examen 2013";


//  Id pregunta: 10015 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En relaci&oacute;n con la concurrencia en bases de datos, el tama&ntilde;o del elemento de datos adecuado para el bloqueo (granularidad) afecta al grado de concurrencia de forma que, a menor tama&ntilde;o del elemento que es bloqueado:";
 choices[97]= new Array();
 choices[97][0] = "Aumenta el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[97][1] = "Disminuye el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[97][2] = "Disminuye el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[97][3] = "Aumenta el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 answers[97] = choices[97][0];
 units[97] = "58";
 comments[97] = "Id Pregunta: 10015. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10188 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Entre los modelos de bases de datos prerelacionales, se verifica que:";
 choices[98]= new Array();
 choices[98][0] = "El modelo jer&aacute;rquico es incapaz de representar las relaciones reflexivas o las relaciones N:M";
 choices[98][1] = "Los modelos jer&aacute;rquico y CODASYL son en esencia modelos de datos en red, que aplican ciertas restricciones";
 choices[98][2] = "El Conjunto o SET es uno de los elementos m&aacute;s importantes del modelo CODASYL, como elemento b&aacute;sico para la representaci&oacute;n de interrelaciones 1:N y por tanto 1:1.";
 choices[98][3] = "Todas las anteriores";
 answers[98] = choices[98][3];
 units[98] = "57";
 comments[98] = "Id Pregunta: 10188. ";


//  Id pregunta: 10301 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[99]= new Array();
 choices[99][0] = "135.26.41.94";
 choices[99][1] = "135.26.41.95";
 choices[99][2] = "135.26.41.96";
 choices[99][3] = "135.26.41.97";
 answers[99] = choices[99][0];
 units[99] = "100";
 comments[99] = "Id Pregunta: 10301. TIC A2, libre, examen 2013";


