/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 103 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  Algunas t&eacute;cnicas de ayuda a la toma de decisiones son:";
 choices[0]= new Array();
 choices[0][0] = "Brain-storming, o tormenta de ideas";
 choices[0][1] = "Teor&iacute;a de grafos y an&aacute;lisis de redes";
 choices[0][2] = "Teor&iacute;a de colas o de l&iacute;neas de espera";
 choices[0][3] = "Todas las anteriores";
 answers[0] = choices[0][3];
 units[0] = "23";
 comments[0] = "Id Pregunta: 103. ";


//  Id pregunta: 125 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El American National Standard Institute (ANSI):";
 choices[1]= new Array();
 choices[1][0] = "Es el representante en EE.UU. de la ISO";
 choices[1][1] = "Ha desarrollado el est&aacute;ndar FDDI";
 choices[1][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[1][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[1] = choices[1][0];
 units[1] = "42";
 comments[1] = "Id Pregunta: 125. ";


//  Id pregunta: 163 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  El siguiente punto de verificaci&oacute;n de WAI (en la norma WCAG 1.0): &quot;Hasta que las aplicaciones de usuario permitan controlarlo, evite provocar parpadeo en la pantalla&quot;, &iquest;a qu&eacute; nivel de prioridad pertenece?:";
 choices[2]= new Array();
 choices[2][0] = "1";
 choices[2][1] = "2";
 choices[2][2] = "3";
 choices[2][3] = "no es ning&uacute;n punto de verificaci&oacute;n contemplado en WAI";
 answers[2] = choices[2][0];
 units[2] = "39";
 comments[2] = "Id Pregunta: 163. ";


//  Id pregunta: 181 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En el control de integridad de los datos no entra el control de:";
 choices[3]= new Array();
 choices[3][0] = "Fallos en la disponibilidad de los datos";
 choices[3][1] = "La p&eacute;rdida de los datos";
 choices[3][2] = "Duplicaciones de datos";
 choices[3][3] = "Alteraci&oacute;n del significado de los datos";
 answers[3] = choices[3][0];
 units[3] = "21";
 comments[3] = "Id Pregunta: 181. ";


//  Id pregunta: 333 Año de creación de pregunta: 2004-01-01
 questions[4]= "5)  Las organizaciones basadas en la informaci&oacute;n. Indique la respuesta FALSA:";
 choices[4]= new Array();
 choices[4][0] = "En los a&ntilde;os 20 las organizaciones se basaban en el mando-control. A partir de los a&ntilde;os 70 la informaci&oacute;n comenz&oacute; a ser un elemento estructural importante y se dio paso a las organizaciones basadas en la informaci&oacute;n.";
 choices[4][1] = "Seg&uacute;n Peter Drucker, uno de los gur&uacute;s de la gerencia de empresas, una de las caracter&iacute;sticas propias de las organizaciones basadas en la informaci&oacute;n es la reducci&oacute;n hasta un tercio del n&uacute;mero de ejecutivos.";
 choices[4][2] = "Una organizaci&oacute;n basada en la informaci&oacute;n obligatoriamente debe emplear nuevas tecnolog&iacute;as, ya que si no es imposible manejar el gran volumen de informaci&oacute;n generada e intercambiada.";
 choices[4][3] = "En una organizaci&oacute;n basada en el conocimiento los distintos especialistas dirigen y organizan su trabajo mediante la interacci&oacute;n con sus colegas, con un funcionamiento similar al de una orquesta.";
 answers[4] = choices[4][2];
 units[4] = "22";
 comments[4] = "Id Pregunta: 333. ";


//  Id pregunta: 347 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Con car&aacute;cter general, la transferencia de ficheros con datos de car&aacute;cter personal se puede hacer:";
 choices[5]= new Array();
 choices[5][0] = "A cualquier pa&iacute;s europeo y africano";
 choices[5][1] = "S&oacute;lo a Europa y Asia";
 choices[5][2] = "S&oacute;lo dentro de UE";
 choices[5][3] = "Con destino a pa&iacute;ses que proporcionen un nivel de protecci&oacute;n equiparable al que presta la LOPD";
 answers[5] = choices[5][3];
 units[5] = "29";
 comments[5] = "Id Pregunta: 347. ";


//  Id pregunta: 480 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;De qu&eacute; depende el canon de compensacion equitativa por copia privada establecido con la orden PRE/1743/2008 de 18 de junio?";
 choices[6]= new Array();
 choices[6][0] = "Del tipo de equipo (anal&oacute;gico o digital)";
 choices[6][1] = "Del destino del soporte";
 choices[6][2] = "De la categoria del equipo";
 choices[6][3] = "Todas son ciertas";
 answers[6] = choices[6][3];
 units[6] = "36,37";
 comments[6] = "Id Pregunta: 480. ";


//  Id pregunta: 520 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;En qu&eacute; fase del ciclo de vida se deben contemplar los controles de aplicaci&oacute;n por primera vez?";
 choices[7]= new Array();
 choices[7][0] = "Dise&ntilde;o";
 choices[7][1] = "An&aacute;lisis";
 choices[7][2] = "Construcci&oacute;n";
 choices[7][3] = "Pruebas de aceptaci&oacute;n";
 answers[7] = choices[7][1];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 520. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 592 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  El retraso de una actividad:";
 choices[8]= new Array();
 choices[8][0] = "supone un retraso siempre en el proyecto";
 choices[8][1] = "supondr&aacute; un retraso si no pertenece al camino cr&iacute;tico";
 choices[8][2] = "no supone retraso alguno si no pertenece al camino critico y la actividad no pasa a formar parte de este al alargar su duraci&oacute;n";
 choices[8][3] = "no supone retraso nunca";
 answers[8] = choices[8][2];
 units[8] = "28";
 comments[8] = "Id Pregunta: 592. ";


//  Id pregunta: 691 Año de creación de pregunta: 2009-01-01
 questions[9]= "10)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de: ";
 choices[9]= new Array();
 choices[9][0] = "3 meses";
 choices[9][1] = "6 meses";
 choices[9][2] = "12 meses";
 choices[9][3] = "2 a&ntilde;os";
 answers[9] = choices[9][3];
 units[9] = "30";
 comments[9] = "Id Pregunta: 691. reglamentariamente se podr&aacute; reducir a seis meses o ampliar a dos a&ntilde;os, como permite la Directiva 2006/24/CE";


//  Id pregunta: 1100 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[10]= new Array();
 choices[10][0] = "Superset o superconjunto";
 choices[10][1] = "Package o paquete";
 choices[10][2] = "Superclass o Superclase";
 choices[10][3] = "Colection o Colecci&oacute;n";
 answers[10] = choices[10][1];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1100. JCED - Preparatic XVII";


//  Id pregunta: 1681 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  Respecto a los cuatro tipos de drivers de JDBC, &iquest;Cu&aacute;l de ellos requiere la existencia de un servidor intermedio o middleware?";
 choices[11]= new Array();
 choices[11][0] = "Driver de tipo I";
 choices[11][1] = "Driver de tipo II";
 choices[11][2] = "Driver de tipo III";
 choices[11][3] = "Driver de tipo IV";
 answers[11] = choices[11][2];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1681. ";


//  Id pregunta: 1864 Año de creación de pregunta: 2006-01-01
 questions[12]= "13)  &iquest;En qu&eacute; nivel de la pila OSI se sit&uacute;a el protocolo LDAP?";
 choices[12]= new Array();
 choices[12][0] = "Aplicaci&oacute;n";
 choices[12][1] = "Transporte";
 choices[12][2] = "Red";
 choices[12][3] = "Sesi&oacute;n";
 answers[12] = choices[12][0];
 units[12] = "74";
 comments[12] = "Id Pregunta: 1864. ";


//  Id pregunta: 1871 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Qu&eacute; norma se utiliza para la certificaci&oacute;n de dispositivos seguros de creaci&oacute;n de firma?";
 choices[13]= new Array();
 choices[13][0] = "ISO 17799";
 choices[13][1] = "CWA 14169";
 choices[13][2] = "UNE 71502";
 choices[13][3] = "EIA 568 B2";
 answers[13] = choices[13][1];
 units[13] = "30";
 comments[13] = "Id Pregunta: 1871. ";


//  Id pregunta: 1886 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  Al pasar al modelo f&iacute;sico de datos las relaciones M:N entre clases se transforman en...";
 choices[14]= new Array();
 choices[14][0] = "Se propagan las claves.";
 choices[14][1] = "Dos tablas";
 choices[14][2] = "Una tabla";
 choices[14][3] = "Tres tablas";
 answers[14] = choices[14][2];
 units[14] = "80";
 comments[14] = "Id Pregunta: 1886. ";


//  Id pregunta: 1915 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[15]= new Array();
 choices[15][0] = "Una extensi&oacute;n de Swing";
 choices[15][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario";
 choices[15][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent";
 choices[15][3] = "Una familia de fuentes de caracteres";
 answers[15] = choices[15][1];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1915. ";


//  Id pregunta: 2029 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  Ivar Jacobson, Jim Rumbaugh y Grady Booch fueron los creadores de:";
 choices[16]= new Array();
 choices[16][0] = "UML";
 choices[16][1] = "XML";
 choices[16][2] = "HTML";
 choices[16][3] = "Ninguno de los anteriores";
 answers[16] = choices[16][0];
 units[16] = "82";
 comments[16] = "Id Pregunta: 2029. Similar a examen TIC SS A 2003";


//  Id pregunta: 2134 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes afirmaciones, respecto de las especificaciones de los requerimientos, es falsa?:";
 choices[17]= new Array();
 choices[17][0] = "La especificaci&oacute;n debe separar la funcionalidad de la implementaci&oacute;n";
 choices[17][1] = "La especificaci&oacute;n s&oacute;lo debe contemplar el software, aisl&aacute;ndolo del resto del sistema";
 choices[17][2] = "La especificaci&oacute;n debe ser ampliable y flexible";
 choices[17][3] = "La especificaci&oacute;n debe ser f&aacute;cilmente operativa";
 answers[17] = choices[17][1];
 units[17] = "78";
 comments[17] = "Id Pregunta: 2134. ";


//  Id pregunta: 2834 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  El proceso que va desde un alto nivel de abstracci&oacute;n hasta la propia implementaci&oacute;n f&iacute;sica del sistema se conoce como:";
 choices[18]= new Array();
 choices[18][0] = "Ingenier&iacute;a inversa.";
 choices[18][1] = "Reestructuraci&oacute;n.";
 choices[18][2] = "Ingenier&iacute;a hacia delante.";
 choices[18][3] = "Reingenier&iacute;a.";
 answers[18] = choices[18][2];
 units[18] = "91";
 comments[18] = "Id Pregunta: 2834. ";


//  Id pregunta: 2888 Año de creación de pregunta: 2005-01-01
 questions[19]= "20)  La red SARA (Intranet Administrativa) no tiene entre sus principales objetivos:";
 choices[19]= new Array();
 choices[19][0] = "Ser un &uacute;nico punto de conexi&oacute;n con las Comunidades Aut&oacute;nomas";
 choices[19][1] = "Conectar con la Uni&oacute;n Europea a trav&eacute;s de TESTA e IDA";
 choices[19][2] = "Conectar todos los edificios de la Administraci&oacute;n General del Estado";
 choices[19][3] = "Ser de utilidad en la implantaci&oacute;n de aplicaciones horizontales";
 answers[19] = choices[19][2];
 units[19] = "113,44";
 comments[19] = "Id Pregunta: 2888. ";


//  Id pregunta: 3176 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes no es un &aacute;rea funcional en el &aacute;mbito de la gesti&oacute;n de redes OSI mediante CMIP?:";
 choices[20]= new Array();
 choices[20][0] = "Fallos";
 choices[20][1] = "Seguridad";
 choices[20][2] = "Rendimiento";
 choices[20][3] = "Control remoto";
 answers[20] = choices[20][3];
 units[20] = "104";
 comments[20] = "Id Pregunta: 3176. ";


//  Id pregunta: 3200 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  El acceso b&aacute;sico en RDSI:";
 choices[21]= new Array();
 choices[21][0] = "Es utilizado exclusivamente por un &uacute;nico terminal";
 choices[21][1] = "Puede ser compartido hasta por un m&aacute;ximo de diecis&eacute;is terminales";
 choices[21][2] = "Puede ser compartido hasta por un m&aacute;ximo de ocho terminales";
 choices[21][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[21] = choices[21][2];
 units[21] = "103";
 comments[21] = "Id Pregunta: 3200. ";


//  Id pregunta: 3203 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  El algoritmo conocido como Spanning Tree Algorithm se usa:";
 choices[22]= new Array();
 choices[22][0] = "Para optimizar los caminos usados en redes complejas con routers";
 choices[22][1] = "Evitar bucles en redes con puentes transparentes que tienen varios path entre ellos";
 choices[22][2] = "Calcular los cambios a hacer en las configuraciones de los routers cuando alguno de ellos falla";
 choices[22][3] = "Se usa en redes de Token Bus para calcular a quien pasar el testigo (token) en caso de que la siguiente estaci&oacute;n no conteste (puede estar apagada o estropeada)";
 answers[22] = choices[22][1];
 units[22] = "102";
 comments[22] = "Id Pregunta: 3203. ";


//  Id pregunta: 3261 Año de creación de pregunta: 2009-01-01
 questions[23]= "24)  En GPRS, es razonable facturar:";
 choices[23]= new Array();
 choices[23][0] = "por tiempo de conexi&oacute;n";
 choices[23][1] = "por n&uacute;mero de conexiones";
 choices[23][2] = "por portadoras en uso";
 choices[23][3] = "por volumen y calidad de servicio";
 answers[23] = choices[23][3];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3261. ";


//  Id pregunta: 3656 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Un applet de Java es:";
 choices[24]= new Array();
 choices[24][0] = "Un int&eacute;rprete del lenguaje Java";
 choices[24][1] = "Una rutina Java que se ejecuta en el servidor recibiendo datos del browser o navegador";
 choices[24][2] = "Un programa Java, generalmente referenciado en una p&aacute;gina HTML, que se ejecuta en el cliente";
 choices[24][3] = "Un programa Java que accede a una base de datos relacional";
 answers[24] = choices[24][2];
 units[24] = "60";
 comments[24] = "Id Pregunta: 3656. ";


//  Id pregunta: 3949 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  En las redes basadas en servidores centrales que utilizan el modelo b&aacute;sico cliente-servidor:";
 choices[25]= new Array();
 choices[25][0] = "Un ordenador pone sus recursos a disposici&oacute;n del resto de ordenadores de la red, de forma que cada estaci&oacute;n recupera datos del servidor y los procesa como si fuesen locales";
 choices[25][1] = "Cada ordenador conectado a la red puede compartir la informaci&oacute;n y los recursos determinados previamente con los dem&aacute;s ordenadores de la red";
 choices[25][2] = "Los ordenadores utilizan enlaces a trav&eacute;s de los puertos serie o paralelo para transferir archivos o compartir perif&eacute;ricos";
 choices[25][3] = "Los ordenadores se encuentran conectados permanentemente entre s&iacute;, a trav&eacute;s de un sistema cerrado punto a punto";
 answers[25] = choices[25][0];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3949. ";


//  Id pregunta: 4227 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&quot;Thick&quot;)?";
 choices[26]= new Array();
 choices[26][0] = "BNC";
 choices[26][1] = "N-series";
 choices[26][2] = "TNC";
 choices[26][3] = "SMA-series";
 answers[26] = choices[26][1];
 units[26] = "99";
 comments[26] = "Id Pregunta: 4227. ";


//  Id pregunta: 4474 Año de creación de pregunta: 2007-01-01
 questions[27]= "28)  Cual de los siguientes no es un tipo de prueba contemplado en la metodolog&iacute;a Metrica V3?";
 choices[27]= new Array();
 choices[27][0] = "Pruebas unitarias.";
 choices[27][1] = "Pruebas singulares.";
 choices[27][2] = "Pruebas de integraci&oacute;n.";
 choices[27][3] = "Pruebas de regresi&oacute;n.";
 answers[27] = choices[27][1];
 units[27] = "86";
 comments[27] = "Id Pregunta: 4474. ";


//  Id pregunta: 4722 Año de creación de pregunta: 2007-01-01
 questions[28]= "29)  El uso de Sistemas Abiertos permite una serie de ventajas, indique cual de ellas no lo es.";
 choices[28]= new Array();
 choices[28][0] = "Mejorar, en general, la relaci&oacute;n precio/rendimiento.";
 choices[28][1] = "Garantiza la libertad de elecci&oacute;n.";
 choices[28][2] = "Facilita la gesti&oacute;n del sistema frente a los complejos sistemas propietarios";
 choices[28][3] = "Protege la inversi&oacute;n realizada en el equipo f&iacute;sico";
 answers[28] = choices[28][2];
 units[28] = "40";
 comments[28] = "Id Pregunta: 4722. Examen 2006 JCYL";


//  Id pregunta: 4786 Año de creación de pregunta: 2007-01-01
 questions[29]= "30)  Seg&uacute;n La t&eacute;cnica de estimaci&oacute;n Mark II de Puntos Funci&oacute;n, a cada atributo se le asigna un valor entre:";
 choices[29]= new Array();
 choices[29][0] = "1 y 5.";
 choices[29][1] = "1 y 8.";
 choices[29][2] = "0 y 8.";
 choices[29][3] = "0 y 5.";
 answers[29] = choices[29][3];
 units[29] = "27";
 comments[29] = "Id Pregunta: 4786. Castilla la Mancha B 06";


//  Id pregunta: 5065 Año de creación de pregunta: 2003-01-01
 questions[30]= "31)  En relaci&oacute;n con los ERP, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a SAP R/3?";
 choices[30]= new Array();
 choices[30][0] = "El m&oacute;dulo donde se gestionan las compras se denomina CO";
 choices[30][1] = "El m&oacute;dulo PM se encarga de gestionar la gesti&oacute;n de proyectos";
 choices[30][2] = "El m&oacute;dulo SD es parte del m&oacute;dulo de contabilidad financiera";
 choices[30][3] = "El m&oacute;dulo &quot;Basis&quot; se encarga de gestionar la base de datos";
 answers[30] = choices[30][3];
 units[30] = "65";
 comments[30] = "Id Pregunta: 5065. Examen TIC A 2007";


//  Id pregunta: 5068 Año de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a los XML Schemas es incorrecta?:";
 choices[31]= new Array();
 choices[31][0] = "Los XML Schemas utilizan sintaxis XML";
 choices[31][1] = "Es imposible referenciar m&uacute;ltiples XML Schemas desde el mismo documento XML";
 choices[31][2] = "Los XML Schemas soportan namespaces";
 choices[31][3] = "Los XML Schemas permiten definir tipos de datos";
 answers[31] = choices[31][1];
 units[31] = "69";
 comments[31] = "Id Pregunta: 5068. Examen TIC A 2007";


//  Id pregunta: 5108 Año de creación de pregunta: 2003-01-01
 questions[32]= "33)  El modelo CMMI:";
 choices[32]= new Array();
 choices[32][0] = "Es una metodolog&iacute;a de desarrollo software.";
 choices[32][1] = "Es una pr&aacute;ctica para estimaci&oacute;n de complejidad de software.";
 choices[32][2] = "Permite obtener un diagn&oacute;stico de la madurez de los procesos relacionados con las tecnolog&iacute;as de la informaci&oacute;n de una organizaci&oacute;n.";
 choices[32][3] = "Permite la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 answers[32] = choices[32][2];
 units[32] = "92";
 comments[32] = "Id Pregunta: 5108. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5159 Año de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l es la capacidad de un enlace E1?";
 choices[33]= new Array();
 choices[33][0] = "2048 Kbps.";
 choices[33][1] = "1544 Kbps";
 choices[33][2] = "8448 Kbps.";
 choices[33][3] = "155 Mbps.";
 answers[33] = choices[33][0];
 units[33] = "103";
 comments[33] = "Id Pregunta: 5159. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5566 Año de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.17 del IEEE?";
 choices[34]= new Array();
 choices[34][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[34][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[34][2] = "Resilient Packet Ring";
 choices[34][3] = "Traspaso entre redes";
 answers[34] = choices[34][2];
 units[34] = "101";
 comments[34] = "Id Pregunta: 5566. ";


//  Id pregunta: 5846 Año de creación de pregunta: 2009-01-01
 questions[35]= "36)  &iquest;Cual de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[35]= new Array();
 choices[35][0] = "BPML";
 choices[35][1] = "BPEL";
 choices[35][2] = "BPMN";
 choices[35][3] = "XPDL";
 answers[35] = choices[35][3];
 units[35] = "71";
 comments[35] = "Id Pregunta: 5846. MAP 2008 A1";


//  Id pregunta: 5862 Año de creación de pregunta: 2009-01-01
 questions[36]= "37)  Con relaci&oacute;n a la especificaci&oacute;n P3P1.1, indique cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[36]= new Array();
 choices[36][0] = "Es una especificaci&oacute;n desarrollada por la W3C";
 choices[36][1] = "P3P permite que los sitios Web muestren sus pr&aacute;cticas de privacidad en un formato est&aacute;ndar";
 choices[36][2] = "P3P est&aacute; basado en CCXML";
 choices[36][3] = "El lenguaje APPEL permite describir colecciones de preferencias relacionadas con las directivas P3P";
 answers[36] = choices[36][2];
 units[36] = "111";
 comments[36] = "Id Pregunta: 5862. MAP 2008 A1";


//  Id pregunta: 5867 Año de creación de pregunta: 2009-01-01
 questions[37]= "38)  &iquest;Cu&aacute;ntos bits utiliza el protocolo IPv6 (Internet Protocol version 6) para el campo de direcciones IP?";
 choices[37]= new Array();
 choices[37][0] = "16 bits";
 choices[37][1] = "32 bits";
 choices[37][2] = "64 bits";
 choices[37][3] = "128 bits";
 answers[37] = choices[37][3];
 units[37] = "100";
 comments[37] = "Id Pregunta: 5867. MAP 2008 A1";


//  Id pregunta: 5971 Año de creación de pregunta: 2010-01-01
 questions[38]= "39)  Cu&aacute;l de las siguientes opciones NO es un principio de la protecci&oacute;n de datos seg&uacute;n la Ley Org&aacute;nica 15/1999:";
 choices[38]= new Array();
 choices[38][0] = "Datos relativos a las personas";
 choices[38][1] = "Calidad de los datos";
 choices[38][2] = "Consentimiento del afectado";
 choices[38][3] = "Seguridad de los datos";
 answers[38] = choices[38][0];
 units[38] = "29";
 comments[38] = "Id Pregunta: 5971. Castilla La Mancha 2009";


//  Id pregunta: 5989 Año de creación de pregunta: 2010-01-01
 questions[39]= "40)  Un servidor de telnet permite:";
 choices[39]= new Array();
 choices[39][0] = "A los usuarios entrar en otro ordenador y llevar a cabo tareas como si estuviesen trabajando en el ordenador remoto.";
 choices[39][1] = "Intercambiar informaci&oacute;n ofreciendo capacidades de discusi&oacute;n en tiempo real.";
 choices[39][2] = "Gestionar listas de correo, ya sea para env&iacute;o masivo o para gestionar foros de discusi&oacute;n.";
 choices[39][3] = "Distribuir contenido multimedia a las aplicaciones cliente.";
 answers[39] = choices[39][0];
 units[39] = "112";
 comments[39] = "Id Pregunta: 5989. TIC A 2009";


//  Id pregunta: 6060 Año de creación de pregunta: 2010-01-01
 questions[40]= "41)  El modelo de capacidad y madurez (CMM, Capability Maturity Model) agrupa las &aacute;reas de proceso en 5 niveles de madurez, que son los siguientes:";
 choices[40]= new Array();
 choices[40][0] = "Inicial, repetible, definido, gestionado y optimizado.";
 choices[40][1] = "Inicial, repetible, eficaz, eficiente y optimizado.";
 choices[40][2] = "Inicial, definido, medido, adaptado y optimizado.";
 choices[40][3] = "Inicial, repetible, comprometido, gestionado y optimizado.";
 answers[40] = choices[40][0];
 units[40] = "92";
 comments[40] = "Id Pregunta: 6060. TIC A 2009";


//  Id pregunta: 6130 Año de creación de pregunta: 2010-01-01
 questions[41]= "42)  Cuando puntuamos criterios de diferentes alternativas y nos referimos al umbral de saciedad, entendemos por tal:";
 choices[41]= new Array();
 choices[41][0] = "El valor que debe cumplir la puntuaci&oacute;n de un criterio para ser considerado aceptable. por tanto es el m&iacute;nimo exigido.";
 choices[41][1] = "El valor de un criterio a partir del cual no se obtiene una utilidad adicional, por lo que su exceso no es tenido en cuenta.";
 choices[41][2] = "Un valor ordinal definido por el evaluador conforme a una escala subjetiva.";
 choices[41][3] = "Un m&eacute;todo de limitaci&oacute;n de la asignaci&oacute;n de puntuaciones mediante entrop&iacute;a. Se dice entonces que el criterio est&aacute; saciado.";
 answers[41] = choices[41][1];
 units[41] = "34";
 comments[41] = "Id Pregunta: 6130. TIC A 2009";


//  Id pregunta: 6174 Año de creación de pregunta: 2010-01-01
 questions[42]= "43)  Indique cual de entre los cuales no es una funci&oacute;n del LMS:";
 choices[42]= new Array();
 choices[42][0] = "Seguimiento de la actividad del alumno.";
 choices[42][1] = "Publicaci&oacute;n de contenidos de formaci&oacute;n";
 choices[42][2] = "Comunicaci&oacute;n profesor-alumno.";
 choices[42][3] = "Matriculaci&oacute;n en cursos.";
 answers[42] = choices[42][2];
 units[42] = "66";
 comments[42] = "Id Pregunta: 6174. ";


//  Id pregunta: 6285 Año de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de un Plan de Sistemas?";
 choices[43]= new Array();
 choices[43][0] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[43][1] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resultados esperados, etc";
 choices[43][2] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[43][3] = "Todos lo son";
 answers[43] = choices[43][3];
 units[43] = "77";
 comments[43] = "Id Pregunta: 6285. ";


//  Id pregunta: 6302 Año de creación de pregunta: 2010-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es una propiedad del modelo orientado a objetos?";
 choices[44]= new Array();
 choices[44][0] = "Abstracci&oacute;n";
 choices[44][1] = "Encapsulaci&oacute;n";
 choices[44][2] = "Independencia";
 choices[44][3] = "Modularidad";
 answers[44] = choices[44][2];
 units[44] = "82";
 comments[44] = "Id Pregunta: 6302. ";


//  Id pregunta: 6349 Año de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes no es un servicio de marcadores sociales en web?";
 choices[45]= new Array();
 choices[45][0] = "Delicious";
 choices[45][1] = "Digg";
 choices[45][2] = "Visconti";
 choices[45][3] = "Reddit";
 answers[45] = choices[45][2];
 units[45] = "120";
 comments[45] = "Id Pregunta: 6349. ";


//  Id pregunta: 6501 Año de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Qu&eacute; navegador de Internet est&aacute; licenciado bajo la licencia MPL?";
 choices[46]= new Array();
 choices[46][0] = "Google Chrome";
 choices[46][1] = "Mozilla Firefox";
 choices[46][2] = "Mosaic";
 choices[46][3] = "Netscape Navigator";
 answers[46] = choices[46][1];
 units[46] = "61";
 comments[46] = "Id Pregunta: 6501. ";


//  Id pregunta: 6535 Año de creación de pregunta: 2010-01-01
 questions[47]= "48)  Dentro de la gu&iacute;a de servicios ISO 9004, la orientaci&oacute;n para la direcci&oacute;n se basa en distintos principios de gesti&oacute;n";
 choices[47]= new Array();
 choices[47][0] = "Enfoque al cliente";
 choices[47][1] = "Liderazgo";
 choices[47][2] = "Participaci&oacute;n del personal";
 choices[47][3] = "Todas las respuestas anteriores son correctas";
 answers[47] = choices[47][3];
 units[47] = "92";
 comments[47] = "Id Pregunta: 6535. ";


//  Id pregunta: 6639 Año de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta cuando hablamos de la m&eacute;trica de Puntos de Funci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "Se usa para estimar el tama&ntilde;o del software que se va a desarrollar";
 choices[48][1] = "Se usa para estimar la productividad del software que se va a desarrollar";
 choices[48][2] = "Ve la aplicaci&oacute;n como una caja negra";
 choices[48][3] = "Fue propuesta por Tom De Marco";
 answers[48] = choices[48][3];
 units[48] = "88";
 comments[48] = "Id Pregunta: 6639. ";


//  Id pregunta: 7285 Año de creación de pregunta: 2010-01-01
 questions[49]= "50)  &quot;La t&eacute;cnica de  virtualizaci&oacute;n de infraestructura TIC denominada &quot;&quot;paravirtualizaci&oacute;n&quot;&quot;, pone &eacute;nfasis (comparado con la virtualizaci&oacute;n &quot;&quot;normal&quot;&quot;) en:&quot;";
 choices[49]= new Array();
 choices[49][0] = "Compatibilidad e interoperabilidad";
 choices[49][1] = "Rendimiento";
 choices[49][2] = "Costes";
 choices[49][3] = "Inteligencia arti&iexcl;ficial";
 answers[49] = choices[49][1];
 units[49] = "119";
 comments[49] = "Id Pregunta: 7285. Examen TIC B 2009";


//  Id pregunta: 7299 Año de creación de pregunta: 2010-01-01
 questions[50]= "51)  Indique cu&aacute;l de las siguientes es una medida de centralidad en una red social:";
 choices[50]= new Array();
 choices[50][0] = "Grado (degree)";
 choices[50][1] = "Cercan&iacute;a (closeness)";
 choices[50][2] = "Intermediaci&oacute;n (betweenness)";
 choices[50][3] = "Todas son medidas de centralidad";
 answers[50] = choices[50][3];
 units[50] = "63";
 comments[50] = "Id Pregunta: 7299. ";


//  Id pregunta: 7308 Año de creación de pregunta: 2010-01-01
 questions[51]= "52)  Indique cu&aacute;l de los siguientes NO es un lenguaje de marcado multimodal:";
 choices[51]= new Array();
 choices[51][0] = "EMMA";
 choices[51][1] = "VoiceXML";
 choices[51][2] = "SALT";
 choices[51][3] = "Todos son lenguajes de marcado multimodal";
 answers[51] = choices[51][1];
 units[51] = "94";
 comments[51] = "Id Pregunta: 7308. ";


//  Id pregunta: 7336 Año de creación de pregunta: 2010-01-01
 questions[52]= "53)  Es un organismo europeo de normalizaci&oacute;n, de acuerdo a la Directiva 98/34/CE";
 choices[52]= new Array();
 choices[52][0] = "CEN";
 choices[52][1] = "ICANN";
 choices[52][2] = "SETSI";
 choices[52][3] = "GNU";
 answers[52] = choices[52][0];
 units[52] = "42";
 comments[52] = "Id Pregunta: 7336. ";


//  Id pregunta: 8199 Año de creación de pregunta: 2011-01-01
 questions[53]= "54)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que: ";
 choices[53]= new Array();
 choices[53][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente. ";
 choices[53][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form. ";
 choices[53][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n. ";
 choices[53][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[53] = choices[53][0];
 units[53] = "69";
 comments[53] = "Id Pregunta: 8199. Examen TIC A1 2010";


//  Id pregunta: 8217 Año de creación de pregunta: 2011-01-01
 questions[54]= "55)  En relaci&oacute;n a la facturaci&oacute;n electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[54]= new Array();
 choices[54][0] = "La AEAT pone a disposici&oacute;n de los usuarios software distribuible para generar PDF417.";
 choices[54][1] = "El formato &quot;Facturae&quot; permite la inclusi&oacute;n de extensiones a nivel de l&iacute;nea, de factura o de lote de facturas.";
 choices[54][2] = "El certificado a usar para firmar la factura electr&oacute;nica y que &eacute;sta tenga validez ha de ser en todo caso el del obligado tributario.";
 choices[54][3] = "La Orden EHA/962/2007 dice que la obligaci&oacute;n de remisi&oacute;n y conservaci&oacute;n de facturas o documentos sustitutivos se cumplir&aacute; para la facturaci&oacute;n electr&oacute;nica mediante el uso de firma electr&oacute;nica reconocida.";
 answers[54] = choices[54][1];
 units[54] = "70";
 comments[54] = "Id Pregunta: 8217. Examen TIC A1 2010";


//  Id pregunta: 8272 Año de creación de pregunta: 2011-01-01
 questions[55]= "56)  Dentro del est&aacute;ndar del metalenguaje XML se&ntilde;ale la afirmaci&oacute;n INCORRECTA:";
 choices[55]= new Array();
 choices[55][0] = "Un DTD es un documento escrito en XML para definir el contenido y estructura de documentos XML.";
 choices[55][1] = "Los XML Schemas y los DTD permiten validar documentos XML.";
 choices[55][2] = "Los XML Schemas soportan herencia entre tipos de datos.";
 choices[55][3] = "Los DTD no est&aacute;n basados en el uso de &quot;namespaces&quot;.";
 answers[55] = choices[55][0];
 units[55] = "69";
 comments[55] = "Id Pregunta: 8272. Examen TIC A1 2010";


//  Id pregunta: 8290 Año de creación de pregunta: 2011-01-01
 questions[56]= "57)  Respecto al protocolo ligero de acceso a directorios (LDAPv3):";
 choices[56]= new Array();
 choices[56][0] = "No admite TCP/IP.";
 choices[56][1] = "No es un protocolo abierto.";
 choices[56][2] = "No requiere X.500.";
 choices[56][3] = "No requiere X.500.";
 answers[56] = choices[56][2];
 units[56] = "74";
 comments[56] = "Id Pregunta: 8290. Examen TIC A2 2010";


//  Id pregunta: 8291 Año de creación de pregunta: 2011-01-01
 questions[57]= "58)  Dada la red 193.163.14.192/27, podemos decir que: ";
 choices[57]= new Array();
 choices[57][0] = "La direcci&oacute;n de broadcast de dicha red es la 193.168.14.255.";
 choices[57][1] = "Admite hasta 30 hosts, sin contar las direcciones de identificaci&oacute;n de red y de broadcast.";
 choices[57][2] = "La direcci&oacute;n IP 193.168.14.225 pertenece a dicha red.";
 choices[57][3] = "Es una red con direccionamiento privado.";
 answers[57] = choices[57][1];
 units[57] = "100";
 comments[57] = "Id Pregunta: 8291. Examen TIC A2 2010";


//  Id pregunta: 8349 Año de creación de pregunta: 2011-01-01
 questions[58]= "59)  Dentro de los productos que engloba la plataforma .NET, las funciones de un servidor web las realiza:";
 choices[58]= new Array();
 choices[58][0] = "IIS (Internet Information Services)";
 choices[58][1] = "Apache";
 choices[58][2] = "Joomla";
 choices[58][3] = "Microsoft Web Server";
 answers[58] = choices[58][0];
 units[58] = "115";
 comments[58] = "Id Pregunta: 8349. Examen TIC A2 2010";


//  Id pregunta: 8359 Año de creación de pregunta: 2011-01-01
 questions[59]= "60)  En el proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (seg&uacute;n M&eacute;trica v3), &iquest;qu&eacute; acci&oacute;n realiza el grupo de Aseguramiento de la Calidad en relaci&oacute;n a1 Plan de Pruebas?";
 choices[59]= new Array();
 choices[59][0] = "Define su contenido.";
 choices[59][1] = "Revisa los resultados de pruebas ejecutadas en este proceso.";
 choices[59][2] = "Revisa la existencia de una normativa para la gesti&oacute;n de los resultados de las pruebas, que permita constatar que se han realizado y descubrir las diferencias entre los resultados esperados y los obtenidos.";
 choices[59][3] = "Coordina su realizaci&oacute;n para que cumplan en su definici&oacute;n los crltenos establecidos en el plan de aseguramiento de calidad.";
 answers[59] = choices[59][2];
 units[59] = "86";
 comments[59] = "Id Pregunta: 8359. Examen TIC A2 2010";


//  Id pregunta: 8369 Año de creación de pregunta: 2011-01-01
 questions[60]= "61)  En los diagramas estructurados (Nassi-Schneiderman): ";
 choices[60]= new Array();
 choices[60][0] = "Las flechas de uni&oacute;n son verticales.";
 choices[60][1] = "No hay flechas de uni&oacute;n.";
 choices[60][2] = "Cada posible acci&oacute;n se representa con una figura diferente.";
 choices[60][3] = "Las cajas no son contiguas.";
 answers[60] = choices[60][1];
 units[60] = "81";
 comments[60] = "Id Pregunta: 8369. Examen TIC A2 2010";


//  Id pregunta: 8393 Año de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo del Software (PUDS)?";
 choices[61]= new Array();
 choices[61][0] = "Se basa en las Historias de Usuario.";
 choices[61][1] = "Proceso centrado en la arquitectura.";
 choices[61][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[61][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[61] = choices[61][1];
 units[61] = "79";
 comments[61] = "Id Pregunta: 8393. Examen TIC A2 2010";


//  Id pregunta: 8408 Año de creación de pregunta: 2011-01-01
 questions[62]= "63)  En los dispositivos tipo esc&aacute;ner, la resoluci&oacute;n interpolada es: ";
 choices[62]= new Array();
 choices[62][0] = "Una resoluci&oacute;n calculada que genera nuevos puntos a partir de otros reales m&aacute;s pr&oacute;ximos. ";
 choices[62][1] = "La cantidad de puntos individuales de una imagen captada mediante el sensor";
 choices[62][2] = "La empleada por los programas OCR para identificar el texto. ";
 choices[62][3] = "La que determina la profundidad del color";
 answers[62] = choices[62][0];
 units[62] = "93, 94";
 comments[62] = "Id Pregunta: 8408. Examen TIC A2 2010";


//  Id pregunta: 8410 Año de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes pol&iacute;ticas de planificaci&oacute;n es de tipo preemptive? ";
 choices[63]= new Array();
 choices[63][0] = "Shortest Job First (SJF)";
 choices[63][1] = "Shortest Remaining Time First (SRTF). ";
 choices[63][2] = "First-come, first-served (FCFS)";
 choices[63][3] = "Shortest Process Next (SPN). ";
 answers[63] = choices[63][1];
 units[63] = "52";
 comments[63] = "Id Pregunta: 8410. Examen TIC A2 2010";


//  Id pregunta: 8458 Año de creación de pregunta: 2011-01-01
 questions[64]= "65)  Con el fin de garantizar que las aplicaciones comerciales y las herramientas desarrolladas a medida, se encuentren alineadas con las necesidades del negocio, el est&aacute;ndar COBIT, define 7 procesos a seguir &iquest;en cu&aacute;l de los cuatro dominios que utiliza COBIT para clasificar los procesos de negocio, se encuentran incluidos?:";
 choices[64]= new Array();
 choices[64][0] = "Planificaci&oacute;n y Organizaci&oacute;n";
 choices[64][1] = "Supervisi&oacute;n y Evaluaci&oacute;n";
 choices[64][2] = "Adquisici&oacute;n e Implementaci&oacute;n";
 choices[64][3] = "Ninguna de las anteriores";
 answers[64] = choices[64][2];
 units[64] = "98";
 comments[64] = "Id Pregunta: 8458. Analista Ayto. Madrid 2010";


//  Id pregunta: 8627 Año de creación de pregunta: 2011-01-01
 questions[65]= "66)  En el contexto de las redes de cable, con objeto de permitir la asignaci&oacute;n din&aacute;mica de ancho de banda a los usuarios, &iquest;cu&aacute;les son las estrategias posibles de acceso a trav&eacute;s de m&oacute;dem?";
 choices[65]= new Array();
 choices[65][0] = "Por encaminamiento IP y basada en ATM";
 choices[65][1] = "A trav&eacute;s del nodo primario de la red y a trav&eacute;s del nodo secundario de la red";
 choices[65][2] = "Mediante solicitud-reserva y por contienda.";
 choices[65][3] = "En estrella y en &aacute;rbol.";
 answers[65] = choices[65][2];
 units[65] = "101, 102";
 comments[65] = "Id Pregunta: 8627. Examen TIC A2 2010 interna";


//  Id pregunta: 8644 Año de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[66]= new Array();
 choices[66][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[66][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[66][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[66][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[66] = choices[66][3];
 units[66] = "57 ,58";
 comments[66] = "Id Pregunta: 8644. Examen TIC A2 2010 interna";


//  Id pregunta: 8663 Año de creación de pregunta: 2011-01-01
 questions[67]= "68)  En la tecnolog&iacute;a VDSL, &iquest;cu&aacute;ntos canales se utilizan para la transmisi&oacute;n de los datos?";
 choices[67]= new Array();
 choices[67][0] = "4 (2 de bajada y 2 para subida)";
 choices[67][1] = "3 (2 de bajada y 1 de subida)";
 choices[67][2] = "2 (1 de bajada y 1 de subida)";
 choices[67][3] = "5 (3 de bajada y 2 de subida)";
 answers[67] = choices[67][0];
 units[67] = "107";
 comments[67] = "Id Pregunta: 8663. Examen UPM A2 2011";


//  Id pregunta: 8841 Año de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; est&aacute;ndar debe de cumplir un sistema de videoconferencia H.323 para poder compartir datos?";
 choices[68]= new Array();
 choices[68][0] = " H.239";
 choices[68][1] = " H.264";
 choices[68][2] = " H.263";
 choices[68][3] = " H.240";
 answers[68] = choices[68][0];
 units[68] = "117";
 comments[68] = "Id Pregunta: 8841. Examen UC3M 2010";


//  Id pregunta: 8873 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  El desarrollo en Espiral es un modelo del ciclo de vida del software, que establece una serie de etapas por los que pasa el mismo, desde su concepci&oacute;n inicial hasta la finalizaci&oacute;n del producto. Se&ntilde;ale las etapas correctas";
 choices[69]= new Array();
 choices[69][0] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; y &ldquo;Desarrollo y Validaci&oacute;n&rdquo;";
 choices[69][1] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[69][2] = "&ldquo;Planificaci&oacute;n de actividades y recursos necesarios&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[69][3] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 answers[69] = choices[69][0];
 units[69] = "76";
 comments[69] = "Id Pregunta: 8873. Analista Ayto. Madrid 2010";


//  Id pregunta: 8971 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes definiciones corresponde a la Teor&iacute;a de la Calidad de la Productividad de Lowler?";
 choices[70]= new Array();
 choices[70][0] = "El coste de la calidad siempre es el mismo independientemente del coste";
 choices[70][1] = "Cuanta m&aacute;s calidad tiene un producto m&aacute;s caro es de producir";
 choices[70][2] = "Un producto de calidad es m&aacute;s barato de producir";
 choices[70][3] = "Es caro de producir en primera instancia, a mitad del desarrollo es independiente y al final el coste se encarece exponencialmente";
 answers[70] = choices[70][2];
 units[70] = "87,88";
 comments[70] = "Id Pregunta: 8971. ";


//  Id pregunta: 8985 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[71]= new Array();
 choices[71][0] = "Organization for the Advancement of Structured Information Services";
 choices[71][1] = "Organization for the Advancement of Service Integration Standards";
 choices[71][2] = "Organization for the Advancement of Structured Information Standards";
 choices[71][3] = "Organization for the Application of Structured Information Standards";
 answers[71] = choices[71][2];
 units[71] = "51, 69";
 comments[71] = "Id Pregunta: 8985. ";


//  Id pregunta: 8999 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; versiones de SNMP no implementan encriptaci&oacute;n de sus paquetes?";
 choices[72]= new Array();
 choices[72][0] = "v1 y v2";
 choices[72][1] = "v1 y v2c";
 choices[72][2] = "v1";
 choices[72][3] = "todas las versiones implementan encriptaci&oacute;n de sus paquetes";
 answers[72] = choices[72][1];
 units[72] = "104";
 comments[72] = "Id Pregunta: 8999. Examen UPM A2 2011";


//  Id pregunta: 9079 Año de creación de pregunta: 2013-01-01
 questions[73]= "74)  Para cumplir el nivel AA en la pauta &quot;Ayuda a la entrada de datos&quot;, respecto a los formularios de entrada de datos que tengan consecuencias legales, cu&aacute;l de las siguientes opciones NO se exige:";
 choices[73]= new Array();
 choices[73][0] = "Tipograf&iacute;a clara y legible. ";
 choices[73][1] = "Verificaci&oacute;n por parte del usuario.";
 choices[73][2] = "Reversibilidad. ";
 choices[73][3] = "Confirmaci&oacute;n.";
 answers[73] = choices[73][0];
 units[73] = "39";
 comments[73] = "Id Pregunta: 9079. ";


//  Id pregunta: 9098 Año de creación de pregunta: 2013-01-01
 questions[74]= "75)  El lenguaje de expresi&oacute;n de derechos REL se basa en contenedores de grants. Indica cual de los siguientes elementos no forma parte de un grant.";
 choices[74]= new Array();
 choices[74][0] = "Principal.";
 choices[74][1] = "Right.";
 choices[74][2] = "Resource.";
 choices[74][3] = "Constraints.";
 answers[74] = choices[74][3];
 units[74] = "37";
 comments[74] = "Id Pregunta: 9098. ";


//  Id pregunta: 9195 Año de creación de pregunta: 2013-01-01
 questions[75]= "76)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[75]= new Array();
 choices[75][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[75][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[75][2] = "toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[75][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[75] = choices[75][2];
 units[75] = "36";
 comments[75] = "Id Pregunta: 9195. ";


//  Id pregunta: 9210 Año de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;C&oacute;mo son las conexiones FC?";
 choices[76]= new Array();
 choices[76][0] = "Punto a punto";
 choices[76][1] = "Bucle arbitrado";
 choices[76][2] = "Red Conmutada";
 choices[76][3] = "Todas son v&aacute;lidas";
 answers[76] = choices[76][3];
 units[76] = "48";
 comments[76] = "Id Pregunta: 9210. ";


//  Id pregunta: 9263 Año de creación de pregunta: 2013-01-01
 questions[77]= "78)  Indicad cu&aacute;l de las siguientes versiones NO se corresponde con una distribuci&oacute;n de Linux:";
 choices[77]= new Array();
 choices[77][0] = "Kubuntu.";
 choices[77][1] = "Red Hat";
 choices[77][2] = "Slackware.";
 choices[77][3] = "IRIX.";
 answers[77] = choices[77][3];
 units[77] = "53";
 comments[77] = "Id Pregunta: 9263. Examen TICA2-2011";


//  Id pregunta: 9327 Año de creación de pregunta: 2013-01-01
 questions[78]= "79)  El efecto de la diafon&iacute;a en un cable se define como:";
 choices[78]= new Array();
 choices[78][0] = "La p&eacute;rdida de potencia en la se&ntilde;al debido a la emisi&oacute;n electromagnetica al ambiente.";
 choices[78][1] = "La variacion de la velocidad de propagacion de la se&ntilde;al en funcion de la frecuencia";
 choices[78][2] = "La interferencia electromagnetica producida entre se&ntilde;ales que discurren simultaneamente entre pares paralelos.";
 choices[78][3] = "Es la distorsion de la se&ntilde;al por la influencia de se&ntilde;ales espureas del ambiente.";
 answers[78] = choices[78][2];
 units[78] = "99";
 comments[78] = "Id Pregunta: 9327. ";


//  Id pregunta: 9346 Año de creación de pregunta: 2013-01-01
 questions[79]= "80)  Acerca de RDSI y sus diferentes servicios:";
 choices[79]= new Array();
 choices[79][0] = "Los servicios portadores soportan la comunicaci&oacute;n terminal a terminal";
 choices[79][1] = "Los teleservicios proporcionan capacidades adicionales para los servicios suplementearios y los servicios portadores.";
 choices[79][2] = "Los servicios suplementarios soportan la comunicaci&oacute;n terminal a terminal y controlan los procesos de comunicaci&oacute;n entre usuarios.";
 choices[79][3] = "Los teleservicios soportan la comunicaci&oacute;n terminal a terminal";
 answers[79] = choices[79][3];
 units[79] = "103";
 comments[79] = "Id Pregunta: 9346. Pag 9 temario ASTIC 2011";


//  Id pregunta: 9360 Año de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de estas afirmaciones es cierta en relaci&oacute;n con las redes de &aacute;rea local?";
 choices[80]= new Array();
 choices[80][0] = "El subnivel LLC se encarga del control l&oacute;gico del enlace, por lo que gestiona el tipo de acceso al medio.";
 choices[80][1] = "El subnivel MAC controla el acceso al medio, creando una trama que se adapta a la topolog&iacute;a de la red f&iacute;sica.";
 choices[80][2] = "El subnivel MAC se encarga del control l&oacute;gico del enlace.";
 choices[80][3] = "El subnivel MAC es el responsable de las funciones de entramado, control de errores y control de flujo.";
 answers[80] = choices[80][1];
 units[80] = "101";
 comments[80] = "Id Pregunta: 9360. pag. 5 ASTIC 2011";


//  Id pregunta: 9375 Año de creación de pregunta: 2013-01-01
 questions[81]= "82)  En la Teor&iacute;a de la Decisi&oacute;n Multicreiterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo no es de asignaci&oacute;n de pesos a los criterios:";
 choices[81]= new Array();
 choices[81][0] = "DELPHI";
 choices[81][1] = "Entrop&iacute;a";
 choices[81][2] = "SAATY";
 choices[81][3] = "PROMETHEE";
 answers[81] = choices[81][3];
 units[81] = "34";
 comments[81] = "Id Pregunta: 9375. ";


//  Id pregunta: 9405 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  QSIG es";
 choices[82]= new Array();
 choices[82][0] = "Un protocolo de se&ntilde;alizaci&oacute;n normalizado a nivel internacional para su uso entre Private Automatic Branch eXchanges (PABX).";
 choices[82][1] = "Un sistema de calidad aplicado a la telefon&iacute;a SIP.";
 choices[82][2] = "Una extensi&oacute;n a SS7 que puede enviarse sobre IP.";
 choices[82][3] = "Ninguna de las anteriores";
 answers[82] = choices[82][0];
 units[82] = "109";
 comments[82] = "Id Pregunta: 9405. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9426 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  Cuando un municipio elabora un instrumento de planificaci&oacute;n territorial o urban&iacute;stica";
 choices[83]= new Array();
 choices[83][0] = "Deber&aacute;n obtener un informe sobre la adecuaci&oacute;n de dichos instrumentos de planificaci&oacute;n con la Ley 9/2014 y con la normativa sectorial de telecomunicaciones y sobre las necesidades de redes p&uacute;blicas de comunicaciones electr&oacute;nicas en el &aacute;mbito territorial a que se refieran.";
 choices[83][1] = "El informe lo emite el Ministerio de Industria, Energ&iacute;a y Turismo.";
 choices[83][2] = "Los instrumentos de planificaci&oacute;n territorial o urban&iacute;stica no son competencia estatal, por lo que no se debe emitir ning&uacute;n informe.";
 choices[83][3] = "a) y b) son correctas";
 answers[83] = choices[83][3];
 units[83] = "110";
 comments[83] = "Id Pregunta: 9426. ";


//  Id pregunta: 9451 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  En UML, NO es un diagrama din&aacute;mico:";
 choices[84]= new Array();
 choices[84][0] = "Diagrama de secuencia.";
 choices[84][1] = "Diagrama de estado.";
 choices[84][2] = "Diagrama de despliegue.";
 choices[84][3] = "Diagrama de colaboraci&oacute;n.";
 answers[84] = choices[84][2];
 units[84] = "82";
 comments[84] = "Id Pregunta: 9451. Examen AGE TIC A1 2011";


//  Id pregunta: 9491 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[85]= new Array();
 choices[85][0] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[85][1] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual de datos";
 choices[85][2] = "El diagrama de casos de uso es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[85][3] = "El diagrama de flujo de datos es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 answers[85] = choices[85][0];
 units[85] = "78";
 comments[85] = "Id Pregunta: 9491. ";


//  Id pregunta: 9515 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es la estructura est&aacute;ndar de una directiva JSP?";
 choices[86]= new Array();
 choices[86][0] = "&lt;@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[86][1] = "&lt;%@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...%&gt;";
 choices[86][2] = "&lt;!@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[86][3] = "&lt;*@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...*&gt;";
 answers[86] = choices[86][1];
 units[86] = "116";
 comments[86] = "Id Pregunta: 9515. ";


//  Id pregunta: 9540 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[87]= new Array();
 choices[87][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa.";
 choices[87][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[87][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[87][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[87] = choices[87][3];
 units[87] = "30";
 comments[87] = "Id Pregunta: 9540. Examen TIC A1 2011";


//  Id pregunta: 9594 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[88]= new Array();
 choices[88][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir accedera los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[88][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir accedera los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[88][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[88][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[88] = choices[88][0];
 units[88] = "59";
 comments[88] = "Id Pregunta: 9594. Xunta Libre 2011";


//  Id pregunta: 9664 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Los sistemas multiprocesador:";
 choices[89]= new Array();
 choices[89][0] = "Son sistemas d&eacute;bilmente acoplados.";
 choices[89][1] = "Sus procesadores no dependen unos de otros.";
 choices[89][2] = "Son sistemas fuertemente acoplados.";
 choices[89][3] = "Ninguna de las anteriores.";
 answers[89] = choices[89][2];
 units[89] = "45";
 comments[89] = "Id Pregunta: 9664. ";


//  Id pregunta: 9921 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[90]= new Array();
 choices[90][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[90][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[90][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[90][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[90] = choices[90][0];
 units[90] = "86,58";
 comments[90] = "Id Pregunta: 9921. TIC A2, Examen 2013";


//  Id pregunta: 9996 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[91]= new Array();
 choices[91][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[91][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[91][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[91][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[91] = choices[91][2];
 units[91] = "108";
 comments[91] = "Id Pregunta: 9996. ";


//  Id pregunta: 9998 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  El recurso especial en materia de contrataci&oacute;n permite la impugnaci&oacute;n, previa alrecurso contencioso-administrativo, de";
 choices[92]= new Array();
 choices[92][0] = "los actos de tr&aacute;mite que no resuelven la licitaci&oacute;n.";
 choices[92][1] = "las penalizaciones impuestas por ejecuci&oacute;n defectuosa.";
 choices[92][2] = "los acuerdos de adjudicaci&oacute;n.";
 choices[92][3] = "la resoluci&oacute;n del recurso de Alzada.";
 answers[92] = choices[92][2];
 units[92] = "41";
 comments[92] = "Id Pregunta: 9998. ";


//  Id pregunta: 10032 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a qu&eacute; subred pertenece.";
 choices[93]= new Array();
 choices[93][0] = "95.26.35.144/30 ";
 choices[93][1] = "95.26.35.144/29";
 choices[93][2] = "95.26.35.128/27 ";
 choices[93][3] = "95.26.35.128/25";
 answers[93] = choices[93][2];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10032. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10042 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[94]= new Array();
 choices[94][0] = "RSVP ";
 choices[94][1] = "ARP";
 choices[94][2] = "802.1ar ";
 choices[94][3] = "H.264";
 answers[94] = choices[94][0];
 units[94] = "100, 109";
 comments[94] = "Id Pregunta: 10042. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10163 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  En el modelo l&oacute;gico relacional, la cardinalidad de una relaci&oacute;n se corresponde con:";
 choices[95]= new Array();
 choices[95][0] = "N&uacute;mero de atributos de la relaci&oacute;n";
 choices[95][1] = "N&uacute;mero m&iacute;nimo de ocurrencias de una entidad que pueden participar en la relaci&oacute;n";
 choices[95][2] = "N&uacute;mero de entidades que participan en la relaci&oacute;n o asociaci&oacute;n";
 choices[95][3] = "N&uacute;mero de tuplas de la relaci&oacute;n";
 answers[95] = choices[95][3];
 units[95] = "58";
 comments[95] = "Id Pregunta: 10163. ";


//  Id pregunta: 10223 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Teniendo las siguientes sentencias, el resultado ser&aacute;:";
 choices[96]= new Array();
 choices[96][0] = "127";
 choices[96][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[96][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[96][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[96] = choices[96][2];
 units[96] = "60";
 comments[96] = "Id Pregunta: 10223. ";


//  Id pregunta: 10257 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En referencia al tratamiento de datos de car&aacute;cter personal, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[97]= new Array();
 choices[97][0] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que no obran en su poder datos personales del solicitante";
 choices[97][1] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que, de obrar en su poder datos personales del solicitante, &eacute;stos no son datos especialmente protegidos";
 choices[97][2] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso";
 choices[97][3] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso si los datos se refieren a menores, no siendo obligatorio responder en otros casos";
 answers[97] = choices[97][2];
 units[97] = "29";
 comments[97] = "Id Pregunta: 10257. Art&iacute;culo 25.2 del RD 1720/2007";


//  Id pregunta: 10449 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  En relaci&oacute;n a una red privada virtual (VPN, Virtual Private Network), es FALSO que ";
 choices[98]= new Array();
 choices[98][0] = "una VPN permite utilizar la red p&uacute;blica de un operador para construir una red privada dedicada, con funcionalidades de red y de seguridad equivalentes a las que se obtienen con una red privada. ";
 choices[98][1] = "en la actualidad, el concepto de VPN se extiende para incluir las soluciones que permiten el acceso remoto de un equipo a la red de una organizaci&oacute;n a trav&eacute;s de redes p&uacute;blicas, especialmente Internet, mediante la utilizaci&oacute;n de mecanismos de t&uacute;nel y cifrado. ";
 choices[98][2] = "el protocolo MPLS (Multiprotocol Label Switching) permite crear VPNs de nivel 4, utilizando como tecnolog&iacute;as de acceso T1/E1, ATM &oacute; Frame Relay. ";
 choices[98][3] = "VPLS (Virtual Private LAN Switching) es un servicio de red LAN privada virtual, que permite entregar tramas de nivel 2 directamente entre sedes remotas de un mismo organismo  ";
 answers[98] = choices[98][2];
 units[98] = "111";
 comments[98] = "Id Pregunta: 10449. Examen TIC A1 2013";


//  Id pregunta: 10554 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Cuando una metodolog&iacute;a de ciclo de vida de desarrollo de sistemas es inadecuada, el riesgo m&aacute;s serio del nuevo sistema ser&aacute;:";
 choices[99]= new Array();
 choices[99][0] = "Se completar&aacute; tarde";
 choices[99][1] = "Superar&aacute; las estimaciones de coste";
 choices[99][2] = "No cumplir&aacute; con las necesidades de negocio y de los usuarios";
 choices[99][3] = "Ser&aacute; incompatible con los sistemas existentes";
 answers[99] = choices[99][2];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10554. Aunque todas las respuestas son riesgos, lo primero y m&aacute;s perjudicial es que el sistema no cumplir&aacute; con las necesidades de los usuarios y del negocio.";


