/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 36 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no es una implementaci&oacute;n de POSIX (IEEE 1003)?:";
 choices[0]= new Array();
 choices[0][0] = "HP-UX";
 choices[0][1] = "MINIX";
 choices[0][2] = "Solaris";
 choices[0][3] = "Las 3 anteriores son implementaciones de POSIX";
 answers[0] = choices[0][3];
 units[0] = "40";
 comments[0] = "Id Pregunta: 36. ";


//  Id pregunta: 84 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; se establece en la Decisi&oacute;n del Consejo 93/465/CEE?:";
 choices[1]= new Array();
 choices[1][0] = "El desarrollo de la Directiva 87/95/EEC de armonizaci&oacute;n t&eacute;cnica de productos software en la Uni&oacute;n Europea";
 choices[1][1] = "La creaci&oacute;n de una serie de laboratorios de evaluaci&oacute;n de la conformidad de productos en el &aacute;mbito de la Uni&oacute;n Europea";
 choices[1][2] = "El planteamiento global en materia de evaluaci&oacute;n de conformidad y armonizaci&oacute;n t&eacute;cnica en la Uni&oacute;n Europea";
 choices[1][3] = "El r&eacute;gimen de colocaci&oacute;n del marcado &quot;CE&quot; de conformidad con la normativa comunitaria referente al dise&ntilde;o, fabricaci&oacute;n, comercializaci&oacute;n, puesta en servicio y utilizaci&oacute;n de los productos industriales";
 answers[1] = choices[1][3];
 units[1] = "42";
 comments[1] = "Id Pregunta: 84. ";


//  Id pregunta: 173 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En cuanto al control de proyectos:";
 choices[2]= new Array();
 choices[2][0] = "El gr&aacute;fico de PERT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[2][1] = "El gr&aacute;fico de GANTT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[2][2] = "El gr&aacute;fico de Gantt consiste en una visualizaci&oacute;n del proyecto basada en las restricciones.";
 choices[2][3] = "Las respuestas 'a' y 'c' son correctas.";
 answers[2] = choices[2][1];
 units[2] = "27";
 comments[2] = "Id Pregunta: 173. ";


//  Id pregunta: 204 Año de creación de pregunta: 2004-01-01
 questions[3]= "4)  La teor&iacute;a de la decisi&oacute;n multicriterio discreta";
 choices[3]= new Array();
 choices[3][0] = "tiene problemas con una incorrecta asignaci&oacute;n de pesos";
 choices[3][1] = "es usada en la elecci&oacute;n de contratos por parte de la administraci&oacute;n en ocasiones";
 choices[3][2] = "la normalizaci&oacute;n de las puntuaciones puede hacer perder la proporcionalidad";
 choices[3][3] = "todas las anteriores";
 answers[3] = choices[3][3];
 units[3] = "34";
 comments[3] = "Id Pregunta: 204. ";


//  Id pregunta: 345 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  La t&eacute;cnica de direcci&oacute;n en la etapa de iniciaci&oacute;n es:";
 choices[4]= new Array();
 choices[4][0] = "Orientada a ventas";
 choices[4][1] = "Informal";
 choices[4][2] = "Orientada a los recursos";
 choices[4][3] = "Orientada al control";
 answers[4] = choices[4][1];
 units[4] = "22";
 comments[4] = "Id Pregunta: 345. ";


//  Id pregunta: 365 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Los criterios de Savage, Wald, Laplace, Hurwicz&hellip;, est&aacute;n relacionados con:";
 choices[5]= new Array();
 choices[5][0] = "Teor&iacute;as de medici&oacute;n del coste del HW y SW";
 choices[5][1] = "Teor&iacute;as de optimizaci&oacute;n de los recursos humanos";
 choices[5][2] = "Teor&iacute;as de la decisi&oacute;n ";
 choices[5][3] = "Teor&iacute;as de calidad del SW";
 answers[5] = choices[5][2];
 units[5] = "21";
 comments[5] = "Id Pregunta: 365. ";


//  Id pregunta: 516 Año de creación de pregunta: 2003-01-01
 questions[6]= "7)  Seg&uacute;n la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos del Consejo Superior de Inform&aacute;tica (MAGERIT) indicar a qu&eacute; concepto corresponde la siguiente definici&oacute;n &quot;Potencialidad o posibilidad de ocurrencia de materializaci&oacute;n de una amenaza sobre un activo&quot;:";
 choices[6]= new Array();
 choices[6][0] = "Salvaguarda";
 choices[6][1] = "Riesgo";
 choices[6][2] = "Impacto";
 choices[6][3] = "Vulnerabilidad";
 answers[6] = choices[6][3];
 units[6] = "31, 32, 33";
 comments[6] = "Id Pregunta: 516. ";


//  Id pregunta: 895 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;En qu&eacute; conjunto de caracteres est&aacute; basado XML?:";
 choices[7]= new Array();
 choices[7][0] = "Unicode";
 choices[7][1] = "ITU 396-4";
 choices[7][2] = "ANSI 328";
 choices[7][3] = "Ninguno de los anteriores";
 answers[7] = choices[7][0];
 units[7] = "69";
 comments[7] = "Id Pregunta: 895. ";


//  Id pregunta: 983 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dentro de la inteligencia artificial, indicar la afirmaci&oacute;n correcta:";
 choices[8]= new Array();
 choices[8][0] = "El sistema de Kleene completo abarca tambi&eacute;n el c&aacute;lculo de predicados para lo cual se incluyen m&aacute;s axiomas y m&aacute;s reglas de demostraci&oacute;n";
 choices[8][1] = "El sistema de deducci&oacute;n natural se diferencia fundamentalmente de los de teor&iacute;a de la demostraci&oacute;n en que en &eacute;l no se demuestran las deducciones f&oacute;rmula a f&oacute;rmula, sino toda la deducci&oacute;n como si fuera una &uacute;nica f&oacute;rmula";
 choices[8][2] = "El sistema de deducci&oacute;n natural tiene mayor capacidad que el sistema de Kleene para admitir la definici&oacute;n de procedimientos eficientes de b&uacute;squeda sistem&aacute;tica de demostraciones";
 choices[8][3] = "Dentro de la teor&iacute;a sem&aacute;ntica, la descripci&oacute;n del sistema con este planteamiento con c&aacute;lculo posicional se realiza, entre otras con un conjunto de significados atribuibles a las proposiciones y con  una definici&oacute;n sint&aacute;ctica de conectivas";
 answers[8] = choices[8][3];
 units[8] = "63";
 comments[8] = "Id Pregunta: 983. ";


//  Id pregunta: 996 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Disponemos de un multiplexor por divisi&oacute;n en el tiempo (TDM) al que se conectan 8 terminales utilizando enlaces de 1200 bps. &iquest;Cu&aacute;l deber&aacute; ser la velocidad de la l&iacute;nea de salida del multiplexor?:";
 choices[9]= new Array();
 choices[9][0] = "Inferior a 9.600 bps";
 choices[9][1] = "Igual o superior a 9.600 bpos";
 choices[9][2] = "Superior a 19.200 bps";
 choices[9][3] = "Igual a 1.200 bps";
 answers[9] = choices[9][1];
 units[9] = "102";
 comments[9] = "Id Pregunta: 996. ";


