/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 112 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  De  acuerdo a la Decisi&oacute;n  87/95/CEE del Consejo de las CC.EE., &iquest;en qu&eacute; circunstancias excepcionales el sector p&uacute;blico puede adquirir bienes y servicios relativos al campo de las TIC utilizando especificaciones no normalizadas?:";
 choices[0]= new Array();
 choices[0][0] = "Continuidad de funcionamiento";
 choices[0][1] = "Innovaci&oacute;n";
 choices[0][2] = "Coste excesivo";
 choices[0][3] = "Todas las anteriores";
 answers[0] = choices[0][3];
 units[0] = "40";
 comments[0] = "Id Pregunta: 112. ";


//  Id pregunta: 117 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  Dentro de la estructura administrativa de normalizaci&oacute;n comunitaria, el organismo responsable para las telecomunicaciones es:";
 choices[1]= new Array();
 choices[1][0] = "CEN";
 choices[1][1] = "CENELEC";
 choices[1][2] = "ETSI";
 choices[1][3] = "ECMA";
 answers[1] = choices[1][2];
 units[1] = "42";
 comments[1] = "Id Pregunta: 117. ";


//  Id pregunta: 243 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En un sistema de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "En el nivel operacional se toman decisiones a plazo relativamente corto";
 choices[2][1] = "En el nivel estrat&eacute;gico se toman decisiones a plazo relativamente corto";
 choices[2][2] = "En el nivel operacional se recogen datos del sistema real";
 choices[2][3] = "En el nivel t&aacute;ctico se toman decisiones a largo plazo";
 answers[2] = choices[2][2];
 units[2] = "21";
 comments[2] = "Id Pregunta: 243. ";


//  Id pregunta: 300 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La duraci&oacute;n total de un proyecto es:";
 choices[3]= new Array();
 choices[3][0] = "La del camino cr&iacute;tico del gr&aacute;fico de PERT.";
 choices[3][1] = "La del camino del gr&aacute;fico de PERT que m&aacute;s tareas realiza.";
 choices[3][2] = "La suma de la duraci&oacute;n de todas las tareas de un proyecto, como se refleja en el gr&aacute;fico de PERT.";
 choices[3][3] = "La de la tarea cr&iacute;tica, como se refleja en el gr&aacute;fico de PERT.";
 answers[3] = choices[3][0];
 units[3] = "27";
 comments[3] = "Id Pregunta: 300. ";


//  Id pregunta: 334 Año de creación de pregunta: 2004-01-01
 questions[4]= "5)  NO es un modelo para la toma grupal de decisiones:";
 choices[4]= new Array();
 choices[4][0] = "Tormenta de ideas";
 choices[4][1] = "An&aacute;lisis de redes";
 choices[4][2] = "T&eacute;cnica nominal de grupo";
 choices[4][3] = "T&eacute;cnica Delphi";
 answers[4] = choices[4][1];
 units[4] = "23";
 comments[4] = "Id Pregunta: 334. ";


//  Id pregunta: 391 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Para corregir las desviaciones de tiempo de un proyecto se utiliza:";
 choices[5]= new Array();
 choices[5][0] = "El gr&aacute;fico de Gantt";
 choices[5][1] = "El diagrama de PERT";
 choices[5][2] = "Cualquiera de los 2";
 choices[5][3] = "Ninguno de los 2";
 answers[5] = choices[5][2];
 units[5] = "28";
 comments[5] = "Id Pregunta: 391. ";


//  Id pregunta: 430 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n Elton Mayo, el v&iacute;nculo que permite unificar los esfuerzos de los trabajadores en la consecuci&oacute;n de un fin com&uacute;n es:";
 choices[6]= new Array();
 choices[6][0] = "La autoridad";
 choices[6][1] = "La motivaci&oacute;n";
 choices[6][2] = "El deseo de autorrealizaci&oacute;n";
 choices[6][3] = "La comunicaci&oacute;n";
 answers[6] = choices[6][3];
 units[6] = "22";
 comments[6] = "Id Pregunta: 430. ";


//  Id pregunta: 517 Año de creación de pregunta: 2003-01-01
 questions[7]= "8)  SSD-AAPP es una herramienta para";
 choices[7]= new Array();
 choices[7][0] = "Mejorar el desarrollo de los sistemas de informaci&oacute;n";
 choices[7][1] = "Reducir el gasto de adquisici&oacute;n de equipos inform&aacute;ticos";
 choices[7][2] = "Permitir la implantaci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n y la Comunicaci&oacute;n en la Administraci&oacute;n";
 choices[7][3] = "Permitir al comprador evaluar las ofertas para la adquisici&oacute;n de bienes y servicios inform&aacute;ticos";
 answers[7] = choices[7][3];
 units[7] = "34";
 comments[7] = "Id Pregunta: 517. Modificado enunciado (antes SSD-CIABSI) por JCED Preparatic XVII";


//  Id pregunta: 537 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  El desarrollo de una Pol&iacute;tica de Seguridad de los Sistemas de Informaci&oacute;n es responsabilidad de:";
 choices[8]= new Array();
 choices[8][0] = "Departamento de Inform&aacute;tica";
 choices[8][1] = "Comit&eacute; de Seguridad";
 choices[8][2] = "Administrador de seguridad";
 choices[8][3] = "Alta Direcci&oacute;n";
 answers[8] = choices[8][3];
 units[8] = "26";
 comments[8] = "Id Pregunta: 537. ";


//  Id pregunta: 633 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  Cu&aacute;l de las siguientes caracter&iacute;sticas no se considera fundamental que garantice un sistema DRM (Digital Rights Management):";
 choices[9]= new Array();
 choices[9][0] = "Limitar el n&uacute;mero de lecturas de un archivo.";
 choices[9][1] = "Proteger el contenido para evitar la lectura por terceros.";
 choices[9][2] = "Evitar que el archivo sea modificado.";
 choices[9][3] = "Garantizar que s&oacute;lo el destinatario sea capaz de leer el archivo.";
 answers[9] = choices[9][0];
 units[9] = "37";
 comments[9] = "Id Pregunta: 633. ";


//  Id pregunta: 716 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  En el lenguaje Java, la misi&oacute;n del recolector de basura (barbage collector) es:";
 choices[10]= new Array();
 choices[10][0] = "Limpiar o eliminar los objetos no usados o referenciados";
 choices[10][1] = "En los que en otros entornos de programcaci&oacute;n se llama depurador o debugger";
 choices[10][2] = "Es parte del estandar JDBC para acceder a tablas de bases de datos";
 choices[10][3] = "Java no dispone de tal mecanismo &quot;garbage collector&quot;";
 answers[10] = choices[10][0];
 units[10] = "60";
 comments[10] = "Id Pregunta: 716. Examen TIC MAP B 2004";


//  Id pregunta: 926 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es la l&oacute;gica borrosa o difusa -fuzzy logic-?:";
 choices[11]= new Array();
 choices[11][0] = "Es una rama de la l&oacute;gica binaria que invierte los conceptos para que el ordenador realice operaciones m&aacute;s eficientemente en l&oacute;gica negativa aunque para el ser humano se pierda comprensi&oacute;n";
 choices[11][1] = "Es una rama de la ingenier&iacute;a que trata la l&oacute;gica booleana mediante transformaciones puntuales de cambios de base para introducir variables auxiliares a conveniencia";
 choices[11][2] = "Es una rama de la ingenier&iacute;a que simplifica ecuaciones muy complejas para resolverlas mediante aproximaciones de los valores de la soluci&oacute;n seg&uacute;n grados de pertenencia a conjuntos m&aacute;s o menos subjetivos y probabil&iacute;sticos";
 choices[11][3] = "Nada de lo anterior es cierto";
 answers[11] = choices[11][2];
 units[11] = "63";
 comments[11] = "Id Pregunta: 926. ";


