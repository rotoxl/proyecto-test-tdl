/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 53 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cuando entr&oacute; en vigor la LOPD?:";
 choices[0]= new Array();
 choices[0][0] = "Diciembre de 1999";
 choices[0][1] = "Enero de 2000";
 choices[0][2] = "Febrero de 1993";
 choices[0][3] = "Enero de 1999";
 answers[0] = choices[0][1];
 units[0] = "29";
 comments[0] = "Id Pregunta: 53. ";


//  Id pregunta: 58 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;En qu&eacute; fuentes se encuentran las normas a aplicar sobre sistemas abiertos en la Administraci&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "CIABSI y CSI";
 choices[1][1] = "MAP y MJI";
 choices[1][2] = "Normas ISO, X/OPEN y EPHOS";
 choices[1][3] = "ANSI, AENOR, DIN e IRANOR";
 answers[1] = choices[1][2];
 units[1] = "40";
 comments[1] = "Id Pregunta: 58. ";


//  Id pregunta: 189 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica para la toma de decisiones individuales?";
 choices[2]= new Array();
 choices[2][0] = "Delphi";
 choices[2][1] = "Programaci&oacute;n lineal";
 choices[2][2] = "Teor&iacute;a de l&iacute;neas de espera";
 choices[2][3] = "An&aacute;lisis de redes";
 answers[2] = choices[2][0];
 units[2] = "23";
 comments[2] = "Id Pregunta: 189. Similar a examen TIC SS A 2003";


//  Id pregunta: 265 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Indicar cual de los siguientes instrumentos de informaci&oacute;n es un sistema de ayuda orientado a modelos:";
 choices[3]= new Array();
 choices[3][0] = "Informes de excepci&oacute;n";
 choices[3][1] = "Informes resumen";
 choices[3][2] = "Procesos prueba-error";
 choices[3][3] = "Consultas ad-hoc";
 answers[3] = choices[3][2];
 units[3] = "21";
 comments[3] = "Id Pregunta: 265. ";


//  Id pregunta: 269 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Indicar la afirmaci&oacute;n que no corresponde entre los objetivos fundamentales de un DSS orientado a datos:";
 choices[4]= new Array();
 choices[4][0] = "Presentar al usuario una informaci&oacute;n seleccionada para la toma de decisiones";
 choices[4][1] = "Confrontar m&uacute;ltiples criterios de decisi&oacute;n y buscar un modelo en el sistema para predecir las consecuencias de una acci&oacute;n propuesta";
 choices[4][2] = "Facilitar el conocimiento estructural del problema que permite el posterior desarrollo de un modelo formal de decisi&oacute;n";
 choices[4][3] = "Proporcionar un medio f&aacute;cil al usuario para jugar con los datos";
 answers[4] = choices[4][1];
 units[4] = "21";
 comments[4] = "Id Pregunta: 269. ";


