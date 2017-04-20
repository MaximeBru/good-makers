$(document).ready(function(){

	 $('form').submit(function(e){
	 	e.preventDefault();

	 	$.ajax({
	 		type:'POST',
	 		url:'http://www.digitalworkshop.fr/DWSapi/mailUser.php',
	 		data:'userName='+$('#userEmail').val()+'&userEmail='+$('#userEmail').val()+'&userPhone='+$('#userPhone').val()+'&newUserCommande='+$('#userCommande').val()+'&totalCommande='+$('#userTotal').val(),

	 		succes:function(data){
	 			console.log('le message a bien été envoyé')
	 		},
	 		error:function(){
	 			console.log('probleme d\'envoie')
	 		}
	 	});
	 });



});