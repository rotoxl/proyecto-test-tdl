/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 157 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  El porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso se denomina:";
 choices[0]= new Array();
 choices[0][0] = "Overlap";
 choices[0][1] = "Swaping";
 choices[0][2] = "Throughput";
 choices[0][3] = "Overhead";
 answers[0] = choices[0][3];
 units[0] = "35";
 comments[0] = "Id Pregunta: 157. ";


//  Id pregunta: 300 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  La duraci&oacute;n total de un proyecto es:";
 choices[1]= new Array();
 choices[1][0] = "La del camino cr&iacute;tico del gr&aacute;fico de PERT.";
 choices[1][1] = "La del camino del gr&aacute;fico de PERT que m&aacute;s tareas realiza.";
 choices[1][2] = "La suma de la duraci&oacute;n de todas las tareas de un proyecto, como se refleja en el gr&aacute;fico de PERT.";
 choices[1][3] = "La de la tarea cr&iacute;tica, como se refleja en el gr&aacute;fico de PERT.";
 answers[1] = choices[1][0];
 units[1] = "27";
 comments[1] = "Id Pregunta: 300. ";


//  Id pregunta: 750 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  De las estructuras de archivos propuestas a continuaci&oacute;n, indique cu&aacute;l implica que un Sistema Operativo tenga la m&aacute;xima flexibilidad: &quot;Aquella estructura en la que el archivo es un/una: &quot;";
 choices[2]= new Array();
 choices[2][0] = "Secuencia de registros de longitud fija";
 choices[2][1] = "Secuencia de bytes de tama&ntilde;o variable";
 choices[2][2] = "&Aacute;rbol de registros, todos ellos de igual longitud";
 choices[2][3] = "&Aacute;rbol de registros, que pueden ser de distinta longitud";
 answers[2] = choices[2][1];
 units[2] = "52";
 comments[2] = "Id Pregunta: 750. Examen TIC MAP B 2004";


