/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 32 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes frases identificar&iacute;a a un buen directivo?:";
 choices[0]= new Array();
 choices[0][0] = "Es capaz de controlarlo todo de tal forma que la organizaci&oacute;n no puede pasar ni un d&iacute;a sin &eacute;l";
 choices[0][1] = "No intenta controlarlo todo, e intenta ser uno m&aacute;s en la cadena, la organizaci&oacute;n podr&iacute;a funcionar sin &eacute;l si se ausentara";
 choices[0][2] = "Divide su tiempo entre la operativa diaria y los proyectos de innovaci&oacute;n. Delega gran parte de los trabajos rutinarios, los que son m&aacute;s aburridos y tediosos para no desperdiciar su iniciativa";
 choices[0][3] = "Ha organizado su trabajo de tal forma que puede atender otros temas que no son la operativa diaria. La organizaci&oacute;n podr&iacute;a funcionar un tiempo sin &eacute;l, pero necesita de su capacidad de innovaci&oacute;n";
 answers[0] = choices[0][3];
 units[0] = "25";
 comments[0] = "Id Pregunta: 32. ";


//  Id pregunta: 89 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qui&eacute;nes son miembros del comit&eacute; JTC-1, responsable de la elaboraci&oacute;n de normas de Tratamiento de la Informaci&oacute;n excepto de los servicios p&uacute;blicos de comunicaciones?:";
 choices[1]= new Array();
 choices[1][0] = "Los pa&iacute;ses pertenecientes a la Uni&oacute;n Europea";
 choices[1][1] = "Las instituciones nacionales de normalizaci&oacute;n y la Comisi&oacute;n de la Uni&oacute;n Europea";
 choices[1][2] = "Una representaci&oacute;n del comit&eacute; directivo de la ISO";
 choices[1][3] = "El JTC-1 es una asociaci&oacute;n abierta, no un comit&eacute; de elaboraci&oacute;n de normas";
 answers[1] = choices[1][1];
 units[1] = "42";
 comments[1] = "Id Pregunta: 89. ";


//  Id pregunta: 288 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La comunicaci&oacute;n descendente se da en uno de los modelos de comunicaci&oacute;n siguientes:";
 choices[2]= new Array();
 choices[2][0] = "Comunicaci&oacute;n en rueda";
 choices[2][1] = "Comunicaci&oacute;n en Y";
 choices[2][2] = "Comunicaci&oacute;n en cadena";
 choices[2][3] = "Comunicaci&oacute;n en c&iacute;rculo";
 answers[2] = choices[2][2];
 units[2] = "23";
 comments[2] = "Id Pregunta: 288. ";


