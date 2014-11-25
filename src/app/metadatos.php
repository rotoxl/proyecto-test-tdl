<?php
require_once(__DIR__.'/creaConn.php'); 
$conn=new Conn();

// if (!isset($_SESSION)) {
//     ini_set("session.gc_maxlifetime", "3600"); 
	// try {
		// if(@session_start() == false){
		// 	session_destroy();
		// 	session_start();
		// 	}
	// 	}
	// catch(Exception $ee){
	// 	throw new Exception('Sesión perdida');		
	// 	}
	// }

class FasesTramitacion{ // tests_t
    const Alta='Alta';
    const Borrador='Borrador';
    const Favorito='Favorito';
    // const CambioPrecio='CambioPrecio';
 	}
function uneArray($arr, $arrUObj){
	if (!is_array($arr)){
	  	throw new Exception('uneArray: en p1 debe venir un array ** '.($arr->sql).' **');
	  	}

	if (is_array( $arrUObj )){
	  	$arr=array_merge($arr, $arrUObj);
	  	}
	else {
	  	$arr[]=$arrUObj;
	  	}
	return $arr;
	}

$limitePreview=30;

class Metadatos{
	public $conn=null;

	function __construct($conn, $usu=null){
          $this->conn=$conn;
          if ($usu!=null){
               $conn->setUsu($usu);
               }
          }
	function __logSQL(){
		return $this->conn->arrResultSet;
		}
	//////
	public function numerador($tabla, $col, $arr=null, $paratran=false){ // Uso: numerador ('centroscoste', 'colNumerador', array('id_empresa'=>1 ))
		$params=array();
		$sql='select max('. $col .') from ' . $tabla;
		if (!is_null($arr)){
			$sql = $sql . ' where ';

			for ($i=0; $i< count(array_keys($arr)); $i++){
				$k=array_keys($arr)[$i];
				$v=$arr[$k];

				if ($i > 0) {
					$sql = $sql . ' AND ';
					}
				$sql = $sql . $k . '= ?';
				array_push($params, $v);
				}
			}
		if($paratran) {
			return new Sql($sql, $params);
			} 
		else {
			$ret=$this->conn->lookupSimple($sql, $params);
			if ($ret == null) {
				return 1;
				}
			return 1+$ret;
			}
		}
	private function fechaHora(){
		return date('d/m/Y H:i:s');
		}
	//////
    function getGoogleUserProfile($token){
    	$url = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=';
		
		$json = file_get_contents($url.$token);
		$userData = json_decode($json, true);
		
		if (array_key_exists('email', $userData)){
			$arr=array(
				'cd_usuario'=>$userData['email'],
				'email'=>$userData['email'],
				'given_name'=>$userData['given_name'],
				'family_name'=>$userData['family_name'],
				'picture'=>$userData['picture'],
				);
			return $arr;
			}
		else {
			throw new Exception($json);
			}

    	}
	function altaUsuario($d){
		$cd_usuario=$d['cd_usuario'];

		$yaExiste=$this->conn->lookupSimple('select cd_usuario from usuarios where cd_usuario=?', array($cd_usuario));

		if ($yaExiste==$cd_usuario){
			return false; //devolvemos esUsuarioNuevo
			}
		else {
			$sql='insert into usuarios (cd_usuario, nombre, apellidos, picture) values (?, ?, ?, ?)';
			$this->conn->ejecuta($sql, array($d['cd_usuario'], $d['given_name'], $d['family_name'], $d['picture'] ));
			return true; //devolvemos esUsuarioNuevo
			}
		}
	//////
	private function sendPush($arrDispositivos, $messageData){
		if (count($arrDispositivos)==0) return;

		global $GCM_SERVER_KEY;
		$apiKey = $GCM_SERVER_KEY; //server or browser key

		// var_dump($apiKey);

		if ($messageData==null)
		   	$messageData=array();
		else if (!is_array($messageData))
			$messageData=array($messageData);	

		$headers = array("Content-Type:" . "application/json", "Authorization:" . "key=" . $apiKey);
		$payload = array(
		   	'data' => $messageData,
		   	'registration_ids' => $arrDispositivos,
		   	);

		$ch = curl_init();

		curl_setopt( $ch, CURLOPT_HTTPHEADER, $headers ); 
		curl_setopt( $ch, CURLOPT_URL, "https://android.googleapis.com/gcm/send" );
		curl_setopt( $ch, CURLOPT_SSL_VERIFYHOST, 0 );
		curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, 0 );
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
		curl_setopt( $ch, CURLOPT_POSTFIELDS, json_encode($payload) );

