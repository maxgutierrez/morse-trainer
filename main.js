const display = document.querySelector('#display')
const botoes = document.querySelectorAll('button')
const alfabeto = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
const alfabetoMorse = {
  A:'•-', 
  B:'-•••', 
  C:'-•-•', 
  D:'-••', 
  E:'•', 
  F:'••-•',
  G:'--•', 
  H:'••••', 
  I:'••', 
  J:'•---', 
  K:'-•-', 
  L:'•-••',
  M:'--', 
  N:'-•', 
  O:'---', 
  P:'•--•', 
  Q:'--•-', 
  R:'•-•',
  S:'•••', 
  T:'-', 
  U:'••-', 
  V:'•••-', 
  W:'•--', 
  X:'-••-',
  Y:'-•--',
  Z:'--••'
}
function numAleatorioEntre(min, max) {//por padrão vai de 0 até o num designado
  return (parseInt(Math.random() * (max- min + 1)) + min)
}
const alfabetoMorseArray = Object.values(alfabetoMorse)
const numDeLetras = Object.values(alfabetoMorse).length
const numAleatorio = numAleatorioEntre(0,numDeLetras-1)
const letraAleatoria = alfabeto[numAleatorio]
const morseAleatorio = alfabetoMorse[letraAleatoria]

function mostrarMorse(){
  display.innerHTML = morseAleatorio
}

// click no btn
botoes.forEach(btn => {
  btn.addEventListener('click', function(){
    alert(btn.innerHTML)
  })
})
window.onload(
  mostrarMorse()
)
