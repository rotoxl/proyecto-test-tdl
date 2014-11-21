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


//  Id pregunta: 157 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Overlap";
 choices[1][1] = "Swaping";
 choices[1][2] = "Throughput";
 choices[1][3] = "Overhead";
 answers[1] = choices[1][3];
 units[1] = "35";
 comments[1] = "Id Pregunta: 157. ";


//  Id pregunta: 195 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  En el caso que se desee caracterizar la carga de un sistema inform&aacute;tico, qu&eacute; par&aacute;metro no se deber&iacute;a tener en cuenta:";
 choices[2]= new Array();
 choices[2][0] = "Tiempo de CPU por trabajo.";
 choices[2][1] = "Tiempo de reflexi&oacute;n del usuario.";
 choices[2][2] = "Memoria necesaria para ejecutar un trabajo.";
 choices[2][3] = "Troughput.";
 answers[2] = choices[2][3];
 units[2] = "35";
 comments[2] = "Id Pregunta: 195. ";


//  Id pregunta: 223 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En la planificaci&oacute;n f&iacute;sica de un centro de proceso de datos es esencial tener en cuenta el aspecto siguiente:";
 choices[3]= new Array();
 choices[3][0] = "Debe asegurarse el suministro de energ&iacute;a el&eacute;ctrica haciendo un contrato con m&aacute;s de un suministrador o instalando generadores";
 choices[3][1] = "Debe estar situado junto a una v&iacute;a r&aacute;pida de comunicaci&oacute;n";
 choices[3][2] = "El edificio no debe tener m&aacute;s de cuatro plantas";
 choices[3][3] = "En la azotea deben instalarse paneles solares";
 answers[3] = choices[3][0];
 units[3] = "26";
 comments[3] = "Id Pregunta: 223. ";


//  Id pregunta: 297 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  La directiva 91/250/CEE, modificada por la 93/98/CEE, del Consejo, relativa a la protecci&oacute;n jur&iacute;dica de programas de ordenador:";
 choices[4]= new Array();
 choices[4][0] = "Excluye expl&iacute;citamente aquellos desarrollos sobre plataformas Linux, shareware o software libre";
 choices[4][1] = "Establece que los programas deber&aacute;n protegerse de la misma manera que las obras literarias, con arreglo a lo establecido en el convenio de Berna sobre protecci&oacute;n de obras literarias y art&iacute;sticas";
 choices[4][2] = "Regula aquellos aspectos del comercio electr&oacute;nico relacionados con la materia de propiedad intelectual";
 choices[4][3] = "Crea un nuevo t&iacute;tulo de propiedad industrial &quot;patente comunitaria&quot; para eliminar las distorsiones del mercado interior y permitir que Europa se aproveche al m&aacute;ximo de sus trabajos de investigaci&oacute;n";
 answers[4] = choices[4][1];
 units[4] = "37";
 comments[4] = "Id Pregunta: 297. ";


//  Id pregunta: 331 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  De acuerdo al RDL 1/1996, la protecci&oacute;n de los programas de ordenador:";
 choices[5]= new Array();
 choices[5][0] = "Cuando el autor sea una persona natural, para el caso m&aacute;s general, los derechos de explotaci&oacute;n durar&aacute;n toda su vida, y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[5][1] = "Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n ser&aacute; de 70 a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[5][2] = "a y b son correctas";
 choices[5][3] = "a y b son incorrectas";
 answers[5] = choices[5][2];
 units[5] = "37";
 comments[5] = "Id Pregunta: 331. ";


//  Id pregunta: 357 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Las leyes de protecci&oacute;n de datos que pretenden prevenir la invasi&oacute;n de la intimidad del individuo frente al abuso de la informaci&oacute;n computarizada son las conocidas como:";
 choices[6]= new Array();
 choices[6][0] = "Leyes de primera generaci&oacute;n";
 choices[6][1] = "Leyes de segunda generaci&oacute;n";
 choices[6][2] = "Leyes de tercera generaci&oacute;n";
 choices[6][3] = "No se aplica esta clasificaci&oacute;n a este tipo de leyes";
 answers[6] = choices[6][2];
 units[6] = "36";
 comments[6] = "Id Pregunta: 357. ";


//  Id pregunta: 393 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Para garantizar al usuario el acceso al c&oacute;digo fuente del programa cedido en el caso de desaparici&oacute;n de la empresa titular de los derechos de propiedad intelectual se recurre a:";
 choices[7]= new Array();
 choices[7][0] = "El Convenio de Berna";
 choices[7][1] = "La Ley 16/993";
 choices[7][2] = "La Ley 22/1987";
 choices[7][3] = "El contrato de Escrow";
 answers[7] = choices[7][3];
 units[7] = "36";
 comments[7] = "Id Pregunta: 393. ";


