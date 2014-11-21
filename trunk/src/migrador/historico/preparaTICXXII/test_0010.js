/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 26 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU?:";
 choices[0]= new Array();
 choices[0][0] = "MPL";
 choices[0][1] = "BSD";
 choices[0][2] = "GPL";
 choices[0][3] = "PPL";
 answers[0] = choices[0][2];
 units[0] = "61";
 comments[0] = "Id Pregunta: 26. ";


//  Id pregunta: 119 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  Dentro de las t&eacute;cnicas de ayuda a la toma grupal de decisiones, una de las m&aacute;s destacadas es la:";
 choices[1]= new Array();
 choices[1][0] = "Programaci&oacute;n lineal";
 choices[1][1] = "T&eacute;cnica Delphi";
 choices[1][2] = "Teor&iacute;a de la probabilidad";
 choices[1][3] = "T&eacute;cnica de normalizaci&oacute;n de grupo";
 answers[1] = choices[1][1];
 units[1] = "23";
 comments[1] = "Id Pregunta: 119. ";


//  Id pregunta: 490 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Las normas de V.61 a V.92 de la serie V de la ITU-T tratan de:";
 choices[2]= new Array();
 choices[2][0] = "control de errores de transmisi&oacute;n";
 choices[2][1] = "interfaces y m&oacute;dems para la banda vocal";
 choices[2][2] = "transmisi&oacute;n simult&aacute;nea de datos y otras se&ntilde;ales";
 choices[2][3] = "calidad de transmisi&oacute;n y mantenimiento";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 490. ";


//  Id pregunta: 507 Año de creación de pregunta: 2003-01-01
 questions[3]= "4)  La directiva 91/250/CEE modificada por la 93/98/CEE, del Consejo relativa a la protecci&oacute;n jur&iacute;dica de los progarmas de ordenador";
 choices[3]= new Array();
 choices[3][0] = "excluye expl&iacute;citamente aquellos desarrollos sobre plataformas LINUX, shareware o software libre";
 choices[3][1] = "establece que los programas deber&aacute;n protegerse de la misma manera que las obras literarias, con arreglo a lo establecido en el convenio de Berna sobre proetcci&oacute;n de obras literarias y art&iacute;sticas";
 choices[3][2] = "regula aquellos aspectos del comercio elctr&oacute;nico relacionados con la materia de propiedad intelectual";
 choices[3][3] = "crea un nuevo t&iacute;tulo unitario de proiedad industrial 'patente comunitaria' para eliminar las distorsiones del mercado interior y permitir que Europa se aproveche al m&aacute;ximo de sus trabajos de investigaci&oacute;n";
 answers[3] = choices[3][1];
 units[3] = "36";
 comments[3] = "Id Pregunta: 507. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 531 Año de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Qu&eacute; tipo de centro de respaldo ante desastres ofrece la respuesta m&aacute;s inmediata?";
 choices[4]= new Array();
 choices[4][0] = "Hot site";
 choices[4][1] = "Warm site";
 choices[4][2] = "Instant site";
 choices[4][3] = "Cold site";
 answers[4] = choices[4][0];
 units[4] = "31, 32, 33";
 comments[4] = "Id Pregunta: 531. ";


//  Id pregunta: 560 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  Cual de las siguientes opciones no es una ventaja de un sistema integrado";
 choices[5]= new Array();
 choices[5][0] = "Mayor eficiencia conjunta y una interrelaci&oacute;n m&aacute;s efectiva de actividades entre subsistemas.";
 choices[5][1] = "Incorporaci&oacute;n de h&aacute;bitos para compartir ampliamente los recursos, obteniendo beneficios potenciales, debidos aeconom&iacute;as de escala y especializaci&oacute;n.";
 choices[5][2] = "Posibilidad de abordar las decisiones desde la perspectiva del sistema com&uacute;n conjunto en vez de sobre una basesub&oacute;ptima que utilice solamente informaci&oacute;n y objetivos locales.";
 choices[5][3] = "Sistemas mas simples evitando riesgos a&ntilde;adidos";
 answers[5] = choices[5][3];
 units[5] = "21";
 comments[5] = "Id Pregunta: 560. ";


//  Id pregunta: 565 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  A qui&eacute;n se debe la &quot;Teor&iacute;a de Recursos y Capacidades&quot;";
 choices[6]= new Array();
 choices[6][0] = "Laurence Prusak";
 choices[6][1] = "Peter Drucker";
 choices[6][2] = "Davenport";
 choices[6][3] = "Ninguno de los anteriores";
 answers[6] = choices[6][3];
 units[6] = "22";
 comments[6] = "Id Pregunta: 565. ";


//  Id pregunta: 673 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  El &quot;proyecto CERES&quot;:";
 choices[7]= new Array();
 choices[7][0] = "Establece c&oacute;mo deben de ser los certificados que se usen para realizar la firma electr&oacute;nica";
 choices[7][1] = "Hace que se pueda usar a la Fabrica Nacional de la Moneda y Timbre de forma gratuita por todos los espa&ntilde;oles";
 choices[7][2] = "Se define en el &aacute;mbito de la relaci&oacute;n de los ciudadanos con las administraciones y &eacute;stas entre si.";
 choices[7][3] = "Designa a la Fabrica Nacional de la Moneda y Timbre como autoridad de certificaci&oacute;n para cualquier transacci&oacute;n electr&oacute;nica";
 answers[7] = choices[7][2];
 units[7] = "74";
 comments[7] = "Id Pregunta: 673. ";


//  Id pregunta: 735 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  De acuerdo con lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, los contratos celebrados por v&iacute;a electr&oacute;nica:";
 choices[8]= new Array();
 choices[8][0] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que act&uacute;e un tercero como testigo";
 choices[8][1] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que a posteriori se ratifiquen ante notario o registrador";
 choices[8][2] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que en los mismos intervenga un abogado o procurador";
 choices[8][3] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que haya consentimiento y el resto de requisitos necesarios para su validez como cualquier otro contrato";
 answers[8] = choices[8][3];
 units[8] = "30";
 comments[8] = "Id Pregunta: 735. Examen TIC MAP B 2004";


//  Id pregunta: 795 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; son los midlets?:";
 choices[9]= new Array();
 choices[9][0] = "Son aplicaciones Java para la capa de middleware";
 choices[9][1] = "Son aplicaciones Java igualmente v&aacute;lidas para cliente o para servidor";
 choices[9][2] = "Son applets que s&oacute;lo se ejecutan bajo ciertas condiciones";
 choices[9][3] = "Son aplicaciones Java J2ME para dispositivos m&oacute;viles";
 answers[9] = choices[9][3];
 units[9] = "60";
 comments[9] = "Id Pregunta: 795. ";


//  Id pregunta: 1413 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Una de las posibilidades clave de la estrategia .NET de Microsoft es el acceso remoto a objetos utilizando, entre otros protocolos, SOAP sobre HTTP. &iquest;Podr&iacute;a comentar qu&eacute; tecnolog&iacute;a de Microsoft, si bien no sobre HTTP, es la antecesora a .Net en este aspecto?:";
 choices[10]= new Array();
 choices[10][0] = "ODBC";
 choices[10][1] = "Visual Basic";
 choices[10][2] = "DCOM";
 choices[10][3] = "DNA";
 answers[10] = choices[10][2];
 units[10] = "59";
 comments[10] = "Id Pregunta: 1413. ";


//  Id pregunta: 1673 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Qu&eacute; se conoce como grado de una relaci&oacute;n?";
 choices[11]= new Array();
 choices[11][0] = "Un conjunto de valores";
 choices[11][1] = "El n&uacute;mero de tuplas";
 choices[11][2] = "El n&uacute;mero de atributos";
 choices[11][3] = "El n&uacute;mero de vistas";
 answers[11] = choices[11][2];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1673. ";


