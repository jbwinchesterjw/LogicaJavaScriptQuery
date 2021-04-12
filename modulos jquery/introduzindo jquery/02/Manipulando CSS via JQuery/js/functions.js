$(function(){
	
	$('.artigo1 > p').css('color','rgba(0,0,0,0.6)');
	console.log($('.artigo1 > p').css('color'));
});

$(function(){
	setTimeout(function(){
		$('#teste.artigo1').css('background-color', 'green');
	},2000);
});