//  Id pregunta: 534 Año de creación de pregunta: 2003-01-01
 questions[8]= "9)  Se&ntilde;alar la respuesta correctra respecto a M&eacute;trica V3";
 choices[8]= new Array();
 choices[8][0] = "No propone la utilizaci&oacute;n de MAGERIT como la metodolog&iacute;a de an&aacute;lsis y gesti&oacute;n de riesgos";
 choices[8][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos.";
 choices[8][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de propia metodolog&iacute;a.";
 choices[8][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos.";
 answers[8] = choices[8][2];
 units[8] = "86";
 comments[8] = "Id Pregunta: 534. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 656 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[9]= new Array();
 choices[9][0] = "Impide la descarga de contenido protegido";
 choices[9][1] = "Impide la copia de contenido protegido";
 choices[9][2] = "Garantiza la no modificaci&oacute;n del contenido protegido";
 choices[9][3] = "Se asegura de que el comprador ha pagado por el contenido";
 answers[9] = choices[9][0];
 units[9] = "37";
 comments[9] = "Id Pregunta: 656. ";


//  Id pregunta: 755 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  En Java, respecto a la herencia de clases ...";
 choices[10]= new Array();
 choices[10][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[10][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[10][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[10][3] = "Todas las anteriores son falsas";
 answers[10] = choices[10][3];
 units[10] = "60";
 comments[10] = "Id Pregunta: 755. ";


//  Id pregunta: 879 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[11]= new Array();
 choices[11][0] = "DOKM";
 choices[11][1] = "DOM";
 choices[11][2] = "JDOC";
 choices[11][3] = "Todas son falsas";
 answers[11] = choices[11][1];
 units[11] = "69";
 comments[11] = "Id Pregunta: 879. ";


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


//  Id pregunta: 1299 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Para la comunicaci&oacute;n web segura, la norma de seguridad independiente del protocolo de aplicaci&oacute;n y, por tanto, v&aacute;lida para http, ftp, telnet&hellip; es la siguiente:";
 choices[13]= new Array();
 choices[13][0] = "DNS";
 choices[13][1] = "SSL";
 choices[13][2] = "XAdES-A";
 choices[13][3] = "WML";
 answers[13] = choices[13][1];
 units[13] = "73";
 comments[13] = "Id Pregunta: 1299. ";


//  Id pregunta: 1317 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Respecto a los DTDs es falso que:";
 choices[14]= new Array();
 choices[14][0] = "est&aacute;n escritos en una sintaxis diferente de XML";
 choices[14][1] = "representan la &uacute;nica manera de definir un documento XML, y su ausencia implica que la definici&oacute;n del documento se saca del contexto";
 choices[14][2] = "no son obligatorios, y los documentos XML correctos pero sin DTD se denominan &quot;bien formados&quot;";
 choices[14][3] = "est&aacute;n muy extendidos y existen muchas herramientas y expertos en su utilizaci&oacute;n y desarrollo";
 answers[14] = choices[14][1];
 units[14] = "69";
 comments[14] = "Id Pregunta: 1317. ";


//  Id pregunta: 1440 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Comparando los sistemas de compresi&oacute;n de video:";
 choices[15]= new Array();
 choices[15][0] = "La complejidad de compresi&oacute;n es mayor en MPEG-x que en H.26x";
 choices[15][1] = "El retardo producido por H.26x es mayor que el producido por MPEG-x";
 choices[15][2] = "La eficiencia es mayor en los algoritmos H.26x que en los algoritmos MPEG-x";
 choices[15][3] = "Todas las respuestas anteriores son correctas";
 answers[15] = choices[15][0];
 units[15] = "109";
 comments[15] = "Id Pregunta: 1440. ";


//  Id pregunta: 1664 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;C&oacute;mo se conoce la taxonom&iacute;a, que clasifica las arquitecturas de ordenadores en SISD, SIMD, MISD, MIMD?";
 choices[16]= new Array();
 choices[16][0] = "Kuck";
 choices[16][1] = "Treleaven";
 choices[16][2] = "Flynn";
 choices[16][3] = "Gajski y Pier";
 answers[16] = choices[16][2];
 units[16] = "45";
 comments[16] = "Id Pregunta: 1664. ";


//  Id pregunta: 1996 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  La metodolog&iacute;a METRICA V3 considera que la t&eacute;cnica de estimaci&oacute;n del esfuerzo m&aacute;s adecuada en el desarrollo del software es:";
 choices[17]= new Array();
 choices[17][0] = "La t&eacute;cnica de los puntos de funci&oacute;n poligonial";
 choices[17][1] = "La t&eacute;cnica de los puntos de funci&oacute;n 3D";
 choices[17][2] = "La t&eacute;cnica de los puntos caracter&iacute;sticos";
 choices[17][3] = "La t&eacute;cnica de los puntos de funci&oacute;n";
 answers[17] = choices[17][3];
 units[17] = "86";
 comments[17] = "Id Pregunta: 1996. Pregunta TIC-B 2004";


//  Id pregunta: 2017 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  Dentro de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3, &iquest;cu&aacute;l de las siguientes opciones es una extensi&oacute;n del modelo entidad/relaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "Definici&oacute;n de &iacute;ndices";
 choices[18][1] = "Generalizaci&oacute;n";
 choices[18][2] = "Entidades deductivas";
 choices[18][3] = "Entidades hist&oacute;ricas";
 answers[18] = choices[18][1];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2017. Examen TIC MAP B 2004";


//  Id pregunta: 2044 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  Seg&uacute;n el PGGC, si el nivel de intensidad es 2, el procedimiento de control de calidad a utilizar ser&aacute;:";
 choices[19]= new Array();
 choices[19][0] = "Revisi&oacute;n T&eacute;cnica Formal";
 choices[19][1] = "Auditor&iacute;a de Calidad";
 choices[19][2] = "Inspecci&oacute;n Detallada";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][2];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2044. ";


//  Id pregunta: 2049 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  En M&eacute;trica V3 no son T&eacute;cnicas de Gesti&oacute;n de Proyectos:";
 choices[20]= new Array();
 choices[20][0] = "WBS";
 choices[20][1] = "MARK II";
 choices[20][2] = "JAD";
 choices[20][3] = "PERT";
 answers[20] = choices[20][2];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2049. ";


//  Id pregunta: 2078 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  Las actividades propuestas en METRICA V3 para el proceso de Mantenimiento de sistemas de informaci&oacute;n son:";
 choices[21]= new Array();
 choices[21][0] = "Registro de la petici&oacute;n; An&aacute;lisis de la petici&oacute;n; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n; Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n.";
 choices[21][1] = "Registro de la peticici&oacute;n; Identificaci&oacute;n del tipo y origen del mantenimiento; Construcci&oacute;n, Pruebas e Implantaci&oacute;n";
 choices[21][2] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o; Construcci&oacute;n; Pruebas de regresi&oacute;n; Aceptaci&oacute;n.";
 choices[21][3] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o, Construcci&oacute;n, Implantaci&oacute;n; Aceptaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2078. Pregunta Junta Andalucia - A";


//  Id pregunta: 2317 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  En el modelo Entidad-Relaci&oacute;n utilizado en la metodolog&iacute;a M&Eacute;TRICA, las Entidades se describen mediante:";
 choices[22]= new Array();
 choices[22][0] = "Los datos";
 choices[22][1] = "Las relaciones";
 choices[22][2] = "Los atributos";
 choices[22][3] = "Otras entidades";
 answers[22] = choices[22][2];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2317. ";


//  Id pregunta: 2597 Año de creación de pregunta: 2003-01-01
 questions[23]= "24)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[23]= new Array();
 choices[23][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n.";
 choices[23][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n.";
 choices[23][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n.";
 choices[23][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n.";
 answers[23] = choices[23][0];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2597. Junta Andaluc&iacute;a";


//  Id pregunta: 2616 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un resultado de la fase de DSI en Metrica v3?";
 choices[24]= new Array();
 choices[24][0] = "Glosario";
 choices[24][1] = "Cat&aacute;logo excepciones";
 choices[24][2] = "procedimientos de seguridad y control de acceso";
 choices[24][3] = "Cat&aacute;logo de normas para dise&ntilde;o y construcci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2616. ";


//  Id pregunta: 2654 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  La t&eacute;cnica de puntos de funci&oacute;n es una t&eacute;cnica para determinar";
 choices[25]= new Array();
 choices[25][0] = "La magnitud de un proyecto inform&aacute;tico y su probable coste";
 choices[25][1] = "La calidad de una aplicaci&oacute;n SW y la tase de errores prevista";
 choices[25][2] = "La amigabilidad de un interfaz y la previsi&oacute;n de errores de usuario ";
 choices[25][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n";
 answers[25] = choices[25][0];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2654. ";


//  Id pregunta: 2727 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes factores no es necesario tener en cuenta para guiar a una organizaci&oacute;n hacia el futuro?";
 choices[26]= new Array();
 choices[26][0] = "El mercado";
 choices[26][1] = "La misi&oacute;n";
 choices[26][2] = "Metas y objetivos";
 choices[26][3] = "Subvenciones";
 answers[26] = choices[26][3];
 units[26] = "77";
 comments[26] = "Id Pregunta: 2727. ";


//  Id pregunta: 2792 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  En cuanto al proceso de desarrollo de sistemas en M&eacute;trica v3. Cu&aacute;l de los siguientes subprocesos no est&aacute; contemplado";
 choices[27]= new Array();
 choices[27][0] = "DSI";
 choices[27][1] = "PSI";
 choices[27][2] = "CSI";
 choices[27][3] = "Todos est&aacute;n contemplados";
 answers[27] = choices[27][1];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2792. ";


//  Id pregunta: 3080 Año de creación de pregunta: 2005-01-01
 questions[28]= "29)  Las fases de SSL son:";
 choices[28]= new Array();
 choices[28][0] = "Hola, autenticaci&oacute;n y fin";
 choices[28][1] = "Hola, autenticaci&oacute;n, creaci&oacute;n de clave de sesi&oacute;n, y fin";
 choices[28][2] = "Hola, autenticaci&oacute;n, creaci&oacute;n de clave de sesi&oacute;n, creaci&oacute;n de clave de trabajo y fin";
 choices[28][3] = "Hola, autenticaci&oacute;n, creaci&oacute;n de clave de sesi&oacute;n, creaci&oacute;n de clave de trabajo, consulta de datos y fin";
 answers[28] = choices[28][1];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3080. ";


//  Id pregunta: 3266 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;En qu&eacute; componente de una red GSM se centraliza la gesti&oacute;n de los servicios suplementarios?:";
 choices[29]= new Array();
 choices[29][0] = "MSC";
 choices[29][1] = "HLR";
 choices[29][2] = "VLR";
 choices[29][3] = "EIR";
 answers[29] = choices[29][1];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3266. ";


//  Id pregunta: 3304 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Qu&eacute; protocolo se usa para enviar mensajes cortos en GSM por se&ntilde;alizaci&oacute;n SS7?:";
 choices[30]= new Array();
 choices[30][0] = "CAP";
 choices[30][1] = "MAP";
 choices[30][2] = "LAPD";
 choices[30][3] = "WAP";
 answers[30] = choices[30][1];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3304. ";


//  Id pregunta: 3325 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[31]= new Array();
 choices[31][0] = "registro de incidencias";
 choices[31][1] = "fichero de log";
 choices[31][2] = "lista de errores";
 choices[31][3] = "fichero de registros";
 answers[31] = choices[31][1];
 units[31] = "113";
 comments[31] = "Id Pregunta: 3325. ";


//  Id pregunta: 3443 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  El protocolo de aplicaciones inal&aacute;mbricas (WAP), para el acceso y creaci&oacute;n de informaci&oacute;n en internet, utiliza el lenguaje:";
 choices[32]= new Array();
 choices[32][0] = "HTML";
 choices[32][1] = "WML";
 choices[32][2] = "XML  ";
 choices[32][3] = "CGI";
 answers[32] = choices[32][1];
 units[32] = "108";
 comments[32] = "Id Pregunta: 3443. ";


//  Id pregunta: 3561 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  En UMTS un terminal puede comunicarse simult&aacute;neamente a trav&eacute;s de dos celdas diferentes. Esto:";
 choices[33]= new Array();
 choices[33][0] = "Es cierto tambi&eacute;n en GSM";
 choices[33][1] = "Es cierto tambi&eacute;n en GPRS";
 choices[33][2] = "Es cierto s&oacute;lo en UMTS";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][2];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3561. Handover soft/softer";


//  Id pregunta: 3769 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Para usar DNS en una LAN que utiliza Traducciones de Direcciones (NAT) en el firewall:";
 choices[34]= new Array();
 choices[34][0] = "Es recomendable un DNS interno";
 choices[34][1] = "Es recomendable ofrecer el servicio DNS en el firewall";
 choices[34][2] = "Es necesario utilizar un DNS externo al existir NAT";
 choices[34][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[34] = choices[34][0];
 units[34] = "112";
 comments[34] = "Id Pregunta: 3769. ";


//  Id pregunta: 3782 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  Respecto a EDGE puede decirse que:";
 choices[35]= new Array();
 choices[35][0] = "Ha sustuido a GSM en gran parte de Europa";
 choices[35][1] = "Sustiuir&aacute; a UMTS en vista del fracaso de esta &uacute;ltima tecnolog&iacute;a";
 choices[35][2] = "Es un desarrollo paralelo a iMode con amplia implantaci&oacute;n en Jap&oacute;n y Norteam&eacute;rica";
 choices[35][3] = "Nada de lo anterior es cierto";
 answers[35] = choices[35][3];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3782. ";


//  Id pregunta: 3874 Año de creación de pregunta: 2004-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es cierto respecto al protocolo POP3?";
 choices[36]= new Array();
 choices[36][0] = "Utiliza el protocolo TCP";
 choices[36][1] = "Utiliza servicios de DNS";
 choices[36][2] = "Permite eliminar los mensajes del buz&oacute;n";
 choices[36][3] = "A y c son ciertas";
 answers[36] = choices[36][3];
 units[36] = "106";
 comments[36] = "Id Pregunta: 3874. Tanenbaum";


//  Id pregunta: 3906 Año de creación de pregunta: 2003-01-01
 questions[37]= "38)  SSL son las iniciales de Secure Socket Layer, S-HTTP son las siglas de Secure HyperText Transfer Protocol, protocolos para la comunicaci&oacute;n segura entre dos ordenadores normal entre un cliente y un servidor y su objetivo es similar, pero:";
 choices[37]= new Array();
 choices[37][0] = "SSL es m&aacute;s amplio que S-HTTP ya que puede ser utilizado como un intermediario entre el TCP/ IP y cualquier otro protocolo (por ejemplo, el HTTP) para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n entre un cliente y un servidor.";
 choices[37][1] = "SSL es menos amplio que S-HTTP ya que es una parte de este que puede ser utilizada para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n http entre un cliente y un servidor.";
 choices[37][2] = "S-HTTP sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con SSL, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 choices[37][3] = "SSL sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con S-HTTP, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 answers[37] = choices[37][0];
 units[37] = "111";
 comments[37] = "Id Pregunta: 3906. Junta Andaluc&iacute;a";


//  Id pregunta: 3922 Año de creación de pregunta: 2003-01-01
 questions[38]= "39)  Un documento multimedia se define como:";
 choices[38]= new Array();
 choices[38][0] = "Compuestos de audio y v&iacute;deo.";
 choices[38][1] = "Compuestos de se&ntilde;ales ni digitales ni digitalizadas.";
 choices[38][2] = "Compuestos de diferentes fuentes y estructuras que incorpora documentos digitales o digitalizados.";
 choices[38][3] = "Compuestos de diferentes fuentes y estructuras que incorpora no s&oacute;lo documentos digitales o digitalizados, sino tambi&eacute;n a los procedentes de otros tipos de se&ntilde;ales.";
 answers[38] = choices[38][3];
 units[38] = "93";
 comments[38] = "Id Pregunta: 3922. ";


//  Id pregunta: 3956 Año de creación de pregunta: 2003-01-01
 questions[39]= "40)  La depuraci&oacute;n (debug) de resultados intermedios durante la ejecuci&oacute;n de trabajos java:";
 choices[39]= new Array();
 choices[39][0] = "S&oacute;lo se permite desde la m&aacute;quina donde se ejecuta";
 choices[39][1] = "No se permite la ejecuci&oacute;n de paradas intermedias";
 choices[39][2] = "Hay una arquitectura que incluye depuraci&oacute;n en remoto";
 choices[39][3] = "No tiene sentido la depuraci&oacute;n en remoto";
 answers[39] = choices[39][2];
 units[39] = "60";
 comments[39] = "Id Pregunta: 3956. ";


//  Id pregunta: 3974 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes productos o marcas comerciales  esta relacionado con un Buscador / Indexador?";
 choices[40]= new Array();
 choices[40][0] = "Verity";
 choices[40][1] = "Lucene";
 choices[40][2] = "Los dos anteriores";
 choices[40][3] = "Ninguno de los anteriores";
 answers[40] = choices[40][2];
 units[40] = "112";
 comments[40] = "Id Pregunta: 3974. ";


//  Id pregunta: 4068 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  En la estructura de la actual internet podemos diferenciar varios niveles jer&aacute;rquicos";
 choices[41]= new Array();
 choices[41][0] = "3, red troncal - redes de proveedores de &aacute;mbito local - redes corporativas";
 choices[41][1] = "4, red troncal - redes de proveedores de tr&aacute;nsito y acceso internacional - redes de proveedores de acceso local - redes corporativas";
 choices[41][2] = "5, red troncal - redes de proveedores de tr&aacute;nsito y acceso internacional - redes de proveedores de acceso local - redes corporativas - redes locales";
 choices[41][3] = "Internet es la red de redes y no tiene ning&uacute;n tipo de jerarqu&iacute;a en sus infraestructuras";
 answers[41] = choices[41][1];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4068. ";


//  Id pregunta: 4109 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Webmail es:";
 choices[42]= new Array();
 choices[42][0] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un programa de correo electr&oacute;nico especializado que accede a trav&eacute;s del protocolo POP3.";
 choices[42][1] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un Navegador.";
 choices[42][2] = "a) y b) son ciertas";
 choices[42][3] = "a) y b) son falsas";
 answers[42] = choices[42][1];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4109. ";


//  Id pregunta: 4125 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Lenguaje de marca que utiliza s&iacute;mbolos autodefinidos e ilimitados";
 choices[43]= new Array();
 choices[43][0] = "HTML";
 choices[43][1] = "XHTML";
 choices[43][2] = "XML";
 choices[43][3] = "W3C";
 answers[43] = choices[43][2];
 units[43] = "112,69";
 comments[43] = "Id Pregunta: 4125. ";


//  Id pregunta: 4237 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indique que significan las siglas AJAX";
 choices[44]= new Array();
 choices[44][0] = "Asynchronous Java And  XML";
 choices[44][1] = "Asynchronous JavaScript And  XML";
 choices[44][2] = "Asynchronous JavaScript And  XSL";
 choices[44][3] = "Advanced JavaScript And  XML";
 answers[44] = choices[44][1];
 units[44] = "114";
 comments[44] = "Id Pregunta: 4237. ";


//  Id pregunta: 4291 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  Un Jefe de Proyecto ha elaborado un borrador del Plan de Gesti&oacute;n de un proyecto de software. &iquest;Cu&aacute;les de los siguientes elementos deben ser tratados en ese plan? I) Calendario. II) Presupuesto. III) Requisitos del software. IV) Personal.";
 choices[45]= new Array();
 choices[45][0] = "I, III y IV.";
 choices[45][1] = "I, II y III.";
 choices[45][2] = "I, II y IV.";
 choices[45][3] = "I, II, III y IV.";
 answers[45] = choices[45][2];
 units[45] = "77";
 comments[45] = "Id Pregunta: 4291. ";


//  Id pregunta: 4346 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  Cu&aacute;l es la longitud de la clave utilizada por el sistema criptogr&aacute;fico sim&eacute;trico DES?";
 choices[46]= new Array();
 choices[46][0] = "56 Bits";
 choices[46][1] = "168 Bits";
 choices[46][2] = "256 Bits.";
 choices[46][3] = "Puede ser cualquiera, pero la habitual es 1.024 Bits.";
 answers[46] = choices[46][0];
 units[46] = "73";
 comments[46] = "Id Pregunta: 4346. ";


//  Id pregunta: 4399 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes tipos de mantenimiento de equipos hardware tiene un car&aacute;cter peri&oacute;dico?";
 choices[47]= new Array();
 choices[47][0] = "Mantenimiento correctivo.";
 choices[47][1] = "Mantenimiento preventivo.";
 choices[47][2] = "Mantenimiento perfectivo.";
 choices[47][3] = "Mantenimiento adaptativo.";
 answers[47] = choices[47][1];
 units[47] = "26";
 comments[47] = "Id Pregunta: 4399. ";


//  Id pregunta: 4405 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n incorrecta. El departamento de seguridad inform&aacute;tica dentro de una organizaci&oacute;n especializada en tecnolog&iacute;as de informaci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Debe ser independiente del departamento de sistemas.";
 choices[48][1] = "Debe ser independiente del departamento de comunicaciones.";
 choices[48][2] = "Debe ser independiente del departamento de desarrollo.";
 choices[48][3] = "Centra su actividad en la seguridad en las redes.";
 answers[48] = choices[48][3];
 units[48] = "26";
 comments[48] = "Id Pregunta: 4405. ";


//  Id pregunta: 4495 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Que nivel del modelo CMMi se caracteriza porque el proceso del software de las actividades de gesti&oacute;n e ingenier&iacute;a esta documentado, estandarizado e integrado?";
 choices[49]= new Array();
 choices[49][0] = "Nivel 2 (Gestionado)";
 choices[49][1] = "Nivel 3 (Definido)";
 choices[49][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[49][3] = "Nivel 5 (Optimizado)";
 answers[49] = choices[49][1];
 units[49] = "87";
 comments[49] = "Id Pregunta: 4495. ";


//  Id pregunta: 4816 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN(Gateway GPRS Support Node)?";
 choices[50]= new Array();
 choices[50][0] = "La gesti&oacute;n de la movilidad";
 choices[50][1] = "El cifrado y autenticaci&oacute;n";
 choices[50][2] = "La conexi&oacute;n al HLR (Home Location Register)";
 choices[50][3] = "La conexi&oacute;n a los ISP (Internet Service Provider)";
 answers[50] = choices[50][3];
 units[50] = "108";
 comments[50] = "Id Pregunta: 4816. ";


//  Id pregunta: 4958 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  Pedro es administrador corporativo de seguridad. Para &eacute;l, la Intranet y la DMZ son:";
 choices[51]= new Array();
 choices[51][0] = "El conjunto de aplicaciones que son de uso interno del personal del Organismo.";
 choices[51][1] = "El conjunto de servicios y personal que no son directamente accedidos desde el exterior.";
 choices[51][2] = "Dominios de seguridad, entendidos como el conjunto de m&aacute;quinas cuya configuraci&oacute;n es responsabilidad de undepartamento interno.";
 choices[51][3] = "El conjunto de ordenadores que no tienen acceso directo al exterior.";
 answers[51] = choices[51][2];
 units[51] = "111";
 comments[51] = "Id Pregunta: 4958. Examen TIC B 2007";


//  Id pregunta: 4973 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n con SMTP (Simple Mail Transfer Protocol), definido en la RFC821:";
 choices[52]= new Array();
 choices[52][0] = "Puede transmitir ficheros ejecutables y objetos binarios en general.";
 choices[52][1] = "Se crea para superar las deficiencias de MIME (Multipurpose Internet Mail Extensi&oacute;n).";
 choices[52][2] = "Se limita a caracteres ASCII de 7 bits.";
 choices[52][3] = "Es un protocolo de nivel de Presentaci&oacute;n del modelo OSI.";
 answers[52] = choices[52][2];
 units[52] = "106";
 comments[52] = "Id Pregunta: 4973. Examen TIC B 2007";


//  Id pregunta: 5069 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre se utiliza para la edici&oacute;n de im&aacute;genes?:";
 choices[53]= new Array();
 choices[53][0] = "GIMP";
 choices[53][1] = "Jetspeed";
 choices[53][2] = "Konqueror";
 choices[53][3] = "Eclipse";
 answers[53] = choices[53][0];
 units[53] = "62";
 comments[53] = "Id Pregunta: 5069. Examen TIC A 2007";


//  Id pregunta: 5108 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  El modelo CMMI:";
 choices[54]= new Array();
 choices[54][0] = "Es una metodolog&iacute;a de desarrollo software.";
 choices[54][1] = "Es una pr&aacute;ctica para estimaci&oacute;n de complejidad de software.";
 choices[54][2] = "Permite obtener un diagn&oacute;stico de la madurez de los procesos relacionados con las tecnolog&iacute;as de la informaci&oacute;n de una organizaci&oacute;n.";
 choices[54][3] = "Permite la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 answers[54] = choices[54][2];
 units[54] = "92";
 comments[54] = "Id Pregunta: 5108. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5177 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  En lo referente a las t&eacute;cnicas de sesiones JAD y JRP. Es cierto que:";
 choices[55]= new Array();
 choices[55][0] = "Son t&eacute;cnicas que promueven la cooperaci&oacute;n entre los usuarios y los desarrolladores para lograr que ambas partes compartan una visi&oacute;n com&uacute;n";
 choices[55][1] = "JRP se usa para el dise&ntilde;o conjunto de aplicaciones";
 choices[55][2] = "JAD se usa para la planificaci&oacute;n de requisitos";
 choices[55][3] = "Todas son ciertas";
 answers[55] = choices[55][0];
 units[55] = "78,86";
 comments[55] = "Id Pregunta: 5177. ";


//  Id pregunta: 5246 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Seg&uacute;n Metrica v3, el Plan de Sistemas de Informaci&oacute;n";
 choices[56]= new Array();
 choices[56][0] = "Se compone de 9 actividades, que deben realizarse secuencialmente sin que ninguna de ellas pueda realizarse en paralelo";
 choices[56][1] = "Tiene por objeto obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que responda a los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[56][2] = "Define el programa general de actuaciones para la planificaci&oacute;n del desarrollo de los sistemas de informaci&oacute;n y su presupuestaci&oacute;n";
 choices[56][3] = "Todas las anteriores son correctas";
 answers[56] = choices[56][1];
 units[56] = "77";
 comments[56] = "Id Pregunta: 5246. ";


//  Id pregunta: 5437 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[57][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones";
 choices[57][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[57][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[57] = choices[57][2];
 units[57] = "77";
 comments[57] = "Id Pregunta: 5437. Castilla y Le&oacute;n";


//  Id pregunta: 5475 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  Los registros glue de una zona DNS son aquellos que";
 choices[58]= new Array();
 choices[58][0] = "Son los registros que mantienen la resoluci&oacute;n inversa";
 choices[58][1] = "Son los registros que mantienen el espacio de nombres de la zona";
 choices[58][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[58][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns";
 answers[58] = choices[58][1];
 units[58] = "73";
 comments[58] = "Id Pregunta: 5475. Castilla y Le&oacute;n";


//  Id pregunta: 5497 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Indica la afirmaci&oacute;n correcta sobre la tecnolog&iacute;a JavaServer Faces:";
 choices[59]= new Array();
 choices[59][0] = "Ha quedado obsoleta por el framework Spring";
 choices[59][1] = "Es la nueva API Java para desarrollo de transacciones distribuidas";
 choices[59][2] = "Es una novedad del Java 2";
 choices[59][3] = "Es un framework de la capa de presentaci&oacute;n para desarrollo de aplicaciones Web";
 answers[59] = choices[59][3];
 units[59] = "116";
 comments[59] = "Id Pregunta: 5497. ";


//  Id pregunta: 5561 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  De las siguientes afirmaciones se&ntilde;ale aquella que supone un inconveniente para la protecci&oacute;n de derechos de autor comparado con la protecci&oacute;n por patentes:";
 choices[60]= new Array();
 choices[60][0] = "Los derechos de autor nacen en el mismo momento de la creaci&oacute;n de la obra.";
 choices[60][1] = "S&oacute;lo se exige que la obra sea de creaci&oacute;n original.";
 choices[60][2] = "Se protege la forma de expresi&oacute;n de las ideas.";
 choices[60][3] = "Todas las anteriores son ventajas.";
 answers[60] = choices[60][2];
 units[60] = "37";
 comments[60] = "Id Pregunta: 5561. ";


//  Id pregunta: 5706 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos, transpone aspectos de:";
 choices[61]= new Array();
 choices[61][0] = "De la directiva 200/31/CE relativos a Servicios de la Sociedad de la Informaci&oacute;n.";
 choices[61][1] = "De la Directiva 2006/123/CE relativa a los servicios en el mercado interior.";
 choices[61][2] = "De la Directiva 2002/58/CE sobre la privacidad y las comunicaciones electr&oacute;nicas.";
 choices[61][3] = "No recoge la transposici&oacute;n de articulado relativo a ninguna Directiva.";
 answers[61] = choices[61][1];
 units[61] = "43";
 comments[61] = "Id Pregunta: 5706. ";


//  Id pregunta: 5767 Año de creación de pregunta: 2009-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de ordenaci&oacute;n de alternativas basado en permutaciones?";
 choices[62]= new Array();
 choices[62][0] = "TOPSIS";
 choices[62][1] = "PROMETHEE";
 choices[62][2] = "ELECTRE";
 choices[62][3] = "QUALIFLEX";
 answers[62] = choices[62][3];
 units[62] = "34";
 comments[62] = "Id Pregunta: 5767. ";


//  Id pregunta: 5807 Año de creación de pregunta: 2009-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l no es en general cierto a la hora de tomar una decisi&oacute;n sobre adquirir o desarrollar a medida un software?";
 choices[63]= new Array();
 choices[63][0] = "Si existe un software que satisface los requisitos aunque requiere alguna adaptaci&oacute;n deber&iacute;amos prodecer con cuidado a la hora de adquirirlo, ya que el coste de modificar el software podr&iacute;a superar el coste de desarrollarlo a medida.";
 choices[63][1] = "Si existe un software que satisface los requisitos aunque requiere alguna adaptaci&oacute;n deber&iacute;amos adquirirlo, ya que el coste de modificar el software es siempre inferior al coste de desarrollarlo a medida.";
 choices[63][2] = "Si existe un software que satisface los requisitos deber&iacute;amos adquirirlo, ya que el coste de desarrollar un software equivalente ser&aacute; en general mayor que el la adquisici&oacute;n.";
 choices[63][3] = "Si existe un software que satisface los requisitos deber&iacute;amos tener en cuenta tambi&eacute;n el coste que supone el mantenimiento del mismo para los a&ntilde;os siguientes, ya que en muchos productos comerciales el coste del mantenimiento suele ser un gasto importante.";
 answers[63] = choices[63][1];
 units[63] = "35";
 comments[63] = "Id Pregunta: 5807. ";


//  Id pregunta: 5891 Año de creación de pregunta: 2009-01-01
 questions[64]= "65)  &iquest;Qu&eacute; tecnolog&iacute;a Java permite la invocaci&oacute;n de m&eacute;todos de un objeto remoto?";
 choices[64]= new Array();
 choices[64][0] = "RMI";
 choices[64][1] = "JNI";
 choices[64][2] = "JDBC";
 choices[64][3] = "JRM";
 answers[64] = choices[64][0];
 units[64] = "60";
 comments[64] = "Id Pregunta: 5891. ";


//  Id pregunta: 5910 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  &iquest;Qu&eacute; NO garantiza el Servicio Universal contemplado por la Ley 9/2014, General de Telecomunicaciones?";
 choices[65]= new Array();
 choices[65][0] = "El ciudadano podr&aacute; elegir, para la prestaci&oacute;n de este servicio, a cualquiera de los operadores registrados a nivel nacional";
 choices[65][1] = "Todos los usuarios finales podr&aacute;n obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico";
 choices[65][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica";
 choices[65][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[65] = choices[65][0];
 units[65] = "110";
 comments[65] = "Id Pregunta: 5910. MAP 2008 A1";


//  Id pregunta: 5975 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Suponga que dos sistemas A y B est&aacute;n conectados mediante un enlace transcontinental de capacidad C=64 Mbps y retardo de propagaci&oacute;n Rp=2 ms. A comienza a transmitir a B un fichero de 15 MB. &iquest;Cu&aacute;ntos octetos ha transmitido A cuando el primer bit de la transmisi&oacute;n llega a B?";
 choices[66]= new Array();
 choices[66][0] = "128.000.";
 choices[66][1] = "32.000.";
 choices[66][2] = "16.000.";
 choices[66][3] = "4.000.";
 answers[66] = choices[66][2];
 units[66] = "99";
 comments[66] = "Id Pregunta: 5975. TIC A 2009";


//  Id pregunta: 5984 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  El modelo de control de accesos donde es el sistema quien protege los recursos y donde todo recurso del sistema tiene unaetiqueta de seguridad se denomina:";
 choices[67]= new Array();
 choices[67][0] = "De acceso discrecional (DAC)";
 choices[67][1] = "De acceso obligatorio (MAC)";
 choices[67][2] = "Basado en roles (RBAC)";
 choices[67][3] = "De confidencialidad.";
 answers[67] = choices[67][1];
 units[67] = "73";
 comments[67] = "Id Pregunta: 5984. TIC A 2009";


//  Id pregunta: 6003 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[68]= new Array();
 choices[68][0] = "Extraer la direcci&oacute;n de correo de un usuario.";
 choices[68][1] = "Relacionar sucesivas conexiones de un cliente.";
 choices[68][2] = "Enviar un objeto al cliente cuando su copia cach&eacute; est&aacute; obsoleta.";
 choices[68][3] = "Enviar c&oacute;digo embebido en la p&aacute;gina HTML que se ejecutar&aacute; en el cliente.";
 answers[68] = choices[68][1];
 units[68] = "113";
 comments[68] = "Id Pregunta: 6003. TIC A 2009";


//  Id pregunta: 6063 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Indicar cu&aacute;l de los siguientes NO es un m&eacute;todo ni un marco metodol&oacute;gico para estimar el esfuerzo de desarrollo en los proyectos:";
 choices[69]= new Array();
 choices[69][0] = "COCOMO II.";
 choices[69][1] = "FPA.";
 choices[69][2] = "ESTIM.";
 choices[69][3] = "ITEOR.";
 answers[69] = choices[69][2];
 units[69] = "89";
 comments[69] = "Id Pregunta: 6063. TIC A 2009";


//  Id pregunta: 6071 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Qu&eacute; regula la normativa de ICT (Infraestructuras Comunes de Telecomunicaci&oacute;n)?";
 choices[70]= new Array();
 choices[70][0] = "El acceso a los servicios de telecomunicaci&oacute;n en el interior de los edificios";
 choices[70][1] = "Los servicios de difusi&oacute;n de radio y televisi&oacute;n por cable";
 choices[70][2] = "La consideraci&oacute;n de Internet como servicio universal";
 choices[70][3] = "Ninguna de las anteriores";
 answers[70] = choices[70][0];
 units[70] = "105";
 comments[70] = "Id Pregunta: 6071. ";


//  Id pregunta: 6099 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  El teorema de Nyquist establece que el n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal:";
 choices[71]= new Array();
 choices[71][0] = "Puede ser superior al doble de su ancho de banda.";
 choices[71][1] = "No puede ser superior al doble de su ancho de banda.";
 choices[71][2] = "No tiene l&iacute;mite alguno.";
 choices[71][3] = "No puede ser superior al ancho de banda.";
 answers[71] = choices[71][1];
 units[71] = "99";
 comments[71] = "Id Pregunta: 6099. TIC A 2009";


//  Id pregunta: 6103 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  Indique cual de las siguientes es una caracter&iacute;stica de un servidor &quot;blade&quot;.";
 choices[72]= new Array();
 choices[72][0] = "No contienen fuente de alimentaci&oacute;n propia.";
 choices[72][1] = "Tiene prestaciones m&aacute;s bajas que un servidor tradicional.";
 choices[72][2] = "Solo se puede utilizar en entornos virtualizados.";
 choices[72][3] = "No tiene memoria propia.";
 answers[72] = choices[72][0];
 units[72] = "49";
 comments[72] = "Id Pregunta: 6103. TIC A 2009";


//  Id pregunta: 6178 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  Se&ntilde;ale la informaci&oacute;n falsa sobre AJAX:";
 choices[73]= new Array();
 choices[73][0] = "Las aplicaciones desarrolladas con AJAX usan Javascript y XML.";
 choices[73][1] = "Las aplicaciones desarrolladas con AJAX tienen una mejor experiencia de usuario.";
 choices[73][2] = "AJAX es la base de las Rich Internet Applications.";
 choices[73][3] = "Las aplicaciones AJAX son de tipo pull.";
 answers[73] = choices[73][3];
 units[73] = "69";
 comments[73] = "Id Pregunta: 6178. ";


//  Id pregunta: 6192 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Qu&eacute; norma es derogada por el Real Decreto 1671/2009?";
 choices[74]= new Array();
 choices[74][0] = "Real Decreto 263/1996";
 choices[74][1] = "Real Decreto 209/2003";
 choices[74][2] = "Real Decreto 1553/2005";
 choices[74][3] = "El Real Decreto 1671/2009 no deroga ninguna norma";
 answers[74] = choices[74][0];
 units[74] = "43";
 comments[74] = "Id Pregunta: 6192. Disposici&oacute;n derogatoria &uacute;nica";


//  Id pregunta: 6366 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes no es un requisito m&iacute;nimo de seguridad de los definidos en el Esquema Nacional de Seguridad?";
 choices[75]= new Array();
 choices[75][0] = "Gesti&oacute;n de personal.";
 choices[75][1] = "Integridad y actualizaci&oacute;n del sistema.";
 choices[75][2] = "Prevenci&oacute;n ante la continuidad de la actividad.";
 choices[75][3] = "Incidentes de seguridad.";
 answers[75] = choices[75][2];
 units[75] = "43";
 comments[75] = "Id Pregunta: 6366. Art&iacute;culo 11 ENS";


//  Id pregunta: 6395 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes medios no ser&iacute;a valido, en ning&uacute;n caso, para la pr&aacute;ctica de notificaciones por medios electr&oacute;nicos, en los &oacute;rganos y organismos p&uacute;blicos de la Administraci&oacute;n General del Estado, de acuerdo al RD 1671/2009?";
 choices[76]= new Array();
 choices[76][0] = "Direcci&oacute;n electr&oacute;nica habilitada";
 choices[76][1] = "Comparecencia electr&oacute;nica en la sede";
 choices[76][2] = "Sistema de correo electr&oacute;nico con acuse de recibo que deje constancia de la recepci&oacute;n";
 choices[76][3] = "Todos los anteriores son v&aacute;lidos";
 answers[76] = choices[76][3];
 units[76] = "43";
 comments[76] = "Id Pregunta: 6395. Art&iacute;culo 35 RD 1671/2009";


//  Id pregunta: 6453 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Qu&eacute; m&eacute;todo de HTTP se debe utilizar para comprobar la validez de una p&aacute;gina sin que la llamada retorne el cuerpo del mensaje?";
 choices[77]= new Array();
 choices[77][0] = "GET";
 choices[77][1] = "HEAD";
 choices[77][2] = "POST";
 choices[77][3] = "SERVICE";
 answers[77] = choices[77][1];
 units[77] = "112";
 comments[77] = "Id Pregunta: 6453. Castilla La Mancha 2009";


//  Id pregunta: 6485 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  En relaci&oacute;n con la transmisi&oacute;n en frecuencias radioel&eacute;ctricas, el medio de transmisi&oacute;n influye en la propagaci&oacute;n a trav&eacute;s de un conjunto de fen&oacute;menos f&iacute;sicos &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[78]= new Array();
 choices[78][0] = "Reflexi&oacute;n";
 choices[78][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[78][2] = "Difracci&oacute;n";
 choices[78][3] = "Absorci&oacute;n";
 answers[78] = choices[78][1];
 units[78] = "99";
 comments[78] = "Id Pregunta: 6485. Castilla La Mancha 2009";


//  Id pregunta: 6518 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[79]= new Array();
 choices[79][0] = "JDI";
 choices[79][1] = "JCI";
 choices[79][2] = "JTEE";
 choices[79][3] = "JNI";
 answers[79] = choices[79][3];
 units[79] = "60";
 comments[79] = "Id Pregunta: 6518. ";


//  Id pregunta: 6541 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  Una tarjeta de memoria";
 choices[80]= new Array();
 choices[80][0] = "Puede procesar informaci&oacute;n";
 choices[80][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[80][2] = "Nunca puede procesar informaci&oacute;n";
 choices[80][3] = "Son un tipo de tarjeta inteligente";
 answers[80] = choices[80][2];
 units[80] = "111";
 comments[80] = "Id Pregunta: 6541. ";


//  Id pregunta: 6543 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  Un ejemplo de ataque al control de acceso es";
 choices[81]= new Array();
 choices[81][0] = "Denegaci&oacute;n de servicio";
 choices[81][1] = "Spoofing";
 choices[81][2] = "Ataques de diccionario";
 choices[81][3] = "Todas las respuestas anteriores son correctas";
 answers[81] = choices[81][3];
 units[81] = "111";
 comments[81] = "Id Pregunta: 6543. ";


//  Id pregunta: 6643 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  En el m&eacute;todo de los Puntos de Funci&oacute;n se valoran:";
 choices[82]= new Array();
 choices[82][0] = "15 caracter&iacute;sticas generales";
 choices[82][1] = "5 caracter&iacute;sticas generales";
 choices[82][2] = "6 caracter&iacute;sticas generales";
 choices[82][3] = "14 caracter&iacute;sticas generales";
 answers[82] = choices[82][3];
 units[82] = "89";
 comments[82] = "Id Pregunta: 6643. ";


//  Id pregunta: 8186 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Seg&uacute;n el m&eacute;todo de puntos funci&oacute;n de Albrecht, marque la respuesta correcta para el valor de PFA (Puntos de Funci&oacute;n Ajustados), si PFNA (Puntos de Funci&oacute;n No Ajustados) y SVA (Suma de los Valores de los 14 Atributos o caracter&iacute;sticasgenerales del sistema) valen respectivamente 100 y 65:";
 choices[83]= new Array();
 choices[83][0] = "165";
 choices[83][1] = "120";
 choices[83][2] = "SVA no puede tener un valor superior a 50.";
 choices[83][3] = "130";
 answers[83] = choices[83][3];
 units[83] = "89";
 comments[83] = "Id Pregunta: 8186. Examen TIC A1 2010";


//  Id pregunta: 8199 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que: ";
 choices[84]= new Array();
 choices[84][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente. ";
 choices[84][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form. ";
 choices[84][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n. ";
 choices[84][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[84] = choices[84][0];
 units[84] = "69";
 comments[84] = "Id Pregunta: 8199. Examen TIC A1 2010";


//  Id pregunta: 8266 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  La tasa de rendimiento contable o rentabilidad media de una inversi&oacute;n es igual a:";
 choices[85]= new Array();
 choices[85][0] = "El cociente entre el beneficio medio anual y la inversi&oacute;n media anual.";
 choices[85][1] = "El cociente entre el flujo de caja medio anual y la inversi&oacute;n media anual.";
 choices[85][2] = "El valor actualizado de la diferencia entre los cobros y los pagos derivados de la inversi&oacute;n.";
 choices[85][3] = "El cociente entre el sumatorio de los flujos de caja y el desembolso inicial.";
 answers[85] = choices[85][0];
 units[85] = "38";
 comments[85] = "Id Pregunta: 8266. Examen TIC A1 2010";


//  Id pregunta: 8280 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Si ejecutamos el comando telnet para acceder a un servidor que tenga configurado lo necesario, &iquest;Cu&aacute;l de las afirmaciones es correcta?:";
 choices[86]= new Array();
 choices[86][0] = "S&oacute;lo podemos conectarnos al &quot;well-known port&quot; 23 (telnet).";
 choices[86][1] = "Accediendo al puerto 25 (smtp) ser&iacute;a posible enviar e-mails.";
 choices[86][2] = "Accediendo al puerto 22 (ssh) es posible securizar la comunicaci&oacute;n.";
 choices[86][3] = "Accediendo a cualquier puerto diferente del 23 el servidor reconoce el protocolo y redirige la comunicaci&oacute;n al puerto 23(telnet).";
 answers[86] = choices[86][1];
 units[86] = "112";
 comments[86] = "Id Pregunta: 8280. Examen TIC A1 2010";


//  Id pregunta: 8316 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  En el &aacute;mbito de las tecnolog&iacute;as de comunicaciones m&oacute;viles, el orden cronol&oacute;gico de protocolos, de mayor a menor antig&uuml;edad es:";
 choices[87]= new Array();
 choices[87][0] = "GSM, UMTS, HSUPA, HSDPA.";
 choices[87][1] = "GSM, UMTS, HSDPA, HSUPA.";
 choices[87][2] = "GSM, HSUPA, HSDPA, UMTS. ";
 choices[87][3] = "UMTS, GSM, HSDPA, HSUPA.";
 answers[87] = choices[87][1];
 units[87] = "108";
 comments[87] = "Id Pregunta: 8316. Examen TIC A2 2010";


//  Id pregunta: 8360 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad en el modelo de McCall?";
 choices[88]= new Array();
 choices[88][0] = "Accesibilidad";
 choices[88][1] = "Correcci&oacute;n";
 choices[88][2] = "Reusabilidad";
 choices[88][3] = "Interoperabilidad";
 answers[88] = choices[88][0];
 units[88] = "87,88";
 comments[88] = "Id Pregunta: 8360. Examen TIC A2 2010";


//  Id pregunta: 8383 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  El cable UTP (Unshielded Twisted Pair):";
 choices[89]= new Array();
 choices[89][0] = "No es tan susceptible a las interferencias electromagn&eacute;ticas como el cable STP (Shielded Twisted Pair). ";
 choices[89][1] = "Es m&aacute;s barato y f&aacute;cil de manipular que el STP.";
 choices[89][2] = "Tiene una l&aacute;mina externa de aluminio o de cobre trenzado alrededor del conjunto de pares.";
 choices[89][3] = "Tiene una pantalla protectora para cada par de hilos.";
 answers[89] = choices[89][1];
 units[89] = "99";
 comments[89] = "Id Pregunta: 8383. Examen TIC A2 2010";


//  Id pregunta: 8422 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[90]= new Array();
 choices[90][0] = "Seguridad transversal";
 choices[90][1] = "Gesti&oacute;n de riesgos";
 choices[90][2] = "L&iacute;neas de defensa";
 choices[90][3] = "Funci&oacute;n diferenciada";
 answers[90] = choices[90][0];
 units[90] = "43";
 comments[90] = "Id Pregunta: 8422. ";


//  Id pregunta: 8513 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  En el contexto de la seguridad l&oacute;gica, si hablamos de una bomba l&oacute;gica &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera? ";
 choices[91]= new Array();
 choices[91][0] = "El c&oacute;digo se replica al activarse";
 choices[91][1] = "Su efecto es retardado. ";
 choices[91][2] = "No se activan por eventos. ";
 choices[91][3] = "Es otra manera de referirse a los troyanos. ";
 answers[91] = choices[91][1];
 units[91] = "111";
 comments[91] = "Id Pregunta: 8513. Examen TIC A2 2010";


//  Id pregunta: 8527 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  En un cortafuegos en modo SPI (Stateful Packet Inspection), se&ntilde;ale la opci&oacute;n verdadera:";
 choices[92]= new Array();
 choices[92][0] = "Trabaja exclusivamente en el nivel 3 de OSI.";
 choices[92][1] = "Permitir&aacute; el paso de un paquete solo si se dirige al puerto 80 de nuestro servidor.";
 choices[92][2] = "Tiene en cuenta la negociaci&oacute;n en 3 pasos (3 way handshake) del protocolo TCP/IP.";
 choices[92][3] = "No permite la conexi&oacute;n SSH ya que est&aacute; cifrada.";
 answers[92] = choices[92][2];
 units[92] = "111";
 comments[92] = "Id Pregunta: 8527. Examen TIC A2 2010 interna";


//  Id pregunta: 8749 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[93]= new Array();
 choices[93][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[93][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[93][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[93][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[93] = choices[93][1];
 units[93] = "43";
 comments[93] = "Id Pregunta: 8749. Examen TIC A2 2010 interna";


//  Id pregunta: 8938 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Una sede judicial electr&oacute;nica puede no disponer de:";
 choices[94]= new Array();
 choices[94][0] = "Identificaci&oacute;n de la empresa contratada para su gesti&oacute;n, en su caso";
 choices[94][1] = "Informaci&oacute;n necesaria para su correcta utilizaci&oacute;n";
 choices[94][2] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal";
 choices[94][3] = "Debe disponer de todas las anteriores";
 answers[94] = choices[94][0];
 units[94] = "43";
 comments[94] = "Id Pregunta: 8938. ";


//  Id pregunta: 8950 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  El Registro Electr&oacute;nico Com&uacute;n ser&aacute; gestionado por:";
 choices[95]= new Array();
 choices[95][0] = "El Ministerio de la Presidencia";
 choices[95][1] = "Por la Secretar&iacute;a de Estado de Telecomunicaciones y Sistemas de la Informaci&oacute;n";
 choices[95][2] = "Por la Secretar&iacute;a de Estado para la Funci&oacute;n P&uacute;blica";
 choices[95][3] = "Ninguna de las anteriores es cierta";
 answers[95] = choices[95][2];
 units[95] = "43";
 comments[95] = "Id Pregunta: 8950. ";


//  Id pregunta: 9019 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  La funci&oacute;n de un repetidor en una l&iacute;nea telef&oacute;nica es &hellip;";
 choices[96]= new Array();
 choices[96][0] = "Amplificar la potencia de las se&ntilde;ales vocales.";
 choices[96][1] = "Compensar la atenuaci&oacute;n y corregir la deformaci&oacute;n de las corrientes vocales.";
 choices[96][2] = "Corregir la paradiafon&iacute;a de la l&iacute;nea.";
 choices[96][3] = "Ninguna de las anteriores";
 answers[96] = choices[96][1];
 units[96] = "99";
 comments[96] = "Id Pregunta: 9019. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9071 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  Se&ntilde;ale la afirmaci&oacute;n FALSA:";
 choices[97]= new Array();
 choices[97][0] = "El acr&oacute;nimo XAG se refiere a XML Accesibility Guidelines. ";
 choices[97][1] = "En las normas WCAG 2.0, el nivel se otorga a nivel de procesos y subprocesos. ";
 choices[97][2] = "El W3C publica gram&aacute;ticas HTML que deben satisfacerse para lograr el nivel AA en las normas WCAG 2.0. ";
 choices[97][3] = "WAI-ARIA es un acr&oacute;nimo que significa Web Accesibility Initiative - Accesible Rich Internet Applications. ";
 answers[97] = choices[97][1];
 units[97] = "39";
 comments[97] = "Id Pregunta: 9071. ";


//  Id pregunta: 9576 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  Seg&uacute;n el art&iacute;culo 4 de la Ley 11/2007, de 22 de junio, de Acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de igualdad en la utilizaci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n se refiere a:";
 choices[98]= new Array();
 choices[98][0] = "La exigencia de id&eacute;ntico nivel de garant&iacute;as y seguridad que el que se requiere para la utilizaci&oacute;n de medios no electr&oacute;nicos en la actividad administrativa.";
 choices[98][1] = "Que en ning&uacute;n caso el uso de medios electr&oacute;nicos pueda implicar la existencia de restricciones o discriminaciones para los ciudadanos que se relacionen con las Administraciones P&uacute;blicas por medios no electr&oacute;nicos.";
 choices[98][2] = "La garant&iacute;a de la accesibilidad universal y el dise&ntilde;o adaptado para todas las personas de los soportes, canales y entornos con objeto de que todos los ciudadanos puedan ejercer sus derechos en igualdad de condiciones.";
 choices[98][3] = "Que el uso de medios electr&oacute;nicos debe garantizar por igual a todos los ciudadanos la m&aacute;xima difusi&oacute;n, publicidad y transparencia de las actuaciones administrativas.";
 answers[98] = choices[98][1];
 units[98] = "43";
 comments[98] = "Id Pregunta: 9576. Examen TIC A1 2011";


//  Id pregunta: 9587 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  &iquest;A cu&aacute;l de los siguientes &aacute;mbitos establecidos en el art&iacute;culo 2 de la Ley 11/2007 NO aplica el Esquema Nacional de Seguridad (ENS)?:";
 choices[99]= new Array();
 choices[99][0] = "A la Administraci&oacute;n General del Estado, Administraciones de las Comunidades Aut&oacute;nomas y las Entidades que integran la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico vinculadas o dependientes de las mismas.";
 choices[99][1] = "A los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[99][2] = "A las relaciones entre las distintas Administraciones P&uacute;blicas.";
 choices[99][3] = "Sistemas que tratan informaci&oacute;n clasificada regulada por Ley 9/1968 de 5 de abril. ";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 9587. Examen TIC A2 2011";


