<?php
ob_start();
session_start();
if(isset($_SESSION['user_login_id'])) {
session_destroy();
unset($_SESSION['user_id']);
unset($_SESSION['user_name']);
unset($_SESSION['user_email']);
unset($_SESSION['user_mobile']);
header("Location: login.php");
} else {
header("Location: login.php");
}
?>

<?php

session_start();

if(isset($_SESSION['user_id']))
{
	unset($_SESSION['user_id']);

}

header("Location: login.php");
die;