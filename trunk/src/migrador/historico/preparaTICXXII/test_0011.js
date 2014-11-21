/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 79 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; red implementa la jerarqu&iacute;a absoluta?:";
 choices[0]= new Array();
 choices[0][0] = "En Y";
 choices[0][1] = "En cadena";
 choices[0][2] = "En c&iacute;rculo";
 choices[0][3] = "En rueda";
 answers[0] = choices[0][1];
 units[0] = "23";
 comments[0] = "Id Pregunta: 79. ";


//  Id pregunta: 196 Año de creación de pregunta: 2004-01-01
 questions[1]= "2)  El t&eacute;rmino MAGERIT es un acr&oacute;nimo que procede de los siguientes t&eacute;rminos, o significa lo siguiente:";
 choices[1]= new Array();
 choices[1][0] = "Mercado Abierto y Gratuito a la Exportaci&oacute;n de Recursos Inform&aacute;ticos y de Telecomunicaciones";
 choices[1][1] = "Sistema Inform&aacute;tico propio, financiado y desarrollado por la Comunidad Aut&oacute;noma de Madrid (de aqu&iacute; el nombre de: &quot;Magerit&quot;)";
 choices[1][2] = "Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n";
 choices[1][3] = "Methot Aid for Gradual Employ Resource of Information Technology";
 answers[1] = choices[1][2];
 units[1] = "33";
 comments[1] = "Id Pregunta: 196. Examen TIC MAP B 2004";


//  Id pregunta: 197 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  El t&eacute;rmino COBIT es un acr&oacute;nimo angl&oacute;fono que procede de los siguientes t&eacute;rminos, o significa lo siguiente en el idioma ingl&eacute;s:";
 choices[2]= new Array();
 choices[2][0] = "Computer Building Information Technology";
 choices[2][1] = "Computational Binary Translation";
 choices[2][2] = "Control Objetives for Information and Related Technology";
 choices[2][3] = "Committee of Business Information Technique";
 answers[2] = choices[2][2];
 units[2] = "21";
 comments[2] = "Id Pregunta: 197. Examen TIC MAP B 2004";


//  Id pregunta: 486 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  La ITU-T realiza series de recomendaciones sobre diversos temas, Las recomendaciones sobre multiplexaci&oacute;n digital, estructura de las tramas, interfaces el&eacute;ctricos y funcionales entre dispositivos digitales de transmisi&oacute;n, y jerarqu&iacute;a de frecuencia pertence a:";
 choices[3]= new Array();
 choices[3][0] = "Serie V de la ITU-T";
 choices[3][1] = "Serie G de la ITU-T";
 choices[3][2] = "Serie D de la ITU-T";
 choices[3][3] = "Serie M de la ITU-T";
 answers[3] = choices[3][1];
 units[3] = "42";
 comments[3] = "Id Pregunta: 486. ";


//  Id pregunta: 566 Año de creación de pregunta: 2006-01-01
 questions[4]= "5)  Las organizaciones basadas en el conocimiento, seg&uacute;n Berenguer. Se&ntilde;ale la correcta.";
 choices[4]= new Array();
 choices[4][0] = "Consideran el tiempo como un factor cr&iacute;tico";
 choices[4][1] = "Tienen claro que la tecnolog&iacute;a vuelve a una organizaci&oacute;n m&aacute;s competitiva";
 choices[4][2] = "Poseen una cultura organizacional basada en compartir conocimientos y valorar los resultados a corto plazo";
 choices[4][3] = "Todas son caracter&iacute;siticas propias de las organizaciones basadas en el conocimiento";
 answers[4] = choices[4][0];
 units[4] = "22";
 comments[4] = "Id Pregunta: 566. ";


//  Id pregunta: 779 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Indique una caracter&iacute;stica del software libre:";
 choices[5]= new Array();
 choices[5][0] = "Los usuarios pueden usar el software como deseen, para lo que deseen y en tantos ordenadores como deseen";
 choices[5][1] = "Los usuarios pueden redistribuir el software a otros usuarios";
 choices[5][2] = "Los usuarios deben tener acceso al c&oacute;digo fuente, escrito generalmente en un lenguaje de alto nivel";
 choices[5][3] = "Todas las respuestas son correctas";
 answers[5] = choices[5][3];
 units[5] = "61";
 comments[5] = "Id Pregunta: 779. ";


//  Id pregunta: 796 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; tecnolog&iacute;a para la creaci&oacute;n de p&aacute;ginas web din&aacute;micas puede correr sobre un servidor Windows 2008?:";
 choices[6]= new Array();
 choices[6][0] = "ASP.NET";
 choices[6][1] = "PHP";
 choices[6][2] = "Java EE (Servlets)";
 choices[6][3] = "Todas son v&aacute;lidas";
 answers[6] = choices[6][3];
 units[6] = "59";
 comments[6] = "Id Pregunta: 796. ";


//  Id pregunta: 877 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l es el API de Java dedicada al procesamiento de XML?:";
 choices[7]= new Array();
 choices[7][0] = "JXML";
 choices[7][1] = "JML";
 choices[7][2] = "JAXP";
 choices[7][3] = "Todas son falsas";
 answers[7] = choices[7][2];
 units[7] = "60,116";
 comments[7] = "Id Pregunta: 877. ";


//  Id pregunta: 908 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Por qu&eacute; se dice que C es un lenguaje de nivel medio?";
 choices[8]= new Array();
 choices[8][0] = "porque su aprendizaje es de dificultad media respecto de otros m&aacute;s f&aacute;ciles o dif&iacute;ciles";
 choices[8][1] = "porque su funcionalidad es suficientemente buena aunque no es de los lenguajes que mayores funcionalidades presenta";
 choices[8][2] = "porque est&aacute; a medio camino entre la potencia y rapidez del lenguaje ensamblador y la funcionalidad del lenguaje natural";
 choices[8][3] = "porque sus programas tienen un tama&ntilde;o medio en comparaci&oacute;n con otros lenguajes de programas m&aacute;s simples y otros de programas muy complejos y largos";
 answers[8] = choices[8][2];
 units[8] = "82";
 comments[8] = "Id Pregunta: 908. ";


//  Id pregunta: 1377 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  TTP:";
 choices[9]= new Array();
 choices[9][0] = "La Top Testing Policy es una pol&iacute;tica que se implanta en organizaciones con un fuerte desarrollo de la calidad del software, para hacer de las pruebas algo fundamental";
 choices[9][1] = "Training To Practise es un tipo de trabajo en equipo que acelera el tiempo en que un empleado nuevo puede comenzar a desempe&ntilde;ar su funci&oacute;n.";
 choices[9][2] = "Una Trusted Third Party es una tercera parte de confianza, es decir una entidad en la que confiamos, y de la que aceptaremos todo lo que firme";
 choices[9][3] = "Todas son falsas";
 answers[9] = choices[9][2];
 units[9] = "74";
 comments[9] = "Id Pregunta: 1377. ";


//  Id pregunta: 1659 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  En las bases de datos, &iquest;qu&eacute; tipo de redundancia debe tolerarse?";
 choices[10]= new Array();
 choices[10][0] = "L&oacute;gica";
 choices[10][1] = "M&uacute;ltiple";
 choices[10][2] = "Controlada";
 choices[10][3] = "Ninguna";
 answers[10] = choices[10][2];
 units[10] = "58";
 comments[10] = "Id Pregunta: 1659. MAP-B 2003";