//  Id pregunta: 1072 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  En cuanto a las t&eacute;cnicas de representaci&oacute;n del conocimiento, podemos afirmar que:";
 choices[10]= new Array();
 choices[10][0] = "Un Sistema Basado en el Conocimiento (SBC) es un sistema inform&aacute;tico cuya principal caracter&iacute;stica reside en que el conocimiento necesario para resolver un problema aparece como estructura procesable separada del procedimiento que la manipula";
 choices[10][1] = "Los mecanismos de inferencia son paradigmas de representaci&oacute;n utilizados en las bases de conocimiento de los SBC";
 choices[10][2] = "La representaci&oacute;n param&eacute;trica est&aacute; basada en una concepci&oacute;n epistemol&oacute;gica del mundo en t&eacute;rminos de conceptos";
 choices[10][3] = "Las representaciones de tipo simb&oacute;lico est&aacute;n basadas en una visi&oacute;n del mundo de tipo fisiol&oacute;gico, tales como las redes neuronales";
 answers[10] = choices[10][0];
 units[10] = "64";
 comments[10] = "Id Pregunta: 1072. ";


//  Id pregunta: 1226 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  La ley emp&iacute;rica de Grosh establece:";
 choices[11]= new Array();
 choices[11][0] = "La potencia de c&aacute;lculo de los ordenadores es proporcional al cuadrado del tiempo que transcurre";
 choices[11][1] = "La potencia de c&aacute;lculo de lo ordenadores va en proporci&oacute;n directa con su coste";
 choices[11][2] = "El coste de un ordenador es proporcional a la raiz cuadrada de su potencia de c&aacute;lculo";
 choices[11][3] = "El coste de un ordenador es inversamente proporcional a la disminuci&oacute;n de su potencia";
 answers[11] = choices[11][2];
 units[11] = "45";
 comments[11] = "Id Pregunta: 1226. ";


//  Id pregunta: 1484 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Una de las siguientes no es una caracter&iacute;stica que deba reunir un interfaz:";
 choices[12]= new Array();
 choices[12][0] = "Consistencia";
 choices[12][1] = "Naturalidad";
 choices[12][2] = "Obviedad";
 choices[12][3] = "Facilidad de uso y aprendizaje";
 answers[12] = choices[12][2];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1484. ";


//  Id pregunta: 1518 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  Al objeto de una base de datos ORACLE que tiene como funci&oacute;n establecer una referencia a datos almacenados en otra base de datos, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "&Iacute;ndice no &uacute;nico.";
 choices[13][1] = "Vista.";
 choices[13][2] = "Database link.";
 choices[13][3] = "Clustered Cable.";
 answers[13] = choices[13][2];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1518. Junta Andaluc&iacute;a";


//  Id pregunta: 1685 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  Sobre el e-learnig";
 choices[14]= new Array();
 choices[14][0] = "Es el uso de las tecnolog&iacute;as multimedia para mejorar y desarrollar nuevas estrategias de aprendizaje";
 choices[14][1] = "Algunas de las facilidades que aporta el e-learning son la accesibilidad geogr&aacute;fica y la flexibilidad en el tiempo";
 choices[14][2] = "Las dos afirmaciones anteriores son correctas";
 choices[14][3] = "Todas las afirmaciones anteriores son falsas";
 answers[14] = choices[14][2];
 units[14] = "66";
 comments[14] = "Id Pregunta: 1685. ";


//  Id pregunta: 1755 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es el Proyecto Mono?";
 choices[15]= new Array();
 choices[15][0] = "Iniciativa para portar el entorno .Net a Linux";
 choices[15][1] = "Completa enciclopedia de animales creada por Microsoft";
 choices[15][2] = "Herramienta de Software Libre para la educaci&oacute;n de los ni&ntilde;os en las escuelas";
 choices[15][3] = "Programa de dibujo";
 answers[15] = choices[15][0];
 units[15] = "61,62";
 comments[15] = "Id Pregunta: 1755. ";


//  Id pregunta: 1768 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Respecto al empaquetado de aplicaciones en JAVA ";
 choices[16]= new Array();
 choices[16][0] = "utiliza el algoritmo de compresi&oacute;n LZW";
 choices[16][1] = "Para facilitar el control y orden de todos estos ficheros es para lo que se han definido los ficheros JAR";
 choices[16][2] = "Un fichero JAR  puede incluir un subdirectorio de metainformaci&oacute;n llamado META-INF";
 choices[16][3] = "Todas son correctas";
 answers[16] = choices[16][3];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1768. ";


//  Id pregunta: 1806 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Dentro del terreno del e-learning, se&ntilde;ale qu&eacute; opci&oacute;n describe el &quot;blended learning&quot; de forma m&aacute;s exacta:";
 choices[17]= new Array();
 choices[17][0] = "Aquel modo de aprender que combina la ense&ntilde;anza presencial con la tecnolog&iacute;a no presencial";
 choices[17][1] = "Aprendizaje e-learning mediante combinaci&oacute;n de informaci&oacute;n alfanum&eacute;rica, gr&aacute;fica e hipertextual";
 choices[17][2] = "Aprendizaje mediante la profusi&oacute;n de elementos multimedia";
 choices[17][3] = "Aprendizaje basado en la mezcla cultural del alumnado, con experiencias diversas";
 answers[17] = choices[17][0];
 units[17] = "66";
 comments[17] = "Id Pregunta: 1806. &quot;blended learning&quot; = aprendizaje semipresencial";


//  Id pregunta: 1992 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Al conjunto de est&aacute;ndares que permite que distintas herramientas CASE del mismo o distinto fabricante el intercambio de datos se denomina:";
 choices[18]= new Array();
 choices[18][0] = "MERISE.";
 choices[18][1] = "IPSE.";
 choices[18][2] = "MIDS.";
 choices[18][3] = "X/Open CASE.";
 answers[18] = choices[18][1];
 units[18] = "91";
 comments[18] = "Id Pregunta: 1992. ";


//  Id pregunta: 2135 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la m&aacute;s importante para un buen analista?:";
 choices[19]= new Array();
 choices[19][0] = "Capacidad de comprensi&oacute;n de conceptos abstractos";
 choices[19][1] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[19][2] = "Habilidad para evitar que 'los &aacute;rboles no dejen ver el bosque'";
 choices[19][3] = "Habilidad para relacionar aplicaciones hardware/software en el entorno usuario";
 answers[19] = choices[19][2];
 units[19] = "80";
 comments[19] = "Id Pregunta: 2135. ";


//  Id pregunta: 2169 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Indique la afirmaci&oacute;n verdadera relativa a la Gesti&oacute;n de la Documentaci&oacute;n de un proyecto o sistema:";
 choices[20]= new Array();
 choices[20][0] = "La gesti&oacute;n de configuraci&oacute;n y control de versiones se refiere &uacute;nicamente al producto software y no a la documentaci&oacute;n";
 choices[20][1] = "La documentaci&oacute;n producida durante el desarrollo de un proyecto es independiente de la metodolog&iacute;a empleada";
 choices[20][2] = "El documento de requisitos de sistema es anterior al documento de requisitos de usuario";
 choices[20][3] = "La documentaci&oacute;n debe entenderse como todos los productos resultantes de las tareas realizadas, ya sean informes, programas, juegos de pruebas, gr&aacute;ficos, etc";
 answers[20] = choices[20][3];
 units[20] = "95,28";
 comments[20] = "Id Pregunta: 2169. ";


//  Id pregunta: 2210 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Qu&eacute; entidades certifican ISO-9000 en Espa&ntilde;a?:";
 choices[21]= new Array();
 choices[21][0] = "S&oacute;lo ISO";
 choices[21][1] = "S&oacute;lo AENOR";
 choices[21][2] = "Empresas privadas";
 choices[21][3] = "AENOR y empresas privadas";
 answers[21] = choices[21][3];
 units[21] = "92";
 comments[21] = "Id Pregunta: 2210. ";


