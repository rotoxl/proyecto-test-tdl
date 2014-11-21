/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 50 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un organismo nacional para la formulaci&oacute;n de est&aacute;ndares?:";
 choices[0]= new Array();
 choices[0][0] = "ANSI";
 choices[0][1] = "JIS";
 choices[0][2] = "DIN";
 choices[0][3] = "CEN";
 answers[0] = choices[0][3];
 units[0] = "42";
 comments[0] = "Id Pregunta: 50. ";


//  Id pregunta: 154 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El nivel de adecuaci&oacute;n AA indica:";
 choices[1]= new Array();
 choices[1][0] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1";
 choices[1][1] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1 y 2";
 choices[1][2] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2 y 3";
 choices[1][3] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2, 3 y 4";
 answers[1] = choices[1][1];
 units[1] = "39";
 comments[1] = "Id Pregunta: 154. ";


//  Id pregunta: 190 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  En la Metodolog&iacute;a MAGERIT, el evento que pueden desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales en sus activos, se denomina:";
 choices[2]= new Array();
 choices[2][0] = "Impacto";
 choices[2][1] = "Vulnerabilidad";
 choices[2][2] = "Amenaza";
 choices[2][3] = "Riesgo";
 answers[2] = choices[2][2];
 units[2] = "33";
 comments[2] = "Id Pregunta: 190. Similar a examen TIC SS A 2003";


//  Id pregunta: 292 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La decisi&oacute;n sobre si la estructura inform&aacute;tica de una organizaci&oacute;n debe ser centralizada o descentralizada, debe tomarse en la etapa de:";
 choices[3]= new Array();
 choices[3][0] = "Planificaci&oacute;n del sistema";
 choices[3][1] = "Especificaci&oacute;n del sistema";
 choices[3][2] = "Dise&ntilde;o del sistema";
 choices[3][3] = "Codificaci&oacute;n del sistema";
 answers[3] = choices[3][0];
 units[3] = "21";
 comments[3] = "Id Pregunta: 292. ";


//  Id pregunta: 346 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  La t&eacute;cnica de direcci&oacute;n en la etapa de madurez es:";
 choices[4]= new Array();
 choices[4][0] = "Orientada a ventas";
 choices[4][1] = "Informal";
 choices[4][2] = "Orientada a los recursos";
 choices[4][3] = "Orientada al control";
 answers[4] = choices[4][2];
 units[4] = "22";
 comments[4] = "Id Pregunta: 346. ";


//  Id pregunta: 357 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Las leyes de protecci&oacute;n de datos que pretenden prevenir la invasi&oacute;n de la intimidad del individuo frente al abuso de la informaci&oacute;n computarizada son las conocidas como:";
 choices[5]= new Array();
 choices[5][0] = "Leyes de primera generaci&oacute;n";
 choices[5][1] = "Leyes de segunda generaci&oacute;n";
 choices[5][2] = "Leyes de tercera generaci&oacute;n";
 choices[5][3] = "No se aplica esta clasificaci&oacute;n a este tipo de leyes";
 answers[5] = choices[5][2];
 units[5] = "36";
 comments[5] = "Id Pregunta: 357. ";


//  Id pregunta: 530 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  Un auditor inform&aacute;tico deber&aacute; verificar:";
 choices[6]= new Array();
 choices[6][0] = "Cumplimiento de objetivos de la organizaci&oacute;n";
 choices[6][1] = "Adecuaci&oacute;n de procedimientos de control";
 choices[6][2] = "Uso de metodolog&iacute;as seg&uacute;n est&aacute;ndares de la organizaci&oacute;n";
 choices[6][3] = "Todas";
 answers[6] = choices[6][3];
 units[6] = "31, 32, 33";
 comments[6] = "Id Pregunta: 530. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 539 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  En metodolog&iacute;a PERT, la cantidad de unidades de tiempo en exceso para la realizaci&oacute;n de una tarea suponiendo que comienzan y terminan en las &uacute;ltimas fechas permisibles se llama ...";
 choices[7]= new Array();
 choices[7][0] = "Holgura condicionada";
 choices[7][1] = "Holgura independiente";
 choices[7][2] = "Holgura libre";
 choices[7][3] = "Holgura total";
 answers[7] = choices[7][0];
 units[7] = "28";
 comments[7] = "Id Pregunta: 539. ";


//  Id pregunta: 645 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  Cu&aacute;l de las siguientes no es una excepci&oacute;n admitida por la Decisi&oacute;n 87/95/CEE para la utilizaci&oacute;n de especificaciones no normalizadas:";
 choices[8]= new Array();
 choices[8][0] = "Por cuestiones de continuidad de funcionamiento, pero con la existencia de un plan estrat&eacute;gico de transici&oacute;n.";
 choices[8][1] = "Por la existencia de una norma 'de facto' ampliamente aceptada.";
 choices[8][2] = "Si se demuestra que la satisfacci&oacute;n de la norma tiene un coste excesivo.";
 choices[8][3] = "Por cuestiones de Innovaci&oacute;n.";
 answers[8] = choices[8][1];
 units[8] = "40";
 comments[8] = "Id Pregunta: 645. ";


//  Id pregunta: 738 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  El Servicio de Notificaciones Telem&aacute;ticas Seguras, que se basa en la Direcci&oacute;n Electr&oacute;nica &Uacute;nica (actualmente llamada Direcci&oacute;n Electr&oacute;nica Habilitada (DEH)), es un servicio ofrecido por la Administraci&oacute;n del Estado prestado en colaboraci&oacute;n con:";
 choices[9]= new Array();
 choices[9][0] = "Telef&oacute;nica de Espa&ntilde;a, S.A.";
 choices[9][1] = "La entidad p&uacute;blica empresarial Red.es";
 choices[9][2] = "Sociedad Estatal de Correos y Tel&eacute;grafos";
 choices[9][3] = "Microsoft";
 answers[9] = choices[9][2];
 units[9] = "30";
 comments[9] = "Id Pregunta: 738. Examen TIC MAP B 2004";