//  Id pregunta: 465 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Un activo es, de acuerdo a MAGERIT:";
 choices[3]= new Array();
 choices[3][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[3][1] = "Resultado de una agresi&oacute;n";
 choices[3][2] = "Evento que desencadena un incidente";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = choices[3][3];
 units[3] = "31, 32, 33";
 comments[3] = "Id Pregunta: 465. ";


//  Id pregunta: 557 Año de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes no es una tarea t&iacute;pica de la auditor&iacute;a inform&aacute;tica?";
 choices[4]= new Array();
 choices[4][0] = "Reorganizaci&oacute;n de los recursos humanos del Departamento de Sistemas de Informaci&oacute;n";
 choices[4][1] = "Revisi&oacute;n de aplicaciones";
 choices[4][2] = "Revisi&oacute;n de instalaciones inform&aacute;ticas";
 choices[4][3] = "Revisi&oacute;n de sistemas bajo desarrollo";
 answers[4] = choices[4][0];
 units[4] = "31, 32, 33";
 comments[4] = "Id Pregunta: 557. MAP-B 2004";


//  Id pregunta: 567 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  En el modelo de Anthony de pir&aacute;mide de niveles directivos, en el nivel estrat&eacute;gico. &iquest;Qu&eacute; grado de utilizaci&oacute;n debe tener la informaci&oacute;n interna de la organizaci&oacute;n?";
 choices[5]= new Array();
 choices[5][0] = "Alto. Este tipo de informaci&oacute;n ayudar&aacute; a planificar la estrategia a largo plazo";
 choices[5][1] = "Bajo. Este tipo de informaci&oacute;n deber&iacute;a ser procesado en el nivel medio de la pir&aacute;mide";
 choices[5][2] = "Muy alto. Esta informaci&oacute;n es imprescindible para planificar la estrategia a largo plazo";
 choices[5][3] = "Medio. En funci&oacute;n del tipo de organizaci&oacute;n";
 answers[5] = choices[5][1];
 units[5] = "22";
 comments[5] = "Id Pregunta: 567. ";


//  Id pregunta: 703 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  Un documento XML con DTD es:";
 choices[6]= new Array();
 choices[6][0] = "v&aacute;lido";
 choices[6][1] = "inv&aacute;lido";
 choices[6][2] = "bien formado";
 choices[6][3] = "conformado";
 answers[6] = choices[6][0];
 units[6] = "69";
 comments[6] = "Id Pregunta: 703. Similar a examen TIC MAP A 2004";


//  Id pregunta: 719 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  Para realizar un programa que accede a una base de datos para presentar el resultado de una b&uacute;squeda, se utilizar&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "Sentencias de lectura de los ficheros que componen la base de datos";
 choices[7][1] = "SQL embebido en un lenguaje de programaci&oacute;n";
 choices[7][2] = "SQL din&aacute;mico, ya que es m&aacute;s eficiente que el SQL est&aacute;tico";
 choices[7][3] = "SQL, escrito directamente sobre una sesi&oacute;n de la base de datos";
 answers[7] = choices[7][1];
 units[7] = "58";
 comments[7] = "Id Pregunta: 719. Examen TIC MAP B 2004";


//  Id pregunta: 991 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dentro del proyecto CERES, es posible disponer de tarjetas criptogr&aacute;ficas para entregar a los ciudadanos &iquest;Qu&eacute; funcionalidades proporcionan dichas tarjetas desde el punto de vista de la seguridad?:";
 choices[8]= new Array();
 choices[8][0] = "Autenticaci&oacute;n e integridad, &uacute;nicamente";
 choices[8][1] = "Autenticaci&oacute;n, integridad y confidencialidad, &uacute;nicamente";
 choices[8][2] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en origen";
 choices[8][3] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en destino";
 answers[8] = choices[8][2];
 units[8] = "74";
 comments[8] = "Id Pregunta: 991. ";


//  Id pregunta: 1196 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Java EE es:";
 choices[9]= new Array();
 choices[9][0] = "Un producto";
 choices[9][1] = "Un servicio";
 choices[9][2] = "Un conjunto de especificaciones";
 choices[9][3] = "Nada de lo anterior";
 answers[9] = choices[9][2];
 units[9] = "60,116";
 comments[9] = "Id Pregunta: 1196. ";


//  Id pregunta: 1485 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[10]= new Array();
 choices[10][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[10][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[10][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[10][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[10] = choices[10][2];
 units[10] = "59";
 comments[10] = "Id Pregunta: 1485. JCED - Preparatic XVII";


//  Id pregunta: 1836 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  El comercio electr&oacute;nico que se produce cuando se realiza una venta de un producto por Internet se identifica como:";
 choices[11]= new Array();
 choices[11][0] = "B2B";
 choices[11][1] = "B2C";
 choices[11][2] = "B2A";
 choices[11][3] = "B2G";
 answers[11] = choices[11][1];
 units[11] = "70";
 comments[11] = "Id Pregunta: 1836. ";


//  Id pregunta: 1879 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  La ley de servicios de la sociedad de la informaci&oacute;n y del comercio electr&oacute;nico (LSSICE) es el resultado de la transposici&oacute;n de dos directivas del Parlamento Europeo y del Consejo. &iquest;Cu&aacute;les?";
 choices[12]= new Array();
 choices[12][0] = "Directivas 2000/31/CE y 98/28/CE";
 choices[12][1] = "Directivas 2000/31/CE y 98/27/CE";
 choices[12][2] = "Directivas 2000/31/CE y 97/27/CE";
 choices[12][3] = "Directivas 2001/31/CE y 98/27/CE";
 answers[12] = choices[12][1];
 units[12] = "30";
 comments[12] = "Id Pregunta: 1879. ";


//  Id pregunta: 1895 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  La t&eacute;cnica de ocultar un mensaje secreto dentro de un mensaje ordinario y extraerlo en destino se llama";
 choices[13]= new Array();
 choices[13][0] = "algoritmo de clave secreta";
 choices[13][1] = "bytecode";
 choices[13][2] = "esteganograf&iacute;a";
 choices[13][3] = "spyware";
 answers[13] = choices[13][2];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1895. ";


//  Id pregunta: 2000 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  En Orientaci&oacute;n a Objetos, &iquest;c&oacute;mo se denomina el concepto por el que el an&aacute;lisis se centra en los aspectos esenciales e inherentes de una entidad, ignorarando sus propiedades accidentales?";
 choices[14]= new Array();
 choices[14][0] = "Abstracci&oacute;n";
 choices[14][1] = "Encapsulaci&oacute;n";
 choices[14][2] = "Persistencia";
 choices[14][3] = "Polimorfismo";
 answers[14] = choices[14][0];
 units[14] = "82";
 comments[14] = "Id Pregunta: 2000. Similar a examen TIC SS A 2003";


//  Id pregunta: 2056 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  En METRICA V3, &iquest;en qu&eacute; etapa del proceso de Desarrollo de Sistemas de Informaci&oacute;n se aborda el establecimiento de los requisitos de un sistema?";
 choices[15]= new Array();
 choices[15][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[15][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[15][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[15][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[15] = choices[15][1];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2056. Pregunta Junta Andalucia - A";


//  Id pregunta: 2072 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de estos elementos no forma parte de EFQM?";
 choices[16]= new Array();
 choices[16][0] = "Liderazgo";
 choices[16][1] = "Resultados Empresariales";
 choices[16][2] = "Pol&iacute;ticas y estrategias";
 choices[16][3] = "Valor de las acciones";
 answers[16] = choices[16][3];
 units[16] = "92";
 comments[16] = "Id Pregunta: 2072. ";


//  Id pregunta: 2478 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  Por configuraci&oacute;n se entiende:";
 choices[17]= new Array();
 choices[17][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema.";
 choices[17][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas.";
 choices[17][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos.";
 choices[17][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior.";
 answers[17] = choices[17][2];
 units[17] = "90";
 comments[17] = "Id Pregunta: 2478. ";


//  Id pregunta: 3118 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;A qu&eacute; se denomina Hub en una red local?:";
 choices[18]= new Array();
 choices[18][0] = "A un conector que sirve para unir cada ordenador con el cableado principal";
 choices[18][1] = "A un dispositivo que tiene como funci&oacute;n concentrar el cableado de la red";
 choices[18][2] = "A un dispositivo que tiene como funci&oacute;n convertir cableado en modo balanceado a modo no balanceado";
 choices[18][3] = "A un terminador que tiene como funci&oacute;n adaptar impedancias";
 answers[18] = choices[18][1];
 units[18] = "102";
 comments[18] = "Id Pregunta: 3118. ";


//  Id pregunta: 3467 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  El punto de referencia S del modelo RDSI es:";
 choices[19]= new Array();
 choices[19][0] = "La interfaz para terminales anal&oacute;gicos";
 choices[19][1] = "La interfaz con la l&iacute;nea de transmisi&oacute;n hacia la central p&uacute;blica";
 choices[19][2] = "La interfaz a 4 hilos para equipos RDSI";
 choices[19][3] = "La separaci&oacute;n entre las instalaciones de usuario y los equipos de transmisi&oacute;n, cuando existe TR2";
 answers[19] = choices[19][2];
 units[19] = "103";
 comments[19] = "Id Pregunta: 3467. ";


//  Id pregunta: 3712 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los agentes SNMP son:";
 choices[20]= new Array();
 choices[20][0] = "M&oacute;dulos de software que se ejecutan en los dispositivos gestionados y cuya funci&oacute;n es que la informaci&oacute;n acerca del dispositivo est&eacute; disponible para los sistemas de gesti&oacute;n ";
 choices[20][1] = "Ordenadores dedicados a la tarea de preguntar a los dispositvos SNMP por la informaci&oacute;n relevante y catalogarla en una base de datos";
 choices[20][2] = "Oficiales de ISO que realizan peri&oacute;dicamente auditor&iacute;as en compa&ntilde;&iacute;as que tienen grandes redes gestionadas por SNMP";
 choices[20][3] = "Aplicaciones dise&ntilde;adas para monitorizar la actividad de sistemas gestionados SNMP y alertar al usuario en caso de alg&uacute;n problema";
 answers[20] = choices[20][0];
 units[20] = "104";
 comments[20] = "Id Pregunta: 3712. ";


//  Id pregunta: 4159 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  Que mecanismo proporciona seguridad a DNS";
 choices[21]= new Array();
 choices[21][0] = "Un par nombre/contrase&ntilde;a";
 choices[21][1] = "Un directorio TFTP";
 choices[21][2] = "Un nombre de dominio";
 choices[21][3] = "ninguna de las anteriores";
 answers[21] = choices[21][0];
 units[21] = "113";
 comments[21] = "Id Pregunta: 4159. ";


//  Id pregunta: 4280 Año de creación de pregunta: 2007-01-01
 questions[22]= "23)  Un sistema ERP (Enterprise Resource Planning) b&aacute;sicamente act&uacute;a sobre:";
 choices[22]= new Array();
 choices[22][0] = "La capa de datos (SGBD).";
 choices[22][1] = "La capa de l&oacute;gica de negocio.";
 choices[22][2] = "La capa de presentaci&oacute;n.";
 choices[22][3] = "La capa de comunicaci&oacute;n";
 answers[22] = choices[22][1];
 units[22] = "65";
 comments[22] = "Id Pregunta: 4280. ";


//  Id pregunta: 4378 Año de creación de pregunta: 2007-01-01
 questions[23]= "24)  El objetivo principal del an&aacute;lisis de sistemas es:";
 choices[23]= new Array();
 choices[23][0] = "Determinar el mecanismo de funcionamiento de los m&oacute;dulos.";
 choices[23][1] = "Validar con el cliente el cumplimiento de las especificaciones.";
 choices[23][2] = "Establecer claramente las especificaciones del producto.";
 choices[23][3] = "Integrar los distintos componentes del sistema.";
 answers[23] = choices[23][2];
 units[23] = "80";
 comments[23] = "Id Pregunta: 4378. ";


//  Id pregunta: 4485 Año de creación de pregunta: 2007-01-01
 questions[24]= "25)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet:";
 choices[24]= new Array();
 choices[24][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[24][1] = "Acceden el medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[24][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por Io que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones";
 choices[24][3] = "Nunca acceden Si tras un primer intento se detecto una colisi&oacute;n.";
 answers[24] = choices[24][1];
 units[24] = "99";
 comments[24] = "Id Pregunta: 4485. ";


//  Id pregunta: 4533 Año de creación de pregunta: 2007-01-01
 questions[25]= "26)  En java, &iquest;como se hace referencia al objeto actual sobre el que ha sido Ilamado el m&eacute;todo que se esta ejecutando?";
 choices[25]= new Array();
 choices[25][0] = "Con Ia referencia this.";
 choices[25][1] = "Con la referencia null.";
 choices[25][2] = "No es posible.";
 choices[25][3] = "Invocando el m&eacute;todo get.";
 answers[25] = choices[25][0];
 units[25] = "60";
 comments[25] = "Id Pregunta: 4533. ";


//  Id pregunta: 4804 Año de creación de pregunta: 2007-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes actividades no pertenece al modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman?";
 choices[26]= new Array();
 choices[26][0] = "An&aacute;lisis de inventarios.";
 choices[26][1] = "Ingenier&iacute;a inversa.";
 choices[26][2] = "Ingenier&iacute;a directa.";
 choices[26][3] = "Ingenier&iacute;a relacional.";
 answers[26] = choices[26][3];
 units[26] = "91";
 comments[26] = "Id Pregunta: 4804. examen TIC 2006";


//  Id pregunta: 5055 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  Seg&uacute;n la legislaci&oacute;n vigente sobre la Propiedad Intelectual, &iquest;cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con laduraci&oacute;n de la protecci&oacute;n en la explotaci&oacute;n de los derechos de autor de un programa de ordenador, por la personatitular del derecho, es cierta?";
 choices[27]= new Array();
 choices[27][0] = "Si el autor es una persona natural, la duraci&oacute;n de la protecci&oacute;n son 35 a&ntilde;os desde la publicaci&oacute;n delprograma.";
 choices[27][1] = "Si el autor es una persona jur&iacute;dica, la duraci&oacute;n de la protecci&oacute;n ser&aacute; de 99 a&ntilde;os computados desde el 1 deenero del a&ntilde;o siguiente al de divulgaci&oacute;n del programa";
 choices[27][2] = "La protecci&oacute;n es indefinida en el tiempo, desde la creaci&oacute;n del c&oacute;digo objeto del programa";
 choices[27][3] = "Cuando el autor sea una persona natural, durar&aacute;n toda la vida del autor y setenta a&ntilde;os despu&eacute;s de sumuerte o declaraci&oacute;n de fallecimiento";
 answers[27] = choices[27][3];
 units[27] = "36";
 comments[27] = "Id Pregunta: 5055. Examen TIC A 2007";


//  Id pregunta: 5439 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[28]= new Array();
 choices[28][0] = "Fritz Machlup";
 choices[28][1] = "Charles Babbage";
 choices[28][2] = "Herman Hollerith";
 choices[28][3] = "Howard Aiken";
 answers[28] = choices[28][0];
 units[28] = "21";
 comments[28] = "Id Pregunta: 5439. Castilla y Le&oacute;n";


//  Id pregunta: 5551 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Qu&eacute; considera que NO es una ventaja de la construcci&oacute;n de portales accesibles?";
 choices[29]= new Array();
 choices[29][0] = "Aumento de la usabilidad";
 choices[29][1] = "Facilita la independencia de dispositivo";
 choices[29][2] = "Simplifica el desarrollo";
 choices[29][3] = "Todas las anteriores son correctas.";
 answers[29] = choices[29][3];
 units[29] = "39";
 comments[29] = "Id Pregunta: 5551. ";


//  Id pregunta: 5564 Año de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al Resilient Packet Ring?";
 choices[30]= new Array();
 choices[30][0] = "Es una tecnolog&iacute;a de nivel 2";
 choices[30][1] = "Es el est&aacute;ndar 802.17";
 choices[30][2] = "Est&aacute; basado en una topolog&iacute;a de anillo dual";
 choices[30][3] = "Est&aacute; orientada a servicios s&iacute;ncronos";
 answers[30] = choices[30][3];
 units[30] = "101";
 comments[30] = "Id Pregunta: 5564. ";


//  Id pregunta: 5789 Año de creación de pregunta: 2009-01-01
 questions[31]= "32)  En comunicaciones m&oacute;viles:";
 choices[31]= new Array();
 choices[31][0] = "La raz&oacute;n por la que se usan frecuencia altas para las comunicaciones m&oacute;viles es porque se alcanzan m&aacute;s distancias que con frecuencias inferiores para la misma potencia radiada";
 choices[31][1] = "El sentido de transmisi&oacute;n de estaci&oacute;n m&oacute;vil a estaci&oacute;n terrena suele ocupar la banda inferior de las dos en que se dividen los sistemas TDD.";
 choices[31][2] = "Las bandas de frecuencia m&aacute;s bajas suelen estar asociadas a mayores anchos de banda que las bandas de frecuencias m&aacute;s altas.";
 choices[31][3] = "Todas las anteriores son falsas.";
 answers[31] = choices[31][3];
 units[31] = "108";
 comments[31] = "Id Pregunta: 5789. ";


//  Id pregunta: 5825 Año de creación de pregunta: 2009-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA para el programa IDABC?";
 choices[32]= new Array();
 choices[32][0] = "Es gestionado por el Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE)";
 choices[32][1] = "Se configura como el instrumento clave para llevar a cabo lo previsto en el Plan de Acci&oacute;n eEurope 2005 y sucesivos sobre el desarrollo de servicios paneuropeos";
 choices[32][2] = "Ejecuta lo previsto en la Decisi&oacute;n 2004/387/CE del Consejo UE y PE";
 choices[32][3] = "El proyecto complementario IDABD extiende esta normativa a particulares y empresas";
 answers[32] = choices[32][3];
 units[32] = "40";
 comments[32] = "Id Pregunta: 5825. MAP 2008 A1";


//  Id pregunta: 5827 Año de creación de pregunta: 2009-01-01
 questions[33]= "34)  Suponga que recibe una firma electr&oacute;nica avanzada de tipo XAdES-T sin una asociaci&oacute;n espec&iacute;fica a ninguna pol&iacute;tica de firma concreta y que ha verificado con &eacute;xito el formato de la firma y su integridad. En esta situaci&oacute;n, la evaluaci&oacute;n de la validez de dicha firma electr&oacute;nica seg&uacute;n la norma ETSI TS 101 903 v1.3.2 da como resultado:";
 choices[33]= new Array();
 choices[33][0] = "Firma inv&aacute;lida";
 choices[33][1] = "Validaci&oacute;n incompleta de la firma";
 choices[33][2] = "Firma v&aacute;lida";
 choices[33][3] = "Firma suspendida";
 answers[33] = choices[33][1];
 units[33] = "30";
 comments[33] = "Id Pregunta: 5827. MAP 2008 A1";


//  Id pregunta: 6069 Año de creación de pregunta: 2010-01-01
 questions[34]= "35)  Sobre la representaci&oacute;n del conocimiento:";
 choices[34]= new Array();
 choices[34][0] = "Los algoritmos gen&eacute;ticos usan representaci&oacute;n param&eacute;trica";
 choices[34][1] = "Las redes neuronales usan representaci&oacute;n simb&oacute;lica";
 choices[34][2] = "Las dos respuestas anteriores son correctas";
 choices[34][3] = "Todas las respuestas anteriores no son correctas";
 answers[34] = choices[34][0];
 units[34] = "63,64";
 comments[34] = "Id Pregunta: 6069. ";


//  Id pregunta: 6080 Año de creación de pregunta: 2010-01-01
 questions[35]= "36)  La gesti&oacute;n de los recursos humanos del proyecto incluye lo siguiente:";
 choices[35]= new Array();
 choices[35][0] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[35][1] = "Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[35][2] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto.";
 choices[35][3] = "Ninguna de las anteriores.";
 answers[35] = choices[35][0];
 units[35] = "27";
 comments[35] = "Id Pregunta: 6080. ";


//  Id pregunta: 6105 Año de creación de pregunta: 2010-01-01
 questions[36]= "37)  Una organizaci&oacute;n dispone para numerar su red del prefijo 192.168.1.0/24. Entonces:";
 choices[36]= new Array();
 choices[36][0] = "Podr&iacute;a dar a una de sus subredes el prefijo 190.18.1.0/20.";
 choices[36][1] = "Podr&iacute;a generar 16 prefijos, cada uno con capacidad para numerar 14 m&aacute;quinas.";
 choices[36][2] = "Podr&iacute;a generar 8 prefijos, cada uno con capacidad para numerar 254 m&aacute;quinas.";
 choices[36][3] = "Podr&iacute;a generar 4 prefijos, cada uno con capacidad para numerar 126 m&aacute;quinas.";
 answers[36] = choices[36][1];
 units[36] = "100";
 comments[36] = "Id Pregunta: 6105. TIC A 2009";


//  Id pregunta: 6149 Año de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;C&oacute;mo se representan las relaciones &quot;ficticias&quot; en el M&eacute;todo de Diagramaci&oacute;n por Flechas (ADM)?";
 choices[37]= new Array();
 choices[37][0] = "Mediante una l&iacute;nea de puntos";
 choices[37][1] = "En ADM no existe el concepto de relaciones &quot;ficticias&quot;";
 choices[37][2] = "Mediante una flecha convexa";
 choices[37][3] = "Mediante una flecha c&oacute;ncava";
 answers[37] = choices[37][0];
 units[37] = "28";
 comments[37] = "Id Pregunta: 6149. ";


//  Id pregunta: 6182 Año de creación de pregunta: 2010-01-01
 questions[38]= "39)  Entre las funciones de BPEL no se encuentra:";
 choices[38]= new Array();
 choices[38][0] = "Definir una interpretaci&oacute;n gr&aacute;fica de procesos.";
 choices[38][1] = "Definir procesos de negocio.";
 choices[38][2] = "Construir sobre servicios Web operaciones que participan en procedimientos empresariales.";
 choices[38][3] = "Orquestar servicios Web.";
 answers[38] = choices[38][0];
 units[38] = "71";
 comments[38] = "Id Pregunta: 6182. ";


//  Id pregunta: 6283 Año de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Qu&eacute; &oacute;rganos no suelen ser necesarios a la hora de realizar una planificaci&oacute;n y direcci&oacute;n estrat&eacute;gica?";
 choices[39]= new Array();
 choices[39][0] = "Los proveedores";
 choices[39][1] = "El equipo de proyecto";
 choices[39][2] = "El comit&eacute; de direcci&oacute;n";
 choices[39][3] = "Un grupo de usuarios";
 answers[39] = choices[39][0];
 units[39] = "77";
 comments[39] = "Id Pregunta: 6283. ";


//  Id pregunta: 6301 Año de creación de pregunta: 2001-01-01
 questions[40]= "41)  &iquest;Qu&eacute; dos tipos de atributos puede tener un objeto?";
 choices[40]= new Array();
 choices[40][0] = "Atributos de clase y atributos de instancia";
 choices[40][1] = "Atributos visibles y atributos ciegos";
 choices[40][2] = "Atributos heredados y atributos no heredados";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][0];
 units[40] = "82";
 comments[40] = "Id Pregunta: 6301. ";


//  Id pregunta: 6341 Año de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Qu&eacute; es un widget?";
 choices[41]= new Array();
 choices[41][0] = "Una aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes relevantes para crear un nuevo servicio en base a ellas, normalmente empleando Servicios Web y APIs p&uacute;blicas. ";
 choices[41][1] = "Una red inform&aacute;tica entre pares, sin servidores centralizados, donde se puede compartir informaci&oacute;n de cualquier tipo.";
 choices[41][2] = "Una peque&ntilde;a aplicaci&oacute;n o m&oacute;dulo que realiza una funci&oacute;n concreta, generalmente de tipo visual, dentro de otras aplicaciones o sistemas operativos.";
 choices[41][3] = "Un enlace fijo que no var&iacute;a con el tiempo.";
 answers[41] = choices[41][2];
 units[41] = "120";
 comments[41] = "Id Pregunta: 6341. ";


//  Id pregunta: 6453 Año de creación de pregunta: 2010-01-01
 questions[42]= "43)  &iquest;Qu&eacute; m&eacute;todo de HTTP se debe utilizar para comprobar la validez de una p&aacute;gina sin que la llamada retorne el cuerpo del mensaje?";
 choices[42]= new Array();
 choices[42][0] = "GET";
 choices[42][1] = "HEAD";
 choices[42][2] = "POST";
 choices[42][3] = "SERVICE";
 answers[42] = choices[42][1];
 units[42] = "112";
 comments[42] = "Id Pregunta: 6453. Castilla La Mancha 2009";


//  Id pregunta: 6542 Año de creación de pregunta: 2010-01-01
 questions[43]= "44)  Un usuario de Kerberos";
 choices[43]= new Array();
 choices[43][0] = "Recibe un ticket para garantizar el acceso TGT";
 choices[43][1] = "El ticket permite al usuario pedir acceso a los distintos recursos";
 choices[43][2] = "El servicio de generaci&oacute;n de tickets TGS genera los tickets con las claves de sesi&oacute;n.";
 choices[43][3] = "Todas las respuestas anteriores son correctas";
 answers[43] = choices[43][3];
 units[43] = "111";
 comments[43] = "Id Pregunta: 6542. ";


//  Id pregunta: 6586 Año de creación de pregunta: 2010-01-01
 questions[44]= "45)  Los ficheros de los operadores de comunicaciones electr&oacute;nicas, respecto de los datos de tr&aacute;fico y localizaci&oacute;n, de acuerdo a la normativa vigente de protecci&oacute;n de datos deben aplicar:";
 choices[44]= new Array();
 choices[44][0] = "S&oacute;lo medidas de seguridad de nivel medio";
 choices[44][1] = "S&oacute;lo medidas de seguridad de nivel medio y b&aacute;sico";
 choices[44][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y deben disponer de un registro de accesos";
 choices[44][3] = "Todas las respuestas anteriores son incorrectas";
 answers[44] = choices[44][2];
 units[44] = "29";
 comments[44] = "Id Pregunta: 6586. ";


//  Id pregunta: 6620 Año de creación de pregunta: 2010-01-01
 questions[45]= "46)  Seg&uacute;n M&eacute;trica, las Interfaces son:";
 choices[45]= new Array();
 choices[45][0] = "4: Gesti&oacute;n de Proyectos; Seguridad y Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad; Gesti&oacute;n de Configuraci&oacute;n";
 choices[45][1] = "3: Gesti&oacute;n de Proyectos; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 choices[45][2] = "3: Gesti&oacute;n de Proyectos; Aseguramiento de la Calidad  y Gesti&oacute;n de Riesgos; Gesti&oacute;n de Configuraci&oacute;n";
 choices[45][3] = "4: Gesti&oacute;n de Proyectos; Seguridad; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 answers[45] = choices[45][0];
 units[45] = "86";
 comments[45] = "Id Pregunta: 6620. ";


//  Id pregunta: 6641 Año de creación de pregunta: 2010-01-01
 questions[46]= "47)  Dentro de las t&eacute;cnicas para medir la complejidad del software NO se encuentra:";
 choices[46]= new Array();
 choices[46][0] = "La t&eacute;cnica de McCabe";
 choices[46][1] = "La t&eacute;cnica de McCall";
 choices[46][2] = "La t&eacute;cnica de Halstead";
 choices[46][3] = "La t&eacute;cnica de Bang";
 answers[46] = choices[46][1];
 units[46] = "88";
 comments[46] = "Id Pregunta: 6641. ";


//  Id pregunta: 7283 Año de creación de pregunta: 2010-01-01
 questions[47]= "48)  &quot;&iquest;Cu&aacute;l de las siguientes no es una de las tres condiciones de Popek y Godbergh que debe cumplir toda arquitectura inform&aacute;tica para soportar adecuadamente &quot;&quot;virtualizaci&oacute;n&quot;&quot; de sistemas?&quot;";
 choices[47]= new Array();
 choices[47][0] = "Eficiencia";
 choices[47][1] = "Control de Recursos";
 choices[47][2] = "Equivalencia";
 choices[47][3] = "Escalabilidad";
 answers[47] = choices[47][3];
 units[47] = "119";
 comments[47] = "Id Pregunta: 7283. Examen TIC B 2009";


//  Id pregunta: 7302 Año de creación de pregunta: 2010-01-01
 questions[48]= "49)  Indique cu&aacute;l de las siguientes NO es una t&eacute;cnica de modelado ac&uacute;stico empleada para reconocimiento habla: ";
 choices[48]= new Array();
 choices[48][0] = "Redes de Markov";
 choices[48][1] = "Modelos ocultos de Markov";
 choices[48][2] = "Redes neuronales";
 choices[48][3] = "Todas se emplean en reconocimiento autom&aacute;tico del habla";
 answers[48] = choices[48][0];
 units[48] = "94";
 comments[48] = "Id Pregunta: 7302. ";


//  Id pregunta: 7327 Año de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;En qu&eacute; categor&iacute;as se dividen los miembros de ISO?";
 choices[49]= new Array();
 choices[49][0] = "Natos, Correspondientes y Suscritos";
 choices[49][1] = "Natos, Asociados y Suscritos";
 choices[49][2] = "Natos, Asociados, Correspondientes y Suscritos";
 choices[49][3] = "Natos, de Pleno Derecho y Asociados";
 answers[49] = choices[49][0];
 units[49] = "42";
 comments[49] = "Id Pregunta: 7327. ";


//  Id pregunta: 7353 Año de creación de pregunta: 2010-01-01
 questions[50]= "51)  Si para un determinado criterio, el decisor establece como umbral de saciedad 50 y como nivel de satisfacci&oacute;n 10:";
 choices[50]= new Array();
 choices[50][0] = "No ser&aacute;n tenidas en cuenta las ofertas que ofrezcan menos de 50";
 choices[50][1] = "Solo ser&aacute;n tenidas en cuenta las ofertas est&eacute;n entre 10 y 50";
 choices[50][2] = "Es un criterio a minimizar";
 choices[50][3] = "Una oferta que ofrezca 50 y otra que ofrezca 60 tendr&aacute;n la misma puntuaci&oacute;n en ese criterio";
 answers[50] = choices[50][3];
 units[50] = "34";
 comments[50] = "Id Pregunta: 7353. ";


//  Id pregunta: 8267 Año de creación de pregunta: 2011-01-01
 questions[51]= "52)  Referente a la pila de protocolos de la familia ITU H.323 para el tr&aacute;fico multimedia sobre redes IP, la afirmaci&oacute;n correcta es:";
 choices[51]= new Array();
 choices[51][0] = "Requiere el uso del protocolo Registration, Admission and Status (RAS) entre los terminales.";
 choices[51][1] = "Emplea el protocolo TCP/IP para el env&iacute;o de la informaci&oacute;n multimedia pues UDP no garantiza el control de flujo y errores.";
 choices[51][2] = "Emplea Real-Time Control Protocol (RTCP) para la se&ntilde;alizaci&oacute;n (establecimiento, control y finalizaci&oacute;n) de llamadas.";
 choices[51][3] = "Emplea el protocolo T.120 para la inclusi&oacute;n de tr&aacute;fico de datos.";
 answers[51] = choices[51][3];
 units[51] = "117";
 comments[51] = "Id Pregunta: 8267. Examen TIC A1 2010";


//  Id pregunta: 8382 Año de creación de pregunta: 2011-01-01
 questions[52]= "53)  Una desventaja de la topolog&iacute;a f&iacute;sica de estrella es que:";
 choices[52]= new Array();
 choices[52][0] = "Requiere m&aacute;s cable que la topolog&iacute;a de bus.";
 choices[52][1] = "Se requieren terminadores.";
 choices[52][2] = "Es dif&iacute;cil conectar nuevos nodos a la red,";
 choices[52][3] = "Toda la red se caer&iacute;a si hubiera una ruptura en el cable principal.";
 answers[52] = choices[52][0];
 units[52] = "102";
 comments[52] = "Id Pregunta: 8382. Examen TIC A2 2010";


//  Id pregunta: 8531 Año de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Qu&eacute; es un &quot;splitter&quot;. en el entorno de la tecnolog&iacute;a ADSL?";
 choices[53]= new Array();
 choices[53][0] = "Es un filtro separador de bandas en casa del abonado.";
 choices[53][1] = "Es un dispositivo opcional de mejora de calidad, &uacute;nicamente es Imprescindible en el caso de ADSL-lite.";
 choices[53][2] = "Es un efecto indeseable en la linea consistente en el acoplamiento inductivo y capacitivo entre diferentes hilos dentro del mismo mazo o mazos adyacentes.";
 choices[53][3] = "Es el mecanismo mediante el cual el operador establecido ha de ceder al nuevo operador a conexi&oacute;n a &quot;su&quot; abonado";
 answers[53] = choices[53][0];
 units[53] = "107";
 comments[53] = "Id Pregunta: 8531. Examen TIC A2 2010 interna";


//  Id pregunta: 8618 Año de creación de pregunta: 2011-01-01
 questions[54]= "55)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[54]= new Array();
 choices[54][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[54][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[54][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[54][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[54] = choices[54][2];
 units[54] = "57,58";
 comments[54] = "Id Pregunta: 8618. Examen TIC A2 2010 interna";


//  Id pregunta: 8619 Año de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Qu&eacute; tareas de mantenimiento contempla M&eacute;trica v3 en su proceso MSI?:";
 choices[55]= new Array();
 choices[55][0] = "Correctivo, evolutivo y adaptativo";
 choices[55][1] = "Correctivo, evolutivo, adaptativo y perfectivo";
 choices[55][2] = "Correctivo y evolutivo";
 choices[55][3] = "Correctivo, evolutivo y perfectivo.";
 answers[55] = choices[55][2];
 units[55] = "86";
 comments[55] = "Id Pregunta: 8619. Examen TIC A2 2010 interna";


//  Id pregunta: 8652 Año de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo de Software?";
 choices[56]= new Array();
 choices[56][0] = "Se basa en las Historias de Usuario.";
 choices[56][1] = "Proceso dirigido por casos de uso.";
 choices[56][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[56][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[56] = choices[56][1];
 units[56] = "79";
 comments[56] = "Id Pregunta: 8652. Examen TIC A2 2010 interna";


//  Id pregunta: 8661 Año de creación de pregunta: 2011-01-01
 questions[57]= "58)  De las siguientes, &iquest;cu&aacute;l no es una funci&oacute;n realizada por los mensajes enviados por el protocolo ICMP?";
 choices[57]= new Array();
 choices[57][0] = "Control de flujo";
 choices[57][1] = "Detecci&oacute;n de destinos inalcanzables";
 choices[57][2] = "Encapsulaci&oacute;n de datagramas";
 choices[57][3] = "Redirecci&oacute;n de rutas";
 answers[57] = choices[57][2];
 units[57] = "100";
 comments[57] = "Id Pregunta: 8661. Examen UPM A2 2011";


//  Id pregunta: 8799 Año de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[58]= new Array();
 choices[58][0] = "CLRUN";
 choices[58][1] = "CLRNET";
 choices[58][2] = "COLR";
 choices[58][3] = "CLR";
 answers[58] = choices[58][3];
 units[58] = "59, 115";
 comments[58] = "Id Pregunta: 8799. Examen UPM A2 2011";


//  Id pregunta: 8808 Año de creación de pregunta: 2011-01-01
 questions[59]= "60)  El est&aacute;ndar de e-learning participado por el IEEE, que incluye un modelo de referencia para objetos software educativos compartibles, un entorno de ejecuci&oacute;n y un modelo de agregaci&oacute;n de contenido es:";
 choices[59]= new Array();
 choices[59][0] = "AEIC.";
 choices[59][1] = "LOM.";
 choices[59][2] = "LCMS.";
 choices[59][3] = "SCORM.";
 answers[59] = choices[59][3];
 units[59] = "66";
 comments[59] = "Id Pregunta: 8808. Examen UPM A2 2011";


//  Id pregunta: 8846 Año de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Con qu&eacute; campo de la inform&aacute;tica se relaciona SHA-2?";
 choices[60]= new Array();
 choices[60][0] = "Data Mining";
 choices[60][1] = "La Criptograf&iacute;a";
 choices[60][2] = " El e-learning";
 choices[60][3] = "La gesti&oacute;n de versiones";
 answers[60] = choices[60][1];
 units[60] = "73,74";
 comments[60] = "Id Pregunta: 8846. Examen UC3M 2010";


//  Id pregunta: 8878 Año de creación de pregunta: 2011-01-01
 questions[61]= "62)  La cl&aacute;usula HAVING de SQL:";
 choices[61]= new Array();
 choices[61][0] = "Establece un filtro para seleccionar las filas que se usar&aacute;n en la consulta.";
 choices[61][1] = "Precisa de la presencia de la cl&aacute;usula WHERE en la sentencia.";
 choices[61][2] = "Establece un filtro que se aplica a las tablas agrupadas.";
 choices[61][3] = "Establece una condici&oacute;n que deben cumplir las filas.";
 answers[61] = choices[61][2];
 units[61] = "57, 58";
 comments[61] = "Id Pregunta: 8878. Examen UPM A2 2011";


//  Id pregunta: 8885 Año de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de elementos fotosensibles?";
 choices[62]= new Array();
 choices[62][0] = "CCD";
 choices[62][1] = "PTN";
 choices[62][2] = "CIS";
 choices[62][3] = "CMOS";
 answers[62] = choices[62][1];
 units[62] = "93";
 comments[62] = "Id Pregunta: 8885. ";


//  Id pregunta: 8920 Año de creación de pregunta: 2011-01-01
 questions[63]= "64)  Las siglas SOAP significan";
 choices[63]= new Array();
 choices[63][0] = "Simple Object Access Protocol, o protocolo simple de acceso a objetos";
 choices[63][1] = "Single Object Access Protocol, o protocolo de acceso a objetos individuales";
 choices[63][2] = "Single Object Authorization Protocolo, o protocolo de autorizaci&oacute;n de objetos individuales";
 choices[63][3] = "Sevice Oriented Access Protocol, o protocolo de acceso orientado a servicios";
 answers[63] = choices[63][0];
 units[63] = "51";
 comments[63] = "Id Pregunta: 8920. Operador Ayto. Madrid 2010";


//  Id pregunta: 8933 Año de creación de pregunta: 2011-01-01
 questions[64]= "65)  La &uacute;ltima versi&oacute;n de ISO 9004 es:";
 choices[64]= new Array();
 choices[64][0] = "ISO 9004:2005";
 choices[64][1] = "ISO 9004:2000";
 choices[64][2] = "ISO 9004:2009";
 choices[64][3] = "ISO 9004:2008";
 answers[64] = choices[64][2];
 units[64] = "92";
 comments[64] = "Id Pregunta: 8933. ";


//  Id pregunta: 8967 Año de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[65]= new Array();
 choices[65][0] = "Lisp.";
 choices[65][1] = "Perl.";
 choices[65][2] = "Php.";
 choices[65][3] = "Python.";
 answers[65] = choices[65][3];
 units[65] = "80,81,82,83,84";
 comments[65] = "Id Pregunta: 8967. ";


//  Id pregunta: 8973 Año de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Qu&eacute; nuevo elemento se encuentra en ITIL v3 que no estaba en ITIL v2?";
 choices[66]= new Array();
 choices[66][0] = "Gesti&oacute;n Financiera";
 choices[66][1] = "Gesti&oacute;n de Cambios";
 choices[66][2] = "Gesti&oacute;n de incidencias";
 choices[66][3] = "Gesti&oacute;n de seguridad";
 answers[66] = choices[66][3];
 units[66] = "98";
 comments[66] = "Id Pregunta: 8973. ";


//  Id pregunta: 8989 Año de creación de pregunta: 2011-01-01
 questions[67]= "68)  Se&ntilde;ale la respuesta falsa respecto del Plan General de Garant&iacute;a de Calidad promovido por CSAE";
 choices[67]= new Array();
 choices[67][0] = "Es un documento impreso";
 choices[67][1] = "Consta de cuatro fasc&iacute;culos";
 choices[67][2] = "Orientada a cualquier ambito de las AAPP";
 choices[67][3] = "Requiere autorizaci&oacute;n para su empleo";
 answers[67] = choices[67][3];
 units[67] = "87";
 comments[67] = "Id Pregunta: 8989. ";


//  Id pregunta: 9070 Año de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Cu&aacute;ntas gu&iacute;as de accesibilidad del WAI existen actualmente (abril de 2013)?";
 choices[68]= new Array();
 choices[68][0] = "Tres: ATAG, WCAG y UUAG. ";
 choices[68][1] = "Seis: ATAG, WCAG, UAAG, XAG, FCAG y WAI-RIA. ";
 choices[68][2] = "Cuatro: ATAG, WCAG, UAAG y XAG. ";
 choices[68][3] = "Cinco: ATAG, WCAG, UAAG, XAG y WAI-RIA. ";
 answers[68] = choices[68][3];
 units[68] = "39";
 comments[68] = "Id Pregunta: 9070. ";


//  Id pregunta: 9092 Año de creación de pregunta: 2013-01-01
 questions[69]= "70)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[69]= new Array();
 choices[69][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[69][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[69][2] = "Toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[69][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[69] = choices[69][2];
 units[69] = "36";
 comments[69] = "Id Pregunta: 9092. ";


//  Id pregunta: 9175 Año de creación de pregunta: 2013-01-01
 questions[70]= "71)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA respecto a la Ley 34/2002:";
 choices[70]= new Array();
 choices[70][0] = "Los operadores de redes y servicios de comunicaciones electr&oacute;nicas, los proveedores de acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un per&iacute;odo m&aacute;ximo de doce meses.";
 choices[70][1] = "Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en el lugar en que el prestador de servicios tenga establecido su domicilio fiscal.";
 choices[70][2] = "El Real Decreto-ley 13/2012 traspone al ordenamiento jur&iacute;dico espa&ntilde;ol la Directiva 2009/136/CE que modifica la anterior Directiva 2002/58/CE.";
 choices[70][3] = "Las comunicaciones comerciales y las ofertas promocionales se regir&aacute;n en todos sus t&eacute;rminos por la Ley 34/2002";
 answers[70] = choices[70][2];
 units[70] = "70";
 comments[70] = "Id Pregunta: 9175. ";


//  Id pregunta: 9201 Año de creación de pregunta: 2013-01-01
 questions[71]= "72)  El lenguaje de expresi&oacute;n de derechos REL se basa en contenedores de grants. Indica cual de los siguientes elementos no forma parte de un grant.";
 choices[71]= new Array();
 choices[71][0] = "Principal.";
 choices[71][1] = "Right.";
 choices[71][2] = "Resource.";
 choices[71][3] = "Constraints.";
 answers[71] = choices[71][3];
 units[71] = "37";
 comments[71] = "Id Pregunta: 9201. ";


//  Id pregunta: 9232 Año de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; es Jelly Bean?";
 choices[72]= new Array();
 choices[72][0] = "Sistema operativo de Apple para dispositivos m&oacute;viles";
 choices[72][1] = "Sistema operativo de Apple para ordenadores de sobremesa.";
 choices[72][2] = "Una versi&oacute;n de Android.";
 choices[72][3] = "No existe.";
 answers[72] = choices[72][2];
 units[72] = "52";
 comments[72] = "Id Pregunta: 9232. ";


//  Id pregunta: 9236 Año de creación de pregunta: 2013-01-01
 questions[73]= "74)  Antes de la serie 2.6 del kernel de linux, &iquest;qu&eacute; versiones del n&uacute;cleo existieron?";
 choices[73]= new Array();
 choices[73][0] = "Versi&oacute;n de producci&oacute;n y de desarrollo.";
 choices[73][1] = "Versi&oacute;n estable hasta el momento y versiones experimentales que se usaban para programar, comprobar y verificar nuevas caracter&iacute;sticas.";
 choices[73][2] = "La versi&oacute;n estable era el resultado final de las versiones de desarrollo o experimentales.";
 choices[73][3] = "Todas son correctas.";
 answers[73] = choices[73][3];
 units[73] = "53";
 comments[73] = "Id Pregunta: 9236. ";


//  Id pregunta: 9333 Año de creación de pregunta: 2013-01-01
 questions[74]= "75)  Se&ntilde;ale la respuesta";
 choices[74]= new Array();
 choices[74][0] = "El subsistema vertical conecta el distribuidor de campus con los puntos de transicion (PT)";
 choices[74][1] = "El subsistema horizontal parte de los cuadros de distribucion de planta y llega a las rosetas de conexion.";
 choices[74][2] = "El subsistema horizontal conecta los puntos de transicion (PT) entre s&iacute;";
 choices[74][3] = "El cableado de campus comienza en los distribuidores de planta.";
 answers[74] = choices[74][1];
 units[74] = "99";
 comments[74] = "Id Pregunta: 9333. ";


//  Id pregunta: 9352 Año de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es la velocidad disponible de un acceso b&aacute;sico RDSI en Europa?";
 choices[75]= new Array();
 choices[75][0] = "1544";
 choices[75][1] = "64";
 choices[75][2] = "2048";
 choices[75][3] = "1024";
 answers[75] = choices[75][2];
 units[75] = "103";
 comments[75] = "Id Pregunta: 9352. Pruebas selectivas para Gesti&oacute;n de Sistemas e Inform&aacute;tica de la UPM 2011. Libre";


//  Id pregunta: 9402 Año de creación de pregunta: 2013-01-01
 questions[76]= "77)  Una red Frame Relay:";
 choices[76]= new Array();
 choices[76][0] = "Es adecuada para la transmisi&oacute;n de voz.";
 choices[76][1] = "Gestiona tr&aacute;fico por prioridades.";
 choices[76][2] = "Permite establecer circuitos virtuales permanentes.";
 choices[76][3] = "Ninguna de las anteriores";
 answers[76] = choices[76][2];
 units[76] = "109";
 comments[76] = "Id Pregunta: 9402. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9440 Año de creación de pregunta: 2013-01-01
 questions[77]= "78)  Qu&eacute; diagrama UML muestra el flujo de acciones en curso, no necesariamente at&oacute;micas, en relaci&oacute;n a la estructura de estados del sistema?:";
 choices[77]= new Array();
 choices[77][0] = "Diagrama de secuencia.";
 choices[77][1] = "Diagrama de estados.";
 choices[77][2] = "Diagrama de actividad.";
 choices[77][3] = "Diagrama de colaboraci&oacute;n.";
 answers[77] = choices[77][2];
 units[77] = "82";
 comments[77] = "Id Pregunta: 9440. Examen AGE TIC A1 2011";


//  Id pregunta: 9489 Año de creación de pregunta: 2013-01-01
 questions[78]= "79)  Las entrevistas son una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos. &iquest;Cu&aacute;l de las siguientes no es una fase de las mismas?";
 choices[78]= new Array();
 choices[78][0] = "Identificaci&oacute;n de candidatos";
 choices[78][1] = "Contacto con candidatos para fijar entrevista";
 choices[78][2] = "Preparaci&oacute;n";
 choices[78][3] = "Ejecuci&oacute;n de la entrevista";
 answers[78] = choices[78][1];
 units[78] = "78";
 comments[78] = "Id Pregunta: 9489. ";


//  Id pregunta: 9544 Año de creación de pregunta: 2013-01-01
 questions[79]= "80)  Los certificados incorporados al DNI-e:";
 choices[79]= new Array();
 choices[79][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[79][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[79][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[79][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[79] = choices[79][3];
 units[79] = "30";
 comments[79] = "Id Pregunta: 9544. Examen TIC A1 2011";


//  Id pregunta: 9574 Año de creación de pregunta: 2013-01-01
 questions[80]= "81)  Al hablar de software libre y de su uso en la Administraci&oacute;n se&ntilde;ale la frase correcta:";
 choices[80]= new Array();
 choices[80][0] = "La Ley 11/2007 obliga a las administraciones p&uacute;blicas a poner las aplicaciones de cuyos derechos de propiedad son titulares a disposici&oacute;n de cualquier otra Administraci&oacute;n Auton&oacute;mica.";
 choices[80][1] = "Una licencia de c&oacute;digo de fuente abierta seg&uacute;n la FSF obliga a hacer p&uacute;blicas todas las mejoras, poni&eacute;ndolas a disposici&oacute;n de la comunidad.";
 choices[80][2] = "Una licencia LGPL no restringe la posibilidad de incluir el software protegido por la licencia en productos protegidos por licencias no GPL.";
 choices[80][3] = "El Real Decreto 4/2010 del Esquema Nacional de Interoperabilidad prev&eacute; un cat&aacute;logo &uacute;nicamente de est&aacute;ndares abiertos de uso obligatorio por las administraciones p&uacute;blicas.";
 answers[80] = choices[80][2];
 units[80] = "43, 61, 62";
 comments[80] = "Id Pregunta: 9574. Examen TIC A1 2011";


//  Id pregunta: 9641 Año de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[81]= new Array();
 choices[81][0] = "a) Publicidad y transparencia";
 choices[81][1] = "b) Salvaguarda de la libre competencia";
 choices[81][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[81][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[81] = choices[81][3];
 units[81] = "41";
 comments[81] = "Id Pregunta: 9641. ";


//  Id pregunta: 9855 Año de creación de pregunta: 2014-01-01
 questions[82]= "83)  En lo que se refiere a las Firmas Digitales, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa? ";
 choices[82]= new Array();
 choices[82][0] = "Si una firma digital es v&aacute;lida para un documento es v&aacute;lida para otro distinto. ";
 choices[82][1] = "S&oacute;lo puede ser generada por su leg&iacute;timo titular.";
 choices[82][2] = "Es p&uacute;blicamente verificable.";
 choices[82][3] = "La forma m&aacute;s extendida de calcular firmas digitales consiste en emplear una combinaci&oacute;n de cifrado asim&eacute;trico y funciones resumen. ";
 answers[82] = choices[82][0];
 units[82] = "111";
 comments[82] = "Id Pregunta: 9855. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9867 Año de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;A qui&eacute;n corresponde la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n de acuerdo a la Ley 9/2014, General de Telecomunicaciones?";
 choices[83]= new Array();
 choices[83][0] = "Al Gobierno.";
 choices[83][1] = "A la Comisi&oacute;n del Mercado de las Telecomunicaciones";
 choices[83][2] = "Al Ministerio de Ciencia y Tecnolog&iacute;a (hoy, Ministerio de Industria, Energ&iacute;a y Turismo).";
 choices[83][3] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 answers[83] = choices[83][0];
 units[83] = "110";
 comments[83] = "Id Pregunta: 9867. TIC A1, Examen 2013";


//  Id pregunta: 9903 Año de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ale la respuesta correcta relativa al modelo de ciclo de vida en espiral:";
 choices[84]= new Array();
 choices[84][0] = "La dimensi&oacute;n radial mide el grado de avance del proyecto en cada fase y la dimensi&oacute;n angular el coste.";
 choices[84][1] = "Cada ciclo consta de 5 actividades: Determinar objetivos, an&aacute;lisis del riesgo, estimar, planificar y desarrollo-pruebas.";
 choices[84][2] = "Fue propuesto inicialmente por Rutherford.";
 choices[84][3] = "En sistemas peque&ntilde;os es un modelo poco operativo y se desaconseja su uso. Exige de gran experiencia en an&aacute;lisis y resoluci&oacute;n de riesgos.";
 answers[84] = choices[84][3];
 units[84] = "76";
 comments[84] = "Id Pregunta: 9903. TIC A2, Examen 2013";


//  Id pregunta: 9905 Año de creación de pregunta: 2014-01-01
 questions[85]= "86)  La finalidad principal de la Gesti&oacute;n de Proyectos seg&uacute;n M&eacute;trica v3 es la planificaci&oacute;n, el seguimiento y control de:";
 choices[85]= new Array();
 choices[85][0] = "Las actividades y de los recursos humanos que intervienen en el desarrollo de un Sistema de Informaci&oacute;n (S.I).";
 choices[85][1] = "Las actividades que intervienen en el desarrollo de un S.I.";
 choices[85][2] = "Las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 choices[85][3] = "Los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 answers[85] = choices[85][2];
 units[85] = "86";
 comments[85] = "Id Pregunta: 9905. TIC A2, Examen 2013";


//  Id pregunta: 9919 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  Dentro del dise&ntilde;o conceptual de datos, en una jerarqu&iacute;a de generalizaci&oacute;n se dice que un subconjunto (caso particular de generalizaci&oacute;n con una sola entidad como subentidad) siempre es una jerarqu&iacute;a:";
 choices[86]= new Array();
 choices[86][0] = "Total y exclusiva.";
 choices[86][1] = "Parcial y superpuesta.";
 choices[86][2] = "Parcial y exclusiva.";
 choices[86][3] = "Total y superpuesta.";
 answers[86] = choices[86][2];
 units[86] = "58";
 comments[86] = "Id Pregunta: 9919. TIC A2, Examen 2013";


//  Id pregunta: 9938 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[87]= new Array();
 choices[87][0] = "Para mejorar la resistencia a las interferencias.";
 choices[87][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[87][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[87][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[87] = choices[87][0];
 units[87] = "107, 108";
 comments[87] = "Id Pregunta: 9938. TIC A1, Examen 2013";


//  Id pregunta: 9959 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[88]= new Array();
 choices[88][0] = "InProc";
 choices[88][1] = "StateServer";
 choices[88][2] = "ClusterServer";
 choices[88][3] = "SqlServer";
 answers[88] = choices[88][2];
 units[88] = "59,115";
 comments[88] = "Id Pregunta: 9959. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10023 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Throwable es la superclase de todos los errores y excepciones de Java SE 7. &iquest;A qu&eacute; paquete de Java pertenece Throwable?";
 choices[89]= new Array();
 choices[89][0] = "java.lang";
 choices[89][1] = "java.error";
 choices[89][2] = "java.util";
 choices[89][3] = "Throwable no es una clase, es un interface, y &eacute;ste pertenece al paquete java.io.";
 answers[89] = choices[89][0];
 units[89] = "60";
 comments[89] = "Id Pregunta: 10023. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10104 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  En un DFD, de acuerdo a M&eacute;trica v.3:";
 choices[90]= new Array();
 choices[90][0] = "Existe un diagrama 0 (nivel 0)";
 choices[90][1] = "Existe un diagrama 1 (nivel 0)";
 choices[90][2] = "Existe un diagrama 1 (nivel 1)";
 choices[90][3] = "Existe un diagrama 0 (nivel 1)";
 answers[90] = choices[90][3];
 units[90] = "81";
 comments[90] = "Id Pregunta: 10104. ";


//  Id pregunta: 10113 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  El tama&ntilde;o de trama m&iacute;nimo en Ethernet es:";
 choices[91]= new Array();
 choices[91][0] = "48 bytes";
 choices[91][1] = "24 bytes";
 choices[91][2] = "128 bytes";
 choices[91][3] = "64 bytes";
 answers[91] = choices[91][3];
 units[91] = "101";
 comments[91] = "Id Pregunta: 10113. ";


//  Id pregunta: 10232 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cual de las siguientes clases o interfaces es usado para recuperar informaci&oacute;n de la sesi&oacute;n asociada con el usuario?:";
 choices[92]= new Array();
 choices[92][0] = "GenericServlet";
 choices[92][1] = "ServletConfig";
 choices[92][2] = "ServletContext";
 choices[92][3] = "HttpServletRequest";
 answers[92] = choices[92][3];
 units[92] = "116";
 comments[92] = "Id Pregunta: 10232. ";


//  Id pregunta: 10266 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Respecto del tratamiento de datos de car&aacute;cter personal, el censo promocional";
 choices[93]= new Array();
 choices[93][0] = "Tendr&aacute; vigencia indefinida";
 choices[93][1] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[93][2] = "Tendr&aacute; vigencia trimestral, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[93][3] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose trimestralmente para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 answers[93] = choices[93][3];
 units[93] = "29";
 comments[93] = "Id Pregunta: 10266. Art&iacute;culo 31.2 y 31.3 de la Ley 15/1999";


//  Id pregunta: 10320 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[94]= new Array();
 choices[94][0] = "110";
 choices[94][1] = "119";
 choices[94][2] = "161";
 choices[94][3] = "25";
 answers[94] = choices[94][2];
 units[94] = "104";
 comments[94] = "Id Pregunta: 10320. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10464 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Qu&eacute; elemento de HTML 5 tiene como finalidad dibujar gr&aacute;ficos 2D on the fly mediante Javascript?";
 choices[95]= new Array();
 choices[95][0] = "&lt;svg&gt;";
 choices[95][1] = "&lt;canvas&gt;";
 choices[95][2] = "&lt;output&gt;";
 choices[95][3] = "&lt;source&gt;";
 answers[95] = choices[95][1];
 units[95] = "69";
 comments[95] = "Id Pregunta: 10464. ";


//  Id pregunta: 10525 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Se&ntilde;ale la respuesta correcta respecto a las arquitecturas UMA (Uniform Memory Access) y NUMA (Non-Uniform Memory Access)";
 choices[96]= new Array();
 choices[96][0] = "en NUMA un procesador accede m&aacute;s deprisa a su memoria local que a la memoria compartida";
 choices[96][1] = "en UMA los procesadores acceden a la memoria compartida mediante un bus o conmutador";
 choices[96][2] = "A y B son incorrectas";
 choices[96][3] = "A y B son correctas";
 answers[96] = choices[96][3];
 units[96] = "45";
 comments[96] = "Id Pregunta: 10525. ";


//  Id pregunta: 10537 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Qu&eacute; combinaci&oacute;n de discos RAID presenta un mayor rendimiento?";
 choices[97]= new Array();
 choices[97][0] = "RAID 0";
 choices[97][1] = "RAID 5";
 choices[97][2] = "RAID 1+0";
 choices[97][3] = "RAID 0+1";
 answers[97] = choices[97][0];
 units[97] = "48";
 comments[97] = "Id Pregunta: 10537. ";


//  Id pregunta: 10541 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Qu&eacute; cabeceras del datagrama IP son revisadas por los routers intermedios en IPv6?";
 choices[98]= new Array();
 choices[98][0] = "todas las cabeceras";
 choices[98][1] = "ninguna";
 choices[98][2] = "todas las cabeceras menos las opcionales";
 choices[98][3] = "la cabecera hop-to-hop y el resto de cabeceras menos las cabeceras opcionales";
 answers[98] = choices[98][3];
 units[98] = "100";
 comments[98] = "Id Pregunta: 10541. ";


//  Id pregunta: 10569 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  La probabilidad de explosi&oacute;n por escape de gas en una f&aacute;brica es de 0'0001. Si llega a producirse se sabe que morir&aacute;n al menos diez empleados y se producir&aacute;n p&eacute;rdidas materiales por al menos de 100 millones de euros. &iquest;Cu&aacute;l es riesgo cuantitativo asociado a la amenaza de explosi&oacute;n?";
 choices[99]= new Array();
 choices[99][0] = "10000 euros";
 choices[99][1] = "100 millones de euros";
 choices[99][2] = "No se puede valorar porque la p&eacute;rdida de vidas humanas no es cuantificable (salvo para las compa&ntilde;&iacute;as de seguros)";
 choices[99][3] = "Muy alto";
 answers[99] = choices[99][2];
 units[99] = "33";
 comments[99] = "Id Pregunta: 10569. ";


