/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 66 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; indica un nivel de prioridad 3 en la norma WCAG 1.0 del WAI sobre un punto de verificaci&oacute;n?";
 choices[0]= new Array();
 choices[0][0] = "Un desarrollador de contenidos de p&aacute;ginas web tiene que satisfacer el punto de verificaci&oacute;n ";
 choices[0][1] = "Un desarrollador de contenidos de p&aacute;ginas web debe satisfacer el punto de verificaci&oacute;n";
 choices[0][2] = "Un desarrollador de contenidos de p&aacute;ginas web puede satisfacer el punto de verificaci&oacute;n";
 choices[0][3] = "Ninguna de las opciones anteriores es correcta";
 answers[0] = choices[0][2];
 units[0] = "39";
 comments[0] = "Id Pregunta: 66. ";


//  Id pregunta: 337 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  La realizaci&oacute;n de copias de &quot;backup&quot; peri&oacute;dicas en un centro de proceso de datos es responsabilidad del &aacute;rea de:";
 choices[1]= new Array();
 choices[1][0] = "Desarrollo";
 choices[1][1] = "Mantenimiento";
 choices[1][2] = "Producci&oacute;n";
 choices[1][3] = "En un centro de proceso de datos no es necesario hacer peri&oacute;dicamente copias de seguridad";
 answers[1] = choices[1][2];
 units[1] = "26";
 comments[1] = "Id Pregunta: 337. ";


//  Id pregunta: 585 Año de creación de pregunta: 2006-01-01
 questions[2]= "3)  Para mantener una buena gesti&oacute;n en las relaciones con los usuarios es necesario:";
 choices[2]= new Array();
 choices[2][0] = "No generar falsas expectativas";
 choices[2][1] = "Informar al usuario cual es el problema t&eacute;cnico.";
 choices[2][2] = "Adaptarse a las necesidades y calendario del usuario";
 choices[2][3] = "Aceptar todas las nuevas demandas del usuario";
 answers[2] = choices[2][0];
 units[2] = "26";
 comments[2] = "Id Pregunta: 585. ";


//  Id pregunta: 629 Año de creación de pregunta: 2006-01-01
 questions[3]= "4)  Qu&eacute; derecho de explotaci&oacute;n no reconoce expl&iacute;citamente la ley espa&ntilde;ola de propiedad intelectual:";
 choices[3]= new Array();
 choices[3][0] = "Derecho de integridad";
 choices[3][1] = "Derecho de distribuci&oacute;n.";
 choices[3][2] = "Derecho de reproducci&oacute;n.";
 choices[3][3] = "Derecho de comunicaci&oacute;n p&uacute;blica.";
 answers[3] = choices[3][0];
 units[3] = "36";
 comments[3] = "Id Pregunta: 629. ";


//  Id pregunta: 752 Año de creación de pregunta: 2004-01-01
 questions[4]= "5)  A finales del a&ntilde;o 2003, la industria lanz&oacute; un est&aacute;ndar H.350 de videoconferencia con el fin de impulsar el despliegue de este tipo de sistemas. &iquest;Sabr&iacute;a indicar en qu&eacute; consiste fundamentalmente?";
 choices[4]= new Array();
 choices[4][0] = "Permite una conversaci&oacute;n y negociaci&oacute;n sobre la calidad de los terminales sobre un protocolo HTTP entre dos extremos remotos ";
 choices[4][1] = "Complementa el est&aacute;ndar H.323 para soportar transmisi&oacute;n por l&iacute;neas ADSL";
 choices[4][2] = "Define un servicio de directorio basado en LDAP para usuarios y equipos de videoconferencia.";
 choices[4][3] = "Todas las anteriores";
 answers[4] = choices[4][2];
 units[4] = "117";
 comments[4] = "Id Pregunta: 752. ";


//  Id pregunta: 768 Año de creación de pregunta: 2009-01-01
 questions[5]= "6)  En los servicios de directorio";
 choices[5]= new Array();
 choices[5][0] = "varias entradas pueden compartir un DN";
 choices[5][1] = "las operaciones de actualizaci&oacute;n de LDAP no son at&oacute;micas";
 choices[5][2] = "LDAP utiliza habitualmente la pila de protocolos TCP / IP";
 choices[5][3] = "LDAP no se describe en t&eacute;rminos de ASN.1";
 answers[5] = choices[5][2];
 units[5] = "73";
 comments[5] = "Id Pregunta: 768. RFC 4512 y RFC 4514 ";


//  Id pregunta: 1047 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  El protocolo de acceso al directorio en X.500 es:";
 choices[6]= new Array();
 choices[6][0] = "TCP/IP";
 choices[6][1] = "LDAP";
 choices[6][2] = "IMAP";
 choices[6][3] = "DAP";
 answers[6] = choices[6][3];
 units[6] = "73";
 comments[6] = "Id Pregunta: 1047. ";


//  Id pregunta: 1283 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Los servlets:";
 choices[7]= new Array();
 choices[7][0] = "Son componentes que extienden la funcionalidad de los servidores orientados a &ldquo;request/response&rdquo;";
 choices[7][1] = "Son a los servidores lo que los applets son a los navegadores  y sustituyen a los scripts CGI";
 choices[7][2] = "Pueden manejar concurrentemente varias peticiones a otros servlets y a otros servidores, lo cual los hace ideales para sistemas de conferencias online";
 choices[7][3] = "Todas las respuestas anteriores son correctas";
 answers[7] = choices[7][0];
 units[7] = "116";
 comments[7] = "Id Pregunta: 1283. ";


//  Id pregunta: 1383 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Un servicio de directorio:";
 choices[8]= new Array();
 choices[8][0] = "Es una base de datos, orientada a consulta, con replicaci&oacute;n, y estructura jer&aacute;rquica";
 choices[8][1] = "Puede ser utilizado como un repositorio para guardar la informaci&oacute;n de los usuarios";
 choices[8][2] = "Puede ser utilizado como medio de autenticaci&oacute;n en sistemas heterogeneos";
 choices[8][3] = "Todas las respuestas anteriores son ciertas";
 answers[8] = choices[8][3];
 units[8] = "106";
 comments[8] = "Id Pregunta: 1383. ";


//  Id pregunta: 1592 Año de creación de pregunta: 2003-01-01
 questions[9]= "10)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[9]= new Array();
 choices[9][0] = "&lt;/TITLE&gt;";
 choices[9][1] = "&lt;TITLE&gt;";
 choices[9][2] = "/&lt;TITLE&gt;";
 choices[9][3] = "/TITLE";
 answers[9] = choices[9][0];
 units[9] = "69";
 comments[9] = "Id Pregunta: 1592. ";


//  Id pregunta: 1755 Año de creación de pregunta: 2006-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es el Proyecto Mono?";
 choices[10]= new Array();
 choices[10][0] = "Iniciativa para portar el entorno .Net a Linux";
 choices[10][1] = "Completa enciclopedia de animales creada por Microsoft";
 choices[10][2] = "Herramienta de Software Libre para la educaci&oacute;n de los ni&ntilde;os en las escuelas";
 choices[10][3] = "Programa de dibujo";
 answers[10] = choices[10][0];
 units[10] = "61,62";
 comments[10] = "Id Pregunta: 1755. ";


//  Id pregunta: 1773 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  &iquest;C&oacute;mo se llama la versi&oacute;n en software libre de la plataforma .Net?";
 choices[11]= new Array();
 choices[11][0] = ".DOT";
 choices[11][1] = ".free";
 choices[11][2] = "Mono";
 choices[11][3] = "Gambas";
 answers[11] = choices[11][2];
 units[11] = "61,62";
 comments[11] = "Id Pregunta: 1773. ";


