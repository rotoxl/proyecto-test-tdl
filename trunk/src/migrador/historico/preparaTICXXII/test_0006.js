/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 189 Año de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica para la toma de decisiones individuales?";
 choices[0]= new Array();
 choices[0][0] = "Delphi";
 choices[0][1] = "Programaci&oacute;n lineal";
 choices[0][2] = "Teor&iacute;a de l&iacute;neas de espera";
 choices[0][3] = "An&aacute;lisis de redes";
 answers[0] = choices[0][0];
 units[0] = "23";
 comments[0] = "Id Pregunta: 189. Similar a examen TIC SS A 2003";


//  Id pregunta: 501 Año de creación de pregunta: 2003-01-01
 questions[1]= "2)  En cuanto a la pol&iacute;tica ergon&oacute;mica y medioambiental:";
 choices[1]= new Array();
 choices[1][0] = "Se aplica resoluci&oacute;n del CSAE de 2004";
 choices[1][1] = "No hay nada indicado al respecto";
 choices[1][2] = "Las partes aprobadas de la NORMA ISO 9241 (asumida como norma EN29241 y como norma UNE-EN29241)";
 choices[1][3] = "La decisi&oacute;n 87/95/CEE";
 answers[1] = choices[1][2];
 units[1] = "39";
 comments[1] = "Id Pregunta: 501. ";


//  Id pregunta: 529 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cual de los siguientes es un control de acceso f&iacute;sico?";
 choices[2]= new Array();
 choices[2][0] = "Etiquetado de soportes en cinta";
 choices[2][1] = "Uso de clave de por teclado para entrar al CPD";
 choices[2][2] = "Contrase&ntilde;as para uso de aplicaciones, renovadas peri&oacute;dicamente";
 choices[2][3] = "Todas";
 answers[2] = choices[2][1];
 units[2] = "31, 32, 33";
 comments[2] = "Id Pregunta: 529. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 544 Año de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Existe el concepto de 'copia privada' en la actual legislaci&oacute;n de propiedad intelectual?";
 choices[3]= new Array();
 choices[3][0] = "Si, es un derecho por el cual no es necesaria la autorizaci&oacute;n del creador de una obra ya divulgada para proceder a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[3][1] = "Si, pero no como copia leg&iacute;tima";
 choices[3][2] = "Si, es un derecho por el cual, previa autorizaci&oacute;n del creador de una obra ya divulgada, se procede a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[3][3] = "No";
 answers[3] = choices[3][0];
 units[3] = "36,37";
 comments[3] = "Id Pregunta: 544. LPI de 1996";


//  Id pregunta: 946 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Cada vez que un ciudadano utilice su tarjeta criptogr&aacute;fica CERES para firmar documentos que debe entregar a la Administraci&oacute;n, se&ntilde;ale qu&eacute; utilizaci&oacute;n estar&aacute; haciendo de las claves de cifrado:";
 choices[4]= new Array();
 choices[4][0] = "Cifrar&aacute; con su clave p&uacute;blica";
 choices[4][1] = "Cifrar&aacute; con la clave p&uacute;blica de la Administraci&oacute;n";
 choices[4][2] = "Cifrara con el certificado ra&iacute;z de la FNMT";
 choices[4][3] = "Cifrar&aacute; con su clave privada";
 answers[4] = choices[4][3];
 units[4] = "74";
 comments[4] = "Id Pregunta: 946. ";


//  Id pregunta: 1162 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  En Unix, &iquest;qu&eacute; informaci&oacute;n contienen los directorios?:";
 choices[5]= new Array();
 choices[5][0] = "El n&uacute;mero de inodo, el nombre del fichero, el uid del propietario, el gid del grupo y los permisos de acceso";
 choices[5][1] = "El n&uacute;mero de inodo y el nombre del fichero";
 choices[5][2] = "El nombre del fichero y la direcci&oacute;n del bloque de disco donde comienza el el principio de los datos";
 choices[5][3] = "El nombre del fichero y la direcci&oacute;n dentro de la TOC (Table of Contents) del disco donde empieza la concatenaci&oacute;n de asignaci&oacute;n de espacio";
 answers[5] = choices[5][1];
 units[5] = "54";
 comments[5] = "Id Pregunta: 1162. ";


//  Id pregunta: 1190 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indique cu&aacute;l de las siguientes es una caracter&iacute;stica exclusiva del software libre frente a otros tipos de licencias de software:";
 choices[6]= new Array();
 choices[6][0] = "Fuentes abiertas";
 choices[6][1] = "Gratuidad";
 choices[6][2] = "Libre copia y distribuci&oacute;n del c&oacute;digo fuente";
 choices[6][3] = "Todas las caracteristicas anteriores son exclusivas del software libre";
 answers[6] = choices[6][2];
 units[6] = "61";
 comments[6] = "Id Pregunta: 1190. ";


//  Id pregunta: 1306 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[7]= new Array();
 choices[7][0] = "Controles Java";
 choices[7][1] = "Applets";
 choices[7][2] = "Servlets";
 choices[7][3] = "Aplicaciones CGI";
 answers[7] = choices[7][1];
 units[7] = "60";
 comments[7] = "Id Pregunta: 1306. ";


//  Id pregunta: 1752 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  Se&ntilde;ala la falsa referente a SQL";
 choices[8]= new Array();
 choices[8][0] = "Las funciones de agregado devuelven un &uacute;nico valor ";
 choices[8][1] = "La cla&uacute;sula HAVING se utiliza para especificar las condiciones que deben reunir los registros a seleccionar";
 choices[8][2] = "SELF JOIN es una t&eacute;cnica empleada para conseguir el producto cartesiano de una tabla consigo misma";
 choices[8][3] = "La cla&uacute;sula CONSTRAINT permite crear o eliminar &iacute;ndices";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 1752. ";


