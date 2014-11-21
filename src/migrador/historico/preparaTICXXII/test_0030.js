/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 69 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas compara cada permutaci&oacute;n posible de las alternativas, con la informaci&oacute;n que aporta para cada criterio la matriz de decisi&oacute;n?:";
 choices[0]= new Array();
 choices[0][0] = "M&eacute;todo Promethee";
 choices[0][1] = "Utilidad multiatributo";
 choices[0][2] = "Permutaci&oacute;n";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][3];
 units[0] = "34";
 comments[0] = "Id Pregunta: 69. ";


//  Id pregunta: 100 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  En relaci&oacute;n con las pruebas de conformidad,  si la comprobaci&oacute;n de que el producto satisface o no los requerimientos t&eacute;cnicos definidos en una norma es realizada por el consumidor, nos estamos refiriendo a:";
 choices[1]= new Array();
 choices[1][0] = "Comprobaci&oacute;n de pimera parte o &ldquo;first party testing&rdquo;";
 choices[1][1] = "Comprobaci&oacute;n de segunda parte o &ldquo; second party testing&rdquo;";
 choices[1][2] = "Comprobaci&oacute;n de tercera parte  o &ldquo; third party testing&rdquo;";
 choices[1][3] = "Las pruebas de conformidad no pueden ser realizadas por los consumidores";
 answers[1] = choices[1][1];
 units[1] = "42";
 comments[1] = "Id Pregunta: 100. ";


//  Id pregunta: 101 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En relaci&oacute;n con los sistemas abiertos, indique la afirmaci&oacute;n que no es correcta:";
 choices[2]= new Array();
 choices[2][0] = "Los sistemas abiertos son aqu&eacute;llos cuyas especificaciones est&aacute;n aprobadas por organismos independientes de normalizaci&oacute;n";
 choices[2][1] = "En lo tocante a sistemas operativos, sistema abierto es sin&oacute;nimo de Unix";
 choices[2][2] = "Sistemas abiertos son aqu&eacute;llos que pueden ser adquiridos de fuentes distintas en un mercado competitivo";
 choices[2][3] = "Un sistema definido como abierto es capaz de interconectarse con otro de acuerdo con unas normas establecidas";
 answers[2] = choices[2][1];
 units[2] = "40";
 comments[2] = "Id Pregunta: 101. ";


//  Id pregunta: 236 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En su dimensi&oacute;n vertical, el sistema de informaci&oacute;n tiene tres niveles jer&aacute;rquicos:";
 choices[3]= new Array();
 choices[3][0] = "Entradas, procesos y salidas";
 choices[3][1] = "Operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[3][2] = "De an&aacute;lisis, de construcci&oacute;n y de implantaci&oacute;n";
 choices[3][3] = "Jer&aacute;rquico, de gesti&oacute;n y operativo";
 answers[3] = choices[3][1];
 units[3] = "21";
 comments[3] = "Id Pregunta: 236. ";


//  Id pregunta: 240 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  En un gr&aacute;fico PERT los nodos representan:";
 choices[4]= new Array();
 choices[4][0] = "Actividades.";
 choices[4][1] = "Sucesos.";
 choices[4][2] = "El camino cr&iacute;tico.";
 choices[4][3] = "La holgura de una actividad.";
 answers[4] = choices[4][1];
 units[4] = "27";
 comments[4] = "Id Pregunta: 240. ";


//  Id pregunta: 332 Año de creación de pregunta: 2004-01-01
 questions[5]= "6)  En la Teor&iacute;a de Decisi&oacute;n Multicriterio Discreta (DMD), la normalizaci&oacute;n de puntuaciones:";
 choices[5]= new Array();
 choices[5][0] = "Homogeiniza las puntuaciones a una escala com&uacute;n (0,1)";
 choices[5][1] = "Permite la comparaci&oacute;n de criterios no homog&eacute;neos, medidos con unidades distintas y de distinto tipo (cuantitativos y cualitativos)";
 choices[5][2] = "Permite comparar criterio de sentido diferente (m&aacute;ximo, m&iacute;nimo)";
 choices[5][3] = "Todas las respuestas son correctas";
 answers[5] = choices[5][3];
 units[5] = "34";
 comments[5] = "Id Pregunta: 332. ";


//  Id pregunta: 356 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Las cuatro etapas del modelo inicial de Nolan son:";
 choices[6]= new Array();
 choices[6][0] = "Iniciaci&oacute;n, contagio, control y madurez";
 choices[6][1] = "Iniciaci&oacute;n, expansi&oacute;n, control y madurez";
 choices[6][2] = "Iniciaci&oacute;n, contagio, formalizaci&oacute;n y madurez";
 choices[6][3] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 answers[6] = choices[6][3];
 units[6] = "22";
 comments[6] = "Id Pregunta: 356. nolan";


//  Id pregunta: 463 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Supongamos que en un proyecto representado mediante un diagrama PERT una de las actividades sufre un retraso con respecto a la duraci&oacute;n inicialmente programada En tal caso:";
 choices[7]= new Array();
 choices[7][0] = "Se incrementa la duraci&oacute;n del camino cr&iacute;tico";
 choices[7][1] = "El camino cr&iacute;tico seguir&aacute; siendo el mismo";
 choices[7][2] = "No se puede afirmar con seguridad que le suceder&aacute; al camino cr&iacute;tico";
 choices[7][3] = "La fecha de finalizaci&oacute;n prevista podr&aacute; mantenerse s&oacute;lo si otra actividad ve acortada su duraci&oacute;n";
 answers[7] = choices[7][2];
 units[7] = "28";
 comments[7] = "Id Pregunta: 463. ";


//  Id pregunta: 635 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  Los aspectos b&aacute;sicos a considerar en toda inversi&oacute;n son:";
 choices[8]= new Array();
 choices[8][0] = "La inversi&oacute;n incial y el plazo de la inversi&oacute;n.";
 choices[8][1] = "La inversi&oacute;n inicial, el plazo de la inversi&oacute;n, y el plazo de amortizaci&oacute;n.";
 choices[8][2] = "La inversi&oacute;n inicial, los flujos de caja y los momentos en que tienen lugar, y el plazo de la inversi&oacute;n.";
 choices[8][3] = "Los gastos financieros de la inversi&oacute;n, los flujos de caja, y el punto de amortizaci&oacute;n.";
 answers[8] = choices[8][2];
 units[8] = "38";
 comments[8] = "Id Pregunta: 635. ";


//  Id pregunta: 1298 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Para especificar localizadores en XML se usa:";
 choices[9]= new Array();
 choices[9][0] = "s&oacute;lo el est&aacute;ndar Xlink";
 choices[9][1] = "s&oacute;lo el est&aacute;ndar Xpointer";
 choices[9][2] = "los est&aacute;ndares Xlink y Xpointer";
 choices[9][3] = "ninguno de los anteriores";
 answers[9] = choices[9][2];
 units[9] = "69";
 comments[9] = "Id Pregunta: 1298. ";


//  Id pregunta: 1517 Año de creación de pregunta: 2003-01-01
 questions[10]= "11)  Al bloque de sentencias PL/SQL almacenado en el diccionario de datos, para ser invocado desde las aplicaciones, se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Procedimiento";
 choices[10][1] = "Producto.";
 choices[10][2] = "Secuencia.";
 choices[10][3] = "Segmento.";
 answers[10] = choices[10][0];
 units[10] = "58";
 comments[10] = "Id Pregunta: 1517. Junta Andaluc&iacute;a";


