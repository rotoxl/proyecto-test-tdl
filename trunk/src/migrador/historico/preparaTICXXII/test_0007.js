/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 334 Año de creación de pregunta: 2004-01-01
 questions[0]= "1)  NO es un modelo para la toma grupal de decisiones:";
 choices[0]= new Array();
 choices[0][0] = "Tormenta de ideas";
 choices[0][1] = "An&aacute;lisis de redes";
 choices[0][2] = "T&eacute;cnica nominal de grupo";
 choices[0][3] = "T&eacute;cnica Delphi";
 answers[0] = choices[0][1];
 units[0] = "23";
 comments[0] = "Id Pregunta: 334. ";


//  Id pregunta: 524 Año de creación de pregunta: 2004-01-01
 questions[1]= "2)  La implantaci&oacute;n de un sistema de single sign-on (SSO) implica que el riesgo de un acceso no autorizado:";
 choices[1]= new Array();
 choices[1][0] = "Tendr&aacute; un mayor impacto";
 choices[1][1] = "Tendr&aacute; un menor impacto";
 choices[1][2] = "Tendr&aacute; una probabilidad mayor";
 choices[1][3] = "Tendr&aacute; una probabilidad menor";
 answers[1] = choices[1][0];
 units[1] = "31, 32, 33";
 comments[1] = "Id Pregunta: 524. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 553 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  Indique la respuesta falsa respecto a la protecci&oacute;n jur&iacute;dica de los programas de ordenador";
 choices[2]= new Array();
 choices[2][0] = "Los programas de ordenador est&aacute;n protegidos por la Ley de Propiedad Intelectual, que los incluye dentro de la categor&iacute;a de obras literarias.";
 choices[2][1] = "El RDL 1/1996 por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual dedica el T&iacute;tulo VII de su Libro I a la protecci&oacute;n de los programas de ordenador.";
 choices[2][2] = "Los derechos sobre los programas de ordenador, as&iacute; como sobre sus sucesivas versiones y los programas derivados, deber&aacute;n ser objeto de inscripci&oacute;n en el Registro de la Propiedad Intelectual.";
 choices[2][3] = "No estar&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador, incluidos los que sirven de fundamento a sus interfaces.";
 answers[2] = choices[2][2];
 units[2] = "36";
 comments[2] = "Id Pregunta: 553. ";


//  Id pregunta: 561 Año de creación de pregunta: 2006-01-01
 questions[3]= "4)  Los modelos de optimizaci&oacute;n tratan de problemas";
 choices[3]= new Array();
 choices[3][0] = "bien comprendidos con sus caracter&iacute;sticas  cualitativas bien determinadas";
 choices[3][1] = "Debe definirse un objetivo impl&iacute;cto &uacute;nico";
 choices[3][2] = "Puede existir un procedimiento (algoritmo) viable de c&aacute;lculo, para encontrar el valor &oacute;ptimo de la funci&oacute;n objetivo";
 choices[3][3] = "En general, nunca es posibleencontrar el verdadero &oacute;ptimo global optando por encontrar una soluci&oacute;n sub&oacute;ptima que determine los valores de s&oacute;lounas pocas variables de decisi&oacute;n, al tiempo que trata a las dem&aacute;s como restricciones fijas.";
 answers[3] = choices[3][3];
 units[3] = "21";
 comments[3] = "Id Pregunta: 561. ";


//  Id pregunta: 568 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  El t&eacute;rmino &quot;organizaci&oacute;n aprendiente&quot; se debe a:";
 choices[4]= new Array();
 choices[4][0] = "Peter Drucker";
 choices[4][1] = "Davenport";
 choices[4][2] = "C. Rami&oacute;";
 choices[4][3] = "Linda Applegate";
 answers[4] = choices[4][0];
 units[4] = "22";
 comments[4] = "Id Pregunta: 568. ";


