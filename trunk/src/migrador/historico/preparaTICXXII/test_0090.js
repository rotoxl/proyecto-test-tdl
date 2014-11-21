/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 103 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  Algunas t&eacute;cnicas de ayuda a la toma de decisiones son:";
 choices[0]= new Array();
 choices[0][0] = "Brain-storming, o tormenta de ideas";
 choices[0][1] = "Teor&iacute;a de grafos y an&aacute;lisis de redes";
 choices[0][2] = "Teor&iacute;a de colas o de l&iacute;neas de espera";
 choices[0][3] = "Todas las anteriores";
 answers[0] = choices[0][3];
 units[0] = "23";
 comments[0] = "Id Pregunta: 103. ";


//  Id pregunta: 162 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El representante de Estados Unidos en la ISO es:";
 choices[1]= new Array();
 choices[1][0] = "AENOR";
 choices[1][1] = "BSI";
 choices[1][2] = "IEEE";
 choices[1][3] = "ANSI";
 answers[1] = choices[1][3];
 units[1] = "42";
 comments[1] = "Id Pregunta: 162. ";


//  Id pregunta: 200 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una fase en un proceso de auditor&iacute;a de la gesti&oacute;n de la seguridad inform&aacute;tica de una instalaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Evaluaci&oacute;n de la adecuaci&oacute;n de los controles establecidos";
 choices[2][1] = "Realizaci&oacute;n de entrevistas a usuarios";
 choices[2][2] = "Adquisici&oacute;n del conocimiento necesario mediante la identificaci&oacute;n y documentaci&oacute;n del entorno y de la gesti&oacute;n";
 choices[2][3] = "Ejecuci&oacute;n de pruebas sustantivas";
 answers[2] = choices[2][3];
 units[2] = "33";
 comments[2] = "Id Pregunta: 200. Examen TIC MAP B 2004";


//  Id pregunta: 227 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En las alternativas de decisi&oacute;n respecto al equipamiento HW y SW: ";
 choices[3]= new Array();
 choices[3][0] = "En la licencia de red, la cesi&oacute;n de uso del producto se extiende a todos o parte de los usuarios conectados a una red de &aacute;rea local";
 choices[3][1] = "La licencia flotante se refiere a la determinaci&oacute;n de la facturaci&oacute;n en funci&oacute;n del n&uacute;mero de usuarios simult&aacute;neos autorizados al uso del producto";
 choices[3][2] = "Las opciones a) y b) son correctas";
 choices[3][3] = "Las opciones a) y b) no son correctas";
 answers[3] = choices[3][2];
 units[3] = "35";
 comments[3] = "Id Pregunta: 227. ";


//  Id pregunta: 368 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Los est&aacute;ndares en la industria y la tecnolog&iacute;a deben ser producidos:";
 choices[4]= new Array();
 choices[4][0] = "Siempre, en todos los casos, para evitar monopolios";
 choices[4][1] = "Cuando la tecnolog&iacute;a est&eacute; madura pero a&uacute;n no hay inversiones en implementaciones propietarias, para beneficiar tanto a usuarios como a la industria";
 choices[4][2] = "Antes de que madure la tecnolog&iacute;a, para contribuir a una madurez consensuada";
 choices[4][3] = "Nunca, ya que pone en desventaja a aquellos que comenzaron a investigar en dicha tecnolog&iacute;a";
 answers[4] = choices[4][1];
 units[4] = "42";
 comments[4] = "Id Pregunta: 368. ";


//  Id pregunta: 476 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Utilizando el m&eacute;todo PERT y suponiendo un proyecto con una actividad con una duraci&oacute;n estimada optimista de 8 d&iacute;as, pesimista de 16 d&iacute;as y m&aacute;s probable de 9 d&iacute;as, &iquest;cu&aacute;l es el tiempo PERT o duraci&oacute;n esperada de dicha actividad?:";
 choices[5]= new Array();
 choices[5][0] = "12";
 choices[5][1] = "11";
 choices[5][2] = "10";
 choices[5][3] = "9";
 answers[5] = choices[5][2];
 units[5] = "28";
 comments[5] = "Id Pregunta: 476. ";


//  Id pregunta: 572 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  Seg&uacute;n Zerilli ";
 choices[6]= new Array();
 choices[6][0] = "la direcci&oacute;n se entiende como: &quot;El proceso de gu&iacute;a y constante adaptaci&oacute;n de unaorganizaci&oacute;n, a trav&eacute;s de un preciso esquema l&oacute;gico de acci&oacute;n, para la consecuci&oacute;n en el m&aacute;ximo grado y con la m&aacute;ximaeficiencia de los objetivos de dicha organizaci&oacute;n&quot;.";
 choices[6][1] = "&quot;...un sistema de informaci&oacute;n que empieza a explotar el potencial del tratamiento de lainformaci&oacute;n que no quedar&aacute; reducido al papel de soporte administrativo del tratamiento de datos de rutina. En realidad,se convertir&aacute; en un recurso estrat&eacute;gico";
 choices[6][2] = "&quot;...un sistema de informaci&oacute;n que empieza a explotar el potencial del tratamiento de lainformaci&oacute;n que tiene como fin  el  soporte administrativo del tratamiento de datos de rutina. En realidad,se convertir&aacute; en un recurso estrat&eacute;gico";
 choices[6][3] = "la direcci&oacute;n se entiende como: &quot;El proceso de gu&iacute;a y constante adaptaci&oacute;n de unaorganizaci&oacute;n, a trav&eacute;s de la actitud proactiva del individuo, para la consecuci&oacute;n en el m&aacute;ximo grado y con la m&aacute;ximaeficiencia de los objetivos de dicha organizaci&oacute;n&quot;.";
 answers[6] = choices[6][0];
 units[6] = "23";
 comments[6] = "Id Pregunta: 572. ";


//  Id pregunta: 590 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Entre las actividades de planificaci&oacute;n de proyectos no se encuentra:";
 choices[7]= new Array();
 choices[7][0] = "An&aacute;lisis operacional.";
 choices[7][1] = "Dise&ntilde;o t&eacute;cnico.";
 choices[7][2] = "An&aacute;lisis de riesgos.";
 choices[7][3] = "Definici&oacute;n de los requerimientos.";
 answers[7] = choices[7][1];
 units[7] = "27";
 comments[7] = "Id Pregunta: 590. ";


//  Id pregunta: 643 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  Cu&aacute;l de las siguientes afirmaciones sobre X/OPEN es incorrecta:";
 choices[8]= new Array();
 choices[8][0] = "POSIX (Portable Operating System Interface), creado por X/OPEN, consite en la creaci&oacute;n de interfaces est&aacute;ndares de sistema operativo.";
 choices[8][1] = "CAE (common Application Enviroment), creado por X/OPEN, est&aacute; basado en est&aacute;ndares internacionales y de hecho.";
 choices[8][2] = "XPG es la gu&iacute;a de portabilidad de X/OPEN";
 choices[8][3] = "X/Open es una compa&ntilde;&iacute;a independiente, sin &aacute;nimo de lucro, compuesta por usuarios, vendedores independientes de software y vendedores de sistemas inform&aacute;ticos de todo el mundo.";
 answers[8] = choices[8][0];
 units[8] = "40";
 comments[8] = "Id Pregunta: 643. ";


//  Id pregunta: 698 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  Un sistema multiproceso NUMA se diferencia de uno SMP en:";
 choices[9]= new Array();
 choices[9][0] = "Su menor escalabilidad.";
 choices[9][1] = "Su utilizaci&oacute;n de una red de &aacute;rea local en lugar de un bus para la comunicaci&oacute;n entre CPU's.";
 choices[9][2] = "Su utilizaci&oacute;n de m&aacute;s de un bus para comunicar CPU's y memoria.";
 choices[9][3] = "Su falta de mecanismos de coherencia de cache.";
 answers[9] = choices[9][2];
 units[9] = "45";
 comments[9] = "Id Pregunta: 698. ";


