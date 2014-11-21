/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 194 Año de creación de pregunta: 2004-01-01
 questions[0]= "1)  El An&aacute;lisis Coste-Beneficio es una t&eacute;cnica empleada en el estudio de viabilidad de un nuevo sistema de informaci&oacute;n. &iquest;Cu&aacute;l de las siguientes no es una utilidad del An&aacute;lisis Coste-Beneficio?";
 choices[0]= new Array();
 choices[0][0] = "Valorar la necesidad y oportunidad de acometer la realizaci&oacute;n del proyecto.";
 choices[0][1] = "Calcular el punto de amortizaci&oacute;n del proyecto.";
 choices[0][2] = "Seleccionar la alternativa m&aacute;s beneficiosa.";
 choices[0][3] = "Estimar adecuadamente los recursos econ&oacute;micos necesarios.";
 answers[0] = choices[0][1];
 units[0] = "27";
 comments[0] = "Id Pregunta: 194. Examen TIC MAP B 2004";


//  Id pregunta: 213 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  En la estructura de un sistema de informaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "En la dimensi&oacute;n vertical las funciones se subdividen en aplicaciones o procedimientos";
 choices[1][1] = "En la dimensi&oacute;n horizontal las funciones se subdividen en aplicaciones o procedimientos";
 choices[1][2] = "La dimensi&oacute;n vertical se subdivide en los niveles operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[1][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 213. ";


//  Id pregunta: 258 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Es caracter&iacute;stico de las organizaciones basadas en la informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Especialistas que adquieren poder mediante el control de la informaci&oacute;n";
 choices[2][1] = "Gestores que adquieren poder mediante la informaci&oacute;n que les llega";
 choices[2][2] = "Grupos de personas que trabajan juntas para resolver un problema y luego se dispersan cuando el trabajo est&aacute; hecho";
 choices[2][3] = "Especialistas que dirigen y organizan su trabajo mediante interacci&oacute;n con sus colegas";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 258. ";


//  Id pregunta: 396 Año de creación de pregunta: 2009-01-01
 questions[3]= "4)  Para poder tener un fichero de datos personales en la Administraci&oacute;n P&uacute;blica hace falta:";
 choices[3]= new Array();
 choices[3][0] = "Que su creaci&oacute;n, modificaci&oacute;n o supresi&oacute;n se realice mediante una disposici&oacute;n general publicada en el B.O.E. o en el diario oficial correspondiente";
 choices[3][1] = "Que el correspondiente Director General lo autorice por escrito";
 choices[3][2] = "Que aparezca una disposici&oacute;n general publicada en el Diario de las Comunidades Europeas";
 choices[3][3] = "Que en la normativa de estructura del Departamento o Unidad as&iacute; se establezca";
 answers[3] = choices[3][0];
 units[3] = "29";
 comments[3] = "Id Pregunta: 396. ";


//  Id pregunta: 433 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Seg&uacute;n la ISO se entiende como Sistema abierto:";
 choices[4]= new Array();
 choices[4][0] = "Un sistema inform&aacute;tico conectado de alguna manera con otros sistemas";
 choices[4][1] = "Un sistema inform&aacute;tico capaz de dialogar con el resto de su entorno seg&uacute;n las normas definidas por su fabricante";
 choices[4][2] = "Un sistema inform&aacute;tico capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[4][3] = "Un sistema al cual se pueden incorporar sucesivos m&oacute;dulos de ampliaci&oacute;n sin que su estructura se vea afectada";
 answers[4] = choices[4][2];
 units[4] = "40";
 comments[4] = "Id Pregunta: 433. ";


//  Id pregunta: 460 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Si una tarea dentro de un diagrama PERT excede su duraci&oacute;n en un tiempo:";
 choices[5]= new Array();
 choices[5][0] = "La duraci&oacute;n del camino cr&iacute;tico no variar&aacute;";
 choices[5][1] = "La duraci&oacute;n del camino cr&iacute;tico variar&aacute; en la misma magnitud";
 choices[5][2] = "No se puede afirmar qu&eacute; ocurrir&aacute; con la duraci&oacute;n del camino cr&iacute;tico";
 choices[5][3] = "Se necesita que otra tarea disminuya su duraci&oacute;n en la misma magnitud para que la duracci&oacute;n del proyecto no varie";
 answers[5] = choices[5][2];
 units[5] = "28";
 comments[5] = "Id Pregunta: 460. ";


//  Id pregunta: 503 Año de creación de pregunta: 2003-01-01
 questions[6]= "7)  En la metodolog&iacute;a MAGERIT la definici&oacute;n &quot;eventos que pueden desencadenar un incidente en la organizaci&oacute;n&quot; corresponde a:";
 choices[6]= new Array();
 choices[6][0] = "Riesgo";
 choices[6][1] = "Impacto";
 choices[6][2] = "Amenaza";
 choices[6][3] = "Vulnerabilidad";
 answers[6] = choices[6][2];
 units[6] = "31, 32, 33";
 comments[6] = "Id Pregunta: 503. ";


//  Id pregunta: 624 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  El m&eacute;todo en el que con criterios el decisor estima una matriz (nxn) A=(a,), donde a es la medida subjetiva de la importancia relativa del criterio i frente al j en una escala normalizada de 1 (igual de importante) a 9 (absolutamente m&aacute;s importante) es:";
 choices[7]= new Array();
 choices[7][0] = "m&eacute;todo Delphi";
 choices[7][1] = "m&eacute;todo de las utilidades relativas";
 choices[7][2] = "m&eacute;todo de la entrop&iacute;a";
 choices[7][3] = "AHP (Analytic Hierarchy Process)";
 answers[7] = choices[7][3];
 units[7] = "34";
 comments[7] = "Id Pregunta: 624. ";


//  Id pregunta: 775 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  Los sistema multiagentes";
 choices[8]= new Array();
 choices[8][0] = "trabajan siempre asociados a arquitecturas de pizarra";
 choices[8][1] = "tienen un control centralizado por lo que no tienen autonom&iacute;a en los agentes";
 choices[8][2] = "cada uno de los agentes es capaz de decidir por si mismo";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = choices[8][2];
 units[8] = "63";
 comments[8] = "Id Pregunta: 775. ";


//  Id pregunta: 1348 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Se&ntilde;ale la respuesta correcta. La diferencia entre un procesador con tecnolog&iacute;a RISC y tecnolog&iacute;a CISC es:";
 choices[9]= new Array();
 choices[9][0] = "El RISC tiene m&aacute;s registros";
 choices[9][1] = "El CISC tiene un juego de instrucciones m&aacute;s amplio";
 choices[9][2] = "El RISC es m&aacute;s r&aacute;pido en la ejecuci&oacute;n de instrucciones";
 choices[9][3] = "Todas las respuestas anteriores son ciertas";
 answers[9] = choices[9][3];
 units[9] = "46";
 comments[9] = "Id Pregunta: 1348. ";


//  Id pregunta: 1488 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes respuestas caracteriza FDDI?:";
 choices[10]= new Array();
 choices[10][0] = "Consiste en el control de dispositivos y datos que funcionan por desplazameinto de frecuencia";
 choices[10][1] = "Consiste en la t&eacute;cnica de control de los dispositivos para filtraje de datos en las redes de &aacute;rea local";
 choices[10][2] = "Consiste en dos bucles de fibra &oacute;ptica con protocolo de paso de testigo";
 choices[10][3] = "Consiste en un bucle de fibra &oacute;ptica que funciona como Ethernet (por contenci&oacute;n) pero a 100 Mbits/seg, y hay otro bucle como backup del primero";
 answers[10] = choices[10][2];
 units[10] = "101";
 comments[10] = "Id Pregunta: 1488. ";