//  Id pregunta: 1878 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  El RD 209/2003 Regulaci&oacute;n de registros y notificaciones telem&aacute;ticas se aplica a:";
 choices[9]= new Array();
 choices[9][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[9][1] = "Las Administraciones P&uacute;blicas y Entidades Locales.";
 choices[9][2] = "La Administraci&oacute;n General del Estado.";
 choices[9][3] = " A ninguna a no ser que se realice su desarrollo.";
 answers[9] = choices[9][2];
 units[9] = "30";
 comments[9] = "Id Pregunta: 1878. ";


//  Id pregunta: 1921 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  &iquest; Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programamci&oacute;n orientado a objetos?";
 choices[10]= new Array();
 choices[10][0] = "Encapsulaci&oacute;n";
 choices[10][1] = "Herencia";
 choices[10][2] = "Polimorfismo";
 choices[10][3] = "Historicismo";
 answers[10] = choices[10][3];
 units[10] = "82";
 comments[10] = "Id Pregunta: 1921. ";


//  Id pregunta: 1940 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  En referencia al lenguaje XML, &iquest;cu&aacute;l de las siguientes opciones es la correcta?";
 choices[11]= new Array();
 choices[11][0] = "Las hojas de estilo CSS no pueden ser utilizadas con HTML";
 choices[11][1] = "XSL puede usarse para transformar datos XML a documentos HTML/CSS en un servidor Web";
 choices[11][2] = "CSS puede ejecutar cualquier l&oacute;gica basada en los datos";
 choices[11][3] = "CSS y XSL no pueden usarse en paralelo";
 answers[11] = choices[11][1];
 units[11] = "69";
 comments[11] = "Id Pregunta: 1940. ";


//  Id pregunta: 2039 Año de creación de pregunta: 2004-01-01
 questions[12]= "13)  Hablar de un modelo de gesti&oacute;n que basado en un sistema empresarial orientado hacia la calidad persigue la satisfacci&oacute;n de todos aquellos entes que se relacionan con la empresa u organizaci&oacute;n, supone hablar de:";
 choices[12]= new Array();
 choices[12][0] = "Las normas ISO 9000";
 choices[12][1] = "Calidad Total";
 choices[12][2] = "Plan General de Garant&iacute;a de Calidad";
 choices[12][3] = "Todos los aspectos anteriores";
 answers[12] = choices[12][1];
 units[12] = "92";
 comments[12] = "Id Pregunta: 2039. ";


//  Id pregunta: 2145 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes es un lenguaje orientado a objetos puro?:";
 choices[13]= new Array();
 choices[13][0] = "Visual Basic";
 choices[13][1] = "C++";
 choices[13][2] = "Smalltalk";
 choices[13][3] = "Todos son h&iacute;bridos";
 answers[13] = choices[13][2];
 units[13] = "82";
 comments[13] = "Id Pregunta: 2145. ";


//  Id pregunta: 2826 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes no es una causa del fracaso en la migraci&oacute;n de un sistema?";
 choices[14]= new Array();
 choices[14][0] = "Excesivo coste econ&oacute;mico.";
 choices[14][1] = "Falta de planificaci&oacute;n de la migraci&oacute;n.";
 choices[14][2] = "Falta de formaci&oacute;n a usuarios finales.";
 choices[14][3] = "Todas son causas de fracaso.";
 answers[14] = choices[14][0];
 units[14] = "90";
 comments[14] = "Id Pregunta: 2826. ";


//  Id pregunta: 2987 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  Un spanning tree es";
 choices[15]= new Array();
 choices[15][0] = "Un &aacute;rbol de recubrimiento de una red";
 choices[15][1] = "Un arbol de decisi&oacute;n para algoritmos de inteligencia artificial como id3";
 choices[15][2] = "Un &aacute;rbol de resoluci&oacute;n en l&oacute;gica";
 choices[15][3] = "Un &aacute;rbol de perif&eacute;ricos de un puerto USB";
 answers[15] = choices[15][0];
 units[15] = "101, 102";
 comments[15] = "Id Pregunta: 2987. ";


//  Id pregunta: 3625 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  La normativa referente a la Red Digital de Servicios Integrados para el uso por el usuario de los canales de 64 kbps, &iquest;a qu&eacute; nivel del modelo de referencia OSI corresponder&iacute;a?:";
 choices[16]= new Array();
 choices[16][0] = "Al nivel 8 : Administraci&oacute;n";
 choices[16][1] = "Al nivel 1 : F&iacute;sico";
 choices[16][2] = "Al nivel 3 : Red";
 choices[16][3] = "Al nivel 5 : Enlace";
 answers[16] = choices[16][1];
 units[16] = "102,104,109";
 comments[16] = "Id Pregunta: 3625. ";


//  Id pregunta: 3843 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  STP proporciona:";
 choices[17]= new Array();
 choices[17][0] = "Puntos de acceso s&iacute;ncronos de transferencia de datos en RDSI";
 choices[17][1] = "Conmutaci&oacute;n de mensajes entre nodos de SS7";
 choices[17][2] = "Temporizaci&oacute;n exacta en redes WDM";
 choices[17][3] = "Nada de lo anterior es cierto";
 answers[17] = choices[17][1];
 units[17] = "103";
 comments[17] = "Id Pregunta: 3843. ";


//  Id pregunta: 4077 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  La red externa a la que se conecta el departamento de compras para comunicarse con sus proveedores se llama";
 choices[18]= new Array();
 choices[18][0] = "Intranet";
 choices[18][1] = "inter-intranet";
 choices[18][2] = "extranet abierta";
 choices[18][3] = "extranet";
 answers[18] = choices[18][3];
 units[18] = "113";
 comments[18] = "Id Pregunta: 4077. ";


//  Id pregunta: 4515 Año de creación de pregunta: 2007-01-01
 questions[19]= "20)  El tipo FLOAT definido por la clase Types de JDBC corresponde al tipo JAVA:";
 choices[19]= new Array();
 choices[19][0] = "double";
 choices[19][1] = "int";
 choices[19][2] = "byte[]";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][0];
 units[19] = "60";
 comments[19] = "Id Pregunta: 4515. JCED - Preparatic XVII";


//  Id pregunta: 4572 Año de creación de pregunta: 2007-01-01
 questions[20]= "21)  Si exportamos un certificado incluyendo su clave privada desde el navegador MS Internet Explorer 6, que extensi&oacute;n tendr&aacute; el fichero resultante?:";
 choices[20]= new Array();
 choices[20][0] = "p12";
 choices[20][1] = ".cer";
 choices[20][2] = ".jks";
 choices[20][3] = ".pfx";
 answers[20] = choices[20][3];
 units[20] = "74";
 comments[20] = "Id Pregunta: 4572. ";


