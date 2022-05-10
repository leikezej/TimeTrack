<?php
    session_start();
	session_destroy(); 
	header("Location: LoginP.php");
	$Message = "Logged Out";
	$response[] = array("Message" => $Message);
	echo json_encode($response);
?>

<?php

session_start();

if(isset($_SESSION['user_id']))
{
	unset($_SESSION['user_id']);

}

header("Location: login.php");
die;