		$response = curl_exec($ch);
		curl_close($ch);

		$this->conn->logInfo(json_encode($response), 'PUSH');
  		return $response;
		}
	public function sendPushGrupo($cd_grupo, $excluir, $datos){
		$gr=$this->conn->lookupFilas('select cd_dispositivo, ug.cd_usuario from usuarios u, usuarios_grupos ug 
										where ug.cd_usuario=u.cd_usuario and f_aceptacion is not null and cd_grupo=?', 
									array($cd_grupo))->filas;
		$arr=array();
		for ($i=0; $i<count($gr); $i++){
			$u=$gr[$i]['cd_usuario'];

			if ($u==$excluir){
				continue;
				}

			$d=$gr[$i]['cd_dispositivo'];
			if ($d!=null ){
				array_push( $arr, $d );
				}
			}
		$this->sendPush($arr, $datos); 
		}
	// public function sendPushUsuario($cd_usuario, $datos){}
	// private function getArrDispositivos(){}
	public function guardaID_Dispositivo($cd_usuario, $cd_gcm){
		$sql="update usuarios set cd_dispositivo=? where cd_usuario=?";
		$this->conn->ejecuta($sql, array($cd_gcm, $cd_usuario));
		}
	private function genDatosPush($modulo, $accion, $datos, $msgAlt='Hay alguna actualización en Octopus. Por favor, entra en la app'){
		return array(
			'f_push'=>$this->fechaHora(),
			'vista'=>$modulo,
			'accion'=>$accion,
			'datos'=>$datos,

			'message'=> $msgAlt//texto que se mostrará en notif emergente cuando la app esté en segundo plano
			);
		}
	//////
	public function getCategoriasPersonalizadas($cd_usuario){
		$sql="	select
				 	c.ds_categoria, c.cd_categoria, c.i,
					(select count(*) from vs_testpreview vt where vt.liscat like concat('%,', c.cd_categoria, ',%') ) as numTestsPorCat,
					c.listarComoCategoria,
					c.cd_categoriapadre,
					(select group_concat(cc.cd_categoria) from categorias cc where cc.cd_categoriapadre=c.cd_categoria) as cd_categoriashijas
				 from categorias c, usuarios_categorias uc
					where c.cd_categoria=uc.cd_categoria and uc.cd_usuario=?
				order by cd_categoria";
		return $this->conn->lookupFilas($sql, array($cd_usuario));
		}
	public function getCategorias(){
		$sql="select
					c.ds_categoria,
					c.cd_categoria,  
					c.i,
					(select count(*) from vs_testpreview vt where vt.liscat like concat('%,', c.cd_categoria, ',%') ) as numTestsPorCat,
					c.listarComoCategoria,
					c.cd_categoriapadre,
					(select group_concat(cc.cd_categoria) from categorias cc where cc.cd_categoriapadre=c.cd_categoria) as cd_categoriashijas
				from categorias c 
				-- having numTestsPorCat > 0
				order by cd_categoria";
		return $this->conn->lookupFilas($sql, array());
		}
	public function getPreviewCategoria($arrCats){
		global $limitePreview;

		$sql=''; $arr=array();
		for ($i=0; $i<count($arrCats); $i++){
			$cd_categoria=$arrCats[$i];

			if ($cd_categoria==-1){//últimos actualizados
				if ($sql!='')
					$sql=$sql . " UNION ALL ";

				$sql=$sql . "(select t.* from vs_testpreview t
					where t.fu_modificacion>DATE_SUB(CURDATE(),INTERVAL 30 DAY)
					order by t.likes, t.fu_modificacion desc
					limit ?)";
				array_push($arr, $limitePreview);
				}
			else {
				if ($sql!='')
					$sql=$sql . " UNION ALL ";

				$sql=$sql . "(select t.* from vs_testpreview t 
						where t.liscat like concat('%', ?, ',%')
						order by t.likes desc , t.cd_test 
						limit ?)";
				array_push($arr, $cd_categoria, $limitePreview);
				}
			}
		$sql="select * from (".$sql.") xx group by cd_test order by likes desc, cd_test";
		return $this->conn->lookupFilas($sql, $arr);
		}
	public function getPreviewTest($cd_usuario, $cd_test){
		$porcentajePreguntas=10;

		$sql="select * from vs_testpreview t where cd_test=?";
		$test=$this->conn->lookupDict($sql, array($cd_test));

		$maxCD_Pregunta=$porcentajePreguntas*$test['numpreguntas']/100;

		$sqlPreguntas="select pregunta from preguntas_tests where cd_test=? and cd_pregunta<?";
		$preg=$this->conn->lookupFilas($sqlPreguntas, array($cd_test, $maxCD_Pregunta));

		$likeit=$this->conn->lookupSimple("select cd_usuario from usuarios_likes where cd_usuario=? and cd_test=?", array($cd_usuario, $cd_test));
		
		$test['preguntas']=$preg->filas;
		$test['likeit']=($likeit==$cd_usuario);

		return $test;
		}
	public function getTest($cd_usuario, $cd_test){
		$md=$this->conn->lookupDict(
			"select cd_test, f_examen, ds_test, liscat, region, organismo, img, fallosRestan, minutos, numPreguntas, precio, cd_moneda from vs_testpreview t where cd_test=?", 
			array($cd_test));

		if ($md['precio']>0){
			throw new Exception('No se permite descargar este test, no es gratuito');
		}

		$preg=$this->conn->lookupFilas("select * from preguntas_tests where cd_test=? order by cd_pregunta", array($cd_test));
		$arrPreguntas=array();
		for ($i=0; $i<count($preg->filas); $i++){
			$f=$preg->filas[$i];
			$pregunta=array(
				'pregunta'=>$f['pregunta'],
				'img'=>$f['recursopregunta'],
				'cd_respuestacorrecta'=>$f['cd_respuestacorrecta'],
				'respuestas'=>array(
					array( 'texto'=>$f['respuesta0'], 'img'=>$f['recursorespuesta0']),//, 'texto_recurso'=>$f['textorecursorespuesta0']),
					array( 'texto'=>$f['respuesta1'], 'img'=>$f['recursorespuesta1']),//, 'texto_recurso'=>$f['textorecursorespuesta1']),
					array( 'texto'=>$f['respuesta2'], 'img'=>$f['recursorespuesta2']),//, 'texto_recurso'=>$f['textorecursorespuesta2']),
					array( 'texto'=>$f['respuesta3'], 'img'=>$f['recursorespuesta3']),//, 'texto_recurso'=>$f['textorecursorespuesta3']),
					array( 'texto'=>$f['respuesta4'], 'img'=>$f['recursorespuesta4']),//, 'texto_recurso'=>$f['textorecursorespuesta4']),
					array( 'texto'=>$f['respuesta5'], 'img'=>$f['recursorespuesta5']),//, 'texto_recurso'=>$f['textorecursorespuesta5']),
					)
				);
			array_push($arrPreguntas, $pregunta);
			}

		$md['preguntas']=$arrPreguntas;

		$this->vinculaTestConUsuario($cd_usuario, $cd_test, $md['precio'], $md['cd_moneda']);
		return $md;
		}
	//////
	public function toggleLike($accion, $cd_usuario, $cd_test){
		if ($accion=='like+')
			$sql='insert into usuarios_likes (cd_usuario, cd_test) values (?, ?)';
		else
			$sql='delete from usuarios_likes where cd_usuario=? and cd_test=?';
		
		$arr=array(
			new Sql($sql, array($cd_usuario, $cd_test)),
			$this->sql_test_t($cd_test, $cd_usuario, FasesTramitacion::Favorito, $accion)
			);
		$this->conn->ejecutaLote($arr);
		}
	//////
	public function vinculaTestConUsuario($cd_usuario, $cd_test, $precio, $cd_moneda){
		$existe=$this->conn->lookupSimple('select cd_test from usuarios_tests where cd_usuario=? and cd_test=?', array($cd_usuario, $cd_test));
		if ($existe){
			$sql="insert into usuarios_tests (cd_usuario, cd_test, precio, cd_moneda) values (?, ?, ?, ?)";
			$this->conn->ejecuta($sql, array($cd_usuario, $cd_test, $precio, $cd_moneda));
			}
		}
	//////
	private function sql_test_t($cd_test, $cd_usuario, $fase, $ds_operacion){
		return new Sql('insert into tests_t (cd_test, cd_usuario, cd_operacion, ds_operacion, f_ejecucion) values (?, ?, ?, ?, now())',
					array(
						$cd_test, $cd_usuario, $fase, $ds_operacion
						) );
		}
	private function completaCamposOpcionales($datos, $arrCamposOpcionales){
		for ($j=0; $j<count($arrCamposOpcionales); $j++){
			$k=$arrCamposOpcionales[$j];
			if (!array_key_exists($k, $datos))
				$datos->$k = null;
			}
		return $datos;
		}
	public function creaBorradorTest($datos, $cd_usuario){
		if (!in_array($cd_usuario, array('emolina@tax-i.co', 'rotoxl@gmail.com', 'carlos.amc@gmail.com') )) {
			throw new Exception($cd_usuario.' no está autorizado para subir tests');
			}
		
		$nuevoCD_Test=$this->numerador('tests', 'cd_test');;
		$datos=$this->completaCamposOpcionales($datos, array('region', 'organismo', 'img', 'f_examen', 'admiteReordenarPreguntas', 'admiteReordenarRespuestas', 'precio', 'cd_moneda') );
		
		$arr=array(
			new Sql('insert into tests (cd_test, ds_test, region, organismo, img, f_examen, 
										fallosRestan, minutos, numpreguntas, admiteReordenarPreguntas, admiteReordenarRespuestas, 
										precio, cd_moneda, matricula) 
					values (?,?,?,?,?, ?,?,?,?,?, ?,?,?, generaMatricula_Test() )',
					array(
						$nuevoCD_Test,
						$datos->ds_test, 
						$datos->region, 
						$datos->organismo, 
						$datos->img, 
						$datos->f_examen, 

						$datos->fallosrestan, 
						$datos->minutos, 
						$datos->numpreguntas, 
						$datos->admiteReordenarPreguntas, 
						$datos->admiteReordenarRespuestas, 

						$datos->precio, 
						$datos->cd_moneda, 
						))
			);

		for ($i=0; $i<count($datos->preguntas); $i++ ) {
			$preg=$datos->preguntas[$i];
			$preg=$this->completaCamposOpcionales($preg, array('respuesta3', 'respuesta4', 'respuesta5', 
															'recursopregunta',
															'recursorespuesta0', 'recursorespuesta1', 'recursorespuesta2', 'recursorespuesta3', 'recursorespuesta4', 'recursorespuesta5', 
															'notas'));

			array_push($arr, new Sql(
				'insert into preguntas_tests (cd_test, cd_pregunta, pregunta, cd_respuestacorrecta, 
							respuesta0, respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, 
							recursopregunta, 
							recursorespuesta0, recursorespuesta1, recursorespuesta2, recursorespuesta3, recursorespuesta4, recursorespuesta5, 
							notas) 
					values (?, ?, ?, ?, 
							?, ?, ?, ?, ?, ?, 
							?, 
							?, ?, ?, ?, ?, ?,
							?)', 
				array($nuevoCD_Test, $i, $preg->pregunta, $preg->cd_respuestacorrecta,
					$preg->respuesta0, $preg->respuesta1, $preg->respuesta2, $preg->respuesta3, $preg->respuesta4, $preg->respuesta5, 
					$preg->recursopregunta,
					$preg->recursorespuesta0, $preg->recursorespuesta1, $preg->recursorespuesta2, $preg->recursorespuesta3, $preg->recursorespuesta4, $preg->recursorespuesta5,
					$preg->notas 
					)
				));
			}

		$liscat=explode(',', $datos->liscat); //2,3
		for ($i=0; $i<count($liscat); $i++){
			array_push($arr, 
					new Sql( "insert into test_categorias (cd_test, cd_categoria) values (?, ?)", array($nuevoCD_Test, $liscat[$i] ))
					);
			}

		array_push($arr, 
			$this->sql_test_t($nuevoCD_Test, $cd_usuario, FasesTramitacion::Alta, null, null)
			);



		$this->conn->ejecutaLote($arr);

		return $nuevoCD_Test;
		}
	//////
	public function getMisGrupos($cd_usuario){
		$sql='select g.cd_grupo, g.ds_grupo, g.picture, g.admin from grupos g
				where exists (select cd_usuario from usuarios_grupos ug
							where g.cd_grupo=ug.cd_grupo and cd_usuario=?)';
		return $this->conn->lookupFilas($sql, array($cd_usuario));
		}
	public function getMiembrosGrupo($cd_grupo){
		$sql='select cd_usuario, nombre as given_name, apellidos as family_name, picture from usuarios where cd_usuario in (select cd_usuario from usuarios_grupos where cd_grupo=?)';
		return $this->conn->lookupFilas($sql, array($cd_grupo));
		}
	public function getMsgGrupo($cd_grupo){
		$sql='select cd_usuario, texto as msg, cd_test, badge, f_msg as f from usuarios_grupos_mensajes where cd_grupo=? order by cd_mensaje desc';
		return $this->conn->lookupFilas($sql, array($cd_grupo));
		}
	public function nuevoMsgGrupo($cd_usuario, $cd_grupo, $msg){
		$sql="insert into usuarios_grupos_mensajes (cd_usuario, cd_grupo, cd_mensaje, texto, cd_test, badge) values (?, ?, ?, ?, ?, ?)";

		$idx=$this->numerador('usuarios_grupos_mensajes', 'cd_mensaje', array('cd_usuario'=>$cd_usuario, 'cd_grupo'=>$cd_grupo));
		$this->conn->ejecuta($sql, array($cd_usuario, $cd_grupo, $idx, $msg, null, null));

		$datos=array(
			'cd_grupo'=>$cd_grupo,
			'cd_usuario'=>    $cd_usuario,
			'msg'=>   $msg,
			'cd_test'=> null,
			'badge'=>   null,
			'f_msg'=>	$this->fechaHora(),
			);
		$msgAlt='Nuevo mensaje de '.$cd_usuario.': '.$msg;
		$this->sendPushGrupo($cd_grupo, null, $this->genDatosPush('vistaSocial', 'mensajeGrupo', $datos, $msgAlt) );
		}
	public function guardarGrupo($datos, $cd_usuario){
		$arrSql=array(); $ususQueNoExisten=null;

		if ($datos['esBorrado']==1){
			$par=array($datos['cd_grupo']);
			$arrSql=array(
				new Sql("delete from usuarios_grupos where cd_grupo=?", $par),
				new Sql("delete from usuarios_grupos_mensajes where cd_grupo=?", $par),
				new Sql("delete from grupos where cd_grupo=?", $par)
				);
			}
		else {
			if ($datos['esNuevo']==1){
				$sql="insert into grupos (cd_grupo, ds_grupo, picture, admin) values (?, ?, ?, ?)";
				$idx=$this->numerador('grupos', 'cd_grupo');
				$datos['cd_grupo']=$idx;

				$arr=array($idx, $datos['ds_grupo'], null, $cd_usuario);

				array_push($arrSql, new Sql($sql, $arr));
				}
			else {
				$sql="update grupos set ds_grupo=?, picture=? where cd_grupo=?";
				$arr=array($datos['ds_grupo'], null, $datos['cd_grupo']);

				array_push($arrSql, new Sql($sql, $arr));
				}
		
			$ususQueNoExisten=array();
			array_push($arrSql, new Sql( "delete from usuarios_grupos where cd_grupo=?", array($datos['cd_grupo']) ));
			for ($i=0; $i<count($datos['miembros']); $i++ ){
				$m=$datos['miembros'][$i];

				$existe=$this->conn->lookupSimple("select cd_usuario from usuarios where cd_usuario=?", array($m));
				if ($existe!=$m){
					array_push($arrSql, new Sql( "insert into usuarios (cd_usuario) values (?)", array($m) ));
					array_push($ususQueNoExisten, $m);
					}
				array_push($arrSql, new Sql( "insert into usuarios_grupos (cd_usuario, cd_grupo) values (?, ?)", array($m, $datos['cd_grupo']) ));
				}
			}
		

		$this->conn->ejecutaLote($arrSql);
		return $ususQueNoExisten;
		}

}
?>