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


//  Id pregunta: 76 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; organizaci&oacute;n se encarga de fijar los est&aacute;ndares federales de trantamiento de informaci&oacute;n que las agencias gubernamentales USA deben seguir en la contrataci&oacute;n de software y hardware?:";
 choices[1]= new Array();
 choices[1][0] = "ANSI";
 choices[1][1] = "IEEE";
 choices[1][2] = "NIST";
 choices[1][3] = "GOSIP";
 answers[1] = choices[1][2];
 units[1] = "42";
 comments[1] = "Id Pregunta: 76. ";


//  Id pregunta: 251 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Entre las funciones de un auditor inform&aacute;tico est&aacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Revisi&oacute;n de sistemas bajo desarrollo, instalaciones inform&aacute;ticas y aplicaciones";
 choices[2][1] = "Soporte a auditores no inform&aacute;ticos";
 choices[2][2] = "La a) y la b) son correctas";
 choices[2][3] = "La a) y la b) son incorrectas";
 answers[2] = choices[2][2];
 units[2] = "31,32,33";
 comments[2] = "Id Pregunta: 251. ";


//  Id pregunta: 274 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Indique cu&aacute;l de las siguientes alternativas se refiere a una de las consecuencias organizativas de la transformaci&oacute;n de una organizaci&oacute;n tradicional en una organizaci&oacute;n basada en la informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Esa transformaci&oacute;n no tiene consecuencias organizativas";
 choices[3][1] = "El empleo de nuevas tecnolog&iacute;as";
 choices[3][2] = "El aumento del n&uacute;mero de gestores";
 choices[3][3] = "La reducci&oacute;n del n&uacute;mero de niveles jer&aacute;rquicos";
 answers[3] = choices[3][3];
 units[3] = "22";
 comments[3] = "Id Pregunta: 274. ";


//  Id pregunta: 330 Año de creación de pregunta: 2004-01-01
 questions[4]= "5)  La Comisi&oacute;n Interministerial para actuar contra las actividades vulneradoras de los derechos de propiedad intelectual e industrial (Comisi&oacute;n antipirater&iacute;a) fue creada por:";
 choices[4]= new Array();
 choices[4][0] = "RD 1228/2005, de 13 de octubre";
 choices[4][1] = "RDL 1/1996, de 12 de abril.";
 choices[4][2] = "RD 428/1993, de 26 de marzo.";
 choices[4][3] = "RD 114/2000, de 28 de enero.";
 answers[4] = choices[4][0];
 units[4] = "37";
 comments[4] = "Id Pregunta: 330. ";


//  Id pregunta: 337 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  La realizaci&oacute;n de copias de &quot;backup&quot; peri&oacute;dicas en un centro de proceso de datos es responsabilidad del &aacute;rea de:";
 choices[5]= new Array();
 choices[5][0] = "Desarrollo";
 choices[5][1] = "Mantenimiento";
 choices[5][2] = "Producci&oacute;n";
 choices[5][3] = "En un centro de proceso de datos no es necesario hacer peri&oacute;dicamente copias de seguridad";
 answers[5] = choices[5][2];
 units[5] = "26";
 comments[5] = "Id Pregunta: 337. ";


//  Id pregunta: 423 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n el Consejo Superior de Administraci&oacute;n Electr&oacute;nica, &iquest;cu&aacute;les son las principales fuentes de normas de sistemas abiertos que se deben aplicar?:";
 choices[6]= new Array();
 choices[6][0] = "ISO, POSIX y est&aacute;ndares de facto";
 choices[6][1] = "ISO, X/OPEN (gu&iacute;as XPG) y est&aacute;ndares de facto";
 choices[6][2] = "ISO, X/OPEN (gu&iacute;as XPG) y EPHOS";
 choices[6][3] = "ISO, POSIX y X/OPEN (gu&iacute;as XPG)";
 answers[6] = choices[6][2];
 units[6] = "40";
 comments[6] = "Id Pregunta: 423. ";


//  Id pregunta: 507 Año de creación de pregunta: 2003-01-01
 questions[7]= "8)  La directiva 91/250/CEE modificada por la 93/98/CEE, del Consejo relativa a la protecci&oacute;n jur&iacute;dica de los progarmas de ordenador";
 choices[7]= new Array();
 choices[7][0] = "excluye expl&iacute;citamente aquellos desarrollos sobre plataformas LINUX, shareware o software libre";
 choices[7][1] = "establece que los programas deber&aacute;n protegerse de la misma manera que las obras literarias, con arreglo a lo establecido en el convenio de Berna sobre proetcci&oacute;n de obras literarias y art&iacute;sticas";
 choices[7][2] = "regula aquellos aspectos del comercio elctr&oacute;nico relacionados con la materia de propiedad intelectual";
 choices[7][3] = "crea un nuevo t&iacute;tulo unitario de proiedad industrial 'patente comunitaria' para eliminar las distorsiones del mercado interior y permitir que Europa se aproveche al m&aacute;ximo de sus trabajos de investigaci&oacute;n";
 answers[7] = choices[7][1];
 units[7] = "36";
 comments[7] = "Id Pregunta: 507. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 519 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  Si se estima en un 20% la probabilidad de un incidente que provoca una p&eacute;rdida de 10.000 euros, se est&aacute; hablando de:";
 choices[8]= new Array();
 choices[8][0] = "Un riesgo";
 choices[8][1] = "Un impacto";
 choices[8][2] = "Ninguna de las anteriores";
 choices[8][3] = "a ) y b)";
 answers[8] = choices[8][3];
 units[8] = "31, 32, 33";
 comments[8] = "Id Pregunta: 519. Auditor&iacute;a Inform&aacute;tica ";