//  Id pregunta: 4696 Año de creación de pregunta: 2007-01-01
 questions[21]= "22)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[21][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones.";
 choices[21][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[21][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[21] = choices[21][2];
 units[21] = "21";
 comments[21] = "Id Pregunta: 4696. Examen 2006 JCYL";


//  Id pregunta: 4883 Año de creación de pregunta: 2007-01-01
 questions[22]= "23)  Dentro de un sistema de cableado estructurado el denominado &quot;subsistema horizontal&quot; es aquel que:";
 choices[22]= new Array();
 choices[22][0] = "Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta";
 choices[22][1] = "Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta";
 choices[22][2] = "Interconecta edificios en el entorno de un campus";
 choices[22][3] = "Interconecta a todo el cableado de un edificio";
 answers[22] = choices[22][1];
 units[22] = "99";
 comments[22] = "Id Pregunta: 4883. ";


//  Id pregunta: 5175 Año de creación de pregunta: 2003-01-01
 questions[23]= "24)  Respecto a los organismos y procesos de normalizaci&oacute;n podemos afirmar:";
 choices[23]= new Array();
 choices[23][0] = "La adopci&oacute;n de las normas internacionales elaboradas en ISO e EIC es obligatoria para los pa&iacute;ses miembros de la UE.";
 choices[23][1] = "Los organismos europeos de normalizaci&oacute;n obligan a sus miembros a adoptar las normas europeas que ellos elaboren.";
 choices[23][2] = "AENOR es una entidad p&uacute;blica empresarial dependiente del Ministerio de Industria.";
 choices[23][3] = "Las normas publicadas por AENOR se conocen como normas IEC.";
 answers[23] = choices[23][1];
 units[23] = "42";
 comments[23] = "Id Pregunta: 5175. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5259 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  La m&eacute;trica BANG:";
 choices[24]= new Array();
 choices[24][0] = "Es una m&eacute;trica de producto propuesta por De Marco, como indicador de funcionalidad entregada al usuario";
 choices[24][1] = "La medici&oacute;n se realiza sobre una especificaci&oacute;n de requisitos documentada mediante an&aacute;lisis estructurado y DFD";
 choices[24][2] = "Para formular esta m&eacute;trica se analizan las m&eacute;tricas primitivas, basadas en los elementos del DFD, del diccionario de datos y del modelo de datos";
 choices[24][3] = "Todas son correctas.";
 answers[24] = choices[24][3];
 units[24] = "88";
 comments[24] = "Id Pregunta: 5259. ";


//  Id pregunta: 5493 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[25]= new Array();
 choices[25][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[25][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[25][2] = "Es la especificacion del framework .NET";
 choices[25][3] = "Todas son falsas";
 answers[25] = choices[25][1];
 units[25] = "59";
 comments[25] = "Id Pregunta: 5493. ";


//  Id pregunta: 5572 Año de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;C&uacute;al de los siguientes protocolos de encaminamiento NO es interno?";
 choices[26]= new Array();
 choices[26][0] = "BGP";
 choices[26][1] = "EIGRP";
 choices[26][2] = "OSPF";
 choices[26][3] = "IGRP";
 answers[26] = choices[26][0];
 units[26] = "102";
 comments[26] = "Id Pregunta: 5572. ";


//  Id pregunta: 5575 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Qu&eacute; modelo escoger&iacute;a si el objetivo se centra en la mejora de los procesos de desarrollo de aplicaciones?";
 choices[27]= new Array();
 choices[27][0] = "ITIL";
 choices[27][1] = "CMMI";
 choices[27][2] = "COBIT";
 choices[27][3] = "M&Eacute;TRICA";
 answers[27] = choices[27][1];
 units[27] = "98";
 comments[27] = "Id Pregunta: 5575. ";


//  Id pregunta: 5879 Año de creación de pregunta: 2009-01-01
 questions[28]= "29)  Indique quien NO es miembro del Pleno del Consejo Superior de Administraci&oacute;n Electr&oacute;nica:";
 choices[28]= new Array();
 choices[28][0] = "El Presidente del Instituto Nacional de Estad&iacute;stica";
 choices[28][1] = "El Subdirector General del Centro Criptol&oacute;gico Nacional";
 choices[28][2] = "El Interventor General de la Administraci&oacute;n del Estado";
 choices[28][3] = "El Director General de la F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda";
 answers[28] = choices[28][1];
 units[28] = "30";
 comments[28] = "Id Pregunta: 5879. MAP 2008 A1";


//  Id pregunta: 5985 Año de creación de pregunta: 2010-01-01
 questions[29]= "30)  La arquitectura ANSI/SPARC para sistemas de bases de datos se divide en los siguientes niveles:";
 choices[29]= new Array();
 choices[29][0] = "L&oacute;gico, de usuario y f&iacute;sico.";
 choices[29][1] = "Externo, intermedio e interno.";
 choices[29][2] = "Externo, conceptual e interno.";
 choices[29][3] = "De usuario, de administrador y f&iacute;sico.";
 answers[29] = choices[29][2];
 units[29] = "57";
 comments[29] = "Id Pregunta: 5985. TIC A 2009";


//  Id pregunta: 6090 Año de creación de pregunta: 2010-01-01
 questions[30]= "31)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[30]= new Array();
 choices[30][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[30][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[30][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[30][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[30] = choices[30][3];
 units[30] = "100";
 comments[30] = "Id Pregunta: 6090. TIC A 2009";


//  Id pregunta: 6168 Año de creación de pregunta: 2010-01-01
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[31]= new Array();
 choices[31][0] = "El conocimiento es informaci&oacute;n interiorizada.";
 choices[31][1] = "El conocimiento es informaci&oacute;n ordenada y estructurada.";
 choices[31][2] = "El conocimiento es informaci&oacute;n puesta dentro de un contexto.";
 choices[31][3] = "Todas las anteriores son correctas";
 answers[31] = choices[31][3];
 units[31] = "22";
 comments[31] = "Id Pregunta: 6168. ";


//  Id pregunta: 6550 Año de creación de pregunta: 2010-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l es el m&eacute;todo de autenticaci&oacute;n mejor?";
 choices[32]= new Array();
 choices[32][0] = "Algo que alguien sabe";
 choices[32][1] = "Algo que alguien es";
 choices[32][2] = "Algo que alguien tiene";
 choices[32][3] = "Lo que una persona sabe y es";
 answers[32] = choices[32][3];
 units[32] = "111";
 comments[32] = "Id Pregunta: 6550. ";


//  Id pregunta: 6564 Año de creación de pregunta: 2010-01-01
 questions[33]= "34)  GPRS no se caracteriza por";
 choices[33]= new Array();
 choices[33][0] = "Servicio simult&aacute;neo de voz y datos";
 choices[33][1] = "No existe multiplexaci&oacute;n de voz y datos";
 choices[33][2] = "Servicio no orientado a conexi&oacute;n";
 choices[33][3] = "Tarificaci&oacute;n por volumen de datos intercambiado";
 answers[33] = choices[33][1];
 units[33] = "108";
 comments[33] = "Id Pregunta: 6564. ";


//  Id pregunta: 6585 Año de creación de pregunta: 2010-01-01
 questions[34]= "35)  Un fichero de car&aacute;cter personal de entidades financieras para las finalidades relacionadas con la prestaci&oacute;n de servicios financieros de acuerdo a la regulaci&oacute;n de protecci&oacute;n de datos vigente, de las siguientes medidas de seguridad cu&aacute;l no es obligatorio que cumpla?";
 choices[34]= new Array();
 choices[34][0] = "Debe existir un responsable de seguridad encargado de coordinar y controlar las medidas del documento";
 choices[34][1] = "Debe llevarse a cabo al menos una copia de respaldo semanal";
 choices[34][2] = "Debe existir un registro de accesos: usuario, hora, fichero, tipo de acceso, autorizado o denegado";
 choices[34][3] = "Todas las respuestas anteriores son correctas";
 answers[34] = choices[34][2];
 units[34] = "29";
 comments[34] = "Id Pregunta: 6585. ";


//  Id pregunta: 6617 Año de creación de pregunta: 2010-01-01
 questions[35]= "36)  &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[35]= new Array();
 choices[35][0] = "Las Pruebas de Aceptaci&oacute;n se definen en ASI y se ejecutan en CSI";
 choices[35][1] = "Las Pruebas de Implantaci&oacute;n se definen en DSI y se ejecutan en IAS";
 choices[35][2] = "Las Pruebas de Implantaci&oacute;n se definen en ASI y se ejecutan en CSI";
 choices[35][3] = "Las Pruebas de Aceptaci&oacute;n se definen en DSI y se ejecutan en IAS";
 answers[35] = choices[35][1];
 units[35] = "86";
 comments[35] = "Id Pregunta: 6617. ";


//  Id pregunta: 8193 Año de creación de pregunta: 2011-01-01
 questions[36]= "37)  Seg&uacute;n el RD 589/2005, los Planes estrat&eacute;gicos departamentales en materia de tecnolog&iacute;as de la informaci&oacute;n y Administraci&oacute;n Electr&oacute;nica:";
 choices[36]= new Array();
 choices[36][0] = "Deben tener una duraci&oacute;n de al menos 2 a&ntilde;os. ";
 choices[36][1] = "Deben tener una duraci&oacute;n de al menos 3 a&ntilde;os.";
 choices[36][2] = "Deben tener una duraci&oacute;n de al menos 4 a&ntilde;os. ";
 choices[36][3] = "Pueden tener cualquier duraci&oacute;n siempre y cuando tengan car&aacute;cter verdaderamente estrat&eacute;gico.";
 answers[36] = choices[36][0];
 units[36] = "77";
 comments[36] = "Id Pregunta: 8193. Examen TIC A1 2010";


//  Id pregunta: 8243 Año de creación de pregunta: 2011-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes funciones NO corresponde al Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica seg&uacute;n lo recogido en la Ley 11/2007 y modificaciones normativas posteriores?:";
 choices[37]= new Array();
 choices[37][0] = "Asegurar la cooperaci&oacute;n entre las administraciones p&uacute;blicas para proporcionar al ciudadano informaci&oacute;n clara, actualizada e inequivoca.";
 choices[37][1] = "Velar por el cumplimiento de los fines y principios establecidos en la Ley 11/2007";
 choices[37][2] = "Proponer planes programas conjuntos de actuaci&oacute;n para impulsar el desarrollo de la Administraci&oacute;n Electr&oacute;nica en Espa&ntilde;a";
 choices[37][3] = "Aprobar los Cat&aacute;logos de determinaci&oacute;n de tipo referidos a bienes y servicios electr&oacute;nicos.";
 answers[37] = choices[37][3];
 units[37] = "43";
 comments[37] = "Id Pregunta: 8243. Examen TIC A1 2010";


//  Id pregunta: 8253 Año de creación de pregunta: 2011-01-01
 questions[38]= "39)  Seg&uacute;n el est&aacute;ndar IEEE 610.12, la l&iacute;nea base:";
 choices[38]= new Array();
 choices[38][0] = "Es la l&iacute;nea que marca en la planificaci&oacute;n en que momento nos encontramos.";
 choices[38][1] = "Es la situaci&oacute;n en que se encuentra en cada momento el desarrollo.";
 choices[38][2] = "Es el momento de salida de la planificaci&oacute;n.";
 choices[38][3] = "Ha sido acordada formalmente.";
 answers[38] = choices[38][3];
 units[38] = "27,28";
 comments[38] = "Id Pregunta: 8253. Examen TIC A1 2010";


//  Id pregunta: 8280 Año de creación de pregunta: 2011-01-01
 questions[39]= "40)  Si ejecutamos el comando telnet para acceder a un servidor que tenga configurado lo necesario, &iquest;Cu&aacute;l de las afirmaciones es correcta?:";
 choices[39]= new Array();
 choices[39][0] = "S&oacute;lo podemos conectarnos al &quot;well-known port&quot; 23 (telnet).";
 choices[39][1] = "Accediendo al puerto 25 (smtp) ser&iacute;a posible enviar e-mails.";
 choices[39][2] = "Accediendo al puerto 22 (ssh) es posible securizar la comunicaci&oacute;n.";
 choices[39][3] = "Accediendo a cualquier puerto diferente del 23 el servidor reconoce el protocolo y redirige la comunicaci&oacute;n al puerto 23(telnet).";
 answers[39] = choices[39][1];
 units[39] = "112";
 comments[39] = "Id Pregunta: 8280. Examen TIC A1 2010";


//  Id pregunta: 8331 Año de creación de pregunta: 2011-01-01
 questions[40]= "41)  &iquest;Con qu&eacute; nombre se conoce a las herramientas CASE adaptables que permiten la definici&oacute;n de nuestra propia t&eacute;cnica de modelado,pudiendo definir nuestros propios elementos y s&iacute;mbolos de las notaciones a utilizar?";
 choices[40]= new Array();
 choices[40][0] = "Upper CASE (U-CASE)";
 choices[40][1] = "MetaCASE";
 choices[40][2] = "CAST (Computer-Aided Software Testing)";
 choices[40][3] = "IPSE (Integrated Programming Support Environment)";
 answers[40] = choices[40][1];
 units[40] = "91";
 comments[40] = "Id Pregunta: 8331. Examen TIC A2 2010";


//  Id pregunta: 8389 Año de creación de pregunta: 2011-01-01
 questions[41]= "42)  &iquest;En cual de las siguientes pruebas interviene el usuario final?";
 choices[41]= new Array();
 choices[41][0] = "Pruebas de Caja Blanca.";
 choices[41][1] = "Pruebas de Aceptaci&oacute;n.";
 choices[41][2] = "Pruebas de Implantaci&oacute;n.";
 choices[41][3] = "Pruebas de Regresi&oacute;n.";
 answers[41] = choices[41][1];
 units[41] = "86";
 comments[41] = "Id Pregunta: 8389. Examen TIC A2 2010";


//  Id pregunta: 8529 Año de creación de pregunta: 2011-01-01
 questions[42]= "43)  En el contexto de la Web 2.0, el conjunto formado por una colecci&oacute;n extensible de p&aacute;ginas web entrelazadas, un sistema hipertextual para almacenar y modificar informaci&oacute;n y una base de datos donde cada p&aacute;gina puede ser f&aacute;cilmente modificada por cualquier usuario que disponga de un navegador web est&aacute;ndar que admita la utilizaci&oacute;n de formularios, corresponde al concepto de:";
 choices[42]= new Array();
 choices[42][0] = "Wiki.";
 choices[42][1] = "Mashup.";
 choices[42][2] = "Blog.";
 choices[42][3] = "Agregador o feeder. ";
 answers[42] = choices[42][0];
 units[42] = "120";
 comments[42] = "Id Pregunta: 8529. Examen TIC A2 2010 interna";


//  Id pregunta: 8630 Año de creación de pregunta: 2011-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[43]= new Array();
 choices[43][0] = "Regla de la no subversi&oacute;n.";
 choices[43][1] = "Regla de la no concurrencia.";
 choices[43][2] = "Regla de la restricci&oacute;n.";
 choices[43][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[43] = choices[43][0];
 units[43] = "57, 58";
 comments[43] = "Id Pregunta: 8630. Examen TIC A2 2010 interna";


//  Id pregunta: 8675 Año de creación de pregunta: 2011-01-01
 questions[44]= "45)  En una red MPLS, &iquest;qu&eacute; funci&oacute;n realiza el LSR?";
 choices[44]= new Array();
 choices[44][0] = "Es el elemento que conmuta etiquetas.";
 choices[44][1] = "Es el nombre de un circuito virtual MPLS.";
 choices[44][2] = "Es el elemento que inicia o termina el t&uacute;nel.";
 choices[44][3] = "Es el elemento que conmuta el tr&aacute;fico.";
 answers[44] = choices[44][0];
 units[44] = "100";
 comments[44] = "Id Pregunta: 8675. Examen UPM A2 2011";


//  Id pregunta: 8820 Año de creación de pregunta: 2011-01-01
 questions[45]= "46)  El objetivo del Plan de Sistemas de Informaci&oacute;n es:";
 choices[45]= new Array();
 choices[45][0] = "Proporcionar un marco estrat&eacute;gico que sirva de referencia para los Sistemas de Informaci&oacute;n de un &aacute;mbito concreto de una organizaci&oacute;n.";
 choices[45][1] = "El an&aacute;lisis de un conjunto concreto de necesidades para proponer una soluci&oacute;n a corto plazo, que tenga en cuenta restricciones econ&oacute;micas, t&eacute;cnicas, legales y operativas.";
 choices[45][2] = "a y b son correctas.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = choices[45][0];
 units[45] = "27, 86";
 comments[45] = "Id Pregunta: 8820. Examen UPM A2 2011";


//  Id pregunta: 8859 Año de creación de pregunta: 2011-01-01
 questions[46]= "47)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[46]= new Array();
 choices[46][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[46][1] = "Paralela y mediante hipervisor (bare metal)";
 choices[46][2] = "Balanceada y mediante SPM (Service Platform Manager)";
 choices[46][3] = "Mediante hipervisor (bare metal) y mediante supervisor (full metal)";
 answers[46] = choices[46][0];
 units[46] = "119";
 comments[46] = "Id Pregunta: 8859. Analista Ayto. Madrid 2010";


//  Id pregunta: 8865 Año de creación de pregunta: 2011-01-01
 questions[47]= "48)  Que algoritmo de ordenaci&oacute;n consiste en comparar pares de elementos adyacentes e intercambiarlos entre s&iacute; hasta que est&eacute;n todos ordenados:";
 choices[47]= new Array();
 choices[47][0] = "Insercci&oacute;n";
 choices[47][1] = "Burbuja";
 choices[47][2] = "Selecci&oacute;n";
 choices[47][3] = "Combinaci&oacute;n";
 answers[47] = choices[47][1];
 units[47] = "63, 64";
 comments[47] = "Id Pregunta: 8865. Analista Ayto. Madrid 2010";


//  Id pregunta: 8892 Año de creación de pregunta: 2011-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes es uno de los programas del marco general para la mejora de la calidad en la AGE?";
 choices[48]= new Array();
 choices[48][0] = "Programa de Evaluaci&oacute;n de la Calidad de las Organizaciones";
 choices[48][1] = "Programa de Formaci&oacute;n en EFQM";
 choices[48][2] = "Programa de Mejora de la Eficiencia en la Administraci&oacute;n P&uacute;blica";
 choices[48][3] = "Programa de Aseguramiento de la Calidad";
 answers[48] = choices[48][0];
 units[48] = "92";
 comments[48] = "Id Pregunta: 8892. ";


//  Id pregunta: 8959 Año de creación de pregunta: 2011-01-01
 questions[49]= "50)  Dentro de las soluciones propietarias de CRM no se encuentra:";
 choices[49]= new Array();
 choices[49][0] = "Compiere";
 choices[49][1] = "SPSS- Clementine";
 choices[49][2] = "Epiphany";
 choices[49][3] = "Todas son soluciones comerciales";
 answers[49] = choices[49][0];
 units[49] = "65";
 comments[49] = "Id Pregunta: 8959. ";


//  Id pregunta: 8969 Año de creación de pregunta: 2011-01-01
 questions[50]= "51)  Entre las m&eacute;tricas de Calidad para sistemas orientados a objetos se encuentran MDOO &iquest;cu&aacute;l de los siguientes no es un factor que la compongan?";
 choices[50]= new Array();
 choices[50][0] = "Factor de polimorfismo";
 choices[50][1] = "Factor de acoplamiento";
 choices[50][2] = "Factor de herencia de m&eacute;todos";
 choices[50][3] = "Factor de cohesi&oacute;n";
 answers[50] = choices[50][3];
 units[50] = "88";
 comments[50] = "Id Pregunta: 8969. ";


//  Id pregunta: 9157 Año de creación de pregunta: 2013-01-01
 questions[51]= "52)  De acuerdo a AGR010, un sistema CMI (Computer Managed Instruction) con un entorno basado en web, no tiene por qu&eacute; cumplir con:";
 choices[51]= new Array();
 choices[51][0] = "Comunicaci&oacute;n HTTP (HACP Binding)";
 choices[51][1] = "Comunicaci&oacute;n mediante API (API Binding)";
 choices[51][2] = "Definici&oacute;n de la estructura del curso (File Binding)";
 choices[51][3] = "Definici&oacute;n de los tipos de datos del curso (Data Binding) ";
 answers[51] = choices[51][3];
 units[51] = "66";
 comments[51] = "Id Pregunta: 9157. ";


//  Id pregunta: 9170 Año de creación de pregunta: 2013-01-01
 questions[52]= "53)  Se&ntilde;ale cu&aacute;l de los siguientes no es un bloque de primer nivel en una factura en formato Facturae;";
 choices[52]= new Array();
 choices[52][0] = "Datos del emisor";
 choices[52][1] = "Detalle de la factura";
 choices[52][2] = "Importe de la factura";
 choices[52][3] = "Datos de la firma electr&oacute;nica ";
 answers[52] = choices[52][2];
 units[52] = "70";
 comments[52] = "Id Pregunta: 9170. ";


//  Id pregunta: 9176 Año de creación de pregunta: 2013-01-01
 questions[53]= "54)  Es un formato de imagen en mapa de bits";
 choices[53]= new Array();
 choices[53][0] = "ODG";
 choices[53][1] = "DXF";
 choices[53][2] = "XCF";
 choices[53][3] = "DWG";
 answers[53] = choices[53][2];
 units[53] = "93";
 comments[53] = "Id Pregunta: 9176. ";


//  Id pregunta: 9376 Año de creación de pregunta: 2013-01-01
 questions[54]= "55)  En la Teor&iacute;a Decisi&oacute;n Multicriterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo obtiene como resultado un subconjunto de alternativas aceptables";
 choices[54]= new Array();
 choices[54][0] = "M&eacute;todos de concordancia";
 choices[54][1] = "M&eacute;todos basados en permutaciones";
 choices[54][2] = "M&eacute;todos basados en la ponderaci&oacute;n lineal";
 choices[54][3] = "M&eacute;todo T.O.P.S.I.S.";
 answers[54] = choices[54][0];
 units[54] = "34";
 comments[54] = "Id Pregunta: 9376. ";


//  Id pregunta: 9453 Año de creación de pregunta: 2013-01-01
 questions[55]= "56)  En el modelo Entidad/Relaci&oacute;n de Chen, &iquest;qu&eacute; tipos de entidades se pueden diferenciar?:";
 choices[55]= new Array();
 choices[55][0] = "Regulares y d&eacute;biles.";
 choices[55][1] = "Fuertes y d&eacute;biles.";
 choices[55][2] = "A y B son correctas.";
 choices[55][3] = "Ninguna de las anteriores es correcta.";
 answers[55] = choices[55][2];
 units[55] = "80";
 comments[55] = "Id Pregunta: 9453. ";


//  Id pregunta: 9523 Año de creación de pregunta: 2013-01-01
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.320:";
 choices[56]= new Array();
 choices[56][0] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 choices[56][1] = "Utiliza como est&aacute;ndares de cifrado H.233 y H.244";
 choices[56][2] = "Uno de los tama&ntilde;os de cuadro es CIF (352x288) ";
 choices[56][3] = "Uno de los tama&ntilde;os de cuadro es QCIF (176x144) ";
 answers[56] = choices[56][1];
 units[56] = "117";
 comments[56] = "Id Pregunta: 9523. ";


//  Id pregunta: 9584 Año de creación de pregunta: 2013-01-01
 questions[57]= "58)  Los certificados incorporados al DNI-e:";
 choices[57]= new Array();
 choices[57][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[57][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[57][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[57][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[57] = choices[57][3];
 units[57] = "43, 74";
 comments[57] = "Id Pregunta: 9584. Examen TIC A1 2011";


//  Id pregunta: 9609 Año de creación de pregunta: 2014-01-01
 questions[58]= "59)  &iquest;Qu&eacute; establece el teorema de CAP o de Brewer?";
 choices[58]= new Array();
 choices[58][0] = "El n&uacute;mero medio de clientes en un sistema es igual a la tasa promedio de llegada de clientes al sistema, por el tiempo medio que el cliente est&aacute; en un sistema.";
 choices[58][1] = "En un sistema de computaci&oacute;n distribuida es imposible garantizar simult&aacute;neamente la consistencia, disponibilidad y la tolerancia  a fallos.";
 choices[58][2] = "En una relaci&oacute;n, los valores de una clave externa de una tabla, deben coincidir con los valores de una clave primaria de la otra tabla con la que est&aacute; relacionada o bien ser todos nulos.";
 choices[58][3] = "Todas las respuestas son incorrectas.";
 answers[58] = choices[58][1];
 units[58] = "52";
 comments[58] = "Id Pregunta: 9609. ";


//  Id pregunta: 9640 Año de creación de pregunta: 2014-01-01
 questions[59]= "60)  El funcionamiento de la Junta de Contrataci&oacute;n Centralizada se regula en:";
 choices[59]= new Array();
 choices[59][0] = "HAP/2027/2013";
 choices[59][1] = "HAP/2028/2013";
 choices[59][2] = "RD 695/2013";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = choices[59][1];
 units[59] = "41";
 comments[59] = "Id Pregunta: 9640. ";


//  Id pregunta: 9658 Año de creación de pregunta: 2014-01-01
 questions[60]= "61)  &iquest;Qu&eacute; modelo  de calidad tiene como &aacute;mbito de aplicaci&oacute;n Software y Sistemas?";
 choices[60]= new Array();
 choices[60][0] = "CMMI";
 choices[60][1] = "ISO 9001";
 choices[60][2] = "ISO/IEC 15504 (SPICE) y CMMI";
 choices[60][3] = "Todos los anteriores";
 answers[60] = choices[60][2];
 units[60] = "87";
 comments[60] = "Id Pregunta: 9658. La ISO 9001 tiene un &aacute;mbito gen&eacute;rico, no s&oacute;lo Sotftware y Sistemas";


//  Id pregunta: 9668 Año de creación de pregunta: 2014-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de la taxonom&iacute;a de Flynn se corresponden con una arquitectura monoprocesador?";
 choices[61]= new Array();
 choices[61][0] = "MISD y SISD";
 choices[61][1] = "SIMD y SISD";
 choices[61][2] = "MIMD y MISD";
 choices[61][3] = "SISD y MISD";
 answers[61] = choices[61][1];
 units[61] = "45";
 comments[61] = "Id Pregunta: 9668. ";


//  Id pregunta: 9724 Año de creación de pregunta: 2014-01-01
 questions[62]= "63)  El sistema de redundancia que consiste en la divisi&oacute;n a nivel de bloques m&aacute;s un disco de paridad dedicado se denomina";
 choices[62]= new Array();
 choices[62][0] = "RAID 1";
 choices[62][1] = "RAID 3";
 choices[62][2] = "RAID 4";
 choices[62][3] = "RAID 6";
 answers[62] = choices[62][2];
 units[62] = "48";
 comments[62] = "Id Pregunta: 9724. Examen TIC-A1 2013";


//  Id pregunta: 9729 Año de creación de pregunta: 2014-01-01
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un framework JAVA";
 choices[63]= new Array();
 choices[63][0] = "Bird.";
 choices[63][1] = "Hibernate.";
 choices[63][2] = "Maverick.";
 choices[63][3] = "Spring.";
 answers[63] = choices[63][0];
 units[63] = "61";
 comments[63] = "Id Pregunta: 9729. Examen TIC-A1 2013";


//  Id pregunta: 9741 Año de creación de pregunta: 2014-01-01
 questions[64]= "65)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[64]= new Array();
 choices[64][0] = "Contexts and Dependency Injection.";
 choices[64][1] = "Common Display Interface.";
 choices[64][2] = "Context-Dependent Interface.";
 choices[64][3] = "Case-Driven Implementation.";
 answers[64] = choices[64][0];
 units[64] = "60";
 comments[64] = "Id Pregunta: 9741. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9748 Año de creación de pregunta: 2014-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[65]= new Array();
 choices[65][0] = "Alternativas textuales.";
 choices[65][1] = "Distinguible.";
 choices[65][2] = "Predecible.";
 choices[65][3] = "Compatible.";
 answers[65] = choices[65][2];
 units[65] = "39";
 comments[65] = "Id Pregunta: 9748. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9812 Año de creación de pregunta: 2014-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes nombres NO se corresponde con una versi&oacute;n del sistema operativo Android?";
 choices[66]= new Array();
 choices[66][0] = "Kit Kat.";
 choices[66][1] = "Ice Cream Sandwich.";
 choices[66][2] = "Donut.";
 choices[66][3] = "Candy Marzipan.";
 answers[66] = choices[66][3];
 units[66] = "52,53,54";
 comments[66] = "Id Pregunta: 9812. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9864 Año de creación de pregunta: 2014-01-01
 questions[67]= "68)  &iquest;A qu&eacute; tipo de ataque pertenece el denominado ping de la muerte?";
 choices[67]= new Array();
 choices[67][0] = "Spoofing.";
 choices[67][1] = "Man in the middle.";
 choices[67][2] = "Denial of Service.";
 choices[67][3] = "Flooding.";
 answers[67] = choices[67][2];
 units[67] = "111";
 comments[67] = "Id Pregunta: 9864. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9865 Año de creación de pregunta: 2014-01-01
 questions[68]= "69)  En el marco del modelo est&aacute;ndar de gesti&oacute;n de red definido por la ISO y la ITU-TX.700, son &aacute;reas de gesti&oacute;n: ";
 choices[68]= new Array();
 choices[68][0] = "la gesti&oacute;n de fallos, de contabilidad, de configuraci&oacute;n, de calidad defuncionamiento y de seguridad.";
 choices[68][1] = "la gesti&oacute;n de fallos, de la demanda, de configuraci&oacute;n, de rendimiento y deseguridad.";
 choices[68][2] = "la gesti&oacute;n de fallos, de monitorizaci&oacute;n, de configuraci&oacute;n y de seguridad";
 choices[68][3] = "la gesti&oacute;n de monitorizaci&oacute;n, de trazabilidad, de configuraci&oacute;n y de seguridad";
 answers[68] = choices[68][0];
 units[68] = "104";
 comments[68] = "Id Pregunta: 9865. TIC A1, Examen 2013";


//  Id pregunta: 9873 Año de creación de pregunta: 2014-01-01
 questions[69]= "70)  De acuerdo con Metrica v3, en el Diagrama de Transici&oacute;n de Estados,";
 choices[69]= new Array();
 choices[69][0] = "no puede haber ninguna transici&oacute;n dirigida al estado inicial.";
 choices[69][1] = "solo puede haber un estado final.";
 choices[69][2] = "una acci&oacute;n no se puede ejecutar dentro de un estado.";
 choices[69][3] = "un diagrama puede tener varios estados in&iacute;ciales.";
 answers[69] = choices[69][0];
 units[69] = "86";
 comments[69] = "Id Pregunta: 9873. TIC A1, Examen 2013";


//  Id pregunta: 9899 Año de creación de pregunta: 2014-01-01
 questions[70]= "71)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[70]= new Array();
 choices[70][0] = "mensajes XML sobre protocolo SMTP.";
 choices[70][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[70][2] = "OData.(Open Data Protocol)";
 choices[70][3] = "BPMN (Business Process Message Notation).";
 answers[70] = choices[70][3];
 units[70] = "50,51,79";
 comments[70] = "Id Pregunta: 9899. TIC A1, Examen 2013";


//  Id pregunta: 9913 Año de creación de pregunta: 2014-01-01
 questions[71]= "72)  La relaci&oacute;n entre los requisitos, sus fuentes y el dise&ntilde;o del sistema se denomina:";
 choices[71]= new Array();
 choices[71][0] = "Evaluaci&oacute;n de requisitos.";
 choices[71][1] = "Trazabilidad.";
 choices[71][2] = "Integridad de requisitos.";
 choices[71][3] = "Gesti&oacute;n de requisitos.";
 answers[71] = choices[71][1];
 units[71] = "78";
 comments[71] = "Id Pregunta: 9913. TIC A2, Examen 2013";


//  Id pregunta: 9967 Año de creación de pregunta: 2014-01-01
 questions[72]= "73)  Seg&uacute;n la Workflow Management Coalition (WfMC) &iquest;cu&aacute;l de las siguientes funciones NO es caracter&iacute;stica de un Workflow?";
 choices[72]= new Array();
 choices[72][0] = "Funciones de Control de Procesos en Tiempo de ejecuci&oacute;n (Run-time Process Control Functions).";
 choices[72][1] = "Interacciones de Actividad en Tiempo de ejecuci&oacute;n (Run-time Activity Interactions).";
 choices[72][2] = "Distribuci&oacute;n e Interfaces del Sistema (Distribution &amp; System Interfaces).";
 choices[72][3] = "Lanzamiento de Procesos Programados (Scheduled Release Process).";
 answers[72] = choices[72][3];
 units[72] = "71";
 comments[72] = "Id Pregunta: 9967. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9983 Año de creación de pregunta: 2014-01-01
 questions[73]= "74)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[73]= new Array();
 choices[73][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[73][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[73][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[73][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[73] = choices[73][1];
 units[73] = "59,115";
 comments[73] = "Id Pregunta: 9983. Examen T&eacute;cnico especialista inform&aacute;tica, Servicio Salud C&aacute;ntabro, 2011";


//  Id pregunta: 10012 Año de creación de pregunta: 2014-01-01
 questions[74]= "75)  En un entorno de base de datos relacional, si se puede afirmar que los valores de una clave ajena coinciden con los valores de la clave primaria a la que hace referencia o son nulos  entonces se est&aacute; cumpliendo:";
 choices[74]= new Array();
 choices[74][0] = "Regla de los nulos.";
 choices[74][1] = "Regla de integridad de la entidad.";
 choices[74][2] = "Regla de la integridad referencial.";
 choices[74][3] = "Regla de los valores ajenos.";
 answers[74] = choices[74][2];
 units[74] = "58";
 comments[74] = "Id Pregunta: 10012. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10027 Año de creación de pregunta: 2014-01-01
 questions[75]= "76)  Elija la respuesta correcta:";
 choices[75]= new Array();
 choices[75][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[75][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[75][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[75][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[75] = choices[75][0];
 units[75] = "115";
 comments[75] = "Id Pregunta: 10027. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10039 Año de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[76]= new Array();
 choices[76][0] = "No es v&aacute;lida.";
 choices[76][1] = "Unicast.";
 choices[76][2] = "Multicast. ";
 choices[76][3] = "Loopback.";
 answers[76] = choices[76][2];
 units[76] = "100";
 comments[76] = "Id Pregunta: 10039. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10047 Año de creación de pregunta: 2014-01-01
 questions[77]= "78)  Con respecto al campo Data Link Connection Identifier (DLCI) de Frame Relay se&ntilde;ale la respuesta correcta:";
 choices[77]= new Array();
 choices[77][0] = "Debe ser &uacute;nico en toda la red.";
 choices[77][1] = "Tiene una longitud total de 10 bits por defecto.";
 choices[77][2] = "Controla los mecanismos de notificaci&oacute;n de congesti&oacute;n.";
 choices[77][3] = "Los valores 0 a 128 del mismo est&aacute;n reservados para funciones especiales.";
 answers[77] = choices[77][1];
 units[77] = "109";
 comments[77] = "Id Pregunta: 10047. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10063 Año de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[78]= new Array();
 choices[78][0] = "B ";
 choices[78][1] = "D";
 choices[78][2] = "H ";
 choices[78][3] = "I";
 answers[78] = choices[78][3];
 units[78] = "103, 109";
 comments[78] = "Id Pregunta: 10063. TIC A2, libre, Examen 2013";


//  Id pregunta: 10076 Año de creación de pregunta: 2014-01-01
 questions[79]= "80)  Los t&eacute;rminos scatternet y piconet est&aacute;n relacionados con la tecnolog&iacute;a:";
 choices[79]= new Array();
 choices[79][0] = "RDSI ";
 choices[79][1] = "Bluetooth";
 choices[79][2] = "DECT ";
 choices[79][3] = "Wimax";
 answers[79] = choices[79][1];
 units[79] = "107";
 comments[79] = "Id Pregunta: 10076. TIC A2, libre, Examen 2013";


//  Id pregunta: 10081 Año de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida orientado a objetos tiene un enfoque ascendente?";
 choices[80]= new Array();
 choices[80][0] = "Pinball";
 choices[80][1] = "Remolino";
 choices[80][2] = "Cluster";
 choices[80][3] = "Fuente";
 answers[80] = choices[80][2];
 units[80] = "76";
 comments[80] = "Id Pregunta: 10081. ";


//  Id pregunta: 10103 Año de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; tipo de flujos de datos no existen?";
 choices[81]= new Array();
 choices[81][0] = "Flujos discretos y continuos";
 choices[81][1] = "Flujos de consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[81][2] = "Flujo de control";
 choices[81][3] = "Existen todos los tipos de flujos anteriores";
 answers[81] = choices[81][3];
 units[81] = "81";
 comments[81] = "Id Pregunta: 10103. ";


//  Id pregunta: 10114 Año de creación de pregunta: 2014-01-01
 questions[82]= "83)  MTU es:";
 choices[82]= new Array();
 choices[82][0] = "El tama&ntilde;o en bytes de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[82][1] = "El m&aacute;ximo retardo medido en segundos permitido entre dos nodos";
 choices[82][2] = "El tama&ntilde;o en bits de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[82][3] = "El m&aacute;ximo retardo medido en milisegundos permitido entre dos nodos";
 answers[82] = choices[82][0];
 units[82] = "101";
 comments[82] = "Id Pregunta: 10114. Maximum Transfer Unit";


//  Id pregunta: 10121 Año de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el encaminamiento por vector-distancia cada router:";
 choices[83]= new Array();
 choices[83][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[83][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[83][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[83][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[83] = choices[83][0];
 units[83] = "102";
 comments[83] = "Id Pregunta: 10121. ";


//  Id pregunta: 10175 Año de creación de pregunta: 2014-01-01
 questions[84]= "85)  Booch, Jacobson y Rumbaugh propusieron de forma conjunta PUDS como marco de trabajo gen&eacute;rico para el desarrollo de software.";
 choices[84]= new Array();
 choices[84][0] = "PUDS propone un proceso iterativo e incremental para el desarrollo de sw. La distribuci&oacute;n de la funcionalidad a implementar en distintos incrementos implica un mayor esfuerzo y dificultad en relaci&oacute;n con la gesti&oacute;n del riesgo. ";
 choices[84][1] = "Cada ciclo de desarrollo comprende varias iteraciones. Cada iteraci&oacute;n se subdivide en 4 fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n y Transici&oacute;n";
 choices[84][2] = "Cada ciclo de desarrollo se subdivide en varias fases o flujos de trabajo fundamentales: planificaci&oacute;n, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n y pruebas y finalmente, evaluaci&oacute;n del ciclo.";
 choices[84][3] = "Los casos de uso gu&iacute;an el proceso de desarrollo, centrando la atenci&oacute;n en lo que el usuario quiere / espera del sistema";
 answers[84] = choices[84][3];
 units[84] = "82";
 comments[84] = "Id Pregunta: 10175. ";


//  Id pregunta: 10194 Año de creación de pregunta: 2014-01-01
 questions[85]= "86)  Para el reconocimiento de las vocales se calculan";
 choices[85]= new Array();
 choices[85][0] = "los al&oacute;fonos";
 choices[85][1] = "el pitch";
 choices[85][2] = "los formantes";
 choices[85][3] = "el cepstrum";
 answers[85] = choices[85][2];
 units[85] = "94";
 comments[85] = "Id Pregunta: 10194. ";


//  Id pregunta: 10202 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[86]= new Array();
 choices[86][0] = "Para el canal de subida utiliza la modulaci&oacute;n SD-FDMA y para el de bajada, OFDMA";
 choices[86][1] = "Utiliza IMS (IP Multimedia Subsystem) para transmitir informaci&oacute;n multimedia sobre IP";
 choices[86][2] = "Es compatible con las redes IEEE 802.16e";
 choices[86][3] = "Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B";
 answers[86] = choices[86][2];
 units[86] = "108";
 comments[86] = "Id Pregunta: 10202. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m";


//  Id pregunta: 10230 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ala el m&eacute;todo que es usado para obtener un par&aacute;metro de inicializaci&oacute;n desde:";
 choices[87]= new Array();
 choices[87][0] = "Object getInitParameter(int index)";
 choices[87][1] = "Object getInitParameter(String name)";
 choices[87][2] = "String getInitParameter(String name)";
 choices[87][3] = "String getParameter(String name)";
 answers[87] = choices[87][2];
 units[87] = "116";
 comments[87] = "Id Pregunta: 10230. ";


//  Id pregunta: 10253 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  Cuando sea preciso recabar el consentimiento del interesado para tratar sus datos personales:";
 choices[88]= new Array();
 choices[88][0] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, s&oacute;lo en el caso de los datos especialmente protegidos";
 choices[88][1] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y durante un periodo m&aacute;ximo de 12 meses";
 choices[88][2] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y mientras dure dicho tratamiento";
 choices[88][3] = "No ser&aacute; necesario que el responsable del tratamiento pruebe la existencia del consentimiento para el mismo";
 answers[88] = choices[88][2];
 units[88] = "29";
 comments[88] = "Id Pregunta: 10253. Art&iacute;culo 12.3 del RD 1720/2007";


//  Id pregunta: 10343 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[89][1] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[89][2] = "La correcci&oacute;n de errores de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, cuando sea necesario para la utilizaci&oacute;n del programa por parte del usuario seg&uacute;n su finalidad prevista";
 choices[89][3] = "Todas las respuestas anteriores son falsas";
 answers[89] = choices[89][2];
 units[89] = "36";
 comments[89] = "Id Pregunta: 10343. Consultar Art. 100 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10348 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;C&oacute;mo se llama la organizaci&oacute;n que desarrolla est&aacute;ndares abiertos para la industria de la telefon&iacute;a m&oacute;vil?";
 choices[90]= new Array();
 choices[90][0] = "BSA (Business  Software Alliance)";
 choices[90][1] = "OpenMG (Open Mobile Group)";
 choices[90][2] = "OMA (Open Mobile Alliance)";
 choices[90][3] = "The Open Group";
 answers[90] = choices[90][2];
 units[90] = "37";
 comments[90] = "Id Pregunta: 10348. La OMA est&aacute; integrada, entre otros, por operadores de telefon&iacute;a m&oacute;vil, y provedores de aplicaciones y contenidos para m&oacute;viles";


//  Id pregunta: 10358 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes no es un principio del Marco Europeo de Interopeabilidad?";
 choices[91]= new Array();
 choices[91][0] = "Multiling&uuml;ismo";
 choices[91][1] = "Accesibilidad";
 choices[91][2] = "Empleo de soluciones de software libre";
 choices[91][3] = "Uso de est&aacute;ndares abiertos";
 answers[91] = choices[91][2];
 units[91] = "40";
 comments[91] = "Id Pregunta: 10358. Los ocho principios que define el Marco Europeo de Interoperabilidad son: Accesibilidad, Multiling&uuml;ismo, Seguridad, Protecci&oacute;n de datos de car&aacute;cter personal, Subsidiariedad, Uso de est&aacute;ndares abiertos, Valorar los beneficios de software de fuentes abierta";


//  Id pregunta: 10364 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  En relaci&oacute;n con IEC (International Electrotechnical Commission), se&ntilde;ale la respuesta incorrecta:";
 choices[92]= new Array();
 choices[92][0] = "El equivalente europeo es CENELEC (Comit&eacute; Europeo de Normalizaci&oacute;n Electrot&eacute;cnica)";
 choices[92][1] = "La representaci&oacute;n espa&ntilde;ola como miembro de pleno derecho recae en AENOR";
 choices[92][2] = "Elabora normas a nivel t&eacute;cnico en materia el&eacute;ctrica y electrot&eacute;cnica";
 choices[92][3] = "Las normas elaboradas por el CENELEC se denominan CEN";
 answers[92] = choices[92][3];
 units[92] = "42";
 comments[92] = "Id Pregunta: 10364. Las normas elaboradas por el CENELEC se denominan EN (Norma Europea)";


//  Id pregunta: 10427 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de simplificaci&oacute;n administrativa al que se ajustar&aacute; la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n, establece ";
 choices[93]= new Array();
 choices[93][0] = "la m&aacute;xima difusi&oacute;n, publicidad y transparencia del procedimiento.";
 choices[93][1] = "el requerimiento a los ciudadanos de s&oacute;lo aquellos datos que sean estrictamente necesarios a la finalidad para la que se soliciten. ";
 choices[93][2] = "la no utilizaci&oacute;n de medios electr&oacute;nicos que puedan implicar restricciones o";
 choices[93][3] = "la reducci&oacute;n de manera sustancial de los t&eacute;rminos y plazos de los procedimientos administrativos. ";
 answers[93] = choices[93][3];
 units[93] = "30";
 comments[93] = "Id Pregunta: 10427. Examen TIC A1 2013";


//  Id pregunta: 10458 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l no es una novedad de HTML 5? ";
 choices[94]= new Array();
 choices[94][0] = "Application Cache";
 choices[94][1] = "Elementos sem&aacute;nticos.";
 choices[94][2] = "Web workers";
 choices[94][3] = "Elementos de desarrollo para plataformas m&oacute;viles.";
 answers[94] = choices[94][3];
 units[94] = "69";
 comments[94] = "Id Pregunta: 10458. ";


//  Id pregunta: 10463 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Respecto a REST, indique la respuesta correcta:";
 choices[95]= new Array();
 choices[95][0] = "Los m&eacute;todos HEAD, POST, PUT y DELETE definen la interfaz de los recursos.";
 choices[95][1] = "Al igual que SOAP est&aacute; basado en verbos u operaciones para definir la funcionalidad de las aplicaciones.";
 choices[95][2] = "Los servicios web tipo REST permiten el uso de WS-Security.";
 choices[95][3] = "Permiten mayor escalabilidad al no requerir mantenimiento del estado.";
 answers[95] = choices[95][3];
 units[95] = "51";
 comments[95] = "Id Pregunta: 10463. ";


//  Id pregunta: 10485 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Con qu&eacute; &aacute;mbito se relaciona COSO?";
 choices[96]= new Array();
 choices[96][0] = "Con control de la calidad, es similar al EFQM ";
 choices[96][1] = "Con el marco de Seguridad de las Tecnolog&iacute;as de la Informaci&oacute;n, similar a la ISO 27000";
 choices[96][2] = "Con Gobierno Corporativo de las Tecnologias de la Informaci&oacute;n";
 choices[96][3] = "Con el control de los servicios de Tecnolog&iacute;as de la Informaci&oacute;n, similar a ITIL";
 answers[96] = choices[96][2];
 units[96] = "98";
 comments[96] = "Id Pregunta: 10485. ";


//  Id pregunta: 10503 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Qu&eacute; estandar internacional especifica clases de cableado de proposito general?";
 choices[97]= new Array();
 choices[97][0] = "ISO/IEC 11801";
 choices[97][1] = "EN 50173";
 choices[97][2] = "ISO/IEC 18101";
 choices[97][3] = "EN 50137";
 answers[97] = choices[97][0];
 units[97] = "99";
 comments[97] = "Id Pregunta: 10503. ";


//  Id pregunta: 10523 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  A cu&aacute;l de los siguientes organismos corresponde la gesti&oacute;n del registro de los nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s correspondiente a Espa&ntilde;a (.es):";
 choices[98]= new Array();
 choices[98][0] = "El Gobierno";
 choices[98][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[98][2] = "Red.es";
 choices[98][3] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n";
 answers[98] = choices[98][2];
 units[98] = "110";
 comments[98] = "Id Pregunta: 10523. ";


//  Id pregunta: 10559 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Cual de los siguientes no es un principio de COBIT5";
 choices[99]= new Array();
 choices[99][0] = "Satisfacer las necesidades de las partes interesadas";
 choices[99][1] = "Unificar el Gobierno con la administraci&oacute;n";
 choices[99][2] = "Habilitar un enfoque hol&iacute;stico";
 choices[99][3] = "Aplicar un solo marco integrado";
 answers[99] = choices[99][1];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10559. Uno de los principios es Separar el Gobierno de la Administraci&oacute;n";