//  Id pregunta: 1907 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  El elemento del DNI que no permite por si solo autenticar a una persona es";
 choices[11]= new Array();
 choices[11][0] = "El nombre";
 choices[11][1] = "La foto";
 choices[11][2] = "La firma";
 choices[11][3] = "La huella dactilar";
 answers[11] = choices[11][0];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1907. ";


//  Id pregunta: 2124 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el &quot;Downsizing&quot;?";
 choices[12]= new Array();
 choices[12][0] = "El downsizing centraliza los procesos en sistemas tipo main-frame.";
 choices[12][1] = "Pretende acercar el proceso all&iacute; donde se va a realizar.";
 choices[12][2] = "Acerca los servidores a los Centros de Proceso de Datos m&aacute;s proximos a la gerencia de la empresa.";
 choices[12][3] = "Siempre que se hace downsizing se pide autorizaci&oacute;n al usuario afectado.";
 answers[12] = choices[12][1];
 units[12] = "90";
 comments[12] = "Id Pregunta: 2124. ";


//  Id pregunta: 2257 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Dentro del Plan General de Calidad para el desarrollo de aplicaciones inform&aacute;ticas se distinguen dos bloques tem&aacute;ticos, con un contenido diferente pero complementario, a saber:";
 choices[13]= new Array();
 choices[13][0] = "Bloque metodol&oacute;gico y Bloque procedimental";
 choices[13][1] = "Bloque metodol&oacute;gico y Bloque instrumental";
 choices[13][2] = "Bloque l&oacute;gico y Bloque procedimental";
 choices[13][3] = "Bloque l&oacute;gico y bloque instrumental";
 answers[13] = choices[13][1];
 units[13] = "92";
 comments[13] = "Id Pregunta: 2257. ";


