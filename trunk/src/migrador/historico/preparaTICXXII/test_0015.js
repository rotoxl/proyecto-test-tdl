/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 23 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se denomina la comprobaci&oacute;n de si un producto en el campo de las TI satisface o no los requisitos t&eacute;cnicos de una norma?:";
 choices[0]= new Array();
 choices[0][0] = "Certificaci&oacute;n";
 choices[0][1] = "Homologaci&oacute;n";
 choices[0][2] = "Prueba de conformidad";
 choices[0][3] = "Comprobaci&oacute;n de especificaci&oacute;n t&eacute;cnica";
 answers[0] = choices[0][2];
 units[0] = "42";
 comments[0] = "Id Pregunta: 23. ";


//  Id pregunta: 66 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; indica un nivel de prioridad 3 en la norma WCAG 1.0 del WAI sobre un punto de verificaci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "Un desarrollador de contenidos de p&aacute;ginas web tiene que satisfacer el punto de verificaci&oacute;n ";
 choices[1][1] = "Un desarrollador de contenidos de p&aacute;ginas web debe satisfacer el punto de verificaci&oacute;n";
 choices[1][2] = "Un desarrollador de contenidos de p&aacute;ginas web puede satisfacer el punto de verificaci&oacute;n";
 choices[1][3] = "Ninguna de las opciones anteriores es correcta";
 answers[1] = choices[1][2];
 units[1] = "39";
 comments[1] = "Id Pregunta: 66. ";


//  Id pregunta: 148 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  El m&eacute;todo Delphi para la toma de decisiones es un procedimiento basado en:";
 choices[2]= new Array();
 choices[2][0] = "Series hist&oacute;ricas conocidas que permiten predecir el comportamiento futuro";
 choices[2][1] = "C&aacute;lculo de probabilidades de ocurrencia de cada suceso sobre el que se quiere tomar la decisi&oacute;n";
 choices[2][2] = "Consultar la opini&oacute;n de expertos";
 choices[2][3] = "S&oacute;lo se aplica para la realizaci&oacute;n de proyectos y permite identificar las actividades que forman el camino cr&iacute;tico";
 answers[2] = choices[2][2];
 units[2] = "23";
 comments[2] = "Id Pregunta: 148. ";


//  Id pregunta: 512 Año de creación de pregunta: 2003-01-01
 questions[3]= "4)  Respecto a la ley 1/1996 de propiedad intelectual es falso que proteja:";
 choices[3]= new Array();
 choices[3][0] = "Los derechos de explotaci&oacute;n";
 choices[3][1] = "Los programas de ordenador";
 choices[3][2] = "La documentaci&oacute;n";
 choices[3][3] = "Las ideas que subyacen en los programas de ordenador ";
 answers[3] = choices[3][3];
 units[3] = "36";
 comments[3] = "Id Pregunta: 512. ";


//  Id pregunta: 530 Año de creación de pregunta: 2004-01-01
 questions[4]= "5)  Un auditor inform&aacute;tico deber&aacute; verificar:";
 choices[4]= new Array();
 choices[4][0] = "Cumplimiento de objetivos de la organizaci&oacute;n";
 choices[4][1] = "Adecuaci&oacute;n de procedimientos de control";
 choices[4][2] = "Uso de metodolog&iacute;as seg&uacute;n est&aacute;ndares de la organizaci&oacute;n";
 choices[4][3] = "Todas";
 answers[4] = choices[4][3];
 units[4] = "31, 32, 33";
 comments[4] = "Id Pregunta: 530. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 563 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  La organizaciones dentro de las administraciones p&uacute;blicas necesitan directivos que";
 choices[5]= new Array();
 choices[5][0] = "Sean ante todo jefes que se sustenten en la legalidad estatutaria";
 choices[5][1] = "Sean l&iacute;deres que se sustenten en la legalidad estatutaria";
 choices[5][2] = "Lideres que permitan el desarrollo de la misi&oacute;n  y visi&oacute;n de la administraci&oacute;n";
 choices[5][3] = "Jefes que en periodo de cambio sean coherentes con el prop&oacute;sito de la organizaci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "22";
 comments[5] = "Id Pregunta: 563. ";


//  Id pregunta: 685 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; es PROFIT?";
 choices[6]= new Array();
 choices[6][0] = "Un estamento independiente que se encarga de velar por el desarrollo de las tecnolog&iacute;as de la informaci&oacute;n en los pa&iacute;ses en v&iacute;as de desarrollo.";
 choices[6][1] = "El Programa de Fomento para la Investigaci&oacute;n T&eacute;cnica, promovido para conceder ayudas a los proyectos de I+D.";
 choices[6][2] = "El programa asociado al programa IDA y encargado del intercambio de las estad&iacute;sticas de tr&aacute;fico en los distintos pa&iacute;ses de la Comunidad Europea.";
 choices[6][3] = "Nada de lo anterior es cierto.";
 answers[6] = choices[6][1];
 units[6] = "103";
 comments[6] = "Id Pregunta: 685. ";


//  Id pregunta: 702 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  Cu&aacute;l de las siguientes l&iacute;neas ser&iacute;a v&aacute;lida en XHTML:";
 choices[7]= new Array();
 choices[7][0] = "&lt;br/&gt;&lt;hr&gt;&lt;/hr&gt;";
 choices[7][1] = "&lt;br/&gt;&lt;hr/&gt;";
 choices[7][2] = "&lt;hr&gt;&lt;/hr&gt;";
 choices[7][3] = "Todas son v&aacute;lidas";
 answers[7] = choices[7][3];
 units[7] = "69";
 comments[7] = "Id Pregunta: 702. Similar a examen TIC MAP A 2004";


