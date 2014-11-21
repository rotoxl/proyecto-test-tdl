/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 5 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no se considera un motivo para ordenar una auditor&iacute;a?:";
 choices[0]= new Array();
 choices[0][0] = "Para determinar el origen del malfuncionamiento de una aplicaci&oacute;n";
 choices[0][1] = "Para determinar el estado del sistema ante un cambio importante";
 choices[0][2] = "Para determinar cual es el motivo del malfuncionamiento del sistema";
 choices[0][3] = "Para determinar si los proyectos transcurren seg&uacute;n lo establecido, en cuanto a recursos, objetivos etc";
 answers[0] = choices[0][0];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 5. ";


//  Id pregunta: 185 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el modelo de Donovan la expresi&oacute;n 'mano amiga' se refiere a:";
 choices[1]= new Array();
 choices[1][0] = "Empresas que han optado por instalar de forma distribuida el hardware, y el usuario tiene poder de decisi&oacute;n";
 choices[1][1] = "Empresas en las que se ha descentralizado el hardware y el usuario tiene poder de decisi&oacute;n";
 choices[1][2] = "Empresas en las que se ha descentralizado el hardware y el desarrollo, pero el usuario no tiene poder de decisi&oacute;n";
 choices[1][3] = "Empresas en las que se ha descentralizado el hardware y el desarrollo y el usuario tiene poder de decisi&oacute;n";
 answers[1] = choices[1][1];
 units[1] = "22";
 comments[1] = "Id Pregunta: 185. donovan - nolan";


//  Id pregunta: 241 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En un sistema de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "La integraci&oacute;n permite mayor eficiencia conjunta e interrelaci&oacute;n m&aacute;s efectiva de actividades";
 choices[2][1] = "La integraci&oacute;n no presenta vulnerabilidades a incertidumbres por la flexibilidad que ofrece";
 choices[2][2] = "Se debe primar en todo momento la integraci&oacute;n frente a la independencia";
 choices[2][3] = "Se debe primar en todo momento la independencia frente a la integraci&oacute;n";
 answers[2] = choices[2][0];
 units[2] = "21";
 comments[2] = "Id Pregunta: 241. ";


