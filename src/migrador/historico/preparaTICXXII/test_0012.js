/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 162 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  El representante de Estados Unidos en la ISO es:";
 choices[0]= new Array();
 choices[0][0] = "AENOR";
 choices[0][1] = "BSI";
 choices[0][2] = "IEEE";
 choices[0][3] = "ANSI";
 answers[0] = choices[0][3];
 units[0] = "42";
 comments[0] = "Id Pregunta: 162. ";


//  Id pregunta: 192 Año de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponde con una soluci&oacute;n ERP (Enterprise Resource Planning)?";
 choices[1]= new Array();
 choices[1][0] = "Alto grado de modularidad";
 choices[1][1] = "Homogeneizaci&oacute;n de Procesos Corporativos";
 choices[1][2] = "Facilidad de implementaci&oacute;n en corto plazo";
 choices[1][3] = "Integraci&oacute;n total de &aacute;reas organizativas";
 answers[1] = choices[1][2];
 units[1] = "21";
 comments[1] = "Id Pregunta: 192. Examen TIC MAP B 2004";


//  Id pregunta: 305 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La evoluci&oacute;n de la inform&aacute;tica desde la perspectiva estrat&eacute;gica:";
 choices[2]= new Array();
 choices[2][0] = "Proporciona un marco conceptual que permita a los directores entender el fen&oacute;meno inform&aacute;tico y tomar decisiones de planificaci&oacute;n";
 choices[2][1] = "Permite conocer cu&aacute;les han de ser las caracter&iacute;sticas del directivo que deba dirigir la organizaci&oacute;n y la estructura organizativa adecuada";
 choices[2][2] = "Permite analizar la situaci&oacute;n de un momento concreto";
 choices[2][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[2] = choices[2][0];
 units[2] = "23";
 comments[2] = "Id Pregunta: 305. ";


//  Id pregunta: 518 Año de creación de pregunta: 2003-01-01
 questions[3]= "4)  Una de las organizaciones que lucha internacionalmente contra la pirater&iacute;a inform&aacute;tica es";
 choices[3]= new Array();
 choices[3][0] = "BSA";
 choices[3][1] = "RSA";
 choices[3][2] = "ESA";
 choices[3][3] = "EIT";
 answers[3] = choices[3][0];
 units[3] = "36,37";
 comments[3] = "Id Pregunta: 518. ";


//  Id pregunta: 523 Año de creación de pregunta: 2004-01-01
 questions[4]= "5)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n debe estar segregada de la de administrador de sistemas?";
 choices[4]= new Array();
 choices[4][0] = "Administrador de seguridad";
 choices[4][1] = "Administrador de red";
 choices[4][2] = "Aseguramiento de calidad";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][2];
 units[4] = "31, 32, 33";
 comments[4] = "Id Pregunta: 523. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 667 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  En su libro &quot;La estructura de las organizaciones&quot; Mintzberg describe las organizaciones matriciales y se&ntilde;ala diversos factores que las identifican. &iquest;Cu&aacute;l de los siguientes no corresponde a estos factores?";
 choices[5]= new Array();
 choices[5][0] = "Elevada tendencia a disgregar a los especialistas en unidades funcionales en lo que corresponde a asuntos internos";
 choices[5][1] = "Estructura sumamente org&aacute;nica con escasa formalizaci&oacute;n del comportamiento";
 choices[5][2] = "Elevada especializaci&oacute;n del puesto basada en una preparaci&oacute;n formal";
 choices[5][3] = "Uso de dispositivos de enlace para fomentar la adaptaci&oacute;n mutua";
 answers[5] = choices[5][0];
 units[5] = "22";
 comments[5] = "Id Pregunta: 667. ";


//  Id pregunta: 729 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[6]= new Array();
 choices[6][0] = "DXL (Document eXtended Language)";
 choices[6][1] = "DTD (Document Type Definition)";
 choices[6][2] = "DOM (Document Object Model)";
 choices[6][3] = "DML (Document Markup Language)";
 answers[6] = choices[6][1];
 units[6] = "69";
 comments[6] = "Id Pregunta: 729. Examen TIC MAP B 2004";


//  Id pregunta: 1000 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  El &aacute;rbol formado por las entradas del directorio, en LDAP, se llama:";
 choices[7]= new Array();
 choices[7][0] = "Ltree";
 choices[7][1] = "LDS";
 choices[7][2] = "DIT";
 choices[7][3] = "Todas son falsas";
 answers[7] = choices[7][2];
 units[7] = "74";
 comments[7] = "Id Pregunta: 1000. ";


