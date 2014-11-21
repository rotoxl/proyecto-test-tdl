/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 86 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; tipos de miembros forman X/OPEN (actual Open Group)?:";
 choices[0]= new Array();
 choices[0][0] = "Distintas compa&ntilde;&iacute;as que desarrollan sistemas operativos y hardware";
 choices[0][1] = "Organizaciones de estandarizaci&oacute;n";
 choices[0][2] = "Grupos de usuarios y diversos grupos de inter&eacute;s en tecnolog&iacute;as de la informaci&oacute;n";
 choices[0][3] = "Todos los anteriores";
 answers[0] = choices[0][3];
 units[0] = "42";
 comments[0] = "Id Pregunta: 86. ";


//  Id pregunta: 142 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  El dominio de la informaci&oacute;n se articula en tres grandes partes:";
 choices[1]= new Array();
 choices[1][0] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, estructura de la informaci&oacute;n";
 choices[1][1] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[1][2] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[1][3] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, estructura de la informaci&oacute;n";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 142. ";


//  Id pregunta: 207 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  En esencia, la partici&oacute;n descompone un problema en sus partes constituyentes:";
 choices[2]= new Array();
 choices[2][0] = "Incrementando los detalles, movi&eacute;ndonos verticalmente en la jerarqu&iacute;a";
 choices[2][1] = "Descomponiendo funcionalmente el problema, movi&eacute;ndonos horizontalmente en la jerarqu&iacute;a";
 choices[2][2] = "Las dos primeras respuestas son ciertas";
 choices[2][3] = "Las dos primeras respuestas son falsas";
 answers[2] = choices[2][2];
 units[2] = "28";
 comments[2] = "Id Pregunta: 207. ";


//  Id pregunta: 426 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Seg&uacute;n el modelo de Nolan en cuatro etapas sobre la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, las t&eacute;cnicas de direcci&oacute;n que se aplican en la fase de expansi&oacute;n son:";
 choices[3]= new Array();
 choices[3][0] = "Orientadas a ventas";
 choices[3][1] = "Orientadas al control";
 choices[3][2] = "Orientadas a los recursos";
 choices[3][3] = "Informales";
 answers[3] = choices[3][0];
 units[3] = "22";
 comments[3] = "Id Pregunta: 426. nolan";


//  Id pregunta: 521 Año de creación de pregunta: 2004-01-01
 questions[4]= "5)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n puede no estar segregada de la de analista de sistemas?";
 choices[4]= new Array();
 choices[4][0] = "Programador de aplicaciones";
 choices[4][1] = "Usuario final";
 choices[4][2] = "Administrador de base de datos";
 choices[4][3] = "Aseguramiento de la calidad";
 answers[4] = choices[4][0];
 units[4] = "31, 32, 33";
 comments[4] = "Id Pregunta: 521. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 588 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  De acuerdo con David y Olson 'Management lnformation System: Conceptual Foundations, Structure and Development, Mc Graw Hill, 1985' un estudio de viabilidad debe abarcar cinco aspectos. Estos son:";
 choices[5]= new Array();
 choices[5][0] = "T&eacute;cnico, operacional, econ&oacute;mico, planificaci&oacute;n y sociol&oacute;gico.";
 choices[5][1] = "T&eacute;cnico, operacional, econ&oacute;mico, planificaci&oacute;n y pol&iacute;tico.";
 choices[5][2] = "T&eacute;cnico, sociol&oacute;gico, econ&oacute;mico, planificaci&oacute;n y motivacional.";
 choices[5][3] = "T&eacute;cnico, operacional, econ&oacute;mico, planificaci&oacute;n y motivacional.";
 answers[5] = choices[5][3];
 units[5] = "27";
 comments[5] = "Id Pregunta: 588. ";


//  Id pregunta: 623 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  Los m&eacute;todos especialmente adecuados para problemas de DMD en los que como resultado se busque o sea suficiente obtener un subconjunto de alternativas aceptables son:";
 choices[6]= new Array();
 choices[6][0] = "m&eacute;todos de concordancia";
 choices[6][1] = "m&eacute;todos de permutaci&oacute;n";
 choices[6][2] = "metodos lexicogr&aacute;ficos";
 choices[6][3] = "m&eacute;todos de la entrop&iacute;a";
 answers[6] = choices[6][0];
 units[6] = "34";
 comments[6] = "Id Pregunta: 623. ";


//  Id pregunta: 661 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[7]= new Array();
 choices[7][0] = "XPG4 Base";
 choices[7][1] = "XPG4 Commands and Utilities";
 choices[7][2] = "XPG4 Language";
 choices[7][3] = "XPG4 Internationalised System Calls and Libraries";
 answers[7] = choices[7][2];
 units[7] = "40";
 comments[7] = "Id Pregunta: 661. ";


//  Id pregunta: 729 Año de creación de pregunta: 2004-01-01
 questions[8]= "9)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[8]= new Array();
 choices[8][0] = "DXL (Document eXtended Language)";
 choices[8][1] = "DTD (Document Type Definition)";
 choices[8][2] = "DOM (Document Object Model)";
 choices[8][3] = "DML (Document Markup Language)";
 answers[8] = choices[8][1];
 units[8] = "69";
 comments[8] = "Id Pregunta: 729. Examen TIC MAP B 2004";


