<?php
    include('../lib/conn.php');

    $phone=$_REQUEST['phone'];
    $password=$_REQUEST['password'];

    $sql="select phone, email,pass from user where (phone='$phone' or email='$phone') and pass='$password'";
    $result=$mysqli->query($sql);

    if($result->num_rows>0){
        echo '{"msg":"登陆成功"}';
    }else{
        echo '{"msg":"账号或密码错误"}';
    }

    $mysqli->close();


?>