//  Id pregunta: 1561 Año de creación de pregunta: 2003-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un SO para tarjetas?";
 choices[11]= new Array();
 choices[11][0] = " Scfw";
 choices[11][1] = "MultOs";
 choices[11][2] = "Java Card";
 choices[11][3] = " Open Card ";
 answers[11] = choices[11][3];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1561. ";


//  Id pregunta: 1630 Año de creación de pregunta: 2003-01-01
 questions[12]= "13)  Sobre lenguajes de comunicaci&oacute;n entre sistemas multiagente cual es cierta";
 choices[12]= new Array();
 choices[12][0] = "Se utiliza KQML porque aporta generalidad y ortogonalidad ";
 choices[12][1] = "Se utiliza KQML porque aporta generalidad y no ortogonalidad";
 choices[12][2] = "utiliza KIF porque aporta generalidad y ortogonalidad";
 choices[12][3] = "Se utiliza ARCHON porque aporta generalidad y ortogonalidad";
 answers[12] = choices[12][0];
 units[12] = "63";
 comments[12] = "Id Pregunta: 1630. ";


//  Id pregunta: 1772 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es un fichero JAR?";
 choices[13]= new Array();
 choices[13][0] = "Es el fichero que proporciona el entorno de ejecuci&oacute;n de java,  as&iacute; como una API gr&aacute;fica para el desarrollo de aplicaciones y applets.";
 choices[13][1] = "Es el fichero que empaqueta el entorno de ejecuci&oacute;n de java.";
 choices[13][2] = "Es el fichero que contiene el c&oacute;digo intermedio de java.";
 choices[13][3] = "Es un fichero en el que se re&uacute;nen las clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n de un applet o una aplicaci&oacute;n Java.";
 answers[13] = choices[13][3];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1772. ";


//  Id pregunta: 1783 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  En el proyecto RHODAS del MAP, para la renovaci&oacute;n del parque ofim&aacute;tico del ministerio mediante puestos de trabajo equipados con software libre, indique qu&eacute; entorno de escritorio fue elegido en la arquitectura de referencia:";
 choices[14]= new Array();
 choices[14][0] = "KDE";
 choices[14][1] = "Wine";
 choices[14][2] = "GNOME";
 choices[14][3] = "Konkeror";
 answers[14] = choices[14][0];
 units[14] = "61,62";
 comments[14] = "Id Pregunta: 1783. ";


//  Id pregunta: 1806 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  Dentro del terreno del e-learning, se&ntilde;ale qu&eacute; opci&oacute;n describe el &quot;blended learning&quot; de forma m&aacute;s exacta:";
 choices[15]= new Array();
 choices[15][0] = "Aquel modo de aprender que combina la ense&ntilde;anza presencial con la tecnolog&iacute;a no presencial";
 choices[15][1] = "Aprendizaje e-learning mediante combinaci&oacute;n de informaci&oacute;n alfanum&eacute;rica, gr&aacute;fica e hipertextual";
 choices[15][2] = "Aprendizaje mediante la profusi&oacute;n de elementos multimedia";
 choices[15][3] = "Aprendizaje basado en la mezcla cultural del alumnado, con experiencias diversas";
 answers[15] = choices[15][0];
 units[15] = "66";
 comments[15] = "Id Pregunta: 1806. &quot;blended learning&quot; = aprendizaje semipresencial";


//  Id pregunta: 1819 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  El fen&oacute;meno por el que se encuentran huecos entre las tablas de datos multidimensionales se conoce como:";
 choices[16]= new Array();
 choices[16][0] = "Data sparsity.";
 choices[16][1] = "Data cleansing.";
 choices[16][2] = "Data mining.";
 choices[16][3] = "Data explosion.";
 answers[16] = choices[16][0];
 units[16] = "68";
 comments[16] = "Id Pregunta: 1819. ";


//  Id pregunta: 2035 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  Cu&aacute;l de los siguientes no es un formato de imagen:";
 choices[17]= new Array();
 choices[17][0] = "gif";
 choices[17][1] = "pcx";
 choices[17][2] = "drw";
 choices[17][3] = "php";
 answers[17] = choices[17][3];
 units[17] = "93";
 comments[17] = "Id Pregunta: 2035. Similar a examen TIC SS A 2003";


//  Id pregunta: 2152 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes no es un elemento del modelo EFQM?:";
 choices[18]= new Array();
 choices[18][0] = "Impacto en la sociedad";
 choices[18][1] = "Control del dise&ntilde;o";
 choices[18][2] = "Satisfacci&oacute;n del cliente";
 choices[18][3] = "Recursos";
 answers[18] = choices[18][1];
 units[18] = "92";
 comments[18] = "Id Pregunta: 2152. ";


//  Id pregunta: 2171 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  La cohesi&oacute;n es una medida:";
 choices[19]= new Array();
 choices[19][0] = "Interna.";
 choices[19][1] = "Externa.";
 choices[19][2] = "Intermedia.";
 choices[19][3] = "No es ninguna medida.";
 answers[19] = choices[19][0];
 units[19] = "84";
 comments[19] = "Id Pregunta: 2171. ";


//  Id pregunta: 2175 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  La definici&oacute;n: &ldquo;Es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n&rdquo;, corresponde a:";
 choices[20]= new Array();
 choices[20][0] = "Restructuraci&oacute;n (Restructuring).";
 choices[20][1] = "Ingenier&iacute;a Inversa (Reverse Engineering).";
 choices[20][2] = "Ingenier&iacute;a hacia adelante (Forward Engineering).";
 choices[20][3] = "Reingenier&iacute;a (Reengineering).";
 answers[20] = choices[20][1];
 units[20] = "91";
 comments[20] = "Id Pregunta: 2175. ";


//  Id pregunta: 2226 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  A la extensi&oacute;n por la cual un programa satisface sus especificaciones y cumple con los requerimientos del usuario se le llama:";
 choices[21]= new Array();
 choices[21][0] = "Correcci&oacute;n";
 choices[21][1] = "Fiabilidad";
 choices[21][2] = "Eficiencia";
 choices[21][3] = "Integridad";
 answers[21] = choices[21][0];
 units[21] = "88";
 comments[21] = "Id Pregunta: 2226. ";


//  Id pregunta: 2487 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Sea una interrelaci&oacute;n 1:N entre dos entidades A y B. Si para toda ocurrencia de A pueden existir, o no, una o varias ocurrencias de B asociadas, y para una ocurrencia de B existe una ocurrencia de A asociada, se dice que esta interrelaci&oacute;n es:";
 choices[22]= new Array();
 choices[22][0] = "Obligatoria en A y opcional en B";
 choices[22][1] = "Obligatoria en B y opcional en A";
 choices[22][2] = "Obligatoria en ambos extremos";
 choices[22][3] = "Opcional en ambos extremos";
 answers[22] = choices[22][1];
 units[22] = "80";
 comments[22] = "Id Pregunta: 2487. ";


