/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 68 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas atiende &uacute;nicamente al criterio de mayor peso y mayor puntuaci&oacute;n, resolviendo los empates con el siguiente de mayor peso?:";
 choices[0]= new Array();
 choices[0][0] = "Concordancia";
 choices[0][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[0][2] = "Ponderaci&oacute;n lineal";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][1];
 units[0] = "34";
 comments[0] = "Id Pregunta: 68. ";


//  Id pregunta: 451 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  Se&ntilde;alar la respuesta correcta si hablamos de eficacia y eficiencia:";
 choices[1]= new Array();
 choices[1][0] = "La eficacia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participan en &eacute;l";
 choices[1][1] = "La eficiencia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participa en &eacute;l";
 choices[1][2] = "La eficiencia es la medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios";
 choices[1][3] = "La eficacia &oacute;ptima se logra cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[1] = choices[1][1];
 units[1] = "38";
 comments[1] = "Id Pregunta: 451. ";


//  Id pregunta: 931 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; es un applet?:";
 choices[2]= new Array();
 choices[2][0] = "Una aplicaci&oacute;n escrita en Java";
 choices[2][1] = "Un control ActiveX";
 choices[2][2] = "Un programa de Java incrustado en una p&aacute;gina HTML";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][2];
 units[2] = "60";
 comments[2] = "Id Pregunta: 931. ";


//  Id pregunta: 1857 Año de creación de pregunta: 2006-01-01
 questions[3]= "4)  En relaci&oacute;n a los certificados X.509:";
 choices[3]= new Array();
 choices[3][0] = "Se codifican mediante la notaci&oacute;n ASN.1";
 choices[3][1] = "Permite el uso en sus campos de nombres X.500 y DNS";
 choices[3][2] = "Se han definido extensiones que permiten incluir informaci&oacute;n espec&iacute;fica";
 choices[3][3] = "Todas las anteriores son ciertas";
 answers[3] = choices[3][3];
 units[3] = "73";
 comments[3] = "Id Pregunta: 1857. ";


