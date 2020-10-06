<?php

$db_host = "localhost";
$db_user = "root";
$db_password = "root";
$db_base = "form";

$pdo = new PDO("mysql:host=$db_host;dbname=$db_base;charset=utf8", $db_user, $db_password);

$email = $_POST['email'];
$name_reg = $_POST['name_reg'];
$pass_reg = $_POST['pass_reg'];

$stmt = $pdo->prepare('INSERT INTO id (email, name, password) VALUES(?,?,?)');
$result = $stmt->execute([$email, $name_reg, $pass_reg]);

if ($result){
    echo "Информация занесена в базу данных";
}else{
    echo "Информация не занесена в базу данных";
}










