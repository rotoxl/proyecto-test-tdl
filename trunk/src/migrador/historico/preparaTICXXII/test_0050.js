/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 71 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas ignora la cuant&iacute;a de la diferencia y s&oacute;lo se&ntilde;ala si existe o no?:";
 choices[0]= new Array();
 choices[0][0] = "M&eacute;todo Promethee";
 choices[0][1] = "Utilidad multiatributo";
 choices[0][2] = "Permutaci&oacute;n";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][0];
 units[0] = "34";
 comments[0] = "Id Pregunta: 71. ";


//  Id pregunta: 75 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas utiliza &uacute;nicamente la componente subjetiva del decisor?:";
 choices[1]= new Array();
 choices[1][0] = "Concordancia";
 choices[1][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[1][2] = "Ponderaci&oacute;n lineal";
 choices[1][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 75. ";


//  Id pregunta: 230 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En los conceptos principales de la seguridad inform&aacute;tica no es cierto que:";
 choices[2]= new Array();
 choices[2][0] = "los da&ntilde;os sobre los activos producen impactos";
 choices[2][1] = "los impactos son materializaciones de las amenazas sobre los activos";
 choices[2][2] = "las salvaguardas ofrecen medidas curativas sobre los impactos, y preventivas sobre las vulnerabilidades";
 choices[2][3] = "los riesgos son las frecuencias con las que se pueden producir las amenazas sobre los activos";
 answers[2] = choices[2][3];
 units[2] = "33";
 comments[2] = "Id Pregunta: 230. ";


//  Id pregunta: 359 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Las normas b&aacute;sicas para constituir un interfaz com&uacute;n de todos los sistemas Unix con las aplicaciones se denominan:";
 choices[3]= new Array();
 choices[3][0] = "OSI";
 choices[3][1] = "ISO";
 choices[3][2] = "POSIX";
 choices[3][3] = "XENIX";
 answers[3] = choices[3][2];
 units[3] = "40";
 comments[3] = "Id Pregunta: 359. ";


//  Id pregunta: 584 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  &iquest;En qu&eacute; situaciones es necesario un equipo de integraci&oacute;n de sistemas?";
 choices[4]= new Array();
 choices[4][0] = "En entorno de microinform&aacute;tica";
 choices[4][1] = "Cuando se trabaja con m&aacute;quinas virtuales separadas";
 choices[4][2] = "Cuando se engloban varios componentes o varios sistemas sobre una misma plataforma";
 choices[4][3] = "Cuando se sube a producci&oacute;n sistemas especialmente cr&iacute;ticos";
 answers[4] = choices[4][2];
 units[4] = "26";
 comments[4] = "Id Pregunta: 584. ";


//  Id pregunta: 648 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  Cu&aacute;l de las siguientes relaciones entre Organismos internacionales y europeos es incorrecta:";
 choices[5]= new Array();
 choices[5][0] = "ITU-T - ETSI";
 choices[5][1] = "IEC - CENELEC";
 choices[5][2] = "Comit&eacute; conjunto JTC-1 (ISO - CEN/CENELEC)";
 choices[5][3] = "ISO -CEN";
 answers[5] = choices[5][2];
 units[5] = "42";
 comments[5] = "Id Pregunta: 648. ";


//  Id pregunta: 656 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[6]= new Array();
 choices[6][0] = "Impide la descarga de contenido protegido";
 choices[6][1] = "Impide la copia de contenido protegido";
 choices[6][2] = "Garantiza la no modificaci&oacute;n del contenido protegido";
 choices[6][3] = "Se asegura de que el comprador ha pagado por el contenido";
 answers[6] = choices[6][0];
 units[6] = "37";
 comments[6] = "Id Pregunta: 656. ";


//  Id pregunta: 659 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[7]= new Array();
 choices[7][0] = "Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos";
 choices[7][1] = "Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte";
 choices[7][2] = "Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte";
 choices[7][3] = "De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos";
 answers[7] = choices[7][2];
 units[7] = "36";
 comments[7] = "Id Pregunta: 659. ";


//  Id pregunta: 674 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  La firma electr&oacute;nica se regula seg&uacute;n la base normativa descrita en:";
 choices[8]= new Array();
 choices[8][0] = "Real Decreto Ley Firma Electr&oacute;nica 213/2001";
 choices[8][1] = "Ley Firma Electr&oacute;nica 59/2003";
 choices[8][2] = "Real Decreto Ley Firma Electr&oacute;nica 15/1999";
 choices[8][3] = "Real Decreto Ley Firma Electr&oacute;nica 30/1998";
 answers[8] = choices[8][1];
 units[8] = "30";
 comments[8] = "Id Pregunta: 674. ";


//  Id pregunta: 763 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  SOAP (Simple Object Access protocol):";
 choices[9]= new Array();
 choices[9][0] = "En un protocolo de programaci&oacute;n orientado a la plataforma .net de Microsoft (COM)";
 choices[9][1] = "Es un protocolo de intercambio electr&oacute;nico de datos EDI ya en desuso y que se utiliz&oacute; en redes orientados a paquetes del tipo X.25";
 choices[9][2] = "Es un protocolo basado en XML que permite invocar m&eacute;todos, servicios, componentes y objetos sobre servidores remotos utilizando HTTP";
 choices[9][3] = "Es un protocolo de acceso a bases de datos orientadas a objetos con el cual Microsoft Corporation ha anunciado recientemente sque se incorporar&aacute; a la comunidad SW de fuentes abiertas";
 answers[9] = choices[9][2];
 units[9] = "52";
 comments[9] = "Id Pregunta: 763. ";


//  Id pregunta: 854 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes opciones no es una estructura de representaci&oacute;n del conocimiento?:";
 choices[10]= new Array();
 choices[10][0] = "Redes sem&aacute;nticas";
 choices[10][1] = "Diagramas";
 choices[10][2] = "Marcos";
 choices[10][3] = "Guiones";
 answers[10] = choices[10][1];
 units[10] = "63";
 comments[10] = "Id Pregunta: 854. ";


//  Id pregunta: 923 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es falso si hablamos de SET?";
 choices[11]= new Array();
 choices[11][0] = "Es una aplicaci&oacute;n distribuida que en particular usa canales virtuales seguros y sirve para pagos con tarjetas de pl&aacute;stico";
 choices[11][1] = "Es un est&aacute;ndar privado propuesto por Visa-Microsoft y Mastercard-Netscape";
 choices[11][2] = "Es m&aacute;s sencillo de implementar y de implantar que SSL lo que contribuye a su r&aacute;pida y progresiva implantaci&oacute;n en el mercado";
 choices[11][3] = "Significa Secure Electronic Transactions, transacciones electr&oacute;nicas seguras";
 answers[11] = choices[11][2];
 units[11] = "70";
 comments[11] = "Id Pregunta: 923. ";


//  Id pregunta: 1018 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  El &iacute;ndice m&aacute;ximo de transporte de datos de un bus PCI es:";
 choices[12]= new Array();
 choices[12][0] = "64 Mbytes/segundo";
 choices[12][1] = "16 Mbytes/segundo";
 choices[12][2] = "132 Mbytes/segundo";
 choices[12][3] = "5 Mbytes/segundo";
 answers[12] = choices[12][2];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1018. ";


//  Id pregunta: 1250 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  La ventaja fundamental de las memorias cache es:";
 choices[13]= new Array();
 choices[13][0] = "Su alta velocidad";
 choices[13][1] = "Su seguridad";
 choices[13][2] = "La ampliaci&oacute;n de memoria principal que generan";
 choices[13][3] = "Su gran capacidad de direccionamiento";
 answers[13] = choices[13][0];
 units[13] = "47";
 comments[13] = "Id Pregunta: 1250. ";


//  Id pregunta: 1383 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Un servicio de directorio:";
 choices[14]= new Array();
 choices[14][0] = "Es una base de datos, orientada a consulta, con replicaci&oacute;n, y estructura jer&aacute;rquica";
 choices[14][1] = "Puede ser utilizado como un repositorio para guardar la informaci&oacute;n de los usuarios";
 choices[14][2] = "Puede ser utilizado como medio de autenticaci&oacute;n en sistemas heterogeneos";
 choices[14][3] = "Todas las respuestas anteriores son ciertas";
 answers[14] = choices[14][3];
 units[14] = "106";
 comments[14] = "Id Pregunta: 1383. ";


//  Id pregunta: 1495 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Cuando la transmisi&oacute;n de datos entre dos sistemas se caracteriza por llevar un bit de comienzo y un bit de parada, separando a cada unidad de informaci&oacute;n, se trata de:";
 choices[15]= new Array();
 choices[15][0] = "Comunicaci&oacute;n s&iacute;ncrona";
 choices[15][1] = "Comunicaci&oacute;n as&iacute;ncrona";
 choices[15][2] = "Comunicaci&oacute;n semiduplex (half-duplex)";
 choices[15][3] = "Comunicaci&oacute;n duplex (full-duplex)";
 answers[15] = choices[15][1];
 units[15] = "100";
 comments[15] = "Id Pregunta: 1495. *: transmision datos";


//  Id pregunta: 1521 Año de creación de pregunta: 2003-01-01
 questions[16]= "17)  C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU";
 choices[16]= new Array();
 choices[16][0] = "MPL";
 choices[16][1] = "BSD";
 choices[16][2] = "GPL";
 choices[16][3] = "PPL";
 answers[16] = choices[16][2];
 units[16] = "61";
 comments[16] = "Id Pregunta: 1521. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1563 Año de creación de pregunta: 2003-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes tipos de informaci&oacute;n no est&aacute; contenida obligatoriamente en un certificado digital X.509?:";
 choices[17]= new Array();
 choices[17][0] = "La clave p&uacute;blica del titular.";
 choices[17][1] = "Datos personales de identificaci&oacute;n del titular.";
 choices[17][2] = "La URL del directorio LDAP contenedor de claves p&uacute;blicas.";
 choices[17][3] = "La firma electr&oacute;nica de la Autoridad de Certificaci&oacute;n que emiti&oacute; el certificado.";
 answers[17] = choices[17][2];
 units[17] = "73";
 comments[17] = "Id Pregunta: 1563. Junta Andaluc&iacute;a";


//  Id pregunta: 1584 Año de creación de pregunta: 2003-01-01
 questions[18]= "19)  En el contexto del modelo de componentes software basados en Java, &iquest;qu&eacute; es un contenedor?:";
 choices[18]= new Array();
 choices[18][0] = "Un proceso donde se ejecutan los componentes Java.";
 choices[18][1] = "Una biblioteca de clases Java.";
 choices[18][2] = "Una interfaz de usuario.";
 choices[18][3] = "Un fichero XML que describe los componentes de aplicaci&oacute;n.";
 answers[18] = choices[18][0];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1584. Junta Andaluc&iacute;a";


//  Id pregunta: 1754 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;Qu&eacute; es el CLR?";
 choices[19]= new Array();
 choices[19][0] = "Un lenguaje de programaci&oacute;n para .Net";
 choices[19][1] = "El entorno de ejecuci&oacute;n de .Net";
 choices[19][2] = "Una biblioteca de clases de objetos";
 choices[19][3] = "Un motor de bases de datos para dispositivos m&oacute;viles";
 answers[19] = choices[19][1];
 units[19] = "59";
 comments[19] = "Id Pregunta: 1754. ";


//  Id pregunta: 1823 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  Las especializaciones de los sistemas de Datawarehouse orientadas a departamentos o &aacute;reas de negocio concretas se denominan:";
 choices[20]= new Array();
 choices[20][0] = "Data Marts.";
 choices[20][1] = "Data Cleansing.";
 choices[20][2] = "Data Mining.";
 choices[20][3] = "Metadata.";
 answers[20] = choices[20][0];
 units[20] = "68";
 comments[20] = "Id Pregunta: 1823. ";


//  Id pregunta: 1937 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, establece como sanci&oacute;n por la comisi&oacute;n de infracciones graves:";
 choices[21]= new Array();
 choices[21][0] = "Multa de 30.001 a 150.000 euros";
 choices[21][1] = "Multa por importe m&aacute;ximo de 50.000 euros";
 choices[21][2] = "Multa de 150.001 a 600.000 euros";
 choices[21][3] = "Multa de 30.001 a 100.000 euros como m&aacute;ximo";
 answers[21] = choices[21][0];
 units[21] = "30";
 comments[21] = "Id Pregunta: 1937. ";


//  Id pregunta: 1947 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[22]= new Array();
 choices[22][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[22][1] = "Diagrama de Flujo de Datos";
 choices[22][2] = "Diagrama de Contexto";
 choices[22][3] = "Modelo de Datos";
 answers[22] = choices[22][0];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1947. ";


//  Id pregunta: 2041 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  Un &quot;walkthrough&quot; es:";
 choices[23]= new Array();
 choices[23][0] = "Un tipo de auditor&iacute;a de calidad";
 choices[23][1] = "Una actividad de garant&iacute;a de calidad";
 choices[23][2] = "Un tipo de revisi&oacute;n";
 choices[23][3] = "La verificaci&oacute;n formal de la calidad del software";
 answers[23] = choices[23][2];
 units[23] = "92";
 comments[23] = "Id Pregunta: 2041. ";


//  Id pregunta: 2269 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  El despliegue detallado de recursos para alcanzar los objetivos fijados en los planes estrat&eacute;gicos es funci&oacute;n de:";
 choices[24]= new Array();
 choices[24][0] = "La planificaci&oacute;n operativa";
 choices[24][1] = "El control anal&iacute;tico del gasto";
 choices[24][2] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[24][3] = "La previsi&oacute;n de beneficios";
 answers[24] = choices[24][0];
 units[24] = "77";
 comments[24] = "Id Pregunta: 2269. ";


//  Id pregunta: 2503 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  UML se corresponde con:";
 choices[25]= new Array();
 choices[25][0] = "Unstructured Markup Language, Lenguaje Estructurado de Marcaci&oacute;n.";
 choices[25][1] = "Unified Multimedia Language, Lenguaje Multimedia Unificado.";
 choices[25][2] = "Unified Modelling Language, Lenguaje Unificado de Modelado.";
 choices[25][3] = "Universal Modelling Language, Lenguaje de Modelado Universal";
 answers[25] = choices[25][2];
 units[25] = "82,84";
 comments[25] = "Id Pregunta: 2503. ";


//  Id pregunta: 2539 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Los algoritmos de comprensi&oacute;n LZW son del tipo:";
 choices[26]= new Array();
 choices[26][0] = "Basados en diccionario";
 choices[26][1] = "RLE";
 choices[26][2] = "HUFFMAN";
 choices[26][3] = "JPEG";
 answers[26] = choices[26][0];
 units[26] = "93";
 comments[26] = "Id Pregunta: 2539. ";


//  Id pregunta: 2562 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Qu&eacute; significa que una Organizaci&oacute;n esta en el Nivel 2 del CMM?";
 choices[27]= new Array();
 choices[27][0] = "En este nivel se logran establecer las pol&iacute;ticas para adminsitrar un proyecto de software y los procedimientos para lograrlo, esto se realiza en base a la experiencia obtenida en proyectos similares.";
 choices[27][1] = "En este nivel, el proceso est&aacute;ndar para el desarrollo y mantenimiento de software se documenta, tanto desde el punto de vista t&eacute;cnico como administrativo. Se explotan efectivamente pr&aacute;cticas de ingenier&iacute;a de software para estandarizar los procesos.";
 choices[27][2] = "Todas son correctas";
 choices[27][3] = "En este nivel la empresa carece de buenas pr&aacute;cticas de ingenier&iacute;a de software, ni existe una planeaci&oacute;n efectiva. Los proyectos generalmente abandonan los planes realizados en etapas de crisis.";
 answers[27] = choices[27][0];
 units[27] = "87,88,92";
 comments[27] = "Id Pregunta: 2562. ";


//  Id pregunta: 2650 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  Indicar la afirmaci&oacute;n falsa sobre Diagramas del Flujo de Datos";
 choices[28]= new Array();
 choices[28][0] = "No se puede representar flujos de datos entre almacenes y entidades externas";
 choices[28][1] = "Se pueden representar relaciones entre entidades externas ";
 choices[28][2] = "No se debe representar la clave de acceso al almac&eacute;n sino s&oacute;lo la operaci&oacute;n que se realice en el almac&eacute;n";
 choices[28][3] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es s&iacute;ncrona";
 answers[28] = choices[28][1];
 units[28] = "81";
 comments[28] = "Id Pregunta: 2650. ";


//  Id pregunta: 2720 Año de creación de pregunta: 2006-01-01
 questions[29]= "30)  Seg&uacute;n Martins, el modelo de construcci&oacute;n de prototipos no est&aacute; recomendado:";
 choices[29]= new Array();
 choices[29][0] = "En proyectos muy grandes y a largo plazo (de duraci&oacute;n mayor a un a&ntilde;o) porque los requisitos ser&aacute; dif&iacute;cil mantenerlos congelados tanto tiempo";
 choices[29][1] = "En proyectos peque&ntilde;os (de duraci&oacute;n inferior a un mes) porque es dif&iacute;cil que los requisitos sean tan complejos como para no conocerlos";
 choices[29][2] = "S&iacute; est&aacute; recomendado para proyectos de tama&ntilde;o medio cuyo desarrollo va entre 3 y 5 meses";
 choices[29][3] = "Todas las anteriores respuestas son correctas";
 answers[29] = choices[29][3];
 units[29] = "76";
 comments[29] = "Id Pregunta: 2720. ";


//  Id pregunta: 2755 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  &iquest;Qu&eacute; se entiende por diagrama de despliegue en UML?";
 choices[30]= new Array();
 choices[30][0] = "Mostrar las relaciones f&iacute;sicas entre los componenetes del  sistema a desarrollar.";
 choices[30][1] = "Mostrar las relaciones entre procesos.";
 choices[30][2] = "Describir el comportamiento din&aacute;mico del sistema.";
 choices[30][3] = "Describir el comportamineto dinamico haciendo enfasis en los mensajes intercambiados.";
 answers[30] = choices[30][0];
 units[30] = "82";
 comments[30] = "Id Pregunta: 2755. ";


//  Id pregunta: 2806 Año de creación de pregunta: 2006-01-01
 questions[31]= "32)  En el control de calidad del SW se consideran m&eacute;todos de an&aacute;lisis est&aacute;ticos";
 choices[31]= new Array();
 choices[31][0] = "Las Auditor&iacute;as";
 choices[31][1] = "Las Auditor&iacute;as y revisiones";
 choices[31][2] = "La Verificaci&oacute;n formal ";
 choices[31][3] = "Todos son m&eacute;todos de an&aacute;lisis est&aacute;ticos";
 answers[31] = choices[31][3];
 units[31] = "87";
 comments[31] = "Id Pregunta: 2806. ";


//  Id pregunta: 2990 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  Indicar cu&aacute;l de las siguientes afirmaciones sobre el estandar GPRS no es correcta";
 choices[32]= new Array();
 choices[32][0] = "La tarificaci&oacute;n es por la cantidad de tr&aacute;fico transmitido y por calidades de servicio";
 choices[32][1] = "Se asigna un canal por usuario que permanecer&aacute; asignado aunque no se envien datos";
 choices[32][2] = "La voz y los datos se multiplexan, permitiendo su envio y recepci&oacute;n simultaneamente";
 choices[32][3] = "La velocidad de conexi&oacute;n puede llegar a los 50kbps";
 answers[32] = choices[32][1];
 units[32] = "108";
 comments[32] = "Id Pregunta: 2990. ";


//  Id pregunta: 3038 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de scripting?:";
 choices[33]= new Array();
 choices[33][0] = "JavaScript";
 choices[33][1] = "Jscript";
 choices[33][2] = "VBScript";
 choices[33][3] = "XMLScript";
 answers[33] = choices[33][3];
 units[33] = "114,115,116";
 comments[33] = "Id Pregunta: 3038. ";


//  Id pregunta: 3051 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;Qu&eacute; objetos intervienen en el nivel de aplicaci&oacute;n de la arquitectura internet de 3 capas?:";
 choices[34]= new Array();
 choices[34][0] = "P&aacute;ginas HTML";
 choices[34][1] = "Objetos de negocio";
 choices[34][2] = "Componentes de base de datos";
 choices[34][3] = "Todas intervienen";
 answers[34] = choices[34][1];
 units[34] = "113";
 comments[34] = "Id Pregunta: 3051. ";


//  Id pregunta: 3326 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  A la funcionalidad que se cre&oacute; para permitir ofrecer servicios espec&iacute;ficos del operador de telefon&iacute;a m&oacute;vil, utilizando un mecanismo de transporte similar al de los servicios suplementarios del est&aacute;ndar GSM, se le denomina:";
 choices[35]= new Array();
 choices[35][0] = "VHE";
 choices[35][1] = "iMode";
 choices[35][2] = "USSD";
 choices[35][3] = "HSCSD";
 answers[35] = choices[35][2];
 units[35] = "107";
 comments[35] = "Id Pregunta: 3326. ";


//  Id pregunta: 3446 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  El protocolo de gesti&oacute;n SNMP opera sobre el protocolo:";
 choices[36]= new Array();
 choices[36][0] = "UDP";
 choices[36][1] = "TCP";
 choices[36][2] = "&quot;a&quot; y &quot;b&quot; son ciertas";
 choices[36][3] = "&quot;a&quot; y &quot;b&quot; son falsas";
 answers[36] = choices[36][0];
 units[36] = "104";
 comments[36] = "Id Pregunta: 3446. ";


//  Id pregunta: 3488 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  En comunicaciones de datos, &iquest;sabe lo que es  'overrun'?:";
 choices[37]= new Array();
 choices[37][0] = "Cuando el sistema operativo o el procesador de comunicaciones paran por un exceso de temperatura";
 choices[37][1] = "Un switch que permite al sistema tener m&aacute;s rendimiento (bits /seg) bajo ciertas condiciones";
 choices[37][2] = "Una situaci&oacute;n en la que algunos paquetes pueden perderse debido a que llegan m&aacute;s r&aacute;pidamente de lo que pueden ser procesados";
 choices[37][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[37] = choices[37][2];
 units[37] = "102";
 comments[37] = "Id Pregunta: 3488. ";


//  Id pregunta: 3566 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  En un protocolo de nivel de enlace se denomina ventana a:";
 choices[38]= new Array();
 choices[38][0] = "Al env&iacute;o de una trama de control que indica al emisor que la trama de informaci&oacute;n ha llegado correctamente";
 choices[38][1] = "Al envio por el emisor de las tramas de informaci&oacute;n numeradas secuencialmente";
 choices[38][2] = "Al envio de los asentimientos numerados por cada una de las tramas de informaci&oacute;n recibidas";
 choices[38][3] = "Al n&uacute;mero m&aacute;ximo de tramas que en un momento dado pueden estar pendientes de confirmaci&oacute;n";
 answers[38] = choices[38][3];
 units[38] = "101";
 comments[38] = "Id Pregunta: 3566. ";


//  Id pregunta: 3583 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Indique la opci&oacute;n correcta respecto a la se&ntilde;alizaci&oacute;n en RDSI:";
 choices[39]= new Array();
 choices[39][0] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS7";
 choices[39][1] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal asociado y se le conoce como CCS7";
 choices[39][2] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS9";
 choices[39][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[39] = choices[39][0];
 units[39] = "103";
 comments[39] = "Id Pregunta: 3583. ";


//  Id pregunta: 3657 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Un BALUN:";
 choices[40]= new Array();
 choices[40][0] = "Es un adaptador de impedancias entre sistema asim&eacute;trico y sistema sim&eacute;trico.";
 choices[40][1] = "Adapta un conector RJ45 y BNC.";
 choices[40][2] = "Es un conector entre RJ11 y RJ45.";
 choices[40][3] = "S&oacute;lo se utiliza para fibra &oacute;ptica.";
 answers[40] = choices[40][0];
 units[40] = "99";
 comments[40] = "Id Pregunta: 3657. *: BALUN";


//  Id pregunta: 3837 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  SOAP:";
 choices[41]= new Array();
 choices[41][0] = "Es una especificaci&oacute;n para el intercambio de informaci&oacute;n estructurada en entornos descentralizados-distribuidos";
 choices[41][1] = "Fue propuesta originalmente por Microsoft";
 choices[41][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[41][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[41] = choices[41][3];
 units[41] = "113";
 comments[41] = "Id Pregunta: 3837. ";


//  Id pregunta: 4032 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;En qu&eacute; recomendaci&oacute;n se define el protocolo LAPF de Frame Relay?";
 choices[42]= new Array();
 choices[42][0] = "Q. 923";
 choices[42][1] = "Q. 920";
 choices[42][2] = "Q. 921";
 choices[42][3] = "Q. 922";
 answers[42] = choices[42][3];
 units[42] = "109";
 comments[42] = "Id Pregunta: 4032. ";


//  Id pregunta: 4048 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;En cual de los siguientes lenguajes de programaci&oacute;n ser&iacute;a m&aacute;s razonable desarrollar un sistema operativo moderno?";
 choices[43]= new Array();
 choices[43][0] = "Java";
 choices[43][1] = "C#";
 choices[43][2] = "C / C++";
 choices[43][3] = "OS Builder ";
 answers[43] = choices[43][2];
 units[43] = "111";
 comments[43] = "Id Pregunta: 4048. ";


//  Id pregunta: 4052 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Que sentido tiene pasar de IPv4 a IPV6";
 choices[44]= new Array();
 choices[44][0] = "El principal motivo es aumentar el ancho de banda";
 choices[44][1] = "Los nodos de internet cambiar&aacute;n a este protocolo el 1 de enero de 2014";
 choices[44][2] = "IPv6 permite un uso optimo de las tecnolog&iacute;as wireless";
 choices[44][3] = "Ninguna de las anteriores es correcta";
 answers[44] = choices[44][3];
 units[44] = "111";
 comments[44] = "Id Pregunta: 4052. ";


//  Id pregunta: 4070 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  Podemos definir spoofing como";
 choices[45]= new Array();
 choices[45][0] = "captura de datos sensibles mediante la escucha no autorizada";
 choices[45][1] = "amenaza propia de virus y gusanos";
 choices[45][2] = "Suplantaci&oacute;n de la direcci&oacute;n IP ";
 choices[45][3] = "Un mecanismo de enga&ntilde;o basado en t&eacute;cnicas de ingenier&iacute;a social";
 answers[45] = choices[45][2];
 units[45] = "112";
 comments[45] = "Id Pregunta: 4070. ";


//  Id pregunta: 4106 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  Un GigaPop es:";
 choices[46]= new Array();
 choices[46][0] = "1000 pops.";
 choices[46][1] = "Un nodo de interconexi&oacute;n del backbone de Internet 2.";
 choices[46][2] = "Ninguna de las anteriores";
 choices[46][3] = "a) y b) son ciertas.";
 answers[46] = choices[46][1];
 units[46] = "112";
 comments[46] = "Id Pregunta: 4106. ";


//  Id pregunta: 4122 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  La red geogr&aacute;ficamente dispersa se llama";
 choices[47]= new Array();
 choices[47][0] = "WAN";
 choices[47][1] = "LAN";
 choices[47][2] = "SAN";
 choices[47][3] = "PAN";
 answers[47] = choices[47][0];
 units[47] = "101";
 comments[47] = "Id Pregunta: 4122. ";


//  Id pregunta: 4186 Año de creación de pregunta: 2006-01-01
 questions[48]= "49)  Respecto al protocolo IP es falso que";
 choices[48]= new Array();
 choices[48][0] = "En IPv6 las direcciones anycast tienen un rango de numeraci&oacute;n diferenciado";
 choices[48][1] = "IPv4 permite priorizaci&oacute;n de tr&aacute;fico";
 choices[48][2] = "IPv6 permite la asignaci&oacute;n de direcciones multicast permanentes";
 choices[48][3] = "Se puede transmitir IPv6 sobre redes IPv4";
 answers[48] = choices[48][0];
 units[48] = "100";
 comments[48] = "Id Pregunta: 4186. ";


//  Id pregunta: 4356 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  Los contratos de fabricaci&oacute;n, por los que la cosa o cosas que hayan de ser entregadas por el empresario deban ser elaboradas con arreglo a caracter&iacute;sticas peculiares fijadas previamente por la Administraci&oacute;n, a&uacute;n cuando &eacute;sta se obligue a aportar, total o parcialmente, los materiales precisos, tienen la consideraci&oacute;n de contratos de:";
 choices[49]= new Array();
 choices[49][0] = "Obras.";
 choices[49][1] = "Suministro";
 choices[49][2] = "Servicios";
 choices[49][3] = "Bienes y servicios.";
 answers[49] = choices[49][1];
 units[49] = "41";
 comments[49] = "Id Pregunta: 4356. ";


//  Id pregunta: 4385 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  J2EE es:";
 choices[50]= new Array();
 choices[50][0] = "Un producto.";
 choices[50][1] = "Un servicio.";
 choices[50][2] = "Un estandar.";
 choices[50][3] = "Un entorno de desarrollo.";
 answers[50] = choices[50][2];
 units[50] = "60";
 comments[50] = "Id Pregunta: 4385. ";


//  Id pregunta: 4402 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  Seg&uacute;n Magerit v.2 los elementos del an&aacute;lisis de riesgos son:";
 choices[51]= new Array();
 choices[51][0] = "Impacto, riesgos calculados y riesgos intr&iacute;nsecos.";
 choices[51][1] = "Activos, amenazas y salvaguardas.";
 choices[51][2] = "Vulnerabilidades, riesgos e impacto.";
 choices[51][3] = "Entorno, sistema de informaci&oacute;n, informaci&oacute;n, funciones y otros.";
 answers[51] = choices[51][1];
 units[51] = "33";
 comments[51] = "Id Pregunta: 4402. ";


//  Id pregunta: 4467 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  El DNI digital permitir&aacute;:";
 choices[52]= new Array();
 choices[52][0] = "Firmar y cifrar.";
 choices[52][1] = "Solo firmar.";
 choices[52][2] = "Solo cifrar.";
 choices[52][3] = "Solo funciones 3DES";
 answers[52] = choices[52][1];
 units[52] = "74";
 comments[52] = "Id Pregunta: 4467. ";


//  Id pregunta: 4624 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;En que lenguaje esta basado XML? ";
 choices[53]= new Array();
 choices[53][0] = "HTML";
 choices[53][1] = "XSL";
 choices[53][2] = "SGML";
 choices[53][3] = "XTML";
 answers[53] = choices[53][2];
 units[53] = "69";
 comments[53] = "Id Pregunta: 4624. ";


//  Id pregunta: 4741 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP (Symmetric Multiprocessing) y MPP(Massively Paralleling Multiprocessing) es falsa?";
 choices[54]= new Array();
 choices[54][0] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido ensegmentos que se comuniquen entre s&iacute;.";
 choices[54][1] = "MPP no sufre cuello de botella que sufre SMP en el acceso a memoria";
 choices[54][2] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[54][3] = "Un cluster esta compuesto por dos o m&aacute;s ordenadores que se comportan como una sola m&aacute;quina";
 answers[54] = choices[54][2];
 units[54] = "45";
 comments[54] = "Id Pregunta: 4741. Examen 2006 JCYL";


//  Id pregunta: 4773 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  De acuerdo con lo establecido en la Ley 9/2014 General de Telecomunicaciones, &iquest;a cu&aacute;l de las siguientes entidades no le corresponde la competencia sancionadora en materia de telecomunicaciones?";
 choices[55]= new Array();
 choices[55][0] = "Al Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[55][1] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[55][2] = "A la Agencia Estatal de Radiocomunicaciones";
 choices[55][3] = "Todas tienen competencia sancionadora";
 answers[55] = choices[55][2];
 units[55] = "110";
 comments[55] = "Id Pregunta: 4773. ";


//  Id pregunta: 4908 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por &ldquo;proceso zombi&rdquo;?:";
 choices[56]= new Array();
 choices[56][0] = "Un proceso hijo que ha acabado de realizar sus tareas pero que el padre todav&iacute;a no ha ejecutado la orden de esperar a que el hijo acabe.";
 choices[56][1] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes.";
 choices[56][2] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo proceso";
 choices[56][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita.";
 answers[56] = choices[56][0];
 units[56] = "53,54";
 comments[56] = "Id Pregunta: 4908. Examen TIC B 2007";


//  Id pregunta: 4959 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con COBIT:";
 choices[57]= new Array();
 choices[57][0] = "Establece los siguientes dominios de control: Estudio de Viabilidad, An&aacute;lisis del Sistema, Dise&ntilde;o y Construcci&oacute;n,Implantaci&oacute;n y Aceptaci&oacute;n.";
 choices[57][1] = "Fue creada por INTOSAI (International Organization of Supreme audit. Institutions) en 1994.";
 choices[57][2] = "Establece un marco de objetivos de control a trav&eacute;s de 4 dominios y 34 objetivos de control de alto nivel.";
 choices[57][3] = "Establece que los recursos financieros son un tipo de recursos TIC.";
 answers[57] = choices[57][2];
 units[57] = "98";
 comments[57] = "Id Pregunta: 4959. Examen TIC B 2007";


//  Id pregunta: 4968 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  Los equipos utilizados para la interconexi&oacute;n de redes a nivel 5 seg&uacute;n el modelo OSI se denomina:";
 choices[58]= new Array();
 choices[58][0] = "Repetidores.";
 choices[58][1] = "Routers.";
 choices[58][2] = "Bridges.";
 choices[58][3] = "Gateways.";
 answers[58] = choices[58][3];
 units[58] = "102";
 comments[58] = "Id Pregunta: 4968. Examen TIC B 2007";


//  Id pregunta: 4990 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?:";
 choices[59]= new Array();
 choices[59][0] = "WDSL";
 choices[59][1] = "SOAP";
 choices[59][2] = "UDDI";
 choices[59][3] = "XHTML";
 answers[59] = choices[59][2];
 units[59] = "39";
 comments[59] = "Id Pregunta: 4990. Examen TIC A 2007";


//  Id pregunta: 5143 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[60]= new Array();
 choices[60][0] = "La prueba funcional o de caja negra se centra en el estudio de la especificaci&oacute;n del hardware.";
 choices[60][1] = "Una prueba funcional bien elegida es la que reduce el n&uacute;mero de otros casos necesarios para que la prueba sea razonable.";
 choices[60][2] = "En la prueba funcional debemos ejecutar todas las posibilidades de funcionamiento y todas las combinaciones de entradas y salidas.";
 choices[60][3] = "La prueba funcional nunca se fija en las entradas ni en las salidas, sino en el funcionamiento interno del programa.";
 answers[60] = choices[60][1];
 units[60] = "78";
 comments[60] = "Id Pregunta: 5143. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5211 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  En el proceso de reconocimiento de la voz, la fase en la que la informaci&oacute;n es grabada en formato digital es:";
 choices[61]= new Array();
 choices[61][0] = "Captura de la informaci&oacute;n";
 choices[61][1] = "Segmentaci&oacute;n y an&aacute;lisis de la se&ntilde;al";
 choices[61][2] = "Adaptaci&oacute;n al entorno";
 choices[61][3] = "Generar patrones";
 answers[61] = choices[61][0];
 units[61] = "94";
 comments[61] = "Id Pregunta: 5211. ";


//  Id pregunta: 5213 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  El Marco Europeo de Interoperabilidad se construye sobre la base de una serie de principios. Indicar cu&aacute;l de los siguientes no es uno de ellos:";
 choices[62]= new Array();
 choices[62][0] = "Multiling&uuml;ismo";
 choices[62][1] = "Seguridad";
 choices[62][2] = "Protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[62][3] = "Uso de soluciones unilaterales";
 answers[62] = choices[62][3];
 units[62] = "30";
 comments[62] = "Id Pregunta: 5213. ";


//  Id pregunta: 5220 Año de creación de pregunta: 2007-01-01
 questions[63]= "64)  La tarea &quot;Diagn&oacute;stico del Sistema Actual&quot; a qu&eacute; actividad del procesos Planificaci&oacute;n de Sistemas de Informaci&oacute;n pertenece";
 choices[63]= new Array();
 choices[63][0] = "Estudio de la informaci&oacute;n relevante";
 choices[63][1] = "Estudio de los Sistemas de Informaci&oacute;n Actuales";
 choices[63][2] = "Identificaci&oacute;n de Requisitos";
 choices[63][3] = "Dise&ntilde;o del modelo de Sistemas de Informaci&oacute;n";
 answers[63] = choices[63][3];
 units[63] = "86";
 comments[63] = "Id Pregunta: 5220. ";


//  Id pregunta: 5439 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[64]= new Array();
 choices[64][0] = "Fritz Machlup";
 choices[64][1] = "Charles Babbage";
 choices[64][2] = "Herman Hollerith";
 choices[64][3] = "Howard Aiken";
 answers[64] = choices[64][0];
 units[64] = "21";
 comments[64] = "Id Pregunta: 5439. Castilla y Le&oacute;n";


//  Id pregunta: 5447 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  &iquest;Por qu&eacute; el recorrido completo de tablas de gran tama&ntilde;o es un asunto cr&iacute;tico en la definici&oacute;n de sentencias SQL?";
 choices[65]= new Array();
 choices[65][0] = "Porque es indicativo de una futura ejecuci&oacute;n &oacute;ptima";
 choices[65][1] = "Porque es muy probable que se requiera adaptaciones para el uso de &iacute;ndices";
 choices[65][2] = "Porque el recorrido completo de tablas deber&iacute;a ser normalizado desde el dise&ntilde;o de la base de datos";
 choices[65][3] = "Porque el recorrido completo de una tabla nunca es &oacute;ptimo";
 answers[65] = choices[65][1];
 units[65] = "58";
 comments[65] = "Id Pregunta: 5447. Castilla y Le&oacute;n";


//  Id pregunta: 5544 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Se&ntilde;ale la respuesta correcta respecto a la entrada en vigor de la La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos:";
 choices[66]= new Array();
 choices[66][0] = "A partir del d&iacute;a siguiente a su publicaci&oacute;n en el BOE.";
 choices[66][1] = "Los derechos reconocidos en el art 6 de la ley 11/2007, podr&aacute;n ejercerse respecto de los procedimientos y actuaciones adaptados a la misma, desde la entrada en vigor de dicha ley.";
 choices[66][2] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado y para los Organismos Publicos  vinculados o dependientes de &eacute;sta, los derechos reconocidos en el art 6 de dicha ley, podr&aacute;n ejercerse respecto a la totalidad de procedimientos y actuaciones de su competencia, a partir del 31-12-2009.";
 choices[66][3] = "Todas las anteriores son correctas.";
 answers[66] = choices[66][3];
 units[66] = "43";
 comments[66] = "Id Pregunta: 5544. ";


//  Id pregunta: 5622 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  En un sistema operativo UNIX queremos que un fichero pueda ser actualizado &uacute;nicamente por su propietario y por los usuarios que pertenecen al mismo grupo que el propietario. Indicar cuales ser&iacute;an los permisos adecuados:";
 choices[67]= new Array();
 choices[67][0] = "755";
 choices[67][1] = "740";
 choices[67][2] = "760";
 choices[67][3] = "777";
 answers[67] = choices[67][2];
 units[67] = "53";
 comments[67] = "Id Pregunta: 5622. ";


//  Id pregunta: 5662 Año de creación de pregunta: 2009-01-01
 questions[68]= "69)  Seg&uacute;n el Real Decreto 1720/2007, que se entiende por &quot;Fichero no automatizado&quot;";
 choices[68]= new Array();
 choices[68][0] = "Todo conjunto organizado de datos de car&aacute;cter personal, que permita el acceso a los datos con arreglo a criterios determinados, cualquiera que fuere la forma o modalidad de su creaci&oacute;n, almacenamiento, organizaci&oacute;n y acceso. ";
 choices[68][1] = "Todo conjunto de datos de car&aacute;cter personal organizado de forma no automatizada y estructurado conforme a criterios espec&iacute;ficos relativos a personas f&iacute;sicas, que permitan acceder sin esfuerzos desproporcionados a sus datos personales, ya sea aqu&eacute;l centralizado, descentralizado o repartido de forma funcional o geogr&aacute;fica";
 choices[68][2] = "Todo conjunto organizado de datos, que permita el acceso a los datos con arreglo a criterios determinados, cualquiera que fuere la forma o modalidad de su creaci&oacute;n, almacenamiento, organizaci&oacute;n y acceso. ";
 choices[68][3] = "No existe tal definici&oacute;n en el nombrado Real Decreto";
 answers[68] = choices[68][1];
 units[68] = "29";
 comments[68] = "Id Pregunta: 5662. ";


//  Id pregunta: 5692 Año de creación de pregunta: 2003-01-01
 questions[69]= "70)  Una de las zonas de datos que se encuentran dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico es la denominada zona de seguridad. Esta zona que almacena, entre otros, los datos biom&eacute;tricos, es accesible por:";
 choices[69]= new Array();
 choices[69][0] = "El ciudadano";
 choices[69][1] = "El ciudadano y la Direcci&oacute;n General de la Polic&iacute;a";
 choices[69][2] = " La Direcci&oacute;n General de la Polic&iacute;a";
 choices[69][3] = "Es una zona p&uacute;blica";
 answers[69] = choices[69][2];
 units[69] = "74";
 comments[69] = "Id Pregunta: 5692. ";


//  Id pregunta: 5693 Año de creación de pregunta: 2003-01-01
 questions[70]= "71)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Se&ntilde;ale cu&aacute;l de las siguientes no es una de ellas:";
 choices[70]= new Array();
 choices[70][0] = "Zona p&uacute;blica";
 choices[70][1] = " Zona de seguridad";
 choices[70][2] = "Zona privada";
 choices[70][3] = "Zona confidencial";
 answers[70] = choices[70][3];
 units[70] = "74";
 comments[70] = "Id Pregunta: 5693. ";


//  Id pregunta: 5703 Año de creación de pregunta: 2003-01-01
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n falsa sobre SOAP:";
 choices[71]= new Array();
 choices[71][0] = "Funciona s&oacute;lo sobre http";
 choices[71][1] = "Tiene como base XML";
 choices[71][2] = "La cabecera header es opcional";
 choices[71][3] = "El desarrollo body contiene la informaci&oacute;n principal";
 answers[71] = choices[71][0];
 units[71] = "51";
 comments[71] = "Id Pregunta: 5703. ";


//  Id pregunta: 5800 Año de creación de pregunta: 2009-01-01
 questions[72]= "73)  En base a la ley 59/2003, en que se diferencia la firma electr&oacute;nica reconocida de la firma electr&oacute;nica avanzada?";
 choices[72]= new Array();
 choices[72][0] = "En la clase de certificado electr&oacute;nico en que se basa.";
 choices[72][1] = "En el tipo de dispositivo criptogr&aacute;fico utilizado para la custodia de la clave privada.";
 choices[72][2] = "En la duracion maxima de su validez. La validez de la firma electr&oacute;nica reconocida nunca podra exceder de 4 a&ntilde;os.";
 choices[72][3] = "Las respuestas A y B son correctas.";
 answers[72] = choices[72][3];
 units[72] = "30";
 comments[72] = "Id Pregunta: 5800. ";


//  Id pregunta: 5974 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  Dadas las siguientes relaciones: A={ax,ay,az,by,bz,cx,cy} y B={x,z} &iquest;Cu&aacute;l ser&iacute;a el resultado de la operaci&oacute;n A dividido entre B?";
 choices[73]= new Array();
 choices[73][0] = "{a,b,c}.";
 choices[73][1] = "{ax,az,bz,cx}.";
 choices[73][2] = "{ay,by,cy}.";
 choices[73][3] = "{a}.";
 answers[73] = choices[73][3];
 units[73] = "58";
 comments[73] = "Id Pregunta: 5974. TIC A 2009";


//  Id pregunta: 6141 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Qu&eacute; es el MOS (Mean Opinion Score)?";
 choices[74]= new Array();
 choices[74][0] = "Es una medida subjetiva de calidad de sonido, que se suele utilizar en sistemas de VoIP";
 choices[74][1] = "Es una de la pr&aacute;cticas que propone M&eacute;trica 3 para las reuniones de trabajo, junto con las reuniones, las entrevistas y el JAD (Joint Application Design)";
 choices[74][2] = "Es una t&eacute;cnica de estimaci&oacute;n de esfuerzo software, que se utiliza, por ejemplo, cuando no hay datos suficientes para estimar puntos funci&oacute;n";
 choices[74][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[74] = choices[74][0];
 units[74] = "100, 109";
 comments[74] = "Id Pregunta: 6141. ";


//  Id pregunta: 6158 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  Indique la afirmaci&oacute;n correcta sobre los diferentes codecs de audio y video en videoconferencia H.323";
 choices[75]= new Array();
 choices[75][0] = "G711 y G722 son codecs de audio mientras que H261 y H263 son codecs  de video";
 choices[75][1] = "G711 y G722 son codecs de video mientras que H261 y H263 son codecs  de audio";
 choices[75][2] = "G711 y H261 son codecs de audio mientras que G722 y H263 son codecs  de video";
 choices[75][3] = "G711 y H261 son codecs de video mientras que G722 y H263 son codecs  de audio";
 answers[75] = choices[75][0];
 units[75] = "117";
 comments[75] = "Id Pregunta: 6158. ";


//  Id pregunta: 6201 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  De acuerdo con M&eacute;trica versi&oacute;n 3, &iquest;qui&eacute;n participa en la obtenci&oacute;n del producto &quot;Entorno de pruebas unitarias&quot;, de la tarea &quot;Preparaci&oacute;n del entorno de las pruebas unitarias&quot;?";
 choices[76]= new Array();
 choices[76][0] = "T&eacute;cnicos de sistemas";
 choices[76][1] = "T&eacute;cnicos de sistemas y programadores";
 choices[76][2] = "Programadores";
 choices[76][3] = "Analistas, Programadores y T&eacute;cnicos de sistemas";
 answers[76] = choices[76][1];
 units[76] = "86";
 comments[76] = "Id Pregunta: 6201. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6297 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Qu&eacute; se entiende por l&iacute;nea base en el control de versiones en el an&aacute;lisis de un sistema de informaci&oacute;n?";
 choices[77]= new Array();
 choices[77][0] = "Punto inicial de partida de un sistema de informaci&oacute;n, en el cual no hay nada desarrollado";
 choices[77][1] = "Especificaci&oacute;n o producto que ha sido revisado formalmente. Sirve de base para un desarrollo posterior";
 choices[77][2] = "Documentaci&oacute;n del sistema de informaci&oacute;n almacenada en un dispositivo de almacenamiento seguro";
 choices[77][3] = "Ninguna de las anteriores es cierta";
 answers[77] = choices[77][1];
 units[77] = "78";
 comments[77] = "Id Pregunta: 6297. ";


//  Id pregunta: 6379 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  &iquest;A qui&eacute;n corresponde aprobar el Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n?";
 choices[78]= new Array();
 choices[78][0] = "Al Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[78][1] = "Al Centro Criptol&oacute;gico Nacional";
 choices[78][2] = "Al Gobierno";
 choices[78][3] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[78] = choices[78][0];
 units[78] = "43";
 comments[78] = "Id Pregunta: 6379. Art&iacute;culo 14 ENI";


//  Id pregunta: 6488 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes es una herramienta IDS?";
 choices[79]= new Array();
 choices[79][0] = "Nessus";
 choices[79][1] = "Snort";
 choices[79][2] = "Nagios";
 choices[79][3] = "NetSaint";
 answers[79] = choices[79][1];
 units[79] = "111";
 comments[79] = "Id Pregunta: 6488. Castilla La Mancha 2009";


//  Id pregunta: 6520 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  La versi&oacute;n 2.0 de JavaServer Faces (JSF) est&aacute; definida en la especificaci&oacute;n:";
 choices[80]= new Array();
 choices[80][0] = "JSR 186";
 choices[80][1] = "JSR 168";
 choices[80][2] = "JSR 175";
 choices[80][3] = "JSR 314";
 answers[80] = choices[80][3];
 units[80] = "116";
 comments[80] = "Id Pregunta: 6520. ";


//  Id pregunta: 7162 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  La copia de seguridad incremental en Linux:";
 choices[81]= new Array();
 choices[81][0] = "Consiste en copiar todos los elementos que han sido modificados desde la &uacute;ltima copia de seguridad completa o incremental";
 choices[81][1] = "Se centra espec&iacute;ficamente en las carpetas y archivos que han sido modificados desde la &uacute;ltima copia de seguridad completa";
 choices[81][2] = "Consiste en crear una copia de seguridad de todas las carpetas y archivos que se deseen copiar";
 choices[81][3] = "Es implementada habitualmente mediante el comando ntbackup";
 answers[81] = choices[81][0];
 units[81] = "53";
 comments[81] = "Id Pregunta: 7162. Examen TIC B 2009";


//  Id pregunta: 7264 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)  Existen diferencias entre ADSL2 y ADSL2+. Se&ntilde;ale la INCORRECTA:";
 choices[82]= new Array();
 choices[82][0] = "La velocidad m&aacute;xima. ADSL2+ alcanza mayores velocidades";
 choices[82][1] = "El ancho de banda. ADSL2+ ocupa mayor ancho de banda";
 choices[82][2] = "La infraestructura necesaria. ADSL2+ requiere una instalaci&oacute;n m&aacute;s compleja que ADSL2 para proporcionar la transici&oacute;n desde ADSL";
 choices[82][3] = "El n&uacute;mero de pares de cobre entrelazados. ADSL2+ requiere el doble de pares de cobre entrelazados";
 answers[82] = choices[82][3];
 units[82] = "107";
 comments[82] = "Id Pregunta: 7264. Examen TIC B 2009";


//  Id pregunta: 7265 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)  En telefon&iacute;a m&oacute;vil, la tecnolog&iacute;a GSM utiliza las siguientes bases de datos de usuarios";
 choices[83]= new Array();
 choices[83][0] = "HLR y VLR";
 choices[83][1] = "VLR y MSC";
 choices[83][2] = "NMC y OMC";
 choices[83][3] = "AUC y NMC";
 answers[83] = choices[83][0];
 units[83] = "108";
 comments[83] = "Id Pregunta: 7265. Examen TIC B 2009";


//  Id pregunta: 7287 Año de creación de pregunta: 2010-01-01
 questions[84]= "85)  Las redes de pr&oacute;xima generaci&oacute;n (NGN) son seg&uacute;n la UIT (uni&oacute;n internacional de telecomunicaciones):";
 choices[84]= new Array();
 choices[84][0] = "Las redes que engloban las nuevas tecnolog&iacute;as inal&aacute;mbricas, tambi&eacute;n conocidas como redes de cuarta generaci&oacute;n (4G)";
 choices[84][1] = "Las redes que ser&aacute;n desplegadas para la generaci&oacute;n del siglo XXI, las cuales garantizar&aacute;n una cobertura real del 100%";
 choices[84][2] = "Las redes de los pr&oacute;ximos a&ntilde;os, basadas en el protocolo Internet IP y que ser&aacute;n utilizadas para todo tipo de servicios";
 choices[84][3] = "Las futuras redes basadas en conmutaci&oacute;n de circuitos, que proporcionar&aacute;n una calidad de servicio superior y permitir&aacute;n comunicaciones de voz y datos a altas velocidades";
 answers[84] = choices[84][2];
 units[84] = "100, 107";
 comments[84] = "Id Pregunta: 7287. Examen TIC B 2009";


//  Id pregunta: 8053 Año de creación de pregunta: 2010-01-01
 questions[85]= "86)   Los adjudicatarios de los contratos regulados por el RDL 2/2000, de 16 de junio, est&aacute;n obligados a constituir una garant&iacute;a definitiva por un importe del:";
 choices[85]= new Array();
 choices[85][0] = " 2% del presupuesto del contrato.";
 choices[85][1] = " 2% del importe de adjudicaci&oacute;n.";
 choices[85][2] = " 4% del presupuesto del contrato.";
 choices[85][3] = " 4% del importe de adjudicaci&oacute;n.";
 answers[85] = choices[85][3];
 units[85] = "NULL";
 comments[85] = "Id Pregunta: 8053. Map 2007";


//  Id pregunta: 8224 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  De acuerdo con la normativa de protecci&oacute;n de datos de car&aacute;cter personal, proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o Diario oficial correspondiente, se considerar&aacute;:";
 choices[86]= new Array();
 choices[86][0] = "Infracci&oacute;n leve.";
 choices[86][1] = "Infracci&oacute;n notable.";
 choices[86][2] = "Infracci&oacute;n grave.";
 choices[86][3] = "Infracci&oacute;n muy grave.";
 answers[86] = choices[86][2];
 units[86] = "29";
 comments[86] = "Id Pregunta: 8224. Examen TIC A1 2010";


//  Id pregunta: 8273 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  En general, al pasar una relaci&oacute;n 1:N con atributos propios, del modelo entidad - relaci&oacute;n al modelo relacional:";
 choices[87]= new Array();
 choices[87][0] = "Se crea una nueva tabla cuya clave principal es el atributo de la relaci&oacute;n.";
 choices[87][1] = "Se crea una nueva tabla cuya clave es la concatenaci&oacute;n de las claves de las dos entidades y tiene un campo adicional para el atributo de la relaci&oacute;n.";
 choices[87][2] = "La clave de la entidad que participa con cardinalidad N y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad 1.";
 choices[87][3] = "La clave de la entidad que participa con cardinalidad 1 y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad N.";
 answers[87] = choices[87][3];
 units[87] = "58";
 comments[87] = "Id Pregunta: 8273. Examen TIC A1 2010";


//  Id pregunta: 8297 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  Hablando del modelo OSI &iquest;Cu&aacute;l de las siguientes parejas NO es correcta?";
 choices[88]= new Array();
 choices[88][0] = "Nivel 4 - HDLC. ";
 choices[88][1] = "Nivel 1 - CSMA/CD.";
 choices[88][2] = "Nivel 3 - X.25.";
 choices[88][3] = "Nivel 2 - LAPB";
 answers[88] = choices[88][0];
 units[88] = "100";
 comments[88] = "Id Pregunta: 8297. Examen TIC A2 2010";


//  Id pregunta: 8454 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  El est&aacute;ndar de la red X.25 especifica las siguientes capas de protocolos:";
 choices[89]= new Array();
 choices[89][0] = "Capa F&iacute;sica, de enlace y de paquete";
 choices[89][1] = "Capa F&iacute;sica, de enlace y de sesi&oacute;n";
 choices[89][2] = "Capa de transporte, de sesi&oacute;n y de presentaci&oacute;n";
 choices[89][3] = "Capa f&iacute;sica, de transporte y de presentaci&oacute;n";
 answers[89] = choices[89][0];
 units[89] = "103";
 comments[89] = "Id Pregunta: 8454. Analista Ayto. Madrid 2010";


//  Id pregunta: 8634 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes NO es un grupo de actividad de la Gesti&oacute;n de Proyectos?";
 choices[90]= new Array();
 choices[90][0] = "Actividades de Seguimiento y Control.";
 choices[90][1] = "Actividades de Planificaci&oacute;n del Proyecto.";
 choices[90][2] = "Actividades de Finalizaci&oacute;n del Proyecto.";
 choices[90][3] = "Actividades de Inicio del Proyecto.";
 answers[90] = choices[90][1];
 units[90] = "86";
 comments[90] = "Id Pregunta: 8634. Examen TIC A2 2010 interna";


//  Id pregunta: 8840 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)   Los conceptos de switch zoning y LUN masking en una red de almacenamiento FC (Fiber Channel)";
 choices[91]= new Array();
 choices[91][0] = " Permiten restringir la conectividad de red entre clientes FC, y gestionar su m&aacute;scara de red din&aacute;micamente ";
 choices[91][1] = " Son utilizados en la administraci&oacute;n de rob&oacute;ticas LTO para copias de seguridad de los discos virtuales";
 choices[91][2] = " Permiten al administrador restringir la visibilidad entre clientes por puerto o WWN, as&iacute; como el acceso a un disco virtual ";
 choices[91][3] = "Ambos conceptos son incompatibles en una red FC ";
 answers[91] = choices[91][2];
 units[91] = "48";
 comments[91] = "Id Pregunta: 8840. Examen UC3M 2010";


//  Id pregunta: 8992 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  La ley de econom&iacute;a sostenible ha modificado las cuant&iacute;as de las sanciones fijadas en la LOPD &iquest;C&oacute;mo?";
 choices[92]= new Array();
 choices[92][0] = "Ha aumentado todas";
 choices[92][1] = "Ha disminuido todas";
 choices[92][2] = "Ha disminuido la m&iacute;nima y aumentado la m&aacute;xima";
 choices[92][3] = "Ha aumentado la m&iacute;nima y disminuido la m&aacute;xima";
 answers[92] = choices[92][3];
 units[92] = "29";
 comments[92] = "Id Pregunta: 8992. ";


//  Id pregunta: 9197 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[93]= new Array();
 choices[93][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[93][1] = "Si, como obra literaria.";
 choices[93][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[93][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[93] = choices[93][3];
 units[93] = "36";
 comments[93] = "Id Pregunta: 9197. ";


//  Id pregunta: 9523 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.320:";
 choices[94]= new Array();
 choices[94][0] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 choices[94][1] = "Utiliza como est&aacute;ndares de cifrado H.233 y H.244";
 choices[94][2] = "Uno de los tama&ntilde;os de cuadro es CIF (352x288) ";
 choices[94][3] = "Uno de los tama&ntilde;os de cuadro es QCIF (176x144) ";
 answers[94] = choices[94][1];
 units[94] = "117";
 comments[94] = "Id Pregunta: 9523. ";


//  Id pregunta: 9636 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Qu&eacute; n&uacute;mero m&aacute;ximo de m&aacute;quinas virtuales por anfitri&oacute;n soporta el sistema Hyper-V de Windows 2012 Server?";
 choices[95]= new Array();
 choices[95][0] = "256";
 choices[95][1] = "512";
 choices[95][2] = "1024";
 choices[95][3] = "2048";
 answers[95] = choices[95][2];
 units[95] = "56";
 comments[95] = "Id Pregunta: 9636. ";


//  Id pregunta: 10042 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[96]= new Array();
 choices[96][0] = "RSVP ";
 choices[96][1] = "ARP";
 choices[96][2] = "802.1ar ";
 choices[96][3] = "H.264";
 answers[96] = choices[96][0];
 units[96] = "100, 109";
 comments[96] = "Id Pregunta: 10042. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10294 Año de creación de pregunta: 2010-01-01
 questions[97]= "98)  Indique cu&aacute;l de los siguientes es un tipo v&aacute;lido de cable de par trenzado seg&uacute;n su aislamiento o apantallamiento:";
 choices[97]= new Array();
 choices[97][0] = "scp";
 choices[97][1] = "htp";
 choices[97][2] = "ftp";
 choices[97][3] = "ssh";
 answers[97] = choices[97][2];
 units[97] = "99";
 comments[97] = "Id Pregunta: 10294. TIC A2, libre, examen 2013";


//  Id pregunta: 10426 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta. ";
 choices[98]= new Array();
 choices[98][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[98][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[98][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[98][3] = "Las anteriores a) b) y c) son correctas.";
 answers[98] = choices[98][3];
 units[98] = "76";
 comments[98] = "Id Pregunta: 10426. Examen TIC A1 2013";


//  Id pregunta: 10563 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Los controles correctivos tienen como objeto:";
 choices[99]= new Array();
 choices[99][0] = "reducir el riesgo ante una debilidad existente";
 choices[99][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[99][2] = "Solucionar problemas detectados por controles detectivos";
 choices[99][3] = "Reportar errores";
 answers[99] = choices[99][2];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10563. ";


