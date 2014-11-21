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


//  Id pregunta: 116 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  De las siguientes estructuras organizativas de un departamento de sistemas de informaci&oacute;n se&ntilde;ale la que considere m&aacute;s correcta:";
 choices[1]= new Array();
 choices[1][0] = "Establecer una estructura funcional en el departamento de sistemas y una sectorial en el de desarrollo";
 choices[1][1] = "Establecer una estructura sectorial en sistemas y una matricial en desarrollo";
 choices[1][2] = "Establecer una estructura matricial en sistemas y una matricial en desarrollo";
 choices[1][3] = "Establecer una estructura matricial en sistemas y una por proyectos en desarrollo";
 answers[1] = choices[1][0];
 units[1] = "22";
 comments[1] = "Id Pregunta: 116. ";


//  Id pregunta: 122 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Desde el punto de vista de un auditor de seguridad indique cu&aacute;l de las siguientes premisas, sobre control interno de acceso l&oacute;gico, es inadecuada:";
 choices[2]= new Array();
 choices[2][0] = "El sistema debe obligar al usuario a cambiar de contrase&ntilde;a cada cierto tiempo";
 choices[2][1] = "El registro o log de acceso al sistema puede desactivarse a petici&oacute;n del responsable de seguridad";
 choices[2][2] = "Es conveniente que la autenticaci&oacute;n de entrada al sistema se haga una &uacute;nica vez";
 choices[2][3] = "El sistema debe rechazar el acceso a los usuarios despu&eacute;s de una serie de intentos fallidos";
 answers[2] = choices[2][1];
 units[2] = "31,32,33";
 comments[2] = "Id Pregunta: 122. ";


//  Id pregunta: 277 Año de creación de pregunta: 2009-01-01
 questions[3]= "4)  La Agencia de Protecci&oacute;n de Datos depende funcionalmente del:";
 choices[3]= new Array();
 choices[3][0] = "Ministerio de Justicia";
 choices[3][1] = "Ministerio de Ciencia y Tecnolog&iacute;a";
 choices[3][2] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[3][3] = "Es un organismo independiente de cualquier Ministerio";
 answers[3] = choices[3][3];
 units[3] = "29";
 comments[3] = "Id Pregunta: 277. ";


