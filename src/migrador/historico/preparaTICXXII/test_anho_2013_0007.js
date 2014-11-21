/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 72 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas incorpora la posibilidad de valorar el riesgo y la incertidumbre?:";
 choices[0]= new Array();
 choices[0][0] = "M&eacute;todo Promethee";
 choices[0][1] = "Utilidad multiatributo";
 choices[0][2] = "Permutaci&oacute;n";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][1];
 units[0] = "34";
 comments[0] = "Id Pregunta: 72. ";


//  Id pregunta: 158 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El punto que centraliza las comunicaciones de los usuarios con Sistemas de Informaci&oacute;n suele denominarse:";
 choices[1]= new Array();
 choices[1][0] = "Centro de control de red ";
 choices[1][1] = "Help desk";
 choices[1][2] = "Centro de contingencias";
 choices[1][3] = "Soporte de teleproceso";
 answers[1] = choices[1][1];
 units[1] = "26";
 comments[1] = "Id Pregunta: 158. ";


//  Id pregunta: 182 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En el estudio de la capacidad de los sistemas de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "La demanda latente es el trabajo frenado por la falta de recursos";
 choices[2][1] = "La teor&iacute;a de colas es un m&eacute;todo emp&iacute;rico, no matem&aacute;tico";
 choices[2][2] = "La frecuencia de swapping es el n&uacute;mero de fallos de p&aacute;gina que se producen por unidad de tiempo en un sistema de memoria virtual paginada";
 choices[2][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[2] = choices[2][0];
 units[2] = "35";
 comments[2] = "Id Pregunta: 182. ";


//  Id pregunta: 363 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Los beneficios en las inversiones en tecnolog&iacute;as de la informaci&oacute;n se pueden dividir en:";
 choices[3]= new Array();
 choices[3][0] = "Mejoras de productividad y mejoras financieras";
 choices[3][1] = "Mejoras de gesti&oacute;n, mejoras de organizaci&oacute;n y mejoras de competitividad";
 choices[3][2] = "Todas las anteriores son correctas";
 choices[3][3] = "Ninguna de las anteriores es correcta";
 answers[3] = choices[3][2];
 units[3] = "38";
 comments[3] = "Id Pregunta: 363. ";


//  Id pregunta: 434 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, la obra nueva que incorpore una obra existente sin la colaboraci&oacute;n del autor de esta &uacute;ltima se denomina:";
 choices[4]= new Array();
 choices[4][0] = "Obra colectiva";
 choices[4][1] = "Obra compuesta";
 choices[4][2] = "Obra en semi-colaboraci&oacute;n";
 choices[4][3] = "Obra replicada";
 answers[4] = choices[4][1];
 units[4] = "36";
 comments[4] = "Id Pregunta: 434. ";


//  Id pregunta: 480 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;De qu&eacute; depende el canon de compensacion equitativa por copia privada establecido con la orden PRE/1743/2008 de 18 de junio?";
 choices[5]= new Array();
 choices[5][0] = "Del tipo de equipo (anal&oacute;gico o digital)";
 choices[5][1] = "Del destino del soporte";
 choices[5][2] = "De la categoria del equipo";
 choices[5][3] = "Todas son ciertas";
 answers[5] = choices[5][3];
 units[5] = "36,37";
 comments[5] = "Id Pregunta: 480. ";


//  Id pregunta: 536 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;En qu&eacute; fase del ciclo de vida se decide entre desarrollar o adquirir una aplicaci&oacute;n?";
 choices[6]= new Array();
 choices[6][0] = "An&aacute;lisis";
 choices[6][1] = "Dise&ntilde;o ";
 choices[6][2] = "Estudio de viabilidad";
 choices[6][3] = "Programaci&oacute;n";
 answers[6] = choices[6][2];
 units[6] = "35";
 comments[6] = "Id Pregunta: 536. ";


//  Id pregunta: 584 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  &iquest;En qu&eacute; situaciones es necesario un equipo de integraci&oacute;n de sistemas?";
 choices[7]= new Array();
 choices[7][0] = "En entorno de microinform&aacute;tica";
 choices[7][1] = "Cuando se trabaja con m&aacute;quinas virtuales separadas";
 choices[7][2] = "Cuando se engloban varios componentes o varios sistemas sobre una misma plataforma";
 choices[7][3] = "Cuando se sube a producci&oacute;n sistemas especialmente cr&iacute;ticos";
 answers[7] = choices[7][2];
 units[7] = "26";
 comments[7] = "Id Pregunta: 584. ";


//  Id pregunta: 1069 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Elija la respuesta falsa. Un cluster de PCs con Linux, utiliza:";
 choices[8]= new Array();
 choices[8][0] = "MPI, como librer&iacute;a para paso de mensajes";
 choices[8][1] = "Tecnolog&iacute;a NUMA entre todas las m&aacute;quinas";
 choices[8][2] = "Redes de alta velocidad, como Myrinet, O Gigabit ethernet";
 choices[8][3] = "Todas son v&aacute;lidas";
 answers[8] = choices[8][1];
 units[8] = "45";
 comments[8] = "Id Pregunta: 1069. ";


//  Id pregunta: 1190 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Indique cu&aacute;l de las siguientes es una caracter&iacute;stica exclusiva del software libre frente a otros tipos de licencias de software:";
 choices[9]= new Array();
 choices[9][0] = "Fuentes abiertas";
 choices[9][1] = "Gratuidad";
 choices[9][2] = "Libre copia y distribuci&oacute;n del c&oacute;digo fuente";
 choices[9][3] = "Todas las caracteristicas anteriores son exclusivas del software libre";
 answers[9] = choices[9][2];
 units[9] = "61";
 comments[9] = "Id Pregunta: 1190. ";


//  Id pregunta: 1521 Año de creación de pregunta: 2003-01-01
 questions[10]= "11)  C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU";
 choices[10]= new Array();
 choices[10][0] = "MPL";
 choices[10][1] = "BSD";
 choices[10][2] = "GPL";
 choices[10][3] = "PPL";
 answers[10] = choices[10][2];
 units[10] = "61";
 comments[10] = "Id Pregunta: 1521. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1916 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3";
 choices[11]= new Array();
 choices[11][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[11][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[11][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica";
 choices[11][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[11] = choices[11][2];
 units[11] = "73";
 comments[11] = "Id Pregunta: 1916. ";


//  Id pregunta: 2173 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  La definici&oacute;n &quot;margen suplementario de tiempo que existe en una actividad si las actividades precedentes empiezan lo m&aacute;s tarde posible y las posteriores lo antes posible&quot; corresponde a: ";
 choices[12]= new Array();
 choices[12][0] = "holgura independiente";
 choices[12][1] = "holgura total";
 choices[12][2] = "holgura libre";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = choices[12][0];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2173. ";


//  Id pregunta: 2465 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  McCall, en su modelo de calidad del software, define 11 factores. &iquest;Con cu&aacute;l de ellos se asocia el coste de modificaci&oacute;n de un producto?:";
 choices[13]= new Array();
 choices[13][0] = "Fiabilidad";
 choices[13][1] = "Reusabilidad";
 choices[13][2] = "Facilidad de mantenimiento";
 choices[13][3] = "Facilidad de prueba";
 answers[13] = choices[13][2];
 units[13] = "87,88";
 comments[13] = "Id Pregunta: 2465. ";


//  Id pregunta: 2590 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  En la planificaci&oacute;n de Sistemas de informaci&oacute;n seg&uacute;n METRICA V3 en relaci&oacute;n con la actividad Estudio de Informaci&oacute;n Relevante, PSI3, La Definici&oacute;n de Requisitos, PSI4, y el Estudio de la situaci&oacute;n actual, PSI5:";
 choices[14]= new Array();
 choices[14][0] = "Dado que los resultados de la actividad estudio de la informaci&oacute;n relevante, PSI3, debe tenerse en cuenta para la definici&oacute;n de Requisitos, PSI4, esta &uacute;ltima s&oacute;lo puede llevarse a cabo una vez finalizada la anterior.";
 choices[14][1] = "Aunque los resultados de la actividad PSI3 debe tenerse en cuenta para la PSI4, ambas pueden realizarse en paralelo junto a PSI5.";
 choices[14][2] = "La, actividades PSI3 p PSI4 deben preceder a PSI5.";
 choices[14][3] = "El orden de realizaci&oacute;n de PSI3 y PSI4 debe preceder a PSI5.";
 answers[14] = choices[14][1];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2590. Junta Andaluc&iacute;a";


//  Id pregunta: 2648 Año de creación de pregunta: 2003-01-01
 questions[15]= "16)  En la fase de an&aacute;lisis de Metrica v3 se puede afirmar";
 choices[15]= new Array();
 choices[15][0] = "Las fases de de an&aacute;lisis de consistencia y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[15][1] = "Las fases de de an&aacute;lisis de casos de uso y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[15][2] = "Las fases de de an&aacute;lisis de casos de uso y an&aacute;lisis de consistenacia se pueden hacer de forma paralela";
 choices[15][3] = "Las fases de definici&oacute;n del sistema y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 answers[15] = choices[15][1];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2648. ";


//  Id pregunta: 2713 Año de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l fue el primer navegador web?";
 choices[16]= new Array();
 choices[16][0] = "Explorer One";
 choices[16][1] = "Netscape";
 choices[16][2] = "Gopher";
 choices[16][3] = "Mosaic";
 answers[16] = choices[16][3];
 units[16] = "112";
 comments[16] = "Id Pregunta: 2713. ";


//  Id pregunta: 2926 Año de creación de pregunta: 2009-01-01
 questions[17]= "18)  En GPRS la velocidad m&aacute;xima te&oacute;rica de conexi&oacute;n es:";
 choices[17]= new Array();
 choices[17][0] = "128 kbps";
 choices[17][1] = "171.2 kbps";
 choices[17][2] = "64.1 kbps";
 choices[17][3] = "56.6 kbps";
 answers[17] = choices[17][1];
 units[17] = "108";
 comments[17] = "Id Pregunta: 2926. Similar a examen TIC SS A 2003";


//  Id pregunta: 2940 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[18]= new Array();
 choices[18][0] = "uSCSI";
 choices[18][1] = "FCP";
 choices[18][2] = "iSCSI";
 choices[18][3] = "FCIP";
 answers[18] = choices[18][2];
 units[18] = "48,96,97";
 comments[18] = "Id Pregunta: 2940. Similar a examen TIC SS A 2004";


//  Id pregunta: 2958 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  TCP es un protocolo";
 choices[19]= new Array();
 choices[19][0] = "Orientado a conexi&oacute;n";
 choices[19][1] = "Orientado a conexi&oacute;n y no orientado a conexi&oacute;n";
 choices[19][2] = "Orientado a conexi&oacute;n y con control de errores";
 choices[19][3] = "Orientado a conexi&oacute;n y no orientado a conexi&oacute;n y con control de errores";
 answers[19] = choices[19][2];
 units[19] = "100";
 comments[19] = "Id Pregunta: 2958. Tanenbaum";


//  Id pregunta: 3002 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  Dentro de la familia de protocolos TCP/IP hay algunos que se definen como no fiables en el sentido de que no aseguran la recepci&oacute;n final en el equipo destinatario de la informaci&oacute;n. De los siguientes indique cu&aacute;l es un protocolo fiable:";
 choices[20]= new Array();
 choices[20][0] = "IP";
 choices[20][1] = "UDP";
 choices[20][2] = "TCP";
 choices[20][3] = "FDDI";
 answers[20] = choices[20][2];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3002. ";


//  Id pregunta: 3078 Año de creación de pregunta: 2005-01-01
 questions[21]= "22)  La intrusi&oacute;n de un virus inform&aacute;tico del tipo gusano (worm) en un ordenador puede afectar, en primer lugar, por ocupaci&oacute;n de todo el espacio disponible en disco:";
 choices[21]= new Array();
 choices[21][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[21][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[21][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[21][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[21] = choices[21][1];
 units[21] = "111";
 comments[21] = "Id Pregunta: 3078. ";


//  Id pregunta: 3232 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes protocolos de servicios de Internet corresponde al que se encarga de recoger el correo del buz&oacute;n de usuario de la m&aacute;quina servidora y lo trae a un directorio del disco duro del PC del usuario?:";
 choices[22]= new Array();
 choices[22][0] = "POP3";
 choices[22][1] = "SMTP";
 choices[22][2] = "X.400";
 choices[22][3] = "MIME";
 answers[22] = choices[22][0];
 units[22] = "106";
 comments[22] = "Id Pregunta: 3232. ";


//  Id pregunta: 3317 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n es m&aacute;s acorde con la tecnolog&iacute;a GPRS?:";
 choices[23]= new Array();
 choices[23][0] = "64 kbps";
 choices[23][1] = "256 kbps";
 choices[23][2] = "384 kbps";
 choices[23][3] = "115 kbps";
 answers[23] = choices[23][3];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3317. ";


//  Id pregunta: 3333 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Bajo el protocolo PEM:";
 choices[24]= new Array();
 choices[24][0] = "Se distinguen 3 tipos de mensajes";
 choices[24][1] = "Un mensaje MIC-CLEAR soporta confidencialidad";
 choices[24][2] = "Un mensaje MIC-Only solo envia la cabecera";
 choices[24][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[24] = choices[24][0];
 units[24] = "106";
 comments[24] = "Id Pregunta: 3333. ";


//  Id pregunta: 3357 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  De los protocolos para proporcionar seguridad en internet es cierto que:";
 choices[25]= new Array();
 choices[25][0] = "IPSec no es transparente a las aplicaciones";
 choices[25][1] = "PPP asegura s&oacute;lo un enlace, pero no la conexi&oacute;n completa";
 choices[25][2] = "WTLS es m&aacute;s complejo que TLS ya que se adapta al entorno inal&aacute;mbrico";
 choices[25][3] = "Los protocolos a nivel de aplicaci&oacute;n son comunes a grupos de aplicaciones seg&uacute;n su funcionalidad";
 answers[25] = choices[25][1];
 units[25] = "111";
 comments[25] = "Id Pregunta: 3357. ";


//  Id pregunta: 3370 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Dentro de los sistemas m&oacute;viles celulares el t&eacute;rmino 'handover' hace referencia a los problemas relativos a:";
 choices[26]= new Array();
 choices[26][0] = "Traspaso del m&oacute;vil de una c&eacute;lula a otra";
 choices[26][1] = "La incompatibilidad entre sistemas";
 choices[26][2] = "Los sistemas de directorio X.500";
 choices[26][3] = "Los problemas debidos a la saturaci&oacute;n del espectro radioel&eacute;ctrico";
 answers[26] = choices[26][0];
 units[26] = "108";
 comments[26] = "Id Pregunta: 3370. ";


//  Id pregunta: 3379 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  El interfaz A-bis en GSM es el que va entre:";
 choices[27]= new Array();
 choices[27][0] = "BTS y BSC";
 choices[27][1] = "MSC y HLR";
 choices[27][2] = "HLR y VLR";
 choices[27][3] = "BSC y MSC";
 answers[27] = choices[27][0];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3379. ";


//  Id pregunta: 3419 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  Indicar cu&aacute;l de las siguientes desventajas no corresponde al uso de un filtro de paquetes como cortafuegos:";
 choices[28]= new Array();
 choices[28][0] = "Sobrecarga";
 choices[28][1] = "Dificultad de la implementaci&oacute;n de reglas de filtrado";
 choices[28][2] = "Posibilidad de ataques de &quot;IP spoofing&quot;";
 choices[28][3] = "Posibilidad de ataques de &quot;source routing&quot;";
 answers[28] = choices[28][0];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3419. ";


//  Id pregunta: 3553 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  En sistemas de informaci&oacute;n y comunicaciones, MAP es el acr&oacute;nimo de:";
 choices[29]= new Array();
 choices[29][0] = "Multimedia application Protocol";
 choices[29][1] = "Mediagateway Advanced Protocol";
 choices[29][2] = "Medium Access Protocol";
 choices[29][3] = "Mobile Application Part";
 answers[29] = choices[29][3];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3553. ";


//  Id pregunta: 3622 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  La norma X400 de la ITU-T se refiere a:";
 choices[30]= new Array();
 choices[30][0] = "Servicios de directorio";
 choices[30][1] = "Correo electr&oacute;nico";
 choices[30][2] = "Interfaz RS-232";
 choices[30][3] = "Interfaz de comunicaci&oacute;n de paquetes";
 answers[30] = choices[30][1];
 units[30] = "106";
 comments[30] = "Id Pregunta: 3622. ";


//  Id pregunta: 3699 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Las fibras &oacute;pticas:";
 choices[31]= new Array();
 choices[31][0] = "Presentan mayor atenuaci&oacute;n que los pares coaxiales";
 choices[31][1] = "Se necesitan efectuar conversiones O/E y O/E en los terminales emisor y receptor, respectivamente";
 choices[31][2] = "La distorsi&oacute;n multimodo se produce, sobre todo en las de &iacute;ndice gradual";
 choices[31][3] = "Son inmunes a las interferencias electromagn&eacute;ticas";
 answers[31] = choices[31][3];
 units[31] = "99";
 comments[31] = "Id Pregunta: 3699. ";


//  Id pregunta: 3714 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Los barcos cableros:";
 choices[32]= new Array();
 choices[32][0] = "No existen";
 choices[32][1] = "Son barcos-factor&iacute;a que fabrican cableado de altas prestaciones en alta mar aprovechando las mejores condiciones fiscales de las aguas internacionales";
 choices[32][2] = "Son barcos cuya misi&oacute;n principal es instalar en el fondo marino los cables submarinos de alta capacidad que unen distintos puntos separados mediante mares u oc&eacute;anos";
 choices[32][3] = "Todo lo anterior es falso";
 answers[32] = choices[32][2];
 units[32] = "99";
 comments[32] = "Id Pregunta: 3714. ";


//  Id pregunta: 3808 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Seg&uacute;n la norma X.400, &iquest;de cu&aacute;ntas partes consta un mensaje interpersonal (IM)?:";
 choices[33]= new Array();
 choices[33][0] = "Una";
 choices[33][1] = "Dos";
 choices[33][2] = "Tres";
 choices[33][3] = "Tantas como tipos de informaci&oacute;n contenga el mensaje";
 answers[33] = choices[33][1];
 units[33] = "106";
 comments[33] = "Id Pregunta: 3808. ";


//  Id pregunta: 3811 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Seg&uacute;n las RFCs 822 y 2822, sobre el formato de los mensajes de correo electr&oacute;nico, &eacute;stos se componen de:";
 choices[34]= new Array();
 choices[34][0] = "sobre, cabeceras y cuerpo";
 choices[34][1] = "cabeceras, cuerpo y cola";
 choices[34][2] = "sobre, cabeceras, cuerpo y cola";
 choices[34][3] = "cabeceras y cuerpo";
 answers[34] = choices[34][0];
 units[34] = "106";
 comments[34] = "Id Pregunta: 3811. ";


//  Id pregunta: 3875 Año de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no es un tipo de componente Java?:";
 choices[35]= new Array();
 choices[35][0] = "Enterprise Java Beans (EJB).";
 choices[35][1] = "Servlets.";
 choices[35][2] = "Java Platform Enterprise Edition (J2EE).";
 choices[35][3] = "JavaServer Pages (JSP).";
 answers[35] = choices[35][2];
 units[35] = "116";
 comments[35] = "Id Pregunta: 3875. Junta Andaluc&iacute;a";


//  Id pregunta: 3883 Año de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;De qu&eacute; manera se puede balancear una granja de servidores?";
 choices[36]= new Array();
 choices[36][0] = "Se puede utilizar un balanceador hardware si hay comunicaci&oacute;n entre los nodos de la granja";
 choices[36][1] = "Se puede utilizar  un software cargado en cada nodo para repartir la carga entre los mismos";
 choices[36][2] = "Se puede hacer el balanceo con un balanceador hardware como con un balanceador software";
 choices[36][3] = "Ninguna de las respuestas es cierta";
 answers[36] = choices[36][2];
 units[36] = "113";
 comments[36] = "Id Pregunta: 3883. ";


//  Id pregunta: 3904 Año de creación de pregunta: 2003-01-01
 questions[37]= "38)  Sobre el Entorno Dom&eacute;stico Virtual o VHE (Virtual Home Environment) puede decirse que:";
 choices[37]= new Array();
 choices[37][0] = "Es un nuevo est&aacute;ndar de interfaz dom&oacute;tica entre electrodom&eacute;sticos";
 choices[37][1] = "Es un concepto ligado a la tecnolog&iacute;a UMTS";
 choices[37][2] = "Es una norma de intercomunicaci&oacute;n inal&aacute;mbrica para utilizar en el hogar";
 choices[37][3] = "Ninguna de las opciones anteriores es correcta";
 answers[37] = choices[37][1];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3904. ";


//  Id pregunta: 4050 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Qu&eacute; no se suele permitir en una DMZ?";
 choices[38]= new Array();
 choices[38][0] = "Conexiones de ordenadores en la DMZ a ordenadores en la red interna";
 choices[38][1] = "Conexiones de ordenadores en la red interna a ordenadores en la dmz";
 choices[38][2] = "Conexiones de ordenadores en la dmz a ordenadores en la red externa";
 choices[38][3] = "Se permiten todas las anteriores";
 answers[38] = choices[38][3];
 units[38] = "111";
 comments[38] = "Id Pregunta: 4050. ";


//  Id pregunta: 4051 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Si tenemos un web server en la DMZ &iquest;Qu&eacute; puerto t&iacute;picamente debemos abrir en el firewall?";
 choices[39]= new Array();
 choices[39][0] = "El primer puerto libre del firewall";
 choices[39][1] = "El puerto 80";
 choices[39][2] = "El primer puerto libre desde el 80";
 choices[39][3] = "No es necesario abrir puerto alguno";
 answers[39] = choices[39][1];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4051. ";


//  Id pregunta: 4069 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  El organismo encargado de conceder los dominios .es";
 choices[40]= new Array();
 choices[40][0] = "El Ministerio de Industria, Comercio y Turismo";
 choices[40][1] = "RedIRIS";
 choices[40][2] = "InterNIC";
 choices[40][3] = "Red.es";
 answers[40] = choices[40][3];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4069. ";


//  Id pregunta: 4107 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  La burbuja de las puntocom explot&oacute;:";
 choices[41]= new Array();
 choices[41][0] = "En el a&ntilde;o 1999";
 choices[41][1] = "A finales del 1999 y durante el 2000";
 choices[41][2] = "A finales del 2000 y durante el 2001";
 choices[41][3] = "A finales del 2001 y durante el 2002";
 answers[41] = choices[41][2];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4107. ";


//  Id pregunta: 4111 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[42]= new Array();
 choices[42][0] = "En las  redes P2P no existen clientes ni servidores fijos.";
 choices[42][1] = "Se necesitan servidores intermedios que mantienen la relaci&oacute;n de direcciones IP  de los usuarios de la red.";
 choices[42][2] = "La informaci&oacute;n no puede ser intercambiada sin la intervenci&oacute;n de los servidores.";
 choices[42][3] = "Todas las respuestas son correctas.";
 answers[42] = choices[42][2];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4111. ";


//  Id pregunta: 4120 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  El lugar de almacenamiento temporal de las im&aacute;genes descargadas desde una p&aacute;gina Web se llama";
 choices[43]= new Array();
 choices[43][0] = "RAM";
 choices[43][1] = "disco duro";
 choices[43][2] = "cookie";
 choices[43][3] = "cache";
 answers[43] = choices[43][3];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4120. ";


//  Id pregunta: 4129 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Servicio de directorio y registro de nombres basado en Java";
 choices[44]= new Array();
 choices[44][0] = "JNDI";
 choices[44][1] = "UDDI";
 choices[44][2] = "JINI";
 choices[44][3] = "LDAP";
 answers[44] = choices[44][0];
 units[44] = "106";
 comments[44] = "Id Pregunta: 4129. ";


//  Id pregunta: 4182 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[45]= new Array();
 choices[45][0] = "RJ11 de 6 contactos";
 choices[45][1] = "RJ45 de 6 contactos";
 choices[45][2] = "RJ45 de 8 contactos";
 choices[45][3] = "RJ49 para cables STP";
 answers[45] = choices[45][2];
 units[45] = "99";
 comments[45] = "Id Pregunta: 4182. ";


//  Id pregunta: 4221 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  Indique cu&aacute;l de las siguientes afirmaciones sobre los lenguajes RDF y OWL empleados en la web sem&aacute;ntica es cierta";
 choices[46]= new Array();
 choices[46][0] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML bien formado";
 choices[46][1] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML v&aacute;lido";
 choices[46][2] = "En OWL DL, una clase no puede ser instancia de otra clase";
 choices[46][3] = "OWL Full ofrece garant&iacute;as computacionales de completitud";
 answers[46] = choices[46][2];
 units[46] = "69";
 comments[46] = "Id Pregunta: 4221. ";


//  Id pregunta: 4236 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es el nombre del paquete open source Java que se utiliza para la generaci&oacute;n de informes?";
 choices[47]= new Array();
 choices[47][0] = "iReport";
 choices[47][1] = "SaintReport";
 choices[47][2] = "JasperReports";
 choices[47][3] = "xStream";
 answers[47] = choices[47][2];
 units[47] = "60,116";
 comments[47] = "Id Pregunta: 4236. ";


//  Id pregunta: 4380 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Un sistema pide a los usuarios c&oacute;digo de usuario y clave para identificarse. Los datos de los usuarios se almacenan en la base de datos, a excepci&oacute;n de las claves que se guardan en un fichero encriptado del sistema, que se actualiza cuando los usuarios cambian su clave. Este sistema ha demostrado ser lento y poco seguro. Se&ntilde;ale la opci&oacute;n m&aacute;s adecuada para mejorarlo:";
 choices[48]= new Array();
 choices[48][0] = "Indexar el fichero para que el acceso sea m&aacute;s r&aacute;pido.";
 choices[48][1] = "Guardar las claves encriptadas en un campo de la tabla de usuarios.";
 choices[48][2] = "Dividir el fichero en varios ficheros para mejorar el acceso, guardando en un campo de la tabla de usuarios el nombre del fichero donde reside la clave de cada usuario.";
 choices[48][3] = "No guardar la clave, gener&aacute;ndola mediante una funci&oacute;n hash aplicada al c&oacute;digo.";
 answers[48] = choices[48][1];
 units[48] = "73";
 comments[48] = "Id Pregunta: 4380. ";


//  Id pregunta: 4485 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet:";
 choices[49]= new Array();
 choices[49][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[49][1] = "Acceden el medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[49][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por Io que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones";
 choices[49][3] = "Nunca acceden Si tras un primer intento se detecto una colisi&oacute;n.";
 answers[49] = choices[49][1];
 units[49] = "99";
 comments[49] = "Id Pregunta: 4485. ";


//  Id pregunta: 4563 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Las funciones de mediaci&oacute;n y arbitraje atribuidas por la Ley de Propiedad Intelectual son ejercidas por";
 choices[50]= new Array();
 choices[50][0] = "el Comit&eacute; Mediador y Arbitral de Ia Propiedad intelectual";
 choices[50][1] = "el Comit&eacute; Nacional de la Propiedad Intelectual";
 choices[50][2] = "la Comisi&oacute;n Nacional Mediadora y Arbitral de la Propiedad Intelectual";
 choices[50][3] = "Ia Comisi&oacute;n Mediadora y Arbitral de Ia Propiedad Intelectual";
 answers[50] = choices[50][3];
 units[50] = "36";
 comments[50] = "Id Pregunta: 4563. ";


//  Id pregunta: 4639 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  Quien NO es un participante en la actividad An&aacute;lisis de Consistencia y Especificaci&oacute;n de Requisitos del proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[51]= new Array();
 choices[51][0] = "usuarios expertos";
 choices[51][1] = "Analistas";
 choices[51][2] = "jefe de proyecto";
 choices[51][3] = "equipo de arquitectura";
 answers[51] = choices[51][2];
 units[51] = "86";
 comments[51] = "Id Pregunta: 4639. ";


//  Id pregunta: 4663 Año de creación de pregunta: 2009-01-01
 questions[52]= "53)  Modulaci&oacute;n empleada en la tecnolog&iacute;a HSDPA en R5 para el enlace descendente";
 choices[52]= new Array();
 choices[52][0] = "4QAM y QPSK";
 choices[52][1] = "8QAM y QPSK";
 choices[52][2] = "16 QAM y QPSK";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][2];
 units[52] = "108";
 comments[52] = "Id Pregunta: 4663. ";


//  Id pregunta: 4918 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Qu&eacute; afirmaci&oacute;n es incorrecta?:";
 choices[53]= new Array();
 choices[53][0] = "WSDL es un documento XML.";
 choices[53][1] = "XML es un est&aacute;ndar W3C.";
 choices[53][2] = "SOAP requiere de HTTP o SMTP como protocolos de transporte.";
 choices[53][3] = "Las PDAs pueden usar Servicios Web.";
 answers[53] = choices[53][2];
 units[53] = "69";
 comments[53] = "Id Pregunta: 4918. Examen TIC B 2007";


//  Id pregunta: 4977 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes acciones no es necesaria para sindicar un documento de nuestra web mediante RSS?:";
 choices[54]= new Array();
 choices[54][0] = "Crear un documento RSS y guardarlo con una extensi&oacute;n .xml.";
 choices[54][1] = "Cargar el documento en nuestro sitio web.";
 choices[54][2] = "Registrase (web y documento) en un agregador RSS.";
 choices[54][3] = "Pagar el canon de registro a Red.Es.";
 answers[54] = choices[54][3];
 units[54] = "114";
 comments[54] = "Id Pregunta: 4977. Examen TIC B 2007";


//  Id pregunta: 5022 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un proceso de interfaz de M&eacute;trica v3?:";
 choices[55]= new Array();
 choices[55][0] = "Aseguramiento de la calidad";
 choices[55][1] = "Gesti&oacute;n de proyectos";
 choices[55][2] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[55][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 answers[55] = choices[55][3];
 units[55] = "86";
 comments[55] = "Id Pregunta: 5022. Examen TIC A 2007";


//  Id pregunta: 5041 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece como infracci&oacute;n leve:";
 choices[56]= new Array();
 choices[56][0] = "La realizaci&oacute;n de actividades sin t&iacute;tulo habilitante cuando sea legalmente necesario";
 choices[56][1] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en lanormativa reguladora de las telecomunicaciones, sea necesaria";
 choices[56][2] = "No facilitar los datos requeridos por la Administraci&oacute;n o retrasar injustificadamente su aportaci&oacute;n cuando resulte exigible conforme a lo previsto por la normativa reguladora de las comunicaciones electr&oacute;nicas.";
 choices[56][3] = " La transferencia de t&iacute;tulos habilitantes o cesi&oacute;n de derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico, sin cumplir con los requisitos establecidos a tal efecto por la normativa de desarrollo de esta Ley";
 answers[56] = choices[56][2];
 units[56] = "110";
 comments[56] = "Id Pregunta: 5041. Examen TIC A 2007. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 5075 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  El XML (Extensible Markup Language) ha sido desarrollado por el W3C. Indique cu&aacute;l de las siguientesafirmaciones es falsa:";
 choices[57]= new Array();
 choices[57][0] = "Proviene del SGML";
 choices[57][1] = "Pretende ser un est&aacute;ndar para el intercambio de informaci&oacute;n entre plataformas no circunscritoexclusivamente a Internet";
 choices[57][2] = "Dada su extensibilidad no se soporta en bases de datos sino que requiere formatos de texto plano";
 choices[57][3] = "No es un lenguaje propiamente dicho sino un metalenguaje creado para definir lenguages que cubrandiferentes necesidades";
 answers[57] = choices[57][2];
 units[57] = "69";
 comments[57] = "Id Pregunta: 5075. Examen TIC A 2007";


//  Id pregunta: 5222 Año de creación de pregunta: 2007-01-01
 questions[58]= "59)  La actividad &quot;Asignaci&oacute;n detallada de tareas&quot; a qu&eacute; grupo de actividades pertenece";
 choices[58]= new Array();
 choices[58][0] = "Actividades de Inicio de Proyecto (GPI)";
 choices[58][1] = "Actividades de Seguimiento y Control (GPS)";
 choices[58][2] = "Actividades de Finalizaci&oacute;n de Proyecto";
 choices[58][3] = "Actividades de Planificaci&oacute;n de Proyecto (GPP)";
 answers[58] = choices[58][1];
 units[58] = "86";
 comments[58] = "Id Pregunta: 5222. ";


//  Id pregunta: 5239 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Una de las siguientes caracter&iacute;sticas no es propia de la planificaci&oacute;n estrat&eacute;gica:";
 choices[59]= new Array();
 choices[59][0] = "Su alcance, afecta generalmente a toda la organizaci&oacute;n";
 choices[59][1] = "Detalla los recursos para alcanzar las formulaciones fijadas en los planes estrat&eacute;gicos";
 choices[59][2] = "La alta direcci&oacute;n est&aacute; implicada en la planificaci&oacute;n estrat&eacute;gica";
 choices[59][3] = "Proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo objetivos a largo plazo";
 answers[59] = choices[59][1];
 units[59] = "77";
 comments[59] = "Id Pregunta: 5239. ";


//  Id pregunta: 5277 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  Indique cu&aacute;l no es una ventaja de la fibra &oacute;ptica frente a los cableados de cobre:";
 choices[60]= new Array();
 choices[60][0] = "Mayor ancho de banda.";
 choices[60][1] = "Inmunidad al ruido electromagn&eacute;tico.";
 choices[60][2] = "Instalaci&oacute;n y conexionado m&aacute;s sencilla.";
 choices[60][3] = "Menor tama&ntilde;o y peso.";
 answers[60] = choices[60][2];
 units[60] = "99";
 comments[60] = "Id Pregunta: 5277. ";


//  Id pregunta: 5280 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ...";
 choices[61]= new Array();
 choices[61][0] = "el servidor tiene un built-in de JVM.";
 choices[61][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente.";
 choices[61][2] = "el navegador tiene un built-in de JVM.";
 choices[61][3] = "los applets no necesitan una JVM.";
 answers[61] = choices[61][2];
 units[61] = "116";
 comments[61] = "Id Pregunta: 5280. ";


//  Id pregunta: 5610 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  El protocolo SMTP es estrictamente el est&aacute;ndar";
 choices[62]= new Array();
 choices[62][0] = "STD 11 que describe el formato de los mensajes de correos";
 choices[62][1] = "El STD 10 que especifica el protocolo concreto para el enviio de correo entre dos &quot;hosts&quot; TCP/IP";
 choices[62][2] = "El STD 12 para el intercambio de correo entre dos ordenadores";
 choices[62][3] = "STD 10 para describir el procedimineto de enrutado de los mensajes que se basa en el sistema de nombres de dominio";
 answers[62] = choices[62][1];
 units[62] = "106";
 comments[62] = "Id Pregunta: 5610. ";


//  Id pregunta: 5667 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  Cual de los siguientes sistemas est&aacute; colocado tradicionalmente en la DMZ de una red";
 choices[63]= new Array();
 choices[63][0] = "Servidor de aplicaciones";
 choices[63][1] = "Proxy";
 choices[63][2] = "Servidor LDAP";
 choices[63][3] = "Servidor de base de datos";
 answers[63] = choices[63][1];
 units[63] = "111";
 comments[63] = "Id Pregunta: 5667. ";


//  Id pregunta: 5749 Año de creación de pregunta: 2009-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio en una firma CAdES-BES?";
 choices[64]= new Array();
 choices[64][0] = "Definici&oacute;n del tipo de contenido";
 choices[64][1] = "Resumen del mensaje";
 choices[64][2] = "Sello de tiempo";
 choices[64][3] = "Atributos identificativos del certificado del firmante";
 answers[64] = choices[64][2];
 units[64] = "73";
 comments[64] = "Id Pregunta: 5749. ";


//  Id pregunta: 5831 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  El sub-proyecto de &quot;Apache&quot; que incluye funcionalidades de indexaci&oacute;n y b&uacute;squeda en los &iacute;ndices creados es:";
 choices[65]= new Array();
 choices[65][0] = "Watchdog";
 choices[65][1] = "Turbine";
 choices[65][2] = "Lucene";
 choices[65][3] = "Avalon";
 answers[65] = choices[65][2];
 units[65] = "62";
 comments[65] = "Id Pregunta: 5831. MAP 2008 A1";


//  Id pregunta: 5896 Año de creación de pregunta: 2009-01-01
 questions[66]= "67)  &iquest;Qu&eacute; tecnolog&iacute;as podemos utilizar, entre otras, para evitar utilizar c&oacute;digo Java en las p&aacute;ginas JSP?";
 choices[66]= new Array();
 choices[66][0] = "JSTL y EL";
 choices[66][1] = "Scriptlets";
 choices[66][2] = "JavaScript";
 choices[66][3] = "No es posible hacer tal cosa; toda p&aacute;gina JSP debe contener algo de c&oacute;digo Java";
 answers[66] = choices[66][0];
 units[66] = "116";
 comments[66] = "Id Pregunta: 5896. ";


//  Id pregunta: 5904 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[67]= new Array();
 choices[67][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n";
 choices[67][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n";
 choices[67][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n";
 choices[67][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n";
 answers[67] = choices[67][1];
 units[67] = "87";
 comments[67] = "Id Pregunta: 5904. MAP 2008 A1";


//  Id pregunta: 5917 Año de creación de pregunta: 2009-01-01
 questions[68]= "69)  La Ley 9/2014, General de Telecomunicaciones, establece los derechos de los consumidores y usuarios finales. &iquest;Cu&aacute;l de entre los siguientes apartados NO es contemplado por dicha ley como un derecho del usuario individual?";
 choices[68]= new Array();
 choices[68][0] = "Introducir cl&aacute;usulas de modificaci&oacute;n de los contratos con los operadores, para evitar un trato abusivo";
 choices[68][1] = "A recibir facturas no desglosadas cuando as&iacute; lo solicitasen";
 choices[68][2] = "A detener el desv&iacute;o autom&aacute;tico de llamadas efectuado a su terminal por parte de un tercero";
 choices[68][3] = "A impedir, mediante un procedimiento sencillo y gratuito, la prestaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen en la llamadas entrantes y a rechazar las llamadas en que dicha l&iacute;nea no aparezca identificada";
 answers[68] = choices[68][0];
 units[68] = "110";
 comments[68] = "Id Pregunta: 5917. MAP 2008 A1";


//  Id pregunta: 6224 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;les son las JSRs de las versiones v1 y v2 de la Java Portlet Specification?";
 choices[69]= new Array();
 choices[69][0] = "JSR 186 y JSR 268";
 choices[69][1] = "JSR 618 y JSR 628";
 choices[69][2] = "JSR 681 y JSR 682";
 choices[69][3] = "JSR 168 y JSR 286";
 answers[69] = choices[69][3];
 units[69] = "114";
 comments[69] = "Id Pregunta: 6224. ";


//  Id pregunta: 6229 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  El diagrama de Gantt es una herramienta para:";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n de los recursos";
 choices[70][1] = "Gesti&oacute;n de la calidad";
 choices[70][2] = "Gesti&oacute;n de los riesgos";
 choices[70][3] = "Generaci&oacute;n de gr&aacute;ficas e informes";
 answers[70] = choices[70][0];
 units[70] = "77";
 comments[70] = "Id Pregunta: 6229. TICB-2009, bloque desarrollo";


//  Id pregunta: 6251 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[71]= new Array();
 choices[71][0] = "Las pruebas de caja blanca se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[71][1] = "Las pruebas de caja blanca son pruebas de Sistema";
 choices[71][2] = "Las pruebas de caja negra se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[71][3] = "Las pruebas de caja negra son pruebas de Regresi&oacute;n";
 answers[71] = choices[71][0];
 units[71] = "87";
 comments[71] = "Id Pregunta: 6251. TICB-2009, bloque desarrollo";


//  Id pregunta: 6256 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, la especificaci&oacute;n de los requisitos de implantaci&oacute;n se realiza en:";
 choices[72]= new Array();
 choices[72][0] = "An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[72][1] = "Dise&ntilde;o de Sistema de Informaci&oacute;n";
 choices[72][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[72][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[72] = choices[72][1];
 units[72] = "86";
 comments[72] = "Id Pregunta: 6256. TICB-2009, bloque desarrollo";


//  Id pregunta: 6374 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Interoperabilidad?";
 choices[73]= new Array();
 choices[73][0] = "RD 4/2010";
 choices[73][1] = "RD 1671/2009";
 choices[73][2] = "RD 4/2009";
 choices[73][3] = "RD 1671/2007";
 answers[73] = choices[73][0];
 units[73] = "43";
 comments[73] = "Id Pregunta: 6374. ";


//  Id pregunta: 6452 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;C&oacute;mo se denomina la herramienta de presentaciones de Open Office 3.0?";
 choices[74]= new Array();
 choices[74][0] = "DRAW";
 choices[74][1] = "IMPRESS";
 choices[74][2] = "POWEPOINT";
 choices[74][3] = "IMAGE";
 answers[74] = choices[74][1];
 units[74] = "62";
 comments[74] = "Id Pregunta: 6452. Castilla La Mancha 2009";


//  Id pregunta: 6455 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  Identifique el API de JAVA que facilita el acceso a registros UDDI";
 choices[75]= new Array();
 choices[75][0] = "SAAJ";
 choices[75][1] = "JAXR";
 choices[75][2] = "SOAP";
 choices[75][3] = "StAX";
 answers[75] = choices[75][1];
 units[75] = "116";
 comments[75] = "Id Pregunta: 6455. Castilla La Mancha 2009";


//  Id pregunta: 6492 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Para los servicios de telefon&iacute;a m&oacute;vil, el modo de propagaci&oacute;n de la se&ntilde;al radioel&eacute;ctrica es:";
 choices[76]= new Array();
 choices[76][0] = "Onda de superficie";
 choices[76][1] = "Onda ionosf&eacute;rica";
 choices[76][2] = "Onda espacial";
 choices[76][3] = "Onda de dispersi&oacute;n troposf&eacute;rica";
 answers[76] = choices[76][2];
 units[76] = "108";
 comments[76] = "Id Pregunta: 6492. Castilla La Mancha 2009";


//  Id pregunta: 6496 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  En el contexto de un proceso de desarrollo, indique en qu&eacute; actividad NO participa el Grupo de Aseguramiento de la Calidad";
 choices[77]= new Array();
 choices[77][0] = "Definici&oacute;n del plan de pruebas";
 choices[77][1] = "Revisiones formales de los productos";
 choices[77][2] = "Descripci&oacute;n del proceso de software a aplicar en el proyecto";
 choices[77][3] = "Gesti&oacute;n de las desviaciones de calidad de los productos";
 answers[77] = choices[77][0];
 units[77] = "92";
 comments[77] = "Id Pregunta: 6496. Castilla La Mancha 2009";


//  Id pregunta: 6520 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  La versi&oacute;n 2.0 de JavaServer Faces (JSF) est&aacute; definida en la especificaci&oacute;n:";
 choices[78]= new Array();
 choices[78][0] = "JSR 186";
 choices[78][1] = "JSR 168";
 choices[78][2] = "JSR 175";
 choices[78][3] = "JSR 314";
 answers[78] = choices[78][3];
 units[78] = "116";
 comments[78] = "Id Pregunta: 6520. ";


//  Id pregunta: 6532 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  El marco general para la mejora de la calidad de la AGE se establece en";
 choices[79]= new Array();
 choices[79][0] = "RD 951/2003";
 choices[79][1] = "RD 952/2003";
 choices[79][2] = "RD 951/2005";
 choices[79][3] = "RD 951/2006";
 answers[79] = choices[79][2];
 units[79] = "92";
 comments[79] = "Id Pregunta: 6532. ";


//  Id pregunta: 6571 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  El campo extensions en un certificado X.509 ";
 choices[80]= new Array();
 choices[80][0] = "Permite a&ntilde;adir nuevos campos al certificado sin modificar su definici&oacute;n ASN.1";
 choices[80][1] = "Presentan Informaci&oacute;n sobre claves certificadas y pol&iacute;ticas";
 choices[80][2] = "Presentan informaci&oacute;n adicional sobre el propietario del certificado y sobre su emisor";
 choices[80][3] = "Todas las respuestas anteriores son ciertas";
 answers[80] = choices[80][3];
 units[80] = "73";
 comments[80] = "Id Pregunta: 6571. ";


//  Id pregunta: 6572 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto al modelo OSI?";
 choices[81]= new Array();
 choices[81][0] = "La capa 5 establece, mantiene y cierra el di&aacute;logo entre dos aplicaciones. Controla la organizaci&oacute;n del di&aacute;logo y su sincronizaci&oacute;n";
 choices[81][1] = "La capa 4 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 choices[81][2] = "La capa 3 proporciona transmisiones extremo a extremo";
 choices[81][3] = "La capa 2 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 answers[81] = choices[81][0];
 units[81] = "100";
 comments[81] = "Id Pregunta: 6572. ";


//  Id pregunta: 6616 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  Seg&uacute;n M&eacute;trica el grupo de Aseguramiento de la Calidad participa en el proyecto bajo el perfil de";
 choices[82]= new Array();
 choices[82][0] = "Consultor";
 choices[82][1] = "Analista";
 choices[82][2] = "Calidad";
 choices[82][3] = "Experto";
 answers[82] = choices[82][1];
 units[82] = "86";
 comments[82] = "Id Pregunta: 6616. ";


//  Id pregunta: 7270 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  Los cortafuegos de filtrado de paquetes:";
 choices[83]= new Array();
 choices[83][0] = "Funcionan a nivel de red";
 choices[83][1] = "Funcionan a a nivel de aplicaci&oacute;n";
 choices[83][2] = "Funcionan a nivel de enlace";
 choices[83][3] = "Funcionan a nivel de sesi&oacute;n";
 answers[83] = choices[83][0];
 units[83] = "111";
 comments[83] = "Id Pregunta: 7270. Examen TIC B 2009";


//  Id pregunta: 8211 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  En la aplicaci&oacute;n de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de asignaci&oacute;n de pesos a criterios que prima los criterios que tienen mayor poder de discriminaci&oacute;n entre las alternativas, se denomina:";
 choices[84]= new Array();
 choices[84][0] = "M&eacute;todo Delphi.";
 choices[84][1] = "M&eacute;todo de las Utilidades Relativas.";
 choices[84][2] = "M&eacute;todo de Saaty.";
 choices[84][3] = "M&eacute;todo de la entrop&iacute;a.";
 answers[84] = choices[84][3];
 units[84] = "34";
 comments[84] = "Id Pregunta: 8211. Examen TIC A1 2010";


//  Id pregunta: 8272 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Dentro del est&aacute;ndar del metalenguaje XML se&ntilde;ale la afirmaci&oacute;n INCORRECTA:";
 choices[85]= new Array();
 choices[85][0] = "Un DTD es un documento escrito en XML para definir el contenido y estructura de documentos XML.";
 choices[85][1] = "Los XML Schemas y los DTD permiten validar documentos XML.";
 choices[85][2] = "Los XML Schemas soportan herencia entre tipos de datos.";
 choices[85][3] = "Los DTD no est&aacute;n basados en el uso de &quot;namespaces&quot;.";
 answers[85] = choices[85][0];
 units[85] = "69";
 comments[85] = "Id Pregunta: 8272. Examen TIC A1 2010";


//  Id pregunta: 8283 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  El formato de direcci&oacute;n EUI-64 es un formato est&aacute;ndar del IEEE, que permite a un nodo autoconfigurar o asignarse autom&aacute;ticamente su propia direcci&oacute;n IPv6 de nodo, a partir de la direcci&oacute;n IEEE 802 MAC de la tarjeta de red del:";
 choices[86]= new Array();
 choices[86][0] = "Router vecino y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 choices[86][1] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/48) del router vecino al que est&aacute; conectado dicho nodo.";
 choices[86][2] = "Router vecino y del prefijo de la direcci&oacute;n de red (/48) a la que est&aacute; conectado dicho nodo.";
 choices[86][3] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 answers[86] = choices[86][3];
 units[86] = "100";
 comments[86] = "Id Pregunta: 8283. Examen TIC A1 2010";


//  Id pregunta: 8285 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  El fichero JAR de una distribuci&oacute;n JAVA , NO contiene:";
 choices[87]= new Array();
 choices[87][0] = "El fichero manifest.mf.";
 choices[87][1] = "Un fichero .class por cada clase compilada.";
 choices[87][2] = "Un fichero .sf por cada fichero firmado de la distribuci&oacute;n.";
 choices[87][3] = "Un fichero .crt con cada certificado digital utilizado para firmar las clases.";
 answers[87] = choices[87][3];
 units[87] = "60";
 comments[87] = "Id Pregunta: 8285. Examen TIC A1 2010";


//  Id pregunta: 8313 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l es el est&aacute;ndar correspondiente al m&eacute;todo de compresi&oacute;n ADPCM (Adaptative Differential Pulse Code Modulation) de la voz? ";
 choices[88]= new Array();
 choices[88][0] = "G.711.";
 choices[88][1] = "G.726.";
 choices[88][2] = "G.728. ";
 choices[88][3] = "G.729. ";
 answers[88] = choices[88][1];
 units[88] = "117";
 comments[88] = "Id Pregunta: 8313. Examen TIC A2 2010";


//  Id pregunta: 8357 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecuta en el servidor? ";
 choices[89]= new Array();
 choices[89][0] = "JavaScript";
 choices[89][1] = "Applets";
 choices[89][2] = "JSP";
 choices[89][3] = "VisualScript";
 answers[89] = choices[89][2];
 units[89] = "114";
 comments[89] = "Id Pregunta: 8357. Examen TIC A2 2010";


//  Id pregunta: 8667 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  En relaci&oacute;n a los puertos utilizados en el protocolo FTP se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[90]= new Array();
 choices[90][0] = "Utiliza el 21 para datos y el 20 para control";
 choices[90][1] = "Utiliza el 20 para datos y el 21 para control";
 choices[90][2] = "Utiliza el 23 para datos y el 25 para control";
 choices[90][3] = "Utiliza el 25 para datos y el 23 para control";
 answers[90] = choices[90][1];
 units[90] = "112";
 comments[90] = "Id Pregunta: 8667. Examen UPM A2 2011";


//  Id pregunta: 8745 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  &iquest;C&oacute;mo se define la sede electr&oacute;nica en la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP?";
 choices[91]= new Array();
 choices[91][0] = "La sede electr&oacute;nica no se define en la LAECSP, sino en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, tanto para el sector p&uacute;blico como el privado.";
 choices[91][1] = "Es aquella direcci&oacute;n electr&oacute;nica disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones cuya titularidad, gesti&oacute;n y administraci&oacute;n corresponde a una Administraci&oacute;n P&uacute;blica &oacute;rgano o entidad administrativa en el ejercicio de sus competencias";
 choices[91][2] = "Se establece simplemente como nueva denominaci&oacute;n para el registro telem&aacute;tico, ya definido en la Ley 30/1992. de 26 de noviembre de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, LRJPAC";
 choices[91][3] = "Es el centro de proceso de datos correspondiente a cada &oacute;rgano p&uacute;blico, d&oacute;nde se localizan los aplicativos mediante los cuales aqu&eacute;l ejerce sus competencias.";
 answers[91] = choices[91][1];
 units[91] = "43";
 comments[91] = "Id Pregunta: 8745. Examen TIC A2 2010 interna";


//  Id pregunta: 8748 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[92]= new Array();
 choices[92][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[92][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[92][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[92][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[92] = choices[92][0];
 units[92] = "43";
 comments[92] = "Id Pregunta: 8748. Examen TIC A2 2010 interna";


//  Id pregunta: 8843 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)   Se entiende por SSO ";
 choices[93]= new Array();
 choices[93][0] = " Un procedimiento de autenticaci&oacute;n que permite acceder a diversos recursos inform&aacute;ticos utilizando una &uacute;nica identificaci&oacute;n";
 choices[93][1] = " Un sistema basado el claves SSL para la gesti&oacute;n remota de claves sim&eacute;tricas";
 choices[93][2] = " Un sistema de gesti&oacute;n y almacenamiento de claves fraccionadas con coherencia asim&eacute;trica";
 choices[93][3] = " Un procedimiento de comunicaciones seguras entre objetos basado en sockets";
 answers[93] = choices[93][0];
 units[93] = "118";
 comments[93] = "Id Pregunta: 8843. Examen UC3M 2010";


//  Id pregunta: 8934 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Las Administraciones competentes en materia de justicia no deber&aacute;n asegurar el acceso de todos los ciudadanos a los servicios electr&oacute;nicos proporcionados en su &aacute;mbito a trav&eacute;s de:";
 choices[94]= new Array();
 choices[94][0] = "Servicios de atenci&oacute;n telef&oacute;nica";
 choices[94][1] = "Las principales p&aacute;ginas web de la Administraci&oacute;n de Justicia";
 choices[94][2] = "Puntos de informaci&oacute;n electr&oacute;nicos, ubicados en los edificios judiciales";
 choices[94][3] = "Las oficinas de informaci&oacute;n y atenci&oacute;n al p&uacute;blico";
 answers[94] = choices[94][1];
 units[94] = "43";
 comments[94] = "Id Pregunta: 8934. ";


//  Id pregunta: 8935 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[95]= new Array();
 choices[95][0] = "A obtener copias electr&oacute;nicas de los documentos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[95][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[95][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[95][3] = "Todos los anteriores lo son";
 answers[95] = choices[95][0];
 units[95] = "43";
 comments[95] = "Id Pregunta: 8935. ";


//  Id pregunta: 9030 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes no es un mapeador objeto-relacional?";
 choices[96]= new Array();
 choices[96][0] = "Postgress";
 choices[96][1] = "Hibernate";
 choices[96][2] = "TopLink";
 choices[96][3] = "Ibatis";
 answers[96] = choices[96][0];
 units[96] = "116";
 comments[96] = "Id Pregunta: 9030. ";


//  Id pregunta: 9051 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Con respecto a las siguientes siglas:";
 choices[97]= new Array();
 choices[97][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[97][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[97][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[97][3] = "Todas las anteriores";
 answers[97] = choices[97][3];
 units[97] = "108";
 comments[97] = "Id Pregunta: 9051. ";


//  Id pregunta: 9096 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[98]= new Array();
 choices[98][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[98][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[98][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[98][3] = "Todas las anteriores son verdaderas.";
 answers[98] = choices[98][3];
 units[98] = "36";
 comments[98] = "Id Pregunta: 9096. ";


//  Id pregunta: 9588 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  De acuerdo con el Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad, aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n, es la referente a la:";
 choices[99]= new Array();
 choices[99][0] = "Interoperabilidad, en general.";
 choices[99][1] = "Interoperabilidad organizativa. ";
 choices[99][2] = "Interoperabilidad t&eacute;cnica. ";
 choices[99][3] = "Interoperabilidad sem&aacute;ntica. ";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 9588. Examen TIC A2 2011";


