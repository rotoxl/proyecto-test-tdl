/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 40 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas referidas a las auditor&iacute;as de control de calidad es cierta?:";
 choices[0]= new Array();
 choices[0][0] = "Es un procedimiento habitual de control de calidad del software";
 choices[0][1] = "Es un procedimiento extraordinario al que se pueden someter los proyectos que tengan especial magnitud";
 choices[0][2] = "Su objetivo es proceder al refinamiento sucesivo en la definici&oacute;n de las especificaciones finales del proyecto";
 choices[0][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[0] = choices[0][1];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 40. ";


//  Id pregunta: 151 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El Modelo de Referencia para la Interconexi&oacute;n de Sistemas Abiertos queda especificado en la norma ISO:";
 choices[1]= new Array();
 choices[1][0] = "ISO 7498";
 choices[1][1] = "ISO 9735";
 choices[1][2] = "ISO 9075";
 choices[1][3] = "ISO 9945-1";
 answers[1] = choices[1][0];
 units[1] = "40";
 comments[1] = "Id Pregunta: 151. ";


//  Id pregunta: 257 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Entre otras, la ventaja principal de los sistemas abiertos para los usuarios es:";
 choices[2]= new Array();
 choices[2][0] = "Aseguran la conversi&oacute;n de datos entre sistemas";
 choices[2][1] = "Protegen la inversi&oacute;n realizada en los equipos f&iacute;sicos y en los programas";
 choices[2][2] = "Mejoran la calidad de los productos que se fabrican";
 choices[2][3] = "Los fabricantes tienen m&aacute;s en cuenta las opiniones de los usuarios";
 answers[2] = choices[2][1];
 units[2] = "40";
 comments[2] = "Id Pregunta: 257. ";


//  Id pregunta: 279 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La auditor&iacute;a de sistemas de informaci&oacute;n se puede considerar como:";
 choices[3]= new Array();
 choices[3][0] = "Una auditor&iacute;a de eficiencia";
 choices[3][1] = "Una auditor&iacute;a de eficacia";
 choices[3][2] = "Una auditor&iacute;a operativa";
 choices[3][3] = "Una auditor&iacute;a de legalidad";
 answers[3] = choices[3][2];
 units[3] = "31,32";
 comments[3] = "Id Pregunta: 279. ";


//  Id pregunta: 376 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Los sistemas de ayuda a la decisi&oacute;n orientados a datos se caracterizan por:";
 choices[4]= new Array();
 choices[4][0] = "Proporcionar un medio f&aacute;cil al usuario para &quot;jugar con los datos&quot;";
 choices[4][1] = "Facilitar el conocimiento estructural del problema que permita el desarrollo de un modelo formal de decisi&oacute;n";
 choices[4][2] = "Presentar al usuario una informaci&oacute;n relacionada para la toma de decisiones";
 choices[4][3] = "Ser m&aacute;s caros que los sistemas de ayuda a la decisi&oacute;n orientados a modelos";
 answers[4] = choices[4][3];
 units[4] = "21";
 comments[4] = "Id Pregunta: 376. ";


//  Id pregunta: 496 Año de creación de pregunta: 2003-01-01
 questions[5]= "6)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos Personales (LOPD), c&uacute;al de los siguientes datos es un dato especialmente protegido";
 choices[5]= new Array();
 choices[5][0] = "Sexo";
 choices[5][1] = "Nombre";
 choices[5][2] = "Raza";
 choices[5][3] = "Direcci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "29";
 comments[5] = "Id Pregunta: 496. ";


//  Id pregunta: 622 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  En teor&iacute;a de la decisi&oacute;n multicriterio discreta (DMD), el m&eacute;todo QUALIFLEX se basa en:";
 choices[6]= new Array();
 choices[6][0] = "evaluaciones cardinales y pesos cardinales";
 choices[6][1] = "evaluaciones ordinales y pesos cardinales";
 choices[6][2] = "evaluaciones ordinales y pesos ordinales";
 choices[6][3] = "evaluaciones cardinales y pesos ordinales";
 answers[6] = choices[6][1];
 units[6] = "34";
 comments[6] = "Id Pregunta: 622. ";


//  Id pregunta: 817 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Seg&uacute;n el m&eacute;todo de resoluci&oacute;n de problemas GPS (General Problem Solving):";
 choices[7]= new Array();
 choices[7][0] = "El problema se formaliza o define por los siguientes componentes : I(estado inicial), F (estado final) y O (conjunto de operadores complejos)";
 choices[7][1] = "Existe un problema cuando la aplicaci&oacute;n de un m&eacute;todo conocido a una situaci&oacute;n de incertidumbre no lleva a un estado final determinado";
 choices[7][2] = "Los problemas se dividen en subproblemas m&aacute;s simples de manera recursiva. La unidad m&iacute;nima de divisi&oacute;n se denomina &quot;problema elemental&quot;";
 choices[7][3] = "Cuando hay una discrepancia entre la situaci&oacute;n de partida y aqu&eacute;lla que se quiere alcanzar se dice que hay un problema";
 answers[7] = choices[7][3];
 units[7] = "63";
 comments[7] = "Id Pregunta: 817. ";


//  Id pregunta: 868 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es un grupo de &aacute;reas de aplicaci&oacute;n de la inteligencia artifical?";
 choices[8]= new Array();
 choices[8][0] = "juegos, sistemas expertos, demostraci&oacute;n de teoremas";
 choices[8][1] = "lenguaje natural, razonamiento autom&aacute;tico, redes neuronales";
 choices[8][2] = "algoritmos gen&eacute;ticos, modelizaci&oacute;n del comportamiento humano, rob&oacute;tica";
 choices[8][3] = "todas son &aacute;reas de aplicaci&oacute;n de la inteligencia artificial";
 answers[8] = choices[8][3];
 units[8] = "63";
 comments[8] = "Id Pregunta: 868. ";


//  Id pregunta: 1258 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Las operaciones de la Unidad Aritm&eacute;tico-L&oacute;gica se clasifican en:";
 choices[9]= new Array();
 choices[9][0] = "Desplazamiento, l&oacute;gicas y aritm&eacute;ticas";
 choices[9][1] = "L&oacute;gicas y aritm&eacute;ticas";
 choices[9][2] = "Desplazamiento, l&oacute;gicas y adici&oacute;n";
 choices[9][3] = "L&oacute;gicas y adici&oacute;n";
 answers[9] = choices[9][0];
 units[9] = "47";
 comments[9] = "Id Pregunta: 1258. ";


//  Id pregunta: 1295 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  P2P:";
 choices[10]= new Array();
 choices[10][0] = "Puede usarse para transferir archivos";
 choices[10][1] = "Simboliza un tipo de protocolos o sistemas que hacen uso de todos los recursos presentes en una red entre iguales (peers), haciendola parecer al usuario como un &uacute;nico sistema.";
 choices[10][2] = "Puede usarse para computaci&oacute;n distribuida";
 choices[10][3] = "Todas son ciertas";
 answers[10] = choices[10][3];
 units[10] = "50";
 comments[10] = "Id Pregunta: 1295. ";


//  Id pregunta: 1393 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Un sistema de almacenamiento RAID 0:";
 choices[11]= new Array();
 choices[11][0] = "Es un sistema tolerante a fallos de un disco";
 choices[11][1] = "Es un sistema que guarda en disco la informaci&oacute;n de paridad del resto de los discos";
 choices[11][2] = "Requiere al menos 5 discos";
 choices[11][3] = "Requiere como m&iacute;nimo dos discos y mejora el rendimiento en los accesos a los discos";
 answers[11] = choices[11][3];
 units[11] = "48";
 comments[11] = "Id Pregunta: 1393. ";


//  Id pregunta: 1704 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  La t&eacute;cnica usada para incrementar la velocidad de los PC, copiando a memoria RAM el c&oacute;digo de la memoria BIOS ROM tras el arranque, se denomina:";
 choices[12]= new Array();
 choices[12][0] = "Overclocking";
 choices[12][1] = "Ghosting";
 choices[12][2] = "Shadowing";
 choices[12][3] = "La BIOS no se puede ejecutar en una memoria RAM";
 answers[12] = choices[12][2];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1704. ";


//  Id pregunta: 1734 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  Un sistema operativo trata de obtener el m&aacute;ximo rendimiento del hardware que controla. La multitarea y la existencia de varios procesadores son algunas herramientas para conseguirlo. Se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[13]= new Array();
 choices[13][0] = "No existe incompatibilidad en emplear multiprogramaci&oacute;n y tiempo compartido en un sistema multiprocesador.";
 choices[13][1] = "Una transacci&oacute;n se inicia con la petici&oacute;n de un terminal y acaba con la respuesta de la CPU.";
 choices[13][2] = "En un sistema con time-sharing, la asignaci&oacute;n de prioridades a unos procesos respecto de otros no mejora el rendimiento.";
 choices[13][3] = "El sistema operativo no es responsable de la sincronizaci&oacute;n de procesos, son las aplicaciones quienes se encargan de esa tarea.";
 answers[13] = choices[13][0];
 units[13] = "55";
 comments[13] = "Id Pregunta: 1734. ";


//  Id pregunta: 1921 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  &iquest; Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programamci&oacute;n orientado a objetos?";
 choices[14]= new Array();
 choices[14][0] = "Encapsulaci&oacute;n";
 choices[14][1] = "Herencia";
 choices[14][2] = "Polimorfismo";
 choices[14][3] = "Historicismo";
 answers[14] = choices[14][3];
 units[14] = "82";
 comments[14] = "Id Pregunta: 1921. ";


//  Id pregunta: 2246 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Del modelo de ciclo de vida en cascada se puede decir:";
 choices[15]= new Array();
 choices[15][0] = "Es un modelo que evoluciona en funci&oacute;n del grado de terminaci&oacute;n del proceso";
 choices[15][1] = "Es un modelo te&oacute;rico, dif&iacute;cil de cumplir porque necesita terminar una fase antes de comenzar la siguiente";
 choices[15][2] = "Es una particularizaci&oacute;n del ciclo de vida en espiral";
 choices[15][3] = "Normalmente va ligado al uso de prototipos";
 answers[15] = choices[15][1];
 units[15] = "76";
 comments[15] = "Id Pregunta: 2246. ";


//  Id pregunta: 2282 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  El modelo de ciclo de vida en cascada:";
 choices[16]= new Array();
 choices[16][0] = "Se compone de una serie de fases en paralelo, siendo necesario que concluyan todas ellas para iniciar la fase del nivel siguiente";
 choices[16][1] = "No contempla la divisi&oacute;n en fases, sino que es una secuencia encadenada de acciones e interacciones";
 choices[16][2] = "Est&aacute; especialmente indicado para sistemas dise&ntilde;ados con orientaci&oacute;n a objetos";
 choices[16][3] = "Se compone de una serie de fases que se suceden secuencialmente, gener&aacute;ndose en cada fase resultados que ser&aacute;n necesarios para iniciar la siguiente fase";
 answers[16] = choices[16][3];
 units[16] = "76";
 comments[16] = "Id Pregunta: 2282. ";


//  Id pregunta: 2322 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  En la fase 'Planificaci&oacute;n' de un modelo en cascada, es necesario fijar:";
 choices[17]= new Array();
 choices[17][0] = "&Aacute;mbito de trabajo a realizar";
 choices[17][1] = "Tareas a realizar";
 choices[17][2] = "Referencias a tener en cuenta";
 choices[17][3] = "Todas las anteriores respuestas son correctas";
 answers[17] = choices[17][3];
 units[17] = "76";
 comments[17] = "Id Pregunta: 2322. ";


//  Id pregunta: 2551 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Uno de los est&aacute;ndares de representaci&oacute;n de c&oacute;digos de barras en dos dimensiones es:";
 choices[18]= new Array();
 choices[18][0] = "PDF 417";
 choices[18][1] = "EPS 417";
 choices[18][2] = "PES 417";
 choices[18][3] = "2DC 417";
 answers[18] = choices[18][0];
 units[18] = "93";
 comments[18] = "Id Pregunta: 2551. ";


//  Id pregunta: 2714 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;C&oacute;mo se puede mantener la sesi&oacute;n en CGIs?";
 choices[19]= new Array();
 choices[19][0] = "Mediante campos ocultos en los formularios";
 choices[19][1] = "Mediantes cookies";
 choices[19][2] = "Mediante formularios o cookies indistintamente";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][2];
 units[19] = "114";
 comments[19] = "Id Pregunta: 2714. ";


