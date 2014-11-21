/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 571 Año de creación de pregunta: 2006-01-01
 questions[0]= "1)   Stephen P. Robbins aport&oacute; a los sistemas de informaci&oacute;n";
 choices[0]= new Array();
 choices[0][0] = "Algoritmos de ordenaci&oacute;n num&eacute;rica";
 choices[0][1] = "Una m&eacute;todo de  de gesti&oacute;n de colas";
 choices[0][2] = "Estudios sobre planificaci&oacute;n estrat&eacute;gica";
 choices[0][3] = "Un m&eacute;todo de planificaci&oacute;n de procesos";
 answers[0] = choices[0][2];
 units[0] = "23";
 comments[0] = "Id Pregunta: 571. ";


//  Id pregunta: 620 Año de creación de pregunta: 2006-01-01
 questions[1]= "2)  La auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, o triple E, ha sido bautizada por la United Kingdom Audit Office como:";
 choices[1]= new Array();
 choices[1][0] = "VFN";
 choices[1][1] = "VAN";
 choices[1][2] = "TIR";
 choices[1][3] = "VFM";
 answers[1] = choices[1][3];
 units[1] = "33";
 comments[1] = "Id Pregunta: 620. ";


//  Id pregunta: 760 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  En tecnolog&iacute;a microsoft, para trabajar con bases de datos,utilizaremos";
 choices[2]= new Array();
 choices[2][0] = "ODBC";
 choices[2][1] = "ADO";
 choices[2][2] = "OLE DB";
 choices[2][3] = "Cualquiera de los anteriores";
 answers[2] = choices[2][3];
 units[2] = "59";
 comments[2] = "Id Pregunta: 760. ";


