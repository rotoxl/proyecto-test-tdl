/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 28 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de estos m&eacute;todos no persigue directamente la reducci&oacute;n del TCO?:";
 choices[0]= new Array();
 choices[0][0] = "Inventario";
 choices[0][1] = "Estandarizaci&oacute;n";
 choices[0][2] = "Control de la configuraci&oacute;n";
 choices[0][3] = "Centralizaci&oacute;n";
 answers[0] = choices[0][3];
 units[0] = "25";
 comments[0] = "Id Pregunta: 28. ";


//  Id pregunta: 348 Año de creación de pregunta: 2009-01-01
 questions[1]= "2)  La transferencia internacional de datos de car&aacute;cter personal con destino a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable sin autorizaci&oacute;n del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos salvo en los supuestos en los que conforme a la LOPD y sus disposiciones de desarrollo dicha autorizaci&oacute;n no resulta necesaria, es una infracci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Leve";
 choices[1][1] = "Grave";
 choices[1][2] = "Muy grave ";
 choices[1][3] = "No es infracci&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "29";
 comments[1] = "Id Pregunta: 348. ";


//  Id pregunta: 680 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes operaciones se realiza a trav&eacute;s de servicios de transferencia electr&oacute;nica de fondos?:";
 choices[2]= new Array();
 choices[2][0] = "Autorizaci&oacute;n y control de transacciones con pago por tarjeta de cr&eacute;dito o d&eacute;bito";
 choices[2][1] = "Consultas de estado de cuenta";
 choices[2][2] = "Consulta o acceso a bancos de datos";
 choices[2][3] = "Todas las anteriores";
 answers[2] = choices[2][3];
 units[2] = "70";
 comments[2] = "Id Pregunta: 680. hay una errata en lugar de servidos ser&iacute;a servicios.";


//  Id pregunta: 985 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Dentro de los criptosistemas el Data Encryption Standard es el m&aacute;s conocido por su f&aacute;cil implementaci&oacute;n. Indicar cu&aacute;l de las siguientes afirmaciones no le es aplicable:";
 choices[3]= new Array();
 choices[3][0] = "La clave es &uacute;nica y debe ser conocida por receptor y emisor";
 choices[3][1] = "La longitud de la clave es de 56 bits";
 choices[3][2] = "El ciclo de permutaci&oacute;n y sustituci&oacute;n se repite 16 veces";
 choices[3][3] = "Este m&eacute;todo de cifrado se conoce como de clave p&uacute;blica";
 answers[3] = choices[3][3];
 units[3] = "72";
 comments[3] = "Id Pregunta: 985. ";


//  Id pregunta: 1031 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  El mecanismo &quot;priority aging&quot; que utilizan algunos programas de planificaci&oacute;n de trabajos funciona de la siguiente manera:";
 choices[4]= new Array();
 choices[4][0] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo que ha transcurrido desde que el usuario lo envi&oacute;";
 choices[4][1] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo transcurrido desde una hora prefijada por el programador";
 choices[4][2] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo que llevan en la cola de entrada";
 choices[4][3] = "Aumenta la prioridad de los trabajos en funci&oacute;n de la edad y categor&iacute;a profesional del programador";
 answers[4] = choices[4][2];
 units[4] = "52";
 comments[4] = "Id Pregunta: 1031. ";


//  Id pregunta: 1109 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  En la multiplexaci&oacute;n por divisi&oacute;n en frecuencia, &iquest;cu&aacute;l de estas afirmaciones es correcta?";
 choices[5]= new Array();
 choices[5][0] = "Las se&ntilde;ales a enviar usan todo el ancho de banda disponible.";
 choices[5][1] = "Las se&ntilde;ales a enviar s&oacute;lo usan el ancho de banda asignado.";
 choices[5][2] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por todo ancho de banda.";
 choices[5][3] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por el ancho de banda asignado.";
 answers[5] = choices[5][1];
 units[5] = "107,108";
 comments[5] = "Id Pregunta: 1109. ";


//  Id pregunta: 1223 Año de creación de pregunta: 2005-01-01
 questions[6]= "7)  Los DN, en LDAP, se representan en:";
 choices[6]= new Array();
 choices[6][0] = "XML";
 choices[6][1] = "HTML";
 choices[6][2] = "Texto plano";
 choices[6][3] = "ASN.1";
 answers[6] = choices[6][2];
 units[6] = "74";
 comments[6] = "Id Pregunta: 1223. RFC 4514";


//  Id pregunta: 1255 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Las bases de datos tipo ORACLE o Mysql est&aacute;n estructuradas seg&uacute;n un modelo:";
 choices[7]= new Array();
 choices[7][0] = "Sem&aacute;ntico";
 choices[7][1] = "Conceptual";
 choices[7][2] = "Relacional";
 choices[7][3] = "Jer&aacute;rquico";
 answers[7] = choices[7][2];
 units[7] = "58";
 comments[7] = "Id Pregunta: 1255. ";


//  Id pregunta: 1313 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Referido a un sistema de disco magn&eacute;tico, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[8]= new Array();
 choices[8][0] = "Todas las pistas de un sector est&aacute;n en el mismo cilindro";
 choices[8][1] = "Un sector est&aacute; constituido por varias pistas";
 choices[8][2] = "Un  cilindro est&aacute; constituido por varias pistas";
 choices[8][3] = "Una pista est&aacute; constituida por varios cilindros";
 answers[8] = choices[8][2];
 units[8] = "48";
 comments[8] = "Id Pregunta: 1313. ";


//  Id pregunta: 1416 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Una entidad d&eacute;bil es aquella que cumple que:";
 choices[9]= new Array();
 choices[9][0] = "La clave est&aacute; compuesta por atributos de la entidad";
 choices[9][1] = "La clave est&aacute; compuesta por atributos de la entidad y atributos de otras entidades";
 choices[9][2] = "Su existencia depende de la existencia de otra u otras entidades";
 choices[9][3] = "No puede tener relaciones cuya cardinalidad sea uno-a-uno";
 answers[9] = choices[9][2];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1416. ";


//  Id pregunta: 1473 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  Para el tratamiento de im&aacute;genes informatizadas se usan algoritmos construidos mediante:";
 choices[10]= new Array();
 choices[10][0] = "Transformadas de Laplace";
 choices[10][1] = "Series de McLaurin";
 choices[10][2] = "Integrales de Riemann Stiltges";
 choices[10][3] = "Transformadas de Fourier";
 answers[10] = choices[10][3];
 units[10] = "93";
 comments[10] = "Id Pregunta: 1473. ";


//  Id pregunta: 1565 Año de creación de pregunta: 2009-01-01
 questions[11]= "12)  &iquest;C&uacute;al es la afirmaci&oacute;n falsa si hablamos de LDAP?";
 choices[11]= new Array();
 choices[11][0] = "Usa TCP/IP";
 choices[11][1] = "Reemplaza a X.500";
 choices[11][2] = "El protocolo usa ASN.1 y los mensajes se codifican y transmiten usando BER ";
 choices[11][3] = "Permite la operaci&oacute;n MODIFY";
 answers[11] = choices[11][2];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1565. RFC 4511";