//  Id pregunta: 751 Año de creación de pregunta: 2004-01-01
 questions[3]= "4)  El lenguaje Java Script:";
 choices[3]= new Array();
 choices[3][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[3][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[3][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[3][3] = "Se ejecuta en la m&aacute;quina cliente una vez que ha sido descargado en forma de applets, ejecutables en cualquier m&aacute;quina";
 answers[3] = choices[3][1];
 units[3] = "61";
 comments[3] = "Id Pregunta: 751. Examen TIC MAP B 2004";


//  Id pregunta: 830 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Comparando la criptograf&iacute;a de clave secreta frente a la criptograf&iacute;a asim&eacute;trica. &iquest;C&uacute;al de los dos tipos de criptograf&iacute;a es m&aacute;s segura, suponiendo igual longitud de clave?:";
 choices[4]= new Array();
 choices[4][0] = "La de clave secreta";
 choices[4][1] = "La asim&eacute;trica";
 choices[4][2] = "Son igual de seguras";
 choices[4][3] = "Depende del lenguaje de programaci&oacute;n empleado";
 answers[4] = choices[4][0];
 units[4] = "72";
 comments[4] = "Id Pregunta: 830. ";


//  Id pregunta: 833 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a la ejecuci&oacute;n de programas en una m&aacute;quina?:";
 choices[5]= new Array();
 choices[5][0] = "Los programas de proceso forman el grueso del sistema operativo ";
 choices[5][1] = "Los programas de control funcionan en modo usuario";
 choices[5][2] = "Los programas de control funcionan en modo kernel";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][2];
 units[5] = "52";
 comments[5] = "Id Pregunta: 833. ";


//  Id pregunta: 842 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre data-warehouse es verdadera?";
 choices[6]= new Array();
 choices[6][0] = "Los datos se agregan en conjuntos.";
 choices[6][1] = "La actualizaci&oacute;n de los datos se hace en tiempo real.";
 choices[6][2] = "Est&aacute;n orientados a procesos.";
 choices[6][3] = "&Uacute;nicamente se puede realizar data-mining sobre un sistema data-warehouse.";
 answers[6] = choices[6][0];
 units[6] = "68";
 comments[6] = "Id Pregunta: 842. ";


//  Id pregunta: 854 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes opciones no es una estructura de representaci&oacute;n del conocimiento?:";
 choices[7]= new Array();
 choices[7][0] = "Redes sem&aacute;nticas";
 choices[7][1] = "Diagramas";
 choices[7][2] = "Marcos";
 choices[7][3] = "Guiones";
 answers[7] = choices[7][1];
 units[7] = "63";
 comments[7] = "Id Pregunta: 854. ";


//  Id pregunta: 925 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es la base de conocimientos de un sistema experto?:";
 choices[8]= new Array();
 choices[8][0] = "La base de datos que usa el sistema experto";
 choices[8][1] = "El conjunto de reglas almacenadas sobre un tema particular";
 choices[8][2] = "La operaci&oacute;n de obtener informaci&oacute;n del experto humano";
 choices[8][3] = "El programa b&aacute;sico que gestiona el sistema experto";
 answers[8] = choices[8][1];
 units[8] = "64";
 comments[8] = "Id Pregunta: 925. ";


//  Id pregunta: 1011 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  El data warehousing consiste b&aacute;sicamente en:";
 choices[9]= new Array();
 choices[9][0] = "En realizar un BPR (Business Processing Re-engineering) mediante el an&aacute;lisis automatizado de los datos corporativos.";
 choices[9][1] = "En automatizar los procesos de almacenamiento de datos de toda la corporaci&oacute;n. El sistema se encarga de situar los datos, de manera transparente, en los medios f&iacute;sicos m&aacute;s adecuados (discos, cintas, etc&eacute;tera) y de gestionar las copias de salvaguarda.";
 choices[9][2] = "En generar din&aacute;mica y autom&aacute;ticamente, a partir de datos extra&iacute;dos de todas las B.D. operacionales del sistema, otra base de datos donde se va almacenando informaci&oacute;n integrada, resumida, consolidada, multidimensional y significativa.";
 choices[9][3] = "En independizar los datos de la corporaci&oacute;n de su localizaci&oacute;n f&iacute;sica, creando un sistema de informaci&oacute;n virtual que integra todos los datos de la corporaci&oacute;n, incluso si est&aacute;n repartidos en diferentes sedes.";
 answers[9] = choices[9][2];
 units[9] = "68";
 comments[9] = "Id Pregunta: 1011. ";


//  Id pregunta: 1027 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Entrust:";
 choices[10]= new Array();
 choices[10][0] = "Un algoritmo criptogr&aacute;fico";
 choices[10][1] = "Un mecanismo de intercambio de claves";
 choices[10][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[10][3] = "Una funcion resumen";
 answers[10] = choices[10][2];
 units[10] = "74";
 comments[10] = "Id Pregunta: 1027. ";


//  Id pregunta: 1370 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  Si un ordenador tiene un tiempo de acceso a memoria de 60 nanosegundos, una longitud de palabra de 16 bits, memoria ECC y utiliza 24 bits para direccionamiento, se puede decir que la memoria m&aacute;xima que puede direccionar es de:";
 choices[11]= new Array();
 choices[11][0] = "8 Megabytes";
 choices[11][1] = "16 Megabytes";
 choices[11][2] = "32 Megabytes";
 choices[11][3] = "64 Megabytes";
 answers[11] = choices[11][2];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1370. ";


//  Id pregunta: 1497 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  La aplicaci&oacute;n que permite conocer si un sistema est&aacute; accesible es:";
 choices[12]= new Array();
 choices[12][0] = "traceroute";
 choices[12][1] = "ping";
 choices[12][2] = "wake";
 choices[12][3] = "setup";
 answers[12] = choices[12][1];
 units[12] = "52,55";
 comments[12] = "Id Pregunta: 1497. ";


//  Id pregunta: 1518 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  Al objeto de una base de datos ORACLE que tiene como funci&oacute;n establecer una referencia a datos almacenados en otra base de datos, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "&Iacute;ndice no &uacute;nico.";
 choices[13][1] = "Vista.";
 choices[13][2] = "Database link.";
 choices[13][3] = "Clustered Cable.";
 answers[13] = choices[13][2];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1518. Junta Andaluc&iacute;a";


//  Id pregunta: 1547 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest;C&oacute;mo se crea un &iacute;ndice para una tabla?";
 choices[14]= new Array();
 choices[14][0] = "Se crea siempre en la misma sentencia en que se crea la tabla.";
 choices[14][1] = "Se crea siempre autom&aacute;ticamente sobre la clave primaria al crear la tabla.";
 choices[14][2] = "Con CREATE INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 choices[14][3] = "Con INSERT INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 answers[14] = choices[14][2];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1547. ";


//  Id pregunta: 1728 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  El permiso de Unix 500 permite:";
 choices[15]= new Array();
 choices[15][0] = "Lectura y escritura para el propietario del archivo";
 choices[15][1] = "Lectura y ejecuci&oacute;n para  el propietario del archivo";
 choices[15][2] = "lectura y escritura para todos los usuarios";
 choices[15][3] = "lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[15] = choices[15][1];
 units[15] = "54";
 comments[15] = "Id Pregunta: 1728. ";


//  Id pregunta: 1803 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest;Qu&eacute; es moodle?";
 choices[16]= new Array();
 choices[16][0] = "Un sistema de gest&oacute;n de la ense&ntilde;anza de Software libre";
 choices[16][1] = "Un sistema de gesti&oacute;n de contenidos gratuito pero no libre";
 choices[16][2] = "Un buscador de Internet";
 choices[16][3] = "Un entorno de escritorio para sistemas Linux bajo tecnolog&iacute;a X Windows";
 answers[16] = choices[16][0];
 units[16] = "66";
 comments[16] = "Id Pregunta: 1803. Moodle tiene licencia GNU GPL.";


//  Id pregunta: 1904 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Copia &quot;cercana&quot; de datos que permite un acceso m&aacute;s r&aacute;pido que el almacenamiento habitual";
 choices[17]= new Array();
 choices[17][0] = "registro";
 choices[17][1] = "cache";
 choices[17][2] = "buffer";
 choices[17][3] = "pipelining";
 answers[17] = choices[17][1];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1904. ";


//  Id pregunta: 1918 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  Marque cu&aacute;l de las siguientes afirmaciones es cierta con respecto al sistema de ficheros en red NFS";
 choices[18]= new Array();
 choices[18][0] = "Proporciona una visi&oacute;n id&eacute;ntica del espacio de nombres para todos los usuarios del sistema con independencia de su localizaci&oacute;n";
 choices[18][1] = "Una vez realizado el montaje remoto, proporciona transparencia de la localizaci&oacute;n en el nombrado de ficheros";
 choices[18][2] = "Proporciona una sem&aacute;ntica igual a la que ofrece el sistema Unix en el acceso concurrente a los ficheros";
 choices[18][3] = "Proporciona transparencia de la replicaci&oacute;n";
 answers[18] = choices[18][1];
 units[18] = "53";
 comments[18] = "Id Pregunta: 1918. ";


//  Id pregunta: 1988 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; es el factor de utilizaci&oacute;n de los componentes?:";
 choices[19]= new Array();
 choices[19][0] = "Es la m&aacute;xima cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinada";
 choices[19][1] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinada";
 choices[19][2] = "Es el porcentaje de tiempo durante el cu&aacute;l est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[19][3] = "Es el intervalo de tiempo durante el cual se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 answers[19] = choices[19][2];
 units[19] = "88";
 comments[19] = "Id Pregunta: 1988. ";


//  Id pregunta: 2044 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  Seg&uacute;n el PGGC, si el nivel de intensidad es 2, el procedimiento de control de calidad a utilizar ser&aacute;:";
 choices[20]= new Array();
 choices[20][0] = "Revisi&oacute;n T&eacute;cnica Formal";
 choices[20][1] = "Auditor&iacute;a de Calidad";
 choices[20][2] = "Inspecci&oacute;n Detallada";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][2];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2044. ";


//  Id pregunta: 2203 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;En qu&eacute; proceso de METRICA V3 se llevar&iacute;a a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procedimientos de migraci&oacute;n y carga inicial de datos?:";
 choices[21]= new Array();
 choices[21][0] = "CSI";
 choices[21][1] = "DSI";
 choices[21][2] = "IAS";
 choices[21][3] = "DCS";
 answers[21] = choices[21][0];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2203. ";


//  Id pregunta: 2238 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Booch, Jacobson y Rumbaugh:";
 choices[22]= new Array();
 choices[22][0] = "crearon C++";
 choices[22][1] = "crearon los diagramas E/R";
 choices[22][2] = "dise&ntilde;aron el primer ordenador que usaba procesamiento real en paralelo";
 choices[22][3] = "crearon UML";
 answers[22] = choices[22][3];
 units[22] = "82";
 comments[22] = "Id Pregunta: 2238. ";


//  Id pregunta: 2756 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;C&oacute;mo se denomina la t&eacute;cnica que permite  obtener un modelo f&iacute;sico de datos a partir del modelo de clases?";
 choices[23]= new Array();
 choices[23][0] = "Matricial";
 choices[23][1] = "Historia de vidas de las entidades";
 choices[23][2] = "Diagrama de paquetes";
 choices[23][3] = "Reglas de transformaci&oacute;n.";
 answers[23] = choices[23][3];
 units[23] = "82";
 comments[23] = "Id Pregunta: 2756. ";


//  Id pregunta: 2796 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  Qu&eacute; tipo de actividades contempla M&eacute;trica v3 en la interfaz de seguridad";
 choices[24]= new Array();
 choices[24][0] = "Seguridad intr&iacute;nseca del sistema";
 choices[24][1] = "seguridad del proceso de desarrollo";
 choices[24][2] = "Formaci&oacute;n en materia de seguridad";
 choices[24][3] = "Todas son correctas";
 answers[24] = choices[24][3];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2796. ";


//  Id pregunta: 2833 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  La transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema es:";
 choices[25]= new Array();
 choices[25][0] = "Ingenier&iacute;a inversa.";
 choices[25][1] = "Reestructuraci&oacute;n.";
 choices[25][2] = "Ingenier&iacute;a hacia delante.";
 choices[25][3] = "Reingenier&iacute;a.";
 answers[25] = choices[25][1];
 units[25] = "91";
 comments[25] = "Id Pregunta: 2833. ";


//  Id pregunta: 2953 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[26]= new Array();
 choices[26][0] = "CSMA/CD";
 choices[26][1] = "Token bus";
 choices[26][2] = "Token Ring";
 choices[26][3] = "Aloha ranurado";
 answers[26] = choices[26][1];
 units[26] = "101, 102";
 comments[26] = "Id Pregunta: 2953. Similar a examen TIC SS A 2003";


//  Id pregunta: 3021 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Qu&eacute; diferencia, entre otras, hay entre S-HTTP y SSL?";
 choices[27]= new Array();
 choices[27][0] = "El protocolo SSL fue desarrollado por Enterprise Integration Technologies (EIT) y el S-HTTP por Netscape";
 choices[27][1] = "S-HTTP permite el cifrado pero no la autenticaci&oacute;n digital, SSL permite tanto el cifrado como la autenticaci&oacute;n digital";
 choices[27][2] = "S-HTTP funciona entre la capa TCP y la capa de aplicaci&oacute;n, SSL funciona en la de aplicaci&oacute;n";
 choices[27][3] = "S-HTTP solamente sirve para la navegaci&oacute;n web, mientras que SSL sirve para cualquier comunicaci&oacute;n";
 answers[27] = choices[27][3];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3021. TAI 2004";


//  Id pregunta: 3390 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  El nivel de enlace del modelo de referencia OSI:";
 choices[28]= new Array();
 choices[28][0] = "Determina cu&aacute;ntos y por donde son enviados los paquetes desde la fuente al destino";
 choices[28][1] = "Resuelve los problemas planteados por la falta de fiabilidad de los circuitos";
 choices[28][2] = "Se mantiene a la escucha por si el emisor env&iacute;a alg&uacute;n mensaje. Posteriormente determina cu&aacute;l es el destinatario del mismo";
 choices[28][3] = "Se asegura de que todos los caminos posibles entre el emisor y el receptor est&aacute;n operativos";
 answers[28] = choices[28][1];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3390. ";


//  Id pregunta: 3461 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  El protocolo TCP (Transmisi&oacute;n Control Protocol):";
 choices[29]= new Array();
 choices[29][0] = "Es orientado a conexi&oacute;n y bidireccional";
 choices[29][1] = "Es orientado a conexi&oacute;n, pero no bidireccional";
 choices[29][2] = "Es no orientado a conexi&oacute;n y bidireccional";
 choices[29][3] = "Es no orientado a conexi&oacute;n, y no bidireccional";
 answers[29] = choices[29][0];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3461. ";


//  Id pregunta: 3499 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  En el modelo de referencia OSI, en una interfaz t&iacute;pica, la capa N+1 pasa una...... a la capa N, a trav&eacute;s del......:";
 choices[30]= new Array();
 choices[30][0] = "IDU, SAP";
 choices[30][1] = "IDU, ICI";
 choices[30][2] = "PDU, ICI";
 choices[30][3] = "PDU, SAP";
 answers[30] = choices[30][0];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3499. ";


//  Id pregunta: 3520 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  En Ethernet, se usa un transceptor (transceiver) para:";
 choices[31]= new Array();
 choices[31][0] = "Para hacer una conexi&oacute;n de red de un dispositivo a un servidor";
 choices[31][1] = "Establecer conexiones entre tarjetas de interfaz de red";
 choices[31][2] = "Convertir se&ntilde;ales recibidas por una puerta para transmitirlas por otra";
 choices[31][3] = "Unir un cable desde una estaci&oacute;n al medio f&iacute;sico que constituye la red";
 answers[31] = choices[31][3];
 units[31] = "102";
 comments[31] = "Id Pregunta: 3520. ";


//  Id pregunta: 3619 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  La norma FTAM, &iquest;en qu&eacute; nivel del est&aacute;ndar OSI se encuentra?:";
 choices[32]= new Array();
 choices[32][0] = "Nivel de red";
 choices[32][1] = "Nivel de transferencia de ficheros";
 choices[32][2] = "Nivel de transporte";
 choices[32][3] = "Nivel de aplicaci&oacute;n";
 answers[32] = choices[32][3];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3619. ";


//  Id pregunta: 3664 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Un router IP puede intercambiar tr&aacute;fico IP:";
 choices[33]= new Array();
 choices[33][0] = "Entre un interfaz Ethernet y un interfaz STM-1";
 choices[33][1] = "S&oacute;lo entre interfaces de un mismo nivel";
 choices[33][2] = "Nunca si existen m&aacute;quinas UNIX y Windows en cada una de las redes que conecta";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][0];
 units[33] = "102";
 comments[33] = "Id Pregunta: 3664. ";


//  Id pregunta: 3729 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Los m&oacute;dems usan t&eacute;cnicas de modulaci&oacute;n para transmitir datos sobre las l&iacute;neas telef&oacute;nicas. Indique cu&aacute;l de las siguientes no es una de estas t&eacute;cnicas:";
 choices[34]= new Array();
 choices[34][0] = "Modulaci&oacute;n de fase";
 choices[34][1] = "Modulaci&oacute;n de frecuencia";
 choices[34][2] = "Modulaci&oacute;n QAM";
 choices[34][3] = "Modulaci&oacute;n PCM";
 answers[34] = choices[34][3];
 units[34] = "99";
 comments[34] = "Id Pregunta: 3729. modems";


//  Id pregunta: 3771 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  PCM es:";
 choices[35]= new Array();
 choices[35][0] = "Modulaci&oacute;n por codificaci&oacute;n de pulsos";
 choices[35][1] = "M&oacute;biles adaptados al uso con ordenadores personales";
 choices[35][2] = "Modulaci&oacute;n por codificaci&oacute;n de fase";
 choices[35][3] = "Personalizaci&oacute;n de canales multimedia";
 answers[35] = choices[35][0];
 units[35] = "99";
 comments[35] = "Id Pregunta: 3771. *:PCM";


//  Id pregunta: 3874 Año de creación de pregunta: 2004-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es cierto respecto al protocolo POP3?";
 choices[36]= new Array();
 choices[36][0] = "Utiliza el protocolo TCP";
 choices[36][1] = "Utiliza servicios de DNS";
 choices[36][2] = "Permite eliminar los mensajes del buz&oacute;n";
 choices[36][3] = "A y c son ciertas";
 answers[36] = choices[36][3];
 units[36] = "106";
 comments[36] = "Id Pregunta: 3874. Tanenbaum";


//  Id pregunta: 3889 Año de creación de pregunta: 2003-01-01
 questions[37]= "38)  En cuanto a los Servicios Web, no se puede decir que:";
 choices[37]= new Array();
 choices[37][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[37][1] = "Es independiente de la plataforma";
 choices[37][2] = "Es independiente del lenguaje de programaci&oacute;n y de la plataforma";
 choices[37][3] = "Sus est&aacute;ndares son m&aacute;s complejos que los usados en CORBA";
 answers[37] = choices[37][3];
 units[37] = "51";
 comments[37] = "Id Pregunta: 3889. Nuevo tema. Arquitectura SOA";


//  Id pregunta: 3895 Año de creación de pregunta: 2003-01-01
 questions[38]= "39)  En un sistema de cableado estructurado IEEE 802.3 en UTP, la distancia m&aacute;xima horizontal ser&aacute; de 90 metros desde la terminaci&oacute;n mec&aacute;nica del armario repartidor de planta hasta la roseta, permiti&eacute;ndose desde &eacute;sta, hasta la estaci&oacute;n de trabajo o tel&eacute;fono";
 choices[38]= new Array();
 choices[38][0] = "1,5 metros m&aacute;s.";
 choices[38][1] = "3 metros m&aacute;s.";
 choices[38][2] = "4,5 metros m&aacute;s.";
 choices[38][3] = "Una distancia tal que la longitud total de este &uacute;ltimo latiguillo y la del armario repartidor, no supere los 10 metros.";
 answers[38] = choices[38][1];
 units[38] = "99";
 comments[38] = "Id Pregunta: 3895. Junta Andaluc&iacute;a";


//  Id pregunta: 3913 Año de creación de pregunta: 2004-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l no es una propiedad de la seguridad inform&aacute;tica?";
 choices[39]= new Array();
 choices[39][0] = "Confidencialidad";
 choices[39][1] = "Integridad";
 choices[39][2] = "Autenticaci&oacute;n";
 choices[39][3] = "Disponibilidad";
 answers[39] = choices[39][3];
 units[39] = "97";
 comments[39] = "Id Pregunta: 3913. ";


//  Id pregunta: 4161 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  En seguridad, que elemento no forma parte de los servicios de AAA";
 choices[40]= new Array();
 choices[40][0] = "Registro (accounting)";
 choices[40][1] = "Autorizaci&oacute;n";
 choices[40][2] = "Adaptaci&oacute;n";
 choices[40][3] = "Autenticaci&oacute;n";
 answers[40] = choices[40][2];
 units[40] = "111";
 comments[40] = "Id Pregunta: 4161. ";


//  Id pregunta: 4422 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  Un protocolo de comunicaci&oacute;n es:";
 choices[41]= new Array();
 choices[41][0] = "conjunto de reglas que gobiernan el formato de intercambio de mensajes entre niveles OSI de un mismo sistema.";
 choices[41][1] = "El conjunto de reglas que gobiernan c&oacute;mo va a proceder la comunicaci&oacute;n entre entidades pares de distintos sistemas.";
 choices[41][2] = "El conjunto de elementos f&iacute;sicos y l&oacute;gicos que relacionan dos niveles adyacentes de un sistema.";
 choices[41][3] = "Conjunto de primitivas y par&aacute;metros que concretan los servicios que se proporcionan a trav&eacute;s de la interfaz.";
 answers[41] = choices[41][1];
 units[41] = "";
 comments[41] = "Id Pregunta: 4422. ";


//  Id pregunta: 4424 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[42]= new Array();
 choices[42][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[42][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[42][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[42][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[42] = choices[42][2];
 units[42] = "30";
 comments[42] = "Id Pregunta: 4424. ";


//  Id pregunta: 4531 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una sentencia correcta?";
 choices[43]= new Array();
 choices[43][0] = "UML es un lenguaje unificado de modelado.";
 choices[43][1] = "UML fue adoptado en noviembre de 1997 por OMG.";
 choices[43][2] = "UML solo costa de una &uacute;nica versi&oacute;n desde su creaci&oacute;n.";
 choices[43][3] = "UML es un est&aacute;ndar de facto para visualizar, especificar y documentar los modelos que se crean durante Ia aplicaci&oacute;n de un proceso de software.";
 answers[43] = choices[43][2];
 units[43] = "82";
 comments[43] = "Id Pregunta: 4531. ";


//  Id pregunta: 4578 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[44]= new Array();
 choices[44][0] = "La ingenier&iacute;a inversa es el proceso de codificar los programas m&aacute;s eficientemente.";
 choices[44][1] = "La reingenier&iacute;a del software incluye el an&aacute;lisis de inventario.";
 choices[44][2] = "La ingenier&iacute;a inversa s&oacute;lo es aplicable al software estructurado.";
 choices[44][3] = "La ingenier&iacute;a directa es el proceso de analizar un programa para extraer informaci&oacute;n acerca de los datos, de su arquitectura y del dise&ntilde;o de procedimientos.";
 answers[44] = choices[44][1];
 units[44] = "91";
 comments[44] = "Id Pregunta: 4578. Castilla la Mancha B 06";


//  Id pregunta: 4581 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;En que fase de la metodolog&iacute;a M&eacute;trica V3 se inicia la definici&oacute;n de la arquitectura tecnol&oacute;gica?";
 choices[45]= new Array();
 choices[45][0] = "en la planificaci&oacute;n de sistemas de informaci&oacute;n";
 choices[45][1] = "en el an&aacute;lisis del sistema de informaci&oacute;n";
 choices[45][2] = "en el dise&ntilde;o del sistema de informaci&oacute;n";
 choices[45][3] = "en la construcci&oacute;n del sistema de informaci&oacute;n";
 answers[45] = choices[45][0];
 units[45] = "86";
 comments[45] = "Id Pregunta: 4581. ";


//  Id pregunta: 4612 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cual de los siguientes conceptos NO es un elemento b&aacute;sico de Magerit?";
 choices[46]= new Array();
 choices[46][0] = "activo";
 choices[46][1] = "salvaguarda";
 choices[46][2] = "amenaza";
 choices[46][3] = "vulnerabilidad";
 answers[46] = choices[46][3];
 units[46] = "33";
 comments[46] = "Id Pregunta: 4612. ";


//  Id pregunta: 4626 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Que comando se utiliza para convertir un sistema de ficheros ext2 a ext3 en las ultimas versiones de Suse Linux?";
 choices[47]= new Array();
 choices[47][0] = "tune2fs -c ldev/hdbX";
 choices[47][1] = "tune2fs -j /dev/hdbX";
 choices[47][2] = "make2fs /devlhdbX";
 choices[47][3] = "mount -t ext3 /dev/hdbX /mountpoint";
 answers[47] = choices[47][1];
 units[47] = "53";
 comments[47] = "Id Pregunta: 4626. ";


//  Id pregunta: 4673 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vistade explotaci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[48][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[48][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[48][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[48] = choices[48][1];
 units[48] = "88";
 comments[48] = "Id Pregunta: 4673. Examen 2006 JCYL";


//  Id pregunta: 4894 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Qui&eacute;n es el &oacute;rgano de contrataci&oacute;n en la adquisici&oacute;n de equipos y sistemas para el tratamiento de la informaci&oacute;n declarados de adquisici&oacute;n centralizada, una vez establecido el acuerdo marco?";
 choices[49]= new Array();
 choices[49][0] = "El Ministerio de Hacienda";
 choices[49][1] = "Las Juntas de Contrataci&oacute;n";
 choices[49][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada.";
 choices[49][3] = "El Ministerio de Administraciones P&uacute;blicas.";
 answers[49] = choices[49][2];
 units[49] = "41";
 comments[49] = "Id Pregunta: 4894. La Junta de Contrataci&oacute;n Centralizada (JCC) es el &oacute;rgano de contrataci&oacute;n en la adopci&oacute;n de tipos del AM. La JCC ha desconcentrado en la DG Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada la adjudicaci&oacute;n de AM posterior a la adopci&oacute;n de tipos.";


//  Id pregunta: 4916 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l de los siguientes t&eacute;rminos NO constituye un estandar de interface de acceso a bases de datos:";
 choices[50]= new Array();
 choices[50][0] = "ODBC (Open Database Connectivity).";
 choices[50][1] = "RDO (Remote Data Objects.";
 choices[50][2] = "DMBS (DataBase Management System).";
 choices[50][3] = "OLE DB (Object Linking and Embedding for Databases).";
 answers[50] = choices[50][2];
 units[50] = "57";
 comments[50] = "Id Pregunta: 4916. Examen TIC B 2007";


//  Id pregunta: 5228 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  El m&aacute;ximo n&uacute;mero de fases permitidas en el modelo de ciclo de vida en cascada es:";
 choices[51]= new Array();
 choices[51][0] = "5";
 choices[51][1] = "7";
 choices[51][2] = "9";
 choices[51][3] = "En realidad, el n&uacute;mero de fases es irrelevante, lo  que caracteriza al modelo es la secuencialidad entre &eacute;stas.";
 answers[51] = choices[51][3];
 units[51] = "76";
 comments[51] = "Id Pregunta: 5228. ";


//  Id pregunta: 5442 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[52]= new Array();
 choices[52][0] = "Usando XSL";
 choices[52][1] = "Usando un DTD";
 choices[52][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[52][3] = "Usando XSLT";
 answers[52] = choices[52][1];
 units[52] = "69";
 comments[52] = "Id Pregunta: 5442. Castilla y Le&oacute;n";


//  Id pregunta: 5445 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ";
 choices[53]= new Array();
 choices[53][0] = "el servidor tiene un built-in de JVM";
 choices[53][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente";
 choices[53][2] = "el navegador tiene un built-in de JVM";
 choices[53][3] = "los applets no necesitan una JVM";
 answers[53] = choices[53][2];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5445. Castilla y Le&oacute;n";


//  Id pregunta: 5473 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  Cual de los siguientes no es un activo en Magerit";
 choices[54]= new Array();
 choices[54][0] = "www";
 choices[54][1] = "url";
 choices[54][2] = "anon";
 choices[54][3] = "edi";
 answers[54] = choices[54][1];
 units[54] = "33";
 comments[54] = "Id Pregunta: 5473. Castilla y Le&oacute;n";


//  Id pregunta: 5513 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique cu&aacute;l es una caracter&iacute;stica t&eacute;cnica de W-CDMA, utilizada en UMTS:";
 choices[55]= new Array();
 choices[55][0] = "Emplea radiocanales de 50MHz de ancho de banda";
 choices[55][1] = "Permite transmisiones multic&oacute;digo";
 choices[55][2] = "No admite duplexaci&oacute;n por divisi&oacute;n en frecuencia (FDD) ";
 choices[55][3] = "No admite duplexaci&oacute;n por divisi&oacute;n en el tiempo (TDD)";
 answers[55] = choices[55][1];
 units[55] = "108";
 comments[55] = "Id Pregunta: 5513. ";


//  Id pregunta: 5605 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Qu&eacute; niveles implementa el m&oacute;dem de cable?";
 choices[56]= new Array();
 choices[56][0] = "El nivel f&iacute;sico, de control de acceso al medio e IP";
 choices[56][1] = "El nivel f&iacute;sico, enlace, de red y de transporte";
 choices[56][2] = "El nivel f&iacute;sico y de control de acceso al medio";
 choices[56][3] = "Depende, a partir de DOCSIS 2.0 se implementan el nivel f&iacute;sico y de control de acceso al medio e IP";
 answers[56] = choices[56][2];
 units[56] = "105";
 comments[56] = "Id Pregunta: 5605. ";


//  Id pregunta: 5622 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  En un sistema operativo UNIX queremos que un fichero pueda ser actualizado &uacute;nicamente por su propietario y por los usuarios que pertenecen al mismo grupo que el propietario. Indicar cuales ser&iacute;an los permisos adecuados:";
 choices[57]= new Array();
 choices[57][0] = "755";
 choices[57][1] = "740";
 choices[57][2] = "760";
 choices[57][3] = "777";
 answers[57] = choices[57][2];
 units[57] = "53";
 comments[57] = "Id Pregunta: 5622. ";


//  Id pregunta: 5774 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  Los datos de car&aacute;cter personal recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones";
 choices[58]= new Array();
 choices[58][0] = "Podr&aacute;n comunicarse entre administraciones los datos de car&aacute;cter personal que una Administraci&oacute;n P&uacute;blica obtenga o elabore con destino a otra";
 choices[58][1] = "Las diferentes Administraciones P&uacute;blicas podr&aacute;n cederse entre ellas los datos de car&aacute;cter personal incluso para el ejercicio de competencias diferentes.";
 choices[58][2] = "No podr&aacute;n cederse cuando la comunicaci&oacute;n tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos";
 choices[58][3] = "La Ley no trata este particular, sino que lo hace su desarrollo posterior";
 answers[58] = choices[58][0];
 units[58] = "29";
 comments[58] = "Id Pregunta: 5774. MAP 2008 A2";


//  Id pregunta: 6007 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  La accesibilidad universal:";
 choices[59]= new Array();
 choices[59][0] = "Es un principio recogido y definido en la legislaci&oacute;n espa&ntilde;ola.";
 choices[59][1] = "Es un t&eacute;rmino utilizado en la documentaci&oacute;n sobre accesibilidad, pero no tiene una definici&oacute;n formal en Espa&ntilde;a.";
 choices[59][2] = "Se trata de un concepto que s&oacute;lo se aplica a las personas del medio rural.";
 choices[59][3] = "Es un concepto equivalente a la definici&oacute;n de usabilidad que se da en la ISO/IEC 9241.";
 answers[59] = choices[59][0];
 units[59] = "39";
 comments[59] = "Id Pregunta: 6007. TIC A 2009";


//  Id pregunta: 6008 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  La t&eacute;cnica JAD (Joint Application Design) para el an&aacute;lisis de requisitos:";
 choices[60]= new Array();
 choices[60][0] = "Consiste en la realizaci&oacute;n de entrevistas con diversas personas, elaborando un acta para cada entrevista que se les remitir&aacute; posteriormente para su aprobaci&oacute;n.";
 choices[60][1] = "Consiste en realizar un taller donde los trabajadores del conocimiento y especialistas de TI se re&uacute;nen en diversas sesiones, a veces por varios d&iacute;as, para definir y revisar los requerimientos del negocio para el sistema.";
 choices[60][2] = "Define seis categor&iacute;as de aspectos que el analista debe estudiar con los usuarios empleando para ello otras t&eacute;cnicas de an&aacute;lisis de requisitos.";
 choices[60][3] = "Es una t&eacute;cnica cuyo objetivo principal es realizar un control de versiones de un determinado producto software.";
 answers[60] = choices[60][1];
 units[60] = "78";
 comments[60] = "Id Pregunta: 6008. TIC A 2009";


//  Id pregunta: 6138 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  Indique la opci&oacute;n FALSA. Dentro del servicio universal definido por la Ley 9/2014, General de Telecomunicaciones, se debe garantizar:";
 choices[61]= new Array();
 choices[61][0] = "El acceso funcional a internet a velocidad suficiente.";
 choices[61][1] = "Una gu&iacute;a general de n&uacute;meros de abonados.";
 choices[61][2] = "Una cobertura suficiente que permita el acceso a la red de telefon&iacute;a m&oacute;vil.";
 choices[61][3] = "Una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago en todo el territorio nacional.";
 answers[61] = choices[61][2];
 units[61] = "110";
 comments[61] = "Id Pregunta: 6138. TIC A 2009";


//  Id pregunta: 6147 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  El ADM (M&eacute;todo de diagramaci&oacute;n con flechas):";
 choices[62]= new Array();
 choices[62][0] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza casillas o rect&aacute;ngulos, denominados nodos, para representar actividades, que se conectan con flechas que muestran las dependencias.";
 choices[62][1] = "A y C son correctas.";
 choices[62][2] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza flechas para representar las actividades, que se conectan en nodos para mostrar sus dependencias.";
 choices[62][3] = "Ninguna de las anteriores es correcta";
 answers[62] = choices[62][2];
 units[62] = "28";
 comments[62] = "Id Pregunta: 6147. ";


//  Id pregunta: 6179 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Una ventaja del procesado de documentos XML usando SAX (frente a DOM) es:";
 choices[63]= new Array();
 choices[63][0] = "Es posible la modificaci&oacute;n de los datos en memoria.";
 choices[63][1] = "Procesa el documento completo.";
 choices[63][2] = "En el procesado de documentos grandes consume menos memoria.";
 choices[63][3] = "Todas las anteriores son ventajas de SAX frente a DOM.";
 answers[63] = choices[63][2];
 units[63] = "69";
 comments[63] = "Id Pregunta: 6179. ";


//  Id pregunta: 6258 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de la lista siguiente responde a patrones creacionales de GoF (Gang of Four)?";
 choices[64]= new Array();
 choices[64][0] = "Facade, Composite, Bridge";
 choices[64][1] = "Strategy, Proxy, Iterator";
 choices[64][2] = "Builder, Abstract Factory, Prototype";
 choices[64][3] = "MVC, Session, Router";
 answers[64] = choices[64][2];
 units[64] = "60";
 comments[64] = "Id Pregunta: 6258. TICB-2009, bloque desarrollo";


//  Id pregunta: 6320 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Los ficheros inversos se utilizan preferentemente en:";
 choices[65]= new Array();
 choices[65][0] = "Bases de datos relacionales.";
 choices[65][1] = "Bases de datos jer&aacute;rquicas.";
 choices[65][2] = "Sistemas de recuperaci&oacute;n de informaci&oacute;n";
 choices[65][3] = "Bases de datos reticulares.";
 answers[65] = choices[65][2];
 units[65] = "96";
 comments[65] = "Id Pregunta: 6320. ";


//  Id pregunta: 6387 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[66]= new Array();
 choices[66][0] = "No";
 choices[66][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[66][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[66][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[66] = choices[66][2];
 units[66] = "43";
 comments[66] = "Id Pregunta: 6387. Art&iacute;culo 3.3 RD 1671/2009";


//  Id pregunta: 6541 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Una tarjeta de memoria";
 choices[67]= new Array();
 choices[67][0] = "Puede procesar informaci&oacute;n";
 choices[67][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[67][2] = "Nunca puede procesar informaci&oacute;n";
 choices[67][3] = "Son un tipo de tarjeta inteligente";
 answers[67] = choices[67][2];
 units[67] = "111";
 comments[67] = "Id Pregunta: 6541. ";


//  Id pregunta: 6626 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  El modelo CMM de Ingenier&iacute;a de Software consta de:";
 choices[68]= new Array();
 choices[68][0] = "5 niveles, de los cuales todos se descomponen en &aacute;reas de procesos clave";
 choices[68][1] = "5 niveles, de los cuales todos excepto el nivel 1 se descomponen en &aacute;reas de procesos clave";
 choices[68][2] = "5 niveles, de los cuales todos excepto el nivel 5 se descomponen en &aacute;reas de procesos clave";
 choices[68][3] = "6 niveles que se descomponen en &aacute;reas de procesos clave y estas a su vez se organizan seg&uacute;n caracter&iacute;sticas comunes";
 answers[68] = choices[68][1];
 units[68] = "87";
 comments[68] = "Id Pregunta: 6626. ";


//  Id pregunta: 7167 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Se&ntilde;ale cu&aacute;l de las siguientes licencias es la &uacute;nica que puede considerarse licencia de software libre compatible con la GNU GPL:";
 choices[69]= new Array();
 choices[69][0] = "Sun Community Source License";
 choices[69][1] = "Apache License. Version 2.0";
 choices[69][2] = "Microsoft Public License (MS-OL)";
 choices[69][3] = "GNU Lesser General Public License (LGPL)";
 answers[69] = choices[69][3];
 units[69] = "61";
 comments[69] = "Id Pregunta: 7167. Examen TIC B 2009";


//  Id pregunta: 7176 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l es el est&aacute;ndar de la tarjeta f&iacute;sica del DNI electr&oacute;nico?";
 choices[70]= new Array();
 choices[70][0] = "ISO-7816-1";
 choices[70][1] = "PCKS#11";
 choices[70][2] = "ISO-17789";
 choices[70][3] = "ISO-7815-1";
 answers[70] = choices[70][0];
 units[70] = "74";
 comments[70] = "Id Pregunta: 7176. Examen TIC B 2009";


//  Id pregunta: 7280 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  En un entorno de virtualizaci&oacute;n de m&aacute;quinas, &iquest;cu&aacute;l de los siguientes elementos est&aacute; m&aacute;s pr&oacute;ximo al hardware?";
 choices[71]= new Array();
 choices[71][0] = "Hipervisor";
 choices[71][1] = "VMM (Virtual Machine Monitor)";
 choices[71][2] = "Sistema operativo hospedado";
 choices[71][3] = "HBA (host Bus Adapter)";
 answers[71] = choices[71][0];
 units[71] = "119";
 comments[71] = "Id Pregunta: 7280. Examen TIC B 2009";


//  Id pregunta: 7793 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   En el modelo de comunicaciones TCP/IP, cuando un cliente inicia una sesi&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = " El campo SYN del primer segmento TCP es igual a 0.";
 choices[72][1] = " El campo SYN del primer segmento TCP es igual a 1.";
 choices[72][2] = " El campo RST del primer segmento TCP es igual a 1.";
 choices[72][3] = " El campo PSH del primer segmento TCP es igual a 1.";
 answers[72] = choices[72][1];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7793. Map 2005";


//  Id pregunta: 7794 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n, &iquest;qu&eacute; se entiende como grado de una tabla?";
 choices[73]= new Array();
 choices[73][0] = " El n&uacute;mero de filas de la tabla.";
 choices[73][1] = " El n&uacute;mero de columnas de la tabla.";
 choices[73][2] = " El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n.";
 choices[73][3] = " El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas.";
 answers[73] = choices[73][1];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7794. Map 2005";


//  Id pregunta: 7801 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   &iquest;Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments)?";
 choices[74]= new Array();
 choices[74][0] = " X/OPEN.";
 choices[74][1] = " ACE.";
 choices[74][2] = " OSF.";
 choices[74][3] = " IEEE.";
 answers[74] = choices[74][3];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7801. Map 2005";


//  Id pregunta: 7953 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   En el modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman, la actividad de modificaci&oacute;n del c&oacute;digo fuente de un m&oacute;dulo con la finalidad de adecuarlo para futuros cambios, recibe la denominaci&oacute;n de:";
 choices[75]= new Array();
 choices[75][0] = " Ingenier&iacute;a Inversa de procesos.";
 choices[75][1] = " Reestructuraci&oacute;n del software.";
 choices[75][2] = " Ingenier&iacute;a de la Integraci&oacute;n de m&oacute;dulos.";
 choices[75][3] = " Ingenier&iacute;a Avanzada.";
 answers[75] = choices[75][1];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 7953. Map 2006";


//  Id pregunta: 7963 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)   El impulso de las redes WLAN (Wireless Local Area Network) se ha visto rodeado de fuertes cr&iacute;ticas respecto a la seguridad que ofrecen a los usuarios, ya que las se&ntilde;ales se transportan a trav&eacute;s del aire, que es un entorno que permite a un hacker/craker interceptar dichas se&ntilde;ales. &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a los est&aacute;ndares y protocolos de seguridad desarrollados para las redes WLAN NO es cierta?";
 choices[76]= new Array();
 choices[76][0] = " El protocolo WEP (Wired Equivalent Privacy) se dise&ntilde;&oacute; para asegurar el enlace de radio entre dispositivos en redes IEEE (Institute of Electrical and Electronics Engineers) 802.11 y utiliza el algoritmo de cifrado sim&eacute;trico RC4.";
 choices[76][1] = " El protocolo WEP din&aacute;mico fue creado, como soluci&oacute;n temporal para resolver los problemas de seguridad del protocolo WEP, y est&aacute; basado en el est&aacute;ndar IEEE 802.1x.";
 choices[76][2] = " El protocolo WPA (Wi-fi Protected Access) define los modos de trabajo WPA-PERSONAL y WPAENTERPRISE.";
 choices[76][3] = " IEEE 802.1i es el est&aacute;ndar que ha definido una arquitectura m&aacute;s robusta y segura para las redes inal&aacute;mbricas. MAP 2007";
 answers[76] = choices[76][3];
 units[76] = "NULL";
 comments[76] = "Id Pregunta: 7963. Map 2006";


//  Id pregunta: 7967 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)   &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?";
 choices[77]= new Array();
 choices[77][0] = " WDSL.";
 choices[77][1] = " SOAP.";
 choices[77][2] = " UDDI.";
 choices[77][3] = " XHTML.";
 answers[77] = choices[77][2];
 units[77] = "NULL";
 comments[77] = "Id Pregunta: 7967. Map 2007";


//  Id pregunta: 7987 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)   Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n de la vigencia de un certificado?";
 choices[78]= new Array();
 choices[78][0] = " Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado.";
 choices[78][1] = " Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por este, un tercero autorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica.";
 choices[78][2] = " Resoluci&oacute;n judicial o administrativa que lo ordene.";
 choices[78][3] = " Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador de servicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso.";
 answers[78] = choices[78][3];
 units[78] = "NULL";
 comments[78] = "Id Pregunta: 7987. Map 2007";


//  Id pregunta: 8002 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)   &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSDAAPP v.3.0?";
 choices[79]= new Array();
 choices[79][0] = " Ponderaci&oacute;n Lineal.";
 choices[79][1] = " Permutaci&oacute;n.";
 choices[79][2] = " Prometh&eacute;e.";
 choices[79][3] = " Distancia al Ideal (TOPSIS).";
 answers[79] = choices[79][1];
 units[79] = "NULL";
 comments[79] = "Id Pregunta: 8002. Map 2007";


//  Id pregunta: 8008 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)   Los sistemas de almacenes de bases de datos pueden implementarse utilizando diferentes tipos de esquemas f&iacute;sicos : ROLAP, MOLAP, HOLAP, etc., &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[80]= new Array();
 choices[80][0] = " En ROLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales.";
 choices[80][1] = " Ejemplos de sistemas MOLAP son: Informix Metacube u Oracle Discover.";
 choices[80][2] = " Ejemplos de sistema ROLAP son: Oracle Express o el Hyperion Enterprise.";
 choices[80][3] = " En MOLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales, produci&eacute;ndose correspondencia entre el nivel l&oacute;gico y el nivel f&iacute;sico, lo que en general aporta especializaci&oacute;n que se traduce generalmente en mayor eficiencia.";
 answers[80] = choices[80][3];
 units[80] = "NULL";
 comments[80] = "Id Pregunta: 8008. Map 2007";


//  Id pregunta: 8465 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes NO es una etiqueta HTML?:";
 choices[81]= new Array();
 choices[81][0] = "&lt;em&gt;&lt;/em&gt;";
 choices[81][1] = "&lt;meta&gt;";
 choices[81][2] = "&lt;tc&gt;&lt;/tc&gt;";
 choices[81][3] = "&lt;body&gt;&lt;/body&gt;";
 answers[81] = choices[81][2];
 units[81] = "69";
 comments[81] = "Id Pregunta: 8465. Analista Ayto. Madrid 2010";


//  Id pregunta: 8942 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[82]= new Array();
 choices[82][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[82][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[82][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[82][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[82] = choices[82][2];
 units[82] = "43";
 comments[82] = "Id Pregunta: 8942. ";


//  Id pregunta: 8960 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Los pilares de CRM son:";
 choices[83]= new Array();
 choices[83][0] = "Estrategia, personas, servicios, tecnologias";
 choices[83][1] = "Estrategia, personas, gestion, tecnologias";
 choices[83][2] = "Estrategia, clientes, servicios, tecnologias";
 choices[83][3] = "Estrategias, personas, procesos, tecnologias";
 answers[83] = choices[83][3];
 units[83] = "65";
 comments[83] = "Id Pregunta: 8960. ";


//  Id pregunta: 9019 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  La funci&oacute;n de un repetidor en una l&iacute;nea telef&oacute;nica es &hellip;";
 choices[84]= new Array();
 choices[84][0] = "Amplificar la potencia de las se&ntilde;ales vocales.";
 choices[84][1] = "Compensar la atenuaci&oacute;n y corregir la deformaci&oacute;n de las corrientes vocales.";
 choices[84][2] = "Corregir la paradiafon&iacute;a de la l&iacute;nea.";
 choices[84][3] = "Ninguna de las anteriores";
 answers[84] = choices[84][1];
 units[84] = "99";
 comments[84] = "Id Pregunta: 9019. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9041 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Sistema de Grid Computing";
 choices[85]= new Array();
 choices[85][0] = "Globus Toolkit";
 choices[85][1] = "Nimbus";
 choices[85][2] = "Eucaliptus";
 choices[85][3] = "Gluster";
 answers[85] = choices[85][0];
 units[85] = "45";
 comments[85] = "Id Pregunta: 9041. ";


//  Id pregunta: 9052 Año de creación de pregunta: 2015-01-01
 questions[86]= "87)  LA administraci&oacute;n ha licitado un contrato de servicios, cuyo valor de adjudicaci&oacute;n es de 300.000 euros. &iquest;D&oacute;nde hay que publicar el acuerdo?";
 choices[86]= new Array();
 choices[86][0] = "En el perfil del contratante y en el BOE.";
 choices[86][1] = "En el perfil del contratante en el BOE y en el DOUE";
 choices[86][2] = "En el BOE y en el DOUE";
 choices[86][3] = "En el perfil del contratante &uacute;nicamente.";
 answers[86] = choices[86][1];
 units[86] = "41";
 comments[86] = "Id Pregunta: 9052. ";


//  Id pregunta: 9057 Año de creación de pregunta: 2020-01-01
 questions[87]= "88)  &iquest;Cual de las siguientes NO es una herramienta de revisi&oacute;n de la usabilidad ?";
 choices[87]= new Array();
 choices[87][0] = "ACCWarning";
 choices[87][1] = "A-PRompt";
 choices[87][2] = "HiCaption";
 choices[87][3] = "MAGPie";
 answers[87] = choices[87][0];
 units[87] = "39";
 comments[87] = "Id Pregunta: 9057. ";


//  Id pregunta: 9117 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  &iquest;C&oacute;mo es el procesamiento en un sistema SIMD?";
 choices[88]= new Array();
 choices[88][0] = "As&iacute;ncrono";
 choices[88][1] = "Secuencial";
 choices[88][2] = "S&iacute;ncrono";
 choices[88][3] = "Ninguna respuesta es correcta";
 answers[88] = choices[88][2];
 units[88] = "45";
 comments[88] = "Id Pregunta: 9117. ";


//  Id pregunta: 9401 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  El modo de transporte del primer est&aacute;ndar ADSL, UIT-T/G.992.1 de 1999, era el ATM, a cuyo efecto, una trama Ethernet de 1.300 bytes se convert&iacute;a en (aproximadamente):";
 choices[89]= new Array();
 choices[89][0] = "1300 x 53 = 68.900 celdas ATM";
 choices[89][1] = "1300 / 48 = 27,1 ? 28 celdas ATM";
 choices[89][2] = "1300 / 53 = 24,5 ? 25 celdas ATM.";
 choices[89][3] = "Ninguna de las anteriores";
 answers[89] = choices[89][1];
 units[89] = "109";
 comments[89] = "Id Pregunta: 9401. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9459 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  &iquest;Qu&eacute; es el acoplamiento entre m&oacute;dulos?:";
 choices[90]= new Array();
 choices[90][0] = "Fan-in.";
 choices[90][1] = "Fan-out.";
 choices[90][2] = "Grado de interdependencia entre m&oacute;dulos.";
 choices[90][3] = "N&uacute;mero de clases repetidas en los dos m&oacute;dulos.";
 answers[90] = choices[90][2];
 units[90] = "84";
 comments[90] = "Id Pregunta: 9459. ";


//  Id pregunta: 9528 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  &iquest;Qu&eacute; factor afecta a la calidad de servicio en internet?";
 choices[91]= new Array();
 choices[91][0] = "Ancho de banda";
 choices[91][1] = "Jitter o variaci&oacute;n de retardo";
 choices[91][2] = "Eco";
 choices[91][3] = "Todas las respuestas anteriores son correctas";
 answers[91] = choices[91][3];
 units[91] = "117";
 comments[91] = "Id Pregunta: 9528. ";


//  Id pregunta: 9546 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  Seg&uacute;n la LSSI,  Los prestadores de servicios de la sociedad de la informaci&oacute;n que faciliten enlaces a otros contenidos o incluyan en los suyos directorios o instrumentos de b&uacute;squeda de contenidos no ser&aacute;n responsables por la informaci&oacute;n a la que dirijan a los destinatarios de sus servicios, siempre que ";
 choices[92]= new Array();
 choices[92][0] = "No tengan conocimiento efectivo de que la actividad o la informaci&oacute;n a la que remiten o recomiendan es il&iacute;cita o de que lesiona bienes o derechos de un tercero susceptibles de indemnizaci&oacute;n";
 choices[92][1] = "A&uacute;n teniendo conocimiento de lo estipulado en la respuesta a), act&uacute;en con diligencia para suprimir o inutilizar el enlace correspondiente.";
 choices[92][2] = "Las respuestas a) y b) son correctas";
 choices[92][3] = "Ninguna de las anteriores";
 answers[92] = choices[92][2];
 units[92] = "30";
 comments[92] = "Id Pregunta: 9546. ";


//  Id pregunta: 9590 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  Seg&uacute;n se dispone en la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, los registros electr&oacute;nicos permitir&aacute;n la presentaci&oacute;n de solicitudes:";
 choices[93]= new Array();
 choices[93][0] = "Exclusivamente en los mismos horarios que los registros presenciales.";
 choices[93][1] = "Exclusivamente los d&iacute;as laborables del a&ntilde;o, durante las 24 horas. ";
 choices[93][2] = "Todos los d&iacute;as del a&ntilde;o, durante las 24 horas. ";
 choices[93][3] = "Exclusivamente los d&iacute;as h&aacute;biles del a&ntilde;o, durante las 24 horas.";
 answers[93] = choices[93][2];
 units[93] = "43";
 comments[93] = "Id Pregunta: 9590. Examen TIC A2 2011 interna";


//  Id pregunta: 10176 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  El uso del paradigma de OO se caracteriza por&hellip;.";
 choices[94]= new Array();
 choices[94][0] = "&hellip; el bajo acoplamiento y fuerte cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[94][1] = "&hellip; el alto acoplamiento y d&eacute;bil cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[94][2] = "La Reusabilidad no se encuentra entre sus objetivos";
 choices[94][3] = "La mayor dificultad de la programaci&oacute;n OO reduce la mantenibilidad y modificabilidad de los programas";
 answers[94] = choices[94][0];
 units[94] = "82";
 comments[94] = "Id Pregunta: 10176. ";


//  Id pregunta: 10278 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Se&ntilde;ale el m&eacute;todo de inferencia no aplicable a marcos";
 choices[95]= new Array();
 choices[95][0] = "Deducci&oacute;n de valores de slots";
 choices[95][1] = "Actualizaci&oacute;n de valores de slots";
 choices[95][2] = "Equiparaci&oacute;n";
 choices[95][3] = "Emparejamiento";
 answers[95] = choices[95][3];
 units[95] = "64";
 comments[95] = "Id Pregunta: 10278. ";


//  Id pregunta: 10472 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Respecto a los certificados X.509 v3:";
 choices[96]= new Array();
 choices[96][0] = "Las extensiones se clasifican en cr&iacute;ticas, no criticas y recomendables.";
 choices[96][1] = "Las extensiones no cr&iacute;ticas pueden ignorarse si no se pueden procesar o se decide no hacerlo.";
 choices[96][2] = "Un certificado s&oacute;lo puede contener una extensi&oacute;n de un determinado tipo.";
 choices[96][3] = "No pueden definirse extensiones para uso privado.";
 answers[96] = choices[96][1];
 units[96] = "73";
 comments[96] = "Id Pregunta: 10472. ";


//  Id pregunta: 10539 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Se&ntilde;ale la respuesta incorrecta respecto a MPLS y VPLS:";
 choices[97]= new Array();
 choices[97][0] = "RSVP-TE y LDP son protocolos de establecimiento de camino";
 choices[97][1] = "en MPLS el camino establecido es bidireccional";
 choices[97][2] = "VPLS permite conexiones muchos a muchos mientras que MPLS es punto a punto";
 choices[97][3] = "el campo de etiqueta en MPLS es de 20 bits";
 answers[97] = choices[97][1];
 units[97] = "100";
 comments[97] = "Id Pregunta: 10539. ";


//  Id pregunta: 10557 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Cual es la &uacute;ltima versi&oacute;n de COBIT";
 choices[98]= new Array();
 choices[98][0] = "v4";
 choices[98][1] = "V4.1";
 choices[98][2] = "v5";
 choices[98][3] = "v6";
 answers[98] = choices[98][2];
 units[98] = "31, 32, 33";
 comments[98] = "Id Pregunta: 10557. Isaca lanz&oacute; el 10 de abril del 2012 COBIT 5";


//  Id pregunta: 10567 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[99]= new Array();
 choices[99][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[99][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[99][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[99][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[99] = choices[99][0];
 units[99] = "32";
 comments[99] = "Id Pregunta: 10567. ";


