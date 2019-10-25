<?php
    //Call connectionDB file
    include("connectionDB.php");
    //Get XML input values
    $Email = $_POST['email'];
    //$Passwd = $_POST['password'];
    //$Fname = $_POST['fname'];
    
    //Create SQL INSERT
    $sql = "INSERT INTO users (email) VALUES('$Email')";
    //Execute SQL and validate operation
    if ($conn->query($sql) === TRUE){
        echo "User has been registered into Data Base";
    }else{
        die("The error is: " . $conn->error);
    }
?>