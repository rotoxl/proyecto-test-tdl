/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 278 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  La Agencia de Protecci&oacute;n de Datos:";
 choices[0]= new Array();
 choices[0][0] = "Es un ente de derecho p&uacute;blico que act&uacute;a con dependencia del Ministerio de Justicia en el ejercicio de sus funciones";
 choices[0][1] = "Es un ente de derecho privado que act&uacute;a en el ejercicio de sus funciones seg&uacute;n lo dispuesto por el Ministerio de Justicia ";
 choices[0][2] = "Es un ente de derecho p&uacute;blico que act&uacute;a con plena independencia de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[0][3] = "Ninguna de las anteriores es correcta";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 278. ";


//  Id pregunta: 411 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  Respecto al modelo de Nolan:";
 choices[1]= new Array();
 choices[1][0] = "Fue criticado por Strassman al no contemplar la aparici&oacute;n de las bases de datos";
 choices[1][1] = "Seg&uacute;n su autor es un modelo de 4 etapas, posteriormente corregido a 5 etapas";
 choices[1][2] = "Las 2 anteriores";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][0];
 units[1] = "22";
 comments[1] = "Id Pregunta: 411. nolan";


//  Id pregunta: 486 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La ITU-T realiza series de recomendaciones sobre diversos temas, Las recomendaciones sobre multiplexaci&oacute;n digital, estructura de las tramas, interfaces el&eacute;ctricos y funcionales entre dispositivos digitales de transmisi&oacute;n, y jerarqu&iacute;a de frecuencia pertence a:";
 choices[2]= new Array();
 choices[2][0] = "Serie V de la ITU-T";
 choices[2][1] = "Serie G de la ITU-T";
 choices[2][2] = "Serie D de la ITU-T";
 choices[2][3] = "Serie M de la ITU-T";
 answers[2] = choices[2][1];
 units[2] = "42";
 comments[2] = "Id Pregunta: 486. ";


//  Id pregunta: 528 Año de creación de pregunta: 2004-01-01
 questions[3]= "4)  En un proyecto de desarrollo sw, en qu&eacute; fase del ciclo de vida se centrar&aacute; principalmente la revisi&oacute;n de un auditor inform&aacute;tico:";
 choices[3]= new Array();
 choices[3][0] = "Pruebas";
 choices[3][1] = "Estudio de viabilidad";
 choices[3][2] = "Dise&ntilde;o";
 choices[3][3] = "Programaci&oacute;n";
 answers[3] = choices[3][2];
 units[3] = "31, 32, 33";
 comments[3] = "Id Pregunta: 528. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 592 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  El retraso de una actividad:";
 choices[4]= new Array();
 choices[4][0] = "supone un retraso siempre en el proyecto";
 choices[4][1] = "supondr&aacute; un retraso si no pertenece al camino cr&iacute;tico";
 choices[4][2] = "no supone retraso alguno si no pertenece al camino critico y la actividad no pasa a formar parte de este al alargar su duraci&oacute;n";
 choices[4][3] = "no supone retraso nunca";
 answers[4] = choices[4][2];
 units[4] = "28";
 comments[4] = "Id Pregunta: 592. ";


//  Id pregunta: 614 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  Se&ntilde;ala D&rsquo;Amore el &eacute;nfasis de la Auditor&iacute;a Inform&aacute;tica estar&iacute;a en:";
 choices[5]= new Array();
 choices[5][0] = "en detectar los errores";
 choices[5][1] = "en  corregir los problemas";
 choices[5][2] = "evitar los problemas";
 choices[5][3] = "en prevenir los problemas.";
 answers[5] = choices[5][3];
 units[5] = "31";
 comments[5] = "Id Pregunta: 614. ";


//  Id pregunta: 620 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  La auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, o triple E, ha sido bautizada por la United Kingdom Audit Office como:";
 choices[6]= new Array();
 choices[6][0] = "VFN";
 choices[6][1] = "VAN";
 choices[6][2] = "TIR";
 choices[6][3] = "VFM";
 answers[6] = choices[6][3];
 units[6] = "33";
 comments[6] = "Id Pregunta: 620. ";


//  Id pregunta: 635 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Los aspectos b&aacute;sicos a considerar en toda inversi&oacute;n son:";
 choices[7]= new Array();
 choices[7][0] = "La inversi&oacute;n incial y el plazo de la inversi&oacute;n.";
 choices[7][1] = "La inversi&oacute;n inicial, el plazo de la inversi&oacute;n, y el plazo de amortizaci&oacute;n.";
 choices[7][2] = "La inversi&oacute;n inicial, los flujos de caja y los momentos en que tienen lugar, y el plazo de la inversi&oacute;n.";
 choices[7][3] = "Los gastos financieros de la inversi&oacute;n, los flujos de caja, y el punto de amortizaci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "38";
 comments[7] = "Id Pregunta: 635. ";


//  Id pregunta: 661 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[8]= new Array();
 choices[8][0] = "XPG4 Base";
 choices[8][1] = "XPG4 Commands and Utilities";
 choices[8][2] = "XPG4 Language";
 choices[8][3] = "XPG4 Internationalised System Calls and Libraries";
 answers[8] = choices[8][2];
 units[8] = "40";
 comments[8] = "Id Pregunta: 661. ";


//  Id pregunta: 768 Año de creación de pregunta: 2009-01-01
 questions[9]= "10)  En los servicios de directorio";
 choices[9]= new Array();
 choices[9][0] = "varias entradas pueden compartir un DN";
 choices[9][1] = "las operaciones de actualizaci&oacute;n de LDAP no son at&oacute;micas";
 choices[9][2] = "LDAP utiliza habitualmente la pila de protocolos TCP / IP";
 choices[9][3] = "LDAP no se describe en t&eacute;rminos de ASN.1";
 answers[9] = choices[9][2];
 units[9] = "73";
 comments[9] = "Id Pregunta: 768. RFC 4512 y RFC 4514 ";


//  Id pregunta: 851 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes no es una operaci&oacute;n de la Unidad de Control?:";
 choices[10]= new Array();
 choices[10][0] = "Obtenci&oacute;n de la instrucci&oacute;n de memoria que indica el contador de secuencia e incremento del mismo";
 choices[10][1] = "Decodificaci&oacute;n de la instrucci&oacute;n obtenida e interpretaci&oacute;n de la misma";
 choices[10][2] = "Ejecuci&oacute;n de las operaciones aritm&eacute;ticas y l&oacute;gicas";
 choices[10][3] = "Control y resoluci&oacute;n de las situaciones conflictivas que se produzcan";
 answers[10] = choices[10][2];
 units[10] = "47";
 comments[10] = "Id Pregunta: 851. ";


//  Id pregunta: 958 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Con referencia al modelo relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[11]= new Array();
 choices[11][0] = "El n&uacute;mero de dominios de una relaci&oacute;n define su grado";
 choices[11][1] = "La extensi&oacute;n u ocurrencia de una relaci&oacute;n es una tabla donde las filas corresponden a los atributos";
 choices[11][2] = "Cada atributo, o propiedad con inter&eacute;s informacional de una relaci&oacute;n, est&aacute; asociado a un dominio del que toma sus valores";
 choices[11][3] = "El orden de las filas dentro de una tabla es determinante";
 answers[11] = choices[11][2];
 units[11] = "58";
 comments[11] = "Id Pregunta: 958. ";


