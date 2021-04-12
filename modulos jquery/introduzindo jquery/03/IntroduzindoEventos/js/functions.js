$(function () {

	function validarCliqueHover() {
		$('.artigo1').click(function () {
			$('.artigo2').css('background-color', 'purple');
		});

		$('.artigo1').hover(function () {//hove evento de quando passa o mause encima
			$('.artigo2').css('background-color', 'red');
		}, function () {
			$('.artigo2').css('background-color', ' rgb(100,100,100)');
		})
	}

	function validarFormulario() {

		$('textarea').focus(function () {
			//Executa alguma função quando existe foco no elemento.
			console.log("Foco!");
		}).blur(function () {
			//Executa uma função quando retiramos o foco.
			console.log("Retiramos o foco!");
		})

		$('select').change(function () {
			console.log("Meu select foi alterado!");
		})
		/*funcao para evitar que au clicar no link nao seja direcionado para outra pagina
				$('a').click(function(e) {
					e.preventDefault();
					ou return false;
				})*/
	}


	validarFormulario();
	validarCliqueHover();




});