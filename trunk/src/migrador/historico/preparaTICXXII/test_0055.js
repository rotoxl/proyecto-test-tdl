/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 240 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  En un gr&aacute;fico PERT los nodos representan:";
 choices[0]= new Array();
 choices[0][0] = "Actividades.";
 choices[0][1] = "Sucesos.";
 choices[0][2] = "El camino cr&iacute;tico.";
 choices[0][3] = "La holgura de una actividad.";
 answers[0] = choices[0][1];
 units[0] = "27";
 comments[0] = "Id Pregunta: 240. ";


//  Id pregunta: 263 Año de creación de pregunta: 2009-01-01
 questions[1]= "2)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en el &aacute;mbito de la LOPD:";
 choices[1]= new Array();
 choices[1][0] = "La normativa de protecci&oacute;n de datos es aplicable s&oacute;lo a ficheros automatizados que contengan datos personales de personas f&iacute;sicas";
 choices[1][1] = "La normativa de protecci&oacute;n de datos es aplicable tanto a ficheros automatizados como no automatizados que contengan datos de car&aacute;cter personal";
 choices[1][2] = "La normativa de protecci&oacute;n de datos no es aplicable a personas f&iacute;sicas ni jur&iacute;dicas";
 choices[1][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[1] = choices[1][1];
 units[1] = "29";
 comments[1] = "Id Pregunta: 263. ";


//  Id pregunta: 274 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Indique cu&aacute;l de las siguientes alternativas se refiere a una de las consecuencias organizativas de la transformaci&oacute;n de una organizaci&oacute;n tradicional en una organizaci&oacute;n basada en la informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Esa transformaci&oacute;n no tiene consecuencias organizativas";
 choices[2][1] = "El empleo de nuevas tecnolog&iacute;as";
 choices[2][2] = "El aumento del n&uacute;mero de gestores";
 choices[2][3] = "La reducci&oacute;n del n&uacute;mero de niveles jer&aacute;rquicos";
 answers[2] = choices[2][3];
 units[2] = "22";
 comments[2] = "Id Pregunta: 274. ";


//  Id pregunta: 341 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La red de comunicaci&oacute;n en rueda de una organizaci&oacute;n es:";
 choices[3]= new Array();
 choices[3][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[3][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[3][2] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;d&rsquo; son falsas";
 choices[3][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[3] = choices[3][2];
 units[3] = "23";
 comments[3] = "Id Pregunta: 341. ";


//  Id pregunta: 674 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  La firma electr&oacute;nica se regula seg&uacute;n la base normativa descrita en:";
 choices[4]= new Array();
 choices[4][0] = "Real Decreto Ley Firma Electr&oacute;nica 213/2001";
 choices[4][1] = "Ley Firma Electr&oacute;nica 59/2003";
 choices[4][2] = "Real Decreto Ley Firma Electr&oacute;nica 15/1999";
 choices[4][3] = "Real Decreto Ley Firma Electr&oacute;nica 30/1998";
 answers[4] = choices[4][1];
 units[4] = "30";
 comments[4] = "Id Pregunta: 674. ";


//  Id pregunta: 725 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  Seg&uacute;n su comportamiento durante la ejecuci&oacute;n de un programa, las estructuras de datos se pueden clasificar en:";
 choices[5]= new Array();
 choices[5][0] = "Est&aacute;ticas y din&aacute;micas";
 choices[5][1] = "De clase y de objeto";
 choices[5][2] = "De iteraci&oacute;n, de recursi&oacute;n y de bifurcaci&oacute;n";
 choices[5][3] = "De flujo de control y de flujo de datos";
 answers[5] = choices[5][0];
 units[5] = "57";
 comments[5] = "Id Pregunta: 725. Examen TIC MAP B 2004";


//  Id pregunta: 769 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  Dada la arquitectura de supercomputaci&oacute;n MPP, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[6]= new Array();
 choices[6][0] = "Distintas CPU acceden a la misma &aacute;rea de memoria";
 choices[6][1] = "Distintas CPU acceden a sus propias &aacute;reas de memoria";
 choices[6][2] = "Cada CPU puede acceder tanto a su propia &aacute;rea de memoria como a un &aacute;rea com&uacute;n";
 choices[6][3] = "ninguna de las anteriores";
 answers[6] = choices[6][1];
 units[6] = "45";
 comments[6] = "Id Pregunta: 769. ";


//  Id pregunta: 784 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Cual de estas tecnologias ser&iacute;a v&aacute;lida para la conexi&oacute;n en una red de area personal de los perif&eacute;ricos m&aacute;s habituales?";
 choices[7]= new Array();
 choices[7][0] = "Ethernet";
 choices[7][1] = "Bluetooth";
 choices[7][2] = "Wifi";
 choices[7][3] = "WLAN";
 answers[7] = choices[7][1];
 units[7] = "47";
 comments[7] = "Id Pregunta: 784. SS-A 2004";


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


//  Id pregunta: 1236 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  La norma ANSI/SQL se corresponde con la norma ISO:";
 choices[9]= new Array();
 choices[9][0] = "ISO 7498";
 choices[9][1] = "ISO 9735";
 choices[9][2] = "ISO 9075";
 choices[9][3] = "ISO 9945-1";
 answers[9] = choices[9][2];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1236. ";


//  Id pregunta: 1271 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Los certificados digitales o 'digital IDs' est&aacute;n definidos en:";
 choices[10]= new Array();
 choices[10][0] = "RSA Public Key Structure";
 choices[10][1] = "X.509v3 de ITU";
 choices[10][2] = "RFC 1661 de IAB";
 choices[10][3] = "Verisign doc 1992/21";
 answers[10] = choices[10][1];
 units[10] = "73";
 comments[10] = "Id Pregunta: 1271. ";


//  Id pregunta: 1287 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Marcar la correcta respecto de los algoritmos criptogr&aacute;ficos:";
 choices[11]= new Array();
 choices[11][0] = "El algoritmo de cifra de Merkle-Hellman es de clave dispersa";
 choices[11][1] = "El algoritmo de cifra de Merkle-Hellman es de clave &uacute;nica";
 choices[11][2] = "El algoritmo DES es de clave p&uacute;blica";
 choices[11][3] = "El algoritmo DES es de clave sim&eacute;trica";
 answers[11] = choices[11][3];
 units[11] = "72";
 comments[11] = "Id Pregunta: 1287. ";


//  Id pregunta: 1339 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Seg&uacute;n la WfMC, un workflow se define como:";
 choices[12]= new Array();
 choices[12][0] = "Automatizaci&oacute;n de un procedimiento de negocio, durente la cual los documentos, la informaci&oacute;n o las tareas pasan de un participante a otro de acuerdo a un conjunto de reglas de procedimiento";
 choices[12][1] = "Una descripci&oacute;n de una pieza de trabajo que forma un paso l&oacute;gico dentro de un proceso";
 choices[12][2] = "La representaci&oacute;n del trabajo que tiene que ser procesado (por un participante) en el contexto de una actividad dentro de un proceso";
 choices[12][3] = "El software que controla la ejecuci&oacute;n de programas en los mainframes, enviando mensajes a las consolas cuando se detecta alguna incidencia";
 answers[12] = choices[12][0];
 units[12] = "71";
 comments[12] = "Id Pregunta: 1339. ";


//  Id pregunta: 1377 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  TTP:";
 choices[13]= new Array();
 choices[13][0] = "La Top Testing Policy es una pol&iacute;tica que se implanta en organizaciones con un fuerte desarrollo de la calidad del software, para hacer de las pruebas algo fundamental";
 choices[13][1] = "Training To Practise es un tipo de trabajo en equipo que acelera el tiempo en que un empleado nuevo puede comenzar a desempe&ntilde;ar su funci&oacute;n.";
 choices[13][2] = "Una Trusted Third Party es una tercera parte de confianza, es decir una entidad en la que confiamos, y de la que aceptaremos todo lo que firme";
 choices[13][3] = "Todas son falsas";
 answers[13] = choices[13][2];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1377. ";


//  Id pregunta: 1599 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  En un modelo de datos jer&aacute;rquico:";
 choices[14]= new Array();
 choices[14][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[14][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[14][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[14][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[14] = choices[14][1];
 units[14] = "57";
 comments[14] = "Id Pregunta: 1599. Junta Andaluc&iacute;a";


//  Id pregunta: 1605 Año de creación de pregunta: 2003-01-01
 questions[15]= "16)  Gnutella es un sistema Peer-to-Peer que:";
 choices[15]= new Array();
 choices[15][0] = "Tiene una arquitectura jerarquizada";
 choices[15][1] = "Es tambi&eacute;n un protocolo que consta de cuatro tipos de mensajes";
 choices[15][2] = "Permite el intercambio no centralizado de recetas de cocina.";
 choices[15][3] = "Mantiene una base de datos centralizada que ofrece a sus participantes";
 answers[15] = choices[15][2];
 units[15] = "62";
 comments[15] = "Id Pregunta: 1605. ";


//  Id pregunta: 1693 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Para definir un sistema SIMD se podr&iacute;a decir que &hellip;:";
 choices[16]= new Array();
 choices[16][0] = "Una instrucci&oacute;n no puede actuar sobre alguno de los elementos de procesamiento.";
 choices[16][1] = "Una instrucci&oacute;n act&uacute;a sobre un elemento de procesamiento.";
 choices[16][2] = "Una instrucci&oacute;n act&uacute;a sobre uno o varios elementos de procesamiento.";
 choices[16][3] = "Ninguna de las anteriores.";
 answers[16] = choices[16][2];
 units[16] = "45";
 comments[16] = "Id Pregunta: 1693. ";


//  Id pregunta: 1712 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Ordene de menor a mayor seg&uacute;n el n&uacute;mero de usuarios y carga de trabajo esperado:";
 choices[17]= new Array();
 choices[17][0] = "PDA, PC, estaci&oacute;n de trabajo, miniordenador, mainframe";
 choices[17][1] = "PDA, miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 choices[17][2] = "PDA, PC, miniordenador, estaci&oacute;n de trabajo, mainframe";
 choices[17][3] = "miniordenador, PDA, PC, estaci&oacute;n de trabajo, mainframe";
 answers[17] = choices[17][0];
 units[17] = "49";
 comments[17] = "Id Pregunta: 1712. ";


//  Id pregunta: 1802 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Qu&eacute; categoria de software  no se incluye tipicamente en un producto de gesti&oacute;n del conocimiento?";
 choices[18]= new Array();
 choices[18][0] = "Buscador / Indexador";
 choices[18][1] = "Categorizador automatico";
 choices[18][2] = "Repositorio de documentos";
 choices[18][3] = "LMS";
 answers[18] = choices[18][3];
 units[18] = "64";
 comments[18] = "Id Pregunta: 1802. ";


//  Id pregunta: 1867 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  En el protocolo LDAP:";
 choices[19]= new Array();
 choices[19][0] = "La operaci&oacute;n bind permite autenticar al cliente frente al  directorio";
 choices[19][1] = "SASL se a&ntilde;adi&oacute; en LDAP v3";
 choices[19][2] = "La operaci&oacute;n unbind cierra la conexi&oacute;n con el servidor LDAP";
 choices[19][3] = "Todas las anteriores";
 answers[19] = choices[19][3];
 units[19] = "74";
 comments[19] = "Id Pregunta: 1867. ";


//  Id pregunta: 1912 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las arquitecturas Grid?:";
 choices[20]= new Array();
 choices[20][0] = "Resultados de supercomputaci&oacute;n (alta transaccionalidad) a bajo coste.";
 choices[20][1] = "La obsolescencia deja de ser un problema.";
 choices[20][2] = "Los nodos de la red no son dedicados. Podemos parametrizar exactamente el porcentaje de dedicaci&oacute;n a la red.";
 choices[20][3] = "No ser&aacute; necesario modificar las aplicaciones desarrolladas para que &eacute;stas puedan ser ejecutadas en la arquitetura Grid.";
 answers[20] = choices[20][3];
 units[20] = "45";
 comments[20] = "Id Pregunta: 1912. ";


//  Id pregunta: 2134 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones, respecto de las especificaciones de los requerimientos, es falsa?:";
 choices[21]= new Array();
 choices[21][0] = "La especificaci&oacute;n debe separar la funcionalidad de la implementaci&oacute;n";
 choices[21][1] = "La especificaci&oacute;n s&oacute;lo debe contemplar el software, aisl&aacute;ndolo del resto del sistema";
 choices[21][2] = "La especificaci&oacute;n debe ser ampliable y flexible";
 choices[21][3] = "La especificaci&oacute;n debe ser f&aacute;cilmente operativa";
 answers[21] = choices[21][1];
 units[21] = "78";
 comments[21] = "Id Pregunta: 2134. ";


//  Id pregunta: 2137 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes es una t&eacute;cnica y no una metodolog&iacute;a?";
 choices[22]= new Array();
 choices[22][0] = "Desarrollo de sistemas estructurados de datos.";
 choices[22][1] = "Higher Order Software (HOS).";
 choices[22][2] = "Desarrollo de sistemas de Jackson.";
 choices[22][3] = "Information Engineering Workbench (IEW).";
 answers[22] = choices[22][3];
 units[22] = "84";
 comments[22] = "Id Pregunta: 2137. ";


//  Id pregunta: 2175 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  La definici&oacute;n: &ldquo;Es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n&rdquo;, corresponde a:";
 choices[23]= new Array();
 choices[23][0] = "Restructuraci&oacute;n (Restructuring).";
 choices[23][1] = "Ingenier&iacute;a Inversa (Reverse Engineering).";
 choices[23][2] = "Ingenier&iacute;a hacia adelante (Forward Engineering).";
 choices[23][3] = "Reingenier&iacute;a (Reengineering).";
 answers[23] = choices[23][1];
 units[23] = "91";
 comments[23] = "Id Pregunta: 2175. ";


//  Id pregunta: 2200 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;En qu&eacute; consiste la teor&iacute;a libre aplicada a la implantaci&oacute;n de la calidad?:";
 choices[24]= new Array();
 choices[24][0] = "El coste es constante e independiente de la calidad del producto";
 choices[24][1] = "El coste es constante pero dependiente de la calidad del producto";
 choices[24][2] = "El coste es constante s&oacute;lo en algunos casos";
 choices[24][3] = "El coste es independiente de la calidad del producto, aunque no se considera fijo";
 answers[24] = choices[24][0];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2200. ";


//  Id pregunta: 2411 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  Como valor promedio, se considera habitualmente que un ser humano no puede distinguir m&aacute;s de:";
 choices[25]= new Array();
 choices[25][0] = "2.000.000 colores y 700 grises";
 choices[25][1] = "200 grises y 7.000.000 de colores";
 choices[25][2] = "7.000 colores y 2.000.000 grises";
 choices[25][3] = "2.000.000 de grises y 700.000 colores";
 answers[25] = choices[25][1];
 units[25] = "93";
 comments[25] = "Id Pregunta: 2411. ";


//  Id pregunta: 2577 Año de creación de pregunta: 2003-01-01
 questions[26]= "27)  La planificaci&oacute;n estrat&eacute;gica es";
 choices[26]= new Array();
 choices[26][0] = "un  momento en el tiempo para tomar decisiones";
 choices[26][1] = "una herramienta para anticiparse a los cambios";
 choices[26][2] = "una herramienta que permite que los cambios sean consecuencia de las acciones emprendidas por la organizaci&oacute;n";
 choices[26][3] = "una herramineta que se limita e extrapolar el presente al futuro";
 answers[26] = choices[26][2];
 units[26] = "77";
 comments[26] = "Id Pregunta: 2577. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2623 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l no pertenece al an&aacute;lisis DAFO?";
 choices[27]= new Array();
 choices[27][0] = "debilidades";
 choices[27][1] = "Amenazas";
 choices[27][2] = "Flexibilidad";
 choices[27][3] = "Oportunidades";
 answers[27] = choices[27][2];
 units[27] = "77";
 comments[27] = "Id Pregunta: 2623. ";


//  Id pregunta: 2705 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  Si por cada t&eacute;rmino, bien sea palabra clave, frase especial o &iacute;tem del tesauro, existe una lista de todos los documentos en los que aparece, a la que se suele a&ntilde;adir la longitud de esa lista (n&uacute;mero de referencias contenidas), estamos hablando de un siste";
 choices[28]= new Array();
 choices[28][0] = "De &iacute;ndices m&uacute;ltiples.";
 choices[28][1] = "De &iacute;ndices ";
 choices[28][2] = "De listas.";
 choices[28][3] = "De &iacute;ndices invertidos.";
 answers[28] = choices[28][3];
 units[28] = "96,95";
 comments[28] = "Id Pregunta: 2705. ";


//  Id pregunta: 2767 Año de creación de pregunta: 2006-01-01
 questions[29]= "30)  Para pasar del modelo funcional al orientado a objetos, diga cu&aacute;l de las siguientes opciones es incorrecta.";
 choices[29]= new Array();
 choices[29][0] = "Los procesos en el modelo funcional se corresponden con operaciones en el modelo de objetos.";
 choices[29][1] = "Los almacenes de datos representan tambi&eacute;n objetos, o al menos fragmentos de objetos tales como atributos.";
 choices[29][2] = "Los flujos de datos en s&iacute; mismos pueden representar simples valores u objetos que son afectados por los procesos o acumulados en los almacenes a los que les conduce el flujo de datos.";
 choices[29][3] = "Todas las respuestas son correctas.";
 answers[29] = choices[29][3];
 units[29] = "84";
 comments[29] = "Id Pregunta: 2767. ";


//  Id pregunta: 2844 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  PDF se diferencia de Postscript en que";
 choices[30]= new Array();
 choices[30][0] = "PDF no es un lenguaje , es un formato de archivo";
 choices[30][1] = "No se diferencian; ambos son lenguajes y formatos de archivo";
 choices[30][2] = "Postscript es independiente de la plataforma";
 choices[30][3] = "Postscript permite modificaciones parciales (editabilidad)";
 answers[30] = choices[30][0];
 units[30] = "93";
 comments[30] = "Id Pregunta: 2844. ";


//  Id pregunta: 2902 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  A la hora de asegurar un Centro de Proceso de Datos:";
 choices[31]= new Array();
 choices[31][0] = "Habr&aacute; que considerar el riesgo de perturbaciones electromagn&eacute;ticas por parte del sistema de iluminaci&oacute;n (fluorescentes o similares)";
 choices[31][1] = "El riesgo de perturbaciones electromagn&eacute;ticas es siempre despreciable";
 choices[31][2] = "El riesgo de perturbaciones electromagn&eacute;ticas se elimina con la instalaci&oacute;n de toma de tierra en todos los dispositivos";
 choices[31][3] = "El riesgo de perturbaciones electromagn&eacute;ticas se elimina prohibiendo el uso de tel&eacute;fonos m&oacute;viles en el CPD";
 answers[31] = choices[31][0];
 units[31] = "31";
 comments[31] = "Id Pregunta: 2902. ";


//  Id pregunta: 2962 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  Qu&eacute; es falso respecto a Network Address Translation:";
 choices[32]= new Array();
 choices[32][0] = "Opera en el nivel de red";
 choices[32][1] = "Realiza cambios en la direcci&oacute;n del paquete TCP";
 choices[32][2] = "Realiza cambios en la direcci&oacute;n del paquete IP";
 choices[32][3] = "Realiza cambios en el puerto origen del paquete TCP";
 answers[32] = choices[32][1];
 units[32] = "100";
 comments[32] = "Id Pregunta: 2962. Tanenbaum";


//  Id pregunta: 3241 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l es la distancia m&aacute;xima entre estaciones en el est&aacute;ndar 10Base5?:";
 choices[33]= new Array();
 choices[33][0] = "100 metros";
 choices[33][1] = "185 metros";
 choices[33][2] = "200 metros";
 choices[33][3] = "500 metros";
 answers[33] = choices[33][3];
 units[33] = "97";
 comments[33] = "Id Pregunta: 3241. ";


//  Id pregunta: 3468 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  El ruido t&eacute;rmico es una perturbaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Debida a las diferencias en los coeficientes de dilataci&oacute;n de los conductores";
 choices[34][1] = "Aleatoria que aparece de forma natural en los conductores por agitaci&oacute;n de los electrones";
 choices[34][2] = "Igual a la temperatura a la cual la resistencia equivalente del dispositivo producir&iacute;a el ruido total observado";
 choices[34][3] = "Introducida en el proceso de cuantificaci&oacute;n";
 answers[34] = choices[34][1];
 units[34] = "99";
 comments[34] = "Id Pregunta: 3468. ";


//  Id pregunta: 3571 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  En una comparaci&oacute;n entre modelos OSI y TCP/IP, es falso que:";
 choices[35]= new Array();
 choices[35][0] = "TCP/IP est&aacute; basado en protocolos existentes, mientras que OSI de ISO es independiente del protocolo";
 choices[35][1] = "En OSI los niveles 2 y 3 est&aacute;n sobrecargados, y los niveles 5 y 6 tienen poca funcionalidad";
 choices[35][2] = "En OSI, al igual que en TCP/IP, las primeras implementaciones no tuvieron apenas errores y se distribuyeron gratuitamente, lo que contribuy&oacute; a su difusi&oacute;n";
 choices[35][3] = "En OSI el nivel de transporte es s&oacute;lo orientado a conexi&oacute;n, y el de red soporta servicios orientados y no orientados a conexi&oacute;n, no como en TCP/IP";
 answers[35] = choices[35][2];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3571. ";


//  Id pregunta: 3616 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  La linea &quot;Connection: Keep Alive&quot;, dentro de un mensaje HTTP significa:";
 choices[36]= new Array();
 choices[36][0] = "Dice al servidor web que cierre la conexi&oacute;n";
 choices[36][1] = "Dice al servidor web que cierre la conexi&oacute;n desues de la peticion del cliente";
 choices[36][2] = "El resultado es el mismo en HTTP 1.0 y HTTP 1.1";
 choices[36][3] = "Le dice al servidor que cierra la conexi&oacute;n cuando el cliente lo pida";
 answers[36] = choices[36][3];
 units[36] = "112";
 comments[36] = "Id Pregunta: 3616. ";


//  Id pregunta: 3631 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  La prestaci&oacute;n de consentimiento expreso por parte del cliente o afectado  exige:";
 choices[37]= new Array();
 choices[37][0] = "Es valido el silencio por parte del destinatario";
 choices[37][1] = "La manifestaci&oacute;n de una voluntad libre, informada, espec&iacute;fica e inequ&iacute;voca (que no deje lugar a duda)";
 choices[37][2] = "Es v&aacute;lido el consentimiento oral";
 choices[37][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[37] = choices[37][1];
 units[37] = "110";
 comments[37] = "Id Pregunta: 3631. ";


//  Id pregunta: 3719 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  Los conectores que se insertan en los hubs 10 base T son del tipo:";
 choices[38]= new Array();
 choices[38][0] = "RJ11";
 choices[38][1] = "RJ45";
 choices[38][2] = "RJ37";
 choices[38][3] = "V.24";
 answers[38] = choices[38][1];
 units[38] = "99";
 comments[38] = "Id Pregunta: 3719. ";


//  Id pregunta: 3727 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Los m&eacute;todos de control de acceso al medio de transmisi&oacute;n en las redes de &aacute;rea local describen las reglas que gobiernan cu&aacute;ndo los dispositivos est&aacute;n autorizados a transmitir, evit&aacute;ndose as&iacute; las colisiones.  Estos m&eacute;todos son:";
 choices[39]= new Array();
 choices[39][0] = "CSMA/CD y CSMA/CA";
 choices[39][1] = "Selecci&oacute;n o encuesta (&ldquo;polling&rdquo;), contienda o contenci&oacute;n y reserva o paso de testigo (&ldquo;token passing&rdquo;)";
 choices[39][2] = "Ethernet, IEEE 802.3 y IEEE 802.5";
 choices[39][3] = "Bus, &aacute;rbol y anillo";
 answers[39] = choices[39][1];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3727. ";


//  Id pregunta: 3831 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Si un encaminador (router) tiene cuatro interfaces f&iacute;sicas de red y esta encaminando los protocolos  AppleTalk, OSI, y TCP/IP, &iquest;cu&aacute;ntas direcciones a nivel de red tendr&aacute; normalmente?:";
 choices[40]= new Array();
 choices[40][0] = "3";
 choices[40][1] = "4";
 choices[40][2] = "12";
 choices[40][3] = "1";
 answers[40] = choices[40][2];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3831. ";


//  Id pregunta: 4003 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l es el significado del acr&oacute;nimo DOCSIS?";
 choices[41]= new Array();
 choices[41][0] = "Data Over Coaxial Service Interface Specification";
 choices[41][1] = "Data Over Cable Service Internet Specification";
 choices[41][2] = "Data Over Coaxial Service Internet Specification";
 choices[41][3] = "Data Over Cable Service Interface Specification";
 answers[41] = choices[41][3];
 units[41] = "105";
 comments[41] = "Id Pregunta: 4003. ";


//  Id pregunta: 4041 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Cada cu&aacute;nto tiempo se renuevan los cargos de Presidente, Vicepresidente y Consejeros de la Comisi&oacute;n Nacional de los Mercados y la Competencia?";
 choices[42]= new Array();
 choices[42][0] = "6 a&ntilde;os";
 choices[42][1] = "5 a&ntilde;os";
 choices[42][2] = "4 a&ntilde;os";
 choices[42][3] = "3 a&ntilde;os";
 answers[42] = choices[42][0];
 units[42] = "110";
 comments[42] = "Id Pregunta: 4041. ";


//  Id pregunta: 4140 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Cuando multitud de sistemas atacan un &uacute;nico sistema provocando su caida, estamos ante";
 choices[43]= new Array();
 choices[43][0] = "Un ataque de denegaci&oacute;n de servicio (DoS)";
 choices[43][1] = "Echelon, una red global de espias";
 choices[43][2] = "Un ataque distribuido de denegaci&oacute;n de servicio (DDoS)";
 choices[43][3] = "Un ataque de ingenier&iacute;a social";
 answers[43] = choices[43][2];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4140. ";


//  Id pregunta: 4198 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  El estandar 802.11n se centra en";
 choices[44]= new Array();
 choices[44][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[44][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[44][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[44][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[44] = choices[44][2];
 units[44] = "107";
 comments[44] = "Id Pregunta: 4198. ";


//  Id pregunta: 4252 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  Respecto al avance de la Sociedad de la Informaci&oacute;n en Espa&ntilde;a:";
 choices[45]= new Array();
 choices[45][0] = "El Plan Avanza contempla como l&iacute;neas de acci&oacute;n el avance en la e-inclusi&oacute;n y en el desarrollo de servicios p&uacute;blicos digitales, pero no entra en materias como el fomento de la competitividad y la innovaci&oacute;n en Espa&ntilde;a.";
 choices[45][1] = "El Plan Avanza constituye uno de los ejes del programa Ingenio 2010.";
 choices[45][2] = "El Plan Avanza del Ministerio de Industria busca la convergencia con Europea en materia de Sociedad de la Informaci&oacute;n, pero desmarc&aacute;ndose notablemente de los objetivos que se plantearon en la Estrategia de Lisboa.";
 choices[45][3] = "El Plan Avanza, lanzado por el Ministerio de Administraciones P&uacute;blicas, reduce su &aacute;mbito de aplicaci&oacute;n a la Administraci&oacute;n General del Estado.";
 answers[45] = choices[45][1];
 units[45] = "30";
 comments[45] = "Id Pregunta: 4252. ";


//  Id pregunta: 4322 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre PostScript y el formato PDF no es correcta?";
 choices[46]= new Array();
 choices[46][0] = "PostScript es un lenguaje de programaci&oacute;n, y PDF no";
 choices[46][1] = "Tanto PostScript como PDF comparten el mismo Modelo de Imagen, describiendo las p&aacute;ginas mediante los mismos mecanismos";
 choices[46][2] = "Tanto en PostScript como en PDF es posible definir bucles.";
 choices[46][3] = "PostScript es interpretado y ejecutado. PDF es interpretado, pero no ejecutado en sentido estricto.";
 answers[46] = choices[46][2];
 units[46] = "40";
 comments[46] = "Id Pregunta: 4322. ";


//  Id pregunta: 4437 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Qu&eacute; se entiende por Indoor PLC?:";
 choices[47]= new Array();
 choices[47][0] = "MODEM que recoge la se&ntilde;al de la red el&eacute;ctrica a trav&eacute;s del enchufe.";
 choices[47][1] = "Vertiente de la tecnolog&iacute;a PLC que convierte la l&iacute;nea el&eacute;ctrica en una LAN.";
 choices[47][2] = "Equipo que conecta la red el&eacute;ctrica con la red de comunicaciones.";
 choices[47][3] = "Conjunto formado por el MODEM y el equipo terminal de datos que existen en la vivienda el usuario.";
 answers[47] = choices[47][1];
 units[47] = "107";
 comments[47] = "Id Pregunta: 4437. ";


//  Id pregunta: 4590 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Un puente como elemento de interconexi&oacute;n de redes en que capa del modelo OSI opera:";
 choices[48]= new Array();
 choices[48][0] = "enlace de datos";
 choices[48][1] = "red";
 choices[48][2] = "transporte";
 choices[48][3] = "ninguna de las anteriores";
 answers[48] = choices[48][0];
 units[48] = "99";
 comments[48] = "Id Pregunta: 4590. ";


//  Id pregunta: 4719 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[49]= new Array();
 choices[49][0] = "400 puntos sobre 1000.";
 choices[49][1] = "500 puntos sobre 1000.";
 choices[49][2] = "700 puntos sobre 1000.";
 choices[49][3] = "900 puntos sobre 1000.";
 answers[49] = choices[49][1];
 units[49] = "92";
 comments[49] = "Id Pregunta: 4719. Examen 2006 JCYL";


//  Id pregunta: 4771 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  El IETF (Internet Engineering Task Force) es uno de los organismos estandarizadores m&aacute;s destacados de Internet. Sus documentos oficiales son conocidos como";
 choices[50]= new Array();
 choices[50][0] = "Las series X y V (ejemplo la recomendaci&oacute;n X.25 o V.21bis)";
 choices[50][1] = "ISO (ejemplo ISO-9000)";
 choices[50][2] = "RFC (Request for Comments)";
 choices[50][3] = "Las respuestas A y C son verdaderas";
 answers[50] = choices[50][2];
 units[50] = "42";
 comments[50] = "Id Pregunta: 4771. ";


//  Id pregunta: 5001 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?:";
 choices[51]= new Array();
 choices[51][0] = "Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;arcampa&ntilde;as de marketing directo on-line";
 choices[51][1] = "Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas";
 choices[51][2] = "Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica";
 choices[51][3] = "Es el Catalog Resource Management, o aplicaci&oacute;n que genera un catalogo on-line de los productosdisponibles para la venta";
 answers[51] = choices[51][0];
 units[51] = "70";
 comments[51] = "Id Pregunta: 5001. Examen TIC A 2007";


//  Id pregunta: 5025 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  El CMM-CMMI es:";
 choices[52]= new Array();
 choices[52][0] = "Un conjunto de normas de seguridad f&iacute;sica (perimetral), antiintrusivas (firewall) y antiincendios de aplicaci&oacute;nen centros de proceso de datos";
 choices[52][1] = "Un modelo de desarrollo de software jer&aacute;rquico orientado a objetos";
 choices[52][2] = "Un modelo de calidad del software que clasifica en cinco los niveles de madurez.";
 choices[52][3] = "Un modelo est&aacute;ndar de seguridad ante ataques por Internet.";
 answers[52] = choices[52][2];
 units[52] = "98";
 comments[52] = "Id Pregunta: 5025. Examen TIC A 2007";


//  Id pregunta: 5038 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes alternativas NO se corresponde con el dise&ntilde;o b&aacute;sico de la arquitectura de un conmutadormultinivel Gigabit Ethernet?:";
 choices[53]= new Array();
 choices[53][0] = "Bus compartido.";
 choices[53][1] = "Memoria compartida.";
 choices[53][2] = "I/O compartida.";
 choices[53][3] = "Crossbar";
 answers[53] = choices[53][0];
 units[53] = "102";
 comments[53] = "Id Pregunta: 5038. Examen TIC A 2007";


//  Id pregunta: 5069 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre se utiliza para la edici&oacute;n de im&aacute;genes?:";
 choices[54]= new Array();
 choices[54][0] = "GIMP";
 choices[54][1] = "Jetspeed";
 choices[54][2] = "Konqueror";
 choices[54][3] = "Eclipse";
 answers[54] = choices[54][0];
 units[54] = "62";
 comments[54] = "Id Pregunta: 5069. Examen TIC A 2007";


//  Id pregunta: 5089 Año de creación de pregunta: 2001-01-01
 questions[55]= "56)  En el est&aacute;ndar X.509,&iquest; qu&eacute; procedimiento de autenticaci&oacute;n utilizar&iacute;a cuando el origen y el destino no tienen relojes sincronizados?";
 choices[55]= new Array();
 choices[55][0] = "autenticaci&oacute;n a 1 v&iacute;a";
 choices[55][1] = "autenticaci&oacute;n a 2 v&iacute;as";
 choices[55][2] = "autenticaci&oacute;n a 3 v&iacute;as ";
 choices[55][3] = "autenticaci&oacute;n a 4 v&iacute;as";
 answers[55] = choices[55][2];
 units[55] = "73";
 comments[55] = "Id Pregunta: 5089. ";


//  Id pregunta: 5504 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Se&ntilde;ala la caracter&iacute;sitca incorrecta respecto a AJAX:";
 choices[56]= new Array();
 choices[56][0] = "Incorpora caracter&iacute;sticas propias de aplicaciones tipo push";
 choices[56][1] = "Requiere Flash para su ejecuci&oacute;n";
 choices[56][2] = "Se basa en JavaScript y XML";
 choices[56][3] = "Actualiza los datos de la interfaz de forma espontanea";
 answers[56] = choices[56][1];
 units[56] = "69";
 comments[56] = "Id Pregunta: 5504. ";


//  Id pregunta: 5562 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  En una red MPLS, &iquest; qu&eacute; funci&oacute;n realiza el LER?";
 choices[57]= new Array();
 choices[57][0] = "Es el elemento que conmuta etiquetas";
 choices[57][1] = "Es el nombre de un circuito virtual MPLS";
 choices[57][2] = "Es el elemento que inicia o termina el t&uacute;nel";
 choices[57][3] = "Es el elemento que conmuta el tr&aacute;fico en funci&oacute;n de las etiquetas";
 answers[57] = choices[57][2];
 units[57] = "100";
 comments[57] = "Id Pregunta: 5562. ";


//  Id pregunta: 5800 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  En base a la ley 59/2003, en que se diferencia la firma electr&oacute;nica reconocida de la firma electr&oacute;nica avanzada?";
 choices[58]= new Array();
 choices[58][0] = "En la clase de certificado electr&oacute;nico en que se basa.";
 choices[58][1] = "En el tipo de dispositivo criptogr&aacute;fico utilizado para la custodia de la clave privada.";
 choices[58][2] = "En la duracion maxima de su validez. La validez de la firma electr&oacute;nica reconocida nunca podra exceder de 4 a&ntilde;os.";
 choices[58][3] = "Las respuestas A y B son correctas.";
 answers[58] = choices[58][3];
 units[58] = "30";
 comments[58] = "Id Pregunta: 5800. ";


//  Id pregunta: 5832 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  BSA es:";
 choices[59]= new Array();
 choices[59][0] = "Una organizaci&oacute;n que mide la accesibilidad de las Web";
 choices[59][1] = "Una organizaci&oacute;n que audita las comunicaciones y el flujo de informaci&oacute;n eficiente";
 choices[59][2] = "Una organizaci&oacute;n que intenta controlar la pirater&iacute;a de software";
 choices[59][3] = "Una organizaci&oacute;n que audita la seguridad de datos de un CPD de respaldo";
 answers[59] = choices[59][2];
 units[59] = "37";
 comments[59] = "Id Pregunta: 5832. MAP 2008 A1";


//  Id pregunta: 5878 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  Indique cu&aacute;l de las siguientes afirmaciones es una caracter&iacute;stica de la tecnolog&iacute;a de Grid Computing:";
 choices[60]= new Array();
 choices[60][0] = "Los nodos tienen que estar dedicados";
 choices[60][1] = "Todos los sistemas deben ser homog&eacute;neos";
 choices[60][2] = "La escalabilidad es parametrizable";
 choices[60][3] = "Los recursos no se localizan din&aacute;micamente";
 answers[60] = choices[60][2];
 units[60] = "45";
 comments[60] = "Id Pregunta: 5878. MAP 2008 A1";


//  Id pregunta: 6200 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  Seg&uacute;n M&eacute;trica 3, el diagrama de estructura define posibles estructuras que permiten mostrar la secuencia de las llamadas entre m&oacute;dulos; &iquest;cu&aacute;l de las siguientes es una de ellas?";
 choices[61]= new Array();
 choices[61][0] = "Continua";
 choices[61][1] = "Dispersa";
 choices[61][2] = "en &Aacute;rbol";
 choices[61][3] = "Alternativa";
 answers[61] = choices[61][3];
 units[61] = "86";
 comments[61] = "Id Pregunta: 6200. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6276 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;les son las fases por ciclo del modelo de ciclo de vida en espiral?";
 choices[62]= new Array();
 choices[62][0] = "Evaluaci&oacute;n, Planificaci&oacute;n, An&aacute;lisis de riesgos e Ingenier&iacute;a";
 choices[62][1] = "Planificaci&oacute;n, Ingenier&iacute;a, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 choices[62][2] = "Planificaci&oacute;n, An&aacute;lisis de riesgos, Ingenier&iacute;a y Evaluaci&oacute;n";
 choices[62][3] = "Ingenier&iacute;a, Planificaci&oacute;n, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 answers[62] = choices[62][2];
 units[62] = "76";
 comments[62] = "Id Pregunta: 6276. ";


//  Id pregunta: 6368 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes sistemas no tiene la consideraci&oacute;n de entorno inseguro, de acuerdo con el Esquema Nacional de Seguridad?";
 choices[63]= new Array();
 choices[63][0] = "Equipos port&aacute;tiles";
 choices[63][1] = "Comunicaciones sobre redes inal&aacute;mbricas, incluso cuando la comunicaci&oacute;n se realice con cifrado fuerte";
 choices[63][2] = "Asistentes personales (PDA)";
 choices[63][3] = "Dispositivos perif&eacute;ricos";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 6368. Art&iacute;culo 21 ENS";


//  Id pregunta: 7766 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)   &iquest;Cu&aacute;l de los siguientes apartados no forma parte del &laquo;Sistema de Gesti&oacute;n de la Calidad&raquo; de la norma ISO 9004:2000?";
 choices[64]= new Array();
 choices[64][0] = " Gesti&oacute;n de sistemas y procesos.";
 choices[64][1] = " Documentaci&oacute;n.";
 choices[64][2] = " Planificaci&oacute;n.";
 choices[64][3] = " Uso de los principios de gesti&oacute;n de la calidad.";
 answers[64] = choices[64][2];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 7766. Map 2005";


//  Id pregunta: 7911 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)   &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 (Internet Control Message Protocol version 4";
 choices[65]= new Array();
 choices[65][0] = "?";
 choices[65][1] = " 32.";
 choices[65][2] = " 64.";
 choices[65][3] = " 128.";
 answers[65] = choices[65][1];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 7911. Map 2006";


//  Id pregunta: 7922 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)   La Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones, define el Servicio Universal en su T&iacute;tulo III, como el conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible. En relaci&oacute;n a su prestaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[66]= new Array();
 choices[66][0] = " La Comisi&oacute;n del Mercado de las Telecomunicaciones podr&aacute; designar uno o m&aacute;s operadores diferentes para la prestaci&oacute;n de los diversos elementos del servicio universal, de manera que quede cubierta la totalidad del territorio nacional.";
 choices[66][1] = " Corresponde su prestaci&oacute;n, en todo caso, al operador u operadores con poder significativo en aquellos mercados considerados de referencia en relaci&oacute;n al servicio considerado.";
 choices[66][2] = " El sistema de designaci&oacute;n de operadores es por licitaci&oacute;n, si bien se establecer&aacute; previamente una consulta p&uacute;blica con el fin de determinar el inter&eacute;s de los distintos operadores en su prestaci&oacute;n, y en qu&eacute; condiciones.";
 choices[66][3] = " La primera designaci&oacute;n de operador responsable de la prestaci&oacute;n del servicio universal se realiz&oacute; en la citada Ley, y recay&oacute; en Telef&oacute;nica de Espa&ntilde;a, hasta el 31 de diciembre de 2005, en su condici&oacute;n de operador dominante en la prestaci&oacute;n del servicio telef&oacute;nico fijo.";
 answers[66] = choices[66][2];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 7922. Map 2006";


//  Id pregunta: 7926 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)   &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[67]= new Array();
 choices[67][0] = " La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux.";
 choices[67][1] = " El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos.";
 choices[67][2] = " La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK.";
 choices[67][3] = " La arquitectura actual de componentes de GNOME se denomina Bonobo.";
 answers[67] = choices[67][0];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 7926. Map 2006";


//  Id pregunta: 8069 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)   BSA es:";
 choices[68]= new Array();
 choices[68][0] = " Una organizaci&oacute;n que mide la accesibilidad de las Web.";
 choices[68][1] = " Una organizaci&oacute;n que audita las comunicaciones y el flujo de informaci&oacute;n eficiente.";
 choices[68][2] = " Una organizaci&oacute;n que intenta controlar la pirater&iacute;a de software.";
 choices[68][3] = " Una organizaci&oacute;n que audita la seguridad de datos de un CPD de respaldo.";
 answers[68] = choices[68][2];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 8069. Map 2008";


//  Id pregunta: 8213 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  La plataforma de validaci&oacute;n de certificados VALIDE del Ministerio de la Presidencia permite validar:";
 choices[69]= new Array();
 choices[69][0] = "Las URLs de los portales de las Administraciones P&uacute;blicas.";
 choices[69][1] = "Los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[69][2] = "Los certificados de sedes electr&oacute;nicas y los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[69][3] = "Los certificados de sede electr&oacute;nica.";
 answers[69] = choices[69][3];
 units[69] = "30";
 comments[69] = "Id Pregunta: 8213. Examen TIC A1 2010";


//  Id pregunta: 8220 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  En CORBA la invocaci&oacute;n de un objeto para su ejecuci&oacute;n sigue el siguiente camino:";
 choices[70]= new Array();
 choices[70][0] = "Cliente - IDL Stub - ORB (Object Request Broker) - IDL Skeleton -Servidor.";
 choices[70][1] = "Cliente - ORB (Object Request Broker) - Servidor.";
 choices[70][2] = "Cliente - IDL Stub - Servidor.";
 choices[70][3] = "Cliente - IDL Skeleton - ORB (Object Request Broker) - IDL Stub - Servidor.";
 answers[70] = choices[70][0];
 units[70] = "82";
 comments[70] = "Id Pregunta: 8220. Examen TIC A1 2010";


//  Id pregunta: 8225 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[71]= new Array();
 choices[71][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[71][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[71][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[71][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[71] = choices[71][1];
 units[71] = "92";
 comments[71] = "Id Pregunta: 8225. Examen TIC A1 2010";


//  Id pregunta: 8275 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  En el protocolo Internet Protocol versi&oacute;n 6 (IPv6), &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo se permite fragmentar en el origen.";
 choices[72][1] = "No tiene un mecanismo equivalente al del bit Don't Fragment (DF) de IPv4.";
 choices[72][2] = "Se requiere que todos los enlaces tengan un MTU de 1500 octetos o mayor.";
 choices[72][3] = "Un jumbograma es un paquete IPv6 que contiene una carga &uacute;til (payload) mayor que 65535 octetos.";
 answers[72] = choices[72][2];
 units[72] = "100";
 comments[72] = "Id Pregunta: 8275. Examen TIC A1 2010";


//  Id pregunta: 8318 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a? ";
 choices[73]= new Array();
 choices[73][0] = "2,4 GHz y hasta 11Mbps. ";
 choices[73][1] = "5 GHz y hasta 54Mbps. ";
 choices[73][2] = "2,4 GHz y hasta 54 Mbps. ";
 choices[73][3] = "5 GHz y hasta 11 Mbps.";
 answers[73] = choices[73][1];
 units[73] = "107";
 comments[73] = "Id Pregunta: 8318. Examen TIC A2 2010";


//  Id pregunta: 8338 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[74]= new Array();
 choices[74][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[74][1] = "PERT.";
 choices[74][2] = "CPM.";
 choices[74][3] = "El histograma de recursos.";
 answers[74] = choices[74][0];
 units[74] = "86";
 comments[74] = "Id Pregunta: 8338. Examen TIC A2 2010";


//  Id pregunta: 8424 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes grupos de medidas de seguridad no se define en el anexo II del Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[75]= new Array();
 choices[75][0] = "Medidas de protecci&oacute;n";
 choices[75][1] = "Marco organizativo";
 choices[75][2] = "Marco operacional";
 choices[75][3] = "Marco tecnol&oacute;gico";
 answers[75] = choices[75][3];
 units[75] = "43";
 comments[75] = "Id Pregunta: 8424. ";


//  Id pregunta: 8538 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a?";
 choices[76]= new Array();
 choices[76][0] = "2.4 GHz y hasta 11 Mbps";
 choices[76][1] = " 5 GHz y hasta 54Mbps.";
 choices[76][2] = "2.4 GHz y hasta 54 Mbps.";
 choices[76][3] = "5 GHz y hasta 11 Mbps";
 answers[76] = choices[76][1];
 units[76] = "107";
 comments[76] = "Id Pregunta: 8538. Examen TIC A2 2010 interna";


//  Id pregunta: 8843 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)   Se entiende por SSO ";
 choices[77]= new Array();
 choices[77][0] = " Un procedimiento de autenticaci&oacute;n que permite acceder a diversos recursos inform&aacute;ticos utilizando una &uacute;nica identificaci&oacute;n";
 choices[77][1] = " Un sistema basado el claves SSL para la gesti&oacute;n remota de claves sim&eacute;tricas";
 choices[77][2] = " Un sistema de gesti&oacute;n y almacenamiento de claves fraccionadas con coherencia asim&eacute;trica";
 choices[77][3] = " Un procedimiento de comunicaciones seguras entre objetos basado en sockets";
 answers[77] = choices[77][0];
 units[77] = "118";
 comments[77] = "Id Pregunta: 8843. Examen UC3M 2010";


//  Id pregunta: 8902 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;les de los siguientes tipos de ficheros est&aacute;n amparados por la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?:";
 choices[78]= new Array();
 choices[78][0] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas.";
 choices[78][1] = "El fichero de clientes de una empresa de telecomunicaciones que da servicio de telefon&iacute;a y acceso a Internet.";
 choices[78][2] = "Los ficheros mantenidos por personas f&iacute;sicas a t&iacute;tulo exclusivamente personal o dom&eacute;stico.";
 choices[78][3] = "Ninguno de los anteriores";
 answers[78] = choices[78][1];
 units[78] = "29";
 comments[78] = "Id Pregunta: 8902. Operador Ayto. Madrid 2010";


//  Id pregunta: 9137 Año de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; debe proporcionar c&oacute;mo m&iacute;nimo cualquier placa base en la actualidad?";
 choices[79]= new Array();
 choices[79][0] = "Un chipset";
 choices[79][1] = "Dos chipsets para vincular microprocesador y memoria";
 choices[79][2] = "Tres chipsets";
 choices[79][3] = "Dos chipsets, uno para vincular microprocesador y memoria y otro para vincular microprocesador y subsistema de E/S";
 answers[79] = choices[79][3];
 units[79] = "47";
 comments[79] = "Id Pregunta: 9137. ";


//  Id pregunta: 9240 Año de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu?";
 choices[80]= new Array();
 choices[80][0] = "Se orienta al usuario novel y promedio.";
 choices[80][1] = "Tiene un fuerte enfoque en la facilidad de uso";
 choices[80][2] = "Su patrocinador es Canonical.";
 choices[80][3] = "Todas son correctas.";
 answers[80] = choices[80][3];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9240. ";


//  Id pregunta: 9246 Año de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es ntoskrnl.exe?";
 choices[81]= new Array();
 choices[81][0] = "Un virus que tuvo mucha incidencia en equipos en el 2012.";
 choices[81][1] = "El n&uacute;cleo del sistema operativo Windows 7.";
 choices[81][2] = "Es el programa en modo Kernel NTOS";
 choices[81][3] = "Proporciona los nuevos interfaces de llamadas al sistema de Windows.";
 answers[81] = choices[81][2];
 units[81] = "56";
 comments[81] = "Id Pregunta: 9246. ";


//  Id pregunta: 9350 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  DSS1 es:";
 choices[82]= new Array();
 choices[82][0] = "Un protocolo utilizado en ADSL, en la capa de red, para la gesti&oacute;n de conexiones con el DSLAM";
 choices[82][1] = "Un protocolo utilizado en RDSI, de la capa de red, para gesti&oacute;n de conexiones.";
 choices[82][2] = "Un protocolo utilizado en RDSI en la capa de enlace, para el control de acceso al canal D";
 choices[82][3] = "Un protocolo utilizado en ADSL, en la capa de enlace, para el acceso m&uacute;ltiple a los servicios";
 answers[82] = choices[82][1];
 units[82] = "103";
 comments[82] = "Id Pregunta: 9350. Pag. 8 astic 2011";


//  Id pregunta: 9434 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  El art. 12 de la Ley 9/2014, General de Telecomunicaciones, indica los principios generales aplicables al acceso a las redes y recursos asociados y a su interconexi&oacute;n. Indique cual de las siguientes afirmaciones no es correcta:";
 choices[83]= new Array();
 choices[83][0] = "Los operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas tendr&aacute;n el derecho y, cuando se solicite por otros operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas, la obligaci&oacute;n de negociar la interconexi&oacute;n mutua con el fin de prestar servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, con el objeto de garantizar as&iacute; la prestaci&oacute;n de servicios y su interoperabilidad.";
 choices[83][1] = "No existir&aacute;n restricciones que impidan que los operadores negocien entre s&iacute; acuerdos de acceso e interconexi&oacute;n";
 choices[83][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia intervendr&aacute; en las relaciones entre operadores, a petici&oacute;n del Consejo de Ministros.";
 choices[83][3] = "Los operadores que obtengan informaci&oacute;n de otros, en el proceso de negociaci&oacute;n de los acuerdos de acceso o de interconexi&oacute;n, destinar&aacute;n la informaci&oacute;n obtenida exclusivamente a los fines para los que fue solicitada.";
 answers[83] = choices[83][2];
 units[83] = "110";
 comments[83] = "Id Pregunta: 9434. Examen Xunta Galicia 2011 TIC A1";


//  Id pregunta: 9465 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  En Orientaci&oacute;n a Objetos, &iquest;qu&eacute; es cierto acerca de la herencia m&uacute;ltiple?:";
 choices[84]= new Array();
 choices[84][0] = "Consiste en que una superclase puede tener varias subclases.";
 choices[84][1] = "Consiste en que una subclase puede tener m&aacute;s de una superclase.";
 choices[84][2] = "Es lo mismo que la herencia repetida.";
 choices[84][3] = "En orientaci&oacute;n a objetos no existe la herencia m&uacute;ltiple.";
 answers[84] = choices[84][1];
 units[84] = "84";
 comments[84] = "Id Pregunta: 9465. ";


//  Id pregunta: 9516 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de las siguientes directivas JSP no existe?";
 choices[85]= new Array();
 choices[85][0] = "page";
 choices[85][1] = "map";
 choices[85][2] = "taglib";
 choices[85][3] = "include";
 answers[85] = choices[85][1];
 units[85] = "116";
 comments[85] = "Id Pregunta: 9516. ";


//  Id pregunta: 9627 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso del sistema que:";
 choices[86]= new Array();
 choices[86][0] = "Siempre se ejecuta en segundo plano (background)";
 choices[86][1] = "Siempre es de corta duraci&oacute;n";
 choices[86][2] = "Est&aacute; siempre ejecut&aacute;ndose";
 choices[86][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n. ";
 answers[86] = choices[86][0];
 units[86] = "53";
 comments[86] = "Id Pregunta: 9627. Examen TIC A1 2013";


//  Id pregunta: 9795 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale de los siguientes el que NO es un lector de feeds RSS:";
 choices[87]= new Array();
 choices[87][0] = "Digg";
 choices[87][1] = "Feedly ";
 choices[87][2] = "Mephisto";
 choices[87][3] = "Netvibes ";
 answers[87] = choices[87][2];
 units[87] = "120";
 comments[87] = "Id Pregunta: 9795. Examen TIC A2 2013";


//  Id pregunta: 9859 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  La informaci&oacute;n contenida en el chip del DNI electr&oacute;nico est&aacute; contenida en tres zonas con diferentes niveles de acceso. Indique qu&eacute; informaci&oacute;n est&aacute; contenida en la Zona de seguridad:";
 choices[88]= new Array();
 choices[88][0] = "Certificado de autenticaci&oacute;n";
 choices[88][1] = "Datos de filiaci&oacute;n del ciudadano.";
 choices[88][2] = "Claves Diffie-Hellman.";
 choices[88][3] = "Certificados X-509 de componente.";
 answers[88] = choices[88][1];
 units[88] = "111";
 comments[88] = "Id Pregunta: 9859. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9915 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Se&ntilde;ale la opci&oacute;n INCORRECTA en relaci&oacute;n con los DFD (Diagrama de Flujos de Datos) y los DE (Diagramas de Estructura), seg&uacute;n M&eacute;trica v3:";
 choices[89]= new Array();
 choices[89][0] = "El objetivo del DFD es la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 choices[89][1] = "En un DFD, los flujos de control representan movimientos de datos con valores s&iacute;ncronos entre procesos de control.";
 choices[89][2] = "Existen dos estrategias para obtener el DE a partir de un DFD, an&aacute;lisis: de transacci&oacute;n y de transformaci&oacute;n. El uso de una de las dos depender&aacute; de los procesos del DFD.";
 choices[89][3] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD existe un proceso que en funci&oacute;n del flujo de llegada, determina la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 answers[89] = choices[89][1];
 units[89] = "86";
 comments[89] = "Id Pregunta: 9915. TIC A2, Examen 2013";


//  Id pregunta: 9953 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  Dentro del perfil analista de M&eacute;trica v3 se agrupa uno de los siguientes participantes:";
 choices[90]= new Array();
 choices[90][0] = "Especialista en Comunicaciones";
 choices[90][1] = "Usuarios expertos";
 choices[90][2] = "T&eacute;cnicos de Comunicaciones. ";
 choices[90][3] = "Grupo de Aseguramiento de la Calidad";
 answers[90] = choices[90][3];
 units[90] = "86";
 comments[90] = "Id Pregunta: 9953. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9956 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes es una herramienta que ayuda a realizar seguimiento a los requisitos a lo largo del ciclo de vida del proyecto para asegurar que se est&aacute;n cumpliendo de manera eficaz?";
 choices[91]= new Array();
 choices[91][0] = "Cuestionarios";
 choices[91][1] = "Casos de uso.";
 choices[91][2] = "Matriz de trazabilidad de requisitos.";
 choices[91][3] = "Prototipos";
 answers[91] = choices[91][2];
 units[91] = "78";
 comments[91] = "Id Pregunta: 9956. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10006 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  En el &aacute;mbito del Real Decreto 772/1999, de 7 de mayo, en la redacci&oacute;n dada por el Real Decreto 209/2003, de 21 de febrero, por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos, NO es una funci&oacute;n propia de los registros telem&aacute;ticos";
 choices[92]= new Array();
 choices[92][0] = "la recepci&oacute;n de solicitudes, escritos y comunicaciones.";
 choices[92][1] = "la remisi&oacute;n de las solicitudes, escritos y comunicaciones recibidas.";
 choices[92][2] = "la expedici&oacute;n de copias selladas o compulsadas de los documentos que, en su caso, se transmitan junto con la solicitud, escrito o comunicaci&oacute;n.";
 choices[92][3] = "la anotaci&oacute;n de los correspondientes asientos de entrada y salida.";
 answers[92] = choices[92][2];
 units[92] = "43";
 comments[92] = "Id Pregunta: 10006. ";


//  Id pregunta: 10066 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Indicar de qu&eacute; zonas se encarga RIPE-NCC como Registro Regional de Internet (RIR):";
 choices[93]= new Array();
 choices[93][0] = "Am&eacute;rica Central, Am&eacute;rica del Norte y del Sur.";
 choices[93][1] = "Europa y Norte de &Aacute;frica.";
 choices[93][2] = "Europa, Am&eacute;rica Central y Am&eacute;rica del Sur.";
 choices[93][3] = "Europa, Oriente Medio y Asia Central.";
 answers[93] = choices[93][3];
 units[93] = "112";
 comments[93] = "Id Pregunta: 10066. TIC A2, libre, Examen 2013";


//  Id pregunta: 10122 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  En el encaminamiento por estado de los enlaces cada router:";
 choices[94]= new Array();
 choices[94][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[94][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[94][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[94][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[94] = choices[94][3];
 units[94] = "102";
 comments[94] = "Id Pregunta: 10122. ";


//  Id pregunta: 10153 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[95]= new Array();
 choices[95][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[95][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[95][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[95][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[95] = choices[95][1];
 units[95] = "43";
 comments[95] = "Id Pregunta: 10153. ";


//  Id pregunta: 10189 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes formatos de im&aacute;gen permite fondos transparentes?";
 choices[96]= new Array();
 choices[96][0] = "TIFF";
 choices[96][1] = "BMP";
 choices[96][2] = "JPEG";
 choices[96][3] = "PNG";
 answers[96] = choices[96][3];
 units[96] = "93";
 comments[96] = "Id Pregunta: 10189. ";


//  Id pregunta: 10208 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del m&eacute;todo de c&aacute;lculo de la rentabilidad de una inversi&oacute;n llamado &Iacute;ndice de rentabilidad";
 choices[97]= new Array();
 choices[97][0] = "Es un m&eacute;todo est&aacute;tico";
 choices[97][1] = "La inversi&oacute;n es rentable si el &iacute;ndice es mayor que cero";
 choices[97][2] = "Si el &iacute;ndice es mayor que uno, entonces es rentable";
 choices[97][3] = "Ninguna de las anteriores respuestas es verdadera";
 answers[97] = choices[97][2];
 units[97] = "38";
 comments[97] = "Id Pregunta: 10208. El &iacute;ndice de rentabilidad (IR) es un m&eacute;todo din&aacute;mico que se calcula como IR = ValorActualCobros / ValorActualPagos. Si IR &gt; 1, la inversi&oacute;n es rentable";


//  Id pregunta: 10249 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. FooCorp vende copias de su software en CD sin c&oacute;digo fuente, e incluyen una oferta para incluir el c&oacute;digo fuente. &iquest;Cu&aacute;l de las siguientes opciones cumple sus obligaciones con respecto a la licencia GPL?";
 choices[98]= new Array();
 choices[98][0] = "I no es v&aacute;lida, cualquiera de II-VII";
 choices[98][1] = "I-III no son v&aacute;lidas, cualquiera de IV-VII";
 choices[98][2] = "Cualquiera de III, V o VII son v&aacute;lidas";
 choices[98][3] = "V o VII son v&aacute;lidas.";
 answers[98] = choices[98][3];
 units[98] = "61";
 comments[98] = "Id Pregunta: 10249. ";


//  Id pregunta: 10426 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta. ";
 choices[99]= new Array();
 choices[99][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[99][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[99][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[99][3] = "Las anteriores a) b) y c) son correctas.";
 answers[99] = choices[99][3];
 units[99] = "76";
 comments[99] = "Id Pregunta: 10426. Examen TIC A1 2013";


