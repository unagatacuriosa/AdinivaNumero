// 1º paso: Seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessButton = document.querySelector('.guess')
const highscoreButton = document.querySelector('.highscore')
const messageButton = document.querySelector('.message')
const numberButton = document.querySelector('.number')

console.log(
  scoreField,
  checkButton,
  againButton,
  guessButton,
  highscoreButton,
  messageButton,
  numberButton
)

scoreField.textContent = 20

// Numero aleatorio del 1 al 20
//let secretNumber = Math.trunc(Math.random() * 20) + 1

checkButton.addEventListener('click', alerta)
againButton.addEventListener('click', alerta)

function alerta() {
  alert('You click me!')
}
