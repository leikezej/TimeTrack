<?php
	include 'db.php';
	 
	 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	 
	 $request_body = file_get_contents('php://input');
	 
	 $data = json_decode($request_body,true);
	
	$name= $data['name'];
	$date= $data['date'];
	$time = $data['time'];
	 
	$Sql_Query = "insert into time_in (name, date, time) values ('$name', '$date', '$time')";
	 
    if(mysqli_query($con,$Sql_Query)){
	 
        $MSG = 'Successfully TimeOut' ;
         
        $json = json_encode($MSG);
         
         echo $json ;
 
 }
 else{
 
        echo 'Something Went Wrong';
 
 }
mysqli_close($con);
	
?>