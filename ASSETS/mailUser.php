<?php
	
     $to      = $_POST['userEmail'];
     $subject = 'GOODMAKERS Merci pour votre commande '. $_POST['userName'] . '!';
     $message = '' .
     '<p style="color:#a70535; font-size:15px; margin-bottom:10px;"><b>Merci pour votre participation !</b></p>'.
     '<p style="margin:0 0 5px 0;">Nous vous recontacterons dans les plus brèfs délais pour vous avertir dès que votre commande est aivée.</p>'.
     '<p style="color:#a70535; font-size:15px; margin:10px 0;"><b>Récaputilatif de votre commande</b></p>'.
     '<table style="width:500px; text-align:left !important;">' . $_POST['newUserCommande'] . '</table>'.
     '<p style="color:#a70535; font-size:15px; border-top:1px dotted #a70535; border-bottom:1px dotted #a70535; padding:5px 0"><strong>Total de la commande : ' . $_POST['totalCommande'] . '€<strong></p>'.
     '<p style="margin:0 0 5px 0;"><b>Enregistrez votre date de réception dans votre agenda : </b> : '. $_POST['delivery'] . '</p>';
     '<p style="font-size:15px; margin:20px 0;">Merci et à très bientôt !</p>'.
     '<img src="http://primaveracinema.com/goodmakers/img/logo-white.jpg" alt="Logo Goodmakers" data-pin-nopin="true">';




     $headers = 'From: ' .$_POST['userEmail'] . "\r\n" .
     'Content-Type: text/html; charset=UTF-8' . "\r\n" .
     'Reply-To: '.$_POST['userEmail'] . "\r\n" .
     'X-Mailer: PHP/' . phpversion();

     mail($to, $subject, $message, $headers);
 ?>

