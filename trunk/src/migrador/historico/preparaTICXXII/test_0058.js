/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 175 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  En el &aacute;mbito de la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, se debe a Donovan un modelo que utiliza como variable:";
 choices[0]= new Array();
 choices[0][0] = "El presupuesto empleado en inform&aacute;tica";
 choices[0][1] = "La estructura organizativa";
 choices[0][2] = "El grado de distribuci&oacute;n";
 choices[0][3] = "El nivel de complejidad organizativa";
 answers[0] = choices[0][2];
 units[0] = "22";
 comments[0] = "Id Pregunta: 175. donovan - nolan";


//  Id pregunta: 244 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  En una auditor&iacute;a de comunicaciones al realizar un an&aacute;lisis detallado de los costes operativos, no ser&aacute; relevante considerar:";
 choices[1]= new Array();
 choices[1][0] = "Volumen de datos transmitidos";
 choices[1][1] = "Tiempos de duraci&oacute;n de conexi&oacute;n";
 choices[1][2] = "Protocolo de comunicaci&oacute;n";
 choices[1][3] = "Facilidades est&aacute;ticas y din&aacute;micas de conexi&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "31,32,33";
 comments[1] = "Id Pregunta: 244. ";


//  Id pregunta: 350 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La utilizaci&oacute;n de cartuchos de t&oacute;ner reciclados en impresoras de la Administraci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "No es de inter&eacute;s para la Administraci&oacute;n, ya que estos cartuchos son m&aacute;s caros";
 choices[2][1] = "Es una pol&iacute;tica apropiada para la Administraci&oacute;n, siempre que se garantice la calidad de estos consumibles";
 choices[2][2] = "Debe reservarse para aquellas situaciones en que se utilicen conjuntamente con otros consumibles reciclados";
 choices[2][3] = "Es una situaci&oacute;n coyuntural para situaciones de insuficiencia presupuestaria";
 answers[2] = choices[2][1];
 units[2] = "41";
 comments[2] = "Id Pregunta: 350. ";


//  Id pregunta: 462 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Son fuentes accesibles al p&uacute;blico, seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[3]= new Array();
 choices[3][0] = "Aquellos ficheros cuya consulta puede ser realizada sin m&aacute;s exigencia que, en su caso, el abono de una contraprestaci&oacute;n";
 choices[3][1] = "El censo electoral";
 choices[3][2] = "Los diarios y boletines oficiales y los medios de comunicaci&oacute;n";
 choices[3][3] = "S&oacute;lo los boletines oficiales";
 answers[3] = choices[3][2];
 units[3] = "29";
 comments[3] = "Id Pregunta: 462. ";