//  Id pregunta: 2554 Año de creación de pregunta: 2004-01-01
 questions[14]= "15)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[14]= new Array();
 choices[14][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[14][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[14][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[14][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[14] = choices[14][2];
 units[14] = "87,88,92";
 comments[14] = "Id Pregunta: 2554. Pregunta Junta Andalucia - A";


//  Id pregunta: 2716 Año de creación de pregunta: 2004-01-01
 questions[15]= "16)  Comparando Java y C++, indique la afirmaci&oacute;n Incorrecta";
 choices[15]= new Array();
 choices[15][0] = "Java es debilmente tipado y C++ es fuertemente tipado";
 choices[15][1] = "Java es altamente portable y C++ tiene aspectos no portables";
 choices[15][2] = "Java es interpretado y C++ es compilado";
 choices[15][3] = "Java no tiene herencia multiple y C++ si";
 answers[15] = choices[15][0];
 units[15] = "82";
 comments[15] = "Id Pregunta: 2716. ";


//  Id pregunta: 2861 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Entre las &aacute;reas de actuaci&oacute;n del Plan Avanza no se encuentra";
 choices[16]= new Array();
 choices[16][0] = "Servicios P&uacute;blicos Digitales";
 choices[16][1] = "Educaci&oacute;n en la Era Digital";
 choices[16][2] = "Hogar e Inclusi&oacute;n de los Ciudadanos";
 choices[16][3] = "La Sanidad en la Era Digital";
 answers[16] = choices[16][3];
 units[16] = "30";
 comments[16] = "Id Pregunta: 2861. ";


//  Id pregunta: 2953 Año de creación de pregunta: 2004-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[17]= new Array();
 choices[17][0] = "CSMA/CD";
 choices[17][1] = "Token bus";
 choices[17][2] = "Token Ring";
 choices[17][3] = "Aloha ranurado";
 answers[17] = choices[17][1];
 units[17] = "101, 102";
 comments[17] = "Id Pregunta: 2953. Similar a examen TIC SS A 2003";


//  Id pregunta: 3520 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  En Ethernet, se usa un transceptor (transceiver) para:";
 choices[18]= new Array();
 choices[18][0] = "Para hacer una conexi&oacute;n de red de un dispositivo a un servidor";
 choices[18][1] = "Establecer conexiones entre tarjetas de interfaz de red";
 choices[18][2] = "Convertir se&ntilde;ales recibidas por una puerta para transmitirlas por otra";
 choices[18][3] = "Unir un cable desde una estaci&oacute;n al medio f&iacute;sico que constituye la red";
 answers[18] = choices[18][3];
 units[18] = "102";
 comments[18] = "Id Pregunta: 3520. ";


//  Id pregunta: 3609 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  La funci&oacute;n de una MIB es:";
 choices[19]= new Array();
 choices[19][0] = "Representar un dispositivo dado en la jerarqu&iacute;a de una red gestionada";
 choices[19][1] = "Identificar las caracter&iacute;sticas espec&iacute;ficas de un dispositivo gestionado y asociar uno o m&aacute;s valores a sus caracter&iacute;sticas";
 choices[19][2] = "Mapear agentes SNMP a  NMSs (Network Management Systems) SNMP y mantener una tablas con estas relaciones";
 choices[19][3] = "Permitir representar a los datos de forma independiente de las t&eacute;cnicas de representaci&oacute;n y de las estructuras de sistemas en particular";
 answers[19] = choices[19][1];
 units[19] = "104";
 comments[19] = "Id Pregunta: 3609. ";


//  Id pregunta: 3818 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  Se&ntilde;ale entre los siguientes, cu&aacute;l es un par&aacute;metro de calidad en redes RDSI:";
 choices[20]= new Array();
 choices[20][0] = "Grado de servicio";
 choices[20][1] = "Alerting delay";
 choices[20][2] = "Bit error";
 choices[20][3] = "Todos son par&aacute;metros de calidad";
 answers[20] = choices[20][3];
 units[20] = "103";
 comments[20] = "Id Pregunta: 3818. ";


//  Id pregunta: 4076 Año de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?";
 choices[21]= new Array();
 choices[21][0] = "El modelo en dos capas no permite la distribuci&oacute;n en dos capas diferentes el interfaz de usuario y la l&oacute;gica de negocio";
 choices[21][1] = "El modelo en 3 capas permite situar en una capa separada los datos";
 choices[21][2] = "El modelo en 3 capas permite una mayor seguridad que el modelo en 2 capas";
 choices[21][3] = "El modelo en 2 capas permite separar en una capa separada los datos";
 answers[21] = choices[21][0];
 units[21] = "113";
 comments[21] = "Id Pregunta: 4076. ";


//  Id pregunta: 4125 Año de creación de pregunta: 2006-01-01
 questions[22]= "23)  Lenguaje de marca que utiliza s&iacute;mbolos autodefinidos e ilimitados";
 choices[22]= new Array();
 choices[22][0] = "HTML";
 choices[22][1] = "XHTML";
 choices[22][2] = "XML";
 choices[22][3] = "W3C";
 answers[22] = choices[22][2];
 units[22] = "112,69";
 comments[22] = "Id Pregunta: 4125. ";


//  Id pregunta: 4374 Año de creación de pregunta: 2007-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es propia del modelado de sistemas?";
 choices[23]= new Array();
 choices[23][0] = "Descomposici&oacute;n.";
 choices[23][1] = "Partici&oacute;n en clases de equivalencia.";
 choices[23][2] = "Aproximaciones sucesivas.";
 choices[23][3] = "An&aacute;lisis del dominio.";
 answers[23] = choices[23][1];
 units[23] = "80";
 comments[23] = "Id Pregunta: 4374. ";


//  Id pregunta: 4475 Año de creación de pregunta: 2007-01-01
 questions[24]= "25)  &iquest;Cu&aacute;les de los siguientes no ser&iacute;an objetivos de la ingenier&iacute;a inversa?";
 choices[24]= new Array();
 choices[24][0] = "Incrementar la comprensi&oacute;n global del sistema para el mantenimiento o nuevo desarrollo.";
 choices[24][1] = "Reducir la complejidad del sistema y generar vistas alternativas.";
 choices[24][2] = "Disminuci&oacute;n en los tiempos del ciclo de vida.";
 choices[24][3] = "Recuperar informaci&oacute;n perdida y detectar efectos laterales.";
 answers[24] = choices[24][2];
 units[24] = "91";
 comments[24] = "Id Pregunta: 4475. Castilla la Mancha 06";


//  Id pregunta: 4590 Año de creación de pregunta: 2007-01-01
 questions[25]= "26)  Un puente como elemento de interconexi&oacute;n de redes en que capa del modelo OSI opera:";
 choices[25]= new Array();
 choices[25][0] = "enlace de datos";
 choices[25][1] = "red";
 choices[25][2] = "transporte";
 choices[25][3] = "ninguna de las anteriores";
 answers[25] = choices[25][0];
 units[25] = "99";
 comments[25] = "Id Pregunta: 4590. ";


//  Id pregunta: 4703 Año de creación de pregunta: 2007-01-01
 questions[26]= "27)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque &hellip;";
 choices[26]= new Array();
 choices[26][0] = "el lenguaje Java se deriva de C++.";
 choices[26][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[26][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[26][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin.";
 answers[26] = choices[26][1];
 units[26] = "60";
 comments[26] = "Id Pregunta: 4703. Examen 2006 JCYL";


//  Id pregunta: 4939 Año de creación de pregunta: 2003-01-01
 questions[27]= "28)  El est&aacute;ndar que refiere la usabilidad como la capacidad de un software de ser comprendido, aprendido, usadoy ser atractivo para el usuario, en condiciones espec&iacute;ficas de uso es:";
 choices[27]= new Array();
 choices[27][0] = "RFC 2865";
 choices[27][1] = "ISO/IEC 9126";
 choices[27][2] = "ISO/IEC 9241";
 choices[27][3] = "RFC 2866";
 answers[27] = choices[27][1];
 units[27] = "39";
 comments[27] = "Id Pregunta: 4939. Examen TIC B 2007";


//  Id pregunta: 5124 Año de creación de pregunta: 2003-01-01
 questions[28]= "29)  Una obra bajo licencia Creative Commons:";
 choices[28]= new Array();
 choices[28][0] = "No tiene copyright";
 choices[28][1] = "Otorga todos los derechos a terceras personas";
 choices[28][2] = "Ofrecen derechos a terceras personas bajo ciertas condiciones.";
 choices[28][3] = "No ofrecen ning&uacute;n derecho a terceras personas.";
 answers[28] = choices[28][2];
 units[28] = "36";
 comments[28] = "Id Pregunta: 5124. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5788 Año de creación de pregunta: 2009-01-01
 questions[29]= "30)  En un radioenlace:";
 choices[29]= new Array();
 choices[29][0] = "El enlace descendente trabaja siempre a frecuencias superiores que el enlace descendente";
 choices[29][1] = "El enlace ascendente trabaja a frecuencias iguales o inferiores que el enlace descendente";
 choices[29][2] = "El enlace descendente trabaja, a veces, a frecuencias inferiores que el enlace descendente";
 choices[29][3] = "El enlace ascendente trabaja, a veces, a frecuencias iguales o superiores que el enlace descendente";
 answers[29] = choices[29][1];
 units[29] = "108";
 comments[29] = "Id Pregunta: 5788. ";


//  Id pregunta: 5790 Año de creación de pregunta: 2009-01-01
 questions[30]= "31)  Seg&uacute;n el RD 589/2005, indique el alcance que han de tener los planes estrat&eacute;gicos departamentales en materias de tecnolog&iacute;as de la informaci&oacute;n y administraci&oacute;n electr&oacute;nica";
 choices[30]= new Array();
 choices[30][0] = "al menos 4 a&ntilde;os";
 choices[30][1] = "al menos 2 a&ntilde;os";
 choices[30][2] = "al menos 5 a&ntilde;os";
 choices[30][3] = "al menos 3 a&ntilde;os";
 answers[30] = choices[30][1];
 units[30] = "30";
 comments[30] = "Id Pregunta: 5790. MAP 2008 A1";


//  Id pregunta: 5874 Año de creación de pregunta: 2009-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[31]= new Array();
 choices[31][0] = "Software de gesti&oacute;n de incidencias";
 choices[31][1] = "Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente";
 choices[31][2] = "Datawarehouse";
 choices[31][3] = "Call-center: software de visi&oacute;n unificada de clientes";
 answers[31] = choices[31][2];
 units[31] = "65";
 comments[31] = "Id Pregunta: 5874. MAP 2008 A1";


//  Id pregunta: 5969 Año de creación de pregunta: 2010-01-01
 questions[32]= "33)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[32]= new Array();
 choices[32][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[32][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[32][2] = "Todos los datos relativos a una persona";
 choices[32][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[32] = choices[32][3];
 units[32] = "29";
 comments[32] = "Id Pregunta: 5969. Castilla La Mancha 2009";


//  Id pregunta: 6077 Año de creación de pregunta: 2010-01-01
 questions[33]= "34)  &iquest;En qu&eacute; fase del proyecto es mayor el nivel de coste y de personal?";
 choices[33]= new Array();
 choices[33][0] = "Al inicio del proyecto.";
 choices[33][1] = "Al final del proyecto.";
 choices[33][2] = "En las fases intermedias del proyecto.";
 choices[33][3] = "Tanto el coste como el personal debe ser homog&eacute;neo a lo largo del proyecto.";
 answers[33] = choices[33][2];
 units[33] = "27";
 comments[33] = "Id Pregunta: 6077. ";


//  Id pregunta: 6150 Año de creación de pregunta: 2010-01-01
 questions[34]= "35)  &iquest;Cu&aacute;les son algunos modelos de mejora de procesos relacionados con la gesti&oacute;n de la calidad en un proyecto?";
 choices[34]= new Array();
 choices[34][0] = "Malcolm Baldrige, CMM, CMMISM y ASQ.";
 choices[34][1] = "Malcolm Baldrige, AMD y CMMISM.";
 choices[34][2] = "Malcolm Baldrige, CMM, CMMISM y AMD.";
 choices[34][3] = "Malcolm Baldrige, CMM y CMMISM.";
 answers[34] = choices[34][3];
 units[34] = "28";
 comments[34] = "Id Pregunta: 6150. ";


//  Id pregunta: 6281 Año de creación de pregunta: 2010-01-01
 questions[35]= "36)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[35]= new Array();
 choices[35][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[35][1] = "An&aacute;lisis DAFO ";
 choices[35][2] = "Aprendizaje organizativo";
 choices[35][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[35] = choices[35][1];
 units[35] = "77";
 comments[35] = "Id Pregunta: 6281. ";


//  Id pregunta: 6285 Año de creación de pregunta: 2010-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de un Plan de Sistemas?";
 choices[36]= new Array();
 choices[36][0] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[36][1] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resultados esperados, etc";
 choices[36][2] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[36][3] = "Todos lo son";
 answers[36] = choices[36][3];
 units[36] = "77";
 comments[36] = "Id Pregunta: 6285. ";


//  Id pregunta: 6344 Año de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes formas de presentar informaci&oacute;n se identifica mejor con la definici&oacute;n de folcsonom&iacute;a?";
 choices[37]= new Array();
 choices[37][0] = "&Aacute;rbol";
 choices[37][1] = "Directorio";
 choices[37][2] = "Nube de Tags";
 choices[37][3] = "Cubo";
 answers[37] = choices[37][2];
 units[37] = "120";
 comments[37] = "Id Pregunta: 6344. ";


//  Id pregunta: 6443 Año de creación de pregunta: 2010-01-01
 questions[38]= "39)  La posibilidad de que las aplicaciones software puedan funcionar en m&aacute;quinas de distintos fabricantes y arquitecturas se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Adaptabilidad";
 choices[38][1] = "Portabilidad";
 choices[38][2] = "Interoperabilidad";
 choices[38][3] = "Escalabilidad";
 answers[38] = choices[38][1];
 units[38] = "40";
 comments[38] = "Id Pregunta: 6443. Castilla La Mancha 2009";


//  Id pregunta: 6468 Año de creación de pregunta: 2010-01-01
 questions[39]= "40)  Seg&uacute;n M&eacute;trica V3 las pruebas de seguridad, rendimiento y operaci&oacute;n se encuentran englobadas dentro del conjunto de pruebas de:";
 choices[39]= new Array();
 choices[39][0] = "Aceptaci&oacute;n";
 choices[39][1] = "Regresi&oacute;n";
 choices[39][2] = "Integraci&oacute;n";
 choices[39][3] = "Implantaci&oacute;n";
 answers[39] = choices[39][3];
 units[39] = "86";
 comments[39] = "Id Pregunta: 6468. Castilla La Mancha 2009";


//  Id pregunta: 6637 Año de creación de pregunta: 2010-01-01
 questions[40]= "41)  En el modelo COCOMO un proyecto semiacoplado hace referencia a:";
 choices[40]= new Array();
 choices[40][0] = "Aquel en el que el esfuerzo y el coste del proyecto se calcula en funci&oacute;n de las LOC y adem&aacute;s a&ntilde;ade una evaluaci&oacute;n subjetiva";
 choices[40][1] = "Proyectos peque&ntilde;os y sencillos con un equipo de trabajo estable, con buena experiencia y que cuenten con unos requerimientos poco r&iacute;gidos";
 choices[40][2] = "Proyectos de complejidad media, equipos con distintos niveles de experiencia y dentro de un software con terminales y bases de datos";
 choices[40][3] = "Proyectos que deban desarrollarse para ser acoplados en un hardware y software estricto y con restricciones operativas";
 answers[40] = choices[40][2];
 units[40] = "88";
 comments[40] = "Id Pregunta: 6637. ";


//  Id pregunta: 7250 Año de creación de pregunta: 2010-01-01
 questions[41]= "42)  La direcci&oacute;n IPv4 172.30.120.135/12 es una direcci&oacute;n de tipo:";
 choices[41]= new Array();
 choices[41][0] = "Direcci&oacute;n de red broadcast";
 choices[41][1] = "Direcci&oacute;n de red privada";
 choices[41][2] = "Direcci&oacute;n de red de enlace local";
 choices[41][3] = "Direcci&oacute;n de red p&uacute;blica";
 answers[41] = choices[41][1];
 units[41] = "100";
 comments[41] = "Id Pregunta: 7250. Examen TIC B 2009";


//  Id pregunta: 7273 Año de creación de pregunta: 2010-01-01
 questions[42]= "43)  Se&ntilde;ale  la opci&oacute;n que no corresponde a un  tipo de virtualizaci&oacute;n";
 choices[42]= new Array();
 choices[42][0] = "Virtualizaci&oacute;n de Sistema Operativo";
 choices[42][1] = "Paravirtualizaci&oacute;n";
 choices[42][2] = "Virtualizaci&oacute;n de datos";
 choices[42][3] = "Virtualizaci&oacute;n de red";
 answers[42] = choices[42][2];
 units[42] = "119";
 comments[42] = "Id Pregunta: 7273. ";


//  Id pregunta: 7306 Año de creación de pregunta: 2010-01-01
 questions[43]= "44)  Indique cu&aacute;l de los siguientes acr&oacute;nimos se refiere a un formato de gram&aacute;ticas para reconocimiento autom&aacute;tico del habla:";
 choices[43]= new Array();
 choices[43][0] = "JSGF";
 choices[43][1] = "SRGS";
 choices[43][2] = "Ninguno de los dos es un formato de gram&aacute;ticas";
 choices[43][3] = "Los dos son formatos de gram&aacute;ticas";
 answers[43] = choices[43][3];
 units[43] = "94";
 comments[43] = "Id Pregunta: 7306. ";


//  Id pregunta: 8170 Año de creación de pregunta: 2011-01-01
 questions[44]= "45)  Entre los lenguajes de especificaci&oacute;n de workflows, NO se encuentra:";
 choices[44]= new Array();
 choices[44][0] = "YAWL.";
 choices[44][1] = "ETL.";
 choices[44][2] = "XPDL.";
 choices[44][3] = "BPEL.";
 answers[44] = choices[44][1];
 units[44] = "71";
 comments[44] = "Id Pregunta: 8170. Examen TIC A1 2010";


//  Id pregunta: 8189 Año de creación de pregunta: 2011-01-01
 questions[45]= "46)  Las certificaciones ITIL:";
 choices[45]= new Array();
 choices[45][0] = "Se pueden obtener tanto por personas como por organizaciones.";
 choices[45][1] = "S&oacute;lo se pueden obtener por organizaciones y no por personas.";
 choices[45][2] = "S&oacute;lo se pueden obtener por personas y no por organizaciones.";
 choices[45][3] = "No existen certificaciones ITIL.";
 answers[45] = choices[45][2];
 units[45] = "98";
 comments[45] = "Id Pregunta: 8189. Examen TIC A1 2010";


//  Id pregunta: 8284 Año de creación de pregunta: 2011-01-01
 questions[46]= "47)  El m&eacute;todo de b&uacute;squeda informado que tiene en cuenta el coste m&iacute;nimo necesario para llegar al estado soluci&oacute;n pasando por el estado X, es el denominado:";
 choices[46]= new Array();
 choices[46][0] = "M&eacute;todo de b&uacute;squeda bidireccional.";
 choices[46][1] = "B&uacute;squeda &aacute;vida (Greedy search).";
 choices[46][2] = "B&uacute;squeda con adversario.";
 choices[46][3] = "M&eacute;todo Escalada simple (&quot;Hill-climbing&quot; search).";
 answers[46] = choices[46][1];
 units[46] = "63";
 comments[46] = "Id Pregunta: 8284. Examen TIC A1 2010";


//  Id pregunta: 8302 Año de creación de pregunta: 2011-01-01
 questions[47]= "48)  La especificaci&oacute;n PKCS#3 de RSA se refiere a: ";
 choices[47]= new Array();
 choices[47][0] = "El est&aacute;ndar criptogr&aacute;fico RSA. ";
 choices[47][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[47][2] = "El intercambio de claves Diffie-Hellman.";
 choices[47][3] = "La sintaxis del mensaje criptogr&aacute;fico. ";
 answers[47] = choices[47][2];
 units[47] = "72";
 comments[47] = "Id Pregunta: 8302. Examen TIC A2 2010";


//  Id pregunta: 8308 Año de creación de pregunta: 2011-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet? ";
 choices[48]= new Array();
 choices[48][0] = "IETF. ";
 choices[48][1] = "ICANN. ";
 choices[48][2] = "IAB. ";
 choices[48][3] = "IRTF.";
 answers[48] = choices[48][2];
 units[48] = "112,42";
 comments[48] = "Id Pregunta: 8308. Examen TIC A2 2010";


//  Id pregunta: 8315 Año de creación de pregunta: 2011-01-01
 questions[49]= "50)  La recomendaci&oacute;n para VoIP, definida en 1996 por la UIT es el:";
 choices[49]= new Array();
 choices[49][0] = "H.261. ";
 choices[49][1] = "H.320. ";
 choices[49][2] = "H.221. ";
 choices[49][3] = "H.323.";
 answers[49] = choices[49][3];
 units[49] = "100";
 comments[49] = "Id Pregunta: 8315. Examen TIC A2 2010";


//  Id pregunta: 8346 Año de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Qu&eacute; pruebas tienen como objetivo comprobar que los cambios sobre un componente de un sistema de informaci&oacute;n no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados?";
 choices[50]= new Array();
 choices[50][0] = "Pruebas unitarias.";
 choices[50][1] = "Pruebas del Sistema.";
 choices[50][2] = "Pruebas de Implantaci&oacute;n.";
 choices[50][3] = "Pruebas de Regresi&oacute;n.";
 answers[50] = choices[50][3];
 units[50] = "86";
 comments[50] = "Id Pregunta: 8346. Examen TIC A2 2010";


//  Id pregunta: 8352 Año de creación de pregunta: 2011-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "SOAP envelope.";
 choices[51][1] = "SOAP binding framework";
 choices[51][2] = "SOAP encoding rules.";
 choices[51][3] = "SOAP  RPC representation.";
 answers[51] = choices[51][2];
 units[51] = "51";
 comments[51] = "Id Pregunta: 8352. Examen TIC A2 2010";


//  Id pregunta: 8617 Año de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[52]= new Array();
 choices[52][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[52][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[52][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[52][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[52] = choices[52][0];
 units[52] = "57,58";
 comments[52] = "Id Pregunta: 8617. Examen TIC A2 2010 interna";


//  Id pregunta: 8673 Año de creación de pregunta: 2011-01-01
 questions[53]= "54)  El protocolo OCSP, se utiliza en:";
 choices[53]= new Array();
 choices[53][0] = "la validaci&oacute;n en tiempo real del certificado digital";
 choices[53][1] = "comprobaci&oacute;n de la validez de una trama";
 choices[53][2] = "la comunicaci&oacute;n entre sistemas abiertos";
 choices[53][3] = "la validaci&oacute;n de la direcci&oacute;n de origen de un equipo";
 answers[53] = choices[53][0];
 units[53] = "74";
 comments[53] = "Id Pregunta: 8673. Examen UPM A2 2011";


//  Id pregunta: 8845 Año de creación de pregunta: 2011-01-01
 questions[54]= "55)  En el modelo EFQM (European Foundation Quality Management) se identifican una serie de elementos que son la base para la Gesti&oacute;n de Calidad Total dentro de las organizaciones y que se agrupan en dos grandes bloques:";
 choices[54]= new Array();
 choices[54][0] = " Agentes y Acciones";
 choices[54][1] = " Agentes y Niveles de Satisfacci&oacute;n";
 choices[54][2] = " Agentes y Resultados";
 choices[54][3] = " Resultados y Acciones";
 answers[54] = choices[54][2];
 units[54] = "87,88";
 comments[54] = "Id Pregunta: 8845. Examen UC3M 2010";


//  Id pregunta: 8848 Año de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[55]= new Array();
 choices[55][0] = "IEEE";
 choices[55][1] = "ISO";
 choices[55][2] = "IEC";
 choices[55][3] = "ANSI";
 answers[55] = choices[55][3];
 units[55] = "42";
 comments[55] = "Id Pregunta: 8848. Examen UC3M 2010";


//  Id pregunta: 8898 Año de creación de pregunta: 2011-01-01
 questions[56]= "57)  Se&ntilde;ale la respuesta correcta relativa a m&eacute;todos de asignaci&oacute;n de pesos a los criterios";
 choices[56]= new Array();
 choices[56][0] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[56][1] = "El m&eacute;todo de las Utilidades Relativas es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo de AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[56][2] = "Tanto el m&eacute;todo de las Utilidades Relativas como el m&eacute;todo AHP son m&eacute;todos de asignaci&oacute;n directa";
 choices[56][3] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 answers[56] = choices[56][3];
 units[56] = "34";
 comments[56] = "Id Pregunta: 8898. ";


//  Id pregunta: 8972 Año de creación de pregunta: 2011-01-01
 questions[57]= "58)  En la nueva ISO 9004:2000 de Sistema de Gesti&oacute;n de la Calidad basada en Procesos existen varios apartados &iquest;Cu&aacute;l no es uno de ellos?";
 choices[57]= new Array();
 choices[57][0] = "Fundamentos y vocabulario";
 choices[57][1] = "Documentaci&oacute;n";
 choices[57][2] = "Uso de los principios de gesti&oacute;n de la calidad";
 choices[57][3] = "Gesti&oacute;n de sistemas y procesos";
 answers[57] = choices[57][0];
 units[57] = "92";
 comments[57] = "Id Pregunta: 8972. ";


//  Id pregunta: 9097 Año de creación de pregunta: 2013-01-01
 questions[58]= "59)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[58]= new Array();
 choices[58][0] = "No se pueden realizar copias de seguridad.";
 choices[58][1] = "La ley premite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[58][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[58][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[58] = choices[58][1];
 units[58] = "36";
 comments[58] = "Id Pregunta: 9097. ";


//  Id pregunta: 9103 Año de creación de pregunta: 2013-01-01
 questions[59]= "60)  &iquest;En que lenguaje est&aacute; basado el lenguaje de expresi&oacute;n de derechos REL?";
 choices[59]= new Array();
 choices[59][0] = "XcML";
 choices[59][1] = "XrML";
 choices[59][2] = "XMCL";
 choices[59][3] = "XsML";
 answers[59] = choices[59][1];
 units[59] = "37";
 comments[59] = "Id Pregunta: 9103. ";


//  Id pregunta: 9153 Año de creación de pregunta: 2013-01-01
 questions[60]= "61)  No es un concepto relacionado con los sistemas de eLearning:";
 choices[60]= new Array();
 choices[60][0] = "VLE";
 choices[60][1] = "LSS";
 choices[60][2] = "LME";
 choices[60][3] = "ILS";
 answers[60] = choices[60][2];
 units[60] = "66";
 comments[60] = "Id Pregunta: 9153. ";


//  Id pregunta: 9168 Año de creación de pregunta: 2013-01-01
 questions[61]= "62)  Modos de funcionamiento de la tecnolog&iacute;a NFC(near field communicator):";
 choices[61]= new Array();
 choices[61][0] = "Independiente/Infraestructura";
 choices[61][1] = "Activo/Pasivo";
 choices[61][2] = "Manual/Continuo";
 choices[61][3] = "Modo voz/Modo voz + datos";
 answers[61] = choices[61][1];
 units[61] = "70";
 comments[61] = "Id Pregunta: 9168. Examen TIC A2 2011";


//  Id pregunta: 9177 Año de creación de pregunta: 2013-01-01
 questions[62]= "63)  Es un formato de imagen vectorial:";
 choices[62]= new Array();
 choices[62][0] = "SXD";
 choices[62][1] = "JPG";
 choices[62][2] = "XCF";
 choices[62][3] = "GIF";
 answers[62] = choices[62][0];
 units[62] = "93";
 comments[62] = "Id Pregunta: 9177. ";


//  Id pregunta: 9233 Año de creación de pregunta: 2013-01-01
 questions[63]= "64)  &iquest;En qu&eacute; se basa la interfaz de usuario de iOS?";
 choices[63]= new Array();
 choices[63][0] = "Concepto de manipulaci&oacute;n directa usando gestos multit&aacute;ctiles.";
 choices[63][1] = "Ejecuci&oacute;n de comandos mediante la selecci&oacute;n de men&uacute;s.";
 choices[63][2] = "S&oacute;lo est&aacute; accesible en sistemas con Jailbreak.";
 choices[63][3] = "Su pantalla principal se denomina WinterBoard.";
 answers[63] = choices[63][0];
 units[63] = "52";
 comments[63] = "Id Pregunta: 9233. ";


//  Id pregunta: 9326 Año de creación de pregunta: 2013-01-01
 questions[64]= "65)  Qu&eacute; clase de cable, seg&uacute;n la norma ISO 11801, elegir&iacute;a para permitir la transmisi&oacute;n de video en tiempo real?";
 choices[64]= new Array();
 choices[64][0] = "clase D";
 choices[64][1] = "clase F ";
 choices[64][2] = "clase E";
 choices[64][3] = "b) y c) son correctas.";
 answers[64] = choices[64][3];
 units[64] = "99";
 comments[64] = "Id Pregunta: 9326. ";


//  Id pregunta: 9354 Año de creación de pregunta: 2013-01-01
 questions[65]= "66)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[65]= new Array();
 choices[65][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[65][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[65][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[65][3] = "Ninguna de las respuestas es correcta.";
 answers[65] = choices[65][0];
 units[65] = "103";
 comments[65] = "Id Pregunta: 9354. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9427 Año de creación de pregunta: 2013-01-01
 questions[66]= "67)  Hay dos operadores que para operar en un determinado territorio ejercen el derecho de ocupaci&oacute;n de propiedad p&uacute;blica o privada. Sin embargo, por motivos de ordenaci&oacute;n urbana, no pueden ejercer esos derechos por separado.";
 choices[66]= new Array();
 choices[66][0] = "Uno de los dos deber&aacute; renunciar a su derecho de ocupaci&oacute;n.";
 choices[66][1] = "La Administraci&oacute;n competente en ordenaci&oacute;n urbana, podr&aacute; instar de manera motivada al Ministerio de Industria, Energ&iacute;a y Turismo el inicio del procedimiento para imponer el uso compartido recogido en el Art&iacute;culo 32.2.";
 choices[66][2] = "La Administraci&oacute;n competente en ordenaci&oacute;n urbana, previo tr&aacute;mite de informaci&oacute;n p&uacute;blica, determinar&aacute; una soluci&oacute;n que permita el ejercicio de los derechos de ocupaci&oacute;n de dominio p&uacute;blico o propiedad privada por separado.";
 choices[66][3] = "No se trata de un elemento que regule la ley 9/2014, General de Telecomunicaciones";
 answers[66] = choices[66][1];
 units[66] = "110";
 comments[66] = "Id Pregunta: 9427. ";


//  Id pregunta: 9438 Año de creación de pregunta: 2013-01-01
 questions[67]= "68)  En un DFD los niveles de los diagramas que recogen la descomposici&oacute;n en niveles, desde el m&aacute;s general al m&aacute;s espec&iacute;fico, se denominan:";
 choices[67]= new Array();
 choices[67][0] = "Diagrama de sistema, subsistemas, funciones, subfunciones, procesos y subprocesos.";
 choices[67][1] = "Diagrama de contexto, sistemas, subsistemas, funciones y subfunciones.";
 choices[67][2] = "Diagrama de contexto, sistemas, funciones y subfunciones.";
 choices[67][3] = "Diagrama de contexto, subsistemas, funciones, subfunciones y procesos.";
 answers[67] = choices[67][3];
 units[67] = "81";
 comments[67] = "Id Pregunta: 9438. Examen AGE TIC A1 2011";


//  Id pregunta: 9527 Año de creación de pregunta: 2013-01-01
 questions[68]= "69)  Se&ntilde;ale la afimaci&oacute;n correcta respecto al protocolo SIP";
 choices[68]= new Array();
 choices[68][0] = "Proporciona servicios que implementan modelos de petici&oacute;n-respuesta";
 choices[68][1] = "Proporciona primitivas que implementan modelos de petici&oacute;n-respuesta";
 choices[68][2] = "Sobre SIP se monta RTP que se utiliza para negociar las capacidades de la comunicaci&oacute;n";
 choices[68][3] = "Los elementos involucrados en la videoconferencia est&aacute;n representados por URLs";
 answers[68] = choices[68][1];
 units[68] = "117";
 comments[68] = "Id Pregunta: 9527. ";


//  Id pregunta: 9631 Año de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[69]= new Array();
 choices[69][0] = "Metacity de GNOME ";
 choices[69][1] = "KWIN de KDE";
 choices[69][2] = "GTK de CDE";
 choices[69][3] = "Enlightenment de GNOME";
 answers[69] = choices[69][2];
 units[69] = "54";
 comments[69] = "Id Pregunta: 9631. Examen TIC A2 2013";


//  Id pregunta: 9633 Año de creación de pregunta: 2014-01-01
 questions[70]= "71)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[70]= new Array();
 choices[70][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root";
 choices[70][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos";
 choices[70][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root";
 choices[70][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios";
 answers[70] = choices[70][2];
 units[70] = "53";
 comments[70] = "Id Pregunta: 9633. Examen TIC A2 2013";


//  Id pregunta: 9671 Año de creación de pregunta: 2014-01-01
 questions[71]= "72)  Los sistemas multicomputador pueden dividirse, seg&uacute;n la taxonom&iacute;a de Flynn en:";
 choices[71]= new Array();
 choices[71][0] = "SISD, SIMD, MISD y MIMD.";
 choices[71][1] = "UMA y NUMA.";
 choices[71][2] = "MMC y MMD.";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][3];
 units[71] = "45";
 comments[71] = "Id Pregunta: 9671. ";


//  Id pregunta: 9749 Año de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;En qu&eacute; ley se exige que se establezcan las medidas necesarias para incentivar el acceso a las telecomunicaciones en lengua de signos espa&ntilde;ola?";
 choices[72]= new Array();
 choices[72][0] = "Ley 30/92";
 choices[72][1] = "Ley 27/2007";
 choices[72][2] = "Ley 11/2007";
 choices[72][3] = "Ley 34/2002";
 answers[72] = choices[72][1];
 units[72] = "39";
 comments[72] = "Id Pregunta: 9749. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9763 Año de creación de pregunta: 2014-01-01
 questions[73]= "74)  Seg&uacute;n la orden EHA/1049/2008, se declaran de contrataci&oacute;n centralizada los contratos de servicios:";
 choices[73]= new Array();
 choices[73][0] = "Los contratos de servicios dirigidos al desarrollo de la Administraci&oacute;n Electr&oacute;nica cuyo presupuesto de licitaci&oacute;n no supere 862.000 euros, I.V.A. excluido.";
 choices[73][1] = "Los contratos de servicios de telecomunicaciones.";
 choices[73][2] = "A y B son correctas.";
 choices[73][3] = "A y B son incorrectas.";
 answers[73] = choices[73][2];
 units[73] = "41";
 comments[73] = "Id Pregunta: 9763. ";


//  Id pregunta: 9894 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Ordene de forma decreciente, en relaci&oacute;n al coste en hardware (puertas l&oacute;gicasequivalentes), las siguientes primitivas criptogr&aacute;ficas: funci&oacute;n resumen (ej. MD5 o SHA-1), cifrado asim&eacute;trico (ej. RSA o curvas el&iacute;pticas) y cifrado sim&eacute;trico (ej. AES o DES).";
 choices[74]= new Array();
 choices[74][0] = "Funci&oacute;n resumen, Cifrado asim&eacute;trico, Cifrado sim&eacute;trico.";
 choices[74][1] = "Funci&oacute;n resumen, Cifrado sim&eacute;trico, Cifrado asim&eacute;trico.";
 choices[74][2] = "Cifrado asim&eacute;trico, Cifrado sim&eacute;trico, Funci&oacute;n resumen.";
 choices[74][3] = "Cifrado asim&eacute;trico, Funci&oacute;n resumen, Cifrado sim&eacute;trico.";
 answers[74] = choices[74][3];
 units[74] = "111";
 comments[74] = "Id Pregunta: 9894. TIC A1, Examen 2013";


//  Id pregunta: 9902 Año de creación de pregunta: 2014-01-01
 questions[75]= "76)  Los puntos de fijaci&oacute;n (anchor points) son caracter&iacute;sticos en el modelo de desarrollo:";
 choices[75]= new Array();
 choices[75][0] = "En cascada.";
 choices[75][1] = "Basado en prototipos.";
 choices[75][2] = "En espiral WINWIN.";
 choices[75][3] = "RAD.";
 answers[75] = choices[75][2];
 units[75] = "76";
 comments[75] = "Id Pregunta: 9902. TIC A2, Examen 2013";


//  Id pregunta: 9907 Año de creación de pregunta: 2014-01-01
 questions[76]= "77)  De las siguientes cuatro opciones, tres son tareas incluidas en la actividad &quot;GPI 2&quot; del interfaz de Gesti&oacute;n de Proyectos de M&eacute;trica v3, indique cu&aacute;l es la INCORRECTA:";
 choices[76]= new Array();
 choices[76][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[76][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[76][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[76][3] = "C&aacute;lculo del Esfuerzo.";
 answers[76] = choices[76][3];
 units[76] = "86";
 comments[76] = "Id Pregunta: 9907. TIC A2, Examen 2013";


//  Id pregunta: 9909 Año de creación de pregunta: 2014-01-01
 questions[77]= "78)  Entre los aspectos fundamentales de la Programaci&oacute;n Extrema NO se encuentra:";
 choices[77]= new Array();
 choices[77][0] = "Desarrollo iterativo e incremental.";
 choices[77][1] = "Basada en la planificaci&oacute;n previa.";
 choices[77][2] = "El cliente est&aacute; integrado en el proyecto.";
 choices[77][3] = "Simplicidad en el dise&ntilde;o para agilizar el desarrollo y facilitar el mantenimiento.";
 answers[77] = choices[77][1];
 units[77] = "79";
 comments[77] = "Id Pregunta: 9909. TIC A2, Examen 2013";


//  Id pregunta: 9918 Año de creación de pregunta: 2014-01-01
 questions[78]= "79)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[78]= new Array();
 choices[78][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[78][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[78][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[78][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[78] = choices[78][1];
 units[78] = "86, 58";
 comments[78] = "Id Pregunta: 9918. TIC A2, Examen 2013";


//  Id pregunta: 9929 Año de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es el orden de las primitivas de servicio?";
 choices[79]= new Array();
 choices[79][0] = "REQUEST &ndash; CONFIRM &ndash;INDICATION &ndash; RESPONSE.";
 choices[79][1] = "REQUEST &ndash; RESPONSE &ndash; INDICATION &ndash; CONFIRM.";
 choices[79][2] = "REQUEST &ndash; INDICATION &ndash; RESPONSE &ndash; CONFIRM.";
 choices[79][3] = "REQUEST &ndash; CONFIRM &ndash; RESPONSE &ndash; INDICATION.";
 answers[79] = choices[79][2];
 units[79] = "100";
 comments[79] = "Id Pregunta: 9929. ";


//  Id pregunta: 9964 Año de creación de pregunta: 2014-01-01
 questions[80]= "81)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[80]= new Array();
 choices[80][0] = "System Data Type (SDT)";
 choices[80][1] = "Common Type System (CTS)";
 choices[80][2] = "Common Data Integration (CDI)";
 choices[80][3] = "Data Type Core (DTC)";
 answers[80] = choices[80][1];
 units[80] = "59,115";
 comments[80] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9981 Año de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[81]= new Array();
 choices[81][0] = "CLRUN";
 choices[81][1] = "CLRNET";
 choices[81][2] = "COLR";
 choices[81][3] = "CLR";
 answers[81] = choices[81][3];
 units[81] = "59,115";
 comments[81] = "Id Pregunta: 9981. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10122 Año de creación de pregunta: 2014-01-01
 questions[82]= "83)  En el encaminamiento por estado de los enlaces cada router:";
 choices[82]= new Array();
 choices[82][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[82][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[82][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[82][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[82] = choices[82][3];
 units[82] = "102";
 comments[82] = "Id Pregunta: 10122. ";


//  Id pregunta: 10132 Año de creación de pregunta: 2014-01-01
 questions[83]= "84)  La principal mejora de SNMPv3 es:";
 choices[83]= new Array();
 choices[83][0] = "Mayor seguridad";
 choices[83][1] = "Mayor rendimiento";
 choices[83][2] = "Mayor eficacia";
 choices[83][3] = "Mayor simplicidad";
 answers[83] = choices[83][0];
 units[83] = "104";
 comments[83] = "Id Pregunta: 10132. ";


//  Id pregunta: 10174 Año de creación de pregunta: 2014-01-01
 questions[84]= "85)  UML o Unified Modeling Language&hellip;";
 choices[84]= new Array();
 choices[84][0] = "Fue desarrollado por tres autores conocidos como los &quot;Tres Amigos&quot;";
 choices[84][1] = "No constituye un m&eacute;todo o metodolog&iacute;a de an&aacute;lisis orientado a objetos";
 choices[84][2] = "Est&aacute;ndar actualmente soportado, mantenido y evolucionado por OMG";
 choices[84][3] = "Todas las anteriores";
 answers[84] = choices[84][3];
 units[84] = "82";
 comments[84] = "Id Pregunta: 10174. ";


//  Id pregunta: 10199 Año de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[85]= new Array();
 choices[85][0] = "802.11f";
 choices[85][1] = "802.11h";
 choices[85][2] = "802.11i";
 choices[85][3] = "802.11r";
 answers[85] = choices[85][1];
 units[85] = "107";
 comments[85] = "Id Pregunta: 10199. ";


//  Id pregunta: 10206 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[86]= new Array();
 choices[86][0] = "Es compatible con las redes IEEE 802.16e";
 choices[86][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access) en vez de WCDMA (Wideband Code Division Multiple Access)";
 choices[86][2] = "Desaparecen los hard handovers y solo existen soft handovers";
 choices[86][3] = "En la arquitectura se introduce un nuevo elemento llamado MME (Mobility Management Entity) basado en la antigua HLR y AuC";
 answers[86] = choices[86][1];
 units[86] = "108";
 comments[86] = "Id Pregunta: 10206. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m. Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B. El nuevo elemento basado en la antigua HLR y AuC es HSS (Home Subscriber Server), ";


//  Id pregunta: 10220 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  Un archivo con el nombrenos indica que:";
 choices[87]= new Array();
 choices[87][0] = "Se trata de un archivo serializado";
 choices[87][1] = "El s&iacute;mbolo $ no est&aacute; permitido en el nombre de una clase compilada";
 choices[87][2] = "Indica que BroadcastHandler es una clase interna";
 choices[87][3] = "Indica que BroadcastHandler es una clase interna y est&aacute;tica";
 answers[87] = choices[87][2];
 units[87] = "60";
 comments[87] = "Id Pregunta: 10220. ";


//  Id pregunta: 10235 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  Qu&eacute; m&eacute;todos se utilizan para obtener el valor de la cabecera de una petici&oacute;n HTTP:";
 choices[88]= new Array();
 choices[88][0] = "getHeaderValues() of HttpServletRequest";
 choices[88][1] = "getHeaderValue() of ServletRequest";
 choices[88][2] = "getHeader() of HttpServletRequest";
 choices[88][3] = "getHeader() of ServletRequest";
 answers[88] = choices[88][2];
 units[88] = "116";
 comments[88] = "Id Pregunta: 10235. ";


//  Id pregunta: 10244 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio regala a un amigo un CD con el ejecutable de Juan. &iquest;Cu&aacute;l de las siguientes opciones no satisface las obligaciones de Antonio de hacer disponible el c&oacute;digo fuente?";
 choices[89]= new Array();
 choices[89][0] = "Puede alojar el c&oacute;digo fuente en su web site e indicar la URL en el CD";
 choices[89][1] = "Puede proveer el c&oacute;digo fuente en el mismo CD que el ejecutable";
 choices[89][2] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente contra el pago de los costes de distribuci&oacute;n";
 choices[89][3] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente gratis en un CD";
 answers[89] = choices[89][0];
 units[89] = "61";
 comments[89] = "Id Pregunta: 10244. ";


//  Id pregunta: 10270 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;En cu&aacute;l de los siguientes casos no es necesaria autorizaci&oacute;n del director de la AEPD para hacer una transferencia internacional de datos personales?";
 choices[90]= new Array();
 choices[90][0] = "Cuando se refiera a transferencias dinerarias conforme a su legislaci&oacute;n espec&iacute;fica ";
 choices[90][1] = "Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial ";
 choices[90][2] = "Cuando la transferencia se haga a efectos de prestar o solicitar auxilio judicial internacional ";
 choices[90][3] = "En los tres casos anteriores";
 answers[90] = choices[90][3];
 units[90] = "29";
 comments[90] = "Id Pregunta: 10270. Art&iacute;culo 34 de la Ley 15/1999";


//  Id pregunta: 10287 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  En la herramienta de control de versiones Subversion, &iquest;con que comando se suben los cambios al repositorio?";
 choices[91]= new Array();
 choices[91][0] = "svn commit";
 choices[91][1] = "svn checkin";
 choices[91][2] = "svn checkout";
 choices[91][3] = "svn upload";
 answers[91] = choices[91][0];
 units[91] = "78";
 comments[91] = "Id Pregunta: 10287. TIC A2, libre, examen 2013";


//  Id pregunta: 10303 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[92]= new Array();
 choices[92][0] = "Enlace.";
 choices[92][1] = "Red.";
 choices[92][2] = "Transporte.";
 choices[92][3] = "Aplicaci&oacute;n.";
 answers[92] = choices[92][2];
 units[92] = "48";
 comments[92] = "Id Pregunta: 10303. TIC A2, libre, examen 2013";


//  Id pregunta: 10316 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[93]= new Array();
 choices[93][0] = "4 bytes.";
 choices[93][1] = "6 bytes.";
 choices[93][2] = "12 bytes.";
 choices[93][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[93] = choices[93][0];
 units[93] = "101";
 comments[93] = "Id Pregunta: 10316. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10457 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[94]= new Array();
 choices[94][0] = "&lt;canvas&gt;";
 choices[94][1] = "&lt;applet&gt;";
 choices[94][2] = "&lt;keygen&gt;";
 choices[94][3] = "&lt;audio&gt;";
 answers[94] = choices[94][1];
 units[94] = "69";
 comments[94] = "Id Pregunta: 10457. ";


//  Id pregunta: 10492 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Cual de los siguientes no es un tipo de ataque ?";
 choices[95]= new Array();
 choices[95][0] = "Ataque por entrop&iacute;a";
 choices[95][1] = "Ataque por fuerza bruta";
 choices[95][2] = "Ataque con Tablas Arcoiris";
 choices[95][3] = "Todos son tipos de ataques";
 answers[95] = choices[95][0];
 units[95] = "111";
 comments[95] = "Id Pregunta: 10492. No hay referencias a ataques por entropia. En la guia CCN-STIC 436, por ejemplo, se pueden encontrar referencias a taques con Tablas Arcoiris, tambien en Wikipedia";


//  Id pregunta: 10511 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Qu&eacute; recomendaci&oacute;n define la Interfaz usuario-red de la red digital de servicios integrados de banda ancha?";
 choices[96]= new Array();
 choices[96][0] = "I.413";
 choices[96][1] = "I.411";
 choices[96][2] = "I.431";
 choices[96][3] = "I.314";
 answers[96] = choices[96][0];
 units[96] = "109";
 comments[96] = "Id Pregunta: 10511. ";


//  Id pregunta: 10520 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  En relaci&oacute;n al Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[97]= new Array();
 choices[97][0] = "Es presidido por el Ministro de Industria, Energ&iacute;a y Turismo";
 choices[97][1] = "Es un &oacute;rgano asesor del Gobierno en materia de telecomunicaciones y sociedad de la informaci&oacute;n";
 choices[97][2] = "Su composici&oacute;n y su r&eacute;gimen se establecen mediante Orden Ministerial";
 choices[97][3] = "Sus miembros representar&aacute;n entre otros a los sindicatos";
 answers[97] = choices[97][2];
 units[97] = "110";
 comments[97] = "Id Pregunta: 10520. ";


//  Id pregunta: 10545 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Europa 2020...";
 choices[98]= new Array();
 choices[98][0] = "La estrategia Europa 2020 trata de lograr un crecimiento inteligente, a trav&eacute;s de inversiones m&aacute;s eficaces en educaci&oacute;n, investigaci&oacute;n e innovaci&oacute;n, sostenible, gracias al impulso decidido a una econom&iacute;a baja en carbono, e integrador, que ponga el acento en la creaci&oacute;n de empleo y la reducci&oacute;n de la pobreza.";
 choices[98][1] = "La estrategia se centra en cinco ambiciosos objetivos en las &aacute;reas de empleo, innovaci&oacute;n, educaci&oacute;n, reducci&oacute;n de la pobreza y cambio clim&aacute;tico / energ&iacute;a.";
 choices[98][2] = "A y B son correctas";
 choices[98][3] = "Todas son incorrectas";
 answers[98] = choices[98][2];
 units[98] = "30";
 comments[98] = "Id Pregunta: 10545. ";


//  Id pregunta: 10555 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)   Cu&aacute;l de los siguientes debe ser el primer paso en una Auditor&iacute;a de Sistemas ";
 choices[99]= new Array();
 choices[99][0] = "Crear un diagrama de flujo de las ramas de decisi&oacute;n. ";
 choices[99][1] = "Comprender el entorno a estudiar";
 choices[99][2] = "Realizar una evaluaci&oacute;n de riesgos";
 choices[99][3] = "Desarrollar un plan de auditor&iacute;a";
 answers[99] = choices[99][1];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10555. Un auditor necesita obtener una comprensi&oacute;n de los procesos antes de crear un diagrama de flujo, evaluar los riesgos o desarrollar un plan de auditor&iacute;a";


