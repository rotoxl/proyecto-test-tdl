/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 43 Año de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes componentes, incluido en la guia de portabilidad XPG4 est&aacute; tambi&eacute;n en la XPG3?:";
 choices[0]= new Array();
 choices[0][0] = "Servicio de directorio X.500";
 choices[0][1] = "X Window System Application Interface";
 choices[0][2] = "Gateway X.400";
 choices[0][3] = "Servidor NFS";
 answers[0] = choices[0][1];
 units[0] = "40";
 comments[0] = "Id Pregunta: 43. ";


//  Id pregunta: 61 Año de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; es ECMA?:";
 choices[1]= new Array();
 choices[1][0] = "La red de correo electr&oacute;nico de la Uni&oacute;n Europea";
 choices[1][1] = "La asociaci&oacute;n europea de fabricantes de ordenadores";
 choices[1][2] = "La entidad europea de desarrollo de est&aacute;ndares de electr&oacute;nica y comunicaciones";
 choices[1][3] = "Nada de lo anterior";
 answers[1] = choices[1][1];
 units[1] = "42";
 comments[1] = "Id Pregunta: 61. ";


//  Id pregunta: 141 Año de creación de pregunta: 2009-01-01
 questions[2]= "3)  El Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[2]= new Array();
 choices[2][0] = "Es nombrado por las Cortes Generales";
 choices[2][1] = "No puede ser cesado antes de la finalizaci&oacute;n de su mandato";
 choices[2][2] = "Ostenta el rango de Subsecretario";
 choices[2][3] = "Tiene una mandato de 6 a&ntilde;os";
 answers[2] = choices[2][2];
 units[2] = "29";
 comments[2] = "Id Pregunta: 141. ";


//  Id pregunta: 164 Año de creación de pregunta: 2002-01-01
 questions[3]= "4)  El sistema de informaci&oacute;n integrado en una organizaci&oacute;n debe tener unos objetivos. &iquest;Cu&aacute;l no ser&iacute;a exactamente uno de ellos?:";
 choices[3]= new Array();
 choices[3][0] = "Suministrar datos a los distintos niveles de la direcci&oacute;n";
 choices[3][1] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[3][2] = "Extraer ventajas competitivas de su entorno";
 choices[3][3] = "Ayudar a determinar los objetivos de la organizaci&oacute;n";
 answers[3] = choices[3][3];
 units[3] = "21";
 comments[3] = "Id Pregunta: 164. ";


//  Id pregunta: 184 Año de creación de pregunta: 2002-01-01
 questions[4]= "5)  En el m&eacute;todo PERT, &iquest;cu&aacute;l de las afirmaciones es falsa?";
 choices[4]= new Array();
 choices[4][0] = "La holgura libre de una actividad es el margen sobrante suponiendo que el nudo de origen se alcanza lo m&aacute;s pronto posible y que al destino se llega tambi&eacute;n lo m&aacute;s pronto posible.";
 choices[4][1] = "La oscilaci&oacute;n de un nudo es el margen de tiempo existente entre el momento m&aacute;s tarde en el que es admisible llegar al mismo (tiempo early) y el momento m&aacute;s pronto en el que es posible llegar (tiempo last).";
 choices[4][2] = "La holgura total es el margen sobrante suponiendo que a la situaci&oacute;n representada por el nudo de origen se llega lo m&aacute;s pronto posible y que a la de destino se llega lo m&aacute;s tarde admisible.";
 choices[4][3] = "La mayor&iacute;a de los software de Gesti&oacute;n de Proyectos incorporan las t&eacute;cnicas PERT.";
 answers[4] = choices[4][1];
 units[4] = "27";
 comments[4] = "Id Pregunta: 184. ";


//  Id pregunta: 229 Año de creación de pregunta: 2002-01-01
 questions[5]= "6)  En las t&eacute;cnicas de negociaci&oacute;n y de resoluci&oacute;n de conflictos, el 'empowerment' consiste en:";
 choices[5]= new Array();
 choices[5][0] = "Potenciar el di&aacute;logo con reuniones peri&oacute;dicas";
 choices[5][1] = "Establecer una pauta a seguir como norma general indiscutible";
 choices[5][2] = "Dar poder a los subordinados para que se impliquen en la organizaci&oacute;n";
 choices[5][3] = "Nada de lo anterior es correcto";
 answers[5] = choices[5][2];
 units[5] = "28";
 comments[5] = "Id Pregunta: 229. negociaci&oacute;n";


//  Id pregunta: 293 Año de creación de pregunta: 2002-01-01
 questions[6]= "7)  La definici&oacute;n de organizaci&oacute;n como &quot;combinaci&oacute;n de medios humanos y materiales disponibles para la consecuci&oacute;n de un fin seg&uacute;n un esquema preciso de dependencias e interrelaciones&quot; es debida a: ";
 choices[6]= new Array();
 choices[6][0] = "Andrea Zerilli";
 choices[6][1] = "Stephen Robbins";
 choices[6][2] = "James Emery";
 choices[6][3] = "Robert Gibson";
 answers[6] = choices[6][0];
 units[6] = "22";
 comments[6] = "Id Pregunta: 293. ";


//  Id pregunta: 493 Año de creación de pregunta: 2003-01-01
 questions[7]= "8)  &iquest;C&uacute;antos niveles de evaluaci&oacute;n est&aacute;n contemplados en los Criterios Comunes?";
 choices[7]= new Array();
 choices[7][0] = "Siete";
 choices[7][1] = "Coinciden con los de ITSEC";
 choices[7][2] = "Cinco";
 choices[7][3] = "Seis";
 answers[7] = choices[7][0];
 units[7] = "31,32,33";
 comments[7] = "Id Pregunta: 493. ";


//  Id pregunta: 622 Año de creación de pregunta: 2006-01-01
 questions[8]= "9)  En teor&iacute;a de la decisi&oacute;n multicriterio discreta (DMD), el m&eacute;todo QUALIFLEX se basa en:";
 choices[8]= new Array();
 choices[8][0] = "evaluaciones cardinales y pesos cardinales";
 choices[8][1] = "evaluaciones ordinales y pesos cardinales";
 choices[8][2] = "evaluaciones ordinales y pesos ordinales";
 choices[8][3] = "evaluaciones cardinales y pesos ordinales";
 answers[8] = choices[8][1];
 units[8] = "34";
 comments[8] = "Id Pregunta: 622. ";


