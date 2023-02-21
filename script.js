// 1º paso: Seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
scoreField.textContent = 10

// Numero aleatorio del 1 al 20
//let secretNumber = Math.trunc(Math.random() * 20) + 1

checkButton.addEventListener('click', alerta)

function alerta() {
  alert('You click me!')
}
