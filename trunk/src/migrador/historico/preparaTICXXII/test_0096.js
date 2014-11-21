/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 6 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes organismos no corresponde a la estructura organizativa t&eacute;cnica de la normalizaci&oacute;n comunitaria?:";
 choices[0]= new Array();
 choices[0][0] = "ETSI (Instituto Europeo de Normalizaci&oacute;n de Telecomunicaciones)";
 choices[0][1] = "CENELEC (Comit&eacute; Europeo de Electr&oacute;nica)";
 choices[0][2] = "SITAR (Instituto Internacional de Tratamiento de la Informaci&oacute;n)";
 choices[0][3] = "CEPT (Confederaci&oacute;n Europea de Administraciones de Correos y Telecomunicaciones)";
 answers[0] = choices[0][2];
 units[0] = "42";
 comments[0] = "Id Pregunta: 6. ";


//  Id pregunta: 472 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  Una ley de protecci&oacute;n de datos deber&aacute; responder a las siguientes cuestiones, excepto una, &iquest;cu&aacute;l?:";
 choices[1]= new Array();
 choices[1][0] = "&iquest;Qu&eacute; datos pueden ser recogidos?";
 choices[1][1] = "&iquest;C&oacute;mo pueden ser recogidos?";
 choices[1][2] = "&iquest;Cuando pueden ser recogidos?";
 choices[1][3] = "&iquest;Con qu&eacute; fin pueden ser recogidos?";
 answers[1] = choices[1][2];
 units[1] = "29";
 comments[1] = "Id Pregunta: 472. ";


//  Id pregunta: 603 Año de creación de pregunta: 2006-01-01
 questions[2]= "3)  &iquest;La prestaci&oacute;n de servicios por parte de terceros a las Administraciones P&uacute;blicas, cuando implica un tratamiento de datos (Art. 12 LOPD), exige";
 choices[2]= new Array();
 choices[2][0] = "Cumplir lo dispuesto en la Ley de Contratos de las Administraciones P&uacute;blicas";
 choices[2][1] = "Adem&aacute;s de cumplir lo dispuesto en otras leyes, deber&aacute; incorporar los requisitos formales exigibles al encargado del tratamiento";
 choices[2][2] = "Crear una persona jur&iacute;dica distinta sujeto al derecho privado";
 choices[2][3] = "Realizar copias de seguridad de los datos";
 answers[2] = choices[2][1];
 units[2] = "29";
 comments[2] = "Id Pregunta: 603. ";


