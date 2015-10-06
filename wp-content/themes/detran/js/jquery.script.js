$(function(){
	$("#access").corner("10px;");
	$("#primary").corner("10px;");
	$("#secondary").corner("10px;");
	
	$("#access #menuBtBck").corner();
	
	$("access ul button").click(function(){
		$(this).parent().parent().addClass();
	});
	
	console.log(jQuery.browser);
});

			 var andaPre = 180;
			var intervaloPre = 40;
			var posicaoPre=0;
				function animacaoPre(){
				posicaoPre -=andaPre;
				if(posicaoPre<=-1080){
					posicaoPre = 0;
				}
				$("#preloadAnimacao").css("background-position",posicaoPre+"px " + "0px");

			}
		
		var fpsPre = setInterval(animacaoPre,intervaloPre);
		
		var loader = new PxLoader(), 
    	sombra = loader.addImage('sombra.png'), 
   		predios = loader.addImage('predios.png'), 
    	roda = loader.addImage('roda.png'),
    	moto = loader.addImage('moto.png'),
    	placa = loader.addImage('#moto');
    	console.log(placa);
    	loader.addCompletionListener(function() { 
    	console.log("oi");	
    	$("#preload").css("display","none");
    	$("#animacao").css("display","block");
    	animacao();
    	
		}); 
		loader.start();
		function animacao(){
		 // animação Prédios
				var decremento = 3.5;
			var intervaloPredios = 5;
			var posicaoPredios=0;
			function animacaoPredios(){
				posicaoPredios-=decremento;
				if(posicaoPredios <=-947){
					posicaoPredios = 0;
				}
				$("#predios").css("background-position",posicaoPredios+"px " + "0px");
				
			}
			var fpsPredios = setInterval(animacaoPredios,intervaloPredios);

			//animação Rodas
			var anda = 86;
			var intervaloRodas = 10	;
			var posicaoRodas=0;
			function animacaoRodas(){
				posicaoRodas -=anda;
				if(posicaoRodas<=-2580){
					posicaoRodas = 0;
				}
				$(".rodas").css("background-position",posicaoRodas+"px " + "0px");

			}
			var fpsRodas = setInterval(animacaoRodas,intervaloRodas);
			//Animação Placa		
			var decrementaPlaca=2;
			var intervaloPlaca = 2;
			var posicaoPlaca = 930;
			var fpsPlaca;
			function animacaoPlaca(){
				posicaoPlaca -=decrementaPlaca;
				if(posicaoPlaca<=0){
					clearInterval(fpsPredios);
					clearInterval(fpsRodas);
					clearInterval(fpsPlaca);	
					clearInterval(contadorSegundos);
				}
				$("#placa").css("margin-left",posicaoPlaca);
			 }
			
			 //Contador
			var cont = 0;
			 function contador(){
				 cont ++;
				 console.log(cont);
				 if(cont==5){
					 console.log(cont);
					 fpsPlaca = setInterval(animacaoPlaca,intervaloPlaca);
 					
				 }
			}
			var contadorSegundos = setInterval(contador,500);
			var cont2=0;
			
	
	
}