<?php

 include 'db.php';

 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 $json = file_get_contents('php://input');

 $data = json_decode($json,true);

 $email = $data['email'];

//  $password = $data['password'];
 $password = hash('sha256',$data['password']);

 $Sql_Query = "select * from user where email = '$email' and pass = '$pass' ";

 $check = mysqli_fetch_array($con, $Sql_Query);

 if(isset($check)){
     $SuccessLoginMsg = 'Data Matched';

     $SuccessLoginJson = json_encode($SuccessLoginMsg);

     echo $SuccessLoginJson ; 

 } else{

     $InvalidMSG = 'Invalid Username or Password Please Try Again' ;

     $InvalidMSGJSon = json_encode($InvalidMSG);

     echo $InvalidMSGJSon ;

 }
 mysqli_close($con);
?>