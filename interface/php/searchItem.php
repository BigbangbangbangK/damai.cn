<?php
    include('../../interface/lib/conn.php');

    $value=$_REQUEST['value'];

    $sql="select * from items where (title like '%$value%')";

    $res=$mysqli->query($sql);

    $arr=[];

    while($row=$res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json=json_encode($arr);

    echo $json;
    
    $mysqli->close();



// include("链接文件路径");
// $搜索的关键字=$_POST[搜索的关键字];
// $sql1=mysql_query("select * from 数据库表名 where (数据库字段 like'%$搜索的关键字%')");
// $info1=mysql_fetch_array($sql1);

//  do { 
//  echo $info1['要显示的搜索结果字段']; 
//  } while ($info1 = mysql_fetch_assoc($sql1)); 
?>



