/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 6 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes organismos no corresponde a la estructura organizativa t&eacute;cnica de la normalizaci&oacute;n comunitaria?:";
 choices[0]= new Array();
 choices[0][0] = "ETSI (Instituto Europeo de Normalizaci&oacute;n de Telecomunicaciones)";
 choices[0][1] = "CENELEC (Comit&eacute; Europeo de Electr&oacute;nica)";
 choices[0][2] = "SITAR (Instituto Internacional de Tratamiento de la Informaci&oacute;n)";
 choices[0][3] = "CEPT (Confederaci&oacute;n Europea de Administraciones de Correos y Telecomunicaciones)";
 answers[0] = choices[0][2];
 units[0] = "42";
 comments[0] = "Id Pregunta: 6. ";


//  Id pregunta: 39 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes respuestas no puede considerarse como un est&aacute;ndar abierto?:";
 choices[1]= new Array();
 choices[1][0] = "SNA";
 choices[1][1] = "C++";
 choices[1][2] = "SQL";
 choices[1][3] = "TCP/IP";
 answers[1] = choices[1][0];
 units[1] = "40";
 comments[1] = "Id Pregunta: 39. ";


//  Id pregunta: 68 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas atiende &uacute;nicamente al criterio de mayor peso y mayor puntuaci&oacute;n, resolviendo los empates con el siguiente de mayor peso?:";
 choices[2]= new Array();
 choices[2][0] = "Concordancia";
 choices[2][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[2][2] = "Ponderaci&oacute;n lineal";
 choices[2][3] = "Ninguno de los anteriores";
 answers[2] = choices[2][1];
 units[2] = "34";
 comments[2] = "Id Pregunta: 68. ";


//  Id pregunta: 171 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En auditor&iacute;a inform&aacute;tica, los controles de salida contienen, entre otros, a:";
 choices[3]= new Array();
 choices[3][0] = "Registro y almacenamiento de formularios negociables";
 choices[3][1] = "Autorizaci&oacute;n de la distribuci&oacute;n";
 choices[3][2] = "Balanceo y conciliaci&oacute;n";
 choices[3][3] = "Todas las anteriores";
 answers[3] = choices[3][3];
 units[3] = "31,32,33";
 comments[3] = "Id Pregunta: 171. ";


//  Id pregunta: 215 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  En la funci&oacute;n de almacenamiento de datos de un sistema de informaci&oacute;n no es necesario tener en cuenta:";
 choices[4]= new Array();
 choices[4][0] = "El papel de la base de datos";
 choices[4][1] = "La organizaci&oacute;n de la base de datos";
 choices[4][2] = "Almacenamiento en l&iacute;nea versus fuera de l&iacute;nea";
 choices[4][3] = "Enfoque integrado, capturando s&oacute;lo una vez un elemento dado de datos";
 answers[4] = choices[4][3];
 units[4] = "21";
 comments[4] = "Id Pregunta: 215. ";


//  Id pregunta: 247 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  En una organizaci&oacute;n de tipo gran hermano:";
 choices[5]= new Array();
 choices[5][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[5][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[5][2] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 choices[5][3] = "El HW, el desarrollo y las decisiones se descentralizan";
 answers[5] = choices[5][0];
 units[5] = "22";
 comments[5] = "Id Pregunta: 247. ";


//  Id pregunta: 705 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  Cu&aacute;l no es una caracter&iacute;stica del software libre:";
 choices[6]= new Array();
 choices[6][0] = "Libertad de distribuir copias";
 choices[6][1] = "Gratuidad";
 choices[6][2] = "Libertad de realizar modificaciones particulares y mantenerlas para uso privado";
 choices[6][3] = "C&oacute;digo abierto";
 answers[6] = choices[6][1];
 units[6] = "61";
 comments[6] = "Id Pregunta: 705. Similar a examen TIC MAP A 2004";


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


//  Id pregunta: 860 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes dispositivos no tiene relaci&oacute;n con el almacenamiento de la informaci&oacute;n?:";
 choices[8]= new Array();
 choices[8][0] = "RAID";
 choices[8][1] = "OCR";
 choices[8][2] = "WORM";
 choices[8][3] = "DAT";
 answers[8] = choices[8][1];
 units[8] = "48";
 comments[8] = "Id Pregunta: 860. ";


//  Id pregunta: 884 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l es la diferencia b&aacute;sica entre C y C++?";
 choices[9]= new Array();
 choices[9][0] = "C++ es la versi&oacute;n de C estandarizada por ANSI (tambi&eacute;n se le conoce como ANSI-C).";
 choices[9][1] = "C++ es un superconjunto de instrucciones de C para soportar programaci&oacute;n orientada a objetos.";
 choices[9][2] = "C++ es la versi&oacute;n de C preparada por los laboratorios Bell de ATT que permite embeber sentencias SQL.";
 choices[9][3] = "C++ es una versi&oacute;n 4GL del C est&aacute;ndar (lenguaje de 4&ordf; generaci&oacute;n) mientras que C es un lenguaje de 3&ordf; generaci&oacute;n.";
 answers[9] = choices[9][1];
 units[9] = "82, 84";
 comments[9] = "Id Pregunta: 884. ";


//  Id pregunta: 938 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; relaci&oacute;n existe entre SGML y HTML?:";
 choices[10]= new Array();
 choices[10][0] = "HTML es un subconjunto de SGML";
 choices[10][1] = "SGML es un subconjunto de HTML";
 choices[10][2] = "SGML se inspir&oacute; en HTML";
 choices[10][3] = "No tienen relaci&oacute;n";
 answers[10] = choices[10][0];
 units[10] = "69";
 comments[10] = "Id Pregunta: 938. ";


//  Id pregunta: 1122 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  En los m&eacute;todos de b&uacute;squeda heur&iacute;stica:";
 choices[11]= new Array();
 choices[11][0] = "El proceso de soluci&oacute;n se plantea como la b&uacute;squeda de estados que contiene todas las posibles soluciones";
 choices[11][1] = "Las estrategias de b&uacute;squeda en anchura pertenecen a la heur&iacute;stica deductiva";
 choices[11][2] = "La amplitud del espacio de estados en un problema dado, dif&iacute;cilmente puede dar lugar a una explosi&oacute;n combinatoria al tratar de enumerar todas las posibilidades";
 choices[11][3] = "En un caso extremo, una b&uacute;squeda ciega (sin funci&oacute;n heur&iacute;stica), obligar&aacute; a realizar una exploraci&oacute;n exhaustiva (en anchura o en profundidad)";
 answers[11] = choices[11][3];
 units[11] = "63";
 comments[11] = "Id Pregunta: 1122. ";


//  Id pregunta: 1357 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  SHA-1 es un algoritmo empleado por la criptograf&iacute;a sim&eacute;trica de:";
 choices[12]= new Array();
 choices[12][0] = "Res&uacute;men";
 choices[12][1] = "Bloques";
 choices[12][2] = "Flujos";
 choices[12][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[12] = choices[12][0];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1357. ";


//  Id pregunta: 1367 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Si se comparan los diferentes sistemas de almacenamiento secundario:";
 choices[13]= new Array();
 choices[13][0] = "La velocidad de transferencia es del mismo orden en una unidad de cinta DAT que en una unidad de disco magn&eacute;tico";
 choices[13][1] = "La capacidad de almacenamiento de una cinta de cartucho normal de 0,25&quot; es similar a la de un CD-ROM de 5&quot; 1/4";
 choices[13][2] = "Los discos WORM y los magneto-opticos ofrecen la posibilidad de borrar y reescribir informaci&oacute;n";
 choices[13][3] = "En las unidades de cinta no se puede intercalar informaci&oacute;n adicional, por el contrario, para hacerlo habr&iacute;a que regrabar todo el resto de la cinta";
 answers[13] = choices[13][3];
 units[13] = "48";
 comments[13] = "Id Pregunta: 1367. ";


//  Id pregunta: 1572 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest;En cu&aacute;l de los siguientes modelos de arquitectura cliente-servidor, el cliente asume mayor carga de proceso?:";
 choices[14]= new Array();
 choices[14][0] = "Base de datos remota.";
 choices[14][1] = "Proceso distribuido.";
 choices[14][2] = "Presentaci&oacute;n remota.";
 choices[14][3] = "Presentaci&oacute;n distribuida.";
 answers[14] = choices[14][0];
 units[14] = "50";
 comments[14] = "Id Pregunta: 1572. Junta Andaluc&iacute;a";


//  Id pregunta: 1576 Año de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es un &lsquo;trigger&rsquo;?";
 choices[15]= new Array();
 choices[15][0] = "Es un procedimiento asociado a una acci&oacute;n (inserci&oacute;n, borrado o modificaci&oacute;n) y a una tabla que se ejecuta cada vez que se intenta realizar una determinada operaci&oacute;n sobre dicha tabla.";
 choices[15][1] = "Es un puntero interno al SGBD que apunta a las filas de las tablas sobre la que est&aacute; definido y sirve para acelerar el acceso a los datos de la base.";
 choices[15][2] = "Es un archivo privado del SGBD en el que se apuntan todas las operaciones que se realizan sobre la base de datos.";
 choices[15][3] = "Es un tipo de distribuci&oacute;n de las filas de una tabla que permite hacer accesos en paralelo a los datos de dicha tabla.";
 answers[15] = choices[15][0];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1576. ";


//  Id pregunta: 1716 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Los sistemas operativos multitarea:";
 choices[16]= new Array();
 choices[16][0] = "se conocen tambi&eacute;n como sistemas multiproceso";
 choices[16][1] = "tienen una &uacute;nica CPU que cambia de una tarea a otra dando la apariencia de que se realizan concurrentemente ";
 choices[16][2] = "son &quot;preemptive&quot; si cada tarea controla el tiempo que utiliza la CPU";
 choices[16][3] = "son &quot;cooperative&quot; si el sistema operativo controla el tiempo que cada tarea utiliza la CPU";
 answers[16] = choices[16][1];
 units[16] = "52";
 comments[16] = "Id Pregunta: 1716. ";


//  Id pregunta: 2029 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  Ivar Jacobson, Jim Rumbaugh y Grady Booch fueron los creadores de:";
 choices[17]= new Array();
 choices[17][0] = "UML";
 choices[17][1] = "XML";
 choices[17][2] = "HTML";
 choices[17][3] = "Ninguno de los anteriores";
 answers[17] = choices[17][0];
 units[17] = "82";
 comments[17] = "Id Pregunta: 2029. Similar a examen TIC SS A 2003";


//  Id pregunta: 2445 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Las metodolog&iacute;as:";
 choices[18]= new Array();
 choices[18][0] = "Definen el conjunto de elementos del mundo real que intervienen en el sistema y son modelizables";
 choices[18][1] = "Emplean formalismos gr&aacute;ficos para derivar los procedimientos y recursos";
 choices[18][2] = "Emplean t&eacute;cnicas de auditor&iacute;a como fuente de integraci&oacute;n de prototipos";
 choices[18][3] = "Existen dos enfoques: en los m&eacute;todos aqu&eacute;llos que se orientan hacia los datos y aquellos que se orientan hacia los tratamientos";
 answers[18] = choices[18][3];
 units[18] = "79";
 comments[18] = "Id Pregunta: 2445. ";


//  Id pregunta: 2665 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  El n&uacute;mero de bits por p&iacute;xel se define como:";
 choices[19]= new Array();
 choices[19][0] = "Profundidad del p&iacute;xel.";
 choices[19][1] = "Flexibilidad.";
 choices[19][2] = "Diafragma digital.";
 choices[19][3] = "ECW.";
 answers[19] = choices[19][0];
 units[19] = "93";
 comments[19] = "Id Pregunta: 2665. ";


//  Id pregunta: 2689 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[20]= new Array();
 choices[20][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[20][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[20][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][2];
 units[20] = "87,88,92";
 comments[20] = "Id Pregunta: 2689. ";


//  Id pregunta: 2702 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  Respecto al an&aacute;lisis esencial de Yourdon se puede afirmar que ...";
 choices[21]= new Array();
 choices[21][0] = "Se ha de elaborar un modelo esencial y un modelo de implantaci&oacute;n de usuario";
 choices[21][1] = "El modelo esencial de compone de modelo ambiental  y modelo de comportamiento";
 choices[21][2] = "Para describir el modelo de comportamiento se usan DFDs y diagramas E-R";
 choices[21][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[21] = choices[21][3];
 units[21] = "81,84,78";
 comments[21] = "Id Pregunta: 2702. ";


//  Id pregunta: 2748 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  En un DFD (Diagrama de Flujos de Datos)  el diagrama que  se representa mediante las entidades externas de entrada y salida y un solo proceso principal es el:";
 choices[22]= new Array();
 choices[22][0] = "Diagrama de bloques";
 choices[22][1] = "Diagrama de contexto";
 choices[22][2] = "Diagrama de primer nivel";
 choices[22][3] = "Diagrama b&aacute;sico";
 answers[22] = choices[22][1];
 units[22] = "81";
 comments[22] = "Id Pregunta: 2748. ";


//  Id pregunta: 2856 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  En el analisis documental &iquest;qu&eacute; nivel no se emplea ?";
 choices[23]= new Array();
 choices[23][0] = "asiento";
 choices[23][1] = "indizaci&oacute;n";
 choices[23][2] = "resumen";
 choices[23][3] = "todos ellos se emplean";
 answers[23] = choices[23][3];
 units[23] = "95";
 comments[23] = "Id Pregunta: 2856. ";


//  Id pregunta: 2883 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &quot;Personas&quot; en el modelo EFQM?";
 choices[24]= new Array();
 choices[24][0] = "Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos";
 choices[24][1] = "Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n";
 choices[24][2] = "Existencia de un autoliderazgo en las personas de la organizaci&oacute;n";
 choices[24][3] = "Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "92";
 comments[24] = "Id Pregunta: 2883. ";


//  Id pregunta: 2988 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "DNS: Sistema de nombres de dominio";
 choices[25][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[25][2] = "FTP: Protocolo de transferencia de archivos";
 choices[25][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[25] = choices[25][3];
 units[25] = "100";
 comments[25] = "Id Pregunta: 2988. ";


//  Id pregunta: 3119 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;A qu&eacute; se denomina 'modem nulo'?:";
 choices[26]= new Array();
 choices[26][0] = "A un modem para transportar datos por lineas digitales y que por lo tanto no modula ni demodula nada";
 choices[26][1] = "A un modem sin microprocesador de control";
 choices[26][2] = "A un cable inversor que conecta dos ETDs entre s&iacute;";
 choices[26][3] = "A un equipo que modula y demodula una se&ntilde;al nula";
 answers[26] = choices[26][2];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3119. ";


//  Id pregunta: 3478 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  El tipo de fibra &oacute;ptica que permite la transmisi&oacute;n a m&aacute;s velocidad es:";
 choices[27]= new Array();
 choices[27][0] = "&Iacute;ndice gradual";
 choices[27][1] = "Multimodo";
 choices[27][2] = "Fibra &oacute;ptica de salto de &iacute;ndice";
 choices[27][3] = "Monomodo";
 answers[27] = choices[27][3];
 units[27] = "99";
 comments[27] = "Id Pregunta: 3478. ";


//  Id pregunta: 3573 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  En una conexi&oacute;n V.90:";
 choices[28]= new Array();
 choices[28][0] = "Los m&oacute;dems siempre han de sincronizarse a 56k.";
 choices[28][1] = "Los m&oacute;dems no establecen protocolo de negociaci&oacute;n de par&aacute;metros previo a la conexi&oacute;n.";
 choices[28][2] = "La negociaci&oacute;n se hace v&iacute;a protocolos TCP.";
 choices[28][3] = "La velocidad de conexi&oacute;n se negocia entre los dos m&oacute;dem de acuerdo a las caracter&iacute;sticas de la l&iacute;nea.";
 answers[28] = choices[28][3];
 units[28] = "100, 103";
 comments[28] = "Id Pregunta: 3573. modems";


//  Id pregunta: 3676 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  Una red de conmutaci&oacute;n de paquetes en la que cada paquete viaja por una ruta diferente se dice que opera en modo:";
 choices[29]= new Array();
 choices[29][0] = "Circuito virtual permanente";
 choices[29][1] = "Circuito virtual conmutado";
 choices[29][2] = "Datagrama";
 choices[29][3] = "Multiplexaci&oacute;n estad&iacute;stica";
 answers[29] = choices[29][2];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3676. ";


//  Id pregunta: 3719 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los conectores que se insertan en los hubs 10 base T son del tipo:";
 choices[30]= new Array();
 choices[30][0] = "RJ11";
 choices[30][1] = "RJ45";
 choices[30][2] = "RJ37";
 choices[30][3] = "V.24";
 answers[30] = choices[30][1];
 units[30] = "99";
 comments[30] = "Id Pregunta: 3719. ";


//  Id pregunta: 3801 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Sabiendo que se dice que una fibra monomodo es aquella que transmite un &uacute;nico modo de propagaci&oacute;n de un haz monocrom&aacute;tico de luz. Indique cu&aacute;l de las afirmaciones siguientes es verdadera: ";
 choices[31]= new Array();
 choices[31][0] = "Las fibras &oacute;pticas monomodo son las m&aacute;s adecuadas para la transmisi&oacute;n de se&ntilde;ales con un ancho de banda peque&ntilde;o y a grandes distancias";
 choices[31][1] = "La fibras &oacute;pticas monomodo son las adecuadas para transmitir se&ntilde;ales de gran ancho de banda y a grandes distancias";
 choices[31][2] = "Las fibras &oacute;pticas monomodo son &uacute;nicamente adecuadas para la transmisi&oacute;n de se&ntilde;ales anal&oacute;gicas";
 choices[31][3] = "Todas las anteriores respuestas son correctas";
 answers[31] = choices[31][1];
 units[31] = "99";
 comments[31] = "Id Pregunta: 3801. ";


//  Id pregunta: 3836 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  SOAP es:";
 choices[32]= new Array();
 choices[32][0] = "Synchronized Objects Application Protocol, protocolo de aplicaci&oacute;n sincronizada para objetos";
 choices[32][1] = "System Open Access Protocol, protocolo de acceso abierto a sistemas";
 choices[32][2] = "Simple Object Access Protocol, protocolo de acceso simple a objetos";
 choices[32][3] = "SOAP no se corresponde con ningun acr&oacute;nimo aplicable en tecnolog&iacute;a";
 answers[32] = choices[32][2];
 units[32] = "113";
 comments[32] = "Id Pregunta: 3836. ";


//  Id pregunta: 3889 Año de creación de pregunta: 2003-01-01
 questions[33]= "34)  En cuanto a los Servicios Web, no se puede decir que:";
 choices[33]= new Array();
 choices[33][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[33][1] = "Es independiente de la plataforma";
 choices[33][2] = "Es independiente del lenguaje de programaci&oacute;n y de la plataforma";
 choices[33][3] = "Sus est&aacute;ndares son m&aacute;s complejos que los usados en CORBA";
 answers[33] = choices[33][3];
 units[33] = "51";
 comments[33] = "Id Pregunta: 3889. Nuevo tema. Arquitectura SOA";


//  Id pregunta: 3956 Año de creación de pregunta: 2003-01-01
 questions[34]= "35)  La depuraci&oacute;n (debug) de resultados intermedios durante la ejecuci&oacute;n de trabajos java:";
 choices[34]= new Array();
 choices[34][0] = "S&oacute;lo se permite desde la m&aacute;quina donde se ejecuta";
 choices[34][1] = "No se permite la ejecuci&oacute;n de paradas intermedias";
 choices[34][2] = "Hay una arquitectura que incluye depuraci&oacute;n en remoto";
 choices[34][3] = "No tiene sentido la depuraci&oacute;n en remoto";
 answers[34] = choices[34][2];
 units[34] = "60";
 comments[34] = "Id Pregunta: 3956. ";


//  Id pregunta: 3986 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  En relaci&oacute;n a los switches, se&ntilde;ale la respuesta falsa:";
 choices[35]= new Array();
 choices[35][0] = "Tienen mayor rendimiento que los puentes, y pueden trabajar a la velocidad nominal (wire speed) de la interfaz.";
 choices[35][1] = "En la conmutaci&oacute;n &quot;store-and-forward&quot; recibe la trama y la retransmite si es correcta, tras haber comprobado el CRC.";
 choices[35][2] = "En la conmutaci&oacute;n &quot;cut-throutgh&quot; si el CRC es err&oacute;neo la trama no se retransmite";
 choices[35][3] = "Mediante &quot;cut-through libre de fragmentos&quot; se reciben 64 bytes antes de retransmitir.";
 answers[35] = choices[35][2];
 units[35] = "102";
 comments[35] = "Id Pregunta: 3986. ";


//  Id pregunta: 4060 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  Cual de los siguientes dispositivos es m&aacute;s barato";
 choices[36]= new Array();
 choices[36][0] = "Adaptador Ethernet";
 choices[36][1] = "Adaptador Bluetooth";
 choices[36][2] = "Adaptador Wi-Fi";
 choices[36][3] = "Adaptador Wi-Max";
 answers[36] = choices[36][1];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4060. ";


//  Id pregunta: 4096 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  Con que tecnolog&iacute;a se relaciona el Bytecode";
 choices[37]= new Array();
 choices[37][0] = "Java";
 choices[37][1] = ".Net";
 choices[37][2] = "Java Script";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][0];
 units[37] = "116";
 comments[37] = "Id Pregunta: 4096. ";


//  Id pregunta: 4128 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[38]= new Array();
 choices[38][0] = "XML";
 choices[38][1] = "Xerces";
 choices[38][2] = "UDDI";
 choices[38][3] = "WSDL";
 answers[38] = choices[38][3];
 units[38] = "112,51";
 comments[38] = "Id Pregunta: 4128. ";


//  Id pregunta: 4145 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Un programa aparentemente in&oacute;cuo y &uacute;til que al instalarlo el usuario comienza a realizar acciones destructivas sobre el sistema en un momento determinado de tiempo o a ra&iacute;z de una acci&oacute;n concreta se llama";
 choices[39]= new Array();
 choices[39][0] = "sniffer";
 choices[39][1] = "bomba l&oacute;gica";
 choices[39][2] = "troyano";
 choices[39][3] = "gusano";
 answers[39] = choices[39][1];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4145. ";


//  Id pregunta: 4203 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos con reparto balanceado de la carga de trabajo";
 choices[40]= new Array();
 choices[40][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[40][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[40][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[40][3] = "No puede ser conocido a priori";
 answers[40] = choices[40][0];
 units[40] = "104";
 comments[40] = "Id Pregunta: 4203. ";


//  Id pregunta: 4234 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[41]= new Array();
 choices[41][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps";
 choices[41][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos";
 choices[41][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado";
 choices[41][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos";
 answers[41] = choices[41][0];
 units[41] = "108";
 comments[41] = "Id Pregunta: 4234. ";


//  Id pregunta: 4256 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  Cu&aacute;l de los siguientes programas NO pertenece al Plan Avanza";
 choices[42]= new Array();
 choices[42][0] = "Programa Ayuntamiento Digital, continuaci&oacute;n del Programa Ciudades Digitales que tiene como objetivo la promoci&oacute;n e implantaci&oacute;n de la Sociedad de la Informaci&oacute;n en Entidades Locales.";
 choices[42][1] = "El Plan Concilia, plan integral de conciliaci&oacute;n de la vida personal y laboral en la Administraci&oacute;n General del Estado.";
 choices[42][2] = "El Programa de Fomento de la Investigaci&oacute;n T&eacute;cnica (PROFIT), destinadas a estimular a las empresas y a otras entidades a llevar a cabo actividades de investigaci&oacute;n y desarrollo tecnol&oacute;gico.";
 choices[42][3] = "DNI electr&oacute;nico, dirigido a ampliar nuestras capacidades de actuar a distancia con las Administraciones P&uacute;blicas, con las empresas y con otros ciudadanos";
 answers[42] = choices[42][1];
 units[42] = "30";
 comments[42] = "Id Pregunta: 4256. Esta pregunta es muy antigua y con demasiado detalle para ser tan antigua, pero nunca se sabe.";


//  Id pregunta: 4271 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  Indique cu&aacute;l de los siguientes est&aacute;ndares se aplica a la seguridad de los sistemas inform&aacute;ticos";
 choices[43]= new Array();
 choices[43][0] = "ISO 12207";
 choices[43][1] = "ISO 2167";
 choices[43][2] = "ISO 27002";
 choices[43][3] = "ISO 9004";
 answers[43] = choices[43][2];
 units[43] = "33";
 comments[43] = "Id Pregunta: 4271. ";


//  Id pregunta: 4288 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  La calidad del software entregado ser&aacute; alta si la EED (Eficacia de la Eliminaci&oacute;n de Defectos):";
 choices[44]= new Array();
 choices[44][0] = "Se acerca a uno";
 choices[44][1] = "Se acerca a cero.";
 choices[44][2] = "Es mayor que uno.";
 choices[44][3] = "Es negativa.";
 answers[44] = choices[44][0];
 units[44] = "87";
 comments[44] = "Id Pregunta: 4288. ";


//  Id pregunta: 4310 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura .Net no es correcta?:";
 choices[45]= new Array();
 choices[45][0] = "Las aplicaciones .Net s&oacute;lo pueden ejecutarse en los sistemas operativos Windows.";
 choices[45][1] = ".NET soporta la creaci&oacute;n de Servicios Web XML independientes de la plataforma, a trav&eacute;s de SOAP.";
 choices[45][2] = "El proceso de compilaci&oacute;n en .Net produce un fichero ejecutable al que se denomina portable executable (PE).";
 choices[45][3] = "Al c&oacute;digo escrito para ejecutarse en la plataforma .NET se le llama c&oacute;digo gestionado.";
 answers[45] = choices[45][0];
 units[45] = "59";
 comments[45] = "Id Pregunta: 4310. JCED - Preparatic XVII";


//  Id pregunta: 4333 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  Un Puente o Bridge:";
 choices[46]= new Array();
 choices[46][0] = "S&oacute;lo funcionan con TCP/IP.";
 choices[46][1] = "Puede dividir una red en dos segmentos.";
 choices[46][2] = "Permiten establecer una Topolog&iacute;a en Estrella en una red en BUS al garantizar la compatibilidad en el nivel 2 de OSI.";
 choices[46][3] = "Encaminan la informaci&oacute;n hacia el destino siguiendo el trayecto m&aacute;s corto por la red.";
 answers[46] = choices[46][1];
 units[46] = "100";
 comments[46] = "Id Pregunta: 4333. ";


//  Id pregunta: 4375 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Indique cu&aacute;l de los siguientes no es un proceso principal incluido en M&eacute;trica versi&oacute;n 3:";
 choices[47]= new Array();
 choices[47][0] = "Desarrollo de Sistemas de Informaci&oacute;n.";
 choices[47][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[47][2] = "Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[47][3] = "An&aacute;lisis de Requisitos del Sistema.";
 answers[47] = choices[47][3];
 units[47] = "86";
 comments[47] = "Id Pregunta: 4375. ";


//  Id pregunta: 4389 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  En el entorno de base de datos, los &iacute;ndices son de vital importancia en las transacciones de acceso, &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[48]= new Array();
 choices[48][0] = "El &iacute;ndice es tambi&eacute;n una tabla almacenada en un disco.";
 choices[48][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos.";
 choices[48][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario.";
 choices[48][3] = "Las actualizaciones de los &iacute;ndices no consumen recursos.";
 answers[48] = choices[48][3];
 units[48] = "58";
 comments[48] = "Id Pregunta: 4389. ";


//  Id pregunta: 4431 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;C&oacute;mo se denomina en telefon&iacute;a IP el elemento encargado de registrar los dispositivos que realizan llamadas usando la red IP?";
 choices[49]= new Array();
 choices[49][0] = "Gateway.";
 choices[49][1] = "Terminal.";
 choices[49][2] = "IVR";
 choices[49][3] = "Gatekeeper.";
 answers[49] = choices[49][3];
 units[49] = "109";
 comments[49] = "Id Pregunta: 4431. ";


//  Id pregunta: 4449 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  En relaci&oacute;n con la licencia GPL (GNU Public License), una de las siguientes afirmaciones no es cierta.";
 choices[50]= new Array();
 choices[50][0] = "Permite redistribuir, ejecutar y mejorar los programas.";
 choices[50][1] = "Proh&iacute;be cobrar un precio por el acto f&iacute;sico de transferir una copia.";
 choices[50][2] = "No permite que incluya sus programas en programas propietarios.";
 choices[50][3] = "Fue creada por la Free Software Foundation.";
 answers[50] = choices[50][1];
 units[50] = "36";
 comments[50] = "Id Pregunta: 4449. ";


//  Id pregunta: 4577 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Qu&eacute; actividades de las siguientes se incluyen en el ciclo de vida cl&aacute;sico, tambi&eacute;n Ilamado &quot;modelo en cascada&quot;?";
 choices[51]= new Array();
 choices[51][0] = "an&aacute;lisis del sistema, an&aacute;lisis de riesgo, an&aacute;lisis de requisitos";
 choices[51][1] = "an&aacute;lisis de riesgo, an&aacute;lisis de requisitos y codificaci&oacute;n";
 choices[51][2] = "an&aacute;lisis del sistema, prototipos y codificaci&oacute;n";
 choices[51][3] = "dise&ntilde;o, codificaci&oacute;n y pruebas";
 answers[51] = choices[51][3];
 units[51] = "76";
 comments[51] = "Id Pregunta: 4577. ";


//  Id pregunta: 4645 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  Para establecer una conexi&oacute;n TCP, el emisor env&iacute;a un segmento TCP en el que:";
 choices[52]= new Array();
 choices[52][0] = "el bit CON a 1 y el bit FIN a 0";
 choices[52][1] = "el bit CON a 1 y el bit ACK a 0.";
 choices[52][2] = "el bit SYN a 1 y el bit FIN a 0";
 choices[52][3] = "el bit SYN a 1 y el bit ACK a 0.";
 answers[52] = choices[52][2];
 units[52] = "100";
 comments[52] = "Id Pregunta: 4645. ";


//  Id pregunta: 4678 Año de creación de pregunta: 2009-01-01
 questions[53]= "54)  Tenemos un fichero de tratamiento automatizado que contiene datos sobre ideolog&iacute;a y afiliaci&oacute;n sindical.";
 choices[53]= new Array();
 choices[53][0] = "La LOPD obliga a informar a la Agencia Estatal de Protecci&oacute;n de Datos de su existencia y establece un nivel de seguridad clasificado como medio";
 choices[53][1] = "Solo podemos tener estos datos si existe consentimiento expreso de los afectados.";
 choices[53][2] = "Al no ser un partido pol&iacute;tico o sindicato no podemos tener este tipo de datos";
 choices[53][3] = "Solo podemos tener estos datos si existe consentimiento expreso y por escrito de los afectados o somos un partido pol&iacute;tico o sindicato";
 answers[53] = choices[53][3];
 units[53] = "29";
 comments[53] = "Id Pregunta: 4678. ";


//  Id pregunta: 4699 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  IEFT (Internet Engineering Task Force) se encarga de:";
 choices[54]= new Array();
 choices[54][0] = "Coordinaci&oacute;n entre organizaciones como IEFT, IANA, etc.";
 choices[54][1] = "Asignaci&oacute;n de recursos";
 choices[54][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[54][3] = "Especificaci&oacute;n de est&aacute;ndares.";
 answers[54] = choices[54][3];
 units[54] = "42";
 comments[54] = "Id Pregunta: 4699. Examen 2006 JCYL";


//  Id pregunta: 4755 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  La definici&oacute;n de usabilidad seg&uacute;n el est&aacute;ndar ISO 9241-11:1998 es la siguiente:";
 choices[55]= new Array();
 choices[55][0] = "Grado en que un producto puede ser usado por una persona con alg&uacute;n tipo de discapacidad (f&iacute;sica, cognitiva o tecnol&oacute;gica) respecto a c&oacute;mo lo usar&iacute;a una persona sin discapacidad";
 choices[55][1] = "Capacidad de uso, es decir, caracter&iacute;stica que distingue a los objetos dise&ntilde;ados para su utilizaci&oacute;n de los que no.";
 choices[55][2] = "Grado en que un producto puede ser usado por los usuarios especificados para obtener los resultados especificados con efectividad, eficiencia, y satisfacci&oacute;n en un contexto de uso especificado";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][2];
 units[55] = "39";
 comments[55] = "Id Pregunta: 4755. ";


//  Id pregunta: 4827 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  El marco COBIT (Control Objectives for Information and related Technology) es una herramienta de gobierno de lasTIC. En su marco de control, que identifica los requisitos de negocio, el proceso de &quot;Gesti&oacute;n de la Calidad&quot; seencuentra definido en el dominio de:";
 choices[56]= new Array();
 choices[56][0] = "Planificaci&oacute;n y organizaci&oacute;n";
 choices[56][1] = "Adquisici&oacute;n e Implementaci&oacute;n";
 choices[56][2] = "Servicio y Soporte";
 choices[56][3] = "Monitorizaci&oacute;n";
 answers[56] = choices[56][0];
 units[56] = "98";
 comments[56] = "Id Pregunta: 4827. ";


//  Id pregunta: 4871 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un diagrama UML (Unified Modeling Language)?";
 choices[57]= new Array();
 choices[57][0] = "Diagrama de actividades";
 choices[57][1] = "Diagrama de clases";
 choices[57][2] = "Diagrama de secuencia";
 choices[57][3] = "Diagrama de frecuencia";
 answers[57] = choices[57][3];
 units[57] = "82";
 comments[57] = "Id Pregunta: 4871. ";


//  Id pregunta: 4995 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios incluidos en el Manifiesto de Desarrollo &Aacute;gil de Software (Manifesto for Agile Software Development)?:";
 choices[58]= new Array();
 choices[58][0] = "Aceptamos requisitos cambiantes s&oacute;lo en las primeras etapas del desarrollo.";
 choices[58][1] = "Los procesos &aacute;giles promueven el desarrollo sostenido.";
 choices[58][2] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses,con preferencia por los periodos m&aacute;s cortos posibles.";
 choices[58][3] = "Los responsables de negocio y los desarrolladores deben trabajar juntos diariamente a lo largo del proyecto.";
 answers[58] = choices[58][0];
 units[58] = "76";
 comments[58] = "Id Pregunta: 4995. Examen TIC A 2007";


//  Id pregunta: 5159 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l es la capacidad de un enlace E1?";
 choices[59]= new Array();
 choices[59][0] = "2048 Kbps.";
 choices[59][1] = "1544 Kbps";
 choices[59][2] = "8448 Kbps.";
 choices[59][3] = "155 Mbps.";
 answers[59] = choices[59][0];
 units[59] = "103";
 comments[59] = "Id Pregunta: 5159. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5244 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[60]= new Array();
 choices[60][0] = "Los FCE ayudan a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n";
 choices[60][1] = "Factores de &eacute;xito son los objetivos de la organizaci&oacute;n";
 choices[60][2] = "FCE son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[60][3] = "Para definir los FCE de la organizaci&oacute;n, es necesario que los objetivos de la misma est&eacute;n claramente definidos";
 answers[60] = choices[60][1];
 units[60] = "77";
 comments[60] = "Id Pregunta: 5244. ";


//  Id pregunta: 5285 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indique cu&aacute;l de los siguientes no es un objeto integrado de ASP:";
 choices[61]= new Array();
 choices[61][0] = "Client";
 choices[61][1] = "Application";
 choices[61][2] = "Server";
 choices[61][3] = "Request";
 answers[61] = choices[61][0];
 units[61] = "115";
 comments[61] = "Id Pregunta: 5285. ";


//  Id pregunta: 5508 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  &iquest;Es obligatorio el env&iacute;o de facturas en formato electr&oacute;nico a la AGE?";
 choices[62]= new Array();
 choices[62][0] = "S&iacute;, en todo caso";
 choices[62][1] = "Estar&aacute; condicionada al consentimiento expreso de cada departamento ministerial";
 choices[62][2] = "S&iacute;, cuando se trata de empresas de m&aacute;s de 100 empleados";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][1];
 units[62] = "70";
 comments[62] = "Id Pregunta: 5508. ";


//  Id pregunta: 5509 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  &iquest;C&oacute;mo se garantiza la integridad de la factura?";
 choices[63]= new Array();
 choices[63][0] = "Mediante la exigencia de firma electr&oacute;nica reconocida, en formato XaDES";
 choices[63][1] = "Mediante el uso de un certificado reconocido";
 choices[63][2] = "Mediante la exigencia de firma electr&oacute;nica avanzada, en formato XaDES";
 choices[63][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[63] = choices[63][2];
 units[63] = "70";
 comments[63] = "Id Pregunta: 5509. ";


//  Id pregunta: 5529 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  Indicar cu&aacute;l de las siguientes son t&eacute;cnicas basadas en la comparaci&oacute;n de patrones para el reconocimiento de la voz";
 choices[64]= new Array();
 choices[64][0] = "Programaci&oacute;n din&aacute;mica o DTW (Dynamic Time Warping)";
 choices[64][1] = "Modelos ocultos de Markov o HMM (Hidden Markov Models)";
 choices[64][2] = "Las respuestas a) y b) son verdaderas";
 choices[64][3] = "Ninguna es verdadera";
 answers[64] = choices[64][2];
 units[64] = "94";
 comments[64] = "Id Pregunta: 5529. ";


//  Id pregunta: 5534 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes no es una de las tres prioridades de i2010 (marco estrat&eacute;gico de la Comisi&oacute;n Europea para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n)? ";
 choices[65]= new Array();
 choices[65][0] = "Conseguir un espacio europeo &uacute;nico de la informaci&oacute;n, fomentando un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n";
 choices[65][1] = "El refuerzo de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n en las TIC";
 choices[65][2] = "Mejorar la prestaci&oacute;n de sevicios intraeuropeos mediante la utilizaci&oacute;n masiva de las TIC";
 choices[65][3] = "Una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que concede prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida";
 answers[65] = choices[65][2];
 units[65] = "30";
 comments[65] = "Id Pregunta: 5534. ";


//  Id pregunta: 5560 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Respecto a La Ley 23/2006 que modifica el TRLPI (RD 1/1996), se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[66]= new Array();
 choices[66][0] = "Transpone la Directiva 2001/29/CE.";
 choices[66][1] = "Establece medidas sancionadoras de actos de elusi&oacute;n de medidas tecnol&oacute;gicas eficaces para la protecci&oacute;n de obras.";
 choices[66][2] = "Los programas de ordenador se regir&aacute;n por su propia normativa.";
 choices[66][3] = "El can&oacute;n digital se aplicar&aacute; tanto a equipos anal&oacute;gicos como digitales, como reproductores mp3-mp4, discos duros etc.. ";
 answers[66] = choices[66][3];
 units[66] = "37";
 comments[66] = "Id Pregunta: 5560. ";


//  Id pregunta: 5678 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  En cuanto a Agentes Software y la Comunicaci&oacute;n y Coordinaci&oacute;n entre agentes, indique la respuesta no correcta:";
 choices[67]= new Array();
 choices[67][0] = "En el sistema de pizarra existe una estructura de datos global, la pizarra que es gestionada y arbitrada por todos los agentes";
 choices[67][1] = "En la red de contratos en cada tarea existen dos roles diferentes: el del contratista, que es responsable de la gesti&oacute;n de una tarea y el del oferente, que se encarga de la ejecuci&oacute;n real de la tarea.";
 choices[67][2] = "KQML  es un  lenguaje de comunicaci&oacute;n entre agentes software.";
 choices[67][3] = "Ninguna de las anteriores es correcta";
 answers[67] = choices[67][0];
 units[67] = "63";
 comments[67] = "Id Pregunta: 5678. ";


//  Id pregunta: 5687 Año de creación de pregunta: 2003-01-01
 questions[68]= "69)  Se&ntilde;ale cual de los siguientes datos se encuentra en la zona p&uacute;blica del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[68]= new Array();
 choices[68][0] = "Certificado de autenticaci&oacute;n";
 choices[68][1] = "Certificados de la autoridad de certificaci&oacute;n";
 choices[68][2] = "Datos biom&eacute;tricos";
 choices[68][3] = "Claves privadas del ciudadano";
 answers[68] = choices[68][1];
 units[68] = "74";
 comments[68] = "Id Pregunta: 5687. ";


//  Id pregunta: 5723 Año de creación de pregunta: 2009-01-01
 questions[69]= "70)  Elija la opci&oacute;n correcta:";
 choices[69]= new Array();
 choices[69][0] = "Un documento XML v&aacute;lido es aqu&eacute;l que tiene una sintaxis XML v&aacute;lida.";
 choices[69][1] = "Un documento XML v&aacute;lido es aqu&eacute;l que cumple las reglas de un DTD.";
 choices[69][2] = "Un documento XML v&aacute;lido es aqu&eacute;l que est&aacute; bien formado y tambi&eacute;n cumple con las reglas de un DTD";
 choices[69][3] = "Un documento XML bien formado es aqu&eacute;l que cumple las reglas de un DTD";
 answers[69] = choices[69][2];
 units[69] = "69";
 comments[69] = "Id Pregunta: 5723. MAP 2008 A2";


//  Id pregunta: 5815 Año de creación de pregunta: 2009-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes procedimientos de adjudicaci&oacute;n NO se contempla en el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico?";
 choices[70]= new Array();
 choices[70][0] = "Negociado";
 choices[70][1] = "Abierto";
 choices[70][2] = "Restringido";
 choices[70][3] = "Concurso";
 answers[70] = choices[70][3];
 units[70] = "41";
 comments[70] = "Id Pregunta: 5815. El concurso no es un procedimiento de adjudicaci&oacute;n.";


//  Id pregunta: 5879 Año de creación de pregunta: 2009-01-01
 questions[71]= "72)  Indique quien NO es miembro del Pleno del Consejo Superior de Administraci&oacute;n Electr&oacute;nica:";
 choices[71]= new Array();
 choices[71][0] = "El Presidente del Instituto Nacional de Estad&iacute;stica";
 choices[71][1] = "El Subdirector General del Centro Criptol&oacute;gico Nacional";
 choices[71][2] = "El Interventor General de la Administraci&oacute;n del Estado";
 choices[71][3] = "El Director General de la F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda";
 answers[71] = choices[71][1];
 units[71] = "30";
 comments[71] = "Id Pregunta: 5879. MAP 2008 A1";


//  Id pregunta: 5894 Año de creación de pregunta: 2009-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no corresponde a una tecnolog&iacute;a est&aacute;ndar Java?";
 choices[72]= new Array();
 choices[72][0] = "JSTL";
 choices[72][1] = "JavaScript";
 choices[72][2] = "JNDI";
 choices[72][3] = "JavaCard";
 answers[72] = choices[72][1];
 units[72] = "60";
 comments[72] = "Id Pregunta: 5894. ";


//  Id pregunta: 5904 Año de creación de pregunta: 2009-01-01
 questions[73]= "74)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[73]= new Array();
 choices[73][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n";
 choices[73][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n";
 choices[73][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n";
 choices[73][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n";
 answers[73] = choices[73][1];
 units[73] = "87";
 comments[73] = "Id Pregunta: 5904. MAP 2008 A1";


//  Id pregunta: 5907 Año de creación de pregunta: 2009-01-01
 questions[74]= "75)  &iquest;En cu&aacute;l de las siguientes metodolog&iacute;as de desarrollo de software NO se utilizan Diagramas de Flujo de Datos?";
 choices[74]= new Array();
 choices[74][0] = "De Marco";
 choices[74][1] = "Jackson";
 choices[74][2] = "Gane &amp; Sarson";
 choices[74][3] = "Yourdon/Constantine";
 answers[74] = choices[74][1];
 units[74] = "79";
 comments[74] = "Id Pregunta: 5907. MAP 2008 A1";


//  Id pregunta: 5917 Año de creación de pregunta: 2009-01-01
 questions[75]= "76)  La Ley 9/2014, General de Telecomunicaciones, establece los derechos de los consumidores y usuarios finales. &iquest;Cu&aacute;l de entre los siguientes apartados NO es contemplado por dicha ley como un derecho del usuario individual?";
 choices[75]= new Array();
 choices[75][0] = "Introducir cl&aacute;usulas de modificaci&oacute;n de los contratos con los operadores, para evitar un trato abusivo";
 choices[75][1] = "A recibir facturas no desglosadas cuando as&iacute; lo solicitasen";
 choices[75][2] = "A detener el desv&iacute;o autom&aacute;tico de llamadas efectuado a su terminal por parte de un tercero";
 choices[75][3] = "A impedir, mediante un procedimiento sencillo y gratuito, la prestaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen en la llamadas entrantes y a rechazar las llamadas en que dicha l&iacute;nea no aparezca identificada";
 answers[75] = choices[75][0];
 units[75] = "110";
 comments[75] = "Id Pregunta: 5917. MAP 2008 A1";


//  Id pregunta: 6256 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, la especificaci&oacute;n de los requisitos de implantaci&oacute;n se realiza en:";
 choices[76]= new Array();
 choices[76][0] = "An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[76][1] = "Dise&ntilde;o de Sistema de Informaci&oacute;n";
 choices[76][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[76][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[76] = choices[76][1];
 units[76] = "86";
 comments[76] = "Id Pregunta: 6256. TICB-2009, bloque desarrollo";


//  Id pregunta: 6402 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  Las Administraciones podr&aacute;n poner a disposici&oacute;n de todos los organismos las aplicaciones que decidan declarar de c&oacute;digo abierto, a trav&eacute;s de el&hellip;";
 choices[77]= new Array();
 choices[77][0] = "Centro de Transferencia de Tecnolog&iacute;a";
 choices[77][1] = "Centro de Compartici&oacute;n de Tecnolog&iacute;a";
 choices[77][2] = "Proyecto Aporta";
 choices[77][3] = "Proyecto Comparte";
 answers[77] = choices[77][0];
 units[77] = "30";
 comments[77] = "Id Pregunta: 6402. ";


//  Id pregunta: 6554 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  PKCS#12";
 choices[78]= new Array();
 choices[78][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[78][1] = "Especifica una API, por la que los dispositivos que contienen informaci&oacute;n criptogr&aacute;fica realizan funciones criptogr&aacute;ficas";
 choices[78][2] = "El formato del sobre digital";
 choices[78][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[78] = choices[78][0];
 units[78] = "74";
 comments[78] = "Id Pregunta: 6554. ";


//  Id pregunta: 7245 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  &iquest;A qu&eacute; se corresponde el RFC 793?";
 choices[79]= new Array();
 choices[79][0] = "Al protocolo FTP";
 choices[79][1] = "Al protocolo HTTP";
 choices[79][2] = "Al protocolo TCP";
 choices[79][3] = "Al protocolo IP";
 answers[79] = choices[79][2];
 units[79] = "100";
 comments[79] = "Id Pregunta: 7245. Examen TIC B 2009";


//  Id pregunta: 7885 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)   Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[80]= new Array();
 choices[80][0] = " OSI (Open System Interconnection) de ISO (International Standards Organization).";
 choices[80][1] = " DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation).";
 choices[80][2] = " SNA (System Network Architecture), de IBM.";
 choices[80][3] = " ONS (Open Network Standard) del ITU-T (International Telecommunications Union-Telecommunications).";
 answers[80] = choices[80][3];
 units[80] = "NULL";
 comments[80] = "Id Pregunta: 7885. Map 2006";


//  Id pregunta: 8167 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Respecto al API, Streaming API for XML (StAX), indicar la afirmaci&oacute;n correcta:";
 choices[81]= new Array();
 choices[81][0] = "Emplea &quot;push parsing&quot;.";
 choices[81][1] = "Permite vistas XML de datos no XML.";
 choices[81][2] = "Es un API unidireccional.";
 choices[81][3] = "El cliente del API no controla el thread de la aplicaci&oacute;n.";
 answers[81] = choices[81][1];
 units[81] = "116";
 comments[81] = "Id Pregunta: 8167. Examen TIC A1 2010";


//  Id pregunta: 8227 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[82]= new Array();
 choices[82][0] = "A temperatura ambiente y bajo condiciones normales de atm&oacute;sfera, el valor de la banda de energ&iacute;a denominada GAP es de 1'12 eV para el Silicio y 1'42 eV para el Arseniuro de Galio.";
 choices[82][1] = "Un semiconductor intr&iacute;nseco es aqu&eacute;l que contiene elevadas cantidades de impurezas en comparaci&oacute;n con las cantidades de electrones y huecos generados t&eacute;rmicamente.";
 choices[82][2] = "El nivel de Fermi es el nivel de energ&iacute;a en el cu&aacute;l la probabilidad de ocupaci&oacute;n del mismo por un electr&oacute;n es exactamente 1/2.";
 choices[82][3] = "Un dispositivo bipolar es un dispositivo semiconductor en el que tanto huecos como electrones participan en el proceso de conducci&oacute;n.";
 answers[82] = choices[82][1];
 units[82] = "45";
 comments[82] = "Id Pregunta: 8227. Examen TIC A1 2010";


//  Id pregunta: 8307 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Un documento firmado digitalmente incluye la huella digital:";
 choices[83]= new Array();
 choices[83][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[83][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[83][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[83][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[83] = choices[83][2];
 units[83] = "111";
 comments[83] = "Id Pregunta: 8307. Examen TIC A2 2010";


//  Id pregunta: 8373 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes niveles de aislamiento previene de los problemas de lecturas sucias y lecturas no  repetibles, pero NO evita las lecturas fantasmas?";
 choices[84]= new Array();
 choices[84][0] = "Read Commited (lectura confirmada).";
 choices[84][1] = "Serializable.";
 choices[84][2] = "Read uncornmited (lectura no confirmada),";
 choices[84][3] = "Repeatable read (lectura repetible).";
 answers[84] = choices[84][3];
 units[84] = "57,58";
 comments[84] = "Id Pregunta: 8373. Examen TIC A2 2010";


//  Id pregunta: 8412 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  &iquest;Qu&eacute; realiza la sentencia &quot;df -h | grep / unidad/temporal | grep -v grep I wc -l&quot; en el sistema operativo Linux? ";
 choices[85]= new Array();
 choices[85][0] = "Cuenta el n&uacute;mero de f&iacute;cheros que se llaman temporal. ";
 choices[85][1] = "Lista las unidades extra&iacute;bles del sistema. ";
 choices[85][2] = "Cuenta el n&uacute;mero de filesystems que contienen /unidad/temporal en su path de montaje. ";
 choices[85][3] = "Cuenta el n&uacute;mero de procesos cuyo nombre contiene /unidad/temporal. ";
 answers[85] = choices[85][2];
 units[85] = "53, 54";
 comments[85] = "Id Pregunta: 8412. Examen TIC A2 2010";


//  Id pregunta: 8469 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  La norma DECT (Digital Enhanced Cordless Telecomunications) contempla el modode acceso:";
 choices[86]= new Array();
 choices[86][0] = "TDMA/ TDD";
 choices[86][1] = "GFSK";
 choices[86][2] = "FSK";
 choices[86][3] = "CDMA";
 answers[86] = choices[86][0];
 units[86] = "107,108";
 comments[86] = "Id Pregunta: 8469. Analista Ayto. Madrid 2010";


//  Id pregunta: 8626 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Un cable consistente en un n&uacute;cleo de vidrio con un alto Indice refracci&oacute;n, rodeada de una capa o revestimiento de material similar, pero con &iacute;ndice de refracci&oacute;n ligeramente menor, y, todo ello, envuelto en una cubierta do protecci&oacute;n totalmente opaca que le proporciona consistencia, es un cable:";
 choices[87]= new Array();
 choices[87][0] = "De par trenzado tipo BS/UTP (Braided ana screened unshielded twisteo pair).";
 choices[87][1] = "Coaxial de tipo thick";
 choices[87][2] = "De par trenzado tipo S/STP (Screened and shielded twisted pair)";
 choices[87][3] = "De fibra &oacute;ptica";
 answers[87] = choices[87][3];
 units[87] = "99";
 comments[87] = "Id Pregunta: 8626. Examen TIC A2 2010 interna";


//  Id pregunta: 8628 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  De entre las siguientes opciones en el &aacute;mbito del almacenamiento en los sistemas de informaci&oacute;n, se&ntilde;ale la verdadera:";
 choices[88]= new Array();
 choices[88][0] = "SAS es una interfaz de transferencia de datos en serie";
 choices[88][1] = "SATA es una Interfaz de transferencia de datos en paralelo";
 choices[88][2] = "Los dispositivos SAS se identifican por el World Wide Web Name (WWWN).";
 choices[88][3] = "El conector SATA posee 68 pines";
 answers[88] = choices[88][0];
 units[88] = "48";
 comments[88] = "Id Pregunta: 8628. Examen TIC A2 2010 interna";


//  Id pregunta: 8677 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes es una nueva entidad funcional introducida por IP M&oacute;vil (RFC 3344)?";
 choices[89]= new Array();
 choices[89][0] = "Home Agent.";
 choices[89][1] = "Agent Advertisement.";
 choices[89][2] = "Mobility Agent.";
 choices[89][3] = "Agent Discovery.";
 answers[89] = choices[89][0];
 units[89] = "100";
 comments[89] = "Id Pregunta: 8677. Examen UPM A2 2011";


//  Id pregunta: 8685 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[90]= new Array();
 choices[90][0] = "Spread spectrum con secuencia directa";
 choices[90][1] = "Spread spectrum con salto de frecuencia";
 choices[90][2] = "Spread spectrum con secuencia indirecta";
 choices[90][3] = "Spread spectrum sobre TCP/IP";
 answers[90] = choices[90][1];
 units[90] = "107";
 comments[90] = "Id Pregunta: 8685. Examen UPM A2 2011";


//  Id pregunta: 8739 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  En el &aacute;mbito de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, los denominados derechos &quot;ARCO&quot; corresponden a los derechos de:";
 choices[91]= new Array();
 choices[91][0] = "Acceso, Rectificaci&oacute;n, Cancelaci&oacute;n y Oposici&oacute;n";
 choices[91][1] = "Acceso. Rectificaci&oacute;n, Coordinaci&oacute;n y Oposici&oacute;n";
 choices[91][2] = "Activaci&oacute;n. Rectificaci&oacute;n. Cancelaci&oacute;n y Oposici&oacute;n.";
 choices[91][3] = "Acceso. Repudio. Cancelaci&oacute;n y Oposici&oacute;n.";
 answers[91] = choices[91][0];
 units[91] = "29";
 comments[91] = "Id Pregunta: 8739. Examen TIC A2 2010 interna";


//  Id pregunta: 8911 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  &iquest;C&oacute;mo se expresan habitualmente las direcciones MAC?:";
 choices[92]= new Array();
 choices[92][0] = "En notaci&oacute;n decimal.";
 choices[92][1] = "En notaci&oacute;n hexadecimal.";
 choices[92][2] = "En notaci&oacute;n octal.";
 choices[92][3] = "En notaci&oacute;n binaria";
 answers[92] = choices[92][1];
 units[92] = "101";
 comments[92] = "Id Pregunta: 8911. Operador Ayto. Madrid 2010";


//  Id pregunta: 9026 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  A efectos de facturaci&oacute;n, en una red corporativa donde exista una salida/entrada directa a la red de m&oacute;viles (enlace desde la red corporativa a la red de m&oacute;viles directo) para todas las llamadas desde/a m&oacute;viles:";
 choices[93]= new Array();
 choices[93][0] = "Se considerar&aacute;n tres tipos de tarifas en funci&oacute;n del origen y destino de la llamada corporativa: fijo-m&oacute;vil, m&oacute;vil-fijo y m&oacute;vil-m&oacute;vil.";
 choices[93][1] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de m&oacute;vil-m&oacute;vil.";
 choices[93][2] = "Esta es un servicio que no lo dan los operadores de m&oacute;viles y es preciso salir a m&oacute;viles a trav&eacute;s de la red p&uacute;blica de conmutaci&oacute;n de circuitos.";
 choices[93][3] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de fijo-fijo.";
 answers[93] = choices[93][1];
 units[93] = "103";
 comments[93] = "Id Pregunta: 9026. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9122 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  &iquest;Qu&eacute; se necesita para funcionar en un sistema grid?";
 choices[94]= new Array();
 choices[94][0] = "Al menos un ordenador que act&uacute;e como un servidor y que gestione el funcionamiento de los otros sistemas implicados";
 choices[94][1] = "Un mainframe";
 choices[94][2] = "Al menos un sistema Microsoft";
 choices[94][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[94] = choices[94][0];
 units[94] = "45";
 comments[94] = "Id Pregunta: 9122. ";


//  Id pregunta: 9185 Año de creación de pregunta: 2013-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes NO es un Proceso Principal de M&eacute;trica 3?";
 choices[95]= new Array();
 choices[95][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[95][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[95][2] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[95][3] = "Todos son Procesos Principales";
 answers[95] = choices[95][2];
 units[95] = "86";
 comments[95] = "Id Pregunta: 9185. ";


//  Id pregunta: 9358 Año de creación de pregunta: 2013-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es la nomenclatura que indica la capa f&iacute;sica del est&aacute;ndar IEEE 802.3ba que permite la transmisi&oacute;n a 40 Gbps sobre fibra monomodo?";
 choices[96]= new Array();
 choices[96][0] = "40GBASE-KR4";
 choices[96][1] = "4GBASE-SR40";
 choices[96][2] = "40GBASE-SR4";
 choices[96][3] = "40GBASE-LR4";
 answers[96] = choices[96][3];
 units[96] = "99";
 comments[96] = "Id Pregunta: 9358. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9505 Año de creación de pregunta: 2013-01-01
 questions[97]= "98)  &iquest;Cu&aacute;les de los siguientes no es un formato de sonido?";
 choices[97]= new Array();
 choices[97][0] = "MIDI";
 choices[97][1] = "Ogg Vorbis 1.0";
 choices[97][2] = "WAV";
 choices[97][3] = "VRML";
 answers[97] = choices[97][3];
 units[97] = "114";
 comments[97] = "Id Pregunta: 9505. ";


//  Id pregunta: 9801 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Seg&uacute;n la Ley Org&aacute;nica 15/1999 de protecci&oacute;n de datos, cuando se trata de ficheros de titularidad p&uacute;blica, el plazo para comunicar a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos la inscripci&oacute;n de ficheros en el Registro General (RGPD) es:";
 choices[98]= new Array();
 choices[98][0] = "No hace falta dicha comunicaci&oacute;n al tratarse de ficheros de titularidad p&uacute;blica. ";
 choices[98][1] = "De 10 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[98][2] = "De 3 meses desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[98][3] = "De 30 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 answers[98] = choices[98][3];
 units[98] = "29";
 comments[98] = "Id Pregunta: 9801. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10099 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Se&ntilde;ala la afirmaci&oacute;n correcta sobre el an&aacute;lisis estructurado";
 choices[99]= new Array();
 choices[99][0] = "El modelo ambiental se compone del modelo esencial y el modelo de comportamiento.";
 choices[99][1] = "El modelo esencial se compone del modelo ambiental y el modelo de comportamiento.";
 choices[99][2] = "El modelo de compotamiento se compone del modelo ambiental y el modelo esencial.";
 choices[99][3] = "El modelo ambiental se compone del modelo estructural y el modelo esencial.";
 answers[99] = choices[99][1];
 units[99] = "81";
 comments[99] = "Id Pregunta: 10099. ";