//  Id pregunta: 2778 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  La utilizaci&oacute;n de prototipos tiene como objetivo/s:";
 choices[20]= new Array();
 choices[20][0] = "Reducir el riesgo del proyecto";
 choices[20][1] = "Conseguir mayor aceptaci&oacute;n del sistema final por el &aacute;rea usuaria";
 choices[20][2] = "Definir con exactitud los requisitos de los usuarios";
 choices[20][3] = "las respuestas a) y b) son correctas";
 answers[20] = choices[20][0];
 units[20] = "85";
 comments[20] = "Id Pregunta: 2778. ";


//  Id pregunta: 2843 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  Un filtro de Prewitt es ";
 choices[21]= new Array();
 choices[21][0] = "un filtro de mediana empleado para realizar realces geom&eacute;tricos";
 choices[21][1] = "un filtro de mediana empleado para realizar realces radiom&eacute;tricos";
 choices[21][2] = "es similar en concepto a un filtro de Tukey";
 choices[21][3] = "un filtro paso alto empleado para realizar realces geom&eacute;tricos";
 answers[21] = choices[21][3];
 units[21] = "93";
 comments[21] = "Id Pregunta: 2843. ";


//  Id pregunta: 2992 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderse con su router por defecto";
 choices[22]= new Array();
 choices[22][0] = "10.2.40.64";
 choices[22][1] = "10.2.41.45";
 choices[22][2] = "10.2.40.63";
 choices[22][3] = "10.2.40.62";
 answers[22] = choices[22][3];
 units[22] = "100";
 comments[22] = "Id Pregunta: 2992. ";


//  Id pregunta: 3015 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  Entre las carater&iacute;sticas de propagaci&oacute;n de las ondas de radiofrecuencia, cu&aacute;l de las siguientes afirmaciones no es correcta cuando se incrementa la frecuencia?";
 choices[23]= new Array();
 choices[23][0] = "Menor alcance de la se&ntilde;al";
 choices[23][1] = "menor ancho de banda";
 choices[23][2] = "mayor inmunidad al ruido";
 choices[23][3] = "mayor necesidad de visibilidad directa";
 answers[23] = choices[23][1];
 units[23] = "107";
 comments[23] = "Id Pregunta: 3015. ";


