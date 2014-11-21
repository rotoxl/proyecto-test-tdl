/*
Copyright © Preparatic. Todos los derechos reservados.
*/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 201 Año de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes estandares de directorios guarda relaci&oacute;n con la descripci&oacute;n de servicios de usuario?";
 choices[0]= new Array();
 choices[0][0] = "x.500";
 choices[0][1] = "x.501";
 choices[0][2] = "x.509";
 choices[0][3] = "x.511";
 answers[0] = choices[0][3];
 units[0] = "42";
 comments[0] = "Id Pregunta: 201. Examen Julio 2003";


//  Id pregunta: 263 Año de creación de pregunta: 2009-01-01
 questions[1]= "2)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en el &aacute;mbito de la LOPD:";
 choices[1]= new Array();
 choices[1][0] = "La normativa de protecci&oacute;n de datos es aplicable s&oacute;lo a ficheros automatizados que contengan datos personales de personas f&iacute;sicas";
 choices[1][1] = "La normativa de protecci&oacute;n de datos es aplicable tanto a ficheros automatizados como no automatizados que contengan datos de car&aacute;cter personal";
 choices[1][2] = "La normativa de protecci&oacute;n de datos no es aplicable a personas f&iacute;sicas ni jur&iacute;dicas";
 choices[1][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[1] = choices[1][1];
 units[1] = "29";
 comments[1] = "Id Pregunta: 263. ";


//  Id pregunta: 630 Año de creación de pregunta: 2006-01-01
 questions[2]= "3)  Cu&aacute;l de los siguientes derechos de explotaci&oacute;n no precisan la realizaci&oacute;n o autorizaci&oacute;n por parte del titular de un programa de ordenador, seg&uacute;n la ley espa&ntilde;ola de propiedad intelectual:";
 choices[2]= new Array();
 choices[2][0] = "Reproducci&oacute;n total o parcial.";
 choices[2][1] = "La realizaci&oacute;n de una copia de seguridad.";
 choices[2][2] = "Traducci&oacute;n, adaptaci&oacute;n o arreglo.";
 choices[2][3] = "Cualquier forma de distribuci&oacute;n p&uacute;blica.";
 answers[2] = choices[2][1];
 units[2] = "36";
 comments[2] = "Id Pregunta: 630. ";


//  Id pregunta: 700 Año de creación de pregunta: 2009-01-01
 questions[3]= "4)  Respecto a la LSSI puede decirse que:";
 choices[3]= new Array();
 choices[3][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[3][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente";
 choices[3][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma";
 choices[3][3] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma";
 answers[3] = choices[3][3];
 units[3] = "30";
 comments[3] = "Id Pregunta: 700. art&iacute;culo 21";


//  Id pregunta: 1532 Año de creación de pregunta: 2003-01-01
 questions[4]= "5)  &iquest; Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux ?";
 choices[4]= new Array();
 choices[4][0] = "Debian";
 choices[4][1] = "Gentoo";
 choices[4][2] = "Max";
 choices[4][3] = "FreeBSD";
 answers[4] = choices[4][3];
 units[4] = "61,62";
 comments[4] = "Id Pregunta: 1532. ";


//  Id pregunta: 1913 Año de creación de pregunta: 2006-01-01
 questions[5]= "6)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Reusabilidad";
 choices[5][1] = "Encapsulaci&oacute;n";
 choices[5][2] = "Abstracci&oacute;n";
 choices[5][3] = "Persistencia";
 answers[5] = choices[5][3];
 units[5] = "82";
 comments[5] = "Id Pregunta: 1913. ";


//  Id pregunta: 1925 Año de creación de pregunta: 2006-01-01
 questions[6]= "7)  Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n &iquest;Qu&eacute; se entiende como grado de una tabla?";
 choices[6]= new Array();
 choices[6][0] = "El n&uacute;mero de filas de la tabla";
 choices[6][1] = "El n&uacute;mero de columnas de la tabla";
 choices[6][2] = "El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n";
 choices[6][3] = "El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas";
 answers[6] = choices[6][1];
 units[6] = "58";
 comments[6] = "Id Pregunta: 1925. ";


//  Id pregunta: 1932 Año de creación de pregunta: 2006-01-01
 questions[7]= "8)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos";
 choices[7]= new Array();
 choices[7][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo";
 choices[7][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[7][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante";
 choices[7][3] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita";
 answers[7] = choices[7][1];
 units[7] = "30";
 comments[7] = "Id Pregunta: 1932. ";


//  Id pregunta: 2121 Año de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Dise&ntilde;o del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[8]= new Array();
 choices[8][0] = "Verificaci&oacute;n y aceptaci&oacute;n de la arquitectura del sistema";
 choices[8][1] = "Especificaci&oacute;n t&eacute;cnica del plan de pruebas";
 choices[8][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[8][3] = "Todas son falsas";
 answers[8] = choices[8][2];
 units[8] = "86";
 comments[8] = "Id Pregunta: 2121. ";


//  Id pregunta: 2177 Año de creación de pregunta: 2002-01-01
 questions[9]= "10)  La diferencia entre el an&aacute;lisis y el dise&ntilde;o en la orientaci&oacute;n a objetos es:";
 choices[9]= new Array();
 choices[9][0] = "La transici&oacute;n es tan natural que realmente no hay transici&oacute;n.";
 choices[9][1] = "La transici&oacute;n la marca el momento en que se empiezan a construir objetos.";
 choices[9][2] = "El dise&ntilde;o empieza cuando comienzan a conectarse las clases.";
 choices[9][3] = "El an&aacute;lisis debe definir los objetos en el dominio del problema y el dise&ntilde;o define los objetos en el dominio de la soluci&oacute;n.";
 answers[9] = choices[9][3];
 units[9] = "82,84";
 comments[9] = "Id Pregunta: 2177. ";


//  Id pregunta: 2563 Año de creación de pregunta: 2004-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es el Modelo CMM (Modelo de madurez de la capacidad de proceso de software)?";
 choices[10]= new Array();
 choices[10][0] = "Metodolog&iacute;a de dise&ntilde;o de omponentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[10][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[10][2] = "Modelo organizativo para el dise&ntilde;o software de macroensamblares cruzados";
 choices[10][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[10] = choices[10][3];
 units[10] = "87,88,92";
 comments[10] = "Id Pregunta: 2563. Pregunta Junta Andalucia - A";


//  Id pregunta: 2824 Año de creación de pregunta: 2006-01-01
 questions[11]= "12)  Se&ntilde;ale el critero falso en la migraci&oacute;n de aplicaciones en el marco de un ajuste dimensional.";
 choices[11]= new Array();
 choices[11][0] = "Interconectividad: las aplicaciones que requieren un alto grado de conectividad entre los usuarios son las que mejor se adaptan a ser implementadas en un entorno descentralizado sobre una red de &aacute;rea local.";
 choices[11][1] = "Requisitos de tiempo de respuesta: a veces conviene descentralizar la informaci&oacute;n para asegurar un tiempo de respuesta r&aacute;pido, evitando esperas en el acceso a las bases de datos residentes en el mainframe.";
 choices[11][2] = "Seguridad: las aplicaciones con unos requisitos estrictos de seguridad tanto en lo referente a la protecci&oacute;n de informaci&oacute;n sensible, como en lo que respecta a los da&ntilde;os accidentales son candidatas ideales para el ajuste dimensional.";
 choices[11][3] = "Control: al migrar aplicaciones desde un entorno centralizado a uno distribuido se pierde control sobre las mismas. No obstante, est&aacute;n surgiendo herramientas que permiten controlar eficaz y centralizadamente la distribuci&oacute;n e instalaci&oacute;n.";
 answers[11] = choices[11][2];
 units[11] = "90";
 comments[11] = "Id Pregunta: 2824. ";


//  Id pregunta: 3162 Año de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes asociaciaciones protocolos OSI-protocolos TCP/IP no es correcta?:";
 choices[12]= new Array();
 choices[12][0] = "SMTP-X.400";
 choices[12][1] = "TELNET-VT";
 choices[12][2] = "FTAM-FTP";
 choices[12][3] = "X.500-SNMP";
 answers[12] = choices[12][3];
 units[12] = "100, 104, 106";
 comments[12] = "Id Pregunta: 3162. ";


//  Id pregunta: 3637 Año de creación de pregunta: 2002-01-01
 questions[13]= "14)  La red digital de servicios integrados (RDSI):";
 choices[13]= new Array();
 choices[13][0] = "Procede de la evoluci&oacute;n de la red telef&oacute;nica conmutada";
 choices[13][1] = "El acceso b&aacute;sico disponen de dos canales B (64 Kbit/s) que emplean conmutaci&oacute;n de paquetes";
 choices[13][2] = "El acceso desde el terminal de abonado se realiza mediante fibra &oacute;ptica";
 choices[13][3] = "El acceso b&aacute;sico no se puede utilizar para conexi&oacute;n de centralitas digitales PABX's";
 answers[13] = choices[13][0];
 units[13] = "103";
 comments[13] = "Id Pregunta: 3637. ";


//  Id pregunta: 3970 Año de creación de pregunta: 2003-01-01
 questions[14]= "15)  Un registro MX en un servidor DNS, &iquest; a qu&eacute; hace referencia?";
 choices[14]= new Array();
 choices[14][0] = "al servidor DNS principal";
 choices[14][1] = "al servidor web asociado al dominio";
 choices[14][2] = "al servidor de correo asociado al dominio";
 choices[14][3] = "al servidor seguro asociado al dominio";
 answers[14] = choices[14][2];
 units[14] = "106";
 comments[14] = "Id Pregunta: 3970. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 3987 Año de creación de pregunta: 2006-01-01
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n verdadera acerca de la Multiplexaci&oacute;n CWDM:";
 choices[15]= new Array();
 choices[15][0] = "El plan de longitudes de onda define 18, pero s&oacute;lo son &uacute;tiles 16.";
 choices[15][1] = "La separaci&oacute;n entre longitudes de onda es de 50 nm y la m&aacute;xima distancia alcanza los 100 km si se emplean todos los canales.";
 choices[15][2] = "Las conexiones simult&aacute;neas que pueden transmitirse en una fibra &oacute;ptica tienen que cumplir el mismo protocolo a fin de impedir la interferencia entre canales.";
 choices[15][3] = "Puede transportar ATM, pero es incompatible con Gigabit Ethernet";
 answers[15] = choices[15][0];
 units[15] = "101";
 comments[15] = "Id Pregunta: 3987. ";


//  Id pregunta: 4211 Año de creación de pregunta: 2006-01-01
 questions[16]= "17)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo  .NET";
 choices[16]= new Array();
 choices[16][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[16][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[16][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[16][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[16] = choices[16][1];
 units[16] = "59,115";
 comments[16] = "Id Pregunta: 4211. ";


//  Id pregunta: 4242 Año de creación de pregunta: 2007-01-01
 questions[17]= "18)  Indique que significan las siglas POJO";
 choices[17]= new Array();
 choices[17][0] = "Plain Over Java Objects";
 choices[17][1] = "Plain Old JavaBean Objects";
 choices[17][2] = "Plain Old Java Objects";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][2];
 units[17] = "60,116";
 comments[17] = "Id Pregunta: 4242. ";


//  Id pregunta: 4557 Año de creación de pregunta: 2007-01-01
 questions[18]= "19)  Seg&uacute;n Magerit, el conjunto de programas de seguridad que permite materializar las decisiones de gesti&oacute;n de riesgos es el";
 choices[18]= new Array();
 choices[18][0] = "mapa de riesgos";
 choices[18][1] = "informe de insuficiencias";
 choices[18][2] = "cuadro de mando";
 choices[18][3] = "plan de seguridad";
 answers[18] = choices[18][3];
 units[18] = "33";
 comments[18] = "Id Pregunta: 4557. ";


//  Id pregunta: 4820 Año de creación de pregunta: 2007-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language ) NO escierta?";
 choices[19]= new Array();
 choices[19][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas";
 choices[19][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML";
 choices[19][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, encuyo caso pueden omitirse";
 choices[19][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM(Document Object Model) o en XML-DOM";
 answers[19] = choices[19][2];
 units[19] = "69";
 comments[19] = "Id Pregunta: 4820. ";


//  Id pregunta: 4840 Año de creación de pregunta: 2007-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[20]= new Array();
 choices[20][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[20][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[20][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International StandardsOrganization / International Electrotechnical Commission)";
 choices[20][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez delresumen de &eacute;ste";
 answers[20] = choices[20][1];
 units[20] = "74";
 comments[20] = "Id Pregunta: 4840. ";


//  Id pregunta: 4954 Año de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Qu&eacute; t&eacute;cnica no es aplicable para dise&ntilde;ar un producto web usable y centrado en el usuario?:";
 choices[21]= new Array();
 choices[21][0] = "Card Sorting.";
 choices[21][1] = "L&oacute;gica Fuzzy.";
 choices[21][2] = "Eye Tracking.";
 choices[21][3] = "An&aacute;lisis de Secuencia.";
 answers[21] = choices[21][1];
 units[21] = "39";
 comments[21] = "Id Pregunta: 4954. Examen TIC B 2007";


//  Id pregunta: 5027 Año de creación de pregunta: 2003-01-01
 questions[22]= "23)  ITIL (Information Technology Infrastructure Library) es un marco de trabajo que reune mejores pr&aacute;cticas destinadasa facilitar la entrega de servicios de tecnolog&iacute;as de informaci&oacute;n. Se apoya en una biblioteca de infraestructurabasadas en un conjunto de libros que cubren una serie de temas. &iquest;Cu&aacute;l de los siguientes apartados no forma partede los ocho libros?:";
 choices[22]= new Array();
 choices[22][0] = "An&aacute;lisis de mercado";
 choices[22][1] = "Perspectiva de negocio";
 choices[22][2] = "Gesti&oacute;n de la Seguridad";
 choices[22][3] = "Soporte al Servicio";
 answers[22] = choices[22][0];
 units[22] = "98";
 comments[22] = "Id Pregunta: 5027. Examen TIC A 2007";


//  Id pregunta: 5038 Año de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes alternativas NO se corresponde con el dise&ntilde;o b&aacute;sico de la arquitectura de un conmutadormultinivel Gigabit Ethernet?:";
 choices[23]= new Array();
 choices[23][0] = "Bus compartido.";
 choices[23][1] = "Memoria compartida.";
 choices[23][2] = "I/O compartida.";
 choices[23][3] = "Crossbar";
 answers[23] = choices[23][0];
 units[23] = "102";
 comments[23] = "Id Pregunta: 5038. Examen TIC A 2007";


//  Id pregunta: 5283 Año de creación de pregunta: 2003-01-01
 questions[24]= "25)  En Java la herencia es un mecanismo por el que se pueden crear nuevos objetos definidos en t&eacute;rminos de objetos ya existentes. &iquest;Esta permitida la herencia multiple?";
 choices[24]= new Array();
 choices[24][0] = "Si.";
 choices[24][1] = "No.";
 choices[24][2] = "Si con ciertas restricciones.";
 choices[24][3] = "No con ciertas restricciones.";
 answers[24] = choices[24][1];
 units[24] = "60";
 comments[24] = "Id Pregunta: 5283. ";


//  Id pregunta: 5693 Año de creación de pregunta: 2003-01-01
 questions[25]= "26)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Se&ntilde;ale cu&aacute;l de las siguientes no es una de ellas:";
 choices[25]= new Array();
 choices[25][0] = "Zona p&uacute;blica";
 choices[25][1] = " Zona de seguridad";
 choices[25][2] = "Zona privada";
 choices[25][3] = "Zona confidencial";
 answers[25] = choices[25][3];
 units[25] = "74";
 comments[25] = "Id Pregunta: 5693. ";


//  Id pregunta: 6066 Año de creación de pregunta: 2010-01-01
 questions[26]= "27)  Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[26]= new Array();
 choices[26][0] = "La direcci&oacute;n MAC del sistema final destino.";
 choices[26][1] = "La direcci&oacute;n IP del sistema final destino.";
 choices[26][2] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destino.";
 choices[26][3] = "La direcci&oacute;n MAC del router.";
 answers[26] = choices[26][3];
 units[26] = "100";
 comments[26] = "Id Pregunta: 6066. TIC A 2009";


//  Id pregunta: 6099 Año de creación de pregunta: 2010-01-01
 questions[27]= "28)  El teorema de Nyquist establece que el n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal:";
 choices[27]= new Array();
 choices[27][0] = "Puede ser superior al doble de su ancho de banda.";
 choices[27][1] = "No puede ser superior al doble de su ancho de banda.";
 choices[27][2] = "No tiene l&iacute;mite alguno.";
 choices[27][3] = "No puede ser superior al ancho de banda.";
 answers[27] = choices[27][1];
 units[27] = "99";
 comments[27] = "Id Pregunta: 6099. TIC A 2009";


//  Id pregunta: 6165 Año de creación de pregunta: 2010-01-01
 questions[28]= "29)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[28]= new Array();
 choices[28][0] = "Los datos analizados y procesados se convierten en informaci&oacute;n, a la cual si le aporta la experiencia se obtiene el conocimiento.";
 choices[28][1] = "La informaci&oacute;n analizada y procesada se convierte en datos, a los cuales si le aporta la experiencia se obtiene el conocimiento.";
 choices[28][2] = "El conocimiento analizado y procesado se convierte en informaci&oacute;n, a la cual si se le aporta la experiencia se obtienen los datos.";
 choices[28][3] = "Todas las anteriores son correctas.";
 answers[28] = choices[28][0];
 units[28] = "21";
 comments[28] = "Id Pregunta: 6165. ";


//  Id pregunta: 6169 Año de creación de pregunta: 2010-01-01
 questions[29]= "30)  En el proceso de comunicaci&oacute;n no interviene/n:";
 choices[29]= new Array();
 choices[29][0] = "El emisor, el mensaje, el canal y el receptor.";
 choices[29][1] = "El lenguaje.";
 choices[29][2] = "La codificaci&oacute;n.";
 choices[29][3] = "La retroalimentaci&oacute;n.";
 answers[29] = choices[29][1];
 units[29] = "23";
 comments[29] = "Id Pregunta: 6169. ";


//  Id pregunta: 6465 Año de creación de pregunta: 2010-01-01
 questions[30]= "31)  Seg&uacute;n el interfaz de Aseguramiento de la Calidad de M&eacute;trica v3, el establecimiento del Plan de Aseguramiento de la Calidad debe comenzar en el proceso:";
 choices[30]= new Array();
 choices[30][0] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[30][1] = "Estudio de Viabilidad del Sistema";
 choices[30][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[30][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[30] = choices[30][1];
 units[30] = "86";
 comments[30] = "Id Pregunta: 6465. Castilla La Mancha 2009";


//  Id pregunta: 6560 Año de creación de pregunta: 2010-01-01
 questions[31]= "32)  Qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 3.5G?";
 choices[31]= new Array();
 choices[31][0] = "Tecnolog&iacute;a HSDPA";
 choices[31][1] = "Capacidad enlace descendente: hasta 14.4 Mbps";
 choices[31][2] = "El uso del canal descendente puede ser compartido por varios usuarios";
 choices[31][3] = "Todas las respuestas anteriores son correctas";
 answers[31] = choices[31][3];
 units[31] = "108";
 comments[31] = "Id Pregunta: 6560. ";


//  Id pregunta: 7952 Año de creación de pregunta: 2010-01-01
 questions[32]= "33)   La metodolog&iacute;a MAGERIT versi&oacute;n 2 estructura el conjunto de activos en capas. &iquest;En cu&aacute;l de las siguientes se situar&iacute;an los &laquo;bienes y servicios producidos&raquo;?";
 choices[32]= new Array();
 choices[32][0] = " En el entorno.";
 choices[32][1] = " En el sistema de informaci&oacute;n.";
 choices[32][2] = " En la informaci&oacute;n.";
 choices[32][3] = " En las funciones de la organizaci&oacute;n.";
 answers[32] = choices[32][3];
 units[32] = "NULL";
 comments[32] = "Id Pregunta: 7952. Map 2006";


//  Id pregunta: 8168 Año de creación de pregunta: 2010-01-01
 questions[33]= "34)  Referente a la Recomendaci&oacute;n del W3C &quot;XML Signature Syntax and Processing&quot;, &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[33]= new Array();
 choices[33][0] = "S&oacute;lo es posible indicar el uso del algoritmo C14N en el elemento ds:SignedInfo.";
 choices[33][1] = "Explica tres posibles formas de aplicaci&oacute;n de la firma: detached, enveloping y enveloped.";
 choices[33][2] = "Permite firmar documentos en cualquier formato, no s&oacute;lo en formato XML.";
 choices[33][3] = "Es la base para la definici&oacute;n de XAdES.";
 answers[33] = choices[33][0];
 units[33] = "111";
 comments[33] = "Id Pregunta: 8168. Examen TIC A1 2010";


//  Id pregunta: 8215 Año de creación de pregunta: 2011-01-01
 questions[34]= "35)  En el r&eacute;gimen de responsabilidad de la protecci&oacute;n de datos de car&aacute;cter personal, la legislaci&oacute;n espa&ntilde;ola tipifica como infracci&oacute;n grave:";
 choices[34]= new Array();
 choices[34][0] = "No proporcionar la informaci&oacute;n que solicite la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos en el ejercicio de las competencias que tiene legalmente atribuidas, en relaci&oacute;n con aspectos no sustantivos de la protecci&oacute;n de datos.";
 choices[34][1] = "La comunicaci&oacute;n o cesi&oacute;n de los datos de car&aacute;cter personal, fuera de los casos en que est&eacute;n permitidas.";
 choices[34][2] = "La recogida de datos en forma enga&ntilde;osa y fraudulenta.";
 choices[34][3] = "El impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso y oposici&oacute;n y la negativa a facilitar la informaci&oacute;n que sea solicitada.";
 answers[34] = choices[34][3];
 units[34] = "29";
 comments[34] = "Id Pregunta: 8215. Examen TIC A1 2010";


//  Id pregunta: 8372 Año de creación de pregunta: 2011-01-01
 questions[35]= "36)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo se denomina:";
 choices[35]= new Array();
 choices[35][0] = "Mantenimiento adaptativo.";
 choices[35][1] = "Mantenimiento preventivo.";
 choices[35][2] = "Mantenimiento correctivo.";
 choices[35][3] = "Mantenimiento evolutivo.";
 answers[35] = choices[35][1];
 units[35] = "86";
 comments[35] = "Id Pregunta: 8372. Examen TIC A2 2010";


//  Id pregunta: 8482 Año de creación de pregunta: 2011-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta, considerando diferencias entre IPv4 e IPv6?";
 choices[36]= new Array();
 choices[36][0] = "Ipv6 duplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 64 bits.";
 choices[36][1] = "Algunos campos de la cabecera de Ipv4 han sido eliminados o convertidos en opcionales para reducir el coste de proceso normal de los paquetes y limitar el coste en ancho de banda de la cabecera Ipv6.";
 choices[36][2] = "IPV6 complica la cabecera, al a&ntilde;adir campos a los que ya tenia la cabecea Ipv4, para permitir mayor capacidad de configuraci&oacute;n, lo que supone, por contra, un mayor coste de proceso, que se compensar&aacute; por la mayor potencia del hardware.";
 choices[36][3] = "IPv6 triplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 96 bits.";
 answers[36] = choices[36][1];
 units[36] = "100";
 comments[36] = "Id Pregunta: 8482. Examen TIC A2 2010 interna";


//  Id pregunta: 8637 Año de creación de pregunta: 2011-01-01
 questions[37]= "38)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[37]= new Array();
 choices[37][0] = "No tiene claves.";
 choices[37][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[37][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[37][3] = "Conserva la clave de la entidad fuerte.";
 answers[37] = choices[37][1];
 units[37] = "57, 58";
 comments[37] = "Id Pregunta: 8637. Examen TIC A2 2010 interna";


//  Id pregunta: 9052 Año de creación de pregunta: 2015-01-01
 questions[38]= "39)  LA administraci&oacute;n ha licitado un contrato de servicios, cuyo valor de adjudicaci&oacute;n es de 300.000 euros. &iquest;D&oacute;nde hay que publicar el acuerdo?";
 choices[38]= new Array();
 choices[38][0] = "En el perfil del contratante y en el BOE.";
 choices[38][1] = "En el perfil del contratante en el BOE y en el DOUE";
 choices[38][2] = "En el BOE y en el DOUE";
 choices[38][3] = "En el perfil del contratante &uacute;nicamente.";
 answers[38] = choices[38][1];
 units[38] = "41";
 comments[38] = "Id Pregunta: 9052. ";


//  Id pregunta: 9057 Año de creación de pregunta: 2020-01-01
 questions[39]= "40)  &iquest;Cual de las siguientes NO es una herramienta de revisi&oacute;n de la usabilidad ?";
 choices[39]= new Array();
 choices[39][0] = "ACCWarning";
 choices[39][1] = "A-PRompt";
 choices[39][2] = "HiCaption";
 choices[39][3] = "MAGPie";
 answers[39] = choices[39][0];
 units[39] = "39";
 comments[39] = "Id Pregunta: 9057. ";


//  Id pregunta: 9060 Año de creación de pregunta: 2023-01-01
 questions[40]= "41)  Respecto a LMDS:";
 choices[40]= new Array();
 choices[40][0] = "Al ser de frecuencias bajas, no tiene problemas con las zonas de sombra.";
 choices[40][1] = "Son redes de lento despliegue";
 choices[40][2] = "Funciona en la banda de los 28 a 31 Ghz y una difusi&oacute;n m&aacute;xima de 7 km";
 choices[40][3] = "Se la conoce como proveedor de servicios sin cable";
 answers[40] = choices[40][2];
 units[40] = "108";
 comments[40] = "Id Pregunta: 9060. ";


//  Id pregunta: 9065 Año de creación de pregunta: 2028-01-01
 questions[41]= "42)  De acuerdo a la normativa de protecci&oacute;n de datos de car&aacute;cter personal, la potestad del &oacute;rgano sancionador de inmovilizaci&oacute;n de ficheros  ";
 choices[41]= new Array();
 choices[41][0] = "Se podr&aacute; ejercer s&oacute;lo en supuestos constitutivos de infracci&oacute;n muy grave";
 choices[41][1] = "Se podr&aacute; ejercer en ciertos supuestos constitutivos de infracci&oacute;n grave o muy grave";
 choices[41][2] = "Siempre la puede ejercer el &oacute;rgano sancionador, mediante resoluci&oacute;n motivada";
 choices[41][3] = "La ley 2/2011 de Econom&iacute;a Sostenible elimina la potestad inmovilizadora";
 answers[41] = choices[41][1];
 units[41] = "29";
 comments[41] = "Id Pregunta: 9065. ";


//  Id pregunta: 9083 Año de creación de pregunta: 2013-01-01
 questions[42]= "43)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale la afirmaci&oacute;n FALSA en relaci&oacute;n a la Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[42]= new Array();
 choices[42][0] = "Es fundamental que la alta direcci&oacute;n tome parte activa en la decisi&oacute;n del PSI para garantizar su &eacute;xito";
 choices[42][1] = "En cualquier caso, como paso previo para detectar aspectos importantes que puedan afectar a la organizaci&oacute;n, es necesario investigar sus puntos fuertes, &aacute;reas de mejora, riesgos y amenazas posibles y hacer un diagn&oacute;stico de los mismos.";
 choices[42][2] = "Dentro del Plan de Acci&oacute;n se incluye un calendario de proyectos, con posibles alternativas, y una estimaci&oacute;n de recursos, cuyo detalle ser&aacute; mayor para los m&aacute;s inmediatos.";
 choices[42][3] = "La elaboraci&oacute;n de un nuevo Plan de Sistemas de Informaci&oacute;n debe partir de cero, y no tener en cuenta las planificaciones estrat&eacute;gicas realizadas en periodos anteriores";
 answers[42] = choices[42][3];
 units[42] = "77";
 comments[42] = "Id Pregunta: 9083. ";


//  Id pregunta: 9600 Año de creación de pregunta: 2014-01-01
 questions[43]= "44)  Marcar la respuesta correcta:";
 choices[43]= new Array();
 choices[43][0] = "UNIX se desarroll&oacute; a partir del sistema MINIX.";
 choices[43][1] = "El lenguaje original de desarrollo de UNIX era el B, posteriormente se desarroll&oacute; en C";
 choices[43][2] = " El n&uacute;cleo original del sistema operativo UNIX fue dise&ntilde;ado por A. Tanenbaum.";
 choices[43][3] = "Todas las anteriores son incorrectas";
 answers[43] = choices[43][1];
 units[43] = "53";
 comments[43] = "Id Pregunta: 9600. ";


//  Id pregunta: 9652 Año de creación de pregunta: 2014-01-01
 questions[44]= "45)  Entre las caracter&iacute;sticas del modelo de calidad de la ISO 9126 se encuentran:";
 choices[44]= new Array();
 choices[44][0] = "Funcionalidad";
 choices[44][1] = "Fiabilidad";
 choices[44][2] = "Portabilidad";
 choices[44][3] = "Todas las anteriores";
 answers[44] = choices[44][3];
 units[44] = "87";
 comments[44] = "Id Pregunta: 9652. Son 6, Funcionalidad, Fiabilidad, Usabilidad, Eficiencia, Mantenibilidad, Portabilidad";


//  Id pregunta: 9656 Año de creación de pregunta: 2014-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l no es un requisitos de los MOOC (Massive Open Online Course)?";
 choices[45]= new Array();
 choices[45][0] = "Ser un curso";
 choices[45][1] = "Tener car&aacute;cter masivo";
 choices[45][2] = "Online";
 choices[45][3] = "Todas las anteriores";
 answers[45] = choices[45][3];
 units[45] = "66";
 comments[45] = "Id Pregunta: 9656. ";


//  Id pregunta: 9662 Año de creación de pregunta: 2014-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes es una fase de un brainstorming?";
 choices[46]= new Array();
 choices[46][0] = "Preparaci&oacute;n";
 choices[46][1] = "Generaci&oacute;n";
 choices[46][2] = "Consolidaci&oacute;n";
 choices[46][3] = "Todas las anteriores";
 answers[46] = choices[46][3];
 units[46] = "78";
 comments[46] = "Id Pregunta: 9662. ";


//  Id pregunta: 9669 Año de creación de pregunta: 2014-01-01
 questions[47]= "48)  La ley de Amdahl demuestra que:";
 choices[47]= new Array();
 choices[47][0] = "Cuantas m&aacute;s CPUs, m&aacute;s productividad.";
 choices[47][1] = "La productividad depende de la parte que sea paralelizable.";
 choices[47][2] = "Cuanto m&aacute;s c&oacute;digo, m&aacute;s CPUs hacen falta.";
 choices[47][3] = "El n&uacute;mero de procesadores es igual al n&uacute;mero de ALUs.";
 answers[47] = choices[47][1];
 units[47] = "45";
 comments[47] = "Id Pregunta: 9669. ";


//  Id pregunta: 9711 Año de creación de pregunta: 2014-01-01
 questions[48]= "49)  La Norma ISO 9004:2009 establece una escala para evaluar la madurez del sistema de gesti&oacute;n de calidad para cada cap&iacute;tulo principal de la misma. Un nivel 3 de madurez se corresponde con un nivel de desempe&ntilde;o de,";
 choices[48]= new Array();
 choices[48][0] = "Aproximaci&oacute;n reactiva.";
 choices[48][1] = "&Eacute;nfasis en la mejora continua.";
 choices[48][2] = "Aproximaci&oacute;n del sistema formal estable.";
 choices[48][3] = "&quot;Desempe&ntilde;o de &quot;&quot;mejor de su clase&quot;&quot;.&quot;";
 answers[48] = choices[48][2];
 units[48] = "92";
 comments[48] = "Id Pregunta: 9711. Examen TIC-A1 2013";


//  Id pregunta: 9715 Año de creación de pregunta: 2014-01-01
 questions[49]= "50)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[49]= new Array();
 choices[49][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[49][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[49][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[49][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[49] = choices[49][2];
 units[49] = "102";
 comments[49] = "Id Pregunta: 9715. Examen TIC-A1 2013";


//  Id pregunta: 9730 Año de creación de pregunta: 2014-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de estas aseveraciones es INCORRECTA? En programaci&oacute;n, la ofuscaci&oacute;n del c&oacute;digo fuente";
 choices[50]= new Array();
 choices[50][0] = "dificulta la legilibilidad del c&oacute;digo fuente, pudiendo usar cifrado.";
 choices[50][1] = "impide la ingenier&iacute;a inversa.";
 choices[50][2] = "es un ejemplo de seguridad a trav&eacute;s de la oscuridad.";
 choices[50][3] = "es aplicable a lenguajes compilados directamente a c&oacute;digo m&aacute;quina como C o C++.";
 answers[50] = choices[50][1];
 units[50] = "91";
 comments[50] = "Id Pregunta: 9730. Examen TIC-A1 2013";


//  Id pregunta: 9744 Año de creación de pregunta: 2014-01-01
 questions[51]= "52)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[51]= new Array();
 choices[51][0] = "Model View Controller.";
 choices[51][1] = "Multiple Views Canvas.";
 choices[51][2] = "Mobile Video Compatible.";
 choices[51][3] = "Mobile View Connector.";
 answers[51] = choices[51][0];
 units[51] = "113";
 comments[51] = "Id Pregunta: 9744. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9770 Año de creación de pregunta: 2014-01-01
 questions[52]= "53)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones graves:";
 choices[52]= new Array();
 choices[52][0] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[52][1] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n.";
 choices[52][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[52][3] = "La ausencia de cita de la fuente.";
 answers[52] = choices[52][0];
 units[52] = "22";
 comments[52] = "Id Pregunta: 9770. ";


//  Id pregunta: 9773 Año de creación de pregunta: 2014-01-01
 questions[53]= "54)  Podremos almacenar un fichero de 6 GB en un dispositivo, si el sistema de ficheros con el que est&aacute; formateado es:";
 choices[53]= new Array();
 choices[53][0] = "FAT32.";
 choices[53][1] = "NTFS. ";
 choices[53][2] = "HPFS";
 choices[53][3] = "ISO 9660:1988 Level 2. ";
 answers[53] = choices[53][1];
 units[53] = "52";
 comments[53] = "Id Pregunta: 9773. Examen TIC A2 2013";


//  Id pregunta: 9846 Año de creación de pregunta: 2014-01-01
 questions[54]= "55)  El algoritmo DES:";
 choices[54]= new Array();
 choices[54][0] = "Es un algoritmo de cifrado asim&eacute;trico que codifica bloques de 64 bits empleando claves de 32 bits, con una permutaci&oacute;n al principio y otra al final del proceso.";
 choices[54][1] = "Es un algoritmo de cifrado por bloques que codifica bloques de 54 bits, y su estructura consta de 16 etapas.";
 choices[54][2] = "Es un algoritmo de cifrado sim&eacute;trico cuya estructura es una variaci&oacute;n de la red de Feistel.";
 choices[54][3] = "Es un algoritmo de cifrado de flujo que codifica flujos de 64 bits, empleando una clave de 64, aunque s&oacute;lo 56 bits son utilizados. Los 8 bits restantes comprueban la paridad.";
 answers[54] = choices[54][2];
 units[54] = "111";
 comments[54] = "Id Pregunta: 9846. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9874 Año de creación de pregunta: 2014-01-01
 questions[55]= "56)  Un trabajador asalariado crea un programa de ordenador en el ejercicio de sus funciones laborales. De acuerdo con el RDL 1/1996 de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, la titularidad de los derechos de explotaci&oacute;n del programa corresponder&aacute;";
 choices[55]= new Array();
 choices[55][0] = "al autor del programa.";
 choices[55][1] = "al autor y al empresario, conjuntamente, salvo pacto en contrario.";
 choices[55][2] = "al autor en cuanto al programa objeto, pero no respecto al programa fuente.";
 choices[55][3] = "exclusivamente al empresario, salvo pacto en contrario.";
 answers[55] = choices[55][3];
 units[55] = "36";
 comments[55] = "Id Pregunta: 9874. TIC A1, Examen 2013";


//  Id pregunta: 9899 Año de creación de pregunta: 2014-01-01
 questions[56]= "57)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[56]= new Array();
 choices[56][0] = "mensajes XML sobre protocolo SMTP.";
 choices[56][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[56][2] = "OData.(Open Data Protocol)";
 choices[56][3] = "BPMN (Business Process Message Notation).";
 answers[56] = choices[56][3];
 units[56] = "50,51,79";
 comments[56] = "Id Pregunta: 9899. TIC A1, Examen 2013";


//  Id pregunta: 9924 Año de creación de pregunta: 2014-01-01
 questions[57]= "58)  En una base de datos relacional en la que se tiene informaci&oacute;n guardada en una tabla de provincias y adem&aacute;s se dispone de una tabla de municipios donde parte de la clave es la provincia, &iquest;se puede borrar un elemento de la tabla de provincias manteniendo la integridad del sistema?";
 choices[57]= new Array();
 choices[57][0] = "Si, una vez que los municipios ya existen no hay ning&uacute;n problema.";
 choices[57][1] = "Si, aunque no podr&iacute;a dar de alta nuevos municipios de esa provincia.";
 choices[57][2] = "S&oacute;lo si no hay ninguna poblaci&oacute;n perteneciente a esa provincia.";
 choices[57][3] = "No, la tabla de provincias no puede cambiar ya que son un elemento estable.";
 answers[57] = choices[57][2];
 units[57] = "58";
 comments[57] = "Id Pregunta: 9924. TIC A2, Examen 2013";


//  Id pregunta: 9945 Año de creación de pregunta: 2014-01-01
 questions[58]= "59)  El modelo de desarrollo RAD (Rapid Application Development) fue descrito inicialmente por:";
 choices[58]= new Array();
 choices[58][0] = "Codd ";
 choices[58][1] = "Boehm ";
 choices[58][2] = "Chen ";
 choices[58][3] = "James Marti";
 answers[58] = choices[58][3];
 units[58] = "76";
 comments[58] = "Id Pregunta: 9945. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9966 Año de creación de pregunta: 2014-01-01
 questions[59]= "60)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Data Warehouse.";
 choices[59][1] = "OLAP";
 choices[59][2] = "Data Mart.";
 choices[59][3] = "Data Mining.";
 answers[59] = choices[59][2];
 units[59] = "68,71";
 comments[59] = "Id Pregunta: 9966. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9979 Año de creación de pregunta: 2014-01-01
 questions[60]= "61)  Un sistema que puede emplearse para registrar la relaci&oacute;n del ciudadano con la administraci&oacute;n, anotando todas las relaciones establecidas por &eacute;l, para configurar su personalidad administrativa digital es ";
 choices[60]= new Array();
 choices[60][0] = "Gesti&oacute;n de la Relaci&oacute;n con el Cliente (CRM) ";
 choices[60][1] = "Arquitectura Orientada a Servicios (SOA) ";
 choices[60][2] = "Planificaci&oacute;n de Recursos Empresariales (ERP) ";
 choices[60][3] = "Gesti&oacute;n de Procesos de Negocio (BPM) ";
 answers[60] = choices[60][0];
 units[60] = "65";
 comments[60] = "Id Pregunta: 9979. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 9982 Año de creación de pregunta: 2014-01-01
 questions[61]= "62)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[61]= new Array();
 choices[61][0] = "&lt;% y %&gt;";
 choices[61][1] = "&lt;SCRIPT LANGUAGE=ASPScript&gt;&lt;/SCRIPT&gt;";
 choices[61][2] = "&lt;!-- --&gt;";
 choices[61][3] = "Los comandos ASP no se mezclan en el mismo archivo que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[61] = choices[61][2];
 units[61] = "59,115";
 comments[61] = "Id Pregunta: 9982. TIC A2, UPM, Examen 2010";


//  Id pregunta: 9993 Año de creación de pregunta: 2014-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[62]= new Array();
 choices[62][0] = "Ley 11/2007";
 choices[62][1] = "Real Decreto 1619/2012";
 choices[62][2] = "Ley 25/2013";
 choices[62][3] = "Real Decreto Legislativo 3/2011";
 answers[62] = choices[62][0];
 units[62] = "70";
 comments[62] = "Id Pregunta: 9993. ";


//  Id pregunta: 10007 Año de creación de pregunta: 2014-01-01
 questions[63]= "64)  En la direcci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n, es fundamental la gesti&oacute;n del alcance del proyecto. Ello supone";
 choices[63]= new Array();
 choices[63][0] = "estimar la duraci&oacute;n de las actividades.";
 choices[63][1] = "definir la secuencia entre las actividades.";
 choices[63][2] = "asegurar que el proyecto incluya todo el trabajo requerido, y s&oacute;lo el trabajo requerido.";
 choices[63][3] = "preparar el presupuesto de costes.";
 answers[63] = choices[63][2];
 units[63] = "27";
 comments[63] = "Id Pregunta: 10007. ";


//  Id pregunta: 10019 Año de creación de pregunta: 2014-01-01
 questions[64]= "65)  Se&ntilde;ale de entre los siguientes cu&aacute;l NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[64]= new Array();
 choices[64][0] = "xUnit";
 choices[64][1] = "xUnit.net";
 choices[64][2] = "NUnit";
 choices[64][3] = "csUnit";
 answers[64] = choices[64][0];
 units[64] = "59";
 comments[64] = "Id Pregunta: 10019. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10020 Año de creación de pregunta: 2014-01-01
 questions[65]= "66)  En M&eacute;trica v3, &iquest;qui&eacute;n lleva a cabo las pruebas en la tarea IAS 6.2 &quot;realizaci&oacute;n de las pruebas de aceptaci&oacute;n&quot;?";
 choices[65]= new Array();
 choices[65][0] = "Usuarios expertos.";
 choices[65][1] = "Directores de los usuarios.";
 choices[65][2] = "Equipo de calidad.";
 choices[65][3] = "Equipo de implantaci&oacute;n.";
 answers[65] = choices[65][0];
 units[65] = "86";
 comments[65] = "Id Pregunta: 10020. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10032 Año de creación de pregunta: 2014-01-01
 questions[66]= "67)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a qu&eacute; subred pertenece.";
 choices[66]= new Array();
 choices[66][0] = "95.26.35.144/30 ";
 choices[66][1] = "95.26.35.144/29";
 choices[66][2] = "95.26.35.128/27 ";
 choices[66][3] = "95.26.35.128/25";
 answers[66] = choices[66][2];
 units[66] = "100";
 comments[66] = "Id Pregunta: 10032. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10063 Año de creación de pregunta: 2014-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[67]= new Array();
 choices[67][0] = "B ";
 choices[67][1] = "D";
 choices[67][2] = "H ";
 choices[67][3] = "I";
 answers[67] = choices[67][3];
 units[67] = "103, 109";
 comments[67] = "Id Pregunta: 10063. TIC A2, libre, Examen 2013";


//  Id pregunta: 10066 Año de creación de pregunta: 2014-01-01
 questions[68]= "69)  Indicar de qu&eacute; zonas se encarga RIPE-NCC como Registro Regional de Internet (RIR):";
 choices[68]= new Array();
 choices[68][0] = "Am&eacute;rica Central, Am&eacute;rica del Norte y del Sur.";
 choices[68][1] = "Europa y Norte de &Aacute;frica.";
 choices[68][2] = "Europa, Am&eacute;rica Central y Am&eacute;rica del Sur.";
 choices[68][3] = "Europa, Oriente Medio y Asia Central.";
 answers[68] = choices[68][3];
 units[68] = "112";
 comments[68] = "Id Pregunta: 10066. TIC A2, libre, Examen 2013";


//  Id pregunta: 10067 Año de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;C&oacute;mo se llama la clasificaci&oacute;n no jer&aacute;rquica de la informaci&oacute;n mediante etiquetas/tags por parte de los usuarios de la misma?";
 choices[69]= new Array();
 choices[69][0] = "Web 3.0. ";
 choices[69][1] = "Labelling.";
 choices[69][2] = "Taxonom&iacute;a.";
 choices[69][3] = "Folcsonom&iacute;a.";
 answers[69] = choices[69][3];
 units[69] = "120";
 comments[69] = "Id Pregunta: 10067. TIC A2, libre, Examen 2013";


//  Id pregunta: 10073 Año de creación de pregunta: 2014-01-01
 questions[70]= "71)  Sobre LTE (Long Term Evolution) es cierto que:";
 choices[70]= new Array();
 choices[70][0] = "Se conoce comercialmente como Generaci&oacute;n 3.0 G.";
 choices[70][1] = "Utiliza multiplexaci&oacute;n OFDM (Orthogonal frequency-division multiplexing) en el enlace descendente.";
 choices[70][2] = "Abandona el uso de antenas MIMO de la generaci&oacute;n anterior.";
 choices[70][3] = "Es un est&aacute;ndar norteamericano incompatible en Europa.";
 answers[70] = choices[70][1];
 units[70] = "107";
 comments[70] = "Id Pregunta: 10073. TIC A2, libre, Examen 2013";


//  Id pregunta: 10091 Año de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil tiene 5 fases claramente diferenciadas?";
 choices[71]= new Array();
 choices[71][0] = "SCRUM";
 choices[71][1] = "LSD";
 choices[71][2] = "Kanban";
 choices[71][3] = "FDD";
 answers[71] = choices[71][3];
 units[71] = "79";
 comments[71] = "Id Pregunta: 10091. ";


//  Id pregunta: 10102 Año de creación de pregunta: 2014-01-01
 questions[72]= "73)  En el diagrama SADT, &iquest;qu&eacute; interconexi&oacute;n NO existe?";
 choices[72]= new Array();
 choices[72][0] = "salida-mecanismo";
 choices[72][1] = "salida-realimentaci&oacute;n";
 choices[72][2] = "control-relaimentaci&oacute;n";
 choices[72][3] = "entrada-realimentaci&oacute;n";
 answers[72] = choices[72][1];
 units[72] = "81";
 comments[72] = "Id Pregunta: 10102. ";


//  Id pregunta: 10116 Año de creación de pregunta: 2014-01-01
 questions[73]= "74)  Respecto al protocolo Spanning Tree Protocol , es falso que:";
 choices[73]= new Array();
 choices[73][0] = "Se usa para definir caminos &uacute;nicos en la red de Nivel 2";
 choices[73][1] = "Permite realizar encaminamiento entre nodos";
 choices[73][2] = "Evita bucles en la red.";
 choices[73][3] = "Converge m&aacute;s lentamente que RSTP";
 answers[73] = choices[73][1];
 units[73] = "101";
 comments[73] = "Id Pregunta: 10116. Es de nivel 2";


//  Id pregunta: 10124 Año de creación de pregunta: 2014-01-01
 questions[74]= "75)  Un acceso b&aacute;sico RDSI tiene:";
 choices[74]= new Array();
 choices[74][0] = "30 canales B de 64 kbps y 1 canal D de 64 kbps";
 choices[74][1] = "2 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[74][2] = "30 canales B de 16 kbps y 1 canal D de 16 kbps";
 choices[74][3] = "2 canales B de 16 kbps y 1 canal D de 16 kbps";
 answers[74] = choices[74][0];
 units[74] = "103";
 comments[74] = "Id Pregunta: 10124. ";


//  Id pregunta: 10131 Año de creación de pregunta: 2014-01-01
 questions[75]= "76)  La operaci&oacute;n de SNMP GetBulk est&aacute; disponible desde:";
 choices[75]= new Array();
 choices[75][0] = "SNMPv1";
 choices[75][1] = "SNMPv2";
 choices[75][2] = "SNMPv3";
 choices[75][3] = "SNMPv4";
 answers[75] = choices[75][1];
 units[75] = "104";
 comments[75] = "Id Pregunta: 10131. ";


//  Id pregunta: 10149 Año de creación de pregunta: 2014-01-01
 questions[76]= "77)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[76]= new Array();
 choices[76][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[76][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a La adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[76][2] = "Las dos anteriores son ciertas";
 choices[76][3] = "Las afirmaciones anteriores son falsas";
 answers[76] = choices[76][2];
 units[76] = "30";
 comments[76] = "Id Pregunta: 10149. ";


//  Id pregunta: 10180 Año de creación de pregunta: 2014-01-01
 questions[77]= "78)  Respecto las relaciones de agregaci&oacute;n y composici&oacute;n entre clases de objetos, es cierto que:";
 choices[77]= new Array();
 choices[77][0] = "La composici&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La agregaci&oacute;n es una forma m&aacute;s fuerte de composici&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[77][1] = "La agregaci&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La composici&oacute;n es una forma m&aacute;s fuerte de agregaci&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[77][2] = "La a) y adem&aacute;s, la composici&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo relleno en el extremo del &quot;todo&quot; ";
 choices[77][3] = "La b) y adem&aacute;s, la agregaci&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo vac&iacute;o en el extremo del &quot;todo&quot; ";
 answers[77] = choices[77][3];
 units[77] = "82";
 comments[77] = "Id Pregunta: 10180. ";


//  Id pregunta: 10186 Año de creación de pregunta: 2014-01-01
 questions[78]= "79)  Aplicando la t&eacute;cnica del Modelo E/R Extendido se elabora el modelo de datos de la aplicaci&oacute;n que, en la arquitectura de base de datos estandarizada como ANSI/X3/SPARC, se corresponde con el nivel o esquema:";
 choices[78]= new Array();
 choices[78][0] = "Externo";
 choices[78][1] = "L&oacute;gico";
 choices[78][2] = "Interno";
 choices[78][3] = "Conceptual";
 answers[78] = choices[78][3];
 units[78] = "57,80";
 comments[78] = "Id Pregunta: 10186. ";


//  Id pregunta: 10191 Año de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Qu&eacute; tratamiento digital de una im&aacute;gen resalta los tonos oscuros?";
 choices[79]= new Array();
 choices[79][0] = "Filtro de mediana";
 choices[79][1] = "Realce logar&iacute;tmico";
 choices[79][2] = "Filtro paso bajo";
 choices[79][3] = "Filtro paso alto";
 answers[79] = choices[79][1];
 units[79] = "93";
 comments[79] = "Id Pregunta: 10191. ";


//  Id pregunta: 10192 Año de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; es PDF-417?";
 choices[80]= new Array();
 choices[80][0] = "Una especificaci&oacute;n de c&oacute;digo de barras de dos dimensiones";
 choices[80][1] = "Un formato de archivo para el archivo a largo plazo de documentos electr&oacute;nicos";
 choices[80][2] = "Una t&eacute;cnica de compresi&oacute;n sin p&eacute;rdidas basada en codificaci&oacute;n de trellis";
 choices[80][3] = "Una tecnolog&iacute;a repogr&aacute;fica de impresi&oacute;n de alta calidad";
 answers[80] = choices[80][0];
 units[80] = "94";
 comments[80] = "Id Pregunta: 10192. ";


//  Id pregunta: 10212 Año de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta est&aacute; basado en relaciones de superaci&oacute;n?";
 choices[81]= new Array();
 choices[81][0] = "M&eacute;todo PROMETHEE";
 choices[81][1] = "M&eacute;todo T.O.P.S.I.S. o de la programaci&oacute;n compromiso";
 choices[81][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[81][3] = "M&eacute;todo de la ponderaci&oacute;n lineal con &iacute;ndices econ&oacute;micos";
 answers[81] = choices[81][0];
 units[81] = "34";
 comments[81] = "Id Pregunta: 10212. ";


//  Id pregunta: 10221 Año de creación de pregunta: 2014-01-01
 questions[82]= "83)  Teniendo en cuenta que, se&ntilde;ala las sentencias que muestran en pantalla el valor 15:";
 choices[82]= new Array();
 choices[82][0] = "System.out.println(&ldquo;&rdquo; + var1 + 3);";
 choices[82][1] = "System.out.println(var1 &ldquo; + 3 &rdquo;);";
 choices[82][2] = "System.out.println(&ldquo;&rdquo; + (++var1 + 3));";
 choices[82][3] = "System.out.println(&ldquo;&rdquo; + (var1++ + 3));";
 answers[82] = choices[82][3];
 units[82] = "60";
 comments[82] = "Id Pregunta: 10221. ";


//  Id pregunta: 10239 Año de creación de pregunta: 2014-01-01
 questions[83]= "84)  Qu&eacute; objetos nos encontramos en un servicio de directorios:";
 choices[83]= new Array();
 choices[83][0] = "EJB home interface";
 choices[83][1] = "Un componente EJB";
 choices[83][2] = "La API EJB";
 choices[83][3] = "Un objeto interface EJB";
 answers[83] = choices[83][0];
 units[83] = "116";
 comments[83] = "Id Pregunta: 10239. ";


//  Id pregunta: 10245 Año de creación de pregunta: 2014-01-01
 questions[84]= "85)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio realiza modificaciones al mismo y distribuye los archivos binarios desde su web site. &iquest;Cu&aacute;l de las siguientes opciones cumple con las obligaciones de Antonio sobre distribuir el c&oacute;digo fuente del software modificado?";
 choices[84]= new Array();
 choices[84][0] = "I o II, y nada m&aacute;s";
 choices[84][1] = "S&oacute;lo II";
 choices[84][2] = "II o IV, pero nada m&aacute;s";
 choices[84][3] = "Cualquiera de las 4";
 answers[84] = choices[84][2];
 units[84] = "61";
 comments[84] = "Id Pregunta: 10245. ";


//  Id pregunta: 10273 Año de creación de pregunta: 2014-01-01
 questions[85]= "86)  Referente al m&eacute;todo de b&uacute;squeda con adversario aplicado a juegos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[85]= new Array();
 choices[85][0] = "Los dos jugadores disponen de informaci&oacute;n completa sobre el estado del juego";
 choices[85][1] = "La estrategia del oponente es desconocida";
 choices[85][2] = "Interviene el azar";
 choices[85][3] = "	Al acabar, cada jugador pierde, gana o empata";
 answers[85] = choices[85][2];
 units[85] = "63";
 comments[85] = "Id Pregunta: 10273. ";


//  Id pregunta: 10346 Año de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Qu&eacute; nombre recibe la tecnolog&iacute;a de Gesti&oacute;n de derechos digitales creada por la compa&ntilde;&iacute;a Apple?";
 choices[86]= new Array();
 choices[86][0] = "FairPlay";
 choices[86][1] = "Apple Verisign";
 choices[86][2] = "Apple DRM";
 choices[86][3] = "Apple Store DRM";
 answers[86] = choices[86][0];
 units[86] = "37";
 comments[86] = "Id Pregunta: 10346. Se usa desde la tienda online iTunes Store para ser reproducido en iPod e iTunes";


//  Id pregunta: 10355 Año de creación de pregunta: 2014-01-01
 questions[87]= "88)  En relaci&oacute;n con el programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas), se&ntilde;ale la respuesta err&oacute;nea:";
 choices[87]= new Array();
 choices[87][0] = "Abarca el per&iacute;odo 2010-2020";
 choices[87][1] = "Actuaciones destacadas dentro del marco del programa ISA son la red transeuropea sTESTA o el apoyo al proyecto STORK";
 choices[87][2] = "Tiene como &aacute;mbito las administraciones p&uacute;blicas europeas, incluidas las administraciones regionales y locales y las instituciones y &oacute;rganos comunitarios";
 choices[87][3] = "Su base legal se recoge en la Decisi&oacute;n 922/2009/CE";
 answers[87] = choices[87][0];
 units[87] = "40";
 comments[87] = "Id Pregunta: 10355. El programa ISA abarca el per&iacute;odo 2010-2015";


//  Id pregunta: 10369 Año de creación de pregunta: 2014-01-01
 questions[88]= "89)  En relaci&oacute;n con los acuerdos de nivel de servicio, los m&aacute;s importante de cara al seguimiento de los contratos que subscribe la Administraci&oacute;n con los contratistas es que:";
 choices[88]= new Array();
 choices[88][0] = "Los Sindicatos revisen las cla&uacute;sulas del ANS";
 choices[88][1] = "El Contratista proporcione informaci&oacute;n mensual sobre las m&eacute;tricas del ANS";
 choices[88][2] = "Se imponga penalizaciones ejemplares cuando se detecte un incumplimiento en el ANS";
 choices[88][3] = "La Administraci&oacute;n disponga de m&eacute;tricas sobre los puntos acordados en el ANS que puedan ser evaluadas sin la intervenci&oacute;n del propio contratista, para evitar el fraude en dichas evaluaciones";
 answers[88] = choices[88][3];
 units[88] = "28";
 comments[88] = "Id Pregunta: 10369. ";


//  Id pregunta: 10429 Año de creación de pregunta: 2014-01-01
 questions[89]= "90)  La virtualizaci&oacute;n basada en VDI (Virtual Desktop Infrastructure) ";
 choices[89]= new Array();
 choices[89][0] = "permite ratios de consolidaci&oacute;n de 10 a 1 respecto a servidores de terminales. ";
 choices[89][1] = "est&aacute; basado en la soluci&oacute;n XenApp de Citrix.";
 choices[89][2] = "aporta aislamiento y control sobre los puestos de trabajo gestionados.";
 choices[89][3] = "no est&aacute; dise&ntilde;ado para soportar el perfil de Desarrolladores, por el control limitado del entorno.  ";
 answers[89] = choices[89][2];
 units[89] = "119";
 comments[89] = "Id Pregunta: 10429. Examen TIC A1 2013";


//  Id pregunta: 10430 Año de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique cu&aacute;l de los siguientes es un organismo europeo de normalizaci&oacute;n. ";
 choices[90]= new Array();
 choices[90][0] = "CENELEC";
 choices[90][1] = "IEC";
 choices[90][2] = "ISO";
 choices[90][3] = "IEEE";
 answers[90] = choices[90][0];
 units[90] = "42";
 comments[90] = "Id Pregunta: 10430. Examen TIC A1 2013";


//  Id pregunta: 10439 Año de creación de pregunta: 2014-01-01
 questions[91]= "92)  Respecto al conjunto de normas H.323 de la UIT,";
 choices[91]= new Array();
 choices[91][0] = "se le puede a&ntilde;adir seguridad extremo a extremo con la recomendaci&oacute;n de la UIT H.235. ";
 choices[91][1] = "fue definida para redes de conmutaci&oacute;n de circuitos.";
 choices[91][2] = "permite audioconferencia pero no videoconferencia.";
 choices[91][3] = "se utiliza &uacute;nicamente con redes RDSI.";
 answers[91] = choices[91][0];
 units[91] = "117";
 comments[91] = "Id Pregunta: 10439. Examen TIC A1 2013";


//  Id pregunta: 10445 Año de creación de pregunta: 2014-01-01
 questions[92]= "93)  En el marco de la prueba de software, la cobertura de declaraciones de c&oacute;digo (code statement coverage) NO se utiliza para ";
 choices[92]= new Array();
 choices[92][0] = "definir &quot;hecho&quot; (done) en las metodolog&iacute;as &aacute;giles. ";
 choices[92][1] = "detectar c&oacute;digo muerto o inalcanzable.";
 choices[92][2] = "certificar software de misi&oacute;n cr&iacute;tica.";
 choices[92][3] = "detectar errores de condiciones de carrera (race condition bugs). ";
 answers[92] = choices[92][3];
 units[92] = "88";
 comments[92] = "Id Pregunta: 10445. Examen TIC A1 2013";


//  Id pregunta: 10466 Año de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Qu&eacute; tecnolog&iacute;as agrupa HTML5?";
 choices[93]= new Array();
 choices[93][0] = "HTML+Javascript";
 choices[93][1] = "HTML+CSS3+Flash";
 choices[93][2] = "HTML+CSS3+Javascript";
 choices[93][3] = "HTML+CSS3";
 answers[93] = choices[93][2];
 units[93] = "69";
 comments[93] = "Id Pregunta: 10466. ";


//  Id pregunta: 10487 Año de creación de pregunta: 2014-01-01
 questions[94]= "95)  El ciclo de mejora continua: Plan-Do-Check-Act se conoce tambi&eacute;n por el nombre de";
 choices[94]= new Array();
 choices[94][0] = "Ciclo de Calidad";
 choices[94][1] = "The endless loop";
 choices[94][2] = "Ciclo de Deming";
 choices[94][3] = "Ciclo de ITIL";
 answers[94] = choices[94][2];
 units[94] = "98";
 comments[94] = "Id Pregunta: 10487. ";


//  Id pregunta: 10496 Año de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Cual de las siguientes es una implementaci&oacute;n del protocolo LDAP?";
 choices[95]= new Array();
 choices[95][0] = "eDirectory";
 choices[95][1] = "iPlanet";
 choices[95][2] = "Active Directory";
 choices[95][3] = "Todos lo son";
 answers[95] = choices[95][3];
 units[95] = "74, 106";
 comments[95] = "Id Pregunta: 10496. eDirectory es la implementaci&oacute;n de Novell, e iPlanet la de Sun";


//  Id pregunta: 10506 Año de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cual de los siguientes no es un tipo de conector RJ?";
 choices[96]= new Array();
 choices[96][0] = "RJ-12";
 choices[96][1] = "RJ-45";
 choices[96][2] = "RJ-25";
 choices[96][3] = "Todos los anteriores son tipos de conectores RJ";
 answers[96] = choices[96][3];
 units[96] = "99";
 comments[96] = "Id Pregunta: 10506. ";


//  Id pregunta: 10517 Año de creación de pregunta: 2014-01-01
 questions[97]= "98)  Cu&aacute;l es el plazo m&aacute;ximo en el cual Registro de Operadores dictar&aacute;n resoluci&oacute;n motivada cuando constate que una notificaci&oacute;n no re&uacute;ne los requisitos establecidos:";
 choices[97]= new Array();
 choices[97][0] = "10 d&iacute;as";
 choices[97][1] = "15 d&iacute;as";
 choices[97][2] = "1 mes";
 choices[97][3] = "3 meses";
 answers[97] = choices[97][1];
 units[97] = "110";
 comments[97] = "Id Pregunta: 10517. ";


//  Id pregunta: 10536 Año de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es la tecnolog&iacute;a TRIM que emplean los discos duros de estado s&oacute;lido?";
 choices[98]= new Array();
 choices[98][0] = "Permite al disco SSD optimizar el almacenamiento de la informaci&oacute;n, de forma que todos los datos est&eacute;n contiguos, mejorando as&iacute; el rendimiento";
 choices[98][1] = "Permite al sistema operativo comunicarle al disco SSD qu&eacute; celdas no est&aacute;n en uso";
 choices[98][2] = "Permite que el disco SSD entre en hibernaci&oacute;n cuando no se usa, mejorando as&iacute; su vida &uacute;til";
 choices[98][3] = "Permite reducir el ruido y calor generado por el disco SSD, as&iacute; como su consumo energ&eacute;tico";
 answers[98] = choices[98][1];
 units[98] = "48";
 comments[98] = "Id Pregunta: 10536. ";


//  Id pregunta: 10562 Año de creación de pregunta: 2014-01-01
 questions[99]= "100)  Los controles detectivos tienen como objeto:";
 choices[99]= new Array();
 choices[99][0] = "reducir el riesgo ante una debilidad existente";
 choices[99][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[99][2] = "Solucionar problemas detectados por controles detectivos";
 choices[99][3] = "Reportar errores";
 answers[99] = choices[99][3];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10562. ";