//  Id pregunta: 720 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[8]= new Array();
 choices[8][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[8][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[8][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[8][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 720. Examen TIC MAP B 2004";


//  Id pregunta: 788 Año de creación de pregunta: 2009-01-01
 questions[9]= "10)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[9]= new Array();
 choices[9][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[9][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[9][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[9][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[9] = choices[9][0];
 units[9] = "30";
 comments[9] = "Id Pregunta: 788. articulo 5";


//  Id pregunta: 935 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; indica la directiva #pragma en lenguaje C?:";
 choices[10]= new Array();
 choices[10][0] = "Le indica al compilador que genere un mensaje de error si llega a ese punto del c&oacute;digo";
 choices[10][1] = "Es un #include condicional";
 choices[10][2] = "Permite al implementador del compilador definir otras instrucciones de preprocesamiento para el compilador";
 choices[10][3] = "Nada de lo anterior es correcto";
 answers[10] = choices[10][2];
 units[10] = "59";
 comments[10] = "Id Pregunta: 935. ";


//  Id pregunta: 1100 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[11]= new Array();
 choices[11][0] = "Superset o superconjunto";
 choices[11][1] = "Package o paquete";
 choices[11][2] = "Superclass o Superclase";
 choices[11][3] = "Colection o Colecci&oacute;n";
 answers[11] = choices[11][1];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1100. JCED - Preparatic XVII";


//  Id pregunta: 1868 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  &iquest;D&oacute;nde se recoge la posici&oacute;n de los contactos del chip enuna tarjetainteligente?";
 choices[12]= new Array();
 choices[12][0] = "ISO 7816-1";
 choices[12][1] = "ISO 7816-2";
 choices[12][2] = "ISO 7816-3";
 choices[12][3] = "ISO 7816-4";
 answers[12] = choices[12][1];
 units[12] = "74";
 comments[12] = "Id Pregunta: 1868. ";


//  Id pregunta: 1883 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[13]= new Array();
 choices[13][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros. ";
 choices[13][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[13][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[13][3] = "La primera es falsa";
 answers[13] = choices[13][3];
 units[13] = "30";
 comments[13] = "Id Pregunta: 1883. ";


//  Id pregunta: 1923 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[14]= new Array();
 choices[14][0] = "Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP";
 choices[14][1] = "Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica";
 choices[14][2] = "Los ficheros con este formato son independientes de la plataforma";
 choices[14][3] = "Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los fichero que contiene";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1923. ";


//  Id pregunta: 2024 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  En Programaci&oacute;n orientada a objetos, las relaciones de agregaci&oacute;n entre objetos son:";
 choices[15]= new Array();
 choices[15][0] = "Maneras de construir clases u objetos en t&eacute;rminos de otras clases u objetos.";
 choices[15][1] = "La forma de definir una clase u objeto como extensi&oacute;n de otra clase u objeto.";
 choices[15][2] = "Mecanismos para sobrecargar los m&eacute;todos de accesos a los objetos.";
 choices[15][3] = "S&oacute;lo posibles entre objetos monol&iacute;ticos.";
 answers[15] = choices[15][0];
 units[15] = "82,84";
 comments[15] = "Id Pregunta: 2024. Examen TIC MAP B 2004";


//  Id pregunta: 2125 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el &quot;Upsizing&quot;?:";
 choices[16]= new Array();
 choices[16][0] = "Las aplicaciones se elevan a la gerencia de la organizaci&oacute;n";
 choices[16][1] = "El &quot;upsizing&quot; es lo que queda de un &quot;righsizing&quot; cuando se le hace un &quot;downsizing&quot;";
 choices[16][2] = "S&oacute;lo se realiza en algunos sistemas";
 choices[16][3] = "Con la tecnolog&iacute;a web ya no tiene sentido hablar de &quot;upsizing&quot; ya que es centralizada";
 answers[16] = choices[16][2];
 units[16] = "90";
 comments[16] = "Id Pregunta: 2125. ";


//  Id pregunta: 2744 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Son objetivos que persigue el An&aacute;lisis de Sistemas de Informaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Identificar las necesidades del cliente";
 choices[17][1] = "Crear una definici&oacute;n clara y precisa del sistema, que sea la base para todo lo que sigue despu&eacute;s";
 choices[17][2] = "Establecer las restricciones de coste y tiempo que incidir&aacute;n en el futuro desarrollo";
 choices[17][3] = "Todas las anteriores";
 answers[17] = choices[17][3];
 units[17] = "80";
 comments[17] = "Id Pregunta: 2744. ";


//  Id pregunta: 2770 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  En referencia a UML, &iquest;c&oacute;mo se denomina el elemento que sirve para a&ntilde;adir cualquier comentario a un diagrama o elemento del mismo?";
 choices[18]= new Array();
 choices[18][0] = "En UML no existe este tipo de elementos.";
 choices[18][1] = "Nota.";
 choices[18][2] = "Diccionario sem&aacute;ntico.";
 choices[18][3] = "Diccionario l&eacute;xico.";
 answers[18] = choices[18][1];
 units[18] = "84";
 comments[18] = "Id Pregunta: 2770. ";


//  Id pregunta: 2796 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  Qu&eacute; tipo de actividades contempla M&eacute;trica v3 en la interfaz de seguridad";
 choices[19]= new Array();
 choices[19][0] = "Seguridad intr&iacute;nseca del sistema";
 choices[19][1] = "seguridad del proceso de desarrollo";
 choices[19][2] = "Formaci&oacute;n en materia de seguridad";
 choices[19][3] = "Todas son correctas";
 answers[19] = choices[19][3];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2796. ";


//  Id pregunta: 3529 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  En la Red Digital de Servicios Integrados (RDSI), un acceso b&aacute;sico permite:    ";
 choices[20]= new Array();
 choices[20][0] = "Obligatoriamente un canal de voz, otro de datos y un tercero de se&ntilde;alizaci&oacute;n";
 choices[20][1] = "Tres conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[20][2] = "Dos conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[20][3] = "Un canal de datos y dos canales de v&iacute;deo";
 answers[20] = choices[20][2];
 units[20] = "103";
 comments[20] = "Id Pregunta: 3529. ";


//  Id pregunta: 3667 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  Una arquitectura de red jer&aacute;rquica:";
 choices[21]= new Array();
 choices[21][0] = "Asigna a cada sistema de comunicaciones de la red las mismas funciones";
 choices[21][1] = "Todas las sesiones de la red tienen lugar entre sistemas parejos";
 choices[21][2] = "Un sistema maestro es el encargado de toda la red y realiza funciones de gesti&oacute;n y control";
 choices[21][3] = "Todas las sesiones comparten las funciones de gesti&oacute;n de red";
 answers[21] = choices[21][2];
 units[21] = "104";
 comments[21] = "Id Pregunta: 3667. ";


//  Id pregunta: 3738 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los puentes que evitan el bucle de paquetes cuando hay varios enlaces entre ellos se denominan:";
 choices[22]= new Array();
 choices[22][0] = "Adaptativos y redundantes";
 choices[22][1] = "Tipo 'source routing'";
 choices[22][2] = "Tipo 'spanning tree'";
 choices[22][3] = "De inversi&oacute;n de se&ntilde;ales f&iacute;sicas";
 answers[22] = choices[22][2];
 units[22] = "102";
 comments[22] = "Id Pregunta: 3738. ";


//  Id pregunta: 3759 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Para especificar un protocolo en el modelo OSI son necesarios:";
 choices[23]= new Array();
 choices[23][0] = "S&oacute;lo la descripci&oacute;n de las PDUs que lo forman, junto con su prop&oacute;sito y los campos que las forman";
 choices[23][1] = "La a) y la descripci&oacute;n de los servicios usados, procedimientos seguidos y descripci&oacute;n formal (usando por ejemplo ASN.1)";
 choices[23][2] = "La b) y adem&aacute;s la descripci&oacute;n del comportamiento interno-externo";
 choices[23][3] = "Un protocolo no se puede especificar libremente, ya que hay impuestas condiciones referentes al sistema operativo y/o los lenguajes de programaci&oacute;n que usen las m&aacute;quinas en las que se implante";
 answers[23] = choices[23][1];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3759. ";


//  Id pregunta: 3946 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  El protocolo Internet versi&oacute;n 6 (IPv6) define un espacio de direcciones de:";
 choices[24]= new Array();
 choices[24][0] = "32 bits";
 choices[24][1] = "64 bits";
 choices[24][2] = "128 bits";
 choices[24][3] = "Ninguno de los anteriores";
 answers[24] = choices[24][2];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3946. ";


//  Id pregunta: 3977 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  En relaci&oacute;n a los cables de par trenzado UTP y STP, indique cu&aacute;l de las siguientes afirmaciones es cierta.";
 choices[25]= new Array();
 choices[25][0] = "Las categor&iacute;as 1 y 2 de UTP se emplean para transmisi&oacute;n de datos X.25";
 choices[25][1] = "La categor&iacute;a 4 de UTP especifica cables hasta 20 MHz, se utilizan para voz y datos hasta 16 Mbps";
 choices[25][2] = "El tipo 6 de cable STP emplea 4 pares trenzados de mayor calibre que los de tipo 1";
 choices[25][3] = "Los cables STP, a pesar de su menor inmunidad a las interferencias, son los de mayor implantaci&oacute;n en los cableados estructurados.";
 answers[25] = choices[25][1];
 units[25] = "99";
 comments[25] = "Id Pregunta: 3977. ";


//  Id pregunta: 4063 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a las extensiones MIME";
 choices[26]= new Array();
 choices[26][0] = "MIME es acr&oacute;nimo de MultiProtocol Internet Mail Extension";
 choices[26][1] = "permite enviar contenido multimedia a trav&eacute;s de HTTP";
 choices[26][2] = "el est&aacute;ndar de seguridad S-MIME permite el env&iacute;o seguro de mensajes y transacciones";
 choices[26][3] = "fue creado por Ia Asociaci&oacute;n de Amigos de Internet (IFA)";
 answers[26] = choices[26][2];
 units[26] = "112";
 comments[26] = "Id Pregunta: 4063. ";


//  Id pregunta: 4071 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes categorias de software no estan incluidas tipicamente en un ERP ?";
 choices[27]= new Array();
 choices[27][0] = "Gesti&oacute;n de Nomina";
 choices[27][1] = "Gesti&oacute;n de RRHH";
 choices[27][2] = "Gesti&oacute;n de Contabilidad";
 choices[27][3] = "Gesti&oacute;n de Clientes";
 answers[27] = choices[27][3];
 units[27] = "65";
 comments[27] = "Id Pregunta: 4071. ";


//  Id pregunta: 4154 Año de creación de pregunta: 2006-01-01
 questions[28]= "29)  Capacidad que permite la descarga de actualizaciones software o bien la reconfiguraci&oacute;n de ordenadores por la noche, cuando normalmente est&aacute;n apagados";
 choices[28]= new Array();
 choices[28][0] = "firmware";
 choices[28][1] = "teclado virtual";
 choices[28][2] = "despertar remoto (remote wakeup)";
 choices[28][3] = "Autocomprobaci&oacute;n de arranque (Power-On Self-Test)";
 answers[28] = choices[28][2];
 units[28] = "113";
 comments[28] = "Id Pregunta: 4154. ";


//  Id pregunta: 4322 Año de creación de pregunta: 2007-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre PostScript y el formato PDF no es correcta?";
 choices[29]= new Array();
 choices[29][0] = "PostScript es un lenguaje de programaci&oacute;n, y PDF no";
 choices[29][1] = "Tanto PostScript como PDF comparten el mismo Modelo de Imagen, describiendo las p&aacute;ginas mediante los mismos mecanismos";
 choices[29][2] = "Tanto en PostScript como en PDF es posible definir bucles.";
 choices[29][3] = "PostScript es interpretado y ejecutado. PDF es interpretado, pero no ejecutado en sentido estricto.";
 answers[29] = choices[29][2];
 units[29] = "40";
 comments[29] = "Id Pregunta: 4322. ";


//  Id pregunta: 4413 Año de creación de pregunta: 2007-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de selecci&oacute;n de inversiones?";
 choices[30]= new Array();
 choices[30][0] = "El m&eacute;todo del Payback.";
 choices[30][1] = "El m&eacute;todo del retorno de la inversi&oacute;n.";
 choices[30][2] = "El m&eacute;todo del Valor Actual Neto.";
 choices[30][3] = "El m&eacute;todo del Indicador Alternativo de Variabilidad del Precio de Mercado.";
 answers[30] = choices[30][3];
 units[30] = "27";
 comments[30] = "Id Pregunta: 4413. Examen TIC MAP B 2006";


//  Id pregunta: 4578 Año de creación de pregunta: 2007-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[31]= new Array();
 choices[31][0] = "La ingenier&iacute;a inversa es el proceso de codificar los programas m&aacute;s eficientemente.";
 choices[31][1] = "La reingenier&iacute;a del software incluye el an&aacute;lisis de inventario.";
 choices[31][2] = "La ingenier&iacute;a inversa s&oacute;lo es aplicable al software estructurado.";
 choices[31][3] = "La ingenier&iacute;a directa es el proceso de analizar un programa para extraer informaci&oacute;n acerca de los datos, de su arquitectura y del dise&ntilde;o de procedimientos.";
 answers[31] = choices[31][1];
 units[31] = "91";
 comments[31] = "Id Pregunta: 4578. Castilla la Mancha B 06";


//  Id pregunta: 4606 Año de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Cual de las siguientes t&eacute;cnicas NO es de gesti&oacute;n de proyectos?";
 choices[32]= new Array();
 choices[32][0] = "m&eacute;todo MARKII para el An&aacute;lisis de los Puntos Funci&oacute;n";
 choices[32][1] = "Diagrama de extrapolaci&oacute;n";
 choices[32][2] = "staffing size";
 choices[32][3] = "Joint Requirements Planning";
 answers[32] = choices[32][3];
 units[32] = "28";
 comments[32] = "Id Pregunta: 4606. ";


//  Id pregunta: 5064 Año de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes grupos de trabajo del IEEE dedica su actividad al campo de las redes de &aacute;reametropolitana?:";
 choices[33]= new Array();
 choices[33][0] = "802.3";
 choices[33][1] = "802.4";
 choices[33][2] = "802.5";
 choices[33][3] = "802.6";
 answers[33] = choices[33][3];
 units[33] = "101";
 comments[33] = "Id Pregunta: 5064. Examen TIC A 2007";


//  Id pregunta: 5103 Año de creación de pregunta: 2003-01-01
 questions[34]= "35)  Los elementos b&aacute;sicos de un sistema de informaci&oacute;n son:";
 choices[34]= new Array();
 choices[34][0] = "Los procedimiento y las pr&aacute;cticas hatituales de trabajo; la informaci&oacute;n; los usuarios; el equipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 choices[34][1] = "Los procedimientos y las pr&aacute;cticas habituales de trabajo; la informaci&oacute;n; el eqipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 choices[34][2] = "Los procedimientos y las pr&aacute;cticas habituales de trabajo; la informaci&oacute;n; los usuarios.";
 choices[34][3] = "La informaci&oacute;n; el equipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 answers[34] = choices[34][0];
 units[34] = "21";
 comments[34] = "Id Pregunta: 5103. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5210 Año de creación de pregunta: 2003-01-01
 questions[35]= "36)  En el modelo EFQM:";
 choices[35]= new Array();
 choices[35][0] = "El subcriterio 6A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[35][1] = "El subcriterio 6B tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[35][2] = "El subcriterio 7A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[35][3] = "El subcriterio 7B tiene un peso del 75% del total de los puntos del criterio 6";
 answers[35] = choices[35][1];
 units[35] = "92";
 comments[35] = "Id Pregunta: 5210. ";


//  Id pregunta: 5844 Año de creación de pregunta: 2009-01-01
 questions[36]= "37)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l era clasificado por CISCO como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace";
 choices[36]= new Array();
 choices[36][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol)";
 choices[36][1] = "IGRP (Interior Gateway Routing Protocol)";
 choices[36][2] = "OSPF (Open Shortest Path First)";
 choices[36][3] = "RIPv2 (Routing Information Protocol ver. 2)";
 answers[36] = choices[36][0];
 units[36] = "102";
 comments[36] = "Id Pregunta: 5844. MAP 2008 A1";


//  Id pregunta: 5902 Año de creación de pregunta: 2009-01-01
 questions[37]= "38)  La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[37]= new Array();
 choices[37][0] = "GPRS";
 choices[37][1] = "UMTS";
 choices[37][2] = "GSM";
 choices[37][3] = "DECT";
 answers[37] = choices[37][1];
 units[37] = "108";
 comments[37] = "Id Pregunta: 5902. MAP 2008 A1";


//  Id pregunta: 5903 Año de creación de pregunta: 2009-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con M&Eacute;TRICA v.3 es FALSA?:";
 choices[38]= new Array();
 choices[38][0] = "Cubre distintos tipos de desarrollo: &quot;estructurado&quot; y &quot;orientado a objetos&quot;";
 choices[38][1] = "En su estructura se distinguen tres procesos principales";
 choices[38][2] = "Se incluyen Interfaces para aspectos de gesti&oacute;n";
 choices[38][3] = "El proceso de desarrollo de Sistemas de Informaci&oacute;n se divide en cuatro procesos: &quot;an&aacute;lisis&quot;, &quot;dise&ntilde;o&quot;, &quot;construcci&oacute;n&quot;, e &quot;implantaci&oacute;n y aceptaci&oacute;n&quot; del sistema";
 answers[38] = choices[38][3];
 units[38] = "86";
 comments[38] = "Id Pregunta: 5903. MAP 2008 A1";


//  Id pregunta: 6068 Año de creación de pregunta: 2010-01-01
 questions[39]= "40)  En el &aacute;mbito de los algoritmos de aprendizaje";
 choices[39]= new Array();
 choices[39][0] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje no supervisado";
 choices[39][1] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje no supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje supervisado";
 choices[39][2] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje supervisado";
 choices[39][3] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje no supervisado";
 answers[39] = choices[39][1];
 units[39] = "63,64";
 comments[39] = "Id Pregunta: 6068. ";


//  Id pregunta: 6120 Año de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Puede la Agencia de Protecci&oacute;n de Datos, en el ejercicio de sus competencias, inspeccionar un fichero de titularidad p&uacute;blica de un Ministerio, examinando adem&aacute;s el equipo o equipos f&iacute;sicos en el que se halle el fichero?";
 choices[40]= new Array();
 choices[40][0] = "No, porque carece de competencias sobre ficheros de titularidad p&uacute;blica, y s&oacute;lo puede inspeccionar los de titularidad privada.";
 choices[40][1] = "No, porque los Ministerios son autoridades p&uacute;blicas y solo pueden ser inspeccionados por la Inspecci&oacute;n General de Servicios del Ministerio de la Presidencia. ";
 choices[40][2] = "S&iacute;, puede hacer la inspecci&oacute;n, pero s&oacute;lo si lo solicita el Ministerio correspondiente, no siendo admisible una inspecci&oacute;n de oficio.";
 choices[40][3] = "S&iacute;, puede hacer la inspecci&oacute;n conforme a sus competencias.";
 answers[40] = choices[40][3];
 units[40] = "29";
 comments[40] = "Id Pregunta: 6120. TIC A 2009";


//  Id pregunta: 6176 Año de creación de pregunta: 2010-01-01
 questions[41]= "42)  Se&ntilde;ale cual de los siguientes no se corresponde con ning&uacute;n libro SCORM";
 choices[41]= new Array();
 choices[41][0] = "Scorm Content Aggregation Model.";
 choices[41][1] = "Scorm Shareable Content Objects.";
 choices[41][2] = "Scorm Run-Time Environment.";
 choices[41][3] = "Scorm Sequencing and Navigation.";
 answers[41] = choices[41][1];
 units[41] = "66";
 comments[41] = "Id Pregunta: 6176. ";


//  Id pregunta: 6181 Año de creación de pregunta: 2010-01-01
 questions[42]= "43)  Indique la afirmaci&oacute;n verdadera";
 choices[42]= new Array();
 choices[42][0] = "El resultado de una modelizaci&oacute;n de procesos en BPMN debe ser expresado en BPML, BPEL o XPDL.";
 choices[42][1] = "El resultado de una modelizaci&oacute;n de procesos en BPML debe ser expresado en BPMN, BPEL o XPDL.";
 choices[42][2] = "El resultado de una modelizaci&oacute;n de procesos en BPEL debe ser expresado en BPML, BPMN o XPDL.";
 choices[42][3] = "El resultado de una modelizaci&oacute;n de procesos en XPDL debe ser expresado en BPML, BPEL o BPMN.";
 answers[42] = choices[42][0];
 units[42] = "71";
 comments[42] = "Id Pregunta: 6181. ";


//  Id pregunta: 6280 Año de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Cu&aacute;les de las siguientes no es una fase definida en la planificaci&oacute;n estrat&eacute;gica?";
 choices[43]= new Array();
 choices[43][0] = "Formulaci&oacute;n de objetivos organizacionales";
 choices[43][1] = "An&aacute;lisis de las fortalezas y limitaciones de la empresa";
 choices[43][2] = "Reestructuraci&oacute;n de la empresa";
 choices[43][3] = "Formulaci&oacute;n de alternativas estrat&eacute;gicas";
 answers[43] = choices[43][2];
 units[43] = "77";
 comments[43] = "Id Pregunta: 6280. ";


//  Id pregunta: 6445 Año de creación de pregunta: 2010-01-01
 questions[44]= "45)  La organizaci&oacute;n intergubernamental cuyo objetivo es coordinar el desarrollo y operabilidad de las redes y servicios de telecomunicaciones, se denomina:";
 choices[44]= new Array();
 choices[44][0] = "ITU";
 choices[44][1] = "IEC";
 choices[44][2] = "ETSI";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][0];
 units[44] = "42";
 comments[44] = "Id Pregunta: 6445. Castilla La Mancha 2009";


//  Id pregunta: 6533 Año de creación de pregunta: 2010-01-01
 questions[45]= "46)  Los desajustes en los cumplimientos de las expectativas y especificaciones de los servicios determinan";
 choices[45]= new Array();
 choices[45][0] = "El grado de satisfacci&oacute;n de los usuarios";
 choices[45][1] = "Percepci&oacute;n del servicio y expectativas previas de los usuarios";
 choices[45][2] = "A y B son correctas";
 choices[45][3] = "A y B son incorrectas";
 answers[45] = choices[45][2];
 units[45] = "92";
 comments[45] = "Id Pregunta: 6533. ";


//  Id pregunta: 6539 Año de creación de pregunta: 2010-01-01
 questions[46]= "47)  Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[46]= new Array();
 choices[46][0] = "TACACS+";
 choices[46][1] = "Radius";
 choices[46][2] = "Un grupo de trabajo peer-to-peer";
 choices[46][3] = "Diameter";
 answers[46] = choices[46][2];
 units[46] = "111";
 comments[46] = "Id Pregunta: 6539. ";


//  Id pregunta: 6642 Año de creación de pregunta: 2010-01-01
 questions[47]= "48)  En un sistema Orientado a Objetos, cu&aacute;l de las siguientes NO es una m&eacute;trica para evaluar la calidad del dise&ntilde;o?";
 choices[47]= new Array();
 choices[47][0] = "M&eacute;tricas de Booch";
 choices[47][1] = "M&eacute;tricas MDOO";
 choices[47][2] = "M&eacute;tricas de Lorenz y Kidd";
 choices[47][3] = "M&eacute;tricas de Chidamber y Kemerer";
 answers[47] = choices[47][0];
 units[47] = "88";
 comments[47] = "Id Pregunta: 6642. ";


//  Id pregunta: 7254 Año de creación de pregunta: 2010-01-01
 questions[48]= "49)  MPLS (Multiprotocol Label Switching) opera:";
 choices[48]= new Array();
 choices[48][0] = "Sobre el protocolo IP, y por debajo del protocolo TCP";
 choices[48][1] = "Entre la capa de enlace de datos y la capa de red del modelo OSI";
 choices[48][2] = "Entre el protocolo TCP y los protocolos del nivel de Aplicaci&oacute;n";
 choices[48][3] = "Entre la capa del nivel de red y la capa de transporte del modelo TCP/IP";
 answers[48] = choices[48][1];
 units[48] = "100";
 comments[48] = "Id Pregunta: 7254. Examen TIC B 2009";


//  Id pregunta: 7271 Año de creación de pregunta: 2010-01-01
 questions[49]= "50)  Una conexi&oacute;n FTP puede funcionar en modo activo o pasivo. Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[49]= new Array();
 choices[49][0] = "El modo pasivo sirve, para que una vez iniciada una transferencia de archivos, poder iniciar otra transferencia sin tener que esperar a la finalizaci&oacute;n de la primera";
 choices[49][1] = "El modo pasivo es muy recomendable cuando el cliente tiene una conexi&oacute;n con cortafuegos, ya que en esta modalidad, tanto el canal de control como el canal de datos los abre el cliente";
 choices[49][2] = "En el modo pasivo se fuerza que, tanto el cliente como el servidor usen los puertos 20 y 21 para el env&iacute;o de los datos y la informaci&oacute;n de control rec&iacute;procamente y evitar problemas con los cortafuegos";
 choices[49][3] = "El modo pasivo, facilita que tanto la informaci&oacute;n de control como la de datos se transmita por el mismo puerto (el 21 en el servidor y cualquier puerto en el cliente)";
 answers[49] = choices[49][1];
 units[49] = "112";
 comments[49] = "Id Pregunta: 7271. ";


//  Id pregunta: 7278 Año de creación de pregunta: 2010-01-01
 questions[50]= "51)  VMWare es un software de virtualiaci&oacute;n de ";
 choices[50]= new Array();
 choices[50][0] = "Sistema operativo";
 choices[50][1] = "Red";
 choices[50][2] = "Paravirtualizaci&oacute;n";
 choices[50][3] = "Hardware";
 answers[50] = choices[50][3];
 units[50] = "119";
 comments[50] = "Id Pregunta: 7278. ";


//  Id pregunta: 7286 Año de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes elementos se puede decir que genuinamente forma parte de la web 2.0?";
 choices[51]= new Array();
 choices[51][0] = "Sindicaci&oacute;n de contenidos";
 choices[51][1] = "Sistemas de administraci&oacute;n de contenidos (CMS)";
 choices[51][2] = "P&aacute;ginas personales";
 choices[51][3] = "Directorios (taxonom&iacute;as)";
 answers[51] = choices[51][0];
 units[51] = "120";
 comments[51] = "Id Pregunta: 7286. Examen TIC B 2009";


//  Id pregunta: 7305 Año de creación de pregunta: 2010-01-01
 questions[52]= "53)  El est&aacute;ndar AURORA de la ETSI para reconocimiento del habla distribuido utiliza un vector de caracter&iacute;sticas de:";
 choices[52]= new Array();
 choices[52][0] = "12 componentes";
 choices[52][1] = "26 componentes";
 choices[52][2] = "38 componentes";
 choices[52][3] = "39 componentes";
 answers[52] = choices[52][3];
 units[52] = "94";
 comments[52] = "Id Pregunta: 7305. ";


//  Id pregunta: 7352 Año de creación de pregunta: 2010-01-01
 questions[53]= "54)  En la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de asignaci&oacute;n de pesos?";
 choices[53]= new Array();
 choices[53][0] = "Delphi";
 choices[53][1] = "Promethee";
 choices[53][2] = "Electre";
 choices[53][3] = "Qualiflex";
 answers[53] = choices[53][0];
 units[53] = "34";
 comments[53] = "Id Pregunta: 7352. ";


//  Id pregunta: 7825 Año de creación de pregunta: 2010-01-01
 questions[54]= "55)   &iquest;Cu&aacute;l de las siguientes actividades no forma parte de la definici&oacute;n del objetivo de la adquisici&oacute;n seg&uacute;n EUROM&Eacute;TODO versi&oacute;n 1?";
 choices[54]= new Array();
 choices[54][0] = " Definir el dominio objetivo.";
 choices[54][1] = " Definir con mayor precisi&oacute;n el objetivo de la adquisici&oacute;n en t&eacute;rminos de requisitos de sistemas y servicios.";
 choices[54][2] = " Analizar los componentes de seguridad.";
 choices[54][3] = " Analizar los costes y beneficios.";
 answers[54] = choices[54][2];
 units[54] = "NULL";
 comments[54] = "Id Pregunta: 7825. Map 2005";


//  Id pregunta: 8250 Año de creación de pregunta: 2011-01-01
 questions[55]= "56)  En el desarrollo de software &aacute;gil (Agile) se usan los siguientes niveles de planificaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Planificaci&oacute;n de entregas, planificaci&oacute;n de iteraciones o sprints y planificaci&oacute;n diaria.";
 choices[55][1] = "Planificaci&oacute;n estrat&eacute;gica y planifiaci&oacute;n semanal.";
 choices[55][2] = "Planificaci&oacute;n de iteraciones o sprints, planificaci&oacute;n de hitos de cada iteraci&oacute;n o sprint y planificaci&oacute;n semanal.";
 choices[55][3] = "Planificaci&oacute;n estrat&eacute;gica, planificaci&oacute;n de recursos y planificaci&oacute;n de entregas.";
 answers[55] = choices[55][0];
 units[55] = "76";
 comments[55] = "Id Pregunta: 8250. Examen TIC A1 2010";


//  Id pregunta: 8292 Año de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes NO se encuentra entre los elementos de un Sistema de Gesti&oacute;n de Red?";
 choices[56]= new Array();
 choices[56][0] = "Gestor DHCP.";
 choices[56][1] = "MIB.";
 choices[56][2] = "Agente-SMAP.";
 choices[56][3] = "NMS.";
 answers[56] = choices[56][0];
 units[56] = "104";
 comments[56] = "Id Pregunta: 8292. Examen TIC A2 2010";


//  Id pregunta: 8312 Año de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes NO es una tecnolog&iacute;a xDSL? ";
 choices[57]= new Array();
 choices[57][0] = "VDSL.";
 choices[57][1] = "DDSL. ";
 choices[57][2] = "HDSL. ";
 choices[57][3] = "ADSL. ";
 answers[57] = choices[57][1];
 units[57] = "107";
 comments[57] = "Id Pregunta: 8312. Examen TIC A2 2010";


//  Id pregunta: 8329 Año de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l es el est&aacute;ndar de la Organizaci&oacute;n Internacional para la Normalizaci&oacute;n (ISO) para el archivo de documentos electr&oacute;nicos PDF/A?";
 choices[58]= new Array();
 choices[58][0] = "ISO 14000-1";
 choices[58][1] = "ISO 18001";
 choices[58][2] = "ISO 19005-1";
 choices[58][3] = "ISO 690";
 answers[58] = choices[58][2];
 units[58] = "93";
 comments[58] = "Id Pregunta: 8329. Examen TIC A2 2010";


//  Id pregunta: 8333 Año de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil de desarrollo?";
 choices[59]= new Array();
 choices[59][0] = "Programaci&oacute;n Extrema (XP).";
 choices[59][1] = "SCRUM.";
 choices[59][2] = "RDS.";
 choices[59][3] = "Feature-Driven Development (FDD).";
 answers[59] = choices[59][2];
 units[59] = "79";
 comments[59] = "Id Pregunta: 8333. Examen TIC A2 2010";


//  Id pregunta: 8415 Año de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes NO es una de las llamadas doce reglas de Codd? ";
 choices[60]= new Array();
 choices[60][0] = "Independencia f&iacute;sica de los datos. ";
 choices[60][1] = "Independencia de distribuci&oacute;n. ";
 choices[60][2] = "Independencia de actualizaci&oacute;n. ";
 choices[60][3] = "Independencia de integridad. ";
 answers[60] = choices[60][2];
 units[60] = "58";
 comments[60] = "Id Pregunta: 8415. Examen TIC A2 2010";


//  Id pregunta: 8465 Año de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes NO es una etiqueta HTML?:";
 choices[61]= new Array();
 choices[61][0] = "&lt;em&gt;&lt;/em&gt;";
 choices[61][1] = "&lt;meta&gt;";
 choices[61][2] = "&lt;tc&gt;&lt;/tc&gt;";
 choices[61][3] = "&lt;body&gt;&lt;/body&gt;";
 answers[61] = choices[61][2];
 units[61] = "69";
 comments[61] = "Id Pregunta: 8465. Analista Ayto. Madrid 2010";


//  Id pregunta: 8484 Año de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Sobre qu&eacute; protocolo se encapsulan los paquetes DHCP?";
 choices[62]= new Array();
 choices[62][0] = "HTTP.";
 choices[62][1] = "UDP.";
 choices[62][2] = "TCP.";
 choices[62][3] = "IP.";
 answers[62] = choices[62][1];
 units[62] = "100";
 comments[62] = "Id Pregunta: 8484. Examen TIC A2 2010 interna";


//  Id pregunta: 8514 Año de creación de pregunta: 2011-01-01
 questions[63]= "64)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA: ";
 choices[63]= new Array();
 choices[63][0] = "Lluirex - Valencia";
 choices[63][1] = "MAX - Madrid";
 choices[63][2] = "LinKat - Catalu&ntilde;a";
 choices[63][3] = "mEDUxa - Baleares";
 answers[63] = choices[63][3];
 units[63] = "61";
 comments[63] = "Id Pregunta: 8514. Examen TIC A2 2010";


//  Id pregunta: 8653 Año de creación de pregunta: 2011-01-01
 questions[64]= "65)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de las siguientes es una prueba perteneciente a las pruebas del sistema?";
 choices[64]= new Array();
 choices[64][0] = "Pruebas globales.";
 choices[64][1] = "Pruebas Integradas.";
 choices[64][2] = "Pruebas funcionales.";
 choices[64][3] = "Pruebas unitarias.";
 answers[64] = choices[64][2];
 units[64] = "86";
 comments[64] = "Id Pregunta: 8653. Examen TIC A2 2010 interna";


//  Id pregunta: 8736 Año de creación de pregunta: 2011-01-01
 questions[65]= "66)  La tarjeta DNIe tiene capacidad para la realizaci&oacute;n de firmas electr&oacute;nicas en:";
 choices[65]= new Array();
 choices[65][0] = "Modo raw y modo relleno PKCS#11";
 choices[65][1] = "&Uacute;nicamente en modo raw.";
 choices[65][2] = "&Uacute;nicamente en modo relleno PKCS#11";
 choices[65][3] = "Modo raw y en modo relleno PKCS#11.";
 answers[65] = choices[65][0];
 units[65] = "74";
 comments[65] = "Id Pregunta: 8736. Examen TIC A2 2010 interna";


//  Id pregunta: 8744 Año de creación de pregunta: 2011-01-01
 questions[66]= "67)  El impulso de la factura electr&oacute;nica, como obligatoria en el marco de la contrataci&oacute;n en el sector p&uacute;blico estatal se establece en la ley:";
 choices[66]= new Array();
 choices[66][0] = "34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[66][1] = "56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n";
 choices[66][2] = "59/2003, de 19 de diciembre, de Firma Electr&oacute;nica.";
 choices[66][3] = "11/2007. de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos";
 answers[66] = choices[66][1];
 units[66] = "70";
 comments[66] = "Id Pregunta: 8744. Examen TIC A2 2010 interna";


//  Id pregunta: 8807 Año de creación de pregunta: 2011-01-01
 questions[67]= "68)  No todos los componentes de un Diagrama de Flujo de Datos (DFD) se pueden conectar mediante flujos de datos &iquest;qu&eacute; conexi&oacute;n de las siguientes est&aacute; permitida?";
 choices[67]= new Array();
 choices[67][0] = "Proceso con proceso";
 choices[67][1] = "Almac&eacute;n con almac&eacute;n";
 choices[67][2] = "Entidad Externa con Almac&eacute;n";
 choices[67][3] = "Entidad Externa con Entidad Externa";
 answers[67] = choices[67][0];
 units[67] = "81";
 comments[67] = "Id Pregunta: 8807. Examen UPM A2 2011";


//  Id pregunta: 8809 Año de creación de pregunta: 2011-01-01
 questions[68]= "69)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[68]= new Array();
 choices[68][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[68][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[68][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[68][3] = "Todas las anteriores son falsas";
 answers[68] = choices[68][0];
 units[68] = "59, 115";
 comments[68] = "Id Pregunta: 8809. Examen UPM A2 2011";


//  Id pregunta: 8818 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Para cu&aacute;l de los siguientes supuestos no vale la calidad de software?";
 choices[69]= new Array();
 choices[69][0] = "Para dar confianza";
 choices[69][1] = "Para asegurar que el software funciona";
 choices[69][2] = "Para evaluar el proceso de desarrollo de software";
 choices[69][3] = "Para hacer los resultados del proceso m&aacute;s predecibles";
 answers[69] = choices[69][3];
 units[69] = "87, 92";
 comments[69] = "Id Pregunta: 8818. Examen UPM A2 2011";


//  Id pregunta: 8844 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)   En los sistemas de colaboraci&oacute;n s&iacute;ncronos";
 choices[70]= new Array();
 choices[70][0] = " No es posible utilizar la tecnolog&iacute;a multicast ";
 choices[70][1] = " Todos est&aacute;n basados en interfaces WWW ";
 choices[70][2] = "Se ampl&iacute;an las funcionalidades de los sistemas de videoconferencia cl&aacute;sicos.";
 choices[70][3] = " Su est&aacute;ndar viene definido por el W3C";
 answers[70] = choices[70][2];
 units[70] = "117";
 comments[70] = "Id Pregunta: 8844. Examen UC3M 2010";


//  Id pregunta: 8871 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[71]= new Array();
 choices[71][0] = "El nodo iniciador env&iacute;a tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 choices[71][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[71][2] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[71][3] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a todos los nodos adyacentes";
 answers[71] = choices[71][0];
 units[71] = "102";
 comments[71] = "Id Pregunta: 8871. Analista Ayto. Madrid 2010";


//  Id pregunta: 8894 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;A qui&eacute;n no est&aacute; dirigido ITIL?";
 choices[72]= new Array();
 choices[72][0] = "Proveedores de servicios de TI";
 choices[72][1] = "Usuarios de servicios de TI";
 choices[72][2] = "Directores y gestores de TI";
 choices[72][3] = "Chief Information Officers";
 answers[72] = choices[72][1];
 units[72] = "98";
 comments[72] = "Id Pregunta: 8894. ";


//  Id pregunta: 8918 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  Indicar qu&eacute; es cierto acerca de las interrupciones de Entrada/Salida:";
 choices[73]= new Array();
 choices[73][0] = "Cuando se produce una interrupci&oacute;n, el registro contador de programa de la CPU cambia su valor, apuntando a la direcci&oacute;n de comienzo de la rutina de tratamiento de la interrupci&oacute;n.";
 choices[73][1] = "Los controladores DMA, al acceder directamente a la memoria principal, no hacen uso de interrupciones.";
 choices[73][2] = "Las interrupciones son generadas por la CPU para informar a los dispositivos perif&eacute;ricos de diferentes situaciones excepcionales en la ejecuci&oacute;n de los programas.";
 choices[73][3] = "Ninguna de las anteriores es cierta";
 answers[73] = choices[73][0];
 units[73] = "52";
 comments[73] = "Id Pregunta: 8918. Operador Ayto. Madrid 2010";


//  Id pregunta: 9042 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[74]= new Array();
 choices[74][0] = "La &uacute;nica manera de implementar SOA es con un Enterprise Service Bus";
 choices[74][1] = "La &uacute;nica manera de implementar SOA es a trav&eacute;s de servicios Web";
 choices[74][2] = "SOA es un concepto que puede ser implementado de varias formas";
 choices[74][3] = "Todas son incorrectas";
 answers[74] = choices[74][2];
 units[74] = "51";
 comments[74] = "Id Pregunta: 9042. ";


//  Id pregunta: 9051 Año de creación de pregunta: 2014-01-01
 questions[75]= "76)  Con respecto a las siguientes siglas:";
 choices[75]= new Array();
 choices[75][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[75][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[75][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[75][3] = "Todas las anteriores";
 answers[75] = choices[75][3];
 units[75] = "108";
 comments[75] = "Id Pregunta: 9051. ";


//  Id pregunta: 9078 Año de creación de pregunta: 2013-01-01
 questions[76]= "77)  &quot;Ayuda a la entrada de datos&quot; es una pauta enmarcada en el principio:";
 choices[76]= new Array();
 choices[76][0] = "Perceptible. ";
 choices[76][1] = "Operable. ";
 choices[76][2] = "Comprensible.";
 choices[76][3] = "Robusto.";
 answers[76] = choices[76][2];
 units[76] = "39";
 comments[76] = "Id Pregunta: 9078. ";


//  Id pregunta: 9200 Año de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[77]= new Array();
 choices[77][0] = "No se pueden realizar copias de seguridad.";
 choices[77][1] = "La ley permite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[77][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[77][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[77] = choices[77][1];
 units[77] = "36";
 comments[77] = "Id Pregunta: 9200. ";


//  Id pregunta: 9204 Año de creación de pregunta: 2013-01-01
 questions[78]= "79)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[78]= new Array();
 choices[78][0] = "Mediante el elemento Assets.";
 choices[78][1] = "Mendiate el elemento Permission.";
 choices[78][2] = "Mendiante el elemento Constraints.";
 choices[78][3] = "Todas son falsas.";
 answers[78] = choices[78][0];
 units[78] = "37";
 comments[78] = "Id Pregunta: 9204. ";


//  Id pregunta: 9269 Año de creación de pregunta: 2013-01-01
 questions[79]= "80)  Los dispositivos f&iacute;sicos que se utilizan para conectar servidores a trav&eacute;s de una red t&iacute;picamente de fibra con sus dispositivos de almacenamiento, se llaman:";
 choices[79]= new Array();
 choices[79][0] = "LUN";
 choices[79][1] = "ESX";
 choices[79][2] = "HBA";
 choices[79][3] = "IDS";
 answers[79] = choices[79][2];
 units[79] = "48";
 comments[79] = "Id Pregunta: 9269. Examen TICA2-2011";


//  Id pregunta: 9274 Año de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido.";
 choices[80]= new Array();
 choices[80][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos";
 choices[80][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[80][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[80][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[80] = choices[80][3];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9274. Examen TIC-A1 2011";


//  Id pregunta: 9355 Año de creación de pregunta: 2013-01-01
 questions[81]= "82)  Indica cual de estas afirmaciones es cierta";
 choices[81]= new Array();
 choices[81][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[81][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[81][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[81][3] = "Todas las respuestas son correctas.";
 answers[81] = choices[81][1];
 units[81] = "103";
 comments[81] = "Id Pregunta: 9355. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9357 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; cable de fibra &oacute;ptica de los que se indican a continuaci&oacute;n tiene las caracter&iacute;sticas que lo identifican como un cable de fibra monomodo?";
 choices[82]= new Array();
 choices[82][0] = "Fibra 62.5/125 um";
 choices[82][1] = "Fibra 50/125 um";
 choices[82][2] = "Fibra 200/380 um ";
 choices[82][3] = "Fibra 10/125 um";
 answers[82] = choices[82][3];
 units[82] = "99";
 comments[82] = "Id Pregunta: 9357. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Promoci&oacute;n interna 2011.";


//  Id pregunta: 9364 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  Una red Ethernet que sigue la especificaci&oacute;n 10GBASE-ER:";
 choices[83]= new Array();
 choices[83][0] = "Funciona sobre par de cobre.";
 choices[83][1] = "Funciona con fibra &oacute;ptica que opera en primera ventana.";
 choices[83][2] = "Funciona con fibra &oacute;ptica que opera en tercera ventana.";
 choices[83][3] = "Utiliza fibra &oacute;ptica multimodo.";
 answers[83] = choices[83][2];
 units[83] = "101";
 comments[83] = "Id Pregunta: 9364. pag.14 astic 2011";


//  Id pregunta: 9404 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  Indique los factores que m&aacute;s intervienen en la calidad de la voz sobre IP";
 choices[84]= new Array();
 choices[84][0] = "La latencia y la variaci&oacute;n de latencia (Jitter) de la red de transmisi&oacute;n de paquetes.";
 choices[84][1] = "La calidad de los procesadores de se&ntilde;al (DSP) asociados al codec G.711.";
 choices[84][2] = "La utilizaci&oacute;n de SIP o H.323.";
 choices[84][3] = "Ninguna de las anteriores";
 answers[84] = choices[84][0];
 units[84] = "109";
 comments[84] = "Id Pregunta: 9404. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9424 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Seg&uacute;n la ley 9/2014, para poder explotar redes y prestar servicios de comunicaciones electr&oacute;nicas a terceros";
 choices[85]= new Array();
 choices[85][0] = "Es imprescindible que la persona f&iacute;sica o jur&iacute;dica sea espa&ntilde;ola.";
 choices[85][1] = "La persona f&iacute;sica o jur&iacute;dica debe ser nacional de un Estado miembro de la Uni&oacute;n Europea.";
 choices[85][2] = "Puede ser de cualquier nacionalidad";
 choices[85][3] = "Puede ser de cualquier nacionalidad cuando as&iacute; est&eacute; previsto en acuerdos internacionales.";
 answers[85] = choices[85][3];
 units[85] = "110";
 comments[85] = "Id Pregunta: 9424. ";


//  Id pregunta: 9447 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objetos?:";
 choices[86]= new Array();
 choices[86][0] = "UMTS.";
 choices[86][1] = "JINI.";
 choices[86][2] = "VORBIS.";
 choices[86][3] = "CLOS.";
 answers[86] = choices[86][1];
 units[86] = "82";
 comments[86] = "Id Pregunta: 9447. Examen AGE TIC A1 2011";


//  Id pregunta: 9490 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  Seg&uacute;n M&eacute;tricav3, &iquest;qu&eacute; verificaciones no se llevan a cabo durante la validaci&oacute;n de requisitos?";
 choices[87]= new Array();
 choices[87][0] = "Verificaciones de integridad";
 choices[87][1] = "Verificaciones de consistencia";
 choices[87][2] = "Verificaciones de completitud";
 choices[87][3] = "Verificaciones de realismo";
 answers[87] = choices[87][0];
 units[87] = "78";
 comments[87] = "Id Pregunta: 9490. ";


//  Id pregunta: 9541 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[88]= new Array();
 choices[88][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[88][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[88][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[88][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[88] = choices[88][3];
 units[88] = "30";
 comments[88] = "Id Pregunta: 9541. Examen TIC A1 2011	";


//  Id pregunta: 9597 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  En el desarrollo de aplicaciones en .NET Framework, &iquest;cu&aacute;l de los siguientes no es un componente del marco .NET Framework?";
 choices[89]= new Array();
 choices[89][0] = "El entorno de ejecuci&oacute;n de lenguaje com&uacute;n (CLR) ";
 choices[89][1] = "La biblioteca de clases base (.NET Framework Base Classes) ";
 choices[89][2] = "El lenguaje de definici&oacute;n de la interfaz (IDL)";
 choices[89][3] = "El motor de generaci&oacute;n de la interfaz de usuario ";
 answers[89] = choices[89][2];
 units[89] = "59";
 comments[89] = "Id Pregunta: 9597. Xunta A2 2011";


//  Id pregunta: 9607 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;C&uacute;al de las siguientes caracter&iacute;sticas es propia de los sistemas de base de datos NoSQL?";
 choices[90]= new Array();
 choices[90][0] = "Soportan operaciones JOIN";
 choices[90][1] = " Garantizan completamente ACID";
 choices[90][2] = "Requieren estructuras fijas, como tablas";
 choices[90][3] = "Escalan bien horizontalmente";
 answers[90] = choices[90][3];
 units[90] = "58";
 comments[90] = "Id Pregunta: 9607. ";


//  Id pregunta: 9645 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Entre los &oacute;rganos consultivos, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[91]= new Array();
 choices[91][0] = "Mesas de contrataci&oacute;n";
 choices[91][1] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[91][2] = "&Oacute;rganos consultivos en las CCAA";
 choices[91][3] = "Todos los anteriores";
 answers[91] = choices[91][0];
 units[91] = "41";
 comments[91] = "Id Pregunta: 9645. Art. 324, Art. 325 RD Legislativo 3/2011";


//  Id pregunta: 9672 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  En un cl&uacute;ster:";
 choices[92]= new Array();
 choices[92][0] = "Puede elegirse el porcentaje de procesamiento que cada nodo dedica al cl&uacute;ster.";
 choices[92][1] = "El algoritmo que distribuye el trabajo entre los nodos se conoce como 'Gang Scheduling'.";
 choices[92][2] = "El middleware m&aacute;s utilizado es Xware.";
 choices[92][3] = "Los nodos comparten una memoria central.";
 answers[92] = choices[92][1];
 units[92] = "45";
 comments[92] = "Id Pregunta: 9672. ";


//  Id pregunta: 9848 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Indique cu&aacute;l de las siguientes afirmaciones relacionadas con IPsec es FALSA:";
 choices[93]= new Array();
 choices[93][0] = "IPv6 incluye expl&iacute;citamente la posibilidad de utilizarlo.";
 choices[93][1] = "Puede operar en modo t&uacute;nel o en modo transporte.";
 choices[93][2] = "El protocolo AH proporciona confidencialidad.";
 choices[93][3] = "El protocolo ESP proporciona autenticaci&oacute;n.";
 answers[93] = choices[93][2];
 units[93] = "111";
 comments[93] = "Id Pregunta: 9848. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9910 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Se&ntilde;ale cu&aacute;l de las siguientes es una t&eacute;cnica de desarrollo seg&uacute;n M&eacute;trica v3:";
 choices[94]= new Array();
 choices[94][0] = "T&eacute;cnicas Matriciales.";
 choices[94][1] = "M&eacute;todo Albrecht.";
 choices[94][2] = "An&aacute;lisis de Impacto.";
 choices[94][3] = "Caminos de Acceso.";
 answers[94] = choices[94][0];
 units[94] = "86";
 comments[94] = "Id Pregunta: 9910. TIC A2, Examen 2013";


//  Id pregunta: 10055 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  De los 32 bits que tiene una cabecera MPLS, &iquest;cu&aacute;ntos est&aacute;n reservados para el valor de la etiqueta MPLS seg&uacute;n la RFC 3032?";
 choices[95]= new Array();
 choices[95][0] = "32 ";
 choices[95][1] = "24";
 choices[95][2] = "20 ";
 choices[95][3] = "16";
 answers[95] = choices[95][2];
 units[95] = "100";
 comments[95] = "Id Pregunta: 10055. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10226 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Teniendo un String construido as&iacute;:, cual de las siguientes sentencias permite modificar el:";
 choices[96]= new Array();
 choices[96][0] = "s.append(&ldquo;adios&rdquo;);";
 choices[96][1] = "s.trim(&ldquo;&rdquo;);";
 choices[96][2] = "s.substring(3);";
 choices[96][3] = "Ninguna de las de arriba";
 answers[96] = choices[96][3];
 units[96] = "60";
 comments[96] = "Id Pregunta: 10226. ";


//  Id pregunta: 10237 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  La tecnolog&iacute;a que nos permite trabajar en Java con servicios de directorio como LDAP, Active Directory, se conoce como:";
 choices[97]= new Array();
 choices[97][0] = "Java Messaging Services (JMS)";
 choices[97][1] = "Java Naming and Directory Interface (JNDI)";
 choices[97][2] = "Remote Method Invocation (RMI)";
 choices[97][3] = "JavaBeans Activation Framework (JMF)";
 answers[97] = choices[97][1];
 units[97] = "116";
 comments[97] = "Id Pregunta: 10237. ";


//  Id pregunta: 10260 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Si se deniega al interesado el ejercicio de su derecho de cancelaci&oacute;n de datos de car&aacute;cter personal, &eacute;ste puede:";
 choices[98]= new Array();
 choices[98][0] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso de alzada";
 choices[98][1] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso contencioso-administrativo";
 choices[98][2] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos cuyos actos no son recurribles ni en v&iacute;a administrativa ni judicial";
 choices[98][3] = "Todas son incorrectas";
 answers[98] = choices[98][1];
 units[98] = "29";
 comments[98] = "Id Pregunta: 10260. Art&iacute;culo 18.2 y 18.4 de la Ley 15/1999";


//  Id pregunta: 10550 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[99]= new Array();
 choices[99][0] = "Robo de los datos desde el cliente ";
 choices[99][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red ";
 choices[99][2] = "Un troyano en el navegador";
 choices[99][3] = "Escuchas ilegales en la red";
 answers[99] = choices[99][2];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10550. ";


