<?php
error_reporting(E_ALL | E_STRICT);
$usu=null;

$getopost=filter_input(INPUT_SERVER, 'REQUEST_METHOD', FILTER_SANITIZE_STRING);
$accion = ($getopost == 'GET')? filter_input(INPUT_GET, 'accion', FILTER_SANITIZE_STRING): filter_input(INPUT_POST, 'accion', FILTER_SANITIZE_STRING);
$REQ=($getopost == 'GET'?INPUT_GET:INPUT_POST);

require_once('metadatos.php'); 
try{
    @session_start();
    if ($accion=='login'){
        // $usu=null;
        }
    else {
        $usu=new Usuario();//saca los datos de la sesión
        $_SESSION['LAST_ACTIVITY'] = time(); // update last activity time stamp
        }
    }
catch (Exception $ee){
    echo json_encode(array('retorno'=>0, 
                    'error'=>1, 
                    'msgError'=>$ee->getMessage(),
                    'sql' => $conn->arrResultSet,
                    ));
    exit;
    }

$md=new Metadatos($conn, $usu);


$ret=null;
// $showSQL=true;
try {
    switch ($accion) {
        case 'getPreviewCategorias':
            $cd_usuario=filter_input($REQ, 'cd_usuario', FILTER_SANITIZE_EMAIL);

            $categorias=$md->getListaCategorias($cd_usuario)->filas;

            $tests=array(); $arrCats=array();
            for ($i=0; $i<count($categorias); $i++){
                $fila=$categorias[$i];

                array_push($arrCats, $fila['cd_categoria'] );
                }
            $testsCat=$md->getPreviewCategoria( $arrCats )->filas;

            $ret=array('retorno' => 1, 
                       'categorias' => $categorias,
                       'tests' => $testsCat, 
                       'sql' => $md->__logSQL(),
                       );
            echo(json_encode($ret));
            break;
        case 'getPreviewTest':
            $cd_usuario=filter_input($REQ, 'cd_usuario', FILTER_SANITIZE_STRING);
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
           
            $ret=array('retorno' => 1, 
                        'test' => $md->getPreviewTest($cd_usuario, $cd_test), 
                        'sql' => $md->__logSQL(),
                       );
            echo(json_encode($ret));
            break;
        case 'getTest':
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
            
            $ret=array('retorno' => 1, 
                       'test' => $md->getTest($cd_test),
                       'sql' => $md->__logSQL(),
                       );
            echo(json_encode($ret));
            break;
        case 'creaBorradorTest':
            $cd_usuario=filter_input($REQ, 'cd_usuario', FILTER_SANITIZE_STRING);
            $datos=json_decode( filter_input($REQ, 'datos', FILTER_UNSAFE_RAW) );
            $cd_test=$md->creaBorradorTest($datos, $cd_usuario);

            $ret=array('retorno' => 1, 
                        'cd_test'=>$cd_test,
                        'sql' => $md->__logSQL(),);
            echo(json_encode($ret));
            break;
        case 'like+':
        case 'like-':
            $cd_usuario=filter_input($REQ, 'cd_usuario', FILTER_SANITIZE_STRING);
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);

            $md->toggleLike($accion, $cd_usuario, $cd_test);

            $ret=array('retorno' => 1, 
                    'sql' => $md->__logSQL(),);
            echo(json_encode($ret));
            break;
        //--------------------------------------------------------
        case 'getMisGrupos':
            
            $ret=array('retorno' => 1, 
                    'sql' => $md->__logSQL(),);
            echo(json_encode($ret));
            break;
        //--------------------------------------------------------
        case 'login':
            $token=filter_input($REQ, 'token', FILTER_SANITIZE_STRING);
            $tz=filter_input($REQ, $tz, FILTER_SANITIZE_STRING);
            
            $datosUsu=$md->getGoogleUserProfile($token);
            Usuario::guardaEnSesion($datosUsu);
            $conn->logInfo('Login '.$datosUsu['cd_usuario'], 'LOGIN');

            $esUsuarioNuevo=$md->altaUsuario($datosUsu, $tz);

            $ret=array('retorno' => 1, 
                        'userData'=>$datosUsu, 
                        'esUsuarioNuevo'=>$esUsuarioNuevo,
                        'sql' => $md->__logSQL(), 
                        );
            echo(json_encode($ret));
            break;
        case 'logout':
            $conn->logInfo('Logout', 'LOGIN');
            session_destroy();

            $ret=array('retorno' => 1, 
                'sesionDestruida'=>1,
                'sql' => $md->__logSQL(),
                );
            echo(json_encode($ret) ); 
            break;
        default:
            trigger_error('¡Accion '. $accion . ' no implementada!');
        }
    
    }
catch (Exception $ee){
    echo json_encode(array('retorno'=>0, 'error'=>1, 'msgError'=>$ee->getMessage()));
    }
    
?>
