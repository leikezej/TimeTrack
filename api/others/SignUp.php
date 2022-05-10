<?php
// include('db.php');
$connection = mysqli_connect("localhost", "root", "", "time-tracker-db") or die ("Database Error");

$name = $data['name'];
$fullname = $data['fullname'];
$username = $data['username'];
$email = $data['email'];
$phone = $phone['phone'];
$password = $data['passwordConfirm'];
$passwordConfirm = $data['passwordConfirm']

$query = "SELECT * FROM user WHERE Email = '$Email'";
$query_result = mysqli_query($connect_db, $query);

if (!mysqli_num_rows($query_result))
{
    $Reg_Query = "INSERT INTO registrationapp_react(`First_Name`, `Last_Name`, `Email`, `Password`) VALUES ('$First_Name', '$Last_Name', '$Email', '$Password')";
    $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);

    if ($Reg_Query_Result) 
	{
        $Message = "Registered successfuly!";
    } else 
	{
        $Message = "Error - Try again";
    }
	
} else 
{
    $Message = "User Already Registered";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
?>