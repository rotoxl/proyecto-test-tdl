/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 85 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; significa la ley de Pareto del 80 / 20?:";
 choices[0]= new Array();
 choices[0][0] = "Con el 20 % del esfuerzo se resuelven el 80 % de los problemas";
 choices[0][1] = "El 80 % de los problemas son originados por el 20 % de la plantilla";
 choices[0][2] = "Con el 80 % del esfuerzo se resuelve el 20 % de los problemas, los m&aacute;s graves";
 choices[0][3] = "El 20 % de los problemas se resuelven autom&aacute;ticamente resolviendo primero el 80 % de ellos";
 answers[0] = choices[0][0];
 units[0] = "25";
 comments[0] = "Id Pregunta: 85. ";


//  Id pregunta: 187 Año de creación de pregunta: 2004-01-01
 questions[1]= "2)  Cu&aacute;l de las siguientes no es una funci&oacute;n del auditor de Sistemas de Informaci&oacute;n";
 choices[1]= new Array();
 choices[1][0] = "An&aacute;lisis de requisitos y especificaci&oacute;n funcional";
 choices[1][1] = "Evaluaci&oacute;n de los planes de implantaci&oacute;n de sistemas y mejoras de los existentes.";
 choices[1][2] = "Evaluaci&oacute;n de riesgos";
 choices[1][3] = "Evaluaci&oacute;n de controles en los sistemas de informaci&oacute;n";
 answers[1] = choices[1][0];
 units[1] = "31,32,33";
 comments[1] = "Id Pregunta: 187. Similar a examen TIC SS A 2003";


//  Id pregunta: 198 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una fuente principal para que una Organizaci&oacute;n identifique sus necesidades de seguiridad f&iacute;sica en el &aacute;rea de sistemas de informaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Los requisitos legales, estatutarios y contractuales a los que est&eacute; obligada la Organizaci&oacute;n";
 choices[2][1] = "Los principios, objetivos y requisitos para el tratamiento de la informaci&oacute;n que la Organizaci&oacute;n ha desarrollado para soportar sus operaciones";
 choices[2][2] = "El nivel de madurez en la gesti&oacute;n de la seguirdad f&iacute;sica, medido de acuerdo con el Computer Maturity Model";
 choices[2][3] = "La valoraci&oacute;n de los riesgos de la Organizaci&oacute;n";
 answers[2] = choices[2][2];
 units[2] = "33";
 comments[2] = "Id Pregunta: 198. Examen TIC MAP B 2004";


//  Id pregunta: 208 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En general la portabilidad de aplicaciones no exige:";
 choices[3]= new Array();
 choices[3][0] = "Utilizaci&oacute;n de lenguajes de programaci&oacute;n estandarizados";
 choices[3][1] = "Limitaci&oacute;n de las llamadas al S.O. desde el marco de una API estandarizada";
 choices[3][2] = "Limitaci&oacute;n de la interacci&oacute;n directa entre los programas y los componentes f&iacute;sicos";
 choices[3][3] = "Utilizaci&oacute;n de microprocesadores de similares caracter&iacute;sticas";
 answers[3] = choices[3][3];
 units[3] = "40";
 comments[3] = "Id Pregunta: 208. ";


//  Id pregunta: 211 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  En la dimensi&oacute;n horizontal de un sistema de informaci&oacute;n, dentro de cada nivel las funciones se dividen en:";
 choices[4]= new Array();
 choices[4][0] = "Aplicaciones y procedimientos";
 choices[4][1] = "Aplicaciones y tareas";
 choices[4][2] = "Aplicaciones o procedimientos";
 choices[4][3] = "Aplicaciones o tareas";
 answers[4] = choices[4][2];
 units[4] = "21";
 comments[4] = "Id Pregunta: 211. ";


//  Id pregunta: 272 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Indique cu&aacute;l de las siguientes afirmaciones se aplica a la gesti&oacute;n de incidencias y aver&iacute;as:";
 choices[5]= new Array();
 choices[5][0] = "Las herramientas de gesti&oacute;n de incidencias deben estar integradas con el inventario";
 choices[5][1] = "La eficiencia del sistema es funci&oacute;n directa del n&uacute;mero de terminales telef&oacute;nicos";
 choices[5][2] = "Las llamadas de aver&iacute;as deben encaminarse autom&aacute;ticamente al suministrador";
 choices[5][3] = "Los operadores deben ser expertos en mantenimiento hardware";
 answers[5] = choices[5][0];
 units[5] = "32";
 comments[5] = "Id Pregunta: 272. ";


//  Id pregunta: 459 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Si un grupo de personas constituyen una asociaci&oacute;n (por ejemplo de antiguos alumnos, o de padres de alumnos) y recaban informaci&oacute;n de car&aacute;cter personal de sus miembros, almacen&aacute;ndola en un fichero:";
 choices[6]= new Array();
 choices[6][0] = "S&oacute;lo deber&aacute;n registrar el fichero en la Agencia de Protecci&oacute;n de Datos si el contenido de &eacute;stos es lo suficientemente sensible";
 choices[6][1] = "Seg&uacute;n la finalidad para la que se use y seg&uacute;n el tama&ntilde;o de dicho fichero podr&aacute;n estar exentos de de registrar el fichero";
 choices[6][2] = "Tienen que registrar el fichero en la Agencia de Protecci&oacute;n de Datos";
 choices[6][3] = "Deber&iacute;an registrar el fichero, pero dado que la Agencia de Protecci&oacute;n de Datos s&oacute;lo se ocupa en la pr&aacute;ctica de grandes casos de fraude  pueden pasar sin ser sancionados sin ning&uacute;n tipo de problema";
 answers[6] = choices[6][2];
 units[6] = "29";
 comments[6] = "Id Pregunta: 459. ";


//  Id pregunta: 531 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Qu&eacute; tipo de centro de respaldo ante desastres ofrece la respuesta m&aacute;s inmediata?";
 choices[7]= new Array();
 choices[7][0] = "Hot site";
 choices[7][1] = "Warm site";
 choices[7][2] = "Instant site";
 choices[7][3] = "Cold site";
 answers[7] = choices[7][0];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 531. ";


//  Id pregunta: 554 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  Una de las siguientes afirmaciones referentes a la normalizaci&oacute;n es falsa:";
 choices[8]= new Array();
 choices[8][0] = "Las normas espa&ntilde;olas se conocen por las siglas UNE (Una Norma Espa&ntilde;ola).";
 choices[8][1] = "Las normas europeas comienzan por las siglas EN.";
 choices[8][2] = "Las normas previas son las que se emiten cuando se considera que es prematuro promulgar formalmente una norma EN. Su codificaci&oacute;n comienza por las siglas ENV.";
 choices[8][3] = "AENOR es uno de los organismos oficiales normalizadores espa&ntilde;oles.";
 answers[8] = choices[8][3];
 units[8] = "42";
 comments[8] = "Id Pregunta: 554. ";


//  Id pregunta: 555 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  Un fichero automatizado con  (DNI, Nombre, Apellidos, Domicilio, Titulaci&oacute;n Acad&eacute;mica, Grado y Tipo de Minusval&iacute;a) requiere medidas de tipo:";
 choices[9]= new Array();
 choices[9][0] = "B&aacute;sico";
 choices[9][1] = "Medio";
 choices[9][2] = "Alto";
 choices[9][3] = "Cr&iacute;tico";
 answers[9] = choices[9][2];
 units[9] = "29";
 comments[9] = "Id Pregunta: 555. Junta Andaluc&iacute;a 2002";