//  Id pregunta: 541 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  Respecto a las pautas de accesibilidad de la  iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[9]= new Array();
 choices[9][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[9][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[9][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[9][3] = "Todas las anteriores afirmaciones son falsas";
 answers[9] = choices[9][1];
 units[9] = "39";
 comments[9] = "Id Pregunta: 541. ";


//  Id pregunta: 594 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  Entre las excepciones a la cesi&oacute;n de datos sin necesidad de recabar el consentimiento del interesado no se encuentra de acuerdo al articulo 11 de la LOPD: ";
 choices[10]= new Array();
 choices[10][0] = "Las comunicaciones al Defensor del Pueblo";
 choices[10][1] = "Las comunicaciones al Ministerio Fiscal.";
 choices[10][2] = "Las comunicaciones al Consejo de Estado";
 choices[10][3] = "Las comunicaciones al Tribunal de Cuentas, en las materias que tenga atribuidas";
 answers[10] = choices[10][2];
 units[10] = "29";
 comments[10] = "Id Pregunta: 594. ";


//  Id pregunta: 756 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  Respecto a los &quot;web services&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[11]= new Array();
 choices[11][0] = "Se describen mediante el lenguaje WSDL";
 choices[11][1] = "Para usarlos han de publicarse siempre en un registro UDDI";
 choices[11][2] = "Pueden interaccionar clientes  y servicios de distintas tecnolog&iacute;as";
 choices[11][3] = "Utilizan el protocolo SOAP";
 answers[11] = choices[11][1];
 units[11] = "51";
 comments[11] = "Id Pregunta: 756. ";


//  Id pregunta: 772 Año de creación de pregunta: 2004-01-01
 questions[12]= "13)  Qu&eacute; significan las siglas JNI";
 choices[12]= new Array();
 choices[12][0] = "Interfaz para llamar m&eacute;todos nativos ";
 choices[12][1] = "Sistema de directorio";
 choices[12][2] = "Sistema para datamining";
 choices[12][3] = "ninguna de las anteriores";
 answers[12] = choices[12][0];
 units[12] = "60";
 comments[12] = "Id Pregunta: 772. ";


//  Id pregunta: 1099 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  En inteligencia artificial:";
 choices[13]= new Array();
 choices[13][0] = "Los primeros trabajos se centraron en m&eacute;todos de b&uacute;squeda heur&iacute;stica y m&eacute;todos de deducci&oacute;n autom&aacute;tica";
 choices[13][1] = "La rob&oacute;tica no secuencializa las tareas (planificaci&oacute;n) para conseguir pasar de un estado actual a un estado objetivo";
 choices[13][2] = "La representaci&oacute;n del conocimiento pertenece al campo de los Sistemas de Gesti&oacute;n de Bases de Datos, pero no al de la inteligencia artificial";
 choices[13][3] = "Los m&eacute;todos heur&iacute;sticos buscan una formulaci&oacute;n te&oacute;rica para la representaci&oacute;n del conocimiento";
 answers[13] = choices[13][0];
 units[13] = "63";
 comments[13] = "Id Pregunta: 1099. ";


//  Id pregunta: 1273 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Los documentos &quot;bien formados&quot; en XML:";
 choices[14]= new Array();
 choices[14][0] = "no siguen las reglas de etiquetado de XML pero s&iacute; del DTD";
 choices[14][1] = "siguen las reglas de etiquetado de XML y del DTD";
 choices[14][2] = "no siguen las reglas de etiquetado del DTD pero s&iacute; de XML";
 choices[14][3] = "ninguno de los anteriores";
 answers[14] = choices[14][2];
 units[14] = "69";
 comments[14] = "Id Pregunta: 1273. ";


//  Id pregunta: 1431 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Uno de los siguientes grupos de componentes no pertenece al conjunto de componentes s&iacute;ncronos de groupware. Indicar cu&aacute;l:";
 choices[15]= new Array();
 choices[15][0] = "video, audio, editor texto";
 choices[15][1] = "gestor de tr&aacute;fico, control de estado, punteros";
 choices[15][2] = "bases de datos de objetos, motores workflow, notas post-it";
 choices[15][3] = "compartidor de aplicaciones, chat, pizarras";
 answers[15] = choices[15][2];
 units[15] = "71";
 comments[15] = "Id Pregunta: 1431. ";


//  Id pregunta: 1535 Año de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest; Cu&aacute;l de los siguientes t&eacute;rminos no est&aacute; relacionado con un directorio LDAP ?";
 choices[16]= new Array();
 choices[16][0] = "DIT";
 choices[16][1] = "WMI";
 choices[16][2] = "DN";
 choices[16][3] = "RDN";
 answers[16] = choices[16][1];
 units[16] = "74";
 comments[16] = "Id Pregunta: 1535. ";


//  Id pregunta: 1542 Año de creación de pregunta: 2003-01-01
 questions[17]= "18)  &iquest; Qu&eacute; es SAS ?";
 choices[17]= new Array();
 choices[17][0] = "Serial Attached SCSI";
 choices[17][1] = "Serial ATA";
 choices[17][2] = "Small Computer Systems Interface";
 choices[17][3] = "Un paquete estad&iacute;stico";
 answers[17] = choices[17][0];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1542. ";


//  Id pregunta: 1607 Año de creación de pregunta: 2003-01-01
 questions[18]= "19)  La ejecuci&oacute;n desde otro lenguaje de programaci&oacute;n, de un procedimiento escrito en SQL, se denomina:";
 choices[18]= new Array();
 choices[18][0] = "PL/SQL.";
 choices[18][1] = "JSQL.";
 choices[18][2] = "SQL embebido.";
 choices[18][3] = "SQL anfitri&oacute;n.";
 answers[18] = choices[18][2];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1607. Junta Andaluc&iacute;a";


//  Id pregunta: 1744 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  Indique cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al software libre";
 choices[19]= new Array();
 choices[19][0] = "El kernel de linux es estable a pesar de sus continuas modificaciones";
 choices[19][1] = "El software libre es apto para usuarios no t&eacute;cnicos";
 choices[19][2] = "El SL puede funcionar con software propietario (interoperable)";
 choices[19][3] = "El software libre carece en la actualidad de un soporte adecuado";
 answers[19] = choices[19][3];
 units[19] = "61";
 comments[19] = "Id Pregunta: 1744. ";


//  Id pregunta: 1836 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  El comercio electr&oacute;nico que se produce cuando se realiza una venta de un producto por Internet se identifica como:";
 choices[20]= new Array();
 choices[20][0] = "B2B";
 choices[20][1] = "B2C";
 choices[20][2] = "B2A";
 choices[20][3] = "B2G";
 answers[20] = choices[20][1];
 units[20] = "70";
 comments[20] = "Id Pregunta: 1836. ";


//  Id pregunta: 2111 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  De los siguientes, &iquest;cu&aacute;l es un SGBD orientado a objetos puro?:";
 choices[21]= new Array();
 choices[21][0] = "GEMSTONE";
 choices[21][1] = "ONTOS";
 choices[21][2] = "OBJECT-DB";
 choices[21][3] = "DOMINIQUE";
 answers[21] = choices[21][0];
 units[21] = "82";
 comments[21] = "Id Pregunta: 2111. ";


//  Id pregunta: 2389 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  La dimensi&oacute;n est&aacute;tica del modelo E/R est&aacute; constituida por el siguiente conjunto de objetos con los que describimos la estructura del mundo real:";
 choices[22]= new Array();
 choices[22][0] = "Entidad, interrelaci&oacute;n y atributo";
 choices[22][1] = "Entidad, atributo, dominio y restricci&oacute;n";
 choices[22][2] = "Entidad, interrelaci&oacute;n, dominio, atributo y restricciones del modelo";
 choices[22][3] = "Entidad, interrelaci&oacute;n, domino, atributo y objeto";
 answers[22] = choices[22][2];
 units[22] = "80";
 comments[22] = "Id Pregunta: 2389. ";


//  Id pregunta: 2669 Año de creación de pregunta: 2003-01-01
 questions[23]= "24)  En im&aacute;genes multiespectrales el an&aacute;lisis de componentes principales sirve para:";
 choices[23]= new Array();
 choices[23][0] = "Eliminar ruidos.";
 choices[23][1] = "Eliminaci&oacute;n de informaci&oacute;n redundante.";
 choices[23][2] = "Enmascaramiento o reducci&oacute;n de ciertos efectos atmosf&eacute;ricos o topogr&aacute;ficos.";
 choices[23][3] = "Poder superponer im&aacute;genes de cara a su posterior tratamiento.";
 answers[23] = choices[23][1];
 units[23] = "93";
 comments[23] = "Id Pregunta: 2669. ";


//  Id pregunta: 2745 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;C&oacute;mo se denomina la estrategia para obtener el diagrama de  un DFD si existe un proceso que en funcion de un flujo de llegada determina la eleccion de uno o m&aacute;s flujos de informacion?";
 choices[24]= new Array();
 choices[24][0] = "An&aacute;lisis de transacci&oacute;n";
 choices[24][1] = "An&aacute;lisis de Transformaci&oacute;n";
 choices[24][2] = "An&aacute;lisis de flujo";
 choices[24][3] = "An&aacute;lisis de Informaci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "81";
 comments[24] = "Id Pregunta: 2745. ";


//  Id pregunta: 2807 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  El modelo de Jelinsi-Moranda se encuadra dentro de las m&eacute;tricas de:";
 choices[25]= new Array();
 choices[25][0] = "Productividad";
 choices[25][1] = "Fiabilidad";
 choices[25][2] = "Factores de calidad";
 choices[25][3] = "Complejidad";
 answers[25] = choices[25][1];
 units[25] = "88";
 comments[25] = "Id Pregunta: 2807. ";


//  Id pregunta: 2841 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;En el modelo EFQM qu&eacute; porcentaje se da a los procesos?";
 choices[26]= new Array();
 choices[26][0] = "14";
 choices[26][1] = "15";
 choices[26][2] = "10";
 choices[26][3] = "20";
 answers[26] = choices[26][0];
 units[26] = "92";
 comments[26] = "Id Pregunta: 2841. ";


//  Id pregunta: 3106 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  Una de las caracter&iacute;sticas fundamentales de los sistemas de recuperaci&oacute;n de informaci&oacute;n es:";
 choices[27]= new Array();
 choices[27][0] = "Trabaja con informaci&oacute;n estructurada de tipo imagen";
 choices[27][1] = "Maneja grandes vol&uacute;menes de informaci&oacute;n no estructurada, combinando norm&aacute;lmente texto e im&aacute;genes";
 choices[27][2] = "Trabaja con informaci&oacute;n estructurada y vol&uacute;menes de informaci&oacute;n medio/bajos";
 choices[27][3] = "Su objeto es la recuperaci&oacute;n de ficheros y bases de datos";
 answers[27] = choices[27][1];
 units[27] = "21";
 comments[27] = "Id Pregunta: 3106. ";


//  Id pregunta: 3290 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Qu&eacute; es un puente (bridge) en el mundo de las comunicaciones?:";
 choices[28]= new Array();
 choices[28][0] = "Un equipo que enlaza varias redes a nivel 3 de OSI";
 choices[28][1] = "Un equipo que enlaza varias redes a nivel 4 de OSI";
 choices[28][2] = "Un equipo que enlaza varias redes a nivel 5 de OSI";
 choices[28][3] = "Nada de lo anterior  ";
 answers[28] = choices[28][3];
 units[28] = "102";
 comments[28] = "Id Pregunta: 3290. ";


//  Id pregunta: 3360 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  De los t&eacute;rminos 'wander' y 'jitter' podemos decir:";
 choices[29]= new Array();
 choices[29][0] = "Que son lo mismo en terminolog&iacute;a americana e inglesa";
 choices[29][1] = "Que wander se refiere a oscilaciones de frecuencia a baja frecuencia y jitter a oscilaciones de frecuencia en alta frecuencia";
 choices[29][2] = "Que wander se refiere a oscilaciones de frecuencia a alta frecuencia y jitter a oscilaciones de frecuencia en baja frecuencia";
 choices[29][3] = "No existen los t&eacute;rminos wander ni jitter en telecomunicaciones";
 answers[29] = choices[29][1];
 units[29] = "99";
 comments[29] = "Id Pregunta: 3360. *: frecuencias";


//  Id pregunta: 3530 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  En la Red Digital de Servicios Integrados, indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[30]= new Array();
 choices[30][0] = "Existen definidos 2 tipos de acceso: b&aacute;sico y primario";
 choices[30][1] = "El acceso primario est&aacute; constituido por 30 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[30][2] = "Es posible la conexi&oacute;n a la RDSI a trav&eacute;s de un modem m&aacute;s un adaptador anal&oacute;gico-digital";
 choices[30][3] = "Proporciona conexiones digitales extremo a extremo";
 answers[30] = choices[30][1];
 units[30] = "103";
 comments[30] = "Id Pregunta: 3530. ";


//  Id pregunta: 3623 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  La normas de la serie 802 del IEEE est&aacute;n establecidas por diversos grupos de trabajo a los que que est&aacute;n asignadas diferentes tareas. &iquest;A cu&aacute;l corresponde la 802.6?:";
 choices[31]= new Array();
 choices[31][0] = "Control l&oacute;gico del enlace";
 choices[31][1] = "Normativa de conectividad entre equipos a nivel f&iacute;sico";
 choices[31][2] = "M&eacute;todo de paso de testigo en bus";
 choices[31][3] = "Redes de &aacute;rea metropolitana";
 answers[31] = choices[31][3];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3623. ";


//  Id pregunta: 3654 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Un acceso RDSI primario consta de:";
 choices[32]= new Array();
 choices[32][0] = "2 canales B y un canal D";
 choices[32][1] = "2 canales B y ning&uacute;n canal D";
 choices[32][2] = "30 canales B y 1 canal D";
 choices[32][3] = "30 canales B y 2 canales D";
 answers[32] = choices[32][2];
 units[32] = "103";
 comments[32] = "Id Pregunta: 3654. ";


//  Id pregunta: 3837 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  SOAP:";
 choices[33]= new Array();
 choices[33][0] = "Es una especificaci&oacute;n para el intercambio de informaci&oacute;n estructurada en entornos descentralizados-distribuidos";
 choices[33][1] = "Fue propuesta originalmente por Microsoft";
 choices[33][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[33][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[33] = choices[33][3];
 units[33] = "113";
 comments[33] = "Id Pregunta: 3837. ";


//  Id pregunta: 3989 Año de creación de pregunta: 2006-01-01
 questions[34]= "35)  La t&eacute;cnica NAT no permite:";
 choices[34]= new Array();
 choices[34][0] = "Implementar una pasarela FTP.";
 choices[34][1] = "Optimizar el uso de direccionamiento IP p&uacute;blico.";
 choices[34][2] = "Aislar el espacio de direccionamiento p&uacute;blico del privado.";
 choices[34][3] = "Asignar direcciones din&aacute;micas para acceso a Internet.";
 answers[34] = choices[34][0];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3989. ";


//  Id pregunta: 3992 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  Se&ntilde;ale la respuesta correcta:";
 choices[35]= new Array();
 choices[35][0] = "IDABC tiene como objetivo la identificaci&oacute;n, promoci&oacute;n y desarrollo de servicios paneuropeos de e-administraci&oacute;n para los ciudadanos, las empresas y las administraciones, as&iacute; como de las infraestructuras y servicios necesarios para el despliegue.";
 choices[35][1] = "El comit&eacute; de gesti&oacute;n del programa se denomina Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE). ";
 choices[35][2] = "Sus antecesores son los programas IDA II (1999-2004) e IDA I (1995-1998)";
 choices[35][3] = "Todas son verdaderas";
 answers[35] = choices[35][3];
 units[35] = "103";
 comments[35] = "Id Pregunta: 3992. ";


//  Id pregunta: 3993 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  En el protocolo SNMPv2, un mensaje PDU GetRequest:";
 choices[36]= new Array();
 choices[36][0] = "Permite respuestas parciales al solicitar el valor de varios objetos.";
 choices[36][1] = "No permite respuestas parciales al solicitar el valor de varios objetos";
 choices[36][2] = "Es emitida por el agente al gestor.";
 choices[36][3] = "Es id&eacute;ntico al mensaje PDU GetBulkRequest.";
 answers[36] = choices[36][0];
 units[36] = "104";
 comments[36] = "Id Pregunta: 3993. ";


//  Id pregunta: 4023 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes no es un elemento de la arquitectura GSM?";
 choices[37]= new Array();
 choices[37][0] = "HLR";
 choices[37][1] = "MSC";
 choices[37][2] = "SGSN";
 choices[37][3] = "BTS";
 answers[37] = choices[37][2];
 units[37] = "108";
 comments[37] = "Id Pregunta: 4023. ";


//  Id pregunta: 4087 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  Cual es el equivalente en .Net de los JSP de J2EE";
 choices[38]= new Array();
 choices[38][0] = "ASP.Net";
 choices[38][1] = "ASP.com";
 choices[38][2] = "ASP.org";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][0];
 units[38] = "115";
 comments[38] = "Id Pregunta: 4087. ";


//  Id pregunta: 4109 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Webmail es:";
 choices[39]= new Array();
 choices[39][0] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un programa de correo electr&oacute;nico especializado que accede a trav&eacute;s del protocolo POP3.";
 choices[39][1] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un Navegador.";
 choices[39][2] = "a) y b) son ciertas";
 choices[39][3] = "a) y b) son falsas";
 answers[39] = choices[39][1];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4109. ";


//  Id pregunta: 4165 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  Cuando las tareas de operaci&oacute;n y programaci&oacute;n no est&aacute;n segregadas, el responsable de seguridad debe de proveer controles";
 choices[40]= new Array();
 choices[40][0] = "compensatorios";
 choices[40][1] = "administrativos";
 choices[40][2] = "correctivos";
 choices[40][3] = "de acceso";
 answers[40] = choices[40][0];
 units[40] = "111";
 comments[40] = "Id Pregunta: 4165. ";


//  Id pregunta: 4252 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Respecto al avance de la Sociedad de la Informaci&oacute;n en Espa&ntilde;a:";
 choices[41]= new Array();
 choices[41][0] = "El Plan Avanza contempla como l&iacute;neas de acci&oacute;n el avance en la e-inclusi&oacute;n y en el desarrollo de servicios p&uacute;blicos digitales, pero no entra en materias como el fomento de la competitividad y la innovaci&oacute;n en Espa&ntilde;a.";
 choices[41][1] = "El Plan Avanza constituye uno de los ejes del programa Ingenio 2010.";
 choices[41][2] = "El Plan Avanza del Ministerio de Industria busca la convergencia con Europea en materia de Sociedad de la Informaci&oacute;n, pero desmarc&aacute;ndose notablemente de los objetivos que se plantearon en la Estrategia de Lisboa.";
 choices[41][3] = "El Plan Avanza, lanzado por el Ministerio de Administraciones P&uacute;blicas, reduce su &aacute;mbito de aplicaci&oacute;n a la Administraci&oacute;n General del Estado.";
 answers[41] = choices[41][1];
 units[41] = "30";
 comments[41] = "Id Pregunta: 4252. ";


//  Id pregunta: 4262 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  El protocolo RAS de la pila de protocolos H323 de la ITU:";
 choices[42]= new Array();
 choices[42][0] = "Son las siglas de Registration, Admission and Signalling";
 choices[42][1] = "Funciona sobre el protocolo de transporte TCP";
 choices[42][2] = "Es un protocolo de se&ntilde;alizacion entre los elementos de red y el Gateway";
 choices[42][3] = "El canal de se&ntilde;alizaci&oacute;n RAS se abre antes de que se establezca cualquier otro canal entre puntos extremos H.323";
 answers[42] = choices[42][3];
 units[42] = "109";
 comments[42] = "Id Pregunta: 4262. ";


//  Id pregunta: 4279 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;C&oacute;mo se definir&iacute;a en el sistema de gesti&oacute;n de base de datos Oracle la restricci&oacute;n de integridad: &ldquo;Los trienios de un empleado no pueden disminuir&rdquo;?";
 choices[43]= new Array();
 choices[43][0] = "Mediante la sentencia &lsquo;ALTER TABLE&rsquo;.";
 choices[43][1] = "Mediante un trigger.";
 choices[43][2] = "Mediante una constraint de tipo CHECK.";
 choices[43][3] = "No se pueden definir restricciones de ese tipo.";
 answers[43] = choices[43][1];
 units[43] = "58";
 comments[43] = "Id Pregunta: 4279. ";


//  Id pregunta: 4300 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Qu&eacute; afirmaci&oacute;n es correcta acerca de las diferentes notaciones que se pueden emplear para la especificaci&oacute;n de requisitos del software?:";
 choices[44]= new Array();
 choices[44][0] = "El pseudoc&oacute;digo es una notaci&oacute;n especialmente indicada para describir los requisitos funcionales.";
 choices[44][1] = "El diccionario de datos es la manera m&aacute;s adecuada de describir las transformaciones ocurridas en los datos.";
 choices[44][2] = "El diagrama de flujo de datos se emplea para realizar la especificaci&oacute;n del comportamiento del sistema.";
 choices[44][3] = "El modelo E-R es una notaci&oacute;n gr&aacute;fica en la que se representan los flujos de datos y sus estados.";
 answers[44] = choices[44][2];
 units[44] = "78";
 comments[44] = "Id Pregunta: 4300. ";


//  Id pregunta: 4318 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  El sistema de gesti&oacute;n de riesgos MAGERIT establece que los subestados de seguridad de un activo son";
 choices[45]= new Array();
 choices[45][0] = "Autenticaci&oacute;n, confidencialidad, inclusi&oacute;n y disponibilidad.";
 choices[45][1] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[45][2] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 choices[45][3] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 answers[45] = choices[45][1];
 units[45] = "33";
 comments[45] = "Id Pregunta: 4318. ";


//  Id pregunta: 4329 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  Un centro alternativo de tratamiento de la informaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Debe ser identificable desde el exterior, para que sea f&aacute;cilmente localizado en caso de emergencia.";
 choices[46][1] = "Debe tener las mismas restricciones de acceso f&iacute;sico que la instalaci&oacute;n principal.";
 choices[46][2] = "Debe estar ubicado en las proximidades de la instalaci&oacute;n principal, as&iacute; se puede poner en operaci&oacute;n inmediatamente.";
 choices[46][3] = "No necesita disponer del mismo nivel de supervisi&oacute;n ni controles ambientales que la instalaci&oacute;n principal, porque los costes ser&iacute;an prohibitivos.";
 answers[46] = choices[46][1];
 units[46] = "33";
 comments[46] = "Id Pregunta: 4329. ";


//  Id pregunta: 4383 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Cu&aacute;les de las siguientes pruebas no responde al tipo de prueba de caja negra?";
 choices[47]= new Array();
 choices[47][0] = "Particiones de equivalencia.";
 choices[47][1] = "Pruebas de comparaci&oacute;n.";
 choices[47][2] = "Prueba del camino b&aacute;sico.";
 choices[47][3] = "Pruebas de datos imposibles.";
 answers[47] = choices[47][2];
 units[47] = "87";
 comments[47] = "Id Pregunta: 4383. ";


//  Id pregunta: 4414 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  El elemento dentro de un Sistema de Recuperaci&oacute;n de la Informaci&oacute;n que facilita eliminar informaci&oacute;n irrelevante desde el punto de vista del ordenamiento y la b&uacute;squeda y que se realiza durante la fase de ingreso del documento en el sistema, se denomina:";
 choices[48]= new Array();
 choices[48][0] = "Taxonom&iacute;a.";
 choices[48][1] = "Tesauro.";
 choices[48][2] = "Descriptor o Signatura";
 choices[48][3] = "Lista de palabras vac&iacute;as.";
 answers[48] = choices[48][3];
 units[48] = "96";
 comments[48] = "Id Pregunta: 4414. ";


//  Id pregunta: 4421 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;A qu&eacute; nivel del modelo OSI se realiza el encapsulamiento Frame Relay y HDLC?";
 choices[49]= new Array();
 choices[49][0] = "Red.";
 choices[49][1] = "Sesi&oacute;n.";
 choices[49][2] = "Enlace de datos.";
 choices[49][3] = "Transporte.";
 answers[49] = choices[49][2];
 units[49] = "100";
 comments[49] = "Id Pregunta: 4421. ";


//  Id pregunta: 4452 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cual es el miembro espa&ntilde;ol de ISO?";
 choices[50]= new Array();
 choices[50][0] = "IRANOR";
 choices[50][1] = "AENOR";
 choices[50][2] = "UNE";
 choices[50][3] = "CSl";
 answers[50] = choices[50][1];
 units[50] = "42";
 comments[50] = "Id Pregunta: 4452. ";


//  Id pregunta: 4548 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  La reserva para uso privativo de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico a favor de una o varias personas o entidades:";
 choices[51]= new Array();
 choices[51][0] = "No requiere ning&uacute;n tipo de pago al Estado. &Uacute;nicamente es necesaria su notificaci&oacute;n a la Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[51][1] = "Se gravar&aacute; con una tasa anual por reserva del dominio publico radioel&eacute;ctrico.";
 choices[51][2] = "Requiere el pago de una tasa &uacute;nica al inicio de la utilizaci&oacute;n de dichas frecuencias que se negociar&aacute; entre el Estado y el beneficiario de la reserva.";
 choices[51][3] = "Requiere el pago de una tasa a negociar entre el beneficiario de Ia reserva y las personas o entidades que ocupan las bandas de frecuencias adyacentes a la reservada.";
 answers[51] = choices[51][1];
 units[51] = "110";
 comments[51] = "Id Pregunta: 4548. ";


//  Id pregunta: 4785 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  El modelo espiral WinWin define los siguientes hitos en el proceso:";
 choices[52]= new Array();
 choices[52][0] = "Objetivos del ciclo de vida, arquitectura del ciclo de vida y capacidad operativa iniclal.";
 choices[52][1] = "Alcance del sistema y tama&ntilde;o del sistema.";
 choices[52][2] = "Verificaci&oacute;n de requisitos, verificaci&oacute;n de funcionalidades y verificaci&oacute;n de codigo";
 choices[52][3] = "El modelo espiral WinWin no define hitos en el proceso";
 answers[52] = choices[52][3];
 units[52] = "76";
 comments[52] = "Id Pregunta: 4785. ";


//  Id pregunta: 4848 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  Un sistema de ficheros tipo Unix tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, unaindirecta simple, una indirecta doble y una indirecta triple. Adem&aacute;s utiliza direcciones de bloque de 4 bytes. Pararepresentar un fichero de 2 MB:";
 choices[53]= new Array();
 choices[53][0] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[53][1] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[53][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[53][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[53] = choices[53][0];
 units[53] = "52";
 comments[53] = "Id Pregunta: 4848. ";


//  Id pregunta: 4851 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  El modelo ITIL (Information Technology Infrastructure Library) se utiliza para identificar y administrar los servicios detecnolog&iacute;as de la informaci&oacute;n que presta una organizaci&oacute;n. &iquest;Cu&aacute;l de los siguientes NO forma parte del conjunto deprocesos identificados por ITIL?";
 choices[54]= new Array();
 choices[54][0] = "Soporte de servicios";
 choices[54][1] = "Gesti&oacute;n de la seguridad";
 choices[54][2] = "Administraci&oacute;n de aplicaciones";
 choices[54][3] = "Desarrollo de aplicaciones";
 answers[54] = choices[54][3];
 units[54] = "98";
 comments[54] = "Id Pregunta: 4851. ";


//  Id pregunta: 5101 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Se regir&aacute;n por su normativa espec&iacute;fica, seg&uacute;n la ley 34/2002, las siguientes actividades y servicios de la sociedad de la informaci&oacute;n, excepto:";
 choices[55]= new Array();
 choices[55][0] = "Notarios";
 choices[55][1] = "Registradores";
 choices[55][2] = "Agentes de bolsa";
 choices[55][3] = "Procuradores";
 answers[55] = choices[55][2];
 units[55] = "30";
 comments[55] = "Id Pregunta: 5101. ";


//  Id pregunta: 5130 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l es la longitud equivalente a una clave RSA de 1024 bits si utiliz&aacute;ramos un algoritmo de clave sim&eacute;trica?";
 choices[56]= new Array();
 choices[56][0] = "132";
 choices[56][1] = "80";
 choices[56][2] = "64";
 choices[56][3] = "512";
 answers[56] = choices[56][1];
 units[56] = "111";
 comments[56] = "Id Pregunta: 5130. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5137 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Qu&eacute; es un diagrama de Gantt?";
 choices[57]= new Array();
 choices[57][0] = "Es un diagrama de barras en forma de tabla donde se hace una referencia cruzada entre las tareas y los tiempos de duraci&oacute;n de las mismas.";
 choices[57][1] = "Es un cuadro o tabla formado por dos columnas, en la primera se se&ntilde;alan las actividades y en la segunda se indican las fechas de finalizaci&oacute;n.";
 choices[57][2] = "Partiendo de la descomposici&oacute;n de un proyecto en actividades, estas ocurren entre dos sucesos. Se representa mediante un grafo en donde las actividades se reflejan mediante arcos y los sucesos mediante v&eacute;rtices.";
 choices[57][3] = "Es una matriz de referencias cruzadas entre los miembros del equipo de proyecto y su dedicaci&oacute;n al proyecto.";
 answers[57] = choices[57][0];
 units[57] = "77";
 comments[57] = "Id Pregunta: 5137. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5141 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l es el objetivo de la Gesti&oacute;n de Configuraci&oacute;n del Software?";
 choices[58]= new Array();
 choices[58][0] = "Gestionar de forma autom&aacute;tica la creaci&oacute;n, modificaci&oacute;n y borrado de usuarios en un sistema de informaci&oacute;n.";
 choices[58][1] = "Mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realizan cambios incontrolados.";
 choices[58][2] = "Permitir que los programadores de un sistema de informaci&oacute;n conozcan en todo momento los cambios de la configuraci&oacute;n f&iacute;sica que se vaya produciendo a nivel de sistema operativo.";
 choices[58][3] = "Permitir gestionar los recursos que se deidcan a cada tarea de desarrollo de los distintos m&oacute;dulos del sistema.";
 answers[58] = choices[58][1];
 units[58] = "79";
 comments[58] = "Id Pregunta: 5141. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5218 Año de creación de pregunta: 2007-01-01
 questions[59]= "60)  En qu&eacute; proceso no se utiliza la t&eacute;cnica de Diagrama de Clases";
 choices[59]= new Array();
 choices[59][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[59][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[59][2] = "Estudio de Viabilidad del Sistema";
 choices[59][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 answers[59] = choices[59][3];
 units[59] = "86";
 comments[59] = "Id Pregunta: 5218. ";


//  Id pregunta: 5452 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  El entorno de escritorio GNOME";
 choices[60]= new Array();
 choices[60][0] = "es uno de los entornos m&aacute;s avanzados y completos para Linux";
 choices[60][1] = "usa poco recursos del sistema porque no usa mucho espacio de disco o memoria";
 choices[60][2] = "es el escritorio por defecto de algunas distribuciones como Red Hat y Debian";
 choices[60][3] = "es el GUI elegido por los sistemas UNIX comerciales";
 answers[60] = choices[60][2];
 units[60] = "54";
 comments[60] = "Id Pregunta: 5452. Castilla y Le&oacute;n";


//  Id pregunta: 5525 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Las siglas OCR responden a";
 choices[61]= new Array();
 choices[61][0] = "Optical Character Recognition";
 choices[61][1] = "Optical Computer Redefinition";
 choices[61][2] = "Optimal Character Recognition";
 choices[61][3] = "Online Character Recognition";
 answers[61] = choices[61][0];
 units[61] = "94";
 comments[61] = "Id Pregunta: 5525. ";


//  Id pregunta: 5639 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es err&oacute;nea:";
 choices[62]= new Array();
 choices[62][0] = "Un microcomputador dispone de una CPU basada en un &uacute;nico microprocesador (chip)";
 choices[62][1] = "Un computador &oacute;ptico se basa en las propiedades de la luz para el tratamiento de la informaci&oacute;n";
 choices[62][2] = "Un computador empotrado es un computador de prop&oacute;sito especial, dise&ntilde;ado para llevar a cabo una funci&oacute;n dedicada concreta";
 choices[62][3] = "Un nanocomputador se basa en tecnolog&iacute;a de silicio/semiconductores";
 answers[62] = choices[62][3];
 units[62] = "49";
 comments[62] = "Id Pregunta: 5639. ";


//  Id pregunta: 5755 Año de creación de pregunta: 2009-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de estos diagramas no es un diagrama de UML 2.0?";
 choices[63]= new Array();
 choices[63][0] = "Diagrama global de interacci&oacute;n";
 choices[63][1] = "Diagrama de colaboraci&oacute;n";
 choices[63][2] = "Diagrama de estructura compuesta";
 choices[63][3] = "Diagrama de tiempos";
 answers[63] = choices[63][1];
 units[63] = "82";
 comments[63] = "Id Pregunta: 5755. ";


//  Id pregunta: 5776 Año de creación de pregunta: 2009-01-01
 questions[64]= "65)  &iquest;Qu&eacute; car&aacute;cter tendr&aacute;n los C&oacute;digos Tipo descritos en el art&iacute;culo 32 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?";
 choices[64]= new Array();
 choices[64][0] = "De legislaci&oacute;n de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[64][1] = "Sustitutivo de las regulaciones legales sobre protecci&oacute;n de datos para aquellos sectores que los adopten.";
 choices[64][2] = "Obligatorio para todas aquellas administraciones P&uacute;blicas que prevean la realizaci&oacute;n de transferencias internacionales de datos personales a terceros pa&iacute;ses que no garanticen un nivel adecuado de protecci&oacute;n.";
 choices[64][3] = "C&oacute;digos deontol&oacute;gicos o de buena pr&aacute;ctica profesional.";
 answers[64] = choices[64][3];
 units[64] = "29";
 comments[64] = "Id Pregunta: 5776. ";


//  Id pregunta: 5784 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  En el framework .NET, &iquest;qu&eacute; c&oacute;digo se genera como salida del compilador just in time?";
 choices[65]= new Array();
 choices[65][0] = "Bytecode";
 choices[65][1] = "IL (intemediate language)";
 choices[65][2] = "C&oacute;digo m&aacute;quina";
 choices[65][3] = "C&oacute;digo ensamblador";
 answers[65] = choices[65][2];
 units[65] = "59";
 comments[65] = "Id Pregunta: 5784. MAP 2008 A2";


//  Id pregunta: 5857 Año de creación de pregunta: 2009-01-01
 questions[66]= "67)  La Web 2.0 se refiere espec&iacute;ficamente a:";
 choices[66]= new Array();
 choices[66][0] = "Webs que generan informaci&oacute;n autom&aacute;ticamente a partir de bases de datos corporativas";
 choices[66][1] = "P&aacute;ginas implementadas con AJAX en las que s&oacute;lo existe un proveedor de contenidos";
 choices[66][2] = "Usar la inteligencia colectiva para proporcionar servicios interactivos en red dando al usuario el control de los datos";
 choices[66][3] = "Programas que procesan la avalancha de informaci&oacute;n existente en la Web";
 answers[66] = choices[66][2];
 units[66] = "69";
 comments[66] = "Id Pregunta: 5857. Pregunta 37";


//  Id pregunta: 5946 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  &iquest;qu&eacute; est&aacute;ndar define usuabilidad como &ldquo;La efectividad, eficiencia y satisfacci&oacute;n con la que un producto permite alcanzar objetivos espec&iacute;ficos a usuarios espec&iacute;ficos en un contexto de uso espec&iacute;fico&rdquo;?";
 choices[67]= new Array();
 choices[67][0] = "ISO/IEC 9241-5";
 choices[67][1] = "ISO/IEC 9241-11";
 choices[67][2] = "ISO/IEC 9243-5";
 choices[67][3] = "ISO/IEC 9243-11";
 answers[67] = choices[67][1];
 units[67] = "39";
 comments[67] = "Id Pregunta: 5946. ";


//  Id pregunta: 6093 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  M&eacute;trica 3 propone el uso de la t&eacute;cnica de an&aacute;lisis coste/beneficio en:";
 choices[68]= new Array();
 choices[68][0] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso ASI).";
 choices[68][1] = "Solamente en el proceso de Desarrollo (subprocesos EVS y ASI).";
 choices[68][2] = "Solamente en el proceso de Planificaci&oacute;n.";
 choices[68][3] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso EVS).";
 answers[68] = choices[68][3];
 units[68] = "86";
 comments[68] = "Id Pregunta: 6093. TIC A 2009";


//  Id pregunta: 6258 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de la lista siguiente responde a patrones creacionales de GoF (Gang of Four)?";
 choices[69]= new Array();
 choices[69][0] = "Facade, Composite, Bridge";
 choices[69][1] = "Strategy, Proxy, Iterator";
 choices[69][2] = "Builder, Abstract Factory, Prototype";
 choices[69][3] = "MVC, Session, Router";
 answers[69] = choices[69][2];
 units[69] = "60";
 comments[69] = "Id Pregunta: 6258. TICB-2009, bloque desarrollo";


//  Id pregunta: 6262 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  Dentro del marco de la auditor&iacute;a de sistemas de informaci&oacute;n, los &ldquo;controles&rdquo; en funci&oacute;n del momento en que act&uacute;an podr&iacute;an clasificarse en:";
 choices[70]= new Array();
 choices[70][0] = "Proactivos, reactivos, concurrentes y recurrentes.";
 choices[70][1] = "Recurrentes, instant&aacute;neos, previos y posteriores.";
 choices[70][2] = "Concomitantes, recurrentes, duraderos e instant&aacute;neos.";
 choices[70][3] = "Reactivos, proactivos y concurrentes o concomitantes.";
 answers[70] = choices[70][3];
 units[70] = "31";
 comments[70] = "Id Pregunta: 6262. ";


//  Id pregunta: 6358 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;A qui&eacute;n corresponde establecer las obligaciones espec&iacute;ficas para los mercados de referencia establecidas en el art&iacute;culo 13 de la Ley 9/2014?";
 choices[71]= new Array();
 choices[71][0] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[71][1] = "Al Gobierno";
 choices[71][2] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[71][3] = "Al Ministerio de Ciencia y Tecnolog&iacute;a";
 answers[71] = choices[71][2];
 units[71] = "110";
 comments[71] = "Id Pregunta: 6358. Art&iacute;culo 13.4 Ley 9/2014";


//  Id pregunta: 6408 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes no ser&aacute; considerada una infracci&oacute;n de los derechos de autor, de acuerdo a la Ley de Propiedad Intelectual?";
 choices[72]= new Array();
 choices[72][0] = "Poner en circulaci&oacute;n una o m&aacute;s copias de un programa de ordenador conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, sin autorizaci&oacute;n del titular de los derechos.";
 choices[72][1] = "Tener con fines comerciales una o m&aacute;s copias de un programa de ordenador, conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, , sin autorizaci&oacute;n del titular de los derechos.";
 choices[72][2] = "Poner en circulaci&oacute;n o tener con fines comerciales cualquier instrumento que tenga, entre otros usos, facilitar la supresi&oacute;n o neutralizaci&oacute;n no autorizadas de cualquier dispositivo t&eacute;cnico utilizado para proteger un programa de ordenador, sin autorizaci&oacute;n del titular de los derechos.";
 choices[72][3] = "Todas las anteriores son consideradas infracciones, seg&uacute;n la Ley de Propiedad Intelectual.";
 answers[72] = choices[72][2];
 units[72] = "36";
 comments[72] = "Id Pregunta: 6408. Art&iacute;culo 102 RDL 1/1996";


//  Id pregunta: 6459 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  El per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[73]= new Array();
 choices[73][0] = "Tres a&ntilde;os";
 choices[73][1] = "Diez a&ntilde;os";
 choices[73][2] = "Dos a&ntilde;os";
 choices[73][3] = "Cinco a&ntilde;os";
 answers[73] = choices[73][3];
 units[73] = "30";
 comments[73] = "Id Pregunta: 6459. Castilla La Mancha 2009";


//  Id pregunta: 6492 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Para los servicios de telefon&iacute;a m&oacute;vil, el modo de propagaci&oacute;n de la se&ntilde;al radioel&eacute;ctrica es:";
 choices[74]= new Array();
 choices[74][0] = "Onda de superficie";
 choices[74][1] = "Onda ionosf&eacute;rica";
 choices[74][2] = "Onda espacial";
 choices[74][3] = "Onda de dispersi&oacute;n troposf&eacute;rica";
 answers[74] = choices[74][2];
 units[74] = "108";
 comments[74] = "Id Pregunta: 6492. Castilla La Mancha 2009";


//  Id pregunta: 6552 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  Dentro de los Est&aacute;ndares de Criptograf&iacute;a de Clave P&uacute;blica (PKCS)";
 choices[75]= new Array();
 choices[75][0] = "PKCS#1: Corresponde al algoritmo RSA";
 choices[75][1] = "PKCS#3: Corresponde al algoritmo Diffie-Hellman";
 choices[75][2] = "PKCS#5: Cifrado con clave privada";
 choices[75][3] = "Todas las respuestas anteriores son correctas";
 answers[75] = choices[75][3];
 units[75] = "74";
 comments[75] = "Id Pregunta: 6552. ";


//  Id pregunta: 6579 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  El protocolo IP";
 choices[76]= new Array();
 choices[76][0] = "Define el datagrama";
 choices[76][1] = "Define el esquema de direccionamiento";
 choices[76][2] = "Mueve los datos entre la capa de red y de transporte";
 choices[76][3] = "Todas las respuestas anteriores son correctas";
 answers[76] = choices[76][3];
 units[76] = "100";
 comments[76] = "Id Pregunta: 6579. ";


//  Id pregunta: 6602 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  Las penalidades en un contrato ";
 choices[77]= new Array();
 choices[77][0] = "Si son por demora imputable al contratista no se tendr&aacute;n que especificar";
 choices[77][1] = "Siempre deben estar previstas en los pliegos o el doumento contractual";
 choices[77][2] = "Si son por demora imputable al contratista la imposici&oacute;n diaria ser&aacute; de 0,20&euro; por cada 100&euro; del contrato";
 choices[77][3] = "La a y la c";
 answers[77] = choices[77][0];
 units[77] = "41";
 comments[77] = "Id Pregunta: 6602. ";


//  Id pregunta: 7293 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  Indique cu&aacute;l de las siguientes es una t&eacute;cnica utilizada en conversi&oacute;n texto-voz (TTS)";
 choices[78]= new Array();
 choices[78][0] = "S&iacute;ntesis por octetos";
 choices[78][1] = "S&iacute;ntesis por corpus";
 choices[78][2] = "Concatenaci&oacute;n de octetos";
 choices[78][3] = "Concatenaci&oacute;n de corpus";
 answers[78] = choices[78][1];
 units[78] = "94";
 comments[78] = "Id Pregunta: 7293. ";


//  Id pregunta: 8003 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)   El CMM-CMMI es:";
 choices[79]= new Array();
 choices[79][0] = " Un conjunto de normas de seguridad f&iacute;sica (perimetral), antiintrusivas (firewall) y antiincendios de aplicaci&oacute;n en centros de proceso de datos.";
 choices[79][1] = " Un modelo de desarrollo de software jer&aacute;rquico orientado a objetos.";
 choices[79][2] = " Un modelo de calidad del software que clasifica en cinco los niveles de madurez.";
 choices[79][3] = " Un modelo est&aacute;ndar de seguridad ante ataques por Internet.";
 answers[79] = choices[79][2];
 units[79] = "NULL";
 comments[79] = "Id Pregunta: 8003. Map 2007";


//  Id pregunta: 8058 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)   En la estructura de la trama del protocolo HDLC (&laquo;High level Data Link Control&raquo;) el n&uacute;mero de bits del delimitador del comienzo de la trama es:";
 choices[80]= new Array();
 choices[80][0] = " Variable.";
 choices[80][1] = " 8.";
 choices[80][2] = " 16.";
 choices[80][3] = " 32.";
 answers[80] = choices[80][1];
 units[80] = "NULL";
 comments[80] = "Id Pregunta: 8058. Map 2007";


//  Id pregunta: 8173 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  En los sistemas MIMD:";
 choices[81]= new Array();
 choices[81][0] = "Todos los datos est&aacute;n accesibles para todos los procesadores.";
 choices[81][1] = "No todas las instrucciones est&aacute;n disponibles para todos los procesadores.";
 choices[81][2] = "Emplean varios buses de altas prestaciones para transmitir instrucciones y datos simult&aacute;neamente.";
 choices[81][3] = "Pueden trabajar con memoria compartida o con memoria distribuida.";
 answers[81] = choices[81][3];
 units[81] = "45";
 comments[81] = "Id Pregunta: 8173. Examen TIC A1 2010";


//  Id pregunta: 8210 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre las redes SAN iSCSI:";
 choices[82]= new Array();
 choices[82][0] = "Intercambian tramas SCSI sobre FC.";
 choices[82][1] = "Es una red de almacenamiento de acceso a ficheros.";
 choices[82][2] = "No permite implementar iSCSI en software.";
 choices[82][3] = "Puede usar TCP/IP como transporte.";
 answers[82] = choices[82][3];
 units[82] = "48";
 comments[82] = "Id Pregunta: 8210. Examen TIC A1 2010";


//  Id pregunta: 8378 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  La longitud de onda alrededor de la cual un medio de transmisi&oacute;n basado en fibra &oacute;ptica se dice que est&aacute; trabajando en 3&ordf; ventana es: ";
 choices[83]= new Array();
 choices[83][0] = "750 nm.";
 choices[83][1] = "820 nm.";
 choices[83][2] = "1310 nm.";
 choices[83][3] = "1550 nm.";
 answers[83] = choices[83][3];
 units[83] = "99";
 comments[83] = "Id Pregunta: 8378. Examen TIC A2 2010";


//  Id pregunta: 8468 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  GPRS es un servicio que soporta la transmisi&oacute;n de paquetes via radio:";
 choices[84]= new Array();
 choices[84][0] = "Utilizando el protocolo HSDPA y el mismo BSS de GSM";
 choices[84][1] = "Utilizando el protocolo IP y el mismo BSS de GSM";
 choices[84][2] = "Utilizando el protocolo IP y transmisi&oacute;n WCDMA de banda ancha";
 choices[84][3] = "Ninguna de las anteriores";
 answers[84] = choices[84][1];
 units[84] = "108";
 comments[84] = "Id Pregunta: 8468. Analista Ayto. Madrid 2010";


//  Id pregunta: 8472 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  El PID 0 se asigna en Unix/Linux a:";
 choices[85]= new Array();
 choices[85][0] = "Swapper";
 choices[85][1] = "Init";
 choices[85][2] = "Page daemon";
 choices[85][3] = "Load";
 answers[85] = choices[85][0];
 units[85] = "53,54";
 comments[85] = "Id Pregunta: 8472. Analista Ayto. Madrid 2010";


//  Id pregunta: 8525 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Los routers para filtrado de paquetes (&quot;packet filtering&quot;):";
 choices[86]= new Array();
 choices[86][0] = "Son cortafuegos (firewalls) que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateful inspection&quot;.";
 choices[86][1] = "Son firewalls que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateless inspection&quot;.";
 choices[86][2] = "No son firewalls, sino dispositivos de encaminamiento (&quot;routing&quot;) que se pueden conectar a un cortafuegos como complemento de &eacute;ste";
 choices[86][3] = "Son firewalls que operan en el nivel de red.";
 answers[86] = choices[86][3];
 units[86] = "111";
 comments[86] = "Id Pregunta: 8525. Examen TIC A2 2010 interna";


//  Id pregunta: 8540 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes algoritmos de cifrado NO se implementa en WiMax?";
 choices[87]= new Array();
 choices[87][0] = "3DES";
 choices[87][1] = "SEAL";
 choices[87][2] = "AES";
 choices[87][3] = "RSA";
 answers[87] = choices[87][1];
 units[87] = "107";
 comments[87] = "Id Pregunta: 8540. Examen TIC A2 2010 interna";


//  Id pregunta: 8592 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  En J2EE &iquest;qu&eacute; es un fichero WAR?";
 choices[88]= new Array();
 choices[88][0] = "Contiene los recursos y librer&iacute;as necesarias para compilar un proyecto";
 choices[88][1] = "Contiene la aplicaci&oacute;n web lista para ser desplegada en cualquier contenedor de servlets/jsp.";
 choices[88][2] = "Contiene los m&oacute;dulos EJB de las aplicaciones";
 choices[88][3] = "No existen los ficheros WAR en J2EE";
 answers[88] = choices[88][1];
 units[88] = "116";
 comments[88] = "Id Pregunta: 8592. Examen TIC A2 2010 interna";


//  Id pregunta: 8666 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[89]= new Array();
 choices[89][0] = "802.6";
 choices[89][1] = "802.7";
 choices[89][2] = "802.8";
 choices[89][3] = "802.9";
 answers[89] = choices[89][2];
 units[89] = "101";
 comments[89] = "Id Pregunta: 8666. Examen UPM A2 2011";


//  Id pregunta: 8880 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[90]= new Array();
 choices[90][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[90][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[90][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[90][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[90] = choices[90][1];
 units[90] = "57, 58";
 comments[90] = "Id Pregunta: 8880. Examen UPM A2 2011";


//  Id pregunta: 8973 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  &iquest;Qu&eacute; nuevo elemento se encuentra en ITIL v3 que no estaba en ITIL v2?";
 choices[91]= new Array();
 choices[91][0] = "Gesti&oacute;n Financiera";
 choices[91][1] = "Gesti&oacute;n de Cambios";
 choices[91][2] = "Gesti&oacute;n de incidencias";
 choices[91][3] = "Gesti&oacute;n de seguridad";
 answers[91] = choices[91][3];
 units[91] = "98";
 comments[91] = "Id Pregunta: 8973. ";


//  Id pregunta: 9005 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  NO es una infracci&oacute;n leve seg&uacute;n la LOPD:";
 choices[92]= new Array();
 choices[92][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de esta Ley, salvo que constituya infracci&oacute;n grave.";
 choices[92][1] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos.";
 choices[92][2] = "La transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de esta Ley.";
 choices[92][3] = "No remitir a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo.";
 answers[92] = choices[92][0];
 units[92] = "29";
 comments[92] = "Id Pregunta: 9005. ";


//  Id pregunta: 9397 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  MOS (&quot;Mean Opinion Score&quot;) es un &iacute;ndice subjetivo que sirve para medir la calidad de la voz. Su rango de valores est&aacute; entre 1 y 5. Si toma el valor 4, significa:";
 choices[93]= new Array();
 choices[93][0] = "La calidad es equiparable a una conversi&oacute;n cara a cara o escuchar la radio. ";
 choices[93][1] = "Apenas se entiende nada.";
 choices[93][2] = "Se perciben imperfecciones pero el sonido es claro";
 choices[93][3] = "Se requiere un esfuerzo considerable para seguir la comunicaci&oacute;n.";
 answers[93] = choices[93][2];
 units[93] = "109";
 comments[93] = "Id Pregunta: 9397. TIC AGE A2 2011 libre";


//  Id pregunta: 9425 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  Si tuviese que fijar los l&iacute;mites de exposici&oacute;n en un nivel adecuado para la salud a la hora de instalar una antena, &iquest;Qu&eacute; normativa ser&iacute;a la de referencia?";
 choices[94]= new Array();
 choices[94][0] = "Real Decreto 1066/2001";
 choices[94][1] = "Ley 9/2014 General de Telecomunicaciones";
 choices[94][2] = "Ley 56/2007,de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[94][3] = "Real Decreto 899/2009";
 answers[94] = choices[94][0];
 units[94] = "110";
 comments[94] = "Id Pregunta: 9425. ";


//  Id pregunta: 9444 Año de creación de pregunta: 2013-01-01
 questions[95]= "96)  En relaci&oacute;n al proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n (ASI) de M&eacute;trica v.3, un producto de la actividad Establecimiento de Requisitos es:";
 choices[95]= new Array();
 choices[95][0] = "Modelo conceptual de datos.";
 choices[95][1] = "Modelo de casos de uso.";
 choices[95][2] = "Cat&aacute;logo de usuarios.";
 choices[95][3] = "Cat&aacute;logo de excepciones.";
 answers[95] = choices[95][1];
 units[95] = "86";
 comments[95] = "Id Pregunta: 9444. Examen AGE TIC A1 2011";


//  Id pregunta: 9931 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En el modelo OSI, el nivel clave para el sistema de seguridad es:";
 choices[96]= new Array();
 choices[96][0] = "N3.";
 choices[96][1] = "N4.";
 choices[96][2] = "N6.";
 choices[96][3] = "N7.";
 answers[96] = choices[96][2];
 units[96] = "100";
 comments[96] = "Id Pregunta: 9931. ";


//  Id pregunta: 10232 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Cual de las siguientes clases o interfaces es usado para recuperar informaci&oacute;n de la sesi&oacute;n asociada con el usuario?:";
 choices[97]= new Array();
 choices[97][0] = "GenericServlet";
 choices[97][1] = "ServletConfig";
 choices[97][2] = "ServletContext";
 choices[97][3] = "HttpServletRequest";
 answers[97] = choices[97][3];
 units[97] = "116";
 comments[97] = "Id Pregunta: 10232. ";


//  Id pregunta: 10244 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio regala a un amigo un CD con el ejecutable de Juan. &iquest;Cu&aacute;l de las siguientes opciones no satisface las obligaciones de Antonio de hacer disponible el c&oacute;digo fuente?";
 choices[98]= new Array();
 choices[98][0] = "Puede alojar el c&oacute;digo fuente en su web site e indicar la URL en el CD";
 choices[98][1] = "Puede proveer el c&oacute;digo fuente en el mismo CD que el ejecutable";
 choices[98][2] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente contra el pago de los costes de distribuci&oacute;n";
 choices[98][3] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente gratis en un CD";
 answers[98] = choices[98][0];
 units[98] = "61";
 comments[98] = "Id Pregunta: 10244. ";


//  Id pregunta: 10252 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  FooCorp modifica un software distribu&iacute;do bajo GPL, e incluye una tecnolog&iacute;a patentada por FooCorp. &iquest;Hay alg&uacute;n requisito en la licencia GPL sobre c&oacute;mo licenciar la patente aplicable?";
 choices[99]= new Array();
 choices[99][0] = "No";
 choices[99][1] = "S&iacute;, deben permitir a cualquiera que use la tecnolog&iacute;a patentada para cualquier prop&oacute;sito";
 choices[99][2] = "S&iacute;, deben permitir a cualquiera que utilice el c&oacute;digo GPL modificado para utilizar la tecnolog&iacute;a patentada.";
 choices[99][3] = "Si, deben hacer el c&oacute;digo accesible por todos";
 answers[99] = choices[99][2];
 units[99] = "61";
 comments[99] = "Id Pregunta: 10252. ";


