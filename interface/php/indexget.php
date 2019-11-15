<?php
    include('../../interface/lib/conn.php');

    $sql="select * from items";

    $res=$mysqli->query($sql);

    $arr=[];

    while($row=$res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json=json_encode($arr);

    echo $json;
    
    $mysqli->close();
?>