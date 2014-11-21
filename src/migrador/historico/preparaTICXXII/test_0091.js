/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 82 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; se entiende por capacidad?:";
 choices[0]= new Array();
 choices[0][0] = "Es la m&aacute;xima cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinada";
 choices[0][1] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinada";
 choices[0][2] = "Es el porcentaje de tiempo durante el cu&aacute;l est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[0][3] = "Es el intervalo de tiempo durante el cual se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 answers[0] = choices[0][0];
 units[0] = "35";
 comments[0] = "Id Pregunta: 82. ";


//  Id pregunta: 277 Año de creación de pregunta: 2009-01-01
 questions[1]= "2)  La Agencia de Protecci&oacute;n de Datos depende funcionalmente del:";
 choices[1]= new Array();
 choices[1][0] = "Ministerio de Justicia";
 choices[1][1] = "Ministerio de Ciencia y Tecnolog&iacute;a";
 choices[1][2] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[1][3] = "Es un organismo independiente de cualquier Ministerio";
 answers[1] = choices[1][3];
 units[1] = "29";
 comments[1] = "Id Pregunta: 277. ";


//  Id pregunta: 288 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La comunicaci&oacute;n descendente se da en uno de los modelos de comunicaci&oacute;n siguientes:";
 choices[2]= new Array();
 choices[2][0] = "Comunicaci&oacute;n en rueda";
 choices[2][1] = "Comunicaci&oacute;n en Y";
 choices[2][2] = "Comunicaci&oacute;n en cadena";
 choices[2][3] = "Comunicaci&oacute;n en c&iacute;rculo";
 answers[2] = choices[2][2];
 units[2] = "23";
 comments[2] = "Id Pregunta: 288. ";


//  Id pregunta: 361 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Las t&eacute;cnicas de Gantt y Pert ayudan a:";
 choices[3]= new Array();
 choices[3][0] = "Fijar la duraci&oacute;n de cada etapa";
 choices[3][1] = "Estimar cu&aacute;l ser&aacute; la tarea cr&iacute;tica de un proyecto";
 choices[3][2] = "Estimar la duraci&oacute;n de un proyecto";
 choices[3][3] = "Estimar el costo de cada etapa";
 answers[3] = choices[3][2];
 units[3] = "28";
 comments[3] = "Id Pregunta: 361. ";


//  Id pregunta: 503 Año de creación de pregunta: 2003-01-01
 questions[4]= "5)  En la metodolog&iacute;a MAGERIT la definici&oacute;n &quot;eventos que pueden desencadenar un incidente en la organizaci&oacute;n&quot; corresponde a:";
 choices[4]= new Array();
 choices[4][0] = "Riesgo";
 choices[4][1] = "Impacto";
 choices[4][2] = "Amenaza";
 choices[4][3] = "Vulnerabilidad";
 answers[4] = choices[4][2];
 units[4] = "31, 32, 33";
 comments[4] = "Id Pregunta: 503. ";


//  Id pregunta: 739 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  En la arquitectura cliente-servidor es falso que:";
 choices[5]= new Array();
 choices[5][0] = "Cliente y servidor tienen que estar obligatoriamente en distintas m&aacute;quinas";
 choices[5][1] = "Un servidor atiende a muchos clientes";
 choices[5][2] = "Hay m&aacute;s tr&aacute;fico de servidor a cliente que de cliente a servidor";
 choices[5][3] = "Todas las respuestas anteriores son verdaderas";
 answers[5] = choices[5][0];
 units[5] = "50";
 comments[5] = "Id Pregunta: 739. Similar a examen TIC SS A 2003";


//  Id pregunta: 771 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Qu&eacute; significado tienen las siguientes siglas COLD?";
 choices[6]= new Array();
 choices[6][0] = "Computer Output to laser Disk";
 choices[6][1] = "Computer on line disk";
 choices[6][2] = "Computer Optical Laser Disk";
 choices[6][3] = "ninguna de las anteriores";
 answers[6] = choices[6][0];
 units[6] = "48";
 comments[6] = "Id Pregunta: 771. ";


//  Id pregunta: 777 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  En teor&iacute;a de colas, &iquest;qu&eacute; se entiende por tiempo de respuesta?:";
 choices[7]= new Array();
 choices[7][0] = "El tiempo que una tarea emplea en un dispositivo del sistema, ya sea us&aacute;ndolo o esperando utilizarlo";
 choices[7][1] = "El tiempo que una tarea emplea usando los componentes del sistema";
 choices[7][2] = "El tiempo que una tarea espera para poder usar un recurso que est&aacute; siendo utilizado por otra";
 choices[7][3] = "La cantidad  de tiempo extra empleado en esperas";
 answers[7] = choices[7][0];
 units[7] = "53";
 comments[7] = "Id Pregunta: 777. ";


//  Id pregunta: 785 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;En qu&eacute; forma normal est&aacute; una tabla que no tiene grupos repetitivos,  en la que los atributos no principales dependan completamente de la clave principal, y dependan de otros atributos adem&aacute;s de la clave principal?:";
 choices[8]= new Array();
 choices[8][0] = "1FN";
 choices[8][1] = "2FN";
 choices[8][2] = "3FN";
 choices[8][3] = "Boyce-Cood";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 785. SS-A 2004";


//  Id pregunta: 1283 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Los servlets:";
 choices[9]= new Array();
 choices[9][0] = "Son componentes que extienden la funcionalidad de los servidores orientados a &ldquo;request/response&rdquo;";
 choices[9][1] = "Son a los servidores lo que los applets son a los navegadores  y sustituyen a los scripts CGI";
 choices[9][2] = "Pueden manejar concurrentemente varias peticiones a otros servlets y a otros servidores, lo cual los hace ideales para sistemas de conferencias online";
 choices[9][3] = "Todas las respuestas anteriores son correctas";
 answers[9] = choices[9][0];
 units[9] = "116";
 comments[9] = "Id Pregunta: 1283. ";


//  Id pregunta: 1317 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Respecto a los DTDs es falso que:";
 choices[10]= new Array();
 choices[10][0] = "est&aacute;n escritos en una sintaxis diferente de XML";
 choices[10][1] = "representan la &uacute;nica manera de definir un documento XML, y su ausencia implica que la definici&oacute;n del documento se saca del contexto";
 choices[10][2] = "no son obligatorios, y los documentos XML correctos pero sin DTD se denominan &quot;bien formados&quot;";
 choices[10][3] = "est&aacute;n muy extendidos y existen muchas herramientas y expertos en su utilizaci&oacute;n y desarrollo";
 answers[10] = choices[10][1];
 units[10] = "69";
 comments[10] = "Id Pregunta: 1317. ";


//  Id pregunta: 1333 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Se puede acceder directamente a la memoria principal del ordenador por varios m&eacute;todos. Entre ellos se encuentra:";
 choices[11]= new Array();
 choices[11][0] = "Bus multiplexado";
 choices[11][1] = "Robo de ciclo";
 choices[11][2] = "Memoria segmentada";
 choices[11][3] = "Accesos aleatorios";
 answers[11] = choices[11][1];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1333. ";


//  Id pregunta: 1413 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Una de las posibilidades clave de la estrategia .NET de Microsoft es el acceso remoto a objetos utilizando, entre otros protocolos, SOAP sobre HTTP. &iquest;Podr&iacute;a comentar qu&eacute; tecnolog&iacute;a de Microsoft, si bien no sobre HTTP, es la antecesora a .Net en este aspecto?:";
 choices[12]= new Array();
 choices[12][0] = "ODBC";
 choices[12][1] = "Visual Basic";
 choices[12][2] = "DCOM";
 choices[12][3] = "DNA";
 answers[12] = choices[12][2];
 units[12] = "59";
 comments[12] = "Id Pregunta: 1413. ";


