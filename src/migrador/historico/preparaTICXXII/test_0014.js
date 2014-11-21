/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 63 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; es la WAI?";
 choices[0]= new Array();
 choices[0][0] = "una asociaci&oacute;n mundial de defensa de los internautas";
 choices[0][1] = "una iniciativa para la automatizaci&oacute;n de las tareas de organizaci&oacute;n web";
 choices[0][2] = "una iniciativa para facilitar el acceso a la web de los discapacitados";
 choices[0][3] = "una iniciativa para el desarrollo de aplicaciones inal&aacute;mbricas";
 answers[0] = choices[0][2];
 units[0] = "39";
 comments[0] = "Id Pregunta: 63. ";


//  Id pregunta: 90 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &ldquo;Aqu&eacute;l equipo de inform&aacute;tica que se adapta perfectamente a las capacidades y condiciones de quienes lo usan, permitiendo su uso de manera eficiente y sin riesgo para la salud ni la seguridad&rdquo; es la definici&oacute;n para:";
 choices[1]= new Array();
 choices[1][0] = "Ordenador adaptable";
 choices[1][1] = "Ordenador, seg&uacute;n la WAI (Web Accesibility Initiative)";
 choices[1][2] = "Ordenador ecol&oacute;gico";
 choices[1][3] = "Ordenador ergon&oacute;mico";
 answers[1] = choices[1][3];
 units[1] = "39";
 comments[1] = "Id Pregunta: 90. ";