//  Id pregunta: 820 Año de creación de pregunta: 2009-01-01
 questions[3]= "4)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[3]= new Array();
 choices[3][0] = "Salvaguarda del orden p&uacute;blico";
 choices[3][1] = "Salvaguarda del inter&eacute;s general";
 choices[3][2] = "Respeto a la dignidad de la persona";
 choices[3][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[3] = choices[3][1];
 units[3] = "30";
 comments[3] = "Id Pregunta: 820. ";


//  Id pregunta: 1027 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Entrust:";
 choices[4]= new Array();
 choices[4][0] = "Un algoritmo criptogr&aacute;fico";
 choices[4][1] = "Un mecanismo de intercambio de claves";
 choices[4][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[4][3] = "Una funcion resumen";
 answers[4] = choices[4][2];
 units[4] = "74";
 comments[4] = "Id Pregunta: 1027. ";


//  Id pregunta: 1197 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Java ME es:";
 choices[5]= new Array();
 choices[5][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[5][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[5][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[5][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[5] = choices[5][1];
 units[5] = "60";
 comments[5] = "Id Pregunta: 1197. ";


//  Id pregunta: 1449 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes licencias no es compatible con la licencia General Public License (GPL)?:";
 choices[6]= new Array();
 choices[6][0] = "Lesser General Public License (LGPL)";
 choices[6][1] = "Modified BSD License";
 choices[6][2] = "Mozilla Public License (MPL)";
 choices[6][3] = "X11 License";
 answers[6] = choices[6][2];
 units[6] = "61,62";
 comments[6] = "Id Pregunta: 1449. ";


//  Id pregunta: 1833 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Se&ntilde;alar la respuesta falsa";
 choices[7]= new Array();
 choices[7][0] = "HTML es un subconjunto de SGML";
 choices[7][1] = "XHTML es un subconjunto de XML";
 choices[7][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[7][3] = "RTF es un subconjunto de SGML";
 answers[7] = choices[7][2];
 units[7] = "69";
 comments[7] = "Id Pregunta: 1833. ";


//  Id pregunta: 1884 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[8]= new Array();
 choices[8][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente previamente no solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[8][1] = "Es posible el env&iacute;o de comunicaciones publicitarias si existe relaci&oacute;n contractual previa ";
 choices[8][2] = "En todo caso, el prestador deber&aacute; ofrecer la posibilidad de oponerse al tratamiento de sus datos con fines promocionales mediante un procedimiento sencillo y gratuito, tanto en la recogida de los datos como en cada una de las comunicaciones comerciales.";
 choices[8][3] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica no ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos.";
 answers[8] = choices[8][0];
 units[8] = "30";
 comments[8] = "Id Pregunta: 1884. ";


//  Id pregunta: 1925 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n &iquest;Qu&eacute; se entiende como grado de una tabla?";
 choices[9]= new Array();
 choices[9][0] = "El n&uacute;mero de filas de la tabla";
 choices[9][1] = "El n&uacute;mero de columnas de la tabla";
 choices[9][2] = "El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n";
 choices[9][3] = "El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas";
 answers[9] = choices[9][1];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1925. ";


//  Id pregunta: 1990 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; significa OMG?:";
 choices[10]= new Array();
 choices[10][0] = "Organization Military  Government";
 choices[10][1] = "Object Manual Gestion";
 choices[10][2] = "Oriented Method Gestion";
 choices[10][3] = "Object Management Group";
 answers[10] = choices[10][3];
 units[10] = "82";
 comments[10] = "Id Pregunta: 1990. ";


//  Id pregunta: 2043 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Cu&aacute;ntos criterios y subcriterios de calidad considera el Modelo de Excelencia de la EFQM?";
 choices[11]= new Array();
 choices[11][0] = "Considera 9 criterios y 32 subcriterios";
 choices[11][1] = "Considera 11 criterios y 23 subcriterios, de forma an&aacute;loga a los factores y criterios de calidad del Modelo de McCall";
 choices[11][2] = "El modelo de la EFQM solo considera criterios de calidad, en concreto ocho criterios";
 choices[11][3] = "El modelo de la EFQM no habla de criterios y subcriterios, sino de factores de calidad y criterios de calidad, y considera 8 factores y 36 criterios";
 answers[11] = choices[11][0];
 units[11] = "92";
 comments[11] = "Id Pregunta: 2043. ";


//  Id pregunta: 2742 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  Una entidad est&aacute; en tercera forma normal (3FN) si:";
 choices[12]= new Array();
 choices[12][0] = "No tiene grupos repetitivos";
 choices[12][1] = "Si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria";
 choices[12][2] = "Si est&aacute; en 2FN y no tiene grupos repetitivos";
 choices[12][3] = "Un atributo s&oacute;lo puede tomar un &uacute;nico valor de un dominio simple";
 answers[12] = choices[12][1];
 units[12] = "58";
 comments[12] = "Id Pregunta: 2742. ";


//  Id pregunta: 2756 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;C&oacute;mo se denomina la t&eacute;cnica que permite  obtener un modelo f&iacute;sico de datos a partir del modelo de clases?";
 choices[13]= new Array();
 choices[13][0] = "Matricial";
 choices[13][1] = "Historia de vidas de las entidades";
 choices[13][2] = "Diagrama de paquetes";
 choices[13][3] = "Reglas de transformaci&oacute;n.";
 answers[13] = choices[13][3];
 units[13] = "82";
 comments[13] = "Id Pregunta: 2756. ";


//  Id pregunta: 2825 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  Sobre el M&Eacute;TODO DE JONES se puede decir...";
 choices[14]= new Array();
 choices[14][0] = "Jones utiliza el Rect&aacute;ngulo de Probabilidades para calcular el coste m&aacute;ximo y m&iacute;nimo del mantenimiento (en el caso menos favorable y en el m&aacute;s favorable), e indica que el coste estimado cae dentro del Rect&aacute;ngulo de Probabilidades.";
 choices[14][1] = "Una desventaja de las unidades de costo es que todos los gastos asociados al mantenimiento no se pueden expresar en la misma unidad. ";
 choices[14][2] = "Se estima el n&uacute;mero de unidades programables que hay que mantener y se calcula el n&uacute;mero de personas requeridas para gestionar el mismo bas&aacute;ndose en datos hist&oacute;ricos de proyectos anteriores y en la experiencia.";
 choices[14][3] = "Se basa en el Tr&aacute;fico de Cambio Anual&quot; de Boehm.";
 answers[14] = choices[14][0];
 units[14] = "90";
 comments[14] = "Id Pregunta: 2825. ";


//  Id pregunta: 2989 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Qu&eacute; norma se encargaga de la estabdarizaci&oacute;n de redes inal&aacute;mbricas de &aacute;rea personal?";
 choices[15]= new Array();
 choices[15][0] = "El IEEE 802.11";
 choices[15][1] = "El IEEE 802.15";
 choices[15][2] = "El AUT-C";
 choices[15][3] = "El UIT-T E-164";
 answers[15] = choices[15][1];
 units[15] = "42";
 comments[15] = "Id Pregunta: 2989. ";


//  Id pregunta: 3202 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[16]= new Array();
 choices[16][0] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad";
 choices[16][1] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red";
 choices[16][2] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad";
 choices[16][3] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad";
 answers[16] = choices[16][0];
 units[16] = "104";
 comments[16] = "Id Pregunta: 3202. ";


//  Id pregunta: 3247 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso b&aacute;sico RDSI en Europa?:";
 choices[17]= new Array();
 choices[17][0] = "8 Kbps";
 choices[17][1] = "16 Kbps";
 choices[17][2] = "32 Kbps";
 choices[17][3] = "64 Kbps";
 answers[17] = choices[17][1];
 units[17] = "103";
 comments[17] = "Id Pregunta: 3247. ";


//  Id pregunta: 3391 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  El nivel de enlace del modelo OSI tiene como funci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Enrutar los datos";
 choices[18][1] = "Conectar sistemas no enlazados directamente";
 choices[18][2] = "Transmitir informaci&oacute;n entre nodos conectados entre si directamente";
 choices[18][3] = "Mantener la integridad de los datos entre extremos de la red";
 answers[18] = choices[18][2];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3391. ";


//  Id pregunta: 3988 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  Sobre FDDI:";
 choices[19]= new Array();
 choices[19][0] = "Su est&aacute;ndar no est&aacute; recogido por la IEEE ni aceptado por ANSI";
 choices[19][1] = "Se conoce como X3T9.3";
 choices[19][2] = "Su equivalente en cobre es CDDI";
 choices[19][3] = "Todas son verdaderas";
 answers[19] = choices[19][2];
 units[19] = "101";
 comments[19] = "Id Pregunta: 3988. ";


//  Id pregunta: 4064 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  &iquest;Qu&eacute; sentido tiene la ley de protecci&oacute;n intelectual?";
 choices[20]= new Array();
 choices[20][0] = "La defensa de los productos de las multinacionales";
 choices[20][1] = "Evitar que se pueda difundir el software libre";
 choices[20][2] = "Incentivar la inversi&oacute;n de las multinacionales del software y la musica";
 choices[20][3] = "La defensa de los derechos de los autores";
 answers[20] = choices[20][3];
 units[20] = "36";
 comments[20] = "Id Pregunta: 4064. ";


//  Id pregunta: 4266 Año de creación de pregunta: 2007-01-01
 questions[21]= "22)  Indique cu&aacute;l de los siguientes no es un servicio LDAP";
 choices[21]= new Array();
 choices[21][0] = "READ";
 choices[21][1] = "COMPARE";
 choices[21][2] = "ADD";
 choices[21][3] = "ABANDON";
 answers[21] = choices[21][0];
 units[21] = "74";
 comments[21] = "Id Pregunta: 4266. ";


//  Id pregunta: 4418 Año de creación de pregunta: 2007-01-01
 questions[22]= "23)  las diferencias principales entre el cable no apantallado UTP tipo 3 y el UTP tipo 5 es que";
 choices[22]= new Array();
 choices[22][0] = "UTP-3 incluye tres pares en un mismo conducto aislante, y UTP-5, cinco pares.";
 choices[22][1] = "UTP-5 es m&aacute;s trenzado por unidad de longitud que UTP-3.";
 choices[22][2] = "UTP-5 utiliza conectores RJ45, y UTP-3 utiliza RJ43.";
 choices[22][3] = "UTP-3 tiene m&aacute;s capacidad (ancho de banda), y consigue mayores velocidades que UTP-5.";
 answers[22] = choices[22][1];
 units[22] = "99";
 comments[22] = "Id Pregunta: 4418. ";


//  Id pregunta: 4584 Año de creación de pregunta: 2007-01-01
 questions[23]= "24)  Cual de las siguientes opciones NO es un contenedor para Ia arquitectura J2EE";
 choices[23]= new Array();
 choices[23][0] = "contenedor web";
 choices[23][1] = "contenedor EJB";
 choices[23][2] = "contenedor de aplicaci&oacute;n cliente";
 choices[23][3] = "contenedor de base de datos";
 answers[23] = choices[23][3];
 units[23] = "60";
 comments[23] = "Id Pregunta: 4584. ";


//  Id pregunta: 4643 Año de creación de pregunta: 2007-01-01
 questions[24]= "25)  Los cursores de referencia de Pl/SQL";
 choices[24]= new Array();
 choices[24][0] = "son m&aacute;s r&aacute;pidos que los cursores est&aacute;ndar (o normales).";
 choices[24][1] = "pueden aceptar la asociaci&oacute;n de variables";
 choices[24][2] = "pueden usarse como cursores impl&iacute;citos en bucles";
 choices[24][3] = "pueden aceptar par&aacute;metros";
 answers[24] = choices[24][1];
 units[24] = "";
 comments[24] = "Id Pregunta: 4643. ";


//  Id pregunta: 5004 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de estas afirmaciones sobre accesibilidad es cierta de acuerdo con las gu&iacute;as del W3C?";
 choices[25]= new Array();
 choices[25][0] = "Una p&aacute;gina web accesible debe tener textos equivalentes para cualquier elemento no textual";
 choices[25][1] = "Un p&aacute;gina web accesible debe contener solo texto";
 choices[25][2] = "Una p&aacute;gina web accesible no debe utilizar colores";
 choices[25][3] = "Una p&aacute;gina web accesible debe utilizar un &uacute;nico tipo de letra establecido en estas gu&iacute;as";
 answers[25] = choices[25][0];
 units[25] = "39";
 comments[25] = "Id Pregunta: 5004. Examen TIC A 2007";


//  Id pregunta: 5160 Año de creación de pregunta: 2003-01-01
 questions[26]= "27)  Un HUB es un dispositivo de interconexi&oacute;n utilizado para:";
 choices[26]= new Array();
 choices[26][0] = "Enlazar LANs separadas y proporcionar filtrado de paquetes entre ellas.";
 choices[26][1] = "Interconectar redes con protocolos y arquitecturas completamente diferentes, a todos los niveles de comunicaci&oacute;n.";
 choices[26][2] = "Concentrar y organizar el cableado en una red de &aacute;rea local.";
 choices[26][3] = "Controlar las comunicaciones, permit&eacute;ndolas o prohibi&eacute;ndolas seg&uacute;n las pol&iacute;ticas de red que haya definido la organizaci&oacute;n responsable de la red.";
 answers[26] = choices[26][2];
 units[26] = "102";
 comments[26] = "Id Pregunta: 5160. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5574 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Qu&eacute; modelo escoger&iacute;a si el objetivo es la mejora continua de la eficiencia de los servicios y operaciones y la calidad del servicio al cliente?";
 choices[27]= new Array();
 choices[27][0] = "ITIL";
 choices[27][1] = "CMMI";
 choices[27][2] = "COBIT";
 choices[27][3] = "M&Eacute;TRICA";
 answers[27] = choices[27][0];
 units[27] = "98";
 comments[27] = "Id Pregunta: 5574. ";


//  Id pregunta: 5915 Año de creación de pregunta: 2009-01-01
 questions[28]= "29)  En el modelo de Evoluci&oacute;n de los Sistemas de Informaci&oacute;n de Gibson y Nolan se distinguen cuatro etapas distintas en el crecimiento de todo sistema de informaci&oacute;n en una empresa. &iquest;Cu&aacute;l es el orden cronol&oacute;gico correcto de dichas etapas?";
 choices[28]= new Array();
 choices[28][0] = "Iniciaci&oacute;n, formalizaci&oacute;n, expansi&oacute;n y madurez";
 choices[28][1] = "Iniciaci&oacute;n, expansi&oacute;n, madurez y formalizaci&oacute;n";
 choices[28][2] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 choices[28][3] = "Iniciaci&oacute;n, formalizaci&oacute;n, madurez y expansi&oacute;n";
 answers[28] = choices[28][2];
 units[28] = "21";
 comments[28] = "Id Pregunta: 5915. MAP 2008 A1";


//  Id pregunta: 5976 Año de creación de pregunta: 2010-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[29]= new Array();
 choices[29][0] = "Internet Information Server.";
 choices[29][1] = "Weblogic.";
 choices[29][2] = "Websphere.";
 choices[29][3] = "Apache.";
 answers[29] = choices[29][3];
 units[29] = "113";
 comments[29] = "Id Pregunta: 5976. TIC A 2009";


//  Id pregunta: 6543 Año de creación de pregunta: 2010-01-01
 questions[30]= "31)  Un ejemplo de ataque al control de acceso es";
 choices[30]= new Array();
 choices[30][0] = "Denegaci&oacute;n de servicio";
 choices[30][1] = "Spoofing";
 choices[30][2] = "Ataques de diccionario";
 choices[30][3] = "Todas las respuestas anteriores son correctas";
 answers[30] = choices[30][3];
 units[30] = "111";
 comments[30] = "Id Pregunta: 6543. ";


//  Id pregunta: 6566 Año de creación de pregunta: 2010-01-01
 questions[31]= "32)  UMTS ";
 choices[31]= new Array();
 choices[31][0] = "Reutiliza el subsistema de red de GSM";
 choices[31][1] = "Reutiliza el subsistema de red de GPRS";
 choices[31][2] = "El sistema de acceso radio es nuevo";
 choices[31][3] = "Todas las respuestas anteriores son ciertas";
 answers[31] = choices[31][3];
 units[31] = "108";
 comments[31] = "Id Pregunta: 6566. ";


//  Id pregunta: 7252 Año de creación de pregunta: 2010-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes opciones representa la m&aacute;scara 255.255.240.0?";
 choices[32]= new Array();
 choices[32][0] = "/20";
 choices[32][1] = "/22";
 choices[32][2] = "/24";
 choices[32][3] = "/240";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 7252. Examen TIC B 2009";


//  Id pregunta: 7774 Año de creación de pregunta: 2010-01-01
 questions[33]= "34)   Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a M&Eacute;TRICA v. 3:";
 choices[33]= new Array();
 choices[33][0] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[33][1] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[33][2] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[33][3] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 answers[33] = choices[33][0];
 units[33] = "86";
 comments[33] = "Id Pregunta: 7774. Map 2005";


//  Id pregunta: 8185 Año de creación de pregunta: 2011-01-01
 questions[34]= "35)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[34]= new Array();
 choices[34][0] = "No est&aacute; en primera forma normal.";
 choices[34][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[34][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[34][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[34] = choices[34][2];
 units[34] = "58";
 comments[34] = "Id Pregunta: 8185. Examen TIC A1 2010";


//  Id pregunta: 8206 Año de creación de pregunta: 2011-01-01
 questions[35]= "36)  En relaci&oacute;n con los perfiles de participantes, seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[35]= new Array();
 choices[35][0] = "Son 5: Directivo, Jefe de Proyecto, Consultor, Analista y Programador.";
 choices[35][1] = "Son 7: Director, Jefe de Proyecto, Equipo de Proyecto y Responsables de Arquitectura, Seguridad, Sistemas yOperaciones.";
 choices[35][2] = "Son 8: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsables de Arquitectura, Seguridad,Sistemas y Operaciones.";
 choices[35][3] = "Son 5: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsable de Calidad.";
 answers[35] = choices[35][0];
 units[35] = "86";
 comments[35] = "Id Pregunta: 8206. Examen TIC A1 2010";


//  Id pregunta: 8268 Año de creación de pregunta: 2011-01-01
 questions[36]= "37)  Al hablar de virtualizaci&oacute;n de servidores, se llama hypervisor:";
 choices[36]= new Array();
 choices[36][0] = "A la capa de software sobre la que se ejecutan las m&aacute;quinas virtuales.";
 choices[36][1] = "A la aplicaci&oacute;n que monitoriza una m&aacute;quina virtual.";
 choices[36][2] = "A un producto comercial de virtualizaci&oacute;n.";
 choices[36][3] = "Al gestor de memoria de la m&aacute;quina f&iacute;sica.";
 answers[36] = choices[36][0];
 units[36] = "119";
 comments[36] = "Id Pregunta: 8268. Examen TIC A1 2010";


//  Id pregunta: 8310 Año de creación de pregunta: 2011-01-01
 questions[37]= "38)  La autoridad encargada de la asignaci&oacute;n de nombres de dominio de primer nivel gen&eacute;ricos (gTLD) y de c&oacute;digos de pa&iacute;ses (ocTLD) &uacute;nicos en lnternet es:";
 choices[37]= new Array();
 choices[37][0] = "IANA. ";
 choices[37][1] = "NIST.";
 choices[37][2] = "ICANN.";
 choices[37][3] = "IETF.";
 answers[37] = choices[37][2];
 units[37] = "112,42";
 comments[37] = "Id Pregunta: 8310. Examen TIC A2 2010";


//  Id pregunta: 8386 Año de creación de pregunta: 2011-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos es una prueba de caja blanca?";
 choices[38]= new Array();
 choices[38][0] = "Prueba de la tabla ortogonal.";
 choices[38][1] = "Partici&oacute;n equivalente.";
 choices[38][2] = "M&eacute;todos de prueba basados en grafos.";
 choices[38][3] = "Prueba del camino b&aacute;sico.";
 answers[38] = choices[38][3];
 units[38] = "91";
 comments[38] = "Id Pregunta: 8386. Examen TIC A2 2010";


//  Id pregunta: 8738 Año de creación de pregunta: 2011-01-01
 questions[39]= "40)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n do Datos de Car&aacute;cter Personal (LOPD) ser&aacute; de aplicaci&oacute;n a:";
 choices[39]= new Array();
 choices[39][0] = "&Uacute;nicamente los datos almacenados electr&oacute;nicamente, susceptibles de tratamiento y a toda modalidad de uso posterior de estos datos por lo sectores p&uacute;blico y privado.";
 choices[39][1] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por el sector p&uacute;blico, de forma obligatoria, y por el sector privado, como recomendaci&oacute;n.";
 choices[39][2] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, almacenados tanto en el sector p&uacute;blico como el privado, quedando excluidos los posibles usos posteriores de tales datos";
 choices[39][3] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles do tratamiento y a toda modalidad de uso posterior de estos datos por los sectores p&uacute;blico y privado";
 answers[39] = choices[39][3];
 units[39] = "29";
 comments[39] = "Id Pregunta: 8738. Examen TIC A2 2010 interna";


//  Id pregunta: 8769 Año de creación de pregunta: 2011-01-01
 questions[40]= "41)  La m&aacute;xima longitud de un datagrama IP es:";
 choices[40]= new Array();
 choices[40][0] = "128 Kbytes";
 choices[40][1] = "64 Kbytes.";
 choices[40][2] = "32 Kbytes";
 choices[40][3] = "No tiene longitud m&aacute;xima";
 answers[40] = choices[40][1];
 units[40] = "100";
 comments[40] = "Id Pregunta: 8769. Examen TIC A2 2010 interna";


//  Id pregunta: 9054 Año de creación de pregunta: 2017-01-01
 questions[41]= "42)  &iquest;Cual de las siguientes NO es una actividad del estadard ISO 13407?";
 choices[41]= new Array();
 choices[41][0] = "Generaci&oacute;n de las soluciones de dise&ntilde;o";
 choices[41][1] = "Di&aacute;logo simple y natural";
 choices[41][2] = "Producci&oacute;n de soluciones de dise&ntilde;o";
 choices[41][3] = "Entender y especificar el contexto de uso.";
 answers[41] = choices[41][0];
 units[41] = "39";
 comments[41] = "Id Pregunta: 9054. ";


//  Id pregunta: 9062 Año de creación de pregunta: 2025-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes es una infracci&oacute;n muy grave seg&uacute;n la normativa de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[42]= new Array();
 choices[42][0] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal";
 choices[42][1] = "No atender, u obstaculizar de forma sistem&aacute;tica el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n";
 choices[42][2] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello";
 choices[42][3] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos";
 answers[42] = choices[42][2];
 units[42] = "29";
 comments[42] = "Id Pregunta: 9062. ";


//  Id pregunta: 9082 Año de creación de pregunta: 2013-01-01
 questions[43]= "44)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v.3, el Plan de Sistemas de Informaci&oacute;n debe tener una perspectiva";
 choices[43]= new Array();
 choices[43][0] = "Exclusivamente estrat&eacute;gica, y no tecnol&oacute;gica";
 choices[43][1] = "Estrat&eacute;gica y operativa, y no tecnolog&iacute;ca";
 choices[43][2] = "Exclusivamente estrat&eacute;gica, y fuertemente tecnol&oacute;gica";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = choices[43][1];
 units[43] = "77";
 comments[43] = "Id Pregunta: 9082. ";


//  Id pregunta: 9339 Año de creación de pregunta: 2013-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO II?";
 choices[44]= new Array();
 choices[44][0] = "Dise&ntilde;o Arquitectura";
 choices[44][1] = "Dise&ntilde;o Preliminar";
 choices[44][2] = "Composici&oacute;n de la Aplicaci&oacute;n";
 choices[44][3] = "Post-Arquitectura";
 answers[44] = choices[44][0];
 units[44] = "88";
 comments[44] = "Id Pregunta: 9339. ";


//  Id pregunta: 9528 Año de creación de pregunta: 2013-01-01
 questions[45]= "46)  &iquest;Qu&eacute; factor afecta a la calidad de servicio en internet?";
 choices[45]= new Array();
 choices[45][0] = "Ancho de banda";
 choices[45][1] = "Jitter o variaci&oacute;n de retardo";
 choices[45][2] = "Eco";
 choices[45][3] = "Todas las respuestas anteriores son correctas";
 answers[45] = choices[45][3];
 units[45] = "117";
 comments[45] = "Id Pregunta: 9528. ";


//  Id pregunta: 9627 Año de creación de pregunta: 2014-01-01
 questions[46]= "47)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso del sistema que:";
 choices[46]= new Array();
 choices[46][0] = "Siempre se ejecuta en segundo plano (background)";
 choices[46][1] = "Siempre es de corta duraci&oacute;n";
 choices[46][2] = "Est&aacute; siempre ejecut&aacute;ndose";
 choices[46][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n. ";
 answers[46] = choices[46][0];
 units[46] = "53";
 comments[46] = "Id Pregunta: 9627. Examen TIC A1 2013";


//  Id pregunta: 9643 Año de creación de pregunta: 2014-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes proyectos est&aacute; relacionado con el intercambio de contenidos docentes y la coordinaci&oacute;n entre promotores de formaci&oacute;n en la Administraci&oacute;n General del Estado?";
 choices[47]= new Array();
 choices[47][0] = "Comp@rte";
 choices[47][1] = "Racionaliz@";
 choices[47][2] = "Compartir";
 choices[47][3] = "Educ@";
 answers[47] = choices[47][2];
 units[47] = "66";
 comments[47] = "Id Pregunta: 9643. ";


//  Id pregunta: 9666 Año de creación de pregunta: 2014-01-01
 questions[48]= "49)  La taxonom&iacute;a de Flynn:";
 choices[48]= new Array();
 choices[48][0] = "Es una clasificaci&oacute;n cl&aacute;sica de computadores en funci&oacute;n de su arquitectura.";
 choices[48][1] = "Se basa en el flujo que siguen los datos y las instrucciones dentro de una m&aacute;quina.";
 choices[48][2] = "Se divide en cuatro categor&iacute;as.";
 choices[48][3] = "Todas las anteriores.";
 answers[48] = choices[48][3];
 units[48] = "45";
 comments[48] = "Id Pregunta: 9666. ";


//  Id pregunta: 9714 Año de creación de pregunta: 2014-01-01
 questions[49]= "50)  En las redes RDSI, la UIT ha definido una serie de puntos de referencia que ha denominado";
 choices[49]= new Array();
 choices[49][0] = "A, B, C, D.";
 choices[49][1] = "E, F, G, H.";
 choices[49][2] = "S, T, U, V.";
 choices[49][3] = "W, X, Y, Z.";
 answers[49] = choices[49][2];
 units[49] = "103";
 comments[49] = "Id Pregunta: 9714. Examen TIC-A1 2013";


//  Id pregunta: 9724 Año de creación de pregunta: 2014-01-01
 questions[50]= "51)  El sistema de redundancia que consiste en la divisi&oacute;n a nivel de bloques m&aacute;s un disco de paridad dedicado se denomina";
 choices[50]= new Array();
 choices[50][0] = "RAID 1";
 choices[50][1] = "RAID 3";
 choices[50][2] = "RAID 4";
 choices[50][3] = "RAID 6";
 answers[50] = choices[50][2];
 units[50] = "48";
 comments[50] = "Id Pregunta: 9724. Examen TIC-A1 2013";


//  Id pregunta: 9745 Año de creación de pregunta: 2014-01-01
 questions[51]= "52)  &iquest;Qu&eacute; es el Marco Com&uacute;n de Evaluaci&oacute;n (CAF) 2013?";
 choices[51]= new Array();
 choices[51][0] = "CAF ofrece dos sistemas de puntuaci&oacute;n, el cl&aacute;sico y el refinado, s&oacute;lo el primero de ellos est&aacute; fundamentado sobre el Ciclo de Deming.";
 choices[51][1] = "Es uno del los ejes del modelo EFQM.";
 choices[51][2] = "Es una herramienta de gesti&oacute;n de la calidad total, desarrollada por y para el sector p&uacute;blico.";
 choices[51][3] = "Es una autoevaluaci&oacute;n que debe realizar una organizaci&oacute;n conforme a lo que dicta la norma ISO 9000.";
 answers[51] = choices[51][2];
 units[51] = "92";
 comments[51] = "Id Pregunta: 9745. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9759 Año de creación de pregunta: 2014-01-01
 questions[52]= "53)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[52]= new Array();
 choices[52][0] = "Reponen";
 choices[52][1] = "Reajustan";
 choices[52][2] = "Devuelven o cancelan";
 choices[52][3] = "Todas las anteriores";
 answers[52] = choices[52][3];
 units[52] = "41";
 comments[52] = "Id Pregunta: 9759. Art. 99, Art. 102 RD Legislativo 3/2011";


//  Id pregunta: 9769 Año de creación de pregunta: 2014-01-01
 questions[53]= "54)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[53]= new Array();
 choices[53][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[53][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[53][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[53][3] = "La ausencia de cita de la fuente.";
 answers[53] = choices[53][2];
 units[53] = "22";
 comments[53] = "Id Pregunta: 9769. ";


//  Id pregunta: 9782 Año de creación de pregunta: 2014-01-01
 questions[54]= "55)  Se&ntilde;ale cu&aacute;l de las siguientes opciones est&aacute; basada en el protocolo ICMP:";
 choices[54]= new Array();
 choices[54][0] = "SMTP";
 choices[54][1] = "SNMP ";
 choices[54][2] = "PING";
 choices[54][3] = "DNS ";
 answers[54] = choices[54][2];
 units[54] = "100";
 comments[54] = "Id Pregunta: 9782. Examen TIC A2 2013";


//  Id pregunta: 9788 Año de creación de pregunta: 2014-01-01
 questions[55]= "56)  PLS es un est&aacute;ndar relacionado con VoiceXML, &iquest;para qu&eacute; se utiliza en concreto?";
 choices[55]= new Array();
 choices[55][0] = "&quot;Decora&quot; las locuciones de forma que se generen de la mejor forma posible; por ejemplo, indicando el tono de una determinada locuci&oacute;n (m&aacute;s alto o m&aacute;s bajo). ";
 choices[55][1] = "Realiza el control de la llamada con VoiceXML. ";
 choices[55][2] = "Define la forma en la que las palabras son pronunciadas. ";
 choices[55][3] = "Define la estructura de las gram&aacute;ticas usadas en el reconocimiento del habla. ";
 answers[55] = choices[55][2];
 units[55] = "94";
 comments[55] = "Id Pregunta: 9788. Examen TIC A2 2013";


//  Id pregunta: 9800 Año de creación de pregunta: 2014-01-01
 questions[56]= "57)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[56]= new Array();
 choices[56][0] = "5 a&ntilde;os.";
 choices[56][1] = "10 a&ntilde;os.";
 choices[56][2] = "Permanentemente.";
 choices[56][3] = "15 a&ntilde;os.";
 answers[56] = choices[56][3];
 units[56] = "30";
 comments[56] = "Id Pregunta: 9800. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9810 Año de creación de pregunta: 2014-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes unidades de magnitud en relaci&oacute;n al almacenamiento de informaci&oacute;n es mayor?";
 choices[57]= new Array();
 choices[57][0] = "Pettabyte (PB).";
 choices[57][1] = "Terabyte (TB).";
 choices[57][2] = "Yottabyte (YB).";
 choices[57][3] = "Zettabyte (ZB).";
 answers[57] = choices[57][2];
 units[57] = "52";
 comments[57] = "Id Pregunta: 9810. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9849 Año de creación de pregunta: 2014-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de una DMZ (DeMilitarized Zone) o red perimetral pone en riesgo nuestra red interna?";
 choices[58]= new Array();
 choices[58][0] = "Las conexiones desde la red interna o privada a la DMZ est&aacute;n permitidas.";
 choices[58][1] = "Las conexiones desde la red externa o p&uacute;blica a la DMZ est&aacute;n permitidas.";
 choices[58][2] = "Las conexiones desde la DMZ a la red interna o privada est&aacute;n permitidas.";
 choices[58][3] = "Las conexiones desde la DMZ a la red externa o p&uacute;blica est&aacute;n permitidas.";
 answers[58] = choices[58][2];
 units[58] = "111";
 comments[58] = "Id Pregunta: 9849. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9866 Año de creación de pregunta: 2014-01-01
 questions[59]= "60)  En relaci&oacute;n con lenguajes de marcado, indique cu&aacute;l de las siguientes afirmaciones es INCORRECTA";
 choices[59]= new Array();
 choices[59][0] = "XSLT es un lenguaje de marcado para las transformaciones de documentos XML.";
 choices[59][1] = "El XML describe el contenido de la informaci&oacute;n y la estructura, mientras que HTML est&aacute; orientado a la presentaci&oacute;n de la informaci&oacute;n.";
 choices[59][2] = "XPath permite buscar y seleccionar parte de un fichero XML sin utilizar su estructura.";
 choices[59][3] = "CSS permite dar formato tanto a ficheros HTML como a ficheros XML.";
 answers[59] = choices[59][2];
 units[59] = "69";
 comments[59] = "Id Pregunta: 9866. TIC A1, Examen 2013";


//  Id pregunta: 9877 Año de creación de pregunta: 2014-01-01
 questions[60]= "61)  La norma ISO 27002";
 choices[60]= new Array();
 choices[60][0] = "es un est&aacute;ndar de facto para la prestaci&oacute;n de servicios de seguridad de la Tecnolog&iacute;a de la Informaci&oacute;n";
 choices[60][1] = "tiene como objetivo proporcionar una base com&uacute;n para la gesti&oacute;n de la seguridad dentro de las organizaciones.";
 choices[60][2] = "establece 36 dominios de control para la gesti&oacute;n de la seguridad.";
 choices[60][3] = "establece un sistema de certificaci&oacute;n adecuado a la norma.";
 answers[60] = choices[60][1];
 units[60] = "107";
 comments[60] = "Id Pregunta: 9877. TIC A1, Examen 2013";


//  Id pregunta: 9939 Año de creación de pregunta: 2014-01-01
 questions[61]= "62)  De acuerdo con el programa IDABC, entre los principios que define el Marco Europeo de Interoperabilidad NO se encuentra:";
 choices[61]= new Array();
 choices[61][0] = "el multiling&uuml;ismo.";
 choices[61][1] = "la accesibilidad.";
 choices[61][2] = "el procedimiento compartido.";
 choices[61][3] = "la subsidiaridad.";
 answers[61] = choices[61][2];
 units[61] = "40";
 comments[61] = "Id Pregunta: 9939. TIC A1, Examen 2013";


//  Id pregunta: 9946 Año de creación de pregunta: 2014-01-01
 questions[62]= "63)   El &quot;nivel de definici&oacute;n&quot; del modelo CMM (Capability Maturity Model) se caracteriza por:";
 choices[62]= new Array();
 choices[62][0] = "Proceso poco documentado. ";
 choices[62][1] = "Proceso de desarrollo por definir.";
 choices[62][2] = "Proceso de desarrollo integrado en la organizaci&oacute;n.";
 choices[62][3] = "Control cuantitativo de productos";
 answers[62] = choices[62][2];
 units[62] = "87";
 comments[62] = "Id Pregunta: 9946. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9954 Año de creación de pregunta: 2014-01-01
 questions[63]= "64)  La actividad EVS-GC 1 de la interface de Gesti&oacute;n de la Configuraci&oacute;n (GC) de M&eacute;trica v3 recibe entre sus entradas un producto resultante de la actividad:";
 choices[63]= new Array();
 choices[63][0] = "EVS 4 - Estudio de Alternativas de Soluci&oacute;n";
 choices[63][1] = "EVS 5 - Valoraci&oacute;n de las Alternativas.";
 choices[63][2] = "EVS 3 - Definici&oacute;n de Requisitos del Sistema.";
 choices[63][3] = "EVS 1 - Establecimiento del Alcance del Sistema. ";
 answers[63] = choices[63][2];
 units[63] = "86";
 comments[63] = "Id Pregunta: 9954. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9969 Año de creación de pregunta: 2014-01-01
 questions[64]= "65)  De las siguientes afirmaciones sobre XPDL seleccione la INCORRECTA:";
 choices[64]= new Array();
 choices[64][0] = "Permite escribir especificaciones de procesos Workflow de manera estandarizada";
 choices[64][1] = "Permite una representaci&oacute;n gr&aacute;fica de los procesos incluyendo coordenadas X e Y para cada nodo implementado.";
 choices[64][2] = "Proporciona una notaci&oacute;n gr&aacute;fica para facilitar la comunicaci&oacute;n humana entre usuarios";
 choices[64][3] = "Es un lenguaje de definici&oacute;n de Workflow creado por OASIS";
 answers[64] = choices[64][3];
 units[64] = "71";
 comments[64] = "Id Pregunta: 9969. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9972 Año de creación de pregunta: 2014-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes se corresponde con un m&oacute;dulo dentro de un ERP (Enterprise Resource Planning)?";
 choices[65]= new Array();
 choices[65][0] = "Recursos Humanos";
 choices[65][1] = "Planificaci&oacute;n Estrat&eacute;gica";
 choices[65][2] = "Seguridad de Informaci&oacute;n";
 choices[65][3] = "HelpDesk";
 answers[65] = choices[65][0];
 units[65] = "65";
 comments[65] = "Id Pregunta: 9972. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9983 Año de creación de pregunta: 2014-01-01
 questions[66]= "67)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[66]= new Array();
 choices[66][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[66][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[66][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[66][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[66] = choices[66][1];
 units[66] = "59,115";
 comments[66] = "Id Pregunta: 9983. Examen T&eacute;cnico especialista inform&aacute;tica, Servicio Salud C&aacute;ntabro, 2011";


//  Id pregunta: 9994 Año de creación de pregunta: 2014-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es la herramienta utilizada para organizar reuniones virtuales dentro de la Red SARA?";
 choices[67]= new Array();
 choices[67][0] = "Conect@";
 choices[67][1] = "Re&uacute;nete";
 choices[67][2] = "Acceda en Cloud";
 choices[67][3] = "TelePresence";
 answers[67] = choices[67][1];
 units[67] = "120";
 comments[67] = "Id Pregunta: 9994. ";


//  Id pregunta: 9995 Año de creación de pregunta: 2014-01-01
 questions[68]= "69)  En relaci&oacute;n a im&aacute;genes est&aacute;ticas en portales web,";
 choices[68]= new Array();
 choices[68][0] = "el formato PNG, si bien est&aacute; libre de patentes, tiene mayor p&eacute;rdida deinformaci&oacute;n que el formato JPEG.";
 choices[68][1] = "el formato GIF utiliza el algoritmo LZW de compresi&oacute;n patentado porCompuServe.";
 choices[68][2] = "JPEG tiene m&aacute;s p&eacute;rdida de informaci&oacute;n que GIF y PNG.";
 choices[68][3] = "el soporte de animaciones no es posible en PNG, utiliz&aacute;ndose NMG en sulugar.";
 answers[68] = choices[68][2];
 units[68] = "93";
 comments[68] = "Id Pregunta: 9995. ";


//  Id pregunta: 9999 Año de creación de pregunta: 2014-01-01
 questions[69]= "70)  En el &aacute;mbito de la teor&iacute;a de la decisi&oacute;n multicriterio discreta, &iquest;qu&eacute; m&eacute;todo deordenaci&oacute;n de alternativas se caracteriza por elegir en primer lugar la alternativa que tiene el mejor valor en el criterio de mayor peso?";
 choices[69]= new Array();
 choices[69][0] = "El m&eacute;todo PROMETHEE.";
 choices[69][1] = "El m&eacute;todo lexicogr&aacute;fico.";
 choices[69][2] = "El m&eacute;todo de la ponderaci&oacute;n lineal.";
 choices[69][3] = "El m&eacute;todo ELECTRE.";
 answers[69] = choices[69][1];
 units[69] = "34";
 comments[69] = "Id Pregunta: 9999. ";


//  Id pregunta: 10005 Año de creación de pregunta: 2014-01-01
 questions[70]= "71)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[70]= new Array();
 choices[70][0] = "permite trabajar desconectado del origen de datos.";
 choices[70][1] = "no se integra con XML.";
 choices[70][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[70][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[70] = choices[70][0];
 units[70] = "59, 114";
 comments[70] = "Id Pregunta: 10005. ";


//  Id pregunta: 10011 Año de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Que disposici&oacute;n legal determina el procedimiento para la expedici&oacute;n del DNI electr&oacute;nico y sus certificados de firma electr&oacute;nica?";
 choices[71]= new Array();
 choices[71][0] = "Ley 11/2007, de 22 de junio.";
 choices[71][1] = "RD 4/2010, de 8 de enero.";
 choices[71][2] = "RD 1553/2005, de 23 de diciembre.";
 choices[71][3] = "Ley 26/2007, de 28 de diciembre.";
 answers[71] = choices[71][2];
 units[71] = "70";
 comments[71] = "Id Pregunta: 10011. ";


//  Id pregunta: 10056 Año de creación de pregunta: 2014-01-01
 questions[72]= "73)  Indique de entre las siguientes cu&aacute;l es la definici&oacute;n de secr&aacute;fono:";
 choices[72]= new Array();
 choices[72][0] = "Equipo de frontera que, situado fuera de la red interna, ofrece servicios al exterior.";
 choices[72][1] = "Equipo infectado por un atacante remoto no detectado.";
 choices[72][2] = "Equipo que genera y entrega claves criptogr&aacute;ficas para su distribuci&oacute;n.";
 choices[72][3] = "Equipo para realizar el cifrado anal&oacute;gico de la voz.";
 answers[72] = choices[72][3];
 units[72] = "109";
 comments[72] = "Id Pregunta: 10056. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10084 Año de creación de pregunta: 2014-01-01
 questions[73]= "74)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo de soporte?";
 choices[73]= new Array();
 choices[73][0] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[73][1] = "Gesti&oacute;n";
 choices[73][2] = "Entorno de desarrollo";
 choices[73][3] = "Pruebas";
 answers[73] = choices[73][3];
 units[73] = "76";
 comments[73] = "Id Pregunta: 10084. ";


//  Id pregunta: 10087 Año de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil se basa en principios como &ldquo;decidir lo m&aacute;s tarde posible&rdquo; y &ldquo;reaccionar tan r&aacute;pido como sea posible?";
 choices[74]= new Array();
 choices[74][0] = "FDD";
 choices[74][1] = "LSD";
 choices[74][2] = "ASD";
 choices[74][3] = "Kanban";
 answers[74] = choices[74][1];
 units[74] = "79";
 comments[74] = "Id Pregunta: 10087. ";


//  Id pregunta: 10098 Año de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es la diferencia entre una maqueta y un prototipo seg&uacute;n M&eacute;trica v3?";
 choices[75]= new Array();
 choices[75][0] = "Ninguna, son lo mismo seg&uacute;n M&eacute;trica v3.";
 choices[75][1] = "Un prototipo describe parte de la funcionalidad del sistema, una maqueta simula el aspecto visual.";
 choices[75][2] = "Una maqueta describe parte de la funcionalidad del sistema, un prototipo simula el aspecto visual.";
 choices[75][3] = "Una maqueta es un tipo de prototipo evolutivo.";
 answers[75] = choices[75][0];
 units[75] = "78";
 comments[75] = "Id Pregunta: 10098. ";


//  Id pregunta: 10100 Año de creación de pregunta: 2014-01-01
 questions[76]= "77)  En la lista eventos del modelo ambiental, indique que tipo de evento NO existe: ";
 choices[76]= new Array();
 choices[76][0] = "Evento orientado a flujo";
 choices[76][1] = "Evento temporal";
 choices[76][2] = "Evento de control";
 choices[76][3] = "Evento cr&iacute;tico";
 answers[76] = choices[76][3];
 units[76] = "81";
 comments[76] = "Id Pregunta: 10100. ";


//  Id pregunta: 10111 Año de creación de pregunta: 2014-01-01
 questions[77]= "78)  El est&aacute;ndar Wimax est&aacute; especificado en la norma:";
 choices[77]= new Array();
 choices[77][0] = "IEEE 802.11";
 choices[77][1] = "IEEE 802.16";
 choices[77][2] = "IEEE 802.15";
 choices[77][3] = "IEEE 802.19";
 answers[77] = choices[77][1];
 units[77] = "101";
 comments[77] = "Id Pregunta: 10111. ";


//  Id pregunta: 10119 Año de creación de pregunta: 2014-01-01
 questions[78]= "79)  En la conmutaci&oacute;n de tramas Cut-through, el switch comienza a retransmitir la trama:";
 choices[78]= new Array();
 choices[78][0] = "En cuanto ha recibido los primeros 6 bytes";
 choices[78][1] = "En cuanto ha recibido los primeros 64 bytes";
 choices[78][2] = "Cuando ha recibido toda la trama";
 choices[78][3] = "Cuando ha recibido toda la trama y ha calculado el CRC";
 answers[78] = choices[78][0];
 units[78] = "102";
 comments[78] = "Id Pregunta: 10119. En cuanto recibe la direcci&oacute;n del siguiente nodo lo reenv&iacute;a.";


//  Id pregunta: 10133 Año de creación de pregunta: 2014-01-01
 questions[79]= "80)  La operaci&oacute;n TRAP de SNMP permite:";
 choices[79]= new Array();
 choices[79][0] = "Solicitar informaci&oacute;n desde el gestor";
 choices[79][1] = "Actualizar informaci&oacute;n desde el gestor al agente";
 choices[79][2] = "Enviar informaci&oacute;n desde el agente al gestor sin que la solicite";
 choices[79][3] = "Enviar informaci&oacute;n de un agente a otro";
 answers[79] = choices[79][2];
 units[79] = "104";
 comments[79] = "Id Pregunta: 10133. ";


//  Id pregunta: 10172 Año de creación de pregunta: 2014-01-01
 questions[80]= "81)  Respecto los distintos tipos de drivers JDBC, se verifica que:";
 choices[80]= new Array();
 choices[80][0] = "Los drivers JDBC de tipo III son recomendables si la aplicaci&oacute;n Java ha de acceder a diferentes bases de datos o se desconoce el SGBD destino";
 choices[80][1] = "El uso de drivers JDBC de tipo IV evita problemas de dependencia tecnol&oacute;gica del fabricante";
 choices[80][2] = "Al permitir que la aplicaci&oacute;n Java interact&uacute;e con diferentes SGBD, un driver de tipo III no es 100% Java, ya que incluye c&oacute;digo espec&iacute;fico o nativo de cada SGBD";
 choices[80][3] = "Todas las anteriores";
 answers[80] = choices[80][0];
 units[80] = "58";
 comments[80] = "Id Pregunta: 10172. ";


//  Id pregunta: 10181 Año de creación de pregunta: 2014-01-01
 questions[81]= "82)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con las clases abstractas y las interfaces:";
 choices[81]= new Array();
 choices[81][0] = "En una clase abstracta, todos los m&eacute;todos definidos deben carecer de implementaci&oacute;n";
 choices[81][1] = "Una clase abstracta podr&aacute; ser instanciada cuando la clase que hereda implemente los m&eacute;todos abstractos";
 choices[81][2] = "Una interfaz permite la implementaci&oacute;n de clases con comportamientos comunes, sin importar su ubicaci&oacute;n en la jerarqu&iacute;a de clases.";
 choices[81][3] = "Las interfaces pueden definir constantes y variables de instancia";
 answers[81] = choices[81][2];
 units[81] = "82";
 comments[81] = "Id Pregunta: 10181. ";


//  Id pregunta: 10185 Año de creación de pregunta: 2014-01-01
 questions[82]= "83)  El n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de un tipo de entidad que pueden estar relacionadas con una ocurrencia del otro u otros tipos de entidad participantes en la relaci&oacute;n se denomina:";
 choices[82]= new Array();
 choices[82][0] = "Tipo de correspondencia";
 choices[82][1] = "Cardinalidad de la entidad";
 choices[82][2] = "Grado";
 choices[82][3] = "No es de inter&eacute;s en el modelo E-R y por tanto no tiene una denominaci&oacute;n espec&iacute;fica";
 answers[82] = choices[82][1];
 units[82] = "80";
 comments[82] = "Id Pregunta: 10185. ";


//  Id pregunta: 10203 Año de creación de pregunta: 2014-01-01
 questions[83]= "84)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[83]= new Array();
 choices[83][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[83][1] = "Descarta el uso de la t&eacute;cnica HARQ (Hybrid Automatic Repeat Request) introducida en la release 5 (HSDPA)";
 choices[83][2] = "La transmisi&oacute;n multiantena est&aacute; basada en SFBC (Space Frequency Block Coding) y FSTD (Frequency-Shift Time Diversity)";
 choices[83][3] = "Se la conoce con el nombre de LTE (Long Term Evolution)";
 answers[83] = choices[83][1];
 units[83] = "108";
 comments[83] = "Id Pregunta: 10203. La t&eacute;cnica HARQ sigue us&aacute;ndose en 4G";


//  Id pregunta: 10228 Año de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ala las respuestas correctas sobre los objetosy:";
 choices[84]= new Array();
 choices[84][0] = "Un Vector puede almacenar referencias de objetos y tipos de datos primitivos";
 choices[84][1] = "Un Vector almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 choices[84][2] = "La Hashtable necesita objetos String como keys";
 choices[84][3] = "La Hashtable almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 answers[84] = choices[84][1];
 units[84] = "60";
 comments[84] = "Id Pregunta: 10228. ";


//  Id pregunta: 10234 Año de creación de pregunta: 2014-01-01
 questions[85]= "86)  Podemos considerar a SOAP como:";
 choices[85]= new Array();
 choices[85][0] = "Un protocolo XML para ser usado con tecnolog&iacute;a RMI";
 choices[85][1] = "Una especificaci&oacute;n que describe las normas en que se envian y reciben comunicaciones basadas en XML";
 choices[85][2] = "Sustituye al protocolo RPC en sistemas distribuidos que usan CORBA";
 choices[85][3] = "Ninguna de las anteriores";
 answers[85] = choices[85][1];
 units[85] = "116";
 comments[85] = "Id Pregunta: 10234. ";


//  Id pregunta: 10252 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  FooCorp modifica un software distribu&iacute;do bajo GPL, e incluye una tecnolog&iacute;a patentada por FooCorp. &iquest;Hay alg&uacute;n requisito en la licencia GPL sobre c&oacute;mo licenciar la patente aplicable?";
 choices[86]= new Array();
 choices[86][0] = "No";
 choices[86][1] = "S&iacute;, deben permitir a cualquiera que use la tecnolog&iacute;a patentada para cualquier prop&oacute;sito";
 choices[86][2] = "S&iacute;, deben permitir a cualquiera que utilice el c&oacute;digo GPL modificado para utilizar la tecnolog&iacute;a patentada.";
 choices[86][3] = "Si, deben hacer el c&oacute;digo accesible por todos";
 answers[86] = choices[86][2];
 units[86] = "61";
 comments[86] = "Id Pregunta: 10252. ";


//  Id pregunta: 10272 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de b&uacute;squeda es de tipo heur&iacute;stico?";
 choices[87]= new Array();
 choices[87][0] = "B&uacute;squeda de profundida limitada";
 choices[87][1] = "B&uacute;squeda primero el mejor";
 choices[87][2] = "B&uacute;squeda de coste uniforme";
 choices[87][3] = "B&uacute;squeda bidireccional";
 answers[87] = choices[87][1];
 units[87] = "63";
 comments[87] = "Id Pregunta: 10272. ";


//  Id pregunta: 10311 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[88]= new Array();
 choices[88][0] = "33%";
 choices[88][1] = "20%";
 choices[88][2] = "50%";
 choices[88][3] = "0%";
 answers[88] = choices[88][0];
 units[88] = "48";
 comments[88] = "Id Pregunta: 10311. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10342 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta incorrecta:";
 choices[89]= new Array();
 choices[89][0] = "La protecci&oacute;n de un programa de ordenador comprende tambi&eacute;n su documentaci&oacute;n preparatoria, documentaci&oacute;n t&eacute;cnica y manuales de uso";
 choices[89][1] = "La protecci&oacute;n de un programa de ordenador se extiende a cualesquiera versiones sucesivas del programa, as&iacute; como a los programas derivados";
 choices[89][2] = "La protecci&oacute;n mediante los derechos de autor incluye las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador incluidos los que sirven de fundamento a sus interfaces";
 choices[89][3] = "Si un programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la Ley de Propiedad Industrial";
 answers[89] = choices[89][2];
 units[89] = "36";
 comments[89] = "Id Pregunta: 10342. Consultar Art. 96 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10349 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  En relaci&oacute;n con el mecanismo de protecci&oacute;n de derechos de autor por huella digital, &iquest;c&oacute;mo se consigue que los datos del usuario que ha adquirido los derechos de uso del objeto no sean conocidos por el vendedor?";
 choices[90]= new Array();
 choices[90][0] = "Mediante el uso de https para asegurar la privacidad de la comunicaci&oacute;n";
 choices[90][1] = "Mediante el uso de un sistema de huella digital asim&eacute;trica, que emplea criptograf&iacute;a asim&eacute;trica";
 choices[90][2] = "Mediante el uso de un sistema de huella digital an&oacute;nima, utilizando un tercero de confianza que conoce tanto la identidad del comprador como del vendedor";
 choices[90][3] = "No es posible, el vendedor debe conocer los datos del comprador para poder transmitirle los derechos de uso del objeto";
 answers[90] = choices[90][2];
 units[90] = "37";
 comments[90] = "Id Pregunta: 10349. La huella digital es un mecanismo para defender los derechos de autor y combatir la copia no autorizada de contenidos que consiste en introducir una serie de bits imperceptibles sobre un producto de soporte electr&oacute;nico (CD-ROM, DVD.) de forma que se pueda";


//  Id pregunta: 10360 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Qu&eacute; organismos pueden participar en la ETSI?";
 choices[91]= new Array();
 choices[91][0] = "&Uacute;nicamente los Estados Miembros a trav&eacute;s del organismo p&uacute;blico que designen. En el caso de Espa&ntilde;a ser&iacute;a a trav&eacute;s de la SETSI.";
 choices[91][1] = "Pueden participar tanto las Administraciones P&uacute;blicas como operadores de red, la industria, centros de investigaci&oacute;n o los usuarios de los servicios de telecomunicaci&oacute;n";
 choices[91][2] = "&Uacute;nicamente los organismos nacionales de certificaci&oacute;n m&aacute;s representativos. En el caso de Espa&ntilde;a ser&iacute;a AENOR";
 choices[91][3] = "En el caso de Espa&ntilde;a, &uacute;nicamente la SETSI y AENOR";
 answers[91] = choices[91][1];
 units[91] = "42";
 comments[91] = "Id Pregunta: 10360. ETSI es un organismo sin &aacute;nimo de lucro creado al objeto de disponer del foro adecuado para la elaboraci&oacute;n de las normas de telecomunicaci&oacute;n que faciliten la estandarizaci&oacute;n del sector, y por lo tanto el avance hacia el Mercado &Uacute;nico Europeo";


//  Id pregunta: 10366 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  Respecto al m&eacute;todo de crashing en la gesti&oacute;n de proyectos es cierto que:";
 choices[92]= new Array();
 choices[92][0] = "No sirve para acortar la duraci&oacute;n de los proyectos cuando es aplicado a las actividades del camino cr&iacute;tico";
 choices[92][1] = "S&oacute;lo sirve para acortar la duraci&oacute;n de los proyectos si lo aplicamos a alguna de las actividades del camino cr&iacute;tico";
 choices[92][2] = "Acorta el tiempo del proyecto tanto si se aplica a las actividades cr&iacute;ticas como a las que no lo son";
 choices[92][3] = "No tiene nada que ver con la duraci&oacute;n del proyecto sino con la inclusi&oacute;n de recursos por fases ";
 answers[92] = choices[92][1];
 units[92] = "27";
 comments[92] = "Id Pregunta: 10366. ";


//  Id pregunta: 10370 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Al margen de consideraciones ajenas al departamento de TI (pol&iacute;ticas, organizativas, presupuestarias, etc.), la principal causa de fracaso de los proyectos de desarrollo de software es debido a:";
 choices[93]= new Array();
 choices[93][0] = "La mala gesti&oacute;n de los requisitos en la determinaci&oacute;n del alcance en la fase inicial del proyecto y en la gesti&oacute;n de los cambios del alcance una vez est&aacute; el proyecto en ejecuci&oacute;n";
 choices[93][1] = "La falta de buenos desarrolladores en las tecnolog&iacute;as modernas";
 choices[93][2] = "Es dif&iacute;cil realizar una estimaci&oacute;n del esfuerzo del proyecto porque las m&eacute;tricas estaban enfocadas a l&iacute;neas de c&oacute;digo en lenguajes estructurados pero en la actualidad es imposible realizar estimaciones an&aacute;logas con lenguajes modernos (no tiene sentido medir l&iacute;neas de c&oacute;digo en Java)";
 choices[93][3] = "Se abusa de la subcontrataci&oacute;n del software y se realiza mala gesti&oacute;n de proyectos por dicha causa.";
 answers[93] = choices[93][0];
 units[93] = "28";
 comments[93] = "Id Pregunta: 10370. ";


//  Id pregunta: 10460 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Respecto a JSON (Javascript Object Notation), indicar la respuesta incorrecta:";
 choices[94]= new Array();
 choices[94][0] = "Es una parte de la definici&oacute;n del est&aacute;ndar ECMA-262.";
 choices[94][1] = "Es una alternativa a XML en AJAX.";
 choices[94][2] = "Requiere analizadores sint&aacute;cticos complejos.";
 choices[94][3] = "Suele emplearse en entornos donde el tama&ntilde;o del flujo de datos entre cliente y servidor es importante.";
 answers[94] = choices[94][2];
 units[94] = "51";
 comments[94] = "Id Pregunta: 10460. ";


//  Id pregunta: 10479 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Si quiero cambiar el PIN del DNI electr&oacute;nico:";
 choices[95]= new Array();
 choices[95][0] = "S&oacute;lo puedo hacerlo desde mi casa pero necesito un lector de huella dactilar";
 choices[95][1] = "Puedo hacerlo desde los dispositivos autorizados por la Direcci&oacute;n General de la Polic&iacute;a";
 choices[95][2] = "Puedo hacerlo s&oacute;lo usando mi navegador web";
 choices[95][3] = "S&oacute;lo puedo hacerlo si tengo el PUK";
 answers[95] = choices[95][1];
 units[95] = "74";
 comments[95] = "Id Pregunta: 10479. ";


//  Id pregunta: 10488 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Se&ntilde;ale la respuesta correcta:";
 choices[96]= new Array();
 choices[96][0] = "Las personas pueden certificarse en las diversas opciones de  ITIL (Foundation, Intermediate, etc.) pero las empresas no, deben certificarse en la ISO 20000";
 choices[96][1] = "Las personas y empresas pueden certificarse en ITIL";
 choices[96][2] = "Las personas y empresas pueden certificase en la ISO 20000";
 choices[96][3] = "Las personas s&oacute;lo pueden certificarse en ITIL Foundation, las empresas en ITIL  Intermediate";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 10488. ";


//  Id pregunta: 10504 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Cual es la impedancia de los cables definida en la ISO 11801 para las versiones de la norma posteriores a 2002?";
 choices[97]= new Array();
 choices[97][0] = "120 ?";
 choices[97][1] = "150 ?";
 choices[97][2] = "100 ?";
 choices[97][3] = "Todos los anteriores";
 answers[97] = choices[97][2];
 units[97] = "99";
 comments[97] = "Id Pregunta: 10504. A partir del 2002, solo se consideran validas las impedancias de 100 ?";


//  Id pregunta: 10519 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Cu&aacute;l es el periodo m&aacute;ximo de inhabilitaci&oacute;n al que pueden dar lugar las infracciones muy graves:";
 choices[98]= new Array();
 choices[98][0] = "10 a&ntilde;os";
 choices[98][1] = "5 a&ntilde;os";
 choices[98][2] = "3 a&ntilde;os";
 choices[98][3] = "1 a&ntilde;o";
 answers[98] = choices[98][1];
 units[98] = "110";
 comments[98] = "Id Pregunta: 10519. ";


//  Id pregunta: 10558 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  COBIT 5 Incluye";
 choices[99]= new Array();
 choices[99][0] = "4 principios y 6 procesos habilitadores";
 choices[99][1] = "5 principios y 7 procesos habilitadores";
 choices[99][2] = "4 principios y 7 procesos habilitadores";
 choices[99][3] = "5 principios y 6 procesos habilitadores";
 answers[99] = choices[99][1];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10558. ";


