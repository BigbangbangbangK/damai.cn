<?php
    include('../lib/conn.php');

    $id=$_REQUEST['id'];

    $sql = "select * from items where id in ($id)";
    
    $res=$mysqli->query($sql);

    $arr=[];

    while($row=$res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json=json_encode($arr);

    echo $json;

    $mysqli->close();

?>