//  Id pregunta: 438 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, el derecho de acceso s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a:";
 choices[5]= new Array();
 choices[5][0] = "12 meses";
 choices[5][1] = "6 meses";
 choices[5][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 choices[5][3] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 answers[5] = choices[5][3];
 units[5] = "29";
 comments[5] = "Id Pregunta: 438. ";


//  Id pregunta: 479 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son :";
 choices[6]= new Array();
 choices[6][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[6][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[6][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[6][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[6] = choices[6][0];
 units[6] = "40";
 comments[6] = "Id Pregunta: 479. ";


//  Id pregunta: 561 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Los modelos de optimizaci&oacute;n tratan de problemas";
 choices[7]= new Array();
 choices[7][0] = "bien comprendidos con sus caracter&iacute;sticas  cualitativas bien determinadas";
 choices[7][1] = "Debe definirse un objetivo impl&iacute;cto &uacute;nico";
 choices[7][2] = "Puede existir un procedimiento (algoritmo) viable de c&aacute;lculo, para encontrar el valor &oacute;ptimo de la funci&oacute;n objetivo";
 choices[7][3] = "En general, nunca es posibleencontrar el verdadero &oacute;ptimo global optando por encontrar una soluci&oacute;n sub&oacute;ptima que determine los valores de s&oacute;lounas pocas variables de decisi&oacute;n, al tiempo que trata a las dem&aacute;s como restricciones fijas.";
 answers[7] = choices[7][3];
 units[7] = "21";
 comments[7] = "Id Pregunta: 561. ";


//  Id pregunta: 682 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  En I+D+I, &iquest;a qu&eacute; se refiere la segunda 'I'?";
 choices[8]= new Array();
 choices[8][0] = "A implementaci&oacute;n.";
 choices[8][1] = "A instalaci&oacute;n.";
 choices[8][2] = "A innovaci&oacute;n.";
 choices[8][3] = "A internet.";
 answers[8] = choices[8][2];
 units[8] = "103";
 comments[8] = "Id Pregunta: 682. ";


//  Id pregunta: 831 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cree que puede ser posible poner 'virus' en un disquete protegido contra escritura?:";
 choices[9]= new Array();
 choices[9][0] = "No";
 choices[9][1] = "S&iacute;, usando una t&eacute;cnica especial";
 choices[9][2] = "S&oacute;lo si se formata el disco antes";
 choices[9][3] = "S&iacute;, si el disquete ya tiene virus";
 answers[9] = choices[9][0];
 units[9] = "47";
 comments[9] = "Id Pregunta: 831. ";


//  Id pregunta: 919 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es el pseudoc&oacute;digo?";
 choices[10]= new Array();
 choices[10][0] = "Un c&oacute;digo que tiene fallos.";
 choices[10][1] = "El c&oacute;digo antes de ser depurado.";
 choices[10][2] = "El c&oacute;digo de un programa que no se ha ejecutado nunca.";
 choices[10][3] = "Un m&eacute;todo de especificaci&oacute;n para comunicaciones.";
 answers[10] = choices[10][3];
 units[10] = "";
 comments[10] = "Id Pregunta: 919. ";


//  Id pregunta: 946 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Cada vez que un ciudadano utilice su tarjeta criptogr&aacute;fica CERES para firmar documentos que debe entregar a la Administraci&oacute;n, se&ntilde;ale qu&eacute; utilizaci&oacute;n estar&aacute; haciendo de las claves de cifrado:";
 choices[11]= new Array();
 choices[11][0] = "Cifrar&aacute; con su clave p&uacute;blica";
 choices[11][1] = "Cifrar&aacute; con la clave p&uacute;blica de la Administraci&oacute;n";
 choices[11][2] = "Cifrara con el certificado ra&iacute;z de la FNMT";
 choices[11][3] = "Cifrar&aacute; con su clave privada";
 answers[11] = choices[11][3];
 units[11] = "74";
 comments[11] = "Id Pregunta: 946. ";


//  Id pregunta: 951 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  COM:";
 choices[12]= new Array();
 choices[12][0] = "Es la extensi&oacute;n del sistema MS/DOS ligada a ejecutables de menos de 64 Kb";
 choices[12][1] = "Es el TLD asociado a organizaciones comerciales de EEUU";
 choices[12][2] = "Son las siglas de Component Object Model, arquitectura de desarrollo de Microsoft, previa a .NET";
 choices[12][3] = "Todas las respuestas anteriores son ciertas";
 answers[12] = choices[12][3];
 units[12] = "116";
 comments[12] = "Id Pregunta: 951. ";


//  Id pregunta: 1059 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  El Tel&eacute;grafo fue inventado en .... por: ";
 choices[13]= new Array();
 choices[13][0] = "1794, Claude Chapp&eacute;.";
 choices[13][1] = "1844, Samuel Morse.";
 choices[13][2] = "1839, Almond A. Strowger.";
 choices[13][3] = "G. Marconi.";
 answers[13] = choices[13][0];
 units[13] = "";
 comments[13] = "Id Pregunta: 1059. ";


//  Id pregunta: 1116 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  En las m&aacute;quinas con tecnolog&iacute;a RISC:";
 choices[14]= new Array();
 choices[14][0] = "El n&uacute;mero de instrucciones es muy elevado";
 choices[14][1] = "Se emplea la microprogramaci&oacute;n";
 choices[14][2] = "No se emplea la microprogramaci&oacute;n";
 choices[14][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[14] = choices[14][2];
 units[14] = "46";
 comments[14] = "Id Pregunta: 1116. ";


//  Id pregunta: 1296 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Para borrar una tabla en SQL utilizar&eacute;:";
 choices[15]= new Array();
 choices[15][0] = "DELETE + Nombre de la tabla";
 choices[15][1] = "DROP + Nombre de la tabla";
 choices[15][2] = "REVOKE + Nombre de la tabla";
 choices[15][3] = "B y C son ciertas";
 answers[15] = choices[15][1];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1296. ";


//  Id pregunta: 1351 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Se&ntilde;ale la respuesta falsa. El Lenguaje Modula 2:";
 choices[16]= new Array();
 choices[16][0] = "Surgi&oacute; del lenguaje Pascal.";
 choices[16][1] = "Es orientado a objetos.";
 choices[16][2] = "Fue dise&ntilde;ado por Wirth.";
 choices[16][3] = "Es fuertemente tipado.";
 answers[16] = choices[16][1];
 units[16] = "";
 comments[16] = "Id Pregunta: 1351. ";


//  Id pregunta: 1452 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es un formato de descripci&oacute;n de p&aacute;ginas?:";
 choices[17]= new Array();
 choices[17][0] = "EPS";
 choices[17][1] = "RIP";
 choices[17][2] = "PDF";
 choices[17][3] = "PCL ";
 answers[17] = choices[17][1];
 units[17] = "93";
 comments[17] = "Id Pregunta: 1452. ";


//  Id pregunta: 1501 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un PDA:";
 choices[18]= new Array();
 choices[18][0] = "No permite la navegaci&oacute;n en Internet";
 choices[18][1] = "No puede conectarse a un PC";
 choices[18][2] = "Puede llevar instalado Windows";
 choices[18][3] = "Todas las anteriores son ciertas";
 answers[18] = choices[18][2];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1501. ";


//  Id pregunta: 1520 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  C&oacute;mo objetos de una base de datos ORACLE, &iquest;cu&aacute;l es la diferencia principal entre una funci&oacute;n y un procedimiento?:";
 choices[19]= new Array();
 choices[19][0] = "Una funci&oacute;n no puede ejecutarse de forma nativa; un procedimiento si.";
 choices[19][1] = "Una funci&oacute;n puede invocar otra funci&oacute;n; un procedimiento no.";
 choices[19][2] = "Una funci&oacute;n est&aacute; almacenada en la base de datos; un procedimiento no.";
 choices[19][3] = "Una funci&oacute;n puede devolver un valor al programa que la invoca; un procedimiento no.";
 answers[19] = choices[19][3];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1520. Junta Andaluc&iacute;a";


//  Id pregunta: 1814 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  El modelo de datos vectorial utilizado en sistemas de informaci&oacute;n geogr&aacute;fica, utiliza los siguientes elementos de representaci&oacute;n para la informaci&oacute;n topol&oacute;gica (se&ntilde;ale la respuesta correcta):";
 choices[20]= new Array();
 choices[20][0] = "Puntos, arcos, politopos.";
 choices[20][1] = "Puntos, segmentos, pol&iacute;gonos.";
 choices[20][2] = "Puntos, arcos, pol&iacute;gonos.";
 choices[20][3] = "Puntos, arcos, segmentos.";
 answers[20] = choices[20][2];
 units[20] = "67";
 comments[20] = "Id Pregunta: 1814. ";


//  Id pregunta: 1865 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;Qu&eacute; es falso respecto a LDAP?";
 choices[21]= new Array();
 choices[21][0] = "Cada entrada cuenta con un nombre DN";
 choices[21][1] = "Representa todos los campos mediante ASN.1";
 choices[21][2] = "Ha eliminado opciones respecto a DAP";
 choices[21][3] = "Las entradas se pueden organizar en &aacute;rbol";
 answers[21] = choices[21][1];
 units[21] = "74";
 comments[21] = "Id Pregunta: 1865. RFC 4514";


//  Id pregunta: 1911 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  Respecto de las arquitecturas Grid, es falso afirmar que:";
 choices[22]= new Array();
 choices[22][0] = "El porcentaje de dedicaci&oacute;n de cada m&aacute;quina de la arquitectura es fijo e independiente de la carga de cada una.";
 choices[22][1] = "Su nombre proviene del paradigma de la red el&eacute;ctrica.";
 choices[22][2] = "Los recursos que las componen se encuentran distribuidos geogr&aacute;ficamente.";
 choices[22][3] = "Sus creadores fueron Ian Foster y Carl Kesselman.";
 answers[22] = choices[22][0];
 units[22] = "45";
 comments[22] = "Id Pregunta: 1911. ";


//  Id pregunta: 2001 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  Una de las siguientes t&eacute;cnicas no se considera habitualmente como m&eacute;todo para la planificaci&oacute;n de la capacidad de un sistema inform&aacute;tico:";
 choices[23]= new Array();
 choices[23][0] = "De prueba y error sobre distintas implantaciones";
 choices[23][1] = "Anal&iacute;ticas";
 choices[23][2] = "De simulaci&oacute;n";
 choices[23][3] = "De &quot;bench-mark&quot;";
 answers[23] = choices[23][0];
 units[23] = "26";
 comments[23] = "Id Pregunta: 2001. Preparatic XVII";


//  Id pregunta: 2074 Año de creación de pregunta: 2004-01-01
 questions[24]= "25)  Son comunes a todas las metodolog&iacute;as de desarrollo de SW";
 choices[24]= new Array();
 choices[24][0] = "Uso de t&eacute;cnicas Gr&aacute;ficas";
 choices[24][1] = "Documentaci&oacute;n";
 choices[24][2] = "Diccionario de datos";
 choices[24][3] = "todas las anteriores";
 answers[24] = choices[24][3];
 units[24] = "79";
 comments[24] = "Id Pregunta: 2074. ";


//  Id pregunta: 2131 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[25]= new Array();
 choices[25][0] = "Para aplicar M&Eacute;TRICA Versi&oacute;n 3 es preciso realizar una adaptaci&oacute;n previa en funci&oacute;n del proyecto, la organizaci&oacute;n, etc";
 choices[25][1] = "Las interfaces de M&Eacute;TRICA 3 son: Gesti&oacute;n de Proyectos, Gesti&oacute;n de Configuraci&oacute;n, Aseguramiento de la Calidad y Seguridad";
 choices[25][2] = "En las tareas de M&Eacute;TRICA Versi&oacute;n 3 se describe su contenido, se indican los productos a obtener, las t&eacute;cnicas a utilizar y los participantes responsables de su realizaci&oacute;n";
 choices[25][3] = "La participaci&oacute;n de los usuarios en M&Eacute;TRICA Versi&oacute;n 3 se produce s&oacute;lo en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 answers[25] = choices[25][3];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2131. ";


//  Id pregunta: 2237 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Benchmarking es un concepto que indica:";
 choices[26]= new Array();
 choices[26][0] = "un mecanismo para determinar reducciones de recursos";
 choices[26][1] = "un sin&oacute;nimo de auditor&iacute;a";
 choices[26][2] = "un proceso sistem&aacute;tico y continuo para evaluar los productos, servicios y trabajos de las organizaciones que son reconocidas como representantes de las mejores pr&aacute;cticas, con el prop&oacute;sito de realizar mejoras organizacionales";
 choices[26][3] = "un programa inform&aacute;tico que al instalarse tiene como misi&oacute;n la optimizaci&oacute;n de la eficiencia de los sistemas a los que afecte su configuraci&oacute;n, tanto a nivel de espacio de disco como a nivel de rendimiento";
 answers[26] = choices[26][2];
 units[26] = "92";
 comments[26] = "Id Pregunta: 2237. ";


//  Id pregunta: 2456 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los diagramas de flujos de datos son una de las t&eacute;cnicas utilizadas en la metodolog&iacute;a METRICA cuyo objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo. Indique la respuesta que incluye los elementos utilizados en esa t&eacute;cnica:";
 choices[27]= new Array();
 choices[27][0] = "Atributos, relaciones y entidades";
 choices[27][1] = "Entidades externas al sistema, procesos y almacenes de datos";
 choices[27][2] = "Entradas, funciones de transformaci&oacute;n y salidas";
 choices[27][3] = "Niveles, diagramas y objetos";
 answers[27] = choices[27][1];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2456. ";


//  Id pregunta: 2572 Año de creación de pregunta: 2004-01-01
 questions[28]= "29)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[28]= new Array();
 choices[28][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[28][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[28][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[28][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[28] = choices[28][2];
 units[28] = "87,88,92";
 comments[28] = "Id Pregunta: 2572. ";


//  Id pregunta: 2742 Año de creación de pregunta: 2006-01-01
 questions[29]= "30)  Una entidad est&aacute; en tercera forma normal (3FN) si:";
 choices[29]= new Array();
 choices[29][0] = "No tiene grupos repetitivos";
 choices[29][1] = "Si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria";
 choices[29][2] = "Si est&aacute; en 2FN y no tiene grupos repetitivos";
 choices[29][3] = "Un atributo s&oacute;lo puede tomar un &uacute;nico valor de un dominio simple";
 answers[29] = choices[29][1];
 units[29] = "58";
 comments[29] = "Id Pregunta: 2742. ";


//  Id pregunta: 2812 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  Est&aacute;dares de Calidad de M&eacute;trica v3";
 choices[30]= new Array();
 choices[30][0] = "Norma ISO 9001";
 choices[30][1] = "norma  ISO 9000-2003";
 choices[30][2] = "normas ISO 9000-2000 y norma ISO 9001-2000";
 choices[30][3] = "norma ISO 9000-2001";
 answers[30] = choices[30][2];
 units[30] = "88";
 comments[30] = "Id Pregunta: 2812. ";


//  Id pregunta: 2884 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  La entidad p&uacute;blica empresarial Red.es tiene como misi&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "la gesti&oacute;n de registros de nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s &quot;.es&quot; correspondiente a Espa&ntilde;a";
 choices[31][1] = "la de observar la evoluci&oacute;n del sector de las telecomunicaciones y de la sociedad de la informaci&oacute;n";
 choices[31][2] = "el asesoramiento a la Administraci&oacute;n General del Estado en materias TIC";
 choices[31][3] = "Todas las anteriores respuestas son correctas";
 answers[31] = choices[31][3];
 units[31] = "112";
 comments[31] = "Id Pregunta: 2884. ";


//  Id pregunta: 2975 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  El sistema de comunicaciones m&oacute;viles GSM se compone de diversos elementos tales como el HLR y VLR que son?";
 choices[32]= new Array();
 choices[32][0] = "estaciones base";
 choices[32][1] = "bases de datos de usuarios";
 choices[32][2] = "MSC";
 choices[32][3] = "ninguna de las anteriores";
 answers[32] = choices[32][1];
 units[32] = "108";
 comments[32] = "Id Pregunta: 2975. Examen Julio 2003";


//  Id pregunta: 3100 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Correo electr&oacute;nico, compartici&oacute;n de documentos FTP y/o WWW, directorio, agenda, listas de tareas&hellip; Todos ellos son:";
 choices[33]= new Array();
 choices[33][0] = "herramientas groupware s&iacute;ncronas";
 choices[33][1] = "protocolos y aplicaciones TCP/IP";
 choices[33][2] = "herramientas groupware as&iacute;ncronas";
 choices[33][3] = "aplicaciones ofim&aacute;ticas instaladas por defecto en cualquier PDA";
 answers[33] = choices[33][2];
 units[33] = "107";
 comments[33] = "Id Pregunta: 3100. ";


//  Id pregunta: 3197 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Dentro del modelo OSI, podemos afirmar que:";
 choices[34]= new Array();
 choices[34][0] = "El nivel 2 no hay control de flujo";
 choices[34][1] = "El nivel 3 se enfrenta a problemas de encaminamiento";
 choices[34][2] = "El nivel 4 se encarga de los problemas de interconexi&oacute;n de redes";
 choices[34][3] = "En el nivel 5 se tratan los aspectos sint&aacute;ctico y sem&aacute;ntico de la informaci&oacute;n";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3197. ";


//  Id pregunta: 3222 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de posicionamiento m&oacute;vil ofrece menor precisi&oacute;n?:";
 choices[35]= new Array();
 choices[35][0] = "A-GPS";
 choices[35][1] = "E-OTD";
 choices[35][2] = "CGI-TA";
 choices[35][3] = "TOA";
 answers[35] = choices[35][2];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3222. ";


//  Id pregunta: 3481 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  El topolog&iacute;a denominada FDDI (Fiber Distributed Data Interface) utiliza un m&eacute;todo de acceso al medio:";
 choices[36]= new Array();
 choices[36][0] = "Tipo CSMA/CD: se emite en cualquier momento y se detectan las colisiones";
 choices[36][1] = "Tipo  &lsquo;paso de testigo&rsquo; (Token Passing): es necesario la posesi&oacute;n del testigo para emitir";
 choices[36][2] = "Tipo TDM (multiplexaci&oacute;n por divisi&oacute;n en el tiempo): se asignan diferentes slots de tiempo a cada estaci&oacute;n";
 choices[36][3] = "Tipo FDM: la frecuencia de luz emitida por cada estaci&oacute;n es diferente con lo que no hay colisiones";
 answers[36] = choices[36][1];
 units[36] = "101";
 comments[36] = "Id Pregunta: 3481. ";


//  Id pregunta: 3596 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  La direcci&oacute;n IP 192.168.42.127:";
 choices[37]= new Array();
 choices[37][0] = "Es una direcci&oacute;n de la red Internet";
 choices[37][1] = "Es una direcci&oacute;n de la red Internet, clase C";
 choices[37][2] = "Es una direcci&oacute;n de una red IP privada";
 choices[37][3] = "Es una direcci&oacute;n de la red Internet, clase B";
 answers[37] = choices[37][2];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3596. ";


//  Id pregunta: 3628 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  La orden por la que se aprueba el reglamento de desarrollo en lo relativo al uso de dominio p&uacute;blico radioel&eacute;ctrico es:";
 choices[38]= new Array();
 choices[38][0] = "Orden de 10 de marzo de 2000";
 choices[38][1] = "Orden de 10 de marzo de 2001";
 choices[38][2] = "Orden de 10 de marzo de 2002";
 choices[38][3] = "Orden de 9 de marzo de 2000. Derogada por el Real Decreto 863/2008";
 answers[38] = choices[38][3];
 units[38] = "110";
 comments[38] = "Id Pregunta: 3628. ";


//  Id pregunta: 3632 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  La primera empresa que propuso el uso de t&eacute;cnicas CDMA fue:";
 choices[39]= new Array();
 choices[39][0] = "AT&amp;T";
 choices[39][1] = "Qualcomm";
 choices[39][2] = "Motorola";
 choices[39][3] = "RCA";
 answers[39] = choices[39][1];
 units[39] = "108";
 comments[39] = "Id Pregunta: 3632. ";


//  Id pregunta: 3668 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Una centralita telef&oacute;nica digital privada para RDSI, o un &ldquo;bridge&rdquo; &oacute; &ldquo;router&rdquo; de red de &aacute;rea local con puerto RDSI es un dispositivo:";
 choices[40]= new Array();
 choices[40][0] = "ET1";
 choices[40][1] = "ET2";
 choices[40][2] = "TR2";
 choices[40][3] = "AT";
 answers[40] = choices[40][2];
 units[40] = "103";
 comments[40] = "Id Pregunta: 3668. ";


//  Id pregunta: 3759 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  Para especificar un protocolo en el modelo OSI son necesarios:";
 choices[41]= new Array();
 choices[41][0] = "S&oacute;lo la descripci&oacute;n de las PDUs que lo forman, junto con su prop&oacute;sito y los campos que las forman";
 choices[41][1] = "La a) y la descripci&oacute;n de los servicios usados, procedimientos seguidos y descripci&oacute;n formal (usando por ejemplo ASN.1)";
 choices[41][2] = "La b) y adem&aacute;s la descripci&oacute;n del comportamiento interno-externo";
 choices[41][3] = "Un protocolo no se puede especificar libremente, ya que hay impuestas condiciones referentes al sistema operativo y/o los lenguajes de programaci&oacute;n que usen las m&aacute;quinas en las que se implante";
 answers[41] = choices[41][1];
 units[41] = "100";
 comments[41] = "Id Pregunta: 3759. ";


//  Id pregunta: 3825 Año de creación de pregunta: 2002-01-01
 questions[42]= "43)  Se&ntilde;ale la opci&oacute;n que mejor indica la utilizaci&oacute;n de los cables de cuadretes:";
 choices[42]= new Array();
 choices[42][0] = "Los cables de cuadretes son indicados en transmisiones de baja frecuencia y en largas distancias";
 choices[42][1] = "Los cables de cuadretes se deben utilizar para transmisi&oacute;n de se&ntilde;ales de baja frecuencia y en distancias medias";
 choices[42][2] = "Los cables de cuadretes son indicados en transmisi&oacute;n de se&ntilde;ales de alta frecuencia y en distancias medias";
 choices[42][3] = "Los cables de cuadretes son los adecuados para transmisi&oacute;n de se&ntilde;ales de alta frecuencia y largas distancias";
 answers[42] = choices[42][2];
 units[42] = "99";
 comments[42] = "Id Pregunta: 3825. ";


//  Id pregunta: 3861 Año de creación de pregunta: 2004-01-01
 questions[43]= "44)  Cu&aacute;l no es una caracter&iacute;stica de IPv6";
 choices[43]= new Array();
 choices[43][0] = "Tama&ntilde;o de paquete m&aacute;ximo de 64 Kb";
 choices[43][1] = "Soporte para autenticaci&oacute;n y privacidad";
 choices[43][2] = "Aumenta el tama&ntilde;o de las tablas de enrutado";
 choices[43][3] = "Elimina el checksum del paquete";
 answers[43] = choices[43][2];
 units[43] = "100";
 comments[43] = "Id Pregunta: 3861. Tanenbaum";


//  Id pregunta: 3883 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;De qu&eacute; manera se puede balancear una granja de servidores?";
 choices[44]= new Array();
 choices[44][0] = "Se puede utilizar un balanceador hardware si hay comunicaci&oacute;n entre los nodos de la granja";
 choices[44][1] = "Se puede utilizar  un software cargado en cada nodo para repartir la carga entre los mismos";
 choices[44][2] = "Se puede hacer el balanceo con un balanceador hardware como con un balanceador software";
 choices[44][3] = "Ninguna de las respuestas es cierta";
 answers[44] = choices[44][2];
 units[44] = "113";
 comments[44] = "Id Pregunta: 3883. ";


//  Id pregunta: 3888 Año de creación de pregunta: 2004-01-01
 questions[45]= "46)  El est&aacute;ndar 802.11i relativo a seguridad en redes WiFi, &iquest;Qu&eacute; nuevo protocolo utiliza?";
 choices[45]= new Array();
 choices[45][0] = "WPA2";
 choices[45][1] = "WPA3";
 choices[45][2] = "TKIP";
 choices[45][3] = "WEP";
 answers[45] = choices[45][0];
 units[45] = "107";
 comments[45] = "Id Pregunta: 3888. ";


//  Id pregunta: 4004 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  En el est&aacute;ndar de mensajer&iacute;a X400, el protocolo utilizado para la comunicaci&oacute;n entre el agente de transferencia de mensajes (MTA) y el agente de usuario (UA) se denomina:";
 choices[46]= new Array();
 choices[46][0] = "P1";
 choices[46][1] = "P2";
 choices[46][2] = "P3";
 choices[46][3] = "P7";
 answers[46] = choices[46][2];
 units[46] = "106";
 comments[46] = "Id Pregunta: 4004. ";


//  Id pregunta: 4128 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[47]= new Array();
 choices[47][0] = "XML";
 choices[47][1] = "Xerces";
 choices[47][2] = "UDDI";
 choices[47][3] = "WSDL";
 answers[47] = choices[47][3];
 units[47] = "112,51";
 comments[47] = "Id Pregunta: 4128. ";


//  Id pregunta: 4168 Año de creación de pregunta: 2006-01-01
 questions[48]= "49)  Un test de penetraci&oacute;n proporciona todo lo siguiente salvo";
 choices[48]= new Array();
 choices[48][0] = "identificaci&oacute;n de fallos de seguridad";
 choices[48][1] = "demostraci&oacute;n de los efectos de los fallos de seguridad";
 choices[48][2] = "un m&eacute;todo de correcci&oacute;n de los fallos";
 choices[48][3] = "verificaci&oacute;n de los niveles actuales de resistencia a la infiltraci&oacute;n";
 answers[48] = choices[48][1];
 units[48] = "111";
 comments[48] = "Id Pregunta: 4168. ";


//  Id pregunta: 4219 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  El router es un dispositivo que se utiliza en la interconexi&oacute;n de redes y opera  seg&uacute;n el modelo OSI en el nivel de:";
 choices[49]= new Array();
 choices[49][0] = "transporte";
 choices[49][1] = "red";
 choices[49][2] = "f&iacute;sico";
 choices[49][3] = "enlace";
 answers[49] = choices[49][1];
 units[49] = "102";
 comments[49] = "Id Pregunta: 4219. ";


//  Id pregunta: 4236 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es el nombre del paquete open source Java que se utiliza para la generaci&oacute;n de informes?";
 choices[50]= new Array();
 choices[50][0] = "iReport";
 choices[50][1] = "SaintReport";
 choices[50][2] = "JasperReports";
 choices[50][3] = "xStream";
 answers[50] = choices[50][2];
 units[50] = "60,116";
 comments[50] = "Id Pregunta: 4236. ";


//  Id pregunta: 4275 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes sistemas operativos es un sistema orientado a objetos?";
 choices[51]= new Array();
 choices[51][0] = "Windows.";
 choices[51][1] = "Linux.";
 choices[51][2] = "OS/400.";
 choices[51][3] = "VMS";
 answers[51] = choices[51][2];
 units[51] = "52";
 comments[51] = "Id Pregunta: 4275. ";


//  Id pregunta: 4328 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un elemento relativo a las pruebas del plan de continuidad de una instalaci&oacute;n inform&aacute;tica?";
 choices[52]= new Array();
 choices[52][0] = "Evaluaci&oacute;n del personal involucrado en el ejercicio.";
 choices[52][1] = "Evaluaci&oacute;n de la coordinaci&oacute;n entre el equipo del plan y los proveedores externos.";
 choices[52][2] = "Evaluaci&oacute;n de la capacidad de recuperaci&oacute;n de procesos y datos vitales.";
 choices[52][3] = "Evaluaci&oacute;n de la posibilidad de establecer un acuerdo rec&iacute;proco de respaldo.";
 answers[52] = choices[52][3];
 units[52] = "";
 comments[52] = "Id Pregunta: 4328. ";


//  Id pregunta: 4350 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  La red G&Eacute;ANT:";
 choices[53]= new Array();
 choices[53][0] = "Es una red basada en IPv6 de &aacute;mbito mundial, que constituye el n&uacute;cleo de Internet.";
 choices[53][1] = "Es una red basada en IPv6, que sirve de desarrollo e investigaci&oacute;n para la nueva Internet 2.";
 choices[53][2] = "Es la siguiente evoluci&oacute;n l&oacute;gica de la Intranet Administrativa que une a diversos organismos de la Administraci&oacute;n General del Estado.";
 choices[53][3] = "Es una red paneuropea de investigaci&oacute;n, formada por la uni&oacute;n de las redes de investigaci&oacute;n, financiada por la Uni&oacute;n Europea";
 answers[53] = choices[53][3];
 units[53] = "103";
 comments[53] = "Id Pregunta: 4350. ";


//  Id pregunta: 4378 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  El objetivo principal del an&aacute;lisis de sistemas es:";
 choices[54]= new Array();
 choices[54][0] = "Determinar el mecanismo de funcionamiento de los m&oacute;dulos.";
 choices[54][1] = "Validar con el cliente el cumplimiento de las especificaciones.";
 choices[54][2] = "Establecer claramente las especificaciones del producto.";
 choices[54][3] = "Integrar los distintos componentes del sistema.";
 answers[54] = choices[54][2];
 units[54] = "80";
 comments[54] = "Id Pregunta: 4378. ";


//  Id pregunta: 4405 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  Se&ntilde;ale la afirmaci&oacute;n incorrecta. El departamento de seguridad inform&aacute;tica dentro de una organizaci&oacute;n especializada en tecnolog&iacute;as de informaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Debe ser independiente del departamento de sistemas.";
 choices[55][1] = "Debe ser independiente del departamento de comunicaciones.";
 choices[55][2] = "Debe ser independiente del departamento de desarrollo.";
 choices[55][3] = "Centra su actividad en la seguridad en las redes.";
 answers[55] = choices[55][3];
 units[55] = "26";
 comments[55] = "Id Pregunta: 4405. ";


//  Id pregunta: 4420 Año de creación de pregunta: 2007-01-01
 questions[56]= "57)  &iquest;Qu&eacute; comando se utiliza para comprobar una conexi&oacute;n f&iacute;sica entre dos hosts?";
 choices[56]= new Array();
 choices[56][0] = "TPING.";
 choices[56][1] = "WINPING.";
 choices[56][2] = "TCPING.";
 choices[56][3] = "PING.";
 answers[56] = choices[56][3];
 units[56] = "100";
 comments[56] = "Id Pregunta: 4420. ";


//  Id pregunta: 4491 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  Indique cual de las siguientes afirmaciones sobre las redes Frame Relay es falsa: ";
 choices[57]= new Array();
 choices[57][0] = "Las redes Frame Relay son redes de conmutaci&oacute;n de paquetes";
 choices[57][1] = "Las redes Frame Relay disponen de t&eacute;cnicas de control de Ia congesti&oacute;n de Ia red.";
 choices[57][2] = "LAPB es el protocolo de nivel de enlace utilizado por Frame Relay.";
 choices[57][3] = "El CIR (Comitted Information Rate) es Ia velocidad de transmisi&oacute;n de datos que el operador de la red Frame Relay garantiza para una conexi&oacute;n determinada.";
 answers[57] = choices[57][2];
 units[57] = "109";
 comments[57] = "Id Pregunta: 4491. ";


//  Id pregunta: 4540 Año de creación de pregunta: 2007-01-01
 questions[58]= "59)  El protocolo utilizado para gestionar un dispositivo en una red TCP/IP es:";
 choices[58]= new Array();
 choices[58][0] = "RCP";
 choices[58][1] = "SNMP";
 choices[58][2] = "SMTP";
 choices[58][3] = "ICMP";
 answers[58] = choices[58][1];
 units[58] = "100";
 comments[58] = "Id Pregunta: 4540. ";


//  Id pregunta: 4801 Año de creación de pregunta: 2007-01-01
 questions[59]= "60)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3) de Quinlan:";
 choices[59]= new Array();
 choices[59][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basadosen la entrop&iacute;a";
 choices[59][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizandomecanismos de inducci&oacute;n";
 choices[59][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizandoaprendizaje no supervisado";
 choices[59][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas einclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[59] = choices[59][1];
 units[59] = "64";
 comments[59] = "Id Pregunta: 4801. ";


//  Id pregunta: 4851 Año de creación de pregunta: 2007-01-01
 questions[60]= "61)  El modelo ITIL (Information Technology Infrastructure Library) se utiliza para identificar y administrar los servicios detecnolog&iacute;as de la informaci&oacute;n que presta una organizaci&oacute;n. &iquest;Cu&aacute;l de los siguientes NO forma parte del conjunto deprocesos identificados por ITIL?";
 choices[60]= new Array();
 choices[60][0] = "Soporte de servicios";
 choices[60][1] = "Gesti&oacute;n de la seguridad";
 choices[60][2] = "Administraci&oacute;n de aplicaciones";
 choices[60][3] = "Desarrollo de aplicaciones";
 answers[60] = choices[60][3];
 units[60] = "98";
 comments[60] = "Id Pregunta: 4851. ";


//  Id pregunta: 4853 Año de creación de pregunta: 2007-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (JointPhotographic Experts Group)?";
 choices[61]= new Array();
 choices[61][0] = "B&aacute;sico/secuencial";
 choices[61][1] = "Jer&aacute;rquico";
 choices[61][2] = "Progresivo";
 choices[61][3] = "Conjugado modificado";
 answers[61] = choices[61][3];
 units[61] = "114";
 comments[61] = "Id Pregunta: 4853. ";


//  Id pregunta: 4989 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativosescritos en otros lenguajes?:";
 choices[62]= new Array();
 choices[62][0] = "RMI";
 choices[62][1] = "JAXP";
 choices[62][2] = "JNDI";
 choices[62][3] = "JNI";
 answers[62] = choices[62][3];
 units[62] = "116";
 comments[62] = "Id Pregunta: 4989. Examen TIC A 2007";


//  Id pregunta: 4995 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios incluidos en el Manifiesto de Desarrollo &Aacute;gil de Software (Manifesto for Agile Software Development)?:";
 choices[63]= new Array();
 choices[63][0] = "Aceptamos requisitos cambiantes s&oacute;lo en las primeras etapas del desarrollo.";
 choices[63][1] = "Los procesos &aacute;giles promueven el desarrollo sostenido.";
 choices[63][2] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses,con preferencia por los periodos m&aacute;s cortos posibles.";
 choices[63][3] = "Los responsables de negocio y los desarrolladores deben trabajar juntos diariamente a lo largo del proyecto.";
 answers[63] = choices[63][0];
 units[63] = "76";
 comments[63] = "Id Pregunta: 4995. Examen TIC A 2007";


//  Id pregunta: 5016 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  Indique cu&aacute;l es el puerto para la conexi&oacute;n de datos que abrir&aacute; el cliente en el modo PASV del Protocolo deTransferencia de Ficheros FTP (&quot;File Transfer Protocol&quot;):";
 choices[64]= new Array();
 choices[64][0] = "El puerto 20";
 choices[64][1] = "El puerto 21";
 choices[64][2] = "Un puerto por encima de 1023 elegido al azar por el cliente";
 choices[64][3] = "Un puerto por encima de 1023 elegido al azar por el servidor";
 answers[64] = choices[64][3];
 units[64] = "112";
 comments[64] = "Id Pregunta: 5016. Examen TIC A 2007- Anulada por el Tribunal";


//  Id pregunta: 5167 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  Seg&uacute;n la legislaci&oacute;n aplicable, forma parte del servicio universal:";
 choices[65]= new Array();
 choices[65][0] = "Una conexi&oacute;n que deber&aacute; permitir comunicaciones en banda ancha, en los t&eacute;rminos que se definan por la normativa vigente";
 choices[65][1] = "Una conexi&oacute;n con acceso a servicios de televisi&oacute;n sobre IP";
 choices[65][2] = "Una conexi&oacute;n a telefon&iacute;a m&oacute;vil GSM";
 choices[65][3] = "Una conexi&oacute;n que permita comunicaciones de datos a velocidad suficiente para acceder de forma fucional a Internet y a otras redes de &aacute;mbito privado";
 answers[65] = choices[65][0];
 units[65] = "110";
 comments[65] = "Id Pregunta: 5167. ";


//  Id pregunta: 5611 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes conceptos se definen en X.500?";
 choices[66]= new Array();
 choices[66][0] = "DIB, que se comunica con el DSA utilizando el protocolo DAP. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. DMO que gestiona un dominio DMD";
 choices[66][1] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DIT, donde se almacena la informaci&oacute;n en un directorio X.500. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. ";
 choices[66][2] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DAP, que es el protocolo utilizado por un DUA para comunicarse con un DSA. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. ";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = choices[66][2];
 units[66] = "106";
 comments[66] = "Id Pregunta: 5611. ";


//  Id pregunta: 5628 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  Se&ntilde;ale la diferencia entre SMP y clustering";
 choices[67]= new Array();
 choices[67][0] = "SMP utiliza memoria compartida y el clustering paso de mensaje";
 choices[67][1] = "SMP utiliza paralelismo puro y el clustering memoria compartida ";
 choices[67][2] = "SMP utiliza memoria compartida y el clustering paralelismo puro ";
 choices[67][3] = "SMP utiliza memoria compartida y el clustering paralelismo de datos";
 answers[67] = choices[67][0];
 units[67] = "45";
 comments[67] = "Id Pregunta: 5628. ";


//  Id pregunta: 5821 Año de creación de pregunta: 2009-01-01
 questions[68]= "69)  Con respecto a servidores y servicios que permiten conectar el entorno de las LAN con el mundo Internet, &iquest;cu&aacute;l de las afirmaciones siguientes es CIERTA para un &quot;servidor NAT&quot;?:";
 choices[68]= new Array();
 choices[68][0] = "Sirve para asignar din&aacute;micamente direcciones IP a los clientes que no las tienen asignadas est&aacute;ticamente en la configuraci&oacute;n inicial, realizando funciones de protecci&oacute;n contra ataques por reproducci&oacute;n";
 choices[68][1] = "Se utilizan para trasformar una serie de direcciones IP internas, que no pueden ser reconocidas para salir a Internet.";
 choices[68][2] = "Sirven para limitar las direcciones IP/URL&rsquo;s a las que los usuarios de la LAN de una organizaci&oacute;n pueden acceder a trav&eacute;s de Internet, garantizando integridad de los datos y autenticaci&oacute;n de origen v&iacute;a el algoritmo MD5";
 choices[68][3] = "Guardan informaci&oacute;n sobre las direcciones de los servidores (host) representativos de nombres de dominio sobre los que se tiene autorizaci&oacute;n de acceso, disponiendo de capacidad adicional para consultar informaci&oacute;n de DNS&rsquo;s que tengan los nombres de dominio y host de otros accesos que pudieran realizarse";
 answers[68] = choices[68][1];
 units[68] = "102";
 comments[68] = "Id Pregunta: 5821. MAP 2008 A1";


//  Id pregunta: 5913 Año de creación de pregunta: 2009-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes criptosistemas se corresponde con un criptosistema asim&eacute;trico &oacute; de clave p&uacute;blica?";
 choices[69]= new Array();
 choices[69][0] = "IDEA (International Data Encryption Standard)";
 choices[69][1] = "Algoritmo de intercambio de claves de Diffie- Hellman";
 choices[69][2] = "AES (Advanced Encryption Standard)";
 choices[69][3] = "RC-5";
 answers[69] = choices[69][1];
 units[69] = "72";
 comments[69] = "Id Pregunta: 5913. MAP 2008 A1";


//  Id pregunta: 6069 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  Sobre la representaci&oacute;n del conocimiento:";
 choices[70]= new Array();
 choices[70][0] = "Los algoritmos gen&eacute;ticos usan representaci&oacute;n param&eacute;trica";
 choices[70][1] = "Las redes neuronales usan representaci&oacute;n simb&oacute;lica";
 choices[70][2] = "Las dos respuestas anteriores son correctas";
 choices[70][3] = "Todas las respuestas anteriores no son correctas";
 answers[70] = choices[70][0];
 units[70] = "63,64";
 comments[70] = "Id Pregunta: 6069. ";


//  Id pregunta: 6250 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Uno de los siguientes es un elemento de Java EE:";
 choices[71]= new Array();
 choices[71][0] = "Contenedor HTTP";
 choices[71][1] = "Servidor JDBC";
 choices[71][2] = "Contenedor Enterprise Java Beans";
 choices[71][3] = "Contenedor JDBC";
 answers[71] = choices[71][2];
 units[71] = "60";
 comments[71] = "Id Pregunta: 6250. TICB-2009, bloque desarrollo";


//  Id pregunta: 6601 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  Un contrato de servicios de la entidad p&uacute;blica empresarial Red.es estar&aacute; sujeto a regulaci&oacute;n armonizada si su valor estimado es: ";
 choices[72]= new Array();
 choices[72][0] = "Superior a 134.000 euros";
 choices[72][1] = "Superior a 125.000";
 choices[72][2] = "Superior a 206.000";
 choices[72][3] = "Superior a 207.000 euros.";
 answers[72] = choices[72][3];
 units[72] = "41";
 comments[72] = "Id Pregunta: 6601. ";


//  Id pregunta: 7255 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  Seg&uacute;n la RFC 2373 correpondiente a la arquitectura de direccionamiento para IPv6. El prefijo que es usado para direcciones multidifusi&oacute;n (multicast) es";
 choices[73]= new Array();
 choices[73][0] = "3F";
 choices[73][1] = "FE";
 choices[73][2] = "FC";
 choices[73][3] = "FF";
 answers[73] = choices[73][3];
 units[73] = "100";
 comments[73] = "Id Pregunta: 7255. Examen TIC B 2009";


//  Id pregunta: 8124 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   &iquest;Cu&aacute;l de los siguientes paquetes software se usa para construir grids?";
 choices[74]= new Array();
 choices[74][0] = " Globus Toolkit.";
 choices[74][1] = " Grid Squema Toolkit.";
 choices[74][2] = " EYEE Toolkit.";
 choices[74][3] = " WS-DAI.";
 answers[74] = choices[74][0];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 8124. Map 2008";


//  Id pregunta: 8222 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es el nivel m&iacute;nimo de accesibilidad que deben cumplir las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas o financiadas con fondos p&uacute;blicos?:";
 choices[75]= new Array();
 choices[75][0] = "No existe m&iacute;nimo alguno fijado por la normativa.";
 choices[75][1] = "El definido en las prioridades 1 y 2 de la norma UNE 139803: 2004.";
 choices[75][2] = "El m&aacute;s alto que permita el estado de la t&eacute;cnica en cada momento.";
 choices[75][3] = "El definido en la norma UNE 14009 :2006, apartados 2 y 3.";
 answers[75] = choices[75][1];
 units[75] = "39";
 comments[75] = "Id Pregunta: 8222. Examen TIC A1 2010";


//  Id pregunta: 8228 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  En programaci&oacute;n orientada a objetos, la capacidad de un objeto de una clase dada A de aparecer y comportarse como si fuera de la clase B se conoce como:";
 choices[76]= new Array();
 choices[76][0] = "Herencia.";
 choices[76][1] = "Extensibilidad.";
 choices[76][2] = "Sobrecarga.";
 choices[76][3] = "Polimorfismo.";
 answers[76] = choices[76][3];
 units[76] = "82";
 comments[76] = "Id Pregunta: 8228. Examen TIC A1 2010";


//  Id pregunta: 8288 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Un agente SNMP env&iacute;a traps a un sistema administrador de red a trav&eacute;s del puerto: ";
 choices[77]= new Array();
 choices[77][0] = "162.";
 choices[77][1] = "126.";
 choices[77][2] = "161.";
 choices[77][3] = "25.";
 answers[77] = choices[77][0];
 units[77] = "104";
 comments[77] = "Id Pregunta: 8288. Examen TIC A2 2010";


//  Id pregunta: 8384 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  Cu&aacute;l de los siguientes estados NO corresponde con ninguno de los estados en los que puede estar un puerto de un dispositivo de interconexi&oacute;n, seg&uacute;n lo definido en el est&aacute;ndar 802.1D para el protocolo Spanning Tree:";
 choices[78]= new Array();
 choices[78][0] = "Blocking (Bloqueando).";
 choices[78][1] = "Listening (Escuchando). ";
 choices[78][2] = "Learning (Aprendiendo).";
 choices[78][3] = "Receiving (Recibiendo).";
 answers[78] = choices[78][3];
 units[78] = "102";
 comments[78] = "Id Pregunta: 8384. Examen TIC A2 2010";


//  Id pregunta: 8545 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  La especificaci&oacute;n PKCS#3 de RSA se refiere a:";
 choices[79]= new Array();
 choices[79][0] = "El est&aacute;ndar criptogr&aacute;fico RSA";
 choices[79][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[79][2] = "El intercambio de claves Diffie-Hellman.";
 choices[79][3] = "La sintaxis del mensaje criptogr&aacute;fico";
 answers[79] = choices[79][2];
 units[79] = "72";
 comments[79] = "Id Pregunta: 8545. Examen TIC A2 2010 interna";


//  Id pregunta: 8592 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  En J2EE &iquest;qu&eacute; es un fichero WAR?";
 choices[80]= new Array();
 choices[80][0] = "Contiene los recursos y librer&iacute;as necesarias para compilar un proyecto";
 choices[80][1] = "Contiene la aplicaci&oacute;n web lista para ser desplegada en cualquier contenedor de servlets/jsp.";
 choices[80][2] = "Contiene los m&oacute;dulos EJB de las aplicaciones";
 choices[80][3] = "No existen los ficheros WAR en J2EE";
 answers[80] = choices[80][1];
 units[80] = "116";
 comments[80] = "Id Pregunta: 8592. Examen TIC A2 2010 interna";


//  Id pregunta: 8659 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Los tipos de direcciones en IPv6 son los siguientes:";
 choices[81]= new Array();
 choices[81][0] = "Unicast, Multicast y Anycast";
 choices[81][1] = "Unicast y Multicast";
 choices[81][2] = "Somecast y Groupcast";
 choices[81][3] = "Somecast, Multicast y Worldcast";
 answers[81] = choices[81][0];
 units[81] = "100";
 comments[81] = "Id Pregunta: 8659. Examen UPM A2 2011";


//  Id pregunta: 8924 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  Las siglas SSL y TLS se refieren a:";
 choices[82]= new Array();
 choices[82][0] = "Diferentes estados l&oacute;gicos del microprocesador.";
 choices[82][1] = "Protocolos criptogr&aacute;ficos para establecer conexiones seguras a trav&eacute;s de una red.";
 choices[82][2] = "Sistemas de localizaci&oacute;n geod&eacute;sica para GPS.";
 choices[82][3] = "Diferentes tipos de memoria f&iacute;sica";
 answers[82] = choices[82][1];
 units[82] = "111";
 comments[82] = "Id Pregunta: 8924. Operador Ayto. Madrid 2010";


//  Id pregunta: 8938 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Una sede judicial electr&oacute;nica puede no disponer de:";
 choices[83]= new Array();
 choices[83][0] = "Identificaci&oacute;n de la empresa contratada para su gesti&oacute;n, en su caso";
 choices[83][1] = "Informaci&oacute;n necesaria para su correcta utilizaci&oacute;n";
 choices[83][2] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal";
 choices[83][3] = "Debe disponer de todas las anteriores";
 answers[83] = choices[83][0];
 units[83] = "43";
 comments[83] = "Id Pregunta: 8938. ";


//  Id pregunta: 8966 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  El modelo de Prototipado Evolutivo  fue creado por:";
 choices[84]= new Array();
 choices[84][0] = "Hirsch";
 choices[84][1] = "Royce";
 choices[84][2] = "Jackson";
 choices[84][3] = "Bohem";
 answers[84] = choices[84][2];
 units[84] = "76,85";
 comments[84] = "Id Pregunta: 8966. ";


//  Id pregunta: 9023 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Para dimensionar los Centros de Atenci&oacute;n de Llamadas (Call Center) hay que tener en cuenta, a la hora de determinar el n&uacute;mero de operadores en una franja horaria:";
 choices[85]= new Array();
 choices[85][0] = "El n&uacute;mero de llamadas entrantes, y utilizar la f&oacute;rmula Erlang B.";
 choices[85][1] = "El n&uacute;mero de llamadas entrantes y su duraci&oacute;n, y utilizar la f&oacute;rmula Erlang C.";
 choices[85][2] = "En un Centro de Atenci&oacute;n de Llamadas el n&uacute;mero de enlaces es igual que el de agentes.";
 choices[85][3] = "Ninguna de las anteriores";
 answers[85] = choices[85][1];
 units[85] = "104";
 comments[85] = "Id Pregunta: 9023. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9043 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Cu&aacute;l no es una implementaci&oacute;n de Linux";
 choices[86]= new Array();
 choices[86][0] = "Debian";
 choices[86][1] = "Ubuntu";
 choices[86][2] = "Red Hat";
 choices[86][3] = "Mono";
 answers[86] = choices[86][3];
 units[86] = "53";
 comments[86] = "Id Pregunta: 9043. ";


//  Id pregunta: 9184 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes es un Proceso Principal de M&eacute;trica 3?";
 choices[87]= new Array();
 choices[87][0] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[87][1] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[87][2] = "Estudio de Viabilidad del Sistema";
 choices[87][3] = "Ninguno";
 answers[87] = choices[87][0];
 units[87] = "86";
 comments[87] = "Id Pregunta: 9184. ";


//  Id pregunta: 9198 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[88]= new Array();
 choices[88][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[88][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[88][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[88][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[88] = choices[88][1];
 units[88] = "36";
 comments[88] = "Id Pregunta: 9198. ";


//  Id pregunta: 9250 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;D&oacute;nde se almacena la informaci&oacute;n de inicio de sesi&oacute;n para los usuarios locales?";
 choices[89]= new Array();
 choices[89][0] = "En el DA de Microsoft.";
 choices[89][1] = "En la SAM (Security Access Manager)";
 choices[89][2] = "En una archivo de texto del sistema cifrado.";
 choices[89][3] = "En la COM (Component Object Model)";
 answers[89] = choices[89][1];
 units[89] = "56";
 comments[89] = "Id Pregunta: 9250. ";


//  Id pregunta: 9359 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[90]= new Array();
 choices[90][0] = "CWDM ";
 choices[90][1] = "SDH ";
 choices[90][2] = "WDM ";
 choices[90][3] = "DWDM ";
 answers[90] = choices[90][3];
 units[90] = "99";
 comments[90] = "Id Pregunta: 9359. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9423 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa?";
 choices[91]= new Array();
 choices[91][0] = "No cubre todo el ciclo de vida de desarrollo del software, puesto que no se incluye por ejemplo el estudio de viabilidad del sistema";
 choices[91][1] = "Supone que existe una buena direcci&oacute;n por parte del desarrollador y del cliente";
 choices[91][2] = "S&oacute;lo cubre los costes directos del proyecto";
 choices[91][3] = "Un mes.hombre consta de 160 horas de trabajo";
 answers[91] = choices[91][3];
 units[91] = "89";
 comments[91] = "Id Pregunta: 9423. ";


//  Id pregunta: 9514 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos no existe dentro de la clase abstracta HttpServlet?";
 choices[92]= new Array();
 choices[92][0] = "doGet()";
 choices[92][1] = "doDelete()";
 choices[92][2] = "doPut()";
 choices[92][3] = "Todos los m&eacute;todos anteriores existen en el clase HttpServlet";
 answers[92] = choices[92][3];
 units[92] = "116";
 comments[92] = "Id Pregunta: 9514. ";


//  Id pregunta: 9896 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Mediante la tecnolog&iacute;a EGPRS (Enhanced GPRS) se pueden llegar a conseguir velocidades de transmisi&oacute;n en modo paquetes de hasta";
 choices[93]= new Array();
 choices[93][0] = "384 kbps.";
 choices[93][1] = "115 kbps.";
 choices[93][2] = "2 Mbps.";
 choices[93][3] = "10 Mbps.";
 answers[93] = choices[93][0];
 units[93] = "108";
 comments[93] = "Id Pregunta: 9896. TIC A1, Examen 2013";


//  Id pregunta: 9983 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[94]= new Array();
 choices[94][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[94][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[94][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[94][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[94] = choices[94][1];
 units[94] = "59,115";
 comments[94] = "Id Pregunta: 9983. Examen T&eacute;cnico especialista inform&aacute;tica, Servicio Salud C&aacute;ntabro, 2011";


//  Id pregunta: 10009 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Los RFC de la IETF son";
 choices[95]= new Array();
 choices[95][0] = "peticiones de cambio (Request for Change) que proponen mejoras sobre protocolos en funcionamiento en Internet.";
 choices[95][1] = "notas t&eacute;cnicas que describen los protocolos utilizados en Internet.";
 choices[95][2] = "peticiones de comentarios a la comunidad de internautas sobre temas relacionados con Internet.";
 choices[95][3] = "las especificaciones formales de los protocolos para comunicaci&oacute;n remota (Remote Function Call).";
 answers[95] = choices[95][1];
 units[95] = "42";
 comments[95] = "Id Pregunta: 10009. ";


//  Id pregunta: 10046 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  El algoritmo PLC (Packet Loss Concealment):";
 choices[96]= new Array();
 choices[96][0] = "Lo utiliza Frame Relay para el reenv&iacute;o de tramas p&eacute;rdidas por la congesti&oacute;n en el sentido de la transmisi&oacute;n.";
 choices[96][1] = "Algoritmo de ocultamiento de p&eacute;rdida de paquetes utilizado por VoIP.";
 choices[96][2] = "Utilizado por TCP para la retransmisi&oacute;n de paquetes despu&eacute;s de una trama NACK (negative acknowledgement).";
 choices[96][3] = "Algoritmo de descarte de paquetes en situaci&oacute;n de congesti&oacute;n en redes Frame Relay.";
 answers[96] = choices[96][1];
 units[96] = "109";
 comments[96] = "Id Pregunta: 10046. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10224 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Para que la siguiente sentencia compile:";
 choices[97]= new Array();
 choices[97][0] = "Compila bien sin cambios";
 choices[97][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[97][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[97][3] = "I), II) y III) son v&aacute;lidas";
 answers[97] = choices[97][3];
 units[97] = "60";
 comments[97] = "Id Pregunta: 10224. ";


//  Id pregunta: 10474 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En el &aacute;mbito de los certificados X.509:";
 choices[98]= new Array();
 choices[98][0] = "La CA de la PKI debe proporcional protocolos de gesti&oacute;n de certificados (registro, recuperaci&oacute;n de claves, etc) dsiponibles online.";
 choices[98][1] = "Una CRL es una lista de certificados revocados con un timestamp que determina su fecha de emisi&oacute;n y firmada en todo caso por la CA que emite los certificados.";
 choices[98][2] = "Una CRL tiene un alcance que define el tipo de certificados que incluir&aacute; dicha lista.";
 choices[98][3] = "Un certificado se a&ntilde;ade a la CRL en la siguiente actualizaci&oacute;n seg&uacute;n la pol&iacute;tica de actualizaciones definida.";
 answers[98] = choices[98][3];
 units[98] = "73";
 comments[98] = "Id Pregunta: 10474. ";


//  Id pregunta: 10535 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[99]= new Array();
 choices[99][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[99][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[99][2] = "La latencia de acceso a los datos es menor";
 choices[99][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[99] = choices[99][3];
 units[99] = "48";
 comments[99] = "Id Pregunta: 10535. ";


