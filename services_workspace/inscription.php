<?php
	include("db_connect.php");
	include("user_crud.php");

	
	if (isset($_POST['name']) && $_POST['password']){
		$name = $_POST["name"];
		$password = $_POST["password"];
		
		$password_crypte = hash('sha256', $password);

		$sql = "SELECT name, password FROM `user`";
		$query = mysqli_query($conn, $sql);
		$deja_present = false;

		while($result = mysqli_fetch_assoc($query)){
			if ($name == $result['name'] && $password_crypte == $result['password']){
				$deja_present = true;
			}
		}
		if ($deja_present){
			echo "<p>Veuillez essayer un autre name ou mot de passe</p>";
		} else {
			insert_user($conn, $name, $password_crypte);
			// header('Location: faire revenir sur la page de connexion');
		}
		
	}
	include "db_disconnect.php";