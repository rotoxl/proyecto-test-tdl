/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 115 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  De las siguientes afirmaciones referentes al m&eacute;todo lexicogr&aacute;fico de ordenaci&oacute;n de alternativas, indique cu&aacute;l es m&aacute;s correcta:";
 choices[0]= new Array();
 choices[0][0] = "El m&eacute;todo lexicogr&aacute;fico tiene como inconveniente que no utiliza toda la informaci&oacute;n disponible";
 choices[0][1] = "El m&eacute;todo lexicogr&aacute;fico requiere comparabilidad intercriterios";
 choices[0][2] = "El m&eacute;todo lexicogr&aacute;fico da como resultado un preorden parcial de las alternativas, pudiendo quedar alternativas declaradas como incomparables";
 choices[0][3] = "Todas las respuestas anteriores son ciertas";
 answers[0] = choices[0][0];
 units[0] = "34";
 comments[0] = "Id Pregunta: 115. ";


//  Id pregunta: 217 Año de creación de pregunta: 2007-01-01
 questions[1]= "2)  La metodolog&iacute;a MAGERIT:";
 choices[1]= new Array();
 choices[1][0] = "Se apoya en tres submodelos: submodelo de elementos, submodelo de eventos y submodelo de procesos.";
 choices[1][1] = "Se estructura en tres libros: M&eacute;todo, Cat&aacute;logo de Activos y Gu&iacute;a de T&eacute;cnicas";
 choices[1][2] = "MAGERIT es una metodolog&iacute;a de car&aacute;cter p&uacute;blico, perteneciente al Ministerio de Administraciones P&uacute;blicas. Su utilizaci&oacute;n requiere autorizaci&oacute;n previa del MAP";
 choices[1][3] = "Se estructura en tres libros: M&eacute;todo, Cat&aacute;logo de Elementos y Gu&iacute;a de T&eacute;cnicas";
 answers[1] = choices[1][3];
 units[1] = "33";
 comments[1] = "Id Pregunta: 217. ";


//  Id pregunta: 269 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Indicar la afirmaci&oacute;n que no corresponde entre los objetivos fundamentales de un DSS orientado a datos:";
 choices[2]= new Array();
 choices[2][0] = "Presentar al usuario una informaci&oacute;n seleccionada para la toma de decisiones";
 choices[2][1] = "Confrontar m&uacute;ltiples criterios de decisi&oacute;n y buscar un modelo en el sistema para predecir las consecuencias de una acci&oacute;n propuesta";
 choices[2][2] = "Facilitar el conocimiento estructural del problema que permite el posterior desarrollo de un modelo formal de decisi&oacute;n";
 choices[2][3] = "Proporcionar un medio f&aacute;cil al usuario para jugar con los datos";
 answers[2] = choices[2][1];
 units[2] = "21";
 comments[2] = "Id Pregunta: 269. ";


