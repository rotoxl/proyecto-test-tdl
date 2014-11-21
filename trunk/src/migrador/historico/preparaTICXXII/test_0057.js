/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 255 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  Entre los problemas que genera el actuar sobre las cosas (acting on) en lugar de actuar con las cosas (acting with) se encuentran:";
 choices[0]= new Array();
 choices[0][0] = "Necesidad de establecer relaciones entre s&iacute;mbolos y realidad";
 choices[0][1] = "Aislamiento emocional e intelectual del trabajador";
 choices[0][2] = "Las 2 anteriores";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = choices[0][2];
 units[0] = "24";
 comments[0] = "Id Pregunta: 255. ";


//  Id pregunta: 256 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  Entre los vocales del Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos existir&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "Un diputado nombrado a propuesta del Congreso de los Diputados y un senador nombrado a propuesta del Senado";
 choices[1][1] = "Un vocal nombrado a propuesta del Consejo Superior de Inform&aacute;tica";
 choices[1][2] = "Un magistrado nombrado a propuesta del Consejo General del Poder Judicial";
 choices[1][3] = "Un abogado del Estado";
 answers[1] = choices[1][0];
 units[1] = "29";
 comments[1] = "Id Pregunta: 256. ";


//  Id pregunta: 280 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La auditoria es:";
 choices[2]= new Array();
 choices[2][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[2][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[2][2] = "Descripci&oacute;n completa de un producto software y las interrrelaciones de sus elementos";
 choices[2][3] = "Estructura organizativa, procedimientos, actividades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 answers[2] = choices[2][0];
 units[2] = "31";
 comments[2] = "Id Pregunta: 280. ";


//  Id pregunta: 309 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La gu&iacute;a XPG 4 de X/OPEN apareci&oacute; en:";
 choices[3]= new Array();
 choices[3][0] = "1989";
 choices[3][1] = "1990";
 choices[3][2] = "1991";
 choices[3][3] = "1992";
 answers[3] = choices[3][3];
 units[3] = "40";
 comments[3] = "Id Pregunta: 309. XPG";


//  Id pregunta: 340 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  La red de comunicaci&oacute;n en c&iacute;rculo de una organizaci&oacute;n es:";
 choices[4]= new Array();
 choices[4][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[4][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[4][2] = "Cada sujeto se comunica con todos los restantes";
 choices[4][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[4] = choices[4][3];
 units[4] = "23";
 comments[4] = "Id Pregunta: 340. ";


//  Id pregunta: 706 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  DTD se emplea para:";
 choices[5]= new Array();
 choices[5][0] = "Crear documentos XML bien formados";
 choices[5][1] = "Formatear documentos XML";
 choices[5][2] = "Transformar documentos HTML en XML";
 choices[5][3] = "Validar documentos XML";
 answers[5] = choices[5][3];
 units[5] = "69";
 comments[5] = "Id Pregunta: 706. Similar a examen TIC SS A 2004";


//  Id pregunta: 716 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  En el lenguaje Java, la misi&oacute;n del recolector de basura (barbage collector) es:";
 choices[6]= new Array();
 choices[6][0] = "Limpiar o eliminar los objetos no usados o referenciados";
 choices[6][1] = "En los que en otros entornos de programcaci&oacute;n se llama depurador o debugger";
 choices[6][2] = "Es parte del estandar JDBC para acceder a tablas de bases de datos";
 choices[6][3] = "Java no dispone de tal mecanismo &quot;garbage collector&quot;";
 answers[6] = choices[6][0];
 units[6] = "60";
 comments[6] = "Id Pregunta: 716. Examen TIC MAP B 2004";


//  Id pregunta: 798 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; tienen en com&uacute;n Sony, Philips, Nokia, Panasonic, HP y Microsoft?:";
 choices[7]= new Array();
 choices[7][0] = "Fueron las &uacute;nicas multinacionales en el sector TIC con beneficios en 2002";
 choices[7][1] = "Todas se caracterizan por su pol&iacute;tica monopol&iacute;stica";
 choices[7][2] = "Todas fabrican perif&eacute;ricos m&oacute;viles ";
 choices[7][3] = "Todas pertenecen, entre otras, al DHWG (Digital Home Working Group)";
 answers[7] = choices[7][3];
 units[7] = "48";
 comments[7] = "Id Pregunta: 798. ";


//  Id pregunta: 960 Año de creación de pregunta: 2005-01-01
 questions[8]= "9)  Con respecto a X.500 y LDAP, indicar la respuesta incorrecta:";
 choices[8]= new Array();
 choices[8][0] = "X.500 utiliza ASN.1 para la formaci&oacute;n de los mensajes, y LDAP utiliza cadenas de caracteres simples para la representaci&oacute;n de Distinguished Names ";
 choices[8][1] = "LDAP no posee el servicio de modificaci&oacute;n REMOVE perteneciente a DAP";
 choices[8][2] = "X.500 y LDAP funcionan sobre la pila de protocolos OSI y TCP/IP respectivamente";
 choices[8][3] = "Un dominio de gesti&oacute;n de directorio est&aacute; formado, como m&iacute;nimo, por: 1 DSA, 1 DUA y 1 esquema (visi&oacute;n externa del dominio)";
 answers[8] = choices[8][3];
 units[8] = "73";
 comments[8] = "Id Pregunta: 960. ";


//  Id pregunta: 1062 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  El tiempo de latencia en un disco:";
 choices[9]= new Array();
 choices[9][0] = "Tiempo medio necesario para que la informaci&oacute;n pase por debajo de la cabeza de lectura-escritura cuandoest&aacute; posicionada sobre la pista adecuada";
 choices[9][1] = "Corresponde al tiempo empleado para realizar la mitad del giro";
 choices[9][2] = "Es equivalente al tiempo de espera";
 choices[9][3] = "Todas las respuestas anteriores son ciertas";
 answers[9] = choices[9][3];
 units[9] = "48";
 comments[9] = "Id Pregunta: 1062. ";


//  Id pregunta: 1178 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indicar cu&aacute;l de las siguientes no es una tendencia en el desarrollo de Sistemas Basados en el Conocimiento (SBC):";
 choices[10]= new Array();
 choices[10][0] = "Los SBC se conciben como sistemas que han de integrarse dentro de otros, en vez de trabajar en solitario";
 choices[10][1] = "Cada vez son m&aacute;s frecuentadas los SBC h&iacute;bridos, que combinan diferentes t&eacute;cnicas de representaci&oacute;n del conocimiento, frente a los de reglas puros";
 choices[10][2] = "Cada vez m&aacute;s se concibe a los SBC como un sistema de procesamiento especial de la informaci&oacute;n";
 choices[10][3] = "Cada vez se presta m&aacute;s atenci&oacute;n a conceptos tales como: ciclo de vida del proyecto, mantenimiento de sistemas, soluciones y retorno esperable, y metodolog&iacute;as de construcci&oacute;n";
 answers[10] = choices[10][2];
 units[10] = "64";
 comments[10] = "Id Pregunta: 1178. ";


//  Id pregunta: 1216 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  La deducci&oacute;n por medio de los sistemas de Kleene en inteligencia artificial hace referencia a:";
 choices[11]= new Array();
 choices[11][0] = "La orientaci&oacute;n heur&iacute;stica";
 choices[11][1] = "La orientaci&oacute;n l&oacute;gica";
 choices[11][2] = "La representaci&oacute;n del conocimiento";
 choices[11][3] = "Las redes sem&aacute;nticas";
 answers[11] = choices[11][1];
 units[11] = "63";
 comments[11] = "Id Pregunta: 1216. ";


//  Id pregunta: 1721 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  Cu&aacute;l es la misi&oacute;n del planificador (scheduler) de un SO";
 choices[12]= new Array();
 choices[12][0] = "Seleccionar el proceso que se va a ejecutar a continuaci&oacute;n";
 choices[12][1] = "Poner en ejecuci&oacute;n el proceso seleccionado";
 choices[12][2] = "Controlar la memoria principal";
 choices[12][3] = "Expulsar al proceso en ejecuci&oacute;n";
 answers[12] = choices[12][0];
 units[12] = "52";
 comments[12] = "Id Pregunta: 1721. ";


//  Id pregunta: 1873 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  Indicar la afirmaci&oacute;n falsa en relaci&oacute;n a las notificaciones telem&aacute;ticas cuya regulaci&oacute;n se introduce en el RD 209/2003.";
 choices[13]= new Array();
 choices[13][0] = "La notificaci&oacute;n se practicar&aacute; s&oacute;lo para los procedimientos expresamente se&ntilde;alados por el interesado";
 choices[13][1] = "El interesado deber&aacute; contar con un certificado digital X.509v3 emitido a su nombre o de la empresa que represente";
 choices[13][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 choices[13][3] = "En cualquier caso, la direcci&oacute;n electr&oacute;nica  &uacute;nica tendr&aacute; car&aacute;cter indefinido.";
 answers[13] = choices[13][3];
 units[13] = "30";
 comments[13] = "Id Pregunta: 1873. ";


//  Id pregunta: 2069 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  No es una caracter&iacute;stica de la orientaci&oacute;n a objetos";
 choices[14]= new Array();
 choices[14][0] = "la programaci&oacute;n funcional";
 choices[14][1] = "El acoplamiento d&eacute;bil";
 choices[14][2] = "La ocultaci&oacute;n de la implementacion";
 choices[14][3] = "el polimorfismo";
 answers[14] = choices[14][0];
 units[14] = "82";
 comments[14] = "Id Pregunta: 2069. ";


//  Id pregunta: 2239 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Cada ocurrencia de un tipo de entidad o interrelaci&oacute;n toma valores a partir de la observaci&oacute;n del mundo real Al conjunto de posibles valores que puede tomar una cierta caracter&iacute;stica se llama:";
 choices[15]= new Array();
 choices[15][0] = "Atributo";
 choices[15][1] = "Dominio";
 choices[15][2] = "Relaci&oacute;n";
 choices[15][3] = "Restricci&oacute;n";
 answers[15] = choices[15][1];
 units[15] = "80";
 comments[15] = "Id Pregunta: 2239. ";


//  Id pregunta: 2376 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Es una m&eacute;trica de complejidad:";
 choices[16]= new Array();
 choices[16][0] = "Halstead";
 choices[16][1] = "McCavendish";
 choices[16][2] = "McCall";
 choices[16][3] = "Dominique";
 answers[16] = choices[16][0];
 units[16] = "88";
 comments[16] = "Id Pregunta: 2376. ";


//  Id pregunta: 2535 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  La codificaci&oacute;n progresiva es una t&eacute;cnica usada en la comprensi&oacute;n de im&aacute;genes basada en:";
 choices[17]= new Array();
 choices[17][0] = "La proximidad espacial (la poca variaci&oacute;n entre pixels contiguos)";
 choices[17][1] = "La proximidad temporal (la poca variaci&oacute;n entre im&aacute;genes temporalmente consecutivas)";
 choices[17][2] = "La relevancia de la informaci&oacute;n";
 choices[17][3] = "T&eacute;cnicas aleatorias";
 answers[17] = choices[17][2];
 units[17] = "93";
 comments[17] = "Id Pregunta: 2535. ";


//  Id pregunta: 2562 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  &iquest;Qu&eacute; significa que una Organizaci&oacute;n esta en el Nivel 2 del CMM?";
 choices[18]= new Array();
 choices[18][0] = "En este nivel se logran establecer las pol&iacute;ticas para adminsitrar un proyecto de software y los procedimientos para lograrlo, esto se realiza en base a la experiencia obtenida en proyectos similares.";
 choices[18][1] = "En este nivel, el proceso est&aacute;ndar para el desarrollo y mantenimiento de software se documenta, tanto desde el punto de vista t&eacute;cnico como administrativo. Se explotan efectivamente pr&aacute;cticas de ingenier&iacute;a de software para estandarizar los procesos.";
 choices[18][2] = "Todas son correctas";
 choices[18][3] = "En este nivel la empresa carece de buenas pr&aacute;cticas de ingenier&iacute;a de software, ni existe una planeaci&oacute;n efectiva. Los proyectos generalmente abandonan los planes realizados en etapas de crisis.";
 answers[18] = choices[18][0];
 units[18] = "87,88,92";
 comments[18] = "Id Pregunta: 2562. ";


//  Id pregunta: 2634 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  El  prototipado de sistemas de informaci&oacute;n, seg&uacute;n M&eacute;trica V3.";
 choices[19]= new Array();
 choices[19][0] = "Tiene como objetivo elaborar un modelo o maqueta de las interfaces entre el sistema y el usuario para evaluar el rendimiento y funcionalidad del sistema.";
 choices[19][1] = "Es la t&eacute;cnica principal para obtener un cat&aacute;logo de requisitos del usuario de forma alternativa a la obtenida en la fase del an&aacute;sis del sistema.";
 choices[19][2] = "Es una pr&aacute;ctica cuyo aspecto clave es la identificaci&oacute;n de los usuarios a los que va a dirigir, teniendo en cuenta que debe responder a diferentes individualidades, con distintos conocimientos y habilidades.";
 choices[19][3] = "Se debe centrar en las funciones fundamentales, ignorando aquellos atributos relacionados con el aspecto est&eacute;tico como son el color y el sonido y en general todo aspecto vidual del sistema";
 answers[19] = choices[19][2];
 units[19] = "85,86";
 comments[19] = "Id Pregunta: 2634. EXAMEN CASTILLA LA MANCHA";


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


//  Id pregunta: 2740 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  Las pruebas de cobertura de sentencias pasando por todas ellas y probando todas las bifurcaciones programadas son las pruebas de:";
 choices[21]= new Array();
 choices[21][0] = "Caja blanca";
 choices[21][1] = "Caja negra";
 choices[21][2] = "Integraci&oacute;n";
 choices[21][3] = "Aceptaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "79";
 comments[21] = "Id Pregunta: 2740. ";


//  Id pregunta: 2850 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  Entre los factores de complejidad del Habla no se encuentra";
 choices[22]= new Array();
 choices[22][0] = "el locutor";
 choices[22][1] = "el vocabulario";
 choices[22][2] = "la Gram&aacute;tica";
 choices[22][3] = "todos los anteriores son factores de complejidad del Habla";
 answers[22] = choices[22][3];
 units[22] = "94";
 comments[22] = "Id Pregunta: 2850. ";


//  Id pregunta: 2865 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Las Normas Gamma son unas t&eacute;cnicas de recuperaci&oacute;n de informaci&oacute;n";
 choices[23]= new Array();
 choices[23][0] = "tambi&eacute;n conocidas como retroalimentaci&oacute;n";
 choices[23][1] = "donde no es posible modificar el rigor con que se interpretan los operadores &quot;o&quot; &eacute; &quot;y&quot;";
 choices[23][2] = "que asignan valores relativos de importancia a los t&eacute;rminos de la consulta y grados de indexaci&oacute;n a los t&eacute;rminos de cada documento";
 choices[23][3] = "menos eficaces que las basadas en sistemas booleanos tradicionales";
 answers[23] = choices[23][2];
 units[23] = "96";
 comments[23] = "Id Pregunta: 2865. ";


//  Id pregunta: 3063 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  En las transmisiones de se&ntilde;ales el&eacute;ctricas a las perturbaciones producidas en sistemas no lineales y que consisten en la aparici&oacute;n en el receptor de nuevas componentes espectrales de segundo orden se las llama:";
 choices[24]= new Array();
 choices[24][0] = "Distorsi&oacute;n no lineal";
 choices[24][1] = "Distorsi&oacute;n lineal de segundo orden";
 choices[24][2] = "Intermodulaci&oacute;n";
 choices[24][3] = "Paradiafon&iacute;a";
 answers[24] = choices[24][2];
 units[24] = "99";
 comments[24] = "Id Pregunta: 3063. ";


//  Id pregunta: 3235 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes protocolos no pertenece al nivel de aplicaci&oacute;n?:";
 choices[25]= new Array();
 choices[25][0] = "Telnet";
 choices[25][1] = "FTP";
 choices[25][2] = "SMTP";
 choices[25][3] = "RIP";
 answers[25] = choices[25][3];
 units[25] = "99";
 comments[25] = "Id Pregunta: 3235. ";


//  Id pregunta: 3280 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.400 de OSI?:";
 choices[26]= new Array();
 choices[26][0] = "Agente de usuario (UA)";
 choices[26][1] = "Sistema de almacenamiento de mensajes (MS)";
 choices[26][2] = "Sistema de enrutamiento de mensajes (MRS)";
 choices[26][3] = "Sistema de mensajes interpersonales (IPMS)";
 answers[26] = choices[26][2];
 units[26] = "106";
 comments[26] = "Id Pregunta: 3280. ";


//  Id pregunta: 3306 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales dise&ntilde;ados para conectarse directamente a la RDSI como los tel&eacute;fonos digitales RDSI, &oacute; Adaptadores de Terminal, con una Terminaci&oacute;n de Red de tipo 2?:";
 choices[27]= new Array();
 choices[27][0] = "R";
 choices[27][1] = "S";
 choices[27][2] = "T";
 choices[27][3] = "U";
 answers[27] = choices[27][1];
 units[27] = "103";
 comments[27] = "Id Pregunta: 3306. ";


//  Id pregunta: 3383 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  El MIB est&aacute;ndar o MIB-I se complet&oacute; con:";
 choices[28]= new Array();
 choices[28][0] = "MIB-2";
 choices[28][1] = "MIB-II";
 choices[28][2] = "Con la RFC 1213";
 choices[28][3] = "La 'b' y la 'c' son correctas";
 answers[28] = choices[28][3];
 units[28] = "104";
 comments[28] = "Id Pregunta: 3383. ";


//  Id pregunta: 3402 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  Entre las unidades de datos intercambiadas entre niveles pares y adyacentes del Modelo de Referencia OSI, cu&aacute;l de las siguientes combinaciones es cierta:";
 choices[29]= new Array();
 choices[29][0] = "PDU + PCI = SDU";
 choices[29][1] = "IDU + ICI = SDU";
 choices[29][2] = "SDU + PCI = PDU";
 choices[29][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3402. ";


//  Id pregunta: 3500 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  En el modelo de referencia OSI, los problemas planteados por la falta de fiabilidad de los circuitos como consecuencia de errores en los datos recibidos se resuelven en:";
 choices[30]= new Array();
 choices[30][0] = "El nivel f&iacute;sico";
 choices[30][1] = "El nivel de enlace";
 choices[30][2] = "El nivel de red";
 choices[30][3] = "El nivel de transporte";
 answers[30] = choices[30][1];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3500. ";


//  Id pregunta: 3590 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  La capa de adaptaci&oacute;n de ATM se encarga de:";
 choices[31]= new Array();
 choices[31][0] = "Establecer y liberar los circuitos virtuales";
 choices[31][1] = "Segmentar y reenviar los paquetes mayores de una celda";
 choices[31][2] = "Generar y extraer las cabeceras de las celdas";
 choices[31][3] = "Define las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n";
 answers[31] = choices[31][1];
 units[31] = "109";
 comments[31] = "Id Pregunta: 3590. ";


//  Id pregunta: 3755 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  OFTP es:";
 choices[32]= new Array();
 choices[32][0] = "Una versi&oacute;n de TCP/IP para OS/2";
 choices[32][1] = "Odette FTP, una variaci&oacute;n de FTP dise&ntilde;ada para intercambiar ficheros en el mundo de las empresas de automoci&oacute;n";
 choices[32][2] = "Other FTP, una implementaci&oacute;n libre de FTP que es compatible con cualquier plataforma existente en el mercado";
 choices[32][3] = "Own FTP, FTP dise&ntilde;ado por Microsoft para optimizaci&oacute;n del rendimiento del intercambio de archivos entre sus servidores";
 answers[32] = choices[32][1];
 units[32] = "112";
 comments[32] = "Id Pregunta: 3755. ";


//  Id pregunta: 3857 Año de creación de pregunta: 2003-01-01
 questions[33]= "34)  El cortafuegos CheckPoint Firewall-1 es:";
 choices[33]= new Array();
 choices[33][0] = "Un cortafuegos de filtrado din&aacute;mico de paquetes";
 choices[33][1] = "Un cortafuegos de inspecci&oacute;n de estado";
 choices[33][2] = "Un cortafuegos h&iacute;brido que intercepta los paquetes entre las capas 3 y4 del modelo OSI";
 choices[33][3] = "No es nada de lo anterior";
 answers[33] = choices[33][1];
 units[33] = "111";
 comments[33] = "Id Pregunta: 3857. ";


//  Id pregunta: 3991 Año de creación de pregunta: 2006-01-01
 questions[34]= "35)  Respecto a los protocolos de routing:";
 choices[34]= new Array();
 choices[34][0] = "El protocolo de vector distancia es de routing interno (Interior Gateway Protocol).";
 choices[34][1] = "El IS-IS es utilizado como est&aacute;ndar de Internet.";
 choices[34][2] = "OSPF utiliza &aacute;reas dentro de un sistema aut&oacute;nomo, creando jerarqu&iacute;as.";
 choices[34][3] = "Todas son falsas";
 answers[34] = choices[34][0];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3991. ";


//  Id pregunta: 4002 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es el n&uacute;mero aproximado de usuarios a los que da servicio cada ONT (&quot;Optical Network Termination&quot;) en una red de cable?";
 choices[35]= new Array();
 choices[35][0] = "50";
 choices[35][1] = "500";
 choices[35][2] = "5.000";
 choices[35][3] = "50.000";
 answers[35] = choices[35][1];
 units[35] = "105";
 comments[35] = "Id Pregunta: 4002. ";


//  Id pregunta: 4005 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  Con respecto al est&aacute;ndar de servicios de directorio X500 , el protocolo utilizado para intercambiar informaci&oacute;n administrativa entre dos DSA&rsquo;s (Directory Service Agent) se denomina:";
 choices[36]= new Array();
 choices[36][0] = "DMO";
 choices[36][1] = "DOP";
 choices[36][2] = "DMD";
 choices[36][3] = "DISP";
 answers[36] = choices[36][1];
 units[36] = "106";
 comments[36] = "Id Pregunta: 4005. ";


//  Id pregunta: 4019 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;En qu&eacute; banda de frecuencias funciona Bluetooth?";
 choices[37]= new Array();
 choices[37][0] = "3,5 GHz";
 choices[37][1] = "5 GHz";
 choices[37][2] = "1,8 GHz";
 choices[37][3] = "2,45 GHz";
 answers[37] = choices[37][3];
 units[37] = "107";
 comments[37] = "Id Pregunta: 4019. ";


//  Id pregunta: 4064 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Qu&eacute; sentido tiene la ley de protecci&oacute;n intelectual?";
 choices[38]= new Array();
 choices[38][0] = "La defensa de los productos de las multinacionales";
 choices[38][1] = "Evitar que se pueda difundir el software libre";
 choices[38][2] = "Incentivar la inversi&oacute;n de las multinacionales del software y la musica";
 choices[38][3] = "La defensa de los derechos de los autores";
 answers[38] = choices[38][3];
 units[38] = "36";
 comments[38] = "Id Pregunta: 4064. ";


//  Id pregunta: 4106 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Un GigaPop es:";
 choices[39]= new Array();
 choices[39][0] = "1000 pops.";
 choices[39][1] = "Un nodo de interconexi&oacute;n del backbone de Internet 2.";
 choices[39][2] = "Ninguna de las anteriores";
 choices[39][3] = "a) y b) son ciertas.";
 answers[39] = choices[39][1];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4106. ";


//  Id pregunta: 4111 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[40]= new Array();
 choices[40][0] = "En las  redes P2P no existen clientes ni servidores fijos.";
 choices[40][1] = "Se necesitan servidores intermedios que mantienen la relaci&oacute;n de direcciones IP  de los usuarios de la red.";
 choices[40][2] = "La informaci&oacute;n no puede ser intercambiada sin la intervenci&oacute;n de los servidores.";
 choices[40][3] = "Todas las respuestas son correctas.";
 answers[40] = choices[40][2];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4111. ";


//  Id pregunta: 4126 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  Protocolo que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos. Esta definici&oacute;n no corresponde con:";
 choices[41]= new Array();
 choices[41][0] = "CORBA";
 choices[41][1] = "SOAP";
 choices[41][2] = "RMI";
 choices[41][3] = "DCOM";
 answers[41] = choices[41][3];
 units[41] = "50";
 comments[41] = "Id Pregunta: 4126. ";


//  Id pregunta: 4171 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;C&oacute;mo evita SSL un ataque de &quot;hombre en el medio&quot;?";
 choices[42]= new Array();
 choices[42][0] = "Usa certificados para autenticar la clave p&uacute;blica del servidor";
 choices[42][1] = "Usa un valor aleatorio &uacute;nico por conexi&oacute;n en el protocolo de intercambio de credenciales";
 choices[42][2] = "Usa claves de 128 bits";
 choices[42][3] = "Cada mensaje enviado incluye un n&uacute;mero de secuencia";
 answers[42] = choices[42][1];
 units[42] = "70";
 comments[42] = "Id Pregunta: 4171. ";


//  Id pregunta: 4211 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo  .NET";
 choices[43]= new Array();
 choices[43][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[43][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[43][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[43][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[43] = choices[43][1];
 units[43] = "59,115";
 comments[43] = "Id Pregunta: 4211. ";


//  Id pregunta: 4361 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Cuando sobre un Data Warehouse llevamos a cabo un proceso de Data-Minig, donde la b&uacute;squeda se dirige hacia la categorizaci&oacute;n de los registros en grupos para detectar patrones aplicables, o extraer relaciones impl&iacute;citas en los datos, estamos aplicando un modelo...";
 choices[44]= new Array();
 choices[44][0] = "De validaci&oacute;n.";
 choices[44][1] = "De verificaci&oacute;n.";
 choices[44][2] = "De descubrimiento.";
 choices[44][3] = "Predictivo.";
 answers[44] = choices[44][2];
 units[44] = "68";
 comments[44] = "Id Pregunta: 4361. ";


//  Id pregunta: 4371 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  El Ciclo de Vida del software es:";
 choices[45]= new Array();
 choices[45][0] = "Un patr&oacute;n del comportamiento de los dise&ntilde;adores.";
 choices[45][1] = "Un modelo del proceso de construcci&oacute;n del Software";
 choices[45][2] = "Un modelo de especificaciones establecido por el analista.";
 choices[45][3] = "Un esquema para integrar el sistema completo.";
 answers[45] = choices[45][1];
 units[45] = "76";
 comments[45] = "Id Pregunta: 4371. ";


//  Id pregunta: 4384 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  En el desarrollo orientado a objetos, la ocultaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Permite utilizar un m&oacute;dulo sin necesidad de conocer su estructura interna.";
 choices[46][1] = "Posibilita la clasificaci&oacute;n de los m&oacute;dulos.";
 choices[46][2] = "Hace que un m&oacute;dulo pueda adquirir formas diferentes cuando se particulariza su uso.";
 choices[46][3] = "Tiene el peligro de la aparici&oacute;n de interbloqueos entre m&oacute;dulos";
 answers[46] = choices[46][0];
 units[46] = "82";
 comments[46] = "Id Pregunta: 4384. ";


//  Id pregunta: 4387 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad, seg&uacute;n el modelo de McCall?";
 choices[47]= new Array();
 choices[47][0] = "Integridad.";
 choices[47][1] = "Completitud.";
 choices[47][2] = "Fiabilidad.";
 choices[47][3] = "Facilidad de mantenimiento.";
 answers[47] = choices[47][2];
 units[47] = "88";
 comments[47] = "Id Pregunta: 4387. ";


//  Id pregunta: 4395 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes no se considera una tarea habitual de una administrador de sistemas?";
 choices[48]= new Array();
 choices[48][0] = "Agregar y quitar usuarios.";
 choices[48][1] = "Desarrollo de aplicaciones internas.";
 choices[48][2] = "Realizar copias de seguridad.";
 choices[48][3] = "Monitorizar el sistema.";
 answers[48] = choices[48][1];
 units[48] = "26";
 comments[48] = "Id Pregunta: 4395. Examen TIC MAP B 2006";


//  Id pregunta: 4453 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  La utilidad de Microsoft para sincronizar los contenidos de un Pocket PC y una estaci&oacute;n Windows XP se denomina:";
 choices[49]= new Array();
 choices[49][0] = "MS PowerSync";
 choices[49][1] = "MS Syncronizer";
 choices[49][2] = "MS ActiveSync";
 choices[49][3] = "MS PocketSync";
 answers[49] = choices[49][2];
 units[49] = "56";
 comments[49] = "Id Pregunta: 4453. ";


//  Id pregunta: 4466 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  El algoritmo de cifrado Rijndael puede ser especificado por una clave:";
 choices[50]= new Array();
 choices[50][0] = "Fija de 256 bits";
 choices[50][1] = "Con un m&iacute;nimo de 128 bits y un m&aacute;ximo de 256 bits";
 choices[50][2] = "Fija de 128 bits";
 choices[50][3] = "Con un m&iacute;nimo de 256 bits y un m&aacute;ximo de 1024 bits";
 answers[50] = choices[50][1];
 units[50] = "72";
 comments[50] = "Id Pregunta: 4466. ";


//  Id pregunta: 4942 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  La Programaci&oacute;n Estructurada de Jackson es una t&eacute;cnica de dise&ntilde;o:";
 choices[51]= new Array();
 choices[51][0] = "Estructurado.";
 choices[51][1] = "Orientada a objetos.";
 choices[51][2] = "Para organizar los datos.";
 choices[51][3] = "De descomposici&oacute;n funcional.";
 answers[51] = choices[51][0];
 units[51] = "83,84";
 comments[51] = "Id Pregunta: 4942. Examen TIC B 2007";


//  Id pregunta: 5006 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  Seg&uacute;n Cobit, en un proceso de auditor&iacute;a un objetivo de control en TI se define como:";
 choices[52]= new Array();
 choices[52][0] = "Los soportes inform&aacute;ticos y sus sistemas de backup";
 choices[52][1] = "El resultado deseado implementando procedimientos de control en una actividad de TI particular";
 choices[52][2] = "La compatibilidad del software";
 choices[52][3] = "El tiempo medio entre fallos de los sistemas de TI";
 answers[52] = choices[52][1];
 units[52] = "98";
 comments[52] = "Id Pregunta: 5006. Examen TIC A 2007";


//  Id pregunta: 5033 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  En la planificaci&oacute;n de un proyecto representada por un diagrama de Pert, una actividad critica es una actividad:";
 choices[53]= new Array();
 choices[53][0] = "con un alto riesgo de incrementar su duraci&oacute;n";
 choices[53][1] = "con dependencia de otra actividad y de la que depende al menos una actividad";
 choices[53][2] = "en el camino cr&iacute;tico";
 choices[53][3] = "cuya duraci&oacute;n no puede modificarse";
 answers[53] = choices[53][2];
 units[53] = "77";
 comments[53] = "Id Pregunta: 5033. Examen TIC A 2007";


//  Id pregunta: 5256 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  En relaci&oacute;n a las m&eacute;tricas de calidad del Software NO es correcto afirmar:";
 choices[54]= new Array();
 choices[54][0] = "Las m&eacute;tricas  se pueden utilizar para evaluar en qu&eacute; grado el software posee las distintas caracter&iacute;sticas que definen la calidad de un producto software.";
 choices[54][1] = "Las m&eacute;tricas se apoyan en 2 tipos de atributos, internos y externos.";
 choices[54][2] = "Los atributos internos son aquellos que se pueden medir en t&eacute;rminos de la propia entidad independientemente de su comportamiento.";
 choices[54][3] = "Las m&eacute;tricas se pueden aplicar s&oacute;lo a una etapa del ciclo de vida del desarrollo del software.";
 answers[54] = choices[54][3];
 units[54] = "88";
 comments[54] = "Id Pregunta: 5256. ";


//  Id pregunta: 5259 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  La m&eacute;trica BANG:";
 choices[55]= new Array();
 choices[55][0] = "Es una m&eacute;trica de producto propuesta por De Marco, como indicador de funcionalidad entregada al usuario";
 choices[55][1] = "La medici&oacute;n se realiza sobre una especificaci&oacute;n de requisitos documentada mediante an&aacute;lisis estructurado y DFD";
 choices[55][2] = "Para formular esta m&eacute;trica se analizan las m&eacute;tricas primitivas, basadas en los elementos del DFD, del diccionario de datos y del modelo de datos";
 choices[55][3] = "Todas son correctas.";
 answers[55] = choices[55][3];
 units[55] = "88";
 comments[55] = "Id Pregunta: 5259. ";


//  Id pregunta: 5420 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Defina Throughput";
 choices[56]= new Array();
 choices[56][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 choices[56][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 choices[56][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajos por hora o transacciones por segundo)";
 choices[56][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 answers[56] = choices[56][0];
 units[56] = "45";
 comments[56] = "Id Pregunta: 5420. Castilla y Le&oacute;n";


//  Id pregunta: 5560 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Respecto a La Ley 23/2006 que modifica el TRLPI (RD 1/1996), se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[57]= new Array();
 choices[57][0] = "Transpone la Directiva 2001/29/CE.";
 choices[57][1] = "Establece medidas sancionadoras de actos de elusi&oacute;n de medidas tecnol&oacute;gicas eficaces para la protecci&oacute;n de obras.";
 choices[57][2] = "Los programas de ordenador se regir&aacute;n por su propia normativa.";
 choices[57][3] = "El can&oacute;n digital se aplicar&aacute; tanto a equipos anal&oacute;gicos como digitales, como reproductores mp3-mp4, discos duros etc.. ";
 answers[57] = choices[57][3];
 units[57] = "37";
 comments[57] = "Id Pregunta: 5560. ";


//  Id pregunta: 5573 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Qu&eacute; modelo escoger&iacute;a si tiene como objetivo mejorar el control y la calidad del gobierno de las TI a trav&eacute;s del ciclo completo de la puesta en marcha de aplicaciones?";
 choices[58]= new Array();
 choices[58][0] = "ITIL";
 choices[58][1] = "CMMI";
 choices[58][2] = "COBIT";
 choices[58][3] = "M&Eacute;TRICA";
 answers[58] = choices[58][2];
 units[58] = "98";
 comments[58] = "Id Pregunta: 5573. ";


//  Id pregunta: 5851 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  Respecto al correo electr&oacute;nico, &iquest;Qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[59]= new Array();
 choices[59][0] = "IMAP es un protocolo de env&iacute;o de correo";
 choices[59][1] = "POP es un protocolo de acceso a correo";
 choices[59][2] = "SMTP es un protocolo de transporte de mensajes";
 choices[59][3] = "MIME permite acentos en los mensajes de correo";
 answers[59] = choices[59][0];
 units[59] = "106";
 comments[59] = "Id Pregunta: 5851. Pregunta 31";


//  Id pregunta: 5887 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  Los cifrados de clave p&uacute;blica:";
 choices[60]= new Array();
 choices[60][0] = "De Diffie-Hellman basan su fortaleza en la dificultad de resolver el problema de los logaritmos discretos";
 choices[60][1] = "A igualdad de longitud de clave los basados en curvas el&iacute;pticas son tan robustos como los basados en la aritm&eacute;tica modular";
 choices[60][2] = "La llegada de los ordenadores cu&aacute;nticos no los har&aacute; m&aacute;s vulnerables a los m&eacute;todos criptoanal&iacute;ticos empleados ahora";
 choices[60][3] = "Basados en el RSA requieren m&aacute;s tiempo para descifrar que para generar sus pares de claves";
 answers[60] = choices[60][0];
 units[60] = "72";
 comments[60] = "Id Pregunta: 5887. MAP 2008 A1";


//  Id pregunta: 5905 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  Un Data Warehouse es:";
 choices[61]= new Array();
 choices[61][0] = "Una colecci&oacute;n de datos invariante en el tiempo y no vol&aacute;til.";
 choices[61][1] = "Una colecci&oacute;n de datos orientado a temas, integrados, fijos en el tiempo y no vol&aacute;tiles.";
 choices[61][2] = "Una colecci&oacute;n de datos cambiantes en el tiempo y vol&aacute;til.";
 choices[61][3] = "Una colecci&oacute;n de datos orientado a temas, integrados, cambiantes en el tiempo y no vol&aacute;tiles.";
 answers[61] = choices[61][3];
 units[61] = "68";
 comments[61] = "Id Pregunta: 5905. MAP 2008 A1";


//  Id pregunta: 6102 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  El lenguaje SQL92:";
 choices[62]= new Array();
 choices[62][0] = "Soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[62][1] = "Soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 choices[62][2] = "No soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[62][3] = "No soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 answers[62] = choices[62][0];
 units[62] = "58";
 comments[62] = "Id Pregunta: 6102. TIC A 2009";


//  Id pregunta: 6372 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  En relaci&oacute;n a lo dispuesto en el Esquema Nacional de Seguridad, un sistema de informaci&oacute;n ser&aacute; de categor&iacute;a MEDIA cuando:";
 choices[63]= new Array();
 choices[63][0] = "Las dimensiones de seguridad definidas como cr&iacute;ticas son, en su mayor&iacute;a, de nivel MEDIO.";
 choices[63][1] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna es de nivel inferior.";
 choices[63][2] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna alcanza un nivel superior.";
 choices[63][3] = "Las dimensiones de seguridad son, en su mayor&iacute;a, de nivel MEDIO.";
 answers[63] = choices[63][2];
 units[63] = "43";
 comments[63] = "Id Pregunta: 6372. Anexo I ENS";


//  Id pregunta: 6420 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Qu&eacute; es TAW?";
 choices[64]= new Array();
 choices[64][0] = "Es una familia de herramienta para el an&aacute;lisis de la accesibilidad  de sitios web.";
 choices[64][1] = "Es un Gestor de Contenidos";
 choices[64][2] = "Es un tipo de licencia de software libre";
 choices[64][3] = "Es una herramienta de workgroup";
 answers[64] = choices[64][0];
 units[64] = "39";
 comments[64] = "Id Pregunta: 6420. ";


//  Id pregunta: 6577 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  El filtrado de paquetes no proporciona";
 choices[65]= new Array();
 choices[65][0] = "Bajo nivel de seguridad";
 choices[65][1] = "Protecci&oacute;n sobre la capa de red";
 choices[65][2] = "Alto rendimiento y escalabilidad";
 choices[65][3] = "Todas las respuestas anteriores son correctas";
 answers[65] = choices[65][1];
 units[65] = "111";
 comments[65] = "Id Pregunta: 6577. ";


//  Id pregunta: 6603 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Indicar cual de las siguientes opciones NO es un contrato de suministro:";
 choices[66]= new Array();
 choices[66][0] = "La compra de un ERP";
 choices[66][1] = "El mantenimiento de las licencias del SGBD";
 choices[66][2] = "El mantenimiento de la aplicaci&oacute;n que usa el SGBD";
 choices[66][3] = "El alquiler del sistema de telecomunicaciones";
 answers[66] = choices[66][2];
 units[66] = "41";
 comments[66] = "Id Pregunta: 6603. ";


//  Id pregunta: 6619 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Seg&uacute;n M&eacute;trica la Definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales:";
 choices[67]= new Array();
 choices[67][0] = "Se realiza en el proceso de An&aacute;lisis (ASI), conjuntamente con el Plan de Pruebas";
 choices[67][1] = "Se realiza en el proceso de Dise&ntilde;o (DSI), cuando se establecen los Requisitos de Implantaci&oacute;n";
 choices[67][2] = "Se realiza en el proceso de Construcci&oacute;n (CSI), en paralelo a la ejecuci&oacute;n de las Pruebas del Sistema";
 choices[67][3] = "Se realiza en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n (IAS), antes de las Pruebas de Aceptaci&oacute;n";
 answers[67] = choices[67][2];
 units[67] = "86";
 comments[67] = "Id Pregunta: 6619. ";


//  Id pregunta: 7267 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  En el &aacute;mbito del Frame Relay, el CIR se refiere";
 choices[68]= new Array();
 choices[68][0] = "Al ratio de ocupaci&oacute;n m&aacute;xima del canal";
 choices[68][1] = "A la velocidad m&iacute;nima comprometida";
 choices[68][2] = "Al porcentaje m&aacute;ximo de tramas err&oacute;neas garantizado";
 choices[68][3] = "A la velocidad m&aacute;xima asegurada";
 answers[68] = choices[68][1];
 units[68] = "109";
 comments[68] = "Id Pregunta: 7267. Examen TIC B 2009";


//  Id pregunta: 7771 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)   El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[69]= new Array();
 choices[69][0] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[69][1] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada.";
 choices[69][2] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica.";
 choices[69][3] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad.";
 answers[69] = choices[69][2];
 units[69] = "44";
 comments[69] = "Id Pregunta: 7771. Map 2005";


//  Id pregunta: 7839 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&laquo;Thick&raquo;)?";
 choices[70]= new Array();
 choices[70][0] = " BNC.";
 choices[70][1] = " N-series.";
 choices[70][2] = " TNC.";
 choices[70][3] = " SMA-series.";
 answers[70] = choices[70][1];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7839. Map 2005";


//  Id pregunta: 7978 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?";
 choices[71]= new Array();
 choices[71][0] = " Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;ar campa&ntilde;as de marketing directo on-line.";
 choices[71][1] = " Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas.";
 choices[71][2] = " Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica.";
 choices[71][3] = " Es el Catalog Resource Management, o aplicaci&oacute;n que genera un cat&aacute;logo on-line de los productos disponibles para la venta.";
 answers[71] = choices[71][0];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7978. Map 2007";


//  Id pregunta: 8035 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   &iquest;Qu&eacute; tipos de certificado est&aacute;n incluidos en el DNIe?";
 choices[72]= new Array();
 choices[72][0] = " Autenticaci&oacute;n y firma.";
 choices[72][1] = " Cifrado y firma.";
 choices[72][2] = " Firma.";
 choices[72][3] = " Cifrado, firma y autenticaci&oacute;n.";
 answers[72] = choices[72][0];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 8035. Map 2007";


//  Id pregunta: 8062 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   En relaci&oacute;n con las notificaciones telem&aacute;ticas, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[73]= new Array();
 choices[73][0] = " Se puede solicitar para un procedimiento la notificaci&oacute;n ordinaria y la notificaci&oacute;n telem&aacute;tica.";
 choices[73][1] = " Cuando, existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que el interesado acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 choices[73][2] = " Seg&uacute;n el RD 209/2003, de 21 de febrero, la Administraci&oacute;n P&uacute;blica puede obligar, en determinados casos, a que la pr&aacute;ctica de la notificaci&oacute;n a los interesados se realice por medios telem&aacute;ticos.";
 choices[73][3] = " Si el interesado lo solicita, se puede realizar la notificaci&oacute;n telem&aacute;tica a su buz&oacute;n de correo personal que utiliza habitualmente.";
 answers[73] = choices[73][1];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 8062. Map 2007";


//  Id pregunta: 8128 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   En el conjunto de protocolos TCP/IP, &iquest;cu&aacute;ntos bits se reservan para identificar los n&uacute;meros de puerto en las cabeceras de control TCP y UDP?";
 choices[74]= new Array();
 choices[74][0] = " 16.";
 choices[74][1] = " 24.";
 choices[74][2] = " 32.";
 choices[74][3] = " 64.";
 answers[74] = choices[74][0];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 8128. Map 2008";


//  Id pregunta: 8182 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  El diagrama de despliegue se utiliza en M&eacute;trica versi&oacute;n 3 en:";
 choices[75]= new Array();
 choices[75][0] = "El dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema.";
 choices[75][1] = "El dise&ntilde;o f&iacute;sico de datos";
 choices[75][2] = "La generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[75][3] = "El dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 answers[75] = choices[75][2];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8182. Examen TIC A1 2010";


//  Id pregunta: 8320 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  Se&ntilde;ale cual de las siguientes caracter&iacute;sticas de seguridad est&aacute; incluida tanto en el est&aacute;ndar WPA2 como en el est&aacute;ndar WEP: ";
 choices[76]= new Array();
 choices[76][0] = "Intercambio din&aacute;mico de claves. ";
 choices[76][1] = "Autenticaci&oacute;n 802.1x ";
 choices[76][2] = "Preshared Keys (PSK). ";
 choices[76][3] = "Encriptaci&oacute;n AES. ";
 answers[76] = choices[76][2];
 units[76] = "107, 111";
 comments[76] = "Id Pregunta: 8320. Examen TIC A2 2010";


//  Id pregunta: 8322 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Un sistema compuesto por 15 usuarios intercambian informaci&oacute;n cifrada mediante AES. Si los canales de comunicaci&oacute;n entre usuarios es 2 a 2 (es decir, todos intercambian informaci&oacute;n con todos) &iquest;cu&aacute;ntas claves son necesarias?";
 choices[77]= new Array();
 choices[77][0] = "15.";
 choices[77][1] = "105.";
 choices[77][2] = "210.";
 choices[77][3] = "30. ";
 answers[77] = choices[77][1];
 units[77] = "72";
 comments[77] = "Id Pregunta: 8322. Examen TIC A2 2010";


//  Id pregunta: 8358 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  Se&ntilde;ale cu&aacute;l de &eacute;stas es una de las funciones del Grupo de Aseguramiento de la Calidad (seg&uacute;n M&eacute;trica v3): ";
 choices[78]= new Array();
 choices[78][0] = "Definir los recursos que se necesitan para instalar el sistema.";
 choices[78][1] = "Identificar las posibles desviac&iacute;ones en los est&aacute;ndares aplicados, as&iacute; como en los requisitos y procedimientos especificados.";
 choices[78][2] = "Notificar a los desarrolladores de las anomal&iacute;as encontradas en el proceso de desarrollo.";
 choices[78][3] = "Documentar las pruebas seg&uacute;n el est&aacute;ndar ISO 9000:2000.";
 answers[78] = choices[78][1];
 units[78] = "86";
 comments[78] = "Id Pregunta: 8358. Examen TIC A2 2010";


//  Id pregunta: 8528 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  En IPSec, el modo de funcionamiento en el que s&oacute;lo los datos son cifrados o autenticados, y el enrutamiento permanece intacto por lo que asegura la comunicaci&oacute;n extremo a extremo, se denomina:";
 choices[79]= new Array();
 choices[79][0] = "Modo t&uacute;nel.";
 choices[79][1] = "Modo transporte.";
 choices[79][2] = "Modo encapsulado.";
 choices[79][3] = "Modo transparente.";
 answers[79] = choices[79][1];
 units[79] = "111";
 comments[79] = "Id Pregunta: 8528. Examen TIC A2 2010 interna";


//  Id pregunta: 8636 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  El proceso de desarrollo de M&eacute;trica v3 contiene todas las actividades y tareas que se deben llevar a cabo para:";
 choices[80]= new Array();
 choices[80][0] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta la instalaci&oacute;n del software.";
 choices[80][1] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis del sistema hasta la construcci&oacute;n del software.";
 choices[80][2] = "Desarrollar un sistema, cubriendo desde el dise&ntilde;o hasta la construcci&oacute;n del software.";
 choices[80][3] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta el mantenimiento del software.";
 answers[80] = choices[80][0];
 units[80] = "86";
 comments[80] = "Id Pregunta: 8636. Examen TIC A2 2010 interna";


//  Id pregunta: 8651 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en M&eacute;trica v3. en el proceso de Construcci&oacute;n del sistema?";
 choices[81]= new Array();
 choices[81][0] = "Carga de Datos al entorno de operaci&oacute;n.";
 choices[81][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[81][2] = "Establecimiento del Acuerdo de Nivel de Servicio.";
 choices[81][3] = "Elaboraci&oacute;n del modelo de datos.";
 answers[81] = choices[81][1];
 units[81] = "86";
 comments[81] = "Id Pregunta: 8651. Examen TIC A2 2010 interna";


//  Id pregunta: 8901 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;cu&aacute;l de los siguientes no es un ERP?";
 choices[82]= new Array();
 choices[82][0] = "SAP";
 choices[82][1] = "Tango";
 choices[82][2] = "Calipso";
 choices[82][3] = "Twister";
 answers[82] = choices[82][3];
 units[82] = "65";
 comments[82] = "Id Pregunta: 8901. ";


//  Id pregunta: 8937 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  La publicaci&oacute;n en las sedes judiciales electr&oacute;nicas de informaciones, servicios y transacciones respetar&aacute;:";
 choices[83]= new Array();
 choices[83][0] = "S&oacute;lo los est&aacute;ndares abiertos";
 choices[83][1] = "Aquellos est&aacute;ndares que sean de uso generalizado por los ciudadanos";
 choices[83][2] = "Los est&aacute;ndares que decida la autoridad competente";
 choices[83][3] = "Todos los anteriores";
 answers[83] = choices[83][1];
 units[83] = "43";
 comments[83] = "Id Pregunta: 8937. ";


//  Id pregunta: 9055 Año de creación de pregunta: 2018-01-01
 questions[84]= "85)  &iquest;Cual de los siguientes NO es un principio del dise&ntilde;o universal ?";
 choices[84]= new Array();
 choices[84][0] = "Escaso esfuerzo f&iacute;sico";
 choices[84][1] = "Simple e intuitivo.";
 choices[84][2] = "Informaci&oacute;n f&aacute;cil de percibir";
 choices[84][3] = "universalidad";
 answers[84] = choices[84][3];
 units[84] = "39";
 comments[84] = "Id Pregunta: 9055. ";


//  Id pregunta: 9165 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  El est&aacute;ndar m&aacute;s extendido en el campo de los Sistemas de Informaci&oacute;n Geogr&aacute;fica para los servicios de cat&aacute;logo es:";
 choices[85]= new Array();
 choices[85][0] = "ISO 23950";
 choices[85][1] = "ISO 19125";
 choices[85][2] = "ISO 19115";
 choices[85][3] = "Ninguno de los anteriores se refiere a un est&aacute;ndar de servicio de cat&aacute;logo";
 answers[85] = choices[85][0];
 units[85] = "67";
 comments[85] = "Id Pregunta: 9165. ";


//  Id pregunta: 9291 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes situaciones no puede considerarse un incidente?";
 choices[86]= new Array();
 choices[86][0] = "Fallo hardware.";
 choices[86][1] = "Un usuario no autorizado de la cuenta de un usuario.";
 choices[86][2] = "Un evento cuyo impacto no genere una interrupci&oacute;n prolongada del servicio.";
 choices[86][3] = "Todos los anteriores se considerar&iacute;an incidentes.";
 answers[86] = choices[86][3];
 units[86] = "32";
 comments[86] = "Id Pregunta: 9291. ";


//  Id pregunta: 9408 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  A qu&eacute; &aacute;rea pertenece generalmente el departamento de microinform&aacute;tica?";
 choices[87]= new Array();
 choices[87][0] = "Sistemas";
 choices[87][1] = "Log&iacute;stica";
 choices[87][2] = "Comunicaciones";
 choices[87][3] = "Seguridad";
 answers[87] = choices[87][0];
 units[87] = "26";
 comments[87] = "Id Pregunta: 9408. ";


//  Id pregunta: 9467 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  En lo referente a la mensajer&iacute;a en Internet indique la afirmaci&oacute;n falsa:";
 choices[88]= new Array();
 choices[88][0] = "MIME se desarrolla en los RFCs 2045 a 2049";
 choices[88][1] = "Si un servidor que no soporta extensiones SMTP recibe un mensaje HELO, devuelve un error de sintaxis al emisor SMTP, quien deber&aacute; enviar en su lugar un mensaje de tipo EHLO";
 choices[88][2] = "El RFC 1870 permite a un receptor especificar el tama&ntilde;o m&aacute;ximo de mensaje que puede recibir";
 choices[88][3] = "El protocolo SMTP se apoya en el sistema de resoluci&oacute;n de nombres de dominio de Internet";
 answers[88] = choices[88][1];
 units[88] = "106";
 comments[88] = "Id Pregunta: 9467. ";


//  Id pregunta: 9495 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a Javascript:";
 choices[89]= new Array();
 choices[89][0] = "Es un extensi&oacute;n de Java";
 choices[89][1] = "Es un extensi&oacute;n de HTML";
 choices[89][2] = "Es un lenguaje interpretado";
 choices[89][3] = "El int&eacute;rprete de JavaScript se basa en el est&aacute;ndar ECMAScript";
 answers[89] = choices[89][0];
 units[89] = "114";
 comments[89] = "Id Pregunta: 9495. ";


//  Id pregunta: 9587 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  &iquest;A cu&aacute;l de los siguientes &aacute;mbitos establecidos en el art&iacute;culo 2 de la Ley 11/2007 NO aplica el Esquema Nacional de Seguridad (ENS)?:";
 choices[90]= new Array();
 choices[90][0] = "A la Administraci&oacute;n General del Estado, Administraciones de las Comunidades Aut&oacute;nomas y las Entidades que integran la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico vinculadas o dependientes de las mismas.";
 choices[90][1] = "A los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[90][2] = "A las relaciones entre las distintas Administraciones P&uacute;blicas.";
 choices[90][3] = "Sistemas que tratan informaci&oacute;n clasificada regulada por Ley 9/1968 de 5 de abril. ";
 answers[90] = choices[90][3];
 units[90] = "43";
 comments[90] = "Id Pregunta: 9587. Examen TIC A2 2011";


//  Id pregunta: 9629 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra &quot;libro&quot; dentro de ficheros?";
 choices[91]= new Array();
 choices[91][0] = "find -type f | xwygs grep &quot;libro&quot; ";
 choices[91][1] = "find -type f | xaygs grep &quot;libro&quot; ";
 choices[91][2] = "find -type f | xargs grep &quot;libro&quot; ";
 choices[91][3] = "find -type f | xargp grep &quot;libro&quot; ";
 answers[91] = choices[91][1];
 units[91] = "54";
 comments[91] = "Id Pregunta: 9629. Examen TIC A2 2013";


//  Id pregunta: 9644 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  Entre los &oacute;rganos de asistencia, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[92]= new Array();
 choices[92][0] = "Jurados de concursos";
 choices[92][1] = "Mesas de contrataci&oacute;n";
 choices[92][2] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[92][3] = "Ninguno de los anteriores";
 answers[92] = choices[92][2];
 units[92] = "41";
 comments[92] = "Id Pregunta: 9644. Art. 320, Art. 323 RD Legislativo 3/2011";


//  Id pregunta: 10007 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  En la direcci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n, es fundamental la gesti&oacute;n del alcance del proyecto. Ello supone";
 choices[93]= new Array();
 choices[93][0] = "estimar la duraci&oacute;n de las actividades.";
 choices[93][1] = "definir la secuencia entre las actividades.";
 choices[93][2] = "asegurar que el proyecto incluya todo el trabajo requerido, y s&oacute;lo el trabajo requerido.";
 choices[93][3] = "preparar el presupuesto de costes.";
 answers[93] = choices[93][2];
 units[93] = "27";
 comments[93] = "Id Pregunta: 10007. ";


//  Id pregunta: 10168 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  En relaci&oacute;n con los operandos del &aacute;lgebra relacional, se cumple que:";
 choices[94]= new Array();
 choices[94][0] = "La Uni&oacute;n de las relaciones R y S puede aplicarse a&uacute;n cuando R y S no tengan igual grado y/o compatibilidad de dominios";
 choices[94][1] = "El Outer Join incluye en la relaci&oacute;n resultante las tuplas de una o ambas relaciones que en los atributos comunes no tienen valores iguales o correspondientes";
 choices[94][2] = "El grado de la relaci&oacute;n resultante de la Uni&oacute;n Natural o Natural Join entre dos relaciones R y S es igual al grado de R + el grado de S";
 choices[94][3] = "La intersecci&oacute;n es un operador fundamental del &aacute;lgebra relacional";
 answers[94] = choices[94][1];
 units[94] = "58";
 comments[94] = "Id Pregunta: 10168. ";


//  Id pregunta: 10255 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Seg&uacute;n el art&iacute;culo 10 de la Ley 15/1999, LOPD, el deber de secreto: ";
 choices[95]= new Array();
 choices[95][0] = "Afecta a todos los que intervengan en el tratamiento de datos, por tiempo indefinido";
 choices[95][1] = "Afecta a todos los que intervengan en el tratamiento de datos, s&oacute;lo mientras dure dicho tratamiento";
 choices[95][2] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, por tiempo indefinido";
 choices[95][3] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, s&oacute;lo mientras dure dicho tratamiento";
 answers[95] = choices[95][0];
 units[95] = "29";
 comments[95] = "Id Pregunta: 10255. Art&iacute;culo 10 de la Ley 15/1999";


//  Id pregunta: 10272 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de b&uacute;squeda es de tipo heur&iacute;stico?";
 choices[96]= new Array();
 choices[96][0] = "B&uacute;squeda de profundida limitada";
 choices[96][1] = "B&uacute;squeda primero el mejor";
 choices[96][2] = "B&uacute;squeda de coste uniforme";
 choices[96][3] = "B&uacute;squeda bidireccional";
 answers[96] = choices[96][1];
 units[96] = "63";
 comments[96] = "Id Pregunta: 10272. ";


//  Id pregunta: 10313 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Comparando NAS (Network-attached Storage) con SAN (Storage Area Network):";
 choices[97]= new Array();
 choices[97][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[97][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[97][2] = "Ambos operan a nivel de bloque.";
 choices[97][3] = "Ambos operan a nivel de fichero.";
 answers[97] = choices[97][0];
 units[97] = "48";
 comments[97] = "Id Pregunta: 10313. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10469 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Respecto a HTML5, indique la respuesta incorrecta:";
 choices[98]= new Array();
 choices[98][0] = "Existe una API de geolocalizaci&oacute;n.";
 choices[98][1] = "Permite abrir sockets para una comunicaci&oacute;n bidireccional, full duplex con baja latencia y que se basa en el protocolo TCP.";
 choices[98][2] = "No neceita Flash para ver v&iacute;deos.";
 choices[98][3] = "Los Web Workers permiten la ejecuci&oacute;n de un &uacute;nico subproceso.";
 answers[98] = choices[98][3];
 units[98] = "69";
 comments[98] = "Id Pregunta: 10469. ";


//  Id pregunta: 10493 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Qu&eacute; comando Linux permite conocer los archivos que tiene abiertos un proceso?";
 choices[99]= new Array();
 choices[99][0] = "ps -a";
 choices[99][1] = "top";
 choices[99][2] = "fork";
 choices[99][3] = "lsof";
 answers[99] = choices[99][3];
 units[99] = "53";
 comments[99] = "Id Pregunta: 10493. ps y top muestra informaci&oacute;n de los procesos, pero no de los archivos abiertos, solo lsof hace eso";


