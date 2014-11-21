/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 191 Año de creación de pregunta: 2004-01-01
 questions[0]= "1)  En relaci&oacute;n a la protecci&oacute;n jur&iacute;dica de los programas de ordenador se&ntilde;arlar la respuesta falsa:";
 choices[0]= new Array();
 choices[0][0] = "Est&aacute; protegidos mediante los derechos de autor cualquier forma de expresi&oacute;n de un programa de ordenador, salvo aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 choices[0][1] = "Est&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se base un programa, incluidos los que sirven de fundamento a sus interfaces";
 choices[0][2] = "La primera venta de una copia de un programa por el titular de los derechos o con su consentimiento, agotar&aacute; el derecho de distribuci&oacute;n de dicha copia";
 choices[0][3] = "La duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute;: para una persona natural toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte; para una persona jur&iacute;dica 70 a&ntilde;os";
 answers[0] = choices[0][1];
 units[0] = "36";
 comments[0] = "Id Pregunta: 191. Similar a examen TIC SS A 2003";


//  Id pregunta: 308 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  La gu&iacute;a de portabilidad de X/OPEN actualmente en vigor es:";
 choices[1]= new Array();
 choices[1][0] = "XGP3";
 choices[1][1] = "XGP4";
 choices[1][2] = "XGP5";
 choices[1][3] = "Todas las respuestas anteriores son correctas";
 answers[1] = choices[1][1];
 units[1] = "40";
 comments[1] = "Id Pregunta: 308. XPG";


