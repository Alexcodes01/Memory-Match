// constants
const total cards =16
const card images = [ ]

// variables (state)
let flippedCards = []
let matchedCards = []
let timer =0
let time = 0
let isFlipped = false

// Cached element references
const Game = document.querySelector(`Game`)
const timerDisplay = document.getElementById(`time`)
const winMessage = document.getElementById (`Win`)
const lossMessage = document.getElementById (`Lose`)
const restartButton = document.getElementById (`restart button`)

// event listeners 
Game.addEventListener (`click`, handleCardClick)
restartButton.addEventListener(`click`, restartGame)

// Functions
function intializeGame(){
  const shuffledCards = shuffleArray(shuffledImages))
}
shuffledImages.push(cardImages)
shuffledImages.push(cardImages)
shuffleArray(shuffledImages)
// linking card images with itself will create pairs of images for the game.
for (let i = 0; i < shuffledImages.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.setAttribute('data-index', i)
  card.style.backgroundImage = `url(${shuffledImages[i]})`
  gameBoard.appendChild(card);
}
// Function for shufflings (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  [array[i], array[j]] = [array[j], array[i]]
}
return array;
}
function checkForMatch(){

}
function updateTimer(){

}
function displayWinMessage(){

}
function displayLossMessage(){

}
function restartGame(){

}
document.addEventListener(intializeGame)


