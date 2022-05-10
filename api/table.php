<?php header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');
//Please create users database inside phpmysql admin and create userdetails tabel and create id, email and username fields
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "time-tracker-db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
    //get all users details
    $trp = mysqli_query($conn, "SELECT * from time_in ORDER BY id DESC");
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
   
    print json_encode($rows);
}
die();
?>