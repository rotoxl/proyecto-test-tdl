/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 184 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  En el m&eacute;todo PERT, &iquest;cu&aacute;l de las afirmaciones es falsa?";
 choices[0]= new Array();
 choices[0][0] = "La holgura libre de una actividad es el margen sobrante suponiendo que el nudo de origen se alcanza lo m&aacute;s pronto posible y que al destino se llega tambi&eacute;n lo m&aacute;s pronto posible.";
 choices[0][1] = "La oscilaci&oacute;n de un nudo es el margen de tiempo existente entre el momento m&aacute;s tarde en el que es admisible llegar al mismo (tiempo early) y el momento m&aacute;s pronto en el que es posible llegar (tiempo last).";
 choices[0][2] = "La holgura total es el margen sobrante suponiendo que a la situaci&oacute;n representada por el nudo de origen se llega lo m&aacute;s pronto posible y que a la de destino se llega lo m&aacute;s tarde admisible.";
 choices[0][3] = "La mayor&iacute;a de los software de Gesti&oacute;n de Proyectos incorporan las t&eacute;cnicas PERT.";
 answers[0] = choices[0][1];
 units[0] = "27";
 comments[0] = "Id Pregunta: 184. ";


//  Id pregunta: 188 Año de creación de pregunta: 2004-01-01
 questions[1]= "2)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[1]= new Array();
 choices[1][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[1][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[1][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[1][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[1] = choices[1][2];
 units[1] = "31,32,33";
 comments[1] = "Id Pregunta: 188. Similar a examen TIC SS A 2003";


//  Id pregunta: 400 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Referente a la Agencia de Protecci&oacute;n de Datos, no es falso que:";
 choices[2]= new Array();
 choices[2][0] = "El Gobierno pueda cesar discrecionalmente a su Director";
 choices[2][1] = "El Director sea nombrado por su Consejo Consultivo";
 choices[2][2] = "Pueda imponer sanciones civiles o penales";
 choices[2][3] = "Se caracteriza por su independencia respecto de la Administraci&oacute;n";
 answers[2] = choices[2][3];
 units[2] = "29";
 comments[2] = "Id Pregunta: 400. ";


//  Id pregunta: 442 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, son derechos de los interesados:";
 choices[3]= new Array();
 choices[3][0] = "El Derecho de Consulta al Registro General de Protecci&oacute;n de Datos";
 choices[3][1] = "Los derechos de acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 choices[3][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[3][3] = "ninguna de las anteriores respuestas es correcta";
 answers[3] = choices[3][2];
 units[3] = "29";
 comments[3] = "Id Pregunta: 442. ";


//  Id pregunta: 499 Año de creación de pregunta: 2003-01-01
 questions[4]= "5)  El nivel EAL4 de Criterios Comunes considera el dise&ntilde;o del producto";
 choices[4]= new Array();
 choices[4][0] = "S&iacute;";
 choices[4][1] = "No, es el EAL2 el que lo considera";
 choices[4][2] = "No, es el EAL3 el que lo considera";
 choices[4][3] = "Ninguna de las anteriores respuestas es cierta";
 answers[4] = choices[4][0];
 units[4] = "31,32,33";
 comments[4] = "Id Pregunta: 499. ";


//  Id pregunta: 758 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  De las siguientes afirmaciones referentes a los sistemas operativos, &iquest;cu&aacute;l es falsa?.";
 choices[5]= new Array();
 choices[5][0] = "El scheduler decide los candidatos a competir por los recursos";
 choices[5][1] = "El dispatcher decide que proceso se ejecuta";
 choices[5][2] = "Para prevenir el deadlock se puede usar el &quot;algoritmo del banquero&quot;.";
 choices[5][3] = "Ninguna de las anteriores es verdadera";
 answers[5] = choices[5][3];
 units[5] = "52";
 comments[5] = "Id Pregunta: 758. ";


//  Id pregunta: 826 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;C&oacute;mo se llama al m&oacute;dulo, del cual una &uacute;nica copia cargada en memoria puede ser utilizada simult&aacute;neamente por  varios usuarios?:";
 choices[6]= new Array();
 choices[6][0] = "M&oacute;dulo concurrente";
 choices[6][1] = "M&oacute;dulo compartido";
 choices[6][2] = "M&oacute;dulo reentrante";
 choices[6][3] = "M&oacute;dulo reusable";
 answers[6] = choices[6][2];
 units[6] = "52";
 comments[6] = "Id Pregunta: 826. ";


//  Id pregunta: 865 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes es un modelo de inteligencia artificial distribuida?:";
 choices[7]= new Array();
 choices[7][0] = "Modelo de actores";
 choices[7][1] = "Modelo de puntos de funci&oacute;n";
 choices[7][2] = "Modelo de regresi&oacute;n m&uacute;ltiple";
 choices[7][3] = "Modelo de Nashville";
 answers[7] = choices[7][0];
 units[7] = "63";
 comments[7] = "Id Pregunta: 865. ";


//  Id pregunta: 957 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Con las siglas SCSI se identifica:";
 choices[8]= new Array();
 choices[8][0] = "Un est&aacute;ndar de facto para la interconexi&oacute;n entre distintas capas de OSI";
 choices[8][1] = "Un est&aacute;ndar para la comunicaci&oacute;n entre el ordenador y los perif&eacute;ricos a &eacute;l conectados";
 choices[8][2] = "Una arquitectura de ordenadores";
 choices[8][3] = "Una tarjeta de video";
 answers[8] = choices[8][1];
 units[8] = "47";
 comments[8] = "Id Pregunta: 957. ";


//  Id pregunta: 1157 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  En Unix el comando  pwd sirve para:";
 choices[9]= new Array();
 choices[9][0] = "Introducir la contrase&ntilde;a al sistema";
 choices[9][1] = "Saber cu&aacute;l es directorio donde se est&aacute; situado";
 choices[9][2] = "Cambiar nuestra contrase&ntilde;a";
 choices[9][3] = "Saber cu&aacute;l es nuestra impresora asignada";
 answers[9] = choices[9][1];
 units[9] = "54";
 comments[9] = "Id Pregunta: 1157. ";


//  Id pregunta: 1160 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  En Unix un proceso puede crear otro proceso Unix si:";
 choices[10]= new Array();
 choices[10][0] = "Tiene privilegios suficientes";
 choices[10][1] = "Tiene mayor prioridad que un determinado umbral";
 choices[10][2] = "Tiene suficientes recursos disponibles";
 choices[10][3] = "No puede ";
 answers[10] = choices[10][2];
 units[10] = "53";
 comments[10] = "Id Pregunta: 1160. ";


//  Id pregunta: 1352 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Se&ntilde;ale la respuesta falsa. El sistema de ficheros en Unix:";
 choices[11]= new Array();
 choices[11][0] = "Est&aacute; formado por i-nodos";
 choices[11][1] = "Se utiliza para acceder a los perif&eacute;ricos";
 choices[11][2] = "Tiene una estructura no basada en jerarqu&iacute;as";
 choices[11][3] = "Est&aacute; basado en listas enlazadas, con varios niveles de indireccion";
 answers[11] = choices[11][2];
 units[11] = "53";
 comments[11] = "Id Pregunta: 1352. ";


//  Id pregunta: 1564 Año de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los soportes que se indican a continuaci&oacute;n tiene una capacidad m&aacute;xima de 18 gigaoctetos en 2 capas y 2 caras?:";
 choices[12]= new Array();
 choices[12][0] = "DVD-R.";
 choices[12][1] = "DVD+R.";
 choices[12][2] = "DVD-ROM.";
 choices[12][3] = "DVD-RAM.";
 answers[12] = choices[12][2];
 units[12] = "48";
 comments[12] = "Id Pregunta: 1564. Junta Andaluc&iacute;a";


//  Id pregunta: 1570 Año de creación de pregunta: 2013-01-01
 questions[13]= "14)  &iquest;Cu&aacute;ntos dispositivos se pueden conectar simult&aacute;neamente a un puerto USB versi&oacute;n 3?:";
 choices[13]= new Array();
 choices[13][0] = "63.";
 choices[13][1] = "127.";
 choices[13][2] = "256.";
 choices[13][3] = " 1024.";
 answers[13] = choices[13][1];
 units[13] = "47";
 comments[13] = "Id Pregunta: 1570. Similar Junta Andaluc&iacute;a";


//  Id pregunta: 1594 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  En los GIS, el formato empleado para almacenamiento de la informaci&oacute;n gr&aacute;fica mediante la t&eacute;cnica de descomponer cada objeto en una matriz de celdas de id&eacute;ntico tama&ntilde;o (pixel) se corresponde con el formato:";
 choices[14]= new Array();
 choices[14][0] = "Vectorial.";
 choices[14][1] = "Shape.";
 choices[14][2] = "Mapa de bits.";
 choices[14][3] = "R&aacute;ster.";
 answers[14] = choices[14][3];
 units[14] = "67";
 comments[14] = "Id Pregunta: 1594. Junta Andaluc&iacute;a";


//  Id pregunta: 1665 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  Indique la respuesta correcta. El firewire...";
 choices[15]= new Array();
 choices[15][0] = "es conocido tambi&eacute;n como i.Link o IEEE1394";
 choices[15][1] = "permite la conexi&oacute;n &quot;en caliente&quot;";
 choices[15][2] = "Las opciones A) y B) son correctas";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][2];
 units[15] = "47";
 comments[15] = "Id Pregunta: 1665. ";


//  Id pregunta: 1695 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  En la clasificaci&oacute;n de arquitectura de ordenadores de Flynn, los procesadores vectoriales corresponden a la clase de ordenadores:";
 choices[16]= new Array();
 choices[16][0] = "SISD ( Single Instruction Single Data)";
 choices[16][1] = "SIMD ( Single Instruction Multiple Data)";
 choices[16][2] = "MIMD (Multiple Instruction Multiple Data)";
 choices[16][3] = "MISD ( Multiple Instruction Single Data)";
 answers[16] = choices[16][1];
 units[16] = "45";
 comments[16] = "Id Pregunta: 1695. ";


//  Id pregunta: 1890 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a un sistema de alimentaci&oacute;n ininterrumpida?";
 choices[17]= new Array();
 choices[17][0] = "Dispone de bater&iacute;as.";
 choices[17][1] = "Tiene capacidad limitada para salvaguardar informaci&oacute;n y apagado del sistema.";
 choices[17][2] = "Convierte energ&iacute;a mec&aacute;nica en energ&iacute;a el&eacute;ctrica.";
 choices[17][3] = "Generalmente se utiliza con servidores, dispositivos de almacenamiento y de comunicaciones.";
 answers[17] = choices[17][2];
 units[17] = "97";
 comments[17] = "Id Pregunta: 1890. ";


//  Id pregunta: 1915 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[18]= new Array();
 choices[18][0] = "Una extensi&oacute;n de Swing";
 choices[18][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario";
 choices[18][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent";
 choices[18][3] = "Una familia de fuentes de caracteres";
 answers[18] = choices[18][1];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1915. ";


//  Id pregunta: 2068 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de prueba no es considerada de &quot;caja negra&quot;?";
 choices[19]= new Array();
 choices[19][0] = "Las particiones de equivalencia";
 choices[19][1] = "Prueba del camino b&aacute;sico";
 choices[19][2] = "El an&aacute;lisis de los valores l&iacute;mite";
 choices[19][3] = "Los grafos causa-efecto";
 answers[19] = choices[19][1];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2068. ";


//  Id pregunta: 2291 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  El modelo entidad/relaci&oacute;n de Chen es:";
 choices[20]= new Array();
 choices[20][0] = "Una t&eacute;cnica para la modelizaci&oacute;n sem&aacute;ntica de datos";
 choices[20][1] = "Una herramienta automatizada de an&aacute;lisis de requisitos";
 choices[20][2] = "Una t&eacute;cnica para el modelado de procesos";
 choices[20][3] = "Una metodolog&iacute;a para el desarrollo de sistemas de informaci&oacute;n";
 answers[20] = choices[20][0];
 units[20] = "80";
 comments[20] = "Id Pregunta: 2291. ";


//  Id pregunta: 2393 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  La fundaci&oacute;n EFQM fue una iniciativa de:";
 choices[21]= new Array();
 choices[21][0] = "Las organizaciones europeas de normalizaci&oacute;n (AENOR, AFNOR, DIN...)";
 choices[21][1] = "ANSI e IEEE";
 choices[21][2] = "La Comisi&oacute;n Europea y 14 compa&ntilde;&iacute;as europeas";
 choices[21][3] = "ISO";
 answers[21] = choices[21][2];
 units[21] = "92";
 comments[21] = "Id Pregunta: 2393. ";


//  Id pregunta: 2451 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los almacenes de datos de un DFD:";
 choices[22]= new Array();
 choices[22][0] = "Representan datos en movimiento";
 choices[22][1] = "Respresentan datos almacenados en dispositivo de acceso r&aacute;pido";
 choices[22][2] = "Comprenden cualquier tipo de almac&eacute;n accesible por odenador ya sea local o remoto";
 choices[22][3] = "Pueden representar un caj&oacute;n de papeles, un archivador manual, un fichero o una base de datos";
 answers[22] = choices[22][3];
 units[22] = "81";
 comments[22] = "Id Pregunta: 2451. ";


//  Id pregunta: 2459 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Los inconvenientes del modelo en espiral son&hellip;:";
 choices[23]= new Array();
 choices[23][0] = "Dependencia de la experiencia del personal";
 choices[23][1] = "No es tan estandar como METRICA";
 choices[23][2] = "No es adecuado para la orientaci&oacute;n a objetos";
 choices[23][3] = "Todas las anteriores son ciertas";
 answers[23] = choices[23][0];
 units[23] = "76";
 comments[23] = "Id Pregunta: 2459. ";


//  Id pregunta: 2522 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no se asocia con una forma de codificar im&aacute;genes digitales?:";
 choices[24]= new Array();
 choices[24][0] = "Raster";
 choices[24][1] = "Vectorial";
 choices[24][2] = "Bitmap";
 choices[24][3] = "Multiplex";
 answers[24] = choices[24][3];
 units[24] = "93";
 comments[24] = "Id Pregunta: 2522. ";


//  Id pregunta: 2652 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  La actividad DSI-CAL2 se denomina";
 choices[25]= new Array();
 choices[25][0] = "Revisi&oacute;n de la especificaci&oacute;n t&eacute;cnica del plan de prueba";
 choices[25][1] = "Revisi&oacute;n de la verificaci&oacute;n de la arquitectura del sistema";
 choices[25][2] = "Revisi&oacute;n de los requisitos de implantaci&oacute;n";
 choices[25][3] = "ninguna es cirrecta";
 answers[25] = choices[25][0];
 units[25] = "87,88,92";
 comments[25] = "Id Pregunta: 2652. ";


//  Id pregunta: 2719 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  Indicar la afirmaci&oacute;n incorrecta relacionada con los modelos de ciclo de vida:";
 choices[26]= new Array();
 choices[26][0] = "El modelo en cascada supone que los requisitos son inamovibles a lo largo del desarrollo";
 choices[26][1] = "El modelo de prototipado permite definir los requisitos de desarrollo a medida que se va desarrollando";
 choices[26][2] = "El modelo en espiral se centra en la identificaci&oacute;n de los riesgos y en la manera de resolverlos";
 choices[26][3] = "Los modelos de transformaci&oacute;n se aplican en la actualidad con lenguaje 4G (generaci&oacute;n autom&aacute;tica de c&oacute;digo) especialmente indicado para proyectos grandes";
 answers[26] = choices[26][3];
 units[26] = "76";
 comments[26] = "Id Pregunta: 2719. ";


//  Id pregunta: 2848 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  El nivel que determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras es el";
 choices[27]= new Array();
 choices[27][0] = "fonol&oacute;gico";
 choices[27][1] = "pros&oacute;dico";
 choices[27][2] = "fon&eacute;tico";
 choices[27][3] = "ninguno de los anteriores";
 answers[27] = choices[27][1];
 units[27] = "94";
 comments[27] = "Id Pregunta: 2848. ";


//  Id pregunta: 2964 Año de creación de pregunta: 2004-01-01
 questions[28]= "29)  De acuerdo con lo previsto en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[28]= new Array();
 choices[28][0] = "Un Organismo Aut&oacute;nomo de los previstos en el art&iacute;culo 42 de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 choices[28][1] = "Una Entidad P&uacute;blica Empresarial de las previstas en el art&iacute;culo 54 de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 choices[28][2] = "Una Sociedad Estatal de las previstas en la disposici&oacute;n adicional trig&eacute;simo sexta de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 choices[28][3] = "Un Organismo p&uacute;blico de los previstos en el apartado 1 de la disposici&oacute;n adicional d&eacute;cima de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 answers[28] = choices[28][3];
 units[28] = "110";
 comments[28] = "Id Pregunta: 2964. Examen TIC MAP B 2004.Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 3099 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  Una transmisi&oacute;n half duplex describe:";
 choices[29]= new Array();
 choices[29][0] = "Un circuito de cuatro hilos";
 choices[29][1] = "Un cable con doble malla";
 choices[29][2] = "Una comunicaci&oacute;n alternativa en dos sentidos";
 choices[29][3] = "Todas las respuestas anteriores son ciertas";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3099. ";


//  Id pregunta: 3169 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes es un m&eacute;todo de modulaci&oacute;n &oacute;ptica?:";
 choices[30]= new Array();
 choices[30][0] = "Modulaci&oacute;n directa";
 choices[30][1] = "Modulaci&oacute;n indirecta";
 choices[30][2] = "Modulaci&oacute;n de fase";
 choices[30][3] = "Modulaci&oacute;n interna";
 answers[30] = choices[30][0];
 units[30] = "97";
 comments[30] = "Id Pregunta: 3169. ";


//  Id pregunta: 3231 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes protocolos de los est&aacute;ndares X.400 hace referencia a las comunicaciones entre agente de usuario, y es conocido como IPM (InterPersonal Messaging)?:";
 choices[31]= new Array();
 choices[31][0] = "P1";
 choices[31][1] = "P2";
 choices[31][2] = "P3";
 choices[31][3] = "P7";
 answers[31] = choices[31][1];
 units[31] = "106";
 comments[31] = "Id Pregunta: 3231. ";


//  Id pregunta: 3277 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Qu&eacute; ancho de banda tiene un acceso b&aacute;sico de RDSI en Europa?:";
 choices[32]= new Array();
 choices[32][0] = "64 kbps";
 choices[32][1] = "144 kbps";
 choices[32][2] = "128 kbps";
 choices[32][3] = "2048 kbps";
 answers[32] = choices[32][1];
 units[32] = "103";
 comments[32] = "Id Pregunta: 3277. ";


//  Id pregunta: 3370 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Dentro de los sistemas m&oacute;viles celulares el t&eacute;rmino 'handover' hace referencia a los problemas relativos a:";
 choices[33]= new Array();
 choices[33][0] = "Traspaso del m&oacute;vil de una c&eacute;lula a otra";
 choices[33][1] = "La incompatibilidad entre sistemas";
 choices[33][2] = "Los sistemas de directorio X.500";
 choices[33][3] = "Los problemas debidos a la saturaci&oacute;n del espectro radioel&eacute;ctrico";
 answers[33] = choices[33][0];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3370. ";


//  Id pregunta: 3476 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  El tiempo m&aacute;ximo de paso de datos de una estaci&oacute;n en una red Ethernet a 100 Mbits es:";
 choices[34]= new Array();
 choices[34][0] = "Igual al tiempo que tarda en propagarse un mensaje con longitud m&aacute;xima multiplicado por el n&uacute;mero de nodos en ese tramo";
 choices[34][1] = "No hay tiempo m&aacute;ximo";
 choices[34][2] = "Depende fundamentalmente de si el soporte es de cobre o de fibra &oacute;ptica";
 choices[34][3] = "No existe tiempo m&aacute;ximo ya que es inmediato, pues que el acceso al medio del mensaje lo hace en cuanto escucha que no hay tr&aacute;fico en la red";
 answers[34] = choices[34][1];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3476. ";


//  Id pregunta: 3531 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  En la tecnolog&iacute;a de web-services, una de las afirmaciones siguientes no es correcta:";
 choices[35]= new Array();
 choices[35][0] = "SOAP deriva de XML-RPC";
 choices[35][1] = "Se emplea WSDL (Web Service Definition Language) como lenguaje de descripci&oacute;n de web services por sus proveedores";
 choices[35][2] = "UDDI (Universal Description Discovery and Integration) permite la publicaci&oacute;n y localizaci&oacute;n de los servicios web";
 choices[35][3] = "WSSL (Web Service Specification Language) se usa como lenguaje de especificaci&oacute;n de los servicios web";
 answers[35] = choices[35][3];
 units[35] = "51,69";
 comments[35] = "Id Pregunta: 3531. ";


//  Id pregunta: 3606 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  La f&oacute;rmula de Shannon para la capacidad de un canal es (B es el ancho de banda, S la potencia de la se&ntilde;al y N la potencia del ruido):";
 choices[36]= new Array();
 choices[36][0] = "R[bps] = B[Hz] &middot; log2(1 + S/N)";
 choices[36][1] = "R[bps] = B[Hz] &middot; ln(1 + S/N)";
 choices[36][2] = "R[bps] = B[Hz] &middot; log10(1 + S/N)";
 choices[36][3] = "R[bps] = B[kHz] &middot; log2(S/N)";
 answers[36] = choices[36][0];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3606. *: teorema de shannon";


//  Id pregunta: 3608 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  La funci&oacute;n de asociar sesiones con conexiones de transporte corresponde a:";
 choices[37]= new Array();
 choices[37][0] = "Nivel 3 Red";
 choices[37][1] = "Nivel 4 Transporte";
 choices[37][2] = "Nivel 5 Sesi&oacute;n";
 choices[37][3] = "Nivel 6 Presentaci&oacute;n";
 answers[37] = choices[37][1];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3608. ";


//  Id pregunta: 3673 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  Una emisora de radiodifusi&oacute;n comercial es un ejemplo de sistemas de transmisi&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Simplex";
 choices[38][1] = "Semiduplex";
 choices[38][2] = "Duplex";
 choices[38][3] = "Half duplex";
 answers[38] = choices[38][0];
 units[38] = "99";
 comments[38] = "Id Pregunta: 3673. ";


//  Id pregunta: 3678 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Una red MAN es capaz de conectar estaciones de voz y datos en entornos metropolitanos, lo que suele entenderse por un di&aacute;metro de red de varias decenas de kil&oacute;metros. Entre estas se encuentra la denominada DQDB. Indique la opci&oacute;n correcta:";
 choices[39]= new Array();
 choices[39][0] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.6";
 choices[39][1] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.9";
 choices[39][2] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.6";
 choices[39][3] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.9";
 answers[39] = choices[39][2];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3678. ";


//  Id pregunta: 3785 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Respecto a la clase de QoS definido por el ATM Forum, UBR, puede decirse que:";
 choices[40]= new Array();
 choices[40][0] = "Asegura una cantidad m&iacute;nima de datos que pueden transmitirse a trav&eacute;s de la red";
 choices[40][1] = "Garantiza al menos una tasa de c&eacute;lulas transmitidas";
 choices[40][2] = "No garantiza ni siquiera un retardo m&aacute;ximo";
 choices[40][3] = "Tiene una tasa de bits concreta incluida en la especificaci&oacute;n";
 answers[40] = choices[40][2];
 units[40] = "109";
 comments[40] = "Id Pregunta: 3785. ";


//  Id pregunta: 3917 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  El m&iacute;nimo espacio de almacenamiento posible y el m&eacute;todo de copia de seguridad m&aacute;s r&aacute;pido se alcanzan:";
 choices[41]= new Array();
 choices[41][0] = "Usando una combinaci&oacute;n de copias de seguridad normales e incrementales.";
 choices[41][1] = "Usando una combinaci&oacute;n de copias de seguridad normales y diferenciales.";
 choices[41][2] = "Al crear por primera vez un conjunto de copia.";
 choices[41][3] = "Nunca pueden alcanzarse ambos a la vez.";
 answers[41] = choices[41][0];
 units[41] = "97";
 comments[41] = "Id Pregunta: 3917. ";


//  Id pregunta: 4044 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l es el l&iacute;mite m&aacute;ximo de la multa que se puede imponer por la comisi&oacute;n de una infracci&oacute;n leve seg&uacute;n la Ley 32/2003 de Telecomunicaciones?";
 choices[42]= new Array();
 choices[42][0] = "50.000 euros";
 choices[42][1] = "30.000 euros";
 choices[42][2] = "500.000 euros";
 choices[42][3] = "60.000 euros";
 answers[42] = choices[42][0];
 units[42] = "110";
 comments[42] = "Id Pregunta: 4044. ";


//  Id pregunta: 4132 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Las im&aacute;genes se utilizan para";
 choices[43]= new Array();
 choices[43][0] = "la realizaci&oacute;n de un backup t&iacute;pico";
 choices[43][1] = "almacenar datos antiguos para asegurar la compatibilidad";
 choices[43][2] = "para recuperar datos en caso de desastre";
 choices[43][3] = "todas las anteriores";
 answers[43] = choices[43][2];
 units[43] = "97";
 comments[43] = "Id Pregunta: 4132. ";


//  Id pregunta: 4255 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Cu&aacute;l de los siguientes planes de fomento de la Sociedad de la Informaci&oacute;n ha sido lanzado por el Ministerio de Industria Turismo y Comercio espa&ntilde;ol:";
 choices[44]= new Array();
 choices[44][0] = "El plan Avanza ";
 choices[44][1] = "La estrategia i2010";
 choices[44][2] = "El plan Conecta ";
 choices[44][3] = "El plan eEurope 2005";
 answers[44] = choices[44][0];
 units[44] = "30";
 comments[44] = "Id Pregunta: 4255. El plan Conecta fue lanzado por el antiguo MAP y los otros son europeos";


//  Id pregunta: 4298 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  La adopci&oacute;n de m&eacute;todos formales de especificaci&oacute;n de requisitos:";
 choices[45]= new Array();
 choices[45][0] = "Permite reducir el coste de desarrollo desde el inicio de su adopci&oacute;n en la organizaci&oacute;n.";
 choices[45][1] = "No debe combinarse con los m&eacute;todos convencionales de desarrollo.";
 choices[45][2] = "Aconseja adjuntar comentarios en lenguaje natural a las especificaciones formales";
 choices[45][3] = "Supone una garant&iacute;a de correcci&oacute;n del sistema final.";
 answers[45] = choices[45][2];
 units[45] = "78";
 comments[45] = "Id Pregunta: 4298. ";


//  Id pregunta: 4407 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;En qu&eacute; consiste el CRA (Customer Relationship Analisis?";
 choices[46]= new Array();
 choices[46][0] = "Es un conjunto de herramientas que proveen de soporte t&eacute;cnico al CRM.";
 choices[46][1] = "Es el precursor del CRM.";
 choices[46][2] = "Es el an&aacute;lisis de datos acerca de los clientes y su relaci&oacute;n con la empresa.";
 choices[46][3] = "Integraci&oacute;n del software de an&aacute;lisis de datos con las bases de datos y el inventario de las organizaciones";
 answers[46] = choices[46][2];
 units[46] = "65";
 comments[46] = "Id Pregunta: 4407. ";


//  Id pregunta: 4473 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Que se entiende por el conjunto de t&eacute;cnicas para iniciar, evaluar e implementar cambios en un producto software manteniendo su integridad?";
 choices[47]= new Array();
 choices[47][0] = "Metodolog&iacute;a.";
 choices[47][1] = "Gesti&oacute;n de Configuraci&oacute;n Software.";
 choices[47][2] = "Ingenier&iacute;a Inversa.";
 choices[47][3] = "An&aacute;lisis y Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[47] = choices[47][1];
 units[47] = "76";
 comments[47] = "Id Pregunta: 4473. ";


//  Id pregunta: 4619 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Cual de las siguientes opciones es correcta";
 choices[48]= new Array();
 choices[48][0] = "en el modelo jer&aacute;rquico no se exige que el usuario conozca las vinculaciones entre entidades";
 choices[48][1] = "los lenguajes del modelo en red son relacionales";
 choices[48][2] = "el modelo en red responde a una estructura arborescente a varios niveles";
 choices[48][3] = "en el modelo relacional no existen vinculaciones explicitas entre entidades";
 answers[48] = choices[48][3];
 units[48] = "";
 comments[48] = "Id Pregunta: 4619. ";


//  Id pregunta: 4911 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &ldquo;duplicaciones&rdquo; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[49]= new Array();
 choices[49][0] = "Data Marts.";
 choices[49][1] = "Metadata.";
 choices[49][2] = "Middleware.";
 choices[49][3] = "Dataware.";
 answers[49] = choices[49][0];
 units[49] = "68";
 comments[49] = "Id Pregunta: 4911. Examen TIC B 2007";


//  Id pregunta: 5008 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[50]= new Array();
 choices[50][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[50][1] = "Es independiente del sistema operativo";
 choices[50][2] = "Es independiente de la base de datos";
 choices[50][3] = "Es un tipo de API";
 answers[50] = choices[50][0];
 units[50] = "58";
 comments[50] = "Id Pregunta: 5008. Examen TIC A 2007";


//  Id pregunta: 5094 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[51]= new Array();
 choices[51][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[51][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[51][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[51][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[51] = choices[51][2];
 units[51] = "74";
 comments[51] = "Id Pregunta: 5094. ";


//  Id pregunta: 5165 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  La Tecnolog&iacute;a empleada por la Televisi&oacute;n Digital Terrestre (TDT) permite que el despliegue de las redes de radiodifusi&oacute;n se efect&uacute;e:";
 choices[52]= new Array();
 choices[52][0] = "En redes de Frecuencia &Uacute;nica (SFN) y en redes Multifrecuencia (MFN).";
 choices[52][1] = "&Uacute;nicamente en redes de Frecuencia &Uacute;nica (SFN).";
 choices[52][2] = "&Uacute;nicamente en redes Multifrecuencia (MFN).";
 choices[52][3] = "En redes de Frecuencia (SFN) sin necesidad de sincronizar los transmisores radio.";
 answers[52] = choices[52][0];
 units[52] = "105";
 comments[52] = "Id Pregunta: 5165. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5199 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  No se considera una t&eacute;cnica o herramienta para la creaci&oacute;n de prototipos:";
 choices[53]= new Array();
 choices[53][0] = "T&eacute;cnicas de Cuarta Generaci&oacute;n";
 choices[53][1] = "Componentes de Software Reutilizables";
 choices[53][2] = "Modelado L&oacute;gico de Datos";
 choices[53][3] = "Especificaciones Formales y Entornos para Prototipos";
 answers[53] = choices[53][2];
 units[53] = "85";
 comments[53] = "Id Pregunta: 5199. ";


//  Id pregunta: 5269 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  La identificaci&oacute;n inequ&iacute;voca y personalizada de todos aquellos que tienen acceso a un fichero de datos de car&aacute;cter personal es calificada en el RD 1720/2007 como una medida de seguridad de nivel de car&aacute;cter";
 choices[54]= new Array();
 choices[54][0] = "basico";
 choices[54][1] = "medio";
 choices[54][2] = "alto";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][0];
 units[54] = "29";
 comments[54] = "Id Pregunta: 5269. ";


//  Id pregunta: 5494 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  SWT (Standard Widget Toolkit)";
 choices[55]= new Array();
 choices[55][0] = "El rendimiento de la librer&iacute;a AWT es mejor que la de SWT";
 choices[55][1] = "Es una librer&iacute;a que proporciona funcionalidades de componentes gr&aacute;ficos  para la plataforma Eclipse.";
 choices[55][2] = "a y b son ciertas";
 choices[55][3] = "Se ha desarrollado puramente en Java";
 answers[55] = choices[55][1];
 units[55] = "60";
 comments[55] = "Id Pregunta: 5494. ";


//  Id pregunta: 5508 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Es obligatorio el env&iacute;o de facturas en formato electr&oacute;nico a la AGE?";
 choices[56]= new Array();
 choices[56][0] = "S&iacute;, en todo caso";
 choices[56][1] = "Estar&aacute; condicionada al consentimiento expreso de cada departamento ministerial";
 choices[56][2] = "S&iacute;, cuando se trata de empresas de m&aacute;s de 100 empleados";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][1];
 units[56] = "70";
 comments[56] = "Id Pregunta: 5508. ";


//  Id pregunta: 5533 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  El Programa IDABC para el periodo 2005 a 2009, &iquest;en qu&eacute; norma europea se basa?";
 choices[57]= new Array();
 choices[57][0] = "Decisi&oacute;n 2004/387/CE";
 choices[57][1] = "Decisi&oacute;n 1719/1999/CE";
 choices[57][2] = "Decisi&oacute;n 1720/1999/CE";
 choices[57][3] = "Directiva 2004/387/CE";
 answers[57] = choices[57][0];
 units[57] = "30";
 comments[57] = "Id Pregunta: 5533. ";


//  Id pregunta: 5631 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  Una soluci&oacute;n RISC se caracteriza por:";
 choices[58]= new Array();
 choices[58][0] = "Pocos formatos de instrucci&oacute;n (longitud fija)";
 choices[58][1] = "Muchos modos de direccionamiento";
 choices[58][2] = "Dos instrucciones de almacenamiento (load/store)";
 choices[58][3] = "Tanto a) como c)";
 answers[58] = choices[58][3];
 units[58] = "46";
 comments[58] = "Id Pregunta: 5631. ";


//  Id pregunta: 5743 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica?";
 choices[59]= new Array();
 choices[59][0] = "La que cifra los caracteres de uno en uno";
 choices[59][1] = "La que sustituye cada letra por varias letras";
 choices[59][2] = "Aquella en que cada letra es sustituida siempre por la misma dentro de un mismo mensaje";
 choices[59][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[59] = choices[59][2];
 units[59] = "72";
 comments[59] = "Id Pregunta: 5743. ";


//  Id pregunta: 6249 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta, de acuerdo con M&eacute;trica 3?";
 choices[60]= new Array();
 choices[60][0] = "El objetivo de la gesti&oacute;n de la configuraci&oacute;n es mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realicen cambios";
 choices[60][1] = "Ejecutables y c&oacute;digo fuente son elementos de configuraci&oacute;n software pero no lo son las especificaciones de requisitos";
 choices[60][2] = "La gesti&oacute;n de configuraci&oacute;n se realiza durante todas las actividades asociadas al desarrollo del sistema, y contin&uacute;a registrando los cambios hasta que &eacute;ste deja de utilizarse";
 choices[60][3] = "La gesti&oacute;n de configuraci&oacute;n aporta informaci&oacute;n precisa para valorar el impacto de los cambios en el mantenimiento correctivo. La gesti&oacute;n de configuraci&oacute;n no contempla el mantenimiento evolutivo";
 answers[60] = choices[60][2];
 units[60] = "86";
 comments[60] = "Id Pregunta: 6249. TICB-2009, bloque desarrollo";


//  Id pregunta: 6267 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  Cu&aacute;l de los siguientes no es uno de los diez dominios de control a contemplar en un Plan de Continuidad:";
 choices[61]= new Array();
 choices[61][0] = "Seguridad ligada al personal.";
 choices[61][1] = "Seguridad f&iacute;sica y del entorno.";
 choices[61][2] = "Conformidad.";
 choices[61][3] = "Seguridad del centro de respaldo.";
 answers[61] = choices[61][3];
 units[61] = "32";
 comments[61] = "Id Pregunta: 6267. ";


//  Id pregunta: 6284 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; es un Plan de Sistemas?";
 choices[62]= new Array();
 choices[62][0] = "Un an&aacute;lisis de la situaci&oacute;n actual del &aacute;rea de sistemas de una organizaci&oacute;n";
 choices[62][1] = "Un manual de usuario para los clientes de aplicaciones inform&aacute;ticas de una organizaci&oacute;n";
 choices[62][2] = "Un plan de riesgos de sistemas de informaci&oacute;n";
 choices[62][3] = "Un documento que recoge el conjunto de medidas dirigidas a satisfacer las necesidades en materia de tratamiento automatizado de informaci&oacute;n de una organizaci&oacute;n";
 answers[62] = choices[62][3];
 units[62] = "77";
 comments[62] = "Id Pregunta: 6284. ";


//  Id pregunta: 6396 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  En relaci&oacute;n a las copias electr&oacute;nicas de los documentos electr&oacute;nicos realizadas por la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos, se&ntilde;ale la opci&oacute;n incorrecta.";
 choices[63]= new Array();
 choices[63][0] = "En caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, debe incluir su car&aacute;cter de copia entre los metadatos asociados.";
 choices[63][1] = "No se podr&aacute;n generar m&aacute;s copias electr&oacute;nicas aut&eacute;nticas a partir de otras copias electr&oacute;nicas aut&eacute;nticas.";
 choices[63][2] = "Los &oacute;rganos emisores de los documentos administrativos electr&oacute;nicos o receptores de los documentos privados electr&oacute;nicos, o los archivos que reciban los mismos, est&aacute;n obligados a la conservaci&oacute;n de los documentos originales, aunque se hubiere procedido a su copiado.";
 choices[63][3] = "Las copias electr&oacute;nicas generadas que, por ser id&eacute;nticas al documento electr&oacute;nico original no comportan cambio de formato ni de contenido, tendr&aacute;n la eficacia jur&iacute;dica de documento electr&oacute;nico original.";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 6396. Art&iacute;culo 43 RD 1671/2009";


//  Id pregunta: 6411 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  De acuerdo a lo dispuesto en la ley de servicios de la sociedad de la informaci&oacute;n y comercio electr&oacute;nico, &iquest;Cu&aacute;l es la sanci&oacute;n correspondiente por la comisi&oacute;n de infracciones muy graves?";
 choices[64]= new Array();
 choices[64][0] = "150.001 hasta 600.000 euros";
 choices[64][1] = "150.001 hasta 300.000 euros";
 choices[64][2] = "300.001 hasta 600.000 euros";
 choices[64][3] = "600.001 hasta 1,000.000 euros";
 answers[64] = choices[64][0];
 units[64] = "30";
 comments[64] = "Id Pregunta: 6411. Art&iacute;culo 39 Ley 37/2007";


//  Id pregunta: 6425 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes aplicaciones no se incluye en la suite ofim&aacute;tica OpenOffice.org ?";
 choices[65]= new Array();
 choices[65][0] = "Writer";
 choices[65][1] = "Calc";
 choices[65][2] = "Draw";
 choices[65][3] = "Spread";
 answers[65] = choices[65][3];
 units[65] = "62";
 comments[65] = "Id Pregunta: 6425. ";


//  Id pregunta: 6523 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  El API que permite a los desarrolladores Java generar y recoger mensajes SOAP con ficheros adjuntos es:";
 choices[66]= new Array();
 choices[66][0] = "JAXR";
 choices[66][1] = "JSXA";
 choices[66][2] = "SAAJ";
 choices[66][3] = "SWAJ";
 answers[66] = choices[66][2];
 units[66] = "116";
 comments[66] = "Id Pregunta: 6523. ";


//  Id pregunta: 6525 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Los incidentes se clasifican de acuerdo a su";
 choices[67]= new Array();
 choices[67][0] = "Impacto";
 choices[67][1] = "Urgencia";
 choices[67][2] = "Prioridad";
 choices[67][3] = "Todas las respuestas anteriores son correctas";
 answers[67] = choices[67][3];
 units[67] = "98";
 comments[67] = "Id Pregunta: 6525. ";


//  Id pregunta: 7178 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  En un esquema de certificaci&oacute;n y seguridad basado en clave p&uacute;blica (PKI), la 'tercera parte confiable' se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Autoridad de Certificaci&oacute;n";
 choices[68][1] = "Autoridad de Registro";
 choices[68][2] = "Centro de Confianza";
 choices[68][3] = "Autoridad de Revocaci&oacute;n";
 answers[68] = choices[68][0];
 units[68] = "74";
 comments[68] = "Id Pregunta: 7178. Examen TIC B 2009";


//  Id pregunta: 7338 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  ASCII es el acr&oacute;nimo de:";
 choices[69]= new Array();
 choices[69][0] = "American Standard Code for Information Integration";
 choices[69][1] = "Alliance Standard Code Interchange Integration";
 choices[69][2] = "American Standard Code for Information Interchange";
 choices[69][3] = "All sugar can injure igloos";
 answers[69] = choices[69][2];
 units[69] = "72";
 comments[69] = "Id Pregunta: 7338. ";


//  Id pregunta: 7786 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   &iquest;Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programaci&oacute;n orientado a objetos?";
 choices[70]= new Array();
 choices[70][0] = " Encapsulaci&oacute;n.";
 choices[70][1] = " Herencia.";
 choices[70][2] = " Polimorfismo.";
 choices[70][3] = " Historicismo.";
 answers[70] = choices[70][3];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7786. Map 2005";


//  Id pregunta: 7951 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[71]= new Array();
 choices[71][0] = " La preferencia local.";
 choices[71][1] = " El agregado at&oacute;mico.";
 choices[71][2] = " El pr&oacute;ximo salto.";
 choices[71][3] = " El agregador.";
 answers[71] = choices[71][2];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7951. Map 2006";


//  Id pregunta: 7986 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP (Transmission Control Protocol/Internet Protocol)?";
 choices[72]= new Array();
 choices[72][0] = " PGR.";
 choices[72][1] = " SMTP.";
 choices[72][2] = " ICMP.";
 choices[72][3] = " SNMP.";
 answers[72] = choices[72][3];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7986. Map 2007";


//  Id pregunta: 8130 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[73]= new Array();
 choices[73][0] = " Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden.";
 choices[73][1] = " Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime.";
 choices[73][2] = " .NET Framework 3.5 ya est&aacute; disponible en la Web de Microsoft.";
 choices[73][3] = " Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes.";
 answers[73] = choices[73][1];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 8130. Map 2008";


//  Id pregunta: 8135 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   Por IP-SPOOFING entendemos:";
 choices[74]= new Array();
 choices[74][0] = " Captura de passwords.";
 choices[74][1] = " Uso fraudulento de direcciones de enlace.";
 choices[74][2] = " Suplantaci&oacute;n de direcciones de red.";
 choices[74][3] = " Propagaci&oacute;n de virus.";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 8135. Map 2008";


//  Id pregunta: 8339 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;En qu&eacute; se diferencian JRP y JAD?";
 choices[75]= new Array();
 choices[75][0] = "El JRP es una t&eacute;cnica de estimaci&oacute;n y el JAD es una t&eacute;cnica de captura de requisitos.";
 choices[75][1] = "El JRP es un modelo de cido de vida utilizado en el desarrollo de aplicaciones mientras que el JAD es una IDE (Integrated Development Environment) empleada en JAVA.";
 choices[75][2] = "Son distintas herramientas que permiten la gesti&oacute;n de la configuraci&oacute;n del software.";
 choices[75][3] = "Son sesiones de trabajos que permiten identificar los requisitos de un sistema. Se diferencian en los perfiles que act&uacute;an en ellas y en los resultados de &eacute;stas.";
 answers[75] = choices[75][3];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8339. Examen TIC A2 2010";


//  Id pregunta: 8468 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  GPRS es un servicio que soporta la transmisi&oacute;n de paquetes via radio:";
 choices[76]= new Array();
 choices[76][0] = "Utilizando el protocolo HSDPA y el mismo BSS de GSM";
 choices[76][1] = "Utilizando el protocolo IP y el mismo BSS de GSM";
 choices[76][2] = "Utilizando el protocolo IP y transmisi&oacute;n WCDMA de banda ancha";
 choices[76][3] = "Ninguna de las anteriores";
 answers[76] = choices[76][1];
 units[76] = "108";
 comments[76] = "Id Pregunta: 8468. Analista Ayto. Madrid 2010";


//  Id pregunta: 8506 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  La segunda versi&oacute;n de la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n (MAGERIT v2) define un conjunto de procesos para realizar el an&aacute;lisis y gesti&oacute;n de riesgos, &iquest;Cu&aacute;l de las siguientes actividades pertenece al proceso P1 &quot;Planificaci&oacute;n&quot;? ";
 choices[77]= new Array();
 choices[77][0] = "Lanzamiento del proyecto. ";
 choices[77][1] = "Toma de decisiones. ";
 choices[77][2] = "Ejecuci&oacute;n del plan. ";
 choices[77][3] = "Estimaci&oacute;n del estado de riesgo. ";
 answers[77] = choices[77][0];
 units[77] = "32";
 comments[77] = "Id Pregunta: 8506. Examen TIC A2 2010";


//  Id pregunta: 8533 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Qu&eacute; m&eacute;todo de codificaci&oacute;n de la voz NO realiza compresi&oacute;n?";
 choices[78]= new Array();
 choices[78][0] = "LD-CELP (Low-Delay Code-Excited Linear Prediction).";
 choices[78][1] = "CS-ACELP (Conjugate-Structured Algebraic Code-Excited Linear Prediction)";
 choices[78][2] = "PCM (Pulse-Code Modulation).";
 choices[78][3] = "ADPCM (Adaptative Differential Pulse Code Modulation)";
 answers[78] = choices[78][2];
 units[78] = "117";
 comments[78] = "Id Pregunta: 8533. Examen TIC A2 2010 interna";


//  Id pregunta: 8605 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Qu&eacute; es una copia de seguridad incremental?";
 choices[79]= new Array();
 choices[79][0] = "Aquella que copia tan solo los archivos modificados desde la &uacute;ltima copia de seguridad normal, y no marca &eacute;stos como copiados.";
 choices[79][1] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de seguridad normal, y no marca lodos estos archivos como copiados";
 choices[79][2] = "Aquella que copia tan solo los archivos creados desde la &uacute;ltima copia de seguridad norma: y marca &eacute;stos como copiados.";
 choices[79][3] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de segundad norma!, y marca todos estos archivos como copiados.";
 answers[79] = choices[79][3];
 units[79] = "96";
 comments[79] = "Id Pregunta: 8605. Examen TIC A2 2010 interna";


//  Id pregunta: 8824 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)   Seg&uacute;n el Real Decreto legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, &quot;toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n o fijaci&oacute;n&quot; es:";
 choices[80]= new Array();
 choices[80][0] = " Un algoritmo";
 choices[80][1] = "Un m&eacute;todo";
 choices[80][2] = "Un programa de ordenador ";
 choices[80][3] = "Un procedimiento";
 answers[80] = choices[80][2];
 units[80] = "36,37";
 comments[80] = "Id Pregunta: 8824. Examen UC3M 2010";


//  Id pregunta: 8852 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Entre los tipos de componentes que pueden desarrollarse en aplicaciones basadas en J2EE 1.4 tenemos:";
 choices[81]= new Array();
 choices[81][0] = "P&aacute;ginas Asp y DLL";
 choices[81][1] = "Applet, Servlets, EJBs";
 choices[81][2] = "Javascript y p&aacute;ginas JSP";
 choices[81][3] = "Componentes COM";
 answers[81] = choices[81][1];
 units[81] = "116";
 comments[81] = "Id Pregunta: 8852. Analista Ayto. Madrid 2010";


//  Id pregunta: 8914 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes no es una funci&oacute;n del Administrador de la Base de Datos (DBA)?:";
 choices[82]= new Array();
 choices[82][0] = "Realizar el modelo Entidad/Relaci&oacute;n que defina la estructura de los datos.";
 choices[82][1] = "Monitorizaci&oacute;n del rendimiento de la base de datos.";
 choices[82][2] = "Balance de la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento.";
 choices[82][3] = "Gestionar los usuarios y los permisos de acceso a la base da datos";
 answers[82] = choices[82][0];
 units[82] = "26";
 comments[82] = "Id Pregunta: 8914. ";


//  Id pregunta: 9092 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[83]= new Array();
 choices[83][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[83][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[83][2] = "Toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[83][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[83] = choices[83][2];
 units[83] = "36";
 comments[83] = "Id Pregunta: 9092. ";


//  Id pregunta: 9243 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Qu&eacute; es main en relaci&oacute;n a Ubuntu?";
 choices[84]= new Array();
 choices[84][0] = "Contiene s&oacute;lo los paquetes que cumplen los requisitos de la licencia de Ubuntu.";
 choices[84][1] = "Contiene los programas soportados por los desarrollores de Ubuntu que no est&aacute;n disponibles bajo ning&uacute;n tipo de licencia libre.";
 choices[84][2] = "Son los programas que no reciben apoyo por parte del equipo de Ubuntu.";
 choices[84][3] = "Son programas comerciales.";
 answers[84] = choices[84][0];
 units[84] = "54";
 comments[84] = "Id Pregunta: 9243. ";


//  Id pregunta: 9343 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest; Cu&aacute;ntos principios fundamentales define la ISO 9004:2000 ?";
 choices[85]= new Array();
 choices[85][0] = "6";
 choices[85][1] = "7";
 choices[85][2] = "8";
 choices[85][3] = "Ninguno";
 answers[85] = choices[85][2];
 units[85] = "87";
 comments[85] = "Id Pregunta: 9343. ";


//  Id pregunta: 9364 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  Una red Ethernet que sigue la especificaci&oacute;n 10GBASE-ER:";
 choices[86]= new Array();
 choices[86][0] = "Funciona sobre par de cobre.";
 choices[86][1] = "Funciona con fibra &oacute;ptica que opera en primera ventana.";
 choices[86][2] = "Funciona con fibra &oacute;ptica que opera en tercera ventana.";
 choices[86][3] = "Utiliza fibra &oacute;ptica multimodo.";
 answers[86] = choices[86][2];
 units[86] = "101";
 comments[86] = "Id Pregunta: 9364. pag.14 astic 2011";


//  Id pregunta: 9374 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  Indique cu&aacute;l de las siguientes afirmaciones es correcta en el &aacute;mbito de la normalizaci&oacute;n de puntuaciones de la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta:";
 choices[87]= new Array();
 choices[87][0] = "El m&eacute;todo de fracci&oacute;n del ideal y el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[87][1] = "El m&eacute;todo de fracci&oacute;n del m&aacute;ximo y el m&eacute;todo de fracci&oacute;n de la suma no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[87][2] = "El m&eacute;todo de fracci&oacute;n del ideal no mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo s&iacute; la mantiene";
 choices[87][3] = "El m&eacute;todo de fracci&oacute;n del ideal mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no la mantiene";
 answers[87] = choices[87][2];
 units[87] = "34";
 comments[87] = "Id Pregunta: 9374. ";


//  Id pregunta: 9665 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un sistema multiprocesador o mainframe:";
 choices[88]= new Array();
 choices[88][0] = "Son soluciones altamente propietarias para entornos no heterog&eacute;neos.";
 choices[88][1] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH.";
 choices[88][2] = "Se paralelizan sistem&aacute;ticamente las tareas y procesos, aprovechando su alto n&uacute;mero de procesadores.";
 choices[88][3] = "En el mercado hay un gran n&uacute;mero de fabricantes de dichos sistemas.";
 answers[88] = choices[88][3];
 units[88] = "45";
 comments[88] = "Id Pregunta: 9665. ";


//  Id pregunta: 9866 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  En relaci&oacute;n con lenguajes de marcado, indique cu&aacute;l de las siguientes afirmaciones es INCORRECTA";
 choices[89]= new Array();
 choices[89][0] = "XSLT es un lenguaje de marcado para las transformaciones de documentos XML.";
 choices[89][1] = "El XML describe el contenido de la informaci&oacute;n y la estructura, mientras que HTML est&aacute; orientado a la presentaci&oacute;n de la informaci&oacute;n.";
 choices[89][2] = "XPath permite buscar y seleccionar parte de un fichero XML sin utilizar su estructura.";
 choices[89][3] = "CSS permite dar formato tanto a ficheros HTML como a ficheros XML.";
 answers[89] = choices[89][2];
 units[89] = "69";
 comments[89] = "Id Pregunta: 9866. TIC A1, Examen 2013";


//  Id pregunta: 9872 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  Atendiendo a la norma ISO/IEC 9126 la calidad del software NO incluye la siguiente caracter&iacute;stica:";
 choices[90]= new Array();
 choices[90][0] = "Portabilidad.";
 choices[90][1] = "Funcionalidad.";
 choices[90][2] = "Usabilidad.";
 choices[90][3] = "Integridad.";
 answers[90] = choices[90][3];
 units[90] = "87";
 comments[90] = "Id Pregunta: 9872. TIC A1, Examen 2013";


//  Id pregunta: 9971 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  En el &aacute;mbito de SAP ERP, un Centro de Coste o CeCo:";
 choices[91]= new Array();
 choices[91][0] = "Es la unidad organizativa, dentro de una sociedad CO, que representa un emplazamiento claramente delimitado donde se producen costes.";
 choices[91][1] = "Corresponde a una posici&oacute;n en el plan de cuentas relevante para el coste.";
 choices[91][2] = "Es el nivel jer&aacute;rquico m&aacute;s alto en el Sistema SAP.";
 choices[91][3] = "Es una lista de todas las cuentas de mayor utilizadas por una o varias sociedades.";
 answers[91] = choices[91][0];
 units[91] = "65";
 comments[91] = "Id Pregunta: 9971. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10044 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al protocolo MPLS (RFC 3031)?";
 choices[92]= new Array();
 choices[92][0] = "LSP (Label Switched Path).";
 choices[92][1] = "LSR (Label Switching Router).";
 choices[92][2] = "FEC (Forwarding Equivalence Class).";
 choices[92][3] = "ILP (Incoming Label Protocol).";
 answers[92] = choices[92][3];
 units[92] = "100";
 comments[92] = "Id Pregunta: 10044. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10047 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Con respecto al campo Data Link Connection Identifier (DLCI) de Frame Relay se&ntilde;ale la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "Debe ser &uacute;nico en toda la red.";
 choices[93][1] = "Tiene una longitud total de 10 bits por defecto.";
 choices[93][2] = "Controla los mecanismos de notificaci&oacute;n de congesti&oacute;n.";
 choices[93][3] = "Los valores 0 a 128 del mismo est&aacute;n reservados para funciones especiales.";
 answers[93] = choices[93][1];
 units[93] = "109";
 comments[93] = "Id Pregunta: 10047. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10164 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;En qu&eacute; consiste la regla de Independencia de Integridad establecida por Codd?";
 choices[94]= new Array();
 choices[94][0] = "Los programas de aplicaci&oacute;n y actividades del terminal permanecer&aacute;n inalterados a nivel l&oacute;gico cuando se realicen cambios sobre las tablas base que preservan la informaci&oacute;n";
 choices[94][1] = "Los limitantes de integridad han de poder ser definidos utilizando el sublenguaje de datos relacional y almacenables en el cat&aacute;logo din&aacute;mico";
 choices[94][2] = "La independencia de integridad requiere la definici&oacute;n de claves ajenas con la opci&oacute;n &quot;CASCADE&quot;, a fin que se propaguen a la clave ajena los cambios realizados sobre la clave primaria referenciada";
 choices[94][3] = "Si en una relaci&oacute;n hay una clave ajena, sus valores deben coincidir con los valores de la clave primaria a que se refiere, o deben ser completamente nulos";
 answers[94] = choices[94][1];
 units[94] = "58";
 comments[94] = "Id Pregunta: 10164. ";


//  Id pregunta: 10211 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Respecto a las alternativas de suministro de equipamiento hardware, &iquest;a qu&eacute; cap&iacute;tulo presupuestario se imputar&iacute;a el arrendamiento de equipos sin opci&oacute;n a compra?";
 choices[95]= new Array();
 choices[95][0] = "Cap&iacute;tulo 1";
 choices[95][1] = "Cap&iacute;tulo 2";
 choices[95][2] = "Cap&iacute;tulo 4";
 choices[95][3] = "Cap&iacute;tulo 6";
 answers[95] = choices[95][1];
 units[95] = "35";
 comments[95] = "Id Pregunta: 10211. ";


//  Id pregunta: 10327 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cual no es un lenguaje de scripting?";
 choices[96]= new Array();
 choices[96][0] = "JScript";
 choices[96][1] = "Node.js";
 choices[96][2] = "Groovy";
 choices[96][3] = "Hack";
 answers[96] = choices[96][1];
 units[96] = "114";
 comments[96] = "Id Pregunta: 10327. Node.js es un entorno de desarrollo, no un lenguaje";


//  Id pregunta: 10473 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Una CRL completa:";
 choices[97]= new Array();
 choices[97][0] = "Lista todos los certificados no expirados emitidos por la CA revocados por cualquier raz&oacute;n.";
 choices[97][1] = "Lista los certificados cuyo estado de revocaci&oacute;n ha cambiado desde la anterior CRL completa.";
 choices[97][2] = "Se emite con la periodicidad definida en la politica de actualizaciones, pero siempre que hayan transcurrido menos de 24 horas desde la &uacute;ltima emisi&oacute;n.";
 choices[97][3] = "Lista todos los certificados no expirados revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[97] = choices[97][3];
 units[97] = "73";
 comments[97] = "Id Pregunta: 10473. ";


//  Id pregunta: 10524 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Qu&eacute; a&ntilde;o establece como objetivo la Estrategia Nacional de Redes Ultrarr&aacute;pidas para que al menos el 50% de los hogares puedan disponer de acceso a servicios de velocidades superiores a 100 Mbps.";
 choices[98]= new Array();
 choices[98][0] = "2016";
 choices[98][1] = "2017";
 choices[98][2] = "2018";
 choices[98][3] = "2020";
 answers[98] = choices[98][3];
 units[98] = "110";
 comments[98] = "Id Pregunta: 10524. ";


//  Id pregunta: 10543 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[99]= new Array();
 choices[99][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[99][1] = "25% de hogares conectados a redes NGA";
 choices[99][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[99][3] = "Todas las anteriores ";
 answers[99] = choices[99][3];
 units[99] = "108";
 comments[99] = "Id Pregunta: 10543. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";