//  Id pregunta: 2345 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  En programaci&oacute;n orientada a objetos:";
 choices[22]= new Array();
 choices[22][0] = "Los objetos son m&oacute;dulos que contienen s&oacute;lo datos, de cualquier tipo";
 choices[22][1] = "Los objetos son m&oacute;dulos que contienen los datos y las instrucciones u operaciones que manipulan esos datos";
 choices[22][2] = "Los objetos pueden ser tratados como cualquier otro dato mediante un lenguaje procedural";
 choices[22][3] = "No existe una concepci&oacute;n din&aacute;mica del objeto como una entidad que exista en tiempo de ejecuci&oacute;n";
 answers[22] = choices[22][1];
 units[22] = "82";
 comments[22] = "Id Pregunta: 2345. ";


//  Id pregunta: 2346 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  En relaci&oacute;n con el ciclo de vida denominado cl&aacute;sico o en cascada se pueden hacer una serie de consideraciones. Indicar cu&aacute;l de las siguientes es falsa:";
 choices[23]= new Array();
 choices[23][0] = "Los proyectos reales escasamente siguen el camino secuencial que propone el modelo";
 choices[23][1] = "Es dif&iacute;cil para el usuario establecer correcta y totalmente todos los requerimientos al principio del proyecto";
 choices[23][2] = "Una versi&oacute;n funcionando del programa no podr&iacute;a estar disponible hasta las etapas finales del desarrollo del proyecto";
 choices[23][3] = "No es necesario completar cada una de las etapas para pasar a la siguiente";
 answers[23] = choices[23][3];
 units[23] = "76";
 comments[23] = "Id Pregunta: 2346. ";


//  Id pregunta: 2739 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes elementos no es propio de un DFD (Diagrama de Flujo de Datos)?";
 choices[24]= new Array();
 choices[24][0] = "Entidades externas al sistema";
 choices[24][1] = "Bucles";
 choices[24][2] = "Almac&eacute;n de datos";
 choices[24][3] = "Procesos";
 answers[24] = choices[24][1];
 units[24] = "79,81";
 comments[24] = "Id Pregunta: 2739. ";


//  Id pregunta: 2851 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  &iquest;Qu&eacute; sistema de parametr&iacute;zaci&oacute;n no se emplea en el reconocimiento de voz?";
 choices[25]= new Array();
 choices[25][0] = "por fonemas";
 choices[25][1] = "por morfemas";
 choices[25][2] = "por difonemas";
 choices[25][3] = "por semis&iacute;labas";
 answers[25] = choices[25][1];
 units[25] = "94";
 comments[25] = "Id Pregunta: 2851. ";


//  Id pregunta: 2952 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  Los documentos que definen los est&aacute;ndares de facto de internet se denominan:";
 choices[26]= new Array();
 choices[26][0] = "RFC";
 choices[26][1] = "IETF";
 choices[26][2] = "IANA";
 choices[26][3] = "Se definen en la serie ITU-T X.(n&uacute;mero de est&aacute;ndar) ";
 answers[26] = choices[26][0];
 units[26] = "112";
 comments[26] = "Id Pregunta: 2952. Similar a examen TIC SS A 2003";


//  Id pregunta: 3415 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  H.320 es el est&aacute;ndar para:";
 choices[27]= new Array();
 choices[27][0] = "transmisi&oacute;n de paquetes multiplexados en redes digitales";
 choices[27][1] = "m&oacute;dems de banda ancha con correcci&oacute;n de errores";
 choices[27][2] = "videoconferencia multipunto sobre RDSI";
 choices[27][3] = "videconferencia multipunto sobre internet";
 answers[27] = choices[27][2];
 units[27] = "103,117";
 comments[27] = "Id Pregunta: 3415. ";


//  Id pregunta: 3533 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  En las necesidades para establecer una aplicaci&oacute;n de videoconferencia, es falso que se requiera:";
 choices[28]= new Array();
 choices[28][0] = "una compresi&oacute;n / descompresi&oacute;n en tiempo real";
 choices[28][1] = "unos l&iacute;mites m&iacute;nimos y m&aacute;ximos para el retardo de comunicaci&oacute;n";
 choices[28][2] = "una sincronizaci&oacute;n de audio y de video";
 choices[28][3] = "un protocolo de se&ntilde;alizaci&oacute;n";
 answers[28] = choices[28][1];
 units[28] = "117";
 comments[28] = "Id Pregunta: 3533. ";


//  Id pregunta: 3718 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  Los conceptos de arquitecturas de niveles est&aacute;n especificados en la siguiente norma de la ITU-T:";
 choices[29]= new Array();
 choices[29][0] = "X.400";
 choices[29][1] = "I.200";
 choices[29][2] = "X.500";
 choices[29][3] = "X.200";
 answers[29] = choices[29][3];
 units[29] = "113";
 comments[29] = "Id Pregunta: 3718. ";


//  Id pregunta: 3844 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  TCP utiliza un algoritmo para control de flujo denominado Slow Start . Dicho algoritmo consiste en:  ";
 choices[30]= new Array();
 choices[30][0] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[30][1] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 choices[30][2] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[30][3] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 answers[30] = choices[30][1];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3844. ";


//  Id pregunta: 3922 Año de creación de pregunta: 2003-01-01
 questions[31]= "32)  Un documento multimedia se define como:";
 choices[31]= new Array();
 choices[31][0] = "Compuestos de audio y v&iacute;deo.";
 choices[31][1] = "Compuestos de se&ntilde;ales ni digitales ni digitalizadas.";
 choices[31][2] = "Compuestos de diferentes fuentes y estructuras que incorpora documentos digitales o digitalizados.";
 choices[31][3] = "Compuestos de diferentes fuentes y estructuras que incorpora no s&oacute;lo documentos digitales o digitalizados, sino tambi&eacute;n a los procedentes de otros tipos de se&ntilde;ales.";
 answers[31] = choices[31][3];
 units[31] = "93";
 comments[31] = "Id Pregunta: 3922. ";


//  Id pregunta: 4125 Año de creación de pregunta: 2006-01-01
 questions[32]= "33)  Lenguaje de marca que utiliza s&iacute;mbolos autodefinidos e ilimitados";
 choices[32]= new Array();
 choices[32][0] = "HTML";
 choices[32][1] = "XHTML";
 choices[32][2] = "XML";
 choices[32][3] = "W3C";
 answers[32] = choices[32][2];
 units[32] = "112,69";
 comments[32] = "Id Pregunta: 4125. ";


//  Id pregunta: 4150 Año de creación de pregunta: 2006-01-01
 questions[33]= "34)  Sniffer de paquetes desarrollado por el FBI para la monitorizaci&oacute;n de las transmisiones electr&oacute;nicas de criminales";
 choices[33]= new Array();
 choices[33][0] = "Carnivore";
 choices[33][1] = "Internet Key Exchange (IKE)";
 choices[33][2] = "Kerberos";
 choices[33][3] = "SSL";
 answers[33] = choices[33][0];
 units[33] = "111";
 comments[33] = "Id Pregunta: 4150. ";


//  Id pregunta: 4286 Año de creación de pregunta: 2007-01-01
 questions[34]= "35)  Los documentos electr&oacute;nicos conformados de acuerdo con la norma XML utilizan el juego de caracteres:";
 choices[34]= new Array();
 choices[34][0] = "ASCII de 16 bits.";
 choices[34][1] = "ASCII de 8 bits.";
 choices[34][2] = "UNICODE.";
 choices[34][3] = "MIME";
 answers[34] = choices[34][2];
 units[34] = "70";
 comments[34] = "Id Pregunta: 4286. ";


//  Id pregunta: 4340 Año de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es el puerto est&aacute;ndar utilizado por el protocolo POP3?:";
 choices[35]= new Array();
 choices[35][0] = "21.";
 choices[35][1] = "23.";
 choices[35][2] = "25";
 choices[35][3] = "110";
 answers[35] = choices[35][3];
 units[35] = "112";
 comments[35] = "Id Pregunta: 4340. ";


