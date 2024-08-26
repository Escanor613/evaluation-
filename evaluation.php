<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $n°permis=$_POST['numpermis'];
    $modele=$_POST['modele'];
    $securite=$_POST['securite'];
    $conduite=$_POST['conduite'];
    $confort=$_POST['confort'];

    $conx=mysqli_connect('localhost','root','','youssef');
    if(!$conx)
    {
        echo('erreur connexion');
    }
    $req="insert into evaluation values('$n°permis','$modele','$securite','$conduite','$confort')";
    $res=mysqli_query($conx,$req);
    if(!$res)
    {
        echo('aucune ligne insérée !!!');
    }
    else{
        echo('insertion valide avec succes');
    }
    mysqli_close($conx);


?>
</body>
</html>

