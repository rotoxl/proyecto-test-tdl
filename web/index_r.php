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
try {
    switch ($accion) {
        case 'getPreviewCategorias':
            $cd_usuario=filter_input($REQ, 'cd_usuario', FILTER_SANITIZE_EMAIL);

            $categorias=$md->getListaCategorias($cd_usuario)->filas;
            
            // $tests=array();
            // for ($i=0; $i<count($categorias); $i++){
            //     $fila=$categorias[$i];
            //     // var_dump( $fila);
            //     $testsCat=$md->getPreviewCategoria( $fila['cd_categoria'] );

            //     $tests=uneArray($tests, $testsCat->filas);
            //     }

            $tests=array(); $arrCats=array();
            for ($i=0; $i<count($categorias); $i++){
                $fila=$categorias[$i];

                array_push($arrCats, $fila['cd_categoria'] );
                }
            $testsCat=$md->getPreviewCategoria( $arrCats )->filas;

            echo(json_encode(array('retorno' => 1, 
                                   'categorias' => $categorias,
                                   'tests' => $testsCat, 
                                   )));
            break;
        case 'getPreviewTest':
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
            echo(json_encode(array('retorno' => 1, 
                                   'test' => $md->getPreviewTest($cd_test), 
                                   )));
            break;
        case 'getTest':
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
            echo(json_encode(array('retorno' => 1, 
                                   'test' => $md->getTest($cd_test), 
                                   )));
            break;
        case 'creaBorradorTest':
            $cd_usuario=filter_input($REQ, 'cd_usuario', FILTER_SANITIZE_STRING);
            $datos=json_decode( filter_input($REQ, 'datos', FILTER_UNSAFE_RAW) );
            $cd_test=$md->creaBorradorTest($datos, $cd_usuario);

            echo(json_encode(array('retorno' => 1, 'cd_test'=>$cd_test)));
            break;
        //--------------------------------------------------------
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
    
    }
catch (Exception $ee){
    echo json_encode(array('retorno'=>0, 'error'=>1, 'msgError'=>$ee->getMessage()));
    }
    
?>
