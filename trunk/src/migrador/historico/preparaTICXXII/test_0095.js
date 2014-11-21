/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 77 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; par&aacute;metro no interviene directamente en evaluar el rendimiento de un sistema?:";
 choices[0]= new Array();
 choices[0][0] = "Tiempo de respuesta";
 choices[0][1] = "Productividad o throughput";
 choices[0][2] = "Tipo de procesador";
 choices[0][3] = "Tasa de utilizaci&oacute;n de CPU";
 answers[0] = choices[0][2];
 units[0] = "35";
 comments[0] = "Id Pregunta: 77. ";


//  Id pregunta: 95 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  A los efectos de la Ley Org&aacute;nica de Protecci&oacute;n de Datos (LOPD), se entienden por datos de car&aacute;cter personal:";
 choices[1]= new Array();
 choices[1][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas o jur&iacute;dicas identificadas";
 choices[1][1] = "Cualquier informaci&oacute;n relativa a la salud, ideolog&iacute;a, religi&oacute;n, creencias, origen racial o vida sexual de las personas";
 choices[1][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 choices[1][3] = "Cualquier informaci&oacute;n sobre las personas, excluidas las de car&aacute;cter pol&iacute;tico, sindical o religioso";
 answers[1] = choices[1][2];
 units[1] = "29";
 comments[1] = "Id Pregunta: 95. ";


//  Id pregunta: 98 Año de creación de pregunta: 2002-01-01
 questions[2]= "3)  Al hablar de &quot;Metodolog&iacute;a de planificaci&oacute;n de capacidad&quot;, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[2]= new Array();
 choices[2][0] = "La metodolog&iacute;a Bench-Mark se usa para comparar distintos sistemas inform&aacute;ticos frente a una carga caracter&iacute;stica de una instalaci&oacute;n concreta que permite realizar mediciones en el ambiente real";
 choices[2][1] = "La metodolog&iacute;a de proyecci&oacute;n lineal se basa en leyes como las de Parkinson y Murphy";
 choices[2][2] = "La metodolog&iacute;a de proyecci&oacute;n lineal se puede aplicar para explicar fen&oacute;menos de comportamiento no lineal";
 choices[2][3] = "La metodolog&iacute;a Bench-Mark se basa en la utilizaci&oacute;n de programas para simular la realidad ";
 answers[2] = choices[2][0];
 units[2] = "25";
 comments[2] = "Id Pregunta: 98. ";


//  Id pregunta: 230 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  En los conceptos principales de la seguridad inform&aacute;tica no es cierto que:";
 choices[3]= new Array();
 choices[3][0] = "los da&ntilde;os sobre los activos producen impactos";
 choices[3][1] = "los impactos son materializaciones de las amenazas sobre los activos";
 choices[3][2] = "las salvaguardas ofrecen medidas curativas sobre los impactos, y preventivas sobre las vulnerabilidades";
 choices[3][3] = "los riesgos son las frecuencias con las que se pueden producir las amenazas sobre los activos";
 answers[3] = choices[3][3];
 units[3] = "33";
 comments[3] = "Id Pregunta: 230. ";


//  Id pregunta: 236 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  En su dimensi&oacute;n vertical, el sistema de informaci&oacute;n tiene tres niveles jer&aacute;rquicos:";
 choices[4]= new Array();
 choices[4][0] = "Entradas, procesos y salidas";
 choices[4][1] = "Operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[4][2] = "De an&aacute;lisis, de construcci&oacute;n y de implantaci&oacute;n";
 choices[4][3] = "Jer&aacute;rquico, de gesti&oacute;n y operativo";
 answers[4] = choices[4][1];
 units[4] = "21";
 comments[4] = "Id Pregunta: 236. ";


//  Id pregunta: 480 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;De qu&eacute; depende el canon de compensacion equitativa por copia privada establecido con la orden PRE/1743/2008 de 18 de junio?";
 choices[5]= new Array();
 choices[5][0] = "Del tipo de equipo (anal&oacute;gico o digital)";
 choices[5][1] = "Del destino del soporte";
 choices[5][2] = "De la categoria del equipo";
 choices[5][3] = "Todas son ciertas";
 answers[5] = choices[5][3];
 units[5] = "36,37";
 comments[5] = "Id Pregunta: 480. ";


//  Id pregunta: 654 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  &iquest;Cu&aacute;ndo es mejor realizar una auditor&iacute;a de vulnerabilidades que un test de penetraci&oacute;n?";
 choices[6]= new Array();
 choices[6][0] = "Normalmente es necesario ejecutar ambos";
 choices[6][1] = "Cuando buscas una visi&oacute;n m&aacute;s amplia del entorno en lugar de una visi&oacute;n m&aacute;s concreta de un punto";
 choices[6][2] = "Cuando los tests de penetraci&oacute;n est&aacute;n llenos de falsos positivos";
 choices[6][3] = "Cuando los tests de penetraci&oacute;n pueden, potencialmente, da&ntilde;ar equipos cr&iacute;ticos ";
 answers[6] = choices[6][1];
 units[6] = "31";
 comments[6] = "Id Pregunta: 654. ";


//  Id pregunta: 983 Año de creación de pregunta: 2002-01-01
 questions[7]= "8)  Dentro de la inteligencia artificial, indicar la afirmaci&oacute;n correcta:";
 choices[7]= new Array();
 choices[7][0] = "El sistema de Kleene completo abarca tambi&eacute;n el c&aacute;lculo de predicados para lo cual se incluyen m&aacute;s axiomas y m&aacute;s reglas de demostraci&oacute;n";
 choices[7][1] = "El sistema de deducci&oacute;n natural se diferencia fundamentalmente de los de teor&iacute;a de la demostraci&oacute;n en que en &eacute;l no se demuestran las deducciones f&oacute;rmula a f&oacute;rmula, sino toda la deducci&oacute;n como si fuera una &uacute;nica f&oacute;rmula";
 choices[7][2] = "El sistema de deducci&oacute;n natural tiene mayor capacidad que el sistema de Kleene para admitir la definici&oacute;n de procedimientos eficientes de b&uacute;squeda sistem&aacute;tica de demostraciones";
 choices[7][3] = "Dentro de la teor&iacute;a sem&aacute;ntica, la descripci&oacute;n del sistema con este planteamiento con c&aacute;lculo posicional se realiza, entre otras con un conjunto de significados atribuibles a las proposiciones y con  una definici&oacute;n sint&aacute;ctica de conectivas";
 answers[7] = choices[7][3];
 units[7] = "63";
 comments[7] = "Id Pregunta: 983. ";


//  Id pregunta: 1312 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Referente al lenguaje m&aacute;quina de un ordenador, se puede afirmar que:";
 choices[8]= new Array();
 choices[8][0] = "El lenguaje m&aacute;quina es independiente de la CPU del ordenador";
 choices[8][1] = "El lenguaje m&aacute;quina, los datos se proporcionan mediante las direcciones de memoria donde &eacute;stos se encuentran";
 choices[8][2] = "Las instrucciones en lenguaje m&aacute;quina no tienen generalmente formato r&iacute;gido en cuanto a la posici&oacute;n de los distintos campos que las configuran";
 choices[8][3] = "El lenguaje m&aacute;quina era algo propio de los ordenadores de &eacute;pocas pasadas, hoy d&iacute;a la mayoria ejecuta directamente c&oacute;digo C";
 answers[8] = choices[8][1];
 units[8] = "47";
 comments[8] = "Id Pregunta: 1312. ";


//  Id pregunta: 1462 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  Indique cu&aacute;l de las siguientes afirmaciones es v&aacute;lida para el proceso &quot;Two Phase COMMIT&quot;:";
 choices[9]= new Array();
 choices[9][0] = "Es un programa con 2 versiones de trabajo";
 choices[9][1] = "Es una garant&iacute;a de consistencia entre bases de datos";
 choices[9][2] = "Es una funcionalidad para recuperaci&oacute;n de datos";
 choices[9][3] = "Es un equipo tolerante a fallos";
 answers[9] = choices[9][1];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1462. ";


//  Id pregunta: 1493 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;En qu&eacute; condiciones est&aacute; permitido el env&iacute;o de comunicaciones comerciales por medios electr&oacute;nicos? :";
 choices[10]= new Array();
 choices[10][0] = "Se permite el env&iacute;o de mensajes publicitarios o comerciales por correo electr&oacute;nico a aquellos usuarios que previamente lo hubieran autorizado o lo hubieran solicitado de forma expresa";
 choices[10][1] = "El spam est&aacute; permitido si se conoce el emisor";
 choices[10][2] = "El SMS no es equiparable al mail, por lo tanto el env&iacute;o masivo con este medio esta pemitido";
 choices[10][3] = "Siempre aunque no lo hayan solocitado los receptores, pues el emisor aparece en el mensaje";
 answers[10] = choices[10][0];
 units[10] = "30";
 comments[10] = "Id Pregunta: 1493. ";


//  Id pregunta: 1597 Año de creación de pregunta: 2003-01-01
 questions[11]= "12)  En relaci&oacute;n con la interfaz ODBC, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[11]= new Array();
 choices[11][0] = "Es la implementaci&oacute;n realizada por Microsoft de las especificaciones CLI (Call Level Interface) para el acceso desde aplicaciones a sistemas gestores de base de datos";
 choices[11][1] = "La idea que sustenta el desarrollo de ODBC es la de permitir que una misma aplicaci&oacute;n puea interactuar con distintos sistemas gestores de base de datos";
 choices[11][2] = "Dispone de flexibilidad como interfaz pero impide aprovechar las ventajas de la arquitectura cliente servidor";
 choices[11][3] = "Permite que lo que un sistema gestor pueda hacer le sea transparente a la aplicaci&oacute;n, aunque no implementa nuevas capacidades";
 answers[11] = choices[11][2];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1597. ";


//  Id pregunta: 1614 Año de creación de pregunta: 2003-01-01
 questions[12]= "13)  Las l&iacute;neas de un bus se pueden clasificar en grupos funcionales de:";
 choices[12]= new Array();
 choices[12][0] = "L&iacute;neas de direcci&oacute;n y de control.";
 choices[12][1] = "L&iacute;neas de entrada y salida.";
 choices[12][2] = "L&iacute;neas de datos, l&iacute;neas de direcci&oacute;n y l&iacute;neas de control.";
 choices[12][3] = "L&iacute;neas de control de operaci&oacute;n y de salida.";
 answers[12] = choices[12][2];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1614. Junta Andaluc&iacute;a";


//  Id pregunta: 1782 Año de creación de pregunta: 2006-01-01
 questions[13]= "14)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[13]= new Array();
 choices[13][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[13][1] = "Hoja de c&aacute;lculo para KDE";
 choices[13][2] = "Sistema gestor de redes empresariales extendidas";
 choices[13][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[13] = choices[13][3];
 units[13] = "61,62";
 comments[13] = "Id Pregunta: 1782. ";


//  Id pregunta: 1878 Año de creación de pregunta: 2006-01-01
 questions[14]= "15)  El RD 209/2003 Regulaci&oacute;n de registros y notificaciones telem&aacute;ticas se aplica a:";
 choices[14]= new Array();
 choices[14][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[14][1] = "Las Administraciones P&uacute;blicas y Entidades Locales.";
 choices[14][2] = "La Administraci&oacute;n General del Estado.";
 choices[14][3] = " A ninguna a no ser que se realice su desarrollo.";
 answers[14] = choices[14][2];
 units[14] = "30";
 comments[14] = "Id Pregunta: 1878. ";


//  Id pregunta: 1894 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  La tecnolog&iacute;a utilizada para medir y analizar caracter&iacute;sticas del cuerpo humano con prop&oacute;sitos de autenticaci&oacute;n se llama";
 choices[15]= new Array();
 choices[15][0] = "huella";
 choices[15][1] = "biom&eacute;trica";
 choices[15][2] = "JBOD";
 choices[15][3] = "antropomorfismo";
 answers[15] = choices[15][1];
 units[15] = "74";
 comments[15] = "Id Pregunta: 1894. ";


//  Id pregunta: 2003 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  Cuando en el dise&ntilde;o orientado a objetos se habla de &quot;requerimientos funcionales&quot; se debe entender:";
 choices[16]= new Array();
 choices[16][0] = "La descripci&oacute;n formal del comportamiento de cada uno de los objetos del sistema.";
 choices[16][1] = "La descripci&oacute;n, habitualmente mediante diagramas UML, de las relaciones entre las componentes del sistema.";
 choices[16][2] = "La descripci&oacute;n semi-formal de los requisitos del tiempo de ejecuci&oacute;n impuestos por el usuario.";
 choices[16][3] = "La descripci&oacute;n de las interacciones entre el sistema y su ambiente, de forma independiente a su implementaci&oacute;n.";
 answers[16] = choices[16][3];
 units[16] = "84";
 comments[16] = "Id Pregunta: 2003. ";


//  Id pregunta: 2101 Año de creación de pregunta: 2002-01-01
 questions[17]= "18)  En un sistema transaccional, se liberan los registros intervinientes en una transacci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "S&oacute;lo cuando la actualizaci&oacute;n tiene lugar en varias bases de datos.";
 choices[17][1] = "Cuando acaba la rutina que los actualiza.";
 choices[17][2] = "Cuando otra transacci&oacute;n los intenta bloquear para actualizarlos.";
 choices[17][3] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado.";
 answers[17] = choices[17][3];
 units[17] = "57,58,83";
 comments[17] = "Id Pregunta: 2101. ";


//  Id pregunta: 2234 Año de creación de pregunta: 2002-01-01
 questions[18]= "19)  Al esfuerzo requerido para modificar un programa en explotaci&oacute;n se llama:";
 choices[18]= new Array();
 choices[18][0] = "Usabilidad";
 choices[18][1] = "Mantenibilidad";
 choices[18][2] = "Verificabilidad";
 choices[18][3] = "Flexibilidad";
 answers[18] = choices[18][3];
 units[18] = "88";
 comments[18] = "Id Pregunta: 2234. ";


//  Id pregunta: 2277 Año de creación de pregunta: 2002-01-01
 questions[19]= "20)  El Lenguaje de Definici&oacute;n de Datos (LDD) describe:";
 choices[19]= new Array();
 choices[19][0] = "Las propiedades din&aacute;micas de las entidades";
 choices[19][1] = "Las propiedades est&aacute;ticas de las entidades";
 choices[19][2] = "Los dos tipos de propiedades, es indiferente";
 choices[19][3] = "No define propiedades, define comportamientos";
 answers[19] = choices[19][1];
 units[19] = "57";
 comments[19] = "Id Pregunta: 2277. ";


//  Id pregunta: 2314 Año de creación de pregunta: 2002-01-01
 questions[20]= "21)  En el modelo en espiral o iterativo del ciclo de vida, cada ciclo en espiral empieza con la identificaci&oacute;n de:";
 choices[20]= new Array();
 choices[20][0] = "Los objetivos de la parte del producto que va a ser elaborada";
 choices[20][1] = "Los medios alternativos para implementar esta parte de producto (dise&ntilde;o A, dise&ntilde;o B, productos software, etc ...)";
 choices[20][2] = "Las restricciones impuestas : costes, calendario, interfaces, etc";
 choices[20][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[20] = choices[20][3];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2314. ";


//  Id pregunta: 2378 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  Hacer una previsi&oacute;n de procedimientos de recuperaci&oacute;n se debe contemplar en:";
 choices[21]= new Array();
 choices[21][0] = "Plan de Contingencias";
 choices[21][1] = "Control de accesos a bases de datos";
 choices[21][2] = "Mantenimiento y dise&ntilde;o de aplicaciones";
 choices[21][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[21] = choices[21][0];
 units[21] = "96";
 comments[21] = "Id Pregunta: 2378. ";


//  Id pregunta: 2445 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  Las metodolog&iacute;as:";
 choices[22]= new Array();
 choices[22][0] = "Definen el conjunto de elementos del mundo real que intervienen en el sistema y son modelizables";
 choices[22][1] = "Emplean formalismos gr&aacute;ficos para derivar los procedimientos y recursos";
 choices[22][2] = "Emplean t&eacute;cnicas de auditor&iacute;a como fuente de integraci&oacute;n de prototipos";
 choices[22][3] = "Existen dos enfoques: en los m&eacute;todos aqu&eacute;llos que se orientan hacia los datos y aquellos que se orientan hacia los tratamientos";
 answers[22] = choices[22][3];
 units[22] = "79";
 comments[22] = "Id Pregunta: 2445. ";


//  Id pregunta: 2449 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Las series ISO-9000, desde el punto de vista de su &aacute;mbito, podr&iacute;an calificarse como:";
 choices[23]= new Array();
 choices[23][0] = "Certificaci&oacute;n de producto";
 choices[23][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[23][2] = "Total Quality Management";
 choices[23][3] = "Ninguno de los anteriores";
 answers[23] = choices[23][1];
 units[23] = "87";
 comments[23] = "Id Pregunta: 2449. ";


//  Id pregunta: 2541 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los distintos tipos de sintetizadores de voz existentes se pueden clasificar en:";
 choices[24]= new Array();
 choices[24][0] = "Sintetizadores articulatorios. Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 choices[24][1] = "Sintetizadores autom&aacute;ticos. Sintetizadores manuales. Sintetizadores programables";
 choices[24][2] = "Sintetizadores programables. Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 choices[24][3] = "Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 answers[24] = choices[24][0];
 units[24] = "94";
 comments[24] = "Id Pregunta: 2541. ";


//  Id pregunta: 2780 Año de creación de pregunta: 2006-01-01
 questions[25]= "26)  &iquest;Cu&aacute;ndo aplicar&iacute;a usted un ciclo de vida basado en prototipos?";
 choices[25]= new Array();
 choices[25][0] = "Cuando los requisitios son dif&iacute;ciles de revisar";
 choices[25][1] = "Cuando el sistema es cr&iacute;tico";
 choices[25][2] = "Para desarrollos de larga duraci&oacute;n";
 choices[25][3] = "Se aplicar&iacute;a en todos los casos anteriores";
 answers[25] = choices[25][0];
 units[25] = "85";
 comments[25] = "Id Pregunta: 2780. ";


//  Id pregunta: 2795 Año de creación de pregunta: 2006-01-01
 questions[26]= "27)  Qu&eacute; actividades componen la Interfaz de Gesti&oacute;n de proyectos en M&eacute;trica v3";
 choices[26]= new Array();
 choices[26][0] = "Inicio del proyecto, seguimiento y control, Finalizaci&oacute;n y registro del proyecto";
 choices[26][1] = "Planificaci&oacute;n de la calidad, Seguimiento y control, Finalizaci&oacute;n del proyecto";
 choices[26][2] = "Inicio del proyecto, seguimiento y supervisi&oacute;n, cierre del proyecto";
 choices[26][3] = "Inicio del proyecto, seguimiento y control y Finalizaci&oacute;n del proyecto";
 answers[26] = choices[26][3];
 units[26] = "86";
 comments[26] = "Id Pregunta: 2795. ";


//  Id pregunta: 2807 Año de creación de pregunta: 2006-01-01
 questions[27]= "28)  El modelo de Jelinsi-Moranda se encuadra dentro de las m&eacute;tricas de:";
 choices[27]= new Array();
 choices[27][0] = "Productividad";
 choices[27][1] = "Fiabilidad";
 choices[27][2] = "Factores de calidad";
 choices[27][3] = "Complejidad";
 answers[27] = choices[27][1];
 units[27] = "88";
 comments[27] = "Id Pregunta: 2807. ";


//  Id pregunta: 3250 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;les son las t&eacute;cnicas de compartici&oacute;n utilizadas para compartir el recurso com&uacute;n (medio de transmisi&oacute;n o nodo central) en las LAN?:";
 choices[28]= new Array();
 choices[28][0] = "Acceso m&uacute;ltiple mediante detecci&oacute;n de portadora con detecci&oacute;n de colisiones (CSMA/CD)";
 choices[28][1] = "Paso de testigo";
 choices[28][2] = "Acceso m&uacute;ltiple mediante detecci&oacute;n de portadora con detecci&oacute;n de colisiones (CSMA/CD), o paso de testigo,  seg&uacute;n el tipo de red";
 choices[28][3] = "Selecci&oacute;n, contienda y reserva";
 answers[28] = choices[28][3];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3250. ";


//  Id pregunta: 3344 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  Control de temperatura, ahorro de gasto de energ&iacute;a seg&uacute;n la hora del d&iacute;a, gesti&oacute;n de alarmas a distancia&hellip;, son disciplinas englobadas en la:";
 choices[29]= new Array();
 choices[29][0] = "Teleinform&aacute;tica.";
 choices[29][1] = "Automatizaci&oacute;n de procesos y rob&oacute;tica.";
 choices[29][2] = "Dom&oacute;tica.";
 choices[29][3] = "Telem&aacute;tica industrial.";
 answers[29] = choices[29][2];
 units[29] = "47";
 comments[29] = "Id Pregunta: 3344. *: domotica";


//  Id pregunta: 3659 Año de creación de pregunta: 2002-01-01
 questions[30]= "31)  Un control Active X:";
 choices[30]= new Array();
 choices[30][0] = "S&oacute;lo se pueden escribir en Java";
 choices[30][1] = "S&oacute;lo se pueden ejecutar en sistemas Windows/Intel";
 choices[30][2] = "S&oacute;lo pueden acceder a funciones dentro del contenedor en el que se ejecutan";
 choices[30][3] = "S&oacute;lo se pueden escribir en C/C++";
 answers[30] = choices[30][1];
 units[30] = "115";
 comments[30] = "Id Pregunta: 3659. ";


//  Id pregunta: 3723 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los est&aacute;ndares MPT 1327 y TETRA servicios de:";
 choices[31]= new Array();
 choices[31][0] = "Radiob&uacute;squeda";
 choices[31][1] = "Radiomensajer&iacute;a";
 choices[31][2] = "Comunicaciones mar&iacute;timas";
 choices[31][3] = "Radiocomunicaciones privadas";
 answers[31] = choices[31][3];
 units[31] = "108";
 comments[31] = "Id Pregunta: 3723. ";


//  Id pregunta: 3784 Año de creación de pregunta: 2002-01-01
 questions[32]= "33)  Respecto a J2ME y Symbian:";
 choices[32]= new Array();
 choices[32][0] = "Symbian soporta J2ME, y J2ME soporta Symbian";
 choices[32][1] = "Symbian soporta J2ME, y J2ME no soporta Symbian";
 choices[32][2] = "Symbian no soporta J2ME, y J2ME soporta Symbian";
 choices[32][3] = "Symbian no soporta J2ME, y J2ME no soporta Symbian";
 answers[32] = choices[32][1];
 units[32] = "60";
 comments[32] = "Id Pregunta: 3784. ";


//  Id pregunta: 3791 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  Respecto a los dispositivos de interconexi&oacute;n de redes locales, es falso que:";
 choices[33]= new Array();
 choices[33][0] = "El repetidor compatibiliza 2 medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[33][1] = "Los puentes operan a nivel de enlace, subnivel LLC para un mismo nivel MAC";
 choices[33][2] = "Los enrutadores conectan LANs con LANs, MANs o WANs";
 choices[33][3] = "Las pasarelas trabajan a nivel de red o superior";
 answers[33] = choices[33][1];
 units[33] = "102";
 comments[33] = "Id Pregunta: 3791. ";


//  Id pregunta: 3828 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  Separaci&oacute;n del tr&aacute;fico de voz y datos, reutilizaci&oacute;n de infraestructuras existentes,  necesidad de proximidad a la central local, inversiones en equipamientos del usuario&hellip;, son todas caracter&iacute;sticas propias de las tecnolog&iacute;as:";
 choices[34]= new Array();
 choices[34][0] = "de los m&oacute;dems de cable";
 choices[34][1] = "de los dispositivos WAP";
 choices[34][2] = "de xDSL";
 choices[34][3] = "de LMDS";
 answers[34] = choices[34][2];
 units[34] = "107";
 comments[34] = "Id Pregunta: 3828. ";


//  Id pregunta: 3945 Año de creación de pregunta: 2003-01-01
 questions[35]= "36)  El lenguaje comunmente utilizado para desarrollo de aplicaciones WAP es:";
 choices[35]= new Array();
 choices[35][0] = "WML";
 choices[35][1] = "C++";
 choices[35][2] = "Visual Basic";
 choices[35][3] = "Ninguno de los anteriores";
 answers[35] = choices[35][0];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3945. ";


//  Id pregunta: 4086 Año de creación de pregunta: 2006-01-01
 questions[36]= "37)  El formato para im&aacute;genes GIF";
 choices[36]= new Array();
 choices[36][0] = "Se basa en un algoritmo de compresi&oacute;n patentado, lo que te&oacute;ricamente limita su uso";
 choices[36][1] = "Significa Graphic Interleaved Format (Formato Gr&aacute;fico Entrelazado)";
 choices[36][2] = "Fue creado por Microsoft";
 choices[36][3] = "Ninguna de las anteriores es correcta";
 answers[36] = choices[36][0];
 units[36] = "114";
 comments[36] = "Id Pregunta: 4086. ";


//  Id pregunta: 4241 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  Cu&aacute;l de las siguientes no es una fase t&iacute;pica de PUDS (Proceso Unificado del Desarrollo del SW)";
 choices[37]= new Array();
 choices[37][0] = "Iniciaci&oacute;n";
 choices[37][1] = "Finalizaci&oacute;n";
 choices[37][2] = "Transici&oacute;n";
 choices[37][3] = "Elaboraci&oacute;n";
 answers[37] = choices[37][1];
 units[37] = "79";
 comments[37] = "Id Pregunta: 4241. ";


//  Id pregunta: 4396 Año de creación de pregunta: 2009-01-01
 questions[38]= "39)  En GNU/Linux se utilizan diversos programas para la gesti&oacute;n de versiones, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[38]= new Array();
 choices[38][0] = "mercurial";
 choices[38][1] = "ksafe";
 choices[38][2] = "git";
 choices[38][3] = "bazaar";
 answers[38] = choices[38][1];
 units[38] = "54";
 comments[38] = "Id Pregunta: 4396. ";


//  Id pregunta: 4518 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  En relaci&oacute;n con los entornos OLAP, indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[39]= new Array();
 choices[39][0] = "Los sistemas MOLAP son capaces de almacenar mas informaci&oacute;n que los ROLAP.";
 choices[39][1] = "Los sistemas ROLAP son multidimensionales.";
 choices[39][2] = "Los sistemas ROLAP son capaces de almacenar m&aacute;s informaci&oacute;n que los MOLAP.";
 choices[39][3] = "Los sistemas MOLAP son relacionales.";
 answers[39] = choices[39][2];
 units[39] = "68";
 comments[39] = "Id Pregunta: 4518. ";


//  Id pregunta: 4529 Año de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Cual de los siguientes no es un perfil contemplado en Ia metodolog&iacute;a M&eacute;trica 3?";
 choices[40]= new Array();
 choices[40][0] = "Perfil Directivo.";
 choices[40][1] = "Perfil Jefe de Proyecto.";
 choices[40][2] = "Perfil Consultor.";
 choices[40][3] = "Perfil Usuario.";
 answers[40] = choices[40][3];
 units[40] = "86";
 comments[40] = "Id Pregunta: 4529. ";


//  Id pregunta: 4542 Año de creación de pregunta: 2007-01-01
 questions[41]= "42)  La concesi&oacute;n por un municipio de una licencia de establecimiento de instalaci&oacute;n de una antena previa a la aprobaci&oacute;n del Plan Territorial de Despliegue de Red que incluya a dicha antena, ser&aacute;:";
 choices[41]= new Array();
 choices[41][0] = "Nula de pleno derecho.";
 choices[41][1] = "Valida a todos los efectos.";
 choices[41][2] = "Valida si el Plan Territorial de Despliegue de Red que incluye a dicha antena se aprueba durante el mes siguiente a Ia concesi&oacute;n.";
 choices[41][3] = "Nula si la antena no se aprueba en el mes siguiente a contar desde Ia fecha de la concesi&oacute;n de la licencia.";
 answers[41] = choices[41][0];
 units[41] = "110";
 comments[41] = "Id Pregunta: 4542. ";


//  Id pregunta: 4723 Año de creación de pregunta: 2007-01-01
 questions[42]= "43)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos yatributos del directorio activo se encuentra en el:";
 choices[42]= new Array();
 choices[42][0] = "Schema Naming Context";
 choices[42][1] = " Active Directory Schema MMC";
 choices[42][2] = "Configuration Naming Context";
 choices[42][3] = "Domain Naming Context";
 answers[42] = choices[42][0];
 units[42] = "59,115";
 comments[42] = "Id Pregunta: 4723. Examen 2006 JCYL";


//  Id pregunta: 4742 Año de creación de pregunta: 2007-01-01
 questions[43]= "44)  Cual de las siguientes afirmaciones es incorrecta:";
 choices[43]= new Array();
 choices[43][0] = "PNG comprime mejor que el formato GIF las im&aacute;genes";
 choices[43][1] = "W3C desaconseja el uso del formato GIF por el posible pago de patentes";
 choices[43][2] = "PNG y GIF soportan animaci&oacute;n de im&aacute;genes";
 choices[43][3] = "PNG soporta un m&aacute;ximo de 256 colores";
 answers[43] = choices[43][2];
 units[43] = "93";
 comments[43] = "Id Pregunta: 4742. Examen 2006 JCYL";


//  Id pregunta: 4764 Año de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indicar cual no es un Dominio de COBIT:";
 choices[44]= new Array();
 choices[44][0] = "Planificaci&oacute;n y organizaci&oacute;n";
 choices[44][1] = "Control y Calidad";
 choices[44][2] = "Prestaci&oacute;n y soporte";
 choices[44][3] = "Adquisici&oacute;n e implementaci&oacute;n";
 answers[44] = choices[44][1];
 units[44] = "98";
 comments[44] = "Id Pregunta: 4764. ";


//  Id pregunta: 4874 Año de creación de pregunta: 2007-01-01
 questions[45]= "46)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[45]= new Array();
 choices[45][0] = "La preferencia local";
 choices[45][1] = "El agregado at&oacute;mico";
 choices[45][2] = "El pr&oacute;ximo salto";
 choices[45][3] = "El agregador";
 answers[45] = choices[45][2];
 units[45] = "102";
 comments[45] = "Id Pregunta: 4874. ";


//  Id pregunta: 5026 Año de creación de pregunta: 2003-01-01
 questions[46]= "47)  En relaci&oacute;n con las ventanas de cr&eacute;dito (de recepci&oacute;n y de envio) que utiliza el protocolo TCP para el control deflujo, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[46]= new Array();
 choices[46][0] = "Permiten que el emisor no tenga que esperar un ACK (acknowledge) para cada segmento de datostransmitido";
 choices[46][1] = "El tama&ntilde;o del b&uacute;fer de esta ventanas est&aacute; limitado a 4096 bytes";
 choices[46][2] = "Impiden que se reenv&iacute;en paquetes pasado un time-out";
 choices[46][3] = "Hace que el canal de comunicaci&oacute;n est&eacute; m&aacute;s tiempo ocupado para transmitir la misma informaci&oacute;n.";
 answers[46] = choices[46][0];
 units[46] = "100";
 comments[46] = "Id Pregunta: 5026. Examen TIC A 2007";


//  Id pregunta: 5031 Año de creación de pregunta: 2003-01-01
 questions[47]= "48)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece que:";
 choices[47]= new Array();
 choices[47][0] = "El Gobierno crear&aacute; una entidad p&uacute;blica para la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[47][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[47][2] = "El Gobierno, mediante Decreto, establecer&aacute; el procedimiento por el que las operadoras gestionar&aacute;n elFondo nacional del servicio universal";
 choices[47][3] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n se encargar&aacute; de lagesti&oacute;n del Fondo nacional del servicio universal";
 answers[47] = choices[47][1];
 units[47] = "110";
 comments[47] = "Id Pregunta: 5031. Examen TIC A 2007";


//  Id pregunta: 5152 Año de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes NO es un tipo de asociaci&oacute;n de un diagrama de clases?";
 choices[48]= new Array();
 choices[48][0] = "Interrelaciones";
 choices[48][1] = "Sometimiento";
 choices[48][2] = "Generalizaci&oacute;n";
 choices[48][3] = "Agregaci&oacute;n";
 answers[48] = choices[48][1];
 units[48] = "82";
 comments[48] = "Id Pregunta: 5152. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5496 Año de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;les son los contenedores de la tecnolog&iacute;a Java EE?";
 choices[49]= new Array();
 choices[49][0] = "EJB Container y Web Container";
 choices[49][1] = "EJB Container, Web Container y Application Client Container";
 choices[49][2] = "b) y Applet Container";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = choices[49][2];
 units[49] = "60";
 comments[49] = "Id Pregunta: 5496. ";


//  Id pregunta: 5507 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Qu&eacute; formato se emplea para la emision de facturas electr&oacute;nicas por parte de la AGE?";
 choices[50]= new Array();
 choices[50][0] = "XBRL";
 choices[50][1] = "ebXML";
 choices[50][2] = "UBL";
 choices[50][3] = "Facturae";
 answers[50] = choices[50][3];
 units[50] = "70";
 comments[50] = "Id Pregunta: 5507. ";


//  Id pregunta: 5586 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Qu&eacute; porcentaje sobre el importe de adjudicaci&oacute;n supone la garant&iacute;a definitiva, en un contrato con las administraciones p&uacute;blicas, seg&uacute;n el nuevo RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[51]= new Array();
 choices[51][0] = "Un 4%";
 choices[51][1] = "Un 5%";
 choices[51][2] = "Un 6%";
 choices[51][3] = "Un 8%";
 answers[51] = choices[51][1];
 units[51] = "41";
 comments[51] = "Id Pregunta: 5586. ";


//  Id pregunta: 5606 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;En qu&eacute; Real Decreto se establece la elaboraci&oacute;n de un Plan Director de Telecomunicaciones como herramienta de planificaci&oacute;n en el &aacute;mbito de cada departamento ministerial?";
 choices[52]= new Array();
 choices[52][0] = "En el RD 551/2001";
 choices[52][1] = "En el 541/2002";
 choices[52][2] = "En el 451/2002";
 choices[52][3] = "En el 541/2001";
 answers[52] = choices[52][3];
 units[52] = "104";
 comments[52] = "Id Pregunta: 5606. ";


//  Id pregunta: 5635 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  La velocidad de transmisi&oacute;n seg&uacute;n la Recomendaci&oacute;n V.34 de la UIT-T es:";
 choices[53]= new Array();
 choices[53][0] = "33,2 Kbps";
 choices[53][1] = "33,4 Kbps";
 choices[53][2] = "33,6 Kbps";
 choices[53][3] = "33,8 Kbps";
 answers[53] = choices[53][2];
 units[53] = "47";
 comments[53] = "Id Pregunta: 5635. ";


//  Id pregunta: 5690 Año de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Qui&eacute;n expide los certificados del DNI electr&oacute;nico?";
 choices[54]= new Array();
 choices[54][0] = "El Ministerio de Administraciones P&uacute;blicas";
 choices[54][1] = "La plataforma @firma";
 choices[54][2] = "La Entidad P&uacute;blica Red.es";
 choices[54][3] = "La Direcci&oacute;n General de la Polic&iacute;a";
 answers[54] = choices[54][3];
 units[54] = "74";
 comments[54] = "Id Pregunta: 5690. ";


//  Id pregunta: 5693 Año de creación de pregunta: 2003-01-01
 questions[55]= "56)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Se&ntilde;ale cu&aacute;l de las siguientes no es una de ellas:";
 choices[55]= new Array();
 choices[55][0] = "Zona p&uacute;blica";
 choices[55][1] = " Zona de seguridad";
 choices[55][2] = "Zona privada";
 choices[55][3] = "Zona confidencial";
 answers[55] = choices[55][3];
 units[55] = "74";
 comments[55] = "Id Pregunta: 5693. ";


//  Id pregunta: 5753 Año de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Por qu&eacute; el algoritmo DSA no sirve para cifrar?";
 choices[56]= new Array();
 choices[56][0] = "Porque al realizar funciones modulo x (donde x es uno de los valores p&uacute;blicos del sistema) no se puede realizar su inversi&oacute;n";
 choices[56][1] = "Porque realiza un hash del mensaje, por tanto no es recuperable";
 choices[56][2] = "Porque tendr&iacute;amos que enviar la clave privada";
 choices[56][3] = "No es cierto, el algoritmo DSA s&iacute; sirve para cifrar";
 answers[56] = choices[56][1];
 units[56] = "72";
 comments[56] = "Id Pregunta: 5753. ";


//  Id pregunta: 5765 Año de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos de normalizaci&oacute;n de puntuaciones no mantiene la proporcionalidad entre puntuaciones directas y normalizadas?";
 choices[57]= new Array();
 choices[57][0] = "Fracci&oacute;n del ideal";
 choices[57][1] = "Fracci&oacute;n de la suma";
 choices[57][2] = "Fracci&oacute;n del m&aacute;ximo";
 choices[57][3] = "Todas las anteriores mantienen la proporcionalidad";
 answers[57] = choices[57][0];
 units[57] = "34";
 comments[57] = "Id Pregunta: 5765. ";


//  Id pregunta: 6210 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  Respecto a los DFD: &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera?";
 choices[58]= new Array();
 choices[58][0] = "No es necesario que los nombres en los almacenes de datos y los de las entidades coincidan";
 choices[58][1] = "Cada almac&eacute;n de los DFD debe corresponder con una entidad, o una relaci&oacute;n o una combinaci&oacute;n de ambos";
 choices[58][2] = "En el caso de utilizar un &uacute;nico diccionario de datos las entradas deber&aacute;n coincidir";
 choices[58][3] = "Deben existir procesos en el DFD para crear y eliminar ocurrencias de cada una de las entidades del modelo de datos";
 answers[58] = choices[58][3];
 units[58] = "81";
 comments[58] = "Id Pregunta: 6210. TICB-2009, bloque desarrollo";


//  Id pregunta: 6227 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  En relaci&oacute;n a la Java Native Interface, cu&aacute;l de las siguientes opciones es correcta:";
 choices[59]= new Array();
 choices[59][0] = "Todas las aplicaciones y applets pueden invocar la JNI";
 choices[59][1] = "Las aplicaciones pierden una de las caracter&iacute;sticas m&aacute;s importantes que Java le confiere, su portabilidad";
 choices[59][2] = "JNI mantiene la recolecci&oacute;n de basura en el c&oacute;digo incorporado";
 choices[59][3] = "JNI es una API de Java para acceder a servicios de procesos remotos";
 answers[59] = choices[59][1];
 units[59] = "116";
 comments[59] = "Id Pregunta: 6227. TICB-2009, bloque desarrollo";


//  Id pregunta: 6238 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que representa y externaliza el estado interno de un objeto sin violar la encapsulaci&oacute;n, de forma que &eacute;ste puede volver a dicho estado m&aacute;s tarde:";
 choices[60]= new Array();
 choices[60][0] = "Spider.";
 choices[60][1] = "State.";
 choices[60][2] = "Observer.";
 choices[60][3] = "Memento.";
 answers[60] = choices[60][3];
 units[60] = "84";
 comments[60] = "Id Pregunta: 6238. TICB-2009, bloque desarrollo";


//  Id pregunta: 6314 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Qu&eacute; es el Fan-Out en el contexto de dise&ntilde;o de un proyecto de ingenier&iacute;a software?";
 choices[61]= new Array();
 choices[61][0] = "Es una medida de reusabilidad. Es el n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 choices[61][1] = "Es una medida de complejidad. Es el n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[61][2] = "Es una medida de mantenibilidad. Es el n&uacute;mero de m&oacute;dulos iguales.";
 choices[61][3] = "Ninguna de las anteriores.";
 answers[61] = choices[61][1];
 units[61] = "84";
 comments[61] = "Id Pregunta: 6314. ";


//  Id pregunta: 6364 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  De acuerdo con el Esquema Nacional de Seguridad, el sistema ha de disponer de una estrategia de protecci&oacute;n constituida por m&uacute;ltiples capas de seguridad, dispuesta de forma que, cuando una de las capas falle, permita:";
 choices[62]= new Array();
 choices[62][0] = "Ganar tiempo para una reacci&oacute;n adecuada frente a los incidentes que no han podido evitarse.";
 choices[62][1] = "Reducir la probabilidad de que el sistema sea comprometido en su conjunto.";
 choices[62][2] = "Minimizar el impacto final sobre el mismo.";
 choices[62][3] = "Todas las anteriores";
 answers[62] = choices[62][3];
 units[62] = "43";
 comments[62] = "Id Pregunta: 6364. Art&iacute;culo 8 ENS";


//  Id pregunta: 6449 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por proceso zombi?";
 choices[63]= new Array();
 choices[63][0] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes";
 choices[63][1] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo est&aacute; la espera de que el primer proceso acabe";
 choices[63][2] = "Un proceso que ha completado su ejecuci&oacute;n pero a&uacute;n contin&uacute;a consumiendo recursos";
 choices[63][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita";
 answers[63] = choices[63][2];
 units[63] = "53";
 comments[63] = "Id Pregunta: 6449. Castilla La Mancha 2009";


//  Id pregunta: 6521 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  JME es la plataforma dirigida al desarrollo de aplicaciones para dispositivos como tel&eacute;fonos m&oacute;viles o PDAs, y es el acr&oacute;nimo de:";
 choices[64]= new Array();
 choices[64][0] = "Java Mobile Edition";
 choices[64][1] = "Java Micro Edition";
 choices[64][2] = "Java Mobility Edition";
 choices[64][3] = "Java Mobile Enterprise";
 answers[64] = choices[64][1];
 units[64] = "116";
 comments[64] = "Id Pregunta: 6521. ";


//  Id pregunta: 7179 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Revocar un certificado electr&oacute;nico significa:";
 choices[65]= new Array();
 choices[65][0] = "Extender su validez m&aacute;s all&aacute; del tiempo l&iacute;mite inicialmente establecido";
 choices[65][1] = "Anular su validez antes de la fecha de caducidad que consta en el mismo";
 choices[65][2] = "Agotar su vida &uacute;til al haberse llegado al l&iacute;mite de vigencia del mismo";
 choices[65][3] = "Desacoplar un certificado de la tarjeta criptogr&aacute;fica en la que reside";
 answers[65] = choices[65][1];
 units[65] = "74";
 comments[65] = "Id Pregunta: 7179. Examen TIC B 2009";


//  Id pregunta: 7319 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; significan las siglas ASP de la tecnolog&iacute;a ASP.NET?";
 choices[66]= new Array();
 choices[66][0] = "Active Server Pages";
 choices[66][1] = "Active Side Pages";
 choices[66][2] = "Archive Server Pages";
 choices[66][3] = "Archive Side Pages";
 answers[66] = choices[66][0];
 units[66] = "59";
 comments[66] = "Id Pregunta: 7319. ";


//  Id pregunta: 7900 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)   De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, &iquest;c&oacute;mo se punt&uacute;a el subcriterio 9b, &laquo;Indicadores Clave del Rendimiento de la Organizaci&oacute;n&raquo;, en el proceso de autoevaluaci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = " Entre 0 y 100 y se multiplica por 0,50.";
 choices[67][1] = " Entre 0 y 100 y se multiplica por 0,25.";
 choices[67][2] = " Entre 0 y 50 y se multiplica por 0,50.";
 choices[67][3] = " Entre 0 y 50 y se multiplica por 0,25.";
 answers[67] = choices[67][0];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 7900. Map 2006";


//  Id pregunta: 7915 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)   Sea un sistema de memoria virtual paginada con direcciones l&oacute;gicas de 32 bits que proporcionan un espacio virtual de 2^20 (2 elevado a 20";
 choices[68]= new Array();
 choices[68][0] = " p&aacute;ginas y con una memoria f&iacute;sica de 32 MB. &iquest;Cu&aacute;nto ocupar&aacute; la tabla de marcos de p&aacute;gina que emplea el sistema operativo si cada entrada de la misma ocupa 32 bits?";
 choices[68][1] = " 32 kB.";
 choices[68][2] = " 4 MB.";
 choices[68][3] = " 1 MB.";
 answers[68] = choices[68][0];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 7915. Map 2006";


//  Id pregunta: 7923 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)   &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en J2EE (Java 2 Enterprise Edition)?";
 choices[69]= new Array();
 choices[69][0] = " WAR (Web Archive).";
 choices[69][1] = " EAR (Enterprise Archive).";
 choices[69][2] = " BAR (Bean Archive).";
 choices[69][3] = " JAR (Java Archive).";
 answers[69] = choices[69][2];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 7923. Map 2006";


//  Id pregunta: 8036 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)   Dadas las IPs de 2 hosts (172.16.17.30 y 172.16.28.15";
 choices[70]= new Array();
 choices[70][0] = " y su m&aacute;scara (255.255.240.0). &iquest;Est&aacute;n en la misma subred?";
 choices[70][1] = " S&iacute;.";
 choices[70][2] = " No.";
 choices[70][3] = " Depende de la direcci&oacute;n de la Puerta de Enlace.";
 answers[70] = choices[70][0];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 8036. Map 2007";


//  Id pregunta: 8163 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)   En la plataforma de e-learning Moodle, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[71]= new Array();
 choices[71][0] = " Es una plataforma de libre distribuci&oacute;n de e-learning.";
 choices[71][1] = " Soporta el aprendizaje colaborativo en cualquier lugar y en cualquier momento.";
 choices[71][2] = " Es una aplicaci&oacute;n Web que funciona en cualquier computador en el que se pueda ejecutar PHP.";
 choices[71][3] = " S&oacute;lo funciona con el sistema operativo Linux.";
 answers[71] = choices[71][3];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 8163. Map 2008";


//  Id pregunta: 8199 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que: ";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente. ";
 choices[72][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form. ";
 choices[72][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n. ";
 choices[72][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[72] = choices[72][0];
 units[72] = "69";
 comments[72] = "Id Pregunta: 8199. Examen TIC A1 2010";


//  Id pregunta: 8215 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  En el r&eacute;gimen de responsabilidad de la protecci&oacute;n de datos de car&aacute;cter personal, la legislaci&oacute;n espa&ntilde;ola tipifica como infracci&oacute;n grave:";
 choices[73]= new Array();
 choices[73][0] = "No proporcionar la informaci&oacute;n que solicite la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos en el ejercicio de las competencias que tiene legalmente atribuidas, en relaci&oacute;n con aspectos no sustantivos de la protecci&oacute;n de datos.";
 choices[73][1] = "La comunicaci&oacute;n o cesi&oacute;n de los datos de car&aacute;cter personal, fuera de los casos en que est&eacute;n permitidas.";
 choices[73][2] = "La recogida de datos en forma enga&ntilde;osa y fraudulenta.";
 choices[73][3] = "El impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso y oposici&oacute;n y la negativa a facilitar la informaci&oacute;n que sea solicitada.";
 answers[73] = choices[73][3];
 units[73] = "29";
 comments[73] = "Id Pregunta: 8215. Examen TIC A1 2010";


//  Id pregunta: 8252 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  Cuando existe particionado a nivel de byte, m&aacute;s un disco de paridad dedicado, se trata de:";
 choices[74]= new Array();
 choices[74][0] = "RAID 3.";
 choices[74][1] = "RAID 4.";
 choices[74][2] = "RAID 5.";
 choices[74][3] = "RAID 6.";
 answers[74] = choices[74][0];
 units[74] = "48";
 comments[74] = "Id Pregunta: 8252. Examen TIC A1 2010";


//  Id pregunta: 8277 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE, NO incluye entre sus programas:";
 choices[75]= new Array();
 choices[75][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios.";
 choices[75][1] = "Reconocimiento (certificaci&oacute;n de organizaciones y premios).";
 choices[75][2] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[75][3] = "Quejas y reclamaciones.";
 answers[75] = choices[75][3];
 units[75] = "92";
 comments[75] = "Id Pregunta: 8277. Examen TIC A1 2010";


//  Id pregunta: 8317 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como generaci&oacute;n 3.75 (3.75 G) es: ";
 choices[76]= new Array();
 choices[76][0] = "GPRS. ";
 choices[76][1] = "HSDPA. ";
 choices[76][2] = "HSUPA. ";
 choices[76][3] = "UMTS. ";
 answers[76] = choices[76][2];
 units[76] = "108";
 comments[76] = "Id Pregunta: 8317. Examen TIC A2 2010";


//  Id pregunta: 8365 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;En qu&eacute; tipo de t&eacute;cnica de miner&iacute;a de datos se utiliza el algoritmo IK-medoids?";
 choices[77]= new Array();
 choices[77][0] = "Predicci&oacute;n.";
 choices[77][1] = "Categorizaci&oacute;n.";
 choices[77][2] = "Clustering.";
 choices[77][3] = "Estad&iacute;sticas.";
 answers[77] = choices[77][2];
 units[77] = "68";
 comments[77] = "Id Pregunta: 8365. Examen TIC A2 2010";


//  Id pregunta: 8519 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[78]= new Array();
 choices[78][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[78][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[78][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[78][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[78] = choices[78][2];
 units[78] = "57, 58";
 comments[78] = "Id Pregunta: 8519. Examen TIC A2 2010 interna";


//  Id pregunta: 8529 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  En el contexto de la Web 2.0, el conjunto formado por una colecci&oacute;n extensible de p&aacute;ginas web entrelazadas, un sistema hipertextual para almacenar y modificar informaci&oacute;n y una base de datos donde cada p&aacute;gina puede ser f&aacute;cilmente modificada por cualquier usuario que disponga de un navegador web est&aacute;ndar que admita la utilizaci&oacute;n de formularios, corresponde al concepto de:";
 choices[79]= new Array();
 choices[79][0] = "Wiki.";
 choices[79][1] = "Mashup.";
 choices[79][2] = "Blog.";
 choices[79][3] = "Agregador o feeder. ";
 answers[79] = choices[79][0];
 units[79] = "120";
 comments[79] = "Id Pregunta: 8529. Examen TIC A2 2010 interna";


//  Id pregunta: 9014 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Qu&eacute; t&eacute;cnica pueden emplearse para corregir la interferencia entre s&iacute;mbolos en un demodulador digital?";
 choices[80]= new Array();
 choices[80][0] = "el filtrado de coseno alzado de la moduladora";
 choices[80][1] = "el filtrado de pre&eacute;nfasis de la moduladora";
 choices[80][2] = "el filtrado de de retardo de grupo constante";
 choices[80][3] = "Ninguna de las anteriores";
 answers[80] = choices[80][0];
 units[80] = "99";
 comments[80] = "Id Pregunta: 9014. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9020 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[81]= new Array();
 choices[81][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[81][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[81][2] = "Se produce en ambos tipos de fibra.";
 choices[81][3] = "No se produce en la fibra &oacute;ptica";
 answers[81] = choices[81][1];
 units[81] = "99";
 comments[81] = "Id Pregunta: 9020. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9282 Año de creación de pregunta: 2013-01-01
 questions[82]= "83)  NO es un principio general del Texto Refundido de la Ley de Contratos del Sector P&uacute;blico:";
 choices[82]= new Array();
 choices[82][0] = "Libertad de acceso a las licitaciones.";
 choices[82][1] = "No discriminaci&oacute;n e igualdad de trato entre los candidatos. ";
 choices[82][2] = "Utilizaci&oacute;n eficiente de los fondos destinados a contratos p&uacute;blicos. ";
 choices[82][3] = "Riesgo y ventura del contratante en la ejecuci&oacute;n de las obras.";
 answers[82] = choices[82][3];
 units[82] = "41";
 comments[82] = "Id Pregunta: 9282. ";


//  Id pregunta: 9436 Año de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica de las transacciones?";
 choices[83]= new Array();
 choices[83][0] = "Concurrencia";
 choices[83][1] = "Durabilidad";
 choices[83][2] = "Aislamiento";
 choices[83][3] = "Atomicidad";
 answers[83] = choices[83][0];
 units[83] = "83";
 comments[83] = "Id Pregunta: 9436. Examen AGE TIC A1 2011";


//  Id pregunta: 9442 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  El t&eacute;rmino formal que se emplea para indicar que los datos de un objeto solamente pueden ser manipulados a trav&eacute;s de m&eacute;todos definidos en su interfaz se conoce como:";
 choices[84]= new Array();
 choices[84][0] = "Polimorfismo.";
 choices[84][1] = "Abstracci&oacute;n.";
 choices[84][2] = "Encapsulaci&oacute;n.";
 choices[84][3] = "Persistencia.";
 answers[84] = choices[84][2];
 units[84] = "82";
 comments[84] = "Id Pregunta: 9442. Examen AGE TIC A1 2011";


//  Id pregunta: 9501 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes elementos no es un plugin?";
 choices[85]= new Array();
 choices[85][0] = "Lector Acrobat de Adobe";
 choices[85][1] = "Quicktime de Apple";
 choices[85][2] = "Cosmoplayer de Platinum";
 choices[85][3] = "Todos los anteriores son plugins";
 answers[85] = choices[85][3];
 units[85] = "114";
 comments[85] = "Id Pregunta: 9501. ";


//  Id pregunta: 9712 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  En el contexto de las redes de telecomunicaciones, SNMP";
 choices[86]= new Array();
 choices[86][0] = "es un protocolo de la capa de aplicaci&oacute;n que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[86][1] = "es el acr&oacute;nimo en ingl&eacute;s de Service Network Management Protocol.";
 choices[86][2] = "es un protocolo de la capa de transporte que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[86][3] = "son las siglas en ingl&eacute;s de Standard Network Management Protocol.";
 answers[86] = choices[86][0];
 units[86] = "106";
 comments[86] = "Id Pregunta: 9712. Examen TIC-A1 2013";


//  Id pregunta: 9725 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  Indique cu&aacute;l de los siguientes procesos se encuadra dentro del libro del ITIL denominado Service Support.";
 choices[87]= new Array();
 choices[87][0] = "Gesti&oacute;n de Problemas.";
 choices[87][1] = "Gesti&oacute;n de la Capacidad.";
 choices[87][2] = "Gesti&oacute;n de la Disponibilidad.";
 choices[87][3] = "Gesti&oacute;n Financiera.";
 answers[87] = choices[87][0];
 units[87] = "98";
 comments[87] = "Id Pregunta: 9725. Examen TIC-A1 2013";


//  Id pregunta: 9998 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  El recurso especial en materia de contrataci&oacute;n permite la impugnaci&oacute;n, previa alrecurso contencioso-administrativo, de";
 choices[88]= new Array();
 choices[88][0] = "los actos de tr&aacute;mite que no resuelven la licitaci&oacute;n.";
 choices[88][1] = "las penalizaciones impuestas por ejecuci&oacute;n defectuosa.";
 choices[88][2] = "los acuerdos de adjudicaci&oacute;n.";
 choices[88][3] = "la resoluci&oacute;n del recurso de Alzada.";
 answers[88] = choices[88][2];
 units[88] = "41";
 comments[88] = "Id Pregunta: 9998. ";


//  Id pregunta: 10037 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  Con respecto al protocolo DNS. &iquest;Cu&aacute;l de las siguientes opciones NO es una parte de un mensaje DNS?";
 choices[89]= new Array();
 choices[89][0] = "Cabecera.";
 choices[89][1] = "Checksum.";
 choices[89][2] = "Registros de recursos de Respuesta.";
 choices[89][3] = "Registros de recursos de Autoridad.";
 answers[89] = choices[89][1];
 units[89] = "112";
 comments[89] = "Id Pregunta: 10037. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10183 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  En el modelo E-R de Chen, las interrelaciones entre entidades se clasifican en unarias, binarias o n-arias en funci&oacute;n del:";
 choices[90]= new Array();
 choices[90][0] = "Grado";
 choices[90][1] = "Tipo de correspondencia";
 choices[90][2] = "Cardinalidad";
 choices[90][3] = "Ninguna de las anteriores";
 answers[90] = choices[90][0];
 units[90] = "80";
 comments[90] = "Id Pregunta: 10183. ";


//  Id pregunta: 10202 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[91]= new Array();
 choices[91][0] = "Para el canal de subida utiliza la modulaci&oacute;n SD-FDMA y para el de bajada, OFDMA";
 choices[91][1] = "Utiliza IMS (IP Multimedia Subsystem) para transmitir informaci&oacute;n multimedia sobre IP";
 choices[91][2] = "Es compatible con las redes IEEE 802.16e";
 choices[91][3] = "Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B";
 answers[91] = choices[91][2];
 units[91] = "108";
 comments[91] = "Id Pregunta: 10202. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m";


//  Id pregunta: 10258 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  En caso de solicitarse la rectificaci&oacute;n de unos datos de car&aacute;cter personal a un responsable del tratamiento que haya realizado una cesi&oacute;n de dichos datos a un tercero";
 choices[92]= new Array();
 choices[92][0] = "No pueden rectificarse datos de car&aacute;cter personal que hayan sido objeto de cesi&oacute;n a terceros";
 choices[92][1] = "El responsable deber&aacute; contestar al interesado y proceder a la rectificaci&oacute;n, no siendo necesario que comunique la misma al cesionario";
 choices[92][2] = "El responsable deber&aacute; contestar al interesado,  proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario contestar&aacute; tambi&eacute;n al interesado";
 choices[92][3] = "El responsable deber&aacute; contestar al interesado,  proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario no tiene obligaci&oacute;n de contestar al interesado";
 answers[92] = choices[92][3];
 units[92] = "29";
 comments[92] = "Id Pregunta: 10258. Art&iacute;culo 32.3 del RD 1720/2007";


//  Id pregunta: 10303 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[93]= new Array();
 choices[93][0] = "Enlace.";
 choices[93][1] = "Red.";
 choices[93][2] = "Transporte.";
 choices[93][3] = "Aplicaci&oacute;n.";
 answers[93] = choices[93][2];
 units[93] = "48";
 comments[93] = "Id Pregunta: 10303. TIC A2, libre, examen 2013";


//  Id pregunta: 10360 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Qu&eacute; organismos pueden participar en la ETSI?";
 choices[94]= new Array();
 choices[94][0] = "&Uacute;nicamente los Estados Miembros a trav&eacute;s del organismo p&uacute;blico que designen. En el caso de Espa&ntilde;a ser&iacute;a a trav&eacute;s de la SETSI.";
 choices[94][1] = "Pueden participar tanto las Administraciones P&uacute;blicas como operadores de red, la industria, centros de investigaci&oacute;n o los usuarios de los servicios de telecomunicaci&oacute;n";
 choices[94][2] = "&Uacute;nicamente los organismos nacionales de certificaci&oacute;n m&aacute;s representativos. En el caso de Espa&ntilde;a ser&iacute;a AENOR";
 choices[94][3] = "En el caso de Espa&ntilde;a, &uacute;nicamente la SETSI y AENOR";
 answers[94] = choices[94][1];
 units[94] = "42";
 comments[94] = "Id Pregunta: 10360. ETSI es un organismo sin &aacute;nimo de lucro creado al objeto de disponer del foro adecuado para la elaboraci&oacute;n de las normas de telecomunicaci&oacute;n que faciliten la estandarizaci&oacute;n del sector, y por lo tanto el avance hacia el Mercado &Uacute;nico Europeo";


//  Id pregunta: 10442 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes? ";
 choices[95]= new Array();
 choices[95][0] = "Kexi.";
 choices[95][1] = "Kivio.";
 choices[95][2] = "Konqueror.";
 choices[95][3] = "Kugar.";
 answers[95] = choices[95][3];
 units[95] = "54";
 comments[95] = "Id Pregunta: 10442. Examen TIC A1 2013";


//  Id pregunta: 10445 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  En el marco de la prueba de software, la cobertura de declaraciones de c&oacute;digo (code statement coverage) NO se utiliza para ";
 choices[96]= new Array();
 choices[96][0] = "definir &quot;hecho&quot; (done) en las metodolog&iacute;as &aacute;giles. ";
 choices[96][1] = "detectar c&oacute;digo muerto o inalcanzable.";
 choices[96][2] = "certificar software de misi&oacute;n cr&iacute;tica.";
 choices[96][3] = "detectar errores de condiciones de carrera (race condition bugs). ";
 answers[96] = choices[96][3];
 units[96] = "88";
 comments[96] = "Id Pregunta: 10445. Examen TIC A1 2013";


//  Id pregunta: 10457 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[97]= new Array();
 choices[97][0] = "&lt;canvas&gt;";
 choices[97][1] = "&lt;applet&gt;";
 choices[97][2] = "&lt;keygen&gt;";
 choices[97][3] = "&lt;audio&gt;";
 answers[97] = choices[97][1];
 units[97] = "69";
 comments[97] = "Id Pregunta: 10457. ";


//  Id pregunta: 10461 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Respecto a REST (Represantional State Transfer) indique la respuesta incorrecta:";
 choices[98]= new Array();
 choices[98][0] = "Es un est&aacute;ndar para desarrollar y proporcionar servicios en internet.";
 choices[98][1] = "La identificaci&oacute;n de recursos se realiza de forma &uacute;nica global mediante URIs (Uniform Resource Identifiers).";
 choices[98][2] = "Los recursos identificados con URIs son los objeto l&oacute;gicos a los que se mandan los mensajes.";
 choices[98][3] = "Emplea un protocolo cliente/servidor sin estado.";
 answers[98] = choices[98][0];
 units[98] = "51";
 comments[98] = "Id Pregunta: 10461. ";


//  Id pregunta: 10521 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[99]= new Array();
 choices[99][0] = "Las multas coercitivas son incompatibles con las sanciones";
 choices[99][1] = "El importe m&aacute;ximo de las multas coercitivas son 30000 euros";
 choices[99][2] = "El importe de las multas coercitivas  Fondo nacional del servicio universal ";
 choices[99][3] = "Ninguna de las anteriores es cierta";
 answers[99] = choices[99][1];
 units[99] = "110";
 comments[99] = "Id Pregunta: 10521. ";


