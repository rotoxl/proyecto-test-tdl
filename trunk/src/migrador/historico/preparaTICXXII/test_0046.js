/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 31 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a la auditor&iacute;a?:";
 choices[0]= new Array();
 choices[0][0] = "Independientemente del tipo de auditor&iacute;a inform&aacute;tica que pretenda realizarse, la finalidad &uacute;ltima es emitir un juicio acerca del estado de los sistemas";
 choices[0][1] = "Del fin de la auditor&iacute;a habr&aacute;n de obtenerse los medios y las acciones de investigaci&oacute;n que se estimen necesarios para su consecuci&oacute;n";
 choices[0][2] = "La auditor&iacute;a siempre recomendar&aacute; la toma de acciones correctivas, independientemente del examen de situaci&oacute;n realizado";
 choices[0][3] = "Cuando la tarea del auditor sea muy compleja, se llevar&aacute; a cabo una divisi&oacute;n de funciones de forma arborescente";
 answers[0] = choices[0][2];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 31. ";


//  Id pregunta: 72 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas incorpora la posibilidad de valorar el riesgo y la incertidumbre?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo Promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "Permutaci&oacute;n";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][1];
 units[1] = "34";
 comments[1] = "Id Pregunta: 72. ";


//  Id pregunta: 175 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En el &aacute;mbito de la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, se debe a Donovan un modelo que utiliza como variable:";
 choices[2]= new Array();
 choices[2][0] = "El presupuesto empleado en inform&aacute;tica";
 choices[2][1] = "La estructura organizativa";
 choices[2][2] = "El grado de distribuci&oacute;n";
 choices[2][3] = "El nivel de complejidad organizativa";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 175. donovan - nolan";


//  Id pregunta: 177 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En el &aacute;rea de los sistemas de informaci&oacute;n, &iquest;cu&aacute;l es el significado de las siglas MIS?:";
 choices[3]= new Array();
 choices[3][0] = "Manufacturing In Sequence";
 choices[3][1] = "Manufacturing Information System";
 choices[3][2] = "Management Information System";
 choices[3][3] = "Modelling Input System";
 answers[3] = choices[3][2];
 units[3] = "21";
 comments[3] = "Id Pregunta: 177. ";


//  Id pregunta: 257 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Entre otras, la ventaja principal de los sistemas abiertos para los usuarios es:";
 choices[4]= new Array();
 choices[4][0] = "Aseguran la conversi&oacute;n de datos entre sistemas";
 choices[4][1] = "Protegen la inversi&oacute;n realizada en los equipos f&iacute;sicos y en los programas";
 choices[4][2] = "Mejoran la calidad de los productos que se fabrican";
 choices[4][3] = "Los fabricantes tienen m&aacute;s en cuenta las opiniones de los usuarios";
 answers[4] = choices[4][1];
 units[4] = "40";
 comments[4] = "Id Pregunta: 257. ";


//  Id pregunta: 297 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  La directiva 91/250/CEE, modificada por la 93/98/CEE, del Consejo, relativa a la protecci&oacute;n jur&iacute;dica de programas de ordenador:";
 choices[5]= new Array();
 choices[5][0] = "Excluye expl&iacute;citamente aquellos desarrollos sobre plataformas Linux, shareware o software libre";
 choices[5][1] = "Establece que los programas deber&aacute;n protegerse de la misma manera que las obras literarias, con arreglo a lo establecido en el convenio de Berna sobre protecci&oacute;n de obras literarias y art&iacute;sticas";
 choices[5][2] = "Regula aquellos aspectos del comercio electr&oacute;nico relacionados con la materia de propiedad intelectual";
 choices[5][3] = "Crea un nuevo t&iacute;tulo de propiedad industrial &quot;patente comunitaria&quot; para eliminar las distorsiones del mercado interior y permitir que Europa se aproveche al m&aacute;ximo de sus trabajos de investigaci&oacute;n";
 answers[5] = choices[5][1];
 units[5] = "37";
 comments[5] = "Id Pregunta: 297. ";


//  Id pregunta: 640 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  Cu&aacute;l de las siguientes afirmaciones sobre la Iniciativa de Accesibilidad para el contenido en la web (WCAG 1.0) es incorrecta:";
 choices[6]= new Array();
 choices[6][0] = "La especificaci&oacute;n contiene 14 pautas, que son los principios generales para el dise&ntilde;o accesible";
 choices[6][1] = "Cada pauta est&aacute; asociada a uno o m&aacute;s puntos de verificaci&oacute;n que describen c&oacute;mo aplicar esa pauta a las p&aacute;ginas web.";
 choices[6][2] = "Cada punto de verificaci&oacute;n est&aacute; asociado a uno de los tres niveles de adecuaci&oacute;n, los niveles A, AA y AAA";
 choices[6][3] = "El nivel minimo de adecuacion a esta norma lo fija la Ley de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico y obliga a que las p&aacute;ginas web de la Administraci&oacute;n cumplan al menos con el nivel de adecuaci&oacute;n AA.";
 answers[6] = choices[6][3];
 units[6] = "39";
 comments[6] = "Id Pregunta: 640. ";


//  Id pregunta: 647 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Cu&aacute;l de las siguientes afirmaciones sobre AENOR es incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "Mediante un Real Decreto AENOR fue reconocida como la &uacute;nica entidad aprobada para desarrollar las tareas de normalizaci&oacute;n y certificaci&oacute;n en nuestro pa&iacute;s.";
 choices[7][1] = "Las normas espa&ntilde;olas que genera AENOR se denominan Normas UNE.";
 choices[7][2] = "AENOR es miembro de pleno derecho, y representa a nuestro pa&iacute;s en los Organismos Internacionales, europeos y regionales de Normalizaci&oacute;n (ISO, IEC, CEN, CENELEC, ETSI, COPANT).";
 choices[7][3] = "AENOR est&aacute; acreditada por la Entidad Nacional de Acreditaci&oacute;n (ENAC) como la &uacute;nica entidad capaz de certificar ISO 9000 en Espa&ntilde;a.";
 answers[7] = choices[7][3];
 units[7] = "42";
 comments[7] = "Id Pregunta: 647. ";


//  Id pregunta: 817 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Seg&uacute;n el m&eacute;todo de resoluci&oacute;n de problemas GPS (General Problem Solving):";
 choices[8]= new Array();
 choices[8][0] = "El problema se formaliza o define por los siguientes componentes : I(estado inicial), F (estado final) y O (conjunto de operadores complejos)";
 choices[8][1] = "Existe un problema cuando la aplicaci&oacute;n de un m&eacute;todo conocido a una situaci&oacute;n de incertidumbre no lleva a un estado final determinado";
 choices[8][2] = "Los problemas se dividen en subproblemas m&aacute;s simples de manera recursiva. La unidad m&iacute;nima de divisi&oacute;n se denomina &quot;problema elemental&quot;";
 choices[8][3] = "Cuando hay una discrepancia entre la situaci&oacute;n de partida y aqu&eacute;lla que se quiere alcanzar se dice que hay un problema";
 answers[8] = choices[8][3];
 units[8] = "63";
 comments[8] = "Id Pregunta: 817. ";


//  Id pregunta: 962 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Considerando las memoria VRAM, indique la respuesta que es falsa:";
 choices[9]= new Array();
 choices[9][0] = "Incluyen una memoria DRAM y unos registros de desplazamiento que permiten acceso en forma serie";
 choices[9][1] = "Est&aacute;n especialmente dise&ntilde;adas para construir memorias de refresco de determinados gr&aacute;ficos";
 choices[9][2] = "Es un tipo de RAM que no es din&aacute;mica";
 choices[9][3] = "Equivale a Video RAM";
 answers[9] = choices[9][2];
 units[9] = "47";
 comments[9] = "Id Pregunta: 962. ";


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


