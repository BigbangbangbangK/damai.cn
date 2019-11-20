<?php
    include('../lib/conn.php');

    $phone=$_REQUEST['phone'];
    $password=$_REQUEST['password'];


    $sql = "select * from user where phone='$phone'";
    $result = $mysqli->query($sql); //执行查询语句

    if($result->num_rows>0){
        echo '{"msg":"用户名已存在"}';
        $mysqli->close();
        die;
    }

    $sqli="insert into user (phone,pass,email) values('$phone','$password','NUll')";

    $res=$mysqli->query($sqli);

    if($res){
        echo '{"msg":"注册成功"}';
    }

    $mysqli->close();

?>