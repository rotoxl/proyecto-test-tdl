/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 75 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas utiliza &uacute;nicamente la componente subjetiva del decisor?:";
 choices[0]= new Array();
 choices[0][0] = "Concordancia";
 choices[0][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[0][2] = "Ponderaci&oacute;n lineal";
 choices[0][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[0] = choices[0][3];
 units[0] = "34";
 comments[0] = "Id Pregunta: 75. ";


//  Id pregunta: 204 Año de creación de pregunta: 2004-01-01
 questions[1]= "2)  La teor&iacute;a de la decisi&oacute;n multicriterio discreta";
 choices[1]= new Array();
 choices[1][0] = "tiene problemas con una incorrecta asignaci&oacute;n de pesos";
 choices[1][1] = "es usada en la elecci&oacute;n de contratos por parte de la administraci&oacute;n en ocasiones";
 choices[1][2] = "la normalizaci&oacute;n de las puntuaciones puede hacer perder la proporcionalidad";
 choices[1][3] = "todas las anteriores";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 204. ";


//  Id pregunta: 227 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En las alternativas de decisi&oacute;n respecto al equipamiento HW y SW: ";
 choices[2]= new Array();
 choices[2][0] = "En la licencia de red, la cesi&oacute;n de uso del producto se extiende a todos o parte de los usuarios conectados a una red de &aacute;rea local";
 choices[2][1] = "La licencia flotante se refiere a la determinaci&oacute;n de la facturaci&oacute;n en funci&oacute;n del n&uacute;mero de usuarios simult&aacute;neos autorizados al uso del producto";
 choices[2][2] = "Las opciones a) y b) son correctas";
 choices[2][3] = "Las opciones a) y b) no son correctas";
 answers[2] = choices[2][2];
 units[2] = "35";
 comments[2] = "Id Pregunta: 227. ";


//  Id pregunta: 253 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Entre las variables que habitualmente se usan para evaluar el comportamiento de un sistema inform&aacute;tico se encuentra el tama&ntilde;o del quantum definido como:";
 choices[3]= new Array();
 choices[3][0] = "La cantidad de tiempo de uso ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[3][1] = "El intervalo de tiempo durante el cu&aacute;l se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 choices[3][2] = "El porcentaje de tiempo que los distintos dispositivos del sistema se usan en tareas no directamente imputables a ninguno de los trabajos en curso";
 choices[3][3] = "El porcentaje de tiempo de uso de un componente del sistema inform&aacute;tico";
 answers[3] = choices[3][0];
 units[3] = "35";
 comments[3] = "Id Pregunta: 253. ";


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


//  Id pregunta: 502 Año de creación de pregunta: 2003-01-01
 questions[5]= "6)  En la decisi&oacute;n de alternativas para la adquisici&oacute;n de sistemas de tecnolog&iacute;as de la informaci&oacute;n no se usa ";
 choices[5]= new Array();
 choices[5][0] = "Las cadenas de Petri ";
 choices[5][1] = "Ponderaci&oacute;n lineal";
 choices[5][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[5][3] = "Gr&aacute;ficos R&aacute;dar";
 answers[5] = choices[5][0];
 units[5] = "34";
 comments[5] = "Id Pregunta: 502. Modificada por JCED Preparatic XVII";


//  Id pregunta: 537 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  El desarrollo de una Pol&iacute;tica de Seguridad de los Sistemas de Informaci&oacute;n es responsabilidad de:";
 choices[6]= new Array();
 choices[6][0] = "Departamento de Inform&aacute;tica";
 choices[6][1] = "Comit&eacute; de Seguridad";
 choices[6][2] = "Administrador de seguridad";
 choices[6][3] = "Alta Direcci&oacute;n";
 answers[6] = choices[6][3];
 units[6] = "26";
 comments[6] = "Id Pregunta: 537. ";


//  Id pregunta: 708 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  Cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con la identificaci&oacute;n y autentificaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Certificados";
 choices[7][1] = "Single Sign On";
 choices[7][2] = "Kerberos";
 choices[7][3] = "NetBios";
 answers[7] = choices[7][3];
 units[7] = "73";
 comments[7] = "Id Pregunta: 708. Similar a examen TIC SS A 2004";


//  Id pregunta: 915 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.500 de OSI?:";
 choices[8]= new Array();
 choices[8][0] = "Agente de usuario del directorio (DUA)";
 choices[8][1] = "Agentes del sistema de directorio (DSA)";
 choices[8][2] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[8][3] = "Sistema de almacenamiento del directorio (DMS)";
 answers[8] = choices[8][3];
 units[8] = "73";
 comments[8] = "Id Pregunta: 915. ";


//  Id pregunta: 938 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; relaci&oacute;n existe entre SGML y HTML?:";
 choices[9]= new Array();
 choices[9][0] = "HTML es un subconjunto de SGML";
 choices[9][1] = "SGML es un subconjunto de HTML";
 choices[9][2] = "SGML se inspir&oacute; en HTML";
 choices[9][3] = "No tienen relaci&oacute;n";
 answers[9] = choices[9][0];
 units[9] = "69";
 comments[9] = "Id Pregunta: 938. ";


//  Id pregunta: 1010 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  El creador de HTML fue:";
 choices[10]= new Array();
 choices[10][0] = "Tim Berners-Lee";
 choices[10][1] = "Ivar Jacobson";
 choices[10][2] = "Grady Booch";
 choices[10][3] = "Todas son falsas";
 answers[10] = choices[10][0];
 units[10] = "69";
 comments[10] = "Id Pregunta: 1010. ";


//  Id pregunta: 1210 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  La caracter&iacute;stica principal de la arquitectura 'pipeline' es:";
 choices[11]= new Array();
 choices[11][0] = "La existencia de varios procesadores especializados en tareas concretas que pueden realizarse en paralelo";
 choices[11][1] = "La divisi&oacute;n en fases de la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[11][2] = "La redundancia de algunos dispositivos";
 choices[11][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[11] = choices[11][1];
 units[11] = "46";
 comments[11] = "Id Pregunta: 1210. ";


//  Id pregunta: 1414 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Una de las siguientes caracter&iacute;sticas es falsa para los ordenadores RISC. Indicar cu&aacute;l:";
 choices[12]= new Array();
 choices[12][0] = "Consideran m&aacute;s importante la simplicidad en las instrucciones que en la longitud de los programas";
 choices[12][1] = "Las primitivas del ensamblador tienden a ser las mismas que las microinstrucciones";
 choices[12][2] = "Son adecuados para c&aacute;lculos mediante operaciones en coma flotante";
 choices[12][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[12] = choices[12][2];
 units[12] = "45";
 comments[12] = "Id Pregunta: 1414. ";


//  Id pregunta: 1627 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  Si un programa se distribuye con licencia GPL, la empresa que lo modifica puede:";
 choices[13]= new Array();
 choices[13][0] = "No puede venderlo";
 choices[13][1] = "Integrarlo en otro SW y venderlo como propietario ";
 choices[13][2] = "Venderlo a otra empresa como software libre";
 choices[13][3] = "Venderlo a otra empresa como software propietario";
 answers[13] = choices[13][2];
 units[13] = "61";
 comments[13] = "Id Pregunta: 1627. ";


//  Id pregunta: 1784 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  Indique aquel conjunto de programas que no guardan relaci&oacute;n en cuanto a su funcionalidad";
 choices[14]= new Array();
 choices[14][0] = "Gnumeric, kspread";
 choices[14][1] = "Firefox, Epiphany";
 choices[14][2] = "Thunderbird, Konqueror";
 choices[14][3] = "Dia, kivio";
 answers[14] = choices[14][2];
 units[14] = "61,62";
 comments[14] = "Id Pregunta: 1784. ";


//  Id pregunta: 2032 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  La prueba que recorre la secuencia t&iacute;pica de acciones del usuario es de:";
 choices[15]= new Array();
 choices[15][0] = "caja negra";
 choices[15][1] = "caja blanca";
 choices[15][2] = "caja roja";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][0];
 units[15] = "86,88";
 comments[15] = "Id Pregunta: 2032. Similar a examen TIC SS A 2003";


//  Id pregunta: 2220 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Qu&eacute; tipo de organizaci&oacute;n es tambi&eacute;n conocida por &quot;organizaci&oacute;n matricial&quot;?:";
 choices[16]= new Array();
 choices[16][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[16][1] = "Organizaci&oacute;n funcional";
 choices[16][2] = "Organizaci&oacute;n proyecto-staff";
 choices[16][3] = "Organizaci&oacute;n por aplicaciones";
 answers[16] = choices[16][0];
 units[16] = "26";
 comments[16] = "Id Pregunta: 2220. ";


//  Id pregunta: 2380 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indicar aquella que no es una tarea del departamento de calidad:";
 choices[17]= new Array();
 choices[17][0] = "Desarrollo de pol&iacute;ticas, procedimientos y normas";
 choices[17][1] = "Certificaci&oacute;n y prueba del software";
 choices[17][2] = "Planificar la estrategia de la organizaci&oacute;n";
 choices[17][3] = "Auditor&iacute;as, revisiones e inspecciones";
 answers[17] = choices[17][2];
 units[17] = "87,88";
 comments[17] = "Id Pregunta: 2380. ";


//  Id pregunta: 2453 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los criterios asociados al factor de calidad 'correcci&oacute;n':";
 choices[18]= new Array();
 choices[18][0] = "Modularidad, Independencia de los entornos";
 choices[18][1] = "Coherencia, concisi&oacute;n";
 choices[18][2] = "Trazabilidad, integridad, coherencia";
 choices[18][3] = "Precisi&oacute;n, tolerancia a errores, simplicidad";
 answers[18] = choices[18][2];
 units[18] = "88";
 comments[18] = "Id Pregunta: 2453. ";


//  Id pregunta: 2658 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  Una de las siguientes caracter&iacute;sticas no se corresponde con las del SW";
 choices[19]= new Array();
 choices[19][0] = "fabricaci&oacute;n &uacute;nica, no en serie";
 choices[19][1] = "F&aacute;cil de modificar pero dificil de validar";
 choices[19][2] = "Proceso de desarrollo f&aacute;cil de controlar";
 choices[19][3] = "Todas los correctas";
 answers[19] = choices[19][2];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2658. ";


//  Id pregunta: 2732 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a que cubra el desarrollo de planes de sistemas de informaci&oacute;n?";
 choices[20]= new Array();
 choices[20][0] = "M&eacute;trica";
 choices[20][1] = "Racines";
 choices[20][2] = "Method 1";
 choices[20][3] = "Eclipse";
 answers[20] = choices[20][3];
 units[20] = "77";
 comments[20] = "Id Pregunta: 2732. ";


//  Id pregunta: 2787 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  M&Eacute;TRICA v.3 considera que las pruebas de integraci&oacute;n se deben realizar en el proceso de:";
 choices[21]= new Array();
 choices[21][0] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 choices[21][1] = "M&eacute;trica v.3 no contempla este tipo de pruebas.";
 choices[21][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n y en el de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 choices[21][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[21] = choices[21][3];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2787. ";


//  Id pregunta: 2799 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  &iquest;Qu&eacute; tipos de mantenimiento se definen en M&eacute;trica v3 (considerados o no)?";
 choices[22]= new Array();
 choices[22][0] = "Correctivo, adaptativo, preventivo y perfectivo";
 choices[22][1] = "Correctivo, adaptativo, evolutivo y perfectivo";
 choices[22][2] = "Correctivo, Adaptativo y evolutivo";
 choices[22][3] = "Correctivo, adaptativo y perfectivo";
 answers[22] = choices[22][1];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2799. ";


//  Id pregunta: 2944 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  &iquest;Qu&eacute; no permite IP V6?";
 choices[23]= new Array();
 choices[23][0] = "Autenticaci&oacute;n";
 choices[23][1] = "Garantia de no repudio";
 choices[23][2] = "Cifrado";
 choices[23][3] = "Integridad";
 answers[23] = choices[23][1];
 units[23] = "100";
 comments[23] = "Id Pregunta: 2944. Similar a examen TIC SS A 2003";


//  Id pregunta: 2952 Año de creación de pregunta: 2004-01-01
 questions[24]= "25)  Los documentos que definen los est&aacute;ndares de facto de internet se denominan:";
 choices[24]= new Array();
 choices[24][0] = "RFC";
 choices[24][1] = "IETF";
 choices[24][2] = "IANA";
 choices[24][3] = "Se definen en la serie ITU-T X.(n&uacute;mero de est&aacute;ndar) ";
 answers[24] = choices[24][0];
 units[24] = "112";
 comments[24] = "Id Pregunta: 2952. Similar a examen TIC SS A 2003";


//  Id pregunta: 2970 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  &iquest;Cu&aacute;les de los siguientes mecanismo no sirve para garantizar la privacidad de las comunicaciones por correo electr&oacute;nico?";
 choices[25]= new Array();
 choices[25][0] = "GPG";
 choices[25][1] = "PGP";
 choices[25][2] = "S/MIME";
 choices[25][3] = "Todos los anteriores valen";
 answers[25] = choices[25][3];
 units[25] = "106";
 comments[25] = "Id Pregunta: 2970. ";


//  Id pregunta: 3030 Año de creación de pregunta: 2005-01-01
 questions[26]= "27)  Al instalar un cortafuegos (firewall) para la protecci&oacute;n de un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[26]= new Array();
 choices[26][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[26][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[26][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[26][3] = "Todas las anteriores";
 answers[26] = choices[26][3];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3030. Magerit V2";


//  Id pregunta: 3063 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  En las transmisiones de se&ntilde;ales el&eacute;ctricas a las perturbaciones producidas en sistemas no lineales y que consisten en la aparici&oacute;n en el receptor de nuevas componentes espectrales de segundo orden se las llama:";
 choices[27]= new Array();
 choices[27][0] = "Distorsi&oacute;n no lineal";
 choices[27][1] = "Distorsi&oacute;n lineal de segundo orden";
 choices[27][2] = "Intermodulaci&oacute;n";
 choices[27][3] = "Paradiafon&iacute;a";
 answers[27] = choices[27][2];
 units[27] = "99";
 comments[27] = "Id Pregunta: 3063. ";


//  Id pregunta: 3092 Año de creación de pregunta: 2005-01-01
 questions[28]= "29)  Un &ldquo;ataque&rdquo; del tipo denegaci&oacute;n de servicio (DoS = Denial of Service) a un servidor Web afecta a:";
 choices[28]= new Array();
 choices[28][0] = "Las respuestas &lsquo;c&rsquo; y &lsquo;d&rsquo; son correctas";
 choices[28][1] = "La dimensi&oacute;n de autenticaci&oacute;n de los usuarios";
 choices[28][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[28][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 answers[28] = choices[28][3];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3092. ";


//  Id pregunta: 3105 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  Respecto a los buscadores de internet:";
 choices[29]= new Array();
 choices[29][0] = "los basados en el modelo enciclopedia clasifican las p&aacute;ginas seg&uacute;n su contenido sint&aacute;ctico";
 choices[29][1] = "los basados en palabras clave construyen tablas o &iacute;ndices inversos a partir de las palabras clave de un texto";
 choices[29][2] = "los metabuscadores, al usar varios buscadores simult&aacute;neamente, son mejores que todos los buscadores que usan juntos";
 choices[29][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[29] = choices[29][1];
 units[29] = "112";
 comments[29] = "Id Pregunta: 3105. ";


//  Id pregunta: 3223 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes m&oacute;dulos no pertenece al  est&aacute;ndar de correo electr&oacute;nico X.400?:";
 choices[30]= new Array();
 choices[30][0] = "Agente de usuario";
 choices[30][1] = "Agente de transferencia de mensajes";
 choices[30][2] = "Agente de usuario remoto";
 choices[30][3] = "Agente de correo extendido";
 answers[30] = choices[30][3];
 units[30] = "106";
 comments[30] = "Id Pregunta: 3223. ";


//  Id pregunta: 3330 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Al est&aacute;ndar de facto para la programaci&oacute;n de aplicaciones que se comunican entre ellos usando un interfaz TCP/IP se le denomina:";
 choices[31]= new Array();
 choices[31][0] = "pipes";
 choices[31][1] = "sockets";
 choices[31][2] = "sem&aacute;foros";
 choices[31][3] = "ninguno de los anteriores";
 answers[31] = choices[31][1];
 units[31] = "113";
 comments[31] = "Id Pregunta: 3330. ";


//  Id pregunta: 3346 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  CTI es:";
 choices[32]= new Array();
 choices[32][0] = "Computer Telephony Integration, el uso conjunto de telefon&iacute;a y ordenadores en el funcionamiento de un centro de atenci&oacute;n de llamadas";
 choices[32][1] = "el conjunto formado por la intranet, los tel&eacute;fonos de los puestos de ofim&aacute;tica y los ordenadores de los usuarios";
 choices[32][2] = "las siglas del Comit&eacute; para las Telecomunicaciones y la Innovaci&oacute;n, organismo sin &aacute;nimo de lucro encargado de observar las tendencias tecnol&oacute;gicas en telecomunicaciones y su aplicaci&oacute;n a los proyectos de la Administraci&oacute;n del Estado";
 choices[32][3] = "nada de lo anterior";
 answers[32] = choices[32][0];
 units[32] = "108";
 comments[32] = "Id Pregunta: 3346. ";


//  Id pregunta: 3407 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Existen varios procedimientos de ataques en internet, como el &quot;hijacking&quot;. &iquest;En qu&eacute; consiste &eacute;ste?:";
 choices[33]= new Array();
 choices[33][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP origen";
 choices[33][1] = "Repudiaci&oacute;n de la auditor&iacute;a del mensaje";
 choices[33][2] = "Variaci&oacute;n del contenido del paquete transmitido";
 choices[33][3] = "Escucha de una comunicaci&oacute;n y grabaci&oacute;n de su contenido";
 answers[33] = choices[33][2];
 units[33] = "111";
 comments[33] = "Id Pregunta: 3407. ";


//  Id pregunta: 3483 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  El tr&aacute;fico vocal GSM suele calcularse para estimaciones de potencias y coberturas de se&ntilde;al en base a una f&oacute;rmula. &iquest;Cu&aacute;l es?:";
 choices[34]= new Array();
 choices[34][0] = "La f&oacute;rmula de Poisson";
 choices[34][1] = "La f&oacute;rmula de Okumura-Hata";
 choices[34][2] = "La f&oacute;rmula Erlang B";
 choices[34][3] = "La f&oacute;rmula Erlang C";
 answers[34] = choices[34][2];
 units[34] = "108";
 comments[34] = "Id Pregunta: 3483. ";


//  Id pregunta: 3515 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  En el servicio de radiomensajer&iacute;a se distinguen tres modalidades.&iquest;Cu&aacute;l de las siguientes no corresponde a &eacute;stas?:";
 choices[35]= new Array();
 choices[35][0] = "Modalidad de aviso";
 choices[35][1] = "Modalidad telef&oacute;nica";
 choices[35][2] = "Modalidad num&eacute;rica";
 choices[35][3] = "Modalidad alfanum&eacute;rica";
 answers[35] = choices[35][1];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3515. ";


//  Id pregunta: 3606 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  La f&oacute;rmula de Shannon para la capacidad de un canal es (B es el ancho de banda, S la potencia de la se&ntilde;al y N la potencia del ruido):";
 choices[36]= new Array();
 choices[36][0] = "R[bps] = B[Hz] &middot; log2(1 + S/N)";
 choices[36][1] = "R[bps] = B[Hz] &middot; ln(1 + S/N)";
 choices[36][2] = "R[bps] = B[Hz] &middot; log10(1 + S/N)";
 choices[36][3] = "R[bps] = B[kHz] &middot; log2(S/N)";
 answers[36] = choices[36][0];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3606. *: teorema de shannon";


//  Id pregunta: 3706 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Las t&eacute;cnica de acceso utilizada por el segmento de radio terrestre en UMTS es:";
 choices[37]= new Array();
 choices[37][0] = "FDMA";
 choices[37][1] = "TDMA";
 choices[37][2] = "CDMA";
 choices[37][3] = "WCDMA";
 answers[37] = choices[37][3];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3706. ";


//  Id pregunta: 3741 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  Los servicios de telecomunicaciones de libre recepci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Son emisiones sonoras, television u otro g&eacute;nero";
 choices[38][1] = "Incluyen los de minima cobertura";
 choices[38][2] = "Pueden llegar hasta los 20 Watts ";
 choices[38][3] = "Todas los anteriores respuestas son correctas";
 answers[38] = choices[38][3];
 units[38] = "110";
 comments[38] = "Id Pregunta: 3741. ";


//  Id pregunta: 3771 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  PCM es:";
 choices[39]= new Array();
 choices[39][0] = "Modulaci&oacute;n por codificaci&oacute;n de pulsos";
 choices[39][1] = "M&oacute;biles adaptados al uso con ordenadores personales";
 choices[39][2] = "Modulaci&oacute;n por codificaci&oacute;n de fase";
 choices[39][3] = "Personalizaci&oacute;n de canales multimedia";
 answers[39] = choices[39][0];
 units[39] = "99";
 comments[39] = "Id Pregunta: 3771. *:PCM";


//  Id pregunta: 3772 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  PGP, o Pretty Good Privacy:";
 choices[40]= new Array();
 choices[40][0] = "Fue desarrollado por Phil Zimmerman";
 choices[40][1] = "Utiliza IDEA o MD5 como encriptacion";
 choices[40][2] = "Utiliza TripleDES Como encriptacion";
 choices[40][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[40] = choices[40][0];
 units[40] = "106";
 comments[40] = "Id Pregunta: 3772. ";


//  Id pregunta: 3911 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  Algoritmo de compresi&oacute;n de im&aacute;genes sin p&eacute;rdidas:";
 choices[41]= new Array();
 choices[41][0] = "ECW.";
 choices[41][1] = "RLE.";
 choices[41][2] = "MPEG.";
 choices[41][3] = "TXA.";
 answers[41] = choices[41][1];
 units[41] = "93";
 comments[41] = "Id Pregunta: 3911. ";


//  Id pregunta: 3970 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  Un registro MX en un servidor DNS, &iquest; a qu&eacute; hace referencia?";
 choices[42]= new Array();
 choices[42][0] = "al servidor DNS principal";
 choices[42][1] = "al servidor web asociado al dominio";
 choices[42][2] = "al servidor de correo asociado al dominio";
 choices[42][3] = "al servidor seguro asociado al dominio";
 answers[42] = choices[42][2];
 units[42] = "106";
 comments[42] = "Id Pregunta: 3970. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 4001 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  En el caso de que una red de cable proporcione servicios de datos, &iquest;c&oacute;mo se denomina al equipo situado en la cabecera de la red que env&iacute;a y recibe los flujos de datos?";
 choices[43]= new Array();
 choices[43][0] = "Router";
 choices[43][1] = "Switch";
 choices[43][2] = "Gateway";
 choices[43][3] = "CMTS";
 answers[43] = choices[43][3];
 units[43] = "105";
 comments[43] = "Id Pregunta: 4001. ";


//  Id pregunta: 4003 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l es el significado del acr&oacute;nimo DOCSIS?";
 choices[44]= new Array();
 choices[44][0] = "Data Over Coaxial Service Interface Specification";
 choices[44][1] = "Data Over Cable Service Internet Specification";
 choices[44][2] = "Data Over Coaxial Service Internet Specification";
 choices[44][3] = "Data Over Cable Service Interface Specification";
 answers[44] = choices[44][3];
 units[44] = "105";
 comments[44] = "Id Pregunta: 4003. ";


//  Id pregunta: 4070 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  Podemos definir spoofing como";
 choices[45]= new Array();
 choices[45][0] = "captura de datos sensibles mediante la escucha no autorizada";
 choices[45][1] = "amenaza propia de virus y gusanos";
 choices[45][2] = "Suplantaci&oacute;n de la direcci&oacute;n IP ";
 choices[45][3] = "Un mecanismo de enga&ntilde;o basado en t&eacute;cnicas de ingenier&iacute;a social";
 answers[45] = choices[45][2];
 units[45] = "112";
 comments[45] = "Id Pregunta: 4070. ";


//  Id pregunta: 4086 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  El formato para im&aacute;genes GIF";
 choices[46]= new Array();
 choices[46][0] = "Se basa en un algoritmo de compresi&oacute;n patentado, lo que te&oacute;ricamente limita su uso";
 choices[46][1] = "Significa Graphic Interleaved Format (Formato Gr&aacute;fico Entrelazado)";
 choices[46][2] = "Fue creado por Microsoft";
 choices[46][3] = "Ninguna de las anteriores es correcta";
 answers[46] = choices[46][0];
 units[46] = "114";
 comments[46] = "Id Pregunta: 4086. ";


//  Id pregunta: 4119 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  La t&eacute;cnica usada para llevar a los visitantes a una nueva p&aacute;gina web cuando un URL ha cambiado se llama";
 choices[47]= new Array();
 choices[47][0] = "Redirecci&oacute;n";
 choices[47][1] = "CGI";
 choices[47][2] = "Identificador Uniforme de Recursos";
 choices[47][3] = "ASP";
 answers[47] = choices[47][0];
 units[47] = "112";
 comments[47] = "Id Pregunta: 4119. ";


//  Id pregunta: 4124 Año de creación de pregunta: 2006-01-01
 questions[48]= "49)  La tecnolog&iacute;a que permite varios canales independientes en una &uacute;nica fibra &oacute;ptica mediante el uso de diferentes frecuencias de luz se llama";
 choices[48]= new Array();
 choices[48][0] = "Multiplexado por divisi&oacute;n de frecuencia (FDM)";
 choices[48][1] = "Multiplexado por divisi&oacute;n de tiempo (TDM)";
 choices[48][2] = "Multiplexado por divisi&oacute;n densa de la longitud de onda (DWDM)";
 choices[48][3] = "Multiplexado tradicional (MUX)";
 answers[48] = choices[48][2];
 units[48] = "105";
 comments[48] = "Id Pregunta: 4124. ";


//  Id pregunta: 4144 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  Un programa aparentemente in&oacute;cuo y &uacute;til que al instalarlo el usuario, es utilizado por un tercero para realizar acciones no autorizadas sobre el sistema se llama";
 choices[49]= new Array();
 choices[49][0] = "honeypot";
 choices[49][1] = "bomba l&oacute;gica";
 choices[49][2] = "virus";
 choices[49][3] = "troyano";
 answers[49] = choices[49][3];
 units[49] = "111";
 comments[49] = "Id Pregunta: 4144. ";


//  Id pregunta: 4145 Año de creación de pregunta: 2006-01-01
 questions[50]= "51)  Un programa aparentemente in&oacute;cuo y &uacute;til que al instalarlo el usuario comienza a realizar acciones destructivas sobre el sistema en un momento determinado de tiempo o a ra&iacute;z de una acci&oacute;n concreta se llama";
 choices[50]= new Array();
 choices[50][0] = "sniffer";
 choices[50][1] = "bomba l&oacute;gica";
 choices[50][2] = "troyano";
 choices[50][3] = "gusano";
 answers[50] = choices[50][1];
 units[50] = "111";
 comments[50] = "Id Pregunta: 4145. ";


//  Id pregunta: 4340 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es el puerto est&aacute;ndar utilizado por el protocolo POP3?:";
 choices[51]= new Array();
 choices[51][0] = "21.";
 choices[51][1] = "23.";
 choices[51][2] = "25";
 choices[51][3] = "110";
 answers[51] = choices[51][3];
 units[51] = "112";
 comments[51] = "Id Pregunta: 4340. ";


//  Id pregunta: 4377 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;les son los elementos en que se desglosa el desarrollo de un sistema de informaci&oacute;n, seg&uacute;n M&eacute;trica v3?";
 choices[52]= new Array();
 choices[52][0] = "Revisiones t&eacute;cnicas formales e inspecciones informales.";
 choices[52][1] = "Procesos principales, actividades y tareas.";
 choices[52][2] = "Fases, m&oacute;dulos, actividades y tareas.";
 choices[52][3] = "Interfaces y fases.";
 answers[52] = choices[52][1];
 units[52] = "86";
 comments[52] = "Id Pregunta: 4377. ";


//  Id pregunta: 4428 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes no es una caracter&iacute;stica de la arquitectura de red de Internet?";
 choices[53]= new Array();
 choices[53][0] = "Arquitectura abierta";
 choices[53][1] = "Control centralizado";
 choices[53][2] = "Basada en TCP/IP";
 choices[53][3] = "Organizaci&oacute;n jer&aacute;rquica";
 answers[53] = choices[53][1];
 units[53] = "112";
 comments[53] = "Id Pregunta: 4428. ";


//  Id pregunta: 4449 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  En relaci&oacute;n con la licencia GPL (GNU Public License), una de las siguientes afirmaciones no es cierta.";
 choices[54]= new Array();
 choices[54][0] = "Permite redistribuir, ejecutar y mejorar los programas.";
 choices[54][1] = "Proh&iacute;be cobrar un precio por el acto f&iacute;sico de transferir una copia.";
 choices[54][2] = "No permite que incluya sus programas en programas propietarios.";
 choices[54][3] = "Fue creada por la Free Software Foundation.";
 answers[54] = choices[54][1];
 units[54] = "36";
 comments[54] = "Id Pregunta: 4449. ";


//  Id pregunta: 4489 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  Seg&uacute;n el RD 944/2005 de 29 de Julio por el que se aprob6 el Plan T&eacute;cnico Nacional para Ia Televisi&oacute;n Digital Terrestre, cada m&uacute;ltiple digital de cobertura nacional o auton&oacute;mica integrara:";
 choices[55]= new Array();
 choices[55][0] = "Al menos cuatro canales digitales diferentes, siendo posible utilizar pasta el 20 % de la capacidad del m&uacute;ltiple para Ia transmisi&oacute;n de servicios adicionales de datos.";
 choices[55][1] = "Al menos cuatro canales digitales sin posibilidad de emitir ning&uacute;n otro servicio adicional de datos.";
 choices[55][2] = "Al menos cuatro canales digitales diferentes siendo obligatoria Ia emision de servicios de datos adicionales.";
 choices[55][3] = "Al menos cuatro canales digitales diferentes, siendo obligatoria la difusi&oacute;n de las Gu&iacute;as Electr&oacute;nicas de Programaci&oacute;n correspondientes a dichos canales.";
 answers[55] = choices[55][0];
 units[55] = "110";
 comments[55] = "Id Pregunta: 4489. ";


//  Id pregunta: 4507 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  &iquest;Cuanto tiempo duraran los derechos de explotaci&oacute;n de una obra?";
 choices[56]= new Array();
 choices[56][0] = "Hasta la muerte de su autor";
 choices[56][1] = "Setenta anos despu&eacute;s de la fecha de divulgaci&oacute;n";
 choices[56][2] = "Toda la vida de su autor y setenta anos despu&eacute;s de su muerte";
 choices[56][3] = "Los derechos de explotaci&oacute;n de una obra nunca se extinguen";
 answers[56] = choices[56][2];
 units[56] = "36";
 comments[56] = "Id Pregunta: 4507. ";


//  Id pregunta: 4527 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  &iquest;Cual es el tipo de mantenimiento que supone un conjunto de actividades para facilitar el mantenimiento futuro del sistema?";
 choices[57]= new Array();
 choices[57][0] = "Mantenimiento perfectivo.";
 choices[57][1] = "Mantenimiento adaptativo.";
 choices[57][2] = "Mantenimiento correctivo.";
 choices[57][3] = "Mantenimiento preventivo.";
 answers[57] = choices[57][3];
 units[57] = "86";
 comments[57] = "Id Pregunta: 4527. ";


//  Id pregunta: 4732 Año de creación de pregunta: 2007-01-01
 questions[58]= "59)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es:";
 choices[58]= new Array();
 choices[58][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[58][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[58][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[58][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[58] = choices[58][2];
 units[58] = "112";
 comments[58] = "Id Pregunta: 4732. Examen 2006 JCYL";


//  Id pregunta: 4766 Año de creación de pregunta: 2007-01-01
 questions[59]= "60)  En la mayor&iacute;a de las instalaciones de cableado estrcturado, el par trenzado sin apantallar (UTP) es m&aacute;s utilizdo ue el par trenzado apantallado (STP) deboido a que";
 choices[59]= new Array();
 choices[59][0] = "STP es m&aacute;s costoso y m&aacute;s suceptible a problemas de ruido cuando la conexi&oacute;n a tierra no es de gran calidad";
 choices[59][1] = "Al ser STP mucho m&aacute;s fr&aacute;gil que UTP, reslta mucho m&aacute;s dif&iacute;cil canalizarlo";
 choices[59][2] = "Los conectores utilizados en UTP (RJ-45) son m&aacute;s econ&oacute;micos  fiables que los de STP (RJ 11)";
 choices[59][3] = "Es mucho m&aacute;s utilizado el par trenzado apantallado (STP)";
 answers[59] = choices[59][0];
 units[59] = "99";
 comments[59] = "Id Pregunta: 4766. ";


//  Id pregunta: 4856 Año de creación de pregunta: 2007-01-01
 questions[60]= "61)  En el entorno de trabajo necesario para desarrollar applets, el m&eacute;todo init de la clase Applet:";
 choices[60]= new Array();
 choices[60][0] = "Es invocado autom&aacute;ticamente despu&eacute;s de que Java llame al m&eacute;todo start";
 choices[60][1] = "Se utiliza siempre que el applet necesita inicializaci&oacute;n";
 choices[60][2] = "Es invocado autom&aacute;ticamente cuando el usuario sale de la p&aacute;gina en la que se encuentra el applet";
 choices[60][3] = "S&oacute;lo es invocado cuando el navegador se cierra normalmente";
 answers[60] = choices[60][1];
 units[60] = "116";
 comments[60] = "Id Pregunta: 4856. ";


//  Id pregunta: 5140 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Seg&uacute;n M&eacute;trica V3, &iquest;dentro de qu&eacute; perfil de participantes se encuentra recogido el Grupo de Aseguramiento de Calidad?";
 choices[61]= new Array();
 choices[61][0] = "Jefe de Proyecto.";
 choices[61][1] = "Programador.";
 choices[61][2] = "Analista.";
 choices[61][3] = "Consultor.";
 answers[61] = choices[61][2];
 units[61] = "86";
 comments[61] = "Id Pregunta: 5140. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5218 Año de creación de pregunta: 2007-01-01
 questions[62]= "63)  En qu&eacute; proceso no se utiliza la t&eacute;cnica de Diagrama de Clases";
 choices[62]= new Array();
 choices[62][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[62][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[62][2] = "Estudio de Viabilidad del Sistema";
 choices[62][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 answers[62] = choices[62][3];
 units[62] = "86";
 comments[62] = "Id Pregunta: 5218. ";


//  Id pregunta: 5223 Año de creación de pregunta: 2007-01-01
 questions[63]= "64)  La actividad &quot;Especificaci&oacute;n detallada del plan de aseguramiento de calidad&quot; en qu&eacute; proceso se realiza";
 choices[63]= new Array();
 choices[63][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[63][1] = "Estudio de Viabilidad del Sistema";
 choices[63][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[63][3] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[63] = choices[63][0];
 units[63] = "86";
 comments[63] = "Id Pregunta: 5223. ";


//  Id pregunta: 5254 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  Indique cu&aacute;l de las siguientes opciones describe el nivel 2 del modelo CMM";
 choices[64]= new Array();
 choices[64][0] = "No se han definido procesos metodol&oacute;gicos, o si se han definido no se siguen";
 choices[64][1] = "El proceso de software est&aacute; documentado, homogeneizado e integrado en un proceso de software est&aacute;ndar dentro de la organizaci&oacute;n";
 choices[64][2] = "Se establecen pol&iacute;ticas y procedimientos de administraci&oacute;n e implantaci&oacute;n del modelo b&aacute;sico para determinar costos, calendarios y funcionalidades";
 choices[64][3] = "Se recolectan medidas detalladas del proceso de software y de la calidad del producto Ambos son cuantitativamente entendidos y controlados.";
 answers[64] = choices[64][2];
 units[64] = "87";
 comments[64] = "Id Pregunta: 5254. ";


//  Id pregunta: 5436 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar";
 choices[65]= new Array();
 choices[65][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesario ajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos";
 choices[65][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo";
 choices[65][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n";
 choices[65][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n";
 answers[65] = choices[65][2];
 units[65] = "89";
 comments[65] = "Id Pregunta: 5436. Castilla y Le&oacute;n";


//  Id pregunta: 5685 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  &iquest;En qu&eacute; consiste el eRecord Management?";
 choices[66]= new Array();
 choices[66][0] = "Gesti&oacute;n de documentos de tipo registro";
 choices[66][1] = "Destrucci&oacute;n controlada de informaci&oacute;n electr&oacute;nica";
 choices[66][2] = "Control de Seguridad de documentos importantes para una organizaci&oacute;n";
 choices[66][3] = "Almacenamiento con codificaci&oacute;n sim&eacute;trica de registros";
 answers[66] = choices[66][2];
 units[66] = "95";
 comments[66] = "Id Pregunta: 5685. ";


//  Id pregunta: 5830 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  Se&ntilde;ale la afirmaci&oacute;n incorrecta respecto a la licencia EUPL.";
 choices[67]= new Array();
 choices[67][0] = "Con estte tipo de licencia las administraciones pueden ser proveedoras de software open source ente ellas, reutilizando lo que otros han hecho y mejor&aacute;ndolo.";
 choices[67][1] = "Es equivalente a las licencias GNU GPL y se pueden usar indistintamente, s&oacute;lo que EUPL aplica &uacute;nicamente en europa.";
 choices[67][2] = "Una de las novedades que introduce es la variedad de idiomas en los que est&aacute; disponible.";
 choices[67][3] = "Es una licencia compatible con otras licencias copyleft";
 answers[67] = choices[67][1];
 units[67] = "36,37";
 comments[67] = "Id Pregunta: 5830. ";


//  Id pregunta: 5900 Año de creación de pregunta: 2009-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre JPA?";
 choices[68]= new Array();
 choices[68][0] = "El mapeo de los objetos al modelo relacional se puede definir mediante anotaciones en las entidades (clases)";
 choices[68][1] = "El mapeo de los objetos al modelo relacional se puede definir mediante ficheros XML";
 choices[68][2] = "Una misma unidad de persistencia permite acceder a diferentes fuentes de datos";
 choices[68][3] = "Una entidad puede estar mapeada a m&aacute;s de una tabla relacional";
 answers[68] = choices[68][2];
 units[68] = "60";
 comments[68] = "Id Pregunta: 5900. ";


//  Id pregunta: 5955 Año de creación de pregunta: 2009-01-01
 questions[69]= "70)  Se&ntilde;ala la respuesta falsa. La Ley 11/2007 indica que la Reuni&oacute;n de &Oacute;rganos colegiados por medios electr&oacute;nicos en la Administraci&oacute;n General del Estado se efectuar&aacute; de acuerdo con las siguientes especialidades:";
 choices[69]= new Array();
 choices[69][0] = "Deber&aacute; garantizarse la realizaci&oacute;n efectiva de los principios que la legislaci&oacute;n establece respecto de la convocatoria, acceso a la informaci&oacute;n y comunicaci&oacute;n del orden del d&iacute;a, en donde se especificar&aacute;n los tiempos en los que se organizar&aacute;n los debates, la formulaci&oacute;n y conocimiento de las propuestas y la adopci&oacute;n de acuerdos.";
 choices[69][1] = "Deber&aacute; garantizarse de forma fehaciente el quorum requerido en los t&eacute;rminos establecidos por la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n por medios electr&oacute;nicos ";
 choices[69][2] = "El r&eacute;gimen de constituci&oacute;n y adopci&oacute;n de acuerdos garantizar&aacute; la participaci&oacute;n de los miembros de acuerdo con las disposiciones propias del &oacute;rgano.";
 choices[69][3] = "Las actas garantizar&aacute;n la constancia de las comunicaciones producidas as&iacute; como el acceso de los miembros al contenido de los acuerdos adoptados.";
 answers[69] = choices[69][1];
 units[69] = "43";
 comments[69] = "Id Pregunta: 5955. Disposici&oacute;n Adicional primera.";


//  Id pregunta: 5963 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  Seg&uacute;n la Norma ISO 9000:2000, la expresi&oacute;n formal por la Direcci&oacute;n de las intenciones globales y orientaci&oacute;n de una organizaci&oacute;n relativas a la calidad, se denomina:";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n de la calidad";
 choices[70][1] = "Norma de la calidad";
 choices[70][2] = "Pol&iacute;tica de la calidad";
 choices[70][3] = "Direcci&oacute;n de la calidad";
 answers[70] = choices[70][2];
 units[70] = "87";
 comments[70] = "Id Pregunta: 5963. Castilla La Mancha 2009";


//  Id pregunta: 6055 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Seg&uacute;n el RD 951/2005 de 29 de julio, el nuevo marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[71]= new Array();
 choices[71][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[71][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[71][2] = "Quejas y reclamaciones.";
 choices[71][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[71] = choices[71][1];
 units[71] = "92";
 comments[71] = "Id Pregunta: 6055. TIC A 2009";


//  Id pregunta: 6156 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Qu&eacute; tipo de licencia utiliza Samba?";
 choices[72]= new Array();
 choices[72][0] = "GPL";
 choices[72][1] = "GNU LGPL";
 choices[72][2] = "No utiliza ning&uacute;n tipo de licencia";
 choices[72][3] = "MGPL";
 answers[72] = choices[72][0];
 units[72] = "112";
 comments[72] = "Id Pregunta: 6156. ";


//  Id pregunta: 6159 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  En cuanto a SFTP, se puede afirmar:";
 choices[73]= new Array();
 choices[73][0] = "Se obtiene al ejecutar FTP sobre SSH.";
 choices[73][1] = "Las siglas SFTP significan Simple File Transfer Protocol.";
 choices[73][2] = "El protocolo SFTP en s&iacute; no facilita la autenticaci&oacute;n y la seguridad, sino que espera que el protocolo subyacente asegure a este.";
 choices[73][3] = "Todas las respuestas anteriores son correctas.";
 answers[73] = choices[73][2];
 units[73] = "112";
 comments[73] = "Id Pregunta: 6159. ";


//  Id pregunta: 6186 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Indique, cu&aacute;l de los siguientes elementos no forma parte de una Intranet:";
 choices[74]= new Array();
 choices[74][0] = "Nomina del personal.";
 choices[74][1] = "Tabl&oacute;n de Anuncios.";
 choices[74][2] = "Motor de b&uacute;squeda de documentaci&oacute;n.";
 choices[74][3] = "Procesador de Textos.";
 answers[74] = choices[74][3];
 units[74] = "113";
 comments[74] = "Id Pregunta: 6186. ";


//  Id pregunta: 6222 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica com&uacute;n a Portlets y Servlets?:";
 choices[75]= new Array();
 choices[75][0] = "Generan contenido din&aacute;micamente.";
 choices[75][1] = "Son manejados por un contenedor especializado.";
 choices[75][2] = "Est&aacute;n asociados directamente a una URL.";
 choices[75][3] = "Su ciclo de vida es controlado por el contenedor.";
 answers[75] = choices[75][2];
 units[75] = "114";
 comments[75] = "Id Pregunta: 6222. ";


//  Id pregunta: 6247 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Qu&eacute; m&oacute;dulo de Apache se incluye para aportar seguridad a Axis2?";
 choices[76]= new Array();
 choices[76][0] = "My Sql";
 choices[76][1] = "Php";
 choices[76][2] = "Rampart";
 choices[76][3] = "Addressing";
 answers[76] = choices[76][2];
 units[76] = "60";
 comments[76] = "Id Pregunta: 6247. TICB-2009, bloque desarrollo";


//  Id pregunta: 6364 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  De acuerdo con el Esquema Nacional de Seguridad, el sistema ha de disponer de una estrategia de protecci&oacute;n constituida por m&uacute;ltiples capas de seguridad, dispuesta de forma que, cuando una de las capas falle, permita:";
 choices[77]= new Array();
 choices[77][0] = "Ganar tiempo para una reacci&oacute;n adecuada frente a los incidentes que no han podido evitarse.";
 choices[77][1] = "Reducir la probabilidad de que el sistema sea comprometido en su conjunto.";
 choices[77][2] = "Minimizar el impacto final sobre el mismo.";
 choices[77][3] = "Todas las anteriores";
 answers[77] = choices[77][3];
 units[77] = "43";
 comments[77] = "Id Pregunta: 6364. Art&iacute;culo 8 ENS";


//  Id pregunta: 6519 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  NO es un framework de desarrollo en Java";
 choices[78]= new Array();
 choices[78][0] = "JavaServer Faces";
 choices[78][1] = "Spring";
 choices[78][2] = "Ruby on Rails";
 choices[78][3] = "Maverick ";
 answers[78] = choices[78][2];
 units[78] = "116";
 comments[78] = "Id Pregunta: 6519. ";


//  Id pregunta: 6547 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  Qu&eacute; pol&iacute;tica de control aplica cuando la infraestructura usa un modelo no discrecional?";
 choices[79]= new Array();
 choices[79][0] = "Basado en reglas";
 choices[79][1] = "Basado en roles";
 choices[79][2] = "Basado en identidades";
 choices[79][3] = "MAC";
 answers[79] = choices[79][1];
 units[79] = "111";
 comments[79] = "Id Pregunta: 6547. ";


//  Id pregunta: 6565 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  La velocidad de transmisi&oacute;n en GPRS queda limitada por:";
 choices[80]= new Array();
 choices[80][0] = "El n&uacute;mero de timeslots que pueda ofrecer la c&eacute;lula donde se encuentra el terminal";
 choices[80][1] = "De la capacidad m&aacute;xima del dispositivo m&oacute;vil";
 choices[80][2] = "Del esquema de codificaci&oacute;n";
 choices[80][3] = "Todas las respuestas anteriores son ciertas";
 answers[80] = choices[80][3];
 units[80] = "108";
 comments[80] = "Id Pregunta: 6565. ";


//  Id pregunta: 6573 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  De las siguientes afirmaciones, &iquest;cu&aacute;l es la correcta?";
 choices[81]= new Array();
 choices[81][0] = "ARP y RARP son unos protocolos de facto para transmitir datos a trav&eacute;s de Internet";
 choices[81][1] = "ARP traduce la direcci&oacute;n IP a su correspondiente direcci&oacute;n MAC";
 choices[81][2] = "ICMP traduce la direcci&oacute;n MAC a su correspondiente direcci&oacute;n IP";
 choices[81][3] = "Todas las respuestas anteriores son correctas";
 answers[81] = choices[81][1];
 units[81] = "100";
 comments[81] = "Id Pregunta: 6573. ";


//  Id pregunta: 6620 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  Seg&uacute;n M&eacute;trica, las Interfaces son:";
 choices[82]= new Array();
 choices[82][0] = "4: Gesti&oacute;n de Proyectos; Seguridad y Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad; Gesti&oacute;n de Configuraci&oacute;n";
 choices[82][1] = "3: Gesti&oacute;n de Proyectos; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 choices[82][2] = "3: Gesti&oacute;n de Proyectos; Aseguramiento de la Calidad  y Gesti&oacute;n de Riesgos; Gesti&oacute;n de Configuraci&oacute;n";
 choices[82][3] = "4: Gesti&oacute;n de Proyectos; Seguridad; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 answers[82] = choices[82][0];
 units[82] = "86";
 comments[82] = "Id Pregunta: 6620. ";


//  Id pregunta: 6622 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes elementos es una Pr&aacute;ctica y no una T&eacute;cnica seg&uacute;n M&eacute;trica v3?";
 choices[83]= new Array();
 choices[83][0] = "Modelo de Procesos de la Organizaci&oacute;n (SADT)";
 choices[83][1] = "An&aacute;lisis Coste/Beneficio";
 choices[83][2] = "An&aacute;lisis de Impacto";
 choices[83][3] = "Casos de Uso";
 answers[83] = choices[83][2];
 units[83] = "86";
 comments[83] = "Id Pregunta: 6622. ";


//  Id pregunta: 6649 Año de creación de pregunta: 2010-01-01
 questions[84]= "85)  En el modelo COCOMO 2000 surgido como evoluci&oacute;n de COCOMO II, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[84]= new Array();
 choices[84][0] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[84][1] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: incluye el uso de prototipos";
 choices[84][2] = "Modelo de Dise&ntilde;o Preliminar: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[84][3] = "Modelo de Dise&ntilde;o Preliminar: incluye el uso de prototipos";
 answers[84] = choices[84][1];
 units[84] = "89";
 comments[84] = "Id Pregunta: 6649. ";


//  Id pregunta: 7147 Año de creación de pregunta: 2010-01-01
 questions[85]= "86)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica, &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las entidades que integran la Administraci&oacute;n Local en materia de Administraci&oacute;n Electr&oacute;nica, depende de:";
 choices[85]= new Array();
 choices[85][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica";
 choices[85][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[85][2] = "La Direcci&oacute;n General para el Impulso de la Administraci&oacute;n Electr&oacute;nica";
 choices[85][3] = "Del Vicepresidente Tercero del Gobierno y Ministro de Cooperaci&oacute;n Territorial";
 answers[85] = choices[85][0];
 units[85] = "44";
 comments[85] = "Id Pregunta: 7147. Examen TIC B 2009";


//  Id pregunta: 8264 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  La red SARA permite la comunicaci&oacute;n:";
 choices[86]= new Array();
 choices[86][0] = "S&oacute;lo entre organismos y ministerios de la Administraci&oacute;n General del Estado (AGE).";
 choices[86][1] = "S&oacute;lo entre la AGE y la Uni&oacute;n Europea.";
 choices[86][2] = "Entre la AGE, CC.AA. y entidades locales, as&iacute; como su conexi&oacute;n con instituciones europeas a trav&eacute;s de la red transeuropea eu-SARA.";
 choices[86][3] = "Entre la AGE, CC.AA. y entidades locales, as&iacute; como su conexi&oacute;n con instituciones europeas a trav&eacute;s de la red transeuropea sTESTA.";
 answers[86] = choices[86][3];
 units[86] = "43,44";
 comments[86] = "Id Pregunta: 8264. Examen TIC A1 2010";


//  Id pregunta: 8341 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[87]= new Array();
 choices[87][0] = "El Diccionario de Datos.";
 choices[87][1] = "El Diagrama de Flujo de Datos.";
 choices[87][2] = "Las especificaciones de procesos.";
 choices[87][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[87] = choices[87][3];
 units[87] = "86";
 comments[87] = "Id Pregunta: 8341. Examen TIC A2 2010";


//  Id pregunta: 8401 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  Dentro del contenido m&iacute;nimo de una Sede Electr&oacute;nica NO se encuentra: ";
 choices[88]= new Array();
 choices[88][0] = "Identificaci&oacute;n, &oacute;rgano titular y responsables de gesti&oacute;n. ";
 choices[88][1] = "Sistemas de firma electr&oacute;nica que sean admitidos o utilizados en la Sede. ";
 choices[88][2] = "Sistemas de verificaci&oacute;n de los certificados de la Sede. ";
 choices[88][3] = "Relaci&oacute;n de funcionarios habilitados para actuar ante la Sede";
 answers[88] = choices[88][3];
 units[88] = "43";
 comments[88] = "Id Pregunta: 8401. Examen TIC A2 2010";


//  Id pregunta: 8424 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes grupos de medidas de seguridad no se define en el anexo II del Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[89]= new Array();
 choices[89][0] = "Medidas de protecci&oacute;n";
 choices[89][1] = "Marco organizativo";
 choices[89][2] = "Marco operacional";
 choices[89][3] = "Marco tecnol&oacute;gico";
 answers[89] = choices[89][3];
 units[89] = "43";
 comments[89] = "Id Pregunta: 8424. ";


//  Id pregunta: 8590 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes utilidades permite desarrollar en JAVA?";
 choices[90]= new Array();
 choices[90][0] = "JRE";
 choices[90][1] = "M&aacute;quina Virtual de Java";
 choices[90][2] = "JDK";
 choices[90][3] = "AWT";
 answers[90] = choices[90][2];
 units[90] = "116";
 comments[90] = "Id Pregunta: 8590. Examen TIC A2 2010 interna";


//  Id pregunta: 8601 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es un principio del Dise&ntilde;o Universal?";
 choices[91]= new Array();
 choices[91][0] = "Uso equiparable";
 choices[91][1] = "Uso flexible";
 choices[91][2] = "Que exija poco esfuerzo f&iacute;sico";
 choices[91][3] = "Robusto";
 answers[91] = choices[91][3];
 units[91] = "39";
 comments[91] = "Id Pregunta: 8601. Examen TIC A2 2010 interna";


//  Id pregunta: 8619 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  &iquest;Qu&eacute; tareas de mantenimiento contempla M&eacute;trica v3 en su proceso MSI?:";
 choices[92]= new Array();
 choices[92][0] = "Correctivo, evolutivo y adaptativo";
 choices[92][1] = "Correctivo, evolutivo, adaptativo y perfectivo";
 choices[92][2] = "Correctivo y evolutivo";
 choices[92][3] = "Correctivo, evolutivo y perfectivo.";
 answers[92] = choices[92][2];
 units[92] = "86";
 comments[92] = "Id Pregunta: 8619. Examen TIC A2 2010 interna";


//  Id pregunta: 8628 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  De entre las siguientes opciones en el &aacute;mbito del almacenamiento en los sistemas de informaci&oacute;n, se&ntilde;ale la verdadera:";
 choices[93]= new Array();
 choices[93][0] = "SAS es una interfaz de transferencia de datos en serie";
 choices[93][1] = "SATA es una Interfaz de transferencia de datos en paralelo";
 choices[93][2] = "Los dispositivos SAS se identifican por el World Wide Web Name (WWWN).";
 choices[93][3] = "El conector SATA posee 68 pines";
 answers[93] = choices[93][0];
 units[93] = "48";
 comments[93] = "Id Pregunta: 8628. Examen TIC A2 2010 interna";


//  Id pregunta: 8653 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de las siguientes es una prueba perteneciente a las pruebas del sistema?";
 choices[94]= new Array();
 choices[94][0] = "Pruebas globales.";
 choices[94][1] = "Pruebas Integradas.";
 choices[94][2] = "Pruebas funcionales.";
 choices[94][3] = "Pruebas unitarias.";
 answers[94] = choices[94][2];
 units[94] = "86";
 comments[94] = "Id Pregunta: 8653. Examen TIC A2 2010 interna";


//  Id pregunta: 8669 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  Cu&aacute;l de los siguientes elementos de seguridad opera en el nivel 3 del modelo OSI";
 choices[95]= new Array();
 choices[95][0] = "Proxy";
 choices[95][1] = "Firewall de filtrado de paquetes";
 choices[95][2] = "Antivirus";
 choices[95][3] = "Filtro anti SPAM";
 answers[95] = choices[95][1];
 units[95] = "111";
 comments[95] = "Id Pregunta: 8669. Examen UPM A2 2011";


//  Id pregunta: 8891 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  Se&ntilde;ale la respuesta correcta seg&uacute;n M&eacute;trica v3";
 choices[96]= new Array();
 choices[96][0] = "El c&aacute;lculo de accesos es una t&eacute;cnica";
 choices[96][1] = "La normalizaci&oacute;n es una t&eacute;cnica";
 choices[96][2] = "Ambas son pr&aacute;cticas";
 choices[96][3] = "Ambas son t&eacute;cnicas";
 answers[96] = choices[96][1];
 units[96] = "86";
 comments[96] = "Id Pregunta: 8891. ";


//  Id pregunta: 8914 Año de creación de pregunta: 2011-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes no es una funci&oacute;n del Administrador de la Base de Datos (DBA)?:";
 choices[97]= new Array();
 choices[97][0] = "Realizar el modelo Entidad/Relaci&oacute;n que defina la estructura de los datos.";
 choices[97][1] = "Monitorizaci&oacute;n del rendimiento de la base de datos.";
 choices[97][2] = "Balance de la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento.";
 choices[97][3] = "Gestionar los usuarios y los permisos de acceso a la base da datos";
 answers[97] = choices[97][0];
 units[97] = "26";
 comments[97] = "Id Pregunta: 8914. ";


//  Id pregunta: 8994 Año de creación de pregunta: 2011-01-01
 questions[98]= "99)  Las Cookies que emplea el protocolo HTTP se especifican en el RFC:";
 choices[98]= new Array();
 choices[98][0] = "2965";
 choices[98][1] = "8080";
 choices[98][2] = "1065";
 choices[98][3] = "1265";
 answers[98] = choices[98][0];
 units[98] = "112";
 comments[98] = "Id Pregunta: 8994. Examen UPM A2 2011";


//  Id pregunta: 9374 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  Indique cu&aacute;l de las siguientes afirmaciones es correcta en el &aacute;mbito de la normalizaci&oacute;n de puntuaciones de la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta:";
 choices[99]= new Array();
 choices[99][0] = "El m&eacute;todo de fracci&oacute;n del ideal y el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[99][1] = "El m&eacute;todo de fracci&oacute;n del m&aacute;ximo y el m&eacute;todo de fracci&oacute;n de la suma no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[99][2] = "El m&eacute;todo de fracci&oacute;n del ideal no mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo s&iacute; la mantiene";
 choices[99][3] = "El m&eacute;todo de fracci&oacute;n del ideal mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no la mantiene";
 answers[99] = choices[99][2];
 units[99] = "34";
 comments[99] = "Id Pregunta: 9374. ";


