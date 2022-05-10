<?php
 
include 'db.php';
 
 $con = mysqli_connect('localhost', 'root', '', 'time-tracker-db');
 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
 
$name = $obj['name'];
 
$time = $obj['time'];

$date = $obj['date'];

$datetime = $obj['datetime'];

$Sql_Query = "insert into timelogs (name,time,date,datetime) values ('$name','$time','$date','$datetime')";
 
 if(mysqli_query($con,$Sql_Query)){
 
$MSG = 'Data Inserted Successfully into MySQL Database' ;
 
$json = json_encode($MSG);
 
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>