//  Id pregunta: 1583 Año de creación de pregunta: 2003-01-01
 questions[12]= "13)  En el contexto de las estructuras din&aacute;micas de datos, una cola es:";
 choices[12]= new Array();
 choices[12][0] = "Un tipo de dato que contiene la direcci&oacute;n en memoria de un nodo.";
 choices[12][1] = "Una lista LIFO (Last In First Out).";
 choices[12][2] = "Una estructura de datos no lineal donde la inserci&oacute;n siempre es por el extremo inferior.";
 choices[12][3] = "Una secuencia de elementos en el que las operaciones de inserci&oacute;n y borrado se realiza sobre extremos opuestos de la secuencia.";
 answers[12] = choices[12][3];
 units[12] = "";
 comments[12] = "Id Pregunta: 1583. Junta Andaluc&iacute;a";


//  Id pregunta: 1598 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  En sistema operativo UNIX indicar, entre las siguientes caracter&iacute;sticas cu&aacute;l no corresponde a cualquier sistema de archivo usado: VFS, NFS, etc&hellip;";
 choices[13]= new Array();
 choices[13][0] = "Capacidad de crear y destruir archivos";
 choices[13][1] = "Crecimiento din&aacute;mico de archivos";
 choices[13][2] = "Tratamiento de cualquier dispositivo perof&eacute;rico como archivo";
 choices[13][3] = "Estructura matricial";
 answers[13] = choices[13][3];
 units[13] = "53,54";
 comments[13] = "Id Pregunta: 1598. ";


//  Id pregunta: 1715 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  La arquitectura cliente/servidor:";
 choices[14]= new Array();
 choices[14][0] = "Se conoce tambi&eacute;n como arquitectura de 3 capas o niveles, siendo la tercera una capa situada entre el cliente y el servidor donde reside la l&oacute;gica de negocio";
 choices[14][1] = "Involucra a un solo cliente que se comunica con un solo servidor";
 choices[14][2] = "es la m&aacute;s adecuada para aplicaciones en continua evoluci&oacute;n y con datos distribuidos";
 choices[14][3] = "permite la ejecuci&oacute;n de los tratamientos de clientes y servidor en el mismo equipo o en diferentes, indistintamente";
 answers[14] = choices[14][3];
 units[14] = "50";
 comments[14] = "Id Pregunta: 1715. ";


//  Id pregunta: 1897 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  Software de negocio para mejorar la comunicaci&oacute;n entre organizaciones y sus socios";
 choices[15]= new Array();
 choices[15][0] = "Acuerdo de Licencia de Usuario Final (EULA)";
 choices[15][1] = "Pol&iacute;tica de Seguridad";
 choices[15][2] = "Acuerdo de nivel de servicio (SLA)";
 choices[15][3] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 answers[15] = choices[15][3];
 units[15] = "23";
 comments[15] = "Id Pregunta: 1897. ";


//  Id pregunta: 1914 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  El entorno de escritorio KDE";
 choices[16]= new Array();
 choices[16][0] = "Utiliza como gestor de ventanas uno propio";
 choices[16][1] = "No posee gestor de ventanas propio";
 choices[16][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA";
 choices[16][3] = "No proporciona distintas configuraciones para distintos idiomas";
 answers[16] = choices[16][0];
 units[16] = "54";
 comments[16] = "Id Pregunta: 1914. ";


//  Id pregunta: 2240 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  CODE-AND-FIX:";
 choices[17]= new Array();
 choices[17][0] = "Es un m&eacute;todo de an&aacute;lisis";
 choices[17][1] = "Es un m&eacute;todo de dise&ntilde;o";
 choices[17][2] = "Es una forma de resolver los errores originados por otros programadores";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][3];
 units[17] = "76";
 comments[17] = "Id Pregunta: 2240. ";


//  Id pregunta: 2420 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  El nivel que marca la verdadera frontera de la comprensi&oacute;n y utilizaci&oacute;n del lenguaje natural con la inteligencia artificial es:";
 choices[18]= new Array();
 choices[18][0] = "El niv&eacute;l ac&uacute;stico";
 choices[18][1] = "El nivel fonol&oacute;gico";
 choices[18][2] = "El nivel sem&aacute;ntico-pragm&aacute;tico";
 choices[18][3] = "El nivel pros&oacute;dico";
 answers[18] = choices[18][2];
 units[18] = "94";
 comments[18] = "Id Pregunta: 2420. ";


//  Id pregunta: 2444 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Las herramientas que incluyen componentes para la gesti&oacute;n de proyectos y la gesti&oacute;n de configuraci&oacute;n son las:";
 choices[19]= new Array();
 choices[19][0] = "L-CASE (Lower CASE)";
 choices[19][1] = "I-CASE (Integrated CASE)";
 choices[19][2] = "IPSE (Integrated Programming Support Environment)";
 choices[19][3] = "CAST (Computer Aided Software Testing)";
 answers[19] = choices[19][2];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2444. ";


//  Id pregunta: 2469 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  No es un tipo de acoplamiento:";
 choices[20]= new Array();
 choices[20][0] = "Externo.";
 choices[20][1] = "Por contenido.";
 choices[20][2] = "Temporal.";
 choices[20][3] = "Por estampado.";
 answers[20] = choices[20][2];
 units[20] = "84";
 comments[20] = "Id Pregunta: 2469. ";


//  Id pregunta: 3107 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  &quot;Bus lineal al que est&aacute;n conectadas varias estaciones y que termina en los extremos&quot; se corresponde con la definici&oacute;n de:";
 choices[21]= new Array();
 choices[21][0] = "intranet";
 choices[21][1] = "segmento";
 choices[21][2] = "pasarela";
 choices[21][3] = "puente";
 answers[21] = choices[21][1];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3107. ";


//  Id pregunta: 3148 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a los elementos de red?:";
 choices[22]= new Array();
 choices[22][0] = "Los bridges usan la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 choices[22][1] = "Los bridges generan autom&aacute;ticamente sus propias tablas (puerto, direcci&oacute;n MAC) leyendo las direcciones MAC del remitente de cada paquete recibido";
 choices[22][2] = "Si un bridge recibe un paquete cuya direcci&oacute;n MAC de destino no tiene un puerto asociado en su tabla, lo reenv&iacute;a por todos sus puertos (flooding)";
 choices[22][3] = "Los routers, para ser compatibles con distintos protocolos de acceso al medio, utilizan tambi&eacute;n la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 answers[22] = choices[22][3];
 units[22] = "102";
 comments[22] = "Id Pregunta: 3148. ";