//  Id pregunta: 1491 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;ntos niveles RAID est&aacute;ndar existen?:";
 choices[13]= new Array();
 choices[13][0] = "4";
 choices[13][1] = "5";
 choices[13][2] = "6";
 choices[13][3] = "7";
 answers[13] = choices[13][3];
 units[13] = "48";
 comments[13] = "Id Pregunta: 1491. ";


//  Id pregunta: 1596 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  En que tres bibliotecas esta basado GTK+";
 choices[14]= new Array();
 choices[14][0] = "Bonobo, Nautilus, ATK";
 choices[14][1] = "Gnome-db/libgda";
 choices[14][2] = "Glib, Pango, ATK";
 choices[14][3] = "BCEL, Log4j";
 answers[14] = choices[14][2];
 units[14] = "62";
 comments[14] = "Id Pregunta: 1596. ";


//  Id pregunta: 1607 Año de creación de pregunta: 2003-01-01
 questions[15]= "16)  La ejecuci&oacute;n desde otro lenguaje de programaci&oacute;n, de un procedimiento escrito en SQL, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "PL/SQL.";
 choices[15][1] = "JSQL.";
 choices[15][2] = "SQL embebido.";
 choices[15][3] = "SQL anfitri&oacute;n.";
 answers[15] = choices[15][2];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1607. Junta Andaluc&iacute;a";


