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
	public function getPreviewCategorias($cd_usuario){
		global $limitePreview;
		$sql="select c.ds_categoria, uc.* from categorias c, usuarios_categorias uc
				where c.cd_categoria=uc.cd_categoria and uc.cd_usuario=?
				limit ?";
		return $this->conn->lookupFilas($sql, array($cd_usuario, $limitePreview));
		}
	
	public function getPreviewCategoria($cd_categoria){
		global $limitePreview;
		$sql="select t.* from vs_testpreview t 
				where t.cd_categoria=?
				order by t.likes desc
				limit ?";
		return $this->conn->lookupFilas($sql, array($cd_categoria, $limitePreview));
		}
}
?>