//  Id pregunta: 962 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Considerando las memoria VRAM, indique la respuesta que es falsa:";
 choices[12]= new Array();
 choices[12][0] = "Incluyen una memoria DRAM y unos registros de desplazamiento que permiten acceso en forma serie";
 choices[12][1] = "Est&aacute;n especialmente dise&ntilde;adas para construir memorias de refresco de determinados gr&aacute;ficos";
 choices[12][2] = "Es un tipo de RAM que no es din&aacute;mica";
 choices[12][3] = "Equivale a Video RAM";
 answers[12] = choices[12][2];
 units[12] = "47";
 comments[12] = "Id Pregunta: 962. ";


//  Id pregunta: 1014 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  El factor de utilizaci&oacute;n de los componentes de un sistema es:";
 choices[13]= new Array();
 choices[13][0] = "Relaci&oacute;n entre el tiempo de proceso requerido por una petici&oacute;n y el tiempo de reflexi&oacute;n del usuario";
 choices[13][1] = "Porcentaje de tiempo durante el cual est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[13][2] = "Porcentaje de tiempo durante el cual dos o m&aacute;s componentes del sistema est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[13][3] = "Porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso";
 answers[13] = choices[13][1];
 units[13] = "52";
 comments[13] = "Id Pregunta: 1014. ";


//  Id pregunta: 1069 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Elija la respuesta falsa. Un cluster de PCs con Linux, utiliza:";
 choices[14]= new Array();
 choices[14][0] = "MPI, como librer&iacute;a para paso de mensajes";
 choices[14][1] = "Tecnolog&iacute;a NUMA entre todas las m&aacute;quinas";
 choices[14][2] = "Redes de alta velocidad, como Myrinet, O Gigabit ethernet";
 choices[14][3] = "Todas son v&aacute;lidas";
 answers[14] = choices[14][1];
 units[14] = "45";
 comments[14] = "Id Pregunta: 1069. ";


//  Id pregunta: 1092 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  En el sector de los procesadores cient&iacute;ficos:";
 choices[15]= new Array();
 choices[15][0] = "Los modelos de procesadores paralelos utilizan chips convencionales, por lo que resultan siempre m&aacute;s econ&oacute;micos que los superordenadores de gran escala.";
 choices[15][1] = "Se utilizan sistemas operativos propietarios.";
 choices[15][2] = "Se emplea el proceso paralelo masivo (MPP).";
 choices[15][3] = "Los procesadores incorporados de terceras partes proporcionan capacidades de proceso en coma flotante y matricial para entornos de mainframe tradicional.";
 answers[15] = choices[15][3];
 units[15] = "45, 46";
 comments[15] = "Id Pregunta: 1092. ";


//  Id pregunta: 1327 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Se define como criptosistema asim&eacute;trico lo siguiente:";
 choices[16]= new Array();
 choices[16][0] = "algoritmo basado en clave &uacute;nica";
 choices[16][1] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo una p&uacute;blica y otra privada";
 choices[16][2] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo ambas privadas";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][1];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1327. ";


//  Id pregunta: 1476 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  SCSI responde a las siglas de:";
 choices[17]= new Array();
 choices[17][0] = "Smart Computer System Interface, Interfaz elegante para sistemas de computadora";
 choices[17][1] = "Small Computer System Interface, Interfaz para peque&ntilde;os sistemas de computadora";
 choices[17][2] = "Synchonized Computer Serial Interface, Interfaz serie para ordenadores sincronizados";
 choices[17][3] = "Superb Computation Scale- Integration, escala de integraci&oacute;n para computaci&oacute;n s&uacute;per";
 answers[17] = choices[17][1];
 units[17] = "48";
 comments[17] = "Id Pregunta: 1476. ";


//  Id pregunta: 1562 Año de creación de pregunta: 2003-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; al margen de la teor&iacute;a de la conmutaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "Obtener los circuitos l&oacute;gicos que representan a las diferentes funciones booleanas.";
 choices[18][1] = "Obtener el circuito de coste m&iacute;nimo.";
 choices[18][2] = "Obtener en un tiempo aceptable un circuito que reproduzca la funci&oacute;n booleana adecuada.";
 choices[18][3] = "Dise&ntilde;ar los circuitos que permitan la transmisi&oacute;n de los datos hasta un receptor situado a una cierta distancia.";
 answers[18] = choices[18][3];
 units[18] = "";
 comments[18] = "Id Pregunta: 1562. Junta Andaluc&iacute;a";


//  Id pregunta: 1610 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  La t&eacute;cnica criptogr&aacute;fica basada en un conjunto de m&eacute;todos que permiten tener comunicaci&oacute;n segura entre las partes, siempre y cuando previamente ambas partes hayan intercambiado una clave privada, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Criptograf&iacute;a asim&eacute;trica.";
 choices[19][1] = "Criptograf&iacute;a sim&eacute;trica.";
 choices[19][2] = "Criptograf&iacute;a de clave p&uacute;blica.";
 choices[19][3] = "Criptograf&iacute;a paralela.";
 answers[19] = choices[19][1];
 units[19] = "72";
 comments[19] = "Id Pregunta: 1610. Junta Andaluc&iacute;a";


//  Id pregunta: 1633 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l es un navegador propietario?";
 choices[20]= new Array();
 choices[20][0] = "Lynx";
 choices[20][1] = "Epiphany";
 choices[20][2] = "Firefox";
 choices[20][3] = "Internet Explorer";
 answers[20] = choices[20][3];
 units[20] = "62";
 comments[20] = "Id Pregunta: 1633. ";


//  Id pregunta: 1641 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[21]= new Array();
 choices[21][0] = "Leve";
 choices[21][1] = "Grave";
 choices[21][2] = "Muy grave";
 choices[21][3] = "No constituye infracci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "30";
 comments[21] = "Id Pregunta: 1641. ";