//  Id pregunta: 1389 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Un proveedor de servicios OLE DB es:";
 choices[8]= new Array();
 choices[8][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[8][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[8][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[8][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[8] = choices[8][0];
 units[8] = "59";
 comments[8] = "Id Pregunta: 1389. ";


//  Id pregunta: 1431 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Uno de los siguientes grupos de componentes no pertenece al conjunto de componentes s&iacute;ncronos de groupware. Indicar cu&aacute;l:";
 choices[9]= new Array();
 choices[9][0] = "video, audio, editor texto";
 choices[9][1] = "gestor de tr&aacute;fico, control de estado, punteros";
 choices[9][2] = "bases de datos de objetos, motores workflow, notas post-it";
 choices[9][3] = "compartidor de aplicaciones, chat, pizarras";
 answers[9] = choices[9][2];
 units[9] = "71";
 comments[9] = "Id Pregunta: 1431. ";


//  Id pregunta: 1676 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  Indique la afirmaci&oacute;n correcta";
 choices[10]= new Array();
 choices[10][0] = "Una relaci&oacute;n est&aacute; en 4&ordf;FN si no incluye dependencias combinacionales";
 choices[10][1] = "Una relaci&oacute;n est&aacute; en 2&ordf;FN si no incluye grupos repetitivos y sus atributos no primarios tienen una dependencia plena respecto a cada una de las claves y no con partes de estas";
 choices[10][2] = "Una relaci&oacute;n est&aacute; en 1&ordf;FN si incluye alg&uacute;n grupo repetitivo";
 choices[10][3] = "Una relaci&oacute;n est&aacute; en 3&ordf;FN si y solo si est&aacute; en 1&ordf;FN pero no en 2&ordf;FN";
 answers[10] = choices[10][1];
 units[10] = "58";
 comments[10] = "Id Pregunta: 1676. ";


//  Id pregunta: 1865 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es falso respecto a LDAP?";
 choices[11]= new Array();
 choices[11][0] = "Cada entrada cuenta con un nombre DN";
 choices[11][1] = "Representa todos los campos mediante ASN.1";
 choices[11][2] = "Ha eliminado opciones respecto a DAP";
 choices[11][3] = "Las entradas se pueden organizar en &aacute;rbol";
 answers[11] = choices[11][1];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1865. RFC 4514";


//  Id pregunta: 1873 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  Indicar la afirmaci&oacute;n falsa en relaci&oacute;n a las notificaciones telem&aacute;ticas cuya regulaci&oacute;n se introduce en el RD 209/2003.";
 choices[12]= new Array();
 choices[12][0] = "La notificaci&oacute;n se practicar&aacute; s&oacute;lo para los procedimientos expresamente se&ntilde;alados por el interesado";
 choices[12][1] = "El interesado deber&aacute; contar con un certificado digital X.509v3 emitido a su nombre o de la empresa que represente";
 choices[12][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 choices[12][3] = "En cualquier caso, la direcci&oacute;n electr&oacute;nica  &uacute;nica tendr&aacute; car&aacute;cter indefinido.";
 answers[12] = choices[12][3];
 units[12] = "30";
 comments[12] = "Id Pregunta: 1873. ";


//  Id pregunta: 1932 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos";
 choices[13]= new Array();
 choices[13][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo";
 choices[13][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[13][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante";
 choices[13][3] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita";
 answers[13] = choices[13][1];
 units[13] = "30";
 comments[13] = "Id Pregunta: 1932. ";


//  Id pregunta: 2030 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  En UML, los diagramas que describen bajo la forma de acciones y reacciones el comportamiento de un sistema desde el punto de vista de un usuario, se denominan:";
 choices[14]= new Array();
 choices[14][0] = "casos de uso";
 choices[14][1] = "diagrama de estados";
 choices[14][2] = "diagrama de actividades";
 choices[14][3] = "diagrama de secuencia";
 answers[14] = choices[14][0];
 units[14] = "82";
 comments[14] = "Id Pregunta: 2030. Similar a examen TIC SS A 2003";


//  Id pregunta: 2130 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[15]= new Array();
 choices[15][0] = "Los diagramas de secuencia muestran interacciones entre elementos desde el punto de vista temporal";
 choices[15][1] = "Los diagramas de estados-transiciones visualizan aut&oacute;matas de estados finitos";
 choices[15][2] = "La notaci&oacute;n UML proviene de la fusi&oacute;n de las notaciones Booch, OMT, OOSE y otras";
 choices[15][3] = "Todas las anteriores respuestas son ciertas";
 answers[15] = choices[15][3];
 units[15] = "82";
 comments[15] = "Id Pregunta: 2130. ";


//  Id pregunta: 2285 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  La m&eacute;trica puntos de funci&oacute;n se considera una m&eacute;trica de:";
 choices[16]= new Array();
 choices[16][0] = "Calidad";
 choices[16][1] = "Tiempo de desarrollo";
 choices[16][2] = "Tama&ntilde;o";
 choices[16][3] = "Resultados";
 answers[16] = choices[16][2];
 units[16] = "89";
 comments[16] = "Id Pregunta: 2285. Preparatic XVII";


//  Id pregunta: 2396 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  La integraci&oacute;n de un conjunto de bases de datos aisladas en un entorno cliente / servidor, con un potente servidor de bases de datos, es un ejemplo t&iacute;pico de:";
 choices[17]= new Array();
 choices[17][0] = "Downsizing.";
 choices[17][1] = "Outsourcing.";
 choices[17][2] = "Arquitectura centralizada.";
 choices[17][3] = "Upsizing.";
 answers[17] = choices[17][3];
 units[17] = "90";
 comments[17] = "Id Pregunta: 2396. ";


//  Id pregunta: 2689 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[18]= new Array();
 choices[18][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[18][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[18][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][2];
 units[18] = "87,88,92";
 comments[18] = "Id Pregunta: 2689. ";


//  Id pregunta: 2886 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  En TESTA II, el sistema de intercambio de informaci&oacute;n de productos farmac&eacute;uticos es:";
 choices[19]= new Array();
 choices[19][0] = "el sistema CARE";
 choices[19][1] = "el sistema EUDRANET";
 choices[19][2] = "el sistema STATEL";
 choices[19][3] = "el sistema EURES";
 answers[19] = choices[19][1];
 units[19] = "103";
 comments[19] = "Id Pregunta: 2886. ";


//  Id pregunta: 3268 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;En qu&eacute; consiste la funci&oacute;n de filtrado en un bridge?:";
 choices[20]= new Array();
 choices[20][0] = "Permitir el paso de determinadas frecuencias &uacute;nicamente";
 choices[20][1] = "Eliminaci&oacute;n de las tramas err&oacute;neas";
 choices[20][2] = "Separaci&oacute;n del tr&aacute;fico de dos subredes";
 choices[20][3] = "Los bridges (puentes) no tienen capacidad de filtrado, ya que operan al nivel de enlace";
 answers[20] = choices[20][2];
 units[20] = "102";
 comments[20] = "Id Pregunta: 3268. ";


//  Id pregunta: 3784 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  Respecto a J2ME y Symbian:";
 choices[21]= new Array();
 choices[21][0] = "Symbian soporta J2ME, y J2ME soporta Symbian";
 choices[21][1] = "Symbian soporta J2ME, y J2ME no soporta Symbian";
 choices[21][2] = "Symbian no soporta J2ME, y J2ME soporta Symbian";
 choices[21][3] = "Symbian no soporta J2ME, y J2ME no soporta Symbian";
 answers[21] = choices[21][1];
 units[21] = "60";
 comments[21] = "Id Pregunta: 3784. ";


//  Id pregunta: 3827 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;ale la respuesta falsa respecto a los protocolos de gesti&oacute;n de red:";
 choices[22]= new Array();
 choices[22][0] = "El modelo de gesti&oacute;n OSI utiliza una base de informaci&oacute;n de gesti&oacute;n o MIB para almacenar la informaci&oacute;n estructurada que representa a los elementos de la red y sus atributos";
 choices[22][1] = "La estructura de informaci&oacute;n se denomina SMI (Estructura de informaci&oacute;n de Gestion) para estas estructuras el modelo OSI define un Sistema muy complejo de gesti&oacute;n orientado a objetos";
 choices[22][2] = "Con la especificaci&oacute;n SNMP versi&oacute;n 1 (Protocolo sencillo de gesti&oacute;n de red) no se puede comprobar el origen de un mensaje ni su autenficaci&oacute;n, lo que le hace vulnerable a ataques para modificar la configuraci&oacute;n de red";
 choices[22][3] = "SNMPv2 y SNMP son variantes de SMTP";
 answers[22] = choices[22][3];
 units[22] = "104";
 comments[22] = "Id Pregunta: 3827. ";


//  Id pregunta: 4138 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  La capacidad de un cortafuegos de controlar el estado de las conexiones activas y usar esta informaci&oacute;n para decidir que paquetes de red deja pasar se llama";
 choices[23]= new Array();
 choices[23][0] = "An&aacute;lisis de puertos (Application firewall)";
 choices[23][1] = "Filtrado est&aacute;tico de paquetes (Static Packet filtering)";
 choices[23][2] = "Inspecci&oacute;n completa de estado (Stateful Packet filtering)";
 choices[23][3] = "Barrido ICMP (ICMP Scanning)";
 answers[23] = choices[23][2];
 units[23] = "113";
 comments[23] = "Id Pregunta: 4138. ";


//  Id pregunta: 4236 Año de creación de pregunta: 2007-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l es el nombre del paquete open source Java que se utiliza para la generaci&oacute;n de informes?";
 choices[24]= new Array();
 choices[24][0] = "iReport";
 choices[24][1] = "SaintReport";
 choices[24][2] = "JasperReports";
 choices[24][3] = "xStream";
 answers[24] = choices[24][2];
 units[24] = "60,116";
 comments[24] = "Id Pregunta: 4236. ";


//  Id pregunta: 4337 Año de creación de pregunta: 2007-01-01
 questions[25]= "26)  Ana es responsable de comunicaciones en una entidad p&uacute;blica. La entidad dispone de una LAN con conmutadores (switch) 100Base-TX, con varios puertos libres (no usados) cada uno. El pr&oacute;ximo despliegue de una nueva aplicaci&oacute;n va a incrementar considerablemente el tr&aacute;fico, superando con mucho la capacidad de la infraestructura actual. La soluci&oacute;n m&aacute;s eficiente para cubrir las demandas de la nueva aplicaci&oacute;n, de entre las que se citan a continuaci&oacute;n, ser&aacute;:";
 choices[25]= new Array();
 choices[25][0] = "Desplegar una nueva infraestructura de fibra &oacute;ptica de 1Gb 1000Base-SX.";
 choices[25][1] = "Desplegar una nueva infraestructura de fibra &oacute;ptica de 10Gb 10Gbase-SR/SW.";
 choices[25][2] = "Implantar una red WiFi 802.11.";
 choices[25][3] = "Tender nuevas l&iacute;neas 100Base-TX entre los puertos libres de los conmutadores.";
 answers[25] = choices[25][3];
 units[25] = "100";
 comments[25] = "Id Pregunta: 4337. ";


//  Id pregunta: 4407 Año de creación de pregunta: 2007-01-01
 questions[26]= "27)  &iquest;En qu&eacute; consiste el CRA (Customer Relationship Analisis?";
 choices[26]= new Array();
 choices[26][0] = "Es un conjunto de herramientas que proveen de soporte t&eacute;cnico al CRM.";
 choices[26][1] = "Es el precursor del CRM.";
 choices[26][2] = "Es el an&aacute;lisis de datos acerca de los clientes y su relaci&oacute;n con la empresa.";
 choices[26][3] = "Integraci&oacute;n del software de an&aacute;lisis de datos con las bases de datos y el inventario de las organizaciones";
 answers[26] = choices[26][2];
 units[26] = "65";
 comments[26] = "Id Pregunta: 4407. ";


//  Id pregunta: 4687 Año de creación de pregunta: 2007-01-01
 questions[27]= "28)  La fibra &oacute;ptica, con respecto al par trenzado";
 choices[27]= new Array();
 choices[27][0] = "Tiene m&aacute;s radiaci&oacute;n electromagn&eacute;tica";
 choices[27][1] = "Tiene m&aacute;s ancho de banda";
 choices[27][2] = "Es m&aacute;s f&aacute;cil de instalar";
 choices[27][3] = "Tiene mayor atenuaci&oacute;n";
 answers[27] = choices[27][1];
 units[27] = "99";
 comments[27] = "Id Pregunta: 4687. Examen 2006 JCYL";


//  Id pregunta: 4751 Año de creación de pregunta: 2009-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes sistemas de telefon&iacute;a se dise&ntilde;o para trabajar en espacios reducidos y altas densidades de tr&aacute;fico?";
 choices[28]= new Array();
 choices[28][0] = "GSM 900";
 choices[28][1] = "TACS";
 choices[28][2] = "DECT";
 choices[28][3] = "PAS";
 answers[28] = choices[28][2];
 units[28] = "108";
 comments[28] = "Id Pregunta: 4751. ";


//  Id pregunta: 4793 Año de creación de pregunta: 2007-01-01
 questions[29]= "30)  Dada una jerarqu&iacute;a total con solapamiento en el modelo E/R (Entidad / Relaci&oacute;n), &iquest;cu&aacute;l de las siguientesafirmaciones es cierta?";
 choices[29]= new Array();
 choices[29][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en alguno de los subtipos";
 choices[29][1] = "Cuando se borra una ocurrencia de un subtipo hay que borrarla tambi&eacute;n del supertipo";
 choices[29][2] = "Cuando se borra una ocurrencia de un subtipo se borra del supertipo si s&oacute;lo pertenece a ese subtipo";
 choices[29][3] = "Si se borra una ocurrencia del supertipo no siempre hay que eliminarla de los subtipos a los que pertenece";
 answers[29] = choices[29][2];
 units[29] = "80";
 comments[29] = "Id Pregunta: 4793. ";


//  Id pregunta: 4876 Año de creación de pregunta: 2007-01-01
 questions[30]= "31)  En el modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman, la actividad de modificaci&oacute;n del c&oacute;digo fuente de un m&oacute;dulo con la finalidad de adecuarlo para futuros cambios, recibe la denominaci&oacute;n de:";
 choices[30]= new Array();
 choices[30][0] = "Ingenier&iacute;a inversa de procesos.";
 choices[30][1] = "Reestructuraci&oacute;n del software.";
 choices[30][2] = "Ingenier&iacute;a de la integraci&oacute;n de m&oacute;dulos.";
 choices[30][3] = "Ingenier&iacute;a avanzada.";
 answers[30] = choices[30][1];
 units[30] = "91";
 comments[30] = "Id Pregunta: 4876. examen TIC 2006";


//  Id pregunta: 4976 Año de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no ha sido elaborado por W3C (World Wide Web Consortium)?";
 choices[31]= new Array();
 choices[31][0] = "XML (Extensible Markup Language).";
 choices[31][1] = "SOAP (Simple Object Access Protocol).";
 choices[31][2] = "WAI (Web Accessibility Initiative).";
 choices[31][3] = "SSL (Secure Sockets Layer).";
 answers[31] = choices[31][3];
 units[31] = "39";
 comments[31] = "Id Pregunta: 4976. Examen TIC B 2007";


//  Id pregunta: 5158 Año de creación de pregunta: 2003-01-01
 questions[32]= "33)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[32]= new Array();
 choices[32][0] = "IEEE 802.2";
 choices[32][1] = "IEEE 802.3";
 choices[32][2] = "IEEE 802.4";
 choices[32][3] = "IEEE 802.5";
 answers[32] = choices[32][1];
 units[32] = "101";
 comments[32] = "Id Pregunta: 5158. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5710 Año de creación de pregunta: 2009-01-01
 questions[33]= "34)  En las iniciales IDABC, la &quot;I&quot; y la &quot;D&quot; corresonden a:";
 choices[33]= new Array();
 choices[33][0] = "Innovative y Delivery";
 choices[33][1] = "Interoperable y Delivery";
 choices[33][2] = "Innovative y Development";
 choices[33][3] = "Interoperable y Development";
 answers[33] = choices[33][1];
 units[33] = "40";
 comments[33] = "Id Pregunta: 5710. ";


//  Id pregunta: 5794 Año de creación de pregunta: 2009-01-01
 questions[34]= "35)  Las Administraciones P&uacute;blicas pueden utilizar varios medios para su identificaci&oacute;n electr&oacute;nica. Indique cual NO es uno de ellos.";
 choices[34]= new Array();
 choices[34][0] = "Sistemas de firma electr&oacute;nica, como el sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica.";
 choices[34][1] = "Firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas.";
 choices[34][2] = "Intercambio electr&oacute;nico de datos en entornos cerrados de comunicaci&oacute;n, conforme a lo espec&iacute;ficamente acordado en las partes.";
 choices[34][3] = "La identidad electr&oacute;nica reconocida del &oacute;rgano administrativo.";
 answers[34] = choices[34][3];
 units[34] = "30";
 comments[34] = "Id Pregunta: 5794. MAP 2008 A2";


//  Id pregunta: 5970 Año de creación de pregunta: 2010-01-01
 questions[35]= "36)  Las medidas de seguridad exigibles a los ficheros y tratamientos se clasifican en:";
 choices[35]= new Array();
 choices[35][0] = "Bajo, medio y alto";
 choices[35][1] = "B&aacute;sico, medio y alto";
 choices[35][2] = "Bajo, aquellos que eval&uacute;an la personalidad, medio y alto";
 choices[35][3] = "Bajo, medio, alto y especialmente protegidos";
 answers[35] = choices[35][1];
 units[35] = "29";
 comments[35] = "Id Pregunta: 5970. Castilla La Mancha 2009";


//  Id pregunta: 6078 Año de creación de pregunta: 2010-01-01
 questions[36]= "37)  Los procesos de Gesti&oacute;n de las Comunicaciones del Proyecto incluyen lo siguiente:";
 choices[36]= new Array();
 choices[36][0] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones, Informar del Rendimiento y Gestionar a los interesados.";
 choices[36][1] = "Planificaci&oacute;n de las Comunicaciones, Distribuci&oacute;n de la Informaci&oacute;n, Informar del Rendimiento y Gestionar a los Interesados.";
 choices[36][2] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones y Desarrollo de las Comunicaciones.";
 choices[36][3] = "An&aacute;lisis de las Comunicaciones y Dise&ntilde;o de las Comunicaciones.";
 answers[36] = choices[36][1];
 units[36] = "27";
 comments[36] = "Id Pregunta: 6078. ";


//  Id pregunta: 6146 Año de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;En el PDM, cu&aacute;l es el tipo de relaci&oacute;n de precedencia m&aacute;s comunmente utilizado?";
 choices[37]= new Array();
 choices[37][0] = "Inicio a fin";
 choices[37][1] = "Final a inicio";
 choices[37][2] = "Final a final";
 choices[37][3] = "Inicio a inicio";
 answers[37] = choices[37][1];
 units[37] = "28";
 comments[37] = "Id Pregunta: 6146. ";


//  Id pregunta: 6211 Año de creación de pregunta: 2010-01-01
 questions[38]= "39)  En M&eacute;trica versi&oacute;n 3, el proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, incluye la tarea de:";
 choices[38]= new Array();
 choices[38][0] = "Definici&oacute;n de la Arquitectura Tecnol&oacute;gica";
 choices[38][1] = "Estudio de la situaci&oacute;n actual";
 choices[38][2] = "Selecci&oacute;n de la Soluci&oacute;n";
 choices[38][3] = "Definici&oacute;n del Sistema";
 answers[38] = choices[38][0];
 units[38] = "86";
 comments[38] = "Id Pregunta: 6211. TICB-2009, bloque desarrollo";


//  Id pregunta: 6287 Año de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes no es una tarea de la actividad de Identificaci&oacute;n de Requisitos, en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n?";
 choices[39]= new Array();
 choices[39][0] = "Estudio de los Procesos del PSI";
 choices[39][1] = "An&aacute;lisis de las Necesidades de la Informaci&oacute;n";
 choices[39][2] = "Catalogaci&oacute;n de Requisitos";
 choices[39][3] = "Todas lo son";
 answers[39] = choices[39][3];
 units[39] = "77";
 comments[39] = "Id Pregunta: 6287. ";


//  Id pregunta: 6346 Año de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes definiciones describe lo que es Mashup?";
 choices[40]= new Array();
 choices[40][0] = "Aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes para crear un servicio en base a ellas.";
 choices[40][1] = "T&eacute;cnica de desarrollo web que permite modificar la informaci&oacute;n de una p&aacute;gina web, sin tener que recargarla totalmente, agilizando la interacci&oacute;n con el usuario.";
 choices[40][2] = "Conjunto de especificaciones que posibilitan la comunicaci&oacute;n y provisi&oacute;n de servicios entre diferentes aplicaciones v&iacute;a web.";
 choices[40][3] = "Ninguna de las anteriores.";
 answers[40] = choices[40][0];
 units[40] = "120";
 comments[40] = "Id Pregunta: 6346. ";


//  Id pregunta: 6547 Año de creación de pregunta: 2010-01-01
 questions[41]= "42)  Qu&eacute; pol&iacute;tica de control aplica cuando la infraestructura usa un modelo no discrecional?";
 choices[41]= new Array();
 choices[41][0] = "Basado en reglas";
 choices[41][1] = "Basado en roles";
 choices[41][2] = "Basado en identidades";
 choices[41][3] = "MAC";
 answers[41] = choices[41][1];
 units[41] = "111";
 comments[41] = "Id Pregunta: 6547. ";


//  Id pregunta: 6633 Año de creación de pregunta: 2010-01-01
 questions[42]= "43)  El modelo de McCall de calidad de software define:";
 choices[42]= new Array();
 choices[42][0] = "Caracter&iacute;sticas del proyecto y del producto generado";
 choices[42][1] = "Caracter&iacute;sticas operacionales, de modificaci&oacute;n y de transici&oacute;n o conversi&oacute;n";
 choices[42][2] = "Caracter&iacute;sticas de an&aacute;lisis, desarrollo y pruebas";
 choices[42][3] = "Caracter&iacute;sticas de accesibilidad y rendimiento";
 answers[42] = choices[42][1];
 units[42] = "88";
 comments[42] = "Id Pregunta: 6633. ";


//  Id pregunta: 7249 Año de creación de pregunta: 2010-01-01
 questions[43]= "44)  En el protocolo MPLS, la cabecera de las etiquetas MPLS contienen los siguientes. Se&ntilde;ale la INCORRECTA";
 choices[43]= new Array();
 choices[43][0] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 choices[43][1] = "Tiempo de vida (8 bits)";
 choices[43][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[43][3] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 answers[43] = choices[43][3];
 units[43] = "100";
 comments[43] = "Id Pregunta: 7249. Examen TIC B 2009";


//  Id pregunta: 7274 Año de creación de pregunta: 2010-01-01
 questions[44]= "45)  Entre las ventajas de la virtualizaci&oacute;n de hardware no se encuentra";
 choices[44]= new Array();
 choices[44][0] = "La reducci&oacute;n de costes de administraci&oacute;n";
 choices[44][1] = "La eficiencia energ&eacute;tica";
 choices[44][2] = "El incremento de rendimiento de las aplicaciones";
 choices[44][3] = "Mayor aprovechamiento de los servidores";
 answers[44] = choices[44][2];
 units[44] = "119";
 comments[44] = "Id Pregunta: 7274. ";


//  Id pregunta: 7292 Año de creación de pregunta: 2010-01-01
 questions[45]= "46)  Un proveedor de SW de reconocimiento autom&aacute;tico del habla (ASR) es:";
 choices[45]= new Array();
 choices[45][0] = "Nuance";
 choices[45][1] = "Loquendo";
 choices[45][2] = "Telisma";
 choices[45][3] = "Todas las anteriores son correctas";
 answers[45] = choices[45][3];
 units[45] = "94";
 comments[45] = "Id Pregunta: 7292. ";


//  Id pregunta: 7811 Año de creación de pregunta: 2010-01-01
 questions[46]= "47)   De acuerdo con el Real Decreto 263/1996, de 16 de febrero, por el que se regula la utilizaci&oacute;n de t&eacute;cnicas electr&oacute;nicas, inform&aacute;ticas y telem&aacute;ticas por la Administraci&oacute;n General del Estado, las medidas de seguridad aplicadas a los soportes, medios y aplicaciones utilizados por los &oacute;rganos de la Administraci&oacute;n General del Estado y sus Entidades de Derecho P&uacute;blico vinculadas o dependientes, no deber&aacute;n garantizar:";
 choices[46]= new Array();
 choices[46][0] = " La restricci&oacute;n de su utilizaci&oacute;n y del acceso a los datos e informaciones a las personas autorizadas.";
 choices[46][1] = " La prevenci&oacute;n de alteraciones o p&eacute;rdida de los datos e informaciones.";
 choices[46][2] = " La protecci&oacute;n de los procesos inform&aacute;ticos frente a manipulaciones no autorizadas.";
 choices[46][3] = " La identificaci&oacute;n de la unidad administrativa donde han sido generados los datos o informaciones.";
 answers[46] = choices[46][3];
 units[46] = "NULL";
 comments[46] = "Id Pregunta: 7811. Map 2005";


//  Id pregunta: 8198 Año de creación de pregunta: 2011-01-01
 questions[47]= "48)  En ITIL v.3, &iquest;cu&aacute;l de los siguientes procesos y actividades NO corresponde a la estrategia de servicios?:";
 choices[47]= new Array();
 choices[47][0] = "Gesti&oacute;n financiera. ";
 choices[47][1] = "Gesti&oacute;n del portfolio de servicios. ";
 choices[47][2] = "Gesti&oacute;n de la demanda. ";
 choices[47][3] = "Gesti&oacute;n del cat&aacute;logo de servicios. ";
 answers[47] = choices[47][3];
 units[47] = "98";
 comments[47] = "Id Pregunta: 8198. Examen TIC A1 2010";


//  Id pregunta: 8200 Año de creación de pregunta: 2011-01-01
 questions[48]= "49)  En una valoraci&oacute;n de tres ofertas inform&aacute;ticas, nos encontramos que en un criterio a maximizar, las puntuaciones son : 5, 7 y 11. &iquest;Cu&aacute;les ser&iacute;an sus puntuaciones normalizadas por el m&eacute;todo de fracci&oacute;n del ideal?:";
 choices[48]= new Array();
 choices[48][0] = "0,5 ; 0,7 ; 1 ";
 choices[48][1] = "0,227 ; 0,318 ; 0,454 ";
 choices[48][2] = "0; 0,4; 1 ";
 choices[48][3] = "1 ; 1,4 ; 2 ";
 answers[48] = choices[48][2];
 units[48] = "41";
 comments[48] = "Id Pregunta: 8200. Examen TIC A1 2010";


//  Id pregunta: 8261 Año de creación de pregunta: 2011-01-01
 questions[49]= "50)  El empleo de redes neuronales para el reconocimiento de caracteres:";
 choices[49]= new Array();
 choices[49][0] = "Usa mecanismos basados en l&oacute;gica borrosa.";
 choices[49][1] = "No permite explicar f&aacute;cilmente las razones por las que se obtiene un determinado resultado.";
 choices[49][2] = "Se basa en la obtenci&oacute;n de un vector de caracter&iacute;sticas";
 choices[49][3] = "Hace que el reconocimiento se vea m&aacute;s afectado por defectos de la imagen que otros m&eacute;todos como el de comparaci&oacute;n de matrices.";
 answers[49] = choices[49][1];
 units[49] = "63,64";
 comments[49] = "Id Pregunta: 8261. Examen TIC A1 2010";


//  Id pregunta: 8263 Año de creación de pregunta: 2011-01-01
 questions[50]= "51)  Seg&uacute;n Lientz y Swanson y a diferencia de M&Eacute;TRICA versi&oacute;n 3, entre los 4 tipos de mantenimiento de sistemas de informaci&oacute;n, se encuentra:";
 choices[50]= new Array();
 choices[50][0] = "Mantenimiento preventivo.";
 choices[50][1] = "Mantenimiento perfectivo.";
 choices[50][2] = "Mantenimiento adaptativo.";
 choices[50][3] = "Mantenimiento correctivo.";
 answers[50] = choices[50][0];
 units[50] = "86";
 comments[50] = "Id Pregunta: 8263. Examen TIC A1 2010";


//  Id pregunta: 8299 Año de creación de pregunta: 2011-01-01
 questions[51]= "52)  Una direcci&oacute;n IP identifica:";
 choices[51]= new Array();
 choices[51][0] = "Una conexi&oacute;n. ";
 choices[51][1] = "Una interfaz de tarjeta de red.";
 choices[51][2] = "Un ordenador.";
 choices[51][3] = "Una aplicaci&oacute;n interactiva. ";
 answers[51] = choices[51][1];
 units[51] = "100";
 comments[51] = "Id Pregunta: 8299. Examen TIC A2 2010";


//  Id pregunta: 8310 Año de creación de pregunta: 2011-01-01
 questions[52]= "53)  La autoridad encargada de la asignaci&oacute;n de nombres de dominio de primer nivel gen&eacute;ricos (gTLD) y de c&oacute;digos de pa&iacute;ses (ocTLD) &uacute;nicos en lnternet es:";
 choices[52]= new Array();
 choices[52][0] = "IANA. ";
 choices[52][1] = "NIST.";
 choices[52][2] = "ICANN.";
 choices[52][3] = "IETF.";
 answers[52] = choices[52][2];
 units[52] = "112,42";
 comments[52] = "Id Pregunta: 8310. Examen TIC A2 2010";


//  Id pregunta: 8313 Año de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l es el est&aacute;ndar correspondiente al m&eacute;todo de compresi&oacute;n ADPCM (Adaptative Differential Pulse Code Modulation) de la voz? ";
 choices[53]= new Array();
 choices[53][0] = "G.711.";
 choices[53][1] = "G.726.";
 choices[53][2] = "G.728. ";
 choices[53][3] = "G.729. ";
 answers[53] = choices[53][1];
 units[53] = "117";
 comments[53] = "Id Pregunta: 8313. Examen TIC A2 2010";


//  Id pregunta: 8356 Año de creación de pregunta: 2011-01-01
 questions[54]= "55)  El nivel 5 del modelo de Capacidad y Madurez (CMMI), nivel optimizado, tiene como objetivo:";
 choices[54]= new Array();
 choices[54][0] = "Gestionar cuantitativamente los procesos para lograr los objetivos de calidad y ejecuci&oacute;n del proceso establecido por el proyecto.";
 choices[54][1] = "El entendimiento cuantitativo de los procesos de la organizaci&oacute;n.";
 choices[54][2] = "Mejorar la calidad de los procesos de la organizaci&oacute;n, en base a un entendimiento de las causas comunes de variaci&oacute;n.";
 choices[54][3] = "Proporcionar datos de la ejecuci&oacute;n de procesos.";
 answers[54] = choices[54][2];
 units[54] = "87";
 comments[54] = "Id Pregunta: 8356. Examen TIC A2 2010";


//  Id pregunta: 8395 Año de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO es una t&eacute;cnica empleada en Miner&iacute;a de Datos?";
 choices[55]= new Array();
 choices[55][0] = "Las redes neuronales.";
 choices[55][1] = "Look and Find.";
 choices[55][2] = "Los &aacute;rboles de decisi&oacute;n.";
 choices[55][3] = "Las redes bayesianas.";
 answers[55] = choices[55][1];
 units[55] = "71";
 comments[55] = "Id Pregunta: 8395. Examen TIC A2 2010";


//  Id pregunta: 8452 Año de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l es uno de los inconvenientes de usar un Hub?:";
 choices[56]= new Array();
 choices[56][0] = "Un Hub no puede extender la distancia operativa de la red";
 choices[56][1] = "Un Hub no puede filtrar el tr&aacute;fico de la red";
 choices[56][2] = "Un Hub no puede amplificar se&ntilde;ales debilitadas";
 choices[56][3] = "Un Hub no cumple ninguna de las anteriores";
 answers[56] = choices[56][1];
 units[56] = "102";
 comments[56] = "Id Pregunta: 8452. Analista Ayto. Madrid 2010";


//  Id pregunta: 8470 Año de creación de pregunta: 2011-01-01
 questions[57]= "58)  La regla 2 de Codd es la del:";
 choices[57]= new Array();
 choices[57][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[57][1] = "Acceso garantizado";
 choices[57][2] = "Actualizaci&oacute;n de vistas";
 choices[57][3] = "Integridad referencial";
 answers[57] = choices[57][1];
 units[57] = "57,58";
 comments[57] = "Id Pregunta: 8470. Analista Ayto. Madrid 2010";


//  Id pregunta: 8548 Año de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos se corresponde con la tecnolog&iacute;a que proporcionauna infraestructura para la definici&oacute;n de servicios que pueden ser consumidos demanera uniforme, sin conocer los detalles de los sistemas que los proporcionan?";
 choices[58]= new Array();
 choices[58][0] = "EAI (Enterprise Application Integration)";
 choices[58][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[58][2] = "ESB (Enterprise Service Bus)";
 choices[58][3] = "ORB (Object Request Broker)";
 answers[58] = choices[58][2];
 units[58] = "51";
 comments[58] = "Id Pregunta: 8548. Analista Ayto. Madrid 2010";


//  Id pregunta: 8778 Año de creación de pregunta: 2011-01-01
 questions[59]= "60)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[59]= new Array();
 choices[59][0] = "53 TCP";
 choices[59][1] = "453 TCP";
 choices[59][2] = "456 UDP";
 choices[59][3] = "53 UDP";
 answers[59] = choices[59][0];
 units[59] = "100, 112";
 comments[59] = "Id Pregunta: 8778. Examen UPM A2 2011";


//  Id pregunta: 8818 Año de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Para cu&aacute;l de los siguientes supuestos no vale la calidad de software?";
 choices[60]= new Array();
 choices[60][0] = "Para dar confianza";
 choices[60][1] = "Para asegurar que el software funciona";
 choices[60][2] = "Para evaluar el proceso de desarrollo de software";
 choices[60][3] = "Para hacer los resultados del proceso m&aacute;s predecibles";
 answers[60] = choices[60][3];
 units[60] = "87, 92";
 comments[60] = "Id Pregunta: 8818. Examen UPM A2 2011";


//  Id pregunta: 8895 Año de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes no corresponde a una funci&oacute;n digest?";
 choices[61]= new Array();
 choices[61][0] = "HMAC";
 choices[61][1] = "MD5";
 choices[61][2] = "MD8";
 choices[61][3] = "SHA";
 answers[61] = choices[61][2];
 units[61] = "74";
 comments[61] = "Id Pregunta: 8895. ";


//  Id pregunta: 8899 Año de creación de pregunta: 2011-01-01
 questions[62]= "63)  Se&ntilde;ale cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas";
 choices[62]= new Array();
 choices[62][0] = "M&eacute;todo de la ponderaci&oacute;n lineal";
 choices[62][1] = "M&eacute;todo de TOPSIS";
 choices[62][2] = "M&eacute;todo Delphi";
 choices[62][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[62] = choices[62][2];
 units[62] = "34";
 comments[62] = "Id Pregunta: 8899. ";


//  Id pregunta: 9090 Año de creación de pregunta: 2013-01-01
 questions[63]= "64)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[63]= new Array();
 choices[63][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[63][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[63][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[63][3] = "Todas las anteriores son falsas";
 answers[63] = choices[63][3];
 units[63] = "36";
 comments[63] = "Id Pregunta: 9090. ";


//  Id pregunta: 9102 Año de creación de pregunta: 2013-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes es un tipo de huella digital?";
 choices[64]= new Array();
 choices[64][0] = "Huella sim&eacute;trica.";
 choices[64][1] = "Huella asim&eacute;trica.";
 choices[64][2] = "Huella an&oacute;nima.";
 choices[64][3] = "Todas las anteriores son verdaderas.";
 answers[64] = choices[64][3];
 units[64] = "37";
 comments[64] = "Id Pregunta: 9102. ";


//  Id pregunta: 9159 Año de creación de pregunta: 2013-01-01
 questions[65]= "66)  No es una forma de presentar contenidos en un LMS:";
 choices[65]= new Array();
 choices[65][0] = "Estructura lineal";
 choices[65][1] = "Estructura matricial";
 choices[65][2] = "Estructura jer&aacute;rquica";
 choices[65][3] = "Estructura en red";
 answers[65] = choices[65][1];
 units[65] = "66";
 comments[65] = "Id Pregunta: 9159. ";


//  Id pregunta: 9169 Año de creación de pregunta: 2013-01-01
 questions[66]= "67)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[66]= new Array();
 choices[66][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[66][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[66][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[66][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[66] = choices[66][0];
 units[66] = "70";
 comments[66] = "Id Pregunta: 9169. Examen TIC A2 2011";


//  Id pregunta: 9182 Año de creación de pregunta: 2013-01-01
 questions[67]= "68)  La transformaci&oacute;n hit or miss (o a&ntilde;adir o eliminar) aplicada al procesamiento de im&aacute;genes se utiliza para:";
 choices[67]= new Array();
 choices[67][0] = "Dividir una imagen en regiones a partir de diferencias crom&aacute;ticas";
 choices[67][1] = "Detectar regiones con una forma espec&iacute;fica";
 choices[67][2] = "Calcular la apertura y clausura del contorno de un objeto";
 choices[67][3] = "No es posible aplicar hit or miss al procesamiento de im&aacute;genes";
 answers[67] = choices[67][1];
 units[67] = "93";
 comments[67] = "Id Pregunta: 9182. ";


//  Id pregunta: 9231 Año de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[68]= new Array();
 choices[68][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[68][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[68][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[68][3] = "Ninguna es correcta.";
 answers[68] = choices[68][2];
 units[68] = "52,55";
 comments[68] = "Id Pregunta: 9231. ";


//  Id pregunta: 9329 Año de creación de pregunta: 2013-01-01
 questions[69]= "70)  El cable bs/ utp";
 choices[69]= new Array();
 choices[69][0] = "Es un cable de pantalla global de aluminio y una trenza de cobre recubriendola";
 choices[69][1] = "";
 choices[69][2] = "Presenta apantallamiento";
 choices[69][3] = "No presenta apantallamiento global";
 answers[69] = choices[69][0];
 units[69] = "99";
 comments[69] = "Id Pregunta: 9329. ";


//  Id pregunta: 9345 Año de creación de pregunta: 2013-01-01
 questions[70]= "71)  De entre las siguientes, existe una que no es una iniciativa comunitaria relacionada con el &aacute;mbito TIC:";
 choices[70]= new Array();
 choices[70][0] = "ISA";
 choices[70][1] = "eTIN";
 choices[70][2] = "IDAbc";
 choices[70][3] = "CIP 2007-2013";
 answers[70] = choices[70][1];
 units[70] = "103";
 comments[70] = "Id Pregunta: 9345. Fuente: Temario ASTIC p&aacute;gina 15 y ss 2011";


//  Id pregunta: 9403 Año de creación de pregunta: 2013-01-01
 questions[71]= "72)  RTP (Real time protocol) se utiliza en ToIP (telefon&iacute;a IP) para";
 choices[71]= new Array();
 choices[71][0] = "Mantener sincronizados los relojes de los tel&eacute;fonos.";
 choices[71][1] = "Nada. Lo que se utiliza es RTCP (real time control protocol)";
 choices[71][2] = "Transmitir la voz: una vez codificada se encapsula como payload de RTP en datagramas UDP.";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][2];
 units[71] = "109";
 comments[71] = "Id Pregunta: 9403. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9437 Año de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as NO se considera &aacute;gil?";
 choices[72]= new Array();
 choices[72][0] = "M&eacute;l&eacute;";
 choices[72][1] = "OMT";
 choices[72][2] = "DAS (Desarrollo Adaptativo de Software)";
 choices[72][3] = "DCC (Desarrollo Conducido por Caracter&iacute;sticas)";
 answers[72] = choices[72][1];
 units[72] = "79";
 comments[72] = "Id Pregunta: 9437. Examen AGE TIC A1 2011";


//  Id pregunta: 9439 Año de creación de pregunta: 2013-01-01
 questions[73]= "74)  El diagrama de estructura de datos (DED):";
 choices[73]= new Array();
 choices[73][0] = "Representa el modelo l&oacute;gico de datos.";
 choices[73][1] = "Es &uacute;nico para cada sistema de informaci&oacute;n.";
 choices[73][2] = "Se conoce tambi&eacute;n como Diccionario de Datos.";
 choices[73][3] = "Define un conjunto de objetos que comparten una misma estructura y comportamiento com&uacute;n.";
 answers[73] = choices[73][0];
 units[73] = "81";
 comments[73] = "Id Pregunta: 9439. Examen AGE TIC A1 2011";


//  Id pregunta: 9442 Año de creación de pregunta: 2013-01-01
 questions[74]= "75)  El t&eacute;rmino formal que se emplea para indicar que los datos de un objeto solamente pueden ser manipulados a trav&eacute;s de m&eacute;todos definidos en su interfaz se conoce como:";
 choices[74]= new Array();
 choices[74][0] = "Polimorfismo.";
 choices[74][1] = "Abstracci&oacute;n.";
 choices[74][2] = "Encapsulaci&oacute;n.";
 choices[74][3] = "Persistencia.";
 answers[74] = choices[74][2];
 units[74] = "82";
 comments[74] = "Id Pregunta: 9442. Examen AGE TIC A1 2011";


//  Id pregunta: 9487 Año de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de obtenci&oacute;n de requisitos no es una t&eacute;cnica de bajo nivel?";
 choices[75]= new Array();
 choices[75][0] = "Entrevistas";
 choices[75][1] = "PIECES";
 choices[75][2] = "An&aacute;lisis de mercado";
 choices[75][3] = "Prototipos";
 answers[75] = choices[75][3];
 units[75] = "78";
 comments[75] = "Id Pregunta: 9487. ";


//  Id pregunta: 9646 Año de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[76]= new Array();
 choices[76][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[76][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[76][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[76][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[76] = choices[76][3];
 units[76] = "41";
 comments[76] = "Id Pregunta: 9646. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";


//  Id pregunta: 9673 Año de creación de pregunta: 2014-01-01
 questions[77]= "78)  En Grid Computing:";
 choices[77]= new Array();
 choices[77][0] = "Podemos conseguir cerca del 100% de uso de CPU.";
 choices[77][1] = "Los nodos no tienen que estar dedicados, puesto que su caracter&iacute;stica m&aacute;s importante es que la escalabilidad es parametrizable.";
 choices[77][2] = "Son sistemas heterog&eacute;neos.";
 choices[77][3] = "Todas las anteriores.";
 answers[77] = choices[77][3];
 units[77] = "45";
 comments[77] = "Id Pregunta: 9673. ";


//  Id pregunta: 9778 Año de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Con qu&eacute; directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[78]= new Array();
 choices[78][0] = "Master";
 choices[78][1] = "MasterPage";
 choices[78][2] = "Master.Page";
 choices[78][3] = "Page ";
 answers[78] = choices[78][0];
 units[78] = "59, 115";
 comments[78] = "Id Pregunta: 9778. Examen TIC A2 2013";


//  Id pregunta: 9781 Año de creación de pregunta: 2014-01-01
 questions[79]= "80)  Se&ntilde;ale la afirmaci&oacute;n es correcta respecto a firmar digitalmente mediante XML Signature al usar WS-Security:";
 choices[79]= new Array();
 choices[79][0] = "WS-Security no contempla el uso de XML Signature por no adaptarse bien al modelo petici&oacute;n respuesta de Web Services. ";
 choices[79][1] = "WS-Security contemplaba el uso de XML Signature en la versi&oacute;n 1.0 pero se abandon&oacute; en favor de XML DynaSign. ";
 choices[79][2] = "WS-Security contempla el uso de XML Signature con algunas limitaciones, como recomendar el no usar Enveloped Signature Transform. ";
 choices[79][3] = "WS-Security contempla el uso de XML Signature, sin establecer limitaciones ni extensiones especiales. ";
 answers[79] = choices[79][2];
 units[79] = "111";
 comments[79] = "Id Pregunta: 9781. Examen TIC A2 2013";


//  Id pregunta: 9798 Año de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;les son &aacute;reas de actuaci&oacute;n dentro de la Estrategia 2011-2015 del Plan Avanza 2?";
 choices[80]= new Array();
 choices[80][0] = "Ciudadan&iacute;a Digital, Econom&iacute;a Digital, Educaci&oacute;n y Servicios P&uacute;blicos Digitales, Publicaci&oacute;n Digital. ";
 choices[80][1] = "Infraestructura, Gobernanza, Confianza y Seguridad, Espacio &uacute;nico de informaci&oacute;n.";
 choices[80][2] = "Administraci&oacute;n sin papeles, Infraestructuras, Uso y confianza en Internet, Impulso de la industria TIC espa&ntilde;ola. ";
 choices[80][3] = "Administraci&oacute;n en l&iacute;nea, Comercio electr&oacute;nico, Salud y Educaci&oacute;n en l&iacute;nea, Banda Ancha. ";
 answers[80] = choices[80][2];
 units[80] = "30";
 comments[80] = "Id Pregunta: 9798. Examen TIC-A2 2013-Libre. En la p&aacute;gina web de la estrategia viene algo distinto, dice: Infraestructuras, Confianza y Seguridad, Capacitaci&oacute;n Tecnol&oacute;gica, Contenidos y Servicios Digitales y Desarrollo del Sector TIC. Esto a veces pasa.";


//  Id pregunta: 9908 Año de creación de pregunta: 2014-01-01
 questions[81]= "82)  En M&eacute;trica v3 existe una interfaz de &quot;Aseguramiento de la Calidad&quot;. Indique la afirmaci&oacute;n correcta sobre dicho interfaz:";
 choices[81]= new Array();
 choices[81][0] = "Para cada uno de los procesos que se definen en el interfaz se establecen un conjunto de tareas que se desarrollan mediante la ejecuci&oacute;n de diversas actividades.";
 choices[81][1] = "El Grupo de Aseguramiento de la Calidad no participa en todos los procesos que se describen en el interfaz.";
 choices[81][2] = "La &quot;Constituci&oacute;n del equipo de aseguramiento de la calidad&quot; se realiza dentro del proceso de Estudio de Viabilidad del Sistema del interfaz.";
 choices[81][3] = "La aplicaci&oacute;n de dicho interfaz es de obligado cumplimiento para los organismos dependientes de la AGE, seg&uacute;n la Ley 28/2006, de 18 de julio, por la que se crea la Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de losServicios.";
 answers[81] = choices[81][2];
 units[81] = "86";
 comments[81] = "Id Pregunta: 9908. TIC A2, Examen 2013";


//  Id pregunta: 9921 Año de creación de pregunta: 2014-01-01
 questions[82]= "83)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[82]= new Array();
 choices[82][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[82][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[82][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[82][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[82] = choices[82][0];
 units[82] = "86,58";
 comments[82] = "Id Pregunta: 9921. TIC A2, Examen 2013";


//  Id pregunta: 9982 Año de creación de pregunta: 2014-01-01
 questions[83]= "84)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[83]= new Array();
 choices[83][0] = "&lt;% y %&gt;";
 choices[83][1] = "&lt;SCRIPT LANGUAGE=ASPScript&gt;&lt;/SCRIPT&gt;";
 choices[83][2] = "&lt;!-- --&gt;";
 choices[83][3] = "Los comandos ASP no se mezclan en el mismo archivo que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[83] = choices[83][2];
 units[83] = "59,115";
 comments[83] = "Id Pregunta: 9982. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10035 Año de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es la direcci&oacute;n multicast utilizada por el protocolo RIP v2 (Routing Information Protocol), seg&uacute;n RFC 2453, para enviar las actualizaciones de sus tablas?";
 choices[84]= new Array();
 choices[84][0] = "224.0.0.4 ";
 choices[84][1] = "224.0.0.5";
 choices[84][2] = "224.0.0.9 ";
 choices[84][3] = "224.0.0.22";
 answers[84] = choices[84][2];
 units[84] = "100";
 comments[84] = "Id Pregunta: 10035. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10068 Año de creación de pregunta: 2014-01-01
 questions[85]= "86)  Entre los tipos de modulaci&oacute;n en las tecnolog&iacute;as xDSL se encuentra:";
 choices[85]= new Array();
 choices[85][0] = "SDH (Synchronous Digital Hierarchy).";
 choices[85][1] = "SGL (Splitterless G. Lite).";
 choices[85][2] = "SHDSL (Single-pair High-speed Digital Subscriber Line).";
 choices[85][3] = "CAP (Carrierless Amplitude Phase).";
 answers[85] = choices[85][3];
 units[85] = "107";
 comments[85] = "Id Pregunta: 10068. TIC A2, libre, Examen 2013";


//  Id pregunta: 10075 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  La tecnolog&iacute;a WiMAX 2 es conocida formalmente como:";
 choices[86]= new Array();
 choices[86][0] = "802.16m ";
 choices[86][1] = "802.16a";
 choices[86][2] = "802.11x ";
 choices[86][3] = "802.11n";
 answers[86] = choices[86][0];
 units[86] = "101";
 comments[86] = "Id Pregunta: 10075. TIC A2, libre, Examen 2013";


//  Id pregunta: 10236 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  El objeto PreparedStatement de la apise utiliza para:";
 choices[87]= new Array();
 choices[87][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[87][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[87][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[87][3] = "ninguna de las anteriores";
 answers[87] = choices[87][0];
 units[87] = "60";
 comments[87] = "Id Pregunta: 10236. ";


//  Id pregunta: 10243 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  Dentro del archivoexiste el atributo, puedes se&ntilde;alar la respuesta correcta que explica la funci&oacute;n del elemento:";
 choices[88]= new Array();
 choices[88][0] = "El alcance del Objeto ActionError relativo al m&oacute;dulo o aplicaci&oacute;n web";
 choices[88][1] = "El contexto que se usa para acceder al objeto ActionError para esta Exception";
 choices[88][2] = "Resuelve el nombre del manejador de excepiones de la clase Java";
 choices[88][3] = "Hace referencia a la clase Java registrada para manejar estas excepciones";
 answers[88] = choices[88][1];
 units[88] = "116";
 comments[88] = "Id Pregunta: 10243. ";


//  Id pregunta: 10246 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:";
 choices[89]= new Array();
 choices[89][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[89][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[89][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[89][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[89] = choices[89][1];
 units[89] = "61";
 comments[89] = "Id Pregunta: 10246. ";


//  Id pregunta: 10261 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  En cuanto al registro de ficheros en el Registro General de Protecci&oacute;n de Datos";
 choices[90]= new Array();
 choices[90][0] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad privada y en todo caso para los de titularidad p&uacute;blica";
 choices[90][1] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad p&uacute;blica y en todo caso para los de titularidad privada";
 choices[90][2] = "Es obligatorio para todo fichero que contenga datos de car&aacute;cter personal";
 choices[90][3] = "No es obligatorio en ning&uacute;n caso";
 answers[90] = choices[90][2];
 units[90] = "29";
 comments[90] = "Id Pregunta: 10261. Art&iacute;culo 55.1 y 55.2 del RD 1720/2007";


//  Id pregunta: 10297 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  En SNMP &iquest;qu&eacute; puerto utilizan las traps y en qu&eacute; sentido se transmiten?";
 choices[91]= new Array();
 choices[91][0] = "Puerto 162 y las env&iacute;a el agente al gestor.";
 choices[91][1] = "Puerto 162 y las env&iacute;a el gestor al agente.";
 choices[91][2] = "Puerto 161 y las env&iacute;a el agente al gestor.";
 choices[91][3] = "Puerto 161 y las env&iacute;a el gestor al agente.";
 answers[91] = choices[91][0];
 units[91] = "104";
 comments[91] = "Id Pregunta: 10297. TIC A2, libre, examen 2013";


//  Id pregunta: 10313 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  Comparando NAS (Network-attached Storage) con SAN (Storage Area Network):";
 choices[92]= new Array();
 choices[92][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[92][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[92][2] = "Ambos operan a nivel de bloque.";
 choices[92][3] = "Ambos operan a nivel de fichero.";
 answers[92] = choices[92][0];
 units[92] = "48";
 comments[92] = "Id Pregunta: 10313. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10351 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "Para cumplir nivel AA, la presentaci&oacute;n visual de texto e im&aacute;genes de texto debe tener una relaci&oacute;n de contraste de, al menos, 4.5:1";
 choices[93][1] = "Lo anterior es cierto, pero para nivel A";
 choices[93][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[93][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que no aplica a logotipos, textos grandes y textos incidentales";
 answers[93] = choices[93][3];
 units[93] = "39";
 comments[93] = "Id Pregunta: 10351. Consultar WCAG Pauta 1.4.3 Contraste (m&iacute;nimo)";


//  Id pregunta: 10426 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta. ";
 choices[94]= new Array();
 choices[94][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[94][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[94][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[94][3] = "Las anteriores a) b) y c) son correctas.";
 answers[94] = choices[94][3];
 units[94] = "76";
 comments[94] = "Id Pregunta: 10426. Examen TIC A1 2013";


//  Id pregunta: 10493 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Qu&eacute; comando Linux permite conocer los archivos que tiene abiertos un proceso?";
 choices[95]= new Array();
 choices[95][0] = "ps -a";
 choices[95][1] = "top";
 choices[95][2] = "fork";
 choices[95][3] = "lsof";
 answers[95] = choices[95][3];
 units[95] = "53";
 comments[95] = "Id Pregunta: 10493. ps y top muestra informaci&oacute;n de los procesos, pero no de los archivos abiertos, solo lsof hace eso";


//  Id pregunta: 10501 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cual de las siguientes etiquetas fue introducida en HTML5?";
 choices[96]= new Array();
 choices[96][0] = "&lt;head&gt;";
 choices[96][1] = "&lt;video&gt;";
 choices[96][2] = "&lt;music&gt;";
 choices[96][3] = "&lt;background&gt;";
 answers[96] = choices[96][1];
 units[96] = "69";
 comments[96] = "Id Pregunta: 10501. http://es.wikipedia.org/wiki/HTML5";


//  Id pregunta: 10516 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Indique cu&aacute;l de las afirmaciones es falsa";
 choices[97]= new Array();
 choices[97][0] = "Las redes de telecomunicaciones que desarrollen actividades esenciales para la defensa nacional integran, se reservan al Estado y se rigen por su normativa espec&iacute;fica.";
 choices[97][1] = "En el marco de las funciones relacionadas con la defensa civil, corresponde al Ministerio de Defensa estudiar, programar, proponer y ejecutar las medidas relacionadas con las telecomunicaciones.";
 choices[97][2] = "En el &aacute;mbito de la protecci&oacute;n civil, en su espec&iacute;fica relaci&oacute;n con el uso de las telecomunicaciones, el Ministerio de Industria, Energ&iacute;a y Turismo cooperar&aacute; con el Ministerio del Interior y con los &oacute;rganos responsables de las comunidades aut&oacute;nomas.";
 choices[97][3] = "El Gobierno, con car&aacute;cter excepcional y transitorio, podr&aacute; acordar la asunci&oacute;n por la Administraci&oacute;n General del Estado de la gesti&oacute;n directa de determinados servicios de comunicaciones electr&oacute;nicas. ";
 answers[97] = choices[97][1];
 units[97] = "110";
 comments[97] = "Id Pregunta: 10516. ";


//  Id pregunta: 10543 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[98]= new Array();
 choices[98][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[98][1] = "25% de hogares conectados a redes NGA";
 choices[98][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[98][3] = "Todas las anteriores ";
 answers[98] = choices[98][3];
 units[98] = "108";
 comments[98] = "Id Pregunta: 10543. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";


//  Id pregunta: 10561 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Los controles preventivos tienen como objeto:";
 choices[99]= new Array();
 choices[99][0] = "reducir el riesgo ante una debilidad existente";
 choices[99][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[99][2] = "Solucionar problemas detectados por controles detectivos";
 choices[99][3] = "Reportar errores";
 answers[99] = choices[99][1];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10561. ";