//  Id pregunta: 2736 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[23]= new Array();
 choices[23][0] = "Pueden  ser permanentes o temporales";
 choices[23][1] = "No crean informaci&oacute;n";
 choices[23][2] = "Son  accesibles desde entidades externas.";
 choices[23][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[23] = choices[23][2];
 units[23] = "79,81";
 comments[23] = "Id Pregunta: 2736. ";


//  Id pregunta: 2849 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  A los sintetizadores de formantes tambi&eacute;n se les conoce como ";
 choices[24]= new Array();
 choices[24][0] = "sintetizadores articulatorios";
 choices[24][1] = "sintetizadores por al&oacute;fonos";
 choices[24][2] = "sintetizadores por reglas";
 choices[24][3] = "sintetizadores por concatenaci&oacute;n controlada";
 answers[24] = choices[24][2];
 units[24] = "94";
 comments[24] = "Id Pregunta: 2849. ";


//  Id pregunta: 2887 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  El sistema EURODAC de TESTA II intercambia informaci&oacute;n entre las Administraciones P&uacute;blicas europeas referentes a:";
 choices[25]= new Array();
 choices[25][0] = "inmigraci&oacute;n";
 choices[25][1] = "accidentes de tr&aacute;fico";
 choices[25][2] = "ofertas de empleo";
 choices[25][3] = "fondos estructurales";
 answers[25] = choices[25][0];
 units[25] = "103";
 comments[25] = "Id Pregunta: 2887. ";


//  Id pregunta: 3066 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  En una arquitectura de tres capas el acceso a  los datos corresponde a la capa de:";
 choices[26]= new Array();
 choices[26][0] = "Presentaci&oacute;n";
 choices[26][1] = "Aplicaci&oacute;n";
 choices[26][2] = "Datos";
 choices[26][3] = "En realidad las tres capas manipulan los datos";
 answers[26] = choices[26][2];
 units[26] = "113";
 comments[26] = "Id Pregunta: 3066. ";


//  Id pregunta: 3262 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;De que trata el est&aacute;ndar IEEE 802.1.q?:";
 choices[27]= new Array();
 choices[27][0] = "De las VLAN (Virtual Local Area Network)";
 choices[27][1] = "De la capa f&iacute;sica de la red Ethernet";
 choices[27][2] = "No existe dicho est&aacute;ndar";
 choices[27][3] = "Del canal D de la RDSI";
 answers[27] = choices[27][0];
 units[27] = "102";
 comments[27] = "Id Pregunta: 3262. ";


//  Id pregunta: 3263 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;D&oacute;nde se define el punto de referencia R en RDSI?:";
 choices[28]= new Array();
 choices[28][0] = "Entre el ET2 (Equipo terminal de tipo 2) y el adaptador de terminales";
 choices[28][1] = "Entre el ET1 (Equipo terminal de tipo 1) y el adaptador de terminales";
 choices[28][2] = "Entre el TR1 y el TR2";
 choices[28][3] = "Entre el equipo de usaurio y el TR2 o TR1 cuando no hay TR2";
 answers[28] = choices[28][0];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3263. ";


//  Id pregunta: 3498 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  En el modelo de referencia OSI, el nivel de red interactua directamente con:";
 choices[29]= new Array();
 choices[29][0] = "El nivel de aplicaci&oacute;n y el nivel f&iacute;sico";
 choices[29][1] = "El nivel de transporte, el nivel de enlace, y sus niveles 'iguales' en otros sistemas";
 choices[29][2] = "El nivel de presentaci&oacute;n, el nivel de sesi&oacute;n y el usuario final";
 choices[29][3] = "Todos los niveles altos y los niveles bajos en los otros sistemas";
 answers[29] = choices[29][1];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3498. ";


//  Id pregunta: 3517 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  En el tipo de conmutaci&oacute;n de paquetes conocido como datagrama:";
 choices[30]= new Array();
 choices[30][0] = "Los paquetes no han de llegar ordenados";
 choices[30][1] = "Se establece un enlace l&oacute;gico entre emisor y receptor";
 choices[30][2] = "Los mensajes no se trocean";
 choices[30][3] = "Los paquetes han de llegar ordenados";
 answers[30] = choices[30][0];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3517. ";


//  Id pregunta: 3640 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  La RFC que contiene las especificaciones del protocolo IPv6 es:";
 choices[31]= new Array();
 choices[31][0] = "1945";
 choices[31][1] = "1884";
 choices[31][2] = "2460";
 choices[31][3] = "2584";
 answers[31] = choices[31][2];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3640. ";


//  Id pregunta: 4172 Año de creación de pregunta: 2006-01-01
 questions[32]= "33)  Si pido a alguien su nombre le estoy pidiendo";
 choices[32]= new Array();
 choices[32][0] = "Identificaci&oacute;n";
 choices[32][1] = "Autorizaci&oacute;n";
 choices[32][2] = "Autenticaci&oacute;n";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][0];
 units[32] = "111";
 comments[32] = "Id Pregunta: 4172. ";


//  Id pregunta: 4255 Año de creación de pregunta: 2007-01-01
 questions[33]= "34)  Cu&aacute;l de los siguientes planes de fomento de la Sociedad de la Informaci&oacute;n ha sido lanzado por el Ministerio de Industria Turismo y Comercio espa&ntilde;ol:";
 choices[33]= new Array();
 choices[33][0] = "El plan Avanza ";
 choices[33][1] = "La estrategia i2010";
 choices[33][2] = "El plan Conecta ";
 choices[33][3] = "El plan eEurope 2005";
 answers[33] = choices[33][0];
 units[33] = "30";
 comments[33] = "Id Pregunta: 4255. El plan Conecta fue lanzado por el antiguo MAP y los otros son europeos";


//  Id pregunta: 4491 Año de creación de pregunta: 2007-01-01
 questions[34]= "35)  Indique cual de las siguientes afirmaciones sobre las redes Frame Relay es falsa: ";
 choices[34]= new Array();
 choices[34][0] = "Las redes Frame Relay son redes de conmutaci&oacute;n de paquetes";
 choices[34][1] = "Las redes Frame Relay disponen de t&eacute;cnicas de control de Ia congesti&oacute;n de Ia red.";
 choices[34][2] = "LAPB es el protocolo de nivel de enlace utilizado por Frame Relay.";
 choices[34][3] = "El CIR (Comitted Information Rate) es Ia velocidad de transmisi&oacute;n de datos que el operador de la red Frame Relay garantiza para una conexi&oacute;n determinada.";
 answers[34] = choices[34][2];
 units[34] = "109";
 comments[34] = "Id Pregunta: 4491. ";


//  Id pregunta: 4638 Año de creación de pregunta: 2007-01-01
 questions[35]= "36)  Es un interface de M&eacute;trica V3";
 choices[35]= new Array();
 choices[35][0] = "formacion";
 choices[35][1] = "auditoria";
 choices[35][2] = "mantenimiento de la calidad";
 choices[35][3] = "gestion de la configuracion";
 answers[35] = choices[35][3];
 units[35] = "86";
 comments[35] = "Id Pregunta: 4638. ";


//  Id pregunta: 4649 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  La tecnolog&iacute;a de radio LMDS (Local Multipoint Distribution System) se caracteriza entre otras cosas por ser:";
 choices[36]= new Array();
 choices[36][0] = "una tecnolog&iacute;a punto a punto";
 choices[36][1] = "no requiere de visibilidad directa entre enlaces";
 choices[36][2] = "tiene radios de cobertura t&iacute;picos mayores a 25 Km (kilometros)";
 choices[36][3] = "utilizada para entornos de alta concentraci&oacute;n de usuarios";
 answers[36] = choices[36][3];
 units[36] = "108";
 comments[36] = "Id Pregunta: 4649. ";