//  Id pregunta: 1568 Año de creación de pregunta: 2003-01-01
 questions[11]= "12)  &iquest;C&uacute;al no es una funci&oacute;n de Workflow?";
 choices[11]= new Array();
 choices[11][0] = "Enrutamiento";
 choices[11][1] = "Asignaci&oacute;n de responsabilidades";
 choices[11][2] = "Generaci&oacute;n de formularios ";
 choices[11][3] = "Gesti&oacute;n de procedimiento";
 answers[11] = choices[11][2];
 units[11] = "71";
 comments[11] = "Id Pregunta: 1568. ";


//  Id pregunta: 1585 Año de creación de pregunta: 2003-01-01
 questions[12]= "13)  En el contexto del Sistema Gestor de Base de Datos (SGBD) ORACLE, al conjunto compartido de estructuras de memoria y procesos que acceden a un grupo de ficheros de la base de datos, se denomina:";
 choices[12]= new Array();
 choices[12][0] = "R&eacute;plica.";
 choices[12][1] = "Segmento.";
 choices[12][2] = "Instancia.";
 choices[12][3] = "Tablespace.";
 answers[12] = choices[12][2];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1585. Junta Andaluc&iacute;a";


//  Id pregunta: 1641 Año de creación de pregunta: 2004-01-01
 questions[13]= "14)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[13]= new Array();
 choices[13][0] = "Leve";
 choices[13][1] = "Grave";
 choices[13][2] = "Muy grave";
 choices[13][3] = "No constituye infracci&oacute;n";
 answers[13] = choices[13][0];
 units[13] = "30";
 comments[13] = "Id Pregunta: 1641. ";


//  Id pregunta: 1776 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  El modelo de proceso de desarrollo de fuente abierta, b&aacute;sicamente descentralizado y caracter&iacute;stico de productos como Linux, Apache, Mozilla, Perl y Lisp/Emacs, se ha dado en llamar:";
 choices[14]= new Array();
 choices[14][0] = "Mercado";
 choices[14][1] = "Bazar";
 choices[14][2] = "Catedral";
 choices[14][3] = "Iglesia";
 answers[14] = choices[14][1];
 units[14] = "61,62";
 comments[14] = "Id Pregunta: 1776. ";


//  Id pregunta: 1779 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[15]= new Array();
 choices[15][0] = "Tomcat";
 choices[15][1] = "Geronimo";
 choices[15][2] = "JBoss";
 choices[15][3] = "Los 3 lo son";
 answers[15] = choices[15][0];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1779. ";


//  Id pregunta: 1807 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Se&ntilde;ale la opci&oacute;n que enumera tres de las especificaciones m&aacute;s robustas en el sector del e-learning";
 choices[16]= new Array();
 choices[16][0] = "AICC, IMS y SCORM";
 choices[16][1] = "AICC, EL-XML y SCORM";
 choices[16][2] = "ELEARN, FCC y SCORM";
 choices[16][3] = "SCORM, ELEARN y AICC";
 answers[16] = choices[16][0];
 units[16] = "66";
 comments[16] = "Id Pregunta: 1807. ";


//  Id pregunta: 1866 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Los documentos de la serie PKCS son especificaciones producidas por los Laboratorios RSA. Se&ntilde;ale la falsa: ";
 choices[17]= new Array();
 choices[17][0] = "PKCS#3 Protocolo de acuerdo de claves  Diffie-Hellman";
 choices[17][1] = "PKCS#11 Cryptoki";
 choices[17][2] = "PKCS#1 Standard de encriptaci&oacute;n RSA";
 choices[17][3] = "La primera es falsa";
 answers[17] = choices[17][3];
 units[17] = "74";
 comments[17] = "Id Pregunta: 1866. ";


//  Id pregunta: 2189 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;les son las suposiciones b&aacute;sicas del modelo COCOMO cl&aacute;sico para estimar el esfuerzo necesario para el desarrollo de sistemas?:";
 choices[18]= new Array();
 choices[18][0] = "Considera que la principal variable explicativa del coste es el n&uacute;mero de instrucciones, con lo que centra sus esfuerzos en estimar este n&uacute;mero";
 choices[18][1] = "Supone que el esfuerzo necesario para el desarrollo de un sistema es el producto de dos factores: complejidad t&eacute;cnica y tama&ntilde;o del tratamiento de la informaci&oacute;n";
 choices[18][2] = "Usa como variable explicativa secundaria la complejidad t&eacute;cnica, originando tres modos de aplicaci&oacute;n del m&eacute;todo: org&aacute;nico, semiacoplado y empotrado";
 choices[18][3] = "Todas las anteriores son asunciones del modelo COCOMO";
 answers[18] = choices[18][3];
 units[18] = "89";
 comments[18] = "Id Pregunta: 2189. Preparatic XVII";


//  Id pregunta: 2291 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  El modelo entidad/relaci&oacute;n de Chen es:";
 choices[19]= new Array();
 choices[19][0] = "Una t&eacute;cnica para la modelizaci&oacute;n sem&aacute;ntica de datos";
 choices[19][1] = "Una herramienta automatizada de an&aacute;lisis de requisitos";
 choices[19][2] = "Una t&eacute;cnica para el modelado de procesos";
 choices[19][3] = "Una metodolog&iacute;a para el desarrollo de sistemas de informaci&oacute;n";
 answers[19] = choices[19][0];
 units[19] = "80";
 comments[19] = "Id Pregunta: 2291. ";


//  Id pregunta: 2368 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Entre los siguientes t&eacute;rminos, indicar cu&aacute;l define la reconstrucci&oacute;n de un sistema de una forma nueva, incluyendo la implementaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Ingenier&iacute;a inversa.";
 choices[20][1] = "Reestructuraci&oacute;n.";
 choices[20][2] = "Reingenier&iacute;a.";
 choices[20][3] = "Ingenier&iacute;a hacia delante.";
 answers[20] = choices[20][2];
 units[20] = "91";
 comments[20] = "Id Pregunta: 2368. ";


//  Id pregunta: 2468 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  No es un &quot;resultado&quot; del modelo EFQM:";
 choices[21]= new Array();
 choices[21][0] = "El impacto en la sociedad";
 choices[21][1] = "Satisfacci&oacute;n del Personal";
 choices[21][2] = "Resultados empresariales.";
 choices[21][3] = "El manual de calidad de la empresa";
 answers[21] = choices[21][3];
 units[21] = "92";
 comments[21] = "Id Pregunta: 2468. ";


//  Id pregunta: 2475 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Para el an&aacute;lisis de sistemas en tiempo real no se usan:";
 choices[22]= new Array();
 choices[22][0] = "Modelos matem&aacute;ticos.";
 choices[22][1] = "Diagramas de bloques.";
 choices[22][2] = "Redes de Petri.";
 choices[22][3] = "Dominios distribuidos de Halm.";
 answers[22] = choices[22][3];
 units[22] = "83";
 comments[22] = "Id Pregunta: 2475. ";