//  Id pregunta: 375 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Los par&aacute;metros de seguridad de la informaci&oacute;n pueden resumirse en:";
 choices[3]= new Array();
 choices[3][0] = "Disponibilidad, integridad, confidencialidad";
 choices[3][1] = "Integridad, autenticaci&oacute;n, confidencialidad";
 choices[3][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n";
 choices[3][3] = "Autenticaci&oacute;n, disponibilidad, integridad";
 answers[3] = choices[3][0];
 units[3] = "31,32,33";
 comments[3] = "Id Pregunta: 375. ";


//  Id pregunta: 493 Año de creación de pregunta: 2003-01-01
 questions[4]= "5)  &iquest;C&uacute;antos niveles de evaluaci&oacute;n est&aacute;n contemplados en los Criterios Comunes?";
 choices[4]= new Array();
 choices[4][0] = "Siete";
 choices[4][1] = "Coinciden con los de ITSEC";
 choices[4][2] = "Cinco";
 choices[4][3] = "Seis";
 answers[4] = choices[4][0];
 units[4] = "31,32,33";
 comments[4] = "Id Pregunta: 493. ";


//  Id pregunta: 515 Año de creación de pregunta: 2003-01-01
 questions[5]= "6)  Seg&uacute;n la Ley de propiedad intelectual, cuando el propietario de un programa de ordenador es una persona jur&iacute;dica, puede ejercer derechos de explotaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "de setenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o, si no, al de su creaci&oacute;n";
 choices[5][1] = "de sesenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita o il&iacute;cita del programa o, si no, al de su creaci&oacute;n. En caso de divulgaci&oacute;n il&iacute;cita se considerar&aacute; el de creaci&oacute;n ";
 choices[5][2] = "de 5 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa, si no al de su creaci&oacute;n";
 choices[5][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[5] = choices[5][0];
 units[5] = "36";
 comments[5] = "Id Pregunta: 515. ";


//  Id pregunta: 537 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  El desarrollo de una Pol&iacute;tica de Seguridad de los Sistemas de Informaci&oacute;n es responsabilidad de:";
 choices[6]= new Array();
 choices[6][0] = "Departamento de Inform&aacute;tica";
 choices[6][1] = "Comit&eacute; de Seguridad";
 choices[6][2] = "Administrador de seguridad";
 choices[6][3] = "Alta Direcci&oacute;n";
 answers[6] = choices[6][3];
 units[6] = "26";
 comments[6] = "Id Pregunta: 537. ";


//  Id pregunta: 560 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Cual de las siguientes opciones no es una ventaja de un sistema integrado";
 choices[7]= new Array();
 choices[7][0] = "Mayor eficiencia conjunta y una interrelaci&oacute;n m&aacute;s efectiva de actividades entre subsistemas.";
 choices[7][1] = "Incorporaci&oacute;n de h&aacute;bitos para compartir ampliamente los recursos, obteniendo beneficios potenciales, debidos aeconom&iacute;as de escala y especializaci&oacute;n.";
 choices[7][2] = "Posibilidad de abordar las decisiones desde la perspectiva del sistema com&uacute;n conjunto en vez de sobre una basesub&oacute;ptima que utilice solamente informaci&oacute;n y objetivos locales.";
 choices[7][3] = "Sistemas mas simples evitando riesgos a&ntilde;adidos";
 answers[7] = choices[7][3];
 units[7] = "21";
 comments[7] = "Id Pregunta: 560. ";


//  Id pregunta: 695 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  A la hora de evaluar el comportamiento de un sistema inform&aacute;tico, el &quot;throughput&quot; se puede definir como:";
 choices[8]= new Array();
 choices[8][0] = "El n&uacute;mero de CPUs necesarias para asegurar una velocidad de procesamiento determinada";
 choices[8][1] = "El n&uacute;mero de recursos inform&aacute;ticos disponibles en el sistema";
 choices[8][2] = "El cociente entre la velocidad de transmisi&oacute;n de la red y la velocidad media de las CPUs del sistema";
 choices[8][3] = "La cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 answers[8] = choices[8][3];
 units[8] = "48";
 comments[8] = "Id Pregunta: 695. ";


//  Id pregunta: 712 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  En un CPD se hacen back-ups de 240 GB. Se hacen 4 al a&ntilde;o. Si se quiere tener la informaci&oacute;n de los 5 a&ntilde;os anteriores, &iquest;Cu&aacute;ntas cintas de 60 GB hacen falta?";
 choices[9]= new Array();
 choices[9][0] = "60";
 choices[9][1] = "80";
 choices[9][2] = "90";
 choices[9][3] = "70";
 answers[9] = choices[9][1];
 units[9] = "48";
 comments[9] = "Id Pregunta: 712. Similar a examen TIC SS A 2003";


//  Id pregunta: 743 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  Dentro del campo de los almacenes de datos, los supermercados de datos o Data Marts:";
 choices[10]= new Array();
 choices[10][0] = "Son muy vol&aacute;tiles dada la gran frecuencia de actualizaci&oacute;n.";
 choices[10][1] = "son una versi&oacute;n especial de Data Warehouse, duplicados en varias m&aacute;quinas para agilizar el acceso a los mismos, que contienen los datos muy resumidos en una arquitectura distribuida por niveles.";
 choices[10][2] = "S&oacute;lo pueden ser accedidos por el departamento al que pertenecen los datos.";
 choices[10][3] = "Ninguna de las anteriores.";
 answers[10] = choices[10][1];
 units[10] = "68";
 comments[10] = "Id Pregunta: 743. Similar a examen TIC SS A 2003";


//  Id pregunta: 820 Año de creación de pregunta: 2009-01-01
 questions[11]= "12)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[11]= new Array();
 choices[11][0] = "Salvaguarda del orden p&uacute;blico";
 choices[11][1] = "Salvaguarda del inter&eacute;s general";
 choices[11][2] = "Respeto a la dignidad de la persona";
 choices[11][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[11] = choices[11][1];
 units[11] = "30";
 comments[11] = "Id Pregunta: 820. ";


//  Id pregunta: 857 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es com&uacute;nmente utilizada para la extracci&oacute;n de informaci&oacute;n en un almac&eacute;n de datos?";
 choices[12]= new Array();
 choices[12][0] = "De consulta e informe.";
 choices[12][1] = "De an&aacute;lisis m&uacute;ltidimensional.";
 choices[12][2] = "De an&aacute;lisis predictivo.";
 choices[12][3] = "De inteligencia artificial.";
 answers[12] = choices[12][2];
 units[12] = "68";
 comments[12] = "Id Pregunta: 857. ";


//  Id pregunta: 926 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es la l&oacute;gica borrosa o difusa -fuzzy logic-?:";
 choices[13]= new Array();
 choices[13][0] = "Es una rama de la l&oacute;gica binaria que invierte los conceptos para que el ordenador realice operaciones m&aacute;s eficientemente en l&oacute;gica negativa aunque para el ser humano se pierda comprensi&oacute;n";
 choices[13][1] = "Es una rama de la ingenier&iacute;a que trata la l&oacute;gica booleana mediante transformaciones puntuales de cambios de base para introducir variables auxiliares a conveniencia";
 choices[13][2] = "Es una rama de la ingenier&iacute;a que simplifica ecuaciones muy complejas para resolverlas mediante aproximaciones de los valores de la soluci&oacute;n seg&uacute;n grados de pertenencia a conjuntos m&aacute;s o menos subjetivos y probabil&iacute;sticos";
 choices[13][3] = "Nada de lo anterior es cierto";
 answers[13] = choices[13][2];
 units[13] = "63";
 comments[13] = "Id Pregunta: 926. ";


//  Id pregunta: 936 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; norma de las que se relacionan a continuaci&oacute;n afecta a SQL?:";
 choices[14]= new Array();
 choices[14][0] = "ISO 9075";
 choices[14][1] = "ISO 9003";
 choices[14][2] = "ANSI 9003";
 choices[14][3] = "IEEE 9003";
 answers[14] = choices[14][0];
 units[14] = "58";
 comments[14] = "Id Pregunta: 936. ";


//  Id pregunta: 980 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  De los circuitos secuenciales es incorrecto afirmar que:";
 choices[15]= new Array();
 choices[15][0] = "El tipo de disparo determina la forma en que las excitaciones de entrada afectan al estado del biestable.";
 choices[15][1] = "La forma de disparo de un biestable, que es el circuito elemental, viene determinada por tres aspectos: la l&oacute;gica de disparo, el tipo de disparo y el sincronismo.";
 choices[15][2] = "Una misma combinaci&oacute;n l&oacute;gica en sus entradas puede producir distintas combinaciones en su salida.";
 choices[15][3] = "Son circuitos anal&oacute;gicos capaces de memorizar cierta informaci&oacute;n.";
 answers[15] = choices[15][3];
 units[15] = "";
 comments[15] = "Id Pregunta: 980. ";


//  Id pregunta: 1029 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Firmar un mensaje electr&oacute;nico:";
 choices[16]= new Array();
 choices[16][0] = "Es lo mismo que cifrarlo";
 choices[16][1] = "Es lo mismo que codificarlo";
 choices[16][2] = "Garantiza la confidencialidad";
 choices[16][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[16] = choices[16][3];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1029. ";


//  Id pregunta: 1035 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[17]= new Array();
 choices[17][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[17][1] = "Interfaz lenguaje de datos de usuario";
 choices[17][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[17][3] = "Interfaz lenguaje de datos interno";
 answers[17] = choices[17][2];
 units[17] = "57";
 comments[17] = "Id Pregunta: 1035. ";


//  Id pregunta: 1141 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  En un sistema de informaci&oacute;n geogr&aacute;fica tipo r&aacute;ster, indique cu&aacute;l de las siguientes es una operaci&oacute;n con varias capas:";
 choices[18]= new Array();
 choices[18][0] = "Vectorizaci&oacute;n.";
 choices[18][1] = "Filtrado.";
 choices[18][2] = "Scanning.";
 choices[18][3] = "Overlay.";
 answers[18] = choices[18][3];
 units[18] = "67";
 comments[18] = "Id Pregunta: 1141. ";


//  Id pregunta: 1184 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Indicar la respuesta falsa sobre las redes sem&aacute;nticas en inteligencia artificial:";
 choices[19]= new Array();
 choices[19][0] = "Las redes sem&aacute;nticas conciben el pensamiento mediante un conjunto de ideas b&aacute;sicas y relaciones que interconectan unas con otras formando una red, de forma que el razonamiento se basa en una navegaci&oacute;n por dicha red";
 choices[19][1] = "El emparejamiento proporciona respuestas mediante la b&uacute;squeda de parejas de idea-relaci&oacute;n en la red";
 choices[19][2] = "Los mecanismos de inferencia en una red sem&aacute;ntica son la herencia y el emparejamiento";
 choices[19][3] = "El procedimiento de herencia extiende a las caracter&iacute;sticas asociadas a un concepto con las caracter&iacute;sticas de los nodos con los que le une la relaci&oacute;n es-un, de forma que el concepto hereda cualidades propias de otros conceptos m&aacute;s generales";
 answers[19] = choices[19][1];
 units[19] = "64";
 comments[19] = "Id Pregunta: 1184. ";


//  Id pregunta: 1188 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Indique cu&aacute;l de las siguientes afirmaciones es falsa respecto a la ortogonalidad:";
 choices[20]= new Array();
 choices[20][0] = "Un juego de instrucciones se dice que es regular si es ortogonal";
 choices[20][1] = "La ortogonalidad implica que cada operaci&oacute;n debe poder realizarse con un tipo de operando fijo y su propio direccionamiento";
 choices[20][2] = "Se garantiza la ortogonalidad limitando la informaci&oacute;n contenida en el c&oacute;digo de operaci&oacute;n a la operaci&oacute;n pura, excluyendo direccionamiento y representaci&oacute;n de datos";
 choices[20][3] = "La ortogonalidad de un juego de instrucciones aporta claras ventajas de simplicidad y claridad";
 answers[20] = choices[20][1];
 units[20] = "52";
 comments[20] = "Id Pregunta: 1188. ";


//  Id pregunta: 1221 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  La estructuraci&oacute;n en niveles l&oacute;gicos de E/S de un sistema inform&aacute;tico puede hacerse de la siguiente forma:";
 choices[21]= new Array();
 choices[21][0] = "Transferencia elemental, transferencia compleja, transferencia m&uacute;ltiple";
 choices[21][1] = "Lenguaje de alto nivel, instrucciones de m&aacute;quina y macroinstrucciones";
 choices[21][2] = "Rutinas de entrada-salida, sistemas operativos, ensambladores";
 choices[21][3] = "Transferencia elemental, de bloque, operaci&oacute;n de entrada/salida";
 answers[21] = choices[21][3];
 units[21] = "52";
 comments[21] = "Id Pregunta: 1221. ";


//  Id pregunta: 1274 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los lenguajes de cuarta generaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Necesitan menos recursos que los de generaciones anteriores.";
 choices[22][1] = "Necesitan m&aacute;s recursos que los de generaciones  anteriores.";
 choices[22][2] = "Tienen un tiempo de respuesta generalmente superior a los lenguajes de generaciones anteriores.";
 choices[22][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[22] = choices[22][3];
 units[22] = "91";
 comments[22] = "Id Pregunta: 1274. ";


//  Id pregunta: 1325 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  SAN:";
 choices[23]= new Array();
 choices[23][0] = "Es un fabricante americano de hardware y software";
 choices[23][1] = "Es una red de fibra &oacute;ptica dedicada para el almacenamiento";
 choices[23][2] = "Es una red de &aacute;rea local muy peque&ntilde;a (Simple Area Network)";
 choices[23][3] = "Corresponde con la tecnolog&iacute;a Software Adaptative Networking que permite que los nodos de conmutaci&oacute;n de las redes tengan procesamiento inteligente liberando a los clientes de incompatibilidades de protocolos y de gran cantidad de procesamiento";
 answers[23] = choices[23][1];
 units[23] = "48";
 comments[23] = "Id Pregunta: 1325. ";


//  Id pregunta: 1558 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;C&uacute;al de los modelos de datos de Sitemas de Informaci&oacute;n Geogr&aacute;fica es m&aacute;s adecuado para representar l&iacute;neas con precisi&oacute;n y superficies rellenas?";
 choices[24]= new Array();
 choices[24][0] = "Modelo R&aacute;ster.";
 choices[24][1] = "Modelo Vectorial.";
 choices[24][2] = "Modelo R&aacute;ster y Modelo Vectorial.";
 choices[24][3] = "El modelo R&aacute;ster para l&iacute;neas y el modelo Vectorial para superficies.";
 answers[24] = choices[24][2];
 units[24] = "67";
 comments[24] = "Id Pregunta: 1558. ";


//  Id pregunta: 1622 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  Se&ntilde;ale cu&aacute;l de las siguientes frases es incorrecta, cuando hablamos de una arquitectura cliente-servidor:";
 choices[25]= new Array();
 choices[25][0] = "El entorno en que se desenvuelve una arquitectura cliente-servidor es homog&eacute;neo y por tanto tiene la ventaja de no requerir interfaz para su comunicaci&oacute;n";
 choices[25][1] = "Se distinguen dos tipos de arquitectura cliente-servidor: modelo de 2 capas y modelo de 3 capas";
 choices[25][2] = "Se trata de una arquitectura escalable, es decir susceptible de ampliarse tanto verticalmente (con mayor n&uacute;mero de servidores) como horizontalmente (con mayor n&uacute;mero de clientes)";
 choices[25][3] = "El proceso clinte proporciona la interfaz del usuario y el proceso servidor los medios para gestionar los recursos compartidos";
 answers[25] = choices[25][0];
 units[25] = "50";
 comments[25] = "Id Pregunta: 1622. ";


//  Id pregunta: 1647 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes son subsistemas usuales en un sistema de e-learning?";
 choices[26]= new Array();
 choices[26][0] = "LCMS (Learning Content Management System)";
 choices[26][1] = "LOMS (Learning Objects Management System)";
 choices[26][2] = "CRM (Customer Relationship Management)";
 choices[26][3] = "Todos los anteriores";
 answers[26] = choices[26][0];
 units[26] = "66";
 comments[26] = "Id Pregunta: 1647. ";


//  Id pregunta: 1754 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Qu&eacute; es el CLR?";
 choices[27]= new Array();
 choices[27][0] = "Un lenguaje de programaci&oacute;n para .Net";
 choices[27][1] = "El entorno de ejecuci&oacute;n de .Net";
 choices[27][2] = "Una biblioteca de clases de objetos";
 choices[27][3] = "Un motor de bases de datos para dispositivos m&oacute;viles";
 answers[27] = choices[27][1];
 units[27] = "59";
 comments[27] = "Id Pregunta: 1754. ";


//  Id pregunta: 1799 Año de creación de pregunta: 2006-01-01
 questions[28]= "29)  En sistemas de representaci&oacute;n del conocimiento mediante reglas, el disparo de una regla en el mecanismo de inferencia con encadenamiento hacia delante:";
 choices[28]= new Array();
 choices[28][0] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar dejan de poder hacerlo y otras pasan a verificar su antecedente";
 choices[28][1] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar pueden seguir haci&eacute;ndolo y otras pasan tambi&eacute;n a verificar su antecedente";
 choices[28][2] = "El antecedente de la regla seleccionada est&aacute; formado por hechos que son consi-derados ahora como subobjetivos iniciando de nuevo el proceso";
 choices[28][3] = "La idea es partir del objetivo, seleccionar una regla y entonces elegir como otro u otros subobjetivos los hechos que est&aacute;n en el antecedente de la regla seleccionada, repitiendo el proceso de selecci&oacute;n de regla hasta alcanzar los datos";
 answers[28] = choices[28][0];
 units[28] = "64";
 comments[28] = "Id Pregunta: 1799. ";


//  Id pregunta: 1815 Año de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;Qu&eacute; utilidad puede tener el Data Mining?";
 choices[29]= new Array();
 choices[29][0] = "Predecir valores futuros en base a los datos actuales.";
 choices[29][1] = "Descubrimiento de fraude.";
 choices[29][2] = "Descubrimiento de patrones en los datos.";
 choices[29][3] = "Todas las anteriores.";
 answers[29] = choices[29][3];
 units[29] = "68";
 comments[29] = "Id Pregunta: 1815. ";


//  Id pregunta: 1879 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  La ley de servicios de la sociedad de la informaci&oacute;n y del comercio electr&oacute;nico (LSSICE) es el resultado de la transposici&oacute;n de dos directivas del Parlamento Europeo y del Consejo. &iquest;Cu&aacute;les?";
 choices[30]= new Array();
 choices[30][0] = "Directivas 2000/31/CE y 98/28/CE";
 choices[30][1] = "Directivas 2000/31/CE y 98/27/CE";
 choices[30][2] = "Directivas 2000/31/CE y 97/27/CE";
 choices[30][3] = "Directivas 2001/31/CE y 98/27/CE";
 answers[30] = choices[30][1];
 units[30] = "30";
 comments[30] = "Id Pregunta: 1879. ";


//  Id pregunta: 2250 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Dentro de los modelos que permiten estimar el coste de un proyecto, la jerarqu&iacute;a COCOMO (Constructive Cost Model) de Boehm en su nivel 1 o b&aacute;sico calcula el esfuerzo y el coste de desarrollo del &quot;software&quot; en funci&oacute;n de:";
 choices[31]= new Array();
 choices[31][0] = "El n&uacute;mero de personas que participan en el proyecto";
 choices[31][1] = "La experiencia y formaci&oacute;n de los analistas y programadores";
 choices[31][2] = "El tama&ntilde;o del programa expresado en l&iacute;neas estimadas de c&oacute;digo";
 choices[31][3] = "Las pruebas que hay que realizar para asegurar que el software est&eacute; libre de errores";
 answers[31] = choices[31][2];
 units[31] = "88";
 comments[31] = "Id Pregunta: 2250. ";


//  Id pregunta: 2295 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  El objetivo del modelo conceptual es:";
 choices[32]= new Array();
 choices[32][0] = "Establecer una visi&oacute;n global de los datos";
 choices[32][1] = "Establecer el detalle de las propiedades";
 choices[32][2] = "Definir las propiedades de cada entidad";
 choices[32][3] = "Definir el flujo de informaci&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "80";
 comments[32] = "Id Pregunta: 2295. ";


//  Id pregunta: 2329 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  En la programaci&oacute;n orientada a objetos, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?:";
 choices[33]= new Array();
 choices[33][0] = "La herencia define una relaci&oacute;n entre clases, donde una clase comparte la estructura o comportamiento definido en una o m&aacute;s clases";
 choices[33][1] = "La encapsulaci&oacute;n es el proceso de ocultaci&oacute;n de los detalles internos o de implementaci&oacute;n de un objeto";
 choices[33][2] = "Un objeto es una instancia de una clase y cada clase tiene cero o m&aacute;s instancias";
 choices[33][3] = "Las instancias de una metaclase no son clases";
 answers[33] = choices[33][3];
 units[33] = "82";
 comments[33] = "Id Pregunta: 2329. ";


//  Id pregunta: 2345 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  En programaci&oacute;n orientada a objetos:";
 choices[34]= new Array();
 choices[34][0] = "Los objetos son m&oacute;dulos que contienen s&oacute;lo datos, de cualquier tipo";
 choices[34][1] = "Los objetos son m&oacute;dulos que contienen los datos y las instrucciones u operaciones que manipulan esos datos";
 choices[34][2] = "Los objetos pueden ser tratados como cualquier otro dato mediante un lenguaje procedural";
 choices[34][3] = "No existe una concepci&oacute;n din&aacute;mica del objeto como una entidad que exista en tiempo de ejecuci&oacute;n";
 answers[34] = choices[34][1];
 units[34] = "82";
 comments[34] = "Id Pregunta: 2345. ";


//  Id pregunta: 2370 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  Es cierto decir que la &quot;ingenier&iacute;a inversa&quot;:";
 choices[35]= new Array();
 choices[35][0] = "Crea un sistema distinto al original con el mismo nivel de abstracci&oacute;n.";
 choices[35][1] = "No se usa demasiado.";
 choices[35][2] = "Crea una representaci&oacute;n del sistema distinta a la original o con un grado de abstracci&oacute;n normalmente superior.";
 choices[35][3] = "El grado de abstracci&oacute;n que se obtiene es menor, pero eso hace que el proceso sea m&aacute;s din&aacute;mico.";
 answers[35] = choices[35][2];
 units[35] = "91";
 comments[35] = "Id Pregunta: 2370. ";


//  Id pregunta: 2542 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Los ficheros inversos se utilizan preferentemente en:";
 choices[36]= new Array();
 choices[36][0] = "Bases de datos relacionales";
 choices[36][1] = "Bases de datos jer&aacute;rquicas";
 choices[36][2] = "Sistemas de recuperaci&oacute;n de informaci&oacute;n";
 choices[36][3] = "Bases de datos reticulares";
 answers[36] = choices[36][2];
 units[36] = "96";
 comments[36] = "Id Pregunta: 2542. ";


//  Id pregunta: 2554 Año de creación de pregunta: 2004-01-01
 questions[37]= "38)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[37]= new Array();
 choices[37][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[37][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[37][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[37][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[37] = choices[37][2];
 units[37] = "87,88,92";
 comments[37] = "Id Pregunta: 2554. Pregunta Junta Andalucia - A";


//  Id pregunta: 2630 Año de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Qu&eacute; contendr&aacute; el diagrama de contexto en un DFD?";
 choices[38]= new Array();
 choices[38][0] = "Entidades Extermas, Procesos, Flujos de Datos";
 choices[38][1] = "Almacenes de Datos, Prodesos, Entidades Extrenas.";
 choices[38][2] = "Entidades Externas, Un solo Proceso, Flujos de Datos.";
 choices[38][3] = "Entidades Extermas, Procesos, Flujos de Datos, Almacenes de Datos";
 answers[38] = choices[38][2];
 units[38] = "81";
 comments[38] = "Id Pregunta: 2630. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2970 Año de creación de pregunta: 2004-01-01
 questions[39]= "40)  &iquest;Cu&aacute;les de los siguientes mecanismo no sirve para garantizar la privacidad de las comunicaciones por correo electr&oacute;nico?";
 choices[39]= new Array();
 choices[39][0] = "GPG";
 choices[39][1] = "PGP";
 choices[39][2] = "S/MIME";
 choices[39][3] = "Todos los anteriores valen";
 answers[39] = choices[39][3];
 units[39] = "106";
 comments[39] = "Id Pregunta: 2970. ";


//  Id pregunta: 3008 Año de creación de pregunta: 2004-01-01
 questions[40]= "41)  &iquest;Es admisible cierto grado de inconsistencia temporal en la informaci&oacute;n dado sistemas como X.500 o LDAP?";
 choices[40]= new Array();
 choices[40][0] = "S&iacute;";
 choices[40][1] = "No";
 choices[40][2] = "S&iacute;, pero s&oacute;lo para LDAP";
 choices[40][3] = "ninguna de las anteriores";
 answers[40] = choices[40][0];
 units[40] = "106";
 comments[40] = "Id Pregunta: 3008. ";


//  Id pregunta: 3316 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  &iquest;Qu&eacute; topolog&iacute;a tiene una red ethernet cableada con 10 Base T?:";
 choices[41]= new Array();
 choices[41][0] = "Bus";
 choices[41][1] = "Estrella";
 choices[41][2] = "Anillo";
 choices[41][3] = "Doble bus";
 answers[41] = choices[41][1];
 units[41] = "97";
 comments[41] = "Id Pregunta: 3316. ";


//  Id pregunta: 3332 Año de creación de pregunta: 2002-01-01
 questions[42]= "43)  Al servicio que permite a un usuario transmitir una imagen est&aacute;tica de una c&aacute;mara, a trav&eacute;s de la l&iacute;nea telef&oacute;nica, a un usuario remotamente situado, se denomina:";
 choices[42]= new Array();
 choices[42][0] = "Videoconferencia";
 choices[42][1] = "Video de baja velocidad";
 choices[42][2] = "Bases de datos de im&aacute;genes";
 choices[42][3] = "No existe este servicio";
 answers[42] = choices[42][1];
 units[42] = "108";
 comments[42] = "Id Pregunta: 3332. ";


//  Id pregunta: 3379 Año de creación de pregunta: 2002-01-01
 questions[43]= "44)  El interfaz A-bis en GSM es el que va entre:";
 choices[43]= new Array();
 choices[43][0] = "BTS y BSC";
 choices[43][1] = "MSC y HLR";
 choices[43][2] = "HLR y VLR";
 choices[43][3] = "BSC y MSC";
 answers[43] = choices[43][0];
 units[43] = "108";
 comments[43] = "Id Pregunta: 3379. ";


//  Id pregunta: 3403 Año de creación de pregunta: 2002-01-01
 questions[44]= "45)  Entre los equipos de interconexi&oacute;n de redes:";
 choices[44]= new Array();
 choices[44][0] = "Los bridges operan a nivel de red";
 choices[44][1] = "Los repetidores operan a nivel de MAC";
 choices[44][2] = "Los bridges realizan funciones de autoaprendizaje, filtrado y reenvio";
 choices[44][3] = "Las pasarelas o gateways son elementos de interconexi&oacute;n independientes del protocolo de nivel de red";
 answers[44] = choices[44][2];
 units[44] = "102";
 comments[44] = "Id Pregunta: 3403. ";


//  Id pregunta: 3909 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Qu&eacute; no se usa en la s&iacute;ntesis de voz?";
 choices[45]= new Array();
 choices[45][0] = " fonemas";
 choices[45][1] = " difonemas";
 choices[45][2] = "palabras";
 choices[45][3] = "semis&iacute;labas";
 answers[45] = choices[45][2];
 units[45] = "94";
 comments[45] = "Id Pregunta: 3909. ";


//  Id pregunta: 4060 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  Cual de los siguientes dispositivos es m&aacute;s barato";
 choices[46]= new Array();
 choices[46][0] = "Adaptador Ethernet";
 choices[46][1] = "Adaptador Bluetooth";
 choices[46][2] = "Adaptador Wi-Fi";
 choices[46][3] = "Adaptador Wi-Max";
 answers[46] = choices[46][1];
 units[46] = "112";
 comments[46] = "Id Pregunta: 4060. ";


//  Id pregunta: 4071 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes categorias de software no estan incluidas tipicamente en un ERP ?";
 choices[47]= new Array();
 choices[47][0] = "Gesti&oacute;n de Nomina";
 choices[47][1] = "Gesti&oacute;n de RRHH";
 choices[47][2] = "Gesti&oacute;n de Contabilidad";
 choices[47][3] = "Gesti&oacute;n de Clientes";
 answers[47] = choices[47][3];
 units[47] = "65";
 comments[47] = "Id Pregunta: 4071. ";


//  Id pregunta: 4349 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  La red de investigaci&oacute;n espa&ntilde;ola encargada de dar servicio Internet a universidades y centros de investigaci&oacute;n es:";
 choices[48]= new Array();
 choices[48][0] = "La intranet del CSIC";
 choices[48][1] = "No existe una red propia de investigaci&oacute;n, utilizando los servicios que ofrece Internet.";
 choices[48][2] = "RedIRIS.";
 choices[48][3] = "La Intranet Administrativa.";
 answers[48] = choices[48][2];
 units[48] = "103";
 comments[48] = "Id Pregunta: 4349. ";


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


//  Id pregunta: 4478 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Que son el &quot;modelo cebolla&quot; y el &quot;modelo tostadora&quot;?";
 choices[50]= new Array();
 choices[50][0] = "Modelos de ciclo de vida de sistemas de informaci&oacute;n.";
 choices[50][1] = "Modelos de integraci&oacute;n de herramientas CASE.";
 choices[50][2] = "Modelos de diagrama de flujo de datos.";
 choices[50][3] = "Modelos de objetos para sistemas orientados al objeto.";
 answers[50] = choices[50][1];
 units[50] = "";
 comments[50] = "Id Pregunta: 4478. ";


//  Id pregunta: 4528 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Que son las siguientes herramientas comerciales: DESIGNER de Oracle, EASY CASE de Evergreen, PREDICT CASE de Software AG y ROSE de Rational?";
 choices[51]= new Array();
 choices[51][0] = "Herramientas CASE de pruebas y generaci&oacute;n de c&oacute;digo.";
 choices[51][1] = "Herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[51][2] = "Herramientas para Ia m&eacute;trica de software.";
 choices[51][3] = "Herramientas CASE de an&aacute;lisis y dise&ntilde;o.";
 answers[51] = choices[51][3];
 units[51] = "";
 comments[51] = "Id Pregunta: 4528. ";


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


//  Id pregunta: 4889 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el arrendamiento de un ordenador tiene la categor&iacute;a de:";
 choices[53]= new Array();
 choices[53][0] = "Contrato de &quot;leasing&quot;";
 choices[53][1] = "Contrato de servicios";
 choices[53][2] = "Contrato de suministros";
 choices[53][3] = "Contrato de arrendamiento";
 answers[53] = choices[53][2];
 units[53] = "41";
 comments[53] = "Id Pregunta: 4889. ";


//  Id pregunta: 5082 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Seg&uacute;n el m&eacute;todo del c&aacute;mino cr&iacute;tico, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[54]= new Array();
 choices[54][0] = "El camino cr&iacute;tico determina el tiempo m&aacute;s corto que podemos tardar en hacer el proyecto si se dispone detodos los recursos necesarios";
 choices[54][1] = "Las actividades cr&iacute;ticas no tienen holgura.";
 choices[54][2] = "Una actividad es cr&iacute;tica cuando no se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificarla duraci&oacute;n total del proyecto.";
 choices[54][3] = "La concatenaci&oacute;n de las todas las actividades de un proyecto es el camino cr&iacute;tico.";
 answers[54] = choices[54][3];
 units[54] = "77";
 comments[54] = "Id Pregunta: 5082. Examen TIC A 2007";


//  Id pregunta: 5200 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  En el an&aacute;lisis DAFO, la definici&oacute;n &ldquo;Son eventos o circunstancias que se espera que ocurran o pueden inducirse a que ocurran en el mundo exterior y que podr&iacute;an tener un impacto positivo en el futuro de la Organizaci&oacute;n&rdquo; se corresponde con:";
 choices[55]= new Array();
 choices[55][0] = "Debilidades";
 choices[55][1] = "Amenazas";
 choices[55][2] = "Fortalezas";
 choices[55][3] = "Oportunidades";
 answers[55] = choices[55][3];
 units[55] = "77";
 comments[55] = "Id Pregunta: 5200. ";


//  Id pregunta: 5523 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  La norma para las medidas de la resoluci&oacute;n en c&aacute;maras electr&oacute;nicas es";
 choices[56]= new Array();
 choices[56][0] = "ISO 12233";
 choices[56][1] = "ISO 20000";
 choices[56][2] = "IEEE 12333";
 choices[56][3] = "ANSI 568";
 answers[56] = choices[56][0];
 units[56] = "93";
 comments[56] = "Id Pregunta: 5523. ";


//  Id pregunta: 5589 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Qu&eacute; permite la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico, seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[57]= new Array();
 choices[57][0] = "Permite a los empresarios elaborar las ofertas, para enviarlas al &oacute;rgano de contrataci&oacute;n";
 choices[57][1] = "Permite al estado controlar el conjunto de contratos que est&aacute;n actualmente en curso";
 choices[57][2] = "Es una base de datos en la que se incluye toda la informaci&oacute;n sobre contratos celebrados con la administraci&oacute;n a lo largo de la historia";
 choices[57][3] = "Permite a los &oacute;rganos de contrataci&oacute;n dar publicidad a sus convocatorias y resultados a trav&eacute;s de internet";
 answers[57] = choices[57][3];
 units[57] = "41";
 comments[57] = "Id Pregunta: 5589. ";


//  Id pregunta: 5726 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  Indique la afirmaci&oacute;n correcta. Seg&uacute;n M&eacute;trica v 3, en las Relaciones 1:N se propaga el identificador de la entidad de cardinalidad m&aacute;xima 1 a la que es N, teniendo en cuenta que:";
 choices[58]= new Array();
 choices[58][0] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es clave ajena en la tabla a la que se ha propagado.";
 choices[58][1] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es la clave primaria en la tabla a la que se ha propagado.";
 choices[58][2] = "Si la relaci&oacute;n es de dependencia, la clave propagada es la clave ajena.";
 choices[58][3] = "Si la relaci&oacute;n es de dependencia la clave propagada es la clave primaria.";
 answers[58] = choices[58][0];
 units[58] = "58";
 comments[58] = "Id Pregunta: 5726. MAP 2008 A2";


//  Id pregunta: 5741 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Tiene la firma electr&oacute;nica el mismo valor ante la ley que la firma manuscrita?";
 choices[59]= new Array();
 choices[59][0] = "S&iacute;, siempre";
 choices[59][1] = "No, en ning&uacute;n caso";
 choices[59][2] = "S&iacute;, si es firma electr&oacute;nica avanzada";
 choices[59][3] = "S&iacute;, si es firma electr&oacute;nica reconocida";
 answers[59] = choices[59][3];
 units[59] = "30";
 comments[59] = "Id Pregunta: 5741. ";


//  Id pregunta: 5844 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l era clasificado por CISCO como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace";
 choices[60]= new Array();
 choices[60][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol)";
 choices[60][1] = "IGRP (Interior Gateway Routing Protocol)";
 choices[60][2] = "OSPF (Open Shortest Path First)";
 choices[60][3] = "RIPv2 (Routing Information Protocol ver. 2)";
 answers[60] = choices[60][0];
 units[60] = "102";
 comments[60] = "Id Pregunta: 5844. MAP 2008 A1";


//  Id pregunta: 5884 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  En relaci&oacute;n a &quot;Internet Assigned Numbers Authority&quot; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[61]= new Array();
 choices[61][0] = "IANA coordina a nivel global el &quot;DNS root&quot;";
 choices[61][1] = "IANA gestiona el dominio .int (top-level)";
 choices[61][2] = "IANA asigna las direcciones IP";
 choices[61][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board";
 answers[61] = choices[61][2];
 units[61] = "112";
 comments[61] = "Id Pregunta: 5884. MAP 2008 A1";


//  Id pregunta: 5922 Año de creación de pregunta: 2009-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de ataque activo?";
 choices[62]= new Array();
 choices[62][0] = "Interrupci&oacute;n";
 choices[62][1] = "Interceptaci&oacute;n";
 choices[62][2] = "Modificaci&oacute;n";
 choices[62][3] = "Generaci&oacute;n";
 answers[62] = choices[62][1];
 units[62] = "111";
 comments[62] = "Id Pregunta: 5922. MAP 2008 A1";


//  Id pregunta: 5943 Año de creación de pregunta: 2009-01-01
 questions[63]= "64)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[63]= new Array();
 choices[63][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursos del mismo";
 choices[63][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permite compartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes";
 choices[63][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemas operativos en una m&aacute;quina";
 choices[63][3] = "Es un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de la Virtualization API Standard que realizan los sistemas operativos hu&eacute;spedes";
 answers[63] = choices[63][2];
 units[63] = "119";
 comments[63] = "Id Pregunta: 5943. ";


//  Id pregunta: 6144 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  Con respecto al ancho de banda de la conexi&oacute;n ADSL de un abonado";
 choices[64]= new Array();
 choices[64][0] = "La tasa de transferencia no es sensible a la distancia del abonado a la central, de forma que es similar a todos los abonados de una misma central";
 choices[64][1] = "La tasa de transferencia es sensible a la distancia del abonado a la central, de forma que los abonados que est&aacute;n m&aacute;s cerca de la central tendr&aacute;n posibilidad de velocidades m&aacute;s altas";
 choices[64][2] = "La tasa de transferencia del abonado depende principalmente del n&uacute;mero de abonados que est&aacute;n conectados simult&aacute;neamente, en ning&uacute;n caso de la distancia a la central";
 choices[64][3] = "Todas las respuestas anteriores son falsas";
 answers[64] = choices[64][0];
 units[64] = "107";
 comments[64] = "Id Pregunta: 6144. ";


//  Id pregunta: 6212 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Se&ntilde;ale la sentencia correcta:";
 choices[65]= new Array();
 choices[65][0] = "La complejidad ciclom&aacute;tica es una m&eacute;trica del software que proporciona una medici&oacute;n cualitativa de la complejidad l&oacute;gica de un programa";
 choices[65][1] = "Si se usa la complejidad ciclom&aacute;tica en el contexto del m&eacute;todo de prueba del camino b&aacute;sico, el valor calculado como complejidad ciclom&aacute;tica define el n&uacute;mero de caminos dependientes del conjunto b&aacute;sico de un programa";
 choices[65][2] = "En las pruebas del camino b&aacute;sico, los casos de prueba obtenidos del conjunto b&aacute;sico garantizan que durante la prueba se ejecuta una sola vez cada sentencia del programa";
 choices[65][3] = "Dentro de la prueba del camino b&aacute;sico, un camino independiente est&aacute; constituido por lo menos por una arista que no haya sido recorrida anteriormente a la definici&oacute;n del camino";
 answers[65] = choices[65][3];
 units[65] = "88";
 comments[65] = "Id Pregunta: 6212. TICB-2009, bloque desarrollo";


//  Id pregunta: 6471 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Indique cu&aacute;l de los siguientes enunciados sobre principios y conceptos fundamentales del Dise&ntilde;o del Software es FALSO:";
 choices[66]= new Array();
 choices[66][0] = "Los principios del dise&ntilde;o s&oacute;lo sirven de gu&iacute;a al ingeniero del software al principio del proceso de dise&ntilde;o. Los conceptos de dise&ntilde;o no proporcionan los criterios b&aacute;sicos para la calidad del dise&ntilde;o.";
 choices[66][1] = "La modularidad (tanto en el programa como en los datos) y el concepto de abstracci&oacute;n permiten que el dise&ntilde;ador simplifique y reutilice los componentes del software.";
 choices[66][2] = "El refinamiento proporciona un mecanismo para representar sucesivas capas de datos funcionales.";
 choices[66][3] = "La ocultaci&oacute;n de informaci&oacute;n y la independencia funcional proporcionan la heur&iacute;stica para conseguir una modularidad efectiva.";
 answers[66] = choices[66][0];
 units[66] = "84";
 comments[66] = "Id Pregunta: 6471. Castilla La Mancha 2009";


//  Id pregunta: 6533 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Los desajustes en los cumplimientos de las expectativas y especificaciones de los servicios determinan";
 choices[67]= new Array();
 choices[67][0] = "El grado de satisfacci&oacute;n de los usuarios";
 choices[67][1] = "Percepci&oacute;n del servicio y expectativas previas de los usuarios";
 choices[67][2] = "A y B son correctas";
 choices[67][3] = "A y B son incorrectas";
 answers[67] = choices[67][2];
 units[67] = "92";
 comments[67] = "Id Pregunta: 6533. ";


//  Id pregunta: 7152 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  En un disco duro, la unidad m&aacute;s peque&ntilde;a en la que se puede escribir o leer informaci&oacute;n es:";
 choices[68]= new Array();
 choices[68][0] = "La pista";
 choices[68][1] = "El cilindro";
 choices[68][2] = "La cabeza de lectura/escritura";
 choices[68][3] = "El sector";
 answers[68] = choices[68][3];
 units[68] = "48";
 comments[68] = "Id Pregunta: 7152. Examen TIC B 2009";


//  Id pregunta: 7356 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  El m&eacute;todo Pay-Back de an&aacute;lisis de una inversi&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Prima las inversiones con menor tiempo de recuperaci&oacute;n";
 choices[69][1] = "Es un m&eacute;todo din&aacute;mico";
 choices[69][2] = "Tiene en cuenta el momento en el que se producen los flujos de caja";
 choices[69][3] = "Todas son INCORRECTAS";
 answers[69] = choices[69][0];
 units[69] = "38";
 comments[69] = "Id Pregunta: 7356. ";


//  Id pregunta: 7783 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   La direcci&oacute;n de broadcast de una red de &aacute;rea local clase A, siendo uno de sus nodos la direcci&oacute;n IP  100.254.254.254, es:";
 choices[70]= new Array();
 choices[70][0] = " 100.255.255.255.";
 choices[70][1] = " 0.0.0.255.";
 choices[70][2] = " 100.0.0.0.";
 choices[70][3] = " 100.254.254.255.";
 answers[70] = choices[70][0];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7783. Map 2005";


//  Id pregunta: 7807 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   En el lenguaje SQL, un valor NULL:";
 choices[71]= new Array();
 choices[71][0] = " Significa blancos o ceros.";
 choices[71][1] = " Puede ser utilizado en una instrucci&oacute;n SELECT.";
 choices[71][2] = " Se utiliza para referirse a la informaci&oacute;n que es incompleta o de la que no se dispone.";
 choices[71][3] = " Ha de ser igual a cualquier otro valor NULL en cualquier sistema.";
 answers[71] = choices[71][2];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7807. Map 2005";


//  Id pregunta: 7828 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   En referencia al lenguaje XML, &iquest;cu&aacute;l de las siguientes opciones es la correcta?";
 choices[72]= new Array();
 choices[72][0] = " Las hojas de estilo CSS no pueden ser utilizadas con HTML.";
 choices[72][1] = " XSL puede usarse para transformar datos XML a documentos HTML/CSS en un servidor Web.";
 choices[72][2] = " CSS puede ejecutar cualquier l&oacute;gica basada en los datos.";
 choices[72][3] = " CSS y XSL no pueden usarse en paralelo.";
 answers[72] = choices[72][1];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7828. Map 2005";


//  Id pregunta: 7856 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   En el entorno de la arquitectura GNOME, seleccione la afirmaci&oacute;n correcta en relaci&oacute;n con DII:";
 choices[73]= new Array();
 choices[73][0] = " Es un lenguaje para implementar interfaces CORBA.";
 choices[73][1] = " Es un servicio que ofrece objetos persistentes que representan la informaci&oacute;n IDL de los interfaces disponibles en CORBA.";
 choices[73][2] = " Es un protocolo de comunicaciones de CORBA.";
 choices[73][3] = " Es una interfaz que nos permite la construcci&oacute;n din&aacute;mica de invocaciones para un determinado objeto.";
 answers[73] = choices[73][3];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7856. Map 2005";


//  Id pregunta: 7940 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   En el proceso de reconocimiento del habla, el algoritmo Dynamic Time Warping (DTW) se utiliza para:";
 choices[74]= new Array();
 choices[74][0] = " Evitar el uso de plantillas.";
 choices[74][1] = " Evitar la alineaci&oacute;n temporal.";
 choices[74][2] = " Reconocer palabras aisladas y habla continua.";
 choices[74][3] = " Conseguir resultados &oacute;ptimos con vocabularios de 5.000 palabras.";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7940. Map 2006";


//  Id pregunta: 8172 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[75]= new Array();
 choices[75][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[75][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[75][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[75][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[75] = choices[75][1];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8172. Examen TIC A1 2010";


//  Id pregunta: 8174 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  La Recomendaci&oacute;n UIT-T I.411 &quot;Configuraciones de referencia de las interfaces Usuario-Red de la RDSI&quot;, define el punto de referencia T entre:";
 choices[76]= new Array();
 choices[76][0] = "La Terminaci&oacute;n de Red 1 (NT1) y la Terminaci&oacute;n de L&iacute;nea (LT).";
 choices[76][1] = "La Terminaci&oacute;n de Red 2 (NT2) y la Terminaci&oacute;n de Red 1 (NT1).";
 choices[76][2] = "El Equipo Terminal de Tipo 1 (TE1) y el Adaptador de Terminal (TA).";
 choices[76][3] = "El Equipo Terminal de Tipo 2 (TE2) y el Adaptador de Terminal (TA).";
 answers[76] = choices[76][1];
 units[76] = "103";
 comments[76] = "Id Pregunta: 8174. Examen TIC A1 2010";


//  Id pregunta: 8214 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  En la aprobaci&oacute;n del Plan de Sistemas de Informaci&oacute;n en la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 participan:";
 choices[77]= new Array();
 choices[77][0] = "Comit&eacute; de Direcci&oacute;n y jefe de proyecto del PSI.";
 choices[77][1] = "Comit&eacute; de Direcci&oacute;n, jefe de proyecto y usuarios expertos.";
 choices[77][2] = "Comit&eacute; de Direcci&oacute;n, consultores y jefe de proyecto.";
 choices[77][3] = "Jefe de proyecto, responsable de seguridad y usuarios expertos.";
 answers[77] = choices[77][0];
 units[77] = "86";
 comments[77] = "Id Pregunta: 8214. Examen TIC A1 2010";


//  Id pregunta: 8230 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  En lo relativo a la rentabilidad de las inversiones, &iquest;cu&aacute;l de los siguientes m&eacute;todos es un m&eacute;todo din&aacute;mico de selecci&oacute;n de inversiones?";
 choices[78]= new Array();
 choices[78][0] = "VAN (Valor Actual Neto). ";
 choices[78][1] = "El m&eacute;todo del flujo total por unidad monetaria comprometida.";
 choices[78][2] = "El m&eacute;todo de comparaci&oacute;n de costes.";
 choices[78][3] = "El m&eacute;todo del payback";
 answers[78] = choices[78][0];
 units[78] = "38";
 comments[78] = "Id Pregunta: 8230. Examen TIC A2 2010";


//  Id pregunta: 8312 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes NO es una tecnolog&iacute;a xDSL? ";
 choices[79]= new Array();
 choices[79][0] = "VDSL.";
 choices[79][1] = "DDSL. ";
 choices[79][2] = "HDSL. ";
 choices[79][3] = "ADSL. ";
 answers[79] = choices[79][1];
 units[79] = "107";
 comments[79] = "Id Pregunta: 8312. Examen TIC A2 2010";


//  Id pregunta: 8329 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es el est&aacute;ndar de la Organizaci&oacute;n Internacional para la Normalizaci&oacute;n (ISO) para el archivo de documentos electr&oacute;nicos PDF/A?";
 choices[80]= new Array();
 choices[80][0] = "ISO 14000-1";
 choices[80][1] = "ISO 18001";
 choices[80][2] = "ISO 19005-1";
 choices[80][3] = "ISO 690";
 answers[80] = choices[80][2];
 units[80] = "93";
 comments[80] = "Id Pregunta: 8329. Examen TIC A2 2010";


//  Id pregunta: 8380 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  La velocidad de transferencia base (1X) de un disco Blu-ray es de:";
 choices[81]= new Array();
 choices[81][0] = "54 Mbits/s.";
 choices[81][1] = "4,5 MBytes/s.";
 choices[81][2] = "36 MBytes/s.";
 choices[81][3] = "9 MBytes/s.";
 answers[81] = choices[81][1];
 units[81] = "48";
 comments[81] = "Id Pregunta: 8380. Examen TIC A2 2010";


//  Id pregunta: 8461 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de estos NO es un est&aacute;ndar del W3C para Web Services?:";
 choices[82]= new Array();
 choices[82][0] = "UDDI";
 choices[82][1] = "SOAP";
 choices[82][2] = "WSDL";
 choices[82][3] = "XML";
 answers[82] = choices[82][0];
 units[82] = "51";
 comments[82] = "Id Pregunta: 8461. Analista Ayto. Madrid 2010";


//  Id pregunta: 8617 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[83]= new Array();
 choices[83][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[83][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[83][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[83][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[83] = choices[83][0];
 units[83] = "57,58";
 comments[83] = "Id Pregunta: 8617. Examen TIC A2 2010 interna";


//  Id pregunta: 8954 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Para qu&eacute; se utiliza el comando fdisk?:";
 choices[84]= new Array();
 choices[84][0] = "Para formatear una partici&oacute;n";
 choices[84][1] = "Para formatear un disco completo";
 choices[84][2] = "Para crear una partici&oacute;n";
 choices[84][3] = "Para crear i-nodos";
 answers[84] = choices[84][2];
 units[84] = "53,54";
 comments[84] = "Id Pregunta: 8954. ";


//  Id pregunta: 9009 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  No tiene la consideraci&oacute;n de Autoridad Nacional de Reglamentaci&oacute;n de Telecomunicaciones, de conformidad con el art. 46 de la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones:";
 choices[85]= new Array();
 choices[85][0] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[85][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[85][2] = "El Gobierno.";
 choices[85][3] = "Los &oacute;rganos superiores y directivos del Ministerio de Econom&iacute;a y Competitividad que, de conformidad con la estructura org&aacute;nica del departamento, asuman las competencias asignadas a este ministerio en materias reguladas por esta Ley.";
 answers[85] = choices[85][1];
 units[85] = "110";
 comments[85] = "Id Pregunta: 9009. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9148 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;En qu&eacute; se diferencia la memoria flash de tipo NOR y la de tipo NAND?";
 choices[86]= new Array();
 choices[86][0] = "La de NAND usa un t&uacute;nel de inyecci&oacute;n para la escritura y para el borrado un t&uacute;nel de &ldquo;soltado&rdquo;";
 choices[86][1] = "Tienen un coste bastante inferior.";
 choices[86][2] = "S&oacute;lo permiten acceso secuencial (m&aacute;s orientado a dispositivos de almacenamiento masivo) frente a las memorias flash basadas en NOR que permiten lectura de acceso aleatorio.";
 choices[86][3] = "Todas son correctas.";
 answers[86] = choices[86][3];
 units[86] = "47";
 comments[86] = "Id Pregunta: 9148. ";


//  Id pregunta: 9192 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[87]= new Array();
 choices[87][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[87][1] = "A traves de la ley de patentes";
 choices[87][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[87][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[87] = choices[87][3];
 units[87] = "36";
 comments[87] = "Id Pregunta: 9192. ";


//  Id pregunta: 9432 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Las tasas en materia de telecomunicaciones tiene una serie de fines. Indique el falso:";
 choices[88]= new Array();
 choices[88][0] = "Cubrir los gastos administrativos que ocasione el trabajo de regulaci&oacute;n";
 choices[88][1] = "Cubrir los gastos que ocasionen la gesti&oacute;n, control y ejecuci&oacute;n del r&eacute;gimen establecido en la ley";
 choices[88][2] = "Cubrir los gastos relativos al fomento del despliegue de redes de telecomunicaci&oacute;n";
 choices[88][3] = "Cubrir los gastos de cooperaci&oacute;n internacional, armonizaci&oacute;n y normalizaci&oacute;n y el an&aacute;lisis de mercado";
 answers[88] = choices[88][2];
 units[88] = "110";
 comments[88] = "Id Pregunta: 9432. ";


//  Id pregunta: 9470 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Indique la afirmaci&oacute;n verdadera en relaci&oacute;n con el protocolo PEM de seguridad en el correo electr&oacute;nico";
 choices[89]= new Array();
 choices[89][0] = "PEM es un protocolo de seguridad extremo a extremo entre Agentes de Usuario (UA)";
 choices[89][1] = "PEM proporciona autenticaci&oacute;n en origen y confidencialidad, pero no proporciona integridad";
 choices[89][2] = "Sus siglas hacen referencia a &quot;Private Extended Mail&quot;";
 choices[89][3] = "Todas las anteriores son verdaderas";
 answers[89] = choices[89][0];
 units[89] = "106";
 comments[89] = "Id Pregunta: 9470. ";


//  Id pregunta: 9578 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[90]= new Array();
 choices[90][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[90][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[90][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[90][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea";
 answers[90] = choices[90][2];
 units[90] = "43";
 comments[90] = "Id Pregunta: 9578. Examen TIC A1 2011";


//  Id pregunta: 9715 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[91]= new Array();
 choices[91][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[91][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[91][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[91][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[91] = choices[91][2];
 units[91] = "102";
 comments[91] = "Id Pregunta: 9715. Examen TIC-A1 2013";


//  Id pregunta: 9726 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  Atendiendo al est&aacute;ndar ISO 22301 en un Plan de Recuperaci&oacute;n ante Desastres, el Objetivo de Punto de Recuperaci&oacute;n (Recovery Point Objective RPO) es";
 choices[92]= new Array();
 choices[92][0] = "el nivel de servicios a proporcionar en modo alterno hasta que se recupere la situaci&oacute;n normal.";
 choices[92][1] = "el tiempo que la organizaci&oacute;n puede soportar desde que se produce el fallo hasta que se recuperan los servicios cr&iacute;ticos.";
 choices[92][2] = "el tiempo m&aacute;ximo tolerable de interrupci&oacute;n.";
 choices[92][3] = "la p&eacute;rdida m&aacute;xima de datos tolerable en caso de interrupci&oacute;n.";
 answers[92] = choices[92][3];
 units[92] = "32";
 comments[92] = "Id Pregunta: 9726. Examen TIC-A1 2013";


//  Id pregunta: 9733 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Se&ntilde;ale de entre las siguientes, la norma que establece los requisitos para el dise&ntilde;o y desarrollo de la documentaci&oacute;n del software de usuario como parte de los procesos del ciclo de vida:";
 choices[93]= new Array();
 choices[93][0] = "ISO/IEC 26514";
 choices[93][1] = "ISO 7816.";
 choices[93][2] = "ISO/IEC 12207.";
 choices[93][3] = "ISO 8859.";
 answers[93] = choices[93][0];
 units[93] = "76";
 comments[93] = "Id Pregunta: 9733. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9742 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[94]= new Array();
 choices[94][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[94][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[94][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[94][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[94] = choices[94][3];
 units[94] = "59";
 comments[94] = "Id Pregunta: 9742. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9771 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, la funci&oacute;n sancionadora es competencia de:";
 choices[95]= new Array();
 choices[95][0] = "MITyC";
 choices[95][1] = "Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[95][2] = "Ministro del ministerio que ofrezca los datos si las infracciones son muy graves y un rango m&iacute;nimo de Direcci&oacute;n General para infracciones graves y leves";
 choices[95][3] = "Direcci&oacute;n General que haya publicado los datos.";
 answers[95] = choices[95][2];
 units[95] = "22";
 comments[95] = "Id Pregunta: 9771. ";


//  Id pregunta: 9958 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[96]= new Array();
 choices[96][0] = "La persistencia";
 choices[96][1] = "Los procesos de transformaci&oacute;n.";
 choices[96][2] = "El flujo de la informaci&oacute;n.";
 choices[96][3] = "La herencia";
 answers[96] = choices[96][3];
 units[96] = "81";
 comments[96] = "Id Pregunta: 9958. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10522 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Cu&aacute;l de los siguientes organismos no forma parte de la Comisi&oacute;n Interministerial sobre radiofrecuencias y salud";
 choices[97]= new Array();
 choices[97][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[97][1] = "El Ministerio de Sanidad, Servicios Sociales e Igualdad ";
 choices[97][2] = "El Instituto de Salud Carlos III por parte del Ministerio de Econom&iacute;a y Competitividad.";
 choices[97][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 answers[97] = choices[97][3];
 units[97] = "110";
 comments[97] = "Id Pregunta: 10522. ";


//  Id pregunta: 10547 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  El primer paso a la hora de desarrollar un Plan de Continuidad de Negocio es:";
 choices[98]= new Array();
 choices[98][0] = "Clasificar los sistemas seg&uacute;n su importancia";
 choices[98][1] = "Establecer una estrategia de recuperaci&oacute;n de desastres";
 choices[98][2] = "determinar el tiempo cr&iacute;tico de recuperaci&oacute;n";
 choices[98][3] = "Realizar una clasificaci&oacute;n del riesgo";
 answers[98] = choices[98][0];
 units[98] = "31, 32, 33";
 comments[98] = "Id Pregunta: 10547. ";


//  Id pregunta: 10548 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Los auditores que han participado en el desarrollo de un sistema podr&iacute;an haber perdido su independencia si: ";
 choices[99]= new Array();
 choices[99][0] = "Realizan una revisi&oacute;n del desarrollo del sistema ";
 choices[99][1] = "Recomiendan medidas de mejora";
 choices[99][2] = "Realizan una evaluaci&oacute;n independiente de la aplicaci&oacute;n despu&eacute;s de su puesta en producci&oacute;n ";
 choices[99][3] = "Participan activamente en el dise&ntilde;o e implementaci&oacute;n del sistema de aplicaci&oacute;n";
 answers[99] = choices[99][3];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10548. La independencia puede verse afectada si el auditor se involucra activamente en el dise&ntilde;o e implementaci&oacute;n del sistema. ";