//  Id pregunta: 701 Año de creación de pregunta: 2004-01-01
 questions[9]= "10)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[9]= new Array();
 choices[9][0] = "Firma electr&oacute;nica avanzada";
 choices[9][1] = "Firma electr&oacute;nica reconocida";
 choices[9][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[9][3] = "Ninguna de las anteriores";
 answers[9] = choices[9][1];
 units[9] = "30";
 comments[9] = "Id Pregunta: 701. Ley Firma-e, art.3. Similar a examen TIC MAP A 2004";


//  Id pregunta: 747 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  La criptograf&iacute;a sirve para codificar:";
 choices[10]= new Array();
 choices[10][0] = "Lenguaje manuscrito";
 choices[10][1] = "Lenguaje manuscrito y datos";
 choices[10][2] = "Datos exclusivamente, al no poder aplicar t&eacute;cnicas inform&aacute;ticas al lenguaje manuscrito.";
 choices[10][3] = "La criptograf&iacute;a no se usa para codificar, sino s&oacute;lo para decodificar";
 answers[10] = choices[10][1];
 units[10] = "72";
 comments[10] = "Id Pregunta: 747. Similar a examen TIC SS A 2003";


//  Id pregunta: 752 Año de creación de pregunta: 2004-01-01
 questions[11]= "12)  A finales del a&ntilde;o 2003, la industria lanz&oacute; un est&aacute;ndar H.350 de videoconferencia con el fin de impulsar el despliegue de este tipo de sistemas. &iquest;Sabr&iacute;a indicar en qu&eacute; consiste fundamentalmente?";
 choices[11]= new Array();
 choices[11][0] = "Permite una conversaci&oacute;n y negociaci&oacute;n sobre la calidad de los terminales sobre un protocolo HTTP entre dos extremos remotos ";
 choices[11][1] = "Complementa el est&aacute;ndar H.323 para soportar transmisi&oacute;n por l&iacute;neas ADSL";
 choices[11][2] = "Define un servicio de directorio basado en LDAP para usuarios y equipos de videoconferencia.";
 choices[11][3] = "Todas las anteriores";
 answers[11] = choices[11][2];
 units[11] = "117";
 comments[11] = "Id Pregunta: 752. ";


//  Id pregunta: 1025 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  Entre las siguientes caract&eacute;risticas del HTML (Hyper Text Markup Language) hay una incorrecta. Se&ntilde;&aacute;lela:";
 choices[12]= new Array();
 choices[12][0] = "No se necesita ning&uacute;n compilador especial para realizar p&aacute;gina Web";
 choices[12][1] = "Los tipos de letra (fuentes o fonts) vienen declarados dentro del texto en 'claro'";
 choices[12][2] = "La &uacute;ltima especificaci&oacute;n de este lenguaje es la HTML 2.0";
 choices[12][3] = "Las p&aacute;gina Web, pueden interactuar con los usuarios a trav&eacute;s de los CGI (Common Gateway Interfaces) o de los applets de Java";
 answers[12] = choices[12][2];
 units[12] = "69";
 comments[12] = "Id Pregunta: 1025. ";


//  Id pregunta: 1516 Año de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[13]= new Array();
 choices[13][0] = "Formato de certificado digital";
 choices[13][1] = "Formato de sobre digital";
 choices[13][2] = "Cifrado con clave privada";
 choices[13][3] = "Sintaxis de la clave privada";
 answers[13] = choices[13][1];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1516. ";


//  Id pregunta: 1588 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  En el modelo l&oacute;gico relacional, &iquest;qu&eacute; afirmaci&oacute;n es cierta?";
 choices[14]= new Array();
 choices[14][0] = "La clave candidata es la clave que el analista escoge entre todas las claves primarias y a las que no escoge se las denomina claves alternativas.";
 choices[14][1] = "La clave alternativa es la clave primaria pero que puede tomar valores nulos.";
 choices[14][2] = "La clave primaria tiene menos atributos que la clave candidata.";
 choices[14][3] = "La clave primaria es la clave que el analista escoge entre todas las claves candidatas y no puede adoptar bajo ninguna circunstancia el valor nulo.";
 answers[14] = choices[14][3];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1588. ";


//  Id pregunta: 1631 Año de creación de pregunta: 2003-01-01
 questions[15]= "16)  Un debugger (depurador) de programas :";
 choices[15]= new Array();
 choices[15][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[15][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[15][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[15][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[15] = choices[15][1];
 units[15] = "59";
 comments[15] = "Id Pregunta: 1631. ";


//  Id pregunta: 1766 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  El lenguaje Java, para las variables de clase, utiliza el modificador";
 choices[16]= new Array();
 choices[16][0] = "extern";
 choices[16][1] = "private";
 choices[16][2] = "final";
 choices[16][3] = "static";
 answers[16] = choices[16][3];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1766. JCED - Preparatic XVII";


//  Id pregunta: 1775 Año de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Qu&eacute; es falso respecto a la licencia GPL?";
 choices[17]= new Array();
 choices[17][0] = "Los programas con licencia GPL carecen de derechos de autor";
 choices[17][1] = "Exige que los fuentes est&eacute;n a disposici&oacute;n de quien disponga de los binarios";
 choices[17][2] = "No permite su integraci&oacute;n con software propietario";
 choices[17][3] = "Permite modificaciones y redistribuci&oacute;n de estas";
 answers[17] = choices[17][0];
 units[17] = "61,62";
 comments[17] = "Id Pregunta: 1775. ";


//  Id pregunta: 1786 Año de creación de pregunta: 2006-01-01
 questions[18]= "19)  Los m&eacute;todos de busca heur&iacute;stica&hellip;";
 choices[18]= new Array();
 choices[18][0] = "Nunca encuentran la soluci&oacute;n &oacute;ptima";
 choices[18][1] = "Dan con la soluci&oacute;n &oacute;ptima en menos tiempo";
 choices[18][2] = "Dan con la soluci&oacute;n &oacute;ptima pero pueden ser m&aacute;s lentos que otros m&eacute;todos";
 choices[18][3] = "Permiten encontrar una buena soluci&oacute;n r&aacute;pidamente pero puede no ser la &oacute;ptima";
 answers[18] = choices[18][3];
 units[18] = "63";
 comments[18] = "Id Pregunta: 1786. ";


//  Id pregunta: 1800 Año de creación de pregunta: 2006-01-01
 questions[19]= "20)  En el campo de los sistemas expertos, se&ntilde;ale de las siguientes opciones aquella que enumere sistemas que utilicen representaci&oacute;n param&eacute;trica:";
 choices[19]= new Array();
 choices[19][0] = "Redes neuronales; representaci&oacute;n por marcos; sistemas basados en restricciones";
 choices[19][1] = "Algoritmos gen&eacute;ticos; redes neuronales y redes sem&aacute;nticas";
 choices[19][2] = "Redes neuronales, redes sem&aacute;nticas, y sistemas basados en marcos";
 choices[19][3] = "Redes neuronales y el perceptr&oacute;n";
 answers[19] = choices[19][3];
 units[19] = "64";
 comments[19] = "Id Pregunta: 1800. ";


//  Id pregunta: 1931 Año de creación de pregunta: 2006-01-01
 questions[20]= "21)  Seleccione la afirmaci&oacute;n incorrecta sobre la relaci&oacute;n de la especificaci&oacute;n Learning Design con otras especificaciones";
 choices[20]= new Array();
 choices[20][0] = "IMS DR puede ser transformado a las caracter&iacute;sticas de Learning Design, particularmente con la clase &quot;abstract person&quot;";
 choices[20][1] = "Learning Design puede ser integrado dentro la estructura de IMS Content Package en la secci&oacute;n de &lt;organization&gt;";
 choices[20][2] = "Learning Design puede incorporar preguntas y test definidos con IMS QTI";
 choices[20][3] = "Learning Design incluye expresiones, metadatos y vocabularios de IMS y IEEE metadata";
 answers[20] = choices[20][0];
 units[20] = "66";
 comments[20] = "Id Pregunta: 1931. ";


//  Id pregunta: 2026 Año de creación de pregunta: 2004-01-01
 questions[21]= "22)  En el &aacute;mbito de las tecnolog&iacute;as multimedia, se&ntilde;ale cu&aacute;l de los siguientes formatos corresponder&iacute;a a una imagen con &quot;formato de gr&aacute;fico vectorial&quot;:";
 choices[21]= new Array();
 choices[21][0] = "Graphical Interchange Format (GIF)";
 choices[21][1] = "Windows Metafile Format (WMF)";
 choices[21][2] = "Portable Network Graphics (PNG)";
 choices[21][3] = "Windows Bitmap (BMP)";
 answers[21] = choices[21][1];
 units[21] = "93";
 comments[21] = "Id Pregunta: 2026. Examen TIC MAP B 2004";


//  Id pregunta: 2218 Año de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Qu&eacute; son herramientas meta-CASE?";
 choices[22]= new Array();
 choices[22][0] = "Son herramientas CASE adaptables que permiten que el propio usuario se defina su propia metodolog&iacute;a y los s&iacute;mbolos de las notaciones a utilizar.";
 choices[22][1] = "Son herramientas que sirven de ayuda a la adquisici&oacute;n, medici&oacute;n, simulaci&oacute;n y prueba de los equipos l&oacute;gicos desarrollados.";
 choices[22][2] = "Son herramientas que engloban compiladores, editores y depuradores de los lenguajes de programaci&oacute;n convencionales.";
 choices[22][3] = "Son herramientas que sirven para modelizar los requisitos de informaci&oacute;n estrat&eacute;gica de una organizaci&oacute;n.";
 answers[22] = choices[22][2];
 units[22] = "91";
 comments[22] = "Id Pregunta: 2218. ";


//  Id pregunta: 2220 Año de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Qu&eacute; tipo de organizaci&oacute;n es tambi&eacute;n conocida por &quot;organizaci&oacute;n matricial&quot;?:";
 choices[23]= new Array();
 choices[23][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[23][1] = "Organizaci&oacute;n funcional";
 choices[23][2] = "Organizaci&oacute;n proyecto-staff";
 choices[23][3] = "Organizaci&oacute;n por aplicaciones";
 answers[23] = choices[23][0];
 units[23] = "26";
 comments[23] = "Id Pregunta: 2220. ";


//  Id pregunta: 2295 Año de creación de pregunta: 2002-01-01
 questions[24]= "25)  El objetivo del modelo conceptual es:";
 choices[24]= new Array();
 choices[24][0] = "Establecer una visi&oacute;n global de los datos";
 choices[24][1] = "Establecer el detalle de las propiedades";
 choices[24][2] = "Definir las propiedades de cada entidad";
 choices[24][3] = "Definir el flujo de informaci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "80";
 comments[24] = "Id Pregunta: 2295. ";


//  Id pregunta: 2467 Año de creación de pregunta: 2002-01-01
 questions[25]= "26)  No es un &quot;agente&quot; en el modelo EFQM:";
 choices[25]= new Array();
 choices[25][0] = "Liderazgo";
 choices[25][1] = "Gesti&oacute;n de recursos humanos";
 choices[25][2] = "Pol&iacute;ticas y estrategias";
 choices[25][3] = "Satisfacci&oacute;n del cliente";
 answers[25] = choices[25][3];
 units[25] = "92";
 comments[25] = "Id Pregunta: 2467. ";


//  Id pregunta: 3527 Año de creación de pregunta: 2002-01-01
 questions[26]= "27)  En la arquitectura de cortafuegos &quot;screened subnet&quot; o subred apantallada:";
 choices[26]= new Array();
 choices[26][0] = "se dispone de un &uacute;nico router, estando el basti&oacute;n y los dem&aacute;s componentes en la red interna";
 choices[26][1] = "se dispone de 2 routers, interno y externo, y tanto el basti&oacute;n como los dem&aacute;s componentes est&aacute;n en la red interna";
 choices[26][2] = "se dispone de 2 routers, interno y externo, y el basti&oacute;n est&aacute; en una red intermedia desmilitarizada o DMZ";
 choices[26][3] = "no se dispone de ning&uacute;n router, sino de un basti&oacute;n con funciones de proxy que apantalla la red interna y alberga los servidores p&uacute;blicos";
 answers[26] = choices[26][2];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3527. ";


//  Id pregunta: 3612 Año de creación de pregunta: 2002-01-01
 questions[27]= "28)  La interconexi&oacute;n de redes privadas a trav&eacute;s de la red 'p&uacute;blica' Internet manteniendo sus propias direcciones IP se consigue por medio de:";
 choices[27]= new Array();
 choices[27][0] = "Firewalls";
 choices[27][1] = "Proxies a nivel de aplicaci&oacute;n";
 choices[27][2] = "Tunneling o encapsulado";
 choices[27][3] = "Cifrado de las cabeceras IP";
 answers[27] = choices[27][2];
 units[27] = "103,113";
 comments[27] = "Id Pregunta: 3612. ";


//  Id pregunta: 3645 Año de creación de pregunta: 2002-01-01
 questions[28]= "29)  La tecnolog&iacute;a de red de &aacute;rea local 100VG-AnyLAN:";
 choices[28]= new Array();
 choices[28][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[28][1] = "Utiliza el protocolo de acceso al medio por demanda de prioridad IEEE 802.12";
 choices[28][2] = "Requiere 8 pares trenzados de categor&iacute;a 3";
 choices[28][3] = "Todas las afirmaciones anteriores son falsas";
 answers[28] = choices[28][1];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3645. ";


//  Id pregunta: 3648 Año de creación de pregunta: 2002-01-01
 questions[29]= "30)  La tecnolog&iacute;a de red de &aacute;rea local Switched Ethernet:";
 choices[29]= new Array();
 choices[29][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[29][1] = "Se basa en el concepto de Microsegmentaci&oacute;n (se reduce el dominio de colisi&oacute;n de tal forma que solo dos nodos coexisten en cada dominio de colisi&oacute;n)";
 choices[29][2] = "Las dos anteriores son falsas";
 choices[29][3] = "Las dos anteriores son correctas";
 answers[29] = choices[29][1];
 units[29] = "102";
 comments[29] = "Id Pregunta: 3648. ";


//  Id pregunta: 4175 Año de creación de pregunta: 2006-01-01
 questions[30]= "31)  Un buen libro de claves podr&iacute;a ser";
 choices[30]= new Array();
 choices[30][0] = "Los n&uacute;meros primos de 128 cifras";
 choices[30][1] = "La gu&iacute;a de Paginas Blancas de Madrid 2005";
 choices[30][2] = "El CD &quot;Hung up&quot; de Madonna";
 choices[30][3] = "todas las anteriores";
 answers[30] = choices[30][3];
 units[30] = "111";
 comments[30] = "Id Pregunta: 4175. ";


//  Id pregunta: 4263 Año de creación de pregunta: 2007-01-01
 questions[31]= "32)  &iquest;Cual de las siguientes afirmaciones es falsa en relacion con las t&eacute;cnicas y pr&aacute;cticas recogidas en Metrica V3?";
 choices[31]= new Array();
 choices[31][0] = "El m&eacute;todo Albretch para el an&aacute;lisis de los puntos de funcion identifica 14 atributos de ajustes al que se le asignan valores de 0 a 5";
 choices[31][1] = "Se  recoge la t&eacute;cnica de gestion de proyectos de diagrama de extrapolaci&oacute;n";
 choices[31][2] = "La t&eacute;cnica Staffing Size se basa en el n&uacute;mero de clases clave y de clases secundarias";
 choices[31][3] = "Se consideran t&eacute;cnicas de sesiones de trabajo el JRP (Joint Requirements Planning) y JAD (Joint Application Design)";
 answers[31] = choices[31][3];
 units[31] = "86";
 comments[31] = "Id Pregunta: 4263. ";


//  Id pregunta: 4284 Año de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre las estructuras de datos no es correcta?";
 choices[32]= new Array();
 choices[32][0] = "Una estructura de datos es un conjunto de variables de determinado tipo, agrupadas y organizadas para representar un comportamiento";
 choices[32][1] = "En general, la elecci&oacute;n del algoritmo y de las estructuras de datos que manipular&aacute; no tienen mucha relaci&oacute;n (bajo acoplamiento).";
 choices[32][2] = "Con las estructuras de datos se pretende facilitar un esquema l&oacute;gico para manipular los datos en funci&oacute;n del problema a resolver.";
 choices[32][3] = "Las estructuras de datos pueden ser est&aacute;ticas y din&aacute;micas.";
 answers[32] = choices[32][1];
 units[32] = "79";
 comments[32] = "Id Pregunta: 4284. ";


//  Id pregunta: 4333 Año de creación de pregunta: 2007-01-01
 questions[33]= "34)  Un Puente o Bridge:";
 choices[33]= new Array();
 choices[33][0] = "S&oacute;lo funcionan con TCP/IP.";
 choices[33][1] = "Puede dividir una red en dos segmentos.";
 choices[33][2] = "Permiten establecer una Topolog&iacute;a en Estrella en una red en BUS al garantizar la compatibilidad en el nivel 2 de OSI.";
 choices[33][3] = "Encaminan la informaci&oacute;n hacia el destino siguiendo el trayecto m&aacute;s corto por la red.";
 answers[33] = choices[33][1];
 units[33] = "100";
 comments[33] = "Id Pregunta: 4333. ";


//  Id pregunta: 4387 Año de creación de pregunta: 2007-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad, seg&uacute;n el modelo de McCall?";
 choices[34]= new Array();
 choices[34][0] = "Integridad.";
 choices[34][1] = "Completitud.";
 choices[34][2] = "Fiabilidad.";
 choices[34][3] = "Facilidad de mantenimiento.";
 answers[34] = choices[34][2];
 units[34] = "88";
 comments[34] = "Id Pregunta: 4387. ";


//  Id pregunta: 4434 Año de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[35]= new Array();
 choices[35][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[35][1] = "100 kbps";
 choices[35][2] = "144 Kbps";
 choices[35][3] = "384 kbps";
 answers[35] = choices[35][3];
 units[35] = "108";
 comments[35] = "Id Pregunta: 4434. ";


//  Id pregunta: 4733 Año de creación de pregunta: 2007-01-01
 questions[36]= "37)  Los registros glue de una zona DNS son aquellos que:";
 choices[36]= new Array();
 choices[36][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[36][1] = " Son los registros que mantienen el espacio de nombres de la zona.";
 choices[36][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[36][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[36] = choices[36][1];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4733. Examen 2006 JCYL";


//  Id pregunta: 4758 Año de creación de pregunta: 2007-01-01
 questions[37]= "38)  En relaci&oacute;n con la certificaci&oacute;n de ITIL:";
 choices[37]= new Array();
 choices[37][0] = "No es posible certificar una organizaci&oacute;n o sistema de gesti&oacute;n como &laquo;conforme a ITIL&raquo;";
 choices[37][1] = "Una organizaci&oacute;n que haya implementado las gu&iacute;as de ITIL sobre Gesti&oacute;n de los Servicios de TI puede lograr certificarse bajo la ISO/IEC 20000";
 choices[37][2] = "Los particulares pueden conseguir varias certificaciones oficiales ITIL";
 choices[37][3] = "Todas son ciertas";
 answers[37] = choices[37][3];
 units[37] = "98";
 comments[37] = "Id Pregunta: 4758. ";


//  Id pregunta: 4780 Año de creación de pregunta: 2007-01-01
 questions[38]= "39)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[38]= new Array();
 choices[38][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[38][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[38][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[38][3] = "Todas las anteriores son ciertas";
 answers[38] = choices[38][3];
 units[38] = "30";
 comments[38] = "Id Pregunta: 4780. Proyecto Ley";


//  Id pregunta: 4863 Año de creación de pregunta: 2007-01-01
 questions[39]= "40)  En el proceso de reconocimiento del habla, el algoritmo Dynamic Time Warping (DTW) se utiliza para:";
 choices[39]= new Array();
 choices[39][0] = "Evitar el uso de plantillas";
 choices[39][1] = "Evitar la alineaci&oacute;n temporal";
 choices[39][2] = "Reconocer palabras aisladas y habla continua";
 choices[39][3] = "Conseguir resultados &oacute;ptimos con vocabularios de 5.000 palabras";
 answers[39] = choices[39][2];
 units[39] = "95,94";
 comments[39] = "Id Pregunta: 4863. ";


//  Id pregunta: 4967 Año de creación de pregunta: 2003-01-01
 questions[40]= "41)  El principio de Frank-Condon, de especial importancia en las comunicaciones &oacute;pticas basadas en l&aacute;ser de semiconductor, establece que:";
 choices[40]= new Array();
 choices[40][0] = "La atenuaci&oacute;n de la se&ntilde;al disminuye con el cuadrado de la longitud de onda.";
 choices[40][1] = "S&oacute;lo son posibles transiciones con emisi&oacute;n de fotones cuando no hay cambio en la cantidad de movimiento delelectr&oacute;n.";
 choices[40][2] = "El ruido nodal es m&aacute;ximo en la fibra monomodo.";
 choices[40][3] = "El ruido nodal es m&iacute;nimo en la fibra monomodo.";
 answers[40] = choices[40][1];
 units[40] = "99";
 comments[40] = "Id Pregunta: 4967. Examen TIC B 2007";


//  Id pregunta: 5188 Año de creación de pregunta: 2003-01-01
 questions[41]= "42)  En la programaci&oacute;n Orientada a Objetos, un Objeto es una entidad que se caracteriza porque tiene:";
 choices[41]= new Array();
 choices[41][0] = "Estado, Comportamiento e Identidad";
 choices[41][1] = "Comportamiento, Identidad y Relaciones";
 choices[41][2] = "Estado, Identidad y Relaciones";
 choices[41][3] = "Todas son falsas";
 answers[41] = choices[41][0];
 units[41] = "82";
 comments[41] = "Id Pregunta: 5188. ";


//  Id pregunta: 5243 Año de creación de pregunta: 2003-01-01
 questions[42]= "43)  Indique la pr&aacute;ctica cuyo objeto es ayudar a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n, facilitando la asignaci&oacute;n de prioridades dentro de ella:";
 choices[42]= new Array();
 choices[42][0] = "Matriz TOWS";
 choices[42][1] = "An&aacute;lisis coste/beneficio";
 choices[42][2] = "Factores cr&iacute;ticos de &eacute;xito";
 choices[42][3] = "An&aacute;lisis de impacto en la organizaci&oacute;n";
 answers[42] = choices[42][2];
 units[42] = "77";
 comments[42] = "Id Pregunta: 5243. ";


//  Id pregunta: 5418 Año de creación de pregunta: 2003-01-01
 questions[43]= "44)  La planificaci&oacute;n y gesti&oacute;n de un proyecto se encarga a una persona, que denominaremos &quot;Jefe de proyecto&quot;. El Plan de proyecto contendr&aacute;:";
 choices[43]= new Array();
 choices[43][0] = "Un grafico de Gant para estimar el coste, otro de PERT para las restricciones y usaremos COCOMO para las  etapas.";
 choices[43][1] = "Estrictamente la Metodolog&iacute;a que el Departamento especifique.";
 choices[43][2] = "Un grafico de GANTT para las etapas, un gr&aacute;fico de PERT para la representaci&oacute;n de las restricciones y usaremos COCOMO para estimar el coste.";
 choices[43][3] = "La Metodolog&iacute;a del Departamento que se suministre v&iacute;a web.";
 answers[43] = choices[43][2];
 units[43] = "27";
 comments[43] = "Id Pregunta: 5418. Castilla y Le&oacute;n";


//  Id pregunta: 5474 Año de creación de pregunta: 2003-01-01
 questions[44]= "45)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es";
 choices[44]= new Array();
 choices[44][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[44][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[44][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[44][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[44] = choices[44][2];
 units[44] = "113";
 comments[44] = "Id Pregunta: 5474. Castilla y Le&oacute;n";


//  Id pregunta: 5678 Año de creación de pregunta: 2003-01-01
 questions[45]= "46)  En cuanto a Agentes Software y la Comunicaci&oacute;n y Coordinaci&oacute;n entre agentes, indique la respuesta no correcta:";
 choices[45]= new Array();
 choices[45][0] = "En el sistema de pizarra existe una estructura de datos global, la pizarra que es gestionada y arbitrada por todos los agentes";
 choices[45][1] = "En la red de contratos en cada tarea existen dos roles diferentes: el del contratista, que es responsable de la gesti&oacute;n de una tarea y el del oferente, que se encarga de la ejecuci&oacute;n real de la tarea.";
 choices[45][2] = "KQML  es un  lenguaje de comunicaci&oacute;n entre agentes software.";
 choices[45][3] = "Ninguna de las anteriores es correcta";
 answers[45] = choices[45][0];
 units[45] = "63";
 comments[45] = "Id Pregunta: 5678. ";


//  Id pregunta: 5734 Año de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Cu&aacute;ntos interfaces tiene el modelo de referencia de workflow de WfMC?";
 choices[46]= new Array();
 choices[46][0] = "1";
 choices[46][1] = "3";
 choices[46][2] = "5";
 choices[46][3] = "7";
 answers[46] = choices[46][2];
 units[46] = "71";
 comments[46] = "Id Pregunta: 5734. ";


//  Id pregunta: 5767 Año de creación de pregunta: 2009-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de ordenaci&oacute;n de alternativas basado en permutaciones?";
 choices[47]= new Array();
 choices[47][0] = "TOPSIS";
 choices[47][1] = "PROMETHEE";
 choices[47][2] = "ELECTRE";
 choices[47][3] = "QUALIFLEX";
 answers[47] = choices[47][3];
 units[47] = "34";
 comments[47] = "Id Pregunta: 5767. ";


//  Id pregunta: 5825 Año de creación de pregunta: 2009-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA para el programa IDABC?";
 choices[48]= new Array();
 choices[48][0] = "Es gestionado por el Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE)";
 choices[48][1] = "Se configura como el instrumento clave para llevar a cabo lo previsto en el Plan de Acci&oacute;n eEurope 2005 y sucesivos sobre el desarrollo de servicios paneuropeos";
 choices[48][2] = "Ejecuta lo previsto en la Decisi&oacute;n 2004/387/CE del Consejo UE y PE";
 choices[48][3] = "El proyecto complementario IDABD extiende esta normativa a particulares y empresas";
 answers[48] = choices[48][3];
 units[48] = "40";
 comments[48] = "Id Pregunta: 5825. MAP 2008 A1";


//  Id pregunta: 5832 Año de creación de pregunta: 2009-01-01
 questions[49]= "50)  BSA es:";
 choices[49]= new Array();
 choices[49][0] = "Una organizaci&oacute;n que mide la accesibilidad de las Web";
 choices[49][1] = "Una organizaci&oacute;n que audita las comunicaciones y el flujo de informaci&oacute;n eficiente";
 choices[49][2] = "Una organizaci&oacute;n que intenta controlar la pirater&iacute;a de software";
 choices[49][3] = "Una organizaci&oacute;n que audita la seguridad de datos de un CPD de respaldo";
 answers[49] = choices[49][2];
 units[49] = "37";
 comments[49] = "Id Pregunta: 5832. MAP 2008 A1";


//  Id pregunta: 5839 Año de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA , en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[50]= new Array();
 choices[50][0] = "Se utiliza, en general, para la auto evaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora";
 choices[50][1] = "Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea";
 choices[50][2] = "Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados";
 choices[50][3] = "La l&oacute;gica REDER se encuentra en el centro del modelo";
 answers[50] = choices[50][1];
 units[50] = "92";
 comments[50] = "Id Pregunta: 5839. MAP 2008 A1";


//  Id pregunta: 5844 Año de creación de pregunta: 2009-01-01
 questions[51]= "52)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l era clasificado por CISCO como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace";
 choices[51]= new Array();
 choices[51][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol)";
 choices[51][1] = "IGRP (Interior Gateway Routing Protocol)";
 choices[51][2] = "OSPF (Open Shortest Path First)";
 choices[51][3] = "RIPv2 (Routing Information Protocol ver. 2)";
 answers[51] = choices[51][0];
 units[51] = "102";
 comments[51] = "Id Pregunta: 5844. MAP 2008 A1";


//  Id pregunta: 5860 Año de creación de pregunta: 2009-01-01
 questions[52]= "53)  WSDL son las siglas de:";
 choices[52]= new Array();
 choices[52][0] = "Web Services Description Language";
 choices[52][1] = "Web Services Data Language";
 choices[52][2] = "Web SOAP Definition Language";
 choices[52][3] = "Web Services Distributed Language";
 answers[52] = choices[52][0];
 units[52] = "51";
 comments[52] = "Id Pregunta: 5860. Pregunta 40";


//  Id pregunta: 5936 Año de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de estas afirmaciones es cierta con respecto al hypervisor de la herramienta de virtualizaci&oacute;n Xen?";
 choices[53]= new Array();
 choices[53][0] = "Los kernels que incorporan por defecto las distribuciones populares como Debian y Red Hat pueden realizar la funci&oacute;n de hypervisor de Xen.";
 choices[53][1] = "Para que un kernel gen&eacute;rico de Debian o Red Hat puede realizar la funci&oacute;n de hypervisor debemos cargar m&oacute;dulos espec&iacute;ficos en el arranque del sistema.";
 choices[53][2] = "En funci&oacute;n del tipo que sistema operativo que vayamos a alojar como hu&eacute;sped deberemos o no cargar m&oacute;dulos espec&iacute;ficos del kernel por defecto de Debian o Red Hat para que &eacute;ste realice la funci&oacute;n de hypervisor.";
 choices[53][3] = "El hypervisor de Xen es un kernel de Linux especial que debemos instalar, puesto que el kernel por defecto de Debian o Red Hat no puede realizar esas tareas.";
 answers[53] = choices[53][3];
 units[53] = "119";
 comments[53] = "Id Pregunta: 5936. ";


//  Id pregunta: 5967 Año de creación de pregunta: 2010-01-01
 questions[54]= "55)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[54]= new Array();
 choices[54][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[54][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[54][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[54][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[54] = choices[54][2];
 units[54] = "33";
 comments[54] = "Id Pregunta: 5967. Castilla La Mancha 2009";


//  Id pregunta: 5976 Año de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[55]= new Array();
 choices[55][0] = "Internet Information Server.";
 choices[55][1] = "Weblogic.";
 choices[55][2] = "Websphere.";
 choices[55][3] = "Apache.";
 answers[55] = choices[55][3];
 units[55] = "113";
 comments[55] = "Id Pregunta: 5976. TIC A 2009";


//  Id pregunta: 6051 Año de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Qu&eacute; es CMOT?";
 choices[56]= new Array();
 choices[56][0] = "Significa Common Management Over TCP/IP y es una extensi&oacute;n de los est&aacute;ndares de gesti&oacute;n OSI para Internet";
 choices[56][1] = "Significa Common Mobile Online Trespassing y es un protocolo para realizar el traspaso de llamadas entre sistemas de telefon&iacute;a m&oacute;vil sobre VSAT ";
 choices[56][2] = "Significa Critical Mode Online Testing y es una herramienta para la realizaci&oacute;n de pruebas de rendimiento no intrusivas en aplicaciones de misi&oacute;n cr&iacute;tica ";
 choices[56][3] = "Ninguna de las respuestas anteriores es correcta ";
 answers[56] = choices[56][0];
 units[56] = "104";
 comments[56] = "Id Pregunta: 6051. ";


//  Id pregunta: 6104 Año de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un procedimiento adecuado para la consulta de la validez de un certificado digital emitido por un prestador de servicios de certificaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "Declaraci&oacute;n de pr&aacute;cticas de certificaci&oacute;n.";
 choices[57][1] = "Listas de certificados revocados.";
 choices[57][2] = "LDAP.";
 choices[57][3] = "OCSP.";
 answers[57] = choices[57][0];
 units[57] = "74";
 comments[57] = "Id Pregunta: 6104. TIC A 2009";


//  Id pregunta: 6116 Año de creación de pregunta: 2010-01-01
 questions[58]= "59)  En un sistema de base de datos relacional, la regla de integridad de las entidades consiste en que:";
 choices[58]= new Array();
 choices[58][0] = "Una relaci&oacute;n debe tener al menos una clave primaria.";
 choices[58][1] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n puede aceptar nulos.";
 choices[58][2] = "La clave primaria de una relaci&oacute;n es la &uacute;nica forma de identificar un&iacute;vocamente a una tupla.";
 choices[58][3] = "Si existen varias claves candidatas, la clave primaria es la que tiene menos campos.";
 answers[58] = choices[58][1];
 units[58] = "58";
 comments[58] = "Id Pregunta: 6116. TIC A 2009";


//  Id pregunta: 6153 Año de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Sobre qu&eacute; protocolo de la capa de presentaci&oacute;n est&aacute; implementado NFS?";
 choices[59]= new Array();
 choices[59][0] = "ONC RPC";
 choices[59][1] = "XDR";
 choices[59][2] = "NIS";
 choices[59][3] = "XML";
 answers[59] = choices[59][1];
 units[59] = "112";
 comments[59] = "Id Pregunta: 6153. ";


//  Id pregunta: 6179 Año de creación de pregunta: 2010-01-01
 questions[60]= "61)  Una ventaja del procesado de documentos XML usando SAX (frente a DOM) es:";
 choices[60]= new Array();
 choices[60][0] = "Es posible la modificaci&oacute;n de los datos en memoria.";
 choices[60][1] = "Procesa el documento completo.";
 choices[60][2] = "En el procesado de documentos grandes consume menos memoria.";
 choices[60][3] = "Todas las anteriores son ventajas de SAX frente a DOM.";
 answers[60] = choices[60][2];
 units[60] = "69";
 comments[60] = "Id Pregunta: 6179. ";


//  Id pregunta: 6250 Año de creación de pregunta: 2010-01-01
 questions[61]= "62)  Uno de los siguientes es un elemento de Java EE:";
 choices[61]= new Array();
 choices[61][0] = "Contenedor HTTP";
 choices[61][1] = "Servidor JDBC";
 choices[61][2] = "Contenedor Enterprise Java Beans";
 choices[61][3] = "Contenedor JDBC";
 answers[61] = choices[61][2];
 units[61] = "60";
 comments[61] = "Id Pregunta: 6250. TICB-2009, bloque desarrollo";


//  Id pregunta: 6296 Año de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; fases debe pasar la t&eacute;cnica de Brainstorming para que sea efectiva?";
 choices[62]= new Array();
 choices[62][0] = "Fase de Definici&oacute;n, Fase de Generaci&oacute;n y Fase de Consolidaci&oacute;n";
 choices[62][1] = "Fase de Generaci&oacute;n, Fase de Preparaci&oacute;n y Fase de Consolidaci&oacute;n";
 choices[62][2] = "Fase de Preparaci&oacute;n, Fase de Generaci&oacute;n y Fase de Conclusiones";
 choices[62][3] = "Fase de Preparaci&oacute;n, Fase de Generaci&oacute;n y Fase de Consolidaci&oacute;n";
 answers[62] = choices[62][3];
 units[62] = "78";
 comments[62] = "Id Pregunta: 6296. ";


//  Id pregunta: 6298 Año de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l es la diferencia entre una clase y un objeto?";
 choices[63]= new Array();
 choices[63][0] = "Las clases son un concepto din&aacute;mico mientras que los objetos son entes est&aacute;ticos";
 choices[63][1] = "Ninguna, son lo mismo";
 choices[63][2] = "Las clases son un concepto est&aacute;ticos mientras que los objetos son entes din&aacute;micos";
 choices[63][3] = "Tanto las clases como los objetos son entes est&aacute;ticos definidos en el programa fuente";
 answers[63] = choices[63][2];
 units[63] = "82";
 comments[63] = "Id Pregunta: 6298. ";


//  Id pregunta: 6421 Año de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes pautas no corresponde al principio de Perceptibilidad de WCAG 2.0?";
 choices[64]= new Array();
 choices[64][0] = "Navegable";
 choices[64][1] = "Alternativas Textuales";
 choices[64][2] = "Adaptable";
 choices[64][3] = "Distinguible";
 answers[64] = choices[64][0];
 units[64] = "39";
 comments[64] = "Id Pregunta: 6421. ";


//  Id pregunta: 6433 Año de creación de pregunta: 2010-01-01
 questions[65]= "66)  Dada una empresa en la que se quiere almacenar informaci&oacute;n de sus empleados, departamentos y proyectos en los que colaboran sus empleados, las entidades que resultan son:";
 choices[65]= new Array();
 choices[65][0] = "empleados, departamentos y empresa";
 choices[65][1] = "empresa, proyectos, empleados y departamentos.";
 choices[65][2] = "empleados, proyectos y departamentos.";
 choices[65][3] = "empleados y departamentos.";
 answers[65] = choices[65][2];
 units[65] = "70";
 comments[65] = "Id Pregunta: 6433. ";


//  Id pregunta: 6444 Año de creación de pregunta: 2010-01-01
 questions[66]= "67)  ETSI NO publica:";
 choices[66]= new Array();
 choices[66][0] = "Normas europeas";
 choices[66][1] = "Normas espa&ntilde;olas";
 choices[66][2] = "Normas armonizadas";
 choices[66][3] = "Publica todas las anteriores";
 answers[66] = choices[66][1];
 units[66] = "42";
 comments[66] = "Id Pregunta: 6444. Similar a Castilla La Mancha 2009";


//  Id pregunta: 6462 Año de creación de pregunta: 2010-01-01
 questions[67]= "68)  Indique la actividad que NO forma parte del ciclo de vida del software";
 choices[67]= new Array();
 choices[67][0] = "El an&aacute;lisis del sistema de informaci&oacute;n";
 choices[67][1] = "La planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n";
 choices[67][2] = "El mantenimiento del sistema de informaci&oacute;n";
 choices[67][3] = "La gesti&oacute;n de riesgos";
 answers[67] = choices[67][1];
 units[67] = "76";
 comments[67] = "Id Pregunta: 6462. Castilla La Mancha 2009";


//  Id pregunta: 6477 Año de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Qu&eacute; componentes incluye la .net framework class library?";
 choices[68]= new Array();
 choices[68][0] = "Common language runtime (CLR) and the .NET framework class library";
 choices[68][1] = "ADO.NET, ASP.NET, Windows Forms, and Windows Presentation Foundation (WPF)";
 choices[68][2] = "ASP.NET applications, Web Forms and Web Services";
 choices[68][3] = "Windows Presentation Foundation (WPF), ASP.NET Portal, Windows Form Portal";
 answers[68] = choices[68][1];
 units[68] = "115";
 comments[68] = "Id Pregunta: 6477. Castilla La Mancha 2009";


//  Id pregunta: 6612 Año de creación de pregunta: 2010-01-01
 questions[69]= "70)  Para validar la consistencia en el an&aacute;lisis estructurado se utiliza:";
 choices[69]= new Array();
 choices[69][0] = "M&eacute;trica v3 ";
 choices[69][1] = "La t&eacute;cnica DFQM (Data Flow Quality Model)";
 choices[69][2] = "El balanceo entre los DFD's de niveles consecutivos";
 choices[69][3] = "El balanceo entre los DFD's de igual nivel";
 answers[69] = choices[69][2];
 units[69] = "81";
 comments[69] = "Id Pregunta: 6612. ";


//  Id pregunta: 6625 Año de creación de pregunta: 2010-01-01
 questions[70]= "71)  CMM en el campo de la ingenier&iacute;a y calidad del software son las siglas de:";
 choices[70]= new Array();
 choices[70][0] = "Capacity Maturity Model";
 choices[70][1] = "Capability Maturity Model";
 choices[70][2] = "Capacity Management Model";
 choices[70][3] = "Capability Management Model";
 answers[70] = choices[70][0];
 units[70] = "87";
 comments[70] = "Id Pregunta: 6625. ";


//  Id pregunta: 7317 Año de creación de pregunta: 2010-01-01
 questions[71]= "72)  Cu&aacute;l de los siguientes no forma parte del Framework o Marco de Trabajo .NET:";
 choices[71]= new Array();
 choices[71][0] = "MSIL";
 choices[71][1] = "JVM";
 choices[71][2] = "Biblioteca de Clases Base o BCL";
 choices[71][3] = "CLR (Common Language Runtime)";
 answers[71] = choices[71][1];
 units[71] = "59";
 comments[71] = "Id Pregunta: 7317. ";


//  Id pregunta: 8107 Año de creación de pregunta: 2010-01-01
 questions[72]= "73)   &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con M&Eacute;TRICA v.3 es FALSA?";
 choices[72]= new Array();
 choices[72][0] = " Cubre distintos tipos de desarrollo: &laquo;estructurado&raquo; y &laquo;orientado a objetos&raquo;.";
 choices[72][1] = " En su estructura se distinguen tres procesos principales.";
 choices[72][2] = " Se incluyen Interfaces para aspectos de gesti&oacute;n.";
 choices[72][3] = " El proceso de desarrollo de Sistemas de Informaci&oacute;n se divide en cuatro procesos: &laquo;an&aacute;lisis&raquo;, &laquo;dise&ntilde;o&raquo;, &laquo;construcci&oacute;n&raquo;, e &laquo;implantaci&oacute;n y aceptaci&oacute;n&raquo; del sistema.";
 answers[72] = choices[72][3];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 8107. Map 2008";


//  Id pregunta: 8191 Año de creación de pregunta: 2011-01-01
 questions[73]= "74)  Indique cu&aacute;l de los siguientes sistemas NO permite direccionar ficheros de un Terabyte:";
 choices[73]= new Array();
 choices[73][0] = "AdvFS";
 choices[73][1] = "MFS";
 choices[73][2] = "JFS2 ";
 choices[73][3] = "XFS";
 answers[73] = choices[73][1];
 units[73] = "48, 52";
 comments[73] = "Id Pregunta: 8191. Examen TIC A1 2010";


//  Id pregunta: 8409 Año de creación de pregunta: 2011-01-01
 questions[74]= "75)  Si en un sistema UNIX, se quiere que el archivo test.txt pueda ser le&iacute;do, modificado (escrito) y ejecutado por su propietario, le&iacute;do y ejecutado por los usuarios que pertenecen al mismo grupo que el propietario, y tan s&oacute;lo le&iacute;do por el resto, &iquest;qu&eacute; instrucci&oacute;n de las siguientes se debe ejecutar?";
 choices[74]= new Array();
 choices[74][0] = "chmod 652 test.txt ";
 choices[74][1] = "chmod 754 test.txt ";
 choices[74][2] = "chmod 654 test.txt ";
 choices[74][3] = "chmod 752 test.txt ";
 answers[74] = choices[74][1];
 units[74] = "53, 54";
 comments[74] = "Id Pregunta: 8409. Examen TIC A2 2010";


//  Id pregunta: 8477 Año de creación de pregunta: 2011-01-01
 questions[75]= "76)  Indique cu&aacute;l de los siguientes es un est&aacute;ndar WiMAX para servicios m&oacute;viles:";
 choices[75]= new Array();
 choices[75][0] = "IEEE 802.16-2004";
 choices[75][1] = "IEEE 802.16d";
 choices[75][2] = "IEEE 802.16e.";
 choices[75][3] = "Wimax no permite acceso a servicios m&oacute;viles.";
 answers[75] = choices[75][2];
 units[75] = "107";
 comments[75] = "Id Pregunta: 8477. Examen TIC A2 2010 interna";


//  Id pregunta: 8483 Año de creación de pregunta: 2011-01-01
 questions[76]= "77)  De las siguientes afirmaciones sobre el protocolo ICMP, &iquest;cu&aacute;l es cierta?";
 choices[76]= new Array();
 choices[76][0] = "Est&aacute; definido en las RFC 792 y 2463.";
 choices[76][1] = "Se considera un protocolo de nivel de transporte, al ir sobre datagramas IP.";
 choices[76][2] = "Permite conocer la direcci&oacute;n MAC asociada a una direcci&oacute;n IP.";
 choices[76][3] = "La cabecera tiene una longitud de 4 bytes en ICMPv4 y de 8 en ICMPv6.";
 answers[76] = choices[76][0];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8483. Examen TIC A2 2010 interna";


//  Id pregunta: 8646 Año de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Seg&uacute;n M&eacute;trica v3 cu&aacute;l de los siguientes participantes estar&iacute;a encuadrado dentro del perfil &quot;Consultor&quot;?";
 choices[77]= new Array();
 choices[77][0] = "T&eacute;cnico de sistemas.";
 choices[77][1] = "Grupo de Aseguramiento da la Calidad.";
 choices[77][2] = "Equipo de Arquitectura.";
 choices[77][3] = "Administrador de Bases de Datos.";
 answers[77] = choices[77][0];
 units[77] = "86";
 comments[77] = "Id Pregunta: 8646. Examen TIC A2 2010 interna";


//  Id pregunta: 8672 Año de creación de pregunta: 2011-01-01
 questions[78]= "79)  Indique cu&aacute;l de las siguientes no es una entidad definida dentro de IP m&oacute;vil:";
 choices[78]= new Array();
 choices[78][0] = "Nodo local (Home Nodo)";
 choices[78][1] = "Agente local (Home Agent)";
 choices[78][2] = "Direcci&oacute;n de auxilio (Care-of-Address)";
 choices[78][3] = "Nodo m&oacute;vil (Mobile Nodo)";
 answers[78] = choices[78][0];
 units[78] = "100,109";
 comments[78] = "Id Pregunta: 8672. Examen UPM A2 2011";


//  Id pregunta: 8735 Año de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes ep&iacute;grafes corresponde a una de las tres prioridades de la Comisi&oacute;n Europea a la hora de establecer la estrategia i2010?";
 choices[79]= new Array();
 choices[79][0] = "La consecuci&oacute;n de una sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n basada en la inclusi&oacute;n.";
 choices[79][1] = "La consecuci&oacute;n de un espacio mundial &uacute;nico de la informaci&oacute;n.";
 choices[79][2] = "El impulso de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n y tecnolog&iacute;a sanitarias.";
 choices[79][3] = "La consecuci&oacute;n de unos medios de comunicaci&oacute;n europeos a la vanguardia tecnol&oacute;gica";
 answers[79] = choices[79][0];
 units[79] = "30";
 comments[79] = "Id Pregunta: 8735. Examen TIC A2 2010 interna. M&aacute;s info: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 8882 Año de creación de pregunta: 2011-01-01
 questions[80]= "81)  La garant&iacute;a provisional";
 choices[80]= new Array();
 choices[80][0] = "Es potestativa para el &oacute;rgano de contrataci&oacute;n";
 choices[80][1] = "Con car&aacute;cter general se exige a los adjudicatarios de los contratos administrativos.";
 choices[80][2] = "El &oacute;rgano de contrataci&oacute;n podr&aacute; eximir al adjudicatario de la obligaci&oacute;n de constituir la garant&iacute;a&nbsp;provisional";
 choices[80][3] = "Su importe no podr&aacute; ser superior al 5% del presupuesto del contrato";
 answers[80] = choices[80][0];
 units[80] = "41";
 comments[80] = "Id Pregunta: 8882. ";


//  Id pregunta: 9010 Año de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;A qu&eacute; autoridad nacional de regulaci&oacute;n de las recogidas en la Ley 9/2014,  de 9 de mayo, General de Telecomunicaciones, puede reclamar un usuario final de servicios de comunicaciones en caso de disputa con su operador?";
 choices[81]= new Array();
 choices[81][0] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[81][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[81][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[81][3] = "El Ministerio de Econom&iacute;a";
 answers[81] = choices[81][1];
 units[81] = "110";
 comments[81] = "Id Pregunta: 9010. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9020 Año de creación de pregunta: 2011-01-01
 questions[82]= "83)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[82]= new Array();
 choices[82][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[82][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[82][2] = "Se produce en ambos tipos de fibra.";
 choices[82][3] = "No se produce en la fibra &oacute;ptica";
 answers[82] = choices[82][1];
 units[82] = "99";
 comments[82] = "Id Pregunta: 9020. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9027 Año de creación de pregunta: 2011-01-01
 questions[83]= "84)  Las centralitas MD-110 del servicio Ibercom que constituyen una RAI";
 choices[83]= new Array();
 choices[83][0] = "Se interconectan mediante una RPV (red privada virtual) establecida por el operador en sus centrales p&uacute;blicas.";
 choices[83][1] = "Necesariamente se conectan mediante un CF (centro frontal).";
 choices[83][2] = "Se interconectan entre si mediante un bus compartido.";
 choices[83][3] = "Ninguna de las anteriores";
 answers[83] = choices[83][1];
 units[83] = "103";
 comments[83] = "Id Pregunta: 9027. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9080 Año de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es el est&aacute;ndar PKCS que fue la base para el est&aacute;ndar S/MIME?";
 choices[84]= new Array();
 choices[84][0] = "PKCS#1";
 choices[84][1] = "PKCS#6";
 choices[84][2] = "PKCS#7";
 choices[84][3] = "PKCS#8";
 answers[84] = choices[84][3];
 units[84] = "111";
 comments[84] = "Id Pregunta: 9080. ";


//  Id pregunta: 9094 Año de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[85]= new Array();
 choices[85][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[85][1] = "Si, como obra literaria.";
 choices[85][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[85][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[85] = choices[85][3];
 units[85] = "36";
 comments[85] = "Id Pregunta: 9094. ";


//  Id pregunta: 9122 Año de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Qu&eacute; se necesita para funcionar en un sistema grid?";
 choices[86]= new Array();
 choices[86][0] = "Al menos un ordenador que act&uacute;e como un servidor y que gestione el funcionamiento de los otros sistemas implicados";
 choices[86][1] = "Un mainframe";
 choices[86][2] = "Al menos un sistema Microsoft";
 choices[86][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[86] = choices[86][0];
 units[86] = "45";
 comments[86] = "Id Pregunta: 9122. ";


//  Id pregunta: 9221 Año de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[87]= new Array();
 choices[87][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[87][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric.";
 choices[87][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[87][3] = "Todas son correctas.";
 answers[87] = choices[87][3];
 units[87] = "48";
 comments[87] = "Id Pregunta: 9221. ";


//  Id pregunta: 9361 Año de creación de pregunta: 2013-01-01
 questions[88]= "89)  De entre los diferentes tipos de CSMA (Carrier Sense Multiple Access), se puede afirmar:";
 choices[88]= new Array();
 choices[88][0] = "En CSMA 1-persistente, si el medio est&aacute; libre, el emisor transmite, si no, espera un tiempo aleatorio.";
 choices[88][1] = "En CSMA p-Persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre.";
 choices[88][2] = "En CSMA no-persistente, si el emisor tiene el canal libre, transmite con probabilidad &quot;p&quot; y si detecta que existe alguien transmitiendo, espera un tiempo aleatorio con probabilidad &quot;q=(1-p)&quot;";
 choices[88][3] = "En CSMA 1-persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre ";
 answers[88] = choices[88][3];
 units[88] = "101";
 comments[88] = "Id Pregunta: 9361. pag. 7 ASTIC 2011";


//  Id pregunta: 9395 Año de creación de pregunta: 2013-01-01
 questions[89]= "90)  Se&ntilde;ale la incorrecta en relaci&oacute;n con HSDPA";
 choices[89]= new Array();
 choices[89][0] = "Utiliza la t&eacute;cnica de HARQ (Hybrid Automatica Repeat Request)";
 choices[89][1] = "Hace uso de una modulaci&oacute;n adaptativa, que cambia seg&uacute;n las condiciones del canal.";
 choices[89][2] = "Existen diferentes versiones de HSDPA que proporcionan diferentes velocidades.";
 choices[89][3] = "Mediante Fast-Packet Scheduling, se asignan espacios de tiempo fijos, por prioridades, haciendo que los usuarios se turnen para que tengan un ancho de banda tambi&eacute;n fijo para la descarga de datos.";
 answers[89] = choices[89][3];
 units[89] = "108";
 comments[89] = "Id Pregunta: 9395. ";


//  Id pregunta: 9508 Año de creación de pregunta: 2013-01-01
 questions[90]= "91)  &iquest;En qu&eacute; versi&oacute;n se produjo el cambio de nomenclatura de la plataforma Java, pas&aacute;ndose a denominar Java Platform cuando anteriormente se le denominaba Java 2?";
 choices[90]= new Array();
 choices[90][0] = "Entre la versi&oacute;n 1.1 y 1.2";
 choices[90][1] = "Entre la versi&oacute;n 1.3 y 1.4";
 choices[90][2] = "Entre la versi&oacute;n 1.4 y 5.0";
 choices[90][3] = "La plataforma Java nunca se denomin&oacute; Java 2";
 answers[90] = choices[90][2];
 units[90] = "116";
 comments[90] = "Id Pregunta: 9508. ";


//  Id pregunta: 9608 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[91]= new Array();
 choices[91][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[91][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[91][2] = "Utilizan estructuras flexibles";
 choices[91][3] = "Todas las anteriores lo son";
 answers[91] = choices[91][3];
 units[91] = "58";
 comments[91] = "Id Pregunta: 9608. ";


//  Id pregunta: 9901 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  En relaci&oacute;n a los participantes de la metodolog&iacute;a M&eacute;trica v3, aquellos cuya funci&oacute;n es asesorar en las cuestiones en las que tienen un conocimiento especializado se denominan";
 choices[92]= new Array();
 choices[92][0] = "Consultores.";
 choices[92][1] = "Expertos.";
 choices[92][2] = "Analistas.";
 choices[92][3] = "Jefes de Proyecto.";
 answers[92] = choices[92][0];
 units[92] = "86";
 comments[92] = "Id Pregunta: 9901. TIC A2, Examen 2013";


//  Id pregunta: 10034 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  El puerto 69 es utilizado por:";
 choices[93]= new Array();
 choices[93][0] = "TFTP (Trivial File Transfer Protocol).";
 choices[93][1] = "Finger.";
 choices[93][2] = "IMAP (Internet Message Access Protocol).";
 choices[93][3] = "SFTP (Secure File Transfer Protocol).";
 answers[93] = choices[93][0];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10034. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10185 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  El n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de un tipo de entidad que pueden estar relacionadas con una ocurrencia del otro u otros tipos de entidad participantes en la relaci&oacute;n se denomina:";
 choices[94]= new Array();
 choices[94][0] = "Tipo de correspondencia";
 choices[94][1] = "Cardinalidad de la entidad";
 choices[94][2] = "Grado";
 choices[94][3] = "No es de inter&eacute;s en el modelo E-R y por tanto no tiene una denominaci&oacute;n espec&iacute;fica";
 answers[94] = choices[94][1];
 units[94] = "80";
 comments[94] = "Id Pregunta: 10185. ";


//  Id pregunta: 10271 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[95]= new Array();
 choices[95][0] = "Est&aacute; sometida a control por parte de la IGAE del Tribunal de Cuentas";
 choices[95][1] = "Est&aacute; sujeta a la LOFAGE";
 choices[95][2] = "Frente a sus resoluciones puede presentarse recurso de alzada";
 choices[95][3] = "Sus competencias son exclusivas, no pudiendo crearse &oacute;rganos similares en las Comunidades Aut&oacute;nomas";
 answers[95] = choices[95][0];
 units[95] = "29";
 comments[95] = "Id Pregunta: 10271. Art&iacute;culos 2 y 33 del RD 428/1993";


//  Id pregunta: 10290 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  Indique cu&aacute;l de los siguientes NO es un mecanismo en la gesti&oacute;n de una SAN para incrementar la seguridad:";
 choices[96]= new Array();
 choices[96][0] = "Masking";
 choices[96][1] = "Cluning";
 choices[96][2] = "Zoning";
 choices[96][3] = "Port Binding";
 answers[96] = choices[96][1];
 units[96] = "48";
 comments[96] = "Id Pregunta: 10290. TIC A2, libre, examen 2013";


//  Id pregunta: 10439 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Respecto al conjunto de normas H.323 de la UIT,";
 choices[97]= new Array();
 choices[97][0] = "se le puede a&ntilde;adir seguridad extremo a extremo con la recomendaci&oacute;n de la UIT H.235. ";
 choices[97][1] = "fue definida para redes de conmutaci&oacute;n de circuitos.";
 choices[97][2] = "permite audioconferencia pero no videoconferencia.";
 choices[97][3] = "se utiliza &uacute;nicamente con redes RDSI.";
 answers[97] = choices[97][0];
 units[97] = "117";
 comments[97] = "Id Pregunta: 10439. Examen TIC A1 2013";


//  Id pregunta: 10482 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  El m&eacute;todo SLIM de estimaci&oacute;n de esfuerzo, usa la curva de:";
 choices[98]= new Array();
 choices[98][0] = "F de Snedecor";
 choices[98][1] = "Parkingson";
 choices[98][2] = "Norden-Rayleigh";
 choices[98][3] = "Pareto";
 answers[98] = choices[98][2];
 units[98] = "89";
 comments[98] = "Id Pregunta: 10482. ";


//  Id pregunta: 10546 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[99]= new Array();
 choices[99][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[99][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[99][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[99][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[99] = choices[99][2];
 units[99] = "30";
 comments[99] = "Id Pregunta: 10546. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";