//  Id pregunta: 1173 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Identifique las dos versiones hist&oacute;ricas generadas de Unix al final de los a&ntilde;os 80, motivadas por la coexistencia de dos desarrollos en paralelo:";
 choices[12]= new Array();
 choices[12][0] = "System V y BSD";
 choices[12][1] = "System IV y System V";
 choices[12][2] = "System V y Posix";
 choices[12][3] = "Posix y Motif";
 answers[12] = choices[12][0];
 units[12] = "53";
 comments[12] = "Id Pregunta: 1173. ";


//  Id pregunta: 1218 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  La especificaci&oacute;n XSLT define:";
 choices[13]= new Array();
 choices[13][0] = "El formato de visualizaci&oacute;n de los documentos XML";
 choices[13][1] = "El formato de ordenaci&oacute;n de etiquetas o tags de documentos XML";
 choices[13][2] = "La definici&oacute;n de datos en los documentos XML";
 choices[13][3] = "La estructura de enlace en los documentos XML";
 answers[13] = choices[13][0];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1218. ";


//  Id pregunta: 1494 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; se entiende por audioconferencia?:";
 choices[14]= new Array();
 choices[14][0] = "Servicio que permite a m&aacute;s de dos usuarios participar simult&aacute;neamente en una &uacute;nica conversaci&oacute;n";
 choices[14][1] = "Servicio que permite a un usuario telef&oacute;nico depositar mensajes de voz en un audiobuz&oacute;n";
 choices[14][2] = "Servicio que suministra una informaci&oacute;n grabada de tipo gen&eacute;rico";
 choices[14][3] = "Servicio de telefon&iacute;a m&oacute;vil en grupo cerrado de usuarios";
 answers[14] = choices[14][0];
 units[14] = "117";
 comments[14] = "Id Pregunta: 1494. ";


//  Id pregunta: 1651 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no son herramientas o plataformas de e-learning ?";
 choices[15]= new Array();
 choices[15][0] = "aTutor";
 choices[15][1] = "WebCT";
 choices[15][2] = "eSchool";
 choices[15][3] = "Blackboard";
 answers[15] = choices[15][2];
 units[15] = "66";
 comments[15] = "Id Pregunta: 1651. ";


//  Id pregunta: 1839 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest;A qu&eacute; hacen referencia las siglas NRC en un sistema de pasarela de pagos?";
 choices[16]= new Array();
 choices[16][0] = "N&uacute;mero de Registro de Control";
 choices[16][1] = "N&uacute;mero de Referencia de Control";
 choices[16][2] = "N&uacute;mero de Referencia Completo";
 choices[16][3] = "N&uacute;mero de Registro Completo";
 answers[16] = choices[16][2];
 units[16] = "70";
 comments[16] = "Id Pregunta: 1839. ";


//  Id pregunta: 1908 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto de la Taxonom&iacute;a de Flynn:";
 choices[17]= new Array();
 choices[17][0] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del tipo de acceso a memoria.";
 choices[17][1] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la tipolog&iacute;a de flujos de datos e instrucciones.";
 choices[17][2] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la capacidad de procesamiento.";
 choices[17][3] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del acoplamiento entre los distintos procesadores.";
 answers[17] = choices[17][1];
 units[17] = "45";
 comments[17] = "Id Pregunta: 1908. ";


//  Id pregunta: 2074 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  Son comunes a todas las metodolog&iacute;as de desarrollo de SW";
 choices[18]= new Array();
 choices[18][0] = "Uso de t&eacute;cnicas Gr&aacute;ficas";
 choices[18][1] = "Documentaci&oacute;n";
 choices[18][2] = "Diccionario de datos";
 choices[18][3] = "todas las anteriores";
 answers[18] = choices[18][3];
 units[18] = "79";
 comments[18] = "Id Pregunta: 2074. ";


//  Id pregunta: 2239 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Cada ocurrencia de un tipo de entidad o interrelaci&oacute;n toma valores a partir de la observaci&oacute;n del mundo real Al conjunto de posibles valores que puede tomar una cierta caracter&iacute;stica se llama:";
 choices[19]= new Array();
 choices[19][0] = "Atributo";
 choices[19][1] = "Dominio";
 choices[19][2] = "Relaci&oacute;n";
 choices[19][3] = "Restricci&oacute;n";
 answers[19] = choices[19][1];
 units[19] = "80";
 comments[19] = "Id Pregunta: 2239. ";