//  Id pregunta: 863 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes entornos UNIX  no puede ser considerado como SVR4?:";
 choices[10]= new Array();
 choices[10][0] = "4.2 BSD";
 choices[10][1] = "Solaris 2.3";
 choices[10][2] = "Unixware";
 choices[10][3] = "HP-UX";
 answers[10] = choices[10][0];
 units[10] = "53";
 comments[10] = "Id Pregunta: 863. ";


//  Id pregunta: 1050 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  El Registro de Instrucciones es un &oacute;rgano de control del procesador que sirve para:";
 choices[11]= new Array();
 choices[11][0] = "Llevar el control de las instrucciones m&aacute;quina que se van ejecutando";
 choices[11][1] = "Almacenar la instrucci&oacute;n que se ha de decodificar y ejecutar";
 choices[11][2] = "Es un contador que se va incrementado con los pulsos del reloj maestro";
 choices[11][3] = "Almacenar la direcci&oacute;n de la instrucci&oacute;n que se va a ejecutar";
 answers[11] = choices[11][1];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1050. ";


//  Id pregunta: 1248 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  La Unidad de Control (UC) puede construirse con diferentes m&eacute;todos:";
 choices[12]= new Array();
 choices[12][0] = "L&oacute;gica cableada, se construye mediante puertas l&oacute;gicas y es m&aacute;s r&aacute;pida que la l&oacute;gica programada";
 choices[12][1] = "La UC microprogramada se suele utilizar en ordenadores de tama&ntilde;o medio, en los grandes es demasiado lenta";
 choices[12][2] = "La microprogramaci&oacute;n permite introducir instrucciones complejas, pero las modificaciones y correcciones son dif&iacute;ciles de implementar";
 choices[12][3] = "El dise&ntilde;o en microprogramaci&oacute;n es m&aacute;s laborioso y costoso";
 answers[12] = choices[12][1];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1248. ";


