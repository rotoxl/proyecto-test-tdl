/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 229 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  En las t&eacute;cnicas de negociaci&oacute;n y de resoluci&oacute;n de conflictos, el 'empowerment' consiste en:";
 choices[0]= new Array();
 choices[0][0] = "Potenciar el di&aacute;logo con reuniones peri&oacute;dicas";
 choices[0][1] = "Establecer una pauta a seguir como norma general indiscutible";
 choices[0][2] = "Dar poder a los subordinados para que se impliquen en la organizaci&oacute;n";
 choices[0][3] = "Nada de lo anterior es correcto";
 answers[0] = choices[0][2];
 units[0] = "28";
 comments[0] = "Id Pregunta: 229. negociaci&oacute;n";


//  Id pregunta: 409 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  Respecto al derecho de rectificaci&oacute;n y cancelaci&oacute;n es falso que:";
 choices[1]= new Array();
 choices[1][0] = "Si los datos rectificados o cancelados hubiesen sido previamente cedidos, el responsable del fichero deber&aacute; notificar la rectificaci&oacute;n o cancelaci&oacute;n efectiva al cesionario";
 choices[1][1] = "Que se podr&aacute;, en las circunstancias que se establezcan reglamentariamente, exigir una m&iacute;nima contraprestaci&oacute;n por los gastos de gesti&oacute;n que dicha rectificaci&oacute;n ocasione justificadamente";
 choices[1][2] = "Es un derecho, recogido en la LOPD, de todos los ciudadanos";
 choices[1][3] = "Que se pueda reclamar ante la Agencia de Protecci&oacute;n de Datos en el caso de que no se facilite el libre ejercicio de este derecho";
 answers[1] = choices[1][1];
 units[1] = "29";
 comments[1] = "Id Pregunta: 409. ";


//  Id pregunta: 530 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  Un auditor inform&aacute;tico deber&aacute; verificar:";
 choices[2]= new Array();
 choices[2][0] = "Cumplimiento de objetivos de la organizaci&oacute;n";
 choices[2][1] = "Adecuaci&oacute;n de procedimientos de control";
 choices[2][2] = "Uso de metodolog&iacute;as seg&uacute;n est&aacute;ndares de la organizaci&oacute;n";
 choices[2][3] = "Todas";
 answers[2] = choices[2][3];
 units[2] = "31, 32, 33";
 comments[2] = "Id Pregunta: 530. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 579 Año de creación de pregunta: 2006-01-01
 questions[3]= "4)  Cual de las siguientes afirmaciones no es una ventaja de una organizaci&oacute;n estructurada de forma funcional";
 choices[3]= new Array();
 choices[3][0] = "Se aprovechan mucho mejor los recursos humanos al no estar adjudicados a un &uacute;nico proyecto.";
 choices[3][1] = "Se conoce mejor la organizaci&oacute;n desde arriba";
 choices[3][2] = "Al trabajar los empleados  en diferentes aplicaciones se expecializan en ellas";
 choices[3][3] = "Se evita el riesgo de la dependencia excesiva de unos pocos expertos";
 answers[3] = choices[3][2];
 units[3] = "26";
 comments[3] = "Id Pregunta: 579. ";


//  Id pregunta: 629 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  Qu&eacute; derecho de explotaci&oacute;n no reconoce expl&iacute;citamente la ley espa&ntilde;ola de propiedad intelectual:";
 choices[4]= new Array();
 choices[4][0] = "Derecho de integridad";
 choices[4][1] = "Derecho de distribuci&oacute;n.";
 choices[4][2] = "Derecho de reproducci&oacute;n.";
 choices[4][3] = "Derecho de comunicaci&oacute;n p&uacute;blica.";
 answers[4] = choices[4][0];
 units[4] = "36";
 comments[4] = "Id Pregunta: 629. ";


//  Id pregunta: 691 Año de creación de pregunta: 2009-01-01
 questions[5]= "6)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de: ";
 choices[5]= new Array();
 choices[5][0] = "3 meses";
 choices[5][1] = "6 meses";
 choices[5][2] = "12 meses";
 choices[5][3] = "2 a&ntilde;os";
 answers[5] = choices[5][3];
 units[5] = "30";
 comments[5] = "Id Pregunta: 691. reglamentariamente se podr&aacute; reducir a seis meses o ampliar a dos a&ntilde;os, como permite la Directiva 2006/24/CE";


//  Id pregunta: 762 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  La orden chmod";
 choices[6]= new Array();
 choices[6][0] = "bloquea un archivo en windows";
 choices[6][1] = "cambia los permisos de un achivo en linux - unix";
 choices[6][2] = "crea un directorio modificable en unix";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][1];
 units[6] = "52,53";
 comments[6] = "Id Pregunta: 762. ";


//  Id pregunta: 837 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a Linux?:";
 choices[7]= new Array();
 choices[7][0] = "Est&aacute; constituido por un n&uacute;cleo Kernel, y cada usuario debe construirse las librer&iacute;as y programas para poderlo utilizar";
 choices[7][1] = "Es un sistema operativo compatible con Unix";
 choices[7][2] = "Es software libre";
 choices[7][3] = "El sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[7] = choices[7][0];
 units[7] = "52, 53";
 comments[7] = "Id Pregunta: 837. ";


//  Id pregunta: 871 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes principios no forman parte de los doce que Codd estableci&oacute; en 1985 para que una base de datos pueda considerarse relacional si se satisfacen al menos seis de ellos?:";
 choices[8]= new Array();
 choices[8][0] = "Regla de la no subversi&oacute;n";
 choices[8][1] = "Independencia l&oacute;gica de los datos";
 choices[8][2] = "Actualizaci&oacute;n de vistas";
 choices[8][3] = "Consistencia de los datos";
 answers[8] = choices[8][3];
 units[8] = "58";
 comments[8] = "Id Pregunta: 871. ";


//  Id pregunta: 892 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;les son los condicionantes que originan la necesidad espec&iacute;fica de gestionar los entornos distribuidos?:";
 choices[9]= new Array();
 choices[9][0] = "Mayor complejidad de sistemas por su heterogeneidad, dispersi&oacute;n geogr&aacute;fica de los sistemas y recursos, variedad de servicios y distribuci&oacute;n de funciones de los aplicativos";
 choices[9][1] = "Mayores costes de mantenimiento de equipamiento f&iacute;sico y aplicaciones, menores costes de operaci&oacute;n, usuarios inoperativos y dispersi&oacute;n geogr&aacute;fica de los sistemas";
 choices[9][2] = "Dispersi&oacute;n geogr&aacute;fica de los sistemas, mayor coste del equipamiento que en soluciones centralizadas pero menores costes de operaci&oacute;n y aplicativos con funciones distribuidas";
 choices[9][3] = "Todos las respuestas anteriores son correctas";
 answers[9] = choices[9][0];
 units[9] = "50";
 comments[9] = "Id Pregunta: 892. ";


//  Id pregunta: 952 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Como podr&iacute;a hacer que un usuario de una base de datos ANSI SQL solo pudiera tener acceso a dos columnas de cada fila de una tabla:";
 choices[10]= new Array();
 choices[10][0] = "Utilizando la sentencia GRANT para conceder derechos al usuario sobre esas dos filas";
 choices[10][1] = "Creando una vista al efecto con solo esas dos columnas";
 choices[10][2] = "Utilizando la sentencia ALTER TABLE";
 choices[10][3] = "A y B son ciertas";
 answers[10] = choices[10][1];
 units[10] = "58";
 comments[10] = "Id Pregunta: 952. ";