//  Id pregunta: 755 Año de creación de pregunta: 2004-01-01
 questions[3]= "4)  En Java, respecto a la herencia de clases ...";
 choices[3]= new Array();
 choices[3][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[3][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[3][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[3][3] = "Todas las anteriores son falsas";
 answers[3] = choices[3][3];
 units[3] = "60";
 comments[3] = "Id Pregunta: 755. ";


//  Id pregunta: 1067 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Elija la respuesta falsa respecto de OLAP.";
 choices[4]= new Array();
 choices[4][0] = "Implica el uso de t&eacute;cnicas multidimensionales.";
 choices[4][1] = "Realiza el an&aacute;lisis Offline de los datos.";
 choices[4][2] = "Puede utilizar bases de datos relacionales.";
 choices[4][3] = "Puede presentar vistas de los datos en un numero reducido de dimensiones.";
 answers[4] = choices[4][1];
 units[4] = "68";
 comments[4] = "Id Pregunta: 1067. ";


//  Id pregunta: 1091 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  En el proceso de cifrado basado en el m&eacute;todo DES de criptosistema sim&eacute;trico, en el cu&aacute;l existen n nodos de intercambio de mensajes, &iquest;cu&aacute;ntas claves debe gestionar cada uno de los nodos para comunicarse con el resto?:";
 choices[5]= new Array();
 choices[5][0] = "n";
 choices[5][1] = "n + 1";
 choices[5][2] = "n!";
 choices[5][3] = "Ninguna de las anteriores contestaciones es cierta";
 answers[5] = choices[5][3];
 units[5] = "72";
 comments[5] = "Id Pregunta: 1091. ";


//  Id pregunta: 1124 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  En programaci&oacute;n concurrente, el problema de la exclusi&oacute;n mutua consiste en:";
 choices[6]= new Array();
 choices[6][0] = "2 procesos no pueden estar a la vez en la secci&oacute;n cr&iacute;tica";
 choices[6][1] = "Todo proceso debe de poder entrar en la seccion critica";
 choices[6][2] = "Un proceso de fuera de la secci&oacute;n critica no puede bloquear el acceso a otro";
 choices[6][3] = "Todas son ciertas";
 answers[6] = choices[6][3];
 units[6] = "52";
 comments[6] = "Id Pregunta: 1124. ";


//  Id pregunta: 1156 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  En una unidad de disco magn&eacute;tico, el tiempo de acceso a la informaci&oacute;n viene dado por:";
 choices[7]= new Array();
 choices[7][0] = "El tiempo de latencia";
 choices[7][1] = "El tiempo de b&uacute;squeda m&aacute;s el tiempo de latencia";
 choices[7][2] = "El tiempo de b&uacute;squeda m&aacute;s el tiempo de transferencia";
 choices[7][3] = "La longitud de la pista partido por la velocidad de rotaci&oacute;n m&aacute;s el tiempo de posicionamiento de la cabeza";
 answers[7] = choices[7][1];
 units[7] = "48";
 comments[7] = "Id Pregunta: 1156. ";


//  Id pregunta: 1228 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  La memoria cach&eacute;:";
 choices[8]= new Array();
 choices[8][0] = "Es una memoria auxiliar que se a&ntilde;ade a la memoria principal";
 choices[8][1] = "Es una parte de la memoria principal m&aacute;s r&aacute;pida que el resto";
 choices[8][2] = "No se encarga de realizar la traducci&oacute;n de los identificadores de bloques";
 choices[8][3] = "No disminuye el fallo de p&aacute;ginas";
 answers[8] = choices[8][0];
 units[8] = "47";
 comments[8] = "Id Pregunta: 1228. ";


//  Id pregunta: 1315 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Respecto a la compatibilidad entre Windows y Linux:";
 choices[9]= new Array();
 choices[9][0] = "Windows no puede ejecutarse bajo Linux";
 choices[9][1] = "Linux no puede ejecutarse bajo Windows";
 choices[9][2] = "Ambos pueden ejecutarse simult&aacute;neamente de forma nativa";
 choices[9][3] = "Existen programas que permiten la ejecuci&oacute;n de cada uno de estos sistemas operativos como si fuera un programa embebido en el otro sistema operativo";
 answers[9] = choices[9][3];
 units[9] = "53,55";
 comments[9] = "Id Pregunta: 1315. ";


//  Id pregunta: 1354 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[10]= new Array();
 choices[10][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[10][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[10][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[10][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[10] = choices[10][2];
 units[10] = "70";
 comments[10] = "Id Pregunta: 1354. ";


//  Id pregunta: 1457 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Podr&iacute;a indicar la organizaci&oacute;n que ha desarrollado el est&aacute;ndar &lsquo;motif&rsquo;?:";
 choices[11]= new Array();
 choices[11][0] = "Sun Microsystems";
 choices[11][1] = "OSF (Open Group)";
 choices[11][2] = "Departamento de Defensa de EE.UU.";
 choices[11][3] = "MIT (Massachusets Institute of Technology)";
 answers[11] = choices[11][1];
 units[11] = "54";
 comments[11] = "Id Pregunta: 1457. ";


//  Id pregunta: 1513 Año de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest;Qui&eacute;n puede relizar servicios de certificaci&oacute;n?";
 choices[12]= new Array();
 choices[12][0] = "Una persona f&iacute;sica";
 choices[12][1] = "Una persona jur&iacute;dica";
 choices[12][2] = "Ambas";
 choices[12][3] = "S&oacute;lo el Estado";
 answers[12] = choices[12][2];
 units[12] = "30";
 comments[12] = "Id Pregunta: 1513. ";


//  Id pregunta: 1525 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  Dentro de las t&eacute;cnicas de representaci&oacute;n del conocimiento indicar a que modelo pertenecen los algoritmos gen&eacute;ticos";
 choices[13]= new Array();
 choices[13][0] = "Modelo Simb&oacute;lico";
 choices[13][1] = " Modelo de conocimiento profundo";
 choices[13][2] = " Modelo Param&eacute;trico";
 choices[13][3] = "Razonamiento multinivel";
 answers[13] = choices[13][2];
 units[13] = "64";
 comments[13] = "Id Pregunta: 1525. ";


//  Id pregunta: 1629 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  Sobre el entorno WINE de Linux se puede decir que:";
 choices[14]= new Array();
 choices[14][0] = "Es un emulador de Windows";
 choices[14][1] = "Es una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[14][2] = "Permite ejecutar todas las aplicaciones de Windows 32 sobre Linux";
 choices[14][3] = "Es un sistema de gesti&oacute;n de ventanas para Linux con la apariencia de Windows";
 answers[14] = choices[14][1];
 units[14] = "62";
 comments[14] = "Id Pregunta: 1629. ";


//  Id pregunta: 1687 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  Si comparamos una base de datos relacional y otra multidimensional, es FALSO que:";
 choices[15]= new Array();
 choices[15][0] = "Las BDR son mejores que las BDM para obtener vistas de unos datos en funci&oacute;n de otros.";
 choices[15][1] = "Las BDR est&aacute;n optimizadas para la inserci&oacute;n de registros y el control concurrente de usuarios.";
 choices[15][2] = "Las BDM tienen informaci&oacute;n m&aacute;s consistente que las BDR.";
 choices[15][3] = "Las BDM son mejores para el estudio a alto nivel de los datos, ya que ofrecen mayor flexibilidad y rapidez de acceso para el &aacute;nalisis de los mismos.";
 answers[15] = choices[15][0];
 units[15] = "68";
 comments[15] = "Id Pregunta: 1687. ";


//  Id pregunta: 1705 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  En lo referente a PDAs:";
 choices[16]= new Array();
 choices[16][0] = "Responden a las siglas &quot;Personal Digital Agendas&quot;";
 choices[16][1] = "Tambi&eacute;n son conocidos por agendas electr&oacute;nicas o palmtops";
 choices[16][2] = "En lugar de teclado, utilizan un l&aacute;piz y un reconocedor de caracteres";
 choices[16][3] = "Pueden usarse como tel&eacute;fonos, pero no pueden mandar un fax";
 answers[16] = choices[16][1];
 units[16] = "47";
 comments[16] = "Id Pregunta: 1705. ";


//  Id pregunta: 1720 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  A qu&eacute; corresponde el est&aacute;ndar POSIX 1003.7";
 choices[17]= new Array();
 choices[17][0] = "Int&eacute;rprete y comandos";
 choices[17][1] = "Lenguaje Ada";
 choices[17][2] = "Administraci&oacute;n del sistema";
 choices[17][3] = "Procedimientos de biblioteca";
 answers[17] = choices[17][2];
 units[17] = "53";
 comments[17] = "Id Pregunta: 1720. ";


//  Id pregunta: 1759 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  En el entorno Microsoft.NET:";
 choices[18]= new Array();
 choices[18][0] = "MS SQL Server CompactEs una base datos empotrada, adaptada a aplicaciones m&oacute;viles u ocasionalmente conectadas.";
 choices[18][1] = "MS Web Deploy 3.0Es una herramienta para despliegue, gesti&oacute;n y migraci&oacute;on de aplicaciones complejas distribuidas compuestas por m&uacute;ltiples sitios, servidores o aplicaciones web.";
 choices[18][2] = "BizTalk ServerEs un ESB que permite la automatizacion de procesos de negocio, comunicando diferentes sistemas mediante mensajes en XML.";
 choices[18][3] = "Todas son correctas";
 answers[18] = choices[18][3];
 units[18] = "59";
 comments[18] = "Id Pregunta: 1759. ";


//  Id pregunta: 2042 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  Los tipos de riesgos potenciales de un proyecto que considera el PGGC del CSAE son:";
 choices[19]= new Array();
 choices[19][0] = "Cinco";
 choices[19][1] = "Siete";
 choices[19][2] = "Tres";
 choices[19][3] = "Seis";
 answers[19] = choices[19][1];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2042. ";


//  Id pregunta: 2093 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  El par&aacute;metro m&aacute;s importante de un sistema en tiempo real es:";
 choices[20]= new Array();
 choices[20][0] = "La tasa de errores.";
 choices[20][1] = "El jitter.";
 choices[20][2] = "El retardo m&aacute;ximo.";
 choices[20][3] = "La velocidad de transmisi&oacute;n.";
 answers[20] = choices[20][2];
 units[20] = "83";
 comments[20] = "Id Pregunta: 2093. ";


//  Id pregunta: 2107 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[21]= new Array();
 choices[21][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[21][1] = "El responsable de mantenimiento y el jefe de proyecto";
 choices[21][2] = "El equipo de mantenimiento y el jefe de proyecto ";
 choices[21][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios";
 answers[21] = choices[21][2];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2107. Pregunta Junta Andalucia - A";


//  Id pregunta: 2157 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes nombres no se corresponde con el de una metodolog&iacute;a de desarrollo de equipos l&oacute;gicos?:";
 choices[22]= new Array();
 choices[22][0] = "MERISE";
 choices[22][1] = "SSADM";
 choices[22][2] = "SDM";
 choices[22][3] = "METHOD-1";
 answers[22] = choices[22][3];
 units[22] = "79";
 comments[22] = "Id Pregunta: 2157. ";


//  Id pregunta: 2232 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Al esfuerzo requerido para ense&ntilde;ar, explotar, prepara las entradas e interpretar las salidas de un programa se llama:";
 choices[23]= new Array();
 choices[23][0] = "Usabilidad";
 choices[23][1] = "Mantenibilidad";
 choices[23][2] = "Verificabilidad";
 choices[23][3] = "Flexibilidad";
 answers[23] = choices[23][0];
 units[23] = "88";
 comments[23] = "Id Pregunta: 2232. ";


//  Id pregunta: 2735 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  Un buen analista debe exhibir los siguientes rasgos de car&aacute;cter";
 choices[24]= new Array();
 choices[24][0] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[24][1] = "Capacidad de s&iacute;ntesis de los problemas";
 choices[24][2] = "Capacidad de comprensi&oacute;n de conceptos abstractos, reorganizaci&oacute;n en apartados l&oacute;gicos y s&iacute;ntesis de soluciones para cada apartado";
 choices[24][3] = "Todas las anteriores";
 answers[24] = choices[24][3];
 units[24] = "78";
 comments[24] = "Id Pregunta: 2735. ";


//  Id pregunta: 2984 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  Los bridges:";
 choices[25]= new Array();
 choices[25][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[25][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[25][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[25][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles superiores";
 answers[25] = choices[25][3];
 units[25] = "102";
 comments[25] = "Id Pregunta: 2984. ";


//  Id pregunta: 3057 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Dentro del objeto APPLICATION no pueden almacenarse:";
 choices[26]= new Array();
 choices[26][0] = "Variables simples de car&aacute;cter global";
 choices[26][1] = "Variables espec&iacute;ficas para cada usuario que accede al Web";
 choices[26][2] = "Arrays accesibles a todos los usuarios que est&eacute;n ejecutando la aplicaci&oacute;n de una o m&aacute;s dimensiones ";
 choices[26][3] = "Referencias de variables globales que apuntan a instancias de un objeto COM";
 answers[26] = choices[26][1];
 units[26] = "115";
 comments[26] = "Id Pregunta: 3057. ";


//  Id pregunta: 3302 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Qu&eacute; &oacute;rbita es la m&aacute;s ventajosa para una operadora de telecomunicaciones en t&eacute;rminos de coste a la hora de poner un nuevo sat&eacute;lite?:";
 choices[27]= new Array();
 choices[27][0] = "La el&iacute;ptica";
 choices[27][1] = "La circular";
 choices[27][2] = "La ovoide";
 choices[27][3] = "La geoestacionaria";
 answers[27] = choices[27][3];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3302. ";


//  Id pregunta: 3309 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Qu&eacute; se entiende por &quot;punto de sincronizaci&oacute;n principal&quot;?:";
 choices[28]= new Array();
 choices[28][0] = "En el nivel de red, se trata de nodos de cada subred encargados de sincronizar las comunicaciones que pasan por ellos";
 choices[28][1] = "En el nivel de enlace, son lugares de acceso a primitivas de servicio para control de flujo";
 choices[28][2] = "En el nivel de transporte, son puntos de sincronizaci&oacute;n de inicio y fin de una conexi&oacute;n";
 choices[28][3] = "En el nivel de sesi&oacute;n, son puntos que estructuran la transferencia de datos dividi&eacute;ndola en unidades de di&aacute;logo separadas";
 answers[28] = choices[28][3];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3309. ";


//  Id pregunta: 3381 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  El m&eacute;todo de Okumura-Hata se usa para:";
 choices[29]= new Array();
 choices[29][0] = "Resoluci&oacute;n de conflictos en negociaciones cuando los contendientes no desean verse en persona";
 choices[29][1] = "Calcular el coste de aplicaci&oacute;n de una u otra estrategia de adquisici&oacute;n de bienes y servicios inform&aacute;ticos y de telecomunicaci&oacute;n";
 choices[29][2] = "C&aacute;lculo de coberturas en enlaces radioel&eacute;ctricos";
 choices[29][3] = "No existe el m&eacute;todo de Okumura-Hata";
 answers[29] = choices[29][2];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3381. ";


//  Id pregunta: 3479 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  El tipo de formato de clase C de direcci&oacute;n IP se emplea mayoritariamente para:";
 choices[30]= new Array();
 choices[30][0] = "Las redes de &aacute;rea local";
 choices[30][1] = "Grandes organizaciones p&uacute;blicas y multinacionales que poseen gran n&uacute;mero de subredes";
 choices[30][2] = "Mensajes de difusi&oacute;n m&uacute;ltiple (multicast)";
 choices[30][3] = "Fines experimentales";
 answers[30] = choices[30][0];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3479. ";


//  Id pregunta: 3512 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  En el protocolo IPv6, el tama&ntilde;o maximo de trama es de:";
 choices[31]= new Array();
 choices[31][0] = "65535 Bytes";
 choices[31][1] = "Depende del campo 'Payload'";
 choices[31][2] = "No hay tama&ntilde;o m&aacute;ximo de trama en IPv6";
 choices[31][3] = "Depende de la versi&oacute;n utilizada";
 answers[31] = choices[31][0];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3512. ";


//  Id pregunta: 3593 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  La conocida RFC 793 se corresponde con:";
 choices[32]= new Array();
 choices[32][0] = "el protocolo TCP";
 choices[32][1] = "la arquitectura TCP/IP";
 choices[32][2] = "el protocolo IP";
 choices[32][3] = "el protocolo SMTP";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3593. ";


//  Id pregunta: 3686 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  La 'velocidad' seg&uacute;n demanda es propia de la t&eacute;cnica:";
 choices[33]= new Array();
 choices[33][0] = "ATM (Asynchronous Transfer Mode)";
 choices[33][1] = "STM (Synchronous Transfer Mode)";
 choices[33][2] = "ATM y STM";
 choices[33][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[33] = choices[33][0];
 units[33] = "109";
 comments[33] = "Id Pregunta: 3686. ";


//  Id pregunta: 3838 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Sobre los algoritmos de encaminamiento utilizados por los &ldquo;routers&rdquo;, indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[34]= new Array();
 choices[34][0] = "Mediante los algoritmos de estados de enlaces cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminamiento completa a todos los dem&aacute;s &ldquo;routers&rdquo; en la red al producirse cualquier cambio en la tabla. As&iacute; act&uacute;a el protocolo OSPF";
 choices[34][1] = "Mediante los algoritmos de vector distancia (tambi&eacute;n conocidos como algoritmos Bellman-Ford) cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminado completa s&oacute;lo a los &ldquo;routers&rdquo; vecinos a intervalos regulares.  As&iacute; act&uacute;a el protocolo RIP";
 choices[34][2] = "Mediante los algoritmos de estados de enlaces (tambi&eacute;n conocidos como &ldquo;shortest path first&rdquo;) cada &ldquo;router&rdquo; env&iacute;a determinada informacion relativa al estado de sus enlaces a los demas routers lo que les permite construir una vision tolpologica de la red ";
 choices[34][3] = "Los algoritmos de estados de enlaces son menos propensos a provocar un bucle de encaminamiento, ya que convergen (determinan el encaminamiento &oacute;ptimo) m&aacute;s r&aacute;pidamente";
 answers[34] = choices[34][0];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3838. ";


//  Id pregunta: 3939 Año de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Qu&eacute; influy&oacute; en el origen de XML?";
 choices[35]= new Array();
 choices[35][0] = "SGML y SOAP";
 choices[35][1] = "SGML";
 choices[35][2] = "SGML y HTTP";
 choices[35][3] = "http y SGML";
 answers[35] = choices[35][1];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3939. ";


//  Id pregunta: 4113 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre NFS:";
 choices[36]= new Array();
 choices[36][0] = "NFS es un sistema de archivos distribuido para un entorno de red de &aacute;rea local.";
 choices[36][1] = "Permite acceder a ficheros remotos como si fueran ficheros del sistema local siempre que se est&eacute; dentro de la misma red de &aacute;rea local.";
 choices[36][2] = "Originalmente fue desarrollado por Sun Microsystems.";
 choices[36][3] = "Todas las anteriores son ciertas.";
 answers[36] = choices[36][3];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4113. ";


//  Id pregunta: 4114 Año de creación de pregunta: 2006-01-01
 questions[37]= "38)  Sobre los buscadores en Internet se&ntilde;ale la respuesta correcta:";
 choices[37]= new Array();
 choices[37][0] = "Los buscadores de &iacute;ndices tem&aacute;ticos son sistemas de b&uacute;squeda que incorporan autom&aacute;ticamente p&aacute;ginas web clasificadas por temas.";
 choices[37][1] = "Los motores de b&uacute;squeda utilizan &ldquo;robots&rdquo; de b&uacute;squeda para incluir las p&aacute;ginas web.";
 choices[37][2] = "a) y b) son falsas";
 choices[37][3] = "a) y b) son verdaderas";
 answers[37] = choices[37][1];
 units[37] = "112";
 comments[37] = "Id Pregunta: 4114. ";


//  Id pregunta: 4165 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  Cuando las tareas de operaci&oacute;n y programaci&oacute;n no est&aacute;n segregadas, el responsable de seguridad debe de proveer controles";
 choices[38]= new Array();
 choices[38][0] = "compensatorios";
 choices[38][1] = "administrativos";
 choices[38][2] = "correctivos";
 choices[38][3] = "de acceso";
 answers[38] = choices[38][0];
 units[38] = "111";
 comments[38] = "Id Pregunta: 4165. ";


//  Id pregunta: 4218 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  Las redes integradas de Datos y Voz se definen en el grupo de trabajo del IEEE";
 choices[39]= new Array();
 choices[39][0] = "802.9";
 choices[39][1] = "802.10";
 choices[39][2] = "802.11";
 choices[39][3] = "802.12";
 answers[39] = choices[39][0];
 units[39] = "101";
 comments[39] = "Id Pregunta: 4218. ";


//  Id pregunta: 4264 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  Respecto del Marco Europeo de Interoperabilidad (MEI), es falsa la afirmacion:";
 choices[40]= new Array();
 choices[40][0] = "Las dimensiones de interoperabilidad son tres: t&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[40][1] = "Define como principios  entre otros la subsidiariedad, uso de soluciones multilaterales y uso de est&aacute;ndares abiertos";
 choices[40][2] = "Se elabora dentro del programa IDABC";
 choices[40][3] = "Define un total de diez principios";
 answers[40] = choices[40][3];
 units[40] = "30";
 comments[40] = "Id Pregunta: 4264. ";


//  Id pregunta: 4302 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Una vez obtenido el Diagrama de Flujo de Datos y el Modelo L&oacute;gico Normalizado, se debe comprobar que:";
 choices[41]= new Array();
 choices[41][0] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una y s&oacute;lo una entidad del Modelo L&oacute;gico Normalizado";
 choices[41][1] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una o varias entidades del Modelo L&oacute;gico Normalizado";
 choices[41][2] = "Cada entidad del Modelo L&oacute;gico Normalizado se corresponde con uno o varios almacenes del Diagrama de Flujo de Datos";
 choices[41][3] = "Cada flujo del Diagrama de Flujo de Datos se almacena en una o varias entidades del Modelo L&oacute;gico Normalizado.";
 answers[41] = choices[41][1];
 units[41] = "81";
 comments[41] = "Id Pregunta: 4302. ";


//  Id pregunta: 4346 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  Cu&aacute;l es la longitud de la clave utilizada por el sistema criptogr&aacute;fico sim&eacute;trico DES?";
 choices[42]= new Array();
 choices[42][0] = "56 Bits";
 choices[42][1] = "168 Bits";
 choices[42][2] = "256 Bits.";
 choices[42][3] = "Puede ser cualquiera, pero la habitual es 1.024 Bits.";
 answers[42] = choices[42][0];
 units[42] = "73";
 comments[42] = "Id Pregunta: 4346. ";


//  Id pregunta: 4533 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  En java, &iquest;como se hace referencia al objeto actual sobre el que ha sido Ilamado el m&eacute;todo que se esta ejecutando?";
 choices[43]= new Array();
 choices[43][0] = "Con Ia referencia this.";
 choices[43][1] = "Con la referencia null.";
 choices[43][2] = "No es posible.";
 choices[43][3] = "Invocando el m&eacute;todo get.";
 answers[43] = choices[43][0];
 units[43] = "60";
 comments[43] = "Id Pregunta: 4533. ";


//  Id pregunta: 4622 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indique cual de las siguientes es una herramienta de e-learning: ";
 choices[44]= new Array();
 choices[44][0] = "Kerberos";
 choices[44][1] = "WebCT";
 choices[44][2] = "Kagera";
 choices[44][3] = "Tuxedo";
 answers[44] = choices[44][1];
 units[44] = "66";
 comments[44] = "Id Pregunta: 4622. ";


//  Id pregunta: 4680 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  La API JDBC se utiliza:";
 choices[45]= new Array();
 choices[45][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n sepueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones quesoporta un SGBD relacional.";
 choices[45][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional";
 choices[45][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas aprocedimientos almacenados no est&aacute;n soportados.";
 choices[45][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas delas funciones que soporta un SGBD relacional.";
 answers[45] = choices[45][0];
 units[45] = "60";
 comments[45] = "Id Pregunta: 4680. Examen 2006 JCYL";


//  Id pregunta: 4734 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  A la hora de poner en producci&oacute;n un servicio";
 choices[46]= new Array();
 choices[46][0] = "Conviene realizar las pruebas una vez est&eacute; el servicio en el entorno de producci&oacute;n";
 choices[46][1] = "Conviene realizar las pruebas en el entorno de preexplotaci&oacute;n";
 choices[46][2] = "Conviene realizar las pruebas en el entorno de desarrollo, ya que el entorno de preexplotaci&oacute;n son pruebas de integraci&oacute;n y rendimiento";
 choices[46][3] = "Conviene realizar pruebas modulares en el entorno de preexplotaci&oacute;n, y las restantes en el entorno de producci&oacute;n, junto a los usuarios";
 answers[46] = choices[46][1];
 units[46] = "86";
 comments[46] = "Id Pregunta: 4734. Examen 2006 JCYL";


//  Id pregunta: 4761 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Indicar la afirmaci&oacute;n incorrecta relativa a COBIT:";
 choices[47]= new Array();
 choices[47][0] = "Un dominio es una agrupaci&oacute;n natural de procesos";
 choices[47][1] = "Un proceso es una agrupaci&oacute;n natural de dominios";
 choices[47][2] = "Un proceso es un conjunto o serie de actividades unidas con delimitaci&oacute;n o cortes de control";
 choices[47][3] = "Las actividades son acciones requeridas para lograr un resultado";
 answers[47] = choices[47][1];
 units[47] = "98";
 comments[47] = "Id Pregunta: 4761. ";


//  Id pregunta: 4831 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes es una m&eacute;trica de productividad en la generaci&oacute;n de software seg&uacute;n Pressman?";
 choices[48]= new Array();
 choices[48][0] = "N&uacute;meros de defectos por miles de l&iacute;neas de c&oacute;digo";
 choices[48][1] = "Tiempo medio de cambio";
 choices[48][2] = "Puntos de funci&oacute;n";
 choices[48][3] = "N&uacute;mero de p&eacute;rdidas de integridad";
 answers[48] = choices[48][2];
 units[48] = "89";
 comments[48] = "Id Pregunta: 4831. preparatic XVII";


//  Id pregunta: 4962 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes es un comando de monitorizaci&oacute;n Unix (procesos que se est&aacute;n ejecutando y recursos que se utilizan)?:";
 choices[49]= new Array();
 choices[49][0] = "mount.";
 choices[49][1] = "chmod.";
 choices[49][2] = "top.";
 choices[49][3] = "dd.";
 answers[49] = choices[49][2];
 units[49] = "54";
 comments[49] = "Id Pregunta: 4962. Examen TIC B 2007";


//  Id pregunta: 5013 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes elementos NO interviene en el c&aacute;lculo de los puntos de funci&oacute;n?:";
 choices[50]= new Array();
 choices[50][0] = "Entradas";
 choices[50][1] = "Salidas";
 choices[50][2] = "Consultas";
 choices[50][3] = "Usuarios";
 answers[50] = choices[50][3];
 units[50] = "89";
 comments[50] = "Id Pregunta: 5013. Examen TIC A 2007, preparatic XVII";


//  Id pregunta: 5023 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ITIL (Information Technology Infrastructure Library) es cierta?";
 choices[51]= new Array();
 choices[51][0] = "ITIL es una Biblioteca de Infraestructura de Tecnolog&iacute;as de la Informaci&oacute;n que se ha convertido en elest&aacute;ndar mundial de facto en la Gesti&oacute;n de Servicios Inform&aacute;ticos.";
 choices[51][1] = "ITIL es una iniciativa de la Comisi&oacute;n Europea cuyo objetivo es la elaboraci&oacute;n de una definici&oacute;n de laestructura organizacional de una organizaci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n";
 choices[51][2] = "La fundaci&oacute;n holandesa &quot;Exameninstituut voor Informatica&quot; (EXIN) y la inglesa &quot;Information SystemsExamination Board&quot; (ISEB) han desarrollado juntas la &uacute;ltima versi&oacute;n de ITIL";
 choices[51][3] = "ITIL es una metodolog&iacute;a para la Gesti&oacute;n de Servicios Inform&aacute;ticos que no tiene aplicaci&oacute;n en laAdministraci&oacute;n P&uacute;blica";
 answers[51] = choices[51][0];
 units[51] = "98";
 comments[51] = "Id Pregunta: 5023. Examen TIC A 2007";


//  Id pregunta: 5106 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  Cuando en una empresa la forma de desarrollar proyectos (gesti&oacute;n e ingenier&iacute;a) est&aacute; definida, es decir, que est&aacute; establecida, documentada y que existen m&eacute;tricas (obtenci&oacute;n de datos objetivos) para la consecuci&oacute;n de objetivos concretos, seg&uacute;n CMMI est&aacute;:";
 choices[52]= new Array();
 choices[52][0] = "Nivel 1";
 choices[52][1] = "Nivel 2";
 choices[52][2] = "Nivel 3";
 choices[52][3] = "Nivel 4";
 answers[52] = choices[52][2];
 units[52] = "92";
 comments[52] = "Id Pregunta: 5106. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5154 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;les son los componentes primordiales de .NET Framework?";
 choices[53]= new Array();
 choices[53][0] = "ASP.net y ADO.net";
 choices[53][1] = "Common Language Runtime (CLR) y Clases Framework";
 choices[53][2] = "Common Language Specification (CLS) y Polimorfismo.";
 choices[53][3] = "Hypertext Markup Language (HTML) y Unified Modeling Language (UML)";
 answers[53] = choices[53][1];
 units[53] = "115";
 comments[53] = "Id Pregunta: 5154. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5182 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  En el modelo E/R, las entidades d&eacute;biles:";
 choices[54]= new Array();
 choices[54][0] = "Dependen de la existencia de otro tipo de entidad";
 choices[54][1] = "S&oacute;lo pueden tener un &uacute;nico atributo de clave propio";
 choices[54][2] = "Tienen atributos de clave propios, pero coinciden con los de la entidad fuerte de la que dependen";
 choices[54][3] = "Se representan mediante un rect&aacute;ngulo de trazo discontinuo";
 answers[54] = choices[54][0];
 units[54] = "80";
 comments[54] = "Id Pregunta: 5182. ";


//  Id pregunta: 5254 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique cu&aacute;l de las siguientes opciones describe el nivel 2 del modelo CMM";
 choices[55]= new Array();
 choices[55][0] = "No se han definido procesos metodol&oacute;gicos, o si se han definido no se siguen";
 choices[55][1] = "El proceso de software est&aacute; documentado, homogeneizado e integrado en un proceso de software est&aacute;ndar dentro de la organizaci&oacute;n";
 choices[55][2] = "Se establecen pol&iacute;ticas y procedimientos de administraci&oacute;n e implantaci&oacute;n del modelo b&aacute;sico para determinar costos, calendarios y funcionalidades";
 choices[55][3] = "Se recolectan medidas detalladas del proceso de software y de la calidad del producto Ambos son cuantitativamente entendidos y controlados.";
 answers[55] = choices[55][2];
 units[55] = "87";
 comments[55] = "Id Pregunta: 5254. ";


//  Id pregunta: 5284 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indique cu&aacute;l de las siguientes opciones no se relaciona con un desarrollo JAVA: ";
 choices[56]= new Array();
 choices[56][0] = "Hibernate";
 choices[56][1] = "Biztalk";
 choices[56][2] = "Java Server Faces";
 choices[56][3] = "Spring";
 answers[56] = choices[56][1];
 units[56] = "116";
 comments[56] = "Id Pregunta: 5284. ";


//  Id pregunta: 5723 Año de creación de pregunta: 2009-01-01
 questions[57]= "58)  Elija la opci&oacute;n correcta:";
 choices[57]= new Array();
 choices[57][0] = "Un documento XML v&aacute;lido es aqu&eacute;l que tiene una sintaxis XML v&aacute;lida.";
 choices[57][1] = "Un documento XML v&aacute;lido es aqu&eacute;l que cumple las reglas de un DTD.";
 choices[57][2] = "Un documento XML v&aacute;lido es aqu&eacute;l que est&aacute; bien formado y tambi&eacute;n cumple con las reglas de un DTD";
 choices[57][3] = "Un documento XML bien formado es aqu&eacute;l que cumple las reglas de un DTD";
 answers[57] = choices[57][2];
 units[57] = "69";
 comments[57] = "Id Pregunta: 5723. MAP 2008 A2";


//  Id pregunta: 5740 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Puede haber firma electr&oacute;nica reconocidad que no sea avanzada?";
 choices[58]= new Array();
 choices[58][0] = "S&iacute;, si el dispositivo de creaci&oacute;n de firma es seguro";
 choices[58][1] = "S&iacute;, si se usa un certificado reconocido";
 choices[58][2] = "No, en ning&uacute;n caso";
 choices[58][3] = "S&iacute;, si lo aceptan ambas partes";
 answers[58] = choices[58][2];
 units[58] = "30";
 comments[58] = "Id Pregunta: 5740. ";


//  Id pregunta: 5748 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[59]= new Array();
 choices[59][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[59][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[59][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[59][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[59] = choices[59][1];
 units[59] = "74";
 comments[59] = "Id Pregunta: 5748. ";


//  Id pregunta: 5837 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &quot;Manifiesto &Aacute;gil&quot; (Manifiesto por elDesarrollo &Aacute;gil de Software)?";
 choices[60]= new Array();
 choices[60][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas";
 choices[60][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los periodos m&aacute;s cortos posibles";
 choices[60][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se auto organizan";
 choices[60][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara";
 answers[60] = choices[60][0];
 units[60] = "79";
 comments[60] = "Id Pregunta: 5837. MAP 2008 A1";


//  Id pregunta: 5957 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Red SARA?";
 choices[61]= new Array();
 choices[61][0] = "Fiabilidad, porque dispone de un Centro de Soporte 24 x 7";
 choices[61][1] = "Seguridad, fundamentalmente por el establecimiento de VPNs";
 choices[61][2] = "Calidad de Servicio (QoS) (porque se basa en tecnolog&iacute;a VPLS)";
 choices[61][3] = "Flexibilidad, proporcionada por una pol&iacute;tica de gesti&oacute;n descentralizada";
 answers[61] = choices[61][3];
 units[61] = "44";
 comments[61] = "Id Pregunta: 5957. ";


//  Id pregunta: 6045 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  En relaci&oacute;n con el Single Sign On";
 choices[62]= new Array();
 choices[62][0] = "Los sistemas Web Single Sign On utilizan 'cookies' para reconocer a los usuarios y su estado de autenticaci&oacute;n";
 choices[62][1] = "Los usuarios de los sistemas SSO mediante Kerberos reciben un 'ticket' al registrarse que luego se presenta en las aplicaciones cliente";
 choices[62][2] = "Las dos respuestas anteriores son correctas";
 choices[62][3] = "Todas las respuestas anteriores son incorrectas";
 answers[62] = choices[62][2];
 units[62] = "118";
 comments[62] = "Id Pregunta: 6045. ";


//  Id pregunta: 6136 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Dado un CAU de tres niveles, &iquest;d&oacute;nde ubicar&iacute;a en el proceso de soporte al personal inform&aacute;tico de un centro perif&eacute;rico?";
 choices[63]= new Array();
 choices[63][0] = "Entre el primer nivel (CAU) y el segundo nivel (otras &aacute;reas del centro TIC)";
 choices[63][1] = "Entre el segundo nivel (otras &aacute;reas del centro TIC) y el tercer nivel (proveedores y empresas de mantenimiento)";
 choices[63][2] = "Como &lsquo;nivel 0&rsquo;, atendiendo todas las incidencias del centro perif&eacute;rico y escal&aacute;ndolas al nivel 1 (CAU)";
 choices[63][3] = "Fuera del proceso de soporte, habr&iacute;a que reubicar al personal en otras tareas";
 answers[63] = choices[63][0];
 units[63] = "26";
 comments[63] = "Id Pregunta: 6136. ";


//  Id pregunta: 6155 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;C&oacute;mo fue renombrado el protocolo SMB por Microsoft?";
 choices[64]= new Array();
 choices[64][0] = "SAMBA";
 choices[64][1] = "CIFS";
 choices[64][2] = "MSRPC";
 choices[64][3] = "Ninguna de las anteriores.";
 answers[64] = choices[64][1];
 units[64] = "112";
 comments[64] = "Id Pregunta: 6155. ";


//  Id pregunta: 6167 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes sistemas de informaci&oacute;n esta asociado con el nivel operacional?";
 choices[65]= new Array();
 choices[65][0] = "Executive Information System (E.I.S.)";
 choices[65][1] = "Management Information System (M.I.S.)";
 choices[65][2] = "Transaction Processing System (T.P.S.)";
 choices[65][3] = "Enterprise Resource Planning Solution (E.R.P.)";
 answers[65] = choices[65][2];
 units[65] = "21";
 comments[65] = "Id Pregunta: 6167. ";


//  Id pregunta: 6236 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;C&oacute;mo se denominan las interfaces de servicio de la implementaci&oacute;n del servicio de directorio de Microsoft en una red distribuida de computadores?";
 choices[66]= new Array();
 choices[66][0] = "ADSI";
 choices[66][1] = "LDAP";
 choices[66][2] = "AD";
 choices[66][3] = "ADIS";
 answers[66] = choices[66][0];
 units[66] = "115";
 comments[66] = "Id Pregunta: 6236. ";


//  Id pregunta: 6266 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Cu&aacute;l de las siguientes afirmaciones es falsa en lo que al &ldquo;informe final de una auditor&iacute;a&rdquo; se refiere:";
 choices[67]= new Array();
 choices[67][0] = "Si el informe es muy extenso, ser&iacute;a conveniente redactar un resumen ejecutivo.";
 choices[67][1] = "Es conveniente que el informe est&eacute; perfectamente indexado con, al menos, tres apartados en funci&oacute;n de a qui&eacute;n vaya dirigido (director de sistemas, equipo t&eacute;cnico de sistemas, equipo de calidad y auditor&iacute;a).";
 choices[67][2] = "El esquema t&iacute;pico de un informe de auditor&iacute;a contendr&iacute;a entre otros los siguientes apartados: introducci&oacute;n, objetivos, metodolog&iacute;a y resultados.";
 choices[67][3] = "Un elemento sustancial para asegurar la calidad del informe y que &eacute;ste sea completo y objetivo es conseguir que los responsables de la actividad realicen una revisi&oacute;n del borrador del informe y formulen las alegaciones y comentarios que consideren oportunos.";
 answers[67] = choices[67][1];
 units[67] = "31";
 comments[67] = "Id Pregunta: 6266. ";


//  Id pregunta: 6355 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Cuando el Regristro de Operadores constate que la notificaci&oacute;n, de un interesado en la explotaci&oacute;n de una determinada red o en la prestaci&oacute;n de un determinado serviciode comunicaciones electr&oacute;nicas, no re&uacute;ne los requisitos, dictar&aacute; resoluci&oacute;n motivada en un plazo m&aacute;ximo de:";
 choices[68]= new Array();
 choices[68][0] = "1 mes";
 choices[68][1] = "10 d&iacute;as";
 choices[68][2] = "15 d&iacute;as";
 choices[68][3] = "2 meses";
 answers[68] = choices[68][2];
 units[68] = "110";
 comments[68] = "Id Pregunta: 6355. Art&iacute;culo 7 Ley 9/2014";


//  Id pregunta: 6365 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  El Esquema Nacional de Seguridad establece que las l&iacute;neas de defensa han de estar constituidas por medidas de distinto tipo, &iquest;Cu&aacute;l de las siguientes no es una de ellos?";
 choices[69]= new Array();
 choices[69][0] = "Organizativa";
 choices[69][1] = "Sem&aacute;ntica";
 choices[69][2] = "L&oacute;gica";
 choices[69][3] = "F&iacute;sica";
 answers[69] = choices[69][1];
 units[69] = "43";
 comments[69] = "Id Pregunta: 6365. Art&iacute;culo 8 ENS";


//  Id pregunta: 6380 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  En el Esquema Nacional de Interoperabilidad, se establece que los sistemas o aplicaciones implicados en la provisi&oacute;n de un servicio p&uacute;blico por v&iacute;a electr&oacute;nica se sincronizar&aacute;n con la hora oficial de:";
 choices[70]= new Array();
 choices[70][0] = "El reloj de la Puerta del Sol";
 choices[70][1] = "El Instituto Europeo de Medici&oacute;n Horaria";
 choices[70][2] = "La Agencia Espa&ntilde;ola de Meteorologia";
 choices[70][3] = "El Real Instituto y Observatorio de la Armada";
 answers[70] = choices[70][3];
 units[70] = "43";
 comments[70] = "Id Pregunta: 6380. Art&iacute;culo 15 ENI";


//  Id pregunta: 6445 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  La organizaci&oacute;n intergubernamental cuyo objetivo es coordinar el desarrollo y operabilidad de las redes y servicios de telecomunicaciones, se denomina:";
 choices[71]= new Array();
 choices[71][0] = "ITU";
 choices[71][1] = "IEC";
 choices[71][2] = "ETSI";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][0];
 units[71] = "42";
 comments[71] = "Id Pregunta: 6445. Castilla La Mancha 2009";


//  Id pregunta: 6479 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  El dispositivo que permite la interconexi&oacute;n de redes LAN y que trabaja en el nivel 2 del modelo OSI se denomina";
 choices[72]= new Array();
 choices[72][0] = "Repetidor";
 choices[72][1] = "Puente (bridge)";
 choices[72][2] = "Pasarela (gateway)";
 choices[72][3] = "Encaminador (router)";
 answers[72] = choices[72][1];
 units[72] = "102";
 comments[72] = "Id Pregunta: 6479. Castilla La Mancha 2009";


//  Id pregunta: 6538 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  En relaci&oacute;n a las t&eacute;cnicas de control de acceso";
 choices[73]= new Array();
 choices[73][0] = "DAC permite a los propietarios de los datos elegir los sujetos que tienen acceso a los mismos";
 choices[73][1] = "MAC usa un sistema de etiquetado";
 choices[73][2] = "El control de acceso no discrecional usa un m&eacute;todo basado en roles para determinar los permisos";
 choices[73][3] = "Todas las respuestas anteriores son correctas";
 answers[73] = choices[73][3];
 units[73] = "111";
 comments[73] = "Id Pregunta: 6538. ";


//  Id pregunta: 6560 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 3.5G?";
 choices[74]= new Array();
 choices[74][0] = "Tecnolog&iacute;a HSDPA";
 choices[74][1] = "Capacidad enlace descendente: hasta 14.4 Mbps";
 choices[74][2] = "El uso del canal descendente puede ser compartido por varios usuarios";
 choices[74][3] = "Todas las respuestas anteriores son correctas";
 answers[74] = choices[74][3];
 units[74] = "108";
 comments[74] = "Id Pregunta: 6560. ";


//  Id pregunta: 6583 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  Entre los apartados m&iacute;nimos que debe tener un documento de seguridad est&aacute;n";
 choices[75]= new Array();
 choices[75][0] = "Identificaci&oacute;n del responsable de seguridad";
 choices[75][1] = "Control peri&oacute;dico del cumplimiento del documento";
 choices[75][2] = "Funciones y obligaciones del personal";
 choices[75][3] = "Todas las respuestas anteriores son correctas";
 answers[75] = choices[75][2];
 units[75] = "29";
 comments[75] = "Id Pregunta: 6583. ";


//  Id pregunta: 6590 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  La realizaci&oacute;n de la auditor&iacute;a, dentro de las medidas de seguridad de nivel medio, de acuerdo al RD 1720/2007 debe llevarse a cabo:";
 choices[76]= new Array();
 choices[76][0] = "Por personal externo";
 choices[76][1] = "Por personal interno a la organizaci&oacute;n";
 choices[76][2] = "Por profesionales en materia de protecci&oacute;n de datos";
 choices[76][3] = "Todas las respuestas anteriores son incorrectas";
 answers[76] = choices[76][2];
 units[76] = "75";
 comments[76] = "Id Pregunta: 6590. ";


//  Id pregunta: 6644 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta en la t&eacute;cnica DELPHI?";
 choices[77]= new Array();
 choices[77][0] = "Intervienen distintos estimadores";
 choices[77][1] = "Dan su estimaci&oacute;n en una reuni&oacute;n conjunta";
 choices[77][2] = "Es un proceso repetitivo";
 choices[77][3] = "Debe existir un coordinador";
 answers[77] = choices[77][1];
 units[77] = "89";
 comments[77] = "Id Pregunta: 6644. ";


//  Id pregunta: 7798 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)   En el entorno de escritorio KDE, Karbon14 es:";
 choices[78]= new Array();
 choices[78][0] = " El navegador del escritorio.";
 choices[78][1] = " Un generador de informes para la empresa.";
 choices[78][2] = " Un editor de f&oacute;rmulas matem&aacute;ticas.";
 choices[78][3] = " Un programa de dibujo vectorial.";
 answers[78] = choices[78][3];
 units[78] = "NULL";
 comments[78] = "Id Pregunta: 7798. Map 2005";


//  Id pregunta: 8218 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  La distancia de Hamming entre las palabras 01000 y 01010 es:";
 choices[79]= new Array();
 choices[79][0] = "1";
 choices[79][1] = "2";
 choices[79][2] = "3";
 choices[79][3] = "4";
 answers[79] = choices[79][0];
 units[79] = "45";
 comments[79] = "Id Pregunta: 8218. Examen TIC A1 2010";


//  Id pregunta: 8314 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  El c&oacute;dec G.729 especificado por la ITU-T para la codificaci&oacute;n de voz para su uso en sistemas de Voz sobre IP, &iquest;a qu&eacute; tasas de bit puede operar?";
 choices[80]= new Array();
 choices[80][0] = "A 56 o 64 kbps.";
 choices[80][1] = "A 6.4, 8 o 11.8 kbps. ";
 choices[80][2] = "&Uacute;nicamente a 8 kbps. ";
 choices[80][3] = "A 5.3 o 6.4 kbps.";
 answers[80] = choices[80][1];
 units[80] = "100";
 comments[80] = "Id Pregunta: 8314. Examen TIC A2 2010";


//  Id pregunta: 8345 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Dado un grafo G = (V, E) donde V es el conjunto de v&eacute;rtices y E es conjunto de aristas. Diremos que es hamiltoniano si:";
 choices[81]= new Array();
 choices[81][0] = "Todos los v&eacute;rtices tienen el mismo grado.";
 choices[81][1] = "Contiene un ciclo que pasa por todos los v&eacute;rtices del grafo.";
 choices[81][2] = "No contiene ciclos.";
 choices[81][3] = "Es conexo y contiene un ciclo.";
 answers[81] = choices[81][1];
 units[81] = "64";
 comments[81] = "Id Pregunta: 8345. Examen TIC A2 2010";


//  Id pregunta: 8472 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  El PID 0 se asigna en Unix/Linux a:";
 choices[82]= new Array();
 choices[82][0] = "Swapper";
 choices[82][1] = "Init";
 choices[82][2] = "Page daemon";
 choices[82][3] = "Load";
 answers[82] = choices[82][0];
 units[82] = "53,54";
 comments[82] = "Id Pregunta: 8472. Analista Ayto. Madrid 2010";


//  Id pregunta: 8485 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Se est&aacute; planificando la configuraci&oacute;n de los equipos de un centro de tratamiento de la informaci&oacute;n, seg&uacute;n un Enfoque basado en el riesgo. De acuerdo con la metodolog&iacute;a MAGERIT, la tarea de valoraci&oacute;n de salvaguardias se encuadra en el proceso:";
 choices[83]= new Array();
 choices[83][0] = "Gesti&oacute;n de riesgos.";
 choices[83][1] = "An&aacute;lisis de salvaguardias.";
 choices[83][2] = "An&aacute;lisis de riesgos.";
 choices[83][3] = "Gesti&oacute;n de salvaguardias.";
 answers[83] = choices[83][2];
 units[83] = "33";
 comments[83] = "Id Pregunta: 8485. Examen TIC A2 2010 interna";


//  Id pregunta: 8853 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  En el marco de trabajo Windows Communication Foundation (WCF) para la creaci&oacute;n de Aplicaciones Orientadas a Servicios cu&aacute;l de las siguientes afirmaciones es correcta respecto al modelo de intercambio soportado:";
 choices[84]= new Array();
 choices[84][0] = "El modelo es el de solicitud/respuesta, en que un extremo ha de solicitar datos de otro extremo y el otro extremo enviar siempre una respuesta";
 choices[84][1] = "Permite un modelo d&uacute;plex, en donde dos extremos establecen una conexi&oacute;n y se env&iacute;an datos entre s&iacute;, como ocurre con un programa de mensajer&iacute;a instant&aacute;nea";
 choices[84][2] = "El modelo establece que el env&iacute;o de datos de un extremo de servicio a otro no puede ser asincr&oacute;nico";
 choices[84][3] = "Ninguna de las anteriores es correcta";
 answers[84] = choices[84][2];
 units[84] = "56";
 comments[84] = "Id Pregunta: 8853. Analista Ayto. Madrid 2010";


//  Id pregunta: 8867 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  En el contexto de Almac&eacute;n de datos (Data Warehouse) a los subconjuntos de datos para &aacute;reas especificas se le llama:";
 choices[85]= new Array();
 choices[85][0] = "Metadata.";
 choices[85][1] = "Data Marts.";
 choices[85][2] = "Data Ware.";
 choices[85][3] = "Data Store.";
 answers[85] = choices[85][1];
 units[85] = "68";
 comments[85] = "Id Pregunta: 8867. Analista Ayto. Madrid 2010";


//  Id pregunta: 8906 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[86]= new Array();
 choices[86][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[86][1] = "UTP Categor&iacute;a 3.";
 choices[86][2] = "UTP Categor&iacute;a 5.";
 choices[86][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[86] = choices[86][2];
 units[86] = "99, 101";
 comments[86] = "Id Pregunta: 8906. Operador Ayto. Madrid 2010";


//  Id pregunta: 8923 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Cuando un antivirus utiliza t&eacute;cnicas heur&iacute;sticas significa que:";
 choices[87]= new Array();
 choices[87][0] = "monitoriza continuamente el sistema para detectar amenazas.";
 choices[87][1] = "puede eliminar troyanos y rootkits sin da&ntilde;ar el sistema.";
 choices[87][2] = "puede reconocer c&oacute;digos maliciosos aunque no se encuentren en su base de datos.";
 choices[87][3] = "interroga a otros equipos de confianza para obtener informaci&oacute;n sobre los ficheros";
 answers[87] = choices[87][2];
 units[87] = "63";
 comments[87] = "Id Pregunta: 8923. Operador Ayto. Madrid 2010";


//  Id pregunta: 9088 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[88]= new Array();
 choices[88][0] = "Estar documentado correctamente";
 choices[88][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[88][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[88][3] = "Ser original";
 answers[88] = choices[88][3];
 units[88] = "36";
 comments[88] = "Id Pregunta: 9088. ";


//  Id pregunta: 9285 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  En los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y sector privado, una Administraci&oacute;n encarga a una entidad de derecho privado la realizaci&oacute;n de una actuaci&oacute;n global, que no puede durar m&aacute;s de...";
 choices[89]= new Array();
 choices[89][0] = "10 a&ntilde;os.";
 choices[89][1] = "30 a&ntilde;os.";
 choices[89][2] = "20 a&ntilde;os.";
 choices[89][3] = "15 a&ntilde;os.";
 answers[89] = choices[89][2];
 units[89] = "41";
 comments[89] = "Id Pregunta: 9285. ";


//  Id pregunta: 9396 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Las redes ATM emplean celdas de:";
 choices[90]= new Array();
 choices[90][0] = "Tama&ntilde;o variable: entre 5 e 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n";
 choices[90][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n";
 choices[90][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[90][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[90] = choices[90][1];
 units[90] = "109";
 comments[90] = "Id Pregunta: 9396. Examen Xunta de Galicia A1 2011";


//  Id pregunta: 9473 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes no es un factor de riesgo a la hora de analizar la rentabilidad de un proyecto?";
 choices[91]= new Array();
 choices[91][0] = "Factores econ&oacute;micos";
 choices[91][1] = "Factores pol&iacute;ticos";
 choices[91][2] = "Factores sociales";
 choices[91][3] = "Factores organizativos";
 answers[91] = choices[91][2];
 units[91] = "38";
 comments[91] = "Id Pregunta: 9473. ";


//  Id pregunta: 9518 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  Los EJB de tipo entity pueden ser:";
 choices[92]= new Array();
 choices[92][0] = "De dos tipos: RMP y CMP";
 choices[92][1] = "De dos tipos: BMP y CMP";
 choices[92][2] = "De tres tipos: BMP, CMP y JMP";
 choices[92][3] = "De tres tipos: BMP, CMP y SMP";
 answers[92] = choices[92][1];
 units[92] = "116";
 comments[92] = "Id Pregunta: 9518. ";


//  Id pregunta: 9570 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, durante la tramitaci&oacute;n de un proceso sancionador, podr&aacute; acordarse como medida provisional la suspensi&oacute;n temporal de la actividad del prestador de servicios de certificaci&oacute;n, incluyendo el cierre de sus establecimientos, cuando la infracci&oacute;n haya sido calicada como:";
 choices[93]= new Array();
 choices[93][0] = "Leve, grave o muy grave";
 choices[93][1] = "Grave o muy grave";
 choices[93][2] = "&Uacute;nicamente cuando haya sido calificada como muy grave";
 choices[93][3] = "En ning&uacute;n caso podr&aacute;n acordarse este tipo de medidas provisionales";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 9570. ";


//  Id pregunta: 9904 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Seg&uacute;n M&eacute;trica v3, los flujos que interconectan actividades en la t&eacute;cnica SADT (Structured Analysis and Design Technique) se pueden clasificar en 4 tipos, se&ntilde;ale cu&aacute;l de los siguientes flujos NO es correcto:";
 choices[94]= new Array();
 choices[94][0] = "Control.";
 choices[94][1] = "Transacci&oacute;n.";
 choices[94][2] = "Mecanismo.";
 choices[94][3] = "Entrada.";
 answers[94] = choices[94][1];
 units[94] = "86";
 comments[94] = "Id Pregunta: 9904. TIC A2, Examen 2013";


//  Id pregunta: 10008 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, en la actividad &ldquo;Definici&oacute;n de Requisitos del Sistema&rdquo; participan los siguientes grupos de personas:";
 choices[95]= new Array();
 choices[95][0] = "Jefe de proyecto, Analistas y Usuarios Expertos.";
 choices[95][1] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas y Usuarios Expertos.";
 choices[95][2] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones y Usuarios Expertos.";
 choices[95][3] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones, Responsables de Seguridad y Usuarios Expertos.";
 answers[95] = choices[95][0];
 units[95] = "86";
 comments[95] = "Id Pregunta: 10008. ";


//  Id pregunta: 10071 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como 3.5G es:";
 choices[96]= new Array();
 choices[96][0] = "GPRS ";
 choices[96][1] = "HSDPA";
 choices[96][2] = "HSUPA ";
 choices[96][3] = "UMTS";
 answers[96] = choices[96][1];
 units[96] = "108";
 comments[96] = "Id Pregunta: 10071. TIC A2, libre, Examen 2013";


//  Id pregunta: 10138 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Qu&eacute; novedad introduce el est&aacute;ndar DOCSIS 3.1?";
 choices[97]= new Array();
 choices[97][0] = "No existe dicho est&aacute;ndar";
 choices[97][1] = "Puede soportar hasta 10 Gbit/s de bajada";
 choices[97][2] = "Permite el uso de tecnolog&iacute;as S-CDMA";
 choices[97][3] = "Permite el ajuste de diferentes niveles de calidad de servicio, seg&uacute;n el servicio empleado";
 answers[97] = choices[97][1];
 units[97] = "105";
 comments[97] = "Id Pregunta: 10138. ";


//  Id pregunta: 10287 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En la herramienta de control de versiones Subversion, &iquest;con que comando se suben los cambios al repositorio?";
 choices[98]= new Array();
 choices[98][0] = "svn commit";
 choices[98][1] = "svn checkin";
 choices[98][2] = "svn checkout";
 choices[98][3] = "svn upload";
 answers[98] = choices[98][0];
 units[98] = "78";
 comments[98] = "Id Pregunta: 10287. TIC A2, libre, examen 2013";


//  Id pregunta: 10444 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas sobre las redes GPRS es FALSA?";
 choices[99]= new Array();
 choices[99][0] = "Puede alcanzar velocidades de hasta 236 kbps de descarga. ";
 choices[99][1] = "Son redes orientadas a conexi&oacute;n.";
 choices[99][2] = "Pueden ofrecer servicios de mensajer&iacute;a instant&aacute;nea.";
 choices[99][3] = "Ofrecen servicios de transmisi&oacute;n digital de datos.";
 answers[99] = choices[99][1];
 units[99] = "108";
 comments[99] = "Id Pregunta: 10444. Examen TIC A1 2013";


