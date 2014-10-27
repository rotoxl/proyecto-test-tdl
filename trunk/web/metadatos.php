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
    // const Favorito='Favorito';
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

$limitePreview=10;
class Metadatos{
	public $conn=null;

	function __construct($conn, $usu=null){
          $this->conn=$conn;
          if ($usu!=null){
               $conn->setUsu($usu);
               }
          }
	public function numerador($tabla, $col, $arr=null, $paratran=false){ // Uso: numerador ('centroscoste', array('id_empresa'=>1 ))
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

	public function getPreviewCategorias($cd_usuario){
		global $limitePreview;

		$sql="select
			 	c.ds_categoria, uc.*, c.i,
				(select count(*) from vs_testpreview vt where c.cd_categoria=vt.cd_categoria) as numTestsPorCat
			 from categorias c, usuarios_categorias uc
				where c.cd_categoria=uc.cd_categoria and uc.cd_usuario=?
				limit ?";
		$filas=$this->conn->lookupFilas($sql, array($cd_usuario, $limitePreview));

		if ($filas->numFilas==0){
			$sql="select count(*) as numTestsPorCat, c.cd_categoria, c.ds_categoria, c.i
					from vs_testpreview vt, categorias c 
					where vt.cd_categoria = c.cd_categoria
					group by cd_categoria";
			$filas=$this->conn->lookupFilas($sql, array($limitePreview));			
			}
		
		return $filas;
		}
	public function getPreviewCategoria($cd_categoria){
		global $limitePreview;
		$sql="select t.* from vs_testpreview t 
				where t.cd_categoria=?
				order by t.likes desc
				limit ?";
		return $this->conn->lookupFilas($sql, array($cd_categoria, $limitePreview));
		}
	public function getPreviewTest($cd_test){
		$porcentajePreguntas=10;

		$sql="select * from vs_testpreview t where cd_test=?";
		$test=$this->conn->lookupDict($sql, array($cd_test));

		$maxCD_Pregunta=$porcentajePreguntas*$test['numpreguntas']/100;

		$sqlPreguntas="select pregunta from preguntas_tests where cd_test=? and cd_pregunta<?";
		$preg=$this->conn->lookupFilas($sqlPreguntas, array($cd_test, $maxCD_Pregunta));

		$test['preguntas']=$preg->filas;
		return $test;
		}
	public function getTest($cd_test){
		$md=$this->conn->lookupDict(
			"select cd_test, f_examen, ds_test, liscat, region, organismo, img, fallosRestan, minutos, numPreguntas, precio from vs_testpreview t where cd_test=?", 
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
					array( 'texto'=>$f['respuesta0'], 'img'=>$f['recursorespuesta0']),
					array( 'texto'=>$f['respuesta1'], 'img'=>$f['recursorespuesta1']),
					array( 'texto'=>$f['respuesta2'], 'img'=>$f['recursorespuesta2']),
					array( 'texto'=>$f['respuesta3'], 'img'=>$f['recursorespuesta3']),
					array( 'texto'=>$f['respuesta4'], 'img'=>$f['recursorespuesta4']),
					array( 'texto'=>$f['respuesta5'], 'img'=>$f['recursorespuesta5']),
					)
				);
			array_push($arrPreguntas, $pregunta);
			}

		return array(
			'f_examen'=>	$md['f_examen'],
			'ds_test'=>		$md['ds_test'],
			'cd_test'=>		$md['cd_test'],
			'liscat'=>		$md['liscat'],
			'region'=>		$md['region'],
			'organismo'=>	$md['organismo'],
			'img'=>			$md['img'],
			'fallosRestan'=>$md['fallosrestan'],
			'minutos'=>		$md['minutos'],
			'numPreguntas'=>$md['numpreguntas'],

			'preguntas'=>$arrPreguntas
			);
		}
	//////
	private function sql_test_t($cd_test, $cd_usuario, $fase, $ds_operacion, $f_ejecucion){
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
										precio, cd_moneda) 
					values (?,?,?,?,?, ?,?,?,?,?, ?,?,? )',
					array(
						$nuevoCD_Test,
						$datos->ds_test, 
						$datos->region, 
						$datos->organismo, 
						$datos->img, 
						$datos->f_examen, 

						$datos->fallosRestan, 
						$datos->minutos, 
						$datos->numPreguntas, 
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
}
?>