//  Id pregunta: 987 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Dentro de los modos de direccionamiento se llama direccionamiento indirecto a:";
 choices[11]= new Array();
 choices[11][0] = "Cuando el objeto se halla direccionado en la propia instrucci&oacute;n";
 choices[11][1] = "Cuando el objeto direccionado es la direcci&oacute;n del objeto buscado";
 choices[11][2] = "Cuando el objeto est&aacute; en un direcci&oacute;n predeterminada";
 choices[11][3] = "Cuando se expresa un desplazamiento sobre una direcci&oacute;n base";
 answers[11] = choices[11][1];
 units[11] = "52";
 comments[11] = "Id Pregunta: 987. ";


//  Id pregunta: 1080 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el entorno de Bases de Datos, los &iacute;ndices son de vital importancia en las transacciones de acceso &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?:";
 choices[12]= new Array();
 choices[12][0] = "El &iacute;ndice tambi&eacute;n es una tabla almacenada en disco";
 choices[12][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos";
 choices[12][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario";
 choices[12][3] = "Las actualizaciones de &iacute;ndices no consumen recursos";
 answers[12] = choices[12][3];
 units[12] = "57";
 comments[12] = "Id Pregunta: 1080. ";


//  Id pregunta: 1095 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el subsistema de almacenamiento de un ordenador, se define punto de memoria como:";
 choices[13]= new Array();
 choices[13][0] = "El elemento que almacena un bit";
 choices[13][1] = "El elemento que almacena una palabra";
 choices[13][2] = "El elemento que almacena un byte";
 choices[13][3] = "El elemento que almacena una unidad de datos l&oacute;gicos";
 answers[13] = choices[13][0];
 units[13] = "47";
 comments[13] = "Id Pregunta: 1095. ";


//  Id pregunta: 1231 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  La memoria RAM est&aacute;tica se diferencia de la RAM din&aacute;mica:";
 choices[14]= new Array();
 choices[14][0] = "En que la est&aacute;tica es m&aacute;s r&aacute;pida que la din&aacute;mica";
 choices[14][1] = "En que la est&aacute;tica es de s&oacute;lo lectura y la din&aacute;mica de lectura/escritura";
 choices[14][2] = "En que la est&aacute;tica no pierde su informaci&oacute;n si se interrumpe la alimentaci&oacute;n y la din&aacute;mica s&iacute;,";
 choices[14][3] = "En que la RAM est&aacute;tica no necesita ciclos de refresco y la din&aacute;mica s&iacute;";
 answers[14] = choices[14][3];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1231. ";


//  Id pregunta: 1234 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  La multiprogramaci&oacute;n y el tiempo compartido, en los sistemas operativos, ocasionan:";
 choices[15]= new Array();
 choices[15][0] = "Que haya que crear mecanismos de seguridad como cortafuegos y sistemas de alimentaci&oacute;n ininterrumpida";
 choices[15][1] = "Que haya que crear mecanismos de protecci&oacute;n de injerencias entre diversos trabajos simult&aacute;neos, y entre diversos usuarios que quieran acceder a archivos o recursos como la impresora o los discos";
 choices[15][2] = "Que haya que comprobar al apagar el ordenador si a&uacute;n no han cerrado su sesi&oacute;n todos los usuarios";
 choices[15][3] = "Que haya que crear sistemas de protecci&oacute;n del monitor para evitar ataques no autorizados";
 answers[15] = choices[15][1];
 units[15] = "52";
 comments[15] = "Id Pregunta: 1234. ";


//  Id pregunta: 1338 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Seg&uacute;n la taxonom&iacute;a de Flynn de arquitecturas con proceso en paralelo, una m&aacute;quina MISD:";
 choices[16]= new Array();
 choices[16][0] = "Es la que se corresponde con la arquitectura de Von Neumann";
 choices[16][1] = "Es la estructura de un sistema con multiprocesador";
 choices[16][2] = "Es una superestructura pipe-line formada por varios procesadores, en la que cada uno hace parte del proceso sobre el flujo de datos que circula entre ellos";
 choices[16][3] = "No se corresponde con nada de lo anterior";
 answers[16] = choices[16][2];
 units[16] = "45";
 comments[16] = "Id Pregunta: 1338. ";


//  Id pregunta: 1385 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  Un microprocesador, cuya frecuencia de reloj es de 300 Mhz y ejecuta 4 instrucciones/ciclo, puede ejecutar:";
 choices[17]= new Array();
 choices[17][0] = "1,2 Mips";
 choices[17][1] = "300 Mips";
 choices[17][2] = "300.000 instrucciones/segundo";
 choices[17][3] = "1200 Mips";
 answers[17] = choices[17][3];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1385. ";


//  Id pregunta: 1651 Año de creación de pregunta: 2004-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no son herramientas o plataformas de e-learning ?";
 choices[18]= new Array();
 choices[18][0] = "aTutor";
 choices[18][1] = "WebCT";
 choices[18][2] = "eSchool";
 choices[18][3] = "Blackboard";
 answers[18] = choices[18][2];
 units[18] = "66";
 comments[18] = "Id Pregunta: 1651. ";


//  Id pregunta: 1696 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  La m&iacute;nima unidad de informaci&oacute;n gr&aacute;fica que puede ser controlada, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Bit";
 choices[19][1] = "GIU";
 choices[19][2] = "Resoluci&oacute;n";
 choices[19][3] = "Pixel";
 answers[19] = choices[19][3];
 units[19] = "46";
 comments[19] = "Id Pregunta: 1696. ";


//  Id pregunta: 1922 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  Considere un sistema operativo Windows con memoria virtual paginada. Indique qu&eacute; aseveraci&oacute;n es cierta";
 choices[20]= new Array();
 choices[20][0] = "El tama&ntilde;o de la tabla de p&aacute;ginas es directamente proporcional al tama&ntilde;o de la p&aacute;gina";
 choices[20][1] = "El sistema operativo no puede modificar las tablas de p&aacute;ginas de un proceso";
 choices[20][2] = "El tama&ntilde;o de la memoria virtual est&aacute; determinado, entre otros, por el tama&ntilde;o de la direcci&oacute;n del procesador";
 choices[20][3] = "Los fallos de p&aacute;gina son tratados por el hardware";
 answers[20] = choices[20][2];
 units[20] = "56";
 comments[20] = "Id Pregunta: 1922. ";


//  Id pregunta: 1938 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  Dentro del kernel de Unix, el n&uacute;cleo dependiente";
 choices[21]= new Array();
 choices[21][0] = "Controla la ejecuci&oacute;n de procesos";
 choices[21][1] = "Asigna memoria principal a un proceso de ejecuci&oacute;n";
 choices[21][2] = "Permite el acceso controlado de los procesos a los perif&eacute;ricos";
 choices[21][3] = "Se encarga de las interrupciones";
 answers[21] = choices[21][3];
 units[21] = "53";
 comments[21] = "Id Pregunta: 1938. ";


//  Id pregunta: 1997 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida, hace enfasis en el control de riesgos?";
 choices[22]= new Array();
 choices[22][0] = "Espiral";
 choices[22][1] = "Cascada";
 choices[22][2] = "Ambos";
 choices[22][3] = "Ninguno";
 answers[22] = choices[22][0];
 units[22] = "76";
 comments[22] = "Id Pregunta: 1997. Pregunta TIC-B 2003";


//  Id pregunta: 2143 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas tiene una visi&oacute;n evolutiva?:";
 choices[23]= new Array();
 choices[23][0] = "Diagrama de flujo de datos";
 choices[23][1] = "Diagrama de estructura de datos";
 choices[23][2] = "Historia de la vida de las entidades";
 choices[23][3] = "Ninguna de las anteriores, ya que son t&eacute;cnicas orientadas a datos o flujos";
 answers[23] = choices[23][2];
 units[23] = "81";
 comments[23] = "Id Pregunta: 2143. ";


//  Id pregunta: 2184 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l es la versi&oacute;n actual de la m&eacute;todolog&iacute;a M&eacute;trica?:";
 choices[24]= new Array();
 choices[24][0] = "v1";
 choices[24][1] = "v2";
 choices[24][2] = "v2.1";
 choices[24][3] = "v3";
 answers[24] = choices[24][3];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2184. ";


//  Id pregunta: 2224 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  Seg&uacute;n McCall, a la extensi&oacute;n por la cual un programa ejecuta la funci&oacute;n buscada con la precisi&oacute;n requerida se llama:";
 choices[25]= new Array();
 choices[25][0] = "Correcci&oacute;n";
 choices[25][1] = "Fiabilidad";
 choices[25][2] = "Eficiencia";
 choices[25][3] = "Integridad";
 answers[25] = choices[25][1];
 units[25] = "88";
 comments[25] = "Id Pregunta: 2224. ";


//  Id pregunta: 2230 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Al esfuerzo requeriddo para transferir un programa desde una cierta configuraci&oacute;n hardware o entorno operativo a otro se llama:";
 choices[26]= new Array();
 choices[26][0] = "Portabilidad";
 choices[26][1] = "Reusabilidad";
 choices[26][2] = "Interoperatividad";
 choices[26][3] = "Mantenibilidad";
 answers[26] = choices[26][0];
 units[26] = "89";
 comments[26] = "Id Pregunta: 2230. ";


//  Id pregunta: 2448 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  Las secuencias de ejecuci&oacute;n de los programas, el espacio requerido, memoria que utilizan&hellip;, son definidos en los:";
 choices[27]= new Array();
 choices[27][0] = "Manuales de procedimientos";
 choices[27][1] = "Manuales de usuarios";
 choices[27][2] = "Manuales de explotaci&oacute;n";
 choices[27][3] = "Manuales de contingencias";
 answers[27] = choices[27][2];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2448. ";


//  Id pregunta: 2602 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest; Cu&aacute;l de las siguientes actividades no puede realizarse en paralelo en las fase de ASI de Metrica v3?";
 choices[28]= new Array();
 choices[28][0] = "Identificaci&oacute;n de subsistemas de an&aacute;lisis";
 choices[28][1] = "An&aacute;lisis de consistencia";
 choices[28][2] = "Definici&oacute;n de interfaces de usuario";
 choices[28][3] = "An&aacute;lisis de casos de uso";
 answers[28] = choices[28][1];
 units[28] = "86";
 comments[28] = "Id Pregunta: 2602. ";


//  Id pregunta: 2653 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  La versi&oacute;n cocomo II guarda alg&uacute;n tipo de compatibilidad con la versi&oacute;n anterior";
 choices[29]= new Array();
 choices[29][0] = "No, es radicalmente diferente pues las t&eacute;cnicas de desarrollo SW han cambiado drasticamente desde la primera versi&oacute;n";
 choices[29][1] = "S&iacute; se ha guardado la compatibilidad con la versi&oacute;n anterior recogiendo los cambios actuales en desarrollo SW, por ejemplo la reutilizaci&oacute;n y el desarrollo con componentes";
 choices[29][2] = "S&iacute;, y lo &uacute;nico diferentes es la inclusi&oacute;n de nuevas variables explicativas en el modelo intermedio para reflejar los cambios en el desarrollo SW actual";
 choices[29][3] = "No existe la versi&oacute;n II de cocomo";
 answers[29] = choices[29][1];
 units[29] = "86";
 comments[29] = "Id Pregunta: 2653. ";


//  Id pregunta: 2672 Año de creación de pregunta: 2003-01-01
 questions[30]= "31)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n el m&eacute;todo que consiste en que el usuario indica si entre los textos recuperados hay algunos relevantes o no, y el sistema modifica as&iacute; el vector de b&uacute;squeda se denomina:";
 choices[30]= new Array();
 choices[30][0] = "Retroalimentaci&oacute;n.";
 choices[30][1] = "Modelo booleano.";
 choices[30][2] = "lenguaje natural.";
 choices[30][3] = "L&oacute;gica borrosa.";
 answers[30] = choices[30][0];
 units[30] = "96";
 comments[30] = "Id Pregunta: 2672. ";


//  Id pregunta: 2894 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes planes no formar&iacute;a parte de un Plan de Contingencias?:";
 choices[31]= new Array();
 choices[31][0] = "Plan de emergencia";
 choices[31][1] = "Plan de sistemas";
 choices[31][2] = "Plan de recuperaci&oacute;n";
 choices[31][3] = "Plan de respaldo";
 answers[31] = choices[31][1];
 units[31] = "31";
 comments[31] = "Id Pregunta: 2894. ";


//  Id pregunta: 3040 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes protocolos de internet relacionados con el correo electr&oacute;nico permite descargar selectivamente los mensajes de entrada del servidor de correo?:";
 choices[32]= new Array();
 choices[32][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[32][1] = "POP3 (Post Office Protocol versi&oacute;n 3)";
 choices[32][2] = "IMAP4 (Internet Message Access Protocol versi&oacute;n 4)";
 choices[32][3] = "S/MIME (Secure Multipurpose Internet Mail Extensions)";
 answers[32] = choices[32][2];
 units[32] = "106";
 comments[32] = "Id Pregunta: 3040. ";


//  Id pregunta: 3049 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Qu&eacute; es GOPHER?:";
 choices[33]= new Array();
 choices[33][0] = "Un protocolo de comunicaci&oacute;n entre redes Ethernet";
 choices[33][1] = "Un sistema operativo multitarea y multipuesto desarrollado por NeXT";
 choices[33][2] = "Un sistema disponible en Internet para b&uacute;squeda y transmisi&oacute;n de ficheros";
 choices[33][3] = "Nada de lo anterior";
 answers[33] = choices[33][2];
 units[33] = "112";
 comments[33] = "Id Pregunta: 3049. ";


//  Id pregunta: 3152 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto del correo electr&oacute;nico?:";
 choices[34]= new Array();
 choices[34][0] = "Seg&uacute;n MIME los textos se codifican en 7 bits";
 choices[34][1] = "MIME puede encapsular datos EDI";
 choices[34][2] = "SMTP no soporta servicios de seguridad";
 choices[34][3] = "MIME proporciona seguridad";
 answers[34] = choices[34][3];
 units[34] = "106";
 comments[34] = "Id Pregunta: 3152. ";


//  Id pregunta: 3272 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;Entre que dos dispositivos se utiliza el NNI (network node interface)?:";
 choices[35]= new Array();
 choices[35][0] = "Dos switches ATM";
 choices[35][1] = "Dos sistemas finales ATM";
 choices[35][2] = "Un DSU/CSU y un router";
 choices[35][3] = "Un sistema final ATM y un switch";
 answers[35] = choices[35][0];
 units[35] = "109";
 comments[35] = "Id Pregunta: 3272. ";


//  Id pregunta: 3276 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes respecto del funcionamiento de TCP/IP no es cierta?";
 choices[36]= new Array();
 choices[36][0] = "Los routers no mantienen estado de las posibles conexiones extremo a extremo, y a nivel de red no existe el concepto de conexi&oacute;n";
 choices[36][1] = "Los paquetes entre un mismo par &lt;origen, destino&gt;, una vez seleccionada la ruta adecuada, deben seguir la misma ruta hasta el final de la transmisi&oacute;n";
 choices[36][2] = "No se garantiza capacidad m&iacute;nima, ni retardo m&aacute;ximo, ni variaciones acotadas de los retardos";
 choices[36][3] = "No se garantiza la entrega ni el orden de entrega, aunque s&iacute; la integridad del segmento";
 answers[36] = choices[36][1];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3276. ";


//  Id pregunta: 3348 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Cuando el comando &lsquo;ping 127.0.0.1&rsquo; produce un eco correcto:";
 choices[37]= new Array();
 choices[37][0] = "Significa que la tarjeta de red del ordenador donde se ejecuta funciona correctamente";
 choices[37][1] = "Significa que la pila de protocolos TCP/IP del ordenador donde se ejecuta funciona correctamente, aunque la tarjeta de red del mismo ordenador falle";
 choices[37][2] = "El mensaje de eco incluye el n&uacute;mero de saltos entre dos ordenadores en la red IP";
 choices[37][3] = "Nada de lo anterior es correcto";
 answers[37] = choices[37][1];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3348. ";


//  Id pregunta: 3397 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  El nivel f&iacute;sico incorpora un mecanismo de deteccion de canal libre que se denomina dentro de la especificaci&oacute;n 802.11:";
 choices[38]= new Array();
 choices[38][0] = "Carrier Detection";
 choices[38][1] = "Clear Channel Assessment";
 choices[38][2] = "Channel Check";
 choices[38][3] = "Carrier Assesment";
 answers[38] = choices[38][1];
 units[38] = "107";
 comments[38] = "Id Pregunta: 3397. ";


//  Id pregunta: 3448 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  El protocolo del stack TCP/IP que define el acceso interactivo a un ordenador remoto es:";
 choices[39]= new Array();
 choices[39][0] = "FTP";
 choices[39][1] = "WAIS";
 choices[39][2] = "Telnet";
 choices[39][3] = "Mail";
 answers[39] = choices[39][2];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3448. ";


//  Id pregunta: 3508 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  En el nivel de enlace, usado en redes locales, el subnivel que garantiza la independencia de las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n (par trenzado, cable coaxial, fibra &oacute;ptica...) es:";
 choices[40]= new Array();
 choices[40][0] = "El MAC (Medium Access Control)";
 choices[40][1] = "El LLC (Logical Link Control)";
 choices[40][2] = "Un puente";
 choices[40][3] = "Un repetidor";
 answers[40] = choices[40][0];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3508. ";


//  Id pregunta: 3749 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  Mediante la tecnolog&iacute;a EDGE se pueden llegar a conseguir velocidades de:";
 choices[41]= new Array();
 choices[41][0] = "384 kbps";
 choices[41][1] = "2 Mbps";
 choices[41][2] = "115 kbps";
 choices[41][3] = "1544 kbps";
 answers[41] = choices[41][0];
 units[41] = "108";
 comments[41] = "Id Pregunta: 3749. ";


//  Id pregunta: 3885 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Qu&eacute; es JavaScript?";
 choices[42]= new Array();
 choices[42][0] = "Un lenguaje de validaci&oacute;n de formularios en p&aacute;ginas Web";
 choices[42][1] = "Es una implementaci&oacute;n del ECMA 262";
 choices[42][2] = "Es un lenguaje Java reducido para Internet que sustituye a CGI ";
 choices[42][3] = "Es un lenguaje que soporta objetos y funciones, pero no clases de objetos ni herencias entre ellos";
 answers[42] = choices[42][3];
 units[42] = "114";
 comments[42] = "Id Pregunta: 3885. ";


//  Id pregunta: 3899 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[43]= new Array();
 choices[43][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[43][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[43][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[43][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[43] = choices[43][1];
 units[43] = "99";
 comments[43] = "Id Pregunta: 3899. ";


//  Id pregunta: 3989 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  La t&eacute;cnica NAT no permite:";
 choices[44]= new Array();
 choices[44][0] = "Implementar una pasarela FTP.";
 choices[44][1] = "Optimizar el uso de direccionamiento IP p&uacute;blico.";
 choices[44][2] = "Aislar el espacio de direccionamiento p&uacute;blico del privado.";
 choices[44][3] = "Asignar direcciones din&aacute;micas para acceso a Internet.";
 answers[44] = choices[44][0];
 units[44] = "102";
 comments[44] = "Id Pregunta: 3989. ";


//  Id pregunta: 4037 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  El servicio universal definido en Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, debe permitir al usuario final la posibilidad de:";
 choices[45]= new Array();
 choices[45][0] = "Efectuar y recibir llamadas telef&oacute;nicas.";
 choices[45][1] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de fax.";
 choices[45][2] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de fax y datos a velocidad suficiente para acceder de forma funcional a Internet.";
 choices[45][3] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de datos a velocidad suficiente para acceder de forma funcional a Internet.";
 answers[45] = choices[45][2];
 units[45] = "110";
 comments[45] = "Id Pregunta: 4037. ";


//  Id pregunta: 4150 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  Sniffer de paquetes desarrollado por el FBI para la monitorizaci&oacute;n de las transmisiones electr&oacute;nicas de criminales";
 choices[46]= new Array();
 choices[46][0] = "Carnivore";
 choices[46][1] = "Internet Key Exchange (IKE)";
 choices[46][2] = "Kerberos";
 choices[46][3] = "SSL";
 answers[46] = choices[46][0];
 units[46] = "111";
 comments[46] = "Id Pregunta: 4150. ";


//  Id pregunta: 4155 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  Documento que indica por escrito como una organizaci&oacute;n planea proteger los recursos f&iacute;sicos e inform&aacute;ticos";
 choices[47]= new Array();
 choices[47][0] = "Acuerdo de Licencia de Usuario Final (EULA)";
 choices[47][1] = "Pol&iacute;tica de Seguridad";
 choices[47][2] = "Acuerdo de nivel de servicio (SLA)";
 choices[47][3] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 answers[47] = choices[47][1];
 units[47] = "97";
 comments[47] = "Id Pregunta: 4155. ";


//  Id pregunta: 4332 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Una entidad estatal emplea a 3.000 personas (250 en el departamento TIC), gestiona un presupuesto de gastos de 1.000 millones de Euros, tiene una base de datos central de 4.000 millones de registros, y registra un volumen de 45 millones de transacciones anuales. Una autoevaluaci&oacute;n de riesgos realizada recientemente ha concluido en la necesidad de establecer una unidad/funci&oacute;n de auditor&iacute;a inform&aacute;tica. La ubicaci&oacute;n org&aacute;nica m&aacute;s adecuada de esta nueva unidad ser&iacute;a:";
 choices[48]= new Array();
 choices[48][0] = "Dentro del Departamento TIC, en dependencia directa del Director de Sistemas de Informaci&oacute;n.";
 choices[48][1] = "Dentro del Departamento TIC, dependiendo del Administrador Corporativo de Seguridad.";
 choices[48][2] = "Dentro de la Unidad de Auditor&iacute;a Interna.";
 choices[48][3] = "Dentro de la Secretar&iacute;a General o unidad de servicios generales.";
 answers[48] = choices[48][2];
 units[48] = "";
 comments[48] = "Id Pregunta: 4332. ";


//  Id pregunta: 4408 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Qu&eacute; sentencia JCL (Job Control Language) tiene como funci&oacute;n principal avisar al sistema de que comienza un nuevo trabajo en la corriente de entrada?";
 choices[49]= new Array();
 choices[49][0] = "La sentencia JOB.";
 choices[49][1] = "La sentencia JCLLIB.";
 choices[49][2] = "La sentencia PROC.";
 choices[49][3] = "La sentencia EXEC.";
 answers[49] = choices[49][0];
 units[49] = "";
 comments[49] = "Id Pregunta: 4408. ";


//  Id pregunta: 4508 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Un organismo europeo de normalizaci&oacute;n, tiene como misi&oacute;n producir normas de telecomunicaciones para hoy y para el futuro. Sus siglas son:";
 choices[50]= new Array();
 choices[50][0] = "ETSI.";
 choices[50][1] = "CEN";
 choices[50][2] = "CENELEC";
 choices[50][3] = "CEPT";
 answers[50] = choices[50][0];
 units[50] = "42";
 comments[50] = "Id Pregunta: 4508. ";


//  Id pregunta: 4722 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  El uso de Sistemas Abiertos permite una serie de ventajas, indique cual de ellas no lo es.";
 choices[51]= new Array();
 choices[51][0] = "Mejorar, en general, la relaci&oacute;n precio/rendimiento.";
 choices[51][1] = "Garantiza la libertad de elecci&oacute;n.";
 choices[51][2] = "Facilita la gesti&oacute;n del sistema frente a los complejos sistemas propietarios";
 choices[51][3] = "Protege la inversi&oacute;n realizada en el equipo f&iacute;sico";
 answers[51] = choices[51][2];
 units[51] = "40";
 comments[51] = "Id Pregunta: 4722. Examen 2006 JCYL";


//  Id pregunta: 4807 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a ADSL (Asymmetrical Digital Subscriber Line) NO es cierta?";
 choices[52]= new Array();
 choices[52][0] = "Una caracter&iacute;stica importante de ADSL, definido en la recomendaci&oacute;n G.992.1 de ITU-T (InternationalTelecommunications Union-Telecommunications), es la compartici&oacute;n del espectro disponible en el partelef&oacute;nico con el servicio telef&oacute;nico, permitiendo el acceso simult&aacute;neo a ambos servicios. Esto se logramediante el empleo de unos filtros denominados &quot;splitters&quot;";
 choices[52][1] = "En un primer momento, las principales t&eacute;cnicas de modulaci&oacute;n utilizadas en ADSL eran CAP (Carrier-lessAmplitude and Phase Modulation) y DMT (Discrete Multi-Tone), aunque finalmente los organismos deestandarizaci&oacute;n se decantaron por esta &uacute;ltima";
 choices[52][2] = "ADSL2+ es una evoluci&oacute;n del sistema ADSL y ADSL2 basado en la recomendaci&oacute;n de la ITU-T G.992.5,que posibilita adem&aacute;s el uso de modulaci&oacute;n WCDMA (Wide Code Division Multiple Access)";
 choices[52][3] = "El est&aacute;ndar ITU-T G.992.2, tambi&eacute;n denominado &quot;G.Lite&quot; o &quot;ADSL Lite&quot; es una variante de ADSL queproporciona menor caudal, pero tiene la ventaja de no requerir splitters";
 answers[52] = choices[52][2];
 units[52] = "107";
 comments[52] = "Id Pregunta: 4807. ";


//  Id pregunta: 4885 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo queespecifica la forma de encapsular los datos que se van a intercambiar?";
 choices[53]= new Array();
 choices[53][0] = "SSL Handshake";
 choices[53][1] = "SSL Record";
 choices[53][2] = "Cipher Secure Layer";
 choices[53][3] = "Secure Stocker Layer";
 answers[53] = choices[53][1];
 units[53] = "73";
 comments[53] = "Id Pregunta: 4885. ";


//  Id pregunta: 4951 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Seg&uacute;n JAVA EE 5, &iquest;qu&eacute; tipo de Enterprise Bean puede recibir mensajes JMS (Java Message Service)?:";
 choices[54]= new Array();
 choices[54][0] = "Message-Driven Bean.";
 choices[54][1] = "Stateful Session Bean.";
 choices[54][2] = "Stateless Session Bean.";
 choices[54][3] = "Message-Oriented Bean.";
 answers[54] = choices[54][0];
 units[54] = "116";
 comments[54] = "Id Pregunta: 4951. Examen TIC B 2007";


//  Id pregunta: 4969 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes redes no admite asignar niveles de prioridad en el tr&aacute;fico transmitido?:";
 choices[55]= new Array();
 choices[55][0] = "802.6.";
 choices[55][1] = "802.3.";
 choices[55][2] = "802.4.";
 choices[55][3] = "802.5.";
 answers[55] = choices[55][1];
 units[55] = "101";
 comments[55] = "Id Pregunta: 4969. Examen TIC B 2007";


//  Id pregunta: 4985 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Seg&uacute;n la ley 9/2014, General de Telecomunicaciones, la competencia de control e inspecci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico corresponde a:";
 choices[56]= new Array();
 choices[56][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[56][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[56][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[56][3] = "La Sociedad Estatal de Control e Inspecci&oacute;n Radioel&eacute;ctrica.";
 answers[56] = choices[56][0];
 units[56] = "110";
 comments[56] = "Id Pregunta: 4985. Examen TIC B 2007";


//  Id pregunta: 5024 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Cual de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSD-AAPP v.3.0";
 choices[57]= new Array();
 choices[57][0] = "Ponderaci&oacute;n Lineal";
 choices[57][1] = "Permutaci&oacute;n";
 choices[57][2] = "Prometh&eacute;e";
 choices[57][3] = "Distancia al Ideal (TOPSIS)";
 answers[57] = choices[57][1];
 units[57] = "34";
 comments[57] = "Id Pregunta: 5024. Examen TIC A 2007";


//  Id pregunta: 5055 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  Seg&uacute;n la legislaci&oacute;n vigente sobre la Propiedad Intelectual, &iquest;cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con laduraci&oacute;n de la protecci&oacute;n en la explotaci&oacute;n de los derechos de autor de un programa de ordenador, por la personatitular del derecho, es cierta?";
 choices[58]= new Array();
 choices[58][0] = "Si el autor es una persona natural, la duraci&oacute;n de la protecci&oacute;n son 35 a&ntilde;os desde la publicaci&oacute;n delprograma.";
 choices[58][1] = "Si el autor es una persona jur&iacute;dica, la duraci&oacute;n de la protecci&oacute;n ser&aacute; de 99 a&ntilde;os computados desde el 1 deenero del a&ntilde;o siguiente al de divulgaci&oacute;n del programa";
 choices[58][2] = "La protecci&oacute;n es indefinida en el tiempo, desde la creaci&oacute;n del c&oacute;digo objeto del programa";
 choices[58][3] = "Cuando el autor sea una persona natural, durar&aacute;n toda la vida del autor y setenta a&ntilde;os despu&eacute;s de sumuerte o declaraci&oacute;n de fallecimiento";
 answers[58] = choices[58][3];
 units[58] = "36";
 comments[58] = "Id Pregunta: 5055. Examen TIC A 2007";


//  Id pregunta: 5096 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, los servicios de certificaci&oacute;n pueden ser prestados:";
 choices[59]= new Array();
 choices[59][0] = "Solamente por personas f&iacute;sicas o jur&iacute;dicas privadas ";
 choices[59][1] = "Tanto por entidades p&uacute;blicas como por personas f&iacute;sicas o jur&iacute;dicas cuando as&iacute; se establezca de acuerdo con el Derecho nacional";
 choices[59][2] = "Solamente por entidades p&uacute;blicas";
 choices[59][3] = "Por entidades p&uacute;blicas, que expedir&aacute;n los certificados reconocidos, y por personas f&iacute;sicas, que expediran los certificados no reconocidos";
 answers[59] = choices[59][1];
 units[59] = "30";
 comments[59] = "Id Pregunta: 5096. ";


//  Id pregunta: 5257 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  Se&ntilde;ale la falsa:";
 choices[60]= new Array();
 choices[60][0] = "GQM, Goal, Question, Metric, es un m&eacute;todo de desarrollo de m&eacute;tricas";
 choices[60][1] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo se emplea como m&eacute;trica de estimaci&oacute;n de proyectos.";
 choices[60][2] = "Cocomo es un modelo de estimaci&oacute;n algor&iacute;tmico propuesto por Boehm que fundamenta su estimaci&oacute;n en el n&uacute;mero de puntos de funci&oacute;n.";
 choices[60][3] = "Cocomo se aplica en tres modelos: b&aacute;sico, intermedio y avanzado. Estos modelos se dividen a su vez en tres modos: org&aacute;nico, semiacoplado y empotrado.";
 answers[60] = choices[60][2];
 units[60] = "88";
 comments[60] = "Id Pregunta: 5257. ";


//  Id pregunta: 5268 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  En un fichero que contiene datos de car&aacute;cter personal, la presencia de informaci&oacute;n relativa a la minusval&iacute;a de las personas &hellip;";
 choices[61]= new Array();
 choices[61][0] = "significa que ha de estar bajo medidas de seguridad de car&aacute;cter alto de modo general, aunque bajo ciertas circunstancias basta que contemple medidas de seguridad de car&aacute;cter b&aacute;sico";
 choices[61][1] = "al menos de car&aacute;cter medio";
 choices[61][2] = "de car&aacute;cter alto en todas las circunstancias";
 choices[61][3] = "de car&aacute;cter b&aacute;sico en todas las circunstancias";
 answers[61] = choices[61][0];
 units[61] = "29";
 comments[61] = "Id Pregunta: 5268. ";


//  Id pregunta: 5272 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  El DNIe recoge los siguientes datos biom&eacute;tricos";
 choices[62]= new Array();
 choices[62][0] = "Huellas dactilares";
 choices[62][1] = "Iris del ojo";
 choices[62][2] = "Patr&oacute;n facial";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][3];
 units[62] = "74";
 comments[62] = "Id Pregunta: 5272. no recoge huella dactilar completa, s&oacute;lo las minucias";


//  Id pregunta: 5283 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  En Java la herencia es un mecanismo por el que se pueden crear nuevos objetos definidos en t&eacute;rminos de objetos ya existentes. &iquest;Esta permitida la herencia multiple?";
 choices[63]= new Array();
 choices[63][0] = "Si.";
 choices[63][1] = "No.";
 choices[63][2] = "Si con ciertas restricciones.";
 choices[63][3] = "No con ciertas restricciones.";
 answers[63] = choices[63][1];
 units[63] = "60";
 comments[63] = "Id Pregunta: 5283. ";


//  Id pregunta: 5444 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque ";
 choices[64]= new Array();
 choices[64][0] = "el lenguaje Java se deriva de C++.";
 choices[64][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[64][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[64][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin";
 answers[64] = choices[64][1];
 units[64] = "60";
 comments[64] = "Id Pregunta: 5444. Castilla y Le&oacute;n";


//  Id pregunta: 5575 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  &iquest;Qu&eacute; modelo escoger&iacute;a si el objetivo se centra en la mejora de los procesos de desarrollo de aplicaciones?";
 choices[65]= new Array();
 choices[65][0] = "ITIL";
 choices[65][1] = "CMMI";
 choices[65][2] = "COBIT";
 choices[65][3] = "M&Eacute;TRICA";
 answers[65] = choices[65][1];
 units[65] = "98";
 comments[65] = "Id Pregunta: 5575. ";


//  Id pregunta: 5634 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l de las siguientes opciones es correcta:";
 choices[66]= new Array();
 choices[66][0] = "El bus ISA es posterior al bus PCI";
 choices[66][1] = "El bus EISA es anterior al bus ISA";
 choices[66][2] = "El bus PCI es anterior al bus AGP";
 choices[66][3] = "El bus USB es posterior al bus AGP";
 answers[66] = choices[66][2];
 units[66] = "47";
 comments[66] = "Id Pregunta: 5634. ";


//  Id pregunta: 5656 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel medio, las de nivel alto, a los siguientes ficheros:";
 choices[67]= new Array();
 choices[67][0] = "Aquellos de los que sean responsables las entidades financieras, para finalidades relacionadas con la prestaci&oacute;n de servicios financieros";
 choices[67][1] = "Los que contengan o se refieran a datos recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[67][2] = "Aquellos de los que sean responsables las Entidades Gestoras y Servicios Comunes de la Seguridad social y se relacionen con el ejercicio de sus competencias";
 choices[67][3] = "La a) y la b) son correctas";
 answers[67] = choices[67][1];
 units[67] = "29";
 comments[67] = "Id Pregunta: 5656. ";


//  Id pregunta: 5691 Año de creación de pregunta: 2003-01-01
 questions[68]= "69)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Una de las zonas s&oacute;lo es accesible por la Direcci&oacute;n General de la Polic&iacute;a. Se&ntilde;ale su nombre: ";
 choices[68]= new Array();
 choices[68][0] = "Zona p&uacute;blica";
 choices[68][1] = "Zona de seguridad";
 choices[68][2] = "Zona privada";
 choices[68][3] = "Zona confidencial";
 answers[68] = choices[68][1];
 units[68] = "74";
 comments[68] = "Id Pregunta: 5691. ";


//  Id pregunta: 5698 Año de creación de pregunta: 2003-01-01
 questions[69]= "70)  Respecto a la validez de los certificados del DNI electr&oacute;nico, se&ntilde;ale la falsa:";
 choices[69]= new Array();
 choices[69][0] = "La p&eacute;rdida de validez del DNI implica su p&eacute;rdida de validez";
 choices[69][1] = " La renovaci&oacute;n implica la expedici&oacute;n de nuevos certificados";
 choices[69][2] = "La expedici&oacute;n de duplicados implica la expedici&oacute;n de nuevos certificados";
 choices[69][3] = "La caducidad de los certificados implica la renovaci&oacute;n del DNI";
 answers[69] = choices[69][3];
 units[69] = "74";
 comments[69] = "Id Pregunta: 5698. ";


//  Id pregunta: 5752 Año de creación de pregunta: 2009-01-01
 questions[70]= "71)  &iquest;Qu&eacute; longitudes de clave tienen las diferentes versiones del algoritmo AES reconocidas oficialmente por el NIST?";
 choices[70]= new Array();
 choices[70][0] = "64, 128, 256 bits";
 choices[70][1] = "128, 192, 256 bits";
 choices[70][2] = "128, 256, 512 bits";
 choices[70][3] = "128, 256, 384 bits";
 answers[70] = choices[70][1];
 units[70] = "72";
 comments[70] = "Id Pregunta: 5752. ";


//  Id pregunta: 5810 Año de creación de pregunta: 2009-01-01
 questions[71]= "72)  Indique la respuesta correcta respecto al RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico";
 choices[71]= new Array();
 choices[71][0] = "Regula la subasta electr&oacute;nica";
 choices[71][1] = "Proh&iacute;be la subasta electr&oacute;nica";
 choices[71][2] = "Suprime la adjudicaci&oacute;n directa";
 choices[71][3] = "No menciona la subasta electr&oacute;nica";
 answers[71] = choices[71][0];
 units[71] = "41";
 comments[71] = "Id Pregunta: 5810. MAP 2008 A1";


//  Id pregunta: 5892 Año de creación de pregunta: 2009-01-01
 questions[72]= "73)  &iquest;Qu&eacute; es JNDI?";
 choices[72]= new Array();
 choices[72][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[72][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[72][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][0];
 units[72] = "60";
 comments[72] = "Id Pregunta: 5892. ";


//  Id pregunta: 6052 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos corresponde a la tecnolog&iacute;a que proporciona la infraestructura necesaria para la definici&oacute;n de servicios que puedan ser consumidos de manera uniforme sin conocer los detalles de los sistemas que los proporcionan?";
 choices[73]= new Array();
 choices[73][0] = "EAI Brokers (Enterprise Application Integration Brokers).";
 choices[73][1] = "UDDI (Universal Description, Discovery and Integration).";
 choices[73][2] = "CASE (Computer-Aided Software Engineering).";
 choices[73][3] = "ESB (Enterprise Service Bus).";
 answers[73] = choices[73][3];
 units[73] = "51";
 comments[73] = "Id Pregunta: 6052. TIC A 2009";


//  Id pregunta: 6100 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Acerca de las Autoridades de sellado de tiempo:";
 choices[74]= new Array();
 choices[74][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[74][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[74][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[74][3] = "No pueden ser simult&aacute;neamente Prestadores de Servicios de Certificaci&oacute;n seg&uacute;n la definici&oacute;n que de &eacute;stos da la Ley 59/2003 de firma electr&oacute;nica.";
 answers[74] = choices[74][1];
 units[74] = "74";
 comments[74] = "Id Pregunta: 6100. TIC A 2009";


//  Id pregunta: 6237 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  En el marco de trabajo de la gesti&oacute;n de proyectos no se realiza:";
 choices[75]= new Array();
 choices[75][0] = "Gesti&oacute;n del tiempo.";
 choices[75][1] = "Gesti&oacute;n de la calidad.";
 choices[75][2] = "Gesti&oacute;n del cambio.";
 choices[75][3] = "Gesti&oacute;n de contenidos.";
 answers[75] = choices[75][3];
 units[75] = "27";
 comments[75] = "Id Pregunta: 6237. TIC B-2009, bloque desarrollo";


//  Id pregunta: 6271 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  Qu&eacute; estandar define el ciclo de vida de un sistema de informac&oacute;n como el marco de referencia que contiene los procesos, las actividades y las tareas involucradas en el desarrollo, la explotaci&oacute;n y el mantenimiento de un producto de software, abarcando la vida del sistema desde la definici&oacute;n de los requisitos hasta la finalizaci&oacute;n de su uso.";
 choices[76]= new Array();
 choices[76][0] = "ISO-12207";
 choices[76][1] = "ISO-9800";
 choices[76][2] = "ISO-17702";
 choices[76][3] = "ISO-11200";
 answers[76] = choices[76][0];
 units[76] = "76";
 comments[76] = "Id Pregunta: 6271. ";


//  Id pregunta: 6317 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes sentencias es cierta respecto a las bases de datos relacionales?";
 choices[77]= new Array();
 choices[77][0] = "Soportan las interrelaciones l&oacute;gicas entre los datos.";
 choices[77][1] = "No soportan el acceso directo a un registro espec&iacute;fico.";
 choices[77][2] = "Es complicado el acceso a varios registros relacionados con un registro simple.";
 choices[77][3] = "El acceso a los datos es l&oacute;gico, dependiente de las t&eacute;cnicas de instrumentaci&oacute;n f&iacute;sica.";
 answers[77] = choices[77][0];
 units[77] = "58";
 comments[77] = "Id Pregunta: 6317. ";


//  Id pregunta: 6616 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  Seg&uacute;n M&eacute;trica el grupo de Aseguramiento de la Calidad participa en el proyecto bajo el perfil de";
 choices[78]= new Array();
 choices[78][0] = "Consultor";
 choices[78][1] = "Analista";
 choices[78][2] = "Calidad";
 choices[78][3] = "Experto";
 answers[78] = choices[78][1];
 units[78] = "86";
 comments[78] = "Id Pregunta: 6616. ";


//  Id pregunta: 7141 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la vigencia de los certificados electr&oacute;nicos incluidos en el DNI electr&oacute;nico?";
 choices[79]= new Array();
 choices[79][0] = "Dos a&ntilde;os";
 choices[79][1] = "Cuatro a&ntilde;os";
 choices[79][2] = "30 meses";
 choices[79][3] = "18 meses";
 answers[79] = choices[79][2];
 units[79] = "30";
 comments[79] = "Id Pregunta: 7141. Examen TIC B 2009";


//  Id pregunta: 7170 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un Data Mart?";
 choices[80]= new Array();
 choices[80][0] = "Especializado en el almacenamiento de los datos de un &aacute;rea de negocio espec&iacute;fica.";
 choices[80][1] = "Debe ser alimentado siempre desde un Data Warehouse.";
 choices[80][2] = "En los Data Mart OLAP la estructura para el an&aacute;lisis de su informaci&oacute;n se basa en los cubos OLAP.";
 choices[80][3] = "En los Data Mart OLTP la estructura para el an&aacute;lisis de su informaci&oacute;n est&aacute; montada sobre una base de datos OLTP, como en el Data Warehouse.";
 answers[80] = choices[80][1];
 units[80] = "68";
 comments[80] = "Id Pregunta: 7170. Examen TIC B 2009";


//  Id pregunta: 7778 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)   El t&eacute;rmino JigSaw se refiere a:";
 choices[81]= new Array();
 choices[81][0] = " Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor.";
 choices[81][1] = " Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos.";
 choices[81][2] = " Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse.";
 choices[81][3] = " Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos.";
 answers[81] = choices[81][0];
 units[81] = "NULL";
 comments[81] = "Id Pregunta: 7778. Map 2005";


//  Id pregunta: 8029 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)   &iquest;Cu&aacute;l de los siguientes elementos no es utilizado por Java 2?";
 choices[82]= new Array();
 choices[82][0] = " Enteros.";
 choices[82][1] = " Booleanos.";
 choices[82][2] = " Cadenas.";
 choices[82][3] = " Tensores.";
 answers[82] = choices[82][3];
 units[82] = "NULL";
 comments[82] = "Id Pregunta: 8029. Map 2007";


//  Id pregunta: 8140 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)   El m&eacute;todo de Saaty o AHP:";
 choices[83]= new Array();
 choices[83][0] = " Es relativo a accesibilidad web.";
 choices[83][1] = " Es relativo a la decisi&oacute;n multicriterio.";
 choices[83][2] = " Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n.";
 choices[83][3] = " Se refiere al env&iacute;o de datos a un centro de respaldo.";
 answers[83] = choices[83][1];
 units[83] = "NULL";
 comments[83] = "Id Pregunta: 8140. Map 2008";


//  Id pregunta: 8294 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Un socket necesita, para estar correctamente definido, especificar el protocolo de nivel de: ";
 choices[84]= new Array();
 choices[84][0] = "Enlace.";
 choices[84][1] = "Red.";
 choices[84][2] = "Transporte.";
 choices[84][3] = "Aplicaci&oacute;n.";
 answers[84] = choices[84][2];
 units[84] = "111";
 comments[84] = "Id Pregunta: 8294. Examen TIC A2 2010";


//  Id pregunta: 8323 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  La normativa que establece las condiciones t&eacute;cnicas para la emisi&oacute;n del servido de televisi&oacute;n digital terrestre (TDT) en alta definici&oacute;n, es: ";
 choices[85]= new Array();
 choices[85][0] = "Ley 7/2010. ";
 choices[85][1] = "Real Decreto 691/2010. ";
 choices[85][2] = "Directiva 98/48/CE. ";
 choices[85][3] = "Real Decreto 944/2005. ";
 answers[85] = choices[85][1];
 units[85] = "105, 110";
 comments[85] = "Id Pregunta: 8323. Examen TIC A2 2010";


//  Id pregunta: 8382 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Una desventaja de la topolog&iacute;a f&iacute;sica de estrella es que:";
 choices[86]= new Array();
 choices[86][0] = "Requiere m&aacute;s cable que la topolog&iacute;a de bus.";
 choices[86][1] = "Se requieren terminadores.";
 choices[86][2] = "Es dif&iacute;cil conectar nuevos nodos a la red,";
 choices[86][3] = "Toda la red se caer&iacute;a si hubiera una ruptura en el cable principal.";
 answers[86] = choices[86][0];
 units[86] = "102";
 comments[86] = "Id Pregunta: 8382. Examen TIC A2 2010";


//  Id pregunta: 8602 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes es el lenguaje est&aacute;ndar propuesto para la descripci&oacute;n de servicios web bajo protocolo SOAP? ";
 choices[87]= new Array();
 choices[87][0] = "WSDL";
 choices[87][1] = "UDDI";
 choices[87][2] = "XML";
 choices[87][3] = "REST";
 answers[87] = choices[87][0];
 units[87] = "51";
 comments[87] = "Id Pregunta: 8602. Examen TIC A2 2010 interna";


//  Id pregunta: 8639 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[88]= new Array();
 choices[88][0] = "(A, B, C), (A, B, D).";
 choices[88][1] = "(A, B, C), (B, D).";
 choices[88][2] = "(A, B, C),  (A, D).";
 choices[88][3] = "Ya est&aacute; en 2FN.";
 answers[88] = choices[88][1];
 units[88] = "57, 58";
 comments[88] = "Id Pregunta: 8639. Examen TIC A2 2010 interna";


//  Id pregunta: 8868 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  En un modelo entidad-relaci&oacute;n cual es la definici&oacute;n b&aacute;sica que corresponde con el elemento entidad?:";
 choices[89]= new Array();
 choices[89][0] = "Es aquel objeto que existe en el mundo real con una identificaci&oacute;n distinta y con un significado propio";
 choices[89][1] = "Es aquella propiedad que tiene asignado un dominio";
 choices[89][2] = "Es el conjunto de valores que puede tomar un atributo";
 choices[89][3] = "Es la relaci&oacute;n que se establece entre los objetos del modelo";
 answers[89] = choices[89][0];
 units[89] = "80";
 comments[89] = "Id Pregunta: 8868. Analista Ayto. Madrid 2010";


//  Id pregunta: 9102 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes es un tipo de huella digital?";
 choices[90]= new Array();
 choices[90][0] = "Huella sim&eacute;trica.";
 choices[90][1] = "Huella asim&eacute;trica.";
 choices[90][2] = "Huella an&oacute;nima.";
 choices[90][3] = "Todas las anteriores son verdaderas.";
 answers[90] = choices[90][3];
 units[90] = "37";
 comments[90] = "Id Pregunta: 9102. ";


//  Id pregunta: 9452 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  Aquellas pruebas que se realizan en el entorno de desarrollo y tienen como objetivo verificar el funcionamiento global del sistema de informaci&oacute;n completo se denominan:";
 choices[91]= new Array();
 choices[91][0] = "Pruebas unitarias.";
 choices[91][1] = "Pruebas de integraci&oacute;n.";
 choices[91][2] = "Pruebas del sistema.";
 choices[91][3] = "Pruebas de implantaci&oacute;n.";
 answers[91] = choices[91][2];
 units[91] = "86";
 comments[91] = "Id Pregunta: 9452. Examen AGE TIC A1 2011";


//  Id pregunta: 9611 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Qu&eacute; es el FSQL?";
 choices[92]= new Array();
 choices[92][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[92][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[92][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[92][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[92] = choices[92][1];
 units[92] = "58";
 comments[92] = "Id Pregunta: 9611. ";


//  Id pregunta: 9668 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de la taxonom&iacute;a de Flynn se corresponden con una arquitectura monoprocesador?";
 choices[93]= new Array();
 choices[93][0] = "MISD y SISD";
 choices[93][1] = "SIMD y SISD";
 choices[93][2] = "MIMD y MISD";
 choices[93][3] = "SISD y MISD";
 answers[93] = choices[93][1];
 units[93] = "45";
 comments[93] = "Id Pregunta: 9668. ";


//  Id pregunta: 9945 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  El modelo de desarrollo RAD (Rapid Application Development) fue descrito inicialmente por:";
 choices[94]= new Array();
 choices[94][0] = "Codd ";
 choices[94][1] = "Boehm ";
 choices[94][2] = "Chen ";
 choices[94][3] = "James Marti";
 answers[94] = choices[94][3];
 units[94] = "76";
 comments[94] = "Id Pregunta: 9945. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10172 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Respecto los distintos tipos de drivers JDBC, se verifica que:";
 choices[95]= new Array();
 choices[95][0] = "Los drivers JDBC de tipo III son recomendables si la aplicaci&oacute;n Java ha de acceder a diferentes bases de datos o se desconoce el SGBD destino";
 choices[95][1] = "El uso de drivers JDBC de tipo IV evita problemas de dependencia tecnol&oacute;gica del fabricante";
 choices[95][2] = "Al permitir que la aplicaci&oacute;n Java interact&uacute;e con diferentes SGBD, un driver de tipo III no es 100% Java, ya que incluye c&oacute;digo espec&iacute;fico o nativo de cada SGBD";
 choices[95][3] = "Todas las anteriores";
 answers[95] = choices[95][0];
 units[95] = "58";
 comments[95] = "Id Pregunta: 10172. ";


//  Id pregunta: 10279 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En reglas, la inferencia mediante encadenamiento hacia adelante:";
 choices[96]= new Array();
 choices[96][0] = "Requiere en primer lugar que se introduzcan las premisas en la base de hechos";
 choices[96][1] = "Se crea un conjunto conflicto con las reglas cuyo consecuente es el objetivo de la inferencia";
 choices[96][2] = "La regla que se va a disparar siempre se elige de forma aleatoria";
 choices[96][3] = "Si la regla disparada es deductiva, se ejecuta la acci&oacute;n asociada";
 answers[96] = choices[96][0];
 units[96] = "64";
 comments[96] = "Id Pregunta: 10279. ";


//  Id pregunta: 10340 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual, el canon por copia privada se encuentra actualmente regulado por:";
 choices[97]= new Array();
 choices[97][0] = "Ley 23/2006";
 choices[97][1] = "Real Decreto Legislativo 1/1996";
 choices[97][2] = "Ley 2/2011";
 choices[97][3] = "Real Decreto 1657/2012";
 answers[97] = choices[97][3];
 units[97] = "36";
 comments[97] = "Id Pregunta: 10340. Actualmente, el procedimiento de pago de la compensaci&oacute;n equitativa por copia privada se realiza con cargo a los Presupuestos Generales del Estado";


//  Id pregunta: 10342 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta incorrecta:";
 choices[98]= new Array();
 choices[98][0] = "La protecci&oacute;n de un programa de ordenador comprende tambi&eacute;n su documentaci&oacute;n preparatoria, documentaci&oacute;n t&eacute;cnica y manuales de uso";
 choices[98][1] = "La protecci&oacute;n de un programa de ordenador se extiende a cualesquiera versiones sucesivas del programa, as&iacute; como a los programas derivados";
 choices[98][2] = "La protecci&oacute;n mediante los derechos de autor incluye las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador incluidos los que sirven de fundamento a sus interfaces";
 choices[98][3] = "Si un programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la Ley de Propiedad Industrial";
 answers[98] = choices[98][2];
 units[98] = "36";
 comments[98] = "Id Pregunta: 10342. Consultar Art. 96 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10484 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;En qu&eacute; se basa el &eacute;todo de Karner?";
 choices[99]= new Array();
 choices[99][0] = "En la estimaci&oacute;n del esfuerzo por puntos de casos de uso en vez de puntos de funci&oacute;n";
 choices[99][1] = "En determinar las constantes a, b, c y de del m&eacute;todo de Putnam";
 choices[99][2] = "Se aplica en Cocomo semipesado";
 choices[99][3] = "Variante del m&eacute;todo Mark II";
 answers[99] = choices[99][0];
 units[99] = "89";
 comments[99] = "Id Pregunta: 10484. ";


