/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 24 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se denomina la posibilidad de funcionamiento en distintas plataformas sin necesidad de cambios  en el aplicativo?:";
 choices[0]= new Array();
 choices[0][0] = "Interoperatividad";
 choices[0][1] = "Compatibilidad";
 choices[0][2] = "Portabilidad";
 choices[0][3] = "Normalizaci&oacute;n";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 24. ";


//  Id pregunta: 74 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en un recuento de en cuantos criterios ha sido la mejor?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "Permutaci&oacute;n";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 74. Tema 36 de 2005";


//  Id pregunta: 193 Año de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[2]= new Array();
 choices[2][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[2][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[2][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[2][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[2] = choices[2][2];
 units[2] = "27";
 comments[2] = "Id Pregunta: 193. Examen TIC MAP B 2004";


//  Id pregunta: 251 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  Entre las funciones de un auditor inform&aacute;tico est&aacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Revisi&oacute;n de sistemas bajo desarrollo, instalaciones inform&aacute;ticas y aplicaciones";
 choices[3][1] = "Soporte a auditores no inform&aacute;ticos";
 choices[3][2] = "La a) y la b) son correctas";
 choices[3][3] = "La a) y la b) son incorrectas";
 answers[3] = choices[3][2];
 units[3] = "31,32,33";
 comments[3] = "Id Pregunta: 251. ";


//  Id pregunta: 319 Año de creación de pregunta: 2009-01-01
 questions[4]= "5)  La LOPD se aplicar&aacute; sin especialidad indicada a:";
 choices[4]= new Array();
 choices[4][0] = "Los ficheros que mantengan las personas f&iacute;sicas con fines exclusivamente dom&eacute;sticos o personales";
 choices[4][1] = "A todos aquellos datos de car&aacute;cter personal registrados en cualquier soporte que los haga susceptibles de tratamiento y cualquier modalidad de uso posterior de los mismos";
 choices[4][2] = "Los ficheros regulados por la legislaci&oacute;n electoral o sobre estad&iacute;stica p&uacute;blica";
 choices[4][3] = "Los ficheros derivados de los Registros Civiles";
 answers[4] = choices[4][1];
 units[4] = "29";
 comments[4] = "Id Pregunta: 319. ";


//  Id pregunta: 395 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  Para planificaci&oacute;n de la capacidad de los sistemas se usan las metodolog&iacute;as:";
 choices[5]= new Array();
 choices[5][0] = "Proyecci&oacute;n lineal y teor&iacute;a de colas";
 choices[5][1] = "Simulaci&oacute;n";
 choices[5][2] = "Benchmark";
 choices[5][3] = "Todas las anteriores";
 answers[5] = choices[5][3];
 units[5] = "35";
 comments[5] = "Id Pregunta: 395. ";


//  Id pregunta: 448 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  Se&ntilde;alar la afirmaci&oacute;n incorrecta respecto al control de proyectos:";
 choices[6]= new Array();
 choices[6][0] = "El diagrama de PERT permite evaluar el retraso de un proyecto";
 choices[6][1] = "Un retraso en la fecha de finalizaci&oacute;n de una etapa provoca un retraso de la fecha final del proyecto";
 choices[6][2] = "La fecha de finalizaci&oacute;n del proyecto se ve afectada por las fechas de finalizaci&oacute;n de las etapas que constituyen el camino cr&iacute;tico";
 choices[6][3] = "La duraci&oacute;n total del proyecto viene determinada por el camino cr&iacute;tico";
 answers[6] = choices[6][1];
 units[6] = "28";
 comments[6] = "Id Pregunta: 448. ";


//  Id pregunta: 606 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Los miembros del Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos desempe&ntilde;ar&aacute;n su cargo:";
 choices[7]= new Array();
 choices[7][0] = "durante seis a&ntilde;os";
 choices[7][1] = "durante cinco a&ntilde;os";
 choices[7][2] = "durante tres a&ntilde;os";
 choices[7][3] = "durante cuatro a&ntilde;os";
 answers[7] = choices[7][3];
 units[7] = "29";
 comments[7] = "Id Pregunta: 606. ";


//  Id pregunta: 672 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  Teniendo en cuenta el RD 209/2003, indique cu&aacute;l de los siguientes requisitos no es preciso asegurar en la transmisi&oacute;n o recepci&oacute;n de comunicaciones entre la Administraci&oacute;n del Estado y cualquier persona f&iacute;sica o jur&iacute;dica?:";
 choices[8]= new Array();
 choices[8][0] = "Garant&iacute;a de disponibilidad y acceso";
 choices[8][1] = "Existencia de compatibilidad entre emisor y receptor";
 choices[8][2] = "Existencia de medidas de seguridad tendentes a evitar la interceptaci&oacute;n y alteraci&oacute;n de comunicaciones as&iacute; como los accesos no autorizados";
 choices[8][3] = "Garant&iacute;a de comunicaci&oacute;n multicanal entre emisor y receptor";
 answers[8] = choices[8][3];
 units[8] = "30";
 comments[8] = "Id Pregunta: 672. ";


//  Id pregunta: 711 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  Seg&uacute;n el RD 209/2003 por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[9]= new Array();
 choices[9][0] = "La AGE pondr&aacute; a disposici&oacute;n del ciudadano un buz&oacute;n de correo electr&oacute;nico para notificaciones";
 choices[9][1] = "Dicho buz&oacute;n ser&aacute; v&aacute;lido para todas las notificaciones de la AGE ";
 choices[9][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se lea a su contenido, se iniciar&aacute; el procedimiento administrativo.";
 choices[9][3] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 answers[9] = choices[9][3];
 units[9] = "30";
 comments[9] = "Id Pregunta: 711. Similar a examen TIC SS A 2003";


//  Id pregunta: 841 Año de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones se ajusta m&aacute;s a la definici&oacute;n de MIPS?:";
 choices[10]= new Array();
 choices[10][0] = "Expresa la capacidad de ejecuci&oacute;n de instrucciones de una m&aacute;quina";
 choices[10][1] = "Expresa la velocidad de ejecuci&oacute;n en miles de intrucciones por segundo";
 choices[10][2] = "Expresa la potencia de c&aacute;lculo cient&iacute;fico de un computador";
 choices[10][3] = "Expresa la potencia de c&aacute;lculo de generaci&oacute;n de gr&aacute;ficos";
 answers[10] = choices[10][0];
 units[10] = "45";
 comments[10] = "Id Pregunta: 841. ";


//  Id pregunta: 1147 Año de creación de pregunta: 2002-01-01
 questions[11]= "12)  En un sistema operativo Unix System V, &iquest;qu&eacute; tipo de informaci&oacute;n contiene un nodo-i?:";
 choices[11]= new Array();
 choices[11][0] = "Informaci&oacute;n sobre el tama&ntilde;o y nombre del sistema de ficheros";
 choices[11][1] = "Informaci&oacute;n sobre los derechos de acceso al fichero";
 choices[11][2] = "Datos del usuario";
 choices[11][3] = "Informaci&oacute;n sobre los usuarios del fichero";
 answers[11] = choices[11][1];
 units[11] = "53";
 comments[11] = "Id Pregunta: 1147. ";


//  Id pregunta: 1173 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Identifique las dos versiones hist&oacute;ricas generadas de Unix al final de los a&ntilde;os 80, motivadas por la coexistencia de dos desarrollos en paralelo:";
 choices[12]= new Array();
 choices[12][0] = "System V y BSD";
 choices[12][1] = "System IV y System V";
 choices[12][2] = "System V y Posix";
 choices[12][3] = "Posix y Motif";
 answers[12] = choices[12][0];
 units[12] = "53";
 comments[12] = "Id Pregunta: 1173. ";


//  Id pregunta: 1272 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  Los criptosistemas irreversibles:";
 choices[13]= new Array();
 choices[13][0] = "No existen actualmente dada la potencia de los sistemas actuales y la potencia de la computaci&oacute;n distribuida";
 choices[13][1] = "Se utilizan sobre todo para la autenticaci&oacute;n de entidades";
 choices[13][2] = "Se basan en funciones matem&aacute;ticas no invertibles computacionalmente, o carentes de inversa";
 choices[13][3] = "B y C son ciertas";
 answers[13] = choices[13][3];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1272. ";


//  Id pregunta: 1463 Año de creación de pregunta: 2002-01-01
 questions[14]= "15)  ISA, PCI, AGP, IDE, PCMCIA&hellip;, son:";
 choices[14]= new Array();
 choices[14][0] = "buses internos";
 choices[14][1] = "buses externos";
 choices[14][2] = "organismos de estandarizaci&oacute;n  ";
 choices[14][3] = "est&aacute;ndares de almacenamiento";
 answers[14] = choices[14][0];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1463. ";


//  Id pregunta: 1628 Año de creación de pregunta: 2003-01-01
 questions[15]= "16)  Si utilizamos los t&eacute;rminos IceWM, Fluxbox, fvwm, nos estamos refiriendo a:";
 choices[15]= new Array();
 choices[15][0] = "Sistemas de ayuda de KDE.";
 choices[15][1] = "Interfaz gr&aacute;fica del usuario.";
 choices[15][2] = "Entorno de escritorio.";
 choices[15][3] = "Administradores de ventanas en LINUX.";
 answers[15] = choices[15][3];
 units[15] = "62";
 comments[15] = "Id Pregunta: 1628. Junta Andaluc&iacute;a";


//  Id pregunta: 1653 Año de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes protocolos se puede considerar como menos seguro para la realizaci&oacute;n de una transacci&oacute;n de comercio electr&oacute;nico?";
 choices[16]= new Array();
 choices[16][0] = "SET";
 choices[16][1] = "SSL";
 choices[16][2] = "3D-Secure";
 choices[16][3] = "SPA/UCAF";
 answers[16] = choices[16][1];
 units[16] = "70";
 comments[16] = "Id Pregunta: 1653. ";


//  Id pregunta: 1711 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  Un mainframe:";
 choices[17]= new Array();
 choices[17][0] = "Es equivalente a una supercomputadora cara";
 choices[17][1] = "utiliza toda su potencia en ejecutar unos pocos programas lo m&aacute;s r&aacute;pidamente posible";
 choices[17][2] = "es multitarea y multiproceso, pero monousuario";
 choices[17][3] = "utiliza su potencia para ejecutar muchos programas concurrentemente";
 answers[17] = choices[17][3];
 units[17] = "49";
 comments[17] = "Id Pregunta: 1711. ";


//  Id pregunta: 1776 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  El modelo de proceso de desarrollo de fuente abierta, b&aacute;sicamente descentralizado y caracter&iacute;stico de productos como Linux, Apache, Mozilla, Perl y Lisp/Emacs, se ha dado en llamar:";
 choices[18]= new Array();
 choices[18][0] = "Mercado";
 choices[18][1] = "Bazar";
 choices[18][2] = "Catedral";
 choices[18][3] = "Iglesia";
 answers[18] = choices[18][1];
 units[18] = "61,62";
 comments[18] = "Id Pregunta: 1776. ";


//  Id pregunta: 1925 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n &iquest;Qu&eacute; se entiende como grado de una tabla?";
 choices[19]= new Array();
 choices[19][0] = "El n&uacute;mero de filas de la tabla";
 choices[19][1] = "El n&uacute;mero de columnas de la tabla";
 choices[19][2] = "El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n";
 choices[19][3] = "El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas";
 answers[19] = choices[19][1];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1925. ";


//  Id pregunta: 2027 Año de creación de pregunta: 2004-01-01
 questions[20]= "21)  En s&iacute;ntesis de voz no se usan";
 choices[20]= new Array();
 choices[20][0] = "Fonemas";
 choices[20][1] = "Difonemas";
 choices[20][2] = "Sintaxis";
 choices[20][3] = "Morfemas";
 answers[20] = choices[20][2];
 units[20] = "94";
 comments[20] = "Id Pregunta: 2027. Similar a examen TIC SS A 2003";


//  Id pregunta: 2091 Año de creación de pregunta: 2002-01-01
 questions[21]= "22)  DARTS es el acr&oacute;nimo de:";
 choices[21]= new Array();
 choices[21][0] = "Data Redesign for Transactional Systems.";
 choices[21][1] = "Design Aproach for Real Time Systems.";
 choices[21][2] = "Design Aproach for Real Transactional Systems.";
 choices[21][3] = "No es acr&oacute;nimo de nada.";
 answers[21] = choices[21][1];
 units[21] = "83";
 comments[21] = "Id Pregunta: 2091. ";


//  Id pregunta: 2144 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes elementos forma parte del 'bloque instrumental' del PGGC aplicable al desarrollo de equipos l&oacute;gicos del CSI?:";
 choices[22]= new Array();
 choices[22][0] = "Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de planes de garant&iacute;a de calidad";
 choices[22][1] = "Esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos";
 choices[22][2] = "Procedimiento de control de calidad";
 choices[22][3] = "Todos los elementos anteriores son v&aacute;lidos";
 answers[22] = choices[22][2];
 units[22] = "88";
 comments[22] = "Id Pregunta: 2144. ";


//  Id pregunta: 2167 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  Indique la afirmaci&oacute;n falsa, relativa al mantenimiento de las aplicaciones:";
 choices[23]= new Array();
 choices[23][0] = "Comienza cuando el sistema es entregado al usuario y contin&uacute;a mientras permanece activa su vida &uacute;til";
 choices[23][1] = "Las modificaciones que implican mejoras o ampliaciones de la funcionalidad no necesitan ser aprobados por el usuario";
 choices[23][2] = "Los cambios reflejados en la fase de mantenimiento deben quedar reflejados en la documentaci&oacute;n de todas las fases anteriores";
 choices[23][3] = "El mantenimiento puede ser correctivo, perfectivo o adaptativo";
 answers[23] = choices[23][1];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2167. ";


//  Id pregunta: 2266 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  El coste de la no calidad viene dado por:";
 choices[24]= new Array();
 choices[24][0] = "Evaluaci&oacute;n del producto final";
 choices[24][1] = "Fallos internos";
 choices[24][2] = "Fallos internos y externos";
 choices[24][3] = "Fallos externos con responsabilidad propia";
 answers[24] = choices[24][2];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2266. ";


//  Id pregunta: 2278 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  El mantenimiento de sistemas de informaci&oacute;n, tal y como lo define METRICA V3:";
 choices[25]= new Array();
 choices[25][0] = "Es de tipo perfectivo";
 choices[25][1] = "Requiere &uacute;nicamente la participaci&oacute;n del jefe de proyecto y del equipo de mantenimiento";
 choices[25][2] = "Hace uso de la t&eacute;cnica denominada &quot;factores cr&iacute;ticos de &eacute;xito&quot;";
 choices[25][3] = "Tiene como objetivo la obtenci&oacute;n de una nueva versi&oacute;n de un sistema de informaci&oacute;n desarrollado, a partir de las peticiones de mantenimiento que los usuarios realizan con motivo de un problema detectado";
 answers[25] = choices[25][3];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2278. ";


//  Id pregunta: 2339 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  En los diagramas de flujo de datos se usan s&iacute;mbolos. &iquest;Cu&aacute;l no es uno de ellos?:";
 choices[26]= new Array();
 choices[26][0] = "El s&iacute;mbolo de 'proceso'";
 choices[26][1] = "El s&iacute;mbolo de 'almac&eacute;n de datos'";
 choices[26][2] = "El s&iacute;mbolo de 'entidad externa'";
 choices[26][3] = "El s&iacute;mbolo de 'decisi&oacute;n' (o alternativa)";
 answers[26] = choices[26][3];
 units[26] = "81";
 comments[26] = "Id Pregunta: 2339. ";


//  Id pregunta: 2418 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  El nivel b&aacute;sico de comprensi&oacute;n donde comienza la abstracci&oacute;n y se aplican reglas gramaticales es el:";
 choices[27]= new Array();
 choices[27][0] = "Nivel fonol&oacute;gico";
 choices[27][1] = "Nivel fon&eacute;tico";
 choices[27][2] = "Nivel ac&uacute;stico";
 choices[27][3] = "Nivel l&eacute;xico-sint&aacute;ctico";
 answers[27] = choices[27][3];
 units[27] = "94";
 comments[27] = "Id Pregunta: 2418. ";


//  Id pregunta: 2464 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los s&iacute;mbolos &quot;(&quot; y &quot;)&quot; seg&uacute;n la notaci&oacute;n BNF representan, en el diccionario de datos:";
 choices[28]= new Array();
 choices[28][0] = "Iteraci&oacute;n";
 choices[28][1] = "Selecci&oacute;n";
 choices[28][2] = "Composici&oacute;n";
 choices[28][3] = "Opcionalidad";
 answers[28] = choices[28][3];
 units[28] = "81";
 comments[28] = "Id Pregunta: 2464. ";


//  Id pregunta: 2673 Año de creación de pregunta: 2003-01-01
 questions[29]= "30)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la l&oacute;gica borrosa permite:";
 choices[29]= new Array();
 choices[29][0] = "Indexar parcialmente un documento mediante dos o m&aacute;s t&eacute;rminos.";
 choices[29][1] = "Clasificar los textos con arreglo a su relevancia estimada.";
 choices[29][2] = "T&eacute;cnicas de muestreo de la cuantificaci&oacute;n del grado de relevancia de las claves.";
 choices[29][3] = "Generar varias claves sin tener en cuenta el Tesauro.";
 answers[29] = choices[29][1];
 units[29] = "96";
 comments[29] = "Id Pregunta: 2673. ";


//  Id pregunta: 2808 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  La Precisi&oacute;n es un criterio relacionado con:";
 choices[30]= new Array();
 choices[30][0] = "La Usabilidad.";
 choices[30][1] = "La Correcci&oacute;n.";
 choices[30][2] = "La Eficiencia.";
 choices[30][3] = "La Fiabilidad.";
 answers[30] = choices[30][3];
 units[30] = "88";
 comments[30] = "Id Pregunta: 2808. ";


//  Id pregunta: 2893 Año de creación de pregunta: 2002-01-01
 questions[31]= "32)  La cooperaci&oacute;n de los Estados miembros para la utilizaci&oacute;n de la tecnolog&iacute;a de la informaci&oacute;n en todas las instituciones de la UE se realiza a trav&eacute;s del programa:";
 choices[31]= new Array();
 choices[31][0] = "TESTA II ";
 choices[31][1] = "IDABC";
 choices[31][2] = "INDALO";
 choices[31][3] = "HITA";
 answers[31] = choices[31][1];
 units[31] = "103";
 comments[31] = "Id Pregunta: 2893. ";


//  Id pregunta: 2945 Año de creación de pregunta: 2004-01-01
 questions[32]= "33)  Los Bridges:";
 choices[32]= new Array();
 choices[32][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[32][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[32][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[32][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles supeiores";
 answers[32] = choices[32][3];
 units[32] = "102";
 comments[32] = "Id Pregunta: 2945. Examen TIC MAP B 2004";


//  Id pregunta: 3112 Año de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;A qu&eacute; nivel del modelo OSI corresponde la funci&oacute;n de detecci&oacute;n de colisiones en los sistemas CSMA/CD?:";
 choices[33]= new Array();
 choices[33][0] = "Nivel 1 F&iacute;sico";
 choices[33][1] = "Nivel 2 Enlace";
 choices[33][2] = "Nivel 3 Red";
 choices[33][3] = "Nivel 4 Transporte";
 answers[33] = choices[33][0];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3112. ";


//  Id pregunta: 3325 Año de creación de pregunta: 2002-01-01
 questions[34]= "35)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[34]= new Array();
 choices[34][0] = "registro de incidencias";
 choices[34][1] = "fichero de log";
 choices[34][2] = "lista de errores";
 choices[34][3] = "fichero de registros";
 answers[34] = choices[34][1];
 units[34] = "113";
 comments[34] = "Id Pregunta: 3325. ";


//  Id pregunta: 3482 Año de creación de pregunta: 2002-01-01
 questions[35]= "36)  El tr&aacute;fico perdido en un periodo de tiempo T :";
 choices[35]= new Array();
 choices[35][0] = "Se puede medir como el numero de llamadas perdidas Cl por la duraci&oacute;n media de las llamadas durante un tiempo T";
 choices[35][1] = "No tiene sentido pr&aacute;ctico porque no se pueden conocer realmente el n&uacute;mero de llamadas perdidas";
 choices[35][2] = "No puede medirse, s&oacute;lo puede medirse el n&uacute;mero de llamadas perdidas y nunca el tr&aacute;fico perdido";
 choices[35][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[35] = choices[35][2];
 units[35] = "99";
 comments[35] = "Id Pregunta: 3482. ";


//  Id pregunta: 3522 Año de creación de pregunta: 2002-01-01
 questions[36]= "37)  En funci&oacute;n del &aacute;rea geogr&aacute;fica que cubran y de sus caracter&iacute;sticas, se puede decir:";
 choices[36]= new Array();
 choices[36][0] = "Las redes de comunicaci&oacute;n se dividen en LAN (&aacute;rea local) y WAN (&aacute;rea extendida)";
 choices[36][1] = "Las redes WAN ofrecen bajas tasas de error";
 choices[36][2] = "En una red LAN los costes derivados del uso de la red pueden depender del tr&aacute;fico";
 choices[36][3] = "Las redes WAN pueden almacenar datos y despu&eacute;s enviarlos";
 answers[36] = choices[36][3];
 units[36] = "101";
 comments[36] = "Id Pregunta: 3522. ";


//  Id pregunta: 3568 Año de creación de pregunta: 2002-01-01
 questions[37]= "38)  En una arquitectura de red OSI la responsabilidad de dividir los mensajes en unidades adecuadas a las especificaciones contratadas con la red X25 es de:";
 choices[37]= new Array();
 choices[37][0] = "Del nivel de transporte que le pasa al de red las unidades que debe enviar y el cometido del de red es enviarlos";
 choices[37][1] = "Del nivel de red ya que debe segmentar los fragmentos que le pasa el nivel de transporte en paquetes aceptables por la red X25";
 choices[37][2] = "Del nivel de enlace ya que es el responsable de hacer las tramas que coloca en el enlace";
 choices[37][3] = "De ninguno de ellos ya que el software de red del proveedor lo hace por su cuenta, para dividir el mensaje en paquetes con la longitud que m&aacute;s le convenga a sus conmutadores";
 answers[37] = choices[37][1];
 units[37] = "101, 102";
 comments[37] = "Id Pregunta: 3568. ";


//  Id pregunta: 3581 Año de creación de pregunta: 2002-01-01
 questions[38]= "39)  Entre las limitaciones inherentes a las redes locales, que hacen necesaria la segmentaci&oacute;n y la interconexi&oacute;n, no se encuentra:";
 choices[38]= new Array();
 choices[38][0] = "limitaciones en el n&uacute;mero de hosts";
 choices[38][1] = "limitaciones de tecnolog&iacute;as disponibles y fabricantes";
 choices[38][2] = "limitaciones en el n&uacute;mero y tipo de nodos, as&iacute; como en su acceso";
 choices[38][3] = "limitaciones de la distancia a cubrir";
 answers[38] = choices[38][1];
 units[38] = "102";
 comments[38] = "Id Pregunta: 3581. ";


//  Id pregunta: 3656 Año de creación de pregunta: 2002-01-01
 questions[39]= "40)  Un applet de Java es:";
 choices[39]= new Array();
 choices[39][0] = "Un int&eacute;rprete del lenguaje Java";
 choices[39][1] = "Una rutina Java que se ejecuta en el servidor recibiendo datos del browser o navegador";
 choices[39][2] = "Un programa Java, generalmente referenciado en una p&aacute;gina HTML, que se ejecuta en el cliente";
 choices[39][3] = "Un programa Java que accede a una base de datos relacional";
 answers[39] = choices[39][2];
 units[39] = "60";
 comments[39] = "Id Pregunta: 3656. ";


//  Id pregunta: 3795 Año de creación de pregunta: 2002-01-01
 questions[40]= "41)  Respecto a las interfaces en RDSI:";
 choices[40]= new Array();
 choices[40][0] = "La interfaz R es la definida para poder conectar los equipos no RDSI (X21, RS232&hellip;) a la especificaci&oacute;n RDSI";
 choices[40][1] = "La interfaz R es la utilizada por los equipos remotos";
 choices[40][2] = "La Interfaz R est&aacute; todav&iacute;a indefinida pues depende de las compa&ntilde;&iacute;as proveedoras de servicio";
 choices[40][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[40] = choices[40][0];
 units[40] = "103";
 comments[40] = "Id Pregunta: 3795. ";


//  Id pregunta: 3802 Año de creación de pregunta: 2002-01-01
 questions[41]= "42)  SAP es:";
 choices[41]= new Array();
 choices[41][0] = "Service Access Protocol, Protocolo de Acceso al Servicio";
 choices[41][1] = "System Analysis Program, Programa de An&aacute;lisis de Sistema";
 choices[41][2] = "Service Access Point, Punto de Acceso al Servicio";
 choices[41][3] = "Sistema de Administraci&oacute;n P&uacute;blica";
 answers[41] = choices[41][2];
 units[41] = "112";
 comments[41] = "Id Pregunta: 3802. ";


//  Id pregunta: 3858 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  El modo de transferencia as&iacute;ncrono (ATM), utiliza:";
 choices[42]= new Array();
 choices[42][0] = "Celdas de tama&ntilde;o variable con una cabecera fija de 5 octetos y un campo de informaci&oacute;n variable de hasta 64 octetos.";
 choices[42][1] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos, y un campo de informaci&oacute;n variable de hasta 48 octetos.";
 choices[42][2] = "Celdas de tama&ntilde;o fijo con una cabecera fija de 5 octetos y un campo de informaci&oacute;n fijo de 48 octetos.";
 choices[42][3] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos y un campo de informaci&oacute;n fijo de 64 octetos.";
 answers[42] = choices[42][2];
 units[42] = "109";
 comments[42] = "Id Pregunta: 3858. Junta Andaluc&iacute;a";


//  Id pregunta: 3865 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Qu&eacute; son los IDS?";
 choices[43]= new Array();
 choices[43][0] = "Sistemas que permiten a los hackers rastrear puertos";
 choices[43][1] = "Sistemas que permiten detectar actividad inadecuada, incorrecta o an&oacute;mala en un sistema";
 choices[43][2] = "Sistemas que simulan uno o m&aacute;s sistemas f&aacute;ciles de atacar con el fin de tentar a los intrusos";
 choices[43][3] = "ningunode los anteriores";
 answers[43] = choices[43][1];
 units[43] = "111";
 comments[43] = "Id Pregunta: 3865. ";


//  Id pregunta: 3875 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un tipo de componente Java?:";
 choices[44]= new Array();
 choices[44][0] = "Enterprise Java Beans (EJB).";
 choices[44][1] = "Servlets.";
 choices[44][2] = "Java Platform Enterprise Edition (J2EE).";
 choices[44][3] = "JavaServer Pages (JSP).";
 answers[44] = choices[44][2];
 units[44] = "116";
 comments[44] = "Id Pregunta: 3875. Junta Andaluc&iacute;a";


//  Id pregunta: 4007 Año de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;En qu&eacute; RFC se encuentra definido el protocolo SMTP (&quot;Simple Mail Transfer Protocol&quot;)?";
 choices[45]= new Array();
 choices[45][0] = "RFC 821";
 choices[45][1] = "RFC 820";
 choices[45][2] = "RFC 823";
 choices[45][3] = "RFC 822";
 answers[45] = choices[45][0];
 units[45] = "106";
 comments[45] = "Id Pregunta: 4007. ";


//  Id pregunta: 4261 Año de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de  las siguientes afirmaciones est&aacute; recogida en la LLey 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[46]= new Array();
 choices[46][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia aprobar&aacute; los planes nacionales de numeracion y direccion";
 choices[46][1] = "El Gobierno podr&aacute; imponer  a los operadores, mediante Real Decreto, obligaciones de servicio p&uacute;blico en ciertos supuestos";
 choices[46][2] = "Tendr&aacute;n la consideraci&oacute;n de Autoridades Nacionales de Reglamentacion de Telecomunicaciones &uacute;nicamente el Gobierno y la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[46][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia analizar&aacute; los mercados de referencia al por mayor y al por menor cada tres a&ntilde;os como m&iacute;nimo";
 answers[46] = choices[46][1];
 units[46] = "110";
 comments[46] = "Id Pregunta: 4261. ";


//  Id pregunta: 4536 Año de creación de pregunta: 2007-01-01
 questions[47]= "48)  Un enlace del tipo STM-1:";
 choices[47]= new Array();
 choices[47][0] = "Es un enlace PDH de 155,52 Mbps";
 choices[47][1] = "Es un enlace PDH de 622,08 Mbps.";
 choices[47][2] = "Es un enlace SDH de 622,08 Mbps.";
 choices[47][3] = "Es un enlace SDH de 155,52 Mbps.";
 answers[47] = choices[47][3];
 units[47] = "";
 comments[47] = "Id Pregunta: 4536. ";


//  Id pregunta: 4744 Año de creación de pregunta: 2007-01-01
 questions[48]= "49)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en:";
 choices[48]= new Array();
 choices[48][0] = "An&aacute;lisis de riesgos";
 choices[48][1] = "An&aacute;lisis de impacto";
 choices[48][2] = "Disponibilidad";
 choices[48][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[48] = choices[48][1];
 units[48] = "32";
 comments[48] = "Id Pregunta: 4744. Examen 2006 JCYL";


//  Id pregunta: 4845 Año de creación de pregunta: 2007-01-01
 questions[49]= "50)  La Ley Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, define el Servicio Universal en su T&iacute;tulo III, como el conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible. En relaci&oacute;n a suprestaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[49]= new Array();
 choices[49][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia podr&aacute; designar uno o m&aacute;s operadores diferentes para la prestaci&oacute;n de los diversos elementos del servicio universal, de manera que quede cubierta la totalidad delterritorio nacional";
 choices[49][1] = "Corresponde su prestaci&oacute;n, en todo caso, al operador u operadores con poder significativo en aquellos mercados considerados de referencia en relaci&oacute;n al servicio considerado";
 choices[49][2] = "El sistema de designaci&oacute;n de operadores encargados de garantizar la prestaci&oacute;n de los servicios, prestaciones y ofertas del servicio universal se establecer&aacute; mediante real decreto, con sujeci&oacute;n a los principios de eficiencia, objetividad, transparencia y no discriminaci&oacute;n sin excluir a priori la designaci&oacute;n de ninguna empresa. En todo caso, contemplar&aacute; un mecanismo de licitaci&oacute;n p&uacute;blica para dichos servicios, prestaciones y ofertas.";
 choices[49][3] = "La primera designaci&oacute;n de operador responsable de la prestaci&oacute;n del servicio universal se realiz&oacute; la citadaLey, y recay&oacute; en Telef&oacute;nica de Espa&ntilde;a, hasta el 31 de diciembre de 2005, en su condici&oacute;n de operadordominante en la prestaci&oacute;n del servicio telef&oacute;nico fijo";
 answers[49] = choices[49][2];
 units[49] = "110";
 comments[49] = "Id Pregunta: 4845. ";


//  Id pregunta: 4940 Año de creación de pregunta: 2003-01-01
 questions[50]= "51)  Seg&uacute;n M&eacute;trica v.3, la desnormalizaci&oacute;n controlada del modelo f&iacute;sico de datos se aplica para:";
 choices[50]= new Array();
 choices[50][0] = "Hacer m&aacute;s r&aacute;pidas las actualizaciones a&uacute;n sacrificando la velocidad de las lecturas sobre la base de datos.";
 choices[50][1] = "Proporcionar flexibilidad al modelo.";
 choices[50][2] = "Simplificar la implementaci&oacute;n del modelo.";
 choices[50][3] = "Reducir o simplificar el n&uacute;mero de accesos a la base de datos.";
 answers[50] = choices[50][3];
 units[50] = "86";
 comments[50] = "Id Pregunta: 4940. Examen TIC B 2007";


//  Id pregunta: 4959 Año de creación de pregunta: 2003-01-01
 questions[51]= "52)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con COBIT:";
 choices[51]= new Array();
 choices[51][0] = "Establece los siguientes dominios de control: Estudio de Viabilidad, An&aacute;lisis del Sistema, Dise&ntilde;o y Construcci&oacute;n,Implantaci&oacute;n y Aceptaci&oacute;n.";
 choices[51][1] = "Fue creada por INTOSAI (International Organization of Supreme audit. Institutions) en 1994.";
 choices[51][2] = "Establece un marco de objetivos de control a trav&eacute;s de 4 dominios y 34 objetivos de control de alto nivel.";
 choices[51][3] = "Establece que los recursos financieros son un tipo de recursos TIC.";
 answers[51] = choices[51][2];
 units[51] = "98";
 comments[51] = "Id Pregunta: 4959. Examen TIC B 2007";


//  Id pregunta: 5304 Año de creación de pregunta: 2003-01-01
 questions[52]= "53)  El protocolo Frame Relay:";
 choices[52]= new Array();
 choices[52][0] = "Es no orientado a conexi&oacute;n";
 choices[52][1] = "Sus tramas tienen tama&ntilde;o fijo de 1024B";
 choices[52][2] = "S&oacute;lo permite Circuitos Virtuales Permanentes y no conmutados";
 choices[52][3] = "Es orientado a conexi&oacute;n";
 answers[52] = choices[52][3];
 units[52] = "109";
 comments[52] = "Id Pregunta: 5304. ";


//  Id pregunta: 5676 Año de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique la respuesta incorrecta en relaci&oacute;n a Sistemas de Informaci&oacute;n Geogr&aacute;ficos:";
 choices[53]= new Array();
 choices[53][0] = "El t&eacute;rmino Clearinghouse se refiere al conjunto de datos marco utilizado en el Proyecto Dublin Core.";
 choices[53][1] = "El est&aacute;ndar m&aacute;s extendido para la implementaci&oacute;n de servicios de cat&aacute;logo es el ISO 23950.";
 choices[53][2] = "ISO 19110 se ocupa de la metodolog&iacute;a de catalogaci&oacute;n de objetos geogr&aacute;ficos.";
 choices[53][3] = "ISO ha producido el ISO 19115 Metadatos.";
 answers[53] = choices[53][0];
 units[53] = "67";
 comments[53] = "Id Pregunta: 5676. ";


//  Id pregunta: 5760 Año de creación de pregunta: 2009-01-01
 questions[54]= "55)  Acerca de OpenOffice, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[54]= new Array();
 choices[54][0] = "Gracias a la ingenier&iacute;a inversa, puede manejar archivos .doc de Microsoft Office.";
 choices[54][1] = "Se puede utilizar en la mayor&iacute;a de sistemas de tipo UNIX salvo en Mac OS X.";
 choices[54][2] = "Sun Microsystems financia su desarrollo.";
 choices[54][3] = "Su antecesor fue StarOffice.";
 answers[54] = choices[54][1];
 units[54] = "62";
 comments[54] = "Id Pregunta: 5760. ";


//  Id pregunta: 5846 Año de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Cual de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[55]= new Array();
 choices[55][0] = "BPML";
 choices[55][1] = "BPEL";
 choices[55][2] = "BPMN";
 choices[55][3] = "XPDL";
 answers[55] = choices[55][3];
 units[55] = "71";
 comments[55] = "Id Pregunta: 5846. MAP 2008 A1";


//  Id pregunta: 6062 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  Se ha establecido una conexi&oacute;n TCP sobre una red m&oacute;vil celular. La red m&oacute;vil sufre p&eacute;rdidas frecuentes por errores de transmisi&oacute;n debidos a las caracter&iacute;sticas del acceso radio. El emisor TCP:";
 choices[56]= new Array();
 choices[56][0] = "Distingue entre p&eacute;rdidas por errores de transmisi&oacute;n y p&eacute;rdidas por congesti&oacute;n, aplicando procedimientos de recuperaci&oacute;n diferentes.";
 choices[56][1] = "S&oacute;lo retransmite paquetes que se pierdan debido a congesti&oacute;n en la red.";
 choices[56][2] = "Indica al nivel de enlace que disminuya su tasa de env&iacute;o.";
 choices[56][3] = "Interpreta las p&eacute;rdidas debidas a errores de transmisi&oacute;n como congesti&oacute;n en la red, disminuyendo su tasa de env&iacute;o.";
 answers[56] = choices[56][3];
 units[56] = "100";
 comments[56] = "Id Pregunta: 6062. TIC A 2009";


//  Id pregunta: 6103 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  Indique cual de las siguientes es una caracter&iacute;stica de un servidor &quot;blade&quot;.";
 choices[57]= new Array();
 choices[57][0] = "No contienen fuente de alimentaci&oacute;n propia.";
 choices[57][1] = "Tiene prestaciones m&aacute;s bajas que un servidor tradicional.";
 choices[57][2] = "Solo se puede utilizar en entornos virtualizados.";
 choices[57][3] = "No tiene memoria propia.";
 answers[57] = choices[57][0];
 units[57] = "49";
 comments[57] = "Id Pregunta: 6103. TIC A 2009";


//  Id pregunta: 6169 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  En el proceso de comunicaci&oacute;n no interviene/n:";
 choices[58]= new Array();
 choices[58][0] = "El emisor, el mensaje, el canal y el receptor.";
 choices[58][1] = "El lenguaje.";
 choices[58][2] = "La codificaci&oacute;n.";
 choices[58][3] = "La retroalimentaci&oacute;n.";
 answers[58] = choices[58][1];
 units[58] = "23";
 comments[58] = "Id Pregunta: 6169. ";


//  Id pregunta: 6337 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  Para poder realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n es conveniente:";
 choices[59]= new Array();
 choices[59][0] = "Haber definido en el dise&ntilde;o multidimensional jerarqu&iacute;as.";
 choices[59][1] = "No se pueden realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n.";
 choices[59][2] = "Que se disponga del operador GENERALIZATION en el gestor.";
 choices[59][3] = "Si no se dispone del operador de GENERATE no se pueden realizar este tipo de consultas.";
 answers[59] = choices[59][0];
 units[59] = "68";
 comments[59] = "Id Pregunta: 6337. ";


//  Id pregunta: 6501 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Qu&eacute; navegador de Internet est&aacute; licenciado bajo la licencia MPL?";
 choices[60]= new Array();
 choices[60][0] = "Google Chrome";
 choices[60][1] = "Mozilla Firefox";
 choices[60][2] = "Mosaic";
 choices[60][3] = "Netscape Navigator";
 answers[60] = choices[60][1];
 units[60] = "61";
 comments[60] = "Id Pregunta: 6501. ";


//  Id pregunta: 6555 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  PKCS#10 define ";
 choices[61]= new Array();
 choices[61][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[61][1] = "Sintaxis para las peticiones de certificados";
 choices[61][2] = "El formato del sobre digital";
 choices[61][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[61] = choices[61][1];
 units[61] = "74";
 comments[61] = "Id Pregunta: 6555. ";


//  Id pregunta: 7317 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  Cu&aacute;l de los siguientes no forma parte del Framework o Marco de Trabajo .NET:";
 choices[62]= new Array();
 choices[62][0] = "MSIL";
 choices[62][1] = "JVM";
 choices[62][2] = "Biblioteca de Clases Base o BCL";
 choices[62][3] = "CLR (Common Language Runtime)";
 answers[62] = choices[62][1];
 units[62] = "59";
 comments[62] = "Id Pregunta: 7317. ";


//  Id pregunta: 7765 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)   Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[63]= new Array();
 choices[63][0] = " Reusabilidad.";
 choices[63][1] = " Encapsulaci&oacute;n.";
 choices[63][2] = " Abstracci&oacute;n.";
 choices[63][3] = " Persistencia.";
 answers[63] = choices[63][3];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7765. Map 2005";


//  Id pregunta: 7841 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)   Sean en una comunicaci&oacute;n: m = mensaje a transmitir. y = h(m) el c&oacute;digo hash del mensaje m calculado en origen. m&rsquo; = mensaje recibido. y&rsquo; = h(m&rsquo;) el c&oacute;digo hash del mensaje m&rsquo; recibido, calculado en destino. Se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[64]= new Array();
 choices[64][0] = " Si y = y&rsquo; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&rsquo;.";
 choices[64][1] = " Si y ? y&rsquo; entonces se puede afirmar que la clave privada ha sido alterada.";
 choices[64][2] = " Si m = m&rsquo; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&rsquo;.";
 choices[64][3] = " Si y = y&rsquo; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&rsquo;.";
 answers[64] = choices[64][0];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 7841. Map 2005";


//  Id pregunta: 7899 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)   &iquest;Qu&eacute; elementos de los siguientes pueden aparecer en un diagrama de Casos de Uso con la notaci&oacute;n de UML (Unified Modeling Language)?";
 choices[65]= new Array();
 choices[65][0] = " Objetos, casos de uso y actividades.";
 choices[65][1] = " Actores, objetos y relaciones.";
 choices[65][2] = " Casos de uso, actores y relaciones.";
 choices[65][3] = " Actores, casos de uso y actividades.";
 answers[65] = choices[65][2];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 7899. Map 2006";


//  Id pregunta: 8024 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)   Indique cu&aacute;l de los siguientes NO es un tipo de EJB (&laquo;Enterprise Java Beans&raquo;):";
 choices[66]= new Array();
 choices[66][0] = " Beans de entidad.";
 choices[66][1] = " Beans de aplicaci&oacute;n.";
 choices[66][2] = " Beans de sesi&oacute;n.";
 choices[66][3] = " Beans orientados a mensajes.";
 answers[66] = choices[66][1];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 8024. Map 2007";


//  Id pregunta: 8054 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)   El XML (Extensible Markup Language) ha sido desarrollado por el W3C. Indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[67]= new Array();
 choices[67][0] = " Proviene del SGML.";
 choices[67][1] = " Pretende ser un est&aacute;ndar para el intercambio de informaci&oacute;n entre plataformas no circunscrito exclusivamente a Internet.";
 choices[67][2] = " Dada su extensibilidad no se soporta en bases de datos sino que requiere formatos de texto plano.";
 choices[67][3] = " No es un lenguaje propiamente dicho sino un metalenguaje creado para definir lenguages que cubran diferentes necesidades.";
 answers[67] = choices[67][2];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 8054. Map 2007";


//  Id pregunta: 8192 Año de creación de pregunta: 2011-01-01
 questions[68]= "69)  Indique la afirmaci&oacute;n correcta que aplica al DNI electr&oacute;nico: ";
 choices[68]= new Array();
 choices[68][0] = "La PKI adoptada para el DNI electr&oacute;nico asigna las funciones de Autoridad de Validaci&oacute;n a las entidades Autoridad de Certificaci&oacute;n, con objeto de tener conocimiento de la vigencia o caducidad de certificados de un determinado titular. ";
 choices[68][1] = "La clave personal de acceso (PIN) podr&aacute; contener signos de puntuaci&oacute;n.";
 choices[68][2] = "Todos los certificados emitidos por DNIe contienen la extensi&oacute;n &lsquo;Key Usage&rsquo; con al menos los siguientes usos &quot;contentCommitment&quot;, &quot;Digital Signature&quot; y &quot;dataEncipherment&quot;.";
 choices[68][3] = "El tama&ntilde;o de las claves de los certificados de autenticaci&oacute;n y firma contenidos en el DNIe, es de 4096 bits. ";
 answers[68] = choices[68][1];
 units[68] = "74";
 comments[68] = "Id Pregunta: 8192. Examen TIC A1 2010";


//  Id pregunta: 8208 Año de creación de pregunta: 2011-01-01
 questions[69]= "70)  En una tabla de una base de datos relacional:";
 choices[69]= new Array();
 choices[69][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[69][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[69][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[69][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder ala tabla.";
 answers[69] = choices[69][3];
 units[69] = "57, 58";
 comments[69] = "Id Pregunta: 8208. Examen TIC A1 2010";


//  Id pregunta: 8333 Año de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil de desarrollo?";
 choices[70]= new Array();
 choices[70][0] = "Programaci&oacute;n Extrema (XP).";
 choices[70][1] = "SCRUM.";
 choices[70][2] = "RDS.";
 choices[70][3] = "Feature-Driven Development (FDD).";
 answers[70] = choices[70][2];
 units[70] = "79";
 comments[70] = "Id Pregunta: 8333. Examen TIC A2 2010";


//  Id pregunta: 8391 Año de creación de pregunta: 2011-01-01
 questions[71]= "72)  Para las pruebas de caja transparente, se&ntilde;ale la opci&oacute;n correcta:";
 choices[71]= new Array();
 choices[71][0] = "Aseguran la ausencia absoluta de defectos.";
 choices[71][1] = "Comprueban la funcionalidad de un programa.";
 choices[71][2] = "Se realizan ignorando completamente la estructura interna de un programa.";
 choices[71][3] = "Exigen el conocimiento de la estructura interna del programa.";
 answers[71] = choices[71][3];
 units[71] = "91";
 comments[71] = "Id Pregunta: 8391. Examen TIC A2 2010";


//  Id pregunta: 8610 Año de creación de pregunta: 2011-01-01
 questions[72]= "73)  En el contexto de las tareas de explotaci&oacute;n de sistemas de informaci&oacute;n, se denominan tareas u operaciones &quot;lights-out&quot; a:";
 choices[72]= new Array();
 choices[72][0] = "Las tareas u operaciones automatizadas, que se llevan a cabo sin intervenci&oacute;n humana, de forma desatendida";
 choices[72][1] = "Las tareas incluidas en el plan de contingencias, a llevar a cabo en caso de corte del suminstro el&eacute;ctrico.";
 choices[72][2] = "Las tareas que no se pueden automatizar, por lo que necesariamente requieren personal para su realizaci&oacute;n.";
 choices[72][3] = "Las tareas criticas, que requieren su Inclusi&oacute;n especifica en el plan de contingencias, en una localizaci&oacute;n f&iacute;sica alternativa a la habitual.";
 answers[72] = choices[72][0];
 units[72] = "26";
 comments[72] = "Id Pregunta: 8610. Examen TIC A2 2010 interna";


//  Id pregunta: 8632 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes actividades NO pertenece a la Gesti&oacute;n del Proyecto seg&uacute;n M&eacute;trica v3?";
 choices[73]= new Array();
 choices[73][0] = "Identificaci&oacute;n de las Propiedades de Calidad.";
 choices[73][1] = "Planificaci&oacute;n.";
 choices[73][2] = "Cierre del Proyecto.";
 choices[73][3] = "Estimaci&oacute;n de Esfuerzo.";
 answers[73] = choices[73][0];
 units[73] = "86";
 comments[73] = "Id Pregunta: 8632. Examen TIC A2 2010 interna";


//  Id pregunta: 8634 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes NO es un grupo de actividad de la Gesti&oacute;n de Proyectos?";
 choices[74]= new Array();
 choices[74][0] = "Actividades de Seguimiento y Control.";
 choices[74][1] = "Actividades de Planificaci&oacute;n del Proyecto.";
 choices[74][2] = "Actividades de Finalizaci&oacute;n del Proyecto.";
 choices[74][3] = "Actividades de Inicio del Proyecto.";
 answers[74] = choices[74][1];
 units[74] = "86";
 comments[74] = "Id Pregunta: 8634. Examen TIC A2 2010 interna";


//  Id pregunta: 8641 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  En la arquitectura ANSI SQL la capacidad do modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[75]= new Array();
 choices[75][0] = "Independencia f&iacute;sica.";
 choices[75][1] = "Independencia L&oacute;gica.";
 choices[75][2] = "Integridad de la entidad";
 choices[75][3] = "Integridad referencial.";
 answers[75] = choices[75][0];
 units[75] = "57, 58";
 comments[75] = "Id Pregunta: 8641. Examen TIC A2 2010 interna";


//  Id pregunta: 8658 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[76]= new Array();
 choices[76][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[76][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[76][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[76][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[76] = choices[76][3];
 units[76] = "99";
 comments[76] = "Id Pregunta: 8658. Examen UPM A2 2011";


//  Id pregunta: 8666 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[77]= new Array();
 choices[77][0] = "802.6";
 choices[77][1] = "802.7";
 choices[77][2] = "802.8";
 choices[77][3] = "802.9";
 answers[77] = choices[77][2];
 units[77] = "101";
 comments[77] = "Id Pregunta: 8666. Examen UPM A2 2011";


//  Id pregunta: 8675 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  En una red MPLS, &iquest;qu&eacute; funci&oacute;n realiza el LSR?";
 choices[78]= new Array();
 choices[78][0] = "Es el elemento que conmuta etiquetas.";
 choices[78][1] = "Es el nombre de un circuito virtual MPLS.";
 choices[78][2] = "Es el elemento que inicia o termina el t&uacute;nel.";
 choices[78][3] = "Es el elemento que conmuta el tr&aacute;fico.";
 answers[78] = choices[78][0];
 units[78] = "100";
 comments[78] = "Id Pregunta: 8675. Examen UPM A2 2011";


//  Id pregunta: 8802 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Qu&eacute; es un Scriptlet JSP?";
 choices[79]= new Array();
 choices[79][0] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;&mdash; y --&gt;";
 choices[79][1] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;* y *&gt;";
 choices[79][2] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;+ y +&gt;";
 choices[79][3] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;% y %&gt;";
 answers[79] = choices[79][3];
 units[79] = "116";
 comments[79] = "Id Pregunta: 8802. Examen UPM A2 2011";


//  Id pregunta: 8809 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[80]= new Array();
 choices[80][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[80][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[80][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[80][3] = "Todas las anteriores son falsas";
 answers[80] = choices[80][0];
 units[80] = "59, 115";
 comments[80] = "Id Pregunta: 8809. Examen UPM A2 2011";


//  Id pregunta: 8934 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  Las Administraciones competentes en materia de justicia no deber&aacute;n asegurar el acceso de todos los ciudadanos a los servicios electr&oacute;nicos proporcionados en su &aacute;mbito a trav&eacute;s de:";
 choices[81]= new Array();
 choices[81][0] = "Servicios de atenci&oacute;n telef&oacute;nica";
 choices[81][1] = "Las principales p&aacute;ginas web de la Administraci&oacute;n de Justicia";
 choices[81][2] = "Puntos de informaci&oacute;n electr&oacute;nicos, ubicados en los edificios judiciales";
 choices[81][3] = "Las oficinas de informaci&oacute;n y atenci&oacute;n al p&uacute;blico";
 answers[81] = choices[81][1];
 units[81] = "43";
 comments[81] = "Id Pregunta: 8934. ";


//  Id pregunta: 8948 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;En qu&eacute; caso ser&iacute;a suficiente una autoevaluaci&oacute;n como auditor&iacute;a al sistema de informaci&oacute;n seg&uacute;n el RD 3/2010?";
 choices[82]= new Array();
 choices[82][0] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica";
 choices[82][1] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o inferior";
 choices[82][2] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o media";
 choices[82][3] = "Cuando as&iacute; lo decida el responsable de seguridad competente";
 answers[82] = choices[82][1];
 units[82] = "43";
 comments[82] = "Id Pregunta: 8948. ";


//  Id pregunta: 8957 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Denttro de Web Sem&aacute;ntica 3.0 &iquest;cu&aacute;l no es un lenguaje de construcci&oacute;n?";
 choices[83]= new Array();
 choices[83][0] = "SHOE";
 choices[83][1] = "DAML + OIL";
 choices[83][2] = "WDML";
 choices[83][3] = "RDF";
 answers[83] = choices[83][2];
 units[83] = "63";
 comments[83] = "Id Pregunta: 8957. ";


//  Id pregunta: 9113 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Cu&aacute;ndo se publicaron las taxonom&iacute;as de Flynn?";
 choices[84]= new Array();
 choices[84][0] = "En 1950";
 choices[84][1] = "Por primera vez en 1966 y por segunda vez en 1970";
 choices[84][2] = "En 1980";
 choices[84][3] = "En la d&eacute;cada de los noventa.";
 answers[84] = choices[84][1];
 units[84] = "45";
 comments[84] = "Id Pregunta: 9113. ";


//  Id pregunta: 9171 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  Cu&aacute;l de los siguientes productos de UN/CEFACT es un est&aacute;ndar:";
 choices[85]= new Array();
 choices[85][0] = "UN/CCL (Core Components Library)";
 choices[85][1] = "ebXML CCTS (Core Components Technical Specification)";
 choices[85][2] = "XML Naming and Design Rules";
 choices[85][3] = "UNECE TDED ISO 7273";
 answers[85] = choices[85][0];
 units[85] = "70";
 comments[85] = "Id Pregunta: 9171. ";


//  Id pregunta: 9247 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Qu&eacute; interfaces admit&iacute;a NT?";
 choices[86]= new Array();
 choices[86][0] = "OS/2";
 choices[86][1] = "POSIX";
 choices[86][2] = "OS/2, POSIX y Win32.";
 choices[86][3] = "Aunque admit&iacute;a OS/2, todav&iacute;a se sigue utilizando en Windows XP.";
 answers[86] = choices[86][2];
 units[86] = "56";
 comments[86] = "Id Pregunta: 9247. ";


//  Id pregunta: 9281 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre el Tribunal Administrativo Central de recursos contractuales";
 choices[87]= new Array();
 choices[87][0] = "Fue creado por la ley 34/2010.";
 choices[87][1] = "Est&aacute; adscrito al Ministerio de Justicia. ";
 choices[87][2] = "Conoce los recursos especiales en materia de contrataci&oacute;n.";
 choices[87][3] = "Todas son verdaderas. ";
 answers[87] = choices[87][1];
 units[87] = "41";
 comments[87] = "Id Pregunta: 9281. Est&aacute; adscrito al MINHAP";


//  Id pregunta: 9295 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  &iquest;En qu&eacute; se diferencia el Plan de Continuidad de Negocio y el Plan de Recuperaci&oacute;n ante Desastres?";
 choices[88]= new Array();
 choices[88][0] = "No existe ninguna diferencia, son t&eacute;rminos equivalentes.";
 choices[88][1] = "El Plan de Continuidad de Negocio se centra en la parte reactiva de las TIC mientras que el de Recuperaci&oacute;n ante Desastres afecta a todos los departamentos de la organizaci&oacute;n.";
 choices[88][2] = "El Plan de Recuperaci&oacute;n ante Desastres se centra en la parte reactiva y es un subconjunto del Plan de Continuidad de Negocio. ";
 choices[88][3] = "Ninguna de las anteriores.";
 answers[88] = choices[88][2];
 units[88] = "32";
 comments[88] = "Id Pregunta: 9295. ";


//  Id pregunta: 9393 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[89]= new Array();
 choices[89][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[89][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[89][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[89][3] = "Ninguna de las respuestas es correcta.";
 answers[89] = choices[89][0];
 units[89] = "108";
 comments[89] = "Id Pregunta: 9393. Examen Teleco Ayto Madrid 2010.";


//  Id pregunta: 9499 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  Indica la afirmaci&oacute;n verdadera con respecto a los applets:";
 choices[90]= new Array();
 choices[90][0] = "Se descargan como documentos HTML y se ejecutan en el cliente";
 choices[90][1] = "El usuario no permite el acceso a los recursos locales por el s&oacute;lo hecho de aceptar un applet";
 choices[90][2] = "Se ejecutan en un componente independiente del navegador";
 choices[90][3] = "Todas las anteriores son ciertas";
 answers[90] = choices[90][3];
 units[90] = "114";
 comments[90] = "Id Pregunta: 9499. ";


//  Id pregunta: 9527 Año de creación de pregunta: 2013-01-01
 questions[91]= "92)  Se&ntilde;ale la afimaci&oacute;n correcta respecto al protocolo SIP";
 choices[91]= new Array();
 choices[91][0] = "Proporciona servicios que implementan modelos de petici&oacute;n-respuesta";
 choices[91][1] = "Proporciona primitivas que implementan modelos de petici&oacute;n-respuesta";
 choices[91][2] = "Sobre SIP se monta RTP que se utiliza para negociar las capacidades de la comunicaci&oacute;n";
 choices[91][3] = "Los elementos involucrados en la videoconferencia est&aacute;n representados por URLs";
 answers[91] = choices[91][1];
 units[91] = "117";
 comments[91] = "Id Pregunta: 9527. ";


//  Id pregunta: 9735 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  Seg&uacute;n el Real Decreto 1720/2007, &iquest;cu&aacute;l de las siguientes declaraciones es correcta respecto a pruebas en sistemas con datos de car&aacute;cter personal?";
 choices[92]= new Array();
 choices[92][0] = "Queda terminantemente prohibida la realizaci&oacute;n de pruebas en los sistemas de informaci&oacute;n que traten datos reales en ficheros con datos de car&aacute;cter personal.";
 choices[92][1] = "No existen limitaciones para usar datos reales en ficheros de car&aacute;cter personal si se utilizan para las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n.";
 choices[92][2] = "Las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n que traten ficheros con datos de car&aacute;cter personal no se realizar&aacute;n con datos reales, salvo que se asegure el nivel de seguridad correspondiente al tratamiento realizado y se anote su realizaci&oacute;n en el documento de seguridad.";
 choices[92][3] = "Si para la validaci&oacute;n de un sistema de informaci&oacute;n, es necesario realizar pruebas que traten ficheros con datos de car&aacute;cter personal reales, se proceder&aacute; posteriormente al borrado de dichos ficheros para cumplir la normativa legal vigente.";
 answers[92] = choices[92][2];
 units[92] = "29";
 comments[92] = "Id Pregunta: 9735. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9934 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  En la Capa de Sesi&oacute;n (nivel 5) &iquest;cu&aacute;ntos tipos de puntos de sincronizaci&oacute;n existen?";
 choices[93]= new Array();
 choices[93][0] = "2, uno mayor y otro menor.";
 choices[93][1] = "3, mayor, mediano y menor.";
 choices[93][2] = "Ninguno.";
 choices[93][3] = "Depende del protocolo implementado.";
 answers[93] = choices[93][0];
 units[93] = "100";
 comments[93] = "Id Pregunta: 9934. ";


//  Id pregunta: 9996 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[94]= new Array();
 choices[94][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[94][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[94][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[94][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[94] = choices[94][2];
 units[94] = "108";
 comments[94] = "Id Pregunta: 9996. ";


//  Id pregunta: 10045 Año de creación de pregunta: 2010-01-01
 questions[95]= "96)  La recomendaci&oacute;n X.25 de la ITU (International Telecommunication Union) se refiere a:";
 choices[95]= new Array();
 choices[95][0] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para equipos terminales que funcionan en el modo paquete y est&aacute;n conectados a redes p&uacute;blicas de datos por circuitos especializados.";
 choices[95][1] = "Interfaz equipo terminal de datos/equipo de terminaci&oacute;n del circuito de datos para los equipos terminales de datos arr&iacute;tmicos con acceso a la facilidad de ensamblado/desensamblado de paquetes en una red p&uacute;blica de datos situada en elmismo pa&iacute;s.";
 choices[95][2] = "Utilizaci&oacute;n, en las redes p&uacute;blicas de datos, de equipos terminales de datos dise&ntilde;ados para su conexi&oacute;n con m&oacute;dems s&iacute;ncronos de la serie V.";
 choices[95][3] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para funcionamiento s&iacute;ncrono en redes p&uacute;blicas de datos.";
 answers[95] = choices[95][0];
 units[95] = "103";
 comments[95] = "Id Pregunta: 10045. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10108 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Las siglas CSMA/CD significan:";
 choices[96]= new Array();
 choices[96][0] = "Carrier Sense Multiple Access with Collision Detection";
 choices[96][1] = "Carrier Sense Multiple Access with Common Data";
 choices[96][2] = "Carrier Sense Multiple Access without Collision Data";
 choices[96][3] = "Clear Sense Multiple Access with Collision Detection";
 answers[96] = choices[96][0];
 units[96] = "101";
 comments[96] = "Id Pregunta: 10108. ";


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


//  Id pregunta: 10314 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  Un conector tipo &quot;MT-Array&quot; es un conector para:";
 choices[98]= new Array();
 choices[98][0] = "Fibra &oacute;ptica.";
 choices[98][1] = "Mainframes.";
 choices[98][2] = "Buses PCI.";
 choices[98][3] = "Buses PCI.";
 answers[98] = choices[98][0];
 units[98] = "99";
 comments[98] = "Id Pregunta: 10314. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10428 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  De acuerdo con el m&eacute;todo del Valor Actual Neto, &iquest;ser&iacute;a recomendable  realizar una inversi&oacute;n en dos a&ntilde;os, con capital inicial aportado de 1 M&euro; y flujos de caja esperados de 0,1M&euro; y 0,9M&euro; en el primer y segundo a&ntilde;o de inversi&oacute;n, con un tipo de descuento del 1%? ";
 choices[99]= new Array();
 choices[99][0] = "No.";
 choices[99][1] = "No se puede deducir del enunciado";
 choices[99][2] = "Si.";
 choices[99][3] = "Debe mantenerse cuatro a&ntilde;os como m&iacute;nimo";
 answers[99] = choices[99][0];
 units[99] = "38";
 comments[99] = "Id Pregunta: 10428. Examen TIC A1 2013";