//  Id pregunta: 1353 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Se&ntilde;ale la respuesta falsa. Frente a RAID 1, RAID 5:";
 choices[11]= new Array();
 choices[11][0] = "Es m&aacute;s r&aacute;pido en escritura";
 choices[11][1] = "Utiliza m&aacute;s discos";
 choices[11][2] = "Ofrece menos espacio utilizable en relaci&oacute;n con el tama&ntilde;o total de los discos";
 choices[11][3] = "Todas las respuestas anteriores son falsas";
 answers[11] = choices[11][1];
 units[11] = "48";
 comments[11] = "Id Pregunta: 1353. ";


//  Id pregunta: 1554 Año de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no est&aacute; asociada al concepto de Software Libre?:";
 choices[12]= new Array();
 choices[12][0] = "Redistribuci&oacute;n libre.";
 choices[12][1] = "Acceso al c&oacute;digo fuente del programa.";
 choices[12][2] = "Derecho de modificaci&oacute;n.";
 choices[12][3] = "Distribuci&oacute;n libre del programa pero no de la licencia.";
 answers[12] = choices[12][3];
 units[12] = "61";
 comments[12] = "Id Pregunta: 1554. Junta Andaluc&iacute;a";


//  Id pregunta: 1717 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  La posibilidad de un sistema operativo de ejecutar diferentes partes de un programa simult&aacute;neamente, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Multitasking";
 choices[13][1] = "Multithreading";
 choices[13][2] = "Multiuser";
 choices[13][3] = "Multiprocessing";
 answers[13] = choices[13][1];
 units[13] = "52";
 comments[13] = "Id Pregunta: 1717. ";


//  Id pregunta: 1920 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida del software favorece la reutilizaci&oacute;n del software existente?";
 choices[14]= new Array();
 choices[14][0] = "Modelo en cascada";
 choices[14][1] = "Modelo de prototipado";
 choices[14][2] = "Modelo de transformaci&oacute;n";
 choices[14][3] = "Modelo en espiral";
 answers[14] = choices[14][3];
 units[14] = "76";
 comments[14] = "Id Pregunta: 1920. ";


//  Id pregunta: 2059 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indicar la respuesta correcta.  El modelo orientado a los datos:";
 choices[15]= new Array();
 choices[15][0] = "Deduce el ciclo de vida de las entidades a partir del flujo de datos";
 choices[15][1] = "Deduce los procesos que debe incorporar el sistema a partir de los datos manejados";
 choices[15][2] = "Deduce los atributos de las entidades a partir de los procesos que debe realizar el sistema";
 choices[15][3] = "Todas son falsas";
 answers[15] = choices[15][3];
 units[15] = "79";
 comments[15] = "Id Pregunta: 2059. ";


//  Id pregunta: 2073 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad de SW, seg&uacute;n McCall?";
 choices[16]= new Array();
 choices[16][0] = "Integridad";
 choices[16][1] = "Sencillez";
 choices[16][2] = "Mantenibilidad";
 choices[16][3] = "Portabilidad";
 answers[16] = choices[16][1];
 units[16] = "88";
 comments[16] = "Id Pregunta: 2073. ";


//  Id pregunta: 2173 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  La definici&oacute;n &quot;margen suplementario de tiempo que existe en una actividad si las actividades precedentes empiezan lo m&aacute;s tarde posible y las posteriores lo antes posible&quot; corresponde a: ";
 choices[17]= new Array();
 choices[17][0] = "holgura independiente";
 choices[17][1] = "holgura total";
 choices[17][2] = "holgura libre";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][0];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2173. ";


//  Id pregunta: 2384 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Indicar cu&aacute;l es una regla de construcci&oacute;n de un proceso dentro de un Diagrama de Flujo de Datos:";
 choices[18]= new Array();
 choices[18][0] = "Los procesos transforman los flujos de datos de entrada en flujos de salida de datos";
 choices[18][1] = "Se puede transformar un dato en varios mediante un proceso";
 choices[18][2] = "Se necesita siempre un proceso entre una entidad externa y un almac&eacute;n de datos";
 choices[18][3] = "Todas las anteriores son reglas de construcci&oacute;n de un proceso";
 answers[18] = choices[18][3];
 units[18] = "81";
 comments[18] = "Id Pregunta: 2384. ";


//  Id pregunta: 2430 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  La planificaci&oacute;n estrat&eacute;gica es:";
 choices[19]= new Array();
 choices[19][0] = "Un momento en el tiempo para tomar decisiones";
 choices[19][1] = "Una herramienta para anticiparse a los cambios";
 choices[19][2] = "Un proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo los objetivos a largo plazo, identificando metas y objetivos cuantitativos, desarrollando estrategias para alcanzar dichos objetivos y localizando recursos para llevar a cabo dichas estrategias";
 choices[19][3] = "Una herramienta que se limita a extrapolar el presente al futuro";
 answers[19] = choices[19][2];
 units[19] = "77";
 comments[19] = "Id Pregunta: 2430. ";


//  Id pregunta: 2494 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;En un diagrama de casos de uso se tienen los siguientes componentes&quot;:";
 choices[20]= new Array();
 choices[20][0] = "Caso de uso.";
 choices[20][1] = "Carpetas.";
 choices[20][2] = "Actor.";
 choices[20][3] = "Relaci&oacute;n.";
 answers[20] = choices[20][1];
 units[20] = "82,84";
 comments[20] = "Id Pregunta: 2494. ";


