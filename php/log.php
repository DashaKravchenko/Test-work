
<?php

$db_host = "localhost";
$db_user = "root";
$db_password = "root";
$db_base = "form";

$pdo = new PDO("mysql:host=$db_host;dbname=$db_base;charset=utf8", $db_user, $db_password);


$username = $_POST['user_name'];
$password = $_POST['password'];

$sql = "SELECT name, password FROM id WHERE name = '$username' OR password = '$password' LIMIT 2 ";
$query = $pdo->prepare($sql);
$query->execute([$username, $password]);
$username= $query->fetch();
if ($username) { 
    echo('вы вошли');
} else {
    echo('такой пользователь не существует');
}
