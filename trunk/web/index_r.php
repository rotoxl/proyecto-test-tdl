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
// try {
    switch ($accion) {
        case 'getPreviewCategorias':
            $cd_usuario=$usu->cd_usuario;
            $categorias=$md->getCategoriasPersonalizadas($cd_usuario)->filas;
            if (count($categorias)==0)
                $categorias=$md->getCategorias()->filas;

            //añadimos las cats virtuales
            $d1=array(
                'ds_categoria'=>'(título dinamico nuevos y actualizados)',
                'cd_categoria'=>-1,
                'i'=>'fa-fire',
                'numtestsporcat'=>10, 'listarComoCategoria'=>1, 'cd_categoriapadre'=>null, 
                );
            /* $d2=array(
                 'ds_categoria'=>'(título dinamico los más valorados)',
                 'cd_categoria'=>-2,
                 'i'=>'fa-love',
                 'numtestsporcat'=>10, 'listarComoCategoria'=>1, 'cd_categoriapadre'=>null,
                 );
             $d3=array(
                 'ds_categoria'=>'(título dinamico recomendaciones para ti)',
                 'cd_categoria'=>-3,
                 'i'=>'fa-birthday-cake',
                 'numtestsporcat'=>10, 'listarComoCategoria'=>1, 'cd_categoriapadre'=>null,
                 ); */
            array_splice($categorias, 0, 0, array($d1) );
            
            $tests=array(); $arrCats=array();
            for ($i=0; $i<count($categorias); $i++){
                $fila=$categorias[$i];

                if ($fila['cd_categoria']>0 && $fila['numtestsporcat']>0)
                    array_push($arrCats, $fila['cd_categoria'] );
                }
            $testsCat=$md->getPreviewCategoria( $arrCats )->filas;

            $ret=array('retorno' => 1, 
                       'categorias' => $categorias,
                       'tests' => $testsCat, 
                       'sql' => $md->__logSQL(),
                       );
            echo json_encode($ret);
            break;
        case 'getPreviewTest':
            $cd_usuario=$usu->cd_usuario;
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
           
            $ret=array('retorno' => 1, 
                        'test' => $md->getPreviewTest($cd_usuario, $cd_test), 
                        'sql' => $md->__logSQL(),
                       );
            echo json_encode($ret);
            break;
        case 'getTest':
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
            
            $ret=array('retorno' => 1, 
                       'test' => $md->getTest($cd_test),
                       'sql' => $md->__logSQL(),
                       );
            echo json_encode($ret);
            break;
        case 'creaBorradorTest':
            $cd_usuario=$usu->cd_usuario;
            $datos=json_decode( filter_input($REQ, 'datos', FILTER_UNSAFE_RAW) );
            $cd_test=$md->creaBorradorTest($datos, $cd_usuario);

            $ret=array('retorno' => 1, 
                        'cd_test'=>$cd_test,
                        'sql' => $md->__logSQL(),);
            echo json_encode($ret);
            break;
        case 'like+':
        case 'like-':
            $cd_usuario=$usu->cd_usuario;
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);

            $md->toggleLike($accion, $cd_usuario, $cd_test);

            $ret=array('retorno' => 1, 
                    'sql' => $md->__logSQL(),);
            echo(json_encode($ret));
            break;
        //--------------------------------------------------------
        case 'getMisGrupos':
            $cd_usuario=$usu->cd_usuario;
            $ret=array('retorno' => 1, 
                    'grupos'=>fnGetMisGrupos($cd_usuario),
                    'sql' => $md->__logSQL(),);

            echo json_encode($ret);
            break;
        case 'nuevoMsgGrupo':
            $cd_usuario=$usu->cd_usuario;
            $cd_grupo=filter_input($REQ, 'cd_grupo', FILTER_VALIDATE_INT);
            $msg=filter_input($REQ, 'msg', FILTER_SANITIZE_STRING);

            $md->nuevoMsgGrupo($cd_usuario, $cd_grupo, $msg);

            $datos=array('vista'=>'vistaSocial', 'accion'=>'nuevomsg', 
                        'cd_grupo'=>$cd_grupo, 'from'=>$cd_usuario, 'msg'=>$msg, 'f'=>date('d/m/Y H:i:s'));
            $md->sendPushGrupo($cd_grupo, $datos);

            $ret=array('retorno'=>1, 
                        'sql' => $conn->arrResultSet,
                        );
            echo json_encode($ret);
            break;
        case 'guardarGrupo':
            $cd_usuario=$usu->cd_usuario;

            $cd_grupo=filter_input($REQ, 'cd_grupo',  FILTER_VALIDATE_INT);
            $ds_grupo=filter_input($REQ, 'ds_grupo',  FILTER_SANITIZE_STRING);
            
            $esModif=filter_input($REQ, 'esModif',    FILTER_VALIDATE_INT);
            
            if (isset($_POST['esNuevo']))
                $esNuevo=filter_input($REQ, 'esNuevo',FILTER_VALIDATE_INT);
            else 
                $esNuevo=0;

            if (isset($_POST['esBorrado']))
                $esBorrado=filter_input($REQ, 'esBorrado',FILTER_VALIDATE_INT);
            else 
                $esBorrado=0;

            $miembros=filter_input($REQ, 'miembros', FILTER_UNSAFE_RAW);

            $bundle=array(
                'cd_grupo'=>$cd_grupo,
                'ds_grupo'=>$ds_grupo,
                'esNuevo'=>$esNuevo,
                'esModif'=>$esModif,
                'esBorrado'=>$esBorrado,
                'miembros'=>json_decode($miembros),
                );

            $ususQueNoExisten=$md->guardarGrupo($bundle, $cd_usuario);
            $ret=array('retorno'=>1, 
                        'grupos'=>fnGetMisGrupos($cd_usuario),
                        'usuariosQueNoExisten'=>$ususQueNoExisten,
                        'sql'=>$conn->arrResultSet,
                        );
            echo json_encode($ret);
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
            echo json_encode($ret);
            break;
        case 'logout':
            $conn->logInfo('Logout', 'LOGIN');
            session_destroy();

            $ret=array('retorno' => 1, 
                'sesionDestruida'=>1,
                'sql' => $md->__logSQL(),
                );
            echo json_encode($ret);
            break;
        default:
            trigger_error('¡Accion '. $accion . ' no implementada!');
        }
    
//     }
// catch (Exception $ee){
//     $ret=array('retorno'=>0, 
//                 'error'=>1, 
//                 'msgError'=>$ee->getMessage(),
//                 'sql' => $conn->arrResultSet,
//                 );
//     echo json_encode(array($ret));
//     }

function fnGetMisGrupos($cd_usuario){
    global $md;
    $gru=$md->getMisGrupos($cd_usuario);
    $arrIDs=array();
    for ($i=0; $i<count($gru->filas); $i++){
        $cd_grupo=$gru->filas[$i]['cd_grupo'];

        $gru->filas[$i]['miembros']=$md->getMiembrosGrupo($cd_grupo)->filas;
        $gru->filas[$i]['msg']=$md->getMsgGrupo($cd_grupo)->filas;
        }
    return $gru->filas;
    }
?>