//  Id pregunta: 859 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes conceptos no es caracter&iacute;stico de los sistemas expertos?:";
 choices[10]= new Array();
 choices[10][0] = "Base de conocimiento";
 choices[10][1] = "Encadenamiento de reglas";
 choices[10][2] = "Motor de inferencia";
 choices[10][3] = "Proceso algor&iacute;tmico";
 answers[10] = choices[10][3];
 units[10] = "64";
 comments[10] = "Id Pregunta: 859. ";


//  Id pregunta: 921 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es el 'swapping'?:";
 choices[11]= new Array();
 choices[11][0] = "Un algoritmo para planificaci&oacute;n del uso de la CPU";
 choices[11][1] = "Un mecanismo para mover procesos de ejecuci&oacute;n desde/hacia la memoria principal a/desde disco respectivamente";
 choices[11][2] = "Un tipo especial de organizaci&oacute;n de los sistemas de ficheros";
 choices[11][3] = "El tiempo medio necesario para mover un programa desde disco a la memoria principal";
 answers[11] = choices[11][1];
 units[11] = "52";
 comments[11] = "Id Pregunta: 921. ";


//  Id pregunta: 1201 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  JDeveloper es:";
 choices[12]= new Array();
 choices[12][0] = "Un entorno de desarrollo integrado (IDE)";
 choices[12][1] = "Una base de datos";
 choices[12][2] = "Un gestor de contenidos";
 choices[12][3] = "Un gestor de informes";
 answers[12] = choices[12][0];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1201. ";


//  Id pregunta: 1233 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  La modulaci&oacute;n QAM transmite a:";
 choices[13]= new Array();
 choices[13][0] = "1 bit por baudio.";
 choices[13][1] = "4 bits por baudio.";
 choices[13][2] = "2 bits por baudio.";
 choices[13][3] = "Depende de las portadoras utilizadas.";
 answers[13] = choices[13][1];
 units[13] = "107";
 comments[13] = "Id Pregunta: 1233. ";


