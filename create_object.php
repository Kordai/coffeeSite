<?php 
    $response = array();
 
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['text'])) {
 
    $name = urldecode($_POST['name']);
    $email = $_POST['email'];
    $text = urldecode($_POST['text']);
    
 
    require 'db_connect.php';
 
    $db = new DB_CONNECT();
 
    $result = mysql_query("INSERT INTO otziv(name, email, text) VALUES('$name', '$email', '$text')");
 
    if ($result) {
        $response["success"] = 1;
        $response["message"] = "Product successfully created.";
 
        echo json_encode($response);
    } else {
        $response["success"] = 0;
        $response["message"] = "Oops! An error occurred.";
 
        echo json_encode($response);
    }
} else {
    $response["success"] = 0;
    $response["message"] = "Required field(s) is missing";
 
    echo json_encode($response);
}
?>