//  Id pregunta: 690 Año de creación de pregunta: 2009-01-01
 questions[5]= "6)  De acuerdo con la Ley 25/2007 Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[5]= new Array();
 choices[5][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[5][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[5][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, Los proveedores de Acceso a redes de telecomunicaciones, Los prestadores de servicios de alojamiento de datos";
 choices[5][3] = "las respuestas 'a' y 'b' son correctas";
 answers[5] = choices[5][0];
 units[5] = "30";
 comments[5] = "Id Pregunta: 690. Art&iacute;culo 2 de la ley";


//  Id pregunta: 891 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;les son las tecnolog&iacute;as b&aacute;sicas usadas en la gesti&oacute;n de entornos distribuidos?:";
 choices[6]= new Array();
 choices[6][0] = "Agentes inteligentes";
 choices[6][1] = "Agentes propietarios, est&aacute;ndar y proxys";
 choices[6][2] = "Protocolos SNMP y CMIP";
 choices[6][3] = "Las tres respuestas anteriores son correctas";
 answers[6] = choices[6][2];
 units[6] = "62,98";
 comments[6] = "Id Pregunta: 891. ";


//  Id pregunta: 974 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Dada una tarjeta con microprocesador utilizada en un sistema de control de acceso, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[7]= new Array();
 choices[7][0] = "Dispone de un sistema operativo con un juego de instrucciones grabado en memoria ROM";
 choices[7][1] = "Permite realizar algoritmos complejos de cifrado con clave asim&eacute;trica";
 choices[7][2] = "La lectura de su informaci&oacute;n se realiza mediante un diodo de l&aacute;ser";
 choices[7][3] = "Incorpora un microprocesador con memoria";
 answers[7] = choices[7][2];
 units[7] = "74";
 comments[7] = "Id Pregunta: 974. ";


//  Id pregunta: 1112 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  En la terminolog&iacute;a de software libre:";
 choices[8]= new Array();
 choices[8][0] = "El software libre no tiene porque ser gratis";
 choices[8][1] = "Las licencias existentes no ponen ning&uacute;n tipo de limitaciones a su modificaci&oacute;n";
 choices[8][2] = "A la hora de redistribuir el software, s&oacute;lo podemos redistribuir las fuentes";
 choices[8][3] = "El uso de software considerado como libre s&oacute;lo est&aacute; disponible para determinadas plataformas, por incompatibilidades t&eacute;cnicas";
 answers[8] = choices[8][0];
 units[8] = "61";
 comments[8] = "Id Pregunta: 1112. ";


//  Id pregunta: 1199 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Java es un lenguaje de programaci&oacute;n que surgi&oacute; tras realizar pruebas fallidas para dise&ntilde;ar un sistema de programaci&oacute;n de electrodom&eacute;sticos. &iquest;Qu&eacute; empresa cre&oacute; este lenguaje?:";
 choices[9]= new Array();
 choices[9][0] = "Siemens";
 choices[9][1] = "Sun Microsystems";
 choices[9][2] = "General Electric";
 choices[9][3] = "IBM";
 answers[9] = choices[9][1];
 units[9] = "60";
 comments[9] = "Id Pregunta: 1199. ";


//  Id pregunta: 1631 Año de creación de pregunta: 2003-01-01
 questions[10]= "11)  Un debugger (depurador) de programas :";
 choices[10]= new Array();
 choices[10][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[10][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[10][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[10][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[10] = choices[10][1];
 units[10] = "59";
 comments[10] = "Id Pregunta: 1631. ";


//  Id pregunta: 1941 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, en relaci&oacute;n con los certificados electr&oacute;nicos de personas jur&iacute;dicas, establece que:";
 choices[11]= new Array();
 choices[11][0] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de los administradores";
 choices[11][1] = "S&oacute;lo podr&aacute;n solicitar certificados electr&oacute;nicos de personas jur&iacute;dicas sus administradores";
 choices[11][2] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de la persona f&iacute;sica solicitante";
 choices[11][3] = "Si la firma se utiliza transgrediendo los l&iacute;mites mencionados en la Ley, la persona jur&iacute;dica quedar&aacute; vinculada frente a terceros en todo caso";
 answers[11] = choices[11][2];
 units[11] = "30";
 comments[11] = "Id Pregunta: 1941. ";


//  Id pregunta: 2023 Año de creación de pregunta: 2004-01-01
 questions[12]= "13)  De acuerdo con el modelo Staffing Size, en un desarrollo orientado a objetos:";
 choices[12]= new Array();
 choices[12][0] = "El porcentaje de clases clave oscila entre el 20% y el 40%; el resto suelen ser clases secundarias.";
 choices[12][1] = "El porcentaje de clases clave nunca debe superar el 5% del total de clases.";
 choices[12][2] = "El porcentaje de clases clave debe ser superior al 75% para garantizar la robustez del proyecto.";
 choices[12][3] = "No deben existir clases secundarias.";
 answers[12] = choices[12][0];
 units[12] = "82,84";
 comments[12] = "Id Pregunta: 2023. Examen TIC MAP B 2004";


//  Id pregunta: 2514 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Uno de los m&eacute;todos utilizados para la identificaci&oacute;n de objetos es:";
 choices[13]= new Array();
 choices[13][0] = "Tarjetas CRC";
 choices[13][1] = "An&aacute;lisis l&eacute;xico";
 choices[13][2] = "Contraste de modelos";
 choices[13][3] = "Todas las anteriores son ciertas";
 answers[13] = choices[13][3];
 units[13] = "82";
 comments[13] = "Id Pregunta: 2514. ";


//  Id pregunta: 2572 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[14]= new Array();
 choices[14][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[14][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[14][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[14][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[14] = choices[14][2];
 units[14] = "87,88,92";
 comments[14] = "Id Pregunta: 2572. ";


//  Id pregunta: 2575 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Que definici&oacute;n de las siguientes se ajusta m&aacute;s al concepto de Downsizing?";
 choices[15]= new Array();
 choices[15][0] = "Descarga y migraci&oacute;n selectiva de aplicaciones.";
 choices[15][1] = "Migraci&oacute;n de aquellas aplicaciones personales o departamentales cuya informaci&oacute;n es relevante para toda la organizaci&oacute;n y que deben ser dispuestas para su acceso global.";
 choices[15][2] = "Todas son ciertas.";
 choices[15][3] = "Migraci&oacute;n de aplicaciones desde el gran ordenador principal a m&aacute;quinas mucho menores.";
 answers[15] = choices[15][3];
 units[15] = "90";
 comments[15] = "Id Pregunta: 2575. ";


//  Id pregunta: 2743 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  En el modelo entidad-relaci&oacute;n extendido el grado es:";
 choices[16]= new Array();
 choices[16][0] = "El n&uacute;mero de entidades que participan en una relaci&oacute;n";
 choices[16][1] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad que pueden intervenir en una ocurrencia de la relaci&oacute;n que se est&aacute; tratando";
 choices[16][2] = "El n&uacute;mero de columnas de una tabla";
 choices[16][3] = "Es una propiedad o caracter&iacute;stica de un tipo de entidad";
 answers[16] = choices[16][0];
 units[16] = "58,80";
 comments[16] = "Id Pregunta: 2743. ";


//  Id pregunta: 2978 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  &iquest;Cu&aacute;s de los siguientes estandares de redes de &aacute;rea local se caracterizan por ir sobre 2 pares trenzados apantallados";
 choices[17]= new Array();
 choices[17][0] = "1000BaseLX";
 choices[17][1] = "1000BaseSX";
 choices[17][2] = "1000BaseCX";
 choices[17][3] = "1000BaseT";
 answers[17] = choices[17][2];
 units[17] = "101";
 comments[17] = "Id Pregunta: 2978. Examen Julio 2003";


//  Id pregunta: 3654 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un acceso RDSI primario consta de:";
 choices[18]= new Array();
 choices[18][0] = "2 canales B y un canal D";
 choices[18][1] = "2 canales B y ning&uacute;n canal D";
 choices[18][2] = "30 canales B y 1 canal D";
 choices[18][3] = "30 canales B y 2 canales D";
 answers[18] = choices[18][2];
 units[18] = "103";
 comments[18] = "Id Pregunta: 3654. ";


//  Id pregunta: 3840 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Sobre los sistemas de gesti&oacute;n de red (NMS - &ldquo;Network Management Systems&rdquo;), indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[19]= new Array();
 choices[19][0] = "La mayor&iacute;a de los sistemas de gesti&oacute;n de red utilizan la misma estructura: Los dispositivos en red ejecutan un software (agente de gesti&oacute;n de red) que les permite transmitir alarmas ante la aparici&oacute;n de un problema hacia una estaci&oacute;n de gesti&oacute;n de red.";
 choices[19][1] = "Entre los protocolos de gesti&oacute;n de red mas utilizados se encuentra SNMP (&ldquo;Simple Network Management Protocol&rdquo;) est&aacute;ndar ISO/OSI, y CMIP (&ldquo;Common Management Information Protocol&rdquo;) que forma parte de la familia de protocolos TCP/IP";
 choices[19][2] = "Los agentes de gesti&oacute;n de red son m&oacute;dulos de software que compilan informaci&oacute;n sobre los dispositivos de red en los que residen en una base de datos de estructura jer&aacute;rquica denominada MIB (&ldquo;Management Information Base&rdquo;). ";
 choices[19][3] = "El modelo de sistema de gesti&oacute;n de red de ISO se compone de cinco &aacute;reas conceptuales: Gesti&oacute;n de prestaciones, gesti&oacute;n de configuraci&oacute;n, gesti&oacute;n contable, gesti&oacute;n de fallos y gesti&oacute;n de seguridad";
 answers[19] = choices[19][1];
 units[19] = "104";
 comments[19] = "Id Pregunta: 3840. ";


//  Id pregunta: 3873 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?:";
 choices[20]= new Array();
 choices[20][0] = "Modelo Entidad / relaci&oacute;n.";
 choices[20][1] = "Diagrama de Despliegue.";
 choices[20][2] = "Diagrama de Flujo de Datos (DFD).";
 choices[20][3] = "Diagrama de Interacci&oacute;n.";
 answers[20] = choices[20][2];
 units[20] = "86";
 comments[20] = "Id Pregunta: 3873. Junta Andaluc&iacute;a";


//  Id pregunta: 4078 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;Es posible distribuir en una granja de servidores la l&oacute;gica de negocio de una empresa?";
 choices[21]= new Array();
 choices[21][0] = "Si utilizando .Net";
 choices[21][1] = "Si utilizando J2EE";
 choices[21][2] = "Si usando software libre";
 choices[21][3] = "todas las anteriores son ciertas";
 answers[21] = choices[21][3];
 units[21] = "113";
 comments[21] = "Id Pregunta: 4078. ";


//  Id pregunta: 4130 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  Los elementos XML de tipo y atributo deben tener una identidad &uacute;nica en el &aacute;mbito del";
 choices[22]= new Array();
 choices[22][0] = "servidor o sitio";
 choices[22][1] = "espacio de nombres ";
 choices[22][2] = "nombre de dominio";
 choices[22][3] = "nombre de dominio completamente cualificado (FQDM)";
 answers[22] = choices[22][1];
 units[22] = "69";
 comments[22] = "Id Pregunta: 4130. ";


//  Id pregunta: 4569 Año de creación de pregunta: 2007-01-01
 questions[23]= "24)  Para hacer una Ilamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;que m&eacute;todo deberemos invocar?:";
 choices[23]= new Array();
 choices[23][0] = "execute";
 choices[23][1] = "executeQuery";
 choices[23][2] = "executeProcedure";
 choices[23][3] = "executeUpdate";
 answers[23] = choices[23][0];
 units[23] = "60";
 comments[23] = "Id Pregunta: 4569. ";


//  Id pregunta: 4600 Año de creación de pregunta: 2007-01-01
 questions[24]= "25)  Respecto al protocolo de seguridad IKE, cual de las siguientes respuestas es falsa:";
 choices[24]= new Array();
 choices[24][0] = "recrea las claves cada cierto tiempo";
 choices[24][1] = "permite utilizar certificados digitales";
 choices[24][2] = "se necesita una asociaci&oacute;n de seguridad IKE Para cada conexi&oacute;n IPSEC.";
 choices[24][3] = "esta basado en Oakley.";
 answers[24] = choices[24][2];
 units[24] = "74";
 comments[24] = "Id Pregunta: 4600. ";


//  Id pregunta: 4766 Año de creación de pregunta: 2007-01-01
 questions[25]= "26)  En la mayor&iacute;a de las instalaciones de cableado estrcturado, el par trenzado sin apantallar (UTP) es m&aacute;s utilizdo ue el par trenzado apantallado (STP) deboido a que";
 choices[25]= new Array();
 choices[25][0] = "STP es m&aacute;s costoso y m&aacute;s suceptible a problemas de ruido cuando la conexi&oacute;n a tierra no es de gran calidad";
 choices[25][1] = "Al ser STP mucho m&aacute;s fr&aacute;gil que UTP, reslta mucho m&aacute;s dif&iacute;cil canalizarlo";
 choices[25][2] = "Los conectores utilizados en UTP (RJ-45) son m&aacute;s econ&oacute;micos  fiables que los de STP (RJ 11)";
 choices[25][3] = "Es mucho m&aacute;s utilizado el par trenzado apantallado (STP)";
 answers[25] = choices[25][0];
 units[25] = "99";
 comments[25] = "Id Pregunta: 4766. ";


//  Id pregunta: 5028 Año de creación de pregunta: 2003-01-01
 questions[26]= "27)  En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas quecirculan por la red?:";
 choices[26]= new Array();
 choices[26][0] = "1522 bytes";
 choices[26][1] = "1500 bytes";
 choices[26][2] = "1496 bytes";
 choices[26][3] = "1518 bytes";
 answers[26] = choices[26][0];
 units[26] = "100, 102";
 comments[26] = "Id Pregunta: 5028. Examen TIC A 2007";


//  Id pregunta: 5117 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  Las normas internacionales en materia de Seguridad de la informaci&oacute;n las publica:";
 choices[27]= new Array();
 choices[27][0] = "AENOR";
 choices[27][1] = "ISO";
 choices[27][2] = "EIC";
 choices[27][3] = "NIS";
 answers[27] = choices[27][1];
 units[27] = "42";
 comments[27] = "Id Pregunta: 5117. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5554 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  Los documentos ATAG:";
 choices[28]= new Array();
 choices[28][0] = "Muestran c&oacute;mo hacer que las herramientas de autor sean accesibles para personas con discapacidad.";
 choices[28][1] = "Muestran c&oacute;mo hacer  que los reproductores multimedia sean accesibles a personas con discapacidad.";
 choices[28][2] = "Est&aacute;n pensados para el contenido web.";
 choices[28][3] = "Todas las anteriores son correctas.";
 answers[28] = choices[28][0];
 units[28] = "39";
 comments[28] = "Id Pregunta: 5554. ";


//  Id pregunta: 5609 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  Los mensajes MPDU en X.400 puedes ser:";
 choices[29]= new Array();
 choices[29][0] = "Sondas, Informes y los propios mensajes";
 choices[29][1] = "Sondas, Notificaciones, mensajes de control y el propio mensaje";
 choices[29][2] = "Notificaciones, Informes de entrega y los propios mensajes";
 choices[29][3] = "Solo los propios mensajes denominados IPM";
 answers[29] = choices[29][0];
 units[29] = "106";
 comments[29] = "Id Pregunta: 5609. ";


//  Id pregunta: 5993 Año de creación de pregunta: 2010-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes funciones NO es competencia del Consejo Superior de Administraci&oacute;n Electr&oacute;nica?";
 choices[30]= new Array();
 choices[30][0] = "Actuar como Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[30][1] = "La colaboraci&oacute;n con el Centro Criptol&oacute;gico Nacional del Centro Nacional de Inteligencia en la elaboraci&oacute;n de medidas de seguridad.";
 choices[30][2] = "El control, regulaci&oacute;n y supervisi&oacute;n de los proveedores de accesos a Internet de la Administraci&oacute;n General del Estado.";
 choices[30][3] = "El impulso y la coordinaci&oacute;n de la Administraci&oacute;n Electr&oacute;nica en el seno de la Administraci&oacute;n General del Estado.";
 answers[30] = choices[30][2];
 units[30] = "77";
 comments[30] = "Id Pregunta: 5993. TIC A 2009";


//  Id pregunta: 6006 Año de creación de pregunta: 2010-01-01
 questions[31]= "32)  La redocumentaci&oacute;n es:";
 choices[31]= new Array();
 choices[31][0] = "Una forma de ingenier&iacute;a inversa.";
 choices[31][1] = "Es el proceso mediante el que se produce documentaci&oacute;n desde un sistema en desarrollo.";
 choices[31][2] = "Es el mismo concepto que humanware.";
 choices[31][3] = "Es la identificaci&oacute;n de los componentes de un sistema y sus relaciones.";
 answers[31] = choices[31][0];
 units[31] = "91";
 comments[31] = "Id Pregunta: 6006. TIC A 2009";


//  Id pregunta: 6079 Año de creación de pregunta: 2010-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes NO es una salida del proceso de Selecci&oacute;n de Vendedores dentro de la Gesti&oacute;n de las Adquisiciones del Proyecto?";
 choices[32]= new Array();
 choices[32][0] = "Contrato.";
 choices[32][1] = "Plan de gesti&oacute;n del contrato.";
 choices[32][2] = "Disponibilidad de recursos.";
 choices[32][3] = "Lista de vendedores calificados.";
 answers[32] = choices[32][3];
 units[32] = "27";
 comments[32] = "Id Pregunta: 6079. ";


//  Id pregunta: 6143 Año de creación de pregunta: 2010-01-01
 questions[33]= "34)  En relaci&oacute;n con los c&oacute;decs que se utilizan en sistemas de telefon&iacute;a:";
 choices[33]= new Array();
 choices[33][0] = "G.711 utiliza el algoritmo PCM y es el c&oacute;dec que garantiza la mayor calidad de sonido por lo que se suele utilizar en entornos LAN de VoIP";
 choices[33][1] = "G.729 es el algoritmo m&aacute;s extendido en sistemas de VoIP sobre WAN, ya que aunque tiene p&eacute;rdida por compresi&oacute;n la calidad de sonido (MOS) es buena";
 choices[33][2] = "El c&oacute;dec que se utiliza en GSM (GSM 06.10) proporciona una calidad de sonido peor que G.711 y G.729";
 choices[33][3] = "Todas las respuestas anteriores son correctas";
 answers[33] = choices[33][3];
 units[33] = "100, 109";
 comments[33] = "Id Pregunta: 6143. ";


//  Id pregunta: 6287 Año de creación de pregunta: 2010-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes no es una tarea de la actividad de Identificaci&oacute;n de Requisitos, en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "Estudio de los Procesos del PSI";
 choices[34][1] = "An&aacute;lisis de las Necesidades de la Informaci&oacute;n";
 choices[34][2] = "Catalogaci&oacute;n de Requisitos";
 choices[34][3] = "Todas lo son";
 answers[34] = choices[34][3];
 units[34] = "77";
 comments[34] = "Id Pregunta: 6287. ";


//  Id pregunta: 6562 Año de creación de pregunta: 2010-01-01
 questions[35]= "36)  GSM no utiliza";
 choices[35]= new Array();
 choices[35][0] = "Esquema de protecci&oacute;n mediante salto RF";
 choices[35][1] = "Transmisi&oacute;n discontinua";
 choices[35][2] = "Transmisi&oacute;n continua";
 choices[35][3] = "Paging";
 answers[35] = choices[35][2];
 units[35] = "108";
 comments[35] = "Id Pregunta: 6562. ";


//  Id pregunta: 6581 Año de creación de pregunta: 2010-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l es el Reglamento de desarrollo de la LOPD actualmente vigente?";
 choices[36]= new Array();
 choices[36][0] = "RD 994/1999";
 choices[36][1] = "RD 1720/2007";
 choices[36][2] = "A y B son correctas";
 choices[36][3] = "A y B son incorrectas";
 answers[36] = choices[36][1];
 units[36] = "29";
 comments[36] = "Id Pregunta: 6581. ";


//  Id pregunta: 6622 Año de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes elementos es una Pr&aacute;ctica y no una T&eacute;cnica seg&uacute;n M&eacute;trica v3?";
 choices[37]= new Array();
 choices[37][0] = "Modelo de Procesos de la Organizaci&oacute;n (SADT)";
 choices[37][1] = "An&aacute;lisis Coste/Beneficio";
 choices[37][2] = "An&aacute;lisis de Impacto";
 choices[37][3] = "Casos de Uso";
 answers[37] = choices[37][2];
 units[37] = "86";
 comments[37] = "Id Pregunta: 6622. ";


//  Id pregunta: 7268 Año de creación de pregunta: 2010-01-01
 questions[38]= "39)  Un programa que se aloja en el ordenador y permite el acceso a usuarios externos, con el fin de obtener informaci&oacute;n o controlar la m&aacute;quina de forma remota, se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Bot";
 choices[38][1] = "Virus";
 choices[38][2] = "Troyano";
 choices[38][3] = "Gusano";
 answers[38] = choices[38][2];
 units[38] = "111";
 comments[38] = "Id Pregunta: 7268. Examen TIC B 2009";


//  Id pregunta: 8188 Año de creación de pregunta: 2011-01-01
 questions[39]= "40)  Los &quot;mashups&quot; en Web 2.0:";
 choices[39]= new Array();
 choices[39][0] = "Son un tipo de wikis con interfaces AJAX.";
 choices[39][1] = "Son una aplicaci&oacute;n de la teor&iacute;a &quot;Long Tail&quot;.";
 choices[39][2] = "Son aplicaciones web que combinan datos o servicios de otras fuentes.";
 choices[39][3] = "Siempre se implementan con t&eacute;cnicas de &quot;screen scraping&quot;.";
 answers[39] = choices[39][2];
 units[39] = "120";
 comments[39] = "Id Pregunta: 8188. Examen TIC A1 2010";


//  Id pregunta: 8249 Año de creación de pregunta: 2011-01-01
 questions[40]= "41)  Asumiendo que el cliente y el servidor se ejecutan en diferentes m&aacute;quinas, y considerando como local aquella m&aacute;quina con acceso a la pantalla y al teclado, la combinaci&oacute;n correcta respecto a Xwindows(X11) y Microsoft Terminal Server (TS) es:";
 choices[40]= new Array();
 choices[40][0] = "El cliente X11 y el cliente TS se ejecutan de manera local y el servidor X11 y el servidor TS de manera remota.";
 choices[40][1] = "El cliente X11 y el servidor TS se ejecutan de manera local y el servidor X11 y el cliente TS de manera remota.";
 choices[40][2] = "El servidor X11 y el cliente TS se ejecutan de manera local y el cliente X11 y el servidor TS de manera remota.";
 choices[40][3] = "El servidor X11 y el servidor TS se ejecutan de manera local y el cliente X11 y el cliente TS de manera remota.";
 answers[40] = choices[40][2];
 units[40] = "119";
 comments[40] = "Id Pregunta: 8249. Examen TIC A1 2010";


//  Id pregunta: 8277 Año de creación de pregunta: 2011-01-01
 questions[41]= "42)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE, NO incluye entre sus programas:";
 choices[41]= new Array();
 choices[41][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios.";
 choices[41][1] = "Reconocimiento (certificaci&oacute;n de organizaciones y premios).";
 choices[41][2] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[41][3] = "Quejas y reclamaciones.";
 answers[41] = choices[41][3];
 units[41] = "92";
 comments[41] = "Id Pregunta: 8277. Examen TIC A1 2010";


//  Id pregunta: 8444 Año de creación de pregunta: 2011-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza puertos UDP y TCP para la operaci&oacute;n delnivel de transporte?:";
 choices[42]= new Array();
 choices[42][0] = "FTP.";
 choices[42][1] = "TFTP.";
 choices[42][2] = "DNS.";
 choices[42][3] = "Ninguno de los anteriores.";
 answers[42] = choices[42][2];
 units[42] = "100";
 comments[42] = "Id Pregunta: 8444. Analista Ayto. Madrid 2010";


//  Id pregunta: 8509 Año de creación de pregunta: 2011-01-01
 questions[43]= "44)  Actualmente, el World Wide Web Consortium (W3C) trabaja en los siguientes est&aacute;ndares y herramientas de integraci&oacute;n de datos de entrada. Seleccionar la respuesta ERR&Oacute;NEA: ";
 choices[43]= new Array();
 choices[43][0] = "SRGS tiene corno funci&oacute;n principal permitir que una aplicaci&oacute;n de voz indique a un reconocedor qu&eacute; es lo que tiene que escuchar, es decir, palabras, modelos en los que estas palabras surgen, lenguaje hablado de cada palabra, etc. ";
 choices[43][1] = " SSML, lenguaje de marcado de S&iacute;ntesis del Habla, basado en XML, forma parte del proceso de salida de informaci&oacute;n y funciona como componente de conversi&oacute;n ayudando a generar habla sint&eacute;tica. ";
 choices[43][2] = "SlSR permite describir anotaciones sobre reglas gramaticales para extraer resultados sem&aacute;nticos a trav&eacute;s del reconocimiento del habla. El resultado obtenido puede expresarse en formato XML, usando el lenguaje EMMA. ";
 choices[43][3] = "EMMA es un lenguaje de etiquetado que permite crear di&aacute;logos con los que se puede interactuar escuchando comandos hablados, controlables a trav&eacute;s de entradas de voz";
 answers[43] = choices[43][3];
 units[43] = "94";
 comments[43] = "Id Pregunta: 8509. Examen TIC A2 2010";


//  Id pregunta: 8636 Año de creación de pregunta: 2011-01-01
 questions[44]= "45)  El proceso de desarrollo de M&eacute;trica v3 contiene todas las actividades y tareas que se deben llevar a cabo para:";
 choices[44]= new Array();
 choices[44][0] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta la instalaci&oacute;n del software.";
 choices[44][1] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis del sistema hasta la construcci&oacute;n del software.";
 choices[44][2] = "Desarrollar un sistema, cubriendo desde el dise&ntilde;o hasta la construcci&oacute;n del software.";
 choices[44][3] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta el mantenimiento del software.";
 answers[44] = choices[44][0];
 units[44] = "86";
 comments[44] = "Id Pregunta: 8636. Examen TIC A2 2010 interna";


//  Id pregunta: 8645 Año de creación de pregunta: 2011-01-01
 questions[45]= "46)  Indique cu&aacute;l es la respuesta correcta con respecto a los diagramas PERT:";
 choices[45]= new Array();
 choices[45][0] = "Los arcos del grafo representan los sucesos, y los v&eacute;rtices las actividades.";
 choices[45][1] = "En la matriz de encadenamientos aquellas columnas en las que no aparece ninguna X indican las actividades que no tienen ninguna actividad siguiente, es decir, aquellas actividades cuyo suceso final coincide con el suceso fin del proyecto.";
 choices[45][2] = "El cuadro de prelaciones est&eacute; formado por tres columnas En la primera columna est&aacute;n representadas todas las actividades en que se ha descompuesto el proyecto. En la segunda columna figuran las actividades precedentes de su hom&oacute;loga en la primera columna y en la &uacute;ltima columna se muestran las actividades posteriores.";
 choices[45][3] = "La matriz de encadenamientos consiste en una matriz cuadrada cuya dimensi&oacute;n es igual al n&uacute;mero de sucesos en que se ha descompuesto el proyecto.";
 answers[45] = choices[45][1];
 units[45] = "28";
 comments[45] = "Id Pregunta: 8645. Examen TIC A2 2010 interna";


//  Id pregunta: 8667 Año de creación de pregunta: 2011-01-01
 questions[46]= "47)  En relaci&oacute;n a los puertos utilizados en el protocolo FTP se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[46]= new Array();
 choices[46][0] = "Utiliza el 21 para datos y el 20 para control";
 choices[46][1] = "Utiliza el 20 para datos y el 21 para control";
 choices[46][2] = "Utiliza el 23 para datos y el 25 para control";
 choices[46][3] = "Utiliza el 25 para datos y el 23 para control";
 answers[46] = choices[46][1];
 units[46] = "112";
 comments[46] = "Id Pregunta: 8667. Examen UPM A2 2011";


//  Id pregunta: 8901 Año de creación de pregunta: 2011-01-01
 questions[47]= "48)  &iquest;cu&aacute;l de los siguientes no es un ERP?";
 choices[47]= new Array();
 choices[47][0] = "SAP";
 choices[47][1] = "Tango";
 choices[47][2] = "Calipso";
 choices[47][3] = "Twister";
 answers[47] = choices[47][3];
 units[47] = "65";
 comments[47] = "Id Pregunta: 8901. ";


//  Id pregunta: 8917 Año de creación de pregunta: 2011-01-01
 questions[48]= "49)  &iquest;Cu&aacute;ndo una relaci&oacute;n est&aacute; en Tercera Forma Normal?:";
 choices[48]= new Array();
 choices[48][0] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no tiene grupos repetitivos.";
 choices[48][1] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s todos los atributos que no forman parte de la clave primaria tienen dependencia funcional completa respecto de cada una de las claves.";
 choices[48][2] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no hay dependencias funcionales transitivas respecto de la clave primaria.";
 choices[48][3] = "Cuando est&aacute; en Segunda Forma Normal y la clave primaria no est&aacute; formada por un &uacute;nico atributo";
 answers[48] = choices[48][2];
 units[48] = "58";
 comments[48] = "Id Pregunta: 8917. Operador Ayto. Madrid 2010";


//  Id pregunta: 8956 Año de creación de pregunta: 2011-01-01
 questions[49]= "50)  En Inteligencia artificial existe varias clasificaciones en cuanto a los m&eacute;todos de b&uacute;squeda. De lso siguientes &iquest;cu&aacute;l pertenece  a la clasificaci&oacute;n  de Mejora Iterativa?";
 choices[49]= new Array();
 choices[49][0] = "B&uacute;squeda Greedy";
 choices[49][1] = "B&uacute;squeda en profundidad iterativa";
 choices[49][2] = "Algoritmo A*";
 choices[49][3] = "Escalada por m&aacute;xima pendiente";
 answers[49] = choices[49][3];
 units[49] = "63";
 comments[49] = "Id Pregunta: 8956. ";


//  Id pregunta: 8971 Año de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes definiciones corresponde a la Teor&iacute;a de la Calidad de la Productividad de Lowler?";
 choices[50]= new Array();
 choices[50][0] = "El coste de la calidad siempre es el mismo independientemente del coste";
 choices[50][1] = "Cuanta m&aacute;s calidad tiene un producto m&aacute;s caro es de producir";
 choices[50][2] = "Un producto de calidad es m&aacute;s barato de producir";
 choices[50][3] = "Es caro de producir en primera instancia, a mitad del desarrollo es independiente y al final el coste se encarece exponencialmente";
 answers[50] = choices[50][2];
 units[50] = "87,88";
 comments[50] = "Id Pregunta: 8971. ";


//  Id pregunta: 9155 Año de creación de pregunta: 2013-01-01
 questions[51]= "52)  En relaci&oacute;n a las gu&iacute;as AGR de la AICC sobre eLearning, se&ntilde;ale la FALSA:";
 choices[51]= new Array();
 choices[51][0] = "La gu&iacute;a AGR007 se refiere al intercambio de cursos entre plataformas";
 choices[51][1] = "La gu&iacute;a AGR010 est&aacute; dedicada a la interoperabilidad entre plataformas web de formaci&oacute;n y sus cursos";
 choices[51][2] = "La gu&iacute;a AGR008 ofrece recomendaciones acerca de los videos digitales";
 choices[51][3] = "La gu&iacute;a AGR009 contiene las recomendaciones referentes a los archivos de audio digital";
 answers[51] = choices[51][3];
 units[51] = "66";
 comments[51] = "Id Pregunta: 9155. ";


//  Id pregunta: 9174 Año de creación de pregunta: 2013-01-01
 questions[52]= "53)  Si hablamos de UBL, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[52]= new Array();
 choices[52][0] = "Fue desarrollado por OASIS";
 choices[52][1] = "Es una librer&iacute;a est&aacute;ndar de documentos XML dedicada a la representaci&oacute;n de facturas ";
 choices[52][2] = "Est&aacute; basada en el concepto de Core Components";
 choices[52][3] = "El desarrollo de su variante NES, NESUBL, es la base del proyecto PEPPOL de contrataci&oacute;n online paneuropea";
 answers[52] = choices[52][1];
 units[52] = "70";
 comments[52] = "Id Pregunta: 9174. ";


//  Id pregunta: 9181 Año de creación de pregunta: 2013-01-01
 questions[53]= "54)  En procesamiento de im&aacute;genes, la transformada de Hough se utiliza para:";
 choices[53]= new Array();
 choices[53][0] = "Encontrar l&iacute;neas o c&iacute;rculos en im&aacute;genes";
 choices[53][1] = "Detectar los falsos bordes que se hayan encontrado mediante el Algoritmo de Marr-Hildred";
 choices[53][2] = "Dividir una imagen en varias regiones";
 choices[53][3] = "Crear histogramas de las im&aacute;genes precargadas";
 answers[53] = choices[53][0];
 units[53] = "93";
 comments[53] = "Id Pregunta: 9181. ";


//  Id pregunta: 9279 Año de creación de pregunta: 2013-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes es un principio del programa IDABC?";
 choices[54]= new Array();
 choices[54][0] = "Alianzas.";
 choices[54][1] = "Compartici&oacute;n de recursos.";
 choices[54][2] = "Subsidiariedad.";
 choices[54][3] = "Ninguno de los anteriores.";
 answers[54] = choices[54][2];
 units[54] = "40";
 comments[54] = "Id Pregunta: 9279. ";


//  Id pregunta: 9348 Año de creación de pregunta: 2013-01-01
 questions[55]= "56)  En RDSI, en el lado del operador:";
 choices[55]= new Array();
 choices[55][0] = "La Terminaci&oacute;n de Central se encarga de manejar el protocolo de enlace de datos.";
 choices[55][1] = "La terminaci&oacute;n de L&iacute;nea se encarga de manejar el protocolo de enlace de datos.";
 choices[55][2] = "La terminaci&oacute;n de central est&aacute; entre la interfaz U y V.";
 choices[55][3] = "La Terminaci&oacute;n de L&iacute;nea est&aacute; entre la interfaz U y T.";
 answers[55] = choices[55][0];
 units[55] = "103";
 comments[55] = "Id Pregunta: 9348. ASTIC 2011 pag 8";


//  Id pregunta: 9378 Año de creación de pregunta: 2013-01-01
 questions[56]= "57)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[56]= new Array();
 choices[56][0] = "ELECTRE";
 choices[56][1] = "PROMETHEE";
 choices[56][2] = "TOPSIS";
 choices[56][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[56] = choices[56][0];
 units[56] = "34";
 comments[56] = "Id Pregunta: 9378. ";


//  Id pregunta: 9416 Año de creación de pregunta: 2013-01-01
 questions[57]= "58)  Cu&aacute;l de los siguientes no es un m&eacute;todo de an&aacute;lisis de Puntos de Funci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "M&eacute;todo Albrecht";
 choices[57][1] = "M&eacute;todo MARK II";
 choices[57][2] = "La a) y la b) son correctas";
 choices[57][3] = "Ninguno de los anteriores";
 answers[57] = choices[57][2];
 units[57] = "89";
 comments[57] = "Id Pregunta: 9416. ";


//  Id pregunta: 9449 Año de creación de pregunta: 2013-01-01
 questions[58]= "59)  En el modelo Entidad-Relaci&oacute;n extendido, si puede haber elementos de una superentidad que no est&eacute;n en ninguna de las subentidades hablamos de:";
 choices[58]= new Array();
 choices[58][0] = "Jerarqu&iacute;a con cobertura total.";
 choices[58][1] = "Jerarqu&iacute;a con cobertura parcial.";
 choices[58][2] = "Jerarqu&iacute;a disjunta.";
 choices[58][3] = "Jerarqu&iacute;a con solapamiento.";
 answers[58] = choices[58][1];
 units[58] = "80";
 comments[58] = "Id Pregunta: 9449. Examen AGE TIC A1 2011";


//  Id pregunta: 9526 Año de creación de pregunta: 2013-01-01
 questions[59]= "60)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.329:";
 choices[59]= new Array();
 choices[59][0] = "Es un protocolo que define la se&ntilde;alizaci&oacute;n de llamadas";
 choices[59][1] = "Es un protocolo que permite la inclusi&oacute;n de tr&aacute;fico de datos";
 choices[59][2] = "Especifica un protocolo para el control y etiquetado de dos canales simult&aacute;neos en una &uacute;nica videoconferencia";
 choices[59][3] = "Simplifica y complementa al protocolo T.120";
 answers[59] = choices[59][0];
 units[59] = "117";
 comments[59] = "Id Pregunta: 9526. ";


//  Id pregunta: 9583 Año de creación de pregunta: 2013-01-01
 questions[60]= "61)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[60]= new Array();
 choices[60][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[60][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[60][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[60][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[60] = choices[60][1];
 units[60] = "43, 74";
 comments[60] = "Id Pregunta: 9583. Examen TIC A1 2011";


//  Id pregunta: 9611 Año de creación de pregunta: 2014-01-01
 questions[61]= "62)  &iquest;Qu&eacute; es el FSQL?";
 choices[61]= new Array();
 choices[61][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[61][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[61][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[61][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[61] = choices[61][1];
 units[61] = "58";
 comments[61] = "Id Pregunta: 9611. ";


//  Id pregunta: 9653 Año de creación de pregunta: 2014-01-01
 questions[62]= "63)  El modelo de calidad ISO 9126 tiene:";
 choices[62]= new Array();
 choices[62][0] = "27 caracter&iacute;sticas y 6 subcaracter&iacute;sticas";
 choices[62][1] = "6 caracter&iacute;sticas y 28 subcaracter&iacute;sticas";
 choices[62][2] = "7 caracter&iacute;sticas y 26 subcaracter&iacute;sticas";
 choices[62][3] = "6 caracter&iacute;sticas y 27 subcaracter&iacute;sticas";
 answers[62] = choices[62][3];
 units[62] = "87";
 comments[62] = "Id Pregunta: 9653. ";


//  Id pregunta: 9675 Año de creación de pregunta: 2014-01-01
 questions[63]= "64)  El serviceware permite:";
 choices[63]= new Array();
 choices[63][0] = "Gestionar el uso del Cl&uacute;ster que hace cada usuario.";
 choices[63][1] = "Gestionar el uso del Grid que hace cada usuario.";
 choices[63][2] = "Controlar la red de comunicaciones del Cl&uacute;ster.";
 choices[63][3] = "Controlar la red de comunicaciones del Grid.";
 answers[63] = choices[63][1];
 units[63] = "45";
 comments[63] = "Id Pregunta: 9675. ";


//  Id pregunta: 9693 Año de creación de pregunta: 2014-01-01
 questions[64]= "65)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[64]= new Array();
 choices[64][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[64][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[64][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[64][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[64] = choices[64][1];
 units[64] = "100";
 comments[64] = "Id Pregunta: 9693. ";


//  Id pregunta: 9709 Año de creación de pregunta: 2014-01-01
 questions[65]= "66)  La programaci&oacute;n funcional limita el uso de";
 choices[65]= new Array();
 choices[65][0] = "estados mutables.";
 choices[65][1] = "expresiones lambda.";
 choices[65][2] = "procedimientos como par&aacute;metros.";
 choices[65][3] = "lenguajes como Erlang, F# o Scala.";
 answers[65] = choices[65][0];
 units[65] = "60";
 comments[65] = "Id Pregunta: 9709. Examen TIC-A1 2013";


//  Id pregunta: 9717 Año de creación de pregunta: 2014-01-01
 questions[66]= "67)  En referencia a la tecnolog&iacute;a CORBA (Common Object Request Broker Architecture) es INCORRECTO que";
 choices[66]= new Array();
 choices[66][0] = "el protocolo de comunicaciones en el que se basa se denomina GIOP (General InterORB Protocol).";
 choices[66][1] = "el lenguaje para especificaciones de interfaces se denomina IPOL (Independent Platform Object Language).";
 choices[66][2] = "se basa en un modelo de arquitectura distribuida para entornos heterog&eacute;neos.";
 choices[66][3] = "es una propuesta del Object Management Group.";
 answers[66] = choices[66][1];
 units[66] = "51";
 comments[66] = "Id Pregunta: 9717. Examen TIC-A1 2013";


//  Id pregunta: 9721 Año de creación de pregunta: 2014-01-01
 questions[67]= "68)  La t&eacute;cnica de protecci&oacute;n de software conocida como marca de agua digital consiste en";
 choices[67]= new Array();
 choices[67][0] = "la inserci&oacute;n de un mensaje en el interior de un objeto digital que contiene informaci&oacute;n sobre el autor o propietario digital de dicho objeto.";
 choices[67][1] = "la generaci&oacute;n de un c&oacute;digo de activaci&oacute;n sin el cual no se puede utilizar una aplicaci&oacute;n.";
 choices[67][2] = "una etiqueta hologr&aacute;fica que ayuda a identificar que el software es original.";
 choices[67][3] = "la gesti&oacute;n de derechos de uso de contenido en formato digital que comprende medidas t&eacute;cnicas y organizativas.";
 answers[67] = choices[67][0];
 units[67] = "37";
 comments[67] = "Id Pregunta: 9721. Examen TIC-A1 2013";


//  Id pregunta: 9740 Año de creación de pregunta: 2014-01-01
 questions[68]= "69)  En un despliegue de una aplicaci&oacute;n Java EE sobre WebSphere, fijar el mode del class loader como PARENT_LAST tiene el efecto de que busca las clases a cargar primero:";
 choices[68]= new Array();
 choices[68][0] = "En el m&oacute;dulo web, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[68][1] = "En las librer&iacute;as del sistema, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en el m&oacute;dulo web.";
 choices[68][2] = "En la aplicaci&oacute;n, y si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[68][3] = "En las librer&iacute;as del sistema, si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra en la aplicaci&oacute;n.";
 answers[68] = choices[68][0];
 units[68] = "116";
 comments[68] = "Id Pregunta: 9740. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9742 Año de creación de pregunta: 2014-01-01
 questions[69]= "70)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[69]= new Array();
 choices[69][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[69][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[69][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[69][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[69] = choices[69][3];
 units[69] = "59";
 comments[69] = "Id Pregunta: 9742. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9761 Año de creación de pregunta: 2014-01-01
 questions[70]= "71)  En el &aacute;mbito del sector p&uacute;blico estatal, las solicitudes de contratos basados en el acuerdo marco o de adjudicaciones de contratos realizadas en el marco del sistema din&aacute;mico de contrataci&oacute;n se tramitar&aacute;n:";
 choices[70]= new Array();
 choices[70][0] = "De la forma tradicional o a trav&eacute;s de la aplicaci&oacute;n CONECTA-CENTRALIZACI&Oacute;N";
 choices[70][1] = "Exclusivamente, a trav&eacute;s de la aplicaci&oacute;n inform&aacute;tica CONECTA CENTRALIZACI&Oacute;N a partir del 1 de enero de 2014.";
 choices[70][2] = "Mediante solicitud por escrito a la Direcci&oacute;n General de Patrimonio.";
 choices[70][3] = "Ninguna de las anteriores.";
 answers[70] = choices[70][1];
 units[70] = "41";
 comments[70] = "Id Pregunta: 9761. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. A&ntilde;adida por la orden HAP/19/2014";


//  Id pregunta: 9784 Año de creación de pregunta: 2014-01-01
 questions[71]= "72)  En un documento XML los valores de un atributo: ";
 choices[71]= new Array();
 choices[71][0] = "Deben ir siempre entre comillas. ";
 choices[71][1] = "Deben ir entre comillas si no son n&uacute;meros o fechas. ";
 choices[71][2] = "No deben ir entre comillas. ";
 choices[71][3] = "Deben ir entre comillas si son n&uacute;meros o fechas.";
 answers[71] = choices[71][0];
 units[71] = "69";
 comments[71] = "Id Pregunta: 9784. Examen TIC A2 2013";


//  Id pregunta: 9801 Año de creación de pregunta: 2014-01-01
 questions[72]= "73)  Seg&uacute;n la Ley Org&aacute;nica 15/1999 de protecci&oacute;n de datos, cuando se trata de ficheros de titularidad p&uacute;blica, el plazo para comunicar a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos la inscripci&oacute;n de ficheros en el Registro General (RGPD) es:";
 choices[72]= new Array();
 choices[72][0] = "No hace falta dicha comunicaci&oacute;n al tratarse de ficheros de titularidad p&uacute;blica. ";
 choices[72][1] = "De 10 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[72][2] = "De 3 meses desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[72][3] = "De 30 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 answers[72] = choices[72][3];
 units[72] = "29";
 comments[72] = "Id Pregunta: 9801. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9813 Año de creación de pregunta: 2014-01-01
 questions[73]= "74)  La t&eacute;cnica que permite solapar instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas se denomina:";
 choices[73]= new Array();
 choices[73][0] = "Parametrizaci&oacute;n.";
 choices[73][1] = "Segmentaci&oacute;n.";
 choices[73][2] = "Multiplexaci&oacute;n.";
 choices[73][3] = "Paginaci&oacute;n.";
 answers[73] = choices[73][1];
 units[73] = "52";
 comments[73] = "Id Pregunta: 9813. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9952 Año de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[74]= new Array();
 choices[74][0] = "ISO/IEC 12207:2008";
 choices[74][1] = "ISO 9001:2008";
 choices[74][2] = "ISO 29393:2009";
 choices[74][3] = "ISO 31000:2009";
 answers[74] = choices[74][0];
 units[74] = "76";
 comments[74] = "Id Pregunta: 9952. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9964 Año de creación de pregunta: 2014-01-01
 questions[75]= "76)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[75]= new Array();
 choices[75][0] = "System Data Type (SDT)";
 choices[75][1] = "Common Type System (CTS)";
 choices[75][2] = "Common Data Integration (CDI)";
 choices[75][3] = "Data Type Core (DTC)";
 answers[75] = choices[75][1];
 units[75] = "59,115";
 comments[75] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9973 Año de creación de pregunta: 2014-01-01
 questions[76]= "77)  Indique cu&aacute;l de los siguientes elementos NO se asocia a un sistema datawarehouse: ";
 choices[76]= new Array();
 choices[76][0] = "Un motor de transacciones.";
 choices[76][1] = "Las herramientas de Extracci&oacute;n, Transformaci&oacute;n y Carga de datos.";
 choices[76][2] = "Las herramientas de explotaci&oacute;n anal&iacute;tica de la informaci&oacute;n.";
 choices[76][3] = "La base de datos multidimensional";
 answers[76] = choices[76][0];
 units[76] = "68,71";
 comments[76] = "Id Pregunta: 9973. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10008 Año de creación de pregunta: 2014-01-01
 questions[77]= "78)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, en la actividad &ldquo;Definici&oacute;n de Requisitos del Sistema&rdquo; participan los siguientes grupos de personas:";
 choices[77]= new Array();
 choices[77][0] = "Jefe de proyecto, Analistas y Usuarios Expertos.";
 choices[77][1] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas y Usuarios Expertos.";
 choices[77][2] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones y Usuarios Expertos.";
 choices[77][3] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones, Responsables de Seguridad y Usuarios Expertos.";
 answers[77] = choices[77][0];
 units[77] = "86";
 comments[77] = "Id Pregunta: 10008. ";


//  Id pregunta: 10043 Año de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[78]= new Array();
 choices[78][0] = "OSPF ";
 choices[78][1] = "RIP";
 choices[78][2] = "BGP";
 choices[78][3] = "EGP";
 answers[78] = choices[78][0];
 units[78] = "102";
 comments[78] = "Id Pregunta: 10043. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10050 Año de creación de pregunta: 2014-01-01
 questions[79]= "80)  Indique la respuesta FALSA, respecto al protocolo IPSEC :";
 choices[79]= new Array();
 choices[79][0] = "El protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[79][1] = "El protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[79][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[79][3] = "IPSEC ESP es incompatible con el modo transporte, s&oacute;lo se puede utilizar en modo t&uacute;nel.";
 answers[79] = choices[79][3];
 units[79] = "111";
 comments[79] = "Id Pregunta: 10050. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10059 Año de creación de pregunta: 2014-01-01
 questions[80]= "81)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[80]= new Array();
 choices[80][0] = "TIER I ";
 choices[80][1] = "TIER II";
 choices[80][2] = "TIER III ";
 choices[80][3] = "TIER IV";
 answers[80] = choices[80][2];
 units[80] = "99";
 comments[80] = "Id Pregunta: 10059. TIC A2, libre, Examen 2013";


//  Id pregunta: 10069 Año de creación de pregunta: 2014-01-01
 questions[81]= "82)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[81]= new Array();
 choices[81][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[81][1] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[81][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[81][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un per&iacute;odo de tiempo dado.";
 answers[81] = choices[81][2];
 units[81] = "109";
 comments[81] = "Id Pregunta: 10069. TIC A2, libre, Examen 2013";


//  Id pregunta: 10072 Año de creación de pregunta: 2014-01-01
 questions[82]= "83)  El VLR en una arquitectura de red m&oacute;vil, es una base de datos:";
 choices[82]= new Array();
 choices[82][0] = "Donde est&aacute;n inscritos todos los clientes de un operador, que se utiliza para la gesti&oacute;n de abonados m&oacute;viles.";
 choices[82][1] = "Asociada a un MSC, donde se almacena informaci&oacute;n din&aacute;mica sobre los usuarios transe&uacute;ntes en el &aacute;rea geogr&aacute;fica cubierta por la MSC.";
 choices[82][2] = "Donde se guardan las identidades IMSI de los clientes junto con la clave secreta de identificaci&oacute;n de cada usuario.";
 choices[82][3] = "Que contiene las identidades de los equipos m&oacute;viles, el IMEI que permite identificar de forma inequ&iacute;voca a un terminal a escala internacional.";
 answers[82] = choices[82][1];
 units[82] = "108";
 comments[82] = "Id Pregunta: 10072. TIC A2, libre, Examen 2013";


//  Id pregunta: 10088 Año de creación de pregunta: 2014-01-01
 questions[83]= "84)  En la metodolog&iacute;a SCRUM existen distintos tipo de reuniones. &iquest;Qu&eacute; orden cronol&oacute;gico suelen tener?";
 choices[83]= new Array();
 choices[83][0] = "Daily Scrum, Scrum de Scrum, Sprint Planning Meeting, Sprint Review Meeting y Spring Retrospective.";
 choices[83][1] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Sprint Review Meeting y Spring Retrospective.";
 choices[83][2] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Spring Retrospective y Sprint Review Meeting. ";
 choices[83][3] = "Sprint Planning Meeting, Daily Scrum,  Sprint Review Meeting, Scrum de Scrum y Spring Retrospective.";
 answers[83] = choices[83][1];
 units[83] = "79";
 comments[83] = "Id Pregunta: 10088. ";


//  Id pregunta: 10096 Año de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el an&aacute;lisis de requisitos, el dominio de la informaci&oacute;n debe analizarse desde 3 puntos de vista. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[84]= new Array();
 choices[84][0] = "Flujo de la informaci&oacute;n";
 choices[84][1] = "Contenido de la informaci&oacute;n";
 choices[84][2] = "Modelo de la informaci&oacute;n";
 choices[84][3] = "Estructura de la informaci&oacute;n";
 answers[84] = choices[84][2];
 units[84] = "78";
 comments[84] = "Id Pregunta: 10096. ";


//  Id pregunta: 10099 Año de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ala la afirmaci&oacute;n correcta sobre el an&aacute;lisis estructurado";
 choices[85]= new Array();
 choices[85][0] = "El modelo ambiental se compone del modelo esencial y el modelo de comportamiento.";
 choices[85][1] = "El modelo esencial se compone del modelo ambiental y el modelo de comportamiento.";
 choices[85][2] = "El modelo de compotamiento se compone del modelo ambiental y el modelo esencial.";
 choices[85][3] = "El modelo ambiental se compone del modelo estructural y el modelo esencial.";
 answers[85] = choices[85][1];
 units[85] = "81";
 comments[85] = "Id Pregunta: 10099. ";


//  Id pregunta: 10112 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  El est&aacute;ndar para definici&oacute;n de VLAN es:";
 choices[86]= new Array();
 choices[86][0] = "IEEE 802.1D";
 choices[86][1] = "IEEE 802.1P";
 choices[86][2] = "IEEE 802.1Q";
 choices[86][3] = "IEEE 802.2";
 answers[86] = choices[86][2];
 units[86] = "101";
 comments[86] = "Id Pregunta: 10112. ";


//  Id pregunta: 10127 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[87]= new Array();
 choices[87][0] = "Fault Mangement";
 choices[87][1] = "Configuration Management";
 choices[87][2] = "Accounting Management";
 choices[87][3] = "Improvement Management";
 answers[87] = choices[87][3];
 units[87] = "104";
 comments[87] = "Id Pregunta: 10127. ";


//  Id pregunta: 10148 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  En relaci&oacute;n a las Comunicaciones comerciales por v&iacute;a electr&oacute;nica reguladas por la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[88]= new Array();
 choices[88][0] = "Las comunicaciones comerciales realizadas por v&iacute;a electr&oacute;nica deber&aacute;n ser claramente identificables como tales y la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan tambi&eacute;n deber&aacute; ser claramente identificable.";
 choices[88][1] = "En el caso en el que tengan lugar a trav&eacute;s de correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente incluir&aacute;n al comienzo del mensaje la palabra ''publicidad'' o la abreviatura ''publi''";
 choices[88][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.";
 choices[88][3] = "Lo dispuesto en el apartado anterior no ser&aacute; de aplicaci&oacute;n cuando exista una relaci&oacute;n contractual previa, siempre que el prestador hubiera obtenido de forma l&iacute;cita los datos de contacto del destinatario y los empleara para el env&iacute;o de comunicaciones comerciales referentes a productos o servicios de su propia empresa que sean similares a los que inicialmente fueron objeto de contrataci&oacute;n con el cliente.";
 answers[88] = choices[88][1];
 units[88] = "30";
 comments[88] = "Id Pregunta: 10148. ";


//  Id pregunta: 10176 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  El uso del paradigma de OO se caracteriza por&hellip;.";
 choices[89]= new Array();
 choices[89][0] = "&hellip; el bajo acoplamiento y fuerte cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[89][1] = "&hellip; el alto acoplamiento y d&eacute;bil cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[89][2] = "La Reusabilidad no se encuentra entre sus objetivos";
 choices[89][3] = "La mayor dificultad de la programaci&oacute;n OO reduce la mantenibilidad y modificabilidad de los programas";
 answers[89] = choices[89][0];
 units[89] = "82";
 comments[89] = "Id Pregunta: 10176. ";


//  Id pregunta: 10198 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  Bluetooth 2.0 incluye un mecanismo llamado EDR (Enhanced Data Rate) para incrementar la velocidad de transmisi&oacute;n. Indique cual es la m&aacute;xima velocidad que se alcanza con este mecanismo:";
 choices[90]= new Array();
 choices[90][0] = "3 Mbps";
 choices[90][1] = "2 Mbps";
 choices[90][2] = "5 Mbps";
 choices[90][3] = "1 Mbps";
 answers[90] = choices[90][0];
 units[90] = "107";
 comments[90] = "Id Pregunta: 10198. 3 Mbps se alcanza usando la modulaci&oacute;n 8DPSK, mientras que con la modulaci&oacute;n pi/4-DQPSK se alcanzan 2 Mbps";


//  Id pregunta: 10247 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Pedro crea una librer&iacute;a (LibPeter) y la publica bajo licencia LGPL. FooCorp distribuye una versi&oacute;n modificada de la misma junto con su software propietario. &iquest;Cu&aacute;l de las siguientes no es una obligaci&oacute;n de FooCorp?";
 choices[91]= new Array();
 choices[91][0] = "FooCorp debe proveer un mecanismo para que su software propietario pueda enlazar con nuevas versiones de LibPeter";
 choices[91][1] = "FooCorp debe proveer el c&oacute;digo fuente completo de la versi&oacute;n modificada de LibPeter";
 choices[91][2] = "FooCorp debe comunicar todas sus modificaciones a LibPeter";
 choices[91][3] = "FooCorp debe publicar el c&oacute;digo fuente de su software propietario";
 answers[91] = choices[91][3];
 units[91] = "61";
 comments[91] = "Id Pregunta: 10247. ";


//  Id pregunta: 10305 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[92]= new Array();
 choices[92][0] = "Los ficheros abiertos.";
 choices[92][1] = "El escritorio.";
 choices[92][2] = "Los procesos.";
 choices[92][3] = "Los puertos TCP/IP.";
 answers[92] = choices[92][2];
 units[92] = "53";
 comments[92] = "Id Pregunta: 10305. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10340 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual, el canon por copia privada se encuentra actualmente regulado por:";
 choices[93]= new Array();
 choices[93][0] = "Ley 23/2006";
 choices[93][1] = "Real Decreto Legislativo 1/1996";
 choices[93][2] = "Ley 2/2011";
 choices[93][3] = "Real Decreto 1657/2012";
 answers[93] = choices[93][3];
 units[93] = "36";
 comments[93] = "Id Pregunta: 10340. Actualmente, el procedimiento de pago de la compensaci&oacute;n equitativa por copia privada se realiza con cargo a los Presupuestos Generales del Estado";


//  Id pregunta: 10352 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de evaluaci&oacute;n autom&aacute;tica de la accesibilidad de p&aacute;ginas web?";
 choices[94]= new Array();
 choices[94][0] = "ZEUS";
 choices[94][1] = "HERA";
 choices[94][2] = "BOBBY";
 choices[94][3] = "TAW";
 answers[94] = choices[94][0];
 units[94] = "39";
 comments[94] = "Id Pregunta: 10352. Otras herramientas pueden ser eXaminator, Wave o EvalAccess";


//  Id pregunta: 10363 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  En relaci&oacute;n con la SETSI, se&ntilde;ale la respuesta incorrecta:";
 choices[95]= new Array();
 choices[95][0] = "Sus siglas corresponden a la Secretar&iacute;a de Estado de Telecomunicaciones y Sistemas de la Informaci&oacute;n";
 choices[95][1] = "Est&aacute; integrada dentro del Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[95][2] = "Desarrolla, entre otras funciones, la realizaci&oacute;n de estudios y propuestas de normas t&eacute;cnicas de equipos e instalaciones del sector de las telecomunicaciones";
 choices[95][3] = "El Ministerio de Industria, Energ&iacute;a y Turismo es miembro de la ETSI a trav&eacute;s de la SETSI";
 answers[95] = choices[95][0];
 units[95] = "42";
 comments[95] = "Id Pregunta: 10363. SETSI: Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";


//  Id pregunta: 10441 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En el &aacute;mbito de COBIT, el proceso de Administrar la Calidad se encuentra encuadrado en el dominio de ";
 choices[96]= new Array();
 choices[96][0] = "Planificaci&oacute;n y organizaci&oacute;n.";
 choices[96][1] = "Adquisici&oacute;n e implementaci&oacute;n.";
 choices[96][2] = "Entrega (de servicio) y Soporte. ";
 choices[96][3] = "Monitorizaci&oacute;n.";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 10441. Examen TIC A1 2013";


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


//  Id pregunta: 10534 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En los discos duros magn&eacute;ticos, &iquest;que significa el tiempo de latencia media?";
 choices[98]= new Array();
 choices[98][0] = "Tiempo medio que tarda el cabezal en situarse en la pista deseada";
 choices[98][1] = "Tiempo medio que tarda el cabezal en situarse en la pista y sector deseados";
 choices[98][2] = "Tiempo medio que tarda el cabezal en situarse en el sector deseado, una vez posicionado en la pista";
 choices[98][3] = "Tiempo medio que tarda la controladora en procesar un requerimiento de datos";
 answers[98] = choices[98][2];
 units[98] = "48";
 comments[98] = "Id Pregunta: 10534. ";


//  Id pregunta: 10552 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  La evaluaci&oacute;n del riesgo es:";
 choices[99]= new Array();
 choices[99][0] = "subjetiva";
 choices[99][1] = "objetiva";
 choices[99][2] = "Matem&aacute;tica";
 choices[99][3] = "Estad&iacute;stica";
 answers[99] = choices[99][0];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10552. Todas las metodolog&iacute;as de evaluaci&oacute;n de riesgos se basan en juicios subjetivos en alg&uacute;n momento en el proceso (por ej, para asignar ponderaciones a los distintos par&aacute;metros)";