//  Id pregunta: 324 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  La organizaci&oacute;n t&iacute;pica de un entorno de producci&oacute;n es la:";
 choices[2]= new Array();
 choices[2][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[2][1] = "Organizaci&oacute;n funcional";
 choices[2][2] = "Organizaci&oacute;n proyecto-staff";
 choices[2][3] = "Organizaci&oacute;n por aplicaciones";
 answers[2] = choices[2][1];
 units[2] = "26";
 comments[2] = "Id Pregunta: 324. organizaci&oacute;n estructural";


//  Id pregunta: 329 Año de creación de pregunta: 2009-01-01
 questions[3]= "4)  Las medidas de seguridad b&aacute;sicas para datos automatizados de car&aacute;cter personal:";
 choices[3]= new Array();
 choices[3][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[3][1] = "La responsabilidad de los registros de acceso est&aacute; bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro est&aacute; activo y que no haya saltos temporales.";
 choices[3][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[3][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos";
 answers[3] = choices[3][2];
 units[3] = "29";
 comments[3] = "Id Pregunta: 329. ";


//  Id pregunta: 464 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Todo sistema etiquetado como X/Open implementa como m&iacute;nimo:";
 choices[4]= new Array();
 choices[4][0] = "Lenguajes COBOL, FORTRAN, PASCAL, C e interoperatividad de PC";
 choices[4][1] = "POSIX y comunicaciones entre procesos";
 choices[4][2] = "Lenguajes C y ADA, junto con gesti&oacute;n de datos ISAM y SQL";
 choices[4][3] = "POSIX y lenguaje C";
 answers[4] = choices[4][3];
 units[4] = "40";
 comments[4] = "Id Pregunta: 464. ";


//  Id pregunta: 621 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  Los criterios comunes (criterios de evaluaci&oacute;n unificados para la seguridad de los productos IT) se corresponden con la norma:";
 choices[5]= new Array();
 choices[5][0] = "ISO 15408";
 choices[5][1] = "ANSI 14508";
 choices[5][2] = "CEN 15408";
 choices[5][3] = "IEEE 14508";
 answers[5] = choices[5][0];
 units[5] = "33";
 comments[5] = "Id Pregunta: 621. ";


//  Id pregunta: 746 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  La ciencia que trata de descifrar mensajes cifrados sin conocer los c&oacute;digos se denomina:";
 choices[6]= new Array();
 choices[6][0] = "Criptoan&aacute;lisis o an&aacute;lisis criptogr&aacute;fico";
 choices[6][1] = "Ingenier&iacute;a social";
 choices[6][2] = "Fuerza Bruta";
 choices[6][3] = "Criptograf&iacute;a";
 answers[6] = choices[6][0];
 units[6] = "72";
 comments[6] = "Id Pregunta: 746. Similar a examen TIC SS A 2003";


//  Id pregunta: 747 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  La criptograf&iacute;a sirve para codificar:";
 choices[7]= new Array();
 choices[7][0] = "Lenguaje manuscrito";
 choices[7][1] = "Lenguaje manuscrito y datos";
 choices[7][2] = "Datos exclusivamente, al no poder aplicar t&eacute;cnicas inform&aacute;ticas al lenguaje manuscrito.";
 choices[7][3] = "La criptograf&iacute;a no se usa para codificar, sino s&oacute;lo para decodificar";
 answers[7] = choices[7][1];
 units[7] = "72";
 comments[7] = "Id Pregunta: 747. Similar a examen TIC SS A 2003";


//  Id pregunta: 753 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  Un ejemplo de herramienta Open Source de administraci&oacute;n remota de sistemas Unix/Linux es:";
 choices[8]= new Array();
 choices[8][0] = "WebMin";
 choices[8][1] = "WMI (Web Management &amp; Instrumentation)";
 choices[8][2] = "syslog";
 choices[8][3] = "Performance Monitor";
 answers[8] = choices[8][0];
 units[8] = "53,61,62";
 comments[8] = "Id Pregunta: 753. ";


//  Id pregunta: 790 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[9]= new Array();
 choices[9][0] = "iSCSI";
 choices[9][1] = "sSCSI";
 choices[9][2] = "iFCP";
 choices[9][3] = "FCIP";
 answers[9] = choices[9][3];
 units[9] = "48";
 comments[9] = "Id Pregunta: 790. SS-A 2004";


//  Id pregunta: 966 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  C-Shell es:";
 choices[10]= new Array();
 choices[10][0] = "Una parte del sistema operativo MVS";
 choices[10][1] = "Un int&eacute;rprete de comandos del sistema operativo Unix";
 choices[10][2] = "Un compilador de C";
 choices[10][3] = "Nada de lo anterior";
 answers[10] = choices[10][1];
 units[10] = "54";
 comments[10] = "Id Pregunta: 966. ";


//  Id pregunta: 1048 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  El protocolo MESI:";
 choices[11]= new Array();
 choices[11][0] = "Es utilizado para el inicio de sesi&oacute;n en redes GSM";
 choices[11][1] = "Permite el establecimiento de conexiones entre iguales &quot;peer to peer&quot; sobre redes IP";
 choices[11][2] = "Controla las colisiones en redes Token Ring";
 choices[11][3] = "Controla la coherencia cache en algunos procesadores";
 answers[11] = choices[11][3];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1048. ";


//  Id pregunta: 1175 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indicar cu&aacute;l de las siguientes es una arquitectura cl&aacute;sica de la resoluci&oacute;n distribuida de problemas:";
 choices[12]= new Array();
 choices[12][0] = "Red de contratos";
 choices[12][1] = "Arquitectura de pizarra";
 choices[12][2] = "Las dos primeras son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 choices[12][3] = "Ninguna de las anteriores son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 answers[12] = choices[12][2];
 units[12] = "63";
 comments[12] = "Id Pregunta: 1175. ";


//  Id pregunta: 1383 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Un servicio de directorio:";
 choices[13]= new Array();
 choices[13][0] = "Es una base de datos, orientada a consulta, con replicaci&oacute;n, y estructura jer&aacute;rquica";
 choices[13][1] = "Puede ser utilizado como un repositorio para guardar la informaci&oacute;n de los usuarios";
 choices[13][2] = "Puede ser utilizado como medio de autenticaci&oacute;n en sistemas heterogeneos";
 choices[13][3] = "Todas las respuestas anteriores son ciertas";
 answers[13] = choices[13][3];
 units[13] = "106";
 comments[13] = "Id Pregunta: 1383. ";


//  Id pregunta: 1384 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Un lenguaje de programaci&oacute;n en el que s&oacute;lo se especifica lo que quiere llevarse a cabo en lugar de indicar los pasos a dar para llevarlo a cabo, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "No procedural.";
 choices[14][1] = "Simb&oacute;lico.";
 choices[14][2] = "Orientado al objetos.";
 choices[14][3] = "Procedural.";
 answers[14] = choices[14][0];
 units[14] = "81, 84";
 comments[14] = "Id Pregunta: 1384. ";


//  Id pregunta: 1430 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Uno de los problemas m&aacute;s importantes en la aplicaci&oacute;n de los computadores paralelos consiste en:";
 choices[15]= new Array();
 choices[15][0] = "Su gran volumen";
 choices[15][1] = "Elevada potencia consumida";
 choices[15][2] = "Su dif&iacute;cil programaci&oacute;n";
 choices[15][3] = "El escaso hardware disponible";
 answers[15] = choices[15][2];
 units[15] = "45";
 comments[15] = "Id Pregunta: 1430. ";


//  Id pregunta: 1489 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  El conocido est&aacute;ndar FireWire es el est&aacute;ndar IEEE:";
 choices[16]= new Array();
 choices[16][0] = "1284";
 choices[16][1] = "1394";
 choices[16][2] = "1384";
 choices[16][3] = "1294";
 answers[16] = choices[16][1];
 units[16] = "47";
 comments[16] = "Id Pregunta: 1489. ";


//  Id pregunta: 1719 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Un proceso pasa por los estados, RUN, READY IN, READY OUT, WAITING IN y WAITING OUT. Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta";
 choices[17]= new Array();
 choices[17][0] = "RUN, ejecut&aacute;ndose actualmente, s&oacute;lo puede estar en estado RUN un proceso por m&aacute;quina, independientemente del n&uacute;mero de procesadores que exista en el sistema.";
 choices[17][1] = "READY IN, est&aacute; preparado para ser ejeutado en cuanto la CPU se quede libre, estando residente en la memoria secundaria.";
 choices[17][2] = "READY OUT, est&aacute; preparado para ser ejecutado en cuanto la CPU se quede libre, estando residente en memoria principal.";
 choices[17][3] = "WAITING IN y WAITING OUT, el proceso est&aacute; esperando la finalizaci&oacute;n de alg&uacute;n evento (normalmente de E/S), estando residente en memoria principal o secundaria respectivamente.";
 answers[17] = choices[17][3];
 units[17] = "53";
 comments[17] = "Id Pregunta: 1719. ";


//  Id pregunta: 1869 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  La directiva europea del Parlamento y del Consejo relativa a la firma electr&oacute;nica es:";
 choices[18]= new Array();
 choices[18][0] = "Directiva 2000/31/CE";
 choices[18][1] = "Directiva 1999/93/CE";
 choices[18][2] = "Directiva 98/68/CE";
 choices[18][3] = "Directiva 1996/46/CE";
 answers[18] = choices[18][1];
 units[18] = "30";
 comments[18] = "Id Pregunta: 1869. ";


//  Id pregunta: 1939 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[19]= new Array();
 choices[19][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios";
 choices[19][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n";
 choices[19][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows";
 choices[19][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0";
 answers[19] = choices[19][1];
 units[19] = "59";
 comments[19] = "Id Pregunta: 1939. ";


//  Id pregunta: 2092 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  De las siguientes bases de datos se&ntilde;alar la que no tiene car&aacute;cter documental:";
 choices[20]= new Array();
 choices[20][0] = "KNOSYS";
 choices[20][1] = "STAIRS";
 choices[20][2] = "ADABAS";
 choices[20][3] = "MISTRAL";
 answers[20] = choices[20][2];
 units[20] = "95";
 comments[20] = "Id Pregunta: 2092. ";


//  Id pregunta: 2405 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Qu&eacute; es postcript?:";
 choices[21]= new Array();
 choices[21][0] = "Un formato de datos para las impresoras";
 choices[21][1] = "Un est&aacute;ndar de comunicaci&oacute;n con perif&eacute;ricos de impresi&oacute;n";
 choices[21][2] = "Un lenguaje de especificaci&oacute;n de documentos";
 choices[21][3] = "Nada de lo anterior";
 answers[21] = choices[21][2];
 units[21] = "93";
 comments[21] = "Id Pregunta: 2405. ";


//  Id pregunta: 2406 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Qu&eacute; sistema de parametrizaci&oacute;n utilizado para la s&iacute;ntesis de voz se conoce tambi&eacute;n como s&iacute;ntesis por reglas?:";
 choices[22]= new Array();
 choices[22][0] = "S&iacute;ntesis a partir de fonemas";
 choices[22][1] = "S&iacute;ntesis a partir de difonemas";
 choices[22][2] = "S&iacute;ntesis a partir de semis&iacute;labas";
 choices[22][3] = "S&iacute;ntesis texto-voz";
 answers[22] = choices[22][0];
 units[22] = "94";
 comments[22] = "Id Pregunta: 2406. ";


//  Id pregunta: 2531 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  En sistemas de recuperaci&oacute;n de la informaci&oacute;n, al cociente entre el n&uacute;mero de referencias correctas obtenidas y el n&uacute;mero total de documentos recuperados, se denomina:";
 choices[23]= new Array();
 choices[23][0] = "&Iacute;ndice de retorno";
 choices[23][1] = "&Iacute;ndice de exactitud";
 choices[23][2] = "&Iacute;ndice de precisi&oacute;n";
 choices[23][3] = "&Iacute;ndice de localizaci&oacute;n";
 answers[23] = choices[23][2];
 units[23] = "96";
 comments[23] = "Id Pregunta: 2531. ";


//  Id pregunta: 2707 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  Suponiendo la existencia de un sistema de copias de seguridad, para restaurar la informaci&oacute;n perdida se puede: ";
 choices[24]= new Array();
 choices[24][0] = "S&oacute;lo se necesita la copia normal m&aacute;s reciente m&aacute;s la &uacute;ltima copia de seguridad diaria";
 choices[24][1] = "S&oacute;lo se necesita la &uacute;ltima copia de seguridad normal y todas las copias de seguridad diferencial";
 choices[24][2] = "S&oacute;lo se necesita la &uacute;ltima copia de seguridad normal y la &uacute;ltima copia de seguridad incremental";
 choices[24][3] = "Todas las respuestas anteriores son incorrectas";
 answers[24] = choices[24][3];
 units[24] = "96";
 comments[24] = "Id Pregunta: 2707. Pregunta no perteneciente al test  del ex&aacute;men de SS";


//  Id pregunta: 2712 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de estos es un tipo de fichero de sonido?";
 choices[25]= new Array();
 choices[25][0] = " TIFF";
 choices[25][1] = "PNG";
 choices[25][2] = " VRML ";
 choices[25][3] = "MIDI";
 answers[25] = choices[25][3];
 units[25] = "94";
 comments[25] = "Id Pregunta: 2712. ";


//  Id pregunta: 2802 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  La norma ISO 9001";
 choices[26]= new Array();
 choices[26][0] = "Est&aacute; reservada para aquellas empresas que tengan dise&ntilde;o o desarrollo de servicios.";
 choices[26][1] = "Contiene 25 puntos que  describen los requisitos que deben implantarse en una empresa para asegurar que cumple con una norma de calidad predefinida.";
 choices[26][2] = "Es la menos exigente de las opciones de la ISO 9000.";
 choices[26][3] = "Se diferencia de la ISO 9002 en que no contiene los puntos concernientes a Dise&ntilde;o, Compras, Control de procesos y Postventa. ";
 answers[26] = choices[26][0];
 units[26] = "87";
 comments[26] = "Id Pregunta: 2802. ";


//  Id pregunta: 3017 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;A que se corresponden las siglas DECT?";
 choices[27]= new Array();
 choices[27][0] = "Una red de microondas para uso militar";
 choices[27][1] = "Un sistema de telefonos inhal&aacute;brico";
 choices[27][2] = "Un sistema de telefon&iacute;na movil";
 choices[27][3] = "ninguna de las anteriores";
 answers[27] = choices[27][1];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3017. ";


//  Id pregunta: 3028 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Qu&eacute; son dentro del entorno de aplicaciones basadas en arquitectura Internet los plug-ins?:";
 choices[28]= new Array();
 choices[28][0] = "Programas que desarrolla el usuario para personalizar el acceso a la informaci&oacute;n del servidor";
 choices[28][1] = "Programas que se agregan al navegador e interact&uacute;an con &eacute;l, con las p&aacute;ginas web y con los recursos locales";
 choices[28][2] = "Posibilidad de a&ntilde;adir nuevo hardware a trav&eacute;s del navegador de manera autom&aacute;tica";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = choices[28][1];
 units[28] = "114";
 comments[28] = "Id Pregunta: 3028. ";


//  Id pregunta: 3031 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  ASP significa:";
 choices[29]= new Array();
 choices[29][0] = "Application Service Provider";
 choices[29][1] = "Active Server Pages";
 choices[29][2] = "Las 2 respuestas anteriores son correctas";
 choices[29][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[29] = choices[29][2];
 units[29] = "114";
 comments[29] = "Id Pregunta: 3031. ";


//  Id pregunta: 3108 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &quot;Red con un alto grado de cohesi&oacute;n y transparencia que hace que el usuario no vea a las funciones como repartidas entre los distintos elementos de la red&quot;. Es la definici&oacute;n de:";
 choices[30]= new Array();
 choices[30][0] = "Sistema abierto";
 choices[30][1] = "Sistema distribuido";
 choices[30][2] = "Intranet  ";
 choices[30][3] = "Sistema aut&oacute;nomo";
 answers[30] = choices[30][1];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3108. ";


//  Id pregunta: 3271 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;En qu&eacute; tipo de aplicaci&oacute;n no ser&iacute;a adecuada la instalaci&oacute;n de una conexi&oacute;n Frame Relay?:";
 choices[31]= new Array();
 choices[31][0] = "Correo electr&oacute;nico";
 choices[31][1] = "Conexi&oacute;n de redes de area local";
 choices[31][2] = "Video";
 choices[31][3] = "Todas las anteriores son posibles aplicaciones de una red Frame Relay de alta velocidad";
 answers[31] = choices[31][2];
 units[31] = "109";
 comments[31] = "Id Pregunta: 3271. ";


//  Id pregunta: 3301 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Qu&eacute; Ofertas tienen obligatoriamente que ser reguladas por la Administraci&oacute;n en materia de telecomunicaciones?:";
 choices[32]= new Array();
 choices[32][0] = "La Oferta de Referencia de Interconexi&oacute;n y la Oferta de Referencia de Cobertura";
 choices[32][1] = "La Oferta de Servicios P&uacute;blicos de Telefon&iacute;a y la Oferta de Bucle de Abonado";
 choices[32][2] = "La Oferta de Transmisi&oacute;n P&uacute;blica de Datos y la Oferta de Servicios P&uacute;blicos de Voz";
 choices[32][3] = "La Oferta de Referencia de Interconexi&oacute;n y la Oferta de Bucle de Abonado";
 answers[32] = choices[32][3];
 units[32] = "110";
 comments[32] = "Id Pregunta: 3301. ";


//  Id pregunta: 3321 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Sabe qui&eacute;n fue el impulsor de Bluetooth?:";
 choices[33]= new Array();
 choices[33][0] = "Nokia";
 choices[33][1] = "Sony";
 choices[33][2] = "Ericsson";
 choices[33][3] = "Nortel";
 answers[33] = choices[33][2];
 units[33] = "107";
 comments[33] = "Id Pregunta: 3321. ";


//  Id pregunta: 3396 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  El nivel fisico denominado 802.11b se conoce como:";
 choices[34]= new Array();
 choices[34][0] = "High Rate Sequence HR/DS PHY (high-rate, direct-sequence PHY)";
 choices[34][1] = "High Rate Sequence HR/DSSS PHY (High Rate / Direct Sequence Spread Spectrum Physical Layer)";
 choices[34][2] = "OFDM PHY";
 choices[34][3] = "Las respuestas 'a' y 'b' son correctas";
 answers[34] = choices[34][3];
 units[34] = "101,107";
 comments[34] = "Id Pregunta: 3396. ";


//  Id pregunta: 3407 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  Existen varios procedimientos de ataques en internet, como el &quot;hijacking&quot;. &iquest;En qu&eacute; consiste &eacute;ste?:";
 choices[35]= new Array();
 choices[35][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP origen";
 choices[35][1] = "Repudiaci&oacute;n de la auditor&iacute;a del mensaje";
 choices[35][2] = "Variaci&oacute;n del contenido del paquete transmitido";
 choices[35][3] = "Escucha de una comunicaci&oacute;n y grabaci&oacute;n de su contenido";
 answers[35] = choices[35][2];
 units[35] = "111";
 comments[35] = "Id Pregunta: 3407. ";


//  Id pregunta: 3417 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  IAB, IETF, IRTF, IESG son:";
 choices[36]= new Array();
 choices[36][0] = "protocolos de Internet";
 choices[36][1] = "organismos relacionados con Internet";
 choices[36][2] = "organismos de estandarizaci&oacute;n en el campo de redes tanto inal&aacute;mbricas como cableadas";
 choices[36][3] = "protocolos de nivel de transporte, en particular de encaminamiento y optimizaci&oacute;n de rutas";
 answers[36] = choices[36][1];
 units[36] = "112";
 comments[36] = "Id Pregunta: 3417. ";


//  Id pregunta: 3492 Año de creación de pregunta: 2005-01-01
 questions[37]= "38)  En el &aacute;mbito de la seguridad de redes, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[37]= new Array();
 choices[37][0] = "Los ataques de &quot;buffer overflow&quot; son posibles debido a fallos de programaci&oacute;n";
 choices[37][1] = "Los ataques mediante &quot;spoofing&quot; se basan en la generaci&oacute;n de paquetes de informaci&oacute;n falsa";
 choices[37][2] = "NIS, NFS, DNS o SMTP son protocolos de aplicaci&oacute;n inseguros";
 choices[37][3] = "Los ataques mediante &quot;secuestro de sesi&oacute;n&quot; no pueden prevenirse en la labor de administraci&oacute;n";
 answers[37] = choices[37][3];
 units[37] = "111";
 comments[37] = "Id Pregunta: 3492. ";


//  Id pregunta: 3552 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  En sistemas de informaci&oacute;n y comunicaciones, INAP es acr&oacute;nimo de:";
 choices[38]= new Array();
 choices[38][0] = "Integration Network Application Protocol";
 choices[38][1] = "Intelligent Network Application Protocol";
 choices[38][2] = "Inverse Naming Address Protocol";
 choices[38][3] = "Intelligent Network Application Part";
 answers[38] = choices[38][3];
 units[38] = "102";
 comments[38] = "Id Pregunta: 3552. ";


//  Id pregunta: 3591 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  La codificaci&oacute;n Manchester tambi&eacute;n es conocida como:";
 choices[39]= new Array();
 choices[39][0] = "C&oacute;digo NRZ polar";
 choices[39][1] = "C&oacute;digo NRZ bipolar";
 choices[39][2] = "C&oacute;digo NRZ normal";
 choices[39][3] = "C&oacute;digo bifase";
 answers[39] = choices[39][3];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3591. ";


//  Id pregunta: 3801 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Sabiendo que se dice que una fibra monomodo es aquella que transmite un &uacute;nico modo de propagaci&oacute;n de un haz monocrom&aacute;tico de luz. Indique cu&aacute;l de las afirmaciones siguientes es verdadera: ";
 choices[40]= new Array();
 choices[40][0] = "Las fibras &oacute;pticas monomodo son las m&aacute;s adecuadas para la transmisi&oacute;n de se&ntilde;ales con un ancho de banda peque&ntilde;o y a grandes distancias";
 choices[40][1] = "La fibras &oacute;pticas monomodo son las adecuadas para transmitir se&ntilde;ales de gran ancho de banda y a grandes distancias";
 choices[40][2] = "Las fibras &oacute;pticas monomodo son &uacute;nicamente adecuadas para la transmisi&oacute;n de se&ntilde;ales anal&oacute;gicas";
 choices[40][3] = "Todas las anteriores respuestas son correctas";
 answers[40] = choices[40][1];
 units[40] = "99";
 comments[40] = "Id Pregunta: 3801. ";


//  Id pregunta: 3942 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  Con la API de Servlet con respecto a cookies se puede:";
 choices[41]= new Array();
 choices[41][0] = "S&oacute;lo se pueden leer cookies";
 choices[41][1] = "S&oacute;lo se pueden leer y especificar atributos de cookie pero no crear cookies";
 choices[41][2] = "Se pueden crear cookies";
 choices[41][3] = "S&oacute;lo se pueden situar los Cookies en las cabeceras de respuesta al cliente";
 answers[41] = choices[41][2];
 units[41] = "116";
 comments[41] = "Id Pregunta: 3942. Pregunta no perteneciente al test  del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de API de servlet)";


//  Id pregunta: 3974 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes productos o marcas comerciales  esta relacionado con un Buscador / Indexador?";
 choices[42]= new Array();
 choices[42][0] = "Verity";
 choices[42][1] = "Lucene";
 choices[42][2] = "Los dos anteriores";
 choices[42][3] = "Ninguno de los anteriores";
 answers[42] = choices[42][2];
 units[42] = "112";
 comments[42] = "Id Pregunta: 3974. ";


//  Id pregunta: 4081 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Un proxy o apoderado permite";
 choices[43]= new Array();
 choices[43][0] = "realizar funciones de repetidor, ocultando la m&aacute;quina solicitante";
 choices[43][1] = "disponer de una memoria temporal para almacenar las p&aacute;ginas web m&aacute;s visitadas";
 choices[43][2] = "traducir las direcciones internas a externas y viceversa";
 choices[43][3] = "Todas  las respuestas son correctas";
 answers[43] = choices[43][3];
 units[43] = "113";
 comments[43] = "Id Pregunta: 4081. ";


//  Id pregunta: 4190 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Para listar las conexiones en un servidor utilizo el comando";
 choices[44]= new Array();
 choices[44][0] = "ping";
 choices[44][1] = "netstat";
 choices[44][2] = "tracert o traceroute";
 choices[44][3] = "ipconfig / ifconfig";
 answers[44] = choices[44][1];
 units[44] = "54";
 comments[44] = "Id Pregunta: 4190. ";


//  Id pregunta: 4208 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[45]= new Array();
 choices[45][0] = "jpeg, tiff y spp";
 choices[45][1] = "jpeg, spp y psd";
 choices[45][2] = "jpeg, spp y tiff";
 choices[45][3] = "jpeg, gif y png";
 answers[45] = choices[45][3];
 units[45] = "114";
 comments[45] = "Id Pregunta: 4208. ";


//  Id pregunta: 4265 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  La configuraci&oacute;n RAID que ofrece la mejor relaci&oacute;n precio/rendimiento de entre las siguientes es:";
 choices[46]= new Array();
 choices[46][0] = "RAID 1";
 choices[46][1] = "RAID 2";
 choices[46][2] = "RAID 4";
 choices[46][3] = "RAID 5";
 answers[46] = choices[46][3];
 units[46] = "48";
 comments[46] = "Id Pregunta: 4265. ";


//  Id pregunta: 4279 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;C&oacute;mo se definir&iacute;a en el sistema de gesti&oacute;n de base de datos Oracle la restricci&oacute;n de integridad: &ldquo;Los trienios de un empleado no pueden disminuir&rdquo;?";
 choices[47]= new Array();
 choices[47][0] = "Mediante la sentencia &lsquo;ALTER TABLE&rsquo;.";
 choices[47][1] = "Mediante un trigger.";
 choices[47][2] = "Mediante una constraint de tipo CHECK.";
 choices[47][3] = "No se pueden definir restricciones de ese tipo.";
 answers[47] = choices[47][1];
 units[47] = "58";
 comments[47] = "Id Pregunta: 4279. ";


//  Id pregunta: 4353 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  La telefon&iacute;a m&oacute;vil celular:";
 choices[48]= new Array();
 choices[48][0] = "Permite el paso din&aacute;mico de un terminal entre las c&eacute;lulas.";
 choices[48][1] = "No permite el cambio de c&eacute;lula durante la conversaci&oacute;n.";
 choices[48][2] = "Establece un tama&ntilde;o de c&eacute;lula mayor en ciudad que en espacios abiertos a fin de soportar la mayor densidad de tr&aacute;fico.";
 choices[48][3] = "S&oacute;lo funciona con tecnolog&iacute;a digital.";
 answers[48] = choices[48][0];
 units[48] = "108";
 comments[48] = "Id Pregunta: 4353. ";


//  Id pregunta: 4621 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Como se denomina la licencia bajo la que se distribuye la mayor&iacute;a de los programas del proyecto GNU?:";
 choices[49]= new Array();
 choices[49][0] = "FDL";
 choices[49][1] = "GSL";
 choices[49][2] = "GPL";
 choices[49][3] = "GLL";
 answers[49] = choices[49][2];
 units[49] = "36";
 comments[49] = "Id Pregunta: 4621. ";


//  Id pregunta: 4668 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siiguientes no es un libro perteneciente a ITIL?";
 choices[50]= new Array();
 choices[50][0] = "Gesti&oacute;n de equipamiento hardware";
 choices[50][1] = "Gesti&oacute;n de aplicaciones";
 choices[50][2] = "Entrega de Servicios";
 choices[50][3] = "Gesti&oacute;n de la seguridad";
 answers[50] = choices[50][0];
 units[50] = "98";
 comments[50] = "Id Pregunta: 4668. ";


//  Id pregunta: 4733 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  Los registros glue de una zona DNS son aquellos que:";
 choices[51]= new Array();
 choices[51][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[51][1] = " Son los registros que mantienen el espacio de nombres de la zona.";
 choices[51][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[51][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[51] = choices[51][1];
 units[51] = "112";
 comments[51] = "Id Pregunta: 4733. Examen 2006 JCYL";


//  Id pregunta: 4740 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  Firmar un mensaje electr&oacute;nico";
 choices[52]= new Array();
 choices[52][0] = "Es lo mismo que cifrarlo";
 choices[52][1] = "Garantiza la confidencialidad";
 choices[52][2] = "Es lo mismo que codificarlo";
 choices[52][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[52] = choices[52][3];
 units[52] = "72";
 comments[52] = "Id Pregunta: 4740. Examen 2006 JCYL";


//  Id pregunta: 4830 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l delas siguientes afirmaciones es cierta?";
 choices[53]= new Array();
 choices[53][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica";
 choices[53][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos";
 choices[53][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados";
 choices[53][3] = "XML Schema no tiene tipos predefinidos";
 answers[53] = choices[53][1];
 units[53] = "69";
 comments[53] = "Id Pregunta: 4830. ";


//  Id pregunta: 5063 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministrode Industria, Turismo y Comercio";
 choices[54][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno";
 choices[54][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la via administrativa";
 choices[54][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de laAgencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[54] = choices[54][2];
 units[54] = "29";
 comments[54] = "Id Pregunta: 5063. Examen TIC A 2007";


//  Id pregunta: 5091 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  La informaci&oacute;n en el chip del DNI est&aacute; distribuida en tres zonas, con diferentes niveles y condiciones de acceso. &iquest;Cu&aacute;l no es una de ellas?";
 choices[55]= new Array();
 choices[55][0] = "Zona privada";
 choices[55][1] = "Zona de control";
 choices[55][2] = "Zona de seguridad";
 choices[55][3] = "Zona p&uacute;blica";
 answers[55] = choices[55][1];
 units[55] = "74";
 comments[55] = "Id Pregunta: 5091. ";


//  Id pregunta: 5189 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de desarrollo de sistemas distribuidos basados en objetos no es una tecnolog&iacute;a Java de Sun Microsystems?";
 choices[56]= new Array();
 choices[56][0] = "RMI";
 choices[56][1] = "JINI";
 choices[56][2] = "EJB";
 choices[56][3] = "CORBA";
 answers[56] = choices[56][3];
 units[56] = "82";
 comments[56] = "Id Pregunta: 5189. ";


//  Id pregunta: 5218 Año de creación de pregunta: 2007-01-01
 questions[57]= "58)  En qu&eacute; proceso no se utiliza la t&eacute;cnica de Diagrama de Clases";
 choices[57]= new Array();
 choices[57][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[57][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[57][2] = "Estudio de Viabilidad del Sistema";
 choices[57][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 answers[57] = choices[57][3];
 units[57] = "86";
 comments[57] = "Id Pregunta: 5218. ";


//  Id pregunta: 5266 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  802.13 es el est&aacute;ndar IEEE referente a";
 choices[58]= new Array();
 choices[58][0] = "USB sin hilos";
 choices[58][1] = "WiMax";
 choices[58][2] = "Bluetooth";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][3];
 units[58] = "101";
 comments[58] = "Id Pregunta: 5266. ";


//  Id pregunta: 5509 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;C&oacute;mo se garantiza la integridad de la factura?";
 choices[59]= new Array();
 choices[59][0] = "Mediante la exigencia de firma electr&oacute;nica reconocida, en formato XaDES";
 choices[59][1] = "Mediante el uso de un certificado reconocido";
 choices[59][2] = "Mediante la exigencia de firma electr&oacute;nica avanzada, en formato XaDES";
 choices[59][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[59] = choices[59][2];
 units[59] = "70";
 comments[59] = "Id Pregunta: 5509. ";


//  Id pregunta: 5828 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  Con respecto a la tecnolog&iacute;a conocida como &quot;SONET&quot; (terminolog&iacute;a de EEUU) &oacute; SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[60]= new Array();
 choices[60][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplos de una se&ntilde;al base de 155 Mbps denominada STM-1";
 choices[60][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia";
 choices[60][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[60][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace &oacute; nodo de la red";
 answers[60] = choices[60][1];
 units[60] = "109";
 comments[60] = "Id Pregunta: 5828. MAP 2008 A1";


//  Id pregunta: 5842 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[61]= new Array();
 choices[61][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[61][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[61][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[61][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[61] = choices[61][2];
 units[61] = "30";
 comments[61] = "Id Pregunta: 5842. MAP 2008 A1";


//  Id pregunta: 5989 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  Un servidor de telnet permite:";
 choices[62]= new Array();
 choices[62][0] = "A los usuarios entrar en otro ordenador y llevar a cabo tareas como si estuviesen trabajando en el ordenador remoto.";
 choices[62][1] = "Intercambiar informaci&oacute;n ofreciendo capacidades de discusi&oacute;n en tiempo real.";
 choices[62][2] = "Gestionar listas de correo, ya sea para env&iacute;o masivo o para gestionar foros de discusi&oacute;n.";
 choices[62][3] = "Distribuir contenido multimedia a las aplicaciones cliente.";
 answers[62] = choices[62][0];
 units[62] = "112";
 comments[62] = "Id Pregunta: 5989. TIC A 2009";


//  Id pregunta: 6127 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Si contratamos la adquisici&oacute;n de un programa de ordenador a medida, &iquest;qu&eacute; tipo de contrato es?";
 choices[63]= new Array();
 choices[63][0] = "Un contrato de suministro.";
 choices[63][1] = "Un contrato de servicios.";
 choices[63][2] = "Un contrato mixto.";
 choices[63][3] = "Un contrato de desarrollo de un servicio p&uacute;blico.";
 answers[63] = choices[63][1];
 units[63] = "41";
 comments[63] = "Id Pregunta: 6127. TIC A 2009";


//  Id pregunta: 6277 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  No es una ventaja de los modelos de ciclo de vida basada en prototipos:";
 choices[64]= new Array();
 choices[64][0] = "Los sistemas se desarrollan con m&aacute;s rapidez";
 choices[64][1] = "El prototipo coincide exactamente con el producto final";
 choices[64][2] = "Se facilita la comunicaci&oacute;n con los usuarios";
 choices[64][3] = "Los requisitos de usuario son m&aacute;s f&aacute;ciles de determinar";
 answers[64] = choices[64][1];
 units[64] = "76";
 comments[64] = "Id Pregunta: 6277. ";


//  Id pregunta: 6304 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un componente de CORBA?";
 choices[65]= new Array();
 choices[65][0] = "Dynamic Invocation Interface (DII) ";
 choices[65][1] = "Object Request Broker (ORB) ";
 choices[65][2] = "Dynamic Skeleton Interface (DSI)";
 choices[65][3] = "Todos lo son";
 answers[65] = choices[65][3];
 units[65] = "82";
 comments[65] = "Id Pregunta: 6304. ";


//  Id pregunta: 6433 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Dada una empresa en la que se quiere almacenar informaci&oacute;n de sus empleados, departamentos y proyectos en los que colaboran sus empleados, las entidades que resultan son:";
 choices[66]= new Array();
 choices[66][0] = "empleados, departamentos y empresa";
 choices[66][1] = "empresa, proyectos, empleados y departamentos.";
 choices[66][2] = "empleados, proyectos y departamentos.";
 choices[66][3] = "empleados y departamentos.";
 answers[66] = choices[66][2];
 units[66] = "70";
 comments[66] = "Id Pregunta: 6433. ";


//  Id pregunta: 6509 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes propiedades NO se almacena en el i-node de un archivo?";
 choices[67]= new Array();
 choices[67][0] = "Permisos";
 choices[67][1] = "Propietario";
 choices[67][2] = "Grupo";
 choices[67][3] = "Nombre del fichero";
 answers[67] = choices[67][3];
 units[67] = "53";
 comments[67] = "Id Pregunta: 6509. ";


//  Id pregunta: 6539 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[68]= new Array();
 choices[68][0] = "TACACS+";
 choices[68][1] = "Radius";
 choices[68][2] = "Un grupo de trabajo peer-to-peer";
 choices[68][3] = "Diameter";
 answers[68] = choices[68][2];
 units[68] = "111";
 comments[68] = "Id Pregunta: 6539. ";


//  Id pregunta: 7164 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  En una aplicaci&oacute;n desarrollada para el entorno WINDOWS, la posibilidad de cambiar de base de datos relacional a la que se accede sin tener que modificar la aplicaci&oacute;n, est&aacute; garantizada por la utilizaci&oacute;n de";
 choices[69]= new Array();
 choices[69][0] = "Drivers ODBC";
 choices[69][1] = "La tecnolog&iacute;a COM";
 choices[69][2] = "Librer&iacute;as de carga din&aacute;mica (DLL)";
 choices[69][3] = "El API adecuado";
 answers[69] = choices[69][0];
 units[69] = "56";
 comments[69] = "Id Pregunta: 7164. Examen TIC B 2009";


//  Id pregunta: 7248 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  En el protocolo IPv6, las direcciones constan de:";
 choices[70]= new Array();
 choices[70][0] = "6 bytes";
 choices[70][1] = "8 bytes";
 choices[70][2] = "16 bytes";
 choices[70][3] = "32 bytes";
 answers[70] = choices[70][2];
 units[70] = "100";
 comments[70] = "Id Pregunta: 7248. Examen TIC B 2009";


//  Id pregunta: 7254 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  MPLS (Multiprotocol Label Switching) opera:";
 choices[71]= new Array();
 choices[71][0] = "Sobre el protocolo IP, y por debajo del protocolo TCP";
 choices[71][1] = "Entre la capa de enlace de datos y la capa de red del modelo OSI";
 choices[71][2] = "Entre el protocolo TCP y los protocolos del nivel de Aplicaci&oacute;n";
 choices[71][3] = "Entre la capa del nivel de red y la capa de transporte del modelo TCP/IP";
 answers[71] = choices[71][1];
 units[71] = "100";
 comments[71] = "Id Pregunta: 7254. Examen TIC B 2009";


//  Id pregunta: 7847 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de J2ME es cierta:";
 choices[72]= new Array();
 choices[72][0] = " Es un subconjunto del paquete Swing de J2SE.";
 choices[72][1] = " Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n.";
 choices[72][2] = " Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS.";
 choices[72][3] = " Proporciona clases para el desarrollo de elementos gr&aacute;ficos.";
 answers[72] = choices[72][3];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7847. Map 2005";


//  Id pregunta: 7870 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al formato MARC (Machine-Readable Cataloging) es cierta?";
 choices[73]= new Array();
 choices[73][0] = " Es un est&aacute;ndar para la catalogaci&oacute;n de documentos de archivo.";
 choices[73][1] = " EUROMARC es la versi&oacute;n europea de dicho formato.";
 choices[73][2] = " Fue desarrollado por la Library of Congress de los Estados Unidos en los a&ntilde;os 60.";
 choices[73][3] = " Ha dejado de utilizarse, habiendo sido sustituido por las ISBD (International Standard Bibliographic Description).";
 answers[73] = choices[73][2];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7870. Map 2006";


//  Id pregunta: 7892 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN (Gateway GPRS Support Node)?";
 choices[74]= new Array();
 choices[74][0] = " La gesti&oacute;n de la movilidad.";
 choices[74][1] = " El cifrado y autenticaci&oacute;n.";
 choices[74][2] = " La conexi&oacute;n al HLR (Home Location Register).";
 choices[74][3] = " La conexi&oacute;n a los ISP (Internet Service Provider).";
 answers[74] = choices[74][3];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7892. Map 2006";


//  Id pregunta: 7919 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   La metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 contempla diferencias con relaci&oacute;n a los productos resultantes del proceso &laquo;An&aacute;lisis del sistema de informaci&oacute;n (ASI)&raquo; seg&uacute;n sea Orientado a Objetos o Estructurado. Bajo esta premisa, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[75]= new Array();
 choices[75][0] = " El Cat&aacute;logo de Requisitos y el Glosario de T&eacute;rminos son productos comunes requeridos.";
 choices[75][1] = " Entre los productos se&ntilde;alados para el an&aacute;lisis estructurado est&aacute; el Modelo de Procesos.";
 choices[75][2] = " Se especifica el Modelo de Negocio para el an&aacute;lisis orientado a objetos.";
 choices[75][3] = " La especificaci&oacute;n de la Interfaz de Usuario s&oacute;lo se solicita para el an&aacute;lisis orientado a objetos.";
 answers[75] = choices[75][3];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 7919. Map 2006";


//  Id pregunta: 7944 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)   El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, en lo referente al software, establece sobre la creaci&oacute;n de programas de ordenador por trabajadores asalariados en el ejercicio de sus funciones en la empresa que:";
 choices[76]= new Array();
 choices[76][0] = " No son titulares de los derechos de explotaci&oacute;n del programa, ni del c&oacute;digo fuente, ni del objeto, salvo pacto en contrario con la empresa.";
 choices[76][1] = " Son titulares siempre de los derechos de explotaci&oacute;n del c&oacute;digo fuente del programa, no as&iacute; del c&oacute;digo objeto, que necesariamente se habr&aacute; probado y validado en los sistemas inform&aacute;ticos de la empresa.";
 choices[76][2] = " Siempre son titulares tanto del c&oacute;digo fuente como del objeto, as&iacute; como de toda la documentaci&oacute;n preparatoria que hayan generado durante su trabajo de creaci&oacute;n, el empresario tendr&aacute; derecho en todo caso a disponer de una copia de todo el software para su explotaci&oacute;n comercial.";
 choices[76][3] = " El &uacute;nico y exclusivo titular de los derechos de explotaci&oacute;n del programa de ordenador creado es el empresario, en toda circunstancia legal.";
 answers[76] = choices[76][0];
 units[76] = "NULL";
 comments[76] = "Id Pregunta: 7944. Map 2006";


//  Id pregunta: 7983 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)   Seg&uacute;n Cobit, en un proceso de auditor&iacute;a un objetivo de control en TI se define como:";
 choices[77]= new Array();
 choices[77][0] = " Los soportes inform&aacute;ticos y sus sistemas de backup.";
 choices[77][1] = " El resultado deseado implementando procedimientos de control en una actividad de TI particular.";
 choices[77][2] = " La compatibilidad del software.";
 choices[77][3] = " El tiempo medio entre fallos de los sistemas de TI.";
 answers[77] = choices[77][1];
 units[77] = "NULL";
 comments[77] = "Id Pregunta: 7983. Map 2007";


//  Id pregunta: 8000 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)   &iquest;Cu&aacute;l de los siguientes no es un proceso de interfaz de M&eacute;trica v3?";
 choices[78]= new Array();
 choices[78][0] = " Aseguramiento de la calidad.";
 choices[78][1] = " Gesti&oacute;n de proyectos.";
 choices[78][2] = " Gesti&oacute;n de la configuraci&oacute;n.";
 choices[78][3] = " Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[78] = choices[78][3];
 units[78] = "NULL";
 comments[78] = "Id Pregunta: 8000. Map 2007";


//  Id pregunta: 8032 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)   RDF (Resource Description Framework) es un:";
 choices[79]= new Array();
 choices[79][0] = " Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la web.";
 choices[79][1] = " Est&aacute;ndar del W3C para la definici&oacute;n de datos.";
 choices[79][2] = " Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles.";
 choices[79][3] = " Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n.";
 answers[79] = choices[79][0];
 units[79] = "NULL";
 comments[79] = "Id Pregunta: 8032. Map 2007";


//  Id pregunta: 8061 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)   Seg&uacute;n el m&eacute;todo del camino cr&iacute;tico, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[80]= new Array();
 choices[80][0] = " El camino cr&iacute;tico determina el tiempo m&aacute;s corto que podemos tardar en hacer el proyecto si se dispone de todos los recursos necesarios.";
 choices[80][1] = " Las actividades cr&iacute;ticas no tienen holgura.";
 choices[80][2] = " Una actividad es cr&iacute;tica cuando no se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar la duraci&oacute;n total del proyecto.";
 choices[80][3] = " La concatenaci&oacute;n de las todas las actividades de un proyecto es el camino cr&iacute;tico.";
 answers[80] = choices[80][3];
 units[80] = "NULL";
 comments[80] = "Id Pregunta: 8061. Map 2007";


//  Id pregunta: 8598 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Indique cual de las siguientes definiciones se corresponde con Biztalk:";
 choices[81]= new Array();
 choices[81][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software";
 choices[81][1] = "Es una librer&iacute;a de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[81][2] = "Es un servidor web de NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[81][3] = "Es un componente que pertenece a! CLR de NET que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[81] = choices[81][0];
 units[81] = "115";
 comments[81] = "Id Pregunta: 8598. Examen TIC A2 2010 interna";


//  Id pregunta: 8625 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes problemas afecta a los medios de transmisi&oacute;n?";
 choices[82]= new Array();
 choices[82][0] = "Reverberaci&oacute;n.";
 choices[82][1] = "Ruido blanco";
 choices[82][2] = "Afon&iacute;a";
 choices[82][3] = "Todos son posibles problemas de los medios de transmisi&oacute;n";
 answers[82] = choices[82][1];
 units[82] = "99";
 comments[82] = "Id Pregunta: 8625. Examen TIC A2 2010 interna";


//  Id pregunta: 8633 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica v3?";
 choices[83]= new Array();
 choices[83][0] = "Perfil Jefe de Proyecto.";
 choices[83][1] = "Perfil Consultor.";
 choices[83][2] = "Perfil Analista.";
 choices[83][3] = "Perfil Programador.";
 answers[83] = choices[83][0];
 units[83] = "86";
 comments[83] = "Id Pregunta: 8633. Examen TIC A2 2010 interna";


//  Id pregunta: 8800 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Respecto al modelo en espiral es falso que:";
 choices[84]= new Array();
 choices[84][0] = "Incluye el an&aacute;lisis de riesgos.";
 choices[84][1] = "Se compone de ciclos.";
 choices[84][2] = "El n&uacute;mero de ciclos a realizar se encuentra predefinido en el modelo.";
 choices[84][3] = "La dimensi&oacute;n angular indica el avance dentro del ciclo actual.";
 answers[84] = choices[84][2];
 units[84] = "76";
 comments[84] = "Id Pregunta: 8800. Examen UPM A2 2011";


//  Id pregunta: 8831 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)   Se&ntilde;ale la respuesta correcta con relaci&oacute;n a lTIL (IT Infrastructure Library):";
 choices[85]= new Array();
 choices[85][0] = " La gesti&oacute;n de problemas busca solucionar lo m&aacute;s r&aacute;pido posible las incidencias y restablecer el servicio lo antes posible ";
 choices[85][1] = " La gesti&oacute;n de la configuraci&oacute;n tiene como &uacute;nico objetivo el control del hardware inform&aacute;tico existente en la organizaci&oacute;n ";
 choices[85][2] = " La gesti&oacute;n de versiones se encarga de controlar todas las versiones, tanto hardware como software, involucrados en el sistema de explotaci&oacute;n ";
 choices[85][3] = " No es necesario analizar el impacto de la introducci&oacute;n de cambios en los sistemas inform&aacute;ticos, sino que se deben realizar lo m&aacute;s r&aacute;pido posible para evitar incidencias en los sistemas (gesti&oacute;n de cambios).";
 answers[85] = choices[85][2];
 units[85] = "98";
 comments[85] = "Id Pregunta: 8831. Examen UC3M 2010";


//  Id pregunta: 8905 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  FTP es un protocolo de la pila TCP/IP:";
 choices[86]= new Array();
 choices[86][0] = "Del nivel de Aplicaci&oacute;n.";
 choices[86][1] = "Del nivel de Transporte.";
 choices[86][2] = "Del nivel de Red.";
 choices[86][3] = "De nivel de Sesi&oacute;n";
 answers[86] = choices[86][0];
 units[86] = "100";
 comments[86] = "Id Pregunta: 8905. Operador Ayto. Madrid 2010";


//  Id pregunta: 9013 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  A la hora de planificar las frecuencias para un radioenlace de dos vanos A-B y B-C en la banda de 13 GHz:";
 choices[87]= new Array();
 choices[87][0] = "Si en el punto intermedio B se recibe en la semibanda baja, en B se debe transmitir en la semibanda alta.";
 choices[87][1] = "Para un sentido de transmisi&oacute;n dado, se deben emplear la misma semibanda en los dos vanos A-B y B-C.";
 choices[87][2] = "Siempre se debe respetar el sentido (transmisi&oacute;n o recepci&oacute;n) asignado a cada semibanda en el CNAF para la banda de 1GHz.";
 choices[87][3] = "Ninguna de las anteriores";
 answers[87] = choices[87][0];
 units[87] = "108";
 comments[87] = "Id Pregunta: 9013. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9292 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes no es un dominio de control a contemplar en el Plan de Continuidad seg&uacute;n lo establecido por la norma ISO 17799?";
 choices[88]= new Array();
 choices[88][0] = "Clasificaci&oacute;n y control de activos.";
 choices[88][1] = "Est&aacute;ndar de seguridad.";
 choices[88][2] = "Conformidad";
 choices[88][3] = "Desarrollo y mantenimiento de sistemas.";
 answers[88] = choices[88][1];
 units[88] = "32";
 comments[88] = "Id Pregunta: 9292. ";


//  Id pregunta: 9397 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  MOS (&quot;Mean Opinion Score&quot;) es un &iacute;ndice subjetivo que sirve para medir la calidad de la voz. Su rango de valores est&aacute; entre 1 y 5. Si toma el valor 4, significa:";
 choices[89]= new Array();
 choices[89][0] = "La calidad es equiparable a una conversi&oacute;n cara a cara o escuchar la radio. ";
 choices[89][1] = "Apenas se entiende nada.";
 choices[89][2] = "Se perciben imperfecciones pero el sonido es claro";
 choices[89][3] = "Se requiere un esfuerzo considerable para seguir la comunicaci&oacute;n.";
 answers[89] = choices[89][2];
 units[89] = "109";
 comments[89] = "Id Pregunta: 9397. TIC AGE A2 2011 libre";


//  Id pregunta: 9493 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  El cliente web:";
 choices[90]= new Array();
 choices[90][0] = "Puede realizar peticiones HTTP al servidor web";
 choices[90][1] = "Dispone de un int&eacute;rprete de scripting";
 choices[90][2] = "Puede tener plugins instalados";
 choices[90][3] = "Todas las anteriores son ciertas";
 answers[90] = choices[90][3];
 units[90] = "114";
 comments[90] = "Id Pregunta: 9493. ";


//  Id pregunta: 9608 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[91]= new Array();
 choices[91][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[91][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[91][2] = "Utilizan estructuras flexibles";
 choices[91][3] = "Todas las anteriores lo son";
 answers[91] = choices[91][3];
 units[91] = "58";
 comments[91] = "Id Pregunta: 9608. ";


//  Id pregunta: 9662 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes es una fase de un brainstorming?";
 choices[92]= new Array();
 choices[92][0] = "Preparaci&oacute;n";
 choices[92][1] = "Generaci&oacute;n";
 choices[92][2] = "Consolidaci&oacute;n";
 choices[92][3] = "Todas las anteriores";
 answers[92] = choices[92][3];
 units[92] = "78";
 comments[92] = "Id Pregunta: 9662. ";


//  Id pregunta: 9781 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Se&ntilde;ale la afirmaci&oacute;n es correcta respecto a firmar digitalmente mediante XML Signature al usar WS-Security:";
 choices[93]= new Array();
 choices[93][0] = "WS-Security no contempla el uso de XML Signature por no adaptarse bien al modelo petici&oacute;n respuesta de Web Services. ";
 choices[93][1] = "WS-Security contemplaba el uso de XML Signature en la versi&oacute;n 1.0 pero se abandon&oacute; en favor de XML DynaSign. ";
 choices[93][2] = "WS-Security contempla el uso de XML Signature con algunas limitaciones, como recomendar el no usar Enveloped Signature Transform. ";
 choices[93][3] = "WS-Security contempla el uso de XML Signature, sin establecer limitaciones ni extensiones especiales. ";
 answers[93] = choices[93][2];
 units[93] = "111";
 comments[93] = "Id Pregunta: 9781. Examen TIC A2 2013";


//  Id pregunta: 9782 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Se&ntilde;ale cu&aacute;l de las siguientes opciones est&aacute; basada en el protocolo ICMP:";
 choices[94]= new Array();
 choices[94][0] = "SMTP";
 choices[94][1] = "SNMP ";
 choices[94][2] = "PING";
 choices[94][3] = "DNS ";
 answers[94] = choices[94][2];
 units[94] = "100";
 comments[94] = "Id Pregunta: 9782. Examen TIC A2 2013";


//  Id pregunta: 10002 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso delsistema que";
 choices[95]= new Array();
 choices[95][0] = "siempre se ejecuta en segundo plano (background).";
 choices[95][1] = "siempre es de corta duraci&oacute;n.";
 choices[95][2] = "est&aacute; siempre ejecut&aacute;ndose.";
 choices[95][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[95] = choices[95][0];
 units[95] = "53";
 comments[95] = "Id Pregunta: 10002. ";


//  Id pregunta: 10099 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Se&ntilde;ala la afirmaci&oacute;n correcta sobre el an&aacute;lisis estructurado";
 choices[96]= new Array();
 choices[96][0] = "El modelo ambiental se compone del modelo esencial y el modelo de comportamiento.";
 choices[96][1] = "El modelo esencial se compone del modelo ambiental y el modelo de comportamiento.";
 choices[96][2] = "El modelo de compotamiento se compone del modelo ambiental y el modelo esencial.";
 choices[96][3] = "El modelo ambiental se compone del modelo estructural y el modelo esencial.";
 answers[96] = choices[96][1];
 units[96] = "81";
 comments[96] = "Id Pregunta: 10099. ";


//  Id pregunta: 10191 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Qu&eacute; tratamiento digital de una im&aacute;gen resalta los tonos oscuros?";
 choices[97]= new Array();
 choices[97][0] = "Filtro de mediana";
 choices[97][1] = "Realce logar&iacute;tmico";
 choices[97][2] = "Filtro paso bajo";
 choices[97][3] = "Filtro paso alto";
 answers[97] = choices[97][1];
 units[97] = "93";
 comments[97] = "Id Pregunta: 10191. ";


//  Id pregunta: 10231 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Un servlet encuentra una excepci&oacute;n mientras procesa una petici&oacute;n. &iquest;Qu&eacute; m&eacute;todo usar&aacute;s para enviar una respuesta de error al navegador?:";
 choices[98]= new Array();
 choices[98][0] = "sendError(int errorCode) de HttpServlet";
 choices[98][1] = "sendError(int errorCode) de HttpServletRequest";
 choices[98][2] = "sendError(int errorCode) de HttpServletResponse";
 choices[98][3] = "sendError(String errorMsg) de HttpServletRequest";
 answers[98] = choices[98][2];
 units[98] = "116";
 comments[98] = "Id Pregunta: 10231. ";


//  Id pregunta: 10345 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;A qu&eacute; organismo est&aacute; adscrita la Comisi&oacute;n de Propiedad Intelectual?";
 choices[99]= new Array();
 choices[99][0] = "Ministerio de la Presidencia";
 choices[99][1] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[99][2] = "Ministerio de Industria";
 choices[99][3] = "Ministerio de Econom&iacute;a";
 answers[99] = choices[99][1];
 units[99] = "37";
 comments[99] = "Id Pregunta: 10345. La Comisi&oacute;n de Propiedad Intelectual es un &oacute;rgano colegiado de &aacute;mbito nacional adscrito a la Subdirecci&oacute;n General de Propiedad Intelectual del Ministerio de Educaci&oacute;n, Cultura y Deporte";


