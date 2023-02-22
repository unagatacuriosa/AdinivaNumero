// 1º paso: Seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessButton = document.querySelector('.guess')
const highscoreButton = document.querySelector('.highscore')
const messageButton = document.querySelector('.message')
const numberButton = document.querySelector('.number')

//Control por consola de las variables
/*console.log(
  scoreField,
  checkButton,
  againButton,
  guessButton,
  highscoreButton,
  messageButton,
  numberButton
)*/

// 2º paso: Crear las variables que necesitamos
const score = 20
const highscore = 0

// Obtener número aleatorio
const MIN_NUMBER = 1
const MAX_NUMBER = 20
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER

const number = guessField.value

// Control 2 por log
console.log(`El número es ${secretNumber}`)
console.log(`El número ingresado es ${number}`)
// 3º Crear ls funciones que necesitamos

checkButton.addEventListener('click', alerta)
againButton.addEventListener('click', alerta)

function alerta() {
  alert('You click me!')
}
//scoreField.textContent = 20