//  Id pregunta: 339 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  La red de comunicaci&oacute;n en cadena de una organizaci&oacute;n es:";
 choices[4]= new Array();
 choices[4][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[4][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[4][2] = "Cada sujeto se comunica con todos los restantes";
 choices[4][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[4] = choices[4][1];
 units[4] = "23";
 comments[4] = "Id Pregunta: 339. ";


//  Id pregunta: 415 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se define como interoperabilidad la posibilidad de:";
 choices[5]= new Array();
 choices[5][0] = "Manejar un ordenador desde cualquier puesto de trabajo de la red";
 choices[5][1] = "Transmitir datos entre dos ordenadores distintos";
 choices[5][2] = "Compartir procesos y datos entre distintos procesadores";
 choices[5][3] = "Ejecutar la misma aplicaci&oacute;n en plataformas de diferentes fabricantes";
 answers[5] = choices[5][2];
 units[5] = "40";
 comments[5] = "Id Pregunta: 415. ";


//  Id pregunta: 447 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n las teor&iacute;as de Alvin Toffler:";
 choices[6]= new Array();
 choices[6][0] = "Las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[6][1] = "Las organizaciones basadas en la informaci&oacute;n tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[6][2] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de S";
 choices[6][3] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de doble S";
 answers[6] = choices[6][0];
 units[6] = "22";
 comments[6] = "Id Pregunta: 447. ";


//  Id pregunta: 521 Año de creación de pregunta: 2004-01-01
 questions[7]= "8)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n puede no estar segregada de la de analista de sistemas?";
 choices[7]= new Array();
 choices[7][0] = "Programador de aplicaciones";
 choices[7][1] = "Usuario final";
 choices[7][2] = "Administrador de base de datos";
 choices[7][3] = "Aseguramiento de la calidad";
 answers[7] = choices[7][0];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 521. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 638 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  Cu&aacute;l de los siguientes no es un proyecto que persiga la adquisici&oacute;n y el empleo de equipos de las tecnolog&iacute;as de la informaci&oacute;n teniendo en cuenta consideraciones medioambientales, energ&eacute;ticas o ergon&oacute;micas:";
 choices[8]= new Array();
 choices[8][0] = "MABER";
 choices[8][1] = "EFFIENER";
 choices[8][2] = "EFFORTS";
 choices[8][3] = "EPA ENERGY STAR";
 answers[8] = choices[8][1];
 units[8] = "39, 41";
 comments[8] = "Id Pregunta: 638. ";


//  Id pregunta: 651 Año de creación de pregunta: 2006-01-01
 questions[9]= "10)  Una norma europea es:";
 choices[9]= new Array();
 choices[9][0] = "Una norma aprobada por un organismo de normalizaci&oacute;n con el que la Uni&oacute;n Europea ha establecido acuerdos";
 choices[9][1] = "De obligado cumplimiento en la Uni&oacute;n Europea";
 choices[9][2] = "Una norma homologada por un organismo de normalizaci&oacute;n con sede en la Uni&oacute;n Europea";
 choices[9][3] = "Una norma elaborada por el Comit&eacute; Europeo de Normalizaci&oacute;n (CEN)";
 answers[9] = choices[9][0];
 units[9] = "42";
 comments[9] = "Id Pregunta: 651. ";


//  Id pregunta: 683 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; son empresas spin-off?";
 choices[10]= new Array();
 choices[10][0] = "Empresas dedicadas al SW libre.";
 choices[10][1] = "Empresas vinculadas a la Universidad y que se dedican a tareas de I+D.";
 choices[10][2] = "Empresas de aceleraci&oacute;n de electrones para la producci&oacute;n de energ&iacute;a.";
 choices[10][3] = "No existen.";
 answers[10] = choices[10][1];
 units[10] = "21";
 comments[10] = "Id Pregunta: 683. ";


//  Id pregunta: 713 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  En UNIX, &iquest;qui&eacute;n es el due&ntilde;o del proceso una vez ejecutada la instrucci&oacute;n lpr?";
 choices[11]= new Array();
 choices[11][0] = "root";
 choices[11][1] = "el usuario que la ha ejecutado";
 choices[11][2] = "el programa de control de la cola de impresora";
 choices[11][3] = "scheduler";
 answers[11] = choices[11][2];
 units[11] = "52, 53";
 comments[11] = "Id Pregunta: 713. Similar a examen TIC SS A 2003";


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


//  Id pregunta: 1180 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar cu&aacute;l de los siguientes agentes software inteligentes no existe:";
 choices[13]= new Array();
 choices[13][0] = "Agentes interfaz";
 choices[13][1] = "Agentes de gesti&oacute;n";
 choices[13][2] = "Agentes de informaci&oacute;n";
 choices[13][3] = "Agentes virtuales";
 answers[13] = choices[13][1];
 units[13] = "63";
 comments[13] = "Id Pregunta: 1180. ";


//  Id pregunta: 1354 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[14]= new Array();
 choices[14][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[14][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[14][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[14][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[14] = choices[14][2];
 units[14] = "70";
 comments[14] = "Id Pregunta: 1354. ";


//  Id pregunta: 1440 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  Comparando los sistemas de compresi&oacute;n de video:";
 choices[15]= new Array();
 choices[15][0] = "La complejidad de compresi&oacute;n es mayor en MPEG-x que en H.26x";
 choices[15][1] = "El retardo producido por H.26x es mayor que el producido por MPEG-x";
 choices[15][2] = "La eficiencia es mayor en los algoritmos H.26x que en los algoritmos MPEG-x";
 choices[15][3] = "Todas las respuestas anteriores son correctas";
 answers[15] = choices[15][0];
 units[15] = "109";
 comments[15] = "Id Pregunta: 1440. ";


//  Id pregunta: 1499 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  La Ley de Servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Ley 34/2002:";
 choices[16]= new Array();
 choices[16][0] = "Favorece la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica, al asegurar la equivalencia entre los documentos en soporte papel y los documentos electr&oacute;nicos";
 choices[16][1] = "Es una ley pionera, pues se adelant&oacute; en varios meses a la directiva sobre el comercio electr&oacute;nico";
 choices[16][2] = "No incluye previsiones orientadas a hacer efectiva la accesibilidad de las personas con discapacidad a la informaci&oacute;n proporcionada por medios electr&oacute;nicos, remiti&eacute;ndose al desarrollo normativo posterior";
 choices[16][3] = "Prohibe expresamente el env&iacute;o por correo u otras v&iacute;as de comunicaci&oacute;n electr&oacute;nica equivalente de comunicaciones comerciales, para evitar el spamming";
 answers[16] = choices[16][0];
 units[16] = "30";
 comments[16] = "Id Pregunta: 1499. ";


//  Id pregunta: 1809 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l es la utilidad de la proyecci&oacute;n en los GIS?";
 choices[17]= new Array();
 choices[17][0] = "Permite reconocer los datos geogr&aacute;ficos utilizando fotograf&iacute;as, preferiblemente desde sat&eacute;lite.";
 choices[17][1] = "Soluciona los problemas de representar la curvatura terrestre en un plano.";
 choices[17][2] = "Facilita la realizaci&oacute;n de zooms sin perder resoluci&oacute;n tanto hacia dentro como hacia fuera.";
 choices[17][3] = "Permite cambiar la longitud de onda de las fotograf&iacute;as para poder visualizar cosas que no se pueden ver en el espectro visible.";
 answers[17] = choices[17][1];
 units[17] = "67";
 comments[17] = "Id Pregunta: 1809. ";


//  Id pregunta: 1939 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[18]= new Array();
 choices[18][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios";
 choices[18][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n";
 choices[18][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows";
 choices[18][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0";
 answers[18] = choices[18][1];
 units[18] = "59";
 comments[18] = "Id Pregunta: 1939. ";


//  Id pregunta: 2032 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  La prueba que recorre la secuencia t&iacute;pica de acciones del usuario es de:";
 choices[19]= new Array();
 choices[19][0] = "caja negra";
 choices[19][1] = "caja blanca";
 choices[19][2] = "caja roja";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][0];
 units[19] = "86,88";
 comments[19] = "Id Pregunta: 2032. Similar a examen TIC SS A 2003";


//  Id pregunta: 2260 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  DRM es:";
 choices[20]= new Array();
 choices[20][0] = "un sistema de modulaci&oacute;n digital basado en secuencias aleatorias";
 choices[20][1] = "un conjunto de directivas para la investigaci&oacute;n de tecnolog&iacute;as m&oacute;viles";
 choices[20][2] = "un programa de formaci&oacute;n especializado en las relaciones entre directivos";
 choices[20][3] = "una tecnolog&iacute;a para la gesti&oacute;n de los derechos de los contenidos digitales ";
 answers[20] = choices[20][3];
 units[20] = "37";
 comments[20] = "Id Pregunta: 2260. ";


//  Id pregunta: 2343 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  En programaci&oacute;n orientada a objetos, el mecanismo por el cual una clase de objeto puede ser definido como un caso particular de una clase m&aacute;s general se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Herencia";
 choices[21][1] = "Subclase";
 choices[21][2] = "Polimorfismo";
 choices[21][3] = "Encapsulaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "82";
 comments[21] = "Id Pregunta: 2343. ";


//  Id pregunta: 2352 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  En una planificaci&oacute;n de un proyecto, una situaci&oacute;n que se da normalmente es que:";
 choices[22]= new Array();
 choices[22][0] = "Al inicio del proyecto se consuman m&aacute;s recursos que al final";
 choices[22][1] = "Al principio los recursos precisos van creciendo y al final decreciendo";
 choices[22][2] = "Al final del proyecto se consumen m&aacute;s recursos que en toda su vida anterior";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][1];
 units[22] = "77";
 comments[22] = "Id Pregunta: 2352. ";


//  Id pregunta: 2383 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Indicar cu&aacute;l de los siguientes componentes no pertenece al Plan General de Garant&iacute;a de Calidad elaborado por el Ministerio de Administraciones P&uacute;blicas para el Consejo Superior de Inform&aacute;tica en 1991:";
 choices[23]= new Array();
 choices[23][0] = "Esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos";
 choices[23][1] = "Procedimientos de Control de Calidad";
 choices[23][2] = "Plan de desarrollo de prototipos";
 choices[23][3] = "Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de Planes de Garant&iacute;a de Calidad";
 answers[23] = choices[23][2];
 units[23] = "87,88";
 comments[23] = "Id Pregunta: 2383. ";


//  Id pregunta: 2550 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Una m&aacute;scara en tratamiento digital de im&aacute;genes es:";
 choices[24]= new Array();
 choices[24][0] = "Una matriz num&eacute;rica que se usa para ir haciendo operaciones aritm&eacute;ticas sobre cada uno de los distintos p&iacute;xeles de la imagen, provocando un cambio en los valores de los p&iacute;xeles de la imagen tratada";
 choices[24][1] = "Una zona de la imagen donde no var&iacute;an sus propiedades de color, brillo ni saturaci&oacute;n";
 choices[24][2] = "Una herramienta para poder colorear por capas en los programas ofim&aacute;ticos de tratamiento de im&aacute;genes";
 choices[24][3] = "Nada de lo anterior";
 answers[24] = choices[24][0];
 units[24] = "93";
 comments[24] = "Id Pregunta: 2550. ";


//  Id pregunta: 2573 Año de creación de pregunta: 2004-01-01
 questions[25]= "26)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[25]= new Array();
 choices[25][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[25][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[25][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[25][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[25] = choices[25][2];
 units[25] = "87,88,92";
 comments[25] = "Id Pregunta: 2573. ";


//  Id pregunta: 2609 Año de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a las conexiones mediante flujos de datos en un DFD (Diagrama de Flujo de Datos) es correcta?";
 choices[26]= new Array();
 choices[26][0] = "  En un DFD los almacenes se pueden conectar con procesos, pero no con otros almacenes ni con entidades externas.";
 choices[26][1] = "  En un DFD los almacenes de datos se pueden conectar con procesos, almacenes pero no con entidades externas.";
 choices[26][2] = "  En un DFD las entidades externas se pueden conectar con procesos y almacenes y entidades externas.";
 choices[26][3] = "En un DFD las entidades externas se pueden conectar con procesos y con otras entidades externas pero no con almacenes.";
 answers[26] = choices[26][0];
 units[26] = "81";
 comments[26] = "Id Pregunta: 2609. ";


//  Id pregunta: 2667 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  En este nivel se extraen los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos:";
 choices[27]= new Array();
 choices[27][0] = "Nivel fon&eacute;tico distintivo.";
 choices[27][1] = "Nivel pros&oacute;dico.";
 choices[27][2] = "Nivel l&eacute;xico-sint&aacute;ctico.";
 choices[27][3] = "Nivel ac&uacute;stico.";
 answers[27] = choices[27][2];
 units[27] = "94";
 comments[27] = "Id Pregunta: 2667. ";


//  Id pregunta: 2723 Año de creación de pregunta: 2006-01-01
 questions[28]= "29)  En cuanto al modelo en cascada:";
 choices[28]= new Array();
 choices[28][0] = "Es un modelo lineal que no considera la realimentaci&oacute;n";
 choices[28][1] = "Es tambi&eacute;n conocido como modelo en espiral";
 choices[28][2] = "No hace &eacute;nfasis en la documentaci&oacute;n";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = choices[28][3];
 units[28] = "76";
 comments[28] = "Id Pregunta: 2723. ";


//  Id pregunta: 2757 Año de creación de pregunta: 2006-01-01
 questions[29]= "30)  En el an&aacute;lisis orientado a objetos, una clase que no tenga instancias se denomina:";
 choices[29]= new Array();
 choices[29][0] = "No puede darse";
 choices[29][1] = "Clase padre";
 choices[29][2] = "Subclase";
 choices[29][3] = "Clase abstracta";
 answers[29] = choices[29][3];
 units[29] = "82";
 comments[29] = "Id Pregunta: 2757. ";


//  Id pregunta: 2803 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  Elementos de un modelo de calidad del SW son:";
 choices[30]= new Array();
 choices[30][0] = "Procedimientos, criterios y m&eacute;tricas de calidad";
 choices[30][1] = "Sistema de calidad, factores y m&eacute;tricas";
 choices[30][2] = "Factores y criterios de calidad";
 choices[30][3] = "Factores, criterios y m&eacute;tricas";
 answers[30] = choices[30][3];
 units[30] = "87";
 comments[30] = "Id Pregunta: 2803. ";


//  Id pregunta: 2860 Año de creación de pregunta: 2006-01-01
 questions[31]= "32)  La incicativa europea i2010 se transpone en Espa&ntilde;a en ";
 choices[31]= new Array();
 choices[31][0] = "Plan Avanza 2010";
 choices[31][1] = "Ingenio 2010";
 choices[31][2] = "Plan Avanza";
 choices[31][3] = "Avanza.es";
 answers[31] = choices[31][1];
 units[31] = "30";
 comments[31] = "Id Pregunta: 2860. ";


//  Id pregunta: 2965 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l es el sistema de acceso que utiliza GPRS?";
 choices[32]= new Array();
 choices[32][0] = "OFDM/TDD";
 choices[32][1] = "CDMA/TDD";
 choices[32][2] = "CDMA/FDD";
 choices[32][3] = "Ninguno de los anteriores";
 answers[32] = choices[32][3];
 units[32] = "108";
 comments[32] = "Id Pregunta: 2965. ";


//  Id pregunta: 2987 Año de creación de pregunta: 2004-01-01
 questions[33]= "34)  Un spanning tree es";
 choices[33]= new Array();
 choices[33][0] = "Un &aacute;rbol de recubrimiento de una red";
 choices[33][1] = "Un arbol de decisi&oacute;n para algoritmos de inteligencia artificial como id3";
 choices[33][2] = "Un &aacute;rbol de resoluci&oacute;n en l&oacute;gica";
 choices[33][3] = "Un &aacute;rbol de perif&eacute;ricos de un puerto USB";
 answers[33] = choices[33][0];
 units[33] = "101, 102";
 comments[33] = "Id Pregunta: 2987. ";


//  Id pregunta: 3082 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Los objetos que intervienen en la capa de aplicaci&oacute;n se denominan:";
 choices[34]= new Array();
 choices[34][0] = "Objetos de aplicaci&oacute;n";
 choices[34][1] = "Objetos de negocio";
 choices[34][2] = "Objetos distribuidos";
 choices[34][3] = "Objetos de servidor";
 answers[34] = choices[34][1];
 units[34] = "114,115,116";
 comments[34] = "Id Pregunta: 3082. ";


//  Id pregunta: 3534 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  En las redes locales, &iquest;qu&eacute; funciones tienen los repetidores?:";
 choices[35]= new Array();
 choices[35][0] = "Repiten los paquetes como se&ntilde;ales el&eacute;ctricas de una red a otra";
 choices[35][1] = "Repiten los paquetes incompletos para que sean reenviados completos";
 choices[35][2] = "Eliminan el ruido de las se&ntilde;ales en la l&iacute;nea y emiten los paquetes regenerados";
 choices[35][3] = "Repiten y ampl&iacute;an las se&ntilde;ales el&eacute;ctricas, incluyendo el ruido";
 answers[35] = choices[35][2];
 units[35] = "102";
 comments[35] = "Id Pregunta: 3534. ";


//  Id pregunta: 3581 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  Entre las limitaciones inherentes a las redes locales, que hacen necesaria la segmentaci&oacute;n y la interconexi&oacute;n, no se encuentra:";
 choices[36]= new Array();
 choices[36][0] = "limitaciones en el n&uacute;mero de hosts";
 choices[36][1] = "limitaciones de tecnolog&iacute;as disponibles y fabricantes";
 choices[36][2] = "limitaciones en el n&uacute;mero y tipo de nodos, as&iacute; como en su acceso";
 choices[36][3] = "limitaciones de la distancia a cubrir";
 answers[36] = choices[36][1];
 units[36] = "102";
 comments[36] = "Id Pregunta: 3581. ";


//  Id pregunta: 3633 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  La prioridad de acceso en redes Token Ring:";
 choices[37]= new Array();
 choices[37][0] = "Usa los primeros 6 bits en el campo 'Priority' (prioridad) para controlar el acceso en red Token Ring";
 choices[37][1] = "Permite a los puentes de la red limitar tr&aacute;fico de broadcast sobre redes locales o remotas";
 choices[37][2] = "Es una funci&oacute;n del router (encaminador o canalizador) usada para control de acceso a ciertas puertas seg&uacute;n la prioridad de la direcci&oacute;n";
 choices[37][3] = "Permite que ciertas estaciones accedan a la red m&aacute;s frecuentemente que otras basadas en su prioridad";
 answers[37] = choices[37][3];
 units[37] = "101";
 comments[37] = "Id Pregunta: 3633. ";


//  Id pregunta: 3771 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  PCM es:";
 choices[38]= new Array();
 choices[38][0] = "Modulaci&oacute;n por codificaci&oacute;n de pulsos";
 choices[38][1] = "M&oacute;biles adaptados al uso con ordenadores personales";
 choices[38][2] = "Modulaci&oacute;n por codificaci&oacute;n de fase";
 choices[38][3] = "Personalizaci&oacute;n de canales multimedia";
 answers[38] = choices[38][0];
 units[38] = "99";
 comments[38] = "Id Pregunta: 3771. *:PCM";


//  Id pregunta: 3816 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos realiza asignaci&oacute;n din&aacute;mica de direcciones IP:";
 choices[39]= new Array();
 choices[39][0] = "TCP";
 choices[39][1] = "DNS";
 choices[39][2] = "WINS";
 choices[39][3] = "DHCP";
 answers[39] = choices[39][3];
 units[39] = "113";
 comments[39] = "Id Pregunta: 3816. ";


//  Id pregunta: 3834 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  SIP es:";
 choices[40]= new Array();
 choices[40][0] = "una versi&oacute;n segura del protocolo IP";
 choices[40][1] = "un conjunto de protocolos para gesti&oacute;n de sesiones";
 choices[40][2] = "protocolo para instalaciones de software";
 choices[40][3] = "nada de lo anterior";
 answers[40] = choices[40][1];
 units[40] = "104";
 comments[40] = "Id Pregunta: 3834. ";


//  Id pregunta: 4029 Año de creación de pregunta: 2006-01-01
 questions[41]= "42)  En una trama Frame Relay, la longitud del campo de direcci&oacute;n, y por lo tanto del DLCI, se determina:";
 choices[41]= new Array();
 choices[41][0] = "Con la informaci&oacute;n contenida en la cabecera de la trama, en el campo VA.";
 choices[41][1] = "Con la informaci&oacute;n contenida en la cabecera de la trama, en el campo EA.";
 choices[41][2] = "Con la informaci&oacute;n contenida en la cabecera de la trama, en el campo CR.";
 choices[41][3] = "El campo de direcci&oacute;n es de longitud fija, por lo que no necesita de ning&uacute;n otro campo en la cabecera para indicar su longitud.";
 answers[41] = choices[41][1];
 units[41] = "109";
 comments[41] = "Id Pregunta: 4029. ";


//  Id pregunta: 4052 Año de creación de pregunta: 2006-01-01
 questions[42]= "43)  Que sentido tiene pasar de IPv4 a IPV6";
 choices[42]= new Array();
 choices[42][0] = "El principal motivo es aumentar el ancho de banda";
 choices[42][1] = "Los nodos de internet cambiar&aacute;n a este protocolo el 1 de enero de 2014";
 choices[42][2] = "IPv6 permite un uso optimo de las tecnolog&iacute;as wireless";
 choices[42][3] = "Ninguna de las anteriores es correcta";
 answers[42] = choices[42][3];
 units[42] = "111";
 comments[42] = "Id Pregunta: 4052. ";


//  Id pregunta: 4057 Año de creación de pregunta: 2006-01-01
 questions[43]= "44)  Existen experiencias de uso real de VoIP en Espa&ntilde;a";
 choices[43]= new Array();
 choices[43][0] = "Si";
 choices[43][1] = "No";
 choices[43][2] = "Si, pero solo en las AAPP";
 choices[43][3] = "No, porque a&uacute;n no hay regulaci&oacute;n que lo permita";
 answers[43] = choices[43][0];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4057. ";


//  Id pregunta: 4120 Año de creación de pregunta: 2006-01-01
 questions[44]= "45)  El lugar de almacenamiento temporal de las im&aacute;genes descargadas desde una p&aacute;gina Web se llama";
 choices[44]= new Array();
 choices[44][0] = "RAM";
 choices[44][1] = "disco duro";
 choices[44][2] = "cookie";
 choices[44][3] = "cache";
 answers[44] = choices[44][3];
 units[44] = "112";
 comments[44] = "Id Pregunta: 4120. ";


//  Id pregunta: 4176 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  La primera tarea a realizar en un plan de continuidad de negocio es";
 choices[45]= new Array();
 choices[45][0] = "Duplicar los equipos cr&iacute;ticos";
 choices[45][1] = "Hacer una copia de seguridad de todos los datos";
 choices[45][2] = "Realizar un an&aacute;lisis de la criticidad de los diferentes recursos ante posibles situaciones de emergencia";
 choices[45][3] = "Evaluar la habilidad del personal para responder adecuadamente a situaciones de emergencia";
 answers[45] = choices[45][2];
 units[45] = "97";
 comments[45] = "Id Pregunta: 4176. ";


//  Id pregunta: 4304 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  En una base de datos relacional, para definir la estructura org&aacute;nica de un organismo p&uacute;blico, la mejor soluci&oacute;n ser&aacute;:";
 choices[46]= new Array();
 choices[46][0] = "Definir una tabla de departamentos con una relaci&oacute;n reflexiva &lsquo;pertenece a&rsquo;.";
 choices[46][1] = "Definir dos tablas de departamentos con una relaci&oacute;n &lsquo;pertenece a&rsquo; entre ellas.";
 choices[46][2] = "Definir una tabla de departamentos con una clave tipo &lsquo;TREE&rsquo; que recoja la estructura org&aacute;nica.";
 choices[46][3] = "Preguntar al usuario cu&aacute;ntos niveles de departamentos tiene el organismo, y definir en una tabla de departamentos tantos atributos como niveles posibles pueda haber.";
 answers[46] = choices[46][0];
 units[46] = "58";
 comments[46] = "Id Pregunta: 4304. ";


//  Id pregunta: 4401 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Un evento con consecuencias en detrimento de la seguridad del sistema de informaci&oacute;n se denomina, seg&uacute;n Magerit v.2:";
 choices[47]= new Array();
 choices[47][0] = "Incidente.";
 choices[47][1] = "Incidencia.";
 choices[47][2] = "Contingencia";
 choices[47][3] = "Impacto.";
 answers[47] = choices[47][0];
 units[47] = "33";
 comments[47] = "Id Pregunta: 4401. ";


//  Id pregunta: 4427 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  La firma digital de un mensaje o documento, garantiza:";
 choices[48]= new Array();
 choices[48][0] = "La autenticaci&oacute;n del emisor e integridad del mensaje.";
 choices[48][1] = "La autenticaci&oacute;n del emisor y confidencialidad del env&iacute;o.";
 choices[48][2] = "Autenticaci&oacute;n, confidencialidad e integridad.";
 choices[48][3] = "Confidencialidad del env&iacute;o e integridad del mensaje.";
 answers[48] = choices[48][0];
 units[48] = "74";
 comments[48] = "Id Pregunta: 4427. ";


//  Id pregunta: 4451 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  En qu&eacute; capa del modelo de referencia OSI se localiza la subcapa de control de acceso al medio?";
 choices[49]= new Array();
 choices[49][0] = "Capa f&iacute;sica.";
 choices[49][1] = "Capa de sesi&oacute;n.";
 choices[49][2] = "Capa de transporte.";
 choices[49][3] = "Capa de enlace de datos.";
 answers[49] = choices[49][3];
 units[49] = "100";
 comments[49] = "Id Pregunta: 4451. ";


//  Id pregunta: 4457 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  Para usar la utilidad &quot;Shadow Copies for Shared Folders&quot; en un sistema Windows Server 2003 R2 se necesita";
 choices[50]= new Array();
 choices[50][0] = "Un volumen FAT.";
 choices[50][1] = "Un volumen NTFS dedicado en exclusiva a esta funci&oacute;n.";
 choices[50][2] = "Un volumen FAT dedicado en exclusiva a esta funci&oacute;n.";
 choices[50][3] = "Un volumen NTFS";
 answers[50] = choices[50][3];
 units[50] = "56";
 comments[50] = "Id Pregunta: 4457. ";


//  Id pregunta: 4507 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cuanto tiempo duraran los derechos de explotaci&oacute;n de una obra?";
 choices[51]= new Array();
 choices[51][0] = "Hasta la muerte de su autor";
 choices[51][1] = "Setenta anos despu&eacute;s de la fecha de divulgaci&oacute;n";
 choices[51][2] = "Toda la vida de su autor y setenta anos despu&eacute;s de su muerte";
 choices[51][3] = "Los derechos de explotaci&oacute;n de una obra nunca se extinguen";
 answers[51] = choices[51][2];
 units[51] = "36";
 comments[51] = "Id Pregunta: 4507. ";


//  Id pregunta: 4599 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  Respecto al acceso a Internet, Ia Ley General de telecomunicaciones:";
 choices[52]= new Array();
 choices[52][0] = "no menciona nada";
 choices[52][1] = "obliga a todos los operadores a prestar dicho servicio en localidades de mas de 1.000 habitantes.";
 choices[52][2] = "obliga a Telefonica de Espana, S.A. a prestarlo en todo el territorio nacional";
 choices[52][3] = "lo incluye dentro del servicio universal.";
 answers[52] = choices[52][3];
 units[52] = "110";
 comments[52] = "Id Pregunta: 4599. ";


//  Id pregunta: 4726 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  Cual de las siguientes afirmaciones es correcta cuando hablamos de XML:";
 choices[53]= new Array();
 choices[53][0] = "Cocoon es un parser XML de c&oacute;digo abierto";
 choices[53][1] = "Los parsers XML sin validaci&oacute;n necesitan el dtd asociado al documento xml";
 choices[53][2] = "Xerces es un parser XML basado en java";
 choices[53][3] = "XSLT es un esquema para XML utilizado en lugar de los DTD";
 answers[53] = choices[53][2];
 units[53] = "69";
 comments[53] = "Id Pregunta: 4726. Examen 2006 JCYL";


//  Id pregunta: 4746 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  Indicar la afirmaci&oacute;n correcta.";
 choices[54]= new Array();
 choices[54][0] = "Los servicios web pueden aprovechar la estructura de un GRID de manera eficiente";
 choices[54][1] = "Un GRID es una red de ordenadores que comparten recursos entre ellos para maximizar sus prestaciones totales";
 choices[54][2] = "Los recursos que se aportan por los miembros de una red GRID pueden ser de almacenamiento, memoria y procesamiento";
 choices[54][3] = "Para que una red GRID sea segura es preciso establecer una pol&iacute;tica de seguridad com&uacute;n a las subredes que lo conforman";
 answers[54] = choices[54][0];
 units[54] = "45";
 comments[54] = "Id Pregunta: 4746. ";


//  Id pregunta: 4780 Año de creación de pregunta: 2007-01-01
 questions[55]= "56)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[55]= new Array();
 choices[55][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[55][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[55][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[55][3] = "Todas las anteriores son ciertas";
 answers[55] = choices[55][3];
 units[55] = "30";
 comments[55] = "Id Pregunta: 4780. Proyecto Ley";


//  Id pregunta: 4932 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  La matriz Requisitos-Componentes empleada en los procesos de dise&ntilde;o y desarrollo de software, aparece en:";
 choices[56]= new Array();
 choices[56][0] = "El documento de especificaci&oacute;n de requisitos.";
 choices[56][1] = "El documento de dise&ntilde;o de software.";
 choices[56][2] = "Los documentos de cambios.";
 choices[56][3] = "El Plan de garant&iacute;a de calidad de software.";
 answers[56] = choices[56][1];
 units[56] = "78";
 comments[56] = "Id Pregunta: 4932. Examen TIC B 2007";


//  Id pregunta: 4955 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes es un Sistema de Gesti&oacute;n de Bases de Datos?:";
 choices[57]= new Array();
 choices[57][0] = "PostgreSQL.";
 choices[57][1] = "Gentoo.";
 choices[57][2] = "UbuntuBD.";
 choices[57][3] = "SQLCentos.";
 answers[57] = choices[57][0];
 units[57] = "57";
 comments[57] = "Id Pregunta: 4955. Examen TIC B 2007";


//  Id pregunta: 5006 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  Seg&uacute;n Cobit, en un proceso de auditor&iacute;a un objetivo de control en TI se define como:";
 choices[58]= new Array();
 choices[58][0] = "Los soportes inform&aacute;ticos y sus sistemas de backup";
 choices[58][1] = "El resultado deseado implementando procedimientos de control en una actividad de TI particular";
 choices[58][2] = "La compatibilidad del software";
 choices[58][3] = "El tiempo medio entre fallos de los sistemas de TI";
 answers[58] = choices[58][1];
 units[58] = "98";
 comments[58] = "Id Pregunta: 5006. Examen TIC A 2007";


//  Id pregunta: 5039 Año de creación de pregunta: 2003-01-01
 questions[59]= "60)  Seg&uacute;n el est&aacute;ndar ISO 7816-2 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientescontactos se utiliza para la se&ntilde;al de reloj?:";
 choices[59]= new Array();
 choices[59][0] = "C2";
 choices[59][1] = "C3";
 choices[59][2] = "C5";
 choices[59][3] = "C6";
 answers[59] = choices[59][1];
 units[59] = "74";
 comments[59] = "Id Pregunta: 5039. Examen TIC A 2007";


//  Id pregunta: 5047 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[60]= new Array();
 choices[60][0] = "24 meses";
 choices[60][1] = "5 a&ntilde;os";
 choices[60][2] = "30 meses";
 choices[60][3] = "4 a&ntilde;os";
 answers[60] = choices[60][2];
 units[60] = "30";
 comments[60] = "Id Pregunta: 5047. Examen TIC A 2007";


//  Id pregunta: 5215 Año de creación de pregunta: 2007-01-01
 questions[61]= "62)  Cu&aacute;l de los siguientes productos no se obtiene en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n orientado a objetos";
 choices[61]= new Array();
 choices[61][0] = "Dise&ntilde;o de la Interfaz de usuario";
 choices[61][1] = "Modelos de Clases de Dise&ntilde;o";
 choices[61][2] = "Dise&ntilde;o de la Arquitectura Modular e Interfaz de Usuario";
 choices[61][3] = "Especificaciones de Implantaci&oacute;n";
 answers[61] = choices[61][2];
 units[61] = "86";
 comments[61] = "Id Pregunta: 5215. ";


//  Id pregunta: 5276 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  Indique cu&aacute;l de los siguientes no es un servicio b&aacute;sico de la red SARA de las administraciones:";
 choices[62]= new Array();
 choices[62][0] = "SMTP";
 choices[62][1] = "PROXY";
 choices[62][2] = "DHCP";
 choices[62][3] = "DNS";
 answers[62] = choices[62][2];
 units[62] = "103";
 comments[62] = "Id Pregunta: 5276. ";


//  Id pregunta: 5445 Año de creación de pregunta: 2003-01-01
 questions[63]= "64)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ";
 choices[63]= new Array();
 choices[63][0] = "el servidor tiene un built-in de JVM";
 choices[63][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente";
 choices[63][2] = "el navegador tiene un built-in de JVM";
 choices[63][3] = "los applets no necesitan una JVM";
 answers[63] = choices[63][2];
 units[63] = "60";
 comments[63] = "Id Pregunta: 5445. Castilla y Le&oacute;n";


//  Id pregunta: 5454 Año de creación de pregunta: 2003-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica importante de las bases de datos relacionales y SQL?";
 choices[64]= new Array();
 choices[64][0] = "La independencia de relaciones entre las tablas";
 choices[64][1] = "Elevada velocidad del SQL";
 choices[64][2] = "Potentes entornos de desarrollo";
 choices[64][3] = "F&aacute;ciles de instalar y usar";
 answers[64] = choices[64][0];
 units[64] = "58";
 comments[64] = "Id Pregunta: 5454. Castilla y Le&oacute;n";


//  Id pregunta: 5480 Año de creación de pregunta: 2003-01-01
 questions[65]= "66)  El modelo de desarrollo conocido como el bazar";
 choices[65]= new Array();
 choices[65][0] = "Fue promulgado por Linus Torvald";
 choices[65][1] = "No se aplica a desarrollos comerciales";
 choices[65][2] = "Se basa en la metodolog&iacute;a Extreme Programming";
 choices[65][3] = "Todas las respuestas anteriores son incorrectas";
 answers[65] = choices[65][3];
 units[65] = "61";
 comments[65] = "Id Pregunta: 5480. Castilla y Le&oacute;n";


//  Id pregunta: 5704 Año de creación de pregunta: 2003-01-01
 questions[66]= "67)  Las siglas WSDL corresponden a:";
 choices[66]= new Array();
 choices[66][0] = "Web Services Description Language";
 choices[66][1] = " Wireless Services Description Language";
 choices[66][2] = "Web Services Definition Language";
 choices[66][3] = "Wireless Services Definition Language";
 answers[66] = choices[66][0];
 units[66] = "51";
 comments[66] = "Id Pregunta: 5704. ";


//  Id pregunta: 5730 Año de creación de pregunta: 2003-01-01
 questions[67]= "68)  &iquest;Cual de las siguientes puede ser utilizada para videoconferencia?";
 choices[67]= new Array();
 choices[67][0] = "ATM";
 choices[67][1] = "H.323";
 choices[67][2] = "VRVS";
 choices[67][3] = "Todas las anteriores";
 answers[67] = choices[67][3];
 units[67] = "117";
 comments[67] = "Id Pregunta: 5730. ";


//  Id pregunta: 5740 Año de creación de pregunta: 2009-01-01
 questions[68]= "69)  &iquest;Puede haber firma electr&oacute;nica reconocidad que no sea avanzada?";
 choices[68]= new Array();
 choices[68][0] = "S&iacute;, si el dispositivo de creaci&oacute;n de firma es seguro";
 choices[68][1] = "S&iacute;, si se usa un certificado reconocido";
 choices[68][2] = "No, en ning&uacute;n caso";
 choices[68][3] = "S&iacute;, si lo aceptan ambas partes";
 answers[68] = choices[68][2];
 units[68] = "30";
 comments[68] = "Id Pregunta: 5740. ";


//  Id pregunta: 5812 Año de creación de pregunta: 2009-01-01
 questions[69]= "70)  &iquest;D&oacute;nde NO es necesario especificar la forma de acceso al Perfil del Contratante (art&iacute;culo 53.1 RD Legislativo 3/2011)?";
 choices[69]= new Array();
 choices[69][0] = "En las p&aacute;ginas Web institucionales que mantengan los entes del sector p&uacute;blico";
 choices[69][1] = "En el Bolet&iacute;n Oficial del Estado";
 choices[69][2] = "En la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico";
 choices[69][3] = "En los pliegos y anuncions de licitaci&oacute;n";
 answers[69] = choices[69][1];
 units[69] = "41";
 comments[69] = "Id Pregunta: 5812. ";


//  Id pregunta: 5845 Año de creación de pregunta: 2009-01-01
 questions[70]= "71)  En referencia a los grupos de trabajo IEEE 802, indique cu&aacute;l de los siguientes grupos est&aacute; relacionado con las redes m&oacute;viles inal&aacute;mbricas de banda ancha (MBWA):";
 choices[70]= new Array();
 choices[70][0] = "802.3";
 choices[70][1] = "802.11";
 choices[70][2] = "802.15";
 choices[70][3] = "802.20";
 answers[70] = choices[70][3];
 units[70] = "101";
 comments[70] = "Id Pregunta: 5845. MAP 2008 A1";


//  Id pregunta: 5892 Año de creación de pregunta: 2009-01-01
 questions[71]= "72)  &iquest;Qu&eacute; es JNDI?";
 choices[71]= new Array();
 choices[71][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[71][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[71][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][0];
 units[71] = "60";
 comments[71] = "Id Pregunta: 5892. ";


//  Id pregunta: 6053 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  La gesti&oacute;n del alcance de un proyecto de tecnolog&iacute;as de la informaci&oacute;n se suele dividir en 5 etapas; indicar cu&aacute;l de las siguientes NO es una de ellas:";
 choices[72]= new Array();
 choices[72][0] = "Planificaci&oacute;n del alcance.";
 choices[72][1] = "Creaci&oacute;n de la Estructura de Desglose del Trabajo (EDT).";
 choices[72][2] = "Definici&oacute;n del alcance.";
 choices[72][3] = "Estimaci&oacute;n de la duraci&oacute;n de las actividades o trabajos.";
 answers[72] = choices[72][3];
 units[72] = "86";
 comments[72] = "Id Pregunta: 6053. TIC A 2009";


//  Id pregunta: 6294 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de alto nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "Prototipos";
 choices[73][1] = "Sesiones JAD y JRP";
 choices[73][2] = "Entorno de Bucles Adaptativo";
 choices[73][3] = "Todas lo son";
 answers[73] = choices[73][3];
 units[73] = "78";
 comments[73] = "Id Pregunta: 6294. ";


//  Id pregunta: 6432 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes aplicaciones es un motor de b&uacute;squeda apoyado por el Apache Software Foundation?";
 choices[74]= new Array();
 choices[74][0] = "Apache WatchDog";
 choices[74][1] = "Apache Velocity";
 choices[74][2] = "Apache Tomcat";
 choices[74][3] = "Apache Lucene";
 answers[74] = choices[74][3];
 units[74] = "62";
 comments[74] = "Id Pregunta: 6432. ";


//  Id pregunta: 6475 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes elementos NO est&aacute; incluido en el directorio privado WEB-INF de una aplicaci&oacute;n Web?";
 choices[75]= new Array();
 choices[75][0] = "Un archivo web.xml";
 choices[75][1] = "Un subdirectorio llamado classes";
 choices[75][2] = "Documentos de Microsoft Office";
 choices[75][3] = "Un subdirectorio lib para contener los archivos JAR utilizados por la aplicaci&oacute;n Web";
 answers[75] = choices[75][2];
 units[75] = "116";
 comments[75] = "Id Pregunta: 6475. Castilla La Mancha 2009";


//  Id pregunta: 6483 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Es compatible el servicio ADSL y el servicio RDSI sobre el mismo par de cobre?";
 choices[76]= new Array();
 choices[76][0] = "S&iacute;";
 choices[76][1] = "No";
 choices[76][2] = "S&oacute;lo si no se ofrece tambi&eacute;n el servicio RTC";
 choices[76][3] = "S&oacute;lo si el cliente no tiene una centralita PBX";
 answers[76] = choices[76][0];
 units[76] = "107";
 comments[76] = "Id Pregunta: 6483. Castilla La Mancha 2009";


//  Id pregunta: 6509 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes propiedades NO se almacena en el i-node de un archivo?";
 choices[77]= new Array();
 choices[77][0] = "Permisos";
 choices[77][1] = "Propietario";
 choices[77][2] = "Grupo";
 choices[77][3] = "Nombre del fichero";
 answers[77] = choices[77][3];
 units[77] = "53";
 comments[77] = "Id Pregunta: 6509. ";


//  Id pregunta: 6559 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  CSMA (Acceso M&uacute;ltiple por divisi&oacute;n de c&oacute;digo) no se caracteriza por:";
 choices[78]= new Array();
 choices[78][0] = "Ancho de banda menor a los sistemas TDMA";
 choices[78][1] = "Ancho de banda mayor a los sistemas TDMA";
 choices[78][2] = "Se puede reutilizar la misma portadora en todas las c&eacute;lulas, sean adyacentes o no";
 choices[78][3] = "M&uacute;ltiples usuarios pueden transmitir de manera concurrente sobre el mismo radiocanal";
 answers[78] = choices[78][0];
 units[78] = "108";
 comments[78] = "Id Pregunta: 6559. ";


//  Id pregunta: 7251 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  El protocolo FTP es un protocolo:";
 choices[79]= new Array();
 choices[79][0] = "Seguro";
 choices[79][1] = "No orientado a conexi&oacute;n";
 choices[79][2] = "De nivel de aplicaci&oacute;n";
 choices[79][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red";
 answers[79] = choices[79][2];
 units[79] = "100";
 comments[79] = "Id Pregunta: 7251. Examen TIC B 2009";


//  Id pregunta: 7260 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  La diferencia entre los protocolos POP  e IMAP es que:";
 choices[80]= new Array();
 choices[80][0] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de recepci&oacute;n";
 choices[80][1] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de env&iacute;o y recepci&oacute;n";
 choices[80][2] = "Uno establece una comunicaci&oacute;n bidireccional y el otro no";
 choices[80][3] = "La capa de ubicaci&oacute;n de cada uno de ellos en el modelo TCP/IP es distinta";
 answers[80] = choices[80][2];
 units[80] = "106";
 comments[80] = "Id Pregunta: 7260. Examen TIC B 2009";


//  Id pregunta: 7269 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  El Centro Criptol&oacute;gico Nacional (CCN) es el organismo responsable de velar por la seguridad de las TIC en las administraciones p&uacute;blicas, y de formar en este campo a sus profesionales. El CCN depende de:";
 choices[81]= new Array();
 choices[81][0] = "El Consejo Superior para la Administraci&oacute;n Electr&oacute;nica (Ministerio de la Presidencia)";
 choices[81][1] = "La F&aacute;brica Nacional de Moneda y Timbre (Ministerio de Econom&iacute;a y Hacienda)";
 choices[81][2] = "La Direcci&oacute;n General de la Polic&iacute;a y la Guardia Civil (Ministerio del Interior)";
 choices[81][3] = "El Centro Nacional de Inteligencia (Ministerio de Defensa)";
 answers[81] = choices[81][3];
 units[81] = "111";
 comments[81] = "Id Pregunta: 7269. Examen TIC B 2009";


//  Id pregunta: 7967 Año de creación de pregunta: 2010-01-01
 questions[82]= "83)   &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?";
 choices[82]= new Array();
 choices[82][0] = " WDSL.";
 choices[82][1] = " SOAP.";
 choices[82][2] = " UDDI.";
 choices[82][3] = " XHTML.";
 answers[82] = choices[82][2];
 units[82] = "NULL";
 comments[82] = "Id Pregunta: 7967. Map 2007";


//  Id pregunta: 7984 Año de creación de pregunta: 2010-01-01
 questions[83]= "84)   Seg&uacute;n la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones, &iquest;cada cu&aacute;nto tiempo, como m&iacute;nimo, la Comisi&oacute;n del Mercado de las Telecomunicaciones llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos?";
 choices[83]= new Array();
 choices[83][0] = " Cada a&ntilde;o.";
 choices[83][1] = " Cada dos a&ntilde;os.";
 choices[83][2] = " Cada cuatro a&ntilde;os.";
 choices[83][3] = " Cada seis a&ntilde;os.";
 answers[83] = choices[83][1];
 units[83] = "NULL";
 comments[83] = "Id Pregunta: 7984. Map 2007";


//  Id pregunta: 8467 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  La RDSI (red digital de servicios integrados), ofrece una conexi&oacute;n digital extremo a extremo para el intercambio de informaci&oacute;n al integrar servicios de voz y de datos sobre la estructura de la red telef&oacute;nica p&uacute;blica. El acceso primario, en Europa, esta constituido por:";
 choices[84]= new Array();
 choices[84][0] = "2 canales B y 2 canales D";
 choices[84][1] = "30 canales B y 30 canales D";
 choices[84][2] = "30 canales B y un canal D";
 choices[84][3] = "30 canales B y dos canales D";
 answers[84] = choices[84][2];
 units[84] = "103";
 comments[84] = "Id Pregunta: 8467. Analista Ayto. Madrid 2010";


//  Id pregunta: 8516 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[85]= new Array();
 choices[85][0] = "Diagrama de Clases.";
 choices[85][1] = "Flujograma de Sistemas.";
 choices[85][2] = "Flujograma de Programas.";
 choices[85][3] = "Diagrama de Flujo de Datos.";
 answers[85] = choices[85][2];
 units[85] = "86";
 comments[85] = "Id Pregunta: 8516. Examen TIC A2 2010 interna";


//  Id pregunta: 8591 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[86]= new Array();
 choices[86][0] = "Apache Tomcat";
 choices[86][1] = "JBOSS";
 choices[86][2] = "WebSphere Application Server";
 choices[86][3] = "Glassfish";
 answers[86] = choices[86][0];
 units[86] = "115,116";
 comments[86] = "Id Pregunta: 8591. Examen TIC A2 2010 interna";


//  Id pregunta: 8622 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Se&ntilde;ale la respuesta correcta respecto a las cintas Ultrium LTO:";
 choices[87]= new Array();
 choices[87][0] = "Tienen un formato propietario";
 choices[87][1] = "Los lectores son compatibles con las cintas AIT de Sony.";
 choices[87][2] = "En su versi&oacute;n LTO 5. alcanza capacidades sin compresi&oacute;n de hasta 1,4 TB.";
 choices[87][3] = "No permiten ning&uacute;n tipo de cifrado.";
 answers[87] = choices[87][2];
 units[87] = "48";
 comments[87] = "Id Pregunta: 8622. Examen TIC A2 2010 interna";


//  Id pregunta: 8639 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[88]= new Array();
 choices[88][0] = "(A, B, C), (A, B, D).";
 choices[88][1] = "(A, B, C), (B, D).";
 choices[88][2] = "(A, B, C),  (A, D).";
 choices[88][3] = "Ya est&aacute; en 2FN.";
 answers[88] = choices[88][1];
 units[88] = "57, 58";
 comments[88] = "Id Pregunta: 8639. Examen TIC A2 2010 interna";


//  Id pregunta: 8772 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  El protocolo PXE utiliza los siguientes protocolos:";
 choices[89]= new Array();
 choices[89][0] = "BOOTP/DHCP, FTP y TCP/IP.";
 choices[89][1] = "TFTP, TCP/IP y direccionamiento est&aacute;tico en los clientes.";
 choices[89][2] = "TCP/IP, BOOTP/DHCP y TFTP.";
 choices[89][3] = "Ninguna de las anteriores.";
 answers[89] = choices[89][2];
 units[89] = "100";
 comments[89] = "Id Pregunta: 8772. Examen UPM A2 2011";


//  Id pregunta: 8780 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, se considera cesi&oacute;n o comunicaci&oacute;n de datos:";
 choices[90]= new Array();
 choices[90][0] = "Toda manifestaci&oacute;n de voluntad, libre inequ&iacute;voca, espec&iacute;fica e informada, mediante la cual el interesado comunique datos.";
 choices[90][1] = "Toda revelaci&oacute;n de datos realizada a una persona distinta del interesado.";
 choices[90][2] = "Toda revelaci&oacute;n electr&oacute;nica de datos realizada a otra persona distinta de la que los posee.";
 choices[90][3] = "Toda transferencia electr&oacute;nica de datos realizada a una persona distinta del interesado.";
 answers[90] = choices[90][1];
 units[90] = "29";
 comments[90] = "Id Pregunta: 8780. Examen UPM A2 2011";


//  Id pregunta: 8862 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  Al Sistema de Informaci&oacute;n Geogr&aacute;fica que basa su funcionalidad en una concepci&oacute;n impl&iacute;cita de las relaciones de vecindad entre los objetos geogr&aacute;ficos, se le llama:";
 choices[91]= new Array();
 choices[91][0] = "Sistema Vectorial.";
 choices[91][1] = "Sistema R&aacute;ster.";
 choices[91][2] = "Sistema georreferencial orientado a objetos.";
 choices[91][3] = "Sistema georreferencial basado en metadatos.";
 answers[91] = choices[91][1];
 units[91] = "67";
 comments[91] = "Id Pregunta: 8862. Analista Ayto. Madrid 2010";


//  Id pregunta: 9016 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[92]= new Array();
 choices[92][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[92][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[92][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[92][3] = "Ninguna de las anteriores";
 answers[92] = choices[92][2];
 units[92] = "99";
 comments[92] = "Id Pregunta: 9016. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9254 Año de creación de pregunta: 2013-01-01
 questions[93]= "94)  &iquest;Qu&eacute; es VAD?";
 choices[93]= new Array();
 choices[93][0] = "Virtual Address Descriptors";
 choices[93][1] = "Virtual Allocator Devices";
 choices[93][2] = "Descriptor de direcciones asignadas.";
 choices[93][3] = "No existe.";
 answers[93] = choices[93][0];
 units[93] = "56";
 comments[93] = "Id Pregunta: 9254. ";


//  Id pregunta: 9442 Año de creación de pregunta: 2013-01-01
 questions[94]= "95)  El t&eacute;rmino formal que se emplea para indicar que los datos de un objeto solamente pueden ser manipulados a trav&eacute;s de m&eacute;todos definidos en su interfaz se conoce como:";
 choices[94]= new Array();
 choices[94][0] = "Polimorfismo.";
 choices[94][1] = "Abstracci&oacute;n.";
 choices[94][2] = "Encapsulaci&oacute;n.";
 choices[94][3] = "Persistencia.";
 answers[94] = choices[94][2];
 units[94] = "82";
 comments[94] = "Id Pregunta: 9442. Examen AGE TIC A1 2011";


//  Id pregunta: 9506 Año de creación de pregunta: 2013-01-01
 questions[95]= "96)  En el patr&oacute;n MVC:";
 choices[95]= new Array();
 choices[95][0] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[95][1] = "Modelo son los componentes que se encargan de la carga de datos, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[95][2] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz en el servidor y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[95][3] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control del personal que accede al servidor";
 answers[95] = choices[95][0];
 units[95] = "116";
 comments[95] = "Id Pregunta: 9506. ";


//  Id pregunta: 9623 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;En qu&eacute; consisten los segmentos de memoria virtual en el Sistema Operativo Windows?";
 choices[96]= new Array();
 choices[96][0] = "Bloques de memoria virtual de longitud variable que pertenecen al mismo proceso";
 choices[96][1] = "Bloques de memoria virtual de longitud fija que pertenecen al mismo proceso";
 choices[96][2] = "Bloques memoria virtual de longitud fija que no tienen relaci&oacute;n entre ellos";
 choices[96][3] = "Ninguno de los anteriores";
 answers[96] = choices[96][3];
 units[96] = "56";
 comments[96] = "Id Pregunta: 9623. Windows no usa memoria virtual segmentada, s&oacute;lo paginada";


//  Id pregunta: 10028 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Indique cu&aacute;l de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[97]= new Array();
 choices[97][0] = "Joost";
 choices[97][1] = "Netflix";
 choices[97][2] = "Cassandra ";
 choices[97][3] = "Hadoop";
 answers[97] = choices[97][3];
 units[97] = "116";
 comments[97] = "Id Pregunta: 10028. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10049 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[98]= new Array();
 choices[98][0] = "Contiene la clave privada.";
 choices[98][1] = "Cumple la sintaxis PKCS #21.";
 choices[98][2] = "Est&aacute; codificado en un formato no binario.";
 choices[98][3] = "No se puede convertir a formato .PEM.";
 answers[98] = choices[98][0];
 units[98] = "72";
 comments[98] = "Id Pregunta: 10049. TIC A2, promoci&oacute;n interna, Examen 2013";


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