//  Id pregunta: 3213 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  El error 404 seg&uacute;n el protocolo HTTP indica:";
 choices[23]= new Array();
 choices[23][0] = "mensaje de petici&oacute;n no reconocido";
 choices[23][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[23][2] = "versi&oacute;n HTTP no soportada";
 choices[23][3] = "el objeto pedido no se encuentra en el servidor";
 answers[23] = choices[23][3];
 units[23] = "112";
 comments[23] = "Id Pregunta: 3213. ";


//  Id pregunta: 3218 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  El est&aacute;ndar IEEE que suministra una descripci&oacute;n de los procedimientos del protocolo a nivel de enlace en una red de &aacute;rea local para la transferencia de datos y su control entre cualquier pareja de puntos de acceso al servicio es:";
 choices[24]= new Array();
 choices[24][0] = "802.1";
 choices[24][1] = "802.2";
 choices[24][2] = "802.10";
 choices[24][3] = "802.12";
 answers[24] = choices[24][1];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3218. ";


//  Id pregunta: 3346 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  CTI es:";
 choices[25]= new Array();
 choices[25][0] = "Computer Telephony Integration, el uso conjunto de telefon&iacute;a y ordenadores en el funcionamiento de un centro de atenci&oacute;n de llamadas";
 choices[25][1] = "el conjunto formado por la intranet, los tel&eacute;fonos de los puestos de ofim&aacute;tica y los ordenadores de los usuarios";
 choices[25][2] = "las siglas del Comit&eacute; para las Telecomunicaciones y la Innovaci&oacute;n, organismo sin &aacute;nimo de lucro encargado de observar las tendencias tecnol&oacute;gicas en telecomunicaciones y su aplicaci&oacute;n a los proyectos de la Administraci&oacute;n del Estado";
 choices[25][3] = "nada de lo anterior";
 answers[25] = choices[25][0];
 units[25] = "108";
 comments[25] = "Id Pregunta: 3346. ";


//  Id pregunta: 3347 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es una debilidad de las redes inal&aacute;mbricas frente a otro tipo de redes?:";
 choices[26]= new Array();
 choices[26][0] = "Poca seguridad";
 choices[26][1] = "Escasa protecci&oacute;n frente a interferencias";
 choices[26][2] = "Precio elevado";
 choices[26][3] = "Cobertura limitada";
 answers[26] = choices[26][2];
 units[26] = "107";
 comments[26] = "Id Pregunta: 3347. ";


//  Id pregunta: 3362 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  Del protocolo IKE de IPSec podemos decir:";
 choices[27]= new Array();
 choices[27][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[27][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[27][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[27][3] = "nada de lo anterior es cierto";
 answers[27] = choices[27][0];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3362. ";


//  Id pregunta: 3408 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  FDDI (Fiber Distributed Data Interface) es:";
 choices[28]= new Array();
 choices[28][0] = "Una red de fibra &oacute;ptica tipo &lsquo;paso de testigo&rsquo; en anillo";
 choices[28][1] = "Una red de fibra &oacute;ptica compatible con Ethernet en el interface del transmisor/receptor";
 choices[28][2] = "Un protocolo utilizado en redes que operan a 100 Mbps";
 choices[28][3] = "Una interfaz &oacute;ptica para la distribuci&oacute;n de datos";
 answers[28] = choices[28][0];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3408. ";


//  Id pregunta: 3602 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10BaseT es de:";
 choices[29]= new Array();
 choices[29][0] = "100 metros";
 choices[29][1] = "185 metros";
 choices[29][2] = "200 metros";
 choices[29][3] = "500 metros";
 answers[29] = choices[29][0];
 units[29] = "99";
 comments[29] = "Id Pregunta: 3602. ";


//  Id pregunta: 3667 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Una arquitectura de red jer&aacute;rquica:";
 choices[30]= new Array();
 choices[30][0] = "Asigna a cada sistema de comunicaciones de la red las mismas funciones";
 choices[30][1] = "Todas las sesiones de la red tienen lugar entre sistemas parejos";
 choices[30][2] = "Un sistema maestro es el encargado de toda la red y realiza funciones de gesti&oacute;n y control";
 choices[30][3] = "Todas las sesiones comparten las funciones de gesti&oacute;n de red";
 answers[30] = choices[30][2];
 units[30] = "104";
 comments[30] = "Id Pregunta: 3667. ";


//  Id pregunta: 3742 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los sistemas celulares se sustentan en dos conceptos principales que son:";
 choices[31]= new Array();
 choices[31][0] = "La reutilizaci&oacute;n de frecuencias y el dimensionamiento celular";
 choices[31][1] = "La difracci&oacute;n y la propagaci&oacute;n multitrayecto";
 choices[31][2] = "La modulaci&oacute;n y la separaci&oacute;n entre canales";
 choices[31][3] = "La distribuci&oacute;n de usuarios y la localizaci&oacute;n";
 answers[31] = choices[31][0];
 units[31] = "108";
 comments[31] = "Id Pregunta: 3742. ";


//  Id pregunta: 3918 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es falsa?";
 choices[32]= new Array();
 choices[32][0] = "La longitud de la cabecera de los paquetes no es fija";
 choices[32][1] = "Usa direcciones de 128 bits";
 choices[32][2] = "Soporte intr&iacute;nseco de seguridad (Ipsec)";
 choices[32][3] = "Soporte de autoconfiguraci&oacute;n (los hosts determinan su direcci&oacute;n de manera autom&aacute;tica)";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3918. ";


//  Id pregunta: 3976 Año de creación de pregunta: 2006-01-01
 questions[33]= "34)  La Directiva Europea sobre compatibilidad electro magnetica EMC es:";
 choices[33]= new Array();
 choices[33][0] = "89/336/EEC";
 choices[33][1] = "87/306/EEC";
 choices[33][2] = "87/95/EEC";
 choices[33][3] = "79/335/EEC";
 answers[33] = choices[33][0];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3976. ";


//  Id pregunta: 3988 Año de creación de pregunta: 2006-01-01
 questions[34]= "35)  Sobre FDDI:";
 choices[34]= new Array();
 choices[34][0] = "Su est&aacute;ndar no est&aacute; recogido por la IEEE ni aceptado por ANSI";
 choices[34][1] = "Se conoce como X3T9.3";
 choices[34][2] = "Su equivalente en cobre es CDDI";
 choices[34][3] = "Todas son verdaderas";
 answers[34] = choices[34][2];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3988. ";


//  Id pregunta: 4117 Año de creación de pregunta: 2006-01-01
 questions[35]= "36)  El servicio que copia las p&aacute;ginas de un sitio web a servidores dispersos geogr&aacute;ficamente pafa agilizar la entrega al usuario se llama";
 choices[35]= new Array();
 choices[35][0] = "procesamiento distribuido";
 choices[35][1] = "multicast";
 choices[35][2] = "cluster";
 choices[35][3] = "entrega de contenido";
 answers[35] = choices[35][3];
 units[35] = "116";
 comments[35] = "Id Pregunta: 4117. ";


//  Id pregunta: 4239 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  Seg&uacute;n la Ley General de Telecomunicaciones 9/2014 corresponde el control e inspecci&oacute;n del espectro radioel&eacute;ctrico a";
 choices[36]= new Array();
 choices[36][0] = "Ministerio de Econom&iacute;a y Competitividad";
 choices[36][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[36][2] = "CNAF";
 choices[36][3] = "Ninguno de los anteriores";
 answers[36] = choices[36][3];
 units[36] = "110";
 comments[36] = "Id Pregunta: 4239. ";


//  Id pregunta: 4316 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  Indique cu&aacute;l de los siguientes t&eacute;rminos no identifica un gestor de arranque del Sistema Operativo";
 choices[37]= new Array();
 choices[37][0] = "NT OS Loader.";
 choices[37][1] = "LILO (Linux Loader)";
 choices[37][2] = "LIUL (Linux Unified Loader).";
 choices[37][3] = "GRUB (Grand Unified Bootloader).";
 answers[37] = choices[37][2];
 units[37] = "53";
 comments[37] = "Id Pregunta: 4316. ";


//  Id pregunta: 4324 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  En una Organizaci&oacute;n, el Administrador de Bases de Datos puede ejercer todas las funciones siguientes, excepto";
 choices[38]= new Array();
 choices[38][0] = "Determinar los criterios de acceso a la base de datos.";
 choices[38][1] = "Monitorizar la base de datos mediante herramientas de an&aacute;lisis.";
 choices[38][2] = "Seleccionar las herramientas de optimizaci&oacute;n del rendimiento de la base.";
 choices[38][3] = "Definir e iniciar los procedimientos de respaldo y recuperaci&oacute;n.";
 answers[38] = choices[38][0];
 units[38] = "26";
 comments[38] = "Id Pregunta: 4324. ";


//  Id pregunta: 4525 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  En un Sistema de Informaci&oacute;n Geogr&aacute;fica los atributos que puede tener un objeto ser&aacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Solamente gr&aacute;ficos.";
 choices[39][1] = "Solamente alfanum&eacute;ricos.";
 choices[39][2] = "Solamente vectoriales.";
 choices[39][3] = "Gr&aacute;ficos y alfanum&eacute;ricos.";
 answers[39] = choices[39][3];
 units[39] = "67";
 comments[39] = "Id Pregunta: 4525. ";


//  Id pregunta: 4920 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  Los algoritmos &ldquo;no supervisados&rdquo; en Miner&iacute;a de Datos:";
 choices[40]= new Array();
 choices[40][0] = "Se llaman tambi&eacute;n 'predictivos'.";
 choices[40][1] = "Utilizan la t&eacute;cnica de '&aacute;rboles de decisi&oacute;n'.";
 choices[40][2] = "Sirven para descubrir patrones y tendencias en los datos actuales.";
 choices[40][3] = "Predicen el valor de un atributo de un conjunto de datos, conocidos otros atributos.";
 answers[40] = choices[40][2];
 units[40] = "68";
 comments[40] = "Id Pregunta: 4920. Examen TIC B 2007";


//  Id pregunta: 4955 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes es un Sistema de Gesti&oacute;n de Bases de Datos?:";
 choices[41]= new Array();
 choices[41][0] = "PostgreSQL.";
 choices[41][1] = "Gentoo.";
 choices[41][2] = "UbuntuBD.";
 choices[41][3] = "SQLCentos.";
 answers[41] = choices[41][0];
 units[41] = "57";
 comments[41] = "Id Pregunta: 4955. Examen TIC B 2007";


//  Id pregunta: 4972 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l es la versi&oacute;n ampliada del protocolo BOOTP?:";
 choices[42]= new Array();
 choices[42][0] = "DHCP.";
 choices[42][1] = "RARP.";
 choices[42][2] = "DNS.";
 choices[42][3] = "WINS.";
 answers[42] = choices[42][0];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4972. Examen TIC B 2007";


//  Id pregunta: 5079 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  En la estructura de la trama del protocolo HDLC (&quot;High level Data Link Control&quot;) el n&uacute;mero de bits del delimitadordel comienzo de la trama es:";
 choices[43]= new Array();
 choices[43][0] = "Variable";
 choices[43][1] = "8";
 choices[43][2] = "16";
 choices[43][3] = "32";
 answers[43] = choices[43][1];
 units[43] = "101";
 comments[43] = "Id Pregunta: 5079. Examen TIC A 2007";


//  Id pregunta: 5178 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  La t&eacute;cnica PIECES define las categor&iacute;as que deben estudiar conjuntamente el analista y el usuario. &iquest;Cu&aacute;l no es un conjunto valido de categor&iacute;as seg&uacute;n PIECES?";
 choices[44]= new Array();
 choices[44][0] = "Rendimiento, Econom&iacute;a y Control";
 choices[44][1] = "Control, Eficiencia y Servicios";
 choices[44][2] = "Informaci&oacute;n, Eficiencia y Servicios";
 choices[44][3] = "Informaci&oacute;n, Precio y Rendimiento";
 answers[44] = choices[44][3];
 units[44] = "78";
 comments[44] = "Id Pregunta: 5178. ";


//  Id pregunta: 5188 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  En la programaci&oacute;n Orientada a Objetos, un Objeto es una entidad que se caracteriza porque tiene:";
 choices[45]= new Array();
 choices[45][0] = "Estado, Comportamiento e Identidad";
 choices[45][1] = "Comportamiento, Identidad y Relaciones";
 choices[45][2] = "Estado, Identidad y Relaciones";
 choices[45][3] = "Todas son falsas";
 answers[45] = choices[45][0];
 units[45] = "82";
 comments[45] = "Id Pregunta: 5188. ";


//  Id pregunta: 5194 Año de creación de pregunta: 2003-01-01
 questions[46]= "47)  En los diagramas de estructura, pertenecientes al dise&ntilde;o estructurado, &iquest;cu&aacute;l de las siguientes opciones no es un tipo de cupla (comunicaci&oacute;n entre m&oacute;dulos)?";
 choices[46]= new Array();
 choices[46][0] = "Cupla de Datos.";
 choices[46][1] = "Cupla de Funciones.";
 choices[46][2] = "Cupla Modificada.";
 choices[46][3] = "Cupla de Resultados.";
 answers[46] = choices[46][1];
 units[46] = "84";
 comments[46] = "Id Pregunta: 5194. ";


//  Id pregunta: 5271 Año de creación de pregunta: 2003-01-01
 questions[47]= "48)  El RD 1720/2007 deroga ..";
 choices[47]= new Array();
 choices[47][0] = "RD 994/1999";
 choices[47][1] = "RD 263/1996";
 choices[47][2] = "RD 1332/1994";
 choices[47][3] = "a y c";
 answers[47] = choices[47][3];
 units[47] = "29";
 comments[47] = "Id Pregunta: 5271. ";


//  Id pregunta: 5437 Año de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[48][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones";
 choices[48][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[48][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[48] = choices[48][2];
 units[48] = "77";
 comments[48] = "Id Pregunta: 5437. Castilla y Le&oacute;n";


//  Id pregunta: 5477 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  Que aspecto debe considerarse a la hora de efectuar una planificaci&oacute;n estrat&eacute;gica";
 choices[49]= new Array();
 choices[49][0] = "La misi&oacute;n del negocio";
 choices[49][1] = "La situaci&oacute;n de los competidores";
 choices[49][2] = "Los hitos en el calendario de actuaci&oacute;n";
 choices[49][3] = "Deben considerarse los aspectos anteriores";
 answers[49] = choices[49][3];
 units[49] = "77";
 comments[49] = "Id Pregunta: 5477. Castilla y Le&oacute;n";


//  Id pregunta: 5528 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indicar la respuesta falsa";
 choices[50]= new Array();
 choices[50][0] = "Los niveles del lenguaje son: f&oacute;nico, l&eacute;xico, sint&aacute;ctico y sem&aacute;ntico";
 choices[50][1] = "La se&ntilde;al de voz se puede analizar en dos dominios, el espectral y el temporal";
 choices[50][2] = "La frecuencia fundamental de la voz representa la frecuencia de vibraci&oacute;n de las cuerdas vocales";
 choices[50][3] = "La frecuencia fundamental de la voz masculina es de 120 a 500 Hz y la femenina de 50 a 250 Hz";
 answers[50] = choices[50][3];
 units[50] = "94";
 comments[50] = "Id Pregunta: 5528. ";


//  Id pregunta: 5640 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  Acerca de los sistemas operativos, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[51]= new Array();
 choices[51][0] = "Un  S.O. en Red da la visi&oacute;n de estar ejecut&aacute;ndose en una &uacute;nica m&aacute;quina, no en m&aacute;quinas independientes";
 choices[51][1] = "Los S.O. Distribuidos se ejecutan sobre un conjunto de nodos independientes conectados en red, pero no hacen creer al usuario que se trate de un sistema centralizado   ";
 choices[51][2] = "En un S.O. en Red cada m&aacute;quina ejecuta una copia del S.O. ";
 choices[51][3] = "Los sistemas operativos distribuidos fueron el punto de partida para la implementaci&oacute;n de sistemas operativos centralizados";
 answers[51] = choices[51][2];
 units[51] = "50";
 comments[51] = "Id Pregunta: 5640. ";


//  Id pregunta: 5706 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos, transpone aspectos de:";
 choices[52]= new Array();
 choices[52][0] = "De la directiva 200/31/CE relativos a Servicios de la Sociedad de la Informaci&oacute;n.";
 choices[52][1] = "De la Directiva 2006/123/CE relativa a los servicios en el mercado interior.";
 choices[52][2] = "De la Directiva 2002/58/CE sobre la privacidad y las comunicaciones electr&oacute;nicas.";
 choices[52][3] = "No recoge la transposici&oacute;n de articulado relativo a ninguna Directiva.";
 answers[52] = choices[52][1];
 units[52] = "43";
 comments[52] = "Id Pregunta: 5706. ";


//  Id pregunta: 5764 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Seg&uacute;n Bennet, Lientz y Swanson:";
 choices[53]= new Array();
 choices[53][0] = "El mantenimiento perfectivo son las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia.";
 choices[53][1] = "El mantenimiento evolutivo son las incorporaciones, modificaciones y eliminaciones necesarias en un producto software para cubrir la expansi&oacute;n o cambio en las necesidades del usuario.";
 choices[53][2] = "El mantenimiento preventivo es la realizaci&oacute;n del mantenimiento anticip&aacute;ndose a problemas futuros.";
 choices[53][3] = "El mantenimiento adaptativo son las modificaciones que afectan a los entornos en los que el sistema opera, como por ejemplo la configuraci&oacute;n del hardware.";
 answers[53] = choices[53][2];
 units[53] = "90";
 comments[53] = "Id Pregunta: 5764. ";


//  Id pregunta: 5792 Año de creación de pregunta: 2009-01-01
 questions[54]= "55)  Indique cu&aacute;l de los siguientes derechos de los ciudadanos al relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos NO est&aacute; reconocido por la ley 11/2007";
 choices[54]= new Array();
 choices[54][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[54][1] = "A conocer por medios electr&oacute;nicos el estado de tramitaci&oacute;n de cualquier procedimiento administrativo.";
 choices[54][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[54][3] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas de los documentos electr&oacute;nicos que formen parte de un expediente.";
 answers[54] = choices[54][1];
 units[54] = "43";
 comments[54] = "Id Pregunta: 5792. MAP 2008 A2";


//  Id pregunta: 5911 Año de creación de pregunta: 2009-01-01
 questions[55]= "56)  Los fabricantes e investigadores hacen referencia a diversos factores determinantes en la calidad de la trasmisi&oacute;n de la voz; de entre los siguientes, determine el &quot;cr&iacute;tico&quot; para aplicaciones de tiempo real como la voz y el video sobre IP:";
 choices[55]= new Array();
 choices[55][0] = "Jitter";
 choices[55][1] = "Throughput";
 choices[55][2] = "Delay";
 choices[55][3] = "Packet Loss";
 answers[55] = choices[55][0];
 units[55] = "109";
 comments[55] = "Id Pregunta: 5911. MAP 2008 A1";


//  Id pregunta: 5999 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  Respecto al contenido del informe de auditoria, indicar cu&aacute;l de las siguientes recomendaciones es correcta:";
 choices[56]= new Array();
 choices[56][0] = "El informe final de una auditoria s&oacute;lo contendr&aacute; recomendaciones relativas a los incumplimientos o puntos d&eacute;biles detectados en el &aacute;rea auditada.";
 choices[56][1] = "El informe final incluir&aacute; las alegaciones de los auditados, indicando la opini&oacute;n de los auditores sobre ellas, y si no se incluyen las alegaciones, deber&aacute; indicarse el motivo.";
 choices[56][2] = "El informe final de una auditoria operativa debe contener la opini&oacute;n de los auditores y sugerencias generales sobre c&oacute;mo aplicar los controles para evaluar el funcionamiento del &aacute;rea auditada.";
 choices[56][3] = "En el informe final de una auditoria operativa se deben se&ntilde;alar las debilidades y fortalezas observadas en relaci&oacute;n con los controles implementados en el &aacute;rea auditada.";
 answers[56] = choices[56][1];
 units[56] = "31";
 comments[56] = "Id Pregunta: 5999. TIC A 2009";


//  Id pregunta: 6090 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[57]= new Array();
 choices[57][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[57][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[57][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[57][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[57] = choices[57][3];
 units[57] = "100";
 comments[57] = "Id Pregunta: 6090. TIC A 2009";


//  Id pregunta: 6111 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;les de los siguientes son los perfiles WS-I?:";
 choices[58]= new Array();
 choices[58][0] = "WS-I Basic Profile, WS-I Basic Infrastructure Profile, WS-I Basic Security Profile (BSP), WS-I Reliable Secure Profile.";
 choices[58][1] = "WS-I Basic Profile, WS-I Basic Infrastructure Profile (BIP) y WS-I Reliable Secure Profile.";
 choices[58][2] = "WS-I Basic Infrastructure Profile (BIP), WS-I Basic Security Profile (BSP) y  WS-I Reliable Secure Profile.";
 choices[58][3] = "WS-I Basic Profile, WS-I Basic Security Profile (BSP) y WS-I Reliable Secure Profile.";
 answers[58] = choices[58][3];
 units[58] = "51";
 comments[58] = "Id Pregunta: 6111. ";


//  Id pregunta: 6234 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[59]= new Array();
 choices[59][0] = "CIL";
 choices[59][1] = "CLI";
 choices[59][2] = "JIT";
 choices[59][3] = "CLR";
 answers[59] = choices[59][0];
 units[59] = "59,115";
 comments[59] = "Id Pregunta: 6234. ";


//  Id pregunta: 6261 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  Cu&aacute;l de las siguientes no es una norma b&aacute;sica en la auditor&iacute;a de los sistemas de informaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Obtenci&oacute;n de evidencia suficiente.";
 choices[60][1] = "Estudio y evaluaci&oacute;n del sistema de control interno.";
 choices[60][2] = "Obtenci&oacute;n de evidencia adecuada.";
 choices[60][3] = "Todas las anteriores forman parte de las normas b&aacute;sicas en la auditor&iacute;a de los sistemas de informaci&oacute;n.";
 answers[60] = choices[60][3];
 units[60] = "31";
 comments[60] = "Id Pregunta: 6261. ";


//  Id pregunta: 6287 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes no es una tarea de la actividad de Identificaci&oacute;n de Requisitos, en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "Estudio de los Procesos del PSI";
 choices[61][1] = "An&aacute;lisis de las Necesidades de la Informaci&oacute;n";
 choices[61][2] = "Catalogaci&oacute;n de Requisitos";
 choices[61][3] = "Todas lo son";
 answers[61] = choices[61][3];
 units[61] = "77";
 comments[61] = "Id Pregunta: 6287. ";


//  Id pregunta: 6289 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; informaci&oacute;n deber&aacute; describir, al menos, cada requisito en el an&aacute;lisis de un Sistema de Informaci&oacute;n?";
 choices[62]= new Array();
 choices[62][0] = "Una descripci&oacute;n";
 choices[62][1] = "Un nombre Descriptivo del Requisito";
 choices[62][2] = "Un c&oacute;digo &uacute;nico";
 choices[62][3] = "Todas las anteriores";
 answers[62] = choices[62][3];
 units[62] = "78";
 comments[62] = "Id Pregunta: 6289. ";


//  Id pregunta: 6350 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  El proyecto de Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, promovido por la Secretaria de Estado de Telecomunicaciones y para la sociedad de la informaci&oacute;n se llama:";
 choices[63]= new Array();
 choices[63][0] = "Reutiliza";
 choices[63][1] = "Comparte";
 choices[63][2] = "Rhodas";
 choices[63][3] = "Aporta";
 answers[63] = choices[63][3];
 units[63] = "30";
 comments[63] = "Id Pregunta: 6350. ";


//  Id pregunta: 6369 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;A qui&eacute;n corresponde, de acuerdo al Esquema Nacional de Seguridad, elaborar las Gu&iacute;as de Seguridad?";
 choices[64]= new Array();
 choices[64][0] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n (SETSI)";
 choices[64][1] = "Al Instituto Nacional de Tecnolog&iacute;as de la Comunicaci&oacute;n (INTECO)";
 choices[64][2] = "Al Instituto Nacional de Administraci&oacute;n P&uacute;blica (INAP)";
 choices[64][3] = "Al Centro Criptol&oacute;gico Nacional (CCN)";
 answers[64] = choices[64][3];
 units[64] = "43";
 comments[64] = "Id Pregunta: 6369. Art&iacute;culo 29 ENS";


//  Id pregunta: 6423 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes personas puso en marcha el W3C?";
 choices[65]= new Array();
 choices[65][0] = "Tim O'Reilly";
 choices[65][1] = "Vinton Cerf";
 choices[65][2] = "Tim Berners-Lee";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][2];
 units[65] = "39";
 comments[65] = "Id Pregunta: 6423. ";


//  Id pregunta: 6543 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  Un ejemplo de ataque al control de acceso es";
 choices[66]= new Array();
 choices[66][0] = "Denegaci&oacute;n de servicio";
 choices[66][1] = "Spoofing";
 choices[66][2] = "Ataques de diccionario";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = choices[66][3];
 units[66] = "111";
 comments[66] = "Id Pregunta: 6543. ";


//  Id pregunta: 6600 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Un contrato de suministros del Ministerio del Interior estar&aacute; sujeto a regulaci&oacute;n armonizada si su valor estimado es: ";
 choices[67]= new Array();
 choices[67][0] = "Superior a 134.000 euros";
 choices[67][1] = "Superior a 125.000";
 choices[67][2] = "Superior a 206.000";
 choices[67][3] = "Superior a 193.000";
 answers[67] = choices[67][0];
 units[67] = "41";
 comments[67] = "Id Pregunta: 6600. Art&iacute;culo 15.1.a) RD Legislativo 3/2011. Cifra modificada por Orden HAP/2425/2013.";


//  Id pregunta: 6610 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  En un DFD, entre 2 procesos existir&aacute; un almac&eacute;n de datos cuando:";
 choices[68]= new Array();
 choices[68][0] = "La comunicaci&oacute;n entre ellos sea s&iacute;ncrona";
 choices[68][1] = "La comunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[68][2] = "Existir&aacute; siempre que haya comunicaci&oacute;n entre los procesos";
 choices[68][3] = "Es el analista el que decide si tiene que existir o no el almac&eacute;n de datos";
 answers[68] = choices[68][1];
 units[68] = "81";
 comments[68] = "Id Pregunta: 6610. ";


//  Id pregunta: 6629 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  El modelo CMM de Ingenier&iacute;a de Software ofrece dos representaciones que se denominan:";
 choices[69]= new Array();
 choices[69][0] = "Continua y Discontinua";
 choices[69][1] = "Continua y Por Et&aacute;pas";
 choices[69][2] = "Por &Aacute;reas Clave y Caracter&iacute;sticas";
 choices[69][3] = "Continua y Por &Aacute;reas Clave";
 answers[69] = choices[69][1];
 units[69] = "87";
 comments[69] = "Id Pregunta: 6629. ";


//  Id pregunta: 7796 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   El est&aacute;ndar DMI:";
 choices[70]= new Array();
 choices[70][0] = " Permite la monitorizaci&oacute;n de determinadas funciones del PC.";
 choices[70][1] = " Permite el control de las diferentes funciones de ahorro de energ&iacute;a de un PC.";
 choices[70][2] = " Es un est&aacute;ndar de gesti&oacute;n de energ&iacute;a desarrollado por Intel, Microsoft y Toshiba.";
 choices[70][3] = " Es una norma dirigida a dispositivos de alta velocidad.";
 answers[70] = choices[70][0];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7796. Map 2005";


//  Id pregunta: 7829 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, en relaci&oacute;n con los certificados electr&oacute;nicos de personas jur&iacute;dicas, establece que:";
 choices[71]= new Array();
 choices[71][0] = " La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de los administradores.";
 choices[71][1] = " S&oacute;lo podr&aacute;n solicitar certificados electr&oacute;nicos de personas jur&iacute;dicas sus administradores.";
 choices[71][2] = " La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de la persona f&iacute;sica solicitante.";
 choices[71][3] = " Si la firma se utiliza transgrediendo los l&iacute;mites mencionados en la Ley, la persona jur&iacute;dica quedar&aacute; vinculada frente a terceros en todo caso.";
 answers[71] = choices[71][2];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7829. Map 2005";


//  Id pregunta: 7954 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   Una Directiva comunitaria que, en materia de salud en el trabajo, es aplicable directamente a los productos inform&aacute;ticos y establece disposiciones m&iacute;nimas de seguridad y salud relativas al trabajo con equipos que incluyen pantallas de visualizaci&oacute;n, es la:";
 choices[72]= new Array();
 choices[72][0] = " Directiva 90/270/CEE, de 29 de mayo.";
 choices[72][1] = " Directiva 95/220/CEE, de 14 de abril.";
 choices[72][2] = " Directiva 198/130/CEE, de 30 de octubre.";
 choices[72][3] = " Ninguna de las anteriores.";
 answers[72] = choices[72][0];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7954. Map 2006";


//  Id pregunta: 8053 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   Los adjudicatarios de los contratos regulados por el RDL 2/2000, de 16 de junio, est&aacute;n obligados a constituir una garant&iacute;a definitiva por un importe del:";
 choices[73]= new Array();
 choices[73][0] = " 2% del presupuesto del contrato.";
 choices[73][1] = " 2% del importe de adjudicaci&oacute;n.";
 choices[73][2] = " 4% del presupuesto del contrato.";
 choices[73][3] = " 4% del importe de adjudicaci&oacute;n.";
 answers[73] = choices[73][3];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 8053. Map 2007";


//  Id pregunta: 8055 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?";
 choices[74]= new Array();
 choices[74][0] = " UPDATE TABLE.";
 choices[74][1] = " ALTER TABLE.";
 choices[74][2] = " REVOKE ALL.";
 choices[74][3] = " ROLLBACK.";
 answers[74] = choices[74][1];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 8055. Map 2007";


//  Id pregunta: 8156 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   Determine cu&aacute;l de las afirmaciones siguientes NO se corresponde con una caracter&iacute;stica definitoria de la tecnolog&iacute;a ATM:";
 choices[75]= new Array();
 choices[75][0] = " Las redes ATM est&aacute;n orientadas a la conexi&oacute;n, requiriendo del establecimiento de un circuito virtual antes de la transferencia de informaci&oacute;n entre dos extremos.";
 choices[75][1] = " ATM es independiente del transporte f&iacute;sico, las celdas ATM pueden ser transportadas en redes SONET, SDH, T3/E3 o T1/E1.";
 choices[75][2] = " ATM puede utilizarse tanto como plataforma de interconexi&oacute;n de redes, como una red para proporcionar servicios de banda ancha.";
 choices[75][3] = " Las celdas son de longitud variable, con un m&aacute;ximo de 53 bytes, de los cuales 5 son de cabecera y los restantes son portadores de la informaci&oacute;n de usuario, gesti&oacute;n y se&ntilde;alizaci&oacute;n.";
 answers[75] = choices[75][3];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 8156. Map 2008";


//  Id pregunta: 8169 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la &quot;Ley General de Telecomunicaciones&quot; es cierta?:";
 choices[76]= new Array();
 choices[76][0] = "Corresponde a la Comisi&oacute;n Nacional de los Mercados y la Competencia la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n y, en su caso, de direccionamiento y nombres, teniendo en cuenta las decisiones aplicables que se adopten en el seno de las organizaciones y los foros internacionales.";
 choices[76][1] = "Corresponde al Ministerio de Industria, Energ&iacute;a y Turismo el otorgamiento de los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n";
 choices[76][2] = "El procedimiento y los plazos para la asignaci&oacute;n de n&uacute;meros, as&iacute; como las condiciones asociadas al uso de los n&uacute;meros, que ser&aacute;n no discriminatorias, proporcionadas y transparentes, se establecer&aacute;n reglamentariamente. Transcurrido el plazo m&aacute;ximo sin haberse notificado la resoluci&oacute;n expresa, se podr&aacute; entender aprobada la solicitud por silencio administrativo.";
 choices[76][3] = "Quedan incluidos en el &aacute;mbito de esta Ley, el r&eacute;gimen aplicable a los contenidos de car&aacute;cter audiovisual transmitidos a trav&eacute;s de las redes.";
 answers[76] = choices[76][1];
 units[76] = "110";
 comments[76] = "Id Pregunta: 8169. Examen TIC A1 2010. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 8253 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Seg&uacute;n el est&aacute;ndar IEEE 610.12, la l&iacute;nea base:";
 choices[77]= new Array();
 choices[77][0] = "Es la l&iacute;nea que marca en la planificaci&oacute;n en que momento nos encontramos.";
 choices[77][1] = "Es la situaci&oacute;n en que se encuentra en cada momento el desarrollo.";
 choices[77][2] = "Es el momento de salida de la planificaci&oacute;n.";
 choices[77][3] = "Ha sido acordada formalmente.";
 answers[77] = choices[77][3];
 units[77] = "27,28";
 comments[77] = "Id Pregunta: 8253. Examen TIC A1 2010";


//  Id pregunta: 8435 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Qu&eacute; proyecto europeo pretende establecer una plataforma de interoperabilidad y reconocimiento mutuo transfronterizo entre las identidades electr&oacute;nicas existentes en cada Estado Europeo?";
 choices[78]= new Array();
 choices[78][0] = "Conecta";
 choices[78][1] = "Robinson";
 choices[78][2] = "Stork";
 choices[78][3] = "Interoperability card";
 answers[78] = choices[78][2];
 units[78] = "118";
 comments[78] = "Id Pregunta: 8435. ";


//  Id pregunta: 8628 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  De entre las siguientes opciones en el &aacute;mbito del almacenamiento en los sistemas de informaci&oacute;n, se&ntilde;ale la verdadera:";
 choices[79]= new Array();
 choices[79][0] = "SAS es una interfaz de transferencia de datos en serie";
 choices[79][1] = "SATA es una Interfaz de transferencia de datos en paralelo";
 choices[79][2] = "Los dispositivos SAS se identifican por el World Wide Web Name (WWWN).";
 choices[79][3] = "El conector SATA posee 68 pines";
 answers[79] = choices[79][0];
 units[79] = "48";
 comments[79] = "Id Pregunta: 8628. Examen TIC A2 2010 interna";


//  Id pregunta: 8758 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  En un Sistema Operativo, una planificaci&oacute;n de procesos se denomina &quot;preemptive&quot;:";
 choices[80]= new Array();
 choices[80][0] = "Cuando un proceso no se puede desalojar de la CPU";
 choices[80][1] = "No existe tal denominaci&oacute;n.";
 choices[80][2] = "La prevenci&oacute;n de ejecutar procesos que consuman muchos recursos por el Sistema operativo";
 choices[80][3] = "Cuando un proceso se puedo desalojar de la CPU";
 answers[80] = choices[80][3];
 units[80] = "52";
 comments[80] = "Id Pregunta: 8758. Examen TIC A2 2010 interna";


//  Id pregunta: 8861 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  El lenguaje Java Script:";
 choices[81]= new Array();
 choices[81][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[81][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[81][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[81][3] = "Solamente puede ser compilado si el servidor tiene instalada una m&aacute;quina virtual java (JVM)";
 answers[81] = choices[81][1];
 units[81] = "69";
 comments[81] = "Id Pregunta: 8861. Analista Ayto. Madrid 2010";


//  Id pregunta: 8919 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Qu&eacute; herramienta con versiones en Windows, Unix y otros sistemas, muestra informaci&oacute;n sobre el estado actual de todos los procesos IP que se est&aacute;n ejecutando, las sesiones activas y puede proporcionar estad&iacute;sticas bas&aacute;ndose en los puertos o protocolos.";
 choices[82]= new Array();
 choices[82][0] = "ROUTE";
 choices[82][1] = "NETSTAT";
 choices[82][2] = "NBTSTAT";
 choices[82][3] = "TRACERT";
 answers[82] = choices[82][1];
 units[82] = "104";
 comments[82] = "Id Pregunta: 8919. Operador Ayto. Madrid 2010";


//  Id pregunta: 9094 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[83]= new Array();
 choices[83][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[83][1] = "Si, como obra literaria.";
 choices[83][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[83][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[83] = choices[83][3];
 units[83] = "36";
 comments[83] = "Id Pregunta: 9094. ";


//  Id pregunta: 9096 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[84]= new Array();
 choices[84][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[84][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[84][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[84][3] = "Todas las anteriores son verdaderas.";
 answers[84] = choices[84][3];
 units[84] = "36";
 comments[84] = "Id Pregunta: 9096. ";


//  Id pregunta: 9154 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Indique cu&aacute;l de las siguientes es una soluci&oacute;n de software libre de eLearning:";
 choices[85]= new Array();
 choices[85][0] = "Ganesha";
 choices[85][1] = "OpenSCORM";
 choices[85][2] = "Blackboard";
 choices[85][3] = "WebCT";
 answers[85] = choices[85][0];
 units[85] = "66";
 comments[85] = "Id Pregunta: 9154. ";


//  Id pregunta: 9302 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  ISACA:";
 choices[86]= new Array();
 choices[86][0] = "Es la Information Security Audit and Control Association";
 choices[86][1] = "Posee una metodolog&iacute;a basada en COBIT, de cara a obtener los controles a aplicar durante la auditor&iacute;a y en CMMI, de cara a obtener un modelo de desarrollo sobre el que basarse para auditar el existente";
 choices[86][2] = "Posee una metodolog&iacute;a propia, que no se basa ni en COBIT ni en CMMI";
 choices[86][3] = "Ninguna de las anteriores";
 answers[86] = choices[86][3];
 units[86] = "33";
 comments[86] = "Id Pregunta: 9302. ";


//  Id pregunta: 9403 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  RTP (Real time protocol) se utiliza en ToIP (telefon&iacute;a IP) para";
 choices[87]= new Array();
 choices[87][0] = "Mantener sincronizados los relojes de los tel&eacute;fonos.";
 choices[87][1] = "Nada. Lo que se utiliza es RTCP (real time control protocol)";
 choices[87][2] = "Transmitir la voz: una vez codificada se encapsula como payload de RTP en datagramas UDP.";
 choices[87][3] = "Ninguna de las anteriores";
 answers[87] = choices[87][2];
 units[87] = "109";
 comments[87] = "Id Pregunta: 9403. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9418 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  El uso de la t&eacute;cnica de la media para combinar estimaciones software individuales es caracter&iacute;stico de los m&eacute;todos";
 choices[88]= new Array();
 choices[88][0] = "Con base hist&oacute;rica";
 choices[88][1] = "Con base estad&iacute;stica";
 choices[88][2] = "Compuestos";
 choices[88][3] = "Lineales";
 answers[88] = choices[88][0];
 units[88] = "89";
 comments[88] = "Id Pregunta: 9418. ";


//  Id pregunta: 9454 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Seg&uacute;n Codd, una entidad en la que todos los atributos dependen funcionalmente de la clave est&aacute;, al menos, en:";
 choices[89]= new Array();
 choices[89][0] = "Primera Forma Normal.";
 choices[89][1] = "Segunda Forma Normal.";
 choices[89][2] = "Tercera Forma Normal.";
 choices[89][3] = "Forma Normal de Boyce-Codd.";
 answers[89] = choices[89][0];
 units[89] = "58";
 comments[89] = "Id Pregunta: 9454. ";


//  Id pregunta: 9545 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Seg&uacute;n la LSSI, entre los elementos que los prestadores de servicios de la Sociedad de la Informaci&oacute;n est&aacute;n obligados a indicar en su p&aacute;gina web NO se encuentra:";
 choices[90]= new Array();
 choices[90][0] = "El nombre o denominiaci&oacute;n social";
 choices[90][1] = "Un n&uacute;mero de tel&eacute;fono de contacto";
 choices[90][2] = "El n&uacute;mero de inscripci&oacute;n en el registro mercantil u otro registro p&uacute;blico";
 choices[90][3] = "Los c&oacute;digos de conducta a los que est&eacute; adheridos.";
 answers[90] = choices[90][1];
 units[90] = "30";
 comments[90] = "Id Pregunta: 9545. ";


//  Id pregunta: 9682 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Son tipos de mapas:";
 choices[91]= new Array();
 choices[91][0] = "Topogr&aacute;fico, topol&oacute;gico, tem&aacute;tico y superficial.";
 choices[91][1] = "Topogr&aacute;fico, azimutal, tem&aacute;tico y plano.";
 choices[91][2] = "Referencial, topol&oacute;gico, tem&aacute;tico y plano. ";
 choices[91][3] = "Cil&iacute;ndrico, azimutal, c&oacute;nico y estereogr&aacute;fico.";
 answers[91] = choices[91][2];
 units[91] = "67";
 comments[91] = "Id Pregunta: 9682. ";


//  Id pregunta: 9942 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  El Real Decreto 695/2013 crea la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones. &iquest;Cu&aacute;l es el rango de esta Direcci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "Direcci&oacute;n General.";
 choices[92][1] = "Subdirecci&oacute;n General.";
 choices[92][2] = "Subsecretar&iacute;a.";
 choices[92][3] = "Secretar&iacute;a de Estado.";
 answers[92] = choices[92][2];
 units[92] = "44";
 comments[92] = "Id Pregunta: 9942. TIC A1, Examen 2013";


//  Id pregunta: 9972 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes se corresponde con un m&oacute;dulo dentro de un ERP (Enterprise Resource Planning)?";
 choices[93]= new Array();
 choices[93][0] = "Recursos Humanos";
 choices[93][1] = "Planificaci&oacute;n Estrat&eacute;gica";
 choices[93][2] = "Seguridad de Informaci&oacute;n";
 choices[93][3] = "HelpDesk";
 answers[93] = choices[93][0];
 units[93] = "65";
 comments[93] = "Id Pregunta: 9972. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10027 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  Elija la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[94][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[94][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[94][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[94] = choices[94][0];
 units[94] = "115";
 comments[94] = "Id Pregunta: 10027. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10050 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Indique la respuesta FALSA, respecto al protocolo IPSEC :";
 choices[95]= new Array();
 choices[95][0] = "El protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[95][1] = "El protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[95][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[95][3] = "IPSEC ESP es incompatible con el modo transporte, s&oacute;lo se puede utilizar en modo t&uacute;nel.";
 answers[95] = choices[95][3];
 units[95] = "111";
 comments[95] = "Id Pregunta: 10050. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10059 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[96]= new Array();
 choices[96][0] = "TIER I ";
 choices[96][1] = "TIER II";
 choices[96][2] = "TIER III ";
 choices[96][3] = "TIER IV";
 answers[96] = choices[96][2];
 units[96] = "99";
 comments[96] = "Id Pregunta: 10059. TIC A2, libre, Examen 2013";


//  Id pregunta: 10155 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Seg&uacute;n el ENS cu&aacute;l de las siguientes afirmaciones es incorrecta";
 choices[97]= new Array();
 choices[97][0] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta la informaci&oacute;n se cifrar&aacute; tanto durante su almacenamiento como durante su transmisi&oacute;n. S&oacute;lo estar&aacute; en claro mientras se est&aacute; haciendo uso de ella. ";
 choices[97][1] = "Si un sistema es de categor&iacute;a b&aacute;sica es necesario realizar un an&aacute;lisis de riesgos informal.";
 choices[97][2] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta se emplear&aacute;n, preferentemente, dispositivos hw en el establecimiento y utilizaci&oacute;n de la VPN.";
 choices[97][3] = "Para aquellos sistemas cuya dimensi&oacute;n de trazabilidad sea media es necesario llevar un registro de la actividad de los usuarios y protecci&oacute;n de los registros de actividad. ";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 10155. ";


//  Id pregunta: 10238 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Se&ntilde;ala la tecnolog&iacute;a que soporta transacciones:";
 choices[98]= new Array();
 choices[98][0] = "RMI";
 choices[98][1] = "JTS";
 choices[98][2] = "JMAPI";
 choices[98][3] = "JTA";
 answers[98] = choices[98][3];
 units[98] = "116";
 comments[98] = "Id Pregunta: 10238. ";


//  Id pregunta: 10293 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Uno de los siguientes t&eacute;rminos NO se corresponde con un tipo de antena satelital:";
 choices[99]= new Array();
 choices[99][0] = "Cassegrain";
 choices[99][1] = "Krenwinkel";
 choices[99][2] = "Gregorian";
 choices[99][3] = "Offset";
 answers[99] = choices[99][1];
 units[99] = "67";
 comments[99] = "Id Pregunta: 10293. TIC A2, libre, examen 2013";