//  Id pregunta: 3171 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes funciones corresponder&iacute;an al nivel de red en el Modelo de referencia OSI?:";
 choices[24]= new Array();
 choices[24][0] = "Compartici&oacute;n de circuito f&iacute;sico";
 choices[24][1] = "Establecimiento de varias comunicaciones simult&aacute;neas";
 choices[24][2] = "Cifrado de datos";
 choices[24][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[24] = choices[24][3];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3171. ";


//  Id pregunta: 3200 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  El acceso b&aacute;sico en RDSI:";
 choices[25]= new Array();
 choices[25][0] = "Es utilizado exclusivamente por un &uacute;nico terminal";
 choices[25][1] = "Puede ser compartido hasta por un m&aacute;ximo de diecis&eacute;is terminales";
 choices[25][2] = "Puede ser compartido hasta por un m&aacute;ximo de ocho terminales";
 choices[25][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[25] = choices[25][2];
 units[25] = "103";
 comments[25] = "Id Pregunta: 3200. ";


//  Id pregunta: 3224 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes no debe ser un requisito de los sistemas de cableado?:";
 choices[26]= new Array();
 choices[26][0] = "Alto grado de flexibilidad";
 choices[26][1] = "M&iacute;nimas interrupciones";
 choices[26][2] = "Bajo costo en tiempo de diagn&oacute;stico y reparaci&oacute;n";
 choices[26][3] = "Eliminaci&oacute;n de las tecnolog&iacute;as obsoletas";
 answers[26] = choices[26][3];
 units[26] = "97";
 comments[26] = "Id Pregunta: 3224. ";


//  Id pregunta: 3266 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;En qu&eacute; componente de una red GSM se centraliza la gesti&oacute;n de los servicios suplementarios?:";
 choices[27]= new Array();
 choices[27][0] = "MSC";
 choices[27][1] = "HLR";
 choices[27][2] = "VLR";
 choices[27][3] = "EIR";
 answers[27] = choices[27][1];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3266. ";


//  Id pregunta: 3497 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  En el modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se definen una serie de niveles. &iquest;Cu&aacute;l o cuales de los siguientes deber&iacute;a soportar la red de conmutaci&oacute;n en un caso ideal?:";
 choices[28]= new Array();
 choices[28][0] = "Los tres primeros: f&iacute;sico, red y enlace";
 choices[28][1] = "El nivel 3: red";
 choices[28][2] = "Los niveles 3 y 4: transporte y red";
 choices[28][3] = "Los dos primeros niveles: f&iacute;sico y enlace";
 answers[28] = choices[28][0];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3497. ";


//  Id pregunta: 3565 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  En un mensaje de correo electr&oacute;nico cifrado, seg&uacute;n el protocolo S-MIME,  se reciben cifrados:";
 choices[29]= new Array();
 choices[29][0] = "La direcci&oacute;n de correo electr&oacute;nico del destinatario y la direcci&oacute;n de correo electr&oacute;nico del remitente";
 choices[29][1] = "El cuerpo del mensaje y sus archivos adjuntos";
 choices[29][2] = "La &quot;traza&quot; del mensaje (servidores SMTP por los que ha sido encaminado)";
 choices[29][3] = "El asunto del mensaje, el tipo de contenido y la fecha";
 answers[29] = choices[29][1];
 units[29] = "106";
 comments[29] = "Id Pregunta: 3565. ";


//  Id pregunta: 3681 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  La utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico mediante redes de sat&eacute;lites:";
 choices[30]= new Array();
 choices[30][0] = "Se regula de acuerdo al derecho p&uacute;blico";
 choices[30][1] = "Se regula mediante derecho internacional";
 choices[30][2] = "Su gesti&oacute;n no puede darse en concesi&oacute;n";
 choices[30][3] = "Ninguna de las anteriores respuestas es correcta ";
 answers[30] = choices[30][1];
 units[30] = "110";
 comments[30] = "Id Pregunta: 3681. ";


//  Id pregunta: 3905 Año de creación de pregunta: 2003-01-01
 questions[31]= "32)  Sobre el est&aacute;ndar IEEE 802.20 se puede afirmar que:";
 choices[31]= new Array();
 choices[31][0] = "No existe a&uacute;n ese est&aacute;ndar";
 choices[31][1] = "Es el est&aacute;ndar relativo a redes inal&aacute;mbricas metropolitanas de banda ancha ";
 choices[31][2] = "Es el est&aacute;ndar de acesso inal&aacute;mbrico m&oacute;vil de banda ancha";
 choices[31][3] = "Nada de lo anterior es cierto";
 answers[31] = choices[31][2];
 units[31] = "107";
 comments[31] = "Id Pregunta: 3905. ";


//  Id pregunta: 3935 Año de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Qu&eacute; es cierto, en los diagramas de clases?";
 choices[32]= new Array();
 choices[32][0] = "Los atributos se representan debajo  en la caja de representaci&oacute;n de la clase ";
 choices[32][1] = "Las interfaces se representan mediante carpetas";
 choices[32][2] = "Los atributos se representan en medio  en la caja de representaci&oacute;n de la clase";
 choices[32][3] = "Los atributos se representan  en la zona superior de representaci&oacute;n de la clase";
 answers[32] = choices[32][0];
 units[32] = "82";
 comments[32] = "Id Pregunta: 3935. ";


//  Id pregunta: 4089 Año de creación de pregunta: 2006-01-01
 questions[33]= "34)  Cuando hablamos de tecnolog&iacute;a .NET, los interfaces de servicios";
 choices[33]= new Array();
 choices[33][0] = "Se denominan tambi&eacute;n fachadas empresariales";
 choices[33][1] = "permiten exponer el acceso a los datos como un servicio";
 choices[33][2] = "Interaccionan directamente con el usuario";
 choices[33][3] = "Ninguna de las anteriores es correcta";
 answers[33] = choices[33][0];
 units[33] = "115";
 comments[33] = "Id Pregunta: 4089. ";


//  Id pregunta: 4138 Año de creación de pregunta: 2006-01-01
 questions[34]= "35)  La capacidad de un cortafuegos de controlar el estado de las conexiones activas y usar esta informaci&oacute;n para decidir que paquetes de red deja pasar se llama";
 choices[34]= new Array();
 choices[34][0] = "An&aacute;lisis de puertos (Application firewall)";
 choices[34][1] = "Filtrado est&aacute;tico de paquetes (Static Packet filtering)";
 choices[34][2] = "Inspecci&oacute;n completa de estado (Stateful Packet filtering)";
 choices[34][3] = "Barrido ICMP (ICMP Scanning)";
 answers[34] = choices[34][2];
 units[34] = "113";
 comments[34] = "Id Pregunta: 4138. ";


//  Id pregunta: 4143 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  La intrusi&oacute;n basada en la habilidad del intruso en enga&ntilde;ar a la gente para que rompa los procedimientos normales de seguridad se llama";
 choices[35]= new Array();
 choices[35][0] = "surfeo sobre los hombros (shoulder surfing)";
 choices[35][1] = "huellas del cerebro (brain fingerprinting)";
 choices[35][2] = "ingenier&iacute;a social";
 choices[35][3] = "susterfugio";
 answers[35] = choices[35][2];
 units[35] = "111";
 comments[35] = "Id Pregunta: 4143. ";


//  Id pregunta: 4193 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  La herramienta MRTG";
 choices[36]= new Array();
 choices[36][0] = "Puede generar gr&aacute;ficas de cantidad de tr&aacute;fico";
 choices[36][1] = "Utiliza SNMP";
 choices[36][2] = "Es una herramienta gratuita";
 choices[36][3] = "todas las anteriores";
 answers[36] = choices[36][3];
 units[36] = "104";
 comments[36] = "Id Pregunta: 4193. ";


//  Id pregunta: 4214 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[37]= new Array();
 choices[37][0] = "Java 2 Micro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java";
 choices[37][1] = "Los Java 2 Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java";
 choices[37][2] = "Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http";
 choices[37][3] = "Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet";
 answers[37] = choices[37][2];
 units[37] = "116";
 comments[37] = "Id Pregunta: 4214. ";


//  Id pregunta: 4216 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  El entorno Microsoft, WebDAV";
 choices[38]= new Array();
 choices[38][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio";
 choices[38][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e intranets";
 choices[38][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red";
 choices[38][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos";
 answers[38] = choices[38][1];
 units[38] = "115";
 comments[38] = "Id Pregunta: 4216. ";


//  Id pregunta: 4228 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Indique cu&aacute;l de las siguientes respuestas no es correcta en relaci&oacute;n con los est&aacute;ndares 802.11x del IEEE:";
 choices[39]= new Array();
 choices[39][0] = "802.11a utiliza la banda de 5 GHz, 802.11b y 802.11g  la de 2,4 GHz";
 choices[39][1] = "802.11a alcanza velocidades de 54 Mbps, 802.11b y 802.11g de 11 Mbps";
 choices[39][2] = "802.11i se refiere a mejoras de seguridad";
 choices[39][3] = "802.11e se refiere a calidad de servicio";
 answers[39] = choices[39][1];
 units[39] = "107";
 comments[39] = "Id Pregunta: 4228. ";


//  Id pregunta: 4270 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  Indique cu&aacute;l de los siguientes criterios pondera la situaci&oacute;n m&aacute;s optimista con la m&aacute;s pesimista mediante un factor alfa:";
 choices[40]= new Array();
 choices[40][0] = "Criterio de Laplace";
 choices[40][1] = "Criterio de Wald";
 choices[40][2] = "Criterio de Savage";
 choices[40][3] = "Criterio de Hurwicz";
 answers[40] = choices[40][3];
 units[40] = "";
 comments[40] = "Id Pregunta: 4270. ";


//  Id pregunta: 4501 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Trabajando con un diagrama PERT vemos que se retrasa una etapa no perteneciente al camino critico. Este aumento de duraci&oacute;n, &iquest;retrasar&aacute; la fecha del final del proyecto?";
 choices[41]= new Array();
 choices[41][0] = "Siempre, dado que todo retraso en una etapa afecta a la duraci&oacute;n del proyecto.";
 choices[41][1] = "Nunca, al no pertenecer la etapa al camino cr&iacute;tico.";
 choices[41][2] = "S&oacute;lo si la nueva duraci&oacute;n de la etapa es superior a la duraci&oacute;n de cualquiera de las otras etapas.";
 choices[41][3] = "S&oacute;lo si la nueva duraci&oacute;n convierte en critico el camino al que pertenece la etapa.";
 answers[41] = choices[41][3];
 units[41] = "27";
 comments[41] = "Id Pregunta: 4501. Castilla la Mancha 06";


//  Id pregunta: 4685 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  En el &aacute;mbito de la miner&iacute;a de datos &iquest;c&oacute;mo se llama la herramienta con la que se establecen relaciones entre elementos?";
 choices[42]= new Array();
 choices[42][0] = "Clasificaci&oacute;n.";
 choices[42][1] = "Asociaci&oacute;n.";
 choices[42][2] = "Agrupaci&oacute;n.";
 choices[42][3] = "Secuenciaci&oacute;n.";
 answers[42] = choices[42][2];
 units[42] = "68";
 comments[42] = "Id Pregunta: 4685. Examen 2006 JCYL";


//  Id pregunta: 4754 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l es el est&aacute;ndar en gesti&oacute;n de servicios de TI compatible con ITIL (IT Infrastructure Library)?";
 choices[43]= new Array();
 choices[43][0] = "ISO/IEC 20000";
 choices[43][1] = "ISO/IEC 6592";
 choices[43][2] = "ETSI TS 125 308";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = choices[43][0];
 units[43] = "98";
 comments[43] = "Id Pregunta: 4754. ";


//  Id pregunta: 4918 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Qu&eacute; afirmaci&oacute;n es incorrecta?:";
 choices[44]= new Array();
 choices[44][0] = "WSDL es un documento XML.";
 choices[44][1] = "XML es un est&aacute;ndar W3C.";
 choices[44][2] = "SOAP requiere de HTTP o SMTP como protocolos de transporte.";
 choices[44][3] = "Las PDAs pueden usar Servicios Web.";
 answers[44] = choices[44][2];
 units[44] = "69";
 comments[44] = "Id Pregunta: 4918. Examen TIC B 2007";


//  Id pregunta: 4954 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Qu&eacute; t&eacute;cnica no es aplicable para dise&ntilde;ar un producto web usable y centrado en el usuario?:";
 choices[45]= new Array();
 choices[45][0] = "Card Sorting.";
 choices[45][1] = "L&oacute;gica Fuzzy.";
 choices[45][2] = "Eye Tracking.";
 choices[45][3] = "An&aacute;lisis de Secuencia.";
 answers[45] = choices[45][1];
 units[45] = "39";
 comments[45] = "Id Pregunta: 4954. Examen TIC B 2007";


//  Id pregunta: 5086 Año de creación de pregunta: 2001-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes algoritmos se basa en el problema de factorizaci&oacute;n entera?";
 choices[46]= new Array();
 choices[46][0] = "el algoritmo RIPEMD-160";
 choices[46][1] = "los algoritmos RSA y RW";
 choices[46][2] = "los algoritmos DHE y DSAE";
 choices[46][3] = "el algoritmo Rijndael";
 answers[46] = choices[46][1];
 units[46] = "72";
 comments[46] = "Id Pregunta: 5086. ";


//  Id pregunta: 5104 Año de creación de pregunta: 2003-01-01
 questions[47]= "48)  En un sistema de informaci&oacute;n, los informes espec&iacute;ficos que no se hab&iacute;an pedido anteriormente y que los directivos necesitan con rapidez para resolver un problema muy concreto ser&aacute;n para:";
 choices[47]= new Array();
 choices[47][0] = "Un nivel operativo";
 choices[47][1] = "Un nivel t&aacute;ctico";
 choices[47][2] = "Un nivel estrat&eacute;gico";
 choices[47][3] = "Un nivel transaccional";
 answers[47] = choices[47][1];
 units[47] = "22";
 comments[47] = "Id Pregunta: 5104. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5180 Año de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l no es una metodolog&iacute;a de Desarrollo Orientada a Objetos?";
 choices[48]= new Array();
 choices[48][0] = "Merise";
 choices[48][1] = "Booch";
 choices[48][2] = "OMT";
 choices[48][3] = "RUP";
 answers[48] = choices[48][0];
 units[48] = "79";
 comments[48] = "Id Pregunta: 5180. ";


//  Id pregunta: 5305 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n corresponde a:";
 choices[49]= new Array();
 choices[49][0] = "Ministerio de Industria";
 choices[49][1] = "Gobierno";
 choices[49][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[49][3] = "Ninguno de los anteriores";
 answers[49] = choices[49][1];
 units[49] = "110";
 comments[49] = "Id Pregunta: 5305. ";


//  Id pregunta: 5636 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Una soluci&oacute;n RAID 5 necesita como m&iacute;nimo:";
 choices[50]= new Array();
 choices[50][0] = "Dos discos";
 choices[50][1] = "Tres discos";
 choices[50][2] = "Un disco";
 choices[50][3] = "Cuatro discos";
 answers[50] = choices[50][1];
 units[50] = "48";
 comments[50] = "Id Pregunta: 5636. ";


//  Id pregunta: 5639 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es err&oacute;nea:";
 choices[51]= new Array();
 choices[51][0] = "Un microcomputador dispone de una CPU basada en un &uacute;nico microprocesador (chip)";
 choices[51][1] = "Un computador &oacute;ptico se basa en las propiedades de la luz para el tratamiento de la informaci&oacute;n";
 choices[51][2] = "Un computador empotrado es un computador de prop&oacute;sito especial, dise&ntilde;ado para llevar a cabo una funci&oacute;n dedicada concreta";
 choices[51][3] = "Un nanocomputador se basa en tecnolog&iacute;a de silicio/semiconductores";
 answers[51] = choices[51][3];
 units[51] = "49";
 comments[51] = "Id Pregunta: 5639. ";


//  Id pregunta: 5672 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique la respuesta incorrecta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[52]= new Array();
 choices[52][0] = "El modelo de datos de Active Directory deriva del modelo de datos X.500";
 choices[52][1] = "Active Directory utiliza DNS como servicio de ubicaci&oacute;n";
 choices[52][2] = "El identificador &uacute;nico global de objetos, GUID, es un n&uacute;mero de 64 bitsdel que se garantiza su unicidad, y que se asigna a los objetos cuando secrean.";
 choices[52][3] = "En la lista de protocolos compatibles se incluye LDAP, en sus versiones 2 y 3.";
 answers[52] = choices[52][2];
 units[52] = "56";
 comments[52] = "Id Pregunta: 5672. ";


//  Id pregunta: 5692 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Una de las zonas de datos que se encuentran dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico es la denominada zona de seguridad. Esta zona que almacena, entre otros, los datos biom&eacute;tricos, es accesible por:";
 choices[53]= new Array();
 choices[53][0] = "El ciudadano";
 choices[53][1] = "El ciudadano y la Direcci&oacute;n General de la Polic&iacute;a";
 choices[53][2] = " La Direcci&oacute;n General de la Polic&iacute;a";
 choices[53][3] = "Es una zona p&uacute;blica";
 answers[53] = choices[53][2];
 units[53] = "74";
 comments[53] = "Id Pregunta: 5692. ";


//  Id pregunta: 5721 Año de creación de pregunta: 2009-01-01
 questions[54]= "55)  El XSLT transforma:";
 choices[54]= new Array();
 choices[54][0] = "S&oacute;lo de XML a XML";
 choices[54][1] = "De XML a otro documento";
 choices[54][2] = "S&oacute;lo de XML a HTML";
 choices[54][3] = "De un documento a XML";
 answers[54] = choices[54][1];
 units[54] = "69";
 comments[54] = "Id Pregunta: 5721. MAP 2008 A1";


//  Id pregunta: 5731 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un tipo de workflow?";
 choices[55]= new Array();
 choices[55][0] = "Workflow de administraci&oacute;n";
 choices[55][1] = "Workflow de colaboraci&oacute;n";
 choices[55][2] = "Workflow de coordinaci&oacute;n";
 choices[55][3] = "Workflow de producci&oacute;n";
 answers[55] = choices[55][2];
 units[55] = "71";
 comments[55] = "Id Pregunta: 5731. ";


//  Id pregunta: 5856 Año de creación de pregunta: 2009-01-01
 questions[56]= "57)  El JTC-1 es un comit&eacute; t&eacute;cnico conjunto de normalizaci&oacute;n en &aacute;mbito de las TIC formado por:";
 choices[56]= new Array();
 choices[56][0] = "CEN y CENELEC";
 choices[56][1] = "ISO e IEC";
 choices[56][2] = "CEN y ETSI";
 choices[56][3] = "ISO y CIE";
 answers[56] = choices[56][1];
 units[56] = "42";
 comments[56] = "Id Pregunta: 5856. Pregunta 36";


//  Id pregunta: 5882 Año de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Cu&aacute;ndo deber&aacute;n tener implantadas la totalidad de las medidas de seguridad los ficheros, tanto automatizados como no automatizados, creados con posterioridad a la fecha de entrada en vigor del RD 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de Desarrollo de la LOPD?:";
 choices[57]= new Array();
 choices[57][0] = "En el plazo de un a&ntilde;o desde su creaci&oacute;n";
 choices[57][1] = "En el plazo de seis meses desde su creaci&oacute;n";
 choices[57][2] = "En el momento de su creaci&oacute;n";
 choices[57][3] = "Depender&aacute; del tama&ntilde;o del fichero";
 answers[57] = choices[57][2];
 units[57] = "29";
 comments[57] = "Id Pregunta: 5882. MAP 2008 A1";


//  Id pregunta: 5918 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  CobiT identific&oacute; los siguientes elementos clave, con respecto a los aspectos de seguridad:";
 choices[58]= new Array();
 choices[58][0] = "Idoneidad, continuidad de negocio y certificaci&oacute;n internacional";
 choices[58][1] = "Confidencialidad, integridad y disponibilidad";
 choices[58][2] = "Criticidad, autenticaci&oacute;n y consistencia";
 choices[58][3] = "Convergencia, coherencia y salvaguarda";
 answers[58] = choices[58][1];
 units[58] = "98";
 comments[58] = "Id Pregunta: 5918. MAP 2008 A1";


//  Id pregunta: 6005 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  El est&aacute;ndar WSDL:";
 choices[59]= new Array();
 choices[59][0] = "Es el protocolo para efectuar llamadas a m&eacute;todos de objetos remotos mediante peticiones XML.";
 choices[59][1] = "Describe la interfaz de servicio";
 choices[59][2] = "Es el registro p&uacute;blico de servicios.";
 choices[59][3] = "Es el protocolo de transporte.";
 answers[59] = choices[59][1];
 units[59] = "69";
 comments[59] = "Id Pregunta: 6005. TIC A 2009";


//  Id pregunta: 6065 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  NO figura entre los objetivos de las normas y procedimientos de seguridad:";
 choices[60]= new Array();
 choices[60][0] = "La adecuaci&oacute;n a aspectos de accesibilidad, usabilidad y utilizaci&oacute;n de lenguas cooficiales.";
 choices[60][1] = "La confidencialidad, disponibilidad e integridad de la informaci&oacute;n.";
 choices[60][2] = "La necesidad de controles de acceso.";
 choices[60][3] = "La adecuaci&oacute;n a normativa de la Agencia de Protecci&oacute;n de Datos.";
 answers[60] = choices[60][0];
 units[60] = "32";
 comments[60] = "Id Pregunta: 6065. TIC A 2009";


//  Id pregunta: 6243 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas acerca de OLAP es correcta?";
 choices[61]= new Array();
 choices[61][0] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo UPDATE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo DELETE.";
 choices[61][1] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo SELECT, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo INSERT, UPDATE, DELETE.";
 choices[61][2] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo UPDATE.";
 choices[61][3] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo SELECT, INSERT y UPDATE.";
 answers[61] = choices[61][1];
 units[61] = "68";
 comments[61] = "Id Pregunta: 6243. TICB-2009, bloque desarrollo";


//  Id pregunta: 6294 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de alto nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[62]= new Array();
 choices[62][0] = "Prototipos";
 choices[62][1] = "Sesiones JAD y JRP";
 choices[62][2] = "Entorno de Bucles Adaptativo";
 choices[62][3] = "Todas lo son";
 answers[62] = choices[62][3];
 units[62] = "78";
 comments[62] = "Id Pregunta: 6294. ";


//  Id pregunta: 6442 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Seg&uacute;n la normativa en materia de normalizaci&oacute;n en el campo de las tecnolog&iacute;as de la informaci&oacute;n y las telecomunicaciones, se obliga a usar normas europeas e Internacionales en la Adquisici&oacute;n de Bienes y Servicios TIC, y NO es una excepci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Continuidad de funcionamiento";
 choices[63][1] = "Naturaleza innovadora de algunos proyectos";
 choices[63][2] = "Soluci&oacute;n de coste excesivo. Cuando tras un estudio de mercado, existan razones relacionadas con la efectividad del coste que hacen inadecuada el uso de la norma.";
 choices[63][3] = "Compras menores o iguales a 100.000 euros.";
 answers[63] = choices[63][3];
 units[63] = "41";
 comments[63] = "Id Pregunta: 6442. Castilla La Mancha 2009";


//  Id pregunta: 6446 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  Los usuarios de dispositivos m&oacute;viles con Windows Mobile 6, pueden sincronizarse con Exchange Server mediante el uso, en el dispositivo m&oacute;vil, de:";
 choices[64]= new Array();
 choices[64][0] = "PalmSync";
 choices[64][1] = "StrongARM";
 choices[64][2] = "MobileSync";
 choices[64][3] = "ActiveSync";
 answers[64] = choices[64][3];
 units[64] = "47";
 comments[64] = "Id Pregunta: 6446. Castilla La Mancha 2009";


//  Id pregunta: 6466 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Indique la respuesta incorrecta sobre la gesti&oacute;n de configuraci&oacute;n.";
 choices[65]= new Array();
 choices[65][0] = "Una l&iacute;nea base es un conjunto de actividades para gestionar el cambio a lo largo del ciclo de vida del software.";
 choices[65][1] = "El impacto de los cambios puede evaluarse a trav&eacute;s de las relaciones entre los objetos de configuraci&oacute;n.";
 choices[65][2] = "La gesti&oacute;n de configuraci&oacute;n del software es una actividad protectiva.";
 choices[65][3] = "Las herramientas de desarrollo pueden formar parte de una l&iacute;nea base.";
 answers[65] = choices[65][0];
 units[65] = "91";
 comments[65] = "Id Pregunta: 6466. Castilla La Mancha 2009";


//  Id pregunta: 6469 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  En M&eacute;trica V3, qu&eacute; producto NO se elabora en el proceso Plan de Sistemas de Informaci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Modelo de procesos de la organizaci&oacute;n";
 choices[66][1] = "Plan de Migraci&oacute;n y Carga Inicial de Datos";
 choices[66][2] = "Arquitectura Tecnol&oacute;gica";
 choices[66][3] = "Plan de proyectos";
 answers[66] = choices[66][1];
 units[66] = "86";
 comments[66] = "Id Pregunta: 6469. Castilla La Mancha 2009";


//  Id pregunta: 6488 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes es una herramienta IDS?";
 choices[67]= new Array();
 choices[67][0] = "Nessus";
 choices[67][1] = "Snort";
 choices[67][2] = "Nagios";
 choices[67][3] = "NetSaint";
 answers[67] = choices[67][1];
 units[67] = "111";
 comments[67] = "Id Pregunta: 6488. Castilla La Mancha 2009";


//  Id pregunta: 6569 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  El certificado X.509 no";
 choices[68]= new Array();
 choices[68][0] = "Fue definido por el antes denominado CCITT (actualmente ITU) en la recomendaci&oacute;n X.509";
 choices[68][1] = "En esta recomendaci&oacute;n se define un modelo seguro para suministrar el servicio de autenticaci&oacute;n a los usuarios del Directorio X.500 basado en criptograf&iacute;a de clave p&uacute;blica";
 choices[68][2] = "La recomendaci&oacute;n X.509 [CCI88] define un modelo de certificado en sintaxis ASN.1";
 choices[68][3] = "Todas las respuestas anteriores son ciertas";
 answers[68] = choices[68][3];
 units[68] = "73";
 comments[68] = "Id Pregunta: 6569. ";


//  Id pregunta: 6612 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Para validar la consistencia en el an&aacute;lisis estructurado se utiliza:";
 choices[69]= new Array();
 choices[69][0] = "M&eacute;trica v3 ";
 choices[69][1] = "La t&eacute;cnica DFQM (Data Flow Quality Model)";
 choices[69][2] = "El balanceo entre los DFD's de niveles consecutivos";
 choices[69][3] = "El balanceo entre los DFD's de igual nivel";
 answers[69] = choices[69][2];
 units[69] = "81";
 comments[69] = "Id Pregunta: 6612. ";


//  Id pregunta: 7250 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  La direcci&oacute;n IPv4 172.30.120.135/12 es una direcci&oacute;n de tipo:";
 choices[70]= new Array();
 choices[70][0] = "Direcci&oacute;n de red broadcast";
 choices[70][1] = "Direcci&oacute;n de red privada";
 choices[70][2] = "Direcci&oacute;n de red de enlace local";
 choices[70][3] = "Direcci&oacute;n de red p&uacute;blica";
 answers[70] = choices[70][1];
 units[70] = "100";
 comments[70] = "Id Pregunta: 7250. Examen TIC B 2009";


//  Id pregunta: 7768 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   En el entorno del lenguaje Java, AWT se refiere a:";
 choices[71]= new Array();
 choices[71][0] = " Una extensi&oacute;n de Swing.";
 choices[71][1] = " Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario.";
 choices[71][2] = " Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent.";
 choices[71][3] = " Una familia de fuentes de caracteres.";
 answers[71] = choices[71][1];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7768. Map 2005";


//  Id pregunta: 7788 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[72]= new Array();
 choices[72][0] = " Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP.";
 choices[72][1] = " Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica.";
 choices[72][2] = " Los ficheros con este formato son independientes de la plataforma.";
 choices[72][3] = " Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los ficheros que contiene.";
 answers[72] = choices[72][3];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7788. Map 2005";


//  Id pregunta: 7806 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   IEEE 1392 es:";
 choices[73]= new Array();
 choices[73][0] = " Un formato de CD.";
 choices[73][1] = " Un proyecto de formato DVD-Audio.";
 choices[73][2] = " Una norma dirigida a dispositivos de alta velocidad como c&aacute;maras de v&iacute;deo e impresoras profesionales.";
 choices[73][3] = " Un norma que regula exclusivamente el ajuste y calibrado del color.";
 answers[73] = choices[73][2];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7806. Map 2005";


//  Id pregunta: 7843 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   &iquest;Cu&aacute;l de los siguientes organismos de normalizaci&oacute;n ha promovido el est&aacute;ndar GSM?";
 choices[74]= new Array();
 choices[74][0] = " ISO (International Standards Organization).";
 choices[74][1] = " IEEE (Institute of Electrical Engineers).";
 choices[74][2] = " ETSI (European Telecommunications Standards Institute).";
 choices[74][3] = " CEN (Comit&eacute; Europeo de Normalizaci&oacute;n).";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7843. Map 2005";


//  Id pregunta: 8021 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   &iquest;Cu&aacute;l es la naturaleza jur&iacute;dica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos?";
 choices[75]= new Array();
 choices[75][0] = " Organismo aut&oacute;nomo.";
 choices[75][1] = " Entidad P&uacute;blica Empresarial.";
 choices[75][2] = " Ente de Derecho p&uacute;blico regulado por su legislaci&oacute;n espec&iacute;fica.";
 choices[75][3] = " Agencia Estatal de las previstas en la Ley 28/2006, de 18 de julio. (Art. 35 LO 13/1999 y Disposici&oacute;n adicional d&eacute;cima de la LOFAGE).";
 answers[75] = choices[75][2];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 8021. Map 2007";


//  Id pregunta: 8045 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)   &iquest;En cu&aacute;l de las siguientes zonas del chip del DNIe se almacenan los datos biom&eacute;tricos?";
 choices[76]= new Array();
 choices[76][0] = " Zona p&uacute;blica.";
 choices[76][1] = " Zona privada.";
 choices[76][2] = " Zona de seguridad.";
 choices[76][3] = " Zona compartida.";
 answers[76] = choices[76][2];
 units[76] = "NULL";
 comments[76] = "Id Pregunta: 8045. Map 2007";


//  Id pregunta: 8079 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)   En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?";
 choices[77]= new Array();
 choices[77][0] = " Es una red que interconecta las redes Administrativas de los estados miembros y de las instituciones y agencias europeas.";
 choices[77][1] = " Es un instrumento vertebrador e integrador que ofrece a las Administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones.";
 choices[77][2] = " La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet.";
 choices[77][3] = " Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC.";
 answers[77] = choices[77][2];
 units[77] = "NULL";
 comments[77] = "Id Pregunta: 8079. Map 2008";


//  Id pregunta: 8249 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  Asumiendo que el cliente y el servidor se ejecutan en diferentes m&aacute;quinas, y considerando como local aquella m&aacute;quina con acceso a la pantalla y al teclado, la combinaci&oacute;n correcta respecto a Xwindows(X11) y Microsoft Terminal Server (TS) es:";
 choices[78]= new Array();
 choices[78][0] = "El cliente X11 y el cliente TS se ejecutan de manera local y el servidor X11 y el servidor TS de manera remota.";
 choices[78][1] = "El cliente X11 y el servidor TS se ejecutan de manera local y el servidor X11 y el cliente TS de manera remota.";
 choices[78][2] = "El servidor X11 y el cliente TS se ejecutan de manera local y el cliente X11 y el servidor TS de manera remota.";
 choices[78][3] = "El servidor X11 y el servidor TS se ejecutan de manera local y el cliente X11 y el cliente TS de manera remota.";
 answers[78] = choices[78][2];
 units[78] = "119";
 comments[78] = "Id Pregunta: 8249. Examen TIC A1 2010";


//  Id pregunta: 8341 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[79]= new Array();
 choices[79][0] = "El Diccionario de Datos.";
 choices[79][1] = "El Diagrama de Flujo de Datos.";
 choices[79][2] = "Las especificaciones de procesos.";
 choices[79][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[79] = choices[79][3];
 units[79] = "86";
 comments[79] = "Id Pregunta: 8341. Examen TIC A2 2010";


//  Id pregunta: 8460 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  En una SAN, la direcci&oacute;n f&iacute;sica de una HBA se denomina:";
 choices[80]= new Array();
 choices[80][0] = "WWN";
 choices[80][1] = "MAC";
 choices[80][2] = "SPOF";
 choices[80][3] = "IP";
 answers[80] = choices[80][0];
 units[80] = "48";
 comments[80] = "Id Pregunta: 8460. Analista Ayto. Madrid 2010";


//  Id pregunta: 8511 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  De las siguientes normas, &iquest;cu&aacute;l est&aacute; referida al c&oacute;digo de buenas pr&aacute;cticas en gesti&oacute;n de la seguridad de la Informaci&oacute;n? ";
 choices[81]= new Array();
 choices[81][0] = "ISO/lEC 13335-2. ";
 choices[81][1] = "ISO/lEC 17799:2005. ";
 choices[81][2] = "UNE 71502:2004. ";
 choices[81][3] = "ISO 10646. ";
 answers[81] = choices[81][1];
 units[81] = "111";
 comments[81] = "Id Pregunta: 8511. Examen TIC A2 2010";


//  Id pregunta: 8546 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;En qu&eacute; recomendaci&oacute;n de la Uni&oacute;n Internacional de Telecomunicaciones viene recogida la tecnolog&iacute;a ADSL-Lite?";
 choices[82]= new Array();
 choices[82][0] = "ITU G.992.1.";
 choices[82][1] = "ITU G.992.2";
 choices[82][2] = "ITU G.992.3.";
 choices[82][3] = "ITUG.992.4.";
 answers[82] = choices[82][1];
 units[82] = "107";
 comments[82] = "Id Pregunta: 8546. Examen TIC A2 2010 interna";


//  Id pregunta: 8637 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[83]= new Array();
 choices[83][0] = "No tiene claves.";
 choices[83][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[83][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[83][3] = "Conserva la clave de la entidad fuerte.";
 answers[83] = choices[83][1];
 units[83] = "57, 58";
 comments[83] = "Id Pregunta: 8637. Examen TIC A2 2010 interna";


//  Id pregunta: 8847 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es la tecnolog&iacute;a que permite una mayor velocidad de transferencia de datos?";
 choices[84]= new Array();
 choices[84][0] = " EDGE";
 choices[84][1] = "HSDPA";
 choices[84][2] = " UMTS/3G";
 choices[84][3] = "GPRS";
 answers[84] = choices[84][1];
 units[84] = "108";
 comments[84] = "Id Pregunta: 8847. Examen UC3M 2010";


//  Id pregunta: 8898 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Se&ntilde;ale la respuesta correcta relativa a m&eacute;todos de asignaci&oacute;n de pesos a los criterios";
 choices[85]= new Array();
 choices[85][0] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[85][1] = "El m&eacute;todo de las Utilidades Relativas es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo de AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[85][2] = "Tanto el m&eacute;todo de las Utilidades Relativas como el m&eacute;todo AHP son m&eacute;todos de asignaci&oacute;n directa";
 choices[85][3] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 answers[85] = choices[85][3];
 units[85] = "34";
 comments[85] = "Id Pregunta: 8898. ";


//  Id pregunta: 8921 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  El proceso de normalizaci&oacute;n tiene por objeto";
 choices[86]= new Array();
 choices[86][0] = "Establecer reglas de nombrado uniformes para las entidades, los atributos y las relaciones";
 choices[86][1] = "Obtener el dise&ntilde;o f&iacute;sico del modelo de datos";
 choices[86][2] = "Eliminar las dependencias entre atributos que originen anomal&iacute;as en el tratamiento de los datos";
 choices[86][3] = "Homogeneizar el n&uacute;mero de dimensiones de las tablas de la base de datos";
 answers[86] = choices[86][2];
 units[86] = "58";
 comments[86] = "Id Pregunta: 8921. Operador Ayto. Madrid 2010";


//  Id pregunta: 8997 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Una red bluetooth de tipo piconet tiene un m&aacute;ximo de:";
 choices[87]= new Array();
 choices[87][0] = "1 maestro y 7 esclavos";
 choices[87][1] = "1 maestro y 15 esclavos";
 choices[87][2] = "1 maestro y 16 esclavos";
 choices[87][3] = "1 maestro y 32 esclavos";
 answers[87] = choices[87][0];
 units[87] = "107";
 comments[87] = "Id Pregunta: 8997. Examen UPM A2 2011";


//  Id pregunta: 9081 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Indique cu&aacute;l es el n&uacute;mero de protocolo IPv6";
 choices[88]= new Array();
 choices[88][0] = "17";
 choices[88][1] = "41";
 choices[88][2] = "47";
 choices[88][3] = "50";
 answers[88] = choices[88][1];
 units[88] = "111";
 comments[88] = "Id Pregunta: 9081. ";


//  Id pregunta: 9189 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguiente no es una T&eacute;cnica?";
 choices[89]= new Array();
 choices[89][0] = "Prototipado";
 choices[89][1] = "Normalizaci&oacute;n";
 choices[89][2] = "Diagrama de paquetes";
 choices[89][3] = "Casos de uso";
 answers[89] = choices[89][0];
 units[89] = "86";
 comments[89] = "Id Pregunta: 9189. ";


//  Id pregunta: 9260 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y adem&aacute;s puede acceder a las memorias de otros procesadores se conoce como:";
 choices[90]= new Array();
 choices[90][0] = "SMP ";
 choices[90][1] = "Grid ";
 choices[90][2] = "NUMA ";
 choices[90][3] = "Cluster ";
 answers[90] = choices[90][2];
 units[90] = "45";
 comments[90] = "Id Pregunta: 9260. Examen TICA2-2011";


//  Id pregunta: 9352 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es la velocidad disponible de un acceso b&aacute;sico RDSI en Europa?";
 choices[91]= new Array();
 choices[91][0] = "1544";
 choices[91][1] = "64";
 choices[91][2] = "2048";
 choices[91][3] = "1024";
 answers[91] = choices[91][2];
 units[91] = "103";
 comments[91] = "Id Pregunta: 9352. Pruebas selectivas para Gesti&oacute;n de Sistemas e Inform&aacute;tica de la UPM 2011. Libre";


//  Id pregunta: 9390 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  El servicio universal de telecomunicaciones es:";
 choices[92]= new Array();
 choices[92][0] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza en un &aacute;mbito compartido entre varios usuarios, con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[92][1] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[92][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a los usuarios con las rentas m&aacute;s bajas con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[92][3] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los centros de formaci&oacute;n con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada.";
 answers[92] = choices[92][1];
 units[92] = "110";
 comments[92] = "Id Pregunta: 9390. Examen TIC A1 2011 Libre";


//  Id pregunta: 9419 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  El modelo de estimaci&oacute;n de Putnam se caracteriza por";
 choices[93]= new Array();
 choices[93][0] = "Ser un modelo te&oacute;rico";
 choices[93][1] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[93][2] = "Incluir una constante tecnol&oacute;gica";
 choices[93][3] = "Todas las anteriores";
 answers[93] = choices[93][3];
 units[93] = "89";
 comments[93] = "Id Pregunta: 9419. ";


//  Id pregunta: 9482 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  &iquest;Qu&eacute; t&eacute;cnicas de rentabilidad de inversiones TIC considera M&eacute;tricav3?";
 choices[94]= new Array();
 choices[94][0] = "Retorno de la inversi&oacute;n";
 choices[94][1] = "VAN";
 choices[94][2] = "Las dos opciones anteriores son correctas";
 choices[94][3] = "Todas las opciones son incorrectas";
 answers[94] = choices[94][2];
 units[94] = "38";
 comments[94] = "Id Pregunta: 9482. ";


//  Id pregunta: 9764 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  En M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes no es un rol participante?";
 choices[95]= new Array();
 choices[95][0] = "Directivo";
 choices[95][1] = "Jefe de Proyecto";
 choices[95][2] = "Consultor";
 choices[95][3] = "Usuario experto";
 answers[95] = choices[95][3];
 units[95] = "86";
 comments[95] = "Id Pregunta: 9764. Seg&uacute;n M&eacute;trica v3, el usuario experto estar&iacute;a englobado en el rol &quot;Directivo&quot;.";


//  Id pregunta: 9941 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  El formato MP3:";
 choices[96]= new Array();
 choices[96][0] = "fue dise&ntilde;ado en 1984 en el Instituto Karlsruher.";
 choices[96][1] = "utiliza el algoritmo de compresi&oacute;n Lempel-Ziv-Welch (LZW).";
 choices[96][2] = "fue aprobado por el &ldquo;Motion Picture Experts Group&rdquo; en 1992.";
 choices[96][3] = "permite compresiones del orden de 10 a 1 respecto al formato CD, conp&eacute;rdida de informaci&oacute;n.";
 answers[96] = choices[96][3];
 units[96] = "93";
 comments[96] = "Id Pregunta: 9941. TIC A1, Examen 2013";


//  Id pregunta: 10036 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[97]= new Array();
 choices[97][0] = "Ping ";
 choices[97][1] = "ICMP";
 choices[97][2] = "PPP";
 choices[97][3] = "RSVP";
 answers[97] = choices[97][1];
 units[97] = "100";
 comments[97] = "Id Pregunta: 10036. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10094 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l NO se considera una t&eacute;cnica general del an&aacute;lisis de requisitos?";
 choices[98]= new Array();
 choices[98][0] = "Abstracci&oacute;n";
 choices[98][1] = "Proyecci&oacute;n";
 choices[98][2] = "Partici&oacute;n";
 choices[98][3] = "Todas se consideran t&eacute;cnicas generales";
 answers[98] = choices[98][3];
 units[98] = "78";
 comments[98] = "Id Pregunta: 10094. ";


//  Id pregunta: 10283 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  En Sql Server 2012 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[99]= new Array();
 choices[99][0] = "rdlccfg";
 choices[99][1] = "tsmrpt";
 choices[99][2] = "rptsetup";
 choices[99][3] = "rsconfig";
 answers[99] = choices[99][3];
 units[99] = "58";
 comments[99] = "Id Pregunta: 10283. TIC A2, libre, examen 2013";


