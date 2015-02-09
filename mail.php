<?php

if((isset($_POST['param1']) AND !empty($_POST['param1']))
    AND(isset($_POST['param2']) AND !empty($_POST['param2']))
    AND(isset($_POST['param4']) AND !empty($_POST['param4']))){

    $_POST['param2'] = htmlspecialchars($_POST['param2']);
    $_POST['param1'] = htmlspecialchars($_POST['param1']);
    $_POST['param4'] = htmlspecialchars($_POST['param4']);

    if (preg_match("#^[A-Za-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $_POST['param2'])){

        ?>
        {"error" : "false"}
        <?php

        $mail = 'florian.michel69250@gmail.com'; // Déclaration de l'adresse de destination.

        $passage_ligne = "\n";
        $nom = $_POST['param1'];
        $email = $_POST['param2'];

        //=====Déclaration des messages au format texte et au format HTML.
        $message_txt = nl2br($_POST['param4']);
        $message_html = nl2br($_POST['param4']);
        //==========

        //=====Création de la boundary
        $boundary = "-----=".md5(rand());
        //==========

        //=====Définition du sujet.
        $sujet = $_POST['param3'];
        //=========

        //=====Création du header de l'e-mail.
        $header = "From: \"$nom\"<$email>".$passage_ligne;
        $header.= "Reply-to: \"$nom\" <$email>".$passage_ligne;
        $header.= "MIME-Version: 1.0".$passage_ligne;
        $header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
        //==========

        //=====Création du message.
        $message = $passage_ligne."--".$boundary.$passage_ligne;
        //=====Ajout du message au format texte.
        $message.= "Content-Type: text/plain; charset=\"utf-8\"".$passage_ligne;
        $message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
        $message.= $passage_ligne.$message_txt.$passage_ligne;
        //==========
        $message.= $passage_ligne."--".$boundary.$passage_ligne;
        //=====Ajout du message au format HTML
        $message.= "Content-Type: text/html; charset=\"utf-8\"".$passage_ligne;
        $message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
        $message.= $passage_ligne.$message_html.$passage_ligne;
        //==========
        $message.= $passage_ligne."--".$boundary."--".$passage_ligne;
        $message.= $passage_ligne."--".$boundary."--".$passage_ligne;
        //==========

        //=====Envoi de l'e-mail.
        //mail($mail,$sujet,$message,$header);
        //==========

        //header('Location: index.html');
    }
    else{
        //header('Location: index.html');
        ?>
        {"error" : "true"}
    <?php
    }

}
else{
    //header('Location: index.html');
    ?>
    {"error" : "true"}
<?php
}
?>