//  Id pregunta: 2572 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[21]= new Array();
 choices[21][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[21][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[21][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[21][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[21] = choices[21][2];
 units[21] = "87,88,92";
 comments[21] = "Id Pregunta: 2572. ";


//  Id pregunta: 2633 Año de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Qu&eacute; relaci&oacute;n hay entre usuarios y actores en la t&eacute;cnica de los casos de uso?";
 choices[22]= new Array();
 choices[22][0] = "Un usuario se identifica &uacute;nicamente con un actor";
 choices[22][1] = "Un usuario solamente puede ser varios actores";
 choices[22][2] = "Un actor solamente puede ser varios usuarios";
 choices[22][3] = "Un actor puede ser varios usuarios y un usuario varios actores";
 answers[22] = choices[22][3];
 units[22] = "78,84";
 comments[22] = "Id Pregunta: 2633. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2702 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  Respecto al an&aacute;lisis esencial de Yourdon se puede afirmar que ...";
 choices[23]= new Array();
 choices[23][0] = "Se ha de elaborar un modelo esencial y un modelo de implantaci&oacute;n de usuario";
 choices[23][1] = "El modelo esencial de compone de modelo ambiental  y modelo de comportamiento";
 choices[23][2] = "Para describir el modelo de comportamiento se usan DFDs y diagramas E-R";
 choices[23][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[23] = choices[23][3];
 units[23] = "81,84,78";
 comments[23] = "Id Pregunta: 2702. ";


//  Id pregunta: 2704 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[24]= new Array();
 choices[24][0] = "Los avances m&aacute;s recientes en la s&iacute;ntesis del habla han ido por el camino de una parametrizaci&oacute;n de la se&ntilde;al original para suprimir la informaci&oacute;n redundante contenida en las ondas ac&uacute;sticas.";
 choices[24][1] = "En el nivel fon&eacute;tico distintivo se determinan los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[24][2] = "En el nivel fon&eacute;tico se analizan las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[24][3] = "El estudio en el dominio de la frecuencia ha conducido al an&aacute;lisis del habla por transformadas de Fourier y por bancos de filtros en paralelo.";
 answers[24] = choices[24][3];
 units[24] = "94";
 comments[24] = "Id Pregunta: 2704. ";


//  Id pregunta: 2832 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  Seg&uacute;n el m&eacute;todo COCOMO aplicado al mantenimiento, el esfuerzo de mantenimiento es proporcional a";
 choices[25]= new Array();
 choices[25][0] = "la Tasa de Crecimiento Anual";
 choices[25][1] = "la Tasa de C&oacute;mputo Anual";
 choices[25][2] = "la Tasa de Cambio Anual";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][2];
 units[25] = "98";
 comments[25] = "Id Pregunta: 2832. ";


//  Id pregunta: 2880 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  En la matriz de puntuaci&oacute;n REDER, utilizada para puntuar las memorias de las organizaciones que se presentan al Premio Europeo de la Calidad, al subcriterio 7b se le asigna, del total de puntos coprrespondientes al criterio 7, el:";
 choices[26]= new Array();
 choices[26][0] = "10%";
 choices[26][1] = "15%";
 choices[26][2] = "20%";
 choices[26][3] = "25%";
 answers[26] = choices[26][3];
 units[26] = "92";
 comments[26] = "Id Pregunta: 2880. ";


//  Id pregunta: 2945 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  Los Bridges:";
 choices[27]= new Array();
 choices[27][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[27][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[27][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[27][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles supeiores";
 answers[27] = choices[27][3];
 units[27] = "102";
 comments[27] = "Id Pregunta: 2945. Examen TIC MAP B 2004";


//  Id pregunta: 3062 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  En las Active Server Pages de Microsoft IIS:";
 choices[28]= new Array();
 choices[28][0] = "Las p&aacute;ginas ASP son ficheros de texto, con c&oacute;digo VBScript o JScript, que es Interpretado";
 choices[28][1] = "Las p&aacute;ginas ASPX son ficheros compilados con c&oacute;digo de lenguajes Microsoft.NET";
 choices[28][2] = "Las p&aacute;ginas CFM son p&aacute;ginas con c&oacute;digo C, interpretado";
 choices[28][3] = "A y B son ciertas";
 answers[28] = choices[28][3];
 units[28] = "115";
 comments[28] = "Id Pregunta: 3062. ";


//  Id pregunta: 3168 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes dispositivos permite a una Intranet, cuyas m&aacute;quinas tienen direcciones IP no legales, conectarse con Internet y hacerlo adem&aacute;s de forma selectiva seg&uacute;n una lista de URLs autorizadas?:";
 choices[29]= new Array();
 choices[29][0] = "Un servidor FTP ";
 choices[29][1] = "Un servidor WEB ";
 choices[29][2] = "Un router";
 choices[29][3] = " Un proxy";
 answers[29] = choices[29][3];
 units[29] = "113";
 comments[29] = "Id Pregunta: 3168. ";


//  Id pregunta: 3206 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  El cable de par trenzado no apantallado, categor&iacute;a 5, de 2 pares:";
 choices[30]= new Array();
 choices[30][0] = "Soporta hasta 10 Mbps";
 choices[30][1] = "Soporta hasta 20 Mbps";
 choices[30][2] = "Soporta hasta 100 Mbps";
 choices[30][3] = "Soporta hasta 5 Mbps";
 answers[30] = choices[30][2];
 units[30] = "99";
 comments[30] = "Id Pregunta: 3206. ";


//  Id pregunta: 3536 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  En las topolog&iacute;as de red de &aacute;rea local (LAN) se puede decir:";
 choices[31]= new Array();
 choices[31][0] = "En un bus el control es siempre distribuido";
 choices[31][1] = "El doble anillo permite seguir funcionando aunque se produzcan fallos en los puntos de la red";
 choices[31][2] = "La malla se obtiene cuando se conectan nodos pertenecientes a redes distintas de la misma topolog&iacute;a";
 choices[31][3] = "En la red en estrella todo el tr&aacute;fico pasa por el nodo central";
 answers[31] = choices[31][3];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3536. ";


//  Id pregunta: 3548 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, nos referimos a:";
 choices[32]= new Array();
 choices[32][0] = "Igualdad de interfaces entre emisor y receptor";
 choices[32][1] = "Igual velocidad de entrada que de salida";
 choices[32][2] = "Igual velocidad de entrada que de salida, pero solo interfaces el&eacute;ctricas";
 choices[32][3] = "Igual velocidad de entrada que de salida, pero solo interfaces &oacute;pticas";
 answers[32] = choices[32][1];
 units[32] = "103";
 comments[32] = "Id Pregunta: 3548. ";


//  Id pregunta: 3753 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  MPLS se encapsula en la torre de protocolos:";
 choices[33]= new Array();
 choices[33][0] = "por encima del protocolo IP y por debajo del protocolo TCP";
 choices[33][1] = "por encima del protocolo TCP y por debajo de otros protocolos de transporte";
 choices[33][2] = "por encima de los protocolos del nivel de enlace y por debajo de IP";
 choices[33][3] = "por encima de los protocolos del nivel de transporte";
 answers[33] = choices[33][2];
 units[33] = "102";
 comments[33] = "Id Pregunta: 3753. ";


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


//  Id pregunta: 4020 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  En relaci&oacute;n a la numeraci&oacute;n del sistema de telefon&iacute;a m&oacute;vil GSM, el n&uacute;mero que identifica a un abonado de una red GSM dentro del plan de numeraci&oacute;n de la red telef&oacute;nica p&uacute;blica conmutada se denomina:";
 choices[35]= new Array();
 choices[35][0] = "MSRN";
 choices[35][1] = "IMEI";
 choices[35][2] = "MSISDN";
 choices[35][3] = "IMSI";
 answers[35] = choices[35][2];
 units[35] = "108";
 comments[35] = "Id Pregunta: 4020. ";


//  Id pregunta: 4059 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  Que tipo de LAN instalarias en un edificio nuevo";
 choices[36]= new Array();
 choices[36][0] = "Usaria cables porque son m&aacute;s seguros y fiables";
 choices[36][1] = "Usaria Wi-Max porque es una tecnologia que me evita tener que instalar cables";
 choices[36][2] = "Usaria Wi-Fi porque me da la misma funcionalidad que los cables pero con una instalaci&oacute;n m&aacute;s r&aacute;pida";
 choices[36][3] = "Cualquiera de las anteriores es valida";
 answers[36] = choices[36][0];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4059. ";


//  Id pregunta: 4168 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  Un test de penetraci&oacute;n proporciona todo lo siguiente salvo";
 choices[37]= new Array();
 choices[37][0] = "identificaci&oacute;n de fallos de seguridad";
 choices[37][1] = "demostraci&oacute;n de los efectos de los fallos de seguridad";
 choices[37][2] = "un m&eacute;todo de correcci&oacute;n de los fallos";
 choices[37][3] = "verificaci&oacute;n de los niveles actuales de resistencia a la infiltraci&oacute;n";
 answers[37] = choices[37][1];
 units[37] = "111";
 comments[37] = "Id Pregunta: 4168. ";


//  Id pregunta: 4234 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[38]= new Array();
 choices[38][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps";
 choices[38][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos";
 choices[38][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado";
 choices[38][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos";
 answers[38] = choices[38][0];
 units[38] = "108";
 comments[38] = "Id Pregunta: 4234. ";


//  Id pregunta: 4245 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Para que sirve XPath (XML Path language)?";
 choices[39]= new Array();
 choices[39][0] = "Para identificar(y seleccionar)elementos de un documento XML.";
 choices[39][1] = "Para gestionar claves en XML";
 choices[39][2] = "Para hacer consultas en documentos XML";
 choices[39][3] = "Para definir documentos XML";
 answers[39] = choices[39][0];
 units[39] = "69";
 comments[39] = "Id Pregunta: 4245. ";


//  Id pregunta: 4290 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  La gesti&oacute;n de la configuraci&oacute;n del software correctamente desempe&ntilde;ada implica identificar la configuraci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Antes del comienzo del ciclo de vida.";
 choices[40][1] = "Solamente al comienzo del ciclo de vida";
 choices[40][2] = "En puntos predefinidos durante el ciclo de vida.";
 choices[40][3] = "Solamente al finalizar el ciclo de vida";
 answers[40] = choices[40][2];
 units[40] = "87";
 comments[40] = "Id Pregunta: 4290. ";


//  Id pregunta: 4386 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  En el entorno .NET se han desarrollado una serie de lenguajes de programaci&oacute;n para que sean compatibles con el marco de trabajo .NET. &iquest;Cu&aacute;l de los siguientes no es uno de esos lenguajes?";
 choices[41]= new Array();
 choices[41][0] = "Java";
 choices[41][1] = "C#";
 choices[41][2] = "Visual Basic";
 choices[41][3] = "C++";
 answers[41] = choices[41][0];
 units[41] = "59";
 comments[41] = "Id Pregunta: 4386. ";


//  Id pregunta: 4489 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  Seg&uacute;n el RD 944/2005 de 29 de Julio por el que se aprob6 el Plan T&eacute;cnico Nacional para Ia Televisi&oacute;n Digital Terrestre, cada m&uacute;ltiple digital de cobertura nacional o auton&oacute;mica integrara:";
 choices[42]= new Array();
 choices[42][0] = "Al menos cuatro canales digitales diferentes, siendo posible utilizar pasta el 20 % de la capacidad del m&uacute;ltiple para Ia transmisi&oacute;n de servicios adicionales de datos.";
 choices[42][1] = "Al menos cuatro canales digitales sin posibilidad de emitir ning&uacute;n otro servicio adicional de datos.";
 choices[42][2] = "Al menos cuatro canales digitales diferentes siendo obligatoria Ia emision de servicios de datos adicionales.";
 choices[42][3] = "Al menos cuatro canales digitales diferentes, siendo obligatoria la difusi&oacute;n de las Gu&iacute;as Electr&oacute;nicas de Programaci&oacute;n correspondientes a dichos canales.";
 answers[42] = choices[42][0];
 units[42] = "110";
 comments[42] = "Id Pregunta: 4489. ";


//  Id pregunta: 4522 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  En el modelo de Ciclo de vida en cascada pura, &iquest;que sucede si Ia revisi&oacute;n del paso a Ia siguiente etapa del proyecto no es satisfactoria?";
 choices[43]= new Array();
 choices[43][0] = "Se continua con Ia etapa siguiente.";
 choices[43][1] = "Se retrocede a Ia etapa anterior.";
 choices[43][2] = "Se permanece en la etapa actual hasta que este preparada.";
 choices[43][3] = "Se comienza otra vez con Ia primera etapa.";
 answers[43] = choices[43][2];
 units[43] = "76";
 comments[43] = "Id Pregunta: 4522. ";


//  Id pregunta: 4535 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  El protocolo UDP (User Datagram Protocol):";
 choices[44]= new Array();
 choices[44][0] = "Es un protocolo de transporte perteneciente a Ia familia de protocolos TCP/IP no orientado a conexi&oacute;n.";
 choices[44][1] = "Es un protocolo de nivel de red perteneciente a Ia familia de protocolos TCP/IP.";
 choices[44][2] = "Es un protocolo de transporte perteneciente a la familia de protocolos TCP/IP orientado a conexi&oacute;n.";
 choices[44][3] = "Es el protocolo de transporte utilizado por el protocolo de aplicaci&oacute;n FTP.";
 answers[44] = choices[44][0];
 units[44] = "100";
 comments[44] = "Id Pregunta: 4535. ";


//  Id pregunta: 4563 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  Las funciones de mediaci&oacute;n y arbitraje atribuidas por la Ley de Propiedad Intelectual son ejercidas por";
 choices[45]= new Array();
 choices[45][0] = "el Comit&eacute; Mediador y Arbitral de Ia Propiedad intelectual";
 choices[45][1] = "el Comit&eacute; Nacional de la Propiedad Intelectual";
 choices[45][2] = "la Comisi&oacute;n Nacional Mediadora y Arbitral de la Propiedad Intelectual";
 choices[45][3] = "Ia Comisi&oacute;n Mediadora y Arbitral de Ia Propiedad Intelectual";
 answers[45] = choices[45][3];
 units[45] = "36";
 comments[45] = "Id Pregunta: 4563. ";


//  Id pregunta: 4597 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  En Ia tecnolog&iacute;a ATM qu&eacute; tipo de protocolo utilizar&iacute;a en la capa de adaptaci&oacute;n al medio si estamos trabajando en modo orientado a conexi&oacute;n y con una tasa de bits constante:";
 choices[46]= new Array();
 choices[46][0] = "Tipo 1";
 choices[46][1] = "Tipo 2";
 choices[46][2] = "Tipo 3/4";
 choices[46][3] = "Tipo 5";
 answers[46] = choices[46][0];
 units[46] = "109";
 comments[46] = "Id Pregunta: 4597. ";


//  Id pregunta: 4611 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Seg&uacute;n la Norma UNE-ISO/IEC 17799:2000 cual de los siguientes aspectos NO esta incluido en el control de accesos";
 choices[47]= new Array();
 choices[47][0] = "seguridad de los servicios de red";
 choices[47][1] = "sincronizaci&oacute;n de relojes";
 choices[47][2] = "responsabilidades del usuario";
 choices[47][3] = "control de acceso a la librer&iacute;a de programa as fuente";
 answers[47] = choices[47][3];
 units[47] = "33";
 comments[47] = "Id Pregunta: 4611. ISO 17799 actualmente es ISO 27002";


//  Id pregunta: 4728 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[48]= new Array();
 choices[48][0] = "Estudio de Viabilidad del Sistema";
 choices[48][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[48][2] = "Concepci&oacute;n del Sistema";
 choices[48][3] = "Estudio del Sistema Actual";
 answers[48] = choices[48][1];
 units[48] = "86";
 comments[48] = "Id Pregunta: 4728. Examen 2006 JCYL";


//  Id pregunta: 4744 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en:";
 choices[49]= new Array();
 choices[49][0] = "An&aacute;lisis de riesgos";
 choices[49][1] = "An&aacute;lisis de impacto";
 choices[49][2] = "Disponibilidad";
 choices[49][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[49] = choices[49][1];
 units[49] = "32";
 comments[49] = "Id Pregunta: 4744. Examen 2006 JCYL";


//  Id pregunta: 4782 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Seg&uacute;n el Real Decreto 522/2006";
 choices[50]= new Array();
 choices[50][0] = "En procedimientos administrativos de la Administraci&oacute;n General del Estado se suprome la aportaci&oacute;n de fotocopias de documentos de identidad";
 choices[50][1] = "En los procedimientos administrativos de la Administraci&oacute;n General del Estado se suprime la exigencia de aportar el certificado de empadronamiento, como documento probatorio del domicilio y residencia.";
 choices[50][2] = "Se regula la expedici&oacute;n del documento nacional de identidad electr&oacute;nico y sus certificados de firma electr&oacute;nica";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][0];
 units[50] = "30";
 comments[50] = "Id Pregunta: 4782. ";


//  Id pregunta: 4837 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos,&iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint)";
 choices[51][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones";
 choices[51][2] = "Rollback de la transacci&oacute;n";
 choices[51][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones";
 answers[51] = choices[51][1];
 units[51] = "58";
 comments[51] = "Id Pregunta: 4837. ";


//  Id pregunta: 4844 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  El protocolo DHCP (Dynamic Host Configuration Protocol) es una mejora o actualizaci&oacute;n de uno de los siguientesprotocolos:";
 choices[52]= new Array();
 choices[52][0] = "ARP (Address Resolution Protocol)";
 choices[52][1] = "RARP (Reverse Address Resolution Protocol)";
 choices[52][2] = "BOOTP (Bootstrap Protocol)";
 choices[52][3] = "IGMP (Internet Group Management Protocol)";
 answers[52] = choices[52][2];
 units[52] = "100";
 comments[52] = "Id Pregunta: 4844. ";


//  Id pregunta: 4881 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  Los casos de uso son una t&eacute;cnica eficaz para la determinaci&oacute;n de necesidades. &Eacute;stos fueron creados por:";
 choices[53]= new Array();
 choices[53][0] = "Warnier-Orr";
 choices[53][1] = "Rumbaugh";
 choices[53][2] = "Jacobson";
 choices[53][3] = "Booch";
 answers[53] = choices[53][2];
 units[53] = "82";
 comments[53] = "Id Pregunta: 4881. ";


//  Id pregunta: 4940 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Seg&uacute;n M&eacute;trica v.3, la desnormalizaci&oacute;n controlada del modelo f&iacute;sico de datos se aplica para:";
 choices[54]= new Array();
 choices[54][0] = "Hacer m&aacute;s r&aacute;pidas las actualizaciones a&uacute;n sacrificando la velocidad de las lecturas sobre la base de datos.";
 choices[54][1] = "Proporcionar flexibilidad al modelo.";
 choices[54][2] = "Simplificar la implementaci&oacute;n del modelo.";
 choices[54][3] = "Reducir o simplificar el n&uacute;mero de accesos a la base de datos.";
 answers[54] = choices[54][3];
 units[54] = "86";
 comments[54] = "Id Pregunta: 4940. Examen TIC B 2007";


//  Id pregunta: 4998 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[55]= new Array();
 choices[55][0] = "La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute";
 choices[55][1] = "La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentesplataformas";
 choices[55][2] = "Existen versiones de m&aacute;quina virtual implantadas por hardware";
 choices[55][3] = "El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &quot;Java Bytecode&quot;";
 answers[55] = choices[55][0];
 units[55] = "60";
 comments[55] = "Id Pregunta: 4998. Examen TIC A 2007";


//  Id pregunta: 5009 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP (TransmissionControl Protocol/Internet Protocol)?";
 choices[56]= new Array();
 choices[56][0] = "PGR";
 choices[56][1] = "SMTP";
 choices[56][2] = "ICMP";
 choices[56][3] = "SNMP";
 answers[56] = choices[56][3];
 units[56] = "104";
 comments[56] = "Id Pregunta: 5009. Examen TIC A 2007";


//  Id pregunta: 5011 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un mediode pago?:";
 choices[57]= new Array();
 choices[57][0] = "Simultaneidad";
 choices[57][1] = "Interactividad";
 choices[57][2] = "No repudio";
 choices[57][3] = "Automatizaci&oacute;n";
 answers[57] = choices[57][2];
 units[57] = "70";
 comments[57] = "Id Pregunta: 5011. Examen TIC A 2007";


//  Id pregunta: 5076 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?:";
 choices[58]= new Array();
 choices[58][0] = "UPDATE TABLE";
 choices[58][1] = "ALTER TABLE";
 choices[58][2] = "REVOKE ALL";
 choices[58][3] = "ROLLBACK";
 answers[58] = choices[58][1];
 units[58] = "58";
 comments[58] = "Id Pregunta: 5076. Examen TIC A 2007";


//  Id pregunta: 5096 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, los servicios de certificaci&oacute;n pueden ser prestados:";
 choices[59]= new Array();
 choices[59][0] = "Solamente por personas f&iacute;sicas o jur&iacute;dicas privadas ";
 choices[59][1] = "Tanto por entidades p&uacute;blicas como por personas f&iacute;sicas o jur&iacute;dicas cuando as&iacute; se establezca de acuerdo con el Derecho nacional";
 choices[59][2] = "Solamente por entidades p&uacute;blicas";
 choices[59][3] = "Por entidades p&uacute;blicas, que expedir&aacute;n los certificados reconocidos, y por personas f&iacute;sicas, que expediran los certificados no reconocidos";
 answers[59] = choices[59][1];
 units[59] = "30";
 comments[59] = "Id Pregunta: 5096. ";


//  Id pregunta: 5272 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  El DNIe recoge los siguientes datos biom&eacute;tricos";
 choices[60]= new Array();
 choices[60][0] = "Huellas dactilares";
 choices[60][1] = "Iris del ojo";
 choices[60][2] = "Patr&oacute;n facial";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][3];
 units[60] = "74";
 comments[60] = "Id Pregunta: 5272. no recoge huella dactilar completa, s&oacute;lo las minucias";


//  Id pregunta: 5275 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indique que respuesta no es correcta. La red transeuropea sTESTA: ";
 choices[61]= new Array();
 choices[61][0] = "Corresponde con una de las infraestructuras y servicios comunes de IDABC.";
 choices[61][1] = "Conecta a trav&eacute;s de Internet las redes administrativas de los Estados Miembros y las instituciones europeas.";
 choices[61][2] = "Permite el acceso a los servicios paneuropeos de Administraci&oacute;n Electr&oacute;nica mediante el enlace SARA-sTESTA.";
 choices[61][3] = "Ahorra a los Departamentos de la Administraci&oacute;n el coste de enlaces independientes con administraciones de otros estados miembros";
 answers[61] = choices[61][1];
 units[61] = "103";
 comments[61] = "Id Pregunta: 5275. ";


//  Id pregunta: 5522 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  La medida del n&uacute;mero de bits utilizados para definir cada p&iacute;xel es";
 choices[62]= new Array();
 choices[62][0] = "Resoluci&oacute;n";
 choices[62][1] = "&Aacute;rea de imagen";
 choices[62][2] = "Profundidad de bit o de color";
 choices[62][3] = "Ninguna es verdadera";
 answers[62] = choices[62][2];
 units[62] = "93";
 comments[62] = "Id Pregunta: 5522. ";


//  Id pregunta: 5553 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  La clara identificaci&oacute;n de cualquier cambio de idioma que se pueda producir en el texto de un documento, ser&iacute;a un ejemplo de punto de verificaci&oacute;n de accesibilidad de prioridad: ";
 choices[63]= new Array();
 choices[63][0] = "1";
 choices[63][1] = "2";
 choices[63][2] = "3";
 choices[63][3] = "4";
 answers[63] = choices[63][0];
 units[63] = "39";
 comments[63] = "Id Pregunta: 5553. ";


//  Id pregunta: 5577 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  &iquest;Cu&aacute;ntos dominios y procesos forman COBIT?";
 choices[64]= new Array();
 choices[64][0] = "3 dominios y 43 procesos";
 choices[64][1] = "4 dominios y 34 procesos";
 choices[64][2] = "5 dominios y 33 procesos";
 choices[64][3] = "6 dominios y 44 procesos";
 answers[64] = choices[64][1];
 units[64] = "98";
 comments[64] = "Id Pregunta: 5577. ";


//  Id pregunta: 5628 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  Se&ntilde;ale la diferencia entre SMP y clustering";
 choices[65]= new Array();
 choices[65][0] = "SMP utiliza memoria compartida y el clustering paso de mensaje";
 choices[65][1] = "SMP utiliza paralelismo puro y el clustering memoria compartida ";
 choices[65][2] = "SMP utiliza memoria compartida y el clustering paralelismo puro ";
 choices[65][3] = "SMP utiliza memoria compartida y el clustering paralelismo de datos";
 answers[65] = choices[65][0];
 units[65] = "45";
 comments[65] = "Id Pregunta: 5628. ";


//  Id pregunta: 5641 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Indique cu&aacute;l de los siguientes no se trata de un principio gu&iacute;a que defina reglas b&aacute;sicas para el desarrollo, mantenimiento y uso de arquitecturas SOA:";
 choices[66]= new Array();
 choices[66][0] = "Conceptualizaci&oacute;n";
 choices[66][1] = "Interoperabilidad";
 choices[66][2] = "Componentizaci&oacute;n";
 choices[66][3] = "Reutilizaci&oacute;n";
 answers[66] = choices[66][0];
 units[66] = "51";
 comments[66] = "Id Pregunta: 5641. ";


//  Id pregunta: 5748 Año de creación de pregunta: 2009-01-01
 questions[67]= "68)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[67]= new Array();
 choices[67][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[67][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[67][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[67][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[67] = choices[67][1];
 units[67] = "74";
 comments[67] = "Id Pregunta: 5748. ";


//  Id pregunta: 5775 Año de creación de pregunta: 2009-01-01
 questions[68]= "69)  Seg&uacute;n el RD 1720/2007 cuando la obligaci&oacute;n de notificar afecte a ficheros sujetos a la competencia de la autoridad de control de una Comunidad Aut&oacute;noma que haya creado su propio registro de ficheros, la notificaci&oacute;n se realizar&aacute; a:";
 choices[68]= new Array();
 choices[68][0] = "la autoridad auton&oacute;mica competente, que dar&aacute; traslado de la inscripci&oacute;n  al Registro General de Protecci&oacute;n de  Datos";
 choices[68][1] = "la autoridad auton&oacute;mica competente y al Registro General de Protecci&oacute;n de  Datos";
 choices[68][2] = "al Registro General de Protecci&oacute;n de  Datos, que dar&aacute; traslado de la inscripci&oacute;n a la la autoridad auton&oacute;mica competente";
 choices[68][3] = "la autoridad auton&oacute;mica competente o al Registro General de Protecci&oacute;n de  Datos. El receptor de la notificaci&oacute;n dar&aacute; traslado de la inscripci&oacute;n al otro ente";
 answers[68] = choices[68][0];
 units[68] = "29";
 comments[68] = "Id Pregunta: 5775. MAP 2008 A2";


//  Id pregunta: 5816 Año de creación de pregunta: 2009-01-01
 questions[69]= "70)  &iquest;Qu&eacute; NO es cierto de la subasta electr&oacute;nica, seg&uacute;n se desarrolla en RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico (art&iacute;culo 148)?";
 choices[69]= new Array();
 choices[69][0] = "Se basar&aacute; en variaciones referidas al precio o a valores de los elementos de la oferta que sean cuantificables y susceptibles de ser expresados en cifras o pocentajes";
 choices[69][1] = "Los &oacute;rganos de contrataci&oacute;n deber&aacute;n indicarlo en el anuncio de licitaci&oacute;n";
 choices[69][2] = "La subasta se iniciar&aacute; el primer d&iacute;a h&aacute;bil siguiente a la finalizaci&oacute;n del plazo de recepci&oacute;n de las ofertas";
 choices[69][3] = "Se deber&aacute; indicar la f&oacute;rmula matem&aacute;tica que se utilizar&aacute; para la reclasificaci&oacute;n autom&aacute;tica de las ofertas";
 answers[69] = choices[69][2];
 units[69] = "41";
 comments[69] = "Id Pregunta: 5816. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";


//  Id pregunta: 5842 Año de creación de pregunta: 2009-01-01
 questions[70]= "71)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[70]= new Array();
 choices[70][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[70][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[70][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[70][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[70] = choices[70][2];
 units[70] = "30";
 comments[70] = "Id Pregunta: 5842. MAP 2008 A1";


//  Id pregunta: 5891 Año de creación de pregunta: 2009-01-01
 questions[71]= "72)  &iquest;Qu&eacute; tecnolog&iacute;a Java permite la invocaci&oacute;n de m&eacute;todos de un objeto remoto?";
 choices[71]= new Array();
 choices[71][0] = "RMI";
 choices[71][1] = "JNI";
 choices[71][2] = "JDBC";
 choices[71][3] = "JRM";
 answers[71] = choices[71][0];
 units[71] = "60";
 comments[71] = "Id Pregunta: 5891. ";


//  Id pregunta: 5919 Año de creación de pregunta: 2009-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes paquetes software se usa para construir grids?:";
 choices[72]= new Array();
 choices[72][0] = "Globus Toolkit";
 choices[72][1] = "Grid Squema Toolkit";
 choices[72][2] = "EYEE Toolkit";
 choices[72][3] = "WS-DAI";
 answers[72] = choices[72][0];
 units[72] = "45";
 comments[72] = "Id Pregunta: 5919. MAP 2008 A1";


//  Id pregunta: 5961 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  Seg&uacute;n la Norma ISO 9000:2000, la relaci&oacute;n entre el resultado alcanzado y los recursos utilizados, se denomina:";
 choices[73]= new Array();
 choices[73][0] = "Eficiencia";
 choices[73][1] = "Eficacia";
 choices[73][2] = "Proceso";
 choices[73][3] = "Requisito";
 answers[73] = choices[73][0];
 units[73] = "87";
 comments[73] = "Id Pregunta: 5961. Castilla La Mancha 2009";


//  Id pregunta: 6088 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Cu&aacute;les de los siguientes est&aacute;ndares y protocolos relacionados con los Servicios Web son est&aacute;ndares W3C?";
 choices[74]= new Array();
 choices[74][0] = "XML, SOAP y WSDL";
 choices[74][1] = "XML, SOAP y UDDI";
 choices[74][2] = "XML, WSDL y UDDI";
 choices[74][3] = "SOAP, WSDL y UDDI.";
 answers[74] = choices[74][0];
 units[74] = "51";
 comments[74] = "Id Pregunta: 6088. ";


//  Id pregunta: 6144 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  Con respecto al ancho de banda de la conexi&oacute;n ADSL de un abonado";
 choices[75]= new Array();
 choices[75][0] = "La tasa de transferencia no es sensible a la distancia del abonado a la central, de forma que es similar a todos los abonados de una misma central";
 choices[75][1] = "La tasa de transferencia es sensible a la distancia del abonado a la central, de forma que los abonados que est&aacute;n m&aacute;s cerca de la central tendr&aacute;n posibilidad de velocidades m&aacute;s altas";
 choices[75][2] = "La tasa de transferencia del abonado depende principalmente del n&uacute;mero de abonados que est&aacute;n conectados simult&aacute;neamente, en ning&uacute;n caso de la distancia a la central";
 choices[75][3] = "Todas las respuestas anteriores son falsas";
 answers[75] = choices[75][0];
 units[75] = "107";
 comments[75] = "Id Pregunta: 6144. ";


//  Id pregunta: 6249 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta, de acuerdo con M&eacute;trica 3?";
 choices[76]= new Array();
 choices[76][0] = "El objetivo de la gesti&oacute;n de la configuraci&oacute;n es mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realicen cambios";
 choices[76][1] = "Ejecutables y c&oacute;digo fuente son elementos de configuraci&oacute;n software pero no lo son las especificaciones de requisitos";
 choices[76][2] = "La gesti&oacute;n de configuraci&oacute;n se realiza durante todas las actividades asociadas al desarrollo del sistema, y contin&uacute;a registrando los cambios hasta que &eacute;ste deja de utilizarse";
 choices[76][3] = "La gesti&oacute;n de configuraci&oacute;n aporta informaci&oacute;n precisa para valorar el impacto de los cambios en el mantenimiento correctivo. La gesti&oacute;n de configuraci&oacute;n no contempla el mantenimiento evolutivo";
 answers[76] = choices[76][2];
 units[76] = "86";
 comments[76] = "Id Pregunta: 6249. TICB-2009, bloque desarrollo";


//  Id pregunta: 6268 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  El &ldquo;Plan&rdquo; cuyo objetivo es conseguir la continuidad en las funciones estrat&eacute;gicas de una organizaci&oacute;n desempe&ntilde;adas en sus instalaciones corporativas se denomina:";
 choices[77]= new Array();
 choices[77][0] = "Plan de continuidad de operaciones.";
 choices[77][1] = "Plan de continuidad de negocio.";
 choices[77][2] = "Plan de contingencia.";
 choices[77][3] = "Plan de emergencia.";
 answers[77] = choices[77][0];
 units[77] = "32";
 comments[77] = "Id Pregunta: 6268. ";


//  Id pregunta: 6330 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes acciones no se puede considerar del modo de operar del Data Mining?";
 choices[78]= new Array();
 choices[78][0] = "Adivinar futuros comportamientos.";
 choices[78][1] = "Crear modelos.";
 choices[78][2] = "Analizar relaciones.";
 choices[78][3] = "Detectar desviaciones.";
 answers[78] = choices[78][0];
 units[78] = "68";
 comments[78] = "Id Pregunta: 6330. ";


//  Id pregunta: 6347 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el podcasting es cierta?";
 choices[79]= new Array();
 choices[79][0] = "Podcasting es la distribuci&oacute;n de archivos multimedia (normalmente audio o v&iacute;deo) mediante un sistema de sindicaci&oacute;n que permita suscribirse y usar un programa que lo descarga para que el usuario lo escuche en el momento que quiera.";
 choices[79][1] = "Habitualmente, no es necesario estar suscrito para descargar un podcast";
 choices[79][2] = "En Internet podemos encontrar todo tipo de podcast de todo tipo de tem&aacute;ticas";
 choices[79][3] = "Todas las anteriores son ciertas";
 answers[79] = choices[79][3];
 units[79] = "120";
 comments[79] = "Id Pregunta: 6347. ";


//  Id pregunta: 6540 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  En el &aacute;mbito de la biometr&iacute;a";
 choices[80]= new Array();
 choices[80][0] = "Un error Tipo I significa que el sistema ha rechazado a un individuo autorizado";
 choices[80][1] = "Un error Tipo I significa que el sistema ha autorizado a un impostor";
 choices[80][2] = "Un error Tipo II significa que el sistema ha rechazado a un individuo autorizado";
 choices[80][3] = "Un error Tipo III significa que el sistema ha rechazado a un individuo autorizado";
 answers[80] = choices[80][0];
 units[80] = "111";
 comments[80] = "Id Pregunta: 6540. ";


//  Id pregunta: 7163 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los ficheros de Linux es cierta?";
 choices[81]= new Array();
 choices[81][0] = "/etc/passwd: s&oacute;lo es accesible para root";
 choices[81][1] = "/etc/shadow: contiene las contrase&ntilde;as encriptadas de los usuarios ";
 choices[81][2] = "/etc/ftpusers: contienes los usuarios que pueden acceder al sistema v&iacute;a ftp";
 choices[81][3] = "/etc/dhcpconfig: contiene informaci&oacute;n de configuraci&oacute;n del cliente DHCP";
 answers[81] = choices[81][1];
 units[81] = "53,54";
 comments[81] = "Id Pregunta: 7163. Examen TIC B 2009";


//  Id pregunta: 7255 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  Seg&uacute;n la RFC 2373 correpondiente a la arquitectura de direccionamiento para IPv6. El prefijo que es usado para direcciones multidifusi&oacute;n (multicast) es";
 choices[82]= new Array();
 choices[82][0] = "3F";
 choices[82][1] = "FE";
 choices[82][2] = "FC";
 choices[82][3] = "FF";
 answers[82] = choices[82][3];
 units[82] = "100";
 comments[82] = "Id Pregunta: 7255. Examen TIC B 2009";


//  Id pregunta: 8208 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  En una tabla de una base de datos relacional:";
 choices[83]= new Array();
 choices[83][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[83][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[83][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[83][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder ala tabla.";
 answers[83] = choices[83][3];
 units[83] = "57, 58";
 comments[83] = "Id Pregunta: 8208. Examen TIC A1 2010";


//  Id pregunta: 8293 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Entre las diferencias en los protocolos IPv4 e IPv6 NO se encuentra que:";
 choices[84]= new Array();
 choices[84][0] = "La implementaci&oacute;n del multicast es obligatoria en IPv6 y opcional en IPv4.";
 choices[84][1] = "MTU m&iacute;nimo de IPv6 es de 1280 bytes frente a los 576 bytes de IPv4.";
 choices[84][2] = "El encabezado de IPv6 sin opciones es menor que el encabezado de IPv4 sin opciones.";
 choices[84][3] = "El soporte para IPsec es obligatorio en IPv6 y opcional en IPv4.";
 answers[84] = choices[84][2];
 units[84] = "100";
 comments[84] = "Id Pregunta: 8293. Examen TIC A2 2010";


//  Id pregunta: 8350 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)   &iquest;Para que sirve la palabra clave &quot;static&quot; en Java? ";
 choices[85]= new Array();
 choices[85][0] = "Indica que aquel rn&eacute;todo o variable que precede es constante, es decir, no puede modificarse";
 choices[85][1] = "Permite indicar que el m&eacute;todo o la variable al que precede pertenece a la clase en lugar de al objeto";
 choices[85][2] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde otras clases";
 choices[85][3] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde la dase a la que pertenece.";
 answers[85] = choices[85][1];
 units[85] = "116";
 comments[85] = "Id Pregunta: 8350. Examen TIC A2 2010";


//  Id pregunta: 8380 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  La velocidad de transferencia base (1X) de un disco Blu-ray es de:";
 choices[86]= new Array();
 choices[86][0] = "54 Mbits/s.";
 choices[86][1] = "4,5 MBytes/s.";
 choices[86][2] = "36 MBytes/s.";
 choices[86][3] = "9 MBytes/s.";
 answers[86] = choices[86][1];
 units[86] = "48";
 comments[86] = "Id Pregunta: 8380. Examen TIC A2 2010";


//  Id pregunta: 8435 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  &iquest;Qu&eacute; proyecto europeo pretende establecer una plataforma de interoperabilidad y reconocimiento mutuo transfronterizo entre las identidades electr&oacute;nicas existentes en cada Estado Europeo?";
 choices[87]= new Array();
 choices[87][0] = "Conecta";
 choices[87][1] = "Robinson";
 choices[87][2] = "Stork";
 choices[87][3] = "Interoperability card";
 answers[87] = choices[87][2];
 units[87] = "118";
 comments[87] = "Id Pregunta: 8435. ";


//  Id pregunta: 8662 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  En el protocolo SIP de voz sobre IP, &iquest;cu&aacute;l no es una entidad l&oacute;gica?";
 choices[88]= new Array();
 choices[88][0] = "Agente de usuario";
 choices[88][1] = "Servidor proxy";
 choices[88][2] = "Agente de usuario inverso";
 choices[88][3] = "Agente proxy";
 answers[88] = choices[88][3];
 units[88] = "109";
 comments[88] = "Id Pregunta: 8662. Examen UPM A2 2011";


//  Id pregunta: 8906 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[89]= new Array();
 choices[89][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[89][1] = "UTP Categor&iacute;a 3.";
 choices[89][2] = "UTP Categor&iacute;a 5.";
 choices[89][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[89] = choices[89][2];
 units[89] = "99, 101";
 comments[89] = "Id Pregunta: 8906. Operador Ayto. Madrid 2010";


//  Id pregunta: 8975 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Seg&uacute;n el R.D. 1720/2007, &ldquo;El afectado podr&aacute; revocar su consentimiento a trav&eacute;s de un medio sencillo, gratuito y que no implique...";
 choices[90]= new Array();
 choices[90][0] = "...gasto alguno para el afectado&rdquo;";
 choices[90][1] = "...esfuerzos desproporcionados para el afectado&rdquo;";
 choices[90][2] = "...ingreso alguno para el responsable del fichero o tratamiento&rdquo;";
 choices[90][3] = "...ning&uacute;n tipo de discriminaci&oacute;n&rdquo;";
 answers[90] = choices[90][2];
 units[90] = "29";
 comments[90] = "Id Pregunta: 8975. ";


//  Id pregunta: 9012 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  Las p&eacute;rdidas debidas a absorci&oacute;n por gases atmosf&eacute;ricos deben tenerse en cuenta en:";
 choices[91]= new Array();
 choices[91][0] = "Radioenlaces de frecuencias superiores a 30 GHz.";
 choices[91][1] = "Radioenlaces de frecuencias superiores a 3 GHz.";
 choices[91][2] = "Radioenlaces de frecuencias superiores a 300 MHz.";
 choices[91][3] = "Radioenlaces de frecuencias superiores a 300 kHz";
 answers[91] = choices[91][1];
 units[91] = "108";
 comments[91] = "Id Pregunta: 9012. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9046 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  C&uacute;al no es un interfaz en M&eacute;trica v3";
 choices[92]= new Array();
 choices[92][0] = "Gesti&oacute;n de la Configuraci&oacute;n";
 choices[92][1] = "Seguridad Integral";
 choices[92][2] = "Gesti&oacute;n del Cambio";
 choices[92][3] = "Aseguramiento de la Calidad";
 answers[92] = choices[92][2];
 units[92] = "86";
 comments[92] = "Id Pregunta: 9046. ";


//  Id pregunta: 9317 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  Se&ntilde;ale la falsa";
 choices[93]= new Array();
 choices[93][0] = "La auditor&iacute;a requiere una planificaci&oacute;n a tres niveles: qu&eacute;, cu&aacute;ndo y c&oacute;mo auditar";
 choices[93][1] = "Si el &aacute;rea ya ha sido auditada con anterioridad debe revisarse la documentaci&oacute;n previa";
 choices[93][2] = "Aunque el &aacute;rea ya haya sido auditada con anterioridad es necesario realizar la auditor&iacute;a al completo sin tener en cuenta la documentaci&oacute;n previa pues &eacute;sta puede no ser ya consistente con la situaci&oacute;n actual";
 choices[93][3] = "Una de las ventajas del uso de herramientas de auditor&iacute;a inform&aacute;tica es la disminuci&oacute;n del riesgo propio del proceso de auditor&iacute;a en la recolecci&oacute;n de datos y la mayor independencia";
 answers[93] = choices[93][2];
 units[93] = "31";
 comments[93] = "Id Pregunta: 9317. ";


//  Id pregunta: 9348 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  En RDSI, en el lado del operador:";
 choices[94]= new Array();
 choices[94][0] = "La Terminaci&oacute;n de Central se encarga de manejar el protocolo de enlace de datos.";
 choices[94][1] = "La terminaci&oacute;n de L&iacute;nea se encarga de manejar el protocolo de enlace de datos.";
 choices[94][2] = "La terminaci&oacute;n de central est&aacute; entre la interfaz U y V.";
 choices[94][3] = "La Terminaci&oacute;n de L&iacute;nea est&aacute; entre la interfaz U y T.";
 answers[94] = choices[94][0];
 units[94] = "103";
 comments[94] = "Id Pregunta: 9348. ASTIC 2011 pag 8";


//  Id pregunta: 9461 Año de creación de pregunta: 2013-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes diagramas no se usan en UML 2.0?";
 choices[95]= new Array();
 choices[95][0] = "Diagrama de secuencia.";
 choices[95][1] = "Diagrama de comunicaci&oacute;n.";
 choices[95][2] = "Diagrama de transici&oacute;n de estados.";
 choices[95][3] = "Diagrama de elementos.";
 answers[95] = choices[95][3];
 units[95] = "84";
 comments[95] = "Id Pregunta: 9461. ";


//  Id pregunta: 9646 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[96]= new Array();
 choices[96][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[96][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[96][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[96][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[96] = choices[96][3];
 units[96] = "41";
 comments[96] = "Id Pregunta: 9646. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";


//  Id pregunta: 9691 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[97]= new Array();
 choices[97][0] = "Modelo en estrella.";
 choices[97][1] = "Modelo Copo de nieve.";
 choices[97][2] = "Constelaciones.";
 choices[97][3] = "Todos son modelos dimensionales.";
 answers[97] = choices[97][3];
 units[97] = "68";
 comments[97] = "Id Pregunta: 9691. ";


//  Id pregunta: 10254 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En cuanto al tratamiento de  datos personales de menores";
 choices[98]= new Array();
 choices[98][0] = "La legislaci&oacute;n no hace distinciones referentes a la edad de la persona de la que se recaban los datos";
 choices[98][1] = "Con car&aacute;cter general, s&oacute;lo pueden recabarse datos de personas mayores de edad (18 a&ntilde;os)";
 choices[98][2] = "Con car&aacute;cter general, pueden recabarse datos de menores de edad (18 a&ntilde;os) s&oacute;lo con consentimiento de sus padres o tutores";
 choices[98][3] = "Con car&aacute;cter general, pueden recabarse datos de menores de 14 a&ntilde;os s&oacute;lo con consentimiento de sus padres o tutores";
 answers[98] = choices[98][3];
 units[98] = "29";
 comments[98] = "Id Pregunta: 10254. Art&iacute;culo 13.1 del RD 1720/2007";


//  Id pregunta: 10291 Año de creación de pregunta: 2010-01-01
 questions[99]= "100)  Una desventaja de la topolog&iacute;a f&iacute;sica de bus es que:";
 choices[99]= new Array();
 choices[99][0] = "Un fallo en el concentrador provoca el aislamiento de todos los nodos a &eacute;l conectados.";
 choices[99][1] = "Requiere m&aacute;s cable que la topolog&iacute;a en estrella.";
 choices[99][2] = "Es vulnerable a la atenuaci&oacute;n, ya que pierde se&ntilde;al a trav&eacute;s de la distancia del cable.";
 choices[99][3] = "Es compleja y dif&iacute;cil de arreglar.";
 answers[99] = choices[99][2];
 units[99] = "101";
 comments[99] = "Id Pregunta: 10291. TIC A2, libre, examen 2013";


