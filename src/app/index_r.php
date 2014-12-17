<?php
error_reporting(E_ALL | E_STRICT);
$usu=null;
global $tz;

$getopost=filter_input(INPUT_SERVER, 'REQUEST_METHOD', FILTER_SANITIZE_STRING);
$accion = ($getopost == 'GET')? filter_input(INPUT_GET, 'accion', FILTER_SANITIZE_STRING): filter_input(INPUT_POST, 'accion', FILTER_SANITIZE_STRING);
$REQ=($getopost == 'GET'?INPUT_GET:INPUT_POST);

require_once('metadatos.php'); 
try{
    @session_start();
    if ($accion=='login' || $accion=='loginNativo'){
        }
    else {
        $usu=new Usuario();//saca los datos de la sesión
        $_SESSION['LAST_ACTIVITY'] = time(); // update last activity time stamp
        $tz=$_SESSION['tz'];
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

global $showSQL;

$json_order=null;
try {
    switch ($accion) {
        case 'getPortadaTienda':
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
            $d2=array(
                 'ds_categoria'=>'(título dinamico los más valorados)',
                 'cd_categoria'=>-2,
                 'i'=>'fa-love',
                 'numtestsporcat'=>10, 'listarComoCategoria'=>1, 'cd_categoriapadre'=>null,
                 );
            /* 
            $d3=array(
                 'ds_categoria'=>'(título dinamico recomendaciones para ti)',
                 'cd_categoria'=>-3,
                 'i'=>'fa-birthday-cake',
                 'numtestsporcat'=>10, 'listarComoCategoria'=>1, 'cd_categoriapadre'=>null,
                 ); */
            array_splice($categorias, 0, 0, array($d2, $d1) );
            
            $tests=array(); $arrCats=array();
            for ($i=0; $i<count($categorias); $i++){
                $fila=$categorias[$i];

                if ($fila['cd_categoria']>0 && $fila['numtestsporcat']>0)
                    array_push($arrCats, $fila['cd_categoria'] );
                }
            $testsCat=$md->getPreviewCategoria($cd_usuario, $arrCats )->filas;
            // #optimizar: en vez de hacer merge, añadir únicamente aquellos tests que no estén ya
            $testsCat=array_merge($md->getPreviewCategoriaValorados($cd_usuario, -2)->filas, $testsCat);
            $testsCat=array_merge($md->getPreviewCategoriaNuevosActualizados($cd_usuario, -1)->filas, $testsCat);

            $ret=array('retorno' => 1, 
                       'categorias' => $categorias,
                       'tests' => convierteBoolLista($testsCat), 
                       'sql' => $md->__logSQL($showSQL),
                       );
            echo json_encode($ret);
            break;
        case 'getPreviewTest':
            $cd_usuario=$usu->cd_usuario;
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
           
            $ret=array('retorno' => 1, 
                        'test' => convierteBool( $md->getPreviewTest($cd_usuario, $cd_test) ), 
                        'sql' => $md->__logSQL($showSQL),
                       );
            echo json_encode($ret);
            break;
        case 'getTestComprado':
            $json_order=json_decode( filter_input($REQ, 'pruebaCompra', FILTER_UNSAFE_RAW) );
            $valido=$md->compruebaCert($json_order);
            if ($valido==0){
                $ret=array('retorno'=> 0, 
                            'error'=> 1,
                            'msgError'=> 'La firma de la orden de compra no coincide con la firma del desarrollador'
                       );
                echo json_encode($ret);
                return;
                }
            //sin break, continua a getTest
        case 'getTest':
            $cd_usuario=$usu->cd_usuario;
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
            
            $ret=array('retorno' => 1, 
                       'test' => convierteBool ($md->getTest($cd_usuario, $cd_test, $json_order) ),
                       'sql' => $md->__logSQL($showSQL),
                       );
            echo json_encode($ret);
            break;
        case 'getDatosTest': //datos generales
            $cd_usuario=$usu->cd_usuario;
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
            $ret=array('retorno' => 1, 
                    'test'=> $md->getDatosTest($cd_test),
                    'sql' => $md->__logSQL($showSQL),);

            echo json_encode($ret);
            break;
            break;
        case 'creaBorradorTest':
            $cd_usuario=$usu->cd_usuario;
            $datos=json_decode( filter_input($REQ, 'datos', FILTER_UNSAFE_RAW) );
            $cd_test=$md->creaBorradorTest($datos, $cd_usuario);

            $ret=array('retorno' => 1, 
                        'cd_test'=>$cd_test,
                        'sql' => $md->__logSQL($showSQL),);
            echo json_encode($ret);
            break;
        case 'like+':
        case 'like-':
            $cd_usuario=$usu->cd_usuario;
            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);

            $md->toggleLike($accion, $cd_usuario, $cd_test);

            $ret=array('retorno' => 1, 
                    'sql' => $md->__logSQL($showSQL),);
            echo(json_encode($ret));
            break;
        case 'buscaTests':
            $cd_usuario=$usu->cd_usuario;
            
            if (isset($_POST['search']) && $_POST['search']!=''){
                $q=filter_input($REQ, 'search', FILTER_SANITIZE_STRING);
                $res=convierteBoolLista($md->buscaTests($cd_usuario, $q) );
                }
            else if (isset($_POST['cd_test'])){
                $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
                $res=convierteBoolLista( array( $md->getPreviewTest($cd_usuario, $cd_test) ));
                }
            
            $ret=array('retorno' => 1, 
                        'tests' => $res, 
                        'sql' => $md->__logSQL($showSQL),
                       );
            echo json_encode($ret);
            break;
        //--------------------------------------------------------
        case 'getMisGrupos':
            $cd_usuario=$usu->cd_usuario;
            $ret=array('retorno' => 1, 
                    'grupos'=>fnGetMisGrupos($cd_usuario),
                    'sql' => $md->__logSQL($showSQL),);

            echo json_encode($ret);
            break;
        case 'nuevoMsgGrupo':
            $cd_usuario=$usu->cd_usuario;
            $cd_grupo=filter_input($REQ, 'cd_grupo', FILTER_VALIDATE_INT);
            $msg=null; $cd_test=null; $cd_badge=null;

            if (isset($_POST['msg']))
                $msg=filter_input($REQ, 'msg', FILTER_SANITIZE_STRING);

            if (isset($_POST['cd_test']))
                $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);

            $cd_mensaje=$md->nuevoMsgGrupo($cd_usuario, $cd_grupo, $msg, $cd_test, $cd_badge);
            $ret=array('retorno'=>1, 
                        'cd_mensaje'=>$cd_mensaje,
                        'sql' => $conn->arrResultSet,
                        );
            echo json_encode($ret);
            break;
        case 'getMsgMisGrupos':
            $cd_usuario=$usu->cd_usuario;
            $from=preg_replace('([^0-9/])', '', $_GET['from']); //fiter_sanitize_date
            $ret=array('retorno' => 1, 
                    'grupos'=>fnGetMisGrupos($cd_usuario, $from),
                    'sql' => $md->__logSQL($showSQL),);

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
        case 'compruebaCodigoPromocional':
            $cd_usuario=$usu->cd_usuario;
            $cod=filter_input($REQ, 'cod', FILTER_UNSAFE_RAW);
            $resp=$md->compruebaCodigoPromocional($cd_usuario, $cod);

            $ret=array('retorno'=> 1, 
                        'resp'=>    $resp,
                        'sql'=>     $md->__logSQL($showSQL),);
            echo(json_encode($ret));

            break;
        case 'informarErrorPregunta':
            $cd_usuario=$usu->cd_usuario;

            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
            $cd_pregunta=filter_input($REQ, 'cd_pregunta', FILTER_VALIDATE_INT);
            $motivo=filter_input($REQ, 'msg', FILTER_SANITIZE_STRING);

            $md->informarErrorPregunta($cd_usuario, $cd_test, $cd_pregunta, $motivo);
            $ret=array('retorno'=> 1, 
                        'sql'=>     $md->__logSQL($showSQL),);
            echo(json_encode($ret));
            break;
        case 'guardaResultadosTest':
            $cd_usuario=$usu->cd_usuario;

            $cd_test=filter_input($REQ, 'cd_test', FILTER_VALIDATE_INT);
            $datos_json=filter_input($REQ, 'datos', FILTER_UNSAFE_RAW);

            $md->guardaResultadosTest($cd_usuario, $cd_test, $datos_json);
            $ret=array('retorno'=> 1, 
                        'sql'=> $md->__logSQL($showSQL),);
            echo(json_encode($ret));
            break;
        //--------------------------------------------------------
        case 'loginNativo':
            $obj=json_decode( filter_input($REQ, 'datosUsu', FILTER_UNSAFE_RAW) );
            $tz=filter_input($REQ, 'tz', FILTER_SANITIZE_STRING);
            
            $datosUsu=array(
                'cd_usuario'=>$obj->email,
                'email'=>$obj->email,
                'family_name'=>$obj->family_name,
                'given_name'=>$obj->given_name,
                'picture'=>$obj->picture
                );

            Usuario::guardaEnSesion($datosUsu, $tz);
            $conn->logInfo('Login '.$datosUsu['cd_usuario'], 'LOGIN');

            $esUsuarioNuevo=$md->altaUsuario($datosUsu, $tz);

            $ret=array('retorno' => 1, 
                        'sql' => $md->__logSQL($showSQL), 
                        );
            echo json_encode($ret);
            break;
        case 'login':
            $token=filter_input($REQ, 'token', FILTER_SANITIZE_STRING);
            $tz=filter_input($REQ, 'tz', FILTER_SANITIZE_STRING);
            
            $datosUsu=$md->getGoogleUserProfile($token);
            Usuario::guardaEnSesion($datosUsu, $tz);
            $conn->logInfo('Login '.$datosUsu['cd_usuario'], 'LOGIN');

            $esUsuarioNuevo=$md->altaUsuario($datosUsu);

            $ret=array('retorno' => 1, 
                        'userData'=>$datosUsu, 
                        'esUsuarioNuevo'=>$esUsuarioNuevo,
                        'sql' => $md->__logSQL($showSQL), 
                        );
            echo json_encode($ret);
            break;
        case 'logout':
            $conn->logInfo('Logout', 'LOGIN');
            session_destroy();

            $ret=array('retorno' => 1, 
                'sesionDestruida'=>1,
                'sql' => $md->__logSQL($showSQL),
                );
            echo json_encode($ret);
            break;
        case 'sendPushDeviceID':
            $cd_usuario=$usu->cd_usuario;
            $cd_gcm=filter_input($REQ, 'cd_gcm', FILTER_UNSAFE_RAW);
            $md->guardaID_Dispositivo($cd_usuario, $cd_gcm);

            $ret=array('retorno' => 1, 
                        'sql' => $md->__logSQL($showSQL),);
            echo(json_encode($ret));
            break;
        default:
            trigger_error('¡Accion '. $accion . ' no implementada!');
        }
    
    }
catch (Exception $ee){
    $ret=array('retorno'=>0, 
                'error'=>1, 
                'msgError'=>$ee->getMessage(),
                'sql' => $conn->arrResultSet,
                );
    echo json_encode($ret);
    }

function fnGetMisGrupos($cd_usuario, $from=null){
    global $md;
    $gru=$md->getMisGrupos($cd_usuario);
    $arrIDs=array();
    for ($i=0; $i<count($gru->filas); $i++){
        $cd_grupo=$gru->filas[$i]['cd_grupo'];

        $gru->filas[$i]['miembros']=$md->getMiembrosGrupo($cd_grupo)->filas;
        $gru->filas[$i]['msg']=$md->getMsgGrupo($cd_grupo, $from)->filas;
        }
    return $gru->filas;
    }
function convierteBoolLista($lista){
    for ($i=0; $i<count($lista); $i++){
        $lista[$i]=convierteBool($lista[$i]);
        }
    return $lista;
    }
function convierteBool($el){
    if (isset($el['lotengo'])){
        $el['lotengo']= ($el['lotengo']=='1');
        return $el;
        }
    }
?>