//  Id pregunta: 1810 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  En los GIS, el sistema UTM:";
 choices[22]= new Array();
 choices[22][0] = "Asocia cada elemento a una clave de zona.";
 choices[22][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[22][2] = "Almacena la informaci&oacute;n de los pol&iacute;gonos en base a un solo punto.";
 choices[22][3] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 answers[22] = choices[22][1];
 units[22] = "67";
 comments[22] = "Id Pregunta: 1810. ";


//  Id pregunta: 1817 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de Data Mining?";
 choices[23]= new Array();
 choices[23][0] = "Enterprise Miner";
 choices[23][1] = "Clementine";
 choices[23][2] = "Erwin";
 choices[23][3] = "SAP Miner";
 answers[23] = choices[23][2];
 units[23] = "64";
 comments[23] = "Id Pregunta: 1817. ";


//  Id pregunta: 1874 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  De acuerdo con la ley 59/2003, se&ntilde;ale la falsa:";
 choices[24]= new Array();
 choices[24][0] = "La prestaci&oacute;n de servicios de certificaci&oacute;n no est&aacute; sujeta a autorizaci&oacute;n previa y se realizar&aacute; en r&eacute;gimen de libre competencia";
 choices[24][1] = "El firmante es una persona que posee el dispositivo de creaci&oacute;n de firma y que act&uacute;a en nombre propio o de una persona f&iacute;sica o jur&iacute;dica a la que representa.";
 choices[24][2] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 4 a&ntilde;os";
 choices[24][3] = "La tercera es falsa";
 answers[24] = choices[24][3];
 units[24] = "30";
 comments[24] = "Id Pregunta: 1874. ";


//  Id pregunta: 1913 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[25]= new Array();
 choices[25][0] = "Reusabilidad";
 choices[25][1] = "Encapsulaci&oacute;n";
 choices[25][2] = "Abstracci&oacute;n";
 choices[25][3] = "Persistencia";
 answers[25] = choices[25][3];
 units[25] = "82";
 comments[25] = "Id Pregunta: 1913. ";


//  Id pregunta: 2211 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Qu&eacute; es un m&eacute;todo en programaci&oacute;n orientada a objetos?:";
 choices[26]= new Array();
 choices[26][0] = "Una operaci&oacute;n sobre un objeto";
 choices[26][1] = "Un algoritmo";
 choices[26][2] = "Un conjunto de objetos";
 choices[26][3] = "Un atributo de un objeto";
 answers[26] = choices[26][0];
 units[26] = "82";
 comments[26] = "Id Pregunta: 2211. ";


//  Id pregunta: 2442 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  Las funciones primitivas del modelo l&oacute;gico de procesos:";
 choices[27]= new Array();
 choices[27][0] = "Se pueden descomponer en m&oacute;dulos elementales de proceso";
 choices[27][1] = "Son procesos que no se descomponen m&aacute;s";
 choices[27][2] = "Pueden aparecer en todos los niveles del modelo, incluso en el diagrama de contexto ";
 choices[27][3] = "Incluyen s&oacute;lo informaci&oacute;n sobre el modo de acceso a los datos del sistema";
 answers[27] = choices[27][1];
 units[27] = "81";
 comments[27] = "Id Pregunta: 2442. ";


//  Id pregunta: 2655 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  Los objetivos a conseguir en cuanto a cohesi&oacute;n y acoplamiento en el Dise&ntilde;o Estructurado son:";
 choices[28]= new Array();
 choices[28][0] = "M&aacute;xima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 choices[28][1] = "M&iacute;nima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[28][2] = "M&aacute;xima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[28][3] = "M&iacute;nima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 answers[28] = choices[28][0];
 units[28] = "84";
 comments[28] = "Id Pregunta: 2655. Preparatic XVII";


//  Id pregunta: 2669 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  En im&aacute;genes multiespectrales el an&aacute;lisis de componentes principales sirve para:";
 choices[29]= new Array();
 choices[29][0] = "Eliminar ruidos.";
 choices[29][1] = "Eliminaci&oacute;n de informaci&oacute;n redundante.";
 choices[29][2] = "Enmascaramiento o reducci&oacute;n de ciertos efectos atmosf&eacute;ricos o topogr&aacute;ficos.";
 choices[29][3] = "Poder superponer im&aacute;genes de cara a su posterior tratamiento.";
 answers[29] = choices[29][1];
 units[29] = "93";
 comments[29] = "Id Pregunta: 2669. ";


//  Id pregunta: 2675 Año de creación de pregunta: 2003-01-01
 questions[30]= "31)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n se define:";
 choices[30]= new Array();
 choices[30][0] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto, y el &Iacute;ndice de Precisi&oacute;n, que mide el ajuste del material devuelto.";
 choices[30][1] = "El &Iacute;ndice de Devoluciones, que mide la cantidad de manterial devuelto, y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 choices[30][2] = "El &Iacute;ndice de Datos, que mide la cantidad de material devuelto, y el &Iacute;ndice de Errores, que mide el desajuste del material devuelto.";
 choices[30][3] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 answers[30] = choices[30][0];
 units[30] = "96";
 comments[30] = "Id Pregunta: 2675. ";


//  Id pregunta: 2990 Año de creación de pregunta: 2004-01-01
 questions[31]= "32)  Indicar cu&aacute;l de las siguientes afirmaciones sobre el estandar GPRS no es correcta";
 choices[31]= new Array();
 choices[31][0] = "La tarificaci&oacute;n es por la cantidad de tr&aacute;fico transmitido y por calidades de servicio";
 choices[31][1] = "Se asigna un canal por usuario que permanecer&aacute; asignado aunque no se envien datos";
 choices[31][2] = "La voz y los datos se multiplexan, permitiendo su envio y recepci&oacute;n simultaneamente";
 choices[31][3] = "La velocidad de conexi&oacute;n puede llegar a los 50kbps";
 answers[31] = choices[31][1];
 units[31] = "108";
 comments[31] = "Id Pregunta: 2990. ";


//  Id pregunta: 2994 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  Indique la afirmaci&oacute;n falsa. De acuerdo con lo previsto en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, el servicio universal debe garantizar:";
 choices[32]= new Array();
 choices[32][0] = "La puesta a disposici&oacute;n de los abonados de una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y que se actualice, como m&iacute;nimo, una vez al a&ntilde;o";
 choices[32][1] = "La obtenci&oacute;n por todos los usuarios finales de una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija as&iacute; como el acceso a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico debiendo incluir entre otros el acceso funcional a internet.";
 choices[32][2] = "La existencia de una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago";
 choices[32][3] = "La obtenci&oacute;n por todos los usuarios finales de telefon&iacute;a m&oacute;vil en condiciones de igualdad y no discriminaci&oacute;n, con una calidad determinada que ser&aacute; fijada reglamentariamente y a un precio asequible.";
 answers[32] = choices[32][3];
 units[32] = "110";
 comments[32] = "Id Pregunta: 2994. Examen TIC MAP B 2004";


//  Id pregunta: 3005 Año de creación de pregunta: 2004-01-01
 questions[33]= "34)  La familia de redes locales inal&aacute;mbricas WLAN operan en las bandas de frecuencia:";
 choices[33]= new Array();
 choices[33][0] = "2.4 GHz y 5 Ghz";
 choices[33][1] = "10MHz y 100MHz";
 choices[33][2] = "1MHz y 10 MHz";
 choices[33][3] = "ninguna de las anteriores";
 answers[33] = choices[33][0];
 units[33] = "107";
 comments[33] = "Id Pregunta: 3005. ";


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


//  Id pregunta: 3240 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es el significado correcto en la actualidad de las siglas GSM?:";
 choices[35]= new Array();
 choices[35][0] = "Group System Mobile";
 choices[35][1] = "Global System Mobile";
 choices[35][2] = "Global Special Mobile";
 choices[35][3] = "Group  Special Mobile";
 answers[35] = choices[35][1];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3240. ";


//  Id pregunta: 3289 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es un modem en banda base?:";
 choices[36]= new Array();
 choices[36][0] = "Equipo que efect&uacute;a &uacute;nicamente funciones de codificaci&oacute;n y decodificaci&oacute;n, aparte de las funciones de di&aacute;logo con el ETD y de interfaz con la l&iacute;nea de transmisi&oacute;n";
 choices[36][1] = "Equipo que adapta el ETD a las caracter&iacute;sticas el&eacute;ctricas de la l&iacute;nea de transmisi&oacute;n";
 choices[36][2] = "Equipo normalizado que realiza la modulaci&oacute;n y demodulaci&oacute;n teniendo como l&iacute;mite inferior de frecuencias 0 Hz";
 choices[36][3] = "Equipo que realiza la modulaci&oacute;n y demodulaci&oacute;n teniendo como l&iacute;mite inferior de frecuencias 0 HZ y l&iacute;mite superior dependiente de la velocidad de transmisi&oacute;n";
 answers[36] = choices[36][0];
 units[36] = "97";
 comments[36] = "Id Pregunta: 3289. ";


//  Id pregunta: 3349 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Cuando hablamos de Frame Relay, &iquest;En qu&eacute; consiste el CIR?:";
 choices[37]= new Array();
 choices[37][0] = "El el tanto por ciento de ocupaci&oacute;n de canal m&aacute;ximo en las horas punta, seg&uacute;n el contrato de calidad de servicio";
 choices[37][1] = "Es la tarifa m&iacute;nima de alquiler de circuito que nos da derecho al envio de un n&uacute;mero de tramas al mes (las tramas en horas valle se ponderan con un factor variable)";
 choices[37][2] = "El la velocidad m&aacute;xima de informaci&oacute;n que el transportista nos asegura en cualquier momento, pudiendo 'tirar a la basura' las que excedan ese valor, si hay saturaci&oacute;n en la red";
 choices[37][3] = "Es el n&uacute;mero m&aacute;ximo de tramas err&oacute;neas (en porcentaje) que el transportista nos asegura en el contrato de nuestra 'Calidad de Servicio'";
 answers[37] = choices[37][2];
 units[37] = "109";
 comments[37] = "Id Pregunta: 3349. ";


//  Id pregunta: 3633 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  La prioridad de acceso en redes Token Ring:";
 choices[38]= new Array();
 choices[38][0] = "Usa los primeros 6 bits en el campo 'Priority' (prioridad) para controlar el acceso en red Token Ring";
 choices[38][1] = "Permite a los puentes de la red limitar tr&aacute;fico de broadcast sobre redes locales o remotas";
 choices[38][2] = "Es una funci&oacute;n del router (encaminador o canalizador) usada para control de acceso a ciertas puertas seg&uacute;n la prioridad de la direcci&oacute;n";
 choices[38][3] = "Permite que ciertas estaciones accedan a la red m&aacute;s frecuentemente que otras basadas en su prioridad";
 answers[38] = choices[38][3];
 units[38] = "101";
 comments[38] = "Id Pregunta: 3633. ";


//  Id pregunta: 3764 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Para la interconexi&oacute;n de redes locales se han especificado diversos equipos. Indique cu&aacute;l de las opciones es correcta:";
 choices[39]= new Array();
 choices[39][0] = "Un router necesariamente une segmentos de red con distinto protocolo de enlace, o nivel dos";
 choices[39][1] = "Un router une dos segmentos de red utilizando exclusivamente la informaci&oacute;n de nivel tres para el filtrado de las direcciones";
 choices[39][2] = "Un router necesariamente une segmentos de red con el mismo protocolo de enlace, o de nivel dos";
 choices[39][3] = "Todas las respuestas anteriores son correctas";
 answers[39] = choices[39][1];
 units[39] = "102";
 comments[39] = "Id Pregunta: 3764. ";


//  Id pregunta: 3793 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Respecto a los enrutadores, encaminadores o 'routers' se puede afirmar que:";
 choices[40]= new Array();
 choices[40][0] = "En la red de &aacute;rea local, son imprescindibles entre los ordenadores personales y su servidor";
 choices[40][1] = "Facilitan la uni&oacute;n a nivel f&iacute;sico entre dos redes distintas 10baseT y SNA";
 choices[40][2] = "Unen dos redes locales a nivel de red , ya que se suele decir que son equipos h&iacute;bridos";
 choices[40][3] = "Unen las redes WAN o MAN que tienen igual subnivel de control LLC";
 answers[40] = choices[40][2];
 units[40] = "102";
 comments[40] = "Id Pregunta: 3793. ";


//  Id pregunta: 3919 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  Funciones de una copia de seguridad:";
 choices[41]= new Array();
 choices[41][0] = "Restaurar los archivos y carpetas modificados en el disco duro o en otro disco al que tenga acceso.";
 choices[41][1] = "Crear un duplicado de los datos del disco duro y, a continuaci&oacute;n, archivarlos en otros dispositivos de almacenamiento como pueden ser un disco duro o una cinta.";
 choices[41][2] = "Archivar en su disco duro determinados archivos y carpetas.";
 choices[41][3] = "Todas las anteriores";
 answers[41] = choices[41][3];
 units[41] = "97";
 comments[41] = "Id Pregunta: 3919. Tema 4.9: Pol&iacute;ticas, Procedimientos y m&eacute;todos para la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";


//  Id pregunta: 4043 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Seg&uacute;n el art&iacute;culo 72 de la Ley 9/2014, &iquest;a cu&aacute;l de los siguientes organismos corresponde la funci&oacute;n inspectora en materia de telecomunicaciones?";
 choices[42]= new Array();
 choices[42][0] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[42][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[42][2] = "Corresponde a ambos";
 choices[42][3] = "No corresponde a ninguno";
 answers[42] = choices[42][2];
 units[42] = "110";
 comments[42] = "Id Pregunta: 4043. ";


//  Id pregunta: 4068 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  En la estructura de la actual internet podemos diferenciar varios niveles jer&aacute;rquicos";
 choices[43]= new Array();
 choices[43][0] = "3, red troncal - redes de proveedores de &aacute;mbito local - redes corporativas";
 choices[43][1] = "4, red troncal - redes de proveedores de tr&aacute;nsito y acceso internacional - redes de proveedores de acceso local - redes corporativas";
 choices[43][2] = "5, red troncal - redes de proveedores de tr&aacute;nsito y acceso internacional - redes de proveedores de acceso local - redes corporativas - redes locales";
 choices[43][3] = "Internet es la red de redes y no tiene ning&uacute;n tipo de jerarqu&iacute;a en sus infraestructuras";
 answers[43] = choices[43][1];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4068. ";


//  Id pregunta: 4159 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Que mecanismo proporciona seguridad a DNS";
 choices[44]= new Array();
 choices[44][0] = "Un par nombre/contrase&ntilde;a";
 choices[44][1] = "Un directorio TFTP";
 choices[44][2] = "Un nombre de dominio";
 choices[44][3] = "ninguna de las anteriores";
 answers[44] = choices[44][0];
 units[44] = "113";
 comments[44] = "Id Pregunta: 4159. ";


//  Id pregunta: 4372 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  Una caracter&iacute;stica distintiva del modelo de ciclo de vida en espiral respecto a los modelos cl&aacute;sicos de ciclo de vida es la inclusi&oacute;n en el primero de actividades de:";
 choices[45]= new Array();
 choices[45][0] = "Codificaci&oacute;n.";
 choices[45][1] = "Mantenimiento";
 choices[45][2] = "An&aacute;lisis de riesgo.";
 choices[45][3] = "Dise&ntilde;o.";
 answers[45] = choices[45][2];
 units[45] = "76";
 comments[45] = "Id Pregunta: 4372. ";


//  Id pregunta: 4449 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  En relaci&oacute;n con la licencia GPL (GNU Public License), una de las siguientes afirmaciones no es cierta.";
 choices[46]= new Array();
 choices[46][0] = "Permite redistribuir, ejecutar y mejorar los programas.";
 choices[46][1] = "Proh&iacute;be cobrar un precio por el acto f&iacute;sico de transferir una copia.";
 choices[46][2] = "No permite que incluya sus programas en programas propietarios.";
 choices[46][3] = "Fue creada por la Free Software Foundation.";
 answers[46] = choices[46][1];
 units[46] = "36";
 comments[46] = "Id Pregunta: 4449. ";


//  Id pregunta: 4474 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Cual de los siguientes no es un tipo de prueba contemplado en la metodolog&iacute;a Metrica V3?";
 choices[47]= new Array();
 choices[47][0] = "Pruebas unitarias.";
 choices[47][1] = "Pruebas singulares.";
 choices[47][2] = "Pruebas de integraci&oacute;n.";
 choices[47][3] = "Pruebas de regresi&oacute;n.";
 answers[47] = choices[47][1];
 units[47] = "86";
 comments[47] = "Id Pregunta: 4474. ";


//  Id pregunta: 4503 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Como define Ia Norma UNE ISOIIEC 17799 la seguridad de la informaci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "La preservaci&oacute;n de la confidencialidad y la integridad";
 choices[48][1] = "La preservaci&oacute;n de Ia confidencialidad, la integridad y la disponibilidad";
 choices[48][2] = "La obtenci&oacute;n de Ia autenticaci&oacute;n y la preservaci&oacute;n de Ia confidencialidad, la integridad y Ia disponibilidad";
 choices[48][3] = "La obtenci&oacute;n de Ia autenticaci&oacute;n y el no repudio y Ia preservaci&oacute;n de Ia confidencialidad, Ia integridad y Ia disponibilidad";
 answers[48] = choices[48][1];
 units[48] = "";
 comments[48] = "Id Pregunta: 4503. ";


//  Id pregunta: 4507 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cuanto tiempo duraran los derechos de explotaci&oacute;n de una obra?";
 choices[49]= new Array();
 choices[49][0] = "Hasta la muerte de su autor";
 choices[49][1] = "Setenta anos despu&eacute;s de la fecha de divulgaci&oacute;n";
 choices[49][2] = "Toda la vida de su autor y setenta anos despu&eacute;s de su muerte";
 choices[49][3] = "Los derechos de explotaci&oacute;n de una obra nunca se extinguen";
 answers[49] = choices[49][2];
 units[49] = "36";
 comments[49] = "Id Pregunta: 4507. ";


//  Id pregunta: 4576 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Cual de los siguientes aspectos NO son tratados en Ia Ley 34/2002, de 11 de julio, de servicios de Ia sociedad de la informaci&oacute;n y de comercio electr&oacute;nico:";
 choices[50]= new Array();
 choices[50][0] = "obligaciones y responsabilidades de los destinatarios de los servicios.";
 choices[50][1] = "promueve Ia elaboraci&oacute;n de c&oacute;digos de conducta sobre las materias reguladas en esta Ley.";
 choices[50][2] = "accesibilidad para las personas can discapacidad y de edad avanzada a Ia informaci&oacute;n proporcionada por medios electr&oacute;nicos.";
 choices[50][3] = "sistema de asignaci&oacute;n de nombres de dominio bajo el &quot;.es&quot;.";
 answers[50] = choices[50][0];
 units[50] = "30";
 comments[50] = "Id Pregunta: 4576. ";


//  Id pregunta: 4662 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  Tasa M&aacute;xima de Transferencia  de Informaci&oacute;n alcanzable con la tecnolog&iacute;a HSDPA ";
 choices[51]= new Array();
 choices[51][0] = "7.2Mbps";
 choices[51][1] = "14.4Mbps";
 choices[51][2] = "4.8Mbps";
 choices[51][3] = "10.7Mbps";
 answers[51] = choices[51][1];
 units[51] = "108";
 comments[51] = "Id Pregunta: 4662. ";


//  Id pregunta: 4768 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  En ATM, para la transmisi&oacute;n de servicios is&oacute;cronos se utilizan los protocolos de adaptaci&oacute;n AAL1 y AAL2. La diferencia entre ellos es";
 choices[52]= new Array();
 choices[52][0] = "AAL1 es de velocidad variable y AAL2 es de velocidad constante";
 choices[52][1] = "AAL1 es de velocidad constante y AAL2 es de velocidad variable";
 choices[52][2] = "AAL1 es orientado a conexi&oacute;n y AAL2 es de tipo datagrama";
 choices[52][3] = "AAL1 es de tipo datagrama y AAL2 es orientado a conexi&oacute;n";
 answers[52] = choices[52][1];
 units[52] = "109";
 comments[52] = "Id Pregunta: 4768. ";


//  Id pregunta: 4854 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NOes cierta?";
 choices[53]= new Array();
 choices[53][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks)";
 choices[53][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada unode sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas pordicha estaci&oacute;n";
 choices[53][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast";
 choices[53][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os";
 answers[53] = choices[53][2];
 units[53] = "100";
 comments[53] = "Id Pregunta: 4854. ";


//  Id pregunta: 5090 Año de creación de pregunta: 2001-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de actualizaci&oacute;n de CRLs?";
 choices[54]= new Array();
 choices[54][0] = "muestreo de CRLs";
 choices[54][1] = "env&iacute;o de CRL";
 choices[54][2] = "anuncio de CRL";
 choices[54][3] = "verificaci&oacute;n en l&iacute;nea";
 answers[54] = choices[54][1];
 units[54] = "73";
 comments[54] = "Id Pregunta: 5090. ";


//  Id pregunta: 5197 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Seg&uacute;n las clasificaci&oacute;n de Whitten, cu&aacute;les son los cuatro tipos de prototipos:";
 choices[55]= new Array();
 choices[55][0] = "Prototipos de Viabilidad, de Necesidad, de Dise&ntilde;o y de Validaci&oacute;n";
 choices[55][1] = "Prototipos de Viabilidad, de M&iacute;nimos, de Dise&ntilde;o y de Implantaci&oacute;n";
 choices[55][2] = "Prototipos de Viabilidad, de Necesidad, de Interfaz y de Implantaci&oacute;n";
 choices[55][3] = "Prototipos de Viabilidad, de Necesidad, de Dise&ntilde;o y de Implantaci&oacute;n";
 answers[55] = choices[55][3];
 units[55] = "85";
 comments[55] = "Id Pregunta: 5197. ";


//  Id pregunta: 5460 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[56]= new Array();
 choices[56][0] = "400 puntos sobre 1000";
 choices[56][1] = "500 puntos sobre 1000";
 choices[56][2] = "700 puntos sobre 1000";
 choices[56][3] = "900 puntos sobre 1000";
 answers[56] = choices[56][1];
 units[56] = "88";
 comments[56] = "Id Pregunta: 5460. Castilla y Le&oacute;n";


//  Id pregunta: 5514 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indique c&oacute;mo podr&iacute;a interconectar dos ordenadores personales seg&uacute;n la tecnolog&iacute;a ethernet:";
 choices[57]= new Array();
 choices[57][0] = "Mediante un cable cruzado";
 choices[57][1] = "Mediante un cable sin cruzar o cable plano";
 choices[57][2] = "Mediante un dado de interconexi&oacute;n";
 choices[57][3] = "Mediante cualquiera de las tres opciones indicadas ";
 answers[57] = choices[57][0];
 units[57] = "99";
 comments[57] = "Id Pregunta: 5514. ";


//  Id pregunta: 5776 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Qu&eacute; car&aacute;cter tendr&aacute;n los C&oacute;digos Tipo descritos en el art&iacute;culo 32 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?";
 choices[58]= new Array();
 choices[58][0] = "De legislaci&oacute;n de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[58][1] = "Sustitutivo de las regulaciones legales sobre protecci&oacute;n de datos para aquellos sectores que los adopten.";
 choices[58][2] = "Obligatorio para todas aquellas administraciones P&uacute;blicas que prevean la realizaci&oacute;n de transferencias internacionales de datos personales a terceros pa&iacute;ses que no garanticen un nivel adecuado de protecci&oacute;n.";
 choices[58][3] = "C&oacute;digos deontol&oacute;gicos o de buena pr&aacute;ctica profesional.";
 answers[58] = choices[58][3];
 units[58] = "29";
 comments[58] = "Id Pregunta: 5776. ";


//  Id pregunta: 5875 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  En el protocolo Secure Socket Layer (SSL) el subprotocolo de negociaci&oacute;n (handsake) negocia las claves de sesi&oacute;n mediante el esquema de Diffie-Hellman (D-H) o RSA. Indique la respuesta correcta:";
 choices[59]= new Array();
 choices[59][0] = "D-H an&oacute;nimo es susceptible de ataques por hombre interpuesto";
 choices[59][1] = "D-H ef&iacute;mero no requiere certificado del servidor ni del cliente";
 choices[59][2] = "D-H constante no precisa certificado del cliente";
 choices[59][3] = "RSA necesita la generaci&oacute;n de un n&uacute;mero aleatorio por el servidor que es enviado al cliente cifrado con la clave p&uacute;blica de &eacute;ste";
 answers[59] = choices[59][0];
 units[59] = "72";
 comments[59] = "Id Pregunta: 5875. MAP 2008 A1";


//  Id pregunta: 6061 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  HTML est&aacute; estandarizado por:";
 choices[60]= new Array();
 choices[60][0] = "World Wide Web Consortium - W3C.";
 choices[60][1] = "Internet Engineering Task Force - IETF.";
 choices[60][2] = "Institute os Management Accountants - IMA.";
 choices[60][3] = "International Accounting Standard Board - IASB.";
 answers[60] = choices[60][0];
 units[60] = "69";
 comments[60] = "Id Pregunta: 6061. TIC A 2009";


//  Id pregunta: 6150 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;les son algunos modelos de mejora de procesos relacionados con la gesti&oacute;n de la calidad en un proyecto?";
 choices[61]= new Array();
 choices[61][0] = "Malcolm Baldrige, CMM, CMMISM y ASQ.";
 choices[61][1] = "Malcolm Baldrige, AMD y CMMISM.";
 choices[61][2] = "Malcolm Baldrige, CMM, CMMISM y AMD.";
 choices[61][3] = "Malcolm Baldrige, CMM y CMMISM.";
 answers[61] = choices[61][3];
 units[61] = "28";
 comments[61] = "Id Pregunta: 6150. ";


//  Id pregunta: 6310 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de dise&ntilde;o de sistemas de tiempo real?";
 choices[62]= new Array();
 choices[62][0] = "Rational Rose-RT.";
 choices[62][1] = "PERTS.";
 choices[62][2] = "TimeWiz.";
 choices[62][3] = "ADA.";
 answers[62] = choices[62][3];
 units[62] = "83";
 comments[62] = "Id Pregunta: 6310. ";


//  Id pregunta: 6427 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  De las siguientes aplicaciones, &iquest;Cu&aacute;l no es un servidor de aplicaciones?";
 choices[63]= new Array();
 choices[63][0] = "Apache Geronimo";
 choices[63][1] = "Jboss";
 choices[63][2] = "eXo";
 choices[63][3] = "Resin";
 answers[63] = choices[63][2];
 units[63] = "62";
 comments[63] = "Id Pregunta: 6427. ";


//  Id pregunta: 6439 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  El paso a tablas de una relaci&oacute;n ternaria ocasiona:";
 choices[64]= new Array();
 choices[64][0] = "Una tabla para la relaci&oacute;n cuya clave es la concatenaci&oacute;n de las clasves de las entidades que participan en la relaci&oacute;n.";
 choices[64][1] = "Tres tablas, una para cada posible combinaci&oacute;n.";
 choices[64][2] = "Dos tablas son suficientes para mantener toda la informai&oacute;n.";
 choices[64][3] = "No se permiten relaciones ternarias en el modelo E/R.";
 answers[64] = choices[64][0];
 units[64] = "70";
 comments[64] = "Id Pregunta: 6439. ";


//  Id pregunta: 6503 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes es un proyecto de estandarizaci&oacute;n de UNIX?";
 choices[65]= new Array();
 choices[65][0] = "GNU";
 choices[65][1] = "GPL";
 choices[65][2] = "POSIX";
 choices[65][3] = "Emacs";
 answers[65] = choices[65][2];
 units[65] = "53";
 comments[65] = "Id Pregunta: 6503. ";


//  Id pregunta: 6517 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Se&ntilde;ale que afirmaci&oacute;n es FALSA en relaci&oacute;n a los archivos jar en java:";
 choices[66]= new Array();
 choices[66][0] = "El algoritmo de compresi&oacute;n que utilizan es LZW.";
 choices[66][1] = "Son independientes de la plataforma y cualquier JVM los interpreta.";
 choices[66][2] = "Todos los ficheros que contienen, tienen la extensi&oacute;n class.";
 choices[66][3] = "Pueden incluir un subdirectorio de metainformaci&oacute;n llamado META-INF.";
 answers[66] = choices[66][2];
 units[66] = "60";
 comments[66] = "Id Pregunta: 6517. ";


//  Id pregunta: 6550 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el m&eacute;todo de autenticaci&oacute;n mejor?";
 choices[67]= new Array();
 choices[67][0] = "Algo que alguien sabe";
 choices[67][1] = "Algo que alguien es";
 choices[67][2] = "Algo que alguien tiene";
 choices[67][3] = "Lo que una persona sabe y es";
 answers[67] = choices[67][3];
 units[67] = "111";
 comments[67] = "Id Pregunta: 6550. ";


//  Id pregunta: 6559 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  CSMA (Acceso M&uacute;ltiple por divisi&oacute;n de c&oacute;digo) no se caracteriza por:";
 choices[68]= new Array();
 choices[68][0] = "Ancho de banda menor a los sistemas TDMA";
 choices[68][1] = "Ancho de banda mayor a los sistemas TDMA";
 choices[68][2] = "Se puede reutilizar la misma portadora en todas las c&eacute;lulas, sean adyacentes o no";
 choices[68][3] = "M&uacute;ltiples usuarios pueden transmitir de manera concurrente sobre el mismo radiocanal";
 answers[68] = choices[68][0];
 units[68] = "108";
 comments[68] = "Id Pregunta: 6559. ";


//  Id pregunta: 6597 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Una auditor&iacute;a de acuerdo al RD 1720/2007, implica el llevar a cabo:";
 choices[69]= new Array();
 choices[69][0] = "An&aacute;lisis de la red de comunicaciones";
 choices[69][1] = "An&aacute;lisis de los sistemas operativos";
 choices[69][2] = "An&aacute;lisis de los ficheros automatizados";
 choices[69][3] = "Todas las respuestas anteriores son correctas";
 answers[69] = choices[69][3];
 units[69] = "75";
 comments[69] = "Id Pregunta: 6597. ";


//  Id pregunta: 7354 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  Se&ntilde;ale la CORRECTA:";
 choices[70]= new Array();
 choices[70][0] = "En un criterio a minimizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[70][1] = "En un criterio a maximizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[70][2] = "Es obligatorio establecer un umbral de saciedad";
 choices[70][3] = "Todas son INCORRECTAS";
 answers[70] = choices[70][0];
 units[70] = "34";
 comments[70] = "Id Pregunta: 7354. ";


//  Id pregunta: 7909 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   En el dise&ntilde;o estructurado, &iquest;qu&eacute; tipo de acoplamiento sucede cuando un m&oacute;dulo debe utilizar datos e informaci&oacute;n de control internos de otro m&oacute;dulo?";
 choices[71]= new Array();
 choices[71][0] = " Acoplamiento de control.";
 choices[71][1] = " Acoplamiento por estampado.";
 choices[71][2] = " Acoplamiento por contenido.";
 choices[71][3] = " Acoplamiento externo.";
 answers[71] = choices[71][2];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7909. Map 2006";


//  Id pregunta: 7980 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   En el proceso RUP (&laquo;Rational Unified Process&raquo;):";
 choices[72]= new Array();
 choices[72][0] = " La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de actividades, productos intermedios, perfiles de trabajo o roles y flujos de trabajo.";
 choices[72][1] = " La dimensi&oacute;n est&aacute;tica del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos.";
 choices[72][2] = " La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos.";
 choices[72][3] = " En la dimensi&oacute;n est&aacute;tica, cada ciclo se compone de cuatro fases secuenciales (comienzo, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n).";
 answers[72] = choices[72][2];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7980. Map 2007";


//  Id pregunta: 8034 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   Indique qu&eacute; informaci&oacute;n de las siguientes NO aporta un URL (Localizador Universal de Recurso) para identificar un recurso de la web:";
 choices[73]= new Array();
 choices[73][0] = " El nombre del recurso.";
 choices[73][1] = " El tipo del recurso.";
 choices[73][2] = " D&oacute;nde se encuentra el recurso.";
 choices[73][3] = " El protocolo que hay que usar para obtener el recurso.";
 answers[73] = choices[73][1];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 8034. Map 2007";


//  Id pregunta: 8104 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[74]= new Array();
 choices[74][0] = " Puntuaciones normalizadas.";
 choices[74][1] = " Factor de ponderaci&oacute;n de los criterios.";
 choices[74][2] = " Coeficiente de concordancia.";
 choices[74][3] = " Funci&oacute;n de valor o de evaluaci&oacute;n.";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 8104. Map 2008";


//  Id pregunta: 8127 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   &iquest;Cu&aacute;l de los siguientes NO es un tipo de ataque activo?";
 choices[75]= new Array();
 choices[75][0] = " Interrupci&oacute;n.";
 choices[75][1] = " Interceptaci&oacute;n.";
 choices[75][2] = " Modificaci&oacute;n.";
 choices[75][3] = " Generaci&oacute;n.";
 answers[75] = choices[75][1];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 8127. Map 2008";


//  Id pregunta: 8184 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  Conforme a la especificaci&oacute;n 3GPP TS 03.60, GPRS se implementa l&oacute;gicamente a&ntilde;adiendo a la estructura de GSM los nodos Serving GPRS Support Node (SGSN) y Gateway GPRS Support Node (GGSN). &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[76]= new Array();
 choices[76][0] = "Entre ambos tipos de nodos se define la Intefaz Gn si est&aacute;n situados en la misma red m&oacute;vil (PLMN).";
 choices[76][1] = "El SGSN es el nodo de interconexi&oacute;n con la Red de Conmutaci&oacute;n de Paquetes o Packet Data Network (PDN).";
 choices[76][2] = "La funcionalidad proporcionada por SGSN y GGSN debe residir en diferentes nodos f&iacute;sicos.";
 choices[76][3] = "Entre ambos tipos de nodos se define la Intefaz Gi si est&aacute;n situados en distinta red m&oacute;vil (PLMN).";
 answers[76] = choices[76][0];
 units[76] = "108";
 comments[76] = "Id Pregunta: 8184. Examen TIC A1 2010";


//  Id pregunta: 8352 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[77]= new Array();
 choices[77][0] = "SOAP envelope.";
 choices[77][1] = "SOAP binding framework";
 choices[77][2] = "SOAP encoding rules.";
 choices[77][3] = "SOAP  RPC representation.";
 answers[77] = choices[77][2];
 units[77] = "51";
 comments[77] = "Id Pregunta: 8352. Examen TIC A2 2010";


//  Id pregunta: 8627 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  En el contexto de las redes de cable, con objeto de permitir la asignaci&oacute;n din&aacute;mica de ancho de banda a los usuarios, &iquest;cu&aacute;les son las estrategias posibles de acceso a trav&eacute;s de m&oacute;dem?";
 choices[78]= new Array();
 choices[78][0] = "Por encaminamiento IP y basada en ATM";
 choices[78][1] = "A trav&eacute;s del nodo primario de la red y a trav&eacute;s del nodo secundario de la red";
 choices[78][2] = "Mediante solicitud-reserva y por contienda.";
 choices[78][3] = "En estrella y en &aacute;rbol.";
 answers[78] = choices[78][2];
 units[78] = "101, 102";
 comments[78] = "Id Pregunta: 8627. Examen TIC A2 2010 interna";


//  Id pregunta: 8680 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  a) A que componente del protocolo SIP corresponde la funci&oacute;n de &quot;aceptar peticiones de registros de usuarios y guardar la informaci&oacute;n de estas peticiones para suministrar un servicio de localizaci&oacute;n y traducci&oacute;n de direcciones en el dominio que controla&quot;:";
 choices[79]= new Array();
 choices[79][0] = "Proxy Server.";
 choices[79][1] = "Account Server.";
 choices[79][2] = "Redirect Server.";
 choices[79][3] = "Registrar Server.";
 answers[79] = choices[79][3];
 units[79] = "109";
 comments[79] = "Id Pregunta: 8680. Examen UPM A2 2011";


//  Id pregunta: 8779 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  El art&iacute;culo 3 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, define como datos de car&aacute;cter personal:";
 choices[80]= new Array();
 choices[80][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o no.";
 choices[80][1] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas y jur&iacute;dicas.";
 choices[80][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables.";
 choices[80][3] = "Cualquier informaci&oacute;n concerniente a personas identificadas.";
 answers[80] = choices[80][2];
 units[80] = "29";
 comments[80] = "Id Pregunta: 8779. Examen UPM A2 2011";


//  Id pregunta: 8877 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  En un DFD es falso que:";
 choices[81]= new Array();
 choices[81][0] = "Los flujos de datos no puede conectar dos almacenes directamente.";
 choices[81][1] = "Los flujos de datos no pueden ser continuos.";
 choices[81][2] = "Los flujos de datos de di&aacute;logo pueden comunicar procesos.";
 choices[81][3] = "Los flujos de datos de consulta parten de almacenes de datos.";
 answers[81] = choices[81][1];
 units[81] = "81";
 comments[81] = "Id Pregunta: 8877. Examen UPM A2 2011";


//  Id pregunta: 8939 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[82]= new Array();
 choices[82][0] = "Carta de servicios electr&oacute;nicos";
 choices[82][1] = "Carta de servicios";
 choices[82][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[82][3] = "Debe disponer de todos los anteriores";
 answers[82] = choices[82][3];
 units[82] = "43";
 comments[82] = "Id Pregunta: 8939. ";


//  Id pregunta: 9064 Año de creación de pregunta: 2027-01-01
 questions[83]= "84)  Seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal, las infracciones leves ser&aacute;n sancionadas con multas de:";
 choices[83]= new Array();
 choices[83][0] = "601,01 a 60.101,21 euros";
 choices[83][1] = "901,01 a 60.101,21 euros";
 choices[83][2] = "600 a 40.000 euros";
 choices[83][3] = "900 a 40.000 euros";
 answers[83] = choices[83][3];
 units[83] = "29";
 comments[83] = "Id Pregunta: 9064. ";


//  Id pregunta: 9167 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  De los siguientes sistemas, &iquest;cu&aacute;l no se refiere a un sistema de navegaci&oacute;n por sat&eacute;lite?";
 choices[84]= new Array();
 choices[84][0] = "Beidou";
 choices[84][1] = "COMPASS";
 choices[84][2] = "QZSS";
 choices[84][3] = "GNS";
 answers[84] = choices[84][3];
 units[84] = "67";
 comments[84] = "Id Pregunta: 9167. ";


//  Id pregunta: 9217 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Qu&eacute; es iSCSI?";
 choices[85]= new Array();
 choices[85][0] = "Protocolo que permite establecer t&uacute;neles TCP/IP por el que se env&iacute;an tramas FC sin modificar.";
 choices[85][1] = "No transporta las tramas FC entre sedes remotas sino que transporta s&oacute;lo las capas superiores.";
 choices[85][2] = "Utiliza TCP/IP como red de transporte utilizando la misma infraestructura que se utilice para redes de comunicaciones.";
 choices[85][3] = "Ninguna es correcta.";
 answers[85] = choices[85][2];
 units[85] = "48";
 comments[85] = "Id Pregunta: 9217. ";


//  Id pregunta: 9222 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  Identificar que protocolo no est&aacute; dise&ntilde;ado especificamente para la extensi&oacute;n de las SAN sobre protocolo IP";
 choices[86]= new Array();
 choices[86][0] = "iFTP";
 choices[86][1] = "iSCSCI";
 choices[86][2] = "FCIP";
 choices[86][3] = "iFCP";
 answers[86] = choices[86][0];
 units[86] = "48";
 comments[86] = "Id Pregunta: 9222. Examen TIC-A1 2011";


//  Id pregunta: 9228 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  En la primitiva send-receive qu&eacute; caracter&iacute;sticas tienen send y receive?";
 choices[87]= new Array();
 choices[87][0] = "Send en bloqueante y Receive es no bloqueante.";
 choices[87][1] = "Ambas son bloqueantes.";
 choices[87][2] = "Ambas son no bloqueantes.";
 choices[87][3] = "Send es no bloqueante y Receive es bloqueante.";
 answers[87] = choices[87][3];
 units[87] = "50";
 comments[87] = "Id Pregunta: 9228. ";


//  Id pregunta: 9413 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Cu&aacute;l de las siguientes magnitudes no tratan en general de evaluar las m&eacute;tricas de estimaci&oacute;n software?";
 choices[88]= new Array();
 choices[88][0] = "Calidad";
 choices[88][1] = "Productividad";
 choices[88][2] = "Seguridad";
 choices[88][3] = "Tama&ntilde;o";
 answers[88] = choices[88][2];
 units[88] = "89";
 comments[88] = "Id Pregunta: 9413. ";


//  Id pregunta: 9652 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Entre las caracter&iacute;sticas del modelo de calidad de la ISO 9126 se encuentran:";
 choices[89]= new Array();
 choices[89][0] = "Funcionalidad";
 choices[89][1] = "Fiabilidad";
 choices[89][2] = "Portabilidad";
 choices[89][3] = "Todas las anteriores";
 answers[89] = choices[89][3];
 units[89] = "87";
 comments[89] = "Id Pregunta: 9652. Son 6, Funcionalidad, Fiabilidad, Usabilidad, Eficiencia, Mantenibilidad, Portabilidad";


//  Id pregunta: 9736 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  Si un equipo tiene una aver&iacute;a &iquest;cu&aacute;l de los siguientes indicadores nos da informaci&oacute;n sobre el tiempo medio requerido para reparar dicha aver&iacute;a?";
 choices[90]= new Array();
 choices[90][0] = "MTBF";
 choices[90][1] = "MTBR";
 choices[90][2] = "MTTR";
 choices[90][3] = "MTTF";
 answers[90] = choices[90][2];
 units[90] = "32";
 comments[90] = "Id Pregunta: 9736. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9738 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[91]= new Array();
 choices[91][0] = "Intrastructure e Hiperstructure.";
 choices[91][1] = "Basic y Complex.";
 choices[91][2] = "Infrastructure y Superstructure.";
 choices[91][3] = "Infrastructure y Substructure.";
 answers[91] = choices[91][2];
 units[91] = "82";
 comments[91] = "Id Pregunta: 9738. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9992 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[92]= new Array();
 choices[92][0] = "Pago mediante cargo en cuenta";
 choices[92][1] = "Pago con tarjeta";
 choices[92][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[92][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[92] = choices[92][3];
 units[92] = "70";
 comments[92] = "Id Pregunta: 9992. ";


//  Id pregunta: 10048 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  MPLS (Multiprotocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[93]= new Array();
 choices[93][0] = "FEC (Forwarding Equivalent Class).";
 choices[93][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[93][2] = "CIR (Commited Information Rate).";
 choices[93][3] = "MBS (Maximum Burst Size).";
 answers[93] = choices[93][0];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10048. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10139 Año de creación de pregunta: 2010-01-01
 questions[94]= "95)  El TS (Trasport Stream) en MPEG-2:";
 choices[94]= new Array();
 choices[94][0] = "Su carga &uacute;til est&aacute; formada por paquetes de trenes elementales (Packetized elementary Streams, PES)";
 choices[94][1] = "Su tama&ntilde;o es de 188 bytes";
 choices[94][2] = "Su cabecera es de 4 bytes";
 choices[94][3] = "Todas las anteriores son ciertas";
 answers[94] = choices[94][3];
 units[94] = "105";
 comments[94] = "Id Pregunta: 10139. ";


//  Id pregunta: 10152 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[95]= new Array();
 choices[95][0] = "se crea en el RD 1671/2009 (art. 15) ";
 choices[95][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[95][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[95][3] = "Todas las anteriores son ciertas";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 10152. ";


//  Id pregunta: 10167 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;A qu&eacute; t&eacute;rmino corresponde la siguiente definici&oacute;n: &quot;Dada una relaci&oacute;n, un atributo o grupo de atributos B depende funcionalmente de A, pero no de ning&uacute;n subconjunto de atributos de A&quot;?";
 choices[96]= new Array();
 choices[96][0] = "Dependencia funcional";
 choices[96][1] = "Dependencia multivaluada";
 choices[96][2] = "Dependencia funcional trivial";
 choices[96][3] = "Dependencia funcional completa";
 answers[96] = choices[96][3];
 units[96] = "58";
 comments[96] = "Id Pregunta: 10167. ";


//  Id pregunta: 10443 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 indicar en cu&aacute;l de las siguientes tareas de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n NO participa el Comit&eacute; de Direcci&oacute;n. ";
 choices[97]= new Array();
 choices[97][0] = "Identificaci&oacute;n del Alcance del Plan de Sistemas de Informaci&oacute;n.";
 choices[97][1] = "Comunicaci&oacute;n del Plan de Trabajo.";
 choices[97][2] = "Selecci&oacute;n de la Arquitectura Tecnol&oacute;gica. ";
 choices[97][3] = "Evaluaci&oacute;n y Mejora de la Propuesta.";
 answers[97] = choices[97][2];
 units[97] = "86";
 comments[97] = "Id Pregunta: 10443. Examen TIC A1 2013";


//  Id pregunta: 10518 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En relaci&oacute;n al uso del dominio p&uacute;blico radioel&eacute;ctrico, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[98]= new Array();
 choices[98][0] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico no precisar&aacute; de ning&uacute;n t&iacute;tulo habilitante ";
 choices[98][1] = "El uso especial del dominio p&uacute;blico radioel&eacute;ctrico precisar&aacute; de una autorizaci&oacute;n general. ";
 choices[98][2] = "El derecho de uso especial por radioaficionados u otros sin contenido econ&oacute;mico no precisar&aacute; de t&iacute;tulo habilitante";
 choices[98][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico requerir&aacute; de una concesi&oacute;n administrativa ";
 answers[98] = choices[98][2];
 units[98] = "110";
 comments[98] = "Id Pregunta: 10518. ";


//  Id pregunta: 10529 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Ordene los siguientes dispositivos seg&uacute;n velocidad de transferencia, de menor a mayor:";
 choices[99]= new Array();
 choices[99][0] = "FireWire 800 &lt; USB 2.0 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[99][1] = "USB 2.0 &lt; FireWire 800 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[99][2] = "FireWire 800 &lt; USB 2.0 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 choices[99][3] = "USB 2.0 &lt; FireWire 800 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 answers[99] = choices[99][1];
 units[99] = "46";
 comments[99] = "Id Pregunta: 10529. ";