//  Id pregunta: 4467 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  El DNI digital permitir&aacute;:";
 choices[36]= new Array();
 choices[36][0] = "Firmar y cifrar.";
 choices[36][1] = "Solo firmar.";
 choices[36][2] = "Solo cifrar.";
 choices[36][3] = "Solo funciones 3DES";
 answers[36] = choices[36][1];
 units[36] = "74";
 comments[36] = "Id Pregunta: 4467. ";


//  Id pregunta: 4576 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  Cual de los siguientes aspectos NO son tratados en Ia Ley 34/2002, de 11 de julio, de servicios de Ia sociedad de la informaci&oacute;n y de comercio electr&oacute;nico:";
 choices[37]= new Array();
 choices[37][0] = "obligaciones y responsabilidades de los destinatarios de los servicios.";
 choices[37][1] = "promueve Ia elaboraci&oacute;n de c&oacute;digos de conducta sobre las materias reguladas en esta Ley.";
 choices[37][2] = "accesibilidad para las personas can discapacidad y de edad avanzada a Ia informaci&oacute;n proporcionada por medios electr&oacute;nicos.";
 choices[37][3] = "sistema de asignaci&oacute;n de nombres de dominio bajo el &quot;.es&quot;.";
 answers[37] = choices[37][0];
 units[37] = "30";
 comments[37] = "Id Pregunta: 4576. ";


//  Id pregunta: 4596 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  Cuando un m&oacute;vil se enciende y no encuentra una estaci&oacute;n base de Ia red a la que pertenece";
 choices[38]= new Array();
 choices[38][0] = "se registra en el HLR (Home Location Register) de Ia red a la que accede";
 choices[38][1] = "se registra en el VLR (Visitors Location Register) de Ia red a la que pertenece";
 choices[38][2] = "se registra en el VLR (Visitors Location Register) de Ia red a la que accede";
 choices[38][3] = "no se registra en ninguna red";
 answers[38] = choices[38][2];
 units[38] = "108";
 comments[38] = "Id Pregunta: 4596. ";


//  Id pregunta: 4668 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de los siiguientes no es un libro perteneciente a ITIL?";
 choices[39]= new Array();
 choices[39][0] = "Gesti&oacute;n de equipamiento hardware";
 choices[39][1] = "Gesti&oacute;n de aplicaciones";
 choices[39][2] = "Entrega de Servicios";
 choices[39][3] = "Gesti&oacute;n de la seguridad";
 answers[39] = choices[39][0];
 units[39] = "98";
 comments[39] = "Id Pregunta: 4668. ";