//  Id pregunta: 1358 Año de creación de pregunta: 2005-01-01
 questions[13]= "14)  &iquest;Qu&eacute; se conoce por SHA-2?:";
 choices[13]= new Array();
 choices[13][0] = "Una funci&oacute;n de compresi&oacute;n";
 choices[13][1] = "Un mecanismo de intercambio de claves";
 choices[13][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[13][3] = "Un conjunto de funciones resumen";
 answers[13] = choices[13][3];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1358. ";


//  Id pregunta: 1470 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Los perif&eacute;ricos conocidos como &quot;Pen-drive&quot; son:";
 choices[14]= new Array();
 choices[14][0] = "Unidades del tama&ntilde;o de un bol&iacute;grafo o un mechero que permiten aumentar la memoria RAM del ordenador o bien a&ntilde;adir un nuevo disco duro port&aacute;til y extra&iacute;ble";
 choices[14][1] = "L&aacute;pices &oacute;pticos que permiten dibujar en tabletas digitalizadoras y pantallas t&aacute;ctiles";
 choices[14][2] = "Esc&aacute;neres de mano de alta precisi&oacute;n";
 choices[14][3] = "Lectores de c&oacute;digos de barras de &uacute;ltima generaci&oacute;n";
 answers[14] = choices[14][0];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1470. ";


//  Id pregunta: 1536 Año de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest; Cu&aacute;l es el t&eacute;rmino con el que se denomina la personalizaci&oacute;n en apariencia y prestaciones de un ordenador ?";
 choices[15]= new Array();
 choices[15][0] = "Mobbing";
 choices[15][1] = "e-learning";
 choices[15][2] = "Modding";
 choices[15][3] = "customizing";
 answers[15] = choices[15][2];
 units[15] = "2009";
 comments[15] = "Id Pregunta: 1536. ";


//  Id pregunta: 1540 Año de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;Qu&eacute; es MOSIX?";
 choices[16]= new Array();
 choices[16][0] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Linux basados en el procesador x86";
 choices[16][1] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Unix";
 choices[16][2] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Linux";
 choices[16][3] = "MOSIX es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Unix basados en el procesador x86";
 answers[16] = choices[16][0];
 units[16] = "55";
 comments[16] = "Id Pregunta: 1540. ";


//  Id pregunta: 1706 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se dispone &uacute;nicamente de dos discos, con los que se pretende implementar una matriz redundante (RAID) con tolerancia a fallos y con el mejor rendimiento posible tanto en lectura como en escritura, &iquest;qu&eacute; tipo escoger&iacute;a?";
 choices[17]= new Array();
 choices[17][0] = "RAID-0";
 choices[17][1] = "RAID-1";
 choices[17][2] = "RAID-3";
 choices[17][3] = "RAID-0 &oacute; RAID-1";
 answers[17] = choices[17][1];
 units[17] = "48";
 comments[17] = "Id Pregunta: 1706. ";


//  Id pregunta: 1779 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[18]= new Array();
 choices[18][0] = "Tomcat";
 choices[18][1] = "Geronimo";
 choices[18][2] = "JBoss";
 choices[18][3] = "Los 3 lo son";
 answers[18] = choices[18][0];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1779. ";


//  Id pregunta: 2049 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  En M&eacute;trica V3 no son T&eacute;cnicas de Gesti&oacute;n de Proyectos:";
 choices[19]= new Array();
 choices[19][0] = "WBS";
 choices[19][1] = "MARK II";
 choices[19][2] = "JAD";
 choices[19][3] = "PERT";
 answers[19] = choices[19][2];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2049. ";


//  Id pregunta: 2108 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas/pr&aacute;cticas se utilizar&aacute;n en todas las actividades del proceso de Mantenimiento de sistemas de informaci&oacute;n siguiendo METRICA V3?";
 choices[20]= new Array();
 choices[20][0] = "An&aacute;lisis de impacto";
 choices[20][1] = "Catalogaci&oacute;n";
 choices[20][2] = "Planificaci&oacute;n ";
 choices[20][3] = "Pruebas de regresi&oacute;n";
 answers[20] = choices[20][1];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2108. Pregunta Junta Andalucia - A";


//  Id pregunta: 2145 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes es un lenguaje orientado a objetos puro?:";
 choices[21]= new Array();
 choices[21][0] = "Visual Basic";
 choices[21][1] = "C++";
 choices[21][2] = "Smalltalk";
 choices[21][3] = "Todos son h&iacute;bridos";
 answers[21] = choices[21][2];
 units[21] = "82";
 comments[21] = "Id Pregunta: 2145. ";


//  Id pregunta: 2174 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  La definici&oacute;n recursiva de los conceptos de un modelo a partir de elementos del propio modelo se denomina:";
 choices[22]= new Array();
 choices[22][0] = "Intramodelado.";
 choices[22][1] = "Modelado interno.";
 choices[22][2] = "Automodelado.";
 choices[22][3] = "Metamodelado.";
 answers[22] = choices[22][3];
 units[22] = "";
 comments[22] = "Id Pregunta: 2174. ";


//  Id pregunta: 2264 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  El contenido de un plan de sistemas se puede estructurar en un conjunto de proyectos entre los que podemos destacar como fundamentales:";
 choices[23]= new Array();
 choices[23][0] = "Sistemas f&iacute;sicos, l&oacute;gicos, de comunicaciones y de seguridad";
 choices[23][1] = "Estudio, racionalizaci&oacute;n y dise&ntilde;o de la organizaci&oacute;n, instalaciones, dise&ntilde;o del sistema de informaci&oacute;n y presupuesto";
 choices[23][2] = "Organizaci&oacute;n y personal, formaci&oacute;n, implantaci&oacute;n y explotaci&oacute;n, calendario";
 choices[23][3] = "Todas las anteriores respuestas son correctas";
 answers[23] = choices[23][3];
 units[23] = "77";
 comments[23] = "Id Pregunta: 2264. ";


//  Id pregunta: 2399 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  La metodolog&iacute;a M&eacute;trica Versi&oacute;n 3:";
 choices[24]= new Array();
 choices[24][0] = "No incorpora una interface para la gesti&oacute;n de proyectos";
 choices[24][1] = "No incorpora una interface para la gesti&oacute;n de la configuraci&oacute;n";
 choices[24][2] = "Establece que el estudio de viabilidad del sistema queda fuera de la metodolog&iacute;a, al ser previo al desarrollo del sistema de informaci&oacute;n";
 choices[24][3] = "Ha sido concebida para abarcar el desarrollo completo de sistemas de informaci&oacute;n sea cual sea su complejidad y magnitud";
 answers[24] = choices[24][3];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2399. ";


//  Id pregunta: 2470 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  No es un tipo de cohesi&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Logica.";
 choices[25][1] = "Temporal.";
 choices[25][2] = "Funcional.";
 choices[25][3] = "Por estampado.";
 answers[25] = choices[25][3];
 units[25] = "84";
 comments[25] = "Id Pregunta: 2470. ";


//  Id pregunta: 2568 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  Al utilizar la t&eacute;cnica de estimaci&oacute;n Puntos Funci&oacute;n, se tienen en cuenta";
 choices[26]= new Array();
 choices[26][0] = "Entradas externas, ficheros l&oacute;gicos internos y salidas externas";
 choices[26][1] = "Ficheros de interfaz externos y consultas externas";
 choices[26][2] = "Entradas de aplicaciones, consulas y salidas de aplicaciones";
 choices[26][3] = "A y B son correctas";
 answers[26] = choices[26][3];
 units[26] = "89";
 comments[26] = "Id Pregunta: 2568. ";


//  Id pregunta: 2726 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  De los siguientes aspectos, &iquest;cu&aacute;les no deben considerarse a la hora de efectuar unaPlanificaci&oacute;n Estrat&eacute;gica? :";
 choices[27]= new Array();
 choices[27][0] = "La misi&oacute;n del negocio.";
 choices[27][1] = "La situaci&oacute;n de los competidores.";
 choices[27][2] = "Los hitos o puntos clave en el calendario de actuaci&oacute;n.";
 choices[27][3] = "Deben considerarse todos los aspectos anteriores.";
 answers[27] = choices[27][3];
 units[27] = "77";
 comments[27] = "Id Pregunta: 2726. ";


//  Id pregunta: 2882 Año de creación de pregunta: 2006-01-01
 questions[28]= "29)  Indique cu&aacute;l de las siguientes reglas es cierta  con respecto al Flujo de Datos, como elemento de un DFD:";
 choices[28]= new Array();
 choices[28][0] = "No puede crear ni destruir los datos";
 choices[28][1] = "Puede transformar un dato en varios";
 choices[28][2] = "Activa Procesos";
 choices[28][3] = "Transforma los flujos de datos de entrada en flujos de salida de datos";
 answers[28] = choices[28][0];
 units[28] = "81";
 comments[28] = "Id Pregunta: 2882. ";


//  Id pregunta: 3187 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguiente elementos residen en la capa de aplicaci&oacute;n de la pila TCP/IP?:";
 choices[29]= new Array();
 choices[29][0] = "TFTP";
 choices[29][1] = "FTP";
 choices[29][2] = "DNS";
 choices[29][3] = "Todos los anteriores  ";
 answers[29] = choices[29][3];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3187. ";


//  Id pregunta: 3291 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Qu&eacute; estandariza el est&aacute;ndar MIME?:";
 choices[30]= new Array();
 choices[30][0] = "Protocolo de acceso al correo electr&oacute;nico";
 choices[30][1] = "Seguridad en Sistemas de correo electr&oacute;nico";
 choices[30][2] = "Transferencia de documentos multimedia a trav&eacute;s de correo electr&oacute;nico";
 choices[30][3] = "Agenda de direcciones de correo electr&oacute;nico";
 answers[30] = choices[30][2];
 units[30] = "106";
 comments[30] = "Id Pregunta: 3291. ";


//  Id pregunta: 3293 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Qu&eacute; funci&oacute;n principal realiza una PABX?:";
 choices[31]= new Array();
 choices[31][0] = "Conmutaci&oacute;n";
 choices[31][1] = "Recogida de informaci&oacute;n de gesti&oacute;n de red";
 choices[31][2] = "Visualizaci&oacute;n de informaci&oacute;n de gesti&oacute;n de red";
 choices[31][3] = "Consulta bajo demanda de la informaci&oacute;n de gesti&oacute;n de red";
 answers[31] = choices[31][0];
 units[31] = "103";
 comments[31] = "Id Pregunta: 3293. ";


//  Id pregunta: 3514 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  En el protocolo IPv6:";
 choices[32]= new Array();
 choices[32][0] = "El campo 'Hop Limit' es similar al TTL en IP v4";
 choices[32][1] = "Los campos de direcciones tienen 128 bits de longitud";
 choices[32][2] = "No existe ning&uacute;n campo CRC de cabecera";
 choices[32][3] = "Todas las anteriores respuestas son correctas";
 answers[32] = choices[32][3];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3514. ";


//  Id pregunta: 3537 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  En las transmisi&oacute;n de datos en tramas se suele incluir un campo denominado CRC. Indique cu&aacute;l de las opciones le parece correcta:";
 choices[33]= new Array();
 choices[33][0] = "Es un campo que indica el final de la trama y prepara al equipo receptor para la siguiente";
 choices[33][1] = "Es un campo de control del n&uacute;mero de bits incluidos en la trama, para conocer el final de la misma";
 choices[33][2] = "Es un campo de control de integridad de la trama, sirve para comprobar la ocurrencia de ciertos errores en la transmisi&oacute;n";
 choices[33][3] = "Es un campo de control de integridad de la trama, sirve para detectar cualquier error en la transmisi&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "101";
 comments[33] = "Id Pregunta: 3537. ";


//  Id pregunta: 3562 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  En un domicilio particular abonado a un &quot;acceso b&aacute;sico&quot; de RDSI:";
 choices[34]= new Array();
 choices[34][0] = "Siempre puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica";
 choices[34][1] = "No puede estar conectado a Internet ya su vez recibir una llamada telef&oacute;nica";
 choices[34][2] = "Puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica, solo en el caso de que disponga de un &quot;m&oacute;dem&quot; ADSL";
 choices[34][3] = "Ninguna de las anteriores es correcta";
 answers[34] = choices[34][0];
 units[34] = "103";
 comments[34] = "Id Pregunta: 3562. ";


//  Id pregunta: 3573 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  En una conexi&oacute;n V.90:";
 choices[35]= new Array();
 choices[35][0] = "Los m&oacute;dems siempre han de sincronizarse a 56k.";
 choices[35][1] = "Los m&oacute;dems no establecen protocolo de negociaci&oacute;n de par&aacute;metros previo a la conexi&oacute;n.";
 choices[35][2] = "La negociaci&oacute;n se hace v&iacute;a protocolos TCP.";
 choices[35][3] = "La velocidad de conexi&oacute;n se negocia entre los dos m&oacute;dem de acuerdo a las caracter&iacute;sticas de la l&iacute;nea.";
 answers[35] = choices[35][3];
 units[35] = "100, 103";
 comments[35] = "Id Pregunta: 3573. modems";


//  Id pregunta: 3611 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  La interconexi&oacute;n de intranets puede llevarse a cabo mediante:";
 choices[36]= new Array();
 choices[36][0] = "repetidores y concentradores a nivel f&iacute;sico, encaminadores a nivel de enlace, puentes a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[36][1] = "repetidores, concentradores y encaminadores a nivel f&iacute;sico, puentes a nivel de enlace y pasarelas a nivel de aplicaci&oacute;n";
 choices[36][2] = "repetidores y concentradores a nivel f&iacute;sico, puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[36][3] = "repetidores a nivel f&iacute;sico, concentradores y puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 answers[36] = choices[36][2];
 units[36] = "100,103,113";
 comments[36] = "Id Pregunta: 3611. ";


//  Id pregunta: 3621 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  La norma IEEE 802.4 es la especificaci&oacute;n que define la redes:";
 choices[37]= new Array();
 choices[37][0] = "Ethernet";
 choices[37][1] = "Token bus";
 choices[37][2] = "Token ring";
 choices[37][3] = "FDDI";
 answers[37] = choices[37][1];
 units[37] = "101";
 comments[37] = "Id Pregunta: 3621. ";


//  Id pregunta: 3671 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  Una de las siguientes afirmaciones es falsa con respecto a ADSL:";
 choices[38]= new Array();
 choices[38][0] = "El caudal de informaci&oacute;n es mayor en sentido red-usuario que en el sentido contrario";
 choices[38][1] = "La tarificaci&oacute;n no depende del uso sino del ancho de banda contratado";
 choices[38][2] = "Permite navegar por Internet y mantener una conversaci&oacute;n telef&oacute;nica simult&aacute;neamente";
 choices[38][3] = "Hay que hacer un nuevo tendido de cobre entre la central y el domicilio del abonado para poder instalarlo";
 answers[38] = choices[38][3];
 units[38] = "107";
 comments[38] = "Id Pregunta: 3671. ";


//  Id pregunta: 3841 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  SS7 (Signaling System Number 7) forma parte de:";
 choices[39]= new Array();
 choices[39][0] = "RDSI (ISDN)";
 choices[39][1] = "Videotext";
 choices[39][2] = "ATM";
 choices[39][3] = "Frame Relay";
 answers[39] = choices[39][0];
 units[39] = "109";
 comments[39] = "Id Pregunta: 3841. ";


//  Id pregunta: 3872 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes series no es congruente?:";
 choices[40]= new Array();
 choices[40][0] = "http, https.";
 choices[40][1] = "smtp, pop-3, mime.";
 choices[40][2] = "xml, xsl, xjar.";
 choices[40][3] = "direcci&oacute;n IP, m&aacute;scara, dominio.";
 answers[40] = choices[40][2];
 units[40] = "106";
 comments[40] = "Id Pregunta: 3872. Junta Andaluc&iacute;a";


//  Id pregunta: 3926 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cual de los siguientes es un monitor de transacciones?";
 choices[41]= new Array();
 choices[41][0] = "Tuxedo ";
 choices[41][1] = "Tivoli";
 choices[41][2] = "Unicenter TNG";
 choices[41][3] = "Ninguno de los anteriores";
 answers[41] = choices[41][0];
 units[41] = "49";
 comments[41] = "Id Pregunta: 3926. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en algunas opciones";


//  Id pregunta: 3978 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Se&ntilde;ale la respuesta falsa sobre el coaxial tipo &quot;thick&quot;:";
 choices[42]= new Array();
 choices[42][0] = "Utiliza un conector BNC.";
 choices[42][1] = "Su impedancia es de 50 Ohm";
 choices[42][2] = "La longitud m&aacute;xima del segmento es de 500 m.";
 choices[42][3] = "Todas son falsas";
 answers[42] = choices[42][0];
 units[42] = "99";
 comments[42] = "Id Pregunta: 3978. ";


//  Id pregunta: 4034 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;C&oacute;mo se denomina la tecnolog&iacute;a de multiplexaci&oacute;n utilizada por ATM?";
 choices[43]= new Array();
 choices[43][0] = "Multiplexaci&oacute;n por divisi&oacute;n en el tiempo";
 choices[43][1] = "Multiplexaci&oacute;n estad&iacute;stica";
 choices[43][2] = "Multiplexaci&oacute;n por divisi&oacute;n en la frecuencia";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = choices[43][1];
 units[43] = "109";
 comments[43] = "Id Pregunta: 4034. ";


//  Id pregunta: 4500 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  El conjunto de procedimientos administrativos y t&eacute;cnicos que garantizan que todos los participantes del desarrollo de un sistema disponen de la versi&oacute;n adecuada de los productos que manejan, recibe el nombre de:";
 choices[44]= new Array();
 choices[44][0] = "Metodolog&iacute;a de desarrollo.";
 choices[44][1] = "Gesti&oacute;n de Ia configuraci&oacute;n.";
 choices[44][2] = "An&aacute;lisis de versiones.";
 choices[44][3] = "Diagrama de estructura de Ia informaci&oacute;n.";
 answers[44] = choices[44][1];
 units[44] = "76";
 comments[44] = "Id Pregunta: 4500. ";


//  Id pregunta: 4521 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  En una infraestructura PKI, Ia revocaci&oacute;n de un certificado requiere la presencia del usuario en:";
 choices[45]= new Array();
 choices[45][0] = "El proveedor de servicios de certificaci&oacute;n.";
 choices[45][1] = "En la F&aacute;brica Nacional de Moneda y Timbre.";
 choices[45][2] = "No hace falta, se puede hacer desde Internet.";
 choices[45][3] = "En una oficina de registro.";
 answers[45] = choices[45][3];
 units[45] = "74";
 comments[45] = "Id Pregunta: 4521. ";


//  Id pregunta: 4562 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  En el contexto de Normas UNE, las siglas UNE significan";
 choices[46]= new Array();
 choices[46][0] = "Unidad de Normalizaci&oacute;n Espa&ntilde;ola";
 choices[46][1] = "Uni&oacute;n de Normas Espa&ntilde;olas";
 choices[46][2] = "Una Norma Espa&ntilde;ola";
 choices[46][3] = "Usuarios de Normas Espa&ntilde;olas";
 answers[46] = choices[46][2];
 units[46] = "42";
 comments[46] = "Id Pregunta: 4562. ";


//  Id pregunta: 4584 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Cual de las siguientes opciones NO es un contenedor para Ia arquitectura J2EE";
 choices[47]= new Array();
 choices[47][0] = "contenedor web";
 choices[47][1] = "contenedor EJB";
 choices[47][2] = "contenedor de aplicaci&oacute;n cliente";
 choices[47][3] = "contenedor de base de datos";
 answers[47] = choices[47][3];
 units[47] = "60";
 comments[47] = "Id Pregunta: 4584. ";


//  Id pregunta: 4615 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Seg&uacute;n las pautas de conducta en el proceso de auditoria, los auditores pueden o deben hacer";
 choices[48]= new Array();
 choices[48][0] = "escribir los procedimientos";
 choices[48][1] = "realizar gesti&oacute;n de perfiles de usuarios";
 choices[48][2] = "realizar Ia documentaci&oacute;n";
 choices[48][3] = "verificar que se evaluan peri&oacute;dicamente riesgos o bien evaluarlos";
 answers[48] = choices[48][3];
 units[48] = "31";
 comments[48] = "Id Pregunta: 4615. ";


//  Id pregunta: 4656 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Qu&eacute; protocolo de enrutamiento se utiliza principalmente entre los sistemas aut&oacute;nomos en Internet?";
 choices[49]= new Array();
 choices[49][0] = "OSPF";
 choices[49][1] = "RIP";
 choices[49][2] = "BGP";
 choices[49][3] = "RIP2";
 answers[49] = choices[49][2];
 units[49] = "";
 comments[49] = "Id Pregunta: 4656. ";


//  Id pregunta: 4861 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes secuencias de actividades NO se corresponde con una actividad del proceso de elaboraci&oacute;n de un Plan de Sistemas seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[50]= new Array();
 choices[50][0] = "Estudio de informaci&oacute;n relevante";
 choices[50][1] = "Definici&oacute;n de un Plan de acci&oacute;n";
 choices[50][2] = "Definici&oacute;n de un Plan de Riesgo";
 choices[50][3] = "Estudio de los sistemas de informaci&oacute;n actuales";
 answers[50] = choices[50][2];
 units[50] = "86";
 comments[50] = "Id Pregunta: 4861. ";


//  Id pregunta: 4950 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Qu&eacute; diagrama UML describe los mensajes que se pasan entre los objetos y el orden en el que lo hacen?:";
 choices[51]= new Array();
 choices[51][0] = "Diagrama de estado.";
 choices[51][1] = "Diagrama de actividad.";
 choices[51][2] = "Diagrama de despliegue.";
 choices[51][3] = "Diagrama de secuencia.";
 answers[51] = choices[51][3];
 units[51] = "82";
 comments[51] = "Id Pregunta: 4950. Examen TIC B 2007";


//  Id pregunta: 5181 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes opciones no es una metodolog&iacute;a estructurada orientada a procesos?";
 choices[52]= new Array();
 choices[52][0] = "DeMarco";
 choices[52][1] = "Gane &amp; Sarson";
 choices[52][2] = "Yourdon / Constantine";
 choices[52][3] = "Warnier-Orr";
 answers[52] = choices[52][3];
 units[52] = "79";
 comments[52] = "Id Pregunta: 5181. ";


//  Id pregunta: 5413 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  La propiedad de un objeto denominada persistencia consiste en";
 choices[53]= new Array();
 choices[53][0] = "Que un objeto ocupa un determinado espacio de memoria y existe durante una cierta cantidad de tiempo. Es un concepto din&aacute;mico. La permanencia del objeto es el tiempo durante el cual se le asigna espacio y permanece accesible en la memoria del ordenador";
 choices[53][1] = "Un objeto ocupa un determinado espacio de memoria durante toda la vida de la aplicaci&oacute;n. La permanencia del objeto es que est&aacute; accesible en la memoria del ordenador";
 choices[53][2] = "Un objeto est&aacute; accesible ocupe o no memoria en el ordenador, el S.O. se encarga de cargar y descargar el objeto de la memoria RAM";
 choices[53][3] = "La persistencia de un objeto consiste en que aunque su instancia haya sido eliminada el objeto sigue accesible";
 answers[53] = choices[53][0];
 units[53] = "82";
 comments[53] = "Id Pregunta: 5413. Examen 2006 JCYL";


//  Id pregunta: 5461 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son";
 choices[54]= new Array();
 choices[54][0] = "Eficiencia y fiabilidad";
 choices[54][1] = "Fiabilidad y modularidad";
 choices[54][2] = "Fiabilidad y extensibilidad";
 choices[54][3] = "Correcci&oacute;n y verificabilidad";
 answers[54] = choices[54][1];
 units[54] = "88";
 comments[54] = "Id Pregunta: 5461. Castilla y Le&oacute;n";


//  Id pregunta: 5492 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Respecto al DataSet de ADO.NET, se&ntilde;ala la falsa ";
 choices[55]= new Array();
 choices[55][0] = "se puedeutilizar con m&uacute;ltiples y distintos or&iacute;genes, excepto XML, que es su principal carencia";
 choices[55][1] = "Se compone de uno o mas DataTable";
 choices[55][2] = "Reproduce los elementos propios de un modelo de datos relacional";
 choices[55][3] = "est&aacute; expresamente dise&ntilde;ado para el acceso adatos independientemente del origen de datos. ";
 answers[55] = choices[55][0];
 units[55] = "59";
 comments[55] = "Id Pregunta: 5492. ";


//  Id pregunta: 5526 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indicar la respuesta verdadera";
 choices[56]= new Array();
 choices[56][0] = "El formato PDF417 permite almacenar hasta 2710 caracteres y soporta detecci&oacute;n y correcci&oacute;n de errores";
 choices[56][1] = "PCR (Printed Character Recognition) son los sistemas que pueden reconocer informaci&oacute;n gr&aacute;fica codificada en braille";
 choices[56][2] = "Las siglas ICR responden a Intelligent Computer Redefinition";
 choices[56][3] = "Ninguna es verdadera";
 answers[56] = choices[56][0];
 units[56] = "94";
 comments[56] = "Id Pregunta: 5526. ";


//  Id pregunta: 5621 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Las normas b&aacute;sicas para constituir un interfaz com&uacute;n de sistemas UNIX con las aplicaciones son:";
 choices[57]= new Array();
 choices[57][0] = "OSI";
 choices[57][1] = "ISO";
 choices[57][2] = "POSIX";
 choices[57][3] = "XENIX";
 answers[57] = choices[57][2];
 units[57] = "53";
 comments[57] = "Id Pregunta: 5621. ";


//  Id pregunta: 5708 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  Seleccione la opci&oacute;n correcta:";
 choices[58]= new Array();
 choices[58][0] = "SOAP es un protocolo para el intercambio de mensajes SOA";
 choices[58][1] = "Dos aplicaciones que se comunican mediante SOAP deben estar escritas en el mismo lenguaje de programaci&oacute;n";
 choices[58][2] = "Los mensajes SOAP se pueden transportar, entre otros medios, sobre HTTP, SMTP o palomas mensajeras";
 choices[58][3] = "Para que dos aplicaciones se comuniquen mediante SOAP siempre ser&aacute; necesario alterar las configuraciones de los posibles firewalls entre ellas";
 answers[58] = choices[58][2];
 units[58] = "51";
 comments[58] = "Id Pregunta: 5708. MAP 2008 A2";


//  Id pregunta: 5949 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes no es un beneficio de un sistema de gesti&oacute;n de identidades respecto de la gesti&oacute;n de usuarios tradicional?";
 choices[59]= new Array();
 choices[59][0] = "Inexistencia de un interfaz de self-service para el usuario final";
 choices[59][1] = "Informes de auditoria";
 choices[59][2] = "Visi&oacute;n global del perfil del usuario";
 choices[59][3] = "Administraci&oacute;n delegada de usuarios";
 answers[59] = choices[59][0];
 units[59] = "118";
 comments[59] = "Id Pregunta: 5949. ";


//  Id pregunta: 6105 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  Una organizaci&oacute;n dispone para numerar su red del prefijo 192.168.1.0/24. Entonces:";
 choices[60]= new Array();
 choices[60][0] = "Podr&iacute;a dar a una de sus subredes el prefijo 190.18.1.0/20.";
 choices[60][1] = "Podr&iacute;a generar 16 prefijos, cada uno con capacidad para numerar 14 m&aacute;quinas.";
 choices[60][2] = "Podr&iacute;a generar 8 prefijos, cada uno con capacidad para numerar 254 m&aacute;quinas.";
 choices[60][3] = "Podr&iacute;a generar 4 prefijos, cada uno con capacidad para numerar 126 m&aacute;quinas.";
 answers[60] = choices[60][1];
 units[60] = "100";
 comments[60] = "Id Pregunta: 6105. TIC A 2009";


//  Id pregunta: 6247 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Qu&eacute; m&oacute;dulo de Apache se incluye para aportar seguridad a Axis2?";
 choices[61]= new Array();
 choices[61][0] = "My Sql";
 choices[61][1] = "Php";
 choices[61][2] = "Rampart";
 choices[61][3] = "Addressing";
 answers[61] = choices[61][2];
 units[61] = "60";
 comments[61] = "Id Pregunta: 6247. TICB-2009, bloque desarrollo";


//  Id pregunta: 6344 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes formas de presentar informaci&oacute;n se identifica mejor con la definici&oacute;n de folcsonom&iacute;a?";
 choices[62]= new Array();
 choices[62][0] = "&Aacute;rbol";
 choices[62][1] = "Directorio";
 choices[62][2] = "Nube de Tags";
 choices[62][3] = "Cubo";
 answers[62] = choices[62][2];
 units[62] = "120";
 comments[62] = "Id Pregunta: 6344. ";


//  Id pregunta: 6346 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes definiciones describe lo que es Mashup?";
 choices[63]= new Array();
 choices[63][0] = "Aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes para crear un servicio en base a ellas.";
 choices[63][1] = "T&eacute;cnica de desarrollo web que permite modificar la informaci&oacute;n de una p&aacute;gina web, sin tener que recargarla totalmente, agilizando la interacci&oacute;n con el usuario.";
 choices[63][2] = "Conjunto de especificaciones que posibilitan la comunicaci&oacute;n y provisi&oacute;n de servicios entre diferentes aplicaciones v&iacute;a web.";
 choices[63][3] = "Ninguna de las anteriores.";
 answers[63] = choices[63][0];
 units[63] = "120";
 comments[63] = "Id Pregunta: 6346. ";


//  Id pregunta: 6436 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  Cuando se pasa a tablas una relaci&oacute;n n:m";
 choices[64]= new Array();
 choices[64][0] = "Se generan restricciones de integridad referencal.";
 choices[64][1] = "No hay que preocuparse por la integridad referencial.";
 choices[64][2] = "hay que modificar las claves ajenas de las entidades participantes en la relaci&oacute;n.";
 choices[64][3] = "No se generan claves ajenas nada m&aacute;s que para los atributos propios de la relaci&oacute;n.";
 answers[64] = choices[64][0];
 units[64] = "70";
 comments[64] = "Id Pregunta: 6436. ";


//  Id pregunta: 6437 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Cuando se transforma un modelo E/R a modelo relacional las relaciones 1:n:";
 choices[65]= new Array();
 choices[65][0] = "Se transforman por el mecanismo de propagaci&oacute;n de clave ajena.";
 choices[65][1] = "Generan una tabla igual que una relaci&oacute;n n:m.";
 choices[65][2] = "Dependiendo del tipo de consultas posteriores se genera o no la tabla.";
 choices[65][3] = "Si el volumen de datos es muy grande se genera la tabla.";
 answers[65] = choices[65][0];
 units[65] = "70";
 comments[65] = "Id Pregunta: 6437. ";


//  Id pregunta: 6511 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  El comando para cambiar el password de un usuario en UNIX es:";
 choices[66]= new Array();
 choices[66][0] = "passwd";
 choices[66][1] = "pass";
 choices[66][2] = "password";
 choices[66][3] = "chpass";
 answers[66] = choices[66][0];
 units[66] = "54";
 comments[66] = "Id Pregunta: 6511. ";


//  Id pregunta: 6593 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Un tipo de software libre que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[67]= new Array();
 choices[67][0] = "MAPILab Reports:";
 choices[67][1] = "Network Inventory Advisor";
 choices[67][2] = "Visual audit. X4";
 choices[67][3] = "Todas las respuestas anteriores son correctas";
 answers[67] = choices[67][3];
 units[67] = "75";
 comments[67] = "Id Pregunta: 6593. ";


//  Id pregunta: 6625 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  CMM en el campo de la ingenier&iacute;a y calidad del software son las siglas de:";
 choices[68]= new Array();
 choices[68][0] = "Capacity Maturity Model";
 choices[68][1] = "Capability Maturity Model";
 choices[68][2] = "Capacity Management Model";
 choices[68][3] = "Capability Management Model";
 answers[68] = choices[68][0];
 units[68] = "87";
 comments[68] = "Id Pregunta: 6625. ";


//  Id pregunta: 7143 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Se&ntilde;ala la opci&oacute;n que NO se encuentra en los objetivos de MAGERIT v2:";
 choices[69]= new Array();
 choices[69][0] = "Concienciar a los responsables de los sistemas de informaci&oacute;n de la existencia de riesgos y de la necesidad de atajarlos a tiempo";
 choices[69][1] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos siguiendo el Libro Blanco de Buenas Pr&aacute;cticas en Materia de Seguridad para la Administraci&oacute;n Europea";
 choices[69][2] = "Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control";
 choices[69][3] = "Apoyar la preparaci&oacute;n a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditoria, certificaci&oacute;n o acreditaci&oacute;n";
 answers[69] = choices[69][1];
 units[69] = "33";
 comments[69] = "Id Pregunta: 7143. Examen TIC B 2009";


//  Id pregunta: 7177 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  El n&uacute;mero m&aacute;ximo de certificados que se pueden almacenar en una  tarjeta criptogr&aacute;fica CERES es:";
 choices[70]= new Array();
 choices[70][0] = "4";
 choices[70][1] = "5";
 choices[70][2] = "6";
 choices[70][3] = "7";
 answers[70] = choices[70][2];
 units[70] = "74";
 comments[70] = "Id Pregunta: 7177. Examen TIC B 2009";


//  Id pregunta: 7253 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  El protocolo UDP:";
 choices[71]= new Array();
 choices[71][0] = "Es orientado a conexi&oacute;n";
 choices[71][1] = "Genera un flujo unidireccional";
 choices[71][2] = "Realiza el control de redundancia c&iacute;clica (CRC) de los datos";
 choices[71][3] = "Emplea, al comenzar una comunicaci&oacute;n, el mecanismo denominado Three-Weay Hand Shaking";
 answers[71] = choices[71][1];
 units[71] = "100";
 comments[71] = "Id Pregunta: 7253. Examen TIC B 2009";


//  Id pregunta: 7256 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  La funci&oacute;n de un hub es ";
 choices[72]= new Array();
 choices[72][0] = "Reenviar los paquetes en funci&oacute;n de la direcci&oacute;n MAC de destino";
 choices[72][1] = "Repetir la informaci&oacute;n que llega a un puerto por el resto de puertos";
 choices[72][2] = "Dirigir correctamente tr&aacute;fico de una red a otra";
 choices[72][3] = "Asignar diferentes preferencias a los mensajes que fluyen por la red";
 answers[72] = choices[72][1];
 units[72] = "102";
 comments[72] = "Id Pregunta: 7256. Examen TIC B 2009";


//  Id pregunta: 7260 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  La diferencia entre los protocolos POP  e IMAP es que:";
 choices[73]= new Array();
 choices[73][0] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de recepci&oacute;n";
 choices[73][1] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de env&iacute;o y recepci&oacute;n";
 choices[73][2] = "Uno establece una comunicaci&oacute;n bidireccional y el otro no";
 choices[73][3] = "La capa de ubicaci&oacute;n de cada uno de ellos en el modelo TCP/IP es distinta";
 answers[73] = choices[73][2];
 units[73] = "106";
 comments[73] = "Id Pregunta: 7260. Examen TIC B 2009";


//  Id pregunta: 8071 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[74]= new Array();
 choices[74][0] = " Strategy.";
 choices[74][1] = " State.";
 choices[74][2] = " Observer.";
 choices[74][3] = " Command.";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 8071. Map 2008";


//  Id pregunta: 8076 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA , en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[75]= new Array();
 choices[75][0] = " Se utiliza, en general, para la autoevaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora.";
 choices[75][1] = " Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea.";
 choices[75][2] = " Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados.";
 choices[75][3] = " La l&oacute;gica REDER se encuentra en el centro del modelo.";
 answers[75] = choices[75][1];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 8076. Map 2008";


//  Id pregunta: 8241 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  De las siguientes sentencias, indicar la correcta: ";
 choices[76]= new Array();
 choices[76][0] = "Cuanto mayor sea el Payback de un sistema, m&aacute;s atractivo ser&aacute; para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 choices[76][1] = "Cuanto menor sea el Payback de un sistema, m&aacute;s atractivo ser&aacute; para la organizaci&oacute;n acometer su implantaci&oacute;n. ";
 choices[76][2] = "Cuando el Payback es mayor que el m&aacute;ximo per&iacute;odo definido por la empresa, entonces se debe aceptar el proyecto. ";
 choices[76][3] = "El Payback de un sistema, no muestra si es atractivo o no para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 answers[76] = choices[76][1];
 units[76] = "38";
 comments[76] = "Id Pregunta: 8241. Examen TIC A2 2010";


//  Id pregunta: 8273 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  En general, al pasar una relaci&oacute;n 1:N con atributos propios, del modelo entidad - relaci&oacute;n al modelo relacional:";
 choices[77]= new Array();
 choices[77][0] = "Se crea una nueva tabla cuya clave principal es el atributo de la relaci&oacute;n.";
 choices[77][1] = "Se crea una nueva tabla cuya clave es la concatenaci&oacute;n de las claves de las dos entidades y tiene un campo adicional para el atributo de la relaci&oacute;n.";
 choices[77][2] = "La clave de la entidad que participa con cardinalidad N y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad 1.";
 choices[77][3] = "La clave de la entidad que participa con cardinalidad 1 y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad N.";
 answers[77] = choices[77][3];
 units[77] = "58";
 comments[77] = "Id Pregunta: 8273. Examen TIC A1 2010";


//  Id pregunta: 8284 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  El m&eacute;todo de b&uacute;squeda informado que tiene en cuenta el coste m&iacute;nimo necesario para llegar al estado soluci&oacute;n pasando por el estado X, es el denominado:";
 choices[78]= new Array();
 choices[78][0] = "M&eacute;todo de b&uacute;squeda bidireccional.";
 choices[78][1] = "B&uacute;squeda &aacute;vida (Greedy search).";
 choices[78][2] = "B&uacute;squeda con adversario.";
 choices[78][3] = "M&eacute;todo Escalada simple (&quot;Hill-climbing&quot; search).";
 answers[78] = choices[78][1];
 units[78] = "63";
 comments[78] = "Id Pregunta: 8284. Examen TIC A1 2010";


//  Id pregunta: 8287 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;ndo se puede utilizar el Servicio de Verificaci&oacute;n de Datos de Identidad para consultar datos de car&aacute;cter personal?";
 choices[79]= new Array();
 choices[79][0] = "Cuando se cuente con el consentimiento del interesado y los datos sean necesarios para el tr&aacute;mite. ";
 choices[79][1] = "S&oacute;lo se puede utilizar para consultar datos que no sean de car&aacute;cter personal";
 choices[79][2] = "S&oacute;lo en caso de que sean datos de nivel de protecci&oacute;n alto. ";
 choices[79][3] = "Se contemplaba un per&iacute;odo de transici&oacute;n, pero a partir del 1 de enero de 2011, el Servicio de Verificaci&oacute;n de Datos de Identidad ser&aacute; obligatorio en todo caso";
 answers[79] = choices[79][0];
 units[79] = "44";
 comments[79] = "Id Pregunta: 8287. Examen TIC A2 2010";


//  Id pregunta: 8306 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  EI ataque conocido como &quot;ARP Spoofing&quot;: ";
 choices[80]= new Array();
 choices[80][0] = "Se impide con el uso de conmutadores (switches) en vez de concentradores (hubs).";
 choices[80][1] = "Se efect&uacute;a en el nivel 3 de OSI ya que falsifica direcciones IPs. ";
 choices[80][2] = "Sirve para interceptar tr&aacute;fico en una red de &aacute;rea local (LAN), pero no para modificarlo. ";
 choices[80][3] = "Puede impedirse mediante DHCP snooping.";
 answers[80] = choices[80][3];
 units[80] = "111";
 comments[80] = "Id Pregunta: 8306. Examen TIC A2 2010";


//  Id pregunta: 8397 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Seg&uacute;n el Real Decreto 1720/2007, la conservaci&oacute;n de una copia de respaldo de los datos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, es una medida de protecci&oacute;n de nivel";
 choices[81]= new Array();
 choices[81][0] = "B&aacute;sico";
 choices[81][1] = "Medio";
 choices[81][2] = "Alto";
 choices[81][3] = "No se contempla esta medida de protecci&oacute;n";
 answers[81] = choices[81][2];
 units[81] = "29";
 comments[81] = "Id Pregunta: 8397. Examen TIC A2 2010";


//  Id pregunta: 8630 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[82]= new Array();
 choices[82][0] = "Regla de la no subversi&oacute;n.";
 choices[82][1] = "Regla de la no concurrencia.";
 choices[82][2] = "Regla de la restricci&oacute;n.";
 choices[82][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[82] = choices[82][0];
 units[82] = "57, 58";
 comments[82] = "Id Pregunta: 8630. Examen TIC A2 2010 interna";


//  Id pregunta: 8642 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n es inestable?";
 choices[83]= new Array();
 choices[83][0] = "Mergesort";
 choices[83][1] = "Bubblesort";
 choices[83][2] = "Quicksort";
 choices[83][3] = "Insertionsort";
 answers[83] = choices[83][2];
 units[83] = "96";
 comments[83] = "Id Pregunta: 8642. Examen TIC A2 2010 interna";


//  Id pregunta: 8918 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Indicar qu&eacute; es cierto acerca de las interrupciones de Entrada/Salida:";
 choices[84]= new Array();
 choices[84][0] = "Cuando se produce una interrupci&oacute;n, el registro contador de programa de la CPU cambia su valor, apuntando a la direcci&oacute;n de comienzo de la rutina de tratamiento de la interrupci&oacute;n.";
 choices[84][1] = "Los controladores DMA, al acceder directamente a la memoria principal, no hacen uso de interrupciones.";
 choices[84][2] = "Las interrupciones son generadas por la CPU para informar a los dispositivos perif&eacute;ricos de diferentes situaciones excepcionales en la ejecuci&oacute;n de los programas.";
 choices[84][3] = "Ninguna de las anteriores es cierta";
 answers[84] = choices[84][0];
 units[84] = "52";
 comments[84] = "Id Pregunta: 8918. Operador Ayto. Madrid 2010";


//  Id pregunta: 8964 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Como algoritmos de cifrado sim&eacute;trico de bloque no figura:";
 choices[85]= new Array();
 choices[85][0] = "Lucifer";
 choices[85][1] = "Serpent";
 choices[85][2] = "Seal";
 choices[85][3] = "Shark";
 answers[85] = choices[85][2];
 units[85] = "72";
 comments[85] = "Id Pregunta: 8964. ";


//  Id pregunta: 9002 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Seg&uacute;n la LOPD &iquest;cu&aacute;l de los siguientes no es un criterio conforme al cu&aacute;l se grad&uacute;e  la cuant&iacute;a de las sanciones?";
 choices[86]= new Array();
 choices[86][0] = "El grado de intencionalidad.";
 choices[86][1] = "El volumen de negocio o actividad del infractor.";
 choices[86][2] = "La vinculaci&oacute;n de la actividad del infractor con la realizaci&oacute;n de tratamientos de datos de car&aacute;cter personal.";
 choices[86][3] = "La acreditaci&oacute;n de que con anterioridad a los hechos constitutivos de infracci&oacute;n la entidad imputada no ten&iacute;a implantados procedimientos adecuados de actuaci&oacute;n en la recogida y tratamiento de los datos de car&aacute;cter personal.";
 answers[86] = choices[86][3];
 units[86] = "29";
 comments[86] = "Id Pregunta: 9002. ";


//  Id pregunta: 9061 Año de creación de pregunta: 2024-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes no es una infracci&oacute;n grave seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[87]= new Array();
 choices[87][0] = "No remitir a la Agencia de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo";
 choices[87][1] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal por parte del responsable del fichero";
 choices[87][2] = "La obstrucci&oacute;n al ejercicio de la funci&oacute;n inspectora";
 choices[87][3] = "El incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal cuando los datos no hayan sido recabados del propio interesado";
 answers[87] = choices[87][0];
 units[87] = "29";
 comments[87] = "Id Pregunta: 9061. ";


//  Id pregunta: 9151 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  &iquest;Qu&eacute; era Meego?";
 choices[88]= new Array();
 choices[88][0] = "la uni&oacute;n de los sistemas operativos Maemo y Moblin, con el que Intel y Google pretend&iacute;ann competir con el sistema iOs de Apple. Fue el inicio del sistema Android.";
 choices[88][1] = "Est&aacute; auspiciado por la Linux Foundation";
 choices[88][2] = "Una competencia al Android de Google.";
 choices[88][3] = "La B) y la C) son correctas.";
 answers[88] = choices[88][3];
 units[88] = "47";
 comments[88] = "Id Pregunta: 9151. ";


//  Id pregunta: 9185 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes NO es un Proceso Principal de M&eacute;trica 3?";
 choices[89]= new Array();
 choices[89][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[89][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[89][2] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[89][3] = "Todos son Procesos Principales";
 answers[89] = choices[89][2];
 units[89] = "86";
 comments[89] = "Id Pregunta: 9185. ";


//  Id pregunta: 9293 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  El dominio de control &quot;Seguridad ligada al personal&quot; se corresponde con la dimensi&oacute;n de seguridad:";
 choices[90]= new Array();
 choices[90][0] = "Organizativa.";
 choices[90][1] = "L&oacute;gica";
 choices[90][2] = "F&iacute;sica";
 choices[90][3] = "Legal";
 answers[90] = choices[90][0];
 units[90] = "32";
 comments[90] = "Id Pregunta: 9293. ";


//  Id pregunta: 9661 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  La Ley 11/2007 tiene en cuenta &quot;Otros sistemas de firma&quot;, que podr&aacute;n ser creados mediante:";
 choices[91]= new Array();
 choices[91][0] = "Real Decreto del Gobierno, previo informe de la CSAE";
 choices[91][1] = "Informe de la CSAE";
 choices[91][2] = "Orden Ministerial o Resoluci&oacute;n, previo informe de la CSAE.";
 choices[91][3] = "No necesita reglamento para su creaci&oacute;n.";
 answers[91] = choices[91][2];
 units[91] = "43";
 comments[91] = "Id Pregunta: 9661. ";


//  Id pregunta: 9708 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  De acuerdo con la definiciones dadas por el grupo de trabajo del IEEE Computer Society, la reestructuraci&oacute;n software (restructuring) es";
 choices[92]= new Array();
 choices[92][0] = "el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos.";
 choices[92][1] = "el examen y la modificaci&oacute;n de un sistema para ser reconstruido de una forma nueva y realizar la implantaci&oacute;n derivada de esta nueva forma.";
 choices[92][2] = "la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero sin modificar el comportamiento externo del sistema.";
 choices[92][3] = "un proceso completo que va desde una alto nivel de abstracci&oacute;n, hasta la propia implementaci&oacute;n f&iacute;sica del sistema.";
 answers[92] = choices[92][2];
 units[92] = "91";
 comments[92] = "Id Pregunta: 9708. Examen TIC-A1 2013";


//  Id pregunta: 9721 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  La t&eacute;cnica de protecci&oacute;n de software conocida como marca de agua digital consiste en";
 choices[93]= new Array();
 choices[93][0] = "la inserci&oacute;n de un mensaje en el interior de un objeto digital que contiene informaci&oacute;n sobre el autor o propietario digital de dicho objeto.";
 choices[93][1] = "la generaci&oacute;n de un c&oacute;digo de activaci&oacute;n sin el cual no se puede utilizar una aplicaci&oacute;n.";
 choices[93][2] = "una etiqueta hologr&aacute;fica que ayuda a identificar que el software es original.";
 choices[93][3] = "la gesti&oacute;n de derechos de uso de contenido en formato digital que comprende medidas t&eacute;cnicas y organizativas.";
 answers[93] = choices[93][0];
 units[93] = "37";
 comments[93] = "Id Pregunta: 9721. Examen TIC-A1 2013";


//  Id pregunta: 9775 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra &quot;libro&quot; dentro de ficheros?";
 choices[94]= new Array();
 choices[94][0] = "find -type f | xwygs grep &quot;libro&quot; ";
 choices[94][1] = "find -type f | xaygs grep &quot;libro&quot; ";
 choices[94][2] = "find -type f | xargs grep &quot;libro&quot; ";
 choices[94][3] = "find -type f | xargp grep &quot;libro&quot; ";
 answers[94] = choices[94][2];
 units[94] = "54";
 comments[94] = "Id Pregunta: 9775. Examen TIC A2 2013";


//  Id pregunta: 9811 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  La velocidad del est&aacute;ndar USB 3.0 es:";
 choices[95]= new Array();
 choices[95][0] = "Similar a la de USB 2.0.";
 choices[95][1] = "10 veces superior a la de USB 2.0.";
 choices[95][2] = "480 Mbps.";
 choices[95][3] = "15 veces superior a la de USB 2.0.";
 answers[95] = choices[95][1];
 units[95] = "46";
 comments[95] = "Id Pregunta: 9811. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9850 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  El proceso mediante el cual un usuario se autentica una vez en el sistema de la organizaci&oacute;n y es capaz de acceder al resto de servicios se denomina:";
 choices[96]= new Array();
 choices[96][0] = "Single Login On";
 choices[96][1] = "Simple Login On";
 choices[96][2] = "Single Sign On";
 choices[96][3] = "Simple Sign On";
 answers[96] = choices[96][2];
 units[96] = "118";
 comments[96] = "Id Pregunta: 9850. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9922 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Sean dos transacciones (T1 y T2), T1 con estampa de tiempo igual a 8 y T2 con estampa de tiempo igual a 10 (T1 es m&aacute;s antiguo que T2). Suponiendo que T2 tiene un bloqueo en un elemento y T1 pide bloqueo para ese mismo elemento, si aplicamos el enfoque WOUND-WAIT para resoluci&oacute;n del conflicto:";
 choices[97]= new Array();
 choices[97][0] = "T1 esperar&aacute; hasta que T2 se completa y libera su bloqueo.";
 choices[97][1] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se aborta y se reinicia usando la misma estampa de tiempo.";
 choices[97][2] = "T1 se reinicia con la misma estampa de tiempo y T2 se reprograma usando la misma estampa de tiempo.";
 choices[97][3] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se reinicia usando distinta estampa de tiempo.";
 answers[97] = choices[97][1];
 units[97] = "57";
 comments[97] = "Id Pregunta: 9922. TIC A2, Examen 2013";


//  Id pregunta: 10179 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  La herencia es el mecanismo de implementaci&oacute;n mediante el cual elementos m&aacute;s espec&iacute;ficos incorporan la estructura y comportamiento de elementos m&aacute;s generales.";
 choices[98]= new Array();
 choices[98][0] = "La herencia es siempre transitiva";
 choices[98][1] = "La herencia repetida es un problema derivado de la herencia m&uacute;ltiple que tiene lugar cuando una clase hereda de dos o m&aacute;s clases un m&eacute;todo con el mismo nombre y diferente implementaci&oacute;n.";
 choices[98][2] = "A trav&eacute;s de la herencia, una clase derivada puede heredar el comportamiento de una clase base, sin sobreescribir la funcionalidad gen&eacute;rica determinada en &eacute;sta.";
 choices[98][3] = "Ninguna de las anteriores";
 answers[98] = choices[98][0];
 units[98] = "82";
 comments[98] = "Id Pregunta: 10179. ";


//  Id pregunta: 10354 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de supervisar y mejorar la accesibilidad de los portales web de la Administraci&oacute;n?";
 choices[99]= new Array();
 choices[99][0] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[99][1] = "Ministerio de la Presidencia";
 choices[99][2] = "El Observatorio de Accesibilidad, iniciativa del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[99][3] = "El Observatorio Estatal de la Discapacidad (OED), iniciativa del Ministerio de Sanidad, Servicios Sociales e Igualdad";
 answers[99] = choices[99][2];
 units[99] = "39";
 comments[99] = "Id Pregunta: 10354. http://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html";


