
<?php
    $HostName='localhost';
    $HostUser='root';
    $HostPass='';
    $DatabaseName = "time-tracker-db";
    
    $encodedData = file_get_contents('php://input');  // take data from react native fetch API
    $decodedData = json_decode($encodedData, true);
    
    $conn=mysqli_connect($HostName,$HostUser,$HostPass,"$DatabaseName");
      if(!$conn){
          die('Could not Connect MySql Server:' .mysql_error());
        }
?>