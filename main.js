
function numAleatorioEntre(min, max) {//por padrão vai de 0 até o num designado
  return (parseInt(Math.random() * (max- min + 1)) + min)
}
const display = document.querySelector('#display')
const botoes = document.querySelectorAll('button')
const showPontuacao = document.querySelector('#pontuacao')
const info = document.querySelector('#info')
const alfabeto = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
const alfMorse = [
  "•-", 
  "-•••", 
  "-•-•", 
  "-••", 
  "•", 
  "••-•", 
  "--•", 
  "••••", 
  "••", 
  "•---", 
  "-•-", 
  "•-••", 
  "--", 
  "-•", 
  "---", 
  "•--•", 
  "--•-", 
  "•-•", 
  "•••", 
  "-", 
  "••-", 
  "•••-", 
  "-••-", 
  "-•--", 
  "--••"
]

const numAleatorio = ()=> numAleatorioEntre(0, showPontuacao.innerHTML)
const morseAleatorio = ()=> alfMorse[numAleatorio()]
const mostrarMorse = ()=> display.innerHTML = morseAleatorio()
const certoOuErrado = (txt, time)=>{
  info.innerHTML = txt
  setInterval(() => {
    info.innerHTML = '-'
  }, time);
}


// CLICK NO BOTAO
botoes.forEach(btn => {
  btn.addEventListener('click', function(){

    const escolhido = alfabeto.indexOf(btn.innerHTML) // index da letra no []
    const morse = display.innerHTML //morse
    const pontoAtt = parseInt(showPontuacao.innerHTML)

    if (alfMorse[escolhido] == morse){
      showPontuacao.innerHTML = pontoAtt + 2
      certoOuErrado('ACERTOU !', 2500)
      mostrarMorse()

    } else {
      showPontuacao.innerHTML = pontoAtt - 2
      certoOuErrado(`${alfabeto[alfMorse.indexOf(morse)]}`, 2000)

      
    }
  })
})

mostrarMorse()
