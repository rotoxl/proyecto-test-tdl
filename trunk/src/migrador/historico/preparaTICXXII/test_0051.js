/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 63 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; es la WAI?";
 choices[0]= new Array();
 choices[0][0] = "una asociaci&oacute;n mundial de defensa de los internautas";
 choices[0][1] = "una iniciativa para la automatizaci&oacute;n de las tareas de organizaci&oacute;n web";
 choices[0][2] = "una iniciativa para facilitar el acceso a la web de los discapacitados";
 choices[0][3] = "una iniciativa para el desarrollo de aplicaciones inal&aacute;mbricas";
 answers[0] = choices[0][2];
 units[0] = "39";
 comments[0] = "Id Pregunta: 63. ";


//  Id pregunta: 99 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  En relaci&oacute;n con la impugnaci&oacute;n de valoraciones:";
 choices[1]= new Array();
 choices[1][0] = "Los ciudadanos tienen derecho a no verse sometidos a una decisi&oacute;n con efectos jur&iacute;dicos, sobre ellos o que les afecte de manera significativa, que se base &uacute;nicamente en un tratamiento de datos destinados a evaluar determinados aspectos de su personalidad";
 choices[1][1] = "El afectado podr&aacute; impugnar actos administrativos o decisiones privadas que impliquen una valoraci&oacute;n de su comportamiento, cuyo &uacute;nico fundamento sea un tratamiento de datos de car&aacute;cter personal que ofrezca una definici&oacute;n  de sus caracter&iacute;sticas o personalidad";
 choices[1][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[1][3] = "Ninguna de las respuestas es correcta";
 answers[1] = choices[1][2];
 units[1] = "29";
 comments[1] = "Id Pregunta: 99. ";


//  Id pregunta: 170 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En auditor&iacute;a inform&aacute;tica, el objeto de una &quot;prueba de cumplimiento&quot; es:";
 choices[2]= new Array();
 choices[2][0] = "Verificar el cumplimiento de la legislaci&oacute;n y la normativa vigente en las operaciones de un sistema de informaci&oacute;n, especialmente en el cap&iacute;tulo de compras y gesti&oacute;n de personal";
 choices[2][1] = "Sustanciar la probabilidad de que los objetivos de control no se alcancen";
 choices[2][2] = "Determinar si los controles se est&aacute;n aplicando de la forma descrita en la documentaci&oacute;n o de la forma descrita por el usuario o directivo";
 choices[2][3] = "Verificar que todos los usuarios se adhieren voluntaria u obligatoriamente a la pol&iacute;tica sobre usos de recursos inform&aacute;ticos implantada por la Direcci&oacute;n";
 answers[2] = choices[2][2];
 units[2] = "31,32,33";
 comments[2] = "Id Pregunta: 170. ";


//  Id pregunta: 293 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La definici&oacute;n de organizaci&oacute;n como &quot;combinaci&oacute;n de medios humanos y materiales disponibles para la consecuci&oacute;n de un fin seg&uacute;n un esquema preciso de dependencias e interrelaciones&quot; es debida a: ";
 choices[3]= new Array();
 choices[3][0] = "Andrea Zerilli";
 choices[3][1] = "Stephen Robbins";
 choices[3][2] = "James Emery";
 choices[3][3] = "Robert Gibson";
 answers[3] = choices[3][0];
 units[3] = "22";
 comments[3] = "Id Pregunta: 293. ";


//  Id pregunta: 355 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  Las Comunidades Aut&oacute;nomas pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos que:";
 choices[4]= new Array();
 choices[4][0] = "Tendr&aacute;n competencias &uacute;nicamente sobre los ficheros de datos de car&aacute;cter personal, creados o gestionados por las CC.AA.";
 choices[4][1] = "Tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados o gestionados por las CCAA y por la Administraci&oacute;n local de su &aacute;mbito territorial";
 choices[4][2] = "S&oacute;lo tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados por la Administraci&oacute;n local de su &aacute;mbito territorial si lo autoriza el Director de la Agencia de Protecci&oacute;n de Datos";
 choices[4][3] = "Las CCAA no pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos";
 answers[4] = choices[4][1];
 units[4] = "29";
 comments[4] = "Id Pregunta: 355. ";


//  Id pregunta: 356 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Las cuatro etapas del modelo inicial de Nolan son:";
 choices[5]= new Array();
 choices[5][0] = "Iniciaci&oacute;n, contagio, control y madurez";
 choices[5][1] = "Iniciaci&oacute;n, expansi&oacute;n, control y madurez";
 choices[5][2] = "Iniciaci&oacute;n, contagio, formalizaci&oacute;n y madurez";
 choices[5][3] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 answers[5] = choices[5][3];
 units[5] = "22";
 comments[5] = "Id Pregunta: 356. nolan";


//  Id pregunta: 465 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Un activo es, de acuerdo a MAGERIT:";
 choices[6]= new Array();
 choices[6][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[6][1] = "Resultado de una agresi&oacute;n";
 choices[6][2] = "Evento que desencadena un incidente";
 choices[6][3] = "Ninguno de los anteriores";
 answers[6] = choices[6][3];
 units[6] = "31, 32, 33";
 comments[6] = "Id Pregunta: 465. ";


//  Id pregunta: 522 Año de creación de pregunta: 2003-01-01
 questions[7]= "8)  Las medidas de seguridad l&oacute;gica para datos de car&aacute;cter personal caracterizadas como de nivel Medio:";
 choices[7]= new Array();
 choices[7][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[7][1] = "La responsabilidad de los registros de acceso esta bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro esta activo y que no haya saltos temporales.";
 choices[7][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[7][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos.";
 answers[7] = choices[7][2];
 units[7] = "29";
 comments[7] = "Id Pregunta: 522. Junta Andaluc&iacute;a";


//  Id pregunta: 562 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  Seg&uacute;n AlvinToffler las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos";
 choices[8]= new Array();
 choices[8][0] = "jararqu&iacute;as y las relaciones entre las jerarqu&iacute;as";
 choices[8][1] = "los especialistas y los gerentes";
 choices[8][2] = "Cub&iacute;culos y canales";
 choices[8][3] = "controles y procedimientos";
 answers[8] = choices[8][2];
 units[8] = "22";
 comments[8] = "Id Pregunta: 562. ";


//  Id pregunta: 584 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  &iquest;En qu&eacute; situaciones es necesario un equipo de integraci&oacute;n de sistemas?";
 choices[9]= new Array();
 choices[9][0] = "En entorno de microinform&aacute;tica";
 choices[9][1] = "Cuando se trabaja con m&aacute;quinas virtuales separadas";
 choices[9][2] = "Cuando se engloban varios componentes o varios sistemas sobre una misma plataforma";
 choices[9][3] = "Cuando se sube a producci&oacute;n sistemas especialmente cr&iacute;ticos";
 answers[9] = choices[9][2];
 units[9] = "26";
 comments[9] = "Id Pregunta: 584. ";


//  Id pregunta: 628 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  Cu&aacute;l de las siguientes alternativas no se puede contratar a trav&eacute;s del cat&aacute;logo central de suministros.";
 choices[10]= new Array();
 choices[10][0] = "Un paquete SW de Bases de Datos.";
 choices[10][1] = "Un Servidor de aplicaciones.";
 choices[10][2] = "Un equipo externo de desarrollo Software.";
 choices[10][3] = "Un servicio de comunicaciones con un operador.";
 answers[10] = choices[10][3];
 units[10] = "35";
 comments[10] = "Id Pregunta: 628. ";


//  Id pregunta: 651 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  Una norma europea es:";
 choices[11]= new Array();
 choices[11][0] = "Una norma aprobada por un organismo de normalizaci&oacute;n con el que la Uni&oacute;n Europea ha establecido acuerdos";
 choices[11][1] = "De obligado cumplimiento en la Uni&oacute;n Europea";
 choices[11][2] = "Una norma homologada por un organismo de normalizaci&oacute;n con sede en la Uni&oacute;n Europea";
 choices[11][3] = "Una norma elaborada por el Comit&eacute; Europeo de Normalizaci&oacute;n (CEN)";
 answers[11] = choices[11][0];
 units[11] = "42";
 comments[11] = "Id Pregunta: 651. ";


//  Id pregunta: 786 Año de creación de pregunta: 2004-01-01
 questions[12]= "13)  Se&ntilde;ale las caracter&iacute;sticas que m&aacute;s se ajustan al est&aacute;ndar IEEE 1394 (Firewire):";
 choices[12]= new Array();
 choices[12][0] = "Hasta 62 dispositivos, 25Mbytes/s";
 choices[12][1] = "Hasta 172 dispositivos, 1.5Mbytes/s";
 choices[12][2] = "Hasta 256 dispositivos, 17Mbytes/s";
 choices[12][3] = "Hasta 1024 dispositivos, 5Mbytes/s";
 answers[12] = choices[12][0];
 units[12] = "47";
 comments[12] = "Id Pregunta: 786. SS-A 2004";


//  Id pregunta: 872 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes programas en Linux no es un editor de textos?:";
 choices[13]= new Array();
 choices[13][0] = "vi";
 choices[13][1] = "emacs";
 choices[13][2] = "pine";
 choices[13][3] = "joe";
 answers[13] = choices[13][2];
 units[13] = "53";
 comments[13] = "Id Pregunta: 872. ";


//  Id pregunta: 1045 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  El principio de &quot;Need-To-Know&quot; viene a significar que:";
 choices[14]= new Array();
 choices[14][0] = "Un proceso s&oacute;lo deber&iacute;a acceder a aquello recursos que son necesarios para completar su tarea";
 choices[14][1] = "Un proceso ha de estar siempre activo frente a cualquier ataque pasivo";
 choices[14][2] = "Las dos anteriores son correctas";
 choices[14][3] = "Hace referencia exclusiva a la asignaci&oacute;n de recursos con herramientas PERT, CPM etc";
 answers[14] = choices[14][0];
 units[14] = "52";
 comments[14] = "Id Pregunta: 1045. ";


//  Id pregunta: 1120 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  En los criptosistemas asim&eacute;tricos:";
 choices[15]= new Array();
 choices[15][0] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con la clave p&uacute;blica del emisor";
 choices[15][1] = "El emisor cifra con su clave p&uacute;blica y el receptor descifra con su clave privada";
 choices[15][2] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con su clave privada";
 choices[15][3] = "El emisor cifra con su clave privada y el receptor descifra con su clave p&uacute;blica";
 answers[15] = choices[15][2];
 units[15] = "72";
 comments[15] = "Id Pregunta: 1120. ";


//  Id pregunta: 1172 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  HURD:";
 choices[16]= new Array();
 choices[16][0] = "Es el sistema operativo GNU por definici&oacute;n";
 choices[16][1] = "Utiliza arquitectura Microkernel";
 choices[16][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[16][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[16] = choices[16][2];
 units[16] = "53";
 comments[16] = "Id Pregunta: 1172. ";


//  Id pregunta: 1179 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indicar cu&aacute;l de las siguientes no es una ventaja de los sistemas expertos:";
 choices[17]= new Array();
 choices[17][0] = "Permanencia";
 choices[17][1] = "Facilidad de reproducci&oacute;n";
 choices[17][2] = "Funcionamiento uniforme";
 choices[17][3] = "Eficiencia";
 answers[17] = choices[17][3];
 units[17] = "64";
 comments[17] = "Id Pregunta: 1179. ";


//  Id pregunta: 1220 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  La estructura secuencial encadenada:";
 choices[18]= new Array();
 choices[18][0] = "Es una estructura de f&aacute;cil gesti&oacute;n";
 choices[18][1] = "La inserciones de datos se autogestionan sin variar la estructura l&oacute;gica inicial";
 choices[18][2] = "Es el elemento precursor de la estructura relacional de las bases de datos";
 choices[18][3] = "La idea de apuntadores ha sido utilizada en los sistemas jer&aacute;rquicos y en red";
 answers[18] = choices[18][3];
 units[18] = "57";
 comments[18] = "Id Pregunta: 1220. ";


//  Id pregunta: 1405 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Un sistema SUN:";
 choices[19]= new Array();
 choices[19][0] = "Puede utilizar procesadores Sparc";
 choices[19][1] = "Puede utilizar procesadores MIPS";
 choices[19][2] = "Puede utilizar procesadores Intel";
 choices[19][3] = "A y C son ciertas";
 answers[19] = choices[19][3];
 units[19] = "48";
 comments[19] = "Id Pregunta: 1405. ";


//  Id pregunta: 1539 Año de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest; Cu&aacute;l se utiliza para compartir recursos desde un sistema tipo Unix a equipos Windows utilizando el protocolo SMB ?";
 choices[20]= new Array();
 choices[20][0] = "NFS";
 choices[20][1] = "Samba";
 choices[20][2] = "Cualquiera de los 2 indistintamente";
 choices[20][3] = "Ninguno de los 2";
 answers[20] = choices[20][1];
 units[20] = "54";
 comments[20] = "Id Pregunta: 1539. ";


//  Id pregunta: 1765 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;C&oacute;mo se denominan en Java EE los componentes de negocio en el entorno servidor?";
 choices[21]= new Array();
 choices[21][0] = "Applet.";
 choices[21][1] = "EJB.";
 choices[21][2] = "DCOM+.";
 choices[21][3] = "JSP.";
 answers[21] = choices[21][1];
 units[21] = "60,116";
 comments[21] = "Id Pregunta: 1765. JCED - Preparatic XVII";


//  Id pregunta: 2006 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  Sobre el m&eacute;todo de los puntos de funci&oacute;n puede decirse que:";
 choices[22]= new Array();
 choices[22][0] = "se basa en el n&uacute;mero de l&iacute;neas de c&oacute;digo";
 choices[22][1] = "es independiente del c&oacute;digo";
 choices[22][2] = "es una m&eacute;trica de complejidad";
 choices[22][3] = "es una m&eacute;trica de fiabilidad";
 answers[22] = choices[22][1];
 units[22] = "89";
 comments[22] = "Id Pregunta: 2006. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2034 Año de creación de pregunta: 2004-01-01
 questions[23]= "24)  Cu&aacute;l de los siguientes es un formato de sonido:";
 choices[23]= new Array();
 choices[23][0] = "gif";
 choices[23][1] = "blob";
 choices[23][2] = "wcm";
 choices[23][3] = "rar";
 answers[23] = choices[23][2];
 units[23] = "94,95";
 comments[23] = "Id Pregunta: 2034. Similar a examen TIC SS A 2003";


//  Id pregunta: 2048 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  En la planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n, las decisiones principales que es preciso tomar son:";
 choices[24]= new Array();
 choices[24][0] = "Establecer los objetivos y metas principales";
 choices[24][1] = "Formular programas y proyectos parqa conseguir los objetivos";
 choices[24][2] = "Definir presupuesto y &aacute;mbito de actuaci&oacute;n para llevar a cabo lo anterior";
 choices[24][3] = "Todas las anteriores respuestas son correctas";
 answers[24] = choices[24][3];
 units[24] = "77";
 comments[24] = "Id Pregunta: 2048. ";


//  Id pregunta: 2147 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes modelos de an&aacute;lisis estructurado sirve para verificar la exactitud de los otros dos modelos y para garantizar la coherencia entre las tres visiones del sistema: est&aacute;tica, din&aacute;mica y evolutiva?:";
 choices[25]= new Array();
 choices[25][0] = "DFD";
 choices[25][1] = "DED";
 choices[25][2] = "HVE";
 choices[25][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[25] = choices[25][2];
 units[25] = "81";
 comments[25] = "Id Pregunta: 2147. ";


//  Id pregunta: 2245 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  Del modelo clasico de ciclo de vida en cascada puede afirmarse que:";
 choices[26]= new Array();
 choices[26][0] = "El usuario valida el resultado de cada una de las fases";
 choices[26][1] = "Proporciona resultados parciales para validaci&oacute;n de requisitos";
 choices[26][2] = "Est&aacute; regido por la documentaci&oacute;n, que marca la transici&oacute;n entre fases";
 choices[26][3] = "Est&aacute; dirigido por el riesgo";
 answers[26] = choices[26][2];
 units[26] = "76";
 comments[26] = "Id Pregunta: 2245. ";


//  Id pregunta: 2328 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  En la planificaci&oacute;n de un Sistema de Informaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "El horizonte temporal del nivel t&aacute;ctico se fija en 3-5 a&ntilde;os";
 choices[27][1] = "El nivel estrat&eacute;gico fija los objetivos/metas y plazos a largo plazo";
 choices[27][2] = "El nivel estrat&eacute;gico contiene informaci&oacute;n de los tres niveles inferiores";
 choices[27][3] = "El nivel t&aacute;ctico controla a los niveles inferiores y es el nexo de comunicaci&oacute;n externa de la empresa";
 answers[27] = choices[27][1];
 units[27] = "77";
 comments[27] = "Id Pregunta: 2328. ";


//  Id pregunta: 2401 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  La modularizaci&oacute;n hace referencia a:";
 choices[28]= new Array();
 choices[28][0] = "Aislar funciones bien definidas.";
 choices[28][1] = "Reflejar la estructura de la organizaci&oacute;n de modo que facilite su comprensi&oacute;n.";
 choices[28][2] = "Correcta definici&oacute;n de las interfaces internas y externas, que permita ignorar la estructura interna de los m&oacute;dulos.";
 choices[28][3] = "Persigue que la arquitectura t&eacute;cnica del sistema se fundamente en m&oacute;dulos de peque&ntilde;o tama&ntilde;o.";
 answers[28] = choices[28][3];
 units[28] = "84";
 comments[28] = "Id Pregunta: 2401. ";


//  Id pregunta: 2644 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  En el modelo Entidad Relaci&oacute;n, &iquest; qu&eacute; es una entidad regular?";
 choices[29]= new Array();
 choices[29][0] = "Es aquella que tiene existencia por si misma, no depende de ninguna otra entidad.";
 choices[29][1] = "Es aquella que su existencia depende de otra entidad del modelo y sin la otra entidad no tiene sentido &eacute;sta.";
 choices[29][2] = " Una entidad en la que el n&uacute;mero m&aacute;ximo de ocurrencias que pueden estar asociadas a ella con una ocurrencia de otra u otras entidades participantes es 1.";
 choices[29][3] = "  Una entidad que tiene atributos derivados.";
 answers[29] = choices[29][0];
 units[29] = "80";
 comments[29] = "Id Pregunta: 2644. ";


//  Id pregunta: 2649 Año de creación de pregunta: 2003-01-01
 questions[30]= "31)  Indicar la afirmaci&oacute;n falsa sobre Diagramas de Flujo de Datos";
 choices[30]= new Array();
 choices[30][0] = "No se puede representar flujos de datos entre almacenes y entidades externas";
 choices[30][1] = "Se pueden representar relaciones entre entidades externas ";
 choices[30][2] = "No se debe representar la clave de acceso al almac&eacute;n sino s&oacute;lo la operaci&oacute;n que se realice en el almac&eacute;n";
 choices[30][3] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es s&iacute;ncrona";
 answers[30] = choices[30][1];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2649. ";


//  Id pregunta: 2700 Año de creación de pregunta: 2003-01-01
 questions[31]= "32)  Principal inconveniente del teletexto:";
 choices[31]= new Array();
 choices[31][0] = "El juego de colores es reducido.";
 choices[31][1] = "Carece de interactividad.";
 choices[31][2] = "La resoluci&oacute;n gr&aacute;fica no es buena.";
 choices[31][3] = "Necesita un decodificador caro y voluminoso.";
 answers[31] = choices[31][1];
 units[31] = "93";
 comments[31] = "Id Pregunta: 2700. ";


//  Id pregunta: 2819 Año de creación de pregunta: 2006-01-01
 questions[32]= "33)  La distribucci&oacute;n Rayleigh se utiliza en el modelo de estimaci&oacute;n del esfuerzo de desarrollo de un proyecto SW propuesto por:";
 choices[32]= new Array();
 choices[32][0] = "Putnam";
 choices[32][1] = "Walston-Felix";
 choices[32][2] = "Esterling";
 choices[32][3] = "McCall";
 answers[32] = choices[32][0];
 units[32] = "89";
 comments[32] = "Id Pregunta: 2819. ";


//  Id pregunta: 2948 Año de creación de pregunta: 2004-01-01
 questions[33]= "34)  &iquest;Qu&eacute; organismo trabaj&oacute; en la estandarizaci&oacute;n de las redes de cable?";
 choices[33]= new Array();
 choices[33][0] = "El IEEE 802.11";
 choices[33][1] = "El IEEE 802.14";
 choices[33][2] = "El ATU-C";
 choices[33][3] = "El UIT-T E.164";
 answers[33] = choices[33][1];
 units[33] = "105";
 comments[33] = "Id Pregunta: 2948. Examen TIC MAP B 2004";


//  Id pregunta: 3014 Año de creación de pregunta: 2004-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponden con las de FR?";
 choices[34]= new Array();
 choices[34][0] = "Orientado a conexi&oacute;n";
 choices[34][1] = "no fiable";
 choices[34][2] = "sin garant&iacute;as de caudal m&iacute;nimo";
 choices[34][3] = "ninguna de las anteriores";
 answers[34] = choices[34][2];
 units[34] = "109";
 comments[34] = "Id Pregunta: 3014. ";


//  Id pregunta: 3238 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es el puerto habitual usado por una conexi&oacute;n Telnet?:";
 choices[35]= new Array();
 choices[35][0] = "15";
 choices[35][1] = "21";
 choices[35][2] = "23";
 choices[35][3] = "80";
 answers[35] = choices[35][2];
 units[35] = "100, 112";
 comments[35] = "Id Pregunta: 3238. ";


//  Id pregunta: 3329 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Abilene es:";
 choices[36]= new Array();
 choices[36][0] = "el nombre con el que se conoce en la comunidad cient&iacute;fica a Internet2";
 choices[36][1] = "un proyecto de red troncal de altas prestaciones que interconecta GigaPops y que da apoyo al proyecto Internet2 ";
 choices[36][2] = "un nuevo est&aacute;ndar con el que se pretende implantar IPv6 progresivamente sustituyendo a IPv4";
 choices[36][3] = "una entidad de I+D a nivel mundial encargada del desarrollo de tecnolog&iacute;a inal&aacute;mbrica para comunicaciones a nivel interestelar";
 answers[36] = choices[36][1];
 units[36] = "112";
 comments[36] = "Id Pregunta: 3329. ";


//  Id pregunta: 3436 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[37]= new Array();
 choices[37][0] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[37][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[37][2] = "Los nodos PPP se anuncian para obtenci&oacute;n din&aacute;mica de direcci&oacute;n o preguntan a los servidores para uqe se les asigne una direcci&oacute;n";
 choices[37][3] = "El nodo iniciador envia tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 answers[37] = choices[37][3];
 units[37] = "101";
 comments[37] = "Id Pregunta: 3436. ";


//  Id pregunta: 3487 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  En ATM: &quot;la capacidad de transferencia que se caracteriza por la ausencia de caracterizaci&oacute;n del tr&aacute;fico en el contrato de forma que la red transmite la informaci&oacute;n que le ofrece el usuario cuando puede y lo mejor que puede &quot;, se denomina:";
 choices[38]= new Array();
 choices[38][0] = "DBR (Deterministic Bit Rate)";
 choices[38][1] = "SBR (Statistic Bit Rate)";
 choices[38][2] = "ABT (ATM Block Transfer)";
 choices[38][3] = "ABR (Available Bit Rate)";
 answers[38] = choices[38][3];
 units[38] = "109";
 comments[38] = "Id Pregunta: 3487. ";


//  Id pregunta: 3566 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  En un protocolo de nivel de enlace se denomina ventana a:";
 choices[39]= new Array();
 choices[39][0] = "Al env&iacute;o de una trama de control que indica al emisor que la trama de informaci&oacute;n ha llegado correctamente";
 choices[39][1] = "Al envio por el emisor de las tramas de informaci&oacute;n numeradas secuencialmente";
 choices[39][2] = "Al envio de los asentimientos numerados por cada una de las tramas de informaci&oacute;n recibidas";
 choices[39][3] = "Al n&uacute;mero m&aacute;ximo de tramas que en un momento dado pueden estar pendientes de confirmaci&oacute;n";
 answers[39] = choices[39][3];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3566. ";


//  Id pregunta: 3792 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Respecto a los elementos de red de SDH puede decirse que:";
 choices[40]= new Array();
 choices[40][0] = "Un multiplexor integra tributarios en una estructura de orden superior";
 choices[40][1] = "Un ADM integra y extrae tributarios de la se&ntilde;al de l&iacute;nea";
 choices[40][2] = "Un crossconnect interconecta tributarios entre agregados y agregados entre s&iacute;";
 choices[40][3] = "Todas las afirmaciones anteriores son correctas";
 answers[40] = choices[40][3];
 units[40] = "105";
 comments[40] = "Id Pregunta: 3792. ";


//  Id pregunta: 3867 Año de creación de pregunta: 2004-01-01
 questions[41]= "42)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el servidor";
 choices[41]= new Array();
 choices[41][0] = "JavaScript";
 choices[41][1] = "CGI";
 choices[41][2] = "JSP";
 choices[41][3] = "ASP ";
 answers[41] = choices[41][0];
 units[41] = "114";
 comments[41] = "Id Pregunta: 3867. Tanenbaum";


//  Id pregunta: 3970 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  Un registro MX en un servidor DNS, &iquest; a qu&eacute; hace referencia?";
 choices[42]= new Array();
 choices[42][0] = "al servidor DNS principal";
 choices[42][1] = "al servidor web asociado al dominio";
 choices[42][2] = "al servidor de correo asociado al dominio";
 choices[42][3] = "al servidor seguro asociado al dominio";
 answers[42] = choices[42][2];
 units[42] = "106";
 comments[42] = "Id Pregunta: 3970. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 3993 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  En el protocolo SNMPv2, un mensaje PDU GetRequest:";
 choices[43]= new Array();
 choices[43][0] = "Permite respuestas parciales al solicitar el valor de varios objetos.";
 choices[43][1] = "No permite respuestas parciales al solicitar el valor de varios objetos";
 choices[43][2] = "Es emitida por el agente al gestor.";
 choices[43][3] = "Es id&eacute;ntico al mensaje PDU GetBulkRequest.";
 answers[43] = choices[43][0];
 units[43] = "104";
 comments[43] = "Id Pregunta: 3993. ";


//  Id pregunta: 4121 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  Un protocolo usado espec&iacute;ficamente para controlar el backup de datos entre el almacenamiento primario y el centro de respaldo es";
 choices[44]= new Array();
 choices[44][0] = "Common Management Information Protocol (CMIP)";
 choices[44][1] = "Network Data Management Protocol (NDMP)";
 choices[44][2] = "Point-to-Point Protocol (PPP)";
 choices[44][3] = "Bootstrap Protocol (BOOTP)";
 answers[44] = choices[44][1];
 units[44] = "97";
 comments[44] = "Id Pregunta: 4121. ";


//  Id pregunta: 4124 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  La tecnolog&iacute;a que permite varios canales independientes en una &uacute;nica fibra &oacute;ptica mediante el uso de diferentes frecuencias de luz se llama";
 choices[45]= new Array();
 choices[45][0] = "Multiplexado por divisi&oacute;n de frecuencia (FDM)";
 choices[45][1] = "Multiplexado por divisi&oacute;n de tiempo (TDM)";
 choices[45][2] = "Multiplexado por divisi&oacute;n densa de la longitud de onda (DWDM)";
 choices[45][3] = "Multiplexado tradicional (MUX)";
 answers[45] = choices[45][2];
 units[45] = "105";
 comments[45] = "Id Pregunta: 4124. ";


//  Id pregunta: 4215 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  En el modelo de comunicaciones TCP/IP, cuando un cliente inicia una sesi&oacute;n";
 choices[46]= new Array();
 choices[46][0] = "El campo SYN del primer segmento TCP es igual a 0";
 choices[46][1] = "El campo SYN del primer segmento TCP es igual a 1";
 choices[46][2] = "El campo RST del primer segmento TCP es igual a 1";
 choices[46][3] = "El campo PSH del primer segmento TCP es igual a 1";
 answers[46] = choices[46][1];
 units[46] = "100";
 comments[46] = "Id Pregunta: 4215. ";


//  Id pregunta: 4785 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  El modelo espiral WinWin define los siguientes hitos en el proceso:";
 choices[47]= new Array();
 choices[47][0] = "Objetivos del ciclo de vida, arquitectura del ciclo de vida y capacidad operativa iniclal.";
 choices[47][1] = "Alcance del sistema y tama&ntilde;o del sistema.";
 choices[47][2] = "Verificaci&oacute;n de requisitos, verificaci&oacute;n de funcionalidades y verificaci&oacute;n de codigo";
 choices[47][3] = "El modelo espiral WinWin no define hitos en el proceso";
 answers[47] = choices[47][3];
 units[47] = "76";
 comments[47] = "Id Pregunta: 4785. ";


//  Id pregunta: 4869 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  En un sistema basado en el conocimiento, &iquest;qu&eacute; diferencia hay entre el conocimiento inferencial y el conocimiento estrat&eacute;gico o de control?";
 choices[48]= new Array();
 choices[48][0] = "El conocimiento inferencial est&aacute; contenido en la base de hechos y el de control es el que se obtiene mediante inferencia";
 choices[48][1] = "Los dos son equivalentes";
 choices[48][2] = "Los sistemas basados en el conocimiento no utilizan conocimiento estrat&eacute;gico";
 choices[48][3] = "El conocimiento inferencial procede de razonamientos y el estrat&eacute;gico permite decidir qu&eacute; regla se aplica en cada momento";
 answers[48] = choices[48][3];
 units[48] = "63";
 comments[48] = "Id Pregunta: 4869. ";


//  Id pregunta: 5111 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  Seg&uacute;n Magerit V2, la relaci&oacute;n de amenazas a las que est&aacute;n expuestas los activos se llama:";
 choices[49]= new Array();
 choices[49][0] = "Modelo de amenazas";
 choices[49][1] = "Informe de suficiencias.";
 choices[49][2] = "Mapa de riesgos.";
 choices[49][3] = "Listado de vulnerabilidades.";
 answers[49] = choices[49][2];
 units[49] = "32";
 comments[49] = "Id Pregunta: 5111. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5135 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida no permite aprovechar las ventajas de la tecnolog&iacute;a de objetos?";
 choices[50]= new Array();
 choices[50][0] = "Modelo de agrupamiento.";
 choices[50][1] = "Modelo de cascada";
 choices[50][2] = "Modelo fuente";
 choices[50][3] = "Modelo remolino.";
 answers[50] = choices[50][1];
 units[50] = "76";
 comments[50] = "Id Pregunta: 5135. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5198 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de la t&eacute;cnica del prototipado?";
 choices[51]= new Array();
 choices[51][0] = "Hace part&iacute;cipes a los usuarios del desarrollo";
 choices[51][1] = "Facilita la continua revisi&oacute;n del sistema por parte de los usuarios";
 choices[51][2] = "Desemboca en sistemas muy flexibles a cambios posteriores";
 choices[51][3] = "En general, reduce el tiempo de los desarrollos posteriores";
 answers[51] = choices[51][2];
 units[51] = "85";
 comments[51] = "Id Pregunta: 5198. ";


//  Id pregunta: 5239 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  Una de las siguientes caracter&iacute;sticas no es propia de la planificaci&oacute;n estrat&eacute;gica:";
 choices[52]= new Array();
 choices[52][0] = "Su alcance, afecta generalmente a toda la organizaci&oacute;n";
 choices[52][1] = "Detalla los recursos para alcanzar las formulaciones fijadas en los planes estrat&eacute;gicos";
 choices[52][2] = "La alta direcci&oacute;n est&aacute; implicada en la planificaci&oacute;n estrat&eacute;gica";
 choices[52][3] = "Proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo objetivos a largo plazo";
 answers[52] = choices[52][1];
 units[52] = "77";
 comments[52] = "Id Pregunta: 5239. ";


//  Id pregunta: 5512 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  La red de conexi&oacute;n r&aacute;pida inaugurada por la Uni&oacute;n Europea en 2005 para atender la interconexi&oacute;n de investigadores europeos se denomina:";
 choices[53]= new Array();
 choices[53][0] = "TEIN2";
 choices[53][1] = "GEANT2";
 choices[53][2] = "ALICE";
 choices[53][3] = "DANTE";
 answers[53] = choices[53][1];
 units[53] = "103";
 comments[53] = "Id Pregunta: 5512. ";


//  Id pregunta: 5521 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  La fase del procedimiento de digitalizaci&oacute;n en la que se intenta mejorar el aspecto del documento digital utilizando algoritmos matem&aacute;ticos es";
 choices[54]= new Array();
 choices[54][0] = "Adquisici&oacute;n del documento digital o escaneado";
 choices[54][1] = "Procesado del documento digital";
 choices[54][2] = "Almacenamiento y gesti&oacute;n";
 choices[54][3] = "Presentaci&oacute;n del documento digital";
 answers[54] = choices[54][1];
 units[54] = "93";
 comments[54] = "Id Pregunta: 5521. ";


//  Id pregunta: 5590 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Qu&eacute; tipos de tramitaciones se contemplan en el RD legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[55]= new Array();
 choices[55][0] = "Ordinarias, y urgentes";
 choices[55][1] = "Ordinarias, urgentes y de emergencia";
 choices[55][2] = "Ordinarias y con exigencia de tiempo reducido";
 choices[55][3] = "Ordinarias, urgentes y con restricci&oacute;n temporal";
 answers[55] = choices[55][1];
 units[55] = "41";
 comments[55] = "Id Pregunta: 5590. ";


//  Id pregunta: 5602 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indique cu&aacute;l no es un procedimiento o faceta procedural de los slots en marcos";
 choices[56]= new Array();
 choices[56][0] = "if asked";
 choices[56][1] = "if needed";
 choices[56][2] = "if required";
 choices[56][3] = "if added";
 answers[56] = choices[56][0];
 units[56] = "64";
 comments[56] = "Id Pregunta: 5602. ";


//  Id pregunta: 5609 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Los mensajes MPDU en X.400 puedes ser:";
 choices[57]= new Array();
 choices[57][0] = "Sondas, Informes y los propios mensajes";
 choices[57][1] = "Sondas, Notificaciones, mensajes de control y el propio mensaje";
 choices[57][2] = "Notificaciones, Informes de entrega y los propios mensajes";
 choices[57][3] = "Solo los propios mensajes denominados IPM";
 answers[57] = choices[57][0];
 units[57] = "106";
 comments[57] = "Id Pregunta: 5609. ";


//  Id pregunta: 5767 Año de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de ordenaci&oacute;n de alternativas basado en permutaciones?";
 choices[58]= new Array();
 choices[58][0] = "TOPSIS";
 choices[58][1] = "PROMETHEE";
 choices[58][2] = "ELECTRE";
 choices[58][3] = "QUALIFLEX";
 answers[58] = choices[58][3];
 units[58] = "34";
 comments[58] = "Id Pregunta: 5767. ";


//  Id pregunta: 5770 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  El Titulo III de la LOPD se refiere a los &ldquo;derechos de las personas&rdquo;, sin embargo en el TITULO II se recoge otro derecho relacionado con los Principios de la Protecci&oacute;n de datos que es:";
 choices[59]= new Array();
 choices[59][0] = "Oposici&oacute;n";
 choices[59][1] = "Cancelaci&oacute;n";
 choices[59][2] = "Revisi&oacute;n";
 choices[59][3] = "Informaci&oacute;n";
 answers[59] = choices[59][3];
 units[59] = "29";
 comments[59] = "Id Pregunta: 5770. ";


//  Id pregunta: 6044 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de estas herramientas NO est&aacute; relacionada con la gesti&oacute;n de identidades?";
 choices[60]= new Array();
 choices[60][0] = "Oracle Identity Management";
 choices[60][1] = "BMC Remedy Action Request System";
 choices[60][2] = "IBM Tivoli Identity Manager";
 choices[60][3] = "Novell Nsure";
 answers[60] = choices[60][1];
 units[60] = "118";
 comments[60] = "Id Pregunta: 6044. ";


//  Id pregunta: 6081 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  Seleccione la opci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = "SOAP es un protocolo para el intercambio de mensajes SOA";
 choices[61][1] = "Dos aplicaciones que se comunican mediante SOAP deben estar escritas en el mismo lenguaje de programaci&oacute;n.";
 choices[61][2] = "Los mensajes SOAP se pueden transportar, entre otros medios, sobre HTTP, SMTP o palomas mensajeras.";
 choices[61][3] = "Para que dos aplicaciones se comuniquen mediante SOAP siempre ser&aacute; necesario alterar las configuraciones de los posibles firewalls entre ellas.";
 answers[61] = choices[61][2];
 units[61] = "51";
 comments[61] = "Id Pregunta: 6081. GSI 2008";


//  Id pregunta: 6089 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  NO corresponde actualmente a una infraestructura o servicio com&uacute;n de la Administraci&oacute;n General del Estado:";
 choices[62]= new Array();
 choices[62][0] = "El servicio de verificaci&oacute;n de datos de identidad o residencia.";
 choices[62][1] = "La pasarela de pagos telem&aacute;ticos.";
 choices[62][2] = "La recepci&oacute;n de facturas electr&oacute;nicas.";
 choices[62][3] = "Todas las anteriores corresponden a infraestructuras o servicio comunes de la Administraci&oacute;n General del Estado";
 answers[62] = choices[62][3];
 units[62] = "44";
 comments[62] = "Id Pregunta: 6089. TIC A 2009. Modificada 2014";


//  Id pregunta: 6112 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Un diagrama de transici&oacute;n de estados:";
 choices[63]= new Array();
 choices[63][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[63][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[63][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[63][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[63] = choices[63][3];
 units[63] = "82";
 comments[63] = "Id Pregunta: 6112. TIC A 2009";


//  Id pregunta: 6148 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Qu&eacute; tipo de dependencias utiliza el m&eacute;todo ADM?";
 choices[64]= new Array();
 choices[64][0] = "Utiliza dependencias inicio a final y final a inicio.";
 choices[64][1] = "S&oacute;lo utiliza dependencias de inicio a final.";
 choices[64][2] = "S&oacute;lo utiliza dependencias de final a inicio.";
 choices[64][3] = "S&oacute;lo utiliza dependencias final a final.";
 answers[64] = choices[64][2];
 units[64] = "28";
 comments[64] = "Id Pregunta: 6148. ";


//  Id pregunta: 6157 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Qu&eacute; protocolo de la capa de transporte utiliza TFTP?";
 choices[65]= new Array();
 choices[65][0] = "TCP, al igual que FTP";
 choices[65][1] = "TCP";
 choices[65][2] = "UDP";
 choices[65][3] = "UDP, al igual que FTP.";
 answers[65] = choices[65][2];
 units[65] = "112";
 comments[65] = "Id Pregunta: 6157. ";


//  Id pregunta: 6252 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  El algoritmo ID3 es una t&eacute;cnica de miner&iacute;a de datos que se clasifica en el grupo de:";
 choices[66]= new Array();
 choices[66][0] = "Los m&oacute;delos estad&iacute;sticos";
 choices[66][1] = "Agrupamiento";
 choices[66][2] = "Los &aacute;rboles de decisi&oacute;n";
 choices[66][3] = "Las redes neuronales";
 answers[66] = choices[66][2];
 units[66] = "64";
 comments[66] = "Id Pregunta: 6252. TICB-2009, bloque desarrollo";


//  Id pregunta: 6386 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[67]= new Array();
 choices[67][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[67][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[67][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[67][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 6386. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6398 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  La ley 59/2003 de firma electr&oacute;nica, regula:";
 choices[68]= new Array();
 choices[68][0] = "La firma electr&oacute;nica";
 choices[68][1] = "La prestaci&oacute;n de servicios de certificaci&oacute;n";
 choices[68][2] = "La eficacia de la firma electr&oacute;nica";
 choices[68][3] = "Todas las anteriores son correctas.";
 answers[68] = choices[68][3];
 units[68] = "30";
 comments[68] = "Id Pregunta: 6398. Art&iacute;culo 1 Ley 59/2003";


//  Id pregunta: 6480 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Qu&eacute; protocolo define las VLAN (Virtual LAN)?";
 choices[69]= new Array();
 choices[69][0] = "RFC 1032";
 choices[69][1] = "IEEE 802.3u";
 choices[69][2] = "IEEE 802.1q";
 choices[69][3] = "IEEE 802.11";
 answers[69] = choices[69][2];
 units[69] = "101";
 comments[69] = "Id Pregunta: 6480. Castilla La Mancha 2009";


//  Id pregunta: 7350 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  Alfresco es un software de c&oacute;digo abierto de:";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n de contenido empresarial";
 choices[70][1] = "Dise&ntilde;o gr&aacute;fico";
 choices[70][2] = "Base de Datos";
 choices[70][3] = "Cuadro de Mando";
 answers[70] = choices[70][0];
 units[70] = "95";
 comments[70] = "Id Pregunta: 7350. ";


//  Id pregunta: 7920 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   De entre las t&eacute;cnicas de compresi&oacute;n de im&aacute;genes digitales por codificaci&oacute;n predictiva en las que se elimina la redundancia entre p&iacute;xeles consecutivos, aquella que forma una predicci&oacute;n del p&iacute;xel a codificar en funci&oacute;n de los p&iacute;xeles ya codificados y guarda el error de predicci&oacute;n cuantificado, recibe el nombre de:";
 choices[71]= new Array();
 choices[71][0] = " Dithering.";
 choices[71][1] = " RLE (Run Length Encoding).";
 choices[71][2] = " Bit Plane.";
 choices[71][3] = " DPCM (Differential Pulse Code Modulation).";
 answers[71] = choices[71][3];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7920. Map 2006";


//  Id pregunta: 7927 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo de cifrado DES (Data Encryption Standard)?";
 choices[72]= new Array();
 choices[72][0] = " Modo ECB (Electronic Code Book Mode).";
 choices[72][1] = " Modo CFB (Cipher Feedback Mode).";
 choices[72][2] = " Modo BBM (Bit Block Mode).";
 choices[72][3] = " Modo CBC (Cipher Block Chaining Mode).";
 answers[72] = choices[72][2];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7927. Map 2006";


//  Id pregunta: 7948 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)   &iquest;Cu&aacute;l de los siguientes NO es un diagrama UML (Unified Modeling Language)?";
 choices[73]= new Array();
 choices[73][0] = " Diagrama de actividades.";
 choices[73][1] = " Diagrama de clases.";
 choices[73][2] = " Diagrama de secuencia.";
 choices[73][3] = " Diagrama de frecuencia.";
 answers[73] = choices[73][3];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7948. Map 2006";


//  Id pregunta: 7950 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)   &iquest;Cu&aacute;l de las siguientes afirmaciones relacionadas con Dublin Core NO es cierta?";
 choices[74]= new Array();
 choices[74][0] = " El conjunto de sus elementos est&aacute; definido en el Est&aacute;ndar Z39.85001 de la NISO (National Information Standards Organization).";
 choices[74][1] = " Los metadatos Dublin Core se almacenan frecuentemente en la cabecera HEAD de un documento HTML (Hypertext Markup Language).";
 choices[74][2] = " Su nivel b&aacute;sico contiene 15 elementos sobre metadatos.";
 choices[74][3] = " Es una iniciativa de la W3C (World Wide Web Consortium).";
 answers[74] = choices[74][3];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7950. Map 2006";


//  Id pregunta: 7984 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)   Seg&uacute;n la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones, &iquest;cada cu&aacute;nto tiempo, como m&iacute;nimo, la Comisi&oacute;n del Mercado de las Telecomunicaciones llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos?";
 choices[75]= new Array();
 choices[75][0] = " Cada a&ntilde;o.";
 choices[75][1] = " Cada dos a&ntilde;os.";
 choices[75][2] = " Cada cuatro a&ntilde;os.";
 choices[75][3] = " Cada seis a&ntilde;os.";
 answers[75] = choices[75][1];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 7984. Map 2007";


//  Id pregunta: 8023 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)   En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivel que realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el:";
 choices[76]= new Array();
 choices[76][0] = " Nivel 2.";
 choices[76][1] = " Nivel 3.";
 choices[76][2] = " Nivel 4.";
 choices[76][3] = " Nivel 5.";
 answers[76] = choices[76][1];
 units[76] = "NULL";
 comments[76] = "Id Pregunta: 8023. Map 2007";


//  Id pregunta: 8211 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  En la aplicaci&oacute;n de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de asignaci&oacute;n de pesos a criterios que prima los criterios que tienen mayor poder de discriminaci&oacute;n entre las alternativas, se denomina:";
 choices[77]= new Array();
 choices[77][0] = "M&eacute;todo Delphi.";
 choices[77][1] = "M&eacute;todo de las Utilidades Relativas.";
 choices[77][2] = "M&eacute;todo de Saaty.";
 choices[77][3] = "M&eacute;todo de la entrop&iacute;a.";
 answers[77] = choices[77][3];
 units[77] = "34";
 comments[77] = "Id Pregunta: 8211. Examen TIC A1 2010";


//  Id pregunta: 8271 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  La familia de WINDOWS SERVER 2003 soporta clusters de servidor de hasta:";
 choices[78]= new Array();
 choices[78][0] = "16 nodos.";
 choices[78][1] = "4 nodos.";
 choices[78][2] = "8 nodos.";
 choices[78][3] = "32 nodos.";
 answers[78] = choices[78][2];
 units[78] = "56";
 comments[78] = "Id Pregunta: 8271. Examen TIC A1 2010";


//  Id pregunta: 8353 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[79]= new Array();
 choices[79][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[79][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[79][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[79][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[79] = choices[79][0];
 units[79] = "59,115";
 comments[79] = "Id Pregunta: 8353. Examen TIC A2 2010";


//  Id pregunta: 8386 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos es una prueba de caja blanca?";
 choices[80]= new Array();
 choices[80][0] = "Prueba de la tabla ortogonal.";
 choices[80][1] = "Partici&oacute;n equivalente.";
 choices[80][2] = "M&eacute;todos de prueba basados en grafos.";
 choices[80][3] = "Prueba del camino b&aacute;sico.";
 answers[80] = choices[80][3];
 units[80] = "91";
 comments[80] = "Id Pregunta: 8386. Examen TIC A2 2010";


//  Id pregunta: 8616 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo, se denomina:";
 choices[81]= new Array();
 choices[81][0] = "Mantenimiento adaptativo";
 choices[81][1] = "Mantenimiento preventivo";
 choices[81][2] = "Mantenimiento correctivo";
 choices[81][3] = "Mantenimiento evolutivo";
 answers[81] = choices[81][1];
 units[81] = "86";
 comments[81] = "Id Pregunta: 8616. Examen TIC A2 2010 interna";


//  Id pregunta: 8945 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[82]= new Array();
 choices[82][0] = "Enfoque de soluciones multilaterales";
 choices[82][1] = "Utilizaci&oacute;n de la Red SARA como Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas";
 choices[82][2] = "Interoperabilidad sem&aacute;ntica";
 choices[82][3] = "Ninguno de los anteriores";
 answers[82] = choices[82][0];
 units[82] = "43";
 comments[82] = "Id Pregunta: 8945. ";


//  Id pregunta: 9099 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;De los siguientes cual no forma parte del ciclo de vida de los derechos digitales?";
 choices[83]= new Array();
 choices[83][0] = "Empaquetado.";
 choices[83][1] = "Envio.";
 choices[83][2] = "Protecci&oacute;n y venta.";
 choices[83][3] = "Consumo.";
 answers[83] = choices[83][1];
 units[83] = "37";
 comments[83] = "Id Pregunta: 9099. ";


//  Id pregunta: 9191 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[84]= new Array();
 choices[84][0] = "Estar documentado correctamente";
 choices[84][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[84][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[84][3] = "Ser original";
 answers[84] = choices[84][3];
 units[84] = "36";
 comments[84] = "Id Pregunta: 9191. ";


//  Id pregunta: 9223 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  La replicaci&oacute;n continua de datos (o copia en tiempo real)";
 choices[85]= new Array();
 choices[85][0] = "Es un sistema mucho m&aacute;s ventajoso que la replicaci&oacute;n discreta porque permite recuperar la informaci&oacute;n existente en cualquier momento del tiempo de forma mucho m&aacute;s r&aacute;pida";
 choices[85][1] = "Es un sistema mucho menos ventajoso que la replicaci&oacute;n discreta o backups porque requiere mucha m&aacute;s capacidad de almacenamiento";
 choices[85][2] = "Puede ser s&iacute;ncrona o as&iacute;ncrona. En el segundo caso es equivalente a replicaci&oacute;n discreta.";
 choices[85][3] = "No sirve por s&iacute; misma para garantizar la integridad de la informaci&oacute;n frente a determinadas situaciones";
 answers[85] = choices[85][3];
 units[85] = "48";
 comments[85] = "Id Pregunta: 9223. Examen TIC-A1 2011";


//  Id pregunta: 9245 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;C&oacute;mo surgi&oacute; Windows?";
 choices[86]= new Array();
 choices[86][0] = "En la interfaz de usuario de Apple Lisa, precursora de Apple Macintosh.";
 choices[86][1] = "Fue una interfaz gr&aacute;fica para MS-DOS";
 choices[86][2] = "Windows 1.0 sali&oacute; al mercado en 1985.";
 choices[86][3] = "Todas son correctas.";
 answers[86] = choices[86][3];
 units[86] = "56";
 comments[86] = "Id Pregunta: 9245. ";


//  Id pregunta: 9287 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;Qu&eacute; es SOROLLA?";
 choices[87]= new Array();
 choices[87][0] = "Un sistema inform&aacute;tico de apoyo a la gesti&oacute;n econ&oacute;mica de los Centros Gestores del Gasto, cuya titularidad corresponde a la IGAE.";
 choices[87][1] = "Una aplicaci&oacute;n desarrollada por la Direcci&oacute;n General de Modernizaci&oacute;n e Impulso de la Administraci&oacute;n Electr&oacute;nica para facilitar la contrataci&oacute;n electr&oacute;nica. ";
 choices[87][2] = "El SW de subastas electr&oacute;nicas m&aacute;s usado en la Administraci&oacute;n espa&ntilde;ola. ";
 choices[87][3] = "Ninguna de las anteriores.";
 answers[87] = choices[87][0];
 units[87] = "41";
 comments[87] = "Id Pregunta: 9287. ";


//  Id pregunta: 9309 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  &iquest;Cu&aacute;ndo es necesario disponer de un control compensatorio?";
 choices[88]= new Array();
 choices[88][0] = "Cuando no est&eacute; previsto un control.";
 choices[88][1] = "Cuando el coste de un control lo haga inabordable.";
 choices[88][2] = "Cuando el control no est&eacute; efectivamente implantado o falle su aplicaci&oacute;n.";
 choices[88][3] = "Todas las anteriores son ciertas.";
 answers[88] = choices[88][3];
 units[88] = "31";
 comments[88] = "Id Pregunta: 9309. ";


//  Id pregunta: 9373 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  El protocolo de nivel 2 utilizado en una l&iacute;nea punto a punto con Jerarqu&iacute;a Digital S&iacute;ncrona es:";
 choices[89]= new Array();
 choices[89][0] = "PPP";
 choices[89][1] = "LAPB";
 choices[89][2] = "L2TP";
 choices[89][3] = "L2F";
 answers[89] = choices[89][0];
 units[89] = "101";
 comments[89] = "Id Pregunta: 9373. ";


//  Id pregunta: 9395 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Se&ntilde;ale la incorrecta en relaci&oacute;n con HSDPA";
 choices[90]= new Array();
 choices[90][0] = "Utiliza la t&eacute;cnica de HARQ (Hybrid Automatica Repeat Request)";
 choices[90][1] = "Hace uso de una modulaci&oacute;n adaptativa, que cambia seg&uacute;n las condiciones del canal.";
 choices[90][2] = "Existen diferentes versiones de HSDPA que proporcionan diferentes velocidades.";
 choices[90][3] = "Mediante Fast-Packet Scheduling, se asignan espacios de tiempo fijos, por prioridades, haciendo que los usuarios se turnen para que tengan un ancho de banda tambi&eacute;n fijo para la descarga de datos.";
 answers[90] = choices[90][3];
 units[90] = "108";
 comments[90] = "Id Pregunta: 9395. ";


//  Id pregunta: 9417 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  Una clasificaci&oacute;n t&iacute;pica de los modelos de estimaci&oacute;n software es:";
 choices[91]= new Array();
 choices[91][0] = "Basados en Puntos de Funci&oacute;n, multivariable est&aacute;ticos y multivariable din&aacute;micos";
 choices[91][1] = "Con base hist&oacute;rica, con base estad&iacute;stica, con base te&oacute;rica, compuestos y basados en est&aacute;ndares";
 choices[91][2] = "T&eacute;cnicas de Delphi, Modelos exponenciales, Modelo de Putnam y modelos COCOMO";
 choices[91][3] = "Ninguno de los anteriores";
 answers[91] = choices[91][1];
 units[91] = "89";
 comments[91] = "Id Pregunta: 9417. ";


//  Id pregunta: 9500 Año de creación de pregunta: 2013-01-01
 questions[92]= "93)  Indica la afirmaci&oacute;n verdadera con respecto a los controles ActiveX:";
 choices[92]= new Array();
 choices[92][0] = "Permiten que los componentes software interact&uacute;en entre s&iacute; en un entorno de red, independientemente del lenguaje en el que han sido programados";
 choices[92][1] = "Se pueden escribir en Java, C++, VB, etc";
 choices[92][2] = "Internet Explorer soporta ActiveX de forma nativa";
 choices[92][3] = "Todas las anteriores son ciertas";
 answers[92] = choices[92][3];
 units[92] = "114";
 comments[92] = "Id Pregunta: 9500. ";


//  Id pregunta: 9612 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Qu&eacute; es una vista materializada?";
 choices[93]= new Array();
 choices[93][0] = "El resultado de una consulta de la base de datos almacenado en el disco duro";
 choices[93][1] = "El resultado de una consulta de la base de datos almacenado en una tabla cach&eacute;";
 choices[93][2] = "El resultado de una consulta de la base de datos realizada mediante procedimientos almacenados";
 choices[93][3] = "El resultado de una operaci&oacute;n de &ldquo;triggers&rdquo;";
 answers[93] = choices[93][1];
 units[93] = "58";
 comments[93] = "Id Pregunta: 9612. ";


//  Id pregunta: 9748 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[94]= new Array();
 choices[94][0] = "Alternativas textuales.";
 choices[94][1] = "Distinguible.";
 choices[94][2] = "Predecible.";
 choices[94][3] = "Compatible.";
 answers[94] = choices[94][2];
 units[94] = "39";
 comments[94] = "Id Pregunta: 9748. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10247 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  Pedro crea una librer&iacute;a (LibPeter) y la publica bajo licencia LGPL. FooCorp distribuye una versi&oacute;n modificada de la misma junto con su software propietario. &iquest;Cu&aacute;l de las siguientes no es una obligaci&oacute;n de FooCorp?";
 choices[95]= new Array();
 choices[95][0] = "FooCorp debe proveer un mecanismo para que su software propietario pueda enlazar con nuevas versiones de LibPeter";
 choices[95][1] = "FooCorp debe proveer el c&oacute;digo fuente completo de la versi&oacute;n modificada de LibPeter";
 choices[95][2] = "FooCorp debe comunicar todas sus modificaciones a LibPeter";
 choices[95][3] = "FooCorp debe publicar el c&oacute;digo fuente de su software propietario";
 answers[95] = choices[95][3];
 units[95] = "61";
 comments[95] = "Id Pregunta: 10247. ";


//  Id pregunta: 10275 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Los agentes inteligentes, seg&uacute;n su capacidad para resolver problemas, pueden ser:";
 choices[96]= new Array();
 choices[96][0] = "Reactivos";
 choices[96][1] = "Predictivos";
 choices[96][2] = "Ambas";
 choices[96][3] = "Ninguna";
 answers[96] = choices[96][0];
 units[96] = "63";
 comments[96] = "Id Pregunta: 10275. ";


//  Id pregunta: 10348 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;C&oacute;mo se llama la organizaci&oacute;n que desarrolla est&aacute;ndares abiertos para la industria de la telefon&iacute;a m&oacute;vil?";
 choices[97]= new Array();
 choices[97][0] = "BSA (Business  Software Alliance)";
 choices[97][1] = "OpenMG (Open Mobile Group)";
 choices[97][2] = "OMA (Open Mobile Alliance)";
 choices[97][3] = "The Open Group";
 answers[97] = choices[97][2];
 units[97] = "37";
 comments[97] = "Id Pregunta: 10348. La OMA est&aacute; integrada, entre otros, por operadores de telefon&iacute;a m&oacute;vil, y provedores de aplicaciones y contenidos para m&oacute;viles";


//  Id pregunta: 10368 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  La contrataci&oacute;n de un proyecto de tecnolog&iacute;as de la informaci&oacute;n en un ministerio se ha realizado incluyendo un Acuerdo de Nivel de Servicio con una fecha cerrada de entrega de los trabajos. El contratista se va a demorar por problemas con sus recursos humanos asignados al proyecto. El Jefe de Proyecto debe:";
 choices[98]= new Array();
 choices[98][0] = "Proporcionar los recursos humanos, reclut&aacute;ndolos si es preciso del personal del ministerio, que necesita el contratista para que acabe a tiempo el proyecto.";
 choices[98][1] = "Informar a los interesados del proyecto de la demora del proyecto y el sobrecoste que tendr&aacute; el mismo sobre el precio contratado.";
 choices[98][2] = "Disponer de m&aacute;s fondos para pagar al contratista a fin de que acabe antes el proyecto";
 choices[98][3] = "Informar a las partes interesadas del proyecto de la demora del mismo por causa del contratista para la gesti&oacute;n del riesgo asociado, y a los responsables del expediente de contrataci&oacute;n de la penalizaci&oacute;n a aplicar al contratista por no finalizar en tiempo.";
 answers[98] = choices[98][3];
 units[98] = "28";
 comments[98] = "Id Pregunta: 10368. ";


//  Id pregunta: 10530 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Seleccione la afirmaci&oacute;n correcta:";
 choices[99]= new Array();
 choices[99][0] = "los buses paralelos permiten enviar mayor cantidad de informaci&oacute;n por unidad de tiempo que los buses serie";
 choices[99][1] = "el bus MCA (Micro Channel Architecture) empleado en los IBM PS/2 ten&iacute;a un ancho de palabra m&aacute;ximo de 16 bits";
 choices[99][2] = "los buses paralelos presentan una limitaci&oacute;n de velocidad relacionada con la variaci&oacute;n de retardo o jitter entre los diferentes bits de su ancho de palabra";
 choices[99][3] = "el bus PCI es un bus paralelo pero sus evoluciones posteriores, PCI-X y PCIe son buses serie";
 answers[99] = choices[99][2];
 units[99] = "46";
 comments[99] = "Id Pregunta: 10530. ";