//  Id pregunta: 4681 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[40]= new Array();
 choices[40][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[40][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[40][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[40][3] = "La citada ley no hace referencia a tal concepto";
 answers[40] = choices[40][2];
 units[40] = "36,37";
 comments[40] = "Id Pregunta: 4681. Examen 2006 JCYL";


//  Id pregunta: 4815 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29.Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a laconfiguraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignabledentro de dicho rango?";
 choices[41]= new Array();
 choices[41][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[41][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada:192.168.20.1";
 choices[41][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[41][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248 Puerta de enlace predeterminada:192.168.20.1";
 answers[41] = choices[41][2];
 units[41] = "100";
 comments[41] = "Id Pregunta: 4815. ";


//  Id pregunta: 4823 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, &iquest;c&oacute;mo se punt&uacute;a el subcriterio 9b, &quot;Indicadores Clave del Rendimiento de la Organizaci&oacute;n&quot;, en el proceso de autoevaluaci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "Entre 0 y 100 y se multiplica por 0,50";
 choices[42][1] = "Entre 0 y 100 y se multiplica por 0,25";
 choices[42][2] = "Entre 0 y 50 y se multiplica por 0,50";
 choices[42][3] = "Entre 0 y 50 y se multiplica por 0,25";
 answers[42] = choices[42][0];
 units[42] = "92";
 comments[42] = "Id Pregunta: 4823. ";


//  Id pregunta: 4872 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  Seg&uacute;n el Modelo de Calidad de McCall, el factor &quot;Correcci&oacute;n&quot; debe ser tenido en cuenta cuando el productosoftware se encuentra en la fase de:";
 choices[43]= new Array();
 choices[43][0] = "Construcci&oacute;n";
 choices[43][1] = "Explotaci&oacute;n";
 choices[43][2] = "Revisi&oacute;n";
 choices[43][3] = "Transici&oacute;n";
 answers[43] = choices[43][1];
 units[43] = "88";
 comments[43] = "Id Pregunta: 4872. ";


//  Id pregunta: 5200 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  En el an&aacute;lisis DAFO, la definici&oacute;n &ldquo;Son eventos o circunstancias que se espera que ocurran o pueden inducirse a que ocurran en el mundo exterior y que podr&iacute;an tener un impacto positivo en el futuro de la Organizaci&oacute;n&rdquo; se corresponde con:";
 choices[44]= new Array();
 choices[44][0] = "Debilidades";
 choices[44][1] = "Amenazas";
 choices[44][2] = "Fortalezas";
 choices[44][3] = "Oportunidades";
 answers[44] = choices[44][3];
 units[44] = "77";
 comments[44] = "Id Pregunta: 5200. ";


//  Id pregunta: 5222 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  La actividad &quot;Asignaci&oacute;n detallada de tareas&quot; a qu&eacute; grupo de actividades pertenece";
 choices[45]= new Array();
 choices[45][0] = "Actividades de Inicio de Proyecto (GPI)";
 choices[45][1] = "Actividades de Seguimiento y Control (GPS)";
 choices[45][2] = "Actividades de Finalizaci&oacute;n de Proyecto";
 choices[45][3] = "Actividades de Planificaci&oacute;n de Proyecto (GPP)";
 answers[45] = choices[45][1];
 units[45] = "86";
 comments[45] = "Id Pregunta: 5222. ";


//  Id pregunta: 5557 Año de creación de pregunta: 2003-01-01
 questions[46]= "47)  La Ley de Medidas de Impulso de la Sociedad de la Informaci&oacute;n NO flexibiliza:";
 choices[46]= new Array();
 choices[46][0] = "Las obligaciones referidas a las comunicaciones comerciales y a la contrataci&oacute;n electr&oacute;nica.";
 choices[46][1] = "La obligaci&oacute;n de informar a los clientes, sobre medidas de seguridad aplicadas a los servicios prestados y la funci&oacute;n de informar sobre responsabilidades por el uso de Internet con fines il&iacute;citos. ";
 choices[46][2] = "Las obligaciones referidas  a la constancia registral de los nombre de dominio de empresas prestadoras de servicios de la sociedad de la informaci&oacute;n.";
 choices[46][3] = "La obligaci&oacute;n de los PSC de comprobar los datos inscritos en registros p&uacute;blicos.";
 answers[46] = choices[46][1];
 units[46] = "30";
 comments[46] = "Id Pregunta: 5557. ";


//  Id pregunta: 5666 Año de creación de pregunta: 2003-01-01
 questions[47]= "48)  La cl&aacute;usula 1 del Manual Europeo para las Compras P&uacute;blicas de Sistemas Abiertos (EPHOS 2) establece que:";
 choices[47]= new Array();
 choices[47][0] = "El cableado ser&aacute; conforme a EIA/TIA 568";
 choices[47][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en IS 8802-3.";
 choices[47][2] = "El cableado ser&aacute; conforme a ISO/IEC DIS 11801";
 choices[47][3] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en EN 50081-1";
 answers[47] = choices[47][2];
 units[47] = "99";
 comments[47] = "Id Pregunta: 5666. ";


//  Id pregunta: 5694 Año de creación de pregunta: 2003-01-01
 questions[48]= "49)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[48]= new Array();
 choices[48][0] = "Claves privadas del ciudadano";
 choices[48][1] = "Certificado de autenticaci&oacute;n";
 choices[48][2] = "Claves p&uacute;blicas del ciudadano";
 choices[48][3] = "Certificado de firma";
 answers[48] = choices[48][2];
 units[48] = "74";
 comments[48] = "Id Pregunta: 5694. ";


//  Id pregunta: 5708 Año de creación de pregunta: 2009-01-01
 questions[49]= "50)  Seleccione la opci&oacute;n correcta:";
 choices[49]= new Array();
 choices[49][0] = "SOAP es un protocolo para el intercambio de mensajes SOA";
 choices[49][1] = "Dos aplicaciones que se comunican mediante SOAP deben estar escritas en el mismo lenguaje de programaci&oacute;n";
 choices[49][2] = "Los mensajes SOAP se pueden transportar, entre otros medios, sobre HTTP, SMTP o palomas mensajeras";
 choices[49][3] = "Para que dos aplicaciones se comuniquen mediante SOAP siempre ser&aacute; necesario alterar las configuraciones de los posibles firewalls entre ellas";
 answers[49] = choices[49][2];
 units[49] = "51";
 comments[49] = "Id Pregunta: 5708. MAP 2008 A2";


//  Id pregunta: 5735 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes no corresponde a una interfase del modelo de referencia de workflow de WfMC?:";
 choices[50]= new Array();
 choices[50][0] = "Herramientas de definici&oacute;n de procesos";
 choices[50][1] = "Funciones de representaci&oacute;n";
 choices[50][2] = "Herramientas de administraci&oacute;n y monitorizaci&oacute;n";
 choices[50][3] = "Aplicaciones invocadas";
 answers[50] = choices[50][1];
 units[50] = "71";
 comments[50] = "Id Pregunta: 5735. ";


//  Id pregunta: 5764 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  Seg&uacute;n Bennet, Lientz y Swanson:";
 choices[51]= new Array();
 choices[51][0] = "El mantenimiento perfectivo son las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia.";
 choices[51][1] = "El mantenimiento evolutivo son las incorporaciones, modificaciones y eliminaciones necesarias en un producto software para cubrir la expansi&oacute;n o cambio en las necesidades del usuario.";
 choices[51][2] = "El mantenimiento preventivo es la realizaci&oacute;n del mantenimiento anticip&aacute;ndose a problemas futuros.";
 choices[51][3] = "El mantenimiento adaptativo son las modificaciones que afectan a los entornos en los que el sistema opera, como por ejemplo la configuraci&oacute;n del hardware.";
 answers[51] = choices[51][2];
 units[51] = "90";
 comments[51] = "Id Pregunta: 5764. ";


//  Id pregunta: 5769 Año de creación de pregunta: 2009-01-01
 questions[52]= "53)  De acuerdo al RD 1720/2007, cuando los ficheros contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo, deber&aacute;:";
 choices[52]= new Array();
 choices[52][0] = "Adoptarse las medidas de seguridad calificadas de nivel b&aacute;sico";
 choices[52][1] = "Adoptarse las medidas de seguridad calificadas de nivel medio";
 choices[52][2] = "Adoptarse las medidas de seguridad calificadas de nivel alto";
 choices[52][3] = "No adoptarse ninguna medidas de seguridad prevista";
 answers[52] = choices[52][1];
 units[52] = "29";
 comments[52] = "Id Pregunta: 5769. ";


//  Id pregunta: 5833 Año de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los dispositivos de red -citados seguidamente- brinda internetworking y control de broadcast?";
 choices[53]= new Array();
 choices[53][0] = "Hub";
 choices[53][1] = "Puente";
 choices[53][2] = "NIC (Network Interface Card)";
 choices[53][3] = "Router";
 answers[53] = choices[53][3];
 units[53] = "102";
 comments[53] = "Id Pregunta: 5833. MAP 2008 A1";


//  Id pregunta: 5856 Año de creación de pregunta: 2009-01-01
 questions[54]= "55)  El JTC-1 es un comit&eacute; t&eacute;cnico conjunto de normalizaci&oacute;n en &aacute;mbito de las TIC formado por:";
 choices[54]= new Array();
 choices[54][0] = "CEN y CENELEC";
 choices[54][1] = "ISO e IEC";
 choices[54][2] = "CEN y ETSI";
 choices[54][3] = "ISO y CIE";
 answers[54] = choices[54][1];
 units[54] = "42";
 comments[54] = "Id Pregunta: 5856. Pregunta 36";


//  Id pregunta: 6005 Año de creación de pregunta: 2010-01-01
 questions[55]= "56)  El est&aacute;ndar WSDL:";
 choices[55]= new Array();
 choices[55][0] = "Es el protocolo para efectuar llamadas a m&eacute;todos de objetos remotos mediante peticiones XML.";
 choices[55][1] = "Describe la interfaz de servicio";
 choices[55][2] = "Es el registro p&uacute;blico de servicios.";
 choices[55][3] = "Es el protocolo de transporte.";
 answers[55] = choices[55][1];
 units[55] = "69";
 comments[55] = "Id Pregunta: 6005. TIC A 2009";


//  Id pregunta: 6048 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  GEANT2 es una red promovida por la UE para:";
 choices[56]= new Array();
 choices[56][0] = "El intercambio de datos entre las Administraciones Europeas";
 choices[56][1] = "La interconexi&oacute;n de la comunidad cient&iacute;fica y universitaria";
 choices[56][2] = "Las dos respuestas anteriores son correctas";
 choices[56][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[56] = choices[56][1];
 units[56] = "103";
 comments[56] = "Id Pregunta: 6048. ";


//  Id pregunta: 6142 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  En relaci&oacute;n con los c&oacute;decs que se utilizan para comprimir la voz en sistemas de VoIP:";
 choices[57]= new Array();
 choices[57][0] = "G.711 proporciona mejor calidad de sonido que G.729";
 choices[57][1] = "G.711 genera una tasa de transferencia menor que G.729";
 choices[57][2] = "Las dos respuestas anteriores son correctas";
 choices[57][3] = "Todas las respuestas anteriores son falsas";
 answers[57] = choices[57][0];
 units[57] = "100, 109";
 comments[57] = "Id Pregunta: 6142. ";


//  Id pregunta: 6242 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes APIs de JEE especifica la gesti&oacute;n de transacciones a trav&eacute;s de sistemas distribuidos?";
 choices[58]= new Array();
 choices[58][0] = "JNDE";
 choices[58][1] = "JNI";
 choices[58][2] = "JTA";
 choices[58][3] = "JAX";
 answers[58] = choices[58][2];
 units[58] = "60";
 comments[58] = "Id Pregunta: 6242. TICB-2009, bloque desarrollo";


//  Id pregunta: 6278 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Qui&eacute;n propuso el modelo de ciclo de vida en espiral?";
 choices[59]= new Array();
 choices[59][0] = "Roger Pressman";
 choices[59][1] = "Richard Thomson";
 choices[59][2] = "Barry Boehm ";
 choices[59][3] = "Winston Royce ";
 answers[59] = choices[59][2];
 units[59] = "76";
 comments[59] = "Id Pregunta: 6278. ";


//  Id pregunta: 6294 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de alto nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "Prototipos";
 choices[60][1] = "Sesiones JAD y JRP";
 choices[60][2] = "Entorno de Bucles Adaptativo";
 choices[60][3] = "Todas lo son";
 answers[60] = choices[60][3];
 units[60] = "78";
 comments[60] = "Id Pregunta: 6294. ";


//  Id pregunta: 6299 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;C&oacute;mo se denomina cada uno de los objetos individuales pertenecientes a una clase?";
 choices[61]= new Array();
 choices[61][0] = "Ente";
 choices[61][1] = "Participaci&oacute;n";
 choices[61][2] = "Instancia";
 choices[61][3] = "Abstracci&oacute;n";
 answers[61] = choices[61][2];
 units[61] = "82";
 comments[61] = "Id Pregunta: 6299. ";


//  Id pregunta: 6322 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia del modelo relacional?";
 choices[62]= new Array();
 choices[62][0] = "Los datos se perciben como tablas.";
 choices[62][1] = "Los operadores que se utilizan toman como entrada tablas y a su salida presentan entidades.";
 choices[62][2] = "Los operadores que se utilizan toman como entrada tablas y como salida tablas.";
 choices[62][3] = "Dispone de una fuerte componente matem&aacute;tica que le da soporte.";
 answers[62] = choices[62][1];
 units[62] = "58";
 comments[62] = "Id Pregunta: 6322. ";


//  Id pregunta: 6400 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  El &oacute;rgano competente para la expedici&oacute;n del DNIe es:";
 choices[63]= new Array();
 choices[63][0] = "Ministerio de Defensa";
 choices[63][1] = "Ministerio del Interior";
 choices[63][2] = "Ministerio de Presidencia";
 choices[63][3] = "Secretaria de Estado de Funci&oacute;n P&uacute;blica";
 answers[63] = choices[63][1];
 units[63] = "30";
 comments[63] = "Id Pregunta: 6400. ";


//  Id pregunta: 6417 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  El reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as, productos y servicios relacionados con la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social es el:";
 choices[64]= new Array();
 choices[64][0] = "RD 1494/2007";
 choices[64][1] = "RD 1497/2004";
 choices[64][2] = "RD 1449/2007";
 choices[64][3] = "RD 1479/2007";
 answers[64] = choices[64][0];
 units[64] = "39";
 comments[64] = "Id Pregunta: 6417. ";


//  Id pregunta: 6465 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Seg&uacute;n el interfaz de Aseguramiento de la Calidad de M&eacute;trica v3, el establecimiento del Plan de Aseguramiento de la Calidad debe comenzar en el proceso:";
 choices[65]= new Array();
 choices[65][0] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[65][1] = "Estudio de Viabilidad del Sistema";
 choices[65][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[65][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[65] = choices[65][1];
 units[65] = "86";
 comments[65] = "Id Pregunta: 6465. Castilla La Mancha 2009";


//  Id pregunta: 6482 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;En qu&eacute; lenguaje est&aacute;n definidos los objetos gestionados en SNMP?";
 choices[66]= new Array();
 choices[66][0] = "C++";
 choices[66][1] = "ASN.1";
 choices[66][2] = "trap";
 choices[66][3] = "Java";
 answers[66] = choices[66][1];
 units[66] = "104";
 comments[66] = "Id Pregunta: 6482. Castilla La Mancha 2009";


//  Id pregunta: 6609 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  En el An&aacute;lisis Estructurado, las entidades externas";
 choices[67]= new Array();
 choices[67][0] = "Definen el Interfaz del Usuario";
 choices[67][1] = "Son parte del sistema";
 choices[67][2] = "Aparecen primero en el Diagrama de Contexto y se van heredando en las explosiones de los DFD's";
 choices[67][3] = "Generan y consumen informaci&oacute;n del sistema";
 answers[67] = choices[67][3];
 units[67] = "81";
 comments[67] = "Id Pregunta: 6609. ";


//  Id pregunta: 6627 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  El orden de los niveles del modelo CMM de Ingenier&iacute;a de Software es:";
 choices[68]= new Array();
 choices[68][0] = "Inicial; Repetible; Definido; Gestionado; Optimizado";
 choices[68][1] = "Inicial; Definido; Repetible; Gestionado; Optimizado";
 choices[68][2] = "Inicial; Definido; Gestionado; Repetible; Optimizado";
 choices[68][3] = "Inicial; Repetible; Gestionado; Definido; Optimizado";
 answers[68] = choices[68][0];
 units[68] = "87";
 comments[68] = "Id Pregunta: 6627. ";


//  Id pregunta: 7168 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes NO es uno de los libros que componente MAGERIT v2?";
 choices[69]= new Array();
 choices[69][0] = "M&eacute;todo";
 choices[69][1] = "Cat&aacute;logo de Elementos";
 choices[69][2] = "Cat&aacute;logo de Riesgos";
 choices[69][3] = "Gu&iacute;a de T&eacute;cnicas";
 answers[69] = choices[69][2];
 units[69] = "33";
 comments[69] = "Id Pregunta: 7168. Examen TIC B 2009";


//  Id pregunta: 7176 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l es el est&aacute;ndar de la tarjeta f&iacute;sica del DNI electr&oacute;nico?";
 choices[70]= new Array();
 choices[70][0] = "ISO-7816-1";
 choices[70][1] = "PCKS#11";
 choices[70][2] = "ISO-17789";
 choices[70][3] = "ISO-7815-1";
 answers[70] = choices[70][0];
 units[70] = "74";
 comments[70] = "Id Pregunta: 7176. Examen TIC B 2009";


//  Id pregunta: 7318 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Se&ntilde;ala cu&aacute;l de los siguientes lenguajes de programaci&oacute;n no tiene alguna implementaci&oacute;n para el Framework .NET:";
 choices[71]= new Array();
 choices[71][0] = "COBOL";
 choices[71][1] = "Fortran";
 choices[71][2] = "Delphi";
 choices[71][3] = "Todos los lenguajes anteriores tienen alguna implementaci&oacute;n para el Framework .NET";
 answers[71] = choices[71][3];
 units[71] = "59";
 comments[71] = "Id Pregunta: 7318. ";


//  Id pregunta: 7776 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   La palabra clave de Visual Basic.NET &laquo;overrides&raquo; se utiliza para:";
 choices[72]= new Array();
 choices[72][0] = " Heredar todos los miembros no privados de la clase espec&iacute;fica.";
 choices[72][1] = " Especificar qu&eacute; clase no se puede utilizar como clase b&aacute;sica.";
 choices[72][2] = " Indicar que el procedimiento anula un procedimiento de la clase b&aacute;sica.";
 choices[72][3] = " Invocar c&oacute;digo escrito en una clase desde la propia clase.";
 answers[72] = choices[72][2];
 units[72] = "115";
 comments[72] = "Id Pregunta: 7776. Map 2005";


//  Id pregunta: 7782 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo .NET:";
 choices[73]= new Array();
 choices[73][0] = " Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios.";
 choices[73][1] = " En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes.";
 choices[73][2] = " Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos.";
 choices[73][3] = " Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos.";
 answers[73] = choices[73][1];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7782. Map 2005";


//  Id pregunta: 7855 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &laquo;Personas&raquo; en el modelo EFQM?";
 choices[74]= new Array();
 choices[74][0] = " Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos.";
 choices[74][1] = " Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n.";
 choices[74][2] = " Existencia de un autoliderazgo en las personas de la organizaci&oacute;n.";
 choices[74][3] = " Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n.";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7855. Map 2005";


//  Id pregunta: 7985 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[75]= new Array();
 choices[75][0] = " Es independiente del lenguaje de programaci&oacute;n.";
 choices[75][1] = " Es independiente del sistema operativo.";
 choices[75][2] = " Es independiente de la base de datos.";
 choices[75][3] = " Es un tipo de API.";
 answers[75] = choices[75][0];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 7985. Map 2007";


//  Id pregunta: 8169 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la &quot;Ley General de Telecomunicaciones&quot; es cierta?:";
 choices[76]= new Array();
 choices[76][0] = "Corresponde a la Comisi&oacute;n Nacional de los Mercados y la Competencia la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n y, en su caso, de direccionamiento y nombres, teniendo en cuenta las decisiones aplicables que se adopten en el seno de las organizaciones y los foros internacionales.";
 choices[76][1] = "Corresponde al Ministerio de Industria, Energ&iacute;a y Turismo el otorgamiento de los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n";
 choices[76][2] = "El procedimiento y los plazos para la asignaci&oacute;n de n&uacute;meros, as&iacute; como las condiciones asociadas al uso de los n&uacute;meros, que ser&aacute;n no discriminatorias, proporcionadas y transparentes, se establecer&aacute;n reglamentariamente. Transcurrido el plazo m&aacute;ximo sin haberse notificado la resoluci&oacute;n expresa, se podr&aacute; entender aprobada la solicitud por silencio administrativo.";
 choices[76][3] = "Quedan incluidos en el &aacute;mbito de esta Ley, el r&eacute;gimen aplicable a los contenidos de car&aacute;cter audiovisual transmitidos a trav&eacute;s de las redes.";
 answers[76] = choices[76][1];
 units[76] = "110";
 comments[76] = "Id Pregunta: 8169. Examen TIC A1 2010. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 8189 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Las certificaciones ITIL:";
 choices[77]= new Array();
 choices[77][0] = "Se pueden obtener tanto por personas como por organizaciones.";
 choices[77][1] = "S&oacute;lo se pueden obtener por organizaciones y no por personas.";
 choices[77][2] = "S&oacute;lo se pueden obtener por personas y no por organizaciones.";
 choices[77][3] = "No existen certificaciones ITIL.";
 answers[77] = choices[77][2];
 units[77] = "98";
 comments[77] = "Id Pregunta: 8189. Examen TIC A1 2010";


//  Id pregunta: 8265 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  En un acuerdo marco en vigor, la licitaci&oacute;n simplificada puede limitarse a s&oacute;lo tres empresas de entre las firmantes del acuerdo:";
 choices[78]= new Array();
 choices[78][0] = "Cuando la duraci&oacute;n m&aacute;xima de acuerdo sea inferior a un a&ntilde;o.";
 choices[78][1] = "Cuando el importe de licitaci&oacute;n sea inferior al mill&oacute;n de euros.";
 choices[78][2] = "Cuando la tramitaci&oacute;n se haya declarado urgente.";
 choices[78][3] = "Cuando el contrato a adjudicar no est&eacute; sujeto a regulaci&oacute;n armonizada.";
 answers[78] = choices[78][3];
 units[78] = "41";
 comments[78] = "Id Pregunta: 8265. Examen TIC A1 2010";


//  Id pregunta: 8283 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  El formato de direcci&oacute;n EUI-64 es un formato est&aacute;ndar del IEEE, que permite a un nodo autoconfigurar o asignarse autom&aacute;ticamente su propia direcci&oacute;n IPv6 de nodo, a partir de la direcci&oacute;n IEEE 802 MAC de la tarjeta de red del:";
 choices[79]= new Array();
 choices[79][0] = "Router vecino y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 choices[79][1] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/48) del router vecino al que est&aacute; conectado dicho nodo.";
 choices[79][2] = "Router vecino y del prefijo de la direcci&oacute;n de red (/48) a la que est&aacute; conectado dicho nodo.";
 choices[79][3] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 answers[79] = choices[79][3];
 units[79] = "100";
 comments[79] = "Id Pregunta: 8283. Examen TIC A1 2010";


//  Id pregunta: 8303 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  En relaci&oacute;n a IPSec se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[80]= new Array();
 choices[80][0] = "Se defini&oacute; originariamente en las RFCs 1825 y 1829.";
 choices[80][1] = "Tanto AH (Authentication Header) como ESP (Encapsulating Security Payload) proporcionan integridad y autenticaci&oacute;n en la comunicaci&oacute;n.";
 choices[80][2] = "En modo transporte con AH no es posible traducir direcciones mediante NAT transversal.";
 choices[80][3] = "ESP debe implementar obligatoriamente el algoritmo AES-CBC con claves de 128 bits";
 answers[80] = choices[80][2];
 units[80] = "111";
 comments[80] = "Id Pregunta: 8303. Examen TIC A2 2010";


//  Id pregunta: 8346 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Qu&eacute; pruebas tienen como objetivo comprobar que los cambios sobre un componente de un sistema de informaci&oacute;n no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados?";
 choices[81]= new Array();
 choices[81][0] = "Pruebas unitarias.";
 choices[81][1] = "Pruebas del Sistema.";
 choices[81][2] = "Pruebas de Implantaci&oacute;n.";
 choices[81][3] = "Pruebas de Regresi&oacute;n.";
 answers[81] = choices[81][3];
 units[81] = "86";
 comments[81] = "Id Pregunta: 8346. Examen TIC A2 2010";


//  Id pregunta: 8481 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l es el well-known port del protocolo SNMP en el modo petici&oacute;n-respuesta?";
 choices[82]= new Array();
 choices[82][0] = "169.";
 choices[82][1] = "161.";
 choices[82][2] = "171.";
 choices[82][3] = "179.";
 answers[82] = choices[82][1];
 units[82] = "104";
 comments[82] = "Id Pregunta: 8481. Examen TIC A2 2010 interna";


//  Id pregunta: 8671 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Con respecto a los est&aacute;ndares de redes inal&aacute;mbricas &iquest;cu&aacute;l de las siguientes combinaciones es correcta?";
 choices[83]= new Array();
 choices[83][0] = "802.1la-2.4Ghz";
 choices[83][1] = "802.11b -2.4Ghz";
 choices[83][2] = "802.1lg-5Ghz";
 choices[83][3] = "802.1lx-2.4Ghz";
 answers[83] = choices[83][1];
 units[83] = "107";
 comments[83] = "Id Pregunta: 8671. Examen UPM A2 2011";


//  Id pregunta: 8674 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes mensajes del protocolo multicast PIM en modo disperso (PIM-SM) se env&iacute;a en modo unicast?";
 choices[84]= new Array();
 choices[84][0] = "Prune.";
 choices[84][1] = "Join.";
 choices[84][2] = "Register.";
 choices[84][3] = "Stop.";
 answers[84] = choices[84][2];
 units[84] = "101";
 comments[84] = "Id Pregunta: 8674. Examen UPM A2 2011";


//  Id pregunta: 8734 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  La protecci&oacute;n de datos personales encuentra una de sus bases en:";
 choices[85]= new Array();
 choices[85][0] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, en concreto, en Ley Org&aacute;nica 15/1999 de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal (LOPD).";
 choices[85][1] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, inici&aacute;ndose en la Ley Org&aacute;nica 5/1992, de 29 de octubre, de Regulaci&oacute;n del Tratamiento Automatizado de Datos de car&aacute;cter personal (LORTAD)";
 choices[85][2] = "La Carta Europea de Derechos Fundamentales de la Uni&oacute;n Europea, por la que se reconoce el derecho a la protecci&oacute;n de datos personales como un derecho fundamental.";
 choices[85][3] = "La protecci&oacute;n de los derechos de autor en el mundo digital, en tanto el autor sea una persona f&iacute;sica";
 answers[85] = choices[85][2];
 units[85] = "29";
 comments[85] = "Id Pregunta: 8734. Examen TIC A2 2010 interna";


//  Id pregunta: 8814 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de estos procesos de M&eacute;trica 3 contiene actividades diferentes dependiendo de si se trata de un desarrollo estructurado u orientado a objetos?";
 choices[86]= new Array();
 choices[86][0] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 choices[86][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[86][2] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[86][3] = "Ninguno de los anteriores";
 answers[86] = choices[86][1];
 units[86] = "86";
 comments[86] = "Id Pregunta: 8814. Examen UPM A2 2011";


//  Id pregunta: 8824 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)   Seg&uacute;n el Real Decreto legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, &quot;toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n o fijaci&oacute;n&quot; es:";
 choices[87]= new Array();
 choices[87][0] = " Un algoritmo";
 choices[87][1] = "Un m&eacute;todo";
 choices[87][2] = "Un programa de ordenador ";
 choices[87][3] = "Un procedimiento";
 answers[87] = choices[87][2];
 units[87] = "36,37";
 comments[87] = "Id Pregunta: 8824. Examen UC3M 2010";


//  Id pregunta: 8907 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  &iquest;Qu&eacute; relaci&oacute;n existe entre fichero, registro y campo?:";
 choices[88]= new Array();
 choices[88][0] = "El fichero esta formado por varios campos y a cada conjunto de campos con un significado relevante se le conoce como registro.";
 choices[88][1] = "Los registros est&aacute;n compuestos por campos, pero no tienen ninguna relaci&oacute;n con un fichero.";
 choices[88][2] = "Los ficheros contienen registros y los registros est&aacute;n formados por una serie de campos cada uno de los cuales contiene un tipo de informaci&oacute;n sobre dicho registro.";
 choices[88][3] = "Ninguna de las anteriores es correcta";
 answers[88] = choices[88][2];
 units[88] = "52";
 comments[88] = "Id Pregunta: 8907. Operador Ayto. Madrid 2010";


//  Id pregunta: 8927 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  En la mayor&iacute;a de los sistemas Linux, el directorio /home contiene:";
 choices[89]= new Array();
 choices[89][0] = "los directorios de trabajo de los usuarios.";
 choices[89][1] = "los sistemas de archivos montados temporalmente.";
 choices[89][2] = "el c&oacute;digo fuente del kernel.";
 choices[89][3] = "los ficheros de los controladores de dispositivos";
 answers[89] = choices[89][0];
 units[89] = "53, 54";
 comments[89] = "Id Pregunta: 8927. Operador Ayto. Madrid 2010";


//  Id pregunta: 9014 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;Qu&eacute; t&eacute;cnica pueden emplearse para corregir la interferencia entre s&iacute;mbolos en un demodulador digital?";
 choices[90]= new Array();
 choices[90][0] = "el filtrado de coseno alzado de la moduladora";
 choices[90][1] = "el filtrado de pre&eacute;nfasis de la moduladora";
 choices[90][2] = "el filtrado de de retardo de grupo constante";
 choices[90][3] = "Ninguna de las anteriores";
 answers[90] = choices[90][0];
 units[90] = "99";
 comments[90] = "Id Pregunta: 9014. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9120 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  &iquest;C&oacute;mo son los multiprocesadores en los sistemas de gesti&oacute;n UMA?";
 choices[91]= new Array();
 choices[91][0] = "Fuertemente acoplados.";
 choices[91][1] = "Muy desacoplados";
 choices[91][2] = "Un procesador no depende de lo que hace otro";
 choices[91][3] = "Todas las respuestas con correctas";
 answers[91] = choices[91][0];
 units[91] = "45";
 comments[91] = "Id Pregunta: 9120. ";


//  Id pregunta: 9136 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  &iquest;Qu&eacute; es FSB?";
 choices[92]= new Array();
 choices[92][0] = "Front Side Bus. Representa el camino por el cual es posible integrar en la placa base los distintos componentes hardware para el intercambio de informaci&oacute;n entre microprocesador, memoria y el subsistema de Entrada/Salida";
 choices[92][1] = "First Serial Bus. Es el bus que se utiliza en la comunicaci&oacute;n con dispositivos serie como un m&oacute;dem";
 choices[92][2] = "Front Side Bus. Su velocidad siempre es superior a la velocidad interna del microprocesador.";
 choices[92][3] = "Front Side Bus. Se relaciona con el microprocesador mediante la frecuencia (velocidad)";
 answers[92] = choices[92][0];
 units[92] = "47";
 comments[92] = "Id Pregunta: 9136. ";


//  Id pregunta: 9217 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  &iquest;Qu&eacute; es iSCSI?";
 choices[93]= new Array();
 choices[93][0] = "Protocolo que permite establecer t&uacute;neles TCP/IP por el que se env&iacute;an tramas FC sin modificar.";
 choices[93][1] = "No transporta las tramas FC entre sedes remotas sino que transporta s&oacute;lo las capas superiores.";
 choices[93][2] = "Utiliza TCP/IP como red de transporte utilizando la misma infraestructura que se utilice para redes de comunicaciones.";
 choices[93][3] = "Ninguna es correcta.";
 answers[93] = choices[93][2];
 units[93] = "48";
 comments[93] = "Id Pregunta: 9217. ";


//  Id pregunta: 9385 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  En LTE, las funciones de control de recursos de radio, control de calidad de servicio y movilidad se llevan a cabo en:";
 choices[94]= new Array();
 choices[94][0] = "Los Evolved Node-B";
 choices[94][1] = "Los Evolved RNC";
 choices[94][2] = "En las BSC";
 choices[94][3] = "En servidores remotos del operador, a los que se accede por conmutaci&oacute;n en una red IP";
 answers[94] = choices[94][0];
 units[94] = "108";
 comments[94] = "Id Pregunta: 9385. ";


//  Id pregunta: 9518 Año de creación de pregunta: 2013-01-01
 questions[95]= "96)  Los EJB de tipo entity pueden ser:";
 choices[95]= new Array();
 choices[95][0] = "De dos tipos: RMP y CMP";
 choices[95][1] = "De dos tipos: BMP y CMP";
 choices[95][2] = "De tres tipos: BMP, CMP y JMP";
 choices[95][3] = "De tres tipos: BMP, CMP y SMP";
 answers[95] = choices[95][1];
 units[95] = "116";
 comments[95] = "Id Pregunta: 9518. ";


//  Id pregunta: 9519 Año de creación de pregunta: 2013-01-01
 questions[96]= "97)  Java dispone de diferentes APIs con el fin de dar soporte para web services. La API que no est&aacute; relacionada con web services es:";
 choices[96]= new Array();
 choices[96][0] = "JAXR";
 choices[96][1] = "JAXB";
 choices[96][2] = "JAXP";
 choices[96][3] = "JTA";
 answers[96] = choices[96][3];
 units[96] = "116";
 comments[96] = "Id Pregunta: 9519. ";


//  Id pregunta: 9932 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Indique la opci&oacute;n falsa:";
 choices[97]= new Array();
 choices[97][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[97][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[97][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[97][3] = "Todas son verdaderas.";
 answers[97] = choices[97][0];
 units[97] = "100";
 comments[97] = "Id Pregunta: 9932. ";


//  Id pregunta: 9947 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;A qu&eacute; perfil de M&eacute;trica v3 pertenece el Responsable de Mantenimiento?";
 choices[98]= new Array();
 choices[98][0] = "Jefe de Proyecto";
 choices[98][1] = "Consultor";
 choices[98][2] = "Analista";
 choices[98][3] = "Programador";
 answers[98] = choices[98][0];
 units[98] = "86";
 comments[98] = "Id Pregunta: 9947. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10170 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;En qu&eacute; escenarios puede ser &uacute;til una vista materializada de Oracle?";
 choices[99]= new Array();
 choices[99][0] = "Funcionamiento de aplicaciones sin conexi&oacute;n";
 choices[99][1] = "Reducir tr&aacute;fico de red y desplazar carga soportada por un servidor de base de datos corporativo hacia servidores de bases de datos en delegaciones";
 choices[99][2] = "Replicar informaci&oacute;n restringi&eacute;ndola al &aacute;rea geogr&aacute;fica de inter&eacute;s";
 choices[99][3] = "Todas las anteriores";
 answers[99] = choices[99][3];
 units[99] = "58";
 comments[99] = "Id Pregunta: 10170. ";


