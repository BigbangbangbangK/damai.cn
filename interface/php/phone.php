<?php
    include('../lib/conn.php');

    $phone=$_REQUEST['phone'];

    $sql = "select * from user where phone='$phone'";
    $result = $mysqli->query($sql); //执行查询语句
    
    if($result->num_rows>0){
        echo '{"msg":"已注册"}';
    }else{
        echo '{"msg":"未被注册"}';
    }

    $mysqli->close();

    ?>