//  Id pregunta: 1251 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  La visi&oacute;n general que la empresa debe tener de toda la base de datos, corresponde al:";
 choices[14]= new Array();
 choices[14][0] = "Esquema conceptual";
 choices[14][1] = "Exquema externo";
 choices[14][2] = "Esquema interno";
 choices[14][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[14] = choices[14][0];
 units[14] = "57";
 comments[14] = "Id Pregunta: 1251. ";


//  Id pregunta: 1289 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  MPI:";
 choices[15]= new Array();
 choices[15][0] = "Es una librer&iacute;a para programaci&oacute;n distribuida por paso de mensajes";
 choices[15][1] = "Multi Peer Interface es una utilidad P2P que permite utilizar los recursos de los PC de una LAN como si de un servidor centralizado se tratara";
 choices[15][2] = "Permite el intercambio de archivos entre PCs de una misma red";
 choices[15][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[15] = choices[15][0];
 units[15] = "50";
 comments[15] = "Id Pregunta: 1289. JCED - Preparatic XVII";


//  Id pregunta: 1372 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  Sobre el uso que hacen XML y HTML de etiquetas y atributos:";
 choices[16]= new Array();
 choices[16][0] = "HTML y XML especifican lo que significa cada etiqueta y atributo";
 choices[16][1] = "XML usa las etiquetas s&oacute;lo para delimitar segmentos de datos y deja la interpretaci&oacute;n de los datos a la aplicaci&oacute;n que los lee";
 choices[16][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[16][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[16] = choices[16][1];
 units[16] = "69";
 comments[16] = "Id Pregunta: 1372. ";


//  Id pregunta: 1661 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[17]= new Array();
 choices[17][0] = "Uno de los principios de Unix es &quot;Todo es un archivo&quot;";
 choices[17][1] = "El Sistema  Operativo &quot;MULTICS&quot; se caracteriza por la gesti&oacute;n de procesos multiprograma y en tiempo compartido y su arquitectura modular.";
 choices[17][2] = "El Sistema Opreativo Unix se caracteriza, junto con MINIX, por la gesti&oacute;n de procesos multiprogramada y su arquitectura modular.";
 choices[17][3] = "El Sistema Operativo Unix se caracteriza por un sistema de gesti&oacute;n de procesos multiprogramada y en tiempo compartido y por su arquitectura monol&iacute;tica.";
 answers[17] = choices[17][3];
 units[17] = "53";
 comments[17] = "Id Pregunta: 1661. MAP-B 2003";


//  Id pregunta: 1699 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l ser&iacute;a una caracter&iacute;stica esencial a la hora de valorar un equipo mini?";
 choices[18]= new Array();
 choices[18][0] = "Disponer de microprocesadores RISCs.";
 choices[18][1] = "La modularidad.";
 choices[18][2] = "Disponer de sistemas de almacenamiento basados en RAID.";
 choices[18][3] = "La posibilidad de interconexi&oacute;n al host.";
 answers[18] = choices[18][1];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1699. ";


//  Id pregunta: 1726 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  Las partes del sistema operativo que acceden directamente a los recursos hardware";
 choices[19]= new Array();
 choices[19][0] = "Se ejecutan en modo usuario";
 choices[19][1] = "Se desarrollan por los usuarios";
 choices[19][2] = "Se desarrollan de forma gen&eacute;rica";
 choices[19][3] = "Se ejcutan en modo protegido";
 answers[19] = choices[19][3];
 units[19] = "54";
 comments[19] = "Id Pregunta: 1726. ";


//  Id pregunta: 1899 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  En un centro de llamadas, gestionar las necesidades del usuario la primera vez que llama, evitando la necesidad de una segunda llamada";
 choices[20]= new Array();
 choices[20][0] = "Soporte electr&oacute;nico";
 choices[20][1] = "Solicitud autom&aacute;tica de repetici&oacute;n (ARQ)";
 choices[20][2] = "Calidad de servicio";
 choices[20][3] = "Resoluci&oacute;n de primera llamada";
 answers[20] = choices[20][3];
 units[20] = "26";
 comments[20] = "Id Pregunta: 1899. ";


//  Id pregunta: 2058 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  En METRICA V3 y otras metodolog&iacute;as de desarrollo, &iquest;qu&eacute; se entiende por Gesti&oacute;n de la Configuraci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "La planificaci&oacute;n, seguimiento y control de los recursos humanos y materiales que intervienen en el desarrollo del Sistema de Informaci&oacute;n.";
 choices[21][1] = "La administraci&oacute;n de los recursos f&iacute;sicos que soportan la infraestructura de construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[21][2] = "El mantenimiento de la integridad de los productos y objetos obenidos durante el desarrollo de los sistemas de informaci&oacute;n, controlando las versiones y los cambios de estos.";
 choices[21][3] = "El marco com&uacute;n de medidas orientadas al aseguramiento de la calidad aplicable al Proyecto";
 answers[21] = choices[21][2];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2058. Pregunta Junta Andalucia - A";


//  Id pregunta: 2120 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes actividades no se engloba, en M&eacute;trica V3, en el proceso &lsquo;An&aacute;lisis del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[22]= new Array();
 choices[22][0] = "An&aacute;lisis de Casos de Uso";
 choices[22][1] = "Elaboraci&oacute;n del Modelo de Procesos";
 choices[22][2] = "Generaci&oacute;n de especificaciones de construcci&oacute;n";
 choices[22][3] = "Especificaci&oacute;n del plan de pruebas";
 answers[22] = choices[22][2];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2120. ";


//  Id pregunta: 2382 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Indicar cu&aacute;l de los siguientes atributos no debe resultar de la descomposici&oacute;n modular del sistema:";
 choices[23]= new Array();
 choices[23][0] = "M&aacute;ximo acoplamiento.";
 choices[23][1] = "Interfaz bien definida.";
 choices[23][2] = "M&aacute;xima capacidad de reutilizaci&oacute;n.";
 choices[23][3] = "Introducci&oacute;n de una jerarqu&iacute;a de modo que los m&oacute;dulos superiores de la misma se sirvan de los inferiores, es decir, requieran de la tarea desarrollada por &eacute;stos, pero nunca al contrario.";
 answers[23] = choices[23][0];
 units[23] = "84";
 comments[23] = "Id Pregunta: 2382. ";


//  Id pregunta: 2462 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)   En programaci&oacute;n orientada a objetos, los objetos act&uacute;an en respuesta a los mensajes que reciben. El mismo mensaje puede originar conductas completamente diferentes al ser recibido por diferentes objetos. Este fen&oacute;meno se conoce como:";
 choices[24]= new Array();
 choices[24][0] = "Herencia";
 choices[24][1] = "Encapsulaci&oacute;n";
 choices[24][2] = "Abstracci&oacute;n";
 choices[24][3] = "Polimorfismo";
 answers[24] = choices[24][3];
 units[24] = "82";
 comments[24] = "Id Pregunta: 2462. ";


//  Id pregunta: 2560 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los robots programados para localizar referencias hipertexto dirigidas a un servidor o un documento en particular son:";
 choices[25]= new Array();
 choices[25][0] = "los spiders o ara&ntilde;as";
 choices[25][1] = "los knowbots";
 choices[25][2] = "los wanderers o vagabundos";
 choices[25][3] = "ninguno de los anteriores";
 answers[25] = choices[25][1];
 units[25] = "96";
 comments[25] = "Id Pregunta: 2560. ";


//  Id pregunta: 2638 Año de creación de pregunta: 2003-01-01
 questions[26]= "27)  El UML ( Unified modeling Language) es un lenguaje que permite modelar construir y documentar los elementos que forman un sistema SW orientado a objetos. Indicar cu&aacute;l entre los siguientes no corresponde a un modelo usado en UML ";
 choices[26]= new Array();
 choices[26][0] = "Diagrama de estructura din&aacute;mica";
 choices[26][1] = "Diagrama de Casos de Uso";
 choices[26][2] = "Diagrama de Secuencia";
 choices[26][3] = "Diagrama de colaboraci&oacute;n";
 answers[26] = choices[26][0];
 units[26] = "86";
 comments[26] = "Id Pregunta: 2638. ";


//  Id pregunta: 2670 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  En im&aacute;genes multiespectrales o multitemporales se emplean las operaciones aritm&eacute;ticas para:";
 choices[27]= new Array();
 choices[27][0] = "Eliminar ruidos.";
 choices[27][1] = "Detectar cambios.";
 choices[27][2] = "Todas las anteriores.";
 choices[27][3] = "Ninguna de las anteriores.";
 answers[27] = choices[27][2];
 units[27] = "93";
 comments[27] = "Id Pregunta: 2670. ";


//  Id pregunta: 2677 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  En un Sistema de Gesti&oacute;n Documental:";
 choices[28]= new Array();
 choices[28][0] = "El escaneado produce una imagen del documento que se almacena en el sistema.";
 choices[28][1] = "Ficheros originariamente en formatos de procesador de texto u hoja de c&aacute;lculo se convierten a imagen, generando una imagen inalterable del documento electr&oacute;nico original.";
 choices[28][2] = "Ficheros gr&aacute;ficos, de audio o video pueden ser tambi&eacute;n importados aun sistema de gesti&oacute;n documental. En estos casos, se mantienen en su formato nativo y para abrirlos se necesita un programa compatible con ese formato.";
 choices[28][3] = "Todas las anteriores son ciertas.";
 answers[28] = choices[28][3];
 units[28] = "95";
 comments[28] = "Id Pregunta: 2677. ";


//  Id pregunta: 2701 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  Rango din&aacute;mico de una imagen es:";
 choices[29]= new Array();
 choices[29][0] = "El tama&ntilde;o de la imagen a escanear en sus dos dimensiones (ancho y alto).";
 choices[29][1] = "El cambio de resoluci&oacute;n de la imagen al ampliar o reducir.";
 choices[29][2] = "El n&uacute;mero m&aacute;ximo de niveles de gris por pixel que ser&iacute;an susceptibles de ser definidos entre el blanco y el negro.";
 choices[29][3] = "Tama&ntilde;o m&aacute;ximo de la imagen producida por los traductores del formato EPS (Postscript) a mapa de bits.";
 answers[29] = choices[29][2];
 units[29] = "93";
 comments[29] = "Id Pregunta: 2701. ";


//  Id pregunta: 2937 Año de creación de pregunta: 2004-01-01
 questions[30]= "31)  La Ley General de Telecomunicaciones 9/2014 establece la creaci&oacute;n de un registro de operadores. &iquest;A qu&eacute; entidad encarga su llevanza?";
 choices[30]= new Array();
 choices[30][0] = "Agencia estatal de radiocomunicaciones";
 choices[30][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[30][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[30][3] = "Ministerio de Ciencia y Tecnolog&iacute;a";
 answers[30] = choices[30][1];
 units[30] = "110";
 comments[30] = "Id Pregunta: 2937. Similar a examen TIC MAP A 2004. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 2967 Año de creación de pregunta: 2004-01-01
 questions[31]= "32)  El sistema cableado del tipo conocido como de Par Trenzado sin Apantallar es:";
 choices[31]= new Array();
 choices[31][0] = "STP";
 choices[31][1] = "UTP";
 choices[31][2] = "FTP";
 choices[31][3] = "OM1";
 answers[31] = choices[31][1];
 units[31] = "99";
 comments[31] = "Id Pregunta: 2967. ";


//  Id pregunta: 3290 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Qu&eacute; es un puente (bridge) en el mundo de las comunicaciones?:";
 choices[32]= new Array();
 choices[32][0] = "Un equipo que enlaza varias redes a nivel 3 de OSI";
 choices[32][1] = "Un equipo que enlaza varias redes a nivel 4 de OSI";
 choices[32][2] = "Un equipo que enlaza varias redes a nivel 5 de OSI";
 choices[32][3] = "Nada de lo anterior  ";
 answers[32] = choices[32][3];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3290. ";


//  Id pregunta: 3310 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Qu&eacute; se entiende por 'modem de cable'?:";
 choices[33]= new Array();
 choices[33][0] = "A un cable inversor utilizado para la conexi&oacute;n entre dos dispositivos por el puerto serie";
 choices[33][1] = "A un cable utilizado para unir dos PCs por el puerto paralelo";
 choices[33][2] = "A un dispositivo que permite la transmisi&oacute;n de datos a alta velocidad a trav&eacute;s de una red de cable";
 choices[33][3] = "A un modem que no necesita fuente de alimentaci&oacute;n y que es del tama&ntilde;o de una 'caja de cerillas' que pr&aacute;cticamente que embutido en un cable";
 answers[33] = choices[33][2];
 units[33] = "105";
 comments[33] = "Id Pregunta: 3310. ";


//  Id pregunta: 3331 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Al fen&oacute;meno que se da en transmisi&oacute;n por fibra &oacute;ptica consistente en que los pulsos &oacute;pticos tienden a expandirse provocando interferencia, con lo que diferentes longitudes de onda viajan a diferentes velocidades, se le denomina:";
 choices[34]= new Array();
 choices[34][0] = "Dispersi&oacute;n de ventana";
 choices[34][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[34][2] = "Atenuaci&oacute;n &oacute;ptica";
 choices[34][3] = "Atenuaci&oacute;n de ventana";
 answers[34] = choices[34][1];
 units[34] = "97";
 comments[34] = "Id Pregunta: 3331. ";


//  Id pregunta: 3335 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  BGP es un protocolo que se usa para:";
 choices[35]= new Array();
 choices[35][0] = "Tratar de encontrar un sistema del cual conocemos el nombre y no la direcci&oacute;n de red en redes OSI (Broadcasting Generation Protocol)";
 choices[35][1] = "Es un protocolo de intercambio de informaci&oacute;n en modo binario entre dos entidades de transporte en el modelo OSI, para que las pasen directamente de modo transparente a la capa de Sesi&oacute;n. (Binary Gateway Protocol)";
 choices[35][2] = "Es un protocolo de enrutamiento o encaminamiento por el que se intercambian informaci&oacute;n los routers en las fronteras de los sistemas aut&oacute;nomos en redes TCP/IP (Border Gateway Protocol)";
 choices[35][3] = "Es un protocolo por el que se convierte a nivel de transporte fragmentos (o TPDUs) de Appletalk a fragmentos TCP (Bellcore Gateway Protocol)";
 answers[35] = choices[35][2];
 units[35] = "102";
 comments[35] = "Id Pregunta: 3335. ";


//  Id pregunta: 3400 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  El PLCP se incorpora como subnivel de:";
 choices[36]= new Array();
 choices[36][0] = "Nivel 2 de 802.11";
 choices[36][1] = "Nivel 1 de 802.11";
 choices[36][2] = "Nivel 1 de 802.3";
 choices[36][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[36] = choices[36][1];
 units[36] = "101,107";
 comments[36] = "Id Pregunta: 3400. ";


//  Id pregunta: 3444 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  El protocolo de comunicaciones denominado HDLC, es un protocolo orientado a:";
 choices[37]= new Array();
 choices[37][0] = "Car&aacute;cter, de modos: ARM, ABM y SRM";
 choices[37][1] = "Bit , de modos: ARM, ABM y SRM";
 choices[37][2] = "Car&aacute;cter, con cadencia secuencial";
 choices[37][3] = "Bit, con cadencia secuencial";
 answers[37] = choices[37][1];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3444. ";


//  Id pregunta: 3538 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  En LMDS las t&eacute;cnicas com&uacute;nmente usadas para la reutilizaci&oacute;n de frecuencias son:";
 choices[38]= new Array();
 choices[38][0] = "Minimizar la direccionalidad de las antenas de las celdas";
 choices[38][1] = "Maximizar el aislamiento entre sectores adyacentes a trav&eacute;s de la polarizaci&oacute;n";
 choices[38][2] = "Aumentar el tama&ntilde;o de celda";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][1];
 units[38] = "108";
 comments[38] = "Id Pregunta: 3538. ";


//  Id pregunta: 3850 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  USB, refir&eacute;ndonos a interfaces, significa:";
 choices[39]= new Array();
 choices[39][0] = "Universal Synchronized Bus, Bus sincronizado universal";
 choices[39][1] = "Unstructured Serial Bits, Bits en serie no estructurados";
 choices[39][2] = "Universal Serial Bus, Bus serie universal";
 choices[39][3] = "Unstructured Synchronized Burst, R&aacute;faga sincronizada y no estructurada";
 answers[39] = choices[39][2];
 units[39] = "48";
 comments[39] = "Id Pregunta: 3850. ";


//  Id pregunta: 3852 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  WLL es:";
 choices[40]= new Array();
 choices[40][0] = "Una DLL para dispositivos wireless";
 choices[40][1] = "Una t&eacute;cnica de dise&ntilde;o de enlaces o links a p&aacute;ginas web";
 choices[40][2] = "Un bucle local inal&aacute;mbrico de abonado en telefon&iacute;a fija";
 choices[40][3] = "Nada de lo anterior";
 answers[40] = choices[40][2];
 units[40] = "103";
 comments[40] = "Id Pregunta: 3852. ";


//  Id pregunta: 3854 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  Con respecto a las l&iacute;neas PLC (POWER LINE COMMUNICATIONS) no es cierto que:";
 choices[41]= new Array();
 choices[41][0] = "Tiene problemas respecto a sus a prestaciones o a la velocidad debido al ruido y microcortes";
 choices[41][1] = "No es necesaria nueva regulaci&oacute;n debido a la que ya existe para las l&iacute;neas de potencia instaladas";
 choices[41][2] = "Requiere colocar amplificadores de desacoplamiento en cada transformador de media/baja tensi&oacute;n porque estos act&uacute;an como filtros para los datos";
 choices[41][3] = "Deben enfrentarse a todas las interferencias y perturbaciones presentes, debido a la amplia proliferaci&oacute;n de electrodom&eacute;sticos y otros dispositivos conectados";
 answers[41] = choices[41][1];
 units[41] = "107";
 comments[41] = "Id Pregunta: 3854. ";


//  Id pregunta: 3876 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes protocolos se usa para se&ntilde;alizaci&oacute;n en VoIP?";
 choices[42]= new Array();
 choices[42][0] = "POTS";
 choices[42][1] = "RSVP";
 choices[42][2] = "DTMF";
 choices[42][3] = "SIP";
 answers[42] = choices[42][3];
 units[42] = "100";
 comments[42] = "Id Pregunta: 3876. ";


//  Id pregunta: 3881 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Cu&aacute;les son las capas que componen la arquitectura WAP?";
 choices[43]= new Array();
 choices[43][0] = "Aplicaci&oacute;n, Sesi&oacute;n, Transacciones y Transporte";
 choices[43][1] = "Aplicaci&oacute;n, Sesi&oacute;n,Presentaci&oacute;n, Transporte, y Red";
 choices[43][2] = "Aplicaci&oacute;n, Sesi&oacute;n, Seguridad y Transporte";
 choices[43][3] = "Ninguna de las opciones anteriores es correcta";
 answers[43] = choices[43][3];
 units[43] = "108";
 comments[43] = "Id Pregunta: 3881. ";


//  Id pregunta: 3963 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  Ordenar los siguientes dispositivos seg&uacute;n nivel OSI a puente b gateway c router d repetidor";
 choices[44]= new Array();
 choices[44][0] = "d a c b ";
 choices[44][1] = "a b c d";
 choices[44][2] = "b c d a";
 choices[44][3] = "b a d c ";
 answers[44] = choices[44][0];
 units[44] = "113";
 comments[44] = "Id Pregunta: 3963. ";


//  Id pregunta: 3972 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  Una de las siguientes afirmaciones no es correcta:";
 choices[45]= new Array();
 choices[45][0] = "El protocolo SIP se utiliza en la red de transporte de una red UMTS";
 choices[45][1] = "H.323 y SIP son protocolos que se utilizan en VoIP (Voz sobre IP)";
 choices[45][2] = "H.323 es un protocolo mucho m&aacute;s sencillo de implementar que SIP";
 choices[45][3] = "Los primeros productos comerciales de VoIP utilizaban H.323";
 answers[45] = choices[45][2];
 units[45] = "109";
 comments[45] = "Id Pregunta: 3972. ";


//  Id pregunta: 3995 Año de creación de pregunta: 2006-01-01
 questions[46]= "47)  En SNMP:";
 choices[46]= new Array();
 choices[46][0] = "El agente env&iacute;a al cliente comandos Get Response";
 choices[46][1] = "El origen de SNMP es SGMP";
 choices[46][2] = "Su arquitectura consiste en agente, objetos y cliente";
 choices[46][3] = "Todas son verdaderas";
 answers[46] = choices[46][3];
 units[46] = "104";
 comments[46] = "Id Pregunta: 3995. ";


//  Id pregunta: 4079 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes puede ser una alternativa a EJB?";
 choices[47]= new Array();
 choices[47][0] = "Hibernate";
 choices[47][1] = "JDBC";
 choices[47][2] = "Ninguna de las anteriores";
 choices[47][3] = "la opci&oacute;n a) y b)";
 answers[47] = choices[47][3];
 units[47] = "116";
 comments[47] = "Id Pregunta: 4079. ";


//  Id pregunta: 4120 Año de creación de pregunta: 2006-01-01
 questions[48]= "49)  El lugar de almacenamiento temporal de las im&aacute;genes descargadas desde una p&aacute;gina Web se llama";
 choices[48]= new Array();
 choices[48][0] = "RAM";
 choices[48][1] = "disco duro";
 choices[48][2] = "cookie";
 choices[48][3] = "cache";
 answers[48] = choices[48][3];
 units[48] = "112";
 comments[48] = "Id Pregunta: 4120. ";


//  Id pregunta: 4196 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  El estandar 802.11i se centra en";
 choices[49]= new Array();
 choices[49][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[49][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[49][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[49][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[49] = choices[49][1];
 units[49] = "107";
 comments[49] = "Id Pregunta: 4196. ";


//  Id pregunta: 4299 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Si est&aacute; utilizando la t&eacute;cnica de despliegue de la funci&oacute;n calidad (DFC) para traducir las necesidades del cliente en requisitos, el an&aacute;lisis de valor:";
 choices[50]= new Array();
 choices[50][0] = "Se emplea para determinar el valor de cada funci&oacute;n requerida por el sistema.";
 choices[50][1] = "Se lleva a cabo para determinar la prioridad relativa de requisitos";
 choices[50][2] = "Sirve para identificar los acontecimientos que el sistema debe producir y consumir.";
 choices[50][3] = "Examina el comportamiento del sistema dentro del contexto de su entorno.";
 answers[50] = choices[50][1];
 units[50] = "78";
 comments[50] = "Id Pregunta: 4299. ";


//  Id pregunta: 4423 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  En relaci&oacute;n con la Ley 59/2003, de firma electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[51]= new Array();
 choices[51][0] = "El prestador de servicios de certificaci&oacute;n ha de ser una persona jur&iacute;dica.";
 choices[51][1] = "Por resoluci&oacute;n administrativa puede suspenderse, pero no extinguirse, la vigencia de los certificados electr&oacute;nicos.";
 choices[51][2] = "Los certificados reconocidos deben incluir necesariamente, entre otros datos, la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que expide el certificado.";
 choices[51][3] = "El DNI electr&oacute;nico acredita electr&oacute;nicamente la identidad personal de su titular, pero no permite la firma electr&oacute;nica de documentos.";
 answers[51] = choices[51][2];
 units[51] = "30";
 comments[51] = "Id Pregunta: 4423. ";


//  Id pregunta: 4455 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Que es el shell de UNIX?";
 choices[52]= new Array();
 choices[52][0] = "Es el equivalente al escritorio en Windows 2003.";
 choices[52][1] = "Es la unidad m&iacute;nima de informaci&oacute;n que se puede almacenar en un sistema de ficheros UNIX.";
 choices[52][2] = "Es un int&eacute;rprete de comandos.";
 choices[52][3] = "Es un protocolo de comunicaci&oacute;n en red propio de UNIX.";
 answers[52] = choices[52][2];
 units[52] = "53";
 comments[52] = "Id Pregunta: 4455. ";


//  Id pregunta: 4579 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  En un entorno CASE integrado es correcto afirmar que";
 choices[53]= new Array();
 choices[53][0] = "para la integraci&oacute;n de las herramientas CASE es imprescindible disponer de un SGBD relacional.";
 choices[53][1] = "la arquitectura es de dos capas, Ia capa de interfaz y la capa de herramientas.";
 choices[53][2] = "el repositorio CASE establece un modelo de datos al que pueden acceder todas las herramientas del entorno.";
 choices[53][3] = "no ofrece ningun beneficio frente a un entorno CASE individual.";
 answers[53] = choices[53][2];
 units[53] = "";
 comments[53] = "Id Pregunta: 4579. ";


//  Id pregunta: 4850 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo de cifrado DES (Data Encryption Standard)?";
 choices[54]= new Array();
 choices[54][0] = "Modo ECB (Electronic Code Book Mode)";
 choices[54][1] = "Modo CFB (Cipher Feedback Mode)";
 choices[54][2] = "Modo BBM (Bit Block Mode)";
 choices[54][3] = "Modo CBC (Cipher Block Chaining Mode)";
 answers[54] = choices[54][2];
 units[54] = "72";
 comments[54] = "Id Pregunta: 4850. ";


//  Id pregunta: 5074 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[55]= new Array();
 choices[55][0] = "El W3C tiene una sede en Espa&ntilde;a";
 choices[55][1] = "W3C es un organismo estadounidense";
 choices[55][2] = "El Ministerio de Administraciones P&uacute;blicas es miembro del W3C";
 choices[55][3] = "W3C ha desarrollado mecanismos para evaluar el nivel de accesibilidad de los sitios Web";
 answers[55] = choices[55][1];
 units[55] = "39";
 comments[55] = "Id Pregunta: 5074. Examen TIC A 2007";


//  Id pregunta: 5146 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  Seg&uacute;n M&eacute;trica V3, &iquest;Cu&aacute;l de los siguientes procesos NO est&aacute; incluido en el proceso de Desarrollo de Sistemas de Informaci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[56][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[56][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[56][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[56] = choices[56][2];
 units[56] = "86";
 comments[56] = "Id Pregunta: 5146. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5414 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vista de explotaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[57][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[57][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[57][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[57] = choices[57][1];
 units[57] = "88";
 comments[57] = "Id Pregunta: 5414. Castilla y Le&oacute;n";


//  Id pregunta: 5423 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;A qu&eacute; se refiere EFFORTS?";
 choices[58]= new Array();
 choices[58][0] = "Proyecto dirigido a las administraciones europeas, cuyo objetivo es la mejora de su eficiencia mediante la adopci&oacute;n de nuevas tecnolog&iacute;as";
 choices[58][1] = "Proyecto europeo para la extensi&oacute;n de la red de banda ancha";
 choices[58][2] = "Proyecto europeo para aunar pol&iacute;ticas de contrataci&oacute;n de personal";
 choices[58][3] = "Proyecto europeo para aumentar la eficiencia en el uso de las computadoras en el &aacute;mbito de las administraciones p&uacute;blicas europeas";
 answers[58] = choices[58][3];
 units[58] = "41";
 comments[58] = "Id Pregunta: 5423. Castilla y Le&oacute;n";


//  Id pregunta: 5833 Año de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los dispositivos de red -citados seguidamente- brinda internetworking y control de broadcast?";
 choices[59]= new Array();
 choices[59][0] = "Hub";
 choices[59][1] = "Puente";
 choices[59][2] = "NIC (Network Interface Card)";
 choices[59][3] = "Router";
 answers[59] = choices[59][3];
 units[59] = "102";
 comments[59] = "Id Pregunta: 5833. MAP 2008 A1";


//  Id pregunta: 6043 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  El proyecto Fidelity, de gesti&oacute;n de identidad federado en &aacute;mbito europeo, est&aacute; basado en est&aacute;ndares de:";
 choices[60]= new Array();
 choices[60][0] = "W3C";
 choices[60][1] = "IEEE";
 choices[60][2] = "CEN";
 choices[60][3] = "Liberty Alliance";
 answers[60] = choices[60][3];
 units[60] = "118";
 comments[60] = "Id Pregunta: 6043. ";


//  Id pregunta: 6379 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;A qui&eacute;n corresponde aprobar el Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "Al Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[61][1] = "Al Centro Criptol&oacute;gico Nacional";
 choices[61][2] = "Al Gobierno";
 choices[61][3] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[61] = choices[61][0];
 units[61] = "43";
 comments[61] = "Id Pregunta: 6379. Art&iacute;culo 14 ENI";


//  Id pregunta: 6586 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  Los ficheros de los operadores de comunicaciones electr&oacute;nicas, respecto de los datos de tr&aacute;fico y localizaci&oacute;n, de acuerdo a la normativa vigente de protecci&oacute;n de datos deben aplicar:";
 choices[62]= new Array();
 choices[62][0] = "S&oacute;lo medidas de seguridad de nivel medio";
 choices[62][1] = "S&oacute;lo medidas de seguridad de nivel medio y b&aacute;sico";
 choices[62][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y deben disponer de un registro de accesos";
 choices[62][3] = "Todas las respuestas anteriores son incorrectas";
 answers[62] = choices[62][2];
 units[62] = "29";
 comments[62] = "Id Pregunta: 6586. ";


//  Id pregunta: 7180 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  Uno de los modelos utilizados para la estimaci&oacute;n de costes de un proyecto inform&aacute;tico es COCOMO (COnstructive COst MOdel). Se puede afirmar sobre &eacute;l que:";
 choices[63]= new Array();
 choices[63][0] = "La medici&oacute;n que realiza COCOMO por l&iacute;neas de c&oacute;digo es especialmente &uacute;til para la Orientaci&oacute;n a Objetos";
 choices[63][1] = "Incluye tres submodelos: B&aacute;sico, Intermedio y Detallado";
 choices[63][2] = "Cada submodelo se divide en tres modos: Org&aacute;nico, Inorg&aacute;nico y Directo";
 choices[63][3] = "El modo Org&aacute;nico se aplica a un tipo de proyectos complejos, en los que se tiene experiencia y con unos requisitos muy restrictivos";
 answers[63] = choices[63][1];
 units[63] = "89";
 comments[63] = "Id Pregunta: 7180. Examen TIC B 2009";


//  Id pregunta: 7275 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las m&aacute;quinas virtuales con respecto al hardware f&iacute;sico?";
 choices[64]= new Array();
 choices[64][0] = "Aislamiento";
 choices[64][1] = "Independencia  del software";
 choices[64][2] = "Encapsulamiento";
 choices[64][3] = "Compatibilidad";
 answers[64] = choices[64][1];
 units[64] = "119";
 comments[64] = "Id Pregunta: 7275. ";


//  Id pregunta: 7284 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Una de las grandes ventajas que aporta la virtualizaci&oacute;n de infraestructuras en un centro de datos es:";
 choices[65]= new Array();
 choices[65][0] = "Reducci&oacute;n de personal de operaciones";
 choices[65][1] = "Reducci&oacute;n de costes de mantenimiento preventivo";
 choices[65][2] = "Gesti&oacute;n del ciclo de vida de la informaci&oacute;n (ILM) m&aacute;s eficaz";
 choices[65][3] = "Gesti&oacute;n agrupada (pooled) de recursos a lo largo de toda la Organizaci&oacute;n";
 answers[65] = choices[65][3];
 units[65] = "119";
 comments[65] = "Id Pregunta: 7284. Examen TIC B 2009";


//  Id pregunta: 7310 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  En relaci&oacute;n a la utilizaci&oacute;n de gram&aacute;ticas y modelos de lenguaje para el reconocimiento de lenguaje natural, indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[66]= new Array();
 choices[66][0] = "Las gram&aacute;ticas permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 choices[66][1] = "Las gram&aacute;ticas permiten obtener tasas de acierto m&aacute;s elevadas que los modelos de lenguaje";
 choices[66][2] = "Los modelos de lenguaje precisan de grandes corpus de entrenamiento";
 choices[66][3] = "Los modelos de lenguaje permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 answers[66] = choices[66][0];
 units[66] = "94";
 comments[66] = "Id Pregunta: 7310. ";


//  Id pregunta: 7872 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)   &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al conjunto de est&aacute;ndares IEEE (Institute of Electrical and Electronics Engineers) 802.11 es cierta?";
 choices[67]= new Array();
 choices[67][0] = " El est&aacute;ndar IEEE 802.11b utiliza la t&eacute;cnica de modulaci&oacute;n DSSS (Direct-Sequence Spread Spectrum).";
 choices[67][1] = " El est&aacute;ndar IEEE 802.11a utiliza la t&eacute;cnica de modulaci&oacute;n FHSS (Frequency-Hopping Spread Spectrum).";
 choices[67][2] = " El est&aacute;ndar IEEE 802.11 original utiliza la t&eacute;cnica de modulaci&oacute;n OFDM (Orthogonal FrequencyDivision Multiplexing).";
 choices[67][3] = " El est&aacute;ndar IEEE 802.11g utiliza la t&eacute;cnica de modulaci&oacute;n DWDM (Dense Wavelength Division Multiplexing).";
 answers[67] = choices[67][0];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 7872. Map 2006";


//  Id pregunta: 8018 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)   &iquest;En cu&aacute;l de los siguientes modelos para el desarrollo de aplicaciones distribuidas o en red seg&uacute;n el modelo cliente-servidor, est&aacute; encuadrado COM+ (Common Object Model Plus)?";
 choices[68]= new Array();
 choices[68][0] = " Modelos basados en llamadas a funciones (sockets).";
 choices[68][1] = " Modelos basados en llamadas a procedimientos remotos (RPC).";
 choices[68][2] = " Modelos basados en llamadas a objetos distribuidos.";
 choices[68][3] = " Modelos basados en agentes m&oacute;viles.";
 answers[68] = choices[68][2];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 8018. Map 2007";


//  Id pregunta: 8022 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)   &iquest;Cu&aacute;l de las siguientes afirmaciones sobre RSS es err&oacute;nea?";
 choices[69]= new Array();
 choices[69][0] = " RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web.";
 choices[69][1] = " RSS es un agregador de contenidos de diversas p&aacute;ginas web de noticias.";
 choices[69][2] = " RSS es parte de la familia de los formatos XML.";
 choices[69][3] = " Es un acr&oacute;nimo de &laquo;Really Simple Syndication&raquo;.";
 answers[69] = choices[69][1];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 8022. Map 2007";


//  Id pregunta: 8224 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  De acuerdo con la normativa de protecci&oacute;n de datos de car&aacute;cter personal, proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o Diario oficial correspondiente, se considerar&aacute;:";
 choices[70]= new Array();
 choices[70][0] = "Infracci&oacute;n leve.";
 choices[70][1] = "Infracci&oacute;n notable.";
 choices[70][2] = "Infracci&oacute;n grave.";
 choices[70][3] = "Infracci&oacute;n muy grave.";
 answers[70] = choices[70][2];
 units[70] = "29";
 comments[70] = "Id Pregunta: 8224. Examen TIC A1 2010";


//  Id pregunta: 8285 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  El fichero JAR de una distribuci&oacute;n JAVA , NO contiene:";
 choices[71]= new Array();
 choices[71][0] = "El fichero manifest.mf.";
 choices[71][1] = "Un fichero .class por cada clase compilada.";
 choices[71][2] = "Un fichero .sf por cada fichero firmado de la distribuci&oacute;n.";
 choices[71][3] = "Un fichero .crt con cada certificado digital utilizado para firmar las clases.";
 answers[71] = choices[71][3];
 units[71] = "60";
 comments[71] = "Id Pregunta: 8285. Examen TIC A1 2010";


//  Id pregunta: 8360 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad en el modelo de McCall?";
 choices[72]= new Array();
 choices[72][0] = "Accesibilidad";
 choices[72][1] = "Correcci&oacute;n";
 choices[72][2] = "Reusabilidad";
 choices[72][3] = "Interoperabilidad";
 answers[72] = choices[72][0];
 units[72] = "87,88";
 comments[72] = "Id Pregunta: 8360. Examen TIC A2 2010";


//  Id pregunta: 8672 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  Indique cu&aacute;l de las siguientes no es una entidad definida dentro de IP m&oacute;vil:";
 choices[73]= new Array();
 choices[73][0] = "Nodo local (Home Nodo)";
 choices[73][1] = "Agente local (Home Agent)";
 choices[73][2] = "Direcci&oacute;n de auxilio (Care-of-Address)";
 choices[73][3] = "Nodo m&oacute;vil (Mobile Nodo)";
 answers[73] = choices[73][0];
 units[73] = "100,109";
 comments[73] = "Id Pregunta: 8672. Examen UPM A2 2011";


//  Id pregunta: 8679 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  El permiso de Unix 500 pemiite:";
 choices[74]= new Array();
 choices[74][0] = "Lectura y escritura para el propietario del archivo";
 choices[74][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[74][2] = "Lectura y escritura para todos los usuarios";
 choices[74][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[74] = choices[74][1];
 units[74] = "53";
 comments[74] = "Id Pregunta: 8679. Examen UPM A2 2011";


//  Id pregunta: 8728 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[75]= new Array();
 choices[75][0] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red.";
 choices[75][1] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad.";
 choices[75][2] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad.";
 choices[75][3] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad.";
 answers[75] = choices[75][3];
 units[75] = "104";
 comments[75] = "Id Pregunta: 8728. Examen UPM A2 2011";


//  Id pregunta: 8820 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  El objetivo del Plan de Sistemas de Informaci&oacute;n es:";
 choices[76]= new Array();
 choices[76][0] = "Proporcionar un marco estrat&eacute;gico que sirva de referencia para los Sistemas de Informaci&oacute;n de un &aacute;mbito concreto de una organizaci&oacute;n.";
 choices[76][1] = "El an&aacute;lisis de un conjunto concreto de necesidades para proponer una soluci&oacute;n a corto plazo, que tenga en cuenta restricciones econ&oacute;micas, t&eacute;cnicas, legales y operativas.";
 choices[76][2] = "a y b son correctas.";
 choices[76][3] = "Ninguna de las anteriores.";
 answers[76] = choices[76][0];
 units[76] = "27, 86";
 comments[76] = "Id Pregunta: 8820. Examen UPM A2 2011";


//  Id pregunta: 8980 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l es la arquitectura del kernel empleado en Windows 7?";
 choices[77]= new Array();
 choices[77][0] = "Monol&iacute;tico";
 choices[77][1] = "Microkernel";
 choices[77][2] = "Nanokernel";
 choices[77][3] = "Hibrida";
 answers[77] = choices[77][3];
 units[77] = "52";
 comments[77] = "Id Pregunta: 8980. ";


//  Id pregunta: 8983 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Qu&eacute; es Windows PowerShell?";
 choices[78]= new Array();
 choices[78][0] = "El interfaz del sistema de gesti&oacute;n de energ&iacute;a de Windows";
 choices[78][1] = "Una interfaz de comandos y un lenguaje de scripting, integrado en .NET y orientado a los administradores de sistemas Windows";
 choices[78][2] = "&quot;Una versi&oacute;n para Windows del comando &quot;&quot;ps&quot;&quot; de Unix&quot;";
 choices[78][3] = "Nada de lo anterior";
 answers[78] = choices[78][1];
 units[78] = "56";
 comments[78] = "Id Pregunta: 8983. ";


//  Id pregunta: 9059 Año de creación de pregunta: 2022-01-01
 questions[79]= "80)  Indica cu&aacute;l de los siguientes par&aacute;metros tiene en cuenta el algoritmo de adjudicaci&oacute;n de HSUPA.";
 choices[79]= new Array();
 choices[79][0] = "Ancho de banda disponible en cada estaci&oacute;n";
 choices[79][1] = "Consumo el&eacute;ctrico del Hardware";
 choices[79][2] = "Interferencia en el canal UPLOAD";
 choices[79][3] = "Todos los anteriores.";
 answers[79] = choices[79][3];
 units[79] = "108";
 comments[79] = "Id Pregunta: 9059. ";


//  Id pregunta: 9119 Año de creación de pregunta: 2013-01-01
 questions[80]= "81)  Con respecto a los datos en los sistemas SMP o MMC se pueden distinguir los siguientes tipos en funci&oacute;n de su alcance";
 choices[80]= new Array();
 choices[80][0] = "Datos de alcance s&iacute;ncrono y as&iacute;ncrono";
 choices[80][1] = "Datos de alcance global y local";
 choices[80][2] = "Datos de alcance externo e interno";
 choices[80][3] = "No existe la arquitectura MMC";
 answers[80] = choices[80][1];
 units[80] = "45";
 comments[80] = "Id Pregunta: 9119. ";


//  Id pregunta: 9219 Año de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es LUN Masking?";
 choices[81]= new Array();
 choices[81][0] = "La cabina presenta una LUN a un servidor y este puede acceder.";
 choices[81][1] = "Se evita que un servidor pueda acceder a una LUN que pertenece a otro servidor.";
 choices[81][2] = "Es un m&eacute;todo de seguridad en red SAN de la interfaz SCSCI.";
 choices[81][3] = "Todos son v&aacute;lidas";
 answers[81] = choices[81][3];
 units[81] = "48";
 comments[81] = "Id Pregunta: 9219. ";


//  Id pregunta: 9255 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; es BitLocker?";
 choices[82]= new Array();
 choices[82][0] = "Una funcionalidad de Windows que permite el cifrado de discos duros completos.";
 choices[82][1] = "Se proporciona desde Windows Vista.";
 choices[82][2] = "Con Windows 7 incorpora la funcionalidad de BiLocker-ToGo para dispositivos USB.";
 choices[82][3] = "Todas son correctas";
 answers[82] = choices[82][3];
 units[82] = "56";
 comments[82] = "Id Pregunta: 9255. ";


//  Id pregunta: 9284 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  Adem&aacute;s de los pliegos, &iquest;cu&aacute;l de los siguientes documentos forma parte del expediente de contrataci&oacute;n?";
 choices[83]= new Array();
 choices[83][0] = "Certificado de la existencia de cr&eacute;dito. ";
 choices[83][1] = "Fiscalizaci&oacute;n de la intervenci&oacute;n.";
 choices[83][2] = "Aprobaci&oacute;n del gasto. ";
 choices[83][3] = "Todos los anteriores.";
 answers[83] = choices[83][3];
 units[83] = "41";
 comments[83] = "Id Pregunta: 9284. ";


//  Id pregunta: 9297 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es el dominio de CobiT m&aacute;s afectado de cara a la Continuidad del Negocio?";
 choices[84]= new Array();
 choices[84][0] = "Planificaci&oacute;n y Organizaci&oacute;n.";
 choices[84][1] = "Adquisici&oacute;n e implementaci&oacute;n.";
 choices[84][2] = "Entrega y Soporte.";
 choices[84][3] = "Supervisi&oacute;n y Evaluaci&oacute;n.";
 answers[84] = choices[84][2];
 units[84] = "32";
 comments[84] = "Id Pregunta: 9297. ";


//  Id pregunta: 9371 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  E-Line:";
 choices[85]= new Array();
 choices[85][0] = "Es un servicio que ofrecen los operadores de fibra de lineas dedicadas.";
 choices[85][1] = "Es un mecanismo para proporcionar comunicaciones punto a punto mediante t&uacute;neles IPSec.";
 choices[85][2] = "Es un mecanismo para proporcionar comunicaciones punto a punto, encapsulando el tr&aacute;fico Ethernet dentro de un tunel MPLS.";
 choices[85][3] = "Es un mecanismo para comunicar dos computadoras mediante PPP.";
 answers[85] = choices[85][2];
 units[85] = "101";
 comments[85] = "Id Pregunta: 9371. ";


//  Id pregunta: 9600 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  Marcar la respuesta correcta:";
 choices[86]= new Array();
 choices[86][0] = "UNIX se desarroll&oacute; a partir del sistema MINIX.";
 choices[86][1] = "El lenguaje original de desarrollo de UNIX era el B, posteriormente se desarroll&oacute; en C";
 choices[86][2] = " El n&uacute;cleo original del sistema operativo UNIX fue dise&ntilde;ado por A. Tanenbaum.";
 choices[86][3] = "Todas las anteriores son incorrectas";
 answers[86] = choices[86][1];
 units[86] = "53";
 comments[86] = "Id Pregunta: 9600. ";


//  Id pregunta: 9636 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; n&uacute;mero m&aacute;ximo de m&aacute;quinas virtuales por anfitri&oacute;n soporta el sistema Hyper-V de Windows 2012 Server?";
 choices[87]= new Array();
 choices[87][0] = "256";
 choices[87][1] = "512";
 choices[87][2] = "1024";
 choices[87][3] = "2048";
 answers[87] = choices[87][2];
 units[87] = "56";
 comments[87] = "Id Pregunta: 9636. ";


//  Id pregunta: 9745 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; es el Marco Com&uacute;n de Evaluaci&oacute;n (CAF) 2013?";
 choices[88]= new Array();
 choices[88][0] = "CAF ofrece dos sistemas de puntuaci&oacute;n, el cl&aacute;sico y el refinado, s&oacute;lo el primero de ellos est&aacute; fundamentado sobre el Ciclo de Deming.";
 choices[88][1] = "Es uno del los ejes del modelo EFQM.";
 choices[88][2] = "Es una herramienta de gesti&oacute;n de la calidad total, desarrollada por y para el sector p&uacute;blico.";
 choices[88][3] = "Es una autoevaluaci&oacute;n que debe realizar una organizaci&oacute;n conforme a lo que dicta la norma ISO 9000.";
 answers[88] = choices[88][2];
 units[88] = "92";
 comments[88] = "Id Pregunta: 9745. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9857 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Respecto a la seguridad en redes, indique qu&eacute; es un exploit.";
 choices[89]= new Array();
 choices[89][0] = "Es un malware dise&ntilde;ado para aprovechar la vulnerabilidad de un software.";
 choices[89][1] = "Persona que accede a datos no autorizados.";
 choices[89][2] = "Adware que modifica la p&aacute;gina de inicio de los navegadores de Internet sin el consentimiento del usuario.";
 choices[89][3] = "Software utilizado para la suplantaci&oacute;n de la identidad de un usuario de la red.";
 answers[89] = choices[89][0];
 units[89] = "111";
 comments[89] = "Id Pregunta: 9857. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9861 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique la respuesta falsa:";
 choices[90]= new Array();
 choices[90][0] = "OAuth (Open Authorization) es un protocolo abierto que permite autorizaci&oacute;n segura de una API de modo est&aacute;ndar y simple para aplicaciones de escritorio, m&oacute;viles y web.";
 choices[90][1] = "OAuth y OpenID son protocolos id&eacute;nticos. ";
 choices[90][2] = "OpenID es un est&aacute;ndar de identificaci&oacute;n digital descentralizado, con el que un usuario puede identificarse en una p&aacute;gina web a trav&eacute;s de una URL o XRI.";
 choices[90][3] = "A diferencia de arquitecturas Single Sign-On, OpenId no especifica el mecanismo de autenticaci&oacute;n.";
 answers[90] = choices[90][1];
 units[90] = "118";
 comments[90] = "Id Pregunta: 9861. Oauth y OpenID son completamente diferentes. El resto de respuestas son ciertas.";


//  Id pregunta: 10068 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Entre los tipos de modulaci&oacute;n en las tecnolog&iacute;as xDSL se encuentra:";
 choices[91]= new Array();
 choices[91][0] = "SDH (Synchronous Digital Hierarchy).";
 choices[91][1] = "SGL (Splitterless G. Lite).";
 choices[91][2] = "SHDSL (Single-pair High-speed Digital Subscriber Line).";
 choices[91][3] = "CAP (Carrierless Amplitude Phase).";
 answers[91] = choices[91][3];
 units[91] = "107";
 comments[91] = "Id Pregunta: 10068. TIC A2, libre, Examen 2013";


//  Id pregunta: 10077 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Qu&eacute; banda de frecuencia se utiliza para la prestaci&oacute;n de los servicios de televisi&oacute;n terrestre con tecnolog&iacute;a digital, seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[92]= new Array();
 choices[92][0] = "100 a 224 MHz ";
 choices[92][1] = "225 a 356 MHz";
 choices[92][2] = "357 a 469 MHz ";
 choices[92][3] = "470 a 862 MHz";
 answers[92] = choices[92][3];
 units[92] = "105";
 comments[92] = "Id Pregunta: 10077. TIC A2, libre, Examen 2013";


//  Id pregunta: 10080 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  En el contexto de comunicaciones inal&aacute;mbricas, MIMO significa:";
 choices[93]= new Array();
 choices[93][0] = "Multiple Input Multiple Output.";
 choices[93][1] = "Massive Input Massive Output.";
 choices[93][2] = "Multiplexed Input Multiplexed Output.";
 choices[93][3] = "Mapped Input Mapped Output.";
 answers[93] = choices[93][0];
 units[93] = "108";
 comments[93] = "Id Pregunta: 10080. TIC A2, libre, Examen 2013";


//  Id pregunta: 10084 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo de soporte?";
 choices[94]= new Array();
 choices[94][0] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[94][1] = "Gesti&oacute;n";
 choices[94][2] = "Entorno de desarrollo";
 choices[94][3] = "Pruebas";
 answers[94] = choices[94][3];
 units[94] = "76";
 comments[94] = "Id Pregunta: 10084. ";


//  Id pregunta: 10091 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil tiene 5 fases claramente diferenciadas?";
 choices[95]= new Array();
 choices[95][0] = "SCRUM";
 choices[95][1] = "LSD";
 choices[95][2] = "Kanban";
 choices[95][3] = "FDD";
 answers[95] = choices[95][3];
 units[95] = "79";
 comments[95] = "Id Pregunta: 10091. ";


//  Id pregunta: 10259 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  El derecho de oposici&oacute;n al tratamiento de datos de car&aacute;cter personal tiene sentido:";
 choices[96]= new Array();
 choices[96][0] = "Para los ficheros mencionados en b) y c)";
 choices[96][1] = "Para ficheros que recojan datos de car&aacute;cter personal y no sea preciso el consentimiento del afectado para realizar el tratamiento";
 choices[96][2] = "Para ficheros que recojan datos de car&aacute;cter personal y tengan por objeto realizar actividades de prospecci&oacute;n comercial";
 choices[96][3] = "Para todo tipo de ficheros que recojan datos de car&aacute;cter personal";
 answers[96] = choices[96][0];
 units[96] = "29";
 comments[96] = "Id Pregunta: 10259. Art&iacute;culo 34 a) y b) del RD 1720/2007";


//  Id pregunta: 10285 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  RMAN es:";
 choices[97]= new Array();
 choices[97][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[97][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[97][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[97][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[97] = choices[97][2];
 units[97] = "58";
 comments[97] = "Id Pregunta: 10285. TIC A2, libre, examen 2013";


//  Id pregunta: 10308 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[98]= new Array();
 choices[98][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[98][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[98][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[98][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[98] = choices[98][1];
 units[98] = "58";
 comments[98] = "Id Pregunta: 10308. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10459 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[99]= new Array();
 choices[99][0] = "XOP XML-binary Optimized Protocol";
 choices[99][1] = "XOP XML-binary Optimized Packaging";
 choices[99][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[99][3] = "REST Represantional State Transfer";
 answers[99] = choices[99][2];
 units[99] = "51";
 comments[99] = "Id Pregunta: 10459. ";


