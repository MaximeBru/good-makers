$(document).ready(function(){

	/*
	Fonction pour gérer le - et le +
	*/
	function moreOrLess(divNumber, prix){
		/* Définir la varible quantité */
		var amount = 0;
		var totalPrice = 0;

		var commandeFinale = $('#totalCommande');

		$('div').eq(divNumber).find('.fa-minus').click(function(){

			if( amount > 0 ){
				amount--;
				totalPrice -= parseInt(prix);

				$('div').eq(divNumber).find('.totalBottlePrice').text(totalPrice);

				var commandeFinaleInt = parseInt(commandeFinale.text());
				var newPrice = commandeFinaleInt -= parseInt(prix);

				commandeFinale.text(newPrice);

				$(this).next().text(amount);
			};
		});

		$('div').eq(divNumber).find('.fa-plus').click(function(){
			amount++;
			totalPrice += parseInt(prix);

			$('div').eq(divNumber).find('.totalBottlePrice').text(totalPrice);

			var commandeFinaleInt = parseInt(commandeFinale.text());
			var newPrice = commandeFinaleInt += parseInt(prix);

			commandeFinale.text(newPrice);

			$(this).prev().text(amount);
			
		});
	};


	/*
	Fonction pour ajouter des DIV dans le form
	*/
	function addNewDiv(title, bouteille){
		/* Ajouter une balise dans #bottleList */
		$('#bottleList').append(''+
			'<div>'+
				'<i class="fa fa-minus" aria-hidden="true"></i>'+
				'<span>0</span>'+
				'<i class="fa fa-plus" aria-hidden="true"></i> '+
				'<span>' + title + ' ' + bouteille + '</span>'+
				'<span><b class="totalBottlePrice">0</b>€ttc</span>'+
			'</div>'
			);
	};

	/*
	Fonction pour ajouter des article de vin
	*/
	function addNewBottle(img, imgAlt, nom, desc, prix){
		/* Ajouter une balise dans #bottleList */
		$('#presentation').append(''+
			'<article>'+
				'<img src="'+ img +'" alt="'+ imgAlt +'">'+
				'<h2>'+ nom +'</h2>'+
				'<p>'+ desc +'</p>'+
				'<em>'+ prix +'</em>'+
			'</article>'
			);
	};


	$.ajax({
		type: 'GET',
		url: 'json/data.json',
		dataType: 'json',

		success: function(data){

			for(var i = 0; i < data.length; i++){

				addNewDiv( data[i].title, data[i].bouteille );

				addNewBottle(data[i].cover, data[i].coverDesc, data[i].title, data[i].description, data[i].bouteille);

				moreOrLess(i, data[i].prix);
			}; 

		},

		error: function(){
			console.log('Bad request...');
		}
	});
	/*gestion du formulaire de commande*/
	$('form').submit(function(e){
		e.preventDefault();

		var totalNewUserCommande = parseInt($('#totalCommande').text() );

		if(totalNewUserCommande >= 20 && $('#nameUser').val().length >1 && $('#mailUser').val().length>5 && $('#phoneUser').val().length>=1){


			$.ajax({
				type:'POST',
				url:'http://www.digitalworkshop.fr/DWSapi/mailUser.php',
				data:'userName='+$('#nameUser').val()+'&userEmail='+$('#mailUser').val()+'&userPhone='+$('#phoneUser').val()+'&newUserCommande='+$('#bottleList').html()+'&totalCommande='+ totalNewUserCommande,

				succes:function(data){
					console.log('le message a bien été envoyé')
				},
				error:function(){
					console.log('probleme d\'envoie')
				}
			});


		}else{
			console.log("tous les champs sont obligatoires");
		};
	});
	

});