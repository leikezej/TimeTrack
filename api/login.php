<?php

    $connection = mysqli_connect("localhost", "root", "", "time-tracker-db") or die ("Database Error");

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    
    $email = $data["email"];
    $password = hash('sha256',$data['password']);
    

    $response = mysqli_query($connection, "select * from user where email = '$email' and password = '$password' ") or die("Insert Error");

    $records = mysqli_num_rows($response);

    $data = mysqli_fetch_assoc($response);

    if ($records > 0 ) {
        echo json_encode(array('message' => 'User is found', 'status' => 'success', 'data' => $data ));
    } else {
        echo json_encode(array('message' => 'User is not found', 'status' => 'no_record_found'));
    }
    print_r($data);
?>