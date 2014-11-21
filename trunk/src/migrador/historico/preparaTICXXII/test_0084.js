/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 10 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l es la decisi&oacute;n del Consejo de las Comunidades Europeas que fija la pol&iacute;tica comunitaria sobre las compras p&uacute;blicas en el sector de la tecnolog&iacute;a de la informaci&oacute;n y de las comunicaciones?:";
 choices[0]= new Array();
 choices[0][0] = "Decisi&oacute;n 87-95-CEE";
 choices[0][1] = "Decreto 88-91-CEE";
 choices[0][2] = "Decreto 88-90-CEE";
 choices[0][3] = "Decisi&oacute;n 91-88-CEE";
 answers[0] = choices[0][0];
 units[0] = "40";
 comments[0] = "Id Pregunta: 10. ";


//  Id pregunta: 112 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  De  acuerdo a la Decisi&oacute;n  87/95/CEE del Consejo de las CC.EE., &iquest;en qu&eacute; circunstancias excepcionales el sector p&uacute;blico puede adquirir bienes y servicios relativos al campo de las TIC utilizando especificaciones no normalizadas?:";
 choices[1]= new Array();
 choices[1][0] = "Continuidad de funcionamiento";
 choices[1][1] = "Innovaci&oacute;n";
 choices[1][2] = "Coste excesivo";
 choices[1][3] = "Todas las anteriores";
 answers[1] = choices[1][3];
 units[1] = "40";
 comments[1] = "Id Pregunta: 112. ";


//  Id pregunta: 260 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Hay muchas organizaciones diferentes de normalizaci&oacute;n, pero una de las siguientes no est&aacute; entre ellas. &iquest;Cu&aacute;l?:";
 choices[2]= new Array();
 choices[2][0] = "ISO ";
 choices[2][1] = "ANSI  ";
 choices[2][2] = "CEPT";
 choices[2][3] = "OSI";
 answers[2] = choices[2][3];
 units[2] = "42";
 comments[2] = "Id Pregunta: 260. ";


//  Id pregunta: 354 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Las actuales teor&iacute;as del conflicto en las organizaciones parten de:";
 choices[3]= new Array();
 choices[3][0] = "Peter Drucker";
 choices[3][1] = "Mary Parker Follet";
 choices[3][2] = "John Simpson";
 choices[3][3] = "Adam Smith";
 answers[3] = choices[3][1];
 units[3] = "22";
 comments[3] = "Id Pregunta: 354. ";


//  Id pregunta: 569 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  Qu&eacute; se entiende como conocimiento t&aacute;cito";
 choices[4]= new Array();
 choices[4][0] = "Es un tipo de conocimiento formalizado, necesario para realizar una correcta &quot;gesti&oacute;n del conocimiento&quot; en las organizaciones";
 choices[4][1] = "Es el conocimiento objetivo y racional que puede ser expresado en palabras, oraciones, n&uacute;meros o f&oacute;rmulas, en general independiente de contexto alguno";
 choices[4][2] = "Es conocimiento altamente personal y f&iacute;cilmente transferible o comunicable. ";
 choices[4][3] = "Es aquel que se encuentra en la mente de las personas producto de la experiencia, la sabidur&iacute;a, la creatividad";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 569. ";


