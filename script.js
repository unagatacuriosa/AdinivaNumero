// 1º paso: Seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessField = document.querySelector('.guess')
const highscoreField = document.querySelector('.highscore')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')

// 2º paso: Crear las variables que necesitamos
let score
let highscore

// Obtener número aleatorio
const MIN_NUMBER = 1
const MAX_NUMBER = 20
let secretNumber

fnIniApp()

// 3º Capturar el checkButton y agregarle un evento y mostrar un mensaje
checkButton.addEventListener('click', fnCheckButton)

function mostarMensaje(mensaje) {
  messageField.textContent = mensaje
}

function fnCheckButton() {
  // Aunque guessField sea un input number su valor en un string
  const number = Number(guessField.value)

  console.log(`El número ingresado es ${number}`)
  if (number === secretNumber) {
    messageField.textContent = 'WIN!'

    if (score > highscore) {
      // Actualizar el highscore en el DOM y en el localStorage
      highscore = highscoreField.textContent = score
      localStorage.setItem('highscore', score)
    }
    // Cambiar el color del fondo o del body o lo que sea
    numberField.textContent = secretNumber
    document.body.style.backgroundColor = '#004900'
  } else if (score === 1) {
    mostarMensaje('YOU LOSE')
    scoreField.textContent = 0
    document.body.style.backgroundColor = '#7E041A'
  } else {
    const mensaje =
      number < secretNumber ? 'El número es mayor' : 'El número es menor'
    mostarMensaje(mensaje)
    score--
    scoreField.textContent = score
  }
}

// Otra vez
againButton.addEventListener('click', fnIniApp)

function fnIniApp() {
  score = 20
  scoreField.textContent = score
  guessField.value = ''
  highscore = localStorage.getItem('highscore') || 0
  highscoreField.textContent = highscore
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER
  mostarMensaje('Empieza a adiviar...')
  document.body.style.backgroundColor = '#222'
  numberField.textContent = '?'
  console.log(`El número es ${secretNumber}`)
}