//  Id pregunta: 285 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La certificaci&oacute;n es:";
 choices[3]= new Array();
 choices[3][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[3][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[3][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos";
 choices[3][3] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 answers[3] = choices[3][1];
 units[3] = "42";
 comments[3] = "Id Pregunta: 285. ";


//  Id pregunta: 403 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Respecto a las caracter&iacute;sticas de un sistema abierto (es decir, aqu&eacute;l que cumple con las especificaciones de OSI), podemos decir que:";
 choices[4]= new Array();
 choices[4][0] = "Interoperabilidad es la posibilidad de enlazar ordenadores de distintas marcas con la seguridad de que han de trabajar conjuntamente, dando la sensaci&oacute;n de que funcionan como un &uacute;nico sistema";
 choices[4][1] = "Portabilidad es la posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes";
 choices[4][2] = "Escalabilidad o capacidad de crecimiento es la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 choices[4][3] = "Todas las respuestas anteriores son correctas";
 answers[4] = choices[4][3];
 units[4] = "40";
 comments[4] = "Id Pregunta: 403. ";


//  Id pregunta: 431 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Seg&uacute;n la clasificaci&oacute;n de directivos establecida por Lawrence Milier, el tipo de directivo id&oacute;neo para la creaci&oacute;n inicial de una empresa es el:";
 choices[5]= new Array();
 choices[5][0] = "B&aacute;rbaro";
 choices[5][1] = "Profeta";
 choices[5][2] = "Administrador";
 choices[5][3] = "Gestor";
 answers[5] = choices[5][1];
 units[5] = "22";
 comments[5] = "Id Pregunta: 431. ";


//  Id pregunta: 435 Año de creación de pregunta: 2009-01-01
 questions[6]= "7)  Seg&uacute;n la Ley org&aacute;nica 15/1999:";
 choices[6]= new Array();
 choices[6][0] = "existen derechos de cancelaci&oacute;n, rectificaci&oacute;n, acceso y oposici&oacute;n, sobre los que se podr&aacute; exigir contraprestaci&oacute;n en los casos que proceda";
 choices[6][1] = "los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal que, por haber sido recogidos para fines administrativos, deban ser objeto de registro permanente, estar&aacute;n sujetos al regimen general de la ley";
 choices[6][2] = "la Agencia de Protecci&oacute;n de Datos es un ente de derecho p&uacute;blico con personalidad jur&iacute;dica propia y que depende de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[6][3] = "Todas las respuestas anteriores son correctas";
 answers[6] = choices[6][1];
 units[6] = "29";
 comments[6] = "Id Pregunta: 435. ";


//  Id pregunta: 471 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Una hip&oacute;tesis b&aacute;sica para la aplicabilidad del m&eacute;todo de ponderaci&oacute;n lineal en la selecci&oacute;n de bienes y servicios es:";
 choices[7]= new Array();
 choices[7][0] = "La linealidad de las funciones de utilidad de los factores de decisi&oacute;n usados";
 choices[7][1] = "La independencia (separabilidad) de las funciones de utilidad";
 choices[7][2] = "La continuidad (ausencia de puntos singulares)";
 choices[7][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[7] = choices[7][1];
 units[7] = "34";
 comments[7] = "Id Pregunta: 471. ";


//  Id pregunta: 736 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[8]= new Array();
 choices[8][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[8][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[8][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[8][3] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 answers[8] = choices[8][3];
 units[8] = "30";
 comments[8] = "Id Pregunta: 736. Examen TIC MAP B 2004. Art&iacute;culo 35 de la ley";


//  Id pregunta: 751 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  El lenguaje Java Script:";
 choices[9]= new Array();
 choices[9][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[9][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[9][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[9][3] = "Se ejecuta en la m&aacute;quina cliente una vez que ha sido descargado en forma de applets, ejecutables en cualquier m&aacute;quina";
 answers[9] = choices[9][1];
 units[9] = "61";
 comments[9] = "Id Pregunta: 751. Examen TIC MAP B 2004";


//  Id pregunta: 879 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[10]= new Array();
 choices[10][0] = "DOKM";
 choices[10][1] = "DOM";
 choices[10][2] = "JDOC";
 choices[10][3] = "Todas son falsas";
 answers[10] = choices[10][1];
 units[10] = "69";
 comments[10] = "Id Pregunta: 879. ";


//  Id pregunta: 978 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  De las siguientes afirmaciones, indique la correcta respecto a los lenguajes procedimentales:";
 choices[11]= new Array();
 choices[11][0] = "En un lenguaje procedimental, se indica c&oacute;mo hay que realizar la acci&oacute;n";
 choices[11][1] = "En un lenguaje procedimental, se indica que resultado se quiere obtener";
 choices[11][2] = "Los lenguajes procedimentales son lenguajes de cuarta generaci&oacute;n";
 choices[11][3] = "Es cierto &lsquo;a&rsquo; y &lsquo;c&rsquo;";
 answers[11] = choices[11][0];
 units[11] = "63";
 comments[11] = "Id Pregunta: 978. ";


//  Id pregunta: 1007 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  El concepto de trabajo en grupo o groupware se construy&oacute; alrededor de:";
 choices[12]= new Array();
 choices[12][0] = "Los productos de correo electr&oacute;nico";
 choices[12][1] = "Los procesadores de texto";
 choices[12][2] = "Las redes locales de &aacute;mbito de oficina";
 choices[12][3] = "Las hojas de c&aacute;lculo";
 answers[12] = choices[12][0];
 units[12] = "71";
 comments[12] = "Id Pregunta: 1007. ";


//  Id pregunta: 1477 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Se dice que el conjunto de instrucciones que ejecuta un procesador deber ser completo, es decir:";
 choices[13]= new Array();
 choices[13][0] = "Debe contener un gran n&uacute;mero de instrucciones";
 choices[13][1] = "Debe ser un conjunto de instrucciones muy potentes";
 choices[13][2] = "Debe permitir calcular cualquier tarea computable en un tiempo finito";
 choices[13][3] = "Debe realizar c&aacute;lculos a altas velocidades";
 answers[13] = choices[13][2];
 units[13] = "56";
 comments[13] = "Id Pregunta: 1477. ";


//  Id pregunta: 1620 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[14]= new Array();
 choices[14][0] = "Es independiente del SO";
 choices[14][1] = "Es independiente de la plataforma";
 choices[14][2] = "Es independiente del HW";
 choices[14][3] = "Write once run everywhere ";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1620. ";


//  Id pregunta: 1688 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es FALSO respecto al NRC?";
 choices[15]= new Array();
 choices[15][0] = "Es un elemento utilizado en la pasarela de pago PISTA";
 choices[15][1] = "Sus siglas significan: N&uacute;mero de Referencia Completo";
 choices[15][2] = "Se compone del n&uacute;mero de justificante m&aacute;s unos caracteres de control";
 choices[15][3] = "Para obtener los caracteres de control se aplica la funci&oacute;n MAC del algoritmo DES a los datos de la operaci&oacute;n, mediante la clave privada de la entidad";
 answers[15] = choices[15][0];
 units[15] = "70";
 comments[15] = "Id Pregunta: 1688. ";


//  Id pregunta: 1725 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Respecto a la pol&iacute;tica de planificaci&oacute;n de procesos de turno rotatorio o &quot;Round Robin&quot;, es FALSO afirmar que";
 choices[16]= new Array();
 choices[16][0] = "Penaliza a los procesos cortos";
 choices[16][1] = "La penalizaci&oacute;n a los procesos intensivos en E/S puede resolverse con una cola prioritaria para los procesos que salieron de ejecuci&oacute;n por E/S";
 choices[16][2] = "Cada proceso recibe una fracci&oacute;n de tiempo antes de ser expulsado";
 choices[16][3] = "La selecci&oacute;n del siguiente proceso se realiza seg&uacute;n la pol&iacute;tica FCFS (First come, First served)";
 answers[16] = choices[16][0];
 units[16] = "52";
 comments[16] = "Id Pregunta: 1725. ";


//  Id pregunta: 2129 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[17]= new Array();
 choices[17][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados";
 choices[17][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones";
 choices[17][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad";
 choices[17][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones";
 answers[17] = choices[17][2];
 units[17] = "82";
 comments[17] = "Id Pregunta: 2129. ";


//  Id pregunta: 2172 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  La complejidad ciclom&aacute;tica tiene que ver con la t&eacute;cnica de:";
 choices[18]= new Array();
 choices[18][0] = "McCall";
 choices[18][1] = "McCabe";
 choices[18][2] = "Hasltead";
 choices[18][3] = "COCOMO";
 answers[18] = choices[18][1];
 units[18] = "88";
 comments[18] = "Id Pregunta: 2172. ";


//  Id pregunta: 2577 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  La planificaci&oacute;n estrat&eacute;gica es";
 choices[19]= new Array();
 choices[19][0] = "un  momento en el tiempo para tomar decisiones";
 choices[19][1] = "una herramienta para anticiparse a los cambios";
 choices[19][2] = "una herramienta que permite que los cambios sean consecuencia de las acciones emprendidas por la organizaci&oacute;n";
 choices[19][3] = "una herramineta que se limita e extrapolar el presente al futuro";
 answers[19] = choices[19][2];
 units[19] = "77";
 comments[19] = "Id Pregunta: 2577. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2685 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  La entrada de documentos al sistema de reconocimiento &oacute;ptico de caracteres se produce sobre soporte:";
 choices[20]= new Array();
 choices[20][0] = "Papel";
 choices[20][1] = "Fax";
 choices[20][2] = "Correo electr&oacute;nico.";
 choices[20][3] = "Todos los anteriores.";
 answers[20] = choices[20][3];
 units[20] = "94";
 comments[20] = "Id Pregunta: 2685. ";


//  Id pregunta: 2734 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  El an&aacute;lisis de requerimientos es:";
 choices[21]= new Array();
 choices[21][0] = "Una actividad intesiva de comunicaci&oacute;n";
 choices[21][1] = "Una actividad intensiva de programaci&oacute;n";
 choices[21][2] = "Una actividad intesiva de especificaci&oacute;n";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][0];
 units[21] = "78";
 comments[21] = "Id Pregunta: 2734. ";


//  Id pregunta: 2746 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de an&aacute;lisis orientado al flujo de datos?";
 choices[22]= new Array();
 choices[22][0] = "El Diagrama de Flujo de Datos (DFD)";
 choices[22][1] = "El Modelo Entidad/Relaci&oacute;n (E/R) de Peter Chen";
 choices[22][2] = "La Historia de la Vida de las Entidades (HVE)";
 choices[22][3] = "El Diagrama de Estructura de Datos (DED)";
 answers[22] = choices[22][0];
 units[22] = "81";
 comments[22] = "Id Pregunta: 2746. ";


//  Id pregunta: 2815 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Cual de las siguientes no es una forma de autoevaluaci&oacute;n seg&uacute;n el EFQM";
 choices[23]= new Array();
 choices[23][0] = "Simulaci&oacute;n de presentaci&oacute;n al Premio";
 choices[23][1] = "Por formularios";
 choices[23][2] = "Por cuestionarios de autoevaluaci&oacute;n";
 choices[23][3] = "Todas son correctas";
 answers[23] = choices[23][3];
 units[23] = "88";
 comments[23] = "Id Pregunta: 2815. ";


//  Id pregunta: 2828 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un criterio para abordar un proceso de ajuste dimensional?";
 choices[24]= new Array();
 choices[24][0] = "Interconectividad.";
 choices[24][1] = "Seguridad.";
 choices[24][2] = "Grado de conocimiento de los usuarios finales.";
 choices[24][3] = "Reducci&oacute;n del presupuesto.";
 answers[24] = choices[24][3];
 units[24] = "90";
 comments[24] = "Id Pregunta: 2828. ";


//  Id pregunta: 2838 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  ISO 9004-2 se corresponde con";
 choices[25]= new Array();
 choices[25][0] = "Gesti&oacute;n de la calidad y elementos del sistema de calidad. Reglas generales";
 choices[25][1] = "Gu&iacute;a para los servicios";
 choices[25][2] = "No existe ISO 9004-2, sino ISO 9004-2000";
 choices[25][3] = "Gu&iacute;a para la aplicaci&oacute;n de ISO 9001 para el desarrollo, suministro y mantenimiento del software";
 answers[25] = choices[25][1];
 units[25] = "92";
 comments[25] = "Id Pregunta: 2838. ";


//  Id pregunta: 2908 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Dentro de  la metodolog&iacute;a MAGERIT V2 la definici&oacute;n: &quot;es el da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza&quot;, corresponde a:";
 choices[26]= new Array();
 choices[26][0] = "Amenazas";
 choices[26][1] = "Vulnerabilidad";
 choices[26][2] = "Impacto";
 choices[26][3] = "Riesgo";
 answers[26] = choices[26][2];
 units[26] = "33";
 comments[26] = "Id Pregunta: 2908. ";


//  Id pregunta: 3049 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Qu&eacute; es GOPHER?:";
 choices[27]= new Array();
 choices[27][0] = "Un protocolo de comunicaci&oacute;n entre redes Ethernet";
 choices[27][1] = "Un sistema operativo multitarea y multipuesto desarrollado por NeXT";
 choices[27][2] = "Un sistema disponible en Internet para b&uacute;squeda y transmisi&oacute;n de ficheros";
 choices[27][3] = "Nada de lo anterior";
 answers[27] = choices[27][2];
 units[27] = "112";
 comments[27] = "Id Pregunta: 3049. ";


//  Id pregunta: 3279 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Qu&eacute; elemento de la especificaci&oacute;n de RDSI ser&iacute;a una centralita digital de abonado?:";
 choices[28]= new Array();
 choices[28][0] = "Un TR1";
 choices[28][1] = "Un TR2";
 choices[28][2] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET1) m&aacute;s";
 choices[28][3] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET2) m&aacute;s";
 answers[28] = choices[28][1];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3279. ";


//  Id pregunta: 3294 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; hecho no es correcto en la evoluci&oacute;n del protocolo TCP/IP?:";
 choices[29]= new Array();
 choices[29][0] = "El desarrollador inicial fue ARPANET";
 choices[29][1] = "La publicaci&oacute;n fue por IAB";
 choices[29][2] = "La financiaci&oacute;n corri&oacute; a cargo de DARPA";
 choices[29][3] = "El desarrollador final fue CERN";
 answers[29] = choices[29][3];
 units[29] = "100,112";
 comments[29] = "Id Pregunta: 3294. ";


//  Id pregunta: 3321 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Sabe qui&eacute;n fue el impulsor de Bluetooth?:";
 choices[30]= new Array();
 choices[30][0] = "Nokia";
 choices[30][1] = "Sony";
 choices[30][2] = "Ericsson";
 choices[30][3] = "Nortel";
 answers[30] = choices[30][2];
 units[30] = "107";
 comments[30] = "Id Pregunta: 3321. ";


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


//  Id pregunta: 3489 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  En conmutaci&oacute;n de paquetes es falso que:";
 choices[32]= new Array();
 choices[32][0] = "la transmisi&oacute;n es por r&aacute;fagas";
 choices[32][1] = "la ruta origen-&gt;destino puede ser variable";
 choices[32][2] = "no hay ning&uacute;n circuito f&iacute;sico dedicado en la comunicaci&oacute;n";
 choices[32][3] = "todas las anteriores son caracter&iacute;sticas de la conmutaci&oacute;n de paquetes";
 answers[32] = choices[32][3];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3489. ";


//  Id pregunta: 3577 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  En una red local en la que se tienen problemas de capacidad de la misma se ha decidido dividirla en dos segmentos. Indique cual de las opciones siguientes es la soluci&oacute;n t&eacute;cnica y econ&oacute;micamente m&aacute;s adecuada:";
 choices[33]= new Array();
 choices[33][0] = "Utilizaci&oacute;n de un gateway entre los segmentos";
 choices[33][1] = "Utilizaci&oacute;n de un repetidor entre los segmentos";
 choices[33][2] = "Utilizaci&oacute;n de un switch entre los segmentos";
 choices[33][3] = "Todas las opciones son igualmente adecuadas";
 answers[33] = choices[33][2];
 units[33] = "102";
 comments[33] = "Id Pregunta: 3577. ";


//  Id pregunta: 3624 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  La normativa para sistemas de cableado de edificios es:";
 choices[34]= new Array();
 choices[34][0] = "EIA/TIA 568";
 choices[34][1] = "ISO/IEC DIS 11801";
 choices[34][2] = "EPHOS 2";
 choices[34][3] = "&quot;a&quot; y &quot;b&quot;";
 answers[34] = choices[34][3];
 units[34] = "99";
 comments[34] = "Id Pregunta: 3624. ";


//  Id pregunta: 3776 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  Por una misma fibra &oacute;ptica:";
 choices[35]= new Array();
 choices[35][0] = "Puede transportarse tr&aacute;fico asociado a varios PVCs y SVCs";
 choices[35][1] = "S&oacute;lo puede viajar tr&aacute;fico asociado a un &uacute;nico PVC configurado para tal fin";
 choices[35][2] = "No puede llevar tr&aacute;fico asociado a PVCs";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][0];
 units[35] = "99";
 comments[35] = "Id Pregunta: 3776. ";


//  Id pregunta: 3933 Año de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;C&uacute;antos canales tiene una trama MIC?:";
 choices[36]= new Array();
 choices[36][0] = "32";
 choices[36][1] = "16";
 choices[36][2] = "32, pero dos de ellos se utilizan para se&ntilde;alizaci&oacute;n y sincronismo";
 choices[36][3] = "Todas las respuestas anteriores son falsas";
 answers[36] = choices[36][2];
 units[36] = "103";
 comments[36] = "Id Pregunta: 3933. ";


//  Id pregunta: 3977 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  En relaci&oacute;n a los cables de par trenzado UTP y STP, indique cu&aacute;l de las siguientes afirmaciones es cierta.";
 choices[37]= new Array();
 choices[37][0] = "Las categor&iacute;as 1 y 2 de UTP se emplean para transmisi&oacute;n de datos X.25";
 choices[37][1] = "La categor&iacute;a 4 de UTP especifica cables hasta 20 MHz, se utilizan para voz y datos hasta 16 Mbps";
 choices[37][2] = "El tipo 6 de cable STP emplea 4 pares trenzados de mayor calibre que los de tipo 1";
 choices[37][3] = "Los cables STP, a pesar de su menor inmunidad a las interferencias, son los de mayor implantaci&oacute;n en los cableados estructurados.";
 answers[37] = choices[37][1];
 units[37] = "99";
 comments[37] = "Id Pregunta: 3977. ";


//  Id pregunta: 3984 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  En relaci&oacute;n con las redes de comunicaciones, &iquest;a qu&eacute; hace referencia el t&eacute;rmino &quot;VLAN trunking&quot;?";
 choices[38]= new Array();
 choices[38][0] = "Es el est&aacute;ndar 802.1Q";
 choices[38][1] = "Se refiere a etiquetar tramas ethernet";
 choices[38][2] = "Al proceso de transmitir m&uacute;ltiples VLAN por un &uacute;nico enlace";
 choices[38][3] = "A la se&ntilde;alizaci&oacute;n de VLAN";
 answers[38] = choices[38][2];
 units[38] = "101, 102";
 comments[38] = "Id Pregunta: 3984. ";


//  Id pregunta: 4024 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[39]= new Array();
 choices[39][0] = "HSCSD, GSM, GPRS, UMTS";
 choices[39][1] = "GSM. HSCSD, UMTS, GPRS";
 choices[39][2] = "GSM, HSCSD, GPRS, UMTS";
 choices[39][3] = "GSM, GPRS, HSCSD, UMTS";
 answers[39] = choices[39][2];
 units[39] = "108";
 comments[39] = "Id Pregunta: 4024. ";


//  Id pregunta: 4051 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  Si tenemos un web server en la DMZ &iquest;Qu&eacute; puerto t&iacute;picamente debemos abrir en el firewall?";
 choices[40]= new Array();
 choices[40][0] = "El primer puerto libre del firewall";
 choices[40][1] = "El puerto 80";
 choices[40][2] = "El primer puerto libre desde el 80";
 choices[40][3] = "No es necesario abrir puerto alguno";
 answers[40] = choices[40][1];
 units[40] = "111";
 comments[40] = "Id Pregunta: 4051. ";


//  Id pregunta: 4057 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  Existen experiencias de uso real de VoIP en Espa&ntilde;a";
 choices[41]= new Array();
 choices[41][0] = "Si";
 choices[41][1] = "No";
 choices[41][2] = "Si, pero solo en las AAPP";
 choices[41][3] = "No, porque a&uacute;n no hay regulaci&oacute;n que lo permita";
 answers[41] = choices[41][0];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4057. ";


//  Id pregunta: 4167 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Las comunicaciones satelite son f&aacute;cilmente interceptables porque";
 choices[42]= new Array();
 choices[42][0] = "las transmisiones son continuas 24 horas al d&iacute;a";
 choices[42][1] = "la huella del sat&eacute;lite no cambia";
 choices[42][2] = "la huella del sat&eacute;lite es muy amplia";
 choices[42][3] = "la posici&oacute;n del sat&eacute;lite es conocida";
 answers[42] = choices[42][2];
 units[42] = "105";
 comments[42] = "Id Pregunta: 4167. ";


//  Id pregunta: 4194 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  No es cierto que la herramienta Nagios";
 choices[43]= new Array();
 choices[43][0] = "Puede monitorizar servicios TCP";
 choices[43][1] = "Es una alternativa a Bigbrother";
 choices[43][2] = "Puede utilizar agentes distintos a SNMP";
 choices[43][3] = "Puede ser instalada en Windows";
 answers[43] = choices[43][3];
 units[43] = "104";
 comments[43] = "Id Pregunta: 4194. ";


//  Id pregunta: 4363 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n al interfaz hombre-m&aacute;quina en sistemas Unix y Linux:";
 choices[44]= new Array();
 choices[44][0] = "GNOME (GNU Network Object Modelo Environment) est&aacute; totalmente orientado a objetos y al uso de COM+.";
 choices[44][1] = "La implementaci&oacute;n free Xfree86 del entorno de escritorio CDE (Common Desktop Environment) se incluye en la distribuci&oacute;n MacX Server.";
 choices[44][2] = "En X-Windows el modelo es cliente/servidor, basado en un protocolo de red: Xserver, Xclient.";
 choices[44][3] = "KDE (K Desktop Environment) se implementa &uacute;nicamente en sistemas Unix.";
 answers[44] = choices[44][2];
 units[44] = "54";
 comments[44] = "Id Pregunta: 4363. ";


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


//  Id pregunta: 4394 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  El repositorio com&uacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Agrupa un conjunto de herramientas de desarrollo.";
 choices[47][1] = "Forma un banco de trabajo.";
 choices[47][2] = "Organiza un entorno de desarrollo.";
 choices[47][3] = "Es un manejador de versiones.";
 answers[47] = choices[47][2];
 units[47] = "87";
 comments[47] = "Id Pregunta: 4394. ";


//  Id pregunta: 4459 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  El uso de mecanismos como JDBC u ODBC:";
 choices[48]= new Array();
 choices[48][0] = "Proporciona independencia respecto al SGBD utilizado.";
 choices[48][1] = "Proporcionan generalmente un mayor rendimiento y funcionalidad que las APIs nativas de los SGBD.";
 choices[48][2] = "Tienen poca importancia en sistemas donde se acceden a SGBD heterog&eacute;neos.";
 choices[48][3] = "Se utilizan &uacute;nicamente en arquitecturas cliente-servidor, no en entornos de aplicaciones WEB.";
 answers[48] = choices[48][0];
 units[48] = "58";
 comments[48] = "Id Pregunta: 4459. ";


//  Id pregunta: 4491 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Indique cual de las siguientes afirmaciones sobre las redes Frame Relay es falsa: ";
 choices[49]= new Array();
 choices[49][0] = "Las redes Frame Relay son redes de conmutaci&oacute;n de paquetes";
 choices[49][1] = "Las redes Frame Relay disponen de t&eacute;cnicas de control de Ia congesti&oacute;n de Ia red.";
 choices[49][2] = "LAPB es el protocolo de nivel de enlace utilizado por Frame Relay.";
 choices[49][3] = "El CIR (Comitted Information Rate) es Ia velocidad de transmisi&oacute;n de datos que el operador de la red Frame Relay garantiza para una conexi&oacute;n determinada.";
 answers[49] = choices[49][2];
 units[49] = "109";
 comments[49] = "Id Pregunta: 4491. ";


//  Id pregunta: 4531 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes no es una sentencia correcta?";
 choices[50]= new Array();
 choices[50][0] = "UML es un lenguaje unificado de modelado.";
 choices[50][1] = "UML fue adoptado en noviembre de 1997 por OMG.";
 choices[50][2] = "UML solo costa de una &uacute;nica versi&oacute;n desde su creaci&oacute;n.";
 choices[50][3] = "UML es un est&aacute;ndar de facto para visualizar, especificar y documentar los modelos que se crean durante Ia aplicaci&oacute;n de un proceso de software.";
 answers[50] = choices[50][2];
 units[50] = "82";
 comments[50] = "Id Pregunta: 4531. ";


//  Id pregunta: 4698 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue eleconomista";
 choices[51]= new Array();
 choices[51][0] = "Fritz Machlup";
 choices[51][1] = "Charles Babbage";
 choices[51][2] = "Herman Hollerith";
 choices[51][3] = "Howard Aiken";
 answers[51] = choices[51][0];
 units[51] = "30";
 comments[51] = "Id Pregunta: 4698. Examen 2006 JCYL";


//  Id pregunta: 4700 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  IESG (Internet Engineering Steering Group) se encarga de:";
 choices[52]= new Array();
 choices[52][0] = "Coordinaci&oacute;n entre organizaciones.";
 choices[52][1] = "Asignaci&oacute;n de recursos.";
 choices[52][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[52][3] = "Especificaci&oacute;n de est&aacute;ndares";
 answers[52] = choices[52][0];
 units[52] = "42";
 comments[52] = "Id Pregunta: 4700. Examen 2006 JCYL";


//  Id pregunta: 4723 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos yatributos del directorio activo se encuentra en el:";
 choices[53]= new Array();
 choices[53][0] = "Schema Naming Context";
 choices[53][1] = " Active Directory Schema MMC";
 choices[53][2] = "Configuration Naming Context";
 choices[53][3] = "Domain Naming Context";
 answers[53] = choices[53][0];
 units[53] = "59,115";
 comments[53] = "Id Pregunta: 4723. Examen 2006 JCYL";


//  Id pregunta: 4764 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  Indicar cual no es un Dominio de COBIT:";
 choices[54]= new Array();
 choices[54][0] = "Planificaci&oacute;n y organizaci&oacute;n";
 choices[54][1] = "Control y Calidad";
 choices[54][2] = "Prestaci&oacute;n y soporte";
 choices[54][3] = "Adquisici&oacute;n e implementaci&oacute;n";
 answers[54] = choices[54][1];
 units[54] = "98";
 comments[54] = "Id Pregunta: 4764. ";


//  Id pregunta: 4795 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) yUDP (User Datagram Protocol) es cierta?";
 choices[55]= new Array();
 choices[55][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores";
 choices[55][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos";
 choices[55][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP(Internet Protocol), que es un protocolo de red no fiable";
 choices[55][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite";
 answers[55] = choices[55][3];
 units[55] = "100";
 comments[55] = "Id Pregunta: 4795. ";


//  Id pregunta: 5029 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros telem&aacute;ticos en d&iacute;as inh&aacute;biles, seg&uacute;n el RD209/2003, de 21 de febrero:";
 choices[56]= new Array();
 choices[56][0] = "Los registros telem&aacute;ticos no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles";
 choices[56][1] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 choices[56][2] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior";
 choices[56][3] = "No se permitir&aacute; la entrada de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente laentrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro telem&aacute;ticono se entender&aacute; efectuada";
 answers[56] = choices[56][1];
 units[56] = "30";
 comments[56] = "Id Pregunta: 5029. Examen TIC A 2007";


//  Id pregunta: 5050 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?:";
 choices[57]= new Array();
 choices[57][0] = "Regla de la no subversi&oacute;n";
 choices[57][1] = "Regla de la no concurrencia";
 choices[57][2] = "Regla de la restricci&oacute;n";
 choices[57][3] = "Regla de la no replicaci&oacute;n de informaci&oacute;n";
 answers[57] = choices[57][0];
 units[57] = "58";
 comments[57] = "Id Pregunta: 5050. Examen TIC A 2007";


//  Id pregunta: 5078 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public KeyInfrastructures)? :";
 choices[58]= new Array();
 choices[58][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica";
 choices[58][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido";
 choices[58][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;npermitidas para dicho certificado";
 choices[58][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet";
 answers[58] = choices[58][3];
 units[58] = "74";
 comments[58] = "Id Pregunta: 5078. Examen TIC A 2007";


//  Id pregunta: 5092 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Las dimensiones del DNI electr&oacute;nico son:";
 choices[59]= new Array();
 choices[59][0] = "85,60 mm de ancho X 53,98 mm de alto";
 choices[59][1] = "8,6 mm de ancho X 5,9 mm de alto";
 choices[59][2] = "60 mm de ancho X 58 mm de alto";
 choices[59][3] = "85,60 mm de alto X 53,98 mm de ancho";
 answers[59] = choices[59][0];
 units[59] = "74";
 comments[59] = "Id Pregunta: 5092. ";


//  Id pregunta: 5136 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  &iquest;En qu&eacute; modelo de ciclo de vida cada ciclo comienza identificando los objetivos, las alternativas y las restricciones del ciclo?";
 choices[60]= new Array();
 choices[60][0] = "Modelo incremental.";
 choices[60][1] = "Modelo en espiral.";
 choices[60][2] = "Modelo en cascada.";
 choices[60][3] = "Modelo fuente.";
 answers[60] = choices[60][1];
 units[60] = "76";
 comments[60] = "Id Pregunta: 5136. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5138 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indique cu&aacute;l de las siguientes afirmaciones sobre el m&eacute;todo de planificaci&oacute;n PERT (Program Evaluation and Review Technique) es FALSA:";
 choices[61]= new Array();
 choices[61][0] = "El m&eacute;todo PERT parte de la descomposici&oacute;n del proyecto en una serie de obras parciales o actividades.";
 choices[61][1] = "Para representar las diferentes actividades en que se descompone un proyecto, as&iacute; como sus correspondientes sucesos, se utiliza una estructura de grafo. Los arcos del grafo representan las actividades y los v&eacute;rtices los sucesos.";
 choices[61][2] = "Es la forma habitual de presentar el plan de ejecuci&oacute;n de un proyecto, recogiendo en las filas la relaci&oacute;n de actividades a realizar y en las columnas la escala de tiempos que se est&aacute; manejando.";
 choices[61][3] = "Un suceso es un acontecimiento, un punto en el tiempo, una fecha en el calendario. El suceso no consume recursos, s&oacute;lo indica el principio o el fin de una actividad o de un conjunto de actividades.";
 answers[61] = choices[61][2];
 units[61] = "77";
 comments[61] = "Id Pregunta: 5138. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5180 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l no es una metodolog&iacute;a de Desarrollo Orientada a Objetos?";
 choices[62]= new Array();
 choices[62][0] = "Merise";
 choices[62][1] = "Booch";
 choices[62][2] = "OMT";
 choices[62][3] = "RUP";
 answers[62] = choices[62][0];
 units[62] = "79";
 comments[62] = "Id Pregunta: 5180. ";


//  Id pregunta: 5217 Año de creación de pregunta: 2007-01-01
 questions[63]= "64)  En qu&eacute; actividad de proceso An&aacute;lisis del Sistema de Informaci&oacute;n participan los &quot;Usuarios expertos&quot;";
 choices[63]= new Array();
 choices[63][0] = "Elaboraci&oacute;n del modelo de procesos";
 choices[63][1] = "Elaboraci&oacute;n del modelo de datos";
 choices[63][2] = "An&aacute;lisis de los casos de uso";
 choices[63][3] = "Definici&oacute;n del sistema";
 answers[63] = choices[63][1];
 units[63] = "86";
 comments[63] = "Id Pregunta: 5217. ";


//  Id pregunta: 5256 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  En relaci&oacute;n a las m&eacute;tricas de calidad del Software NO es correcto afirmar:";
 choices[64]= new Array();
 choices[64][0] = "Las m&eacute;tricas  se pueden utilizar para evaluar en qu&eacute; grado el software posee las distintas caracter&iacute;sticas que definen la calidad de un producto software.";
 choices[64][1] = "Las m&eacute;tricas se apoyan en 2 tipos de atributos, internos y externos.";
 choices[64][2] = "Los atributos internos son aquellos que se pueden medir en t&eacute;rminos de la propia entidad independientemente de su comportamiento.";
 choices[64][3] = "Las m&eacute;tricas se pueden aplicar s&oacute;lo a una etapa del ciclo de vida del desarrollo del software.";
 answers[64] = choices[64][3];
 units[64] = "88";
 comments[64] = "Id Pregunta: 5256. ";


//  Id pregunta: 5286 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  Indique cu&aacute;l de las siguientes opciones no se corresponde al modelo .NET de desarrollo:";
 choices[65]= new Array();
 choices[65][0] = "Interface Definition Language";
 choices[65][1] = "Common Type System";
 choices[65][2] = "Base Class Library";
 choices[65][3] = "Common Language Runtime";
 answers[65] = choices[65][0];
 units[65] = "115";
 comments[65] = "Id Pregunta: 5286. ";


//  Id pregunta: 5524 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Indicar la respuesta falsa";
 choices[66]= new Array();
 choices[66][0] = "BMP es un formato de im&aacute;genes sin p&eacute;rdidas que no soporta animaciones ni fondos transparentes";
 choices[66][1] = "GIFF es un formato de im&aacute;genes que utiliza el algoritmo de compresi&oacute;n LZW y es v&aacute;lido para animaciones y fondos transparentes";
 choices[66][2] = "El formato JPEG sin p&eacute;rdidas permite multip&aacute;gina y es muy adecuado para conservar originales a alta resoluci&oacute;n";
 choices[66][3] = "PNG es un formato sin p&eacute;rdida recomendado por el W3C para la publicaci&oacute;n en web";
 answers[66] = choices[66][2];
 units[66] = "93";
 comments[66] = "Id Pregunta: 5524. ";


//  Id pregunta: 5559 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  En base al TRLPI (RD 1/1996) y las modificaciones introducidas por la Ley 23/2006:";
 choices[67]= new Array();
 choices[67][0] = "La copia privada se entiende como un derecho de los usuarios.";
 choices[67][1] = "Este derecho de copia privada da lugar al establecimiento de una remuneraci&oacute;n compensatoria para los autores.";
 choices[67][2] = "Dicha remuneraci&oacute;n compensatoria aplica tambi&eacute;n a los programas de ordenador y bases de datos.";
 choices[67][3] = "El canon aplicado a los equipos de reproducci&oacute;n digitales deber&aacute; revisarse cada 2 a&ntilde;os.";
 answers[67] = choices[67][3];
 units[67] = "37";
 comments[67] = "Id Pregunta: 5559. ";


//  Id pregunta: 5666 Año de creación de pregunta: 2003-01-01
 questions[68]= "69)  La cl&aacute;usula 1 del Manual Europeo para las Compras P&uacute;blicas de Sistemas Abiertos (EPHOS 2) establece que:";
 choices[68]= new Array();
 choices[68][0] = "El cableado ser&aacute; conforme a EIA/TIA 568";
 choices[68][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en IS 8802-3.";
 choices[68][2] = "El cableado ser&aacute; conforme a ISO/IEC DIS 11801";
 choices[68][3] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en EN 50081-1";
 answers[68] = choices[68][2];
 units[68] = "99";
 comments[68] = "Id Pregunta: 5666. ";


//  Id pregunta: 5705 Año de creación de pregunta: 2003-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; asociado a los servicios web?";
 choices[69]= new Array();
 choices[69][0] = "SOAP";
 choices[69][1] = " UDDI";
 choices[69][2] = "CORBA";
 choices[69][3] = "HTTP";
 answers[69] = choices[69][2];
 units[69] = "51";
 comments[69] = "Id Pregunta: 5705. ";


//  Id pregunta: 5721 Año de creación de pregunta: 2009-01-01
 questions[70]= "71)  El XSLT transforma:";
 choices[70]= new Array();
 choices[70][0] = "S&oacute;lo de XML a XML";
 choices[70][1] = "De XML a otro documento";
 choices[70][2] = "S&oacute;lo de XML a HTML";
 choices[70][3] = "De un documento a XML";
 answers[70] = choices[70][1];
 units[70] = "69";
 comments[70] = "Id Pregunta: 5721. MAP 2008 A1";


//  Id pregunta: 5813 Año de creación de pregunta: 2009-01-01
 questions[71]= "72)  El sistema inform&aacute;tico que soporte el perfil de contratante deber&aacute; contar con un dispositivo que acredite (art&iacute;culo 53.3 RD Legislativo 3/2011):";
 choices[71]= new Array();
 choices[71][0] = "El responsable de la informaci&oacute;n publicada";
 choices[71][1] = "El momento de inicio de la difusi&oacute;n p&uacute;blica de la informaci&oacute;n";
 choices[71][2] = "Los plazos que hay que cumplir en el procedimiento";
 choices[71][3] = "La fecha y hora exactas de la adjudicaci&oacute;n de un contrato";
 answers[71] = choices[71][1];
 units[71] = "41";
 comments[71] = "Id Pregunta: 5813. ";


//  Id pregunta: 5830 Año de creación de pregunta: 2009-01-01
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n incorrecta respecto a la licencia EUPL.";
 choices[72]= new Array();
 choices[72][0] = "Con estte tipo de licencia las administraciones pueden ser proveedoras de software open source ente ellas, reutilizando lo que otros han hecho y mejor&aacute;ndolo.";
 choices[72][1] = "Es equivalente a las licencias GNU GPL y se pueden usar indistintamente, s&oacute;lo que EUPL aplica &uacute;nicamente en europa.";
 choices[72][2] = "Una de las novedades que introduce es la variedad de idiomas en los que est&aacute; disponible.";
 choices[72][3] = "Es una licencia compatible con otras licencias copyleft";
 answers[72] = choices[72][1];
 units[72] = "36,37";
 comments[72] = "Id Pregunta: 5830. ";


//  Id pregunta: 5838 Año de creación de pregunta: 2009-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes NO es una herramienta TAW (Test de Accesibilidad Web)?";
 choices[73]= new Array();
 choices[73][0] = "TAW3 Online";
 choices[73][1] = "TAW3 Web Start";
 choices[73][2] = "TAW3 Onsite";
 choices[73][3] = "TAW3 en un clic";
 answers[73] = choices[73][2];
 units[73] = "39";
 comments[73] = "Id Pregunta: 5838. MAP 2008 A1";


//  Id pregunta: 5877 Año de creación de pregunta: 2009-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes afirmaciones es CIERTA para los sistemas de comunicaciones m&oacute;viles?:";
 choices[74]= new Array();
 choices[74][0] = "La implementaci&oacute;n de Clase 1 de WTLS para WAP proporciona autenticaci&oacute;n terminal-servidor";
 choices[74][1] = "Con WTLS la negociaci&oacute;n de los datagramas se hace mediante UDP";
 choices[74][2] = "WTLS no admite la utilizaci&oacute;n de algoritmos criptogr&aacute;ficos basados en curvas el&iacute;pticas";
 choices[74][3] = "WML es el lenguaje de navegaci&oacute;n para terminales m&oacute;viles WAP";
 answers[74] = choices[74][3];
 units[74] = "108";
 comments[74] = "Id Pregunta: 5877. MAP 2008 A1";


//  Id pregunta: 5899 Año de creación de pregunta: 2009-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es JPA?";
 choices[75]= new Array();
 choices[75][0] = "Una tecnolog&iacute;a Java de acceso a bases de datos alternativa a JDBC y con la cu&aacute;l no tiene nada que ver";
 choices[75][1] = "Una tecnolog&iacute;a Java de acceso a bases de datos de mayor nivel que JDBC, en la cu&aacute;l se apoya";
 choices[75][2] = "Es la capa que soporta la portabilidad entre gestores de bases de datos en JDBC";
 choices[75][3] = "Ninguna de las anteriores";
 answers[75] = choices[75][1];
 units[75] = "60";
 comments[75] = "Id Pregunta: 5899. ";


//  Id pregunta: 6056 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  La norma ISO/IEC 15408 Evaluation Criteria for IT Security (informalmente conocida como Common Criteria):";
 choices[76]= new Array();
 choices[76][0] = "Establece una escala creciente de confianza en la seguridad del producto evaluado, que va desde el Evaluation Assurement Level (EAL) 0 al EAL 7.";
 choices[76][1] = "Establece perfiles de protecci&oacute;n, que deben ser elaborados por ISO/IEC.";
 choices[76][2] = "Permite certificar sistemas, productos y algoritmos criptogr&aacute;ficos.";
 choices[76][3] = "Figura como criterio de evaluaci&oacute;n en la Orden PRE/2740/2007 por la que se aprueba el Reglamento de evaluaci&oacute;n y certificaci&oacute;n de la seguridad de las TI.";
 answers[76] = choices[76][3];
 units[76] = "74";
 comments[76] = "Id Pregunta: 6056. TIC A 2009";


//  Id pregunta: 6123 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[77]= new Array();
 choices[77][0] = "Todos.";
 choices[77][1] = "Ninguno";
 choices[77][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[77][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[77] = choices[77][2];
 units[77] = "30";
 comments[77] = "Id Pregunta: 6123. TIC A 2009";


//  Id pregunta: 6353 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes no es un objetivo o principio de la ley 9/2014?";
 choices[78]= new Array();
 choices[78][0] = "Fomentar la competencia efectiva en los mercados de telecomunicaciones";
 choices[78][1] = "Fomentar, en la medida de lo posible, la neutralidad tecnol&oacute;gica en la regulaci&oacute;n.";
 choices[78][2] = "Promover el desarrollo de la Sociedad de la Informaci&oacute;n";
 choices[78][3] = "Hacer posible el uso eficaz de los recursos limitados de telecomunicaciones";
 answers[78] = choices[78][2];
 units[78] = "110";
 comments[78] = "Id Pregunta: 6353. ";


//  Id pregunta: 6434 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  En el modelo entidad/relaci&oacute;n la forma de representar una entidad es:";
 choices[79]= new Array();
 choices[79][0] = "Mediante un rombo y en el interior del mismo el nombre de la entidad.";
 choices[79][1] = "Mediante un rect&aacute;ngulo y en el interior del mismo el nombre de la entidad.";
 choices[79][2] = "Mediante un elipse y en el interior del mismo el nombre de la entidad.";
 choices[79][3] = "Mediante un tri&aacute;ngulo invertido y el nombre de la entidad en una elipse unida al tri&aacute;ngulo mediante una l&iacute;nea.";
 answers[79] = choices[79][1];
 units[79] = "70";
 comments[79] = "Id Pregunta: 6434. ";


//  Id pregunta: 6574 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[80]= new Array();
 choices[80][0] = "ICMP trabaja en la capa de enlace";
 choices[80][1] = "ICMP informa a los hosts, routers y otros dispositivos de problemas en la red";
 choices[80][2] = "ICMP es el principal componente de la utilidad ping";
 choices[80][3] = "Todas las respuestas anteriores son correctas";
 answers[80] = choices[80][0];
 units[80] = "100";
 comments[80] = "Id Pregunta: 6574. ";


//  Id pregunta: 6603 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  Indicar cual de las siguientes opciones NO es un contrato de suministro:";
 choices[81]= new Array();
 choices[81][0] = "La compra de un ERP";
 choices[81][1] = "El mantenimiento de las licencias del SGBD";
 choices[81][2] = "El mantenimiento de la aplicaci&oacute;n que usa el SGBD";
 choices[81][3] = "El alquiler del sistema de telecomunicaciones";
 answers[81] = choices[81][2];
 units[81] = "41";
 comments[81] = "Id Pregunta: 6603. ";


//  Id pregunta: 6613 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  Entre los objetivos de M&eacute;trica est&aacute;n:";
 choices[82]= new Array();
 choices[82][0] = "Definir Sistemas de Informaci&oacute;n que ayuden a conseguir los fines de la Organizaci&oacute;n y Mejorar la productividad de los departamentos de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[82][1] = "Facilitar la comunicaci&oacute;n y entendimiento entre los distintos participantes y facilitar la operaci&oacute;n, mantenimiento y uso de los productos software obtenidos.";
 choices[82][2] = "a y b";
 choices[82][3] = "Ninguno ya que M&eacute;trica no entra en los fines de la Organizaci&oacute;n, en la productividad, en la comunicaci&oacute;n ni en la operaci&oacute;n de los productos.";
 answers[82] = choices[82][2];
 units[82] = "86";
 comments[82] = "Id Pregunta: 6613. ";


//  Id pregunta: 7926 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)   &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[83]= new Array();
 choices[83][0] = " La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux.";
 choices[83][1] = " El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos.";
 choices[83][2] = " La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK.";
 choices[83][3] = " La arquitectura actual de componentes de GNOME se denomina Bonobo.";
 answers[83] = choices[83][0];
 units[83] = "NULL";
 comments[83] = "Id Pregunta: 7926. Map 2006";


//  Id pregunta: 8052 Año de creación de pregunta: 2010-01-01
 questions[84]= "85)   &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[84]= new Array();
 choices[84][0] = " El W3C tiene una sede en Espa&ntilde;a.";
 choices[84][1] = " W3C es un organismo estadounidense.";
 choices[84][2] = " El Ministerio de Administraciones P&uacute;blicas es miembro del W3C.";
 choices[84][3] = " W3C ha desarrollado mecanismos para evaluar el nivel de accesibilidad de los sitios web.";
 answers[84] = choices[84][1];
 units[84] = "NULL";
 comments[84] = "Id Pregunta: 8052. Map 2007";


//  Id pregunta: 8116 Año de creación de pregunta: 2010-01-01
 questions[85]= "86)   Los fabricantes e investigadores hacen referencia a diversos factores determinantes en la calidad de la trasmisi&oacute;n de la voz, de entre los siguientes, determine el &laquo;cr&iacute;tico&raquo; para aplicaciones de tiempo real como la voz y el v&iacute;deo sobre IP:";
 choices[85]= new Array();
 choices[85][0] = " Jitter.";
 choices[85][1] = " Throughput.";
 choices[85][2] = " Delay.";
 choices[85][3] = " Packet Loss.";
 answers[85] = choices[85][0];
 units[85] = "NULL";
 comments[85] = "Id Pregunta: 8116. Map 2008";


//  Id pregunta: 8177 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es la afirmaci&oacute;n INCORRECTA respecto a los Sistemas de Cableado?:";
 choices[86]= new Array();
 choices[86][0] = "Las ventanas hist&oacute;ricamente definidas para transmisi&oacute;n en fibra &oacute;ptica se encuentran situadas alrededor de los 850, 1310 y 1550 nm.";
 choices[86][1] = "La diafon&iacute;a se clasifica en paradiafon&iacute;a y telediafon&iacute;a.";
 choices[86][2] = "La propagaci&oacute;n en las fibras &oacute;pticas depende de la reflexi&oacute;n interna que se produce gracias a que el revestimiento tiene un &iacute;ndice de refracci&oacute;n mayor que el del n&uacute;cleo.";
 choices[86][3] = "La fibra monomodo se puede lograr reduciendo el di&aacute;metro del n&uacute;cleo.";
 answers[86] = choices[86][2];
 units[86] = "99";
 comments[86] = "Id Pregunta: 8177. Examen TIC A1 2010";


//  Id pregunta: 8218 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  La distancia de Hamming entre las palabras 01000 y 01010 es:";
 choices[87]= new Array();
 choices[87][0] = "1";
 choices[87][1] = "2";
 choices[87][2] = "3";
 choices[87][3] = "4";
 answers[87] = choices[87][0];
 units[87] = "45";
 comments[87] = "Id Pregunta: 8218. Examen TIC A1 2010";


//  Id pregunta: 8296 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 134.141.0.0/24, sin considerar las direcciones de subred y de broadcast? ";
 choices[88]= new Array();
 choices[88][0] = "256";
 choices[88][1] = "254";
 choices[88][2] = "30";
 choices[88][3] = "64";
 answers[88] = choices[88][1];
 units[88] = "100";
 comments[88] = "Id Pregunta: 8296. Examen TIC A2 2010";


//  Id pregunta: 8386 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos es una prueba de caja blanca?";
 choices[89]= new Array();
 choices[89][0] = "Prueba de la tabla ortogonal.";
 choices[89][1] = "Partici&oacute;n equivalente.";
 choices[89][2] = "M&eacute;todos de prueba basados en grafos.";
 choices[89][3] = "Prueba del camino b&aacute;sico.";
 answers[89] = choices[89][3];
 units[89] = "91";
 comments[89] = "Id Pregunta: 8386. Examen TIC A2 2010";


//  Id pregunta: 8407 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO corresponde a una unidad de estado s&oacute;lido (SSD)? ";
 choices[90]= new Array();
 choices[90][0] = "No contiene partes m&oacute;viles. ";
 choices[90][1] = "Son discos menos ruidosos que los magn&eacute;ticos. ";
 choices[90][2] = "El precio por MB es menor que en los discos magn&eacute;ticos";
 choices[90][3] = "Existen para varias &iacute;nterfaces (SATA, PATA, etc.)";
 answers[90] = choices[90][2];
 units[90] = "48";
 comments[90] = "Id Pregunta: 8407. Examen TIC A2 2010";


//  Id pregunta: 8428 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes normas del IEEE se utiliza para el control de acceso a red basada en puertos?";
 choices[91]= new Array();
 choices[91][0] = "802.1x";
 choices[91][1] = "802.3.ay";
 choices[91][2] = "802.11";
 choices[91][3] = "802.3.q";
 answers[91] = choices[91][0];
 units[91] = "101";
 comments[91] = "Id Pregunta: 8428. ";


//  Id pregunta: 8590 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes utilidades permite desarrollar en JAVA?";
 choices[92]= new Array();
 choices[92][0] = "JRE";
 choices[92][1] = "M&aacute;quina Virtual de Java";
 choices[92][2] = "JDK";
 choices[92][3] = "AWT";
 answers[92] = choices[92][2];
 units[92] = "116";
 comments[92] = "Id Pregunta: 8590. Examen TIC A2 2010 interna";


//  Id pregunta: 8668 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  Los cortafuegos de filtrado de paquetes &iquest;en qu&eacute; capa TCP/IP act&uacute;an?";
 choices[93]= new Array();
 choices[93][0] = "Capa IP";
 choices[93][1] = "Capa de Aplicaci&oacute;n";
 choices[93][2] = "Capa de Sesi&oacute;n";
 choices[93][3] = "Capa de Transporte";
 answers[93] = choices[93][0];
 units[93] = "111";
 comments[93] = "Id Pregunta: 8668. Examen UPM A2 2011";


//  Id pregunta: 8781 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[94]= new Array();
 choices[94][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[94][1] = "En el Registro Civil.";
 choices[94][2] = "En el Registro Mercantil.";
 choices[94][3] = "En el Registro General del Ministerio de Justicia.";
 answers[94] = choices[94][0];
 units[94] = "29";
 comments[94] = "Id Pregunta: 8781. Examen UPM A2 2011";


//  Id pregunta: 8785 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  OLAP proporciona mayor velocidad de procesamiento en la sentencia SQL";
 choices[95]= new Array();
 choices[95][0] = "INSERT";
 choices[95][1] = "UPDATE";
 choices[95][2] = "DELETE";
 choices[95][3] = "SELECT";
 answers[95] = choices[95][3];
 units[95] = "57, 58";
 comments[95] = "Id Pregunta: 8785. Examen UPM A2 2011";


//  Id pregunta: 8792 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  El listado que resulta de ejecutar en un sistema GNU/Linux el comando &quot;cat /etc/passwd | cut -d: -f3,7&quot; contendr&aacute; los campos:";
 choices[96]= new Array();
 choices[96][0] = "Nombre de usuario y shell";
 choices[96][1] = "Contrase&ntilde;a de usuario y home";
 choices[96][2] = "uid y shell";
 choices[96][3] = "gid y home";
 answers[96] = choices[96][2];
 units[96] = "53, 54";
 comments[96] = "Id Pregunta: 8792. Examen UPM A2 2011";


//  Id pregunta: 9013 Año de creación de pregunta: 2011-01-01
 questions[97]= "98)  A la hora de planificar las frecuencias para un radioenlace de dos vanos A-B y B-C en la banda de 13 GHz:";
 choices[97]= new Array();
 choices[97][0] = "Si en el punto intermedio B se recibe en la semibanda baja, en B se debe transmitir en la semibanda alta.";
 choices[97][1] = "Para un sentido de transmisi&oacute;n dado, se deben emplear la misma semibanda en los dos vanos A-B y B-C.";
 choices[97][2] = "Siempre se debe respetar el sentido (transmisi&oacute;n o recepci&oacute;n) asignado a cada semibanda en el CNAF para la banda de 1GHz.";
 choices[97][3] = "Ninguna de las anteriores";
 answers[97] = choices[97][0];
 units[97] = "108";
 comments[97] = "Id Pregunta: 9013. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9031 Año de creación de pregunta: 2011-01-01
 questions[98]= "99)  &iquest;Qu&eacute; tecnolog&iacute;a utiliza utiliza en exclusiva una modulacu&oacute;n DSSS?";
 choices[98]= new Array();
 choices[98][0] = "802.11a";
 choices[98][1] = "802.11b";
 choices[98][2] = "802.11g";
 choices[98][3] = "802.11n";
 answers[98] = choices[98][1];
 units[98] = "107";
 comments[98] = "Id Pregunta: 9031. ";


//  Id pregunta: 9452 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  Aquellas pruebas que se realizan en el entorno de desarrollo y tienen como objetivo verificar el funcionamiento global del sistema de informaci&oacute;n completo se denominan:";
 choices[99]= new Array();
 choices[99][0] = "Pruebas unitarias.";
 choices[99][1] = "Pruebas de integraci&oacute;n.";
 choices[99][2] = "Pruebas del sistema.";
 choices[99][3] = "Pruebas de implantaci&oacute;n.";
 answers[99] = choices[99][2];
 units[99] = "86";
 comments[99] = "Id Pregunta: 9452. Examen AGE TIC A1 2011";


