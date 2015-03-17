<?php

if((isset($_POST['user_name']) AND !empty($_POST['user_name']))
AND(isset($_POST['user_mail']) AND !empty($_POST['user_mail']))
AND(isset($_POST['user_mess']) AND !empty($_POST['user_mess']))){
	
	$_POST['user_mail'] = htmlspecialchars($_POST['user_mail']);
	$_POST['user_name'] = htmlspecialchars($_POST['user_name']);
	$_POST['user_mess'] = htmlspecialchars($_POST['user_mess']);
	
	if (preg_match("#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $_POST['user_mail'])){
		
		$mail = 'florian.michel69250@gmail.com'; // Déclaration de l'adresse de destination.
		
			$passage_ligne = "\n";
			$nom = $_POST['user_name'];
			$email = $_POST['user_mail'];
			
		//=====Déclaration des messages au format texte et au format HTML.
		$message_txt = nl2br($_POST['user_mess']);
		$message_html = nl2br($_POST['user_mess']);
		//==========
		 
		//=====Création de la boundary
		$boundary = "-----=".md5(rand());
		//==========
		 
		//=====Définition du sujet.
		$sujet = $_POST['user_subject'];
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
		mail($mail,$sujet,$message,$header);
		//==========
		
			 
		  header('Location: index.html');
	}
	else{
	?>
    <!doctype html>
    <html lang="fr">
    <head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    </head>
    <html>
    <body>
	<p style="color:red; font-size:20px;">ERREUR : l'adresse email n'est pas valide !</p>
    </body>
	</html>
	<script> 
    setTimeout(function(){document.location.href="index.html#contactPage"}, 3000);
    </script>
    <?php
	}
		
}
else{
	?>
    <!doctype html>
    <html lang="fr">
    <head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    </head>
    <html>
    <body>
	<p style="color:red; font-size:20px;">ERREUR : Remplissez bien les champs nom, email et message</p>
    </body>
	</html>
	<script> 
    setTimeout(function(){document.location.href="http://prototype.florianmichel-online.com/index.html#end"}, 3000);
    </script>
    <?php
}
?>

