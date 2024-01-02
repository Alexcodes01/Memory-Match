// constants
const total_cards =16
const card_images = [ ]

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


