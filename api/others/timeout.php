<?php
    $connection = mysqli_connect("localhost", "root", "", "time-tracker-db") or die ("Database Error");

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);

    print_r($data);
    
    $email = $data["email"];
    $password = $data["password"];

    $response = mysqli_query($connection, "select id from user where email = '$email' and password = '$password'") or die("Insert Error");

    $records = mysqli_num_rows($response);

    if ($records > 1 ) {
        echo json_encode(array('message' => 'User is found', 'status' => 'success'));
    } else {
        echo json_encode(array('message' => 'Users is not found', 'status' => 'no_record_found'));

    }


?>