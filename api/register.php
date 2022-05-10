<?php
    $CN = mysqli_connect("localhost", "root", "", "time-tracker-db") or die ("Database Error");
    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    
    // $EncodedData = file_get_contents('php://input');
    // $DecodedData = json_decode($EncodedData, true);

    $name=$data["name"];
    $email=$data["email"];
    $phone=$data["phone"];
    // $password=$data['password'];
    // $passwordConfirm=$data['passwordConfirm'];
    
    // $password = md5($data['password']); 
    // $passwordConfirm = md5($data['passwordConfirm']); 
    $password = hash('sha256',$data['password']);
    $passwordConfirm = hash('sha256',$data['passwordConfirm']);

    // $name=$DecodedData["name"];
    // $email=$DecodedData["email"];
    // $phone=$DecodedData["phone"];
    // $password = hash('sha256',$DecodedData['password']);
    // $passwordConfirm = hash('sha256',$DecodedData['passwordConfirm']);

    // $password = hash('md5',$obj['password']);
    // $passcopy=$data["password"];
    // $password=$data["password"];
    // $passwordConfirm=$data["passwordConfirm"];
    // $roles=$obj['roles'];
    
    $IQ="INSERT INTO user (name, email, phone, password, passwordConfirm) VALUES ('$name', '$email', '$phone', '$password', '$passwordConfirm')";
    
    // $register = mysqli_query($CN, $IQ)
    
    // if ($register)
    //     $Message  = " User Has Been Registered Successfully";
    // else
    //     $Message = "Server Error. . . Registration Failed";
        
    // $Response[] = array("Message" => $Message);
    // echo json_encode($Response);
    
    
    $R=mysqli_query($CN, $IQ);
    
    if ($R > 0 ) {
        echo json_encode(array('message' => 'Successfully Registered', 'status' => 'nayswan', 'data' => $data ));
    } else {
        echo json_encode(array('message' => 'Registration has Failed', 'status' => 'unexpected error'));
    }
?>