//  Id pregunta: 2614 Año de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;C&uacute;al de los siguientes lenguajes no es Orientado a Objetos?";
 choices[23]= new Array();
 choices[23][0] = "Smalltalk";
 choices[23][1] = "C++";
 choices[23][2] = "Eiffel";
 choices[23][3] = "ACTOR";
 answers[23] = choices[23][3];
 units[23] = "82";
 comments[23] = "Id Pregunta: 2614. ";


//  Id pregunta: 2845 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;La agudeza visual del hombre es capaz de identificar pixeles de?";
 choices[24]= new Array();
 choices[24][0] = "50&micro;m";
 choices[24][1] = "10&micro;m";
 choices[24][2] = "100&micro;m";
 choices[24][3] = "70&micro;m";
 answers[24] = choices[24][2];
 units[24] = "93";
 comments[24] = "Id Pregunta: 2845. ";


//  Id pregunta: 3006 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  En qu&eacute; tipos se divide la fibra &oacute;ptica en funci&oacute;n de la forma de variaci&oacute;n del &iacute;ndice de refracci&oacute;n desde el eje de la fibra al exterior";
 choices[25]= new Array();
 choices[25][0] = "f.o. monomodo y multimodo";
 choices[25][1] = "f.o. de salto de &iacute;ndice y de &iacute;ndice gradual";
 choices[25][2] = "f.o. de emisores LED y emisores l&aacute;ser";
 choices[25][3] = "f.o. de &iacute;ndice anal&oacute;gico y digital";
 answers[25] = choices[25][1];
 units[25] = "99";
 comments[25] = "Id Pregunta: 3006. ";


//  Id pregunta: 3152 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto del correo electr&oacute;nico?:";
 choices[26]= new Array();
 choices[26][0] = "Seg&uacute;n MIME los textos se codifican en 7 bits";
 choices[26][1] = "MIME puede encapsular datos EDI";
 choices[26][2] = "SMTP no soporta servicios de seguridad";
 choices[26][3] = "MIME proporciona seguridad";
 answers[26] = choices[26][3];
 units[26] = "106";
 comments[26] = "Id Pregunta: 3152. ";


//  Id pregunta: 3210 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  El control de errores en la serie V de la ITU-T se trata en:";
 choices[27]= new Array();
 choices[27][0] = "V.1-V.8";
 choices[27][1] = "V.50-V.59";
 choices[27][2] = "V.100-V.140";
 choices[27][3] = "V.40-V.44";
 answers[27] = choices[27][3];
 units[27] = "42";
 comments[27] = "Id Pregunta: 3210. ";