//  Id pregunta: 2287 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  El modelo EFQM, desde el punto de vista de su &aacute;mbito, podr&iacute;a calificarse como:";
 choices[20]= new Array();
 choices[20][0] = "Certificaci&oacute;n de producto";
 choices[20][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[20][2] = "Total Quality Management";
 choices[20][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[20] = choices[20][2];
 units[20] = "92";
 comments[20] = "Id Pregunta: 2287. ";


//  Id pregunta: 2370 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  Es cierto decir que la &quot;ingenier&iacute;a inversa&quot;:";
 choices[21]= new Array();
 choices[21][0] = "Crea un sistema distinto al original con el mismo nivel de abstracci&oacute;n.";
 choices[21][1] = "No se usa demasiado.";
 choices[21][2] = "Crea una representaci&oacute;n del sistema distinta a la original o con un grado de abstracci&oacute;n normalmente superior.";
 choices[21][3] = "El grado de abstracci&oacute;n que se obtiene es menor, pero eso hace que el proceso sea m&aacute;s din&aacute;mico.";
 answers[21] = choices[21][2];
 units[21] = "91";
 comments[21] = "Id Pregunta: 2370. ";


//  Id pregunta: 2432 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[22]= new Array();
 choices[22][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[22][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[22][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[22][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[22] = choices[22][1];
 units[22] = "82,84";
 comments[22] = "Id Pregunta: 2432. ";


//  Id pregunta: 2473 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  No es una de las formas de aplicar COCOMO:";
 choices[23]= new Array();
 choices[23][0] = "B&aacute;sico";
 choices[23][1] = "Avanzado";
 choices[23][2] = "Intermedio";
 choices[23][3] = "Asistido";
 answers[23] = choices[23][3];
 units[23] = "89";
 comments[23] = "Id Pregunta: 2473. ";


//  Id pregunta: 2623 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l no pertenece al an&aacute;lisis DAFO?";
 choices[24]= new Array();
 choices[24][0] = "debilidades";
 choices[24][1] = "Amenazas";
 choices[24][2] = "Flexibilidad";
 choices[24][3] = "Oportunidades";
 answers[24] = choices[24][2];
 units[24] = "77";
 comments[24] = "Id Pregunta: 2623. ";


//  Id pregunta: 2808 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  La Precisi&oacute;n es un criterio relacionado con:";
 choices[25]= new Array();
 choices[25][0] = "La Usabilidad.";
 choices[25][1] = "La Correcci&oacute;n.";
 choices[25][2] = "La Eficiencia.";
 choices[25][3] = "La Fiabilidad.";
 answers[25] = choices[25][3];
 units[25] = "88";
 comments[25] = "Id Pregunta: 2808. ";


//  Id pregunta: 2848 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  El nivel que determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras es el";
 choices[26]= new Array();
 choices[26][0] = "fonol&oacute;gico";
 choices[26][1] = "pros&oacute;dico";
 choices[26][2] = "fon&eacute;tico";
 choices[26][3] = "ninguno de los anteriores";
 answers[26] = choices[26][1];
 units[26] = "94";
 comments[26] = "Id Pregunta: 2848. ";


//  Id pregunta: 2890 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  La implantaci&oacute;n de SARA aporta:";
 choices[27]= new Array();
 choices[27][0] = "Servicios b&aacute;sicos horizontales";
 choices[27][1] = "Servicios sectoriales de los departamentos ministeriales";
 choices[27][2] = "Servicios horizontales de car&aacute;cter  avanzado";
 choices[27][3] = "Todas las respuestas anteriores son correctas";
 answers[27] = choices[27][3];
 units[27] = "113,44";
 comments[27] = "Id Pregunta: 2890. ";


//  Id pregunta: 2893 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  La cooperaci&oacute;n de los Estados miembros para la utilizaci&oacute;n de la tecnolog&iacute;a de la informaci&oacute;n en todas las instituciones de la UE se realiza a trav&eacute;s del programa:";
 choices[28]= new Array();
 choices[28][0] = "TESTA II ";
 choices[28][1] = "IDABC";
 choices[28][2] = "INDALO";
 choices[28][3] = "HITA";
 answers[28] = choices[28][1];
 units[28] = "103";
 comments[28] = "Id Pregunta: 2893. ";


//  Id pregunta: 2914 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  En una red MPLS, &iquest; qu&eacute; funci&oacute;n realiza el LER?";
 choices[29]= new Array();
 choices[29][0] = "Es el elemento que conmuta etiquetas";
 choices[29][1] = "Es el nombre de un circuito virtual MPLS";
 choices[29][2] = "Es el elemento que inicia o termina el t&uacute;nel";
 choices[29][3] = "Es el elemento que conmuta el tr&aacute;fico en funci&oacute;n de las etiquetas";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 2914. ITSEC";


//  Id pregunta: 2929 Año de creación de pregunta: 2004-01-01
 questions[30]= "31)  La tecnolog&iacute;a DCOM toma las siglas de:";
 choices[30]= new Array();
 choices[30][0] = "Distributed Communication Model";
 choices[30][1] = "Development of Concurrent Multisystems";
 choices[30][2] = "Dynamic Component-Oriented Measure";
 choices[30][3] = "Distributed Component Object Model";
 answers[30] = choices[30][3];
 units[30] = "114";
 comments[30] = "Id Pregunta: 2929. ";


//  Id pregunta: 3552 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  En sistemas de informaci&oacute;n y comunicaciones, INAP es acr&oacute;nimo de:";
 choices[31]= new Array();
 choices[31][0] = "Integration Network Application Protocol";
 choices[31][1] = "Intelligent Network Application Protocol";
 choices[31][2] = "Inverse Naming Address Protocol";
 choices[31][3] = "Intelligent Network Application Part";
 answers[31] = choices[31][3];
 units[31] = "102";
 comments[31] = "Id Pregunta: 3552. ";


//  Id pregunta: 3775 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Por B.E.R. entendemos:";
 choices[32]= new Array();
 choices[32][0] = "Basic Encoding Rules, reglas de codificaci&oacute;n b&aacute;sicas usadas en la definici&oacute;n de datos mediante ASN.1";
 choices[32][1] = "Binary Error Rate, tasa de error binaria que define la adecuaci&oacute;n de los canales de transmisi&oacute;n";
 choices[32][2] = "Las 2 respuestas anteriores son correctas";
 choices[32][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[32] = choices[32][2];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3775. ";


//  Id pregunta: 3895 Año de creación de pregunta: 2003-01-01
 questions[33]= "34)  En un sistema de cableado estructurado IEEE 802.3 en UTP, la distancia m&aacute;xima horizontal ser&aacute; de 90 metros desde la terminaci&oacute;n mec&aacute;nica del armario repartidor de planta hasta la roseta, permiti&eacute;ndose desde &eacute;sta, hasta la estaci&oacute;n de trabajo o tel&eacute;fono";
 choices[33]= new Array();
 choices[33][0] = "1,5 metros m&aacute;s.";
 choices[33][1] = "3 metros m&aacute;s.";
 choices[33][2] = "4,5 metros m&aacute;s.";
 choices[33][3] = "Una distancia tal que la longitud total de este &uacute;ltimo latiguillo y la del armario repartidor, no supere los 10 metros.";
 answers[33] = choices[33][1];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3895. Junta Andaluc&iacute;a";


//  Id pregunta: 4074 Año de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Qu&eacute; tipo de software es m&aacute;s costoso cuando lo compramos?";
 choices[34]= new Array();
 choices[34][0] = "El libre";
 choices[34][1] = "El comercial";
 choices[34][2] = "Los dos anteriores son igual de  costosos";
 choices[34][3] = "No hay una respuesta en terminos generales y depende casi siempre del software concreto del que hablemos";
 answers[34] = choices[34][1];
 units[34] = "61";
 comments[34] = "Id Pregunta: 4074. ";


//  Id pregunta: 4146 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  Una aplicaci&oacute;n que se localiza en un servidor con el fin de ofrecer seguridad a la red interna, por lo que ha sido especialmente configurado para la recepci&oacute;n de ataques es un...";
 choices[35]= new Array();
 choices[35][0] = "cortafuegos";
 choices[35][1] = "sonda";
 choices[35][2] = "honeypot";
 choices[35][3] = "basti&oacute;n";
 answers[35] = choices[35][3];
 units[35] = "111";
 comments[35] = "Id Pregunta: 4146. ";


//  Id pregunta: 4320 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes elementos se pueden anexar a archivos como una protecci&oacute;n contra los virus?";
 choices[36]= new Array();
 choices[36][0] = "Bloqueadores de conducta.";
 choices[36][1] = "Verificadores de redundancia c&iacute;clica (CRC)";
 choices[36][2] = "Inmunizadores.";
 choices[36][3] = "Monitores activos.";
 answers[36] = choices[36][2];
 units[36] = "";
 comments[36] = "Id Pregunta: 4320. ";


//  Id pregunta: 4391 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  En la elaboraci&oacute;n e los DFD de un Sistema para la Gesti&oacute;n de Concursos de Provisi&oacute;n de Puestos de un Ministerio, &iquest;c&oacute;mo representar&iacute;a la publicaci&oacute;n en el BOE de las bases de concurso?";
 choices[37]= new Array();
 choices[37][0] = "Mediante un flujo de datos desde el proceso &ldquo;Generaci&oacute;n de bases&rdquo; al proceso &ldquo;Publicaci&oacute;n en el BOE&rdquo;.";
 choices[37][1] = "Mediante un flujo de datos desde el almac&eacute;n &ldquo;Bases de Concursos&rdquo; al proceso &ldquo;Publicaci&oacute;n en el BOE&rdquo;.";
 choices[37][2] = "Mediante un flujo de datos desde el almac&eacute;n &ldquo;Bases de Concursos&rdquo; a la entidad externa &ldquo;BOE&rdquo;.";
 choices[37][3] = "Mediante un flujo de datos desde el proceso &ldquo;Generaci&oacute;n de bases&rdquo; a la entidad externa &ldquo;BOE&rdquo;.";
 answers[37] = choices[37][3];
 units[37] = "81";
 comments[37] = "Id Pregunta: 4391. ";


//  Id pregunta: 4463 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  Respecto a los servicios Web, podemos afirmar que:";
 choices[38]= new Array();
 choices[38][0] = "WDSL define los criterios para los registros basados en Ia red.";
 choices[38][1] = "XML busca Ia definici&oacute;n y descripci&oacute;n de los servicios Web.";
 choices[38][2] = "SOAP proporciona una manera estandar de transportar mensajes para el use de servicios Web";
 choices[38][3] = "UUID define un protocolo de comunicaci&oacute;n f&iacute;sica entre ordenadores.";
 answers[38] = choices[38][2];
 units[38] = "51";
 comments[38] = "Id Pregunta: 4463. ";


//  Id pregunta: 4490 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  El sistema UMTS tiene asignadas en Europa bandas de trabajo en torno a Ia frecuencia de:";
 choices[39]= new Array();
 choices[39][0] = "900 MHz.";
 choices[39][1] = "2 GHz.";
 choices[39][2] = "11 GHz.";
 choices[39][3] = "5 GHz";
 answers[39] = choices[39][1];
 units[39] = "108";
 comments[39] = "Id Pregunta: 4490. ";


//  Id pregunta: 4493 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  La conexi&oacute;n de una red privada a Internet por medio de una pasarela (o &quot;gateway&quot;) NAT permite:";
 choices[40]= new Array();
 choices[40][0] = "Asignar din&aacute;micamente direcciones IP publicas a un ordenador";
 choices[40][1] = "Actuar como cortafuegos filtrando los paquetes de datos recibidos.";
 choices[40][2] = "Asignar din&aacute;micamente direcciones IP privadas dentro de una red privada.";
 choices[40][3] = "Que varios ordenadores accedan a Internet al mismo tiempo por medio de una &uacute;nica direcci&oacute;n IP publica.";
 answers[40] = choices[40][3];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4493. ";


//  Id pregunta: 4533 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  En java, &iquest;como se hace referencia al objeto actual sobre el que ha sido Ilamado el m&eacute;todo que se esta ejecutando?";
 choices[41]= new Array();
 choices[41][0] = "Con Ia referencia this.";
 choices[41][1] = "Con la referencia null.";
 choices[41][2] = "No es posible.";
 choices[41][3] = "Invocando el m&eacute;todo get.";
 answers[41] = choices[41][0];
 units[41] = "60";
 comments[41] = "Id Pregunta: 4533. ";


//  Id pregunta: 4613 Año de creación de pregunta: 2009-01-01
 questions[42]= "43)  Un fichero que contiene el DNI y % de discapacidad con motivo del cumplimiento de deberes p&uacute;blicos, pero no el tipo de discapacidad del que se trata, debe tener implantadas medidas de seguridad de nivel";
 choices[42]= new Array();
 choices[42][0] = "b&aacute;sico";
 choices[42][1] = "medio";
 choices[42][2] = "alto";
 choices[42][3] = "muy alto";
 answers[42] = choices[42][0];
 units[42] = "29";
 comments[42] = "Id Pregunta: 4613. ";


//  Id pregunta: 4659 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es un servicio ofrecido por el DNI electronico?";
 choices[43]= new Array();
 choices[43][0] = "Firma electronica ";
 choices[43][1] = "Identificacion en medios telematicos";
 choices[43][2] = "Identificacion fisica";
 choices[43][3] = "Tarjeta sanitaria electronica";
 answers[43] = choices[43][3];
 units[43] = "30";
 comments[43] = "Id Pregunta: 4659. ";


//  Id pregunta: 4727 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Los resultados del modelo EFQM se eval&uacute;an:";
 choices[44]= new Array();
 choices[44][0] = "Respecto a los clientes";
 choices[44][1] = "Respecto a la sociedad";
 choices[44][2] = "Respecto al personal de la empresa";
 choices[44][3] = "Todas las respuestas son correctas";
 answers[44] = choices[44][3];
 units[44] = "92";
 comments[44] = "Id Pregunta: 4727. Examen 2006 JCYL";


//  Id pregunta: 4759 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  En ITIL:";
 choices[45]= new Array();
 choices[45][0] = "El Soporte al Servicio se preocupa de todos los aspectos que garanticen la continuidad, disponibilidad y calidad del servicio prestado al usuario";
 choices[45][1] = "La Provisi&oacute;n del Servicio se ocupa de los servicios ofrecidos en s&iacute; mismos, de su disponibilidad, su continuidad y su viabilidad financiera";
 choices[45][2] = "Ambas son ciertas";
 choices[45][3] = "Ambas son falsas";
 answers[45] = choices[45][1];
 units[45] = "98";
 comments[45] = "Id Pregunta: 4759. ";


//  Id pregunta: 4776 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  La Ley Org&aacute;nica 15/1999 que regula la Protecci&oacute;n de Datos de Car&aacute;cter Personal, ser&aacute; de aplicaci&oacute;n a los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por";
 choices[46]= new Array();
 choices[46][0] = "El sector p&uacute;blico exclusivamente";
 choices[46][1] = "El sector privado exclusivamente";
 choices[46][2] = "Los sectores p&uacute;blico y privado";
 choices[46][3] = "El sector privado y, en situaciones muy limitadas, afecta tambi&eacute;n al sector p&uacute;blico";
 answers[46] = choices[46][2];
 units[46] = "29";
 comments[46] = "Id Pregunta: 4776. ";


//  Id pregunta: 4787 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  En que lenguaje esta especificada La MIB de SNMPv2 ";
 choices[47]= new Array();
 choices[47][0] = "XML";
 choices[47][1] = "HTML";
 choices[47][2] = "ASN1";
 choices[47][3] = "Java";
 answers[47] = choices[47][2];
 units[47] = "104";
 comments[47] = "Id Pregunta: 4787. ";


//  Id pregunta: 4795 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) yUDP (User Datagram Protocol) es cierta?";
 choices[48]= new Array();
 choices[48][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores";
 choices[48][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos";
 choices[48][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP(Internet Protocol), que es un protocolo de red no fiable";
 choices[48][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite";
 answers[48] = choices[48][3];
 units[48] = "100";
 comments[48] = "Id Pregunta: 4795. ";


//  Id pregunta: 4809 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[49]= new Array();
 choices[49][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization)";
 choices[49][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation)";
 choices[49][2] = "SNA (System Network Architecture), de IBM";
 choices[49][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union - Telecommunications)";
 answers[49] = choices[49][3];
 units[49] = "102";
 comments[49] = "Id Pregunta: 4809. ";


//  Id pregunta: 4836 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  En ADO.NET para mostrar datos en un control DataGrid:";
 choices[50]= new Array();
 choices[50][0] = "Hay que vincular el control DataGrid a un objeto DataView, seleccionar &quot;Permitir ordenaci&oacute;n&quot; en elGenerador de propiedades y generar una rutina de tratamiento del evento SortCommand";
 choices[50][1] = "Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculadospor cada control en las plantillas del control DataList";
 choices[50][2] = "Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador depropiedades";
 choices[50][3] = "Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del controlDataGrid";
 answers[50] = choices[50][2];
 units[50] = "115";
 comments[50] = "Id Pregunta: 4836. ";


//  Id pregunta: 4854 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NOes cierta?";
 choices[51]= new Array();
 choices[51][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks)";
 choices[51][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada unode sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas pordicha estaci&oacute;n";
 choices[51][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast";
 choices[51][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os";
 answers[51] = choices[51][2];
 units[51] = "100";
 comments[51] = "Id Pregunta: 4854. ";


//  Id pregunta: 4960 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  En la ejecuci&oacute;n de un proyecto de auditor&iacute;a inform&aacute;tica sobre un sistema de informaci&oacute;n, el uso de procedimientos estad&iacute;sticos de muestreo ayudar&aacute; a minimizar el riesgo:";
 choices[52]= new Array();
 choices[52][0] = "De muestreo.";
 choices[52][1] = "De detecci&oacute;n.";
 choices[52][2] = "Inherente.";
 choices[52][3] = "De control.";
 answers[52] = choices[52][1];
 units[52] = "33";
 comments[52] = "Id Pregunta: 4960. Examen TIC B 2007";


//  Id pregunta: 5061 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  En Java 2 el operador &gt;&gt;:";
 choices[53]= new Array();
 choices[53][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas";
 choices[53][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo)";
 choices[53][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo)";
 choices[53][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos";
 answers[53] = choices[53][2];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5061. Examen TIC A 2007";


//  Id pregunta: 5076 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?:";
 choices[54]= new Array();
 choices[54][0] = "UPDATE TABLE";
 choices[54][1] = "ALTER TABLE";
 choices[54][2] = "REVOKE ALL";
 choices[54][3] = "ROLLBACK";
 answers[54] = choices[54][1];
 units[54] = "58";
 comments[54] = "Id Pregunta: 5076. Examen TIC A 2007";


//  Id pregunta: 5224 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  Cu&aacute;l de las siguientes actividades no pertenece al proceso Mantenimiento de Sistema de Informaci&oacute;n";
 choices[55]= new Array();
 choices[55][0] = "Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n";
 choices[55][1] = "An&aacute;lisis de la petici&oacute;n";
 choices[55][2] = "Registro de la petici&oacute;n";
 choices[55][3] = "Planificaci&oacute;n de la petici&oacute;n";
 answers[55] = choices[55][3];
 units[55] = "86";
 comments[55] = "Id Pregunta: 5224. ";


//  Id pregunta: 5490 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Qu&eacute; le ocurre a una transacci&oacute;n si recupera todos los datos que satisfacen una condici&oacute;n y despu&eacute;s otra transacci&oacute;n incorpora nuevos datos que satisfacen dicha condici&oacute;n, cuando repite la lectura inicial";
 choices[56]= new Array();
 choices[56][0] = "Nada";
 choices[56][1] = "Una lectura sucia";
 choices[56][2] = "Una lectura fantasma";
 choices[56][3] = "Una escritura sucia";
 answers[56] = choices[56][2];
 units[56] = "58";
 comments[56] = "Id Pregunta: 5490. ";


//  Id pregunta: 5523 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  La norma para las medidas de la resoluci&oacute;n en c&aacute;maras electr&oacute;nicas es";
 choices[57]= new Array();
 choices[57][0] = "ISO 12233";
 choices[57][1] = "ISO 20000";
 choices[57][2] = "IEEE 12333";
 choices[57][3] = "ANSI 568";
 answers[57] = choices[57][0];
 units[57] = "93";
 comments[57] = "Id Pregunta: 5523. ";


//  Id pregunta: 5533 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  El Programa IDABC para el periodo 2005 a 2009, &iquest;en qu&eacute; norma europea se basa?";
 choices[58]= new Array();
 choices[58][0] = "Decisi&oacute;n 2004/387/CE";
 choices[58][1] = "Decisi&oacute;n 1719/1999/CE";
 choices[58][2] = "Decisi&oacute;n 1720/1999/CE";
 choices[58][3] = "Directiva 2004/387/CE";
 answers[58] = choices[58][0];
 units[58] = "30";
 comments[58] = "Id Pregunta: 5533. ";


//  Id pregunta: 5677 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Indique cu&aacute;l de las siguientes opciones no est&aacute; relacionada con la Web Sem&aacute;ntica:";
 choices[59]= new Array();
 choices[59][0] = "RDF (Resource Description Framework).";
 choices[59][1] = "OWL (Web Ontology Language).";
 choices[59][2] = "XML (Extensible Markup Language)";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = choices[59][3];
 units[59] = "71";
 comments[59] = "Id Pregunta: 5677. ";


//  Id pregunta: 5695 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  La firma realizada a trav&eacute;s del DNI electr&oacute;nico:";
 choices[60]= new Array();
 choices[60][0] = "Tiene valor jur&iacute;dico, pero no equivale a la firma manuscrita";
 choices[60][1] = " Tiene el mismo valor jur&iacute;dico que la firma manuscrita";
 choices[60][2] = "No tiene valor jur&iacute;dico";
 choices[60][3] = "Su valor jur&iacute;dico queda a discreci&oacute;n de un juez";
 answers[60] = choices[60][1];
 units[60] = "74";
 comments[60] = "Id Pregunta: 5695. ";


//  Id pregunta: 5909 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Qu&eacute; tipo de miembros NO existen en el Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI)?";
 choices[61]= new Array();
 choices[61][0] = "Miembros Plenos";
 choices[61][1] = "Miembros Coordinadores";
 choices[61][2] = "Miembros Asociados";
 choices[61][3] = "Miembros Consejeros";
 answers[61] = choices[61][1];
 units[61] = "42";
 comments[61] = "Id Pregunta: 5909. MAP 2008 A1";


//  Id pregunta: 5988 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  Adem&aacute;s de controlar el correcto funcionamiento del sistema y poner los medios para corregir sus funciones, &iquest;qu&eacute; funci&oacute;n lecorresponder&iacute;a a un administrador de sistemas operativos?";
 choices[62]= new Array();
 choices[62][0] = "Colaborar en el desarrollo de nuevas versiones de los sistemas operativos o de parches para ellos.";
 choices[62][1] = "Planificar y realizar la adquisici&oacute;n de nuevo equipamiento.";
 choices[62][2] = "Instalar el sistema operativo, actualizar los parches, monitorizar el uso de recursos y corregir las posibles incidencias.";
 choices[62][3] = "Desarrollar los sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 answers[62] = choices[62][2];
 units[62] = "52";
 comments[62] = "Id Pregunta: 5988. TIC A 2009";


//  Id pregunta: 6100 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Acerca de las Autoridades de sellado de tiempo:";
 choices[63]= new Array();
 choices[63][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[63][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[63][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[63][3] = "No pueden ser simult&aacute;neamente Prestadores de Servicios de Certificaci&oacute;n seg&uacute;n la definici&oacute;n que de &eacute;stos da la Ley 59/2003 de firma electr&oacute;nica.";
 answers[63] = choices[63][1];
 units[63] = "74";
 comments[63] = "Id Pregunta: 6100. TIC A 2009";


//  Id pregunta: 6102 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  El lenguaje SQL92:";
 choices[64]= new Array();
 choices[64][0] = "Soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[64][1] = "Soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 choices[64][2] = "No soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[64][3] = "No soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 answers[64] = choices[64][0];
 units[64] = "58";
 comments[64] = "Id Pregunta: 6102. TIC A 2009";


//  Id pregunta: 6107 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Entre las t&eacute;cnicas y pr&aacute;cticas de educci&oacute;n de requisitos utilizadas en la ingenier&iacute;a de requisitos NO se encuentra la siguiente:";
 choices[65]= new Array();
 choices[65][0] = "Brainstorming.";
 choices[65][1] = "Casos de uso.";
 choices[65][2] = "M&eacute;todo Albrecht.";
 choices[65][3] = "Prototipado.";
 answers[65] = choices[65][2];
 units[65] = "78";
 comments[65] = "Id Pregunta: 6107. TIC A 2009";


//  Id pregunta: 6127 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Si contratamos la adquisici&oacute;n de un programa de ordenador a medida, &iquest;qu&eacute; tipo de contrato es?";
 choices[66]= new Array();
 choices[66][0] = "Un contrato de suministro.";
 choices[66][1] = "Un contrato de servicios.";
 choices[66][2] = "Un contrato mixto.";
 choices[66][3] = "Un contrato de desarrollo de un servicio p&uacute;blico.";
 answers[66] = choices[66][1];
 units[66] = "41";
 comments[66] = "Id Pregunta: 6127. TIC A 2009";


//  Id pregunta: 6138 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Indique la opci&oacute;n FALSA. Dentro del servicio universal definido por la Ley 9/2014, General de Telecomunicaciones, se debe garantizar:";
 choices[67]= new Array();
 choices[67][0] = "El acceso funcional a internet a velocidad suficiente.";
 choices[67][1] = "Una gu&iacute;a general de n&uacute;meros de abonados.";
 choices[67][2] = "Una cobertura suficiente que permita el acceso a la red de telefon&iacute;a m&oacute;vil.";
 choices[67][3] = "Una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago en todo el territorio nacional.";
 answers[67] = choices[67][2];
 units[67] = "110";
 comments[67] = "Id Pregunta: 6138. TIC A 2009";


//  Id pregunta: 6198 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l es el framework para aplicaciones desarrolladas con Spring, asociado con el control y la gesti&oacute;n de la seguridad?";
 choices[68]= new Array();
 choices[68][0] = "Spring Security";
 choices[68][1] = "JSF";
 choices[68][2] = "Struts";
 choices[68][3] = "Jbuilder";
 answers[68] = choices[68][0];
 units[68] = "60, 116";
 comments[68] = "Id Pregunta: 6198. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6213 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Qu&eacute; diagrama nos permite mostrar la disposici&oacute;n de las particiones f&iacute;sicas del sistema de informaci&oacute;n y la asignaci&oacute;n de los componentes software a estas particiones:";
 choices[69]= new Array();
 choices[69][0] = "Diagrama de Componentes";
 choices[69][1] = "Diagrama de Descomposici&oacute;n";
 choices[69][2] = "Diagrama de Despliegue";
 choices[69][3] = "Diagrama de Estructura";
 answers[69] = choices[69][2];
 units[69] = "82";
 comments[69] = "Id Pregunta: 6213. TICB-2009, bloque desarrollo";


//  Id pregunta: 6273 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes no es modelo de ciclo de vida tradicional basado en prototipos?";
 choices[70]= new Array();
 choices[70][0] = "Modelo de prototipado evolutivo";
 choices[70][1] = "Modelo de desarrollo incremental";
 choices[70][2] = "Modelo de construcci&oacute;n de prototipos";
 choices[70][3] = "Modelo basado en transformaciones";
 answers[70] = choices[70][3];
 units[70] = "76";
 comments[70] = "Id Pregunta: 6273. ";


//  Id pregunta: 6350 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  El proyecto de Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, promovido por la Secretaria de Estado de Telecomunicaciones y para la sociedad de la informaci&oacute;n se llama:";
 choices[71]= new Array();
 choices[71][0] = "Reutiliza";
 choices[71][1] = "Comparte";
 choices[71][2] = "Rhodas";
 choices[71][3] = "Aporta";
 answers[71] = choices[71][3];
 units[71] = "30";
 comments[71] = "Id Pregunta: 6350. ";


//  Id pregunta: 6386 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[72]= new Array();
 choices[72][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[72][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[72][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[72][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[72] = choices[72][1];
 units[72] = "43";
 comments[72] = "Id Pregunta: 6386. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6405 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es la duraci&oacute;n de los derechos de explotaci&oacute;n, cuando el autor de un programa de ordenador sea una persona jur&iacute;dica?";
 choices[73]= new Array();
 choices[73][0] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 choices[73][1] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[73][2] = "Setenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[73][3] = "Cincuenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 answers[73] = choices[73][2];
 units[73] = "36";
 comments[73] = "Id Pregunta: 6405. Art&iacute;culo 98 RDL 1/1996";


//  Id pregunta: 6418 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es la norma que supone la base de la certificaci&oacute;n europea en Accesibilidad Web?";
 choices[74]= new Array();
 choices[74][0] = "CWA 139803:2004";
 choices[74][1] = "CWA 15554:2006";
 choices[74][2] = "CWA 4568:2007";
 choices[74][3] = "CWA 17002:2005";
 answers[74] = choices[74][1];
 units[74] = "39";
 comments[74] = "Id Pregunta: 6418. ";


//  Id pregunta: 6487 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Por qu&eacute; se usan celdas de tama&ntilde;o fijo en ATM?";
 choices[75]= new Array();
 choices[75][0] = "Porque se reduce la sobrecarga de cabeceras de protocolo";
 choices[75][1] = "Porque se reduce el tiempo que una trama de alta prioridad deber&aacute; esperar en cola";
 choices[75][2] = "Porque mejora el enrutamiento";
 choices[75][3] = "Por analog&iacute;a con Ethernet";
 answers[75] = choices[75][1];
 units[75] = "109";
 comments[75] = "Id Pregunta: 6487. Castilla La Mancha 2009";


//  Id pregunta: 6632 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[76]= new Array();
 choices[76][0] = "Si aumenta la calidad del producto, los costes de la no-calidad disminuyen";
 choices[76][1] = "Si aumenta la calidad del producto, los costes de la no-calidad aumentan";
 choices[76][2] = "Si aumenta la calidad del producto, el coste del sistema de calidad aumenta";
 choices[76][3] = "Si aumenta la calidad del producto, el coste del sistema de calidad disminuye";
 answers[76] = choices[76][0];
 units[76] = "87";
 comments[76] = "Id Pregunta: 6632. ";


//  Id pregunta: 7143 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  Se&ntilde;ala la opci&oacute;n que NO se encuentra en los objetivos de MAGERIT v2:";
 choices[77]= new Array();
 choices[77][0] = "Concienciar a los responsables de los sistemas de informaci&oacute;n de la existencia de riesgos y de la necesidad de atajarlos a tiempo";
 choices[77][1] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos siguiendo el Libro Blanco de Buenas Pr&aacute;cticas en Materia de Seguridad para la Administraci&oacute;n Europea";
 choices[77][2] = "Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control";
 choices[77][3] = "Apoyar la preparaci&oacute;n a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditoria, certificaci&oacute;n o acreditaci&oacute;n";
 answers[77] = choices[77][1];
 units[77] = "33";
 comments[77] = "Id Pregunta: 7143. Examen TIC B 2009";


//  Id pregunta: 7172 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  En un documento XML, la parte donde se definen los enlaces a otros documentos, a c&oacute;digo ejecutable, etc. Es:";
 choices[78]= new Array();
 choices[78][0] = "DTD";
 choices[78][1] = "XSL";
 choices[78][2] = "XLL";
 choices[78][3] = "DHTML";
 answers[78] = choices[78][2];
 units[78] = "69";
 comments[78] = "Id Pregunta: 7172. Examen TIC B 2009";


//  Id pregunta: 7319 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  &iquest;Qu&eacute; significan las siglas ASP de la tecnolog&iacute;a ASP.NET?";
 choices[79]= new Array();
 choices[79][0] = "Active Server Pages";
 choices[79][1] = "Active Side Pages";
 choices[79][2] = "Archive Server Pages";
 choices[79][3] = "Archive Side Pages";
 answers[79] = choices[79][0];
 units[79] = "59";
 comments[79] = "Id Pregunta: 7319. ";


//  Id pregunta: 7872 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)   &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al conjunto de est&aacute;ndares IEEE (Institute of Electrical and Electronics Engineers) 802.11 es cierta?";
 choices[80]= new Array();
 choices[80][0] = " El est&aacute;ndar IEEE 802.11b utiliza la t&eacute;cnica de modulaci&oacute;n DSSS (Direct-Sequence Spread Spectrum).";
 choices[80][1] = " El est&aacute;ndar IEEE 802.11a utiliza la t&eacute;cnica de modulaci&oacute;n FHSS (Frequency-Hopping Spread Spectrum).";
 choices[80][2] = " El est&aacute;ndar IEEE 802.11 original utiliza la t&eacute;cnica de modulaci&oacute;n OFDM (Orthogonal FrequencyDivision Multiplexing).";
 choices[80][3] = " El est&aacute;ndar IEEE 802.11g utiliza la t&eacute;cnica de modulaci&oacute;n DWDM (Dense Wavelength Division Multiplexing).";
 answers[80] = choices[80][0];
 units[80] = "NULL";
 comments[80] = "Id Pregunta: 7872. Map 2006";


//  Id pregunta: 7937 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)   Los certificados de clave p&uacute;blica:";
 choices[81]= new Array();
 choices[81][0] = " Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones.";
 choices[81][1] = " Ocupan m&aacute;s de 100 kbytes.";
 choices[81][2] = " Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest Shamir Adleman).";
 choices[81][3] = " Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemas de clave p&uacute;blica.";
 answers[81] = choices[81][0];
 units[81] = "NULL";
 comments[81] = "Id Pregunta: 7937. Map 2006";


//  Id pregunta: 8275 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  En el protocolo Internet Protocol versi&oacute;n 6 (IPv6), &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[82]= new Array();
 choices[82][0] = "S&oacute;lo se permite fragmentar en el origen.";
 choices[82][1] = "No tiene un mecanismo equivalente al del bit Don't Fragment (DF) de IPv4.";
 choices[82][2] = "Se requiere que todos los enlaces tengan un MTU de 1500 octetos o mayor.";
 choices[82][3] = "Un jumbograma es un paquete IPv6 que contiene una carga &uacute;til (payload) mayor que 65535 octetos.";
 answers[82] = choices[82][2];
 units[82] = "100";
 comments[82] = "Id Pregunta: 8275. Examen TIC A1 2010";


//  Id pregunta: 8320 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Se&ntilde;ale cual de las siguientes caracter&iacute;sticas de seguridad est&aacute; incluida tanto en el est&aacute;ndar WPA2 como en el est&aacute;ndar WEP: ";
 choices[83]= new Array();
 choices[83][0] = "Intercambio din&aacute;mico de claves. ";
 choices[83][1] = "Autenticaci&oacute;n 802.1x ";
 choices[83][2] = "Preshared Keys (PSK). ";
 choices[83][3] = "Encriptaci&oacute;n AES. ";
 answers[83] = choices[83][2];
 units[83] = "107, 111";
 comments[83] = "Id Pregunta: 8320. Examen TIC A2 2010";


//  Id pregunta: 8355 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  La compa&ntilde;&iacute;a que desarroll&oacute; la tecnolog&iacute;a JSP es:";
 choices[84]= new Array();
 choices[84][0] = "Sun Microsystems.";
 choices[84][1] = "Microsoft.";
 choices[84][2] = "Google.";
 choices[84][3] = "IBM.";
 answers[84] = choices[84][0];
 units[84] = "116";
 comments[84] = "Id Pregunta: 8355. Examen TIC A2 2010";


//  Id pregunta: 8381 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  La tecnolog&iacute;a de transmisi&oacute;n 100Base-FX:";
 choices[85]= new Array();
 choices[85][0] = "Utiliza cable UTP de categor&iacute;a 5 o superior.";
 choices[85][1] = "Tiene una longitud m&aacute;xima de 2 kil&oacute;metros para transmisiones half-duplex y 400 metros para transmisiones full-duplex.";
 choices[85][2] = "Es compatible con la tecnolog&iacute;a 10Base&bull;FL.";
 choices[85][3] = "Puede usar conectores MIC.";
 answers[85] = choices[85][3];
 units[85] = "99";
 comments[85] = "Id Pregunta: 8381. Examen TIC A2 2010";


//  Id pregunta: 8450 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  La T&eacute;cnica de accesos CDMA se caracteriza entre otras porque:";
 choices[86]= new Array();
 choices[86][0] = "Varios usuarios comparten una misma portadora en intervalos diferentes de tiempo";
 choices[86][1] = "Varios Usuarios comparten la misma banda";
 choices[86][2] = "Requiere filtros muy selectivos para evitar las interferencias de canal adyacente";
 choices[86][3] = "Ninguna de las anteriores.";
 answers[86] = choices[86][1];
 units[86] = "101";
 comments[86] = "Id Pregunta: 8450. Analista Ayto. Madrid 2010";


//  Id pregunta: 8475 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  El est&aacute;ndar IEEE 802.16 hace referencia a:";
 choices[87]= new Array();
 choices[87][0] = "Bluetooth.";
 choices[87][1] = "Wi-Fi.";
 choices[87][2] = "Wimax.";
 choices[87][3] = "Wireless LAN.";
 answers[87] = choices[87][2];
 units[87] = "107";
 comments[87] = "Id Pregunta: 8475. Examen TIC A2 2010 interna";


//  Id pregunta: 8537 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  En las redes m&oacute;viles 3G de transici&oacute;n, encontramos tecnolog&iacute;as como HSPA evolucionado o HSPA+. &iquest;Cu&aacute;l es una de las caracter&iacute;sticas de mejora de esta tecnolog&iacute;a?";
 choices[88]= new Array();
 choices[88][0] = "Permite el uso de antenas MIMO";
 choices[88][1] = "Alcanza velocidades pico te&oacute;ncas de 100 Mbps.";
 choices[88][2] = "Proporciona capacidades sim&eacute;tricas para los enlaces ascendente y descendente";
 choices[88][3] = "La modulaci&oacute;n es GMSK, de gran eficiencia espectral";
 answers[88] = choices[88][0];
 units[88] = "108";
 comments[88] = "Id Pregunta: 8537. Examen TIC A2 2010 interna";


//  Id pregunta: 8679 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  El permiso de Unix 500 pemiite:";
 choices[89]= new Array();
 choices[89][0] = "Lectura y escritura para el propietario del archivo";
 choices[89][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[89][2] = "Lectura y escritura para todos los usuarios";
 choices[89][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[89] = choices[89][1];
 units[89] = "53";
 comments[89] = "Id Pregunta: 8679. Examen UPM A2 2011";


//  Id pregunta: 8742 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  En relaci&oacute;n con la inscripci&oacute;n de ficheros en el Registro General de Protecci&oacute;n de datos, la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[90]= new Array();
 choices[90][0] = "Tiene 1 mes de plazo para resolver la solicitud de inscripci&oacute;n y en caso de no contestar en tal plazo, se entender&aacute; inscrito a todos los efectos";
 choices[90][1] = "Tiene 1 mes de plazo para resolver la solicitud de inscripci&oacute;n y en caso de no contestar en tal plazo, se entender&aacute; desestimada la solicitud, con posibilidad de Interposici&oacute;n del correspondiente recurso especial en materia de protecci&oacute;n de datos de car&aacute;cter personal.";
 choices[90][2] = "Debe contestar en el plazo m&aacute;ximo de 10 d&iacute;as, prorrogables hasta 1 mes, por motivos justificados, con obligaci&oacute;n de resolver. En caso de no contestar en tal plazo, se entender&aacute; Inscrito a todos los efectos.";
 choices[90][3] = "No realiza la inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos sino que emite un Informe preceptivo y no vinculante, en un plazo de 1 mes, sobre la adecuaci&oacute;n de la solicitud. En el caso de no emitirlo en dicho plazo se entender&aacute; como favorable a todos los efectos.";
 answers[90] = choices[90][0];
 units[90] = "29";
 comments[90] = "Id Pregunta: 8742. Examen TIC A2 2010 interna";


//  Id pregunta: 8891 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  Se&ntilde;ale la respuesta correcta seg&uacute;n M&eacute;trica v3";
 choices[91]= new Array();
 choices[91][0] = "El c&aacute;lculo de accesos es una t&eacute;cnica";
 choices[91][1] = "La normalizaci&oacute;n es una t&eacute;cnica";
 choices[91][2] = "Ambas son pr&aacute;cticas";
 choices[91][3] = "Ambas son t&eacute;cnicas";
 answers[91] = choices[91][1];
 units[91] = "86";
 comments[91] = "Id Pregunta: 8891. ";


//  Id pregunta: 9121 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  &iquest;C&oacute;mo son los nodos de un cluster?";
 choices[92]= new Array();
 choices[92][0] = "Siempre homog&eacute;neos con el mismo sistema operativo.";
 choices[92][1] = "Pueden ser heterogeneos, con distintos sistemas operativos.";
 choices[92][2] = "S&oacute;lo se pueden crear clusters con tecnolog&iacute;a Microsoft.";
 choices[92][3] = "Ninguna respuesta es correcta.";
 answers[92] = choices[92][1];
 units[92] = "45";
 comments[92] = "Id Pregunta: 9121. ";


//  Id pregunta: 9215 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  &iquest;Qu&eacute; es SAN FICON?";
 choices[93]= new Array();
 choices[93][0] = "Evoluci&oacute;n de la tecnolog&iacute;a ESCON de IBM";
 choices[93][1] = "Una tecnologia semiduplex.";
 choices[93][2] = "Al igual que FC, FICON es una tecnolog&iacute;a duplex pero no as&iacute; ESCON que es semiduplex.";
 choices[93][3] = "Ninguna es correcta.";
 answers[93] = choices[93][0];
 units[93] = "48";
 comments[93] = "Id Pregunta: 9215. ";


//  Id pregunta: 9233 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  &iquest;En qu&eacute; se basa la interfaz de usuario de iOS?";
 choices[94]= new Array();
 choices[94][0] = "Concepto de manipulaci&oacute;n directa usando gestos multit&aacute;ctiles.";
 choices[94][1] = "Ejecuci&oacute;n de comandos mediante la selecci&oacute;n de men&uacute;s.";
 choices[94][2] = "S&oacute;lo est&aacute; accesible en sistemas con Jailbreak.";
 choices[94][3] = "Su pantalla principal se denomina WinterBoard.";
 answers[94] = choices[94][0];
 units[94] = "52";
 comments[94] = "Id Pregunta: 9233. ";


//  Id pregunta: 9443 Año de creación de pregunta: 2013-01-01
 questions[95]= "96)  En un diagrama de transici&oacute;n de estados, seg&uacute;n M&eacute;trica v3:";
 choices[95]= new Array();
 choices[95][0] = "Se puede representar m&aacute;s de un estado inicial, que ir&aacute;n conectados al primer estado del diagrama.";
 choices[95][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final.";
 choices[95][2] = "Pueden existir varios estados finales, pero ser&aacute;n mutuamente excluyentes.";
 choices[95][3] = "Los elementos permitidos ser&aacute;n &uacute;nicamente estados, transiciones y acciones.";
 answers[95] = choices[95][2];
 units[95] = "86";
 comments[95] = "Id Pregunta: 9443. Examen AGE TIC A1 2011";


//  Id pregunta: 9605 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Qu&eacute; base de datos usa un formato de almacenamiento XML?";
 choices[96]= new Array();
 choices[96][0] = "Oracle";
 choices[96][1] = "MongoDB";
 choices[96][2] = "eXist";
 choices[96][3] = "Redis";
 answers[96] = choices[96][2];
 units[96] = "58";
 comments[96] = "Id Pregunta: 9605. ";


//  Id pregunta: 9925 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Respecto al protocolo HDLC, indique la falsa:";
 choices[97]= new Array();
 choices[97][0] = "Significa High-Level Data Link Control y est&aacute; basado en el ISO 3339.";
 choices[97][1] = "Usa transmisi&oacute;n s&iacute;ncrona y todos los intercambios se realizan a trav&eacute;s de tramas.";
 choices[97][2] = "Utiliza un formato &uacute;nico de tramas, tanto para datos como para informaci&oacute;n de control.";
 choices[97][3] = "Es el protocolo m&aacute;s importante para el enlace de datos, siendo la base para otros protocolos de nivel 2.";
 answers[97] = choices[97][0];
 units[97] = "100";
 comments[97] = "Id Pregunta: 9925. ";


//  Id pregunta: 10045 Año de creación de pregunta: 2010-01-01
 questions[98]= "99)  La recomendaci&oacute;n X.25 de la ITU (International Telecommunication Union) se refiere a:";
 choices[98]= new Array();
 choices[98][0] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para equipos terminales que funcionan en el modo paquete y est&aacute;n conectados a redes p&uacute;blicas de datos por circuitos especializados.";
 choices[98][1] = "Interfaz equipo terminal de datos/equipo de terminaci&oacute;n del circuito de datos para los equipos terminales de datos arr&iacute;tmicos con acceso a la facilidad de ensamblado/desensamblado de paquetes en una red p&uacute;blica de datos situada en elmismo pa&iacute;s.";
 choices[98][2] = "Utilizaci&oacute;n, en las redes p&uacute;blicas de datos, de equipos terminales de datos dise&ntilde;ados para su conexi&oacute;n con m&oacute;dems s&iacute;ncronos de la serie V.";
 choices[98][3] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para funcionamiento s&iacute;ncrono en redes p&uacute;blicas de datos.";
 answers[98] = choices[98][0];
 units[98] = "103";
 comments[98] = "Id Pregunta: 10045. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10123 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Cu&aacute;l de los siguientes es un protocolo de encaminamiento externo:";
 choices[99]= new Array();
 choices[99][0] = "RIP";
 choices[99][1] = "OSPF";
 choices[99][2] = "BGP";
 choices[99][3] = "ISIS";
 answers[99] = choices[99][2];
 units[99] = "102";
 comments[99] = "Id Pregunta: 10123. ";