//  Id pregunta: 1919 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[4]= new Array();
 choices[4][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro";
 choices[4][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash)";
 choices[4][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas";
 choices[4][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo";
 answers[4] = choices[4][2];
 units[4] = "73";
 comments[4] = "Id Pregunta: 1919. ";


//  Id pregunta: 1982 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l no es una decisi&oacute;n que deba tomar una organizaci&oacute;n para establecer su planificaci&oacute;n estrat&eacute;gica?:";
 choices[5]= new Array();
 choices[5][0] = "Determinar el personal y recursos necesarios para desarrollar los proyectos";
 choices[5][1] = "Establecimiento de los objetivos y metas principales";
 choices[5][2] = "Definici&oacute;n del marco econ&oacute;mico presupuestario y del &aacute;mbito de actuaci&oacute;n de la organizaci&oacute;n";
 choices[5][3] = "Formulaci&oacute;n de los diferentes programas y proyectos orientados a conseguir los objetivos";
 answers[5] = choices[5][0];
 units[5] = "77";
 comments[5] = "Id Pregunta: 1982. ";


//  Id pregunta: 2004 Año de creación de pregunta: 2004-01-01
 questions[6]= "7)  Si una entidad reconocida como independiente, muestra la conformidad de una empresa, producto... con los requisitos definidos en normas o especificaciones t&eacute;cnicas, se denomina:";
 choices[6]= new Array();
 choices[6][0] = "Normalizaci&oacute;n";
 choices[6][1] = "Certificaci&oacute;n";
 choices[6][2] = "ISO 9001";
 choices[6][3] = "Acuerdo de nivel de servicio";
 answers[6] = choices[6][1];
 units[6] = "87";
 comments[6] = "Id Pregunta: 2004. ";


//  Id pregunta: 2076 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  Se&ntilde;ale entre los siguientes tipos de mantenimiento de sistemas de informaci&oacute;n aquel que queda fuera del &aacute;mbito de METRICA V3:";
 choices[7]= new Array();
 choices[7][0] = "Cambios precisos para corregir errores del software";
 choices[7][1] = "Incorporaciones necesarias para cubrir la expansi&oacute;n de las necesidades de los usuarios";
 choices[7][2] = "Modificaciones y eliminaciones necesarias para atender los cambios en las necesidades de los usuarios";
 choices[7][3] = "Acciones necesarias para mejorar la calidad interna de los sistemas";
 answers[7] = choices[7][3];
 units[7] = "86";
 comments[7] = "Id Pregunta: 2076. Pregunta Junta Andalucia - A";


//  Id pregunta: 2194 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;ndo debe aplicarse un plan de garant&iacute;a de calidad?:";
 choices[8]= new Array();
 choices[8][0] = "En casos de proyectos de gran envergadura";
 choices[8][1] = "Cuando sea rentable econ&oacute;micamente";
 choices[8][2] = "Cuando el cliente as&iacute; lo solicite";
 choices[8][3] = "Cuando el coste de no aplicarlo sea mayor que el de aplicarlo";
 answers[8] = choices[8][3];
 units[8] = "87";
 comments[8] = "Id Pregunta: 2194. ";


//  Id pregunta: 2210 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; entidades certifican ISO-9000 en Espa&ntilde;a?:";
 choices[9]= new Array();
 choices[9][0] = "S&oacute;lo ISO";
 choices[9][1] = "S&oacute;lo AENOR";
 choices[9][2] = "Empresas privadas";
 choices[9][3] = "AENOR y empresas privadas";
 answers[9] = choices[9][3];
 units[9] = "92";
 comments[9] = "Id Pregunta: 2210. ";


//  Id pregunta: 2320 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  En el Plan General de Garant&iacute;a de Calidad se calcula un cierto Coeficiente de Divergencia CDi:";
 choices[10]= new Array();
 choices[10][0] = "0 &lt;= CDi &lt; 3 representa casos que pueden ser controlados mediante la aplicaci&oacute;n adecuada del Plan General de Garantia de Calidad";
 choices[10][1] = "0 &gt;= CDi &gt; -3 representa un planteamiento desajustado que debe ser revisado necesariamente";
 choices[10][2] = "El CDi calculado no puede tener valores inferiores a -3, por la forma que es calculado";
 choices[10][3] = "Son ciertas todas las respuestas anteriores";
 answers[10] = choices[10][0];
 units[10] = "88";
 comments[10] = "Id Pregunta: 2320. ";


//  Id pregunta: 2399 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  La metodolog&iacute;a M&eacute;trica Versi&oacute;n 3:";
 choices[11]= new Array();
 choices[11][0] = "No incorpora una interface para la gesti&oacute;n de proyectos";
 choices[11][1] = "No incorpora una interface para la gesti&oacute;n de la configuraci&oacute;n";
 choices[11][2] = "Establece que el estudio de viabilidad del sistema queda fuera de la metodolog&iacute;a, al ser previo al desarrollo del sistema de informaci&oacute;n";
 choices[11][3] = "Ha sido concebida para abarcar el desarrollo completo de sistemas de informaci&oacute;n sea cual sea su complejidad y magnitud";
 answers[11] = choices[11][3];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2399. ";


//  Id pregunta: 2436 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  La versi&oacute;n 3 de la metodolog&iacute;a M&eacute;trica:";
 choices[12]= new Array();
 choices[12][0] = "Cubre tanto desarrollos estructurados como desarrollos orientados a objetos ";
 choices[12][1] = "Cubre exclusivamente desarrollos estructurados";
 choices[12][2] = "Cubre exclusivamente desarrollos orientados a objetos";
 choices[12][3] = "Cubre exclusivamente desarrollos orientados a entornos microinform&aacute;ticos";
 answers[12] = choices[12][0];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2436. ";


//  Id pregunta: 2467 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  No es un &quot;agente&quot; en el modelo EFQM:";
 choices[13]= new Array();
 choices[13][0] = "Liderazgo";
 choices[13][1] = "Gesti&oacute;n de recursos humanos";
 choices[13][2] = "Pol&iacute;ticas y estrategias";
 choices[13][3] = "Satisfacci&oacute;n del cliente";
 answers[13] = choices[13][3];
 units[13] = "92";
 comments[13] = "Id Pregunta: 2467. ";


//  Id pregunta: 2493 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Se&ntilde;alar la respuesta correcta respecto a METRICA V3:";
 choices[14]= new Array();
 choices[14][0] = "No propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 choices[14][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos";
 choices[14][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de su propia metodolog&iacute;a";
 choices[14][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 answers[14] = choices[14][2];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2493. ";


//  Id pregunta: 2577 Año de creación de pregunta: 2003-01-01
 questions[15]= "16)  La planificaci&oacute;n estrat&eacute;gica es";
 choices[15]= new Array();
 choices[15][0] = "un  momento en el tiempo para tomar decisiones";
 choices[15][1] = "una herramienta para anticiparse a los cambios";
 choices[15][2] = "una herramienta que permite que los cambios sean consecuencia de las acciones emprendidas por la organizaci&oacute;n";
 choices[15][3] = "una herramineta que se limita e extrapolar el presente al futuro";
 answers[15] = choices[15][2];
 units[15] = "77";
 comments[15] = "Id Pregunta: 2577. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2603 Año de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest; Cu&aacute;l de las siguientes no es una t&eacute;cnica contemplada en Metrica v3?";
 choices[16]= new Array();
 choices[16][0] = "SADT";
 choices[16][1] = "HVE (historia de la vida de las entidades)";
 choices[16][2] = "T&eacute;cnicas matriciales";
 choices[16][3] = "Diagrama de transici&oacute;n de estados";
 answers[16] = choices[16][1];
 units[16] = "86";
 comments[16] = "Id Pregunta: 2603. ";


//  Id pregunta: 2728 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  La funci&oacute;n principal del Comit&eacute; de Direcci&oacute;n en la planificaci&oacute;n estrat&eacute;gica es:";
 choices[17]= new Array();
 choices[17][0] = "Definir la administraci&oacute;n, procedimiento y organizaci&oacute;n del trabajo.";
 choices[17][1] = "la toma de decisiones a lo largo de las distintas etapas/fases en que se descompone el plan";
 choices[17][2] = "Colaborar en la soluci&oacute;n funcional de los problemas planteados";
 choices[17][3] = "Realizar estudios espec&iacute;ficos";
 answers[17] = choices[17][1];
 units[17] = "77";
 comments[17] = "Id Pregunta: 2728. ";


//  Id pregunta: 2881 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  La norma ISO 9004:2000";
 choices[18]= new Array();
 choices[18][0] = "Es la versi&oacute;n oficial, en espa&ntilde;ol, de la la Norma Europea EN ISO 9004 de diciembre de 2000";
 choices[18][1] = "Es la misma Norma que la UNE-EN ISO 9004-1 de marzo de 1995";
 choices[18][2] = "Es una norma cuya certificaci&oacute;n de los productos que se realizan con ella la lleva a cabo AENOR";
 choices[18][3] = "Es la versi&oacute;n actualizada en el 2000 de la Norma ISO 10011-3:1991";
 answers[18] = choices[18][0];
 units[18] = "92";
 comments[18] = "Id Pregunta: 2881. ";


//  Id pregunta: 2885 Año de creación de pregunta: 2005-01-01
 questions[19]= "20)  Los principales componentes de la Red SARA (Intranet Administrativa) son:";
 choices[19]= new Array();
 choices[19][0] = "&aacute;reas de conexi&oacute;n y red troncal";
 choices[19][1] = "&aacute;reas de conexi&oacute;n, red troncal, centro de servicios comunes, centro de acceso remoto y centros de servicios espec&iacute;ficos";
 choices[19][2] = "&aacute;reas de conexi&oacute;n, red troncal, centro de servicios comunes y centro de acceso remoto";
 choices[19][3] = "&aacute;reas de conexi&oacute;n, red troncal, redes perif&eacute;ricas, centro de servicios comunes, centro de acceso remoto y centros de servicios espec&iacute;ficos";
 answers[19] = choices[19][2];
 units[19] = "113,44";
 comments[19] = "Id Pregunta: 2885. ";


//  Id pregunta: 2891 Año de creación de pregunta: 2005-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes servicios no ser&aacute; considerado un servicio b&aacute;sico a prestar dentro de la ed SARA (Intranet Administrativa)?:";
 choices[20]= new Array();
 choices[20][0] = "Servicio de DNS";
 choices[20][1] = "Servicio de Foros de discusi&oacute;n";
 choices[20][2] = "Servicio de Videoconferencia";
 choices[20][3] = "Servicio de Correo electr&oacute;nico";
 answers[20] = choices[20][2];
 units[20] = "113,44";
 comments[20] = "Id Pregunta: 2891. ";


//  Id pregunta: 2925 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  En relaci&oacute;n con GPRS se&ntilde;ale la opci&oacute;n incorrecta";
 choices[21]= new Array();
 choices[21][0] = "El acceso radio es por paquetes de datos";
 choices[21][1] = "Hasta 8 usuarios pueden compartir eficientemente un &uacute;nico timeslot de radio";
 choices[21][2] = "La tarificaci&oacute;n es por tiempo de conexi&oacute;n";
 choices[21][3] = "La red GPRS se puede comunicar con redes TCP/IP";
 answers[21] = choices[21][2];
 units[21] = "108";
 comments[21] = "Id Pregunta: 2925. Similar a examen TIC SS A 2003";


//  Id pregunta: 2936 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es uno de los estadios en la estandarizaci&oacute;n del IAB?";
 choices[22]= new Array();
 choices[22][0] = "Borrador de Internet";
 choices[22][1] = "Est&aacute;ndar propuesto";
 choices[22][2] = "Borrador de est&aacute;ndar";
 choices[22][3] = "Est&aacute;ndar temporal";
 answers[22] = choices[22][3];
 units[22] = "112,42";
 comments[22] = "Id Pregunta: 2936. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2949 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  ActiveX s&oacute;lo puede ejecutarse en:";
 choices[23]= new Array();
 choices[23][0] = "Java";
 choices[23][1] = "UNIX";
 choices[23][2] = "Microsoft/Intel";
 choices[23][3] = "Virtual Machine";
 answers[23] = choices[23][2];
 units[23] = "114";
 comments[23] = "Id Pregunta: 2949. Similar a examen TIC SS A 2003";


//  Id pregunta: 3029 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[24]= new Array();
 choices[24][0] = "criptoan&aacute;lisis lineal";
 choices[24][1] = "criptoan&aacute;lisis continuo";
 choices[24][2] = "sweep-attack";
 choices[24][3] = "fuerza bruta";
 answers[24] = choices[24][3];
 units[24] = "111";
 comments[24] = "Id Pregunta: 3029. ";


//  Id pregunta: 3037 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes componentes de software no forma parte del servidor de aplicaciones en una arquitectura a tres capas?:";
 choices[25]= new Array();
 choices[25][0] = "P&aacute;ginas din&aacute;micas";
 choices[25][1] = "Java Virtual Machine";
 choices[25][2] = "Navegador Web";
 choices[25][3] = "Int&eacute;rprete de Scripting";
 answers[25] = choices[25][2];
 units[25] = "114";
 comments[25] = "Id Pregunta: 3037. ";


//  Id pregunta: 3150 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de la seguridad en el correo electr&oacute;nico?:";
 choices[26]= new Array();
 choices[26][0] = "Los usuarios MOSS y PEM necesitan certificados X.509";
 choices[26][1] = "PEM requiere que primero se firme el contenido del correo electr&oacute;nico y, a continuaci&oacute;n, se encripte";
 choices[26][2] = "PEM restringe su uso al entorno texto";
 choices[26][3] = "La extension de PEM con MIME se denomina MOSS";
 answers[26] = choices[26][0];
 units[26] = "106";
 comments[26] = "Id Pregunta: 3150. ";


//  Id pregunta: 3242 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l es la funci&oacute;n principal del protocolo ICMP?:";
 choices[27]= new Array();
 choices[27][0] = "Convertir direcciones hardware en direcciones IP";
 choices[27][1] = "Convertir direcciones IP en direcciones hardware";
 choices[27][2] = "Estar orientado a la conexi&oacute;n y proporcionar una conexi&oacute;n full-duplex fiable";
 choices[27][3] = "Manejar el control de la informaci&oacute;n y de errores entre el router y el host";
 answers[27] = choices[27][3];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3242. ";


//  Id pregunta: 3254 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;ntas subredes son posibles en una red de clase C, con una m&aacute;scara de subnet de 255.255.255.224?:";
 choices[28]= new Array();
 choices[28][0] = "32";
 choices[28][1] = "30";
 choices[28][2] = "8";
 choices[28][3] = "6";
 answers[28] = choices[28][2];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3254. Ver docu. IPsubnet0";


//  Id pregunta: 3280 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.400 de OSI?:";
 choices[29]= new Array();
 choices[29][0] = "Agente de usuario (UA)";
 choices[29][1] = "Sistema de almacenamiento de mensajes (MS)";
 choices[29][2] = "Sistema de enrutamiento de mensajes (MRS)";
 choices[29][3] = "Sistema de mensajes interpersonales (IPMS)";
 answers[29] = choices[29][2];
 units[29] = "106";
 comments[29] = "Id Pregunta: 3280. ";


//  Id pregunta: 3328 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[30]= new Array();
 choices[30][0] = "applet";
 choices[30][1] = "cookie";
 choices[30][2] = "socket";
 choices[30][3] = "control activeX";
 answers[30] = choices[30][1];
 units[30] = "113";
 comments[30] = "Id Pregunta: 3328. ";


//  Id pregunta: 3362 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Del protocolo IKE de IPSec podemos decir:";
 choices[31]= new Array();
 choices[31][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[31][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[31][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[31][3] = "nada de lo anterior es cierto";
 answers[31] = choices[31][0];
 units[31] = "111";
 comments[31] = "Id Pregunta: 3362. ";


//  Id pregunta: 3368 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Dentro de los medios f&iacute;sicos de transmisi&oacute;n de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[32]= new Array();
 choices[32][0] = "Con rayo laser se pueden obtener anchos de banda del orden de 1 Ghz";
 choices[32][1] = "La conducci&oacute;n en fibra &oacute;ptica se realiza cuando el &iacute;ndicede refracci&oacute;n del vidrio del n&uacute;cleo es ligeramente inferir al de la cubierta";
 choices[32][2] = "Una guiaonda es similar a un coaxial en cuanto a banda de frecuencias en que se utiliza";
 choices[32][3] = "Los radioenlaces de microondas pueden asimilarse a un cable coxial f&iacute;sico";
 answers[32] = choices[32][2];
 units[32] = "99";
 comments[32] = "Id Pregunta: 3368. ";


//  Id pregunta: 3376 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  El est&aacute;ndar ITU-T para audio digital no comprimido en el sonido telef&oacute;nico es:";
 choices[33]= new Array();
 choices[33][0] = "Q.932";
 choices[33][1] = "G.722";
 choices[33][2] = "G.711";
 choices[33][3] = "Q.931";
 answers[33] = choices[33][2];
 units[33] = "117";
 comments[33] = "Id Pregunta: 3376. ";


//  Id pregunta: 3516 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  En el servicio de telefon&iacute;a celular se utiliza el concepto de celda indicando:";
 choices[34]= new Array();
 choices[34][0] = "Zona de cobertura del terminal";
 choices[34][1] = "Distancia m&aacute;xima del terminal a la estaci&oacute;n repetidora";
 choices[34][2] = "Distancia m&iacute;nima entre estaciones repetidoras";
 choices[34][3] = "Zona de cobertura de una estaci&oacute;n base";
 answers[34] = choices[34][3];
 units[34] = "108";
 comments[34] = "Id Pregunta: 3516. ";


//  Id pregunta: 3558 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  En telefon&iacute;a m&oacute;vil, &iquest;es posible en Espa&ntilde;a cambiar de operador conservando el n&uacute;mero?:";
 choices[35]= new Array();
 choices[35][0] = "S&iacute;, siempre  ";
 choices[35][1] = "No, nunca";
 choices[35][2] = "No, salvo para empresas";
 choices[35][3] = "S&iacute;, dependiendo de los operadores implicados";
 answers[35] = choices[35][0];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3558. ";


//  Id pregunta: 3722 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Los cortafuegos de filtrado de paquetes:";
 choices[36]= new Array();
 choices[36][0] = "analizan el tr&aacute;fico de la red fundamentalmente en la capa 3";
 choices[36][1] = "generalmente se usan formando 2 listas de reglas: una con acciones permitidas y otra con acciones denegadas";
 choices[36][2] = "son &uacute;tiles contra ataques de denegaci&oacute;n de servicio, y destacan por su rapidez transparencia y flexibilidad";
 choices[36][3] = "Todas las respuestas anteriores son correctas";
 answers[36] = choices[36][3];
 units[36] = "111";
 comments[36] = "Id Pregunta: 3722. ";


//  Id pregunta: 3765 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  Para poder aumentar el rendimiento de los medios de comunicaci&oacute;n se han desarrollado diversos sistemas de multiplexaci&oacute;n. Elija la opci&oacute;n que considere cierta:";
 choices[37]= new Array();
 choices[37][0] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en el tiempo cuando cada canal de entrada se modula sobre una portadora diferente";
 choices[37][1] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en frecuencia cuando a cada canal de entrada se le asigna un per&iacute;odo de tiempo dentro de una trama";
 choices[37][2] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en frecuencia cuando a cada canal de entrada se le asigna una frecuencia portadora distinta";
 choices[37][3] = "Se dice que sobre un medio de transmisi&oacute;n se ha utilizado un sistema de multiplexaci&oacute;n por divisi&oacute;n en el tiempo cuando a cada canal de entrada se le asigna una frecuencia entre las disponibles en el espectro del medio";
 answers[37] = choices[37][2];
 units[37] = "99";
 comments[37] = "Id Pregunta: 3765. *: multiplexacion";


//  Id pregunta: 4055 Año de creación de pregunta: 2006-01-01
 questions[38]= "39)  Un mensaje se puede cifrar";
 choices[38]= new Array();
 choices[38][0] = "Mediante mecanismos de cifrado sim&eacute;trico y asim&eacute;trico";
 choices[38][1] = "S&oacute;lo mediante mecanismos de cifrado sim&eacute;trico como DES";
 choices[38][2] = "S&oacute;lo mediante mecanismos de cifrado asim&eacute;trico como RSA";
 choices[38][3] = "Se puede cifrar con mecanismos de cifrado sim&eacute;trico, aunque por velocidad es preferible cifrar con criptograf&iacute;a de clave asim&eacute;trica";
 answers[38] = choices[38][0];
 units[38] = "111";
 comments[38] = "Id Pregunta: 4055. ";


//  Id pregunta: 4077 Año de creación de pregunta: 2006-01-01
 questions[39]= "40)  La red externa a la que se conecta el departamento de compras para comunicarse con sus proveedores se llama";
 choices[39]= new Array();
 choices[39][0] = "Intranet";
 choices[39][1] = "inter-intranet";
 choices[39][2] = "extranet abierta";
 choices[39][3] = "extranet";
 answers[39] = choices[39][3];
 units[39] = "113";
 comments[39] = "Id Pregunta: 4077. ";


//  Id pregunta: 4081 Año de creación de pregunta: 2006-01-01
 questions[40]= "41)  Un proxy o apoderado permite";
 choices[40]= new Array();
 choices[40][0] = "realizar funciones de repetidor, ocultando la m&aacute;quina solicitante";
 choices[40][1] = "disponer de una memoria temporal para almacenar las p&aacute;ginas web m&aacute;s visitadas";
 choices[40][2] = "traducir las direcciones internas a externas y viceversa";
 choices[40][3] = "Todas  las respuestas son correctas";
 answers[40] = choices[40][3];
 units[40] = "113";
 comments[40] = "Id Pregunta: 4081. ";


//  Id pregunta: 4096 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  Con que tecnolog&iacute;a se relaciona el Bytecode";
 choices[41]= new Array();
 choices[41][0] = "Java";
 choices[41][1] = ".Net";
 choices[41][2] = "Java Script";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][0];
 units[41] = "116";
 comments[41] = "Id Pregunta: 4096. ";


//  Id pregunta: 4104 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Tim Berners-Lee lider&oacute; un equipo de f&iacute;sicos en el CERN que cre&oacute;:";
 choices[42]= new Array();
 choices[42][0] = "El lenguaje PHP en 1993";
 choices[42][1] = "El lenguaje HTML en 1989";
 choices[42][2] = "El lenguaje Perl en 1979";
 choices[42][3] = "El lenguaje HTML en 1991";
 answers[42] = choices[42][1];
 units[42] = "114";
 comments[42] = "Id Pregunta: 4104. ";


//  Id pregunta: 4149 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  M&eacute;todo seguro de autorizaci&oacute;n de acceso a un servicio en una red desarrollado en el proyecto Athena del MIT";
 choices[43]= new Array();
 choices[43][0] = "Carnivore";
 choices[43][1] = "Internet Key Exchange (IKE)";
 choices[43][2] = "Kerberos";
 choices[43][3] = "SSL";
 answers[43] = choices[43][2];
 units[43] = "111";
 comments[43] = "Id Pregunta: 4149. ";


//  Id pregunta: 4150 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Sniffer de paquetes desarrollado por el FBI para la monitorizaci&oacute;n de las transmisiones electr&oacute;nicas de criminales";
 choices[44]= new Array();
 choices[44][0] = "Carnivore";
 choices[44][1] = "Internet Key Exchange (IKE)";
 choices[44][2] = "Kerberos";
 choices[44][3] = "SSL";
 answers[44] = choices[44][0];
 units[44] = "111";
 comments[44] = "Id Pregunta: 4150. ";


//  Id pregunta: 4209 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  El protocolo utilizado para acceder a Internet desde cualquier dispositivo inal&aacute;mbrico haciendo uso del lenguaje WML (Wireless Markup Language) es:";
 choices[45]= new Array();
 choices[45][0] = "WEP";
 choices[45][1] = "WPA";
 choices[45][2] = "WAP";
 choices[45][3] = "WTP";
 answers[45] = choices[45][2];
 units[45] = "108";
 comments[45] = "Id Pregunta: 4209. ";


//  Id pregunta: 4382 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en m&eacute;trica V3, en el proceso de construcci&oacute;n del sistema?";
 choices[46]= new Array();
 choices[46][0] = "Generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[46][1] = "Ejecuci&oacute;n de las pruebas unitarias.";
 choices[46][2] = "Definici&oacute;n de interfaces de usuario.";
 choices[46][3] = "Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n.";
 answers[46] = choices[46][1];
 units[46] = "86";
 comments[46] = "Id Pregunta: 4382. ";


//  Id pregunta: 4395 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes no se considera una tarea habitual de una administrador de sistemas?";
 choices[47]= new Array();
 choices[47][0] = "Agregar y quitar usuarios.";
 choices[47][1] = "Desarrollo de aplicaciones internas.";
 choices[47][2] = "Realizar copias de seguridad.";
 choices[47][3] = "Monitorizar el sistema.";
 answers[47] = choices[47][1];
 units[47] = "26";
 comments[47] = "Id Pregunta: 4395. Examen TIC MAP B 2006";


//  Id pregunta: 4444 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  El modelo CMMi , en su modo Staged establece 5 niveles de madurez. Indique el orden correcto de menor a mayor madurez:";
 choices[48]= new Array();
 choices[48][0] = "Performed, Managed, Defined, Quantitatively Managed, Optimizing";
 choices[48][1] = "Performed, Optimizing, Managed, Defined, Quantitatively Managed";
 choices[48][2] = "Performed, Defined, Managed, Quantitatively Managed, Optimizing";
 choices[48][3] = "Performed, Defined, Managed, Quantitatively Managed, Optimizing";
 answers[48] = choices[48][0];
 units[48] = "87";
 comments[48] = "Id Pregunta: 4444. ";


//  Id pregunta: 4752 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  La interfaz entre la RNC de la UTRAN y el SGSN es:";
 choices[49]= new Array();
 choices[49][0] = "Iu";
 choices[49][1] = "Iub";
 choices[49][2] = " Gi";
 choices[49][3] = " Gb";
 answers[49] = choices[49][0];
 units[49] = "108";
 comments[49] = "Id Pregunta: 4752. ";


//  Id pregunta: 4753 Año de creación de pregunta: 2009-01-01
 questions[50]= "51)  En UMTS R99 o R3, la interfaz entre la UTRAN y el SGSN se establece sobre:";
 choices[50]= new Array();
 choices[50][0] = "Frame Relay";
 choices[50][1] = " ATM";
 choices[50][2] = "VPLS";
 choices[50][3] = "Cualquiera";
 answers[50] = choices[50][1];
 units[50] = "108";
 comments[50] = "Id Pregunta: 4753. ";


//  Id pregunta: 4835 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[51]= new Array();
 choices[51][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas detiempo real";
 choices[51][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y";
 choices[51][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889";
 choices[51][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol)con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece esteprotocolo";
 answers[51] = choices[51][0];
 units[51] = "100, 117";
 comments[51] = "Id Pregunta: 4835. ";


//  Id pregunta: 4866 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  El atributo de posicionamiento de un applet &quot;absbottom&quot;:";
 choices[52]= new Array();
 choices[52][0] = "Coloca el applet en el margen izquierdo de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado asu derecha";
 choices[52][1] = "Coloca el applet en el margen derecho de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado a suizquierda";
 choices[52][2] = "Coloca la parte inferior del applet coincidiendo con el centro de la l&iacute;nea actual";
 choices[52][3] = "Coloca la parte superior del applet coincidiendo con la parte superior del texto en la l&iacute;nea actual";
 answers[52] = choices[52][2];
 units[52] = "116";
 comments[52] = "Id Pregunta: 4866. ";


//  Id pregunta: 4928 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Entre los agentes participantes en la gesti&oacute;n del proceso de desarrollo de un Sistema, el &ldquo;especialista en comunicaciones&rdquo; responde al perfil de:";
 choices[53]= new Array();
 choices[53][0] = "Jefe de Proyecto.";
 choices[53][1] = "Directivo.";
 choices[53][2] = "Consultor.";
 choices[53][3] = "Ninguna de las anteriores.";
 answers[53] = choices[53][2];
 units[53] = "86";
 comments[53] = "Id Pregunta: 4928. Examen TIC B 2007";


//  Id pregunta: 4944 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;En cu&aacute;l de los siguientes procesos de M&eacute;trica v.3 se obtiene como producto de alguna de sus tareas los Procedimientos de Migraci&oacute;n y Carga Inicial de Datos?:";
 choices[54]= new Array();
 choices[54][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[54][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[54][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[54][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[54] = choices[54][2];
 units[54] = "86";
 comments[54] = "Id Pregunta: 4944. Examen TIC B 2007";


//  Id pregunta: 5056 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique qu&eacute; informaci&oacute;n de las siguientes NO aporta un URL (Localizador Universal de Recurso) para identificar unrecurso de la web:";
 choices[55]= new Array();
 choices[55][0] = "El nombre del recurso";
 choices[55][1] = "El tipo del recurso";
 choices[55][2] = "Donde se encuentra el recurso";
 choices[55][3] = "El protocolo que hay que usar para obtener el recurso";
 answers[55] = choices[55][1];
 units[55] = "112";
 comments[55] = "Id Pregunta: 5056. Examen TIC A 2007";


//  Id pregunta: 5089 Año de creación de pregunta: 2001-01-01
 questions[56]= "57)  En el est&aacute;ndar X.509,&iquest; qu&eacute; procedimiento de autenticaci&oacute;n utilizar&iacute;a cuando el origen y el destino no tienen relojes sincronizados?";
 choices[56]= new Array();
 choices[56][0] = "autenticaci&oacute;n a 1 v&iacute;a";
 choices[56][1] = "autenticaci&oacute;n a 2 v&iacute;as";
 choices[56][2] = "autenticaci&oacute;n a 3 v&iacute;as ";
 choices[56][3] = "autenticaci&oacute;n a 4 v&iacute;as";
 answers[56] = choices[56][2];
 units[56] = "73";
 comments[56] = "Id Pregunta: 5089. ";


//  Id pregunta: 5459 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Una de las ventajas del protocolo PPP respecto al SLIP es:";
 choices[57]= new Array();
 choices[57][0] = "Permite conexiones s&iacute;ncronas y as&iacute;ncronas";
 choices[57][1] = "Permite varios protocolos de red sobre &eacute;l";
 choices[57][2] = "Permite crear redes privadas virtuales";
 choices[57][3] = "Todas las respuestas son correctas";
 answers[57] = choices[57][3];
 units[57] = "100, 101, 107, 111";
 comments[57] = "Id Pregunta: 5459. Castilla y Le&oacute;n";


//  Id pregunta: 5534 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no es una de las tres prioridades de i2010 (marco estrat&eacute;gico de la Comisi&oacute;n Europea para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n)? ";
 choices[58]= new Array();
 choices[58][0] = "Conseguir un espacio europeo &uacute;nico de la informaci&oacute;n, fomentando un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n";
 choices[58][1] = "El refuerzo de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n en las TIC";
 choices[58][2] = "Mejorar la prestaci&oacute;n de sevicios intraeuropeos mediante la utilizaci&oacute;n masiva de las TIC";
 choices[58][3] = "Una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que concede prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida";
 answers[58] = choices[58][2];
 units[58] = "30";
 comments[58] = "Id Pregunta: 5534. ";


//  Id pregunta: 5612 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Alguno de los &oacute;rganos a trav&eacute;s del cu&aacute;l ISOC ejerce sus funciones son:";
 choices[59]= new Array();
 choices[59][0] = "IAB para la asignaci&oacute;n de recursos. IEFT para la especificaci&oacute;n de est&aacute;ndares.";
 choices[59][1] = "IEFT para la especificaci&oacute;n de est&aacute;ndares. IESG para la supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[59][2] = "IAB para la supervisi&oacute;n y aprobaci&oacute;n de normas. IESG para la coordinaci&oacute;n";
 choices[59][3] = "IEFT para la coordinaci&oacute;n. IANA para la asignaci&oacute;n de recursos";
 answers[59] = choices[59][2];
 units[59] = "112";
 comments[59] = "Id Pregunta: 5612. ";


//  Id pregunta: 5721 Año de creación de pregunta: 2009-01-01
 questions[60]= "61)  El XSLT transforma:";
 choices[60]= new Array();
 choices[60][0] = "S&oacute;lo de XML a XML";
 choices[60][1] = "De XML a otro documento";
 choices[60][2] = "S&oacute;lo de XML a HTML";
 choices[60][3] = "De un documento a XML";
 answers[60] = choices[60][1];
 units[60] = "69";
 comments[60] = "Id Pregunta: 5721. MAP 2008 A1";


//  Id pregunta: 5723 Año de creación de pregunta: 2009-01-01
 questions[61]= "62)  Elija la opci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = "Un documento XML v&aacute;lido es aqu&eacute;l que tiene una sintaxis XML v&aacute;lida.";
 choices[61][1] = "Un documento XML v&aacute;lido es aqu&eacute;l que cumple las reglas de un DTD.";
 choices[61][2] = "Un documento XML v&aacute;lido es aqu&eacute;l que est&aacute; bien formado y tambi&eacute;n cumple con las reglas de un DTD";
 choices[61][3] = "Un documento XML bien formado es aqu&eacute;l que cumple las reglas de un DTD";
 answers[61] = choices[61][2];
 units[61] = "69";
 comments[61] = "Id Pregunta: 5723. MAP 2008 A2";


//  Id pregunta: 5758 Año de creación de pregunta: 2009-01-01
 questions[62]= "63)  En cuanto a la licencia LGPL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[62]= new Array();
 choices[62][0] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate del driver de un dispositivo.";
 choices[62][1] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate de una librer&iacute;a sin interfaz con el usuario.";
 choices[62][2] = "Un software con licencia LGPL puede utilizar librer&iacute;as propietarias, y el conjunto tener la licencia LGPL.";
 choices[62][3] = "Un software propietario puede utilizar librer&iacute;as LGPL sin dejar de ser propietario.";
 answers[62] = choices[62][3];
 units[62] = "61";
 comments[62] = "Id Pregunta: 5758. ";


//  Id pregunta: 5802 Año de creación de pregunta: 2009-01-01
 questions[63]= "64)  &iquest;C&uacute;al deber&iacute;a ser un criterio a tener en cuenta para adquirir nuevo hardware?";
 choices[63]= new Array();
 choices[63][0] = "Cuando hay presupuesto suficiente para la adquisici&oacute;n.";
 choices[63][1] = "Cuando la vida esperada supera el periodo de amortizaci&oacute;n.";
 choices[63][2] = "Cuando no hay o son reducidos los riesgos de obsolescencia.";
 choices[63][3] = "Todas las anteriores son ciertas.";
 answers[63] = choices[63][3];
 units[63] = "35";
 comments[63] = "Id Pregunta: 5802. ";


//  Id pregunta: 6195 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  La habilitaci&oacute;n para la representaci&oacute;n de terceros prevista en el Real Decreto 1671/2009 permite a las personas o entidades habilitadas";
 choices[64]= new Array();
 choices[64][0] = "La presentaci&oacute;n y recogida de escritos, solicitudes y comunicaciones en cualquier procedimiento";
 choices[64][1] = "La presentaci&oacute;n y recogida de escritos, solicitudes y comunicaciones en los procedimientos expresamente autorizados";
 choices[64][2] = "La presentaci&oacute;n de escritos, solicitudes y comunicaciones en cualquier procedimiento";
 choices[64][3] = "La presentaci&oacute;n de escritos, solicitudes y comunicaciones en los procedimientos expresamente autorizados";
 answers[64] = choices[64][0];
 units[64] = "43";
 comments[64] = "Id Pregunta: 6195. Articulo 14";


//  Id pregunta: 6205 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  En Java, &iquest;Qu&eacute; es JSON?";
 choices[65]= new Array();
 choices[65][0] = "Un formato ligero para el intercambio de datos";
 choices[65][1] = "Tecnolog&iacute;a con la finalidad principal de facilitar la integraci&oacute;n en la misma p&aacute;gina Web de aplicaciones y servicios a priori independientes";
 choices[65][2] = "Servicios interactivos en red dando al usuario el control de los datos";
 choices[65][3] = "Componentes modulares de interfaz de usuario gestionados y visualizados en un portal web";
 answers[65] = choices[65][0];
 units[65] = "116";
 comments[65] = "Id Pregunta: 6205. TICB-2009, bloque desarrollo";


//  Id pregunta: 6207 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[66]= new Array();
 choices[66][0] = "WebLogic";
 choices[66][1] = "WebSphere";
 choices[66][2] = "Apache Tomcat";
 choices[66][3] = "Jboss";
 answers[66] = choices[66][2];
 units[66] = "60";
 comments[66] = "Id Pregunta: 6207. TICB-2009, bloque desarrollo";


//  Id pregunta: 6287 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una tarea de la actividad de Identificaci&oacute;n de Requisitos, en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = "Estudio de los Procesos del PSI";
 choices[67][1] = "An&aacute;lisis de las Necesidades de la Informaci&oacute;n";
 choices[67][2] = "Catalogaci&oacute;n de Requisitos";
 choices[67][3] = "Todas lo son";
 answers[67] = choices[67][3];
 units[67] = "77";
 comments[67] = "Id Pregunta: 6287. ";


//  Id pregunta: 6387 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[68]= new Array();
 choices[68][0] = "No";
 choices[68][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[68][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[68][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[68] = choices[68][2];
 units[68] = "43";
 comments[68] = "Id Pregunta: 6387. Art&iacute;culo 3.3 RD 1671/2009";


//  Id pregunta: 6388 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  En relaci&oacute;n a las sedes electr&oacute;nicas derivadas, o subsedes, se&ntilde;ale la respuesta incorrecta:";
 choices[69]= new Array();
 choices[69][0] = "Las sedes electr&oacute;nicas derivadas, o subsedes, deber&aacute;n resultar accesibles desde la direcci&oacute;n electr&oacute;nica de la sede principal.";
 choices[69][1] = "Las sedes electr&oacute;nicas derivadas, o subsedes podran ser accesibles mediante acceso electr&oacute;nico directo.";
 choices[69][2] = "Su &aacute;mbito de aplicaci&oacute;n comprender&aacute; &oacute;rgano u &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[69][3] = "Las sedes electr&oacute;nicas derivadas deber&aacute;n cumplir los mismos requisitos que las sedes electr&oacute;nicas principales, salvo en lo relativo a la publicaci&oacute;n de la orden o resoluci&oacute;n por la que se crea, que se realizar&aacute; a trav&eacute;s de la sede de la que dependan.";
 answers[69] = choices[69][2];
 units[69] = "43";
 comments[69] = "Id Pregunta: 6388. Art&iacute;culo 4 RD 1671/2009";


//  Id pregunta: 6397 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes reglas no deben cumplir los expedientes electr&oacute;nicos que deban ser objeto de remisi&oacute;n o puesta a disposici&oacute;n, de acuerdo a lo establecido en el RD 1671/2009?";
 choices[70]= new Array();
 choices[70][0] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico";
 choices[70][1] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n en un entorno de intercambio interadministrativo.";
 choices[70][2] = "Con el fin de garantizar la seguridad de los expedientes, tanto su almacenamiento como las especificaciones de los servicios de remisi&oacute;n y puesta a disposici&oacute;n se sujetar&aacute;n a lo que se establezca al respecto por el Esquema Nacional de Seguridad.";
 choices[70][3] = "Los documentos que se integran en el expediente electr&oacute;nico se ajustar&aacute;n al formato o formatos de larga duraci&oacute;n, accesibles en los t&eacute;rminos que determine el Esquema Nacional de Interoperabilidad.";
 answers[70] = choices[70][2];
 units[70] = "43";
 comments[70] = "Id Pregunta: 6397. Art&iacute;culo 53 RD 1671/2009";


//  Id pregunta: 6414 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Las posibilidades de usar el mecanismo de comprobaci&oacute;n de la legalidad del software, conocido como huella digital se clasifican en diferentes grupos que han aparecido a lo largo del tiempo , &iquest;Cu&aacute;l de los siguientes no es uno de ellos?";
 choices[71]= new Array();
 choices[71][0] = "Sim&eacute;trica";
 choices[71][1] = "Asim&eacute;trica";
 choices[71][2] = "An&oacute;nima";
 choices[71][3] = "Esteganogr&aacute;fica";
 answers[71] = choices[71][3];
 units[71] = "37";
 comments[71] = "Id Pregunta: 6414. ";


//  Id pregunta: 6517 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  Se&ntilde;ale que afirmaci&oacute;n es FALSA en relaci&oacute;n a los archivos jar en java:";
 choices[72]= new Array();
 choices[72][0] = "El algoritmo de compresi&oacute;n que utilizan es LZW.";
 choices[72][1] = "Son independientes de la plataforma y cualquier JVM los interpreta.";
 choices[72][2] = "Todos los ficheros que contienen, tienen la extensi&oacute;n class.";
 choices[72][3] = "Pueden incluir un subdirectorio de metainformaci&oacute;n llamado META-INF.";
 answers[72] = choices[72][2];
 units[72] = "60";
 comments[72] = "Id Pregunta: 6517. ";


//  Id pregunta: 6566 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  UMTS ";
 choices[73]= new Array();
 choices[73][0] = "Reutiliza el subsistema de red de GSM";
 choices[73][1] = "Reutiliza el subsistema de red de GPRS";
 choices[73][2] = "El sistema de acceso radio es nuevo";
 choices[73][3] = "Todas las respuestas anteriores son ciertas";
 answers[73] = choices[73][3];
 units[73] = "108";
 comments[73] = "Id Pregunta: 6566. ";


//  Id pregunta: 6575 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Podemos definir ARP poisoning como";
 choices[74]= new Array();
 choices[74][0] = "Alteraci&oacute;n de la tabla ARP para que una direcci&oacute;n IP se corresponda con una MAC distinta a la que ten&iacute;a";
 choices[74][1] = "Con este ataque no se puede redirigir el tr&aacute;fico al ordenador del atacante";
 choices[74][2] = "A y B son correctas";
 choices[74][3] = "A y B son incorrectas";
 answers[74] = choices[74][0];
 units[74] = "100";
 comments[74] = "Id Pregunta: 6575. ";


//  Id pregunta: 6577 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  El filtrado de paquetes no proporciona";
 choices[75]= new Array();
 choices[75][0] = "Bajo nivel de seguridad";
 choices[75][1] = "Protecci&oacute;n sobre la capa de red";
 choices[75][2] = "Alto rendimiento y escalabilidad";
 choices[75][3] = "Todas las respuestas anteriores son correctas";
 answers[75] = choices[75][1];
 units[75] = "111";
 comments[75] = "Id Pregunta: 6577. ";


//  Id pregunta: 6633 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  El modelo de McCall de calidad de software define:";
 choices[76]= new Array();
 choices[76][0] = "Caracter&iacute;sticas del proyecto y del producto generado";
 choices[76][1] = "Caracter&iacute;sticas operacionales, de modificaci&oacute;n y de transici&oacute;n o conversi&oacute;n";
 choices[76][2] = "Caracter&iacute;sticas de an&aacute;lisis, desarrollo y pruebas";
 choices[76][3] = "Caracter&iacute;sticas de accesibilidad y rendimiento";
 answers[76] = choices[76][1];
 units[76] = "88";
 comments[76] = "Id Pregunta: 6633. ";


//  Id pregunta: 7144 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes respuestas es objeto de protecci&oacute;n de los derechos de autor seg&uacute;n el Texto Refundido de la Ley de Protecci&oacute;n Individual?";
 choices[77]= new Array();
 choices[77][0] = "Las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador";
 choices[77][1] = "Las ideas y principios que sirven de fundamento a los interfaces de programa";
 choices[77][2] = "La documentaci&oacute;n t&eacute;cnica y los manuales de uso de un programa";
 choices[77][3] = "Cualesquiera versi&oacute;n sucesiva del programa, incluidas aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 answers[77] = choices[77][2];
 units[77] = "36";
 comments[77] = "Id Pregunta: 7144. Examen TIC B 2009";


//  Id pregunta: 7311 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  La Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos (LAECSP) regula la &ldquo;Cooperaci&oacute;n entre administraciones para el impulso de la administraci&oacute;n electr&oacute;nica&rdquo; en el:";
 choices[78]= new Array();
 choices[78][0] = "T&iacute;tulo I";
 choices[78][1] = "T&iacute;tulo II";
 choices[78][2] = "T&iacute;tulo III";
 choices[78][3] = "T&iacute;tulo IV";
 answers[78] = choices[78][3];
 units[78] = "44";
 comments[78] = "Id Pregunta: 7311. ";


//  Id pregunta: 7313 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  Se&ntilde;ala cual de las siguientes afirmaciones sobre la Red SARA es incorrecta:";
 choices[79]= new Array();
 choices[79][0] = "Es una red privada de comunicaciones que permite transferencias seguras entre las Administraciones P&uacute;blicas";
 choices[79][1] = "La Red permite la interconexi&oacute;n de los Departamentos ministeriales, las Comunidades Aut&oacute;nomas, los Entes Locales y otros organismos p&uacute;blicos espa&ntilde;oles";
 choices[79][2] = "Contiene un enlace con la red transeuropea sTESTA";
 choices[79][3] = "Est&aacute; definida en el art&iacute;culo 31 de la Ley General de Telecomunicaciones";
 answers[79] = choices[79][3];
 units[79] = "44";
 comments[79] = "Id Pregunta: 7313. ";


//  Id pregunta: 7356 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  El m&eacute;todo Pay-Back de an&aacute;lisis de una inversi&oacute;n:";
 choices[80]= new Array();
 choices[80][0] = "Prima las inversiones con menor tiempo de recuperaci&oacute;n";
 choices[80][1] = "Es un m&eacute;todo din&aacute;mico";
 choices[80][2] = "Tiene en cuenta el momento en el que se producen los flujos de caja";
 choices[80][3] = "Todas son INCORRECTAS";
 answers[80] = choices[80][0];
 units[80] = "38";
 comments[80] = "Id Pregunta: 7356. ";


//  Id pregunta: 8166 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  AGNUBIS, aplicaci&oacute;n del entorno de escritorio de GNOME, es:";
 choices[81]= new Array();
 choices[81][0] = "Un interfaz gr&aacute;fico para el dibujo de gr&aacute;ficos y manipulaciones estad&iacute;sticas.";
 choices[81][1] = "Un programa de presentaciones similar a MS POWER POINT.";
 choices[81][2] = "Un programa de dibujo vectorial que puede trabajar con archivos 5VG.";
 choices[81][3] = "El gestor de archivos oficial de GNOME.";
 answers[81] = choices[81][1];
 units[81] = "62";
 comments[81] = "Id Pregunta: 8166. Examen TIC A1 2010";


//  Id pregunta: 8195 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  La normativa vigente sobre Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) establece que:";
 choices[82]= new Array();
 choices[82][0] = "Las dimensiones m&iacute;nimas de una ICT incluyen los elementos necesarios para la captaci&oacute;n y adaptaci&oacute;n de las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales y por sat&eacute;lite.";
 choices[82][1] = "Su &aacute;mbito de aplicaci&oacute;n son todos los inmuebles de nueva construcci&oacute;n a partir de su entrada en vigor. ";
 choices[82][2] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Bolet&iacute;n de Instalaci&oacute;n. ";
 choices[82][3] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Certificado de Fin de Obra. ";
 answers[82] = choices[82][2];
 units[82] = "99";
 comments[82] = "Id Pregunta: 8195. Examen TIC A1 2010";


//  Id pregunta: 8245 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  El Texto Refundido de la Ley de Propiedad Intelectual, modificado por la ley 23/2006, define los siguientes derechos de explotaci&oacute;n:";
 choices[83]= new Array();
 choices[83][0] = "Reproducci&oacute;n, Distribuci&oacute;n, Duplicaci&oacute;n y Transformaci&oacute;n.";
 choices[83][1] = "Distribuci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[83][2] = "Reproducci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[83][3] = "Reproducci&oacute;n, Distribuci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 answers[83] = choices[83][3];
 units[83] = "36,37";
 comments[83] = "Id Pregunta: 8245. Examen TIC A1 2010";


//  Id pregunta: 8330 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  Si hablamos del control automatizado de documentos electr&oacute;nicos a trav&eacute;s de su ciclo de vida completo en una organizaci&oacute;n, desde su creaci&oacute;n inidal hasta su archivado final, estamos hablando de:";
 choices[84]= new Array();
 choices[84][0] = "Desarrollo de software";
 choices[84][1] = "Gesti&oacute;n documental";
 choices[84][2] = "Sistemas gestores de base de datos";
 choices[84][3] = "Sistemas de soporte a la decisi&oacute;n";
 answers[84] = choices[84][1];
 units[84] = "95";
 comments[84] = "Id Pregunta: 8330. Examen TIC A2 2010";


//  Id pregunta: 8347 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA 3, en la tarea &quot;Preparaci&oacute;n del Entorno de Construcci&oacute;n&quot; participan:";
 choices[85]= new Array();
 choices[85][0] = "Programadores, T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[85][1] = "T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[85][2] = "Equipo del Proyecto, T&eacute;cnicos de Sistemas, Equipo de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[85][3] = "Programadores, Equipo de Arquitectura, Administradores de Bases de Datos.";
 answers[85] = choices[85][2];
 units[85] = "86";
 comments[85] = "Id Pregunta: 8347. Examen TIC A2 2010";


//  Id pregunta: 8350 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)   &iquest;Para que sirve la palabra clave &quot;static&quot; en Java? ";
 choices[86]= new Array();
 choices[86][0] = "Indica que aquel rn&eacute;todo o variable que precede es constante, es decir, no puede modificarse";
 choices[86][1] = "Permite indicar que el m&eacute;todo o la variable al que precede pertenece a la clase en lugar de al objeto";
 choices[86][2] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde otras clases";
 choices[86][3] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde la dase a la que pertenece.";
 answers[86] = choices[86][1];
 units[86] = "116";
 comments[86] = "Id Pregunta: 8350. Examen TIC A2 2010";


//  Id pregunta: 8359 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  En el proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (seg&uacute;n M&eacute;trica v3), &iquest;qu&eacute; acci&oacute;n realiza el grupo de Aseguramiento de la Calidad en relaci&oacute;n a1 Plan de Pruebas?";
 choices[87]= new Array();
 choices[87][0] = "Define su contenido.";
 choices[87][1] = "Revisa los resultados de pruebas ejecutadas en este proceso.";
 choices[87][2] = "Revisa la existencia de una normativa para la gesti&oacute;n de los resultados de las pruebas, que permita constatar que se han realizado y descubrir las diferencias entre los resultados esperados y los obtenidos.";
 choices[87][3] = "Coordina su realizaci&oacute;n para que cumplan en su definici&oacute;n los crltenos establecidos en el plan de aseguramiento de calidad.";
 answers[87] = choices[87][2];
 units[87] = "86";
 comments[87] = "Id Pregunta: 8359. Examen TIC A2 2010";


//  Id pregunta: 8372 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo se denomina:";
 choices[88]= new Array();
 choices[88][0] = "Mantenimiento adaptativo.";
 choices[88][1] = "Mantenimiento preventivo.";
 choices[88][2] = "Mantenimiento correctivo.";
 choices[88][3] = "Mantenimiento evolutivo.";
 answers[88] = choices[88][1];
 units[88] = "86";
 comments[88] = "Id Pregunta: 8372. Examen TIC A2 2010";


//  Id pregunta: 8440 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes elementos no aparece en el recibo firmado electr&oacute;nicamente emitido autom&aacute;ticamente por el registro electr&oacute;nico, seg&uacute;n el RD 1671/2009?";
 choices[89]= new Array();
 choices[89][0] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada.";
 choices[89][1] = "Direcci&oacute;n de la sede electr&oacute;nica del organismo.";
 choices[89][2] = "En su caso, enumeraci&oacute;n y denominaci&oacute;n de los documentos adjuntos al formulario de presentaci&oacute;n o documento presentado, seguida de la huella electr&oacute;nica de cada uno de ellos.";
 choices[89][3] = "Informaci&oacute;n del plazo m&aacute;ximo establecido normativamente para la resoluci&oacute;n y notificaci&oacute;n del procedimiento, as&iacute; como de los efectos que pueda producir el silencio administrativo, cuando sea autom&aacute;ticamente determinable.";
 answers[89] = choices[89][1];
 units[89] = "43";
 comments[89] = "Id Pregunta: 8440. ";


//  Id pregunta: 8505 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  &iquest;C&oacute;mo se comenta una l&iacute;nea en XML (eXtensible Markup Language)? ";
 choices[90]= new Array();
 choices[90][0] = "/* Esto es un comentario */";
 choices[90][1] = "// Esto es un comentario ";
 choices[90][2] = "# Esto es un comentario";
 choices[90][3] = "&lt;!-- Esto es un comentario --&gt;";
 answers[90] = choices[90][3];
 units[90] = "69";
 comments[90] = "Id Pregunta: 8505. Examen TIC A2 2010";


//  Id pregunta: 8599 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  El modelo CMMI v1.2 (CMMI-DEV) contiene las siguientes &aacute;reas de proceso:";
 choices[91]= new Array();
 choices[91][0] = "22 &aacute;reas de proceso, entre las que se encuentran: Despliegue jer&aacute;rquico (DJ). Desarrollo de procesos de trabajo (DPT). Establecimiento de jerarqu&iacute;a de procesos (EJP).";
 choices[91][1] = "22 &aacute;reas de proceso, entre las que se encuentran Aseguramiento de calidad de Procesos y Productos (PPQA), Integraci&oacute;n de Producto (Pl), Gesti&oacute;n Cuantitativa de Proyectos (QPM), Gesti&oacute;n de Requerimientos (REQM)";
 choices[91][2] = "10 &aacute;reas de proceso, entre las que se encuentran Gesti&oacute;n de homologaciones (HM), certificaci&oacute;n integrada de dise&ntilde;os (DIC), Control de requisitos (RC)";
 choices[91][3] = "15 &aacute;reas de proceso, entre las que se encuentran An&aacute;lisis de requisitos (ARj, Gesti&oacute;n oe equipos (EM). Resoluci&oacute;n c&iacute;e decisiones (DR), dise&ntilde;o de variable (VD)";
 answers[91] = choices[91][1];
 units[91] = "92";
 comments[91] = "Id Pregunta: 8599. Examen TIC A2 2010 interna";


//  Id pregunta: 8633 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica v3?";
 choices[92]= new Array();
 choices[92][0] = "Perfil Jefe de Proyecto.";
 choices[92][1] = "Perfil Consultor.";
 choices[92][2] = "Perfil Analista.";
 choices[92][3] = "Perfil Programador.";
 answers[92] = choices[92][0];
 units[92] = "86";
 comments[92] = "Id Pregunta: 8633. Examen TIC A2 2010 interna";


//  Id pregunta: 8822 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  Al modificar un programa protegido por licencia GPL, el resultado deberemos protegerlo con una licencia:";
 choices[93]= new Array();
 choices[93][0] = "GPL";
 choices[93][1] = "BSD";
 choices[93][2] = "EULA";
 choices[93][3] = "GNU";
 answers[93] = choices[93][0];
 units[93] = "61";
 comments[93] = "Id Pregunta: 8822. Examen UPM A2 2011";


//  Id pregunta: 8924 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Las siglas SSL y TLS se refieren a:";
 choices[94]= new Array();
 choices[94][0] = "Diferentes estados l&oacute;gicos del microprocesador.";
 choices[94][1] = "Protocolos criptogr&aacute;ficos para establecer conexiones seguras a trav&eacute;s de una red.";
 choices[94][2] = "Sistemas de localizaci&oacute;n geod&eacute;sica para GPS.";
 choices[94][3] = "Diferentes tipos de memoria f&iacute;sica";
 answers[94] = choices[94][1];
 units[94] = "111";
 comments[94] = "Id Pregunta: 8924. Operador Ayto. Madrid 2010";


//  Id pregunta: 8936 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  Las sedes judiciales electr&oacute;nicas se crear&aacute;n mediante disposici&oacute;n publicada en:";
 choices[95]= new Array();
 choices[95][0] = "El Bolet&iacute;n Oficial del Estado";
 choices[95][1] = "El Bolet&iacute;n Oficial de la Comunidad Aut&oacute;noma correspondiente";
 choices[95][2] = "En los dos anteriores conjuntamente en los casos indicados en la ley";
 choices[95][3] = "En uno de los dos";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 8936. ";


//  Id pregunta: 8945 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[96]= new Array();
 choices[96][0] = "Enfoque de soluciones multilaterales";
 choices[96][1] = "Utilizaci&oacute;n de la Red SARA como Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas";
 choices[96][2] = "Interoperabilidad sem&aacute;ntica";
 choices[96][3] = "Ninguno de los anteriores";
 answers[96] = choices[96][0];
 units[96] = "43";
 comments[96] = "Id Pregunta: 8945. ";


//  Id pregunta: 9020 Año de creación de pregunta: 2011-01-01
 questions[97]= "98)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[97]= new Array();
 choices[97][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[97][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[97][2] = "Se produce en ambos tipos de fibra.";
 choices[97][3] = "No se produce en la fibra &oacute;ptica";
 answers[97] = choices[97][1];
 units[97] = "99";
 comments[97] = "Id Pregunta: 9020. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9080 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l es el est&aacute;ndar PKCS que fue la base para el est&aacute;ndar S/MIME?";
 choices[98]= new Array();
 choices[98][0] = "PKCS#1";
 choices[98][1] = "PKCS#6";
 choices[98][2] = "PKCS#7";
 choices[98][3] = "PKCS#8";
 answers[98] = choices[98][3];
 units[98] = "111";
 comments[98] = "Id Pregunta: 9080. ";


//  Id pregunta: 9595 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[99]= new Array();
 choices[99][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller) ";
 choices[99][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[99][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[99][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE ";
 answers[99] = choices[99][0];
 units[99] = "60";
 comments[99] = "Id Pregunta: 9595. Xunta Libre 2011";