//  Id pregunta: 736 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[9]= new Array();
 choices[9][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[9][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[9][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[9][3] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 answers[9] = choices[9][3];
 units[9] = "30";
 comments[9] = "Id Pregunta: 736. Examen TIC MAP B 2004. Art&iacute;culo 35 de la ley";


//  Id pregunta: 970 Año de creación de pregunta: 2005-01-01
 questions[10]= "11)  Cuando se obtiene un certificado electr&oacute;nico, la clave privada generada se queda en:";
 choices[10]= new Array();
 choices[10][0] = "El navegador de internet";
 choices[10][1] = "El proveedor de servicios ";
 choices[10][2] = "Un servidor de certificados";
 choices[10][3] = "La Autoridad de Certificaci&oacute;n";
 answers[10] = choices[10][0];
 units[10] = "74";
 comments[10] = "Id Pregunta: 970. ";


//  Id pregunta: 1004 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  El comando 'kill' en Linux:";
 choices[11]= new Array();
 choices[11][0] = "Se utiliza para eliminar un proceso, siempre que se est&eacute; autorizado";
 choices[11][1] = "Se utiliza para comunicarse con los procesos y enviarles se&ntilde;ales";
 choices[11][2] = "Desconecta a un usuario";
 choices[11][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[11] = choices[11][1];
 units[11] = "53";
 comments[11] = "Id Pregunta: 1004. ";


//  Id pregunta: 1198 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Java ME:";
 choices[12]= new Array();
 choices[12][0] = "Es una versi&oacute;n de la tecnolog&iacute;a Java2 para plataformas m&oacute;viles";
 choices[12][1] = "Es una version de la tecnolog&iacute;a Java2 orientada a electrodom&eacute;sticos";
 choices[12][2] = "Es una version de la tecnolog&iacute;a Java2 orientada a sistemas dom&oacute;ticos";
 choices[12][3] = "Todas las anteriores respuestas son falsas";
 answers[12] = choices[12][0];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1198. ";


//  Id pregunta: 1592 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[13]= new Array();
 choices[13][0] = "&lt;/TITLE&gt;";
 choices[13][1] = "&lt;TITLE&gt;";
 choices[13][2] = "/&lt;TITLE&gt;";
 choices[13][3] = "/TITLE";
 answers[13] = choices[13][0];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1592. ";


//  Id pregunta: 1595 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  En los sistemas gestores de bases de datos (SGBD) , &iquest;qu&eacute; diferencia hay entre el DDL y el DML?";
 choices[14]= new Array();
 choices[14][0] = "El DDL se utiliza embebido mediante un precompilador mientras que el DML solamente se puede utilizar con un compilador extendido.";
 choices[14][1] = "El DDL sirve para definir el esquema conceptual y los diferentes esquemas externos de la base de datos  mientras que el DML sirve para gestionar la informaci&oacute;n incluida en dicha base.";
 choices[14][2] = "El DDL se utiliza para definir y mantener las estructuras de la base de datos en el nivel conceptual mientras que el DML sirve para la definici&oacute;n y mantenimiento de las vistas en el nivel externo (usuario).";
 choices[14][3] = "El DDL es el lenguaje de base de datos de los sistemas MVS y el DML es el lenguaje de base de datos para los entornos DOS/VSE.";
 answers[14] = choices[14][1];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1595. ";


//  Id pregunta: 1767 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  En Java a una colecci&oacute;n de clases relacionadas se denomina:";
 choices[15]= new Array();
 choices[15][0] = "Superset o superconjunto.";
 choices[15][1] = "Package o paquete.";
 choices[15][2] = "Superclass o Superclase.";
 choices[15][3] = "Colection o Colecci&oacute;n.";
 answers[15] = choices[15][1];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1767. ";


//  Id pregunta: 1789 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Se&ntilde;ale qu&eacute; lenguaje intermedio espec&iacute;fico de representaci&oacute;n de conocimiento se utiliza en el &aacute;rea de inteligencia artificial";
 choices[16]= new Array();
 choices[16][0] = "XML";
 choices[16][1] = "STRIPS";
 choices[16][2] = "KIF";
 choices[16][3] = "EXML";
 answers[16] = choices[16][2];
 units[16] = "63";
 comments[16] = "Id Pregunta: 1789. ";


//  Id pregunta: 1805 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  La iniciativa ADL (Advanced Distributed Learning) public&oacute; en el a&ntilde;o 2000 un modelo que trata de estandarizar los contenidos formativos digitales y que se conoce como";
 choices[17]= new Array();
 choices[17][0] = "SCORM";
 choices[17][1] = "B-Learning";
 choices[17][2] = "DFC";
 choices[17][3] = "ADL 2000";
 answers[17] = choices[17][0];
 units[17] = "66";
 comments[17] = "Id Pregunta: 1805. ";


//  Id pregunta: 2115 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Bajo qu&eacute; normas de la serie ISO-9000 puede registrarse una empresa?:";
 choices[18]= new Array();
 choices[18][0] = "9001, 9002 y 9003";
 choices[18][1] = "S&oacute;lo 9001";
 choices[18][2] = "9000, 9001, 9002, 9003 y 9004";
 choices[18][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[18] = choices[18][0];
 units[18] = "92";
 comments[18] = "Id Pregunta: 2115. ";


//  Id pregunta: 2164 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  Indicar la respuesta verdadera respecto a EFQM:";
 choices[19]= new Array();
 choices[19][0] = "El Modelo Europeo de Calidad se desarroll&oacute; en 1991 bajo la iniciativa de la European Foundation for QualityManagement (EFQM), formada en 1988 por un grupo de catorce importantes empresas europeas. En la actualidad la componen m&aacute;s de 400 miembros";
 choices[19][1] = "El modelo identific&oacute; una serie de elementos que ser&aacute;n la base para la Gesti&oacute;n de Calidad Total (TQM) dentro de las organizaciones y que se pueden agrupar en dos grandes bloques que podemos denominar: el C&oacute;mo y el Qu&eacute; o tambi&eacute;n los Agentes y los Resultados";
 choices[19][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[19][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[19] = choices[19][3];
 units[19] = "92";
 comments[19] = "Id Pregunta: 2164. ";


//  Id pregunta: 2371 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Es cierto decir que la &quot;reingenier&iacute;a&quot;:";
 choices[20]= new Array();
 choices[20][0] = "Suele usarse para ampliar la vida &uacute;til de un sistema.";
 choices[20][1] = "Es una ingenier&iacute;a inversa hecha con herramientas de asistencia computerizada.";
 choices[20][2] = "No tiene sentido si se hace usando tecnolog&iacute;a de objetos, que por definici&oacute;n son reutilizables.";
 choices[20][3] = "S&oacute;lo se usa cuando se encuentran fallos de funcionalidad.";
 answers[20] = choices[20][0];
 units[20] = "91";
 comments[20] = "Id Pregunta: 2371. ";


//  Id pregunta: 2782 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  En M&Eacute;TRICA 3, la definici&oacute;n de la Arquitectura del Sistema, se lleva a cabo en:";
 choices[21]= new Array();
 choices[21][0] = "El An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[21][1] = "La Planificaci&oacute;n de Sistemas.";
 choices[21][2] = "El Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[21][3] = "La Especificaci&oacute;n Funcional del Sistema.";
 answers[21] = choices[21][2];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2782. ";


//  Id pregunta: 2843 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  Un filtro de Prewitt es ";
 choices[22]= new Array();
 choices[22][0] = "un filtro de mediana empleado para realizar realces geom&eacute;tricos";
 choices[22][1] = "un filtro de mediana empleado para realizar realces radiom&eacute;tricos";
 choices[22][2] = "es similar en concepto a un filtro de Tukey";
 choices[22][3] = "un filtro paso alto empleado para realizar realces geom&eacute;tricos";
 answers[22] = choices[22][3];
 units[22] = "93";
 comments[22] = "Id Pregunta: 2843. ";


//  Id pregunta: 2869 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  Conjunto de planes, m&eacute;todos y herramientas dirigidas a modernizar, consolidar y coordinar las aplicaciones inform&aacute;ticas de una empresa";
 choices[23]= new Array();
 choices[23][0] = "EAI";
 choices[23][1] = "EDI";
 choices[23][2] = "Sistemas de Soporte a la Decisi&oacute;n";
 choices[23][3] = "ERP";
 answers[23] = choices[23][0];
 units[23] = "77";
 comments[23] = "Id Pregunta: 2869. ";


//  Id pregunta: 2967 Año de creación de pregunta: 2004-01-01
 questions[24]= "25)  El sistema cableado del tipo conocido como de Par Trenzado sin Apantallar es:";
 choices[24]= new Array();
 choices[24][0] = "STP";
 choices[24][1] = "UTP";
 choices[24][2] = "FTP";
 choices[24][3] = "OM1";
 answers[24] = choices[24][1];
 units[24] = "99";
 comments[24] = "Id Pregunta: 2967. ";


//  Id pregunta: 3248 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso primario RDSI en Europa?:";
 choices[25]= new Array();
 choices[25][0] = "16 kbps";
 choices[25][1] = "32 kbps";
 choices[25][2] = "64 kbps";
 choices[25][3] = "128 kbps";
 answers[25] = choices[25][2];
 units[25] = "103";
 comments[25] = "Id Pregunta: 3248. ";


//  Id pregunta: 3534 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  En las redes locales, &iquest;qu&eacute; funciones tienen los repetidores?:";
 choices[26]= new Array();
 choices[26][0] = "Repiten los paquetes como se&ntilde;ales el&eacute;ctricas de una red a otra";
 choices[26][1] = "Repiten los paquetes incompletos para que sean reenviados completos";
 choices[26][2] = "Eliminan el ruido de las se&ntilde;ales en la l&iacute;nea y emiten los paquetes regenerados";
 choices[26][3] = "Repiten y ampl&iacute;an las se&ntilde;ales el&eacute;ctricas, incluyendo el ruido";
 answers[26] = choices[26][2];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3534. ";


//  Id pregunta: 4182 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[27]= new Array();
 choices[27][0] = "RJ11 de 6 contactos";
 choices[27][1] = "RJ45 de 6 contactos";
 choices[27][2] = "RJ45 de 8 contactos";
 choices[27][3] = "RJ49 para cables STP";
 answers[27] = choices[27][2];
 units[27] = "99";
 comments[27] = "Id Pregunta: 4182. ";


//  Id pregunta: 4253 Año de creación de pregunta: 2007-01-01
 questions[28]= "29)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[28]= new Array();
 choices[28][0] = "La Ley 30/1992 de 26 de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, que dedica un art&iacute;culo al impulso del empleo y aplicaci&oacute;n de las t&eacute;cnicas y medios electr&oacute;nicos, inform&aacute;ticos y telem&aacute;ticos, por parte de la Administraci&oacute;n";
 choices[28][1] = "El Real Decreto 1553/2005 por el que se regula la expedici&oacute;n del Documento Nacional de Identidad y sus certificados de firma electr&oacute;nica";
 choices[28][2] = "La Ley 24/2001, de 27 de diciembre, de Medidas Fiscales, Administrativas y del Orden Social, que regula el establecimiento de registros telem&aacute;ticos y  notificaciones telem&aacute;ticas";
 choices[28][3] = "Todas las anteriores";
 answers[28] = choices[28][3];
 units[28] = "30";
 comments[28] = "Id Pregunta: 4253. ";


//  Id pregunta: 4472 Año de creación de pregunta: 2007-01-01
 questions[29]= "30)  Seg&uacute;n M&eacute;trica V3 &iquest;Donde comenzar&iacute;a el establecimiento del plan de aseguramiento de calidad?";
 choices[29]= new Array();
 choices[29][0] = "En el estudio de viabilidad del sistema.";
 choices[29][1] = "En el proceso de dise&ntilde;o.";
 choices[29][2] = "A la hora de la aceptaci&oacute;n del sistema.";
 choices[29][3] = "Una vez finalizado el mantenimiento del sistema de informaci&oacute;n.";
 answers[29] = choices[29][0];
 units[29] = "86";
 comments[29] = "Id Pregunta: 4472. ";


//  Id pregunta: 4497 Año de creación de pregunta: 2007-01-01
 questions[30]= "31)  Una caracter&iacute;stica fundamental de XML signature es que:";
 choices[30]= new Array();
 choices[30][0] = " Puede firmar parte o Ia totalidad de un documento XML";
 choices[30][1] = "Puede firmar un documento RTF y convertirlo en un documento XML.";
 choices[30][2] = "Solo puede firmar un documento XML completo.";
 choices[30][3] = "Solo puede firmar documentos RTF.";
 answers[30] = choices[30][0];
 units[30] = "111";
 comments[30] = "Id Pregunta: 4497. ";


//  Id pregunta: 4664 Año de creación de pregunta: 2007-01-01
 questions[31]= "32)  HSDPA corresponde a la generaci&oacute;n m&oacute;vil";
 choices[31]= new Array();
 choices[31][0] = "4G";
 choices[31][1] = "3.5G";
 choices[31][2] = "5G";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = choices[31][1];
 units[31] = "108";
 comments[31] = "Id Pregunta: 4664. ";


//  Id pregunta: 4712 Año de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un t&eacute;rmino sobre Internet?";
 choices[32]= new Array();
 choices[32][0] = "Cookies.";
 choices[32][1] = "Spam.";
 choices[32][2] = "Netnannies.";
 choices[32][3] = "Brownies.";
 answers[32] = choices[32][3];
 units[32] = "112";
 comments[32] = "Id Pregunta: 4712. Examen 2006 JCYL";


//  Id pregunta: 4767 Año de creación de pregunta: 2007-01-01
 questions[33]= "34)  La diferencia esencial entre TCP y UDP es";
 choices[33]= new Array();
 choices[33][0] = "A diferencia de UDP, TCP dispone de mecanismos para el control de flujo y la transmisi&oacute;n fiable de paquetes";
 choices[33][1] = "A diferencia de UDP, TCP ofrece a la capa superior el servicio de multiplexaci&oacute;n por puerto";
 choices[33][2] = "A dferencia de UDP, TCP dispone de mecanismos para detectar errores de transmisi&oacute;n";
 choices[33][3] = "Todas las anteriores son ciertas";
 answers[33] = choices[33][0];
 units[33] = "100";
 comments[33] = "Id Pregunta: 4767. ";


//  Id pregunta: 4838 Año de creación de pregunta: 2007-01-01
 questions[34]= "35)  Sea un sistema de memoria virtual paginada con direcciones l&oacute;gicas de 32 bits que proporcionan un espacio virtualde 2^20 (2 elevado a 20) p&aacute;ginas y con una memoria f&iacute;sica de 32 MB. &iquest;Cu&aacute;nto ocupar&aacute; la tabla de marcos dep&aacute;gina que emplea el sistema operativo si cada entrada de la misma ocupa 32 bits?";
 choices[34]= new Array();
 choices[34][0] = "32 kB";
 choices[34][1] = "4 MB";
 choices[34][2] = "1 MB";
 choices[34][3] = "8 kB";
 answers[34] = choices[34][0];
 units[34] = "97";
 comments[34] = "Id Pregunta: 4838. ";


//  Id pregunta: 4862 Año de creación de pregunta: 2007-01-01
 questions[35]= "36)  En relaci&oacute;n a las m&eacute;tricas y evaluaci&oacute;n de la Calidad del software, &iquest;cu&aacute;l de las siguientes afirmaciones NO escierta?";
 choices[35]= new Array();
 choices[35][0] = "La t&eacute;cnica de Halstead es una m&eacute;trica de la fiabilidad del software";
 choices[35][1] = "Las m&eacute;tricas de complejidad eval&uacute;an la facilidad de mantenimiento del software";
 choices[35][2] = "El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de productividad del software";
 choices[35][3] = "COCOMO (Constructive Cost Model) es un modelo de estimaci&oacute;n algor&iacute;tmico";
 answers[35] = choices[35][0];
 units[35] = "88";
 comments[35] = "Id Pregunta: 4862. ";


//  Id pregunta: 5079 Año de creación de pregunta: 2003-01-01
 questions[36]= "37)  En la estructura de la trama del protocolo HDLC (&quot;High level Data Link Control&quot;) el n&uacute;mero de bits del delimitadordel comienzo de la trama es:";
 choices[36]= new Array();
 choices[36][0] = "Variable";
 choices[36][1] = "8";
 choices[36][2] = "16";
 choices[36][3] = "32";
 answers[36] = choices[36][1];
 units[36] = "101";
 comments[36] = "Id Pregunta: 5079. Examen TIC A 2007";


//  Id pregunta: 5184 Año de creación de pregunta: 2003-01-01
 questions[37]= "38)  Se&ntilde;ale la respuesta verdadera con respecto a los atributos en el modelo E/R:";
 choices[37]= new Array();
 choices[37][0] = "Cada atributo toma valores de un dominio diferenciado y no compartido";
 choices[37][1] = "Al atributo que identifica un&iacute;vocamente cada una de las ocurrencias de la entidad principal se le denomina atributo fuerte";
 choices[37][2] = "Existen atributos simples, mixtos y compuestos";
 choices[37][3] = "Existen atributos monovalorados y multivalorados";
 answers[37] = choices[37][3];
 units[37] = "80";
 comments[37] = "Id Pregunta: 5184. ";


//  Id pregunta: 5189 Año de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de desarrollo de sistemas distribuidos basados en objetos no es una tecnolog&iacute;a Java de Sun Microsystems?";
 choices[38]= new Array();
 choices[38][0] = "RMI";
 choices[38][1] = "JINI";
 choices[38][2] = "EJB";
 choices[38][3] = "CORBA";
 answers[38] = choices[38][3];
 units[38] = "82";
 comments[38] = "Id Pregunta: 5189. ";


//  Id pregunta: 5668 Año de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Cual de las siguientes empresas no est&aacute; entre las que desarrollaron originalmente el protocolo WS-Security?";
 choices[39]= new Array();
 choices[39][0] = "IBM";
 choices[39][1] = "Microsoft";
 choices[39][2] = "VeriSign";
 choices[39][3] = "SUN";
 answers[39] = choices[39][3];
 units[39] = "113";
 comments[39] = "Id Pregunta: 5668. ";


//  Id pregunta: 5728 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes no es un tipo de herramienta de Groupware?";
 choices[40]= new Array();
 choices[40][0] = "Herramientas de coordinaci&oacute;n";
 choices[40][1] = "Herramientas de control";
 choices[40][2] = "Herramientas de colaboraci&oacute;n";
 choices[40][3] = "Herramientas de comunicaci&oacute;n";
 answers[40] = choices[40][1];
 units[40] = "71";
 comments[40] = "Id Pregunta: 5728. ";


//  Id pregunta: 5754 Año de creación de pregunta: 2009-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de estos diagramas de UML no est&aacute; categorizado como un diagrama de comportamiento?";
 choices[41]= new Array();
 choices[41][0] = "Diagrama de interacci&oacute;n.";
 choices[41][1] = "Diagrama de casos de uso.";
 choices[41][2] = "Diagrama de objetos.";
 choices[41][3] = "Diagrama de actividad.";
 answers[41] = choices[41][2];
 units[41] = "82";
 comments[41] = "Id Pregunta: 5754. ";


//  Id pregunta: 5758 Año de creación de pregunta: 2009-01-01
 questions[42]= "43)  En cuanto a la licencia LGPL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[42]= new Array();
 choices[42][0] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate del driver de un dispositivo.";
 choices[42][1] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate de una librer&iacute;a sin interfaz con el usuario.";
 choices[42][2] = "Un software con licencia LGPL puede utilizar librer&iacute;as propietarias, y el conjunto tener la licencia LGPL.";
 choices[42][3] = "Un software propietario puede utilizar librer&iacute;as LGPL sin dejar de ser propietario.";
 answers[42] = choices[42][3];
 units[42] = "61";
 comments[42] = "Id Pregunta: 5758. ";


//  Id pregunta: 5772 Año de creación de pregunta: 2009-01-01
 questions[43]= "44)  El derecho de acceso al que se refiere el Art. 15 de la LOPD s&oacute;lo podr&aacute; ser ejercitado a intervalos de";
 choices[43]= new Array();
 choices[43][0] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo en el plazo de 6 meses";
 choices[43][1] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo antes";
 choices[43][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo en el plazo de 2 meses";
 choices[43][3] = "10 d&iacute;as";
 answers[43] = choices[43][1];
 units[43] = "29";
 comments[43] = "Id Pregunta: 5772. ";


//  Id pregunta: 5907 Año de creación de pregunta: 2009-01-01
 questions[44]= "45)  &iquest;En cu&aacute;l de las siguientes metodolog&iacute;as de desarrollo de software NO se utilizan Diagramas de Flujo de Datos?";
 choices[44]= new Array();
 choices[44][0] = "De Marco";
 choices[44][1] = "Jackson";
 choices[44][2] = "Gane &amp; Sarson";
 choices[44][3] = "Yourdon/Constantine";
 answers[44] = choices[44][1];
 units[44] = "79";
 comments[44] = "Id Pregunta: 5907. MAP 2008 A1";


//  Id pregunta: 5943 Año de creación de pregunta: 2009-01-01
 questions[45]= "46)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[45]= new Array();
 choices[45][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursos del mismo";
 choices[45][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permite compartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes";
 choices[45][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemas operativos en una m&aacute;quina";
 choices[45][3] = "Es un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de la Virtualization API Standard que realizan los sistemas operativos hu&eacute;spedes";
 answers[45] = choices[45][2];
 units[45] = "119";
 comments[45] = "Id Pregunta: 5943. ";


//  Id pregunta: 5961 Año de creación de pregunta: 2010-01-01
 questions[46]= "47)  Seg&uacute;n la Norma ISO 9000:2000, la relaci&oacute;n entre el resultado alcanzado y los recursos utilizados, se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Eficiencia";
 choices[46][1] = "Eficacia";
 choices[46][2] = "Proceso";
 choices[46][3] = "Requisito";
 answers[46] = choices[46][0];
 units[46] = "87";
 comments[46] = "Id Pregunta: 5961. Castilla La Mancha 2009";


//  Id pregunta: 6054 Año de creación de pregunta: 2010-01-01
 questions[47]= "48)  El CCITT ha pasado a denominarse:";
 choices[47]= new Array();
 choices[47][0] = "UIT-T o ITU-T.";
 choices[47][1] = "CEPT.";
 choices[47][2] = "IEEE.";
 choices[47][3] = "ETSI.";
 answers[47] = choices[47][0];
 units[47] = "42";
 comments[47] = "Id Pregunta: 6054. TIC A 2009";


//  Id pregunta: 6081 Año de creación de pregunta: 2010-01-01
 questions[48]= "49)  Seleccione la opci&oacute;n correcta:";
 choices[48]= new Array();
 choices[48][0] = "SOAP es un protocolo para el intercambio de mensajes SOA";
 choices[48][1] = "Dos aplicaciones que se comunican mediante SOAP deben estar escritas en el mismo lenguaje de programaci&oacute;n.";
 choices[48][2] = "Los mensajes SOAP se pueden transportar, entre otros medios, sobre HTTP, SMTP o palomas mensajeras.";
 choices[48][3] = "Para que dos aplicaciones se comuniquen mediante SOAP siempre ser&aacute; necesario alterar las configuraciones de los posibles firewalls entre ellas.";
 answers[48] = choices[48][2];
 units[48] = "51";
 comments[48] = "Id Pregunta: 6081. GSI 2008";


//  Id pregunta: 6274 Año de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Qui&eacute;n defini&oacute; el modelo de ciclo de vida en casacada?";
 choices[49]= new Array();
 choices[49][0] = "Roger Pressman";
 choices[49][1] = "Roger Smith";
 choices[49][2] = "Winston Royce ";
 choices[49][3] = "Carma McClure";
 answers[49] = choices[49][2];
 units[49] = "76";
 comments[49] = "Id Pregunta: 6274. ";


//  Id pregunta: 6293 Año de creación de pregunta: 2010-01-01
 questions[50]= "51)  Es una t&eacute;cnica de alto nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Brainstorming";
 choices[50][1] = "An&aacute;lisis de Mercado";
 choices[50][2] = "Factores Cr&iacute;ticos de &Eacute;xito";
 choices[50][3] = "Entrevistas";
 answers[50] = choices[50][2];
 units[50] = "78";
 comments[50] = "Id Pregunta: 6293. ";


//  Id pregunta: 6324 Año de creación de pregunta: 2010-01-01
 questions[51]= "52)  La cl&aacute;usula INSERT para inserci&oacute;n de datos";
 choices[51]= new Array();
 choices[51][0] = "Tan s&oacute;lo permite la inserci&oacute;n de una tupla cada vez.";
 choices[51][1] = "Puede permitir la inserci&oacute;n de m&aacute;s de una tupla al mismo tiempo.";
 choices[51][2] = "No permite insertar valores nulos.";
 choices[51][3] = "Obliga a que la inserci&oacute;n de los valores sea en el orden en que se cre&oacute; la tabla.";
 answers[51] = choices[51][1];
 units[51] = "58";
 comments[51] = "Id Pregunta: 6324. ";


//  Id pregunta: 6400 Año de creación de pregunta: 2010-01-01
 questions[52]= "53)  El &oacute;rgano competente para la expedici&oacute;n del DNIe es:";
 choices[52]= new Array();
 choices[52][0] = "Ministerio de Defensa";
 choices[52][1] = "Ministerio del Interior";
 choices[52][2] = "Ministerio de Presidencia";
 choices[52][3] = "Secretaria de Estado de Funci&oacute;n P&uacute;blica";
 answers[52] = choices[52][1];
 units[52] = "30";
 comments[52] = "Id Pregunta: 6400. ";


//  Id pregunta: 6409 Año de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Qu&eacute; significa DRM?";
 choices[53]= new Array();
 choices[53][0] = "Digital Rights Management";
 choices[53][1] = "Direct Rights Management";
 choices[53][2] = "Direct Restriction Management";
 choices[53][3] = "Digital Restrictions Management";
 answers[53] = choices[53][0];
 units[53] = "37";
 comments[53] = "Id Pregunta: 6409. ";


//  Id pregunta: 6424 Año de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Cu&aacute;ntas pautas se definen en total en las gu&iacute;as WCAG 2.0?";
 choices[54]= new Array();
 choices[54][0] = "12";
 choices[54][1] = "14";
 choices[54][2] = "25";
 choices[54][3] = "81";
 answers[54] = choices[54][0];
 units[54] = "39";
 comments[54] = "Id Pregunta: 6424. ";


//  Id pregunta: 6516 Año de creación de pregunta: 2010-01-01
 questions[55]= "56)  El c&oacute;digo intermedio que se ejecuta en una m&aacute;quina virtual java (JVM) se denomina:";
 choices[55]= new Array();
 choices[55][0] = "bytecode";
 choices[55][1] = "class";
 choices[55][2] = "jar";
 choices[55][3] = "applet";
 answers[55] = choices[55][0];
 units[55] = "60";
 comments[55] = "Id Pregunta: 6516. ";


//  Id pregunta: 6527 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  Una actividad propia de la gesti&oacute;n de problemas es";
 choices[56]= new Array();
 choices[56][0] = "La prevenci&oacute;n proactiva de los problemas";
 choices[56][1] = "Generaci&oacute;n de informaci&oacute;n ejecutiva";
 choices[56][2] = "Identificaci&oacute;n de tendencias";
 choices[56][3] = "Todas las respuestas anteriores son correctas";
 answers[56] = choices[56][3];
 units[56] = "98";
 comments[56] = "Id Pregunta: 6527. ";


//  Id pregunta: 6536 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  La gu&iacute;a de servicios ISO 9004 sigue un enfoque basado en procesos, como";
 choices[57]= new Array();
 choices[57][0] = "Responsabilidad de la direcci&oacute;n";
 choices[57][1] = "Realizaci&oacute;n del producto";
 choices[57][2] = "Medici&oacute;n, an&aacute;lisis y mejora";
 choices[57][3] = "Todas las respuestas anteriores son correctas";
 answers[57] = choices[57][3];
 units[57] = "92";
 comments[57] = "Id Pregunta: 6536. ";


//  Id pregunta: 6608 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  En el an&aacute;lisis estructurado, al hablar de diccionario de datos se puede diferenciar entre:";
 choices[58]= new Array();
 choices[58][0] = "Diccionarios Activos y Pasivos";
 choices[58][1] = "Diccionario de Datos y de Procesos";
 choices[58][2] = "Diccionarios Funcionales y Descriptivos";
 choices[58][3] = "En el an&aacute;lisis estructurado no se diferencian tipos de diccionarios";
 answers[58] = choices[58][0];
 units[58] = "81";
 comments[58] = "Id Pregunta: 6608. ";


//  Id pregunta: 7175 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  La entidad que identifica de forma inequ&iacute;voca al solicitante de un certificado electr&oacute;nico  es la:";
 choices[59]= new Array();
 choices[59][0] = "Autoridad de Registro";
 choices[59][1] = "Autoridad de Certificaci&oacute;n";
 choices[59][2] = "Autoridad de Revocaci&oacute;n";
 choices[59][3] = "Autoridad de Usurpaci&oacute;n";
 answers[59] = choices[59][0];
 units[59] = "73,74";
 comments[59] = "Id Pregunta: 7175. Examen TIC B 2009";


//  Id pregunta: 7289 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  La recomendaci&oacute;n de la UIT H.323";
 choices[60]= new Array();
 choices[60][0] = "Se utiliza &uacute;nicamente en redes RDSI";
 choices[60][1] = "Permite audioconferencia pero no videoconferencia";
 choices[60][2] = "Se le puede a&ntilde;adir seguridad seg&uacute;n la recomendaci&oacute;n de la UIT H.325";
 choices[60][3] = "Fue definida para redes de conmutaci&oacute;n de circuitos";
 answers[60] = choices[60][2];
 units[60] = "117";
 comments[60] = "Id Pregunta: 7289. Examen TIC B 2009";


//  Id pregunta: 7309 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  Indique cu&aacute;l de los siguientes es un lenguaje de marcado empleado en conversi&oacute;n texto-voz (TTS):";
 choices[61]= new Array();
 choices[61][0] = "TTSXML";
 choices[61][1] = "SVML";
 choices[61][2] = "SSML";
 choices[61][3] = "Todos son lenguajes de marcado utilizados en TTS";
 answers[61] = choices[61][2];
 units[61] = "94";
 comments[61] = "Id Pregunta: 7309. ";


//  Id pregunta: 7324 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[62]= new Array();
 choices[62][0] = "3D Secure";
 choices[62][1] = "UCAF";
 choices[62][2] = "Urbinet ";
 choices[62][3] = "SET ";
 answers[62] = choices[62][2];
 units[62] = "70";
 comments[62] = "Id Pregunta: 7324. ";


//  Id pregunta: 8171 Año de creación de pregunta: 2011-01-01
 questions[63]= "64)  Respecto a AJAX. &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[63]= new Array();
 choices[63][0] = "En lo referente a &quot;cross-scripting&quot; (ejecuci&oacute;n de c&oacute;digo de diferente dominio), est&aacute; sujeto a la pol&iacute;tica &quot;same origin&quot; implementada en la sandbox del navegador.";
 choices[63][1] = "Realizar una petici&oacute;n v&iacute;a XMLHttpRequest (XHR) no modifica el historial del navegador.";
 choices[63][2] = "No ha sido estandarizado por una Recomendaci&oacute;n del World Wide Web Consortium (W3C).";
 choices[63][3] = "Su uso obliga a refrescar una parte de la p&aacute;gina del navegador.";
 answers[63] = choices[63][3];
 units[63] = "69";
 comments[63] = "Id Pregunta: 8171. Examen TIC A1 2010";


//  Id pregunta: 8172 Año de creación de pregunta: 2011-01-01
 questions[64]= "65)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[64][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[64][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[64][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[64] = choices[64][1];
 units[64] = "86";
 comments[64] = "Id Pregunta: 8172. Examen TIC A1 2010";


//  Id pregunta: 8285 Año de creación de pregunta: 2011-01-01
 questions[65]= "66)  El fichero JAR de una distribuci&oacute;n JAVA , NO contiene:";
 choices[65]= new Array();
 choices[65][0] = "El fichero manifest.mf.";
 choices[65][1] = "Un fichero .class por cada clase compilada.";
 choices[65][2] = "Un fichero .sf por cada fichero firmado de la distribuci&oacute;n.";
 choices[65][3] = "Un fichero .crt con cada certificado digital utilizado para firmar las clases.";
 answers[65] = choices[65][3];
 units[65] = "60";
 comments[65] = "Id Pregunta: 8285. Examen TIC A1 2010";


//  Id pregunta: 8431 Año de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes programas es la continuaci&oacute;n del programa IDABC finalizado en diciembre de 2009?";
 choices[66]= new Array();
 choices[66][0] = "AIF";
 choices[66][1] = "IDA";
 choices[66][2] = "ISA";
 choices[66][3] = "IMA";
 answers[66] = choices[66][2];
 units[66] = "30";
 comments[66] = "Id Pregunta: 8431. ";


//  Id pregunta: 8469 Año de creación de pregunta: 2011-01-01
 questions[67]= "68)  La norma DECT (Digital Enhanced Cordless Telecomunications) contempla el modode acceso:";
 choices[67]= new Array();
 choices[67][0] = "TDMA/ TDD";
 choices[67][1] = "GFSK";
 choices[67][2] = "FSK";
 choices[67][3] = "CDMA";
 answers[67] = choices[67][0];
 units[67] = "107,108";
 comments[67] = "Id Pregunta: 8469. Analista Ayto. Madrid 2010";


//  Id pregunta: 8523 Año de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; tama&ntilde;o tiene una celda ATM?";
 choices[68]= new Array();
 choices[68][0] = "48 bytes, de los cuales 44 son para transmisi&oacute;n de informaci&oacute;n y, el resto, para uso de campos de control.";
 choices[68][1] = "El campo de direcci&oacute;n o cabecera tiene una longitud de 2 octetos, ampiable hasta 4 y un campo de informaci&oacute;n de entre 1 y 8000 bytes (1600 por defecto).";
 choices[68][2] = "Los doce primeros octetos est&aacute;n presentes en cada celda, como cabecera de control, con un cuerpo de informaci&oacute;n de longitud variable.";
 choices[68][3] = "53 bytes, de los cuales 48 (opcionalmente 44) son para trasiego de informaci&oacute;n y, los restantes, para uso de campos de control (cabecera) con datos de direccionamiento";
 answers[68] = choices[68][3];
 units[68] = "109";
 comments[68] = "Id Pregunta: 8523. Examen TIC A2 2010 interna";


//  Id pregunta: 8656 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  En la recomendaci&oacute;n X.25, la capa f&iacute;sica en la interfaz est&aacute; definida por el protocolo:";
 choices[69]= new Array();
 choices[69][0] = "V.25";
 choices[69][1] = "V.21";
 choices[69][2] = "X.21";
 choices[69][3] = "X.24";
 answers[69] = choices[69][2];
 units[69] = "103";
 comments[69] = "Id Pregunta: 8656. Examen UPM A2 2011";


//  Id pregunta: 8729 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  Un servidor DHCP no puede proveer a un equipo cliente de la configuraci&oacute;n de";
 choices[70]= new Array();
 choices[70][0] = "M&aacute;scara de subred";
 choices[70][1] = "Tiempo m&aacute;ximo de espera del ARP";
 choices[70][2] = "Servidor SMTP";
 choices[70][3] = "Software antivirus";
 answers[70] = choices[70][3];
 units[70] = "100";
 comments[70] = "Id Pregunta: 8729. Examen UPM A2 2011";


//  Id pregunta: 8740 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  De acuerdo con la definici&oacute;n establecida en el Real Decreto 1720/2007, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque NO lo realizase materialmente es:";
 choices[71]= new Array();
 choices[71][0] = "El encargado del fichero o del tratamiento.";
 choices[71][1] = "El responsable del fichero o del tratamiento.";
 choices[71][2] = "El destinatario o cesionario del fichero o del tratamiento";
 choices[71][3] = "El propietario del fichero o del tratamiento.";
 answers[71] = choices[71][1];
 units[71] = "29";
 comments[71] = "Id Pregunta: 8740. Examen TIC A2 2010 interna";


//  Id pregunta: 8759 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes NO es un lenguaje orientado a objetos?";
 choices[72]= new Array();
 choices[72][0] = "Java.";
 choices[72][1] = "C.";
 choices[72][2] = "Smalltalk.";
 choices[72][3] = "Ada.";
 answers[72] = choices[72][1];
 units[72] = "82, 84";
 comments[72] = "Id Pregunta: 8759. Examen TIC A2 2010 interna";


//  Id pregunta: 8764 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)   En la planificaci&oacute;n por prioridad circular o &quot;Round Robin&quot;:";
 choices[73]= new Array();
 choices[73][0] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de tiempo de ejecuci&oacute;n restante m&aacute;s corto";
 choices[73][1] = "De acuerdo a su prioridad, cada proceso preparado pasa a ejecuci&oacute;n durante una cota de tiempo llamada &quot;cuanto&quot;";
 choices[73][2] = "De forma secuencial, cada proceso preparado pasa a ejecuci&oacute;n durante un intervalo de tiempo llamada &quot;cuanto&quot;";
 choices[73][3] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de mayor prioridad asignada";
 answers[73] = choices[73][2];
 units[73] = "52";
 comments[73] = "Id Pregunta: 8764. Examen TIC A2 2010 interna";


//  Id pregunta: 8811 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[74]= new Array();
 choices[74][0] = "&lt;% y %&gt;";
 choices[74][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[74][2] = "&lt;!- --&gt;";
 choices[74][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[74] = choices[74][0];
 units[74] = "59, 115";
 comments[74] = "Id Pregunta: 8811. Examen UPM A2 2011";


//  Id pregunta: 8817 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  Sobre la tecnolog&iacute;a ASP (Active Server Pages) se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[75]= new Array();
 choices[75][0] = "A diferencia de ASP.net, ASP utiliza el &quot;Common Language Runtime (CLR)&quot; para generar el c&oacute;digo HTML";
 choices[75][1] = "S&oacute;lo es compatible con el servidor US (Internet Information Server)";
 choices[75][2] = "Es un lenguaje de script que se incluye en un mismo archivo junto con el c&oacute;digo HTML";
 choices[75][3] = "Permite la utilizaci&oacute;n de diversos lenguajes de programaci&oacute;n, entre ellos Visual Basic Script y JScript";
 answers[75] = choices[75][0];
 units[75] = "115";
 comments[75] = "Id Pregunta: 8817. Examen UPM A2 2011";


//  Id pregunta: 8952 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  El manejador de dispositivos es:";
 choices[76]= new Array();
 choices[76][0] = "Un p rograma de usuario final";
 choices[76][1] = "Hardware que controla un dispositivo";
 choices[76][2] = "Software que controla un dispositivo";
 choices[76][3] = "Todas las anteriores son ciertas";
 answers[76] = choices[76][2];
 units[76] = "53,54";
 comments[76] = "Id Pregunta: 8952. ";


//  Id pregunta: 9023 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Para dimensionar los Centros de Atenci&oacute;n de Llamadas (Call Center) hay que tener en cuenta, a la hora de determinar el n&uacute;mero de operadores en una franja horaria:";
 choices[77]= new Array();
 choices[77][0] = "El n&uacute;mero de llamadas entrantes, y utilizar la f&oacute;rmula Erlang B.";
 choices[77][1] = "El n&uacute;mero de llamadas entrantes y su duraci&oacute;n, y utilizar la f&oacute;rmula Erlang C.";
 choices[77][2] = "En un Centro de Atenci&oacute;n de Llamadas el n&uacute;mero de enlaces es igual que el de agentes.";
 choices[77][3] = "Ninguna de las anteriores";
 answers[77] = choices[77][1];
 units[77] = "104";
 comments[77] = "Id Pregunta: 9023. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9044 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es la capa del modelo OSI equivalente a Ethernet";
 choices[78]= new Array();
 choices[78][0] = "Capa F&iacute;sica de Datos";
 choices[78][1] = "Capa de Red";
 choices[78][2] = "Capa de Enlace de Datos";
 choices[78][3] = "Capa de Transporte";
 answers[78] = choices[78][2];
 units[78] = "100";
 comments[78] = "Id Pregunta: 9044. ";


//  Id pregunta: 9124 Año de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;les son aplicaciones generales para la computaci&oacute;n GRID?";
 choices[79]= new Array();
 choices[79][0] = "S&uacute;per computaci&oacute;n distribuida.";
 choices[79][1] = "Sistemas distribuidos en tiempo real";
 choices[79][2] = "Entornos virtuales de colaboraci&oacute;n (Tele-inmersi&oacute;n)";
 choices[79][3] = "Todas las respuetas anteriores son v&aacute;lidas";
 answers[79] = choices[79][3];
 units[79] = "45";
 comments[79] = "Id Pregunta: 9124. ";


//  Id pregunta: 9196 Año de creación de pregunta: 2013-01-01
 questions[80]= "81)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[80]= new Array();
 choices[80][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[80][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[80][2] = "Los derechos morales pertenecen al trabajador";
 choices[80][3] = "Los derechos morales pertenecen al empresario";
 answers[80] = choices[80][2];
 units[80] = "36";
 comments[80] = "Id Pregunta: 9196. ";


//  Id pregunta: 9211 Año de creación de pregunta: 2013-01-01
 questions[81]= "82)  Con relaci&oacute;n al bucle arbitrado y red conmutada en las conexiones FC, es cierto que...";
 choices[81]= new Array();
 choices[81][0] = "mediante bucle arbitrado se pueden conectar hasta 50 dispositivos en un anillo en el que se comparte el ancho de banda entre todos ellos.";
 choices[81][1] = "La red conmutada utiliza switches para construir una NAS.";
 choices[81][2] = "En la red conmutada no se comparte el ancho de banda";
 choices[81][3] = "Bucle arbitrado y red conmutada no son formas v&aacute;lidas de conexi&oacute;n FC.";
 answers[81] = choices[81][2];
 units[81] = "48";
 comments[81] = "Id Pregunta: 9211. ";


//  Id pregunta: 9283 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes NO es una prerrogativa de la Administraci&oacute;n seg&uacute;n el Texto Refundido de la Ley de Contratos del Sector P&uacute;blico?";
 choices[82]= new Array();
 choices[82][0] = "Disminuir la cuant&iacute;a econ&oacute;mica del contrato por razones de d&eacute;ficit excesivo.";
 choices[82][1] = "Acordar la resoluci&oacute;n del contrato y determinar los efectos de &eacute;sta. ";
 choices[82][2] = "Modificar los contratos por razones de inter&eacute;s p&uacute;blico. ";
 choices[82][3] = "Interpretar los contratos.";
 answers[82] = choices[82][0];
 units[82] = "41";
 comments[82] = "Id Pregunta: 9283. Art. 210 RD Legislativo 3/2011";


//  Id pregunta: 9301 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  Entre las tareas del auditor no se incluye:";
 choices[83]= new Array();
 choices[83][0] = "Comprender y evaluar la metodolog&iacute;a seguida en el proceso de desarrollo";
 choices[83][1] = "Identificar las fases de la metodolog&iacute;a de desarrollo";
 choices[83][2] = "Revisar el cumplimiento de est&aacute;ndares y normas de control interno";
 choices[83][3] = "Desarrollar e implantar los cambios necesarios para el cumplimiento con est&aacute;ndares y normas";
 answers[83] = choices[83][3];
 units[83] = "33";
 comments[83] = "Id Pregunta: 9301. ";


//  Id pregunta: 9326 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  Qu&eacute; clase de cable, seg&uacute;n la norma ISO 11801, elegir&iacute;a para permitir la transmisi&oacute;n de video en tiempo real?";
 choices[84]= new Array();
 choices[84][0] = "clase D";
 choices[84][1] = "clase F ";
 choices[84][2] = "clase E";
 choices[84][3] = "b) y c) son correctas.";
 answers[84] = choices[84][3];
 units[84] = "99";
 comments[84] = "Id Pregunta: 9326. ";


//  Id pregunta: 9331 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Acerca de las ventanas de transmision en las fibras opticas, se puede afirmar";
 choices[85]= new Array();
 choices[85][0] = "son provocadas por la presencia del ion hidroxilo OH-";
 choices[85][1] = "la mas amplia es la primera ventana, entre los 0,8 y 0,9 micras";
 choices[85][2] = "alrededor de los 1550 nm existe una ventana de transmision.";
 choices[85][3] = "la tercera ventana obliga a usar transmisiones monomodo";
 answers[85] = choices[85][2];
 units[85] = "99";
 comments[85] = "Id Pregunta: 9331. ";


//  Id pregunta: 9365 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  Acerca de Fibre Channel, se puede decir:";
 choices[86]= new Array();
 choices[86][0] = "El protocolo sigue el model de referencia OSI.";
 choices[86][1] = "Es un protocolo con 5 capas. ";
 choices[86][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[86][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[86] = choices[86][1];
 units[86] = "101, 48";
 comments[86] = "Id Pregunta: 9365. ";


//  Id pregunta: 9393 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[87]= new Array();
 choices[87][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[87][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[87][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[87][3] = "Ninguna de las respuestas es correcta.";
 answers[87] = choices[87][0];
 units[87] = "108";
 comments[87] = "Id Pregunta: 9393. Examen Teleco Ayto Madrid 2010.";


//  Id pregunta: 9429 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  Los prestadores de servicios de instalaci&oacute;n de telecomunicaciones";
 choices[88]= new Array();
 choices[88][0] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n, por medios electr&oacute;nicos o telem&aacute;ticos, una declaraci&oacute;n responsable sobre el cumplimiento de los requisitos exigibles para el ejercicio de la actividad. ";
 choices[88][1] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En 15 d&iacute;as sin respuesta, se entender&aacute; estimada la solicitud.";
 choices[88][2] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En 30 d&iacute;as sin respuesta, se entender&aacute; estimada la solicitud.";
 choices[88][3] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En un mes sin respuesta, se entender&aacute; estimada la solicitud.";
 answers[88] = choices[88][0];
 units[88] = "110";
 comments[88] = "Id Pregunta: 9429. ";


//  Id pregunta: 9517 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Respecto a los EJB, indique la afirmaci&oacute;n incorrecta:";
 choices[89]= new Array();
 choices[89][0] = "Son objetos de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n y se pueden ejecutar de forma distribuida";
 choices[89][1] = "S&oacute;lo existen tres tipos: session, entity y message-driven";
 choices[89][2] = "Se ejecutan en contenedores EJB";
 choices[89][3] = "Los EJB de tipo session pueden ser a su vez SLSB y SFSB";
 answers[89] = choices[89][0];
 units[89] = "116";
 comments[89] = "Id Pregunta: 9517. ";


//  Id pregunta: 9654 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  El framework de JAVA para desarrollo web se llama:";
 choices[90]= new Array();
 choices[90][0] = "Maverick";
 choices[90][1] = "Mavericks";
 choices[90][2] = "Cocoa";
 choices[90][3] = "Kit Kat";
 answers[90] = choices[90][0];
 units[90] = "116";
 comments[90] = "Id Pregunta: 9654. Mavericks es el sistema operativo OS X de Apple";


//  Id pregunta: 9764 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  En M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes no es un rol participante?";
 choices[91]= new Array();
 choices[91][0] = "Directivo";
 choices[91][1] = "Jefe de Proyecto";
 choices[91][2] = "Consultor";
 choices[91][3] = "Usuario experto";
 answers[91] = choices[91][3];
 units[91] = "86";
 comments[91] = "Id Pregunta: 9764. Seg&uacute;n M&eacute;trica v3, el usuario experto estar&iacute;a englobado en el rol &quot;Directivo&quot;.";


//  Id pregunta: 9840 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes opciones est&aacute; considerada como la caracter&iacute;stica m&aacute;s segura de una red WLAN?";
 choices[92]= new Array();
 choices[92][0] = "Configuraci&oacute;n de SSID (Service Ser Identifier).";
 choices[92][1] = "Clave WEP.";
 choices[92][2] = "Selecci&oacute;n del canal.";
 choices[92][3] = "Configuraci&oacute;n de la energ&iacute;a.";
 answers[92] = choices[92][1];
 units[92] = "111";
 comments[92] = "Id Pregunta: 9840. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9990 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes es sistemas de gesti&oacute;n de conocimiento tiene una versi&oacute;n con licencia de fuentes abiertas?";
 choices[93]= new Array();
 choices[93][0] = "Blackboard";
 choices[93][1] = "WebCT";
 choices[93][2] = "Dokeos";
 choices[93][3] = "Desire2Learn";
 answers[93] = choices[93][2];
 units[93] = "66";
 comments[93] = "Id Pregunta: 9990. ";


//  Id pregunta: 10036 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[94]= new Array();
 choices[94][0] = "Ping ";
 choices[94][1] = "ICMP";
 choices[94][2] = "PPP";
 choices[94][3] = "RSVP";
 answers[94] = choices[94][1];
 units[94] = "100";
 comments[94] = "Id Pregunta: 10036. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10062 Año de creación de pregunta: 2010-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes NO es un mecanismo de control de la congesti&oacute;n en redes?";
 choices[95]= new Array();
 choices[95][0] = "Cubeta con ficha.";
 choices[95][1] = "Paquetes de estrangulamiento.";
 choices[95][2] = "Control de admisi&oacute;n.";
 choices[95][3] = "Vector distancia.";
 answers[95] = choices[95][3];
 units[95] = "102";
 comments[95] = "Id Pregunta: 10062. TIC A2, libre, examen 2013";


//  Id pregunta: 10164 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;En qu&eacute; consiste la regla de Independencia de Integridad establecida por Codd?";
 choices[96]= new Array();
 choices[96][0] = "Los programas de aplicaci&oacute;n y actividades del terminal permanecer&aacute;n inalterados a nivel l&oacute;gico cuando se realicen cambios sobre las tablas base que preservan la informaci&oacute;n";
 choices[96][1] = "Los limitantes de integridad han de poder ser definidos utilizando el sublenguaje de datos relacional y almacenables en el cat&aacute;logo din&aacute;mico";
 choices[96][2] = "La independencia de integridad requiere la definici&oacute;n de claves ajenas con la opci&oacute;n &quot;CASCADE&quot;, a fin que se propaguen a la clave ajena los cambios realizados sobre la clave primaria referenciada";
 choices[96][3] = "Si en una relaci&oacute;n hay una clave ajena, sus valores deben coincidir con los valores de la clave primaria a que se refiere, o deben ser completamente nulos";
 answers[96] = choices[96][1];
 units[96] = "58";
 comments[96] = "Id Pregunta: 10164. ";


//  Id pregunta: 10206 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[97]= new Array();
 choices[97][0] = "Es compatible con las redes IEEE 802.16e";
 choices[97][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access) en vez de WCDMA (Wideband Code Division Multiple Access)";
 choices[97][2] = "Desaparecen los hard handovers y solo existen soft handovers";
 choices[97][3] = "En la arquitectura se introduce un nuevo elemento llamado MME (Mobility Management Entity) basado en la antigua HLR y AuC";
 answers[97] = choices[97][1];
 units[97] = "108";
 comments[97] = "Id Pregunta: 10206. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m. Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B. El nuevo elemento basado en la antigua HLR y AuC es HSS (Home Subscriber Server), ";


//  Id pregunta: 10267 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Es posible denegar temporalmente una transfferencia internacional de datos personales previamente autorizada?";
 choices[98]= new Array();
 choices[98][0] = "Puede hacerlo el Director de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[98][1] = "Puede hacerlo el Consejo Consultivo de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[98][2] = "Puede hacerlo la Secretar&iacute;a de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[98][3] = "Una vez autorizada la transferencia s&oacute;lo es posible denegarla por indicaci&oacute;n espec&iacute;fica de la Comisi&oacute;n Europea";
 answers[98] = choices[98][0];
 units[98] = "29";
 comments[98] = "Id Pregunta: 10267. Art&iacute;culo 70.3 del RD 1720/2007";


//  Id pregunta: 10317 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  CRAM-MD5 definido en el RFC 2195 es una t&eacute;cnica criptogr&aacute;fica que consiste en:";
 choices[99]= new Array();
 choices[99][0] = "Un mecanismo de autenticaci&oacute;n challenge-response para autenticaci&oacute;n de usuarios POP e IMAP, entre otros.";
 choices[99][1] = "Un mecanismo de cifrado sim&eacute;trico de bloque basado en una clave compartida y derivaci&oacute;n de subclaves usando MD5.";
 choices[99][2] = "Un algoritmo de firma electr&oacute;nica basado en MD5, ideado para escenarios en los que no puede usarse criptograf&iacute;a asim&eacute;trica.";
 choices[99][3] = "Un algoritmo de cifrado sim&eacute;trico de flujo (stream) basado una clave compartida, en MD5 y un LFSR predeterminado.";
 answers[99] = choices[99][0];
 units[99] = "72";
 comments[99] = "Id Pregunta: 10317. TIC A2, promoci&oacute;n interna, examen 2013";


