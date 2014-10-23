<?php
error_reporting(E_ALL | E_STRICT);
$usu=null;

// try{
//     if(@session_start()){
//         $_SESSION['LAST_ACTIVITY'] = time(); // update last activity time stamp
//         }
        
//     require_once('metadatos.php'); 
//     $usu=new Usuario();//saca los datos de la sesión
//     }
// catch (Exception $ee){
//     echo json_encode(array('retorno'=>0, 'error'=>1, 'msgError'=>$ee->getMessage()));
//     exit;
//     }
require_once('metadatos.php'); 

$md=new Metadatos($conn, $usu);

$getopost=filter_input(INPUT_SERVER, 'REQUEST_METHOD', FILTER_SANITIZE_STRING);
$accion = ($getopost == 'GET')? filter_input(INPUT_GET, 'accion', FILTER_SANITIZE_STRING): filter_input(INPUT_POST, 'accion', FILTER_SANITIZE_STRING);
$REQ=($getopost == 'GET'?INPUT_GET:INPUT_POST);
$ret=null;
// try {
    switch ($accion) {
        case 'getPreviewCategorias':
            $cd_usuario=filter_input($REQ, 'cd_usuario', FILTER_SANITIZE_EMAIL);

            $categorias=$md->getPreviewCategorias($cd_usuario);
        
            $tests=array();
            for ($i=0; $i<count($categorias->filas); $i++){
                $fila=$categorias->filas[$i];
                $testsCat=$md->getPreviewCategoria( $fila['cd_categoria'] );

                $tests=uneArray($tests, $testsCat->filas);
                }

            echo(json_encode(array('retorno' => 1, 
                                   //'categorias' => $categorias,
                                   'tests' => $tests, 
                                   )));
            break;
        case 'login':
            $usu=filter_input(INPUT_POST, 'cd_usuario', FILTER_SANITIZE_EMAIL);
            $conn->logInfo('Login '.$usu, 'LOGIN');
            Usuario::guardaEnSesion($usu);
            break;
        case 'logout':
            $conn->logInfo('Logout', 'LOGIN');
            session_destroy();
            echo(json_encode(array('retorno' => 1, 'sesionDestruida'=>1)) ); 
            break;
        default:
            trigger_error('¡Accion '. $accion . ' no implementada!');
        }
    
//     }
// catch (Exception $ee){
//     echo json_encode(array('retorno'=>0, 'error'=>1, 'msgError'=>$ee->getMessage()));
//     }
    
?>
