<?php

include('conexion.php');

$nombre=$_POST['Nombre'];
$email=$_POST['Email'];
$mensajes=$_POST['mensajes'];


$sql="INSERT INTO suscriptores(Nombre,Email,mensajes) VALUES('$nombre','$email','$mensajes')";

if(mysqli_query($conexion,$sql)){
    echo'Registro Exitoso.';}
else{
    echo 'Error en el registro'.mysqli_error($conexion);
}

mysqli_close($conexion);
?>