//  Id pregunta: 4669 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Qui&eacute;n est&aacute; detr&aacute;s del conjunto de mejores pr&aacute;cticas COBIT?";
 choices[37]= new Array();
 choices[37][0] = "Information Systems Audit and Control Association (ISACA)";
 choices[37][1] = "IT Governance Institute (ITGI)";
 choices[37][2] = "La respuestas A) y B) son ambas correctas";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][2];
 units[37] = "98";
 comments[37] = "Id Pregunta: 4669. ";


//  Id pregunta: 4715 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  El hipertexto es:";
 choices[38]= new Array();
 choices[38][0] = "El conjunto de los elementos activos de un documento, que, al seleccionarse, enlazan con otros elementos";
 choices[38][1] = "Un documento HTML.";
 choices[38][2] = "Un documento HTML, XML o SGML.";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][0];
 units[38] = "112";
 comments[38] = "Id Pregunta: 4715. Examen 2006 JCYL";


//  Id pregunta: 4720 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son:";
 choices[39]= new Array();
 choices[39][0] = "Eficiencia y fiabilidad";
 choices[39][1] = "Fiabilidad y modularidad";
 choices[39][2] = "Fiabilidad y extensibilidad";
 choices[39][3] = "Correcci&oacute;n y verificabilidad";
 answers[39] = choices[39][1];
 units[39] = "88";
 comments[39] = "Id Pregunta: 4720. Examen 2006 JCYL";


//  Id pregunta: 4824 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes direcciones IP de host pertenece a cualquiera de los rangos de direcciones IP p&uacute;blicas?";
 choices[40]= new Array();
 choices[40][0] = "10.172.13.65";
 choices[40][1] = "172.16.223.125";
 choices[40][2] = "172.64.12.29";
 choices[40][3] = "192.168.23.252";
 answers[40] = choices[40][2];
 units[40] = "100";
 comments[40] = "Id Pregunta: 4824. ";


//  Id pregunta: 4833 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &quot;Gesti&oacute;n de la Tecnolog&iacute;a&quot; pertenece al criterio:";
 choices[41]= new Array();
 choices[41][0] = "Alianzas y Recursos";
 choices[41][1] = "Pol&iacute;tica y Estrategia";
 choices[41][2] = "Procesos";
 choices[41][3] = "Resultados Clave";
 answers[41] = choices[41][0];
 units[41] = "92";
 comments[41] = "Id Pregunta: 4833. ";


//  Id pregunta: 4957 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  Seg&uacute;n la metodolog&iacute;a Magerit versi&oacute;n 2, el riesgo remanente en el sistema tras la implantaci&oacute;n de lassalvaguardas determinadas en el plan de seguridad de la informaci&oacute;n se denomina:";
 choices[42]= new Array();
 choices[42][0] = "Riesgo retenido.";
 choices[42][1] = "Riesgo acumulado.";
 choices[42][2] = "Riesgo residual.";
 choices[42][3] = "Riesgo supervisado.";
 answers[42] = choices[42][2];
 units[42] = "33";
 comments[42] = "Id Pregunta: 4957. Examen TIC B 2007";


//  Id pregunta: 4993 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[43]= new Array();
 choices[43][0] = "Polimorfismo";
 choices[43][1] = "Herencia";
 choices[43][2] = "Reusabilidad";
 choices[43][3] = "Encapsulaci&oacute;n";
 answers[43] = choices[43][3];
 units[43] = "82";
 comments[43] = "Id Pregunta: 4993. Examen TIC A 2007";


//  Id pregunta: 5082 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  Seg&uacute;n el m&eacute;todo del c&aacute;mino cr&iacute;tico, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[44]= new Array();
 choices[44][0] = "El camino cr&iacute;tico determina el tiempo m&aacute;s corto que podemos tardar en hacer el proyecto si se dispone detodos los recursos necesarios";
 choices[44][1] = "Las actividades cr&iacute;ticas no tienen holgura.";
 choices[44][2] = "Una actividad es cr&iacute;tica cuando no se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificarla duraci&oacute;n total del proyecto.";
 choices[44][3] = "La concatenaci&oacute;n de las todas las actividades de un proyecto es el camino cr&iacute;tico.";
 answers[44] = choices[44][3];
 units[44] = "77";
 comments[44] = "Id Pregunta: 5082. Examen TIC A 2007";


//  Id pregunta: 5277 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  Indique cu&aacute;l no es una ventaja de la fibra &oacute;ptica frente a los cableados de cobre:";
 choices[45]= new Array();
 choices[45][0] = "Mayor ancho de banda.";
 choices[45][1] = "Inmunidad al ruido electromagn&eacute;tico.";
 choices[45][2] = "Instalaci&oacute;n y conexionado m&aacute;s sencilla.";
 choices[45][3] = "Menor tama&ntilde;o y peso.";
 answers[45] = choices[45][2];
 units[45] = "99";
 comments[45] = "Id Pregunta: 5277. ";


//  Id pregunta: 5536 Año de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es un &aacute;mbito de interoperabilidad contemplado en el marco europeo de interoperabilidad?";
 choices[46]= new Array();
 choices[46][0] = "Organizativa";
 choices[46][1] = "T&eacute;cnica";
 choices[46][2] = "Funcional";
 choices[46][3] = "Sem&aacute;ntica";
 answers[46] = choices[46][2];
 units[46] = "30";
 comments[46] = "Id Pregunta: 5536. ";


//  Id pregunta: 5656 Año de creación de pregunta: 2003-01-01
 questions[47]= "48)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel medio, las de nivel alto, a los siguientes ficheros:";
 choices[47]= new Array();
 choices[47][0] = "Aquellos de los que sean responsables las entidades financieras, para finalidades relacionadas con la prestaci&oacute;n de servicios financieros";
 choices[47][1] = "Los que contengan o se refieran a datos recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[47][2] = "Aquellos de los que sean responsables las Entidades Gestoras y Servicios Comunes de la Seguridad social y se relacionen con el ejercicio de sus competencias";
 choices[47][3] = "La a) y la b) son correctas";
 answers[47] = choices[47][1];
 units[47] = "29";
 comments[47] = "Id Pregunta: 5656. ";


//  Id pregunta: 5664 Año de creación de pregunta: 2009-01-01
 questions[48]= "49)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = " son personal&iacute;simos y ser&aacute;n ejercidos por el afectado";
 choices[48][1] = " son personal&iacute;simos y ser&aacute;n ejercidos por el afectado o un familiar directo";
 choices[48][2] = " son universales y ser&aacute;n ejercidos por cualquier ciudadano";
 choices[48][3] = "no existen como tales derechos";
 answers[48] = choices[48][0];
 units[48] = "29";
 comments[48] = "Id Pregunta: 5664. ";


//  Id pregunta: 5707 Año de creación de pregunta: 2009-01-01
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; ligado al desarrollo de aplicaciones basadas en servicios web:";
 choices[49]= new Array();
 choices[49][0] = "JAXB";
 choices[49][1] = "AWT";
 choices[49][2] = "AXIS";
 choices[49][3] = "WSE";
 answers[49] = choices[49][1];
 units[49] = "51";
 comments[49] = "Id Pregunta: 5707. MAP 2008 A2";


//  Id pregunta: 5730 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cual de las siguientes puede ser utilizada para videoconferencia?";
 choices[50]= new Array();
 choices[50][0] = "ATM";
 choices[50][1] = "H.323";
 choices[50][2] = "VRVS";
 choices[50][3] = "Todas las anteriores";
 answers[50] = choices[50][3];
 units[50] = "117";
 comments[50] = "Id Pregunta: 5730. ";