//  Id pregunta: 502 Año de creación de pregunta: 2003-01-01
 questions[4]= "5)  En la decisi&oacute;n de alternativas para la adquisici&oacute;n de sistemas de tecnolog&iacute;as de la informaci&oacute;n no se usa ";
 choices[4]= new Array();
 choices[4][0] = "Las cadenas de Petri ";
 choices[4][1] = "Ponderaci&oacute;n lineal";
 choices[4][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[4][3] = "Gr&aacute;ficos R&aacute;dar";
 answers[4] = choices[4][0];
 units[4] = "34";
 comments[4] = "Id Pregunta: 502. Modificada por JCED Preparatic XVII";


//  Id pregunta: 602 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  &iquest;Las cesiones de datos personales entre Administraciones P&uacute;blicas, para el ejercicio de competencias distintas pueden realizarse?";
 choices[5]= new Array();
 choices[5][0] = "En todo caso";
 choices[5][1] = "Cuando lo habilite una norma con rango formal de Ley";
 choices[5][2] = "Basta una autorizaci&oacute;n en una norma reglamentaria";
 choices[5][3] = "Nunca";
 answers[5] = choices[5][1];
 units[5] = "29";
 comments[5] = "Id Pregunta: 602. ";


//  Id pregunta: 896 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;En qu&eacute; consiste el an&aacute;lisis multidimensional de OLAP?";
 choices[6]= new Array();
 choices[6][0] = "En analizar los mismos datos desde distintas perspectivas.";
 choices[6][1] = "En consolidar los datos por distintas trayectorias.";
 choices[6][2] = "En encontrar nuevas relaciones entre variables.";
 choices[6][3] = "Todas las respuestas anteriores son correctas.";
 answers[6] = choices[6][3];
 units[6] = "68";
 comments[6] = "Id Pregunta: 896. ";


//  Id pregunta: 912 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; arquitectura paralela se caracteriza por ejecutar una instruccion sobre varios datos de manera simult&aacute;nea?:";
 choices[7]= new Array();
 choices[7][0] = "SIMD";
 choices[7][1] = "MIMD";
 choices[7][2] = "SISD";
 choices[7][3] = "MISD";
 answers[7] = choices[7][0];
 units[7] = "45";
 comments[7] = "Id Pregunta: 912. ";


//  Id pregunta: 947 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  CICS";
 choices[8]= new Array();
 choices[8][0] = "Es un ordenador con un conjunto de instrucciones complejo";
 choices[8][1] = "Es un servidor de directorio x500";
 choices[8][2] = "Es un monitor transaccional";
 choices[8][3] = "Es un servidor de directorio LDAP";
 answers[8] = choices[8][2];
 units[8] = "50";
 comments[8] = "Id Pregunta: 947. ";


//  Id pregunta: 1182 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Indique la afirmaci&oacute;n falsa sobre sistemas en tiempo real.";
 choices[9]= new Array();
 choices[9][0] = "El sistema operativo de tiempo real deber&aacute; contar con gesti&oacute;n de memoria virtual.";
 choices[9][1] = "Los sistemas de tiempo real se basan en la realimentaci&oacute;n de la informaci&oacute;n.";
 choices[9][2] = "El sistema deber&aacute; permanecer pr&aacute;cticamente inactivo para poder atender con la mayor rapidez posible cualquier evento de entrada.";
 choices[9][3] = "El sistema operativo de tiempo real deber&aacute; contar con bloqueo de los procesos cuando est&eacute;n espera y, normalmente, gesti&oacute;n FIFO de las colas de procesos bloqueados.";
 answers[9] = choices[9][0];
 units[9] = "83";
 comments[9] = "Id Pregunta: 1182. ";


//  Id pregunta: 1192 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indique cu&aacute;l es una ventaja de los applets sobre los scripts:";
 choices[10]= new Array();
 choices[10][0] = "El c&oacute;digo fuente de los applets no es visible";
 choices[10][1] = "Un applet descarga en una sola conexi&oacute;n todos los componentes necesarios";
 choices[10][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 choices[10][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 answers[10] = choices[10][2];
 units[10] = "116";
 comments[10] = "Id Pregunta: 1192. ";


//  Id pregunta: 1422 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Una relaci&oacute;n est&aacute; en primera forma normal si:";
 choices[11]= new Array();
 choices[11][0] = "La clave &uacute;nica permite la dependencia funcional";
 choices[11][1] = "No contiene claves dependientes de otra extranjera";
 choices[11][2] = "La clave extranjera est&aacute; normalizada";
 choices[11][3] = "No contiene grupos repetitivos";
 answers[11] = choices[11][3];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1422. ";


//  Id pregunta: 1496 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indicar cu&aacute;l de las siguientes afirmaciones no es cierta acerca del lenguaje HTML:";
 choices[12]= new Array();
 choices[12][0] = "Es un lenguaje de programaci&oacute;n";
 choices[12][1] = "Permite referencias a otros documentos o recursos de la red";
 choices[12][2] = "Permite la inclusi&oacute;n de marcas (tags) para controlar los aspectos de la presentaci&oacute;n";
 choices[12][3] = "Para escribir en HTML se necesita al menos un editor ASCII";
 answers[12] = choices[12][0];
 units[12] = "69";
 comments[12] = "Id Pregunta: 1496. ";


//  Id pregunta: 1549 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de estas afirmaciones es falsa con respecto al concepto transacci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "Todas las operaciones que constituyen una transacci&oacute;n se ejecutan en su totalidad o no se ejecutan en absoluto, es decir constituyen una unidad at&oacute;mica e indivisible.";
 choices[13][1] = "Si la transacci&oacute;n debe ejecutarse en varios servidores y uno de ellos sufre una aver&iacute;a, las transacciones efectuadas en el resto de servidores no tendr&aacute;n efecto al objeto de asegurar la sincronizaci&oacute;n e integridad de los datos.";
 choices[13][2] = "El procedimiento de transacciones de &lsquo;two phase commit&rsquo; consta de una 1&ordf; fase de verificaci&oacute;n de la correcta terminaci&oacute;n de la transacci&oacute;n en cada uno de los sistemas participantes y una 2&ordf; fase de ejecuci&oacute;n o cancelaci&oacute;n de dicha transacci&oacute;n.";
 choices[13][3] = "El procesamiento de transacciones solo puede hacerse en modo no orientado a la conexi&oacute;n, nunca en modo interactivo.";
 answers[13] = choices[13][3];
 units[13] = "56,57";
 comments[13] = "Id Pregunta: 1549. ";


//  Id pregunta: 1787 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  Las siglas  STRIPS se corresponden a";
 choices[14]= new Array();
 choices[14][0] = "Stanford Research Institute Problem Solver";
 choices[14][1] = "St. Luis Robotics Institute Private Software";
 choices[14][2] = "San Francisco Tech Robots Institute Practical Seasons";
 choices[14][3] = "Science, Tech and Research International Patented System";
 answers[14] = choices[14][0];
 units[14] = "63";
 comments[14] = "Id Pregunta: 1787. ";


//  Id pregunta: 2033 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  Cu&aacute;l de los siguientes no es un factor de calidad de McCall:";
 choices[15]= new Array();
 choices[15][0] = "Fiabilidad";
 choices[15][1] = "Usabilidad";
 choices[15][2] = "Facilidad de mantenimiento";
 choices[15][3] = "Bajo coste";
 answers[15] = choices[15][3];
 units[15] = "88";
 comments[15] = "Id Pregunta: 2033. Similar a examen TIC SS A 2003";


//  Id pregunta: 2038 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  En el Modelo de Excelencia de la EFQM, &iquest;Cu&aacute;l de los siguientes no es un criterio de calidad que act&uacute;e como agente facilitador del &eacute;xito?";
 choices[16]= new Array();
 choices[16][0] = "Liderazgo";
 choices[16][1] = "Pol&iacute;ticas y Estrategias";
 choices[16][2] = "Satisfacci&oacute;n del Personal";
 choices[16][3] = "Todos son agentes facilitadores";
 answers[16] = choices[16][2];
 units[16] = "92";
 comments[16] = "Id Pregunta: 2038. ";


//  Id pregunta: 2087 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es un sistema de tiempo real?";
 choices[17]= new Array();
 choices[17][0] = "Control de seguimiento de sat&eacute;lites.";
 choices[17][1] = "Control de edificios inteligentes.";
 choices[17][2] = "N&oacute;mina de una empresa.";
 choices[17][3] = "Reserva de billetes de una compa&ntilde;&iacute;a de transportes interurbana.";
 answers[17] = choices[17][2];
 units[17] = "83";
 comments[17] = "Id Pregunta: 2087. ";


//  Id pregunta: 2317 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  En el modelo Entidad-Relaci&oacute;n utilizado en la metodolog&iacute;a M&Eacute;TRICA, las Entidades se describen mediante:";
 choices[18]= new Array();
 choices[18][0] = "Los datos";
 choices[18][1] = "Las relaciones";
 choices[18][2] = "Los atributos";
 choices[18][3] = "Otras entidades";
 answers[18] = choices[18][2];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2317. ";


//  Id pregunta: 2446 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Las m&eacute;tricas que tratan de evaluar si el software desarrollado cumple los requerimientos del usuario son las:";
 choices[19]= new Array();
 choices[19][0] = "M&eacute;tricas de productividad";
 choices[19][1] = "M&eacute;tricas de los factores de calidad";
 choices[19][2] = "M&eacute;tricas de complejidad";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][1];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2446. ";


//  Id pregunta: 2587 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  En el contexto de los sistemas gestores de bases de datos documentales (SGBDD), la funcionalidad que permite que determinadas palabras u objetos redirijan a otros textos relacionados o con informaci&oacute;n ampliada, se denomina:";
 choices[20]= new Array();
 choices[20][0] = "Tesauro.";
 choices[20][1] = "Hipertexto.";
 choices[20][2] = "Referencia cruzada.";
 choices[20][3] = "Atributo.";
 answers[20] = choices[20][1];
 units[20] = "95";
 comments[20] = "Id Pregunta: 2587. Junta Andaluc&iacute;a";


//  Id pregunta: 2629 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Qu&egrave; actividad del An&aacute;lisis del Sistema de Informaci&oacute;n s&oacute;lo se realiza en el caso de an&aacute;lisis orientado a objetos?";
 choices[21]= new Array();
 choices[21][0] = "ASI 6 -  Elaboraci&oacute;n del Modelo de datos";
 choices[21][1] = "ASI 8 &ndash; Definici&oacute;n de Interfaces de Usuario";
 choices[21][2] = "ASI 4 &ndash; An&aacute;lisis de los Casos de Uso";
 choices[21][3] = "ASI 3 &ndash; Identificaci&oacute;n de Subsistemas de An&aacute;lisis";
 answers[21] = choices[21][2];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2629. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2829 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  Algunos de los pasos a realizar en el &quot;mining legacy system assets&quot; son:";
 choices[22]= new Array();
 choices[22][0] = "Rehabilitaci&oacute;n de componentes seleccionados.";
 choices[22][1] = "Reprogramaci&oacute;n de los m&oacute;dulos obsoletos.";
 choices[22][2] = "Realizaci&oacute;n de pruebas detalladas de los componentes del sistema en el nuevo entorno.";
 choices[22][3] = "Ninguna de las anteriores es correcta.";
 answers[22] = choices[22][0];
 units[22] = "90";
 comments[22] = "Id Pregunta: 2829. ";


//  Id pregunta: 2924 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  En relaci&oacute;n a los servicios web se&ntilde;ale la opci&oacute;n incorrecta";
 choices[23]= new Array();
 choices[23][0] = "SOAP (Simple Object access Protocol &oacute; Services-Oriented Architecture Protocol) es el protocolo de comunicaciones para los Servicios Web";
 choices[23][1] = "WSML (Web Service Markup Language) describe el interfaz externo de un Servicio Web y c&oacute;mo utilizarlo";
 choices[23][2] = "UDDI (Universal Discovery, Descripcion and Integration) es un protocolo para registros basados en web que contiene informaci&oacute;n acerca de servicios. Un registro UDDI es como el list&iacute;n de los servicios.";
 choices[23][3] = "Un Servicio Web se describe con un archivo WSDL, se registra en UDDI y se muestra en web a trav&eacute;s de SOAP.";
 answers[23] = choices[23][1];
 units[23] = "51";
 comments[23] = "Id Pregunta: 2924. Similar a examen TIC SS A 2003";


//  Id pregunta: 2969 Año de creación de pregunta: 2004-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguentes no son funciones de la CNMC seg&uacute;n la Ley 9/2014, General de Telecomunicaciones?";
 choices[24]= new Array();
 choices[24][0] = "Establecer, cuando proceda, las obligaciones espec&iacute;ficas que correspondan a los operadores con poder significativo en mercados de referencia.";
 choices[24][1] = "Realizar las funciones de arbitraje, tanto de derecho como de equidad, que le sean sometidas por los operadores de comunicaciones electr&oacute;nicas en aplicaci&oacute;n de la Ley 60/2003, de 23 de diciembre, de Arbitraje.";
 choices[24][2] = "Gesti&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[24][3] = "Fijar las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros en aplicaci&oacute;n de los aspectos t&eacute;cnicos y administrativos que mediante real decreto se establezcan para que &eacute;sta se lleve a cabo.";
 answers[24] = choices[24][2];
 units[24] = "110";
 comments[24] = "Id Pregunta: 2969. ";


//  Id pregunta: 2976 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  El estandar de IEEE 802.9 se correspond e con?";
 choices[25]= new Array();
 choices[25][0] = "fibra optica ";
 choices[25][1] = "voz y datos";
 choices[25][2] = "seguridad lan";
 choices[25][3] = "ninguna de las anteriores";
 answers[25] = choices[25][1];
 units[25] = "101";
 comments[25] = "Id Pregunta: 2976. Examen Julio 2003";


//  Id pregunta: 3000 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  LDAP ( Lightweght Directory Access Protocol):";
 choices[26]= new Array();
 choices[26][0] = "Surge como evoluci&oacute;n del protocolo DAP  (Directory Access Protocol). LDAP es un protocolo a nivel de aplicaci&oacute;n, por lo que tanto el cliente como el servidor deben implementar completamente la torre de protocolos OSI";
 choices[26][1] = "Surge como alternativa al DAP y utiliza TCP/IP en lugar de los protocolos OSI, lo cu&aacute;l es una ventaja ya que TCP/IP requiere menos recursos y est&aacute; m&aacute;s disponible, especialmente en ordenadores de sobremesa.";
 choices[26][2] = "Abandona el modelo cliente/servidor de implementaci&oacute;n, de modo que una aplicaci&oacute;n que desea acceder al directorio lo hace directamente contra la base de datos cuyo esquema est&aacute; disponible (ISO 9594)";
 choices[26][3] = "Es un servicio de directorio centralizado frente a los modelos distribuidos donde los datos podr&iacute;an estar fraccionados y/o replicados. As&iacute; pues con LDAP un &uacute;nico servidor da todo el servicio de directorio respondiendo a todas las consultas de los clientes";
 answers[26] = choices[26][1];
 units[26] = "106";
 comments[26] = "Id Pregunta: 3000. ";


//  Id pregunta: 3069 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  Indique la afirmaci&oacute;n incorrecta respecto al correo electr&oacute;nico:";
 choices[27]= new Array();
 choices[27][0] = "Los mensajes se pueden recibir aunque el equipo est&eacute; desconectado";
 choices[27][1] = "No es necesaria la conexi&oacute;n directa emisor-receptor";
 choices[27][2] = "No permite enviar fax";
 choices[27][3] = "Todos los sistemas de correo electr&oacute;nico que cumplan las recomendaciones X.400 de la ITU-T pueden interconectarse a trav&eacute;s de la mensajer&iacute;a p&uacute;blica";
 answers[27] = choices[27][2];
 units[27] = "106";
 comments[27] = "Id Pregunta: 3069. ";


//  Id pregunta: 3139 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de IPv6 es correcta?:";
 choices[28]= new Array();
 choices[28][0] = "Existe una cabecera principal y cabeceras de extensi&oacute;n";
 choices[28][1] = "La cabecera se ha complicado y ha crecido bastante, al tener que incorporar algunos elementos como la seguridad y el esquema de direccionamiento extendido. El tama&ntilde;o ahora es de 64 bytes frente a los 20 bytes de IPv4";
 choices[28][2] = "Las nuevas direcciones tienen 20 bytes";
 choices[28][3] = "Todas son incorrectas";
 answers[28] = choices[28][0];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3139. ";


//  Id pregunta: 3164 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas corresponde con el est&aacute;ndar GSM?:";
 choices[29]= new Array();
 choices[29][0] = "Soporta una amplia gama de servicios de transmisi&oacute;n de datos en todas las velocidades est&aacute;ndar hasta los 64 kbps";
 choices[29][1] = "Se basa en los principios de la Red Digital de Servicios Integrados";
 choices[29][2] = "La informaci&oacute;n referente a los abonados se encuentra en una &uacute;nica base de datos";
 choices[29][3] = "En su componente radio se utiliza la banda de los 900 Mhz con el m&eacute;todo DMA, que proporciona ocho canales telef&oacute;nicos en una misma portadora y una codificaci&oacute;n de voz a 64 kbps";
 answers[29] = choices[29][1];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3164. ";


//  Id pregunta: 3193 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Dentro del modelo OSI la funci&oacute;n de 'permitir a un usuario entrar en un sistema remoto a tiempo compartido, o transferir ficheros entre dos m&aacute;quinas', corresponde al nivel:";
 choices[30]= new Array();
 choices[30][0] = "Nivel de red";
 choices[30][1] = "Nivel de transporte";
 choices[30][2] = "Nivel de sesi&oacute;n";
 choices[30][3] = "Nivel de presentaci&oacute;n";
 answers[30] = choices[30][2];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3193. ";


//  Id pregunta: 3214 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  El est&aacute;ndar 100Base-FX corresponde a:";
 choices[31]= new Array();
 choices[31][0] = "Ethernet con un par extra de hilos";
 choices[31][1] = "Fast Ethernet con cables de fibra &oacute;ptica";
 choices[31][2] = "Fast Ethernet con cableado de par trenzado";
 choices[31][3] = "Ninguno de los anteriores";
 answers[31] = choices[31][1];
 units[31] = "97";
 comments[31] = "Id Pregunta: 3214. ";


//  Id pregunta: 3286 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Qu&eacute; es la MTU en un paquete IP?:";
 choices[32]= new Array();
 choices[32][0] = "El m&aacute;ximo uso de transmisi&oacute;n";
 choices[32][1] = "La mayor unidad posible de datos que puede ser enviada a trav&eacute;s de un medio f&iacute;sico";
 choices[32][2] = "El tama&ntilde;o del paquete IP";
 choices[32][3] = "Solo se utiliza en IPv6";
 answers[32] = choices[32][1];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3286. ";


//  Id pregunta: 3455 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  El protocolo OSPF:";
 choices[33]= new Array();
 choices[33][0] = "Es un protocolo de encaminamiento como el RIP";
 choices[33][1] = "Significa 'Open Systems Protocol Family'";
 choices[33][2] = "No usa el algoritmo tipo de estados de enlaces (link-state) para encaminar los datagramas";
 choices[33][3] = "Se describe en la RFC942 (Request for Comments)";
 answers[33] = choices[33][0];
 units[33] = "102";
 comments[33] = "Id Pregunta: 3455. ";


//  Id pregunta: 3559 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  En Token Ring , un monitor activo:";
 choices[34]= new Array();
 choices[34][0] = "Transmite mensajes de monitorizaci&oacute;n a cada servidor en el anillo para facilitar el balance de carga entre ellos";
 choices[34][1] = "Espera por los mensajes de error, entonces env&iacute;a mensajes de notificaci&oacute;n para limitar (o reordenar) el tr&aacute;fico";
 choices[34][2] = "Escucha la prioridad del testigo y cuando se detecta, reserva la prioridad para la estaci&oacute;n emisora";
 choices[34][3] = "Elimina las tramas no recogidas y es el punto central de informaci&oacute;n de 'timing' para un anillo";
 answers[34] = choices[34][3];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3559. ";


//  Id pregunta: 3625 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  La normativa referente a la Red Digital de Servicios Integrados para el uso por el usuario de los canales de 64 kbps, &iquest;a qu&eacute; nivel del modelo de referencia OSI corresponder&iacute;a?:";
 choices[35]= new Array();
 choices[35][0] = "Al nivel 8 : Administraci&oacute;n";
 choices[35][1] = "Al nivel 1 : F&iacute;sico";
 choices[35][2] = "Al nivel 3 : Red";
 choices[35][3] = "Al nivel 5 : Enlace";
 answers[35] = choices[35][1];
 units[35] = "102,104,109";
 comments[35] = "Id Pregunta: 3625. ";


//  Id pregunta: 3677 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Una red de conmutaci&oacute;n de paquetes trabaja en modo datagrama cuando:";
 choices[36]= new Array();
 choices[36][0] = "La transmisi&oacute;n de paquetes no es orientada a la conexi&oacute;n";
 choices[36][1] = "Se establecen circuitos virtuales entre origen y destino";
 choices[36][2] = "Se establecen circuitos f&iacute;sicos entre origen y destino";
 choices[36][3] = "Los mensajes se dividen en paquetes de longitud fija para su env&iacute;o";
 answers[36] = choices[36][0];
 units[36] = "101";
 comments[36] = "Id Pregunta: 3677. ";


//  Id pregunta: 3800 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  S/MIME utiliza los siguientes algoritmos de  firma:";
 choices[37]= new Array();
 choices[37][0] = "RC2";
 choices[37][1] = "MD5";
 choices[37][2] = "RSA";
 choices[37][3] = "todos los anteriores";
 answers[37] = choices[37][3];
 units[37] = "111";
 comments[37] = "Id Pregunta: 3800. ";


//  Id pregunta: 3835 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  SIP es:";
 choices[38]= new Array();
 choices[38][0] = "Particularizaci&oacute;n de GOSIP (Government OSI Profile) m&aacute;s ligera";
 choices[38][1] = "Un tipo de mensaje de H.323 para videotelefon&iacute;a";
 choices[38][2] = "Un protocolo de paquetizaci&oacute;n de voz que se ejecuta en los mediagateways";
 choices[38][3] = "Protocolo de voz sobre IP del IETF";
 answers[38] = choices[38][3];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3835. ";


//  Id pregunta: 4011 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  La recomendaci&oacute;n ITU-T X-500 tambi&eacute;n se conoce como:";
 choices[39]= new Array();
 choices[39][0] = "ISO/IEC 9459";
 choices[39][1] = "ISO/IEC 9549";
 choices[39][2] = "ISO/IEC 9594";
 choices[39][3] = "ISO/IEC 9495";
 answers[39] = choices[39][2];
 units[39] = "106";
 comments[39] = "Id Pregunta: 4011. ";


//  Id pregunta: 4101 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[40]= new Array();
 choices[40][0] = "World Wide Web es un servicio b&aacute;sico de Internet";
 choices[40][1] = "World Wide Web es un servicio que utiliza el lenguaje HTML basado a su vez en  SGML.";
 choices[40][2] = "a) y b) son correctas";
 choices[40][3] = "a) y b) son incorrectas";
 answers[40] = choices[40][2];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4101. ";


//  Id pregunta: 4123 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  Cuando sincronizamos datos entre una PDA bluetooth y el PC usamos una red";
 choices[41]= new Array();
 choices[41][0] = "LAN";
 choices[41][1] = "PAN";
 choices[41][2] = "NAS";
 choices[41][3] = "MAN";
 answers[41] = choices[41][1];
 units[41] = "107";
 comments[41] = "Id Pregunta: 4123. ";


//  Id pregunta: 4281 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  Los sistemas conocidos como OLTP son utilizados para:";
 choices[42]= new Array();
 choices[42][0] = "Hacer consultas complejas sobre distintas Bases de Datos que se han consolidado en una central.";
 choices[42][1] = "Poder realizar informes a la Direcci&oacute;n.";
 choices[42][2] = "Son sistemas t&iacute;picamente utilizados como Sistemas de Informaci&oacute;n Geogr&aacute;fica.";
 choices[42][3] = "Captura de datos a partir de las operaciones diarias de una organizaci&oacute;n.";
 answers[42] = choices[42][3];
 units[42] = "68";
 comments[42] = "Id Pregunta: 4281. ";


//  Id pregunta: 4284 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre las estructuras de datos no es correcta?";
 choices[43]= new Array();
 choices[43][0] = "Una estructura de datos es un conjunto de variables de determinado tipo, agrupadas y organizadas para representar un comportamiento";
 choices[43][1] = "En general, la elecci&oacute;n del algoritmo y de las estructuras de datos que manipular&aacute; no tienen mucha relaci&oacute;n (bajo acoplamiento).";
 choices[43][2] = "Con las estructuras de datos se pretende facilitar un esquema l&oacute;gico para manipular los datos en funci&oacute;n del problema a resolver.";
 choices[43][3] = "Las estructuras de datos pueden ser est&aacute;ticas y din&aacute;micas.";
 answers[43] = choices[43][1];
 units[43] = "79";
 comments[43] = "Id Pregunta: 4284. ";


//  Id pregunta: 4359 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[44]= new Array();
 choices[44][0] = "Homogeneidad de datos almacenados.";
 choices[44][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[44][2] = "Total organizaci&oacute;n.";
 choices[44][3] = "Facilidad para responder a consultas complejas.";
 answers[44] = choices[44][1];
 units[44] = "68";
 comments[44] = "Id Pregunta: 4359. ";


//  Id pregunta: 4379 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  En el an&aacute;lisis y dise&ntilde;o de software, el flujo de transacci&oacute;n es una t&eacute;cnica de:";
 choices[45]= new Array();
 choices[45][0] = "Refinamiento progresivo.";
 choices[45][1] = "Descomposici&oacute;n modular.";
 choices[45][2] = "An&aacute;lisis estructurado.";
 choices[45][3] = "Dise&ntilde;o estructurado.";
 answers[45] = choices[45][3];
 units[45] = "83";
 comments[45] = "Id Pregunta: 4379. ";


//  Id pregunta: 4496 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  Metacity";
 choices[46]= new Array();
 choices[46][0] = "Es el gestor de eventos de GNOME 2";
 choices[46][1] = "Es el gestor de ventanas de GNOME 2";
 choices[46][2] = "Es el gestor de eventos de KDE";
 choices[46][3] = "Es el gestor de eventos de MOLINUX";
 answers[46] = choices[46][1];
 units[46] = "54";
 comments[46] = "Id Pregunta: 4496. ";


//  Id pregunta: 4618 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  En UNIX SVR4 para ejecutar una instrucci&oacute;n en segundo plano, escribimos Ia instrucci&oacute;n, un espacio en blanco y a continuaci&oacute;n el s&iacute;mbolo:";
 choices[47]= new Array();
 choices[47][0] = "!";
 choices[47][1] = "&amp;";
 choices[47][2] = "#";
 choices[47][3] = "@";
 answers[47] = choices[47][1];
 units[47] = "53";
 comments[47] = "Id Pregunta: 4618. ";


//  Id pregunta: 4650 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  En los sistemas de radiocomunicaci&oacute;n, el concepto de PIRE es:";
 choices[48]= new Array();
 choices[48][0] = "La ganancla de la antena";
 choices[48][1] = "La potencla interna del elemento radlante";
 choices[48][2] = "el producto de la potencla suministrada por La antena por La ganancla isot&oacute;pica de esta";
 choices[48][3] = "la probabilidad de interferencla debida a La reflexi&oacute;n de la se&ntilde;al emitida.";
 answers[48] = choices[48][2];
 units[48] = "";
 comments[48] = "Id Pregunta: 4650. ";


//  Id pregunta: 4795 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) yUDP (User Datagram Protocol) es cierta?";
 choices[49]= new Array();
 choices[49][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores";
 choices[49][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos";
 choices[49][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP(Internet Protocol), que es un protocolo de red no fiable";
 choices[49][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite";
 answers[49] = choices[49][3];
 units[49] = "100";
 comments[49] = "Id Pregunta: 4795. ";


//  Id pregunta: 4823 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, &iquest;c&oacute;mo se punt&uacute;a el subcriterio 9b, &quot;Indicadores Clave del Rendimiento de la Organizaci&oacute;n&quot;, en el proceso de autoevaluaci&oacute;n?";
 choices[50]= new Array();
 choices[50][0] = "Entre 0 y 100 y se multiplica por 0,50";
 choices[50][1] = "Entre 0 y 100 y se multiplica por 0,25";
 choices[50][2] = "Entre 0 y 50 y se multiplica por 0,50";
 choices[50][3] = "Entre 0 y 50 y se multiplica por 0,25";
 answers[50] = choices[50][0];
 units[50] = "92";
 comments[50] = "Id Pregunta: 4823. ";


//  Id pregunta: 4824 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes direcciones IP de host pertenece a cualquiera de los rangos de direcciones IP p&uacute;blicas?";
 choices[51]= new Array();
 choices[51][0] = "10.172.13.65";
 choices[51][1] = "172.16.223.125";
 choices[51][2] = "172.64.12.29";
 choices[51][3] = "192.168.23.252";
 answers[51] = choices[51][2];
 units[51] = "100";
 comments[51] = "Id Pregunta: 4824. ";


//  Id pregunta: 4871 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes NO es un diagrama UML (Unified Modeling Language)?";
 choices[52]= new Array();
 choices[52][0] = "Diagrama de actividades";
 choices[52][1] = "Diagrama de clases";
 choices[52][2] = "Diagrama de secuencia";
 choices[52][3] = "Diagrama de frecuencia";
 answers[52] = choices[52][3];
 units[52] = "82";
 comments[52] = "Id Pregunta: 4871. ";


//  Id pregunta: 5007 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones &iquest;Cada cuanto tiempo, la Comisi&oacute;n del Mercado de las Telecomunicaciones llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos?:";
 choices[53]= new Array();
 choices[53][0] = "En un plazo m&aacute;ximo de tres a&ntilde;os contado desde la adopci&oacute;n de una medida anterior relativa a ese mercado";
 choices[53][1] = "En el plazo m&aacute;ximo de dos a&ntilde;os desde la adopci&oacute;n de una recomendaci&oacute;n sobre mercados relevantes revisada, para los mercados no notificados previamente a la Comisi&oacute;n Europea";
 choices[53][2] = "Las dos anteriores son ciertas";
 choices[53][3] = "Todas las anteriores son falsas";
 answers[53] = choices[53][2];
 units[53] = "110";
 comments[53] = "Id Pregunta: 5007. Examen TIC A 2007. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 5066 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  GNOME es un entorno de escritorio libre para sistemas operativos libres. Seleccione la afirmaci&oacute;n correcta sobre &eacute;l:";
 choices[54]= new Array();
 choices[54][0] = "Ha sido la base sobre la cual se ha desarrollado el c&oacute;digo de la interfaz gr&aacute;fica de Windows VISTA";
 choices[54][1] = "Desde sus or&iacute;genes ha utilizado la biblioteca de controles gr&aacute;ficos GTK";
 choices[54][2] = "Cada vez que se a&ntilde;ade un icono al escritorio requiere que se recompile el Kernel";
 choices[54][3] = "Solamente admite una profundidad de color de 8 bits";
 answers[54] = choices[54][1];
 units[54] = "54";
 comments[54] = "Id Pregunta: 5066. Examen TIC A 2007";


//  Id pregunta: 5187 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Con respecto a los diccionarios de datos:";
 choices[55]= new Array();
 choices[55][0] = "Los diccionarios Activos permiten que los programadores puedan definir datos dentro sus programas y que estos no est&eacute;n en el diccionario.";
 choices[55][1] = "Los diccionarios Pasivos fuerzan a los programadores a utilizar las definiciones del diccionario.";
 choices[55][2] = "A y B son ciertas";
 choices[55][3] = "A y B son falsas";
 answers[55] = choices[55][3];
 units[55] = "81";
 comments[55] = "Id Pregunta: 5187. ";


//  Id pregunta: 5482 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Firmar un mensaje electr&oacute;nico";
 choices[56]= new Array();
 choices[56][0] = "Es lo mismo que cifrarlo";
 choices[56][1] = "Garantiza la confidencialidad";
 choices[56][2] = "Es lo mismo que codificarlo";
 choices[56][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[56] = choices[56][3];
 units[56] = "72";
 comments[56] = "Id Pregunta: 5482. Castilla y Le&oacute;n";


//  Id pregunta: 5705 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; asociado a los servicios web?";
 choices[57]= new Array();
 choices[57][0] = "SOAP";
 choices[57][1] = " UDDI";
 choices[57][2] = "CORBA";
 choices[57][3] = "HTTP";
 answers[57] = choices[57][2];
 units[57] = "51";
 comments[57] = "Id Pregunta: 5705. ";


//  Id pregunta: 5790 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  Seg&uacute;n el RD 589/2005, indique el alcance que han de tener los planes estrat&eacute;gicos departamentales en materias de tecnolog&iacute;as de la informaci&oacute;n y administraci&oacute;n electr&oacute;nica";
 choices[58]= new Array();
 choices[58][0] = "al menos 4 a&ntilde;os";
 choices[58][1] = "al menos 2 a&ntilde;os";
 choices[58][2] = "al menos 5 a&ntilde;os";
 choices[58][3] = "al menos 3 a&ntilde;os";
 answers[58] = choices[58][1];
 units[58] = "30";
 comments[58] = "Id Pregunta: 5790. MAP 2008 A1";


//  Id pregunta: 5858 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Qu&eacute; comando crea enlaces simb&oacute;licos en UNIX?";
 choices[59]= new Array();
 choices[59][0] = "ln";
 choices[59][1] = "mkdir";
 choices[59][2] = "ls";
 choices[59][3] = "mv";
 answers[59] = choices[59][0];
 units[59] = "53";
 comments[59] = "Id Pregunta: 5858. Pregunta 38";


//  Id pregunta: 5886 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  El m&eacute;todo de Saaty &oacute; AHP:";
 choices[60]= new Array();
 choices[60][0] = "Es relativo a accesibilidad web";
 choices[60][1] = "Es relativo a la decisi&oacute;n multicriterio";
 choices[60][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n";
 choices[60][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo";
 answers[60] = choices[60][1];
 units[60] = "34";
 comments[60] = "Id Pregunta: 5886. MAP 2008 A1";


//  Id pregunta: 5966 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  Seg&uacute;n CMMI, todos los elementos que influyen en la construcci&oacute;n del producto son:";
 choices[61]= new Array();
 choices[61][0] = "El procedimiento, la tecnolog&iacute;a, la direcci&oacute;n y las personas";
 choices[61][1] = "El proceso, la tecnolog&iacute;a y las personas";
 choices[61][2] = "El procedimiento, el proceso, la tecnolog&iacute;a y las personas";
 choices[61][3] = "El proceso y el procedimiento";
 answers[61] = choices[61][1];
 units[61] = "87";
 comments[61] = "Id Pregunta: 5966. Castilla La Mancha 2009";


//  Id pregunta: 6096 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes NO es un principio b&aacute;sico de todo modelo orientado a objetos seg&uacute;n Booch?";
 choices[62]= new Array();
 choices[62][0] = "Distribuci&oacute;n.";
 choices[62][1] = "Abstracci&oacute;n.";
 choices[62][2] = "Encapsulaci&oacute;n.";
 choices[62][3] = "Modularidad.";
 answers[62] = choices[62][0];
 units[62] = "82";
 comments[62] = "Id Pregunta: 6096. TIC A 2009";


//  Id pregunta: 6118 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Con respecto a BPEL (Business Process Execution Language):";
 choices[63]= new Array();
 choices[63][0] = "Es un lenguaje de coreogr&aacute;fico, no de orquestaci&oacute;n.";
 choices[63][1] = "Es un lenguaje de orquestaci&oacute;n, no un lenguaje coreogr&aacute;fico.";
 choices[63][2] = "Fue creado por WfMC.";
 choices[63][3] = "Es un lenguaje de orquestaci&oacute;n y coreogr&aacute;fico creado por OASIS.";
 answers[63] = choices[63][1];
 units[63] = "51";
 comments[63] = "Id Pregunta: 6118. ";


//  Id pregunta: 6121 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  Con respecto a la orquestaci&oacute;n y coreograf&iacute;a de servicios, se&ntilde;ale la respuesta correcta:";
 choices[64]= new Array();
 choices[64][0] = "Un proceso se puede considerar una orquestaci&oacute;n de servicios cuando es controlado totalmente por una &uacute;nica entidad.";
 choices[64][1] = "Un proceso es una coreograf&iacute;a de servicios cuando define las colaboraciones entre cualquier tipo de aplicaciones componentes, independientemente del lenguaje o plataforma en el que est&eacute;n definidas las mismas.";
 choices[64][2] = "A y B son correctas.";
 choices[64][3] = "A y B son incorrectas.";
 answers[64] = choices[64][2];
 units[64] = "51";
 comments[64] = "Id Pregunta: 6121. ";


//  Id pregunta: 6130 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Cuando puntuamos criterios de diferentes alternativas y nos referimos al umbral de saciedad, entendemos por tal:";
 choices[65]= new Array();
 choices[65][0] = "El valor que debe cumplir la puntuaci&oacute;n de un criterio para ser considerado aceptable. por tanto es el m&iacute;nimo exigido.";
 choices[65][1] = "El valor de un criterio a partir del cual no se obtiene una utilidad adicional, por lo que su exceso no es tenido en cuenta.";
 choices[65][2] = "Un valor ordinal definido por el evaluador conforme a una escala subjetiva.";
 choices[65][3] = "Un m&eacute;todo de limitaci&oacute;n de la asignaci&oacute;n de puntuaciones mediante entrop&iacute;a. Se dice entonces que el criterio est&aacute; saciado.";
 answers[65] = choices[65][1];
 units[65] = "34";
 comments[65] = "Id Pregunta: 6130. TIC A 2009";


//  Id pregunta: 6154 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;ntas versiones de NFS hay actualmente en uso?";
 choices[66]= new Array();
 choices[66][0] = "Tres: NFSv2, NFSv3 y NFSv4.";
 choices[66][1] = "Dos: NFSv3 y NFSv4.";
 choices[66][2] = "Tres: NFSv3, NFSv4 y NFSv5.";
 choices[66][3] = "Tres: NFSv1, NFSv2 y NFSv3.";
 answers[66] = choices[66][0];
 units[66] = "112";
 comments[66] = "Id Pregunta: 6154. ";


//  Id pregunta: 6347 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el podcasting es cierta?";
 choices[67]= new Array();
 choices[67][0] = "Podcasting es la distribuci&oacute;n de archivos multimedia (normalmente audio o v&iacute;deo) mediante un sistema de sindicaci&oacute;n que permita suscribirse y usar un programa que lo descarga para que el usuario lo escuche en el momento que quiera.";
 choices[67][1] = "Habitualmente, no es necesario estar suscrito para descargar un podcast";
 choices[67][2] = "En Internet podemos encontrar todo tipo de podcast de todo tipo de tem&aacute;ticas";
 choices[67][3] = "Todas las anteriores son ciertas";
 answers[67] = choices[67][3];
 units[67] = "120";
 comments[67] = "Id Pregunta: 6347. ";


//  Id pregunta: 6444 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  ETSI NO publica:";
 choices[68]= new Array();
 choices[68][0] = "Normas europeas";
 choices[68][1] = "Normas espa&ntilde;olas";
 choices[68][2] = "Normas armonizadas";
 choices[68][3] = "Publica todas las anteriores";
 answers[68] = choices[68][1];
 units[68] = "42";
 comments[68] = "Id Pregunta: 6444. Similar a Castilla La Mancha 2009";


//  Id pregunta: 6491 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Respecto a los servicios de directorio se puede afirmar que:";
 choices[69]= new Array();
 choices[69][0] = "LDAP define el modelo completo de servicio de directorio";
 choices[69][1] = "X.500 es un protocolo de acceso a un servicio de directorio LDAP";
 choices[69][2] = "LDAP es un protocolo de acceso a servicios de directorio X.500";
 choices[69][3] = "Ninguna de las anteriores es correcta";
 answers[69] = choices[69][2];
 units[69] = "74";
 comments[69] = "Id Pregunta: 6491. Castilla La Mancha 2009";


//  Id pregunta: 6553 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  PKCS#7 se centra en";
 choices[70]= new Array();
 choices[70][0] = "El formato del sobre digital";
 choices[70][1] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 choices[70][2] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[70][3] = "Todas las respuestas anteriores son correctas";
 answers[70] = choices[70][0];
 units[70] = "74";
 comments[70] = "Id Pregunta: 6553. ";


//  Id pregunta: 7153 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Para crear discos virtuales se utiliza tecnolog&iacute;a RAID se&ntilde;ale la opci&oacute;n falsa:";
 choices[71]= new Array();
 choices[71][0] = "El RAID 0 aporta mayor disponibilidad que el RAID  1";
 choices[71][1] = "El RAID  1 cuenta con una configuraci&oacute;n de discos en espejo";
 choices[71][2] = "El coste de RAID 1 es mayor que el de RAID 5.";
 choices[71][3] = "El RAID 5 usa divisi&oacute;n de datos a nivel de bloques distribuyendo la informaci&oacute;n de paridad entre todos los discos miembros del conjunto";
 answers[71] = choices[71][0];
 units[71] = "48";
 comments[71] = "Id Pregunta: 7153. Examen TIC B 2009";


//  Id pregunta: 7278 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  VMWare es un software de virtualiaci&oacute;n de ";
 choices[72]= new Array();
 choices[72][0] = "Sistema operativo";
 choices[72][1] = "Red";
 choices[72][2] = "Paravirtualizaci&oacute;n";
 choices[72][3] = "Hardware";
 answers[72] = choices[72][3];
 units[72] = "119";
 comments[72] = "Id Pregunta: 7278. ";


//  Id pregunta: 7323 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar utilizado para el intercambio de datos relativos al comercio electr&oacute;nico?";
 choices[73]= new Array();
 choices[73][0] = "EDIFACT";
 choices[73][1] = "ebXML";
 choices[73][2] = "XMT ";
 choices[73][3] = "UBL";
 answers[73] = choices[73][2];
 units[73] = "70";
 comments[73] = "Id Pregunta: 7323. ";


//  Id pregunta: 7764 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   Indique cu&aacute;l de las siguientes alternativas corresponde a las gu&iacute;as o manuales que componen la publicaci&oacute;n oficial de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3:";
 choices[74]= new Array();
 choices[74][0] = " Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Procedimientos y Herramientas.";
 choices[74][1] = " Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Gu&iacute;a de Procedimientos y Mecanismos.";
 choices[74][2] = " Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Interfaces, T&eacute;cnicas y Pr&aacute;cticas.";
 choices[74][3] = " Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, la Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7764. Map 2005";


//  Id pregunta: 7791 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[75]= new Array();
 choices[75][0] = " XPG4 Base.";
 choices[75][1] = " XPG4 Commands and Utilities.";
 choices[75][2] = " XPG4 Language.";
 choices[75][3] = " XPG4 Internationalised System Calls and Libraries.";
 answers[75] = choices[75][2];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 7791. Map 2005";


//  Id pregunta: 7809 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)   Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos:";
 choices[76]= new Array();
 choices[76][0] = " Tienen una validez de cinco a&ntilde;os como m&aacute;ximo.";
 choices[76][1] = " Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo.";
 choices[76][2] = " Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante.";
 choices[76][3] = " Confieren, por s&iacute; mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita.";
 answers[76] = choices[76][1];
 units[76] = "NULL";
 comments[76] = "Id Pregunta: 7809. Map 2005";


//  Id pregunta: 7882 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)   El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y se aplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itinerancia de clientes es el:";
 choices[77]= new Array();
 choices[77][0] = " 802.11e.";
 choices[77][1] = " 802.11f.";
 choices[77][2] = " 802.11h.";
 choices[77][3] = " 802.11i.";
 answers[77] = choices[77][1];
 units[77] = "NULL";
 comments[77] = "Id Pregunta: 7882. Map 2006";


//  Id pregunta: 7929 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)   &iquest;Cu&aacute;l de los siguientes productos NO es resultado del proceso &laquo;Implantaci&oacute;n y Aceptaci&oacute;n del Sistema&raquo; (IAS) de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[78]= new Array();
 choices[78][0] = " Evaluaci&oacute;n del Resultado de las Pruebas de Integraci&oacute;n.";
 choices[78][1] = " Evaluaci&oacute;n del Resultado de las Pruebas de Implantaci&oacute;n.";
 choices[78][2] = " Acuerdo de Nivel de Servicio.";
 choices[78][3] = " Plan de Mantenimiento.";
 answers[78] = choices[78][0];
 units[78] = "NULL";
 comments[78] = "Id Pregunta: 7929. Map 2006";


//  Id pregunta: 8107 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)   &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con M&Eacute;TRICA v.3 es FALSA?";
 choices[79]= new Array();
 choices[79][0] = " Cubre distintos tipos de desarrollo: &laquo;estructurado&raquo; y &laquo;orientado a objetos&raquo;.";
 choices[79][1] = " En su estructura se distinguen tres procesos principales.";
 choices[79][2] = " Se incluyen Interfaces para aspectos de gesti&oacute;n.";
 choices[79][3] = " El proceso de desarrollo de Sistemas de Informaci&oacute;n se divide en cuatro procesos: &laquo;an&aacute;lisis&raquo;, &laquo;dise&ntilde;o&raquo;, &laquo;construcci&oacute;n&raquo;, e &laquo;implantaci&oacute;n y aceptaci&oacute;n&raquo; del sistema.";
 answers[79] = choices[79][3];
 units[79] = "NULL";
 comments[79] = "Id Pregunta: 8107. Map 2008";


//  Id pregunta: 8263 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  Seg&uacute;n Lientz y Swanson y a diferencia de M&Eacute;TRICA versi&oacute;n 3, entre los 4 tipos de mantenimiento de sistemas de informaci&oacute;n, se encuentra:";
 choices[80]= new Array();
 choices[80][0] = "Mantenimiento preventivo.";
 choices[80][1] = "Mantenimiento perfectivo.";
 choices[80][2] = "Mantenimiento adaptativo.";
 choices[80][3] = "Mantenimiento correctivo.";
 answers[80] = choices[80][0];
 units[80] = "86";
 comments[80] = "Id Pregunta: 8263. Examen TIC A1 2010";


//  Id pregunta: 8395 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO es una t&eacute;cnica empleada en Miner&iacute;a de Datos?";
 choices[81]= new Array();
 choices[81][0] = "Las redes neuronales.";
 choices[81][1] = "Look and Find.";
 choices[81][2] = "Los &aacute;rboles de decisi&oacute;n.";
 choices[81][3] = "Las redes bayesianas.";
 answers[81] = choices[81][1];
 units[81] = "71";
 comments[81] = "Id Pregunta: 8395. Examen TIC A2 2010";


//  Id pregunta: 8475 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  El est&aacute;ndar IEEE 802.16 hace referencia a:";
 choices[82]= new Array();
 choices[82][0] = "Bluetooth.";
 choices[82][1] = "Wi-Fi.";
 choices[82][2] = "Wimax.";
 choices[82][3] = "Wireless LAN.";
 answers[82] = choices[82][2];
 units[82] = "107";
 comments[82] = "Id Pregunta: 8475. Examen TIC A2 2010 interna";


//  Id pregunta: 8516 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[83]= new Array();
 choices[83][0] = "Diagrama de Clases.";
 choices[83][1] = "Flujograma de Sistemas.";
 choices[83][2] = "Flujograma de Programas.";
 choices[83][3] = "Diagrama de Flujo de Datos.";
 answers[83] = choices[83][2];
 units[83] = "86";
 comments[83] = "Id Pregunta: 8516. Examen TIC A2 2010 interna";


//  Id pregunta: 8615 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  En un entorno controlado de sistemas de informaci&oacute;n, la tarea de administraci&oacute;n de base de datos NO deber&iacute;a compatibilizarse con la de:";
 choices[84]= new Array();
 choices[84][0] = "Administraci&oacute;n de seguridad";
 choices[84][1] = "Programaci&oacute;n de aplicaciones";
 choices[84][2] = "Gesti&oacute;n de librer&iacute;as de cintas";
 choices[84][3] = "Aseguramiento de la calidad";
 answers[84] = choices[84][1];
 units[84] = "26";
 comments[84] = "Id Pregunta: 8615. Examen TIC A2 2010 interna";


//  Id pregunta: 8671 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Con respecto a los est&aacute;ndares de redes inal&aacute;mbricas &iquest;cu&aacute;l de las siguientes combinaciones es correcta?";
 choices[85]= new Array();
 choices[85][0] = "802.1la-2.4Ghz";
 choices[85][1] = "802.11b -2.4Ghz";
 choices[85][2] = "802.1lg-5Ghz";
 choices[85][3] = "802.1lx-2.4Ghz";
 answers[85] = choices[85][1];
 units[85] = "107";
 comments[85] = "Id Pregunta: 8671. Examen UPM A2 2011";


//  Id pregunta: 9030 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes no es un mapeador objeto-relacional?";
 choices[86]= new Array();
 choices[86][0] = "Postgress";
 choices[86][1] = "Hibernate";
 choices[86][2] = "TopLink";
 choices[86][3] = "Ibatis";
 answers[86] = choices[86][0];
 units[86] = "116";
 comments[86] = "Id Pregunta: 9030. ";


//  Id pregunta: 9033 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Cu&aacute;l es un gestor de contenidos";
 choices[87]= new Array();
 choices[87][0] = "Microsoft Sharepoint";
 choices[87][1] = "Apache";
 choices[87][2] = "TopLink";
 choices[87][3] = "Microsoft Biztalk";
 answers[87] = choices[87][0];
 units[87] = "95";
 comments[87] = "Id Pregunta: 9033. ";


//  Id pregunta: 9239 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  &iquest;Qu&eacute; hace ifconfig -a?";
 choices[88]= new Array();
 choices[88][0] = "Instala Ubuntu sobre Windows.";
 choices[88][1] = "Muestra informaci&oacute;n sobre los diversos interfaces de red.";
 choices[88][2] = "Inicia la interfaz de red eth0.";
 choices[88][3] = "Detiene las interfaces de red.";
 answers[88] = choices[88][1];
 units[88] = "53";
 comments[88] = "Id Pregunta: 9239. ";


//  Id pregunta: 9274 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido.";
 choices[89]= new Array();
 choices[89][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos";
 choices[89][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[89][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[89][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[89] = choices[89][3];
 units[89] = "53";
 comments[89] = "Id Pregunta: 9274. Examen TIC-A1 2011";


//  Id pregunta: 9289 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es la norma de creaci&oacute;n de AENOR?";
 choices[90]= new Array();
 choices[90][0] = "El RD 2200/1995.";
 choices[90][1] = "El RD 757/1986.";
 choices[90][2] = "La Ley 5/1985.";
 choices[90][3] = "Ninguna, pues no es un organismo p&uacute;blico. ";
 answers[90] = choices[90][3];
 units[90] = "42";
 comments[90] = "Id Pregunta: 9289. ";


//  Id pregunta: 9315 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es el &oacute;rgano especializado en el control interno y en la evaluaci&oacute;n de los servicios de cada uno de los Ministerios y de sus organismos p&uacute;blicos dependientes?";
 choices[91]= new Array();
 choices[91][0] = "La IGAE";
 choices[91][1] = "La Inspecci&oacute;n General de los Servicios de cada Ministerio";
 choices[91][2] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[91][3] = "La Agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios";
 answers[91] = choices[91][1];
 units[91] = "31";
 comments[91] = "Id Pregunta: 9315. ";


//  Id pregunta: 9387 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  Se&ntilde;ale la respuesta correcta acerca de LTE:";
 choices[92]= new Array();
 choices[92][0] = "El HSS (Home Subscriber Server) es una base de datos distribuida que contiene informaci&oacute;n de los usuarios, sin entrar en funciones de Autenticaci&oacute;n, funci&oacute;n que lleva a cabo el eAUC.";
 choices[92][1] = "El Serving Gateway (SGW) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[92][2] = "El PGW (PDN Gateway) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[92][3] = "El MME (Mobility Management Entity) es un elemento responsable del control de la estaci&oacute;n base, siendo el interfaz a la red conmutada de LTE";
 answers[92] = choices[92][1];
 units[92] = "108";
 comments[92] = "Id Pregunta: 9387. ";


//  Id pregunta: 9415 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  Cu&aacute;l de las siguientes no es una m&eacute;trica de l&iacute;neas de c&oacute;digo";
 choices[93]= new Array();
 choices[93][0] = "LOC";
 choices[93][1] = "DSI";
 choices[93][2] = "NSLOC";
 choices[93][3] = "LDSI";
 answers[93] = choices[93][3];
 units[93] = "89";
 comments[93] = "Id Pregunta: 9415. ";


//  Id pregunta: 9476 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes factores de riesgo del an&aacute;lisis de rentabilidad de un proyecto no se considera en el Sector P&uacute;blico?";
 choices[94]= new Array();
 choices[94][0] = "Autoridad limitada para la toma de decisiones";
 choices[94][1] = "Presupuestos plurianuales en todos los casos";
 choices[94][2] = "M&uacute;ltiples actores involucrados";
 choices[94][3] = "Coordinaci&oacute;n entre organismos";
 answers[94] = choices[94][1];
 units[94] = "38";
 comments[94] = "Id Pregunta: 9476. ";


//  Id pregunta: 9759 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[95]= new Array();
 choices[95][0] = "Reponen";
 choices[95][1] = "Reajustan";
 choices[95][2] = "Devuelven o cancelan";
 choices[95][3] = "Todas las anteriores";
 answers[95] = choices[95][3];
 units[95] = "41";
 comments[95] = "Id Pregunta: 9759. Art. 99, Art. 102 RD Legislativo 3/2011";


//  Id pregunta: 10112 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  El est&aacute;ndar para definici&oacute;n de VLAN es:";
 choices[96]= new Array();
 choices[96][0] = "IEEE 802.1D";
 choices[96][1] = "IEEE 802.1P";
 choices[96][2] = "IEEE 802.1Q";
 choices[96][3] = "IEEE 802.2";
 answers[96] = choices[96][2];
 units[96] = "101";
 comments[96] = "Id Pregunta: 10112. ";


//  Id pregunta: 10116 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Respecto al protocolo Spanning Tree Protocol , es falso que:";
 choices[97]= new Array();
 choices[97][0] = "Se usa para definir caminos &uacute;nicos en la red de Nivel 2";
 choices[97][1] = "Permite realizar encaminamiento entre nodos";
 choices[97][2] = "Evita bucles en la red.";
 choices[97][3] = "Converge m&aacute;s lentamente que RSTP";
 answers[97] = choices[97][1];
 units[97] = "101";
 comments[97] = "Id Pregunta: 10116. Es de nivel 2";


//  Id pregunta: 10150 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En cumplimiento de la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones:";
 choices[98]= new Array();
 choices[98][0] = "Los operadores deben conservar el contenido de las comunicaciones";
 choices[98][1] = "El deber de conservaci&oacute;n se extiende a los datos relativos a las llamadas infructuosas";
 choices[98][2] = "La obligaci&oacute;n de conservaci&oacute;n de datos impuesta cesa a los cuatro meses computados desde la fecha en que se haya producido la comunicaci&oacute;n";
 choices[98][3] = "El plazo de ejecuci&oacute;n de la orden de cesi&oacute;n ser&aacute; el fijado por la resoluci&oacute;n judicial. Si no se establece otro plazo distinto, la cesi&oacute;n deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 answers[98] = choices[98][1];
 units[98] = "30";
 comments[98] = "Id Pregunta: 10150. ";


//  Id pregunta: 10322 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Cual lenguage escoger&iacute;a para desarrollar la capa de presentaci&oacute;n?";
 choices[99]= new Array();
 choices[99][0] = "Pl/sql";
 choices[99][1] = "Queryscript";
 choices[99][2] = "Jquery";
 choices[99][3] = "PyScripter";
 answers[99] = choices[99][2];
 units[99] = "114";
 comments[99] = "Id Pregunta: 10322. PyScripter es un entorno de desarrollo, no un lenguaje";