//  Id pregunta: 1102 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  En Java:";
 choices[10]= new Array();
 choices[10][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[10][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[10][2] = "Los programas son aplicaciones web de servidor";
 choices[10][3] = "Todas las anteriores respuestas son ciertas";
 answers[10] = choices[10][3];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1102. ";


//  Id pregunta: 1654 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Las siglas &quot;ACID&quot; qu&eacute; significan desde el punto de vista de las transacciones?";
 choices[11]= new Array();
 choices[11][0] = "Atomicity, Consistency, Isolation and Durability";
 choices[11][1] = "Atomicity, Consistency, Integration and Durability";
 choices[11][2] = "Authenticity, Confidentiality, Integration and Durability";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][0];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1654. ";


//  Id pregunta: 1762 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  Se&ntilde;alar la afirmaci&oacute;n FALSA sobre los APPLETS de Java";
 choices[12]= new Array();
 choices[12][0] = "Programa Java que proporciona funcionalidad avanzada a una p&aacute;gina web";
 choices[12][1] = "S&oacute;lo utiliza recursos del cliente, no interviene nada el servidor.";
 choices[12][2] = "No puede leer o escribir ficheros en la m&aacute;quina local en la que se ejecute";
 choices[12][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[12] = choices[12][3];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1762. ";


//  Id pregunta: 1790 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  Se&ntilde;ale de qu&eacute; etapa del desarrollo de la inteligencia artifical son propias las t&eacute;cnicas de b&uacute;squeda heur&iacute;stica";
 choices[13]= new Array();
 choices[13][0] = "Difusi&oacute;n actual";
 choices[13][1] = "Etapa de prototipos";
 choices[13][2] = "Sistemas expertos";
 choices[13][3] = "Etapa inicial";
 answers[13] = choices[13][0];
 units[13] = "63";
 comments[13] = "Id Pregunta: 1790. ";


//  Id pregunta: 1844 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  Indique la respuesta falsa en relaci&oacute;n a las ventajas aportadas por una herramienta de Workflow:";
 choices[14]= new Array();
 choices[14][0] = "Incremento de la productividad";
 choices[14][1] = "Monitorizaci&oacute;n del estado de cualquier proceso";
 choices[14][2] = "Reducci&oacute;n de los tiempos muertos";
 choices[14][3] = "Todas las anteriores son ciertas";
 answers[14] = choices[14][3];
 units[14] = "71";
 comments[14] = "Id Pregunta: 1844. ";


//  Id pregunta: 1867 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  En el protocolo LDAP:";
 choices[15]= new Array();
 choices[15][0] = "La operaci&oacute;n bind permite autenticar al cliente frente al  directorio";
 choices[15][1] = "SASL se a&ntilde;adi&oacute; en LDAP v3";
 choices[15][2] = "La operaci&oacute;n unbind cierra la conexi&oacute;n con el servidor LDAP";
 choices[15][3] = "Todas las anteriores";
 answers[15] = choices[15][3];
 units[15] = "74";
 comments[15] = "Id Pregunta: 1867. ";


//  Id pregunta: 1894 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  La tecnolog&iacute;a utilizada para medir y analizar caracter&iacute;sticas del cuerpo humano con prop&oacute;sitos de autenticaci&oacute;n se llama";
 choices[16]= new Array();
 choices[16][0] = "huella";
 choices[16][1] = "biom&eacute;trica";
 choices[16][2] = "JBOD";
 choices[16][3] = "antropomorfismo";
 answers[16] = choices[16][1];
 units[16] = "74";
 comments[16] = "Id Pregunta: 1894. ";


//  Id pregunta: 2063 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n (IAS)?";
 choices[17]= new Array();
 choices[17][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[17][1] = "Elaboraci&oacute;n de los manuales de usuario";
 choices[17][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n";
 choices[17][3] = "Paso a Producci&oacute;n";
 answers[17] = choices[17][1];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2063. Pregunta Junta Andalucia - A";


//  Id pregunta: 2296 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  El PGGC aplicable al desarrollo de equipos l&oacute;gicos del CSI existen los siguientes procedimientos de control de calidad:";
 choices[18]= new Array();
 choices[18][0] = "Revisiones, pruebas y procedimientos extraordinarios";
 choices[18][1] = "Revisiones, pruebas e inspecciones detalladas";
 choices[18][2] = "Revisiones, pruebas, procedimientos extraordinarios y procedimientos particulares";
 choices[18][3] = "Todas las respuestas anteriores son falsas";
 answers[18] = choices[18][2];
 units[18] = "88";
 comments[18] = "Id Pregunta: 2296. ";


//  Id pregunta: 2620 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l no es un factor de calidad seg&uacute;n Mc Call?";
 choices[19]= new Array();
 choices[19][0] = "Fiabilidad";
 choices[19][1] = "Coste ";
 choices[19][2] = "Facilidad de mantenimiento";
 choices[19][3] = "Seguridad";
 answers[19] = choices[19][1];
 units[19] = "87,88,92";
 comments[19] = "Id Pregunta: 2620. ";


//  Id pregunta: 2646 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[20]= new Array();
 choices[20][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[20][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[20][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[20][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[20] = choices[20][2];
 units[20] = "58,80";
 comments[20] = "Id Pregunta: 2646. ";


//  Id pregunta: 2732 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a que cubra el desarrollo de planes de sistemas de informaci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "M&eacute;trica";
 choices[21][1] = "Racines";
 choices[21][2] = "Method 1";
 choices[21][3] = "Eclipse";
 answers[21] = choices[21][3];
 units[21] = "77";
 comments[21] = "Id Pregunta: 2732. ";


//  Id pregunta: 2887 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  El sistema EURODAC de TESTA II intercambia informaci&oacute;n entre las Administraciones P&uacute;blicas europeas referentes a:";
 choices[22]= new Array();
 choices[22][0] = "inmigraci&oacute;n";
 choices[22][1] = "accidentes de tr&aacute;fico";
 choices[22][2] = "ofertas de empleo";
 choices[22][3] = "fondos estructurales";
 answers[22] = choices[22][0];
 units[22] = "103";
 comments[22] = "Id Pregunta: 2887. ";


//  Id pregunta: 3470 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  El servicio de directorio definido por la ITU-T:";
 choices[23]= new Array();
 choices[23][0] = "Se incluye en casi todos los sistemas de correo electr&oacute;nico para consultar las direcciones de los usuarios existentes en la red";
 choices[23][1] = "Se especifica en el est&aacute;ndar X.600 del ITU";
 choices[23][2] = "Es soportado por un sistema de ficheros en red";
 choices[23][3] = "Se ha definido como un conjunto de modelos, servicios y protocolos accesibles a nivel mundial en forma independiente de la aplicaci&oacute;n";
 answers[23] = choices[23][3];
 units[23] = "106";
 comments[23] = "Id Pregunta: 3470. ";


//  Id pregunta: 3793 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Respecto a los enrutadores, encaminadores o 'routers' se puede afirmar que:";
 choices[24]= new Array();
 choices[24][0] = "En la red de &aacute;rea local, son imprescindibles entre los ordenadores personales y su servidor";
 choices[24][1] = "Facilitan la uni&oacute;n a nivel f&iacute;sico entre dos redes distintas 10baseT y SNA";
 choices[24][2] = "Unen dos redes locales a nivel de red , ya que se suele decir que son equipos h&iacute;bridos";
 choices[24][3] = "Unen las redes WAN o MAN que tienen igual subnivel de control LLC";
 answers[24] = choices[24][2];
 units[24] = "102";
 comments[24] = "Id Pregunta: 3793. ";


//  Id pregunta: 3870 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  Qu&eacute; es falso respecto a XHTML";
 choices[25]= new Array();
 choices[25][0] = "Obliga a anidar las etiquetas adecuadamente";
 choices[25][1] = "Se adapta mejor a los navegadores m&aacute;s avanzados";
 choices[25][2] = "Obliga a encerrar entre comillas los valores de los atributos";
 choices[25][3] = "Cada documento tiene que especificar su tipo";
 answers[25] = choices[25][1];
 units[25] = "113";
 comments[25] = "Id Pregunta: 3870. Tanenbaum";


//  Id pregunta: 4226 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[26]= new Array();
 choices[26][0] = "De 50 a 550 Mhz";
 choices[26][1] = "De 5 a 50 MHz";
 choices[26][2] = "De 550 a 860 MHz";
 choices[26][3] = "De 5 a 860 MHz";
 answers[26] = choices[26][1];
 units[26] = "99";
 comments[26] = "Id Pregunta: 4226. ";


//  Id pregunta: 4429 Año de creación de pregunta: 2007-01-01
 questions[27]= "28)  No tiene la consideraci&oacute;n de Autoridad Nacional de Reglamentaci&oacute;n de Telecomunicaciones, de conformidad con el art. 68 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, General de Telecomunicaciones:";
 choices[27]= new Array();
 choices[27][0] = "El Gobierno.";
 choices[27][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[27][2] = "Los &oacute;rganos superiores y directivos del Ministerio de Econom&iacute;a y Competitividad que, de conformidad con la estructura org&aacute;nica del departamento, asuman las competencias asignadas a este ministerio en materias reguladas por esta Ley.";
 choices[27][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 answers[27] = choices[27][1];
 units[27] = "110";
 comments[27] = "Id Pregunta: 4429. ";


//  Id pregunta: 4582 Año de creación de pregunta: 2007-01-01
 questions[28]= "29)  Quien NO es un participante en Ia actividad Elaboraci&oacute;n del Modelo de Datos del proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[28]= new Array();
 choices[28][0] = "usuarios expertos";
 choices[28][1] = "analistas";
 choices[28][2] = "jefe de proyecto";
 choices[28][3] = "equipo de soporte t&eacute;cnico";
 answers[28] = choices[28][2];
 units[28] = "86";
 comments[28] = "Id Pregunta: 4582. ";


//  Id pregunta: 4622 Año de creación de pregunta: 2007-01-01
 questions[29]= "30)  Indique cual de las siguientes es una herramienta de e-learning: ";
 choices[29]= new Array();
 choices[29][0] = "Kerberos";
 choices[29][1] = "WebCT";
 choices[29][2] = "Kagera";
 choices[29][3] = "Tuxedo";
 answers[29] = choices[29][1];
 units[29] = "66";
 comments[29] = "Id Pregunta: 4622. ";


//  Id pregunta: 4648 Año de creación de pregunta: 2007-01-01
 questions[30]= "31)  El protocolo CMIP de OSI se puede considerar el equivalente al siguiente protocolo de la familia TCP/IP:";
 choices[30]= new Array();
 choices[30][0] = "SMTP";
 choices[30][1] = "SNMP";
 choices[30][2] = "ARP";
 choices[30][3] = "HTTP";
 answers[30] = choices[30][1];
 units[30] = "100";
 comments[30] = "Id Pregunta: 4648. ";


//  Id pregunta: 4663 Año de creación de pregunta: 2009-01-01
 questions[31]= "32)  Modulaci&oacute;n empleada en la tecnolog&iacute;a HSDPA en R5 para el enlace descendente";
 choices[31]= new Array();
 choices[31][0] = "4QAM y QPSK";
 choices[31][1] = "8QAM y QPSK";
 choices[31][2] = "16 QAM y QPSK";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = choices[31][2];
 units[31] = "108";
 comments[31] = "Id Pregunta: 4663. ";


//  Id pregunta: 4725 Año de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Cu&aacute;ndo analizar&iacute;amos los recursos de la organizaci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "Cuando ejecutemos un desarrollo, para determinar el costo.";
 choices[32][1] = "Al valorar los recursos que se han consumido.";
 choices[32][2] = "Para ver la forma de materializar un desarrollo.";
 choices[32][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica.";
 answers[32] = choices[32][3];
 units[32] = "27";
 comments[32] = "Id Pregunta: 4725. Examen 2006 JCYL";


//  Id pregunta: 4742 Año de creación de pregunta: 2007-01-01
 questions[33]= "34)  Cual de las siguientes afirmaciones es incorrecta:";
 choices[33]= new Array();
 choices[33][0] = "PNG comprime mejor que el formato GIF las im&aacute;genes";
 choices[33][1] = "W3C desaconseja el uso del formato GIF por el posible pago de patentes";
 choices[33][2] = "PNG y GIF soportan animaci&oacute;n de im&aacute;genes";
 choices[33][3] = "PNG soporta un m&aacute;ximo de 256 colores";
 answers[33] = choices[33][2];
 units[33] = "93";
 comments[33] = "Id Pregunta: 4742. Examen 2006 JCYL";


//  Id pregunta: 4821 Año de creación de pregunta: 2007-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes infracciones est&aacute; tipificada como muy grave seg&uacute;n la Ley 34/2002, de 11 de julio, deservicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?";
 choices[34]= new Array();
 choices[34][0] = "El incumplimiento significativo de la obligaci&oacute;n de retener los datos de tr&aacute;fico generados por lascomunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n, previstaen el art&iacute;culo 12 de dicha Ley";
 choices[34][1] = "La utilizaci&oacute;n de los datos retenidos, en cumplimiento del art&iacute;culo 12 de dicha Ley, para fines distintos de losse&ntilde;alados en &eacute;l";
 choices[34][2] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red ola prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativocompetente lo ordene, en virtud de lo dispuesto en el art&iacute;culo 11 de dicha Ley";
 choices[34][3] = "El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;nelectr&oacute;nica equivalente o el env&iacute;o, en el plazo de un a&ntilde;o, de m&aacute;s de tres comunicaciones comerciales porlos medios aludidos a un mismo destinatario, cuando en dichos env&iacute;os no se cumplan los requisitosestablecidos en el art&iacute;culo 21 de dicha Ley";
 answers[34] = choices[34][2];
 units[34] = "30";
 comments[34] = "Id Pregunta: 4821. ";


//  Id pregunta: 4950 Año de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Qu&eacute; diagrama UML describe los mensajes que se pasan entre los objetos y el orden en el que lo hacen?:";
 choices[35]= new Array();
 choices[35][0] = "Diagrama de estado.";
 choices[35][1] = "Diagrama de actividad.";
 choices[35][2] = "Diagrama de despliegue.";
 choices[35][3] = "Diagrama de secuencia.";
 answers[35] = choices[35][3];
 units[35] = "82";
 comments[35] = "Id Pregunta: 4950. Examen TIC B 2007";


//  Id pregunta: 5144 Año de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l es el orden correcto en el que se realizan los pasos en un proceso de reingenier&iacute;a?";
 choices[36]= new Array();
 choices[36][0] = "Ingenier&iacute;a directa, ingenier&iacute;a inversa, an&aacute;lisis de c&oacute;digo, redise&ntilde;o y restructuraci&oacute;n.";
 choices[36][1] = "An&aacute;lisis de c&oacute;digo, redise&ntilde;o, ingenier&iacute;a inversa, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[36][2] = "An&aacute;lisis de c&oacute;digo, ingenier&iacute;a inversa, redise&ntilde;o, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[36][3] = "An&aacute;lisis de c&oacute;digo, reestructuraci&oacute;n, ingenier&iacute;a inversa, redise&ntilde;o e ingenier&iacute;a directa.";
 answers[36] = choices[36][3];
 units[36] = "91";
 comments[36] = "Id Pregunta: 5144. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5506 Año de creación de pregunta: 2003-01-01
 questions[37]= "38)  La sindicaci&oacute;n de contenidos web:";
 choices[37]= new Array();
 choices[37][0] = "Se emplea el lenguaje RSS (Really Simple Sindication)";
 choices[37][1] = "Actualmente se emplea el estandar Atom 1.0";
 choices[37][2] = "Permite recuperar contenido de un sitio web y publicarlo en otro";
 choices[37][3] = "Todas son correctas";
 answers[37] = choices[37][3];
 units[37] = "69";
 comments[37] = "Id Pregunta: 5506. ";


//  Id pregunta: 5569 Año de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.21 del IEEE?";
 choices[38]= new Array();
 choices[38][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[38][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[38][2] = "Resilient Packet Ring";
 choices[38][3] = "Traspaso entre redes";
 answers[38] = choices[38][3];
 units[38] = "101";
 comments[38] = "Id Pregunta: 5569. ";


//  Id pregunta: 5748 Año de creación de pregunta: 2009-01-01
 questions[39]= "40)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[39]= new Array();
 choices[39][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[39][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[39][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[39][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[39] = choices[39][1];
 units[39] = "74";
 comments[39] = "Id Pregunta: 5748. ";


//  Id pregunta: 5767 Año de creación de pregunta: 2009-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de ordenaci&oacute;n de alternativas basado en permutaciones?";
 choices[40]= new Array();
 choices[40][0] = "TOPSIS";
 choices[40][1] = "PROMETHEE";
 choices[40][2] = "ELECTRE";
 choices[40][3] = "QUALIFLEX";
 answers[40] = choices[40][3];
 units[40] = "34";
 comments[40] = "Id Pregunta: 5767. ";


//  Id pregunta: 5866 Año de creación de pregunta: 2009-01-01
 questions[41]= "42)  El protocolo Secure Shell, definido en la RFC (IETF Request for Comment) 4251:";
 choices[41]= new Array();
 choices[41][0] = "Permite la negociaci&oacute;n de los algoritmos criptogr&aacute;ficos a usar";
 choices[41][1] = "Proporciona, entre otros, los servicios de confidencialidad, no repudio e integridad";
 choices[41][2] = "Opcionalmente admite compresi&oacute;n, que en este caso debe aplicarse tras el cifrado del paquete";
 choices[41][3] = "Trabaja tanto sobre TCP como sobre UDP";
 answers[41] = choices[41][0];
 units[41] = "111";
 comments[41] = "Id Pregunta: 5866. MAP 2008 A1";


//  Id pregunta: 5944 Año de creación de pregunta: 2009-01-01
 questions[42]= "43)  El concepto de Web 2.0 agrupa 3 nociones fundamentales, &iquest;cu&aacute;l de las siguientes no es una de ellas?";
 choices[42]= new Array();
 choices[42][0] = "La posibilidad de participaci&oacute;n activa y de colaboraci&oacute;n de los usuarios en la producci&oacute;n de contenidos";
 choices[42][1] = "Las nuevas interfaces se acercan progresivamente a los est&aacute;ndares de cliente pesado";
 choices[42][2] = "Empleo de contenidos multimedia en las p&aacute;ginas web";
 choices[42][3] = "La capacidad de mezcla de diferentes servicios de distintos sitios en la mismap&aacute;gina.";
 answers[42] = choices[42][2];
 units[42] = "120";
 comments[42] = "Id Pregunta: 5944. ";


//  Id pregunta: 5962 Año de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Qu&eacute; elemento NO forma parte del modelo EFQM de excelencia?";
 choices[43]= new Array();
 choices[43][0] = "Procesos";
 choices[43][1] = "Personas";
 choices[43][2] = "Resultados en los clientes";
 choices[43][3] = "Resultados en los proveedores";
 answers[43] = choices[43][3];
 units[43] = "92";
 comments[43] = "Id Pregunta: 5962. Castilla La Mancha 2009";


//  Id pregunta: 6059 Año de creación de pregunta: 2010-01-01
 questions[44]= "45)  Los servicios web son:";
 choices[44]= new Array();
 choices[44][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[44][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[44][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[44][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[44] = choices[44][3];
 units[44] = "51,69";
 comments[44] = "Id Pregunta: 6059. TIC A 2009";


//  Id pregunta: 6112 Año de creación de pregunta: 2010-01-01
 questions[45]= "46)  Un diagrama de transici&oacute;n de estados:";
 choices[45]= new Array();
 choices[45][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[45][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[45][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[45][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[45] = choices[45][3];
 units[45] = "82";
 comments[45] = "Id Pregunta: 6112. TIC A 2009";


//  Id pregunta: 6148 Año de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Qu&eacute; tipo de dependencias utiliza el m&eacute;todo ADM?";
 choices[46]= new Array();
 choices[46][0] = "Utiliza dependencias inicio a final y final a inicio.";
 choices[46][1] = "S&oacute;lo utiliza dependencias de inicio a final.";
 choices[46][2] = "S&oacute;lo utiliza dependencias de final a inicio.";
 choices[46][3] = "S&oacute;lo utiliza dependencias final a final.";
 answers[46] = choices[46][2];
 units[46] = "28";
 comments[46] = "Id Pregunta: 6148. ";


//  Id pregunta: 6157 Año de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Qu&eacute; protocolo de la capa de transporte utiliza TFTP?";
 choices[47]= new Array();
 choices[47][0] = "TCP, al igual que FTP";
 choices[47][1] = "TCP";
 choices[47][2] = "UDP";
 choices[47][3] = "UDP, al igual que FTP.";
 answers[47] = choices[47][2];
 units[47] = "112";
 comments[47] = "Id Pregunta: 6157. ";


//  Id pregunta: 6160 Año de creación de pregunta: 2010-01-01
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[48]= new Array();
 choices[48][0] = "Las MCUs permiten sesiones de videoconferencia multipunto con tres o mas localizaciones.";
 choices[48][1] = "Las soluciones de videoconferencia sin MCUs requieren un menor ancho de banda.";
 choices[48][2] = "En las soluciones de videoconferencia con MCU cada equipo env&iacute;a la informaci&oacute;n de audio y video con la MCU y esta la env&iacute;a al destinatario. ";
 choices[48][3] = "Las soluciones de videoconferencia sin MCU necesitan equipos con mayor coste.";
 answers[48] = choices[48][1];
 units[48] = "117";
 comments[48] = "Id Pregunta: 6160. ";


//  Id pregunta: 6209 Año de creación de pregunta: 2010-01-01
 questions[49]= "50)  En Programaci&oacute;n y Dise&ntilde;o de Algoritmos &iquest;Cu&aacute;l de los siguientes es un nivel de acoplamiento?";
 choices[49]= new Array();
 choices[49][0] = "De marca";
 choices[49][1] = "De presentaci&oacute;n";
 choices[49][2] = "De clases";
 choices[49][3] = "De herencia";
 answers[49] = choices[49][0];
 units[49] = "79";
 comments[49] = "Id Pregunta: 6209. TICB-2009, bloque desarrollo";


//  Id pregunta: 6230 Año de creación de pregunta: 2010-01-01
 questions[50]= "51)  De acuerdo con las recomendaciones de ITIL, la Aceptaci&oacute;n e Instalaci&oacute;n de los Ordenadores por primera vez, se cubre en:";
 choices[50]= new Array();
 choices[50][0] = "Gesti&oacute;n de la Infraestructura";
 choices[50][1] = "Gesti&oacute;n de Soporte";
 choices[50][2] = "Gesti&oacute;n de Entrega";
 choices[50][3] = "Gesti&oacute;n de Aplicaciones";
 answers[50] = choices[50][0];
 units[50] = "98";
 comments[50] = "Id Pregunta: 6230. TICB-2009, bloque desarrollo";


//  Id pregunta: 6317 Año de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes sentencias es cierta respecto a las bases de datos relacionales?";
 choices[51]= new Array();
 choices[51][0] = "Soportan las interrelaciones l&oacute;gicas entre los datos.";
 choices[51][1] = "No soportan el acceso directo a un registro espec&iacute;fico.";
 choices[51][2] = "Es complicado el acceso a varios registros relacionados con un registro simple.";
 choices[51][3] = "El acceso a los datos es l&oacute;gico, dependiente de las t&eacute;cnicas de instrumentaci&oacute;n f&iacute;sica.";
 answers[51] = choices[51][0];
 units[51] = "58";
 comments[51] = "Id Pregunta: 6317. ";


//  Id pregunta: 6498 Año de creación de pregunta: 2010-01-01
 questions[52]= "53)  NO corresponde a una libertad del software libre, seg&uacute;n la FSF:";
 choices[52]= new Array();
 choices[52][0] = "La libertad de usar el programa, con cualquier prop&oacute;sito";
 choices[52][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y adaptarlo a sus necesidades";
 choices[52][2] = "La libertad de distribuir copias, con la autorizaci&oacute;n expl&iacute;cita del autor";
 choices[52][3] = "La libertad de mejorar el programa y hacer p&uacute;blicas las mejoras a los dem&aacute;s, de modo que toda la comunidad se beneficie";
 answers[52] = choices[52][2];
 units[52] = "61";
 comments[52] = "Id Pregunta: 6498. ";


//  Id pregunta: 6584 Año de creación de pregunta: 2010-01-01
 questions[53]= "54)  El documento de seguridad";
 choices[53]= new Array();
 choices[53][0] = "debe mantenerse siempre actualizado";
 choices[53][1] = "Es una obligaci&oacute;n de todos los responsables de fichero, y en su caso, para los encargados del tratamiento";
 choices[53][2] = "Debe existir con independencia del nivel de seguridad que sea necesario aplicar";
 choices[53][3] = "Todas las respuestas anteriores son correctas";
 answers[53] = choices[53][3];
 units[53] = "29";
 comments[53] = "Id Pregunta: 6584. ";


//  Id pregunta: 6605 Año de creación de pregunta: 2010-01-01
 questions[54]= "55)  Uno de los creadores originales del An&aacute;lisis Estructurado es";
 choices[54]= new Array();
 choices[54][0] = "Edward Yourdon";
 choices[54][1] = "Tom De Marco";
 choices[54][2] = "Tim Berners Lee";
 choices[54][3] = "James Rumbaugh";
 answers[54] = choices[54][1];
 units[54] = "81";
 comments[54] = "Id Pregunta: 6605. ";


//  Id pregunta: 6630 Año de creación de pregunta: 2010-01-01
 questions[55]= "56)  El modelo CMM de Ingenier&iacute;a de Software tiene:";
 choices[55]= new Array();
 choices[55][0] = "6 niveles de Capacidad y 5 niveles de Madurez";
 choices[55][1] = "5 niveles de Capacidad y 5 niveles de Madurez";
 choices[55][2] = "6 niveles de Capacidad y 5 niveles de Madurez";
 choices[55][3] = "6 niveles de Capacidad y 6 niveles de Madurez";
 answers[55] = choices[55][2];
 units[55] = "87";
 comments[55] = "Id Pregunta: 6630. ";


//  Id pregunta: 6636 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  Dentro del modelo de calidad EFQM, los 3 criterios de mayor peso por orden son:";
 choices[56]= new Array();
 choices[56][0] = "Satisfacci&oacute;n del Cliente; Impacto en la Sociedad; Resultados";
 choices[56][1] = "Satisfacci&oacute;n del Cliente; Resultados; Procesos";
 choices[56][2] = "Satisfacci&oacute;n del Cliente; Resultados; Liderazgo";
 choices[56][3] = "Resultados; Satisfacci&oacute;n del Cliente; Liderazgo";
 answers[56] = choices[56][1];
 units[56] = "88";
 comments[56] = "Id Pregunta: 6636. ";


//  Id pregunta: 7280 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  En un entorno de virtualizaci&oacute;n de m&aacute;quinas, &iquest;cu&aacute;l de los siguientes elementos est&aacute; m&aacute;s pr&oacute;ximo al hardware?";
 choices[57]= new Array();
 choices[57][0] = "Hipervisor";
 choices[57][1] = "VMM (Virtual Machine Monitor)";
 choices[57][2] = "Sistema operativo hospedado";
 choices[57][3] = "HBA (host Bus Adapter)";
 answers[57] = choices[57][0];
 units[57] = "119";
 comments[57] = "Id Pregunta: 7280. Examen TIC B 2009";


//  Id pregunta: 7310 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  En relaci&oacute;n a la utilizaci&oacute;n de gram&aacute;ticas y modelos de lenguaje para el reconocimiento de lenguaje natural, indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[58]= new Array();
 choices[58][0] = "Las gram&aacute;ticas permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 choices[58][1] = "Las gram&aacute;ticas permiten obtener tasas de acierto m&aacute;s elevadas que los modelos de lenguaje";
 choices[58][2] = "Los modelos de lenguaje precisan de grandes corpus de entrenamiento";
 choices[58][3] = "Los modelos de lenguaje permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 answers[58] = choices[58][0];
 units[58] = "94";
 comments[58] = "Id Pregunta: 7310. ";


//  Id pregunta: 7322 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  La Entidad P&uacute;blica Empresarial responsable de la gesti&oacute;n del Registro de nombres de dominio de Internet bajo el c&oacute;digo de pa&iacute;s .es se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Oepm.es";
 choices[59][1] = "Red.es";
 choices[59][2] = "Funciona.es";
 choices[59][3] = "060.es";
 answers[59] = choices[59][1];
 units[59] = "70";
 comments[59] = "Id Pregunta: 7322. ";


//  Id pregunta: 7332 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  El WSC (World Standards Cooperation) est&aacute; formado por";
 choices[60]= new Array();
 choices[60][0] = "ISO/IEC/W3C";
 choices[60][1] = "ISO/CEN";
 choices[60][2] = "CEN/CENELEC/ETSI";
 choices[60][3] = "ISO/IEC/ITU-T";
 answers[60] = choices[60][3];
 units[60] = "42";
 comments[60] = "Id Pregunta: 7332. ";


//  Id pregunta: 8096 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)   Con respecto a ITIL, el proceso &laquo;Configuration Management&raquo; o Gesti&oacute;n de la Configuraci&oacute;n, &iquest;en cu&aacute;l de los m&oacute;dulos ITIL citados seguidamente est&aacute; incluido?";
 choices[61]= new Array();
 choices[61][0] = " ICT Infrastructure Management.";
 choices[61][1] = " Service Delibery.";
 choices[61][2] = " Service Support.";
 choices[61][3] = " Software Asset Management.";
 answers[61] = choices[61][2];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 8096. Map 2008";


//  Id pregunta: 8269 Año de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;C&uacute;al de las siguientes organizaciones realiza actuaciones para la persecuci&oacute;n legal de la pirater&iacute;a inform&aacute;tica y para evitar la violaci&oacute;n de los derechos de copyright?:";
 choices[62]= new Array();
 choices[62][0] = "BSA ( Business Software Alliance).";
 choices[62][1] = "GSC ( General Software Committee).";
 choices[62][2] = "DRG (Digital Right Group).";
 choices[62][3] = "SSC (Secure Software Commission).";
 answers[62] = choices[62][0];
 units[62] = "37";
 comments[62] = "Id Pregunta: 8269. Examen TIC A1 2010";


//  Id pregunta: 8295 Año de creación de pregunta: 2011-01-01
 questions[63]= "64)  El protocolo FTP es un protocolo: ";
 choices[63]= new Array();
 choices[63][0] = "Seguro.";
 choices[63][1] = "Orientado a conexi&oacute;n.";
 choices[63][2] = "De nivel de enlace.";
 choices[63][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red. ";
 answers[63] = choices[63][1];
 units[63] = "100";
 comments[63] = "Id Pregunta: 8295. Examen TIC A2 2010";


//  Id pregunta: 8338 Año de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[64]= new Array();
 choices[64][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[64][1] = "PERT.";
 choices[64][2] = "CPM.";
 choices[64][3] = "El histograma de recursos.";
 answers[64] = choices[64][0];
 units[64] = "86";
 comments[64] = "Id Pregunta: 8338. Examen TIC A2 2010";


//  Id pregunta: 8388 Año de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes herramientas permite realizar pruebas de regresi&oacute;n en el software?";
 choices[65]= new Array();
 choices[65][0] = "Jmeter.";
 choices[65][1] = "Snort.";
 choices[65][2] = "Atrio.";
 choices[65][3] = "JBPM.";
 answers[65] = choices[65][0];
 units[65] = "86";
 comments[65] = "Id Pregunta: 8388. Examen TIC A2 2010";


//  Id pregunta: 8453 Año de creación de pregunta: 2011-01-01
 questions[66]= "67)  Un puente se caracteriza por:";
 choices[66]= new Array();
 choices[66][0] = "Operar en capa 3 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[66][1] = "Opera en capa 2 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[66][2] = "Operar en capa 3 del modelo OSI y utiliza direcciones IP para tomar decisiones";
 choices[66][3] = "Operar en capa 4 del modelo OSI y utiliza puertos TCP para tomar decisiones";
 answers[66] = choices[66][1];
 units[66] = "102";
 comments[66] = "Id Pregunta: 8453. Analista Ayto. Madrid 2010";


//  Id pregunta: 8521 Año de creación de pregunta: 2011-01-01
 questions[67]= "68)  En la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n, una fase fundamental es la proyecci&oacute;n. Para ello se utilizan diversas t&eacute;cnicas, entre las que se encuentra la teor&iacute;a de colas. &iquest;Qu&eacute; valor ideal deber&iacute;a tomar el llamado factor de cola?";
 choices[67]= new Array();
 choices[67][0] = "Cualquier valor negativo.";
 choices[67][1] = "Fq=0.";
 choices[67][2] = "Fq=1.";
 choices[67][3] = "Infinito.";
 answers[67] = choices[67][2];
 units[67] = "104";
 comments[67] = "Id Pregunta: 8521. Examen TIC A2 2010 interna";


//  Id pregunta: 8539 Año de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; est&aacute;ndar de redes inal&aacute;mbricas permite a dispositivos en movimiento realizar itinerancia r&aacute;pida de un punto de acceso a otro?";
 choices[68]= new Array();
 choices[68][0] = "IEEE 802.11 h";
 choices[68][1] = "IEEE 802.11 l";
 choices[68][2] = "IEEE 802.11 p";
 choices[68][3] = "IEEE 802 11 r.";
 answers[68] = choices[68][3];
 units[68] = "107";
 comments[68] = "Id Pregunta: 8539. Examen TIC A2 2010 interna";


//  Id pregunta: 8591 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[69]= new Array();
 choices[69][0] = "Apache Tomcat";
 choices[69][1] = "JBOSS";
 choices[69][2] = "WebSphere Application Server";
 choices[69][3] = "Glassfish";
 answers[69] = choices[69][0];
 units[69] = "115,116";
 comments[69] = "Id Pregunta: 8591. Examen TIC A2 2010 interna";


//  Id pregunta: 8595 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;A qu&eacute; corresponden las siglas LINQ?";
 choices[70]= new Array();
 choices[70][0] = "Lenguaje que permite enlaces unidireccionales y bid&iacute;reccionales a otro recurso (como archivos, im&aacute;genes, documentos, programas, etc.) dentro de documentos XML";
 choices[70][1] = "Soluci&oacute;n utilizada en el campo de la Business Intelligence cuyo objetivo es agilizar la consulta a grandes cantidades de datos";
 choices[70][2] = "Conjunto de extensiones a NET Framework que abarca operaciones de consulta integrada de lenguaje, conjuntos y transformaciones.";
 choices[70][3] = "Texto o im&aacute;genes en un sitio web que un usuario puede pinchar para tener acceso o conectar con otro documento.";
 answers[70] = choices[70][2];
 units[70] = "59,115";
 comments[70] = "Id Pregunta: 8595. Examen TIC A2 2010 interna";


//  Id pregunta: 8608 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;En que norma ISO viene reflejada la usabilidad del software?";
 choices[71]= new Array();
 choices[71][0] = "ISO/IEC 9126";
 choices[71][1] = "ISO 8859";
 choices[71][2] = "ISO 14000";
 choices[71][3] = "ISO/IEC 14496";
 answers[71] = choices[71][0];
 units[71] = "39";
 comments[71] = "Id Pregunta: 8608. Examen TIC A2 2010 interna";


//  Id pregunta: 8631 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  En el modelo de ciclo de vida en espiral, &iquest;en qu&eacute; actividad se decide s&iacute; continuamos con las fases siguientes?";
 choices[72]= new Array();
 choices[72][0] = "An&aacute;lisis del riesgo.";
 choices[72][1] = "Evaluaci&oacute;n de la situaci&oacute;n.";
 choices[72][2] = "Desarrollar, verificar y validar (probar).";
 choices[72][3] = "Planificar.";
 answers[72] = choices[72][3];
 units[72] = "76";
 comments[72] = "Id Pregunta: 8631. Examen TIC A2 2010 interna";


//  Id pregunta: 8733 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  Elija la afirmaci&oacute;n correcta, en relaci&oacute;n con el contenido de la tarjeta chip del DNI electr&oacute;nico:";
 choices[73]= new Array();
 choices[73][0] = "Se incluye un certificado electr&oacute;nico &uacute;nico, personal e intransferible, con la doble funcionalidad de firma electr&oacute;nica y de autenticaci&oacute;n.";
 choices[73][1] = "Se incluyen, entre otros los datos de filiaci&oacute;n del ciudadano (los mismos que est&aacute;n impresos en el soporte f&iacute;sico del DNI), junto con una imagen de la fotograf&iacute;a";
 choices[73][2] = "Los datos contenidos, en lodo caso, s&oacute;lo son accesibles en lectura por el ciudadano, mediante la utilizaci&oacute;n de la Clave Personal de Acceso o PIN. como garant&iacute;a de confidencialidad";
 choices[73][3] = "No se incluye una imagen de la fotograf&iacute;a";
 answers[73] = choices[73][1];
 units[73] = "74";
 comments[73] = "Id Pregunta: 8733. Examen TIC A2 2010 interna";


//  Id pregunta: 8875 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  &ldquo;Los casos de uso&rdquo; son una t&eacute;cnica utilizada para la especificaci&oacute;n de los requisitos que debe de cumplir el software, &iquest;cu&aacute;l de estas afirmaciones es v&aacute;lida?:";
 choices[74]= new Array();
 choices[74][0] = "No es una t&eacute;cnica v&aacute;lida para desarrollos estructurados";
 choices[74][1] = "Es una t&eacute;cnica v&aacute;lida s&oacute;lo para desarrollos orientados a objetos";
 choices[74][2] = "Es una t&eacute;cnica v&aacute;lida tanto en desarrollos estructurados como en orientaci&oacute;n a objetos, aunque en este caso se propone como t&eacute;cnica obligatoria";
 choices[74][3] = "Es una t&eacute;cnica obligatoria tanto para desarrollos estructurados como para orientados a objetos";
 answers[74] = choices[74][2];
 units[74] = "78";
 comments[74] = "Id Pregunta: 8875. Analista Ayto. Madrid 2010";


//  Id pregunta: 8900 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  Se&ntilde;ale la respuesta correcta";
 choices[75]= new Array();
 choices[75][0] = "XML fue dise&ntilde;ado para transportar datos, no para mostrarlos";
 choices[75][1] = "Las etiquetas de XML son todas predefinidas";
 choices[75][2] = "XML es una recomendaci&oacute;n del UIT";
 choices[75][3] = "XML significa Extralarge Markup Language";
 answers[75] = choices[75][0];
 units[75] = "69";
 comments[75] = "Id Pregunta: 8900. ";


//  Id pregunta: 8966 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  El modelo de Prototipado Evolutivo  fue creado por:";
 choices[76]= new Array();
 choices[76][0] = "Hirsch";
 choices[76][1] = "Royce";
 choices[76][2] = "Jackson";
 choices[76][3] = "Bohem";
 answers[76] = choices[76][2];
 units[76] = "76,85";
 comments[76] = "Id Pregunta: 8966. ";


//  Id pregunta: 8968 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Qu&eacute; patr&oacute;n de dise&ntilde;o pertenece a la clasificaci&oacute;n de Comportamiento?";
 choices[77]= new Array();
 choices[77][0] = "Singleton.";
 choices[77][1] = "Template Method.";
 choices[77][2] = "Session.";
 choices[77][3] = "Succesive Update.";
 answers[77] = choices[77][1];
 units[77] = "82,84";
 comments[77] = "Id Pregunta: 8968. ";


//  Id pregunta: 8980 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es la arquitectura del kernel empleado en Windows 7?";
 choices[78]= new Array();
 choices[78][0] = "Monol&iacute;tico";
 choices[78][1] = "Microkernel";
 choices[78][2] = "Nanokernel";
 choices[78][3] = "Hibrida";
 answers[78] = choices[78][3];
 units[78] = "52";
 comments[78] = "Id Pregunta: 8980. ";


//  Id pregunta: 9024 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[79]= new Array();
 choices[79][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[79][1] = "S&oacute;lo se emplea en RDSI.";
 choices[79][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[79][3] = "Ninguna de las anteriores";
 answers[79] = choices[79][0];
 units[79] = "103";
 comments[79] = "Id Pregunta: 9024. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9126 Año de creación de pregunta: 2013-01-01
 questions[80]= "81)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores";
 choices[80]= new Array();
 choices[80][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga";
 choices[80][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[80][2] = "El balanceo de carga solo puede implementarse por software";
 choices[80][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos";
 answers[80] = choices[80][2];
 units[80] = "45";
 comments[80] = "Id Pregunta: 9126. Examen TIC-A1 2011";


//  Id pregunta: 9140 Año de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;En qu&eacute; &iacute;ndices se puede medir la potencia de un ordenador?";
 choices[81]= new Array();
 choices[81][0] = "Miles de instrucciones por segundo (MIPS)";
 choices[81][1] = "SPEC. Ejecuta en el procesador un conjunto de programas y combina las medidas de prestaciones de &eacute;stos con la media aritm&eacute;tica o geom&eacute;trica.";
 choices[81][2] = "SPECint y SpeCfp. &Iacute;ndices que miden las velocidades en operaciones con enteros y comas flotantes. La medida resultante se denomina SPECifp";
 choices[81][3] = "Por el n&uacute;mero de cores que tenga el procesador";
 answers[81] = choices[81][1];
 units[81] = "47";
 comments[81] = "Id Pregunta: 9140. ";


//  Id pregunta: 9193 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[82]= new Array();
 choices[82][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[82][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[82][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[82][3] = "Todas las anteriores son falsas";
 answers[82] = choices[82][3];
 units[82] = "36";
 comments[82] = "Id Pregunta: 9193. ";


//  Id pregunta: 9214 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;C&oacute;mo es SAN iSCSI respecto a FC?";
 choices[83]= new Array();
 choices[83][0] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s cara.";
 choices[83][1] = "Igual";
 choices[83][2] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s barata";
 choices[83][3] = "SCSI se utiliza en tecnolog&iacute;as NAS y no en SAN.";
 answers[83] = choices[83][2];
 units[83] = "48";
 comments[83] = "Id Pregunta: 9214. ";


//  Id pregunta: 9237 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Qu&eacute; es el n&uacute;cleo denominado &ldquo;vanilla&rdquo;?";
 choices[84]= new Array();
 choices[84][0] = "Kernel sin alteraciones suministrado por Linus Torvalds";
 choices[84][1] = "S&oacute;lo se puede descargar de su sitio oficial en http://www.kernel.org";
 choices[84][2] = "Las distintas distribuciones no se basan en el n&uacute;cleo &ldquo;vanilla&rdquo;";
 choices[84][3] = "Todas las anteriores son correctas.";
 answers[84] = choices[84][0];
 units[84] = "53";
 comments[84] = "Id Pregunta: 9237. ";


//  Id pregunta: 9288 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a la contrataci&oacute;n precomercial.";
 choices[85]= new Array();
 choices[85][0] = "Son contratos de investigaci&oacute;n y desarrollo remunerados por la empresa adjudicataria, siempre que el &oacute;rgano de contrataci&oacute;n comparta con &eacute;stas los riesgos y los beneficios de la investigaci&oacute;n cient&iacute;fica y t&eacute;cnica necesaria para desarrollar soluciones innovadoras que superen las disponibles en el mercado. ";
 choices[85][1] = "Establecen condiciones para la comercializaci&oacute;n y asimilaci&oacute;n de la I+D, mediante su normalizaci&oacute;n. ";
 choices[85][2] = "La Agenda Digital para Europa los recomienda como forma de atraer inversi&oacute;n privada para la investigaci&oacute;n en tiempos de crisis. ";
 choices[85][3] = "En Espa&ntilde;a han sido introducidos por la LES, y est&aacute;n fuera del &aacute;mbito de aplicaci&oacute;n de la Ley de Contratos. ";
 answers[85] = choices[85][0];
 units[85] = "41";
 comments[85] = "Id Pregunta: 9288. ";


//  Id pregunta: 9325 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Qu&eacute; norma define el cableado";
 choices[86]= new Array();
 choices[86][0] = "ISO 50173";
 choices[86][1] = "ISO 11801";
 choices[86][2] = "ISO 18765";
 choices[86][3] = "ISO 80211";
 answers[86] = choices[86][1];
 units[86] = "99";
 comments[86] = "Id Pregunta: 9325. ";


//  Id pregunta: 9368 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  En la tecnolog&iacute;a de Resilient Packet Ring, sobre los m&eacute;todos de protecci&oacute;n ante fallos, se puede afirmar:";
 choices[87]= new Array();
 choices[87][0] = "En Steering, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[87][1] = "En Wrapping, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[87][2] = "Se basan principalmente en c&oacute;digos de Hamming.";
 choices[87][3] = "El principal m&eacute;todo de correcci&oacute;n de fallos es FEC (Forward Error Correction).";
 answers[87] = choices[87][0];
 units[87] = "101";
 comments[87] = "Id Pregunta: 9368. ";


//  Id pregunta: 9383 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n con 4G:";
 choices[88]= new Array();
 choices[88][0] = "Admite la utilizaci&oacute;n de antenas MIMO";
 choices[88][1] = "Para el servicio de voz utiliza el canal VOL, cuyo acceso se negocia previamente a trav&eacute;s del canal VOL-ALLOC";
 choices[88][2] = "Utiliza modulaciones adaptativas para el aprovechamiento &oacute;ptimo del canal.";
 choices[88][3] = "Utiliza multiplexaci&oacute;n estad&iacute;stica en el dominio de la frecuencia.";
 answers[88] = choices[88][1];
 units[88] = "108";
 comments[88] = "Id Pregunta: 9383. ";


//  Id pregunta: 9390 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  El servicio universal de telecomunicaciones es:";
 choices[89]= new Array();
 choices[89][0] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza en un &aacute;mbito compartido entre varios usuarios, con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[89][1] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[89][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a los usuarios con las rentas m&aacute;s bajas con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[89][3] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los centros de formaci&oacute;n con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada.";
 answers[89] = choices[89][1];
 units[89] = "110";
 comments[89] = "Id Pregunta: 9390. Examen TIC A1 2011 Libre";


//  Id pregunta: 9397 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  MOS (&quot;Mean Opinion Score&quot;) es un &iacute;ndice subjetivo que sirve para medir la calidad de la voz. Su rango de valores est&aacute; entre 1 y 5. Si toma el valor 4, significa:";
 choices[90]= new Array();
 choices[90][0] = "La calidad es equiparable a una conversi&oacute;n cara a cara o escuchar la radio. ";
 choices[90][1] = "Apenas se entiende nada.";
 choices[90][2] = "Se perciben imperfecciones pero el sonido es claro";
 choices[90][3] = "Se requiere un esfuerzo considerable para seguir la comunicaci&oacute;n.";
 answers[90] = choices[90][2];
 units[90] = "109";
 comments[90] = "Id Pregunta: 9397. TIC AGE A2 2011 libre";


//  Id pregunta: 9506 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  En el patr&oacute;n MVC:";
 choices[91]= new Array();
 choices[91][0] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[91][1] = "Modelo son los componentes que se encargan de la carga de datos, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[91][2] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz en el servidor y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[91][3] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control del personal que accede al servidor";
 answers[91] = choices[91][0];
 units[91] = "116";
 comments[91] = "Id Pregunta: 9506. ";


//  Id pregunta: 9546 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  Seg&uacute;n la LSSI,  Los prestadores de servicios de la sociedad de la informaci&oacute;n que faciliten enlaces a otros contenidos o incluyan en los suyos directorios o instrumentos de b&uacute;squeda de contenidos no ser&aacute;n responsables por la informaci&oacute;n a la que dirijan a los destinatarios de sus servicios, siempre que ";
 choices[92]= new Array();
 choices[92][0] = "No tengan conocimiento efectivo de que la actividad o la informaci&oacute;n a la que remiten o recomiendan es il&iacute;cita o de que lesiona bienes o derechos de un tercero susceptibles de indemnizaci&oacute;n";
 choices[92][1] = "A&uacute;n teniendo conocimiento de lo estipulado en la respuesta a), act&uacute;en con diligencia para suprimir o inutilizar el enlace correspondiente.";
 choices[92][2] = "Las respuestas a) y b) son correctas";
 choices[92][3] = "Ninguna de las anteriores";
 answers[92] = choices[92][2];
 units[92] = "30";
 comments[92] = "Id Pregunta: 9546. ";


//  Id pregunta: 9596 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  En una arquitectura web en J2EE, indique cu&aacute;l es la opci&oacute;n correcta que representa la capa a la que pertenece la soluci&oacute;n JCA (J2EE Connector Architecture)";
 choices[93]= new Array();
 choices[93][0] = "Capa de cliente";
 choices[93][1] = "Capa de l&oacute;gica de negocio";
 choices[93][2] = "Capa de integraci&oacute;n";
 choices[93][3] = "Capa de sistemas de informaci&oacute;n";
 answers[93] = choices[93][3];
 units[93] = "60";
 comments[93] = "Id Pregunta: 9596. Xunta Libre 2011";


//  Id pregunta: 9757 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  En M&eacute;trica v3, la Especificaci&oacute;n del Plan de pruebas de Regresi&oacute;n se realiza en:";
 choices[94]= new Array();
 choices[94][0] = "ASI";
 choices[94][1] = "DSI";
 choices[94][2] = "CSI";
 choices[94][3] = "MSI";
 answers[94] = choices[94][3];
 units[94] = "86";
 comments[94] = "Id Pregunta: 9757. MSI.3 &quot;Preparaci&oacute;n de la implementaci&oacute;n de la modificaci&oacute;n&quot; incluye una tarea &quot;Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n&quot;";


//  Id pregunta: 9844 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Indique cu&aacute;l de las siguientes afirmaciones es VERDADERA:";
 choices[95]= new Array();
 choices[95][0] = "En un criptosistema sim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada";
 choices[95][1] = "En un criptosistema de clave p&uacute;blica el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[95][2] = "En un criptosistema de clave privada el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[95][3] = "En un criptosistema asim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada.";
 answers[95] = choices[95][3];
 units[95] = "111";
 comments[95] = "Id Pregunta: 9844. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10017 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Al problema en un SGBD en que dos transacciones paralelas intentan modificar el mismo objeto de la base de datos, leyendo ambas el valor antes de que la otra transacci&oacute;n lo actualice, se conoce como:";
 choices[96]= new Array();
 choices[96][0] = "Lectura sucia.";
 choices[96][1] = "Lectura fantasma.";
 choices[96][2] = "Lectura no repetible.";
 choices[96][3] = "Lectura comprometida.";
 answers[96] = choices[96][2];
 units[96] = "58";
 comments[96] = "Id Pregunta: 10017. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10064 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[97]= new Array();
 choices[97][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[97][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[97][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[97][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[97] = choices[97][0];
 units[97] = "100";
 comments[97] = "Id Pregunta: 10064. TIC A2, libre, examen 2013";


//  Id pregunta: 10259 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  El derecho de oposici&oacute;n al tratamiento de datos de car&aacute;cter personal tiene sentido:";
 choices[98]= new Array();
 choices[98][0] = "Para los ficheros mencionados en b) y c)";
 choices[98][1] = "Para ficheros que recojan datos de car&aacute;cter personal y no sea preciso el consentimiento del afectado para realizar el tratamiento";
 choices[98][2] = "Para ficheros que recojan datos de car&aacute;cter personal y tengan por objeto realizar actividades de prospecci&oacute;n comercial";
 choices[98][3] = "Para todo tipo de ficheros que recojan datos de car&aacute;cter personal";
 answers[98] = choices[98][0];
 units[98] = "29";
 comments[98] = "Id Pregunta: 10259. Art&iacute;culo 34 a) y b) del RD 1720/2007";


//  Id pregunta: 10556 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Cual de las siguientes certificaciones profesionales NO pertenecen a ISACA";
 choices[99]= new Array();
 choices[99][0] = "CISSP";
 choices[99][1] = "CISA";
 choices[99][2] = "CRISC ";
 choices[99][3] = "CISM";
 answers[99] = choices[99][0];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10556. CISSP pertenece a ISC2";


