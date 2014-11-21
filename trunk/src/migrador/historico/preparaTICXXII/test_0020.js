/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 1 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes es una herramienta inform&aacute;tica de apoyo a los compradores p&uacute;blicos?";
 choices[0]= new Array();
 choices[0][0] = "PROS@.";
 choices[0][1] = "ISTMO.";
 choices[0][2] = "SSD-AAPP.";
 choices[0][3] = "Ninguna de las anteriores.";
 answers[0] = choices[0][2];
 units[0] = "34";
 comments[0] = "Id Pregunta: 1. Modificada por JCED Preparatic XVII";


//  Id pregunta: 8 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes puntos de verificaci&oacute;n de WAI (en la norma WCAG 1.0) no es de prioridad 1?";
 choices[1]= new Array();
 choices[1][0] = "&quot;Titule cada marco para facilitar la identificaci&oacute;n y navegaci&oacute;n de los mismos&quot;";
 choices[1][1] = "&quot;En las tablas de datos, identifique los encabezamientos de fila y columna&quot;";
 choices[1][2] = "&quot;Asegure que toda la informaci&oacute;n transmitida a trav&eacute;s de los colores tambi&eacute;n est&eacute; disponible sin color, por ejemplo mediante el contexto o por marcadores&quot;";
 choices[1][3] = "&quot;Utilice hojas de estilo para controlar la maquetaci&oacute;n y la presentaci&oacute;n&quot;";
 answers[1] = choices[1][3];
 units[1] = "39";
 comments[1] = "Id Pregunta: 8. ";


//  Id pregunta: 146 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  El instituto ANSI tiene homologados, desde hace tiempo, diversos lenguajes, entre los que no se encuentra el:";
 choices[2]= new Array();
 choices[2][0] = "COBOL";
 choices[2][1] = "PROLOG";
 choices[2][2] = "FORTRAN";
 choices[2][3] = "C";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 146. Todos estan ya hologados, pero FORTRAN fue el ultimo en 2007";


//  Id pregunta: 205 Año de creación de pregunta: 2004-01-01
 questions[3]= "4)  Para el an&aacute;lisis de la gesti&oacute;n de riesgos:";
 choices[3]= new Array();
 choices[3][0] = "usaremos el proyecto MABER de la administraci&oacute;n";
 choices[3][1] = "seguiremos las recomendaciones de la herramienta NEDAES";
 choices[3][2] = "utilizaremos las bases sentadas por ESTROFA";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][3];
 units[3] = "33";
 comments[3] = "Id Pregunta: 205. ";