//  Id pregunta: 339 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La red de comunicaci&oacute;n en cadena de una organizaci&oacute;n es:";
 choices[2]= new Array();
 choices[2][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[2][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[2][2] = "Cada sujeto se comunica con todos los restantes";
 choices[2][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[2] = choices[2][1];
 units[2] = "23";
 comments[2] = "Id Pregunta: 339. ";


//  Id pregunta: 368 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Los est&aacute;ndares en la industria y la tecnolog&iacute;a deben ser producidos:";
 choices[3]= new Array();
 choices[3][0] = "Siempre, en todos los casos, para evitar monopolios";
 choices[3][1] = "Cuando la tecnolog&iacute;a est&eacute; madura pero a&uacute;n no hay inversiones en implementaciones propietarias, para beneficiar tanto a usuarios como a la industria";
 choices[3][2] = "Antes de que madure la tecnolog&iacute;a, para contribuir a una madurez consensuada";
 choices[3][3] = "Nunca, ya que pone en desventaja a aquellos que comenzaron a investigar en dicha tecnolog&iacute;a";
 answers[3] = choices[3][1];
 units[3] = "42";
 comments[3] = "Id Pregunta: 368. ";


//  Id pregunta: 515 Año de creación de pregunta: 2003-01-01
 questions[4]= "5)  Seg&uacute;n la Ley de propiedad intelectual, cuando el propietario de un programa de ordenador es una persona jur&iacute;dica, puede ejercer derechos de explotaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "de setenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o, si no, al de su creaci&oacute;n";
 choices[4][1] = "de sesenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita o il&iacute;cita del programa o, si no, al de su creaci&oacute;n. En caso de divulgaci&oacute;n il&iacute;cita se considerar&aacute; el de creaci&oacute;n ";
 choices[4][2] = "de 5 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa, si no al de su creaci&oacute;n";
 choices[4][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[4] = choices[4][0];
 units[4] = "36";
 comments[4] = "Id Pregunta: 515. ";


//  Id pregunta: 519 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  Si se estima en un 20% la probabilidad de un incidente que provoca una p&eacute;rdida de 10.000 euros, se est&aacute; hablando de:";
 choices[5]= new Array();
 choices[5][0] = "Un riesgo";
 choices[5][1] = "Un impacto";
 choices[5][2] = "Ninguna de las anteriores";
 choices[5][3] = "a ) y b)";
 answers[5] = choices[5][3];
 units[5] = "31, 32, 33";
 comments[5] = "Id Pregunta: 519. Auditor&iacute;a Inform&aacute;tica ";


//  Id pregunta: 562 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  Seg&uacute;n AlvinToffler las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos";
 choices[6]= new Array();
 choices[6][0] = "jararqu&iacute;as y las relaciones entre las jerarqu&iacute;as";
 choices[6][1] = "los especialistas y los gerentes";
 choices[6][2] = "Cub&iacute;culos y canales";
 choices[6][3] = "controles y procedimientos";
 answers[6] = choices[6][2];
 units[6] = "22";
 comments[6] = "Id Pregunta: 562. ";


//  Id pregunta: 706 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  DTD se emplea para:";
 choices[7]= new Array();
 choices[7][0] = "Crear documentos XML bien formados";
 choices[7][1] = "Formatear documentos XML";
 choices[7][2] = "Transformar documentos HTML en XML";
 choices[7][3] = "Validar documentos XML";
 answers[7] = choices[7][3];
 units[7] = "69";
 comments[7] = "Id Pregunta: 706. Similar a examen TIC SS A 2004";


//  Id pregunta: 795 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; son los midlets?:";
 choices[8]= new Array();
 choices[8][0] = "Son aplicaciones Java para la capa de middleware";
 choices[8][1] = "Son aplicaciones Java igualmente v&aacute;lidas para cliente o para servidor";
 choices[8][2] = "Son applets que s&oacute;lo se ejecutan bajo ciertas condiciones";
 choices[8][3] = "Son aplicaciones Java J2ME para dispositivos m&oacute;viles";
 answers[8] = choices[8][3];
 units[8] = "60";
 comments[8] = "Id Pregunta: 795. ";


//  Id pregunta: 818 Año de creación de pregunta: 2009-01-01
 questions[9]= "10)  Seg&uacute;n la Ley 34/2002,  las Administraciones P&uacute;blicas adoptar&aacute;n las medidas necesarias para que las informaci&oacute;n disponible en sus p&aacute;ginas de Internet puedan ser accesibles para discapacitados. Esto est&aacute; de acuerdo con:";
 choices[9]= new Array();
 choices[9][0] = "A partir del 31 de diciembre de 2008, las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas satisfar&aacute;n, como m&iacute;nimo, el nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos. Excepcionalmente, esta obligaci&oacute;n no ser&aacute; aplicable cuando una funcionalidad o servicio no disponga de una soluci&oacute;n tecnol&oacute;gica que permita su accesibilidad.";
 choices[9][1] = "El nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos, antes del 31 de diciembre de 2005";
 choices[9][2] = "Los criterios WAI antes del 31 de diciembre de 2008";
 choices[9][3] = "Los criterios WAI antes del 31 de diciembre de 2005";
 answers[9] = choices[9][0];
 units[9] = "30";
 comments[9] = "Id Pregunta: 818. disposici&oacute;n adicional quinta";


//  Id pregunta: 1003 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  El CLR de Microsoft.net es:";
 choices[10]= new Array();
 choices[10][0] = "Una librer&iacute;a para acceso a base de datos heterogeneas, empleando ADO.NET";
 choices[10][1] = "El encargado de compilar a un CIL (Common Intermediate Language)";
 choices[10][2] = "Una nueva estrategia de Microsoft, que defiende &quot;cero fallos&quot; en sus pr&oacute;ximos desarrollos software";
 choices[10][3] = "El mecanismo que se utiliza para enviar las peticiones SOAP a los servidores de aplicaciones remotos";
 answers[10] = choices[10][1];
 units[10] = "59";
 comments[10] = "Id Pregunta: 1003. ";


//  Id pregunta: 1118 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  En las tarjetas inteligentes sin contacto, la comunicaci&oacute;n se realiza mediante tecnolog&iacute;a de radio frecuencia, incorporando las tarjetas una antena de RF. En funci&oacute;n de la distancia que permita la comunicaci&oacute;n, &iquest;qu&eacute; descripci&oacute;n corresponde a las tarjetas?";
 choices[11]= new Array();
 choices[11][0] = "Requiere el contacto f&iacute;sico (&lt;2mm) con  el dispositivo de interfaz, aunque no su inserci&oacute;n, ni usa contactos el&eacute;ctricos";
 choices[11][1] = "Permite una distancia de 10 cm con el dispositivo de interfaz";
 choices[11][2] = "Permite una distancia de 50 cm con dispositivo de interfaz";
 choices[11][3] = "Todas las tarjetas inteligentes sin contacto son de proximidad";
 answers[11] = choices[11][1];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1118. ";


//  Id pregunta: 1201 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  JDeveloper es:";
 choices[12]= new Array();
 choices[12][0] = "Un entorno de desarrollo integrado (IDE)";
 choices[12][1] = "Una base de datos";
 choices[12][2] = "Un gestor de contenidos";
 choices[12][3] = "Un gestor de informes";
 answers[12] = choices[12][0];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1201. ";


//  Id pregunta: 1587 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Superclave.";
 choices[13][1] = "Clave principal.";
 choices[13][2] = "Tupla m&uacute;ltiple.";
 choices[13][3] = "Clave ajena.";
 answers[13] = choices[13][3];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1587. Junta Andaluc&iacute;a";


//  Id pregunta: 1675 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l NO es uno de los principios de Codd?";
 choices[14]= new Array();
 choices[14][0] = "Acceso garantizado";
 choices[14][1] = "Independencia f&iacute;sica de los datos";
 choices[14][2] = "Gesti&oacute;n de una BDR";
 choices[14][3] = "Actualizaci&oacute;n de tablas";
 answers[14] = choices[14][3];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1675. ";


//  Id pregunta: 1765 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;C&oacute;mo se denominan en Java EE los componentes de negocio en el entorno servidor?";
 choices[15]= new Array();
 choices[15][0] = "Applet.";
 choices[15][1] = "EJB.";
 choices[15][2] = "DCOM+.";
 choices[15][3] = "JSP.";
 answers[15] = choices[15][1];
 units[15] = "60,116";
 comments[15] = "Id Pregunta: 1765. JCED - Preparatic XVII";


//  Id pregunta: 1867 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  En el protocolo LDAP:";
 choices[16]= new Array();
 choices[16][0] = "La operaci&oacute;n bind permite autenticar al cliente frente al  directorio";
 choices[16][1] = "SASL se a&ntilde;adi&oacute; en LDAP v3";
 choices[16][2] = "La operaci&oacute;n unbind cierra la conexi&oacute;n con el servidor LDAP";
 choices[16][3] = "Todas las anteriores";
 answers[16] = choices[16][3];
 units[16] = "74";
 comments[16] = "Id Pregunta: 1867. ";


//  Id pregunta: 1906 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  La European Computer Driving Licence (ECDL)";
 choices[17]= new Array();
 choices[17][0] = "Es el sistema com&uacute;n europeo para el control de licencias de conducir, dentro del programa eEurope2005";
 choices[17][1] = "Es la acreditaci&oacute;n europea de uso de ordenadores recomendada por la Comisi&oacute;n Europea";
 choices[17][2] = "Es una acreditaci&oacute;n europea de uso de ordenadores gestionada por la Asociaci&oacute;n Europea de Fabricantes de Ordenadores (ECMA)";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][1];
 units[17] = "30";
 comments[17] = "Id Pregunta: 1906. ";


//  Id pregunta: 2069 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  No es una caracter&iacute;stica de la orientaci&oacute;n a objetos";
 choices[18]= new Array();
 choices[18][0] = "la programaci&oacute;n funcional";
 choices[18][1] = "El acoplamiento d&eacute;bil";
 choices[18][2] = "La ocultaci&oacute;n de la implementacion";
 choices[18][3] = "el polimorfismo";
 answers[18] = choices[18][0];
 units[18] = "82";
 comments[18] = "Id Pregunta: 2069. ";


//  Id pregunta: 2538 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Las herramientas CVS y RCS son:";
 choices[19]= new Array();
 choices[19][0] = "herramientas de gesti&oacute;n de contenidos.";
 choices[19][1] = "herramientas ofim&aacute;ticas de dise&ntilde;os gr&aacute;ficos.";
 choices[19][2] = "herramientas de control de versiones.";
 choices[19][3] = "herramientas de control de configuraci&oacute;n.";
 answers[19] = choices[19][2];
 units[19] = "90";
 comments[19] = "Id Pregunta: 2538. ";


//  Id pregunta: 3329 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Abilene es:";
 choices[20]= new Array();
 choices[20][0] = "el nombre con el que se conoce en la comunidad cient&iacute;fica a Internet2";
 choices[20][1] = "un proyecto de red troncal de altas prestaciones que interconecta GigaPops y que da apoyo al proyecto Internet2 ";
 choices[20][2] = "un nuevo est&aacute;ndar con el que se pretende implantar IPv6 progresivamente sustituyendo a IPv4";
 choices[20][3] = "una entidad de I+D a nivel mundial encargada del desarrollo de tecnolog&iacute;a inal&aacute;mbrica para comunicaciones a nivel interestelar";
 answers[20] = choices[20][1];
 units[20] = "112";
 comments[20] = "Id Pregunta: 3329. ";


//  Id pregunta: 3335 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  BGP es un protocolo que se usa para:";
 choices[21]= new Array();
 choices[21][0] = "Tratar de encontrar un sistema del cual conocemos el nombre y no la direcci&oacute;n de red en redes OSI (Broadcasting Generation Protocol)";
 choices[21][1] = "Es un protocolo de intercambio de informaci&oacute;n en modo binario entre dos entidades de transporte en el modelo OSI, para que las pasen directamente de modo transparente a la capa de Sesi&oacute;n. (Binary Gateway Protocol)";
 choices[21][2] = "Es un protocolo de enrutamiento o encaminamiento por el que se intercambian informaci&oacute;n los routers en las fronteras de los sistemas aut&oacute;nomos en redes TCP/IP (Border Gateway Protocol)";
 choices[21][3] = "Es un protocolo por el que se convierte a nivel de transporte fragmentos (o TPDUs) de Appletalk a fragmentos TCP (Bellcore Gateway Protocol)";
 answers[21] = choices[21][2];
 units[21] = "102";
 comments[21] = "Id Pregunta: 3335. ";


//  Id pregunta: 3447 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  El protocolo de gesti&oacute;n y administraci&oacute;n de redes que ha sido estandarizado por OSI es:";
 choices[22]= new Array();
 choices[22][0] = "SNMP (Simple Network Management Protocol)";
 choices[22][1] = "SMIP (Structure of Management Information Protocol)";
 choices[22][2] = "CMIP (Common Management Information Protocol)";
 choices[22][3] = "RMON (Remote Network Monitoring)";
 answers[22] = choices[22][2];
 units[22] = "104";
 comments[22] = "Id Pregunta: 3447. ";


//  Id pregunta: 3795 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Respecto a las interfaces en RDSI:";
 choices[23]= new Array();
 choices[23][0] = "La interfaz R es la definida para poder conectar los equipos no RDSI (X21, RS232&hellip;) a la especificaci&oacute;n RDSI";
 choices[23][1] = "La interfaz R es la utilizada por los equipos remotos";
 choices[23][2] = "La Interfaz R est&aacute; todav&iacute;a indefinida pues depende de las compa&ntilde;&iacute;as proveedoras de servicio";
 choices[23][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[23] = choices[23][0];
 units[23] = "103";
 comments[23] = "Id Pregunta: 3795. ";


//  Id pregunta: 3950 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  En las redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[24]= new Array();
 choices[24][0] = "Un ordenador se conecta con el siguiente y el &uacute;ltimo con el primero, formando un circuito cerrado";
 choices[24][1] = "Existe un nodo ra&iacute;z del que cuelgan uno o varios nodos";
 choices[24][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[24][3] = "Cada uno de los nodos est&aacute; conectado con todos los dem&aacute;s";
 answers[24] = choices[24][2];
 units[24] = "101";
 comments[24] = "Id Pregunta: 3950. ";


//  Id pregunta: 4072 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  &iquest;Qu&eacute; gestiona un CRM?";
 choices[25]= new Array();
 choices[25][0] = "Las relaciones con los clientes";
 choices[25][1] = "Las relaciones con los Empleados";
 choices[25][2] = "Las relaciones con clientes y empleados";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][0];
 units[25] = "65";
 comments[25] = "Id Pregunta: 4072. ";


//  Id pregunta: 4081 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  Un proxy o apoderado permite";
 choices[26]= new Array();
 choices[26][0] = "realizar funciones de repetidor, ocultando la m&aacute;quina solicitante";
 choices[26][1] = "disponer de una memoria temporal para almacenar las p&aacute;ginas web m&aacute;s visitadas";
 choices[26][2] = "traducir las direcciones internas a externas y viceversa";
 choices[26][3] = "Todas  las respuestas son correctas";
 answers[26] = choices[26][3];
 units[26] = "113";
 comments[26] = "Id Pregunta: 4081. ";


//  Id pregunta: 4206 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  La fibra &oacute;ptica m&aacute;s popular es";
 choices[27]= new Array();
 choices[27][0] = "9/125 um";
 choices[27][1] = "62.5/125 um";
 choices[27][2] = "50/125 um";
 choices[27][3] = "100/140 um";
 answers[27] = choices[27][1];
 units[27] = "99";
 comments[27] = "Id Pregunta: 4206. ";


//  Id pregunta: 4376 Año de creación de pregunta: 2007-01-01
 questions[28]= "29)  En el an&aacute;lisis de sistemas, el m&eacute;todo de Abbott:";
 choices[28]= new Array();
 choices[28][0] = "Consiste en descomponer el problema utilizando los primeros niveles del refinamiento.";
 choices[28][1] = "Construye una estructura similar a la de los datos de entrada-salida.";
 choices[28][2] = "Identifica un flujo global desde los elementos de entrada a los de salida.";
 choices[28][3] = "Sistematiza la forma de reconocer las abstracciones.";
 answers[28] = choices[28][3];
 units[28] = "80";
 comments[28] = "Id Pregunta: 4376. ";


//  Id pregunta: 4501 Año de creación de pregunta: 2007-01-01
 questions[29]= "30)  Trabajando con un diagrama PERT vemos que se retrasa una etapa no perteneciente al camino critico. Este aumento de duraci&oacute;n, &iquest;retrasar&aacute; la fecha del final del proyecto?";
 choices[29]= new Array();
 choices[29][0] = "Siempre, dado que todo retraso en una etapa afecta a la duraci&oacute;n del proyecto.";
 choices[29][1] = "Nunca, al no pertenecer la etapa al camino cr&iacute;tico.";
 choices[29][2] = "S&oacute;lo si la nueva duraci&oacute;n de la etapa es superior a la duraci&oacute;n de cualquiera de las otras etapas.";
 choices[29][3] = "S&oacute;lo si la nueva duraci&oacute;n convierte en critico el camino al que pertenece la etapa.";
 answers[29] = choices[29][3];
 units[29] = "27";
 comments[29] = "Id Pregunta: 4501. Castilla la Mancha 06";


//  Id pregunta: 4692 Año de creación de pregunta: 2007-01-01
 questions[30]= "31)  &iquest;Qu&eacute; no es una ventaja de los sistemas abiertos seg&uacute;n la Estrategia de Sistemas Abiertos de la Administraci&oacute;n del Estado?";
 choices[30]= new Array();
 choices[30][0] = "Libertad de elecci&oacute;n";
 choices[30][1] = "Protecci&oacute;n de la inversi&oacute;n";
 choices[30][2] = "Mejor relaci&oacute;n calidad/precio";
 choices[30][3] = "Garant&iacute;a de comunicaci&oacute;n e interoperabilidad de los sistemas";
 answers[30] = choices[30][2];
 units[30] = "40";
 comments[30] = "Id Pregunta: 4692. Examen 2006 JCYL";


//  Id pregunta: 4739 Año de creación de pregunta: 2007-01-01
 questions[31]= "32)  La refactorizaci&oacute;n consiste en:";
 choices[31]= new Array();
 choices[31][0] = "Mejorar el c&oacute;digo fuente.";
 choices[31][1] = "Mejorar el dise&ntilde;o de una aplicaci&oacute;n.";
 choices[31][2] = "Mejorar el mantenimiento del c&oacute;digo fuente.";
 choices[31][3] = "Todas las respuestas anteriores son correctas.";
 answers[31] = choices[31][3];
 units[31] = "91";
 comments[31] = "Id Pregunta: 4739. Examen 2006 JCYL";


//  Id pregunta: 5106 Año de creación de pregunta: 2003-01-01
 questions[32]= "33)  Cuando en una empresa la forma de desarrollar proyectos (gesti&oacute;n e ingenier&iacute;a) est&aacute; definida, es decir, que est&aacute; establecida, documentada y que existen m&eacute;tricas (obtenci&oacute;n de datos objetivos) para la consecuci&oacute;n de objetivos concretos, seg&uacute;n CMMI est&aacute;:";
 choices[32]= new Array();
 choices[32][0] = "Nivel 1";
 choices[32][1] = "Nivel 2";
 choices[32][2] = "Nivel 3";
 choices[32][3] = "Nivel 4";
 answers[32] = choices[32][2];
 units[32] = "92";
 comments[32] = "Id Pregunta: 5106. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5277 Año de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indique cu&aacute;l no es una ventaja de la fibra &oacute;ptica frente a los cableados de cobre:";
 choices[33]= new Array();
 choices[33][0] = "Mayor ancho de banda.";
 choices[33][1] = "Inmunidad al ruido electromagn&eacute;tico.";
 choices[33][2] = "Instalaci&oacute;n y conexionado m&aacute;s sencilla.";
 choices[33][3] = "Menor tama&ntilde;o y peso.";
 answers[33] = choices[33][2];
 units[33] = "99";
 comments[33] = "Id Pregunta: 5277. ";


//  Id pregunta: 5450 Año de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "Un estadio social y econ&oacute;mico de desarrollo";
 choices[34][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar";
 choices[34][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles";
 choices[34][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[34] = choices[34][2];
 units[34] = "21";
 comments[34] = "Id Pregunta: 5450. Castilla y Le&oacute;n";


//  Id pregunta: 5785 Año de creación de pregunta: 2009-01-01
 questions[35]= "36)  &iquest;De acuerdo al est&aacute;ndar, cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS R99 si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[35]= new Array();
 choices[35][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[35][1] = "100 kbps";
 choices[35][2] = "144 Kbps";
 choices[35][3] = "384 kbps";
 answers[35] = choices[35][3];
 units[35] = "108";
 comments[35] = "Id Pregunta: 5785. ";


//  Id pregunta: 5924 Año de creación de pregunta: 2009-01-01
 questions[36]= "37)  De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &quot;Retorno de la Inversi&oacute;n&quot;:";
 choices[36]= new Array();
 choices[36][0] = "Beneficio Neto Anual";
 choices[36][1] = "Inversi&oacute;n Promedio";
 choices[36][2] = "Coste desarrollo anualizado";
 choices[36][3] = "Periodo de Amortizaci&oacute;n";
 answers[36] = choices[36][3];
 units[36] = "86";
 comments[36] = "Id Pregunta: 5924. MAP 2008 A1";


//  Id pregunta: 5998 Año de creación de pregunta: 2010-01-01
 questions[37]= "38)  El Plan Estrat&eacute;gico Inform&aacute;tico Departamental debe ser elaborado por:";
 choices[37]= new Array();
 choices[37][0] = "La Subsecretar&iacute;a.";
 choices[37][1] = "La Comisi&oacute;n Ministerial de Administraci&oacute;n Electr&oacute;nica.";
 choices[37][2] = "Las Unidades de Inform&aacute;tica del Ministerio.";
 choices[37][3] = "El Subdirector General de Inform&aacute;tica.";
 answers[37] = choices[37][1];
 units[37] = "77";
 comments[37] = "Id Pregunta: 5998. TIC A 2009";


//  Id pregunta: 6067 Año de creación de pregunta: 2010-01-01
 questions[38]= "39)  Dentro del &aacute;mbito del reconocimiento de patrones, &iquest;para que se usa el algoritmo 'FCM'?";
 choices[38]= new Array();
 choices[38][0] = "El &lsquo;Forward Chaining Method&rsquo; es uno de la procedimientos de inferencia b&aacute;sico de un sistema de reglas";
 choices[38][1] = "El &lsquo;Fuzzy C-Means&rsquo; es un algoritmo de agrupamiento (an&aacute;lisis cluster) que utiliza l&oacute;gica borrosa";
 choices[38][2] = "El algoritmo &lsquo;Final Cognitive Map&rsquo; captura los patrones mediante mapas cognitivos";
 choices[38][3] = "Ninguna de las anteriores es correcta";
 answers[38] = choices[38][1];
 units[38] = "63";
 comments[38] = "Id Pregunta: 6067. ";


//  Id pregunta: 6154 Año de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Cu&aacute;ntas versiones de NFS hay actualmente en uso?";
 choices[39]= new Array();
 choices[39][0] = "Tres: NFSv2, NFSv3 y NFSv4.";
 choices[39][1] = "Dos: NFSv3 y NFSv4.";
 choices[39][2] = "Tres: NFSv3, NFSv4 y NFSv5.";
 choices[39][3] = "Tres: NFSv1, NFSv2 y NFSv3.";
 answers[39] = choices[39][0];
 units[39] = "112";
 comments[39] = "Id Pregunta: 6154. ";


//  Id pregunta: 6183 Año de creación de pregunta: 2010-01-01
 questions[40]= "41)  XPDL, XML Process Definition Language, dentro de los 5 interfaces que defini&oacute; la WfMC, podr&iacute;a encuadrarse dentro del interfaz n&uacute;mero:";
 choices[40]= new Array();
 choices[40][0] = "1";
 choices[40][1] = "2";
 choices[40][2] = "3";
 choices[40][3] = "4";
 answers[40] = choices[40][0];
 units[40] = "71";
 comments[40] = "Id Pregunta: 6183. ";


//  Id pregunta: 6347 Año de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el podcasting es cierta?";
 choices[41]= new Array();
 choices[41][0] = "Podcasting es la distribuci&oacute;n de archivos multimedia (normalmente audio o v&iacute;deo) mediante un sistema de sindicaci&oacute;n que permita suscribirse y usar un programa que lo descarga para que el usuario lo escuche en el momento que quiera.";
 choices[41][1] = "Habitualmente, no es necesario estar suscrito para descargar un podcast";
 choices[41][2] = "En Internet podemos encontrar todo tipo de podcast de todo tipo de tem&aacute;ticas";
 choices[41][3] = "Todas las anteriores son ciertas";
 answers[41] = choices[41][3];
 units[41] = "120";
 comments[41] = "Id Pregunta: 6347. ";


//  Id pregunta: 6463 Año de creación de pregunta: 2010-01-01
 questions[42]= "43)  Indique cu&aacute;l NO es una t&eacute;cnica de planificaci&oacute;n temporal:";
 choices[42]= new Array();
 choices[42][0] = "WBS (Work Breakdown Structure)";
 choices[42][1] = "PERT (Program Evaluation and Review Technique)";
 choices[42][2] = "Diagrama de Gantt";
 choices[42][3] = "CPM (Critical Path Method)";
 answers[42] = choices[42][0];
 units[42] = "28";
 comments[42] = "Id Pregunta: 6463. Castilla La Mancha 2009";


//  Id pregunta: 6495 Año de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes es una Learning Management System liberada bajo licencia GPL?";
 choices[43]= new Array();
 choices[43][0] = "Lucus";
 choices[43][1] = "Raxor";
 choices[43][2] = "Esprat";
 choices[43][3] = "Leat";
 answers[43] = choices[43][0];
 units[43] = "66";
 comments[43] = "Id Pregunta: 6495. Castilla La Mancha 2009";


//  Id pregunta: 6538 Año de creación de pregunta: 2010-01-01
 questions[44]= "45)  En relaci&oacute;n a las t&eacute;cnicas de control de acceso";
 choices[44]= new Array();
 choices[44][0] = "DAC permite a los propietarios de los datos elegir los sujetos que tienen acceso a los mismos";
 choices[44][1] = "MAC usa un sistema de etiquetado";
 choices[44][2] = "El control de acceso no discrecional usa un m&eacute;todo basado en roles para determinar los permisos";
 choices[44][3] = "Todas las respuestas anteriores son correctas";
 answers[44] = choices[44][3];
 units[44] = "111";
 comments[44] = "Id Pregunta: 6538. ";


//  Id pregunta: 6575 Año de creación de pregunta: 2010-01-01
 questions[45]= "46)  Podemos definir ARP poisoning como";
 choices[45]= new Array();
 choices[45][0] = "Alteraci&oacute;n de la tabla ARP para que una direcci&oacute;n IP se corresponda con una MAC distinta a la que ten&iacute;a";
 choices[45][1] = "Con este ataque no se puede redirigir el tr&aacute;fico al ordenador del atacante";
 choices[45][2] = "A y B son correctas";
 choices[45][3] = "A y B son incorrectas";
 answers[45] = choices[45][0];
 units[45] = "100";
 comments[45] = "Id Pregunta: 6575. ";


//  Id pregunta: 6582 Año de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;A qu&eacute; ficheros de los enumerados a continuaci&oacute;n corresponde no aplicar las medidas de nivel medio?";
 choices[46]= new Array();
 choices[46][0] = "A los recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[46][1] = "A los relativos a la comisi&oacute;n de infracciones administrativas y penales";
 choices[46][2] = "A los de las Administraciones tributarias y que se relacionen con el ejercicio de sus potestades tributarias";
 choices[46][3] = "Todos los ficheros mencionados anteriormente deben aplicar medidas de seguridad de nivel medio.";
 answers[46] = choices[46][3];
 units[46] = "29";
 comments[46] = "Id Pregunta: 6582. ";


//  Id pregunta: 6634 Año de creación de pregunta: 2010-01-01
 questions[47]= "48)  Entre los distintos modelos de calidad NO se encuentra:";
 choices[47]= new Array();
 choices[47][0] = "FURPS (Funcionality, Usability, Reliability, Performance, Supportability)";
 choices[47][1] = "McCall";
 choices[47][2] = "EFQM (European Foundation for Quality Management)";
 choices[47][3] = "EQAM (European Quality Assurance Method)";
 answers[47] = choices[47][3];
 units[47] = "88";
 comments[47] = "Id Pregunta: 6634. ";


//  Id pregunta: 7282 Año de creación de pregunta: 2010-01-01
 questions[48]= "49)  Generalmente el primer paso en un proceso de virtualizaci&oacute;n de infraestructuras TIC en una Organizaci&oacute;n suele ser un proyecto de:";
 choices[48]= new Array();
 choices[48][0] = "Consolidaci&oacute;n de servidores";
 choices[48][1] = "Virtualizaci&oacute;n de salvaguardas";
 choices[48][2] = "SaaS (Storage as a Service)";
 choices[48][3] = "Computing Mobility";
 answers[48] = choices[48][0];
 units[48] = "119";
 comments[48] = "Id Pregunta: 7282. Examen TIC B 2009";


//  Id pregunta: 7301 Año de creación de pregunta: 2010-01-01
 questions[49]= "50)  Indique cu&aacute;l de los siguientes es el algoritmo m&aacute;s utilizado en el proceso de descodificaci&oacute;n en reconocimiento del habla:";
 choices[49]= new Array();
 choices[49][0] = "Viterbi";
 choices[49][1] = "Ruffini";
 choices[49][2] = "Enoch-Root";
 choices[49][3] = "Baum-Welch";
 answers[49] = choices[49][0];
 units[49] = "94";
 comments[49] = "Id Pregunta: 7301. ";


//  Id pregunta: 7328 Año de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Qu&eacute; instituci&oacute;n representa a Espa&ntilde;a en ISO?";
 choices[50]= new Array();
 choices[50][0] = "SETSI";
 choices[50][1] = "Red.es";
 choices[50][2] = "AENOR";
 choices[50][3] = "INTECO";
 answers[50] = choices[50][2];
 units[50] = "42";
 comments[50] = "Id Pregunta: 7328. ";


//  Id pregunta: 7354 Año de creación de pregunta: 2010-01-01
 questions[51]= "52)  Se&ntilde;ale la CORRECTA:";
 choices[51]= new Array();
 choices[51][0] = "En un criterio a minimizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[51][1] = "En un criterio a maximizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[51][2] = "Es obligatorio establecer un umbral de saciedad";
 choices[51][3] = "Todas son INCORRECTAS";
 answers[51] = choices[51][0];
 units[51] = "34";
 comments[51] = "Id Pregunta: 7354. ";


//  Id pregunta: 8221 Año de creación de pregunta: 2011-01-01
 questions[52]= "53)  El est&aacute;ndar internacional que m&aacute;s se asemeja a las gu&iacute;as de buenas pr&aacute;cticas ITIL es el:";
 choices[52]= new Array();
 choices[52][0] = "IS0 9000.";
 choices[52][1] = "ISO 20000.";
 choices[52][2] = "ISO 27001.";
 choices[52][3] = "ISO 27000.";
 answers[52] = choices[52][1];
 units[52] = "98";
 comments[52] = "Id Pregunta: 8221. Examen TIC A1 2010";


//  Id pregunta: 8278 Año de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes algoritmos de encaminamiento est&aacute; basado en el estado del enlace?:";
 choices[53]= new Array();
 choices[53][0] = "RIP versi&oacute;n 1.";
 choices[53][1] = "OSPF.";
 choices[53][2] = "BGP.";
 choices[53][3] = "RIP versi&oacute;n 2.";
 answers[53] = choices[53][1];
 units[53] = "102";
 comments[53] = "Id Pregunta: 8278. Examen TIC A1 2010";


//  Id pregunta: 8341 Año de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[54]= new Array();
 choices[54][0] = "El Diccionario de Datos.";
 choices[54][1] = "El Diagrama de Flujo de Datos.";
 choices[54][2] = "Las especificaciones de procesos.";
 choices[54][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[54] = choices[54][3];
 units[54] = "86";
 comments[54] = "Id Pregunta: 8341. Examen TIC A2 2010";


//  Id pregunta: 8461 Año de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de estos NO es un est&aacute;ndar del W3C para Web Services?:";
 choices[55]= new Array();
 choices[55][0] = "UDDI";
 choices[55][1] = "SOAP";
 choices[55][2] = "WSDL";
 choices[55][3] = "XML";
 answers[55] = choices[55][0];
 units[55] = "51";
 comments[55] = "Id Pregunta: 8461. Analista Ayto. Madrid 2010";


//  Id pregunta: 8464 Año de creación de pregunta: 2011-01-01
 questions[56]= "57)  El .NET Framework 3.5, facilita tareas de programaci&oacute;n de gesti&oacute;n de cadenas de texto, colecciones de datos, conectividad con base de datos, acceso a fichero, entre otros; adem&aacute;s incluye tipos para soportar varios escenarios de desarrollo especializado. &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones pueden desarrollarse sobre .NET Framework?:";
 choices[56]= new Array();
 choices[56][0] = "Windows Forms";
 choices[56][1] = "Web Services";
 choices[56][2] = "Ambos";
 choices[56][3] = "Ninguno";
 answers[56] = choices[56][2];
 units[56] = "115";
 comments[56] = "Id Pregunta: 8464. Analista Ayto. Madrid 2010";


//  Id pregunta: 8503 Año de creación de pregunta: 2011-01-01
 questions[57]= "58)  En IPv4 la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar, &iquest;Cu&aacute;l es &eacute;l rango de valores que puede tomar este campo? ";
 choices[57]= new Array();
 choices[57][0] = "0-15";
 choices[57][1] = "0-255";
 choices[57][2] = "0-5";
 choices[57][3] = "0-127";
 answers[57] = choices[57][1];
 units[57] = "100";
 comments[57] = "Id Pregunta: 8503. Examen TIC A2 2010";


//  Id pregunta: 8519 Año de creación de pregunta: 2011-01-01
 questions[58]= "59)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[58]= new Array();
 choices[58][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[58][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[58][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[58][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[58] = choices[58][2];
 units[58] = "57, 58";
 comments[58] = "Id Pregunta: 8519. Examen TIC A2 2010 interna";


//  Id pregunta: 8664 Año de creación de pregunta: 2011-01-01
 questions[59]= "60)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[59]= new Array();
 choices[59][0] = "Bluetooth";
 choices[59][1] = "HomeRF";
 choices[59][2] = "HiperLAN/2";
 choices[59][3] = "IrLMP";
 answers[59] = choices[59][1];
 units[59] = "107";
 comments[59] = "Id Pregunta: 8664. Examen UPM A2 2011";


//  Id pregunta: 8757 Año de creación de pregunta: 2011-01-01
 questions[60]= "61)  En un esquema de multiprogramaci&oacute;n en memoria real, independientemente de que est&eacute; basado en particiones de tama&ntilde;o fijas o de tama&ntilde;o variable, &iquest;en qu&eacute; consiste el algoritmo del &quot;siguiente ajuste&quot; para elegir el tama&ntilde;o de la partici&oacute;n en la que alojar un programa?";
 choices[60]= new Array();
 choices[60][0] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado";
 choices[60][1] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado, pero dejando un apuntador al lugar en donde se asigno el &uacute;ltimo hueco";
 choices[60][2] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la mayor cantidad al tama&ntilde;o deseado";
 choices[60][3] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la menor cantidad al tama&ntilde;o deseado.";
 answers[60] = choices[60][1];
 units[60] = "52";
 comments[60] = "Id Pregunta: 8757. Examen TIC A2 2010 interna";


//  Id pregunta: 8819 Año de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de estas normas especifica los requisitos para un buen sistema de gesti&oacute;n de calidad?";
 choices[61]= new Array();
 choices[61][0] = "ISO 9001";
 choices[61][1] = "ISO 9000";
 choices[61][2] = "ISO 9004";
 choices[61][3] = "ISO 19011";
 answers[61] = choices[61][0];
 units[61] = "87, 92";
 comments[61] = "Id Pregunta: 8819. Examen UPM A2 2011";


//  Id pregunta: 8822 Año de creación de pregunta: 2011-01-01
 questions[62]= "63)  Al modificar un programa protegido por licencia GPL, el resultado deberemos protegerlo con una licencia:";
 choices[62]= new Array();
 choices[62][0] = "GPL";
 choices[62][1] = "BSD";
 choices[62][2] = "EULA";
 choices[62][3] = "GNU";
 answers[62] = choices[62][0];
 units[62] = "61";
 comments[62] = "Id Pregunta: 8822. Examen UPM A2 2011";


//  Id pregunta: 8827 Año de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Qu&eacute; tipo de filtro se emplea en im&aacute;genes digitales para detectar bordes?";
 choices[63]= new Array();
 choices[63][0] = " Filtro paso bajo";
 choices[63][1] = " 	Filtro paso alto";
 choices[63][2] = " Filtro de mediana";
 choices[63][3] = " Filtro de la moda";
 answers[63] = choices[63][1];
 units[63] = "93";
 comments[63] = "Id Pregunta: 8827. Examen UC3M 2010";


//  Id pregunta: 8877 Año de creación de pregunta: 2011-01-01
 questions[64]= "65)  En un DFD es falso que:";
 choices[64]= new Array();
 choices[64][0] = "Los flujos de datos no puede conectar dos almacenes directamente.";
 choices[64][1] = "Los flujos de datos no pueden ser continuos.";
 choices[64][2] = "Los flujos de datos de di&aacute;logo pueden comunicar procesos.";
 choices[64][3] = "Los flujos de datos de consulta parten de almacenes de datos.";
 answers[64] = choices[64][1];
 units[64] = "81";
 comments[64] = "Id Pregunta: 8877. Examen UPM A2 2011";


//  Id pregunta: 8896 Año de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Qu&eacute; grupos de operaciones est&aacute;n definidas en el modelo funcional de LDAP?";
 choices[65]= new Array();
 choices[65][0] = "De consulta, de actualizaci&oacute;n y de b&uacute;squeda";
 choices[65][1] = "De b&uacute;squeda, de actualizaci&oacute;n y de control";
 choices[65][2] = "De consulta, de actualizaci&oacute;n y de autenticaci&oacute;n y control";
 choices[65][3] = "De comparaci&oacute;n, de consulta y de b&uacute;squeda";
 answers[65] = choices[65][2];
 units[65] = "74";
 comments[65] = "Id Pregunta: 8896. ";


//  Id pregunta: 8970 Año de creación de pregunta: 2011-01-01
 questions[66]= "67)  Entre los agentes del Plan General de Garant&iacute;a de la Calidad no figura:";
 choices[66]= new Array();
 choices[66][0] = "EGC (Eq garant&iacute;a calidad)";
 choices[66][1] = "EDS (Equipo de desarrollo)";
 choices[66][2] = "DIR (Director de proyecto)";
 choices[66][3] = "CDC (Comit&eacute; directivo de calidad)";
 answers[66] = choices[66][3];
 units[66] = "87,88,92";
 comments[66] = "Id Pregunta: 8970. ";


//  Id pregunta: 8986 Año de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes es una recomendaci&oacute;n del formato Facturae";
 choices[67]= new Array();
 choices[67][0] = "Formato de firma XMLDSig ENVELOPED";
 choices[67][1] = "Algoritmo de canonicalizaci&oacute;n C14N";
 choices[67][2] = "Algoritmo de firma RSA sobre SHA1";
 choices[67][3] = "Todas las anteriores";
 answers[67] = choices[67][3];
 units[67] = "70";
 comments[67] = "Id Pregunta: 8986. ";


//  Id pregunta: 8987 Año de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil?";
 choices[68]= new Array();
 choices[68][0] = "Scrum";
 choices[68][1] = "XP (eXtreme Programming)";
 choices[68][2] = "Getting Real";
 choices[68][3] = "Todas las anteriores";
 answers[68] = choices[68][3];
 units[68] = "79";
 comments[68] = "Id Pregunta: 8987. ";


//  Id pregunta: 9029 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[69]= new Array();
 choices[69][0] = "Wowza Media Server";
 choices[69][1] = "Icecast";
 choices[69][2] = "Darwin Streaming Server";
 choices[69][3] = "FlowCast";
 answers[69] = choices[69][3];
 units[69] = "117";
 comments[69] = "Id Pregunta: 9029. ";


//  Id pregunta: 9068 Año de creación de pregunta: 2013-01-01
 questions[70]= "71)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a las normas WCAG 2.0:";
 choices[70]= new Array();
 choices[70][0] = "Una de las mejoras respecto a WCAG 1.0 es la posibilidad de evaluarlas de manera autom&aacute;tica. ";
 choices[70][1] = "En Espa&ntilde;a se incorporan mediante la norma UNE 139803. ";
 choices[70][2] = "Constan de 14 pautas. ";
 choices[70][3] = "La pauta Adaptable dentro del principio Perceptible se refiere a &quot;Contenido presentado de diferentes formas sin perder informaci&oacute;n o estructura&quot;. ";
 answers[70] = choices[70][2];
 units[70] = "39";
 comments[70] = "Id Pregunta: 9068. ";


//  Id pregunta: 9101 Año de creación de pregunta: 2013-01-01
 questions[71]= "72)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[71]= new Array();
 choices[71][0] = "Mediante el elemento Assets.";
 choices[71][1] = "Mediante el elemento Permission.";
 choices[71][2] = "Mediante el elemento Constraints.";
 choices[71][3] = "Todas son falsas.";
 answers[71] = choices[71][0];
 units[71] = "37";
 comments[71] = "Id Pregunta: 9101. ";


//  Id pregunta: 9197 Año de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[72]= new Array();
 choices[72][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[72][1] = "Si, como obra literaria.";
 choices[72][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[72][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[72] = choices[72][3];
 units[72] = "36";
 comments[72] = "Id Pregunta: 9197. ";


//  Id pregunta: 9201 Año de creación de pregunta: 2013-01-01
 questions[73]= "74)  El lenguaje de expresi&oacute;n de derechos REL se basa en contenedores de grants. Indica cual de los siguientes elementos no forma parte de un grant.";
 choices[73]= new Array();
 choices[73][0] = "Principal.";
 choices[73][1] = "Right.";
 choices[73][2] = "Resource.";
 choices[73][3] = "Constraints.";
 answers[73] = choices[73][3];
 units[73] = "37";
 comments[73] = "Id Pregunta: 9201. ";


//  Id pregunta: 9208 Año de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; es CAS?";
 choices[74]= new Array();
 choices[74][0] = "Content Address Storage";
 choices[74][1] = "Permiten almacenar una &uacute;nica copia de la informaci&oacute;n duplicada.";
 choices[74][2] = "Permiten reducir el espacio de almacenamiento requerido.";
 choices[74][3] = "Todas son correctas.";
 answers[74] = choices[74][3];
 units[74] = "48";
 comments[74] = "Id Pregunta: 9208. ";


//  Id pregunta: 9266 Año de creación de pregunta: 2013-01-01
 questions[75]= "76)  Si queremos programar la ejecuci&oacute;n del script &quot;/home/user/script.sh&quot; todos los mi&eacute;rcoles y domingos cada 4 horas, la entrada a a&ntilde;adir en el fichero cron ser&iacute;a:";
 choices[75]= new Array();
 choices[75][0] = "0 */4 * * 3,7 /home/user/script.sh";
 choices[75][1] = "* 4 * * 0,3 /home/user/script.sh ";
 choices[75][2] = "0 */4 wed,sun * * /home/user/script.sh ";
 choices[75][3] = "* */4 * * 3-7 /home/user/script.sh ";
 answers[75] = choices[75][0];
 units[75] = "53";
 comments[75] = "Id Pregunta: 9266. Examen TICA2-2011";


//  Id pregunta: 9330 Año de creación de pregunta: 2013-01-01
 questions[76]= "77)  El cable de categor&iacute;a 6 seg&uacute;n la norma ANSI";
 choices[76]= new Array();
 choices[76][0] = "Equivale al cable clase E de ISO";
 choices[76][1] = "Es el cable adecuado para transmisiones de 100 mbps";
 choices[76][2] = "Su rango de funcionamiento alcanza los 100 mhz";
 choices[76][3] = "Se trata de una";
 answers[76] = choices[76][0];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9330. ";


//  Id pregunta: 9350 Año de creación de pregunta: 2013-01-01
 questions[77]= "78)  DSS1 es:";
 choices[77]= new Array();
 choices[77][0] = "Un protocolo utilizado en ADSL, en la capa de red, para la gesti&oacute;n de conexiones con el DSLAM";
 choices[77][1] = "Un protocolo utilizado en RDSI, de la capa de red, para gesti&oacute;n de conexiones.";
 choices[77][2] = "Un protocolo utilizado en RDSI en la capa de enlace, para el control de acceso al canal D";
 choices[77][3] = "Un protocolo utilizado en ADSL, en la capa de enlace, para el acceso m&uacute;ltiple a los servicios";
 answers[77] = choices[77][1];
 units[77] = "103";
 comments[77] = "Id Pregunta: 9350. Pag. 8 astic 2011";


//  Id pregunta: 9367 Año de creación de pregunta: 2013-01-01
 questions[78]= "79)  Los niveles de servicio de Resilient Packet Ring son:";
 choices[78]= new Array();
 choices[78][0] = "Clase A: Servicio best effort";
 choices[78][1] = "Clase B: Con latencia y jitter predecible.";
 choices[78][2] = "Clase C: Para tr&aacute;fico con requisitos de baja latencia y bajo jitter.";
 choices[78][3] = "Todas las respuestas son correctas.";
 answers[78] = choices[78][1];
 units[78] = "101";
 comments[78] = "Id Pregunta: 9367. ";


//  Id pregunta: 9399 Año de creación de pregunta: 2013-01-01
 questions[79]= "80)  En el modelo de referencia de ATM, &iquest;c&oacute;mo se denomina la capa que tiene las funciones de convergencia, y segmentaci&oacute;n y reensamblado?";
 choices[79]= new Array();
 choices[79][0] = "TC";
 choices[79][1] = "PM";
 choices[79][2] = "AAL";
 choices[79][3] = "ATM";
 answers[79] = choices[79][2];
 units[79] = "109";
 comments[79] = "Id Pregunta: 9399. TIC AGE A2 2011 Promo Int";


//  Id pregunta: 9425 Año de creación de pregunta: 2013-01-01
 questions[80]= "81)  Si tuviese que fijar los l&iacute;mites de exposici&oacute;n en un nivel adecuado para la salud a la hora de instalar una antena, &iquest;Qu&eacute; normativa ser&iacute;a la de referencia?";
 choices[80]= new Array();
 choices[80][0] = "Real Decreto 1066/2001";
 choices[80][1] = "Ley 9/2014 General de Telecomunicaciones";
 choices[80][2] = "Ley 56/2007,de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[80][3] = "Real Decreto 899/2009";
 answers[80] = choices[80][0];
 units[80] = "110";
 comments[80] = "Id Pregunta: 9425. ";


//  Id pregunta: 9445 Año de creación de pregunta: 2013-01-01
 questions[81]= "82)  En programaci&oacute;n orientada a objetos, la propiedad por la cual un mismo mensaje puede originar conductas diferentes al ser recibido por distintos objetos se denomina:";
 choices[81]= new Array();
 choices[81][0] = "Sobrecarga.";
 choices[81][1] = "Herencia.";
 choices[81][2] = "Extensibilidad.";
 choices[81][3] = "Polimorfismo.";
 answers[81] = choices[81][3];
 units[81] = "82";
 comments[81] = "Id Pregunta: 9445. Examen AGE TIC A1 2011";


//  Id pregunta: 9448 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  En el modelo de ciclo de vida en espiral, dentro de cada ciclo:";
 choices[82]= new Array();
 choices[82][0] = "La dimensi&oacute;n radial representa el avance y la angular el coste.";
 choices[82][1] = "La dimensi&oacute;n radial representa la complejidad y la angular el avance.";
 choices[82][2] = "La dimensi&oacute;n radial representa el coste y la angular la complejidad.";
 choices[82][3] = "La dimensi&oacute;n radial representa el coste y la angular el avance.";
 answers[82] = choices[82][3];
 units[82] = "76";
 comments[82] = "Id Pregunta: 9448. Examen AGE TIC A1 2011";


//  Id pregunta: 9488 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  Indique cu&aacute;l de los siguientes no es un tipo de prototipo en el proceso unificado de desarrollo del software";
 choices[83]= new Array();
 choices[83][0] = "Prototipo arquitect&oacute;nico";
 choices[83][1] = "Prototipo de prueba";
 choices[83][2] = "Prototipo exploratorio";
 choices[83][3] = "Prototipo evolutivo";
 answers[83] = choices[83][1];
 units[83] = "78";
 comments[83] = "Id Pregunta: 9488. ";


//  Id pregunta: 9545 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  Seg&uacute;n la LSSI, entre los elementos que los prestadores de servicios de la Sociedad de la Informaci&oacute;n est&aacute;n obligados a indicar en su p&aacute;gina web NO se encuentra:";
 choices[84]= new Array();
 choices[84][0] = "El nombre o denominiaci&oacute;n social";
 choices[84][1] = "Un n&uacute;mero de tel&eacute;fono de contacto";
 choices[84][2] = "El n&uacute;mero de inscripci&oacute;n en el registro mercantil u otro registro p&uacute;blico";
 choices[84][3] = "Los c&oacute;digos de conducta a los que est&eacute; adheridos.";
 answers[84] = choices[84][1];
 units[84] = "30";
 comments[84] = "Id Pregunta: 9545. ";


//  Id pregunta: 9610 Año de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[85]= new Array();
 choices[85][0] = "SQL 2000";
 choices[85][1] = "SQL:2003";
 choices[85][2] = "SQL:2005";
 choices[85][3] = "SQL:2008";
 answers[85] = choices[85][2];
 units[85] = "58";
 comments[85] = "Id Pregunta: 9610. ";


//  Id pregunta: 9670 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  La gesti&oacute;n NUMA:";
 choices[86]= new Array();
 choices[86][0] = "Significa Not Uniform Memory Access.";
 choices[86][1] = "Significa Not Unit of Memory Available.";
 choices[86][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[86][3] = "La a) y la c)";
 answers[86] = choices[86][3];
 units[86] = "45";
 comments[86] = "Id Pregunta: 9670. ";


//  Id pregunta: 9750 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes respuestas se corresponde con una base de datos no SQL destinada a almacenar enormes cantidades de datos?";
 choices[87]= new Array();
 choices[87][0] = "Citrix";
 choices[87][1] = "Oracle";
 choices[87][2] = "MySql Extend";
 choices[87][3] = "Cassandra";
 answers[87] = choices[87][3];
 units[87] = "58";
 comments[87] = "Id Pregunta: 9750. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9760 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  La aplicaci&oacute;n para la presentaci&oacute;n telem&aacute;tica de proposiciones a los procedimientos de adopci&oacute;n de tipo de bienes y serviciosde adquisici&oacute;n centralizada, se denomina:";
 choices[88]= new Array();
 choices[88][0] = "CONECTA-PATRIMONIO";
 choices[88][1] = "PITER";
 choices[88][2] = "CONECTA-CENTRALIZACI&Oacute;N";
 choices[88][3] = "No existe tal aplicaci&oacute;n";
 answers[88] = choices[88][2];
 units[88] = "41";
 comments[88] = "Id Pregunta: 9760. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. Tramitaci&oacute;n de solicitudes a trav&eacute;s de CONECTA  CENTRALIZACI&Oacute;N.";


//  Id pregunta: 9767 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  El ataque a SSL/TLS que permite extraer informaci&oacute;n sobre los tokens de login, email, etc en 30 segundos se llama:";
 choices[89]= new Array();
 choices[89][0] = "Beast Attack";
 choices[89][1] = "Crime";
 choices[89][2] = "Breach";
 choices[89][3] = "No existe dicho ataque";
 answers[89] = choices[89][2];
 units[89] = "111";
 comments[89] = "Id Pregunta: 9767. ";


//  Id pregunta: 9809 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  Seg&uacute;n M&eacute;trica v3, en el contexto del modelo entidad-relaci&oacute;n extendido, se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[90]= new Array();
 choices[90][0] = "La cardinalidad representa la participaci&oacute;n en la relaci&oacute;n de cada una de las entidades afectadas. ";
 choices[90][1] = "Un tipo de entidad describe el esquema o intensi&oacute;n para un conjunto de entidades que poseen la misma estructura. ";
 choices[90][2] = "Cuando las ocurrencias de una entidad no pueden existir si desaparece el ejemplar del tipo de entidad regular del cual depende, se dice que existe una dependencia en existencia. ";
 choices[90][3] = "La agregaci&oacute;n, consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian. ";
 answers[90] = choices[90][3];
 units[90] = "86";
 comments[90] = "Id Pregunta: 9809. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10026 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  El Entity Framework es:";
 choices[91]= new Array();
 choices[91][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[91][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[91][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[91][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[91] = choices[91][0];
 units[91] = "59";
 comments[91] = "Id Pregunta: 10026. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10030 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[92]= new Array();
 choices[92][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[92][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[92][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.			";
 choices[92][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[92] = choices[92][3];
 units[92] = "104";
 comments[92] = "Id Pregunta: 10030. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10201 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[93]= new Array();
 choices[93][0] = "Corresponde a la release 7 del 3GPP (3rd Generation Partnership Project)";
 choices[93][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[93][2] = "Reutiliza los RNC (Radio Network Controller) de la red 3G incorporando las funciones de los nodos B";
 choices[93][3] = "El ancho de banda de los canales pasa de los 5 MHz de 3G a los 20MHz";
 answers[93] = choices[93][1];
 units[93] = "108";
 comments[93] = "Id Pregunta: 10201. Se trata de la release 8. Desaparece el RNC y sus funciones se incorporan al eNode B (Evolved Node B). El ancho de banda no es fijo sino variable entre 1,25MHz y 20MHz.";


//  Id pregunta: 10225 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[94]= new Array();
 choices[94][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[94][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[94][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[94][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[94] = choices[94][1];
 units[94] = "60";
 comments[94] = "Id Pregunta: 10225. ";


//  Id pregunta: 10233 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;En que casos una sesi&oacute;n ser&aacute; invalidada?:";
 choices[95]= new Array();
 choices[95][0] = "No se recibe una petici&oacute;n del cliente superado el plazo de session timeout";
 choices[95][1] = "El cliente envia una petici&oacute;n KILL_SESSION";
 choices[95][2] = "El contenedor de servlets invalida una sesi&oacute;n por sobrecarga en el servidor";
 choices[95][3] = "El usuario cierra la ventana del navegador";
 answers[95] = choices[95][0];
 units[95] = "116";
 comments[95] = "Id Pregunta: 10233. ";


//  Id pregunta: 10255 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Seg&uacute;n el art&iacute;culo 10 de la Ley 15/1999, LOPD, el deber de secreto: ";
 choices[96]= new Array();
 choices[96][0] = "Afecta a todos los que intervengan en el tratamiento de datos, por tiempo indefinido";
 choices[96][1] = "Afecta a todos los que intervengan en el tratamiento de datos, s&oacute;lo mientras dure dicho tratamiento";
 choices[96][2] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, por tiempo indefinido";
 choices[96][3] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, s&oacute;lo mientras dure dicho tratamiento";
 answers[96] = choices[96][0];
 units[96] = "29";
 comments[96] = "Id Pregunta: 10255. Art&iacute;culo 10 de la Ley 15/1999";


//  Id pregunta: 10440 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En el direccionamiento IPv4, clase C ";
 choices[97]= new Array();
 choices[97][0] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^21 redes con 254 nodos posibles. ";
 choices[97][1] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^21 redes  con 254 nodos posibles. ";
 choices[97][2] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^22 redes  con 126 nodos posibles. ";
 choices[97][3] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^22 redes  con 128 nodos posibles. ";
 answers[97] = choices[97][0];
 units[97] = "100";
 comments[97] = "Id Pregunta: 10440. Examen TIC A1 2013";


//  Id pregunta: 10502 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Quien es considerado el creador del Lenguaje HTML?";
 choices[98]= new Array();
 choices[98][0] = "Dan Connolly";
 choices[98][1] = "Hank Thomas-Lee";
 choices[98][2] = "Conway Berners-Lee";
 choices[98][3] = "Tim Berners-Lee";
 answers[98] = choices[98][3];
 units[98] = "69";
 comments[98] = "Id Pregunta: 10502. ";


//  Id pregunta: 10553 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[99]= new Array();
 choices[99][0] = "Escaneo de iris y de huella dactilar";
 choices[99][1] = "Identificador de usuario y sistema GPS";
 choices[99][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[99][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[99] = choices[99][2];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10553. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";