//  Id pregunta: 1877 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  El &oacute;rgano encargado de la supervisi&oacute;n y control de los servicios de la Sociedad de la Informaci&oacute;n es:";
 choices[12]= new Array();
 choices[12][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[12][1] = "El Ministerio de Industria, Turismo y Comercio";
 choices[12][2] = "El Ministerio de Justicia";
 choices[12][3] = "No hay ning&uacute;n &oacute;rgano encargado de la supervisi&oacute;n y control dado que no se requiere autorizaci&oacute;n previa.";
 answers[12] = choices[12][1];
 units[12] = "30";
 comments[12] = "Id Pregunta: 1877. ";


//  Id pregunta: 1944 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  Cuando se habla de SAX en el &aacute;mbito del lenguaje XML, se hace referencia a:";
 choices[13]= new Array();
 choices[13][0] = "Una API que define un modelo basado en eventos, y que trabaja invocando las respuestas de las interfaces a medida que van apareciendo estos eventos durante el proceso de an&aacute;lisis del documento";
 choices[13][1] = "Una API que proporciona una representaci&oacute;n de los documentos XML en forma de &aacute;rbol, permitiendo el recorrido y manipulaci&oacute;n de los datos";
 choices[13][2] = "Un lenguaje para establecer restricciones en los documentos XML";
 choices[13][3] = "Un mecanismo para invocaci&oacute;n remota de procedimientos (m&eacute;todos) utilizando XML como forma de comunicaci&oacute;n";
 answers[13] = choices[13][0];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1944. ";


//  Id pregunta: 2021 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que se entiende por un &quot;objeto&quot; en programaci&oacute;n orientada a objetos?";
 choices[14]= new Array();
 choices[14][0] = "Un objeto es parte de la herencia de una clase";
 choices[14][1] = "Un objeto es una instancia de una clase";
 choices[14][2] = "Un objeto es una instancia de una metaclase";
 choices[14][3] = "Una clase es una instancia de un objeto generada por &quot;upcasting&quot;";
 answers[14] = choices[14][1];
 units[14] = "82";
 comments[14] = "Id Pregunta: 2021. Examen TIC MAP B 2004";


//  Id pregunta: 2327 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  En la orientaci&oacute;n al objeto, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[15]= new Array();
 choices[15][0] = "Una clase define a un conjunto de objetos diferentes que pueden actuar de formas muy similares";
 choices[15][1] = "Una clase es un conjunto de m&eacute;todos y datos que resumen las caracter&iacute;sticas comunes de todos los objetos que la componen";
 choices[15][2] = "A cada uno de los objetos individuales pertenecientes a una clase se le denomina m&eacute;todo";
 choices[15][3] = "Al conjunto de las clases utilizadas para una determinada tarea de programaci&oacute;n se le denomina biblioteca de clases";
 answers[15] = choices[15][2];
 units[15] = "82";
 comments[15] = "Id Pregunta: 2327. ";


//  Id pregunta: 2574 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Calidad/Coste dice:";
 choices[16]= new Array();
 choices[16][0] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[16][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[16][2] = "El coste es constante e independiente de la calidad del producto";
 choices[16][3] = "Ninguna de ellas";
 answers[16] = choices[16][0];
 units[16] = "87,88,92";
 comments[16] = "Id Pregunta: 2574. ";


//  Id pregunta: 2976 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  El estandar de IEEE 802.9 se correspond e con?";
 choices[17]= new Array();
 choices[17][0] = "fibra optica ";
 choices[17][1] = "voz y datos";
 choices[17][2] = "seguridad lan";
 choices[17][3] = "ninguna de las anteriores";
 answers[17] = choices[17][1];
 units[17] = "101";
 comments[17] = "Id Pregunta: 2976. Examen Julio 2003";


//  Id pregunta: 3120 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;C&oacute;mo se comunican una sonda RMON y un agente RMON?:";
 choices[18]= new Array();
 choices[18][0] = "Mediante mensajes SNMP";
 choices[18][1] = "Mediante mensajes LAP-B";
 choices[18][2] = "Mediante mensajes CMIP";
 choices[18][3] = "Mediante Data Streams";
 answers[18] = choices[18][0];
 units[18] = "104";
 comments[18] = "Id Pregunta: 3120. ";


//  Id pregunta: 3306 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales dise&ntilde;ados para conectarse directamente a la RDSI como los tel&eacute;fonos digitales RDSI, &oacute; Adaptadores de Terminal, con una Terminaci&oacute;n de Red de tipo 2?:";
 choices[19]= new Array();
 choices[19][0] = "R";
 choices[19][1] = "S";
 choices[19][2] = "T";
 choices[19][3] = "U";
 answers[19] = choices[19][1];
 units[19] = "103";
 comments[19] = "Id Pregunta: 3306. ";


//  Id pregunta: 3403 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Entre los equipos de interconexi&oacute;n de redes:";
 choices[20]= new Array();
 choices[20][0] = "Los bridges operan a nivel de red";
 choices[20][1] = "Los repetidores operan a nivel de MAC";
 choices[20][2] = "Los bridges realizan funciones de autoaprendizaje, filtrado y reenvio";
 choices[20][3] = "Las pasarelas o gateways son elementos de interconexi&oacute;n independientes del protocolo de nivel de red";
 answers[20] = choices[20][2];
 units[20] = "102";
 comments[20] = "Id Pregunta: 3403. ";


//  Id pregunta: 4080 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  El teletrabajo por parte de un empleado de una empresa requiere un acceso";
 choices[21]= new Array();
 choices[21][0] = "a trav&eacute;s de su extranet, con los mecanismos de seguridad adecuados";
 choices[21][1] = "a su DMZ";
 choices[21][2] = "a su intranet";
 choices[21][3] = "requiere el establecimiento de un servidor VPN en el hogar del empleado";
 answers[21] = choices[21][2];
 units[21] = "113";
 comments[21] = "Id Pregunta: 4080. ";


//  Id pregunta: 4417 Año de creación de pregunta: 2007-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes no es una desventaja del cable coaxial frente a otros medios de transmisi&oacute;n";
 choices[22]= new Array();
 choices[22][0] = "Diafon&iacute;a.";
 choices[22][1] = "Ruido t&eacute;rmico.";
 choices[22][2] = "Ruido de intermodulaci&oacute;n.";
 choices[22][3] = "Atenuaci&oacute;n";
 answers[22] = choices[22][0];
 units[22] = "99";
 comments[22] = "Id Pregunta: 4417. ";


//  Id pregunta: 4521 Año de creación de pregunta: 2007-01-01
 questions[23]= "24)  En una infraestructura PKI, Ia revocaci&oacute;n de un certificado requiere la presencia del usuario en:";
 choices[23]= new Array();
 choices[23][0] = "El proveedor de servicios de certificaci&oacute;n.";
 choices[23][1] = "En la F&aacute;brica Nacional de Moneda y Timbre.";
 choices[23][2] = "No hace falta, se puede hacer desde Internet.";
 choices[23][3] = "En una oficina de registro.";
 answers[23] = choices[23][3];
 units[23] = "74";
 comments[23] = "Id Pregunta: 4521. ";


//  Id pregunta: 4846 Año de creación de pregunta: 2007-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en Java EE (Java Enterprise Edition)?";
 choices[24]= new Array();
 choices[24][0] = "WAR (Web Archive)";
 choices[24][1] = "EAR (Enterprise Archive)";
 choices[24][2] = "BAR (Bean Archive)";
 choices[24][3] = "JAR (Java Archive)";
 answers[24] = choices[24][2];
 units[24] = "60";
 comments[24] = "Id Pregunta: 4846. ";


//  Id pregunta: 5209 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  Entre los beneficios del Ajuste Dimensional encontramos:";
 choices[25]= new Array();
 choices[25][0] = "Mayores costes.";
 choices[25][1] = "Tiempo de respuesta inconsistente.";
 choices[25][2] = "Integridad de datos.";
 choices[25][3] = "Interfaz de usuario m&aacute;s compleja.";
 answers[25] = choices[25][2];
 units[25] = "90";
 comments[25] = "Id Pregunta: 5209. ";


//  Id pregunta: 5555 Año de creación de pregunta: 2003-01-01
 questions[26]= "27)  La prioridad de un punto de verifiaci&oacute;n de las pautas de accesibilidad al contenido, que permite que un desarrollador pueda satisfacer dicho punto, en otro caso uno o m&aacute;s usuarios encontrar&aacute;n alguna dificultad para acceder a la informaci&oacute;n, &iquest;es Prioridad? ";
 choices[26]= new Array();
 choices[26][0] = "1";
 choices[26][1] = "2";
 choices[26][2] = "3";
 choices[26][3] = "4";
 answers[26] = choices[26][2];
 units[26] = "39";
 comments[26] = "Id Pregunta: 5555. ";


//  Id pregunta: 5742 Año de creación de pregunta: 2009-01-01
 questions[27]= "28)  En el &aacute;mbito de la Uni&oacute;n Europea, &iquest;tiene validez jur&iacute;dica la firma electr&oacute;nica?";
 choices[27]= new Array();
 choices[27][0] = "Solamente si es firma reconocida";
 choices[27][1] = "Solamente si es firma avanzada";
 choices[27][2] = "Siempre ser&aacute; admisible como prueba en el procedimiento judicial";
 choices[27][3] = "Ninguna de las anteriores es correcta";
 answers[27] = choices[27][2];
 units[27] = "30";
 comments[27] = "Id Pregunta: 5742. revisar tambi&eacute;n el reglamento 910/2014";


//  Id pregunta: 5766 Año de creación de pregunta: 2009-01-01
 questions[28]= "29)  &iquest;A cu&aacute;l de las siguientes categor&iacute;as de m&eacute;todos de ordenaci&oacute;n de alternativas pertenece el m&eacute;todo PROMETHEE?";
 choices[28]= new Array();
 choices[28][0] = "Concordancia";
 choices[28][1] = "Permutaciones";
 choices[28][2] = "Relaciones de superaci&oacute;n";
 choices[28][3] = "Ponderaci&oacute;n lineal";
 answers[28] = choices[28][2];
 units[28] = "34";
 comments[28] = "Id Pregunta: 5766. ";


//  Id pregunta: 6062 Año de creación de pregunta: 2010-01-01
 questions[29]= "30)  Se ha establecido una conexi&oacute;n TCP sobre una red m&oacute;vil celular. La red m&oacute;vil sufre p&eacute;rdidas frecuentes por errores de transmisi&oacute;n debidos a las caracter&iacute;sticas del acceso radio. El emisor TCP:";
 choices[29]= new Array();
 choices[29][0] = "Distingue entre p&eacute;rdidas por errores de transmisi&oacute;n y p&eacute;rdidas por congesti&oacute;n, aplicando procedimientos de recuperaci&oacute;n diferentes.";
 choices[29][1] = "S&oacute;lo retransmite paquetes que se pierdan debido a congesti&oacute;n en la red.";
 choices[29][2] = "Indica al nivel de enlace que disminuya su tasa de env&iacute;o.";
 choices[29][3] = "Interpreta las p&eacute;rdidas debidas a errores de transmisi&oacute;n como congesti&oacute;n en la red, disminuyendo su tasa de env&iacute;o.";
 answers[29] = choices[29][3];
 units[29] = "100";
 comments[29] = "Id Pregunta: 6062. TIC A 2009";


//  Id pregunta: 6075 Año de creación de pregunta: 2010-01-01
 questions[30]= "31)  &iquest;Cu&aacute;les son los subsistemas que integran fundamentalmente la direcci&oacute;n de proyectos?";
 choices[30]= new Array();
 choices[30][0] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a, y cultura de la empresa.";
 choices[30][1] = "Planificaci&oacute;n, Organizaci&oacute;n, Control, Documentaci&oacute;n, Tecnolog&iacute;a y Cultura de la Empresa.";
 choices[30][2] = "Planificaci&oacute;n, gesti&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 choices[30][3] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 answers[30] = choices[30][0];
 units[30] = "27";
 comments[30] = "Id Pregunta: 6075. ";


//  Id pregunta: 6098 Año de creación de pregunta: 2010-01-01
 questions[31]= "32)  &iquest;Cu&aacute;les son las dimensiones de la interoperabilidad seg&uacute;n el Marco Europeo de Interoperabilidad?";
 choices[31]= new Array();
 choices[31][0] = "Organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[31][1] = "Legal, sem&aacute;ntica y econ&oacute;mica.";
 choices[31][2] = "Organizativa, ling&uuml;&iacute;stica e inform&aacute;tica.";
 choices[31][3] = "Ninguna, porque el Marco Europeo de Interoperabilidad no est&aacute; todav&iacute;a adoptado por la Comisi&oacute;n Europea.";
 answers[31] = choices[31][0];
 units[31] = "40";
 comments[31] = "Id Pregunta: 6098. TIC A 2009";


//  Id pregunta: 6151 Año de creación de pregunta: 2010-01-01
 questions[32]= "33)  Con respecto al control de la calidad, &iquest;cu&aacute;ndo se considera que un resultado es acptable?";
 choices[32]= new Array();
 choices[32][0] = "Si se encuentra dentro de los l&iacute;mites de control.";
 choices[32][1] = "Si se encuentra dentro del rango especificado por la tolerancia.";
 choices[32][2] = "Si se encuentra dentro de los l&iacute;mites de control o dentro del rango especificado por la tolerancia.";
 choices[32][3] = "Si se encuentra dentro de los l&iacute;mites de control y dentro del rango especificado por la tolerancia.";
 answers[32] = choices[32][1];
 units[32] = "28";
 comments[32] = "Id Pregunta: 6151. ";


//  Id pregunta: 6282 Año de creación de pregunta: 2010-01-01
 questions[33]= "34)  &iquest;Qu&eacute; diferencia existe entre factores de &eacute;xito y objetivos de la organizaci&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "Los factores de &eacute;xito son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los objetivos son los &ldquo;medios&rdquo; para lograr dicho &eacute;xito";
 choices[33][1] = "Los objetivos son los estudios de mercado mientras que los factores de &eacute;xito son las variaciones en los mercados que modifican dichos estudios";
 choices[33][2] = "Los objetivos son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los factores de &eacute;xito son los &ldquo;medios&rdquo; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][2];
 units[33] = "77";
 comments[33] = "Id Pregunta: 6282. ";


//  Id pregunta: 6339 Año de creación de pregunta: 2010-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes nombres no est&aacute;n relaiconados con una soluci&oacute;n ERP?";
 choices[34]= new Array();
 choices[34][0] = "Oracle Financials";
 choices[34][1] = "SAP";
 choices[34][2] = "IBM Websphere";
 choices[34][3] = "META4";
 answers[34] = choices[34][2];
 units[34] = "65";
 comments[34] = "Id Pregunta: 6339. ";


//  Id pregunta: 6340 Año de creación de pregunta: 2010-01-01
 questions[35]= "36)  &iquest;Qui&eacute;n acu&ntilde;&oacute; el t&eacute;rmino 'Web 2.0'?";
 choices[35]= new Array();
 choices[35][0] = "Tim Berners-Lee";
 choices[35][1] = "Tim O'Reilly";
 choices[35][2] = "Vinton Cerf";
 choices[35][3] = "Richard Stallman";
 answers[35] = choices[35][1];
 units[35] = "120";
 comments[35] = "Id Pregunta: 6340. ";


//  Id pregunta: 6466 Año de creación de pregunta: 2010-01-01
 questions[36]= "37)  Indique la respuesta incorrecta sobre la gesti&oacute;n de configuraci&oacute;n.";
 choices[36]= new Array();
 choices[36][0] = "Una l&iacute;nea base es un conjunto de actividades para gestionar el cambio a lo largo del ciclo de vida del software.";
 choices[36][1] = "El impacto de los cambios puede evaluarse a trav&eacute;s de las relaciones entre los objetos de configuraci&oacute;n.";
 choices[36][2] = "La gesti&oacute;n de configuraci&oacute;n del software es una actividad protectiva.";
 choices[36][3] = "Las herramientas de desarrollo pueden formar parte de una l&iacute;nea base.";
 answers[36] = choices[36][0];
 units[36] = "91";
 comments[36] = "Id Pregunta: 6466. Castilla La Mancha 2009";


//  Id pregunta: 6470 Año de creación de pregunta: 2010-01-01
 questions[37]= "38)  La metodolog&iacute;a M&eacute;trica V3 plantea la t&eacute;cnica de los casos de uso en la obtenci&oacute;n de requisitos en ASI:";
 choices[37]= new Array();
 choices[37][0] = "Como obligatoria en el desarrollo estructurado y opcional en orientaci&oacute;n a objetos";
 choices[37][1] = "Como opcional en el desarrollo estructurado y obligatoria en orientaci&oacute;n a objetos";
 choices[37][2] = "Como obligatoria, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 choices[37][3] = "Como opcional, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 answers[37] = choices[37][1];
 units[37] = "86";
 comments[37] = "Id Pregunta: 6470. Castilla La Mancha 2009";


//  Id pregunta: 6486 Año de creación de pregunta: 2010-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes es una desventaja de LMDS?";
 choices[38]= new Array();
 choices[38][0] = "La necesidad de desplegar fibra &oacute;ptica hasta las proximidades del cliente";
 choices[38][1] = "Requiere eliminar las bobinas de carga del bucle local";
 choices[38][2] = "Requiere licencia de uso del espectro radioel&eacute;ctrico para la operadora";
 choices[38][3] = "Es un servicio punto a punto";
 answers[38] = choices[38][2];
 units[38] = "108";
 comments[38] = "Id Pregunta: 6486. Castilla La Mancha 2009";


//  Id pregunta: 6494 Año de creación de pregunta: 2010-01-01
 questions[39]= "40)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, el censo promocional es una fuente de acceso p&uacute;blico s&oacute;lo:";
 choices[39]= new Array();
 choices[39][0] = "Durante los cinco &uacute;ltimos a&ntilde;os de vigencia";
 choices[39][1] = "Durante el &uacute;ltimo a&ntilde;o de vigencia";
 choices[39][2] = "Nunca es fuente de acceso p&uacute;blico";
 choices[39][3] = "Siempre que no aparezca el DNI";
 answers[39] = choices[39][1];
 units[39] = "29";
 comments[39] = "Id Pregunta: 6494. Castilla La Mancha 2009";


//  Id pregunta: 7275 Año de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las m&aacute;quinas virtuales con respecto al hardware f&iacute;sico?";
 choices[40]= new Array();
 choices[40][0] = "Aislamiento";
 choices[40][1] = "Independencia  del software";
 choices[40][2] = "Encapsulamiento";
 choices[40][3] = "Compatibilidad";
 answers[40] = choices[40][1];
 units[40] = "119";
 comments[40] = "Id Pregunta: 7275. ";


//  Id pregunta: 7288 Año de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es INCORRECTA sobre el protocolo RADIUS (Remote Authentication Dial In User Service): ";
 choices[41]= new Array();
 choices[41][0] = "Es un protocolo cliente/servidor que utiliza el protocolo de transporte fiable TCP 1813";
 choices[41][1] = "Utiliza el protocolo de nivel de enlace PPP (Point to Point Protocol) para el env&iacute;o de las credenciales de usuario";
 choices[41][2] = "El sucesor de RADIUS es el protocolo DIAMETER";
 choices[41][3] = "Es utilizado a menudo para facilitar itinerancia (roaming) entre proveedores de servicio de internet (ISP)";
 answers[41] = choices[41][0];
 units[41] = "111, 102";
 comments[41] = "Id Pregunta: 7288. Examen TIC B 2009";


//  Id pregunta: 8211 Año de creación de pregunta: 2011-01-01
 questions[42]= "43)  En la aplicaci&oacute;n de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de asignaci&oacute;n de pesos a criterios que prima los criterios que tienen mayor poder de discriminaci&oacute;n entre las alternativas, se denomina:";
 choices[42]= new Array();
 choices[42][0] = "M&eacute;todo Delphi.";
 choices[42][1] = "M&eacute;todo de las Utilidades Relativas.";
 choices[42][2] = "M&eacute;todo de Saaty.";
 choices[42][3] = "M&eacute;todo de la entrop&iacute;a.";
 answers[42] = choices[42][3];
 units[42] = "34";
 comments[42] = "Id Pregunta: 8211. Examen TIC A1 2010";


//  Id pregunta: 8225 Año de creación de pregunta: 2011-01-01
 questions[43]= "44)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[43]= new Array();
 choices[43][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[43][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[43][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[43][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[43] = choices[43][1];
 units[43] = "92";
 comments[43] = "Id Pregunta: 8225. Examen TIC A1 2010";


//  Id pregunta: 8240 Año de creación de pregunta: 2011-01-01
 questions[44]= "45)  Seg&uacute;n el modelo de referencia de workflow de la WfMC (Workflow Management Coalition), &iquest;cu&aacute;l de los siguientes elementos interpreta la descripci&oacute;n de los workflows y controla las diferentes instancias de &eacute;stos, as&iacute; como a&ntilde;ade elementos a la lista de trabajo de los usuarios e invoca las aplicaciones necesarias? ";
 choices[44]= new Array();
 choices[44][0] = "El motor de workflow (Workflow engine).";
 choices[44][1] = "La interfaz de programaci&oacute;n de aplicaciones de workflow (WAPI o Workflow Application Programming Interface).";
 choices[44][2] = "El cliente de workflow (Workflow client)";
 choices[44][3] = "El servicio de representaci&oacute;n de workflow (Workflow Enactment Service).";
 answers[44] = choices[44][3];
 units[44] = "71";
 comments[44] = "Id Pregunta: 8240. Examen TIC A2 2010";


//  Id pregunta: 8296 Año de creación de pregunta: 2011-01-01
 questions[45]= "46)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 134.141.0.0/24, sin considerar las direcciones de subred y de broadcast? ";
 choices[45]= new Array();
 choices[45][0] = "256";
 choices[45][1] = "254";
 choices[45][2] = "30";
 choices[45][3] = "64";
 answers[45] = choices[45][1];
 units[45] = "100";
 comments[45] = "Id Pregunta: 8296. Examen TIC A2 2010";


//  Id pregunta: 8305 Año de creación de pregunta: 2011-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[46]= new Array();
 choices[46][0] = "XAdES-X.";
 choices[46][1] = "XAdES-X-L.";
 choices[46][2] = "XAdES-C. ";
 choices[46][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[46] = choices[46][1];
 units[46] = "72, 73, 74";
 comments[46] = "Id Pregunta: 8305. Examen TIC A2 2010";


//  Id pregunta: 8308 Año de creación de pregunta: 2011-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet? ";
 choices[47]= new Array();
 choices[47][0] = "IETF. ";
 choices[47][1] = "ICANN. ";
 choices[47][2] = "IAB. ";
 choices[47][3] = "IRTF.";
 answers[47] = choices[47][2];
 units[47] = "112,42";
 comments[47] = "Id Pregunta: 8308. Examen TIC A2 2010";


//  Id pregunta: 8348 Año de creación de pregunta: 2011-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes mecanismos NO se utiliza para definir un perfil (profile) en UML 2.0?";
 choices[48]= new Array();
 choices[48][0] = "Estereotipos.";
 choices[48][1] = "Valores etiquetados.";
 choices[48][2] = "Artefactos.";
 choices[48][3] = "Restricciones.";
 answers[48] = choices[48][2];
 units[48] = "80,81,82";
 comments[48] = "Id Pregunta: 8348. Examen TIC A2 2010";


//  Id pregunta: 8358 Año de creación de pregunta: 2011-01-01
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de &eacute;stas es una de las funciones del Grupo de Aseguramiento de la Calidad (seg&uacute;n M&eacute;trica v3): ";
 choices[49]= new Array();
 choices[49][0] = "Definir los recursos que se necesitan para instalar el sistema.";
 choices[49][1] = "Identificar las posibles desviac&iacute;ones en los est&aacute;ndares aplicados, as&iacute; como en los requisitos y procedimientos especificados.";
 choices[49][2] = "Notificar a los desarrolladores de las anomal&iacute;as encontradas en el proceso de desarrollo.";
 choices[49][3] = "Documentar las pruebas seg&uacute;n el est&aacute;ndar ISO 9000:2000.";
 answers[49] = choices[49][1];
 units[49] = "86";
 comments[49] = "Id Pregunta: 8358. Examen TIC A2 2010";


//  Id pregunta: 8360 Año de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad en el modelo de McCall?";
 choices[50]= new Array();
 choices[50][0] = "Accesibilidad";
 choices[50][1] = "Correcci&oacute;n";
 choices[50][2] = "Reusabilidad";
 choices[50][3] = "Interoperabilidad";
 answers[50] = choices[50][0];
 units[50] = "87,88";
 comments[50] = "Id Pregunta: 8360. Examen TIC A2 2010";


//  Id pregunta: 8508 Año de creación de pregunta: 2011-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes elementos de VoiceXML v2.0 captura un evento de ayuda? ";
 choices[51]= new Array();
 choices[51][0] = "&lt;catch&gt; ";
 choices[51][1] = "&lt;help&gt; ";
 choices[51][2] = "&lt;field&gt; ";
 choices[51][3] = "&lt;record&gt; ";
 answers[51] = choices[51][1];
 units[51] = "94";
 comments[51] = "Id Pregunta: 8508. Examen TIC A2 2010";


//  Id pregunta: 8602 Año de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes es el lenguaje est&aacute;ndar propuesto para la descripci&oacute;n de servicios web bajo protocolo SOAP? ";
 choices[52]= new Array();
 choices[52][0] = "WSDL";
 choices[52][1] = "UDDI";
 choices[52][2] = "XML";
 choices[52][3] = "REST";
 answers[52] = choices[52][0];
 units[52] = "51";
 comments[52] = "Id Pregunta: 8602. Examen TIC A2 2010 interna";


//  Id pregunta: 8638 Año de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[53]= new Array();
 choices[53][0] = "CREATE";
 choices[53][1] = "ALTER";
 choices[53][2] = "DELETE";
 choices[53][3] = "DROP";
 answers[53] = choices[53][2];
 units[53] = "57, 58";
 comments[53] = "Id Pregunta: 8638. Examen TIC A2 2010 interna";


//  Id pregunta: 8767 Año de creación de pregunta: 2011-01-01
 questions[54]= "55)  En IPv4, la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar. &iquest;Cu&aacute;l es el rango de valores que puede tomar este campo?";
 choices[54]= new Array();
 choices[54][0] = "0-15.";
 choices[54][1] = "0-255";
 choices[54][2] = "0-5.";
 choices[54][3] = "0-127";
 answers[54] = choices[54][1];
 units[54] = "100";
 comments[54] = "Id Pregunta: 8767. Examen TIC A2 2010 interna";


//  Id pregunta: 8831 Año de creación de pregunta: 2011-01-01
 questions[55]= "56)   Se&ntilde;ale la respuesta correcta con relaci&oacute;n a lTIL (IT Infrastructure Library):";
 choices[55]= new Array();
 choices[55][0] = " La gesti&oacute;n de problemas busca solucionar lo m&aacute;s r&aacute;pido posible las incidencias y restablecer el servicio lo antes posible ";
 choices[55][1] = " La gesti&oacute;n de la configuraci&oacute;n tiene como &uacute;nico objetivo el control del hardware inform&aacute;tico existente en la organizaci&oacute;n ";
 choices[55][2] = " La gesti&oacute;n de versiones se encarga de controlar todas las versiones, tanto hardware como software, involucrados en el sistema de explotaci&oacute;n ";
 choices[55][3] = " No es necesario analizar el impacto de la introducci&oacute;n de cambios en los sistemas inform&aacute;ticos, sino que se deben realizar lo m&aacute;s r&aacute;pido posible para evitar incidencias en los sistemas (gesti&oacute;n de cambios).";
 answers[55] = choices[55][2];
 units[55] = "98";
 comments[55] = "Id Pregunta: 8831. Examen UC3M 2010";


//  Id pregunta: 8957 Año de creación de pregunta: 2011-01-01
 questions[56]= "57)  Denttro de Web Sem&aacute;ntica 3.0 &iquest;cu&aacute;l no es un lenguaje de construcci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "SHOE";
 choices[56][1] = "DAML + OIL";
 choices[56][2] = "WDML";
 choices[56][3] = "RDF";
 answers[56] = choices[56][2];
 units[56] = "63";
 comments[56] = "Id Pregunta: 8957. ";


//  Id pregunta: 8994 Año de creación de pregunta: 2011-01-01
 questions[57]= "58)  Las Cookies que emplea el protocolo HTTP se especifican en el RFC:";
 choices[57]= new Array();
 choices[57][0] = "2965";
 choices[57][1] = "8080";
 choices[57][2] = "1065";
 choices[57][3] = "1265";
 answers[57] = choices[57][0];
 units[57] = "112";
 comments[57] = "Id Pregunta: 8994. Examen UPM A2 2011";


//  Id pregunta: 9154 Año de creación de pregunta: 2013-01-01
 questions[58]= "59)  Indique cu&aacute;l de las siguientes es una soluci&oacute;n de software libre de eLearning:";
 choices[58]= new Array();
 choices[58][0] = "Ganesha";
 choices[58][1] = "OpenSCORM";
 choices[58][2] = "Blackboard";
 choices[58][3] = "WebCT";
 answers[58] = choices[58][0];
 units[58] = "66";
 comments[58] = "Id Pregunta: 9154. ";


//  Id pregunta: 9171 Año de creación de pregunta: 2013-01-01
 questions[59]= "60)  Cu&aacute;l de los siguientes productos de UN/CEFACT es un est&aacute;ndar:";
 choices[59]= new Array();
 choices[59][0] = "UN/CCL (Core Components Library)";
 choices[59][1] = "ebXML CCTS (Core Components Technical Specification)";
 choices[59][2] = "XML Naming and Design Rules";
 choices[59][3] = "UNECE TDED ISO 7273";
 answers[59] = choices[59][0];
 units[59] = "70";
 comments[59] = "Id Pregunta: 9171. ";


//  Id pregunta: 9180 Año de creación de pregunta: 2013-01-01
 questions[60]= "61)  No es un espacio de color:";
 choices[60]= new Array();
 choices[60][0] = "RGB";
 choices[60][1] = "CMYK";
 choices[60][2] = "HSM";
 choices[60][3] = "HSV";
 answers[60] = choices[60][2];
 units[60] = "93";
 comments[60] = "Id Pregunta: 9180. ";


//  Id pregunta: 9192 Año de creación de pregunta: 2013-01-01
 questions[61]= "62)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[61]= new Array();
 choices[61][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[61][1] = "A traves de la ley de patentes";
 choices[61][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[61][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[61] = choices[61][3];
 units[61] = "36";
 comments[61] = "Id Pregunta: 9192. ";


//  Id pregunta: 9206 Año de creación de pregunta: 2013-01-01
 questions[62]= "63)  &iquest;En que lenguaje est&aacute; basado el lenguaje de expresi&oacute;n de derechos REL?";
 choices[62]= new Array();
 choices[62][0] = "XcML";
 choices[62][1] = "XrML";
 choices[62][2] = "XMCL";
 choices[62][3] = "XsML";
 answers[62] = choices[62][1];
 units[62] = "37";
 comments[62] = "Id Pregunta: 9206. ";


//  Id pregunta: 9234 Año de creación de pregunta: 2013-01-01
 questions[63]= "64)  &iquest;Qu&eacute; es IPL?";
 choices[63]= new Array();
 choices[63][0] = "Es el equivalente al Boot en z/OS";
 choices[63][1] = "El primer programa que se ejecuta cuando se hace un TSO logon.";
 choices[63][2] = "Carga de programa en modo batch en z/OS.";
 choices[63][3] = "Ninguna es correcta.";
 answers[63] = choices[63][0];
 units[63] = "52, 55";
 comments[63] = "Id Pregunta: 9234. ";


//  Id pregunta: 9328 Año de creación de pregunta: 2013-01-01
 questions[64]= "65)  &iquest;C&uacute;al de los siguientes aspectos NO se recogen en las";
 choices[64]= new Array();
 choices[64][0] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la iso 80211";
 choices[64][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la iso 8802";
 choices[64][2] = "Se deber&aacute; detallar la ubicaci&oacute;n de equipos activos en el cableado de backbone";
 choices[64][3] = "Se debe detallar el n&uacute;mero de z&oacute;calos del cableado horizontal";
 answers[64] = choices[64][3];
 units[64] = "99";
 comments[64] = "Id Pregunta: 9328. ";


//  Id pregunta: 9342 Año de creación de pregunta: 2013-01-01
 questions[65]= "66)  &iquest;Qu&eacute; afirmaci&oacute;n es falsa sobre Garant&iacute;a de Calidad?";
 choices[65]= new Array();
 choices[65][0] = "Est&aacute; delineada en un documento de estructura.";
 choices[65][1] = "El objetivo es asegurarle al cliente la calidad de un producto.";
 choices[65][2] = "La estructura se presenta en un manual de garant&iacute;a de calidad";
 choices[65][3] = "La garant&iacute;a de calidad no se extiende a problemas de seguridad";
 answers[65] = choices[65][3];
 units[65] = "87";
 comments[65] = "Id Pregunta: 9342. ";


//  Id pregunta: 9344 Año de creación de pregunta: 2013-01-01
 questions[66]= "67)  El programa ISA contempla una serie de grupos de acciones o &ldquo;clusters&rdquo;. Entre ellos NO se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Intercambio de Informaci&oacute;n segura";
 choices[66][1] = "Arquitectura de Interoperabilidad";
 choices[66][2] = "Evaluaci&oacute;n de las implicaciones TIC de la nueva legislaci&oacute;n europea.";
 choices[66][3] = "Despliegue de redes de nueva generaci&oacute;n";
 answers[66] = choices[66][0];
 units[66] = "103";
 comments[66] = "Id Pregunta: 9344. Fuente: http://ec.europa.eu/isa/actions/index_en.htm";


//  Id pregunta: 9458 Año de creación de pregunta: 2013-01-01
 questions[67]= "68)  En la t&eacute;cnica de Diagramas de Flujo de Datos:";
 choices[67]= new Array();
 choices[67][0] = "Las entidades externas pueden tener relaciones entre s&iacute;.";
 choices[67][1] = "Las entidades externas pueden enviar datos a los almacenes.";
 choices[67][2] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es as&iacute;ncrona.";
 choices[67][3] = "En el diagrama de conexto s&oacute;lo aparece un proceso.";
 answers[67] = choices[67][3];
 units[67] = "81";
 comments[67] = "Id Pregunta: 9458. ";


//  Id pregunta: 9524 Año de creación de pregunta: 2013-01-01
 questions[68]= "69)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.323:";
 choices[68]= new Array();
 choices[68][0] = "Es un est&aacute;ndar para videoconferencia sobre redes IP";
 choices[68][1] = "El gatekeeper es un componente principal";
 choices[68][2] = "Utiliza el protocolo H.235 como seguridad (autenticaci&oacute;n, integridad, etc.)";
 choices[68][3] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 answers[68] = choices[68][3];
 units[68] = "117";
 comments[68] = "Id Pregunta: 9524. ";


//  Id pregunta: 9601 Año de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[69]= new Array();
 choices[69][0] = "Las interrupciones";
 choices[69][1] = "El scheduler";
 choices[69][2] = "Los drivers de los dispositivos";
 choices[69][3] = "a) y c) son correctas";
 answers[69] = choices[69][3];
 units[69] = "53";
 comments[69] = "Id Pregunta: 9601. ";


//  Id pregunta: 9642 Año de creación de pregunta: 2014-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[70]= new Array();
 choices[70][0] = "a) Publicidad y transparencia";
 choices[70][1] = "b) Salvaguarda de la libre competencia";
 choices[70][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[70][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[70] = choices[70][3];
 units[70] = "41";
 comments[70] = "Id Pregunta: 9642. Hay libertad de acceso a las licitaciones. Art&iacute;culo 1. Objeto y finalidad. La presente Ley tiene por objeto regular la contrataci&oacute;n del sector p&uacute;blico, a fin de garantizar que la misma se ajusta a los principios de libertad de acceso a las licitaciones, .";


//  Id pregunta: 9667 Año de creación de pregunta: 2014-01-01
 questions[71]= "72)  La segmentaci&oacute;n o pipelining:";
 choices[71]= new Array();
 choices[71][0] = "Es una t&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas para simular paralelizaci&oacute;n.";
 choices[71][1] = "Disminuye el tiempo de ejecuci&oacute;n de cada instrucci&oacute;n.";
 choices[71][2] = "Se trata de dividir el c&oacute;digo en fragmentos para distribuirlos por distintos procesadores.";
 choices[71][3] = "Todas  las anteriores.";
 answers[71] = choices[71][0];
 units[71] = "45";
 comments[71] = "Id Pregunta: 9667. ";


//  Id pregunta: 9722 Año de creación de pregunta: 2014-01-01
 questions[72]= "73)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[72]= new Array();
 choices[72][0] = "48 meses.";
 choices[72][1] = "24 meses.";
 choices[72][2] = "12 meses.";
 choices[72][3] = "6 meses.";
 answers[72] = choices[72][2];
 units[72] = "30";
 comments[72] = "Id Pregunta: 9722. Examen TIC-A1 2013";


//  Id pregunta: 9739 Año de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes NO es un concepto clave asociado con casos de uso seg&uacute;n la definici&oacute;n de UML 2.4.1?";
 choices[73]= new Array();
 choices[73][0] = "Actors.";
 choices[73][1] = "Use cases.";
 choices[73][2] = "Subject.";
 choices[73][3] = "Scenario.";
 answers[73] = choices[73][3];
 units[73] = "82";
 comments[73] = "Id Pregunta: 9739. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9790 Año de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es el objetivo principal perseguido por un keylogger?";
 choices[74]= new Array();
 choices[74][0] = "&quot;Intercepci&oacute;n&quot; y captura de datos. ";
 choices[74][1] = "Suplantaci&oacute;n de identidad. ";
 choices[74][2] = "Denegaci&oacute;n de servicio. ";
 choices[74][3] = "Manipulaci&oacute;n de un recurso. ";
 answers[74] = choices[74][0];
 units[74] = "111";
 comments[74] = "Id Pregunta: 9790. Examen TIC A2 2013";


//  Id pregunta: 9878 Año de creación de pregunta: 2014-01-01
 questions[75]= "76)  De acuerdo con la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave?";
 choices[75]= new Array();
 choices[75][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[75][1] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 choices[75][2] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[75][3] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en la normativa reguladora de las telecomunicaciones, sea necesaria.";
 answers[75] = choices[75][0];
 units[75] = "110";
 comments[75] = "Id Pregunta: 9878. TIC A1, Examen 2013";


//  Id pregunta: 9881 Año de creación de pregunta: 2014-01-01
 questions[76]= "77)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[76]= new Array();
 choices[76][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[76][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[76][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[76][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[76] = choices[76][1];
 units[76] = "99, 102";
 comments[76] = "Id Pregunta: 9881. TIC A1, Examen 2013";


//  Id pregunta: 9949 Año de creación de pregunta: 2014-01-01
 questions[77]= "78)  Cu&aacute;l de las siguientes palabras y acr&oacute;nimos NO est&aacute; relacionado con Metodolog&iacute;as &Aacute;giles para el desarrollo de software:";
 choices[77]= new Array();
 choices[77][0] = "SCRUM ";
 choices[77][1] = "XP ";
 choices[77][2] = "DSDM ";
 choices[77][3] = "AGILD ";
 answers[77] = choices[77][3];
 units[77] = "79";
 comments[77] = "Id Pregunta: 9949. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9965 Año de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[78]= new Array();
 choices[78][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[78][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[78][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[78][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[78] = choices[78][3];
 units[78] = "59,115";
 comments[78] = "Id Pregunta: 9965. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9975 Año de creación de pregunta: 2014-01-01
 questions[79]= "80)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[79]= new Array();
 choices[79][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir acceder a los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[79][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir acceder a los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[79][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[79][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[79] = choices[79][0];
 units[79] = "115";
 comments[79] = "Id Pregunta: 9975. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10003 Año de creación de pregunta: 2014-01-01
 questions[80]= "81)  El RD 1720/2007 de 21 de diciembre, por el que se aprueba el reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, establece que ";
 choices[80]= new Array();
 choices[80][0] = "en ning&uacute;n caso, el encargado de tratamiento podr&aacute; subcontratar a un tercero la realizaci&oacute;n de un tratamiento que le hubiera encomendado el responsable del fichero.";
 choices[80][1] = "los ficheros de datos de car&aacute;cter personal de titularidad p&uacute;blica sujetos a la competencia de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos deber&aacute;n notificarse a &eacute;sta en el plazo de 30 d&iacute;as naturales desde la publicaci&oacute;n en el diario oficial correspondiente.";
 choices[80][2] = "el ejercicio del derecho de acceso por el afectado ser&aacute; resuelto por el Responsable del fichero en el plazo m&aacute;ximo de un mes a contar desde la recepci&oacute;n de la solicitud de acceso.";
 choices[80][3] = "los ficheros y los tratamientos de datos de car&aacute;cter personal se clasifican entres niveles: b&aacute;sico, medio y alto.";
 answers[80] = choices[80][2];
 units[80] = "29";
 comments[80] = "Id Pregunta: 10003. ";


//  Id pregunta: 10004 Año de creación de pregunta: 2014-01-01
 questions[81]= "82)  XML y HTML5 se caracterizan porque ambos";
 choices[81]= new Array();
 choices[81][0] = "se apoyan en JavaScript.";
 choices[81][1] = "se basan en el protocolo HTTP.";
 choices[81][2] = "son lenguajes de marcado.";
 choices[81][3] = "son conformes a SOAP.";
 answers[81] = choices[81][2];
 units[81] = "69";
 comments[81] = "Id Pregunta: 10004. ";


//  Id pregunta: 10021 Año de creación de pregunta: 2014-01-01
 questions[82]= "83)  Se&ntilde;ale la respuesta INCORRECTA respecto a las caracter&iacute;sticas de la metodolog&iacute;a de desarrollo software conocida como Proceso Unificado de Desarrollo Software:";
 choices[82]= new Array();
 choices[82][0] = "Es Iterativo e Incremental.";
 choices[82][1] = "Est&aacute; dirigido por los casos de uso.";
 choices[82][2] = "Est&aacute; enfocado en los riesgos.";
 choices[82][3] = "Fue creado por Dennis Ritchie y Ken Thompson.";
 answers[82] = choices[82][3];
 units[82] = "76";
 comments[82] = "Id Pregunta: 10021. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10022 Año de creación de pregunta: 2014-01-01
 questions[83]= "84)  Indique cu&aacute;l de los siguientes diagramas de descomposici&oacute;n NO se contempla como t&eacute;cnica en M&eacute;trica v3:";
 choices[83]= new Array();
 choices[83][0] = "Funcional.";
 choices[83][1] = "Organizativo.";
 choices[83][2] = "L&oacute;gico.";
 choices[83][3] = "En Di&aacute;logos.";
 answers[83] = choices[83][2];
 units[83] = "86";
 comments[83] = "Id Pregunta: 10022. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10028 Año de creación de pregunta: 2014-01-01
 questions[84]= "85)  Indique cu&aacute;l de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[84]= new Array();
 choices[84][0] = "Joost";
 choices[84][1] = "Netflix";
 choices[84][2] = "Cassandra ";
 choices[84][3] = "Hadoop";
 answers[84] = choices[84][3];
 units[84] = "116";
 comments[84] = "Id Pregunta: 10028. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10040 Año de creación de pregunta: 2014-01-01
 questions[85]= "86)  En una empresa con 2.000 puestos de usuario final en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;en qu&eacute; subred ubicar&iacute;a los servidores web p&uacute;blicos?";
 choices[85]= new Array();
 choices[85][0] = "Red A.";
 choices[85][1] = "Red B.";
 choices[85][2] = "Red C.";
 choices[85][3] = "Indistintamente en la red B o en la red C.";
 answers[85] = choices[85][2];
 units[85] = "100";
 comments[85] = "Id Pregunta: 10040. TIC A2, promoci&oacute;n interna, examen 3013";


//  Id pregunta: 10094 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l NO se considera una t&eacute;cnica general del an&aacute;lisis de requisitos?";
 choices[86]= new Array();
 choices[86][0] = "Abstracci&oacute;n";
 choices[86][1] = "Proyecci&oacute;n";
 choices[86][2] = "Partici&oacute;n";
 choices[86][3] = "Todas se consideran t&eacute;cnicas generales";
 answers[86] = choices[86][3];
 units[86] = "78";
 comments[86] = "Id Pregunta: 10094. ";


//  Id pregunta: 10108 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  Las siglas CSMA/CD significan:";
 choices[87]= new Array();
 choices[87][0] = "Carrier Sense Multiple Access with Collision Detection";
 choices[87][1] = "Carrier Sense Multiple Access with Common Data";
 choices[87][2] = "Carrier Sense Multiple Access without Collision Data";
 choices[87][3] = "Clear Sense Multiple Access with Collision Detection";
 answers[87] = choices[87][0];
 units[87] = "101";
 comments[87] = "Id Pregunta: 10108. ";


//  Id pregunta: 10128 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  En la gesti&oacute;n de redes, el agente de gesti&oacute;n se encuentra en: ";
 choices[88]= new Array();
 choices[88][0] = "El elemento gestionado";
 choices[88][1] = "El nodo de gesti&oacute;n central";
 choices[88][2] = "Nodos intermedios que act&uacute;an como relay";
 choices[88][3] = "El agente de gesti&oacute;n no es un elemento de la gesti&oacute;n de red.";
 answers[88] = choices[88][0];
 units[88] = "104";
 comments[88] = "Id Pregunta: 10128. ";


//  Id pregunta: 10166 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Sea la relaci&oacute;n SOLICITUD (CODIGO, FECHA, DNI_SOLICITANTE, NOM_SOLICITANTE, TEL_SOLICITANTE) y el atributo CODIGO su clave primaria, &iquest;en qu&eacute; forma normal se encuentra?";
 choices[89]= new Array();
 choices[89][0] = "Sin normalizar";
 choices[89][1] = "1&ordf; Forma Normal";
 choices[89][2] = "2&ordf; Forma Normal";
 choices[89][3] = "3&ordf; Forma Normal";
 answers[89] = choices[89][0];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10166. ";


//  Id pregunta: 10200 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cual de las siguientes afirmaciones es correcta respecto al estandar IEEE 802.11ac?";
 choices[90]= new Array();
 choices[90][0] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[90][1] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (512 QAM)";
 choices[90][2] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[90][3] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 answers[90] = choices[90][3];
 units[90] = "107";
 comments[90] = "Id Pregunta: 10200. ";


//  Id pregunta: 10204 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[91]= new Array();
 choices[91][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[91][1] = "Desaparece el RNC (Radio Network Controller) y sus funciones se incorporan al eNode B (Evolved Node B)";
 choices[91][2] = "Desaparecen los soft handovers y solo existen hard handovers";
 choices[91][3] = "Mantiene en su arquitectura los HLR (Home Locationl Register) usados desde GSM";
 answers[91] = choices[91][3];
 units[91] = "108";
 comments[91] = "Id Pregunta: 10204. En la arquitectura se introduce un nuevo elemento llamado HSS (Home Subscriber Server) basado en la antigua HLR y AuC";


//  Id pregunta: 10224 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  Para que la siguiente sentencia compile:";
 choices[92]= new Array();
 choices[92][0] = "Compila bien sin cambios";
 choices[92][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[92][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[92][3] = "I), II) y III) son v&aacute;lidas";
 answers[92] = choices[92][3];
 units[92] = "60";
 comments[92] = "Id Pregunta: 10224. ";


//  Id pregunta: 10249 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. FooCorp vende copias de su software en CD sin c&oacute;digo fuente, e incluyen una oferta para incluir el c&oacute;digo fuente. &iquest;Cu&aacute;l de las siguientes opciones cumple sus obligaciones con respecto a la licencia GPL?";
 choices[93]= new Array();
 choices[93][0] = "I no es v&aacute;lida, cualquiera de II-VII";
 choices[93][1] = "I-III no son v&aacute;lidas, cualquiera de IV-VII";
 choices[93][2] = "Cualquiera de III, V o VII son v&aacute;lidas";
 choices[93][3] = "V o VII son v&aacute;lidas.";
 answers[93] = choices[93][3];
 units[93] = "61";
 comments[93] = "Id Pregunta: 10249. ";


//  Id pregunta: 10310 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[94]= new Array();
 choices[94][0] = "300 MB/s.";
 choices[94][1] = "900 MB/s.";
 choices[94][2] = "600 MB/s.";
 choices[94][3] = "150 MB/s.";
 answers[94] = choices[94][2];
 units[94] = "48";
 comments[94] = "Id Pregunta: 10310. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10353 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l es el &aacute;mbito de aplicaci&oacute;n del Real Decreto 1494/2007 de accesibilidad a la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social?";
 choices[95]= new Array();
 choices[95][0] = "Los portales web de la Administraciones P&uacute;blicas";
 choices[95][1] = "Administraciones P&uacute;blicas, operadores de telecomunicaciones, prestadores de servicios de la sociedad de la informaci&oacute;n, y medios de comunicaci&oacute;n social";
 choices[95][2] = "Administraciones P&uacute;blicas y medios de comunicaci&oacute;n social, ya que los operadores de telecomunicaciones se rigen por lo dispuesto en la Ley General de Telecomunicaciones";
 choices[95][3] = "Es el mismo que se establece en la norma UNE 139803:2012";
 answers[95] = choices[95][1];
 units[95] = "39";
 comments[95] = "Id Pregunta: 10353. Consultar Art. 2 del Real Decreto";


//  Id pregunta: 10450 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En el &aacute;mbito de la continuidad de negocio, la &quot;ventana de interrupci&oacute;n&quot; se define como:";
 choices[96]= new Array();
 choices[96][0] = "La cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[96][1] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[96][2] = "Se determina en funci&oacute;n de la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n de las operaciones ";
 choices[96][3] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 answers[96] = choices[96][1];
 units[96] = "97";
 comments[96] = "Id Pregunta: 10450. ";


//  Id pregunta: 10474 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En el &aacute;mbito de los certificados X.509:";
 choices[97]= new Array();
 choices[97][0] = "La CA de la PKI debe proporcional protocolos de gesti&oacute;n de certificados (registro, recuperaci&oacute;n de claves, etc) dsiponibles online.";
 choices[97][1] = "Una CRL es una lista de certificados revocados con un timestamp que determina su fecha de emisi&oacute;n y firmada en todo caso por la CA que emite los certificados.";
 choices[97][2] = "Una CRL tiene un alcance que define el tipo de certificados que incluir&aacute; dicha lista.";
 choices[97][3] = "Un certificado se a&ntilde;ade a la CRL en la siguiente actualizaci&oacute;n seg&uacute;n la pol&iacute;tica de actualizaciones definida.";
 answers[97] = choices[97][3];
 units[97] = "73";
 comments[97] = "Id Pregunta: 10474. ";


//  Id pregunta: 10513 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Cual de los siguientes no es un tipo de tr&aacute;fico de ATM?";
 choices[98]= new Array();
 choices[98][0] = "UBR";
 choices[98][1] = "VBR";
 choices[98][2] = "SBR";
 choices[98][3] = "CBR";
 answers[98] = choices[98][2];
 units[98] = "109";
 comments[98] = "Id Pregunta: 10513. ";


//  Id pregunta: 10549 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Las contrase&ntilde;as:";
 choices[99]= new Array();
 choices[99][0] = "Deben ser asignadas por el administrador de seguridad";
 choices[99][1] = "Deben cambiarse cada 30 d&iacute;as a discreci&oacute;n del usuario";
 choices[99][2] = "Deben reutilizarse muchas veces para garantizar que el usuario no olvida su contrase&ntilde;a";
 choices[99][3] = "Deben visualizarse en la pantalla para que el usuario puede asegurarse de que se ha introducido correctamente";
 answers[99] = choices[99][0];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10549. ";