//  Id pregunta: 3555 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  En sistemas de informaci&oacute;n y comunicaciones, SOAP es acr&oacute;nimo de:";
 choices[28]= new Array();
 choices[28][0] = "Services Oriented Architecture Protocol";
 choices[28][1] = "Simple Object Access Protocol";
 choices[28][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[28][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[28] = choices[28][3];
 units[28] = "69";
 comments[28] = "Id Pregunta: 3555. ";


//  Id pregunta: 3589 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  La capa de acceso al medio en una red de &aacute;rea local se denomina:";
 choices[29]= new Array();
 choices[29][0] = "MAC";
 choices[29][1] = "ADSL";
 choices[29][2] = "BUS";
 choices[29][3] = "LLC";
 answers[29] = choices[29][0];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3589. ";


//  Id pregunta: 3632 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  La primera empresa que propuso el uso de t&eacute;cnicas CDMA fue:";
 choices[30]= new Array();
 choices[30][0] = "AT&amp;T";
 choices[30][1] = "Qualcomm";
 choices[30][2] = "Motorola";
 choices[30][3] = "RCA";
 answers[30] = choices[30][1];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3632. ";


//  Id pregunta: 3655 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Un acceso RDSI:";
 choices[31]= new Array();
 choices[31][0] = "Precisa de una instalaci&oacute;n de cable espec&iacute;fica en casa del abonado";
 choices[31][1] = "Es un servicio que se proporciona sobre el par de hilos telef&oacute;nico";
 choices[31][2] = "Precisa tener contratados 2 canales de voz";
 choices[31][3] = "Ninguna de las anteriores de las respuestas anteriores es correcta";
 answers[31] = choices[31][1];
 units[31] = "103";
 comments[31] = "Id Pregunta: 3655. ";


//  Id pregunta: 3663 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Un puente transparente aprende la direcci&oacute;n de los dispositivos:";
 choices[32]= new Array();
 choices[32][0] = "Examinado las direcciones MAC de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[32][1] = "Examinando las direcciones de red de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[32][2] = "Examinado las direcciones MAC de las tramas salientes y asoci&aacute;ndolas con una interfaz da salida";
 choices[32][3] = "Examinando las direcciones de red de las tramas salientes y asoci&aacute;ndolas con una interfaz de salida";
 answers[32] = choices[32][0];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3663. ";


//  Id pregunta: 3948 Año de creación de pregunta: 2003-01-01
 questions[33]= "34)  En la clasificaci&oacute;n de las redes de comunicaci&oacute;n por su extensi&oacute;n no se incluye:";
 choices[33]= new Array();
 choices[33][0] = "MAN (Metropolitan Area Network";
 choices[33][1] = "LAN (Local Area Network)";
 choices[33][2] = "SAN (State Areal Network)";
 choices[33][3] = "WAN (Wide Area Network)";
 answers[33] = choices[33][2];
 units[33] = "113,101";
 comments[33] = "Id Pregunta: 3948. ";


//  Id pregunta: 4053 Año de creación de pregunta: 2006-01-01
 questions[34]= "35)  En referencia a las amenazas que afectan a la seguridad en las redes de comunicaciones, se&ntilde;ale la respuesta incorrecta";
 choices[34]= new Array();
 choices[34][0] = "La interrupci&oacute;n puede ser tanto f&iacute;sica como l&oacute;gica";
 choices[34][1] = "El llamado sniffing es un tipo de intercepci&oacute;n";
 choices[34][2] = "Los ataques de tipo pasivo son f&aacute;ciles de detectar";
 choices[34][3] = "Los ataques pueden ser activos y pasivos";
 answers[34] = choices[34][2];
 units[34] = "111";
 comments[34] = "Id Pregunta: 4053. ";


//  Id pregunta: 4066 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  Que elemento de los siguientes no son propios de instalaciones de VoIP";
 choices[35]= new Array();
 choices[35][0] = "gatekeeper";
 choices[35][1] = "SIP";
 choices[35][2] = "router";
 choices[35][3] = "todos los anteriores";
 answers[35] = choices[35][3];
 units[35] = "117";
 comments[35] = "Id Pregunta: 4066. ";


//  Id pregunta: 4240 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  Cual de las siguientes no es una caracter&iacute;stica del PUDS (Proceso Unificado de Desarrollo del SW)";
 choices[36]= new Array();
 choices[36][0] = "No tiene en cuenta el control de calidad";
 choices[36][1] = "Proceso centrado en la arquitectura";
 choices[36][2] = "Proceso dirigido por los casos de uso";
 choices[36][3] = "Proceso incremental e iterativo";
 answers[36] = choices[36][0];
 units[36] = "79";
 comments[36] = "Id Pregunta: 4240. ";


//  Id pregunta: 4308 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  Se denomina &ldquo;Partici&oacute;n equivalente&rdquo; a:";
 choices[37]= new Array();
 choices[37][0] = "Una t&eacute;cnica de programaci&oacute;n modular donde el dominio de la aplicaci&oacute;n se subdivide en &aacute;reas funcionales de aproximadamente el mismo tama&ntilde;o";
 choices[37][1] = "Una t&eacute;cnica de pruebas de &ldquo;caja negra&rdquo; que divide el dominio de un programa en clases de datos de las que se pueden derivar casos de prueba.";
 choices[37][2] = "Una t&eacute;cnica de dise&ntilde;o orientado a objetos para mejorar la estructura de los programas reemplazando la herencia con mecanismos de delegaci&oacute;n.";
 choices[37][3] = "Una t&eacute;cnica de gesti&oacute;n del desarrollo de proyectos para la atribuci&oacute;n de la responsabilidad sobre las pruebas de la aplicaci&oacute;n";
 answers[37] = choices[37][1];
 units[37] = "88";
 comments[37] = "Id Pregunta: 4308. ";


//  Id pregunta: 4432 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes no es un posible mecanismo de transmisi&oacute;n de voz sobre paquetes de datos?";
 choices[38]= new Array();
 choices[38][0] = "Voz sobre IP (VoIP).";
 choices[38][1] = "Voz sobre TCP (VoTCP).";
 choices[38][2] = "Voz sobre celdas (VoATM).";
 choices[38][3] = "Voz sobre tramas (BoFR).";
 answers[38] = choices[38][1];
 units[38] = "100";
 comments[38] = "Id Pregunta: 4432. ";


//  Id pregunta: 4527 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cual es el tipo de mantenimiento que supone un conjunto de actividades para facilitar el mantenimiento futuro del sistema?";
 choices[39]= new Array();
 choices[39][0] = "Mantenimiento perfectivo.";
 choices[39][1] = "Mantenimiento adaptativo.";
 choices[39][2] = "Mantenimiento correctivo.";
 choices[39][3] = "Mantenimiento preventivo.";
 answers[39] = choices[39][3];
 units[39] = "86";
 comments[39] = "Id Pregunta: 4527. ";


//  Id pregunta: 4545 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[40]= new Array();
 choices[40][0] = "El sistema GPRS permite el env&iacute;o de paquetes de datos sobre la red GSM.";
 choices[40][1] = "El sistema GPRS utiliza los mismos recursos de la interfaz radio del sistema GSM.";
 choices[40][2] = "En una misma celda no pueden coexistir canales GPRS y GSM.";
 choices[40][3] = "Un canal GPRS solo se asigna al usuario cuando se transmiten o reciben paquetes, mientras que un canal GSM se asigna de forma permanente al usuario durante toda la llamada.";
 answers[40] = choices[40][2];
 units[40] = "108";
 comments[40] = "Id Pregunta: 4545. ";


//  Id pregunta: 4625 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Cuai de las siguientes caracter&iacute;stica del protocolo SOAP es falsa";
 choices[41]= new Array();
 choices[41][0] = "atraviesa firewalls y routers.";
 choices[41][1] = "depende del sistema operativo y del procesador";
 choices[41][2] = "es un est&aacute;ndar de la industria";
 choices[41][3] = "utiliza los mismos est&aacute;ndares de la Web.";
 answers[41] = choices[41][1];
 units[41] = "51";
 comments[41] = "Id Pregunta: 4625. ";


//  Id pregunta: 4732 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es:";
 choices[42]= new Array();
 choices[42][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[42][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[42][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[42][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[42] = choices[42][2];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4732. Examen 2006 JCYL";


//  Id pregunta: 4781 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[43]= new Array();
 choices[43][0] = "El Real Decreto 522/2006 de Supresi&oacute;n de Fotocopias de DNI";
 choices[43][1] = "El Real Decreto 523/2006 de Supresi&oacute;n de Certificados de empadronamiento";
 choices[43][2] = "El Real Decreto 1553/2005 que regula el DNI electr&oacute;nico";
 choices[43][3] = "Todas las anteriores son ciertas";
 answers[43] = choices[43][3];
 units[43] = "30";
 comments[43] = "Id Pregunta: 4781. ";


//  Id pregunta: 5240 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  Para el desarrollo de una planificaci&oacute;n estrat&eacute;gica se necesita conocer:";
 choices[44]= new Array();
 choices[44][0] = "La misi&oacute;n de la organizaci&oacute;n";
 choices[44][1] = "Puntos d&eacute;biles y fuertes de la organizaci&oacute;n para sacar partido de ello";
 choices[44][2] = "Los clientes, competidores y accionistas";
 choices[44][3] = "Todas las anteriores.";
 answers[44] = choices[44][3];
 units[44] = "77";
 comments[44] = "Id Pregunta: 5240. ";


//  Id pregunta: 5697 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;C&oacute;mo se conecta el DNI electr&oacute;nico al ordenador personal del ciudadano?";
 choices[45]= new Array();
 choices[45][0] = "Es necesario un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en las comisar&iacute;as";
 choices[45][1] = " A trav&eacute;s de un lector de tarjetas que cumpla el standard ISO-7816";
 choices[45][2] = "Con un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en establecimientos comerciales";
 choices[45][3] = "No es posible conectarlo a ordenadores personales, s&oacute;lo los especialmente habilitados para ello por la Direcci&oacute;n General de la Polic&iacute;a";
 answers[45] = choices[45][1];
 units[45] = "74";
 comments[45] = "Id Pregunta: 5697. ";


//  Id pregunta: 5824 Año de creación de pregunta: 2009-01-01
 questions[46]= "47)  Indique cu&aacute;l de los siguientes criterios NO es correcto de acuerdo con el Modelo EFQM de Excelencia";
 choices[46]= new Array();
 choices[46][0] = "Colaboradores y recursos";
 choices[46][1] = "Resultados";
 choices[46][2] = "Resultados en la sociedad";
 choices[46][3] = "Viabilidad econ&oacute;mica";
 answers[46] = choices[46][3];
 units[46] = "92";
 comments[46] = "Id Pregunta: 5824. MAP 2008 A1";


//  Id pregunta: 5853 Año de creación de pregunta: 2009-01-01
 questions[47]= "48)  Con respecto a ITIL, el proceso &quot;Configuration Management&quot; o Gesti&oacute;n de la Configuraci&oacute;n, &iquest;en cu&aacute;l de los m&oacute;dulos ITIL citados seguidamente est&aacute; incluido?";
 choices[47]= new Array();
 choices[47][0] = "ICT Infrastructure Management";
 choices[47][1] = "Service Delibery";
 choices[47][2] = "Service Support";
 choices[47][3] = "Software Asset Management";
 answers[47] = choices[47][2];
 units[47] = "98";
 comments[47] = "Id Pregunta: 5853. Pregunta 33";


//  Id pregunta: 5873 Año de creación de pregunta: 2009-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes apartados NO es una t&eacute;cnica utilizada en reconocimiento de voz?";
 choices[48]= new Array();
 choices[48][0] = "Modelos de Markov";
 choices[48][1] = "Redes Neuronales";
 choices[48][2] = "DTW (Dynamic Time Warping)";
 choices[48][3] = "OSR (Online Speech Recognition)";
 answers[48] = choices[48][3];
 units[48] = "94";
 comments[48] = "Id Pregunta: 5873. MAP 2008 A1";


//  Id pregunta: 5915 Año de creación de pregunta: 2009-01-01
 questions[49]= "50)  En el modelo de Evoluci&oacute;n de los Sistemas de Informaci&oacute;n de Gibson y Nolan se distinguen cuatro etapas distintas en el crecimiento de todo sistema de informaci&oacute;n en una empresa. &iquest;Cu&aacute;l es el orden cronol&oacute;gico correcto de dichas etapas?";
 choices[49]= new Array();
 choices[49][0] = "Iniciaci&oacute;n, formalizaci&oacute;n, expansi&oacute;n y madurez";
 choices[49][1] = "Iniciaci&oacute;n, expansi&oacute;n, madurez y formalizaci&oacute;n";
 choices[49][2] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 choices[49][3] = "Iniciaci&oacute;n, formalizaci&oacute;n, madurez y expansi&oacute;n";
 answers[49] = choices[49][2];
 units[49] = "21";
 comments[49] = "Id Pregunta: 5915. MAP 2008 A1";


//  Id pregunta: 5937 Año de creación de pregunta: 2009-01-01
 questions[50]= "51)  Con la herramienta de virtualizaci&oacute;n Xen, &iquest;podemos virtualizar Microsoft Windows?";
 choices[50]= new Array();
 choices[50][0] = "S&iacute;, siempre que la CPU tenga soporte de x86 virtualization.";
 choices[50][1] = "S&iacute;, desde la versi&oacute;n 2.0";
 choices[50][2] = "S&iacute;, siempre que el sistema operativo anfitri&oacute;n tambi&eacute;n sea Microsoft Windows.";
 choices[50][3] = "S&iacute;, siempre que no queramos utilizar en el Windows hu&eacute;sped las Microsoft Enhanced Process Capabilities.";
 answers[50] = choices[50][0];
 units[50] = "119";
 comments[50] = "Id Pregunta: 5937. ";


//  Id pregunta: 5986 Año de creación de pregunta: 2010-01-01
 questions[51]= "52)  Las arquitecturas orientadas a servicios est&aacute;n basadas en una serie de principios b&aacute;sicos, uno de los cuales es:";
 choices[51]= new Array();
 choices[51][0] = "Los servicios usan una arquitectura &quot;hub-in-spoke&quot;.";
 choices[51][1] = "Se integran en sistemas SGDBR.";
 choices[51][2] = "Los cambios en la implementaci&oacute;n afectan a los consumidores del servicio.";
 choices[51][3] = "Deben estar accesibles y deben poder ser localizados para su consumo.";
 answers[51] = choices[51][3];
 units[51] = "51";
 comments[51] = "Id Pregunta: 5986. TIC A 2009";


//  Id pregunta: 5992 Año de creación de pregunta: 2010-01-01
 questions[52]= "53)  En el encaminamiento por vector distancia:";
 choices[52]= new Array();
 choices[52][0] = "Cada router env&iacute;a su LSP a toda la red.";
 choices[52][1] = "Se pueden emplear varias m&eacute;tricas.";
 choices[52][2] = "Se produce el problema de cuenta a infinito.";
 choices[52][3] = "El algoritmo correspondiente tambi&eacute;n es conocido como algoritmo de Dijkstra.";
 answers[52] = choices[52][2];
 units[52] = "102";
 comments[52] = "Id Pregunta: 5992. TIC A 2009";


//  Id pregunta: 6096 Año de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes NO es un principio b&aacute;sico de todo modelo orientado a objetos seg&uacute;n Booch?";
 choices[53]= new Array();
 choices[53][0] = "Distribuci&oacute;n.";
 choices[53][1] = "Abstracci&oacute;n.";
 choices[53][2] = "Encapsulaci&oacute;n.";
 choices[53][3] = "Modularidad.";
 answers[53] = choices[53][0];
 units[53] = "82";
 comments[53] = "Id Pregunta: 6096. TIC A 2009";


//  Id pregunta: 6203 Año de creación de pregunta: 2010-01-01
 questions[54]= "55)  Las fases componentes del ciclo de vida Rapid Application Development son:";
 choices[54]= new Array();
 choices[54][0] = "Cuatro: Planificaci&oacute;n de requerimientos, dise&ntilde;o con usuario, construcci&oacute;n, implantaci&oacute;n";
 choices[54][1] = "Siete: Planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n, pruebas e integraci&oacute;n, implantaci&oacute;n y aceptaci&oacute;n, mantenimiento";
 choices[54][2] = "Cuatro: Planificaci&oacute;n, an&aacute;lisis del riesgo, ingenier&iacute;a, evaluaci&oacute;n del cliente";
 choices[54][3] = "Cinco: Especificaci&oacute;n del producto, transformaci&oacute;n autom&aacute;tica, realizaci&oacute;n bucles iterativos, probar el producto, reajustar especificacones";
 answers[54] = choices[54][0];
 units[54] = "76";
 comments[54] = "Id Pregunta: 6203. TICB-2009, bloque desarrollo";


//  Id pregunta: 6234 Año de creación de pregunta: 2010-01-01
 questions[55]= "56)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[55]= new Array();
 choices[55][0] = "CIL";
 choices[55][1] = "CLI";
 choices[55][2] = "JIT";
 choices[55][3] = "CLR";
 answers[55] = choices[55][0];
 units[55] = "59,115";
 comments[55] = "Id Pregunta: 6234. ";


//  Id pregunta: 6271 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  Qu&eacute; estandar define el ciclo de vida de un sistema de informac&oacute;n como el marco de referencia que contiene los procesos, las actividades y las tareas involucradas en el desarrollo, la explotaci&oacute;n y el mantenimiento de un producto de software, abarcando la vida del sistema desde la definici&oacute;n de los requisitos hasta la finalizaci&oacute;n de su uso.";
 choices[56]= new Array();
 choices[56][0] = "ISO-12207";
 choices[56][1] = "ISO-9800";
 choices[56][2] = "ISO-17702";
 choices[56][3] = "ISO-11200";
 answers[56] = choices[56][0];
 units[56] = "76";
 comments[56] = "Id Pregunta: 6271. ";


//  Id pregunta: 6295 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "Entrevistas";
 choices[57][1] = "An&aacute;lisis de Mercado";
 choices[57][2] = "Entorno de Bucles Adaptativo";
 choices[57][3] = "Brainstorming";
 answers[57] = choices[57][2];
 units[57] = "78";
 comments[57] = "Id Pregunta: 6295. ";


//  Id pregunta: 6323 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  Toda sentencia SQL tiene al menos los siguientes elementos:";
 choices[58]= new Array();
 choices[58][0] = "SELECT, FROM";
 choices[58][1] = "SELECT, FROM y WHERE";
 choices[58][2] = "SELECT, FROM, o bien WHERE o bien HAVING";
 choices[58][3] = "SELECT, FROM y ORDER BY";
 answers[58] = choices[58][0];
 units[58] = "58";
 comments[58] = "Id Pregunta: 6323. ";


//  Id pregunta: 6414 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  Las posibilidades de usar el mecanismo de comprobaci&oacute;n de la legalidad del software, conocido como huella digital se clasifican en diferentes grupos que han aparecido a lo largo del tiempo , &iquest;Cu&aacute;l de los siguientes no es uno de ellos?";
 choices[59]= new Array();
 choices[59][0] = "Sim&eacute;trica";
 choices[59][1] = "Asim&eacute;trica";
 choices[59][2] = "An&oacute;nima";
 choices[59][3] = "Esteganogr&aacute;fica";
 answers[59] = choices[59][3];
 units[59] = "37";
 comments[59] = "Id Pregunta: 6414. ";


//  Id pregunta: 6423 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes personas puso en marcha el W3C?";
 choices[60]= new Array();
 choices[60][0] = "Tim O'Reilly";
 choices[60][1] = "Vinton Cerf";
 choices[60][2] = "Tim Berners-Lee";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][2];
 units[60] = "39";
 comments[60] = "Id Pregunta: 6423. ";


//  Id pregunta: 6434 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  En el modelo entidad/relaci&oacute;n la forma de representar una entidad es:";
 choices[61]= new Array();
 choices[61][0] = "Mediante un rombo y en el interior del mismo el nombre de la entidad.";
 choices[61][1] = "Mediante un rect&aacute;ngulo y en el interior del mismo el nombre de la entidad.";
 choices[61][2] = "Mediante un elipse y en el interior del mismo el nombre de la entidad.";
 choices[61][3] = "Mediante un tri&aacute;ngulo invertido y el nombre de la entidad en una elipse unida al tri&aacute;ngulo mediante una l&iacute;nea.";
 answers[61] = choices[61][1];
 units[61] = "70";
 comments[61] = "Id Pregunta: 6434. ";


//  Id pregunta: 6517 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  Se&ntilde;ale que afirmaci&oacute;n es FALSA en relaci&oacute;n a los archivos jar en java:";
 choices[62]= new Array();
 choices[62][0] = "El algoritmo de compresi&oacute;n que utilizan es LZW.";
 choices[62][1] = "Son independientes de la plataforma y cualquier JVM los interpreta.";
 choices[62][2] = "Todos los ficheros que contienen, tienen la extensi&oacute;n class.";
 choices[62][3] = "Pueden incluir un subdirectorio de metainformaci&oacute;n llamado META-INF.";
 answers[62] = choices[62][2];
 units[62] = "60";
 comments[62] = "Id Pregunta: 6517. ";


//  Id pregunta: 6557 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Una Autoridad de Validaci&oacute;n (VA) puede realizar distintos tipos de servicios de validaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Descarga de CRLs";
 choices[63][1] = "Via OCSP";
 choices[63][2] = "A y B son correctas";
 choices[63][3] = "A y B son incorrectas";
 answers[63] = choices[63][2];
 units[63] = "74";
 comments[63] = "Id Pregunta: 6557. ";


//  Id pregunta: 6604 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  En el an&aacute;lisis estructurado un sistema se puede modelizar completamente con:";
 choices[64]= new Array();
 choices[64][0] = "Modelo Funcional, Modelo Est&aacute;tico y Modelo Din&aacute;mico";
 choices[64][1] = "Modelo de Procesos y Modelo de Datos";
 choices[64][2] = "Modelo Funcional, Modelo de Clases y Modelo de Casos de Uso";
 choices[64][3] = "Modelo Funcional y Modelo E/R";
 answers[64] = choices[64][0];
 units[64] = "81";
 comments[64] = "Id Pregunta: 6604. ";


//  Id pregunta: 6628 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  En el modelo CMM de Ingenier&iacute;a de Software, dentro del nivel 'Definido' est&aacute;n las &Aacute;reas Clave:";
 choices[65]= new Array();
 choices[65][0] = "Gesti&oacute;n de Cambios Tecol&oacute;gicos y Gesti&oacute;n de Cambios en los Procesos";
 choices[65][1] = "Aseguramiento de la Calidad y Planificaci&oacute;n del Proyecto";
 choices[65][2] = "Gesti&oacute;n Cuantitativa del Proyecto y Gesti&oacute;n de Calidad del Software";
 choices[65][3] = "Gesti&oacute;n Integrada del Software y Coordinaci&oacute;n Intergrupos";
 answers[65] = choices[65][3];
 units[65] = "87";
 comments[65] = "Id Pregunta: 6628. ";


//  Id pregunta: 7320 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Cu&aacute;l de las siguientes afirmaciones sobre Visual Studio .NET no es cierta:";
 choices[66]= new Array();
 choices[66][0] = "Es un IDE (Entorno Integrado de Desarrollo) desarrollado por Microsoft";
 choices[66][1] = "Permite la programaci&oacute;n WYSIWYG (What You See Is What You Get)";
 choices[66][2] = "Los programas desarrollados con Visual Studio .NET &uacute;nicamente pueden usar SQL Server para el almacenamiento de datos";
 choices[66][3] = "Las versiones Express Editions se ofrecen gratuitamente";
 answers[66] = choices[66][2];
 units[66] = "59";
 comments[66] = "Id Pregunta: 7320. ";


//  Id pregunta: 7333 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  La International Telecommunication Union (ITU)  es el organismo especializado de la Organizaci&oacute;n de las Naciones Unidas encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras. Se divide en varios sectores, el correspondiente a Telecomunicaciones se denomina:";
 choices[67]= new Array();
 choices[67][0] = "ITU-T";
 choices[67][1] = "ITU-R";
 choices[67][2] = "ITU-D";
 choices[67][3] = "ITU-C";
 answers[67] = choices[67][0];
 units[67] = "42";
 comments[67] = "Id Pregunta: 7333. ";


//  Id pregunta: 8200 Año de creación de pregunta: 2011-01-01
 questions[68]= "69)  En una valoraci&oacute;n de tres ofertas inform&aacute;ticas, nos encontramos que en un criterio a maximizar, las puntuaciones son : 5, 7 y 11. &iquest;Cu&aacute;les ser&iacute;an sus puntuaciones normalizadas por el m&eacute;todo de fracci&oacute;n del ideal?:";
 choices[68]= new Array();
 choices[68][0] = "0,5 ; 0,7 ; 1 ";
 choices[68][1] = "0,227 ; 0,318 ; 0,454 ";
 choices[68][2] = "0; 0,4; 1 ";
 choices[68][3] = "1 ; 1,4 ; 2 ";
 answers[68] = choices[68][2];
 units[68] = "41";
 comments[68] = "Id Pregunta: 8200. Examen TIC A1 2010";


//  Id pregunta: 8213 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  La plataforma de validaci&oacute;n de certificados VALIDE del Ministerio de la Presidencia permite validar:";
 choices[69]= new Array();
 choices[69][0] = "Las URLs de los portales de las Administraciones P&uacute;blicas.";
 choices[69][1] = "Los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[69][2] = "Los certificados de sedes electr&oacute;nicas y los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[69][3] = "Los certificados de sede electr&oacute;nica.";
 answers[69] = choices[69][3];
 units[69] = "30";
 comments[69] = "Id Pregunta: 8213. Examen TIC A1 2010";


//  Id pregunta: 8288 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  Un agente SNMP env&iacute;a traps a un sistema administrador de red a trav&eacute;s del puerto: ";
 choices[70]= new Array();
 choices[70][0] = "162.";
 choices[70][1] = "126.";
 choices[70][2] = "161.";
 choices[70][3] = "25.";
 answers[70] = choices[70][0];
 units[70] = "104";
 comments[70] = "Id Pregunta: 8288. Examen TIC A2 2010";


//  Id pregunta: 8327 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  ATM se caracteriza, entre otras, por que:";
 choices[71]= new Array();
 choices[71][0] = "Puede funcionar sobre cualquier capa f&iacute;sica";
 choices[71][1] = "Proporciona retransmisi&oacute;n de celdas en caso de detecci&oacute;n de error";
 choices[71][2] = "a y b son ciertas";
 choices[71][3] = "Todas las anteriores son falsas";
 answers[71] = choices[71][0];
 units[71] = "109";
 comments[71] = "Id Pregunta: 8327. Analista Ayto. Madrid 2010";


//  Id pregunta: 8347 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA 3, en la tarea &quot;Preparaci&oacute;n del Entorno de Construcci&oacute;n&quot; participan:";
 choices[72]= new Array();
 choices[72][0] = "Programadores, T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[72][1] = "T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[72][2] = "Equipo del Proyecto, T&eacute;cnicos de Sistemas, Equipo de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[72][3] = "Programadores, Equipo de Arquitectura, Administradores de Bases de Datos.";
 answers[72] = choices[72][2];
 units[72] = "86";
 comments[72] = "Id Pregunta: 8347. Examen TIC A2 2010";


//  Id pregunta: 8367 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;En qu&eacute; a&ntilde;o se ha producido la ultima revisi&oacute;n del est&aacute;ndar ANSI SQL?";
 choices[73]= new Array();
 choices[73][0] = "1992.";
 choices[73][1] = "2008";
 choices[73][2] = "2011";
 choices[73][3] = "2012";
 answers[73] = choices[73][2];
 units[73] = "57";
 comments[73] = "Id Pregunta: 8367. Similar a examen TIC A2 2010";


//  Id pregunta: 8383 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  El cable UTP (Unshielded Twisted Pair):";
 choices[74]= new Array();
 choices[74][0] = "No es tan susceptible a las interferencias electromagn&eacute;ticas como el cable STP (Shielded Twisted Pair). ";
 choices[74][1] = "Es m&aacute;s barato y f&aacute;cil de manipular que el STP.";
 choices[74][2] = "Tiene una l&aacute;mina externa de aluminio o de cobre trenzado alrededor del conjunto de pares.";
 choices[74][3] = "Tiene una pantalla protectora para cada par de hilos.";
 answers[74] = choices[74][1];
 units[74] = "99";
 comments[74] = "Id Pregunta: 8383. Examen TIC A2 2010";


//  Id pregunta: 8451 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  El est&aacute;ndar 802.11b mas conocido como Wifi, trabaja en la banda libre de:";
 choices[75]= new Array();
 choices[75][0] = "2.4 GHz";
 choices[75][1] = "2.4 MHz";
 choices[75][2] = "2.4 THz";
 choices[75][3] = "2 GHz";
 answers[75] = choices[75][0];
 units[75] = "107";
 comments[75] = "Id Pregunta: 8451. Analista Ayto. Madrid 2010";


//  Id pregunta: 8756 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes NO es un sistema operativo para dispositivos m&oacute;viles?";
 choices[76]= new Array();
 choices[76][0] = "Android.";
 choices[76][1] = " SymbianOS.";
 choices[76][2] = "HTC Mobile.";
 choices[76][3] = "RIM BlackBerry.";
 answers[76] = choices[76][2];
 units[76] = "52";
 comments[76] = "Id Pregunta: 8756. Examen TIC A2 2010 interna";


//  Id pregunta: 8784 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  MAGERIT es";
 choices[77]= new Array();
 choices[77][0] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de riesgos de sistemas de informaci&oacute;n.";
 choices[77][1] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de centros de recuperaci&oacute;n de desastres de sistemas de informaci&oacute;n.";
 choices[77][2] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de sistemas de archivo de sistemas de informaci&oacute;n.";
 choices[77][3] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de evaluaci&oacute;n de rendimiento de sistemas de informaci&oacute;n.";
 answers[77] = choices[77][0];
 units[77] = "33";
 comments[77] = "Id Pregunta: 8784. Examen UPM A2 2011";


//  Id pregunta: 8857 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  Si en fichero de estilos.css, se incluye: #inner { float: right; width: 130px; color: blue }, &iquest;c&oacute;mo se utilizar&iacute;a el estilo indicado en un p&aacute;rrafo de home.html?";
 choices[78]= new Array();
 choices[78][0] = "&lt;P style=&rdquo;inner&rdquo;&gt;";
 choices[78][1] = "&lt;P id=&rdquo;inner&rdquo;&gt;";
 choices[78][2] = "&lt;P class=&rdquo;inner&rdquo;&gt;";
 choices[78][3] = "&lt;P font=inner&gt;";
 answers[78] = choices[78][1];
 units[78] = "69";
 comments[78] = "Id Pregunta: 8857. Analista Ayto. Madrid 2010";


//  Id pregunta: 8890 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;En que banda de frecuencias trabaja WiBro?";
 choices[79]= new Array();
 choices[79][0] = "10GHz-66GHz";
 choices[79][1] = "2,45MHz";
 choices[79][2] = "2,3MHz-2,4 MHz";
 choices[79][3] = "2GHz-11GHz";
 answers[79] = choices[79][2];
 units[79] = "107";
 comments[79] = "Id Pregunta: 8890. ";


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


//  Id pregunta: 9007 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  No ser&aacute; necesario que una ICT incluya inicialmente la red de distribuci&oacute;n para los servicios de:";
 choices[81]= new Array();
 choices[81][0] = "Telecomunicaciones por cable.";
 choices[81][1] = "Radiodifusi&oacute;n.";
 choices[81][2] = "Telefon&iacute;a.";
 choices[81][3] = "Deber&aacute; incluir todas ellas.";
 answers[81] = choices[81][3];
 units[81] = "99";
 comments[81] = "Id Pregunta: 9007. Teleco Ayto. Madrid 2010- Modificaci&oacute;n de la original por MVO al quedar Derogada por RD 346/2011";


//  Id pregunta: 9008 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  Dado que el espectro radioel&eacute;ctrico es considerado un recurso escaso por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, el procedimiento para el otorgamiento de t&iacute;tulos habilitantes de uso privativo del espectro radioel&eacute;ctrico es:";
 choices[82]= new Array();
 choices[82][0] = "Es competencia de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n el otorgamiento de los t&iacute;tulos habilitantes salvo en los supuestos de otorgamiento por procedimiento de licitaci&oacute;n contemplado en el art&iacute;culo 6.";
 choices[82][1] = "La licitaci&oacute;n p&uacute;blica de las frecuencias para la obtenci&oacute;n de la concesi&oacute;n administrativa sujeta a los principios de publicidad, concurrencia y no discriminaci&oacute;n.";
 choices[82][2] = "Las dos anteriores son ciertas.";
 choices[82][3] = "Ninguna de las anteriores.";
 answers[82] = choices[82][2];
 units[82] = "110";
 comments[82] = "Id Pregunta: 9008. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9028 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Indica cual de estas afirmaciones es cierta";
 choices[83]= new Array();
 choices[83][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[83][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[83][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[83][3] = "Ninguna de las anteriores";
 answers[83] = choices[83][1];
 units[83] = "103";
 comments[83] = "Id Pregunta: 9028. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9044 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es la capa del modelo OSI equivalente a Ethernet";
 choices[84]= new Array();
 choices[84][0] = "Capa F&iacute;sica de Datos";
 choices[84][1] = "Capa de Red";
 choices[84][2] = "Capa de Enlace de Datos";
 choices[84][3] = "Capa de Transporte";
 answers[84] = choices[84][2];
 units[84] = "100";
 comments[84] = "Id Pregunta: 9044. ";


//  Id pregunta: 9081 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Indique cu&aacute;l es el n&uacute;mero de protocolo IPv6";
 choices[85]= new Array();
 choices[85][0] = "17";
 choices[85][1] = "41";
 choices[85][2] = "47";
 choices[85][3] = "50";
 answers[85] = choices[85][1];
 units[85] = "111";
 comments[85] = "Id Pregunta: 9081. ";


//  Id pregunta: 9112 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l no es caracter&iacute;stica de los sistemas de mainframe o sistemas multiprocesor?";
 choices[86]= new Array();
 choices[86][0] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH o procesamiento sin interacci&oacute;n";
 choices[86][1] = "El m&eacute;todo utilizado para dotar a estos sistemas de altas prestaciones";
 choices[86][2] = "Se trata de soluciones altamente propietarias, concebidas para entornos cerrados, no heterog&eacute;neos.";
 choices[86][3] = "Existen muy pocos fabricantes en el mercado que desarrollen este tipo de sistemas";
 answers[86] = choices[86][1];
 units[86] = "45";
 comments[86] = "Id Pregunta: 9112. ";


//  Id pregunta: 9199 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[87]= new Array();
 choices[87][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[87][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[87][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[87][3] = "Todas las anteriores son verdaderas.";
 answers[87] = choices[87][3];
 units[87] = "36";
 comments[87] = "Id Pregunta: 9199. ";


//  Id pregunta: 9213 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Dentro de una red FC existen una serie de servicios b&aacute;sicos para su correcto funcionamiento y que son implementadas autom&aacute;ticamente de forma distribuida entre todos los switches que componen la red. Son los siguientes:";
 choices[88]= new Array();
 choices[88][0] = "SNS, RCSN, Login, Servicio de gesti&oacute;n y Servicio de tiempos.";
 choices[88][1] = "Servicio de gesti&oacute;n y servicio de tiempos";
 choices[88][2] = "Login";
 choices[88][3] = "Servidor de nombres que asigna los FCID y permite traducir de WWN a FCID.";
 answers[88] = choices[88][0];
 units[88] = "48";
 comments[88] = "Id Pregunta: 9213. ";


//  Id pregunta: 9352 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l es la velocidad disponible de un acceso b&aacute;sico RDSI en Europa?";
 choices[89]= new Array();
 choices[89][0] = "1544";
 choices[89][1] = "64";
 choices[89][2] = "2048";
 choices[89][3] = "1024";
 answers[89] = choices[89][2];
 units[89] = "103";
 comments[89] = "Id Pregunta: 9352. Pruebas selectivas para Gesti&oacute;n de Sistemas e Inform&aacute;tica de la UPM 2011. Libre";


//  Id pregunta: 9366 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Resilient Packet Ring";
 choices[90]= new Array();
 choices[90][0] = "Es una tecnolog&iacute;a de nivel 3.";
 choices[90][1] = "Es una tecnolog&iacute;a obsoleta.";
 choices[90][2] = "Es incompatible con Ethernet.";
 choices[90][3] = "Es una tecnolog&iacute;a de nivel 2.";
 answers[90] = choices[90][3];
 units[90] = "101";
 comments[90] = "Id Pregunta: 9366. ";


//  Id pregunta: 9389 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[91]= new Array();
 choices[91][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[91][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[91][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[91][3] = "Las recomendaciones GSM contemplan la posibilidad de utilizar un codificador de voz que permita dividir en ";
 answers[91] = choices[91][2];
 units[91] = "108";
 comments[91] = "Id Pregunta: 9389. Examen TIC A1 2011 Libre";


//  Id pregunta: 9449 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  En el modelo Entidad-Relaci&oacute;n extendido, si puede haber elementos de una superentidad que no est&eacute;n en ninguna de las subentidades hablamos de:";
 choices[92]= new Array();
 choices[92][0] = "Jerarqu&iacute;a con cobertura total.";
 choices[92][1] = "Jerarqu&iacute;a con cobertura parcial.";
 choices[92][2] = "Jerarqu&iacute;a disjunta.";
 choices[92][3] = "Jerarqu&iacute;a con solapamiento.";
 answers[92] = choices[92][1];
 units[92] = "80";
 comments[92] = "Id Pregunta: 9449. Examen AGE TIC A1 2011";


//  Id pregunta: 9512 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  En relaci&oacute;n a las APIs de Java, indique la afirmaci&oacute;n falsa:";
 choices[93]= new Array();
 choices[93][0] = "JNDI es el API est&aacute;ndar para el acceso a directorios y servicios de nombres";
 choices[93][1] = "JTA permite que los componentes EE gestionen sus propias transacciones";
 choices[93][2] = "Java IDL permite a las aplicaciones Java EE invocar a objetos CORBA";
 choices[93][3] = "JAX-RPC no soporta WSDL";
 answers[93] = choices[93][3];
 units[93] = "116";
 comments[93] = "Id Pregunta: 9512. ";


//  Id pregunta: 9772 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Indique cu&aacute;l de los siguientes sistemas de archivos se corresponde con el nuevo desarrollado por Microsoft y que fue presentado junto a Windows Server 2012:";
 choices[94]= new Array();
 choices[94][0] = "ReFS";
 choices[94][1] = "NTFS ";
 choices[94][2] = "HPFS";
 choices[94][3] = "CSFS ";
 answers[94] = choices[94][0];
 units[94] = "56";
 comments[94] = "Id Pregunta: 9772. Examen TIC A2 2013";


//  Id pregunta: 9808 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Se&ntilde;alar el nombre de la aplicaci&oacute;n de generaci&oacute;n de copia aut&eacute;ntica en papel de documentos con firma electr&oacute;nica y de justificantes de firma electr&oacute;nica, que el Ministerio de Hacienda y AAPP ofrece en modelo federado:";
 choices[95]= new Array();
 choices[95][0] = "STORK";
 choices[95][1] = "eDocument";
 choices[95][2] = "eSign";
 choices[95][3] = "eVisor";
 answers[95] = choices[95][3];
 units[95] = "44";
 comments[95] = "Id Pregunta: 9808. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10268 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Las infracciones leves de la Ley 15/1999:";
 choices[96]= new Array();
 choices[96][0] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben al a&ntilde;o";
 choices[96][1] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben al a&ntilde;o";
 choices[96][2] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben a los seis meses";
 choices[96][3] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben a los seis meses";
 answers[96] = choices[96][1];
 units[96] = "29";
 comments[96] = "Id Pregunta: 10268. Art&iacute;culos 45.1 y 47.1 de la Ley 15/1999";


//  Id pregunta: 10282 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[97]= new Array();
 choices[97][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[97][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[97][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[97][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizar&aacute; siempre que se actualicen las tablas involucradas en esa vista.";
 answers[97] = choices[97][2];
 units[97] = "58";
 comments[97] = "Id Pregunta: 10282. TIC A2, libre, examen 2013";


//  Id pregunta: 10300 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Indicar de las siguientes, cu&aacute;l es una cabecera de extensi&oacute;n IPv6:";
 choices[98]= new Array();
 choices[98][0] = "Cabecera siguiente.";
 choices[98][1] = "Enrutamiento.";
 choices[98][2] = "Longitud de la carga &uacute;til.";
 choices[98][3] = "L&iacute;mite de saltos.";
 answers[98] = choices[98][1];
 units[98] = "100";
 comments[98] = "Id Pregunta: 10300. TIC A2, libre, examen 2013";


//  Id pregunta: 10515 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes respuestas NO se emplea para realizar pruebas de carga?";
 choices[99]= new Array();
 choices[99][0] = "Jmeter";
 choices[99][1] = "Loadrunner";
 choices[99][2] = "Grinder";
 choices[99][3] = "Turbine";
 answers[99] = choices[99][3];
 units[99] = "86";
 comments[99] = "Id Pregunta: 10515. TIC A2, libre, examen 2013";