//  Id pregunta: 5731 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes no es un tipo de workflow?";
 choices[51]= new Array();
 choices[51][0] = "Workflow de administraci&oacute;n";
 choices[51][1] = "Workflow de colaboraci&oacute;n";
 choices[51][2] = "Workflow de coordinaci&oacute;n";
 choices[51][3] = "Workflow de producci&oacute;n";
 answers[51] = choices[51][2];
 units[51] = "71";
 comments[51] = "Id Pregunta: 5731. ";


//  Id pregunta: 5821 Año de creación de pregunta: 2009-01-01
 questions[52]= "53)  Con respecto a servidores y servicios que permiten conectar el entorno de las LAN con el mundo Internet, &iquest;cu&aacute;l de las afirmaciones siguientes es CIERTA para un &quot;servidor NAT&quot;?:";
 choices[52]= new Array();
 choices[52][0] = "Sirve para asignar din&aacute;micamente direcciones IP a los clientes que no las tienen asignadas est&aacute;ticamente en la configuraci&oacute;n inicial, realizando funciones de protecci&oacute;n contra ataques por reproducci&oacute;n";
 choices[52][1] = "Se utilizan para trasformar una serie de direcciones IP internas, que no pueden ser reconocidas para salir a Internet.";
 choices[52][2] = "Sirven para limitar las direcciones IP/URL&rsquo;s a las que los usuarios de la LAN de una organizaci&oacute;n pueden acceder a trav&eacute;s de Internet, garantizando integridad de los datos y autenticaci&oacute;n de origen v&iacute;a el algoritmo MD5";
 choices[52][3] = "Guardan informaci&oacute;n sobre las direcciones de los servidores (host) representativos de nombres de dominio sobre los que se tiene autorizaci&oacute;n de acceso, disponiendo de capacidad adicional para consultar informaci&oacute;n de DNS&rsquo;s que tengan los nombres de dominio y host de otros accesos que pudieran realizarse";
 answers[52] = choices[52][1];
 units[52] = "102";
 comments[52] = "Id Pregunta: 5821. MAP 2008 A1";


//  Id pregunta: 5830 Año de creación de pregunta: 2009-01-01
 questions[53]= "54)  Se&ntilde;ale la afirmaci&oacute;n incorrecta respecto a la licencia EUPL.";
 choices[53]= new Array();
 choices[53][0] = "Con estte tipo de licencia las administraciones pueden ser proveedoras de software open source ente ellas, reutilizando lo que otros han hecho y mejor&aacute;ndolo.";
 choices[53][1] = "Es equivalente a las licencias GNU GPL y se pueden usar indistintamente, s&oacute;lo que EUPL aplica &uacute;nicamente en europa.";
 choices[53][2] = "Una de las novedades que introduce es la variedad de idiomas en los que est&aacute; disponible.";
 choices[53][3] = "Es una licencia compatible con otras licencias copyleft";
 answers[53] = choices[53][1];
 units[53] = "36,37";
 comments[53] = "Id Pregunta: 5830. ";


//  Id pregunta: 5916 Año de creación de pregunta: 2009-01-01
 questions[54]= "55)  Con relaci&oacute;n a Internet, cu&aacute;l de las expresiones siguientes es INCORRECTA:";
 choices[54]= new Array();
 choices[54][0] = "Cualquier persona puede enviar memoranda propuestos para ser RFC (Request For Comments)";
 choices[54][1] = "Cada RFC tiene un t&iacute;tulo y un n&uacute;mero asignado, que no puede repetirse ni eliminarse aunque el documento se quede obsoleto";
 choices[54][2] = "Los RFCs se han publicado tradicionalmente en texto ASCII";
 choices[54][3] = "Un STD contiene siempre varios RFCs de protocolos dependientes entre s&iacute;";
 answers[54] = choices[54][3];
 units[54] = "42";
 comments[54] = "Id Pregunta: 5916. MAP 2008 A1";


//  Id pregunta: 5940 Año de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes son las siglas de una infraestructura de virtualizaci&oacute;n del kernel de Linux?";
 choices[55]= new Array();
 choices[55][0] = "VLM";
 choices[55][1] = "LVM";
 choices[55][2] = "VKM";
 choices[55][3] = "KVM";
 answers[55] = choices[55][3];
 units[55] = "119";
 comments[55] = "Id Pregunta: 5940. ";


//  Id pregunta: 6049 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  Sobre el modelo de gesti&oacute;n TMN (Telecommunication Management Network):";
 choices[56]= new Array();
 choices[56][0] = "Es un modelo de gesti&oacute;n de red orientado a grandes operadores de telecomunicaciones";
 choices[56][1] = "Sus principios est&aacute;n recogidos en la recomendaci&oacute;n M.3010 de la UIT-T";
 choices[56][2] = "Es especialmente apropiado para redes de conmutaci&oacute;n de circuitos";
 choices[56][3] = "Todas las respuestas anteriores son correctas ";
 answers[56] = choices[56][3];
 units[56] = "104";
 comments[56] = "Id Pregunta: 6049. ";


//  Id pregunta: 6106 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  Indicar cu&aacute;l de los siguientes NO est&aacute; entre los objetivos que persigue MAGERIT v2:";
 choices[57]= new Array();
 choices[57][0] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos que afectan a los sistemas de informaci&oacute;n.";
 choices[57][1] = "Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control.";
 choices[57][2] = "Establecer una norma de obligado cumplimiento para todos los organismos de las Administraciones P&uacute;blicas espa&ntilde;olas a la hora de analizar y gestionar los riesgos.";
 choices[57][3] = "Preparar a las organizaciones para procesos de evaluaci&oacute;n, auditoria, certificaci&oacute;n o acreditaci&oacute;n.";
 answers[57] = choices[57][2];
 units[57] = "33";
 comments[57] = "Id Pregunta: 6106. TIC A 2009";


