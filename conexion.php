<?php


$host="sql105.infinityfree.com";
$usuario="if0_40161338";
$clave="72i7AUFG70WoEZB";
$base="if0_40161338_enviarform";


$conexion=mysqli_connect($host,$usuario,$clave,$base);

if(!$conexion){
    die('ERROR DE CONEXIÓN AL HOSTING.'.mysqli_connect_error());
    
}

?>