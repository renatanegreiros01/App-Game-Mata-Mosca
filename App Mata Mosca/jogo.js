var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	
	criaMoscaTempo = 1500
} else if(nivel === 'dificil') {
	
	criaMoscaTempo = 1000
} else if(nivel === 'chucknorris') {
	
	criaMoscaTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth


console.log(largura,altura)

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'



	} else{
	document.getElementById('cronometro').innerHTML = tempo	

	}
	
	},1000)

function posicaoRandomica(){

	if (document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		if (vidas > 3) {

			window.location.href = 'fim_de_jogo.html'

		} else {

     		document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

		vidas++
	}
}

	var posicaox =  Math.floor(Math.random() * largura) - 90
	var posicaoy =  Math.floor(Math.random() * altura) - 90

	posicaox = posicaox < 0 ? 0 : posicaox
	posicaoy = posicaoy < 0 ? 0 : posicaoy

	console.log(posicaox, posicaoy)


	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = posicaox + 'px'
	mosca.style.top = posicaoy + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosca)
}

function tamanhoAleatorio(){
	 var classe = Math.floor(Math.random() * 3)

	 switch(classe){
	 	case 0:
	 		return 'mosca1'

	 	case 1:
	 		return 'mosca2'

	 	case 2:
	 		return 'mosca3'
	 }
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	 switch(classe){
	 	case 0:
	 		return 'ladoA'

	 	case 1:
	 		return 'ladoB'

	}
}