//  Id pregunta: 246 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  En una organizaci&oacute;n de tipo dinosaurio:";
 choices[4]= new Array();
 choices[4][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[4][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[4][2] = "El HW, el desarrollo y las decisiones no se descentralizan";
 choices[4][3] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 answers[4] = choices[4][2];
 units[4] = "22";
 comments[4] = "Id Pregunta: 246. ";


//  Id pregunta: 271 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Indicar la verdadera respecto a la estructura de un sistema de informaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "En la estructura horizontal, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones o  procedimientos";
 choices[5][1] = "En la estructura horizontal, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones y procedimientos";
 choices[5][2] = "En la estructura vertical, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones o procedimientos";
 choices[5][3] = "En la estructura vertical, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones y procedimientos";
 answers[5] = choices[5][0];
 units[5] = "21";
 comments[5] = "Id Pregunta: 271. ";


//  Id pregunta: 436 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, s&oacute;lo una de las siguientes definiciones es correcta:";
 choices[6]= new Array();
 choices[6][0] = "Obra en colaboraci&oacute;n: aquella resultado de la colaboraci&oacute;n de varios autores, correspondiendo el derecho a todos ellos en la proporci&oacute;n que determinen";
 choices[6][1] = "Obra compuesta: aquella obra nueva que incorpore una obra existente con la colaboraci&oacute;n del autor de &eacute;sta &uacute;ltima";
 choices[6][2] = "Las 2 anteriores son definiciones correctas";
 choices[6][3] = "Las 2 primeras son definiciones incorrectas";
 answers[6] = choices[6][0];
 units[6] = "36";
 comments[6] = "Id Pregunta: 436. ";


//  Id pregunta: 497 Año de creación de pregunta: 2003-01-01
 questions[7]= "8)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/1999 del 13 de Diciembre, para ejercer los derechos de rectificaci&oacute;n y/o cancelaci&oacute;n se necesita:";
 choices[7]= new Array();
 choices[7][0] = "Nada, se ejercen gratuitamente";
 choices[7][1] = "Pagar solo los gastos ocasionados por la rectificaci&oacute;n";
 choices[7][2] = "Se necesita un notario";
 choices[7][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[7] = choices[7][0];
 units[7] = "29";
 comments[7] = "Id Pregunta: 497. ";


//  Id pregunta: 535 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l es la variable m&aacute;s importante en un modelo PERT?";
 choices[8]= new Array();
 choices[8][0] = "riesgo";
 choices[8][1] = "coste";
 choices[8][2] = "impacto";
 choices[8][3] = "tiempo";
 answers[8] = choices[8][3];
 units[8] = "28";
 comments[8] = "Id Pregunta: 535. ";


//  Id pregunta: 642 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[9]= new Array();
 choices[9][0] = "El modelo b&aacute;sico de referencia para la Interconexi&oacute;n de Sistemas Abiertos de ISO consiste en la arquitectura OSI, que se basa en las especificaciones de IEEE.";
 choices[9][1] = "La instituci&oacute;n p&uacute;blica IEEE genera las normas m&aacute;s avanzados dentro del campo de estandarizaci&oacute;n de redes locales.";
 choices[9][2] = "El programa IDABC tiene como uno de sus fines promover la colaboraci&oacute;n entre las administraciones p&uacute;blicas de los distintos pa&iacute;ses europeos.";
 choices[9][3] = "NIST fija los est&aacute;ndares federales de tratamiento de la informaci&oacute;n que las agencias gubernamentales deben seguir en la contrataci&oacute;n de software y hardware.";
 answers[9] = choices[9][1];
 units[9] = "40";
 comments[9] = "Id Pregunta: 642. ";


//  Id pregunta: 735 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  De acuerdo con lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, los contratos celebrados por v&iacute;a electr&oacute;nica:";
 choices[10]= new Array();
 choices[10][0] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que act&uacute;e un tercero como testigo";
 choices[10][1] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que a posteriori se ratifiquen ante notario o registrador";
 choices[10][2] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que en los mismos intervenga un abogado o procurador";
 choices[10][3] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que haya consentimiento y el resto de requisitos necesarios para su validez como cualquier otro contrato";
 answers[10] = choices[10][3];
 units[10] = "30";
 comments[10] = "Id Pregunta: 735. Examen TIC MAP B 2004";


//  Id pregunta: 910 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Pueden convivir marcos, reglas y restricciones en un mismo sistema basado en conocimiento?:";
 choices[11]= new Array();
 choices[11][0] = "Si";
 choices[11][1] = "No, pero reglas y restricciones si";
 choices[11][2] = "No, pero reglas y marcos si";
 choices[11][3] = "No";
 answers[11] = choices[11][0];
 units[11] = "64";
 comments[11] = "Id Pregunta: 910. ";


//  Id pregunta: 1103 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  En Java, al declarar una variable de tipo array";
 choices[12]= new Array();
 choices[12][0] = "No es necesario indicar la longitud del objeto";
 choices[12][1] = "Es necesario indicar la longitud m&aacute;xima del objeto";
 choices[12][2] = "Es necesario indicar la longitud exacta del objeto";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = choices[12][0];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1103. JCED - Preparatic XVII";


//  Id pregunta: 1674 Año de creación de pregunta: 2004-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes comandos SQL pertenece al DDL (Lenguaje de definici&oacute;n de datos)?";
 choices[13]= new Array();
 choices[13][0] = "SELECT";
 choices[13][1] = "CREATE";
 choices[13][2] = "INSERT";
 choices[13][3] = "UPDATE";
 answers[13] = choices[13][1];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1674. ";


//  Id pregunta: 1771 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  Respecto a JNI";
 choices[14]= new Array();
 choices[14][0] = "Se sigue conservando la portabilidad universal";
 choices[14][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[14][2] = " permite utilizar clases java desde aplicaciones nativas.";
 choices[14][3] = "B y C son correctas";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1771. ";


//  Id pregunta: 1846 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;A qu&eacute; hace referencia las siglas WAPI?";
 choices[15]= new Array();
 choices[15][0] = "Wireless Advanced Privacy Infrastructure";
 choices[15][1] = "Workflow Application Programming Interface";
 choices[15][2] = "Wired Advanced Professional Institute";
 choices[15][3] = "Wireless Application Programming Interface";
 answers[15] = choices[15][1];
 units[15] = "71";
 comments[15] = "Id Pregunta: 1846. ";


//  Id pregunta: 1866 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Los documentos de la serie PKCS son especificaciones producidas por los Laboratorios RSA. Se&ntilde;ale la falsa: ";
 choices[16]= new Array();
 choices[16][0] = "PKCS#3 Protocolo de acuerdo de claves  Diffie-Hellman";
 choices[16][1] = "PKCS#11 Cryptoki";
 choices[16][2] = "PKCS#1 Standard de encriptaci&oacute;n RSA";
 choices[16][3] = "La primera es falsa";
 answers[16] = choices[16][3];
 units[16] = "74";
 comments[16] = "Id Pregunta: 1866. ";


//  Id pregunta: 2020 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  En relaci&oacute;n con la &quot;reingenier&iacute;a de sistemas&quot; indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[17]= new Array();
 choices[17][0] = "La reingenier&iacute;a es la mejora de los sistemas existentes de modo que la inversi&oacute;n resulte muy rentable, independientemente de que dicha mejora pueda ser obtenida con un nuevo desarrollo.";
 choices[17][1] = "La reingenier&iacute;a debe tener bajo coste, hacerse en poco tiempo, tener poco riesgo y dar un valor a&ntilde;adido.";
 choices[17][2] = "La reingener&iacute;a trabaja todos los niveles de abstracci&oacute;n, desde la implementaci&oacute;n hasta el dise&ntilde;o.";
 choices[17][3] = "La reingenier&iacute;a que s&oacute;lo requiere el conocimiento de los interfaces de sistema se llama ingenier&iacute;a inversa o modernizaci&oacute;n de caja blanca.";
 answers[17] = choices[17][3];
 units[17] = "91";
 comments[17] = "Id Pregunta: 2020. Examen TIC MAP B 2004";


//  Id pregunta: 2579 Año de creación de pregunta: 2003-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes no es un Lenguaje orientado a objetos?";
 choices[18]= new Array();
 choices[18][0] = "Eiffel";
 choices[18][1] = "C++";
 choices[18][2] = "Smalltalk";
 choices[18][3] = "C";
 answers[18] = choices[18][3];
 units[18] = "82";
 comments[18] = "Id Pregunta: 2579. ";


//  Id pregunta: 2626 Año de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;En el Modelo Entidad Relaci&oacute;n, qu&eacute; es el tipo de correspondencia?";
 choices[19]= new Array();
 choices[19][0] = "Es el n&uacute;mero de entidades que participan en una asociaci&oacute;n.";
 choices[19][1] = "Representa el tipo de entidades que participan en una asociaci&oacute;n";
 choices[19][2] = "Es el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de una entidad que pueden estar asociadas con una ocurrencia de otra u otras entidades participantes en la asociaci&oacute;n.";
 choices[19][3] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada entidad conectada que pueden intervenir en una ocurrencia de la asociaci&oacute;n.";
 answers[19] = choices[19][3];
 units[19] = "80";
 comments[19] = "Id Pregunta: 2626. ";


//  Id pregunta: 2729 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  Uno de los objetivos principales de los Sistemas de Informaci&oacute;n es:";
 choices[20]= new Array();
 choices[20][0] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[20][1] = "Interconectar las distintas sedes de la organizaci&oacute;n";
 choices[20][2] = "Aumentar la complejidad de los procesos de la organizaci&oacute;n";
 choices[20][3] = "Reducir el n&uacute;mero de empleados";
 answers[20] = choices[20][0];
 units[20] = "77";
 comments[20] = "Id Pregunta: 2729. ";


//  Id pregunta: 2926 Año de creación de pregunta: 2009-01-01
 questions[21]= "22)  En GPRS la velocidad m&aacute;xima te&oacute;rica de conexi&oacute;n es:";
 choices[21]= new Array();
 choices[21][0] = "128 kbps";
 choices[21][1] = "171.2 kbps";
 choices[21][2] = "64.1 kbps";
 choices[21][3] = "56.6 kbps";
 answers[21] = choices[21][1];
 units[21] = "108";
 comments[21] = "Id Pregunta: 2926. Similar a examen TIC SS A 2003";


//  Id pregunta: 3370 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Dentro de los sistemas m&oacute;viles celulares el t&eacute;rmino 'handover' hace referencia a los problemas relativos a:";
 choices[22]= new Array();
 choices[22][0] = "Traspaso del m&oacute;vil de una c&eacute;lula a otra";
 choices[22][1] = "La incompatibilidad entre sistemas";
 choices[22][2] = "Los sistemas de directorio X.500";
 choices[22][3] = "Los problemas debidos a la saturaci&oacute;n del espectro radioel&eacute;ctrico";
 answers[22] = choices[22][0];
 units[22] = "108";
 comments[22] = "Id Pregunta: 3370. ";


//  Id pregunta: 3570 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  En una celda ATM, si el campo PT contiene el valor 100:";
 choices[23]= new Array();
 choices[23][0] = "Es una celda de datos de usuario";
 choices[23][1] = "Es una celda de gesti&oacute;n de recursos";
 choices[23][2] = "Es una celda de datos de usuario pero indica extremo a extremo la congestion de trafico";
 choices[23][3] = "Es una celda asociada al segmento F5 de OAM";
 answers[23] = choices[23][3];
 units[23] = "109";
 comments[23] = "Id Pregunta: 3570. ";


//  Id pregunta: 3592 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  La conocida norma de m&oacute;dems V.90 lleva por t&iacute;tulo:";
 choices[24]= new Array();
 choices[24][0] = "&quot;Par constituido por un m&oacute;dem digital y un m&oacute;dem anal&oacute;gico para uso en la red telef&oacute;nica p&uacute;blica conmutada (RTPC) a velocidades de se&ntilde;alizaci&oacute;n de datos de hasta 56000 bps en sentido descendente y hasta 33000 bps en sentido ascendente&quot;";
 choices[24][1] = "&quot;M&oacute;dem digital que funciona a velocidades de se&ntilde;alizaci&oacute;n de datos de hasta 64000 bps para uso en una conexi&oacute;n con conmutaci&oacute;n de circuitos a 4 hilos y en circuitos digitales arrendados punto a punto a 4 hilos&quot;";
 choices[24][2] = "&quot;M&oacute;dem para voz y datos simult&aacute;neos que funciona a una velocidad de se&ntilde;alizaci&oacute;n de voz m&aacute;s datos de 4800 bps, con conmutaci&oacute;n autom&aacute;tica opcional a velocidades de se&ntilde;alizaci&oacute;n de hasta 14400 bps para datos solamente, destinado al uso de la red telef&oacute;nica";
 choices[24][3] = "&quot;Familia de m&oacute;dems d&uacute;plex a 2 hilos que funcionan a velocidades binarias de hasta 9600 bps para uso en la red telef&oacute;nica general conmutada y en circuitos arrendados de tipo telef&oacute;nico&quot;";
 answers[24] = choices[24][0];
 units[24] = "103";
 comments[24] = "Id Pregunta: 3592. modems";


//  Id pregunta: 3720 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los conmutadores o switches LAN construyen una tabla de conmutaci&oacute;n que consiste en:";
 choices[25]= new Array();
 choices[25][0] = "Direcciones MAC y su interfaz de salida asociada";
 choices[25][1] = "Direcciones MAC y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 choices[25][2] = "Direcciones de red y su interfaz de salida apropiada";
 choices[25][3] = "Direcciones de red  y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 answers[25] = choices[25][0];
 units[25] = "102";
 comments[25] = "Id Pregunta: 3720. ";


//  Id pregunta: 3737 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Los protocolos TP0 y TP2 de OSI est&aacute;n dise&ntilde;ados para redes de tipo A (fiables). &iquest;Cu&aacute;l de las siguentes afirmaciones es correcta?:";
 choices[26]= new Array();
 choices[26][0] = "TP0 no dispone de mecanismos de checksum y TP2 s&iacute;";
 choices[26][1] = "TP2 numera las TPDUs (Transport Protocolo Data Unit) y TP0 no";
 choices[26][2] = "En TP2 existen mecanismos de restablecimiento de la conexi&oacute;n mientras que en TP0 no";
 choices[26][3] = "Ambos permiten el multiplexado Ascendente (varias conexiones de transporte pueden usar la misma de red)";
 answers[26] = choices[26][1];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3737. ";


//  Id pregunta: 3863 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  El protocolo HTTP";
 choices[27]= new Array();
 choices[27][0] = "Obliga a los servidores a escuchar en el puerto 80";
 choices[27][1] = "Utiliza el formato MIME para las respuestas ";
 choices[27][2] = "Utiliza DNS y TCP para establecer la conexi&oacute;n con el servidor";
 choices[27][3] = "Est&aacute; basado en los comandos de Un&iacute;x";
 answers[27] = choices[27][1];
 units[27] = "113";
 comments[27] = "Id Pregunta: 3863. Tanenbaum";


//  Id pregunta: 3886 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Qu&eacute; es Javascript7:";
 choices[28]= new Array();
 choices[28][0] = " Un compilador de Java.";
 choices[28][1] = "Un generador de applets Java";
 choices[28][2] = " Un applet Java que se ejecuta de forma embebida desde un lenguaje de script.";
 choices[28][3] = "Un lenguaje de script basado en la sintaxis de Java.";
 answers[28] = choices[28][3];
 units[28] = "114";
 comments[28] = "Id Pregunta: 3886. Junta Andaluc&iacute;a";


//  Id pregunta: 3918 Año de creación de pregunta: 2004-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es falsa?";
 choices[29]= new Array();
 choices[29][0] = "La longitud de la cabecera de los paquetes no es fija";
 choices[29][1] = "Usa direcciones de 128 bits";
 choices[29][2] = "Soporte intr&iacute;nseco de seguridad (Ipsec)";
 choices[29][3] = "Soporte de autoconfiguraci&oacute;n (los hosts determinan su direcci&oacute;n de manera autom&aacute;tica)";
 answers[29] = choices[29][0];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3918. ";


//  Id pregunta: 3975 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  El est&aacute;ndar EIA/TIA 568, aprobado en Julio de 1991,esta en conformidad con lo dispuesto por:";
 choices[30]= new Array();
 choices[30][0] = "CEN";
 choices[30][1] = "ISO";
 choices[30][2] = "ITU-T";
 choices[30][3] = "ANSI";
 answers[30] = choices[30][3];
 units[30] = "99";
 comments[30] = "Id Pregunta: 3975. ";


//  Id pregunta: 4254 Año de creación de pregunta: 2007-01-01
 questions[31]= "32)  Como parte de la legislaci&oacute;n para el impulso de la sociedad de la informaci&oacute;n se incluyen:";
 choices[31]= new Array();
 choices[31][0] = "La Ley 34/ 2002 de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico";
 choices[31][1] = "La Ley 59/2003 de 19 de diciembre de firma electr&oacute;nica";
 choices[31][2] = "La Directiva Comunitaria 2000/31/CE de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[31][3] = "Todas las anteriores";
 answers[31] = choices[31][3];
 units[31] = "30";
 comments[31] = "Id Pregunta: 4254. ";


//  Id pregunta: 4297 Año de creación de pregunta: 2007-01-01
 questions[32]= "33)  En M&eacute;trica Versi&oacute;n 3, el an&aacute;lisis de los hechos inesperados y an&oacute;malos que se presentan durante la realizaci&oacute;n de las actividades y tareas del proyecto:";
 choices[32]= new Array();
 choices[32][0] = "No est&aacute; contemplado";
 choices[32][1] = "Se realiza en la interfaz de Aseguramiento de la Calidad.";
 choices[32][2] = "Se realiza en la interfaz de Gesti&oacute;n de Configuraci&oacute;n.";
 choices[32][3] = "Se realiza en la interfaz de Gesti&oacute;n de Proyectos.";
 answers[32] = choices[32][3];
 units[32] = "86";
 comments[32] = "Id Pregunta: 4297. ";


//  Id pregunta: 4442 Año de creación de pregunta: 2007-01-01
 questions[33]= "34)  Dentro de las t&eacute;cnicas de planificaci&oacute;n de proyectos, podr&iacute;amos decir que una actividad es cr&iacute;tica si:";
 choices[33]= new Array();
 choices[33][0] = "No se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar Ia duraci&oacute;n total del proyecto.";
 choices[33][1] = "Es la m&aacute;s corta del proyecto.";
 choices[33][2] = "Indica el fin de Ia fase de verificaci&oacute;n y el inicio de Ia fase de validaci&oacute;n.";
 choices[33][3] = "Requiere el mayor n&uacute;mero de recursos humanos para ser realizada.";
 answers[33] = choices[33][0];
 units[33] = "27";
 comments[33] = "Id Pregunta: 4442. Castilla la mancha 06";


//  Id pregunta: 4461 Año de creación de pregunta: 2007-01-01
 questions[34]= "35)  Es un est&aacute;ndar de e-learning: ";
 choices[34]= new Array();
 choices[34][0] = "IEEE";
 choices[34][1] = "ADL";
 choices[34][2] = "LMS";
 choices[34][3] = "SCORM";
 answers[34] = choices[34][3];
 units[34] = "66";
 comments[34] = "Id Pregunta: 4461. ";


//  Id pregunta: 4729 Año de creación de pregunta: 2007-01-01
 questions[35]= "36)  Cual de los siguientes no es un formato vectorial para el tratamiento de im&aacute;genes:";
 choices[35]= new Array();
 choices[35][0] = "SVG";
 choices[35][1] = "WMF";
 choices[35][2] = "Postscript";
 choices[35][3] = "TIFF";
 answers[35] = choices[35][3];
 units[35] = "93";
 comments[35] = "Id Pregunta: 4729. Examen 2006 JCYL";


//  Id pregunta: 4772 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  Se&ntilde;ale la respuesta correcta sobre la Ley 9/2014 General de Telecomunicaciones";
 choices[36]= new Array();
 choices[36][0] = "El objetivo de esta Ley es la regulaci&oacute;n de las telecomunicaciones, que comprenden la explotaci&oacute;n de las redes y la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas y los recursos asociados";
 choices[36][1] = "Se excluye del &aacute;mbito de esta Ley la regulaci&oacute;n de los servicios de telecomunicaciones para la defensa nacional y la protecci&oacute;n civil.";
 choices[36][2] = "Las telecomunicaciones tienen la consideraci&oacute;n de servicio p&uacute;blico y se prestan en r&eacute;gimen de libre competencia";
 choices[36][3] = "La Ley regula tanto el sector de las telecomunicaciones como el de los contenidos audiovisuales";
 answers[36] = choices[36][0];
 units[36] = "110";
 comments[36] = "Id Pregunta: 4772. ";


//  Id pregunta: 4869 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  En un sistema basado en el conocimiento, &iquest;qu&eacute; diferencia hay entre el conocimiento inferencial y el conocimiento estrat&eacute;gico o de control?";
 choices[37]= new Array();
 choices[37][0] = "El conocimiento inferencial est&aacute; contenido en la base de hechos y el de control es el que se obtiene mediante inferencia";
 choices[37][1] = "Los dos son equivalentes";
 choices[37][2] = "Los sistemas basados en el conocimiento no utilizan conocimiento estrat&eacute;gico";
 choices[37][3] = "El conocimiento inferencial procede de razonamientos y el estrat&eacute;gico permite decidir qu&eacute; regla se aplica en cada momento";
 answers[37] = choices[37][3];
 units[37] = "63";
 comments[37] = "Id Pregunta: 4869. ";


//  Id pregunta: 4953 Año de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l es el organismo acreditador espa&ntilde;ol dentro de la Infraestructura de la Calidad?:";
 choices[38]= new Array();
 choices[38][0] = "AENOR.";
 choices[38][1] = "ENAC.";
 choices[38][2] = "Cualquier organismo de certificaci&oacute;n.";
 choices[38][3] = "Cualquier organismo certificado por el CEN (Centro Europeo de Normalizaci&oacute;n).";
 answers[38] = choices[38][1];
 units[38] = "92";
 comments[38] = "Id Pregunta: 4953. Examen TIC B 2007";


//  Id pregunta: 5505 Año de creación de pregunta: 2003-01-01
 questions[39]= "40)  C&uacute;al es la respuesta correcta respecto a XBRL (eXtensible Business Reporting Language)?:";
 choices[39]= new Array();
 choices[39][0] = "Es un lenguaje basado en XML";
 choices[39][1] = "Permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[39][2] = "Es posible establecer taxonom&iacute;as que clasifiquen los datos seg&uacute;n etiquetas definidas";
 choices[39][3] = "Todas son correctas";
 answers[39] = choices[39][3];
 units[39] = "69";
 comments[39] = "Id Pregunta: 5505. ";


//  Id pregunta: 5568 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.19 del IEEE?";
 choices[40]= new Array();
 choices[40][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[40][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[40][2] = "Resilient Packet Ring";
 choices[40][3] = "Traspaso entre redes";
 answers[40] = choices[40][1];
 units[40] = "101";
 comments[40] = "Id Pregunta: 5568. ";


//  Id pregunta: 5572 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;C&uacute;al de los siguientes protocolos de encaminamiento NO es interno?";
 choices[41]= new Array();
 choices[41][0] = "BGP";
 choices[41][1] = "EIGRP";
 choices[41][2] = "OSPF";
 choices[41][3] = "IGRP";
 answers[41] = choices[41][0];
 units[41] = "102";
 comments[41] = "Id Pregunta: 5572. ";


//  Id pregunta: 5765 Año de creación de pregunta: 2009-01-01
 questions[42]= "43)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos de normalizaci&oacute;n de puntuaciones no mantiene la proporcionalidad entre puntuaciones directas y normalizadas?";
 choices[42]= new Array();
 choices[42][0] = "Fracci&oacute;n del ideal";
 choices[42][1] = "Fracci&oacute;n de la suma";
 choices[42][2] = "Fracci&oacute;n del m&aacute;ximo";
 choices[42][3] = "Todas las anteriores mantienen la proporcionalidad";
 answers[42] = choices[42][0];
 units[42] = "34";
 comments[42] = "Id Pregunta: 5765. ";


//  Id pregunta: 5881 Año de creación de pregunta: 2009-01-01
 questions[43]= "44)  Por IP-SPOOFING entendemos:";
 choices[43]= new Array();
 choices[43][0] = "Captura de passwords";
 choices[43][1] = "Uso fraudulento de direcciones de enlace";
 choices[43][2] = "Suplantaci&oacute;n de direcciones de red";
 choices[43][3] = "Propagaci&oacute;n de virus";
 answers[43] = choices[43][2];
 units[43] = "111";
 comments[43] = "Id Pregunta: 5881. MAP 2008 A1";


//  Id pregunta: 5888 Año de creación de pregunta: 2009-01-01
 questions[44]= "45)  Teniendo una red IP con m&aacute;scara 255.255.240.0 &iquest;cu&aacute;ntos puestos se pueden direccionar?";
 choices[44]= new Array();
 choices[44][0] = "240";
 choices[44][1] = "512";
 choices[44][2] = "1024";
 choices[44][3] = "4094";
 answers[44] = choices[44][3];
 units[44] = "100";
 comments[44] = "Id Pregunta: 5888. MAP 2008 A1";


//  Id pregunta: 5991 Año de creación de pregunta: 2010-01-01
 questions[45]= "46)  Para eliminar una tabla de una base de datos relacional, se utiliza la sentencia DDL:";
 choices[45]= new Array();
 choices[45][0] = "Delete table.";
 choices[45][1] = "rm table.";
 choices[45][2] = "Delete table now.";
 choices[45][3] = "DROP TABLE.";
 answers[45] = choices[45][3];
 units[45] = "58";
 comments[45] = "Id Pregunta: 5991. TIC A 2009";


//  Id pregunta: 6004 Año de creación de pregunta: 2010-01-01
 questions[46]= "47)  El proceso de kerning en un texto impreso:";
 choices[46]= new Array();
 choices[46][0] = "Es el proceso por el cual se van subdividiendo los elementos que componen una p&aacute;gina en otros menores hasta llegar a los elementos m&iacute;nimos, que son los caracteres.";
 choices[46][1] = "Es el proceso por el cual se elimina el espacio excesivo entre las letras.";
 choices[46][2] = "Es el proceso por el cual se corrige la inclinaci&oacute;n de la p&aacute;gina.";
 choices[46][3] = "Es el proceso que consiste en la divisi&oacute;n de un p&aacute;rrafo de texto en las diferentes l&iacute;neas que lo componen.";
 answers[46] = choices[46][1];
 units[46] = "94";
 comments[46] = "Id Pregunta: 6004. TIC A 2009";


//  Id pregunta: 6055 Año de creación de pregunta: 2010-01-01
 questions[47]= "48)  Seg&uacute;n el RD 951/2005 de 29 de julio, el nuevo marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[47]= new Array();
 choices[47][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[47][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[47][2] = "Quejas y reclamaciones.";
 choices[47][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[47] = choices[47][1];
 units[47] = "92";
 comments[47] = "Id Pregunta: 6055. TIC A 2009";


//  Id pregunta: 6084 Año de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Qu&eacute; se entiende por SOI (Infraestructura Orientada a Servicios)?";
 choices[48]= new Array();
 choices[48][0] = "Una colecci&oacute;n de recursos de hardware y software que soportan la implantaci&oacute;n y el desarrollo de la arquitectura SOA.";
 choices[48][1] = "Se trata de una colecci&oacute;n de recursos de hardware y software que suponen una alternativa a SOA.";
 choices[48][2] = "Se trata de un concepto para el que &quot;The Open Group&quot; ha abierto un proyecto dentro del grupo de trabajo de SOA.";
 choices[48][3] = "Tanto A y C son correctas.";
 answers[48] = choices[48][3];
 units[48] = "51";
 comments[48] = "Id Pregunta: 6084. ";


//  Id pregunta: 6091 Año de creación de pregunta: 2010-01-01
 questions[49]= "50)  En relaci&oacute;n con las metodolog&iacute;as ligeras de desarrollo de software, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[49]= new Array();
 choices[49][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas.";
 choices[49][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio.";
 choices[49][2] = "La versi&oacute;n 3 de M&Eacute;TRICA, que soporta tanto desarrollos estructurados como orientados a objetos, es un claro ejemplo de metodolog&iacute;a ligera.";
 choices[49][3] = "La metodolog&iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a ligera.";
 answers[49] = choices[49][0];
 units[49] = "79";
 comments[49] = "Id Pregunta: 6091. TIC A 2009";


//  Id pregunta: 6156 Año de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Qu&eacute; tipo de licencia utiliza Samba?";
 choices[50]= new Array();
 choices[50][0] = "GPL";
 choices[50][1] = "GNU LGPL";
 choices[50][2] = "No utiliza ning&uacute;n tipo de licencia";
 choices[50][3] = "MGPL";
 answers[50] = choices[50][0];
 units[50] = "112";
 comments[50] = "Id Pregunta: 6156. ";


//  Id pregunta: 6163 Año de creación de pregunta: 2010-01-01
 questions[51]= "52)  Con respecto al cifrado de los datos en videoconferencia:";
 choices[51]= new Array();
 choices[51][0] = "En H.320 sobre RDSI se desarrollaron los est&aacute;ndares H.233 y H.234.";
 choices[51][1] = "Para las videoconferencias basadas en H.323, se desarrollaron los est&aacute;ndares  H.235.";
 choices[51][2] = "Los sistemas basados en SIP usan SRTP.";
 choices[51][3] = "Todas las anteriores son correctas.";
 answers[51] = choices[51][3];
 units[51] = "117";
 comments[51] = "Id Pregunta: 6163. ";


//  Id pregunta: 6342 Año de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones no se asocia a la Web 2.0?";
 choices[52]= new Array();
 choices[52][0] = "Facebook";
 choices[52][1] = "Wikipedia";
 choices[52][2] = "Flickr";
 choices[52][3] = "Geocities";
 answers[52] = choices[52][3];
 units[52] = "120";
 comments[52] = "Id Pregunta: 6342. ";


//  Id pregunta: 6499 Año de creación de pregunta: 2010-01-01
 questions[53]= "54)  GPL es el acr&oacute;nimo de:";
 choices[53]= new Array();
 choices[53][0] = "GNU Public License";
 choices[53][1] = "Geek Public License";
 choices[53][2] = "General Propietary License";
 choices[53][3] = "General Public License";
 answers[53] = choices[53][3];
 units[53] = "61";
 comments[53] = "Id Pregunta: 6499. ";


//  Id pregunta: 6529 Año de creación de pregunta: 2010-01-01
 questions[54]= "55)  Qu&eacute; afirmaci&oacute;n es FALSA en relaci&oacute;n al concepto Configuraci&oacute;n de referencia?";
 choices[54]= new Array();
 choices[54][0] = "Es la configuraci&oacute;n de un producto o un sistema en un momento espec&iacute;fico en el tiempo";
 choices[54][1] = "Es la configuraci&oacute;n de un producto o un sistema en un momento espec&iacute;fico en el tiempo, donde no se capturan ni la estructura ni los detalles";
 choices[54][2] = "Es la base estable para un futuro desarrollo";
 choices[54][3] = "Registro de elementos de configuraci&oacute;n afectados por una RFC";
 answers[54] = choices[54][1];
 units[54] = "98";
 comments[54] = "Id Pregunta: 6529. ";


//  Id pregunta: 6587 Año de creación de pregunta: 2010-01-01
 questions[55]= "56)  El RD 1720/2007 s&oacute;lo desarrolla las medidas de seguridad en el tratamiento de datos de car&aacute;cter personal para los ficheros";
 choices[55]= new Array();
 choices[55][0] = "automatizados";
 choices[55][1] = "no automatizados";
 choices[55][2] = "A y B son correctas";
 choices[55][3] = "A y B son incorrectas";
 answers[55] = choices[55][2];
 units[55] = "29";
 comments[55] = "Id Pregunta: 6587. ";


//  Id pregunta: 6611 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  Que NO se puede incluir en un DFD de nivel 2";
 choices[56]= new Array();
 choices[56][0] = "Procesos";
 choices[56][1] = "Decisiones L&oacute;gicas";
 choices[56][2] = "Flujos de Datos";
 choices[56][3] = "Almacenes de Datos";
 answers[56] = choices[56][1];
 units[56] = "81";
 comments[56] = "Id Pregunta: 6611. ";


//  Id pregunta: 6640 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  La principal diferencia entre la t&eacute;cnica de los Puntos de Funci&oacute;n (PF's) y los PF's Mark II es:";
 choices[57]= new Array();
 choices[57][0] = "Los PF's Mark II utilizan el concepto de transacci&oacute;n l&oacute;gica";
 choices[57][1] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros)";
 choices[57][2] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros), m&aacute;s el concepto de transacci&oacute;n l&oacute;gica";
 choices[57][3] = "Los PF's Mark II utilizan 5 elementos (Entradas, Salidas, Consultas, Ficheros e Interfaces)";
 answers[57] = choices[57][0];
 units[57] = "88";
 comments[57] = "Id Pregunta: 6640. ";


//  Id pregunta: 7284 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  Una de las grandes ventajas que aporta la virtualizaci&oacute;n de infraestructuras en un centro de datos es:";
 choices[58]= new Array();
 choices[58][0] = "Reducci&oacute;n de personal de operaciones";
 choices[58][1] = "Reducci&oacute;n de costes de mantenimiento preventivo";
 choices[58][2] = "Gesti&oacute;n del ciclo de vida de la informaci&oacute;n (ILM) m&aacute;s eficaz";
 choices[58][3] = "Gesti&oacute;n agrupada (pooled) de recursos a lo largo de toda la Organizaci&oacute;n";
 answers[58] = choices[58][3];
 units[58] = "119";
 comments[58] = "Id Pregunta: 7284. Examen TIC B 2009";


//  Id pregunta: 7323 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar utilizado para el intercambio de datos relativos al comercio electr&oacute;nico?";
 choices[59]= new Array();
 choices[59][0] = "EDIFACT";
 choices[59][1] = "ebXML";
 choices[59][2] = "XMT ";
 choices[59][3] = "UBL";
 answers[59] = choices[59][2];
 units[59] = "70";
 comments[59] = "Id Pregunta: 7323. ";


//  Id pregunta: 7326 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "CEN";
 choices[60][1] = "SETSI";
 choices[60][2] = "CENELEC";
 choices[60][3] = "Todos los anteriores son organismos europeos de normalizaci&oacute;n";
 answers[60] = choices[60][1];
 units[60] = "42";
 comments[60] = "Id Pregunta: 7326. ";


//  Id pregunta: 8203 Año de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n Pressman, una revisi&oacute;n t&eacute;cnica formal es: ";
 choices[61]= new Array();
 choices[61][0] = "Una reuni&oacute;n.";
 choices[61][1] = "Un producto del desarrollo.";
 choices[61][2] = "Un documento.";
 choices[61][3] = "La aceptaci&oacute;n del sistema. ";
 answers[61] = choices[61][0];
 units[61] = "87";
 comments[61] = "Id Pregunta: 8203. Examen TIC A1 2010";


//  Id pregunta: 8334 Año de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica 3?";
 choices[62]= new Array();
 choices[62][0] = "Perfil Jefe de Proyecto.";
 choices[62][1] = "Perfil Consultor. ";
 choices[62][2] = "Perfil Analista.";
 choices[62][3] = "Perfil Programador.";
 answers[62] = choices[62][0];
 units[62] = "86";
 comments[62] = "Id Pregunta: 8334. Examen TIC A2 2010";


//  Id pregunta: 8354 Año de creación de pregunta: 2011-01-01
 questions[63]= "64)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[63]= new Array();
 choices[63][0] = "App_Data.";
 choices[63][1] = "Bin.";
 choices[63][2] = "App_WebReferences";
 choices[63][3] = "Compilation";
 answers[63] = choices[63][1];
 units[63] = "59,115";
 comments[63] = "Id Pregunta: 8354. Examen TIC A2 2010";


//  Id pregunta: 8361 Año de creación de pregunta: 2011-01-01
 questions[64]= "65)  En el contexto de herramientas de evaluaci&oacute;n de la accesibilidad web, se&ntilde;ale la herramienta INCORRECTA: ";
 choices[64]= new Array();
 choices[64][0] = "WAVE.";
 choices[64][1] = "TrueCrypt.";
 choices[64][2] = "CSS Analyser.";
 choices[64][3] = "TAW.";
 answers[64] = choices[64][1];
 units[64] = "39";
 comments[64] = "Id Pregunta: 8361. Examen TIC A2 2010";


//  Id pregunta: 8370 Año de creación de pregunta: 2011-01-01
 questions[65]= "66)  La norma UNE 139802:2003 establece requisitos de accesibilidad del software de los ordenadores para !as personas con discapacidad, agrupados en:";
 choices[65]= new Array();
 choices[65][0] = "7 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo.";
 choices[65][1] = "8 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n.";
 choices[65][2] = "11 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido, multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros";
 choices[65][3] = "10 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido y multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros.";
 answers[65] = choices[65][3];
 units[65] = "39";
 comments[65] = "Id Pregunta: 8370. Examen TIC A2 2010";


//  Id pregunta: 8371 Año de creación de pregunta: 2011-01-01
 questions[66]= "67)  Una de las funciones primordiales del Sistema Operativo es:";
 choices[66]= new Array();
 choices[66][0] = "Gestionar la comunicaci&oacute;n con los servidores de correo.";
 choices[66][1] = "Proporcionar las herramientas ofim&aacute;ticas b&aacute;sicas.";
 choices[66][2] = "Facilitar, al menos, un navegador.";
 choices[66][3] = "Crear la interfaz del hardware con el usuario.";
 answers[66] = choices[66][3];
 units[66] = "52";
 comments[66] = "Id Pregunta: 8371. Examen TIC A2 2010";


//  Id pregunta: 8481 Año de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el well-known port del protocolo SNMP en el modo petici&oacute;n-respuesta?";
 choices[67]= new Array();
 choices[67][0] = "169.";
 choices[67][1] = "161.";
 choices[67][2] = "171.";
 choices[67][3] = "179.";
 answers[67] = choices[67][1];
 units[67] = "104";
 comments[67] = "Id Pregunta: 8481. Examen TIC A2 2010 interna";


//  Id pregunta: 8631 Año de creación de pregunta: 2011-01-01
 questions[68]= "69)  En el modelo de ciclo de vida en espiral, &iquest;en qu&eacute; actividad se decide s&iacute; continuamos con las fases siguientes?";
 choices[68]= new Array();
 choices[68][0] = "An&aacute;lisis del riesgo.";
 choices[68][1] = "Evaluaci&oacute;n de la situaci&oacute;n.";
 choices[68][2] = "Desarrollar, verificar y validar (probar).";
 choices[68][3] = "Planificar.";
 answers[68] = choices[68][3];
 units[68] = "76";
 comments[68] = "Id Pregunta: 8631. Examen TIC A2 2010 interna";


//  Id pregunta: 8670 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  Un acceso RDSI primario consta de";
 choices[69]= new Array();
 choices[69][0] = "Dos canales B y un canal D";
 choices[69][1] = "Dos canales B y ning&uacute;n canal D";
 choices[69][2] = "Treinta canales B y un canal D";
 choices[69][3] = "Treinta canales B y dos canales D";
 answers[69] = choices[69][2];
 units[69] = "103";
 comments[69] = "Id Pregunta: 8670. Examen UPM A2 2011";


//  Id pregunta: 8678 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[70]= new Array();
 choices[70][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[70][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[70][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[70][3] = "No";
 answers[70] = choices[70][0];
 units[70] = "102";
 comments[70] = "Id Pregunta: 8678. Examen UPM A2 2011";


//  Id pregunta: 8777 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  La solicitud de certificaci&oacute;n de una clave p&uacute;blica remitida a la autoridad de certificaci&oacute;n correspondiente deber&aacute; ser generada en formato:";
 choices[71]= new Array();
 choices[71][0] = "PKCS#10";
 choices[71][1] = "PKCS#12";
 choices[71][2] = "X.500";
 choices[71][3] = "X.509";
 answers[71] = choices[71][0];
 units[71] = "74";
 comments[71] = "Id Pregunta: 8777. Examen UPM A2 2011";


//  Id pregunta: 8811 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[72]= new Array();
 choices[72][0] = "&lt;% y %&gt;";
 choices[72][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[72][2] = "&lt;!- --&gt;";
 choices[72][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[72] = choices[72][0];
 units[72] = "59, 115";
 comments[72] = "Id Pregunta: 8811. Examen UPM A2 2011";


//  Id pregunta: 8824 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)   Seg&uacute;n el Real Decreto legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, &quot;toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n o fijaci&oacute;n&quot; es:";
 choices[73]= new Array();
 choices[73][0] = " Un algoritmo";
 choices[73][1] = "Un m&eacute;todo";
 choices[73][2] = "Un programa de ordenador ";
 choices[73][3] = "Un procedimiento";
 answers[73] = choices[73][2];
 units[73] = "36,37";
 comments[73] = "Id Pregunta: 8824. Examen UC3M 2010";


//  Id pregunta: 8864 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[74]= new Array();
 choices[74][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros";
 choices[74][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee";
 choices[74][2] = "Se puede modelar datos a cualquier nivel de complejidad";
 choices[74][3] = "El uso de los ficheros se puede extender a cualquier plataforma";
 answers[74] = choices[74][1];
 units[74] = "69";
 comments[74] = "Id Pregunta: 8864. Analista Ayto. Madrid 2010";


//  Id pregunta: 8887 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes no es tipo de primitiva?";
 choices[75]= new Array();
 choices[75][0] = "Received";
 choices[75][1] = "Indication";
 choices[75][2] = "Response";
 choices[75][3] = "Request";
 answers[75] = choices[75][0];
 units[75] = "100";
 comments[75] = "Id Pregunta: 8887. ";


//  Id pregunta: 8967 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[76]= new Array();
 choices[76][0] = "Lisp.";
 choices[76][1] = "Perl.";
 choices[76][2] = "Php.";
 choices[76][3] = "Python.";
 answers[76] = choices[76][3];
 units[76] = "80,81,82,83,84";
 comments[76] = "Id Pregunta: 8967. ";


//  Id pregunta: 9048 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Cu&aacute;l es la afirmaci&oacute;n correcta sobre IEEE 802";
 choices[77]= new Array();
 choices[77][0] = "802.8 es el grupo asesor de banda ancha";
 choices[77][1] = "802.7 es el grupo asesor en fibras &oacute;pticas";
 choices[77][2] = "802.10 era el grupo asesor en seguridad";
 choices[77][3] = "802.3 trata sobre el control l&oacute;gico de enlace";
 answers[77] = choices[77][2];
 units[77] = "107";
 comments[77] = "Id Pregunta: 9048. ";


//  Id pregunta: 9096 Año de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[78]= new Array();
 choices[78][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[78][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[78][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[78][3] = "Todas las anteriores son verdaderas.";
 answers[78] = choices[78][3];
 units[78] = "36";
 comments[78] = "Id Pregunta: 9096. ";


//  Id pregunta: 9119 Año de creación de pregunta: 2013-01-01
 questions[79]= "80)  Con respecto a los datos en los sistemas SMP o MMC se pueden distinguir los siguientes tipos en funci&oacute;n de su alcance";
 choices[79]= new Array();
 choices[79][0] = "Datos de alcance s&iacute;ncrono y as&iacute;ncrono";
 choices[79][1] = "Datos de alcance global y local";
 choices[79][2] = "Datos de alcance externo e interno";
 choices[79][3] = "No existe la arquitectura MMC";
 answers[79] = choices[79][1];
 units[79] = "45";
 comments[79] = "Id Pregunta: 9119. ";


//  Id pregunta: 9192 Año de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[80]= new Array();
 choices[80][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[80][1] = "A traves de la ley de patentes";
 choices[80][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[80][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[80] = choices[80][3];
 units[80] = "36";
 comments[80] = "Id Pregunta: 9192. ";


//  Id pregunta: 9223 Año de creación de pregunta: 2013-01-01
 questions[81]= "82)  La replicaci&oacute;n continua de datos (o copia en tiempo real)";
 choices[81]= new Array();
 choices[81][0] = "Es un sistema mucho m&aacute;s ventajoso que la replicaci&oacute;n discreta porque permite recuperar la informaci&oacute;n existente en cualquier momento del tiempo de forma mucho m&aacute;s r&aacute;pida";
 choices[81][1] = "Es un sistema mucho menos ventajoso que la replicaci&oacute;n discreta o backups porque requiere mucha m&aacute;s capacidad de almacenamiento";
 choices[81][2] = "Puede ser s&iacute;ncrona o as&iacute;ncrona. En el segundo caso es equivalente a replicaci&oacute;n discreta.";
 choices[81][3] = "No sirve por s&iacute; misma para garantizar la integridad de la informaci&oacute;n frente a determinadas situaciones";
 answers[81] = choices[81][3];
 units[81] = "48";
 comments[81] = "Id Pregunta: 9223. Examen TIC-A1 2011";


//  Id pregunta: 9238 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; caracter&iacute;sticas tiene shorewall?";
 choices[82]= new Array();
 choices[82][0] = "Es una herramienta de configuraci&oacute;n de gateway/firewall para GNU/Linux";
 choices[82][1] = "Se publicita como &ldquo;iptables f&aacute;cil&rdquo;";
 choices[82][2] = "Si se quiere configurar el firewall para Ipv6 se debe instalar shorewall6.";
 choices[82][3] = "Todas las anteriores son correctas.";
 answers[82] = choices[82][3];
 units[82] = "53";
 comments[82] = "Id Pregunta: 9238. ";


//  Id pregunta: 9282 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  NO es un principio general del Texto Refundido de la Ley de Contratos del Sector P&uacute;blico:";
 choices[83]= new Array();
 choices[83][0] = "Libertad de acceso a las licitaciones.";
 choices[83][1] = "No discriminaci&oacute;n e igualdad de trato entre los candidatos. ";
 choices[83][2] = "Utilizaci&oacute;n eficiente de los fondos destinados a contratos p&uacute;blicos. ";
 choices[83][3] = "Riesgo y ventura del contratante en la ejecuci&oacute;n de las obras.";
 answers[83] = choices[83][3];
 units[83] = "41";
 comments[83] = "Id Pregunta: 9282. ";


//  Id pregunta: 9286 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre el Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[84]= new Array();
 choices[84][0] = "Es un &oacute;rgano colegiado. ";
 choices[84][1] = "Supervisa la actividad del Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[84][2] = "Coordina la actuaci&oacute;n administrativa en el &aacute;mbito de las TIC y dirige las contrataciones.";
 choices[84][3] = "Difunde est&aacute;ndares, como M&eacute;trica, Sicres o Magerit. ";
 answers[84] = choices[84][1];
 units[84] = "41";
 comments[84] = "Id Pregunta: 9286. ";


//  Id pregunta: 9335 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;C&oacute;mo se denomina al subsistema de cableado estructurado que interconecta los armarios de planta de un edificio?";
 choices[85]= new Array();
 choices[85][0] = "Subsistema campus";
 choices[85][1] = "Subsistema horizontal";
 choices[85][2] = "Subsistema intermodal";
 choices[85][3] = "Subsistema troncal";
 answers[85] = choices[85][3];
 units[85] = "99";
 comments[85] = "Id Pregunta: 9335. TIC a2 AGE 2011";


//  Id pregunta: 9379 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  Acerca de las recomendaciones relativas a X.25, se puede afirmar:";
 choices[86]= new Array();
 choices[86][0] = "X.21 define el interfaz entre ETD y ETCD para terminales que operan en modo paquete en redes p&uacute;blicas";
 choices[86][1] = "X.25 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 choices[86][2] = "X.75 define el Interfaz entre ETD y ETCD para un equipo de datos arr&iacute;tmico con acceso a la facilidad de empaquetado/desempaquetado de datos (PAD), en una red X.25";
 choices[86][3] = "X.75 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 answers[86] = choices[86][3];
 units[86] = "101";
 comments[86] = "Id Pregunta: 9379. ";


//  Id pregunta: 9388 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  De las tecnolog&iacute;as 4G, se puede afirmar:";
 choices[87]= new Array();
 choices[87][0] = "WiMax alcanza velocidades de bajada inferiores a 100 Mbps";
 choices[87][1] = "LTE alcanza velocidades de bajada superiores a las que se alcanzan con WiMax";
 choices[87][2] = "WiMAX puede alcanzar velocidades de bajada superiores a 100 Mbps";
 choices[87][3] = "HSPA+ no puede superar los 25 Mbps de bajada puesto que no mantiene una conexi&oacute;n permanente con la estaci&oacute;n base";
 answers[87] = choices[87][2];
 units[87] = "108";
 comments[87] = "Id Pregunta: 9388. http://en.wikipedia.org/wiki/4G";


//  Id pregunta: 9400 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes redes WAN esta orientada a conexi&oacute;n?";
 choices[88]= new Array();
 choices[88][0] = "Una red IP";
 choices[88][1] = "Una red ATM.";
 choices[88][2] = "Una red UMTS.";
 choices[88][3] = "Ninguna de las anteriores";
 answers[88] = choices[88][1];
 units[88] = "109";
 comments[88] = "Id Pregunta: 9400. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9432 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Las tasas en materia de telecomunicaciones tiene una serie de fines. Indique el falso:";
 choices[89]= new Array();
 choices[89][0] = "Cubrir los gastos administrativos que ocasione el trabajo de regulaci&oacute;n";
 choices[89][1] = "Cubrir los gastos que ocasionen la gesti&oacute;n, control y ejecuci&oacute;n del r&eacute;gimen establecido en la ley";
 choices[89][2] = "Cubrir los gastos relativos al fomento del despliegue de redes de telecomunicaci&oacute;n";
 choices[89][3] = "Cubrir los gastos de cooperaci&oacute;n internacional, armonizaci&oacute;n y normalizaci&oacute;n y el an&aacute;lisis de mercado";
 answers[89] = choices[89][2];
 units[89] = "110";
 comments[89] = "Id Pregunta: 9432. ";


//  Id pregunta: 9485 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Seg&uacute;n Metricav3, &iquest;qu&eacute; participante se encarga de definir los requisitos de sistema?";
 choices[90]= new Array();
 choices[90][0] = "Jefe de proyecto";
 choices[90][1] = "Consultor";
 choices[90][2] = "Analista";
 choices[90][3] = "Programador";
 answers[90] = choices[90][2];
 units[90] = "78";
 comments[90] = "Id Pregunta: 9485. ";


//  Id pregunta: 9519 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  Java dispone de diferentes APIs con el fin de dar soporte para web services. La API que no est&aacute; relacionada con web services es:";
 choices[91]= new Array();
 choices[91][0] = "JAXR";
 choices[91][1] = "JAXB";
 choices[91][2] = "JAXP";
 choices[91][3] = "JTA";
 answers[91] = choices[91][3];
 units[91] = "116";
 comments[91] = "Id Pregunta: 9519. ";


//  Id pregunta: 9547 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  Seg&uacute;n la LSSI, la acci&oacute;n de cesaci&oacute;n, dirigida a obtener una sentencia que condene al demandado a cesar en una conducta contraria a dicha Ley, NO podr&aacute; ser interpuesta por:";
 choices[92]= new Array();
 choices[92][0] = "Grupos de consumidores o usuarios afectados";
 choices[92][1] = "El Ministerio Fiscal";
 choices[92][2] = "El Instituto Nacional de Consumo";
 choices[92][3] = "La Secretar&iacute;a de Estado para las Telecomunicaciones y la Sociedad de la Informaci&oacute;n";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 9547. ";


//  Id pregunta: 9595 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[93]= new Array();
 choices[93][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller) ";
 choices[93][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[93][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[93][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE ";
 answers[93] = choices[93][0];
 units[93] = "60";
 comments[93] = "Id Pregunta: 9595. Xunta Libre 2011";


//  Id pregunta: 9719 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  En Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones, CRUD";
 choices[94]= new Array();
 choices[94][0] = "es el acr&oacute;nimo de Crear, Leer/Obtener, Actualizar y Borrar (Create, Read/Retrieve, Update, Delete).";
 choices[94][1] = "es la base de arquitecturas Web RESTful (basadas en REST).";
 choices[94][2] = "tiene su origen en sentencias de base de datos relacionales.";
 choices[94][3] = "las opciones a, b y c son ciertas.";
 answers[94] = choices[94][3];
 units[94] = "58";
 comments[94] = "Id Pregunta: 9719. Examen TIC-A1 2013";


//  Id pregunta: 9755 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  En M&eacute;trica v3, la actividad &quot;Establecimiento de requisitos de implantaci&oacute;n&quot; se lleva a cabo en:";
 choices[95]= new Array();
 choices[95][0] = "ASI";
 choices[95][1] = "DSI";
 choices[95][2] = "IAS";
 choices[95][3] = "ASI y DSI";
 answers[95] = choices[95][1];
 units[95] = "86";
 comments[95] = "Id Pregunta: 9755. Actividad DSI.11. El resto de actividades referentes a implantaci&oacute;n se llevan a cabo en IAS";


//  Id pregunta: 9843 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es el m&eacute;todo que se recomienda para proteger los datos en una WLAN?";
 choices[96]= new Array();
 choices[96][0] = "Utilizar el cifrado.";
 choices[96][1] = "Utilizar el SSID de no difusi&oacute;n.";
 choices[96][2] = "Establecer la energ&iacute;a transmitida al ajuste m&aacute;s s&oacute;lido.";
 choices[96][3] = "Utilizar el canal 7 en lugar de cualquier otro canal en los espectros de 2,4 GHz.";
 answers[96] = choices[96][0];
 units[96] = "111";
 comments[96] = "Id Pregunta: 9843. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 10033 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[97]= new Array();
 choices[97][0] = "Fragmentacion. ";
 choices[97][1] = "Opciones de salto a salto.";
 choices[97][2] = "Autenticaci&oacute;n. ";
 choices[97][3] = "L&iacute;mite de saltos.";
 answers[97] = choices[97][3];
 units[97] = "100";
 comments[97] = "Id Pregunta: 10033. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10269 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En el contexto de la protecci&oacute;n de datos de car&aacute;cter personal, la figura del responsable de seguridad";
 choices[98]= new Array();
 choices[98][0] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[98][1] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 choices[98][2] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[98][3] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 answers[98] = choices[98][2];
 units[98] = "29";
 comments[98] = "Id Pregunta: 10269. Art&iacute;culo 95 del RD 1720/2007";


//  Id pregunta: 10563 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Los controles correctivos tienen como objeto:";
 choices[99]= new Array();
 choices[99][0] = "reducir el riesgo ante una debilidad existente";
 choices[99][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[99][2] = "Solucionar problemas detectados por controles detectivos";
 choices[99][3] = "Reportar errores";
 answers[99] = choices[99][2];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10563. ";


