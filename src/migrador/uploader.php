<?php

$uploaddir = dirname(__FILE__).'/files/';

$n1=$_FILES['ctlArchivoPreguntas']['name'];
$n2=$_FILES['ctlArchivoRespuestas']['name'];

$f1 = $uploaddir . basename($n1);
$f2 = $uploaddir . basename($n2);

move_uploaded_file($_FILES['ctlArchivoPreguntas']['tmp_name'], $f1);
move_uploaded_file($_FILES['ctlArchivoRespuestas']['tmp_name'], $f2);

header('Location: ./index.html?f1=files/'.$n1.'&f2=files/'.$n2);
die();
?>