//  Id pregunta: 699 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[5]= new Array();
 choices[5][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura.";
 choices[5][1] = "Ofrece la m&aacute;xima seguridad de los datos almacenados.";
 choices[5][2] = "Ofrece cierta seguridad y buena velocidad en lectura.";
 choices[5][3] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas.";
 answers[5] = choices[5][3];
 units[5] = "48";
 comments[5] = "Id Pregunta: 699. ";


//  Id pregunta: 724 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  En la evoluci&oacute;n del Sistema Operativo Unix, a partir de los a&ntilde;os 70, surgieron diferentes variantes. &iquest;Cu&aacute;l de los siguientes sistemas no se corresponde con una de esas variantes?";
 choices[6]= new Array();
 choices[6][0] = "BSD";
 choices[6][1] = "MULTICS";
 choices[6][2] = "XENIX";
 choices[6][3] = "Sun OS";
 answers[6] = choices[6][1];
 units[6] = "53";
 comments[6] = "Id Pregunta: 724. Examen TIC MAP B 2004";


//  Id pregunta: 881 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l es el sistema de mensajer&iacute;a t&iacute;pico de los sistemas Unix?:";
 choices[7]= new Array();
 choices[7][0] = "Exchange";
 choices[7][1] = "Sendmail";
 choices[7][2] = "Memo";
 choices[7][3] = "Groupwise";
 answers[7] = choices[7][1];
 units[7] = "53";
 comments[7] = "Id Pregunta: 881. ";


//  Id pregunta: 924 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es JDBC?:";
 choices[8]= new Array();
 choices[8][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[8][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[8][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[8][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[8] = choices[8][1];
 units[8] = "60";
 comments[8] = "Id Pregunta: 924. ";


//  Id pregunta: 968 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Cuando en las entidades descritas en el modelo de datos existe una dependencia funcional de los atributos de todos los atributos que componen la clave, se dice que el modelo est&aacute; normalizado:";
 choices[9]= new Array();
 choices[9][0] = "En segunda forma normal";
 choices[9][1] = "En primera forma normal";
 choices[9][2] = "En tercera forma normal";
 choices[9][3] = "En cuarta forma normal";
 answers[9] = choices[9][0];
 units[9] = "58";
 comments[9] = "Id Pregunta: 968. ";


//  Id pregunta: 976 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  De acuerdo al modelo vectorial, &iquest;cu&aacute;l de los siguientes datos no se representa en un sistema de informaci&oacute;n geogr&aacute;fica?:";
 choices[10]= new Array();
 choices[10][0] = "Arcos circulares.";
 choices[10][1] = "Pol&iacute;gonos.";
 choices[10][2] = "L&iacute;neas.";
 choices[10][3] = "Matrices de celdas.";
 answers[10] = choices[10][3];
 units[10] = "67";
 comments[10] = "Id Pregunta: 976. ";


//  Id pregunta: 1098 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  En inteligencia artificial un marco es:";
 choices[11]= new Array();
 choices[11][0] = "La representaci&oacute;n del conocimiento basada en teor&iacute;a de grafos";
 choices[11][1] = "Un elemento de representaci&oacute;n que contiene, entre otros elementos, ranuras de informaci&oacute;n y punteros";
 choices[11][2] = "El mecanismo de razonamiento m&aacute;s utilizado a la hora de equiparar elementos de conocimiento";
 choices[11][3] = "El objeto formado por el encapsulamiento de reglas deductivas y hechos";
 answers[11] = choices[11][1];
 units[11] = "64";
 comments[11] = "Id Pregunta: 1098. ";


//  Id pregunta: 1246 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  La tercera generaci&oacute;n de la inform&aacute;tica se caracteriza por:";
 choices[12]= new Array();
 choices[12][0] = "El uso de transistores";
 choices[12][1] = "Uso de microprocesadores";
 choices[12][2] = "El uso de los circuitos SSI";
 choices[12][3] = "El uso de v&aacute;lvulas de vacio";
 answers[12] = choices[12][2];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1246. ";


//  Id pregunta: 1302 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Para saber en Unix los ficheros que cuelgan de un directorio se utiliza el comando:";
 choices[13]= new Array();
 choices[13][0] = "ldir";
 choices[13][1] = "ls";
 choices[13][2] = "pwd";
 choices[13][3] = "ps";
 answers[13] = choices[13][1];
 units[13] = "52,53";
 comments[13] = "Id Pregunta: 1302. ";


//  Id pregunta: 1727 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  Cu&aacute;l de los siguientes gestores de ventanas utiliza GNOME por defecto";
 choices[14]= new Array();
 choices[14][0] = "GNOME es tambi&eacute;n un gestor de ventanas";
 choices[14][1] = "Puede utilizar cualquiera, pero por defecto es KDE";
 choices[14][2] = "A partir de la versi&oacute;n GNOME 3.0 es Mutter";
 choices[14][3] = "X11 es el gestor por defecto";
 answers[14] = choices[14][2];
 units[14] = "54";
 comments[14] = "Id Pregunta: 1727. ";


//  Id pregunta: 1786 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  Los m&eacute;todos de busca heur&iacute;stica&hellip;";
 choices[15]= new Array();
 choices[15][0] = "Nunca encuentran la soluci&oacute;n &oacute;ptima";
 choices[15][1] = "Dan con la soluci&oacute;n &oacute;ptima en menos tiempo";
 choices[15][2] = "Dan con la soluci&oacute;n &oacute;ptima pero pueden ser m&aacute;s lentos que otros m&eacute;todos";
 choices[15][3] = "Permiten encontrar una buena soluci&oacute;n r&aacute;pidamente pero puede no ser la &oacute;ptima";
 answers[15] = choices[15][3];
 units[15] = "63";
 comments[15] = "Id Pregunta: 1786. ";


//  Id pregunta: 1800 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  En el campo de los sistemas expertos, se&ntilde;ale de las siguientes opciones aquella que enumere sistemas que utilicen representaci&oacute;n param&eacute;trica:";
 choices[16]= new Array();
 choices[16][0] = "Redes neuronales; representaci&oacute;n por marcos; sistemas basados en restricciones";
 choices[16][1] = "Algoritmos gen&eacute;ticos; redes neuronales y redes sem&aacute;nticas";
 choices[16][2] = "Redes neuronales, redes sem&aacute;nticas, y sistemas basados en marcos";
 choices[16][3] = "Redes neuronales y el perceptr&oacute;n";
 answers[16] = choices[16][3];
 units[16] = "64";
 comments[16] = "Id Pregunta: 1800. ";


//  Id pregunta: 1896 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  En la protecci&oacute;n de contrase&ntilde;as, la cadena aleatoria de datos usada para modificar el hash de contrase&ntilde;a se llama";
 choices[17]= new Array();
 choices[17][0] = "sal";
 choices[17][1] = "dongle";
 choices[17][2] = "semilla";
 choices[17][3] = "marca de agua";
 answers[17] = choices[17][0];
 units[17] = "74";
 comments[17] = "Id Pregunta: 1896. ";


//  Id pregunta: 2040 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  El conjunto de actividades que es necesario realizar para asegurar que el producto software responde a las necesidades expresadas por el usuario se denomina:";
 choices[18]= new Array();
 choices[18][0] = "Control de calidad";
 choices[18][1] = "Modelo de calidad";
 choices[18][2] = "Garant&iacute;a de calidad";
 choices[18][3] = "Plan General de Calidad";
 answers[18] = choices[18][2];
 units[18] = "92";
 comments[18] = "Id Pregunta: 2040. ";


//  Id pregunta: 2077 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Para la estimaci&oacute;n del esfuerzo necesario y dimensionamiento de proyectos de desarrollo de sistemas, &iquest;qu&eacute; opciones viables aparecen?:";
 choices[19]= new Array();
 choices[19][0] = "Modelos basados en t&eacute;cnicas de descomposici&oacute;n y modelos de estimaci&oacute;n emp&iacute;ricos";
 choices[19][1] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos de punto de funci&oacute;n";
 choices[19][2] = "Modelos basados en t&eacute;cnicas de planificaci&oacute;n y control de proyectos y modelos de planificaci&oacute;n temporal";
 choices[19][3] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos emp&iacute;ricos";
 answers[19] = choices[19][1];
 units[19] = "89";
 comments[19] = "Id Pregunta: 2077. ";


//  Id pregunta: 2198 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;En qu&eacute; consiste la teor&iacute;a de la Productividad aplicada a la implantaci&oacute;n de la calidad?:";
 choices[20]= new Array();
 choices[20][0] = "Un producto de calidad es m&aacute;s caro de producir";
 choices[20][1] = "Un producto de calidad es m&aacute;s dif&iacute;cil de producir";
 choices[20][2] = "Un producto de calidad es m&aacute;s r&aacute;pido de producir";
 choices[20][3] = "Un producto de calidad es m&aacute;s barato de producir";
 answers[20] = choices[20][3];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2198. ";


//  Id pregunta: 2384 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  Indicar cu&aacute;l es una regla de construcci&oacute;n de un proceso dentro de un Diagrama de Flujo de Datos:";
 choices[21]= new Array();
 choices[21][0] = "Los procesos transforman los flujos de datos de entrada en flujos de salida de datos";
 choices[21][1] = "Se puede transformar un dato en varios mediante un proceso";
 choices[21][2] = "Se necesita siempre un proceso entre una entidad externa y un almac&eacute;n de datos";
 choices[21][3] = "Todas las anteriores son reglas de construcci&oacute;n de un proceso";
 answers[21] = choices[21][3];
 units[21] = "81";
 comments[21] = "Id Pregunta: 2384. ";


//  Id pregunta: 2656 Año de creación de pregunta: 2003-01-01
 questions[22]= "23)  Relativo a las clases en OO, cuando dos subtipos se unen para crear una clase superior, se produce:";
 choices[22]= new Array();
 choices[22][0] = "Asociaci&oacute;n";
 choices[22][1] = "Agrupaci&oacute;n";
 choices[22][2] = "Agregaci&oacute;n";
 choices[22][3] = "Generalizaci&oacute;n";
 answers[22] = choices[22][3];
 units[22] = "82";
 comments[22] = "Id Pregunta: 2656. ";


//  Id pregunta: 2754 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Cual de los siguientes no es una caracteristica del Proceso unificado de desarrollo de software";
 choices[23]= new Array();
 choices[23][0] = "Es iterativo e incremental";
 choices[23][1] = "El dise&ntilde;o comienza siempre al terminar el an&aacute;lisis.";
 choices[23][2] = "Est&aacute; dirigido por los casos de uso";
 choices[23][3] = "Est&aacute; dirigido por la arquitectura.";
 answers[23] = choices[23][1];
 units[23] = "82";
 comments[23] = "Id Pregunta: 2754. ";


//  Id pregunta: 2757 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  En el an&aacute;lisis orientado a objetos, una clase que no tenga instancias se denomina:";
 choices[24]= new Array();
 choices[24][0] = "No puede darse";
 choices[24][1] = "Clase padre";
 choices[24][2] = "Subclase";
 choices[24][3] = "Clase abstracta";
 answers[24] = choices[24][3];
 units[24] = "82";
 comments[24] = "Id Pregunta: 2757. ";


//  Id pregunta: 2837 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  En el modelo EFQM el atributo de calidad que recibe mayor ponderaci&oacute;n es";
 choices[25]= new Array();
 choices[25][0] = "Satisfacci&oacute;n del cliente";
 choices[25][1] = "Resultado del Negocio";
 choices[25][2] = "Liderazgo";
 choices[25][3] = "Gesti&oacute;n del Personal";
 answers[25] = choices[25][0];
 units[25] = "92";
 comments[25] = "Id Pregunta: 2837. ";


//  Id pregunta: 2968 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  El componente de servidor J2EE de uso m&aacute;s apropiado para mantener una conversaci&oacute;n con un cliente es un EJB del tipo ...";
 choices[26]= new Array();
 choices[26][0] = "Stateless Session Bean";
 choices[26][1] = "Message Driven Bean";
 choices[26][2] = "Entity Bean con persistencia BMP";
 choices[26][3] = "Stateful Session Bean";
 answers[26] = choices[26][3];
 units[26] = "116";
 comments[26] = "Id Pregunta: 2968. ";


//  Id pregunta: 3142 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[27]= new Array();
 choices[27][0] = "El tama&ntilde;o m&aacute;ximo del mensaje a transmitir entre aplicaci&oacute;n origen y destino, depende del tama&ntilde;o m&aacute;ximo del paquete, que viene impuesto por la red";
 choices[27][1] = "No se puede establecer dos circuitos virtuales simult&aacute;neos entere un mismo origen y un mismo destino, ya que la red no podr&iacute;a coordinar dos n&uacute;meros de canal l&oacute;gico con un mismo destino";
 choices[27][2] = "Siempre que se reduzca el tama&ntilde;o de los paquetes, el rendimiento (bytes de informaci&oacute;n transmitidos por unidad de tiempo) disminuir&aacute;, ya que se env&iacute;an los mismo bytes de cabecera, para menos bytes de informaci&oacute;n";
 choices[27][3] = "Todas las respuestas anteriores son falsas ";
 answers[27] = choices[27][2];
 units[27] = "101";
 comments[27] = "Id Pregunta: 3142. ";


//  Id pregunta: 3496 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  En el modelado de tr&aacute;fico basado en LIFO se usan los siguientes modelos:";
 choices[28]= new Array();
 choices[28][0] = "M/M/1.";
 choices[28][1] = "M/M/1/1.";
 choices[28][2] = "M/G/1.";
 choices[28][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[28] = choices[28][3];
 units[28] = "";
 comments[28] = "Id Pregunta: 3496. *: LIFO";


//  Id pregunta: 3501 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  En el modelo de referencia OSI, una comunicaci&oacute;n entre dos capas se denomina confirmada, si hay:";
 choices[29]= new Array();
 choices[29][0] = "Una petici&oacute;n y una respuesta";
 choices[29][1] = "Una petici&oacute;n, una respuesta y una confirmaci&oacute;n";
 choices[29][2] = "Una petici&oacute;n, una indicaci&oacute;n, una respuesta y una confirmaci&oacute;n";
 choices[29][3] = "Todas las anteriores son incompletas";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3501. ";


//  Id pregunta: 3572 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  En una comunicaci&oacute;n v&iacute;a radio entre el m&oacute;vil y la estaci&oacute;n base:";
 choices[30]= new Array();
 choices[30][0] = "El enlace ascendente es del m&oacute;vil a la estaci&oacute;n base";
 choices[30][1] = "El enlace descendente es de la estaci&oacute;n base al m&oacute;vil";
 choices[30][2] = "Las 2 respuestas anteriores son correctas";
 choices[30][3] = "Las respuestas 'a'y 'b' son incorrectas";
 answers[30] = choices[30][2];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3572. ";


//  Id pregunta: 3595 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  La direcci&oacute;n de un socket se conforma con:";
 choices[31]= new Array();
 choices[31][0] = "La direcci&oacute;n IP del host y el modo de acceso";
 choices[31][1] = "La direcci&oacute;n IP del host y la direcci&oacute;n de un puerto local";
 choices[31][2] = "La URL del host";
 choices[31][3] = "La URL del host y el modo de acceso";
 answers[31] = choices[31][1];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3595. ";


//  Id pregunta: 3646 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  La tecnolog&iacute;a de red de &aacute;rea local 10Base-T:";
 choices[32]= new Array();
 choices[32][0] = "Requiere cableado coaxial delgado";
 choices[32][1] = "Requiere cableado de pares trenzados de categor&iacute;a 5 como m&iacute;nimo";
 choices[32][2] = "Cumple el est&aacute;ndar IEEE 802.3";
 choices[32][3] = "Son ciertas las respuestas 'b' y 'c'";
 answers[32] = choices[32][2];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3646. ";


//  Id pregunta: 3696 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Las direcciones IPv6 tienen una longitud de:";
 choices[33]= new Array();
 choices[33][0] = "32 bits";
 choices[33][1] = "128 bits";
 choices[33][2] = "64 bits";
 choices[33][3] = "48 bits";
 answers[33] = choices[33][1];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3696. ";


//  Id pregunta: 3827 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Se&ntilde;ale la respuesta falsa respecto a los protocolos de gesti&oacute;n de red:";
 choices[34]= new Array();
 choices[34][0] = "El modelo de gesti&oacute;n OSI utiliza una base de informaci&oacute;n de gesti&oacute;n o MIB para almacenar la informaci&oacute;n estructurada que representa a los elementos de la red y sus atributos";
 choices[34][1] = "La estructura de informaci&oacute;n se denomina SMI (Estructura de informaci&oacute;n de Gestion) para estas estructuras el modelo OSI define un Sistema muy complejo de gesti&oacute;n orientado a objetos";
 choices[34][2] = "Con la especificaci&oacute;n SNMP versi&oacute;n 1 (Protocolo sencillo de gesti&oacute;n de red) no se puede comprobar el origen de un mensaje ni su autenficaci&oacute;n, lo que le hace vulnerable a ataques para modificar la configuraci&oacute;n de red";
 choices[34][3] = "SNMPv2 y SNMP son variantes de SMTP";
 answers[34] = choices[34][3];
 units[34] = "104";
 comments[34] = "Id Pregunta: 3827. ";


//  Id pregunta: 3870 Año de creación de pregunta: 2004-01-01
 questions[35]= "36)  Qu&eacute; es falso respecto a XHTML";
 choices[35]= new Array();
 choices[35][0] = "Obliga a anidar las etiquetas adecuadamente";
 choices[35][1] = "Se adapta mejor a los navegadores m&aacute;s avanzados";
 choices[35][2] = "Obliga a encerrar entre comillas los valores de los atributos";
 choices[35][3] = "Cada documento tiene que especificar su tipo";
 answers[35] = choices[35][1];
 units[35] = "113";
 comments[35] = "Id Pregunta: 3870. Tanenbaum";


//  Id pregunta: 4315 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  En el Sistema operativo UN&Iacute;X la expresi&oacute;n que identifica la cuenta del &ldquo;superusuario&rdquo; (que puede llevar a cabo todas las facetas de la administraci&oacute;n de sistemas) es&hellip;";
 choices[36]= new Array();
 choices[36][0] = "Usuario daemon.";
 choices[36][1] = "Usuario adm.";
 choices[36][2] = "Usuario bin.";
 choices[36][3] = "Usuario root.";
 answers[36] = choices[36][3];
 units[36] = "55";
 comments[36] = "Id Pregunta: 4315. ";


//  Id pregunta: 4368 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  Indique cu&aacute;l de las siguientes no es una caracter&iacute;stica de los sistemas cliente-servidor:";
 choices[37]= new Array();
 choices[37][0] = "Compartici&oacute;n de recursos.";
 choices[37][1] = "Existe un &uacute;nico sistema de almacenamiento compartido, donde reside toda la informaci&oacute;n importante del sistema.";
 choices[37][2] = "Concurrencia.";
 choices[37][3] = "Interoperabilidad.";
 answers[37] = choices[37][1];
 units[37] = "50";
 comments[37] = "Id Pregunta: 4368. ";


//  Id pregunta: 4369 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  Cu&aacute;l de las siguientes afirmaciones sobre la tecnolog&iacute;a de acceso a bases de datos ADO.NET no es correcta?";
 choices[38]= new Array();
 choices[38][0] = "El modelo de objetos ADO.NET provee una estructura de acceso a distintos or&iacute;genes de datos. Tiene 2 componentes principales: El Dataset y el proveedor de Datos .NET";
 choices[38][1] = "ADO.NET utiliza XML como formato para transmitir datos desde y hacia su base de datos y su aplicaci&oacute;n Web.";
 choices[38][2] = "ADO.NET es un conjunto de clases que se utiliza para acceder y manipular or&iacute;genes de datos como por ejemplo, una base de datos de SQL Server o una planilla Excel.";
 choices[38][3] = "ADO.NET utiliza un modelo de acceso pensando para entornos permanentemente conectados. Esto quiere decir que la aplicaci&oacute;n y el origen de datos deben estar en comunicaci&oacute;n permanente.";
 answers[38] = choices[38][3];
 units[38] = "59";
 comments[38] = "Id Pregunta: 4369. ";


//  Id pregunta: 4410 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  Los requisitos que debe cumplir un sistema para evitar que sus errores de funcionamiento tengan consecuencias en las personas o equipos, se denominan requisitos de:";
 choices[39]= new Array();
 choices[39][0] = "Fiabilidad.";
 choices[39][1] = "Operaci&oacute;n.";
 choices[39][2] = "Salvaguarda.";
 choices[39][3] = "Verificaci&oacute;n.";
 answers[39] = choices[39][0];
 units[39] = "88";
 comments[39] = "Id Pregunta: 4410. ";


//  Id pregunta: 4461 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  Es un est&aacute;ndar de e-learning: ";
 choices[40]= new Array();
 choices[40][0] = "IEEE";
 choices[40][1] = "ADL";
 choices[40][2] = "LMS";
 choices[40][3] = "SCORM";
 answers[40] = choices[40][3];
 units[40] = "66";
 comments[40] = "Id Pregunta: 4461. ";


//  Id pregunta: 4703 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque &hellip;";
 choices[41]= new Array();
 choices[41][0] = "el lenguaje Java se deriva de C++.";
 choices[41][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[41][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[41][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin.";
 answers[41] = choices[41][1];
 units[41] = "60";
 comments[41] = "Id Pregunta: 4703. Examen 2006 JCYL";


//  Id pregunta: 4739 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  La refactorizaci&oacute;n consiste en:";
 choices[42]= new Array();
 choices[42][0] = "Mejorar el c&oacute;digo fuente.";
 choices[42][1] = "Mejorar el dise&ntilde;o de una aplicaci&oacute;n.";
 choices[42][2] = "Mejorar el mantenimiento del c&oacute;digo fuente.";
 choices[42][3] = "Todas las respuestas anteriores son correctas.";
 answers[42] = choices[42][3];
 units[42] = "91";
 comments[42] = "Id Pregunta: 4739. Examen 2006 JCYL";


//  Id pregunta: 4925 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  En M&eacute;trica 3, entre los productos finales obtenidos del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n (PSI) NO se incluye:";
 choices[43]= new Array();
 choices[43][0] = "La arquitectura de informaci&oacute;n.";
 choices[43][1] = "La arquitectura tecnol&oacute;gica.";
 choices[43][2] = "El modelo de sistemas de informaci&oacute;n.";
 choices[43][3] = "El an&aacute;lisis del sistema de informaci&oacute;n.";
 answers[43] = choices[43][3];
 units[43] = "86";
 comments[43] = "Id Pregunta: 4925. Examen TIC B 2007";


//  Id pregunta: 5030 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  Los sistemas de almacenes de bases de datos pueden implementarse utilizando diferentes tipos de esquemas f&iacute;sicos : ROLAP, MOLAP, HOLAP,etc. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[44]= new Array();
 choices[44][0] = "En ROLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales.";
 choices[44][1] = "Ejemplos de sistemas MOLAP son: Informix Metacube u Oracle Discover.";
 choices[44][2] = "Ejemplos de sistema ROLAP son: Oracle Express o el Hyperion Enterprise.";
 choices[44][3] = "En MOLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales, produci&eacute;ndose correspondencia entre el nivel l&oacute;gico y el nivel f&iacute;sico lo que en general aporta especializaci&oacute;n que se traduce generalmente en mayor eficiencia.";
 answers[44] = choices[44][3];
 units[44] = "68";
 comments[44] = "Id Pregunta: 5030. Examen TIC A 2007";


//  Id pregunta: 5136 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;En qu&eacute; modelo de ciclo de vida cada ciclo comienza identificando los objetivos, las alternativas y las restricciones del ciclo?";
 choices[45]= new Array();
 choices[45][0] = "Modelo incremental.";
 choices[45][1] = "Modelo en espiral.";
 choices[45][2] = "Modelo en cascada.";
 choices[45][3] = "Modelo fuente.";
 answers[45] = choices[45][1];
 units[45] = "76";
 comments[45] = "Id Pregunta: 5136. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5137 Año de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Qu&eacute; es un diagrama de Gantt?";
 choices[46]= new Array();
 choices[46][0] = "Es un diagrama de barras en forma de tabla donde se hace una referencia cruzada entre las tareas y los tiempos de duraci&oacute;n de las mismas.";
 choices[46][1] = "Es un cuadro o tabla formado por dos columnas, en la primera se se&ntilde;alan las actividades y en la segunda se indican las fechas de finalizaci&oacute;n.";
 choices[46][2] = "Partiendo de la descomposici&oacute;n de un proyecto en actividades, estas ocurren entre dos sucesos. Se representa mediante un grafo en donde las actividades se reflejan mediante arcos y los sucesos mediante v&eacute;rtices.";
 choices[46][3] = "Es una matriz de referencias cruzadas entre los miembros del equipo de proyecto y su dedicaci&oacute;n al proyecto.";
 answers[46] = choices[46][0];
 units[46] = "77";
 comments[46] = "Id Pregunta: 5137. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5164 Año de creación de pregunta: 2003-01-01
 questions[47]= "48)  Seg&uacute;n el Plan T&eacute;cnico Nacional de la Radiodifusi&oacute;n Sonora Digital Terrenal, cada bloque de frecuencias (de 1,536 MHz) integrar&aacute;:";
 choices[47]= new Array();
 choices[47][0] = "Al menos cuatro programas diferentes";
 choices[47][1] = "Un &uacute;nico programa";
 choices[47][2] = "Tantos programas diferentes como estime el concesionario";
 choices[47][3] = "Al menos seis programas diferentes";
 answers[47] = choices[47][3];
 units[47] = "105";
 comments[47] = "Id Pregunta: 5164. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5171 Año de creación de pregunta: 2003-01-01
 questions[48]= "49)  Las VPN's utilizan mecanismos basados en t&uacute;neles para:";
 choices[48]= new Array();
 choices[48][0] = "Habilitar la navegaci&oacute;n por Internet.";
 choices[48][1] = "Encapsular paquetes de un protocolo dentro de otros paquetes pudiendo acomodar as&iacute; protocolos incompatibles.";
 choices[48][2] = "Efectuar una tarificaci&oacute;n a la corporaci&oacute;n que habilita acceso VPN";
 choices[48][3] = "Deshabilitar la seguridad del acceso VPN una vez autenticado el cliente VPN.";
 answers[48] = choices[48][1];
 units[48] = "111";
 comments[48] = "Id Pregunta: 5171. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5424 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados acontinuaci&oacute;n no corresponde a dicha arquitectura";
 choices[49]= new Array();
 choices[49][0] = "Esquema externo";
 choices[49][1] = "Esquema legal";
 choices[49][2] = "Esquema conceptual";
 choices[49][3] = "Esquema interno";
 answers[49] = choices[49][1];
 units[49] = "57";
 comments[49] = "Id Pregunta: 5424. Castilla y Le&oacute;n";


//  Id pregunta: 5516 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indique cu&aacute;l de los siguientes es un framework de c&oacute;digo abierto que se ocupa de la capa de persistencia entre la l&oacute;gica de negocio y la base de datos: ";
 choices[50]= new Array();
 choices[50][0] = "iBATIS";
 choices[50][1] = "JAVA SERVER FACES";
 choices[50][2] = "TAPESTRY";
 choices[50][3] = "STRUTS";
 answers[50] = choices[50][0];
 units[50] = "116";
 comments[50] = "Id Pregunta: 5516. ";


//  Id pregunta: 5546 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos:";
 choices[51]= new Array();
 choices[51][0] = "Establece que la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n se har&aacute; de forma que no conlleve la existencia de restricciones o discriminaciones para los ciudadanos que se relacionen con las Administraciones P&uacute;blicas por medios no electr&oacute;nicos.";
 choices[51][1] = "Permite la obtenci&oacute;n de copias electr&oacute;nicas de los documentos electr&oacute;nicos de cualquier expediente electr&oacute;nico, sin restricci&oacute;n alguna.";
 choices[51][2] = "Crea la figura del Defensor del Usuario de la Administraci&oacute;n Electr&oacute;nica, encargado de inspeccionar la actuaci&oacute;n v&iacute;a medios electr&oacute;nicos, de las Administraciones P&uacute;blicas.";
 choices[51][3] = "La publicaci&oacute;n de actos y comunicaciones, que deban publicarse en tabl&oacute;n de anuncios &oacute; edictos, se realizar&aacute; &uacute;nicamente en la sede electr&oacute;nica correspondiente.";
 answers[51] = choices[51][0];
 units[51] = "43";
 comments[51] = "Id Pregunta: 5546. ";


//  Id pregunta: 5554 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  Los documentos ATAG:";
 choices[52]= new Array();
 choices[52][0] = "Muestran c&oacute;mo hacer que las herramientas de autor sean accesibles para personas con discapacidad.";
 choices[52][1] = "Muestran c&oacute;mo hacer  que los reproductores multimedia sean accesibles a personas con discapacidad.";
 choices[52][2] = "Est&aacute;n pensados para el contenido web.";
 choices[52][3] = "Todas las anteriores son correctas.";
 answers[52] = choices[52][0];
 units[52] = "39";
 comments[52] = "Id Pregunta: 5554. ";


//  Id pregunta: 5620 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  En UNIX, al primer proceso que se ejecuta (process 0) se le llama:";
 choices[53]= new Array();
 choices[53][0] = "Kernel";
 choices[53][1] = "Swapper";
 choices[53][2] = "Shell";
 choices[53][3] = "Page daemon";
 answers[53] = choices[53][1];
 units[53] = "53";
 comments[53] = "Id Pregunta: 5620. ";


//  Id pregunta: 5638 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indique cu&aacute;l de las siguientes opciones es err&oacute;nea:";
 choices[54]= new Array();
 choices[54][0] = "Un sistema de almacenamiento NAS tiene la ventaja de que no sobrecarga la red";
 choices[54][1] = "En un sistema de almacenamiento DAS se aprovechan los excedentes de los nodos";
 choices[54][2] = "Las siglas SAN hacen referencia a &quot;Storage Area Network&quot;";
 choices[54][3] = "Un dispositivo NAS comparte ficheros, mientras que en una SAN se comparten dispositivos de bloques";
 answers[54] = choices[54][0];
 units[54] = "48";
 comments[54] = "Id Pregunta: 5638. ";


//  Id pregunta: 5673 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique la respuesta correcta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[55]= new Array();
 choices[55][0] = "Cuando un dominio se une a un &aacute;rbol dedominio se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitiva unidireccional entre el dominio y su primario del &aacute;rbol";
 choices[55][1] = "Cuando un dominio se une a un &aacute;rbol dedominio no se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitivabidireccional entre el dominio y su primario del &aacute;rbol";
 choices[55][2] = "El sistema de replicaci&oacute;n de Active Directory utiliza n&uacute;meros de secuencia de actualizaciones";
 choices[55][3] = "Para la propagaci&oacute;n de actualizaciones de Active Directory, Windows Server 2003proporciona sincronizaci&oacute;n temporal distribuida.";
 answers[55] = choices[55][2];
 units[55] = "56";
 comments[55] = "Id Pregunta: 5673. ";


//  Id pregunta: 5678 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  En cuanto a Agentes Software y la Comunicaci&oacute;n y Coordinaci&oacute;n entre agentes, indique la respuesta no correcta:";
 choices[56]= new Array();
 choices[56][0] = "En el sistema de pizarra existe una estructura de datos global, la pizarra que es gestionada y arbitrada por todos los agentes";
 choices[56][1] = "En la red de contratos en cada tarea existen dos roles diferentes: el del contratista, que es responsable de la gesti&oacute;n de una tarea y el del oferente, que se encarga de la ejecuci&oacute;n real de la tarea.";
 choices[56][2] = "KQML  es un  lenguaje de comunicaci&oacute;n entre agentes software.";
 choices[56][3] = "Ninguna de las anteriores es correcta";
 answers[56] = choices[56][0];
 units[56] = "63";
 comments[56] = "Id Pregunta: 5678. ";


//  Id pregunta: 5699 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Se&ntilde;ale cual de las siguientes medidas de seguridad del DNI electr&oacute;nico es falsa:";
 choices[57]= new Array();
 choices[57][0] = "Tintas visibles con luz ultravioleta para evitar su falsificaci&oacute;n";
 choices[57][1] = " Chip RFID";
 choices[57][2] = "Encriptaci&oacute;n de los datos del chip";
 choices[57][3] = "Acceso a la funcionalidad del DNI electr&oacute;nico mediante clave personal de acceso (PIN)";
 answers[57] = choices[57][1];
 units[57] = "74";
 comments[57] = "Id Pregunta: 5699. ";


//  Id pregunta: 5871 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  En referencia al direccionamiento IPv6 definido en el RFC 1884, indique cu&aacute;l de los apartados siguientes no se corresponde con un tipo de direcciones en IPv6:";
 choices[58]= new Array();
 choices[58][0] = "Unicast";
 choices[58][1] = "Multicast";
 choices[58][2] = "Anycast";
 choices[58][3] = "Broadcast";
 answers[58] = choices[58][3];
 units[58] = "100";
 comments[58] = "Id Pregunta: 5871. MAP 2008 A1";


//  Id pregunta: 5971 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  Cu&aacute;l de las siguientes opciones NO es un principio de la protecci&oacute;n de datos seg&uacute;n la Ley Org&aacute;nica 15/1999:";
 choices[59]= new Array();
 choices[59][0] = "Datos relativos a las personas";
 choices[59][1] = "Calidad de los datos";
 choices[59][2] = "Consentimiento del afectado";
 choices[59][3] = "Seguridad de los datos";
 answers[59] = choices[59][0];
 units[59] = "29";
 comments[59] = "Id Pregunta: 5971. Castilla La Mancha 2009";


//  Id pregunta: 6137 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  WebDav es:";
 choices[60]= new Array();
 choices[60][0] = "Un est&aacute;ndar para la descripci&oacute;n de servicios web.";
 choices[60][1] = "Un protocolo para la edici&oacute;n distribuida de archivos.";
 choices[60][2] = "Un grupo de trabajo de la W3C para la definici&oacute;n de arquitecturas de servicios web.";
 choices[60][3] = "Una herramienta de CRM basada en software libre.";
 answers[60] = choices[60][1];
 units[60] = "95";
 comments[60] = "Id Pregunta: 6137. TIC A 2009";


//  Id pregunta: 6159 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  En cuanto a SFTP, se puede afirmar:";
 choices[61]= new Array();
 choices[61][0] = "Se obtiene al ejecutar FTP sobre SSH.";
 choices[61][1] = "Las siglas SFTP significan Simple File Transfer Protocol.";
 choices[61][2] = "El protocolo SFTP en s&iacute; no facilita la autenticaci&oacute;n y la seguridad, sino que espera que el protocolo subyacente asegure a este.";
 choices[61][3] = "Todas las respuestas anteriores son correctas.";
 answers[61] = choices[61][2];
 units[61] = "112";
 comments[61] = "Id Pregunta: 6159. ";


//  Id pregunta: 6306 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;En qu&eacute; consiste el m&eacute;todo SSD (Structured System Design)?";
 choices[62]= new Array();
 choices[62][0] = "Es un m&eacute;todo de programaci&oacute;n orientado a objetos.";
 choices[62][1] = "Es un m&eacute;todo que permite obtener un sistema software a partir de su diagrama de datos.";
 choices[62][2] = "Es un m&eacute;todo de dise&ntilde;o que permite obtener la estructura de un sistema software a partir de un DFD que describa su funcionamiento.";
 choices[62][3] = "Es una tecnolog&iacute;a de objetos distribuidos.";
 answers[62] = choices[62][2];
 units[62] = "83";
 comments[62] = "Id Pregunta: 6306. ";


//  Id pregunta: 6332 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Si los datos contienen valores 'NULL' (valores desconocidos) antes de realizar una consulta de data mining:";
 choices[63]= new Array();
 choices[63][0] = "Debo eliminarlos.";
 choices[63][1] = "S&oacute;lo se eliminan si son pocos. Si son muchos se utiliza alguna t&eacute;cnica para predecir el valor de esos nulos y trabajar con las aproximaciones obtenidas.";
 choices[63][2] = "En la fase de preproceso se les asignar&aacute; un valor por defecto.";
 choices[63][3] = "Se asigna el valor de la media multiplicado por 2.";
 answers[63] = choices[63][1];
 units[63] = "68";
 comments[63] = "Id Pregunta: 6332. ";


//  Id pregunta: 6349 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes no es un servicio de marcadores sociales en web?";
 choices[64]= new Array();
 choices[64][0] = "Delicious";
 choices[64][1] = "Digg";
 choices[64][2] = "Visconti";
 choices[64][3] = "Reddit";
 answers[64] = choices[64][2];
 units[64] = "120";
 comments[64] = "Id Pregunta: 6349. ";


//  Id pregunta: 6356 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  El registro de operadores creado al amparo de la Ley 32/2003, se crea dependiente de:";
 choices[65]= new Array();
 choices[65][0] = "La Comisi&oacute;n Nacional de Competencia";
 choices[65][1] = "La Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[65][2] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[65][3] = "La Comisi&oacute;n del Mercado de las Telecomunicaciones";
 answers[65] = choices[65][3];
 units[65] = "110";
 comments[65] = "Id Pregunta: 6356. Art&iacute;culo 7 Ley 32/2003";


//  Id pregunta: 6554 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  PKCS#12";
 choices[66]= new Array();
 choices[66][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[66][1] = "Especifica una API, por la que los dispositivos que contienen informaci&oacute;n criptogr&aacute;fica realizan funciones criptogr&aacute;ficas";
 choices[66][2] = "El formato del sobre digital";
 choices[66][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[66] = choices[66][0];
 units[66] = "74";
 comments[66] = "Id Pregunta: 6554. ";


//  Id pregunta: 6585 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Un fichero de car&aacute;cter personal de entidades financieras para las finalidades relacionadas con la prestaci&oacute;n de servicios financieros de acuerdo a la regulaci&oacute;n de protecci&oacute;n de datos vigente, de las siguientes medidas de seguridad cu&aacute;l no es obligatorio que cumpla?";
 choices[67]= new Array();
 choices[67][0] = "Debe existir un responsable de seguridad encargado de coordinar y controlar las medidas del documento";
 choices[67][1] = "Debe llevarse a cabo al menos una copia de respaldo semanal";
 choices[67][2] = "Debe existir un registro de accesos: usuario, hora, fichero, tipo de acceso, autorizado o denegado";
 choices[67][3] = "Todas las respuestas anteriores son correctas";
 answers[67] = choices[67][2];
 units[67] = "29";
 comments[67] = "Id Pregunta: 6585. ";


//  Id pregunta: 6589 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Para ficheros a los que aplican las medidas de seguridad de nivel medio debe llevarse a cabo una auditor&iacute;a, al menos";
 choices[68]= new Array();
 choices[68][0] = "Debe ser externa";
 choices[68][1] = "Bianual";
 choices[68][2] = "Bienal";
 choices[68][3] = "Todas las respuestas anteriores son incorrectas";
 answers[68] = choices[68][2];
 units[68] = "29";
 comments[68] = "Id Pregunta: 6589. ";


//  Id pregunta: 6640 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  La principal diferencia entre la t&eacute;cnica de los Puntos de Funci&oacute;n (PF's) y los PF's Mark II es:";
 choices[69]= new Array();
 choices[69][0] = "Los PF's Mark II utilizan el concepto de transacci&oacute;n l&oacute;gica";
 choices[69][1] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros)";
 choices[69][2] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros), m&aacute;s el concepto de transacci&oacute;n l&oacute;gica";
 choices[69][3] = "Los PF's Mark II utilizan 5 elementos (Entradas, Salidas, Consultas, Ficheros e Interfaces)";
 answers[69] = choices[69][0];
 units[69] = "88";
 comments[69] = "Id Pregunta: 6640. ";


//  Id pregunta: 7162 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  La copia de seguridad incremental en Linux:";
 choices[70]= new Array();
 choices[70][0] = "Consiste en copiar todos los elementos que han sido modificados desde la &uacute;ltima copia de seguridad completa o incremental";
 choices[70][1] = "Se centra espec&iacute;ficamente en las carpetas y archivos que han sido modificados desde la &uacute;ltima copia de seguridad completa";
 choices[70][2] = "Consiste en crear una copia de seguridad de todas las carpetas y archivos que se deseen copiar";
 choices[70][3] = "Es implementada habitualmente mediante el comando ntbackup";
 answers[70] = choices[70][0];
 units[70] = "53";
 comments[70] = "Id Pregunta: 7162. Examen TIC B 2009";


//  Id pregunta: 7326 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[71]= new Array();
 choices[71][0] = "CEN";
 choices[71][1] = "SETSI";
 choices[71][2] = "CENELEC";
 choices[71][3] = "Todos los anteriores son organismos europeos de normalizaci&oacute;n";
 answers[71] = choices[71][1];
 units[71] = "42";
 comments[71] = "Id Pregunta: 7326. ";


//  Id pregunta: 8093 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   Suponga que recibe una firma electr&oacute;nica avanzada de tipo XAdES-T sin una asociaci&oacute;n espec&iacute;fica a ninguna pol&iacute;tica de firma concreta y que ha verificado con &eacute;xito el formato de la firma y su integridad. En esta situaci&oacute;n, la evaluaci&oacute;n de la validez de dicha firma electr&oacute;nica seg&uacute;n la norma ETSI TS 101 903 v1.3.2 da como resultado:";
 choices[72]= new Array();
 choices[72][0] = " Firma inv&aacute;lida.";
 choices[72][1] = " Validaci&oacute;n incompleta de la firma.";
 choices[72][2] = " Firma v&aacute;lida.";
 choices[72][3] = " Firma suspendida.";
 answers[72] = choices[72][1];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 8093. Map 2008";


//  Id pregunta: 8105 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   En el &aacute;mbito de las redes de comunicaciones m&oacute;viles, cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[73]= new Array();
 choices[73][0] = " En la red GSM las llamadas se realizan en modalidad de conmutaci&oacute;n de circuitos.";
 choices[73][1] = " En la tecnolog&iacute;a UMTS las llamadas de voz y datos recorren el mismo camino en la red de acceso radio, pero se bifurcan en la red de conmutaci&oacute;n, existiendo una red para las llamadas de voz y otra para las llamadas de datos.";
 choices[73][2] = " El primer paso en la separaci&oacute;n entre voz y datos lo ha marcado la tecnolog&iacute;a TMA o TACS, al introducir conmutaci&oacute;n de paquetes para la transferencia de datos.";
 choices[73][3] = " En el sistema GSM, el proceso de cifrado se utiliza para evitar que las comunicaciones puedan ser interceptadas en el trayecto radio, para lo que antes de radiar la informaci&oacute;n, somete a los datos a un proceso de cifrado mediante un algoritmo basado en la clave utilizada para la autenticaci&oacute;n.";
 answers[73] = choices[73][1];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 8105. Map 2008";


//  Id pregunta: 8374 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos usados en la planificaci&oacute;n de la capacidad de los sistemas inform&aacute;ticos es de tipo anal&iacute;tico?";
 choices[74]= new Array();
 choices[74][0] = "Benchmarking.";
 choices[74][1] = "Teor&iacute;a de colas.";
 choices[74][2] = "Simulaci&oacute;n.";
 choices[74][3] = "Reglas basadas en la experiencia.";
 answers[74] = choices[74][1];
 units[74] = "35,38";
 comments[74] = "Id Pregunta: 8374. Examen TIC A2 2010";


//  Id pregunta: 8474 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes modos de propagaci&oacute;n de la fibra &oacute;ptica permite un mayor alcance y capacidad?";
 choices[75]= new Array();
 choices[75][0] = "Monomodo";
 choices[75][1] = "Multimodo con salto de &iacute;ndice de refracci&oacute;n.";
 choices[75][2] = "Multimodo con &iacute;ndice de refracci&oacute;n gradual. ";
 choices[75][3] = "Ultramodo de alta dispersi&oacute;n modal.";
 answers[75] = choices[75][0];
 units[75] = "99";
 comments[75] = "Id Pregunta: 8474. Examen TIC A2 2010 interna";


//  Id pregunta: 8513 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  En el contexto de la seguridad l&oacute;gica, si hablamos de una bomba l&oacute;gica &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera? ";
 choices[76]= new Array();
 choices[76][0] = "El c&oacute;digo se replica al activarse";
 choices[76][1] = "Su efecto es retardado. ";
 choices[76][2] = "No se activan por eventos. ";
 choices[76][3] = "Es otra manera de referirse a los troyanos. ";
 answers[76] = choices[76][1];
 units[76] = "111";
 comments[76] = "Id Pregunta: 8513. Examen TIC A2 2010";


//  Id pregunta: 8527 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  En un cortafuegos en modo SPI (Stateful Packet Inspection), se&ntilde;ale la opci&oacute;n verdadera:";
 choices[77]= new Array();
 choices[77][0] = "Trabaja exclusivamente en el nivel 3 de OSI.";
 choices[77][1] = "Permitir&aacute; el paso de un paquete solo si se dirige al puerto 80 de nuestro servidor.";
 choices[77][2] = "Tiene en cuenta la negociaci&oacute;n en 3 pasos (3 way handshake) del protocolo TCP/IP.";
 choices[77][3] = "No permite la conexi&oacute;n SSH ya que est&aacute; cifrada.";
 answers[77] = choices[77][2];
 units[77] = "111";
 comments[77] = "Id Pregunta: 8527. Examen TIC A2 2010 interna";


//  Id pregunta: 8664 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[78]= new Array();
 choices[78][0] = "Bluetooth";
 choices[78][1] = "HomeRF";
 choices[78][2] = "HiperLAN/2";
 choices[78][3] = "IrLMP";
 answers[78] = choices[78][1];
 units[78] = "107";
 comments[78] = "Id Pregunta: 8664. Examen UPM A2 2011";


//  Id pregunta: 8735 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes ep&iacute;grafes corresponde a una de las tres prioridades de la Comisi&oacute;n Europea a la hora de establecer la estrategia i2010?";
 choices[79]= new Array();
 choices[79][0] = "La consecuci&oacute;n de una sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n basada en la inclusi&oacute;n.";
 choices[79][1] = "La consecuci&oacute;n de un espacio mundial &uacute;nico de la informaci&oacute;n.";
 choices[79][2] = "El impulso de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n y tecnolog&iacute;a sanitarias.";
 choices[79][3] = "La consecuci&oacute;n de unos medios de comunicaci&oacute;n europeos a la vanguardia tecnol&oacute;gica";
 answers[79] = choices[79][0];
 units[79] = "30";
 comments[79] = "Id Pregunta: 8735. Examen TIC A2 2010 interna. M&aacute;s info: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 8880 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[80]= new Array();
 choices[80][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[80][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[80][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[80][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[80] = choices[80][1];
 units[80] = "57, 58";
 comments[80] = "Id Pregunta: 8880. Examen UPM A2 2011";


//  Id pregunta: 8920 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Las siglas SOAP significan";
 choices[81]= new Array();
 choices[81][0] = "Simple Object Access Protocol, o protocolo simple de acceso a objetos";
 choices[81][1] = "Single Object Access Protocol, o protocolo de acceso a objetos individuales";
 choices[81][2] = "Single Object Authorization Protocolo, o protocolo de autorizaci&oacute;n de objetos individuales";
 choices[81][3] = "Sevice Oriented Access Protocol, o protocolo de acceso orientado a servicios";
 answers[81] = choices[81][0];
 units[81] = "51";
 comments[81] = "Id Pregunta: 8920. Operador Ayto. Madrid 2010";


//  Id pregunta: 8952 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  El manejador de dispositivos es:";
 choices[82]= new Array();
 choices[82][0] = "Un p rograma de usuario final";
 choices[82][1] = "Hardware que controla un dispositivo";
 choices[82][2] = "Software que controla un dispositivo";
 choices[82][3] = "Todas las anteriores son ciertas";
 answers[82] = choices[82][2];
 units[82] = "53,54";
 comments[82] = "Id Pregunta: 8952. ";


//  Id pregunta: 9029 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[83]= new Array();
 choices[83][0] = "Wowza Media Server";
 choices[83][1] = "Icecast";
 choices[83][2] = "Darwin Streaming Server";
 choices[83][3] = "FlowCast";
 answers[83] = choices[83][3];
 units[83] = "117";
 comments[83] = "Id Pregunta: 9029. ";


//  Id pregunta: 9123 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;C&oacute;mo se puede enmarcar el proyecto SETIHome de investigaci&oacute;n de vida extraterrestre?";
 choices[84]= new Array();
 choices[84][0] = "Como una soluci&oacute;n de web 2.0";
 choices[84][1] = "Como un ejemplo pr&aacute;ctico de computaci&oacute;n Grid";
 choices[84][2] = "Una soluci&oacute;n basada en tecnolog&iacute;a Oracle.";
 choices[84][3] = "Ninguna respuesta es correcta.";
 answers[84] = choices[84][1];
 units[84] = "45";
 comments[84] = "Id Pregunta: 9123. ";


//  Id pregunta: 9321 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Se&ntilde;ale la falsa";
 choices[85]= new Array();
 choices[85][0] = "La evidencia obtenida de una tercera parte independiente es menos competente que la ofrecida por el &aacute;rea auditada";
 choices[85][1] = "La evidencia obtenida de un sistema con un control efectivo es m&aacute;s competente que la ofrecida por un sistema con un control d&eacute;bil";
 choices[85][2] = "La evidencia obtenida por el equipo auditor directamente en una inspecci&oacute;n f&iacute;sica es m&aacute;s competente que la obtenida indirectamente";
 choices[85][3] = "Todas las afirmaciones anteriores son ciertas";
 answers[85] = choices[85][0];
 units[85] = "31";
 comments[85] = "Id Pregunta: 9321. ";


//  Id pregunta: 9378 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[86]= new Array();
 choices[86][0] = "ELECTRE";
 choices[86][1] = "PROMETHEE";
 choices[86][2] = "TOPSIS";
 choices[86][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[86] = choices[86][0];
 units[86] = "34";
 comments[86] = "Id Pregunta: 9378. ";


//  Id pregunta: 9589 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  El Real Decreto 1671/2009 obliga a incluir unos contenidos m&iacute;nimos en los certificados de sello electr&oacute;nico, entre los que NO se incluye:";
 choices[87]= new Array();
 choices[87][0] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n sello electr&oacute;nico.";
 choices[87][1] = "Actuaciones y procedimientos en los que podr&aacute; ser utilizado. ";
 choices[87][2] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor. ";
 choices[87][3] = "Nombre del suscriptor.";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 9589. Examen TIC A2 2011";


//  Id pregunta: 9734 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[88]= new Array();
 choices[88][0] = "Top-down.";
 choices[88][1] = "Sandwich.";
 choices[88][2] = "Big-Bang";
 choices[88][3] = "Bottom-up.";
 answers[88] = choices[88][2];
 units[88] = "86";
 comments[88] = "Id Pregunta: 9734. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9844 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Indique cu&aacute;l de las siguientes afirmaciones es VERDADERA:";
 choices[89]= new Array();
 choices[89][0] = "En un criptosistema sim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada";
 choices[89][1] = "En un criptosistema de clave p&uacute;blica el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[89][2] = "En un criptosistema de clave privada el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[89][3] = "En un criptosistema asim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada.";
 answers[89] = choices[89][3];
 units[89] = "111";
 comments[89] = "Id Pregunta: 9844. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9883 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  El protocolo SET (Secure Electronic Transaction)";
 choices[90]= new Array();
 choices[90][0] = "Fue desarrollado en 1990 mediante acuerdo bilateral entre Visa e IBM.";
 choices[90][1] = "impide que el vendedor acceda a la informaci&oacute;n de pago.";
 choices[90][2] = "permite que el banco acceda a los datos del pedido para tramitar el pago.";
 choices[90][3] = "no abarca ni liquidaciones de pagos ni anulaciones.";
 answers[90] = choices[90][1];
 units[90] = "70";
 comments[90] = "Id Pregunta: 9883. TIC A1, Examen 2013";


//  Id pregunta: 10061 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Los fuegos de clase D son los que implican:";
 choices[91]= new Array();
 choices[91][0] = "Combustibles s&oacute;lidos como papel, cart&oacute;n, madera, pl&aacute;sticos, etc.";
 choices[91][1] = "Metales y aleaciones: magnesio, sodio, etc.";
 choices[91][2] = "Combustibles l&iacute;quidos, por ejemplo: aceite, derivados del petr&oacute;leo, etc.";
 choices[91][3] = "Gases: butano, metano, propano, etc.";
 answers[91] = choices[91][1];
 units[91] = "";
 comments[91] = "Id Pregunta: 10061. TIC A2, libre, Examen 2013";


//  Id pregunta: 10072 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  El VLR en una arquitectura de red m&oacute;vil, es una base de datos:";
 choices[92]= new Array();
 choices[92][0] = "Donde est&aacute;n inscritos todos los clientes de un operador, que se utiliza para la gesti&oacute;n de abonados m&oacute;viles.";
 choices[92][1] = "Asociada a un MSC, donde se almacena informaci&oacute;n din&aacute;mica sobre los usuarios transe&uacute;ntes en el &aacute;rea geogr&aacute;fica cubierta por la MSC.";
 choices[92][2] = "Donde se guardan las identidades IMSI de los clientes junto con la clave secreta de identificaci&oacute;n de cada usuario.";
 choices[92][3] = "Que contiene las identidades de los equipos m&oacute;viles, el IMEI que permite identificar de forma inequ&iacute;voca a un terminal a escala internacional.";
 answers[92] = choices[92][1];
 units[92] = "108";
 comments[92] = "Id Pregunta: 10072. TIC A2, libre, Examen 2013";


//  Id pregunta: 10105 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Indique cu&aacute;l no es una t&eacute;cnica de an&aacute;lisis estructurado";
 choices[93]= new Array();
 choices[93][0] = "SADR";
 choices[93][1] = "SASS";
 choices[93][2] = "SRD";
 choices[93][3] = "SADT";
 answers[93] = choices[93][0];
 units[93] = "81";
 comments[93] = "Id Pregunta: 10105. ";


//  Id pregunta: 10221 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Teniendo en cuenta que, se&ntilde;ala las sentencias que muestran en pantalla el valor 15:";
 choices[94]= new Array();
 choices[94][0] = "System.out.println(&ldquo;&rdquo; + var1 + 3);";
 choices[94][1] = "System.out.println(var1 &ldquo; + 3 &rdquo;);";
 choices[94][2] = "System.out.println(&ldquo;&rdquo; + (++var1 + 3));";
 choices[94][3] = "System.out.println(&ldquo;&rdquo; + (var1++ + 3));";
 answers[94] = choices[94][3];
 units[94] = "60";
 comments[94] = "Id Pregunta: 10221. ";


//  Id pregunta: 10264 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  En referencia al tratamiento de datos de car&aacute;cter personal recogidos en ficheros de las Fuerzas y Cuerpos de Seguridad, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[95]= new Array();
 choices[95][0] = "Puede denegarse si afecta a la defensa del estado, no siendo posible en tal caso plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[95][1] = "Puede denegarse si afecta a la defensa del estado y el interesado plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[95][2] = "No puede denegarse si el fichero contiene datos especialmente protegidos";
 choices[95][3] = "No puede denegarse en ning&uacute;n caso";
 answers[95] = choices[95][1];
 units[95] = "29";
 comments[95] = "Id Pregunta: 10264. Art&iacute;culo 23.1 y 23.3 de la Ley 15/1999";


//  Id pregunta: 10315 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Los conectores LC son:";
 choices[96]= new Array();
 choices[96][0] = "Conectores para PCI.";
 choices[96][1] = "Conectores de par trenzado.";
 choices[96][2] = "Conectores exclusivos para Mainframe.";
 choices[96][3] = "Conectores de fibra &oacute;ptica.";
 answers[96] = choices[96][3];
 units[96] = "99";
 comments[96] = "Id Pregunta: 10315. TIC A2, promoci&oacute;n interna, examen 2013";


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


//  Id pregunta: 10553 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[98]= new Array();
 choices[98][0] = "Escaneo de iris y de huella dactilar";
 choices[98][1] = "Identificador de usuario y sistema GPS";
 choices[98][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[98][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[98] = choices[98][2];
 units[98] = "31, 32, 33";
 comments[98] = "Id Pregunta: 10553. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";


//  Id pregunta: 10565 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  El volumen de datos en riesgo de p&eacute;rdida que la organizaci&oacute;n considera tolerable es:";
 choices[99]= new Array();
 choices[99][0] = "RPO (Recovery Point Objective)";
 choices[99][1] = "RTO (Recovery Time Objective) ";
 choices[99][2] = "DRP (Disater Recovery Plan)";
 choices[99][3] = "Business Impact Analysis (BIA)";
 answers[99] = choices[99][0];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10565. ";