//  Id pregunta: 1631 Año de creación de pregunta: 2003-01-01
 questions[16]= "17)  Un debugger (depurador) de programas :";
 choices[16]= new Array();
 choices[16][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[16][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[16][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[16][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[16] = choices[16][1];
 units[16] = "59";
 comments[16] = "Id Pregunta: 1631. ";


//  Id pregunta: 1675 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l NO es uno de los principios de Codd?";
 choices[17]= new Array();
 choices[17][0] = "Acceso garantizado";
 choices[17][1] = "Independencia f&iacute;sica de los datos";
 choices[17][2] = "Gesti&oacute;n de una BDR";
 choices[17][3] = "Actualizaci&oacute;n de tablas";
 answers[17] = choices[17][3];
 units[17] = "58";
 comments[17] = "Id Pregunta: 1675. ";


//  Id pregunta: 1856 Año de creación de pregunta: 2009-01-01
 questions[18]= "19)  Se&ntilde;ale la falsa:";
 choices[18]= new Array();
 choices[18][0] = "XML Encryption es un lenguaje cuya funci&oacute;n principal es asegurar la confidencialidad de partes de documentos XML a trav&eacute;s de la encriptaci&oacute;n parcial del documento transportado";
 choices[18][1] = "XML Encryption se puede aplicar a cualquier recurso Web, incluyendo contenido que no es XML.";
 choices[18][2] = "XML Encryption establece que es posible cifrar datos a distintos niveles de granularidad, desde elementos simples hasta documentos enteros";
 choices[18][3] = "Ninguna de las anteriores es correcta.";
 answers[18] = choices[18][3];
 units[18] = "72";
 comments[18] = "Id Pregunta: 1856. ";


//  Id pregunta: 1888 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  Se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[19]= new Array();
 choices[19][0] = "Una copia de seguridad diaria incluye todos los archivos seleccionados que se hayan modificado, desactivando el atributo de modificado";
 choices[19][1] = "Una copia de seguridad intermedia incluye todos los archivos pero no los marca individualmente como copiados (es decir, no desactiva el atributo de modificado)";
 choices[19][2] = "Una copia de seguridad diferencial s&oacute;lo copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][1];
 units[19] = "97";
 comments[19] = "Id Pregunta: 1888. ";


//  Id pregunta: 2103 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  La principal diferencia entre las bases de datos documentales respecto a las normales como pueden ser bases de datos relacionales es:";
 choices[20]= new Array();
 choices[20][0] = "Pueden crearse &iacute;ndices por cualquier campo que se desee";
 choices[20][1] = "Los indices se almacenan dentro de la base de datos";
 choices[20][2] = "Pueden crease indices de m&aacute;s de una palabra";
 choices[20][3] = "Indexaci&oacute;n de partes del contenido de un campo";
 answers[20] = choices[20][3];
 units[20] = "96";
 comments[20] = "Id Pregunta: 2103. ";


//  Id pregunta: 2199 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;En qu&eacute; consiste la teor&iacute;a del Modelo Compuesto aplicada a la implantaci&oacute;n de la Calidad propuesto por Lawler?";
 choices[21]= new Array();
 choices[21][0] = "El coste aumenta primero linealmente y luego exponencialmente";
 choices[21][1] = "En el primer tramo, el coste aumenta con la calidad del producto. En el segundo tramo, el coste es constante e independiente de la calidad.";
 choices[21][2] = "Se usa aritm&eacute;tica compuesta para su c&aacute;lculo, aunque la curva sale convexa siempre que se sigue este modelo.";
 choices[21][3] = "En el primer tramo, el coste disminuye con la calidad del producto. En el segundo tramo, el coste es constante e independiente de la calidad. En el tercer tramo el coste se incrementa con la calidad.";
 answers[21] = choices[21][3];
 units[21] = "88";
 comments[21] = "Id Pregunta: 2199. ";


//  Id pregunta: 2517 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;A qu&eacute; se denomina dentro de los lenguajes documentales 'silencios documentales'?:";
 choices[22]= new Array();
 choices[22][0] = "A la informaci&oacute;n excedente";
 choices[22][1] = "A la informaci&oacute;n no excedente";
 choices[22][2] = "A los datos solicitados pero no obtenidos por ruptura del proceso";
 choices[22][3] = "A los datos solicitados pero no obtenidos por distorsi&oacute;n del proceso";
 answers[22] = choices[22][3];
 units[22] = "96";
 comments[22] = "Id Pregunta: 2517. ";


//  Id pregunta: 2548 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Para evaluar diferentes sistemas de recuperaci&oacute;n de informaci&oacute;n, &iquest;qu&eacute; par&aacute;metros suelen analizarse?:";
 choices[23]= new Array();
 choices[23][0] = "&Iacute;ndice de retorno e &iacute;ndice de precisi&oacute;n";
 choices[23][1] = "&Iacute;ndice de estimaci&oacute;n cuantificable";
 choices[23][2] = "&Iacute;ndice de ajuste de material devuelto";
 choices[23][3] = "N&uacute;mero de referencias correctas";
 answers[23] = choices[23][0];
 units[23] = "96";
 comments[23] = "Id Pregunta: 2548. ";


//  Id pregunta: 2557 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  El programa IDABC:";
 choices[24]= new Array();
 choices[24][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[24][1] = "Contiene tres directivas";
 choices[24][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[24][3] = "Fue creado antes que el ENS";
 answers[24] = choices[24][0];
 units[24] = "30";
 comments[24] = "Id Pregunta: 2557. ";


//  Id pregunta: 2641 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  En el dise&ntilde;o Orientado a objetos,  &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[25]= new Array();
 choices[25][0] = "Una clase es la implantaci&oacute;n de un tipo de objeto.";
 choices[25][1] = "Las clases se representan mediante diagramas.";
 choices[25][2] = "Una clase especifica la estructura de datos y los m&eacute;todos operativos permitidos que se aplican a cada uno de sus objetos.";
 choices[25][3] = "Una clase especifica la estructura de datos de los objetos y las operaciones que se utilizan para tener acceso a los objetos.";
 answers[25] = choices[25][0];
 units[25] = "84";
 comments[25] = "Id Pregunta: 2641. ";


//  Id pregunta: 2698 Año de creación de pregunta: 2003-01-01
 questions[26]= "27)  M&eacute;todo de interpolaci&oacute;n en la correcci&oacute;n geom&eacute;trica:";
 choices[26]= new Array();
 choices[26][0] = "Vecino m&aacute;s pr&oacute;ximo.";
 choices[26][1] = "Bilineal.";
 choices[26][2] = "Bic&uacute;bica.";
 choices[26][3] = "Todos los anteriores.";
 answers[26] = choices[26][3];
 units[26] = "96";
 comments[26] = "Id Pregunta: 2698. ";


//  Id pregunta: 2772 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;En cu&aacute;l de los siguientes tipos se garantiza un mayor nivel de cohesi&oacute;n de un m&oacute;dulo de software?";
 choices[27]= new Array();
 choices[27][0] = "Cohesi&oacute;n de comunicaci&oacute;n.";
 choices[27][1] = "Cohesi&oacute;n temporal.";
 choices[27][2] = "Cohesi&oacute;n l&oacute;gica.";
 choices[27][3] = "Cohesi&oacute;n procedimental.";
 answers[27] = choices[27][0];
 units[27] = "84";
 comments[27] = "Id Pregunta: 2772. ";


//  Id pregunta: 2783 Año de creación de pregunta: 2006-01-01
 questions[28]= "29)  En M&Eacute;TRICA 3, la definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales se lleva a cabo en:";
 choices[28]= new Array();
 choices[28][0] = "La Planificaci&oacute;n de Sistemas.";
 choices[28][1] = "La Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[28][2] = "El Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[28][3] = "La Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 answers[28] = choices[28][1];
 units[28] = "86";
 comments[28] = "Id Pregunta: 2783. ";


//  Id pregunta: 2803 Año de creación de pregunta: 2006-01-01
 questions[29]= "30)  Elementos de un modelo de calidad del SW son:";
 choices[29]= new Array();
 choices[29][0] = "Procedimientos, criterios y m&eacute;tricas de calidad";
 choices[29][1] = "Sistema de calidad, factores y m&eacute;tricas";
 choices[29][2] = "Factores y criterios de calidad";
 choices[29][3] = "Factores, criterios y m&eacute;tricas";
 answers[29] = choices[29][3];
 units[29] = "87";
 comments[29] = "Id Pregunta: 2803. ";


//  Id pregunta: 2825 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  Sobre el M&Eacute;TODO DE JONES se puede decir...";
 choices[30]= new Array();
 choices[30][0] = "Jones utiliza el Rect&aacute;ngulo de Probabilidades para calcular el coste m&aacute;ximo y m&iacute;nimo del mantenimiento (en el caso menos favorable y en el m&aacute;s favorable), e indica que el coste estimado cae dentro del Rect&aacute;ngulo de Probabilidades.";
 choices[30][1] = "Una desventaja de las unidades de costo es que todos los gastos asociados al mantenimiento no se pueden expresar en la misma unidad. ";
 choices[30][2] = "Se estima el n&uacute;mero de unidades programables que hay que mantener y se calcula el n&uacute;mero de personas requeridas para gestionar el mismo bas&aacute;ndose en datos hist&oacute;ricos de proyectos anteriores y en la experiencia.";
 choices[30][3] = "Se basa en el Tr&aacute;fico de Cambio Anual&quot; de Boehm.";
 answers[30] = choices[30][0];
 units[30] = "90";
 comments[30] = "Id Pregunta: 2825. ";


//  Id pregunta: 2896 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de MAGERIT?:";
 choices[31]= new Array();
 choices[31][0] = "MAGERIT es un &oacute;rgano especializado del CSAE para establecer la pol&iacute;tica de seguridad de los sistemas de informaci&oacute;n en las Administraciones P&uacute;blicas";
 choices[31][1] = "MAGERIT es una metodolog&iacute;a para an&aacute;lisis y gesti&oacute;n de riesgos de los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas";
 choices[31][2] = "MAGERIT defiende que la seguridad debe ser independiente del medio";
 choices[31][3] = "El objetivo de MAGERIT es conseguir la confianza en la utilizaci&oacute;n de t&eacute;cnicas inform&aacute;ticas y telem&aacute;ticas";
 answers[31] = choices[31][0];
 units[31] = "33";
 comments[31] = "Id Pregunta: 2896. ";


//  Id pregunta: 3598 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  La direcci&oacute;n IPv4 172.30.20.20:";
 choices[32]= new Array();
 choices[32][0] = "Es una direcci&oacute;n privada";
 choices[32][1] = "Es una direcci&oacute;n p&uacute;blica";
 choices[32][2] = "Es una direcci&oacute;n de clase C";
 choices[32][3] = "Es una direcci&oacute;n de clase D";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3598. ";


//  Id pregunta: 3788 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Respecto a las normas internacionales de conmutaci&oacute;n de paquetes, es cierto que:";
 choices[33]= new Array();
 choices[33][0] = "X.75 especifica la interfaz entre DTE y DCE para terminales en modo paquete ";
 choices[33][1] = "X.29 es similar a X.28 pero para terminales de tecnolog&iacute;a posterior";
 choices[33][2] = "X.28 especifica el interfaz DTE-DCE para terminales de datos arr&iacute;tmicos";
 choices[33][3] = "X.28 especifica los procedimientos de control para circuitos internacionales";
 answers[33] = choices[33][2];
 units[33] = "103";
 comments[33] = "Id Pregunta: 3788. ";


//  Id pregunta: 3789 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Respecto a las VPN o redes privadas virtuales a trav&eacute;s de internet se puede decir:";
 choices[34]= new Array();
 choices[34][0] = "que son m&aacute;s flexibles pero requieren un mayor mantenimiento";
 choices[34][1] = "que se ahorran costes pero su rendimiento es menor";
 choices[34][2] = "que se usa una infraestructura compartida pero garantizando la calidad de servicio";
 choices[34][3] = "todo lo anterior es correcto";
 answers[34] = choices[34][1];
 units[34] = "107";
 comments[34] = "Id Pregunta: 3789. ";


//  Id pregunta: 3908 Año de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Qu&eacute; es el realce geometrico en tratamiento de im&aacute;genes?";
 choices[35]= new Array();
 choices[35][0] = "Modificaci&oacute;n del tono de un pixel en funci&oacute;n de los de alrededor";
 choices[35][1] = "Un ajuste utilizando el m&eacute;todo polinomial";
 choices[35][2] = "La modificaci&oacute;n y ecualizaci&oacute;n del contraste de una imagen";
 choices[35][3] = "Modificaci&oacute;n del tono de gris de una imagen";
 answers[35] = choices[35][0];
 units[35] = "93";
 comments[35] = "Id Pregunta: 3908. ";


//  Id pregunta: 3922 Año de creación de pregunta: 2003-01-01
 questions[36]= "37)  Un documento multimedia se define como:";
 choices[36]= new Array();
 choices[36][0] = "Compuestos de audio y v&iacute;deo.";
 choices[36][1] = "Compuestos de se&ntilde;ales ni digitales ni digitalizadas.";
 choices[36][2] = "Compuestos de diferentes fuentes y estructuras que incorpora documentos digitales o digitalizados.";
 choices[36][3] = "Compuestos de diferentes fuentes y estructuras que incorpora no s&oacute;lo documentos digitales o digitalizados, sino tambi&eacute;n a los procedentes de otros tipos de se&ntilde;ales.";
 answers[36] = choices[36][3];
 units[36] = "93";
 comments[36] = "Id Pregunta: 3922. ";


//  Id pregunta: 3961 Año de creación de pregunta: 2003-01-01
 questions[37]= "38)  Mediante qu&eacute; tecnolog&iacute;a se puede conectar un PC a sus perif&eacute;ricos de forma inal&aacute;mbrica";
 choices[37]= new Array();
 choices[37][0] = "IMODE";
 choices[37][1] = "OFDM";
 choices[37][2] = "BLUETOOTH";
 choices[37][3] = " WIFI";
 answers[37] = choices[37][2];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3961. ";


//  Id pregunta: 4006 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  En el protocolo de correo electr&oacute;nico SMTP, el formato de las cabeceras sigue el est&aacute;ndar RFC-822. Indique cu&aacute;l es la notaci&oacute;n empleada en la escritura de las cabeceras de acuerdo con dicho est&aacute;ndar RFC-822:";
 choices[38]= new Array();
 choices[38][0] = "ASCII";
 choices[38][1] = "ASN.1";
 choices[38][2] = "Base 64";
 choices[38][3] = "BNF";
 answers[38] = choices[38][3];
 units[38] = "106";
 comments[38] = "Id Pregunta: 4006. ";


//  Id pregunta: 4015 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  De las siguientes tecnolog&iacute;as xDSL, &iquest;cu&aacute;l de ellas puede ser asim&eacute;trica?";
 choices[39]= new Array();
 choices[39][0] = "HDSL";
 choices[39][1] = "SDSL";
 choices[39][2] = "VDSL";
 choices[39][3] = "SHDSL";
 answers[39] = choices[39][2];
 units[39] = "107";
 comments[39] = "Id Pregunta: 4015. ";


//  Id pregunta: 4133 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  Las im&aacute;genes se utilizan para";
 choices[40]= new Array();
 choices[40][0] = "El plataformado de equipos";
 choices[40][1] = "almacenar datos antiguos para asegurar la compatibilidad";
 choices[40][2] = "la realizaci&oacute;n de un backup t&iacute;pico";
 choices[40][3] = "todas las anteriores";
 answers[40] = choices[40][0];
 units[40] = "97";
 comments[40] = "Id Pregunta: 4133. ";


//  Id pregunta: 4151 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  El sistema de gesti&oacute;n de la seguridad que autoriza el acceso de usuarios a recursos en entorno OS/390 se llama";
 choices[41]= new Array();
 choices[41][0] = "ACF2";
 choices[41][1] = "RACF";
 choices[41][2] = "RADIUS";
 choices[41][3] = "CICS";
 answers[41] = choices[41][1];
 units[41] = "111";
 comments[41] = "Id Pregunta: 4151. ";


//  Id pregunta: 4202 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  ADSL2+";
 choices[42]= new Array();
 choices[42][0] = "Soporta una distancia m&aacute;xima de 3,6Km. mayor que VDSL";
 choices[42][1] = "Utiliza frecuencias hasta 2.2 MHz.";
 choices[42][2] = "A la m&aacute;xima distancia tiene un ancho de bajada m&aacute;ximo de 4Mbps";
 choices[42][3] = "Todas las anteriores son correctas";
 answers[42] = choices[42][3];
 units[42] = "107";
 comments[42] = "Id Pregunta: 4202. ";


//  Id pregunta: 4327 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  Entre los objetivos a conseguir por el Administrador de una Base de Datos, no se encuentra...";
 choices[43]= new Array();
 choices[43][0] = "Mantener la disponibilidad de los datos (procedimientos de recuperaci&oacute;n de la Base de Datos da&ntilde;ada).";
 choices[43][1] = "Garantizar el mantenimiento (asegurando que no se produce ning&uacute;n tipo de cambio en el Sistema de Base de Datos).";
 choices[43][2] = "Mantener la seguridad de los datos (proteger la Base de Datos de usos mal intencionados o no autorizados).";
 choices[43][3] = "Garantizar la integridad de los datos (mantener la consistencia de la Base de Datos).";
 answers[43] = choices[43][1];
 units[43] = "26";
 comments[43] = "Id Pregunta: 4327. ";


//  Id pregunta: 4403 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes es una de las cinco categor&iacute;as identificadas como recursos TIC por COBIT?";
 choices[44]= new Array();
 choices[44][0] = "La calidad.";
 choices[44][1] = "La planificaci&oacute;n.";
 choices[44][2] = "La tecnolog&iacute;a.";
 choices[44][3] = "Los est&aacute;ndares.";
 answers[44] = choices[44][2];
 units[44] = "98";
 comments[44] = "Id Pregunta: 4403. ";


//  Id pregunta: 4417 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes no es una desventaja del cable coaxial frente a otros medios de transmisi&oacute;n";
 choices[45]= new Array();
 choices[45][0] = "Diafon&iacute;a.";
 choices[45][1] = "Ruido t&eacute;rmico.";
 choices[45][2] = "Ruido de intermodulaci&oacute;n.";
 choices[45][3] = "Atenuaci&oacute;n";
 answers[45] = choices[45][0];
 units[45] = "99";
 comments[45] = "Id Pregunta: 4417. ";


//  Id pregunta: 4439 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  Se&ntilde;ale la que no sea una de las t&eacute;cnicas especificas para el an&aacute;lisis de riesgos que establece MAGERIT.";
 choices[46]= new Array();
 choices[46][0] = "An&aacute;lisis de procesos.";
 choices[46][1] = "An&aacute;lisis mediante tablas.";
 choices[46][2] = "An&aacute;lisis algor&iacute;tmico.";
 choices[46][3] = "&Aacute;rboles de ataque.";
 answers[46] = choices[46][0];
 units[46] = "33";
 comments[46] = "Id Pregunta: 4439. ";


//  Id pregunta: 4522 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  En el modelo de Ciclo de vida en cascada pura, &iquest;que sucede si Ia revisi&oacute;n del paso a Ia siguiente etapa del proyecto no es satisfactoria?";
 choices[47]= new Array();
 choices[47][0] = "Se continua con Ia etapa siguiente.";
 choices[47][1] = "Se retrocede a Ia etapa anterior.";
 choices[47][2] = "Se permanece en la etapa actual hasta que este preparada.";
 choices[47][3] = "Se comienza otra vez con Ia primera etapa.";
 answers[47] = choices[47][2];
 units[47] = "76";
 comments[47] = "Id Pregunta: 4522. ";


//  Id pregunta: 4679 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Defina Throughput:";
 choices[48]= new Array();
 choices[48][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido entrabajos por hora o transacciones por segundo)";
 choices[48][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 choices[48][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajospor hora o transacciones por segundo)";
 choices[48][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 answers[48] = choices[48][0];
 units[48] = "89";
 comments[48] = "Id Pregunta: 4679. Examen 2006 JCYL";


//  Id pregunta: 4720 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son:";
 choices[49]= new Array();
 choices[49][0] = "Eficiencia y fiabilidad";
 choices[49][1] = "Fiabilidad y modularidad";
 choices[49][2] = "Fiabilidad y extensibilidad";
 choices[49][3] = "Correcci&oacute;n y verificabilidad";
 answers[49] = choices[49][1];
 units[49] = "88";
 comments[49] = "Id Pregunta: 4720. Examen 2006 JCYL";


//  Id pregunta: 4770 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Si Alice quiere transmitir un documento cifrado (sin autentcaci&oacute;n) hacia Bob utilizando un algoritmo de clave asim&eacute;trica";
 choices[50]= new Array();
 choices[50][0] = "Debe cifrarlo con la clave p&uacute;blica de Bob";
 choices[50][1] = "Debe cifrarlo con la clave privada de Bob";
 choices[50][2] = "Debe cifrarlo con la clave privada de Alice";
 choices[50][3] = "Debe cifrarlo con la clave p&uacute;blica de Alice";
 answers[50] = choices[50][0];
 units[50] = "74";
 comments[50] = "Id Pregunta: 4770. ";


//  Id pregunta: 4811 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[51]= new Array();
 choices[51][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[51][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[51][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[51][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[51] = choices[51][0];
 units[51] = "68";
 comments[51] = "Id Pregunta: 4811. ";


//  Id pregunta: 5018 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[52]= new Array();
 choices[52][0] = "De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet";
 choices[52][1] = "Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet";
 choices[52][2] = "Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree)";
 choices[52][3] = "De la especificaci&oacute;n 1000Base-T";
 answers[52] = choices[52][1];
 units[52] = "101";
 comments[52] = "Id Pregunta: 5018. Examen TIC A 2007";


//  Id pregunta: 5040 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;En cu&aacute;l de los siguientes modelos para el desarrollo de aplicaciones distribuidas o en red seg&uacute;n el modelo cliente/servidor,esta encuadrado COM+ (Common Object Model Plus)?:";
 choices[53]= new Array();
 choices[53][0] = "Modelos basados en llamadas a funciones (sockets)";
 choices[53][1] = "Modelos basados en llamadas a procedimientos remotos (RPC)";
 choices[53][2] = "Modelos basados en llamadas a objetos distribuidos";
 choices[53][3] = "Modelos basados en agentes m&oacute;viles";
 answers[53] = choices[53][2];
 units[53] = "50";
 comments[53] = "Id Pregunta: 5040. Examen TIC A 2007";


//  Id pregunta: 5245 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Un Plan de sistemas de Informaci&oacute;n y Comunicaciones se elabora (se&ntilde;ale la falsa):";
 choices[54]= new Array();
 choices[54][0] = "Se elabora a partir de los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[54][1] = "Se recogen las necesidades y requerimientos de los usuarios, en base a procesos de negocio";
 choices[54][2] = "No implica necesariamente el liderazgo del equipo directivo para su &eacute;xito";
 choices[54][3] = "Se valoran los escenarios tecnol&oacute;gicos que aporten el menor riesgo, la mayor protecci&oacute;n de inversiones y los m&aacute;ximos beneficios";
 answers[54] = choices[54][2];
 units[54] = "77";
 comments[54] = "Id Pregunta: 5245. ";


//  Id pregunta: 5559 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  En base al TRLPI (RD 1/1996) y las modificaciones introducidas por la Ley 23/2006:";
 choices[55]= new Array();
 choices[55][0] = "La copia privada se entiende como un derecho de los usuarios.";
 choices[55][1] = "Este derecho de copia privada da lugar al establecimiento de una remuneraci&oacute;n compensatoria para los autores.";
 choices[55][2] = "Dicha remuneraci&oacute;n compensatoria aplica tambi&eacute;n a los programas de ordenador y bases de datos.";
 choices[55][3] = "El canon aplicado a los equipos de reproducci&oacute;n digitales deber&aacute; revisarse cada 2 a&ntilde;os.";
 answers[55] = choices[55][3];
 units[55] = "37";
 comments[55] = "Id Pregunta: 5559. ";


//  Id pregunta: 5593 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes entidades no est&aacute; sometida al RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[56]= new Array();
 choices[56][0] = "Entidades Locales";
 choices[56][1] = "Fundaciones p&uacute;blicas";
 choices[56][2] = "Mutuas de Accidentes de Trabajo y Enfermedades Profesionales de la Seguridad Social";
 choices[56][3] = "Todas las entidades anteriores est&aacute;n sometidas al RD Legislativo 3/2011.";
 answers[56] = choices[56][3];
 units[56] = "41";
 comments[56] = "Id Pregunta: 5593. ";


//  Id pregunta: 5735 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes no corresponde a una interfase del modelo de referencia de workflow de WfMC?:";
 choices[57]= new Array();
 choices[57][0] = "Herramientas de definici&oacute;n de procesos";
 choices[57][1] = "Funciones de representaci&oacute;n";
 choices[57][2] = "Herramientas de administraci&oacute;n y monitorizaci&oacute;n";
 choices[57][3] = "Aplicaciones invocadas";
 answers[57] = choices[57][1];
 units[57] = "71";
 comments[57] = "Id Pregunta: 5735. ";


//  Id pregunta: 5757 Año de creación de pregunta: 2001-01-01
 questions[58]= "59)  Los objetivos generales que debe cumplir el Plan de Sistemas de Informaci&oacute;n y Comunicaciones son:";
 choices[58]= new Array();
 choices[58][0] = " Establecer pol&iacute;ticas y objetivos coherentes";
 choices[58][1] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n y as&iacute; como definir los requerimientos t&eacute;cnicos necesarios y suficientes ";
 choices[58][2] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resulta-dos esperados, etc";
 choices[58][3] = "Todas las anteriores";
 answers[58] = choices[58][3];
 units[58] = "77";
 comments[58] = "Id Pregunta: 5757. ";


//  Id pregunta: 5793 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  De acuerdo con la Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, se&ntilde;ale cu&aacute;l de las siguientes definiciones es FALSA:";
 choices[59]= new Array();
 choices[59][0] = "Actuaci&oacute;n administrativa automatizada: Actuaci&oacute;n administrativa producida por un Sistema de informaci&oacute;n adecuadamente programado sin necesidad de intervenci&oacute;n de una persona f&iacute;sica en cada caso singular. Incluye la producci&oacute;n de actos de tr&aacute;mite o resolutorios de procedimientos, as&iacute; como de meros actos de comunicaci&oacute;n.";
 choices[59][1] = "Aplicaci&oacute;n: Programa o conjunto de programas cuyo objeto es la resoluci&oacute;n de un problema mediante el uso de inform&aacute;tica.";
 choices[59][2] = "Aplicaci&oacute;n de fuentes abiertas: Aquella que se distribuye con una licencia que permite la libertad de ejecutarla, de conocer el c&oacute;digo fuente, de modificarla o mejorarla y de redistribuir copias a otros";
 choices[59][3] = "Autenticaci&oacute;n: Capacidad de los sistemas de informaci&oacute;n, y por ende de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 answers[59] = choices[59][3];
 units[59] = "43";
 comments[59] = "Id Pregunta: 5793. MAP 2008 A2";


//  Id pregunta: 5834 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[60]= new Array();
 choices[60][0] = "Strategy.";
 choices[60][1] = "State.";
 choices[60][2] = "Observer.";
 choices[60][3] = "Command.";
 answers[60] = choices[60][2];
 units[60] = "84";
 comments[60] = "Id Pregunta: 5834. MAP 2008 A1";


//  Id pregunta: 5906 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[61]= new Array();
 choices[61][0] = "Un determinado virus inform&aacute;tico";
 choices[61][1] = "Difusi&oacute;n masiva de noticias falsas";
 choices[61][2] = "Suplantaci&oacute;n fraudulenta que intentan conseguir informaci&oacute;n valiosa";
 choices[61][3] = "Reenv&iacute;o de mensajes a mucha gente";
 answers[61] = choices[61][2];
 units[61] = "111";
 comments[61] = "Id Pregunta: 5906. MAP 2008 A1";


//  Id pregunta: 5926 Año de creación de pregunta: 2009-01-01
 questions[62]= "63)  Para aumentar las posibilidades de interacci&oacute;n con la Web, se promueven tecnolog&iacute;as como JavaScript, applets, ActiveX,..., de entre las afirmaciones siguientes, &iquest;cu&aacute;l se refiere a los &quot;applets de Java&quot;?:";
 choices[62]= new Array();
 choices[62][0] = "Son programas residentes en el servidor, que se ejecutan en el mismo bajo solicitud de un cliente, para recoger o enviar alg&uacute;n tipo de informaci&oacute;n especial del cliente";
 choices[62][1] = "Son programas que se ejecutan bajo el entorno Java del navegador, en un espacio de memoria aparte, llamado &quot;Sandbox&quot;";
 choices[62][2] = "Son trozos de c&oacute;digo que se a&ntilde;aden a los browsers para obtener nuevos servicios y cuya fiabilidad queda garantizada por la obligatoriedad del uso de la tecnologia &quot;authenticode&quot;";
 choices[62][3] = "La forma de controlar la fiabilidad y seguridad de esta tecnolog&iacute;a consiste &uacute;nicamente en el sistema de verificaci&oacute;n digital y de firmas electr&oacute;nicas";
 answers[62] = choices[62][1];
 units[62] = "60";
 comments[62] = "Id Pregunta: 5926. MAP 2008 A1";


//  Id pregunta: 5950 Año de creación de pregunta: 2009-01-01
 questions[63]= "64)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[63]= new Array();
 choices[63][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[63][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[63][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[63][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[63] = choices[63][0];
 units[63] = "118";
 comments[63] = "Id Pregunta: 5950. ";


//  Id pregunta: 6057 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes utilidades NO se corresponde con software de c&oacute;digo abierto?";
 choices[64]= new Array();
 choices[64][0] = "Thunderbird.";
 choices[64][1] = "Adobe Reader.";
 choices[64][2] = "OpenOffice.";
 choices[64][3] = "Firefox.";
 answers[64] = choices[64][1];
 units[64] = "62";
 comments[64] = "Id Pregunta: 6057. TIC A 2009";


//  Id pregunta: 6123 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[65]= new Array();
 choices[65][0] = "Todos.";
 choices[65][1] = "Ninguno";
 choices[65][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[65][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[65] = choices[65][2];
 units[65] = "30";
 comments[65] = "Id Pregunta: 6123. TIC A 2009";


//  Id pregunta: 6318 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Si decimos que las filas de una tabla est&aacute;n ordenadas en alguna secuencia   f&iacute;sica, independiente de cualquier ordenamiento que pueda imponerse a la tabla mediante &iacute;ndices, estamos refiri&eacute;ndonos a un sistema de base de datos:";
 choices[66]= new Array();
 choices[66][0] = "Orientado a objetos";
 choices[66][1] = "Relacional";
 choices[66][2] = "De lista invertida";
 choices[66][3] = "Jer&aacute;rquica";
 answers[66] = choices[66][2];
 units[66] = "58";
 comments[66] = "Id Pregunta: 6318. ";


//  Id pregunta: 6447 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;C&oacute;mo se denomina cada una de las particiones l&oacute;gicas de una Storage &Aacute;rea Network?";
 choices[67]= new Array();
 choices[67][0] = "LUN";
 choices[67][1] = "HBA";
 choices[67][2] = "Cl&uacute;ster";
 choices[67][3] = "Usci";
 answers[67] = choices[67][0];
 units[67] = "48";
 comments[67] = "Id Pregunta: 6447. Castilla La Mancha 2009";


//  Id pregunta: 6504 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  El proyecto POSIX est&aacute; auspiciado por:";
 choices[68]= new Array();
 choices[68][0] = "ISO";
 choices[68][1] = "IEEE";
 choices[68][2] = "GNU";
 choices[68][3] = "Berkley University";
 answers[68] = choices[68][1];
 units[68] = "53";
 comments[68] = "Id Pregunta: 6504. ";


//  Id pregunta: 6514 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  GNOME es el acr&oacute;nimo de:";
 choices[69]= new Array();
 choices[69][0] = "GNU Network Object Model Environment";
 choices[69][1] = "General Network Object Model Environment";
 choices[69][2] = "GIMP Network Object Model Environment";
 choices[69][3] = "GNOME Network Object Model Environment";
 answers[69] = choices[69][0];
 units[69] = "54";
 comments[69] = "Id Pregunta: 6514. ";


//  Id pregunta: 7799 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   En el &aacute;mbito de las tarjetas con chip integrado, &iquest;cu&aacute;l es el apartado de la norma ISO 7816 que recoge las especificaciones el&eacute;ctricas y los protocolos de comunicaci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = " ISO 7816.";
 choices[70][1] = " ISO 7816.";
 choices[70][2] = " ISO 7816-3.";
 choices[70][3] = " ISO 7816-4.";
 answers[70] = choices[70][2];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7799. Map 2005";


//  Id pregunta: 7904 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   El marco COBIT (Control Objectives for Information and related Technology) es una herramienta de gobierno de las TIC. En su marco de control, que identifica los requisitos de negocio, el proceso de &laquo;Gesti&oacute;n de la Calidad&raquo; se encuentra definido en el dominio de:";
 choices[71]= new Array();
 choices[71][0] = " Planificaci&oacute;n y organizaci&oacute;n.";
 choices[71][1] = " Adquisici&oacute;n e implementaci&oacute;n.";
 choices[71][2] = " Servicio y soporte.";
 choices[71][3] = " Monitorizaci&oacute;n.";
 answers[71] = choices[71][0];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7904. Map 2006";


//  Id pregunta: 7918 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   El software utilizado para controlar una fotocopiadora avanzada requiere 32.000 l&iacute;neas de c&oacute;digo C y 4.200 l&iacute;neas de c&oacute;digo en un lenguaje especializado de Cuarta Generaci&oacute;n (4GL). Teniendo en cuenta que en los lenguajes 4GL se cumple que el ratio LDC/PF (L&iacute;neas de C&oacute;digo/Puntos de Funci&oacute;n) es 20 y en el c&oacute;digo C el ratio es 128 LDC/PF, &iquest;cu&aacute;l es el n&uacute;mero de puntos de funci&oacute;n del software de gesti&oacute;n de la fotocopiadora?";
 choices[72]= new Array();
 choices[72][0] = " 148.";
 choices[72][1] = " 250.";
 choices[72][2] = " 460.";
 choices[72][3] = " 210.";
 answers[72] = choices[72][2];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7918. Map 2006";


//  Id pregunta: 7960 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   Dentro de un sistema de cableado estructurado el denominado &laquo;subsistema horizontal&raquo; es aquel que:";
 choices[73]= new Array();
 choices[73][0] = " Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta.";
 choices[73][1] = " Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta.";
 choices[73][2] = " Interconecta edificios en el entorno de un campus.";
 choices[73][3] = " Interconecta a todo el cableado de un edificio.";
 answers[73] = choices[73][1];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7960. Map 2006";


//  Id pregunta: 7999 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   Bluetooth es un enlace radio de corto alcance sin cables con un radio de:";
 choices[74]= new Array();
 choices[74][0] = " Hasta 5 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz.";
 choices[74][1] = " Hasta 10 metros y un rango de frecuencia de 2,202 GHz a 2,404 GHz.";
 choices[74][2] = " Hasta 10 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz.";
 choices[74][3] = " Hasta 8 metros y un rango de frecuencia de 1,404 GHz a 2,480 GHz.";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7999. Map 2007";


//  Id pregunta: 8065 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   Seg&uacute;n el RD 589/2005, indique el alcance que han de tener los Planes Estrat&eacute;gicos Departamentales en materia de Tecnolog&iacute;as de la Informaci&oacute;n y Administraci&oacute;n Electr&oacute;nica:";
 choices[75]= new Array();
 choices[75][0] = " Al menos 4 a&ntilde;os.";
 choices[75][1] = " Al menos 2 a&ntilde;os.";
 choices[75][2] = " Al menos 5 a&ntilde;os.";
 choices[75][3] = " Al menos 3 a&ntilde;os.";
 answers[75] = choices[75][1];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 8065. Map 2008";


//  Id pregunta: 8649 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  Seg&uacute;n M&eacute;trica v3. &iquest;cu&aacute;l de las siguientes listas esta correctamente ordenada de mayor a menor acoplamiento?";
 choices[76]= new Array();
 choices[76][0] = "De contenido, com&uacute;n, de control, externo, de datos.";
 choices[76][1] = "De datos, de marca, externo, de control, com&uacute;n, de contenido";
 choices[76][2] = "De datos, de marca, de control, externo, com&uacute;n, de contenido";
 choices[76][3] = "De contenido, com&uacute;n, externo, de marca, de datos";
 answers[76] = choices[76][3];
 units[76] = "86";
 comments[76] = "Id Pregunta: 8649. Examen TIC A2 2010 interna";


//  Id pregunta: 8678 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[77]= new Array();
 choices[77][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[77][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[77][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[77][3] = "No";
 answers[77] = choices[77][0];
 units[77] = "102";
 comments[77] = "Id Pregunta: 8678. Examen UPM A2 2011";


//  Id pregunta: 8799 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[78]= new Array();
 choices[78][0] = "CLRUN";
 choices[78][1] = "CLRNET";
 choices[78][2] = "COLR";
 choices[78][3] = "CLR";
 answers[78] = choices[78][3];
 units[78] = "59, 115";
 comments[78] = "Id Pregunta: 8799. Examen UPM A2 2011";


//  Id pregunta: 8897 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la directiva europea vigente relativa al tratamiento de los datos personales?";
 choices[79]= new Array();
 choices[79][0] = "Directiva 95/46/CE";
 choices[79][1] = "Directiva 2006/24/CE";
 choices[79][2] = "Directiva 2002/58/CE";
 choices[79][3] = "Directiva 97/66/CE";
 answers[79] = choices[79][0];
 units[79] = "29";
 comments[79] = "Id Pregunta: 8897. ";


//  Id pregunta: 8995 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  El protocolo SSL (Secure Sockets Layer)";
 choices[80]= new Array();
 choices[80][0] = "Proporciona conexiones seguras s&oacute;lo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[80][1] = "No garantiza la integridad de la informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[80][2] = "Es una capa de seguridad que opera siempre sobre protocolo UDP.";
 choices[80][3] = "Proporciona conexiones seguras sobre una red insegura garantizando la integridad de los datos transmitidos, privacidad de la conexi&oacute;n y autentificaci&oacute;n del cliente y servidor.";
 answers[80] = choices[80][3];
 units[80] = "111";
 comments[80] = "Id Pregunta: 8995. Examen UPM A2 2011";


//  Id pregunta: 9010 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;A qu&eacute; autoridad nacional de regulaci&oacute;n de las recogidas en la Ley 9/2014,  de 9 de mayo, General de Telecomunicaciones, puede reclamar un usuario final de servicios de comunicaciones en caso de disputa con su operador?";
 choices[81]= new Array();
 choices[81][0] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[81][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[81][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[81][3] = "El Ministerio de Econom&iacute;a";
 answers[81] = choices[81][1];
 units[81] = "110";
 comments[81] = "Id Pregunta: 9010. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9132 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; es un bus de expansion (I/O)?";
 choices[82]= new Array();
 choices[82][0] = "Conjunto de l&iacute;neas de comunicaci&oacute;n encargado de llevar el bus de datos, el bus de direcci&oacute;n y el de control a la tarjeta de interfaz (Entrada/Salida) que se agrega a la tarjeta principal.";
 choices[82][1] = "Vincula a todos los componentes de la CPU";
 choices[82][2] = "Son l&iacute;neas de comunicaci&oacute;n por donde circulan los datos externos e internos del microprocesador.";
 choices[82][3] = "l&iacute;neas de comunicaci&oacute;n por donde viaja la informaci&oacute;n espec&iacute;fica sobre la localizaci&oacute;n de la direcci&oacute;n de memoria de datos o dispositivo al que se hace referencia";
 answers[82] = choices[82][0];
 units[82] = "47";
 comments[82] = "Id Pregunta: 9132. ";


//  Id pregunta: 9158 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  NO se encuentra entre las iniciativas de IMS:";
 choices[83]= new Array();
 choices[83][0] = "Empaquetado de metadatos";
 choices[83][1] = "Interoperabilidad de preguntas y tests";
 choices[83][2] = "Empaquetado de informaci&oacute;n del alumno";
 choices[83][3] = "Empaquetado de contenidos";
 answers[83] = choices[83][0];
 units[83] = "66";
 comments[83] = "Id Pregunta: 9158. ";


//  Id pregunta: 9286 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre el Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[84]= new Array();
 choices[84][0] = "Es un &oacute;rgano colegiado. ";
 choices[84][1] = "Supervisa la actividad del Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[84][2] = "Coordina la actuaci&oacute;n administrativa en el &aacute;mbito de las TIC y dirige las contrataciones.";
 choices[84][3] = "Difunde est&aacute;ndares, como M&eacute;trica, Sicres o Magerit. ";
 answers[84] = choices[84][1];
 units[84] = "41";
 comments[84] = "Id Pregunta: 9286. ";


//  Id pregunta: 9318 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Se&ntilde;ale la afirmaci&oacute;n verdadera";
 choices[85]= new Array();
 choices[85][0] = "El modelo organizativo en el que los auditores forman parte de los &oacute;rganos de control de la organizaci&oacute;n permite una mayor independencia";
 choices[85][1] = "El modelo organizativo en el que los auditores se integran dentro de los propios centros inform&aacute;ticos permite una mayor independencia";
 choices[85][2] = "El modelo organizativo en el que los auditores se integran dentro de los propios centros inform&aacute;ticos ofrece una implicaci&oacute;n m&aacute;s directa en las tareas destinadas a mejorar la calidad";
 choices[85][3] = "La a) y la c) son correctas";
 answers[85] = choices[85][3];
 units[85] = "31";
 comments[85] = "Id Pregunta: 9318. ";


//  Id pregunta: 9383 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n con 4G:";
 choices[86]= new Array();
 choices[86][0] = "Admite la utilizaci&oacute;n de antenas MIMO";
 choices[86][1] = "Para el servicio de voz utiliza el canal VOL, cuyo acceso se negocia previamente a trav&eacute;s del canal VOL-ALLOC";
 choices[86][2] = "Utiliza modulaciones adaptativas para el aprovechamiento &oacute;ptimo del canal.";
 choices[86][3] = "Utiliza multiplexaci&oacute;n estad&iacute;stica en el dominio de la frecuencia.";
 answers[86] = choices[86][1];
 units[86] = "108";
 comments[86] = "Id Pregunta: 9383. ";


//  Id pregunta: 9410 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  Cu&aacute;l de las siguientes no es una funci&oacute;n de car&aacute;cter esencialmente estrat&eacute;gico en las organizaciones TIC?";
 choices[87]= new Array();
 choices[87][0] = "Definici&oacute;n de pol&iacute;ticas de seguridad";
 choices[87][1] = "Definici&oacute;n de la arquitectura TIC";
 choices[87][2] = "Definici&oacute;n de la estrategia TIC";
 choices[87][3] = "Oficina de gesti&oacute;n de proyectos";
 answers[87] = choices[87][3];
 units[87] = "26";
 comments[87] = "Id Pregunta: 9410. ";


//  Id pregunta: 9425 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Si tuviese que fijar los l&iacute;mites de exposici&oacute;n en un nivel adecuado para la salud a la hora de instalar una antena, &iquest;Qu&eacute; normativa ser&iacute;a la de referencia?";
 choices[88]= new Array();
 choices[88][0] = "Real Decreto 1066/2001";
 choices[88][1] = "Ley 9/2014 General de Telecomunicaciones";
 choices[88][2] = "Ley 56/2007,de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[88][3] = "Real Decreto 899/2009";
 answers[88] = choices[88][0];
 units[88] = "110";
 comments[88] = "Id Pregunta: 9425. ";


//  Id pregunta: 9583 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[89]= new Array();
 choices[89][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[89][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[89][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[89][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[89] = choices[89][1];
 units[89] = "43, 74";
 comments[89] = "Id Pregunta: 9583. Examen TIC A1 2011";


//  Id pregunta: 9657 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Qu&eacute; lenguaje de programaci&oacute;n tiene una mayor correspondencia entre L&iacute;neas de C&oacute;digo (LDC) y Puntos de Funci&oacute;n?";
 choices[90]= new Array();
 choices[90][0] = "C";
 choices[90][1] = "Ensamblador";
 choices[90][2] = "Cobol";
 choices[90][3] = "Pascal";
 answers[90] = choices[90][1];
 units[90] = "89";
 comments[90] = "Id Pregunta: 9657. Ensamblador 320 LDC/PF, C 150 LDC/PF, Cobol 106 LDC/PF, Pascal 91 LDC/PF. Fuente: ASTIC";


//  Id pregunta: 9671 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Los sistemas multicomputador pueden dividirse, seg&uacute;n la taxonom&iacute;a de Flynn en:";
 choices[91]= new Array();
 choices[91][0] = "SISD, SIMD, MISD y MIMD.";
 choices[91][1] = "UMA y NUMA.";
 choices[91][2] = "MMC y MMD.";
 choices[91][3] = "Ninguna de las anteriores.";
 answers[91] = choices[91][3];
 units[91] = "45";
 comments[91] = "Id Pregunta: 9671. ";


//  Id pregunta: 9754 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  La tarea de especificaci&oacute;n de necesidades de Migraci&oacute;n en M&eacute;trica v3 se tiene en cuenta en la actividad:";
 choices[92]= new Array();
 choices[92][0] = "Elaboraci&oacute;n del modelo de datos en ASI";
 choices[92][1] = "Dise&ntilde;o de clases en DSI";
 choices[92][2] = "Dise&ntilde;o de la Migraci&oacute;n y carga inicial de datos en DSI";
 choices[92][3] = "A y B son correctas";
 answers[92] = choices[92][3];
 units[92] = "86";
 comments[92] = "Id Pregunta: 9754. Ambas actividades tienen una tarea llamada &quot;Especificaci&oacute;n de necesidades de Migraci&oacute;n y Carga inicial de datos&quot;";


//  Id pregunta: 9757 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  En M&eacute;trica v3, la Especificaci&oacute;n del Plan de pruebas de Regresi&oacute;n se realiza en:";
 choices[93]= new Array();
 choices[93][0] = "ASI";
 choices[93][1] = "DSI";
 choices[93][2] = "CSI";
 choices[93][3] = "MSI";
 answers[93] = choices[93][3];
 units[93] = "86";
 comments[93] = "Id Pregunta: 9757. MSI.3 &quot;Preparaci&oacute;n de la implementaci&oacute;n de la modificaci&oacute;n&quot; incluye una tarea &quot;Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n&quot;";


//  Id pregunta: 10065 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  SAFER (Secure And Fast Encryption Routine) es un algoritmo de cifrado:";
 choices[94]= new Array();
 choices[94][0] = "Sim&eacute;trico de bloques.";
 choices[94][1] = "Sim&eacute;trico de flujo.";
 choices[94][2] = "Asim&eacute;trico de factorizaci&oacute;n entera.";
 choices[94][3] = "Asim&eacute;trico de logaritmo discreto.";
 answers[94] = choices[94][0];
 units[94] = "72";
 comments[94] = "Id Pregunta: 10065. TIC A2, libre, Examen 2013";


//  Id pregunta: 10073 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Sobre LTE (Long Term Evolution) es cierto que:";
 choices[95]= new Array();
 choices[95][0] = "Se conoce comercialmente como Generaci&oacute;n 3.0 G.";
 choices[95][1] = "Utiliza multiplexaci&oacute;n OFDM (Orthogonal frequency-division multiplexing) en el enlace descendente.";
 choices[95][2] = "Abandona el uso de antenas MIMO de la generaci&oacute;n anterior.";
 choices[95][3] = "Es un est&aacute;ndar norteamericano incompatible en Europa.";
 answers[95] = choices[95][1];
 units[95] = "107";
 comments[95] = "Id Pregunta: 10073. TIC A2, libre, Examen 2013";


//  Id pregunta: 10097 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  De acuerdo a M&eacute;trica v.3, la pr&aacute;ctica JAD disitngue distinto perfiles. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[96]= new Array();
 choices[96][0] = "Moderador (l&iacute;der Jad)";
 choices[96][1] = "Desarrolladores";
 choices[96][2] = "Usuarios";
 choices[96][3] = "Analistas";
 answers[96] = choices[96][3];
 units[96] = "78";
 comments[96] = "Id Pregunta: 10097. ";


//  Id pregunta: 10304 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Indicar cu&aacute;l de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):";
 choices[97]= new Array();
 choices[97][0] = "Modo de respuesta normal (NRM, Normal Response Mode).";
 choices[97][1] = "Modo balanceado as&iacute;ncrono (ABM, Asynchronous Balanced Mode).";
 choices[97][2] = "Modo de respuesta as&iacute;ncrono (ARM, Asynchronous Response Mode).";
 choices[97][3] = "Modo balanceado s&iacute;ncrono (SBM, Synchronous Balanced Mode).";
 answers[97] = choices[97][3];
 units[97] = "100";
 comments[97] = "Id Pregunta: 10304. TIC A2, libre, examen 2013";


//  Id pregunta: 10346 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Qu&eacute; nombre recibe la tecnolog&iacute;a de Gesti&oacute;n de derechos digitales creada por la compa&ntilde;&iacute;a Apple?";
 choices[98]= new Array();
 choices[98][0] = "FairPlay";
 choices[98][1] = "Apple Verisign";
 choices[98][2] = "Apple DRM";
 choices[98][3] = "Apple Store DRM";
 answers[98] = choices[98][0];
 units[98] = "37";
 comments[98] = "Id Pregunta: 10346. Se usa desde la tienda online iTunes Store para ser reproducido en iPod e iTunes";


//  Id pregunta: 10447 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)   Indique la opci&oacute;n verdadera.";
 choices[99]= new Array();
 choices[99][0] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E1 proporciona 4 Mbps.";
 choices[99][1] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E3 proporciona 32 Mbps.";
 choices[99][2] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 140 Mbps.";
 choices[99][3] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 155 Mbps. ";
 answers[99] = choices[99][3];
 units[99] = "103";
 comments[99] = "Id Pregunta: 10447. Examen TIC A1 2013";