//  Id pregunta: 6112 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  Un diagrama de transici&oacute;n de estados:";
 choices[58]= new Array();
 choices[58][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[58][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[58][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[58][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[58] = choices[58][3];
 units[58] = "82";
 comments[58] = "Id Pregunta: 6112. TIC A 2009";


//  Id pregunta: 6133 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  ADO.NET es:";
 choices[59]= new Array();
 choices[59][0] = "Un conjunto de componentes software de la capa de l&oacute;gica de negocio.";
 choices[59][1] = "Un lenguaje de programaci&oacute;n para el entorno .NET.";
 choices[59][2] = "Un conjunto de componentes para el acceso a datos.";
 choices[59][3] = "Una biblioteca de clases b&aacute;sica de la capa de presentaci&oacute;n.";
 answers[59] = choices[59][2];
 units[59] = "59";
 comments[59] = "Id Pregunta: 6133. TIC A 2009";


//  Id pregunta: 6180 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  RMI, DCOM, CORBA y RPC se consideran:";
 choices[60]= new Array();
 choices[60][0] = "Precursores de los Servicios Web.";
 choices[60][1] = "Formas de comunicar aplicaciones distribuidas.";
 choices[60][2] = "Formas de comunicar aplicaciones heterog&eacute;neas.";
 choices[60][3] = "Todas las anteriores son respuestas correctas.";
 answers[60] = choices[60][3];
 units[60] = "69";
 comments[60] = "Id Pregunta: 6180. ";


//  Id pregunta: 6236 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;C&oacute;mo se denominan las interfaces de servicio de la implementaci&oacute;n del servicio de directorio de Microsoft en una red distribuida de computadores?";
 choices[61]= new Array();
 choices[61][0] = "ADSI";
 choices[61][1] = "LDAP";
 choices[61][2] = "AD";
 choices[61][3] = "ADIS";
 answers[61] = choices[61][0];
 units[61] = "115";
 comments[61] = "Id Pregunta: 6236. ";


//  Id pregunta: 6279 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  No es una dificultad del modelo de ciclo de vida en espiral:";
 choices[62]= new Array();
 choices[62][0] = "Dificultad a la hora de definir requisitos";
 choices[62][1] = "Dependencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[62][2] = "Necesidad de elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[62][3] = "Adaptar su aplicabilidad al software contratado";
 answers[62] = choices[62][0];
 units[62] = "76";
 comments[62] = "Id Pregunta: 6279. ";


//  Id pregunta: 6292 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  El problema de volatilidad a la hora de la obtenci&oacute;n de requisitos en el an&aacute;lisis de un Sistema de Informaci&oacute;n y Comunicaciones se refiere a:";
 choices[63]= new Array();
 choices[63][0] = "Los requisitos son el resultado de integrar informaci&oacute;n de m&uacute;ltiples fuentes, algunas con intereses contrapuestos";
 choices[63][1] = "La complejidad de la organizaci&oacute;n puede hacer que a lo largo del proyecto se cambien objetivos, pol&iacute;ticas, legislaci&oacute;n, etc";
 choices[63][2] = "Las necesidades del usuario cambian";
 choices[63][3] = "Todas las anteriores";
 answers[63] = choices[63][3];
 units[63] = "78";
 comments[63] = "Id Pregunta: 6292. ";


//  Id pregunta: 6327 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  El operador de agregaci&oacute;n AVG(nombre_atributo) sirve para:";
 choices[64]= new Array();
 choices[64][0] = "Calcular la media de cualquier atributo.";
 choices[64][1] = "Calcular la media de un atributo num&eacute;rico.";
 choices[64][2] = "Calcular la suma de los valores de un atributo.";
 choices[64][3] = "Contar el n&uacute;mero de ocurrencias de un atributo.";
 answers[64] = choices[64][1];
 units[64] = "58";
 comments[64] = "Id Pregunta: 6327. ";


//  Id pregunta: 6403 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l es el plazo m&iacute;nimo para solicitar autorizaci&oacute;n para prestar servicios de la sociedad de la informaci&oacute;n, antes de comenzar a prestar el servicio?";
 choices[65]= new Array();
 choices[65][0] = "15 d&iacute;as";
 choices[65][1] = "1 mes";
 choices[65][2] = "2 meses";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][3];
 units[65] = "30";
 comments[65] = "Id Pregunta: 6403. Art&iacute;culo 6 Ley 34/2002";


//  Id pregunta: 6419 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Las pautas de accesibilidad de agentes de usuario WAI-W3C, se conocen como:";
 choices[66]= new Array();
 choices[66][0] = "WCAG";
 choices[66][1] = "UAAG";
 choices[66][2] = "ATAG";
 choices[66][3] = "TAW";
 answers[66] = choices[66][1];
 units[66] = "39";
 comments[66] = "Id Pregunta: 6419. ";


//  Id pregunta: 6436 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Cuando se pasa a tablas una relaci&oacute;n n:m";
 choices[67]= new Array();
 choices[67][0] = "Se generan restricciones de integridad referencal.";
 choices[67][1] = "No hay que preocuparse por la integridad referencial.";
 choices[67][2] = "hay que modificar las claves ajenas de las entidades participantes en la relaci&oacute;n.";
 choices[67][3] = "No se generan claves ajenas nada m&aacute;s que para los atributos propios de la relaci&oacute;n.";
 answers[67] = choices[67][0];
 units[67] = "70";
 comments[67] = "Id Pregunta: 6436. ";


//  Id pregunta: 6491 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  Respecto a los servicios de directorio se puede afirmar que:";
 choices[68]= new Array();
 choices[68][0] = "LDAP define el modelo completo de servicio de directorio";
 choices[68][1] = "X.500 es un protocolo de acceso a un servicio de directorio LDAP";
 choices[68][2] = "LDAP es un protocolo de acceso a servicios de directorio X.500";
 choices[68][3] = "Ninguna de las anteriores es correcta";
 answers[68] = choices[68][2];
 units[68] = "74";
 comments[68] = "Id Pregunta: 6491. Castilla La Mancha 2009";


//  Id pregunta: 6518 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[69]= new Array();
 choices[69][0] = "JDI";
 choices[69][1] = "JCI";
 choices[69][2] = "JTEE";
 choices[69][3] = "JNI";
 answers[69] = choices[69][3];
 units[69] = "60";
 comments[69] = "Id Pregunta: 6518. ";


//  Id pregunta: 6610 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  En un DFD, entre 2 procesos existir&aacute; un almac&eacute;n de datos cuando:";
 choices[70]= new Array();
 choices[70][0] = "La comunicaci&oacute;n entre ellos sea s&iacute;ncrona";
 choices[70][1] = "La comunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[70][2] = "Existir&aacute; siempre que haya comunicaci&oacute;n entre los procesos";
 choices[70][3] = "Es el analista el que decide si tiene que existir o no el almac&eacute;n de datos";
 answers[70] = choices[70][1];
 units[70] = "81";
 comments[70] = "Id Pregunta: 6610. ";


//  Id pregunta: 6631 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Hablando en calidad de Software de SPICE, decir cual de las siguientes afirmaciones NO es cierta:";
 choices[71]= new Array();
 choices[71][0] = "SPICE es un est&aacute;ndar internacional de evaluaci&oacute;n y determinaci&oacute;n de la capacidad ymejora continua de procesos de ingenier&iacute;a del software";
 choices[71][1] = "SPICE absorbe la escala de puntuaci&oacute;n de capacidad de CMM y el ciclo de vida de ISO 12207";
 choices[71][2] = "Se corresponde con la norma ISO/IEC 15054";
 choices[71][3] = "Absorbe la representaci&oacute;n de capacidad basada en perfiles de atributos de BOOTSTRAP";
 answers[71] = choices[71][2];
 units[71] = "87";
 comments[71] = "Id Pregunta: 6631. ";


//  Id pregunta: 7152 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  En un disco duro, la unidad m&aacute;s peque&ntilde;a en la que se puede escribir o leer informaci&oacute;n es:";
 choices[72]= new Array();
 choices[72][0] = "La pista";
 choices[72][1] = "El cilindro";
 choices[72][2] = "La cabeza de lectura/escritura";
 choices[72][3] = "El sector";
 answers[72] = choices[72][3];
 units[72] = "48";
 comments[72] = "Id Pregunta: 7152. Examen TIC B 2009";


//  Id pregunta: 7781 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[73]= new Array();
 choices[73][0] = " Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos.";
 choices[73][1] = " Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte.";
 choices[73][2] = " Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte.";
 choices[73][3] = " De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos.";
 answers[73] = choices[73][2];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7781. Map 2005";


//  Id pregunta: 8248 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  Indique la afirmaci&oacute;n FALSA. De acuerdo a la ley 30/2007, el sistema de determinaci&oacute;n del precio de los contratos para el desarrollo de programas inform&aacute;ticos:";
 choices[74]= new Array();
 choices[74][0] = "Puede ser a tanto alzado.";
 choices[74][1] = "Puede resultar de la aplicaci&oacute;n de honorarios por tarifas.";
 choices[74][2] = "Se debe establecer en el Pliego de Prescripciones T&eacute;cnicas.";
 choices[74][3] = "Puede resultar de la combinaci&oacute;n de varias modalidades de c&aacute;lculo.";
 answers[74] = choices[74][2];
 units[74] = "36,37";
 comments[74] = "Id Pregunta: 8248. Examen TIC A1 2010";


//  Id pregunta: 8328 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  La tecnologia IDSL (ISDN Digital Subscriber Line):";
 choices[75]= new Array();
 choices[75][0] = "Se utiliza para transportar voz y datos";
 choices[75][1] = "Es asim&eacute;trica";
 choices[75][2] = "Utiliza 3 pares de hilos";
 choices[75][3] = "Alcanza una distancia m&aacute;xima de 5,5 Km.";
 answers[75] = choices[75][3];
 units[75] = "109";
 comments[75] = "Id Pregunta: 8328. Analista Ayto. Madrid 2010";


//  Id pregunta: 8419 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[76]= new Array();
 choices[76][0] = "Bluetooth";
 choices[76][1] = "PayPal Mobile";
 choices[76][2] = "NFC (Near Field Communication)";
 choices[76][3] = "3D Secure";
 answers[76] = choices[76][2];
 units[76] = "70, 107";
 comments[76] = "Id Pregunta: 8419. ";


//  Id pregunta: 8467 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  La RDSI (red digital de servicios integrados), ofrece una conexi&oacute;n digital extremo a extremo para el intercambio de informaci&oacute;n al integrar servicios de voz y de datos sobre la estructura de la red telef&oacute;nica p&uacute;blica. El acceso primario, en Europa, esta constituido por:";
 choices[77]= new Array();
 choices[77][0] = "2 canales B y 2 canales D";
 choices[77][1] = "30 canales B y 30 canales D";
 choices[77][2] = "30 canales B y un canal D";
 choices[77][3] = "30 canales B y dos canales D";
 answers[77] = choices[77][2];
 units[77] = "103";
 comments[77] = "Id Pregunta: 8467. Analista Ayto. Madrid 2010";


//  Id pregunta: 8528 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  En IPSec, el modo de funcionamiento en el que s&oacute;lo los datos son cifrados o autenticados, y el enrutamiento permanece intacto por lo que asegura la comunicaci&oacute;n extremo a extremo, se denomina:";
 choices[78]= new Array();
 choices[78][0] = "Modo t&uacute;nel.";
 choices[78][1] = "Modo transporte.";
 choices[78][2] = "Modo encapsulado.";
 choices[78][3] = "Modo transparente.";
 answers[78] = choices[78][1];
 units[78] = "111";
 comments[78] = "Id Pregunta: 8528. Examen TIC A2 2010 interna";


//  Id pregunta: 8612 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  Para la gesti&oacute;n del sistema operativo queremos	llevar un inventar&iacute;o. &iquest;Cu&aacute;l de los siguientes recursos NO es necesario en el mismo?";
 choices[79]= new Array();
 choices[79][0] = "Listado de todos los equipos";
 choices[79][1] = "Listado de software usado en cada equipo.";
 choices[79][2] = "Esquema de la red.";
 choices[79][3] = "Todos son necesarios.";
 answers[79] = choices[79][3];
 units[79] = "52";
 comments[79] = "Id Pregunta: 8612. Examen TIC A2 2010 interna";


//  Id pregunta: 8632 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes actividades NO pertenece a la Gesti&oacute;n del Proyecto seg&uacute;n M&eacute;trica v3?";
 choices[80]= new Array();
 choices[80][0] = "Identificaci&oacute;n de las Propiedades de Calidad.";
 choices[80][1] = "Planificaci&oacute;n.";
 choices[80][2] = "Cierre del Proyecto.";
 choices[80][3] = "Estimaci&oacute;n de Esfuerzo.";
 answers[80] = choices[80][0];
 units[80] = "86";
 comments[80] = "Id Pregunta: 8632. Examen TIC A2 2010 interna";


//  Id pregunta: 8869 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[81]= new Array();
 choices[81][0] = "No";
 choices[81][1] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[81][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[81][3] = "S&iacute;, pero solamente dentro del conjunto de est&aacute;ndares IEEE 802";
 answers[81] = choices[81][1];
 units[81] = "100";
 comments[81] = "Id Pregunta: 8869. Analista Ayto. Madrid 2010";


//  Id pregunta: 8883 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  La Junta de Contrataci&oacute;n puede actuar como &oacute;rgano de contrataci&oacute;n en";
 choices[82]= new Array();
 choices[82][0] = "cualquier contrato de suministro";
 choices[82][1] = "contratos de  gesti&oacute;n de servicios p&uacute;blicos";
 choices[82][2] = "contratos de suministros de bienes consumibles o de f&aacute;cil deterioro";
 choices[82][3] = "contratos de suministros que s&oacute;lo afectan a un &oacute;rgano de contrataci&oacute;n";
 answers[82] = choices[82][2];
 units[82] = "41";
 comments[82] = "Id Pregunta: 8883. ";


//  Id pregunta: 8903 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no es una fuente accesible al p&uacute;blico:";
 choices[83]= new Array();
 choices[83][0] = "El padr&oacute;n municipal.";
 choices[83][1] = "Los diarios oficiales.";
 choices[83][2] = "El censo promocional.";
 choices[83][3] = "Los medios de comunicaci&oacute;n";
 answers[83] = choices[83][0];
 units[83] = "29";
 comments[83] = "Id Pregunta: 8903. Operador Ayto. Madrid 2010";


//  Id pregunta: 8955 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  En el arranque en Linux &iquest;cu&aacute;l de los siguientes procesos se ejecuta en primer lugar?:";
 choices[84]= new Array();
 choices[84][0] = "page daemon";
 choices[84][1] = "swapper";
 choices[84][2] = "init";
 choices[84][3] = "sbin";
 answers[84] = choices[84][1];
 units[84] = "53";
 comments[84] = "Id Pregunta: 8955. ";


//  Id pregunta: 9009 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  No tiene la consideraci&oacute;n de Autoridad Nacional de Reglamentaci&oacute;n de Telecomunicaciones, de conformidad con el art. 46 de la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones:";
 choices[85]= new Array();
 choices[85][0] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[85][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[85][2] = "El Gobierno.";
 choices[85][3] = "Los &oacute;rganos superiores y directivos del Ministerio de Econom&iacute;a y Competitividad que, de conformidad con la estructura org&aacute;nica del departamento, asuman las competencias asignadas a este ministerio en materias reguladas por esta Ley.";
 answers[85] = choices[85][1];
 units[85] = "110";
 comments[85] = "Id Pregunta: 9009. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9021 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  Un articulista est&aacute; escribiendo sobre las ventajas econ&oacute;micas de los sistemas WDM (Wavelength-Division Multiplexing), que se manifiestan principalmente en los sistemas:";
 choices[86]= new Array();
 choices[86][0] = "De baja capacidad y elevado alcance.";
 choices[86][1] = "De alta capacidad y reducido alcance.";
 choices[86][2] = "De alta capacidad y elevado alcance.";
 choices[86][3] = "Ninguna de las anteriores";
 answers[86] = choices[86][2];
 units[86] = "99";
 comments[86] = "Id Pregunta: 9021. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9207 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;Desde el punto de vista de la cantidad de la velocidad de acceso cu&aacute;l es la diferencia entre cintas y discos?";
 choices[87]= new Array();
 choices[87][0] = "La cinta est&aacute; orientada a almacenamiento de grandes cantidades de datos en los que el tiempo de acceso es cr&iacute;tico.";
 choices[87][1] = "Los discos son adecuados para el almacenamiento de datos con acceso &ldquo;on-line&rdquo;.";
 choices[87][2] = "Las cintas pr&aacute;cticamente ya no se utilizan.";
 choices[87][3] = "Los discos representan el soporte auxiliar de la informaci&oacute;n";
 answers[87] = choices[87][1];
 units[87] = "48";
 comments[87] = "Id Pregunta: 9207. ";


//  Id pregunta: 9219 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  &iquest;Qu&eacute; es LUN Masking?";
 choices[88]= new Array();
 choices[88][0] = "La cabina presenta una LUN a un servidor y este puede acceder.";
 choices[88][1] = "Se evita que un servidor pueda acceder a una LUN que pertenece a otro servidor.";
 choices[88][2] = "Es un m&eacute;todo de seguridad en red SAN de la interfaz SCSCI.";
 choices[88][3] = "Todos son v&aacute;lidas";
 answers[88] = choices[88][3];
 units[88] = "48";
 comments[88] = "Id Pregunta: 9219. ";


//  Id pregunta: 9231 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[89]= new Array();
 choices[89][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[89][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[89][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[89][3] = "Ninguna es correcta.";
 answers[89] = choices[89][2];
 units[89] = "52,55";
 comments[89] = "Id Pregunta: 9231. ";


//  Id pregunta: 9262 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Si se quisiera un middleware para una grid, se elegir&iacute;a:";
 choices[90]= new Array();
 choices[90][0] = "Globus Toolkit. ";
 choices[90][1] = "Cluster Veritas.";
 choices[90][2] = "Arduino.";
 choices[90][3] = "Data protector. ";
 answers[90] = choices[90][0];
 units[90] = "45";
 comments[90] = "Id Pregunta: 9262. Examen TICA2-2011";


//  Id pregunta: 9381 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  &iquest;A qu&eacute; est&aacute;ndar se refiere WirelessMan-Advanced?";
 choices[91]= new Array();
 choices[91][0] = "802.16m";
 choices[91][1] = "802.16e";
 choices[91][2] = "802.16k";
 choices[91][3] = "802.16-2009";
 answers[91] = choices[91][0];
 units[91] = "101";
 comments[91] = "Id Pregunta: 9381. ";


//  Id pregunta: 9384 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  Seg&uacute;n la UIT, dentro de la denominaci&oacute;n 4G, se pueden incluir las siguientes tecnolog&iacute;as";
 choices[92]= new Array();
 choices[92][0] = "LTE";
 choices[92][1] = "WiMAX y LTE";
 choices[92][2] = "WiMAX";
 choices[92][3] = "LTE, WiMAX y HSPA+";
 answers[92] = choices[92][3];
 units[92] = "108";
 comments[92] = "Id Pregunta: 9384. ";


//  Id pregunta: 9509 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  &iquest;Qu&eacute; son las Java EE Blueprints?";
 choices[93]= new Array();
 choices[93][0] = "Un conjunto de pr&aacute;cticas obligatorias al desarrollar en Java";
 choices[93][1] = "Un conjunto de buenas pr&aacute;cticas al desarrollar en Java";
 choices[93][2] = "Una API de desarrollo en Java";
 choices[93][3] = "Java EE Blueprints no existe";
 answers[93] = choices[93][1];
 units[93] = "116";
 comments[93] = "Id Pregunta: 9509. ";


//  Id pregunta: 9664 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Los sistemas multiprocesador:";
 choices[94]= new Array();
 choices[94][0] = "Son sistemas d&eacute;bilmente acoplados.";
 choices[94][1] = "Sus procesadores no dependen unos de otros.";
 choices[94][2] = "Son sistemas fuertemente acoplados.";
 choices[94][3] = "Ninguna de las anteriores.";
 answers[94] = choices[94][2];
 units[94] = "45";
 comments[94] = "Id Pregunta: 9664. ";


//  Id pregunta: 9846 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  El algoritmo DES:";
 choices[95]= new Array();
 choices[95][0] = "Es un algoritmo de cifrado asim&eacute;trico que codifica bloques de 64 bits empleando claves de 32 bits, con una permutaci&oacute;n al principio y otra al final del proceso.";
 choices[95][1] = "Es un algoritmo de cifrado por bloques que codifica bloques de 54 bits, y su estructura consta de 16 etapas.";
 choices[95][2] = "Es un algoritmo de cifrado sim&eacute;trico cuya estructura es una variaci&oacute;n de la red de Feistel.";
 choices[95][3] = "Es un algoritmo de cifrado de flujo que codifica flujos de 64 bits, empleando una clave de 64, aunque s&oacute;lo 56 bits son utilizados. Los 8 bits restantes comprueban la paridad.";
 answers[95] = choices[95][2];
 units[95] = "111";
 comments[95] = "Id Pregunta: 9846. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9915 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Se&ntilde;ale la opci&oacute;n INCORRECTA en relaci&oacute;n con los DFD (Diagrama de Flujos de Datos) y los DE (Diagramas de Estructura), seg&uacute;n M&eacute;trica v3:";
 choices[96]= new Array();
 choices[96][0] = "El objetivo del DFD es la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 choices[96][1] = "En un DFD, los flujos de control representan movimientos de datos con valores s&iacute;ncronos entre procesos de control.";
 choices[96][2] = "Existen dos estrategias para obtener el DE a partir de un DFD, an&aacute;lisis: de transacci&oacute;n y de transformaci&oacute;n. El uso de una de las dos depender&aacute; de los procesos del DFD.";
 choices[96][3] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD existe un proceso que en funci&oacute;n del flujo de llegada, determina la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 answers[96] = choices[96][1];
 units[96] = "86";
 comments[96] = "Id Pregunta: 9915. TIC A2, Examen 2013";


//  Id pregunta: 10129 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Las siglas CMOT significan:";
 choices[97]= new Array();
 choices[97][0] = "Complex Management Over TCP";
 choices[97][1] = "Common Management Over TCP/IP";
 choices[97][2] = "Complex Management Over TCP/IP";
 choices[97][3] = "Complex Management Of Telecomucation";
 answers[97] = choices[97][1];
 units[97] = "104";
 comments[97] = "Id Pregunta: 10129. ";


//  Id pregunta: 10283 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En Sql Server 2012 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[98]= new Array();
 choices[98][0] = "rdlccfg";
 choices[98][1] = "tsmrpt";
 choices[98][2] = "rptsetup";
 choices[98][3] = "rsconfig";
 answers[98] = choices[98][3];
 units[98] = "58";
 comments[98] = "Id Pregunta: 10283. TIC A2, libre, examen 2013";


//  Id pregunta: 10538 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  En IPv6, se&ntilde;ale el prefijo empleado para direcciones link-local:";
 choices[99]= new Array();
 choices[99][0] = "fd00::/8";
 choices[99][1] = "fe00::/64";
 choices[99][2] = "fe80::/64";
 choices[99][3] = "No existen las direcciones link-local en IPv6";
 answers[99] = choices[99][2];
 units[99] = "100";
 comments[99] = "Id Pregunta: 10538. ";