//  Id pregunta: 1995 Año de creación de pregunta: 2004-01-01
 questions[12]= "13)  En un diagrama de transici&oacute;n de estados, en la metodolog&iacute;a Metrica V3:";
 choices[12]= new Array();
 choices[12][0] = "Se puede incluir mas de un estado inicial, que iran conectados mediante una transici&oacute;n sin etiquetar al primer estado del diagrama";
 choices[12][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final";
 choices[12][2] = "Puede haber varios estados finales en un diagrama, que ser&aacute;n mutuamente excluyentes";
 choices[12][3] = "Los &uacute;nicos elementos permitidos son estaedos, transiciones y acciones.";
 answers[12] = choices[12][2];
 units[12] = "86";
 comments[12] = "Id Pregunta: 1995. Pregunta TIC-B 2004";


//  Id pregunta: 2115 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Bajo qu&eacute; normas de la serie ISO-9000 puede registrarse una empresa?:";
 choices[13]= new Array();
 choices[13][0] = "9001, 9002 y 9003";
 choices[13][1] = "S&oacute;lo 9001";
 choices[13][2] = "9000, 9001, 9002, 9003 y 9004";
 choices[13][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[13] = choices[13][0];
 units[13] = "92";
 comments[13] = "Id Pregunta: 2115. ";


//  Id pregunta: 2219 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; t&eacute;cnica de las utilizadas en la metodolog&iacute;a M&Eacute;TRICA V3 tiene entre sus objetivos obtener un dise&ntilde;o que no s&oacute;lo 'funcione', sino que tambi&eacute;n sea mantenible, mejore la reutilizaci&oacute;n y se pueda probar y entender f&aacute;cilmente?:";
 choices[14]= new Array();
 choices[14][0] = "El modelo Entidad/Relaci&oacute;n";
 choices[14][1] = "Los diagramas de flujo de datos";
 choices[14][2] = "La historia de la vida de las entidades";
 choices[14][3] = "Diagrama de estructura";
 answers[14] = choices[14][3];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2219. ";


//  Id pregunta: 2269 Año de creación de pregunta: 2002-01-01
 questions[15]= "16)  El despliegue detallado de recursos para alcanzar los objetivos fijados en los planes estrat&eacute;gicos es funci&oacute;n de:";
 choices[15]= new Array();
 choices[15][0] = "La planificaci&oacute;n operativa";
 choices[15][1] = "El control anal&iacute;tico del gasto";
 choices[15][2] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[15][3] = "La previsi&oacute;n de beneficios";
 answers[15] = choices[15][0];
 units[15] = "77";
 comments[15] = "Id Pregunta: 2269. ";


//  Id pregunta: 2328 Año de creación de pregunta: 2002-01-01
 questions[16]= "17)  En la planificaci&oacute;n de un Sistema de Informaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "El horizonte temporal del nivel t&aacute;ctico se fija en 3-5 a&ntilde;os";
 choices[16][1] = "El nivel estrat&eacute;gico fija los objetivos/metas y plazos a largo plazo";
 choices[16][2] = "El nivel estrat&eacute;gico contiene informaci&oacute;n de los tres niveles inferiores";
 choices[16][3] = "El nivel t&aacute;ctico controla a los niveles inferiores y es el nexo de comunicaci&oacute;n externa de la empresa";
 answers[16] = choices[16][1];
 units[16] = "77";
 comments[16] = "Id Pregunta: 2328. ";


//  Id pregunta: 2446 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  Las m&eacute;tricas que tratan de evaluar si el software desarrollado cumple los requerimientos del usuario son las:";
 choices[17]= new Array();
 choices[17][0] = "M&eacute;tricas de productividad";
 choices[17][1] = "M&eacute;tricas de los factores de calidad";
 choices[17][2] = "M&eacute;tricas de complejidad";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][1];
 units[17] = "88";
 comments[17] = "Id Pregunta: 2446. ";


//  Id pregunta: 2485 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Respecto de la 'calidad del software' vs 'costes de implantaci&oacute;n' existen teor&iacute;as como:";
 choices[18]= new Array();
 choices[18][0] = "Teor&iacute;a libre : el coste es constante e independiente de la calidad del producto";
 choices[18][1] = "Teor&iacute;a de la productividad: un producto de calidad es m&aacute;s barato de producir, consecuentemente el coste disminuye exponencialmente con el aumento de calidad";
 choices[18][2] = "Teor&iacute;a de calidad/coste: el coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[18][3] = "Las 3 teor&iacute;as anteriores existen";
 answers[18] = choices[18][3];
 units[18] = "87,88";
 comments[18] = "Id Pregunta: 2485. ";


//  Id pregunta: 2574 Año de creación de pregunta: 2004-01-01
 questions[19]= "20)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Calidad/Coste dice:";
 choices[19]= new Array();
 choices[19][0] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[19][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[19][2] = "El coste es constante e independiente de la calidad del producto";
 choices[19][3] = "Ninguna de ellas";
 answers[19] = choices[19][0];
 units[19] = "87,88,92";
 comments[19] = "Id Pregunta: 2574. ";


//  Id pregunta: 2688 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  En METRICA v3, la actividad de &quot;Estudio de alternativas de soluci&oacute;n&quot; pertenece al proceso ...";
 choices[20]= new Array();
 choices[20][0] = "PSI (Planificaci&oacute;n de Sistemas de Informaci&oacute;n)";
 choices[20][1] = "EVS (Estudio de Viabilidad del Sistema)";
 choices[20][2] = "ASI (An&aacute;lisis del Sistema de Informaci&oacute;n)";
 choices[20][3] = "DSI (Dise&ntilde;o del Sistema de Informaci&oacute;n)";
 answers[20] = choices[20][1];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2688. ";


//  Id pregunta: 2689 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[21]= new Array();
 choices[21][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[21][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[21][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][2];
 units[21] = "87,88,92";
 comments[21] = "Id Pregunta: 2689. ";


//  Id pregunta: 2702 Año de creación de pregunta: 2004-01-01
 questions[22]= "23)  Respecto al an&aacute;lisis esencial de Yourdon se puede afirmar que ...";
 choices[22]= new Array();
 choices[22][0] = "Se ha de elaborar un modelo esencial y un modelo de implantaci&oacute;n de usuario";
 choices[22][1] = "El modelo esencial de compone de modelo ambiental  y modelo de comportamiento";
 choices[22][2] = "Para describir el modelo de comportamiento se usan DFDs y diagramas E-R";
 choices[22][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[22] = choices[22][3];
 units[22] = "81,84,78";
 comments[22] = "Id Pregunta: 2702. ";


//  Id pregunta: 2797 Año de creación de pregunta: 2006-01-01
 questions[23]= "24)  La t&eacute;cnica de Coste/beneficio contemplada en M&eacute;trica v3 no tiene como objetivo";
 choices[23]= new Array();
 choices[23][0] = "Estimar el plazo de realizaci&oacute;n del proyecto";
 choices[23][1] = "Estimar recursos";
 choices[23][2] = "selecci&oacute;n de alternativa m&aacute;s beneficiosa";
 choices[23][3] = "Oportunidad de acometer el proyecto";
 answers[23] = choices[23][0];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2797. ";


//  Id pregunta: 2805 Año de creación de pregunta: 2006-01-01
 questions[24]= "25)  En el modelo de McCall. Cu&aacute;l de los siguientes elementos no se considera un factor de calidad";
 choices[24]= new Array();
 choices[24][0] = "Reusabilidad";
 choices[24][1] = "Modularidad";
 choices[24][2] = "Flexibilidad";
 choices[24][3] = "Eficiencia";
 answers[24] = choices[24][1];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2805. ";


//  Id pregunta: 2888 Año de creación de pregunta: 2005-01-01
 questions[25]= "26)  La red SARA (Intranet Administrativa) no tiene entre sus principales objetivos:";
 choices[25]= new Array();
 choices[25][0] = "Ser un &uacute;nico punto de conexi&oacute;n con las Comunidades Aut&oacute;nomas";
 choices[25][1] = "Conectar con la Uni&oacute;n Europea a trav&eacute;s de TESTA e IDA";
 choices[25][2] = "Conectar todos los edificios de la Administraci&oacute;n General del Estado";
 choices[25][3] = "Ser de utilidad en la implantaci&oacute;n de aplicaciones horizontales";
 answers[25] = choices[25][2];
 units[25] = "113,44";
 comments[25] = "Id Pregunta: 2888. ";


//  Id pregunta: 2971 Año de creación de pregunta: 2004-01-01
 questions[26]= "27)  Dada la m&aacute;scara de red 255.240.0.0, &iquest;Cu&aacute;nta subredes ser&iacute;a posible incluir dentro de una red tipo A?";
 choices[26]= new Array();
 choices[26][0] = "Ninguna";
 choices[26][1] = "16";
 choices[26][2] = "14";
 choices[26][3] = "8";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 2971. Examen Julio 2003 (ver docu. IPsubnet0)";


//  Id pregunta: 2998 Año de creación de pregunta: 2004-01-01
 questions[27]= "28)  De los siguientes n&uacute;meros de puertos TCP y UDP indicar la falsa:";
 choices[27]= new Array();
 choices[27][0] = "21 para FTP";
 choices[27][1] = "23 para TELNET";
 choices[27][2] = "110 para POP3";
 choices[27][3] = "80 para DNS";
 answers[27] = choices[27][3];
 units[27] = "100";
 comments[27] = "Id Pregunta: 2998. ";


//  Id pregunta: 3041 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Entre qu&eacute; niveles de la arquitectura TCP/IP se encuentra el protocolo SSL (Secure Socket Layer)?:";
 choices[28]= new Array();
 choices[28][0] = "Por encima del nivel de aplicaci&oacute;n";
 choices[28][1] = "Al mismo nivel que el nivel de aplicaci&oacute;n";
 choices[28][2] = "Entre el nivel de aplicaci&oacute;n y TCP";
 choices[28][3] = "Entre TCP e IP";
 answers[28] = choices[28][2];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3041. ";


//  Id pregunta: 3059 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  El l&aacute;ser, como fuente de luz, es:";
 choices[29]= new Array();
 choices[29][0] = "Un oscilador &oacute;ptico basado en la formaci&oacute;n de una onda electromagn&eacute;tica confinada dentro de una cavidad";
 choices[29][1] = "Un rayo luminoso compuesto de ondas de diversas frecuencias";
 choices[29][2] = "Un dispositivo &oacute;ptico con ganancia interna y voltaje de ruptura ";
 choices[29][3] = "Un dispositivo utilizado para seleccionar los componentes de una se&ntilde;al de acuerdo con sus frecuencias";
 answers[29] = choices[29][0];
 units[29] = "99";
 comments[29] = "Id Pregunta: 3059. ";


//  Id pregunta: 3071 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  IRC es:";
 choices[30]= new Array();
 choices[30][0] = "Internet Relay Chat";
 choices[30][1] = "InfraRed Channel";
 choices[30][2] = "Investigation Resource Commitee";
 choices[30][3] = "Internet Resource Commitee";
 answers[30] = choices[30][0];
 units[30] = "112";
 comments[30] = "Id Pregunta: 3071. ";


//  Id pregunta: 3187 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguiente elementos residen en la capa de aplicaci&oacute;n de la pila TCP/IP?:";
 choices[31]= new Array();
 choices[31][0] = "TFTP";
 choices[31][1] = "FTP";
 choices[31][2] = "DNS";
 choices[31][3] = "Todos los anteriores  ";
 answers[31] = choices[31][3];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3187. ";


//  Id pregunta: 3301 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Qu&eacute; Ofertas tienen obligatoriamente que ser reguladas por la Administraci&oacute;n en materia de telecomunicaciones?:";
 choices[32]= new Array();
 choices[32][0] = "La Oferta de Referencia de Interconexi&oacute;n y la Oferta de Referencia de Cobertura";
 choices[32][1] = "La Oferta de Servicios P&uacute;blicos de Telefon&iacute;a y la Oferta de Bucle de Abonado";
 choices[32][2] = "La Oferta de Transmisi&oacute;n P&uacute;blica de Datos y la Oferta de Servicios P&uacute;blicos de Voz";
 choices[32][3] = "La Oferta de Referencia de Interconexi&oacute;n y la Oferta de Bucle de Abonado";
 answers[32] = choices[32][3];
 units[32] = "110";
 comments[32] = "Id Pregunta: 3301. ";


//  Id pregunta: 3320 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Sabe qu&eacute; organismo defini&oacute; el est&aacute;ndar TCP/IP?:";
 choices[33]= new Array();
 choices[33][0] = "American National Standard Institute (ANSI)";
 choices[33][1] = "Departamento de Defensa de EE.UU.";
 choices[33][2] = "International Standards Organization (ISO)";
 choices[33][3] = "Institute for Electrical and Electronic Engineers (IEEE)";
 answers[33] = choices[33][1];
 units[33] = "100,112";
 comments[33] = "Id Pregunta: 3320. ";


//  Id pregunta: 3586 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  La actividad conocida como spamming es:";
 choices[34]= new Array();
 choices[34][0] = "uso de una direcci&oacute;n IP falsa para suplantar identidades en Internet";
 choices[34][1] = "uso de mecanismos de proxy para ocultar identidades y direcciones en Internet";
 choices[34][2] = "uso del correo electr&oacute;nico para enviar publicidad no solicitada";
 choices[34][3] = "uso de algoritmos de rastreo en Internet para localizar bases de datos y servidores";
 answers[34] = choices[34][2];
 units[34] = "111";
 comments[34] = "Id Pregunta: 3586. ";


//  Id pregunta: 3614 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  La jerarqu&iacute;a digital MDH:";
 choices[35]= new Array();
 choices[35][0] = "Responde por Multimedia Digital Hierarchy";
 choices[35][1] = "Responde por Multiplexed Digital Hierarchy";
 choices[35][2] = "No existe ";
 choices[35][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[35] = choices[35][2];
 units[35] = "109";
 comments[35] = "Id Pregunta: 3614. ";


//  Id pregunta: 3616 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  La linea &quot;Connection: Keep Alive&quot;, dentro de un mensaje HTTP significa:";
 choices[36]= new Array();
 choices[36][0] = "Dice al servidor web que cierre la conexi&oacute;n";
 choices[36][1] = "Dice al servidor web que cierre la conexi&oacute;n desues de la peticion del cliente";
 choices[36][2] = "El resultado es el mismo en HTTP 1.0 y HTTP 1.1";
 choices[36][3] = "Le dice al servidor que cierra la conexi&oacute;n cuando el cliente lo pida";
 answers[36] = choices[36][3];
 units[36] = "112";
 comments[36] = "Id Pregunta: 3616. ";


//  Id pregunta: 3624 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  La normativa para sistemas de cableado de edificios es:";
 choices[37]= new Array();
 choices[37][0] = "EIA/TIA 568";
 choices[37][1] = "ISO/IEC DIS 11801";
 choices[37][2] = "EPHOS 2";
 choices[37][3] = "&quot;a&quot; y &quot;b&quot;";
 answers[37] = choices[37][3];
 units[37] = "99";
 comments[37] = "Id Pregunta: 3624. ";


//  Id pregunta: 3639 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  La reserva de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico implica que: ";
 choices[38]= new Array();
 choices[38][0] = "No es onerosa para el sujeto obligado";
 choices[38][1] = "Est&aacute; fijada en el Ley General de Presupuestos";
 choices[38][2] = "Seguir&aacute; las leyes de mercado y estimacion de su rentabilidad";
 choices[38][3] = "Las Administraciones P&uacute;blicas no estan exentas de su pago";
 answers[38] = choices[38][2];
 units[38] = "110";
 comments[38] = "Id Pregunta: 3639. ";


//  Id pregunta: 3679 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Una transmisi&oacute;n de datos que consiste en un &uacute;nico paquete de datos se env&iacute;a a un subconjunto espec&iacute;fico de los nodos de una red se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Broadcast";
 choices[39][1] = "Multicast";
 choices[39][2] = "Subnetcast";
 choices[39][3] = "Unicast";
 answers[39] = choices[39][1];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3679. ";


//  Id pregunta: 3725 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Los mensajes de respuesta HTTP de c&oacute;digo 5xx se corresponden con:";
 choices[40]= new Array();
 choices[40][0] = "error en el cliente";
 choices[40][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[40][2] = "error en el servidor";
 choices[40][3] = "petici&oacute;n con &eacute;xito";
 answers[40] = choices[40][2];
 units[40] = "112";
 comments[40] = "Id Pregunta: 3725. ";


//  Id pregunta: 3726 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  Los mensajes SMS:";
 choices[41]= new Array();
 choices[41][0] = "Viajan por un canal de se&ntilde;alizaci&oacute;n";
 choices[41][1] = "Viajan por un canal de voz";
 choices[41][2] = "Se codifican por pulsos";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][0];
 units[41] = "108";
 comments[41] = "Id Pregunta: 3726. ";


//  Id pregunta: 3743 Año de creación de pregunta: 2002-01-01
 questions[42]= "43)  Los sistemas de radio en los que los m&oacute;viles no est&aacute;n asignados a una &uacute;nica frecuencia sino que pueden usar una cualquiera de las frecuencias o canales disponibles se denomina:";
 choices[42]= new Array();
 choices[42][0] = "GSM";
 choices[42][1] = "TACS";
 choices[42][2] = "NMT";
 choices[42][3] = "Trunking";
 answers[42] = choices[42][3];
 units[42] = "108";
 comments[42] = "Id Pregunta: 3743. ";


//  Id pregunta: 3866 Año de creación de pregunta: 2004-01-01
 questions[43]= "44)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el cliente";
 choices[43]= new Array();
 choices[43][0] = "Applets";
 choices[43][1] = "JavaScript";
 choices[43][2] = "ActiveX";
 choices[43][3] = "CGI";
 answers[43] = choices[43][3];
 units[43] = "114";
 comments[43] = "Id Pregunta: 3866. Tanenbaum";


//  Id pregunta: 3873 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?:";
 choices[44]= new Array();
 choices[44][0] = "Modelo Entidad / relaci&oacute;n.";
 choices[44][1] = "Diagrama de Despliegue.";
 choices[44][2] = "Diagrama de Flujo de Datos (DFD).";
 choices[44][3] = "Diagrama de Interacci&oacute;n.";
 answers[44] = choices[44][2];
 units[44] = "86";
 comments[44] = "Id Pregunta: 3873. Junta Andaluc&iacute;a";


//  Id pregunta: 3899 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[45]= new Array();
 choices[45][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[45][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[45][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[45][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[45] = choices[45][1];
 units[45] = "99";
 comments[45] = "Id Pregunta: 3899. ";


//  Id pregunta: 3938 Año de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Qu&eacute; funci&oacute;n tiene el protocolo ICMP?";
 choices[46]= new Array();
 choices[46][0] = "Control";
 choices[46][1] = "Transporte de paquetes";
 choices[46][2] = "Redirecci&oacute;n de tramas";
 choices[46][3] = "Control de congesti&oacute;n";
 answers[46] = choices[46][0];
 units[46] = "112";
 comments[46] = "Id Pregunta: 3938. ";


//  Id pregunta: 4083 Año de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes software no funciona actualmente sobre Linux?";
 choices[47]= new Array();
 choices[47][0] = "PHP";
 choices[47][1] = "Java";
 choices[47][2] = "Lucene";
 choices[47][3] = "Jscript";
 answers[47] = choices[47][3];
 units[47] = "114";
 comments[47] = "Id Pregunta: 4083. ";


//  Id pregunta: 4102 Año de creación de pregunta: 2004-01-01
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[48]= new Array();
 choices[48][0] = "El protocolo TCP/IP nace en la Universidad de Berkeley que lo incluy&oacute; en su UNIX.";
 choices[48][1] = "El protocolo TCP/IP fue creado por IBM que lo incluy&oacute; en su sistema operativo propietario y se extendi&oacute; posteriormente en el mercado.";
 choices[48][2] = "El protocolo TCP/IP nace con el objetivo de interconectar ordenadores de distintas clases.";
 choices[48][3] = "El protocolo TCP/IP nace con el objetivo de comunicar redes diferentes";
 answers[48] = choices[48][3];
 units[48] = "112";
 comments[48] = "Id Pregunta: 4102. ";


//  Id pregunta: 4151 Año de creación de pregunta: 2006-01-01
 questions[49]= "50)  El sistema de gesti&oacute;n de la seguridad que autoriza el acceso de usuarios a recursos en entorno OS/390 se llama";
 choices[49]= new Array();
 choices[49][0] = "ACF2";
 choices[49][1] = "RACF";
 choices[49][2] = "RADIUS";
 choices[49][3] = "CICS";
 answers[49] = choices[49][1];
 units[49] = "111";
 comments[49] = "Id Pregunta: 4151. ";


//  Id pregunta: 4434 Año de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[50]= new Array();
 choices[50][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[50][1] = "100 kbps";
 choices[50][2] = "144 Kbps";
 choices[50][3] = "384 kbps";
 answers[50] = choices[50][3];
 units[50] = "108";
 comments[50] = "Id Pregunta: 4434. ";


//  Id pregunta: 4664 Año de creación de pregunta: 2007-01-01
 questions[51]= "52)  HSDPA corresponde a la generaci&oacute;n m&oacute;vil";
 choices[51]= new Array();
 choices[51][0] = "4G";
 choices[51][1] = "3.5G";
 choices[51][2] = "5G";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = choices[51][1];
 units[51] = "108";
 comments[51] = "Id Pregunta: 4664. ";


//  Id pregunta: 4852 Año de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes productos NO es resultado del proceso &quot;Implantaci&oacute;n y Aceptaci&oacute;n del Sistema&quot; (IAS) de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[52]= new Array();
 choices[52][0] = "Evaluaci&oacute;n del Resultado de las Pruebas de Integraci&oacute;n";
 choices[52][1] = "Evaluaci&oacute;n del Resultado de las Pruebas de Implantaci&oacute;n";
 choices[52][2] = "Acuerdo de Nivel de Servicio";
 choices[52][3] = "Plan de Mantenimiento";
 answers[52] = choices[52][0];
 units[52] = "86";
 comments[52] = "Id Pregunta: 4852. ";


//  Id pregunta: 4870 Año de creación de pregunta: 2007-01-01
 questions[53]= "54)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL)";
 choices[53]= new Array();
 choices[53][0] = "Permiten conocer el estado de un certificado en el instante de la consulta";
 choices[53][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondienteclave p&uacute;blica";
 choices[53][2] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n";
 choices[53][3] = "Las delta CRL son los subconjuntos en los que se divide una CRL y que instaladas en m&aacute;quinas distintasfacilitan su tratamiento";
 answers[53] = choices[53][2];
 units[53] = "73";
 comments[53] = "Id Pregunta: 4870. ";


//  Id pregunta: 4880 Año de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization /International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas yprotocolos de comunicaci&oacute;n?";
 choices[54]= new Array();
 choices[54][0] = "7816-2";
 choices[54][1] = "7816-3";
 choices[54][2] = "7816-4";
 choices[54][3] = "7816-5";
 answers[54] = choices[54][1];
 units[54] = "73";
 comments[54] = "Id Pregunta: 4880. ";


//  Id pregunta: 4991 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes NO es un servicio de Internet con arquitectura cliente/servidor?:";
 choices[55]= new Array();
 choices[55][0] = "ADSL";
 choices[55][1] = "Grupos noticias (news)";
 choices[55][2] = "FTP";
 choices[55][3] = "IRC";
 answers[55] = choices[55][0];
 units[55] = "112";
 comments[55] = "Id Pregunta: 4991. Examen TIC A 2007";


//  Id pregunta: 5137 Año de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Qu&eacute; es un diagrama de Gantt?";
 choices[56]= new Array();
 choices[56][0] = "Es un diagrama de barras en forma de tabla donde se hace una referencia cruzada entre las tareas y los tiempos de duraci&oacute;n de las mismas.";
 choices[56][1] = "Es un cuadro o tabla formado por dos columnas, en la primera se se&ntilde;alan las actividades y en la segunda se indican las fechas de finalizaci&oacute;n.";
 choices[56][2] = "Partiendo de la descomposici&oacute;n de un proyecto en actividades, estas ocurren entre dos sucesos. Se representa mediante un grafo en donde las actividades se reflejan mediante arcos y los sucesos mediante v&eacute;rtices.";
 choices[56][3] = "Es una matriz de referencias cruzadas entre los miembros del equipo de proyecto y su dedicaci&oacute;n al proyecto.";
 answers[56] = choices[56][0];
 units[56] = "77";
 comments[56] = "Id Pregunta: 5137. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5168 Año de creación de pregunta: 2003-01-01
 questions[57]= "58)  En una VPN (Virtual Private Network) de acceso remoto,";
 choices[57]= new Array();
 choices[57][0] = "Al tratarse de una red privada, no es necesario ning&uacute;n tipo de encapsulamiento de los paquetes de datos para protegerlos de posibles ataques.";
 choices[57][1] = "No es necesario verificar la identidad de los usuarios";
 choices[57][2] = "No permite cifrado de datos.";
 choices[57][3] = "Los paquetes de datos viajan por un tunel definido en la red p&uacute;blica";
 answers[57] = choices[57][3];
 units[57] = "111";
 comments[57] = "Id Pregunta: 5168. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5172 Año de creación de pregunta: 2003-01-01
 questions[58]= "59)  En el protocolo IPSEC, una asociaci&oacute;n de seguridad (SA) queda un&iacute;vocamente identificada por medio de:";
 choices[58]= new Array();
 choices[58][0] = "Una direcci&oacute;n IP";
 choices[58][1] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI)";
 choices[58][2] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI) y un puerto de comunicaci&oacute;n TCP.";
 choices[58][3] = "Una direcci&oacute;n IP y un &Iacute;ndice de Par&aacute;metro de Seguridad (SPI).";
 answers[58] = choices[58][3];
 units[58] = "111";
 comments[58] = "Id Pregunta: 5172. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5216 Año de creación de pregunta: 2007-01-01
 questions[59]= "60)  En qu&eacute; proceso se obtiene el producto &quot;Requisitos de Implantaci&oacute;n&quot;";
 choices[59]= new Array();
 choices[59][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[59][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[59][2] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[59][3] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 answers[59] = choices[59][0];
 units[59] = "86";
 comments[59] = "Id Pregunta: 5216. ";


//  Id pregunta: 5240 Año de creación de pregunta: 2003-01-01
 questions[60]= "61)  Para el desarrollo de una planificaci&oacute;n estrat&eacute;gica se necesita conocer:";
 choices[60]= new Array();
 choices[60][0] = "La misi&oacute;n de la organizaci&oacute;n";
 choices[60][1] = "Puntos d&eacute;biles y fuertes de la organizaci&oacute;n para sacar partido de ello";
 choices[60][2] = "Los clientes, competidores y accionistas";
 choices[60][3] = "Todas las anteriores.";
 answers[60] = choices[60][3];
 units[60] = "77";
 comments[60] = "Id Pregunta: 5240. ";


//  Id pregunta: 5247 Año de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indicar entre las siguientes, cu&aacute;l no se ajusta a definici&oacute;n de calidad del software";
 choices[61]= new Array();
 choices[61][0] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que se esperan de todo software desarrollado profesionalmente";
 choices[61][1] = "Creaci&oacute;n de productos software que tanto eficaz como eficientemente cumplan las expectativas del usuario";
 choices[61][2] = "La ausencia de errores o defectos, siendo &eacute;stos las desviaciones respecto al comportamiento esperado";
 choices[61][3] = "Todas las anteriores son definiciones de calidad del software";
 answers[61] = choices[61][3];
 units[61] = "87";
 comments[61] = "Id Pregunta: 5247. ";


//  Id pregunta: 5615 Año de creación de pregunta: 2003-01-01
 questions[62]= "63)  &iquest;Qu&eacute; es un SOCKS o un FWTK?";
 choices[62]= new Array();
 choices[62][0] = "Son servidores de contrase&ntilde;as y claves que protegen generalmente informaci&oacute;n vital mediante algoritmos de cifrado";
 choices[62][1] = "Servidores de autenticaci&oacute;n y proxy";
 choices[62][2] = "Servidores de nombres";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][1];
 units[62] = "111";
 comments[62] = "Id Pregunta: 5615. ";


//  Id pregunta: 5759 Año de creación de pregunta: 2009-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes no es un sistema operativo de la familia BSD?";
 choices[63]= new Array();
 choices[63][0] = "SecureBSD";
 choices[63][1] = "NetBSD";
 choices[63][2] = "DesktopBSD";
 choices[63][3] = "DragonflyBSD";
 answers[63] = choices[63][0];
 units[63] = "61";
 comments[63] = "Id Pregunta: 5759. ";


//  Id pregunta: 5788 Año de creación de pregunta: 2009-01-01
 questions[64]= "65)  En un radioenlace:";
 choices[64]= new Array();
 choices[64][0] = "El enlace descendente trabaja siempre a frecuencias superiores que el enlace descendente";
 choices[64][1] = "El enlace ascendente trabaja a frecuencias iguales o inferiores que el enlace descendente";
 choices[64][2] = "El enlace descendente trabaja, a veces, a frecuencias inferiores que el enlace descendente";
 choices[64][3] = "El enlace ascendente trabaja, a veces, a frecuencias iguales o superiores que el enlace descendente";
 answers[64] = choices[64][1];
 units[64] = "108";
 comments[64] = "Id Pregunta: 5788. ";


//  Id pregunta: 5789 Año de creación de pregunta: 2009-01-01
 questions[65]= "66)  En comunicaciones m&oacute;viles:";
 choices[65]= new Array();
 choices[65][0] = "La raz&oacute;n por la que se usan frecuencia altas para las comunicaciones m&oacute;viles es porque se alcanzan m&aacute;s distancias que con frecuencias inferiores para la misma potencia radiada";
 choices[65][1] = "El sentido de transmisi&oacute;n de estaci&oacute;n m&oacute;vil a estaci&oacute;n terrena suele ocupar la banda inferior de las dos en que se dividen los sistemas TDD.";
 choices[65][2] = "Las bandas de frecuencia m&aacute;s bajas suelen estar asociadas a mayores anchos de banda que las bandas de frecuencias m&aacute;s altas.";
 choices[65][3] = "Todas las anteriores son falsas.";
 answers[65] = choices[65][3];
 units[65] = "108";
 comments[65] = "Id Pregunta: 5789. ";


//  Id pregunta: 5854 Año de creación de pregunta: 2009-01-01
 questions[66]= "67)  En java, el atributo &quot;final&quot; en la declaraci&oacute;n de una variable de una clase significa que:";
 choices[66]= new Array();
 choices[66][0] = "S&oacute;lo las clases de su paquete pueden acceder a ella";
 choices[66][1] = "S&oacute;lo puede ser escrita una vez y no puede ser reescrita por clases hijas";
 choices[66][2] = "S&oacute;lo se puede acceder a trav&eacute;s de m&eacute;todos get y set";
 choices[66][3] = "Que forma parte del interface que implementa la clase";
 answers[66] = choices[66][1];
 units[66] = "116";
 comments[66] = "Id Pregunta: 5854. Pregunta 34";


//  Id pregunta: 5997 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  El derecho moral sobre un programa de ordenador implica que:";
 choices[67]= new Array();
 choices[67][0] = "El que tiene este derecho lo puede ceder o transmitir, con o sin contraprestaci&oacute;n econ&oacute;mica.";
 choices[67][1] = "El que tiene este derecho tambi&eacute;n posee el derecho de explotaci&oacute;n, reproducci&oacute;n, distribuci&oacute;n, comunicaci&oacute;n p&uacute;blica ytransformaci&oacute;n.";
 choices[67][2] = "El que tiene este derecho no lo puede ceder, ni transmitir, ni siquiera renunciar a &eacute;l.";
 choices[67][3] = "El que tiene este derecho puede exigir el derecho de remuneraci&oacute;n por copia privada.";
 answers[67] = choices[67][2];
 units[67] = "36";
 comments[67] = "Id Pregunta: 5997. TIC A 2009";


//  Id pregunta: 6093 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  M&eacute;trica 3 propone el uso de la t&eacute;cnica de an&aacute;lisis coste/beneficio en:";
 choices[68]= new Array();
 choices[68][0] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso ASI).";
 choices[68][1] = "Solamente en el proceso de Desarrollo (subprocesos EVS y ASI).";
 choices[68][2] = "Solamente en el proceso de Planificaci&oacute;n.";
 choices[68][3] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso EVS).";
 answers[68] = choices[68][3];
 units[68] = "86";
 comments[68] = "Id Pregunta: 6093. TIC A 2009";


//  Id pregunta: 6201 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  De acuerdo con M&eacute;trica versi&oacute;n 3, &iquest;qui&eacute;n participa en la obtenci&oacute;n del producto &quot;Entorno de pruebas unitarias&quot;, de la tarea &quot;Preparaci&oacute;n del entorno de las pruebas unitarias&quot;?";
 choices[69]= new Array();
 choices[69][0] = "T&eacute;cnicos de sistemas";
 choices[69][1] = "T&eacute;cnicos de sistemas y programadores";
 choices[69][2] = "Programadores";
 choices[69][3] = "Analistas, Programadores y T&eacute;cnicos de sistemas";
 answers[69] = choices[69][1];
 units[69] = "86";
 comments[69] = "Id Pregunta: 6201. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6280 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;les de las siguientes no es una fase definida en la planificaci&oacute;n estrat&eacute;gica?";
 choices[70]= new Array();
 choices[70][0] = "Formulaci&oacute;n de objetivos organizacionales";
 choices[70][1] = "An&aacute;lisis de las fortalezas y limitaciones de la empresa";
 choices[70][2] = "Reestructuraci&oacute;n de la empresa";
 choices[70][3] = "Formulaci&oacute;n de alternativas estrat&eacute;gicas";
 answers[70] = choices[70][2];
 units[70] = "77";
 comments[70] = "Id Pregunta: 6280. ";


//  Id pregunta: 6283 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Qu&eacute; &oacute;rganos no suelen ser necesarios a la hora de realizar una planificaci&oacute;n y direcci&oacute;n estrat&eacute;gica?";
 choices[71]= new Array();
 choices[71][0] = "Los proveedores";
 choices[71][1] = "El equipo de proyecto";
 choices[71][2] = "El comit&eacute; de direcci&oacute;n";
 choices[71][3] = "Un grupo de usuarios";
 answers[71] = choices[71][0];
 units[71] = "77";
 comments[71] = "Id Pregunta: 6283. ";


//  Id pregunta: 6361 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Seguridad?";
 choices[72]= new Array();
 choices[72][0] = "RD 4/2010";
 choices[72][1] = "RD 40/2010";
 choices[72][2] = "RD 4/2009";
 choices[72][3] = "RD 3/2010";
 answers[72] = choices[72][3];
 units[72] = "43";
 comments[72] = "Id Pregunta: 6361. ";


//  Id pregunta: 6371 Año de creación de pregunta: 2010-01-01
 questions[73]= "74)  En el Esquema Nacional de Seguridad, las dimensiones de seguridad se adscribir&aacute;n a uno de los siguientes niveles:";
 choices[73]= new Array();
 choices[73][0] = "Bajo, Medio o Alto";
 choices[73][1] = "Limitado, Grave o Muy Grave";
 choices[73][2] = "B&aacute;sico, Medio o Alto";
 choices[73][3] = "B&aacute;sico, Medio, Alto o Muy Alto";
 answers[73] = choices[73][0];
 units[73] = "43";
 comments[73] = "Id Pregunta: 6371. Anexo I ENS";


//  Id pregunta: 6390 Año de creación de pregunta: 2010-01-01
 questions[74]= "75)  Los ciudadanos podr&aacute;n utilizar para relacionarse con la Administraci&oacute;n General del Estado, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad";
 choices[74]= new Array();
 choices[74][0] = "Cuando as&iacute; lo permita el tr&aacute;mite pertinente";
 choices[74][1] = "En todo caso";
 choices[74][2] = "En ning&uacute;n caso";
 choices[74][3] = "Cuando lo autorice el responsable del proceso";
 answers[74] = choices[74][1];
 units[74] = "43";
 comments[74] = "Id Pregunta: 6390. Art&iacute;culo 10 RD 1671/2009";


//  Id pregunta: 6405 Año de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es la duraci&oacute;n de los derechos de explotaci&oacute;n, cuando el autor de un programa de ordenador sea una persona jur&iacute;dica?";
 choices[75]= new Array();
 choices[75][0] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 choices[75][1] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[75][2] = "Setenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[75][3] = "Cincuenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 answers[75] = choices[75][2];
 units[75] = "36";
 comments[75] = "Id Pregunta: 6405. Art&iacute;culo 98 RDL 1/1996";


//  Id pregunta: 6464 Año de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l es el proceso que recibe como entrada los resultados o productos del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n?";
 choices[76]= new Array();
 choices[76][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[76][1] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[76][2] = "Estudio de Viabilidad del Sistema";
 choices[76][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[76] = choices[76][2];
 units[76] = "86";
 comments[76] = "Id Pregunta: 6464. Castilla La Mancha 2009";


//  Id pregunta: 6542 Año de creación de pregunta: 2010-01-01
 questions[77]= "78)  Un usuario de Kerberos";
 choices[77]= new Array();
 choices[77][0] = "Recibe un ticket para garantizar el acceso TGT";
 choices[77][1] = "El ticket permite al usuario pedir acceso a los distintos recursos";
 choices[77][2] = "El servicio de generaci&oacute;n de tickets TGS genera los tickets con las claves de sesi&oacute;n.";
 choices[77][3] = "Todas las respuestas anteriores son correctas";
 answers[77] = choices[77][3];
 units[77] = "111";
 comments[77] = "Id Pregunta: 6542. ";


//  Id pregunta: 6564 Año de creación de pregunta: 2010-01-01
 questions[78]= "79)  GPRS no se caracteriza por";
 choices[78]= new Array();
 choices[78][0] = "Servicio simult&aacute;neo de voz y datos";
 choices[78][1] = "No existe multiplexaci&oacute;n de voz y datos";
 choices[78][2] = "Servicio no orientado a conexi&oacute;n";
 choices[78][3] = "Tarificaci&oacute;n por volumen de datos intercambiado";
 answers[78] = choices[78][1];
 units[78] = "108";
 comments[78] = "Id Pregunta: 6564. ";


//  Id pregunta: 6627 Año de creación de pregunta: 2010-01-01
 questions[79]= "80)  El orden de los niveles del modelo CMM de Ingenier&iacute;a de Software es:";
 choices[79]= new Array();
 choices[79][0] = "Inicial; Repetible; Definido; Gestionado; Optimizado";
 choices[79][1] = "Inicial; Definido; Repetible; Gestionado; Optimizado";
 choices[79][2] = "Inicial; Definido; Gestionado; Repetible; Optimizado";
 choices[79][3] = "Inicial; Repetible; Gestionado; Definido; Optimizado";
 answers[79] = choices[79][0];
 units[79] = "87";
 comments[79] = "Id Pregunta: 6627. ";


//  Id pregunta: 6646 Año de creación de pregunta: 2010-01-01
 questions[80]= "81)  El nombre del modelo COCOMO se corresponde con:";
 choices[80]= new Array();
 choices[80][0] = "Constructive Cost Model";
 choices[80][1] = "Cost Control Model";
 choices[80][2] = "Comprehensive Cost Model";
 choices[80][3] = "Continuous Cost Model";
 answers[80] = choices[80][0];
 units[80] = "89";
 comments[80] = "Id Pregunta: 6646. ";


//  Id pregunta: 7347 Año de creación de pregunta: 2010-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes es un portal de gesti&oacute;n de contenidos de c&oacute;digo abierto?";
 choices[81]= new Array();
 choices[81][0] = "MOSS";
 choices[81][1] = "Liferay";
 choices[81][2] = "Websphere Portal";
 choices[81][3] = "Open Text";
 answers[81] = choices[81][1];
 units[81] = "95";
 comments[81] = "Id Pregunta: 7347. ";


//  Id pregunta: 8214 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  En la aprobaci&oacute;n del Plan de Sistemas de Informaci&oacute;n en la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 participan:";
 choices[82]= new Array();
 choices[82][0] = "Comit&eacute; de Direcci&oacute;n y jefe de proyecto del PSI.";
 choices[82][1] = "Comit&eacute; de Direcci&oacute;n, jefe de proyecto y usuarios expertos.";
 choices[82][2] = "Comit&eacute; de Direcci&oacute;n, consultores y jefe de proyecto.";
 choices[82][3] = "Jefe de proyecto, responsable de seguridad y usuarios expertos.";
 answers[82] = choices[82][0];
 units[82] = "86";
 comments[82] = "Id Pregunta: 8214. Examen TIC A1 2010";


//  Id pregunta: 8342 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Qu&eacute; se intenta conseguir al aplicar t&eacute;micas de denormalizaci&oacute;n en algunas tablas en una base de datos que fue normalizada previamente?";
 choices[83]= new Array();
 choices[83][0] = "Optimizar el desempe&ntilde;o de la base de datos.";
 choices[83][1] = "Evitar datos redundantes.";
 choices[83][2] = "Proteger la integridad de los datos.";
 choices[83][3] = "Facilitar el uso al usuano final.";
 answers[83] = choices[83][0];
 units[83] = "86";
 comments[83] = "Id Pregunta: 8342. Examen TIC A2 2010";


//  Id pregunta: 8346 Año de creación de pregunta: 2011-01-01
 questions[84]= "85)  &iquest;Qu&eacute; pruebas tienen como objetivo comprobar que los cambios sobre un componente de un sistema de informaci&oacute;n no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados?";
 choices[84]= new Array();
 choices[84][0] = "Pruebas unitarias.";
 choices[84][1] = "Pruebas del Sistema.";
 choices[84][2] = "Pruebas de Implantaci&oacute;n.";
 choices[84][3] = "Pruebas de Regresi&oacute;n.";
 answers[84] = choices[84][3];
 units[84] = "86";
 comments[84] = "Id Pregunta: 8346. Examen TIC A2 2010";


//  Id pregunta: 8358 Año de creación de pregunta: 2011-01-01
 questions[85]= "86)  Se&ntilde;ale cu&aacute;l de &eacute;stas es una de las funciones del Grupo de Aseguramiento de la Calidad (seg&uacute;n M&eacute;trica v3): ";
 choices[85]= new Array();
 choices[85][0] = "Definir los recursos que se necesitan para instalar el sistema.";
 choices[85][1] = "Identificar las posibles desviac&iacute;ones en los est&aacute;ndares aplicados, as&iacute; como en los requisitos y procedimientos especificados.";
 choices[85][2] = "Notificar a los desarrolladores de las anomal&iacute;as encontradas en el proceso de desarrollo.";
 choices[85][3] = "Documentar las pruebas seg&uacute;n el est&aacute;ndar ISO 9000:2000.";
 answers[85] = choices[85][1];
 units[85] = "86";
 comments[85] = "Id Pregunta: 8358. Examen TIC A2 2010";


//  Id pregunta: 8387 Año de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes productos resultan del proceso de Construcci&oacute;n del SI seg&uacute;n M&eacute;trica v3?";
 choices[86]= new Array();
 choices[86][0] = "Cat&aacute;logo de Requisitos.";
 choices[86][1] = "Especificaciones de Construcci&oacute;n del Sistema.";
 choices[86][2] = "Modelo de Datos.";
 choices[86][3] = "Manuales de Usuario.";
 answers[86] = choices[86][3];
 units[86] = "86";
 comments[86] = "Id Pregunta: 8387. Examen TIC A2 2010";


//  Id pregunta: 8399 Año de creación de pregunta: 2011-01-01
 questions[87]= "88)  Las comunicaciones efectuadas a ciudadanos a trav&eacute;s de medios electr&oacute;nicos ser&aacute;n v&aacute;lidas de acuerdo al art&iacute;culo 27 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, siempre que:";
 choices[87]= new Array();
 choices[87][0] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fldedignamente al destinatario de las mismas";
 choices[87][1] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fidedignarnente al remitente y al destinatario de las mismas. ";
 choices[87][2] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones y se identifique fidedignamente al remitente y al destinatario de las mismas. ";
 choices[87][3] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones, se identifique fidedignarnente al remitente y al destinatario de las mismas y una norma con rango de Ley permita el uso de un medio electr&oacute;nico en el procedimiento";
 answers[87] = choices[87][2];
 units[87] = "43";
 comments[87] = "Id Pregunta: 8399. Examen TIC A2 2010";


//  Id pregunta: 8426 Año de creación de pregunta: 2011-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas de interoperabilidad no est&aacute; contemplada en el Desarrollo del Esquema Nacional de Interoperabilidad (disposici&oacute;n adicional primera), en el Real Decreto 4/2010 del 8 de enero?";
 choices[88]= new Array();
 choices[88][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[88][1] = "Documento electr&oacute;nico";
 choices[88][2] = "Expediente electr&oacute;nico";
 choices[88][3] = "Sede electr&oacute;nica";
 answers[88] = choices[88][3];
 units[88] = "43";
 comments[88] = "Id Pregunta: 8426. ";


//  Id pregunta: 8592 Año de creación de pregunta: 2011-01-01
 questions[89]= "90)  En J2EE &iquest;qu&eacute; es un fichero WAR?";
 choices[89]= new Array();
 choices[89][0] = "Contiene los recursos y librer&iacute;as necesarias para compilar un proyecto";
 choices[89][1] = "Contiene la aplicaci&oacute;n web lista para ser desplegada en cualquier contenedor de servlets/jsp.";
 choices[89][2] = "Contiene los m&oacute;dulos EJB de las aplicaciones";
 choices[89][3] = "No existen los ficheros WAR en J2EE";
 answers[89] = choices[89][1];
 units[89] = "116";
 comments[89] = "Id Pregunta: 8592. Examen TIC A2 2010 interna";


//  Id pregunta: 8668 Año de creación de pregunta: 2011-01-01
 questions[90]= "91)  Los cortafuegos de filtrado de paquetes &iquest;en qu&eacute; capa TCP/IP act&uacute;an?";
 choices[90]= new Array();
 choices[90][0] = "Capa IP";
 choices[90][1] = "Capa de Aplicaci&oacute;n";
 choices[90][2] = "Capa de Sesi&oacute;n";
 choices[90][3] = "Capa de Transporte";
 answers[90] = choices[90][0];
 units[90] = "111";
 comments[90] = "Id Pregunta: 8668. Examen UPM A2 2011";


//  Id pregunta: 8732 Año de creación de pregunta: 2011-01-01
 questions[91]= "92)  Los ciudadanos podr&aacute;n utilizar el siguiente sistema de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas:";
 choices[91]= new Array();
 choices[91][0] = "Siempre se exigir&aacute; firma electr&oacute;nica reconocida, como garant&iacute;a jur&iacute;dica.";
 choices[91][1] = "&Uacute;nicamente el ser&aacute; v&aacute;lido el DNI electr&oacute;nico, una vez extendido a toda la poblaci&oacute;n";
 choices[91][2] = "Firma electr&oacute;nica avanzada.";
 choices[91][3] = "Est&aacute; pendiente de desarrollo reglamentario el uso efectivo de la firma electr&oacute;nica en esos casos.";
 answers[91] = choices[91][2];
 units[91] = "43";
 comments[91] = "Id Pregunta: 8732. Examen TIC A2 2010 interna";


//  Id pregunta: 8746 Año de creación de pregunta: 2011-01-01
 questions[92]= "93)  En el contexto de la Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, un ciudadano es:";
 choices[92]= new Array();
 choices[92][0] = "Es siempre una persona f&iacute;sica o una persona jur&iacute;dica";
 choices[92][1] = "Siempre es una persona f&iacute;sica, aunque sea representando a una persona jur&iacute;dica.";
 choices[92][2] = "Siempre son personas jur&iacute;dicas, y las personas f&iacute;sicas se entienden como entes sin personalidad.";
 choices[92][3] = "Una persona f&iacute;sica, una persona jur&iacute;dica o. incluso, un ente sin personalidad";
 answers[92] = choices[92][3];
 units[92] = "43";
 comments[92] = "Id Pregunta: 8746. Examen TIC A2 2010 interna";


//  Id pregunta: 8747 Año de creación de pregunta: 2011-01-01
 questions[93]= "94)  En el &aacute;mbito de la Administraci&oacute;n General del Estado, &iquest;es posible la notificaci&oacute;n mediante recepci&oacute;n en direcci&oacute;n de correo electr&oacute;nico que los ciudadanos elijan?";
 choices[93]= new Array();
 choices[93][0] = "No est&aacute; previsto para tal fin el uso de una direcci&oacute;n de correo electr&oacute;nico que elijan los ciudadanos, sino s&oacute;lo el uso de la denominada direcci&oacute;n electr&oacute;nica habilitada";
 choices[93][1] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario sendos acuses de salida y recibo, que dejen constancia de su emisi&oacute;n y recepci&oacute;n y que so originen, respectivamente, en el momento del envi&oacute; y de acceso al contenido de la notificaci&oacute;n";
 choices[93][2] = "Si, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuse de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido de la notificaci&oacute;n.";
 choices[93][3] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuso de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido c&iacute;e la notificaci&oacute;n Asimismo, el ciudadano podr&aacute; solicitar un acuse de salida, que deje constancia de su emisi&oacute;n y que se origine en el momento del env&iacute;o de la notificaci&oacute;n";
 answers[93] = choices[93][2];
 units[93] = "43";
 comments[93] = "Id Pregunta: 8747. Examen TIC A2 2010 interna";


//  Id pregunta: 8852 Año de creación de pregunta: 2011-01-01
 questions[94]= "95)  Entre los tipos de componentes que pueden desarrollarse en aplicaciones basadas en J2EE 1.4 tenemos:";
 choices[94]= new Array();
 choices[94][0] = "P&aacute;ginas Asp y DLL";
 choices[94][1] = "Applet, Servlets, EJBs";
 choices[94][2] = "Javascript y p&aacute;ginas JSP";
 choices[94][3] = "Componentes COM";
 answers[94] = choices[94][1];
 units[94] = "116";
 comments[94] = "Id Pregunta: 8852. Analista Ayto. Madrid 2010";


//  Id pregunta: 8904 Año de creación de pregunta: 2011-01-01
 questions[95]= "96)  Un applet de Java de una p&aacute;gina Web &iquest;d&oacute;nde se ejecuta?:";
 choices[95]= new Array();
 choices[95][0] = "En el navegador del cliente.";
 choices[95][1] = "En el servidor Web.";
 choices[95][2] = "En el proxy.";
 choices[95][3] = "En el servidor de aplicaciones";
 answers[95] = choices[95][0];
 units[95] = "60";
 comments[95] = "Id Pregunta: 8904. Operador Ayto. Madrid 2010";


//  Id pregunta: 8943 Año de creación de pregunta: 2011-01-01
 questions[96]= "97)  El Comit&eacute; t&eacute;cnico estatal de la Administraci&oacute;n judicial electr&oacute;nica no estar&aacute; integrado por:";
 choices[96]= new Array();
 choices[96][0] = "Una representaci&oacute;n del Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[96][1] = "Los representantes que al efecto podr&aacute; designar la Fiscal&iacute;a General del Estado";
 choices[96][2] = "Una representaci&oacute;n del Ministerio de Justicia";
 choices[96][3] = "Estar&aacute; integrado por todos los anteriores";
 answers[96] = choices[96][0];
 units[96] = "43";
 comments[96] = "Id Pregunta: 8943. ";


//  Id pregunta: 9018 Año de creación de pregunta: 2011-01-01
 questions[97]= "98)  Cuando una l&iacute;nea de transmisi&oacute;n cumple la condici&oacute;n de Heaviside:";
 choices[97]= new Array();
 choices[97][0] = "El retardo es m&iacute;nimo.";
 choices[97][1] = "El retardo es m&aacute;ximo.";
 choices[97][2] = "El retardo es constante.";
 choices[97][3] = "No existe retardo";
 answers[97] = choices[97][2];
 units[97] = "99";
 comments[97] = "Id Pregunta: 9018. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9100 Año de creación de pregunta: 2013-01-01
 questions[98]= "99)  De los siguientes elementos, &iquest; cu&aacute;les no est&aacute;n definidos por el lenguaje ODRL?";
 choices[98]= new Array();
 choices[98][0] = "Assets.";
 choices[98][1] = "Rights.";
 choices[98][2] = "Resources.";
 choices[98][3] = "Parties.";
 answers[98] = choices[98][2];
 units[98] = "37";
 comments[98] = "Id Pregunta: 9100. ";


//  Id pregunta: 9377 Año de creación de pregunta: 2013-01-01
 questions[99]= "100)  &iquest;Qu&eacute; m&eacute;todo de asignaci&oacute;n de pesos no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[99]= new Array();
 choices[99][0] = "Asignaci&oacute;n directa";
 choices[99][1] = "Entrop&iacute;a";
 choices[99][2] = "SAATY";
 choices[99][3] = "La herramienta SSD-AAPP soporta todos los m&eacute;todos anteriores de asignaci&oacute;n de pesos";
 answers[99] = choices[99][3];
 units[99] = "34";
 comments[99] = "Id Pregunta: 9377. ";


